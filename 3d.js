import * as THREE from 'three';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const lowPower = navigator.hardwareConcurrency <= 2 || /Android|iPhone|iPad/i.test(navigator.userAgent);

/* ============ 1. HERO — частицы-сфера ============ */
function initHero() {
    const canvas = document.getElementById('hero3d');
    const hero = document.getElementById('hero');
    if (!canvas || !hero || reduce) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.z = 6.2;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const COUNT = lowPower ? 1800 : 4200;
    const R = 2.15;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const sizes = new Float32Array(COUNT);
    const cA = new THREE.Color('#e8a0c8');
    const cB = new THREE.Color('#c4a8e8');
    const cC = new THREE.Color('#8f7be8');
    const tmp = new THREE.Color();
    const golden = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < COUNT; i++) {
        const y = 1 - (i / (COUNT - 1)) * 2;
        const radius = Math.sqrt(1 - y * y);
        const theta = golden * i;
        const jitter = 1 + (Math.random() - 0.5) * 0.1;
        positions[i*3]   = Math.cos(theta) * radius * R * jitter;
        positions[i*3+1] = y * R * jitter;
        positions[i*3+2] = Math.sin(theta) * radius * R * jitter;
        const t = (positions[i*3+1] / R + 1) / 2;
        tmp.copy(cA).lerp(cB, t);
        if (Math.random() > 0.82) tmp.lerp(cC, 0.8);
        colors[i*3] = tmp.r; colors[i*3+1] = tmp.g; colors[i*3+2] = tmp.b;
        sizes[i] = 0.6 + Math.random() * 0.6;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uPixelRatio: { value: renderer.getPixelRatio() },
            uSize: { value: lowPower ? 7 : 9 }
        },
        vertexShader: `
            uniform float uTime, uPixelRatio, uSize;
            attribute vec3 color;
            attribute float aSize;
            varying vec3 vColor;
            varying float vAlpha;
            void main() {
                vec3 p = position;
                float wave = sin(p.y*3.0 + uTime*1.6)*0.06
                           + cos(p.x*2.4 + uTime*1.2)*0.05
                           + sin(p.z*2.8 + uTime*0.9)*0.05;
                p *= 1.0 + wave;
                vColor = color;
                vAlpha = 0.5 + 0.5*sin(uTime*1.8 + p.x*2.0);
                vec4 mv = modelViewMatrix * vec4(p, 1.0);
                gl_PointSize = uSize * aSize * uPixelRatio * (1.0 / -mv.z);
                gl_Position = projectionMatrix * mv;
            }
        `,
        fragmentShader: `
            varying vec3 vColor;
            varying float vAlpha;
            void main() {
                vec2 uv = gl_PointCoord - 0.5;
                float d = length(uv);
                if (d > 0.5) discard;
                float soft = smoothstep(0.5, 0.0, d);
                gl_FragColor = vec4(vColor, soft * vAlpha);
            }
        `,
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
    });

    const points = new THREE.Points(geo, material);
    scene.add(points);

    const target = { x: 0, y: 0 }, current = { x: 0, y: 0 };
    hero.addEventListener('pointermove', e => {
        const r = hero.getBoundingClientRect();
        target.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
        target.y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    }, { passive: true });
    hero.addEventListener('pointerleave', () => { target.x = 0; target.y = 0; });

    const resize = () => {
        const w = hero.clientWidth, h = hero.clientHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        material.uniforms.uPixelRatio.value = renderer.getPixelRatio();
    };
    resize();
    new ResizeObserver(resize).observe(hero);

    const clock = new THREE.Clock();
    let raf = 0;
    const tick = () => {
        const t = clock.getElapsedTime();
        material.uniforms.uTime.value = t;
        current.x += (target.x - current.x) * 0.045;
        current.y += (target.y - current.y) * 0.045;
        points.rotation.y = t * 0.12 + current.x * 0.55;
        points.rotation.x = current.y * 0.35;
        points.scale.setScalar(1 + Math.sin(t * 0.8) * 0.015);
        renderer.render(scene, camera);
        raf = requestAnimationFrame(tick);
    };

    new IntersectionObserver(([e]) => {
        if (e.isIntersecting && !raf) { tick(); canvas.classList.add('ready'); }
        else if (!e.isIntersecting && raf) { cancelAnimationFrame(raf); raf = 0; }
    }, { threshold: 0.05 }).observe(hero);
}

/* ============ 2. GLOBE — страны ============ */
function initGlobe() {
    const canvas = document.getElementById('globe3d');
    if (!canvas || reduce) return;
    const wrap = canvas.parentElement;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 7.5;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const R = 2.3;

    // Земля с текстурой карты мира
    const loader = new THREE.TextureLoader();
    let earthMesh;
    const earthTex = loader.load(
        'https://unpkg.com/three-globe@2.31.1/example/img/earth-blue-marble.jpg',
        () => { canvas.classList.add('ready'); },
        undefined,
        () => {
            if (earthMesh) earthMesh.material = new THREE.MeshBasicMaterial({ color: 0x1a2744 });
            canvas.classList.add('ready');
        }
    );
    if (earthTex.colorSpace !== undefined) earthTex.colorSpace = THREE.SRGBColorSpace;
    earthMesh = new THREE.Mesh(
        new THREE.SphereGeometry(R, 64, 48),
        new THREE.MeshBasicMaterial({ map: earthTex })
    );
    scene.add(earthMesh);

    // атмосферный ореол
    scene.add(new THREE.Mesh(
        new THREE.SphereGeometry(R * 1.02, 48, 32),
        new THREE.MeshBasicMaterial({
            color: 0xe8a0c8,
            transparent: true,
            opacity: 0.07,
            side: THREE.BackSide
        })
    ));

    // тонкий wireframe
    scene.add(new THREE.Mesh(
        new THREE.SphereGeometry(R * 1.005, 32, 24),
        new THREE.MeshBasicMaterial({ color: 0xe8a0c8, wireframe: true, transparent: true, opacity: 0.06 })
    ));

    // маркеры стран
    const COUNTRIES = [
        { name: 'Казахстан', lat: 43.24, lon: 76.89 },
        { name: 'Узбекистан', lat: 41.30, lon: 69.24 },
        { name: 'Кыргызстан', lat: 42.87, lon: 74.59 },
        { name: 'Таджикистан', lat: 38.56, lon: 68.78 },
        { name: 'Армения', lat: 40.18, lon: 44.51 },
        { name: 'Грузия', lat: 41.69, lon: 44.83 },
        { name: 'Азербайджан', lat: 40.41, lon: 49.87 },
        { name: 'Монголия', lat: 47.89, lon: 106.91 }
    ];
    const latLonToXYZ = (lat, lon, r) => {
        const phi = (90 - lat) * Math.PI / 180;
        const theta = (lon + 180) * Math.PI / 180;
        return new THREE.Vector3(
            -r * Math.sin(phi) * Math.cos(theta),
             r * Math.cos(phi),
             r * Math.sin(phi) * Math.sin(theta)
        );
    };

    const markers = [];
    const markerGeo = new THREE.SphereGeometry(0.05, 12, 12);
    const markerMat = new THREE.MeshBasicMaterial({ color: 0xe8a0c8 });
    const ringGeo = new THREE.RingGeometry(0.08, 0.15, 32);

    COUNTRIES.forEach(c => {
        const p = latLonToXYZ(c.lat, c.lon, R * 1.01);
        const m = new THREE.Mesh(markerGeo, markerMat);
        m.position.copy(p);
        scene.add(m);

        const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({
            color: 0xe8a0c8, transparent: true, opacity: 0.4, side: THREE.DoubleSide
        }));
        ring.position.copy(p);
        ring.lookAt(0, 0, 0);
        scene.add(ring);

        markers.push({ mesh: m, ring, phase: Math.random() * Math.PI * 2 });
    });

    // drag
    let dragging = false, lastX = 0, lastY = 0;
    const rot = { x: 0.2, y: -1.2 }, targetRot = { x: 0.2, y: -1.2 };
    wrap.style.cursor = 'grab';
    wrap.style.touchAction = 'pan-y';

    wrap.addEventListener('pointerdown', e => {
        dragging = true; lastX = e.clientX; lastY = e.clientY;
        wrap.style.cursor = 'grabbing';
    });
    wrap.addEventListener('pointerup', () => { dragging = false; wrap.style.cursor = 'grab'; });
    wrap.addEventListener('pointerleave', () => { dragging = false; wrap.style.cursor = 'grab'; });
    wrap.addEventListener('pointermove', e => {
        if (!dragging) return;
        targetRot.y += (e.clientX - lastX) * 0.01;
        targetRot.x += (e.clientY - lastY) * 0.01;
        targetRot.x = Math.max(-1.2, Math.min(1.2, targetRot.x));
        lastX = e.clientX; lastY = e.clientY;
    });

    const resize = () => {
        const rect = wrap.getBoundingClientRect();
        renderer.setSize(rect.width, rect.height, false);
        camera.aspect = rect.width / rect.height;
        camera.updateProjectionMatrix();
    };
    resize();
    new ResizeObserver(resize).observe(wrap);

    const clock = new THREE.Clock();
    let raf = 0;
    const tick = () => {
        const t = clock.getElapsedTime();
        if (!dragging) targetRot.y += 0.0015;
        rot.x += (targetRot.x - rot.x) * 0.08;
        rot.y += (targetRot.y - rot.y) * 0.08;
        scene.rotation.x = rot.x;
        scene.rotation.y = rot.y;

        markers.forEach(m => {
            const pulse = 1 + Math.sin(t * 2 + m.phase) * 0.4;
            m.mesh.scale.setScalar(pulse);
            m.ring.scale.setScalar(1 + Math.sin(t * 2 + m.phase) * 0.5);
            m.ring.material.opacity = 0.5 - Math.sin(t * 2 + m.phase) * 0.3;
        });

        renderer.render(scene, camera);
        raf = requestAnimationFrame(tick);
    };

    new IntersectionObserver(([e]) => {
        if (e.isIntersecting && !raf) { tick(); canvas.classList.add('ready'); }
        else if (!e.isIntersecting && raf) { cancelAnimationFrame(raf); raf = 0; }
    }, { threshold: 0.05 }).observe(wrap);
}

initHero();
initGlobe();

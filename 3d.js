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
    const cA = new THREE.Color('#d45096');
    const cB = new THREE.Color('#8b6bc4');
    const cC = new THREE.Color('#5b46b8');
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
        sizes[i] = 0.65 + Math.random() * 0.65;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uPixelRatio: { value: renderer.getPixelRatio() },
            uSize: { value: lowPower ? 7.5 : 9.5 }
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
                vAlpha = 0.55 + 0.45*sin(uTime*1.8 + p.x*2.0);
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
        transparent: true, depthWrite: false, blending: THREE.NormalBlending
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

/* ============ 2. GLOBE — страны и политическая карта мира ============ */
function initGlobe() {
    const canvas = document.getElementById('globe3d');
    if (!canvas || reduce) return;
    const wrap = canvas.parentElement;
    const pinsContainer = document.getElementById('globePins');
    const navContainer = document.getElementById('globeNav');

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.z = 7.1;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const R = 2.38;

    const globeGroup = new THREE.Group();
    globeGroup.rotation.order = 'YXZ';
    scene.add(globeGroup);

    const DASM_CODES = new Set(['KAZ', 'UZB', 'KGZ', 'TJK', 'ARM', 'GEO', 'AZE', 'MNG']);
    const COUNTRIES = [
        { code: 'KAZ', flag: '🇰🇿', name: 'Казахстан', city: 'Алматы', lat: 43.24, lon: 76.89, hq: true, labelLat: 48.0, labelLon: 67.0 },
        { code: 'UZB', flag: '🇺🇿', name: 'Узбекистан', city: 'Ташкент', lat: 41.30, lon: 64.50, labelLat: 41.5, labelLon: 63.5 },
        { code: 'KGZ', flag: '🇰🇬', name: 'Кыргызстан', city: 'Бишкек', lat: 41.20, lon: 74.70, labelLat: 41.5, labelLon: 75.0 },
        { code: 'TJK', flag: '🇹🇯', name: 'Таджикистан', city: 'Душанбе', lat: 38.86, lon: 71.28, labelLat: 38.8, labelLon: 71.0 },
        { code: 'ARM', flag: '🇦🇲', name: 'Армения', city: 'Ереван', lat: 40.18, lon: 44.51, labelLat: 40.1, labelLon: 44.5 },
        { code: 'GEO', flag: '🇬🇪', name: 'Грузия', city: 'Тбилиси', lat: 42.15, lon: 43.50, labelLat: 42.3, labelLon: 43.5 },
        { code: 'AZE', flag: '🇦🇿', name: 'Азербайджан', city: 'Баку', lat: 40.41, lon: 48.80, labelLat: 40.3, labelLon: 47.8 },
        { code: 'MNG', flag: '🇲🇳', name: 'Монголия', city: 'Улан-Батор', lat: 46.86, lon: 103.85, labelLat: 46.8, labelLon: 103.8 }
    ];

    const NEIGHBORS = [
        { name: 'РОССИЯ / RUSSIA', lat: 60, lon: 82 },
        { name: 'КИТАЙ / CHINA', lat: 35, lon: 103 },
        { name: 'ТУРЦИЯ / TURKEY', lat: 39, lon: 35 },
        { name: 'ИРАН / IRAN', lat: 32, lon: 54 },
        { name: 'ИНДИЯ / INDIA', lat: 22, lon: 79 },
        { name: 'ЕВРОПА / EUROPE', lat: 50, lon: 15 },
        { name: 'САУД. АРАВИЯ', lat: 24, lon: 45 },
        { name: 'АФРИКА / AFRICA', lat: 8, lon: 22 }
    ];

    // Высокочёткая Canvas-текстура карты мира с границами и странами
    const mapCanvas = document.createElement('canvas');
    mapCanvas.width = 4096;
    mapCanvas.height = 2048;
    const ctx = mapCanvas.getContext('2d');

    const mapTex = new THREE.CanvasTexture(mapCanvas);
    if (mapTex.colorSpace !== undefined) mapTex.colorSpace = THREE.SRGBColorSpace;
    mapTex.anisotropy = renderer.capabilities.getMaxAnisotropy();

    const lonToX = lon => ((lon + 180) / 360) * mapCanvas.width;
    const latToY = lat => ((90 - lat) / 180) * mapCanvas.height;

    let geoData = null;
    let satImg = null;
    let activeCountryCode = 'KAZ';

    function drawWorldMap() {
        const W = mapCanvas.width, H = mapCanvas.height;
        const isLight = document.documentElement.getAttribute('data-theme') !== 'dark';

        // 1. Океан
        const oceanGrad = ctx.createLinearGradient(0, 0, 0, H);
        if (isLight) {
            oceanGrad.addColorStop(0, '#d8e4f6');
            oceanGrad.addColorStop(0.5, '#c5d7f2');
            oceanGrad.addColorStop(1, '#d8e4f6');
        } else {
            oceanGrad.addColorStop(0, '#10182b');
            oceanGrad.addColorStop(0.5, '#16223c');
            oceanGrad.addColorStop(1, '#10182b');
        }
        ctx.fillStyle = oceanGrad;
        ctx.fillRect(0, 0, W, H);

        // Спутниковая подложка (полупрозрачная для рельефа)
        if (satImg) {
            ctx.save();
            ctx.globalAlpha = isLight ? 0.18 : 0.28;
            ctx.drawImage(satImg, 0, 0, W, H);
            ctx.restore();
        }

        // 2. Координатная сетка (параллели и меридианы)
        ctx.strokeStyle = isLight ? 'rgba(90, 70, 140, 0.14)' : 'rgba(200, 180, 240, 0.10)';
        ctx.lineWidth = 1.5;
        for (let lon = -180; lon <= 180; lon += 20) {
            const x = lonToX(lon);
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
        }
        for (let lat = -75; lat <= 75; lat += 15) {
            const y = latToY(lat);
            ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
        }

        // 3. Отрисовка всех стран мира из GeoJSON
        if (geoData && geoData.features) {
            geoData.features.forEach(feat => {
                const isDasm = DASM_CODES.has(feat.id);
                const isSelected = feat.id === activeCountryCode;
                const geom = feat.geometry;
                if (!geom) return;

                const polys = geom.type === 'Polygon' ? [geom.coordinates] :
                              geom.type === 'MultiPolygon' ? geom.coordinates : [];

                ctx.beginPath();
                polys.forEach(poly => {
                    poly.forEach(ring => {
                        ring.forEach(([lon, lat], idx) => {
                            const x = lonToX(lon);
                            const y = latToY(lat);
                            if (idx === 0) ctx.moveTo(x, y);
                            else ctx.lineTo(x, y);
                        });
                        ctx.closePath();
                    });
                });

                if (isDasm) {
                    ctx.fillStyle = isSelected
                        ? (isLight ? '#c43c88' : '#f078bc')
                        : (isLight ? '#d86aa8' : '#c95c98');
                    ctx.fill();
                    ctx.strokeStyle = '#ffffff';
                    ctx.lineWidth = isSelected ? 4.5 : 3.0;
                    ctx.stroke();
                } else {
                    ctx.fillStyle = isLight ? '#f4effa' : '#26233a';
                    ctx.fill();
                    ctx.strokeStyle = isLight ? 'rgba(110, 80, 150, 0.42)' : 'rgba(200, 180, 235, 0.32)';
                    ctx.lineWidth = 1.6;
                    ctx.stroke();
                }
            });

            // Подписи соседних стран/континентов на карте
            ctx.save();
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = '700 22px Manrope, sans-serif';
            ctx.fillStyle = isLight ? 'rgba(70, 50, 100, 0.50)' : 'rgba(210, 200, 235, 0.42)';
            NEIGHBORS.forEach(n => {
                ctx.fillText(n.name, lonToX(n.lon), latToY(n.lat));
            });

            // Крупные названия ключевых стран DASM на самом полотне карты
            COUNTRIES.forEach(c => {
                const x = lonToX(c.labelLon);
                const y = latToY(c.labelLat);
                const tName = (window.i18n ? window.i18n.t(c.name) : c.name).toUpperCase();
                ctx.font = c.code === 'KAZ' || c.code === 'MNG' || c.code === 'UZB'
                    ? '800 24px Manrope, sans-serif'
                    : '800 17px Manrope, sans-serif';
                ctx.strokeStyle = isLight ? 'rgba(60, 15, 45, 0.85)' : 'rgba(15, 8, 25, 0.9)';
                ctx.lineWidth = 5;
                ctx.strokeText(tName, x, y);
                ctx.fillStyle = '#ffffff';
                ctx.fillText(tName, x, y);
            });
            ctx.restore();
        }

        mapTex.needsUpdate = true;
    }

    drawWorldMap();

    // Загрузка GeoJSON границ стран
    fetch('world.geojson')
        .then(r => r.json())
        .then(data => {
            geoData = data;
            drawWorldMap();
            canvas.classList.add('ready');
        })
        .catch(() => { canvas.classList.add('ready'); });

    // Опциональная спутниковая подложка
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => { satImg = img; drawWorldMap(); };
    img.src = 'https://unpkg.com/three-globe@2.31.1/example/img/earth-blue-marble.jpg';

    const earthMesh = new THREE.Mesh(
        new THREE.SphereGeometry(R, 72, 54),
        new THREE.MeshBasicMaterial({ map: mapTex })
    );
    globeGroup.add(earthMesh);

    // Атмосферный ореол
    globeGroup.add(new THREE.Mesh(
        new THREE.SphereGeometry(R * 1.025, 48, 32),
        new THREE.MeshBasicMaterial({
            color: 0xd46aa8,
            transparent: true,
            opacity: 0.12,
            side: THREE.BackSide
        })
    ));

    // Маркеры и интерактивные HTML-бейджи стран
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
    const markerGeo = new THREE.SphereGeometry(0.055, 16, 16);
    const ringGeo = new THREE.RingGeometry(0.075, 0.14, 32);

    // Дуги от штаб-квартиры в Алматы ко всем 7 странам
    const hqPos = latLonToXYZ(COUNTRIES[0].lat, COUNTRIES[0].lon, R * 1.006);
    COUNTRIES.slice(1).forEach(c => {
        const destPos = latLonToXYZ(c.lat, c.lon, R * 1.006);
        const mid = hqPos.clone().add(destPos).multiplyScalar(0.5).normalize().multiplyScalar(R * 1.16);
        const curve = new THREE.QuadraticBezierCurve3(hqPos, mid, destPos);
        const arcGeo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(36));
        const arcMat = new THREE.LineBasicMaterial({ color: 0xffd2ec, transparent: true, opacity: 0.55 });
        globeGroup.add(new THREE.Line(arcGeo, arcMat));
    });

    COUNTRIES.forEach(c => {
        const p = latLonToXYZ(c.lat, c.lon, R * 1.012);
        const m = new THREE.Mesh(
            markerGeo,
            new THREE.MeshBasicMaterial({ color: c.hq ? 0xffe066 : 0xffffff })
        );
        m.position.copy(p);
        globeGroup.add(m);

        const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({
            color: c.hq ? 0xffe066 : 0xffa8d8,
            transparent: true,
            opacity: 0.7,
            side: THREE.DoubleSide
        }));
        ring.position.copy(p);
        ring.lookAt(0, 0, 0);
        globeGroup.add(ring);

        let pinEl = null;
        if (pinsContainer) {
            pinEl = document.createElement('button');
            pinEl.type = 'button';
            pinEl.className = 'globe-pin' + (c.hq ? ' is-hq' : '') + (c.code === activeCountryCode ? ' is-active' : '');
            pinEl.dataset.code = c.code;
            const labelText = window.i18n ? window.i18n.t(c.name) : c.name;
            pinEl.innerHTML = `<span class="gp-flag">${c.flag}</span><span class="gp-name">${labelText}</span>`;
            pinEl.addEventListener('click', e => {
                e.stopPropagation();
                focusCountry(c.code, true);
            });
            pinsContainer.appendChild(pinEl);
        }

        markers.push({
            country: c,
            localPos: p.clone(),
            mesh: m,
            ring,
            pinEl,
            phase: Math.random() * Math.PI * 2
        });
    });

    // Начальный поворот точно на Центральную Азию и Кавказ (lat ~ 42°N, lon ~ 68°E)
    const calcRotForLatLon = (lat, lon) => ({
        x: (lat - 4) * Math.PI / 180,
        y: -(90 + lon) * Math.PI / 180
    });

    const initAngle = calcRotForLatLon(42, 68);
    const rot = { x: initAngle.x, y: initAngle.y };
    const targetRot = { x: initAngle.x, y: initAngle.y };
    let autoSpin = true;
    let pauseTimer = 0;

    function focusCountry(code, scrollCard = false) {
        const c = COUNTRIES.find(item => item.code === code);
        if (!c) return;
        activeCountryCode = code;
        autoSpin = false;
        clearTimeout(pauseTimer);
        pauseTimer = setTimeout(() => { autoSpin = true; }, 7000);

        const next = calcRotForLatLon(c.lat, c.lon);
        targetRot.x = next.x;
        targetRot.y = next.y;

        drawWorldMap();

        markers.forEach(m => {
            if (m.pinEl) m.pinEl.classList.toggle('is-active', m.country.code === code);
        });
        if (navContainer) {
            navContainer.querySelectorAll('.globe-country-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.code === code);
            });
        }
        if (scrollCard) {
            const card = document.getElementById('country-' + code);
            if (card) {
                card.classList.remove('is-hidden');
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                card.classList.add('card-highlight');
                setTimeout(() => card.classList.remove('card-highlight'), 2200);
            }
        }
    }

    if (navContainer) {
        navContainer.querySelectorAll('.globe-country-btn').forEach(btn => {
            btn.addEventListener('click', () => focusCountry(btn.dataset.code, false));
        });
    }

    // Обновление языка и темы на карте
    document.addEventListener('dasm:lang', () => {
        markers.forEach(m => {
            if (m.pinEl) {
                const nameSpan = m.pinEl.querySelector('.gp-name');
                if (nameSpan) nameSpan.textContent = window.i18n ? window.i18n.t(m.country.name) : m.country.name;
            }
        });
        drawWorldMap();
    });

    const themeObs = new MutationObserver(() => drawWorldMap());
    themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    // Вращение мышью / пальцем
    let dragging = false, lastX = 0, lastY = 0;
    wrap.style.cursor = 'grab';
    wrap.style.touchAction = 'pan-y';

    wrap.addEventListener('pointerdown', e => {
        if (e.target.closest('.globe-pin')) return;
        dragging = true;
        autoSpin = false;
        clearTimeout(pauseTimer);
        lastX = e.clientX;
        lastY = e.clientY;
        wrap.style.cursor = 'grabbing';
    });
    const stopDrag = () => {
        if (!dragging) return;
        dragging = false;
        wrap.style.cursor = 'grab';
        clearTimeout(pauseTimer);
        pauseTimer = setTimeout(() => { autoSpin = true; }, 5000);
    };
    wrap.addEventListener('pointerup', stopDrag);
    wrap.addEventListener('pointerleave', stopDrag);
    wrap.addEventListener('pointermove', e => {
        if (!dragging) return;
        targetRot.y += (e.clientX - lastX) * 0.0075;
        targetRot.x += (e.clientY - lastY) * 0.0075;
        targetRot.x = Math.max(-1.1, Math.min(1.1, targetRot.x));
        lastX = e.clientX;
        lastY = e.clientY;
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
    const worldVec = new THREE.Vector3();
    const normalVec = new THREE.Vector3();
    const camDir = new THREE.Vector3(0, 0, 1);
    let raf = 0;

    const tick = () => {
        const t = clock.getElapsedTime();
        if (!dragging && autoSpin) {
            targetRot.y = initAngle.y + Math.sin(t * 0.35) * 0.28;
        }
        rot.x += (targetRot.x - rot.x) * 0.08;
        rot.y += (targetRot.y - rot.y) * 0.08;
        globeGroup.rotation.x = rot.x;
        globeGroup.rotation.y = rot.y;
        globeGroup.updateMatrixWorld();

        const w = wrap.clientWidth;
        const h = wrap.clientHeight;

        markers.forEach(m => {
            const pulse = 1 + Math.sin(t * 2.4 + m.phase) * 0.35;
            m.mesh.scale.setScalar(pulse);
            m.ring.scale.setScalar(1 + Math.sin(t * 2.4 + m.phase) * 0.45);
            m.ring.material.opacity = 0.6 - Math.sin(t * 2.4 + m.phase) * 0.25;

            if (m.pinEl) {
                worldVec.copy(m.localPos).applyMatrix4(globeGroup.matrixWorld);
                normalVec.copy(worldVec).normalize();
                const dot = normalVec.dot(camDir);

                if (dot > 0.22) {
                    worldVec.project(camera);
                    const x = (worldVec.x * 0.5 + 0.5) * w;
                    const y = (-worldVec.y * 0.5 + 0.5) * h;
                    m.pinEl.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -115%)`;
                    m.pinEl.style.opacity = String(Math.min(1, (dot - 0.22) * 3.2));
                    m.pinEl.style.pointerEvents = dot > 0.35 ? 'auto' : 'none';
                } else {
                    m.pinEl.style.opacity = '0';
                    m.pinEl.style.pointerEvents = 'none';
                }
            }
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

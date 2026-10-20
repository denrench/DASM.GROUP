(function () {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ============ 3D-карусель «Система DASM» ============ */
    function initSysRing() {
        const sysList = document.querySelector('.sys-list');
        const ring = document.querySelector('.ring-3d');
        if (!sysList || !ring) return;
        const items = [...sysList.querySelectorAll('.sys-item')];
        const cards = [...ring.querySelectorAll('.card-3d')];
        if (!items.length || !cards.length) return;
        const step = 360 / cards.length;

        const update = () => {
            const idx = items.findIndex(i => i.classList.contains('active'));
            if (idx < 0) return;
            ring.style.transform = `rotateY(${-idx * step}deg)`;
            cards.forEach((c, i) => c.classList.toggle('is-active', i === idx));
        };

        const mo = new MutationObserver(update);
        items.forEach(it => mo.observe(it, { attributes: true, attributeFilter: ['class'] }));
        update();
    }

    /* ============ Tilt на карточках ============ */
    function initTilt() {
        if (reduce) return;
        const els = document.querySelectorAll('.card, .case-card, .tl-item, .vacancy-item, .person, .link-card');
        els.forEach(el => {
            el.style.transformStyle = 'preserve-3d';
            el.addEventListener('pointermove', e => {
                if (e.pointerType !== 'mouse') return;
                const r = el.getBoundingClientRect();
                const px = (e.clientX - r.left) / r.width - 0.5;
                const py = (e.clientY - r.top) / r.height - 0.5;
                el.style.transform = `perspective(1000px) rotateX(${-py * 4}deg) rotateY(${px * 4}deg) translateY(-4px)`;
            });
            el.addEventListener('pointerleave', () => { el.style.transform = ''; });
        });
    }

    /* ============ Кастомный курсор ============ */
    function initCursor() {
        if (reduce || window.matchMedia('(hover: none)').matches) return;
        const dot = document.createElement('div');
        dot.className = 'cursor-dot';
        const ring = document.createElement('div');
        ring.className = 'cursor-ring';
        document.body.append(dot, ring);

        let mx = innerWidth / 2, my = innerHeight / 2;
        let dx = mx, dy = my, rx = mx, ry = my;

        document.addEventListener('pointermove', e => { mx = e.clientX; my = e.clientY; });

        (function tick() {
            dx += (mx - dx) * 0.55; dy += (my - dy) * 0.55;
            rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15;
            dot.style.transform = `translate3d(${dx}px,${dy}px,0) translate(-50%,-50%)`;
            ring.style.transform = `translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`;
            requestAnimationFrame(tick);
        })();

        document.addEventListener('pointerover', e => {
            const t = e.target.closest('a, button, [data-magnetic], .card, .case-card, .link-card, .panel');
            ring.classList.toggle('hover', !!t);
        });
    }

    const boot = () => { initSysRing(); initTilt(); initCursor(); };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
    else boot();
})();

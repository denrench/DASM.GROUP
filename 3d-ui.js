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

    const boot = () => { initSysRing(); initTilt(); };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
    else boot();
})();

/**
 * DASM GROUP — script.js
 * Меню, тема, плавающие объекты, анимации, счётчики, фильтры, поиск вакансий, квиз, формы, язык.
 */

document.addEventListener('DOMContentLoaded', () => {
    const $ = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
    const T = s => (window.i18n ? window.i18n.t(s) : s);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ===== Тема: светлая по умолчанию + переключатель =====
    (function initTheme() {
        const root = document.documentElement;
        let theme = 'light';
        try {
            const saved = localStorage.getItem('dasm-theme-mode');
            if (saved === 'dark' || saved === 'light') theme = saved;
        } catch (e) { /* ignore */ }
        root.setAttribute('data-theme', theme);

        let btn = $('#themeToggle');
        if (!btn) {
            const actions = $('.header-actions');
            if (actions) {
                btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'theme-toggle';
                btn.id = 'themeToggle';
                btn.setAttribute('aria-label', 'Переключить тему');
                btn.title = 'Тема';
                btn.innerHTML = '<span class="icon-sun">☀</span><span class="icon-moon">☾</span>';
                const clientBtn = actions.querySelector('a.btn');
                const burger = actions.querySelector('.burger');
                if (clientBtn) actions.insertBefore(btn, clientBtn);
                else if (burger) actions.insertBefore(btn, burger);
                else actions.appendChild(btn);
            }
        }
        if (btn) {
            btn.addEventListener('click', () => {
                theme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
                root.setAttribute('data-theme', theme);
                try { localStorage.setItem('dasm-theme-mode', theme); } catch (e) { /* ignore */ }
            });
        }
    })();

    // ===== Плавающий декоративный слой со смысловыми объектами сайта =====
    (function initFloatLayer() {
        let layer = $('.float-layer');
        if (!layer) {
            layer = document.createElement('div');
            layer.className = 'float-layer';
            layer.setAttribute('aria-hidden', 'true');
            document.body.prepend(layer);
        }
        layer.innerHTML = `
            <div class="float-orb"></div>
            <div class="float-orb"></div>
            <div class="float-orb"></div>
            <div class="float-orb"></div>
            `;
    })();

    // ===== Шапка при скролле =====
    const header = $('#header');
    const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // ===== Мобильное меню =====
    const burgerBtn = $('#burgerBtn');
    const navMenu = $('#navMenu');

    if (burgerBtn && navMenu) {
        const closeMenu = () => {
            navMenu.classList.remove('open');
            burgerBtn.classList.remove('active');
            burgerBtn.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
        };
        burgerBtn.setAttribute('aria-expanded', 'false');
        burgerBtn.addEventListener('click', () => {
            const open = navMenu.classList.toggle('open');
            burgerBtn.classList.toggle('active', open);
            burgerBtn.setAttribute('aria-expanded', String(open));
            document.body.classList.toggle('menu-open', open);
        });
        $$('.nav-link', navMenu).forEach(link => link.addEventListener('click', closeMenu));
        document.addEventListener('click', e => {
            if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
                closeMenu();
            }
        });
        document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
    }

    // ===== Появление при скролле =====
    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });
    $$('.reveal').forEach(el => revealObserver.observe(el));

    // ===== Счётчики: числа набираются, когда блок появляется на экране =====
    const counters = $$('[data-count]');
    if (counters.length && !reduceMotion) {
        const run = el => {
            const end = Number(el.dataset.count);
            const duration = 1400;
            const start = performance.now();
            const tick = now => {
                const p = Math.min((now - start) / duration, 1);
                el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
                if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        };
        const counterObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                counterObserver.unobserve(entry.target);
                run(entry.target);
            });
        }, { threshold: 0.5 });
        counters.forEach(el => {
            el.textContent = '0';
            counterObserver.observe(el);
        });
    }

    // ===== Фильтры карточек (агентства, кейсы, страны) =====
    $$('.filter-bar').forEach(bar => {
        const grid = $(bar.dataset.target);
        if (!grid) return;
        const attr = bar.dataset.attr || 'cat';
        const items = Array.from(grid.children).filter(el => el.dataset[attr] !== undefined);

        bar.addEventListener('click', e => {
            const chip = e.target.closest('.chip');
            if (!chip) return;
            $$('.chip', bar).forEach(c => {
                c.classList.toggle('active', c === chip);
                c.setAttribute('aria-pressed', String(c === chip));
            });
            const f = chip.dataset.filter;
            items.forEach(el => {
                const values = el.dataset[attr].split(' ');
                el.classList.toggle('is-hidden', f !== 'all' && !values.includes(f));
            });
        });
    });

    // ===== Вакансии: поиск + города + направления =====
    const vacList = $('#vacancyList');
    if (vacList) {
        const search = $('#vacSearch');
        const city = $('#vacCity');
        const dir = $('#vacDir');
        const empty = $('#vacEmpty');
        const items = $$('.vacancy-item', vacList);

        const applyVacancies = () => {
            const q = search.value.trim().toLowerCase();
            let shown = 0;
            items.forEach(item => {
                const okText = !q || item.textContent.toLowerCase().includes(q);
                const okCity = city.value === 'all' || item.dataset.city.split(' ').includes(city.value);
                const okDir = dir.value === 'all' || item.dataset.dir === dir.value;
                const ok = okText && okCity && okDir;
                item.classList.toggle('is-hidden', !ok);
                if (ok) shown++;
            });
            if (empty) empty.classList.toggle('visible', shown === 0);
        };
        [search, city, dir].forEach(el => el.addEventListener('input', applyVacancies));
    }

    // ===== Квиз «Какое агентство вам подойдёт?» =====
    const quizEl = $('#agencyQuiz');
    if (quizEl) {
        const STEPS = [
            { q: 'Какая задача сейчас главная?', options: [
                ['Придумать идею и бренд', 'creative'],
                ['Купить медиа и охват (ТВ, наружка)', 'media'],
                ['Привлекать клиентов в digital', 'digital'],
                ['Выстроить репутацию и PR', 'pr'],
                ['Запустить акцию или событие', 'btl']] },
            { q: 'Где нужен результат?', options: [
                ['Только Казахстан', 'local'],
                ['Несколько стран Центральной Азии', 'ca'],
                ['Центральная Азия, Кавказ и Монголия', 'wide']] },
            { q: 'Что важнее всего?', options: [
                ['Громкая идея и награды', 'idea'],
                ['Измеримая эффективность (ROI)', 'roi'],
                ['Максимальный охват и узнаваемость', 'reach']] }
        ];
        const AGENCIES = {
            gforce: ['GForce Grey', 'Самое награждаемое креативное агентство Центральной Азии, обладатель первого Золотого Каннского Льва Казахстана.'],
            mindshare: ['Mindshare', 'Адаптивное медиапланирование и глубокая аналитика данных для роста бренда.'],
            wavemaker: ['Wavemaker', 'Медиа, контент и технологии: исследования потребительского пути для максимального ROI.'],
            essence: ['EssenceMediacom', 'Digital-экспертиза и омниканальные коммуникационные системы.'],
            digital: ['DASM Digital Hub', 'Programmatic, лидогенерация, SEO/ASO и сквозная аналитика.'],
            pr: ['DASM PR', 'Управление репутацией, связи со СМИ, ESG-коммуникации и антикризисный менеджмент.'],
            btl: ['Action & Brand Experience', 'BTL, трейд-маркетинг, бренд-активации и события.']
        };
        const NOTES = {
            local: 'Для одной страны хватит одного агентства — начните с него.',
            ca: 'Для нескольких стран подключите DASMART: он координирует кампании в одном окне.',
            wide: 'Для запуска в нескольких регионах подключим DASMART и региональные офисы группы.'
        };
        const pick = a => {
            switch (a[0]) {
                case 'creative': return 'gforce';
                case 'media': return a[2] === 'roi' ? 'wavemaker' : 'mindshare';
                case 'digital': return a[2] === 'roi' ? 'digital' : 'essence';
                case 'pr': return 'pr';
                default: return 'btl';
            }
        };

        let step = 0;
        let answers = [];

        const render = () => {
            quizEl.innerHTML = '';

            if (step < STEPS.length) {
                const s = STEPS[step];
                quizEl.innerHTML =
                    '<div class="quiz-progress"><span style="width:' + (step / STEPS.length * 100) + '%"></span></div>' +
                    '<div class="quiz-count">' + T('Вопрос') + ' ' + (step + 1) + ' / ' + STEPS.length + '</div>' +
                    '<h3 class="quiz-q">' + T(s.q) + '</h3>' +
                    '<div class="quiz-options"></div>';
                const box = $('.quiz-options', quizEl);
                s.options.forEach(([label, value]) => {
                    const btn = document.createElement('button');
                    btn.type = 'button';
                    btn.className = 'quiz-opt';
                    btn.textContent = T(label);
                    btn.addEventListener('click', () => { answers.push(value); step++; render(); });
                    box.appendChild(btn);
                });
                return;
            }

            const [name, desc] = AGENCIES[pick(answers)];
            quizEl.innerHTML =
                '<div class="quiz-progress"><span style="width:100%"></span></div>' +
                '<div class="quiz-result">' +
                '<div class="quiz-count">' + T('Вам подойдёт') + '</div>' +
                '<h3 class="quiz-result-name">' + name + '</h3>' +
                '<p class="quiz-result-desc">' + T(desc) + '</p>' +
                '<p class="quiz-result-note">' + T(NOTES[answers[1]]) + '</p>' +
                '<div class="quiz-actions">' +
                '<a href="#footer-contact" class="btn btn-primary" id="quizCta">' + T('Запросить презентацию') + '</a>' +
                '<button type="button" class="btn btn-outline" id="quizReset">' + T('Пройти заново') + '</button>' +
                '</div></div>';

            $('#quizReset', quizEl).addEventListener('click', () => { step = 0; answers = []; render(); });
            $('#quizCta', quizEl).addEventListener('click', () => {
                const ta = $('#footer-contact textarea');
                if (ta) ta.value = T('Интересует:') + ' ' + name + '.';
            });
        };

        render();
        document.addEventListener('dasm:lang', render);
    }

    // ===== Формы: проверка и отправка =====
    const MAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const PHONE_RE = /^\+?[\d\s()-]{7,}$/;
    const LABELS = { name: 'Имя', contact: 'Контакты', message: 'Сообщение', service: 'Направление' };

    $$('.js-validate-form').forEach(form => {
        $$('input, textarea', form).forEach(field => {
            field.addEventListener('input', () => {
                const group = field.closest('.form-group');
                if (group) group.classList.remove('invalid');
            });
        });

        form.addEventListener('submit', async e => {
            e.preventDefault();
            let isValid = true;

            $$('input[required], textarea[required]', form).forEach(field => {
                const value = field.value.trim();
                let ok = value.length > 0;
                if (ok && field.name === 'contact') ok = MAIL_RE.test(value) || PHONE_RE.test(value);
                const group = field.closest('.form-group');
                if (group) group.classList.toggle('invalid', !ok);
                if (!ok) isValid = false;
            });
            if (!isValid) return;

            const data = Object.fromEntries(new FormData(form).entries());
            try { const L = JSON.parse(localStorage.getItem('dasm-leads') || '[]'); L.push(Object.assign({}, data, { ts: new Date().toISOString(), page: location.pathname })); localStorage.setItem('dasm-leads', JSON.stringify(L)); } catch (e) { /* ignore */ }
            const msg = $('.form-success-message', form);
            if (msg && !msg.dataset.orig) msg.dataset.orig = msg.textContent.trim();
            const show = text => {
                if (!msg) return;
                msg.textContent = T(text);
                msg.classList.add('visible');
                setTimeout(() => msg.classList.remove('visible'), 6000);
            };

            try {
                if (form.dataset.endpoint) {
                    const res = await fetch(form.dataset.endpoint, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                        body: JSON.stringify(data)
                    });
                    if (!res.ok) throw new Error('HTTP ' + res.status);
                    show(msg ? msg.dataset.orig : '✓ Заявка отправлена!');
                } else {
                    const to = form.dataset.mailto || 'info@dasm.kz';
                    const body = Object.entries(data)
                        .map(([k, v]) => (LABELS[k] || k) + ': ' + v)
                        .join('\n');
                    window.location.href = 'mailto:' + to +
                        '?subject=' + encodeURIComponent('Заявка с сайта DASM Group') +
                        '&body=' + encodeURIComponent(body);
                    show('✓ Письмо подготовлено — отправьте его в своём почтовом клиенте.');
                }
                form.reset();
            } catch (err) {
                show('Не удалось отправить. Попробуйте позже или напишите на info@dasm.kz.');
            }
        });
    });

    // ===== Переключатель языка RU / KZ / EN =====
    $$('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (window.i18n) window.i18n.set(btn.textContent.trim());
        });
    });

    // ==================================================================
    // V2: анимации и интерактив
    // ==================================================================

    // ----- Индикатор прокрутки -----
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    document.body.appendChild(bar);
    let ticking = false;
    const updateBar = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(window.scrollY / max, 1) : 0) + ')';
        ticking = false;
    };
    window.addEventListener('scroll', () => {
        if (!ticking) { ticking = true; requestAnimationFrame(updateBar); }
    }, { passive: true });
    updateBar();

    // ----- Шапка прячется при прокрутке вниз -----
    if (header) {
        let lastY = window.scrollY;
        window.addEventListener('scroll', () => {
            const y = window.scrollY;
            const menuOpen = navMenu && navMenu.classList.contains('open');
            header.classList.toggle('hide', y > lastY && y > 240 && !menuOpen);
            lastY = y;
        }, { passive: true });
    }

    // ----- Плавное появление по очереди -----
    $$('.cards-grid, .stats-grid, .clients-wrap, .timeline, .people-grid, .faq, .vacancies-list, .filter-bar, .link-row, .hero-bento')
        .forEach(group => {
            $$(':scope > .reveal, :scope > * > .reveal', group).forEach((el, i) => {
                el.style.setProperty('--rd', Math.min(i, 7) * 0.07 + 's');
            });
        });

    // Удаляем любые элементы кастомного курсора, если они остались в кэше
    $$('.cursor-dot, .cursor-ring').forEach(el => el.remove());

    // ----- Бегущая лента: дублируем содержимое для бесшовной петли -----
    $$('.marquee-track').forEach(track => {
        Array.from(track.children).forEach(item => {
            const clone = item.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            track.appendChild(clone);
        });
    });

    // ----- Слово в заголовке: «перебор букв» -----
    const scr = $('.scramble');
    if (scr) {
        const words = scr.dataset.words.split('|');
        const GLYPHS_CYR = 'абвгдежзиклмнопрстуфхцчшэюя0123456789#%&';
        const GLYPHS_LAT = 'abcdefghijklmnopqrstuvwxyz0123456789#%&';
        let idx = 0;
        let timer = 0;

        const show = word => { scr.textContent = T(word); };
        const scrambleTo = word => {
            const target = T(word);
            const glyphs = (window.i18n && window.i18n.lang === 'EN') ? GLYPHS_LAT : GLYPHS_CYR;
            const total = 20;
            let frame = 0;
            clearTimeout(timer);
            const tick = () => {
                frame++;
                let out = '';
                for (let k = 0; k < target.length; k++) {
                    out += (k < (frame / total) * target.length || target[k] === ' ' || target[k] === '.')
                        ? target[k] : glyphs[Math.floor(Math.random() * glyphs.length)];
                }
                scr.textContent = out;
                if (frame < total) timer = setTimeout(tick, 34);
                else scr.textContent = target;
            };
            tick();
        };

        show(words[0]);
        if (!reduceMotion) {
            setInterval(() => { idx = (idx + 1) % words.length; scrambleTo(words[idx]); }, 3400);
        }
        document.addEventListener('dasm:lang', () => show(words[idx]));
    }

    // ----- Интерактивная схема «Система DASM» -----
    const sys = $('#system');
    if (sys) {
        const items = $$('.sys-item', sys);
        const nodes = $$('.node', sys);
        const spokes = $$('.spoke', sys);
        const pulse = $('.pulse', sys);
        const capTitle = $('#sysCapTitle');
        const capAgencies = $('#sysCapAgencies');
        const DUR = 6000;
        const pos = nodes.map(n => {
            const m = n.getAttribute('transform').match(/translate\(([\d.]+)[ ,]+([\d.]+)\)/);
            return [Number(m[1]), Number(m[2])];
        });

        let current = 0;
        let manual = false;
        let inView = false;
        let timer = 0;

        const select = i => {
            current = i;
            items.forEach((it, k) => {
                const on = k === i;
                it.classList.toggle('active', on);
                $('.sys-btn', it).setAttribute('aria-expanded', String(on));
            });
            nodes.forEach((n, k) => n.classList.toggle('active', k === i));
            spokes.forEach((s, k) => s.classList.toggle('active', k === i));

            const it = items[i];
            if (capTitle) capTitle.textContent = $('b', it).textContent + ' · ' + $('.sys-btn span', it).textContent;
            if (capAgencies) capAgencies.textContent = $$('.card-tags span', it).map(s => s.textContent).join(' · ');

            if (pulse && !reduceMotion && pulse.animate && pos[i]) {
                pulse.getAnimations().forEach(a => a.cancel());
                pulse.animate([
                    { transform: 'translate(280px,270px)' },
                    { transform: 'translate(' + pos[i][0] + 'px,' + pos[i][1] + 'px)' }
                ], { duration: 900, easing: 'cubic-bezier(0.16,1,0.3,1)', fill: 'forwards' });
            }
        };

        const schedule = () => {
            clearInterval(timer);
            if (manual || !inView || reduceMotion) return;
            timer = setInterval(() => select((current + 1) % items.length), DUR);
        };

        const choose = i => {
            manual = true;
            sys.classList.add('manual');
            clearInterval(timer);
            select(i);
        };

        items.forEach((it, i) => $('.sys-btn', it).addEventListener('click', () => choose(i)));
        nodes.forEach((n, i) => {
            n.addEventListener('click', () => choose(i));
            n.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(i); }
            });
        });

        new IntersectionObserver(entries => {
            inView = entries[0].isIntersecting;
            schedule();
        }, { threshold: 0.35 }).observe(sys);

        document.addEventListener('dasm:lang', () => select(current));
        select(0);
    }

    // ----- Раскрывающиеся панели стран -----
    $$('.panels').forEach(group => {
        const panels = $$('.panel', group);
        const activate = target => panels.forEach(p => {
            p.classList.toggle('active', p === target);
            p.setAttribute('aria-expanded', String(p === target));
        });
        const canHover = window.matchMedia('(hover: hover)').matches;
        panels.forEach(p => {
            if (canHover) p.addEventListener('mouseenter', () => activate(p));
            p.addEventListener('click', () => activate(p));
            p.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(p); }
            });
        });
    });


    // ===== Toast Notification Helper =====
    window.showToast = function(msg, icon = '✓') {
        let toast = $('#globalToast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'globalToast';
            toast.className = 'toast-msg';
            document.body.appendChild(toast);
        }
        toast.innerHTML = `<span style="font-size:1.2rem">${icon}</span> <span>${msg}</span>`;
        toast.classList.add('is-visible');
        setTimeout(() => toast.classList.remove('is-visible'), 4000);
    };

    // ===== Universal Modal Handler =====
    const openModal = (id) => {
        const m = $(id);
        if (m) {
            m.classList.add('is-open');
            document.body.classList.add('modal-open');
        }
    };
    const closeModal = (id) => {
        const m = $(id);
        if (m) {
            m.classList.remove('is-open');
            if (!$$('.modal-backdrop.is-open').length) {
                document.body.classList.remove('modal-open');
            }
        }
    };
    $$('.modal-backdrop').forEach(modal => {
        modal.addEventListener('click', e => {
            if (e.target === modal || e.target.closest('.modal-close-btn')) {
                closeModal('#' + modal.id);
            }
        });
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            $$('.modal-backdrop.is-open').forEach(m => closeModal('#' + m.id));
        }
    });

    // ===== Quick Search (Spotlight / Cmd+K) =====
    (function initQuickSearch() {
        const searchModal = $('#searchModal');
        const trigger = $('#searchTriggerBtn');
        const input = $('#searchInput');
        const resultsBox = $('#searchResults');

        const SEARCH_INDEX = [
            { title: 'GForce Grey', type: 'Агентство', url: 'agencies.html#agenciesGrid', desc: 'Креативное агентство, Золото Cannes Lions' },
            { title: 'Mindshare', type: 'Агентство', url: 'agencies.html#agenciesGrid', desc: 'Медиапланирование и данные GroupM / WPP' },
            { title: 'Wavemaker', type: 'Агентство', url: 'agencies.html#agenciesGrid', desc: 'Медиа, контент и технологии, максимизация ROI' },
            { title: 'EssenceMediacom', type: 'Агентство', url: 'agencies.html#agenciesGrid', desc: 'Digital-экспертиза и омниканальные медиа' },
            { title: 'DASM Digital Hub', type: 'Агентство', url: 'agencies.html#agenciesGrid', desc: 'Programmatic, Performance, SEO и аналитика' },
            { title: 'DASM PR', type: 'Агентство', url: 'agencies.html#agenciesGrid', desc: 'Управление репутацией, связи со СМИ и ESG' },
            { title: 'Action & Brand Experience', type: 'Агентство', url: 'agencies.html#agenciesGrid', desc: 'BTL, трейд-маркетинг и события' },
            { title: 'The National Sport of Kazakhstan', type: 'Кейс', url: 'works.html#casesGrid', desc: 'Первое золото Cannes Lions 2024' },
            { title: 'Saltanat Light', type: 'Кейс', url: 'works.html#casesGrid', desc: 'Синхронизация DOOH экранов Citix, AdFest Gold Lotus' },
            { title: 'Kaspi Жұма и SuperApp', type: 'Кейс', url: 'works.html#casesGrid', desc: '4× Клиент года, Awareness 98%' },
            { title: 'FMCG & Telecom на 5 стран', type: 'Кейс', url: 'works.html#casesGrid', desc: 'CPT −27%, единый хаб' },
            { title: 'Казахстан (Алматы)', type: 'Страна', url: 'countries.html', desc: 'Штаб-квартира группы, 15 агентств' },
            { title: 'Узбекистан (Ташкент)', type: 'Страна', url: 'countries.html', desc: 'Крупнейший региональный хаб' },
            { title: 'Кыргызстан (Бишкек)', type: 'Страна', url: 'countries.html', desc: 'Медиа и креатив в Бишкеке' },
            { title: 'Азербайджан (Баку)', type: 'Страна', url: 'countries.html', desc: 'Офис группы на Кавказе' },
            { title: 'Грузия (Тбилиси)', type: 'Страна', url: 'countries.html', desc: 'Креативный и медийный хаб' },
            { title: 'Senior Creative Copywriter', type: 'Вакансия', url: 'career.html#vacancyList', desc: 'Алматы • Креатив 360' },
            { title: 'Account Director', type: 'Вакансия', url: 'career.html#vacancyList', desc: 'Алматы / Ташкент • Client Service' },
            { title: 'Digital Media Planner', type: 'Вакансия', url: 'career.html#vacancyList', desc: 'Алматы • Media & Digital' }
        ];

        const openSearch = () => {
            if (searchModal) {
                openModal('#searchModal');
                if (input) { input.value = ''; input.focus(); renderResults(''); }
            }
        };

        if (trigger) trigger.addEventListener('click', openSearch);
        document.addEventListener('keydown', e => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                openSearch();
            }
        });

        const renderResults = q => {
            if (!resultsBox) return;
            const query = q.trim().toLowerCase();
            const filtered = query
                ? SEARCH_INDEX.filter(it => it.title.toLowerCase().includes(query) || it.desc.toLowerCase().includes(query) || it.type.toLowerCase().includes(query))
                : SEARCH_INDEX.slice(0, 6);

            if (!filtered.length) {
                resultsBox.innerHTML = '<div style="padding:20px; text-align:center; color:var(--text-muted)">Ничего не найдено</div>';
                return;
            }

            resultsBox.innerHTML = filtered.map(it => `
                <a href="${it.url}" class="search-result-item">
                    <div class="search-result-info">
                        <span class="search-result-title">${it.title}</span>
                        <span class="search-result-meta">${it.desc}</span>
                    </div>
                    <span class="search-result-badge">${it.type}</span>
                </a>
            `).join('');
        };

        if (input) {
            input.addEventListener('input', () => renderResults(input.value));
        }
    })();

    // ===== Модалка Деталей Кейсов =====
    (function initCaseModals() {
        const CASES_DATA = {
            'cannes-gold': {
                title: 'The National Sport of Kazakhstan',
                meta: 'GForce Grey · Ruh Fighting Championship',
                badge: '🏆 Cannes Lions Gold (2024)',
                img: 'https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?auto=format&fit=crop&w=1200&q=85',
                desc: 'Исторический проект для рекламной индустрии Казахстана: первое золото в Каннах. Проект поднял острейшую социальную тему бытового насилия через провокационный анонс боя мужчины и женщины на Ruh Fighting. На экранах Citix по всему Казахстану кампания вызвала колоссальный общественный резонанс и реальные изменения.',
                kpi1: 'Gold Lion', kpi1Sub: 'Social & Influencer',
                kpi2: '1 763', kpi2Sub: 'Проекта в категории',
                kpi3: '90%', kpi3Sub: 'Вовлечённых — мужчины'
            },
            'saltanat-light': {
                title: 'Saltanat Light',
                meta: 'GForce Grey & Citix',
                badge: '🏆 AdFest Gold Lotus & E+ Grand Prix',
                img: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=85',
                desc: 'Интеграция городской сети цифровых уличных поверхностей DOOH с данными шелтеров и центров помощи. Ночью световые экраны транслировали маршруты безопасности и контакты экстренных служб.',
                kpi1: '100+', kpi1Sub: 'Умных экранов DOOH',
                kpi2: 'Gold', kpi2Sub: 'AdFest Lotus 2024',
                kpi3: 'Grand Prix', kpi3Sub: 'E+ Central Asia'
            },
            'kaspi': {
                title: 'Kaspi Жұма и SuperApp',
                meta: 'GForce Grey & DASM Media',
                badge: '🏆 4× Client of the Year',
                img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85',
                desc: 'Многолетнее стратегическое и креативное сопровождение главного финтех-бренда страны: национальные кампании с рекордной узнаваемостью.',
                kpi1: '4 раза', kpi1Sub: 'Клиент года',
                kpi2: '98%', kpi2Sub: 'Awareness',
                kpi3: '360°', kpi3Sub: 'TV + Digital'
            },
                        'multi-country': {
                title: 'FMCG & Telecom на 5 стран',
                meta: 'Mindshare / Wavemaker / DASMART',
                badge: '📊 ROI +185%',
                img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=85',
                desc: 'Единая медиа- и digital-стратегия для Казахстана, Узбекистана, Кыргызстана, Таджикистана и Армении.',
                kpi1: '-27%', kpi1Sub: 'CPT',
                kpi2: '+42%', kpi2Sub: 'Органика',
                kpi3: '5 стран', kpi3Sub: 'Единый хаб'
            },
            'mars-mms': {
                title: 'Mars · M&M’s × онлайн-кинотеатр IVI',
                meta: 'Rating Point · Media & Special Project',
                badge: '🎬 Спецпроект',
                img: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1200&q=85',
                desc: 'Интерактивный брендированный спецпроект для Mars (M&M’s) в партнёрстве с онлайн-кинотеатром IVI с вовлечением киноаудитории.',
                kpi1: '360°', kpi1Sub: 'Digital & OLV',
                kpi2: 'Top-1', kpi2Sub: 'Категория снеков',
                kpi3: 'IVI', kpi3Sub: 'Эксклюзивная интеграция'
            },
            'agusha': {
                title: 'АГУ-МАРАФОН',
                meta: 'DASM Ideas · BTL & Digital Activation',
                badge: '🧡 Национальное промо',
                img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=85',
                desc: 'Масштабная семейная бренд-активация и национальный марафон для бренда «Агуша» с охватом ключевых городов Казахстана.',
                kpi1: 'National', kpi1Sub: 'Охват по РК',
                kpi2: 'BTL+SMM', kpi2Sub: 'Интеграция 360°',
                kpi3: '10 000+', kpi3Sub: 'Участников активации'
            },
            'first-adel': {
                title: 'Шоу «Готовим с Адель»',
                meta: 'First Media / ТВ-продакшн и спонсорство',
                badge: '📺 ТВ-проект',
                img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=85',
                desc: 'Кулинарное телевизионное шоу выходного дня с нативной спонсорской интеграцией FMCG-брендов в прайм-тайм.',
                kpi1: 'Воскресенье', kpi1Sub: 'Утренний прайм 09:25',
                kpi2: 'TV + YouTube', kpi2Sub: 'Кросс-медиа эфир',
                kpi3: 'High Affinity', kpi3Sub: 'Семейная аудитория'
            }
        };

        $$('[data-case-id], [data-case-key]').forEach(el => {
            el.addEventListener('click', e => {
                e.preventDefault();
                const id = el.dataset.caseId || el.dataset.caseKey;
                const d = CASES_DATA[id];
                if (!d) return;

                const set = (sel, val) => { const n = $(sel); if (n) n.textContent = val; };
                set('#caseModalBadge', d.badge);
                set('#caseModalTitle', d.title);
                set('#caseModalMeta', d.meta);
                set('#caseModalDesc', d.desc);
                set('#caseModalKpi1', d.kpi1);
                set('#caseModalKpi1Sub', d.kpi1Sub);
                set('#caseModalKpi2', d.kpi2);
                set('#caseModalKpi2Sub', d.kpi2Sub);
                set('#caseModalKpi3', d.kpi3);
                set('#caseModalKpi3Sub', d.kpi3Sub);

                const img = $('#caseModalImg');
                if (img) {
                    img.src = d.img;
                    img.alt = d.title;
                }
                openModal('#caseModal');
            });
        });
    })();

    // ===== Модалка Отклика на Вакансии =====
    (function initApplyModal() {
        const modal = $('#applyModal');
        const badge = $('#applyModalRole');
        const hiddenRole = $('#applyModalRoleInput');
        const fileInput = $('#resumeFileInput');
        const fileText = $('#resumeFileName');

        $$('[data-apply-role]').forEach(btn => {
            btn.addEventListener('click', e => {
                e.preventDefault();
                const role = btn.dataset.applyRole || 'Специалист';
                if (badge) badge.textContent = role;
                if (hiddenRole) hiddenRole.value = role;
                openModal('#applyModal');
            });
        });

        if (fileInput && fileText) {
            fileInput.addEventListener('change', () => {
                if (fileInput.files.length) {
                    fileText.textContent = '📎 ' + fileInput.files[0].name;
                }
            });
        }
    })();

    // ===== Интерактивный Конструктор Брифа (Brief Builder) =====
    (function initBriefBuilder() {
        const root = $('#briefBuilder');
        if (!root) return;

        let goal = 'creative';
        let countries = ['Казахстан'];
        let budget = 'стандарт';

        const updateSummary = () => {
            const agencyMap = {
                'creative': 'GForce Grey · Креативный продакшн',
                'media': 'Mindshare / Wavemaker · Медиабаинг',
                'digital': 'DASM Digital Hub · Performance & SMM',
                'pr': 'DASM PR & Action · Репутация и BTL'
            };
            const rec = $('#bbRecommend');
            if (rec) rec.textContent = agencyMap[goal] || 'DASM Group Hub';
        };

        $$('[data-bb-goal]').forEach(btn => {
            btn.addEventListener('click', () => {
                $$('[data-bb-goal]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                goal = btn.dataset.bbGoal;
                updateSummary();
            });
        });

        $$('[data-bb-country]').forEach(btn => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                const c = btn.querySelector('span:last-child').textContent.trim();
                if (btn.classList.contains('active')) {
                    if (!countries.includes(c)) countries.push(c);
                } else {
                    countries = countries.filter(x => x !== c);
                    if (!countries.length) { countries.push('Казахстан'); btn.classList.add('active'); }
                }
                updateSummary();
            });
        });

        $$('[data-bb-budget]').forEach(btn => {
            btn.addEventListener('click', () => {
                $$('[data-bb-budget]').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                budget = btn.dataset.bbBudget;
                updateSummary();
            });
        });

        const cta = $('#bbCta');
        if (cta) {
            cta.addEventListener('click', () => {
                const ta = $('#footer-contact textarea') || $('textarea[name="message"]');
                if (ta) {
                    ta.value = `Здравствуйте! Хотим запустить проект:\n- Направление: ${goal}\n- Регион: ${countries.join(', ')}\n- Масштаб: ${budget}`;
                    ta.focus();
                }
                window.location.hash = '#footer-contact';
                window.showToast('Параметры брифа скопированы в форму!', '✨');
            });
        }

        updateSummary();
    })();

    // ===== Интерактивный Хаб Контактов (Города и Часовые пояса) =====
    (function initCityContacts() {
        const HQ_ADDR = 'ул. Шамши Калдаякова, 34 · ул. Айтеке би, 29 (БЦ Absolut)';
        const REGIONAL = 'Региональный офис группы — свяжитесь через штаб-квартиру в Алматы';
        const mk = (name, utc, hq, photo) => ({
            name: name,
            address: hq ? HQ_ADDR : REGIONAL,
            phone: '+7 (727) 313-13-91',
            phoneRaw: '+77273131391',
            email: 'info@dasm.kz',
            utc: utc,
            photo: photo,
            map: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(hq ? 'Алматы, ул. Шамши Калдаякова, 34' : name)
        });
        const defaultAlmatyPhoto = ($('#chCityPhoto') && $('#chCityPhoto').getAttribute('src')) || '';
        const CITIES = {
            almaty: mk('Алматы · Штаб-квартира', 5, true, defaultAlmatyPhoto),
            tashkent: mk('Ташкент · Узбекистан', 5, false, 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=900&q=80'),
            bishkek: mk('Бишкек · Кыргызстан', 6, false, 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=900&q=80'),
            baku: mk('Баку · Азербайджан', 4, false, 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80'),
            tbilisi: mk('Тбилиси · Грузия', 4, false, 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=900&q=80'),
            yerevan: mk('Ереван · Армения', 4, false, 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=900&q=80'),
            dushanbe: mk('Душанбе · Таджикистан', 5, false, 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=900&q=80'),
            ulaanbaatar: mk('Улан-Батор · Монголия', 8, false, 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80')
        };
        const titleEl = $('#chCityTitle');
        const photoEl = $('#chCityPhoto');
        const addrEl = $('#chCityAddress');
        const phoneEl = $('#chCityPhone');
        const emailEl = $('#chCityEmail');
        const mapEl = $('#chCityMap');
        const waEl = $('#chCityWA');
        const timeEl = $('#chCityTime');

        let currentCityUtc = 5;

        const updateClock = () => {
            if (!timeEl) return;
            const now = new Date();
            const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
            const cityDate = new Date(utc + (3600000 * currentCityUtc));
            const hours = String(cityDate.getHours()).padStart(2, '0');
            const minutes = String(cityDate.getMinutes()).padStart(2, '0');
            const seconds = String(cityDate.getSeconds()).padStart(2, '0');
            timeEl.textContent = `${hours}:${minutes}:${seconds}`;
        };
        setInterval(updateClock, 1000);

        $$('.city-selector-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                $$('.city-selector-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const c = CITIES[btn.dataset.city];
                if (!c) return;

                currentCityUtc = c.utc;
                updateClock();

                if (titleEl) titleEl.textContent = c.name;
                if (photoEl && c.photo) {
                    photoEl.src = c.photo;
                    photoEl.alt = c.name;
                }
                if (addrEl) addrEl.textContent = c.address;
                if (phoneEl) {
                    phoneEl.textContent = c.phone;
                    phoneEl.href = 'tel:' + c.phoneRaw;
                }
                if (emailEl) {
                    emailEl.textContent = c.email;
                    emailEl.href = 'mailto:' + c.email;
                }
                if (mapEl) mapEl.href = c.map;
                if (waEl) waEl.href = 'https://wa.me/' + c.phoneRaw.replace(/\D/g, '') + '?text=' + encodeURIComponent('Здравствуйте! Обращаюсь с сайта DASM Group.');
            });
        });
        updateClock();
    })();

    // ===== Фильтрация новостей (news.html) =====
    (function initNewsFilters() {
        const filterBar = $('#newsFilterBar');
        const grid = $('#newsGrid');
        if (!filterBar || !grid) return;

        const items = $$('.news-card', grid);
        $$('.chip', filterBar).forEach(chip => {
            chip.addEventListener('click', () => {
                $$('.chip', filterBar).forEach(c => {
                    c.classList.toggle('active', c === chip);
                    c.setAttribute('aria-pressed', String(c === chip));
                });
                const f = chip.dataset.filter;
                items.forEach(item => {
                    const cats = (item.dataset.cat || '').split(' ');
                    const ok = f === 'all' || cats.includes(f);
                    item.classList.toggle('is-hidden', !ok);
                });
            });
        });
    })();


    // ===== Мобильное меню: поиск, соцсети и кнопка клиента внутри панели =====
    (function initNavExtra() {
        const nav = $('#navMenu');
        if (!nav || $('.nav-extra', nav)) return;
        const wrap = document.createElement('div');
        wrap.className = 'nav-extra';
        wrap.innerHTML =
            '<button type="button" class="nav-search">🔍 <span>' + T('Поиск') + '</span></button>' +
            '<a href="#footer-contact" class="btn btn-primary nav-cta">' + T('Стать клиентом') + '</a>' +
            '<div class="soc-badges">' +
            '<a class="soc-badge soc-ig" href="https://instagram.com/dasmgroup_official" target="_blank" rel="noopener" aria-label="Instagram"><img src="images/social/instagram.svg" alt=""></a>' +
            '<a class="soc-badge soc-in" href="https://www.linkedin.com/company/dasmgroup/" target="_blank" rel="noopener" aria-label="LinkedIn"><img src="images/social/linkedin.svg" alt=""></a>' +
            '<a class="soc-badge soc-tg" href="https://t.me/dasmgroup_official" target="_blank" rel="noopener" aria-label="Telegram"><img src="images/social/telegram.svg" alt=""></a>' +
            '<a class="soc-badge soc-yt" href="https://www.youtube.com/@DASMGroup" target="_blank" rel="noopener" aria-label="YouTube"><img src="images/social/youtube.svg" alt=""></a>' +
            '<a class="soc-badge soc-fb" href="https://www.facebook.com/profile.php?id=61552084777351" target="_blank" rel="noopener" aria-label="Facebook"><img src="images/social/facebook.svg" alt=""></a>' +
            '</div>';
        nav.appendChild(wrap);
        const closeNav = () => {
            nav.classList.remove('open');
            const b = $('#burgerBtn');
            if (b) { b.classList.remove('active'); b.setAttribute('aria-expanded', 'false'); }
            document.body.classList.remove('menu-open');
        };
        $('.nav-search', wrap).addEventListener('click', () => {
            closeNav();
            const trig = $('#searchTriggerBtn');
            if (trig) trig.click();
        });
        $('.nav-cta', wrap).addEventListener('click', closeNav);
    })();
});

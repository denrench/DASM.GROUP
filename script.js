/**
 * DASM GROUP — script.js
 * Меню, анимации, счётчики, фильтры, поиск вакансий, квиз, формы, язык.
 */

document.addEventListener('DOMContentLoaded', () => {
    const $ = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
    const T = s => (window.i18n ? window.i18n.t(s) : s);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
    }, { threshold: 0.1 });
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
        }, { threshold: 0.6 });
        counters.forEach(el => {
            el.textContent = '0';
            counterObserver.observe(el);
        });
    }

    // ===== Фильтры карточек (агентства, кейсы, страны) =====
    // <div class="filter-bar" data-target="#id" data-attr="cat"> + кнопки .chip[data-filter]
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
                '<p class="quiz-result-desc">' + desc + '</p>' +
                '<p class="quiz-result-note">' + T(NOTES[answers[1]]) + '</p>' +
                '<div class="quiz-actions">' +
                '<a href="#footer-contact" class="btn btn-primary" id="quizCta">' + T('Запросить презентацию') + '</a>' +
                '<button type="button" class="btn btn-outline" id="quizReset">' + T('Пройти заново') + '</button>' +
                '</div></div>';

            $('#quizReset', quizEl).addEventListener('click', () => { step = 0; answers = []; render(); });
            $('#quizCta', quizEl).addEventListener('click', () => {
                const ta = $('#footer-contact textarea');
                if (ta) ta.value = 'Интересует: ' + name + '.';
            });
        };

        render();
        document.addEventListener('dasm:lang', render);
    }

    // ===== Формы: проверка и отправка =====
    // Если у формы есть data-endpoint (например Formspree) — отправляем туда.
    // Если нет — открываем письмо в почтовом клиенте (data-mailto или info@dasm.kz).
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
    $$('.cards-grid, .stats-grid, .clients-wrap, .timeline, .people-grid, .faq, .vacancies-list, .filter-bar, .link-row')
        .forEach(group => {
            $$(':scope > .reveal, :scope > * > .reveal', group).forEach((el, i) => {
                el.style.setProperty('--rd', Math.min(i, 7) * 0.07 + 's');
            });
        });

    // ----- Подсветка карточек под курсором -----
    const SPOT = '.card, .case-card, .person, .tl-item, .vacancy-item, .panel';
    document.addEventListener('pointermove', e => {
        const el = e.target.closest ? e.target.closest(SPOT) : null;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }, { passive: true });

    if (!reduceMotion) {
        // ----- «Магнитные» кнопки -----
        $$('[data-magnetic]').forEach(btn => {
            btn.addEventListener('pointermove', e => {
                const r = btn.getBoundingClientRect();
                const x = (e.clientX - r.left - r.width / 2) * 0.25;
                const y = (e.clientY - r.top - r.height / 2) * 0.35;
                btn.style.transform = 'translate(' + x + 'px,' + y + 'px)';
            });
            btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
        });

        // ----- Наклон карточки кейса -----
        $$('[data-tilt]').forEach(box => {
            box.addEventListener('pointermove', e => {
                const r = box.getBoundingClientRect();
                const px = (e.clientX - r.left) / r.width - 0.5;
                const py = (e.clientY - r.top) / r.height - 0.5;
                box.style.setProperty('--ry', (px * 7) + 'deg');
                box.style.setProperty('--rx', (-py * 7) + 'deg');
            });
            box.addEventListener('pointerleave', () => {
                box.style.setProperty('--rx', '0deg');
                box.style.setProperty('--ry', '0deg');
            });
        });

        // ----- Параллакс северного сияния в hero -----
        const hero = $('#hero');
        if (hero) {
            let raf = 0;
            hero.addEventListener('pointermove', e => {
                if (raf) return;
                raf = requestAnimationFrame(() => {
                    const r = hero.getBoundingClientRect();
                    hero.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5) * 2);
                    hero.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5) * 2);
                    raf = 0;
                });
            });
        }
    }

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
        const GLYPHS = 'абвгдежзиклмнопрстуфхцчшэюя0123456789#%&';
        let idx = 0;
        let timer = 0;

        const show = word => { scr.textContent = T(word); };
        const scrambleTo = word => {
            const target = T(word);
            const total = 20;
            let frame = 0;
            clearTimeout(timer);
            const tick = () => {
                frame++;
                let out = '';
                for (let k = 0; k < target.length; k++) {
                    out += (k < (frame / total) * target.length || target[k] === ' ' || target[k] === '.')
                        ? target[k] : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
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
            capTitle.textContent = $('b', it).textContent + ' · ' + $('.sys-btn span', it).textContent;
            capAgencies.textContent = $$('.card-tags span', it).map(s => s.textContent).join(' · ');

            if (pulse && !reduceMotion && pulse.animate) {
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

});

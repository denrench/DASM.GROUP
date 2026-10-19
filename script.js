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
        };
        burgerBtn.setAttribute('aria-expanded', 'false');
        burgerBtn.addEventListener('click', () => {
            const open = navMenu.classList.toggle('open');
            burgerBtn.classList.toggle('active', open);
            burgerBtn.setAttribute('aria-expanded', String(open));
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
});

/**
 * DASM GROUP — FULL INTERACTIVE & MULTI-LANGUAGE ENGINE (RU / KZ / EN)
 * Включает:
 * 1. Брендированный прелоадер (0.6 сек)
 * 2. Переключатель Светлая / Вечерняя тема в шапке
 * 3. Интерактивный калькулятор кампании + Ползунок охвата DOOH/TV (1–8 стран)
 * 4. Умный подборщик агентства (Agency Matcher — 3 вопроса)
 * 5. Интерактивная SVG-карта 8 стран с паспортами офисов
 * 6. Живой поиск и фильтрация по тегам в разделе «Новости»
 * 7. Блок «Стажировка DASM Academy / Young Lions» в разделе «Карьера»
 * 8. Плавающий AI-консультант DASM 24/7 на всех страницах
 * 9. Полный мультиязычный перевод (RU / KZ / EN)
 */

// База данных 8 стран для Интерактивной SVG-карты и Калькулятора охвата
const countriesHubData = {
    KZ: {
        flag: "🇰🇿",
        name: "Казахстан",
        city: "Алматы (Штаб-квартира) и Астана",
        address: "г. Алматы, ул. Шамши Калдаякова, 34 / ул. Айтеке би, 29",
        pop: 20.3,
        digital: "92.4%",
        channels: "Smart DOOH (Citix), National TV, Digital, Programmatic, Influence",
        head: "Центральный хаб DASM Group • +7 (727) 313-13-91 • info@dasm.kz",
        x: 340, y: 145
    },
    UZ: {
        flag: "🇺🇿",
        name: "Узбекистан",
        city: "Ташкент",
        address: "г. Ташкент, Мирабадский район, бизнес-кластер DASM",
        pop: 37.2,
        digital: "86.0%",
        channels: "National TV, Telegram Ecosystem, OOH/DOOH, BTL & Trade",
        head: "Региональный офис в Ташкенте • uzbekistan@dasm.kz",
        x: 265, y: 205
    },
    KG: {
        flag: "🇰🇬",
        name: "Кыргызстан",
        city: "Бишкек",
        address: "г. Бишкек, деловой центр, представительство DASM",
        pop: 7.2,
        digital: "83.5%",
        channels: "Digital & Social, LED DOOH, TV Buying, BTL Activations",
        head: "Офис в Бишкеке • kyrgyzstan@dasm.kz",
        x: 365, y: 195
    },
    TJ: {
        flag: "🇹🇯",
        name: "Таджикистан",
        city: "Душанбе",
        address: "г. Душанбе, центральный операционный хаб",
        pop: 10.4,
        digital: "74.0%",
        channels: "TV & Radio Placement, OOH Billboards, Field Research & BTL",
        head: "Офис в Душанбе • tajikistan@dasm.kz",
        x: 315, y: 245
    },
    AZ: {
        flag: "🇦🇿",
        name: "Азербайджан",
        city: "Баку",
        address: "г. Баку, Каспийско-Кавказский хаб DASM",
        pop: 10.2,
        digital: "89.0%",
        channels: "Premium DOOH, TV Sponsorship, Performance & PR",
        head: "Хаб в Баку • caucasus@dasm.kz",
        x: 135, y: 205
    },
    GE: {
        flag: "🇬🇪",
        name: "Грузия",
        city: "Тбилиси",
        address: "г. Тбилиси, Кавказский кластер и продакшн-хаб",
        pop: 3.7,
        digital: "88.5%",
        channels: "Film & Commercial Production, Omnichannel Media, Digital",
        head: "Хаб в Тбилиси • georgia@dasm.kz",
        x: 75, y: 185
    },
    AM: {
        flag: "🇦🇲",
        name: "Армения",
        city: "Ереван",
        address: "г. Ереван, представительство Кавказского кластера",
        pop: 3.0,
        digital: "87.0%",
        channels: "Media Planning & Buying, Digital Performance, Events",
        head: "Офис в Ереване • armenia@dasm.kz",
        x: 95, y: 225
    },
    MN: {
        flag: "🇲🇳",
        name: "Монголия",
        city: "Улан-Батор",
        address: "г. Улан-Батор, Восточный кластер DASM Group",
        pop: 3.5,
        digital: "84.0%",
        channels: "Mobile-First Digital, Social Media, National TV & OOH",
        head: "Офис в Улан-Баторе • mongolia@dasm.kz",
        x: 545, y: 130
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. БРЕНДИРОВАННЫЙ ПРЕЛОАДЕР (0.6 СЕКУНДЫ)
    const preloader = document.createElement('div');
    preloader.className = 'dasm-preloader';
    preloader.innerHTML = `
        <div class="preloader-brand">DASM<span>.</span>GROUP</div>
        <div class="preloader-sub">UNITED BY QUESTIONS — WE SAY DA</div>
        <div class="preloader-bar"><div class="preloader-bar-fill"></div></div>
    `;
    document.body.appendChild(preloader);
    setTimeout(() => {
        preloader.classList.add('hide');
    }, 620);

    // 2. ПЕРЕКЛЮЧАТЕЛЬ СВЕТЛАЯ / ВЕЧЕРНЯЯ ТЕМА В ШАПКЕ
    const savedTheme = localStorage.getItem('dasm_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const headerActions = document.querySelector('.header-actions');
    if (headerActions) {
        const themeBtn = document.createElement('button');
        themeBtn.type = 'button';
        themeBtn.className = 'theme-toggle-btn';
        themeBtn.title = 'Переключить тему: Светлая / Вечерняя';
        themeBtn.innerHTML = savedTheme === 'dark' ? '☀️' : '🌙';
        headerActions.insertBefore(themeBtn, headerActions.firstChild);

        themeBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('dasm_theme', next);
            themeBtn.innerHTML = next === 'dark' ? '☀️' : '🌙';
        });
    }

    // 3. БОКОВЫЕ ДОК-ПАНЕЛИ И АВТО-ЗАПОЛНЕНИЕ ВНУТРЕННИХ ШАПОК
    const leftRail = document.createElement('aside');
    leftRail.className = 'edge-rail edge-rail-left';
    leftRail.innerHTML = `
        <span class="rail-dot"></span>
        <span class="rail-pill">DASM GROUP • EST. 1994</span>
        <a href="https://www.instagram.com/dasmgroup_official" target="_blank" class="rail-btn" title="Instagram">IG</a>
        <a href="https://www.linkedin.com" target="_blank" class="rail-btn" title="LinkedIn">IN</a>
    `;
    document.body.appendChild(leftRail);

    const rightRail = document.createElement('aside');
    rightRail.className = 'edge-rail edge-rail-right';
    rightRail.innerHTML = `
        <a href="#footer-contact" class="rail-btn" title="Быстрая заявка">✉</a>
        <span class="rail-pill">8 СТРАН • 15 АГЕНТСТВ</span>
        <button type="button" class="rail-btn" onclick="window.scrollTo({top:0, behavior:'smooth'})" title="Наверх">↑</button>
    `;
    document.body.appendChild(rightRail);

    const pageHeroContainer = document.querySelector('.page-hero .container');
    if (pageHeroContainer && !pageHeroContainer.querySelector('.page-hero-split')) {
        const originalChildren = Array.from(pageHeroContainer.children);
        const splitWrap = document.createElement('div');
        splitWrap.className = 'page-hero-split';

        const leftSide = document.createElement('div');
        originalChildren.forEach(ch => leftSide.appendChild(ch));

        const rightSide = document.createElement('div');
        rightSide.className = 'page-hero-aside reveal visible';
        rightSide.innerHTML = `
            <div class="aside-metric">
                <strong>1994 год</strong>
                <span>32 года лидерства в регионе</span>
            </div>
            <div class="aside-metric">
                <strong>15 агентств</strong>
                <span>Партнёр глобальной сети WPP</span>
            </div>
            <div class="aside-metric">
                <strong>Cannes Lions</strong>
                <span>Золото, Серебро и Бронза</span>
            </div>
            <div class="aside-metric">
                <strong>8 рынков</strong>
                <span>Центральная Азия и Кавказ</span>
            </div>
        `;
        splitWrap.appendChild(leftSide);
        splitWrap.appendChild(rightSide);
        pageHeroContainer.appendChild(splitWrap);
    }

    // 4. ИНТЕРАКТИВНЫЙ КАЛЬКУЛЯТОР КАМПАНИИ + ПОЛЗУНОК ОХВАТА DOOH/TV + AGENCY MATCHER
    const mainEl = document.querySelector('main');
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') || document.querySelector('.hero');
    const isAgenciesPage = window.location.pathname.includes('agencies.html');

    if (mainEl && (isHomePage || isAgenciesPage)) {
        const interactiveSection = document.createElement('section');
        interactiveSection.className = 'section bg-darker';
        interactiveSection.innerHTML = `
            <div class="container">
                <div class="section-header reveal visible">
                    <div>
                        <span class="section-tag">Интерактивное планирование B2B</span>
                        <h2 class="section-title">Рассчитайте медиаохват кампании и подберите профильное агентство</h2>
                    </div>
                </div>

                <div class="interactive-suite-grid">
                    <div class="suite-box reveal visible">
                        <div>
                            <span class="section-tag">Калькулятор охвата DOOH / TV / Digital</span>
                            <h3 class="card-title">Прогноз аудитории в Центральной Азии и на Кавказе</h3>
                            <p class="card-text">Выберите количество стран присутствия и медийные каналы, чтобы увидеть потенциальный охват вашей кампании.</p>

                            <div class="calc-controls">
                                <div>
                                    <div class="calc-label">
                                        <span>Масштаб запуска (Ползунок стран: от 1 до 8 рынков)</span>
                                        <strong id="sliderCountryLabel">3 страны (Казахстан, Узбекистан, Кыргызстан)</strong>
                                    </div>
                                    <input type="range" min="1" max="8" value="3" class="range-slider" id="countryRangeSlider">
                                </div>

                                <div>
                                    <div class="calc-label"><span>Выберите каналы коммуникации:</span></div>
                                    <div class="calc-pills" id="channelPills">
                                        <button type="button" class="calc-pill active" data-mult="1.0">📺 National TV</button>
                                        <button type="button" class="calc-pill active" data-mult="0.9">🏙 Smart DOOH (Citix)</button>
                                        <button type="button" class="calc-pill active" data-mult="1.1">📱 Digital & Programmatic</button>
                                        <button type="button" class="calc-pill" data-mult="0.6">🌟 Influence & PR</button>
                                        <button type="button" class="calc-pill" data-mult="0.5">🎪 BTL & Brand Activation</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="calc-results-board">
                                <div class="calc-res-item">
                                    <strong id="calcReachVal">44.8 млн</strong>
                                    <span>Уникальный охват (Reach)</span>
                                </div>
                                <div class="calc-res-item">
                                    <strong id="calcOtsVal">195+ млн</strong>
                                    <span>Контактов с рекламой (OTS)</span>
                                </div>
                                <div class="calc-res-item">
                                    <strong id="calcHubsVal">Единое окно</strong>
                                    <span>Координация через Алматы HQ</span>
                                </div>
                            </div>
                            <div style="margin-top: 16px;">
                                <a href="#footer-contact" class="btn btn-primary btn-block" id="calcOrderBtn">Запросить детальный медиаплан по этим параметрам →</a>
                            </div>
                        </div>
                    </div>

                    <div class="suite-box reveal visible" id="agencyMatcherBox">
                        <div>
                            <span class="section-tag">AI Agency Matcher</span>
                            <h3 class="card-title">Умный подборщик агентства за 3 шага</h3>
                            <p class="card-text">Ответьте на 3 коротких вопроса о вашей бизнес-задаче, и алгоритм порекомендует профильное агентство из структуры DASM Group.</p>

                            <div class="matcher-step-indicator">
                                <span class="matcher-dot active" data-step="0"></span>
                                <span class="matcher-dot" data-step="1"></span>
                                <span class="matcher-dot" data-step="2"></span>
                            </div>

                            <div id="matcherStageContent"></div>
                        </div>

                        <div class="matcher-result-card" id="matcherRecommendation">
                            <small style="color:var(--text-secondary); font-weight:700;">Текущая рекомендация:</small>
                            <h4 style="font-family:var(--font-display); margin:4px 0;">Экосистема DASM 360°</h4>
                            <p style="font-size:0.84rem; color:var(--text-secondary);">Выберите ответы выше, чтобы получить персональную рекомендацию агентства.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        mainEl.appendChild(interactiveSection);

        const rangeSlider = document.getElementById('countryRangeSlider');
        const sliderLabel = document.getElementById('sliderCountryLabel');
        const reachVal = document.getElementById('calcReachVal');
        const otsVal = document.getElementById('calcOtsVal');
        const channelBtns = document.querySelectorAll('#channelPills .calc-pill');

        const countryNamesList = [
            "1 страна (Казахстан)",
            "2 страны (Казахстан, Узбекистан)",
            "3 страны (Казахстан, Узбекистан, Кыргызстан)",
            "4 страны (+ Таджикистан)",
            "5 стран (+ Азербайджан)",
            "6 стран (+ Грузия)",
            "7 стран (+ Армения)",
            "Все 8 стран Центральной Азии, Кавказа и Монголии"
        ];
        const cumulativePop = [20.3, 57.5, 64.7, 75.1, 85.3, 89.0, 92.0, 95.5];

        function recalculateMedia() {
            if (!rangeSlider) return;
            const count = parseInt(rangeSlider.value, 10);
            sliderLabel.textContent = countryNamesList[count - 1];

            let activeChannels = 0;
            let multSum = 0;
            channelBtns.forEach(b => {
                if (b.classList.contains('active')) {
                    activeChannels++;
                    multSum += parseFloat(b.dataset.mult);
                }
            });
            if (activeChannels === 0) multSum = 0.5;

            const basePop = cumulativePop[count - 1];
            const estimatedReach = Math.min(basePop * 0.88, (basePop * 0.42 * (0.55 + multSum * 0.25))).toFixed(1);
            const estimatedOts = Math.round(estimatedReach * (3.2 + activeChannels * 0.85));

            reachVal.textContent = `${estimatedReach} млн`;
            otsVal.textContent = `${estimatedOts}+ млн`;
        }

        rangeSlider.addEventListener('input', recalculateMedia);
        channelBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                recalculateMedia();
            });
        });
        recalculateMedia();

        const matcherQuiz = [
            {
                q: "Шаг 1 из 3: Какова ваша главная цель сейчас?",
                opts: [
                    { text: "🎨 Создать прорывной креатив, бренд или ТВ-ролик", type: "creative" },
                    { text: "📈 Масштабный медиабаинг (TV, OOH, Digital) с высоким ROI", type: "media" },
                    { text: "🚀 Перформанс, лидогенерация, PR, SMM или BTL-ивент", type: "digital" }
                ]
            },
            {
                q: "Шаг 2 из 3: Какова география вашей кампании?",
                opts: [
                    { text: "🇰🇿 Национальный запуск по всему Казахстану", scale: "local" },
                    { text: "🌏 Мультистрановой запуск (Узбекистан, ЦА, Кавказ)", scale: "multi" },
                    { text: "🏙 Фокус на мегаполисах (Алматы, Астана, Ташкент)", scale: "cities" }
                ]
            },
            {
                q: "Шаг 3 из 3: Какой формат работы вам ближе?",
                opts: [
                    { text: "🏆 Глобальное сетевое агентство WPP / GroupM", net: "wpp" },
                    { text: "⚡ Комплексное обслуживание 360° в одном окне", net: "full" },
                    { text: "🎯 Точечный спецпроект / фестивальный кейс", net: "special" }
                ]
            }
        ];

        let currentStep = 0;
        let answers = [];
        const stageContainer = document.getElementById('matcherStageContent');
        const recBox = document.getElementById('matcherRecommendation');
        const dots = document.querySelectorAll('.matcher-dot');

        function renderMatcherStep() {
            if (!stageContainer) return;
            dots.forEach((d, idx) => d.classList.toggle('active', idx <= currentStep));
            const item = matcherQuiz[currentStep];
            stageContainer.innerHTML = `
                <div class="matcher-question">${item.q}</div>
                <div class="matcher-options">
                    ${item.opts.map((o, i) => `<button type="button" class="matcher-opt-btn" data-idx="${i}">${o.text}</button>`).join('')}
                </div>
            `;
            stageContainer.querySelectorAll('.matcher-opt-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const chosen = item.opts[parseInt(btn.dataset.idx, 10)];
                    answers.push(chosen);
                    if (currentStep < matcherQuiz.length - 1) {
                        currentStep++;
                        renderMatcherStep();
                    } else {
                        showMatcherFinalResult();
                    }
                });
            });
        }

        function showMatcherFinalResult() {
            const primaryType = answers[0].type;
            let agencyName = "GForce Grey (DASM Group)";
            let agencyDesc = "Идеально для прорывного креатива, стратегии, брендинга и кампаний уровня Cannes Lions.";

            if (primaryType === "media") {
                agencyName = "Mindshare / Wavemaker / DASMART";
                agencyDesc = "Лидеры медиапланирования и баинга (TV, Smart DOOH, Digital) с доступом к эконометрике GroupM.";
            } else if (primaryType === "digital") {
                agencyName = "EssenceMediacom & DASM Digital / Action";
                agencyDesc = "Лучший выбор для Performance-маркетинга, Programmatic, SMM, инфлюенсеров, PR и BTL-активаций.";
            }

            stageContainer.innerHTML = `
                <div style="padding:12px 0;">
                    <strong style="color:var(--accent-primary);">✓ Подбор успешно завершён!</strong>
                    <p style="font-size:0.88rem; color:var(--text-secondary); margin-top:4px;">Мы сформировали оптимальную конфигурацию команды под ваши ответы.</p>
                    <button type="button" class="btn btn-outline btn-sm" id="resetMatcherBtn" style="margin-top:10px;">Пройти тест заново ↻</button>
                </div>
            `;

            recBox.innerHTML = `
                <span class="section-tag" style="margin-bottom:8px;">Ваше идеальное агентство</span>
                <h4 style="font-family:var(--font-display); font-size:1.15rem; margin-bottom:6px;">${agencyName}</h4>
                <p style="font-size:0.86rem; color:var(--text-secondary); margin-bottom:14px;">${agencyDesc}</p>
                <a href="#footer-contact" class="btn btn-primary btn-sm" id="applyMatcherBtn">Оставить заявку для ${agencyName.split(' ')[0]} →</a>
            `;

            document.getElementById('resetMatcherBtn').addEventListener('click', () => {
                currentStep = 0;
                answers = [];
                renderMatcherStep();
            });

            const applyBtn = document.getElementById('applyMatcherBtn');
            if (applyBtn) {
                applyBtn.addEventListener('click', () => {
                    const msgField = document.querySelector('#footer-contact textarea[name="message"]');
                    if (msgField) {
                        msgField.value = `Подобрано через Agency Matcher: ${agencyName}. Хотим обсудить запуск проекта.`;
                    }
                });
            }
        }

        renderMatcherStep();
    }

    // 5. ИНТЕРАКТИВНАЯ SVG-КАРТА 8 СТРАН ПРИСУТСТВИЯ
    const isCountriesPage = window.location.pathname.includes('countries.html');
    if (mainEl && (isCountriesPage || isHomePage)) {
        const mapSection = document.createElement('section');
        mapSection.className = 'section';
        mapSection.innerHTML = `
            <div class="container">
                <div class="section-header reveal visible">
                    <div>
                        <span class="section-tag">Интерактивная карта присутствия</span>
                        <h2 class="section-title">8 стран Центральной Азии, Кавказа и Монголии: выберите хаб на карте</h2>
                    </div>
                </div>

                <div class="svg-map-module reveal visible">
                    <div class="svg-map-canvas">
                        <svg viewBox="0 0 650 320" class="dasm-map-svg" aria-label="Карта присутствия DASM Group">
                            <path class="map-region-shape" d="M45,155 L165,150 L180,245 L55,250 Z" />
                            <path class="map-region-shape" d="M205,75 L465,70 L475,265 L215,270 Z" />
                            <path class="map-region-shape" d="M485,85 L625,85 L615,185 L490,180 Z" />

                            <g stroke="var(--accent-primary)" stroke-width="1.5" stroke-dasharray="4 4" opacity="0.55">
                                <line x1="340" y1="145" x2="265" y2="205" />
                                <line x1="340" y1="145" x2="365" y2="195" />
                                <line x1="340" y1="145" x2="315" y2="245" />
                                <line x1="340" y1="145" x2="135" y2="205" />
                                <line x1="135" y1="205" x2="75" y2="185" />
                                <line x1="135" y1="205" x2="95" y2="225" />
                                <line x1="340" y1="145" x2="545" y2="130" />
                            </g>

                            ${Object.entries(countriesHubData).map(([code, d]) => `
                                <g class="map-node-group ${code === 'KZ' ? 'active' : ''}" data-code="${code}">
                                    <circle cx="${d.x}" cy="${d.y}" r="8" class="map-node-circle" />
                                    <text x="${d.x}" y="${d.y - 14}" text-anchor="middle" class="map-node-label">${d.flag}${d.name}</text>
                                </g>
                            `).join('')}
                        </svg>
                    </div>

                    <div class="map-info-panel" id="mapHubDetails"></div>
                </div>
            </div>
        `;

        const targetSection = isCountriesPage ? mainEl.querySelector('.section') : mainEl.lastElementChild;
        if (targetSection) {
            mainEl.insertBefore(mapSection, targetSection);
        } else {
            mainEl.appendChild(mapSection);
        }

        const mapDetails = document.getElementById('mapHubDetails');
        const mapNodes = mapSection.querySelectorAll('.map-node-group');

        function renderCountryHub(code) {
            if (!mapDetails) return;
            const d = countriesHubData[code] || countriesHubData.KZ;
            mapDetails.innerHTML = `
                <div>
                    <div style="display:flex; align-items:center; gap:12px; margin-bottom:10px;">
                        <span style="font-size:2.4rem;">${d.flag}</span>
                        <div>
                            <span class="section-tag" style="margin-bottom:4px;">Официальный хаб DASM</span>
                            <h3 style="font-family:var(--font-display); font-size:1.3rem;">${d.name} — ${d.city}</h3>
                        </div>
                    </div>

                    <div class="map-meta-list">
                        <div class="map-meta-row"><span>Население рынка:</span><strong>${d.pop} млн человек</strong></div>
                        <div class="map-meta-row"><span>Проникновение Digital:</span><strong>${d.digital}</strong></div>
                        <div class="map-meta-row"><span>Локация офиса:</span><strong>${d.address}</strong></div>
                        <div class="map-meta-row"><span>Топ-каналы медиа:</span><strong>${d.channels}</strong></div>
                        <div class="map-meta-row"><span>Контакты хаба:</span><strong>${d.head}</strong></div>
                    </div>
                </div>
                <a href="#footer-contact" class="btn btn-primary btn-block">Запустить кампанию на рынке: ${d.name} →</a>
            `;
        }

        mapNodes.forEach(node => {
            node.addEventListener('click', () => {
                mapNodes.forEach(n => n.classList.remove('active'));
                node.classList.add('active');
                renderCountryHub(node.getAttribute('data-code'));
            });
            node.addEventListener('mouseenter', () => {
                mapNodes.forEach(n => n.classList.remove('active'));
                node.classList.add('active');
                renderCountryHub(node.getAttribute('data-code'));
            });
        });

        renderCountryHub('KZ');
    }

    // 6. ЖИВОЙ ПОИСК И ФИЛЬТРЫ ПО НОВОСТЯМ
    if (window.location.pathname.includes('news.html')) {
        const newsSectionContainer = document.querySelector('.section .container');
        const newsCards = document.querySelectorAll('.news-card');
        if (newsSectionContainer && newsCards.length > 0) {
            const toolbar = document.createElement('div');
            toolbar.className = 'news-Filter-toolbar reveal visible';
            toolbar.innerHTML = `
                <input type="search" class="news-search-input" id="newsSearchInput" placeholder="🔍 Живой поиск по новостям, фестивалям и аналитике...">
                <div class="calc-pills" id="newsTagFilters">
                    <button type="button" class="calc-pill active" data-tag="all">Все новости</button>
                    <button type="button" class="calc-pill" data-tag="Фестивали">Фестивали</button>
                    <button type="button" class="calc-pill" data-tag="Аналитика">Аналитика рынка</button>
                    <button type="button" class="calc-pill" data-tag="назначения">Назначения</button>
                    <button type="button" class="calc-pill" data-tag="Мероприятия">Ивенты</button>
                    <button type="button" class="calc-pill" data-tag="AI">Технологии и AI</button>
                </div>
            `;
            newsSectionContainer.insertBefore(toolbar, newsSectionContainer.firstChild);

            const searchInput = document.getElementById('newsSearchInput');
            const tagBtns = toolbar.querySelectorAll('#newsTagFilters .calc-pill');
            let activeTag = 'all';

            function filterNewsArticles() {
                const query = searchInput.value.trim().toLowerCase();
                newsCards.forEach(card => {
                    const text = card.textContent.toLowerCase();
                    const matchesSearch = !query || text.includes(query);
                    const matchesTag = activeTag === 'all' || text.includes(activeTag.toLowerCase());
                    card.style.display = (matchesSearch && matchesTag) ? '' : 'none';
                });
            }

            searchInput.addEventListener('input', filterNewsArticles);
            tagBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    tagBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    activeTag = btn.getAttribute('data-tag');
                    filterNewsArticles();
                });
            });
        }
    }

    // 7. СТАЖИРОВКА DASM ACADEMY / YOUNG LIONS
    if (window.location.pathname.includes('career.html') && mainEl) {
        const academySection = document.createElement('section');
        academySection.className = 'section';
        academySection.innerHTML = `
            <div class="container">
                <div class="academy-banner reveal visible">
                    <div class="section-header" style="margin-bottom:24px;">
                        <div>
                            <span class="section-tag">Для студентов и молодых талантов</span>
                            <h2 class="section-title">Стажировка DASM Academy & Подготовка к Young Lions Central Asia</h2>
                            <p class="page-lead" style="margin-top:10px;">Оплачиваемая 3-месячная программа старта карьеры под менторством обладателей Золота Cannes Lions.</p>
                        </div>
                        <a href="#footer-contact" class="btn btn-primary btn-lg">Подать заявку на стажировку →</a>
                    </div>

                    <div class="cards-grid cols-4">
                        <div class="card">
                            <div class="card-num">Трек 01</div>
                            <h3 class="card-title">Creative & Art Direction</h3>
                            <p class="card-text">Работа в парах копирайтер + арт-директор в GForce Grey. Разбор фестивальных кейсов.</p>
                        </div>
                        <div class="card">
                            <div class="card-num">Трек 02</div>
                            <h3 class="card-title">Media & Data Planning</h3>
                            <p class="card-text">Обучение инструментам GroupM, ТВ и Digital медиапланированию.</p>
                        </div>
                        <div class="card">
                            <div class="card-num">Трек 03</div>
                            <h3 class="card-title">Digital, SMM & Creators</h3>
                            <p class="card-text">Запуск спецпроектов в TikTok, Instagram, Telegram и работа с блогерами.</p>
                        </div>
                        <div class="card">
                            <div class="card-num">Трек 04</div>
                            <h3 class="card-title">Client Service & PR</h3>
                            <p class="card-text">Управление проектами международных брендов и ивенты.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        mainEl.appendChild(academySection);
    }

    // 8. ПЛАВАЮЩИЙ AI-КОНСУЛЬТАНТ DASM 24/7
    const aiWidget = document.createElement('div');
    aiWidget.className = 'dasm-ai-widget';
    aiWidget.innerHTML = `
        <div class="ai-chat-window" id="aiChatWindow">
            <div class="ai-chat-header">
                <div>
                    <strong>🤖 AI-Консультант DASM Group</strong>
                    <span>Онлайн 24/7 • Помощь по тендерам и услугам</span>
                </div>
                <button type="button" class="ai-close-btn" id="aiCloseBtn">✕</button>
            </div>
            <div class="ai-chat-messages" id="aiMessagesList">
                <div class="ai-msg bot">Здравствуйте! Я виртуальный ассистент холдинга <strong>DASM Group</strong>. Чем могу помочь вам сегодня?</div>
            </div>
            <div class="ai-quick-chips" id="aiQuickChips">
                <button type="button" class="ai-chip" data-q="Агентства">15 Агентств</button>
                <button type="button" class="ai-chip" data-q="Страны">8 Стран присутствия</button>
                <button type="button" class="ai-chip" data-q="Тендер">Пригласить в тендер</button>
                <button type="button" class="ai-chip" data-q="Контакты">Контакты Алматы HQ</button>
            </div>
            <form class="ai-chat-input-row" id="aiChatForm">
                <input type="text" id="aiUserInput" placeholder="Задайте вопрос о DASM Group..." required>
                <button type="submit">➤</button>
            </form>
        </div>
        <button type="button" class="ai-toggle-btn" id="aiToggleBtn">
            <span>💬 AI-Ассистент DASM</span>
        </button>
    `;
    document.body.appendChild(aiWidget);

    const aiWindow = document.getElementById('aiChatWindow');
    const aiToggleBtn = document.getElementById('aiToggleBtn');
    const aiCloseBtn = document.getElementById('aiCloseBtn');
    const aiMessagesList = document.getElementById('aiMessagesList');
    const aiChatForm = document.getElementById('aiChatForm');
    const aiUserInput = document.getElementById('aiUserInput');

    if (aiToggleBtn && aiWindow) {
        aiToggleBtn.addEventListener('click', () => aiWindow.classList.toggle('open'));
        aiCloseBtn.addEventListener('click', () => aiWindow.classList.remove('open'));
    }

    function generateAiReply(question) {
        const q = question.toLowerCase();
        if (q.includes('агентств') || q.includes('gforce') || q.includes('mindshare')) {
            return 'В DASM Group входят 15 профильных агентств: креативный лидер GForce Grey (обладатель Золота Cannes Lions), медийные гиганты сети WPP/GroupM (Mindshare, Wavemaker, EssenceMediacom), агентство полного цикла DASMART, а также специализированные Digital, PR и BTL подразделения.';
        }
        if (q.includes('стран') || q.includes('географ') || q.includes('узбекистан')) {
            return 'Мы управляем кампаниями в 8 странах из единого окна: Казахстан (HQ в Алматы), Узбекистан, Кыргызстан, Таджикистан, Азербайджан, Грузия, Армения и Монголия. Совокупная аудитория региона — более 90 млн человек.';
        }
        if (q.includes('тендер') || q.includes('клиент') || q.includes('бюджет') || q.includes('стоим')) {
            return 'Чтобы пригласить DASM Group в тендер или запросить расчет медиасплита, заполните форму внизу страницы или напишите на info@dasm.kz. Наш New Business директор ответит вам в течение 15 минут!';
        }
        if (q.includes('контакт') || q.includes('адрес') || q.includes('телефон')) {
            return 'Штаб-квартира DASM Group находится в г. Алматы: ул. Шамши Калдаякова, 34 / ул. Айтеке би, 29. Телефон: +7 (727) 313-13-91, Email: info@dasm.kz.';
        }
        if (q.includes('карьер') || q.includes('ваканс') || q.includes('стажир')) {
            return 'В холдинге работает более 500 специалистов! Открытые вакансии и программа стажировки DASM Academy / Young Lions доступны в разделе «Карьера». Резюме можно направить на hr@dasm.kz.';
        }
        return 'Спасибо за вопрос! DASM Group (основан в 1994 г.) — крупнейший коммуникационный холдинг Центральной Азии и Кавказа. Оставьте ваш телефон в форме ниже, и профильный директор проконсультирует вас детально.';
    }

    function sendUserChatMessage(text) {
        if (!aiMessagesList) return;
        const userBubble = document.createElement('div');
        userBubble.className = 'ai-msg user';
        userBubble.textContent = text;
        aiMessagesList.appendChild(userBubble);

        setTimeout(() => {
            const botBubble = document.createElement('div');
            botBubble.className = 'ai-msg bot';
            botBubble.textContent = generateAiReply(text);
            aiMessagesList.appendChild(botBubble);
            aiMessagesList.scrollTop = aiMessagesList.scrollHeight;
        }, 280);

        aiMessagesList.scrollTop = aiMessagesList.scrollHeight;
    }

    if (aiChatForm && aiUserInput) {
        aiChatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const val = aiUserInput.value.trim();
            if (!val) return;
            sendUserChatMessage(val);
            aiUserInput.value = '';
        });
    }

    document.querySelectorAll('#aiQuickChips .ai-chip').forEach(chip => {
        chip.addEventListener('click', () => sendUserChatMessage(chip.dataset.q));
    });

    // 9. БАЗОВАЯ НАВИГАЦИЯ И ФОРМЫ
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (header) header.classList.toggle('scrolled', window.scrollY > 30);
    });

    const burgerBtn = document.getElementById('burgerBtn');
    const navMenu = document.getElementById('navMenu');
    if (burgerBtn && navMenu) {
        burgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            burgerBtn.classList.toggle('active');
        });
    }

    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });
    revealElements.forEach(el => revealObserver.observe(el));

    // Валидация форм
    document.querySelectorAll('.js-validate-form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const box = form.querySelector('.form-success-message');
            form.reset();
            if (box) {
                box.textContent = "✓ Заявка успешно принята! Менеджер свяжется с вами.";
                box.classList.add('visible');
            }
        });
    });
});

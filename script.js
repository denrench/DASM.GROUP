/**
 * DASM GROUP — FULL SITE MULTI-LANGUAGE ENGINE (RU / KZ / EN)
 * Переводит 100% контента на всех 8 страницах сайта,
 * сохраняя международные бренды, слоганы и индустриальные термины на английском языке.
 */

const fullDictionary = {
    // =========================================================================
    // НАВИГАЦИЯ, ШАПКА И ОБЩИЕ КНОПКИ
    // =========================================================================
    "Главная": { KZ: "Басты бет", EN: "Home" },
    "О холдинге": { KZ: "Холдинг туралы", EN: "About Holding" },
    "Агентства": { KZ: "Агенттіктер", EN: "Agencies" },
    "Кейсы": { KZ: "Кейстер", EN: "Cases" },
    "Страны": { KZ: "Елдер", EN: "Countries" },
    "Новости": { KZ: "Жаңалықтар", EN: "News" },
    "Карьера": { KZ: "Мансап", EN: "Career" },
    "Контакты": { KZ: "Байланыс", EN: "Contacts" },
    "Стать клиентом": { KZ: "Клиент болу", EN: "Become a Client" },
    "Стать клиентом →": { KZ: "Клиент болу →", EN: "Become a Client →" },
    "Смотреть кейсы": { KZ: "Кейстерді көру", EN: "View Cases" },
    "Все 15 агентств →": { KZ: "Барлық 15 агенттік →", EN: "All 15 Agencies →" },
    "Все работы →": { KZ: "Барлық жұмыстар →", EN: "All Works →" },
    "Подробнее о кейсе": { KZ: "Кейс туралы толығырақ", EN: "Case Study Details" },
    "Изучить рынки присутствия →": { KZ: "Қатысу нарықтарын зерттеу →", EN: "Explore Regional Markets →" },

    // =========================================================================
    // 1. ГЛАВНАЯ СТРАНИЦА (INDEX.HTML)
    // =========================================================================
    "Основано в 1994 • Эксклюзивный партнёр сети WPP в регионе": {
        KZ: "1994 жылы құрылған • WPP желісінің аймақтағы эксклюзивті серіктесі",
        EN: "Founded in 1994 • Exclusive WPP Network Partner in the Region"
    },
    "ОБЪЕДИНЕННЫЕ СМЫСЛАМИ,": {
        KZ: "МАҒЫНАМЕН БІРІККЕН,",
        EN: "UNITED BY MEANING,"
    },
    "ДВИЖИМЫЕ АМБИЦИЯМИ —": {
        KZ: "АМБИЦИЯМЕН ЖЕТЕЛЕНГЕН —",
        EN: "DRIVEN BY AMBITION —"
    },
    "МЫ ГОВОРИМ ДА.": {
        KZ: "БІЗ ИӘ ДЕЙМІЗ.",
        EN: "WE SAY DA."
    },
    "Крупнейший рекламно-коммуникационный холдинг в Центральной Азии и на Кавказе. Объединяем 15 специализированных агентств, передовые медиатехнологии, аналитику данных и креатив уровня": {
        KZ: "Орталық Азия мен Кавказдағы ең ірі жарнама-коммуникациялық холдинг. 15 мамандандырылған агенттікті, озық медиатехнологияларды, деректер аналитикасын және әлемдік деңгейдегі креативті біріктіреміз:",
        EN: "The largest advertising and communications holding in Central Asia and the Caucasus. Uniting 15 specialized agencies, advanced media tech, data analytics, and creativity at the level of"
    },
    "Смотреть портфолио": { KZ: "Портфолионы көру", EN: "View Portfolio" },
    "Витрина агентств": { KZ: "Агенттіктер витринасы", EN: "Agencies Showcase" },
    "Более 150 международных и локальных брендов-лидеров": {
        KZ: "150-ден астам халықаралық және жергілікті көшбасшы брендтер",
        EN: "Over 150 leading international and local brands"
    },
    "доверяют нам управление медийными и креативными бюджетами в 8 странах": {
        KZ: "8 елде медиа және креативті бюджеттерді басқаруды бізге сеніп тапсырады",
        EN: "trust us with their media and creative budgets across 8 countries"
    },
    "✓ Доля медиарынка >20%": { KZ: "✓ Медианарық үлесі >20%", EN: "✓ >20% Media Market Share" },
    "✓ Золото Cannes Lions": { KZ: "✓ Cannes Lions Алтыны", EN: "✓ Cannes Lions Gold" },
    "✓ №1 Рейтинг Эффективности E+": { KZ: "✓ №1 E+ Тиімділік Рейтингі", EN: "✓ #1 E+ Effectiveness Ranking" },
    "✓ Собственный R&D и Data Hub": { KZ: "✓ Меншікті R&D және Data Hub", EN: "✓ Proprietary R&D & Data Hub" },
    "Центральный хаб DASM Group": { KZ: "DASM Group Орталық хабы", EN: "DASM Group Central Hub" },
    "Лидер индустрии": { KZ: "Индустрия көшбасшысы", EN: "Industry Leader" },
    "Стратегия и Баинг": { KZ: "Стратегия және Баинг", EN: "Strategy & Buying" },
    "Прямые контракты со всеми ТВ, Digital и OOH селлерами региона": {
        KZ: "Аймақтың барлық ТВ, Digital және OOH селлерлерімен тікелей келісімшарттар",
        EN: "Direct contracts with all major TV, Digital, and OOH sellers in the region"
    },
    "Креатив и Продакшн": { KZ: "Креатив және Продакшн", EN: "Creative & Production" },
    "Более 300 наград международных фестивалей рекламы": {
        KZ: "Халықаралық жарнама фестивальдерінің 300-ден астам марапаты",
        EN: "Over 300 awards from international advertising festivals"
    },
    "32 года на рынке": { KZ: "Нарықта 32 жыл", EN: "32 Years on Market" },
    "Старейшая и самая устойчивая коммуникационная группа региона с безупречной репутацией.": {
        KZ: "Мінсіз беделі бар аймақтағы ең көне және ең тұрақты коммуникациялық топ.",
        EN: "The region's longest-standing and most resilient communications group."
    },
    "Сетевые агентства WPP (GroupM, Grey, Ogilvy) и сильные локальные независимые бренды.": {
        KZ: "WPP желілік агенттіктері (GroupM, Grey, Ogilvy) және күшті жергілікті тәуелсіз брендтер.",
        EN: "WPP network agencies (GroupM, Grey, Ogilvy) alongside powerhouse independent brands."
    },
    "90+ млн человек": { KZ: "90+ млн адам", EN: "90M+ Consumers" },
    "Казахстан, Узбекистан, Кыргызстан, Таджикистан, Армения, Грузия, Азербайджан, Монголия.": {
        KZ: "Қазақстан, Өзбекстан, Қырғызстан, Тәжікстан, Армения, Грузия, Әзербайжан, Моңғолия.",
        EN: "Kazakhstan, Uzbekistan, Kyrgyzstan, Tajikistan, Armenia, Georgia, Azerbaijan, Mongolia."
    },
    "Топ-таланты": { KZ: "Топ-таланттар", EN: "Top Talent" },
    "Стратеги, медиапланеры, арт-директора, аналитики данных, PR-специалисты и продюсеры.": {
        KZ: "Стратегтер, медиажоспарлаушылар, арт-директорлар, деректер аналитиктері, PR-мамандар мен продюсерлер.",
        EN: "Strategists, media planners, art directors, data scientists, PR experts, and producers."
    },
    "Отраслевая экспертиза": { KZ: "Салалық сараптама", EN: "Industry Expertise" },
    "Лидируем в ключевых секторах экономики": {
        KZ: "Экономиканың негізгі секторларында көш бастаймыз",
        EN: "Leading Across Key Economic Sectors"
    },
    "Атмосфера и Инфраструктура": { KZ: "Атмосфера және Инфрақұрылым", EN: "Culture & Infrastructure" },
    "Внутри DASM Group: люди, технологии и культура лидерства": {
        KZ: "DASM Group ішінде: адамдар, технологиялар және көшбасшылық мәдениеті",
        EN: "Inside DASM Group: People, Technology & Leadership Culture"
    },
    "Карьера у нас →": { KZ: "Біздегі мансап →", EN: "Careers at DASM →" },
    "Процесс работы": { KZ: "Жұмыс процесі", EN: "How We Work" },
    "Как мы запускаем кампании регионального масштаба": {
        KZ: "Біз аймақтық ауқымдағы науқандарды қалай іске қосамыз",
        EN: "How We Launch Regional-Scale Campaigns"
    },
    "Основано в 1994 • Партнер глобальной сети WPP": {
        KZ: "1994 жылы құрылған • WPP жаһандық желісінің серіктесі",
        EN: "Founded in 1994 • WPP Global Network Affiliate"
    },
    "Крупнейший рекламно-коммуникационный холдинг в Центральной Азии и регионе Кавказа. Объединяем 15 специализированных агентств, передовые медиатехнологии и креатив уровня": {
        KZ: "Орталық Азия мен Кавказ аймағындағы ең ірі жарнама-коммуникациялық холдинг. 15 мамандандырылған агенттікті, озық медиатехнологияларды және әлемдік деңгейдегі креативті біріктіреміз:",
        EN: "The largest advertising and communications holding in Central Asia and the Caucasus. Uniting 15 specialized agencies, advanced media technologies, and creativity at the level of"
    },
    "Крупнейший рекламно-коммуникационный холдинг в Центральной Азии и регионе Кавказа. Объединяем 15 специализированных агентств, передовые медиатехнологии и креатив уровня Cannes Lions.": {
        KZ: "Орталық Азия мен Кавказ аймағындағы ең ірі жарнама-коммуникациялық холдинг. 15 мамандандырылған агенттікті, озық медиатехнологияларды және Cannes Lions деңгейіндегі креативті біріктіреміз.",
        EN: "The largest advertising and communications holding in Central Asia and the Caucasus. Uniting 15 specialized agencies, advanced media technologies, and Cannes Lions-level creativity."
    },
    "для кратного роста вашего бизнеса.": {
        KZ: "сіздің бизнесіңіздің еселеп өсуі үшін.",
        EN: "for exponential growth of your business."
    },
    "Алматы • Ташкент • Бишкек • Тбилиси • Баку": {
        KZ: "Алматы • Ташкент • Бішкек • Тбилиси • Баку",
        EN: "Almaty • Tashkent • Bishkek • Tbilisi • Baku"
    },
    "Год основания холдинга": { KZ: "Холдингтің құрылған жылы", EN: "Year Holding Founded" },
    "Специализированных агентств": { KZ: "Мамандандырылған агенттіктер", EN: "Specialized Agencies" },
    "Стран присутствия": { KZ: "Қатысу елдері", EN: "Countries of Presence" },
    "Экспертов в штате": { KZ: "Штаттағы сарапшылар", EN: "In-house Experts" },
    "Экосистема 360°": { KZ: "360° Экожүйесі", EN: "360° Ecosystem" },
    "Превращаем стратегию и креатив в измеримый бизнес-результат": {
        KZ: "Стратегия мен креативті өлшенетін бизнес-нәтижеге айналдырамыз",
        EN: "Turning strategy and creativity into measurable business results"
    },
    "Разработка прорывных креативных кампаний, брендинг, сторителлинг и коммуникационные стратегии, меняющие культуру потребления и выигрывающие Каннских Львов.": {
        KZ: "Тұтыну мәдениетін өзгертетін және Cannes Lions жеңіп алатын серпінді креативті науқандарды, брендингті, сторителлингті және коммуникациялық стратегияларды әзірлеу.",
        EN: "Developing breakthrough creative campaigns, branding, storytelling, and communication strategies that reshape consumer culture and win Cannes Lions."
    },
    "Разработка прорывных креативных кампаний, брендинг, сторителлинг и видеопродакшн, меняющие культуру потребления и выигрывающие Каннских Львов.": {
        KZ: "Тұтыну мәдениетін өзгертетін және Cannes Lions жеңіп алатын серпінді креативті науқандарды, брендингті, сторителлингті және видеопродакшнды әзірлеу.",
        EN: "Developing breakthrough creative campaigns, branding, storytelling, and video production that reshape consumer culture and win Cannes Lions."
    },
    "Разработка прорывных креативных кампаний, брендинг, сторителлинг и съемочный продакшн, меняющие культуру потребления и выигрывающие Каннских Львов.": {
        KZ: "Тұтыну мәдениетін өзгертетін және Cannes Lions жеңіп алатын серпінді креативті науқандарды, брендингті, сторителлингті және түсірілім продакшнын әзірлеу.",
        EN: "Developing breakthrough creative campaigns, branding, storytelling, and film production that reshape consumer culture and win Cannes Lions."
    },
    "Крупнейший медиабаинг в регионе (более 20% рынка). Комплексное планирование TV, OOH, Radio и прессы с доступом к глобальным аналитическим инструментам GroupM / WPP.": {
        KZ: "Аймақтағы ең ірі медиабаинг (нарықтың 20%-дан астамы). GroupM / WPP жаһандық аналитикалық құралдарына қол жеткізе отырып, TV, OOH, Radio және баспасөзді кешенді жоспарлау.",
        EN: "The largest media buying power in the region (over 20% market share). Integrated TV, OOH, Radio, and Press planning with access to global GroupM / WPP analytical tools."
    },
    "Крупнейший медиабаинг в регионе (более 20% рынка). Комплексное планирование TV, DOOH, Radio и прессы с доступом к глобальным инструментам GroupM / WPP.": {
        KZ: "Аймақтағы ең ірі медиабаинг (нарықтың 20%-дан астамы). GroupM / WPP жаһандық құралдарына қол жеткізе отырып, TV, DOOH, Radio және баспасөзді кешенді жоспарлау.",
        EN: "The largest media buying power in the region (over 20% market share). Integrated TV, DOOH, Radio, and Press planning powered by global GroupM / WPP tools."
    },
    "Крупнейший медиабаинг в регионе (более 20% рынка). Комплексное планирование TV, DOOH, Radio и прессы с доступом к глобальным аналитическим инструментам GroupM / WPP.": {
        KZ: "Аймақтағы ең ірі медиабаинг (нарықтың 20%-дан астамы). GroupM / WPP жаһандық аналитикалық құралдарымен TV, DOOH, Radio және баспасөзді кешенді жоспарлау.",
        EN: "The largest media buying power in the region (over 20% market share). Comprehensive TV, DOOH, Radio, and Press planning with global GroupM / WPP analytics."
    },
    "Performance-маркетинг, Programmatic, работа с инфлюенсерами, SMM, антикризисный PR, BTL-ивенты и собственные исследования потребительского поведения.": {
        KZ: "Performance-маркетинг, Programmatic, инфлюенсерлермен жұмыс, SMM, дағдарысқа қарсы PR, BTL-ивенттер және тұтынушылық мінез-құлықтың меншікті зерттеулері.",
        EN: "Performance marketing, Programmatic, Influencer marketing, SMM, crisis PR, BTL events, and proprietary consumer behavior research."
    },
    "Портфолио и Награды": { KZ: "Портфолио және Марапаттар", EN: "Portfolio & Awards" },
    "Кейсы, о которых говорит весь мир": {
        KZ: "Бүкіл әлем талқылайтын кейстер",
        EN: "Cases the whole world talks about"
    },
    "GForce Grey (DASM Group) • Социальная кампания / PR": {
        KZ: "GForce Grey (DASM Group) • Әлеуметтік науқан / PR",
        EN: "GForce Grey (DASM Group) • Social Campaign / PR"
    },
    "Кампания, которая привлекла внимание миллионов к проблеме домашнего насилия и помогла изменить законодательство, принеся Казахстану первое в истории Золото «Каннских Львов».": {
        KZ: "Тұрмыстық зорлық-зомбылық мәселесіне миллиондаған адамның назарын аударып, заңнаманы өзгертуге көмектескен және Қазақстанға тарихтағы алғашқы Cannes Lions Алтынын әкелген науқан.",
        EN: "A campaign that drew millions of eyes to domestic violence, helped change national legislation, and brought Kazakhstan its first-ever Cannes Lions Gold."
    },
    "Кампания прямо с арены ММА-турнира, которая привлекла внимание миллионов к проблеме бытового насилия и помогла изменить законодательство, принеся Казахстану первое в истории Золото «Каннских Львов».": {
        KZ: "ММА турнирінің аренасынан тікелей басталып, тұрмыстық зорлық-зомбылық мәселесіне миллиондаған адамның назарын аударған және Қазақстанға тарихтағы алғашқы Cannes Lions Алтынын әкелген науқан.",
        EN: "Launched live from an MMA arena, this campaign brought millions of eyes to domestic violence, helped pass new laws, and won Kazakhstan's first-ever Cannes Lions Gold."
    },
    "Saltanat Light — Цифровой маяк безопасности": {
        KZ: "Saltanat Light — Қауіпсіздіктің цифрлық шамшырағы",
        EN: "Saltanat Light — Digital Beacon of Safety"
    },
    "Инновационная кампания на уличных смартбордах Citix в Алматы и Астане, объединившая наружную рекламу, аналитику данных и национальный общественный резонанс.": {
        KZ: "Алматы мен Астанадағы Citix көше смартбордтарында сыртқы жарнаманы, деректер аналитикасын және ұлттық қоғамдық резонансты біріктірген инновациялық науқан.",
        EN: "An innovative campaign on Citix street smartboards in Almaty and Astana, combining DOOH advertising, real-time data analytics, and nationwide social impact."
    },
    "Инновационная кампания на уличных смартбордах Citix в Алматы и Астане, объединившая цифровую наружную рекламу, аналитику данных и национальный общественный резонанс.": {
        KZ: "Алматы мен Астанадағы Citix көше смартбордтарында цифрлық сыртқы жарнаманы, деректер аналитикасын және ұлттық қоғамдық резонансты біріктірген инновациялық науқан.",
        EN: "An innovative campaign on Citix street smartboards in Almaty and Astana, merging digital out-of-home media, data analytics, and nationwide social resonance."
    },
    "Международный охват": { KZ: "Халықаралық қамту", EN: "International Reach" },
    "Один хаб — 8 стран Центральной Азии и Кавказа": {
        KZ: "Бір хаб — Орталық Азия мен Кавказдың 8 елі",
        EN: "One Hub — 8 Countries of Central Asia and the Caucasus"
    },
    "Управляйте рекламными кампаниями в Казахстане, Узбекистане, Кыргызстане, Таджикистане, Армении, Грузии, Азербайджане и Монголии через единое окно с международными стандартами отчетности.": {
        KZ: "Қазақстан, Өзбекстан, Қырғызстан, Тәжікстан, Армения, Грузия, Әзербайжан және Моңғолиядағы жарнамалық науқандарды халықаралық есептілік стандарттарымен бірыңғай терезе арқылы басқарыңыз.",
        EN: "Manage advertising campaigns across Kazakhstan, Uzbekistan, Kyrgyzstan, Tajikistan, Armenia, Georgia, Azerbaijan, and Mongolia through a single hub with international reporting standards."
    },
    "🇰🇿 Казахстан": { KZ: "🇰🇿 Қазақстан", EN: "🇰🇿 Kazakhstan" },
    "🇺🇿 Узбекистан": { KZ: "🇺🇿 Өзбекстан", EN: "🇺🇿 Uzbekistan" },
    "🇰🇬 Кыргызстан": { KZ: "🇰🇬 Қырғызстан", EN: "🇰🇬 Kyrgyzstan" },
    "🇹🇯 Таджикистан": { KZ: "🇹🇯 Тәжікстан", EN: "🇹🇯 Tajikistan" },
    "🇦🇲 Армения": { KZ: "🇦🇲 Армения", EN: "🇦🇲 Armenia" },
    "🇬🇪 Грузия": { KZ: "🇬🇪 Грузия", EN: "🇬🇪 Georgia" },
    "🇦🇿 Азербайджан": { KZ: "🇦🇿 Әзербайжан", EN: "🇦🇿 Azerbaijan" },
    "🇲🇳 Монголия": { KZ: "🇲🇳 Моңғолия", EN: "🇲🇳 Mongolia" },

    // =========================================================================
    // 2. О ХОЛДИНГЕ (ABOUT.HTML)
    // =========================================================================
    "История и ДНК лидеров": { KZ: "Тарих және көшбасшылар ДНҚ-сы", EN: "History & Leadership DNA" },
    "Более 30 лет мы формируем рекламную индустрию": {
        KZ: "30 жылдан астам уақыт бойы жарнама индустриясын қалыптастырамыз —",
        EN: "For over 30 years we have been shaping the advertising industry of"
    },
    "Центральной Азии": { KZ: "Орталық Азияда", EN: "Central Asia" },
    "Основанная в 1994 году в Алматы, сегодня DASM Group — это мощная экосистема из 15 агентств, контролирующая более 20% медиарынка региона и обслуживающая более 150 международных и локальных брендов-лидеров.": {
        KZ: "1994 жылы Алматыда құрылған DASM Group бүгінде аймақтың медианарығының 20%-дан астамын бақылайтын және 150-ден астам халықаралық және жергілікті көшбасшы брендтерге қызмет көрсететін 15 агенттіктен тұратын қуатты экожүйе.",
        EN: "Founded in 1994 in Almaty, today DASM Group is a powerhouse ecosystem of 15 agencies controlling over 20% of the regional media market and serving 150+ leading global and local brands."
    },
    "Глобальная интеграция": { KZ: "Жаһандық интеграция", EN: "Global Integration" },
    "Международное партнерство с WPP": { KZ: "WPP-мен халықаралық серіктестік", EN: "International Partnership with WPP" },
    "В структуру DASM Group входят агентства, представляющие интересы крупнейшего в мире рекламно-коммуникационного холдинга WPP (GroupM: Mindshare, Wavemaker, EssenceMediacom, а также креативные сети Grey и Ogilvy). Это обеспечивает нашим клиентам доступ к глобальному софту, передовым исследованиям и безупречному комплаенсу.": {
        KZ: "DASM Group құрылымына әлемдегі ең ірі WPP жарнама-коммуникациялық холдингінің мүдделерін білдіретін агенттіктер кіреді (GroupM: Mindshare, Wavemaker, EssenceMediacom, сондай-ақ Grey және Ogilvy креативті желілері). Бұл біздің клиенттерімізге жаһандық бағдарламалық жасақтамаға, озық зерттеулерге және мінсіз комплаенске қол жеткізуді қамтамасыз етеді.",
        EN: "DASM Group includes agencies representing WPP, the world's largest communications holding (GroupM: Mindshare, Wavemaker, EssenceMediacom, plus Grey and Ogilvy creative networks). This grants our clients access to global software, proprietary research, and world-class compliance."
    },
    "Философия WE SAY DA": { KZ: "WE SAY DA философиясы", EN: "WE SAY DA Philosophy" },
    "Синтез креатива и твердой аналитики": { KZ: "Креатив пен нақты аналитика синтезі", EN: "Synthesis of Creativity & Hard Analytics" },
    "Мы не разделяем красоту идеи и бизнес-эффективность. Наши агентства одновременно возглавляют Рейтинг Креативности Центральной Азии (AdAsia) и Рейтинг Эффективности (E+ Central Asia / Effie), доказывая, что смелые идеи продают лучше всего.": {
        KZ: "Біз идеяның сұлулығы мен бизнес-тиімділікті бөлмейміз. Біздің агенттіктер бір мезгілде Орталық Азияның Креативтілік Рейтингін (AdAsia) және Тиімділік Рейтингін (E+ Central Asia / Effie) басқарып, батыл идеялардың ең жақсы сататынын дәлелдейді.",
        EN: "We never separate creative beauty from business effectiveness. Our agencies simultaneously top the Central Asia Creativity Ranking (AdAsia) and Effectiveness Ranking (E+ Central Asia / Effie), proving bold ideas sell best."
    },
    "Путь созидания": { KZ: "Жасампаздық жолы", EN: "Our Journey" },
    "Ключевые вехи DASM Group": { KZ: "DASM Group негізгі белестері", EN: "Key Milestones of DASM Group" },
    "Основание компании DASM в Алматы": { KZ: "Алматыда DASM компаниясының құрылуы", EN: "Foundation of DASM in Almaty" },
    "Рождение одного из первых профессиональных рекламных агентств независимого Казахстана. Формирование стандартов коммерческого ТВ и радио-размещения.": {
        KZ: "Тәуелсіз Қазақстанның алғашқы кәсіби жарнама агенттіктерінің бірінің дүниеге келуі. Коммерциялық ТВ және радио орналастыру стандарттарын қалыптастыру.",
        EN: "Birth of one of independent Kazakhstan's first professional advertising agencies, establishing the standards for commercial TV and radio placement."
    },
    "Альянс с глобальными сетями WPP и открытие GForce Grey": {
        KZ: "WPP жаһандық желілерімен альянс және GForce Grey ашылуы",
        EN: "Alliance with WPP Global Networks & Launch of GForce Grey"
    },
    "Выход на международный уровень: запуск сетевых медийных и креативных агентств, внедрение телеизмерений и эконометрического моделирования.": {
        KZ: "Халықаралық деңгейге шығу: желілік медиа және креативті агенттіктерді іске қосу, телеөлшемдер мен эконометрикалық модельдеуді енгізу.",
        EN: "International expansion: launching network media and creative agencies, introducing TV measurement and econometric modeling."
    },
    "Экспансия в 8 стран и Digital-трансформация": {
        KZ: "8 елге экспансия және Digital-трансформация",
        EN: "Expansion into 8 Countries & Digital Transformation"
    },
    "Масштабирование бизнеса на рынки Узбекистана, Кыргызстана, Таджикистана, Кавказа и Монголии. Запуск специализированных digital, performance и data-подразделений.": {
        KZ: "Бизнесті Өзбекстан, Қырғызстан, Тәжікстан, Кавказ және Моңғолия нарықтарына масштабтау. Арнайы digital, performance және data-бөлімшелерін іске қосу.",
        EN: "Scaling operations across Uzbekistan, Kyrgyzstan, Tajikistan, the Caucasus, and Mongolia. Launching specialized digital, performance, and data units."
    },
    "Золото Cannes Lions и абсолютное лидерство в регионе": {
        KZ: "Cannes Lions Алтыны және аймақтағы абсолютті көшбасшылық",
        EN: "Cannes Lions Gold & Absolute Regional Leadership"
    },
    "Агентство GForce Grey (в составе DASM Group) завоевывает первого в истории Казахстана Золотого Каннского Льва, D&AD Pencil и золото Spikes Asia. Штат холдинга превышает 500 человек.": {
        KZ: "GForce Grey агенттігі (DASM Group құрамында) Қазақстан тарихындағы алғашқы Cannes Lions Алтынын, D&AD Pencil және Spikes Asia алтынын жеңіп алды. Холдинг штаты 500 адамнан асты.",
        EN: "GForce Grey (part of DASM Group) wins Kazakhstan's first-ever Cannes Lions Gold, D&AD Pencil, and Spikes Asia Gold. Holding headcount surpasses 500 professionals."
    },
    "Признание индустрии": { KZ: "Индустрия мойындауы", EN: "Industry Recognition" },
    "Награды и рейтинги": { KZ: "Марапаттар мен рейтингтер", EN: "Awards & Rankings" },
    "Золото, Серебро и Бронза главного фестиваля креативности планеты в Каннах.": {
        KZ: "Канндағы планетаның басты креативтілік фестивалінің Алтыны, Күмісі және Қоласы.",
        EN: "Gold, Silver, and Bronze at the world's premier festival of creativity in Cannes."
    },
    "Первая в регионе награда D&AD и топовые позиции в рейтинге Азиатско-Тихоокеанского региона.": {
        KZ: "Аймақтағы алғашқы D&AD марапаты және Азия-Тынық мұхиты аймағы рейтингіндегі топ позициялар.",
        EN: "The region's first D&AD Pencil and top positions in the Asia-Pacific creativity rankings."
    },
    "Агентство года и 1-е место в рейтинге маркетинговой эффективности региона.": {
        KZ: "Жыл агенттігі және аймақтың маркетингтік тиімділік рейтингінде 1-орын.",
        EN: "Agency of the Year and #1 in the regional marketing effectiveness ranking."
    },
    "Шестикратный обладатель титула лучшего агентства Центральной Азии и №1 в рейтинге AdAsia.": {
        KZ: "Орталық Азияның үздік агенттігі титулының алты дүркін иегері және AdAsia рейтингінде №1.",
        EN: "Six-time Central Asian Agency of the Year and #1 in the AdAsia ranking."
    },

    // =========================================================================
    // 3. АГЕНТСТВА (AGENCIES.HTML)
    // =========================================================================
    "Структура группы": { KZ: "Топ құрылымы", EN: "Group Structure" },
    "15 специализированных агентств": { KZ: "15 мамандандырылған агенттік", EN: "15 Specialized Agencies" },
    "в единой экосистеме": { KZ: "бірыңғай экожүйеде", EN: "in a Single Ecosystem" },
    "Каждое агентство в составе DASM Group обладает глубокой профильной специализацией — от глобального медиабаинга и стратегии до дерзкого креатива, digital-перформанса, PR и трейд-маркетинга.": {
        KZ: "DASM Group құрамындағы әрбір агенттік жаһандық медиабаинг пен стратегиядан бастап батыл креативке, digital-перформансқа, PR және трейд-маркетингке дейін терең бейіндік мамандануға ие.",
        EN: "Each agency within DASM Group holds deep domain expertise — from global media buying and strategy to bold creativity, digital performance, PR, and trade marketing."
    },
    "Все направления": { KZ: "Барлық бағыттар", EN: "All Disciplines" },
    "Креатив и Стратегия": { KZ: "Креатив және Стратегия", EN: "Creative & Strategy" },
    "Медиа и Инвестиции": { KZ: "Медиа және Инвестициялар", EN: "Media & Investments" },
    "Самое награждаемое креативное агентство Центральной Азии. Единственное в регионе агентство — обладатель Золота, Серебра и Бронзы Cannes Lions, наград D&AD и Spikes Asia. Лидер рейтингов AdAsia и E+.": {
        KZ: "Орталық Азиядағы ең көп марапатталған креативті агенттік. Аймақтағы Cannes Lions Алтын, Күміс және Қола иегері, D&AD және Spikes Asia жеңімпазы. AdAsia және E+ рейтингтерінің көшбасшысы.",
        EN: "Central Asia's most awarded creative agency. The only agency in the region to win Gold, Silver, and Bronze Cannes Lions, D&AD, and Spikes Asia awards. #1 in AdAsia and E+ rankings."
    },
    "Глобальное медийное агентство, фокусирующееся на ускоренном росте брендов (Good Growth) за счет адаптивного медиапланирования, глубокой аналитики данных и эффективных медиа-инвестиций.": {
        KZ: "Бейімделгіш медиажоспарлау, деректерді терең талдау және тиімді медиа-инвестициялар есебінен брендтердің жедел өсуіне (Good Growth) бағытталған жаһандық медиа агенттік.",
        EN: "A global media agency focused on accelerated Good Growth through adaptive media planning, deep data analytics, and high-efficiency media investments."
    },
    "Агентство, объединяющее медиа, контент и технологии. Использует запатентованные исследования потребительского пути (Purchase Journey) для максимизации ROI рекламных кампаний.": {
        KZ: "Медиа, контент және технологияларды біріктіретін агенттік. Жарнамалық науқандардың ROI көрсеткішін барынша арттыру үшін тұтынушы жолының (Purchase Journey) патенттелген зерттеулерін қолданады.",
        EN: "An agency uniting media, content, and technology. Utilizes proprietary Purchase Journey research to maximize campaign ROI."
    },
    "Синтез digital-ДНК агентства Essence и масштабной системной экспертизы MediaCom. Создает прорывные коммуникационные системы для крупнейших рекламодателей мира.": {
        KZ: "Essence агенттігінің digital-ДНҚ-сы мен MediaCom ауқымды жүйелік сараптамасының синтезі. Әлемдегі ең ірі жарнама берушілер үшін серпінді коммуникациялық жүйелерді жасайды.",
        EN: "Combining the digital DNA of Essence with MediaCom's scaled systems expertise to build breakthrough communication systems for the world's largest advertisers."
    },
    "20+ лет опыта": { KZ: "20+ жыл тәжірибе", EN: "20+ Years Experience" },
    "Синергия исследований, медиастратегии, Digital, ТВ и наружной рекламы в единую систему коммуникации, которая увеличивает продажи. Более 1500 реализованных кейсов.": {
        KZ: "Зерттеулер, медиастратегия, Digital, ТВ және сыртқы жарнаманың сатылымды арттыратын бірыңғай коммуникация жүйесіндегі синергиясы. 1500-ден астам іске асырылған кейс.",
        EN: "Synergy of research, media strategy, Digital, TV, and OOH into a unified communication system that drives sales. Over 1,500 delivered campaigns."
    },
    "Интегрированные маркетинговые коммуникации, трейд-маркетинг, масштабные бренд-активации и специальные события во всех странах Центральной Азии.": {
        KZ: "Орталық Азияның барлық елдерінде интеграцияланған маркетингтік коммуникациялар, трейд-маркетинг, ауқымды бренд-активациялар және арнайы іс-шаралар.",
        EN: "Integrated marketing communications, trade marketing, large-scale brand activations, and special events across all Central Asian markets."
    },
    "Передовой digital-хаб холдинга: Programmatic-закупки, лидогенерация, SEO/ASO, сквозная аналитика, работа с глобальными рекламными платформами (Meta, Google, TikTok, Yandex).": {
        KZ: "Холдингтің озық digital-хабы: Programmatic-сатып алулар, лидогенерация, SEO/ASO, толық аналитика, жаһандық жарнама платформаларымен жұмыс (Meta, Google, TikTok, Yandex).",
        EN: "The holding's advanced digital hub: Programmatic buying, lead generation, SEO/ASO, end-to-end analytics, and global ad platforms (Meta, Google, TikTok, Yandex)."
    },
    "Комплексное управление присутствием брендов в соцсетях, спецпроекты с топ-блогерами и лидерами мнений на локальных языках в 8 странах региона.": {
        KZ: "Аймақтың 8 елінде жергілікті тілдерде брендтердің әлеуметтік желілердегі қатысуын кешенді басқару, топ-блогерлермен және пікір көшбасшыларымен арнайы жобалар.",
        EN: "Full-service social media management, creator partnerships, and influencer campaigns in local languages across 8 countries."
    },
    "Управление корпоративной репутацией, связи со СМИ, ESG-коммуникации, антикризисный менеджмент и организация пресс-мероприятий регионального масштаба.": {
        KZ: "Корпоративтік беделді басқару, БАҚ-пен байланыс, ESG-коммуникациялар, дағдарысқа қарсы менеджмент және аймақтық ауқымдағы баспасөз іс-шараларын ұйымдастыру.",
        EN: "Corporate reputation management, media relations, ESG communications, crisis management, and regional press events."
    },
    "Стратегия": { KZ: "Стратегия", EN: "Strategy" },
    "Креатив 360": { KZ: "Креатив 360", EN: "Creative 360" },
    "Брендинг": { KZ: "Брендинг", EN: "Branding" },
    "360 Кампании": { KZ: "360 Науқандар", EN: "360 Campaigns" },
    "PR Стратегии": { KZ: "PR Стратегиялар", EN: "PR Strategies" },

    // =========================================================================
    // 4. КЕЙСЫ / ПОРТФОЛИО (WORKS.HTML)
    // =========================================================================
    "Доказанная эффективность": { KZ: "Дәлелденген тиімділік", EN: "Proven Effectiveness" },
    "Кейсы, которые выигрывают": { KZ: "Нарықтар мен фестивальдерді", EN: "Cases that win" },
    "рынки и фестивали": { KZ: "жеңетін кейстер", EN: "markets and festivals" },
    "Более 1500 успешных кампаний в финансовом секторе, FMCG, телекоме, e-commerce и социально значимых инициативах.": {
        KZ: "Қаржы секторында, FMCG, телеком, e-commerce және әлеуметтік маңызды бастамаларда 1500-ден астам табысты науқан.",
        EN: "Over 1,500 successful campaigns across FinTech, FMCG, Telecom, E-commerce, and socially significant initiatives."
    },
    "Все кейсы": { KZ: "Барлық кейстер", EN: "All Cases" },
    "Победители фестивалей": { KZ: "Фестиваль жеңімпаздары", EN: "Award Winners" },
    "GForce Grey • Ruh Fighting • Социальный PR и активизм": {
        KZ: "GForce Grey • Ruh Fighting • Әлеуметтік PR және активизм",
        EN: "GForce Grey • Ruh Fighting • Social PR & Activism"
    },
    "Беспрецедентный проект, превративший трансляцию ММА-поединка в мощное социальное высказывание против бытового насилия. Охват 45+ млн человек, сотни публикаций в мировых медиа и вклад в принятие исторического закона в РК.": {
        KZ: "ММА жекпе-жегінің трансляциясын тұрмыстық зорлық-зомбылыққа қарсы қуатты әлеуметтік мәлімдемеге айналдырған теңдессіз жоба. 45+ млн адамды қамту, әлемдік медиадағы жүздеген жарияланымдар және ҚР-да тарихи заңның қабылдануына қосылған үлес.",
        EN: "An unprecedented project turning an MMA broadcast into a powerful statement against domestic violence. 45M+ reach, hundreds of global media features, and a direct contribution to passing historic legislation in Kazakhstan."
    },
    "Беспрецедентный проект, превративший трансляцию поединка в мощное социальное высказывание против бытового насилия. Охват 45+ млн человек, сотни публикаций в мировых медиа и вклад в принятие исторического закона в РК.": {
        KZ: "Жекпе-жек трансляциясын тұрмыстық зорлық-зомбылыққа қарсы қуатты әлеуметтік мәлімдемеге айналдырған теңдессіз жоба. 45+ млн адамды қамту және ҚР-да тарихи заңның қабылдануына қосылған үлес.",
        EN: "An unprecedented project turning a fight broadcast into a powerful statement against domestic violence. 45M+ reach and a direct contribution to historic legislation in Kazakhstan."
    },
    "Saltanat Light — Свет в память и защиту": {
        KZ: "Saltanat Light — Естелік пен қорғау шамшырағы",
        EN: "Saltanat Light — A Light for Memory and Protection"
    },
    "Синхронизация всей сети цифровых уличных экранов Citix с данными о кризисных центрах и призывом к безопасности женщин. Первое в Центральной Азии золото фестиваля AdFest.": {
        KZ: "Citix цифрлық көше экрандарының бүкіл желісін дағдарыс орталықтары туралы деректермен және әйелдер қауіпсіздігіне шақырумен синхрондау. Орталық Азиядағы алғашқы AdFest фестивалінің алтыны.",
        EN: "Synchronizing the entire Citix digital street screen network with crisis center data and a call for women's safety. Central Asia's first-ever AdFest Gold Lotus."
    },
    "Smart-экранов DOOH": { KZ: "DOOH Smart-экрандары", EN: "DOOH Smart Screens" },
    "Всенародные кампании Kaspi Жұма и SuperApp": {
        KZ: "Kaspi Жұма және SuperApp жалпыхалықтық науқандары",
        EN: "Nationwide Kaspi Zhuma & SuperApp Campaigns"
    },
    "Многолетнее стратегическое и креативное сопровождение главного финтех-бренда страны. Создание национальных музыкальных и семейных блокбастеров, формирующих рекордные показатели транзакций и узнаваемости (Top of Mind 98%).": {
        KZ: "Елдің басты финтех-брендін көпжылдық стратегиялық және креативті сүйемелдеу. Транзакциялар мен танымалдылықтың (Top of Mind 98%) рекордтық көрсеткіштерін қалыптастыратын ұлттық музыкалық және отбасылық блокбастерлерді жасау.",
        EN: "Multi-year strategic and creative partnership with the nation's leading FinTech SuperApp. Producing national musical and family blockbusters driving record transactions and 98% Top-of-Mind awareness."
    },
    "4 раза": { KZ: "4 рет", EN: "4x Winner" },
    "Клиент года Jolbors": { KZ: "Jolbors Жыл клиенті", EN: "Jolbors Client of the Year" },
    "📊 ROI +185% • 5 стран ЦА": { KZ: "📊 ROI +185% • ОА 5 елі", EN: "📊 ROI +185% • 5 CA Countries" },
    "Mindshare / Wavemaker / DASMART • Мультирыночный запуск": {
        KZ: "Mindshare / Wavemaker / DASMART • Көпнарықтық іске қосу",
        EN: "Mindshare / Wavemaker / DASMART • Multi-Market Launch"
    },
    "Масштабирование глобального FMCG & Telecom бренда на 5 стран": {
        KZ: "Жаһандық FMCG & Telecom брендінің 5 елге масштабталуы",
        EN: "Scaling a Global FMCG & Telecom Brand Across 5 Countries"
    },
    "Единая медиа- и digital-стратегия для Казахстана, Узбекистана, Кыргызстана, Таджикистана и Армении. Оптимизация ТВ-баинга и Programmatic-сплита снизила стоимость контакта (CPT) на 27%.": {
        KZ: "Қазақстан, Өзбекстан, Қырғызстан, Тәжікстан және Армения үшін бірыңғай медиа және digital-стратегия. ТВ-баинг пен Programmatic-сплитті оңтайландыру контакт құнын (CPT) 27%-ға төмендетті.",
        EN: "Unified media and digital strategy across Kazakhstan, Uzbekistan, Kyrgyzstan, Tajikistan, and Armenia. TV buying and Programmatic optimization reduced CPT by 27%."
    },
    "Снижение CPT": { KZ: "CPT төмендеуі", EN: "CPT Reduction" },
    "Рост органического поиска": { KZ: "Органикалық іздеу өсімі", EN: "Organic Search Growth" },
    "5 стран": { KZ: "5 ел", EN: "5 Countries" },
    "Единый хаб управления": { KZ: "Бірыңғай басқару хабы", EN: "Single Management Hub" },

    // =========================================================================
    // 5. СТРАНЫ (COUNTRIES.HTML)
    // =========================================================================
    "Региональный масштаб": { KZ: "Аймақтық ауқым", EN: "Regional Scale" },
    "8 стран. 90+ миллионов потребителей.": {
        KZ: "8 ел. 90+ миллион тұтынушы.",
        EN: "8 Countries. 90+ Million Consumers."
    },
    "Единые стандарты качества.": {
        KZ: "Бірыңғай сапа стандарттары.",
        EN: "Unified Quality Standards."
    },
    "Мы обеспечиваем бесшовный запуск и координацию кампаний в Центральной Азии, на Кавказе и в Монголии с глубоким пониманием локального культурного кода и языка каждой страны.": {
        KZ: "Біз әр елдің жергілікті мәдени коды мен тілін терең түсіне отырып, Орталық Азияда, Кавказда және Моңғолияда науқандарды мінсіз іске қосуды және үйлестіруді қамтамасыз етеміз.",
        EN: "We deliver seamless campaign launches and coordination across Central Asia, the Caucasus, and Mongolia with deep mastery of each country's cultural code and local language."
    },
    "Казахстан (HQ — Алматы, Астана)": { KZ: "Қазақстан (HQ — Алматы, Астана)", EN: "Kazakhstan (HQ — Almaty, Astana)" },
    "Штаб-квартира холдинга • 15 агентств": { KZ: "Холдингтің штаб-пәтері • 15 агенттік", EN: "Holding Headquarters • 15 Agencies" },
    "Ключевой хаб DASM Group с 1994 года. Более 20% доли всего медиарынка страны, полный спектр услуг (Creative, Media, Digital, DOOH, PR, BTL, Research) и крупнейший пул международных клиентов.": {
        KZ: "1994 жылдан бері DASM Group негізгі хабы. Елдегі барлық медианарықтың 20%-дан астам үлесі, қызметтердің толық спектрі (Creative, Media, Digital, DOOH, PR, BTL, Research) және халықаралық клиенттердің ең ірі пулы.",
        EN: "DASM Group's flagship hub since 1994. Over 20% of the national media market, full 360° services (Creative, Media, Digital, DOOH, PR, BTL, Research), and the largest international client roster."
    },
    "Население: 20+ млн": { KZ: "Халқы: 20+ млн", EN: "Population: 20M+" },
    "Узбекистан (Ташкент)": { KZ: "Өзбекстан (Ташкент)", EN: "Uzbekistan (Tashkent)" },
    "Ключевой быстрорастущий рынок": { KZ: "Негізгі жылдам өсуші нарық", EN: "Key Fast-Growing Market" },
    "Самый динамичный потребительский рынок региона (37+ млн человек). Локальные команды медийных и креативных агентств DASM обеспечивают глубокую адаптацию на узбекский язык, мощный ТВ-баинг и Telegram/Digital экосистему.": {
        KZ: "Аймақтағы ең серпінді тұтыну нарығы (37+ млн адам). DASM медиа және креативті агенттіктерінің жергілікті командалары өзбек тіліне терең бейімдеуді, қуатты ТВ-баингті және Telegram/Digital экожүйесін қамтамасыз етеді.",
        EN: "The region's most dynamic consumer market (37M+ people). Local DASM media and creative teams deliver authentic Uzbek localization, powerful TV buying, and Telegram/Digital ecosystems."
    },
    "Население: 37+ млн": { KZ: "Халқы: 37+ млн", EN: "Population: 37M+" },
    "Высокий рост FMCG & FinTech": { KZ: "FMCG & FinTech жоғары өсімі", EN: "High FMCG & FinTech Growth" },
    "Кыргызстан (Бишкек)": { KZ: "Қырғызстан (Бішкек)", EN: "Kyrgyzstan (Bishkek)" },
    "Полноценное представительство": { KZ: "Толыққанды өкілдік", EN: "Full-Service Office" },
    "Ведущие позиции в медиабаинге, наружной рекламе, digital-коммуникациях и BTL-активациях. Прямые контракты с крупнейшими телеканалами, инфлюенсерами и селлерами страны.": {
        KZ: "Медиабаинг, сыртқы жарнама, digital-коммуникациялар және BTL-активациялардағы жетекші позициялар. Елдің ірі телеарналарымен, инфлюенсерлерімен және селлерлерімен тікелей келісімшарттар.",
        EN: "Leading positions in media buying, OOH, digital communications, and BTL activations. Direct contracts with top national TV channels, influencers, and media sellers."
    },
    "Бишкек": { KZ: "Бішкек", EN: "Bishkek" },
    "Локализация КР": { KZ: "ҚР локализациясы", EN: "Kyrgyz Localization" },
    "Таджикистан (Душанбе)": { KZ: "Тәжікстан (Душанбе)", EN: "Tajikistan (Dushanbe)" },
    "Операционный офис": { KZ: "Операциялық кеңсе", EN: "Operations Office" },
    "Комплексное сопровождение международных брендов на рынке Таджикистана: закупка ТВ, радио и наружной рекламы, проведение полевых исследований и промо-акций.": {
        KZ: "Тәжікстан нарығында халықаралық брендтерді кешенді сүйемелдеу: ТВ, радио және сыртқы жарнаманы сатып алу, далалық зерттеулер мен промо-акцияларды өткізу.",
        EN: "Comprehensive support for international brands in Tajikistan: TV, radio, and OOH buying, field research, and nationwide promotional activations."
    },
    "Душанбе": { KZ: "Душанбе", EN: "Dushanbe" },
    "Армения (Ереван)": { KZ: "Армения (Ереван)", EN: "Armenia (Yerevan)" },
    "Кавказский кластер": { KZ: "Кавказ кластері", EN: "Caucasus Cluster" },
    "Стратегическое медиапланирование, digital-кампании и креативная адаптация для рынка Армении с соблюдением единых стандартов отчетности WPP / DASM.": {
        KZ: "WPP / DASM бірыңғай есептілік стандарттарын сақтай отырып, Армения нарығы үшін стратегиялық медиажоспарлау, digital-науқандар және креативті бейімдеу.",
        EN: "Strategic media planning, digital campaigns, and creative adaptation for the Armenian market under unified WPP / DASM reporting standards."
    },
    "Ереван": { KZ: "Ереван", EN: "Yerevan" },
    "Грузия (Тбилиси)": { KZ: "Грузия (Тбилиси)", EN: "Georgia (Tbilisi)" },
    "Координация кросс-региональных кампаний, продакшн-хаб мирового уровня, высокоразвитый digital и ТВ-рынок с прозрачной телеметрией.": {
        KZ: "Кросс-аймақтық науқандарды үйлестіру, әлемдік деңгейдегі продакшн-хаб, ашық телеметриясы бар жоғары дамыған digital және ТВ нарығы.",
        EN: "Cross-regional campaign coordination, world-class production hub, and a mature digital and TV market with transparent telemetry."
    },
    "Тбилиси": { KZ: "Тбилиси", EN: "Tbilisi" },
    "Азербайджан (Баку)": { KZ: "Әзербайжан (Баку)", EN: "Azerbaijan (Baku)" },
    "Каспийско-Кавказский хаб": { KZ: "Каспий-Кавказ хабы", EN: "Caspian-Caucasus Hub" },
    "Работа с крупными международными рекламодателями в Баку: премиальный OOH/DOOH инвентарь, спонсорство, спецпроекты и performance-маркетинг.": {
        KZ: "Бакудегі ірі халықаралық жарнама берушілермен жұмыс: премиум OOH/DOOH инвентары, демеушілік, арнайы жобалар және performance-маркетинг.",
        EN: "Serving major international advertisers in Baku: premium OOH/DOOH inventory, sponsorships, special projects, and performance marketing."
    },
    "Баку": { KZ: "Баку", EN: "Baku" },
    "Монголия (Улан-Батор)": { KZ: "Моңғолия (Ұлан-Батор)", EN: "Mongolia (Ulaanbaatar)" },
    "Восточный кластер": { KZ: "Шығыс кластері", EN: "Eastern Cluster" },
    "Расширение географии для транснациональных корпораций: медиапланирование, исследования аудитории и запуск интегрированных кампаний на рынке Монголии.": {
        KZ: "Трансұлттық корпорациялар үшін географияны кеңейту: Моңғолия нарығында медиажоспарлау, аудиторияны зерттеу және интеграцияланған науқандарды іске қосу.",
        EN: "Expanding geographic reach for multinational corporations: media planning, audience research, and integrated campaigns in Mongolia."
    },
    "Улан-Батор": { KZ: "Ұлан-Батор", EN: "Ulaanbaatar" },

    // =========================================================================
    // 6. НОВОСТИ (NEWS.HTML)
    // =========================================================================
    "Пресс-центр DASM": { KZ: "DASM Баспасөз орталығы", EN: "DASM Press Center" },
    "Новости холдинга,": { KZ: "Холдинг жаңалықтары,", EN: "Holding news," },
    "победы и аналитика рынка": { KZ: "жеңістер және нарық аналитикасы", EN: "victories & market insights" },
    "Актуальные события из жизни 15 агентств DASM Group, кадровые назначения, обзоры медиарынка ЦАРА и репортажи с мировых фестивалей.": {
        KZ: "DASM Group 15 агенттігінің өміріндегі өзекті оқиғалар, кадрлық тағайындаулар, ОАЖА медианарығына шолулар және әлемдік фестивальдерден репортаждар.",
        EN: "Latest updates from DASM Group's 15 agencies, executive appointments, Central Asian media market reviews, and global festival reports."
    },
    "Международные награды • Фестивали": { KZ: "Халықаралық марапаттар • Фестивальдер", EN: "International Awards • Festivals" },
    "Агентство GForce Grey (DASM Group) завоевало первого в истории Казахстана Золотого Каннского Льва": {
        KZ: "GForce Grey агенттігі (DASM Group) Қазақстан тарихындағы алғашқы Алтын Канн Арыстанын жеңіп алды",
        EN: "GForce Grey (DASM Group) Wins Kazakhstan's First-Ever Cannes Lions Gold"
    },
    "На международном фестивале креативности Cannes Lions проект «The National Sport of Kazakhstan» удостоился высшей награды Gold Lion, укрепив статус DASM Group как креативного лидера региона.": {
        KZ: "Cannes Lions халықаралық креативтілік фестивалінде «The National Sport of Kazakhstan» жобасы Gold Lion жоғары марапатына ие болып, DASM Group-тың аймақтағы креативті көшбасшы мәртебесін нығайтты.",
        EN: "At the Cannes Lions International Festival of Creativity, 'The National Sport of Kazakhstan' won the prestigious Gold Lion, cementing DASM Group as the region's creative leader."
    },
    "Аналитика и Конференции • 2025/2026": { KZ: "Аналитика және Конференциялар • 2025/2026", EN: "Analytics & Conferences • 2025/2026" },
    "Эксперты DASM Group выступили хедлайнерами рекламно-медийной конференции ADTribune": {
        KZ: "DASM Group сарапшылары ADTribune жарнама-медиа конференциясының хедлайнері болды",
        EN: "DASM Group Experts Headline the ADTribune Media & Advertising Conference"
    },
    "Топ-менеджеры медийных и digital-агентств холдинга представили прогнозы медиаинфляции, тренды Retail Media и сценарии развития ТВ и Digital рынков Центральной Азии.": {
        KZ: "Холдингтің медиа және digital-агенттіктерінің топ-менеджерлері медиаинфляция болжамдарын, Retail Media трендтерін және Орталық Азияның ТВ мен Digital нарықтарының даму сценарийлерін ұсынды.",
        EN: "Executives from the holding's media and digital agencies presented media inflation forecasts, Retail Media trends, and TV/Digital growth scenarios for Central Asia."
    },
    "Кадровые назначения • Корпоративное управление": { KZ: "Кадрлық тағайындаулар • Корпоративтік басқару", EN: "Executive Appointments • Corporate Governance" },
    "Усиление креативного и PR-лидерства в структуре холдинга DASM Group": {
        KZ: "DASM Group холдингі құрылымында креативті және PR-көшбасшылықты күшейту",
        EN: "Strengthening Creative and PR Leadership Across DASM Group"
    },
    "Евгений Костылев в роли Chief Creative Officer холдинга курирует развитие всех креативных агентств группы, а PR-департамент расширяет внешние и внутренние коммуникации в 8 странах присутствия.": {
        KZ: "Евгений Костылев холдингтің Chief Creative Officer рөлінде топтың барлық креативті агенттіктерінің дамуына жетекшілік етеді, ал PR-департамент 8 қатысу елінде сыртқы және ішкі коммуникацияларды кеңейтеді.",
        EN: "As Chief Creative Officer of the holding, Evgeny Kostylev oversees creative excellence across all group agencies, while the PR department expands communications across all 8 countries."
    },
    "Фестивали • Азия": { KZ: "Фестивальдер • Азия", EN: "Festivals • Asia" },
    "Первые награды Центральной Азии на AdFest: Золотой и Бронзовый Лотус за кейс Saltanat Light": {
        KZ: "AdFest-тегі Орталық Азияның алғашқы марапаттары: Saltanat Light кейсі үшін Алтын және Қола Лотус",
        EN: "Central Asia's First AdFest Awards: Gold and Bronze Lotus for Saltanat Light"
    },
    "Совместный проект с Citix получил признание жюри старейшего азиатско-тихоокеанского фестиваля AdFest и вошел в топ рейтинга стратегии и эффективности Spikes Asia.": {
        KZ: "Citix-пен бірлескен жоба Азия-Тынық мұхиты аймағындағы ең көне AdFest фестивалінің қазылар алқасының мойындауына ие болып, Spikes Asia стратегия және тиімділік рейтингінің тобына енді.",
        EN: "The joint project with Citix won acclaim from the jury at Asia-Pacific's oldest festival, AdFest, and ranked at the top of the Spikes Asia strategy and effectiveness index."
    },
    "Индустрия • Мероприятия": { KZ: "Индустрия • Іс-шаралар", EN: "Industry • Events" },
    "DASM Group и GForce провели закрытый показ и разбор лучших рекламных роликов Super Bowl в Алматы": {
        KZ: "DASM Group және GForce Алматыда Super Bowl үздік жарнамалық роликтерінің жабық көрсетілімі мен талдауын өткізді",
        EN: "DASM Group and GForce Host Exclusive Super Bowl Commercials Screening & Breakdown in Almaty"
    },
    "Традиционная встреча клиентов, маркетологов и партнеров холдинга с профессиональным разбором мировых трендов сторителлинга и селебрити-маркетинга.": {
        KZ: "Әлемдік сторителлинг және селебрити-маркетинг трендтерін кәсіби талдаумен холдинг клиенттерінің, маркетологтарының және серіктестерінің дәстүрлі кездесуі.",
        EN: "An annual gathering of clients, CMOs, and partners featuring an expert breakdown of global storytelling trends and celebrity marketing."
    },
    "Технологии • AI & Data": { KZ: "Технологиялар • AI & Data", EN: "Technology • AI & Data" },
    "Внедрение AI-инструментов прогнозирования медиаэффективности в агентствах DASM": {
        KZ: "DASM агенттіктерінде медиатиімділікті болжаудың AI-құралдарын енгізу",
        EN: "Deploying AI-Powered Media Effectiveness Forecasting Across DASM Agencies"
    },
    "Агентства группы интегрировали новые алгоритмы эконометрического моделирования и оптимизации омниканальных рекламных бюджетов для клиентов в Казахстане и Узбекистане.": {
        KZ: "Топ агенттіктері Қазақстан мен Өзбекстандағы клиенттер үшін эконометрикалық модельдеудің және омниканалды жарнамалық бюджеттерді оңтайландырудың жаңа алгоритмдерін біріктірді.",
        EN: "Group agencies have integrated advanced econometric modeling and omnichannel budget optimization algorithms for clients in Kazakhstan and Uzbekistan."
    },

    // =========================================================================
    // 7. КАРЬЕРА (CAREER.HTML)
    // =========================================================================
    "Люди — наш главный актив": { KZ: "Адамдар — біздің басты активіміз", EN: "People Are Our Greatest Asset" },
    "Создавай рекламу мирового уровня": { KZ: "Әлемдік деңгейдегі жарнаманы жаса —", EN: "Create world-class advertising" },
    "в команде 500+ профи": { KZ: "500+ кәсіпқой командасында", EN: "in a team of 500+ pros" },
    "Работа в DASM Group — это доступ к глобальным базам знаний WPP, работа с крупнейшими брендами планеты, поездки на международные фестивали и культура, где смелым идеям всегда говорят «DA».": {
        KZ: "DASM Group-тағы жұмыс — бұл WPP жаһандық білім базаларына қол жеткізу, планетаның ең ірі брендтерімен жұмыс істеу, халықаралық фестивальдерге сапарлар және батыл идеяларға әрқашан «DA» дейтін мәдениет.",
        EN: "Working at DASM Group means access to global WPP knowledge bases, working with the planet's biggest brands, attending international festivals, and a culture that always says 'DA' to bold ideas."
    },
    "Международное обучение": { KZ: "Халықаралық оқыту", EN: "International Learning" },
    "Доступ к закрытым образовательным платформам GroupM / WPP, внутренним академиям медийного планирования, креативным воркшопам и менторству от обладателей Cannes Lions.": {
        KZ: "GroupM / WPP жабық білім беру платформаларына, ішкі медиажоспарлау академияларына, креативті воркшоптарға және Cannes Lions иегерлерінің тәлімгерлігіне қол жеткізу.",
        EN: "Access to exclusive GroupM / WPP learning platforms, internal media planning academies, creative workshops, and mentorship from Cannes Lions winners."
    },
    "Масштабные клиенты": { KZ: "Ауқымды клиенттер", EN: "Blue-Chip Clients" },
    "Ты будешь работать с бюджетами и кампаниями национального и мультистранового масштаба (FinTech, FMCG, Telecom, Auto), которые видят миллионы людей каждый день.": {
        KZ: "Сен күн сайын миллиондаған адам көретін ұлттық және көпелдік ауқымдағы (FinTech, FMCG, Telecom, Auto) бюджеттермен және науқандармен жұмыс істейсің.",
        EN: "Work on national and multi-country campaigns and budgets (FinTech, FMCG, Telecom, Auto) seen by millions of consumers every single day."
    },
    "Карьерный трек в 8 странах": { KZ: "8 елдегі мансаптық трек", EN: "Career Track Across 8 Countries" },
    "Прозрачный грейдинг, возможность горизонтальных и вертикальных переходов между 15 агентствами группы и релокации в офисы холдинга по всему региону.": {
        KZ: "Ашық грейдинг, топтың 15 агенттігі арасында көлденең және тік ауысу мүмкіндігі және бүкіл аймақ бойынша холдинг кеңселеріне релокация.",
        EN: "Transparent grading, horizontal and vertical mobility across 15 group agencies, and relocation opportunities across our regional hubs."
    },
    "Открытые позиции": { KZ: "Ашық вакансиялар", EN: "Open Positions" },
    "Кого мы ищем прямо сейчас": { KZ: "Біз дәл қазір кімді іздейміз", EN: "Who We Are Looking For Right Now" },
    "Алматы • Креативное агентство (Full-time)": { KZ: "Алматы • Креативті агенттік (Full-time)", EN: "Almaty • Creative Agency (Full-time)" },
    "Разработка креативных концепций 360°, сценариев для ТВ и Digital, участие в фестивальных проектах уровня Cannes Lions / Jolbors.": {
        KZ: "360° креативті тұжырымдамаларды, ТВ мен Digital үшін сценарийлерді әзірлеу, Cannes Lions / Jolbors деңгейіндегі фестиваль жобаларына қатысу.",
        EN: "Developing 360° creative concepts, TV and Digital scripts, and participating in Cannes Lions / Jolbors festival projects."
    },
    "Алматы / Ташкент • Client Service (Full-time)": { KZ: "Алматы / Ташкент • Client Service (Full-time)", EN: "Almaty / Tashkent • Client Service (Full-time)" },
    "Управление ключевым портфелем международных клиентов, лидирование кросс-агентских команд, контроль высокого уровня клиентского сервиса.": {
        KZ: "Халықаралық клиенттердің негізгі портфелін басқару, кросс-агенттік командаларға көшбасшылық ету, клиенттік сервистің жоғары деңгейін бақылау.",
        EN: "Managing a key portfolio of international clients, leading cross-agency teams, and ensuring world-class client service."
    },
    "Стратегическое и тактическое планирование digital-кампаний, защита медиасплитов перед клиентами, работа с аналитическими инструментами GroupM.": {
        KZ: "Digital-науқандарды стратегиялық және тактикалық жоспарлау, клиенттер алдында медиасплиттерді қорғау, GroupM аналитикалық құралдарымен жұмыс.",
        EN: "Strategic and tactical digital campaign planning, defending media splits to clients, and working with GroupM analytical tools."
    },
    "Алматы • Корпоративный центр (Full-time)": { KZ: "Алматы • Корпоративтік орталық (Full-time)", EN: "Almaty • Corporate HQ (Full-time)" },
    "Финансовое планирование, бюджетирование проектов агентств группы, международная отчетность и контроль рентабельности контрактов.": {
        KZ: "Қаржылық жоспарлау, топ агенттіктерінің жобаларын бюджеттеу, халықаралық есептілік және келісімшарттардың рентабельділігін бақылау.",
        EN: "Financial planning, agency project budgeting, international reporting, and contract profitability control."
    },
    "Откликнуться →": { KZ: "Үн қосу →", EN: "Apply Now →" },

    // =========================================================================
    // 8. КОНТАКТЫ И ФУТЕРЫ НА ВСЕХ СТРАНИЦАХ (CONTACTS.HTML & FOOTERS)
    // =========================================================================
    "Свяжитесь с нами": { KZ: "Бізбен байланысыңыз", EN: "Get in Touch" },
    "Давайте обсудим ваш": { KZ: "Сіздің келесі үлкен қадамыңызды", EN: "Let's discuss your" },
    "следующий большой шаг": { KZ: "бірге талқылайық", EN: "next big move" },
    "Пригласите DASM Group в тендер, запросите аудит текущей рекламной стратегии или свяжитесь с региональными офисами группы.": {
        KZ: "DASM Group-ты тендерге шақырыңыз, ағымдағы жарнамалық стратегияның аудитін сұраңыз немесе топтың аймақтық кеңселерімен байланысыңыз.",
        EN: "Invite DASM Group to a pitch, request an audit of your current media & creative strategy, or connect with our regional hubs."
    },
    "Штаб-квартира • Казахстан": { KZ: "Штаб-пәтер • Қазақстан", EN: "Headquarters • Kazakhstan" },
    "Алматы — Центральный офис": { KZ: "Алматы — Орталық кеңсе", EN: "Almaty — Central Headquarters" },
    "Региональные хабы": { KZ: "Аймақтық хабтар", EN: "Regional Hubs" },
    "Офисы в 8 странах": { KZ: "8 елдегі кеңселер", EN: "Offices Across 8 Countries" },
    "Пн–Пт: 09:00 – 18:30 (GMT+5)": { KZ: "Дс–Жм: 09:00 – 18:30 (GMT+5)", EN: "Mon–Fri: 09:00 – 18:30 (GMT+5)" },
    "Официальные ресурсы": { KZ: "Ресми ресурстар", EN: "Official Channels" },
    "Социальные сети": { KZ: "Әлеуметтік желілер", EN: "Social Media" },
    "Форма обратной связи": { KZ: "Кері байланыс формасы", EN: "Contact & Pitch Request Form" },
    "Заполните поля ниже — мы ответим в течение нескольких часов.": {
        KZ: "Төмендегі өрістерді толтырыңыз — біз бірнеше сағат ішінде жауап береміз.",
        EN: "Fill out the fields below — our team will respond within a few business hours."
    },
    "Ваше имя и компания *": { KZ: "Сіздің атыңыз және компания *", EN: "Your Name & Company *" },
    "Ваше имя *": { KZ: "Сіздің атыңыз *", EN: "Your Name *" },
    "Телефон или Email *": { KZ: "Телефон немесе Email *", EN: "Phone or Email *" },
    "Интересующее направление": { KZ: "Қызықтыратын бағыт", EN: "Service of Interest" },
    "Комплексное обслуживание 360°": { KZ: "360° кешенді қызмет көрсету", EN: "Full-Service 360° Communications" },
    "Медиапланирование и баинг (TV, OOH, Digital)": { KZ: "Медиажоспарлау және баинг (TV, OOH, Digital)", EN: "Media Planning & Buying (TV, OOH, Digital)" },
    "Креатив, стратегия и брендинг": { KZ: "Креатив, стратегия және брендинг", EN: "Creative, Strategy & Branding" },
    "Мультистрановой запуск (ЦА и Кавказ)": { KZ: "Көпелдік іске қосу (ОА және Кавказ)", EN: "Multi-Country Campaign (Central Asia & Caucasus)" },
    "Ваше сообщение / Описание задачи *": { KZ: "Сіздің хабарламаңыз / Міндеттің сипаттамасы *", EN: "Your Message / Project Brief *" },
    "О задаче или проекте *": { KZ: "Міндет немесе жоба туралы *", EN: "About Your Project or Brief *" },
    "Сообщение *": { KZ: "Хабарлама *", EN: "Message *" },
    "Описание задачи *": { KZ: "Міндеттің сипаттамасы *", EN: "Task Description *" },
    "Задача *": { KZ: "Міндет *", EN: "Project Brief *" },
    "Интересующие страны и задачи *": { KZ: "Қызықтыратын елдер мен міндеттер *", EN: "Target Countries & Objectives *" },
    "Сообщение (или ссылка на резюме / бриф) *": { KZ: "Хабарлама (немесе түйіндеме / бриф сілтемесі) *", EN: "Message (or CV / Portfolio / Brief link) *" },
    "Комментарий *": { KZ: "Пікір *", EN: "Comment *" },
    "Начать проект": { KZ: "Жобаны бастау", EN: "Start a Project" },
    "Готовы сказать": { KZ: "Брендтің серпінді өсуіне", EN: "Ready to say" },
    "прорывному росту бренда?": { KZ: "деп айтуға дайынсыз ба?", EN: "to breakthrough brand growth?" },
    "Оставьте заявку на тендер, стратегическую сессию или аудит медиасплита. Наш New Business директор свяжется с вами в течение рабочего дня.": {
        KZ: "Тендерге, стратегиялық сессияға немесе медиасплит аудитіне өтінім қалдырыңыз. Біздің New Business директорымыз сізбен жұмыс күні ішінде байланысады.",
        EN: "Submit a pitch invitation, strategy session request, or media split audit. Our New Business Director will contact you within one business day."
    },
    "Штаб-квартира (Алматы)": { KZ: "Штаб-пәтер (Алматы)", EN: "Headquarters (Almaty)" },
    "ул. Шамши Калдаякова, 34 / ул. Айтеке би, 29": { KZ: "Шәмші Қалдаяқов к-сі, 34 / Әйтеке би к-сі, 29", EN: "34 Shamshi Kaldayakov St. / 29 Aiteke Bi St." },
    "ул. Шамши Калдаякова, 34": { KZ: "Шәмші Қалдаяқов к-сі, 34", EN: "34 Shamshi Kaldayakov St." },
    "Алматы, ул. Шамши Калдаякова, 34": { KZ: "Алматы, Шәмші Қалдаяқов к-сі, 34", EN: "Almaty, 34 Shamshi Kaldayakov St." },
    "Алматы, ул. Шамши Калдаякова, 34 / ул. Айтеке би, 29": { KZ: "Алматы, Шәмші Қалдаяқов к-сі, 34 / Әйтеке би к-сі, 29", EN: "Almaty, 34 Shamshi Kaldayakov St. / 29 Aiteke Bi St." },
    "Прямая линия и Email": { KZ: "Тікелей желі және Email", EN: "Direct Line & Email" },
    "Стать клиентом DASM Group": { KZ: "DASM Group клиенті болу", EN: "Become a DASM Group Client" },
    "Отправить бриф / заявку →": { KZ: "Брифті / өтінімді жіберу →", EN: "Submit Brief / Request →" },
    "Отправить заявку →": { KZ: "Өтінімді жіберу →", EN: "Submit Request →" },
    "Отправить запрос →": { KZ: "Сұранысты жіберу →", EN: "Send Request →" },
    "Отправить бриф →": { KZ: "Брифті жіберу →", EN: "Send Brief →" },
    "Получить консультацию →": { KZ: "Кеңес алу →", EN: "Get Consultation →" },
    "Отправить →": { KZ: "Жіберу →", EN: "Send →" },
    "Отправить сообщение в DASM Group →": { KZ: "DASM Group-қа хабарлама жіберу →", EN: "Send Message to DASM Group →" },
    "Заказать звонок →": { KZ: "Қоңырауға тапсырыс беру →", EN: "Request a Call →" },
    "Быстрая заявка на звонок": { KZ: "Қоңырауға жедел өтінім", EN: "Quick Callback Request" },
    "Быстрый контакт": { KZ: "Жедел байланыс", EN: "Quick Contact" },
    "смелым амбициям": { KZ: "батыл амбицияларға", EN: "to Bold Ambitions" },
    "Крупнейшая коммуникационная группа Центральной Азии всегда открыта для новых вызовов, тендеров и партнерств.": {
        KZ: "Орталық Азиядағы ең ірі коммуникациялық топ жаңа сын-қатерлерге, тендерлерге және серіктестіктерге әрқашан ашық.",
        EN: "Central Asia's largest communications group is always open to new challenges, pitches, and strategic partnerships."
    },
    "Партнерство": { KZ: "Серіктестік", EN: "Partnership" },
    "Давайте создадим следующую историю успеха вместе": {
        KZ: "Келесі табыс тарихын бірге жасайық",
        EN: "Let's build the next success story together"
    },
    "Оставьте свои контакты, и мы подготовим индивидуальное предложение от профильных агентств DASM Group.": {
        KZ: "Байланыс деректеріңізді қалдырыңыз, біз DASM Group бейінді агенттіктерінен жеке ұсыныс дайындаймыз.",
        EN: "Leave your contact details and we will prepare a tailored proposal from DASM Group's specialized agencies."
    },
    "Подбор команды": { KZ: "Команда таңдау", EN: "Team Selection" },
    "Не знаете, какое именно агентство подойдет под вашу задачу?": {
        KZ: "Сіздің міндетіңізге қай агенттік сәйкес келетінін білмейсіз бе?",
        EN: "Not sure which agency best fits your business challenge?"
    },
    "Оставьте заявку — мы соберем кастомную проектную команду из лучших стратегов, креаторов и медийщиков холдинга под ваш KPI.": {
        KZ: "Өтінім қалдырыңыз — біз сіздің KPI-ға сәйкес холдингтің үздік стратегтерінен, креаторларынан және медиа мамандарынан арнайы жобалық команда жинаймыз.",
        EN: "Leave a request — we will assemble a custom project team of the holding's top strategists, creatives, and media experts tailored to your KPIs."
    },
    "Запросить презентацию агентств": { KZ: "Агенттіктер презентациясын сұрау", EN: "Request Agency Credentials" },
    "Новый кейс": { KZ: "Жаңа кейс", EN: "New Case" },
    "Хотите, чтобы ваш бренд стал следующим громким кейсом региона?": {
        KZ: "Брендіңіздің аймақтағы келесі жарқын кейске айналғанын қалайсыз ба?",
        EN: "Want your brand to become the region's next landmark case study?"
    },
    "Свяжитесь с нами для обсуждения вашей маркетинговой или медийной задачи.": {
        KZ: "Маркетингтік немесе медиа міндетіңізді талқылау үшін бізбен байланысыңыз.",
        EN: "Contact us to discuss your marketing, creative, or media objectives."
    },
    "Обсудить ваш проект": { KZ: "Жобаңызды талқылау", EN: "Discuss Your Project" },
    "Международная экспансия": { KZ: "Халықаралық экспансия", EN: "International Expansion" },
    "Выводите бренд на новые рынки Центральной Азии и Кавказа?": {
        KZ: "Брендті Орталық Азия мен Кавказдың жаңа нарықтарына шығарасыз ба?",
        EN: "Launching your brand into new markets across Central Asia and the Caucasus?"
    },
    "Запросите обзор медиарынка и медиаинфляции по интересующим вас странам у наших стратегов.": {
        KZ: "Біздің стратегтерден сізді қызықтыратын елдер бойынша медианарық пен медиаинфляцияға шолу сұраңыз.",
        EN: "Request a media landscape and inflation overview for your target countries from our regional strategists."
    },
    "Запросить мультистрановой расчет": { KZ: "Көпелдік есептеуді сұрау", EN: "Request Multi-Country Proposal" },
    "Запрос для СМИ и клиентов": { KZ: "БАҚ пен клиенттерге арналған сұраныс", EN: "Media & Client Inquiries" },
    "Хотите пригласить спикера DASM или запустить проект?": {
        KZ: "DASM спикерін шақырғыңыз немесе жобаны бастағыңыз келе ме?",
        EN: "Want to invite a DASM speaker or launch a campaign?"
    },
    "Свяжитесь с нашей пресс-службой или отделом нового бизнеса через форму обратной связи.": {
        KZ: "Кері байланыс формасы арқылы біздің баспасөз қызметімізбен немесе жаңа бизнес бөлімімен байланысыңыз.",
        EN: "Reach out to our press office or new business team via the contact form."
    },
    "Написать в DASM Group": { KZ: "DASM Group-қа жазу", EN: "Message DASM Group" },
    "Отклик или Заявка": { KZ: "Үн қосу немесе Өтінім", EN: "Career or Client Inquiry" },
    "Хотите присоединиться к команде или стать нашим клиентом?": {
        KZ: "Командаға қосылғыңыз немесе біздің клиент болғыңыз келе ме?",
        EN: "Want to join our team or become our client?"
    },
    "Используйте универсальную форму справа — укажите ссылку на портфолио/резюме или опишите бизнес-задачу вашего бренда.": {
        KZ: "Оң жақтағы әмбебап форманы пайдаланыңыз — портфолио/түйіндеме сілтемесін көрсетіңіз немесе брендіңіздің бизнес-міндетін сипаттаңыз.",
        EN: "Use the universal form on the right — share a link to your portfolio/CV or describe your brand's business challenge."
    },
    "Связаться с DASM Group": { KZ: "DASM Group-пен байланысу", EN: "Contact DASM Group" },
    "Штаб-квартира": { KZ: "Штаб-пәтер", EN: "Headquarters" },
    "Связь": { KZ: "Байланыс", EN: "Contact" },
    "Офис в Алматы": { KZ: "Алматыдағы кеңсе", EN: "Almaty Office" },
    "Центральный хаб": { KZ: "Орталық хаб", EN: "Central Hub" },
    "Пресс-служба и Офис": { KZ: "Баспасөз қызметі және Кеңсе", EN: "Press Office & HQ" },
    "Офис DASM Group": { KZ: "DASM Group кеңсесі", EN: "DASM Group Office" },
    "HR и приемная": { KZ: "HR және қабылдау бөлмесі", EN: "HR & Reception" },
    "Пожалуйста, введите ваше имя": { KZ: "Өтінеміз, атыңызды енгізіңіз", EN: "Please enter your name" },
    "Пожалуйста, укажите ваше имя": { KZ: "Өтінеміз, атыңызды көрсетіңіз", EN: "Please enter your name" },
    "Введите ваше имя": { KZ: "Атыңызды енгізіңіз", EN: "Enter your name" },
    "Укажите корректный телефон или email": { KZ: "Дұрыс телефон немесе email көрсетіңіз", EN: "Enter a valid phone or email" },
    "Укажите телефон или email": { KZ: "Телефон немесе email көрсетіңіз", EN: "Enter phone or email" },
    "Напишите краткое сообщение": { KZ: "Қысқаша хабарлама жазыңыз", EN: "Write a short message" },
    "Напишите сообщение": { KZ: "Хабарлама жазыңыз", EN: "Write a message" },
    "Пожалуйста, напишите сообщение": { KZ: "Өтінеміз, хабарлама жазыңыз", EN: "Please write a message" },
    "Напишите короткое сообщение": { KZ: "Қысқаша хабарлама жазыңыз", EN: "Write a brief comment" },
    "© 1994–2026 DASM Group. Все права защищены.": {
        KZ: "© 1994–2026 DASM Group. Барлық құқықтар қорғалған.",
        EN: "© 1994–2026 DASM Group. All rights reserved."
    }
};

// Перевод placeholder'ов в полях ввода
const placeholderDictionary = {
    "Александр Ким": { KZ: "Әлихан Сәтбаев", EN: "Alexander Kim" },
    "Ваше имя": { KZ: "Сіздің атыңыз", EN: "Your Name" },
    "Данияр Сериков, Marketing Director": { KZ: "Данияр Серіков, Marketing Director", EN: "Daniyar Serikov, Marketing Director" },
    "+7 (777) 000-00-00 или email@company.com": { KZ: "+7 (777) 000-00-00 немесе email@company.com", EN: "+7 (777) 000-00-00 or email@company.com" },
    "+7 (777) 000-00-00 или email": { KZ: "+7 (777) 000-00-00 немесе email", EN: "+7 (777) 000-00-00 or email" },
    "+7 (701) 000-00-00 или d.serikov@brand.kz": { KZ: "+7 (701) 000-00-00 немесе d.serikov@brand.kz", EN: "+7 (701) 000-00-00 or d.serikov@brand.kz" },
    "Расскажите о вашем бренде, географии и задачах...": { KZ: "Брендіңіз, географияңыз және міндеттеріңіз туралы айтып беріңіз...", EN: "Tell us about your brand, target markets, and objectives..." },
    "Опишите ваш запрос...": { KZ: "Сұранысыңызды сипаттаңыз...", EN: "Describe your inquiry..." },
    "Какое направление вас интересует?": { KZ: "Сізді қандай бағыт қызықтырады?", EN: "Which agency or discipline interests you?" },
    "Опишите ваш бренд и цели кампании...": { KZ: "Брендіңізді және науқан мақсаттарын сипаттаңыз...", EN: "Describe your brand and campaign goals..." },
    "Например: Казахстан, Узбекистан, Кыргызстан...": { KZ: "Мысалы: Қазақстан, Өзбекстан, Қырғызстан...", EN: "E.g., Kazakhstan, Uzbekistan, Kyrgyzstan..." },
    "Ваш вопрос или предложение...": { KZ: "Сіздің сұрағыңыз немесе ұсынысыңыз...", EN: "Your question or proposal..." },
    "Расскажите о себе или о вашем проекте...": { KZ: "Өзіңіз немесе жобаңыз туралы айтып беріңіз...", EN: "Tell us about yourself or your project..." },
    "Опишите задачи проекта, ориентировочные сроки и географию...": { KZ: "Жоба міндеттерін, болжамды мерзімдерін және географиясын сипаттаңыз...", EN: "Describe project goals, timeline, and target countries..." },
    "Удобное время для звонка или вопрос...": { KZ: "Қоңырау шалуға ыңғайлы уақыт немесе сұрақ...", EN: "Preferred time for a call or your question..." }
};

// Шаблон сообщения об успешной отправке формы
const successMessages = {
    RU: (name, contact, id) => `✓ Заявка #${id} принята! Спасибо, ${name}. Менеджер DASM Group свяжется с вами по контакту (${contact}) в течение 15 минут.`,
    KZ: (name, contact, id) => `✓ Өтінім #${id} қабылданды! Рақмет, ${name}. DASM Group менеджері сізбен (${contact}) 15 минут ішінде хабарласады.`,
    EN: (name, contact, id) => `✓ Request #${id} received! Thank you, ${name}. A DASM Group manager will reach out to you via (${contact}) within 15 minutes.`
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. СОБИРАЕМ ВСЕ ТЕКСТОВЫЕ УЗЛЫ НА СТРАНИЦЕ ДЛЯ МГНОВЕННОГО ПЕРЕВОДА
    const textNodesData = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode: (node) => {
            const parent = node.parentElement;
            if (!parent) return NodeFilter.FILTER_REJECT;
            const tag = parent.tagName;
            if (tag === 'SCRIPT' || tag === 'STYLE') return NodeFilter.FILTER_REJECT;
            if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
            return NodeFilter.FILTER_ACCEPT;
        }
    });

    let currentNode;
    while ((currentNode = walker.nextNode())) {
        const raw = currentNode.nodeValue;
        const trimmed = raw.trim().replace(/\s+/g, ' ');
        const leadingSpace = raw.match(/^\s*/)[0];
        const trailingSpace = raw.match(/\s*$/)[0];
        textNodesData.push({
            node: currentNode,
            originalTrimmed: trimmed,
            leadingSpace,
            trailingSpace
        });
    }

    // Сохраняем оригинальные placeholder'ы
    const inputsWithPlaceholder = document.querySelectorAll('input[placeholder], textarea[placeholder]');
    inputsWithPlaceholder.forEach(el => {
        el.dataset.origPlaceholder = el.getAttribute('placeholder');
    });

    // Функция переключения языка на всей странице
    function applyFullPageLanguage(lang) {
        document.documentElement.lang = lang.toLowerCase();

        textNodesData.forEach(item => {
            const entry = fullDictionary[item.originalTrimmed];
            if (lang === 'RU') {
                item.node.nodeValue = item.leadingSpace + item.originalTrimmed + item.trailingSpace;
            } else if (entry && entry[lang]) {
                item.node.nodeValue = item.leadingSpace + entry[lang] + item.trailingSpace;
            }
        });

        inputsWithPlaceholder.forEach(el => {
            const orig = el.dataset.origPlaceholder;
            const entry = placeholderDictionary[orig];
            if (lang === 'RU') {
                el.setAttribute('placeholder', orig);
            } else if (entry && entry[lang]) {
                el.setAttribute('placeholder', entry[lang]);
            }
        });

        // Перевод карточек с составным HTML на странице Контакты (адреса и телефоны)
        document.querySelectorAll('.card-text').forEach(p => {
            if (!p.dataset.origHtml) p.dataset.origHtml = p.innerHTML;
            if (lang === 'RU') {
                p.innerHTML = p.dataset.origHtml;
            } else if (lang === 'KZ') {
                p.innerHTML = p.dataset.origHtml
                    .replace('050019, г. Алматы, Медеуский район,', '050019, Алматы қ., Медеу ауданы,')
                    .replace('ул. Шамши Калдаякова, 34', 'Шәмші Қалдаяқов к-сі, 34')
                    .replace('ул. Айтеке би, 29 (БЦ Absolut, 1, 5, 6, 7 этажи)', 'Әйтеке би к-сі, 29 (Absolut БО, 1, 5, 6, 7 қабаттар)')
                    .replace('Телефон:', 'Телефон:')
                    .replace('Бишкек', 'Бішкек')
                    .replace('Улан-Батор', 'Ұлан-Батор');
            } else if (lang === 'EN') {
                p.innerHTML = p.dataset.origHtml
                    .replace('050019, г. Алматы, Медеуский район,', '050019, Almaty, Medeu District,')
                    .replace('ул. Шамши Калдаякова, 34', '34 Shamshi Kaldayakov St.')
                    .replace('ул. Айтеке би, 29 (БЦ Absolut, 1, 5, 6, 7 этажи)', '29 Aiteke Bi St. (Absolut BC, Floors 1, 5, 6, 7)')
                    .replace('Телефон:', 'Phone:')
                    .replace('Ташкент', 'Tashkent')
                    .replace('Бишкек', 'Bishkek')
                    .replace('Душанбе', 'Dushanbe')
                    .replace('Ереван', 'Yerevan')
                    .replace('Тбилиси', 'Tbilisi')
                    .replace('Баку', 'Baku')
                    .replace('Улан-Батор', 'Ulaanbaatar');
            }
        });
    }

    // Инициализация переключателя языка
    const langSwitcher = document.getElementById('langSwitcher');
    const savedLang = localStorage.getItem('dasm_lang') || 'RU';
    applyFullPageLanguage(savedLang);

    if (langSwitcher) {
        const langButtons = langSwitcher.querySelectorAll('.lang-btn');
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === savedLang);
            btn.addEventListener('click', () => {
                const selectedLang = btn.dataset.lang;
                langButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                localStorage.setItem('dasm_lang', selectedLang);
                applyFullPageLanguage(selectedLang);
            });
        });
    }

    // 2. ДИНАМИЧЕСКАЯ ШАПКА ПРИ СКРОЛЛЕ
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. МОБИЛЬНОЕ МЕНЮ
    const burgerBtn = document.getElementById('burgerBtn');
    const navMenu = document.getElementById('navMenu');
    if (burgerBtn && navMenu) {
        burgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            burgerBtn.classList.toggle('active');
        });

        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                burgerBtn.classList.remove('active');
            });
        });
    }

    // 4. АНИМАЦИЯ ПОЯВЛЕНИЯ ПРИ СКРОЛЛЕ
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    // 5. СВЕЧЕНИЕ КУРСОРА И БЛИК КАРТОЧЕК
    const cursorGlow = document.getElementById('cursorGlow');
    if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
        window.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = `${e.clientX}px`;
            cursorGlow.style.top = `${e.clientY}px`;
        });
    }

    const interactiveCards = document.querySelectorAll('.interactive-card');
    interactiveCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.background = `radial-gradient(450px circle at ${x}px ${y}px, rgba(244, 172, 183, 0.16), #ffffff 70%)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.background = '#ffffff';
        });
    });

    // 6. ФИЛЬТРАЦИЯ АГЕНТСТВ И КЕЙСОВ
    function setupFilter(filterContainerId, gridContainerId) {
        const filterContainer = document.getElementById(filterContainerId);
        const gridContainer = document.getElementById(gridContainerId);
        if (!filterContainer || !gridContainer) return;

        const buttons = filterContainer.querySelectorAll('.filter-btn');
        const items = gridContainer.children;

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filterValue = btn.getAttribute('data-filter');

                Array.from(items).forEach(item => {
                    const categories = item.getAttribute('data-category') || '';
                    item.style.display = (filterValue === 'all' || categories.includes(filterValue)) ? '' : 'none';
                });
            });
        });
    }

    setupFilter('agencyFilters', 'agencyGrid');
    setupFilter('worksFilters', 'worksGrid');

    // 7. ВАЛИДАЦИЯ И ОТПРАВКА ФОРМ
    const forms = document.querySelectorAll('.js-validate-form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const nameInput = form.querySelector('input[name="name"]');
            const contactInput = form.querySelector('input[name="contact"]');
            const messageInput = form.querySelector('textarea[name="message"]');
            const successBox = form.querySelector('.form-success-message');

            if (nameInput) {
                const group = nameInput.closest('.form-group');
                if (nameInput.value.trim().length < 2) {
                    group.classList.add('invalid');
                    isValid = false;
                } else {
                    group.classList.remove('invalid');
                }
            }

            if (contactInput) {
                const group = contactInput.closest('.form-group');
                const val = contactInput.value.trim();
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                const phoneRegex = /^[\d\s\+\-\(\)]{7,20}$/;

                if (!emailRegex.test(val) && !phoneRegex.test(val)) {
                    group.classList.add('invalid');
                    isValid = false;
                } else {
                    group.classList.remove('invalid');
                }
            }

            if (messageInput) {
                const group = messageInput.closest('.form-group');
                if (messageInput.value.trim().length < 3) {
                    group.classList.add('invalid');
                    isValid = false;
                } else {
                    group.classList.remove('invalid');
                }
            }

            if (isValid) {
                const activeLang = localStorage.getItem('dasm_lang') || 'RU';
                const leadId = Math.floor(1000 + Math.random() * 9000);
                const clientName = nameInput ? nameInput.value.trim() : 'Client';
                const clientContact = contactInput ? contactInput.value.trim() : '';

                const savedLeads = JSON.parse(localStorage.getItem('dasm_leads') || '[]');
                savedLeads.push({
                    id: leadId,
                    name: clientName,
                    contact: clientContact,
                    message: messageInput ? messageInput.value.trim() : '',
                    date: new Date().toLocaleString()
                });
                localStorage.setItem('dasm_leads', JSON.stringify(savedLeads));

                form.reset();
                if (successBox) {
                    const msgFn = successMessages[activeLang] || successMessages.RU;
                    successBox.textContent = msgFn(clientName, clientContact, leadId);
                    successBox.classList.add('visible');
                    setTimeout(() => {
                        successBox.classList.remove('visible');
                    }, 8000);
                }
            }
        });
    });
});
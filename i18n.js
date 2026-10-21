/**
 * DASM GROUP — полный переключатель языка RU / KZ / EN
 *
 * Словарь «русский текст → [казахский, английский]».
 * Обходит все текстовые узлы страницы, заголовки документа, placeholder, title и aria-label.
 */
(function () {
    const D = {
        // ---------- Заголовки страниц (<title>) ----------
        "DASM Group — Крупнейшая коммуникационная группа Центральной Азии": [
            "DASM Group — Орталық Азиядағы ең ірі коммуникациялық топ",
            "DASM Group — The Largest Communications Group in Central Asia"
        ],
        "О холдинге — DASM Group": ["Холдинг туралы — DASM Group", "About the Holding — DASM Group"],
        "Агентства — DASM Group": ["Агенттіктер — DASM Group", "Agencies — DASM Group"],
        "Кейсы и работы — DASM Group": ["Кейстер мен жұмыстар — DASM Group", "Cases & Works — DASM Group"],
        "Страны присутствия — DASM Group": ["Қатысу елдері — DASM Group", "Countries of Presence — DASM Group"],
        "Новости и инсайты — DASM Group": ["Жаңалықтар мен инсайттар — DASM Group", "News & Insights — DASM Group"],
        "Карьера и вакансии — DASM Group": ["Мансап және вакансиялар — DASM Group", "Careers & Vacancies — DASM Group"],
        "Контакты — DASM Group": ["Байланыс — DASM Group", "Contacts — DASM Group"],
        "Страница не найдена — DASM Group": ["Бет табылмады — DASM Group", "Page Not Found — DASM Group"],

        // ---------- Меню и шапка ----------
        "Главная": ["Басты бет", "Home"],
        "О холдинге": ["Холдинг туралы", "About"],
        "Агентства": ["Агенттіктер", "Agencies"],
        "Кейсы": ["Кейстер", "Cases"],
        "Страны": ["Елдер", "Countries"],
        "Новости": ["Жаңалықтар", "News"],
        "Карьера": ["Мансап", "Careers"],
        "Контакты": ["Байланыс", "Contacts"],
        "Меню": ["Мәзір", "Menu"],
        "Стать клиентом": ["Клиент болу", "Become a client"],
        "Стать клиентом →": ["Клиент болу →", "Become a client →"],
        "Переключить тему": ["Тақырыпты ауыстыру", "Toggle theme"],
        "Тема": ["Тақырып", "Theme"],

        // ---------- Плавающие объекты и Hero Bento ----------
        "Первое золото Казахстана": ["Қазақстанның алғашқы алтыны", "Kazakhstan's First Gold"],
        ">20% медиарынка": [">20% медиа нарығы", ">20% Media Market Share"],
        "Лидер региона с 1994 года": ["1994 жылдан бері өңір көшбасшысы", "Regional Leader Since 1994"],
        "Глобальная сеть в 8 странах": ["8 елдегі жаһандық желі", "Global Network in 8 Countries"],
        "Клиенты": ["Клиенттер", "Clients"],

        // ---------- Главная: Hero и Цифры ----------
        "Мы говорим": ["Біз айтамыз", "We say"],
        "да.": ["иә.", "yes."],
        "да росту.": ["өсуге иә.", "yes to growth."],
        "да идеям.": ["идеяларға иә.", "yes to ideas."],
        "да смелости.": ["батылдыққа иә.", "yes to boldness."],
        "Основано в 1994 · Алматы · 8 стран": ["1994 жылы құрылған · Алматы · 8 ел", "Founded in 1994 · Almaty · 8 countries"],
        "Рекламно-коммуникационная группа из Алматы: 15 специализированных агентств, креатив уровня Cannes Lions и медиа в 8 странах региона.": [
            "Алматыдан шыққан жарнама-коммуникациялық топ: 15 мамандандырылған агенттік, Cannes Lions деңгейіндегі креатив және өңірдің 8 еліндегі медиа.",
            "An advertising and communications group from Almaty: 15 specialized agencies, Cannes Lions-level creative and media across 8 countries."
        ],
        "Смотреть работы": ["Жұмыстарды көру", "View our work"],
        "Смотреть работы →": ["Жұмыстарды көру →", "View our work →"],
        "Год основания": ["Құрылған жылы", "Founded"],
        "Агентств": ["Агенттік", "Agencies"],
        "Стран": ["Ел", "Countries"],
        "Специалистов": ["Маман", "Specialists"],

        // ---------- Главная: Система DASM ----------
        "Система DASM": ["DASM жүйесі", "The DASM system"],
        "Рост бренда — это система": ["Бренд өсімі — бұл жүйе", "Brand growth is a system"],
        "Все агентства →": ["Барлық агенттіктер →", "All agencies →"],
        "Стратегия": ["Стратегия", "Strategy"],
        "Креатив": ["Креатив", "Creative"],
        "Медиа": ["Медиа", "Media"],
        "Результат": ["Нәтиже", "Results"],
        "01 · Стратегия": ["01 · Стратегия", "01 · Strategy"],
        "02 · Креатив": ["02 · Креатив", "02 · Creative"],
        "03 · Медиа": ["03 · Медиа", "03 · Media"],
        "04 · Digital": ["04 · Digital", "04 · Digital"],
        "05 · Результат": ["05 · Нәтиже", "05 · Results"],
        "Исследования, данные и медиастратегия: из бизнес-задачи бренда собираем единый план кампании.": [
            "Зерттеулер, деректер және медиастратегия: бренд міндетінен біртұтас науқан жоспарын жинаймыз.",
            "Research, data and media strategy: we turn a brand's business goal into a single campaign plan."
        ],
        "Идея, бренд-платформа и продакшн. Именно здесь родился первый Золотой Лев Казахстана (2024).": [
            "Идея, бренд-платформа және продакшн. Қазақстанның алғашқы Алтын Арыстаны (2024) дәл осында туды.",
            "Idea, brand platform and production. This is where Kazakhstan's first Golden Lion (2024) was born."
        ],
        "Баинг ТВ, наружной рекламы и digital: подбираем каналы под KPI и защищаем медиасплит.": [
            "ТВ, сыртқы жарнама және digital баингі: KPI-ға сай арналарды таңдап, медиасплитті қорғаймыз.",
            "TV, outdoor and digital buying: we select channels for your KPIs and defend the media split."
        ],
        "Programmatic, performance, SMM и работа с глобальными платформами — от лидогенерации до сквозной аналитики.": [
            "Programmatic, performance, SMM және жаһандық платформалармен жұмыс — лидогенерациядан бастап толық аналитикаға дейін.",
            "Programmatic, performance, SMM and global platforms — from lead generation to end-to-end analytics."
        ],
        "Аналитика, PR и активации: измеряем эффективность, строим репутацию и доводим кампанию до людей.": [
            "Аналитика, PR және активациялар: тиімділікті өлшейміз, беделді құрамыз және науқанды адамдарға жеткіземіз.",
            "Analytics, PR and activations: we measure effectiveness, build reputation and bring the campaign to people."
        ],

        // ---------- Главная: Главный кейс ----------
        "Портфолио": ["Портфолио", "Portfolio"],
        "Первое золото Cannes Lions в истории Казахстана": [
            "Қазақстан тарихындағы алғашқы Cannes Lions алтыны",
            "Kazakhstan's first Cannes Lions gold"
        ],
        "В 2024 году GForce Grey выиграл Золотого Льва в категории Social & Influencer. Совместный проект с Ruh Fighting Championship — первые в стране бои «мужчины против женщин» в прямом эфире — заставил мужчин заговорить о бытовом насилии.": [
            "2024 жылы GForce Grey Social & Influencer санатында Алтын Арыстан жеңіп алды. Ruh Fighting Championship-пен бірлескен жоба — елдегі тұңғыш «ерлер әйелдерге қарсы» тікелей эфирдегі жекпе-жектер — ерлерді тұрмыстық зорлық туралы сөйлеуге мәжбүр етті.",
            "In 2024 GForce Grey won a Golden Lion in Social & Influencer. The joint project with Ruh Fighting Championship — the country's first men-versus-women bouts broadcast live — got men talking about domestic violence."
        ],
        "Проекта в категории": ["Санаттағы жоба", "Entries in category"],
        "Вовлечённых — мужчины": ["Қатысқандар — ерлер", "Male engagement"],
        "Все кейсы →": ["Барлық кейстер →", "All cases →"],
        "Финтех": ["Финтех", "Fintech"],
        "Kaspi Жұма и SuperApp": ["Kaspi Жұма және SuperApp", "Kaspi Zhuma & SuperApp"],
        "FMCG & Telecom на 5 стран": ["5 елге FMCG & Telecom", "FMCG & Telecom across 5 countries"],

        // ---------- Главная и О холдинге: Доверие и Клиенты ----------
        "Доверие": ["Сенім", "Trust"],
        "Бренды, которые остаются с нами годами": [
            "Бізбен жылдар бойы бірге болатын брендтер",
            "Brands that stay with us for years"
        ],
        "Обсудить проект →": ["Жобаны талқылау →", "Discuss a project →"],
        "Kaspi.kz, Technodom и Berlin-Chemie работают с группой больше 20 лет (по интервью DASM для Forbes.kz).": [
            "Kaspi.kz, Technodom және Berlin-Chemie топпен 20 жылдан астам жұмыс істейді (DASM-ның Forbes.kz-ке берген сұхбаты бойынша).",
            "Kaspi.kz, Technodom and Berlin-Chemie have worked with the group for over 20 years (per DASM's interview with Forbes.kz)."
        ],
        "20+ лет вместе": ["20+ жыл бірге", "20+ years together"],
        "Среди других клиентов GForce Grey (по данным AdForum):": [
            "GForce Grey-дің басқа клиенттері (AdForum деректері бойынша):",
            "Other GForce Grey clients (per AdForum):"
        ],
        "Индустриальный охват": ["Индустриялық қамту", "Industry coverage"],
        "Активных клиентов": ["Белсенді клиент", "Active clients"],
        "Контрактов 5+ лет": ["5+ жылдық келісімшарттар", "5+ year contracts"],
        "Стандарты партнёрства": ["Серіктестік стандарттары", "Partnership standards"],
        "20+ лет": ["20+ жыл", "20+ years"],
        "Средний срок ключевых клиентов": ["Негізгі клиенттердің орташа мерзімі", "Average tenure of key clients"],
        "Синергия медиа и креатива": ["Медиа мен креатив синергиясы", "Media & creative synergy"],
        "Прозрачная отчётность по международным стандартам WPP, регулярный независимый медиа-аудит и защита KPI каждого тенге рекламного бюджета.": [
            "WPP халықаралық стандарттары бойынша ашық есептілік, тұрақты тәуелсіз медиа-аудит және жарнама бюджетінің әрбір теңгесінің KPI қорғалуы.",
            "Transparent reporting to WPP global standards, regular independent media audits and KPI protection for every unit of ad spend."
        ],

        // ---------- Главная: География ----------
        "География": ["География", "Geography"],
        "8 стран. Один стандарт качества.": ["8 ел. Бір сапа стандарты.", "8 countries. One quality standard."],
        "Все страны →": ["Барлық елдер →", "All countries →"],
        "Казахстан": ["Қазақстан", "Kazakhstan"],
        "Узбекистан": ["Өзбекстан", "Uzbekistan"],
        "Кыргызстан": ["Қырғызстан", "Kyrgyzstan"],
        "Таджикистан": ["Тәжікстан", "Tajikistan"],
        "Армения": ["Армения", "Armenia"],
        "Грузия": ["Грузия", "Georgia"],
        "Азербайджан": ["Әзірбайжан", "Azerbaijan"],
        "Монголия": ["Моңғолия", "Mongolia"],
        "Алматы и Астана": ["Алматы мен Астана", "Almaty & Astana"],
        "Full 360° Hub · с 1994 года": ["Full 360° Hub · 1994 жылдан бері", "Full 360° Hub · since 1994"],
        "Ташкент": ["Ташкент", "Tashkent"],
        "Бишкек": ["Бішкек", "Bishkek"],
        "Душанбе": ["Душанбе", "Dushanbe"],
        "Ереван": ["Ереван", "Yerevan"],
        "Тбилиси": ["Тбилиси", "Tbilisi"],
        "Баку": ["Баку", "Baku"],
        "Улан-Батор": ["Ұлан-Батыр", "Ulaanbaatar"],
        "Full Media · с 2010 года": ["Full Media · 2010 жылдан бері", "Full Media · since 2010"],

        // ---------- О холдинге (about.html) ----------
        "История и ДНК": ["Тарих және ДНК", "History and DNA"],
        "Более 30 лет мы формируем рекламную индустрию": [
            "30 жылдан астам уақыт бойы біз жарнама индустриясын қалыптастырамыз",
            "For over 30 years we have been shaping the advertising industry"
        ],
        "Центральной Азии": ["Орталық Азияның", "of Central Asia"],
        "Основанная в 1994 году в Алматы, сегодня DASM Group — это экосистема из 15 агентств, контролирующая более 20% медиарынка региона и работающая с 150+ международными и локальными брендами.": [
            "1994 жылы Алматыда құрылған DASM Group бүгін — аймақ медиа нарығының 20%-дан астамын қамтитын және 150+ халықаралық және жергілікті брендпен жұмыс істейтін 15 агенттіктен тұратын экожүйе.",
            "Founded in Almaty in 1994, DASM Group today is an ecosystem of 15 agencies covering over 20% of the regional media market and working with 150+ international and local brands."
        ],
        "С 1994 года": ["1994 жылдан бері", "Since 1994"],
        "30+ лет лидерства в регионе": ["Өңірдегі 30+ жыл көшбасшылық", "30+ years of regional leadership"],
        "GroupM · Grey · глобальная сеть": ["GroupM · Grey · жаһандық желі", "GroupM · Grey · global network"],
        ">20% доля": [">20% үлес", ">20% share"],
        "Медиарынка Казахстана и ЦА": ["Қазақстан мен ОА медиа нарығы", "Of Kazakhstan & CA media market"],
        "370+ наград": ["370+ марапат", "370+ awards"],
        "Включая Gold Lion в Каннах": ["Канндағы Gold Lion қоса алғанда", "Including Cannes Gold Lion"],
        "Глобальная интеграция": ["Жаһандық интеграция", "Global integration"],
        "Партнёрство с WPP": ["WPP-мен серіктестік", "WPP Partnership"],
        "В структуру холдинга входят агентства глобальной сети WPP (GroupM: Mindshare, Wavemaker, EssenceMediacom, а также креативные сети Grey). Это даёт клиентам доступ к мировым инструментам, исследованиям и стандартам.": [
            "Холдинг құрылымына WPP жаһандық желісінің агенттіктері кіреді (GroupM: Mindshare, Wavemaker, EssenceMediacom, сондай-ақ Grey креативті желілері). Бұл клиенттерге әлемдік құралдарға, зерттеулерге және стандарттарға қол жеткізуге мүмкіндік береді.",
            "The holding includes agencies of the global WPP network (GroupM: Mindshare, Wavemaker, EssenceMediacom, as well as Grey creative networks), giving clients access to global tools, research and standards."
        ],
        "Философия": ["Философия", "Philosophy"],
        "Мы не разделяем креатив и эффективность. Агентства DASM одновременно лидируют в рейтингах креативности (AdAsia) и эффективности (E+ Central Asia / Effie).": [
            "Біз креатив пен тиімділікті бөлмейміз. DASM агенттіктері креативтілік (AdAsia) және тиімділік (E+ Central Asia / Effie) рейтингтерінде қатар көш бастап тұр.",
            "We never separate creativity from effectiveness. DASM agencies simultaneously lead in creativity rankings (AdAsia) and effectiveness rankings (E+ Central Asia / Effie)."
        ],
        "Путь": ["Жол", "Our path"],
        "Ключевые вехи DASM Group": ["DASM Group-тың негізгі кезеңдері", "Key milestones of DASM Group"],
        "Начало работы в Алматы": ["Алматыда жұмыстың басталуы", "Launch in Almaty"],
        "DASM начинает работу на рекламном рынке Казахстана. Позже из отдела медиа вырастает компания DAS Marketing — сокращённо DASM.": [
            "DASM Қазақстанның жарнама нарығында жұмысын бастайды. Кейінірек медиа бөлімінен DAS Marketing компаниясы — қысқаша DASM өсіп шығады.",
            "DASM begins operating in Kazakhstan's advertising market. Later, the media department grows into DAS Marketing — abbreviated as DASM."
        ],
        "Выход в Центральную Азию": ["Орталық Азияға шығу", "Expansion into Central Asia"],
        "Группа начинает работать в странах региона за пределами Казахстана.": [
            "Топ Қазақстаннан тыс өңір елдерінде жұмыс істей бастайды.",
            "The group begins operating across the region beyond Kazakhstan."
        ],
        "Партнёрство с WPP и рождение GForce Grey": [
            "WPP-мен серіктестік және GForce Grey-дің құрылуы",
            "WPP partnership and birth of GForce Grey"
        ],
        "DASM становится официальным партнёром WPP, а креативное агентство GForce Grey начинает работу в составе холдинга.": [
            "DASM WPP-дің ресми серіктесі атанады, ал GForce Grey креативті агенттігі холдинг құрамында жұмысын бастайды.",
            "DASM becomes an official WPP partner, and creative agency GForce Grey launches within the holding."
        ],
        "Офис в Монголии": ["Моңғолиядағы кеңсе", "Office in Mongolia"],
        "Открывается DASMNG — седьмое представительство группы за пределами Казахстана. Официальный старт работы — 1 декабря.": [
            "DASMNG ашылады — Қазақстаннан тыс топтың жетінші өкілдігі. Ресми іске қосылуы — 1 желтоқсан.",
            "DASMNG opens as the group's seventh office outside Kazakhstan, officially launching on December 1."
        ],
        "Первый фестиваль эффективности E+ Central Asia": [
            "Алғашқы E+ Central Asia тиімділік фестивалі",
            "First E+ Central Asia effectiveness festival"
        ],
        "GForce получает Grand Prix и «Агентство года», а также занимает 1-е место в рейтинге эффективности агентств региона.": [
            "GForce Grand Prix және «Жыл агенттігі» атағын алады, сондай-ақ өңір агенттіктерінің тиімділік рейтингінде 1-орынға ие болады.",
            "GForce wins the Grand Prix and Agency of the Year, ranking #1 in regional agency effectiveness."
        ],
        "Первый Золотой Лев Казахстана": [
            "Қазақстанның алғашқы Алтын Арыстаны",
            "Kazakhstan's First Golden Lion"
        ],
        "GForce Grey выигрывает золото Cannes Lions в категории Social & Influencer за кампанию против бытового насилия. В этом же году DASM отмечает 30-летие.": [
            "GForce Grey тұрмыстық зорлық-зомбылыққа қарсы науқаны үшін Social & Influencer санатында Cannes Lions алтынын жеңіп алды. Сол жылы DASM 30 жылдығын атап өтеді.",
            "GForce Grey wins Cannes Lions Gold in Social & Influencer for its campaign against domestic violence, as DASM celebrates its 30th anniversary."
        ],
        "Снова в Каннах": ["Қайтадан Каннда", "Back at Cannes"],
        "GForce возвращается с наградами Cannes Lions — это уже вторая большая победа агентства на фестивале.": [
            "GForce Cannes Lions марапаттарымен оралады — бұл агенттіктің фестивальдегі екінші үлкен жеңісі.",
            "GForce returns with Cannes Lions awards — marking the agency's second major triumph at the festival."
        ],
        "Источники: Forbes.kz, Astana Times, Kursiv, AdForum, страница работодателя DASM Group на hh.kz.": [
            "Дереккөздер: Forbes.kz, Astana Times, Kursiv, AdForum, hh.kz сайтындағы DASM Group жұмыс беруші беті.",
            "Sources: Forbes.kz, Astana Times, Kursiv, AdForum, DASM Group employer page on hh.kz."
        ],
        "ДНК Холдинга": ["Холдинг ДНК-сы", "Holding DNA"],
        "От локального пионера до региональной империи": [
            "Жергілікті ізашардан өңірлік империяға дейін",
            "From local pioneer to regional powerhouse"
        ],
        "Более трёх десятилетий мы строим инфраструктуру рекламного рынка: от первых телевизионных баинговых сделок до эконометрики, AI-моделирования и побед в Каннах.": [
            "Үш онжылдықтан астам уақыт бойы біз жарнама нарығының инфрақұрылымын құрып келеміз: алғашқы телевизиялық баинг мәмілелерінен эконометрикаға, AI-модельдеуге және Канндағы жеңістерге дейін.",
            "For over three decades we have built the region's advertising infrastructure: from early TV buying deals to econometrics, AI modeling and wins at Cannes."
        ],
        "Реализованных кампаний": ["Іске асқан науқан", "Completed campaigns"],
        "Профессионалов в штате": ["Штаттағы мамандар", "In-house professionals"],
        "Профильных агентств": ["Бейінді агенттік", "Specialized agencies"],
        "8 стран": ["8 ел", "8 countries"],
        "Единая сеть офисов": ["Кеңселердің бірыңғай желісі", "Unified office network"],
        "Люди": ["Адамдар", "People"],
        "Креативное лидерство": ["Креативті көшбасшылық", "Creative leadership"],
        "ЕК": ["ЕК", "YK"],
        "ЮТ": ["ЮТ", "YT"],
        "Евгений Костылев": ["Евгений Костылев", "Yevgeniy Kostylev"],
        "Самый награждаемый креативный директор Казахстана и Центральной Азии: более 370 наград с 18 международных фестивалей (по данным его профиля на AdForum).": [
            "Қазақстан мен Орталық Азиядағы ең көп марапатталған креативті директор: 18 халықаралық фестивальден 370-тен астам марапат (AdForum профилінің деректері бойынша).",
            "The most awarded creative director in Kazakhstan and Central Asia: over 370 awards from 18 international festivals (per AdForum)."
        ],
        "Юлия Тушина": ["Юлия Тушина", "Yuliya Tushina"],
        "17 лет в рекламной индустрии. Под её руководством агентство получило более 300 наград, включая первое в истории Казахстана золото Cannes Lions.": [
            "Жарнама индустриясында 17 жыл. Оның басшылығымен агенттік 300-ден астам марапатқа, соның ішінде Қазақстан тарихындағы алғашқы Cannes Lions алтынына ие болды.",
            "17 years in the advertising industry. Under her leadership the agency has won over 300 awards, including Kazakhstan's first Cannes Lions Gold."
        ],
        "Признание": ["Мойындау", "Recognition"],
        "Награды и рейтинги": ["Марапаттар мен рейтингтер", "Awards and rankings"],
        "Первое золото в истории Казахстана (2024) и новые награды в 2025 году.": [
            "Қазақстан тарихындағы алғашқы алтын (2024) және 2025 жылғы жаңа марапаттар.",
            "The first Gold in Kazakhstan's history (2024) and new Lions in 2025."
        ],
        "Grand Prix и «Агентство года» на первом фестивале эффективности (2023).": [
            "Алғашқы тиімділік фестивалінде Grand Prix және «Жыл агенттігі» (2023).",
            "Grand Prix and Agency of the Year at the inaugural effectiveness festival (2023)."
        ],
        "№1 по эффективности": ["Тиімділік бойынша №1", "#1 in Effectiveness"],
        "GForce — 1-е место в рейтинге эффективности агентств региона за 2023 год, в 2024-м — в топ-3.": [
            "GForce — 2023 жылы өңір агенттіктерінің тиімділік рейтингінде 1-орын, 2024 жылы — топ-3 қатарында.",
            "GForce ranked #1 in regional agency effectiveness in 2023 and top-3 in 2024."
        ],
        "221 награда": ["221 марапат", "221 awards"],
        "GForce Grey — самое награждаемое агентство региона: 221 награда на 13 фестивалях (Forbes.kz, 2022).": [
            "GForce Grey — өңірдегі ең көп марапатталған агенттік: 13 фестивальде 221 марапат (Forbes.kz, 2022).",
            "GForce Grey is the region's most awarded agency: 221 awards across 13 festivals (Forbes.kz, 2022)."
        ],
        "Партнёрство": ["Серіктестік", "Partnership"],
        "Давайте создадим следующую историю успеха вместе": [
            "Келесі табыс тарихын бірге жасайық",
            "Let's create the next success story together"
        ],
        "Оставьте контакты — мы подготовим индивидуальное предложение.": [
            "Байланыс деректерін қалдырыңыз — біз жеке ұсыныс дайындаймыз.",
            "Leave your contact details and we will prepare a tailored proposal."
        ],

        // ---------- Агентства (agencies.html) ----------
        "Структура группы": ["Топ құрылымы", "Group structure"],
        "15 специализированных агентств": ["15 мамандандырылған агенттік", "15 specialized agencies"],
        "в единой экосистеме": ["бір экожүйеде", "in one ecosystem"],
        "Каждое агентство обладает глубокой профильной специализацией — от глобального медиабаинга и стратегии до креатива, digital-перформанса, PR и трейд-маркетинга.": [
            "Әр агенттіктің терең бейінді мамандануы бар — жаһандық медиабаинг пен стратегиядан бастап креатив, digital-перформанс, PR және трейд-маркетингке дейін.",
            "Each agency has deep specialization — from global media buying and strategy to creative, digital performance, PR and trade marketing."
        ],
        "Креатив 360°": ["Креатив 360°", "Creative 360°"],
        "GForce Grey · Брендинг": ["GForce Grey · Брендинг", "GForce Grey · Branding"],
        "Все": ["Барлығы", "All"],
        "Самое награждаемое креативное агентство Центральной Азии, основано в 2006 году. Первое в истории Казахстана Золото Cannes Lions (2024) и Grand Prix E+ Central Asia (2023).": [
            "Орталық Азиядағы ең көп марапатталған креативті агенттік, 2006 жылы құрылған. Қазақстан тарихындағы алғашқы Cannes Lions Алтыны (2024) және E+ Central Asia Grand Prix (2023) иегері.",
            "The most awarded creative agency in Central Asia, founded in 2006. Winner of Kazakhstan's first Cannes Lions Gold (2024) and E+ Central Asia Grand Prix (2023)."
        ],
        "Креатив 360": ["Креатив 360", "Creative 360"],
        "Брендинг": ["Брендинг", "Branding"],
        "Глобальное медийное агентство, фокусирующееся на росте брендов через адаптивное медиапланирование и глубокую аналитику данных.": [
            "Бейімделгіш медиажоспарлау және деректерді терең талдау арқылы брендтердің өсуіне бағытталған жаһандық медиа агенттік.",
            "A global media agency focused on brand growth through adaptive media planning and deep data analytics."
        ],
        "Агентство, объединяющее медиа, контент и технологии. Использует исследования потребительского пути для максимизации ROI.": [
            "Медиа, контент және технологияларды біріктіретін агенттік. ROI-ді барынша арттыру үшін тұтынушы жолын зерттеуді қолданады.",
            "An agency uniting media, content and technology, using consumer journey research to maximize ROI."
        ],
        "Синтез digital-ДНК Essence и системной экспертизы MediaCom. Создаёт прорывные коммуникационные системы.": [
            "Essence digital-ДНК-сы мен MediaCom жүйелік сараптамасының синтезі. Серпінді коммуникациялық жүйелерді жасайды.",
            "A synthesis of Essence's digital DNA and MediaCom's systems expertise, building breakthrough communication systems."
        ],
        "Синергия исследований, медиастратегии, Digital, ТВ и наружной рекламы. Более 1500 реализованных кейсов.": [
            "Зерттеулер, медиастратегия, Digital, ТВ және сыртқы жарнама синергиясы. 1500-ден астам іске асқан кейс.",
            "Synergy of research, media strategy, Digital, TV and outdoor advertising, with over 1,500 completed cases."
        ],
        "Programmatic-закупки, лидогенерация, SEO/ASO, сквозная аналитика и работа с Meta, Google, TikTok, YouTube.": [
            "Programmatic-сатып алулар, лидогенерация, SEO/ASO, толық аналитика және Meta, Google, TikTok, YouTube платформаларымен жұмыс.",
            "Programmatic buying, lead generation, SEO/ASO, end-to-end analytics and campaigns across Meta, Google, TikTok and YouTube."
        ],
        "Управление присутствием брендов в соцсетях, спецпроекты с топ-блогерами и лидерами мнений на локальных языках.": [
            "Әлеуметтік желілерде брендтердің қатысуын басқару, жергілікті тілдерде топ-блогерлермен және пікір көшбасшыларымен арнайы жобалар.",
            "Social media brand management, special projects with top creators and key opinion leaders in local languages."
        ],
        "Управление корпоративной репутацией, связи со СМИ, ESG-коммуникации и антикризисный менеджмент.": [
            "Корпоративтік беделді басқару, БАҚ-пен байланыс, ESG-коммуникациялар және дағдарысқа қарсы менеджмент.",
            "Corporate reputation management, media relations, ESG communications and crisis management."
        ],
        "Интегрированные маркетинговые коммуникации, трейд-маркетинг, масштабные бренд-активации и события.": [
            "Біріктірілген маркетингтік коммуникациялар, трейд-маркетинг, ауқымды бренд-активациялар мен іс-шаралар.",
            "Integrated marketing communications, trade marketing, large-scale brand activations and events."
        ],
        "Быстрый подбор": ["Жылдам таңдау", "Quick match"],
        "Какое агентство вам подойдёт?": ["Қай агенттік сізге сәйкес келеді?", "Which agency is right for you?"],
        "Ответьте на три вопроса — подскажем, с кого начать.": [
            "Үш сұраққа жауап беріңіз — қайдан бастау керектігін айтамыз.",
            "Answer three questions and we will suggest where to start."
        ],
        "Вопрос": ["Сұрақ", "Question"],
        "Какая задача сейчас главная?": ["Қазір басты міндет қандай?", "What is your main goal right now?"],
        "Придумать идею и бренд": ["Идея мен бренд ойлап табу", "Create an idea and a brand"],
        "Купить медиа и охват (ТВ, наружка)": ["Медиа және қамту сатып алу (ТВ, сыртқы жарнама)", "Buy media and reach (TV, outdoor)"],
        "Привлекать клиентов в digital": ["Digital арқылы клиент тарту", "Attract customers through digital"],
        "Выстроить репутацию и PR": ["Бедел мен PR құру", "Build reputation and PR"],
        "Запустить акцию или событие": ["Акция немесе іс-шара өткізу", "Run a promotion or an event"],
        "Где нужен результат?": ["Нәтиже қайда қажет?", "Where do you need results?"],
        "Только Казахстан": ["Тек Қазақстан", "Kazakhstan only"],
        "Несколько стран Центральной Азии": ["Орталық Азияның бірнеше елі", "Several Central Asian countries"],
        "Центральная Азия, Кавказ и Монголия": ["Орталық Азия, Кавказ және Моңғолия", "Central Asia, the Caucasus and Mongolia"],
        "Что важнее всего?": ["Сізге не маңыздырақ?", "What matters most?"],
        "Громкая идея и награды": ["Жарқын идея және марапаттар", "A bold idea and awards"],
        "Измеримая эффективность (ROI)": ["Өлшенетін тиімділік (ROI)", "Measurable effectiveness (ROI)"],
        "Максимальный охват и узнаваемость": ["Максималды қамту және танымалдық", "Maximum reach and awareness"],
        "Вам подойдёт": ["Сізге сәйкес келеді", "Your best match"],
        "Пройти заново": ["Қайта өту", "Start over"],
        "Интересует:": ["Қызықтырады:", "Interested in:"],
        "Самое награждаемое креативное агентство Центральной Азии, обладатель первого Золотого Каннского Льва Казахстана.": [
            "Орталық Азиядағы ең көп марапатталған креативті агенттік, Қазақстанның алғашқы Алтын Канн Арыстанының иегері.",
            "The most awarded creative agency in Central Asia and winner of Kazakhstan's first Cannes Gold Lion."
        ],
        "Адаптивное медиапланирование и глубокая аналитика данных для роста бренда.": [
            "Бренд өсімі үшін бейімделгіш медиажоспарлау және деректерді терең талдау.",
            "Adaptive media planning and deep data analytics for brand growth."
        ],
        "Медиа, контент и технологии: исследования потребительского пути для максимального ROI.": [
            "Медиа, контент және технологиялар: максималды ROI үшін тұтынушы жолын зерттеу.",
            "Media, content and technology: consumer journey research for maximum ROI."
        ],
        "Digital-экспертиза и омниканальные коммуникационные системы.": [
            "Digital-сараптама және омниканалды коммуникациялық жүйелер.",
            "Digital expertise and omnichannel communication systems."
        ],
        "Programmatic, лидогенерация, SEO/ASO и сквозная аналитика.": [
            "Programmatic, лидогенерация, SEO/ASO және толық аналитика.",
            "Programmatic, lead generation, SEO/ASO and end-to-end analytics."
        ],
        "Управление репутацией, связи со СМИ, ESG-коммуникации и антикризисный менеджмент.": [
            "Беделді басқару, БАҚ-пен байланыс, ESG-коммуникациялар және дағдарысқа қарсы менеджмент.",
            "Reputation management, media relations, ESG communications and crisis management."
        ],
        "BTL, трейд-маркетинг, бренд-активации и события.": [
            "BTL, трейд-маркетинг, бренд-активациялар және іс-шаралар.",
            "BTL, trade marketing, brand activations and events."
        ],
        "Для одной страны хватит одного агентства — начните с него.": [
            "Бір ел үшін бір агенттік жеткілікті — содан бастаңыз.",
            "For a single country one agency is enough — start with it."
        ],
        "Для нескольких стран подключите DASMART: он координирует кампании в одном окне.": [
            "Бірнеше ел үшін DASMART-ты қосыңыз: ол науқандарды бір терезеде үйлестіреді.",
            "For several countries add DASMART: it coordinates campaigns in one place."
        ],
        "Для запуска в нескольких регионах подключим DASMART и региональные офисы группы.": [
            "Бірнеше өңірде іске қосу үшін DASMART пен топтың өңірлік кеңселерін қосамыз.",
            "For a multi-region launch we will bring in DASMART and the group's regional offices."
        ],
        "Как мы работаем": ["Біз қалай жұмыс істейміз", "How we work"],
        "Единое окно для сложных задач": ["Күрделі міндеттерге арналған бірыңғай терезе", "Single window for complex tasks"],
        "Если ваша задача требует сразу креатива, ТВ-баинга, performance и PR в нескольких странах, мы собираем кросс-агентскую команду с единым аккаунт-директором.": [
            "Егер сіздің міндетіңіз бірнеше елде бірден креативті, ТВ-баингті, performance пен PR-ды талап етсе, біз бірыңғай аккаунт-директоры бар кросс-агенттік команданы жинаймыз.",
            "If your brief requires creative, TV buying, performance and PR across multiple countries, we assemble a cross-agency team led by a single account director."
        ],
        "Аудит брифа и выбор профильных команд": ["Бриф аудиті және бейінді командаларды таңдау", "Brief audit & specialist team selection"],
        "Единая медиа- и креативная стратегия": ["Бірыңғай медиа және креативті стратегия", "Unified media & creative strategy"],
        "Прозрачный дашборд KPI по всем странам": ["Барлық елдер бойынша ашық KPI дашборды", "Transparent KPI dashboard across all countries"],
        "Подбор команды": ["Команда таңдау", "Team selection"],
        "Не знаете, какое агентство подойдёт?": ["Қай агенттік сәйкес келетінін білмейсіз бе?", "Not sure which agency fits best?"],
        "Оставьте заявку — мы соберём кастомную команду под ваш KPI.": [
            "Өтінім қалдырыңыз — сіздің KPI-ға сай арнайы команда жинаймыз.",
            "Leave a request and we will build a custom team for your KPIs."
        ],
        "Какое направление интересует?": ["Қай бағыт қызықтырады?", "Which area are you interested in?"],

        // ---------- Кейсы (works.html) ----------
        "Доказанная эффективность": ["Дәлелденген тиімділік", "Proven effectiveness"],
        "Кейсы, которые выигрывают": ["Жеңетін кейстер", "Cases that win"],
        "рынки и фестивали": ["нарықтар мен фестивальдар", "markets and festivals"],
        "Более 1500 успешных кампаний в финансовом секторе, FMCG, телекоме, e-commerce и социально значимых инициативах.": [
            "Қаржы секторында, FMCG, телекомда, e-commerce-те және әлеуметтік маңызды бастамаларда 1500-ден астам сәтті науқан.",
            "Over 1,500 successful campaigns in finance, FMCG, telecom, e-commerce and socially important initiatives."
        ],
        "Успешных кампаний": ["Сәтті науқан", "Successful campaigns"],
        "Награды": ["Марапаттар", "Awards"],
        "Соцпроекты": ["Әлеуметтік жобалар", "Social projects"],
        "Первое в истории Казахстана Золото Cannes Lions (2024). Совместный проект с Ruh Fighting Championship: первые в стране бои «мужчины против женщин» в прямом эфире, чтобы мужчины заговорить о бытовом насилии. Анонсы боёв показывали на городских экранах Citix.": [
            "Қазақстан тарихындағы алғашқы Cannes Lions Алтыны (2024). Ruh Fighting Championship-пен бірлескен жоба: ерлер тұрмыстық зорлық-зомбылық туралы айтуы үшін тікелей эфирдегі елдегі алғашқы «ерлер әйелдерге қарсы» жекпе-жектер. Жекпе-жек анонстары Citix қалалық экрандарында көрсетілді.",
            "Kazakhstan's first-ever Cannes Lions Gold (2024). A joint project with Ruh Fighting Championship: the country's first live men-versus-women bouts designed to get men talking about domestic violence, promoted across Citix urban DOOH screens."
        ],
        "Синхронизация всей сети цифровых уличных экранов Citix с данными кризисных центров. Первое золото Центральной Азии на фестивале AdFest.": [
            "Citix цифрлық көше экрандарының бүкіл желісін дағдарыс орталықтарының деректерімен синхрондау. AdFest фестиваліндегі Орталық Азияның алғашқы алтыны.",
            "Synchronizing the entire Citix digital outdoor screen network with crisis center data. Central Asia's first Gold at AdFest."
        ],
        "Экранов DOOH": ["DOOH экран", "DOOH screens"],
        "Многолетнее стратегическое и креативное сопровождение главного финтех-бренда страны. Национальные кампании с рекордными показателями узнаваемости.": [
            "Елдің басты финтех-брендін көпжылдық стратегиялық және креативті сүйемелдеу. Танымалдықтың рекордтық көрсеткіштері бар ұлттық науқандар.",
            "Multi-year strategic and creative partnership with the country's leading fintech brand, delivering national campaigns with record awareness."
        ],
        "4 раза": ["4 рет", "4×"],
        "Клиент года": ["Жыл клиенті", "Client of the Year"],
        "Масштабирование FMCG & Telecom на 5 стран": [
            "FMCG & Telecom-ды 5 елге масштабтау",
            "Scaling FMCG & Telecom across 5 countries"
        ],
        "Единая медиа- и digital-стратегия для Казахстана, Узбекистана, Кыргызстана, Таджикистана и Армении. Снижение CPT на 27%.": [
            "Қазақстан, Өзбекстан, Қырғызстан, Тәжікстан және Армения үшін бірыңғай медиа және digital-стратегия. CPT-ді 27%-ға төмендету.",
            "Unified media and digital strategy across Kazakhstan, Uzbekistan, Kyrgyzstan, Tajikistan and Armenia, reducing CPT by 27%."
        ],
        "Органика": ["Органика", "Organic"],
        "5 стран": ["5 ел", "5 countries"],
        "Единый хаб": ["Бірыңғай хаб", "Single hub"],
        "Новый кейс": ["Жаңа кейс", "New case"],
        "Хотите, чтобы ваш бренд стал следующим громким кейсом?": [
            "Брендіңіз келесі жарқын кейс болғанын қалайсыз ба?",
            "Want your brand to become the next landmark case?"
        ],
        "Свяжитесь с нами для обсуждения маркетинговой или медийной задачи.": [
            "Маркетингтік немесе медиа міндетті талқылау үшін бізбен байланысыңыз.",
            "Contact us to discuss your marketing or media challenge."
        ],
        "Задача *": ["Міндет *", "Brief / Challenge *"],
        "Опишите бренд и цели...": ["Бренд пен мақсаттарды сипаттаңыз...", "Describe your brand and goals..."],

        // ---------- Страны (countries.html) ----------
        "Региональный масштаб": ["Өңірлік ауқым", "Regional scale"],
        "8 стран. 90+ миллионов потребителей.": ["8 ел. 90+ миллион тұтынушы.", "8 countries. 90+ million consumers."],
        "Единые стандарты качества.": ["Бірыңғай сапа стандарттары.", "Unified quality standards."],
        "Мы обеспечиваем бесшовный запуск и координацию кампаний в Центральной Азии, на Кавказе и в Монголии с глубоким пониманием локального культурного кода.": [
            "Біз Орталық Азияда, Кавказда және Моңғолияда жергілікті мәдени кодты терең түсіне отырып, науқандарды үздіксіз іске қосуды және үйлестіруді қамтамасыз етеміз.",
            "We ensure seamless launch and coordination of campaigns in Central Asia, the Caucasus and Mongolia with a deep understanding of the local cultural code."
        ],
        "90+ млн": ["90+ млн", "90M+"],
        "Потребителей в регионе": ["Өңірдегі тұтынушылар", "Consumers in the region"],
        "8 хабов": ["8 хаб", "8 hubs"],
        "Прямые офисы и партнёры": ["Тікелей кеңселер мен серіктестер", "Direct offices & partners"],
        "Единое окно": ["Бірыңғай терезе", "Single window"],
        "Координация через Алматы": ["Алматы арқылы үйлестіру", "Coordinated from Almaty"],
        "8 языков": ["8 тіл", "8 languages"],
        "Локальная адаптация креатива": ["Креативті жергілікті бейімдеу", "Local creative adaptation"],
        "Алматы — штаб-квартира": ["Алматы — бас кеңсе", "Almaty — headquarters"],
        "7 региональных офисов": ["7 өңірлік кеңсе", "7 regional offices"],
        "↻ Покрутите глобус мышью или выберите страну выше — 8 стран, один стандарт": [
            "↻ Глобусты тышқанмен бұраңыз немесе жоғарыдан елді таңдаңыз — 8 ел, бір стандарт",
            "↻ Drag the globe or select a country above — 8 countries, one standard"
        ],
        "Центральная Азия": ["Орталық Азия", "Central Asia"],
        "Кавказ": ["Кавказ", "Caucasus"],
        "🇰🇿 Казахстан": ["🇰🇿 Қазақстан", "🇰🇿 Kazakhstan"],
        "🇺🇿 Узбекистан": ["🇺🇿 Өзбекстан", "🇺🇿 Uzbekistan"],
        "🇰🇬 Кыргызстан": ["🇰🇬 Қырғызстан", "🇰🇬 Kyrgyzstan"],
        "🇹🇯 Таджикистан": ["🇹🇯 Тәжікстан", "🇹🇯 Tajikistan"],
        "🇦🇲 Армения": ["🇦🇲 Армения", "🇦🇲 Armenia"],
        "🇬🇪 Грузия": ["🇬🇪 Грузия", "🇬🇪 Georgia"],
        "🇦🇿 Азербайджан": ["🇦🇿 Әзірбайжан", "🇦🇿 Azerbaijan"],
        "🇲🇳 Монголия": ["🇲🇳 Моңғолия", "🇲🇳 Mongolia"],
        "Штаб-квартира · Алматы и Астана": ["Бас кеңсе · Алматы мен Астана", "Headquarters · Almaty & Astana"],
        "Ключевой хаб DASM Group с 1994 года. Более 20% доли медиарынка страны, полный спектр услуг и крупнейший пул международных клиентов.": [
            "1994 жылдан бері DASM Group-тың негізгі хабы. Елдің медиа нарығының 20%-дан астам үлесі, қызметтердің толық спектрі және халықаралық клиенттердің ең ірі пулы.",
            "DASM Group's flagship hub since 1994. Over 20% of the national media market, full-service capabilities and the largest international client portfolio."
        ],
        "20+ млн населения": ["20+ млн халық", "20M+ population"],
        "Самый динамичный потребительский рынок региона (37+ млн человек). Глубокая адаптация на узбекский язык, мощный ТВ-баинг и Telegram-экосистема.": [
            "Өңірдегі ең қарқынды тұтынушылық нарық (37+ млн адам). Өзбек тіліне терең бейімдеу, қуатты ТВ-баинг және Telegram-экожүйе.",
            "The region's most dynamic consumer market (37M+ people). Deep Uzbek language adaptation, powerful TV buying and Telegram ecosystem."
        ],
        "37+ млн": ["37+ млн", "37M+"],
        "Ведущие позиции в медиабаинге, наружной рекламе, digital-коммуникациях и BTL-активациях. Прямые контракты с крупнейшими селлерами страны.": [
            "Медиабаингте, сыртқы жарнамада, digital-коммуникацияларда және BTL-активацияларда жетекші позициялар. Елдің ірі селлерлерімен тікелей келісімшарттар.",
            "Leading positions in media buying, outdoor advertising, digital communications and BTL activations, with direct seller contracts."
        ],
        "Комплексное сопровождение международных брендов: закупка ТВ, радио и наружной рекламы, полевые исследования и промо-акции.": [
            "Халықаралық брендтерді кешенді сүйемелдеу: ТВ, радио және сыртқы жарнама сатып алу, далалық зерттеулер мен промо-акциялар.",
            "Full support for international brands: TV, radio and outdoor buying, field research and promotional activations."
        ],
        "Стратегическое медиапланирование, digital-кампании и креативная адаптация с соблюдением единых стандартов отчётности WPP / DASM.": [
            "WPP / DASM бірыңғай есептілік стандарттарын сақтай отырып, стратегиялық медиажоспарлау, digital-науқандар және креативті бейімдеу.",
            "Strategic media planning, digital campaigns and creative adaptation aligned with unified WPP / DASM reporting standards."
        ],
        "Координация кросс-региональных кампаний, продакшн-хаб, высокоразвитый digital и ТВ-рынок с прозрачной телеметрией.": [
            "Кросс-өңірлік науқандарды үйлестіру, продакшн-хаб, ашық телеметриясы бар жоғары дамыған digital және ТВ-нарық.",
            "Cross-regional campaign coordination, production hub, and a mature digital and TV market with transparent telemetry."
        ],
        "Работа с крупными международными рекламодателями: премиальный OOH/DOOH инвентарь, спонсорство и performance-маркетинг.": [
            "Ірі халықаралық жарнама берушілермен жұмыс: премиум OOH/DOOH инвентарь, демеушілік және performance-маркетинг.",
            "Serving major international advertisers with premium OOH/DOOH inventory, sponsorships and performance marketing."
        ],
        "Расширение географии для транснациональных корпораций: медиапланирование, исследования аудитории и интегрированные кампании.": [
            "Трансұлттық корпорациялар үшін географияны кеңейту: медиажоспарлау, аудиторияны зерттеу және біріктірілген науқандар.",
            "Geographic expansion for multinational corporations: media planning, audience research and integrated campaigns."
        ],
        "С 2010 года": ["2010 жылдан бері", "Since 2010"],
        "Международная экспансия": ["Халықаралық экспансия", "International expansion"],
        "Выводите бренд на новые рынки?": ["Брендті жаңа нарықтарға шығарасыз ба?", "Taking your brand to new markets?"],
        "Запросите обзор медиарынка по интересующим вас странам.": [
            "Қызықтыратын елдер бойынша медиа нарық шолуын сұраңыз.",
            "Request a media market overview for the countries you need."
        ],
        "Центральный хаб": ["Орталық хаб", "Central hub"],
        "Интересующие страны *": ["Қызықтыратын елдер *", "Countries of interest *"],
        "Например: Казахстан, Узбекистан...": ["Мысалы: Қазақстан, Өзбекстан...", "E.g. Kazakhstan, Uzbekistan..."],

        // ---------- Новости (news.html) ----------
        "Пресс-центр DASM": ["DASM баспасөз орталығы", "DASM press center"],
        "Новости холдинга,": ["Холдинг жаңалықтары,", "Holding news,"],
        "победы и аналитика рынка": ["жеңістер мен нарық талдауы", "wins and market analytics"],
        "Актуальные события из жизни 15 агентств DASM Group, кадровые назначения, обзоры медиарынка ЦАРА и репортажи с мировых фестивалей.": [
            "DASM Group-тың 15 агенттігінің өмірінен өзекті оқиғалар, кадрлық тағайындаулар, ОАА медиа нарығының шолулары және әлемдік фестивальдардан репортаждар.",
            "News from the 15 agencies of DASM Group, appointments, reviews of the Central Asian media market and reports from global festivals."
        ],
        "Пресс-релизы": ["Баспасөз релиздері", "Press releases"],
        "Официальные новости группы": ["Топтың ресми жаңалықтары", "Official group news"],
        "Обзоры ЦАРА": ["ОАЖҚ шолулары", "CARA market reviews"],
        "Тренды ТВ, OOH и Digital": ["ТВ, OOH және Digital трендтері", "TV, OOH & Digital trends"],
        "Спикеры DASM": ["DASM спикерлері", "DASM speakers"],
        "Хедлайнеры конференций": ["Конференция хедлайнерлері", "Conference headliners"],
        "Фестивали": ["Фестивальдар", "Festivals"],
        "Международные награды • Фестивали": ["Халықаралық марапаттар • Фестивальдар", "International Awards • Festivals"],
        "Агентство GForce Grey (DASM Group) завоевало первого в истории Казахстана Золотого Каннского Льва": [
            "GForce Grey агенттігі (DASM Group) Қазақстан тарихындағы алғашқы Алтын Канн Арыстанын жеңіп алды",
            "GForce Grey (DASM Group) Wins Kazakhstan's First-Ever Cannes Gold Lion"
        ],
        "На международном фестивале креативности Cannes Lions проект «The National Sport of Kazakhstan» удостоился высшей награды Gold Lion, укрепив статус DASM Group как креативного лидера региона.": [
            "Cannes Lions халықаралық креативтілік фестивалінде «The National Sport of Kazakhstan» жобасы Gold Lion жоғары марапатына ие болып, DASM Group-тың өңірдегі креативті көшбасшы мәртебесін нығайтты.",
            "At the Cannes Lions International Festival of Creativity, 'The National Sport of Kazakhstan' won a Gold Lion, cementing DASM Group's status as the region's creative leader."
        ],
        "Аналитика и Конференции • 2025/2026": ["Аналитика және Конференциялар • 2025/2026", "Analytics & Conferences • 2025/2026"],
        "Эксперты DASM Group выступили хедлайнерами рекламно-медийной конференции ADTribune": [
            "DASM Group сарапшылары ADTribune жарнама-медиа конференциясының хедлайнерлері болды",
            "DASM Group Experts Headline the ADTribune Advertising & Media Conference"
        ],
        "Топ-менеджеры медийных и digital-агентств холдинга представили прогнозы медиаинфляции, тренды Retail Media и сценарии развития ТВ и Digital рынков Центральной Азии.": [
            "Холдингтің медиа және digital-агенттіктерінің топ-менеджерлері медиаинфляция болжамдарын, Retail Media трендтерін және Орталық Азияның ТВ мен Digital нарықтарының даму сценарийлерін ұсынды.",
            "Senior executives from the holding's media and digital agencies presented media inflation forecasts, Retail Media trends and development scenarios for Central Asia's TV and Digital markets."
        ],
        "ЦАРА": ["ОАЖҚ", "CARA"],
        "Кадровые назначения • Корпоративное управление": ["Кадрлық тағайындаулар • Корпоративтік басқару", "Appointments • Corporate Governance"],
        "Усиление креативного и PR-лидерства в структуре холдинга DASM Group": [
            "DASM Group холдингі құрылымында креативті және PR-көшбасшылықты күшейту",
            "Strengthening Creative and PR Leadership Across DASM Group"
        ],
        "Евгений Костылев в роли Chief Creative Officer холдинга курирует развитие всех креативных агентств группы, а PR-департамент расширяет внешние и внутренние коммуникации в 8 странах присутствия.": [
            "Евгений Костылев холдингтің Chief Creative Officer рөлінде топтың барлық креативті агенттіктерінің дамуына жетекшілік етеді, ал PR-департамент 8 қатысу елінде сыртқы және ішкі коммуникацияларды кеңейтеді.",
            "As Chief Creative Officer of the holding, Yevgeniy Kostylev oversees creative development across all group agencies, while the PR department expands external and internal communications across 8 countries."
        ],
        "Фестивали • Азия": ["Фестивальдар • Азия", "Festivals • Asia"],
        "Первые награды Центральной Азии на AdFest: Золотой и Бронзовый Лотус за кейс Saltanat Light": [
            "AdFest фестиваліндегі Орталық Азияның алғашқы марапаттары: Saltanat Light кейсі үшін Алтын және Қола Лотус",
            "Central Asia's First AdFest Awards: Gold and Bronze Lotus for Saltanat Light"
        ],
        "Совместный проект с Citix получил признание жюри старейшего азиатско-тихоокеанского фестиваля AdFest и вошел в топ рейтинга стратегии и эффективности Spikes Asia.": [
            "Citix-пен бірлескен жоба Азия-Тынық мұхиты аймағындағы ең көне AdFest фестивалі қазылар алқасының мойындауына ие болып, Spikes Asia стратегия және тиімділік рейтингінің тобына енді.",
            "The joint project with Citix was honored by the jury of AdFest, Asia-Pacific's oldest festival, and ranked among the top campaigns for strategy and effectiveness at Spikes Asia."
        ],
        "Индустрия • Мероприятия": ["Индустрия • Іс-шаралар", "Industry • Events"],
        "DASM Group и GForce провели закрытый показ и разбор лучших рекламных роликов Super Bowl в Алматы": [
            "DASM Group пен GForce Алматыда Super Bowl үздік жарнама роликтерінің жабық көрсетілімі мен талдауын өткізді",
            "DASM Group and GForce Host Private Screening and Breakdown of the Best Super Bowl Commercials in Almaty"
        ],
        "Традиционная встреча клиентов, маркетологов и партнеров холдинга с профессиональным разбором мировых трендов сторителлинга и селебрити-маркетинга.": [
            "Әлемдік сторителлинг және селебрити-маркетинг трендтерін кәсіби талдаумен холдинг клиенттерінің, маркетологтарының және серіктестерінің дәстүрлі кездесуі.",
            "A traditional gathering of clients, marketers and partners featuring an expert breakdown of global storytelling and celebrity marketing trends."
        ],
        "Технологии • AI & Data": ["Технологиялар • AI & Data", "Technology • AI & Data"],
        "Внедрение AI-инструментов прогнозирования медиаэффективности в агентствах DASM": [
            "DASM агенттіктерінде медиа тиімділікті болжаудың AI-құралдарын енгізу",
            "Deploying AI Media Effectiveness Forecasting Tools Across DASM Agencies"
        ],
        "Агентства группы интегрировали новые алгоритмы эконометрического моделирования и оптимизации омниканальных рекламных бюджетов для клиентов в Казахстане и Узбекистане.": [
            "Топ агенттіктері Қазақстан мен Өзбекстандағы клиенттер үшін эконометрикалық модельдеудің және омниканалды жарнама бюджеттерін оңтайландырудың жаңа алгоритмдерін енгізді.",
            "Group agencies have integrated new econometric modeling and omnichannel budget optimization algorithms for clients in Kazakhstan and Uzbekistan."
        ],
        "Запрос для СМИ и клиентов": ["БАҚ пен клиенттерге сұраныс", "Media & client inquiries"],
        "Хотите пригласить спикера DASM или запустить проект?": [
            "DASM спикерін шақырғыңыз немесе жоба бастағыңыз келе ме?",
            "Want to invite a DASM speaker or launch a project?"
        ],
        "Свяжитесь с нашей пресс-службой или отделом нового бизнеса через форму обратной связи.": [
            "Кері байланыс формасы арқылы біздің баспасөз қызметімен немесе жаңа бизнес бөлімімен байланысыңыз.",
            "Contact our press office or new business team via the form."
        ],
        "Пресс-служба и Офис": ["Баспасөз қызметі және Кеңсе", "Press Office & HQ"],
        "Алматы, ул. Шамши Калдаякова, 34": ["Алматы, Шәмші Қалдаяқов к-сі, 34", "34 Shamshi Kaldayakov St., Almaty"],
        "Ваш вопрос или предложение...": ["Сіздің сұрағыңыз немесе ұсынысыңыз...", "Your question or proposal..."],
        "✓ Сообщение успешно отправлено!": ["✓ Хабарлама сәтті жіберілді!", "✓ Message sent successfully!"],

        // ---------- Карьера (career.html) ----------
        "Люди — наш главный актив": ["Адамдар — біздің басты активіміз", "People are our main asset"],
        "Создавай рекламу мирового уровня": ["Әлемдік деңгейдегі жарнама жаса", "Create world-class advertising"],
        "в команде 500+ профи": ["500+ маманнан тұратын командада", "in a team of 500+ professionals"],
        "Работа в DASM Group — это доступ к глобальным базам знаний WPP, работа с крупнейшими брендами планеты, поездки на международные фестивали и культура, где смелым идеям всегда говорят «DA».": [
            "DASM Group-та жұмыс — WPP жаһандық білім базаларына қолжетімділік, планетаның ірі брендтерімен жұмыс, халықаралық фестивальдарға сапарлар және батыл идеяларға әрқашан «DA» айтатын мәдениет.",
            "Working at DASM Group means access to WPP's global knowledge bases, the world's biggest brands, trips to international festivals and a culture that always says «DA» to bold ideas."
        ],
        "Глобальные базы знаний": ["Жаһандық білім базалары", "Global knowledge bases"],
        "Возможности релокации": ["Релокация мүмкіндіктері", "Relocation opportunities"],
        "Канны · Jolbors · Red Jolbors": ["Канн · Jolbors · Red Jolbors", "Cannes · Jolbors · Red Jolbors"],
        "500+ коллег": ["500+ әріптес", "500+ colleagues"],
        "Менторство от лидеров рынка": ["Нарық көшбасшыларынан тәлімгерлік", "Mentorship from industry leaders"],
        "Международное обучение": ["Халықаралық оқыту", "International training"],
        "Доступ к закрытым образовательным платформам GroupM / WPP, внутренним академиям медийного планирования, креативным воркшопам и менторству от обладателей Cannes Lions.": [
            "GroupM / WPP жабық білім беру платформаларына, ішкі медиажоспарлау академияларына, креативті воркшоптарға және Cannes Lions иегерлерінің тәлімгерлігіне қолжетімділік.",
            "Access to private GroupM / WPP learning platforms, internal media planning academies, creative workshops and mentorship from Cannes Lions winners."
        ],
        "Масштабные клиенты": ["Ауқымды клиенттер", "Major clients"],
        "Ты будешь работать с бюджетами и кампаниями национального и мультистранового масштаба (FinTech, FMCG, Telecom, Auto), которые видят миллионы людей каждый день.": [
            "Сен күн сайын миллиондаған адам көретін ұлттық және мульти-елдік ауқымдағы бюджеттермен және науқандармен (FinTech, FMCG, Telecom, Auto) жұмыс істейсің.",
            "You will work on national and multi-country budgets and campaigns (FinTech, FMCG, Telecom, Auto) seen by millions of people every day."
        ],
        "Карьерный трек в 8 странах": ["8 елдегі мансаптық трек", "Career track across 8 countries"],
        "Прозрачный грейдинг, возможность горизонтальных и вертикальных переходов между 15 агентствами группы и релокации в офисы холдинга по всему региону.": [
            "Ашық грейдинг, топтың 15 агенттігі арасында көлденең және тік ауысу мүмкіндігі және бүкіл өңір бойынша холдинг кеңселеріне релокация.",
            "Transparent grading, horizontal and vertical mobility across 15 group agencies, and relocation opportunities across regional offices."
        ],
        "Открытые позиции": ["Ашық позициялар", "Open positions"],
        "Кого мы ищем прямо сейчас": ["Біз қазір кімді іздейміз", "Who we are looking for right now"],
        "Поиск по вакансиям": ["Вакансиялар бойынша іздеу", "Search vacancies"],
        "Город": ["Қала", "City"],
        "Все города": ["Барлық қалалар", "All cities"],
        "Алматы": ["Алматы", "Almaty"],
        "Направление": ["Бағыт", "Department"],
        "Все направления": ["Барлық бағыттар", "All areas"],
        "Финансы": ["Қаржы", "Finance"],
        "Алматы • Креативное агентство (Full-time)": ["Алматы • Креативті агенттік (Full-time)", "Almaty • Creative Agency (Full-time)"],
        "Разработка креативных концепций 360°, сценариев для ТВ и Digital, участие в фестивальных проектах уровня Cannes Lions / Jolbors.": [
            "360° креативті концепцияларды, ТВ мен Digital үшін сценарийлерді әзірлеу, Cannes Lions / Jolbors деңгейіндегі фестивальдік жобаларға қатысу.",
            "Developing 360° creative concepts, TV and Digital scripts, and participating in Cannes Lions / Jolbors festival projects."
        ],
        "Алматы / Ташкент • Client Service (Full-time)": ["Алматы / Ташкент • Client Service (Full-time)", "Almaty / Tashkent • Client Service (Full-time)"],
        "Управление ключевым портфелем международных клиентов, лидирование кросс-агентских команд, контроль высокого уровня клиентского сервиса.": [
            "Халықаралық клиенттердің негізгі портфелін басқару, кросс-агенттік командаларға жетекшілік ету, клиенттік сервистің жоғары деңгейін бақылау.",
            "Managing a key portfolio of international clients, leading cross-agency teams and ensuring top-tier client service."
        ],
        "Алматы • Media & Digital (Full-time)": ["Алматы • Media & Digital (Full-time)", "Almaty • Media & Digital (Full-time)"],
        "Стратегическое и тактическое планирование digital-кампаний, защита медиасплитов перед клиентами, работа с аналитическими инструментами GroupM.": [
            "Digital-науқандарды стратегиялық және тактикалық жоспарлау, клиенттер алдында медиасплиттерді қорғау, GroupM аналитикалық құралдарымен жұмыс.",
            "Strategic and tactical digital campaign planning, defending media splits to clients and working with GroupM analytics tools."
        ],
        "Алматы • Корпоративный центр (Full-time)": ["Алматы • Корпоративтік орталық (Full-time)", "Almaty • Corporate Center (Full-time)"],
        "Финансовое планирование, бюджетирование проектов агентств группы, международная отчетность и контроль рентабельности контрактов.": [
            "Қаржылық жоспарлау, топ агенттіктерінің жобаларын бюджеттеу, халықаралық есептілік және келісімшарттардың рентабельділігін бақылау.",
            "Financial planning, project budgeting across group agencies, international reporting and contract profitability control."
        ],
        "Откликнуться →": ["Өтініш беру →", "Apply →"],
        "Ничего не нашли — попробуйте изменить фильтры.": ["Ештеңе табылмады — сүзгілерді өзгертіп көріңіз.", "Nothing found — try changing the filters."],
        "Все вакансии на hh.kz →": ["hh.kz сайтындағы барлық вакансиялар →", "All vacancies on hh.kz →"],
        "Частые вопросы": ["Жиі қойылатын сұрақтар", "FAQ"],
        "Как попасть в DASM": ["DASM-ға қалай түсуге болады", "How to join DASM"],
        "Нужен ли опыт работы?": ["Жұмыс тәжірибесі қажет пе?", "Is work experience required?"],
        "Зависит от позиции: в вакансиях группы на hh встречаются роли, где опыт не требуется, например Assistant Media Planning Manager.": [
            "Позицияға байланысты: топтың hh-дағы вакансияларында тәжірибе талап етілмейтін рөлдер бар, мысалы Assistant Media Planning Manager.",
            "It depends on the role: DASM's hh listings include entry-level positions with no experience required, such as Assistant Media Planning Manager."
        ],
        "Где смотреть актуальные вакансии?": ["Өзекті вакансияларды қайдан қарауға болады?", "Where can I see current vacancies?"],
        "Актуальный список ведётся на странице DASM Group на hh.kz — ссылка под списком вакансий.": [
            "Өзекті тізім hh.kz сайтындағы DASM Group бетінде жүргізіледі — сілтеме вакансиялар тізімінің астында.",
            "The up-to-date list is maintained on DASM Group's hh.kz page — see the link below the vacancy list."
        ],
        "Какой график работы?": ["Жұмыс кестесі қандай?", "What is the work schedule?"],
        "В опубликованных вакансиях указан график 5/2 с работой в офисе. Детали уточняйте у рекрутера.": [
            "Жарияланған вакансияларда кеңседегі 5/2 кестесі көрсетілген. Толығырақ рекрутерден сұраңыз.",
            "Published vacancies list a 5/2 office schedule. Confirm specifics with your recruiter."
        ],
        "Как откликнуться?": ["Қалай өтініш беруге болады?", "How do I apply?"],
        "Нажмите «Откликнуться» у вакансии и заполните форму внизу страницы: расскажите о себе и добавьте ссылку на резюме или портфолио.": [
            "Вакансияның жанындағы «Өтініш беру» батырмасын басып, беттің төменгі формасын толтырыңыз: өзіңіз туралы жазып, түйіндеме немесе портфолио сілтемесін қосыңыз.",
            "Click Apply next to a vacancy and fill in the form at the bottom: tell us about yourself and include a link to your CV or portfolio."
        ],
        "HR Департамент": ["HR Департаменті", "HR Department"],
        "Не нашли свою позицию в списке?": ["Тізімнен өз позицияңызды таппадыңыз ба?", "Didn't find your role in the list?"],
        "Мы всегда в поиске сильных стратегов, арт-директоров, медиапланеров и аккаунт-менеджеров. Пришлите портфолио или CV напрямую в наш HR-отдел.": [
            "Біз әрқашан мықты стратегтерді, арт-директорларды, медиапланерлерді және аккаунт-менеджерлерді іздейміз. Портфолио немесе CV-ді тікелей біздің HR-бөлімге жіберіңіз.",
            "We are always looking for talented strategists, art directors, media planners and account managers. Send your portfolio or CV directly to our HR team."
        ],
        "Отклик или Заявка": ["Өтініш немесе Өтінім", "Application or Inquiry"],
        "Хотите присоединиться к команде или стать нашим клиентом?": [
            "Командаға қосылғыңыз немесе біздің клиент болғыңыз келе ме?",
            "Want to join our team or become a client?"
        ],
        "Используйте универсальную форму справа — укажите ссылку на портфолио/резюме или опишите бизнес-задачу вашего бренда.": [
            "Оң жақтағы әмбебап форманы пайдаланыңыз — портфолио/түйіндеме сілтемесін көрсетіңіз немесе брендіңіздің бизнес-міндетін сипаттаңыз.",
            "Use the universal form on the right — share a link to your portfolio/CV or describe your brand's business challenge."
        ],
        "Офис DASM Group": ["DASM Group кеңсесі", "DASM Group Office"],
        "Алматы, ул. Шамши Калдаякова, 34 / ул. Айтеке би, 29": [
            "Алматы, Шәмші Қалдаяқов к-сі, 34 / Әйтеке би к-сі, 29",
            "Almaty, 34 Shamshi Kaldayakov St. / 29 Aiteke Bi St."
        ],
        "HR и приемная": ["HR және қабылдау бөлмесі", "HR & Reception"],
        "Сообщение (или ссылка на резюме / бриф) *": [
            "Хабарлама (немесе түйіндеме / бриф сілтемесі) *",
            "Message (or link to CV / brief) *"
        ],
        "Расскажите о себе или о вашем проекте...": [
            "Өзіңіз туралы немесе жобаңыз туралы айтып беріңіз...",
            "Tell us about yourself or your project..."
        ],
        "✓ Успешно отправлено! Мы свяжемся с вами.": [
            "✓ Сәтті жіберілді! Біз сізбен байланысамыз.",
            "✓ Sent successfully! We will get in touch with you."
        ],

        // ---------- Контакты (contacts.html) ----------
        "Свяжитесь с нами": ["Бізбен байланысыңыз", "Get in touch"],
        "Давайте обсудим ваш": ["Талқылайық сіздің", "Let's discuss your"],
        "следующий большой шаг": ["келесі үлкен қадамыңызды", "next big step"],
        "Пригласите DASM Group в тендер, запросите аудит текущей рекламной стратегии или свяжитесь с региональными офисами группы.": [
            "DASM Group-ты тендерге шақырыңыз, ағымдағы жарнама стратегиясының аудитін сұраңыз немесе топтың өңірлік кеңселерімен байланысыңыз.",
            "Invite DASM Group to a tender, request an audit of your current advertising strategy or contact the group's regional offices."
        ],
        "2 часа": ["2 сағат", "2 hours"],
        "Среднее время ответа": ["Орташа жауап беру уақыты", "Average response time"],
        "Тендеры": ["Тендерлер", "Tenders"],
        "Единый тендерный комитет": ["Бірыңғай тендерлік комитет", "Unified tender committee"],
        "ул. Шамши Калдаякова, 34": ["Шәмші Қалдаяқов к-сі, 34", "34 Shamshi Kaldayakov St."],
        "ул. Шамши Калдаякова, 34, Алматы": ["Шәмші Қалдаяқов к-сі, 34, Алматы", "34 Shamshi Kaldayakov St., Almaty"],
        "Штаб-квартира • Казахстан": ["Бас кеңсе • Қазақстан", "Headquarters • Kazakhstan"],
        "Алматы — Центральный офис": ["Алматы — Орталық кеңсе", "Almaty — Central Office"],
        "📍 050019, г. Алматы, Медеуский район,": [
            "📍 050019, Алматы қ., Медеу ауданы,",
            "📍 050019, Almaty, Medeu District,"
        ],
        "ул. Айтеке би, 29 (БЦ Absolut, 1, 5, 6, 7 этажи)": [
            "Әйтеке би к-сі, 29 (Absolut БО, 1, 5, 6, 7 қабаттар)",
            "29 Aiteke Bi St. (Absolut Business Center, floors 1, 5, 6, 7)"
        ],
        "📞 Телефон:": ["📞 Телефон:", "📞 Phone:"],
        "Построить маршрут": ["Бағыт салу", "Get directions"],
        "Региональные хабы": ["Өңірлік хабтар", "Regional hubs"],
        "Офисы в 8 странах": ["8 елдегі кеңселер", "Offices in 8 countries"],
        "Пн–Пт: 09:00 – 18:30 (GMT+5)": ["Дс–Жм: 09:00 – 18:30 (GMT+5)", "Mon–Fri: 09:00 – 18:30 (GMT+5)"],
        "Официальные ресурсы": ["Ресми ресурстар", "Official resources"],
        "Социальные сети": ["Әлеуметтік желілер", "Social media"],
        "Форма обратной связи": ["Кері байланыс формасы", "Contact form"],
        "Заполните поля ниже — мы ответим в течение нескольких часов.": [
            "Төмендегі өрістерді толтырыңыз — бірнеше сағат ішінде жауап береміз.",
            "Fill in the fields below — we will reply within a few hours."
        ],
        "Ваше имя и компания *": ["Атыңыз және компания *", "Your name and company *"],
        "Данияр Сериков, Marketing Director": ["Данияр Серіков, Marketing Director", "Daniyar Serikov, Marketing Director"],
        "Пожалуйста, укажите ваше имя": ["Атыңызды көрсетіңіз", "Please enter your name"],
        "+7 (701) 000-00-00 или d.serikov@brand.kz": ["+7 (701) 000-00-00 немесе d.serikov@brand.kz", "+7 (701) 000-00-00 or d.serikov@brand.kz"],
        "Укажите корректный телефон или email": ["Дұрыс телефон немесе email көрсетіңіз", "Please enter a valid phone or email"],
        "Интересующее направление": ["Қызықтыратын бағыт", "Area of interest"],
        "Комплексное обслуживание 360°": ["360° кешенді қызмет көрсету", "Full-service 360° support"],
        "Медиапланирование и баинг (TV, OOH, Digital)": [
            "Медиажоспарлау және баинг (TV, OOH, Digital)",
            "Media planning & buying (TV, OOH, Digital)"
        ],
        "Креатив, стратегия и брендинг": ["Креатив, стратегия және брендинг", "Creative, strategy & branding"],
        "PR, SMM, Influence & BTL": ["PR, SMM, Influence & BTL", "PR, SMM, Influence & BTL"],
        "Мультистрановой запуск (ЦА и Кавказ)": [
            "Мульти-елдік іске қосу (ОА және Кавказ)",
            "Multi-country launch (Central Asia & Caucasus)"
        ],
        "Ваше сообщение / Описание задачи *": [
            "Хабарлама / Тапсырма сипаттамасы *",
            "Your message / Task description *"
        ],
        "Опишите задачи проекта, ориентировочные сроки и географию...": [
            "Жоба міндеттерін, болжамды мерзімдерін және географиясын сипаттаңыз...",
            "Describe your project goals, timeline and target countries..."
        ],
        "Пожалуйста, напишите сообщение": ["Хабарлама жазыңыз", "Please write a message"],
        "Отправить сообщение в DASM Group →": [
            "DASM Group-қа хабарлама жіберу →",
            "Send message to DASM Group →"
        ],
        "✓ Ваше обращение зарегистрировано! Наш директор по развитию бизнеса свяжется с вами в ближайшее время.": [
            "✓ Сіздің өтінішіңіз тіркелді! Біздің бизнесті дамыту жөніндегі директорымыз жақын арада сізбен байланысады.",
            "✓ Your inquiry has been received! Our Business Development Director will contact you shortly."
        ],
        "Быстрый контакт": ["Жылдам байланыс", "Quick contact"],
        "смелым амбициям": ["батыл амбицияларға", "to bold ambitions"],
        "Крупнейшая коммуникационная группа Центральной Азии всегда открыта для новых вызовов, тендеров и партнерств.": [
            "Орталық Азиядағы ең ірі коммуникациялық топ жаңа сын-қатерлерге, тендерлерге және серіктестікке әрқашан ашық.",
            "The largest communications group in Central Asia is always open to new challenges, tenders and partnerships."
        ],
        "Быстрая заявка на звонок": ["Қоңырауға жылдам өтінім", "Quick call request"],
        "+7 (777) 000-00-00 или email": ["+7 (777) 000-00-00 немесе email", "+7 (777) 000-00-00 or email"],
        "Комментарий *": ["Пікір *", "Comment *"],
        "Удобное время для звонка или вопрос...": [
            "Қоңырау шалуға ыңғайлы уақыт немесе сұрақ...",
            "Preferred time for a call or your question..."
        ],
        "Напишите короткое сообщение": ["Қысқа хабарлама жазыңыз", "Write a short message"],

        // ---------- Футер и общие формы ----------
        "Начать проект": ["Жобаны бастау", "Start a project"],
        "Готовы сказать «ДА» росту бренда?": [
            "Бренд өсіміне «ИӘ» деуге дайынсыз ба?",
            "Ready to say «YES» to brand growth?"
        ],
        "Оставьте заявку — директор по развитию бизнеса свяжется с вами.": [
            "Өтінім қалдырыңыз — бизнесті дамыту жөніндегі директор сізбен байланысады.",
            "Leave a request and our Business Development Director will contact you."
        ],
        "Штаб-квартира": ["Бас кеңсе", "Headquarters"],
        "Офис в Алматы": ["Алматыдағы кеңсе", "Almaty office"],
        "© 1994–2026 DASM Group": ["© 1994–2026 DASM Group", "© 1994–2026 DASM Group"],
        "© 1994–2026 DASM Group. Все права защищены.": [
            "© 1994–2026 DASM Group. Барлық құқықтар қорғалған.",
            "© 1994–2026 DASM Group. All rights reserved."
        ],
        "Ваше имя *": ["Атыңыз *", "Your name *"],
        "Телефон или Email *": ["Телефон немесе Email *", "Phone or email *"],
        "Сообщение *": ["Хабарлама *", "Message *"],
        "Описание задачи *": ["Тапсырма сипаттамасы *", "Task description *"],
        "Введите имя": ["Атыңызды енгізіңіз", "Enter your name"],
        "Введите ваше имя": ["Атыңызды енгізіңіз", "Enter your name"],
        "Укажите контакты": ["Байланыс деректерін көрсетіңіз", "Enter valid contact details"],
        "Укажите телефон или email": ["Телефон немесе email көрсетіңіз", "Enter a valid phone or email"],
        "Напишите сообщение": ["Хабарлама жазыңыз", "Write a message"],
        "Отправить →": ["Жіберу →", "Send →"],
        "Отправить бриф →": ["Бриф жіберу →", "Send brief →"],
        "Получить консультацию →": ["Кеңес алу →", "Get a consultation →"],
        "Заказать звонок →": ["Қоңырау тапсыру →", "Request a call →"],
        "Обсудить проект": ["Жобаны талқылау", "Discuss a project"],
        "Запросить расчёт": ["Есептеу сұрау", "Request a quote"],
        "Запросить презентацию": ["Презентация сұрау", "Request a presentation"],
        "Написать в DASM Group": ["DASM Group-қа жазу", "Write to DASM Group"],
        "Связаться с DASM Group": ["DASM Group-пен байланысу", "Contact DASM Group"],
        "✓ Заявка отправлена!": ["✓ Өтінім жіберілді!", "✓ Request sent!"],
        "✓ Письмо подготовлено — отправьте его в своём почтовом клиенте.": [
            "✓ Хат дайын — оны пошта клиентіңізден жіберіңіз.",
            "✓ Your email is ready — send it from your mail app."
        ],
        "Не удалось отправить. Попробуйте позже или напишите на info@dasm.kz.": [
            "Жіберу мүмкін болмады. Кейінірек қайталаңыз немесе info@dasm.kz мекенжайына жазыңыз.",
            "Could not send. Please try later or write to info@dasm.kz."
        ],
        "Ваше имя": ["Атыңыз", "Your name"],
        "+7 или email": ["+7 немесе email", "+7 or email"],
        "Опишите задачу...": ["Тапсырманы сипаттаңыз...", "Describe your task..."],

        // ---------- 404 ----------
        "На главную": ["Басты бетке", "Back to home"],
        "Такой страницы": ["Мұндай бет", "This page"],
        "нет": ["жоқ", "does not exist"],
        "Ошибка 404": ["404 қатесі", "Error 404"],
        "Возможно, ссылка устарела или в адресе опечатка. Вернитесь на главную или выберите нужный раздел в меню.": [
            "Сілтеме ескірген немесе мекенжайда қате болуы мүмкін. Басты бетке оралыңыз немесе мәзірден қажетті бөлімді таңдаңыз.",
            "The link may be outdated or there is a typo. Return to the home page or choose a section from the menu."
        ]
    };

    const norm = s => s.replace(/\s+/g, ' ').trim();
    const IDX = { KZ: 0, EN: 1 };
    const HTML_LANG = { RU: 'ru', KZ: 'kk', EN: 'en' };
    const SKIP = /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/;
    const originals = new WeakMap();
    let origTitle = '';
    let lang = 'RU';

    try {
        const saved = localStorage.getItem('dasm-lang');
        if (saved === 'RU' || saved === 'KZ' || saved === 'EN') lang = saved;
    } catch (e) { /* ignore */ }

    function t(ru) {
        if (!ru || lang === 'RU') return ru;
        const e = D[norm(ru)];
        return e ? e[IDX[lang]] : ru;
    }

    function apply(root) {
        root = root || document.body;
        if (!root) return;

        if (!origTitle && document.title) origTitle = document.title;
        if (origTitle) document.title = t(origTitle);

        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        const nodes = [];
        let n;
        while ((n = walker.nextNode())) {
            if (n.nodeValue.trim() && !SKIP.test(n.parentNode.nodeName) &&
                !(n.parentNode.closest && n.parentNode.closest('[data-no-i18n]'))) {
                nodes.push(n);
            }
        }
        nodes.forEach(node => {
            const orig = originals.has(node) ? originals.get(node) : node.nodeValue;
            const entry = lang === 'RU' ? null : D[norm(orig)];
            if (entry) {
                if (!originals.has(node)) originals.set(node, orig);
                const lead = orig.match(/^\s*/)[0];
                const trail = orig.match(/\s*$/)[0];
                node.nodeValue = lead + entry[IDX[lang]] + trail;
            } else if (originals.has(node)) {
                node.nodeValue = orig;
                originals.delete(node);
            }
        });

        root.querySelectorAll('[placeholder]').forEach(el => {
            if (!el.dataset.ph) el.dataset.ph = el.getAttribute('placeholder');
            el.setAttribute('placeholder', t(el.dataset.ph));
        });
        root.querySelectorAll('[aria-label]').forEach(el => {
            if (!el.dataset.al) el.dataset.al = el.getAttribute('aria-label');
            el.setAttribute('aria-label', t(el.dataset.al));
        });
        root.querySelectorAll('[title]').forEach(el => {
            if (!el.dataset.ttl) el.dataset.ttl = el.getAttribute('title');
            el.setAttribute('title', t(el.dataset.ttl));
        });
    }

    function markButtons() {
        document.querySelectorAll('.lang-btn').forEach(b => {
            b.classList.toggle('active', b.textContent.trim() === lang);
        });
    }

    function set(newLang) {
        if (newLang !== 'RU' && newLang !== 'KZ' && newLang !== 'EN') return;
        lang = newLang;
        try { localStorage.setItem('dasm-lang', lang); } catch (e) { /* ignore */ }
        document.documentElement.lang = HTML_LANG[lang];
        apply();
        markButtons();
        document.dispatchEvent(new CustomEvent('dasm:lang', { detail: lang }));
    }

    window.i18n = { t, apply, set, get lang() { return lang; } };

    document.addEventListener('DOMContentLoaded', () => {
        document.documentElement.lang = HTML_LANG[lang];
        apply();
        markButtons();
    });
})();

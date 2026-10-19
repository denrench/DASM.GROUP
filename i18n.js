/**
 * DASM GROUP — переключатель языка RU / KZ / EN
 *
 * Принцип: словарь «русский текст → [казахский, английский]».
 * Скрипт обходит все текстовые узлы страницы и заменяет совпавшие.
 * Тексты, которых нет в словаре, остаются на русском — это не ошибка.
 * Чтобы перевести ещё что-то, просто добавь строку в словарь D.
 */
(function () {
    const D = {
        // ---------- Меню и шапка ----------
        "Главная": ["Басты бет", "Home"],
        "О холдинге": ["Холдинг туралы", "About"],
        "Агентства": ["Агенттіктер", "Agencies"],
        "Кейсы": ["Кейстер", "Cases"],
        "Страны": ["Елдер", "Countries"],
        "Новости": ["Жаңалықтар", "News"],
        "Карьера": ["Мансап", "Careers"],
        "Контакты": ["Байланыс", "Contacts"],
        "Стать клиентом": ["Клиент болу", "Become a client"],
        "Стать клиентом →": ["Клиент болу →", "Become a client →"],

        // ---------- Футер и формы ----------
        "Штаб-квартира": ["Бас кеңсе", "Headquarters"],
        "Офис в Алматы": ["Алматыдағы кеңсе", "Almaty office"],
        "© 1994–2026 DASM Group. Все права защищены.": ["© 1994–2026 DASM Group. Барлық құқықтар қорғалған.", "© 1994–2026 DASM Group. All rights reserved."],
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
        "Форма обратной связи": ["Кері байланыс формасы", "Contact form"],
        "Быстрая заявка на звонок": ["Қоңырауға жылдам өтінім", "Quick call request"],
        "✓ Заявка отправлена!": ["✓ Өтінім жіберілді!", "✓ Request sent!"],
        "✓ Письмо подготовлено — отправьте его в своём почтовом клиенте.": ["✓ Хат дайын — оны пошта клиентіңізден жіберіңіз.", "✓ Your email is ready — send it from your mail app."],
        "Не удалось отправить. Попробуйте позже или напишите на info@dasm.kz.": ["Жіберу мүмкін болмады. Кейінірек қайталаңыз немесе info@dasm.kz мекенжайына жазыңыз.", "Could not send. Please try later or write to info@dasm.kz."],
        "Ваше имя": ["Атыңыз", "Your name"],
        "+7 или email": ["+7 немесе email", "+7 or email"],
        "Опишите задачу...": ["Тапсырманы сипаттаңыз...", "Describe your task..."],
        "Построить маршрут": ["Бағыт салу", "Get directions"],

        // ---------- Главная ----------
        "Мы говорим": ["Біз айтамыз", "We say"],
        "да.": ["иә.", "yes."],
        "Крупнейший рекламно-коммуникационный холдинг Центральной Азии и Кавказа. 15 специализированных агентств, креатив уровня Cannes Lions и медиабаинг с долей рынка более 20%.": [
            "Орталық Азия мен Кавказдағы ең ірі жарнама-коммуникациялық холдинг. 15 мамандандырылған агенттік, Cannes Lions деңгейіндегі креатив және нарықтың 20%-дан астам үлесі бар медиабаинг.",
            "The largest advertising and communications holding in Central Asia and the Caucasus. 15 specialized agencies, Cannes Lions-level creative and media buying with over 20% market share."],
        "Смотреть работы": ["Жұмыстарды көру", "View our work"],
        "Год основания": ["Құрылған жылы", "Founded"],
        "Специалистов": ["Маман", "Specialists"],
        "Экосистема 360°": ["360° экожүйе", "360° ecosystem"],
        "Полный спектр коммуникационных решений": ["Коммуникациялық шешімдердің толық спектрі", "A full range of communication solutions"],
        "Все агентства →": ["Барлық агенттіктер →", "All agencies →"],
        "Портфолио": ["Портфолио", "Portfolio"],
        "Кейсы, которые выигрывают рынки и фестивали": ["Нарықтар мен фестивальдарды жеңетін кейстер", "Cases that win markets and festivals"],
        "Все работы →": ["Барлық жұмыстар →", "All work →"],
        "География": ["География", "Geography"],
        "8 стран. Один стандарт качества.": ["8 ел. Бір сапа стандарты.", "8 countries. One quality standard."],
        "Все страны →": ["Барлық елдер →", "All countries →"],
        "Начать проект": ["Жобаны бастау", "Start a project"],

        // ---------- Клиенты (главная и «О холдинге») ----------
        "Доверие": ["Сенім", "Trust"],
        "Бренды, которые остаются с нами годами": ["Бізбен жылдар бойы бірге болатын брендтер", "Brands that stay with us for years"],
        "Kaspi.kz, Technodom и Berlin-Chemie работают с группой больше 20 лет (по интервью DASM для Forbes.kz).": [
            "Kaspi.kz, Technodom және Berlin-Chemie топпен 20 жылдан астам жұмыс істейді (DASM-ның Forbes.kz-ке берген сұхбаты бойынша).",
            "Kaspi.kz, Technodom and Berlin-Chemie have worked with the group for over 20 years (per DASM's interview with Forbes.kz)."],
        "20+ лет вместе": ["20+ жыл бірге", "20+ years together"],
        "Среди других клиентов GForce Grey (по данным AdForum):": ["GForce Grey-дің басқа клиенттері (AdForum деректері бойынша):", "Other GForce Grey clients (per AdForum):"],

        // ---------- О холдинге ----------
        "История и ДНК": ["Тарих және ДНК", "History and DNA"],
        "Более 30 лет мы формируем рекламную индустрию": ["30 жылдан астам уақыт бойы біз жарнама индустриясын қалыптастырамыз", "For over 30 years we have been shaping the advertising industry"],
        "Центральной Азии": ["Орталық Азияның", "of Central Asia"],
        "Основанная в 1994 году в Алматы, сегодня DASM Group — это экосистема из 15 агентств, контролирующая более 20% медиарынка региона и работающая с 150+ международными и локальными брендами.": [
            "1994 жылы Алматыда құрылған DASM Group бүгін — аймақ медиа нарығының 20%-дан астамын қамтитын және 150+ халықаралық және жергілікті брендпен жұмыс істейтін 15 агенттіктен тұратын экожүйе.",
            "Founded in Almaty in 1994, DASM Group today is an ecosystem of 15 agencies covering over 20% of the regional media market and working with 150+ international and local brands."],
        "Путь": ["Жол", "Our path"],
        "Ключевые вехи DASM Group": ["DASM Group-тың негізгі кезеңдері", "Key milestones of DASM Group"],
        "Люди": ["Адамдар", "People"],
        "Креативное лидерство": ["Креативті көшбасшылық", "Creative leadership"],
        "Признание": ["Мойындау", "Recognition"],
        "Награды и рейтинги": ["Марапаттар мен рейтингтер", "Awards and rankings"],

        // ---------- Агентства + квиз ----------
        "Структура группы": ["Топ құрылымы", "Group structure"],
        "15 специализированных агентств": ["15 мамандандырылған агенттік", "15 specialized agencies"],
        "в единой экосистеме": ["бір экожүйеде", "in one ecosystem"],
        "Каждое агентство обладает глубокой профильной специализацией — от глобального медиабаинга и стратегии до креатива, digital-перформанса, PR и трейд-маркетинга.": [
            "Әр агенттіктің терең бейінді мамандануы бар — жаһандық медиабаинг пен стратегиядан бастап креатив, digital-перформанс, PR және трейд-маркетингке дейін.",
            "Each agency has deep specialization — from global media buying and strategy to creative, digital performance, PR and trade marketing."],
        "Все": ["Барлығы", "All"],
        "Креатив": ["Креатив", "Creative"],
        "Медиа": ["Медиа", "Media"],
        "Быстрый подбор": ["Жылдам таңдау", "Quick match"],
        "Какое агентство вам подойдёт?": ["Қай агенттік сізге сәйкес келеді?", "Which agency is right for you?"],
        "Ответьте на три вопроса — подскажем, с кого начать.": ["Үш сұраққа жауап беріңіз — қайдан бастау керектігін айтамыз.", "Answer three questions and we will suggest where to start."],
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
        "Для одной страны хватит одного агентства — начните с него.": ["Бір ел үшін бір агенттік жеткілікті — содан бастаңыз.", "For a single country one agency is enough — start with it."],
        "Для нескольких стран подключите DASMART: он координирует кампании в одном окне.": ["Бірнеше ел үшін DASMART-ты қосыңыз: ол науқандарды бір терезеде үйлестіреді.", "For several countries add DASMART: it coordinates campaigns in one place."],
        "Для запуска в нескольких регионах подключим DASMART и региональные офисы группы.": ["Бірнеше өңірде іске қосу үшін DASMART пен топтың өңірлік кеңселерін қосамыз.", "For a multi-region launch we will bring in DASMART and the group's regional offices."],

        // ---------- Кейсы ----------
        "Доказанная эффективность": ["Дәлелденген тиімділік", "Proven effectiveness"],
        "Кейсы, которые выигрывают": ["Жеңетін кейстер", "Cases that win"],
        "рынки и фестивали": ["нарықтар мен фестивальдар", "markets and festivals"],
        "Более 1500 успешных кампаний в финансовом секторе, FMCG, телекоме, e-commerce и социально значимых инициативах.": [
            "Қаржы секторында, FMCG, телекомда, e-commerce-те және әлеуметтік маңызды бастамаларда 1500-ден астам сәтті науқан.",
            "Over 1,500 successful campaigns in finance, FMCG, telecom, e-commerce and socially important initiatives."],
        "Награды": ["Марапаттар", "Awards"],
        "Финтех": ["Финтех", "Fintech"],
        "Соцпроекты": ["Әлеуметтік жобалар", "Social projects"],

        // ---------- Страны ----------
        "Региональный масштаб": ["Өңірлік ауқым", "Regional scale"],
        "8 стран. 90+ миллионов потребителей.": ["8 ел. 90+ миллион тұтынушы.", "8 countries. 90+ million consumers."],
        "Единые стандарты качества.": ["Бірыңғай сапа стандарттары.", "Unified quality standards."],
        "Мы обеспечиваем бесшовный запуск и координацию кампаний в Центральной Азии, на Кавказе и в Монголии с глубоким пониманием локального культурного кода.": [
            "Біз Орталық Азияда, Кавказда және Моңғолияда жергілікті мәдени кодты терең түсіне отырып, науқандарды үздіксіз іске қосуды және үйлестіруді қамтамасыз етеміз.",
            "We ensure seamless launch and coordination of campaigns in Central Asia, the Caucasus and Mongolia with a deep understanding of the local cultural code."],
        "Центральная Азия": ["Орталық Азия", "Central Asia"],
        "Кавказ": ["Кавказ", "Caucasus"],
        "Монголия": ["Моңғолия", "Mongolia"],

        // ---------- Новости ----------
        "Пресс-центр DASM": ["DASM баспасөз орталығы", "DASM press center"],
        "Новости холдинга,": ["Холдинг жаңалықтары,", "Holding news,"],
        "победы и аналитика рынка": ["жеңістер мен нарық талдауы", "wins and market analytics"],
        "Актуальные события из жизни 15 агентств DASM Group, кадровые назначения, обзоры медиарынка ЦАРА и репортажи с мировых фестивалей.": [
            "DASM Group-тың 15 агенттігінің өмірінен өзекті оқиғалар, кадрлық тағайындаулар, ОАА медиа нарығының шолулары және әлемдік фестивальдардан репортаждар.",
            "News from the 15 agencies of DASM Group, appointments, reviews of the Central Asian media market and reports from global festivals."],

        // ---------- Карьера ----------
        "Люди — наш главный актив": ["Адамдар — біздің басты активіміз", "People are our main asset"],
        "Создавай рекламу мирового уровня": ["Әлемдік деңгейдегі жарнама жаса", "Create world-class advertising"],
        "в команде 500+ профи": ["500+ маманнан тұратын командада", "in a team of 500+ professionals"],
        "Работа в DASM Group — это доступ к глобальным базам знаний WPP, работа с крупнейшими брендами планеты, поездки на международные фестивали и культура, где смелым идеям всегда говорят «DA».": [
            "DASM Group-та жұмыс — WPP жаһандық білім базаларына қолжетімділік, планетаның ірі брендтерімен жұмыс, халықаралық фестивальдарға сапарлар және батыл идеяларға әрқашан «DA» айтатын мәдениет.",
            "Working at DASM Group means access to WPP's global knowledge bases, the world's biggest brands, trips to international festivals and a culture that always says «DA» to bold ideas."],
        "Открытые позиции": ["Ашық позициялар", "Open positions"],
        "Кого мы ищем прямо сейчас": ["Біз қазір кімді іздейміз", "Who we are looking for right now"],
        "Откликнуться →": ["Өтініш беру →", "Apply →"],
        "Поиск по вакансиям": ["Вакансиялар бойынша іздеу", "Search vacancies"],
        "Все города": ["Барлық қалалар", "All cities"],
        "Алматы": ["Алматы", "Almaty"],
        "Ташкент": ["Ташкент", "Tashkent"],
        "Все направления": ["Барлық бағыттар", "All areas"],
        "Финансы": ["Қаржы", "Finance"],
        "Ничего не нашли — попробуйте изменить фильтры.": ["Ештеңе табылмады — сүзгілерді өзгертіп көріңіз.", "Nothing found — try changing the filters."],
        "Все вакансии на hh.kz →": ["hh.kz сайтындағы барлық вакансиялар →", "All vacancies on hh.kz →"],
        "Частые вопросы": ["Жиі қойылатын сұрақтар", "FAQ"],
        "Как попасть в DASM": ["DASM-ға қалай түсуге болады", "How to join DASM"],
        "Нужен ли опыт работы?": ["Жұмыс тәжірибесі қажет пе?", "Is work experience required?"],
        "Зависит от позиции: в вакансиях группы на hh встречаются роли, где опыт не требуется, например Assistant Media Planning Manager.": ["Позицияға байланысты: топтың hh-дағы вакансияларында тәжірибе талап етілмейтін рөлдер бар, мысалы Assistant Media Planning Manager.", "It depends on the role: DASM's hh listings include positions with no experience required, for example Assistant Media Planning Manager."],
        "Где смотреть актуальные вакансии?": ["Өзекті вакансияларды қайдан қарауға болады?", "Where can I see current vacancies?"],
        "Актуальный список ведётся на странице DASM Group на hh.kz — ссылка под списком вакансий.": ["Өзекті тізім hh.kz сайтындағы DASM Group бетінде жүргізіледі — сілтеме вакансиялар тізімінің астында.", "The current list is kept on the DASM Group page on hh.kz — see the link under the vacancy list."],
        "Какой график работы?": ["Жұмыс кестесі қандай?", "What is the work schedule?"],
        "В опубликованных вакансиях указан график 5/2 с работой в офисе. Детали уточняйте у рекрутера.": ["Жарияланған вакансияларда кеңседегі 5/2 кестесі көрсетілген. Толығырақ рекрутерден сұраңыз.", "Published vacancies list a 5/2 schedule with office work. Ask the recruiter for details."],
        "Как откликнуться?": ["Қалай өтініш беруге болады?", "How do I apply?"],
        "Нажмите «Откликнуться» у вакансии и заполните форму внизу страницы: расскажите о себе и добавьте ссылку на резюме или портфолио.": ["Вакансияның жанындағы «Өтініш беру» батырмасын басып, беттің төменгі формасын толтырыңыз: өзіңіз туралы жазып, түйіндеме немесе портфолио сілтемесін қосыңыз.", "Click Apply next to a vacancy and fill in the form at the bottom: tell us about yourself and add a link to your CV or portfolio."],

        // ---------- Контакты ----------
        "Свяжитесь с нами": ["Бізбен байланысыңыз", "Get in touch"],
        "Давайте обсудим ваш": ["Талқылайық сіздің", "Let's discuss your"],
        "следующий большой шаг": ["келесі үлкен қадамыңызды", "next big step"],
        "Пригласите DASM Group в тендер, запросите аудит текущей рекламной стратегии или свяжитесь с региональными офисами группы.": [
            "DASM Group-ты тендерге шақырыңыз, ағымдағы жарнама стратегиясының аудитін сұраңыз немесе топтың өңірлік кеңселерімен байланысыңыз.",
            "Invite DASM Group to a tender, request an audit of your current advertising strategy or contact the group's regional offices."]
    };

    const norm = s => s.replace(/\s+/g, ' ').trim();
    const IDX = { KZ: 0, EN: 1 };
    const HTML_LANG = { RU: 'ru', KZ: 'kk', EN: 'en' };
    const SKIP = /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/;
    const originals = new WeakMap();
    let lang = 'RU';

    try {
        const saved = localStorage.getItem('dasm-lang');
        if (saved === 'RU' || saved === 'KZ' || saved === 'EN') lang = saved;
    } catch (e) { /* localStorage может быть недоступен */ }

    // Перевод одной строки (для динамического контента: квиз, сообщения)
    function t(ru) {
        if (lang === 'RU') return ru;
        const e = D[norm(ru)];
        return e ? e[IDX[lang]] : ru;
    }

    // Перевод всех текстов внутри root
    function apply(root) {
        root = root || document.body;
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        const nodes = [];
        let n;
        while ((n = walker.nextNode())) {
            if (n.nodeValue.trim() && !SKIP.test(n.parentNode.nodeName)) nodes.push(n);
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

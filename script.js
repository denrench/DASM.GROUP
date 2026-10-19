/**
 * DASM GROUP — Soft & Clean Script
 */

document.addEventListener('DOMContentLoaded', () => {

    // ===== Header scroll =====
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 30);
        }
    });

    // ===== Mobile menu =====
    const burgerBtn = document.getElementById('burgerBtn');
    const navMenu = document.getElementById('navMenu');

    if (burgerBtn && navMenu) {
        burgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            burgerBtn.classList.toggle('active');
        });

        // Закрытие меню при клике на ссылку
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                burgerBtn.classList.remove('active');
            });
        });
    }

    // ===== Reveal on scroll =====
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));

    // ===== Form validation =====
    document.querySelectorAll('.js-validate-form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let isValid = true;
            const inputs = form.querySelectorAll('input[required], textarea[required]');

            inputs.forEach(input => {
                const group = input.closest('.form-group');
                if (!input.value.trim()) {
                    group.classList.add('invalid');
                    isValid = false;
                } else {
                    group.classList.remove('invalid');
                }
            });

            if (isValid) {
                const successMsg = form.querySelector('.form-success-message');
                if (successMsg) {
                    successMsg.classList.add('visible');
                    successMsg.textContent = '✓ Заявка успешно отправлена! Мы свяжемся с вами.';
                }
                form.reset();

                // Скрываем сообщение через 4 секунды
                setTimeout(() => {
                    if (successMsg) successMsg.classList.remove('visible');
                }, 4000);
            }
        });
    });

    // ===== Language switcher (visual only) =====
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

});

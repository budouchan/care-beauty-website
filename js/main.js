// スムーズスクロール
function smoothScroll(target, duration) {
    const element = document.querySelector(target);
    const start = window.pageYOffset;
    const end = element.getBoundingClientRect().top + start;
    const startTime = performance.now();

    function animation(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        window.scrollTo(0, start + (end - start) * progress);

        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

// ナビゲーションリンクのクリックイベント
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        smoothScroll(target, 1000);
    });
});

// フォームの送信処理
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // ここにフォームの送信処理を実装
        alert('お問い合わせを受け付けました。後ほどご連絡させていただきます。');
        contactForm.reset();
    });
}

// スクロール時のヘッダーの固定
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
});

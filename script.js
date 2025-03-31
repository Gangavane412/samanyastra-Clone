// Mobile menu toggle
const mobileMenu = document.querySelector('#mobile-menu');
const navbarMenu = document.querySelector('#navbar-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a menu item
document.querySelectorAll('.navbar-links').forEach(n =>
    n.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navbarMenu.classList.remove('active');
    })
);

//************************** Hero section  ********************** */


// Create stars dynamically
document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelector('.stars');
    const stars2 = document.querySelector('.stars2');
    const stars3 = document.querySelector('.stars3');

    function createStars(container, count, sizeRange, durationRange) {
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.className = 'star';

            const size = Math.random() * sizeRange;
            const duration = (Math.random() * (durationRange[1] - durationRange[0])) + durationRange[0];
            const delay = Math.random() * 5;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;

            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${posX}%`;
            star.style.top = `${posY}%`;
            star.style.animationDuration = `${duration}s`;
            star.style.animationDelay = `${delay}s`;

            container.appendChild(star);
        }
    }

    createStars(stars, 100, 2, [5, 10]);
    createStars(stars2, 50, 3, [3, 7]);
    createStars(stars3, 25, 4, [1, 4]);
});


//***************************************** */


// Create floating particles
document.addEventListener('DOMContentLoaded', function () {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random properties
        const size = Math.random() * 3 + 1;
        const posX = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 10;
        const opacity = Math.random() * 0.5 + 0.1;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.bottom = `-10px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.opacity = opacity;

        particlesContainer.appendChild(particle);
    }
});



//**********************************why samanyasra section****************** */
// Create floating particles
document.addEventListener('DOMContentLoaded', function () {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 4 + 1;
        const posX = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 15;
        const opacity = Math.random() * 0.7 + 0.1;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.bottom = `-20px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.opacity = opacity;

        particlesContainer.appendChild(particle);
    }
});





// Add shooting stars to existing floating-particles div
document.addEventListener('DOMContentLoaded', function () {
    const particles = document.getElementById('floating-particles');

    function createShootingStar() {
        const star = document.createElement('i');
        const size = Math.random() * 2 + 1;
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 5;

        star.style.cssText = `
            left: ${Math.random() * 20}%;
            top: ${Math.random() * 20}%;
            width: ${size}px;
            height: ${size}px;
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
        `;

        particles.appendChild(star);

        // Remove after animation completes
        setTimeout(() => {
            star.remove();
        }, (duration + delay) * 1000);
    }

    // Create initial stars
    for (let i = 0; i < 5; i++) {
        createShootingStar();
    }

    // Continue creating stars periodically
    setInterval(createShootingStar, 1000);
});



//****************student flow or work flow*/

document.addEventListener('DOMContentLoaded', function () {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 3 + 1;
        const posX = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 10;
        const opacity = Math.random() * 0.5 + 0.1;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.bottom = `-10px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.opacity = opacity;

        particlesContainer.appendChild(particle);
    }


    const steps = document.querySelectorAll('.step');
    steps.forEach(step => {
        step.addEventListener('mouseenter', () => {
            step.querySelector('.step-number').style.transform = 'translateX(-50%) scale(1.2)';
        });
        step.addEventListener('mouseleave', () => {
            step.querySelector('.step-number').style.transform = 'translateX(-50%) scale(1)';
        });
    });
});



//**********************conatct section ******************** */
// Particle Animation
document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('stellar-contact-particles');

    function createParticle() {
        const particle = document.createElement('div');
        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 10 + 5;
        const randomX = (Math.random() * 200 - 100) + 'px';
        const randomY = (Math.random() * 200 - 100) + 'px';

        particle.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            width: ${size}px;
            height: ${size}px;
            background: var(--stellar-cyan);
            border-radius: 50%;
            opacity: ${Math.random() * 0.5 + 0.2};
            filter: blur(${Math.random() * 2 + 1}px);
            animation: stellar-particle-float ${duration}s linear infinite;
            --random-x: ${randomX};
            --random-y: ${randomY};
        `;

        container.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }

    // Create initial particles
    for (let i = 0; i < 20; i++) {
        createParticle();
    }

    // Continue creating particles
    setInterval(createParticle, 800);
});


//********************footer************* */
// Shooting stars animation
document.addEventListener('DOMContentLoaded', function () {
    const footer = document.querySelector('.cosmic-footer');

    function createShootingStar() {
        const star = document.createElement('div');
        star.className = 'cosmic-shooting-star';

        // Random position
        const startX = Math.random() * 100;
        const startY = Math.random() * 20;

        // Random size and duration
        const size = Math.random() * 2 + 1;
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 5;

        star.style.cssText = `
            left: ${startX}%;
            top: ${startY}%;
            width: ${size}px;
            height: ${size}px;
            box-shadow: 0 0 ${size * 2}px ${size / 2}px var(--cosmic-glow);
            animation: cosmic-shooting ${duration}s linear ${delay}s infinite;
        `;

        footer.appendChild(star);

        // Remove after animation completes
        setTimeout(() => {
            star.remove();
        }, (duration + delay) * 1000);
    }

    // Create initial stars
    for (let i = 0; i < 5; i++) {
        createShootingStar();
    }

    // Continue creating stars periodically
    setInterval(createShootingStar, 1000);
});









//****************************trasleter ************************************* */

// Google Translate initialization
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'af,ar,bn,bs,ca,cs,da,de,el,en,es,eu,fi,fr,gu,hi,hr,hu,id,it,iw,ja,kn,ko,lt,lv,ml,mr,nl,no,pl,pt,ro,ru,sk,sr,sv,ta,te,th,tl,tr,uk,ur,vi,zh-CN,zh-TW',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
}





// Save language preference and enhance functionality
document.addEventListener('DOMContentLoaded', function () {
    // Load saved language preference
    if (localStorage.getItem('googtrans')) {
        var lang = localStorage.getItem('googtrans').split('/')[2];
        if (lang) {
            var iframe = document.querySelector('.goog-te-menu-frame');
            if (iframe) {
                var item = iframe.contentWindow.document.querySelector('.goog-te-menu2-item[value="' + lang + '"]');
                if (item) item.click();
            }
        }
    }

    // Listen for language changes
    var observer = new MutationObserver(function () {
        var langValue = document.querySelector('.goog-te-menu-value');
        if (langValue) {
            var currentLang = langValue.textContent;
            if (currentLang && currentLang !== 'Select Language') {
                var iframe = document.querySelector('.goog-te-menu-frame');
                if (iframe) {
                    var langCodeElement = iframe.contentWindow.document.querySelector('.goog-te-menu2-item[data-language-code="' + currentLang + '"]');
                    if (langCodeElement) {
                        var langCode = langCodeElement.value;
                        localStorage.setItem('googtrans', '/en/' + langCode);

                        // Optional: Reload page after language change for better compatibility
                        // window.location.reload();
                    }
                }
            }
        }
    });

    var langValueElement = document.querySelector('.goog-te-menu-value');
    if (langValueElement) {
        observer.observe(langValueElement, {
            childList: true,
            subtree: true
        });
    }

    // Optional: Add click event to all language links
    document.querySelectorAll('a[data-lang]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var lang = this.getAttribute('data-lang');
            var iframe = document.querySelector('.goog-te-menu-frame');
            if (iframe) {
                var item = iframe.contentWindow.document.querySelector('.goog-te-menu2-item[value="' + lang + '"]');
                if (item) item.click();
            }
        });
    });
});



var selector = document.createElement('div');
selector.className = 'language-selector';
selector.innerHTML = '<h3>Select Language:</h3><ul>' +
    languages.map(function (lang) {
        return '<li><a href="#" data-lang="' + lang.code + '">' + lang.name + '</a></li>';
    }).join('') + '</ul>';

document.querySelector('.content').appendChild(selector);

// Call the function to add language selector
addLanguageSelector();

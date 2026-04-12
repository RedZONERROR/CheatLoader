// ============================================================================
// CHEATLOADER - MAIN JAVASCRIPT
// Interactive animations and functionality
// ============================================================================

(function() {
    'use strict';

    // ========================================================================
    // NAVIGATION
    // ========================================================================
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ========================================================================
    // PARTICLES ANIMATION
    // ========================================================================
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, transparent 70%);
            border-radius: 50%;
            left: ${startX}%;
            top: ${startY}%;
            animation: float ${duration}s ${delay}s infinite ease-in-out;
            pointer-events: none;
        `;
        
        particlesContainer.appendChild(particle);
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }

    // Add particle animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translate(0, 0) scale(1);
                opacity: 0.3;
            }
            25% {
                transform: translate(20px, -30px) scale(1.1);
                opacity: 0.6;
            }
            50% {
                transform: translate(-20px, -60px) scale(0.9);
                opacity: 0.4;
            }
            75% {
                transform: translate(30px, -40px) scale(1.05);
                opacity: 0.5;
            }
        }
    `;
    document.head.appendChild(style);

    // ========================================================================
    // SMOOTH SCROLL
    // ========================================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#privacy' || href === '#terms') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================================================
    // INTERSECTION OBSERVER - ANIMATE ON SCROLL
    // ========================================================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe steps
    document.querySelectorAll('.step').forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(30px)';
        step.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
        observer.observe(step);
    });

    // Observe community cards
    document.querySelectorAll('.community-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // ========================================================================
    // PARALLAX EFFECT
    // ========================================================================
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-background');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // ========================================================================
    // BUTTON RIPPLE EFFECT
    // ========================================================================
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.5);
                left: ${x}px;
                top: ${y}px;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);

    // ========================================================================
    // TYPING EFFECT FOR HERO TITLE (Optional Enhancement)
    // ========================================================================
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // ========================================================================
    // STATS COUNTER ANIMATION
    // ========================================================================
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, 16);
    }

    // ========================================================================
    // LAZY LOADING IMAGES
    // ========================================================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ========================================================================
    // PERFORMANCE OPTIMIZATION
    // ========================================================================
    let ticking = false;
    let lastScrollY = window.pageYOffset;

    window.addEventListener('scroll', () => {
        lastScrollY = window.pageYOffset;
        
        if (!ticking) {
            window.requestAnimationFrame(() => {
                // Perform scroll-based animations here
                ticking = false;
            });
            ticking = true;
        }
    });

    // ========================================================================
    // ACCESSIBILITY ENHANCEMENTS
    // ========================================================================
    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Focus trap for mobile menu
    const focusableElements = navMenu.querySelectorAll('a, button');
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    navMenu.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
            } else if (!e.shiftKey && document.activeElement === lastFocusable) {
                e.preventDefault();
                firstFocusable.focus();
            }
        }
    });

    // ========================================================================
    // CONSOLE MESSAGE
    // ========================================================================
    console.log('%cCheatLoader', 'font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
    console.log('%cAdvanced Gaming Utility & Modding Tool', 'font-size: 14px; color: #94a3b8;');
    console.log('%cJoin us: https://t.me/cheatloader', 'font-size: 12px; color: #6366f1;');

    // ========================================================================
    // MODAL FUNCTIONALITY
    // ========================================================================
    const privacyModal = document.getElementById('privacyModal');
    const termsModal = document.getElementById('termsModal');
    const privacyLink = document.getElementById('privacyLink');
    const termsLink = document.getElementById('termsLink');
    const privacyClose = document.getElementById('privacyClose');
    const termsClose = document.getElementById('termsClose');

    // Open Privacy Policy Modal
    privacyLink.addEventListener('click', (e) => {
        e.preventDefault();
        privacyModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Open Terms of Service Modal
    termsLink.addEventListener('click', (e) => {
        e.preventDefault();
        termsModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close Privacy Policy Modal
    privacyClose.addEventListener('click', () => {
        privacyModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close Terms of Service Modal
    termsClose.addEventListener('click', () => {
        termsModal.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close modals when clicking outside
    privacyModal.addEventListener('click', (e) => {
        if (e.target === privacyModal) {
            privacyModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    termsModal.addEventListener('click', (e) => {
        if (e.target === termsModal) {
            termsModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close modals with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (privacyModal.classList.contains('active')) {
                privacyModal.classList.remove('active');
                document.body.style.overflow = '';
            }
            if (termsModal.classList.contains('active')) {
                termsModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });

    // ========================================================================
    // INITIALIZATION COMPLETE
    // ========================================================================
    console.log('%c✓ Website initialized successfully', 'color: #10b981; font-weight: bold;');

})();

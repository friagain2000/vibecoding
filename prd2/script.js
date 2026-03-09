// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

document.addEventListener("DOMContentLoaded", () => {
    
    // Header Scroll Effect
    const header = document.querySelector(".header");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "rgba(245, 245, 245, 0.98)";
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
        } else {
            header.style.background = "rgba(245, 245, 245, 0.9)";
            header.style.boxShadow = "none";
        }
        lastScrollY = window.scrollY;
    });

    // Scroll Animations setup
    const fadeUpElements = document.querySelectorAll('.gsap-fade-up');
    
    fadeUpElements.forEach((el) => {
        gsap.fromTo(el, 
            { y: 50, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                duration: 1, 
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%", // Trigger when top of element hits 85% of viewport height
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Tech Stack Progress Bars Animation
    const progressFills = document.querySelectorAll('.progress-fill');
    progressFills.forEach((fill) => {
        const width = fill.style.width;
        gsap.fromTo(fill,
            { width: "0%" },
            {
                width: width,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: fill,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(faq => {
                faq.classList.remove('active');
                faq.querySelector('.faq-answer').style.maxHeight = null;
            });

            // If clicked item wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // Initial Hero Animations
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
    
    heroTl.fromTo(".hero-title", 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2 }
    )
    .fromTo(".hero-info", 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1 }, 
        "-=0.8"
    )
    .fromTo(".hero-image", 
        { y: 50, opacity: 0, scale: 0.95 }, 
        { y: 0, opacity: 1, scale: 1, duration: 1.5 }, 
        "-=0.6"
    );

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            gsap.to(window, {
                duration: 1,
                scrollTo: { y: targetId, offsetY: 80 },
                ease: "power3.inOut"
            });
        });
    });

});
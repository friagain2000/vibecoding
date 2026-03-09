// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

document.addEventListener("DOMContentLoaded", () => {
    
    // Header Scroll Effect
    const header = document.querySelector(".header");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.padding = "10px 0";
            header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
        } else {
            header.style.padding = "0";
            header.style.boxShadow = "none";
        }
    });

    // Initial Hero Animations
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    heroTl.fromTo(".gsap-fade-up", 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
    )
    .fromTo(".gsap-zoom-in", 
        { scale: 0.9, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 1.2 }, 
        "-=0.6"
    )
    .fromTo(".gsap-float",
        { y: 0 },
        { y: -15, duration: 2, yoyo: true, repeat: -1, ease: "sine.inOut" }
    );

    // Scroll Animations setup
    const scrollElements = document.querySelectorAll('.gsap-scroll-fade');
    
    scrollElements.forEach((el) => {
        gsap.fromTo(el, 
            { y: 50, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                duration: 1, 
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Skill Progress Bars Animation
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

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            gsap.to(window, {
                duration: 1,
                scrollTo: { y: targetId, offsetY: 90 },
                ease: "power3.inOut"
            });
        });
    });

});
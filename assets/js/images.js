document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    const containers = document.querySelectorAll('.img-border-wrap, .img-border-hover');

    containers.forEach(container => {
        const isHoverVariant = container.classList.contains('img-border-hover');

        // Create the border overlay structure
        const overlay = document.createElement("div");
        overlay.classList.add('animated-border-overlay');

        const border = document.createElement("div");
        border.classList.add('animated-border');

        overlay.appendChild(border);
        container.appendChild(overlay);

        if (isHoverVariant) {
            // Hover-only variant: No scroll trigger, just fade in/out on hover
            container.addEventListener('mouseenter', () => {
                gsap.to(border, { opacity: 1, duration: 0.5, ease: "power2.out" });
            });

            container.addEventListener('mouseleave', () => {
                gsap.to(border, { opacity: 0, duration: 0.5, ease: "power2.in" });
            });
        } else {
            // Standard variant: Fade in on scroll and pulse
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            });

            tl.to(border, {
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            })
                .to(border, {
                    opacity: 0.5,
                    duration: 2,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });

            // Hover effect: increase opacity
            container.addEventListener('mouseenter', () => {
                gsap.to(border, { opacity: 1, duration: 0.3 });
            });

            container.addEventListener('mouseleave', () => {
                gsap.to(border, { opacity: 0.8, duration: 0.3 });
            });
        }
    });
});

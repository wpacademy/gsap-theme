document.addEventListener("DOMContentLoaded", function () {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Text Animation: split-chars
    // Split characters using SplitType
    const headings = document.querySelectorAll(".animatedHeading .elementor-heading-title, .animatedHeading");

    headings.forEach((heading) => {
        const text = new SplitType(heading, { types: "chars" });

        gsap.from(text.chars, {
            scrollTrigger: {
                trigger: heading,
                start: "top 80%", // Starts when the top of the heading hits 80% of the viewport height
                toggleActions: "play none none none" // Plays once when entering
            },
            duration: 0.8,
            opacity: 0,
            y: 50,
            stagger: 0.05,
            ease: "power2.out"
        });
    });

    // Create timeline
    const tl = gsap.timeline({
    });

    // Add animations
    tl;
});
document.addEventListener("DOMContentLoaded", function () {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const $copyContainers = jQuery(".copy-container");
    const $replayIcon = jQuery('#cb-replay');

    if (!$copyContainers.length) return;

    $copyContainers.each(function () {
        const $container = jQuery(this);
        const $paragraph = $container.find('p');
        const $handle = $container.find('.handle');

        // Split text using SplitType
        const mySplitText = new SplitType($paragraph, { types: "chars, words" });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: $container,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });

        // Initial state
        gsap.set(mySplitText.chars, { autoAlpha: 0 });
        gsap.set($handle, { x: 0, autoAlpha: 1 });

        // Animation sequence
        tl.to(mySplitText.chars, {
            duration: 0.05,
            autoAlpha: 1,
            stagger: {
                each: 0.05,
                onComplete: function () {
                    const char = this.targets()[0];
                    const charRect = char.getBoundingClientRect();
                    const containerRect = $container[0].getBoundingClientRect();

                    // Calculate position relative to container
                    const xPos = charRect.right - containerRect.left;
                    const yPos = charRect.top - containerRect.top;

                    gsap.to($handle, {
                        x: xPos,
                        y: yPos,
                        duration: 0.05,
                        ease: "none"
                    });
                }
            }
        })
            .fromTo($handle,
                { opacity: 0 },
                { duration: 0.4, opacity: 1, repeat: -1, yoyo: true },
                0
            );

        // Replay logic for this specific container
        $replayIcon.on('click', function () {
            gsap.set(mySplitText.chars, { autoAlpha: 0 });
            gsap.set($handle, { x: 0, y: 0 });
            tl.restart();
        });
    });
});
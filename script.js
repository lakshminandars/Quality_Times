document.addEventListener("DOMContentLoaded", function () {
    // GSAP with ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Select all text elements (excluding navbar)
    gsap.utils.toArray("h2, h4, h5, p, button").forEach((element) => {
        gsap.from(element, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: "top 80%", // start when element is 80% from the top of the viewport
                toggleActions: "play none none none"
            }
        });
    });

    // Select all image elements (excluding navbar)
    gsap.utils.toArray(".img1,.img2,.img3,.img4,.img5").forEach((image) => {
        gsap.from(image, {
            opacity: 0,
            scale: 0.9,
            duration: 1.2,
            scrollTrigger: {
                trigger: image,
                start: "top 80%", // start when image is 80% from the top of the viewport
                toggleActions: "play none none none"
            }
        });
    });

    gsap.to(".marquee__content", {
        xPercent: -100, // Moves the content from right to left
        ease: "none", // Keeps the scrolling speed consistent
        duration: 45, // Duration for one complete scroll cycle
        repeat: -1, // Infinite loop
      });
});





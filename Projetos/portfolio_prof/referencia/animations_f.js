gsap.registerPlugin(ScrollTrigger) 

gsap.from("#hero", {
    opacity: 0,
    y: -100,
    duration: 1,
    ease: "power1.out",
});
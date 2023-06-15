let mediaSection = document.querySelectorAll('.has-parallax-scrolling .container');
gsap.registerPlugin(ScrollTrigger);

let isReducedMotion = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
let isDesktop = window.matchMedia('(min-width: 1024px)').matches;

if (mediaSection && isReducedMotion && isDesktop) {
  gsap.from('.has-parallax-scrolling .media-w-content__media--1', {
    scrollTrigger: {
      trigger: mediaSection,
      start: "top 80%",
      end: "center top",
      scrub: 1,
    },
    transform: "translateY(-50px)",
  })

  gsap.from('.has-parallax-scrolling .media-w-content__media--2', {
    scrollTrigger: {
      trigger: mediaSection,
      start: "top 80%",
      end: "center top",
      scrub: 1,
    },
    transform: "translateY(50px)",
  })
}
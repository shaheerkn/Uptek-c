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

let mainNav = document.querySelector('.main-navigation');
let headerHamburger = document.querySelector('.header__hamburger');
let body = document.querySelector('body');

if (mainNav && headerHamburger) {
  const handleMobileMenu = function() {
    mainNav.classList.toggle('show-mobile-nav')
    headerHamburger.classList.toggle('active')
  }

  window.addEventListener('click', (event) => {
    if (!mainNav.contains(event.target) && !headerHamburger.contains(event.target)) {
      mainNav.classList.remove('show-mobile-nav')
      headerHamburger.classList.remove('active')
    }
  })

  headerHamburger.addEventListener('click', handleMobileMenu)

  const buttons = document.querySelectorAll('.latest-blogs__read-btn');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      const buttonParent = button.parentElement;
      const image = buttonParent.querySelector('.img-cover')
      image.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', () => {
      const buttonParent = button.parentElement;
      const image = buttonParent.querySelector('.img-cover')
      image.style.transform = 'scale(1)';
    });
  });
}


let scrollMore = document.querySelector('.hero__scrolldown');
let firstSection = document.querySelector('.first-section')

if (scrollMore) {
  scrollMore.addEventListener('click', ()=> {
    firstSection.scrollIntoView({ behavior: "smooth"})
  })
}

window.addEventListener('DOMContentLoaded', () => {
  const reviewCard = document.querySelectorAll('.reviews__review');
  if (reviewCard && isDesktop) {
    let activeCardIndex = 0;

    function updateActiveCard() {
      reviewCard.forEach((card, index) => {
        if (index === activeCardIndex) {
          card.classList.add('reviews__review--active');
        } else {
          card.classList.remove('reviews__review--active');
        }
      });
    }
  
    function handleScroll() {
      const firstCard = reviewCard[activeCardIndex];
      const { top, bottom } = firstCard.getBoundingClientRect();
      const threshold = firstCard.offsetHeight - 100;
  
      if (top > window.innerHeight - threshold || bottom < threshold) {
        activeCardIndex = (activeCardIndex + 1) % reviewCard.length;
        updateActiveCard();
      }
    }
  }

  window.addEventListener('scroll', handleScroll);
});

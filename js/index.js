gsap.registerPlugin(ScrollTrigger);
let mediaSection = document.querySelectorAll('.has-parallax-scrolling .container');

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

// Secondary Hero Logo Icons animtions
if (isReducedMotion && isDesktop) {
  gsap.to('.logo-icon-1', {
    scrollTrigger: {
      trigger: '.hero--secondary',
      start: "top",
      end: "center top",
      scrub: 1,
    },
    bottom: '50'
  })
  
  gsap.to('.logo-icon-2', {
    scrollTrigger: {
      trigger: '.hero--secondary',
      start: "top",
      end: "center top",
      scrub: 1,
    },
    top: '50'
  })
}

// Mobile Navigation
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

//  Reviews Sections
let scrollMore = document.querySelector('.hero__scrolldown');
let firstSection = document.querySelector('.first-section')

if (scrollMore) {
  scrollMore.addEventListener('click', ()=> {
    firstSection.scrollIntoView({ behavior: "smooth"})
  })
}

const reviewCard = document.querySelectorAll('.reviews__review');
const threshold = 250;

if (reviewCard.length >= 1) {
  function updateActiveCard() {
    let activeCardIndex = 0;
  
    for (let i = 0; i < reviewCard.length; i++) {
      const card = reviewCard[i];
      const rect = card.getBoundingClientRect();
  
      if (rect.top <= threshold) {
        activeCardIndex = i;
      } else {
        break;
      }
    }
  
    reviewCard.forEach((card) => {
      card.classList.remove('reviews__review--active');
    });
  
    reviewCard[activeCardIndex].classList.add('reviews__review--active');
  }
  
  window.addEventListener('scroll', updateActiveCard);
  
  updateActiveCard();
}

let drawArrow = document.querySelector('.animated-arrow')

gsap.to(drawArrow, {
  scrollTrigger: {
    trigger: 'footer .btn-group',
    start: "top 85%",
    onEnter: () => {
    drawArrow.classList.add('animate');
    },
  }
})

const container = document.querySelectorAll('.container')[0];
const leftAlignWithContainer = document.querySelectorAll('.left-align-with-container');

console.log(leftAlignWithContainer.length)

if (container && leftAlignWithContainer.length >= 1) {
  function setMarginLeft () {
    let containerLeftMargin= container.offsetLeft
    leftAlignWithContainer.forEach(OnlyLeftAligncontainer => {
      console.log(OnlyLeftAligncontainer)
      OnlyLeftAligncontainer.style.cssText = `margin-left: ${containerLeftMargin}px`
    })
  }

  setMarginLeft()

  window.addEventListener('resize', ()=> {
    setMarginLeft()
  })
}

// Get all tab elements
const serviceTabs = document.querySelectorAll('.service-process__tab');

if (serviceTabs.length >= 1) {
  // Attach click event listeners to each tab
  serviceTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      serviceTabs.forEach(tab => {
        tab.classList.remove('active');
      });
      tab.classList.add('active');
    });
  });
}


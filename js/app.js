$(document).ready(() => {
  gsap.registerPlugin(ScrollTrigger)

  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  $('.testimonial-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  const tl = gsap.timeline();

  SplitType.create('.hero-txt')

  gsap.set(".char", {
    yPercent: 100
  })

  gsap.set(".line-inner", {
    yPercent: 100
  })

  gsap.set(".btn-bird", {
    opacity: 0
  })

  tl.to(".bar", {
    yPercent: -100,
    stagger: 0.05,
    duraton: 1.7,
    ease: "power2.inOut"
  }).to(".pre-loader", {
    yPercent: -100
  })

  tl.to(".char", {
    yPercent: 0,
    stagger: 0.05,
    duraton: 1.7,
    ease: "power2.out",
    delay: -.6,
  }, "cool kids")

  tl.to(".line-inner", {
    yPercent: 0,
    stagger: 0.05,
    duraton: 1.7,
    ease: "power2.out",
    delay: -.6,
  }, "cool kids")

  tl.to(".btn-bird", {
    opacity: 1,
    duraton: 1.7,
    ease: "power2.out",
    delay: -.6,
  }, "cool kids")

})
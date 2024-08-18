$(document).ready(() => {

  $(".btn-contact, .btn-bird").click(() => {
    window.location = "contact.html"
  })

  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);
  $(window).load(() => {

    const tl = gsap.timeline();

    SplitType.create('.hero-txt')
    SplitType.create('.about-sec-two-txt')

    gsap.set(".char", {
      yPercent: 100
    })

    gsap.set(".line-inner", {
      yPercent: 100
    })

    gsap.set(".btn-bird", {
      opacity: 0
    })

    tl.to("#loader", {
      yPercent: -100,
      ease: "elastic.in(1,0.3)"
      display: "none"
    })
    
    tl.to(".bar", {
      yPercent: -100,
      stagger: 0.05,
      ease: "power2.inOut",
      duration: 1.5
    }).to(".pre-loader", {
      yPercent: -100
    })

    gsap.to(".char", {
      scrollTrigger: {
        trigger: ".char"
      },
      yPercent: 0,
      duration: 1.2,
      stagger: 0.05,
      ease: "expo.out",
    })

    tl.to(".line-inner", {
      yPercent: 0,
      stagger: 0.05,
      duration: 1.7,
      ease: "expo.out",
      delay: -.6,
    }, "cool kids")

    tl.to(".btn-bird", {
      opacity: 1,
      duration: 1.7,
      ease: "expo.out",
      delay: -.6,
    }, "cool kids")


    var rule = CSSRulePlugin.getRule(".apart-img::after");

    const img_tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".apart-img img",
        start: "top center",
      }
    });

    img_tl.to(rule, {
      left: "-100%",
      duration: 1.7,
      ease: "expo.inOut"
    }).from(".apart-img img", {
      scale: 1.4,
      delay: -1.4,
      duration: 1.7,
      ease: "expo.inOut"
    });

    $('.hero-warpper').slick({
      autoplay: true,
      infinite: true,
      arrows: true,
      autoplaySpeed: 5000,
      speed: 1000
    });

    $('.testimonial-slider').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 1200,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 991,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
  })

  const imgReveal_tl = gsap.timeline({
    scrollTrigger: {
      trigger: "img-reveal",
      start: "center bottom",
      end: "bottom top",
      toggleActions: "play none none reverse",

    },
  })
  imgReveal_tl.fromTo(".ceo-img", { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "expo.out",
    duration: 2,
  })

})

$(document).ready(() => {

  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  $('.hero-warpper').slick({
    autoplay: true, 
    infinite: true,
    arrows: true,
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

  gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

  const tl = gsap.timeline();

  SplitType.create('.hero-txt')
  SplitType.create('.expertise-h2')
  SplitType.create('.apart')

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
    ease: "power2.inOut"
  }).to(".pre-loader", {
    yPercent: -100
  })

  let chars = gsap.utils.toArray(".char");

  chars.forEach((el, index) => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el
      },
      yPercent: 0,
      duration: 1.7,
      ease: "expo.out",
      delay: index * 0.05,
      toggleActions: "restart none none reverse"
    })
  });

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

  let expertImg = gsap.utils.toArray(".expertise");

  expertImg.forEach((el, index) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        toggleActions: "restart none none reverse"
      },
      scale: 0,
      duration: 1.7,
      delay: index * 0.09,
      ease: "expo.out"
    });
  })


  var rule = CSSRulePlugin.getRule(".apart-img::after");
  const img_tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".apart-img img",
      start: "top center",
      toggleActions: "restart none none reverse"
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

})

function getTransformOriginIndex(index, deg) {
  if (index === 0) {
    return deg + 90
  } else if (index === 1) {
    return deg
  } else if (index === 2) {
    return deg - 90 - 45
  } else if (index === 3) {
    return deg
  } else if (index === 4) {
    return deg + 90 + 45
  } else if (index === 5) {
    return deg
  } else if (index === 6) {
    return deg
  } else if (index === 7) {
    return deg
  } else {
    return deg
  }
}
export default class SvgAnime {
  constructor() {
    this.principles()
    this.target()
    this.data()
    this.dots()
  }
  principles() {
    let principlesSVG = document.querySelector('.anime-card--principles svg')
    if (!principlesSVG) return
    let principlesLines = document.querySelectorAll('.anime-card--principles line')
    let dur = 0.4
    let deg = 7
    var tl1 = gsap.timeline({ repeat: -1, yoyo: false, repeatDelay: dur * 4 });
    var tl2 = gsap.timeline({ repeat: -1, yoyo: true, ease: "power1.inOut", });
    gsap.set(principlesSVG,
      {
        rotate: 90,
        transformOrigin: "center center",
      })
    tl1.to(principlesSVG,
      {
        rotate: -135,
        duration: dur,
        transformOrigin: "center center",
        ease: "power1.inOut",
        repeatDelay: dur * 2,
      }, 0)
      .to(principlesSVG,
        {
          rotate: 90,
          duration: dur,
          transformOrigin: "center center",
          ease: "power1.inOut",
          repeatDelay: dur * 2,
        }, dur * 2)
    principlesLines.forEach((el, n) => {
      tl1.to(el,
        {
          rotate: getTransformOriginIndex(n, deg),
          duration: dur,
          transformOrigin: "center center",
          ease: "back.out",
          repeatDelay: dur * 4,
        }, 0)
        .to(el,
          {
            rotate: getTransformOriginIndex(n, 0) - deg,
            duration: dur * 2,
            transformOrigin: "center center",
            ease: "back.out",
            repeatDelay: dur * 4,
          }, dur)
        .to(el,
          {
            rotate: getTransformOriginIndex(n, 0),
            duration: dur,
            transformOrigin: "center center",
            ease: "back.out",
            repeatDelay: dur * 4,
          }, dur * 3)
    })

    const lineCoordDur = dur * 4

    tl2.to(principlesLines[0],
      { 
        duration: dur * 2,
        attr: { x2: 73 },
      }, lineCoordDur)
    tl2.to(principlesLines[1],
      { 
        duration: dur * 2,
        attr: { x2: 95, y2: 84.2028 },
      }, lineCoordDur)
    tl2.to(principlesLines[2],
      { 
        duration: dur * 2,
        attr: { x2: 2 },
      }, lineCoordDur)
    tl2.to(principlesLines[3],
      { 
        duration: dur * 2,
        attr: { x2: 93.8284, y2: 93 },
      }, lineCoordDur)
    tl2.to(principlesLines[4],
      { 
        duration: dur * 2,
        attr: { x2: 2},
      }, lineCoordDur)
    tl2.to(principlesLines[5],
      { 
        duration: dur * 2,
        attr: { y2: 96 },
      }, lineCoordDur)
    tl2.to(principlesLines[6],
      { 
        duration: dur * 2,
        attr: { x2: 2 },
      }, lineCoordDur)
    tl2.to(principlesLines[7],
      { 
        duration: dur * 2,
        attr: { x2: 83 },
      }, lineCoordDur)

  }
  target() {
    let target = document.querySelector('.anime-card--target')
    if (!target) return
    let circles = document.querySelectorAll('.anime-card--target circle')
    let dur = 0.8
    var tl1 = gsap.timeline({ repeat: -1, repeatDelay: dur * 1 });
    var tl2 = gsap.timeline({ repeat: -1, repeatDelay: dur * 4, delay: dur * 4 });

    for (let i = 0; i < 4; i++) {
      tl1.to(circles[i],
        {
          attr: { r: 14 },
          duration: dur,
          ease: "back.inOut",
          delay: dur * 0,
        }, 0)
    }
    for (let i = 1; i < 4; i++) {

      gsap.set(circles[i], {opacity: 0,})
      tl1.to(circles[i],
        {
          attr: { r: 34 },
          duration: dur,
          opacity: 1,
          ease: "back.inOut",
          delay: dur * 1,
        }, 0)
    }
    for (let i = 2; i < 4; i++) {
      tl1.to(circles[i],
        {
          attr: { r: 55 },
          duration: dur,
          opacity: 1,
          ease: "back.inOut",
          delay: dur * 2,
        }, 0)
    }
    for (let i = 3; i < 4; i++) {
      tl1.to(circles[i],
        {
          attr: { r: 78 },
          duration: dur,
          opacity: 1,
          ease: "back.inOut",
          delay: dur * 3,
        }, 0)
    }
    for (let i = 0; i < 4; i++) {
      tl2.to(circles[i],
        {
          attr: { r: 8 },
          opacity: !i ? 1 : 0,
          duration: dur,
          ease: "back.inOut",
          delay: dur * 0,
        }, dur * 0)
    }
  }
  data() {
    let data = document.querySelector('.anime-card--data')
    if (!data) return
    let circles = document.querySelectorAll('.anime-card--data path')
    let top = document.querySelectorAll('.anime-card--data .t1, .anime-card--data .t2, .anime-card--data .t3')
    let bot = document.querySelectorAll('.anime-card--data .b1, .anime-card--data .b2, .anime-card--data .b3')
    let dur = 0.8
    var tl1 = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: dur * 1 });

    for (let i = 0; i < 3; i++) {
      gsap.set(top[i],
        {
          translateY: '24%',
          transformOrigin: "center center",
        })
    }
    for (let i = 0; i < 3; i++) {
      gsap.set(bot[i],
        {
          translateY: '-24%',
          transformOrigin: "center center",
        })
    }
    for (let i = 0; i < 3; i++) {
      console.log(top[i])
      tl1.to(top[i],
        {
          translateY: 0,
          duration: dur,
          ease: "back.inOut",
          delay: dur * 0,
        }, 0)
    }
    for (let i = 0; i < 3; i++) {
      tl1.to(bot[i],
        {
          translateY: 0,
          duration: dur,
          ease: "back.inOut",
          delay: dur * 0,
        }, 0)
    }
    for (let i = 1; i < 3; i++) {
      console.log(top[i])
      tl1.to(top[i],
        {
          translateY: '-48%',
          duration: dur,
          ease: "back.inOut",
          delay: dur * 1,
        }, 0)
    }
    for (let i = 1; i < 3; i++) {
      tl1.to(bot[i],
        {
          translateY: '48%',
          duration: dur,
          ease: "back.inOut",
          delay: dur * 1,
        }, 0)
    }
    for (let i = 2; i < 3; i++) {
      console.log(top[i])
      tl1.to(top[i],
        {
          translateY: '-96%',
          duration: dur,
          ease: "back.inOut",
          delay: dur * 2,
        }, 0)
    }
    for (let i = 2; i < 3; i++) {
      tl1.to(bot[i],
        {
          translateY: '96%',
          duration: dur,
          ease: "back.inOut",
          delay: dur * 2,
        }, 0)
    }
  }
  dots() {
    let data = document.querySelector('.anime-card--dots')
    if (!data) return
    let circles = document.querySelectorAll('.anime-card--dots rect')
    let dur = 0.4
    var tl1 = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: dur * 1 });

    // for (let i = 0; i < circles.length; i++) {
    //   gsap.set(circles[i],
    //     {
    //       attr: { x: 80, y: 80 }
    //     })
    // }
    for (let i = 0; i < circles.length; i++) {
      tl1.to(circles[i],
        {
          attr: { x: 80, y: 80 },
          duration: dur,
          ease: "back.inOut",
          delay: dur * i,
        }, 0)
    }
  }
}
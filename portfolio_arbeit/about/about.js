gsap.to("h1", {
    text: "about.",
    duration: 2,
    repeat: 0,
    repeatDelay: .7,
})

gsap.from(".image_uni", {
    scrollTrigger: {
        trigger: ".personal",
        scrub: true,

    },
    yPercent: 40,
})

gsap.from(".about_uni", {
    scrollTrigger: {
        trigger: ".personal",
        scrub: true,

    },
    yPercent: -40,
    xPercent: -20,
})

gsap.from(".image_planet", {
    scrollTrigger: {
        trigger: ".personal",
        scrub: true,

    },
    yPercent: 40,
})

gsap.from(".about_languages", {
    scrollTrigger: {
        trigger: ".personal",
        scrub: true,

    },
    yPercent: -40,
    xPercent: 20,
})

gsap.from(".image_target", {
    scrollTrigger: {
        trigger: ".personal",
        scrub: true,

    },
    yPercent: 40,
})

gsap.from(".about_target", {
    scrollTrigger: {
        trigger: ".personal",
        scrub: true,

    },
    yPercent: -40,
    xPercent: -20,
})

gsap.from(".image_hobby", {
    scrollTrigger: {
        trigger: ".personal",
        scrub: true,

    },
    yPercent: 40,
})

gsap.from(".about_hobby", {
    scrollTrigger: {
        trigger: ".personal",
        scrub: true,

    },
    yPercent: -40,
    xPercent: 30,
})
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoConAnimate() {
    var videocon = document.querySelector("#video-container")
    var playbtn = document.querySelector("#play")

    videocon.addEventListener("mouseenter", () => {
        // playbtn.style.opacity = 1
        // playbtn.style.scale = 1

        gsap.to(playbtn, {
            scale: 1,
            opacity: 1
        })
    })

    videocon.addEventListener("mouseleave", () => {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0
        })
    })

    videocon.addEventListener("mousemove", (detail) => {
        gsap.to(playbtn, {
            left: detail.x - 50,
            top: detail.y - 80
        })
    })

}

videoConAnimate()

function loadingAnimation() {

    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        stragger: 0.2
    })

    gsap.from("#page1 #video-constainer", {
        scale: 0.9,
        opacity: 0,
        delay: 1.5,
        duration: 0.3
    })
}


loadingAnimation()
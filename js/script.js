$(document).ready(function () {
    //fact section
    $('.number').counterUp({
        delay: 10,
        time: 1000
    });
    
    //overlay
    $('.overlay').hide();
    $('.flag').click(function () {
        $('.overlay').toggle();
    })
    // Hero section slider
    $('.next').click(function () {
        gsap.from(".animateh1", { duration: 3, x: 300, opacity: 0, scale: 0.5, ease: "bounce" });
        gsap.from(".animate ", { duration: 3, x: 300, opacity: 0, scale: 0.5, ease: "bounce" });
    })
    $('.prev').click(function () {
        gsap.from(".animateh1", { duration: 3, x: -300, opacity: 0, scale: 0.5, ease: "bounce" });
        gsap.from(".animate", { duration: 3, x: -300, opacity: 0, scale: 0.5, ease: "bounce" });
    })
    //slider
    $(".testimonalparent .testimonalSlider").first().show().siblings().hide();
    setInterval(function () {
        $('.testimonalparent > .testimonalSlider').first().fadeOut(1000).next().fadeIn(1000).end().appendTo('.testimonalparent');
    }, 8000);
    //autoplay video
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        console.log($('body').width() + "  " + scroll);
        if (scroll >= 380 && scroll <= 1200) {
            $(".youtubevideo iframe").attr("src", $(".youtubevideo iframe").attr("src").replace("autoplay=0", "autoplay=1"));
            // $(".scrolldown a").hide();
            // gsap.fromTo(" h3", { autoAlpha: 0 }, { duration: 5, autoAlpha: 2 });
            // gsap.fromTo(" .button", { rotationX: 0 }, { duration: 1, rotationX: 360 });
        }
        else if (scroll > 1200 && scroll <= 1400 || scroll >= 2900 && scroll <= 3200) {
            gsap.fromTo(" h3", { autoAlpha: 0 }, { duration: 5, autoAlpha: 2 });
            gsap.fromTo(".button",{rotationX:0},{duration: 1, rotationX: 360});
        }
    });
})

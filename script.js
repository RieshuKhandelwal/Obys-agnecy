function locomotiveScrolltrigger(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });

}
function loadingAnimation(){
    var tl = gsap.timeline();

    tl.from(".line h1",{
        y:150, 
        stagger: 0.3,
        duration: 0.6,
        delay: 0.5,
    })

    tl.from("#part1",{
        opacity:0,
        onStart: function(){
            var h5timer = document.querySelector("#part1 h5");
            var grow = 0;

            setInterval(function() {
                if(grow<100){
                    h5timer.innerHTML = grow++;
                }else{
                    h5timer.innerHTML = grow;
                }
            }, 45);
        }
    })
    tl.to(".line h2",{
        animationName:"nowFlickerr",
        opacity:1,
    })
    tl.to(".line p",{
        opacity:1,
    })
    tl.to("#loader",{
        opacity:0,
        duration:0.3,
        delay:4.1,
    })
    tl.from("#page1",{
        delay:0.2,
        y:1200,
        opacity:0,
        duration:0.5,
        ease:Power4,
    })
    tl.to("#loader",{
        display:"none"
    })
    tl.from(".page1Main h1",{
        y:120,
        stagger:0.2,
    })
}
function cursorAnimation(){
    document.addEventListener("mousemove", function(a){
        gsap.to("#crsr",{
            left:a.x,
            top:a.y,
        })
    })
    
    Shery.makeMagnet("#navpart2 h5" /* Element to target.*/, {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
}
locomotiveScrolltrigger();
// loadingAnimation();
// cursorAnimation();





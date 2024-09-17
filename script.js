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

loadingAnimation();
cursorAnimation();



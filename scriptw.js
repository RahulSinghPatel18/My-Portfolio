function loco(){

    gsap.registerPlugin(ScrollTrigger);
    
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
    }
  
  loco();
function homepage(){

    var tl = gsap.timeline();
    tl.
    to("#fs",{
        width:"100%",

    })
    .to("#fs #logo img",{
        opacity:1,
        ease:Expo.easeInout,
        duration:1
    })
    .to("#fs #logo img",{
      opacity:0,
      ease:Expo.easeInout,
      duration:.5
    })

    .to("#fs",{
      delay:-.2,
        left:"100%",
        width:"0%",
        right:0,
        ease:Expo.easeInout,
    })
    .to("#part1 #works",{
      delay:.5,
      opacity:1
    })

}
function mobilenav(){

  document.querySelector(".mobileicon i")
  .addEventListener("click",function(elem){
     document.querySelector("#mobilenav").style. transform ="translateX(0)";
     document.querySelector("#mobilenav #logo i").style.display="initial";
     document.querySelector(".mobileicon i").style.display ="none";
  })
  
  document.querySelector("#mobilenav #logo i")
  .addEventListener("click",function(elem){
     document.querySelector("#mobilenav").style. transform ="translateX(100%)";
     document.querySelector("#mobilenav #logo i").style.display="none";
     document.querySelector(".mobileicon i").style.display ="initial";
  })
  
}

homepage();
mobilenav();
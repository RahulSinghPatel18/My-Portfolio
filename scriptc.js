function lineAnimation(){
    document.querySelectorAll(".s1")
 .forEach(function(text){
    text.addEventListener("mouseenter",function(dets){
         gsap.to(dets.target.children[1],{
             width:"100%",
             ease:Expo.easeInout,
             duration:.2
      })
    })
 })
 document.querySelectorAll(".s1")
 .forEach(function(text){
    text.addEventListener("mouseleave",function(dets){
         gsap.to(dets.target.children[1],{
             width:"0%",
             left:"100%",
             ease:Expo.easeInout,
             duration:.2,
             onComplete:function(){
                dets.target.children[1].style.left=0;
             }
      })
    })
 })
 }

 function homepage(){

    var tl= gsap.timeline();
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
                    .to("#t1,#t2",{
                        y:0,
                        ease:Expo.easeInout,
                    })
                    .to(".social a,h3",{
                        opacity:1,
                        stagger:.1,
                        ease:Expo.easeInout,
                        duration:2
                    })
                    .to(".header h1,h5",{
                        delay:-2,
                        y:0,
                        ease:Expo.easeInout,
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
lineAnimation();
homepage();
mobilenav()


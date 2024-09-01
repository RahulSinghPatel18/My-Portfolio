function span(){
    var h1=document.querySelectorAll(".reveal")
    .forEach(function(elem){
        var clutter="";
        elem.textContent.split("").forEach(function(char){
            clutter+=`<span>${char}</span>`;
        })
        elem.innerHTML=clutter;
    })

 }

 function homepageAnimation(){

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
         duration:1
      })
      .to("#fs",{
         delay:-.2,
         left:"100%",
         width:"0%",
         right:0,
         ease:Expo.easeInout,
      })
      .to("#part1 #text",{
      delay:.5,
      opacity:1
      })
      .to("#part1 #text .h1s h1 span",{
         opacity:1,
         stagger:.1,
         duration:2
      })
      .to("#part1 #text p,.button",{
         delay:-2,
         x:0,
         ease:Expo.easeInout,
         duration:.5
      })
      .to(".scroll",{
         delay:-1,
         opacity:1,
         ease:Expo.easeInout,
         duration:.5
      })
 }

function bottomtextScroll(){


   var tl=gsap.timeline({
      repeat:-1
   });
   tl.
   to(".bottom .scroll h5",{
      x:-20,
      ease:Expo.easeInout,
      duration:1
   },'a')
   .to(".bottom .scroll h5",{
      delay:1,
      x:0,
      ease:Expo.easeInout,
      duration:1
   },'a')

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

 
 span();
 homepageAnimation();
 bottomtextScroll();
 mobilenav();
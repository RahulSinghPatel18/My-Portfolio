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
const header = document.querySelector(".nav-bar");  //classnamnet (eller id-namnet beroende av vad ni satt i html:en) på er navbar
const target = document.querySelector("#about-section"); //classnamnet (eller id-namnet beroende av vad ni satt i html:en) på det element som kommer trigga style-ändringen när man scrollar till det

window.addEventListener("load", function () {
  document.addEventListener("scroll", () => {
    if (window.scrollY >= target.getBoundingClientRect().top) {
      header.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
      header.style.marginTop = "0px";
    } else {
      header.style.backgroundColor = "transparent";
      header.style.marginTop = "30px";
    }
  });
})
// Toggle menu script here
var menuList = document.getElementById("menuList");
            menuList.style.maxWidth = "0px";
            function togglemenu(){

                if(menuList.style.maxWidth == "0px"){
                    menuList.style.maxWidth = "150px"
                    
                }
                else{
                    menuList.style.maxWidth = "0px"
                   
                }

            }
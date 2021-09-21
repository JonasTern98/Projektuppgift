var className = "inverted";
var scrollTrigger = 60;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
    document.getElementById('nav-bar').style.marginTop = '40px';
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
    document.getElementById('nav-bar').style.marginTop = '40px';
  }
};

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:5,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[3000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active1");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

$( document ).ready(function() {
    var mixer = mixitup('mixit');
});

// *****************************side nav**************************
var menubtn = document.getElementById("menu-btn");
var sidenav = document.getElementById("side-nav")
sidenav.style.right = "-25rem";
menubtn.onclick = function(){
    if(sidenav.style.right == "-25rem"){
        sidenav.style.right = "0";
    }
    else{
        sidenav.style.right = "-25rem"
    }
}
//up and down arrow
mybutton = document.getElementById("up");
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop >20 || document.documentElement.scrollTop > 20)
        {
            mybutton.style.display = "block";
        }else{
            mybutton.style.display = "none";
        }
}
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
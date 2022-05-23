
var menu = document.querySelector("#menu")
var left = document.querySelector(".navbar")
menu.onclick = function(){
    left.classList.toggle("navToggle")
}
var logi = document.querySelector("#login")
var forms = document.querySelector(".login-form")
logi.onclick = function(){
    forms.classList.add("doSth");
}
var close = document.querySelector(".clears")
close.onclick = function(){
    forms.classList.remove("doSth")
}
var sect = document.querySelector('section')
var leff = document.querySelector('.navbar ul li a')
// sect = function () {
//     let top = (window).scrollTo();
//     let height = (this).height();
//     let id = (this).attr('id');
//     let offset = (this).offset().top - 200;

//     if(top > offset && top < offset + height){
//         leff.classList.remove('active')
//         left.classList.find('[href="#${id}"]').classList.add('active')
//     }

// }
// for (var i = 0; i < btns.length; i++) {
//     a[i].addEventListener("click", function() {
//       var current = document.getElementsByClassName("active");
//       current[0].className = current[0].className.replace(" active", "");
//       this.className += " active";
//     });
//   }
// e = document.querySelector('.active')
// function myFunction(e) {
//     if (document.querySelector('.active') !== null) {
//       document.querySelector('.active').classList.remove('active');
//     }
//     e.target.className = "active";
//   }
var element = document.getElementsByClassName("list")[0];
element.addEventListener("click", myFunction);
function myFunction(e) {
	var elems = document.querySelector(".active");
    if(elems !=null) {
      elems.classList.remove("active");
    }
    e.target.className = "active";
	}
// $(document).ready(function(){

//     $(window).on('load scroll', function(){
//         $('#menu').removeClass('logo');
//         $('.navbar').removeClass('nav-toggle');
//     })

// })
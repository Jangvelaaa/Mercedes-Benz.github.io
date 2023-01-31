const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 4000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}
 


const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);



window.addEventListener("scroll", function(){
	var header = this.document.querySelector("header");
	header.classList.toggle("sticky",this.window.scrollY > 0);
})
 



var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

function validated(){
	if (email.value.length < 9) {
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		email.focus();
		return false;
	}
	if (password.value.length < 6) {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}

	if (password2.value.length < 6) {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		password.focus();
		return false;
	}

}
function email_Verify(){
	if (email.value.length >= 8) {
		email.style.border = "1px solid silver";
		email_error.style.display = "none";
		return true;
	}
}
function pass_Verify(){
	if (password.value.length >= 5) {
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
}



 
const getCookie = (name) => {
	const value = " " + document.cookie;
	console.log("value", `==${value}==`);
	const parts = value.split(" " + name + "=");
	return parts.length < 2 ? undefined : parts.pop().split(";").shift();
  };
  
  const setCookie = function (name, value, expiryDays, domain, path, secure) {
	const exdate = new Date();
	exdate.setHours(
	  exdate.getHours() +
		(typeof expiryDays !== "number" ? 365 : expiryDays) * 24
	);
	document.cookie =
	  name +
	  "=" +
	  value +
	  ";expires=" +
	  exdate.toUTCString() +
	  ";path=" +
	  (path || "/") +
	  (domain ? ";domain=" + domain : "") +
	  (secure ? ";secure" : "");
  };

 const $cookiesBanner = document.querySelector(".cookies-eu-banner");
const $cookiesBannerButton = $cookiesBanner.querySelector("button");
const cookieName = "cookiesBanner";
const hasCookie = getCookie(cookieName);

if (!hasCookie) {
  $cookiesBanner.classList.remove("hidden");
}

$cookiesBannerButton.addEventListener("click", () => {
  setCookie(cookieName, "closed");
  $cookiesBanner.remove();
});






$(function() {
	$('.acc_ctrl').on('click', function(e) {
	  e.preventDefault();
	  if ($(this).hasClass('active')) {
		$(this).removeClass('active');
		$(this).next()
		.stop()
		.slideUp(300);
	  } else {
		$(this).addClass('active');
		$(this).next()
		.stop()
		.slideDown(300);
	  }
	});
  });






  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".menuItem");
  const hamburger= document.querySelector(".hamburger");
  const closeIcon= document.querySelector(".closeIcon");
  const menuIcon = document.querySelector(".menuIcon");
  
  function toggleMenu() {
	if (menu.classList.contains("showMenu")) {
	  menu.classList.remove("showMenu");
	  closeIcon.style.display = "none";
	  menuIcon.style.display = "block";
	} else {
	  menu.classList.add("showMenu");
	  closeIcon.style.display = "block";
	  menuIcon.style.display = "none";
	}
  }
  
  hamburger.addEventListener("click", toggleMenu);
  
  menuItems.forEach( 
	function(menuItem) { 
	  menuItem.addEventListener("click", toggleMenu);
	}
  )






  
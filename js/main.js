
// navbar variables
let btn = document.querySelector(".nav-button-toggler")
let links = document.querySelector(".navbar-links")
let toggleIcon = document.querySelector(".fa-bars")



// nav toggle function
btn.onclick = function(){
    links.classList.toggle("active")
    if(toggleIcon.classList.contains("fa-bars")){
        toggleIcon.classList.replace("fa-bars", "fa-x");
    }
    else{
        toggleIcon.classList.replace("fa-x", "fa-bars")
    }
}

//=== toggle menu and go to section
let navItems = document.querySelectorAll(".nav-item")

navItems.forEach(item => {

    item.onclick = function(){
        links.classList.toggle("active")
    if(toggleIcon.classList.contains("fa-bars")){
        toggleIcon.classList.replace("fa-bars", "fa-x");
    }
    else{
        toggleIcon.classList.replace("fa-x", "fa-bars")
    }

    }
})

// shopping cart toggle function
let cartShopping = document.querySelector(".cart-shopping");
let cartBox = document.querySelector(".cart-box")

cartShopping.onclick = function() {
    cartBox.classList.toggle("cart-active")
}



// Set Name in Footer
let Creator  = document.querySelector(".footer-bottom-text span");
Creator.innerHTML = "Mohamed Adel"



// Get Button To Scroll
let btnUp = document.querySelector(".btn-up")

// FunctionGo Display Button
window.onscroll = function() {
    if(window.scrollY>= 800){
        btnUp.style.display = "block"
    }
    else{
        btnUp.style.display = "none"
    }
}

// FunctionGo To Top OF Page
btnUp.addEventListener("click" ,() => {
    window.scrollTo({
        top : 0,
        right : 0,
        behavior: "smooth",
    }) 
} )

//-====================

wow = new WOW(
    {
      animateClass: 'animated',

    }
  );
wow.init();


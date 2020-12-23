


// burger menu
let mobileMenu = document.querySelector(".nav-mobile-menu")
let mainMenu = document.querySelector(".navigation-nav")

mobileMenu.addEventListener("click", function() {
    mobileMenu.classList.toggle("active-menu")
    if(mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu");
    }else{
        mainMenu.classList.remove("active-menu");
    }
})





// subscribe modal form
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn-close-up")

function closeModal() {
    modal.classList.remove("show");
    modal.classList.add("hide")
}

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}


closeBtn.addEventListener("click", closeModal)

modal.addEventListener('click',function(e) {
    if(e.target === modal) {
        closeModal()
    }
});

function showModalByScroll() {
    if(window.pageYOffset > document.documentElement.scrollHeight/2) {
        openModal()
window.addEventListener("scroll",showModalByScroll);

    }
}

window.addEventListener("scroll",showModalByScroll)



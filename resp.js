burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
// rightnav = document.querySelector('.rightnav')

burger.addEventListener('click', ()=>{
    // rightnav.classList.toggle('b-class-resp');
    navList.classList.toggle('b-class-resp');
    navbar.classList.toggle('h-nav-resp');
})
window.addEventListener('scroll', function(){
    const nav = document.querySelector('nav');
    nav.classList.toggle("sticky", window.scrollY > 0);
});

function toogleMenu(){
    const menuToogle = document.querySelector('.menu-toogle');
    const navItems = document.querySelector('.nav-items');
    menuToogle.classList.toggle('active')
    navItems.classList.toggle('active')
}

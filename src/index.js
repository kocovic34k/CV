import "./styles/style.scss";

const navigationItems = document.querySelectorAll('.navbar a');

const toggleActiveNavItem = function() {
    navigationItems.forEach(item => {
        item.classList.remove('active');
    });
    this.classList.add('active');
};

navigationItems.forEach(item => {
    item.addEventListener('click', toggleActiveNavItem);
});

window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
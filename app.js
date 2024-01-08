const header = document.querySelector(".header");

function setHeaderSticky() {
    header.classList.toggle("is-sticky", window.scrollY > 50);
}

document.addEventListener('scroll', function () {
    setHeaderSticky();
});


function makeBurger() {
    const button = document.querySelector(".burger");
    const menu = document.querySelector(".menu");
    console.log(button)
    button.onclick = () => {
        menu.classList.toggle("is-show");
        button.classList.toggle("burger-open");
    }
}

makeBurger();


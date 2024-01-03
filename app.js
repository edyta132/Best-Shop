const header = document.querySelector(".header");

function setHeaderSticky() {
    header.classList.toggle("is-sticky", window.scrollY > 50);
}

document.addEventListener('scroll', function () {
    setHeaderSticky();
});

makeBannerAnim();

function makeBurger() {
    const button = document.querySelector(".burger");
    const menu = document.querySelector(".menu");

    button.onclick = () => {
        menu.classList.toggle("is-show");
    }
}

makeBurger();



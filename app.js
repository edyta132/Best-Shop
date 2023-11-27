const header = document.querySelector(".header");

function setHeaderSticky() {
    header.classList.toggle("is-sticky", window.scrollY > 100);
}

document.addEventListener('scroll', function () {
    setHeaderSticky();
})
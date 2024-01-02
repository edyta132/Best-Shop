const header = document.querySelector(".header");
function setHeaderSticky() {
    header.classList.toggle("is-sticky", window.scrollY > 50);
}
document.addEventListener("scroll", function() {
    setHeaderSticky();
});

//# sourceMappingURL=index.7c0ccee6.js.map

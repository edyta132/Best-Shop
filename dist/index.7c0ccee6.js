const header = document.querySelector(".header");
function setHeaderSticky() {
    header.classList.toggle("is-sticky", window.scrollY > 50);
}
document.addEventListener("scroll", function() {
    setHeaderSticky();
});
function makeBurger() {
    const button = document.querySelector(".burger");
    const menu = document.querySelector(".menu");
    button.onclick = ()=>{
        menu.classList.toggle("is-show");
        button.classList.toggle("burger-open");
    };
}
makeBurger();
// ------------ KALKULATOR---------------------------------
const calcForm = document.querySelector(".calc__form");
const products = document.querySelector("#products");
const orders = document.querySelector("#orders");
const _package = document.querySelector("#package");
const accounting = document.querySelector("#accounting");
const terminal = document.querySelector("#terminal");
const listItem = document.querySelectorAll(".list__item");
const summaryPrice = document.querySelector("#total-price");
const selectInput = document.querySelector(".select__input");
const selectDropdown = document.querySelector(".select__dropdown");
const formCheckbox = document.querySelectorAll(".form__checkbox");
const totalPrice = document.querySelector(".total__price");
let productsSum = 0;
let ordersSum = 0;
let basicSum = 0;
let professionalSum = 0;
let premiumSum = 0;
let accountingSum = 0;
let terminalSum = 0;
function calculateTotal() {
    totalPrice.innerText = `$${productsSum + ordersSum + basicSum + premiumSum + professionalSum + accountingSum + terminalSum}`;
}
calcForm.addEventListener("input", function(e) {
    summaryPrice.classList.add("open");
    calculateTotal();
});
products.addEventListener("input", function() {
    calculatePriceProducts();
    calculateTotal();
});
orders.addEventListener("input", function() {
    calculatePriceOrders();
    calculateTotal();
});
function calculatePriceProducts() {
    if (products.value > 0) listItem.forEach(function(el) {
        if (el.dataset.id === "products") {
            el.classList.add("open");
            el.children[1].innerText = products.value + " * " + "$0.5";
            productsSum = products.value * 0.5;
            el.children[2].innerText = "$" + productsSum;
        }
    });
    else {
        const el1 = document.querySelector(`[data-id="products"]`);
        el1.classList.remove("open");
        productsSum = 0;
    }
}
function calculatePriceOrders() {
    if (orders.value > 0) listItem.forEach(function(el) {
        if (el.dataset.id === "orders") {
            el.classList.add("open");
            el.children[1].innerText = orders.value + " * " + "$0.5";
            ordersSum = orders.value * 0.5;
            el.children[2].innerText = "$" + ordersSum;
        }
    });
    else {
        const el1 = document.querySelector(`[data-id="orders"]`);
        el1.classList.remove("open");
        ordersSum = 0;
    }
}
// function calculatePrice(element, dataId) {
//     console.log(dataId);
//     if (element.value > 0) {
//         listItem.forEach(function (el) {
//             if (el.dataset.id === dataId) {
//                 el.classList.add('open');
//                 if (dataId === 'products') {
//                     el.children[1].innerText = element.value + ' * ' + '$0.5';
//                     productsSum = element.value * 0.5;
//                     el.children[2].innerText = '$' + productsSum
//                 }
//                 if (dataId === 'orders') {
//                     el.children[1].innerText = element.value + ' * ' + '$0.25';
//                     ordersSum = element.value * 0.25;
//                     el.children[2].innerText = '$' + ordersSum
//                 }
//             }
//         })
//     } else {
//         const el1 = document.querySelector(`[data-id="${dataId}"]`);
//         el1.classList.remove('open');
//         productsSum = 0;
//         ordersSum = 0;
//     }
// }
_package.addEventListener("click", function() {
    _package.classList.toggle("open");
});
selectDropdown.addEventListener("click", chooseOption);
calculateTotal();
selectDropdown.addEventListener("click", calculateTotal);
function chooseOption(event) {
    if (event.target.dataset.value === "basic") listItem.forEach(function(el) {
        if (el.dataset.id === "package") {
            el.classList.add("open");
            el.children[1].innerText = "Basic";
            basicSum = 40;
            el.children[2].innerText = `$${basicSum}`;
            selectInput.innerText = "Basic";
        }
    });
    else basicSum = 0;
    if (event.target.dataset.value === "premium") listItem.forEach(function(el) {
        if (el.dataset.id === "package") {
            el.classList.add("open");
            el.children[1].innerText = "Premium";
            premiumSum = 80;
            el.children[2].innerText = `$${premiumSum}`;
            selectInput.innerText = "Premium";
        }
    });
    else premiumSum = 0;
    if (event.target.dataset.value === "professional") listItem.forEach(function(el) {
        if (el.dataset.id === "package") {
            el.classList.add("open");
            el.children[1].innerText = "Professional";
            professionalSum = 60;
            el.children[2].innerText = `$${professionalSum}`;
            selectInput.innerText = "Professional";
        }
    });
    else professionalSum = 0;
}
accounting.addEventListener("change", function() {
    clickCheckboxAccounting();
    calculateTotal();
});
terminal.addEventListener("change", function() {
    clickCheckboxTerminal();
    calculateTotal();
});
// function clickCheckbox(element, dataId) {
//     if (element.checked) {
//         listItem.forEach(function (el) {
//             if (el.dataset.id === dataId) {
//                 el.classList.add('open');
//                 if (dataId === 'accounting') {
//                     el.children[1].innerText = '$20'
//                 } else {
//                     el.children[1].innerText = '$40'
//                 }
//             }
//         })
//     }
// }
function clickCheckboxAccounting() {
    if (accounting.checked) listItem.forEach(function(el) {
        if (el.dataset.id === "accounting") {
            el.classList.add("open");
            accountingSum = 20;
            el.children[1].innerText = `$${accountingSum}`;
        }
    });
    else {
        const el1 = document.querySelector(`[data-id="accounting"]`);
        el1.classList.remove("open");
        accountingSum = 0;
    }
}
function clickCheckboxTerminal() {
    if (terminal.checked) listItem.forEach(function(el) {
        if (el.dataset.id === "terminal") {
            el.classList.add("open");
            terminalSum = 40;
            el.children[1].innerText = `$${terminalSum}`;
        }
    });
    else {
        const el1 = document.querySelector(`[data-id="terminal"]`);
        el1.classList.remove("open");
        terminalSum = 0;
    }
}

//# sourceMappingURL=index.7c0ccee6.js.map

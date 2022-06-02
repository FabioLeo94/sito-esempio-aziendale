let cards = document.querySelectorAll("[class*='hiking-']>[class*='container-']");
let delay = window.screen.availHeight - 50;
setInterval(() => {
    cards.forEach((el, id) => {
        let bounds = el.getBoundingClientRect();
        if (bounds.top > delay && (id % 2 !== 0)) {
            el.style.transform = "translateX(100vw)";
        } else if (bounds.top > delay && (id % 2 === 0)) {
            el.style.transform = "translateX(-100vw)"
        } else {
            el.style.transform = "translateX(0px)";
        }
    })
}, 10)
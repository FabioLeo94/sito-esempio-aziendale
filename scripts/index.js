const shopBtn = document.querySelector(".shop-btn");
const storyBtn = document.querySelector(".story-btn");
const explorationBtn = document.querySelector(".exploration-btn");
const hikeBtn = document.querySelector(".hike-btn");

const mobileMenu = document.querySelector(".menu-icon");
const sideMenu = document.querySelector(".side-menu");

shopBtn.addEventListener("mouseover", (btn) => {

})

mobileMenu.addEventListener("click", () => {
    if (sideMenu.getClientRects().item(0).width < 1) {
        sideMenu.style.width = "100vw";
        scrollDisabler = false;
        document.body.style.overflow = "hidden";
    } else {
        sideMenu.style.width = "0";
        scrollDisabler = true;
        document.body.style.overflow = "visible";
    }

})
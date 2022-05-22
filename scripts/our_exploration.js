const cardsContainer = document.querySelector(".cards-container");

// CARDS THAT WILL BE LOADED ON START
const cards = [
    [0, "/resources/images/explorations/forest-fog.jpg", "alternative text", "Title", "Short description", "Full-description"],
    [1, "/resources/images/explorations/canyon.jpg", "alternative text", "Title", "Short description", "Full-description"],
    [2, "/resources/images/explorations/canyoning.jpg", "alternative text", "Title", "Short description", "Full-description"],
    [3, "/resources/images/explorations/cave1.jpg", "alternative text", "Title", "Short description", "Full-description"],
    [4, "/resources/images/explorations/lake1.jpg", "alternative text", "Title", "Short description", "Full-description"],
    [5, "/resources/images/explorations/mountain-cliff.jpg", "alternative text", "Title", "Short description", "Full-description"],
];

// ONLOAD ACTIONS
window.onload = () => {
    cards.forEach(el => {
        cardsBuilder(el[0], el[1], el[2], el[3], el[4])
    });
}

// BUILDING CARDS FROM ARRAY DATAS
function cardsBuilder(id, src, altTxt, titleTxt, shortDescTxt) {
    let card = document.createElement("div");
    let imgContainer = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("p");
    let desc = document.createElement("p");

    // SETTING ATTRIBUTE
    card.setAttribute("class", "exploration-card");
    card.setAttribute("identifier", id);
    imgContainer.setAttribute("class", "img-container");
    img.setAttribute("src", src);
    img.setAttribute("alt", altTxt);
    title.setAttribute("class", "card-title");
    desc.setAttribute("class", "card-par");

    // APPLY TEXT TO TITLE AND DESC
    title.innerHTML = titleTxt;
    desc.innerHTML = shortDescTxt;

    // ASSEMBLYING COMPONENTS
    card.appendChild(title);
    imgContainer.appendChild(img);
    card.appendChild(imgContainer);
    card.appendChild(desc);

    // INSERT CARD IN THE CARDS CONTAINER
    cardsContainer.appendChild(card);
}
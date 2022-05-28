// INITIALIZING GLOBAL VARIABLES AND SELECTORS
const cardsContainer = document.querySelector(".cards-container");
const fullDescriptionContainer = document.querySelector(".exp-full-content");

const cardsList = [];
var fullDescriptionView = false;
var currentCard;

// CARDS THAT WILL BE LOADED ON START
const placeHolder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut diam interdum neque viverra laoreet. Suspendisse accumsan ipsum vel elementum aliquam. Sed tincidunt nisi quis bibendum faucibus. Nam vehicula orci id dictum egestas. Integer lobortis rhoncus pellentesque. Vivamus quis metus id sapien imperdiet fermentum. Mauris vitae iaculis elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas eu ultricies magna. Cras egestas tellus sed dui ultricies lobortis. Proin felis diam, dignissim vel eros tincidunt, tincidunt pretium velit. Vivamus at venenatis ligula. Aliquam a turpis magna. Aliquam erat volutpat. Sed venenatis, metus et auctor ultricies, nibh elit luctus ex, eget dapibus ante risus sit amet risus. Aenean porta vitae nisi id elementum. Donec sit amet finibus libero, ut pharetra quam. Sed imperdiet dictum pharetra. Etiam ultricies massa sit amet arcu dapibus consequat. Pellentesque in porta augue. Aliquam mauris arcu, lacinia non nibh non, ullamcorper posuere magna. Curabitur iaculis condimentum velit, sed faucibus enim mollis eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis turpis felis, commodo eget justo nec, pharetra venenatis diam. Integer at purus porttitor, accumsan libero sed, molestie sapien. Suspendisse varius libero eget mauris vehicula, interdum luctus neque vehicula. Aliquam ultrices nibh id arcu dapibus hendrerit. Donec ut dapibus velit. Nunc felis massa, interdum eget rhoncus a, vulputate ut felis. Sed ut pulvinar orci, et cursus sapien. Praesent malesuada, nibh quis consequat tincidunt, nisi mi convallis diam, finibus finibus ante ipsum eget magna. Praesent eget consectetur mauris, vitae consectetur mauris. Sed sit amet lectus rutrum nisl tristique feugiat eget nec nisl. Duis commodo eleifend imperdiet. Nam molestie eu lectus at auctor. Nunc eget nulla at ligula ultrices hendrerit non ut lectus. Aenean consequat placerat scelerisque. Pellentesque quis ex non justo mattis mattis. Aenean auctor fermentum diam, sed pharetra nunc sodales sit amet. Cras malesuada molestie enim, eu ultrices magna tempus gravida. Maecenas hendrerit porta nisi, a finibus ligula mattis ac. Mauris condimentum, ipsum molestie fringilla interdum, arcu ligula mollis nisi, nec condimentum felis ipsum sit amet mi. Nulla ac molestie massa. Aliquam at eleifend libero. Pellentesque et accumsan ipsum. Maecenas a quam ligula. Proin diam justo, dictum vitae placerat eu, volutpat porta nisi. Nunc placerat lectus a molestie aliquam. Praesent in nulla volutpat dolor suscipit cursus bibendum quis nulla. Phasellus aliquam odio ante. Curabitur molestie neque quis turpis sodales porta. Nulla libero felis, finibus ac ullamcorper in, semper eu risus. Aliquam at nisi vitae magna lobortis rhoncus at id mi.";
const cards = [
    [0, "/resources/images/explorations/forest-fog.jpg", "Fog in the forest", "Forests", "Short description", placeHolder],
    [1, "/resources/images/explorations/canyon.jpg", "Canyon", "Canyions", "Short description", placeHolder],
    [2, "/resources/images/explorations/canyoning.jpg", "Canyon with river", "Canyoning", "Short description", placeHolder],
    [3, "/resources/images/explorations/cave1.jpg", "Cave", "Caves", "Short description", placeHolder],
    [4, "/resources/images/explorations/lake1.jpg", "Lake", "Lakes", "Short description", placeHolder],
    [5, "/resources/images/explorations/mountain-cliff.jpg", "Mountain cliff", "Mountains", "Short description", placeHolder],
];

// ONLOAD ACTIONS
window.onload = () => {
    cards.forEach(el => {
        cardsBuilder(el[0], el[1], el[2], el[3], el[4])
    });
    const cardsList = document.querySelectorAll(".exploration-card");
    cardsList.forEach(el => {
        el.onclick = () => {
            fullDescriptionBuilder(el.getAttribute("identifier"));
        }
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

function fullDescriptionBuilder(id) {
    /* 
        when cliking on the same card that is just opened, full desc panel
        will be closed and all styling back to default.
    */
    fullDescriptionContainer.innerHTML = "";

    if (currentCard === parseInt(id)) {
        fullDescClose();
        return;
    }

    let img = document.createElement("img");
    let par = document.createElement("p");
    let title = document.createElement("p");
    let button = document.createElement("button");

    button.style.width = "100px";
    button.style.position = "absolute";
    button.style.right = "10px";
    button.style.top = "10px";
    button.innerHTML = "Close";

    button.setAttribute("onclick", "fullDescClose()");

    title.innerHTML = cards[id][3];
    title.style.fontWeight = "bolder";
    title.style.fontSize = "25px";
    title.style.textAlign = "center";
    title.style.margin = "10px 0";

    img.setAttribute("src", cards[id][1]);
    img.setAttribute("alt", cards[id][2]);
    img.style.width = "400px";
    img.style.float = "left";
    img.style.margin = "20px";
    img.style.border = "3px solid black";

    par.style.margin = "25px";
    par.style.hyphens = "auto";
    par.style.textAlign = "justify";
    par.style.fontSize = "18px";

    // SETTING UP FULL-DESCRIPTION-PANEL AND STYLING CARDS-CONTAINERS AND CARDS
    fullDescriptionView = true;
    currentCard = parseInt(id);

    fullDescriptionContainer.appendChild(button);
    fullDescriptionContainer.appendChild(title);
    fullDescriptionContainer.appendChild(img);
    fullDescriptionContainer.appendChild(par);
    par.innerHTML = cards[id][5];

    fullDescriptionContainer.style.height = "100%";
    fullDescriptionContainer.style.display = "block";

    cardsContainer.style.height = "fit-content";
    cardsContainer.style.flexWrap = "nowrap";
    cardsContainer.style.justifyContent = "left";

    document.querySelectorAll(".exploration-card").forEach(el => {
        el.style.height = "50px";
        el.style.width = "100%";
        el.style.alignItems = "center";
        el.style.overflowY = "hidden";
        el.style.overflowX = "hidden";
        el.style.margin = "0";
        if(el.getAttribute("identifier") == parseInt(id)){
            el.style.backgroundColor = "rgb(53, 56, 199)";
            el.style.color = "white";
        }else{
            el.style.backgroundColor = "";
            el.style.color = "";

        }
    })

}

function fullDescClose(){
    fullDescriptionView = false;
    currentCard = NaN;
    fullDescriptionContainer.style.display = "none";
    fullDescriptionContainer.innerHTML = "";
    cardsContainer.style.flexWrap = "wrap";

    cardsContainer.style.height = "max-content";
    cardsContainer.style.justifyContent = "";

    document.querySelectorAll(".exploration-card").forEach(el => {
        el.style.height = "";
        el.style.width = "";
        el.style.overflowY = "";
        el.style.overflowX = "";
        el.style.backgroundColor = ""
        el.style.color = "";
        el.style.margin = "10px 0";
    })
    return;
}
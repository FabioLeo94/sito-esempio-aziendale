const articles = document.body.querySelector("#article-container");
const chartItemsContainer = document.querySelector(".chart-items");
const totalPrice = document.querySelector("#chart-total-price");
const ecommerceBody = document.querySelector(".ecommerce-body");

let articlesPath = "/resources/shop_article/";
let articlesList = [
    [0, articlesPath + "backpack1.png", "\"Big Banana\" v3000 ", Math.floor(Math.random()*1000).toString() + "€", Math.floor(Math.random() * 20)],
    [1, articlesPath + "backpack2.png", "\"DrugDealer\" essentials", Math.floor(Math.random()*1000).toString() + "€", Math.floor(Math.random() * 20)],
    [2, articlesPath + "backpack3.png", "\"Toilet\" red version", Math.floor(Math.random()*1000).toString() + "€", Math.floor(Math.random() * 20)],
    [3, articlesPath + "backpack4.png", "\"IperDick\" X03VH2", Math.floor(Math.random()*1000).toString() + "€", Math.floor(Math.random() * 20)],
    [4, articlesPath + "backpack5.png", "\"Wanker Ranger\" noobs model", Math.floor(Math.random()*1000).toString() + "€", Math.floor(Math.random() * 20)],
    [5, articlesPath + "camping_tent1.png", "\"Happy Homeless\"", Math.floor(Math.random()*1000).toString() + "€", Math.floor(Math.random() * 20)],
    [6, articlesPath + "camping_tent2.png", "\"Big-Wreck\" condominium size", Math.floor(Math.random()*1000).toString() + "€", Math.floor(Math.random() * 20)],
    [7, articlesPath + "camping_tent3.png", "\"Green House\" skyscraper size", Math.floor(Math.random()*1000).toString() + "€", Math.floor(Math.random() * 20)],
    [8, articlesPath + "camping_tent4.png", "\"Brainless hut\"", Math.floor(Math.random()*1000).toString() + "€", Math.floor(Math.random() * 20)],
    [9, articlesPath + "canteen1.png", "\"Glù Glù\" red version", Math.floor(Math.random()*1000).toString() + "€", Math.floor(Math.random() * 20)],
    [10, articlesPath + "canteen2.png", "\"Back To Wank\" with your EX picture!", Math.floor(Math.random()*100).toString() + "€", Math.floor(Math.random() * 20)],
    [11, articlesPath + "canteen3.png", "\"Blue Cistern\" camel size", Math.floor(Math.random()*1000).toString() + "€", Math.floor(Math.random() * 20)],
    [12, articlesPath + "carabiner1.png", "\"Clik-clack\" carabiner", Math.floor(Math.random()*1000).toString() + "€", Math.floor(Math.random() * 20)],
    [13, articlesPath + "carabiner2.png", "\"Double clik-clack\" for mor click-clack sitation", Math.floor(Math.random()*1000).toString() + "€", Math.floor(Math.random() * 20)],
    [14, articlesPath + "carabiner3.png", "\"Azure Click\" now without clack!", Math.floor(Math.random()*1000).toString() + "€", Math.floor(Math.random() * 20)],
    [15, articlesPath + "carabiner4.png", "\"Cliiiiick-Claaaaack\" longest version!", Math.floor(Math.random()*1000).toString() + "€", Math.floor(Math.random() * 20)],
    [16, articlesPath + "climbing_harness1.png", "\"kentflay\" harness for climbing", Math.floor(Math.random()*1000).toString() + "€", Math.floor(Math.random() * 20)],
    [17, articlesPath + "climbing_harness2.png", "\"Big Horny\" ultimate climbing harness version", Math.floor(Math.random()*1000).toString() + "€", Math.floor(Math.random() * 20)],
    [18, articlesPath + "ice_axe1.png", "\"Chap-chap\"", Math.floor(Math.random()*1000).toString() + "€", Math.floor(Math.random() * 20)],
    [19, articlesPath + "rope1.png", "\"Nice Falling\" climbing rope", Math.floor(Math.random()*1000).toString() + "€", Math.floor(Math.random() * 20)],
    [20, articlesPath + "rope2.png", "\"Kidnapper\" hight resistence", Math.floor(Math.random()*1000).toString() + "€", Math.floor(Math.random() * 20)],
    [21, articlesPath + "rope3.png", "\"Gallows\" 10 dishwashers longer!!", Math.floor(Math.random()*1000).toString() + "€", Math.floor(Math.random() * 20)],
    [22, articlesPath + "rope4.png", "\"Viper's cuddler\" for fearless people", Math.floor(Math.random()*1000).toString() + "€", Math.floor(Math.random() * 20)],
    [23, articlesPath + "water_bottle1.png", "\"Nasty Bottle\" for medieval people", Math.floor(Math.random()*1000).toString() + "€", Math.floor(Math.random() * 20)],
];

let myChart = [];
let myChartEl = [];

window.onload = () => {
    articlesList.forEach(el => {
        articlesBuilder(el[0], el[1], el[2], el[3], el[4]);
        mobileArticleBuilder(el[0], el[1], el[2], el[3], el[4]);
    });
    
    //mobileArticleBuilder(articlesList[0][0], articlesList[0][1], articlesList[0][2], articlesList[0][3], articlesList[0][4]);
    chartArrayBuilder();
}

// SHOP ARTICLE BUILDER
function articlesBuilder(articleId, imgUrl, articleName, articlePrice, avaliblePiece) {
    // CREATING ELEMENTS FOR THE ROW
    let row = document.createElement("tr");
    let data1 = document.createElement("td");
    let data2 = document.createElement("td");
    let data3 = document.createElement("td");
    let data4 = document.createElement("td");
    let data5 = document.createElement("td");
    let button = `<td><button class="quick-buy-btn" identifier="${articleId}""${parseInt(avaliblePiece) < 1 && ' disabled '}" style="user-select: none;" onclick="buyBtn(event)">Add</button></td>`

    // CREATING ELEMENT FOR THE DATA
    let id = document.createElement("p");
    let img = document.createElement("img");
    let name = document.createElement("p");
    let price = document.createElement("p");
    let avalible = document.createElement("p");

    // INSERTING DATA IN ELEMENTS
    id.innerHTML = articleId;
    img.setAttribute("class", "articles-image");
    img.setAttribute("src", imgUrl);
    img.setAttribute("alt", articleName);
    img.setAttribute("title", articleName);
    name.innerHTML = articleName;
    price.innerHTML = articlePrice;
    avalible.innerHTML = avaliblePiece === 0 ? "Unavalible!" : avaliblePiece;

    // BUILD THE ROW
    data1.appendChild(id);
    data2.appendChild(img);
    data3.appendChild(name);
    data4.appendChild(price);
    data5.appendChild(avalible);

    row.appendChild(data1);
    row.appendChild(data2);
    row.appendChild(data3);
    row.appendChild(data4);
    row.appendChild(data5);
    row.innerHTML += button;

    // SETTING ROW IDENTIFIER
    row.setAttribute("identifier-shop", articleId)
        // SCRIPTING ROW POPUP
    row.setAttribute("onclick", "articlePopup(event)")
        // AVALIBILITY MARKER
    avaliblePiece === 0 && (row.style.backgroundColor = "rgba(255, 124, 124, 0.9)");
    // APPEND ROW TO THE TABLE
    articles.appendChild(row);

    // console.log(row);
}

function articlePopup(e) {
    let currentArticle = e.currentTarget.getAttribute("identifier-shop");
    articlePopupBuilder(currentArticle)
}

// ARTICLE POPUP
function articlePopupBuilder(articleId) {
    if (articleId === null || articleId === NaN) {
        console.log("Errore:", "Articolo non disponibile o inesistente");
        return;
    }
    // console.log(arguments[0]);

    let result = "";

    return result;
}

//CHART ROW ITEM-AMOUNT FINDER
function currentRowAmount(id) {
    const res = document.querySelector(`.chart-items tr td input[identifier-amount="${id.toString()}"]`);
    return res;
}

//BUY BUTTON
function buyBtn(e) {
    e.stopPropagation();
    let currentId = e.currentTarget.getAttribute("identifier");

    if (myChart.find(val => val[0] === parseInt(currentId)) === undefined) {
        myChart.push(articlesList[currentId]);
        myChart.find(val => {
            if (val[0] === parseInt(currentId)) {
                val[5] = 1;
            };
        });
    } else {
        myChart.find(val => {
            if (val[0] === parseInt(currentId) && val[5] >= 10) {
                return;
            }
            if (val[0] === parseInt(currentId)) {
                val[5]++;
                currentRowAmount(currentId).value++;
            }
        })
    }

    chartArrayBuilder();
}


//AMOUNT UPDATER FROM INPUT
function inputAmountUpdate(e) {
    let currentId = e.currentTarget.getAttribute("identifier-amount");
    let currentValue = parseInt(e.currentTarget.value);
    if (currentValue < 1) {
        myChart.forEach((val, index) => {
            if (val[0] === parseInt(currentId)) {
                myChart.splice(index, 1);
                chartArrayBuilder();
                return;
            }
        })
        chartArrayBuilder();
        return;
    }
    myChart.forEach(val => {
        if (val[0] === parseInt(currentId)) {
            val[5] = currentValue;
        }
        let amount = 0;
        myChart.forEach(el => {
            // chartItemsContainer.appendChild(chartItemsBuilder(el[0], el[2], el[3], el[5]));
            amount += (parseInt(el[3]) * parseInt(el[5]));
        });
        totalPrice.innerHTML = `Total: ${amount.toLocaleString()}€`;
    })
}

// DELETE ITEM FROM CHART
function deleteChartItem(e) {
    let currentId = parseInt(e.currentTarget.getAttribute("identifier-amount"));
    myChart.forEach((val, index) => {
        if (val[0] === parseInt(currentId)) {
            myChart.splice(index, 1);
        }
    })
    chartArrayBuilder();
    return;
}

// CHART ITEM BUILDER
function chartItemsBuilder(id, name, price, amount) {
    // NEW CHART ROW
    let newTr = document.createElement("tr");
    let newTdId = document.createElement("td");
    let newTdName = document.createElement("td");
    let newTdPrice = document.createElement("td");
    let newTdAmount = document.createElement("td");
    let newTdDeleteBtn = document.createElement("td");
    let newDeleteBtnImg = document.createElement("img");

    // NEW CHART ELEMENTS
    let newAmountNum = document.createElement("input");

    //SET ATTRIBUTES
    newAmountNum.setAttribute("type", "number");
    newAmountNum.setAttribute("min", "0");
    newAmountNum.setAttribute("max", "10");
    newAmountNum.setAttribute("oninput", "inputAmountUpdate(event)");
    newAmountNum.setAttribute("class", "item-amount");
    // newAmountNum.setAttribute("readOnly", "");
    newAmountNum.setAttribute("identifier-amount", id)

    newDeleteBtnImg.setAttribute("src", "/resources/icons/red-cross.png");
    newDeleteBtnImg.setAttribute("alt", "red cross");
    newDeleteBtnImg.setAttribute("title", "Rimuovi questo articolo dalla lista.");
    newDeleteBtnImg.setAttribute("identifier-amount", id)
    newDeleteBtnImg.setAttribute("onclick", "deleteChartItem(event)");
    newDeleteBtnImg.style.userSelect = "none";
    newDeleteBtnImg.ondragstart = (e)=>{e.preventDefault()};

    // STYLING
    newAmountNum.style.width = "60px";
    newDeleteBtnImg.style.width = "20px";

    // ROW IDENTIFIER
    newTr.setAttribute("identifier-chart", id);

    // INSERT DATA IN ROW-DATA
    newTdId.innerHTML = id;
    newTdName.innerHTML = name;
    newTdPrice.innerHTML = price;
    newAmountNum.value = amount;

    // ROW MOUNTING
    newTr.appendChild(newTdId);
    newTr.appendChild(newTdName);
    newTr.appendChild(newTdPrice);
    newTr.appendChild(newTdAmount);
    newTdAmount.appendChild(newAmountNum);
    newTr.appendChild(newTdDeleteBtn);
    newTdDeleteBtn.appendChild(newDeleteBtnImg);
    return newTr;
}

/* 
Il ChartArrayBuilder oltre a costruire la struttura del carrello, calcola anche
il totale della somma degli oggetti al suo interno.
*/
function chartArrayBuilder() {
    chartItemsContainer.innerHTML = "";
    totalPrice.innerHTML = "";
    let amount = 0;
    // CONTROLLA SE myChart CONTIENE QUALCOSA
    if (myChart.length === 0) {
        let newCell = document.createElement("td");
        newCell.setAttribute("colspan", "4")
        newCell.style.border = "1px solid black"
        newCell.style.textAlign = "center";
        newCell.innerHTML = "The chart is empty!";
        chartItemsContainer.appendChild(newCell);
        totalPrice.innerHTML = `Total: ${amount.toLocaleString()}€`;
        return;
    }else{
        myChart.forEach(el => {
            chartItemsContainer.appendChild(chartItemsBuilder(el[0], el[2], el[3], el[5]));
            amount += (parseInt(el[3]) * parseInt(el[5]));
        });
        totalPrice.innerHTML = `Total: ${amount.toLocaleString()}€`;
    }
}

// FOR MOBILES
function mobileArticleBuilder(id, imgUrl, itemName, price, avalible){
    // CREATING TAGS FOR MOBILE LAYOUT
    let container = document.createElement("div");
    let itemDescContainer = document.createElement("div");
    let itemTitle = document.createElement("p");
    let itemImg = document.createElement("img");
    let itemPrice = document.createElement("p");
    let avalibleContainer = document.createElement("div");
    let avalibleCount = document.createElement("p");
    let buyButton = `<button class="quick-buy-btn" identifier="${id}""${parseInt(avalible) < 1 && ' disabled '}" style="user-select: none;" onclick="buyBtn(event)">Add</button>`;

    // SETTING ATTRIBUTES
    container.setAttribute("class", "item-container-mobile");
    itemDescContainer.setAttribute("class", "item-desc-container-mobile");
    itemTitle.setAttribute("class", "item-name-mobile")
    itemTitle.innerHTML = itemName;

    itemImg.setAttribute("class", "item-img-mobile")
    itemImg.setAttribute("src", imgUrl);
    itemImg.setAttribute("alt", itemName);
    itemImg.setAttribute("title", itemName);

    itemPrice.innerHTML = price;

    avalibleContainer.setAttribute("class", "avalible-items-container-mobile");
    avalibleCount.innerHTML = avalible === 0 ? "Unavalible!": ("Avalible: " + avalible);

    // styling
    avalible === 0 && (container.style.backgroundColor = "rgba(255, 124, 124, 0.9)");
    // MOUNTING TAGS
    avalibleContainer.appendChild(avalibleCount);
    avalibleContainer.appendChild(itemPrice);
    avalibleContainer.innerHTML += buyButton;

    itemDescContainer.appendChild(itemTitle);
    itemDescContainer.appendChild(itemImg);

    container.appendChild(itemDescContainer);
    container.appendChild(avalibleContainer);

    ecommerceBody.appendChild(container);
}
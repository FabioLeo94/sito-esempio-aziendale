const articles = document.body.querySelector("#article-container");
const chartItemsContainer = document.querySelector(".chart-items");

let articlesPath = "/resources/shop_article/";
let articlesList = [
    [1, articlesPath + "backpack1.png", "A backpack", "100€", Math.floor(Math.random() * 20)],
    [2, articlesPath + "backpack2.png", "A backpack", "200€", Math.floor(Math.random() * 20)],
    [3, articlesPath + "backpack3.png", "A backpack", "1000€", Math.floor(Math.random() * 20)]
];

let myChart = [];

window.onload = () => {
    articlesList.forEach(el => {
        articlesBuilder(el[0], el[1], el[2], el[3], el[4])
    });
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

// QUICK BUY BUTTON
function buyBtn(e) {
    e.stopPropagation();
    let currentId = e.currentTarget.getAttribute("identifier") - 1;
    let currentArticle = [] = articlesList[currentId]
    console.log("BUTTON: ",currentArticle);
    if (currentArticle[4] === 0) {
        return;
    }
    if (myChart.includes(articlesList[currentId])) {
        amountUpdate(currentId, 1);
        return;
    }
    
    currentArticle.push(1);
    myChart.push(currentArticle);
    // console.log(currentArticle);
    
    chartItemsBuilder(currentArticle[0], currentArticle[2], currentArticle[3], currentArticle[currentArticle.length - 1])
}

// AMOUNT UPDATER
function amountUpdate(id = "", amount = 0) {
    strId = id.toString();
    if (!myChart.includes(articlesList[strId])) {
        return;
    }

    totalPrice()

    const amountInput = document.querySelector(`tr[identifier-chart="${id+1}"] .item-amount`);

    if (amountInput.value >= parseInt(amountInput.getAttribute("max"))) { return; } //IF AMOUNT IS MAX THE VALUE DOESN'T INCREASE
    let theArticle = myChart.find(val => val === articlesList[strId]);
    theArticle[theArticle.length - 1] += 1;
    amountInput.value = theArticle[theArticle.length - 1];

}

// TOTAL PRICE AMOUNT
function totalPrice() {
    if (myChart.length < 0){console.log("ERRORE: Non ci sono items nel carrello"); return;}
    let amountList = [];
    let total = 0;
    myChart.forEach(val => amountList.push(val[5]));
    amountList.forEach(num => total += num);
    console.log(total);
}

//AMOUNT UPDATER FROM INPUT
function inputAmountUpdate(e) {
    let currentArticleId = e.currentTarget.getAttribute("identifier-amount");
    const currentRow = document.querySelector(`tr[identifier-chart="${currentArticleId}"]`);
    let currentValue = parseInt(e.currentTarget.value);
    if (currentValue < 1) { //IF AMOUNT GO UNDER 1 THE ARTICLE WILL BE REMOVED FROM THE CHART
        currentRow.remove();
        myChart.splice(parseInt(currentArticleId) - 1, 1);
        return;
    }else{
        console.log("TROVA L'ERRORE: " , currentArticleId);
        myChart[parseInt(currentArticleId) - 1][5] = currentValue;
    }
}

// CHART ITEM BUILDER
function chartItemsBuilder(id, name, price, amount) {
    // NEW CHART ROW
    let newTr = document.createElement("tr");
    let newTdId = document.createElement("td");
    let newTdName = document.createElement("td");
    let newTdPrice = document.createElement("td");
    let newTdAmount = document.createElement("td");

    // NEW CHART ELEMENTS
    let newAmountNum = document.createElement("input");

    //SET ATTRIBUTES
    newAmountNum.setAttribute("type", "number");
    newAmountNum.setAttribute("min", "0");
    newAmountNum.setAttribute("max", "10");
    newAmountNum.setAttribute("oninput", "inputAmountUpdate(event)");
    newAmountNum.setAttribute("class", "item-amount");
    newAmountNum.setAttribute("identifier-amount", id)

    // STYLING
    newAmountNum.style.width = "60px";

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
    chartItemsContainer.appendChild(newTr);
    console.log(newTr)
}
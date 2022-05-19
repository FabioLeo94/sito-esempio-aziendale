const articles = document.body.querySelector("#article-container");
const chartItemsContainer = document.querySelector(".chart-items");
const totalPrice = document.querySelector("#chart-total-price");

let articlesPath = "/resources/shop_article/";
let articlesList = [
    [0, articlesPath + "backpack1.png", "A backpack", "100€", Math.floor(Math.random() * 20)],
    [1, articlesPath + "backpack2.png", "A backpack", "200€", Math.floor(Math.random() * 20)],
    [2, articlesPath + "backpack3.png", "A backpack", "1000€", Math.floor(Math.random() * 20)]
];

let myChart = [];
let myChartEl = [];

window.onload = () => {
    let test = document.createElement("button");
    test.setAttribute("onclick", "test()");
    test.innerHTML = "TESTTT";
    document.body.appendChild(test);
    articlesList.forEach(el => {
        articlesBuilder(el[0], el[1], el[2], el[3], el[4])
    });
}

function test() {
    console.log(myChart);
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

//CHART ROW FINDER
function currentRow(id) {
    const res = document.querySelector(`.chart-items tr[identifier-chart="${id.toString()}"]`);
    return res;
}

//CHART ROW ITEM-AMOUNT FINDER
function currentRowAmount(id) {
    const res = document.querySelector(`.chart-items tr td input[identifier-amount="${id.toString()}"]`);
    return res;
}

//[RETURN] CURRENT myChart ITEM
function findMyChartItem(id) {
    return myChart.forEach(val => {
        val[0] === parseInt(id);
    })
}

//[DELETE] CURRENT myChart ITEM
function currentMyChartItem(id) {
    return myChart.forEach(val => {
        if (val[0] === parseInt(id)) {
            myChart.splice(val, 1);
        }
    });
}
//[DELETE] CURRENT myChartEl ITEM
function currentMyChartElItem(id) {
    return myChartEl.forEach(val => {
        if (val[0] === parseInt(id)) {
            myChartEl.splice(val, 1);
        }
    });
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

// AMOUNT UPDATER
function buttonAmountUpdate(id = "", amount = 0) {
    if (currentRowAmount(id).value >= 10) { return; }
    currentRowAmount(id).value++;
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
    myChart.forEach(el => {
        chartItemsContainer.appendChild(chartItemsBuilder(el[0], el[2], el[3], el[5]));
        amount += (parseInt(el[3]) * parseInt(el[5]));
    });
    totalPrice.innerHTML = `Total: ${amount.toLocaleString()}€`;
}
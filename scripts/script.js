function init(){
    renderMainDish();
    renderSubtotal();
    renderTotal();
}

function renderMainDish(){
    let contentRef = document.getElementById("main");
    contentRef.innerHTML = "";

    for (let indexMain = 0; indexMain < food.length; indexMain++) {
        contentRef.innerHTML += getFoodTemplate(indexMain);
    }
}

function getFoodTemplate(indexMain){
    return `
            <div class="food-temp">
            <div class="food-temp-head">
            <div class="food-temp-name">${food[indexMain].name}</div>
            <button onclick="addToBasket(${indexMain})" class="button-plus"><i class="fa-solid fa-plus"></i></button>
            </div>

            <div class="food-temp-desc">${food[indexMain].description}</div>
            <div class="food-temp-price">${food[indexMain].price.toFixed(2).replace("." ,",")}€</div>
            </div>
    
    `
}



function addToBasket(indexMain) {
    let addName = food[indexMain].name;
    let addPrice = food[indexMain].price;

    let existingIndex = basket.findIndex(item => item.name === addName);

    if (existingIndex !== -1) {
        basket[existingIndex].amount++;
    } else {
        basket.push({
            "name": addName,
            "price": addPrice,
            "amount": 1
        });
    }

    renderBasket();
    renderSubtotal();
    renderTotal();
}


function renderBasket(){
    let basketContentRef = document.getElementById("inner-basket");
    basketContentRef.innerHTML = "";

    for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
        basketContentRef.innerHTML += getBasketTemplate(indexBasket);
    }
}


function getBasketTemplate(indexBasket){

    let totalPrice = (basket[indexBasket].price * basket[indexBasket].amount).toFixed(2).replace(".", ",");

    return `
            
            <div class="inner-basket-temp-wrapper">
                <div class="inner-basket-name">${basket[indexBasket].name}</div>

                    <div class="inner-basket-temp">

                        <i onclick="subtractAmount(${indexBasket})"  class="fa-solid fa-minus"></i>

                        <p>${basket[indexBasket].amount} x</p>

                        <i onclick="addAmount(${indexBasket})" class="fa-solid fa-plus"></i>

                        <p id="basket-total-${indexBasket}">${totalPrice}€</p>

                        <i onclick="deleteItem(${indexBasket})" class="fa-solid fa-trash-can"></i>

                    </div>

            </div>
    `
}


function addAmount(indexBasket) {
    basket[indexBasket].amount++;
    renderBasket();
    renderSubtotal();
    renderTotal();
}


function subtractAmount(indexBasket) {
    if (basket[indexBasket].amount > 1) {
        basket[indexBasket].amount--;
    } else {
        basket.splice(indexBasket, 1);
    }
    renderBasket();
    renderSubtotal();
    renderTotal();
}


function deleteItem(indexBasket) {
    basket.splice(indexBasket, 1);
    renderBasket();
    renderSubtotal();
    renderTotal();
}



function renderSubtotal() { 
    let subtotalRef = document.getElementById("subtotal");
    let subtotal = 0;

    for (let indexSubtotal = 0; indexSubtotal < basket.length; indexSubtotal++) {
        subtotal += basket[indexSubtotal].price * basket[indexSubtotal].amount;
    }

    subtotalRef.innerHTML = `${subtotal.toFixed(2).replace(".", ",")}€`;
}


function renderTotal() {
    let totalRef = document.getElementById("total");
    let subtotalRef = document.getElementById("subtotal");
    let delRef = document.getElementById("delivery");

    let subtotalText = subtotalRef.innerText.replace("€", "").replace(",", ".");
    let deliveryText = delRef.innerText.replace("€", "").replace(",", ".");

    let subtotal = parseFloat(subtotalText); 
    let delivery = parseFloat(deliveryText); //parseFloat wandelt string in number um (hier "4.00" zu 4.00)

    let total = subtotal + delivery;

    totalRef.innerHTML = `${total.toFixed(2).replace(".", ",")}€`;
}
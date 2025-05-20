function init(){
    renderMainDish();
    renderSubtotal();
    renderTotal();
    emptyCheck();
}

function renderMainDish(){
    let contentRef = document.getElementById("main");
    contentRef.innerHTML = "";

    for (let indexMain = 0; indexMain < food.length; indexMain++) {
        contentRef.innerHTML += getFoodTemplate(indexMain);
    }
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
    emptyCheck();
}


function renderBasket(){
    let basketContentRef = document.getElementById("inner-basket");
    
    basketContentRef.innerHTML = "";

    
    for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
            basketContentRef.innerHTML += getBasketTemplate(indexBasket);
    }
    

    renderSubtotal();
    renderTotal();
    emptyCheck();
}


function addAmount(indexBasket) {
    basket[indexBasket].amount++;
    renderBasket();
    renderSubtotal();
    renderTotal();
    emptyCheck();
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
    emptyCheck();
}


function deleteItem(indexBasket) {
    basket.splice(indexBasket, 1);
    renderBasket();
    renderSubtotal();
    renderTotal();
    emptyCheck();
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


function emptyCheck(){
    let emptyInfoRef = document.getElementById("empty-info");

    if (basket.length === 0) {
        emptyInfoRef.classList.remove("d-none");
        emptyInfoRef.classList.add("inner-basket-empty");

    } else {
        emptyInfoRef.classList.add("d-none");
        emptyInfoRef.classList.remove("inner-basket-empty");
    }
}


function cancelDelivery(){
    let checkbox = document.getElementById("takeaway-checkbox");
    let delivery = document.getElementById("delivery");

    if (checkbox.checked) {
        delivery.textContent = "0,00€";
    } else {
        delivery.textContent = "4,00€";
    }

    renderTotal();
}


// noch to do

// beilagen

// responsivness, warenkorb

// footer




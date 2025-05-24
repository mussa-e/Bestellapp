function init(){
    renderMainDish();
    renderSubtotal();
    renderTotal();
    emptyCheck();
    renderSides();
    renderDrinks();
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




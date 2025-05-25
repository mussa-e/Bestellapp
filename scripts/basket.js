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


function getBasketTemplate(indexBasket){

    let totalPrice = (basket[indexBasket].price * basket[indexBasket].amount).toFixed(2).replace(".", ",");

    return `
            
            <div class="inner-basket-temp-wrapper">
                <div class="inner-basket-name">${basket[indexBasket].name}</div>

                    <div class="inner-basket-temp">

                        <i onclick="subtractAmount(${indexBasket})"  class="fa-solid fa-minus"></i>

                        <p>${basket[indexBasket].amount} x</p>

                        <i onclick="addAmount(${indexBasket})" class="fa-solid fa-plus"></i>

                        <p>${totalPrice}€</p>

                        <i onclick="deleteItem(${indexBasket})" class="fa-solid fa-trash-can"></i>

                    </div>

            </div>
    `
}
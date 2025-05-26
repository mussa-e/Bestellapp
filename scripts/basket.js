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
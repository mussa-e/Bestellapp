function renderDrinks(){
    let contentRefDrinks = document.getElementById("drinks");
    contentRefDrinks.innerHTML = "";

    for (let indexDrinks = 0; indexDrinks < drinks.length; indexDrinks++) {
        contentRefDrinks.innerHTML += getDrinksTemplate(indexDrinks);
        
    }
}


function getDrinksTemplate(indexDrinks){
    return  `
    
    <div class="food-temp">
                <div class="food-temp-head">
                    <div class="food-temp-name">${drinks[indexDrinks].name}</div>
                    <button onclick="addDrinksToBasket(${indexDrinks})" class="button-plus"><i class="fa-solid fa-plus"></i></button>
                </div>

                <div class="food-temp-desc">${drinks[indexDrinks].description}</div>
                <div class="food-temp-price">${drinks[indexDrinks].price.toFixed(2).replace("." ,",")}€</div>
            </div>
    
    `
}


function addDrinksToBasket(indexDrinks) {
    let addName = drinks[indexDrinks].name;
    let addPrice = drinks[indexDrinks].price;

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
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


function getDrinksTemplate(indexDrinks){
    return  `
    
    <div class="food-temp">
                <div class="food-temp-head">
                    <div class="food-temp-name">${drinks[indexDrinks].name}</div>
                    <button onclick="addToBasket(${indexDrinks}, drinks)" class="button-plus"><i class="fa-solid fa-plus"></i></button>
                </div>

                <div class="food-temp-desc">${drinks[indexDrinks].description}</div>
                <div class="food-temp-price">${drinks[indexDrinks].price.toFixed(2).replace("." ,",")}€</div>
            </div>
    `
}


function getFoodTemplate(indexMain){
    return `
            <div class="food-temp">
                <div class="food-temp-head">
                    <div class="food-temp-name">${food[indexMain].name}</div>
                    <button onclick="addToBasket(${indexMain}, food)" class="button-plus"><i class="fa-solid fa-plus"></i></button>
                </div>

                <div class="food-temp-desc">${food[indexMain].description}</div>
                <div class="food-temp-price">${food[indexMain].price.toFixed(2).replace("." ,",")}€</div>
            </div>
    `
}


function getSidesTemplate(indexSides){
    return  `
    
    <div class="food-temp">
                <div class="food-temp-head">
                    <div class="food-temp-name">${sides[indexSides].name}</div>
                    <button onclick="addToBasket(${indexSides}, sides)" class="button-plus"><i class="fa-solid fa-plus"></i></button>
                </div>

                <div class="food-temp-desc">${sides[indexSides].description}</div>
                <div class="food-temp-price">${sides[indexSides].price.toFixed(2).replace("." ,",")}€</div>
            </div>
    `
}
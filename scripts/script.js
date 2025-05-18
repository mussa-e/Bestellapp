

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



function addToBasket(indexMain){
    let addName = food[indexMain].name;
    let addPrice = food[indexMain].price;

    basket.push({
                    "name" : addName,
                    "price" : addPrice
    })

    renderBasket();
}


function renderBasket(){
    let basketContentRef = document.getElementById("inner-basket");
    basketContentRef.innerHTML = "";

    for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
        basketContentRef.innerHTML += getBasketTemplate(indexBasket);
    }
}


function getBasketTemplate(indexBasket){
    return `
            
            <div class="inner-basket-temp-wrapper">
                <div class="inner-basket-name">${basket[indexBasket].name}</div>

                    <div class="inner-basket-temp">

                        <i onclick="countDown()"  class="fa-solid fa-minus"></i>

                        <p>${basket[indexBasket].price.toFixed(2).replace("." ,",")}€</p>

                        <i onclick="countUp()" class="fa-solid fa-plus"></i>

                        <p></p>

                        <i onclick="delete()" class="fa-solid fa-trash-can"></i>

                    </div>

            </div>
    `
}







// function renderSides(){

// }

// function renderDrinks(){

// }
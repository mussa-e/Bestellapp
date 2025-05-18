

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
            <button class="button-plus"><i class="fa-solid fa-plus"></i></button>
            </div>

            <div class="food-temp-desc">${food[indexMain].description}</div>
            <div class="food-temp-price">${food[indexMain].price.toFixed(2).replace("." ,",")}€</div>
            </div>
    
    `
}



// function renderSides(){

// }

// function renderDrinks(){

// }
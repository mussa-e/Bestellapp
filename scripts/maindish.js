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
    emptyCheck();
}
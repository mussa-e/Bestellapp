function renderRespBasket(){
    let respBasket = document.getElementById("basket-wrapper");
    
    respBasket.classList.toggle("basket-wrapper-new");
    

    document.body.classList.toggle("no-scroll");
    document.getElementById("basket").classList.toggle("no-sticky");
}


// function toggleSticky(){
//     let Ref = document.getElementById("basket");

//     if (basket.length > 3) {
//         Ref.classList.add("no-sticky-basket");
//     }
//     else{
//         Ref.classList.remove("no-sticky-basket");
//     }
// }


function order(){
    basket.splice(0, basket.length);

    renderBasket();

    let info = document.getElementById("info");
    info.style.display = 'block';
    setTimeout(() => info.style.display = 'none', 2000);
}
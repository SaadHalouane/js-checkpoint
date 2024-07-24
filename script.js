var totalPrice = document.querySelector(".total").textContent; 
console.log(totalPrice)


function addItem(){
    var plus = document.querySelector(".quantity").textContent;
    var newQuantity = parseInt(plus) + 1 ;
    console.log(newQuantity)
    document.querySelector(".quantity").textContent = newQuantity;
}
function substractItem(){
    var minus = document.querySelector(".quantity").textContent;
    if (minus>0){
        var newQuantity = parseInt(minus) - 1 ;
        console.log(newQuantity)
        document.querySelector(".quantity").textContent = newQuantity;
    }
  
}
function redHeart(){
    var heart = document.querySelector(".fa-heart")
    console.log(heart)
    heart.classList.toggle('redheart')
}
function addItemSecond(){
    var add = document.getElementById("quant").textContent;
    var newQuant = parseInt(add) + 1 ;
    console.log(newQuant)
    document.getElementById("quant").textContent = newQuant;
}


function substractItemSecond(){
    var minuss = document.getElementById("quant").textContent;
    if (minuss>0){
        var newQuant = parseInt(minuss) - 1 ;
        console.log(newQuant)
        document.getElementById("quant").textContent = newQuant;
    }
  
}


function addItemThird(){
    var ad = document.getElementById("quan").textContent;
    var newQuan = parseInt(ad) + 1 ;
    console.log(newQuan)
    document.getElementById("quan").textContent = newQuan;
}

function substractItemThird(){
    var minu = document.getElementById("quan").textContent;
    if (minu>0){
        var newQuan = parseInt(minu) - 1 ;
        console.log(newQuan)
        document.getElementById("quan").textContent = newQuan;
    }
  
}
function calculateResult(){
    var number = document.querySelector(".unit-price").textContent;
    number = number.replace("$", "")
    console.log(number)
}

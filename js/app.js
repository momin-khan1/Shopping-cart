// Cassing Increasing And Decrement

function updateProductNumber(product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let ProductTotal = productInput.value;
    if(isIncreasing == true){
        ProductTotal = parseInt (ProductTotal) +1;
    }
    else if(ProductTotal > 0){
        ProductTotal = parseInt (ProductTotal) -1;
    }
    productInput.value = ProductTotal;

    //update casing Total
    const productTotal = document.getElementById(product + '-total')
    productTotal.innerText = ProductTotal * price;

    calculetorTotal();
}

function getInputValue(product){
    const phoneInput = document.getElementById(product + '-number');
    const phoneNumber = parseInt (phoneInput.value);
    return phoneNumber;
}

function calculetorTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case')*59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal /10
    const totalPrice = subTotal + tax;

    //update to html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

//Phone Increament and decrement
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
})


//Handle Case Increament and decrement
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true)
})
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false)
})
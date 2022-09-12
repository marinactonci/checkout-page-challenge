const firstNumberText = document.getElementById('first-value');
const secondNumberText = document.getElementById('second-value');

const firstPlus = document.getElementById('first-plus');
const firstMinus = document.getElementById('first-minus');
const secondPlus = document.getElementById('second-plus');
const secondMinus = document.getElementById('second-minus');

let firstValue = 1;
let secondValue = 1;

firstNumberText.innerHTML = firstValue.toString();
secondNumberText.innerHTML = secondValue.toString();

const totalPriceText = document.getElementById('total-price');

let shippingPrice = 19;
let backpackPrice = 54.99;
let shoesPrice = 74.99;
let totalPrice = 0;

totalPrice += backpackPrice + shoesPrice + shippingPrice;

window.onload = (event) => {
    totalPriceText.innerHTML = '$' + totalPrice.toFixed(2).toString();
};

firstPlus.addEventListener('click', function increaseValue1() {
    firstValue++;
    firstNumberText.innerHTML = firstValue.toString();
    totalPrice += backpackPrice;
    totalPriceText.innerHTML = '$' + totalPrice.toFixed(2).toString();
});

secondPlus.addEventListener('click', function increaseValue2() {
    secondValue++;
    secondNumberText.innerHTML = secondValue.toString();
    totalPrice += shoesPrice;
    totalPriceText.innerHTML = '$' + totalPrice.toFixed(2).toString();
});

firstMinus.addEventListener('click', function reduceValue1() {
    if(firstValue > 1){
        firstValue--;
        firstNumberText.innerHTML = firstValue.toString();
        totalPrice -= backpackPrice;
        totalPriceText.innerHTML = '$' + totalPrice.toFixed(2).toString();
    }
    else{
        firstValue = 1;
    }
});

secondMinus.addEventListener('click', function reduceValue2() {
    if(secondValue > 1){
        secondValue--;
        secondNumberText.innerHTML = secondValue.toString();
        totalPrice -= shoesPrice;
        totalPriceText.innerHTML = '$' + totalPrice.toFixed(2).toString();
    }
    else{
        secondValue = 1;
    }
});

function submitForm() {
    return confirm('Form has been submited!');
}
function solve() {
    Array.from(document.querySelectorAll('.product>button')).forEach(button => {
        button.addEventListener('click', add);
    });
    document.querySelector('#exercise>button').addEventListener('click', calculate);
}
let arayWithPrices = [];
let arrayWithProducts = [];
let currentArray = [];
let sum = 0;

function add(e) {
    let product = e.target;
    let childrens = Array.from(product.parentNode.children);
    let result = document.querySelector('textarea');
    result.textContent += 'Added ' + childrens[1].innerHTML + ' for ' + childrens[2].innerHTML + ' to the cart.'+'\n';
    
    arayWithPrices.push(+childrens[2].innerHTML.split(' ')[1]);
    currentArray.push(childrens[1].innerHTML);

    arrayWithProducts = currentArray.filter((a, b) => {     //// remove a duplicate values in array
        return currentArray.indexOf(a) === b;
    });

    sum = arayWithPrices.reduce((a, b) => a + b).toFixed(2); //// sum of products in cart  
}

function calculate() {
    let result = document.querySelector('textarea');
    result.textContent += `You bought ${arrayWithProducts.join(',')} for ${sum}.\n-----------------------------------------\n`;
    arayWithPrices = [];      //// reset a values for next bought
    arrayWithProducts = [];
    currentArray = [];        
}

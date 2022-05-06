let form = document.querySelector(".js-form");
let current = document.querySelector(".js-current");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let currentElement = current.value;
    let currency = currencyElement.value;

    let EUR = 4.6862;
    let USD = 4.2245;
    let GBP = 5.5643;
    let CHF = 4.5149;

    switch (currency) {
        case "EUR":
            result = EUR / currentElement;
            break;
        case "USD":
            result = USD / currentElement;
            break;
        case "GBP":
            result = GBP / currentElement;
            break;
        case "CHF":
            result = CHF / currentElement;
            break;
    }
    resultElement.innerText = result.toFixed(2);
});
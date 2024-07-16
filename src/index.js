function generateQuote(event) {
  event.preventDefault();

  let quoteElement = document.querySelector("#quote");
  quoteElement.innerHTML = "Quote will go here";
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);

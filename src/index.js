function showQuote(response) {
  new Typewriter("#quotes", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generateQuote(event) {
  event.preventDefault();

  let apiKey = "0ao0eaf24fd28ada4f74eb3d2b5ect9b";
  let instructionsInput = document.querySelector("#user-instructions");
  let prompt = `User instructions: Generate a quote about ${instructionsInput.value}`;
  let context =
    "You are a quote expert and love to write quotes for others. Make sure to follow the user instructions above";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quotes");
  quoteElement.classList.remove("hidden");

  axios.get(apiURL).then(showQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);

const successQuotes = [
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
  "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett"
];

const lifeQuotes = [
  "Life is what happens when you're busy making other plans. - John Lennon",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson"
];

const form = document.getElementById("quote-form");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const category = document.querySelector('input[name="category"]:checked').value;
  const count = document.getElementById("quote-count").value;

  let quotes;
  if (category === "success") {
    quotes = successQuotes;
  } else {
    quotes = lifeQuotes;
  }

  let quoteDisplay = "";
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay += "<p>" + quotes[randomIndex] + "</p>";
  }

  document.getElementById("quote-display").innerHTML = quoteDisplay;
});






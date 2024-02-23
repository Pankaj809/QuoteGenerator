let currentQuoteIndex = 0;
let currentCategory = 'science';
let fontSize = 16;

function displayQuote() {
  const quoteElement = document.getElementById('quote');
  quoteElement.style.fontSize = `${fontSize}px`;
  quoteElement.innerText = quotes[currentCategory][currentQuoteIndex];
}

function nextQuote() {
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes[currentCategory].length;
  displayQuote();
}

function prevQuote() {
  currentQuoteIndex = (currentQuoteIndex - 1 + quotes[currentCategory].length) % quotes[currentCategory].length;
  displayQuote();
}

function randomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes[currentCategory].length);
  displayQuote();
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function increaseFontSize() {
  fontSize += 2;
  displayQuote();
}

function decreaseFontSize() {
  if (fontSize > 10) {
    fontSize -= 2;
    displayQuote();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  displayQuote();
});

function changeCategory() {
    currentCategory = document.getElementById('category').value;
    currentQuoteIndex = 0;
    displayQuote();
  }
  
  function displayIndicators() {
    const indicatorsContainer = document.getElementById('indicators');
    indicatorsContainer.innerHTML = '';
    for (let i = 0; i < quotes[currentCategory].length; i++) {
      const indicator = document.createElement('div');
      indicator.classList.add('carousel-indicator');
      indicator.classList.toggle('active', i === currentQuoteIndex);
      indicator.setAttribute('onclick', `goToQuote(${i})`);
      indicatorsContainer.appendChild(indicator);
    }
  }
  
  function goToQuote(index) {
    currentQuoteIndex = index;
    displayQuote();
  }
  
  function displayQuote() {
    const quoteElement = document.getElementById('quote');
    quoteElement.style.fontSize = `${fontSize}px`;
    quoteElement.innerText = quotes[currentCategory][currentQuoteIndex];
    displayIndicators();
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    displayQuote();
  });
  

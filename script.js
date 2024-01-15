

// Range slider 
const rangeSlider = document.getElementById('slider');

// Pageviews 
const pageViewsParagraph = document.querySelector('.js-pageviews');

// Price per Month
const price = document.querySelector('.js-price');

// Switch Monthly and yearly billing button
const switchBilling = document.getElementById('switch-button');

// Array with all possible prices
const allPrices = [8, 12, 16, 24, 36];

// current price
let prices = 16;


// Calculate the total and billing price 
function priceTotal () {
  
  // get the value from the range slider and store in the current price
  prices = Number(rangeSlider.value);

  // calculate the 25% discount of the price
  let totalDiscount = (prices / 100) * 25;

  // Total billing per year / Prices - discount
  let totalPerYear = prices - totalDiscount;
  
  // Switch between Monthly and yearly billing price
  if (switchBilling.checked == false) {
    price.innerHTML = `&dollar;${prices.toFixed(2)}`;
  } else {
    price.innerHTML = `&dollar;${totalPerYear.toFixed(2)}`;

  }
}

// Switch between Pageview that correspond to the price
function pageViews () {
  
  if (rangeSlider.value == allPrices[0]) {
    pageViewsParagraph.innerText = `10k pageviews`;

  } else if (rangeSlider.value == allPrices[1]) {
    pageViewsParagraph.innerText = '50k pageviews';
    
  } else if (rangeSlider.value == allPrices[2]) {
    pageViewsParagraph.innerText = '100k pageviews';
    
  } else if (rangeSlider.value == allPrices[3]) {
    pageViewsParagraph.innerText = '500k pageviews';

  } else if (rangeSlider.value == allPrices[4]) {
    pageViewsParagraph.innerText = '1m pageviews';
  }

}

// Add Event on input listener to all the functions
rangeSlider.addEventListener('input', function () {
  
  // Make range slider color goes only to the thumb
  let value = (this.value-this.min)/(this.max-this.min)*100
  this.style.background = 'linear-gradient(to right, var(--FULL-SLIDER-BAR) 0%, var(--FULL-SLIDER-BAR) ' + value + '%, var(--TOGGLE-BACKGROUND) ' + value + '%, var(--TOGGLE-BACKGROUND) 100%)';
  pageViews();
  priceTotal();
  
});

// rangeSlider.style.background = 'linear-gradient(to right, var(--FULL-SLIDER-BAR) 0%, var(--FULL-SLIDER-BAR) 30%, var(--TOGGLE-BACKGROUND) 30%, var(--TOGGLE-BACKGROUND) 100%);';


import { roundFiveDigits } from "./helper.js";

const firstSelector = document.querySelector("[data-first-select]");
const secondSelector = document.querySelector("[data-second-select]");
const swapBtn = document.querySelector("[data-swap-btn]");
const comparisonInfo = document.querySelector("[data-comparison-info]");

const firstInput = document.querySelector("[data-first-input]");
const secondInput = document.querySelector("[data-second-input]");

const BASE_URL = "https://open.er-api.com/v6/latest";
const FIRST_DEFAULT_CURRENCY = "USD";
const SECOND_DEFAULT_CURRENCY = "RUB";

let rates = {};

firstSelector.addEventListener("change", () => updateExchangeRates());
secondSelector.addEventListener("change", () => renderInfo());

firstInput.addEventListener("input", () => {
  secondInput.value = roundFiveDigits(
    firstInput.value * rates[secondSelector.value],
  );
});

secondInput.addEventListener("input", () => {
  firstInput.value = roundFiveDigits(
    secondInput.value / rates[secondSelector.value],
  );
});

swapBtn.addEventListener("click", () => {
  const temp = firstSelector.value;
  firstSelector.value = secondSelector.value;
  secondSelector.value = temp;

  updateExchangeRates();
});

swapBtn.addEventListener("click", () => {
  const audio = new Audio("NetherSwap.mp3");
  audio.play().catch((error) => {
    console.error(error.message);
  });
});

const renderInfo = () => {
  comparisonInfo.textContent = `1 ${firstSelector.value} = ${rates[secondSelector.value]} ${secondSelector.value}`;
  firstInput.value = rates[firstSelector.value];
  secondInput.value = rates[secondSelector.value];
};

const updateExchangeRates = async () => {
  try {
    const response = await fetch(`${BASE_URL}/${firstSelector.value}`);
    const data = await response.json();

    rates = data.rates;
    renderInfo();
  } catch (error) {
    console.error(error.message);
  }
};

const populateSelects = () => {
  firstSelector.innerHTML = "";
  secondSelector.innerHTML = "";

  for (const currency of Object.keys(rates)) {
    firstSelector.innerHTML += `
        <option value="${currency}" ${currency === FIRST_DEFAULT_CURRENCY ? "selected" : ""}>${currency}</option>
        `;
    secondSelector.innerHTML += `
        <option value="${currency}" ${currency === SECOND_DEFAULT_CURRENCY ? "selected" : ""}>${currency}</option>
        `;
  }
};

const getInitialRates = async () => {
  try {
    const response = await fetch(`${BASE_URL}/${FIRST_DEFAULT_CURRENCY}`);
    const data = await response.json();

    rates = data.rates;
    console.log(data);
    populateSelects();
    renderInfo();
  } catch (error) {
    console.error(error.message);
  }
};

getInitialRates();

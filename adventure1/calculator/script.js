const numberOne = document.querySelector("[data-number-one]");
const numberTwo = document.querySelector("[data-number-two]");

const plus = document.querySelector("[data-plus]");
const minus = document.querySelector("[data-minus]");
const share = document.querySelector("[data-share]");
const multiply = document.querySelector("[data-multiply]");

const result = document.querySelector("[data-number-result]");

function numberClear() {
  numberOne.value = "";
  numberTwo.value = "";
  numberOne.focus();
}

plus.addEventListener("click", () => {
  result.textContent = Number(numberOne.value) + Number(numberTwo.value);
  numberClear();
});
minus.addEventListener("click", () => {
  result.textContent = Number(numberOne.value) - Number(numberTwo.value);
  numberClear();
});
share.addEventListener("click", () => {
  result.textContent = Number(numberOne.value) / Number(numberTwo.value);
  numberClear();
});
multiply.addEventListener("click", () => {
  result.textContent = Number(numberOne.value) * Number(numberTwo.value);
  numberClear();
});

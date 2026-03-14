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

function numbersType() {
  const num1 = numberOne.value.trim();
  const num2 = numberTwo.value.trim();

  if (num1 === "" || num2 == "") {
    result.textContent = "Введите число";
    return false;
  }
  return true;
}

function checkShareZero() {
  const num2 = numberTwo.value.trim();
  if (Number(num2) === 0) {
    result.textContent = "Делить на 0 нельзя";
    return false;
  }
  return true;
}

plus.addEventListener("click", () => {
  if (numbersType()) {
    result.textContent = Number(numberOne.value) + Number(numberTwo.value);
  }
  numberClear();
});
minus.addEventListener("click", () => {
  if (numbersType()) {
    result.textContent = Number(numberOne.value) - Number(numberTwo.value);
  }
  numberClear();
});
share.addEventListener("click", () => {
  if (numbersType()) {
    if (checkShareZero()) {
      result.textContent = Number(numberOne.value) / Number(numberTwo.value);
    }
  }
  numberClear();
});
multiply.addEventListener("click", () => {
  if (numbersType()) {
    result.textContent = Number(numberOne.value) * Number(numberTwo.value);
  }
  numberClear();
});

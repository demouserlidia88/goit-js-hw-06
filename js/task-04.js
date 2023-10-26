let counterValue = 0;
const decremenButton = document.querySelector('[data-action="decrement"]');
const incremenButton = document.querySelector('[data-action="increment"]');
const valueEl = document.getElementById("value");

const handleClickDec = () => {
	counterValue -= 1;
	valueEl.textContent = counterValue;
};
const handleClickInc = () => {
	counterValue += 1;
	valueEl.textContent = counterValue;
};
decremenButton.addEventListener("click", handleClickDec);
incremenButton.addEventListener("click", handleClickInc);
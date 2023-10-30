function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
const boxesDiv = document.getElementById("boxes");
function createBoxes(amount) {
	for (let i = 1; i <= amount; i++) {
		const box = document.createElement("div");
		box.style.width = `${30 + i * 10}px`;
		box.style.height = `${30 + i * 10}px`;
		box.style.backgroundColor = getRandomHexColor();
		boxesDiv.appendChild(box);
	}
}
function destroyBoxes(amount) {
	const boxes = boxesDiv.querySelectorAll("div");
	const removeCount = Math.min(amount, boxes.length);
	for (let i = boxes.length - 1; i >= boxes.length - removeCount; i--) {
		boxesDiv.removeChild(boxes[i]);
	}
}
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
createButton.addEventListener("click", () => {
	const input = document.querySelector("input");
	const inputVal = parseInt(input.value);
	createBoxes(inputVal);
});
destroyButton.addEventListener("click", () => {
	const input = document.querySelector("input");
	const inputVal = parseInt(input.value);
	destroyBoxes(inputVal);
});


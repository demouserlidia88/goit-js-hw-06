const inputContainer = document.getElementById("validation-input");

inputContainer.addEventListener("blur", function () {
	const necessaryLength = parseInt(inputContainer.getAttribute("data-length"));
	const inputValue = inputContainer.value;
	if (inputValue.length === necessaryLength) {
		inputContainer.classList.remove("invalid");
		inputContainer.classList.add("valid");
	} else {
		inputContainer.classList.remove("valid");
		inputContainer.classList.add("invalid");
	}
});

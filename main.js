const height = document.getElementById("height");
const weight = document.getElementById("weight");
const results = document.getElementById("results");
const button = document.querySelector("button");

function findResult(event) {
	event.preventDefault();
	if (
		height.value === "" ||
		isNaN(height.value) ||
		height.value < 1 ||
		weight.value === "" ||
		isNaN(weight.value) ||
		weight.value < 1
	) {
		results.innerHTML = "please enter a valid value";
		results.style.color = "red";
	} else {
		let BMI = parseFloat((weight.value / (height.value / 100) ** 2).toFixed(2));

		if (BMI < 18.6) {
			results.innerHTML = `${BMI} (under weight)`;
			results.style.color = "yellow";
		} else if (BMI > 18.6 && BMI < 24.9) {
			results.innerHTML = ` ${BMI} (normal)`;
			results.style.color = "green";
		} else {
			results.innerHTML = `${BMI} (overweight)`;
			results.style.color = "red";
		}
	}
}

button.addEventListener("click", findResult);

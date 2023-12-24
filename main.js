const height = document.getElementById("height");

const weight = document.getElementById("weight");

const results = document.getElementById("results");

const button = document.querySelector("button");

function findResult(event) {
	event.preventDefault();

	const heightUnit = document.getElementById("heightUnit").value;

	const weightUnit = document.getElementById("weightUnit").value;

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
		let userHeight = height.value;
		let userWeight = weight.value;
		if (heightUnit === "ft") {
			// Convert feet to centimeters (1 foot = 30.48 cm)
			userHeight = userHeight * 30.48;
		}

		if (weightUnit === "lb") {
			// Convert pounds to kilograms (1 lb = 0.453592 kg)
			userWeight = userWeight * 0.453592;
		}
		let BMI = parseFloat((userWeight / (userHeight / 100) ** 2).toFixed(2));

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

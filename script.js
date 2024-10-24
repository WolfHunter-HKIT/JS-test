selector();

function selector() {
	let exercise = prompt("Choose Task number (1-3)");
	exercise == 1
		? task1()
		: exercise == 2
		? task2()
		: exercise == 3
		? task3()
		: NULL;
}
// 1st Task.
function task1() {
	let kg = 36;
	console.log(`${kg}kg = ${kg * 1000}g`);

	selector();
}

// 2nd Task.
function task2() {
	let age = prompt("How old are you?", 1);
	age < 18 ? alert("Tu esi nepilnametis.") : alert("Tu esi pilnametis.");

	selector();
}

// 3rd Task.
function task3() {
	let num1 = prompt("Input the 1st number.", 0);
	let op = prompt("Input an operator (+, -, *, /, %, !)");
	let num2;
	if (op != "!") {
		num2 = prompt("Input the 2nd number.", 0);
	}

	function factorial(num) {
		let ans = 1;

		if (num == 0) {
			return 1;
		}
		for (let i = 2; i <= num; i++) {
			ans = ans * i;
		}
		return ans;
	}

	op == "+"
		? alert(num1 + num2)
		: op == "-"
		? alert(num1 - num2)
		: op == "*"
		? alert(num1 * num2)
		: op == "/"
		? alert(num1 / num2)
		: op == "%"
		? alert(num1 % num2)
		: op == "!"
		? alert(factorial(num1))
		: alert("Invalid operator");

	selector();
}

let calculatebtn = document.getElementById("calculate-btn")
let result = document.getElementById("result")
let calculate = () => {
	let a = Number(document.getElementById("Principal")
	.value)
	let b = Number(document.getElementById("Rate")
	.value)
	let c = Number(document.getElementById("days")
	.value)
	let duration = document.getElementById("duration")
	.value
	
	let simpleInterest = duration == "year" ? (a*b*c)/ 100 :
	 (a*b*c)/ 1200
	 let amount = a + simpleInterest

	result.innerHTML = `<div>Количество суммы: <span>₽${
		a.toFixed(2)}
	</span></div>
	<div>Процентная сумма: <span>₽${simpleInterest.
		toFixed(2)}
	</span></div>
	<div>Общая сумма: <span>₽${amount.
		toFixed(2)}
	</span></div>`
	
}
calculatebtn.addEventListener("click", calculate)
window.addEventListener("load",calculate);



let keys = document.querySelectorAll('#calculator span');
let operators = ['+', '-', 'x', '÷'];
let decimalAdded = false;

for(let i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {

		let input = document.querySelector('.screen');
		let inputVal = input.innerHTML;
		let btnVal = this.innerHTML;

		if(btnVal == 'C') {
			input.innerHTML = '';
			decimalAdded = false;
		}
		
		else if(btnVal == '=') {
			let equation = inputVal;
			let lastChar = equation[equation.length - 1];
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
			
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			
			if(equation)
				input.innerHTML = eval(equation);
				
			decimalAdded = false;
		}
		
		else if(operators.indexOf(btnVal) > -1) {

			let lastChar = inputVal[inputVal.length - 1];
			

			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			

			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		}
		
		else if(btnVal == '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}

		else {
			input.innerHTML += btnVal;
		}

		e.preventDefault();
	} 
}
const express = require('express');
const app = express();

app.use(express.json());

app.post('/', (req, res) => {
  res.send('Hello World!')
  
});

app.post('/operator/',(req,res)=>{
	
	var operator = req.body.operator;
	var num1 = parseInt(req.body.num1);
	var num2 = parseInt(req.body.num2);
	var result;

	switch(operator){
		case "addition":
		result = add(num1, num2);
		break;

		case "subtraction":
		result = subtract(num1, num2);
		break;

		case "multiplication":
		result = (num1*num2);
		break;

		case "division":
		result = divide(num1, num2);
		break;

		case "power":
			result=Math.pow(num1,num2);
			break;

		case "square_root":
			result=Math.sqrt(num1);
			break;	

		default:
		result = "Sorry, please enter a valid operator!"
	}

	function add(a, b){
		return a + b
	}

	function subtract(a, b){
		return a - b
	}

	function multiply(a, b){
		return a * b
	}

	function divide(a, b){
		return a / b
	}
    var r=result.toString()
	res.send(r);
})
const port = 3000;



app.listen(port, (error) => {
  console.log(`Example app listening on port ${port}`);
});




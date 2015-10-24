var result;
var arrayBox = [];
	function zero(){
		arrayBox.push(0);console.log(arrayBox);	
	}
	function one(){
		arrayBox.push(1);console.log(arrayBox);
	}
	function two(){
		arrayBox.push(2);console.log(arrayBox);
	}
	function three(){
		arrayBox.push(3);console.log(arrayBox);
	}
	function four(){
		arrayBox.push(4);console.log(arrayBox);
	}
	function five(){
		arrayBox.push(5);console.log(arrayBox);
	}
	function six(){
		arrayBox.push(6);console.log(arrayBox);
	}
	function seven(){
		arrayBox.push(7);console.log(arrayBox);
	}
	function eight(){
		arrayBox.push(8);console.log(arrayBox);
	}
	function nine(){
		arrayBox.push(9);console.log(arrayBox);
	}
	function addition(){
		arrayBox.push("+");console.log(arrayBox);
	}
	function subtraction(){
		arrayBox.push("-");console.log(arrayBox);
	}
	function mult(){
		arrayBox.push("*");console.log(arrayBox);
	}
	function div(){
		arrayBox.push("/");console.log(arrayBox);
	}
	function equals(){
		arrayBox.push("=");console.log(arrayBox);
		for(var i=0;i<arrayBox.length;i++){
			if(arrayBox[i]== '+'){
				add(arrayBox[0],arrayBox[2]);	
			}
			else if(arrayBox[i]=="-"){
				subtract(arrayBox[0],arrayBox[2]);
			}
			else if(arrayBox[i]=="*"){
				multiply(arrayBox[0],arrayBox[2]);
			}
			else if(arrayBox[i]=="/"){
				divide(arrayBox[0],arrayBox[2]);
			}
		}

	}
	function clr(){
		arrayBox = []; console.log(arrayBox);
	}





	function add(num1,num2){
		result = num1 + num2;
		alert(result);
	}
	function subtract(num1, num2){
		result = num1-num2;
		alert(result);
	}
	function multiply(num1,num2){
		result = num1*num2;
		alert(result);
	}
	function divide(num1,num2){
		result = num1/num2;
		alert(result);
	}

	

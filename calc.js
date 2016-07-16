var result;
var val = '';
var value2 = '';

var zero = document.querySelector(".zero");
zero.addEventListener("click",function(){
	value2 = zero.value;
	val += value2;
});

var one = document.querySelector(".one");
one.addEventListener("click",function(){
	value2 = one.value;
	val += value2;
});

var two = document.querySelector(".two");
two.addEventListener("click",function(){
	value2 = two.value;
	val += value2;
});

var three = document.querySelector(".three");
three.addEventListener("click",function(){
	value2 = three.value;
	val += value2;
});

var four = document.querySelector(".four");
four.addEventListener("click",function(){
	value2 = four.value;
	val += value2;
});

var five = document.querySelector(".five");
five.addEventListener("click",function(){
	value2 = five.value;
	val += value2;
});

var six = document.querySelector(".six");
six.addEventListener("click",function(){
	value2 = six.value;
	val += value2;
});

var seven = document.querySelector(".seven");
seven.addEventListener("click",function(){
	value2 = seven.value;
	val += value2;
});

var eight = document.querySelector(".eight");
eight.addEventListener("click",function(){
	value2 = eight.value;
	val += value2;
});

var nine = document.querySelector(".nine");
nine.addEventListener("click",function(){
	value2 = nine.value;
	val += value2;
});

var decimal = document.querySelector(".decimal");
decimal.addEventListener("click",function(){
	value2 = decimal.value;
	val += value2;
});

var add = document.querySelector(".add");
add.addEventListener("click",function(){
	value2 = add.value;
	val += value2;
});

var subtract = document.querySelector(".subtract");
subtract.addEventListener("click",function(){
	value2 = subtract.value;
	val += value2;
});

var multiply = document.querySelector(".multiply");
multiply.addEventListener("click",function(){
	value2 = multiply.value;
	val += value2;
});

var divide = document.querySelector(".divide");
divide.addEventListener("click",function(){
	value2 = divide.value;
	val += value2;
});

var equals = document.querySelector(".equals");
equals.addEventListener("click",function(){
	result = Parser.evaluate(val);
	document.getElementById("result").innerHTML = "The answer is: " + result;
	val = result;
});

var clear = document.querySelector(".clear");
clear.addEventListener("click",function(){
	val = '';
	value2 = '';
	document.getElementById("result").innerHTML = "";
	console.log("val:",val);
	console.log("value2:",value2);
});


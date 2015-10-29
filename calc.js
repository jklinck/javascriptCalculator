var result;
var arrayBox = [];
var b = [];
var c = [];
var d = [];
var e = [];
	function arrayPush(num){
		arrayBox.push(num); console.log(arrayBox);
	}
	function equals(){     /*this function ends on line 61*/
		arrayBox.push("=");console.log(arrayBox);
		for(var i=0;i<arrayBox.length;i++){
		  if(arrayBox[i]!='+' && arrayBox[i]!='-' && arrayBox[i]!='*' && arrayBox[i]!='/'){
		  	b.push(arrayBox[i]);
		  	arrayBox[i]= 'x';
		  }
		  else{
		  	break;
		  }
		}
		for(var j=0;j<arrayBox.length;j++){
			if(arrayBox[j]!='+' && arrayBox[j]!='-' && arrayBox[j]!='*' && arrayBox[j]!='/' && arrayBox[j]!= 'x' && arrayBox[j]!='='){
				d.push(arrayBox[j]);
				arrayBox[j]='x';
			}
		}
		var c = (Number(b.join('')));
		console.log('this is c: ',c);
		var e = (Number(d.join('')));
		console.log('this is e: ',e);
		for(var k=0;k<arrayBox.length;k++){
			if(arrayBox[k] == '+'){
				for(var m=0;m<arrayBox.length;m++){
					if(arrayBox[m] == '='){
						add(c,e);
					}
				}
			}
			else if(arrayBox[k] == '-'){
				for(var n=0;n<arrayBox.length;n++){	
				  if(arrayBox[n]=='='){
				  	subtract(c,e);
				  }
				}
			}
			else if(arrayBox[k] == '*'){
				for(var p=0;p<arrayBox.length;p++){
					if(arrayBox[p] == '='){
						multiply(c,e);
					}
				}
			}
			else if(arrayBox[k]== '/'){
				for(var q=0;q<arrayBox.length;q++){
					if(arrayBox[q] == '='){
						divide(c,e);
					}
				}
			}
		}
	}
	// yes that is a 51 line function, I know, I know
	function clr(){
		arrayBox = []; 
		b = [];
		c = [];
		d = [];
		e = [];
		document.getElementById("result").innerHTML = "";
	}
	function add(num1,num2){
		result = num1 + num2;
		document.getElementById("result").innerHTML = "The answer is: " + result;
	}
	function subtract(num1, num2){
		result = num1-num2;
		document.getElementById("result").innerHTML = "The answer is: " + result;
	}
	function multiply(num1,num2){
		result = num1*num2;
		document.getElementById("result").innerHTML = "The answer is: " + result;
	}
	function divide(num1,num2){
		result = num1/num2;
		document.getElementById("result").innerHTML = "The answer is: " + result;
	}
	
	
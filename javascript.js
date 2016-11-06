(function(){
'use strict'
var number = receiveNumber();
var digits = numberToDigitsArray(number);
var luhnChecksum = calculateLuhnChecksum(digits);
addChecksumToNumber(number);
	function receiveNumber(){
		var number = prompt('Podaj liczbe:');
		return number;
	}
	function numberToDigitsArray(number){
		var digitsArray = number.split('');
		return digitsArray;
	}
	function calculateLuhnChecksum(arrayOfDigits){
		var digitsSum = 0;
		for(var i=0; i<arrayOfDigits.length; i++){
			if(i%2===0){
				if(arrayOfDigits[i]*2>=10){
					var numberDigit = arrayOfDigits[i]*2;
         			var arrayDoubledNumberDigit = numberToDigitsArray(numberDigit.toString());
					var doubledNumberDigitSum = Number(arrayDoubledNumberDigit[0]) + Number(arrayDoubledNumberDigit[1]);
					digitsSum = Number(digitsSum)+Number(doubledNumberDigitSum);			
				}
				else{

					digitsSum = Number(digitsSum)+Number(arrayOfDigits[i]*2);
				}
			}
			else{
				digitsSum = Number(digitsSum)+Number(arrayOfDigits[i]);
			}
		}
		return digitsSum%10;
	}
	function addChecksumToNumber(number){
		var checksumArray = numberToDigitsArray(number);
		if(luhnChecksum===0){
			checksumArray.push(luhnChecksum);
		}else{
			checksumArray.push(10-luhnChecksum);
		}
		console.log(checksumArray);
	}
})();
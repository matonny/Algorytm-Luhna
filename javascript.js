(function(){
				function recieveNumber(){
			var recievedNumber = prompt('Podaj liczbe:')
			return recievedNumber
		}
		function numberIntoArray(){
			var numberAsArray = recieveNumber().split('');
			return numberAsArray
		}
		function loopingThroughNumbers(){
			var numberAsArray = numberIntoArray();
			for(i=1;i<=numberAsArray.length;i++){
				isPositionEven(i);
			}
		}
		function isPositionEven(numberPosition){
			if(numberPosition%2===1){
				multiplyNumber(numberIntoArray()[numberPosition-1]);
				isMultipliedNumberSmallerThanTen(multiplyNumber(numberIntoArray()[numberPosition-1]));
			}else{
				increaseNumbersSum(numberIntoArray()[numberPosition-1])
			}
		}
		function multiplyNumber(number){
			var multipliedNumber = number*2
			return multipliedNumber;
		}
		function isMultipliedNumberSmallerThanTen(multipliedNumber){
			if(multipliedNumber<10){
				increaseNumbersSum(multipliedNumber);
			}
			else{
				multipliedNumbersDigitSum(multipliedNumber)
			}
		}
		function multipliedNumberIntoArray(multipliedNumber){
			var multipliedNumberAsArray = multipliedNumber.split('');
			console.log(multipliedNumberAsArray);
			return multipliedNumberAsArray;
		}
		function  multipliedNumbersDigitSum(multipliedNumber){
			var multipliedNumberArray = multipliedNumberIntoArray(multipliedNumber);
			var digitSum = multipliedNumberArray[0] + multipliedNumberArray[1];
			increaseNumbersSum(digitSum);
		}
		function increaseNumbersSum(increasingNumber){
		}
		function countCheckSum(){

		}
})();
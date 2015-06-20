
exports.Sum = function(num1, num2){
	return num1+num2;
}

exports.SumOfArray = function(arrayOfNums){
	var tot=0;
	for(var i=0; i< arrayOfNums.length;i++){
		tot+=arrayOfNums[i];
	}
	return tot;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	var tot=0;
	for(var i=0;i<arrayOfNums.length;i++){
		if(arrayOfNums[i]!=0)
			for(var j=i+1;j<arrayOfNums.length;j++){
				if(arrayOfNums[i]==arrayOfNums[j])
					arrayOfNums[j]=0;
			}
		tot+=arrayOfNums[i];
	}
	return tot;
}

exports.ReverseString = function(str){
	var temp="";
	for(var j=str.length-1;j>=0;j--){
		temp=temp+str[j];
	}
	return temp;
}


exports.ReverseArrayOfStrings = function(arrayOfStrings){
	for(var i=0;i<arrayOfStrings.length;i++){
		arrayOfStrings[i]=exports.ReverseString(arrayOfStrings[i]);
	}
	return arrayOfStrings;
}
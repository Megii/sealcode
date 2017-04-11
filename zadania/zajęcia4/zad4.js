function binnary(number){
	
	var result="";
	while(number>0){
		
		result=number%2+result;
		number = Math.floor(number/2);
	}
	return result;
}

console.log(binnary(9));
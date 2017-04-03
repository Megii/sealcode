funkction binnary(number){
	
	var result="";
	while(number>0){
		
		result=number%2+result;
		number = number/2;
	}
	return result;
}

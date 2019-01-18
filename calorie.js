const calorieCounter = document.querySelector('#counter>p');




//Sets Entered Amount To The Calorie Total
function setCal(n){
	if(typeof n === 'number'){
		calorieCounter.innerHTML = n;
	}else{
		console.log('CC: NaN')
	}
	
}
//Adds Entered Amount To The Calorie Total
function addCal(n){
	if(typeof n === 'number'){
		calorieCounter.innerHTML = parseInt(calorieCounter.innerHTML) + n;
	}else{
		console.log('CC: NaN')
	}
}
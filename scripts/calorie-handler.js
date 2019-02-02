// **************************************
// ***     Designed And Developed     ***
// **               By                ***
// ***          Paul Pirie            ***
// **************************************

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


function initCal(){

}

function refreshCals(){
	let food = readData('todaysCalories', true);
	setCal(0);
	console.log(food); 
	food.forEach(function(i){
		console.log(i);
		addCal(i.kcal);
	});
	console.log(food); 
}
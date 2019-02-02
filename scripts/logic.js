// **************************************
// ***     Designed And Developed     ***
// **               By                ***
// ***          Paul Pirie            ***
// **************************************

refreshCals();

console.log(readData("num2",false));

function addFoodToTodaysCalories(food){
	let todaysFood = [];
	addCal(food.kcal);
	console.log(food.name + " " + food.kcal);
	if(readData('todaysCalories',true) == null){
		todaysFood = [];
		todaysFood.push(food);
		storeData('todaysCalories', todaysFood, true);
	}else{
		todaysFood = readData('todaysCalories',true);
		console.log(todaysFood);
		todaysFood.push(food);
		storeData('todaysCalories', todaysFood, true);
	}
	refreshCals();
}

window.addEventListener('DOMContentLoaded', function(e){
	storeData('foodGroups',foodGroups,true);
	loadCalories();
	loadFoods('fruit',document.querySelector('#FRUIT'));
	loadFoods('bread',document.querySelector('#BREAD'));
	loadFoods('meat',document.querySelector('#MEAT'));
	loadFoods('sugar',document.querySelector('#SUGAR'));
	loadFoods('other',document.querySelector('#OTHER'));
	loadFoodArray();
})


function resetCals(){
	localStorage.clear();
}
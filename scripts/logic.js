// **************************************
// ***     Designed And Developed     ***
// **               By                ***
// ***          Paul Pirie            ***
// **************************************

console.log(readData("num2",false));

function addFoodToTodaysCalories(){

}

window.addEventListener('DOMContentLoaded', function(e){
	storeData('foodGroups',foodGroups,true);
	loadCalories();
	loadFoods('fruit',document.querySelector('#FRUIT'));
	loadFoods('bread',document.querySelector('#BREAD'));
	loadFoods('meat',document.querySelector('#MEAT'));
	loadFoods('sugar',document.querySelector('#SUGAR'));
})
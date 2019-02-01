// **************************************
// ***     Designed And Developed     ***
// **               By                ***
// ***          Paul Pirie            ***
// **************************************


function storeData(key, data, array){
	if (array) {
		localStorage.setItem(key, JSON.stringify(data));
	}else{

		localStorage.setItem(key, data);
	}
}
function readData(key, parse){
	if(parse){
		//Is JSON Parse Is Required
		return JSON.parse(localStorage.getItem(key));
	}else{
		return localStorage.getItem(key);
	}
}

function Food(group,cal){

}

function getFoods(){
	let foodG = readData('foodGroups',true);
	let FoodList = [];
	let foodI = [];
	for(let i = 0; i<foodG.length;i++){
		foodI = foodG[i].data;
		console.log(foodG[i]);
		for(let i = 0; i<foodI.length;i++){
			FoodList.push(foodI[i]);
			console.log(foodI[i]);
		}
	}
	return FoodList;
}
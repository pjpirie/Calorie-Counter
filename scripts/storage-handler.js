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
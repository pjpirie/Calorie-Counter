

// Started To Add The Ability To Add Own Food But Realised Without React It Is Way To Complicated.


// function createList(where, listItems[]){
// 	if (listItems.isArray()){
// 		let ul = document.createElement('ul');
// 		for (let i = 0; i <= listItems.length; i++) {
// 			let li = document.createElement('li');

// 		};
// 	};
// }



function createOption(title, cals, id, location){
	let div = document.createElement("div");
	let h3 = document.createElement('h3');
	let text;

	if (cals != null) {
		text = document.createTextNode(title + "\n" + "Kcal: " + cals);
	}else{
		text = document.createTextNode(title);	
	}
	h3.appendChild(text);
	div.appendChild(h3); 
	div.id = id;
	location.appendChild(div);
}

function loadCalories(){
	let cals = readData('todaysCalories',true);
	if(cals != null){
		for(let i = 0; i<cals.length;i++){
			createOption(cals[i].name,cals[i].kcal,cals[i].id,document.querySelector('#YOUR'));
		}
	}
	console.log('No Calories');
}

function loadFoods(food_group, location){
	let foodGroups = readData('foodGroups',true);
	for(let i = 0; i<foodGroups.length;i++){
		if(foodGroups[i].name == food_group){
			let foodItems = foodGroups[i].data;
			for(let i = 0; i<foodItems.length;i++){
				createOption(foodItems[i].name,foodItems[i].kcal,foodItems[i].id,location);
			}
		}
	}
	createOption("ADD YOUR OWN",null,'custom-food-btn',location);
}
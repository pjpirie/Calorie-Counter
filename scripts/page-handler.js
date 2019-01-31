

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
	let div = document.createElement("div")
	let text;
	if (cals != null) {
		text = document.createTextNode(title +" "+"kcal:"+cals);
	}else{
		text = document.createTextNode(title);	
	}
	div.appendChild(text); 
	location.appendChild(div);
}

function loadCalories(){
	let cals = readData('todaysCalories',true);
	for(let i = 0; i<cals.length;i++){
		createOption(cals[i].name,cals[i].kcal,cals[i].id,document.querySelector('#YOUR'));
	}
}

function loadFoods(){
	let foods = readData('foods',true);
	for(let i = 0; i<foods.length;i++){
		createOption(cals[i].name,cals[i].kcal,cals[i].id,document.querySelector('#ADDFOOD'));
	}
}
// **************************************
// ***     Designed And Developed     ***
// **               By                ***
// ***          Paul Pirie            ***
// **************************************

const header = document.querySelector('header>h3');
const addBTN = document.querySelector('#add-btn');
const backBTN = document.querySelector('#back-btn');
const helpBTN = document.querySelector('#help-btn');
const homeBTN = document.querySelector('#home-btn');
const contactBTN = document.querySelector('#contact-btn');
const caloriesBTN = document.querySelector('#calories-btn');
const fruitBTN = document.querySelector('#fruit-btn');
const breadBTN = document.querySelector('#bread-btn');
const meatBTN = document.querySelector('#meat-btn');
const sugarBTN = document.querySelector('#sugar-btn');
const yourBTN = document.querySelector('#your-btn');
const otherBTN = document.querySelector('#other-btn');
const customFoodBTN = document.querySelector('#custom-food-btn'); 

let buttons = [];
buttons.push(addBTN); //food
// buttons.push(backBTN);  
buttons.push(helpBTN); //help
buttons.push(homeBTN);  //home
buttons.push(contactBTN); //contact
buttons.push(caloriesBTN); //your/calories
buttons.push(fruitBTN); //fruit
buttons.push(breadBTN); //bread
buttons.push(meatBTN); //meat
buttons.push(sugarBTN); //sugar
buttons.push(otherBTN); //other
buttons.push(customFoodBTN); //Custom Food
// buttons.push(yourBTN); 

const homePage = document.querySelector('section#HOME');
const foodPage = document.querySelector('section#ADDFOOD');
const helpPage = document.querySelector('section#HELP');
const contactPage = document.querySelector('section#CONTACT');
const fruitPage = document.querySelector('section#FRUIT');
const breadPage = document.querySelector('section#BREAD');
const meatPage = document.querySelector('section#MEAT');
const sugarPage = document.querySelector('section#SUGAR');
const otherPage = document.querySelector('section#OTHER');
// const yourPage = document.querySelector('section#other');
const caloriesPage = document.querySelector('section#YOUR');
const customFoodPage = document.querySelector('section#CUSTOMFOOD');


let lastPage;
let pages = [];
pages.push(foodPage);//food
pages.push(helpPage);//help
pages.push(homePage);//home
pages.push(contactPage);//contact
pages.push(caloriesPage);//your/calories
pages.push(fruitPage);//fruit
pages.push(breadPage);//bread
pages.push(meatPage);//meat
pages.push(sugarPage);//sugar
pages.push(otherPage);//other
pages.push(customFoodPage); //Custom Food
// pages.push(caloriesPage);

function hasClass(target, cls){
	console.log(target);
	if(target.classList.contains(cls)){
		return true;
	}else{
		return false;
	}
}
function setInactive(target){
	if(hasClass(target,'active')){
	target.classList.remove('active');
	}
}
function setActive(target){
	if(!hasClass(target,'active')){
	target.classList.add('active');
	}
}
function swapPage(target){
	for(let i = 0; i<pages.length;i++){
		if(hasClass(pages[i], 'active')){
			setInactive(pages[i]);
			lastPage = pages[i];
		}
	}
	if(target.getAttribute('title') == 'ADOBE FOOD CC'){
		if(hasClass(backBTN, 'active')){
			setInactive(backBTN);
		}
	}else{
			setActive(backBTN);	
		}
	setActive(target);
	header.innerHTML = target.getAttribute('title');
}
function backPage(){
	swapPage(lastPage);
}





// homeBTN.addEventListener('click', function (e){swapPage(homePage)});
// helpBTN.addEventListener('click', function (e){swapPage(helpPage)});
// caloriesBTN.addEventListener('click', function (e){swapPage(contactPage)});

// fruitBTN.addEventListener('click', function (e){swapPage(fruitPage)});
// breadBTN.addEventListener('click', function (e){swapPage(breadPage)});
// meatBTN.addEventListener('click', function (e){swapPage(meatPage)});
// sugarBTN.addEventListener('click', function (e){swapPage(sugarPage)});
// yourBTN.addEventListener('click', function (e){swapPage(yourPage)});
// caloriesBTN.addEventListener('click', function (e){swapPage(caloriesPage)});

// addBTN.addEventListener('click', function (e){swapPage(foodPage)});
backBTN.addEventListener('click', function (e){backPage()});

for(let i = 0; i<buttons.length;i++){
	if(buttons[i] != null){
		buttons[i].addEventListener('click', function(e){swapPage(pages[i])});
	}
}
swapPage(homePage);


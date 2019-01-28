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

const homePage = document.querySelector('section#HOME');
const foodPage = document.querySelector('section#ADDFOOD');
const helpPage = document.querySelector('section#HELP');
const contactPage = document.querySelector('section#CONTACT');
const fruitPage = document.querySelector('section#FRUIT');
const breadPage = document.querySelector('section#BREAD');
const meatPage = document.querySelector('section#MEAT');
const sugarPage = document.querySelector('section#SUGAR');
const yourPage = document.querySelector('section#YOUR');
const caloriesPage = document.querySelector('section#YOUR');

let lastPage;
let pages = [];
pages.push(homePage);
pages.push(foodPage);
pages.push(helpPage);
pages.push(contactPage);
pages.push(fruitPage);
pages.push(breadPage);
pages.push(meatPage);
pages.push(sugarPage);
pages.push(yourPage);
pages.push(caloriesPage);

function hasClass(target, cls){
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





homeBTN.addEventListener('click', function (e){swapPage(homePage)});
helpBTN.addEventListener('click', function (e){swapPage(helpPage)});
caloriesBTN.addEventListener('click', function (e){swapPage(contactPage)});

fruitBTN.addEventListener('click', function (e){swapPage(fruitPage)});
breadBTN.addEventListener('click', function (e){swapPage(breadPage)});
meatBTN.addEventListener('click', function (e){swapPage(meatPage)});
sugarBTN.addEventListener('click', function (e){swapPage(sugarPage)});
yourBTN.addEventListener('click', function (e){swapPage(yourPage)});
caloriesBTN.addEventListener('click', function (e){swapPage(caloriesPage)});

addBTN.addEventListener('click', function (e){swapPage(foodPage)});
backBTN.addEventListener('click', function (e){backPage()});




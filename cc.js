const header = document.querySelector('header>h3');
const addBTN = document.querySelector('#add-btn');
const backBTN = document.querySelector('#back-btn');
const homePage = document.querySelector('section#HOME');
const foodPage = document.querySelector('section#ADDFOOD');
const helpBTN = document.querySelector('#help-btn');
const homeBTN = document.querySelector('#home-btn');
const contactBTN = document.querySelector('button#contact-BTN');
let lastPage;
let pages = [];
pages.push(homePage);
pages.push(foodPage);

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
addBTN.addEventListener('click', function (e){swapPage(foodPage)});
backBTN.addEventListener('click', function (e){backPage()});




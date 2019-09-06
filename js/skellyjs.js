//skellyweb DOM-file

//Trying to make a responsive nav bar
const navButton = document.getElementsByClassName("buttonblock");
const navDrop = document.getElementsByClassName("dropdown");

function hoverNav(index){
	navDrop[index].style.display = "block";
	
	var pos = navButton[index].getBoundingClientRect();	
	navDrop[index].style.top = pos.bottom;
	navDrop[index].style.right = (pos.right + pos.left)/2.0;
}

function notHoverNav(index){
	navDrop[index].style.display = "none";
}

//Positioning navbar
const margin = document.getElementsByClassName('uppermargin');
const head = document.getElementById('myHeader');
//const headPos = head.getBoundingClientRect();

//margin.style.top = headPos.bottom;

//console.log(margin.style);


//Including HTML-file
//includeHTML();

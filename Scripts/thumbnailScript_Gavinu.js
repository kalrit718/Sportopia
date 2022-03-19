//Michael Phelps
var x1 = document.getElementById("imageId1");
x1.addEventListener("mouseover", function() {
x1.src="Images/Images_Main_Gavinu/IMG_01.jpg";
x1.height="220";
x1.width="343";
document.getElementById("IMG1_ID1").innerHTML="Qualified for the 2000 Olympics at the age of 15 years. Finally, setting 7 World Records and 1 Olympic Record.";
});
x1.addEventListener("mouseout", function() {
x1.src="Images/Images_Main_Gavinu/Image_1.jpg";
x1.height="200";
x1.width="300";
document.getElementById("IMG1_ID1").innerHTML="";
});	

//Roger Federer	
var x2 = document.getElementById("imageId2");
x2.addEventListener("mouseover", function() {
x2.src="Images/Images_Main_Gavinu/IMG_02.jpg";
x2.height="220";
x2.width="343";
document.getElementById("IMG1_ID2").innerHTML="20 Grand Slam Titles. Won 2008 doubles Olympic Gold Medal. Founder of the Roger Federer foundation in South Africa.";
});
x2.addEventListener("mouseout", function() {
x2.src="Images/Images_Main_Gavinu/Image_2.jpg";
x2.height="200";
x2.width="300";
document.getElementById("IMG1_ID2").innerHTML="";
});	

//Usian Bolt
var x3 = document.getElementById("imageId3");
x3.addEventListener("mouseover", function() {
x3.src="Images/Images_Main_Gavinu/IMG_03.jpg";
x3.height="220";
x3.width="343";
document.getElementById("IMG1_ID3").innerHTML="100m,200m and 4x100m World Record. 6 Olympic and 5 IAAF World Championship Gold Medals.  ";
});
x3.addEventListener("mouseout", function() {
x3.src="Images/Images_Main_Gavinu/Image_3.jpg";
x3.height="200";
x3.width="300";
document.getElementById("IMG1_ID3").innerHTML="";
});	

//Steffi Grat
var x4 = document.getElementById("imageId4");
x4.addEventListener("mouseover", function() {
x4.src="Images/Images_Main_Gavinu/IMG_04.jpg";
x4.height="220";
x4.width="343";
document.getElementById("IMG1_ID4").innerHTML="Won three Grand Slam Tournaments in a Calendar year 5 times. With a winning total of 22 Grand Slam Tournaments. Ranked World 1 by WTA.";
});
x4.addEventListener("mouseout", function() {
x4.src="Images/Images_Main_Gavinu/Image_4.jpg";
x4.height="300";
x4.width="200";
document.getElementById("IMG1_ID4").innerHTML="";

});	

//Michael Jordan
var x5 = document.getElementById("imageId5");
x5.addEventListener("mouseover", function() {
x5.src="Images/Images_Main_Gavinu/Image_5.jpg";
x5.height="220";
x5.width="343";
document.getElementById("IMG1_ID5").innerHTML="6 NBA championships with NBA Finals MVP each time. Retired 3 differet times from the NBA.";
});
x5.addEventListener("mouseout", function() {
x5.src="Images/Images_Main_Gavinu/IMG_05.jpg";
x5.height="300";
x5.width="200";
document.getElementById("IMG1_ID5").innerHTML="";
});	

//Page Color
function colorpick(){
	var c=document.getElementById("CP_ID");
	var colorpick= c.options[c.selectedIndex].value;
	document.getElementById("mainBody").style.background=colorpick;
}

//Text Color
function colorPickTxt(){
	var tC=document.getElementById("CT_ID");
	var colorPickTxt=tC.options[tC.selectedIndex].value;
	document.getElementById("mainBody").style.color = colorPickTxt;
}

//Animation
var text = document.getElementById('text');
var newDom = '';
var animationDelay = 6;

for(let i = 0; i < text.innerText.length; i++){
    newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
}

text.innerHTML = newDom;
var length = text.children.length;

for(let i = 0; i < length; i++){
    text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
}


               

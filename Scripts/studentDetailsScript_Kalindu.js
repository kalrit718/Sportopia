
// All work done by Kalindu

document.getElementById("studentDetailsDiv1").style.display = "none";
document.getElementById("studentDetailsDiv2").style.display = "none";
document.getElementById("studentDetailsDiv3").style.display = "none";
document.getElementById("studentDetailsDiv4").style.display = "none";

document.getElementById("detailsParaId1").style.display = "none";
document.getElementById("detailsParaId2").style.display = "none";
document.getElementById("detailsParaId3").style.display = "none";
document.getElementById("detailsParaId4").style.display = "none";

document.getElementById("studentDivId1").addEventListener("mouseover", hideBgLogo);
document.getElementById("studentDivId1").addEventListener("mouseout", showBgLogo);
document.getElementById("studentDivId1").addEventListener("mouseover", showDetailsDiv1);
document.getElementById("studentDivId1").addEventListener("mouseout", hideDetailsDiv1);

document.getElementById("studentDivId2").addEventListener("mouseover", hideBgLogo);
document.getElementById("studentDivId2").addEventListener("mouseout", showBgLogo);
document.getElementById("studentDivId2").addEventListener("mouseover", showDetailsDiv2);
document.getElementById("studentDivId2").addEventListener("mouseout", hideDetailsDiv2);

document.getElementById("studentDivId3").addEventListener("mouseover", hideBgLogo);
document.getElementById("studentDivId3").addEventListener("mouseout", showBgLogo);
document.getElementById("studentDivId3").addEventListener("mouseover", showDetailsDiv3);
document.getElementById("studentDivId3").addEventListener("mouseout", hideDetailsDiv3);

document.getElementById("studentDivId4").addEventListener("mouseover", hideBgLogo);
document.getElementById("studentDivId4").addEventListener("mouseout", showBgLogo);
document.getElementById("studentDivId4").addEventListener("mouseover", showDetailsDiv4);
document.getElementById("studentDivId4").addEventListener("mouseout", hideDetailsDiv4);

function hideBgLogo() {
//	alert();
	document.getElementById("movingLogoDivId").style.display = "none";
}
function showBgLogo() {
	document.getElementById("movingLogoDivId").style.display = "block";
}

function showDetailsDiv1() {
	document.getElementById("studentDetailsDiv1").style.display = "block";
	document.getElementById("detailsParaId1").style.display = "block";	
}
function hideDetailsDiv1() {
//	setTimeout(function(){  }, 1000);
	document.getElementById("detailsParaId1").style.display = "none";
	document.getElementById("studentDetailsDiv1").style.display = "none";
}

function showDetailsDiv2() {
	document.getElementById("studentDetailsDiv2").style.display = "block";
	document.getElementById("detailsParaId2").style.display = "block";
}
function hideDetailsDiv2() {
	document.getElementById("detailsParaId2").style.display = "none";
	document.getElementById("studentDetailsDiv2").style.display = "none";
}
function showDetailsDiv3() {
	document.getElementById("studentDetailsDiv3").style.display = "block";
	document.getElementById("detailsParaId3").style.display = "block";
}
function hideDetailsDiv3() {
	document.getElementById("detailsParaId3").style.display = "none";
	document.getElementById("studentDetailsDiv3").style.display = "none";
}
function showDetailsDiv4() {
	document.getElementById("studentDetailsDiv4").style.display = "block";
	document.getElementById("detailsParaId4").style.display = "block";
}
function hideDetailsDiv4() {
	document.getElementById("detailsParaId4").style.display = "none";
	document.getElementById("studentDetailsDiv4").style.display = "none";
}





  <!-- validate the form inputs-->
  function validation_form(thisform){
var n=thisform.elements[0].value;
var e=thisform.elements[1].value;
var t=thisform.elements[2].value;
var m=thisform.elements[3].value;
    <!--after initializing the variables check the user has filled the dat,if not popup message to enter the relevent data -->
 if (n==null||n==""){
   alert('enter name');
   return
  }

 if (e==null||e==""){
   alert('Enter your mobile number');
   return
  }
  if (t==null||t==""){
    alert('Enter your address');
    return
   }
  if(m.indexOf('@')==-1 || m.indexOf('.')==-1){
    alert('problem with Email addy');
    return
   }
 <!--Display the popup message -->
  DispWin = window.open('','NewWin', 'toolbar=no,status=no')
  message = "Dear ," + document.input.yourname.value;
  message += "your address is:" + document.input.address.value;
  message += "</br>Contact number" + document.input.phone.value;
  message += "</br>We will contact you through your email," + document.input.email.value;
  message+= "</br>Your total bill is $"+document.getElementById("finaltotal").innerHTML;

  DispWin.document.open()
  DispWin.document.write(message);
  DispWin.document.close();
}

function total(){
			var products = document.querySelectorAll('.product');
			for(var i=0; products[i]; i++){
			    var quantity = document.getElementsByClassName("quantity");
	            var price = document.getElementsByClassName("price");
			    var total = document.getElementsByClassName("total");
  				total[i].innerHTML = price[i].value * quantity[i].value;
			}
        }

function setup() {
    var lastCol = document.getElementById("subtotal_header");



    var amounts = document.getElementsByTagName("select");
    for(var i = 0; i < amounts.length; i++){
        amounts[i].onchange = doTotals;
    }


}

window.onload = setup;

<!-- font function is used to change the fontsize of the web page.We can chnage the fontsize from the slider bar-->
var size;
 function font(){
  var x=document.getElementById('fontsize').value;
  var y=document.getElementById('size');
  y.style.fontSize=x+"px";
  size=x;
}
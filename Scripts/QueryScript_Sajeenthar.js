function validation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var query = document.getElementById("query").value;
    var error_mess = document.getElementById("error_mess");
    var text;

    error_mess.style.padding = "3%";

    if(name.length < 2 ){
        text = "Please Enter Valid Name";
        error_mess.innerHTML = text;
        return false;
    }if(email.indexOf("@") == -1 || email.indexOf(".") == -1 || email.length < 8){
        text = "Please Enter Valid Email";
        error_mess.innerHTML = text;
        return false;
    }else if(isNaN(number) || number.length!=10){
        text = "Please Enter Valid Phone Number";
        error_mess.innerHTML = text;
        return false;
    }else if(query.length < 10){
        text = "Please Enter Query more than 10 Characters";
        error_mess.innerHTML = text;
        return false;
    }
    alert("Hi  " + name + " your form has submited")
    return false;
}
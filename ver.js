 function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username";
        return false;
    }
    else if(document.Formfill.Username.value.length<6){
        document.getElementById("result").innerHTML="Enter Atleast 6 Letter";
        return false;
    }
    else if(document.Formfill.phone.value==""){
        document.getElementById("result").innerHTML="Enter phone number";
        return false;
    }
    else if(document.Formfill.phone.value.length<10){
        document.getElementById("result").innerHTML="Number must be 10 digits";
        return false;
    }
    else if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter Your Email";
        return false;
    }
    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter your Password";
        return false;
    }
    else if(document.Formfill.Password.value.length<6){
        document.getElementById("result").innerHTML="Password must be 6-digits";
        return false;
    }
    else if(document.Formfill.CPassword.value==""){
        document.getElementById("result").innerHTML="Enter Confirm Password";
        return false;
    }
    else if(document.Formfill.CPassword.value !== document.Formfill.Password.value){
        document.getElementById("result").innerHTML="Password don't matched";
        return false;
    }
    if(document.Formfill.Password.value == document.Formfill.CPassword.value){
       popup.classList.add("open-slide")
        return false;
    }
}
var popup=document.getElementById("popup");
 
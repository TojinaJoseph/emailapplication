function emailvalidation(){
var email=document.getElementById("emailme").value;
var regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
if(regexp.test(email)){
    emailme.style.border="2px solid green";
    return true;
}
else{
    emailme.style.border="2px solid red";
    return false;
}
}
 

function messagevalidation(){
var msg=document.getElementById("messageme").value;
if(msg!=""){
    messageme.style.border="2px solid green";
return true;
}
else{
    messageme.style.border="2px solid red";
return false;
}
}
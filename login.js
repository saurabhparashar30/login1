function validation(){
	var mail=document.forms["myForm"]["mail"].value;
	var pass=document.forms["myForm"]["password"].value;
	var f=1;
	if(mail==""){
		alert("Enter Mail");
		f=0;
	}
	else if(pass==""){
		alert("Enter Password");
		f=0;
	}
	if(f==1){
		var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
		if(!mail.match(mailformat)){
			alert("Email is not correct");
		}
		else if(!pass.match(passw)){
			alert("Password shuould be atleast 6 character long and must contain an uppercase, lowecase and a digit");
		}
		else{
			alert("Login Success");
		}
	}
}
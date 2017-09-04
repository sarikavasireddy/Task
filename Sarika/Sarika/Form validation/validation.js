


var user=document.querySelector("#user");

var button=document.querySelector("#button");

var pwd=document.querySelector("#pwd");

var hide=document.querySelector(".hide");

hide.classList.add("hide");



button.addEventListener("click",function(){

	
	validation();
		

	

});





function validation(){
	 

	 	
	if(user.value==""){

		alert("please enter your username ");
		}


		



		else if(pwd.value==""){

		alert("please select a password below");
		}

		else
			hide.classList.remove("hide");


}


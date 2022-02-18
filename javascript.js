
	function ValidationChecker() {
		var name = document.forms["RegForm"]["Name"];
		var password = document.forms["RegForm"]["Password"];
		var confirm = document.forms["RegForm"]["ConfirmPassword"];

		if (name.value == "") {
			window.alert("Please enter your name.");
			name.focus();
			return false;
		}

		if (password.value == "") {
			window.alert("Please enter your password");
			password.focus();
			return false;
		}
    if (confirm.value==""){
      window.alert("Please enter confirm password");
      confirm.focus();
      return false;
    }
    if (password.value != confirm.value){
      window.alert("Your password is not the same");
      confirm.focus();
      return false;
    }

		return true;
	}


  let input = document.querySelector(".input");
  let input2 = document.querySelector(".input2");
  let input3 = document.querySelector(".input3");
 let button = document.querySelector(".submit");

 button.disabled = true; //setting button state to disabled

 input.addEventListener("change", stateHandle);
 input2.addEventListener("change", stateHandle);
 input3.addEventListener("change", stateHandle);

 function stateHandle() {
     if (document.querySelector(".input").value === "") {
         button.disabled = true; //button remains disabled
     }else if (document.querySelector(".input2").value === "") {
         button.disabled = true; //button remains disabled
     }
     else if (document.querySelector(".input3").value === "") {
         button.disabled = true; //button remains disabled
       }
      else {
         button.disabled = false; //button is enabled
     }
 }

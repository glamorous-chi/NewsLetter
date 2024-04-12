const subscribeButton = document.querySelector("#subscribe-btn ");
// const success = document.querySelector(".success");
const emailInput = document.querySelector("#email-input");
const emailError = document.querySelector("#emailError");


emailInput.addEventListener("focus",function(){
  emailInput.style.border ="1px solid red";

  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(emailValue.length >=5 && emailRegex.test(emailValue)){
      emailInput.style.border = "1px solid blue";
      emailError.innerHTML = ""
  }
  else{
      emailInput.style.border ="1px solid red";
  }
  
})

emailInput.addEventListener("blur",function(){
    emailInput.style.border = "";
    emailError.style.border = "";
})
emailInput.addEventListener("input",function(){
const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(emailValue.length >=5 && emailRegex.test(emailValue)){
    emailInput.style.border = "1px solid blue";
    emailError.innerHTML = ""
    emailInput.style.background = " white";
    emailInput.style.color = "black";
  }
  else if(emailValue.length <=3){
    emailInput.style.border = "1px solid red";
    emailError.innerHTML = "Must be five characters long";
  }
  else{
    emailInput.style.border = "1px solid red";
    emailError.innerHTML = "Valid email required";
  }
})

const isEmailValid  = () => {
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailValid = emailValue.length >=5 && emailRegex.test(emailValue);
  return emailValid;
}

subscribeButton.addEventListener("click", (event) =>{
  if(!isEmailValid()){
  event.preventDefault();
  emailInput.style.border = "1px solid tomato";
  emailError.innerHTML = "This field is required"; 
  emailInput.style.color = "tomato";
  emailInput.style.background = " #FFE7E9";
  return
}
else{
  subscribeButton.style.background = 'linear-gradient(tomato,tomato,tomato)';
  
}

// if(emailRegex.test(emailValue) == false){
//   event.preventDefault();
//   emailInput.style.border = "1px solid red";
//   emailError.innerHTML = "Valid email required";
//   // subscribeButton.style.background = 'linear-gradient(tomato,tomato,tomato)';
// }
// else if(emailRegex.test(emailValue) != false){
//   subscribeButton.style.background = 'linear-gradient(tomato,tomato,tomato)';
// }
})
const emailValue = emailInput.value.trim();
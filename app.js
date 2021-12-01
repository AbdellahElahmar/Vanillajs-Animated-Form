function animatedform(){
  const arrows = document.querySelectorAll(".fa-arrow-down");
  arrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextform = parent.nextElementSibling;

      if(input.type === "text" && validationUser(input)){
        nextSlide(parent, nextform);
      }else if(input.type === "email" && validationEmail(input)){
        nextSlide(parent, nextform);
      }else if(input.type === "password" && validationUser(input)){
        nextSlide(parent, nextform);
      }else {
        parent.style.animation = "shake 0.5s ease";
      }
      parent.addEventListener("animationend", () =>{
        parent.style.animation = "";
      })
      
    });

  });

}
function validationUser(user){
  if(user.value.length < 6){
    error("rgb(189,87,87");
  }
  else{
    error("rgb(87,189,150");
    return true;
  }
}


function validationEmail(Email){
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(validation.test(Email.value)){
    error("rgb(87,189,150");
    return true;
    
  }
  else{
    error("rgb(189,87,87");
    
  }
}

function error(color){
  document.body.style.backgroundColor = color;

}
function nextSlide(parent, nextform){
  parent.classList.add("inactive");
  parent.classList.remove("active");
  nextform.classList.add("active");
}



  animatedform();
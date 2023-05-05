const apuntadorALogin = document.getElementById("btnLogin");
//asocio el evento click
apuntadorALogin.addEventListener("click", Login);

function Login() {
  // capturo el username
  const username = document.getElementById("username").value;
  // capturo el password
  const password = document.getElementById("password").value;
  //scope de una variable
  const resultado = document.getElementById("resultado");

  //valido que se hayan completado los campos username y password
  //guard
  if (username === "" || password === "") {
    resultado.innerHTML = "Complete todos los campos";
  } else {
    //evaluó
    if (username === "admin" && password === "123") {
      resultado.innerHTML = "Login correcto";
    } else {
      resultado.innerHTML = "Login incorrecto";
    }
  }
}
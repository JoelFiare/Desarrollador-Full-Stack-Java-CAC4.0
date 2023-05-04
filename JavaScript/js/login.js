const apuntadorALogin = document.getElementById("btnLogin");
apuntadorALogin.addEventListener("click", Login);

function Login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const resultado = document.getElementById("resultado");

  //validar que los dos datos username y password estén completos
  if (username === "" || password === "") {
    resultado.innerHTML = "Complete todos los campos";
  } else {
    if (username === "admin" && password === "123") {
      resultado.innerHTML = "Login correcto";
    } else {
      resultado.innerHTML = "Login incorrecto";
    }
  }
}
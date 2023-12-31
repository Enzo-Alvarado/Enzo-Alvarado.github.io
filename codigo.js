const botonAbrir = document.querySelector(".botonAbrir");
const botonCerrar = document.querySelector(".botonCerrar");
const nav = document.querySelector("#contenedorOpciones");
const opcionPerfil = document.querySelector(".perfil");
const opcionQueVendemos = document.querySelector(".queVendemos");
const opcionContacto = document.querySelector(".contacto");
const opcionInicio = document.querySelector(".inicio");
const opcionInformacion = document.querySelector(".informacion");

botonAbrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

function cerrar() {
  nav.classList.remove("visible");
}

botonCerrar.addEventListener("click", cerrar);
opcionPerfil.addEventListener("click", cerrar);
opcionQueVendemos.addEventListener("click", cerrar);
opcionContacto.addEventListener("click", cerrar);
opcionInicio.addEventListener("click", cerrar);
opcionInformacion.addEventListener("click", cerrar);

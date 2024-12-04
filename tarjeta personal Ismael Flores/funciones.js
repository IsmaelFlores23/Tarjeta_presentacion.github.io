// Obtener elementos del DOM
const btnHamburguesa = document.querySelector("#botonHambrguesa");
const nav = document.querySelector("#nav");
const btnDark = document.querySelector("#btnDark");
const root = document.documentElement;
const cajitas = document.querySelectorAll(".cajita");

// Función para mostrar u ocultar el menú
btnHamburguesa.addEventListener("click", mostrarNav);

function mostrarNav() {
    nav.classList.toggle("mostrar");
}

// Función para activar el modo oscuro
function activarModoOscuro() {
    root.style.setProperty("--colorTarjeta", "rgb(0, 0, 0)");
    root.style.setProperty("--colorTextoTarjeta", "#fff");
    root.style.setProperty("--colorFondo", "rgba(17, 17, 17, 0.83)");

    // Cambiar los bordes de las "cajitas" si existen
    cajitas.forEach((caja) => {
        caja.style.border = "1px solid #fff";
    });

    // Guardar el estado en el localStorage
    localStorage.setItem("modoOscuro", "Activado");

    // Cambiar el texto y color del botón de modo oscuro
    btnDark.textContent = "Light";
    btnDark.style.setProperty("--colorPrimario", "#fff");
    btnDark.style.color = "#000";
}

// Función para desactivar el modo oscuro
function desactivarModoOscuro() {
    root.style.setProperty("--colorTarjeta", "#FFFFFF");
    root.style.setProperty("--colorTextoTarjeta", "#000");
    root.style.setProperty("--colorFondo", "#f4f4f4");

    // Cambiar los bordes de las "cajitas" si existen
    cajitas.forEach((caja) => {
        caja.style.border = "1px solid #000";
    });

    // Guardar el estado en el localStorage
    localStorage.setItem("modoOscuro", "Desactivado");

    // Cambiar el texto y color del botón de modo oscuro
    btnDark.textContent = "Dark";
    btnDark.style.setProperty("--colorPrimario", "#E23636");
    btnDark.style.color = "#fff";
}

// Comprobar el estado del modo oscuro al cargar la página
const estadoModoOscuro = localStorage.getItem("modoOscuro");

if (estadoModoOscuro === "Activado") {
    activarModoOscuro();
} else {
    desactivarModoOscuro();
}

// Añadir el evento para alternar el modo oscuro al hacer clic en el botón
btnDark.addEventListener("click", () => {
    const estadoModoOscuro = localStorage.getItem("modoOscuro");
    if (estadoModoOscuro === "Desactivado") {
        activarModoOscuro();
    } else {
        desactivarModoOscuro();
    }
});



// ==========================
// MENSAJE DE BIENVENIDA
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Portafolio cargado correctamente");

    const titulo = document.querySelector("header h1");

    if (titulo) {
        titulo.style.opacity = "0";
        titulo.style.transform = "translateY(-20px)";

        setTimeout(() => {
            titulo.style.transition = "all 1s ease";
            titulo.style.opacity = "1";
            titulo.style.transform = "translateY(0)";
        }, 300);
    }

});

// ==========================
// BOTÓN VOLVER ARRIBA
// ==========================

const btnTop = document.createElement("button");
btnTop.id = "btnTop";
btnTop.innerHTML = "↑";

document.body.appendChild(btnTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }

});

btnTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ==========================
// RESALTAR MENÚ ACTIVO
// ==========================

const enlaces = document.querySelectorAll("nav a");

enlaces.forEach(enlace => {

    const paginaActual =
        window.location.pathname.split("/").pop();

    const href = enlace.getAttribute("href");

    if (href === paginaActual) {

        enlace.style.backgroundColor = "#1e40af";
        enlace.style.color = "#fff";

    }

});

// ==========================
// ANIMACIÓN AL HACER SCROLL
// ==========================

const elementos = document.querySelectorAll(
    "section, .actividad, .bitacora, .perfil"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);

elementos.forEach(elemento => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(30px)";
    elemento.style.transition = "all .8s ease";

    observer.observe(elemento);

});

// ==========================
// FECHA Y HORA ACTUAL
// ==========================

const footer = document.querySelector("footer");

if (footer) {

    const fecha = document.createElement("p");

    function actualizarFecha() {

        const ahora = new Date();

        fecha.innerHTML =
            "Última visualización: " +
            ahora.toLocaleDateString("es-PA") +
            " - " +
            ahora.toLocaleTimeString("es-PA");

    }

    actualizarFecha();

    setInterval(actualizarFecha, 1000);

    footer.appendChild(fecha);

}
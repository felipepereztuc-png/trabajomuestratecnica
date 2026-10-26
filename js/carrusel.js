
const fotos = [
  {
    src: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1800&q=85",
    titulo: "TRABAJOS DE LA MUESTRA",
    alt: "Computadora en un espacio de trabajo"
  },
  {
    src: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=1800&q=85",
    titulo: "ARMADO DE COMPUTADORAS",
    alt: "Componentes de una computadora"
  },
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85",
    titulo: "DESARROLLO WEB",
    alt: "Trabajo con computadoras y tecnología"
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=85",
    titulo: "TECNOLOGÍA Y COMPONENTES",
    alt: "Placa electrónica y componentes"
  }
];

const imagen = document.getElementById("foto-principal");
const titulo = document.getElementById("titulo-foto");
const numero = document.getElementById("numero-foto");
const puntos = [...document.querySelectorAll(".punto")];

let indice = 0;
let temporizador;

function mostrarFoto(nuevoIndice) {
  indice = (nuevoIndice + fotos.length) % fotos.length;

  imagen.style.opacity = "0";

  window.setTimeout(() => {
    imagen.src = fotos[indice].src;
    imagen.alt = fotos[indice].alt;
    titulo.textContent = fotos[indice].titulo;
    numero.textContent =
      `${String(indice + 1).padStart(2, "0")} / ${String(fotos.length).padStart(2, "0")}`;

    puntos.forEach((punto, i) => {
      punto.classList.toggle("activo", i === indice);
      punto.setAttribute("aria-pressed", String(i === indice));
    });

    imagen.style.opacity = "1";
  }, 180);
}

function iniciarCarrusel() {
  window.clearInterval(temporizador);

  temporizador = window.setInterval(() => {
    mostrarFoto(indice + 1);
  }, 5000);
}

document.getElementById("anterior").addEventListener("click", () => {
  mostrarFoto(indice - 1);
  iniciarCarrusel();
});

document.getElementById("siguiente").addEventListener("click", () => {
  mostrarFoto(indice + 1);
  iniciarCarrusel();
});

puntos.forEach((punto, i) => {
  punto.addEventListener("click", () => {
    mostrarFoto(i);
    iniciarCarrusel();
  });
});

mostrarFoto(0);
iniciarCarrusel();

// Pacientes
let index = 0;
const feedbacks = document.querySelectorAll(".feedback");
const dots = document.querySelectorAll(".dot");

function mostrarFeedback() {
  feedbacks.forEach((item, i) => {
    item.style.display = i === index ? "flex" : "none";
    dots[i].classList.toggle("active", i === index);
  });
}

function mudarFeedback(direcao) {
  index += direcao;
  if (index < 0) index = feedbacks.length - 1;
  else if (index >= feedbacks.length) index = 0;
  mostrarFeedback();
}

function irParaFeedback(i) {
  index = i;
  mostrarFeedback();
}

setInterval(() => mudarFeedback(1), 5000);
mostrarFeedback();


// Banner rotativo
let slideIndex = 0;
showSlides();
function showSlides() {
    let slides = document.querySelectorAll(".slideFade img");
    slides.forEach(slide => slide.style.display = "none");
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000);
}

// Especialidades 
function openTab(evt, tabName) {
    let tabs = document.querySelectorAll(".tab-content");
    let buttons = document.querySelectorAll(".tab-link");
    tabs.forEach(tab => tab.classList.remove("active"));
    buttons.forEach(button => button.classList.remove("active"));
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Efeito de Digitacção do Titulo
const texto = "Psico. Denise França";
let item = 0;

function typeEffect() {
    if (item < texto.length) {
        document.getElementById("digitacao").innerHTML += texto.charAt(item);
        item++;
        setTimeout(typeEffect, 150); // Velocidade da digitação
    }
}

window.onload = () => {
    setTimeout(typeEffect, 500); // Pequeno delay antes de começar
};

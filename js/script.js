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

setInterval(() => mudarFeedback(1), 15000);
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
        setTimeout(typeEffect, 150);
    }
}

window.onload = () => {
    setTimeout(typeEffect, 500);
};


// Validacao e Mascara Ava Gratuita
document.addEventListener("DOMContentLoaded", function() {
  var input = document.getElementById("whatsapp");

  input.addEventListener("input", function(e) {
    let numbers = this.value.replace(/\D/g, ''); // Remove tudo que não for número
    if (numbers.length > 11) numbers = numbers.slice(0, 11);

    let formatted = numbers;

    if (numbers.length > 0) {
      formatted = "(" + numbers.substring(0, 2);
    }
    if (numbers.length >= 3) {
      formatted += ")" + numbers.substring(2, 7);
    }
    if (numbers.length >= 8) {
      formatted += "-" + numbers.substring(7, 11);
    }

    this.value = formatted;
  });
});


//Envio o Email usando o Email Js
emailjs.init({
  publicKey: "xRNJWyODol9wVP9XN"
});

document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById("modalCarregando").style.display = "block";

  var nome = document.getElementById('nome').value;
  var whatsapp = document.getElementById('whatsapp').value;

  grecaptcha.ready(function() {
    grecaptcha.execute('6Lff5CkrAAAAAPaaBhtikMyRCtm8qzFfIyCFlQh_', { action: 'submit' }).then(function(token) {
      
      var templateParams = {
        nome: nome,
        whatsapp: whatsapp,
        'g-recaptcha-response': token 
      };

      emailjs.send("service_4xg01d3", "template_vp3p6w3", templateParams)
      .then(function(response) {
        console.log('Sucesso:', response);
        document.getElementById("modalCarregando").style.display = "none";
        document.getElementById("modalSucesso").style.display = "block";
        document.getElementById("formulario").reset();
    
      }, function(error) {
        console.log('Erro:', error);
        document.getElementById("modalCarregando").style.display = "none";
        alert("Houve um erro ao solicitar sua sessão. Tente novamente.");
      });

    });
  });
});


// Fecha ao clicar no botão OK
document.getElementById("fecharModal").addEventListener("click", function () {
  document.getElementById("modalSucesso").style.display = "none";
});

// Fecha ao clicar fora da modal de sucesso
window.addEventListener("click", function (event) {
  const modalSucesso = document.getElementById("modalSucesso");
  if (event.target === modalSucesso) {
    modalSucesso.style.display = "none";
  }
});






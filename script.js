

document.addEventListener('contextmenu', event => event.preventDefault());
//deuxar abtela em telacheia
if (document.documentElement.requestFullscreen) {
    // Adiciona um evento de clique para ativar o modo de tela cheia
    document.addEventListener('dblclick', function() {
        document.documentElement.requestFullscreen();
    });
} else {
    console.log('Seu navegador não suporta o modo de tela cheia.');
};

//variaveis de inicio

var icon=document.getElementById("icon");
var entrar=document.getElementById("entrar");
var nome_usuario=document.getElementById("userText");
var bandeira=document.getElementById("bandeira");
var contMenu=document.getElementsByClassName("menu-box");
var cont_curriculo=document.getElementById("cont_criar_curriculo");
var cont_qrcode=document.getElementById("cont_criar_qrcode");
var txt_ola=document.getElementById("texto_saudacao");


//variaveis da caixav1 do carrossel
var presencial=document.getElementById("presencial");
var ead=document.getElementById("ead");
var banners=document.getElementsByClassName("banners");
var caixa2=document.getElementById("caixa2");
var caixa3=document.getElementById("caixa3");
var contatos=document.getElementById("contato");

//variaveisndo carrossel
var carousel1=document.getElementsByClassName("carousel1");
var carousel=document.getElementsByClassName("carousel");
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button-right');
const prevButton = document.querySelector('.carousel-button-left');
const slideWidth = slides[0].getBoundingClientRect().width;


//codigo para que a bandeira apareca e suma e o menu dependendo do scroll
bandeira.style="transition:0.3s; top:0vh;";
  var n=0;
  window.addEventListener('scroll', function() {
    if (window.scrollY <= 0) {
       bandeira.style="transition:0.3s; top:0vh;";
       cont_curriculo.style="transition:2s; opacity:0;";
       cont_qrcode.style="transition:2s; opacity:0;";
    if(n==1){
       contMenu[0].style="transition:0.4s; display:block; top:8vh; left:2%; position:absolute;";
   }
    }else
    if (window.scrollY >= 20) { 
       bandeira.style="transition:0.3s; top:-6vh;";
       cont_curriculo.style="transition:5s; opacity:1;";
       cont_qrcode.style="transition:5s; opacity:1;";
    if(n==1){
       contMenu[0].style="transition:0.4s; display:block; width:100%; top:0%; left:0%; position:fixed;";
    };
  }});
  
  icon.addEventListener("click",function(){
  if(n==0){contMenu[0].style="display:block;";n=1}else
  if(n==1){contMenu[0].style="display:none;";n=0};
  });
  
  
//agurada 2s para o texto de saudacao aparever
setTimeout(function(){
  txt_ola.style="transition:3s; opacity:1; left:50%;";
  },2000);



//funcao pra quando o bitqo cobtato for clucado ele descer pra baixo
function contato(){contatos.scrollIntoView({ behavior: "smooth", top:210 , block: "start" });};



//cfuncao para o carroseelll passasr deumaimagem oara outra
const setSlidePosition = (slide, index) => {
slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
currentSlide.classList.remove('current-slide');
targetSlide.classList.add('current-slide');
};

nextButton.addEventListener('click', e => {
const currentSlide = track.querySelector('.current-slide');
const nextSlide = currentSlide.nextElementSibling;

if (nextSlide) {
moveToSlide(track, currentSlide, nextSlide);
} else {
moveToSlide(track, currentSlide, slides[0]);
}
});

prevButton.addEventListener('click', e => {
const currentSlide = track.querySelector('.current-slide');
const prevSlide = currentSlide.previousElementSibling;

if (prevSlide) {
moveToSlide(track, currentSlide, prevSlide);
} else {
moveToSlide(track, currentSlide, slides[slides.length - 1]);
}
});

//mostrar diferentes tipos de carrosek dependendo do modo

presencial.addEventListener("click",function(){
   carousel1[0].style.display="none";
   carousel[0].style.display="block";
   ead.style.opacity=0.2;
   presencial.style.opacity=1;
  });
  ead.addEventListener("click",function(){
  carousel1[0].style.display="block";
  carousel[0].style.display="none";
  ead.style.opacity=1;
  presencial.style.opacity=0.2;
  });

//mosyraro baner de sobre e pegarbo formulario e a mensagem de soliciyao enviada
window.sr=ScrollReveal({ reset: true });
sr.reveal('#cont_img_sobre', { duration: 2000,interval: 3, x: 70, delay:0 });
var form=document.getElementsByClassName("contact-form");
var noti=document.getElementsByClassName("notification-box");

const dado = localStorage.getItem("dados");
var btnContato=document.getElementById("btnContato");
if(dado==2){
 btnContato.innerHTML="contato";
 form[0].style="display:none;";
 noti[0].style="display:flex;";
}else{};


//instagram
document.getElementById('notifyButton').addEventListener('click', () => {
            // Verifica se a API de Notificações é suportada pelo navegador
            if (!("Notification" in window)) {
                console.log("Este navegador não suporta notificações de desktop");
                return;
            }

            // Verifica a permissão da notificação
            if (Notification.permission === 'granted') {
                showNotification();
            } else if (Notification.permission !== 'denied') {
                Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                        showNotification();
                    }
                });
            }
        });

        function showNotification() {
            const notification = new Notification('Olá!', {
                body: 'Esta é uma notificação pop-up',
                icon: 'icone.png' // Opcional, substitua com o caminho do seu ícone
            });

            notification.onclick = () => {
                window.open('https://www.seusite.com'); // Opcional, substitua com a URL do seu site
            };
        };


  
 
  
  
  
   
  
  
  

  
  
  
  
 
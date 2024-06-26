



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
var sobre=document.getElementById("sobre");
var btnsobre=document.getElementById("btnsobre");
var card=document.getElementById("card");
var fechar=document.getElementById("fechar");
var fundo=document.getElementById("fundo");


var virar=0;
card.addEventListener("click", function(){
 if(virar==0){fechar.style="display:block;"; card.style="transition:1s;transform:translate(-50%,-50%) rotateY(180deg);";virar=1}else
 if(virar==1){fechar.style="display:none;"; card.style="transition:1s;transform:translate(-50%,-50%) rotateY(0deg);";virar=0};
});

valuer=0;
btnsobre.addEventListener("click", function(){
 if(valuer==0){btnsobre.innerHTML="ver mais";sobre.style="display:none;";valuer=1}else
 if(valuer==1){btnsobre.innerHTML="ver menos";sobre.style="display:block;position:relative;color:white;background:none;font-size:110%;margin-top:3%;text-transform:lowercase;width:90%;left:50%;transform:translate(-50%,0%);text-align:justify;";valuer=0};
});

//setTimeout(function(){fundo.style="display:block;"},2000)

var close;
fechar.addEventListener("click", function(){close=1; localStorage.setItem("fechar",close); fundo.style="display:none;"  });

var close= localStorage.getItem("fechar");
setInterval(function(){
if(close==1){fundo.style="display:none;"}else{fundo.style="display:block;"};
},2000);
//variaveis da caixav1 do carrossel
var presencial=document.getElementById("presencial");
var ead=document.getElementById("ead");
var banners=document.getElementsByClassName("banners");
var caixa2=document.getElementById("caixa2");
var caixa3=document.getElementById("caixa3");
var contatos=document.getElementById("contato");

//variaveisndo carrossel%
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
    /*if(n==1){
       contMenu[0].style="transition:0.4s; display:block; top:8vh; left:50%; position:absolute;";
   }*/
    }else
    if (window.scrollY >= 20) { 
       bandeira.style="transition:0.3s; top:-6vh;";
    /*if(n==1){
       contMenu[0].style="transition:0.4s; display:block; width:96%; top:1%; left:50%; position:fixed;";
    };*/
  }});
  
 /* icon.addEventListener("click",function(){
  if(n==0){contMenu[0].style="display:block;";n=1}else
  if(n==1){contMenu[0].style="display:none;";n=0};
  });*/
  
  
//agurada 2s para o texto de saudacao aparever
setTimeout(function(){
  txt_ola.style="transition:3s; opacity:1; left:50%;";
  },90);



//funcao pra quando o bitqo cobtato for clucado ele descer pra baixo
function contato(){contatos.scrollIntoView({ behavior: "smooth", top:210 , block: "start" });};

var slide=0;
var voltar1=document.getElementById("voltar1");
var passar1=document.getElementById("passar1");
var passar1=document.getElementById("passar1");
var carouselimage1=document.getElementById("carousel-image1");
 voltar1.addEventListener('click', function() {slide--;console.log(slide)});
 passar1.addEventListener('click', function() {slide++;console.log(slide)});
 
 setInterval(function(){
  if(slide<0){carouselimage1.src="imagens/b7.png";slide=6};
  if(slide>6){carouselimage1.src="imagens/b1.png";slide=0};
  if(slide==0){carouselimage1.src="imagens/b1.png";}else
  if(slide==1){carouselimage1.src="imagens/b2.png";}else
  if(slide==2){carouselimage1.src="imagens/b3.png";}else
  if(slide==3){carouselimage1.src="imagens/b4.png";}else
  if(slide==4){carouselimage1.src="imagens/b5.png";}else
  if(slide==5){carouselimage1.src="imagens/b6.png";}else
  if(slide==6){carouselimage1.src="imagens/b7.png";};
 },0);

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

//instageam
function openInstagram() {
            // Substitua "nomedeusuario" pelo nome da conta que você deseja que o visitante siga
            const username = "galileucodo";
            // URL do perfil do Instagram
            const instagramURL = `https://www.instagram.com/galileucodo?igsh=Z2JsaW9nbmx4MGRj`;
            // Abrir Instagram no navegador
            window.open(instagramURL, "_blank");
        };
function mack() {
            // Substitua "nomedeusuario" pelo nome da conta que você deseja que o visitante siga
            const username = "mack_illustrator";
            // URL do perfil do Instagram
            const instagramURL = `https://www.instagram.com/mack_developer?igsh=MTBkam40YmFoMDB3aw==`;
            // Abrir Instagram no navegador
            window.open(instagramURL, "_blank");
        };

document.getElementById('wa1').addEventListener('click', function() {
            var phoneNumber = '5599981041696'; // substitua pelo número de telefone desejado
            var message = 'Olá, tudo bem? Gostaria de saber mais sobre a galileu cursos'; // mensagem que deseja enviar
            
            // Codificar a mensagem para que seja um parâmetro válido na URL
            var encodedMessage = encodeURIComponent(message);
            
            // Construir o link do WhatsApp com o número de telefone e a mensagem
            var whatsappLink = 'whatsapp://send?phone=' + phoneNumber + '&text=' + encodedMessage;
            
            window.open(whatsappLink);
        });
        
document.getElementById('wa2').addEventListener('click', function() {
            var phoneNumber = '559999035262'; // substitua pelo número de telefone desejado
            var message = 'Olá, tudo bem? Gostaria de saber mais sobre a galileu cursos'; // mensagem que deseja enviar
            
            // Codificar a mensagem para que seja um parâmetro válido na URL
            var encodedMessage = encodeURIComponent(message);
            
            // Construir o link do WhatsApp com o número de telefone e a mensagem
            var whatsappLink = 'whatsapp://send?phone=' + phoneNumber + '&text=' + encodedMessage;
            
            window.open(whatsappLink);
        });

//notificacao
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


  
 
  
  
  
   
  
  
  

  
  
  
  
 
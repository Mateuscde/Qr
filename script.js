//eliminar o botao direito do mouse
//document.addEventListener('contextmenu', event => event.preventDefault());

//aguardar 500 milesimos para a tela aparecer
var cont=document.getElementById("cont");
setTimeout(function(){
   cont.style="transition:1s; opacity:1;";
},500);

//variaveis do pet
parte=1;
var som=document.getElementById("som");
var salvar=document.getElementById("salvar")
var coracao=document.getElementById("coracao");
var icon=document.getElementsByClassName("icon");
var set=document.getElementById("set");
var set1=document.getElementById("set1");
var set2=document.getElementById("set2");
var set3=document.getElementById("set3");
var barra1=document.getElementsByClassName("barra1");
var barra2=document.getElementsByClassName("barra2");
var barra3=document.getElementsByClassName("barra3");
var tronco=document.getElementById("tronco");
var orelha=document.getElementById("orelha");
var rabo=document.getElementById("rabo");
var cilios=document.getElementById("cilios");
var olho=document.getElementById("olho");
var boca=document.getElementById("boca");
var cabelo=document.getElementById("cabelo");
var roupa=document.getElementById("roupa");
var expressao=document.getElementById("expressao");
var contrololho=document.getElementById("contrololho");
var controlcorpo=document.getElementById("controlcorpo");
var emocao="none";


//clicks nos icones
icon[0].addEventListener("click", function(){apagar();icon[0].style.opacity=0.1; parte=1;som.play();});
icon[1].addEventListener("click", function(){apagar();icon[1].style.opacity=0.1;parte=2;som.play();});
icon[2].addEventListener("click", function(){apagar();icon[2].style.opacity= 0.1;parte=3;som.play();});
icon[3].addEventListener("click", function(){apagar();icon[3].style.opacity=0.1;parte=4;som.play();});
icon[4].addEventListener("click", function(){apagar();icon[4].style.opacity= 0.1;parte=5;som.play();});
icon[5].addEventListener("click", function(){apagar();icon[5].style.opacity=0.1;parte=6;som.play();});
//deixar apenas o icone clicado transparente
function apagar(){
  icon[0].style.opacity=1;
  icon[1].style.opacity=1;
  icon[2].style.opacity=1;
  icon[3].style.opacity=1;
  icon[4].style.opacity=1;
  icon[5].style.opacity=1;
};

/*//animaçao dele pulando
var vaievem=0;
setInterval(function(){
  vaievem= Math.floor(Math.random() *5) + 1;
},4000);

var angulos = [-3, 3]; // Angulos de rotação em graus
var indice = 0; // Índice atual no array de angulos
var angulos1 = [48,52]; // Angulos de rotação em graus
var indice1 = 0;
function animarElemento() {
  setInterval(function() {
    if(vaievem==3 && emocao=="none"){
      controlcorpo.style= "transition:0.5s;transform:translate(-50%,-50%) rotate("+angulos[indice]+"deg); left:" + angulos1[indice1]+ "%;";
      indice = (indice + 1) % angulos.length; // Avança para o próximo índice (loop)
      indice1 = (indice1 + 1) % angulos1.length; // Avança para o próximo índice (loop)
    }else{controlcorpo.style= "transition:1s; transform:translate(-50%,-50%) rotate(0deg);";};
  }, 400); // Intervalo de tempo em milissegundos
};
animarElemento();


//ainimar carinho
var intervalo;
var efeito=0;

controlcorpo.addEventListener("touchmove",function(){
  emocao="piscando";
  if (!intervalo) {
    intervalo = setInterval(animar, 1000); // Inicia a animação a cada segundo
  }else{};
    
  boca.src="imagens/pet corpo/boca/boca2.png";
  expressao.src="imagens/pet corpo/expressao/piscando.png";
});

controlcorpo.addEventListener("touchend",function(){
  efeito=0;
  clearInterval(intervalo); // Interrompe a animação
  intervalo = null;
  emocao="none";
});
    
//animar o coraçao    
function animar() {
  efeito+=1;
  if(efeito==10){
    coracao.style="transition:0.5s;transition-delay:0s;opacity:1;";
    efeito=10;
  };
    
setInterval(function(){
  if(efeito==0){
    coracao.style="transition:0.5s;transition-delay:20s;opacity:0;";
  };
},0);
};
    */
//cabelo e partes do corpo

var valorRecuperado = JSON.parse(localStorage.getItem('cocoData'));
var hair=valorRecuperado.cabelo;
var eyer=valorRecuperado.olho;
var look=valorRecuperado.roupa;
var ear=valorRecuperado.orelha;
var valorRecuperado;
setInterval(function(){
  if(hair==0){cabelo.style.display=" none"};
  cabelo.src="imagens/pet corpo/cabelo/cabelo"+hair+".png";

  if(eyer==0){olho.style.display=" none"};
  olho.src="imagens/pet corpo/olho/pupila"+eyer+".png";

  if(look==0){roupa.style.display=" none"};
  roupa.src="imagens/pet corpo/roupa/roupa"+look+".png";

  if(ear==0){orelha.style.display=" none"};
  orelha.src="imagens/pet corpo/orelha/orelha"+ear+".png";
},0);
/*
var rand=3000;
setInterval(function(){
  rand= Math.floor(Math.random()*10000) + 1;
},rand);

  //animacao de mexer o olho
setInterval(function(){
  contrololho.style="transition:1s;left:52%;";
},rand);
setInterval(function(){
  contrololho.style="transition:1s;left:50%;";
},rand+2000);
setInterval(function(){
  contrololho.style="transition:1s;left:52%;top:48%;";
},rand+11000);
setInterval(function(){
  contrololho.style="transition:1s;left:48%;";
},rand+5000);
setInterval(function(){
  contrololho.style="transition:1s;left:48%;top:52%;";
},rand+8000);
setInterval(function(){
  contrololho.style="transition:1s;left:48%;top:48%;";
},rand+14000);
  setInterval(function(){
contrololho.style="transition:1s;left:52%;top:52%;";
  },rand+17000);
setInterval(function(){
  contrololho.style="transition:1s;left:50%;top:50%;";
},rand+20000);
  
 //animaçao de piscar o olho
var piscar=0;
setInterval(function(){
  piscar= Math.floor(Math.random() *20) + 1;
  boca.src="imagens/pet corpo/boca/boca1.png";
},2000);
 
var imagem="none";
setInterval(function(){
  if(parte!=2 && emocao=="none"){
    if(piscar==3){
      expressao.src="imagens/pet corpo/expressao/piscando.png";
    }else{expressao.src="imagens/pet corpo/expressao/"+imagem+".png"};
  }else{expressao.src="imagens/pet corpo/expressao/"+imagem+".png";};
},0);
  */
//verificar qual parte do corpo eles vao mudar 
setInterval(function(){

tronco.style="filter:hue-rotate("+barra1[0].value+1+"deg) saturate("+barra2[0].value*2+"%) brightness("+barra3[0].value*3+"%);";
if(ear!=0){orelha.style="filter:hue-rotate("+barra1[0].value+1+"deg) saturate("+barra2[0].value*2+"%) brightness("+barra3[0].value*3+"%);";};
rabo.style="filter:hue-rotate("+barra1[0].value+1+"deg) saturate("+barra2[0].value*2+"%) brightness("+barra3[0].value*3+"%);";
boca.style="filter:hue-rotate("+barra1[0].value+1+"deg) saturate("+barra2[0].value*2+"%) brightness("+barra3[0].value*3+"%);";
cilios.style="filter:hue-rotate("+barra1[0].value+1+"deg) saturate("+barra2[0].value*2+"%) brightness("+barra3[0].value*3+"%);";
expressao.style="filter:hue-rotate("+barra1[0].value+1+"deg) saturate("+barra2[0].value*2+"%) brightness("+barra3[0].value*3+"%);";
if(eyer!=0){olho.style="filter:hue-rotate("+barra1[1].value+1+"deg) saturate("+barra2[1].value*2+"%) brightness("+barra3[1].value*3+"%);";};
if(hair!=0){cabelo.style="filter:hue-rotate("+barra1[2].value+1+"deg) saturate("+barra2[2].value*2+"%) brightness("+barra3[2].value*3+"%);";};
if(look!=0){roupa.style="filter:hue-rotate("+barra1[3].value+1+"deg) saturate("+barra2[3].value*2+"%) brightness("+barra3[3].value*3+"%);";};
},0);
setInterval(function(){
if(parte==1){
  set.style="display:block;";
  set1.style="display:none;";
  set2.style="display:none;";
  set3.style="display:none;";
}else
   
if(parte==2){
  set.style="display:none;";
  set1.style="display:block;";
  set2.style="display:none;";
  set3.style="display:none;";
}else
  
if(parte==3){
  set.style="display:none;";
  set1.style="display:none;";
  set2.style="display:block;";
  set3.style="display:none;";
}else
  
if(parte==4){
  set.style="display:none;";
  set1.style="display:none;";
  set2.style="display:none;";
  set3.style="display:block;";
}else{
  set.style="display:none;";
  set1.style="display:none;";
  set2.style="display:none;";
  set3.style="display:none;";
};
},0);




var icocabelo=document.getElementsByClassName("iconescolhacabelo");
var icoolho=document.getElementsByClassName("iconescolhaolho");
var icoorelha=document.getElementsByClassName("iconescolhaorelha");
var icoroupa=document.getElementsByClassName("iconescolharoupa");
var select=document.getElementsByClassName("select");
var pet;
setInterval(function(){
  if(parte==1){
    select[0].style="display:block;";
    select[1].style="display:none;";
    select[2].style="display:none;";
    select[3].style="display:none;";
    select[4].style="display:none;";
  }else
  if(parte==2){
    select[0].style="display:none;";
    select[1].style="display:block;";
    select[2].style="display:none;";
    select[3].style="display:none;";
    select[4].style="display:none;";
  }else
  if(parte==3){
    select[0].style="display:none;";
    select[1].style="display:none;";
    select[2].style="display:block;";
    select[3].style="display:none;";
    select[4].style="display:none;";
  }else
  if(parte==4){
    select[0].style="display:none;";
    select[1].style="display:none;";
    select[2].style="display:none;";
    select[3].style="display:block;";
    select[4].style="display:none;";
  };
  if(parte==5){
    select[0].style="display:none;";
    select[1].style="display:none;";
    select[2].style="display:none;";
    select[3].style="display:none;";
    select[4].style="display:block;";
  };
  pet={
  olho:eyer,
  cabelo:hair,
  roupa:look,
  orelha:ear,
  }
 },0);
 salvar.addEventListener("click",function(){
   alert("ds");
   localStorage.setItem('cocoData',JSON.stringify(pet));
 });
 function clear(){
   icocabelo[0].style.opacity=1;
   icocabelo[1].style.opacity=1;
   icocabelo[2].style.opacity=1;
   icocabelo[3].style.opacity=1;
   icocabelo[4].style.opacity=1;
   icocabelo[5].style.opacity=1;
   icocabelo[6].style.opacity=1;
   icocabelo[7].style.opacity=1;
   icocabelo[8].style.opacity=1;
   icocabelo[9].style.opacity=1;
   icocabelo[10].style.opacity=1;
   icocabelo[11].style.opacity=1;
   icocabelo[12].style.opacity=1;
   icocabelo[13].style.opacity=1;
 
   icoolho[0].style.opacity=1;
   icoolho[1].style.opacity=1;
   icoolho[2].style.opacity=1;
   icoolho[3].style.opacity=1;
   icoolho[4].style.opacity=1;
   icoolho[5].style.opacity=1;
   icoolho[6].style.opacity=1;
   icoolho[7].style.opacity=1;
 
   icoroupa[0].style.opacity=1;
   icoroupa[1].style.opacity=1;
   icoroupa[2].style.opacity=1;
   icoroupa[3].style.opacity=1;
   icoroupa[4].style.opacity=1;
 
   icoorelha[0].style.opacity=1;
   icoorelha[1].style.opacity=1;
   icoorelha[2].style.opacity=1;
   icoorelha[3].style.opacity=1;
 };
 
 icocabelo[0].addEventListener("click",function(){clear();icocabelo[0].style.opacity=0.5;hair=0;});
 icocabelo[1].addEventListener("click",function(){clear();icocabelo[1].style.opacity=0.5;hair=1;});
 icocabelo[2].addEventListener("click",function(){clear();icocabelo[2].style.opacity=0.5;hair=2;});
 icocabelo[3].addEventListener("click",function(){clear();icocabelo[3].style.opacity=0.5;hair=3;});
 icocabelo[4].addEventListener("click",function(){clear();icocabelo[4].style.opacity=0.5;hair=4;});
 icocabelo[5].addEventListener("click",function(){clear();icocabelo[5].style.opacity=0.5;hair=5;});
 icocabelo[6].addEventListener("click",function(){clear();icocabelo[6].style.opacity=0.5;hair=6;});
 icocabelo[7].addEventListener("click",function(){clear();icocabelo[7].style.opacity=0.5;hair=7;});
 icocabelo[8].addEventListener("click",function(){clear();icocabelo[8].style.opacity=0.5;hair=8;});
 icocabelo[9].addEventListener("click",function(){clear();icocabelo[9].style.opacity=0.5;hair=9;});
 icocabelo[10].addEventListener("click",function(){clear();icocabelo[10].style.opacity=0.5;hair=10;});
 icocabelo[11].addEventListener("click",function(){clear();icocabelo[11].style.opacity=0.5;hair=11;});
 icocabelo[12].addEventListener("click",function(){clear();icocabelo[12].style.opacity=0.5;hair=12;});
 icocabelo[13].addEventListener("click",function(){clear();icocabelo[13].style.opacity=0.5;hair=13;});
 
 
 icoolho[0].addEventListener("click",function(){clear();icoolho[0].style.opacity=0.5;eyer=1;});
 icoolho[1].addEventListener("click",function(){clear();icoolho[1].style.opacity=0.5;eyer=2;});
 icoolho[2].addEventListener("click",function(){clear();icoolho[2].style.opacity=0.5;eyer=3;});
 icoolho[3].addEventListener("click",function(){clear();icoolho[3].style.opacity=0.5;eyer=4;});
 icoolho[4].addEventListener("click",function(){clear();icoolho[4].style.opacity=0.5;eyer=5;});
 icoolho[5].addEventListener("click",function(){clear();icoolho[5].style.opacity=0.5;eyer=6;});
 icoolho[6].addEventListener("click",function(){clear();icoolho[6].style.opacity=0.5;eyer=7;});
 icoolho[7].addEventListener("click",function(){clear();icoolho[7].style.opacity=0.5;eyer=8;});
 
 
 icoroupa[0].addEventListener("click",function(){clear();icoroupa[0].style.opacity=0.5;look=0;});
 icoroupa[1].addEventListener("click",function(){clear();icoroupa[1].style.opacity=0.5;look=1;});
 icoroupa[2].addEventListener("click",function(){clear();icoroupa[2].style.opacity=0.5;look=2;});
 icoroupa[3].addEventListener("click",function(){clear();icoroupa[3].style.opacity=0.5;look=3;});
 icoroupa[4].addEventListener("click",function(){clear();icoroupa[4].style.opacity=0.5;look=4;});
 
 
 icoorelha[0].addEventListener("click",function(){clear();icoorelha[0].style.opacity=0.5;ear=0;});
 icoorelha[1].addEventListener("click",function(){clear();icoorelha[1].style.opacity=0.5;ear=1;});
 icoorelha[2].addEventListener("click",function(){clear();icoorelha[2].style.opacity=0.5;ear=2;});
 icoorelha[3].addEventListener("click",function(){clear();icoorelha[3].style.opacity=0.5;ear=3;});
 
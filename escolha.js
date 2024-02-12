var icocabelo=document.getElementsByClassName("iconescolhacabelo");
var icoolho=document.getElementsByClassName("iconescolhaolho");
var icoroupa=document.getElementsByClassName("iconescolharoupa");
var select=document.getElementsByClassName("select");

setInterval(function(){
if(parte==1){
 select[0].style="display:block;";
 select[1].style="display:none;";
 select[2].style="display:none;";
}else
if(parte==2){
 select[0].style="display:none;";
 select[1].style="display:block;";
 select[2].style="display:none;";
 select[3].style="display:none;";
}else
if(parte==3){
 select[0].style="display:none;";
 select[1].style="display:none;";
 select[2].style="display:block;";
 select[3].style="display:none;";
}else
if(parte==4){
 select[0].style="display:none;";
 select[1].style="display:none;";
 select[2].style="display:none;";
 select[3].style="display:block;";
};
},0);








function clear(){
icocabelo[0].style.opacity=1;
icocabelo[1].style.opacity=1;
icocabelo[2].style.opacity=1;
icocabelo[3].style.opacity=1;
icocabelo[4].style.opacity=1;
icocabelo[5].style.opacity=1;

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
};

icocabelo[0].addEventListener("click",function(){clear();icocabelo[0].style.opacity=0.5;hair=0;});
icocabelo[1].addEventListener("click",function(){clear();icocabelo[1].style.opacity=0.5;hair=1;});
icocabelo[2].addEventListener("click",function(){clear();icocabelo[2].style.opacity=0.5;hair=2;});
icocabelo[3].addEventListener("click",function(){clear();icocabelo[3].style.opacity=0.5;hair=3;});
icocabelo[4].addEventListener("click",function(){clear();icocabelo[4].style.opacity=0.5;hair=4;});
icocabelo[5].addEventListener("click",function(){clear();icocabelo[5].style.opacity=0.5;hair=5;});


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
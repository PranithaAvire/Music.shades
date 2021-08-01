var C=new Audio("C.mp3");
var Db=new Audio("Db.mp3");
var D=new Audio("D.mp3");
var E=new Audio("E.mp3");
var Eb=new Audio("Eb.mp3");
var F=new Audio("F.mp3");
var Gb=new Audio("Gb.mp3");
var G=new Audio("G.mp3");
var Ab=new Audio("Ab.mp3");
var A=new Audio("A.mp3");
var Bb=new Audio("Bb.mp3");
var B=new Audio("B.mp3");
document.querySelector("#C").addEventListener("click",function(){C.play();buttonAnime("C");});
document.querySelector("#Db").addEventListener("click",function(){Db.play();buttonAnime("Db");});
document.querySelector("#D").addEventListener("click",function(){D.play();buttonAnime("D");});
document.querySelector("#E").addEventListener("click",function(){E.play();buttonAnime("E");});
document.querySelector("#Eb").addEventListener("click",function(){Eb.play();buttonAnime("Eb");});
document.querySelector("#F").addEventListener("click",function(){F.play();buttonAnime("F");});
document.querySelector("#Gb").addEventListener("click",function(){Gb.play();buttonAnime("Gb");});
document.querySelector("#G").addEventListener("click",function(){G.play();buttonAnime("G");});
document.querySelector("#Ab").addEventListener("click",function(){Ab.play();buttonAnime("Ab");});
document.querySelector("#A").addEventListener("click",function(){A.play();buttonAnime("A");});
document.querySelector("#Bb").addEventListener("click",function(){Bb.play();buttonAnime("Bb");});
document.querySelector("#B").addEventListener("click",function(){B.play();buttonAnime("B");});
function buttonAnime(key)
{
	var curButton=document.querySelector("#"+key);
	curButton.classList.add("pressed");
	setTimeout(function(){
		curButton.classList.remove("pressed")
	},100);
}
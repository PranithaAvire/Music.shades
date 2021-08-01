var l=document.querySelectorAll(".drum").length;
//detecting mouse click
for(var i=0;i<l;i++)
{
	document.querySelectorAll("button")[i].addEventListener("click",function(event){
		makeSound(this.innerHTML);
		buttonAnime(this.innerHTML);
	});
}
function makeSound(key)
{
	var i=key;
	switch(i)
	{
	case "w":
	var audio=new Audio("tom-1.mp3");
	audio.play();
	break;
	case "a":
	var audio=new Audio("tom-3.mp3");
	audio.play();
	break;
	case "s":
	var audio=new Audio("tom-2.mp3");
	audio.play();
	break;
	case "d":
	var audio=new Audio("tom-4.mp3");
	audio.play();
	break;
	case "j":
	var audio=new Audio("crash.mp3");
	audio.play();
	break;
	case "k":
	var audio=new Audio("kick-bass.mp3");
	audio.play();
	break;
	case "l":
	var audio=new Audio("snare.mp3");
	audio.play();
	break;
	default:console.log(i);
	}
}
//detecting keyboard keys press
document.addEventListener("keydown",function(event){
	makeSound(event.key);
	buttonAnime(event.key);
});
//adding animation to buttons
function buttonAnime(key)
{
	var curButton=document.querySelector("."+key);
	curButton.classList.add("pressed");
	setTimeout(function(){
		curButton.classList.remove("pressed")
	},100);
	
	
}
var audio=new Audio("ThousandYears.mp3");
document.querySelector(".song").addEventListener("click",function(){
	if(audio.paused)
	{
		audio.play();
		document.querySelector(".song").setAttribute("src","https://image.flaticon.com/icons/png/128/4767/4767848.png");
	}
	else
	{
		audio.pause();
		document.querySelector(".song").setAttribute("src","https://img-premium.flaticon.com/png/512/440/premium/440796.png?token=exp=1627640971~hmac=a3b6e41419b95e20536841215f6a1433");
	}
})
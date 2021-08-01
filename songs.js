var song1=new Audio("ThousandYears.mp3");
var song2=new Audio("shayad.mp3");
var song3=new Audio("jaamu.mp3");
var song4=new Audio("somebody.mp3");
var song5=new Audio("choopule.mp3");
var song6=new Audio("chitti.mp3");
var song7=new Audio("hoyna.mp3");
var song8=new Audio("saranga.mp3");
var song9=new Audio("baby.mp3");
var song10=new Audio("bintere.mp3");
var l=document.querySelectorAll(".song").length;
for(var i=0;i<l;i++)
{
	document.querySelectorAll(".song")[i].addEventListener("click",function(event){
	playSong(this.getAttribute("id"));
	});
}
function playSong(id)
{
	switch(id)
	{
		case "song1":
			if(song1.paused)
			{
				pausing("song1");
				imaging(".song1")
			}
			else
			{
				song1.pause();
				document.querySelector(".song1").setAttribute("src","play.png");
			}
		break;

	case "song2":
			if(song2.paused)
			{
				pausing("song2");
				imaging(".song2");
			}
			else
			{
				song2.pause();
				document.querySelector(".song2").setAttribute("src","play.png");
			}
		break;

	case "song3":
			if(song3.paused)
			{
				pausing("song3");
				imaging(".song3");
			}
			else
			{
				song3.pause();
				document.querySelector(".song3").setAttribute("src","play.png");
			}
		break;

	case "song4":
			if(song4.paused)
			{
				pausing("song4");
				imaging(".song4");
			}
			else
			{
				song4.pause();
				document.querySelector(".song4").setAttribute("src","play.png");
			}
		break;
	case "song5":
			if(song5.paused)
			{
				pausing("song5");
				imaging(".song5");
			}
			else
			{
				song5.pause();
				document.querySelector(".song5").setAttribute("src","play.png");
			}
		break;
	case "song6":
			if(song6.paused)
			{
				pausing("song6");
				imaging(".song6");
			}
			else
			{
				song6.pause();
				document.querySelector(".song6").setAttribute("src","play.png");
			}
		break;
	case "song7":
			if(song7.paused)
			{
				pausing("song7");
				imaging(".song7");
			}
			else
			{
				song7.pause();
				document.querySelector(".song7").setAttribute("src","play.png");
			}
		break;
	case "song8":
			if(song8.paused)
			{
				pausing("song8");
				imaging(".song8");
			}
			else
			{
				song8.pause();
				document.querySelector(".song8").setAttribute("src","play.png");
			}
		break;
	case "song9":
			if(song9.paused)
			{
				pausing("song9");
				imaging(".song9");
			}
			else
			{
				song9.pause();
				document.querySelector(".song9").setAttribute("src","play.png");
			}
		break;
	case "song10":
			if(song10.paused)
			{
				pausing("song10");
				imaging(".song10");
			}
			else
			{
				song10.pause();
				document.querySelector(".song10").setAttribute("src","play.png");
			}
		break;
	default:console.log(id);
	}
}
function imaging(name)
{
	document.querySelector(".song1").setAttribute("src","play.png");
	document.querySelector(".song2").setAttribute("src","play.png");
	document.querySelector(".song3").setAttribute("src","play.png");
	document.querySelector(".song4").setAttribute("src","play.png");
	document.querySelector(".song5").setAttribute("src","play.png");
	document.querySelector(".song6").setAttribute("src","play.png");
	document.querySelector(".song7").setAttribute("src","play.png");
	document.querySelector(".song8").setAttribute("src","play.png");
	document.querySelector(".song9").setAttribute("src","play.png");
	document.querySelector(".song10").setAttribute("src","play.png");
	document.querySelector(name).setAttribute("src","https://image.flaticon.com/icons/png/128/4767/4767848.png");
}
function pausing(name)
{
	song1.pause();
	song2.pause();
	song3.pause();
	song4.pause();
	song5.pause();
	song6.pause();
	song7.pause();
	song8.pause();
	song9.pause();
	song10.pause();
	if(name=="song1")
	{
		song1.play();
	}
	else if(name=="song2")
	{
		song2.play();
	}
	else if(name=="song3")
	{
		song3.play();
	}
	else if(name=="song4")
	{
		song4.play();
	}
	else if(name=="song5")
	{
		song5.play();
	}
	else if(name=="song6")
	{
		song6.play();
	}
	else if(name=="song7")
	{
		song7.play();
	}
	else if(name=="song8")
	{
		song8.play();
	}
	else if(name=="song9")
	{
		song9.play();
	}
	else if(name=="song10")
	{
		song10.play();
	}
}

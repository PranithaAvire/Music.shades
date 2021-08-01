var song1=new Audio("Can-we-kiss-forever-bgm.mp3");
var song2=new Audio("Darling-bgm.mp3");
var song3=new Audio("Har ghadi badal rahi-bgm.mp3");
var song4=new Audio("Gummadi-bgm.mp3");
var song5=new Audio("Savage-love-Instrumental.mp3");
var song6=new Audio("Shayad-bgm.mp3");
var song7=new Audio("pedave-bgm.mp3");
var song8=new Audio("tum-mile-bgm.mp3");
var song9=new Audio("Kannuladha-bgm.mp3");
var song10=new Audio("Kaise-Hua-bgm.mp3");
var len=document.querySelectorAll(".song").length;
for(var i=0;i<len;i++)
{
	document.querySelectorAll(".song")[i].addEventListener("click",function(){
		playMusic(this.id);
	})
}
function playMusic(id)
{
	if(id=="song1")
	{
		pausing("song1");
		imaging(".song1");
		setTimeout(function(){song1.pause();document.querySelector(".song1").setAttribute("src","https://img-premium.flaticon.com/png/512/440/premium/440796.png?token=exp=1627640971~hmac=a3b6e41419b95e20536841215f6a1433");},5000);
	}
	else if(id=="song2")
	{
		pausing("song2");
		imaging(".song2");
		setTimeout(function(){song2.pause();document.querySelector(".song2").setAttribute("src","https://img-premium.flaticon.com/png/512/440/premium/440796.png?token=exp=1627640971~hmac=a3b6e41419b95e20536841215f6a1433");},5000);
	}
	else if(id=="song3")
	{
		pausing("song3");
		imaging(".song3");
		setTimeout(function(){song3.pause();document.querySelector(".song3").setAttribute("src","https://img-premium.flaticon.com/png/512/440/premium/440796.png?token=exp=1627640971~hmac=a3b6e41419b95e20536841215f6a1433");},5000);
	}
	else if(id=="song4")
	{
		pausing("song4");
		imaging(".song4");
		setTimeout(function(){song4.pause();document.querySelector(".song4").setAttribute("src","https://img-premium.flaticon.com/png/512/440/premium/440796.png?token=exp=1627640971~hmac=a3b6e41419b95e20536841215f6a1433");},5000);
	}
	else if(id=="song5")
	{
		pausing("song5");
		imaging(".song5");
		setTimeout(function(){song5.pause();document.querySelector(".song5").setAttribute("src","https://img-premium.flaticon.com/png/512/440/premium/440796.png?token=exp=1627640971~hmac=a3b6e41419b95e20536841215f6a1433");},5000);
	}
	else if(id=="song6")
	{
		pausing("song6");
		imaging(".song6");
		setTimeout(function(){song6.pause();document.querySelector(".song6").setAttribute("src","https://img-premium.flaticon.com/png/512/440/premium/440796.png?token=exp=1627640971~hmac=a3b6e41419b95e20536841215f6a1433");},5000);
	}
	else if(id=="song7")
	{
		pausing("song7");
		imaging(".song7");
		setTimeout(function(){song7.pause();document.querySelector(".song7").setAttribute("src","https://img-premium.flaticon.com/png/512/440/premium/440796.png?token=exp=1627640971~hmac=a3b6e41419b95e20536841215f6a1433");},5000);
	}
	else if(id=="song8")
	{
		pausing("song8");
		imaging(".song8");
		setTimeout(function(){song8.pause();document.querySelector(".song8").setAttribute("src","https://img-premium.flaticon.com/png/512/440/premium/440796.png?token=exp=1627640971~hmac=a3b6e41419b95e20536841215f6a1433");},5000);
	}
	else if(id=="song9")
	{
		pausing("song9");
		imaging(".song9");
		setTimeout(function(){song9.pause();document.querySelector(".song9").setAttribute("src","https://img-premium.flaticon.com/png/512/440/premium/440796.png?token=exp=1627640971~hmac=a3b6e41419b95e20536841215f6a1433");},5000);
	}
	else if(id=="song10")
	{
		pausing("song10");
		imaging(".song10");
		setTimeout(function(){song10.pause();document.querySelector(".song10").setAttribute("src","https://img-premium.flaticon.com/png/512/440/premium/440796.png?token=exp=1627640971~hmac=a3b6e41419b95e20536841215f6a1433");},5000);
	}
}
function imaging(name)
{
	document.querySelector(".song1").setAttribute("src","https://img-premium.flaticon.com/png/512/440/premium/440796.png?token=exp=1627640971~hmac=a3b6e41419b95e20536841215f6a1433");
	document.querySelector(".song2").setAttribute("src","https://img-premium.flaticon.com/png/512/440/premium/440796.png?token=exp=1627640971~hmac=a3b6e41419b95e20536841215f6a1433");
	document.querySelector(".song3").setAttribute("src","https://img-premium.flaticon.com/png/512/440/premium/440796.png?token=exp=1627640971~hmac=a3b6e41419b95e20536841215f6a1433");
	document.querySelector(".song4").setAttribute("src","https://img-premium.flaticon.com/png/512/440/premium/440796.png?token=exp=1627640971~hmac=a3b6e41419b95e20536841215f6a1433");
	document.querySelector(".song5").setAttribute("src","https://img-premium.flaticon.com/png/512/440/premium/440796.png?token=exp=1627640971~hmac=a3b6e41419b95e20536841215f6a1433");
	document.querySelector(".song6").setAttribute("src","https://img-premium.flaticon.com/png/512/440/premium/440796.png?token=exp=1627640971~hmac=a3b6e41419b95e20536841215f6a1433");
	document.querySelector(".song7").setAttribute("src","https://img-premium.flaticon.com/png/512/440/premium/440796.png?token=exp=1627640971~hmac=a3b6e41419b95e20536841215f6a1433");
	document.querySelector(".song8").setAttribute("src","https://img-premium.flaticon.com/png/512/440/premium/440796.png?token=exp=1627640971~hmac=a3b6e41419b95e20536841215f6a1433");
	document.querySelector(".song9").setAttribute("src","https://img-premium.flaticon.com/png/512/440/premium/440796.png?token=exp=1627640971~hmac=a3b6e41419b95e20536841215f6a1433");
	document.querySelector(".song10").setAttribute("src","https://img-premium.flaticon.com/png/512/440/premium/440796.png?token=exp=1627640971~hmac=a3b6e41419b95e20536841215f6a1433");
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
//correcting
var score=0;
for(var t=1;t<=10;t++)
{
var p=0;
var cl=".wrng"+t;
while(p<3)
{
	document.querySelectorAll(cl)[p].addEventListener("click",function(){
	unable(this.getAttribute("class"));
    this.classList.add("wrong");
});
	p++;
}
}

for(var s=1;s<=10;s++)
{
	var cln=".crct"+s;
	document.querySelector(cln).addEventListener("click",function(){
	unable(this.getAttribute("class"));
	this.classList.add("correct");
	score++;
});
}
function unable(name)
{
	if(name=="crct1 btn"||name=="wrng1 btn")
	{
		for(var e=0;e<3;e++)
		{
		document.querySelectorAll(".wrng1")[e].disabled=true;
		}
		document.querySelector(".crct1").disabled=true;
		setTimeout(function(){document.querySelector(".crct1").classList.add("correct");},500);
	}
	if(name=="crct2 btn"||name=="wrng2 btn")
	{
		for(var e=0;e<3;e++)
		{
		document.querySelectorAll(".wrng2")[e].disabled=true;
		}
		document.querySelector(".crct2").disabled=true;
		setTimeout(function(){document.querySelector(".crct2").classList.add("correct");},500);
	}
	if(name=="crct3 btn"||name=="wrng3 btn")
	{
		for(var e=0;e<3;e++)
		{
		document.querySelectorAll(".wrng3")[e].disabled=true;
		}
		document.querySelector(".crct3").disabled=true;
		setTimeout(function(){document.querySelector(".crct3").classList.add("correct");},500);
	}
	if(name=="crct4 btn"||name=="wrng4 btn")
	{
		for(var e=0;e<3;e++)
		{
		document.querySelectorAll(".wrng4")[e].disabled=true;
		}
		document.querySelector(".crct4").disabled=true;
		setTimeout(function(){document.querySelector(".crct4").classList.add("correct");},500);
	}
	if(name=="crct5 btn"||name=="wrng5 btn")
	{
		for(var e=0;e<3;e++)
		{
		document.querySelectorAll(".wrng5")[e].disabled=true;
		}
		document.querySelector(".crct5").disabled=true;
		setTimeout(function(){document.querySelector(".crct5").classList.add("correct");},500);
	}
	if(name=="crct6 btn"||name=="wrng6 btn")
	{
		for(var e=0;e<3;e++)
		{
		document.querySelectorAll(".wrng6")[e].disabled=true;
		}
		document.querySelector(".crct6").disabled=true;
		setTimeout(function(){document.querySelector(".crct6").classList.add("correct");},500);
	}
	if(name=="crct7 btn"||name=="wrng7 btn")
	{
		for(var e=0;e<3;e++)
		{
		document.querySelectorAll(".wrng7")[e].disabled=true;
		}
		document.querySelector(".crct7").disabled=true;
		setTimeout(function(){document.querySelector(".crct7").classList.add("correct");},500);
	}
	if(name=="crct8 btn"||name=="wrng8 btn")
	{
		for(var e=0;e<3;e++)
		{
		document.querySelectorAll(".wrng8")[e].disabled=true;
		}
		document.querySelector(".crct8").disabled=true;
		setTimeout(function(){document.querySelector(".crct8").classList.add("correct");},500);
	}
	if(name=="crct9 btn"||name=="wrng9 btn")
	{
		for(var e=0;e<3;e++)
		{
		document.querySelectorAll(".wrng9")[e].disabled=true;
		}
		document.querySelector(".crct9").disabled=true;
		setTimeout(function(){document.querySelector(".crct9").classList.add("correct");},500);
	}
	if(name=="crct10 btn"||name=="wrng10 btn")
	{
		for(var e=0;e<3;e++)
		{
		document.querySelectorAll(".wrng10")[e].disabled=true;
		}
		document.querySelector(".crct10").disabled=true;
		setTimeout(function(){document.querySelector(".crct10").classList.add("correct");},500);
	}
}
document.querySelector(".btn1").addEventListener("click",function(){
	if(score>4)
	{
	document.querySelector(".res").innerHTML=" Congratuations! ";
	document.querySelector(".result").innerHTML="Your score is "+score+" out of 10.";
	this.classList.add("hide");
	document.querySelector(".celeb").classList.remove("celeb");}
	else
	{
		document.querySelector(".res").innerHTML=" Better luck next time :(";
		document.querySelector(".result").innerHTML="Your score is "+score+" out of 10.";
		this.classList.add("hide");
	}
})
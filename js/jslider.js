/***********************************
Author: Eduardo López Arce Vivas
email: eduardo.lopezarce@gmail.com
***********************************/
sliderInt = 1;
sliderNext = 2;
window.x = 1;

function changeContent(n){
	$(".content-switcher").hide(500);
	$(".content-switcher-read").hide(500);
	$("#Content"+n+"1").show("slide", {direction: "right"},700);
	$("#Content"+n+"2").delay(700).show('slide', {direction: 'right'},1000);
}

function changeImage(n){
	$("#slider > img").hide(500);
	$("#slider > img#" + n).show(500);
}

$(window).load(function() {
	$("#slider >img#1").fadeIn(300);
	$("#Content11").fadeIn(300);
	$("#Content12").fadeIn(300);
	startSlider();
})

function startSlider(){
	count = $("#slider > img").size();
	loop = setInterval(function(){
		if(sliderNext>count){
			sliderNext = 1;
			sliderInt = 1;
		}		
		changeContent(sliderNext);
		changeImage(sliderNext);
		sliderInt = sliderNext;
		sliderNext++;
	},7500)
}

function prev(){
	if (window.x){
		window.x=0;
		newSlide = sliderInt - 1;
		showSlide(newSlide);
		setTimeout(function(){
		window.x=1;
		},1700);
	}
}

function next(){
	if (window.x){
		window.x=0;
		newSlide = sliderInt + 1;
		showSlide(newSlide);
		setTimeout(function(){
		window.x=1;
		},1700);
	}
}

function stopLoop(){
	window.clearInterval(loop);
}

function showSlide(id){
	stopLoop();
	if(id>count){
		id = 1;
	} else if(id < 1){
		id = count;
	}
	changeContent(id);
	changeImage(id);
	sliderInt = id;
	sliderNext = id + 1;
	window.clearInterval(loop);	
	startSlider();
}

$("#slider > img").hover(
	function(){
		stopLoop();
	},
	function(){
		startSlider();
	}
);


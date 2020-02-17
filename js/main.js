$(document).ready(function() {

	$(".container_mixitup").mixItUp();

	$(".portfolio_nav li").click(function() {
		$(".portfolio_nav li").removeClass("active");
		$(this).addClass("active");
	});
	
	
	$(".toggle_mnu").click(function() {
  		$(".sandwich").toggleClass("active");
	});

	$(".menu li a").click(function() {
  		$(".menu").fadeOut(700);
  		$(".sandwich").toggleClass("active");
	});

	$("header nav.menu a").mPageScroll2id();

	$(".toggle_mnu").click(function() {
		if ($(".menu").is(":visible")) {
			$(".menu").fadeOut(600);
			$(".menu li a").removeClass("fadeInUp animated");
		} else {
  			$(".menu").fadeIn(600);
  			$(".menu li a").addClass("fadeInUp animated");
	    };
    });

// PROGRESS BAR

$('.html5').LineProgressbar({
	ShowProgressCount: true,
    duration: 5000,
	percentage: 100,
	fillBackgroundColor: '#fff',
	backgroundColor: '#00BFFF',
	radius: '0',
	height: '40px',
	width: '100%'
});

$('.css3').LineProgressbar({
	ShowProgressCount: true,
    duration: 5000,
	percentage: 100,
	fillBackgroundColor: '#fff',
	backgroundColor: '#00BFFF',
	radius: '0',
	height: '40px',
	width: '100%'
});

$('.mobile').LineProgressbar({
	ShowProgressCount: true,
    duration: 5000,
	percentage: 90,
	fillBackgroundColor: '#fff',
	backgroundColor: '#00BFFF',
	radius: '0',
	height: '40px',
	width: '100%'
});

$('.sass').LineProgressbar({
	ShowProgressCount: true,
    duration: 5000,
	percentage: 85,
	fillBackgroundColor: '#fff',
	backgroundColor: '#00BFFF',
	radius: '0',
	height: '40px',
	width: '100%'
});

$('.bootstrap').LineProgressbar({
	ShowProgressCount: true,
    duration: 5000,
	percentage: 80,
	fillBackgroundColor: '#fff',
	backgroundColor: '#00BFFF',
	radius: '0',
	height: '40px',
	width: '100%'
});

$('.wordpress').LineProgressbar({
	ShowProgressCount: true,
    duration: 5000,
	percentage: 70,
	fillBackgroundColor: '#fff',
	backgroundColor: '#00BFFF',
	radius: '0',
	height: '40px',
	width: '100%'
});

$('.github').LineProgressbar({
	ShowProgressCount: true,
    duration: 5000,
	percentage: 75,
	fillBackgroundColor: '#fff',
	backgroundColor: '#00BFFF',
	radius: '0',
	height: '40px',
	width: '100%'
});

$('.js').LineProgressbar({
	ShowProgressCount: true,
    duration: 5000,
	percentage: 50,
	fillBackgroundColor: '#fff',
	backgroundColor: '#00BFFF',
	radius: '0',
	height: '40px',
	width: '100%'
});

$('.gulp').LineProgressbar({
	ShowProgressCount: true,
    duration: 5000,
	percentage: 45,
	fillBackgroundColor: '#fff',
	backgroundColor: '#00BFFF',
	radius: '0',
	height: '40px',
	width: '100%'
});

$('.jquery').LineProgressbar({
	ShowProgressCount: true,
    duration: 5000,
	percentage: 50,
	fillBackgroundColor: '#fff',
	backgroundColor: '#00BFFF',
	radius: '0',
	height: '40px',
	width: '100%'
});

// ------------------------TOP

$(window).scroll(function(){
	if ($(this).scrollTop() > $(this).height()) {
		$('.top').addClass('active');
	} else{
		$('.top').removeClass('active');
	}
});
$('.top').click(function(){
	$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});

});



$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});
//sticky
	$(window).scroll(function() {
		
		// if the window is more than 500px from top,
		if ($(this).scrollTop() > $('.separateSection1').offset().top - 900){  
   		
   		// add sticky class to header
   		$('nav.clearfix').addClass("sticky");
   		$('header nav ul li').addClass("sticky");
   		$('header nav a').addClass("sticky");
   		$('.hide').addClass("sticky");

   		// hide h2
   		$('h2').slideUp();
   		$('h1').slideUp();
   		$('.hide').show();
	}

	else {
		
		// remove sticky class
		$('nav.clearfix').removeClass("sticky");
   		$('header nav ul li').removeClass("sticky");
   		$('header nav a').removeClass("sticky");
   		$('.hide').removeClass("sticky");

		// show h2S
		$('h1').slideDown();
		$('h2').slideDown();
		$('.hide').hide();
	}

	});

// Scroll to site section on click
	

	$("nav a").on("click", function (event) {	
		event.preventDefault();

	
	$("nav a").removeClass("active");

			
	$(this).addClass("active");

			
	var sectionTarget = $(this).attr("href");

			
	var targetOffset = $(sectionTarget).offset().top - 60;

	// animate scroll
	$("html, body").animate({scrollTop: targetOffset
	}, 600);

	});	

	$("h1 a").on("click", function () {
		$("nav a").removeClass("active");
	})		


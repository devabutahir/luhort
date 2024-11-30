"user strict";

$(document).ready(function () {
	//menu header bar
	$(".header-bar").on("click", function (e) {
		$(".main-menu, .header-bar").toggleClass("active");
	});
	$(".main-menu li a").on("click", function (e) {
		var element = $(this).parent("li");
		if (element.hasClass("open")) {
			element.removeClass("open");
			element.find("li").removeClass("open");
			element.find("ul").slideUp(300, "swing");
		} else {
			element.addClass("open");
			element.children("ul").slideDown(300, "swing");
			element.siblings("li").children("ul").slideUp(300, "swing");
			element.siblings("li").removeClass("open");
			element.siblings("li").find("li").removeClass("open");
			element.siblings("li").find("ul").slideUp(300, "swing");
		}
	});
	//menu header bar
	//owl carousel
	$(".rooms-wrapper").owlCarousel({
		loop: true,
		margin: 20,
		smartSpeed: 2500,
		autoplayTimeout: 3000,
		autoplay: false,
		nav: true,
		dots: true,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 2,
			},
			767: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1199: {
				items: 3,
			},
			1399: {
				items: 3,
			},
		},
	});
	$(".testimonial-wrapper, .suites-wrap").owlCarousel({
		loop: true,
		margin: 20,
		smartSpeed: 2500,
		autoplayTimeout: 3000,
		autoplay: false,
		nav: true,
		dots: true,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 1,
			},
			767: {
				items: 1,
			},
			991: {
				items: 1,
			},
			1199: {
				items: 1,
			},
			1399: {
				items: 1,
			},
		},
	});
	$(".suites-details-slider").owlCarousel({
		loop: true,
		margin: 5,
		smartSpeed: 2500,
		autoplayTimeout: 3000,
		autoplay: false,
		nav: true,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 2,
			},
			767: {
				items: 2,
			},
			991: {
				items: 2,
			},
			1199: {
				items: 3,
			},
			1399: {
				items: 3,
			},
		},
	});
	$(".spa-banner").owlCarousel({
		loop: true,
		margin: 10,
		smartSpeed: 2500,
		autoplayTimeout: 3000,
		autoplay: false,
		nav: true,
		dots: false,
		responsiveClass: true,
		navText: [
			'<i class="fas fa-chevron-left"></i>',
			'<i class="fas fa-chevron-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			500: {
				items: 1,
			},
			767: {
				items: 1,
			},
			991: {
				items: 1,
			},
			1199: {
				items: 1,
			},
			1399: {
				items: 1,
			},
		},
	});
	
	//Magnifiq pupup
	$('.picture-btn').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		}
	});

	$('.video-btn').magnificPopup({
		type: 'iframe',
		callbacks: {
			
			}
	});
	//Magnifiq pupup
	
	//menu top fixed bar
	var fixed_top = $(".header-section");
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 220) {
			fixed_top.addClass("menu-fixed animated fadeInDown");
			fixed_top.removeClass("slideInUp");
			$("body").addClass("body-padding");
		} else {
			fixed_top.removeClass("menu-fixed fadeInDown");
			fixed_top.addClass("slideInUp");
			$("body").removeClass("body-padding");
		}
	});
	//menu top fixed bar
	// click even scroll bar
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 300) {
			$(".scrollToTop").fadeIn();
		} else {
			$(".scrollToTop").fadeOut();
		}
	});
	// click even scroll bar
	// scroll top bottom bar
	$(".scrollToTop").on("click", function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			700
		);
		return false;
	});
	// scroll top bottom bar
	/*-- Odometer Counting Start--*/
	$(".odometer-item").each(function () {
		$(this).isInViewport(function (status) {
			if (status === "entered") {
				for (
					var i = 0;
					i < document.querySelectorAll(".odometer").length;
					i++
				) {
					var el = document.querySelectorAll(".odometer")[i];
					el.innerHTML = el.getAttribute("data-odometer-final");
				}
			}
		});
	});
	/*-- Odometer Counting End--*/
	// wow animation
		new WOW().init();
	// wow animation
	// scroll top bottom
	let calcScrollValue = () => {
		let scrollProgress = document.getElementById("progress");
		let progressValue = document.getElementById("valu");
		let pos = document.documentElement.scrollTop;
		let calcHeight =
		document.documentElement.scrollHeight - 
		document.documentElement.clientHeight;
		let scrollValue = Math.round((pos * 250) / calcHeight);
		
		if (pos > 250){
			scrollProgress.style.display = "grid";
		} else{
			scrollProgress.style.display = "none";
		}
		scrollProgress.addEventListener("click", () => {
			document.documentElement.scrollTop = 0;
		}); 
	};
	window.onscroll = calcScrollValue;
	window.onload = calcScrollValue;
	// scroll top bottom
	//preloader
	setTimeout(function(){
		$('.bg-load').fadeToggle();
	}, 1500);
	//preloader
	//Tabbing tab
		const tabs = document.querySelectorAll(".tab");
		const tabContent = document.querySelectorAll(".tab-content");
		let tabNo = 0;
		let contentNo = 0;
		tabs.forEach((tab) => {
			tab.dataset.id = tabNo;
			tabNo++;
			tab.addEventListener("click", function () {
				tabs.forEach((tab) => {
				tab.classList.remove("active");
				tab.classList.add("non-active");
				});
				this.classList.remove("non-active");
				this.classList.add("active");
				tabContent.forEach((content) => {
				content.classList.add("hidden");
				if (content.dataset.id === tab.dataset.id) {
					content.classList.remove("hidden");
				}
				});
			});
		});
		tabContent.forEach((content) => {
		content.dataset.id = contentNo;
		contentNo++;
	});

	//--Nice Select--//
	$('select').niceSelect();

	//myCustom Calender
	// var d = new Date();

	// 	var Calendar = {
	// 	themonth : d.getMonth(), // The number of the month 0-11
	// 	theyear : d.getFullYear(), // This year
	// 	today : [d.getFullYear(),d.getMonth(),d.getDate()], // adds today style
	// 	selectedDate : null, // set to today in init()
	// 	years : [], // populated with last 10 years in init()
	// 	months : ['January','February','March','April','May','June','July','August','September','October','November','December'],

	// 	init: function(){
	// 		this.selectedDate = this.today
	// 		// Populate the list of years in the month/year pulldown
	// 		var year = this.theyear;
	// 		for (var i=0; i<10; i++) {
	// 		this.years.push(year--);
	// 		}
			
	// 		this.bindUIActions();
	// 		this.render();
	// 	},

	// 	bindUIActions: function() {
	// 		// Create Years list and add to ympicker
	// 		for (var i=0;i<this.years.length;i++)
	// 		$('<li>'+this.years[i]+'</li>').appendTo('.calendar-ympicker-years');
	// 		this.selectMonth(); this.selectYear(); // Add active class to current month n year

	// 		// Slide down year month picker
	// 		$('.monthname').click(function(){
	// 		$('.calendar-ympicker').css('transform','translateY(0)');
	// 		});

	// 		// Close year month picker without action
	// 		$('.close').click(function(){
	// 		$('.calendar-ympicker').css('transform','translateY(-100%)');
	// 		});

	// 		// Move calander to today
	// 		$('.today').click(function(){
	// 		Calendar.themonth = d.getMonth(); 
	// 		Calendar.theyear = d.getFullYear();
	// 		Calendar.selectMonth(); Calendar.selectYear();
	// 		Calendar.selectedDate = Calendar.today;
	// 		Calendar.render();
	// 		$('.calendar-ympicker').css('transform','translateY(-100%)');
	// 		});

	// 		// Click handlers for ympicker list items
	// 		$('.calendar-ympicker-months li').click(function(){        
	// 		Calendar.themonth = $('.calendar-ympicker-months li').index($(this));
	// 		Calendar.selectMonth();
	// 		Calendar.render();
	// 		$('.calendar-ympicker').css('transform','translateY(-100%)');
	// 		});
	// 		$('.calendar-ympicker-years li').click(function(){         
	// 		Calendar.theyear = parseInt($(this).text());
	// 		Calendar.selectYear();
	// 		Calendar.render();
	// 		$('.calendar-ympicker').css('transform','translateY(-100%)');
	// 		});

	// 		// Move the calendar pages
	// 		$('.minusmonth').click(function(){
	// 		Calendar.themonth += -1;
	// 		Calendar.changeMonth();
	// 		});
	// 		$('.addmonth').click(function(){
	// 		Calendar.themonth += 1;
	// 		Calendar.changeMonth();
	// 		});
	// 	},

	// 	// Adds class="active" to the selected month/year
	// 	selectMonth : function(){
	// 		$('.calendar-ympicker-months li').removeClass('active');
	// 		$('.calendar-ympicker-months li:nth-child('+(this.themonth+1)+')').addClass('active');
	// 	},
	// 	selectYear : function(){
	// 		$('.calendar-ympicker-years li').removeClass('active');
	// 		$('.calendar-ympicker-years li:nth-child('+(this.years.indexOf(this.theyear)+1)+')').addClass('active');
	// 	},

	// 	// Makes sure that month rolls over years correctly
	// 	changeMonth: function(){
	// 		if(this.themonth == 12){
	// 			this.themonth = 0;
	// 			this.theyear++;
	// 			this.selectYear();
	// 		}
	// 		else if(this.themonth == -1){
	// 		this.themonth = 11;
	// 		this.theyear--;
	// 		this.selectYear();
	// 		}
	// 		this.selectMonth();
	// 		this.render();
	// 	},

	// 	// Helper functions for time calculations
	// 	TimeCalc : {
	// 		firstDay : function(month,year) {
	// 		var fday = new Date(year,month,1).getDay(); // Mon 1 ... Sat 6, Sun 0
	// 		if (fday === 0) fday = 7;
	// 		return fday -1; // Mon 0 ... Sat 5, Sun 6
	// 		},
	// 		numDays : function(month,year) {
	// 		return new Date(year,month+1,0).getDate(); // Day 0 is the last day in the previous month
	// 		}
	// 	},

	// 	render : function(){
	// 		var days = this.TimeCalc.numDays(this.themonth, this.theyear), // get number of days in the month
	// 		fDay = this.TimeCalc.firstDay(this.themonth, this.theyear), // find what day of the week the 1st lands on        
	// 		daysHTML = '', i;

	// 		$('.calendar p.monthname').text(this.months[this.themonth]+'  '+this.theyear); // add month name and year to calendar
	// 		for (i=0; i<fDay; i++) { // place the first day of the month in the correct position
	// 		daysHTML += '<li class="noclick">&nbsp;</li>';
	// 		}
	// 		// write out the days
	// 		for (i=1; i<=days; i++) { 
	// 		if(this.today[0] == this.selectedDate[0] && 
	// 			this.today[1] == this.selectedDate[1] && 
	// 			this.today[2] == this.selectedDate[2] &&
	// 			this.today[0] == this.theyear && 
	// 			this.today[1] == this.themonth && 
	// 			this.today[2] == i)
	// 			daysHTML += '<li class="active today">'+i+'</li>';
	// 		else if(this.today[0] == this.theyear && 
	// 			this.today[1] == this.themonth && 
	// 			this.today[2] == i)
	// 			daysHTML += '<li class="today">'+i+'</li>';
	// 		else if(this.selectedDate[0] == this.theyear && 
	// 			this.selectedDate[1] == this.themonth && 
	// 			this.selectedDate[2] == i)
	// 			daysHTML += '<li class="active">'+i+'</li>';
	// 		else
	// 			daysHTML += '<li>'+i+'</li>';

	// 		$('.calendar-body').html(daysHTML); // Only one append call
	// 		}
			
	// 		// Adds active class to date when clicked
	// 		$('.calendar-body li').click(function(){ // toggle selected dates
	// 		if(!$(this).hasClass('noclick')){
	// 			$('.calendar-body li').removeClass('active');
	// 			$(this).addClass('active');
	// 			Calendar.selectedDate = [Calendar.theyear, Calendar.themonth, $(this).text()]; // save date for reselecting
	// 		}
	// 		});
	// 	}
	// 	};

	// 	Calendar.init();
	//myCustom Calender


	//Filtering
	var navbtn = document.querySelectorAll('.button'), i; // select all items to become filter

	[].forEach.call(navbtn, function(al) {
		al.addEventListener('click', function(){ 

			document.querySelector('.is-checked').classList.remove('is-checked') //remove the active class
			this.classList.add('is-checked') //add the active class to this, the clicked element
			
			var match = this.dataset.filter // store the data-filter of the clicked element in a variable
			
			var project = document.querySelectorAll('.item'); // create a variable for element to filter
			[].forEach.call(project, function(el) {
				el.classList.add('fade')
				  setTimeout(function(){
					  el.classList.add('none')
				  },300) //fade and hide all items
				  if( el.classList.contains(match)){ //if one or several items contains the variable of this.datafilter in ther class, show it and fade it in.
					  setTimeout(function(){
						  el.classList.remove('none')
					  },300)
					  setTimeout(function(){
						  el.classList.remove('fade')
					  },400)
				  }
				  if ( match === "*") { // if * show all
					  setTimeout(function(){
						  el.classList.remove('none')
					  },300)
					  setTimeout(function(){
						  el.classList.remove('fade')
					  },400)
				  }
			})
		})
	})
	//Filtering
	
});




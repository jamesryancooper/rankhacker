//////////////////////////////////////////////////////  //
//    CLEAR TIMEOUTS AND INTERVALS                      //
//////////////////////////////////////////////////////  //
;(function () {
    window.timeouts = {},
    window.intervals = {},
    window.osetTimeout = window.setTimeout,
    window.osetInterval = window.setInterval,
    window.oclearTimeout = window.clearTimeout,
    window.oclearInterval = window.clearInterval,
    window.setTimeout = function () {
        var args = _parseArgs('timeouts', arguments),
            timeout = window.osetTimeout.apply(this, args.args);
        window.timeouts[args.ns].push(timeout);
        return timeout;
    },
    window.setInterval = function () {
        var args = _parseArgs('intervals', arguments),
            interval = window.osetInterval.apply(this, args.args);
        window.intervals[args.ns].push(interval);
        return interval;
    },
    window.clearTimeout = function () {
        _removeTimer('timeouts', arguments);
    },
    window.clearInterval = function () {
        _removeTimer('intervals', arguments);
    },
    window.clearAllTimeout = function () {
        _clearAllTimer('timeouts', arguments[0]);
    },
    window.clearAllInterval = function () {
        _clearAllTimer('intervals', arguments[0]);
    };

    function _parseArgs(type, args) {
        var ns = typeof args[0] === "function" ? "no_ns" : args[0];
        if (ns !== "no_ns")[].splice.call(args, 0, 1);
        if (!window[type][ns]) window[type][ns] = [];
        return {
            ns: ns,
            args: args
        };
    }

    function _removeTimer(type, args) {
        var fnToCall = type === "timeouts" ? "oclearTimeout" : "oclearInterval",
            timerId = args[0];
        window[fnToCall].apply(this, args);
        for (var k in window[type]) {
            for (var i = 0, z = window[type][k].length; i < z; i++) {
                if (window[type][k][i] === timerId) {
                    window[type][k].splice(i, 1);
                    if (!window[type][k].length) delete window[type][k];
                    return;                        
                }
            }
        }
    }

    function _clearAllTimer(type, ns) {
        var timersToClear = ns ? window[type][ns] : (function () {
            var timers = [];
            for (var k in window[type]) {
                timers = timers.concat(window[type][k]);
            }
            return timers;
        }());
        for (var i = 0, z = timersToClear.length; i < z; i++) {
            _removeTimer(type, [timersToClear[i]]);
        }
    }
}());


//////////////////////////////////////////////////////  //
//    EVENTS ON PAGE LOADED                             //
//////////////////////////////////////////////////////  //
$(window).load(function() { // makes sure the whole site is loaded
"use strict";

	
        //$('#loading').fadeOut(); // will first fade out the loading animation
        //$('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
        //$("body").removeClass("page-loading");
        return false;
	
});


//////////////////////////////////////////////////////  //
//    EVENTS ON DOCUMENT READY                          //
//////////////////////////////////////////////////////  //
$(document).ready(function(){
"use strict";

  function createMap() {
	  
	var mapCanvas = document.getElementById('googlemaps');
	var markers = [];
	var offsetLat = 0.04;
	var offsetLng = -0.09;
	
	// Create an array of styles.
	var styles = [
		{
			"stylers": [
				{
					"visibility": "on"
				},
				{
					"saturation": -100
				},
				{
					"gamma": 0.54
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "labels.icon",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "water",
			"stylers": [
				{
					"color": "#4d4946"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels.icon",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "labels.text",
			"stylers": [
				{
					"visibility": "simplified"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#ffffff"
				}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "labels.text",
			"stylers": [
				{
					"visibility": "simplified"
				}
			]
		},
		{
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"color": "#ffffff"
				}
			]
		},
		{
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [
				{
					"gamma": 0.48
				}
			]
		},
		{
			"featureType": "transit.station",
			"elementType": "labels.icon",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "road",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"gamma": 7.18
				}
			]
		}
	];		

	// Create a new StyledMapType object, passing it the array of styles,
	// as well as the name to be displayed on the map type control.
	var styledMap = new google.maps.StyledMapType(styles,
	  {name: "Styled Map"});
		
	var mapOptions = {
	  center: new google.maps.LatLng(29.76043, -95.36980),
	  zoom: 12,
	  disableDefaultUI: true,
	  mapTypeControlOptions: {
		mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
	  }
	}
	
	var map = new google.maps.Map(mapCanvas, mapOptions)
	map.setCenter(new google.maps.LatLng((map.getCenter().lat() + offsetLat) , (map.getCenter().lng() + offsetLng)));
	smoothZoom(map, 14, map.getZoom());

	//Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set('map_style', styledMap);
	map.setMapTypeId('map_style');

	// Create the search box and link it to the UI element.
	var input = (
		document.getElementById('location')
	);
  
	var searchBox = new google.maps.places.SearchBox(
		(input)
	);
		
	// Listen for the event fired when the user selects an item from the
	// pick list. Retrieve the matching places for that item.
	google.maps.event.addListener(searchBox, 'places_changed', function() {
	  var places = searchBox.getPlaces();
  
	  if (places.length == 0) {
		return;
	  }
	  for (var i = 0, marker; marker = markers[i]; i++) {
		marker.setMap(null);
	  }
  
	  // For each place, get the icon, place name, and location.
	  markers = [];
	  var bounds = new google.maps.LatLngBounds();
	  for (var i = 0, place; place = places[i]; i++) {
		var image = {
		  url: place.icon,
		  size: new google.maps.Size(71, 71),
		  origin: new google.maps.Point(0, 0),
		  anchor: new google.maps.Point(17, 34),
		  scaledSize: new google.maps.Size(25, 25)
		};
  
		// Create a marker for each place.
		var marker = new google.maps.Marker({
		  map: map,
		  icon: image,
		  title: place.name,
		  position: place.geometry.location
		});
  
		markers.push(marker);
  
		bounds.extend(place.geometry.location);
	  }
  
	  map.fitBounds(bounds);

	  map.setCenter(new google.maps.LatLng((map.getCenter().lat() + offsetLat) , (map.getCenter().lng() + offsetLng)));

	  map.setZoom(12);
	  smoothZoom(map, 14, map.getZoom());
	});
	
	// the smooth zoom function
	function smoothZoom (map, max, cnt) {
		  if (cnt >= max) {
				  return;
			  }
		  else {
			  var z = google.maps.event.addListener(map, 'zoom_changed', function(event){
				  google.maps.event.removeListener(z);
				  smoothZoom(map, max, cnt + 1);
			  });
			  setTimeout(function(){map.setZoom(cnt)}, 200); // 80ms is what I found to work well on my system -- it might not work well on all systems
		  }
	  }
  
	// Bias the SearchBox results towards places that are within the bounds of the
	// current map's viewport.
	google.maps.event.addListener(map, 'bounds_changed', function() {
	  var bounds = map.getBounds();
	  searchBox.setBounds(bounds);
	});
	
  }
  google.maps.event.addDomListener(window, 'load', createMap);


  ///// AUTOCOMPLETE GEO LOCATION
  $("#location").geocomplete({ country: "us" });


  ///// URL INPUT
  var urlinputval = "http://";
  
  $("input[type='url']").focusin(function() {
	  // if textbox is empty or got the default value
	  if ($(this).val().indexOf("http://") == -1) {
		  // Put your Default value back
		  $(this).val(urlinputval + $(this).val());
	  }
  }).focusout(function() {
	  // if textbox is empty or just contains your value
	  if ($(this).val() == "" || $(this).val() == "http://" ) {
		  // Clear the box
		  $(this).val('');
	  }
  });


  ///// HEADER + MODAL ANIMATIONS
  $('.modal').on('show.bs.modal', function () {
	 $('.blurable').addClass('blur');
	 $('.modal.fadeable').removeClass('animated fadeOut');
	 $('.modal.fadeable').addClass('animated fadeIn');
	 $('.modal.fadeable').css({'opacity' : '1'}); 	 
	 $('.header-centred.fadeable').removeClass('animated fadeIn');
	 $('.header-centred.fadeable').addClass('animated fadeOut');
	 $('.header-centred.fadeable').css({'opacity' : '1'}); 
  });
  
  $('.modal').on('hide.bs.modal', function () {
	 $('.blurable').removeClass('blur');
	 $('.modal.fadeable').removeClass('animated fadeIn');
	 $('.modal.fadeable').addClass('animated fadeOut');
	 $('.modal.fadeable').css({'opacity' : '1'}); 	 
	 $('.header-centred.fadeable').removeClass('animated fadeOut');
	 $('.header-centred.fadeable').addClass('animated fadeIn');
	 $('.header-centred.fadeable').css({'opacity' : '1'}); 
  });

  
  ///// SMOOTH SCROLL FIX
  $(function() {
    $('a[href*=#]:not([href=#])').filter(":not(#tabs *)").click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
 
  
  ///// BUTTONS DEPRESSED FIX
  $(".btn").mouseup(function(){$(this).blur();});
  $("#navbar .navbar-nav *").mouseup(function(){$(this).blur();});


  ///// COUNTUP
  var options = {
	  useEasing : true,
	  useGrouping : true,
	  separator : ',',
	  decimal : '.',
	  prefix : '',
	  suffix : '' 
  }
  
  var inventoryCount01 = new countUp("inventory-count01", 10579, 10954, 0, 3, options);
  var inventoryCount02 = new countUp("inventory-count02", 30435, 30679, 0, 3, options);
  var count01 = new countUp("count01", -3259, -3289, 0, 3, options);
  var count02 = new countUp("count02", -432, -486, 0, 3, options);
  var count03 = new countUp("count03", -12, -6, 0, 3, options);
  var count04 = new countUp("count04", 43, 67, 0, 3, options);
  var count05 = new countUp("count05", 5, 8, 0, 3, options);
  var count06 = new countUp("count06", 0, 1, 0, 3, options);

  $('#inventory-count01').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {inventoryCount01.start();} return false;});
  $('#inventory-count02').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {inventoryCount02.start();} return false;});    
  $('#count01').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {count01.start();} return false;});
  $('#count02').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {count02.start();} return false;});
  $('#count03').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {count03.start();} return false;});
  $('#count04').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {count04.start();} return false;});
  $('#count05').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {count05.start();} return false;});
  $('#count06').on('inview', function(event, isInView, visiblePartX, visiblePartY) {if (isInView) {count06.start();} return false;});


  ///// GIVE KEYWORD FEILD FOCUS ON OPEN OF COMPETITOR MODAL
  $('#competitor').on('shown.bs.modal', function () {
    $('#keyword').focus();
  })


  ///// ENABLE POPOVERS
  $(function () {
	$('[data-toggle="popover"]').popover({
			container: '.findCompetitor',
			placement: 'right',
			trigger: 'hover',
			animation: 'fade in left'
	})
  })


  /////LOADER
  $( "#data" ).on('shown.bs.modal', function(){	
  
	  /* SET LOADER COLOR */	
	  var color = "gray";
	  //var loaded = true;
	  
	  setSkin(color);
	
	  /* COMPETITOR ARRAY */	
	  var competitors = [
		'http://www.abacusplumbing.net', 
		'http://www.rotorooter.com/houston/', 
		'http://www.angieslist.com/companylist/houston/plumbing.htm', 
		'http://en.wikipedia.org/wiki/Plumbing', 
		'http://www.villageplumbing.com', 
		'http://www.yellowpages.com/houston-tx/plumbers', 
		'http://theplumbingsolution.net', 
		'http://www.happyplumber.com/services/', 
		'http://localplumbing.com', 
		'http://www.houstonplumbing.com'
	  ];
	  
	  // Stripes interval
	  var stripesAnim;
	  var calcPercent;
	  var timeoutID;
	  
	  var loading = $('#loading');
	  var progress = $('#loading .progress-bar');
	  var percent = $('#loading .percentage');
	  var stripes = $('#loading .progress-stripes');
	  //stripes.text('////////////////////////');
	  
	  
	  // Call function to load array of competitors
	  preload(competitors);
	  
	  // Call function to animate stripes
	  //stripesAnimate(); 
	  

	  /*** FUNCTIONS ***/
	  
	  /* LOADING */
	  function preload( competitors ) {
	
		  var increment = Math.floor(100 / competitors.length);
	
		  $(competitors).each( function( index ) {
			  
			  var competitor = this;
			  var progressWidth = increment * (index + 1);
		  
			  $(document).queue('competitors', setWidth(progressWidth));
		
		  });
	
	  }


	  function setWidth( progressWidth ) {
		  
	    return function(next){
        	doWidth(progressWidth, next);
		}
		
	  }

	  function doWidth( progressWidth, next ) {
		  
		  var minTime = 300;
		  var maxTime = 1200;
		  var time = Math.floor(Math.random()*(maxTime-minTime+1)+maxTime);
		  
		  timeoutID = setTimeout( function(){
	
			  progress.animate({
				  
				  //Change width. Correct for 10% progress number being hidden
				  width: ((progressWidth == 10) ? 12 : progressWidth) + "%"
				  
			  }, 100, function() {
				  
				  if ((progressWidth / 10) <= 5 ) {
				 	 $('#competitor-list-1 li:nth-child(' + progressWidth / 10 + ')').removeClass('noopacity');
					 $('#competitor-list-1 li:nth-child(' + progressWidth / 10 + ')').addClass('animated fadeInLeft'); 
				  } else {
				  	 $('#competitor-list-2 li:nth-child(' + ((progressWidth / 10) - 5) + ')').removeClass('noopacity');
					 $('#competitor-list-2 li:nth-child(' + ((progressWidth / 10) - 5) + ')').addClass('animated fadeInRight');
				  }
				  
			  });;

			  $({countNum: percent.text().slice(0,-1)}).animate({countNum: Math.floor(progressWidth)}, {
					duration: minTime,
					easing:'linear',
					step: function() {
					  percent.text(Math.floor(this.countNum) + "%");
					},
					complete: function() {
					  percent.text(this.countNum + "%");
					}
			  });	
			  //loop through the items
			  //percent.text(Math.floor(progressWidth) + '%');
	
		  	  console.log( (progressWidth / 10)+ " :: " + progressWidth + " :: " + timeoutID);  
			  next();
				  
		  }, time )
			  					 
	  }
	  
	  /* STRIPES ANIMATION */
	  function stripesAnimate() {
		  animating();
		  stripesAnim = setInterval(animating, 2500);
	  }
	
	  function animating() {
		  stripes.animate({
			  marginLeft: "-=30px"
		  }, 2500, "linear").append('/');
	  } 
	  
	  function setSkin(skin){
		  $('.loader').attr('class', 'loader '+ skin);
		  $('#loading h6').hasClass('loaded') ? $('#loading h6').attr('class', 'loaded ' + skin) : $('#loading h6').attr('class', skin);
	  }

	  /* WHEN FINISHED */
	  function completeLoad () {
		  progress.animate({
				  width: "100%"
			  }, 100, function() {
				  $('#loading h6').text('Complete!').addClass('loaded');
				  percent.text('100%');
				  clearInterval(calcPercent);
				  clearInterval(stripesAnim);
		  });
		  $('#data .loading').delay(300).animate({
			  	  opacity: 0
			  }, 1000, function() {
			  	$('#data .loading').addClass('animated fadeOut noopacity nodisplay');
		  });	
		  loading.delay(300).animate({
			  	  opacity: 0,
				  height: 0
			  }, 1000, function() {
			  	$('#loading').attr('class', 'animated fadeOut noopacity nodisplay');
		  });
		  $('#data-attribution').delay(300).animate({
			  	  opacity: 100
			  }, 1000, function() {
			  	$('#data-attribution').removeClass('noopacity nodisplay');
				$('#data-attribution').addClass('animated fadeIn');
				$('#data .modal-header .competitor').removeClass('noopacity nodisplay');
				$('#data .modal-header .competitor').addClass('animated fadeIn'); 
				$('#gotoInventory').removeClass('noopacity nodisplay');
				$('#gotoInventory').addClass('animated fadeIn'); 
		  });
	
	  }
	  
	  $(document).queue('competitors', function(){
		  completeLoad();
		  clearTimeout(timeoutID);
		  console.log("all done");
	  });
	  
	  $(document).dequeue('competitors');
	  
  })
  
  	  
  ///// DYNAMIC MODAL CONTENT
  $(function() {
	  
	//REGISTRATION MODAL
	var login = $("#login");
    var remind = $("#remind");
    var register = $("#register");
    var gotoRegisterLink = $("#gotoRegister");
    var gotoLoginLink = $("#gotoLogin");
    var gotoRemindLink = $("#gotoRemind");
    var gotoRegisterButton = $("button.gotoRegister");
    var gotoLoginButton = $("button.gotoLogin");

	//SHOW
    var showCompetitor = $(".showCompetitor");
	var showInventory= $(".showInventory");
	var showComparison = $(".showComparison");
	
	//GOTO
	var gotoInventory = $("#gotoInventory");
	var gotoComparison = $("#gotoComparison");	

	//MODAL SCREENS
	var loading = $(".loading");
	var competitor = $(".competitor");
	var competitorAnalyzer = $("#competitor-analyzer");
	var inventory = $("#inventory");
	var user = $("#user");
	var userAnalyzer = $("#user-analyzer");
	var comparison = $("#comparison");
	
    var clearMe1;
    var clearMe2;
	var clearMe3;
    var clearMe4;
    var clearMe5;
	var clearMe6;
	   
    function stopTimer() {
      clearTimeout(clearMe1);
      clearTimeout(clearMe2);
      clearTimeout(clearMe3);
	  clearTimeout(clearMe4);
      clearTimeout(clearMe5);
      clearTimeout(clearMe6);
    }
    
	//REGISTER LINK
    gotoRegisterLink.on("click", function() {  
	
      login.addClass("noopacity");
      remind.addClass("noopacity");
      
      clearMe1 = setTimeout(function (){
        login.addClass("nodisplay");
        remind.addClass("nodisplay");
        register.removeClass("nodisplay");
        gotoRegisterLink.addClass("noopacity");
      }, 300); // delay
      
      clearMe2 = setTimeout(function (){
        register.removeClass("noopacity");
        gotoRegisterLink.addClass("nodisplay");
        gotoLoginLink.removeClass("nodisplay");
      }, 350); // delay
      
      clearMe3 = setTimeout(function (){
        gotoLoginLink.removeClass("noopacity");
      }, 400); // delay
      
      stopTimer();
      
    });
    
	//REGISTER BUTTON
    gotoRegisterButton.on("click", function() {  
	
      login.addClass("noopacity");
      remind.addClass("noopacity");
      
      clearMe1 = setTimeout(function (){
        login.addClass("nodisplay");
        remind.addClass("nodisplay");
        register.removeClass("nodisplay");
        gotoRegisterLink.addClass("noopacity");
      }, 300); // delay
      
      clearMe2 = setTimeout(function (){
        register.removeClass("noopacity");
        gotoRegisterLink.addClass("nodisplay");
        gotoLoginLink.removeClass("nodisplay");
      }, 350); // delay
      
      clearMe3 = setTimeout(function (){
        gotoLoginLink.removeClass("noopacity");
      }, 400); // delay
      
      stopTimer();
      
    });
	 
	//LOGIN LINK  
    gotoLoginLink.on("click", function() {  
	
      register.addClass("noopacity");
      remind.addClass("noopacity");
      
      clearMe1 = setTimeout(function (){
        register.addClass("nodisplay");
        remind.addClass("nodisplay");
        login.removeClass("nodisplay");
        gotoLoginLink.addClass("noopacity");
      }, 300); // delay
      
      clearMe2 = setTimeout(function (){
        login.removeClass("noopacity");
        gotoLoginLink.addClass("nodisplay");
        gotoRegisterLink.removeClass("nodisplay");
      }, 350); // delay
      
      clearMe3 = setTimeout(function (){
        gotoRegisterLink.removeClass("noopacity");
      }, 400); // delay
      
      stopTimer();
      
    });
 	
	//LOGIN BUTTON
    gotoLoginButton.on("click", function() {  
	
		register.addClass("noopacity");
		remind.addClass("noopacity");
		
		clearMe1 = setTimeout(function (){
		  register.addClass("nodisplay");
		  remind.addClass("nodisplay");
		  login.removeClass("nodisplay");
		  gotoLoginLink.addClass("noopacity");
		}, 300); // delay
		
		clearMe2 = setTimeout(function (){
		  login.removeClass("noopacity");
		  gotoLoginLink.addClass("nodisplay");
		  gotoRegisterLink.removeClass("nodisplay");
		}, 350); // delay
		
		clearMe3 = setTimeout(function (){
		  gotoRegisterLink.removeClass("noopacity");
		}, 400); // delay
		
		stopTimer();
      
    });  
    
	//REMIND LINK
    gotoRemindLink.on("click", function() {  
	
		register.addClass("noopacity");
		login.addClass("noopacity");
		
		clearMe1 = setTimeout(function (){
		  register.addClass("nodisplay");
		  login.addClass("nodisplay");
		  remind.removeClass("nodisplay");
		  gotoLoginLink.addClass("noopacity");
		}, 300); // delay
		
		clearMe2 = setTimeout(function (){
		  remind.removeClass("noopacity");
		  gotoLogin.addClass("nodisplay");
		  gotoRegisterLink.removeClass("nodisplay");
		}, 350); // delay
		
		clearMe3 = setTimeout(function (){
		  gotoRegisterLink.removeClass("noopacity");
		}, 400); // delay
		
		stopTimer();
      
    });
 
  	//COMPETITOR
	function gotoCompetitor() {  
			
		  loading.addClass("noopacity");
		 
		  clearMe1 = setTimeout(function (){
			loading.addClass("nodisplay");
		  }, 300); // delay
		  
		  clearMe2 = setTimeout(function (){
			competitor.removeClass("nodisplay");
		  }, 350); // delay	  
	
		  clearMe3 = setTimeout(function (){
			competitor.removeClass("noopacity");
		  }, 400); // delay
			  
		  stopTimer();
      
    };
	
	
	//INVENTORY
	gotoInventory.on("click", function() {  
	
	   $(document)
	   
	   		.queue('inventory', function(next) { 
	   		
				$(competitor).addClass("animated fadeOut");
				clearMe1 = setTimeout(next, 300); // delay
			
			})
			
		    .queue('inventory', function(next) { 
	   		 
				$(competitor).addClass("noopacity nodisplay");
				$(competitorAnalyzer).addClass("animated fadeIn");
				clearMe2 = setTimeout(next, 300); // delay
			
			})
			
			.queue('inventory', function(next) { 
	   		
				$(competitorAnalyzer).removeClass("noopacity nodisplay");
				clearMe3 = setTimeout(next, 6000); // delay
			
			})
			
			.queue('inventory', function(next) { 
	   		
				$(competitorAnalyzer).removeClass("animated fadeIn");
				$(competitorAnalyzer).addClass("animated fadeOut");
				clearMe4 = setTimeout(next, 300); // delay
			
			})
			
			.queue('inventory', function(next) { 
	   		
				$(competitorAnalyzer).addClass("noopacity nodisplay");
				$(inventory).addClass("animated fadeIn");	
				$(user).addClass("animated fadeIn");
				clearMe5 = setTimeout(next, 600); // delay
				
				console.log("this happened");
			
			})
				
			.queue('inventory', function(next) { 
	   		
				$(inventory).removeClass("noopacity nodisplay");
				$(user).removeClass("noopacity nodisplay");	
				clearMe6 = setTimeout(next, 300); // delay
			
			})
			
			.queue('inventory', function(){
				  stopTimer();
				  console.log("inventory queue is done");
			 })
			  
			.dequeue('inventory');
	
    });


	//COMPARISON
	gotoComparison.on("click", function() {  
	
	   $(document)
	   
	   		.queue('comparison', function(next) { 
	   		
				$(inventory).addClass("animated fadeOut");
				$(user).addClass("animated fadeOut");
				clearMe1 = setTimeout(next, 300); // delay
			
			})
			
		    .queue('comparison', function(next) { 
	   		 
				$(inventory).addClass("noopacity nodisplay");
				$(user).addClass("noopacity nodisplay");
				$(userAnalyzer).addClass("animated fadeIn");
				clearMe2 = setTimeout(next, 300); // delay
			
			})
			
			.queue('comparison', function(next) { 
	   		
				$(userAnalyzer).removeClass("noopacity nodisplay");
				clearMe3 = setTimeout(next, 6000); // delay
			
			})
			
			.queue('comparison', function(next) { 
	   		
				$(userAnalyzer).removeClass("animated fadeIn");
				$(userAnalyzer).addClass("animated fadeOut");
				clearMe4 = setTimeout(next, 300); // delay
			
			})
			
			.queue('comparison', function(next) { 
	   		
				$(userAnalyzer).addClass("noopacity nodisplay");
				$(comparison).addClass("animated fadeIn");	
				clearMe5 = setTimeout(next, 300); // delay
			
			})
				
			.queue('comparison', function(next) { 
	   		
				$(comparison).removeClass("noopacity nodisplay");
				clearMe6 = setTimeout(next, 300); // delay
			
			})
			
			.queue('comparison', function(){
				  stopTimer();
				  console.log("comparison queue is done");
			 })
			  
			.dequeue('comparison');
	
    });
	
	
	
	/*ANALYZER
	gotoAnalyzer.on("click", function() {  
			
		  $(inventory).delay(300).animate({
			  	  opacity: 100,
			  }, 300, function() {
			  	$(inventory).addClass("noopacity nodisplay");
		  });
		  
		  $(user).delay(300).animate({
			  	  opacity: 100,
			  }, 300, function() {
			  	$(user).addClass("noopacity nodisplay");
		  });

		  $(analyzer).delay(600).animate({
			  	  opacity: 100,
			  }, 300, function() {
			  	$(analyzer).removeClass("noopacity nodisplay");
				$('#modal-header .analyzer').addClass("animated fadeInDown");
		  });
		  	      
    });*/
	
  	//COMPARISON
	function gotoComparison() {  
	
		  dataAnalyzer.addClass("noopacity");
		 
		  clearMe1 = setTimeout(function (){
			dataAnalyzer.addClass("nodisplay");  
		  }, 300); // delay
		  
		  clearMe2 = setTimeout(function (){
			comparison.removeClass("nodisplay");
		  }, 350); // delay	  
	
		  clearMe3 = setTimeout(function (){
			comparison.removeClass("noopacity");
		  }, 400); // delay
			  
		  stopTimer();
      
    };
	
	
    return false;
    
  });

//////////////////////////////////////////////////////  //
//    DOCUMENT READY: EVENTS ON MOBILE                  //
//////////////////////////////////////////////////////  //
  if ($(window).width() < 768) {
    
    ///// DON'T SCROLL ON TABS
    $('#navbar .nav a').filter(":not(#tabs *)").on('click', function(){
      $("#navbar-header .navbar-toggle").on("click");
      return false;
    });
    
  } // EVENTS ON MOBILE ENDS HERE


//////////////////////////////////////////////////////  //
//    DOCUMENT READY: EVENTS ON DESKTOP                 //
//////////////////////////////////////////////////////  // 
  if ($(window).width() > 768) {
    
    ///// SCROLL ANIMATIONS
    $('.anim-from-right').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated fadeInRight');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    
    $('.anim-from-left').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated fadeInLeft');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    
    $('.anim-fade').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated fadeIn');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });

    $('.anim-fade-out').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is invisible in the viewport
        $(this).addClass('animated fadeOut');
        $(this).css({'opacity' : '0'});
      }
       return false;
    });
	
    $('.anim-fade-down').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated fadeInDown');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    $('.anim-fade-up').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated fadeInUp');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    $('.anim-bounce').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated bounceIn');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    $('.anim-bounce-left').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated bounceInLeft');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    $('.anim-bounce-right').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated bounceInRight');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    $('.anim-bounce-down').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated bounceInDown');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    $('.anim-bounce-up').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated bounceInUp');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    $('.anim-zoom-down').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated zoomInDown');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
    $('.anim-zoom-up').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
      if (isInView) {
        // element is visible in the viewport
        $(this).addClass('animated zoomInUp');
        $(this).css({'opacity' : '1'});
      }
       return false;
    });
    
  } // EVENTS ON DESKTOP ENDS HERE
  
}); // DOCUMENT READY ENDS HERE




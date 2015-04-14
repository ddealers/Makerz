$(document).on('ready',
	function(){
		var $head = $( '#ha-header' );
			$( '.ha-waypoint' ).each( function(i) {
				var $el = $( this ),
					animClassDown = $el.data( 'animateDown' ),
					animClassUp = $el.data( 'animateUp' );

				$el.waypoint( function( direction ) {
					if( direction === 'down' && animClassDown ) {
						$head.attr('class', 'ha-header ' + animClassDown);
					}
					else if( direction === 'up' && animClassUp ){
						$head.attr('class', 'ha-header ' + animClassUp);
					}
				}, { offset: '100%' } );
			} );
		var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

	    
	    // Canvas manipulation
	    function drawLines(p) {
	        if(!p.active) return;
	        for(var i in p.closest) {
	            ctx.beginPath();
	            ctx.moveTo(p.x, p.y);
	            ctx.lineTo(p.closest[i].x, p.closest[i].y);
	            ctx.strokeStyle = 'rgba(234,108,19,'+ p.active+')';
	            ctx.stroke();
	        }
	    }

	    function Circle(pos,rad,color) {
	        var _this = this;

	        // constructor
	        (function() {
	            _this.pos = pos || null;
	            _this.radius = rad || null;
	            _this.color = color || null;
	        })();

	        this.draw = function() {
	            if(!_this.active) return;
	            ctx.beginPath();
	            ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
	            ctx.fillStyle = 'rgba(234,108,19,'+ _this.active+')';
	            ctx.fill();
	        };
	    }

	    // Util
	    function getDistance(p1, p2) {
	        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
	    }
	    $('section#about img').on('mouseover',
	    	function (){
	    		console.log ("mouseover");
	    		TweenMax.fromTo ('section#about img',.5,{opacity:0}, {opacity:1});
	    		$(this).attr("src", "../imgs/part-2.png");
	    	});
	    $('section#about img').on('mouseleave',
	    	function(){
	    		TweenMax.fromTo ('section#about img',.5,{opacity:0}, {opacity:1});
	    		$(this).attr("src", "../imgs/part-1.png");
	    	});
	 	$('.w').on('mouseover',
	 		function (){
	 			$('#text-wences').css({display:"block"});
	 			TweenMax.fromTo ('#text-wences',0.7,{y: -50, opacity:0},{y: 0, opacity:.9, ease: Bounce.easeOut});
	 		});
	 	$('#text-wences').on('mouseleave',
	 		function (){
	 			TweenMax.fromTo ('#text-wences',0.7,{y: 0, opacity:.9},{y: -50, opacity:0, ease: Bounce.easeOut, onComplete: function(){
	 				$('#text-wences').css({display:"none"});
	 			}});
	 		});



	 	$('.l').on('mouseover',
	 		function (){
	 			$('#text-lau').css({display:"block"});
	 			TweenMax.fromTo ('#text-lau',0.7,{y: -50, opacity:0},{y: 0, opacity:.9, ease: Bounce.easeOut});
	 		});
	 	$('#text-lau').on('mouseleave',
	 		function (){
	 			TweenMax.fromTo ('#text-lau',0.7,{y: 0, opacity:.9},{y: -50, opacity:0, ease: Bounce.easeOut, onComplete: function(){
	 				$('#text-lau').css({display:"none"});
	 			}});
	 		});



	 	$('.a').on('mouseover',
	 		function(){
	 			$('#text-ares').css({display:"block"});
	 			TweenMax.fromTo ('#text-ares',0.7,{y: -50, opacity:0},{y: 0, opacity:.9, ease: Bounce.easeOut});
	 		});
	 	$('#text-ares').on('mouseleave',
	 		function (){
	 			TweenMax.fromTo ('#text-ares',0.7,{y: 0, opacity:.9},{y: -50, opacity:0, ease: Bounce.easeOut, onComplete: function(){
	 				$('#text-ares').css({display:"none"});
	 			}});
	 		});

	 	$('.j').on('mouseover',
	 		function(){
	 			$('#text-juan').css({display:"block"});
	 			TweenMax.fromTo ('#text-juan',0.7,{y: -50, opacity:0},{y: 0, opacity:.9, ease: Bounce.easeOut});
	 		});
	 	$('#text-juan').on('mouseleave',
	 		function (){
	 			TweenMax.fromTo ('#text-juan',0.7,{y: 0, opacity:.9},{y: -50, opacity:0, ease: Bounce.easeOut, onComplete: function(){
	 				$('#text-juan').css({display:"none"});
	 			}});
	 		});
	 	if($('#map').length > 0){
	 		var map = new GMaps({
		      	el: '#map',
		      	lat: 19.516458,
		      	lng: -99.040744
		    });
		    map.addMarker({
			  	lat: 19.516458,
			  	lng: -99.040744,
			  	title: 'Makerz',
			  	click: function(e) {
			    alert('You clicked in this marker');
			  	}
			});
	 	};
	 $('.carousel').slick();
});

$(document).on('ready', function(){
	setTimeout(function(){
		TweenLite.to('#loader-wrapper', 1, {css:{autoAlpha: 0}});
	}, 2000);
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
		  	animation: google.maps.Animation.BOUNCE
		});
	};
	/*
	setInterval(function() {
    	var nextItem = $('.item.active').fadeOut().removeClass('active').next('.item');

    	if (nextItem.length === 0) {
      		nextItem = $('.item').first();
    	}

    	nextItem.fadeIn().addClass('active');
	}, 4000);*/
// P A R A L L A X //
	$('.parallax-layer').parallax(
		{},
		{xparallax: '40px', yparallax: '10px'},
		{xparallax: '0px', yparallax: '30px'},
		{xparallax: '50px', yparallax: '10px'},
		{xparallax: '0px', yparallax: '10px'},
		{xparallax: '600px', yparallax: '20px'},
		{xparallax: '160px', yparallax: '10px'},
		{xparallax: '100px', yparallax: '10px'}
	);
// F O R M   S U G E R E N C I A S//
	$('.form').submit(function(event){
		var $form = $(this);
		var email= $("#email-form").val();
		var emailIsString= /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm.test(email);

		if(!email|| !emailIsString){
			alert("El dato E-mail no es válido");
			return false;
		}
	});
// F O R M   C O N T A C T O//
	$('.form-horizontal').submit(function(event){
		var $form = $(this);
		var name= $form.find("#name").val();
		var email= $("#email").val();
		var message= $("#message").val();
		var nameIsString= /[a-zA-Z]/.test(name);
		var emailIsString= /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm.test(email);
		var messageIsString= /[a-zA-Z0-9 .!\n]{0,50}/.test(message);

		if(!name || !nameIsString){
			alert("El dato Nombre no es válido");
			return false;
		}
		if(!email|| !emailIsString){
			alert("El dato E-mail no es válido");
			return false;
		}
		if(!message|| !messageIsString){
			alert("El dato Mensaje no es válido");
			return false;
		}
		$form.find('.btn').prop('disabled', true);
		var base64email = "dmFtcGF5QGRpZ2l0YWxkZWFsZXJzLm14";
		var baseURL = "//formspree.io/";
		$.ajax({
			url: baseURL + atob(base64email),
			method: "POST",
			data: {message: message, email: email, _subject: "Pregunta de " + name },
			dataType: "json",
			success: function(){
				var $p = $("<p>Tu correo ha sido enviado y será contestado a la brevedad ¡Buen día!</p>");
				$form.prepend($p);
				$p.delay(3000).fadeOut(400, function(){
					$form.remove($p);
				});
				$form.find('.btn').prop('disabled', false);
			},
			error: function(){
				alert("No fue posible enviar tu correo, inténtalo nuevamente.");
			}
		})
		return false;	
	});
// M A I L  I N S C R I P C I Ó N//
	TweenLite.set('#subscribe-form', {css:{autoAlpha: 0}});
	TweenLite.set('#subscribe-form form', {y: -100});
	$('#subscribe-btn').on('click', function(e){
		e.preventDefault();
		TweenLite.to('#subscribe-form', 0.7, {css:{autoAlpha: 1}, ease: Power2.easeOut});
		TweenLite.to('#subscribe-form form', 0.7, {y: 0, ease: Back.easeOut});
	});
	$('.fill-back').on('click', function(e){
		e.preventDefault();
		TweenLite.to('#subscribe-form', 0.7, {css:{autoAlpha: 0}, ease: Power2.easeOut});
		TweenLite.to('#subscribe-form form', 0.7, {y: -100, ease: Back.easeIn});
	});
	$('#subscribe-me').submit(function(e){
		var $form			= $(this);
		var name 			= $("#subscribe-name").val();
		var email 			= $("#subscribe-email").val();
		var phone 			= $("#subscribe-phone").val();
		var course 			= $("#subscribe-course").val();
		var message 		= $("#subscribe-message").val();
		var emailIsString 	= /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm.test(email);
		
		if(!email|| !emailIsString){
			alert("El dato E-mail no es válido");
			return false;
		}
		
		$form.find('.btn').prop('disabled', true);
		var base64email = "dmFtcGF5QGRpZ2l0YWxkZWFsZXJzLm14";
		var baseURL = "//formspree.io/";
		$.ajax({
			url: baseURL + atob(base64email),
			method: "POST",
			data: {name:name, email: email, phone: phone, course:course, message: message, _subject: "MAKERZ :: " + name + " desea inscribirse a " + course },
			dataType: "json",
			success: function(){
				var $p = $("<p>Tu correo ha sido enviado y será contestado a la brevedad ¡Buen día!</p>");
				$form.prepend($p);
				$p.delay(3000).fadeOut(400, function(){
					TweenLite.to('#subscribe-form', 0.7, {css:{autoAlpha: 0}, ease: Power2.easeOut});
					TweenLite.to('#subscribe-form form', 0.7, {y: -100, ease: Back.easeIn});
					$("#subscribe-name").val('');
					$("#subscribe-email").val('');
					$("#subscribe-phone").val('');
					$("#subscribe-message").val('');
					$p.remove();
				});
				$form.find('.btn').prop('disabled', false);
				
			},
			error: function(){
				alert("No fue posible enviar tu correo, inténtalo nuevamente.");
			}
		});
		return false;	
	});
});













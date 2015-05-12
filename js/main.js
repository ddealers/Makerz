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
});













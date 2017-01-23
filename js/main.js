var remAddClass = function() {

	if($(window).width() < 1010){
		$('figcaption.t1').removeClass('active');
		$('figcaption.t1').addClass('remove');
		$('figcaption.t2').removeClass('remove');
		$('figcaption.t2').addClass('active');
	}
	else {
		$('figcaption.t2').removeClass('active');
		$('figcaption.t2').addClass('remove');
		$('figcaption.t1').removeClass('remove');
		$('figcaption.t1').addClass('active');
	}
}

$(window).on('resize', remAddClass);

//  var teste = function () {
// 	setTimeout($('figcaption.t1').removeClass('remove'), 3000);
//  setTimeout($('figcaption.t1').addClass('active'), 3000);
// 	setTimeout($('figcaption.t2').removeClass('remove'), 3000);
// 	setTimeout($('figcaption.t2').addClass('active'), 3000);
// }

// function startTime() {
	
// 	var s = 0,
// 	    m = 0,
// 	    h = 0

// 	 for(var i = 0; i < 120; i++){
	 	
// 	 	setInterval(function(){

// 	 		if(s < 60){
// 	 			s++;
// 	 		}else if(m < 60) {
// 	 			s = 0;
// 	 			m++;
// 	 		}else {
// 	 			s = 0;
// 	 			m = 0;
// 	 			h++;
// 	 	}

// 	 		console.log("Hours:" + h + "Minutes:" + m + " Seconds: " +s);

// 	 	}, 1000)
// 	 }

// }


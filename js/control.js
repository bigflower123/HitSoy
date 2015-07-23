	 /*écrit par HitSoy*/
	 $(function(){
		/*appele des fonctions de anima.js pour des deplacements des lettres*/
		function a()
		{
			posrandom();
			posdownrandom();
			posrandom();
			posdownrandom();
			posrandom();
			posdownrandom();	
		}
		/*affiche et cache des actions*/
	    function show0(){
		  $(".wrap1").fadeIn(5000);
		}
		function show1(){
		  $(".wrap1").fadeOut(5000); 
		}
		function show2(){
		  $(".wrap2").fadeIn(5000);
		}
		function show3(){
		   $(".wrap2").fadeOut(5000);
		}
		function show4(){
		  $(".wrap3").fadeIn(5000);
		}
		function show5(){
		  $(".wrap3").fadeOut(5000);
		}
		function show6(){
		  $(".wrap4").fadeIn(5000);
		}
		function show7(){
			$(".wrap4").hide();
			$(".wrap5").show();
		}
		function show8(){
			$(".wrap5").hide();
			$(".wrap6").show();
		}
		function show9(){
			$(".wrap6").hide();
			$(".wrap7").show();
		}
		function show10(){
			$(".wrap7").fadeOut(5000);
		}
		function show11(){
			$(".wrap8").fadeIn(5000);
		}
		function show12(){
			$(".wrap8").fadeOut(5000);
			$(".lanuit").fadeOut(5000);
		}
		function show13(){
			$(".fin").fadeIn(10000);
		}
		
		setTimeout(a,1000);
		setTimeout(hide,7000);
		setTimeout(show,7000);	
		setTimeout(move,16000);
		setTimeout(show0,11000);
		setTimeout(show1,16000);
		setTimeout(show2,21000);
		setTimeout(show3,26000);
		setTimeout(show4,31000);
		setTimeout(show5,36000);
		setTimeout(show6,41500);
		setTimeout(show7,42500);
		setTimeout(show8,43500);
		setTimeout(show9,44500);
		setTimeout(show10,45000);
		setTimeout(show11,48000);
		setTimeout(show12,52000);
		setTimeout(show13,54000);
	});
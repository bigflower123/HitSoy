  /*écrit par HitSoy*/
 /*le deplacement de la lune*/
function move(){

	/*la lune monte*/
	for(i=1;i<20;i++)
	{
	  var posl = i;
	  var post = 4*Math.sqrt(posl);;
	  moveup(posl,post);
	}
	/*la lune arête*/
	setTimeout(moveup(0,0),1000);
	{
	  var posl = i;
	  var post = 2*Math.sqrt(posl);;
	  moveup(posl,post);
	}
	for(i=1;i<25;i++)
	{
	  var posl = i;
	  var post = Math.sqrt(posl);;
	  moveup(posl,post);
	}
	setTimeout(moveup(0,0),1000);
	/*la lune descent*/
	for(i=1;i<25;i++)
	{
	  var posl = i;
	  var post = Math.sqrt(posl);;
	  movedown(posl,post);
	}
	for(i=1;i<20;i++)
	{
	  var posl = i;
	  var post = 2*Math.sqrt(posl);;
	  movedown(posl,post);
	}
	setTimeout(movedown(0,0),1000);
	for(i=1;i<20;i++)
	{
	  var posl = i;
	  var post = 4*Math.sqrt(posl);;
	  movedown(posl,post);
	}
}
/*la lune monte*/
function moveup(a,b){
	var va = "+="+a+"px";
	var vb = "-="+b+"px";
	$(document).ready(function(){
		$(".move").animate({
				left: va,
				top:vb}, 500);
	});	
}
/*la lune descent*/
function movedown(a,b){
	var va = "+="+a+"px";
	var vb = "+="+b+"px";
	$(document).ready(function(){
		$(".move").animate({
				left: va,
				top:vb}, 350);
	});	
}
/*les lettres s'élèvent aléatoirement*/
function posrandom(){
	var jlettres = [".L", ".a", ".N", ".u", ".i",".t", ".d",".e",".L2",".i2",".n2",".f",".o"];
	for(i=0; i<13;i++)
	{
		var l = Math.random()*500;
		var t = Math.random()*500;
		var vl = "+="+l.toString()+"px";
		var vt = "+="+t.toString()+"px";
		$(document).ready(function(){
			$(jlettres[i]).animate({
				left: vl,
				top: vt}, 1000);
		});
	}		
}
/*les lettres se descendent aléatoirement*/
function posdownrandom(){
	var jlettres = [".L", ".a", ".N", ".u", ".i",".t", ".d",".e",".L2",".i2",".n2",".f",".o"];
	for(i=0; i<13;i++)
	{
		var l = Math.random()*500;
		var t = Math.random()*500;
		var vl = "-="+l.toString()+"px";
		var vt = "-="+t.toString()+"px";
		$(document).ready(function(){
			$(jlettres[i]).animate({
				left: vl,
				top: vt}, 1000);
		});
	}		
}
/*les lettres se cachent*/
function hide(){
	var jlettres = [".L", ".a", ".N", ".u", ".i",".t", ".d",".e",".L2",".i2",".n2",".f",".o"];
	for(i=0; i<13;i++)
	{
		$(document).ready(function(){
			$(jlettres[i]).fadeOut(1000);
		});
	}
}
/*le titre affiche*/
function show(){
	$(document).ready(function(){
			$(".lanuit").fadeIn(5000);
		});
}
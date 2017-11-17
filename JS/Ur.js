$(function(){
	var num=0;
	$('#logo div').click(function(event){
		num=$(this).index();
		$('.about>div').eq(num).css('display','block');
		$('.about>div').eq(num).siblings().css('display','none');
		$('#logo>div').eq(num).siblings().animate({'margin-top':130+'px'},500);
		$('#logo>div').eq(num).animate({'margin-top':-400+'px'},500);
		return false;
	})
	$('#home').click(function(){
		$('.about>div').css('display','none');
		$('#logo>div').animate({'margin-top':0+'px'},500);
	})
	
})

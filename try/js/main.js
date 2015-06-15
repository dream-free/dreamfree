$(function(){
	var step = 0;
	init();
	function init(){
		startFirst();
	}
	function startFirst(){
		$('#welcome').find('span').on('click', function(){
			$('#welcome').addClass('out');	
			$('#jingran-a').removeClass('out');
			step++;
			if(step == 1){
				startSecond();
			}
		});
	}
	
	function startSecond(){
		var imgRotate = setInterval(function(){
			$('#jingran-a').find('img').toggleClass('roll');		
		},500);
		var oDiv = $('#jingran-a').find('div');
		oDiv.eq(0).animate({top:'10px'},1000,'swing', function(){
			oDiv.eq(1).animate({bottom:'20px'},1000,'swing', function(){
				clearInterval(imgRotate);
				step++;
				if(step == 2){
					startThird();
				} 
			});
		});  	
	}
	
	function startThird(){					
		$('#jingran-a').addClass('out');
		$('#firstyear').removeClass('out');
	}

});
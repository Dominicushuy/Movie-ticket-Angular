jQuery(document).ready(function() {
	var k = 0;
	var z = 0;
	var number = 0;
	
	
	$('#nextControl').click(function(){
		if(k < 2){
			k++;
		}else {
			k=0;
		}
		var number = -240 *k;
		
		var bodyShow = $('.slide-wrapper')[0];
		bodyShow.attributes[2].nodeValue = `width: 2880px;left: 0px; display: block; 
											margin-left: 0px; transition: all 200ms ease 0s; 
											transform: translate3d(${number}px, 0px, 0px);`;

	})
	
	$('#prevControl').click(function(){
		if(k > 0){
			k--;
		}else {
			k = 2;
		}
		
		var number = -240 *k;
		var bodyShow = $('.slide-wrapper')[0];
		bodyShow.attributes[2].nodeValue = `width: 2880px;left: 0px; display: block; 
											margin-left: 0px; transition: all 200ms ease 0s; 
											transform: translate3d(${number}px, 0px, 0px);`;
	})

	$('.slide-page').click(function(){
		var khuyenMai = document.getElementsByClassName('slide-wrapper')[1];
		var indexPagi =  this.children[0].className;

		if(indexPagi == 1){
			number = 0;
			
		}else if( indexPagi ==2){
			number = -1044;
			
		}else if (indexPagi == 3) {
			number = -1740;
			
		}

		khuyenMai.attributes[2].nodeValue = `width: 5568px;left: 0px; display: block;
											 margin-left: 0px; transition: all 200ms ease 0s;
											 transform: translate3d(${number}px, 0px, 0px);`;
	})

	function showSlide(){
		
		if(z >= 0){
			z++;
			if (z == 6) {
				z = 0;
			}
		} 
		var number = -z*348;
		var khuyenMai = document.getElementsByClassName('slide-wrapper')[1];
		khuyenMai.attributes[2].nodeValue = `width: 5568px;left: 0px; display: block;
											 margin-left: 0px; transition: all 200ms ease 0s;
											 transform: translate3d(${number}px, 0px, 0px);`;

		if(number == 0){
			$('.slide-page span.1')[0].setAttribute('style', 'background:rgba(255, 255, 255, 1)');
			$('.slide-page span.2')[0].setAttribute('style', 'background:rgba(255, 255, 255, 0.6)');
			$('.slide-page span.3')[0].setAttribute('style', 'background:rgba(255, 255, 255, 0.6)');
		}else if(number == -1044){
			$('.slide-page span.1')[0].setAttribute('style', 'background:rgba(255, 255, 255, 0.6)');
			$('.slide-page span.2')[0].setAttribute('style', 'background:rgba(255, 255, 255, 1)');
			$('.slide-page span.3')[0].setAttribute('style', 'background:rgba(255, 255, 255, 0.6)');
		}else if (number == -1740) {
			$('.slide-page span.1')[0].setAttribute('style', 'background:rgba(255, 255, 255, 0.6)');
			$('.slide-page span.2')[0].setAttribute('style', 'background:rgba(255, 255, 255, 0.6)');
			$('.slide-page span.3')[0].setAttribute('style', 'background:rgba(255, 255, 255, 1)');
		}
		
		setTimeout(showSlide, 4000);

	}

	showSlide();

	$('.go-top').click(function() {
		$('html').animate({scrollTop: 0 },1400);
	});
});


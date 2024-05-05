let offset = null;    
const sliderWrapList = document.querySelector('._slider__wrap-list1'),
	  sliderWrapListImg = document.querySelectorAll('._slider__wrap-list1 img'),
	  options =
	  {
	  	 showSlide: 1,
	  	 rangeBeetween: 15,
	  	 SlideCount: 1,
	  },
	  sliderWrapBorder = document.querySelector('.slider__wrap-border');
function valueGap()
{
	sliderWrapList.style.gap = options.rangeBeetween + 'px';
}
function showSlide()
{
	if(options.showSlide > 1)
	sliderWrapBorder.style.width = 3/*размер бордера умножить на 2 слева и справа (и почему то -1) */ + (sliderWrapListImg[0].offsetWidth * options.showSlide) + ((options.showSlide - 1) * options.rangeBeetween - 1) + 'px';
}  
function next()
{
	offset += (sliderWrapListImg[0].offsetWidth + options.rangeBeetween) * options.SlideCount;   
	console.log(offset)      
	if(offset > (sliderWrapListImg.length - 1) * sliderWrapListImg[0].offsetWidth + (options.rangeBeetween * (sliderWrapListImg.length - 1)))   
		offset = (sliderWrapListImg.length - 1) * sliderWrapListImg[0].offsetWidth + (options.rangeBeetween * (sliderWrapListImg.length - 1))
	console.log(offset)
	sliderWrapList.style.left = -offset + 'px';
}
function prev()
{
	offset -= (sliderWrapListImg[0].offsetWidth + options.rangeBeetween) * options.SlideCount;
	if(offset < 0)		 
		offset = 0;      
	sliderWrapList.style.left = -offset + 'px';
}
valueGap();
showSlide();
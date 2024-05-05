let showText = function(instance)
{
	 let wrap = instance.closest('.wrap'),
	 	 wrapText = wrap.querySelector('.wrap__text'),
	 	 wrapButtonImg = wrap.querySelector('.wrap__button-img');
	 	 wrapText.classList.toggle('active');
	 	 wrapButtonImg.classList.toggle('active');
	 	 wrapButtonImg.active.style.maxHeight = wrapButtonImg.active.scrollHeight + 'px';
}
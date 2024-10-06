let show = function(instance)
{
	let wrap = instance.closest('.wrap'),
		wrapText = wrap.querySelector('.wrap__text'),
		wrapButton = wrap.querySelector('.wrap__button');
	if(wrapText.style.maxHeight)
	{
		wrapText.style.maxHeight = null;
		wrapButton.classList.remove('active');
	}
	else
	{
		document.querySelectorAll('.wrap__text').forEach(function(el)
		{
			el.style.maxHeight = null;
		})
		document.querySelectorAll('.wrap__button').forEach(function(el)
		{
			el.classList.remove('active');
		})
		wrapText.style.maxHeight = wrapText.scrollHeight + 'px';
		wrapButton.classList.add('active');
	}
}
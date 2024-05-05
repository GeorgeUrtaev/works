let showText = function(instance)
{
	let wrap1 = instance.closest('.wrap1'),
		wrapText = wrap1.querySelector('.wrap__text');
	if(wrapText.style.maxHeight)
	{
		wrapText.style.maxHeight = null;
	}
	else
	{
		document.querySelectorAll('.wrap__text').forEach(function(el)
		{
			el.style.maxHeight = null;
		})
		wrapText.style.maxHeight = wrapText.scrollHeight + 'px';
	}
}
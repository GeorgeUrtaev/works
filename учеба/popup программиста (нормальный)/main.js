const popupOpen = document.querySelector('.popup__open'),
	  popupClose = document.querySelector('.popup__close'),
	  popupBg = document.querySelector('.popup__bg');

function openPopup()
{
	popupOpen.addEventListener('click', function()
	{
		popupBg.classList.add('active');
		document.body.style.overflow = 'hidden';
	});
}

function closePopup()
{
	popupClose.addEventListener('click', function()
	{
		popupBg.classList.remove('active');
		document.body.style.overflow = '';
	});

	document.addEventListener('click', function(event)
	{
		if(event.target === popupBg)
		{
			popupBg.classList.remove('active');
			document.body.style.overflow = '';
		}
	});

	document.addEventListener('keydown', function(event)
	{
		if(event.keyCode === 27)
		{
			popupBg.classList.remove('active');
			document.body.style.overflow = '';
		}
	});
}




closePopup();
openPopup();
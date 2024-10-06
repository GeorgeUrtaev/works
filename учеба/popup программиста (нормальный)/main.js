const mainPopup = 
{
	init(instance)
	{
		  this.popupWrap = instance.closest('.popup__wrap');
	 	  this.popupBg = this.popupWrap.querySelector('.popup__bg');
	  	  this.popupClose = this.popupWrap.querySelector('.popup__close');

	  	  this.openPopup();
	  	  this.closePopupBg();
		  this.pushEsc();
	},
	openPopup()
	{
		this.popupBg.classList.add('active');
		document.body.style.overflow = 'hidden';
	},
	closePopup()
	{
		this.popupBg.classList.remove('active');
		document.body.style.overflow = '';
	},
	closePopupBg()
	{
		document.addEventListener('click', function(event)
		{
			if(event.target === this.popupBg)
			{
				this.popupBg.classList.remove('active');
				document.body.style.overflow = '';
			}
		});
	},
	pushEsc()
	{
		document.addEventListener('keydown', function(event)
		{
			if(event.keyCode === 27)
			{
				this.popupBg.classList.remove('active');
				document.body.style.overflow = '';
			}
		});
	}
}
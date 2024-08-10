const openPopupBtn = document.querySelector('.open'),
      popupBg = document.querySelector('.popup__bg'),
      closePopupBtn = document.querySelector('.close'),
      popupWrap = document.querySelector('.popup__wrap');

openPopupBtn.addEventListener('click', () =>
{
    popupBg.classList.add('active');
    popupWrap.classList.add('active');
    document.body.style.overflow = 'hidden';
});
closePopupBtn.addEventListener('click', () =>
{
    popupBg.classList.remove('active');
    popupWrap.classList.remove('active');
    document.body.style.overflow = '';
});
popupBg.addEventListener('click', function()
{
	this.classList.remove('active');
    popupWrap.classList.remove('active');
    document.body.style.overflow = '';
});


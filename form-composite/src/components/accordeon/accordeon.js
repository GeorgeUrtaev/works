mainObj.accordeon =
{
	show(instance)
	{
		let accordeon = instance.closest('._accordeon')
		let content = accordeon.querySelector('._accordeonContent')
		let contentHeight = content.querySelector('._contentHeight')
		let arr = instance.querySelector('._accArr')
		let navFixed = instance.closest('.navFixed')
		if(content.classList.contains('show'))
		{
			content.classList.remove('show')
			arr.classList.remove('active')
			content.style.height = 0
			navFixed.classList.remove('active')
		}
		else
		{
			navFixed.classList.add('active')
			content.classList.add('show')
			arr.classList.add('active')
			content.style.height = contentHeight.offsetHeight + 'px'
		}
	}
}
// _contentHeight
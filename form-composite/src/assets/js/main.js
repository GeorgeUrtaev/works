"use strict"
window.onload = function()
{
	mainObj.inition()
}
let mainObj =
{
	inition()
	{
		this.production.initSlider()
		this.actionResize()
		this.news.init()
		this.relPro.initSwiper()
	},
	actionClass(tags, className, action)
	{
		tags.forEach((el)=>
		{
			action === 'add' ? 
				el.classList.add(className) :
				el.classList.remove(className)
		})
	},
	actionResize()
	{
		window.addEventListener('resize', () => {
			this.news.move()
		});
	},
	submit(instance, e)
	{
		let data = 
		{
			fio: document.querySelector('._fio'),
			phone: document.querySelector('._phone'),
		}
		console.log(data.fio)
		e.preventDefault()
		let field = instance.querySelectorAll('._fioReq')
		field.forEach((el, index, arr)=>
		{
			if(!el.value)
			{
				el.classList.add("error")
				return
			}
			else if (el.classList.contains("error"))
			{
				el.classList.remove("error")
				return
			}
			else
			{
				this.data.fio = arr[0].value
				this.data.phone = arr[1].value
			}
		})
		if(Object.keys(this.data.length !== 0))
			console.log('ss', this.data)
	}
}
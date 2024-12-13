mainObj.news =
{
	item: document.querySelectorAll('._item'),
	heig: document.querySelectorAll('._heig'),
	move()
	{
		if(window.innerWidth <= 1100)
		{
			mainObj.actionClass(document.querySelectorAll('._heig'), 'heig', 'remove')
			if(this.item[0].querySelectorAll('._wr').length > 1) return;
			for(let i = 1; i < this.item.length; i++)
			{
				let first = this.item[i].querySelector('._wr')
				this.item[i-1].innerHTML += first.outerHTML
				first.remove()
			}
		}
		if(window.innerWidth > 1100)
		{
			mainObj.actionClass(document.querySelectorAll('._heig'), 'heig', 'add')
			for(let i = 0; i < this.item.length; i++)
			{
				if(!this.item[i+1] || !this.item[i].querySelectorAll('._wr')[1]) return;
				let last = this.item[i].querySelectorAll('._wr')[1]
				this.item[i+1].innerHTML += last.outerHTML
				last.remove()
			}
		}
	},
	init()
	{
		const swiper = new Swiper('._news__slider',
		{
			slidesPerView: 1,
			spaceBetween: 30,
			pagination: {
				el: '.swiper-pagination',
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints:
			{
				769:
				{
					slidesPerView: 2,
				},
				1025:
				{
					slidesPerView: 3,
				}
			}
			
		})
	}
}







<template>
	<div class="progLoyal">
		<div class="container">
			<div class="bread__crums">
				<a href="#">Главная</a>
				<a href="#"><img src="@/assets/images/svg/arrow-right.svg" alt=""></a>
				<a href="#">Хлебные крошки</a>
			</div>
			<h1>Программа лояльности</h1>
		</div>
	</div>
	<div class="progLoyalBottom container">	
		<span class="subtitle">Порядок предоставления скидок покупателям в сети компании Golden Decor</span>
		<div class="progLoyalBottom__wrap">
			<div class="progLoyalBottom__text">
				<h2 class="progLoyalBottom__title">Скидка от суммы единовременной покупки</h2>
				<p class="progLoyalBottom__subtitle">Скидка 12% и 15% предоставляется только при 100% оплате. Скидки не распространяются на товары группы Акция</p>
				<button class="btn">Перейти в каталог</button>
			</div>
			<div class="progLoyalBottom__purchase">
				<div class="progLoyalBottom__purchase-wrap">
					<span class="progLoyalBottom__purchase-title">Сумма покупки</span> 
					<span>Ваша скидка</span>
				</div>
				<ul class="progLoyalBottom__list">
					<li 
						class="progLoyalBottom__item"
						v-for="item in salesInfo" 
						:key="item.id"
					>
						<span>{{item.text}}</span>
						<span>{{item.sale}}</span>
						<div class="bgWidth" :style="{width: item.bgpercent + '%'}"></div>
					</li>
				</ul>
			</div>
		</div>
	</div>

</template>
<script setup>
	import { ref } from 'vue'
	const salesInfo = ref([
			{
				id: 1,
				text: 'от 30 001 до 60 000 рублей',
				sale: '3%',
				bgpercent: 20,
			},
			{
				id: 2,
				text: 'от 30 001 до 60 000 рублей',
				sale: '5%',
				bgpercent: 30,
			},
			{
				id: 3,
				text: 'от 30 001 до 60 000 рублей',
				sale: '7%',
				bgpercent: 50,
			},
			{
				id: 4,
				text: 'от 30 001 до 60 000 рублей',
				sale: '10%',
				bgpercent: 60,
			},
			{
				id: 5,
				text: 'от 30 001 до 60 000 рублей',
				sale: '12%',
				bgpercent: 80,
			},
			{
				id: 6,
				text: 'от 30 001 до 60 000 рублей',
				sale: '15%',
				bgpercent: 100,
			},
		])
</script>
<style>
	.bread__crums a
	{
		font-size: 12px;
		font-weight: 400;
		line-height: 14px;
		color: rgba(105, 114, 121, 1);
	}
	.bread__crums
	{
		padding: 0 0 32px; 
		display: flex;
		gap: 8px;
	}
	h1
	{
		font-size: 48px;
		font-weight: 600;
		line-height: 56px;
		letter-spacing: -0.02em;
		color: rgba(5, 20, 31, 1);
	}
	.progLoyal
	{
		padding-top: 24px;
		padding-bottom: 56px;
		border-bottom: 1px solid rgba(223, 223, 223, 1);
	}
	.subtitle
	{
		display: block;
		font-size: 20px;
		font-weight: 400;
		line-height: 23.44px;
		color:rgba(5, 20, 31, 1);
		margin-bottom: 56px;
		max-width: 600px;
	}
	.progLoyalBottom
	{
		padding-top: 41px;	
	}
	.progLoyalBottom__wrap
	{
		display: flex;
		gap: 40px;
	}
	.progLoyalBottom__text
	{
		flex-basis: 32%;
	}
	.progLoyalBottom__title
	{
		font-size: 40px;
		font-weight: 600;
		line-height: 48px;
		letter-spacing: -0.5px;
		color: rgba(5, 20, 31, 1);
		margin-bottom: 40px;	
	}
	.progLoyalBottom__subtitle
	{
		font-size: 16px;
		font-weight: 400;
		line-height: 24px;
		color: rgba(5, 20, 31, 1);
		margin-bottom: 56px;
	}
	.btn
	{
		width: 272px;
		text-align: center;
		height: 60px;
		line-height: 60px;
		font-size: 18px;
		font-weight: 600;
		color: rgba(255, 255, 255, 1);
		border: 1px solid rgba(5, 20, 31, 1);
		background-color: rgba(5, 20, 31, 1);
	}
	.progLoyalBottom__purchase
	{
		flex-basis: 65%;
	}
	.progLoyalBottom__purchase-wrap
	{ 
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 16px;
		font-weight: 400;
		line-height: 18.75px;
		margin-bottom: 22px; 
	}
	.progLoyalBottom__list
	{
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.progLoyalBottom__item
	{
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 16px 24px;
		border-top: 1px solid rgba(208, 208, 208, 1);
	}
	.bgWidth
	{
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		z-index: -1;
		background-color: rgba(255, 226, 77, 0.42);
	}
</style>

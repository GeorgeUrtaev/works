<template>
	<div>
		<div class="roof"></div>
		<div class="frame">
			<div class="trapezoid-wrap">
				<div class="trapezoid"></div>
				<p class="text"><span>{{count}} и {{count1}} = </span>{{sum}}</p>
			</div>
			<div class="trunk"></div>
			<div class="triangle-wrap">
				<div class="triangle1"></div>
				<div class="triangle2"></div>
				<div class="triangle3"></div>
			</div>
		</div>
		
		
		<div class="wheels">
			<button @click="twoNumSumm" class="btn"><div class="wrap"><div class="ellipse"></div><span>Сумма</span></div></button>
			<button @click="twoNumSubtr" class="btn"><div class="wrap"><div class="ellipse"></div><div class="ellipse"></div><span>Вычитание</span></div></button>
			<button @click="twoNumMult" class="btn"><div class="wrap"><div class="ellipse"></div><div class="ellipse"></div><span>Умножение</span></div></button>
			<button @click="twoNumDiv" class="btn"><div class="wrap"><div class="ellipse"></div><span>Деление</span></div></button>
		</div>
	</div>
</template>
<script>
	export default {
		props:
		{
			firstTitle: String,
		},
		data()
		{
			return {
				count: 10,
				count1: 2,
				sum: 0,
			}
		},
		methods:
		{
			twoNumSumm()
			{
				return this.sum = this.count + this.count1;
			},
			twoNumSubtr()
			{
				return this.sum = this.count - this.count1;
			},
			twoNumMult()
			{
				return this.sum = this.count * this.count1;
			},
			twoNumDiv()
			{
				return this.sum = this.count / this.count1;
			},
		}
	}
</script>
<style>
	.trapezoid 
	{
		border-bottom: 100px solid darkgreen;
		border-left: 50px solid transparent;
		border-right: 50px solid transparent;
		height: 0;
		width: 300px;
	}
	.trapezoid-wrap
	{
		position: relative;
	}
	.text
	{
		display: inline-block;
		border-radius: 50%;
		padding: 10px;
		background-color: yellow;
		position: absolute;
		top: 31px;
		left: 103px;
		z-index: 10;
		width: 100px;
	}
	.wheels
	{
		position: relative;
		z-index: 100;
	}
	.btn
	{
		height: 40px;
		line-height: 40px;
		width: 75px;
		background-color: gray;
		position: relative;
		.wrap
		{
			display: flex;
			align-items: center;
			justify-content: center;
			gap:5px;
		}
		&:nth-child(1)
		{
			border-radius: 0 0 0 100px;
		}
		&:nth-child(4)
		{
			border-radius: 0 0 100px 0;
		}
		span
		{
			position: absolute;
			font-weight: bold;
			color: white;
		}
	}
	.ellipse
	{
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background-color: black;
		opacity: 0.5;
	}
	.roof
	{
		height: 10px;
		width: 50px;
		background-color: black;
		margin-left: 110px;
	}
	.trunk
	{
		width: 150px;
		height: 30px;
		background-color: darkgreen;
		margin-left: -35px;
		transform: rotate(-10deg);
		margin-bottom: 30px;
		position: relative;
		z-index: 100;
	}
	.frame
	{
		display: flex;
		align-items: center;
	}
	.triangle1,.triangle2,.triangle3
	{
	    width: 0;
	    height: 0;
	    border-bottom: 40px solid red;
	    border-left: 20px solid transparent;
	    border-right: 20px solid transparent;
	    position: absolute;
	    top: -50px;
		left: -10px;
	}
	.triangle-wrap
	{
		display: flex;
		position: relative;
	}
	.triangle1
	{
		transform: rotate(-60deg);
	}
	.triangle2
	{
		transform: rotate(-100deg);
	}
	.triangle3
	{
		transform: rotate(-130deg);
	}
</style>
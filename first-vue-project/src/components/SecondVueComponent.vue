<template>
	<!-- <h2>{{SecondTitle1}} {{SecondTitle2}} {{SecondTitle3}} {{SecondTitle4}} {{SecondTitle5}} {{SecondTitle6}} {{SecondTitle7}} {{SecondTitle8}} {{SecondTitle9}} {{SecondTitle10}}</h2> -->
	<div class="second__wrap">
		<div>
			<div class="number">{{summ1}}</div>
			<button class="g-btn__sec" v-on:click = "secondSumma" >СЛОЖЕНИЕ</button>
		</div>
		<div>
			<div class="number">{{summ2}}</div>
			<button class="g-btn__sec" v-on:click = "secondDivision">ДЕЛЕНИЕ</button>
		</div>
		<div class="">
			<div class="number">{{summ3}}</div>
			<button class="g-btn__sec" v-on:click = "secondMulti">УМНОЖЕНИЕ</button>
		</div>
		<div>
			<div class="number">{{summ4}}</div>
			<button class="g-btn__sec" v-on:click = "secondMinus">ВЫЧИТАНИЕ</button>
		</div>
	</div>
</template>
<script>
	export default {
		props:
		{
			SecondTitle1: String,
			SecondTitle2: String,
			SecondTitle3: String,
			SecondTitle4: String,
			SecondTitle5: String,
			SecondTitle6: String,
			SecondTitle7: String,
			SecondTitle8: String,
			SecondTitle9: String,
			SecondTitle10: String
		},
		data()
		{
			return {
				firstVal: 20,
				secondVal: 5,
				summ1: 0,
				summ2: 0,
				summ3: 0,
				summ4: 0,
			}
		},
		methods:
		{
			secondSumma()
			{
				this.summ1 = this.firstVal + this.secondVal
			},
			secondDivision()
			{
				this.summ2 = this.firstVal / this.secondVal
			},
			secondMulti()
			{
				this.summ3 = this.firstVal * this.secondVal
			},
			secondMinus()
			{
				this.summ4 = this.firstVal - this.secondVal
			}
		}	
	}
</script>
<style>
	.second__wrap
	{
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}
	.g-btn__sec
	{
		
		height: 50px;
		border-radius: 30px;
		background: #FA722C;
		text-align: center;
		padding: 0 22px;
		color: #FFF;
		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
	}
	.number
	{
		color: blue;
		font-size: 42px;
		border: solid 2px black;
		width: 200px;
		height: 80px;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto;
		background: #FFF;
		font-weight: 600;
		margin-bottom: 15px;
	}
	
</style>
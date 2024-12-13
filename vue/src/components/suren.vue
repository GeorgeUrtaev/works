<template>
	<div class="mega-wrap">
		<div class="summ-wrap">
			<button @click='twoNumSumm'>Сумма всех 10 чисел</button>
			<div>{{res}}</div>
		</div>
		<div class="summ-wrap">
			<button @click='twoNumSubtr'>Разность всех 10 чисел</button>
			<div>{{res1}}</div>
		</div>
		<div class="summ-wrap">
			<button @click='twoNumMult'>Умножение всех 10 чисел</button>
			<div>{{res2}}</div>
		</div>
		<div class="summ-wrap">
			<button @click='twoNumDiv'>Деление всех 10 чисел</button>
			<div>{{res3}}</div>
		</div>
	</div>
	<div class="quest">
		<input type="text" v-model="val1">
		<input type="text" v-model="val2">
		<button @click='concat'>Результат</button>
		<div class="takeRes">{{result}}</div>
	</div>
</template>
<script>
	export default {
		props:
		{
			num1: String,
			num2: String,
			num3: String,
			num4: String,
			num5: String,
			num6: String,
			num7: String,
			num8: String,
			num9: String,
			num10: String,
		},
		data()
		{
			return {
				res: 0,
				res1: 0,
				res2: 0,
				res3: 0,
				val1: '',
				val2: '',
				result: '',
			}
		},
		methods:
		{
			concat()
			{
				this.result = this.val1 + this.val2;
			},
			twoNumSumm()
			{
				this.res = Number(this.num1) + Number(this.num2) + Number(this.num3) + Number(this.num4) + Number(this.num5) + Number(this.num6) + Number(this.num7) + Number(this.num8) + Number(this.num9) + Number(this.num10)
			},
			twoNumSubtr()
			{
				this.res1 = Number(this.num1) - Number(this.num2) - Number(this.num3) - Number(this.num4) - Number(this.num5) - Number(this.num6) - Number(this.num7) - Number(this.num8) - Number(this.num9) - Number(this.num10)
			},
			twoNumMult()
			{
				this.res2 = Number(this.num1) * Number(this.num2) * Number(this.num3) * Number(this.num4) * Number(this.num5) * Number(this.num6) * Number(this.num7) * Number(this.num8) * Number(this.num9) * Number(this.num10)
			},
			twoNumDiv()
			{
				this.res3 = Number(this.num1) / Number(this.num2) / Number(this.num3) / Number(this.num4) / Number(this.num5) / Number(this.num6) / Number(this.num7) / Number(this.num8) / Number(this.num9) / Number(this.num10)
			},
		}
	}
</script>

<style>
	.summ-wrap
	{
		display: flex;
		align-items: center;
		gap: 20px;
		justify-content: space-between;
	}
	.mega-wrap
	{
		padding-top: 200px;
		display: flex;
		gap: 20px;
		flex-direction: column;
	}
</style>
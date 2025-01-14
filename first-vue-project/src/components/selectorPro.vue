<template>
	<div class="header__phone container-flex" @click="openList" >
            <span>{{telVal}}</span>
            <img src="@/assets/images/svg/arrow.svg" alt="" :class="{active: show}">
            <div class="phone__list" :class="{active: show}">
              <div 
                :key="index"
                v-for="(el, index) in contacts" @click="$emit('changePhone', el)">

                {{el}}
              </div>
            </div>
          </div>
</template>
<script>
	import { ref } from 'vue'
  export default {
    props:
    {
      contacts: Array,
      telVal: String
    },
    setup()
    {
      let contactVal = ref ('+7 (495) 120-06-43')
      let show = ref (false)

      const openList =()=>
      {
        show.value = !show.value
      }
      const changePhone =(el)=>
      {
          contactVal.value = el
      }

      return {
        show,
        openList,
        changePhone,
        contactVal,
      }



    }
  }
</script>
<style>
	
</style>

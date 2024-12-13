<template>
  <div>
    <h1>Селектор</h1>
    <select @change=''>   
        <option v-for="(el, index) in phones" :value="el">{{el}}</option>
    </select>
    <a href="#">Обратный звонок</a>
  </div>
</template>

<script>
  import { ref } from 'vue'
export default {
    setup()
    {
      const phones = ref([89188232233,89189994567,89887665432])
 
      return {
        phones,

      }
    }
  }
</script>

<style>
select
{
  border: unset;
  padding-right: 16px;
}
</style>
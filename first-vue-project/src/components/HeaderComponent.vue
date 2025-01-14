<template>
  <header>  
    <div class="header__top">
      <div class="container container-flex">
        <ul class="headerTop__list  container-flex">
          <li class="headerTop__item">
            <a href="#">О компании</a>
          </li>
          <li class="headerTop__item">
            <a href="#">Акции</a>
          </li>
          <li class="headerTop__item">
            <a href="#">Дизайнерам</a>
          </li>
          <li class="headerTop__item">
            <a href="#">Доставка и оплата</a>
          </li>
          <li class="headerTop__item">
            <a href="#">Контакты</a>
          </li>
        </ul>
        <div class="header__phone-wrap container-flex">



          <selectorPro
            :contacts='massTel'
            :telVal='telVal'
            @changePhone="contactVal"
          />
          


          <a :href="`tel:${telVal}`" class="header__phone-call">Обратный звонок</a>
          <div class="phone__flex">
            <a href="#">
              <img src="@/assets/images/svg/Group 10159.svg" alt="">
            </a>
            <a href="#">
              <img src="@/assets/images/svg/viber.svg" alt="">
            </a>
            <a href="#">
              <img src="@/assets/images/svg/Vector (1).svg" alt="">
            </a>
            <a href="#">
              <img src="@/assets/images/svg/Vector.svg" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="header__bottom">
      <div class="container header__bottom-flex">
      <div class="header__bottom-logo container-flex">
        <div class="container-flex">
          <div class="burger__mobile">
            <div class="burger__line-top"></div>
            <div class="burger__line-bottom"></div>
          </div>
          <a href="#">
            <img src="@/assets/images/svg/goldenDecor.svg" alt="">
          </a>
        </div>
        <div class="header__img-mobile">
          <img src="@/assets/images/svg/call.svg" alt="">
          <img src="@/assets/images/svg/searh.svg" alt="">
        </div>
        <AccardionMenu/>

        <div class="input__wrap">
          <input type="text" placeholder="Поиск товаров">
          <img src="@/assets/images/svg/searh.svg" alt="">
        </div>
        <div class="header__bottom-wrap container-flex">
          <div class="header__imgWrap">
            <div class="header__img">
              <img src="@/assets/images/svg/user.svg" alt="">
            </div>
            <div class="header__img">
              <img src="@/assets/images/svg/heart.svg" alt="">
            </div>
            <div class="header__img shopping-wrap">
              <p>0</p>
              <img src="@/assets/images/svg/shopping.svg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>


 
</template>
<script>
  import { ref } from 'vue'
  import selectorPro from '@/components/selectorPro.vue'
  import AccardionMenu from '@/components/AccardionMenu.vue'


  export default{
     components:{
      selectorPro,
      AccardionMenu
    },
    setup()
    {
      const massTel = ref(['+7 (495) 120-56-78', '+7 (495) 120-06-85', '+7 (495) 120-06-81'])
      let telVal = ref('+7 (495) 120-06-43')
      const contactVal =(el)=>
      {
          telVal.value = el
      }
      return {
        telVal,
        contactVal,
        massTel,
      } 
      
    } 
  }

</script>
<style>
  @font-face {
    font-family: 'Roboto';
    src: url('@/assets/fonts/Roboto-Regular/Roboto-Regular.eot');
    src: url('@/assets/fonts/Roboto-Regular/Roboto-Regular.eot?#iefix') format('embedded-opentype'),
    url('@/assets/fonts/Roboto-Regular/Roboto-Regular.woff2') format('woff2'),
    url('@/assets/fonts/Roboto-Regular/Roboto-Regular.woff') format('woff'),
    url('@/assets/fonts/Roboto-Regular/Roboto-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url('@/assets/fonts/Roboto-Bold/Roboto-Bold.eot');
    src: url('@/assets/fonts/Roboto-Bold/Roboto-Bold.eot?#iefix') format('embedded-opentype'),
    url('@/assets/fonts/Roboto-Bold/Roboto-Bold.woff2') format('woff2'),
    url('@/assets/fonts/Roboto-Bold/Roboto-Bold.woff') format('woff'),
    url('@/assets/fonts/Roboto-Bold/Roboto-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
  *
  {
    margin: 0;
    border: 0;
    padding: 0;
    font-family: 'Roboto';
    box-sizing: border-box;
  }
  a
  {
    text-decoration: none;
  }
  ul
  {
    list-style-type: none;
  }
  .container
  {
    padding: 0 24px;
    max-width: 1328px;
    margin: 0 auto;
    width: 100%;
  }
  .container-flex
  {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header__top
  {
    padding: 16px 0;
    border-bottom: 1px solid rgba(223, 223, 223, 1);
  }
  .headerTop__list
  {
    display: flex;
    gap: 24px;
  }
  .headerTop__item a
  {
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    color: rgba(105, 114, 121, 1);
  }
  .header__phone-wrap
  {
    display: flex;
    gap: 16px;
  }
  .header__phone span
  {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    color: rgba(5, 20, 31, 1);
    cursor: pointer;
  }
  .header__phone-call
  {
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    color: rgba(105, 114, 121, 1);
  }
  .phone__flex 
  {
    display: flex;
    align-items: center;
    gap: 8px;
  }


  .header__bottom
  {
    padding: 16px 0;
    border-bottom: 1px solid rgba(223, 223, 223, 1);
  }
  .header__bottom-logo
  {
    display: flex;
    position: relative;
    /*gap: 72px;*/
  }
  .header__bottom-logo button
  {
    display: flex;
    gap: 10px;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    background: transparent;
  }
  .header__bottom-wrap
  {
    gap: 16px;
  }
  .input__wrap
  {
    position: relative;
    max-width: 656px;
    width: 100%;
    height: 48px;
    gap: 0px;
  }
  .input__wrap input
  {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    padding-left: 24px;
    border-radius: 48px;
    border: 1px solid rgba(223, 223, 223, 1);
    width: 100%;
    height: 100%;
  }
  .input__wrap img
  {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .header__imgWrap
  {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .header__img
  {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(223, 223, 223, 1);
    border-radius: 50%;
    width: 48px;
    height: 48px;
  }
  .shopping-wrap 
  {
    position: relative;
  }
  .shopping-wrap p
  {
    position: absolute;
    background: rgba(232, 162, 0, 1);
    width: 16px;
    height: 16px;
    border-radius: 100%;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    right: 0;
    top: 0;
  }
  .burger__mobile
  {
    display: none;
  }
  .header__img-mobile
  {
    display: none;
  }
  .header__phone
  {
    position: relative;
    cursor: pointer;
  }
  .phone__list
  {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s;
    top: 24px;
    left: 0;
    z-index: 5;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    color: rgba(5, 20, 31, 1);
    cursor: pointer;
  }
  .phone__list.active
  {
    visibility: visible;
    opacity: 1;
    transition: 0.3s;
  }
  .header__phone img.active
  {
    transform: rotate(180deg);
    transition: all 0.3s;
  }
  .header__phone img
  {
    transition: all 0.3s;
  }


  .header__btn-wrapper
  {
   
  }
  .header__btn-catalog
  {
    visibility: hidden;
    opacity: 0;
    transition: .3s;
    padding: 20px;
    width: 100%;
    position: absolute;
    top: 81px;
    left: 0;
    display: flex;
    align-items: start;
    gap: 20px;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  }
  .header__btn-catalog.active
  {
    visibility: visible;
    opacity: 1;
    transition: .3s;
  }
  .header__btn-images
  {

  }
  .header__btn-images--wrap
  {

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header__btn-images--wrap img
  {
    height: 160px;
    width: 160px;
  }

 
  .header__btn-list
  {
    flex-basis: 35%;
  }
  .header__btn-item
  {
    font-size: 16px;
    line-height: 30px;
    color: rgba(102, 102, 102, 1);
  }

  @media(max-width: 1270px)
  {
    .header__bottom-logo
    {
      gap: 30px;
    }
  }


  @media(max-width: 937px)
  {
    .header__top
    {
      display: none;
    }
    .header__bottom-flex
    {
      display: flex;
      align-items: center;
    }
    .header__bottom-logo
    {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .header__bottom-logo img
    {
      width: 128px;
      height: 48px;
    }
    .input__wrap
    {
      display: none;
    }
    .header__bottom-logo button
    {
      display: none;
    }
    .header__imgWrap
    {
      display: none;
    }
    .burger__line-top, .burger__line-bottom
    {
      width: 14px;
      background: rgba(20, 24, 31, 1);
      height: 2px;
    }
    .burger__line-top
    {
      margin-bottom: 6px;
    }
    .burger__mobile
    {
      display: block;
      margin-right: 16px;
    }
    .header__img-mobile
    {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .header__img-mobile img
    {
      width: 24px;
      height: 24px;
    }
    .header__btn
    {
      display: none;
    }
    .header__bottom-wrap
    {
      display: none;
    }


  }






</style>

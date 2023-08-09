<template>
<div class="main-layout">
  <MainHeader/>
  <div class="wrapper" id="pageLoader">
    <h1 data-text="Loading..." class="loading-1">Loading...</h1>
  </div>
<router-view class="fadeInUp" id="router"></router-view>
</div>
</template>



<script>

import MainHeader from "../components/MainHeader.vue";
export default {

  name: 'MainLayout',
  components:{
    MainHeader
  },

  mounted() {
    this.PagePreLoader()
    setTimeout(() =>{
      document.querySelector('body').classList.remove('overflow-hidden')
    },4500)
  },
  data(){
    return{

    }
  },
  methods:{
    PagePreLoader(){

      let loader = document.getElementById('pageLoader')
      let anim = document.querySelector('.fadeInUp')
      setTimeout(()=>{
        anim.style.animationDelay = '.3s'
        loader.classList.add('d-none')
      },2000)
    }
  }

}
</script>
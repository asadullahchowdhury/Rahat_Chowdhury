<template>
 <div class="header">
   <a href="javascript:void(0)" class="theme-switcher" @click="themeSwitcher()">
     <span class="sun">
       <img src="/images/sun.svg" alt="">
     </span>
     <span class="moon d-none"><i class="fa fa-moon-o"></i></span>
   </a>
   <ul class="header-list">
     <li class="list-item">
       <router-link :to="{name:'HomePage'}" href="javascript:void(0)">
         <i class="fa fa-home"></i>
         <h2>Home</h2>
       </router-link>
     </li>
     <li class="list-item">
       <router-link :to="{name:'AboutPage'}" href="javascript:void(0)">
         <i class="fa fa-user"></i>
         <h2>About</h2>
       </router-link>
     </li>
     <li class="list-item">
       <router-link :to="{name:'PortfolioPage'}" href="javascript:void(0)">
         <i class="fa fa-briefcase"></i>
         <h2>Portfolio</h2>
       </router-link>
     </li>
     <li class="list-item">
       <router-link :to="{name:'ContactPage'}" href="javascript:void(0)">
         <i class="fa fa-envelope-open"></i>
         <h2>Contact</h2>
       </router-link>
     </li>
     <li class="list-item">
       <router-link :to="{name:'BlogPage'}" href="javascript:void(0)">
         <i class="fa fa-comment"></i>
         <h2>Blog</h2>
       </router-link>
     </li>
   </ul>
 </div>
</template>

<script>
export default {
  name: 'MainHeader',
  data(){
    return{

    }
  },
  mounted() {
    // this.themeSwitcher()
  },
  methods:{

  themeSwitcher(){
    let theme = document.querySelector('body')
    let sun = document.querySelector('.sun')
    let moon = document.querySelector('.moon')
    if (theme.classList.contains('light')){
      theme.classList.remove('light')
      moon.classList.add('d-none')
      sun.classList.remove('d-none')
    }else {
      theme.classList.add('light')
      sun.classList.add('d-none')
      moon.classList.remove('d-none')
    }
  }

  }
}
</script>


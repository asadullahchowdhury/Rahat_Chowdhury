<template>
  <div class="portfolio">
    <!--page title start-->
    <div class="title-section text-start text-sm-center">
      <h1>My <span>portfolio</span></h1>
      <span class="title-bg">works</span>
    </div>
    <!--page title end  -->

    <!--portfolio content start-->
    <div class="portfolio-content">
      <ul class="portfolio-tab-list justify-content-sm-center justify-content-start">
        <li class="each-tab text-uppercase " data-filter="all">All</li>
        <li class="each-tab text-uppercase" data-filter=".category-a">Creative</li>
        <li class="each-tab text-uppercase" data-filter=".category-b">Ecommerce</li>
        <li class="each-tab text-uppercase" data-filter=".category-c">Generator</li>
        <li class="each-tab text-uppercase" data-filter=".category-d">Hotel Management</li>
        <li class="each-tab text-uppercase" data-filter=".category-e">Delivery</li>
        <li class="each-tab text-uppercase" data-filter=".category-f">Personal</li>
      </ul>

      <div class="container">
        <div class="tab-container">

          <div class="tab-content mix category-a">
            <img class="tab-content-img" src="/images/portfolio/project-1.webp" alt="project-">
            <h3 class="content-title-wrap">
              <span class="content-title">Mockup Projects</span>
            </h3>
          </div>

          <div class="tab-content mix category-a">
            <img class="tab-content-img" src="/images/portfolio/project-2.webp" alt="project-2">
            <h3 class="content-title-wrap">
              <span class="content-title">Mockup Projects</span>
            </h3>
          </div>

          <div class="tab-content mix category-b">
            <img class="tab-content-img" src="/images/portfolio/project-3.webp" alt="project-3">
            <h3 class="content-title-wrap">
              <span class="content-title">Creative Projects</span>
            </h3>
          </div>

          <div class="tab-content mix category-b">
            <img class="tab-content-img" src="/images/portfolio/project-4.webp" alt="project-4">
            <h3 class="content-title-wrap">
              <span class="content-title">Youtube Projects</span>
            </h3>
          </div>

          <div class="tab-content mix category-c">
            <img class="tab-content-img" src="/images/portfolio/project-5.webp" alt="project-5">
            <h3 class="content-title-wrap">
              <span class="content-title">Slider Projects</span>
            </h3>
          </div>

          <div class="tab-content mix category-a">
            <img class="tab-content-img" src="/images/portfolio/project-6.webp" alt="project-6">
            <h3 class="content-title-wrap">
              <span class="content-title">Local Projects</span>
            </h3>
          </div>

          <div class="tab-content mix category-d">
            <img class="tab-content-img" src="/images/portfolio/project-7.webp" alt="project-7">
            <h3 class="content-title-wrap">
              <span class="content-title">Sass Projects</span>
            </h3>
          </div>

          <div class="tab-content mix category-a">
            <img class="tab-content-img" src="/images/portfolio/project-8.webp" alt="project-8">
            <h3 class="content-title-wrap">
              <span class="content-title">Mockup Projects</span>
            </h3>
          </div>

          <div class="tab-content mix category-b">
            <img class="tab-content-img" src="/images/portfolio/project-9.webp" alt="project-9">
            <h3 class="content-title-wrap">
              <span class="content-title">Mockup Projects</span>
            </h3>
          </div>


        </div>
      </div>


    </div>
    <!--portfolio content end  -->

  </div>

</template>

<script>
import mixitup from 'mixitup';

export default {
  name: 'PortfolioPage',
  mixer: '',

  mounted() {
    this.Tabs()
  },
  data() {
    return {
      mixitup
    }
  },
  methods: {

    Tabs() {
      this.mixer = mixitup('.tab-container')
      
    }
  },

}
</script>
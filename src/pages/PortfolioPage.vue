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
          <!--category a start-->
          <a class="tab-content mix category-a" href="https://themely.thethemeai.com/" target=”_blank”>
            <img class="tab-content-img" src="/images/portfolio/themely.png" alt="project-">
            <h3 class="content-title-wrap">
              <span class="content-title">Themely</span>
            </h3>
          </a>

          <a class="tab-content mix category-a" href="https://arrow.thethemeai.com/" target=”_blank”>
            <img class="tab-content-img" src="/images/portfolio/Arrow.png" alt="project-2">
            <h3 class="content-title-wrap">
              <span class="content-title">Arrow</span>
            </h3>
          </a>

          <div class="tab-content mix category-a" >
            <img class="tab-content-img" src="/images/portfolio/petcare.png" alt="project-2">
            <h3 class="content-title-wrap">
              <span class="content-title">Pet Care</span>
            </h3>
          </div>
          <!--category a end  -->

          <!--category b start-->
          <a class="tab-content mix category-b" href="https://habibcomputer.com.bd/" target=”_blank”>
            <img class="tab-content-img" src="/images/portfolio/HABIB%20COMPUTER%20(1).png" alt="project-3">
            <h3 class="content-title-wrap">
              <span class="content-title">Habib Computer</span>
            </h3>
          </a>

          <div class="tab-content mix category-b">
            <img class="tab-content-img" src="/images/portfolio/Lager%20store.png" alt="project-4">
            <h3 class="content-title-wrap">
              <span class="content-title">Lager store</span>
            </h3>
          </div>

          <div class="tab-content mix category-b">
            <img class="tab-content-img" src="/images/portfolio/Nest.png" alt="project-4">
            <h3 class="content-title-wrap">
              <span class="content-title">Nest</span>
            </h3>
          </div>


          <!--category b end  -->

          <!--category c start-->
          <a class="tab-content mix category-c" href="https://invoice.thethemeai.com/" target=”_blank”>
            <img class="tab-content-img" src="/images/portfolio/Invoice%20Generator.png" alt="project-5">
            <h3 class="content-title-wrap">
              <span class="content-title">Invoice Generator</span>
            </h3>
          </a>

          <!--category c end  -->

          <!--category d start-->
          <a class="tab-content mix category-d" href="https://app-v4.dev.mybos.com/" target=”_blank”>
            <img class="tab-content-img" src="/images/portfolio/MYBOS.png" alt="project-6">
            <h3 class="content-title-wrap">
              <span class="content-title">MYBOS</span>
            </h3>
          </a>

          <a class="tab-content mix category-d" href="https://portal.equidesk.com/" target=”_blank”>
            <img class="tab-content-img" src="/images/portfolio/Equidesk.png" alt="project-7">
            <h3 class="content-title-wrap">
              <span class="content-title">Equidesk</span>
            </h3>
          </a>

          <a class="tab-content mix category-d" href="https://signme.thethemeai.com/" target=”_blank”>
            <img class="tab-content-img" src="/images/portfolio/signmein.png" alt="project-7">
            <h3 class="content-title-wrap">
              <span class="content-title">Sign Me In</span>
            </h3>
          </a>

          <!--category d end  -->

          <!--category e start-->
          <a class="tab-content mix category-e" href="http://tismor.bcgaustralia.com/">
            <img class="tab-content-img" src="/images/portfolio/BCG%20Transport.png" alt="project-8">
            <h3 class="content-title-wrap">
              <span class="content-title">BGC Transport</span>
            </h3>
          </a>

          <a class="tab-content mix category-e" href="https://postmark.thethemeai.com/">
            <img class="tab-content-img" src="/images/portfolio/postmark.png" alt="project-8">
            <h3 class="content-title-wrap">
              <span class="content-title">Postmark</span>
            </h3>
          </a>
          <!--category e end  -->

          <a class="tab-content mix category-f" href="http://rahat.chowdhury.thethemeai.com/">
            <img class="tab-content-img" src="/images/portfolio/personal-portfolio.png" alt="project-9">
            <h3 class="content-title-wrap">
              <span class="content-title">Template One</span>
            </h3>
          </a>

          <a class="tab-content mix category-f" href="https://asadullahchowdhury.github.io/">
            <img class="tab-content-img" src="/images/portfolio/Rahat-Chowdhury.png" alt="project-9">
            <h3 class="content-title-wrap">
              <span class="content-title">Template Two</span>
            </h3>
          </a>


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

<template>
  <div class="homepage">
    <div class="color-block d-lg-block d-none"></div>
    <div class="row home-details-container align-items-center mx-auto">
      <div class="col-lg-4 bg position-fixed d-none d-lg-block"
           style="background-image: url('/images/homepage/image-4.jpg')"></div>
      <div class="col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start">
        <div class="home-content mx-auto">
          <div class="hero-responsive">
            <img src="/images/homepage/profile.jpg" alt="" class="img-fluid d-sm-block d-lg-none">
          </div>
          <h1 class="home-title text-uppercase">
            I'm Rahat Chowdhury.
            <span>Web developer</span>
          </h1>
          <p class="open-sans-font">
            I'm a Bangladeshi based web designer & front‑end developer focused on crafting clean & user‑friendly
            experiences, I am passionate about building excellent software that improves the lives of those around me.
          </p>
          <button type="button" class="btn-theme">
            <span class="btn-text">More About me</span>
            <span class="btn-icon">
              <i class="fa-solid fa-arrow-right"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'HomePage'
}
</script>
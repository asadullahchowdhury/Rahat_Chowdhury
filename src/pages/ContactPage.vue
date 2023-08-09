<template>
  <div class="contact">
    <!--page title start-->
    <div class="title-section text-start text-sm-center">
      <h1>Get in <span>touch</span></h1>
      <span class="title-bg">contact</span>
    </div>
    <!--page title end  -->

    <!--contact content start-->
    <div class="contact-content">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-4">
            <h3 class="text-uppercase custom-title mb-0 fw-semibold pb-3">Don't be shy !</h3>
            <p class="open-sans-font mb-4">Feel free to get in touch with me. I am always open to discussing new
              projects, creative ideas or opportunities to be part of your visions.</p>

            <p class="open-sans-font contact-info position-relative">
              <i class="fa fa-map position-absolute contact-icon"></i>
              <span class="d-block">Address Point</span>
              123 Street New York City , United States Of America 750065.</p>

            <p class="open-sans-font contact-info position-relative">
              <i class="fa fa-envelope-open position-absolute contact-icon"></i>
              <span class="d-block">MAIL ME</span>
              <a href="mailto:crahat4@gmail.com">crahat@gmail.com</a>
            </p>

            <p class="open-sans-font contact-info position-relative">
              <i class="fa fa-phone-square position-absolute contact-icon"></i>
              <span class="d-block">Call me</span>
              <a href="tel:+88 01708-746354">+88 01708-746354</a>
            </p>

            <ul class="social-list list-unstyled pt-3 mb-5">
              <li>
                <a href="https://www.facebook.com/">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/">
                  <i class="fa fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="https://www.dribbble.com/">
                  <i class="fa fa-dribbble"></i>
                </a>
              </li>
            </ul>


          </div>

          <div class="col-12 col-lg-8">
            <form action="" class="contact-form">
              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="form-group">
                    <input type="text" name="name" placeholder="YOUR NAME" required>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="form-group">
                    <input type="email" name="email" placeholder="YOUR EMAIL" required>
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-group">
                    <input type="text" name="subject" placeholder="YOUR SUBJECT" required>
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-group">
                    <textarea name="message" placeholder="YOUR MESSAGE" required></textarea>
                  </div>
                </div>

                <div class="col-12">
                  <button type="submit" class="btn-theme">
                    <span class="btn-text">Send message</span>
                    <span class="btn-icon">
                      <i class="fa fa-send"></i>
                    </span>
                  </button>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--contact content start-->
  </div>
</template>

<script>
export default {
  name: 'ContactPage'

}
</script>
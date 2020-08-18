<template>
  <div>
    <!--Testing  start::product-details-left-image -->
            <section id="product-details-left-image-wrap" class="product-details-left-image p-t-b-80 light-gray">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-5 mb-4 mb-lg-0">
                            <img src="../assets/images/landing/service-3/service_3-1.svg" alt="">
                        </div>
                        <div class="col-md-6 offset-md-1">

                            <div class="product-details-li__content  d-flex flex-row align-items-start pl-5 mb-4 mt-4">
                                <div class="product-details__icons mr-4">
                                    <span class="rounded-icon bg-info">
                                        <i class="eva eva--white eva-smartphone-outline align-middle text-25"></i> 
                                    </span>
                                </div>
                                <div class="feature-content">
                                    <h4 class="font-weight-bold">Mobile Friendly</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                </div>
                            </div>
                            <div class="product-details-li__content  d-flex flex-row align-items-start pl-5 mb-4">
                                <div class="product-details__icons mr-4">
                                    <span class="rounded-icon bg-danger">
                                        <i class="eva eva--white eva-checkmark-circle-2-outline align-middle text-25"></i> 
                                    </span>
                                </div>
                                <div class="feature-content">
                                    <h4 class="font-weight-bold">Responsive</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                </div>
                            </div>
                            <div class="product-details-li__content  d-flex flex-row align-items-start pl-5 mb-4">
                                <div class="product-details__icons mr-4">
                                    <span class="rounded-icon bg-success">
                                        <i class="eva eva--white eva-shield-outline align-middle text-25"></i> 
                                    </span>
                                </div>
                                <div class="feature-content">
                                    <h4 class="font-weight-bold">More Secure </h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
            <!-- end::product-details-left-image -->
    <div class="container text-center p-5">
  <b-button class="ripple" variant="success" v-b-modal.modal-1>Launch demo modal</b-button>

  <b-modal  id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
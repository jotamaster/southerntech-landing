<template>
  <div class="">
     <div>{{$route.params.id }}</div>
    <dxIntro></dxIntro>
    <dx-feature></dx-feature>
    <dx-service></dx-service>
    <dx-workCarousel></dx-workCarousel>
    <!-- <dx-productDetails></dx-productDetails> -->
    <!-- <dx-leftImage></dx-leftImage>
    <dx-rightImage></dx-rightImage>
    <dx-priceTable></dx-priceTable> -->
    <clients></clients>
    <dx-team></dx-team>
    <!-- <dx-testimonial></dx-testimonial> -->
    <!-- <dx-news></dx-news>
    <dx-faq></dx-faq> -->
  </div>
</template>
<script>
import intro from "@/components/intros/introEleven";
import feature from "@/components/features/feature";
import service from "@/components/service/service";
import workCarousel from "@/components/works/workCarousel";
import rightImage from "@/components/product-details/right-image-slider.component";
import leftImage from "../components/product-details/left-image-slider.component";
import productDetails from "@/components/product-details/best";
import priceTable from "@/components/price/priceOne";
import team from "@/components/team/team";
import testimonial from "@/components/testimonial/testimonial";
import news from "@/components/news/newsTwo";
import faq from "@/components/faq/faq";
import clients from "@/components/clients/clients"

export default {
  metaInfo: {
    bodyAttrs: {
      class: ["landing-gradient-steel-gray"]
    }
  },
  components: {
    dxIntro: intro,
    dxFeature: feature,
    dxService: service,
    dxWorkCarousel: workCarousel,
    dxRightImage: rightImage,
    dxLeftImage: leftImage,
    dxProductDetails: productDetails,
    dxPriceTable: priceTable,
    dxTeam: team,
    dxTestimonial: testimonial,
    dxNews: news,
    dxFaq: faq,
    clients
  }
};
</script>

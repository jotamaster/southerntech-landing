<template>
  <div class="landing_wrap">
    <dx-header></dx-header>
    <router-view></router-view>
    <dxFooter></dxFooter>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/footer";

export default {
  components: {
    dxHeader: Header,
    dxFooter: Footer,
  }
};
</script>

<template>
  <div class="landing_wrap">
    <dx-header></dx-header>
    <router-view></router-view>
    <dx-contact></dx-contact>
    <dxFooter></dxFooter>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/footer";
import Contact from "@/components/common/contact";
export default {
  components: {
    dxHeader: Header,
    dxFooter: Footer,
    dxContact: Contact
  }
};
</script>

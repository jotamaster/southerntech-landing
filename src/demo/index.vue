<template>
  <div class="">
    <dx-header></dx-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/common/header-demo.vue";
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


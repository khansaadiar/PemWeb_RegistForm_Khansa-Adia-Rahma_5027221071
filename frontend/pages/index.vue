<template>
    <div>
      <navbar />
      <home />
      <!-- <AboutView /> -->
      <!-- < BlogView /> -->
      <FooterView />
    </div>
  </template>
  
  <script>
  import navbar from "@/components/navbar.vue";
  import home from "@/components/home.vue";

  
  export default {
    components: {
      // AboutView,
      navbar,
    },
    data() {
      return {
        blogPosts: [],
      };
    },


  };
  </script>
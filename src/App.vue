<template>

  <div class="">
    <NavBar/>
    <router-view/>

    <Footer/>
    
  </div>

</template>

<script>

import NavBar from "./components/Navbar.vue";
import Footer from "./components/footer.vue";

import Acceuil from "./components/Acceuil.vue";

export default {
  components:{
    NavBar,
    Footer,
    Acceuil
}
  };
</script>

<style>

</style>

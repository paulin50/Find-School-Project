<template>
    <HomeSliderSection/>
    <HomeSearchSection/>
    <HomePubSection/>
    <HomeFeaturedSection/>
    <HomeTestimonialSection/>
    <HomeCountSection/>
</template>

<script>
import HomeSliderSection from "./HomeSliderSection.vue";
import HomeSearchSection from "./HomeSearchSection.vue";
import HomePubSection from "./HomePubSection.vue";
import HomeFeaturedSection from "./HomeFeaturedSection.vue";
import HomeTestimonialSection from "./HomeTestimonialSection.vue";
import HomeCountSection from "./HomeCountSection.vue";
export default {
    components:{ 
    HomeSliderSection,
    HomeSearchSection,
    HomePubSection,
    HomeFeaturedSection,
    HomeTestimonialSection,
    HomeCountSection
},
    name: 'Accueil'
};
</script>

<style scoped>

</style>
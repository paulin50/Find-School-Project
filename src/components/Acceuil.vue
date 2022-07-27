<template>
    <HomeSliderSection />
    <HomeSearchSection />
    <HomePubSection />
    <HomeFeaturedSection />
    <Demande />
    <HomeCountSection />
    <Calltoaction/>

</template>

<script>
import HomeSliderSection from "./HomeSliderSection.vue";
import HomeSearchSection from "./HomeSearchSection.vue";
import HomePubSection from "./HomePubSection.vue";
import HomeFeaturedSection from "./HomeFeaturedSection.vue";
import HomeTestimonialSection from "./HomeTestimonialSection.vue";
import HomeCountSection from "./HomeCountSection.vue";
import Demande from "./Demande.vue";
import Calltoaction from "./Calltoaction.vue";
export default {
    components: {
        HomeSliderSection,
        HomeSearchSection,
        HomePubSection,
        HomeFeaturedSection,
        HomeTestimonialSection,
        HomeCountSection,
        Calltoaction,
        Demande
    },
    name: 'Accueil'
};
</script>

<style scoped>
</style>
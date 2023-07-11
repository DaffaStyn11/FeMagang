<template>
  <div class="antialiased bg-white font-sans text-gray-900">
    <Header />
    <Hero />
    <About />
    <Testimonial />
    <div class="flex flex-col md:flex-row mt-24 text-center md:-mx-4">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Hero from '../components/Hero.vue';
import About from '../components/About.vue';
import Testimonial from '../components/Testimonial.vue';
import Footer from '../components/Footer.vue';
// import ServiceCard from '../components/ServiceCard.vue';

export default {
  components: {
    Header,
    Hero,
    About,
    Footer,
    Testimonial,
  }
}
</script>

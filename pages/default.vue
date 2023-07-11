<template>
    <body class="antialiased bg-white font-sans text-gray-900">
      <main class="w-full">
        <Header />
        <Hero />
        <About />
        <div class="flex flex-col md:flex-row mt-24 text-center md:-mx-4">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </main>
    </body>
  </template>
  
  <script>
  import Header from './Header.vue';
  import Hero from './Hero.vue';
  import Cta from './Cta.vue';
  import About from './About.vue';
  import Footer from './Footer.vue';
  import Testimonial from './Testimonial.vue';
  import Komponen from './Komponen.vue';
  
  export default {
    components: {
      Header,
      Hero,
      About,
      Footer,
      Cta,
      Testimonial,
      Komponen
    }
  }
  </script>
  
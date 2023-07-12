<template>
<div class="container-scroller">
      <!-- partial:partials/_sidebar.html -->
      <Sidebar />
      <!-- partial -->
      <div class="container-fluid page-body-wrapper">
        <!-- partial:partials/_navbar.html -->
        <Navbar />
        <!-- partial -->
        <Content />
        <!-- main-panel ends -->
        <Footer />
      </div>
      <!-- page-body-wrapper ends -->
    </div>
</template>

<script>
import Content from '../components/Content.vue';
import Sidebar from '../components/Sidebar.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    Content,
    Navbar,
    Sidebar,
    Footer,
  }
}
</script>

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

    </div>
    <!-- page-body-wrapper ends -->
  </div>
</template>
  
<script>
import axios from 'axios';
import Content from '../components/Content.vue';
import Sidebar from '../components/Sidebar.vue';
import Navbar from '../components/Navbar.vue';

export default {
  name: 'Dashboard',
  components: {
    Content,
    Navbar,
    Sidebar,
  },
  data() {
    return {
      data_permohonan: {},
    }
  },
  mounted() {
    this.getDataPermohonan();
  },
  methods: {
    getDataPermohonan() {
      axios.get('http://127.0.0.1:8000/api/permohonan').then(res => {
        console.log(res.data.data_permohonan)
        this.data_permohonan = res.data.data_permohonan;
      });
    }
  }
}
</script>
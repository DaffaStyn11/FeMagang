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
    import Content from '../components/Content.vue';
    import Sidebar from '../components/Sidebar.vue';
    import Navbar from '../components/Navbar.vue';
    
    export default {
      name:'DataPermohonan',
      components: {
        Content,
        Navbar,
        Sidebar,
      }
    }
    </script>
    
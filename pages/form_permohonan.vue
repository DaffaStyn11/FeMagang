<template>
  <div class="container-scroller">
    <!-- partial:partials/_sidebar.html -->
    <Sidebar />
    <!-- partial -->
    <div class="container-fluid page-body-wrapper">
      <!-- partial:partials/_navbar.html -->
      <Navbar />
      <!-- partial -->
      <div class="container-scroller">
        <!-- partial -->
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="row">
              <div class="col-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Form Data Permohonan</h4>
                    <div v-if="isLoading">
                      <Loading :title="isLoadingTitle" />
                    </div>
                    <div v-else>
                      <form class="forms-sample" @submit.prevent="save_data">
                        <div class="form-group">
                          <label for="exampleInputName1">Perihal</label>
                          <input type="text" v-model="data_permohonan.perihal" class="form-control" id="exampleInputName1"
                            placeholder="Masukkan Perihal">
                          <!-- <span class="text-danger">{{ this.errorList.perihal[0] }}</span> -->
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail3">Deadline</label>
                          <input type="date" v-model="data_permohonan.deadline" class="form-control"
                            id="exampleInputEmail3" placeholder="Email">
                            <!-- <span class="text-danger">{{ this.errorList.deadline[0] }}</span> -->
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword4">Kop Surat</label>
                          <input type="text" v-model="data_permohonan.kop_surat" class="form-control"
                            id="exampleInputPassword4" placeholder="Masukkan Kop Surat">
                            <!-- <span class="text-danger">{{ this.errorList.kop_surat[0] }}</span> -->
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword4">PIC</label>
                          <input type="text" v-model="data_permohonan.pic" class="form-control" id="exampleInputPassword4"
                            placeholder="Masukkan PIC">
                            <!-- <span class="text-danger">{{ this.errorList.pic[0] }}</span> -->
                        </div>
                        <div class="form-group">
                          <label for="exampleInputCity1">Id Agenda</label>
                          <input type="text" v-model="data_permohonan.id_agenda" class="form-control"
                            id="exampleInputCity1" placeholder="Masukkan Id Agenda">
                            <!-- <span class="text-danger">{{ this.errorList.id_agenda[0] }}</span> -->
                        </div>
                        <!-- <div class="col-md-6"> -->
                        <div class="form-group">
                          <label for="exampleSelectGender">Status</label>
                          <select class="form-control" v-model="data_permohonan.status" id="exampleSelectGender">
                            <option>Belum</option>
                            <option>Selesai</option>
                          </select>
                             <!-- <span class="text-danger">{{ this.errorList.status[0] }}</span> -->
                        </div>
                        <!-- </div> -->
                          <button type="submit" class="btn btn-primary mr-2">Submit</button>
                          <button class="btn btn-dark">Cancel</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- content-wrapper ends -->
              <!-- partial:../../partials/_footer.html -->
              <footer class="footer">
                <div class="d-sm-flex justify-content-center justify-content-sm-between">
                  <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © bootstrapdash.com 2020</span>
                  <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Free <a href="https://www.bootstrapdash.com/bootstrap-admin-template/" target="_blank">Bootstrap admin templates</a> from Bootstrapdash.com</span>
                </div>
              </footer>
              <!-- partial -->
            </div>
            <!-- main-panel ends -->
          </div>
          <!-- page-body-wrapper ends -->
        
              <!-- main-panel ends -->
            </div>
            <!-- page-body-wrapper ends -->
          </div>
    
    </template>
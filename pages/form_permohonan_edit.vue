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
                        <h4 class="card-title">Edit Data Permohonan</h4>
                        <form class="forms-sample">
                          <div class="form-group">
                            <label for="exampleInputName1">Perihal</label>
                            <input type="text" class="form-control" id="exampleInputName1" placeholder="Masukkan Perihal">
                          </div>
                          <div class="form-group">
                            <label for="exampleInputEmail3">Deadline</label>
                            <input type="date" class="form-control" id="exampleInputEmail3" placeholder="Email">
                          </div>
                          <div class="form-group">
                            <label for="exampleInputPassword4">Kop Surat</label>
                            <input type="text" class="form-control" id="exampleInputPassword4" placeholder="Masukkan Kop Surat">
                          </div>
                          <div class="form-group">
                            <label for="exampleInputPassword4">PIC</label>
                            <input type="text" class="form-control" id="exampleInputPassword4" placeholder="Masukkan PIC">
                          </div>
                          <div class="form-group">
                            <label for="exampleInputCity1">Id Agenda</label>
                            <input type="text" class="form-control" id="exampleInputCity1" placeholder="Masukkan Id Agenda">
                          </div>
                          <!-- <div class="col-md-6"> -->
                            <div class="form-group">
                              <label for="exampleSelectGender">Status</label>
                              <select class="form-control" id="exampleSelectGender">
                                <option>Belum</option>
                                <option>Selesai</option>
                              </select>
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
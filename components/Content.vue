<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <div class="page-header">
        <h3 class="page-title"> Data Permohonan </h3>
        <a class="btn btn-success" id="createbuttonDropdown" data-toggle="dropdown"
            aria-expanded="false" href="/form_permohonan">+ Create Data</a>
      </div>
      
      <div class="row">
        <div class="col-lg-12 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-dark">
                  <thead>
                    <tr>
                      <th> No.</th>
                      <th> Perihal </th>
                      <th> Deadline </th>
                      <th> Kop Surat </th>
                      <th> PIC </th>
                      <th> Id Agenda </th>
                      <th> Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> 1 </td>
                      <td> Herman Beck </td>
                      <td> $ 77.99 </td>
                      <td> May 15, 2015 </td>
                      <td> May 15, 2015 </td>
                      <td> May 15, 2015 </td>
                      <td> May 15, 2015 </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial'
}
</script>

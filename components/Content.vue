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
                    <tr v-for="(data_permohonan, index) in data_permohonan" :key="index">
                      <td> 1 </td>
                      <td> {{ data_permohonan.perihal }} </td>
                      <td> {{ data_permohonan.deadline }}</td>
                      <td> {{ data_permohonan.kop_surat }} </td>
                      <td> {{ data_permohonan.pic }} </td>
                      <td> {{ data_permohonan.id_agenda }}</td>
                      <td> {{ data_permohonan.status }} </td>
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

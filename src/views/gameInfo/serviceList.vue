<template>
  <div class="app-container">
  <el-table :data="tableData" stripe  style="width: 100%">
    <el-table-column prop="service_id" label="服ID"></el-table-column>
    <el-table-column prop="service_name" label="服名称" ></el-table-column>
    <el-table-column prop="is_useful" label="可用" ></el-table-column>
    <el-table-column prop="display_id" label="展示ID"></el-table-column>
    <el-table-column prop="service_type" label="服类型"></el-table-column>
    <el-table-column prop="remarks" label="备注"></el-table-column>
    <el-table-column prop="is_service" label="是否合服"></el-table-column>
    <el-table-column prop="service_time" label="开服时间">
      <template scope="scope">
        <date-picker></date-picker>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>
<script>
  import datePicker from '@/components/DatePicker'
  export default {
    components: { datePicker },
    data() {
      return {
        tableData: [{
          service_id: '10',
          service_name: 'Essex',
          is_useful: 'Yes',
          display_id: '10',
          service_type: 'All',
          remarks: '0',
          is_service: 'No'
        }, {
          service_id: '10',
          service_name: 'Essex',
          is_useful: 'Yes',
          display_id: '10',
          service_type: 'All',
          remarks: '0',
          is_service: 'No',
          service_time: '2'
        }, {
          service_id: '10',
          service_name: 'Essex',
          is_useful: 'Yes',
          display_id: '10',
          service_type: 'All',
          remarks: '0',
          is_service: 'No',
          service_time: '3'
        }, {
          service_id: '10',
          service_name: 'Essex',
          is_useful: 'Yes',
          display_id: '10',
          service_type: 'All',
          remarks: '0',
          is_service: 'No',
          service_time: '4'
        }]
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .el-date-editor .el-input {
    width: 123px;
  }
</style>

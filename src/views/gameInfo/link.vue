<template>
  <div class="app-container">
    <el-table :data="tableData" v-show="showTable" stripe  style="width: 100%">
      <el-table-column prop="lang" label="语言" width="180"></el-table-column>
      <el-table-column prop="download_href" label="通用下载地址"></el-table-column>
      <el-table-column prop="page_href" label="页面地址"  width="180"></el-table-column>
      <el-table-column prop="do" label="操作"  width="200">
        <template scope="scope">
          <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">编   辑</el-button>
          <el-button type="primary" size="small" @click="handleSync(scope.$index, scope.row)">同步到</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page_edit" v-show="showEditPage">
      <h3>编辑-<span>阿语</span></h3>
      <div class="edit_table">
        <p><lable for="g_v">Android下载地址：</lable>  <br> <input type="text" id="g_v" ref="addGameVersion"></p>
        <p><lable for="des">IOS下载地址: </lable> <br> <input type="text" id="des" ref="addGameVersion"></p>
        <p><lable for="des">错误扫码地址: </lable> <br> <input type="text" id="des" ref="addGameVersion"></p>
        <p><lable for="des">Facebook粉丝页地址: </lable> <br>  <input type="text" id="des" ref="addGameVersion"></p>
        <p><lable for="des">本地下载链接: </lable> <br> <input type="text" id="des" ref="addGameVersion"></p>
        <p><lable for="des">支付平台链接: </lable> <br>  <input type="text" id="des" ref="addGameVersion"></p>
        <p><lable for="des">客服平台链接: </lable> <br>  <input type="text" id="des" ref="addGameVersion"></p>
        <p>
          <span>同步到：</span>
          <el-button plain @click="handleSyncToE">英语</el-button>
          <el-button plain @click="handleSyncToR">俄语</el-button>
          <el-button plain @click="handleSyncToD">德语</el-button>
        </p>
      </div>
    </div>
    <div class="syncBox" v-show="showSyncBox">
      <template>
        <el-checkbox-group v-model="checkList">
          <el-checkbox :label= item  v-for="item in syncLangs" class="check"></el-checkbox>
        </el-checkbox-group>
      </template>
      <div class="syncBtn">
        <el-button type="primary" size="small" @click="handleSyncYes">确定</el-button>
        <el-button type="primary" size="small" @click="handleSyncNo">取消</el-button>
      </div>
    </div>
  </div>
</template>
<script>
  import datePicker from '@/components/DatePicker'
  export default {
    components: { datePicker },
    data() {
      return {
        syncLangs: [],
        showTable: true,
        showEditPage: false,
        showSyncBox: false,
        checkList: ['德语'],
        tableData: [{
          lang: '阿语',
          download_href: 'www.baidu.com',
          page_href: 'www.baidu.com'
        }, {
          lang: '徳语',
          download_href: 'www.baidu.com',
          page_href: 'www.baidu.com'
        }, {
          lang: '俄语',
          download_href: 'www.baidu.com',
          page_href: 'www.baidu.com'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        this.dialogVisible = true
        this.editIndex = index
        console.log(index, row)
        this.showTable = false
        this.showEditPage = true
      },
      handleSync(index, row) {
        this.syncLangs = []
        for (var i = 0; i < this.tableData.length; i++) {
          if (i !== index) {
            this.syncLangs.push(this.tableData[i].lang)
          }
          console.log(this.syncLangs)
        }
        this.showSyncBox = true
      },
      handleSyncYes() {
        this.showSyncBox = false
      },
      handleSyncNo() {
        this.showSyncBox = false
      },
      handleSyncToE() {
        this.showEditPage = false
        this.showTable = true
      },
      handleSyncToR() {
        this.showEditPage = false
        this.showTable = true
      },
      handleSyncToD() {
        this.showEditPage = false
        this.showTable = true
      }
    }

  }
</script>

<style scoped>
  .app-container{
    background: #fff;
    height:600px;
  }
  .page_edit{
   background: #eef1f6;
    padding:20px 60px 60px 70px;
  }
  .edit_table{
    margin-top:50px;
  }
  .edit_table input{
    margin-top:10px;
    width:400px;
    height:30px;
    outline: none;
  }
  .edit_table p span{
    display: block;
    margin-bottom:10px;
  }
  .syncBox{
    width: 150px;
    min-height: 100px;
    background: #fafafa;
    border:1px solid #eee ;
    padding:10px 0;
    border-box:box-sizing;
  }
  .syncBtn{
    width:104px;
    margin:0 auto;
  }
  .check{
    display:block;
    margin-bottom:10px;
  }
  .el-checkbox, .el-checkbox__input {
    margin-left: 15px;
  }
</style>



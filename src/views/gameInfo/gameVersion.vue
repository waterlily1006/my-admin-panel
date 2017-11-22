<template>
  <div class="app-container">
    <div class="add_zone">
      <input class="add_game_version" ref="gameVersion" type="text" placeholder="游戏版本"/>
      <input class="add_description" ref="description" type="text" placeholder="描述"/>
      <el-button class="add_btn" type="primary" @click="handleAddItem">增加</el-button>
    </div>
    <el-table :data="tableData" stripe  style="width: 100%">
      <el-table-column prop="game_version" label="游戏版本" width="180"></el-table-column>
      <el-table-column prop="description" label="描述"></el-table-column>
      <el-table-column prop="create_date" label="创建日期"  width="180"></el-table-column>
      <el-table-column prop="do" label="操作"  width="200">
        <template scope="scope">
          <el-button type="success" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="版本编辑" :visible.sync="dialogVisible" width="30%">
       <div class="input_box">
          <p><lable for="g_v">游戏版本：</lable> <input type="text" id="g_v" ref="addGameVersion"></p>
          <p><lable for="des">描述: </lable> <input type="text" id="des" ref="addDescription"></p>
       </div>
       <span slot="footer" class="dialog-footer">
         <el-button @click="handleEditNo">取 消</el-button>
         <el-button type="primary" @click="handleEditYes">确 定</el-button>
       </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isWarn: false,
        dialogVisible: false,
        tableData: [
          {
            game_version: 'V3.20.0',
            description: 'Essex',
            create_date: '2017-08-17'
          }, {
            game_version: 'V3.20.0',
            description: 'Essex',
            create_date: '2017-08-17'
          }, {
            game_version: 'V3.20.0',
            description: 'Essex',
            create_date: '2017-08-17'
          }
        ]
      }
    },
    methods: {
      handleAddItem() {
        // get time
        if (this.$refs.gameVersion.value === '' || this.$refs.description.value === '') {
          alert('内容不允许为空，请完善后再提交！')
        } else {
          this.tableData.push(
            {
              game_version: this.$refs.gameVersion.value,
              description: this.$refs.description.value,
              create_date: '2017-08-17'
            }
          )
          this.$refs.description.value = ''
          this.$refs.gameVersion.value = ''
        }
      },
      handleEdit(index, row) {
        this.dialogVisible = true
        this.editIndex = index
      },
      handleEditYes() {
        if (this.$refs.addGameVersion.value === '' || this.$refs.addDescription.value === '') {
          alert('内容不允许为空，请完善后再提交！')
        } else {
          this.dialogVisible = false
          this.tableData.splice(this.editIndex, 1, { game_version: this.$refs.addGameVersion.value, description: this.$refs.addDescription.value, create_date: 1 })
          this.$message({
            message: '编辑成功',
            type: 'success'
          })
          this.$refs.addGameVersion.value = ''
          this.$refs.addDescription.value = ''
        }
      },
      handleEditNo() {
        this.dialogVisible = false
        this.$message('取消编辑')
      },
      handleDelete(index, row) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableData.splice(index, 1)
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .add_zone{
    height: 60px;
    width: 100%;
    background: #eee;
    line-height: 60px;
  }
  .add_zone input{
    margin-left:50px;
    float: left;
    margin-top: 15px;
    outline: none;
    width:300px;
    height:30px;
  }
  .add_zone .add_btn{
    line-height:1;
    float: right;
    margin-right: 50px;
    margin-top: 10px;
  }
  .el-button {
    line-height: 0.3;
  }
  .input_box input{
    width:300px;
    height:30px;
    outline: none;
  }
  .input_box #des{
    margin-left:38px;
  }
</style>

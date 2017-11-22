<template>
  <div class="app-container">
    <el-tabs type="border-card">
      <el-tab-pane label="服列表">
        <div class="service_table table">
          <el-form :label-position="labelPosition" label-width="80px" :model="serviceList">
            <el-form-item label="游戏 :">
              <el-input v-model="serviceList.gameName"></el-input>
            </el-form-item>
            <el-form-item label="接口地址 :">
              <el-input v-model="serviceList.link"></el-input>
            </el-form-item>
            <el-button type="primary" class="btn">请求</el-button>
          </el-form>
        </div>
        <div class="service_result result">
          <h3>返回结果</h3>
          <div class="servic_res res"></div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="角色获取接口">
        <div class="role_table table">
          <el-form :label-position="labelPosition" label-width="80px" :model="roleList">
            <el-form-item label="游戏 :">
              <el-input v-model="roleList.gameName"></el-input>
            </el-form-item>
            <el-form-item label="接口地址 :">
              <el-input v-model="roleList.link"></el-input>
            </el-form-item>
            <el-form-item label="游戏代码  [game_code] :">
              <el-input v-model="roleList.gameCode"></el-input>
            </el-form-item>
            <el-form-item label="用户ID  [uid] :">
              <el-input v-model="roleList.uid"></el-input>
            </el-form-item>
            <el-form-item label="活动形式  [server_id] :">
              <el-input v-model="roleList.serverId"></el-input>
            </el-form-item>
            <el-form-item label="时间戳 :">
              <el-input v-model="roleList.time"></el-input>
            </el-form-item>
            <el-button type="primary" class="btn">请求</el-button>
          </el-form>
        </div>
        <div class="role_result result">
          <h3>返回结果</h3>
          <div class="role_res res"></div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="在线人数">
        <div class="online_table table">
          <el-form :label-position="labelPosition" label-width="80px" :model="onlineNum">
            <el-form-item label="游戏 :">
              <el-input v-model="onlineNum.gameName"></el-input>
            </el-form-item>
            <el-form-item label="接口地址 :">
              <el-input v-model="onlineNum.link"></el-input>
            </el-form-item>
            <el-form-item label="游戏代码  [game_code] :">
              <el-input v-model="onlineNum.gameCode"></el-input>
            </el-form-item>
            <el-form-item label="服务器ID  [server_id] :">
              <el-input v-model="onlineNum.serverId"></el-input>
            </el-form-item>
            <el-form-item label="平台 [os_type] :">
              <el-select v-model="onlineNum.osType" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
            <el-button type="primary" class="btn">请求</el-button>
          </el-form>
        </div>
        <div class="onlineNum_result result">
          <h3>返回结果</h3>
          <div class="onlineNum_res res"></div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="注册人数">
        <div class="online_table table">
          <el-form :label-position="labelPosition" label-width="80px" :model="register">
            <el-form-item label="游戏 :">
              <el-input v-model="register.gameName"></el-input>
            </el-form-item>
            <el-form-item label="接口地址 :">
              <el-input v-model="register.link"></el-input>
            </el-form-item>
            <el-form-item label="游戏代码  [game_code] :">
              <el-input v-model="register.gameCode"></el-input>
            </el-form-item>
            <el-form-item label="服务器ID  [server_id] :">
              <el-input v-model="register.serverId"></el-input>
            </el-form-item>
            <el-form-item label="平台 [os_type] :">
              <el-select v-model="register.osType" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
            <el-button type="primary" class="btn">请求</el-button>
          </el-form>
        </div>
        <div class="register_result result">
          <h3>返回结果</h3>
          <div class="register_res res"></div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="充值接口">
        <div class="online_table table">
          <el-form :label-position="labelPosition" label-width="80px" :model="recharge">
            <el-form-item label="游戏 :">
              <el-input v-model="recharge.gameName"></el-input>
            </el-form-item>
            <el-form-item label="接口地址 :">
              <el-input v-model="recharge.link"></el-input>
            </el-form-item>
            <el-form-item label="游戏代码 [gamecode] :">
              <el-input v-model="recharge.gameCode"></el-input>
            </el-form-item>
            <el-form-item label="产品ID [product_id]:">
              <el-input v-model="recharge.productId"></el-input>
            </el-form-item>
            <el-form-item label="新产品ID  [pay_product_id] :">
              <el-input v-model="recharge.payProductId"></el-input>
            </el-form-item>
            <el-form-item label="订单ID  [order_id] :">
              <el-input v-model="recharge.orderId"></el-input>
            </el-form-item>
            <el-form-item label="用户ID  [uid] :">
              <el-input v-model="recharge.uid"></el-input>
            </el-form-item>
            <el-form-item label="服务器ID  [server_id] :">
              <el-input v-model="recharge.serverId"></el-input>
            </el-form-item>
            <el-form-item label="角色ID  [role_id] :">
              <el-input v-model="recharge.roleId"></el-input>
            </el-form-item>
            <el-form-item label="游戏币数量  [gamecoins] :">
              <el-input v-model="recharge.gameCoins"></el-input>
            </el-form-item>
            <el-form-item label="赠送游戏币  [bonuscoins] :">
              <el-input v-model="recharge.bonusCoins"></el-input>
            </el-form-item>
            <el-form-item label="支付类型  [payway] :">
              <el-input v-model="recharge.payWay"></el-input>
            </el-form-item>
            <el-form-item label="支付来源 [spaywaysub] :">
              <el-input v-model="recharge.payWaySub"></el-input>
            </el-form-item>
            <el-form-item label="支付金额  [amount] :">
              <el-input v-model="recharge.amount"></el-input>
            </el-form-item>
            <el-form-item label="货币种类  [currency] :">
              <el-input v-model="recharge.currency"></el-input>
            </el-form-item>
            <el-form-item label="透传参数  [ext] :">
              <el-input v-model="recharge.ext"></el-input>
            </el-form-item>
            <el-button type="primary" class="btn">请求</el-button>
          </el-form>
        </div>
        <div class="recharge_result result">
          <h3>返回结果</h3>
          <div class="recharge_res res"></div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        labelPosition: 'top',
        options: [{
          value: '选项1',
          label: 'ALL'
        }, {
          value: '选项2',
          label: 'Android'
        }, {
          value: '选项3',
          label: 'IOS'
        }],
        serviceList: {
          gameName: '手游泰思特',
          link: ''
        },
        roleList: {
          gameName: '手游泰思特',
          gameCode: 'mtester',
          link: '',
          uid: '',
          serverId: '',
          time: ''
        },
        onlineNum: {
          gameName: '手游泰思特',
          link: '',
          gameCode: '',
          serverId: '',
          osType: 'IOS'
        },
        register: {
          gameName: '手游泰思特',
          link: '',
          gameCode: '',
          serverId: '',
          osType: 'Android'
        },
        recharge: {
          gameName: '手游泰思特',
          link: '',
          gameCode: 'mtester',
          productId: '',
          payProductId: '',
          orderId: '',
          uid: '',
          serverId: '',
          roleId: '',
          gameCoins: '',
          bonusCoins: '0',
          payWay: 'mob',
          payWaySub: 'google | ios',
          amount: '',
          currency: '',
          ext: ''
        }
      }
    }
  }
</script>

<style scoped>
  .el-tabs--border-card > .el-tabs__content {
    padding-bottom: 115px;
  }
  .table{
    width:500px;
    background: #eee;
    float:left;
    padding:30px;
    margin-right:30px;
    margin-top:20px;
  }
  .result{
    width:500px;
    background: #FFF;
    float:left;

  }
  .res{
    padding:30px;
    height:300px;
    background:#FFF;
    border:1px solid #eeeeee;
    border-radius: 8px;
  }
  .btn{
    margin-left:380px;
  }
  .el-select {
    display: inline-block;
    position: relative;
    width: 100%;
  }
</style>


<template>
  <div class="app-container">
    <div class="wrapper">
        <h3>
          <span class="title">基本信息</span>
          <span class="circle" @mouseenter="enter" @mouseleave="leave">?</span>
        </h3>
        <div class="info" v-show="showInfo">以下信息均为core中的基本信息，如有问题请通知管理员修改。</div>
        <p>所属游戏族群：<span>手游泰思特</span></p>
        <p>语言：<span>阿语，英语，德语</span></p>
        <p>游戏中文名称：<span>手游泰思特</span></p>
        <p>游戏本地名称：<span>mtester</span></p>
        <p>Gamecode：<span>mtester</span></p>
        <p>MdataID：<span>123456789</span></p>
        <p>GA_ID：<span>UA-123456</span></p>
        <p>FBapp_ID：<span>ahjfdhfjdjfk</span></p>
        <p>FBapp_URL：<span>http://tester.fb.com</span></p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showInfo: false
      }
    },
    methods: {
      enter() {
        this.showInfo = true
      },
      leave() {
        this.showInfo = false
      }
    }
  }
</script>

<style scoped>
 .app-container{
   background: #fff;
   min-height:500px;
 }
 .wrapper{
   background: #eef1f6;
   border-radius: 5px;
   padding:5px 0 80px 80px;
 }
 .wrapper h3{
   width: 100%;
   overflow:hidden;
   height:100px;
   line-height:100px;
 }
 .circle{
   display: block;
   width:50px;
   height:50px;
   line-height:50px;
   text-align: center;
   background: #e4e4e4;
   border:1px solid #3A3A3A;
   border-radius: 25px;
   float:left;
   margin-top:25px;
   margin-left:20px;
   cursor: pointer;
 }
 .title{
   float:left;
 }
 .info{
   width:380px;
   height:25px;
   padding-left:20px;
   line-height:25px;
   border:1px solid #c5c5c5;
   border-radius:3px;
   font-size:12px;
   color:#333;
   margin-top: -50px;
   margin-left: 100px;
   float:left;
 }
 .wrapper h3{
   margin-bottom:30px;
 }
  .wrapper p{
    margin-top:20px;
  }
</style>

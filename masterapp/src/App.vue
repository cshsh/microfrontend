<template>
  <div style="height: 100%">
      <!--主应用路由出口-->
      <router-view  v-if="!isChildApp" />
      <!--//子应用就加载 content-->
      <framework v-show="isChildApp" :loding="loading" :isChildApp="isChildApp" :content="content"> </framework>
    </div>
</template>
<script>
 import Framework from './components/Framework'
 export  default {
   components: {
     Framework
   },
   props: {
     content: {
       type: String
     },
     loading: Boolean
   },
   methods:{
   },
   computed: {
     isChildApp() {
       if(this.$route.path.match('sub-app')){
         return true;
       }else{
         return false;
       }
     }
   },
   created() {
     console.log('content', this.content)
   }
 }
</script>
<style scoped>
  .main-layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }
</style>

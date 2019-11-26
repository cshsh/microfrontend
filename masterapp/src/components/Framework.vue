<template>
  <div class="main-layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              <router-link to="/">主应用系统</router-link>
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              <router-link to="/sub-app">子应用系统</router-link>
            </MenuItem>
          </div>
          <Poptip placement="bottom" trigger="hover" transfer :style="{float: 'right'}">
             <div class="layout-user">{{username}}</div>
             <div slot="content" >
               <div style="text-align: center"  @click="exitLogin()">
                <span >退出</span>
               </div>
             </div>
          </Poptip>
        </Menu>
      </Header>
    </Layout>
    <!--主应用-->
    <f-main v-if="!isChildApp"></f-main>
    <!--子应用-->
    <div v-show="isChildApp"  :loading="loading" v-html="content"></div>
  </div>
</template>
<script>
  import store from '../store'
  import { mapActions, mapState } from 'vuex'
  import FMain from './Main'
  export  default {
    components: {
      FMain
    },
    props: {
      content: {
        type: String
      },
      isChildApp: Boolean,
      loading: Boolean
    },
    methods: {
      ...mapActions([
        'logout'
      ]),
      exitLogin() {
        this.logout()
        this.$router.push('/login')
      }
    },
    computed: {
      ...mapState({
        username: state => state.user.username
      }),
    },
    created() {
      // console.log('mapState', {...mapState})
      // console.log('username', this.username)
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
    color: #ffffff;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
    margin-left: 200px;
    float: left;
  }
  .layout-user{
    width: 160px;
    border-radius: 3px;
    /*float: right;*/
    text-align: center;
    position: relative;
    margin:  0 auto;
    color: #ffffff;
  }
</style>

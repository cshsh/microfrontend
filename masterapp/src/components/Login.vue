<template>
  <div class="container">
    <div class="form">
      <Form :label-width="70" line>
        <FormItem label="用户名">
          <Input v-model="username"/>
        </FormItem>
        <FormItem label="密码">
          <Input type="password" v-model="pswd" @keyup.enter.native="login"/>
        </FormItem>
        <div class="login">
          <Button type="primary" @click="login">登录</Button>
        </div>
      </Form>
    </div>
  </div>
</template>
<script>
  import {login} from '@/api/login'
  import { mapActions, mapState } from 'vuex'
  export default {
    name: 'login',
    data () {
      return {
        username: null,
        pswd: null
      }
    },
    methods: {
      ...mapActions([
        'handleLogin',
        'getUserInfo',
        'getRouters'
      ]),
      login () {
        // console.log('test',this.username, this.pswd)
        this.handleLogin({
          username: this.username,
          password: this.pswd
        }).then(response =>{
          let token = response.data.token
            // console.log('loginResponse', response.data)
            this.getUserInfo(token).then(res => {
            // console.log('getUserInfoResponse', res.data)
            // console.log('this.$router',  this.$router)
            this.getRouters().then(res => {
              // console.log('menus', res)
              this.$router.push({path: '/'})
              // console.log('mapstaterouts', this.routers)
            })
          })
        })
        // this.$router.push({path: '/page'})
        // if (this.username === 'admin' && this.pswd === '123456') {
        //   this.$router.push('/index')
        // } else {
        //   this.$router.push('/index')
        //   this.$Message.error({
        //     content: '用户名或密码失败！'
        //   })
        // }
      }
    },
    computed: {
      ...mapState[{
        routers: state => state.app.systemRouters
      }]
    }
  }
</script>

<style type="text/scss" scoped>
  .container{
    width: 500px;
    height: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #42b983;
  }
  .form {
    height: 50%;
    width: 50%;
    position:absolute;
    left: 0;
    right: 35px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .login{
    text-align: center;
    margin-right: 35px;
  }
</style>

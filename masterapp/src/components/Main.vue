<template>
  <div style="height: 100%">
    <Layout :style="{height:'100%'}">
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu theme="light" width="auto">
            <Submenu ref="child" v-for="(item, i) in sysRouters" v-if="!item.hidden" :name="i">
              <template slot="title">
                <Icon :type="item.icon" /><span>{{item.title}}</span>
              </template>
              <template v-for="(list1,j) in item.children">
                <Submenu  v-if="list1.children && list1.children.length!==0" :name="j">
                  <template slot="title">
                    <span>
                     <Icon :type="list1.icon" />{{list1.title}}
                      <!--<Icon :type="list1.icon" /><router-link :to="list1.path"> {{list1.title}}</router-link>-->
                    </span>
                  </template>
                  <MenuItem v-for="(sub,z) in list1.children" :name="z">
                    <Icon :type="sub.icon" />
                    <router-link :to="sub.path"> {{sub.title}}</router-link>
                  </MenuItem>
                </Submenu>
                <MenuItem v-else  :name="j">
                  <Icon :type="list1.icon" />
                  <router-link :to="list1.path"> {{list1.title}}</router-link>
                </MenuItem>
              </template>
            </Submenu>
          </Menu>
        </Sider>
        <Layout  :style="{padding: '0 24px 100px'}">
          <!--<Breadcrumb :style="{margin: '24px 0'}">-->
            <!--<BreadcrumbItem>Home</BreadcrumbItem>-->
            <!--<BreadcrumbItem>Components</BreadcrumbItem>-->
            <!--<BreadcrumbItem>Layout</BreadcrumbItem>-->
          <!--</Breadcrumb>-->
          <div class="bread-crumb-wrapper">
            <Breadcrumb :style="{fontSize:'14px'}">
              <BreadcrumbItem
                v-for="item in breadCrumbList"
                :to="item.to"
                :key="`bread-crumb-${item.name}`">
                <common-icon style="margin-right: 4px;" :type="item.icon || ''"/>
                {{showTitle(item)}}
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <Content :style="{padding: '24px', background: '#fff'}">
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
  </div>
</template>
<script>
  import router from '../router'
  import { showTitle } from "@/libs/util"
  import { mapState } from 'vuex'
  export default {
    name : 'mainPage',
    data(){
      return {
      }
    },
    methods: {

    },
    computed: {
      ...mapState({
        sysRouters: state => state.app.systemRouters
      }),
      breadCrumbList () {
        // console.log(this.$store.state.app.breadCrumbList,"=====面包屑路由列表")
        return this.$store.state.app.breadCrumbList
      }
      // sysRouters() {
      //   let list = JSON.parse(sessionStorage.getItem('SYSTEM_ROUTER'))
      //   // console.log('sessionStorage.getItem(\'SYSTEM_ROUTER\')', JSON.parse(sessionStorage.getItem('SYSTEM_ROUTER')))
      //   for(let item of list) {
      //     // console.log('parent item', item.name)
      //     let subItem = item.children
      //     if(subItem && subItem.length > 0 ) {
      //       for (let subItem of list) {
      //         // console.log('subItem item', subItem.name)
      //       }
      //     }
      //   }
      //   return JSON.parse(sessionStorage.getItem('SYSTEM_ROUTER'))
      // }
    },
    created() {
      console.log('router', router)
    }
  }
</script>
<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    /*position: absolute;*/
    border-radius: 0px 0px 4px 4px;
    overflow: hidden;
    height: 100%;
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
</style>

<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: absolute;
    border-radius: 0px 0px 4px 4px;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }
</style>
<template>
  <div class="layout">
    <Layout :style="{height: '100%'}">
      <Sider hide-trigger :style="{background: '#fff'}">
        <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              <router-link to="/">订单管理</router-link>
            </template>
            <MenuItem name="1-1">
              <router-link to="/order">订单列表</router-link>
            </MenuItem>
            <MenuItem name="1-2">
              <router-link to="/about">创建订单</router-link>
            </MenuItem>
            <MenuItem name="1-3">订单详情</MenuItem>
          </Submenu>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              <router-link to="/">订单管理</router-link>
            </template>
            <MenuItem name="1-1">
              <router-link to="/order">订单列表</router-link>
            </MenuItem>
            <MenuItem name="1-2">
              <router-link to="/about">创建订单</router-link>
            </MenuItem>
            <MenuItem name="1-3">订单详情</MenuItem>
          </Submenu>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              <router-link to="/">订单管理</router-link>
            </template>
            <MenuItem name="1-1">
              <router-link to="/order">订单列表</router-link>
            </MenuItem>
            <MenuItem name="1-2">
              <router-link to="/about">创建订单</router-link>
            </MenuItem>
            <MenuItem name="1-3">订单详情</MenuItem>
          </Submenu>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              <router-link to="/">订单管理</router-link>
            </template>
            <MenuItem name="1-1">
              <router-link to="/order">订单列表</router-link>
            </MenuItem>
            <MenuItem name="1-2">
              <router-link to="/about">创建订单</router-link>
            </MenuItem>
            <MenuItem name="1-3">订单详情</MenuItem>
          </Submenu>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              <router-link to="/">订单管理</router-link>
            </template>
            <MenuItem name="1-1">
              <router-link to="/order">订单列表</router-link>
            </MenuItem>
            <MenuItem name="1-2">
              <router-link to="/about">创建订单</router-link>
            </MenuItem>
            <MenuItem name="1-3">订单详情</MenuItem>
          </Submenu>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>
              <router-link to="/">订单管理</router-link>
            </template>
            <MenuItem name="1-1">
              <router-link to="/order">订单列表</router-link>
            </MenuItem>
            <MenuItem name="1-2">
              <router-link to="/about">创建订单</router-link>
            </MenuItem>
            <MenuItem name="1-3">订单详情</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>
              <router-link to="/about">产品管理</router-link>
            </template>
            <MenuItem name="2-1">产品列表</MenuItem>
            <MenuItem name="2-2">产品分类</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>
              销售管理
            </template>
            <MenuItem name="3-1">销售统计</MenuItem>
            <MenuItem name="3-2">退货统计</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout :style="{padding: '0 24px 100px'}">
        <Breadcrumb :style="{margin: '24px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Content :style="{padding: '24px', background: '#fff'}">
          <router-view/>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  export default {

  }
</script>


<template>
  <el-menu theme="dark" router>
    <el-menu-item index="/dashboard"><i class="el-icon-menu"></i>首页</el-menu-item>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-plus"></i>添加数据</template>
      <el-menu-item index="/addShop">添加商铺</el-menu-item>
      <el-menu-item index="/addGoods">添加商品</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title"><i class="el-icon-document"></i>数据管理</template>
      <el-menu-item index="/manage/userList">用户列表</el-menu-item>
      <el-menu-item index="/manage/shopList">商铺列表</el-menu-item>
      <el-menu-item index="/manage/goodsList">商品列表</el-menu-item>
      <el-menu-item index="/manage/orderList">订单列表</el-menu-item>
      <el-menu-item index="/manage/adminList">管理员列表</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title"><i class="el-icon-star-on"></i>图表</template>
      <el-menu-item index="/graph/userDistribution">用户分布</el-menu-item>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title"><i class="el-icon-edit"></i>编辑</template>
      <el-menu-item index="/edit/editor">文本编辑</el-menu-item>
    </el-submenu>
    <el-submenu index="6">
      <template slot="title"><i class="el-icon-setting"></i>设置</template>
      <el-menu-item index="/setting/adminSetting">管理员设置</el-menu-item>
    </el-submenu>
    <el-submenu index="7">
      <template slot="title"><i class="el-icon-warning"></i>说明</template>
      <el-menu-item index="/explain/explain">说明</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
  }
</script>

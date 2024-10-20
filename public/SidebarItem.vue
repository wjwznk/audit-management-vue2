<template>
  <div>
    <template v-if="hasOneShowingChild(item.children, item)">
      <el-menu-item :index="item.index">单极菜单</el-menu-item>
    </template>

    <el-submenu v-else :index="item.index">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>多级菜单</span>
      </template>
      <sidebar-item 
        v-for="child in item.children"
        :key="child.path"
      />
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  data() {
    return {
      item: {}
    };
  } ,
  methods: {
    hasOneShowingChild(children = [], parent){
      return children.length > 0 ? true : false;
    }
  }
}
</script>

<style>

</style>
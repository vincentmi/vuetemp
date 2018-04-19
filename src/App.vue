

<template>
  <div id="app">
    <div>
      <el-container>
        <el-header class="header">VUE Menu Test</el-header>

        <el-aside>
          <AuthMenu></AuthMenu>
        </el-aside>
        <el-main id="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import AuthMenu from './components/AuthMenu/AuthMenu.vue'
export default {
  components:  {
     AuthMenu 
  } ,
  methods: {
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
  margin:0;
}
.header {
  font-size: 20px;
  text-align: left;
  background: #ccc;
  height: 50px;
  line-height: 50px;
}
</style>

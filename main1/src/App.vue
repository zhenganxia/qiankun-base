<template>
    <div id="app">
        <el-container>
            <el-aside width="200px">
                <Menu></Menu>
            </el-aside>
            <el-container>
                <el-header class="header">
                    <el-breadcrumb class="breadcrumb" separator="/">
                        <el-breadcrumb-item :to="{path:'/'}">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>导航一</el-breadcrumb-item>
                        <el-breadcrumb-item>sub-vue页面</el-breadcrumb-item>
                    </el-breadcrumb>
                </el-header>
                <el-main>
                    <router-view v-show="$route.name"></router-view>
                    <!-- 子应用容器 -->
                    <div id="main-container" v-show="!$route.name"></div>
                </el-main>
            </el-container>
        </el-container>
        <!-- 登录路由 -->
        <router-view v-show="$route.meta.withoutLayout" />
    </div>
</template>
<script>
import Menu from './views/menu.vue'
export default {
    components: { Menu }
}
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

body {
    margin: 0;
}

.header {
    border-bottom: 1px solid #e6e6e6;
}
.breadcrumb {
    padding: 23px 0;
}
</style>

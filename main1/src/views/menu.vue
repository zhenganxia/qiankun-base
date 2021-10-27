<template>
    <el-menu :default-openeds="['1']" class="el-menu-vertical-demo">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">Vue 模块</span>
            </template>
            <el-menu-item
                :index="route.path"
                :key="route.path"
                @click="jumpPage(`/sub-vue${route.path}`)"
                class="sub-menu"
                v-for="route in menus"
            >{{ route.name }}</el-menu-item>
        </el-submenu>
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">React 模块</span>
            </template>
            <el-menu-item
                :index="route.route"
                :key="route.route"
                @click="jumpPage(`/sub-react${route.route}`)"
                class="sub-menu"
                v-for="route in reactMenu"
            >{{ route.title }}</el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
export default {
    name: 'menu',
    data() {
        return {
            menus: [
                {
                    path: '/',
                    name: 'Home'
                },
                {
                    path: '/about',
                    name: 'About'
                },
                {
                    path: '/list',
                    name: 'List'
                }
            ],
            reactMenu: [
                {
                    key: 'react',
                    route: '/',
                    title: '主页'
                },
                {
                    key: 'react-list',
                    route: '/list',
                    title: '列表页'
                }
                // {
                //   key: 'react-communication',
                //   route: '/communication',
                //   title: '通讯页'
                // }
            ]
        }
    },
    props: {
        msg: String
    },
    mounted() {
        console.log('22222222222222222222', this.$router.options.routes)
    },
    watch: {
        $route: {
            handler(val) {
                console.log('v11111111111111111111111', this.$router.options.routes)
            }
        }
    },
    methods: {
        jumpPage(path) {
            // console.log('path',path)
            if (this.$route.path !== path) {
                this.$router.push(path)
            }
        }
    }
}
</script>

<style scoped lang="scss">
.el-menu-vertical-demo /deep/ {
    height: 100vh;

    .el-submenu__title,
    .el-menu-item {
        text-align: left;
    }
}
.sub-menu {
    padding-left: 50px !important;
}
</style>

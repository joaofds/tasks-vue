<script>
import Header from '@/components/layout/Header.vue'
import SideNav from '@/components/layout/SideNav.vue'
import Tasks from '@/components/task/Tasks.vue'

export default {
    name: 'DashboardView',
    components: {
        Header, SideNav, Tasks
    },
    data() {
        return {
            
        }
    }
}
</script>

<template>
    <div class="wrapp">
        <div class="header">
            <Header />
        </div>
        <div class="nav">
            <SideNav />
        </div>
        <div class="main">
            <Tasks />
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.wrapp
    display: flex
    flex-direction: row

.header
    position: fixed
    z-index: 2

.nav
    position: relative
    z-index: 3
</style>
<script>
import Header from '@/components/layout/Header.vue'
import SideNav from '@/components/layout/SideNav.vue'

export default {
    name: 'DashboardView',
    components: {
        Header, SideNav
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
    </div>
</template>

<style lang="stylus" scoped>
.header
    position: fixed
    z-index: 0

.nav
    position: relative
    z-index: 1
</style>
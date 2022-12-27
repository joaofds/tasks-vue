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
            tasks: [
                { name: 'Planejar desenvolvimento do app.', category: '1', pending: true },
                { name: 'Criar peojeto e configurar pacotes.', category: '2', pending: false },
                { name: 'Montar telas HTML/CSS.', category: '2', pending: false },
                { name: 'Separar componentes.', pending: false },
                { name: 'Fazer a lógica javascript dos componentes.', pending: false }
            ]
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
            <Tasks :tasks="tasks" />
        </div>
    </div>
</template>

<style lang="stylus" scoped>
*
    margin: 0
    padding: 0
    box-sizing: border-box
    
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
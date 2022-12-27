<script>
import Header from '@/components/layout/Header.vue'
import SideNav from '@/components/layout/SideNav.vue'
import Tasks from '@/components/task/Tasks.vue'
import Modal from '@/components/elements/Modal.vue'
import Bus from "@/bus"

export default {
    name: 'DashboardView',
    components: { Header, SideNav, Tasks, Modal },
    created() {
        Bus.$on('showModal', () => {
            this.showModal()
        })
    },
    data() {
        return {
            modalVisible: false,
            tasks: [
                { name: 'Planejar desenvolvimento do app.', category: '1', pending: true },
                { name: 'Criar peojeto e configurar pacotes.', category: '2', pending: false },
                { name: 'Montar telas HTML/CSS.', category: '2', pending: false },
                { name: 'Separar componentes.', pending: false },
                { name: 'Fazer a lógica javascript dos componentes.', pending: false }
            ]
        }
    },
    methods: {
        showModal() {
            this.modalVisible = true
        },
        closeModal() {
            this.modalVisible = false
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
            <Modal v-show="modalVisible" @close="closeModal"></Modal>
        </div>
        <div class="main">
            <Tasks :tasks="tasks" @showModal="showModal" />
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
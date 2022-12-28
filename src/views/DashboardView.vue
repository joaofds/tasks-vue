<script>
import Header from '@/components/layout/Header.vue'
import SideNav from '@/components/layout/SideNav.vue'
import Tasks from '@/components/task/Tasks.vue'
import ModalCreate from '@/components/elements/ModalCreate.vue'
import ModalDelete from '@/components/elements/ModalDelete.vue'
import Bus from "@/bus"

export default {
    name: 'DashboardView',
    components: { Header, SideNav, Tasks, ModalCreate, ModalDelete },
    created() {
        // tasks
        this.tasks = [
            { name: 'Planejar desenvolvimento do app.', description: '', category: '1', pending: false },
            { name: 'Criar peojeto e configurar pacotes.', category: '2', pending: false },
            { name: 'Montar telas HTML/CSS.', category: '2', pending: false },
            { name: 'Separar componentes.', pending: false }, 
            { name: 'Fazer a lógica javascript dos componentes.', pending: false }
        ]

        // busca tasks json no storage e atribui ao array de tasks do vue.
        const tasks = localStorage.getItem('tasks')
        this.tasks = JSON.parse(tasks) || []

        // recebe a task do bus emitida pelo modal e insere no array.
        Bus.$on('task', task => {
            this.addTask(task)
        })

        // deleta uma task.
        Bus.$on('deleteTask', task => {
            this.taskToDelete = task
            this.deleteTask()
        })

        // abre modal para edição.
        Bus.$on('showModaledit', () => {
            this.showModalCreate()
        })

        // event bus que mostra modal de deleção de tarefa.
        Bus.$on('showModalDelete', (task) => {
            this.showModalDelete()
        })

        // event bus que mostra modal de criação de tarefa.
        Bus.$on('showModalCreate', () => {
            this.showModalCreate()
        })

        Bus.$on('toggleTaskState', task => {
            this.taskToggleState(task)
        })

        Bus.$on('searchValue', value => {
            this.searchValue = value
        })
    },
    watch: {
        // monitora this.tasks para manter o localStorage atualizado.
        tasks() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        }
    },
    data() {
        return {
            modalCreateVisible: false,
            modalDeleteVisible: false,

            searchValue: '',
            taskToDelete: null,
            tasks: []
        }
    },
    methods: {
        addTask(task) {
            this.tasks.push(task)
        },
        deleteTask() {
            const index = this.tasks.indexOf(this.taskToDelete)
            this.tasks.splice(index, 1)

            this.closeModalDelete()
            this.taskToDelete = null
        },
        showModalCreate() {
            this.modalCreateVisible = true
        },
        closeModalCreate() {
            this.modalCreateVisible = false
        },
        showModalDelete() {
            this.modalDeleteVisible = true
        },
        closeModalDelete() {
            this.modalDeleteVisible = false
        },
        taskToggleState(task) {
            const index = this.tasks.indexOf(task)
            this.tasks[index].pending = !this.tasks[index].pending
        }
    },
    computed: {
        // filtro de busca
        taskFilter() {
            let myTempTasks = this.tasks

            if(this.searchValue != '' && this.searchValue) {
                myTempTasks = myTempTasks.filter((task) => {
                    return task.name.toUpperCase().includes(this.searchValue.toUpperCase())
                })
            }

            return myTempTasks
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
            <ModalCreate v-show="modalCreateVisible" @close="closeModalCreate"></ModalCreate>
            <ModalDelete v-show="modalDeleteVisible" @close="closeModalDelete"></ModalDelete>
        </div>
        <div class="main">
            <Tasks :tasks="taskFilter" @showModalCreate="showModalCreate" />
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
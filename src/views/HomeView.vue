<script>
import Header from '@/components/layout/Header.vue'
import SideNav from '@/components/layout/SideNav.vue'
import Tasks from '@/components/task/Tasks.vue'
import Configuration from '@/components/configuration/Configuration.vue'
import Dashboard from '@/components/dashboard/Dashboard.vue'
import ModalCreate from '@/components/elements/ModalCreate.vue'
import ModalDelete from '@/components/elements/ModalDelete.vue'
import Bus from "@/bus"

export default {
    name: 'HomeView',
    components: { Header, SideNav, Tasks, ModalCreate, ModalDelete, Dashboard, Configuration },
    created() {
        // busca tasks json no storage e atribui ao array de tasks do vue.
        const tasks = localStorage.getItem('tasks')
        this.tasks = JSON.parse(tasks) || []

        // recebe a task do bus emitida pelo modal e insere no array.
        Bus.$on('task', data => {
            if(!data.edit) {
                this.addTask(data.task)
            } else {
                this.updateTask(data.task)
            }
        })

        // deleta uma task.
        Bus.$on('deleteTask', () => {
            this.deleteTask()
        })

        // abre modal para edição.
        Bus.$on('showModaledit', task => {
            const index = this.tasks.indexOf(task)

            Bus.$emit('editTask', { task, index })
            this.showModalCreate()
        })

        // event bus que mostra modal de deleção de tarefa.
        Bus.$on('showModalDelete', task => {
            this.taskToDelete = task
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

        Bus.$on('navMenuChange', value => {
            this.navMenuActive = value
        })
    },
    watch: {
        // monitora this.tasks para manter o localStorage atualizado.
        tasks() {
            this.updateStorage()
        }
    },
    data() {
        return {
            modalCreateVisible: false,
            modalDeleteVisible: false,

            searchValue: '',
            taskToDelete: null,
            tasks: [],

            navMenuActive: 'dashboard'
        }
    },
    methods: {
        addTask(task) {
            delete task.index
            this.tasks.push(task)
        },
        updateTask(task) {
            this.tasks[task.index].name = task.name
            this.tasks[task.index].description = task.description
            this.tasks[task.index].category = task.category
            this.tasks[task.index].pending = task.pending
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
        // altera estado de pendente/finalizada de acordo com checkbox.
        taskToggleState(task) {
            if(task) {
                const index = this.tasks.indexOf(task)
                this.tasks[index].pending = !this.tasks[index].pending
            }

            // mantém storage atualizado.
            this.updateStorage()
        },
        // atualiza dados no storage.
        updateStorage() {
            localStorage.removeItem("tasks");
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
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

            // ordena por prioridade (task.category)
            myTempTasks = myTempTasks.sort((a, b) => {
                if(a.category == 1) {
                   return -1 
                }
            })

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
            <Dashboard 
                v-if="navMenuActive == 'dashboard'" 
            />

            <Tasks
                v-else-if="navMenuActive == 'tasks'" 
                :tasks="taskFilter"
                @showModalCreate="showModalCreate" 
            />


            <Configuration
                v-else-if="navMenuActive == 'config'" 
            />
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

.main
    width: 100%
</style>
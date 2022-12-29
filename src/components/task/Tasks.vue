<script>
import Task from '@/components/task/Task.vue'
import Bus from "@/bus"


export default {
    name: 'Tasks',
    components: { Task },
    props: {
        tasks: { type: Array, required: true }
    },
    watch: {
        // passa valor do input pelo bus.
        searchValue(value) {
            Bus.$emit('searchValue', value)
        }
    },
    data() {
        return {
            searchValue: ''
        }
    },
    methods: {
        // mostra modal de cadastro de nova task
        showModalCreate() {
            Bus.$emit('showModalCreate')
        }
    },
    computed: {
        // contagem de tasks urgentes.
        taskCountUrgent() {
            let total = 0
            this.tasks.filter(task => {
                if(task.category == 1) {
                    total++
                }
            })
            return total
        },
        // contagem de tasks importantes.
        taskCountImportant() {
            let total = 0
            this.tasks.filter(task => {
                if(task.category == 2) {
                    total++
                }
            })
            return total
        },
        // contagem de tasks pendentes.
        taskCountPending() {
            let total = 0
            this.tasks.filter(task => {
                if(task.pending) {
                    total++
                }
            })
            return total
        }
    }
}

</script>

<template>
    <div class="wrapp">
        <div class="left-content">
            <div class="categories">
                <p>Categorias</p>
                <ul>
                    <a href="#" class="active"><li>Todas</li></a>
                    <a href="#">
                        <li>
                            Urgentes 
                            <span class="circle pink">
                                <span class="couting">{{ taskCountUrgent }}</span>
                            </span>
                        </li>
                    </a>
                    <a href="#">
                        <li>
                            Importantes
                            <span class="circle yellow">
                                <span class="couting">{{ taskCountImportant }}</span>
                            </span>
                        </li>
                    </a>
                    <a href="#"><li>Outras</li></a>
                    <a href="#"><li>Finalizadas</li></a>
                </ul>
            </div>
        </div>
        <div class="right-content">
            <div class="info-text">
                <h1>Minhas Tarefas</h1>
                <p>Olá <span>João Ferreira</span>, você tem <span>{{ taskCountPending }} tarefa(s)</span> pendentes.</p>
                <div class="search-content">
                    <font-awesome-icon icon="search" />
                    <input
                        v-model="searchValue"
                        type="text" 
                        class="input-field" 
                        placeholder="Buscar Tarefas">
                </div>
            </div>
            <div class="tasks-list">
                <template>
                    <Task v-for="(task, index) in tasks" :key="index" :task="task"></Task>
                </template>
            </div>
        </div>
        <button type="button" @click="showModalCreate" class="float-button"><font-awesome-icon icon="plus" /></button>
    </div>
</template>

<style lang="stylus" scoped>
primary = #2693FF
success = #0ED984
black = #283848
pink = #FF2E79
yellow = #FFC42E
default = #A6C1D2
gray = #77899E

.pink
    background-color: pink

.yellow
    background-color: yellow
    
a
    text-decoration: none
    
.wrapp
    display: flex

// CONTEUDO DO LADO ESQUERDO
.left-content
    width: 277px
    height: 100vh
    display: flex
    align-items: center
    justify-content: center
    background-color: #F4FBFF

.left-content p
    font-size: 18px
    font-weight: 500
    margin-bottom: 2em
    color: black

.categories
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column

.categories li
    font-size: 16px
    padding: 12px 0 12px 4px
    list-style-type: none
    color: black

.categories li:before
    content: url("../../assets/images/greaterthan.svg")
    margin:0 10px 0 -15px

.circle
    width: 20px
    height: 20px
    border-radius: 50%
    color: #fff
    position: absolute
    margin-left: 0.3em

.couting
    font-size: 14px
    font-weight: 900
    display: flex
    align-items: center
    justify-content: center

.categories a li
    font-weight: 500
    color: black

.categories a:visited
    color: black

.categories a:hover li
    color: primary

// CONTEUDO DO LADO DIREITO
.right-content
    width: 80vw
    background-color: #E9F4FB
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column

.right-content h1
.right-content span
    font-weight: 600
    color: black

.right-content p
    font-size: 18px
    margin-bottom: 1.5em
    color: gray

.info-text span
    color: primary

.right-content input
    width: 633px
    height: 51px

::placeholder
    font-size: 18px
    color: gray

.search-content
    margin-bottom: 2em

.search-content svg
    position: absolute
    right: 0.3em
    bottom: 0.3em
    font-size: 32px
    color: default
    z-index: 9000

.float-button
    width: 78px
    height: 78px
    border-radius: 39px
    position: absolute
    z-index: 9000
    background-color: success
    border: none
    cursor: pointer
    right: 2em
    bottom: 2em

.float-button:active
    background-color: #1AD18F

.float-button svg
    color: #fff
    font-size: 32px

.tasks-list
    display: inline-block

.active
    background-color: primary

</style>
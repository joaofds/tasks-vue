<script>
import Bus from "@/bus"

export default {
    name: 'ModalCreate',
    created() {
        // recebe tarefa a ser editada.
        Bus.$on('editTask', data => {

            // mostra botao Atualizar.
            this.updateButton = true

            // guarda index da task atual.
            this.taskIndexToEdit = data.index
            
            this.editTask(data.task)
        })

        // oculta botão "Atualizar".
        Bus.$on('disableUpdateButton', () => {
            this.updateButton = false
        })
    },
    data() {
        return {
            updateButton: false,
            taskIndexToEdit: null,

            task: {
                name: "",
                description: "",
                category: null,
                pending: true
            },
        }
    },
    methods: {
        // preenche dados da tarefa a ser editada.
        editTask(task) {
            this.task.name = task.name
            this.task.description = task.description
            this.task.category = task.category
            this.task.pending = task.pending
        },
        // emite a task criada para o bus.
        emitTask() {
            Bus.$emit('task', { task: this.taskToEmit, edit: this.updateButton })

            this.close()
        },
        // reseta o formulario
        resetForm() {
            this.task.name = ""
            this.task.description = ""
            this.task.category = null
        },
        // fecha e limpa campos
        close() {
            this.$emit('close');
            this.resetForm()
        },
    },
    computed: {
        taskToEmit() {
            return {
                name: this.task.name,
                description: this.task.description,
                category: this.task.category,
                pending: this.task.pending,
                index: this.taskIndexToEdit
                
            }
        }
    }
};
</script>

<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modal">
                <header class="modal-header">
                    <slot name="header">
                        <h1>Cadastrar Tarefa</h1>
                    </slot>
                    <button 
                        @click="close" 
                        type="button" 
                        class="btn-close"
                    >
                    <font-awesome-icon icon="xmark" />
                    </button>
                </header>

                <section class="modal-body">
                    <slot name="body">
                        <div class="form-display">
                            <label for="title">Título</label>
                            <input
                                v-model="task.name"
                                type="text" 
                                name="title"
                                id="title"
                            >
                        </div>

                        <div class="form-display">
                            <label for="description">Descrição</label>
                            <textarea
                                v-model="task.description"
                                rows="4"
                            >
                            </textarea>
                        </div>
                    </slot>
                </section>

                <footer class="modal-footer">
                    <div class="radio-itens">
                        <slot name="footer">
                            <label for="urgente">Urgente</label>
                            <input
                                v-model="task.category"
                                type="radio" 
                                name="priority" 
                                value="1"
                            >

                            <label for="importante">Importante</label>
                            <input 
                                v-model="task.category"
                                type="radio" 
                                name="priority" 
                                value="2"
                            >
                        </slot>
                    </div>
                    <div class="buttons">
                        <button
                            v-show="!updateButton" 
                            @click="emitTask"
                            type="submit"
                            class="success"
                            :disabled="!this.task.name || !this.task.description"
                        >
                            Salvar
                        </button>

                        <button
                            v-show="updateButton"
                            @click="emitTask"
                            type="submit"
                            class="primary"
                            :disabled="!this.task.name || !this.task.description"
                        >
                            Atualizar
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    </transition>
</template>

<style lang="stylus" scoped>
gray = #4E657B
black = #283848

.modal-backdrop 
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    background-color: rgba(0, 0, 0, 0.3)
    display: flex
    justify-content: center
    align-items: center

.modal
    width: 660px
    height: 488px
    background: #fff
    box-shadow: 2px 2px 20px 1px
    border-radius: 4px
    overflow-x: auto
    display: flex
    flex-direction: column

.modal-body,
.modal-header,
.modal-footer 
    padding: 30px
    display: flex

.modal-body
    margin-top: -2em
    display: flex
    flex-direction: column
    color: gray

.modal-header h1
    font-size: 26px
    font-weight: bold
    color: black

.modal-footer
    margin-top: -4.5em
    justify-content: space-between
    color: gray

.btn-close 
    position: absolute
    top: 0
    right: 0
    border: none
    font-size: 20px
    padding: 10px
    cursor: pointer
    color: #4E657B
    font-weight: bold
    background: transparent

.modal-fade-enter,
.modal-fade-leave-to 
    opacity: 0

.modal-fade-enter-active,
.modal-fade-leave-active 
    transition: opacity .5s ease

input[type=text]
    width: 600px
    height: 50px

input[type=radio]
    width: 26px

button[type=submit]
  width: 118px
  height: 47px

textarea
    width: 600px

.buttons
    margin-left: auto

.radio-itens
    display: flex
    align-self: center

.radio-itens label
    margin-right: 0.5em
    margin-left: 0.5em
</style>
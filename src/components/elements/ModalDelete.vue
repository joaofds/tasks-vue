<script>
import Bus from "@/bus"

export default {
    name: 'ModalDelete',
    methods: {
        deleteTask() {
            Bus.$emit('deleteTask')
        },
        close() {
        this.$emit('close');
        },
    },
};
</script>

<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modal">
                <div class="modal-body">
                    <div class="icon-bag">
                        <font-awesome-icon icon="trash" />
                    </div>
                    <div class="info-text">
                        <h3>Tem certeza que deseja <span class="text-danger">excluir</span> esta tarefa?</h3>
                        <p>Esta ação não poderá ser desfeita.</p>
                    </div>
                    <div class="buttons">
                        <button @click="close" type="submit" class="success">
                            Cancelar
                        </button>
                        <button @click="deleteTask" type="submit" class="danger">
                            Confirmar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<style lang="stylus" scoped>
pink = #FF4874
success = #1AD18F

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
    width: 477px
    height: 345px
    background: #fff
    box-shadow: 2px 2px 20px 1px
    border-radius: 4px
    overflow-x: auto
    display: flex
    flex-direction: column

.modal-body
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column

.icon-bag
    width: 136px
    height: 136px
    border-radius: 50%
    background-color: #EDF6FC
    margin-top: 2.5em
    margin-bottom: 0.4em
    text-align: center
    display: flex
    align-items: center
    justify-content: center

.icon-bag svg
    font-size: 64px
    text-align: center
    color: #4A6583

.info-text
    text-align: center
    line-height: 22px

.info-text h3
    font-weight: bold
    color: #283848

.info-text span
    font-weight: bold

.buttons
    margin-top: 1.5em

.buttons button
    margin-right: 0.5em

.modal-fade-enter,
.modal-fade-leave-to 
    opacity: 0

.modal-fade-enter-active,
.modal-fade-leave-active 
    transition: opacity .5s ease

button[type=submit]
  width: 118px
  height: 41px

</style>
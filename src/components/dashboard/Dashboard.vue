<script>
import Bus from "@/bus"

export default {
    name: 'Dashboard',
    data() {
        return {
            // data props aqui
        }
    },
    methods: {
        // metodos aqui
    }
}

</script>

<template>
    <div class="wrapp">
        <div class="content">
            <div class="info-text">
                <h1>Dashboard</h1>
                <p>Seja bem vindo ao seu dashboard!</p>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped> 
.wrapp
    display: flex

// CONTEUDO
.content
    background-color: #E9F4FB
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column

.content h1
.content span
    font-weight: 600
    color: black

.content p
    font-size: 18px
    margin-bottom: 1.5em
    color: gray
</style>
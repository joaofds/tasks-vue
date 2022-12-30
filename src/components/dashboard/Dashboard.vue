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
    <div class="content">
        <div class="info-text">
            <h1>Dashboard</h1>
            <p>Seja bem vindo ao seu dashboard!</p>
        </div>
    </div>
</template>

<style lang="stylus" scoped> 
black = #283848
gray = #77899E

.content
    width: 100%
    height: 100vh
    background-color: #E9F4FB
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column

.content h1
    font-weight: 600
    color: black

.content p
    font-size: 18px
    margin-bottom: 1.5em
    color: gray
</style>
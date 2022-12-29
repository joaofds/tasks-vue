<script>
import Bus from "@/bus"

export default {
    name: 'Configuration',
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
        <h1>Configurações</h1>
        <p>Aqui você pode implementar diversas configurações globais.</p>
    </div>
</template>

<style lang="stylus" scoped>
.content
    width: 100%
    height: 100vh
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
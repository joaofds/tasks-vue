<script>
export default {
    name: 'Header',
    data() {
        return {

        }
    }
}

</script>

<template>
    <header>
        <div class="user-info">
            <img src="@/assets/images/avatar.png" alt="avatar">
            <div>João Ferreira<div class="role">Full-stack Developer</div></div>
        </div>
    </header>
</template>

<style lang="stylus" scoped>
header
    width: 100vw
    min-height: 83px
    display: flex
    justify-content: end
    background-color: #fff
    

header > div
    display: flex
    align-items: center
    justify-content: end

header img
    max-height: 55px

header > div > div
    margin: 0 0.5em 0 0.5em
    font-weight: 600
    line-height: 16px
    color: #283848

.role
    color: #2693FF
</style>
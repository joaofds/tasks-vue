<script>
export default {
    name: 'SideNav',
    data() {
        return {

        }
    }
}
</script>

<template>
    <nav>
        <div class="logo">
            <img src="@/assets/images/logo.svg" alt="logo">
        </div>
        <div class="nav-buttons">
            
        </div>
    </nav>
</template>

<style lang="stylus" scoped>
nav
    width: 106px
    height: 100vh
    background-color: #2693FF

.logo
    display: flex
    align-content: center
    justify-content: center

.logo img
    margin-top: 1.5em
</style>
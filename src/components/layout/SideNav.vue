<script>
export default {
    name: 'SideNav',
    data() {
        return {
            activeLink: null
        }
    }
}
</script>

<template>
    <div class="wrapp">
        <nav>
            <div class="logo"><img src="@/assets/images/logo.svg" alt="logo"></div>
            <div class="nav-links">
                <a href="#" @click="activeLink = 'dashboard'" :class="{'active': activeLink === 'dashboard'}">
                    <font-awesome-icon icon="chart-column" />
                    <div class="icon-label">Dashnoard</div>
                </a>
                <a href="#" @click="activeLink = 'tasks'" :class="{'active': activeLink === 'tasks'}">
                    <font-awesome-icon icon="circle-check" />
                    <div class="icon-label">Tarefas</div>
                </a>
                <a href="#" @click="activeLink = 'config'" :class="{'active': activeLink === 'config'}">
                    <font-awesome-icon icon="gears" />
                    <div class="icon-label">Configurações</div>
                </a>
            </div>
        </nav>
    </div>
</template>

<style lang="stylus" scoped>
.wrapp
    display: flex

nav
    width: 106px
    height: 100vh
    background-color: #2693FF

.logo
    margin-top: 1em
    margin-bottom: auto
    display: flex
    align-items: center
    justify-content: center

.nav-links
    height: 85%
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column

.nav-links a
    margin: 0.5em 0 0.5em 0
    width: 100%
    height: 83px
    color: #fff
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    text-decoration: none

.icon-label
    font-size: 14px
    font-weight: 400

.nav-links svg
    font-size: 32px

.nav-links a:hover 
    background-color: #1182F2

.active
    background-color: #1182F2
</style>
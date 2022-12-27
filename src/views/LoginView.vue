<script>
    export default {
        data() {
            return {
                username: 'user@example.com',
                password: '123456'
            }
        },
        methods: {
            
        }
    }
</script>

<template>
    <div class="wrapp">
        <div class="left-side">
            <div class="content">
                <div class="logo"><img src="../assets/images/logo.svg" alt="logo"></div>
                <h1>FACILITA<span>TASKS</span></h1>
                <p>Gestão de tarefas pessoais</p>
            </div>
        </div>
        <div class="right-side">
            <div class="content">
                <p>Entre com seus dados de acesso</p>
                <div class="form-display">
                    <label for="username">Nome de usuário ou email</label>
                    <input
                        type="text" 
                        name="username" 
                        id="username"
                        :value="username"
                    >
                </div>

                <div class="form-display">
                    <label for="username">Senha</label>
                    <input
                        type="password" 
                        name="password" 
                        id="password"
                        :value="password"
                    >
                </div>

                <div class="form-display">
                    <router-link to="/dashboard">
                        <button type="button">Entrar</button>
                    </router-link>
                </div>

                <div class="form-display">
                    <a href="#">Esqueci minha senha</a>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>

.wrapp
    display: flex

.left-side
    width: 624px
    height: 100vh
    background-color: #2693FF
    color: #fff
    display: flex
    align-items: center
    justify-content: center

.left-side .logo img
    width: 100px
    height: 100px

.left-side .content
    line-height: 1.2

.left-side .content h1
    font-size 40px
    letter-spacing: 2px
    font-weight: 600

.left-side .content h1 span
    font-weight: 350

.right-side
    width: 70vw
    display: flex
    align-items: center
    justify-content: center

.right-side p
    font-weight: 600
    margin-bottom: 2em

.form-display
    margin-bottom: 0.8em

label
    display: block
    font-weight: 400
    margin-bottom: 0.2em

input
    width: 365px
    height: 55px
    border-radius: 5px
    padding: 8px
    font-size: 25px
    background-color: #fff
    border: #BFDAEB 2px solid

input:focus
    outline: #2693FF 2px solid

button
    width: 365px
    height: 55px
    font-size: 18px
    color: #fff
    border: none
    border-radius: 5px
    background-color: #1AD18F
    cursor: pointer

button:active 
    border: #18a06e 2px solid

a:link
    color: #2693FF
    text-decoration: none

a:visited
    color: #2693FF

</style>
<script>
    export default {
        data() {
            return {
                username: 'user@example.com',
                password: '123456'
            }
        },
        created() {
            let storage = localStorage.getItem('tasks')
            if(!storage) {
                // tasks para storage
                let tasks = [
                    { name: 'Planejar desenvolvimento do app.', description: '', category: '1', pending: false },
                    { name: 'Criar peojeto e configurar pacotes.', category: '2', pending: false },
                    { name: 'Montar telas HTML/CSS.', category: '2', pending: false },
                    { name: 'Separar componentes.', pending: false }, 
                    { name: 'Fazer a lógica javascript dos componentes.', pending: false }
                ]

                localStorage.setItem('tasks', JSON.stringify(tasks))
            }
        },
        methods: {
            
        }
    }
</script>

<template>
    <div>
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
                    <router-link to="/home">
                        <button type="submit" class="success">Entrar</button>
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
black = #283848
gray = #4E657B

.left-side
    width: 624px
    height: 100vh
    float: left
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
    height: 100vh
    display: flex
    align-items: center
    justify-content: center
    background-color: #fff

.right-side p
    font-weight: 600
    margin-bottom: 2em
    color: black

input
    width: 365px
    height: 55px

button
    width: 365px
    height: 55px

a:link
    color: #2693FF
    text-decoration: none

a:visited
    color: #2693FF

</style>
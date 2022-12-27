<script>
export default {
    name: 'Task',
    props: {
        task: { type: Object, required: true }
    },
    data() {
        return {
            
        }
    },
    computed: {
        // returna classe de acordo com estado atual ta tarefa.
        taskStateClass() {
            return {
                pending: this.task.pending,
                done: !this.task.pending
            }
        },
        taskTagPriorityClass() {
            return {
                pink: this.task.category == 1,
                yellow: this.task.category == 2
            }
        },
        randomId() {
            return 'checkbox-' + Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
        },
    }
}
</script>

<template>
    <div class="wrapp">
        <div class="task-box">
            <div class="task-info">
                <input type="checkbox" :id="randomId">
                <label
                    :for="randomId"
                    :id="randomId" 
                    :class="taskStateClass">
                    {{ task.name }}
                </label>
            </div>
            <div class="right-itens">
                <span class="tag" :class="taskTagPriorityClass">
                    {{ task.category == 1 ? "Urgente" : task.category == 2 ? "Importante" : ''}}
                </span>
                <span class="dropdown">
                    <button type="button"><font-awesome-icon icon="fas fa-ellipsis-v" /></button>
                    <div class="dropdown-content">
                        <div class="list">
                            <ul>
                                <li>Editar</li>
                                <li>Excluir</li>
                            </ul>
                        </div>
                        <div class="icon"><font-awesome-icon icon="fas fa-ellipsis-v" /></div>
                    </div>
                </span>
            </div>

        </div>
    </div>
</template>

<style lang="stylus" scoped>
white = #fff
primary = #2693FF
success = #0ED984
yellow = #FFC42E
pink = #FF2E79
default = #E2EEF5

.yellow
    background-color: yellow

.pink
    background-color: pink

.wrapp
    display: flex

.task-box
    width: 633px
    height: 64px
    border-radius: 8px
    background-color: white
    margin-bottom: 0.5em
    display: flex
    align-items: center
    justify-content: space-between

.task-info
    padding: 12px

.task-info > div
    display: inline

.task-info input
    display: none

.task-info input + label:before
    width: 32px
    height: 33px
    content: ''
    border-radius: 4px
    background-color: default
    border: none
    display: inline-block
    vertical-align: middle
    margin-right: 0.5em
    margin-bottom: 0.2em

.task-info input:checked + label:before
    color: white
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='12' viewBox='0 0 17 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.03137 11.8026L16.2689 1.64718C16.5358 1.38245 16.5375 0.951463 16.2727 0.684577L15.7934 0.20129C15.5286 -0.0655959 15.0977 -0.0672972 14.8308 0.197433L5.55977 9.39407L1.64718 5.44989C1.38245 5.18301 0.951463 5.1813 0.684577 5.44604L0.20129 5.92541C-0.0655957 6.19014 -0.0672974 6.62113 0.197433 6.88801L5.06876 11.7987C5.33349 12.0656 5.76448 12.0673 6.03137 11.8026Z' fill='white'/%3E%3C/svg%3E")
    background-repeat: no-repeat
    background-position: center
    background-color: success

.right-itens
    display: flex
    justify-content: flex-end

.tag
    padding-left: 10px
    padding-right: 10px
    color: white
    border-radius: 32px
    margin-right: 2em

.dropdown
    position: relative
    display: inline-block
    margin-right: 1em

.dropdown button
    width: 32px
    border: none
    background-color: white
    cursor: pointer

.dropdown svg,
.dropdown-content svg
    font-size: 18px

.dropdown-content
    display: none
    width: 108px
    height: 74px
    border-radius: 4px
    right: 0.1em
    top: -0.5em
    background-color: white
    box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);
    position: absolute
    z-index: 10

.dropdown:hover .dropdown-content
    display: block

.dropdown-content li
    cursor: pointer
    color: #748CA5
    list-style: none

.dropdown-content li:nth-child(1)
    margin-left: -12px
    margin-right: 4px
    margin-top: 10px
    color: #748CA5

.dropdown-content li:nth-child(2)
    margin-left: -12px
    margin-right: 4px
    margin-top: 5px
    line-height: 18px
    color: #748CA5

.dropdown-content li:hover
    color: #5D7893
    font-weight: 500

.dropdown-content .icon
    position: absolute
    right: 0.8em
    top: 0.5em

.dropdown-content .icon svg
    color: primary

</style>
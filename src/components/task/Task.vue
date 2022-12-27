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
                urgent: this.task.category == 1,
                important: this.task.category == 2
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
            <span :class="taskTagPriorityClass">
                {{ task.category == 1 ? "Urgente" : task.category == 2 ? "Importante" : ''}}
            </span>
            <span class="drop-down">
                <a href=""><font-awesome-icon icon="fas fa-ellipsis-v" /></a>
            </span>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
write = #fff
success = #0ED984
yellow = #FFC42E
pink = #FF2E79
default = #E2EEF5

.wrapp
    display: flex

.task-box
    width: 633px
    height: 64px
    border-radius: 8px
    background-color: write
    margin-bottom: 0.5em
    display: flex
    align-items: center
    justify-content: flex-start

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
    color: write
    background-image: url("data:image/svg+xml,%3Csvg width='16' height='12' viewBox='0 0 17 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.03137 11.8026L16.2689 1.64718C16.5358 1.38245 16.5375 0.951463 16.2727 0.684577L15.7934 0.20129C15.5286 -0.0655959 15.0977 -0.0672972 14.8308 0.197433L5.55977 9.39407L1.64718 5.44989C1.38245 5.18301 0.951463 5.1813 0.684577 5.44604L0.20129 5.92541C-0.0655957 6.19014 -0.0672974 6.62113 0.197433 6.88801L5.06876 11.7987C5.33349 12.0656 5.76448 12.0673 6.03137 11.8026Z' fill='white'/%3E%3C/svg%3E")
    background-repeat: no-repeat
    background-position: center
    background-color: success

.urgent
    padding-left: 10px
    padding-right: 10px
    color: write
    background-color: pink
    border-radius: 32px
    text-align: right

.important
    padding-left: 10px
    padding-right: 10px
    color: write
    background-color: yellow
    border-radius: 32px
</style>
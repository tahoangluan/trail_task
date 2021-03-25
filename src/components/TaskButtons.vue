<template>
    <div class="d-flex justify-content-center flex-column button-container">
        <button class="m-2 task-btn" @click="$router.push('/task1')">Task 1</button>
        <button class="m-2 task-btn" @click="$router.push('/task2')">Task 2</button>
        <button class="m-2 task-btn" @click="$router.push('/task3')">Task 3</button>
        <button class="m-2 task-btn" @click="$router.push('/task4')">Task 4</button>
    </div>
</template>

<script>
    export default {
        name: "TaskButtons"
    }
</script>

<style scoped>
.task-btn{
    background-color: #0089cf;
    border-radius: 3px;
    color: #fff;
    border-color: #0089cf;
}
.task-btn :hover{
    background-color: #036699;
}
</style>
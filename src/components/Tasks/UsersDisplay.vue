<template>
    <div>
        <h1 class="d-flex justify-content-between">
            Task 2: Query datasets from url and display it graphically
            <button class="btn btn-sm btn-secondary float-right mr-2" @click="$router.go(-1)">GO BACK</button>
        </h1>
        <userTable :users="this.findAllUser()"
        ></userTable>
    </div>

</template>

<script>
    import {findAllUser} from "@/task2";
    import UserTable from "@/components/UserTable";
    export default {
        name: "UsersDisplay",
        components: {
            userTable:UserTable},
        props: {
            msg: String
        },
        data() {
            return {
                user: []
            }
        },
        methods:{
            findAllUser(){
                return findAllUser()

            }
        }

    }
</script>

<style scoped>

</style>
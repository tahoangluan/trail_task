<template>
    <div class="d-flex justify-content-center">
        <table>
            <tr>
                <th class="p-1">Id</th>
                <th class="p-1">First Name</th>
                <th class="p-1">Last Name</th>
                <th class="p-1">Email</th>
                <th class="p-1">Profile Picture</th>
            </tr>

            <tr v-for="(user, i) in this.users" :key="i">
                <td class="p-1">{{ user.id }}</td>
                <td class="p-1">{{ user.first_name }}</td>
                <td class="p-1">{{ user.last_name }}</td>
                <td class="p-1">{{ user.email }}</td>
                <td class="p-1">
                    <img :src="user.avatar"></td>
            </tr>
        </table>
    </div>
</template>

<script>

    export default {
        name: "UserTable",
        props:{
          users: Array
        },
        data() {
            return {
            }
        },
    }
</script>

<style scoped>
    table, th, td {
        border: 1px solid black;
    }
</style>
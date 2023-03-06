<template>
    <div class="greetings">Hello {{ msg }}</div>
    <div>
        <h1>Users</h1>
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
            <tr v-for="user in this.users" :key="user.id" id="user-list">
                <td>
                    {{ user.name }}
                </td>
                <td>
                    {{ user.email }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "UserList",
    data() {
        return {
            test: "123",
            max: 50,
            users: [],
        };
    },
    mounted() {
        axios
            .get("/users/index")
            .then((response) => (this.users = response.data.users));
    },
    props: {
        msg: String,
    },
};
</script>

<style scoped>
h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: 10px;
}

.greetings h1 {
    text-align: center;
}

@media (minwidth: 1024px) {
    .greetings h1 {
        text-align: left;
    }
}
</style>

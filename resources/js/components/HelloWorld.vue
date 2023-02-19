<template>
    <div class="greetings">
        <h1 class="green">{{ msg }}</h1>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
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

<template>
    <div class="book-box">
        <h2>{{ bookName }}</h2>
        <span>Author: {{ bookAuthor }}</span>
        <span>Year: {{ bookYear }}</span>
        <button @click="getInfo"> show book info</button>
        <p v-show="show">{{ bookInfo }}</p>
    </div>
</template>
<script>
export default {
    name: 'Book',

    props: {
        bookName: String,
        bookAuthor: String,
        bookYear: String,
        bookInfo: String
    },

    data() {
        return {
            show: false,
        }
    },

    methods: {
        getInfo() {
            this.show = !this.show
        }
    },
}
</script>
<style lang="scss">
    .book-box {
        width: 200px;
        border: 1px solid black;
        border-radius: 30px;
        display: flex;
        gap: 10px;
        flex-direction: column;
        align-items: center;
        padding-bottom: 10px
    }
</style>
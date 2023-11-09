<template>
    <Book v-for="item in bookList" :key="item.id" :book-name="item.bookName" :book-year="item.bookYear"
        :book-author="item.bookAuthor" :book-info="item.bookInfo" />
</template>
<script>
import Book from './Book.vue'
export default {
    components: {
        Book
    },
    data() {
        return {
            bookList: [
                {
                    bookName: 'WWWWWW',
                    bookYear: '1983',
                    bookAuthor: 'WWWWWWW',
                    bookInfo: 'kjhghvjbjhvhgvn bnvhvchjvh jghghgjghf jhvhjgf hfjhf jgh'
                },
                {
                    bookName: 'Aaaaaa',
                    bookYear: '1900',
                    bookAuthor: 'AAAAAAA',
                    bookInfo: 'kjgftzfhjgjhgvhgv+ěš+š jhv+hgjěvšn+ čn+ghv+hb čnb+ čhjg+vjčgh +čhg +jm'
                },
                {
                    bookName: 'Ssssssssssssss',
                    bookYear: '1600',
                    bookAuthor: 'SSSSSSSS',
                    bookInfo: 'ujhgfchgvjhfjhgv jhf jh jhf ghjvhgf hgfcx gdfx gfc g chgvvghvchgcvgh   hgchgcghc  hgchgcfghcgh'
                },
                {
                    bookName: 'DDDDddddd',
                    bookYear: '1975',
                    bookAuthor: 'XXXXXXXXXXXX',
                    bookInfo: 'kjbhgvhbj jhvhg  chgc hgcfgxhgfg jjscym sjcsjhgjhgjhsgvcj  sjhgcjhsgvhjcgsjhc shcgjsgjchs'
                }
            ]
        }
    },
}
</script>
<style lang="scss">
</style>
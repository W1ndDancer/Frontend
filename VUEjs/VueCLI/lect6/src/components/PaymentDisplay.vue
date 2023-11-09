<template>
    <div v-for="item in items" :key="item.id">
        {{ item }}
    </div>
</template>
<script>
export default {
    name: 'PaymentDisplay',
    props: {
        items: Array,
    },

    data() {
        return {

        }
    },
    methods: {

    },
}
</script>
<style lang="scss"></style>
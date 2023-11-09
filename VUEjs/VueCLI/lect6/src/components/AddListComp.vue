<template>
    <div>
        <input v-model="category" type="text" placeholder="категория" /> <br>
        <input v-model="value" type="text" placeholder="значение" /> <br>
        <input v-model="data" type="text" placeholder="дата" /> <br>
        <button @click="onSave">Сохранить</button>
    </div>
</template>
<script>
export default {
    name: 'AddListComp',

    data() {
        return {
            category: '',
            value: '',
            data: ''
        }
    },
    methods: {
        onSave() {
            const data = {
                data: this.data || this.getCurrentDate,
                category: this.category,
                value: +this.value,
            }
            this.$emit('addNewPay', data)
        }
    },
    computed: {
        getCurrentDate() {
            const today = new Date()
            const d = today.getDate()
            const m = today.getMonth() + 1
            const y = today.getFullYear()
            return `${d}.${m}.${y}`
        }
    }
}
</script>
<style lang=""></style>
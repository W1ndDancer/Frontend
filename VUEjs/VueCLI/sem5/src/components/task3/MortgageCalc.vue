<template>
    <div>
        <input type="text" placeholder="Сумма кредита" v-model="creditAmount">
        <input type="text" placeholder="Срок кредита" v-model="creditTerm">
        <input type="text" placeholder="Процентная ставка" v-model="loanRate">
    </div>
    <p>Ежемесячный платеж {{ calculate.monthlyPayment}}</p>
    <p>Общий платеж {{ calculate.TotalPayment }}</p>
</template>
<script>
export default {
    name: 'MortgageCalc',
    data() {
        return {
            creditAmount: null,
            creditTerm: null,
            loanRate: null,
        }
    },

    computed: {
        calculate: function() {
            const monthlyPayment = (this.creditAmount / this.creditTerm) * (this.loanRate / 100 + 1)
            const TotalPayment = this.creditAmount * (this.loanRate / 100 + 1)
            return {monthlyPayment, TotalPayment}
        }
    },
}
</script>
<style lang="">
    
</style>
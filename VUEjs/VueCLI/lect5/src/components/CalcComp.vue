<template>
    <input type="text" v-model="oper1">
    <input type="text" v-model="oper2">
    {{ res }}
    <br>
    <button @click="calcRes(op)" v-for="op in operations" :key="op.id">
        {{ op }}
    </button>
    <div v-show="err">
        {{ err }}
    </div>
    <div>
        <template v-if="res < 0">Результат отрицательное число</template>
        <template v-if="res >= 0 && res <= 100">Результат больше 0 и меньше 100</template>
        <template v-if="res > 100">Результат больше 100</template>
    </div>
    <div>
        Число Фиббоначчи для первого поля ввода {{ fibComputed1 }}
        <br>
        Число Фиббоначчи для второго поля ввода {{ fibComputed2 }}
    </div>
    <div>
        <h3>Истоия операций</h3>
        <div v-for="log in logs" :key="log.id">
            {{ log }}
        </div>
    </div>
</template>
<script>
export default {
    name: 'CalcComp',
    data() {
        return {
            oper1: '',
            oper2: '',
            operations: ['+', '-', '*', '/'],
            res: '',
            err: '',
            logs: {},
        }
    },

    methods: {
        add() {
            this.res = Number(this.oper1) + Number(this.oper2)
        },
        minus() {
            this.res = Number(this.oper1) - Number(this.oper2)
        },
        mult() {
            this.res = Number(this.oper1) * Number(this.oper2)
        },
        div() {
            // this.res = Number(this.oper1) + Number(this.oper2)
            const { oper1, oper2 } = this;
            if (Number(oper2) === 0) {
                this.err = 'На 0 делить нельзя'
            } else {
                this.res = oper1 / oper2
            }
        },
        fib(n) {
            return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2)
        },
        calcRes(operation = '+') {
            this.err = ''
            switch (operation) {
                case '+':
                    this.add()
                    break;
                case '-':
                    this.minus()
                    break;
                case '*':
                    this.mult()
                    break;
                case '/':
                    this.div()
                    break;
                default:
                    break;
            }
            this.logs[Date.now()] = `${this.oper1} ${operation} ${this.oper2} = ${this.res}`
        }
    },

    computed: {
        fibComputed1() {
            return this.fib(this.oper1)
        },
        fibComputed2() {
            return this.fib(this.oper2)
        }
    }
}
</script>
<style lang="scss"></style>
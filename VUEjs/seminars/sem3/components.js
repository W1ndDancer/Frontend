
const CountComponent = {
    template: `
        <button @click="minus"> - </button>
        <span>&nbsp;{{count}}&nbsp;</span>
        <button @click="plus"> + </button>
    `,
    data() {
        return {
            count: 0,
        }
    },
    methods: {
        plus() {
            this.count++
        },
        minus() {
            this.count--
        }
    },
};
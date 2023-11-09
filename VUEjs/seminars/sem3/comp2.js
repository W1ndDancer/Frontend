const Task2 = {
    template: `
            <div class="TASK 2">
                <h2>TASK 2</h2>
                <p>Создайте компонент списка дел, в котором можно добавлять и удалять элементы. Каждый элемент списка должен иметь кнопку удаления, при нажатии на которую элемент списка будет удаляться.</p>
                <input type="text" v-model="task">
                <span>&nbsp;</span>
                <button @click="addTask">Добавить</button>
                <br>
                <ul>
                    <li v-for="(item, index) in tasks">{{ item }}&nbsp;<button @click="deleteTask(index)">Удалить</button></li>
                </ul>
            </div>
    `,
    data() {
        return {
            task: '',
            tasks: [],
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.task),
                this.task = ''
        },
        deleteTask(i) {
            this.tasks.splice(i, 1);
        }
    },
};
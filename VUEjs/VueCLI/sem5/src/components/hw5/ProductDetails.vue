<template>
    <div class="task">
        <h3>Задание</h3>
        <p>Вы разрабатываете приложение для интернет-магазина и у вас есть компонент Vue под названием "ProductDetails".</p>
        <p>Компонент отображает детали о конкретном продукте, включая его название, цену и статус доступности. Внутри
            компонента
            "ProductDetails" создайте свойство "product" с объектом, представляющим информацию о продукте. Объект должен
            иметь
            свойства "name" (название продукта), "price" (цена продукта) и "available" (флаг, указывающий на доступность
            продукта).</p>
        <p>Используя вычисляемое свойство, назовите его "formattedPrice", которое будет возвращать форматированную цену
            продукта
            со знаком валюты. Например, если цена равна 99.99, вычисляемое свойство должно вернуть строку "$99.99". </p>
        <p> В компоненте "ProductDetails" отобразите название продукта, его форматированную цену и статус доступности. Если
            продукт доступен, отобразите текст "Available", в противном случае - "Out of stock".</p>
    </div>
    <div class="hw5">
        <div class="product" v-for="(item, index) in formatedPrice">
            <h3 class="prod__name">{{ item.name }}</h3>
            <p class="prod__price" @capture="getCount(index)">{{ item.price }}</p>
            <p class="prod_available" v-if="item.available === true">Available</p>
            <p class="prod_not-available" v-else>Out of stock</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            product: [
                {
                    name: 'prod1',
                    price: 99.99,
                    available: true
                },
                {
                    name: 'prod2',
                    price: 88.88,
                    available: false
                },
                {
                    name: 'prod3',
                    price: 199.99,
                    available: false
                },
                {
                    name: 'prod4',
                    price: 399.99,
                    available: false
                }
                ,
                {
                    name: 'prod5',
                    price: 69.99,
                    available: true
                }
            ],
            count: 0
        }
    },
    methods: {
        getCount(n) {
            console.log(n);
            return this.count = n
        }
    },
    computed: {
        formatedPrice() {
            for (let index = 0; index < this.product.length; index++) {
                this.product[index].price = `$${this.product[index].price}`
            }
            return this.product
        }
    }
}
</script>
<style lang="css">
.hw5 {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
}

.product {
    background-color: lightcyan;
    width: 150px;
    border: 2px solid black;
    border-radius: 10px;
    text-align: center;
}

.prod_available {
    color: green;
}

.prod_not-available {
    color: red;
}
</style>
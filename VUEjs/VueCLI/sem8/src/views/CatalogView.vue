<template>
    <div>
        <h2>Каталог товаров</h2>
        <ul>
            <li v-for="product in paginatedProducts" :key="product.id">{{ product.name }}</li>
        </ul>

        <div v-if="totalPages > 1" class="pagination">
            <router-link v-for="pageNumber in totalPages" :key="pageNumber" :to="getPageLink(pageNumber)">
                {{ pageNumber }}
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            products: [
                { id: 1, name: 'Товар 1' },
                { id: 2, name: 'Товар 2' },
                { id: 3, name: 'Товар 3' },
                { id: 4, name: 'Товар 4' },
                { id: 5, name: 'Товар 5' },
                { id: 6, name: 'Товар 6' },
                { id: 7, name: 'Товар 7' },
                { id: 8, name: 'Товар 8' },
                { id: 9, name: 'Товар 9' },
                { id: 10, name: 'Товар 10' },
                { id: 11, name: 'Товар 11' },
                { id: 12, name: 'Товар 12' },
                { id: 13, name: 'Товар 13' },
            ],
            itemsPerPage: 5,
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.products.length / this.itemsPerPage);
        },
        paginatedProducts() {
            const pageNumber = this.getCurrentPageNumber();
            const startIndex = (pageNumber - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.products.slice(startIndex, endIndex);
        },
    },
    methods: {
        getCurrentPageNumber() {
            const pageNumberParam = parseInt(this.$route.params.pageNumber);
            return isNaN(pageNumberParam) || pageNumberParam < 1 ? 1 : pageNumberParam;
        },
        getPageLink(pageNumber) {
            return `/catalog/${pageNumber}`;
        },
    },
}
</script>
<style lang="">
    
</style>
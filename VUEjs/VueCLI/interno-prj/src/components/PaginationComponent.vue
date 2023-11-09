<template >
    <div class="pagination">
        <div class="pagination__item">
            <p class="text text_16">01</p>
        </div>
        <div class="pagination__item">
            <p class="text text_16">02</p>
        </div>
        <div class="pagination__item">
            <p class="text text_16">03</p>
        </div>
        <div class="pagination__item">
            <svg xmlns="http://www.w3.org/2000/svg" width="53" height="52" viewBox="0 0 53 52" fill="none">
                <path d="M23.5571 32L29.5 25.3143L23.5571 18.6286" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </div>
    </div>
</template>
<style scoped lang="scss">
@import '@/assets/styles/_vars-mixins.scss';
@import '@/assets/styles/style.scss';
.pagination {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    gap: 20px;

    &__item {
        width: 52px;
        height: 52px;
        border: 1px solid $primaryColor1;
        border-radius: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
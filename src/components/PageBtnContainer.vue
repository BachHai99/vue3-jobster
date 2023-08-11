<template>
    <section>
        <button type="button" class="prev-btn" @click="prevPage">
            <unicon name="angle-double-left" fill="#3b81f6" width="40px" height="40px"></unicon>
            {{ $t("prevBtn") }}
        </button>
        <button type="button" v-for="(pageNumber, idx) in pages" :key="idx"
            :class="[pageNumber === page ? 'pageBtn active' : 'pageBtn']" @click="store.changePage(pageNumber)">{{
                pageNumber }}</button>
        <button type="button" class="next-btn" @click="nextPage">
            {{ $t("nextBtn") }}
            <unicon class="next-icon" name="angle-double-right" fill="#3b81f6" width="40px" height="40px"></unicon>
        </button>
    </section>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { allJobsStore } from '@/stores/allJobsStore';

const store = allJobsStore();
const { page, numOfPages } = storeToRefs(store)

const pages = Array.from({ length: numOfPages.value }, (_, index) => index + 1)

const nextPage = () => {
    let newPage = page.value + 1;
    if (newPage > numOfPages.value) {
        newPage = 1;
    }
    console.log(newPage);
    store.changePage(newPage)
}

const prevPage = () => {
    let newPage = page.value - 1;
    if (newPage < 1) {
        newPage = numOfPages.value
    }
    store.changePage(newPage)
}
</script>

<style lang="scss" scoped>
section {
    height: 6rem;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: end;
    flex-wrap: wrap;
    gap: 1rem;
}

.btn-container {
    background: var(--primary-100);
    border-radius: var(--borderRadius);
}

.pageBtn {
    background: #DBE9FE;
    border-color: transparent;
    width: 50px;
    height: 40px;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--primary-500);
    transition: var(--transition);
    border-radius: var(--borderRadius);
    cursor: pointer;
}

.active {
    background: var(--primary-500);
    color: var(--white);
}

.prev-btn,
.next-btn {
    width: 100px;
    height: 40px;
    background: var(--white);
    border-color: transparent;
    border-radius: var(--borderRadius);
    color: var(--primary-500);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: var(--transition);
}

.prev-btn:hover,
.next-btn:hover {
    background: var(--primary-500);
    color: var(--white);
}


</style>
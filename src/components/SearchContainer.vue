<template>
    <section>
        <form action="">
            <h4 style="text-align: left;">{{ $t('searchForm') }}</h4>
            <div class="form-center"> 
                <!-- search -->
                <form-row type="text" name="search" v-model="search" />
                <!-- search status -->
                <form-row-select name="searchStatus" labelText="search status" v-model="searchStatus" :list="statusOptionsData"  />
                <!-- search type -->
                <form-row-select name="searchType" labelText="search type" v-model="searchType" :list="typeOptionsData" />
                <!-- search sort -->
                <form-row-select name="sort" v-model="sort" :list="sortOptions" />
                <button class="btn btn-block btn-danger" :disabled="isLoading" @click="handleSubmit">{{ $t("clearBtn") }}</button>
            </div>
        </form>
    </section>
</template>

<script setup>
import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import { jobStore } from '@/stores/jobStore';
import { allJobsStore } from '@/stores/allJobsStore';
import FormRow from './FormRow.vue';
import FormRowSelect from './FormRowSelect.vue';

const storeAllJobs = allJobsStore()
const storeJob = jobStore()

const { isLoading, search, searchStatus, searchType, sort, sortOptions } = storeToRefs(storeAllJobs)

const { jobTypeOptions, statusOptions } = storeToRefs(storeJob)

const typeOptionsData = ['all', ...jobTypeOptions.value]
const statusOptionsData = ['all', ...statusOptions.value]

watch([search.value, sort.value, searchStatus.value, searchType.value], () => {
    storeAllJobs.getAllJobs();
})

const handleSubmit = (e) => {
    e.preventDefault();
    storeAllJobs.clearFilters();
}
</script>

<style lang="scss" scoped>
.form {
    width: 100%;
    max-width: 100%;
}

.form-input,
.form-select,
.btn-block {
    height: 35px;
}

.form-row {
    margin-bottom: 0;
}

.form-center {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2rem;
    row-gap: 0.5rem;
}

h5 {
    font-weight: 700;
}

.btn-block {
    align-self: end;
    margin-top: 1rem;
}

@media (min-width: 768px) {
    .form-center {
        grid-template-columns: 1fr 1fr;
    }
}

@media (min-width: 992px) {
    .form-center {
        grid-template-columns: 1fr 1fr 1fr;
    }

    .btn-block {
        margin-top: 0;
    }
}</style>
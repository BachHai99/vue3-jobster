<template>
    <section>
        <form action="">
            <h4>{{ $t('searchForm') }}</h4>
            <div class="form-center"> 
                <input type="text" name="search" v-model="search" @input="handleSearch">
                <select name="searchStatus" id="searchStatus" :value="searchStatus" @change="handleSearch">
                    <option v-for="(status, index) in statusOptionsData" :key="index" :value="status">{{ status }}</option>
                </select>
                <select name="searchType" id="searchType" :value="searchType" @change="handleSearch">
                    <option v-for="(jobType, index) in jobTypeOptionsData" :key="index" :value="jobType">{{ jobType }}
                    </option>
                </select>
                <select name="sort" id="sort" :value="sort" @change="handleSearch">
                    <option v-for="(sort, index) in sortOptions" :key="index" :value="jobType">{{ sort }}
                    </option>
                </select>
                <button class="btn btn-block btn-danger" :disabled="isLoading" @click="handleSubmit">{{ $t("clearBtn") }}</button>
            </div>
        </form>
    </section>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { jobStore } from '@/stores/jobStore';
import { allJobsStore } from '@/stores/allJobsStore';

const storeAllJobs = allJobsStore()
const storeJob = jobStore()

const { isLoading, search, searchStatus, searchType, sort, sortOptions } = storeToRefs(storeAllJobs)

const { jobTypeOptions, statusOptions } = storeToRefs(storeJob)

const jobTypeOptionsData = ['all', ...jobTypeOptions.value]
const statusOptionsData = ['all', ...statusOptions.value]

const handleSearch = (e) => {
    if (isLoading.value) return;
    storeAllJobs.handleChange({ name: e.target.name, value: e.target.value });
}

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
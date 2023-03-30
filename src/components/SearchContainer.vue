<template>
    <section>
        <form action="">
            <h4>search form</h4>
            <div class="form-center">
                <input type="text" name="search" v-model="search" @input="handleSearch">
                <!-- <input type="text" :value="search"
                    @change="storeAllJobs.handleChange({ name: e.target.name, value: e.target.value })"> -->
                <!-- <select name="status" id="status"></select> -->
            </div>
        </form>
    </section>
</template>

<script setup>
import { storeToRefs } from 'pinia';
// import { jobStore } from '@/stores/jobStore';
import { allJobsStore } from '@/stores/allJobsStore';

const storeAllJobs = allJobsStore()
// const storeJob = jobStore()

// const { isLoading, search, searchStatus, searchType, sort, sortOptions } = storeToRefs(storeAllJobs)
const { search } = storeToRefs(storeAllJobs)

// const { jobTypeOptions, statusOptions } = storeToRefs(storeJob)

const handleSearch = (e) => {
    storeAllJobs.handleChange({ name: e.target.name, value: e.target.value });
}
</script>

<style lang="scss" scoped></style>
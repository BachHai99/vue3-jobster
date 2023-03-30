<template>
    <section>
        <form action="submit" class="form" @submit="handleSubmit">
            <h3>profile</h3>
            <div class="form-center">
                <input type="text" name="name" v-model="name">
                <input type="text" name="email" v-model="email">
                <input type="text" name="lastName" v-model="lastName">
                <input type="text" name="location" v-model="location">
                <button type="submit" class="btn btn-block" :disabled="isLoading">{{ isLoading ? 'Please wait...' : 'save changes' }}</button>
            </div>
        </form>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { userStore } from '@/stores/userStore';

const storeUsers = userStore();
const { isLoading, user } = storeToRefs(storeUsers)

const name = ref(user.value?.name || '');
const email = ref(user.value?.email || '');
const lastName = ref(user.value?.lastName || '');
const location = ref(user.value?.location || '');

const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.value || !email.value || !lastName.value || !location.value) {
        console.log('please fill out all..');
        return
    }
    storeUsers.updateUser({name: name.value, email: email.value, lastName: lastName.value, location: location.value})
}

</script>

<style lang="scss" scoped>
section {
    border-radius: var(--borderRadius);
    width: 100%;
    background: var(--white);
    padding: 3rem 2rem 4rem;
    box-shadow: var(--shadow-2);
}

h3 {
    margin-top: 0;
}

.form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
}

.form-row {
    margin-bottom: 0;
}

.form-center {
    display: grid;
    row-gap: 0.5rem;
}

.form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
}

.btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;

    button {
        height: 35px;
    }
}

.clear-btn {
    background: var(--grey-500);
}

.clear-btn:hover {
    background: var(--black);
}

@media (min-width: 992px) {
    .form-center {
        grid-template-columns: 1fr 1fr;
        align-items: center;
        column-gap: 1rem;
    }

    .btn-container {
        margin-top: 0;
    }
}

@media (min-width: 1120px) {
    .form-center {
        grid-template-columns: 1fr 1fr 1fr;
    }

    .form-center button {
        margin-top: 0;
    }
}
</style>
<template>
    <section>
        <form action="submit" class="form" @submit="handleSubmit">
            <h3>{{$t('profile')}}</h3>
            <div class="form-center">
                <form-row type="text" name="firstName" labelText="first name" v-model="userData.name" />
                <form-row type="text" name="lastName" labelText="last name" v-model="userData.lastName" />
                <form-row type="text" name="email" v-model="userData.email" />
                <form-row type="text" name="location" v-model="userData.location" />
                <button type="submit" class="btn btn-block" :disabled="isLoading">{{ isLoading ? $t('pleaseWaitBtn') :  $t('saveChangesBtn') }}</button>
            </div>
        </form>
    </section>
</template>

<script setup>
import { reactive, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { toast } from 'vue3-toastify';
import { userStore } from '@/stores/userStore';
import { getUserFromLocalStorage } from '@/utils/localStorage';
import FormRow from '@/components/FormRow.vue';

const storeUsers = userStore();
const { isLoading, user } = storeToRefs(storeUsers)

const userData = reactive({
    name: user?.value.name || '',
    lastName: user?.value.lastName || '',
    email: user?.value.email || '',
    location: user?.value.location
})

const handleSubmit = (e) => {
    e.preventDefault();
    const { name, lastName, email, location } = userData;
    if (!name || !lastName || !email || !location) {
        toast.error('please fill out all fields')
        return
    }
    storeUsers.updateUser(userData)
    toast.success('updated success!');
}

watch(getUserFromLocalStorage, console.log('user changed'));

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
<template>
  <section class="full-page">
    <form action="submit" class="form" @submit="onSubmit">
      <logo />
      <h3>{{ values.isMember ? "login" : "register" }}</h3>
     
      <!-- <h1>{{$t('welcome')}}</h1> -->
      <!-- name field -->
      <!-- <form-row
        v-if="!values.isMember"
        type="text"
        name="name"
        :value="values.name"
      ></form-row> -->
      <input v-if="!values.isMember" type="text" v-model="values.name" />
      <!-- {{values.value.name}} -->
      <!-- email field -->
      <!-- <form-row type="email" name="email" :value="values.email" :handleChange="handleChange"></form-row> -->
      <!-- {{ values.email }} -->
      <input type="text" v-model="values.email" />
      <!-- password field -->
      <!-- <form-row
        type="password"
        name="password"
        :value="values.password"
        :handleChange = "handleChange"
      ></form-row> -->
      <input type="password" v-model="values.password" />
      <button class="btn btn-block">
        {{ isLoading ? "loading..." : "submit" }}
      </button>
      <button class="btn btn-block btn-hipster" :disabled="isLoading" @click="store.loginUser({email: 'testUser@test.com', password: 'secret'})" >
        {{ isLoading ? "loading..." : "demo app" }}
      </button>
      <p>{{ values.isMember ? "Not a member yet?" : "Already a member?" }}</p>
      <button type="button" @click="toggleMember" class="member-btn">
        {{ values.isMember ? "Register" : "Login" }}
      </button>
    </form>
  </section>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
// import { toast } from "vue3-toastify";
// import FormRow from "@/components/FormRow.vue";
import Logo from "@/components/Logo.vue";
import { userStore } from "@/stores/userStore";

const store = userStore();
const { isLoading, user } = storeToRefs(store);

const router = useRouter();

// const { loginUser, logoutUser } = store;

const values = ref({
  name: "",
  email: "",
  password: "",
  isMember: true,
});



watch(user, () => {
  if (user) {
    setTimeout(() => {
      router.push({ path: "/" });
    }, 2000);
  }
});

const toggleMember = () => {
  values.value.isMember = !values.value.isMember;
};

// const handleChange = (e) => {
//   // const { name, value } = e.target;
//   // values.value[name] = value
//   // console.log(values.value.email);
//   console.log(e);
// };

const onSubmit = (e) => {
  e.preventDefault();
  console.log("submit");
  // const { name, email, password, isMember } = values.value;
  // // const name = values.value.name;
  // console.log(name, email, password, isMember);
  // //   console.log(name, email, password);
  // if (!email || !password || (!isMember && !name)) {
  //   // toast.error("Please fill out all fields");
  //   return;
  // }
  // if (isMember) {
  //   // console.log("run");
  //   store.loginUser({ email: values.value.email, password: values.value.password });
  //   return;
  // }
  // store.logoutUser();
};
</script>

<style lang="scss" scoped>
section {
  display: grid;
  align-items: center;
}
.logo {
  display: block;
  margin: 0 auto;
  margin-bottom: 1.38rem;
}
.form {
  max-width: 400px;
  border-top: 5px solid var(--primary-500);
}

h3 {
  text-align: center;
}
p {
  margin: 0;
  margin-top: 1rem;
  text-align: center;
}
.btn {
  margin-top: 1rem;
}
.member-btn {
  background: transparent;
  border: transparent;
  color: var(--primary-500);
  cursor: pointer;
  letter-spacing: var(--letterSpacing);
}
</style>

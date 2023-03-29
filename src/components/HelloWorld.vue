<template>
  <p>hello</p>
  <h1>{{ isSidebarOpen ? "open" : "close" }}</h1>
  <button @click="loginUser">login</button>
  {{user?.age}}
  <button @click="logoutUser">logout</button>
  <section>
    <form @submit.prevent="createPost">
      <div>
        <label for="userId">UserID:</label>
        <input type="text" id="userId" v-model="postData.userId" />
      </div>
      <div>
        <label for="title">Title: </label>
        <input type="text" id="title" v-model="postData.title" />
      </div>
      <div>
        <label for="body">Body: </label>
        <textarea
          id="body"
          rows="6"
          cols="22"
          v-model="postData.body"
        ></textarea>
      </div>
      <button>Create Post</button>
    </form>
  </section>
  <ul>
    <li v-for="(post, index) in posts" :key="post.id">
      {{ index }} - {{ post.title }}
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { storeToRefs } from "pinia";
import customFetch from "@/utils/axios";
import { userStore } from "@/stores/userStore";

const store = userStore();

const { isSidebarOpen, user } = storeToRefs(store);

const { loginUser, logoutUser } = store

const posts = ref([]);
const postData = ref({
  userId: "",
  title: "",
  body: "",
});

onMounted(async () => {
  // axios
  //   .get("https://jsonplaceholder.typicode.com/posts")
  //   .then((resp) => (posts.value = resp.data));
  const resp = await customFetch.get("/posts");
  posts.value = resp.data;
  console.log(resp.data);
});

const createPost = () => {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", postData.value)
    .then((resp) => console.log(resp.data));
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

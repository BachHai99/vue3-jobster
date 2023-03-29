<template>
  <main>
    <nav>
        <logo />
    </nav>
    <div class="container page">
      <!-- info -->
      <div class="info">
        <h1>job <span>tracking</span>app</h1>
        <p>
          Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
          fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
          crucifix heirloom meggings bicycle rights.
        </p>
        <router-link to="/register" class="btn btn-hero">Login/Register</router-link>
      </div>
      <img :src="main" alt="job hunt" class="img main-img"/>
    </div>
  </main>
</template>

<script setup>
import Logo from '@/components/Logo.vue'
import main from '@/assets/images/main.svg'
</script>

<style lang="scss" scoped>
nav {
  width: var(--fluid-width);
  max-width: var(--max-width);
  margin: 0 auto;
  height: var(--nav-height);
  display: flex;
  align-items: center;
}
.page {
  min-height: calc(100vh - var(--nav-height));
  display: grid;
  align-items: center;
  margin-top: -3rem;
}
h1 {
  font-weight: 700;
  span {
    color: var(--primary-500);
  }
}
p {
  color: var(--grey-600);
}
.main-img {
  display: none;
}
@media (min-width: 992px) {
  .page {
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
  }
  .main-img {
    display: block;
  }
}
</style>

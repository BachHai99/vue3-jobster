<template>
  <nav>
    <div class="nav-center">
      <button type="button" class="toggle-btn" @click="store.toggleSidebar">
        <unicon name="align-left" fill="#3b82f6" width="35px" height="35px"></unicon>
      </button>
      <div>
        <h3 className='logo-text'>dashboard</h3>
      </div>
      <div v-if="languages">
        <span style="margin-left: 1rem; cursor: pointer;" v-for="(lng, index) in Object.keys(languages)" :key="index">
          <a v-if="$i18next.resolvedLanguage !== lng" @click="$i18next.changeLanguage(lng)">{{ languages[lng].nativeName
          }}</a>
          <strong v-if="$i18next.resolvedLanguage === lng" @click="$i18next.changeLanguage(lng)">{{
            languages[lng].nativeName }}</strong>
        </span>
      </div>
      <div class="btn-container">
        <button type="button" class="btn" @click="toggleShowLogout">
          <unicon name="user-circle" fill="white" width="22px" class="icon" />
          {{ user?.name }}
          <unicon name="angle-down" fill="white" width="22px"></unicon>
        </button>
        <div style="margin-top: 0.5rem;" :class="[showLogout ? 'dropdown show-dropdown' : 'dropdown']">
          <button class="dropdown-btn" type="btn" @click="store.clearStore">logout</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { userStore } from "@/stores/userStore";

const store = userStore();
const router = useRouter();
const { user } = storeToRefs(store);

const languages = ref({
  en: {
    nativeName: "English",
  },
  vn: {
    nativeName: "Vietnam",
  },
});

const showLogout = ref(false);
const toggleShowLogout = () => {
  showLogout.value = !showLogout.value;
};

watch(user, () => {
  if (!user.value) {
    // setTimeout(() => {
    router.push({ path: "/landing" });
    console.log('change route');
    // }, 1000);
  }
});
</script>

<style lang="scss" scoped>
nav {
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);

  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .nav-center {
      width: 90%;
    }

    .logo {
      display: none;
    }

    .logo-text {
      display: block;
    }
  }

  background: var(--white);
}

.logo {
  display: flex;
  align-items: center;
  width: 100px;
}

.nav-center {
  display: flex;
  width: 90vw;
  align-items: center;
  justify-content: space-between;
}

.toggle-btn {
  background: transparent;
  border-color: transparent;
  font-size: 1.75rem;
  color: var(--primary-500);
  cursor: pointer;
  display: flex;
  align-items: center;
}

.btn-container {
  position: relative;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 0.5rem;
  position: relative;
  box-shadow: var(--shadow-2);
}

.dropdown {
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  background: var(--primary-100);
  box-shadow: var(--shadow-2);
  padding: 0.5rem;
  text-align: center;
  visibility: hidden;
  border-radius: var(--borderRadius);
}

.show-dropdown {
  visibility: visible;
}

.dropdown-btn {
  background: transparent;
  border-color: transparent;
  color: var(--primary-500);
  letter-spacing: var(--letterSpacing);
  text-transform: capitalize;
  cursor: pointer;
}

.logo-text {
  display: none;
  margin: 0;
}
</style>

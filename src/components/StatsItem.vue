<template>
  <article>
    <header>
      <span class="count">{{ props.stat.count }}</span>
      <span class="icon"
        ><unicon
          :name="props.stat.icon"
          :fill="props.stat.color"
          width="50px"
          height="50px"
          class="icon"
      /></span>
    </header>
    <h5 class="title">{{ props.stat.title }}</h5>
  </article>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["stat"]);
</script>

<style lang="scss" scoped>
article {
  padding: 2rem;
  background: var(--white);
  border-radius: var(--borderRadius);
  //   border-bottom: 5px solid ${(props) => props.color};
}

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.count {
  display: block;
  font-weight: 700;
  font-size: 50px;
//   color: ${(props) => props.color};
}
.title {
  margin: 0;
  text-transform: capitalize;
  letter-spacing: var(--letterSpacing);
  text-align: left;
  margin-top: 0.5rem;
}
.icon {
  width: 70px;
  height: 60px;
  // background: ${(props) => props.bcg};
  // border-radius: var(--borderRadius);
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 2rem;
    //   color: ${(props) => props.color};
  }
}
</style>

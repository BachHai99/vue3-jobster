<template>
  <article :style="{borderBottom: '5px solid' + props.stat.color}">
    <header>
      <span class="count" :style="{color: props.stat.color}">{{ props.stat.count }}</span>
      <span class="icon" :style="{backgroundColor: props.stat.bcg, borderRadius: '5px'}"
        ><unicon
          :name="props.stat.icon"
          :fill="props.stat.color"
          width="35px"
          height="35px"
          :backgroundColor="props.stat.bcg"
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

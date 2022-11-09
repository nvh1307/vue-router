<template>
  <div>
    <h1>{{ name }} - {{ age }}</h1>
  </div>
</template>

<script>
import { EventBus } from "@/main";
export default {
  name: "SecondComponent",
  data: () => {
    return {
      age1: this.age,
    };
  },

  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },

  create() {
    EventBus.$on("ageChanged", (val) => {
      this.age1 = val;
    });
  },
};
</script>

<style></style>

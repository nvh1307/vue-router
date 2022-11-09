<template>
  <div>
    <button @click="changeAge()">Change Age</button>
    <h1>{{ age }}</h1>
  </div>
</template>
<script>
import { EventBus } from "@/main";

export default {
  name: "ThirdComponent",
  props: {
    age: {
      type: Number,
      required: true,
    },
  },
  data: () => {
    return {
      ageChild: this.age,
    };
  },
  methods: {
    changeAge() {
      this.ageChild = 30;
      this.$emit("ageChanged", this.ageChild);
      EventBus.$emit("ageChanged", this.ageChild);
    },
  },
};
</script>
<style></style>

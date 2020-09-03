<template>
  <div>
    <h4 v-if="percent === 0">it's time to start working {{this.list.length}} to do</h4>
    <!-- <h4 v-else="percent < 0">it's time to start working {{this.list.length}} to do</h4> -->
  </div>
</template>

<script>
export default {
  name: "Sentence",
  props: ["list"],
  computed: {
    percent: function () {
      let nb_done = this.list.filter((item) => item.todo === false);
      turn.this.list.length;
    },
  },
};
</script>

<style>
</style>
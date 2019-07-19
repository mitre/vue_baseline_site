<template>
  <div>
    <button
      @click="reroute(); this.sharedData.selectedHistoryRow = this.route; this.sharedData.showModal = true;"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
import sharedData from "../observables/history.js";

export default {
  data: () => ({ sharedData }),

  props: {
    name: {
      type: String,
      required: true
    },
    route: String,
    color: String
  },
  methods: {
    reroute(event) {
      if (this.route == null) {
        this.$router.push("/Applications/");
        alert(
          "The specific route hasn't been found. You will be redirected to a list of the baselines."
        );
      } else {
        this.$router.push("/Applications/" + this.route);
      }
    }
  }
};
</script>

<style scoped>
button {
  background-color: #2362df; /* Blue background, default */
  color: white; /* White text */
  padding: 20px 20px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  font-size: 16px;
  display: inline-block;
  height: 70px;
  width: 20vw;
}
button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}
/* Add a background color on hover */
button:hover {
  background-color: rgb(66, 80, 109);
}
</style>
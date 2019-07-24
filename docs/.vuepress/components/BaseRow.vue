<template>
  <div>
    <css-grid :columns="columns" class="test">
      <css-grid-item>
        <h3>{{section.name}}</h3>
      </css-grid-item>
      <css-grid-item>
        <css-grid :columns="getColumns()">
          <BaseButton
            class="box"
            v-for="baseline in baselines"
            v-if="isInSection(baseline)"
            :name="baseline.name"
            :route="baseline.route"
            :color="section.color"
          >{{baseline.name}}</BaseButton>
        </css-grid>
      </css-grid-item>
    </css-grid>

    <hr size="10" />
    <!--
    <h3>{{section}}</h3>
    <div class="box">
      <BaseButton
        v-for="baseline in baselines"
        v-if="isInSection(baseline)"
        :name="baseline.name"
        :route="baseline.route"
      >{{baseline.name}}</BaseButton>
    </div>
    -->
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
import { CssGrid, CssGridItem } from "vue-css-grid";

export default {
  data() {
    return {
      columns: ["30%", "70%"]
    };
  },
  components: {
    BaseButton
  },
  props: {
    section: {
      type: String,
      required: true
    },
    baselines: {
      type: Array,
      required: true
    }
  },
  methods: {
    isInSection(baseline) {
      return baseline.sections.includes(this.section.name);
    },
    getColumns() {
      var count = 0;
      for (var i = 0; i < this.baselines.length; i++) {
        if (this.isInSection(this.baselines[i])) count++;
      }
      if (count % 2 == 0) {
        return ["50%", "50%"];
      } else {
        return ["33.3%", "33.3%", "33.3%"];
      }
    }
  },
  components: {
    CssGrid,
    CssGridItem
  }
};
</script>

<style scoped>
th,
td {
  text-align: center;
  vertical-align: middle;
  border: none;
}
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0.5em;
  vertical-align: middle;
}
.test {
  text-align: center;
  align-items: center;
  display: grid;
  background: #e9ebf0;
}
</style>
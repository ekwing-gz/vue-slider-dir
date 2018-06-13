<template>
  <div class="tab">
    <router-link v-for="(item, index) in links"
      :to="item.url"
      :key="item.url"
      @click.native="handleClick(index)"
      :style="{width: 100/links.length + '%'}">{{ item.name }}</router-link>
    <div class="slider" :style="{width: width + '%'}"></div>
  </div>
</template>

<script>
export default {
  data () {
    let width = 100 / this.links.length
    return {
      width,
    }
  },
  methods: {
    handleClick (index) {
      this.$emit('input', index)
    }
  },
  props: {
    links: Array,
    value: Number
  },
}
</script>

<style>
.tab {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30px;
  line-height: 30px;
}

a {
  display: block;
  text-align: center;
  text-decoration: none;
}
</style>

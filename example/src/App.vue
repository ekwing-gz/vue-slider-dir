<template>
  <div id="app" v-slide:tabNum="{urls}">
    <tab :links="links" v-model="tabNum"></tab>
    <router-view></router-view>
  </div>
</template>

<script>
import Tab from './components/tab.vue'

export default {
  name: 'app',
  data () {
    return {
      links: [
        {
          url: '/route1',
          name: 'go to route1'
        }, {
          url: '/route2',
          name: 'go to route2'
        }, {
          url: '/route3',
          name: 'go to route3'
        }, {
          url: '/route4',
          name: 'go to route4'
        }
      ],
      tabNum: 0
    }
  },
  components: { Tab },
  computed: {
    urls () {
      return this.links.map(item => item.url)
    }
  },
}
</script>

<style>
body,
html,
#app {
  height: 100%;
}
</style>

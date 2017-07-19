<template>
  <div class="user-distribution">
    <distribution :pieData="userDistribution"></distribution>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Distribution from '@/components/graph/distribution'

  export default {
    components: { Distribution },
    computed: {
      ...mapState({
        userDistribution: ({graph}) => graph.userDistribution
      })
    },
    methods: {
      ...mapActions([
        'getUserDistribution'
      ]),
      initData () {
        this.getUserDistribution()
      }
    },
    created () {
      this.initData()
    }
  }
</script>

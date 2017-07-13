<template>
  <div class="user-list">
    user list
    {{userList}}
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'user-list',
    computed: {
      ...mapState({
        userList: ({user}) => user.items
      })
    },
    methods: {
      ...mapActions([
        'getUserList'
      ]),
      initData () {
        this.getUserList()
      }
    },
    created () {
      this.initData()
    }
  }
</script>

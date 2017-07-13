<template>
  <div class="hamburger" :class="{'active': active}" @click="toggleHamburger">
    <span></span>
  </div>
</template>

<script>
  export default {
    name: 'hamburger',
    data () {
      return {
        active: false
      }
    },
    methods: {
      toggleHamburger () {
        this.active = !this.active
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .hamburger {
    display: inline-block;
    width: 21px;
    height: 21px;
    cursor: pointer;
    transition: .4s;

    &.active {
      transform: rotate(90deg);
    }
  }

  .hamburger span {
    display: block;
    width: 3px;
    height: 21px;
    background-color: #000;
    position: relative;
    margin: 0 auto;

    &:before, &:after {
      content: '';
      width: 3px;
      height: 21px;
      background-color: #000;
      position: absolute;
    }

    &:before {
      left: -6px;
    }

    &:after {
      left: 6px;
    }
  }
</style>

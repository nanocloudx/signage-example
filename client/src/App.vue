<template>
  <div id="app">
    <header class="header">
      <GlobalHeader />
    </header>
    <div class="main">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
  import GlobalHeader from './components/GlobalHeader'

  export default {
    components: {
      GlobalHeader
    }
  }
</script>

<style lang="scss">
  html, body {
    background-color: #000000;
  }
  #app {
    width: 1080px;
    height: 1920px;
    margin: auto;
  }
  .header {
    width: 100%;
    height: 100px;
  }
  .main {
    background-color: #000000;
    width: 100%;
    height: calc(100% - 100px);
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>

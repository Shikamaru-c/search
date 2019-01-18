<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="scss">
@import '@/style/index.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: $normal-font-size;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

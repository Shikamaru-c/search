<template>
  <div id="mini-player" @click="$router.push('/music-player')">
    <img src="./avatar.png" alt="">
    <span>music name</span>
    <button>P/S</button>
  </div>
</template>

<style lang="scss" scoped>
@import '@/style/index.scss';

#mini-player {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background: $main-background;
  color: $main-color;
  img {
    width: .70rem;
    height: .70rem;
    margin: 0 .09rem;
  }
  span {
    flex: 1;
  }
  button {
    border: none;
    outline: none;
    background: none;
    color: $main-color;
  }
}
</style>

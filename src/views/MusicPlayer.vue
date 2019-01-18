<template>
  <div id="music-player">
    <div class="header">
      <div class="button-wrapper"><button-return/></div>
      <div class="song">
        <div class="name">后来</div>
        <div class="singer">刘若英</div>
      </div>
    </div>
    <div class="progress-bar">
    </div>
    <div class="controller">
      <button>P/S</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ButtonReturn from '@/components/ButtonReturn/index.vue'

@Component({
  components: {
    ButtonReturn,
  },
})
export default class MiniPlayer extends Vue {
}
</script>

<style lang="scss" scoped>
@import '@/style/index.scss';

#music-player {
  .header {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    height: $bar-height;
    padding: $normal-padding;
    .button-wrapper {
      width: $bar-height;
    }
    .song {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: $small-font-size;
    }
  }
  .progress-bar {
    height: .04rem;
    background: rgba(0, 0, 0, .3);
  }
}
</style>

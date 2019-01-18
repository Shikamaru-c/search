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
    <div class="player">
      <audio ref="audio" src="http://113.215.22.149/amobile.music.tc.qq.com/C400000H2jfM21Wl7c.m4a?guid=1586627704&vkey=9BD098C0A3FD8073AB950EDC617218FAC160894E3ED54E2C939CD72719130E15E45846D723D2ACE1995568AFFDCBEAF78E4CA6DCD4CF5520&uin=0&fromtag=66" controls></audio>
    </div>
    <div class="controller">
      <button @click="pause">P/S</button>
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
  // NEED
  // 暂停 finish
  // 播放 finish
  // 音量控制 finish
  // 下载到本机
  // 歌曲长度
  // 当前播放到的时间 finish
  // 改变播放时间 finish
  private play () {
    (this.$refs.audio as HTMLAudioElement).play()
  }

  private pause () {
    (this.$refs.audio as HTMLAudioElement).pause()
  }

  private getVolume () {
    const volume: number = (this.$refs.audio as HTMLAudioElement).volume
    console.log(volume)
  }

  private setVolume (volume: number) {
    (this.$refs.audio as HTMLAudioElement).volume = volume
  }

  private getCurrentTime () {
    const currentTime = (this.$refs.audio as HTMLAudioElement).currentTime
    console.log(currentTime)
  }
  private setCurrentTime (time: number) {
    (this.$refs.audio as HTMLAudioElement).currentTime = time
  }
  
  private getSongLength () {
    const length: number = (this.$refs.audio as HTMLAudioElement).seekable.end(0)
    console.log(length) 
  }
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

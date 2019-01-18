<template>
  <div id="search">
    <div class="header">
      <span>SEARCH</span>
      <input type="search" v-model="searchContent" placeholder="搜索" @keyup.enter="handleSearch">
    </div>
    <tab-bar/>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <div id="mini-player-wrapper">
      <mini-player/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator'
import TabBar from '@/components/TabBar/index.vue'
import MiniPlayer from '@/components/MiniPlayer/index.vue'

@Component({
  components: {
    TabBar,
    MiniPlayer,
  },
})
export default class Search extends Vue {
  private searchContent?: string

  private data () {
    return {
      searchContent: '',
    }
  }

  private handleSearch (): void {
    console.log(this.searchContent)
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/index.scss';

#search {
  .header {
    display: flex;
    box-sizing: border-box;
    height: $bar-height;
    padding: $normal-padding;
    span {
      display: flex;
      align-items: center;
      margin-right: $normal-padding;
    }
    input {
      flex: 1;
      border: none;
      outline: none;
      @include normal-border-bottom($main-background);
    }
  }
  #mini-player-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: $bar-height;
  }

}
</style>

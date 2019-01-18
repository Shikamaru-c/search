<template>
  <div id="tab-bar" ref="tabBar" @click="handleChangeTab">
    <span class="tab-item">
      <router-link to="/search/music" data-index="0">音乐</router-link>
    </span>
    <span class="tab-item">
      <router-link to="/search/shop" data-index="1">商品</router-link>
    </span>
    <div class="tab-decoration" ref="tabDecoration" :style="{left}"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
})
export default class TabBar extends Vue {
  private leftList!: number[]
  private currentIndex!: number

  private data () {
    return {
      leftList: [],
      currentIndex: 0,
    }
  }

  private getTop (): number {
    const child = (this.$refs.tabBar as any).firstElementChild
    const { offsetTop, offsetHeight } = child
    return offsetTop + offsetHeight
  }

  private getLeftList (): number[] {
    const children = (this.$refs.tabBar as any).children
    return [...children].map(child => {
      const { offsetLeft, offsetWidth } = child
      return offsetLeft + offsetWidth / 2
    }) 
  }

  private setTabDecorationTop (top: number): void {
    const tabDecoration: any = this.$refs.tabDecoration
    tabDecoration.style.top = top + 'px'
  }

  private handleWindowResize (): void {
    this.setTabDecorationTop(this.getTop())
    this.leftList = this.getLeftList()
  }

  private handleChangeTab (event: MouseEvent): void {
    const target: any = event.target
    if (target.tagName.toUpperCase() !== 'A') {
      return
    } else {
      this.currentIndex = parseInt(target.dataset.index, 10)
    }
  }

  get left (): string {
    return this.leftList[this.currentIndex] + 'px'
  }

  private mounted (): void {
    this.handleWindowResize()
    window.addEventListener('resize', this.handleWindowResize)
  }

  private beforeDestory (): void {
    window.removeEventListener('resize', this.handleWindowResize)
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/index.scss';

#tab-bar {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: $bar-height;
  background: $main-background;
  color: $main-color;
  .tab-item {
    a {
      text-decoration: none;
      color: $main-color;
    }
  }
  .tab-decoration {
    position: absolute;
    height: .05rem;
    width: .4rem;
    transform: translate(-50%, .1rem);
    transition: left .3s ease;
    border-radius: .02rem;
    background: $main-color;
  }
}
</style>

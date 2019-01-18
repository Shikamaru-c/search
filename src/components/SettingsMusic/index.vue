<template>
  <div id="settings-music">
    <form>
      <fieldset>
        <legend>平台</legend>
        <input type="checkbox" v-model="platforms" id="qq" value="qq">
        <label for="qq">QQ音乐</label>
        <input type="checkbox" v-model="platforms" id="netease" value="netease">
        <label for="netease">网易云音乐</label>
      </fieldset>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Model } from 'vue-property-decorator'

@Component
export default class SettingsMusic extends Vue {
  private platforms?: string[]
  
  private data () {
    return {
      platforms: [],
    }
  }
}
</script>


<style lang="scss" scoped>
@import '@/style/index.scss';

#settings-music {
  form {
    padding: $normal-padding;
    legend {
      font-size: $large-font-size;
      line-height: 2em;
      input:checked + label {
        color: red;
      }
    }
  }
}
</style>

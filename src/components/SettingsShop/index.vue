<template>
  <div id="settings-shop">
    <form>
      <fieldset>
        <legend>平台</legend>
        <input type="checkbox" v-model="platforms" id="taobao" value="taobao">
        <label for="taobao">淘宝</label>
        <input type="checkbox" v-model="platforms" id="tmall" value="tmall">
        <label for="tmall">天猫</label>
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

#settings-shop {
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
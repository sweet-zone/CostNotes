
<template>
  <div id="app">
    <div class="statusbar-overlay"></div>

    <div class="views">
      <transition :name="'slide-' + direction" :mode="mode">
        <router-view class="router-view"></router-view>
      </transition>
    </div>
  </div>
</template> 

<script>
  export default {
    name: 'app',
    data() {
      return {
        direction: 'right',
        mode: ''
      }
    },
    mounted () {
      // init F7
      window.F7 = new Framework7({
          root: '#app',

          modalTitle: '随手记账',
          modalButtonOk: '确定',
          modalButtonCancel: '取消',
          modalPreloaderTitle: '加载中'
      })
    },
    watch: {
      '$route' (to, from) {
        let toDepth = to.path.length
        let fromDepth = from.path.length

        if(toDepth < fromDepth) {
          this.direction = 'left'
        } else {
          this.direction = 'right'
        }
      }
    }
  }
</script>















<template>
  <div class="view main-view">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left">
          <a href="#" @click="goback" class="link">
            <i class="icon icon-back"></i>
            <span>设置</span>
          </a>
        </div>
        <div class="center sliding cn-title">标签设置</div>
        <div class="right">
          <a href="#" class="link icon-only"></a>
        </div>
      </div>
    </div>
    <div class="pages navbar-through toolbar-through">
      <div class="page page-on-center">
        <div class="page-content">
          <div class="content-block">
            <div class="chip">
              <div class="chip-label">Example Chip</div>
              <a href="#" class="chip-delete"></a>
            </div>
            <div class="chip">
              <div class="chip-label">Chris</div>
              <a href="#" class="chip-delete"></a>
            </div>
            <div class="chip">
              <div class="chip-label">Sent</div>
              <a href="#" class="chip-delete"></a>
            </div>
            <div class="chip">
              <div class="chip-media"><img src="http://lorempixel.com/100/100/people/9/"></div>
              <div class="chip-label">Jane Doe</div>
              <a href="#" class="chip-delete"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '../router'

  export default {
    name: 'tags',
    methods: {
      goback() {
        router.go(-1)
      }
    }
  }
</script>
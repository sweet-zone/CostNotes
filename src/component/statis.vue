

<template>
  <div class="view main-view">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left">
          <a href="#" @click="goback" class="link icon-only">
            <i class="icon icon-back"></i>
          </a>
        </div>
        <div class="center sliding cn-title">支出记录</div>
        <div class="right">
          <a href="#" class="link icon-only"></a>
        </div>
      </div>
    </div>
    <div class="pages navbar-through toolbar-through">
      <div class="page page-on-center">
        <div class="page-content">
            <div class="timeline">
                <div class="timeline-item">
                  <div class="timeline-item-date">21 <small>DEC</small></div>
                  <div class="timeline-item-divider"></div>
                  <div class="timeline-item-content">Plain text item</div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-item-date">22 <small>DEC</small></div>
                  <div class="timeline-item-divider"></div>
                  <div class="timeline-item-content">
                    <div class="timeline-item-inner">Another text goes here</div>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-item-date">22 <small>DEC</small></div>
                  <div class="timeline-item-divider"></div>
                  <div class="timeline-item-content">
                    <div class="timeline-item-inner">Another text goes here</div>
                  </div>
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
    name: 'setting',
    methods: {
      goback() {
        router.go(-1)
      }
    }
  }
</script>
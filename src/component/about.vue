

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
        <div class="center sliding cn-title">关于</div>
        <div class="right">
          <a href="#" class="link icon-only"></a>
        </div>
      </div>
    </div>
    <div class="pages navbar-through toolbar-through">
      <div class="page page-on-center">
        <div class="page-content">
          <div class="content-block">
            <div class="card">
              <div class="card-content">
                <div class="card-content-inner" style="text-align: center">
                  <h3>随手记账</h3>
                  <p>DarkZone (zjzhome@126.com)</p>
                </div>
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
    name: 'about',
    methods: {
      goback() {
        router.go(-1)
      }
    }
  }
</script>
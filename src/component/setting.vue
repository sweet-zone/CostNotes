
<template>
  <div class="view main-view">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left">
          <a href="#" @click="goback" class="link icon-only">
            <i class="icon icon-back"></i>
          </a>
        </div>
        <div class="center sliding cn-title">设置</div>
        <div class="right">
          <a href="#" class="link icon-only"></a>
        </div>
      </div>
    </div>
    <div class="pages navbar-through toolbar-through">
      <div class="page page-on-center">
        <div class="page-content">
          <div class="list-block">
            <ul>
              <li>
                <router-link to="/setting/tags" class="item-link item-content">
                  <div class="item-media"><i class="f7-icons size-22">tags</i></div>
                  <div class="item-inner">
                    <div class="item-title">标签</div>
                  </div>
                </router-link>
              </li>
              <li>
                <router-link to="/setting/alarm" class="item-link item-content">
                  <div class="item-media"><i class="f7-icons size-22">alarm</i></div>
                  <div class="item-inner">
                    <div class="item-title">提醒</div>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="list-block">
            <ul>
              <li>
                <router-link to="/setting/about" class="item-link item-content">
                  <div class="item-media"><i class="f7-icons size-22">at</i></div>
                  <div class="item-inner">
                    <div class="item-title">关于</div>
                  </div>
                </router-link>
              </li>
            </ul>
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
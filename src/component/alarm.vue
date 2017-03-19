

<template>
  <div class="view main-view">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left">
          <a href="#" @click="goback" class="link">
            <span>取消</span>
          </a>
        </div>
        <div class="center sliding cn-title">提醒设置</div>
        <div class="right">
          <a href="#" class="link">
            <span>保存</span>
          </a>
        </div>
      </div>
    </div>
    <div class="pages navbar-through toolbar-through">
      <div class="page page-on-center">
        <div class="page-content">
          <div class="content-block-title">月消费超过这个数字, App 将会提醒</div>
          <div class="list-block">
            <ul>
              <li>
                <div class="item-content">
                  <div class="item-inner">
                    <div class="item-input">
                      <input type="text">
                    </div>
                  </div>
                </div>
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
    name: 'alarm',
    methods: {
      goback() {
        router.go(-1)
      }
    }
  }
</script>
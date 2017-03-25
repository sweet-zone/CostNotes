

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
        <div class="center sliding cn-title">提醒设置</div>
        <div class="right">
          <a href="#" class="link" @click="changeAlarm">
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
                      <input type="number" v-model="alarm">
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
    data() {
      return {
        alarm: ''
      }
    },
    created () {
      this.alarm = this.$store.state.alarmLimit === Infinity ? '' : this.$store.state.alarmLimit+''
    },
    methods: {
      goback() {
        router.go(-1)
      },
      changeAlarm() {
        if(this.alarm && this.alarm !== this.$store.state.alarmLimit+'') {
          this.$store.commit({
            type: 'changeAlarmLimit',
            alarmLimit: this.alarm
          })
        }
      }
    }
  }
</script>
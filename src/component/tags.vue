

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
          <a href="#" class="link">
            <span @click="addTag">添加</span>
          </a>
        </div>
      </div>
    </div>
    <div class="pages navbar-through toolbar-through">
      <div class="page page-on-center">
        <div class="page-content">
          <div class="content-block">
            <div class="chip" v-for="tag in tags">
              <div class="chip-label">{{ tag }}</div>
              <a href="#" class="chip-delete" @click="removeTag(tag)"></a>
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
      },
      addTag() {
        let _this = this
        window.F7.prompt('请输入一个标签', function(value) {
          if(value) {
            _this.$store.commit({
              type: 'addTag',
              tag: value
            })
          }
        })
      },
      removeTag(tag) {
        this.$store.commit({
          type: 'removeTag',
          tag: tag
        })
      }
    },
    computed: {
      tags () {
        return this.$store.state.tags
      }
    },
  }
</script>
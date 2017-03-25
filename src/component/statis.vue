

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
                <div class="timeline-item" v-for="note in costNotes">
                  <div class="timeline-item-date">{{ note.time | formatTime }}</div>
                  <div class="timeline-item-divider"></div>
                  <div class="timeline-item-content">
                    <div class="timeline-item-inner">
                      <div class="timeline-item-title">{{ note.cost }}</div>
                      <div class="timeline-item-text">{{ note.remark || '' }}</div>
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
  import util from '../api/util' 

  export default {
    name: 'setting',
    computed: {
      costNotes () {
        return this.$store.state.costNotes.reverse()
      }
    },
    filters: {
      formatTime: util.formatTime
    },
    methods: {
      goback() {
        router.go(-1)
      }
    }
  }
</script>
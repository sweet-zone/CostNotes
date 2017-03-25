
<template>
  <div class="view main-view">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left">
          <router-link to="/statis" class="link icon-only">
            <i class="f7-icons">calendar</i>
          </router-link>
        </div>
        <div class="cn-title">随手记账</div>
        <div class="right">
          <router-link to="/setting" class="link icon-only">
            <i class="icon icon-bars"></i>
          </router-link>
        </div>
      </div>
    </div>
    <div class="pages navbar-through toolbar-through">
      <div class="page page-on-center">
        <div class="page-content">
          <div class="content-block-title">今日支出</div>
          <div class="list-block">
            <ul>
              <li class="swipeout" v-for="note in todayNotes">
                <div class="swipeout-content item-content">
                  <div class="item-media"><span class="badge">{{ note.tag }}</span></div>
                  <div class="item-inner">
                    <div class="item-title">{{ note.cost }}</div>
                    <div class="item-after">{{ note.time | formatTime('today') }}</div>
                  </div>
                </div>
                <div class="swipeout-actions-right">
                  <a href="#" @click="removeNote(note.id)">
                    <i class="f7-icons size-22">trash</i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="toolbar">
      <div class="toolbar-inner">
        <router-link to="/note" class="cn-note">记一笔</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import util from '../api/util' 

  export default {
    name: 'today',
    methods: {
      removeNote (id) {
        let _this = this
        window.F7.confirm('确定要删除?', function() {
          _this.$store.commit({
            type: 'removeNote',
            deletedId: id
          })
        });
      }
    },
    computed: {
      todayNotes () {
        return this.$store.getters.todayNotes.reverse()
      }
    },
    filters: {
      formatTime: util.formatTime
    }
  }
</script>

<template>
  <div class="view main-view">
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left">
          <a href="#" class="link icon-only"></a>
        </div>
        <div class="center sliding cn-title">记一笔</div>
        <div class="right">
          <router-link to="/" class="link icon-only">
            <i class="f7-icons">close</i>
          </router-link>
        </div>
      </div>
    </div>
    <div class="pages navbar-through toolbar-through">
      <div class="page page-on-center">
        <div class="page-content">
          <div class="content-block-title">不漏掉每一笔支出</div>
          <div class="list-block">
            <ul>
              <li>
                <div class="item-content">
                  <div class="item-inner">
                    <div class="item-title label">金额(￥)</div>
                    <div class="item-input">
                      <input type="number" v-model="cost">
                    </div>
                  </div>
                </div>
              </li>
              <li @click="openTagsPopup">
                <div class="item-content">
                  <div class="item-inner">
                    <div class="item-title label">类别</div>
                    <div class="item-input">
                      <input type="text" readonly v-model="tag">
                    </div>
                  </div>
                </div>
              </li>
              <li class="align-top">
                <div class="item-content">
                  <div class="item-inner">
                    <div class="item-title label">备注</div>
                    <div class="item-input">
                      <textarea maxlength="100" v-model="remark"></textarea>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="content-block">
            <a href="#" class="button button-big" @click="addNote">记下</a>
          </div>
        </div>
      </div>
    </div>

    <div class="popup popup-tags">
      <div class="list-block">
        <div class="list-block-label">
          请选择一个标签
          <a href="#" style="float:right;" class="close-popup">取消</a>
        </div>
        <ul>
          <li class="item-content" v-for="tag in tags" @click="selectTag(tag)">
            <div class="item-inner">
              <div class="item-title">{{ tag }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import router from '../router'

  export default {
      name: 'note',
      data () {
        return {
          cost: '',
          tag: '',
          remark: ''
        }
      },
      computed: {
        canCommit () {
          return this.tag.length > 0 && this.cost.length > 0
        },
        tags () {
          return this.$store.state.tags
        }
      },
      methods: {
        openTagsPopup() {
          window.F7.popup('.popup-tags')
        },
        selectTag(tag) {
          this.tag = tag;
          window.F7.closeModal('.popup-tags')
        },
        addNote() {
          let _this = this
          if(this.canCommit) {
            this.$store.commit({
              type: 'addNote',
              note: {
                cost: parseFloat(this.cost),
                tag: this.tag,
                remark: this.remark || ''
              }
            })
            router.push('/');
          } else {
            window.F7.alert('金额和类别必填哦')
          }
        }
      }
  }
</script>
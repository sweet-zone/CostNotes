
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
                      <input type="text">
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="item-content">
                  <div class="item-inner">
                    <div class="item-title label">类别</div>
                    <div class="item-input">
                      <input type="text" readonly>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="item-content">
                  <div class="item-inner">
                    <div class="item-title label">备注</div>
                    <div class="item-input">
                      <textarea></textarea>
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
  </div>
</template>

<script>
  export default {
      name: 'note',
      methods: {
        addNote() {
          
        }
      }
  }
</script>
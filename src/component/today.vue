
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
              <li class="swipeout">
                <div class="swipeout-content item-content">
                  <div class="item-media"><span class="badge">吃喝</span></div>
                  <div class="item-inner">
                    <div class="item-title">12.34</div>
                    <div class="item-after">12:30</div>
                  </div>
                </div>
                <div class="swipeout-actions-right">
                  <a href="#" @click="removeNote">
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
  export default {
    name: 'today',
    methods: {
      removeNote () {
        window.F7.confirm('确定要删除?', function() {

        });
      }
    }
  }
</script>

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * 同步  store.commit -> mutation
 * 异步  store.dispatch -> (action) store.commit -> mutation
 * 计算属性 getter (state, getter)
 */

// 从 localStorage 内取出的作为 state 的初始量

/**
 * costNotes
 * {
 *   '2017/02/02': [{
 *     id: 'abc1323231',
 *     cost: 12.34,
 *     remark: '哈哈哈哈',
 *     tag: '吃喝'
 *   }, ...] 
 * }
 */

const store = new Vuex.Store({
  state: {
    costNotes: {},
    tags: ['吃喝', '交通', '服饰', '红包', '话费', '娱乐', '医疗', '护肤', '娱乐', '信用卡'],
    alarmLimit: Infinity
  },
  mutations: {
    addNote(state, payload) {

    },
    removeNote(state, payload) {

    },
    handleTags(state, payload) {

    },
    changeAlarmLimit(state, payload) {

    }
  },
  getter: {
    todayNotes (state) {

    },
    monthCost(state) {

    },
    isNeedAlarm (state, getter) {

    }
  }
})

export default store






import Vue from 'vue'
import Vuex from 'vuex'
import storage from '../api/storage'
import util from '../api/util'

Vue.use(Vuex)

/**
 * 同步  store.commit -> mutation
 * 异步  store.dispatch -> (action) store.commit -> mutation
 * 计算属性 getter (state, getter)
 */

// 从 localStorage 内取出的作为 state 的初始量

/**
 * costNotes
 *   [{
 *     id: 'abc1323231',
 *     cost: 12.34,
 *     remark: '哈哈哈哈',
 *     tag: '吃喝',
 *     time: '143536868'
 *   }, {} ...] 
 */

let costNotesFromStorage = storage.get('costNotes');
let tagsFromStorage = storage.get('tags');
let alarmLimit = storage.get('alarmLimit');

let defaultTags = ['吃喝', '交通', '服饰', '红包', '话费', '娱乐', '医疗', '护肤', '娱乐', '信用卡'];

const store = new Vuex.Store({
  state: {
    costNotes: costNotesFromStorage ? JSON.parse(costNotesFromStorage) : [],
    tags: tagsFromStorage ? JSON.parse(tagsFromStorage) : defaultTags.slice(),
    alarmLimit: alarmLimit ? parseFloat(alarmLimit) : Infinity
  },
  mutations: {
    addNote(state, payload) {
      payload.note.time = +new Date()
      payload.note.id = util._$uniqueID()
      state.costNotes.push(payload.note)
      storage.set('costNotes', JSON.stringify(state.costNotes));
      window.F7.toast('添加成功', '', {}).show()

      let totalCost = 0;
      state.costNotes.forEach((note) => {
        totalCost += note.cost
      })
      if(totalCost >= state.alarmLimit) {
        window.F7.alert('本月支出已超出提醒限额 \n 可以进入 设置 - 提醒 提高提醒额度')
      }
    },
    removeNote(state, payload) {
      for(let i = 0; i < state.costNotes.length; i++) {
        if(state.costNotes[i].id === payload.deletedId) {
          state.costNotes.splice(i, 1)
          break;
        }
      }
      storage.set('costNotes', JSON.stringify(state.costNotes));
      window.F7.toast('删除成功', '', {}).show()
    },
    addTag(state, payload) {
      let index = state.tags.indexOf(payload.tag)
      if(index > -1) {
        window.F7.alert('标签已存在')
        return
      }
      state.tags.push(payload.tag)
      storage.set('tags', JSON.stringify(state.tags))
      window.F7.toast('添加成功', '', {}).show()
    },
    removeTag(state, payload) {
      let defaultIndex = defaultTags.indexOf(payload.tag)
      let index = state.tags.indexOf(payload.tag)
      if(defaultIndex > -1) {
        window.F7.alert('默认标签无法删除')
        return
      }

      if(index > -1) {
        state.tags.splice(index, 1)
      }
      storage.set('tags', JSON.stringify(state.tags))
      window.F7.toast('删除成功', '', {}).show()
    },
    changeAlarmLimit(state, payload) {
      state.alarmLimit = parseInt(payload.alarmLimit)
      storage.set('alarmLimit', JSON.stringify(state.alarmLimit))
      window.F7.toast('修改成功', '', {}).show()
    }
  },
  getters: {
    todayNotes: (state) => {
      return state.costNotes.filter((note) => {
        return util.isToday(note.time)
      })
    },
    monthCost: (state) => {

    }
  }
})

export default store





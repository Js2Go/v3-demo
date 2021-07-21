import { createStore, createLogger } from 'vuex'
import createSocket from '../plugins/socket'

const socket = new WebSocket('ws://localhost:3000', 'vite-hmr')

const socketPlugin = createSocket(socket)

export default createStore({
  state: {
    count: 0,
    arr: [
      { id: 1, name: 1, age: 1 },
      { id: 2, name: 2, age: 2 },
    ]
  },
  mutations: {
    inc(state) {
      state.count++
    },
    dec(state) {
      state.count--
    },
    change(state, payload) {
      state.count = payload
    },
    reset(state) {
      state.count = 0
    },
    UPDATE_DATA(state, payload) {
      // state.count = payload
    },
    receiveData(state, payload) {
      state.count = payload
    }
  },
  actions: {
    inc({ commit }) {
      commit('inc')
    },
    asyncInc({ commit }) {
      setTimeout(() => {
        commit('inc')
      }, 1000)
    },
    dec({ commit }) {
      commit('dec')
    },
    change({ commit }, payload) {
      commit('change', payload)
    },
    reset({ commit }) {
      commit('reset')
    }
  },
  getters: {
    count(state) {
      return state.count
    },
    arrItem: state => (id: number) => state.arr.find(item => item.id === id),
    arrItem2: (state, getters) => (id: number) => state.arr.findIndex(item => item.id === getters.arrItem(id)?.id)
  },
  plugins: [createLogger(), socketPlugin]
})

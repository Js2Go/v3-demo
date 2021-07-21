import { Plugin } from 'vuex'

const createSocket: (socket: any) => Plugin<any> = (socket: WebSocket) => {
  return (store) => {
    socket.onmessage = ev => {
      store.commit('receiveData', ev.data)
    }

    store.subscribe(mutation => {
      if (mutation.type === 'UPDATE_DATA') {
        socket.send(JSON.stringify({
          type: 'update',
          payload: mutation.payload
        }))
      }
    })
  }
}

export default createSocket
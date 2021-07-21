import { defineAsyncComponent, defineComponent } from 'vue'

// export default defineAsyncComponent(() => {
//   return new Promise((resolve, reject) => {
//     let timeout = Math.floor(Math.random() * 1000 * 10)
//     console.log(timeout)

//     if (timeout >= 7 * 1000) {
//       setTimeout(() => {
//         resolve({
//           template: '<div>I am async!</div>'
//         })
//       }, timeout)
//     } else {
//       // setTimeout(() => {
//         reject('timeout')
//       // }, timeout)
//     }
//   })
// })

export default defineAsyncComponent({
  loader: () => {
    return new Promise((resolve, reject) => {
      let timeout = Math.floor(Math.random() * 1000 * 10)
      console.log(timeout)
  
      if (timeout >= 7 * 1000) {
        setTimeout(() => {
          resolve({
            template: '<div>I am async!</div>'
          })
        }, timeout)
      } else {
        setTimeout(() => {
          reject('timeout')
        }, timeout)
      }
    })
  },
  loadingComponent: {
    template: '<div>loading</div>'
  },
  errorComponent: {
    template: '<div>error</div>'
  },
  suspensible: true
})

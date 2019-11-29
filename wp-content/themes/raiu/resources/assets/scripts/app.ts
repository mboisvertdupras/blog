import Kernel from './lib/Kernel'
import Turbolinks from 'turbolinks'

Turbolinks.start()

// for (const route of routes) {
//   if (document.body.classList.contains(route.path)) {
//     import(/* webpackChunkName: "scripts/[request]" */ `./lib/Controllers/Http/${route.controller}`).then(({ default: Controller }) => {
//       const init = new Controller()
//     }).catch(error => console.log(error))
//   }
// }

const kernel = new Kernel() // eslint-disable-line

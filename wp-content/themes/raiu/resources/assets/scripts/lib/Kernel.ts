// import Listeners from './Listeners'
// import Routes from './Routes'
import routes from '../routes'

class Kernel {
  private routes: any

  constructor () {
    this.routes = routes
    // this.listeners = new Listeners()

    this.boot()
  }

  boot (): void {
    for (const route of this.routes) {
      if (document.body.classList.contains(route.path)) {
        import(/* webpackChunkName: "scripts/[request]" */ `./Controllers/Http/${route.controller}`).then(({ default: Controller }) => {
          const init = new Controller() // eslint-disable-line
        }).catch(error => console.log(error))
      }
    }
  }
}

export default Kernel

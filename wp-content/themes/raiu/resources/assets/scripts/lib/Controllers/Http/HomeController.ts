import Controller from '../Controller'

class HomeController extends Controller {
  protected boot (): void {
    this.observeTitleClones()
  }

  private observeTitleClones (): void {
    const clones: NodeListOf<HTMLElement> = document.querySelectorAll('.title.clone')

    document.addEventListener('mousemove', function (e) {
      const mouseX = (-window.innerWidth + (e.screenX * 2)) / 2
      const mouseY = (-window.innerHeight + (e.screenY * 2)) / 2
      clones.forEach((el, key) => {
        key = (key + 1) / 1.618
        setTimeout(() => {
          el.style.transform = `translate(${Math.round(mouseX * (key / 12))}px, ${Math.round(mouseY * (key / 12))}px)`
        }, key * 75)
      })
    })
  }
}

export default HomeController

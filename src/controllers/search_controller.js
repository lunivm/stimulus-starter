import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static outlets = [ 'result', 'result-item', 'shared--result', 'shared--result-item'  ]

  connect() {
    console.log("🚀   connect: ", this.identifier)
    setTimeout(() => console.log('this.resultOutlets', this.resultOutlets))
    setTimeout(() => console.log('this.resultItemOutlets', this.resultItemOutlets))
    setTimeout(() => console.log('this.sharedResultOutlets', this.sharedResultOutlets))
    setTimeout(() => console.log('this.sharedResultItemOutlets', this.sharedResultItemOutlets))
  }
}

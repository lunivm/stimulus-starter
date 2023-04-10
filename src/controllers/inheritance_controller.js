import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['item']
  static values = {
    label: Object
  }

  connect() {
    console.log("🚀   label:", this.labelValue)
  }
}

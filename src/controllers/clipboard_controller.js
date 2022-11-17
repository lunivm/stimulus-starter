import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "hash" ]
  static classes = [ "supported" ]

  connect() {
    if ("clipboard" in navigator) {
      this.element.classList.add(this.supportedClass);
    }
  }

  copy(event) {
    navigator.clipboard.writeText(this.hashTarget.value)
    event.preventDefault();
  }
}

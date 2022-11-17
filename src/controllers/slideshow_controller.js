import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [
    "slide",
    "previous",
    "next"
  ]
  static values = {
    index: {
      type: Number,
      default: 0
    },
    infinite: Boolean
  }

  previous() {
    this.indexValue--;
  }

  next() {
    this.indexValue++;
  }

  toggleInfinite() {
    this.infiniteValue = !this.infiniteValue;
  }

  infiniteValueChanged() {
    this.#adoptButtonsView();
  }

  indexValueChanged() {
    if (this.infiniteValue) {
      this.#adoptIndexForInfinite();
      this.#adoptButtonsView();
    } else {
      this.#adoptButtonsView();
    }

    this.#showCurrent();
  }

  #showCurrent() {
    this.slideTargets.forEach((slide, index) => slide.hidden = this.indexValue !== index);
  }

  #adoptIndexForInfinite() {
    if (this.indexValue < 0) {
      this.indexValue = this.slideTargets.length - 1;
    } else if (this.indexValue >= this.slideTargets.length) {
      this.indexValue = 0;
    }
  }

  #adoptButtonsView() {
    this.previousTarget.disabled = false;
    this.nextTarget.disabled = false;

    if (this.infiniteValue) {
      return;
    }

    if (this.indexValue === 0) {
      this.previousTarget.disabled = true;
    } else if (this.indexValue === this.slideTargets.length - 1) {
      this.nextTarget.disabled = true;
    }
  }
}

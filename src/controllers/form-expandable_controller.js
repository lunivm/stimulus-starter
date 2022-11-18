import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = [ 'content', 'flag' ];
  static values = {
    content: String
  };

  connect() {
    this.toggle();
  }

  toggle() {
    this.contentTargets.forEach(el => this.#toggleElement(el));
  }

  #toggleElement(el) {
    const inputValue = this.#getInputValue();
    let enabled = !!inputValue;

    if (this.contentValue) {
      enabled = inputValue === this.contentValue;
    }

    el.style.display = enabled ? '' : 'none';
  }

  #getInputValue() {
    const input = this.flagTarget;
    return input.type === 'checkbox' || input.type === 'radio' ? input.checked : input.value;
  }
}

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
    this.contentTargets.forEach(el => {
      const inputValue = this.#getInputValue();
      let hidden = !!inputValue;

      if (this.contentValue) {
        hidden = inputValue === this.contentValue;
      }

      el.style.display = hidden ? '' : 'none';
    });
  }

  #getInputValue() {
    const input = this.flagTarget;
    return input.type === 'checkbox' || input.type === 'radio' ? input.checked : input.value;
  }
}

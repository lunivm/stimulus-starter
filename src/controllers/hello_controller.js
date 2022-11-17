import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "name" ];

  greet() {
    const name = this.nameTarget.value;
    console.log('Hello', name);
  }
}

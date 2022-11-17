import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {
    url: String,
    refreshInterval: Number
  };

  #intervalId;

  connect() {
    if (this.hasUrlValue) {
      this.load();
    }

    if (this.hasRefreshIntervalValue) {
      this.#startRefreshing();
    }
  }

  disconnect() {
    clearInterval(this.#intervalId);
  }

  load(e) {
    const url = e?.params?.url;
    fetch( url || this.urlValue)
      .then(res => res.text())
      .then(html => url ? e.target.innerHTML = html : this.element.innerHTML = html)
  }

  #startRefreshing() {
    this.#intervalId = setInterval(() => this.load(), this.refreshIntervalValue);
  }
}

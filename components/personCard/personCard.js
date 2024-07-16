class PersonCard extends HTMLElement {
  constructor() {
    super();
    // Create a shadow root
    this.shadow = this.attachShadow({mode: 'closed'});

    // Append template to shadow root
    this._template = importer.templates.find(c => c.component === 'personCard');
    this.shadow.append(this._template.template.content.cloneNode(true));


    this._Block = this.shadow.querySelector('.block');
    this._img = this.shadow.querySelector('.image');
  }

  static get observedAttributes() {
    return ['link', 'alt-text', 'dark'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // return if nothing changed
    if (oldValue === newValue) return;
    // set new values
    switch (name) {
      case 'link':
        if (newValue) this._img.src = newValue;
        break;
      case 'alt-text':
        if (newValue) this._img.alt = newValue;
        break;
      case 'dark':
        if (newValue === 'true') {
          this._Block.classList.add('dark');
        }
        break;
    }

  }
}
customElements.define('person-card', PersonCard);

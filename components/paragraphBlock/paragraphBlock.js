class ParagraphBlock extends HTMLElement {
    constructor() {
      super();
      // Create a shadow root
      this.shadow = this.attachShadow({mode: 'closed'});

      // Append template to shadow root
      this._template = importer.templates.find(c => c.component === 'paragraphBlock');
      this.shadow.append(this._template.template.content.cloneNode(true));

      this._Block = this.shadow.querySelector('.block');
      this._banner = this.shadow.querySelector('.banner');
    }

    connectedCallback() {
      // this.shadow.append(this._template.template.content.cloneNode(true));
    }

}
customElements.define('paragraph-block', ParagraphBlock);

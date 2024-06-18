class FileDownload extends HTMLElement {
  constructor() {
    super();
    // create a shadow root
    this.shadow = this.attachShadow({mode: 'closed'});

    // get the template
    this._template = importer.templates.find(c => c.component === 'fileDownload');
    this.shadow.append(this._template.template.content.cloneNode(true));

    this._anchor = this.shadow.querySelector('a');
    this._img = this.shadow.querySelector('img');
    this._img.src = importer.baseURL + '/components/fileDownload/icon.png';
  }

  static get observedAttributes() {
    return ['link'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // return if nothing changed
    if (oldValue === newValue) return;

    // set the new value
    switch (name) {
      case 'link':
        if (newValue) this._anchor.href = newValue;
        else this._anchor.removeAttribute('href');
        break;
    }
  }
}

customElements.define('file-download', FileDownload);

/* Usage:
    <file-download link="{{ file_url(content.field_download.0['#file'].uri.value) }}">
      <span slot="file-name">{{ content.field_label[0]['#context'].value }}</span>
    </file-download>
*/

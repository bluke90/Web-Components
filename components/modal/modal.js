// Description: Custom modal element
class SiteModal extends HTMLElement {

  // 0 - constructor() - Invoked when the custom element is first created.
  constructor() {
    super();
    // Declare modal visibility state
    this._modalVisible = false;
    this.setAttribute('open', 'false');

    // Declare shadow root
    this.shadow = this.attachShadow({ mode: 'closed' });

    // Create wrapper
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');

    // Append template to shadow root
    this._template = importer.templates.find(c => c.component === 'siteModal');
    this.shadow.append(this._template.template.content.cloneNode(true));

    this._modal = this.shadow.querySelector('.modal');
    this.style.display = 'none';
  }

  // ======= Observed Attributes =======
  static get observedAttributes() {
    return ['open'];
  }

  // ======= Lifecycle Callbacks =======

  // 1 - connectedCallback() - Invoked each time the custom element is appended into a document-connected element.
  connectedCallback() {
    // Add event listener to close button
    this.shadow.querySelector('.modal-close').addEventListener('click',
      this._hideModal.bind(this));
  }

  // 2 - disconnectedCallback() - Invoked each time the custom element is disconnected from the document's DOM.
  disconnectedCallback() {
    // Remove event listener from close button
    this.shadow.querySelector('.modal-close').removeEventListener('click',
      this._hideModal.bind(this));

  }

  // 3 - attributeChangedCallback() - Invoked each time one of the custom element's attributes is added, removed, or changed.
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'open') {
      if (newValue === 'true' && oldValue === 'false') {
        this._showModal();
      } else if (newValue === 'false' && oldValue === 'true') {
        this._hideModal();
      }
    }

  }

  // 4 - adoptedCallback() - Invoked each time the custom element is moved to a new document.
  adoptedCallback() {

  }

  // ======= Custom Methods =======
  _showModal() {
    this.setAttribute('open', 'true');
    this._modalVisible = true;
    this.style.display = 'block';
    this._modal.style.display = 'block';

  }

  _hideModal() {
    this.setAttribute('open', 'false');
    this._modalVisible = false;
    this.style.display = 'none';
    this._modal.style.display = 'none';
  }

}

customElements.define('site-modal', SiteModal);

/*
* Inserting site-modal element in document via JavaScript
* - Add element html to variable
* const modalInst = "<site-modal><h3 slot=\"title\">Form Submitted</h3><p slot=\"body\">Your form has been submitted.</p></site-modal>";
* - Parse element html to DOM element
* const _modal = new DOMParser().parseFromString(modalInst, 'text/html').body.firstChild;
* - Append element to off-canvas-main-canvas
* document.querySelector(".dialog-off-canvas-main-canvas").appendChild(_modal);
* */

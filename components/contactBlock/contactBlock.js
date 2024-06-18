class ContactBlock extends HTMLElement {
  constructor() {
    super();

    // create a shadow root
    this.shadow = this.attachShadow({mode: 'closed'});

    // get the template
    this._template = importer.templates.find(c => c.component === 'contactBlock');
    this.shadow.append(this._template.template.content.cloneNode(true));

    // get contact methods
    this._email = {
      self: this.shadow.querySelector('.email'),
      content: this.shadow.querySelector('.email > .flex-box > .content'),
      icon: this.shadow.querySelector('.email > .flex-box > .icon')
    };
    this._phone = {
      self: this.shadow.querySelector('.phone'),
      content: this.shadow.querySelector('.phone > .flex-box > .content'),
      icon: this.shadow.querySelector('.phone > .flex-box > .icon')
    };
    this._fax = {
      self: this.shadow.querySelector('.fax'),
      content: this.shadow.querySelector('.fax > .flex-box > .content'),
      icon: this.shadow.querySelector('.fax > .flex-box > .icon')
    };
    this._logo = this.shadow.querySelector('.logo');
    this._logo.src = importer.baseURL + "/components/contactBlock/logo.png";

    this._init_();
  }

  _init_() {
    this._email.self.style.display = "none";
    this._phone.self.style.display = "none";
    this._fax.self.style.display = "none";

    this._email.icon.style.backgroundImage = "url('" + importer.baseURL + "/components/contactBlock/email-icon.png');";
    this._phone.icon.style.backgroundImage = "url('" + importer.baseURL + "/components/contactBlock/phone-icon.png');";
    this._fax.icon.style.backgroundImage = "url('" + importer.baseURL + "/components/contactBlock/fax-icon.png');";
  }

  static get observedAttributes() {
    return ['logo-link', 'email', 'phone', 'fax'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    switch (name) {
      case 'logo-link':
        this._logo.src = newValue;
        break;
      case 'email':
        this._email.self.style.display = "block";
        this._email.content.textContent = newValue;
        break;
      case 'phone':
        this._phone.self.style.display = "block";
        this._phone.content.textContent = newValue;
        break;
      case 'fax':
        this._fax.self.style.display = "block";
        this._fax.content.textContent = newValue;
        break;
    }
  }



}
customElements.define('contact-block', ContactBlock);

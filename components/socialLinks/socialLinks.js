
class SocialLinks extends HTMLElement {

  constructor() {
    super();

    // create a shadow root
    this.shadow = this.attachShadow({mode: 'closed'});

    // get the template
    this._template = importer.templates.find(c => c.component === 'socialLinks');
    this.shadow.append(this._template.template.content.cloneNode(true));

    // get the social links
    this._facebook = this.shadow.querySelector('.facebook-block');
    this._facebook.display = 'none';
    this._x = this.shadow.querySelector('.x-block');
    this._x.display = 'none';
    this._instagram = this.shadow.querySelector('.instagram-block');
    this._instagram.display = 'none';
    this._pinterest = this.shadow.querySelector('.pinterest-block');
    this._pinterest.display = 'none';

    // get icons
    this._icons = this.shadow.querySelectorAll('svg');

  }

  static get observedAttributes() {
    return ['facebook-link', 'x-link', 'instagram-link', 'pinterest-link', 'fill-color'];
  }


  attributeChangedCallback(name, oldValue, newValue) {
    // check for value change
    if (oldValue === newValue) return;

    switch (name) {
      case 'facebook-link':
        this._setFacebookLink();
        break;
      case 'x-link':
        this._setXLink();
        break;
      case 'instagram-link':
        this._setInstagramLink();
        break;
      case 'pinterest-link':
        this._setPinterestLink();
        break;
      case 'fill-color':
        this._setFillColor();
        break;
    }
  }

  _setFillColor() {
    this._icons.forEach(icon => {
      icon.style.fill = this.getAttribute('fill-color');
    });
  }

  _setFacebookLink() {
    if (this.getAttribute('facebook-link') === '') return;
    this._facebook.href = this.getAttribute('facebook-link');
    this._facebook.display = 'block';
  }

  _setXLink() {
    if (this.getAttribute('twitter-link') === '') return;
    this._x.href = this.getAttribute('twitter-link');
    this._x.display = 'block';
  }

  _setInstagramLink() {
    if (this.getAttribute('instagram-link') === '') return;
    this._instagram.href = this.getAttribute('instagram-link');
    this._instagram.display = 'block';
  }

  _setPinterestLink() {
    if (this.getAttribute('pinterest-link') === '') return;
    this._pinterest.href = this.getAttribute('pinterest-link');
    this._pinterest.display = 'block';
  }
}
customElements.define('social-links', SocialLinks);

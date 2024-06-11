

class ParagraphBlock extends HTMLElement {
    constructor() {
        super();

        // Create a shadow root
        this.shadow = this.attachShadow({mode: 'closed'});

        // Append template to shadow root
        const template = document.getElementById('paragraph-block').content.cloneNode(true);
        this.shadow.append(template);

        this._Block = this.shadow.querySelector('.block');
        this._banner = this.shadow.querySelector('.banner');
    }


}
customElements.define('paragraph-block', ParagraphBlock);

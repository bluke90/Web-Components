class CardIcon extends HTMLElement {
    constructor() {
        super();
        // Create a shadow root
        this.shadow = this.attachShadow({mode: 'closed'});

        // Append template to shadow root
        this._template = importer.templates.find(c => c.component === 'cardIcon');
        this.shadow.append(this._template.template.content.cloneNode(true));

        this._wrapper = this.shadow.querySelector('.wrapper');
        this._content = this.shadow.querySelector('.content');
        this._icon = this.shadow.querySelector('.icon');
        this._icon.src = importer.baseURL + "/components/cardIcon/info.svg";
        this._title = this.shadow.querySelector('.title');
    }

    static get observedAttributes() {
        return ['icon', 'alt-text', 'title', 'dark'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // return if nothing changed
        if (oldValue === newValue) return;
        // set new values
        switch (name) {
            case 'icon':
                if (newValue) this._icon.src = newValue;
                break;
            case 'title':
                if (newValue) this._title.innerText = newValue;
                break;
            case 'dark':
                if (newValue === 'true') {
                    this._title.classList.add('dark');
                    this._icon.classList.add('dark');
                    this._content.classList.add('dark');
                    this._wrapper.classList.add('dark');
                }
                break;
            case 'alt-text':
                if (newValue) this._icon.alt = newValue;
                break;
        }

    }
}

customElements.define('card-icon', CardIcon);
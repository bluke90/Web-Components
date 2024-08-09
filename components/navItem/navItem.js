class NavItem extends HTMLElement {
    constructor() {
        super();

        // create a shadow root
        this.shadow = this.attachShadow({mode: 'closed'});

        // get the template
        this._template = importer.templates.find(c => c.component === 'navItem');
        this.shadow.append(this._template.template.content.cloneNode(true));
        
        this._anchor = this.shadow.querySelector("#nav-link");
        this._label = this.textContent;
        
        
        this._anchor.innerText = this._label;

    }
    static get observedAttributes(){
        return ["link"];
    }

    attributeChangedCallback(name, oldValue, newValue){
        if(oldValue === newValue) return;
        switch(name){
            case "link":
                if(newValue) this._anchor.href = newValue;
                break;
        }
    }
}
customElements.define("nav-item", NavItem);
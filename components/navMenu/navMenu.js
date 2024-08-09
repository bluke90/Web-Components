class NavMenu extends HTMLElement {
    constructor() {
        super();

        // create a shadow root
        this.shadow = this.attachShadow({mode: 'closed'});

        // get the template
        this._template = importer.templates.find(c => c.component === 'navMenu');
        this.shadow.append(this._template.template.content.cloneNode(true));
        
        this._toggle = this.shadow.querySelector("#menu-toggle-btn");
        this._toggle.addEventListener("click", this.toggleMenu.bind(this));
        this._menu = this.shadow.querySelector(".wrapper");
    }
    
    static get observedAttributes(){
        return ["background-color", "top"];
    }

    connectedCallback(){
        let toolbar = document.querySelector(".toolbar");
        if (toolbar) {
            this._toggle.style.top = "-4rem";
        }

    }
    
    attributeChangedCallback(name, oldValue, newValue){
        if(oldValue === newValue) return;
        switch(name){
            case "background-color":
                if(newValue) this._menu.style.backgroundColor = newValue;
                break;
            case "top":
                if(newValue) this._menu.style.top = newValue;
                break;
        }
    }
    
    toggleMenu(){
        this._menu.classList.toggle("open");
        this._toggle.classList.toggle("open");
    }

}
customElements.define("nav-menu", NavMenu);
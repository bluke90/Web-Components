class ModalView extends HTMLElement {
    constructor() {
        super();

        // create a shadow root
        this.shadow = this.attachShadow({mode: 'closed'});

        // get the template
        this._template = importer.templates.find(c => c.component === 'modalView');
        this.shadow.append(this._template.template.content.cloneNode(true));


        // get elements
        this._modal = this.shadow.querySelector(".container");
        this._anchor = this.shadow.querySelector(".binder");
        this._close = this.shadow.querySelector("#close-modal");
        this._close.addEventListener("click", this.close.bind(this));
        this._anchor.addEventListener("click", this.open.bind(this));

    }

    static get observedAttributes(){
        return ["text", "button"];
    }

    attributeChangedCallback(name, oldValue, newValue){
        if(oldValue === newValue) return;
        switch(name){
            case "text":
                if(newValue) this._anchor.innerText = newValue;
                break;
            case "button":
                if(newValue === "true") this._anchor.classList.add("button");
                break;
        }
    }

    open(){
        this._modal.style.display = "flex";
    }
    close() {
        this._modal.style.display = "none";
    }



}
customElements.define("modal-view", ModalView);
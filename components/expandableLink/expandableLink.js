class ExpandableLink extends HTMLElement {

    constructor() {
        super();

        // create a shadow root
        this.shadow = this.attachShadow({mode: 'closed'});

        // get the template
        this._template = importer.templates.find(c => c.component === 'expandableLink');
        this.shadow.append(this._template.template.content.cloneNode(true));


        // get elements
        this._anchor = this.shadow.querySelector(".link");
        this._anchor.addEventListener("click", this.expand.bind(this));
        this._list = this.shadow.querySelector(".list-container");
    }

    static get observedAttributes(){
        return ["link", "text", "color", "font-size"];
    }

    attributeChangedCallback(name, oldValue, newValue){
        if(oldValue === newValue) return;
        switch(name){
            case "link":
                if(newValue) this._anchor.href = newValue;
                break;
            case "text":
                if(newValue) this._anchor.innerText = newValue;
                break;
            case "color":
                if(newValue) this._anchor.style.color = newValue;
                break;
            case "font-size":
                if(newValue) this._anchor.style.fontSize = newValue;
                break;
        }
    }

    expand(){
        this._list.style.maxHeight = this._list.style.maxHeight ? null : this._list.scrollHeight + "px"
        this._anchor.classList.toggle("expand");
    }



}
customElements.define("expandable-link", ExpandableLink);
class TimelineEvent extends HTMLElement {

    constructor() {
        super();
        this.hasImage = false;
        // create a shadow root
        this.shadow = this.attachShadow({mode: 'open'});

        // Append Template to shadow root
        this._template = importer.templates.find(c => c.component === 'timelineEvent');
        this.shadow.append(this._template.template.content.cloneNode(true));
        
        // get elements
        this._year = this.shadow.querySelector(".year");
        this._imageContainer = this.shadow.querySelector(".day__img");
    }
    
    static get observedAttributes(){
        return ["year", "image", "image-alt"];
    }
    
    attributeChangedCallback(name, oldValue, newValue){
        if(oldValue === newValue) return;
        switch(name){
            case "year":
                if(newValue) this._year.innerText = newValue;
                break;
            case "image":
                if(newValue) {
                    let img = document.createElement("img");
                    img.src = newValue;
                    this._imageContainer.append(img);
                }
                break;
            case "image-alt":
                if (newValue && this.hasImage) {
                    this._imageContainer.querySelector("img").alt = newValue;
                }
                break;
        }
        
    }
    
    


}
customElements.define('timeline-event', TimelineEvent);
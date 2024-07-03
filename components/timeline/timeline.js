class Timeline extends HTMLElement {
    
    constructor() {
        super();
        
        // create a shadow root
        this.shadow = this.attachShadow({mode: 'closed'});
        
        // Append Template to shadow root
        this._template = importer.templates.find(c => c.component === 'timeline');
        this.shadow.append(this._template.template.content.cloneNode(true));
        
        // get elements        
        this._days = this.shadow.querySelector(".days");
        this._events = this.getElementsByTagName("timeline-event");
        for (let i = 0; i < this._events.length; i++) {
            if (i % 2 !== 0) {
                this._events[i].shadowRoot.querySelector(".day").classList.add("odd");
            }
        }
        this._days.append(...this._events);
        
    }
    
    connectedCallback(){
        this._days = this.shadow.querySelector(".days");
        this._events = this.getElementsByTagName("timeline-event");
        for (let i = 0; i < this._events.length; i++) {
            if (i % 2 !== 0) {
                this._events[i].shadowRoot.querySelector(".day").classList.add("odd");
            }
        }
        this._days.append(...this._events);
    }
       
    
}
customElements.define('time-line', Timeline);
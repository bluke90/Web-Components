class Timeline extends HTMLElement {
    
    constructor() {
        super();
        
        // create a shadow root
        this.shadow = this.attachShadow({mode: 'closed'});
        
        // Append Template to shadow root
        this._template = importer.templates.find(c => c.component === 'timeline');
        this.shadow.append(this._template.template.content.cloneNode(true));
    }
    
    
}
customElements.define('time-line', Timeline);
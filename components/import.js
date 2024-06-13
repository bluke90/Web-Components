class ComponentImporter {

  constructor($, drupalSettings) {
    // get base url from drupal settings
    this.baseURL = drupalSettings.path.themeUrl;

    this.components = [];
    this.templates = [];
    this.themeName = this.baseURL.split('/')[1];
    this.jsonPath = "/" + this.baseURL + '/components' + '/components.json';

    this._init = this._init.bind(this);
  }

  getBaseURL() {
    let split = this.baseURL.split('/');
    if (split[0] !== 'themes') {
      while (split[0] !== 'themes') {
        split.shift();
      }
    }
    return split.join('/');
  }

  importComponentJS (theme, component) {
    let script = document.createElement('script');
    script.src = '/themes/' + theme + '/components/' + component + '/' + component + '.js';
    document.head.appendChild(script);
  }

  importComponentHTML (component) {
    // set the path to the component html file
    let src = '/themes/' + this.themeName + '/components/' + component + '/' + component + '.html';

    // fetch the html file
    fetch(src).then(response => response.text()).then((data) => {
      let template = new DOMParser().parseFromString(data, 'text/html');
      let obj = {component: component, template: template.firstChild.firstChild.firstChild};
      this.templates.push(obj);
    });
  }

  async importComponentHTMLasync (component) {
    // set the path to the component html file
    let src = '/themes/' + this.themeName + '/components/' + component + '/' + component + '.html';

    // fetch the html file
    await fetch(src).then(response => response.text()).then((data) => {
      let template = new DOMParser().parseFromString(data, 'text/html');
      let obj = {component: component, template: template.firstChild.firstChild.firstChild};
      // add the template to the templates array
      this.templates.push(obj);
    });
  }

  async loadJsonData (jsonPath) {
    // Use path to read JSON file
    await fetch(jsonPath).then(response => response.text()).then((data) => {
      const obj = JSON.parse(data);
      this.themeName = obj.theme;
      this.components = obj.components;
    });
  }

  async _init() {
    // get json data
    await this.loadJsonData(this.jsonPath);
    // import all the html files and add to templates array
    for (const component of this.components) {
      await this.importComponentHTMLasync(component);
    }
    // import all js files
    for (const component of this.components) {
      this.importComponentJS(this.themeName, component);
    }
  }

}

let importer = new ComponentImporter(jQuery, drupalSettings);
jQuery(document).ready(importer._init);



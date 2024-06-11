$ = jQuery;

// ============= Functions =============
function importComponentJS (theme, component) {
  let script = document.createElement('script');
  script.src = '/themes/' + theme + '/components/' + component + '/' + component + '.js';
  document.head.appendChild(script);
}

async function importComponentHTML (theme, component) {
  $.ajax({
    url: "/themes/" + theme + "/components/" + component + "/" + component + ".html",
    context: document.body,
    success: function (result) {
      document.body.innerHTML += result;
    }
  });
}

async function loadJsonData (jsonPath) {
  // Use path to read JSON file
  await fetch(jsonPath).then(response => response.text()).then((data) => {
    const obj = JSON.parse(data);
    theme = obj.theme;
    components = obj.components;
  });
}
// ============= Script =============


// Declare variables
let theme = '';
let components = [];

// Get the path of the current script
let script = document.currentScript;
// Use script path to determine JSON path
let env = script.src.split('/');
env.pop();
env.pop();
while (env[0] !== 'themes') {
  env.shift();
}
env = env.join('/');
jsonPath = "/" + env + '/components' + '/components.json';

// Load JSON data asynchronously
loadJsonData(jsonPath).then(() => {
  // Import component JS and HTML
  components.forEach((component) => {
    if (component !== '') {
      importComponentHTML(theme, component).then(r =>
      importComponentJS(theme, component));
    }
  });
});






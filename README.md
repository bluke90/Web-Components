# Web Components Library

## Setup:
    - Add following theme hook to MYTHEME.theme
```php
    function HOOK_preprocess_html(&$variables) {
      $variables['#attached']['drupalSettings']['path']['themeUrl'] = \Drupal::theme()->getActiveTheme()->getPath();
    } 
```
    - Place components folder at top level of your theme

    - Add theme name to the components.json file.
        *(theme name should match the folder containing your theme)

    - Add components/import.js to libraries.yml with
        jquery and drupalSettings as dependencies (see below)
```yml
component-library:
  version: VERSION
  js:
    components/import.js:
      weight: -1
  dependencies:
    - core/jquery
    - core/drupalSettings
```


## Adding components Instructions:
    - Create a folder with the name of your web component

    - Add javascript file with the same name as folder

    - Add HTML template file with the same name as folder

    - Add Components to the components.json file under the "Components" section

    - Import script will automatically read in all of your
        javascript and HTML template files

    - Be sure to use the following code to get the component template
``` js
    // Where COMPONENT_NAME = the name of your web component
    importer.templates.find(c => c.component === 'COMPONENT_NAME');
```
    - Also be sure youre selecting the content and cloning the node as shown below
```js
    // Where this.shadow refrences your shadowRoot Instance
    this.shadow.append(this._template.template.content.cloneNode(true));
```

## Added JavaScript variables
    - baseURL | returns the path to the theme (themes/MYTHEME)
    - themeName | returns the name of the theme (MYTHEME)

## Notes
    - Drupal: When using web components in twig template, {{ title_prefix }} and {{ title_suffix }} in order to 
        maintain ability to edit block content inside layout builder (See examples folder)


## Included Components
### Modal
    - Generic modal
        - Styling:
            - Banner color uses --primary-color-1
        - Slots:
            - title - displayed at top of modal
            - body - displayed in body of modal
        - Observed Attributes:
            - open - when true, modal is displayed
### ParagraphBlock
    - Simple block with a header and header banner, and a body of text below.
        - Styling:
            - Banner color uses --primary-color-1
        - Slots: (Works best when using spans in slots)
            - title - displayed at top of block
            - content - displays body of block
<<<<<<< Updated upstream
        - ObservedAttributes: 
=======
        - ObservedAttributes: 

### FileDownload
    - Provides a box with a file icon and file name that users can click in order to download the file
        - Styling:
            - Banner color uses --primary-color-1
        - Slots: (Works best when using spans in slots)
            - file-name - displayed above file icon at the top of the box.
        - Observed Attributes:
            - link - this is where you will provide the link to the file
>>>>>>> Stashed changes

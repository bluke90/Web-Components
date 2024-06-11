# Web Components Import Script

## Setup:
    - Place components folder at top level of your theme
    - Add theme name to the components.json file.
        *(theme name should match the folder containing your theme)


## Instructions:
    - Create a folder with the name of your web component
    - Add javascript file with the same name as folder
    - Add HTML template file with the same name as folder
    - Add Components to the components.json file under the "Components" section
    - Import script will automatically read in all of your
        javascript and HTML template files


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
        - ObservedAttributes: 

/**
 * Variant of Factory method where it lets you create objects realted by a common theme.
 */
class ComponentsFactory {

    createComponent(name, theme) {
        if(theme === 'light') {
            return new LightComponents().getComponent(name);
        }else {
            return new DarkComponents().getComponent(name);
        }
    }
}

class LightComponents {
    constructor() {
        this.Button = new Button('light');
        this.TextBox = new TextBox('light');
    }

    getComponent(name) {
        if(name === 'button')
            return this.Button
        if(name === 'textbox')
            return this.TextBox
    }
}

class DarkComponents {
    constructor() {
        this.Button = new Button('dark');
        this.TextBox = new TextBox('dark');
    }

    getComponent(name) {
        if(name === 'button')
            return this.Button
        if(name === 'textbox')
            return this.TextBox
    }
}

const Button = function (theme) {
    this.text = 'Button';
    this.theme = theme;
}

const TextBox = function(theme) {
    this.text = 'Text Box';
    this.theme = theme;
}

const Factory = new ComponentsFactory()
const lightButton = Factory.createComponent('button', 'light');
const darkTextbox = Factory.createComponent('textbox', 'dark');
console.log(lightButton, darkTextbox);

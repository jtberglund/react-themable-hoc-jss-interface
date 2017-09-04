# react-themable-hoc-jss-interface

Allows [JSS](https://github.com/cssinjs/jss) to be used with [react-themable-hoc](https://github.com/jtberglund/react-themable-hoc)

```
npm install --save react-themable-hoc-jss-interface
```

## Usage

```js
import JSSInterface from 'react-themable-hoc-jss-interface';
import { ThemeManager } from 'react-themable-hoc';
import jss from 'jss';

// Make sure to setup JSS
jss.setup(preset());

// Create JSSInterface and add to the ThemeManager
const jssInterface = new JSSInterface();
ThemeManager.setStyleInterface(jssInterface);
ThemeManager.addTheme('theme1', {
    // theme styles
});
```

To use custom jss plugins, simply pass your custom JSS to the `JSSInterface` constructor

```js
import JSSInterface from 'react-themable-hoc-jss-interface';
import jss from 'jss';
import camelCase from 'jss-camel-case';

// Setup jss with plugins
jss.use(camelCase());

const jssInterface = new JSSInterface(jss);
```

## License

[MIT](https://github.com/jtberglund/react-themable-hoc-jss-interface/blob/master/LICENSE)
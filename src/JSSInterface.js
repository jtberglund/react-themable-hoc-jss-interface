import { create } from 'jss';

export default class JSSInterface {
    constructor(jss = create(), options = {}) {
        this.jss = jss;
        this.options = options;
    }

    css(styles) {
        const styleSheet = this.jss.createStyleSheet(styles, this.options).attach();
        return { ...styleSheet.classes };
    }
}

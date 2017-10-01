import { StyleInterface } from 'react-themable-hoc';

declare module 'react-themable-hoc-jss-interface' {
    type JSS = any;
    export default class JSSInterface implements StyleInterface {
        constructor(jss?: JSS);
        css: (styles?: any) => {} | undefined;
    }
}

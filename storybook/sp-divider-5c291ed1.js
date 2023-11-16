import { f } from './divider.css-d14b5633.js';
import { S as SizedMixin } from './sizedMixin-95b38e3e.js';
import { S as SpectrumElement, n, d as defineElement } from './define-element-467f3dc4.js';
import { x } from './lit-html-126adc72.js';

var p=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var l=(s,r,e,i)=>{for(var t=i>1?void 0:i?u(r,e):r,o=s.length-1,a;o>=0;o--)(a=s[o])&&(t=(i?a(r,e,t):a(t))||t);return i&&t&&p(r,e,t),t};class Divider extends SizedMixin(SpectrumElement,{validSizes:["s","m","l"],noDefaultSize:!0}){constructor(){super(...arguments);this.vertical=!1;}render(){return x``}firstUpdated(e){super.firstUpdated(e),this.setAttribute("role","separator");}updated(e){super.updated(e),e.has("vertical")&&(this.vertical?this.setAttribute("aria-orientation","vertical"):this.removeAttribute("aria-orientation"));}}Divider.styles=[f],l([n({type:Boolean,reflect:!0})],Divider.prototype,"vertical",2);

defineElement("sp-divider",Divider);
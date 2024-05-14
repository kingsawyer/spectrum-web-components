import{L as t}from"./swc.CXURDDcr.js";import{F as o}from"./swc.D6vhSPlk.js";import{i as r}from"./swc.DpYYvrpg.js";import{a as e}from"./swc.DeJGzahI.js";import{n as c}from"./swc.BtFMZsX5.js";import{d as a}from"./swc.JlveB6nj.js";const i=r`
    :host{--spectrum-link-animation-duration:var(--spectrum-animation-duration-100);--spectrum-link-text-color-primary-default:var(--spectrum-accent-content-color-default);--spectrum-link-text-color-primary-hover:var(--spectrum-accent-content-color-hover);--spectrum-link-text-color-primary-active:var(--spectrum-accent-content-color-down);--spectrum-link-text-color-primary-focus:var(--spectrum-accent-content-color-key-focus);--spectrum-link-text-color-secondary-default:var(--spectrum-neutral-content-color-default);--spectrum-link-text-color-secondary-hover:var(--spectrum-neutral-content-color-hover);--spectrum-link-text-color-secondary-active:var(--spectrum-neutral-content-color-down);--spectrum-link-text-color-secondary-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-link-text-color-white:var(--spectrum-white);--spectrum-link-text-color-black:var(--spectrum-black)}@media (forced-colors:active){:host{--highcontrast-link-text-color-primary-default:LinkText;--highcontrast-link-text-color-primary-hover:LinkText;--highcontrast-link-text-color-primary-active:LinkText;--highcontrast-link-text-color-primary-focus:LinkText;--highcontrast-link-text-color-secondary-default:LinkText;--highcontrast-link-text-color-secondary-hover:LinkText;--highcontrast-link-text-color-secondary-active:LinkText;--highcontrast-link-text-color-secondary-focus:LinkText;--highcontrast-link-text-color-white:LinkText;--highcontrast-link-text-color-black:LinkText}}a{background-color:initial;-webkit-text-decoration-skip:objects;text-decoration-skip:objects;transition:color var(--mod-link-animation-duration,var(--spectrum-link-animation-duration))ease-in-out;cursor:pointer;color:var(--highcontrast-link-text-color-primary-default,var(--mod-link-text-color-primary-default,var(--spectrum-link-text-color-primary-default)));outline:none;-webkit-text-decoration:underline;text-decoration:underline}a:active{color:var(--highcontrast-link-text-color-primary-active,var(--mod-link-text-color-primary-active,var(--spectrum-link-text-color-primary-active)))}a:focus-visible{color:var(--highcontrast-link-text-color-primary-focus,var(--mod-link-text-color-primary-focus,var(--spectrum-link-text-color-primary-focus)));text-decoration:underline double;text-decoration-color:var(--highcontrast-link-focus-color,inherit)}:host([variant=secondary]) a{color:var(--highcontrast-link-text-color-secondary-default,var(--mod-link-text-color-secondary-default,var(--spectrum-link-text-color-secondary-default)))}:host([variant=secondary]) a:active{color:var(--highcontrast-link-text-color-secondary-active,var(--mod-link-text-color-secondary-active,var(--spectrum-link-text-color-secondary-active)))}:host([variant=secondary]) a:focus{color:var(--highcontrast-link-text-color-secondary-focus,var(--mod-link-text-color-secondary-focus,var(--spectrum-link-text-color-secondary-focus)))}:host([quiet]) a{-webkit-text-decoration:none;text-decoration:none}:host([static=white]) a,:host([static=white]) a:active,:host([static=white]) a:focus{color:var(--highcontrast-link-text-color-white,var(--mod-link-text-color-white,var(--spectrum-link-text-color-white)))}:host([static=black]) a,:host([static=black]) a:active,:host([static=black]) a:focus{color:var(--highcontrast-link-text-color-black,var(--mod-link-text-color-black,var(--spectrum-link-text-color-black)))}@media (hover:hover){a:hover{color:var(--highcontrast-link-text-color-primary-hover,var(--mod-link-text-color-primary-hover,var(--spectrum-link-text-color-primary-hover)))}:host([variant=secondary]) a:hover{color:var(--highcontrast-link-text-color-secondary-hover,var(--mod-link-text-color-secondary-hover,var(--spectrum-link-text-color-secondary-hover)))}:host([quiet]) a:hover{-webkit-text-decoration:underline;text-decoration:underline}:host([static=white]) a:hover{color:var(--highcontrast-link-text-color-white,var(--mod-link-text-color-white,var(--spectrum-link-text-color-white)))}:host([static=black]) a:hover{color:var(--highcontrast-link-text-color-black,var(--mod-link-text-color-black,var(--spectrum-link-text-color-black)))}}:host{display:inline}:host(:focus){outline:none}:host([href]) a:focus-visible{text-decoration:underline double}:host([disabled]){pointer-events:none}
`;var n=Object.defineProperty,l=(t,o,r,e)=>{for(var c,a=void 0,i=t.length-1;i>=0;i--)(c=t[i])&&(a=c(o,r,a)||a);return a&&n(o,r,a),a};class s extends(t(o)){constructor(){super(...arguments),this.quiet=!1}static get styles(){return[i]}get focusElement(){return this.anchorElement}render(){return this.renderAnchor({id:"anchor"})}}l([e("#anchor")],s.prototype,"anchorElement"),l([c({type:String,reflect:!0})],s.prototype,"variant"),l([c({type:String,reflect:!0})],s.prototype,"static"),l([c({type:Boolean,reflect:!0,attribute:"quiet"})],s.prototype,"quiet"),a("sp-link",s);
//# sourceMappingURL=swc.DsRxkdkQ.js.map
import{i as r}from"./swc.CG3TZKt7.js";import{S as e}from"./swc.02id7ZvS.js";import{x as i}from"./swc.BY-CAm7w.js";import{n as t,S as c}from"./swc.DRmmzwO0.js";import{d as a}from"./swc.JlveB6nj.js";var d=r`
    :host{--spectrum-divider-thickness:var(--spectrum-divider-thickness-medium);--spectrum-divider-background-color:var(--spectrum-divider-background-color-medium);--spectrum-divider-background-color-small:var(--spectrum-gray-300);--spectrum-divider-background-color-medium:var(--spectrum-gray-300);--spectrum-divider-background-color-large:var(--spectrum-gray-800);--spectrum-divider-background-color-small-static-white:var(--spectrum-transparent-white-300);--spectrum-divider-background-color-medium-static-white:var(--spectrum-transparent-white-300);--spectrum-divider-background-color-large-static-white:var(--spectrum-transparent-white-800);--spectrum-divider-background-color-small-static-black:var(--spectrum-transparent-black-300);--spectrum-divider-background-color-medium-static-black:var(--spectrum-transparent-black-300);--spectrum-divider-background-color-large-static-black:var(--spectrum-transparent-black-800)}:host([size=s]){--spectrum-divider-thickness:var(--spectrum-divider-thickness-small);--spectrum-divider-background-color:var(--spectrum-divider-background-color-small)}:host{--spectrum-divider-thickness:var(--spectrum-divider-thickness-medium);--spectrum-divider-background-color:var(--spectrum-divider-background-color-medium)}:host([size=l]){--spectrum-divider-thickness:var(--spectrum-divider-thickness-large);--spectrum-divider-background-color:var(--spectrum-divider-background-color-large)}@media (forced-colors:active){:host,:host([size=s]),:host,:host([size=l]){--spectrum-divider-background-color:CanvasText;--spectrum-divider-background-color-small-static-white:CanvasText;--spectrum-divider-background-color-medium-static-white:CanvasText;--spectrum-divider-background-color-large-static-white:CanvasText;--spectrum-divider-background-color-small-static-black:CanvasText;--spectrum-divider-background-color-medium-static-black:CanvasText;--spectrum-divider-background-color-large-static-black:CanvasText}}:host{block-size:var(--mod-divider-thickness,var(--spectrum-divider-thickness));border:none;border-width:var(--mod-divider-thickness,var(--spectrum-divider-thickness));border-radius:var(--mod-divider-thickness,var(--spectrum-divider-thickness));background-color:var(--mod-divider-background-color,var(--spectrum-divider-background-color));inline-size:100%;overflow:visible}:host([static=white][size=s]){--spectrum-divider-background-color:var(--mod-divider-background-color-small-static-white,var(--spectrum-divider-background-color-small-static-white))}:host([static=white]){--spectrum-divider-background-color:var(--mod-divider-background-color-medium-static-white,var(--spectrum-divider-background-color-medium-static-white))}:host([static=white][size=l]){--spectrum-divider-background-color:var(--mod-divider-background-color-large-static-white,var(--spectrum-divider-background-color-large-static-white))}:host([static=black][size=s]){--spectrum-divider-background-color:var(--mod-divider-background-color-small-static-black,var(--spectrum-divider-background-color-small-static-black))}:host([static=black]){--spectrum-divider-background-color:var(--mod-divider-background-color-medium-static-black,var(--spectrum-divider-background-color-medium-static-black))}:host([static=black][size=l]){--spectrum-divider-background-color:var(--mod-divider-background-color-large-static-black,var(--spectrum-divider-background-color-large-static-black))}:host([vertical]){inline-size:var(--mod-divider-thickness,var(--spectrum-divider-thickness));margin-block:var(--mod-divider-vertical-margin);block-size:var(--mod-divider-vertical-height);align-self:var(--mod-divider-vertical-align);block-size:100%}:host{display:block}hr{border:none;margin:0}
`,s=Object.defineProperty,o=Object.getOwnPropertyDescriptor;class l extends(e(c,{validSizes:["s","m","l"],noDefaultSize:!0})){constructor(){super(...arguments),this.vertical=!1}render(){return i``}firstUpdated(r){super.firstUpdated(r),this.setAttribute("role","separator")}updated(r){super.updated(r),r.has("vertical")&&(this.vertical?this.setAttribute("aria-orientation","vertical"):this.removeAttribute("aria-orientation"))}}l.styles=[d],((r,e,i,t)=>{for(var c,a=t>1?void 0:t?o(e,i):e,d=r.length-1;d>=0;d--)(c=r[d])&&(a=(t?c(e,i,a):c(a))||a);t&&a&&s(e,i,a)})([t({type:Boolean,reflect:!0})],l.prototype,"vertical",2),a("sp-divider",l);export{d as s};
//# sourceMappingURL=swc.BYEDWjmO.js.map
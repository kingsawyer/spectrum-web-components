import{i as a}from"./swc.DpYYvrpg.js";import{S as n,n as r}from"./swc.BtFMZsX5.js";import{x as i}from"./swc.DAPqj1CM.js";import{d as t}from"./swc.JlveB6nj.js";import"./swc.De-DyjG3.js";const e=a`
    :host{pointer-events:none;visibility:hidden;opacity:0;transition:transform var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))ease-in-out,opacity var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))ease-in-out,visibility 0s linear var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))}:host([open]){pointer-events:auto;visibility:visible;opacity:1;transition-delay:var(--mod-overlay-animation-duration-opened,var(--spectrum-animation-duration-0,0s))}:host{--spectrum-underlay-background-entry-animation-delay:var(--spectrum-animation-duration-0);--spectrum-underlay-background-exit-animation-ease:var(--spectrum-animation-ease-in);--spectrum-underlay-background-entry-animation-ease:var(--spectrum-animation-ease-out);--spectrum-underlay-background-exit-animation-duration:var(--spectrum-animation-duration-300);--spectrum-underlay-background-entry-animation-duration:var(--spectrum-animation-duration-600);--spectrum-underlay-background-exit-animation-delay:var(--spectrum-animation-duration-200);--spectrum-underlay-background-color:rgba(var(--spectrum-black-rgb),var(--spectrum-overlay-opacity));background-color:var(--mod-underlay-background-color,var(--spectrum-underlay-background-color));z-index:1;transition:opacity var(--mod-underlay-background-exit-animation-duration,var(--spectrum-underlay-background-exit-animation-duration))var(--mod-underlay-background-exit-animation-ease,var(--spectrum-underlay-background-exit-animation-ease))var(--mod-underlay-background-exit-animation-delay,var(--spectrum-underlay-background-exit-animation-delay)),visibility 0s linear calc(var(--mod-underlay-background-exit-animation-delay,var(--spectrum-underlay-background-exit-animation-delay)) + var(--mod-underlay-background-exit-animation-duration,var(--spectrum-underlay-background-exit-animation-duration)));position:fixed;inset-block:0;inset-inline:0;overflow:hidden}:host([open]){transition:opacity var(--mod-underlay-background-entry-animation-duration,var(--spectrum-underlay-background-entry-animation-duration))var(--mod-underlay-background-entry-animation-ease,var(--spectrum-underlay-background-entry-animation-ease))var(--mod-underlay-background-entry-animation-delay,var(--spectrum-underlay-background-entry-animation-delay))}
`;var o=Object.defineProperty;class d extends n{constructor(){super(...arguments),this.canClick=!1,this.open=!1}static get styles(){return[e]}click(){this.dispatchEvent(new Event("close"))}handlePointerdown(){this.canClick=!0}handlePointerup(){this.canClick&&this.click(),this.canClick=!1}render(){return i``}firstUpdated(){this.addEventListener("pointerdown",this.handlePointerdown),this.addEventListener("pointerup",this.handlePointerup)}}((a,n,r,i)=>{for(var t,e=void 0,d=a.length-1;d>=0;d--)(t=a[d])&&(e=t(n,r,e)||e);e&&o(n,r,e)})([r({type:Boolean,reflect:!0})],d.prototype,"open"),t("sp-underlay",d);
//# sourceMappingURL=swc.D2HAJ_5r.js.map
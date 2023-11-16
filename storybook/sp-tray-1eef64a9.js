import './sp-underlay-fdfe1df4.js';
import { f as firstFocusableIn } from './first-focusable-in-184a26e2.js';
import { M as MatchMediaController } from './MatchMedia-0123f918.js';
import { v } from './modal.css-ad9e835e.js';
import { i } from './lit-element-9354aa77.js';
import { S as SpectrumElement, n, d as defineElement } from './define-element-467f3dc4.js';
import { x } from './lit-html-126adc72.js';
import { i as i$1 } from './query-d0113d5a.js';
import './focusable-selectors-252ae36e.js';
import './base-511c8c11.js';

const t=i`
:host{bottom:0;display:flex;inline-size:100%;inset-inline-start:0;justify-content:center;position:fixed}:host{--spectrum-tray-exit-animation-delay:0s;--spectrum-tray-entry-animation-delay:0.16s;--spectrum-tray-max-inline-size:375px;--spectrum-tray-spacing-edge-to-tray-safe-zone:64px;--spectrum-tray-entry-animation-duration:var(
--spectrum-animation-duration-500
);--spectrum-tray-exit-animation-duration:var(
--spectrum-animation-duration-100
);--spectrum-tray-corner-radius:var(--spectrum-corner-radius-100);--spectrum-tray-background-color:var(--spectrum-background-layer-2-color)}@media (forced-colors:active){:host{--highcontrast-tray-background-color:Background}}.tray{background-color:var(
--highcontrast-tray-background-color,var(--mod-tray-background-color,var(--spectrum-tray-background-color))
);border-radius:unset;box-sizing:border-box;inline-size:100%;margin-block-start:var(
--mod-tray-spacing-edge-to-tray-safe-zone,var(--spectrum-tray-spacing-edge-to-tray-safe-zone)
);max-block-size:calc(100vh - var(
--mod-tray-spacing-edge-to-tray-safe-zone,
var(--spectrum-tray-spacing-edge-to-tray-safe-zone)
));outline:none;overflow:auto;padding-block-end:var(
--mod-tray-bottom-to-content-area,var(--spectrum-tray-top-to-content-area)
);padding-block-start:var(
--mod-tray-top-to-content-area,var(--spectrum-tray-top-to-content-area)
);transform:translateY(100%);transition:opacity var(
--mod-tray-exit-animation-duration,var(--spectrum-tray-exit-animation-duration)
) cubic-bezier(.5,0,1,1) var(
--mod-tray-exit-animation-delay,var(--spectrum-tray-exit-animation-delay)
),visibility var(
--mod-tray-exit-animation-duration,var(--spectrum-tray-exit-animation-duration)
) linear calc(var(
--mod-tray-exit-animation-delay,
var(--spectrum-tray-exit-animation-delay)
) + var(
--mod-tray-exit-animation-duration,
var(--spectrum-tray-exit-animation-duration)
)),transform var(
--mod-tray-exit-animation-duration,var(--spectrum-tray-exit-animation-duration)
) cubic-bezier(.5,0,1,1) var(
--mod-tray-exit-animation-delay,var(--spectrum-tray-exit-animation-delay)
)}:host([open]) .tray{transform:translateY(0);transition:transform var(
--mod-tray-entry-animation-duration,var(--spectrum-tray-entry-animation-duration)
) cubic-bezier(0,0,.4,1) var(
--mod-tray-entry-animation-delay,var(--spectrum-tray-entry-animation-delay)
),opacity var(
--spectrum-tray-entry-animation-duration,var(--mod-tray-entry-animation-duration)
) cubic-bezier(0,0,.4,1) var(
--mod-tray-entry-animation-delay,var(--spectrum-tray-entry-animation-delay)
)}@media screen and (orientation:landscape){.tray{border-top-left-radius:var(
--mod-tray-corner-radius,var(--spectrum-tray-corner-radius)
);border-top-right-radius:var(
--mod-tray-corner-radius,var(--spectrum-tray-corner-radius)
);max-inline-size:var(
--mod-tray-max-inline-size,var(--spectrum-tray-max-inline-size)
)}}:host{align-items:flex-end;max-height:100vh;max-height:100dvh;position:fixed!important}sp-underlay{touch-action:none}.tray{display:inline-flex;overscroll-behavior:contain}::slotted(.visually-hidden){clip:rect(0,0,0,0);border:0;clip-path:inset(50%);height:1px;margin:0 -1px -1px 0;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}
`;var y = t;

var l=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var a=(o,r,e,i)=>{for(var t=i>1?void 0:i?p(r,e):r,s=o.length-1,n;s>=0;s--)(n=o[s])&&(t=(i?n(r,e,t):n(t))||t);return i&&t&&l(r,e,t),t};class Tray extends SpectrumElement{constructor(){super(...arguments);this.open=!1;this.prefersMotion=new MatchMediaController(this,"(prefers-reduced-motion: no-preference)");this.transitionPromise=Promise.resolve();this.animating=!1;}static get styles(){return [v,y]}focus(){const e=firstFocusableIn(this);e?e.focus():this.children.length===1?this.tray.focus():super.focus();}overlayWillCloseCallback(){return this.open?(this.close(),!0):this.animating}close(){this.open=!1,this.prefersMotion.matches||this.dispatchClosed();}dispatchClosed(){this.dispatchEvent(new Event("close",{bubbles:!0}));}handleUnderlayTransitionend(){this.open||(this.resolveTransitionPromise(),this.dispatchClosed());}handleTrayTransitionend(){this.open&&this.resolveTransitionPromise();}update(e){e.has("open")&&e.get("open")!==void 0&&this.prefersMotion.matches&&(this.animating=!0,this.transitionPromise=new Promise(i=>{this.resolveTransitionPromise=()=>{this.animating=!1,i();};})),super.update(e);}render(){return x`
            <sp-underlay
                ?open=${this.open}
                @click=${this.close}
                @transitionend=${this.handleUnderlayTransitionend}
            ></sp-underlay>
            <div
                class="tray modal"
                tabindex="-1"
                @transitionend=${this.handleTrayTransitionend}
            >
                <slot></slot>
            </div>
        `}async getUpdateComplete(){const e=await super.getUpdateComplete();return await this.transitionPromise,e}}a([n({type:Boolean,reflect:!0})],Tray.prototype,"open",2),a([i$1(".tray")],Tray.prototype,"tray",2);

defineElement("sp-tray",Tray);
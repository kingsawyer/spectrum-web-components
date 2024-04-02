import { L as LikeAnchor } from './like-anchor-A-VxslPW.js';
import { F as Focusable } from './focusable-GZ06kf6F.js';
import { O as ObserveSlotText } from './observe-slot-text-RiUvi5fT.js';
import { i } from './lit-element-xBOPiTek.js';
import { x } from './lit-html-GmIhAbMP.js';
import { n } from './define-element-tO8-r1bu.js';
import { i as i$1 } from './query-JMOstM_r.js';

const e=i`
    :host{vertical-align:top;--spectrum-progress-circle-size:var(--spectrum-workflow-icon-size-100);--spectrum-icon-size:var(--spectrum-workflow-icon-size-100);display:inline-flex}:host([dir]){-webkit-appearance:none}:host([disabled]){pointer-events:none;cursor:auto}#button{position:absolute;inset:0}::slotted(sp-overlay),::slotted(sp-tooltip){position:absolute}:host:after,::slotted(*){pointer-events:none}slot[name=icon]::slotted(svg),slot[name=icon]::slotted(img){fill:currentColor;stroke:currentColor;block-size:var(--spectrum-icon-size,var(--spectrum-workflow-icon-size-100));inline-size:var(--spectrum-icon-size,var(--spectrum-workflow-icon-size-100))}[icon-only]+#label{display:contents}:host([size=xs]){--spectrum-progress-circle-size:var(--spectrum-workflow-icon-size-50);--spectrum-icon-size:var(--spectrum-workflow-icon-size-50)}:host([size=s]){--spectrum-progress-circle-size:var(--spectrum-workflow-icon-size-75);--spectrum-icon-size:var(--spectrum-workflow-icon-size-75)}:host([size=l]){--spectrum-progress-circle-size:var(--spectrum-workflow-icon-size-200);--spectrum-icon-size:var(--spectrum-workflow-icon-size-200)}:host([size=xl]){--spectrum-progress-circle-size:var(--spectrum-workflow-icon-size-300);--spectrum-icon-size:var(--spectrum-workflow-icon-size-300)}:host([size=xxl]){--spectrum-progress-circle-size:var(--spectrum-workflow-icon-size-400);--spectrum-icon-size:var(--spectrum-workflow-icon-size-400)}
`;var m = e;

var d=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var s=(n,i,e,t)=>{for(var r=t>1?void 0:t?c(i,e):i,a=n.length-1,l;a>=0;a--)(l=n[a])&&(r=(t?l(i,e,r):l(r))||r);return t&&r&&d(i,e,r),r};class ButtonBase extends ObserveSlotText(LikeAnchor(Focusable),"",["sp-overlay,sp-tooltip"]){constructor(){super();this.active=!1;this.type="button";this.proxyFocus=this.proxyFocus.bind(this),this.addEventListener("click",this.handleClickCapture,{capture:!0});}static get styles(){return [m]}get focusElement(){return this}get hasLabel(){return this.slotHasContent}get buttonContent(){return [x`
                <slot name="icon" ?icon-only=${!this.hasLabel}></slot>
            `,x`
                <span id="label">
                    <slot @slotchange=${this.manageTextObservedSlot}></slot>
                </span>
            `]}click(){this.disabled||this.shouldProxyClick()||super.click();}handleClickCapture(e){if(this.disabled)return e.preventDefault(),e.stopImmediatePropagation(),e.stopPropagation(),!1}proxyFocus(){this.focus();}shouldProxyClick(){let e=!1;if(this.anchorElement)this.anchorElement.click(),e=!0;else if(this.type!=="button"){const t=document.createElement("button");t.type=this.type,this.insertAdjacentElement("afterend",t),t.click(),t.remove(),e=!0;}return e}renderAnchor(){return x`
            ${this.buttonContent}
            ${super.renderAnchor({id:"button",ariaHidden:!0,className:"button anchor hidden"})}
        `}renderButton(){return x`
            ${this.buttonContent}
        `}render(){return this.href&&this.href.length>0?this.renderAnchor():this.renderButton()}handleKeydown(e){const{code:t}=e;switch(t){case"Space":e.preventDefault(),typeof this.href=="undefined"&&(this.addEventListener("keyup",this.handleKeyup),this.active=!0);break;}}handleKeypress(e){const{code:t}=e;switch(t){case"Enter":case"NumpadEnter":this.click();break;}}handleKeyup(e){const{code:t}=e;switch(t){case"Space":this.removeEventListener("keyup",this.handleKeyup),this.active=!1,this.click();break;}}manageAnchor(){this.href&&this.href.length>0?((!this.hasAttribute("role")||this.getAttribute("role")==="button")&&this.setAttribute("role","link"),this.removeEventListener("click",this.shouldProxyClick)):((!this.hasAttribute("role")||this.getAttribute("role")==="link")&&this.setAttribute("role","button"),this.addEventListener("click",this.shouldProxyClick));}firstUpdated(e){super.firstUpdated(e),this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.manageAnchor(),this.addEventListener("keydown",this.handleKeydown),this.addEventListener("keypress",this.handleKeypress);}updated(e){super.updated(e),e.has("href")&&this.manageAnchor(),e.has("label")&&this.setAttribute("aria-label",this.label||""),this.anchorElement&&(this.anchorElement.addEventListener("focus",this.proxyFocus),this.anchorElement.tabIndex=-1);}}s([n({type:Boolean,reflect:!0})],ButtonBase.prototype,"active",2),s([n({type:String})],ButtonBase.prototype,"type",2),s([i$1(".anchor")],ButtonBase.prototype,"anchorElement",2);

export { ButtonBase as B };
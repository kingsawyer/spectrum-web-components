import { i } from './lit-element-xBOPiTek.js';
import { f as focusableSelector } from './focusable-selectors-VCrFWGqo.js';
import { D as DependencyManagerController } from './DependencyManger-0SYmL--C.js';
import { S as SpectrumElement, n, d as defineElement } from './define-element-tO8-r1bu.js';
import { x } from './lit-html-GmIhAbMP.js';
import { l } from './if-defined-pV6JZKXB.js';
import { i as i$1 } from './query-JMOstM_r.js';
import './base-STdhtiz1.js';

const o$1=i`
    #tooltip{pointer-events:none;visibility:hidden;opacity:0;transition:transform var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))ease-in-out,opacity var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))ease-in-out,visibility 0s linear var(--mod-overlay-animation-duration,var(--spectrum-animation-duration-100,.13s))}:host([open]) #tooltip{pointer-events:auto;visibility:visible;opacity:1;transition-delay:var(--mod-overlay-animation-duration-opened,var(--spectrum-animation-duration-0,0s))}#tooltip{--spectrum-tooltip-animation-duration:var(--spectrum-animation-duration-100);--spectrum-tooltip-margin:0px;--spectrum-tooltip-height:var(--spectrum-component-height-75);--spectrum-tooltip-max-inline-size:var(--spectrum-tooltip-maximum-width);--spectrum-tooltip-border-radius:var(--spectrum-corner-radius-100);--spectrum-tooltip-icon-width:var(--spectrum-workflow-icon-size-50);--spectrum-tooltip-icon-height:var(--spectrum-workflow-icon-size-50);--spectrum-tooltip-font-size:var(--spectrum-font-size-75);--spectrum-tooltip-line-height:var(--spectrum-line-height-100);--spectrum-tooltip-cjk-line-height:var(--spectrum-cjk-line-height-100);--spectrum-tooltip-font-weight:var(--spectrum-regular-font-weight);--spectrum-tooltip-spacing-inline:var(--spectrum-component-edge-to-text-75);--spectrum-tooltip-spacing-block-start:var(--spectrum-component-top-to-text-75);--spectrum-tooltip-spacing-block-end:var(--spectrum-component-bottom-to-text-75);--spectrum-tooltip-icon-spacing-inline-start:var(--spectrum-text-to-visual-75);--spectrum-tooltip-icon-spacing-inline-end:var(--spectrum-text-to-visual-75);--spectrum-tooltip-icon-spacing-block-start:var(--spectrum-component-top-to-workflow-icon-75);--spectrum-tooltip-background-color-informative:var(--spectrum-informative-background-color-default);--spectrum-tooltip-background-color-positive:var(--spectrum-positive-background-color-default);--spectrum-tooltip-background-color-negative:var(--spectrum-negative-background-color-default);--spectrum-tooltip-content-color:var(--spectrum-white);--spectrum-tooltip-tip-inline-size:var(--spectrum-tooltip-tip-width);--spectrum-tooltip-tip-block-size:var(--spectrum-tooltip-tip-height);--spectrum-tooltip-tip-square-size:var(--spectrum-tooltip-tip-inline-size);--spectrum-tooltip-tip-height-percentage:50%;--spectrum-tooltip-tip-antialiasing-inset:.5px;--spectrum-tooltip-pointer-corner-spacing:var(--spectrum-corner-radius-100);--spectrum-tooltip-background-color-default:var(--spectrum-tooltip-backgound-color-default-neutral)}@media (forced-colors:active){#tooltip{border:1px solid #0000}#tip{forced-color-adjust:none;--highcontrast-tooltip-background-color-default:CanvasText;--highcontrast-tooltip-background-color-informative:CanvasText;--highcontrast-tooltip-background-color-positive:CanvasText;--highcontrast-tooltip-background-color-negative:CanvasText}}#tooltip{box-sizing:border-box;vertical-align:top;padding-inline:var(--mod-tooltip-spacing-inline,var(--spectrum-tooltip-spacing-inline));border-radius:var(--mod-tooltip-border-radius,var(--spectrum-tooltip-border-radius));min-block-size:var(--mod-tooltip-height,var(--spectrum-tooltip-height));max-inline-size:var(--mod-tooltip-max-inline-size,var(--spectrum-tooltip-max-inline-size));background-color:var(--highcontrast-tooltip-background-color-default,var(--mod-tooltip-background-color-default,var(--spectrum-tooltip-background-color-default)));color:var(--mod-tooltip-content-color,var(--spectrum-tooltip-content-color));font-size:var(--mod-tooltip-font-size,var(--spectrum-tooltip-font-size));font-weight:var(--mod-tooltip-font-weight,var(--spectrum-tooltip-font-weight));line-height:var(--mod-tooltip-line-height,var(--spectrum-tooltip-line-height));word-break:break-word;-webkit-font-smoothing:antialiased;flex-direction:row;align-items:center;block-size:auto;inline-size:auto;display:inline-flex;position:relative}:host(:lang(ja)) #tooltip,:host(:lang(zh)) #tooltip,:host(:lang(ko)) #tooltip{line-height:var(--mod-tooltip-cjk-line-height,var(--spectrum-tooltip-cjk-line-height))}#tooltip{cursor:default;-webkit-user-select:none;user-select:none}#tooltip p{margin:0}:host([variant=info]) #tooltip{background-color:var(--highcontrast-tooltip-background-color-informative,var(--mod-tooltip-background-color-informative,var(--spectrum-tooltip-background-color-informative)))}:host([variant=positive]) #tooltip{background-color:var(--highcontrast-tooltip-background-color-positive,var(--mod-tooltip-background-color-positive,var(--spectrum-tooltip-background-color-positive)))}:host([variant=negative]) #tooltip{background-color:var(--highcontrast-tooltip-background-color-negative,var(--mod-tooltip-background-color-negative,var(--spectrum-tooltip-background-color-negative)))}#tip{block-size:var(--mod-tooltip-tip-square-size,var(--spectrum-tooltip-tip-square-size));inline-size:var(--mod-tooltip-tip-square-size,var(--spectrum-tooltip-tip-square-size));background-color:var(--highcontrast-tooltip-background-color-default,var(--mod-tooltip-background-color-default,var(--spectrum-tooltip-background-color-default)));clip-path:polygon(0 calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset))),50% var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage)),100% calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset))));position:absolute;top:100%;left:50%;transform:translate(-50%)}:host([variant=info]) #tooltip #tip{background-color:var(--highcontrast-tooltip-background-color-informative,var(--mod-tooltip-background-color-informative,var(--spectrum-tooltip-background-color-informative)))}:host([variant=positive]) #tooltip #tip{background-color:var(--highcontrast-tooltip-background-color-positive,var(--mod-tooltip-background-color-positive,var(--spectrum-tooltip-background-color-positive)))}:host([variant=negative]) #tooltip #tip{background-color:var(--highcontrast-tooltip-background-color-negative,var(--mod-tooltip-background-color-negative,var(--spectrum-tooltip-background-color-negative)))}:host([placement*=top]) #tooltip #tip,.spectrum-Tooltip--top-left #tip,.spectrum-Tooltip--top-right #tip,.spectrum-Tooltip--top-start #tip,.spectrum-Tooltip--top-end #tip{top:100%}:host([placement*=bottom]) #tooltip #tip,.spectrum-Tooltip--bottom-left #tip,.spectrum-Tooltip--bottom-right #tip,.spectrum-Tooltip--bottom-start #tip,.spectrum-Tooltip--bottom-end #tip{clip-path:polygon(50% calc(100% - var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage))),0 calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset))),100% calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset))));top:auto;bottom:100%}.spectrum-Tooltip--top-left #tip,.spectrum-Tooltip--bottom-left #tip,.spectrum-Tooltip--top-right #tip,.spectrum-Tooltip--bottom-right #tip,.spectrum-Tooltip--top-start #tip,.spectrum-Tooltip--bottom-start #tip,.spectrum-Tooltip--top-end #tip,.spectrum-Tooltip--bottom-end #tip{transform:none}.spectrum-Tooltip--top-left #tip,.spectrum-Tooltip--bottom-left #tip{left:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))}.spectrum-Tooltip--top-right #tip,.spectrum-Tooltip--bottom-right #tip{left:auto;right:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))}.spectrum-Tooltip--top-start #tip,.spectrum-Tooltip--bottom-start #tip{left:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing));right:auto}:host([dir=rtl]) .spectrum-Tooltip--top-start #tip,:host([dir=rtl]) .spectrum-Tooltip--bottom-start #tip{right:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing));left:auto}.spectrum-Tooltip--top-end #tip,.spectrum-Tooltip--bottom-end #tip{left:auto;right:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))}:host([dir=rtl]) .spectrum-Tooltip--top-end #tip,:host([dir=rtl]) .spectrum-Tooltip--bottom-end #tip{left:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing));right:auto}:host([placement*=right]) #tooltip #tip,.spectrum-Tooltip--right-bottom #tip,.spectrum-Tooltip--right-top #tip,:host([placement*=left]) #tooltip #tip,.spectrum-Tooltip--left-bottom #tip,.spectrum-Tooltip--left-top #tip,.spectrum-Tooltip--start #tip,.spectrum-Tooltip--start-top #tip,.spectrum-Tooltip--start-bottom #tip,.spectrum-Tooltip--end #tip,.spectrum-Tooltip--end-top #tip,.spectrum-Tooltip--end-bottom #tip{top:50%;transform:translateY(-50%)}.spectrum-Tooltip--right-bottom #tip,.spectrum-Tooltip--right-top #tip,.spectrum-Tooltip--left-bottom #tip,.spectrum-Tooltip--left-top #tip,.spectrum-Tooltip--start-top #tip,.spectrum-Tooltip--start-bottom #tip,.spectrum-Tooltip--end-top #tip,.spectrum-Tooltip--end-bottom #tip{top:auto;transform:none}:host([placement*=right]) #tooltip #tip,.spectrum-Tooltip--right-bottom #tip,.spectrum-Tooltip--right-top #tip,.spectrum-Tooltip--end #tip,.spectrum-Tooltip--end-top #tip,.spectrum-Tooltip--end-bottom #tip{clip-path:polygon(calc(100% - var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage)))50%,calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))100%,calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))0);left:auto;right:100%}:host([placement*=left]) #tooltip #tip,.spectrum-Tooltip--left-bottom #tip,.spectrum-Tooltip--left-top #tip,.spectrum-Tooltip--start #tip,.spectrum-Tooltip--start-top #tip,.spectrum-Tooltip--start-bottom #tip{clip-path:polygon(calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))0,calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))100%,var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage))50%);left:100%}.spectrum-Tooltip--right-top #tip,.spectrum-Tooltip--left-top #tip,.spectrum-Tooltip--start-top #tip,.spectrum-Tooltip--end-top #tip{top:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))}.spectrum-Tooltip--right-bottom #tip,.spectrum-Tooltip--left-bottom #tip,.spectrum-Tooltip--start-bottom #tip,.spectrum-Tooltip--end-bottom #tip{bottom:var(--mod-tooltip-pointer-corner-spacing,var(--spectrum-tooltip-pointer-corner-spacing))}:host([dir=rtl]) .spectrum-Tooltip--end #tip,:host([dir=rtl]) .spectrum-Tooltip--end-top #tip,:host([dir=rtl]) .spectrum-Tooltip--end-bottom #tip{clip-path:polygon(calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))0,calc(0% - var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))100%,var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage))50%);left:100%;right:auto}:host([dir=rtl]) .spectrum-Tooltip--start #tip,:host([dir=rtl]) .spectrum-Tooltip--start-top #tip,:host([dir=rtl]) .spectrum-Tooltip--start-bottom #tip{clip-path:polygon(var(--mod-tooltip-tip-height-percentage,var(--spectrum-tooltip-tip-height-percentage))50%,calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))100%,calc(100% + var(--mod-tooltip-tip-antialiasing-inset,var(--spectrum-tooltip-tip-antialiasing-inset)))0);left:auto;right:100%}::slotted([slot=icon]){inline-size:var(--mod-tooltip-icon-width,var(--spectrum-tooltip-icon-width));block-size:var(--mod-tooltip-icon-height,var(--spectrum-tooltip-icon-height));flex-shrink:0;align-self:flex-start;margin-block-start:var(--mod-tooltip-icon-spacing-block-start,var(--spectrum-tooltip-icon-spacing-block-start));margin-inline-start:calc(var(--mod-tooltip-icon-spacing-inline-start,var(--spectrum-tooltip-icon-spacing-inline-start)) - var(--mod-tooltip-spacing-inline,var(--spectrum-tooltip-spacing-inline)));margin-inline-end:var(--mod-tooltip-icon-spacing-inline-end,var(--spectrum-tooltip-icon-spacing-inline-end))}#label{line-height:var(--mod-tooltip-line-height,var(--spectrum-tooltip-line-height));margin-block-start:var(--mod-tooltip-spacing-block-start,var(--spectrum-tooltip-spacing-block-start));margin-block-end:var(--mod-tooltip-spacing-block-end,var(--spectrum-tooltip-spacing-block-end))}#tooltip,:host([placement*=top]) #tooltip,.spectrum-Tooltip--top-left,.spectrum-Tooltip--top-right,.spectrum-Tooltip--top-start,.spectrum-Tooltip--top-end{margin-bottom:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([open]) #tooltip,:host([placement*=top][open]) #tooltip,:host([open]) .spectrum-Tooltip--top-left,:host([open]) .spectrum-Tooltip--top-right,:host([open]) .spectrum-Tooltip--top-start,:host([open]) .spectrum-Tooltip--top-end{transform:translateY(calc(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance))*-1))}:host([placement*=bottom]) #tooltip,.spectrum-Tooltip--bottom-left,.spectrum-Tooltip--bottom-right,.spectrum-Tooltip--bottom-start,.spectrum-Tooltip--bottom-end{margin-top:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([placement*=bottom][open]) #tooltip,:host([open]) .spectrum-Tooltip--bottom-left,:host([open]) .spectrum-Tooltip--bottom-right,:host([open]) .spectrum-Tooltip--bottom-start,:host([open]) .spectrum-Tooltip--bottom-end{transform:translateY(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance)))}:host([placement*=right]) #tooltip,.spectrum-Tooltip--right-bottom,.spectrum-Tooltip--right-top{margin-left:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([placement*=right][open]) #tooltip,:host([open]) .spectrum-Tooltip--right-bottom,:host([open]) .spectrum-Tooltip--right-top{transform:translateX(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance)))}:host([placement*=left]) #tooltip,.spectrum-Tooltip--left-bottom,.spectrum-Tooltip--left-top{margin-right:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([placement*=left][open]) #tooltip,:host([open]) .spectrum-Tooltip--left-bottom,:host([open]) .spectrum-Tooltip--left-top{transform:translateX(calc(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance))*-1))}.spectrum-Tooltip--start,.spectrum-Tooltip--start-top,.spectrum-Tooltip--start-bottom{margin-inline-end:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([open]) .spectrum-Tooltip--start,:host([open]) .spectrum-Tooltip--start-top,:host([open]) .spectrum-Tooltip--start-bottom{transform:translateX(calc(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance))*-1))}:host([dir=rtl][open]) .spectrum-Tooltip--start,:host([dir=rtl][open]) .spectrum-Tooltip--start-top,:host([dir=rtl][open]) .spectrum-Tooltip--start-bottom{transform:translateX(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance)))}.spectrum-Tooltip--end,.spectrum-Tooltip--end-top,.spectrum-Tooltip--end-bottom{margin-inline-start:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size)) + var(--mod-tooltip-margin,var(--spectrum-tooltip-margin)))}:host([open]) .spectrum-Tooltip--end,:host([open]) .spectrum-Tooltip--end-top,:host([open]) .spectrum-Tooltip--end-bottom{transform:translateX(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance)))}:host([dir=rtl][open]) .spectrum-Tooltip--end,:host([dir=rtl][open]) .spectrum-Tooltip--end-top,:host([dir=rtl][open]) .spectrum-Tooltip--end-bottom{transform:translateX(calc(var(--mod-tooltip-animation-distance,var(--spectrum-tooltip-animation-distance))*-1))}#tooltip{--spectrum-tooltip-backgound-color-default-neutral:var(--system-spectrum-tooltip-backgound-color-default-neutral)}:host{white-space:initial;display:contents}#tooltip{inline-size:max-content}#tip{clip-path:polygon(0 -5%,50% 50%,100% -5%);width:var(--spectrum-tooltip-tip-inline-size)!important;height:var(--spectrum-tooltip-tip-inline-size)!important}#tip[style]{transform:none!important}:host(:not([placement*=top])) #tooltip{margin-bottom:0}:host([placement*=top]) #tooltip #tip{top:100%}:host([placement*=bottom]) #tooltip #tip{clip-path:polygon(50% 50%,0 105%,100% 105%);top:auto;bottom:100%}:host([placement*=left]) #tooltip #tip,:host([placement*=right]) #tooltip #tip{top:50%;transform:translateY(-50%)}:host([placement*=right]) #tooltip #tip{clip-path:polygon(50% 50%,105% 100%,105% 0);left:calc(var(--mod-tooltip-tip-block-size,var(--spectrum-tooltip-tip-block-size))*-2);right:100%}:host([placement*=left]) #tooltip #tip{clip-path:polygon(-5% 0,-5% 100%,50% 50%);left:100%}sp-overlay:not(:defined){display:none}
`;var v = o$1;

var c=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var o=(r,s,e,n)=>{for(var t=n>1?void 0:n?m(s,e):s,i=r.length-1,l;i>=0;i--)(l=r[i])&&(t=(n?l(s,e,t):l(t))||t);return n&&t&&c(s,e,t),t};class g extends HTMLElement{constructor(){super();this._open=!1;this._placement="top";this.addEventListener("sp-opened",this.redispatchEvent),this.addEventListener("sp-closed",this.redispatchEvent);}redispatchEvent(e){e.stopPropagation(),this.tooltip.dispatchEvent(new CustomEvent(e.type,{bubbles:e.bubbles,composed:e.composed,detail:e.detail}));}get tooltip(){return this.getRootNode().host}static get observedAttributes(){return ["open","placement"]}attributeChangedCallback(e,n,t){switch(e){case"open":this.open=t!==null;break;case"placement":this.placement=t;break}}set open(e){this._open=e;const{tooltip:n}=this;n&&(n.open=e);}get open(){return this._open}set placement(e){this._placement=e;const{tooltip:n}=this;n&&(n.placement=e);}get placement(){return this._placement}get tipElement(){return this.tooltip.tipElement}}customElements.get("sp-tooltip-openable")||customElements.define("sp-tooltip-openable",g);class Tooltip extends SpectrumElement{constructor(){super(...arguments);this.delayed=!1;this.dependencyManager=new DependencyManagerController(this);this.disabled=!1;this.selfManaged=!1;this.offset=0;this.open=!1;this._variant="";this.handleOpenOverlay=()=>{this.open=!0;};this.handleCloseOverlay=()=>{this.open=!1;};}static get styles(){return [v]}get variant(){return this._variant}set variant(e){if(e!==this.variant){if(["info","positive","negative"].includes(e)){this.setAttribute("variant",e),this._variant=e;return}this.removeAttribute("variant"),this._variant="";}}forwardTransitionEvent(e){this.dispatchEvent(new TransitionEvent(e.type,{bubbles:!0,composed:!0,propertyName:e.propertyName}));}get triggerElement(){var i;let e=this.assignedSlot||this,n=e.getRootNode(),t=e.parentElement||n.host||n;for(;!((i=t==null?void 0:t.matches)!=null&&i.call(t,focusableSelector));)e=t.assignedSlot||t,n=e.getRootNode(),t=e.parentElement||n.host||n;return t}render(){const e=x`
            <sp-tooltip-openable
                id="tooltip"
                placement=${l(this.placement)}
                @transitionrun=${this.forwardTransitionEvent}
                @transitionend=${this.forwardTransitionEvent}
                @transitioncancel=${this.forwardTransitionEvent}
            >
                <slot name="icon"></slot>
                <span id="label"><slot></slot></span>
                <span id="tip" aria-hidden="true"></span>
            </sp-tooltip-openable>
        `;return this.selfManaged?(this.dependencyManager.add("sp-overlay"),import('./sp-overlay-8v49LtLr.js').then(function (n) { return n.a; }),x`
                <sp-overlay
                    ?open=${this.open&&!this.disabled&&this.dependencyManager.loaded}
                    ?delayed=${this.delayed}
                    ?disabled=${this.disabled}
                    offset=${this.offset}
                    .placement=${this.placement}
                    type="hint"
                    .tipPadding=${this.tipPadding}
                    .triggerInteraction=${"hover"}
                    @sp-opened=${this.handleOpenOverlay}
                    @sp-closed=${this.handleCloseOverlay}
                >
                    ${e}
                </sp-overlay>
            `):e}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{if(!this.selfManaged)return;const e=this.overlayElement;if(e){const n=this.triggerElement;e.triggerElement=n;}});}}o([n({type:Boolean})],Tooltip.prototype,"delayed",2),o([n({type:Boolean})],Tooltip.prototype,"disabled",2),o([n({type:Boolean,attribute:"self-managed"})],Tooltip.prototype,"selfManaged",2),o([n({type:Number})],Tooltip.prototype,"offset",2),o([n({type:Boolean,reflect:!0})],Tooltip.prototype,"open",2),o([i$1("sp-overlay")],Tooltip.prototype,"overlayElement",2),o([n({reflect:!0})],Tooltip.prototype,"placement",2),o([i$1("#tip")],Tooltip.prototype,"tipElement",2),o([n({type:Number})],Tooltip.prototype,"tipPadding",2),o([n({type:String})],Tooltip.prototype,"variant",1);

defineElement("sp-tooltip",Tooltip);
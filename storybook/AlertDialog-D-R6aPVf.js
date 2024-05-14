import './sp-button-Fy_2FMPk.js';
import { F as FocusVisiblePolyfillMixin } from './focus-visible-D29Av9Xb.js';
import { r as randomID } from './random-id-BST1Puzz.js';
import { c as conditionAttributeWithId } from './condition-attribute-with-id-Cnyhr7Mp.js';
import { s } from './resize-controller-BJKfu6ft.js';
import { i } from './lit-element-BL-po2DW.js';
import { e as e$1 } from './query-DQF6X5qW.js';
import { n, S as SpectrumElement } from './define-element-9Zj84-C8.js';
import { x } from './lit-html-COgVUehj.js';

const e=i`
    :host{--spectrum-alert-dialog-min-width:var(--spectrum-alert-dialog-minimum-width);--spectrum-alert-dialog-max-width:var(--spectrum-alert-dialog-maximum-width);--spectrum-alert-dialog-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-alert-dialog-warning-icon-color:var(--spectrum-notice-visual-color);--spectrum-alert-dialog-error-icon-color:var(--spectrum-negative-visual-color);--spectrum-alert-dialog-title-font-family:var(--spectrum-sans-font-family-stack);--spectrum-alert-dialog-title-font-weight:var(--spectrum-heading-sans-serif-font-weight);--spectrum-alert-dialog-title-font-style:var(--spectrum-heading-sans-serif-font-style);--spectrum-alert-dialog-title-font-size:var(--spectrum-alert-dialog-title-size);--spectrum-alert-dialog-title-line-height:var(--spectrum-heading-line-height);--spectrum-alert-dialog-title-color:var(--spectrum-heading-color);--spectrum-alert-dialog-body-font-family:var(--spectrum-sans-font-family-stack);--spectrum-alert-dialog-body-font-weight:var(--spectrum-body-sans-serif-font-weight);--spectrum-alert-dialog-body-font-style:var(--spectrum-body-sans-serif-font-style);--spectrum-alert-dialog-body-font-size:var(--spectrum-alert-dialog-description-size);--spectrum-alert-dialog-body-line-height:var(--spectrum-line-height-100);--spectrum-alert-dialog-body-color:var(--spectrum-body-color);--spectrum-alert-dialog-title-to-divider:var(--spectrum-spacing-200);--spectrum-alert-dialog-divider-to-description:var(--spectrum-spacing-300);--spectrum-alert-dialog-title-to-icon:var(--spectrum-spacing-300);--mod-buttongroup-justify-content:flex-end;box-sizing:border-box;min-inline-size:var(--mod-alert-dialog-min-width,var(--spectrum-alert-dialog-min-width));max-inline-size:var(--mod-alert-dialog-max-width,var(--spectrum-alert-dialog-max-width));max-block-size:inherit;padding:var(--mod-alert-dialog-padding,var(--spectrum-alert-dialog-padding));outline:none;inline-size:fit-content;display:flex}.icon{inline-size:var(--mod-alert-dialog-icon-size,var(--spectrum-alert-dialog-icon-size));block-size:var(--mod-alert-dialog-icon-size,var(--spectrum-alert-dialog-icon-size));flex-shrink:0;margin-inline-start:var(--mod-alert-dialog-title-to-icon,var(--spectrum-alert-dialog-title-to-icon))}:host([variant=warning]){--mod-icon-color:var(--mod-alert-dialog-warning-icon-color,var(--spectrum-alert-dialog-warning-icon-color))}:host([variant=error]){--mod-icon-color:var(--mod-alert-dialog-error-icon-color,var(--spectrum-alert-dialog-error-icon-color))}.grid{display:grid}.header{justify-content:space-between;align-items:baseline;display:flex}::slotted([slot=heading]){font-family:var(--mod-alert-dialog-title-font-family,var(--spectrum-alert-dialog-title-font-family));font-weight:var(--mod-alert-dialog-title-font-weight,var(--spectrum-alert-dialog-title-font-weight));font-style:var(--mod-alert-dialog-title-font-style,var(--spectrum-alert-dialog-title-font-style));font-size:var(--mod-alert-dialog-title-font-size,var(--spectrum-alert-dialog-title-font-size));line-height:var(--mod-alert-dialog-title-line-height,var(--spectrum-alert-dialog-title-line-height));color:var(--mod-alert-dialog-title-color,var(--spectrum-alert-dialog-title-color));margin:0;margin-block-end:var(--mod-alert-dialog-title-to-divider,var(--spectrum-alert-dialog-title-to-divider))}.content{font-family:var(--mod-alert-dialog-body-font-family,var(--spectrum-alert-dialog-body-font-family));font-weight:var(--mod-alert-dialog-body-font-weight,var(--spectrum-alert-dialog-body-font-weight));font-style:var(--mod-alert-dialog-body-font-style,var(--spectrum-alert-dialog-body-font-style));font-size:var(--mod-alert-dialog-body-font-size,var(--spectrum-alert-dialog-body-font-size));line-height:var(--mod-alert-dialog-body-line-height,var(--spectrum-alert-dialog-body-line-height));color:var(--mod-alert-dialog-body-color,var(--spectrum-alert-dialog-body-color));-webkit-overflow-scrolling:touch;margin:0;margin-block-start:var(--mod-alert-dialog-divider-to-description,var(--spectrum-alert-dialog-divider-to-description));margin-block-end:var(--mod-alert-dialog-description-to-buttons,var(--spectrum-alert-dialog-description-to-buttons));overflow-y:auto}@media (forced-colors:active){:host{border:solid}}
`;

var b=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var l=(a,r,e,t)=>{for(var i=t>1?void 0:t?u(r,e):r,n=a.length-1,d;n>=0;n--)(d=a[n])&&(i=(t?d(r,e,i):d(i))||i);return t&&i&&b(r,e,i),i};const alertDialogVariants=["confirmation","information","warning","error","destructive","secondary"];function h(a,r){const e=a.assignedElements(),t=[];return e.forEach(i=>{if(i.id)t.push(i.id);else {const n=r+`-${randomID()}`;i.id=n,t.push(n);}}),t}const o=class o extends FocusVisiblePolyfillMixin(SpectrumElement){constructor(){super(...arguments);this.resizeController=new s(this,{callback:()=>{this.shouldManageTabOrderForScrolling();}});this._variant="";this.labelledbyId=`sp-dialog-label-${o.instanceCount++}`;this.shouldManageTabOrderForScrolling=()=>{if(!this.contentElement)return;const{offsetHeight:e,scrollHeight:t}=this.contentElement;e<t?this.contentElement.tabIndex=0:this.contentElement.removeAttribute("tabindex");};this.describedbyId=`sp-dialog-description-${o.instanceCount++}`;}static get styles(){return [e]}set variant(e){if(e===this.variant)return;const t=this.variant;alertDialogVariants.includes(e)?(this.setAttribute("variant",e),this._variant=e):(this.removeAttribute("variant"),this._variant=""),this.requestUpdate("variant",t);}get variant(){return this._variant}renderIcon(){switch(this.variant){case"warning":case"error":return x`
                    <sp-icon-alert class="icon"></sp-icon-alert>
                `;default:return x``}}renderHeading(){return x`
            <slot name="heading" @slotchange=${this.onHeadingSlotchange}></slot>
        `}renderContent(){return x`
            <div class="content">
                <slot @slotchange=${this.onContentSlotChange}></slot>
            </div>
        `}onHeadingSlotchange({target:e}){this.conditionLabelledby&&(this.conditionLabelledby(),delete this.conditionLabelledby);const t=h(e,this.labelledbyId);t.length&&(this.conditionLabelledby=conditionAttributeWithId(this,"aria-labelledby",t));}onContentSlotChange({target:e}){requestAnimationFrame(()=>{this.resizeController.unobserve(this.contentElement),this.resizeController.observe(this.contentElement);}),this.conditionDescribedby&&(this.conditionDescribedby(),delete this.conditionDescribedby);const t=h(e,this.describedbyId);if(t.length&&t.length<4)this.conditionDescribedby=conditionAttributeWithId(this,"aria-describedby",t);else if(!t.length){const i=!!this.id;i||(this.id=this.describedbyId);const n=conditionAttributeWithId(this,"aria-describedby",this.id);this.conditionDescribedby=()=>{n(),i||this.removeAttribute("id");};}}renderButtons(){return x`
            <sp-button-group class="button-group">
                <slot name="button"></slot>
            </sp-button-group>
        `}render(){return x`
            <div class="grid">
                <div class="header">
                    ${this.renderHeading()} ${this.renderIcon()}
                </div>
                <sp-divider size="m" class="divider"></sp-divider>
                ${this.renderContent()} ${this.renderButtons()}
            </div>
        `}};o.instanceCount=0,l([e$1(".content")],o.prototype,"contentElement",2),l([n({type:String,reflect:!0})],o.prototype,"variant",1);let AlertDialog=o;

export { AlertDialog as A };
import { B as ButtonBase } from './ButtonBase-adwZ7HOt.js';
import './sp-icon-chevron100-BVn8JicT.js';
import { O as ObserveSlotPresence } from './observe-slot-presence-Ceiwt-jV.js';
import { i as i$1 } from './lit-element-BL-po2DW.js';
import { r } from './spectrum-icon-chevron.css-C5c2rYXA.js';
import { S as SizedMixin } from './sizedMixin-H6qLwJc0.js';
import { x as x$1 } from './lit-html-COgVUehj.js';
import { e } from './class-map-DdRvesrq.js';
import { n, d as defineElement } from './define-element-9Zj84-C8.js';

const o=i$1`
    .root{--spectrum-picker-button-height:var(--spectrum-component-height-100);--spectrum-picker-button-width:var(--spectrum-component-height-100);--spectrum-picker-button-gap:var(--spectrum-text-to-visual-50);--spectrum-picker-button-padding:var(--spectrum-in-field-button-edge-to-fill);--spectrum-picker-button-label-padding:var(--spectrum-text-to-visual-50);--spectrum-picker-button-fill-padding:var(--spectrum-field-edge-to-disclosure-icon-100);--spectrum-picker-button-border-radius-rounded:var(--spectrum-corner-radius-200);--spectrum-picker-button-icon-color:var(--spectrum-neutral-content-color-default);--spectrum-picker-button-icon-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-picker-button-icon-color-down:var(--spectrum-neutral-content-color-down);--spectrum-picker-button-icon-color-key-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-picker-button-font-color:var(--spectrum-neutral-content-color-default);--spectrum-picker-button-font-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-picker-button-font-color-down:var(--spectrum-neutral-content-color-down);--spectrum-picker-button-font-color-key-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-picker-button-font-family:var(--spectrum-sans-font-family-stack);--spectrum-picker-button-font-style:var(--spectrum-default-font-style);--spectrum-picker-button-font-weight:var(--spectrum-body-sans-serif-font-weight);--spectrum-picker-button-font-size:var(--spectrum-font-size-100);--spectrum-picker-button-background-animation-duration:var(--spectrum-animation-duration-100)}:host([disabled]) .root{--mod-picker-button-background-color:var(--mod-picker-button-background-color-disabled,var(--spectrum-disabled-background-color));--mod-picker-button-background-color-hover:var(--mod-picker-button-background-color-hover-disabled,var(--spectrum-disabled-background-color));--mod-picker-button-background-color-down:var(--mod-picker-button-background-color-down-disabled,var(--spectrum-disabled-background-color));--mod-picker-button-border-color:var(--mod-picker-button-border-color-disabled,var(--spectrum-disabled-background-color));--mod-picker-button-font-color:var(--mod-picker-button-font-color-disabled,var(--spectrum-disabled-content-color));--mod-picker-button-font-color-hover:var(--mod-picker-button-font-color-hover-disabled,var(--spectrum-disabled-content-color));--mod-picker-button-font-color-down:var(--mod-picker-button-font-color-down-disabled,var(--spectrum-disabled-content-color));--mod-picker-button-icon-color:var(--mod-picker-button-icon-color-disabled,var(--spectrum-disabled-content-color));--mod-picker-button-icon-color-hover:var(--mod-picker-button-icon-color-hover-disabled,var(--spectrum-disabled-content-color));--mod-picker-button-icon-color-down:var(--mod-picker-button-icon-color-down-disabled,var(--spectrum-disabled-content-color))}:host([quiet]) .root{--mod-picker-button-background-color:var(--mod-picker-button-background-color-quiet,transparent);--mod-picker-button-background-color-hover:var(--mod-picker-button-background-color-hover-quiet,transparent);--mod-picker-button-background-color-down:var(--mod-picker-button-background-color-down-quiet,transparent);--mod-picker-button-background-color-key-focus:var(--mod-picker-button-background-color-key-focus-quiet,transparent);--mod-picker-button-border-color:var(--mod-picker-button-border-color-quiet,transparent)}:host([size=s]) .root{--spectrum-picker-button-height:var(--spectrum-component-height-75);--spectrum-picker-button-width:var(--spectrum-component-height-75);--spectrum-picker-button-label-padding:var(--spectrum-spacing-75);--spectrum-picker-button-font-size:var(--spectrum-font-size-75);--spectrum-picker-button-fill-padding:var(--spectrum-field-edge-to-disclosure-icon-75)}:host([size=l]) .root{--spectrum-picker-button-height:var(--spectrum-component-height-200);--spectrum-picker-button-width:var(--spectrum-component-height-200);--spectrum-picker-button-label-padding:var(--spectrum-text-to-visual-200);--spectrum-picker-button-font-size:var(--spectrum-font-size-200);--spectrum-picker-button-fill-padding:var(--spectrum-field-edge-to-disclosure-icon-200)}:host([size=xl]) .root{--spectrum-picker-button-height:var(--spectrum-component-height-300);--spectrum-picker-button-width:var(--spectrum-component-height-300);--spectrum-picker-button-label-padding:var(--spectrum-text-to-visual-300);--spectrum-picker-button-font-size:var(--spectrum-font-size-300);--spectrum-picker-button-fill-padding:var(--spectrum-field-edge-to-disclosure-icon-300)}.root{background-color:initial;block-size:var(--mod-picker-button-width,var(--spectrum-picker-button-width));box-sizing:border-box;padding:var(--mod-picker-button-padding,var(--spectrum-picker-button-padding));border-style:none;justify-content:center;align-items:center;display:flex}@media (hover:hover){.root:hover .spectrum-PickerButton-fill{background-color:var(--mod-picker-button-background-color-hover,var(--spectrum-picker-button-background-color-hover))}.root:hover .spectrum-PickerButton-label{color:var(--mod-picker-button-font-color-hover,var(--spectrum-picker-button-font-color-hover))}.root:hover .spectrum-PickerButton-icon{color:var(--mod-picker-button-icon-color-hover,var(--spectrum-picker-button-icon-color-hover))}}:host([open]) .root .spectrum-PickerButton-fill,:host(:is(:active,[active])) .root .spectrum-PickerButton-fill{background-color:var(--mod-picker-button-background-color-down,var(--spectrum-picker-button-background-color-down))}:host([open]) .root .spectrum-PickerButton-label,:host(:is(:active,[active])) .root .spectrum-PickerButton-label{color:var(--mod-picker-button-font-color-down,var(--spectrum-picker-button-font-color-down))}:host([open]) .root .spectrum-PickerButton-icon,:host(:is(:active,[active])) .root .spectrum-PickerButton-icon{color:var(--mod-picker-button-icon-color-down,var(--spectrum-picker-button-icon-color-down))}:host([focused]) .root .spectrum-PickerButton-fill,.root.is-keyboardFocused .spectrum-PickerButton-fill,.root:focus .spectrum-PickerButton-fill,.root:focus-visible .spectrum-PickerButton-fill{background-color:var(--mod-picker-button-background-color-key-focus,var(--spectrum-picker-button-background-color-key-focus))}:host([focused]) .root .spectrum-PickerButton-label,.root.is-keyboardFocused .spectrum-PickerButton-label,.root:focus .spectrum-PickerButton-label,.root:focus-visible .spectrum-PickerButton-label{color:var(--mod-picker-button-font-color-key-focus,var(--spectrum-picker-button-font-color-key-focus))}:host([focused]) .root .spectrum-PickerButton-icon,.root.is-keyboardFocused .spectrum-PickerButton-icon,.root:focus .spectrum-PickerButton-icon,.root:focus-visible .spectrum-PickerButton-icon{color:var(--mod-picker-button-icon-color-key-focus,var(--spectrum-picker-button-icon-color-key-focus))}:host([position=right]) .spectrum-PickerButton-fill{border-start-start-radius:var(--mod-picker-button-border-radius-sided,var(--spectrum-picker-button-border-radius-sided));border-end-start-radius:var(--mod-picker-button-border-radius-sided,var(--spectrum-picker-button-border-radius-sided))}:host([position=right][rounded]) .spectrum-PickerButton-fill{border-start-start-radius:var(--mod-picker-button-border-radius-rounded-sided,var(--spectrum-picker-button-border-radius-rounded-sided));border-end-start-radius:var(--mod-picker-button-border-radius-rounded-sided,var(--spectrum-picker-button-border-radius-rounded-sided))}:host([position=left]) .spectrum-PickerButton-fill{border-start-end-radius:var(--mod-picker-button-border-radius-sided,var(--spectrum-picker-button-border-radius-sided));border-end-end-radius:var(--mod-picker-button-border-radius-sided,var(--spectrum-picker-button-border-radius-sided))}:host([position=left][rounded]) .spectrum-PickerButton-fill{border-start-end-radius:var(--mod-picker-button-border-radius-rounded-sided,var(--spectrum-picker-button-border-radius-rounded-sided));border-end-end-radius:var(--mod-picker-button-border-radius-rounded-sided,var(--spectrum-picker-button-border-radius-rounded-sided))}.spectrum-PickerButton-label{color:var(--mod-picker-button-font-color,var(--spectrum-picker-button-font-color));white-space:nowrap;font-family:var(--mod-picker-button-font-family,var(--spectrum-picker-button-font-family));font-style:var(--mod-picker-button-font-style,var(--spectrum-picker-button-font-style));font-weight:var(--mod-picker-button-font-weight,var(--spectrum-picker-button-font-weight));font-size:var(--mod-picker-button-font-size,var(--spectrum-picker-button-font-size));flex:auto;padding-block-start:var(--mod-picker-button-label-padding,var(--spectrum-picker-button-label-padding));padding-block-end:var(--mod-picker-button-label-padding,var(--spectrum-picker-button-label-padding));overflow:hidden}.spectrum-PickerButton-fill{box-sizing:border-box;justify-content:center;align-items:center;gap:var(--mod-picker-button-gap,var(--spectrum-picker-button-gap));background-color:var(--mod-picker-button-background-color,var(--spectrum-picker-button-background-color));border-color:var(--mod-picker-button-border-color,var(--spectrum-picker-button-border-color));border-width:var(--mod-picker-button-border-width,var(--spectrum-picker-button-border-width));padding:calc(var(--mod-picker-button-fill-padding,var(--spectrum-picker-button-fill-padding)) - var(--mod-picker-button-padding,var(--spectrum-picker-button-padding)) - var(--mod-picker-button-border-width,var(--spectrum-picker-button-border-width)));transition:border-color var(--mod-picker-button-background-animation-duration,var(--spectrum-picker-button-background-animation-duration))ease-in-out;border-style:solid;border-start-start-radius:var(--mod-picker-button-border-radius,var(--spectrum-picker-button-border-radius));border-start-end-radius:var(--mod-picker-button-border-radius,var(--spectrum-picker-button-border-radius));border-end-end-radius:var(--mod-picker-button-border-radius,var(--spectrum-picker-button-border-radius));border-end-start-radius:var(--mod-picker-button-border-radius,var(--spectrum-picker-button-border-radius));block-size:100%;inline-size:100%;display:flex}.spectrum-PickerButton-icon{color:var(--mod-picker-button-icon-color,var(--spectrum-picker-button-icon-color));flex-shrink:0}:host([rounded]) .spectrum-PickerButton-fill{border-start-start-radius:var(--mod-picker-button-border-radius-rounded,var(--spectrum-picker-button-border-radius-rounded));border-start-end-radius:var(--mod-picker-button-border-radius-rounded,var(--spectrum-picker-button-border-radius-rounded));border-end-end-radius:var(--mod-picker-button-border-radius-rounded,var(--spectrum-picker-button-border-radius-rounded));border-end-start-radius:var(--mod-picker-button-border-radius-rounded,var(--spectrum-picker-button-border-radius-rounded))}.uiicononly{inline-size:var(--mod-picker-button-height,var(--spectrum-picker-button-height))}.uiicononly .spectrum-PickerButton-label{display:none}.uiicononly .spectrum-PickerButton-fill{padding:0}.textuiicon .spectrum-PickerButton-fill{inline-size:auto}.root{--spectrum-picker-button-background-color:var(--system-spectrum-pickerbutton-spectrum-picker-button-background-color);--spectrum-picker-button-background-color-hover:var(--system-spectrum-pickerbutton-spectrum-picker-button-background-color-hover);--spectrum-picker-button-background-color-down:var(--system-spectrum-pickerbutton-spectrum-picker-button-background-color-down);--spectrum-picker-button-background-color-key-focus:var(--system-spectrum-pickerbutton-spectrum-picker-button-background-color-key-focus);--spectrum-picker-button-border-color:var(--system-spectrum-pickerbutton-spectrum-picker-button-border-color);--spectrum-picker-button-border-radius:var(--system-spectrum-pickerbutton-spectrum-picker-button-border-radius);--spectrum-picker-button-border-radius-rounded-sided:var(--system-spectrum-pickerbutton-spectrum-picker-button-border-radius-rounded-sided);--spectrum-picker-button-border-radius-sided:var(--system-spectrum-pickerbutton-spectrum-picker-button-border-radius-sided);--spectrum-picker-button-border-width:var(--system-spectrum-pickerbutton-spectrum-picker-button-border-width)}:host{display:inline-flex}.root{display:flex}
`;

var a=Object.defineProperty;var i=(r,t,o,s)=>{for(var e=void 0,l=r.length-1,n;l>=0;l--)(n=r[l])&&(e=(n(t,o,e))||e);return e&&a(t,o,e),e};const x={s:"spectrum-UIIcon-ChevronDown75",m:"spectrum-UIIcon-ChevronDown100",l:"spectrum-UIIcon-ChevronDown200",xl:"spectrum-UIIcon-ChevronDown300"};class PickerButton extends SizedMixin(ObserveSlotPresence(ButtonBase,'[slot="label"]')){constructor(){super(...arguments);this.invalid=!1;this.position="right";}static get styles(){return [o,r]}get hasText(){return this.slotContentIsPresent}render(){const o={root:!0,uiicononly:!this.hasText,textuiicon:this.hasText};return x$1`
            <div class=${e(o)}>
                <div class="spectrum-PickerButton-fill">
                    <span
                        class="spectrum-PickerButton-label is-placeholder"
                        ?hidden=${!this.hasText}
                    >
                        <slot name="label"></slot>
                    </span>
                    <slot name="icon">
                        <sp-icon-chevron100
                            class="spectrum-PickerButton-icon spectrum-Icon ${x[this.size]}"
                        ></sp-icon-chevron100>
                    </slot>
                </div>
            </div>
        `}}i([n({type:Boolean,reflect:!0})],PickerButton.prototype,"invalid"),i([n({reflect:!0})],PickerButton.prototype,"position");

defineElement("sp-picker-button",PickerButton);
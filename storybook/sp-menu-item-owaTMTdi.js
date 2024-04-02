import { E } from './spectrum-icon-checkmark.css-vEh5gvyq.js';
import { L as LikeAnchor } from './like-anchor-A-VxslPW.js';
import { F as Focusable } from './focusable-GZ06kf6F.js';
import './sp-icon-chevron100-byRnlRuE.js';
import { C } from './spectrum-icon-chevron.css-hA8DP86t.js';
import { D as DependencyManagerController } from './DependencyManger-0SYmL--C.js';
import { i } from './lit-element-xBOPiTek.js';
import { t as t$1 } from './mutation-controller-KeE5MDSl.js';
import { S as SlottableRequestEvent } from './slottable-request-event-SQgFLN7g.js';
import { O as ObserveSlotText } from './observe-slot-text-RiUvi5fT.js';
import { O as ObserveSlotPresence } from './observe-slot-presence-tyJ_SCNf.js';
import { r as randomID } from './random-id-M2k-wjyE.js';
import { x, A } from './lit-html-GmIhAbMP.js';
import { n, d as defineElement } from './define-element-tO8-r1bu.js';
import { i as i$1 } from './query-JMOstM_r.js';

const o=i`
    .checkmark{block-size:var(--mod-menu-item-checkmark-height,var(--spectrum-menu-item-checkmark-height));inline-size:var(--mod-menu-item-checkmark-width,var(--spectrum-menu-item-checkmark-width));grid-area:checkmarkArea;align-self:start;margin-block-start:calc(var(--mod-menu-item-top-to-checkmark,var(--spectrum-menu-item-top-to-checkmark)) - var(--mod-menu-item-top-edge-to-text,var(--spectrum-menu-item-top-edge-to-text)));margin-inline-end:var(--mod-menu-item-text-to-control,var(--spectrum-menu-item-text-to-control))}.spectrum-Menu-back:focus-visible{box-shadow:inset calc(var(--mod-menu-item-focus-indicator-width,var(--spectrum-menu-item-focus-indicator-width))*var(--spectrum-menu-item-focus-indicator-direction-scalar,1))0 0 0 var(--highcontrast-menu-item-focus-indicator-color,var(--mod-menu-item-focus-indicator-color,var(--spectrum-menu-item-focus-indicator-color)))}.chevron{block-size:var(--spectrum-menu-item-checkmark-height);inline-size:var(--spectrum-menu-item-checkmark-width);grid-area:chevronArea;align-self:center;margin-inline-end:var(--mod-menu-item-text-to-control,var(--spectrum-menu-item-text-to-control))}.spectrum-Menu-backButton:focus-visible{outline:var(--spectrum-focus-indicator-thickness)solid var(--spectrum-focus-indicator-color);outline-offset:calc((var(--spectrum-focus-indicator-thickness) + 1px)*-1)}::slotted([slot=icon]){fill:var(--highcontrast-menu-item-color-default,var(--mod-menu-item-label-icon-color-default,var(--spectrum-menu-item-label-icon-color-default)));color:var(--highcontrast-menu-item-color-default,var(--mod-menu-item-label-icon-color-default,var(--spectrum-menu-item-label-icon-color-default)))}.checkmark{display:var(--mod-menu-checkmark-display,var(--spectrum-menu-checkmark-display));fill:var(--highcontrast-menu-checkmark-icon-color-default,var(--mod-menu-checkmark-icon-color-default,var(--spectrum-menu-checkmark-icon-color-default)));color:var(--highcontrast-menu-checkmark-icon-color-default,var(--mod-menu-checkmark-icon-color-default,var(--spectrum-menu-checkmark-icon-color-default)));opacity:1;align-self:center}:host{cursor:pointer;box-sizing:border-box;background-color:var(--highcontrast-menu-item-background-color-default,var(--mod-menu-item-background-color-default,var(--spectrum-menu-item-background-color-default)));line-height:var(--mod-menu-item-label-line-height,var(--spectrum-menu-item-label-line-height));min-block-size:var(--mod-menu-item-min-height,var(--spectrum-menu-item-min-height));padding-block-start:var(--mod-menu-item-top-edge-to-text,var(--spectrum-menu-item-top-edge-to-text));padding-block-end:var(--mod-menu-item-bottom-edge-to-text,var(--spectrum-menu-item-bottom-edge-to-text));padding-inline:var(--mod-menu-item-label-inline-edge-to-content,var(--spectrum-menu-item-label-inline-edge-to-content));align-items:center;margin:0;text-decoration:none;position:relative}.spectrum-Menu-itemCheckbox{--mod-checkbox-top-to-text:0;--mod-checkbox-text-to-control:0;min-block-size:0}.spectrum-Menu-itemCheckbox .spectrum-Checkbox-box{margin-block-start:var(--mod-menu-item-top-to-checkbox,var(--spectrum-menu-item-top-to-checkbox));margin-block-end:0;margin-inline-end:var(--mod-menu-item-text-to-control,var(--spectrum-menu-item-text-to-control))}.spectrum-Menu-itemSwitch{min-block-size:0}.spectrum-Menu-itemSwitch .spectrum-Switch-switch{margin-block-start:var(--mod-menu-item-top-to-action,var(--spectrum-menu-item-top-to-action));margin-block-end:0}:host{grid-template:".chevronAreaCollapsible.headingIconArea sectionHeadingArea. . ."1fr"selectedArea chevronAreaCollapsible checkmarkArea iconArea labelArea valueArea actionsArea chevronAreaDrillIn"". . . .descriptionArea. . ."". . . .submenuArea. . ."/auto auto auto auto 1fr auto auto auto;display:grid}#label{grid-area:submenuItemLabelArea}:host(:focus),:host([focused]){background-color:var(--highcontrast-menu-item-background-color-focus,var(--mod-menu-item-background-color-key-focus,var(--spectrum-menu-item-background-color-key-focus)));outline:none}:host(:focus)>#label,:host([focused])>#label{color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-label-content-color-focus,var(--spectrum-menu-item-label-content-color-focus)))}:host(:focus)>[name=description]::slotted(*),:host([focused])>[name=description]::slotted(*){color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-description-color-focus,var(--spectrum-menu-item-description-color-focus)))}:host(:focus)>::slotted([slot=value]),:host([focused])>::slotted([slot=value]){color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-value-color-focus,var(--spectrum-menu-item-value-color-focus)))}:host(:focus)>.icon:not(.chevron,.checkmark),:host([focused])>.icon:not(.chevron,.checkmark){fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-label-icon-color-focus,var(--spectrum-menu-item-label-icon-color-focus)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-label-icon-color-focus,var(--spectrum-menu-item-label-icon-color-focus)))}:host(:focus)>.chevron,:host([focused])>.chevron{fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-collapsible-icon-color,var(--spectrum-menu-collapsible-icon-color)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-collapsible-icon-color,var(--spectrum-menu-collapsible-icon-color)))}:host(:focus)>.checkmark,:host([focused])>.checkmark{fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-checkmark-icon-color-focus,var(--spectrum-menu-checkmark-icon-color-focus)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-checkmark-icon-color-focus,var(--spectrum-menu-checkmark-icon-color-focus)))}:host([focused]),:host([focused]) .spectrum-Menu-back{box-shadow:inset calc(var(--mod-menu-item-focus-indicator-width,var(--spectrum-menu-item-focus-indicator-width))*var(--spectrum-menu-item-focus-indicator-direction-scalar,1))0 0 0 var(--highcontrast-menu-item-focus-indicator-color,var(--mod-menu-item-focus-indicator-color,var(--spectrum-menu-item-focus-indicator-color)))}:host([dir=rtl]){--spectrum-menu-item-focus-indicator-direction-scalar:-1}:host(:is(:active,[active])){background-color:var(--highcontrast-menu-item-background-color-focus,var(--mod-menu-item-background-color-down,var(--spectrum-menu-item-background-color-down)))}:host(:is(:active,[active]))>#label{color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-label-content-color-down,var(--spectrum-menu-item-label-content-color-down)))}:host(:is(:active,[active]))>[name=description]::slotted(*){color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-description-color-down,var(--spectrum-menu-item-description-color-down)))}:host(:is(:active,[active]))>::slotted([slot=value]){color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-value-color-down,var(--spectrum-menu-item-value-color-down)))}:host(:is(:active,[active]))>.icon:not(.chevron,.checkmark){fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-label-icon-color-down,var(--spectrum-menu-item-label-icon-color-down)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-label-icon-color-down,var(--spectrum-menu-item-label-icon-color-down)))}:host(:is(:active,[active]))>.chevron{fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-collapsible-icon-color,var(--spectrum-menu-collapsible-icon-color)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-collapsible-icon-color,var(--spectrum-menu-collapsible-icon-color)))}:host(:is(:active,[active]))>.checkmark{fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-checkmark-icon-color-down,var(--spectrum-menu-checkmark-icon-color-down)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-checkmark-icon-color-down,var(--spectrum-menu-checkmark-icon-color-down)))}::slotted([slot=icon]){grid-area:iconArea;align-self:start}.spectrum-Menu-item--collapsible ::slotted([slot=icon]){grid-area:headingIconArea}:host .is-selectableMultiple{align-items:start}.is-selectableMultiple .spectrum-Menu-itemCheckbox{grid-area:iconArea}.checkmark{grid-area:checkmarkArea;align-self:start}.spectrum-Menu-itemSelection{grid-area:selectedArea}#label{font-size:var(--mod-menu-item-label-font-size,var(--spectrum-menu-item-label-font-size));color:var(--highcontrast-menu-item-color-default,var(--mod-menu-item-label-content-color-default,var(--spectrum-menu-item-label-content-color-default)));grid-area:labelArea}::slotted([slot=value]){grid-area:valueArea}.spectrum-Menu-itemActions{grid-area:actionsArea;align-self:start;margin-inline-start:var(--mod-menu-item-label-to-value-area-min-spacing,var(--spectrum-menu-item-label-to-value-area-min-spacing))}.chevron{block-size:var(--spectrum-menu-item-checkmark-height);inline-size:var(--spectrum-menu-item-checkmark-width);grid-area:chevronArea;align-self:center}.spectrum-Menu-item--collapsible .chevron{grid-area:chevronAreaCollapsible}[name=description]::slotted(*){grid-area:descriptionArea}:host([has-submenu]) .chevron{grid-area:chevronAreaDrillIn}.icon:not(.chevron,.checkmark){block-size:var(--mod-menu-item-icon-height,var(--spectrum-menu-item-icon-height));inline-size:var(--mod-menu-item-icon-width,var(--spectrum-menu-item-icon-width))}.checkmark{block-size:var(--mod-menu-item-checkmark-height,var(--spectrum-menu-item-checkmark-height));inline-size:var(--mod-menu-item-checkmark-width,var(--spectrum-menu-item-checkmark-width));margin-block-start:calc(var(--mod-menu-item-top-to-checkmark,var(--spectrum-menu-item-top-to-checkmark)) - var(--mod-menu-item-top-edge-to-text,var(--spectrum-menu-item-top-edge-to-text)));margin-inline-end:var(--mod-menu-item-text-to-control,var(--spectrum-menu-item-text-to-control))}::slotted([slot=icon]){margin-inline-end:var(--mod-menu-item-label-text-to-visual,var(--spectrum-menu-item-label-text-to-visual))}.chevron{margin-inline-end:var(--mod-menu-item-text-to-control,var(--spectrum-menu-item-text-to-control))}[name=description]::slotted(*){color:var(--highcontrast-menu-item-color-default,var(--mod-menu-item-description-color-default,var(--spectrum-menu-item-description-color-default)));font-size:var(--mod-menu-item-description-font-size,var(--spectrum-menu-item-description-font-size));hyphens:auto;overflow-wrap:break-word;line-height:var(--mod-menu-item-description-line-height,var(--spectrum-menu-item-description-line-height));margin-block-start:var(--mod-menu-item-label-to-description-spacing,var(--spectrum-menu-item-label-to-description-spacing))}#label{hyphens:auto;overflow-wrap:break-word}::slotted([slot=value]){color:var(--highcontrast-menu-item-color-default,var(--mod-menu-item-value-color-default,var(--spectrum-menu-item-value-color-default)));font-size:var(--mod-menu-item-label-font-size,var(--spectrum-menu-item-label-font-size));place-self:start end;margin-inline-start:var(--mod-menu-item-label-to-value-area-min-spacing,var(--spectrum-menu-item-label-to-value-area-min-spacing))}:host([no-wrap]) #label{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.spectrum-Menu-item--collapsible.is-open{padding-block-end:0}.spectrum-Menu-item--collapsible.is-open .chevron{transform:rotate(90deg)}:host(:is(:active,[active])) .spectrum-Menu-item--collapsible.is-open,.spectrum-Menu-item--collapsible.is-open:focus,:host([focused]) .spectrum-Menu-item--collapsible.is-open{background-color:var(--highcontrast-menu-item-background-color-default,var(--mod-menu-item-background-color-default,var(--spectrum-menu-item-background-color-default)))}.spectrum-Menu-item--collapsible>::slotted([slot=icon]){padding-block-start:var(--mod-menu-section-header-top-edge-to-text,var(--mod-menu-item-top-edge-to-text,var(--spectrum-menu-item-top-edge-to-text)));padding-block-end:var(--mod-menu-section-header-bottom-edge-to-text,var(--mod-menu-item-bottom-edge-to-text,var(--spectrum-menu-item-bottom-edge-to-text)))}:host([dir=rtl]) .chevron{transform:rotate(-180deg)}:host([has-submenu]) .chevron{fill:var(--highcontrast-menu-item-color-default,var(--mod-menu-drillin-icon-color-default,var(--spectrum-menu-drillin-icon-color-default)));color:var(--highcontrast-menu-item-color-default,var(--mod-menu-drillin-icon-color-default,var(--spectrum-menu-drillin-icon-color-default)));margin-inline-start:var(--mod-menu-item-label-to-value-area-min-spacing,var(--spectrum-menu-item-label-to-value-area-min-spacing));margin-inline-end:0}:host([has-submenu]) .is-open{--spectrum-menu-item-background-color-default:var(--highcontrast-menu-item-selected-background-color,var(--mod-menu-item-background-color-hover,var(--spectrum-menu-item-background-color-hover)))}:host([has-submenu]) .is-open .icon:not(.chevron,.checkmark){fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-label-icon-color-hover,var(--spectrum-menu-item-label-icon-color-hover)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-label-icon-color-hover,var(--spectrum-menu-item-label-icon-color-hover)))}:host([has-submenu]) .is-open .chevron{fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-drillin-icon-color-hover,var(--spectrum-menu-drillin-icon-color-hover)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-drillin-icon-color-hover,var(--spectrum-menu-drillin-icon-color-hover)))}:host([has-submenu]) .is-open .checkmark{fill:var(--highcontrast-menu-checkmark-icon-color-default,var(--mod-menu-checkmark-icon-color-hover,var(--spectrum-menu-checkmark-icon-color-hover)));color:var(--highcontrast-menu-checkmark-icon-color-default,var(--mod-menu-checkmark-icon-color-hover,var(--spectrum-menu-checkmark-icon-color-hover)))}:host([has-submenu]:focus) .chevron,:host([has-submenu][focused]) .chevron{fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-drillin-icon-color-focus,var(--spectrum-menu-drillin-icon-color-focus)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-drillin-icon-color-focus,var(--spectrum-menu-drillin-icon-color-focus)))}:host([has-submenu]:is(:active,[active])) .chevron{fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-drillin-icon-color-down,var(--spectrum-menu-drillin-icon-color-down)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-drillin-icon-color-down,var(--spectrum-menu-drillin-icon-color-down)))}:host([disabled]),:host([aria-disabled=true]){background-color:#0000}:host([disabled]) #label,:host([disabled]) ::slotted([slot=value]),:host([aria-disabled=true]) #label,:host([aria-disabled=true]) ::slotted([slot=value]){color:var(--highcontrast-menu-item-color-disabled,var(--mod-menu-item-label-content-color-disabled,var(--spectrum-menu-item-label-content-color-disabled)))}:host([disabled]) [name=description]::slotted(*),:host([aria-disabled=true]) [name=description]::slotted(*){color:var(--highcontrast-menu-item-color-disabled,var(--mod-menu-item-description-color-disabled,var(--spectrum-menu-item-description-color-disabled)))}:host([disabled]) ::slotted([slot=icon]),:host([aria-disabled=true]) ::slotted([slot=icon]){fill:var(--highcontrast-menu-item-color-disabled,var(--mod-menu-item-label-icon-color-disabled,var(--spectrum-menu-item-label-icon-color-disabled)));color:var(--highcontrast-menu-item-color-disabled,var(--mod-menu-item-label-icon-color-disabled,var(--spectrum-menu-item-label-icon-color-disabled)))}@media (hover:hover){:host([has-submenu]:hover) .chevron{fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-drillin-icon-color-hover,var(--spectrum-menu-drillin-icon-color-hover)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-drillin-icon-color-hover,var(--spectrum-menu-drillin-icon-color-hover)))}:host(:hover){background-color:var(--highcontrast-menu-item-background-color-focus,var(--mod-menu-item-background-color-hover,var(--spectrum-menu-item-background-color-hover)))}:host(:hover)>#label{color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-label-content-color-hover,var(--spectrum-menu-item-label-content-color-hover)))}:host(:hover)>[name=description]::slotted(*){color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-description-color-hover,var(--spectrum-menu-item-description-color-hover)))}:host(:hover)>::slotted([slot=value]){color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-value-color-hover,var(--spectrum-menu-item-value-color-hover)))}:host(:hover)>.icon:not(.chevron,.checkmark){fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-label-icon-color-hover,var(--spectrum-menu-item-label-icon-color-hover)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-item-label-icon-color-hover,var(--spectrum-menu-item-label-icon-color-hover)))}:host(:hover)>.chevron{fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-collapsible-icon-color,var(--spectrum-menu-collapsible-icon-color)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-collapsible-icon-color,var(--spectrum-menu-collapsible-icon-color)))}:host(:hover)>.checkmark{fill:var(--highcontrast-menu-item-color-focus,var(--mod-menu-checkmark-icon-color-hover,var(--spectrum-menu-checkmark-icon-color-hover)));color:var(--highcontrast-menu-item-color-focus,var(--mod-menu-checkmark-icon-color-hover,var(--spectrum-menu-checkmark-icon-color-hover)))}.spectrum-Menu-item--collapsible.is-open:hover{background-color:var(--highcontrast-menu-item-background-color-default,var(--mod-menu-item-background-color-default,var(--spectrum-menu-item-background-color-default)))}:host([disabled]:hover),:host([aria-disabled=true]:hover){cursor:default;background-color:#0000}:host([disabled]:hover) #label,:host([disabled]:hover) ::slotted([slot=value]),:host([aria-disabled=true]:hover) #label,:host([aria-disabled=true]:hover) ::slotted([slot=value]){color:var(--highcontrast-menu-item-color-disabled,var(--mod-menu-item-label-content-color-disabled,var(--spectrum-menu-item-label-content-color-disabled)))}:host([disabled]:hover) [name=description]::slotted(*),:host([aria-disabled=true]:hover) [name=description]::slotted(*){color:var(--highcontrast-menu-item-color-disabled,var(--mod-menu-item-description-color-disabled,var(--spectrum-menu-item-description-color-disabled)))}:host([disabled]:hover) ::slotted([slot=icon]),:host([aria-disabled=true]:hover) ::slotted([slot=icon]){fill:var(--highcontrast-menu-item-color-disabled,var(--mod-menu-item-label-icon-color-disabled,var(--spectrum-menu-item-label-icon-color-disabled)));color:var(--highcontrast-menu-item-color-disabled,var(--mod-menu-item-label-icon-color-disabled,var(--spectrum-menu-item-label-icon-color-disabled)))}}.spectrum-Menu-back{padding-inline:var(--mod-menu-back-padding-inline-start,0)var(--mod-menu-back-padding-inline-end,var(--spectrum-menu-item-label-inline-edge-to-content));padding-block:var(--mod-menu-back-padding-block-start,0)var(--mod-menu-back-padding-block-end,0);flex-flow:wrap;align-items:center;display:flex}.spectrum-Menu-backButton{cursor:pointer;background:0 0;border:0;margin:0;padding:0;display:inline-flex}:host([focused]) .spectrum-Menu-backButton{outline:var(--spectrum-focus-indicator-thickness)solid var(--spectrum-focus-indicator-color);outline-offset:calc((var(--spectrum-focus-indicator-thickness) + 1px)*-1)}.spectrum-Menu-backHeading{color:var(--highcontrast-menu-item-color-default,var(--mod-menu-back-heading-color,var(--spectrum-menu-section-header-color)));font-size:var(--mod-menu-section-header-font-size,var(--spectrum-menu-section-header-font-size));font-weight:var(--mod-menu-section-header-font-weight,var(--spectrum-menu-section-header-font-weight));line-height:var(--mod-menu-section-header-line-height,var(--spectrum-menu-section-header-line-height));display:block}.spectrum-Menu-backIcon{margin-block:var(--mod-menu-back-icon-margin-block,var(--spectrum-menu-back-icon-margin));margin-inline:var(--mod-menu-back-icon-margin-inline,var(--spectrum-menu-back-icon-margin));fill:var(--highcontrast-menu-item-color-default,var(--mod-menu-back-icon-color-default));color:var(--highcontrast-menu-item-color-default,var(--mod-menu-back-icon-color-default))}#label{hyphens:auto;line-height:var(--spectrum-listitem-texticon-label-line-height);overflow-wrap:break-word;width:calc(100% - var(--spectrum-listitem-texticon-ui-icon-width) - var(--spectrum-listitem-texticon-icon-gap));flex:auto}.spectrum-Menu-itemLabel--wrapping{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host([hidden]){display:none}:host([disabled]){pointer-events:none}:host([disabled]) [name=value]::slotted(*),:host([has-submenu][disabled]) .chevron{color:var(--highcontrast-menu-item-color-disabled,var(--mod-menu-item-label-icon-color-disabled,var(--spectrum-menu-item-label-icon-color-disabled)))}#button{position:absolute;inset:0}:host([dir=ltr]) [icon-only]::slotted(:last-of-type){margin-right:auto}:host([dir=rtl]) [icon-only]::slotted(:last-of-type){margin-left:auto}@media (forced-colors:active){:host{forced-color-adjust:none}}::slotted([slot=submenu]){width:max-content;max-width:100%}:host([no-wrap]) #label{display:block}
`;var g = o;

var h=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var r=(a,s,e,t)=>{for(var n=t>1?void 0:t?p(s,e):s,i=a.length-1,d;i>=0;i--)(d=a[i])&&(n=(t?d(s,e,n):d(n))||n);return t&&n&&h(s,e,n),n};const L=100;class MenuItemAddedOrUpdatedEvent extends Event{constructor(e){super("sp-menu-item-added-or-updated",{bubbles:!0,composed:!0});this.menuCascade=new WeakMap;this.clear(e);}clear(e){this._item=e,this.currentAncestorWithSelects=void 0,e.menuData={cleanupSteps:[],focusRoot:void 0,selectionRoot:void 0,parentMenu:void 0},this.menuCascade=new WeakMap;}get item(){return this._item}}class MenuItem extends LikeAnchor(ObserveSlotText(ObserveSlotPresence(Focusable,'[slot="icon"]'))){constructor(){super();this.active=!1;this.dependencyManager=new DependencyManagerController(this);this.focused=!1;this.selected=!1;this._value="";this.hasSubmenu=!1;this.noWrap=!1;this.open=!1;this.handleSlottableRequest=e=>{var t;(t=this.submenuElement)==null||t.dispatchEvent(new SlottableRequestEvent(e.name,e.data));};this.proxyFocus=()=>{this.focus();};this.handleBeforetoggle=e=>{e.newState==="closed"&&(this.open=!0,this.overlayElement.manuallyKeepOpen(),this.overlayElement.removeEventListener("beforetoggle",this.handleBeforetoggle));};this.recentlyLeftChild=!1;this.willDispatchUpdate=!1;this.menuData={focusRoot:void 0,parentMenu:void 0,selectionRoot:void 0,cleanupSteps:[]};this.addEventListener("click",this.handleClickCapture,{capture:!0}),new t$1(this,{config:{characterData:!0,childList:!0,subtree:!0},callback:e=>{e.every(n=>n.target.slot==="submenu")||this.breakItemChildrenCache();}});}static get styles(){return [g,E,C]}get value(){return this._value||this.itemText}set value(e){e!==this._value&&(this._value=e||"",this._value?this.setAttribute("value",this._value):this.removeAttribute("value"));}get itemText(){return this.itemChildren.content.reduce((e,t)=>e+(t.textContent||"").trim(),"")}get focusElement(){return this}get hasIcon(){return this.slotContentIsPresent}get itemChildren(){if(!this.iconSlot||!this.contentSlot)return {icon:[],content:[]};if(this._itemChildren)return this._itemChildren;const e=this.iconSlot.assignedElements().map(n=>{const i=n.cloneNode(!0);return i.removeAttribute("slot"),i.classList.toggle("icon"),i}),t=this.contentSlot.assignedNodes().map(n=>n.cloneNode(!0));return this._itemChildren={icon:e,content:t},this._itemChildren}click(){this.disabled||this.shouldProxyClick()||super.click();}handleClickCapture(e){if(this.disabled)return e.preventDefault(),e.stopImmediatePropagation(),e.stopPropagation(),!1}shouldProxyClick(){let e=!1;return this.anchorElement&&(this.anchorElement.click(),e=!0),e}breakItemChildrenCache(){this._itemChildren=void 0,this.triggerUpdate();}renderSubmenu(){const e=x`
            <slot
                name="submenu"
                @slotchange=${this.manageSubmenu}
                @sp-menu-item-added-or-updated=${{handleEvent:t=>{t.clear(t.item);},capture:!0}}
                @focusin=${t=>t.stopPropagation()}
            ></slot>
        `;return this.hasSubmenu?(this.dependencyManager.add("sp-overlay"),this.dependencyManager.add("sp-popover"),import('./sp-overlay-8v49LtLr.js').then(function (n) { return n.a; }),import('./sp-popover-X_Nz1ZdE.js'),x`
            <sp-overlay
                .triggerElement=${this}
                ?disabled=${!this.hasSubmenu}
                ?open=${this.hasSubmenu&&this.open&&this.dependencyManager.loaded}
                .placement=${this.isLTR?"right-start":"left-start"}
                .offset=${[-10,-5]}
                .type=${"auto"}
                @close=${t=>t.stopPropagation()}
                @slottable-request=${this.handleSlottableRequest}
            >
                <sp-popover
                    @change=${t=>{this.handleSubmenuChange(t),this.open=!1;}}
                    @pointerenter=${this.handleSubmenuPointerenter}
                    @pointerleave=${this.handleSubmenuPointerleave}
                    @sp-menu-item-added-or-updated=${t=>t.stopPropagation()}
                >
                    ${e}
                </sp-popover>
            </sp-overlay>
            <sp-icon-chevron100
                class="spectrum-UIIcon-ChevronRight100 chevron icon"
            ></sp-icon-chevron100>
        `):e}render(){return x`
            ${this.selected?x`
                      <sp-icon-checkmark100
                          id="selected"
                          class="spectrum-UIIcon-Checkmark100 
                            icon 
                            checkmark
                            ${this.hasIcon?"checkmark--withAdjacentIcon":""}"
                      ></sp-icon-checkmark100>
                  `:A}
            <slot name="icon"></slot>
            <div id="label">
                <slot id="slot"></slot>
            </div>
            <slot name="description"></slot>
            <slot name="value"></slot>
            ${this.href&&this.href.length>0?super.renderAnchor({id:"button",ariaHidden:!0,className:"button anchor hidden"}):A}
            ${this.renderSubmenu()}
        `}manageSubmenu(e){this.submenuElement=e.target.assignedElements({flatten:!0})[0],this.hasSubmenu=!!this.submenuElement,this.hasSubmenu&&this.setAttribute("aria-haspopup","true");}handlePointerdown(e){e.target===this&&this.hasSubmenu&&this.open&&(this.addEventListener("focus",this.handleSubmenuFocus,{once:!0}),this.overlayElement.addEventListener("beforetoggle",this.handleBeforetoggle));}firstUpdated(e){super.firstUpdated(e),this.setAttribute("tabindex","-1"),this.addEventListener("pointerdown",this.handlePointerdown),this.addEventListener("pointerenter",this.closeOverlaysForRoot),this.hasAttribute("id")||(this.id=`sp-menu-item-${randomID()}`);}closeOverlaysForRoot(){var e;this.open||(e=this.menuData.parentMenu)==null||e.closeDescendentOverlays();}handleSubmenuClick(e){e.composedPath().includes(this.overlayElement)||this.openOverlay();}handleSubmenuFocus(){requestAnimationFrame(()=>{this.overlayElement.open=this.open;});}handlePointerenter(){if(this.leaveTimeout){clearTimeout(this.leaveTimeout),delete this.leaveTimeout;return}this.openOverlay();}handlePointerleave(){this.open&&!this.recentlyLeftChild&&(this.leaveTimeout=setTimeout(()=>{delete this.leaveTimeout,this.open=!1;},L));}handleSubmenuChange(e){var t;e.stopPropagation(),(t=this.menuData.selectionRoot)==null||t.selectOrToggleItem(this);}handleSubmenuPointerenter(){this.recentlyLeftChild=!0;}async handleSubmenuPointerleave(){requestAnimationFrame(()=>{this.recentlyLeftChild=!1;});}handleSubmenuOpen(e){this.focused=!1;const t=e.composedPath().find(n=>n!==this.overlayElement&&n.localName==="sp-overlay");this.overlayElement.parentOverlayToForceClose=t;}cleanup(){this.open=!1,this.active=!1;}async openOverlay(){!this.hasSubmenu||this.open||this.disabled||(this.open=!0,this.active=!0,this.setAttribute("aria-expanded","true"),this.addEventListener("sp-closed",this.cleanup,{once:!0}));}updateAriaSelected(){const e=this.getAttribute("role");e==="option"?this.setAttribute("aria-selected",this.selected?"true":"false"):(e==="menuitemcheckbox"||e==="menuitemradio")&&this.setAttribute("aria-checked",this.selected?"true":"false");}setRole(e){this.setAttribute("role",e),this.updateAriaSelected();}updated(e){var t,n;if(super.updated(e),e.has("label")&&(this.label||typeof e.get("label")!="undefined")&&this.setAttribute("aria-label",this.label||""),e.has("active")&&(this.active||typeof e.get("active")!="undefined")&&this.active&&((t=this.menuData.selectionRoot)==null||t.closeDescendentOverlays()),this.anchorElement&&(this.anchorElement.addEventListener("focus",this.proxyFocus),this.anchorElement.tabIndex=-1),e.has("selected")&&this.updateAriaSelected(),e.has("hasSubmenu")&&(this.hasSubmenu||typeof e.get("hasSubmenu")!="undefined"))if(this.hasSubmenu){this.abortControllerSubmenu=new AbortController;const i={signal:this.abortControllerSubmenu.signal};this.addEventListener("click",this.handleSubmenuClick,i),this.addEventListener("pointerenter",this.handlePointerenter,i),this.addEventListener("pointerleave",this.handlePointerleave,i),this.addEventListener("sp-opened",this.handleSubmenuOpen,i);}else (n=this.abortControllerSubmenu)==null||n.abort();}connectedCallback(){super.connectedCallback(),this.triggerUpdate();}disconnectedCallback(){this.menuData.cleanupSteps.forEach(e=>e(this)),this.menuData={focusRoot:void 0,parentMenu:void 0,selectionRoot:void 0,cleanupSteps:[]},super.disconnectedCallback();}async triggerUpdate(){this.willDispatchUpdate||(this.willDispatchUpdate=!0,await new Promise(e=>requestAnimationFrame(e)),this.dispatchUpdate());}dispatchUpdate(){this.isConnected&&(this.dispatchEvent(new MenuItemAddedOrUpdatedEvent(this)),this.willDispatchUpdate=!1);}}r([n({type:Boolean,reflect:!0})],MenuItem.prototype,"active",2),r([n({type:Boolean,reflect:!0})],MenuItem.prototype,"focused",2),r([n({type:Boolean,reflect:!0})],MenuItem.prototype,"selected",2),r([n({type:String})],MenuItem.prototype,"value",1),r([n({type:Boolean,reflect:!0,attribute:"has-submenu"})],MenuItem.prototype,"hasSubmenu",2),r([i$1("slot:not([name])")],MenuItem.prototype,"contentSlot",2),r([i$1('slot[name="icon"]')],MenuItem.prototype,"iconSlot",2),r([n({type:Boolean,reflect:!0,attribute:"no-wrap",hasChanged(){return !1}})],MenuItem.prototype,"noWrap",2),r([i$1(".anchor")],MenuItem.prototype,"anchorElement",2),r([i$1("sp-overlay")],MenuItem.prototype,"overlayElement",2),r([n({type:Boolean,reflect:!0})],MenuItem.prototype,"open",2);

defineElement("sp-menu-item",MenuItem);
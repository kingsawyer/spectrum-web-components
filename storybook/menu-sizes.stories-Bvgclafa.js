import './sp-menu-CUlDsjuI.js';
import './sp-menu-divider-C2nPYE43.js';
import './sp-menu-item-C1UX3rOw.js';
import './sp-popover-BwkBJERl.js';
import { x } from './lit-html-COgVUehj.js';
import { s } from './lit-element-BL-po2DW.js';
import './sizedMixin-H6qLwJc0.js';
import './define-element-9Zj84-C8.js';
import './query-DQF6X5qW.js';
import './base-u8Z1Hrsd.js';
import './divider.css-Y7Qapv-N.js';
import './spectrum-icon-checkmark.css-B4Pvgr0C.js';
import './custom-tag-B5IH9PTE.js';
import './IconBase-L76-n75s.js';
import './like-anchor-c-omWQV-.js';
import './if-defined-DDJGFaN4.js';
import './focusable-CfMGZF2L.js';
import './focus-visible-D29Av9Xb.js';
import './sp-icon-chevron100-BVn8JicT.js';
import './Chevron100-2ZEB0c-t.js';
import './spectrum-icon-chevron.css-C5c2rYXA.js';
import './DependencyManger-Dpkh1Bse.js';
import './mutation-controller-D2lT1xZk.js';
import './slottable-request-event-DXuuyGoq.js';
import './observe-slot-text-Dr0dVrDu.js';
import './query-assigned-nodes-DAYI4epk.js';
import './random-id-BST1Puzz.js';
import './observe-slot-presence-Ceiwt-jV.js';
import './Popover-BxK5qKxD.js';

const MenuMarkup = ({
  size = "m"
} = {}) => {
  return x`
        <sp-menu size=${size}>
            <sp-menu-item>Deselect</sp-menu-item>
            <sp-menu-item>Select Inverse</sp-menu-item>
            <sp-menu-item>Feather...</sp-menu-item>
            <sp-menu-item>Select and Mask...</sp-menu-item>
            <sp-menu-divider></sp-menu-divider>
            <sp-menu-item>Save Selection</sp-menu-item>
            <sp-menu-item disabled>Make Work Path</sp-menu-item>
        </sp-menu>

        <sp-popover open>
            <sp-menu size=${size}>
                <sp-menu-item>Deselect</sp-menu-item>
                <sp-menu-item>Select Inverse</sp-menu-item>
                <sp-menu-item>Feather...</sp-menu-item>
                <sp-menu-item>Select and Mask...</sp-menu-item>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-item>Save Selection</sp-menu-item>
                <sp-menu-item disabled>Make Work Path</sp-menu-item>
            </sp-menu>
        </sp-popover>
    `;
};
class ComplexSlottedGroup extends s {
  get menu() {
    return this.renderRoot.querySelector("sp-menu");
  }
  render() {
    return x`
            <sp-menu>
                <sp-menu-group>
                    <sp-menu-item id="i-1">Before First</sp-menu-item>
                    <slot name="before"></slot>
                </sp-menu-group>
                <sp-menu-group>
                    <sp-menu-item id="i-4">Sibling 1</sp-menu-item>
                    <slot></slot>
                    <sp-menu-item id="i-10">Sibling 2</sp-menu-item>
                </sp-menu-group>
                <sp-menu-group>
                    <sp-menu-item id="i-11">After 1</sp-menu-item>
                    <sp-menu-item id="i-12">After 2</sp-menu-item>
                </sp-menu-group>
            </sp-menu>
        `;
  }
}
customElements.define("complex-slotted-group", ComplexSlottedGroup);
class ComplexSlottedMenu extends s {
  get menu() {
    return this.renderRoot.querySelector(
      "complex-slotted-group"
    ).menu;
  }
  render() {
    return x`
            <complex-slotted-group id="group">
                <sp-menu-item id="i-5">Middle 1</sp-menu-item>
                <sp-menu-item id="i-6">Middle 2</sp-menu-item>
                <sp-menu-item id="i-7">Middle 3</sp-menu-item>
                <slot></slot>
                <slot name="before" slot="before"></slot>
                <sp-menu-item slot="before" id="i-3">Before Last</sp-menu-item>
            </complex-slotted-group>
        `;
  }
}
customElements.define("complex-slotted-menu", ComplexSlottedMenu);

var menuSizes_stories = {
  component: "sp-menu",
  title: "Menu/Sizes"
};
const S = () => MenuMarkup({ size: "s" });
const M = () => MenuMarkup({ size: "m" });
const L = () => MenuMarkup({ size: "l" });
const XL = () => MenuMarkup({ size: "xl" });
const __namedExportsOrder = ['S', 'M', 'L', 'XL'];

export { L, M, S, XL, __namedExportsOrder, menuSizes_stories as default };
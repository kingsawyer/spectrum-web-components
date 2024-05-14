import './sp-menu-CUlDsjuI.js';
import './sp-menu-divider-C2nPYE43.js';
import './sp-popover-BwkBJERl.js';
import './sp-menu-item-C1UX3rOw.js';
import './sp-menu-group-DUy4Yso4.js';
import { x } from './lit-html-COgVUehj.js';
import './lit-element-BL-po2DW.js';
import './sizedMixin-H6qLwJc0.js';
import './define-element-9Zj84-C8.js';
import './query-DQF6X5qW.js';
import './base-u8Z1Hrsd.js';
import './divider.css-Y7Qapv-N.js';
import './Popover-BxK5qKxD.js';
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
import './state-DdC_O7Nr.js';

var menuGroup_stories = {
  component: "sp-menu",
  title: "Menu Group"
};
const complexSlotted = () => {
  return x`
        <complex-slotted-menu>
            <sp-menu-item slot="before" id="i-2">External A</sp-menu-item>
            <sp-menu-item id="i-8">External 1</sp-menu-item>
            <sp-menu-item id="i-9">External 2</sp-menu-item>
        </complex-slotted-menu>
    `;
};
const mixed = () => {
  let style = "italic";
  let weight = "700";
  let color = "blue";
  let decoration = "overline";
  const styleRules = ({
    style: style2,
    weight: weight2,
    color: color2,
    decoration: decoration2
  }) => {
    return `
        .style-rule {
            font-weight: ${weight2};
            font-style: ${style2};
            color: ${color2};
            text-decoration: ${decoration2};
        }
        `;
  };
  const update = (event) => {
    const { value, id } = event.target;
    switch (id) {
      case "font":
        const values = value.split(",");
        style = values.indexOf("italic") > -1 ? "italic" : "normal";
        weight = values.indexOf("bold") > -1 ? "700" : "400";
        break;
      case "color":
        color = value;
        break;
      case "decoration":
        decoration = value;
        break;
    }
    document.querySelector("#output").textContent = styleRules({
      style,
      weight,
      color,
      decoration
    });
  };
  return x`
        <style>
            sp-popover {
                position: static;
                float: left;
            }
        </style>
        <sp-popover open>
            <sp-menu label="Style/Color" @change=${update}>
                <sp-menu-group label="Font Style" selects="multiple" id="font">
                    <sp-menu-item value="bold" selected>Bold</sp-menu-item>
                    <sp-menu-item value="italic" selected>Italic</sp-menu-item>
                </sp-menu-group>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-group label="Text Color" selects="single" id="color">
                    <sp-menu-item value="black">Black</sp-menu-item>
                    <sp-menu-item value="blue" selected>Blue</sp-menu-item>
                    <sp-menu-item value="red">Red</sp-menu-item>
                    <sp-menu-item value="green">Green</sp-menu-item>
                </sp-menu-group>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-group
                    label="Text Decoration"
                    selects="single"
                    id="decoration"
                >
                    <sp-menu-item value="none">None</sp-menu-item>
                    <sp-menu-item value="overline" selected>
                        Overline
                    </sp-menu-item>
                    <sp-menu-item value="line-through">
                        Line-through
                    </sp-menu-item>
                    <sp-menu-item value="underline">Underline</sp-menu-item>
                </sp-menu-group>
            </sp-menu>
        </sp-popover>
        <pre
            id="output"
            style="font-family: var(--spectrum-alias-body-text-font-family);"
        >
            ${styleRules({ style, weight, color, decoration })}
        </pre
        >
    `;
};
const inherit = () => {
  return x`
        <style>
            sp-popover {
                position: static;
                float: left;
            }
        </style>
        <sp-popover open>
            <sp-menu label="Groceries" selects="multiple">
                <sp-menu-group label="Juice" selects="inherit">
                    <sp-menu-item selected>Orange</sp-menu-item>
                    <sp-menu-item selected>Apple</sp-menu-item>
                    <sp-menu-item>Grape</sp-menu-item>
                </sp-menu-group>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-group label="Vegetables" selects="inherit">
                    <sp-menu-item>Carrots</sp-menu-item>
                    <sp-menu-item selected>Summer Squash</sp-menu-item>
                    <sp-menu-item>Zuccini</sp-menu-item>
                </sp-menu-group>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-group label="Dry Goods" selects="inherit">
                    <sp-menu-item>Ceral</sp-menu-item>
                    <sp-menu-item selected>Flour</sp-menu-item>
                    <sp-menu-item>Salt</sp-menu-item>
                    <sp-menu-item>Sugar</sp-menu-item>
                </sp-menu-group>
            </sp-menu>
        </sp-popover>
    `;
};
const __namedExportsOrder = ['complexSlotted', 'mixed', 'inherit'];

export { __namedExportsOrder, complexSlotted, menuGroup_stories as default, inherit, mixed };
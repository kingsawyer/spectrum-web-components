import './sp-popover-BwkBJERl.js';
import './overlay-trigger-DkX_0tFq.js';
import './sp-dialog-DzawesJV.js';
import './sp-button-Fy_2FMPk.js';
import { i as isOverlayOpen } from './index-DY1O5Zi9.js';
import { x } from './lit-html-COgVUehj.js';
import { o } from './if-defined-DDJGFaN4.js';
import './Popover-BxK5qKxD.js';
import './lit-element-BL-po2DW.js';
import './define-element-9Zj84-C8.js';
import './query-DQF6X5qW.js';
import './base-u8Z1Hrsd.js';
import './state-DdC_O7Nr.js';
import './sp-divider-BpFfGzVw.js';
import './divider.css-Y7Qapv-N.js';
import './sizedMixin-H6qLwJc0.js';
import './sp-close-button-FXF4gEEu.js';
import './spectrum-icon-cross.css-DAq7WwgI.js';
import './ButtonBase-adwZ7HOt.js';
import './like-anchor-c-omWQV-.js';
import './focusable-CfMGZF2L.js';
import './focus-visible-D29Av9Xb.js';
import './observe-slot-text-Dr0dVrDu.js';
import './mutation-controller-D2lT1xZk.js';
import './query-assigned-nodes-DAYI4epk.js';
import './custom-tag-B5IH9PTE.js';
import './IconBase-L76-n75s.js';
import './sp-icon-cross500-D7FFi1Q9.js';
import './Cross500-HJNUUNvY.js';
import './sp-button-group-Dtho_kG8.js';
import './sp-icon-alert-GYTZvYm3.js';
import './custom-tag-Diwq7nXX.js';
import './AlertDialog-D-R6aPVf.js';
import './random-id-BST1Puzz.js';
import './condition-attribute-with-id-Cnyhr7Mp.js';
import './resize-controller-BJKfu6ft.js';
import './observe-slot-presence-Ceiwt-jV.js';
import './class-map-DdRvesrq.js';
import './directive-Bn5c4u4M.js';
import './when-DEJm_QN9.js';

var popover_stories = {
  component: "sp-popover",
  title: "Popover",
  argTypes: {
    open: {
      name: "open",
      type: { name: "boolean", required: false },
      description: "Whether the popover is open or not.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false }
      },
      control: "boolean"
    },
    placement: {
      name: "placement",
      type: { name: "string", required: false },
      description: "The placement of the popover content in relation to the tip",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "none" }
      },
      control: "text"
    },
    tip: {
      name: "tip",
      description: "Whether the popover has a tip.",
      type: { name: "boolean", required: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false }
      },
      control: "boolean"
    }
  },
  args: {
    open: true,
    placement: "none",
    tip: false
  }
};
const Default = ({ content }) => {
  return x`
        <div style="color: var(--spectrum-gray-800)">
            <sp-popover variant="default" open style="max-width: 320px">
                <div style="font-size: 14px; padding: 10px">${content}</div>
            </sp-popover>
        </div>
    `;
};
Default.args = {
  content: "The quick brown fox jumps over the lazy dog"
};
Default.argTypes = {
  content: {
    name: "content",
    type: { name: "string", required: false },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "" }
    },
    control: "text"
  }
};
const Template = ({ tip, placement, open }) => {
  return x`
        <div
            style="color: var(--spectrum-gray-800); position: relative; display: contents"
        >
            <sp-popover
                variant="dialog"
                placement=${placement}
                ?open=${open}
                style=" max-width: 320px"
                .tip="${tip}"
            >
                <sp-dialog size="s">
                    <h2 slot="heading">Popover Title</h2>
                    Cupcake ipsum dolor sit amet jelly beans. Chocolate jelly
                    caramels. Icing soufflé chupa chups donut cheesecake.
                    Jelly-o chocolate cake sweet roll cake danish candy biscuit
                    halvah
                </sp-dialog>
            </sp-popover>
        </div>
    `;
};
const dialogTop = (args) => Template(args);
dialogTop.args = {
  tip: true,
  placement: "top"
};
const dialogRight = (args) => Template(args);
dialogRight.args = {
  tip: true,
  placement: "right"
};
const dialogBottom = (args) => Template(args);
dialogBottom.args = {
  tip: true,
  placement: "bottom"
};
const dialogLeft = (args) => Template(args);
dialogLeft.args = {
  tip: true,
  placement: "left"
};
const overlayStyles = x`
    <style>
        html,
        body,
        #root,
        #root-inner,
        sp-story-decorator {
            height: 100%;
            margin: 0;
        }

        sp-story-decorator > div {
            display: contents;
        }

        sp-story-decorator::part(container) {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: center;
        }

        overlay-trigger {
            flex: none;
            margin: 24px 0;
        }
    </style>
`;
const overlaid = (openPlacement) => {
  return x`
        ${overlayStyles}
        ${["bottom", "left", "right", "top"].map(
    (placement) => {
      return x`
                    <overlay-trigger
                        placement="${placement}-start"
                        open=${o(
        openPlacement === placement ? "click" : void 0
      )}
                    >
                        <sp-button
                            label="${placement}-start test"
                            slot="trigger"
                        >
                            Click for ${placement}-start popover
                        </sp-button>
                        <sp-popover tip slot="click-content">
                            <sp-dialog style="--mod-dialog-min-inline-size: 0;">
                                <h2 slot="heading">
                                    Popover ${placement}-start
                                </h2>
                                This popover is on the ${placement}-start of its
                                button.
                            </sp-dialog>
                        </sp-popover>
                    </overlay-trigger>
                `;
    }
  )}
    `;
};
const overlaidTop = () => overlaid("top");
overlaidTop.decorators = [isOverlayOpen];
const overlaidRight = () => overlaid("right");
overlaidRight.decorators = [isOverlayOpen];
const overlaidBottom = () => overlaid("bottom");
overlaidBottom.decorators = [isOverlayOpen];
const overlaidLeft = () => overlaid("left");
overlaidLeft.decorators = [isOverlayOpen];
const __namedExportsOrder = ['Default', 'dialogTop', 'dialogRight', 'dialogBottom', 'dialogLeft', 'overlaidTop', 'overlaidRight', 'overlaidBottom', 'overlaidLeft'];

export { Default, __namedExportsOrder, popover_stories as default, dialogBottom, dialogLeft, dialogRight, dialogTop, overlaidBottom, overlaidLeft, overlaidRight, overlaidTop };
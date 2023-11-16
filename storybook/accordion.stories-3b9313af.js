import { A as AccordionMarkup } from './index-0f5abf16.js';
import './sp-accordion-item-45ae1e9b.js';
import './sp-link-2bb974c1.js';
import './lit-html-126adc72.js';
import './FocusGroup-0f0b800e.js';
import './lit-element-9354aa77.js';
import './sizedMixin-95b38e3e.js';
import './define-element-467f3dc4.js';
import './base-511c8c11.js';
import './query-assigned-nodes-6218f033.js';
import './focusable-df7b829e.js';
import './focus-visible-03398d98.js';
import './sp-icon-chevron100-d31cf739.js';
import './Chevron100-6f55b923.js';
import './custom-tag-c228386e.js';
import './IconBase-fdbfb1c1.js';
import './spectrum-icon-chevron.css-d3283c08.js';
import './when-67eca38c.js';
import './like-anchor-79c92c76.js';
import './if-defined-ae83b405.js';
import './query-d0113d5a.js';

var accordion_stories = {
  title: "Accordion",
  component: "sp-accordion",
  args: {
    open: false,
    size: "m",
    density: void 0
  },
  argTypes: {
    open: {
      name: "open",
      type: { name: "boolean", required: false },
      description: "Whether the second accordion item is open.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false }
      },
      control: {
        type: "boolean"
      }
    },
    density: {
      name: "density",
      type: { name: "string", required: false },
      description: "The density at which to display accordion items.",
      table: {
        defaultValue: { summary: void 0 }
      },
      control: {
        options: ["compact", "spacious", void 0],
        type: "select"
      }
    },
    size: {
      name: "size",
      type: { name: "string", required: false },
      description: "The size at which to display accordion items.",
      table: {
        defaultValue: { summary: "m" }
      },
      control: {
        options: ["s", "m", "l", "xl"],
        type: "select"
      }
    }
  }
};
const Default = (args) => AccordionMarkup(args);
const Open = (args) => AccordionMarkup(args);
Open.args = {
  open: true,
  allowMultiple: false,
  disabled: false
};
const AllowMultiple = (args) => AccordionMarkup(args);
AllowMultiple.args = {
  allowMultiple: true
};
const Disabled = (args) => AccordionMarkup(args);
Disabled.args = {
  disabled: true
};
const __namedExportsOrder = ['Default', 'Open', 'AllowMultiple', 'Disabled'];

export { AllowMultiple, Default, Disabled, Open, __namedExportsOrder, accordion_stories as default };
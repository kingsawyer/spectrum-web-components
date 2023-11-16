import './sp-avatar-7965e1cc.js';
import { a as avatar } from './images-65980286.js';
import { x } from './lit-html-126adc72.js';
import './like-anchor-79c92c76.js';
import './define-element-467f3dc4.js';
import './lit-element-9354aa77.js';
import './if-defined-ae83b405.js';
import './focusable-df7b829e.js';
import './focus-visible-03398d98.js';
import './query-d0113d5a.js';
import './base-511c8c11.js';

var avatar_stories = {
  component: "sp-avatar",
  title: "Avatar",
  argTypes: {
    disabled: { control: "boolean" },
    label: { control: "text" },
    src: { control: "text" }
  },
  args: {
    disabled: false,
    label: "Place dog",
    src: avatar
  }
};
const Template = ({
  label = "Place Dog",
  src = avatar,
  size = 100
} = {}) => {
  return x`
        <sp-avatar label=${label} src=${src} size=${size}></sp-avatar>
    `;
};
const Link = ({
  disabled: disabled2 = false,
  label = "Place Dog",
  src = avatar,
  size = 100
} = {}) => {
  return x`
        <sp-avatar
            href="https://opensource.adobe.com/spectrum-web-components"
            ?disabled=${disabled2}
            label=${label}
            src=${src}
            size=${size}
        ></sp-avatar>
    `;
};
const size50 = (args = {}) => Template({ ...args, size: 50 });
const size75 = (args = {}) => Template({ ...args, size: 75 });
const size100 = (args = {}) => Template({ ...args, size: 100 });
const size200 = (args = {}) => Template({ ...args, size: 200 });
const size300 = (args = {}) => Template({ ...args, size: 300 });
const size400 = (args = {}) => Template({ ...args, size: 400 });
const size500 = (args = {}) => Template({ ...args, size: 500 });
const size600 = (args = {}) => Template({ ...args, size: 600 });
const size700 = (args = {}) => Template({ ...args, size: 700 });
const linked = (args = {}) => Link(args);
const disabled = (args = {}) => Link(args);
disabled.args = { disabled: true };
const __namedExportsOrder = ['size50', 'size75', 'size100', 'size200', 'size300', 'size400', 'size500', 'size600', 'size700', 'linked', 'disabled'];

export { __namedExportsOrder, avatar_stories as default, disabled, linked, size100, size200, size300, size400, size50, size500, size600, size700, size75 };
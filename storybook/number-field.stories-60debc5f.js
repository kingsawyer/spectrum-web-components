import './sp-number-field-6140eb28.js';
import './sp-field-label-5c290246.js';
import { s as spreadProps } from './lit-helpers-bb820419.js';
import { x } from './lit-html-126adc72.js';
import { l } from './if-defined-ae83b405.js';
import './LanguageResolution-630dfe34.js';
import './streaming-listener-70cd7ec3.js';
import './lit-element-9354aa77.js';
import './async-directive-e6357bae.js';
import './directive-helpers-aa9210f2.js';
import './directive-2bb7789e.js';
import './import-76526f12.js';
import './sp-icon-chevron200-da4507b8.js';
import './Chevron200-ff933a30.js';
import './custom-tag-c228386e.js';
import './IconBase-fdbfb1c1.js';
import './define-element-467f3dc4.js';
import './sp-icon-chevron75-af30215c.js';
import './Chevron75-0eaeeeac.js';
import './sp-icon-chevron100-d31cf739.js';
import './Chevron100-6f55b923.js';
import './sp-infield-button-d13b3b67.js';
import './ButtonBase-4ebd5d24.js';
import './like-anchor-79c92c76.js';
import './focusable-df7b829e.js';
import './focus-visible-03398d98.js';
import './observe-slot-text-2a3e6366.js';
import './mutation-controller-81a30f7f.js';
import './query-assigned-nodes-6218f033.js';
import './base-511c8c11.js';
import './sizedMixin-95b38e3e.js';
import './query-d0113d5a.js';
import './platform-a32a5617.js';
import './spectrum-icon-chevron.css-d3283c08.js';
import './Textfield-034d075f.js';
import './manage-help-text-39f4c7ea.js';
import './condition-attribute-with-id-62869347.js';
import './spectrum-icon-checkmark.css-2fc91f81.js';
import './sp-icon-alert-107ad358.js';
import './custom-tag-b5526d41.js';
import './state-879d3fe4.js';
import './ElementResolution-b58a0825.js';

var numberField_stories = {
  title: "Number Field",
  component: "sp-number-field",
  args: {
    disabled: false,
    readonly: false,
    quiet: false,
    value: void 0,
    placeholder: "",
    min: void 0,
    max: void 0,
    step: void 0
  },
  argTypes: {
    disabled: {
      name: "disabled",
      type: { name: "boolean", required: false },
      description: "Disable this control. It will not receive focus or events.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false }
      },
      control: {
        type: "boolean"
      }
    },
    indeterminate: {
      name: "indeterminate",
      type: { name: "boolean", required: false },
      description: "Whether the value of the Number Field can be determined for display.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false }
      },
      control: {
        type: "boolean"
      }
    },
    readonly: {
      name: "readonly",
      type: { name: "boolean", required: false },
      description: "When this control is read only, you will not be able to input an updated value.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false }
      },
      control: {
        type: "boolean"
      }
    },
    quiet: {
      name: "quiet",
      type: { name: "boolean", required: false },
      description: "An altered delivery with no background and only a bottom border.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false }
      },
      control: {
        type: "boolean"
      }
    },
    hideStepper: {
      name: "hide stepper",
      type: { name: "boolean", required: false },
      description: "Whether to remove the stepper UI from the control.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false }
      },
      control: {
        type: "boolean"
      }
    },
    value: {
      name: "value",
      type: { name: "number", required: false },
      description: "Value to apply to the control.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: void 0 }
      },
      control: {
        type: "number"
      }
    },
    step: {
      name: "step",
      type: { name: "number", required: false },
      description: "Amount to change the value by when using the stepper or arrow key interactions.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: void 0 }
      },
      control: {
        type: "number"
      }
    },
    stepModifier: {
      name: "step modifier",
      type: { name: "number", required: false },
      description: "Amount to scale the step increment/decrement when holding the shift key",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 10 }
      },
      control: {
        type: "number"
      }
    },
    placeholder: {
      name: "placeholder",
      type: { name: "string", required: false },
      description: "Placeholder to apply to the control.",
      table: {
        type: { summary: "string" }
      },
      control: {
        type: "text"
      }
    },
    min: {
      name: "min",
      type: { name: "number", required: false },
      description: "The minimum value the control can be set to.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: void 0 }
      },
      control: {
        type: "number"
      }
    },
    max: {
      name: "max",
      type: { name: "numer", required: false },
      description: "The maximum value the control can be set to.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: void 0 }
      },
      control: {
        type: "number"
      }
    }
  }
};
const Default = (args = {}) => {
  const onChange = args.onChange || (() => {
    return;
  });
  const onInput = args.onInput || (() => {
    return;
  });
  return x`
        <sp-field-label for="default">Enter a number</sp-field-label>
        <sp-number-field
            id="default"
            ...=${spreadProps(args)}
            @input=${(event) => onInput(event.target.value)}
            @change=${(event) => onChange(event.target.value)}
            style=${l(args.quiet ? void 0 : "width: 150px")}
        ></sp-number-field>
    `;
};
Default.args = {
  value: 100
};
const quiet = (args = {}) => Default(args);
quiet.args = {
  quiet: true,
  value: 100
};
const indeterminate = (args = {}) => Default(args);
indeterminate.args = {
  value: 100,
  indeterminate: true
};
const decimals = (args) => {
  return x`
        <sp-field-label for="decimals">
            Enter a number with visible decimals
        </sp-field-label>
        <sp-number-field
            id="decimals"
            style="width: 200px"
            ...=${spreadProps(args)}
            @change=${args.onChange}
            @input=${args.onInput}
            .formatOptions=${{
    signDisplay: "exceptZero",
    minimumFractionDigits: 1,
    maximumFractionDigits: 2
  }}
        ></sp-number-field>
    `;
};
decimals.args = {
  value: 19.274
};
const germanDecimals = (args) => {
  return x`
        <sp-field-label for="decimals">
            Enter a number with visible decimals
        </sp-field-label>
        <sp-theme lang="de">
            <sp-number-field
                id="decimals"
                style="width: 200px"
                ...=${spreadProps(args)}
                @change=${args.onChange}
                .formatOptions=${{
    signDisplay: "exceptZero",
    minimumFractionDigits: 1,
    maximumFractionDigits: 2
  }}
            ></sp-number-field>
        </sp-theme>
    `;
};
germanDecimals.args = {
  value: 19.274
};
const percents = (args = {}) => {
  return x`
        <sp-field-label for="percents">Enter a percentage</sp-field-label>
        <sp-number-field
            id="percents"
            style="width: 200px"
            ...=${spreadProps(args)}
            @change=${args.onChange}
            .formatOptions=${{
    style: "percent",
    unitDisplay: "narrow"
  }}
        ></sp-number-field>
    `;
};
percents.args = {
  value: 0.372
};
const currency = (args = {}) => {
  return x`
        <sp-field-label for="currency">Enter a value in Euros</sp-field-label>
        <sp-number-field
            style="width: 200px"
            ...=${spreadProps(args)}
            @change=${args.onChange}
            .formatOptions=${{
    style: "currency",
    currency: "EUR",
    currencyDisplay: "code",
    currencySign: "accounting"
  }}
        ></sp-number-field>
    `;
};
currency.args = {
  value: 23.19
};
const units = (args) => {
  return x`
        <sp-field-label for="units">Enter a lengths in inches</sp-field-label>
        <sp-number-field
            id="units"
            style="width: 200px"
            ...=${spreadProps(args)}
            @change=${args.onChange}
            .formatOptions=${{
    style: "unit",
    unit: "inch",
    unitDisplay: "long"
  }}
        ></sp-number-field>
    `;
};
units.args = {
  value: 24
};
const pixels = (args) => {
  return x`
        <sp-field-label for="units">Enter a lengths in pixels</sp-field-label>
        <sp-number-field
            id="units"
            style="width: 200px"
            .formatOptions=${{
    style: "unit",
    unit: "px"
  }}
            ...=${spreadProps(args)}
            @change=${args.onChange}
        ></sp-number-field>
    `;
};
pixels.args = {
  value: 800
};
const minMax = (args) => x`
    <sp-field-label for="min-max">
        Enter a value between 0 and 255
    </sp-field-label>
    <sp-number-field
        id="min-max"
        style="width: 200px"
        ...=${spreadProps(args)}
        @change=${args.onChange}
    ></sp-number-field>
`;
minMax.args = {
  value: 4,
  min: 0,
  max: 255
};
const hideStepper = (args) => {
  return x`
        <sp-field-label for="hideStepper">
            Enter a number without the stepper UI
        </sp-field-label>
        <sp-number-field
            id="hideStepper"
            ...=${spreadProps(args)}
            @change=${args.onChange}
        ></sp-number-field>
    `;
};
hideStepper.args = {
  hideStepper: true,
  value: 67
};
const hideStepperQuiet = (args) => {
  return x`
        <sp-field-label for="hideStepper">
            Enter a number without the stepper UI
        </sp-field-label>
        <sp-number-field
            id="hideStepper"
            ...=${spreadProps(args)}
            @change=${args.onChange}
        ></sp-number-field>
    `;
};
hideStepperQuiet.args = {
  hideStepper: true,
  value: 67,
  quiet: true
};
const disabled = (args) => {
  return x`
        <sp-field-label for="disabled">
            This Number Field is disabled
        </sp-field-label>
        <sp-number-field
            id="disabled"
            ...=${spreadProps(args)}
            @change=${args.onChange}
        ></sp-number-field>
    `;
};
disabled.args = {
  disabled: true,
  value: 892
};
const readOnly = (args) => {
  return x`
        <sp-field-label for="readonly">
            You can only read the following value
        </sp-field-label>
        <sp-number-field
            id="readonly"
            ...=${spreadProps(args)}
            @change=${args.onChange}
        ></sp-number-field>
    `;
};
readOnly.args = {
  readonly: true,
  value: "15"
};
const ScrollingContainer = (args = {}) => {
  const onChange = args.onChange || (() => {
    return;
  });
  const onInput = args.onInput || (() => {
    return;
  });
  return x`
        <style>
            .scroller {
                height: 140px;
                width: 200px;
                overflow-y: scroll;
                padding: 10px;
                background: var(--spectrum-global-color-gray-50);
            }

            .scroller > div {
                height: 1000px;
            }
        </style>
        <div class="scroller">
            <div>
                <sp-field-label for="default">Enter a number</sp-field-label>
                <sp-number-field
                    id="default"
                    ...=${spreadProps(args)}
                    @input=${(event) => onInput(event.target.value)}
                    @change=${(event) => onChange(event.target.value)}
                    style="width: 150px"
                ></sp-number-field>
                <p>
                    This box should not scroll when the focus is inside the
                    number field and field value is changed by using the mouse
                    wheel.
                </p>
            </div>
        </div>
    `;
};
const __namedExportsOrder = ['Default', 'quiet', 'indeterminate', 'decimals', 'germanDecimals', 'percents', 'currency', 'units', 'pixels', 'minMax', 'hideStepper', 'hideStepperQuiet', 'disabled', 'readOnly', 'ScrollingContainer'];

export { Default, ScrollingContainer, __namedExportsOrder, currency, decimals, numberField_stories as default, disabled, germanDecimals, hideStepper, hideStepperQuiet, indeterminate, minMax, percents, pixels, quiet, readOnly, units };
import { s, i, S } from './lit-element-9354aa77.js';
import { x, D } from './lit-html-126adc72.js';
import { n as n$1, S as SpectrumElement } from './define-element-467f3dc4.js';
import { d as defaultRenderItem, a as defaultKeyFunction, v as virtualize, b as virtualizerRef } from './virtualize-5c844e71.js';
import { B as BaseLayout, d as dim1, a as dim2 } from './BaseLayout-0d02d0e6.js';
import { s as s$1 } from './resize-controller-55608b66.js';
import { R as RovingTabindexController } from './RovingTabindex-ca5f8b64.js';
import './sp-action-bar-a2cf4680.js';
import './sp-card-011f90c3.js';
import './sp-action-menu-a46530c4.js';
import './sp-menu-item-d1901258.js';
import './sp-tooltip-439ccb6f.js';
import './sp-checkbox-afeb5232.js';
import './sp-action-button-0f8bdf2f.js';
import './sp-action-group-1e1a03cc.js';
import './sp-icon-edit-686dea6d.js';
import './sp-icon-more-d39e1471.js';
import './directive-2bb7789e.js';
import './async-directive-e6357bae.js';
import './directive-helpers-aa9210f2.js';
import './repeat-c64faecc.js';
import './FocusGroup-0f0b800e.js';
import './sp-popover-adc6def6.js';
import './query-d0113d5a.js';
import './base-511c8c11.js';
import './sp-close-button-8c1265c1.js';
import './spectrum-icon-cross.css-8adfc305.js';
import './ButtonBase-4ebd5d24.js';
import './like-anchor-79c92c76.js';
import './if-defined-ae83b405.js';
import './focusable-df7b829e.js';
import './focus-visible-03398d98.js';
import './observe-slot-text-2a3e6366.js';
import './mutation-controller-81a30f7f.js';
import './query-assigned-nodes-6218f033.js';
import './sizedMixin-95b38e3e.js';
import './custom-tag-c228386e.js';
import './IconBase-fdbfb1c1.js';
import './sp-field-label-5c290246.js';
import './condition-attribute-with-id-62869347.js';
import './ElementResolution-b58a0825.js';
import './observe-slot-presence-ae37a9bc.js';
import './sp-asset-7bbcc679.js';
import './sp-quick-actions-049f111d.js';
import './sp-divider-5c291ed1.js';
import './divider.css-d14b5633.js';
import './heading-2d6e356c.js';
import './spectrum-lang.css-9eeeffe9.js';
import './Picker-7a452146.js';
import './spectrum-icon-chevron.css-d3283c08.js';
import './sp-icon-chevron100-d31cf739.js';
import './Chevron100-6f55b923.js';
import './sp-icon-alert-107ad358.js';
import './custom-tag-b5526d41.js';
import './sp-menu-a6b50bf6.js';
import './MatchMedia-0123f918.js';
import './class-map-14530ec2.js';
import './style-map-156e3c36.js';
import './state-879d3fe4.js';
import './spectrum-icon-checkmark.css-2fc91f81.js';
import './focusable-selectors-252ae36e.js';
import './CheckboxBase-d69c7aeb.js';
import './sp-icon-checkmark300-5f52d70f.js';
import './Checkmark300-0ba007ba.js';
import './sp-icon-dash300-87ebfff7.js';
import './Dash300-2d8f97df.js';
import './spectrum-icon-dash.css-7fdeaf11.js';
import './sp-icon-corner-triangle300-26ee005b.js';
import './CornerTriangle300-488cc3d0.js';
import './Edit-e6e8ae2a.js';
import './More-78935819.js';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class LitVirtualizer extends s {
    constructor() {
        super(...arguments);
        this.items = [];
        this.renderItem = defaultRenderItem;
        this.keyFunction = defaultKeyFunction;
        this.layout = {};
        this.scroller = false;
    }
    createRenderRoot() {
        return this;
    }
    render() {
        const { items, renderItem, keyFunction, layout, scroller } = this;
        return x `${virtualize({
            items,
            renderItem,
            keyFunction,
            layout,
            scroller,
        })}`;
    }
    element(index) {
        var _a;
        return (_a = this[virtualizerRef]) === null || _a === void 0 ? void 0 : _a.element(index);
    }
    get layoutComplete() {
        var _a;
        return (_a = this[virtualizerRef]) === null || _a === void 0 ? void 0 : _a.layoutComplete;
    }
    /**
     * This scrollToIndex() shim is here to provide backwards compatibility with other 0.x versions of
     * lit-virtualizer. It is deprecated and will likely be removed in the 1.0.0 release.
     */
    scrollToIndex(index, position = 'start') {
        var _a;
        (_a = this.element(index)) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ block: position });
    }
}
__decorate([
    n$1({ attribute: false })
], LitVirtualizer.prototype, "items", void 0);
__decorate([
    n$1()
], LitVirtualizer.prototype, "renderItem", void 0);
__decorate([
    n$1()
], LitVirtualizer.prototype, "keyFunction", void 0);
__decorate([
    n$1({ attribute: false })
], LitVirtualizer.prototype, "layout", void 0);
__decorate([
    n$1({ reflect: true, type: Boolean })
], LitVirtualizer.prototype, "scroller", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
// function numberToPixelSize(n: number): PixelSize {
//     return n === 0 ? '0' : `${n}px`;
// }
function paddingValueToNumber(v) {
    if (v === 'match-gap') {
        return Infinity;
    }
    return parseInt(v);
}
function gapValueToNumber(v) {
    if (v === 'auto') {
        return Infinity;
    }
    return parseInt(v);
}
function gap1(direction) {
    return direction === 'horizontal' ? 'column' : 'row';
}
function gap2(direction) {
    return direction === 'horizontal' ? 'row' : 'column';
}
function padding1(direction) {
    return direction === 'horizontal' ? ['left', 'right'] : ['top', 'bottom'];
}
function padding2(direction) {
    return direction === 'horizontal' ? ['top', 'bottom'] : ['left', 'right'];
}
class SizeGapPaddingBaseLayout extends BaseLayout {
    constructor() {
        super(...arguments);
        this._itemSize = {};
        this._gaps = {};
        this._padding = {};
    }
    _getDefaultConfig() {
        return Object.assign({}, super._getDefaultConfig(), {
            itemSize: { width: '300px', height: '300px' },
            gap: '8px',
            padding: 'match-gap',
        });
    }
    // Temp, to support current flexWrap implementation
    get _gap() {
        return this._gaps.row;
    }
    // Temp, to support current flexWrap implementation
    get _idealSize() {
        return this._itemSize[dim1(this.direction)];
    }
    get _idealSize1() {
        return this._itemSize[dim1(this.direction)];
    }
    get _idealSize2() {
        return this._itemSize[dim2(this.direction)];
    }
    get _gap1() {
        return this._gaps[gap1(this.direction)];
    }
    get _gap2() {
        return this._gaps[gap2(this.direction)];
    }
    get _padding1() {
        const padding = this._padding;
        const [start, end] = padding1(this.direction);
        return [padding[start], padding[end]];
    }
    get _padding2() {
        const padding = this._padding;
        const [start, end] = padding2(this.direction);
        return [padding[start], padding[end]];
    }
    set itemSize(dims) {
        const size = this._itemSize;
        if (typeof dims === 'string') {
            dims = {
                width: dims,
                height: dims,
            };
        }
        const width = parseInt(dims.width);
        const height = parseInt(dims.height);
        if (width !== size.width) {
            size.width = width;
            this._triggerReflow();
        }
        if (height !== size.height) {
            size.height = height;
            this._triggerReflow();
        }
    }
    set gap(spec) {
        this._setGap(spec);
    }
    // This setter is overridden in specific layouts to narrow the accepted types
    _setGap(spec) {
        const values = spec.split(' ').map((v) => gapValueToNumber(v));
        const gaps = this._gaps;
        if (values[0] !== gaps.row) {
            gaps.row = values[0];
            this._triggerReflow();
        }
        if (values[1] === undefined) {
            if (values[0] !== gaps.column) {
                gaps.column = values[0];
                this._triggerReflow();
            }
        }
        else {
            if (values[1] !== gaps.column) {
                gaps.column = values[1];
                this._triggerReflow();
            }
        }
    }
    set padding(spec) {
        const padding = this._padding;
        const values = spec
            .split(' ')
            .map((v) => paddingValueToNumber(v));
        if (values.length === 1) {
            padding.top = padding.right = padding.bottom = padding.left = values[0];
            this._triggerReflow();
        }
        else if (values.length === 2) {
            padding.top = padding.bottom = values[0];
            padding.right = padding.left = values[1];
            this._triggerReflow();
        }
        else if (values.length === 3) {
            padding.top = values[0];
            padding.right = padding.left = values[1];
            padding.bottom = values[2];
            this._triggerReflow();
        }
        else if (values.length === 4) {
            ['top', 'right', 'bottom', 'left'].forEach((side, idx) => (padding[side] = values[idx]));
            this._triggerReflow();
        }
    }
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
///
class GridBaseLayout extends SizeGapPaddingBaseLayout {
    constructor() {
        super(...arguments);
        this._metrics = null;
        this.flex = null;
        this.justify = null;
    }
    _getDefaultConfig() {
        return Object.assign({}, super._getDefaultConfig(), {
            flex: false,
            justify: 'start',
        });
    }
    set gap(spec) {
        super._setGap(spec);
    }
    _updateLayout() {
        const justify = this.justify;
        const [padding1Start, padding1End] = this._padding1;
        const [padding2Start, padding2End] = this._padding2;
        // TODO (graynorton): Omit these checks in production mode
        ['_gap1', '_gap2'].forEach((gap) => {
            const gapValue = this[gap];
            if (gapValue === Infinity &&
                !['space-between', 'space-around', 'space-evenly'].includes(justify)) {
                throw new Error(`grid layout: gap can only be set to 'auto' when justify is set to 'space-between', 'space-around' or 'space-evenly'`);
            }
            if (gapValue === Infinity && gap === '_gap2') {
                throw new Error(`grid layout: ${gap2(this.direction)}-gap cannot be set to 'auto' when direction is set to ${this.direction}`);
            }
        });
        const usePaddingAndGap2 = this.flex || ['start', 'center', 'end'].includes(justify);
        const metrics = {
            rolumns: -1,
            itemSize1: -1,
            itemSize2: -1,
            // Infinity represents 'auto', so we set an invalid placeholder until we can calculate
            gap1: this._gap1 === Infinity ? -1 : this._gap1,
            gap2: usePaddingAndGap2 ? this._gap2 : 0,
            // Infinity represents 'match-gap', so we set padding to match gap
            padding1: {
                start: padding1Start === Infinity ? this._gap1 : padding1Start,
                end: padding1End === Infinity ? this._gap1 : padding1End,
            },
            padding2: usePaddingAndGap2
                ? {
                    start: padding2Start === Infinity ? this._gap2 : padding2Start,
                    end: padding2End === Infinity ? this._gap2 : padding2End,
                }
                : {
                    start: 0,
                    end: 0,
                },
            positions: [],
        };
        // 1. Calculate available space, taking padding into account
        const availableSpace = this._viewDim2 - metrics.padding2.start - metrics.padding2.end;
        if (availableSpace <= 0) {
            // If we have no space, we won't render any rolumns
            metrics.rolumns = 0;
        }
        else {
            // 2. Calculate how many ideally sized "rolumns" (including gaps) fit in the available space
            const gapSize = usePaddingAndGap2 ? metrics.gap2 : 0;
            let rolumns = 0;
            let spaceTaken = 0;
            if (availableSpace >= this._idealSize2) {
                rolumns =
                    Math.floor((availableSpace - this._idealSize2) / (this._idealSize2 + gapSize)) + 1;
                spaceTaken = rolumns * this._idealSize2 + (rolumns - 1) * gapSize;
            }
            // 3. If we're flexing items to fill the available space exactly, decide whether to add
            // a rolumn and reduce item size, or keep the number of rolumns and increase item size
            if (this.flex) {
                // If we have at least half the space we need for another rolumn, go ahead and add one
                if ((availableSpace - spaceTaken) / (this._idealSize2 + gapSize) >=
                    0.5) {
                    rolumns = rolumns + 1;
                }
                metrics.rolumns = rolumns;
                // Calculate the flexed item size
                metrics.itemSize2 = Math.round((availableSpace - gapSize * (rolumns - 1)) / rolumns);
                // Calculate item size in the other dimension, preserving area (the default), aspect ratio or ideal size in that dimension as specified
                const preserve = this.flex === true ? 'area' : this.flex.preserve;
                switch (preserve) {
                    case 'aspect-ratio':
                        metrics.itemSize1 = Math.round((this._idealSize1 / this._idealSize2) * metrics.itemSize2);
                        break;
                    case dim1(this.direction):
                        metrics.itemSize1 = Math.round(this._idealSize1);
                        break;
                    case 'area':
                    default:
                        metrics.itemSize1 = Math.round((this._idealSize1 * this._idealSize2) / metrics.itemSize2);
                }
            }
            else {
                // We're not flexing, so use the specified sizes unmodified
                metrics.itemSize1 = this._idealSize1;
                metrics.itemSize2 = this._idealSize2;
                metrics.rolumns = rolumns;
            }
            // 4. Calculate the position for each item in a template rolumn
            let pos;
            if (usePaddingAndGap2) {
                const spaceTaken = metrics.rolumns * metrics.itemSize2 +
                    (metrics.rolumns - 1) * metrics.gap2;
                pos =
                    this.flex || justify === 'start'
                        ? metrics.padding2.start
                        : justify === 'end'
                            ? this._viewDim2 - metrics.padding2.end - spaceTaken
                            : Math.round(this._viewDim2 / 2 - spaceTaken / 2);
            }
            else {
                const spaceToDivide = availableSpace - metrics.rolumns * metrics.itemSize2;
                if (justify === 'space-between') {
                    metrics.gap2 = Math.round(spaceToDivide / (metrics.rolumns - 1));
                    pos = 0;
                }
                else if (justify === 'space-around') {
                    metrics.gap2 = Math.round(spaceToDivide / metrics.rolumns);
                    pos = Math.round(metrics.gap2 / 2);
                }
                else {
                    // justify == 'space-evenly'
                    metrics.gap2 = Math.round(spaceToDivide / (metrics.rolumns + 1));
                    pos = metrics.gap2;
                }
                // If primary-axis gap was set to 'auto', provide the value now
                // (and set 'match-gap' padding values transitively)
                if (this._gap1 === Infinity) {
                    metrics.gap1 = metrics.gap2;
                    if (padding1Start === Infinity) {
                        metrics.padding1.start = pos;
                    }
                    if (padding1End === Infinity) {
                        metrics.padding1.end = pos;
                    }
                }
            }
            for (let i = 0; i < metrics.rolumns; i++) {
                metrics.positions.push(pos);
                pos += metrics.itemSize2 + metrics.gap2;
            }
        }
        this._metrics = metrics;
    }
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const grid = (config) => Object.assign({
    type: GridLayout,
}, config);
class GridLayout extends GridBaseLayout {
    /**
     * Returns the average size (precise or estimated) of an item in the scrolling direction,
     * including any surrounding space.
     */
    get _delta() {
        return this._metrics.itemSize1 + this._metrics.gap1;
    }
    _getItemSize(_idx) {
        return {
            [this._sizeDim]: this._metrics.itemSize1,
            [this._secondarySizeDim]: this._metrics.itemSize2,
        };
    }
    _getActiveItems() {
        const metrics = this._metrics;
        const { rolumns } = metrics;
        if (rolumns === 0) {
            this._first = -1;
            this._last = -1;
            this._physicalMin = 0;
            this._physicalMax = 0;
        }
        else {
            const { padding1 } = metrics;
            const min = Math.max(0, this._scrollPosition - this._overhang);
            const max = Math.min(this._scrollSize, this._scrollPosition + this._viewDim1 + this._overhang);
            const firstCow = Math.max(0, Math.floor((min - padding1.start) / this._delta));
            const lastCow = Math.max(0, Math.ceil((max - padding1.start) / this._delta));
            this._first = firstCow * rolumns;
            this._last = Math.min(lastCow * rolumns - 1, this.items.length - 1);
            this._physicalMin = padding1.start + this._delta * firstCow;
            this._physicalMax = padding1.start + this._delta * lastCow;
        }
    }
    _getItemPosition(idx) {
        const { rolumns, padding1, positions, itemSize1, itemSize2 } = this._metrics;
        return {
            [this._positionDim]: padding1.start + Math.floor(idx / rolumns) * this._delta,
            [this._secondaryPositionDim]: positions[idx % rolumns],
            [dim1(this.direction)]: itemSize1,
            [dim2(this.direction)]: itemSize2,
        };
    }
    _updateScrollSize() {
        const { rolumns, gap1, padding1, itemSize1 } = this._metrics;
        let size = 1;
        if (rolumns > 0) {
            const cows = Math.ceil(this.items.length / rolumns);
            size =
                padding1.start + cows * itemSize1 + (cows - 1) * gap1 + padding1.end;
        }
        this._scrollSize = size;
    }
}

const e=i`
:host{contain:strict;display:block;pointer-events:none;position:relative}::slotted(*){pointer-events:all}
`;var b = e;

class GridController{constructor(t,{elements:e,itemSize:i,gap:n,padding:s}){this._first=0;this._last=0;this.handleFocusin=t=>{const e=s=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{s();});});},i=()=>this.host.scrollToIndex(0),n=()=>{this.focus(),this.host.tabIndex=-1;};t.target===this.host&&(this._first>0?e(()=>{i(),e(n);}):e(n));};this.handleFocusout=t=>{(!t.relatedTarget||!this.host.contains(t.relatedTarget))&&(this.host.tabIndex=0);};this.handleRangeChanged=t=>{this.rovingTabindexController.clearElementCache(t.first);};this.handleVisibleChanged=t=>{this._first=t.first,this._last=t.last;};this.host=t,this.host.addController(this),this.applyLayout(i,n,s),this.resizeController=new s$1(this.host,{callback:o=>{o.forEach(r=>{this.measureDirectionLength(r.contentRect);});}}),this.rovingTabindexController=new RovingTabindexController(this.host,{direction:"grid",elements:e,focusInIndex:()=>this.host.getRootNode().activeElement===this.host?0:-1});}get itemSize(){return this._itemSize()}_itemSize(){return {width:100,height:100}}get gap(){return this._gap()}_gap(){}get padding(){return this._padding()}_padding(){}focus(t){this.rovingTabindexController.focus(t);}applyLayout(t,e,i){typeof t=="object"?this._itemSize=()=>t:typeof t=="function"&&typeof t()!="undefined"&&(this._itemSize=t),typeof e=="string"?this._gap=()=>e:typeof e=="function"&&(this._gap=e),typeof i=="string"?this._padding=()=>i:typeof i=="function"&&(this._padding=i);}update({elements:t,itemSize:e,gap:i,padding:n}){this.rovingTabindexController.update({elements:t}),this.applyLayout(e,i,n);const s=this.host.getBoundingClientRect();this.measureDirectionLength(s);}measureDirectionLength(t){const e=this.gap?parseFloat(this.gap):0,i=this.padding?parseFloat(this.padding):0,n=t.width-i*2,s=Math.floor((n-this.itemSize.width)/(e+this.itemSize.width))+1;this.rovingTabindexController.directionLength=Math.floor(s);}hostConnected(){this.host.addEventListener("rangeChanged",this.handleRangeChanged),this.host.addEventListener("visibilityChanged",this.handleVisibleChanged),this.host.addEventListener("focusin",this.handleFocusin),this.host.addEventListener("focusout",this.handleFocusout),this.host.tabIndex=0,this.host.style.setProperty("outline","none","important");}hostDisconnected(){this.host.removeEventListener("rangeChanged",this.handleRangeChanged),this.host.removeEventListener("visibilityChanged",this.handleVisibleChanged),this.host.removeEventListener("focusin",this.handleFocusin),this.host.removeEventListener("focusout",this.handleFocusout);}}

var l=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var n=(d,a,e,i)=>{for(var t=i>1?void 0:i?p(a,e):a,r=d.length-1,s;r>=0;r--)(s=d[r])&&(t=(i?s(a,e,t):s(t))||t);return i&&t&&l(a,e,t),t};class Grid extends LitVirtualizer{constructor(){super(...arguments);this.__gridPart=void 0;this.gap="0";this.items=[];this.itemSize={width:200,height:200};this.selected=[];this.gridController=new GridController(this,{elements:()=>[],itemSize:()=>this.itemSize,gap:()=>this.gap,padding:()=>this.padding||this.gap});}static get styles(){return [b]}handleChange(e){const i=e.target,t=this.items[parseFloat(i.getAttribute("key")||"")],r=[...this.selected];if(!r.includes(t))r.push(t);else {const s=r.indexOf(t);s>-1&&r.splice(s,1);}this.selected=r;}createRenderRoot(){var i;const e=(i=this.shadowRoot)!=null?i:this.attachShadow(this.constructor.shadowRootOptions);return S(e,this.constructor.elementStyles),e}render(){return x`
            <slot></slot>
        `}update(e){if((e.has("itemSize")||e.has("gap")||e.has("padding")||e.has("focusableSelector"))&&(this.updateComplete.then(()=>{this.gridController.update({elements:()=>[...this.querySelectorAll(this.focusableSelector)],itemSize:()=>this.itemSize,gap:()=>this.gap,padding:()=>this.padding||this.gap});}),this.layout=grid({itemSize:{width:`${this.itemSize.width}px`,height:`${this.itemSize.height}px`},gap:this.gap,padding:this.padding||this.gap})),e.has("renderItem")){const i=this.renderItem;this.renderItem=(t,r)=>{const s=this.selected.includes(t);return i(t,r,s)};}this.isConnected&&(this.__gridPart=D(super.render(),this)),super.update(e);}connectedCallback(){var e;super.connectedCallback(),(e=this.__gridPart)==null||e.setConnected(!0),this.addEventListener("change",this.handleChange,{capture:!0});}disconnectedCallback(){var e;this.removeEventListener("change",this.handleChange,{capture:!0}),(e=this.__gridPart)==null||e.setConnected(!1),super.disconnectedCallback();}}n([n$1({type:String})],Grid.prototype,"focusableSelector",2),n([n$1({type:String})],Grid.prototype,"gap",2),n([n$1({type:String})],Grid.prototype,"padding",2),n([n$1({type:Array})],Grid.prototype,"items",2),n([n$1({type:Object})],Grid.prototype,"itemSize",2),n([n$1({type:Array})],Grid.prototype,"selected",2);

customElements.define("sp-grid",Grid);

var grid_stories = {
  title: "Grid",
  component: "sp-grid"
};
function generateItems(count) {
  const items = [];
  while (count) {
    count -= 1;
    items.unshift({ id: count });
  }
  return items;
}
const renderItem = (item, index, selected) => {
  return x`
        <sp-card
            toggles
            variant="quiet"
            heading="Card Heading ${item.id}"
            subheading="JPG Photo"
            style="contain: strict; padding: 1px;"
            value="card-${item.id}"
            .selected=${selected}
            key=${index}
            draggable="true"
        >
            <img
                alt=""
                slot="preview"
                src="https://picsum.photos/id/${item.id}/200/300"
                decoding="async"
            />
            <div slot="description">10/15/18</div>
            <div slot="footer">Footer</div>
            <sp-action-menu
                label="File actions"
                slot="actions"
                placement="bottom-end"
                quiet
                tabindex="-1"
            >
                <sp-tooltip slot="tooltip" self-managed placement="top">
                    Do stuff
                </sp-tooltip>
                <sp-menu-item>Deselect</sp-menu-item>
                <sp-menu-item>Select Inverse</sp-menu-item>
                <sp-menu-item>Feather...</sp-menu-item>
                <sp-menu-item>Select and Mask...</sp-menu-item>
                <sp-menu-divider></sp-menu-divider>
                <sp-menu-item>Save Selection</sp-menu-item>
                <sp-menu-item disabled>Make Work Path</sp-menu-item>
            </sp-action-menu>
        </sp-card>
    `;
};
const handleChange = (event) => {
  const actionbar = document.querySelector("sp-action-bar");
  const selected = document.querySelector(".selected");
  const ids = document.querySelector(".ids");
  actionbar.open = !!event.currentTarget.selected.length;
  actionbar.style.setProperty(
    "display",
    !!event.currentTarget.selected.length ? "flex" : "none"
  );
  selected.textContent = "" + event.currentTarget.selected.length;
  ids.textContent = "" + event.currentTarget.selected.map((selection) => selection.id).join(", ");
};
const handleActionBarChange = (event) => {
  event.preventDefault();
  const grid = document.querySelector("sp-grid");
  const actionbar = document.querySelector("sp-action-bar");
  actionbar.open = false;
  grid.selected = [];
};
const Default = () => {
  const items = generateItems(1e3);
  return x`
        <h1>Random before content that is focusable</h1>
        <input id="first-input" />
        <sp-grid
            @change=${handleChange}
            .items=${items}
            .focusableSelector=${"sp-card"}
            .renderItem=${renderItem}
        ></sp-grid>
        <sp-action-bar variant="fixed">
            <sp-checkbox @click=${handleActionBarChange} checked>
                <span class="selected"></span>
                Selected
                <span class="ids"></span>
            </sp-checkbox>
            <sp-action-group quiet>
                <sp-action-button>
                    <sp-icon-edit slot="icon" label="Edit"></sp-icon-edit>
                </sp-action-button>
                <sp-action-button>
                    <sp-icon-more slot="icon" label="More"></sp-icon-more>
                </sp-action-button>
            </sp-action-group>
        </sp-action-bar>
        <h2>Random after content that is focusable</h2>
        <input id="last-input" />
    `;
};
Default.swc_vrt = {
  skip: true
};
const sized = ({ gap, padding } = { gap: 10, padding: 10 }) => {
  const items = generateItems(1e3);
  return x`
        <h1>Random before content that is focusable</h1>
        <input id="first-input" />
        <sp-grid
            @change=${handleChange}
            .items=${items}
            .focusableSelector=${"sp-card"}
            .renderItem=${renderItem}
            .itemSize=${{
    width: 200,
    height: 300
  }}
            .gap=${`${gap}px`}
            .padding=${`${padding}px`}
        ></sp-grid>
        <sp-action-bar variant="fixed" style="display: none">
            <sp-checkbox @click=${handleActionBarChange} checked>
                <span class="selected"></span>
                Selected
                <span class="ids"></span>
            </sp-checkbox>
            <sp-action-group quiet>
                <sp-action-button>
                    <sp-icon-edit slot="icon" label="Edit"></sp-icon-edit>
                </sp-action-button>
                <sp-action-button>
                    <sp-icon-more slot="icon" label="More"></sp-icon-more>
                </sp-action-button>
            </sp-action-group>
        </sp-action-bar>
        <h2>Random after content that is focusable</h2>
        <input id="last-input" />
    `;
};
sized.args = {
  gap: 10,
  padding: 10
};
sized.argTypes = {
  gap: {
    name: "gap",
    type: { name: "number", required: false },
    description: "Spacing between items.",
    table: {
      type: { summary: "number" }
    },
    control: {
      type: "number"
    }
  },
  padding: {
    name: "padding",
    type: { name: "number", required: false },
    description: "Spacing around all items.",
    table: {
      type: { summary: "number" }
    },
    control: {
      type: "number"
    }
  }
};
sized.swc_vrt = {
  skip: true
};
class MyParent extends SpectrumElement {
  render() {
    return x`
            <div class="child"><slot></slot></div>
        `;
  }
}
MyParent.styles = [
  i`
            :host {
                display: block;
                height: 100vh;
                overflow: hidden;
            }

            .child {
                height: 100%;
                overflow: scroll;
            }
        `
];
customElements.define("my-parent", MyParent);
const scrollParentInAssignedSlot = () => {
  const items = generateItems(1e3);
  return x`
        <my-parent>
            <sp-grid
                .items=${items}
                .focusableSelector=${"sp-card"}
                .renderItem=${renderItem}
            ></sp-grid>
        </my-parent>
    `;
};
scrollParentInAssignedSlot.swc_vrt = {
  skip: true
};
const __namedExportsOrder = ['Default', 'sized', 'scrollParentInAssignedSlot'];

export { Default, __namedExportsOrder, grid_stories as default, scrollParentInAssignedSlot, sized };
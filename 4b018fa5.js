import{n as e}from"./3b42bd6e.js";const t=({finisher:e,descriptor:t})=>(s,i)=>{var r;if(void 0===i){const i=null!==(r=s.originalKey)&&void 0!==r?r:s.key,n=null!=t?{kind:"method",placement:"prototype",key:i,descriptor:t(s.key)}:{...s,key:i};return null!=e&&(n.finisher=function(t){e(t,i)}),n}{const r=s.constructor;void 0!==t&&Object.defineProperty(s,i,t(i)),null==e||e(r,i)}};var s;const i=null!=(null===(s=window.HTMLSlotElement)||void 0===s?void 0:s.prototype.assignedElements)?(e,t)=>e.assignedElements(t):(e,t)=>e.assignedNodes(t).filter((e=>e.nodeType===Node.ELEMENT_NODE));function r(e){const{slot:s,selector:r}=null!=e?e:{};return t({descriptor:t=>({get(){var t;const n="slot"+(s?`[name=${s}]`:":not([name])"),o=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(n),l=null!=o?i(o,e):[];return r?l.filter((e=>e.matches(r))):l},enumerable:!0,configurable:!0})})}var n=Object.defineProperty,o=Object.getOwnPropertyDescriptor;function l(t,{validSizes:s=["s","m","l","xl"],noDefaultSize:i,defaultSize:r="m"}={}){class l extends t{constructor(){super(...arguments),this._size=r}get size(){return this._size||r}set size(e){const t=i?null:r,n=e&&e.toLocaleLowerCase(),o=s.includes(n)?n:t;if(o&&this.setAttribute("size",o),this._size===o)return;const l=this._size;this._size=o,this.requestUpdate("size",l)}update(e){!this.hasAttribute("size")&&!i&&this.setAttribute("size",this.size),super.update(e)}}return((e,t,s,i)=>{for(var r,l=i>1?void 0:i?o(t,s):t,u=e.length-1;u>=0;u--)(r=e[u])&&(l=(i?r(t,s,l):r(l))||l);i&&l&&n(t,s,l)})([e({type:String,reflect:!0})],l.prototype,"size",1),l}export{l as S,r as l,t as o};
//# sourceMappingURL=4b018fa5.js.map
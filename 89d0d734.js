import{S as e,$ as t,_ as s,e as i}from"./31a32b8d.js";import"./976c71b2.js";import"./892f9036.js";import{a}from"./b5f34f36.js";import"./d9c9b940.js";import{n as o}from"./5dba1fa8.js";import{r as n}from"./e50c5e8d.js";import{l as r}from"./48f82265.js";import"./78f07ab8.js";import"./21d6199b.js";import"./def45cc3.js";let c=class extends e{render(){return t`<slot @slotchange="${this.handleSlotchange}"></slot>`}firstUpdated(){this._delayedReady=new Promise((e=>this._resolveDelayedReady=e))}async getUpdateComplete(){const e=await super.getUpdateComplete();return await this._delayedReady,e}handleSlotchange({target:e}){e.assignedElements({flatten:!0}).length&&requestAnimationFrame((()=>{this._resolveDelayedReady()}))}};c=s([o("delayed-ready")],c);let d=class extends e{constructor(){super(),this.name="ui",this.package="",this.size="m",this.search="",this.icons=[],this.iconset=[],this.iconset=[],this.handleIconSetAdded=this.handleIconSetAdded.bind(this)}connectedCallback(){super.connectedCallback(),window.addEventListener("sp-iconset-added",this.handleIconSetAdded)}disconnectedCallback(){window.removeEventListener("sp-iconset-added",this.handleIconSetAdded),super.disconnectedCallback()}handleIconSetAdded(e){const{iconset:t}=e.detail;this.iconset=t.getIconList(),this.requestUpdate()}static get styles(){return[...a,n`:host{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:20px;align-items:flex-start}.icon{display:flex;flex-direction:column;align-items:center;text-align:center;border-radius:var(--spectrum-alias-focus-ring-gap,var(--spectrum-global-dimension-static-size-25))}:host([package]) .icon{cursor:pointer}sp-icon{margin-bottom:10px}.search{grid-column-start:1;grid-column-end:-1}.icon[tabindex]:focus{outline:0}.icon[tabindex]:focus-visible{outline:var(--spectrum-alias-focus-ring-size) solid var(--spectrum-alias-focus-ring-color);outline-offset:calc(var(--spectrum-alias-focus-ring-gap,var(--spectrum-global-dimension-static-size-25)) * 2)}`]}handleKeydown(e,t){const{code:s}=e;"Enter"!==s&&"NumpadEnter"!==s&&"Space"!==s||(e.preventDefault(),this.shouldCopy(t))}shouldCopy(e){if(!this.package)return;const t=e.slice(1,e.length-1),s=`import '@spectrum-web-components/${this.package}/icons/${t}.js';`;this.dispatchEvent(new CustomEvent("copy-text",{bubbles:!0,composed:!0,detail:{message:"Import statement copied to clipboard!",text:s}}))}updateSearch(e){e.stopPropagation(),this.search=e.target.value}submit(e){e.stopPropagation(),this.updateSearch(e)}renderSearch(){const e=this.search?this.icons.filter((e=>-1!==e.name.toLowerCase().search(this.search))):this.icons;return t`<div class="search" part="search"><sp-field-label for="search">Spectrum icons:</sp-field-label><sp-search id="search" @keydown="${this.updateSearch}" @input="${this.updateSearch}" @submit="${this.submit}" .value="${this.search}" label="Search for icons" autocomplete="off"><sp-help-text slot="help-text">Showing ${e.length} of ${this.icons.length} available icons.</sp-help-text></sp-search></div>${e.map((e=>t`<bdo class="icon" part="icon" dir="ltr" class="icon" @click="${()=>this.shouldCopy(e.tag)}" @keydown="${t=>this.handleKeydown(t,e.tag)}" tabindex="${r(this.package?"0":void 0)}">${e.story(this.size)} ${e.tag}</bdo>`))}`}render(){return t`${this.icons.length?this.renderSearch():t`<slot></slot>`} ${this.iconset.map((e=>t`<bdo class="icon" dir="ltr"><sp-icon size="xl" name="${`${this.name}:${e}`}"></sp-icon>${e}</bdo>`))}`}};s([i()],d.prototype,"name",void 0),s([i()],d.prototype,"package",void 0),s([i()],d.prototype,"size",void 0),s([i()],d.prototype,"search",void 0),s([i({attribute:!1})],d.prototype,"icons",void 0),d=s([o("icons-demo")],d);export{c as DelayedReady,d as IconsDemo};
//# sourceMappingURL=89d0d734.js.map
import{i as s,a as e}from"./swc.BZvYmb6E.js";import"./swc.CychZn95.js";import"./swc.B8r9uF0v.js";import"./swc.BV6NNXzj.js";import"./swc.BAj6rPam.js";import{i as t}from"./swc.DEkuF1Ug.js";import{n as o}from"./swc.DRmmzwO0.js";import{e as r}from"./swc.Bvb59PuY.js";import{s as i,x as a}from"./swc.BY-CAm7w.js";import{l as n}from"./swc.Cy5h3EZW.js";import"./swc.JlveB6nj.js";import"./swc.Cbv-5iUn.js";import"./swc.BlIgIdkB.js";import"./swc.BSE6YbTY.js";import"./swc.C-4VxDS_.js";import"./swc.CBXJ4PuA.js";import"./swc.BpCB44lV.js";import"./swc.8Y9xgsp7.js";import"./swc.CG3TZKt7.js";import"./swc.D6fgiH-J.js";import"./swc.COJW2L_K.js";import"./swc.M-g6yi4B.js";import"./swc.C9__KbQF.js";import"./swc.CMF6qqsk.js";import"./swc.Bg1tgEtU.js";import"./swc.B5JkawKG.js";import"./swc.CJygKO7k.js";import"./swc.Q8ziPutG.js";import"./swc.Cfcg5U_Z.js";import"./swc.02id7ZvS.js";import"./swc.DQWNnjpB.js";import"./swc.BkNr85_9.js";import"./swc.Dl65Lk5K.js";import"./swc.BCATL3MM.js";import"./swc.DNLErE07.js";import"./swc.B0VF_aKV.js";import"./swc.Dgy5AQn2.js";import"./swc.D-fnmuo-.js";import"./swc.ChFnD8LO.js";import"./swc.C7o7z3B6.js";import"./swc.DIWQB64e.js";var c=s`:host{display:block}sp-search{--spectrum-alias-single-line-width:100%;width:100%}#search-results-menu{flex-direction:column;width:250px;max-height:calc(100vh - 200px);display:flex}sp-illustrated-message{color:var(--spectrum-gray-800);flex:1;margin-bottom:2em}`,p=s=>s.stopPropagation(),l=class extends i{constructor(){super(...arguments),this.open=!1,this.results=[]}static get styles(){return[c]}focus(){this.searchField.focus()}handleSearchInput(s){if(s.target){const{value:e}=s.target;this.updateSearchResults(e)}}handleKeydown(s){const{code:e}=s,t="ArrowDown"===e||"ArrowUp"===e;t&&(s.preventDefault(),this.focusResults({shouldFocusResultsList:t}))}async focusResults({shouldFocusResultsList:s}){s?(this.menuEl.addEventListener("focus",(()=>{this.menuEl.childItems[this.menuEl.focusedItemIndex].focused=!0}),{once:!0}),this.menuEl.focus()):this.popoverEl.focus()}openPopover(){this.open=!0}closePopover(){this.open=!1}handleClosed(){this.closeOverlay&&delete this.closeOverlay}handleSubmit(s){s.preventDefault(),this.results.length<0||this.menuEl.focus()}async updateSearchResults(s){if(s.length<3)return this.closePopover(),!1;const e=`${s.trim()}*`,t=await import("./swc.DqGYuBYh.js").then((({search:s})=>s));return this.results=await t(e),this.openPopover(),this.results.length>0}handleMenuFocusout(s){this.menuEl.contains(s.relatedTarget)||this.menuEl.childItems.forEach((s=>{s.focused=!1}))}renderResults(){return this.results.length>0?a`<sp-menu tabindex="-1" @focusout="${this.handleMenuFocusout}">${this.results.map((s=>a`<sp-menu-group><span slot="header">${s.name}</span> ${s.results.map((s=>a`<sp-menu-item href="${s.url}">${s.label}</sp-menu-item>`))}</sp-menu-group>`))}</sp-menu>`:a`<sp-illustrated-message heading="No results found" description="Try another search term."></sp-illustrated-message>`}render(){return a`<div id="search-container"><sp-search id="search" @focusin="${this.handleSearchInput}" @input="${this.handleSearchInput}" @change="${this.handleSearchInput}" @keydown="${this.handleKeydown}" @click="${p}" @submit="${this.handleSubmit}" autocomplete="off"></sp-search><sp-overlay ?open="${this.open}" placement="bottom-start" receives-focus="false" trigger="search" type="auto"><sp-popover id="search-results-menu" @sp-overlay-closed="${this.handleClosed}">${this.renderResults()}</sp-popover></sp-overlay></div>`}firstUpdated(s){super.firstUpdated(s),this.addEventListener("blur",this.closePopover)}};e([t("sp-popover")],l.prototype,"popoverEl",2),e([o({type:Boolean})],l.prototype,"open",2),e([t("sp-menu")],l.prototype,"menuEl",2),e([t("sp-search")],l.prototype,"searchField",2),e([o({type:Array})],l.prototype,"results",2),l=e([r("docs-search")],l);var d=s`::slotted(*){width:100%}aside{background-color:var(--spectrum-gray-75);flex-direction:column;height:100vh;max-height:100vh;display:flex;position:sticky;top:0;left:0;overflow:auto}@media screen and (width<=960px){aside{transition:transform var(--spectrum-dialog-confirm-background-entry-animation-duration,var(--spectrum-animation-duration-600))cubic-bezier(0,0,.4,1),visibility 0s linear var(--spectrum-animation-duration-600);z-index:10;visibility:hidden;min-height:100vh;position:fixed;top:0;left:0;transform:translate(-100%)}[dir=rtl]+aside{visibility:hidden;left:auto;right:0;transform:translate(100%)}:host([open]) aside{visibility:visible;transition-delay:0s,0s;transform:translate(0)}.scrim{z-index:10;touch-action:none}}#nav-header a,#nav-header a:visited{color:var(--spectrum-gray-800);text-decoration:none}.navigation{width:calc(var(--swc-scale-factor)*240px - 48px);flex:1;padding:0 24px 24px;overflow:hidden auto}docs-spectrum-logo{width:36px;height:32px;padding-top:7px;display:block}:host([dir=ltr]) docs-spectrum-logo{margin-right:16px}:host([dir=rtl]) docs-spectrum-logo{margin-left:16px}#logo-container{border-radius:4px;outline:none}docs-search{width:calc(var(--swc-scale-factor)*192px);padding:0 calc(var(--swc-scale-factor)*24px)calc(var(--swc-scale-factor)*24px)calc(var(--swc-scale-factor)*24px)}sp-sidenav{width:100%}.spectrum-web{margin-top:80px;display:block}sp-underlay:not(:defined){opacity:0}`,h=class extends i{constructor(){super(...arguments),this.open=!1,this.handleKeydown=s=>{"Escape"===s.code&&null===s.target.closest('[role="listbox"],[role="menu"]')&&(this.open=!1)}}static get styles(){return[d]}toggle(s){"keydown"===s.type&&"Enter"!==s.code&&"Space"!==s.code||(this.open=!this.open)}focus(){const s=document.querySelector('[slot="logo"]');s?s.focus():this.shadowRoot.querySelector("#logo").focus()}render(){return a`<sp-underlay class="scrim" @close="${this.toggle}" ?open="${this.open}"></sp-underlay><aside><div id="nav-header"><div id="logo-container"><slot name="logo"></slot></div><docs-search tabindex="${n(!this.open&&matchMedia("(max-width: 960px)").matches?-1:void 0)}"></docs-search></div><div class="navigation"><slot></slot></div></aside>`}updated(s){s.has("open")&&(!this.open&&s.get("open")?(this.dispatchEvent(new Event("close")),this.ownerDocument.removeEventListener("keydown",this.handleKeydown,!0)):this.open&&!s.get("open")&&this.ownerDocument.addEventListener("keydown",this.handleKeydown,!0))}};e([o({type:Boolean,reflect:!0})],h.prototype,"open",2),h=e([r("docs-side-nav")],h);export{h as SideNav};
//# sourceMappingURL=swc.DpwPeE5U.js.map
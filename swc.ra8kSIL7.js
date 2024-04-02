import{i as e}from"./swc.CG3TZKt7.js";import{h as t}from"./swc.Tx3KWw8Z.js";import{b as s}from"./swc.CwCr69Oj.js";import{S as i,n as r}from"./swc.DRmmzwO0.js";import{x as a}from"./swc.BY-CAm7w.js";import{d as o}from"./swc.JlveB6nj.js";import{r as n}from"./swc.BSE6YbTY.js";import{M as l}from"./swc.DLzfciV-.js";import{o as m}from"./swc.C9__KbQF.js";import{t as d}from"./swc.COJW2L_K.js";const c=e`
    :host{--spectrum-illustrated-message-description-max-inline-size:var(--spectrum-illustrated-message-maximum-width);--spectrum-illustrated-message-heading-max-inline-size:var(--spectrum-illustrated-message-maximum-width);--spectrum-illustrated-message-title-to-heading:var(--spectrum-spacing-400);--spectrum-illustrated-message-heading-to-description:var(--spectrum-spacing-75);--spectrum-illustrated-message-illustration-color:var(--spectrum-neutral-visual-color);--spectrum-illustrated-message-illustration-accent-color:var(--spectrum-accent-visual-color);--spectrum-illustrated-message-title-font-family:var(--spectrum-sans-font-family-stack);--spectrum-illustrated-message-title-font-weight:var(--spectrum-heading-sans-serif-font-weight);--spectrum-illustrated-message-title-font-style:var(--spectrum-heading-sans-serif-font-style);--spectrum-illustrated-message-title-font-size:var(--spectrum-illustrated-message-title-size);--spectrum-illustrated-message-title-line-height:var(--spectrum-heading-line-height);--spectrum-illustrated-message-title-color:var(--spectrum-heading-color);--spectrum-illustrated-message-description-font-family:var(--spectrum-sans-font-family-stack);--spectrum-illustrated-message-description-font-weight:var(--spectrum-body-sans-serif-font-weight);--spectrum-illustrated-message-description-font-style:var(--spectrum-body-sans-serif-font-style);--spectrum-illustrated-message-description-font-size:var(--spectrum-illustrated-message-body-size);--spectrum-illustrated-message-description-line-height:var(--spectrum-body-line-height);--spectrum-illustrated-message-description-color:var(--spectrum-body-color)}:host:lang(ja),:host:lang(zh),:host:lang(ko){--spectrum-illustrated-message-title-font-size:var(--spectrum-illustrated-message-cjk-title-size)}@media (forced-colors:active){:host{--highcontrast-illustrated-message-illustration-color:CanvasText;--highcontrast-illustrated-message-illustration-accent-color:Highlight}}:host{display:var(--mod-illustrated-message-display,flex);text-align:center;pointer-events:var(--mod-illustrated-message-pointer-events,auto);max-inline-size:var(--mod-illustrated-message-content-maximum-width);flex-direction:column;justify-content:center;align-items:center;block-size:100%}#illustration{color:var(--highcontrast-illustrated-message-illustration-color,var(--mod-illustrated-message-illustration-color,var(--spectrum-illustrated-message-illustration-color)));fill:currentColor;stroke:currentColor;margin-block-end:var(--mod-illustrated-message-title-to-heading,var(--spectrum-illustrated-message-title-to-heading))}.spectrum-IllustratedMessage-accent{color:var(--highcontrast-illustrated-message-illustration-accent-color,var(--mod-illustrated-message-illustration-accent-color,var(--spectrum-illustrated-message-illustration-accent-color)));fill:currentColor;stroke:currentColor}#heading{font-family:var(--mod-illustrated-message-title-font-family,var(--spectrum-illustrated-message-title-font-family));font-weight:var(--mod-illustrated-message-title-font-weight,var(--spectrum-illustrated-message-title-font-weight));font-style:var(--mod-illustrated-message-title-font-style,var(--spectrum-illustrated-message-title-font-style));font-size:var(--mod-illustrated-message-title-font-size,var(--spectrum-illustrated-message-title-font-size));line-height:var(--mod-illustrated-message-title-line-height,var(--spectrum-illustrated-message-title-line-height));color:var(--mod-illustrated-message-title-color,var(--spectrum-illustrated-message-title-color));max-inline-size:var(--mod-illustrated-message-heading-max-inline-size,var(--spectrum-illustrated-message-heading-max-inline-size));margin-block-start:0;margin-block-end:var(--mod-illustrated-message-heading-to-body,0)}#description{position:var(--mod-illustrated-message-description-position);z-index:var(--mod-illustrated-message-description-z-index);pointer-events:var(--mod-illustrated-message-description-pointer-events,auto);font-family:var(--mod-illustrated-message-description-font-family,var(--spectrum-illustrated-message-description-font-family));font-weight:var(--mod-illustrated-message-description-font-weight,var(--spectrum-illustrated-message-description-font-weight));font-style:var(--mod-illustrated-message-description-font-style,var(--spectrum-illustrated-message-description-font-style));font-size:var(--mod-illustrated-message-description-font-size,var(--spectrum-illustrated-message-description-font-size));line-height:var(--mod-illustrated-message-description-line-height,var(--spectrum-illustrated-message-description-line-height));color:var(--mod-illustrated-message-description-color,var(--spectrum-illustrated-message-description-color));max-inline-size:var(--mod-illustrated-message-description-max-inline-size,var(--spectrum-illustrated-message-description-max-inline-size));margin-block-start:var(--mod-illustrated-message-heading-to-description,var(--spectrum-illustrated-message-heading-to-description));margin-block-end:0}::slotted(svg[viewBox]){width:100%}
`;var u=Object.defineProperty,g=Object.getOwnPropertyDescriptor,p=(e,t,s,i)=>{for(var r,a=i>1?void 0:i?g(t,s):t,o=e.length-1;o>=0;o--)(r=e[o])&&(a=(i?r(t,s,a):r(a))||a);return i&&a&&u(t,s,a),a};class h extends i{constructor(){super(...arguments),this.heading="",this.description=""}static get styles(){return[t,s,c]}render(){return a`
            <div id="illustration"><slot></slot></div>
            <h2
                id="heading"
                class="spectrum-Heading spectrum-Heading--sizeL spectrum-Heading--light"
            >
                <slot name="heading">${this.heading}</slot>
            </h2>
            <div id="description" class="spectrum-Body spectrum-Body--sizeS">
                <slot name="description">${this.description}</slot>
            </div>
        `}}h.is="sp-illustrated-message",p([r()],h.prototype,"heading",2),p([r()],h.prototype,"description",2),o("sp-illustrated-message",h);const v=e`
    .spectrum-Menu-back:focus-visible{box-shadow:inset calc(var(--mod-menu-item-focus-indicator-width,var(--spectrum-menu-item-focus-indicator-width))*var(--spectrum-menu-item-focus-indicator-direction-scalar,1))0 0 0 var(--highcontrast-menu-item-focus-indicator-color,var(--mod-menu-item-focus-indicator-color,var(--spectrum-menu-item-focus-indicator-color)))}.header{color:var(--highcontrast-menu-item-color-default,var(--mod-menu-section-header-color,var(--spectrum-menu-section-header-color)));font-size:var(--mod-menu-section-header-font-size,var(--spectrum-menu-section-header-font-size));font-weight:var(--mod-menu-section-header-font-weight,var(--spectrum-menu-section-header-font-weight));line-height:var(--mod-menu-section-header-line-height,var(--spectrum-menu-section-header-line-height));min-inline-size:var(--mod-menu-section-header-min-width,var(--spectrum-menu-section-header-min-width));padding-block-start:var(--mod-menu-section-header-top-edge-to-text,var(--mod-menu-item-top-edge-to-text,var(--spectrum-menu-item-top-edge-to-text)));padding-block-end:var(--mod-menu-section-header-bottom-edge-to-text,var(--mod-menu-item-bottom-edge-to-text,var(--spectrum-menu-item-bottom-edge-to-text)));padding-inline:var(--mod-menu-item-label-inline-edge-to-content,var(--spectrum-menu-item-label-inline-edge-to-content));grid-area:sectionHeadingArea/1/sectionHeadingArea/-1;display:block}.spectrum-Menu-back{padding-inline:var(--mod-menu-back-padding-inline-start,0)var(--mod-menu-back-padding-inline-end,var(--spectrum-menu-item-label-inline-edge-to-content));padding-block:var(--mod-menu-back-padding-block-start,0)var(--mod-menu-back-padding-block-end,0);flex-flow:wrap;align-items:center;display:flex}.spectrum-Menu-back .header{padding:0}.spectrum-Menu-backButton{cursor:pointer;background:0 0;border:0;margin:0;padding:0;display:inline-flex}.spectrum-Menu-backButton:focus-visible{outline:var(--spectrum-focus-indicator-thickness)solid var(--spectrum-focus-indicator-color);outline-offset:calc((var(--spectrum-focus-indicator-thickness) + 1px)*-1)}.spectrum-Menu-backHeading{color:var(--highcontrast-menu-item-color-default,var(--mod-menu-back-heading-color,var(--spectrum-menu-section-header-color)));font-size:var(--mod-menu-section-header-font-size,var(--spectrum-menu-section-header-font-size));font-weight:var(--mod-menu-section-header-font-weight,var(--spectrum-menu-section-header-font-weight));line-height:var(--mod-menu-section-header-line-height,var(--spectrum-menu-section-header-line-height));display:block}.spectrum-Menu-backIcon{margin-block:var(--mod-menu-back-icon-margin-block,var(--spectrum-menu-back-icon-margin));margin-inline:var(--mod-menu-back-icon-margin-inline,var(--spectrum-menu-back-icon-margin));fill:var(--highcontrast-menu-item-color-default,var(--mod-menu-back-icon-color-default));color:var(--highcontrast-menu-item-color-default,var(--mod-menu-back-icon-color-default))}:host{flex-direction:column;margin:0;display:inline-flex;overflow:visible}[hidden]{display:none!important}
`;var f=Object.defineProperty,b=Object.getOwnPropertyDescriptor,y=(e,t,s,i)=>{for(var r,a=i>1?void 0:i?b(t,s):t,o=e.length-1;o>=0;o--)(r=e[o])&&(a=(i?r(t,s,a):r(a))||a);return i&&a&&f(t,s,a),a};class w extends l{constructor(){super(...arguments),this.headerId=""}static get styles(){return[...super.styles,v]}get ownRole(){switch(this.selects){case"multiple":case"single":case"inherit":return"group";default:return"menu"}}updateLabel(){const e=this.headerElements.length?this.headerElements[0]:void 0;if(e!==this.headerElement)if(this.headerElement&&this.headerElement.id===this.headerId&&this.headerElement.removeAttribute("id"),e){this.headerId=this.headerId||`sp-menu-group-label-${n()}`;const t=e.id||this.headerId;e.id||(e.id=t),this.setAttribute("aria-labelledby",t)}else this.removeAttribute("aria-labelledby");this.headerElement=e}render(){return a`
            <span class="header" ?hidden=${!this.headerElement}>
                <slot name="header" @slotchange=${this.updateLabel}></slot>
            </span>
            <sp-menu ignore>${this.renderMenuItemSlot()}</sp-menu>
        `}}y([m({slot:"header",flatten:!0})],w.prototype,"headerElements",2),y([d()],w.prototype,"headerElement",2),o("sp-menu-group",w);
//# sourceMappingURL=swc.CQMuMfOD.js.map
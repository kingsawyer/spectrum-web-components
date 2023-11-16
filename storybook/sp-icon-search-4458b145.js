import { D as DownloadIcon, L as LinkIcon, S as SearchIcon } from './Search-26d49a91.js';
import { s as setCustomTemplateLiteralTag } from './custom-tag-b5526d41.js';
import { I as IconBase } from './IconBase-fdbfb1c1.js';
import { x } from './lit-html-126adc72.js';
import { d as defineElement } from './define-element-467f3dc4.js';

class IconDownload extends IconBase{render(){return setCustomTemplateLiteralTag(x),DownloadIcon({hidden:!this.label,title:this.label})}}

defineElement("sp-icon-download",IconDownload);

class IconLink extends IconBase{render(){return setCustomTemplateLiteralTag(x),LinkIcon({hidden:!this.label,title:this.label})}}

defineElement("sp-icon-link",IconLink);

class IconSearch extends IconBase{render(){return setCustomTemplateLiteralTag(x),SearchIcon({hidden:!this.label,title:this.label})}}

defineElement("sp-icon-search",IconSearch);
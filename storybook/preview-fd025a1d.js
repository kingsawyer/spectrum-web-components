import './chunk-QKGAIYDF-dbf583e3.js';
import './index-f1f4f800.js';
import './chunk-4XTOY3BZ-2d9ac4e7.js';

var PARAM_KEY="links";

var{document,HTMLElement}=__STORYBOOK_MODULE_GLOBAL__.global;var navigate=params=>__STORYBOOK_MODULE_PREVIEW_API__.addons.getChannel().emit(__STORYBOOK_MODULE_CORE_EVENTS__.SELECT_STORY,params),linksListener=e=>{let{target}=e;if(!(target instanceof HTMLElement))return;let element=target,{sbKind:kind,sbStory:story}=element.dataset;(kind||story)&&(e.preventDefault(),navigate({kind,story}));},hasListener=!1,on=()=>{hasListener||(hasListener=!0,document.addEventListener("click",linksListener));},off=()=>{hasListener&&(hasListener=!1,document.removeEventListener("click",linksListener));},withLinks=__STORYBOOK_MODULE_PREVIEW_API__.makeDecorator({name:"withLinks",parameterName:PARAM_KEY,wrapper:(getStory,context)=>(on(),__STORYBOOK_MODULE_PREVIEW_API__.addons.getChannel().once(__STORYBOOK_MODULE_CORE_EVENTS__.STORY_CHANGED,off),getStory(context))});

var decorators=[withLinks];

export { decorators };
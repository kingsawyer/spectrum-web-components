import { A as AbstractOverlay } from './AbstractOverlay-G-bc58e6.js';

class VirtualTrigger{constructor(t,i){this.x=0;this.y=0;this.x=t,this.y=i;}updateBoundingClientRect(t,i){this.x=t,this.y=i,AbstractOverlay.update();}getBoundingClientRect(){return {width:0,height:0,top:this.y,right:this.x,y:this.y,x:this.x,bottom:this.y,left:this.x,toJSON(){}}}}

export { VirtualTrigger as V };
var lo=Object.defineProperty;var ho=(n,t,e)=>t in n?lo(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var s=(n,t,e)=>(ho(n,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();const I=class I{constructor(t=1,e=1,r=1,i=1){s(this,"r",0);s(this,"g",0);s(this,"b",0);s(this,"a",0);this.setTo(t,e,r,i)}convertToHDRRGB(){return this.r=this.r*Math.pow(2.4,this.a),this.g=this.g*Math.pow(2.4,this.a),this.b=this.b*Math.pow(2.4,this.a),this}unSerialized(t){return this.r=t.r,this.g=t.g,this.b=t.b,this.a=t.a,this}hexToRGB(t){return this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,this}hexToRGBA(t){return this.a=(t>>24&255)/255,this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,this}static random(t=1){let e=new I;return e.a=t,e.r=t*Math.random(),e.g=t*Math.random(),e.b=t*Math.random(),e}static randomRGB(t=.5,e=.5,r=.5,i=.5,a=.5,o=.5){let l=new I;return l.a=1,l.r=i+t*Math.random(),l.g=a+e*Math.random(),l.b=o+r*Math.random(),l}static randomGray(t=.5,e=.5){let r=Math.random()*e+t,i=new I;return i.a=1,i.r=r,i.g=r,i.b=r,i}setTo(t,e,r,i){this.r=Math.max(t,0),this.g=Math.max(e,0),this.b=Math.max(r,0),this.a=Math.max(i,0)}setHex(t){if(typeof t!="string"||I.NON_HEX_CHARS.test(t)||!I.VALID_HEX_SIZE.test(t))throw new TypeError("Expected a valid hex string");t=t.replace(/^#/,"");let e=1;t.length===8&&(e=Number.parseInt(t.slice(6,8),16)/255,t=t.slice(0,6)),t.length===4&&(e=Number.parseInt(t.slice(3,4).repeat(2),16)/255,t=t.slice(0,3)),t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);const r=Number.parseInt(t,16),i=r>>16,a=r>>8&255,o=r&255,l=e;this.a=l,this.r=i/255,this.g=a/255,this.b=o/255}getHex(){let t=e=>{e*=255;let r=e.toString(16);return r.length===1&&(r="0"+r),r};return t(this.r)+t(this.g)+t(this.b)+t(this.a)}get rgb(){return[this.r*255>>>0,this.g*255>>>0,this.b*255>>>0]}set rgb(t){this.setTo(t[0]/255,t[1]/255,t[2]/255,this.a)}get rgba(){return[this.r*255>>>0,this.g*255>>>0,this.b*255>>>0,this.a*255>>>0]}set rgba(t){this.setTo(t[0]/255,t[1]/255,t[2]/255,t[3]/255)}clone(){return new I().copyFrom(this)}copyFrom(t){return this.r=t.r,this.g=t.g,this.b=t.b,this.a=t.a,this}copyFromArray(t,e=255){return this.r=t[0]/e,this.g=t[1]/e,this.b=t[2]/e,this.a=t[3]/e,this}copyFromVector(t){return this.r=t.x,this.g=t.y,this.b=t.z,this.a=t.w,this}static hexRGBColor(t,e=null){return e=e||new I,e.hexToRGB(t),e}static lerp(t,e,r,i){let a=i||new I;return a.r=(r.r-e.r)*t+e.r,a.g=(r.g-e.g)*t+e.g,a.b=(r.b-e.b)*t+e.b,a.a=(r.a-e.a)*t+e.a,i}};s(I,"COLOR_RED",new I(1,0,0,1)),s(I,"COLOR_GREEN",new I(0,1,0,1)),s(I,"COLOR_BLUE",new I(0,0,1,1)),s(I,"COLOR_WHITE",new I(1,1,1,1)),s(I,"COLOR_0",new I),s(I,"COLOR_1",new I),s(I,"COLOR_2",new I),s(I,"HEX_CHARACTERS","a-f\\d"),s(I,"MATCH_3OR4_HEX",`#?[${I.HEX_CHARACTERS}]{3}[${I.HEX_CHARACTERS}]?`),s(I,"MATCH_6OR8_HEX",`#?[${I.HEX_CHARACTERS}]{6}([${I.HEX_CHARACTERS}]{2})?`),s(I,"NON_HEX_CHARS",new RegExp(`[^#${I.HEX_CHARACTERS}]`,"gi")),s(I,"VALID_HEX_SIZE",new RegExp(`^${I.MATCH_3OR4_HEX}$|^${I.MATCH_6OR8_HEX}$`,"i")),s(I,"PRIMARY",4149685),s(I,"PRIMARYDARK",3162015),s(I,"ACCENT",16728193),s(I,"WHITE",16777215),s(I,"IVORY",16777200),s(I,"LIGHTYELLOW",16777184),s(I,"YELLOW",16776960),s(I,"SNOW",16775930),s(I,"FLORALWHITE",16775920),s(I,"LEMONCHIFFON",16775885),s(I,"CORNSILK",16775388),s(I,"SEASHELL",16774638),s(I,"LAVENDERBLUSH",16773365),s(I,"PAPAYAWHIP",16773077),s(I,"BLANCHEDALMOND",16772045),s(I,"MISTYROSE",16770273),s(I,"BISQUE",16770244),s(I,"MOCCASIN",16770229),s(I,"NAVAJOWHITE",16768685),s(I,"PEACHPUFF",16767673),s(I,"GOLD",16766720),s(I,"PINK",16761035),s(I,"LIGHTPINK",16758465),s(I,"ORANGE",16753920),s(I,"LIGHTSALMON",16752762),s(I,"DARKORANGE",16747520),s(I,"CORAL",16744272),s(I,"HOTPINK",16738740),s(I,"TOMATO",16737095),s(I,"ORANGERED",16729344),s(I,"DEEPPINK",16716947),s(I,"FUCHSIA",16711935),s(I,"MAGENTA",16711935),s(I,"RED",16711680),s(I,"OLDLACE",16643558),s(I,"LIGHTGOLDENRODYELLOW",16448210),s(I,"LINEN",16445670),s(I,"ANTIQUEWHITE",16444375),s(I,"SALMON",16416882),s(I,"GHOSTWHITE",16316671),s(I,"MINTCREAM",16121850),s(I,"WHITESMOKE",16119285),s(I,"BEIGE",16119260),s(I,"WHEAT",16113331),s(I,"SANDYBROWN",16032864),s(I,"AZURE",15794175),s(I,"HONEYDEW",15794160),s(I,"ALICEBLUE",15792383),s(I,"KHAKI",15787660),s(I,"LIGHTCORAL",15761536),s(I,"PALEGOLDENROD",15657130),s(I,"VIOLET",15631086),s(I,"DARKSALMON",15308410),s(I,"LAVENDER",15132410),s(I,"LIGHTCYAN",14745599),s(I,"BURLYWOOD",14596231),s(I,"PLUM",14524637),s(I,"GAINSBORO",14474460),s(I,"CRIMSON",14423100),s(I,"PALEVIOLETRED",14381203),s(I,"GOLDENROD",14329120),s(I,"ORCHID",14315734),s(I,"THISTLE",14204888),s(I,"LIGHTGREY",13882323),s(I,"TAN",13808780),s(I,"CHOCOLATE",13789470),s(I,"PERU",13468991),s(I,"INDIANRED",13458524),s(I,"MEDIUMVIOLETRED",13047173),s(I,"SILVER",12632256),s(I,"DARKKHAKI",12433259),s(I,"ROSYBROWN",12357519),s(I,"MEDIUMORCHID",12211667),s(I,"DARKGOLDENROD",12092939),s(I,"FIREBRICK",11674146),s(I,"POWDERBLUE",11591910),s(I,"LIGHTSTEELBLUE",11584734),s(I,"PALETURQUOISE",11529966),s(I,"GREENYELLOW",11403055),s(I,"LIGHTBLUE",11393254),s(I,"DARKGRAY",11119017),s(I,"BROWN",10824234),s(I,"SIENNA",10506797),s(I,"DARKORCHID",10040012),s(I,"PALEGREEN",10025880),s(I,"DARKVIOLET",9699539),s(I,"MEDIUMPURPLE",9662683),s(I,"LIGHTGREEN",9498256),s(I,"DARKSEAGREEN",9419919),s(I,"SADDLEBROWN",9127187),s(I,"DARKMAGENTA",9109643),s(I,"DARKRED",9109504),s(I,"BLUEVIOLET",9055202),s(I,"LIGHTSKYBLUE",8900346),s(I,"SKYBLUE",8900331),s(I,"GRAY",8421504),s(I,"OLIVE",8421376),s(I,"PURPLE",8388736),s(I,"MAROON",8388608),s(I,"AQUAMARINE",8388564),s(I,"CHARTREUSE",8388352),s(I,"LAWNGREEN",8190976),s(I,"MEDIUMSLATEBLUE",8087790),s(I,"LIGHTSLATEGRAY",7833753),s(I,"SLATEGRAY",7372944),s(I,"OLIVEDRAB",7048739),s(I,"SLATEBLUE",6970061),s(I,"DIMGRAY",6908265),s(I,"MEDIUMAQUAMARINE",6737322),s(I,"CORNFLOWERBLUE",6591981),s(I,"CADETBLUE",6266528),s(I,"DARKOLIVEGREEN",5597999),s(I,"INDIGO",4915330),s(I,"MEDIUMTURQUOISE",4772300),s(I,"DARKSLATEBLUE",4734347),s(I,"STEELBLUE",4620980),s(I,"ROYALBLUE",4286945),s(I,"TURQUOISE",4251856),s(I,"MEDIUMSEAGREEN",3978097),s(I,"LIMEGREEN",3329330),s(I,"DARKSLATEGRAY",3100495),s(I,"SEAGREEN",3050327),s(I,"FORESTGREEN",2263842),s(I,"LIGHTSEAGREEN",2142890),s(I,"DODGERBLUE",2003199),s(I,"MIDNIGHTBLUE",1644912),s(I,"AQUA",65535),s(I,"CYAN",65535),s(I,"SPRINGGREEN",65407),s(I,"LIME",65280),s(I,"MEDIUMSPRINGGREEN",64154),s(I,"DARKTURQUOISE",52945),s(I,"DEEPSKYBLUE",49151),s(I,"DARKCYAN",35723),s(I,"TEAL",32896),s(I,"GREEN",32768),s(I,"DARKGREEN",25600),s(I,"BLUE",255),s(I,"MEDIUMBLUE",205),s(I,"DARKBLUE",139),s(I,"NAVY",128),s(I,"BLACK",0);let F=I;class ie{static start(t){this._startTime=performance.now(),this._timeLabel=t}static end(){console.log(this._timeLabel,performance.now()-this._startTime)}}s(ie,"time",0),s(ie,"frame",0),s(ie,"delta",0),s(ie,"_startTime",0),s(ie,"_timeLabel","");class mt{constructor(t=null,e=null){s(this,"target");s(this,"currentTarget");s(this,"type");s(this,"data");s(this,"param");s(this,"time",0);s(this,"delay",0);s(this,"mouseCode",0);s(this,"ctrlKey");s(this,"altKey");s(this,"shiftKey");s(this,"targetTouches");s(this,"changedTouches");s(this,"touches");s(this,"_stopImmediatePropagation",!1);s(this,"view");this.type=t,this.data=e}stopImmediatePropagation(){this._stopImmediatePropagation=!0}reset(){this._stopImmediatePropagation=!1}get isStopImmediatePropagation(){return this._stopImmediatePropagation}}class Ii{constructor(t=null,e=null,r=null,i=null,a=0){s(this,"id",0);s(this,"current");this.type=t,this.thisObject=e,this.handler=r,this.param=i,this.priority=a}equalCurrentListener(t,e,r,i){return this.type==t&&this.thisObject==r&&this.handler==e&&this.param==i}dispose(){this.handler=null,this.thisObject=null,this.param=null,this.priority=0}}s(Ii,"event_id_count",0);class Fr{constructor(){s(this,"listeners",{});s(this,"data")}dispatchEvent(t){var e=this.listeners[t.type];if(e!=null){e=e.slice();for(var r=0;r<e.length;r++){var i=e[r];if(i.handler){try{t.param=i.param,t.currentTarget=i,i.thisObject,i.handler.call(i.thisObject,t)}catch{}if(t.isStopImmediatePropagation)break}}}}destroy(){for(var t in this.listeners)for(var e=this.listeners[t];e.length>0;){var r=e[0];r.handler=null,r.thisObject=null,e.splice(0,1)}}addEventListener(t,e,r,i=null,a=0){if(this.listeners[t]==null&&(this.listeners[t]=[]),!this.hasEventListener(t,e,r)){var o=new Ii(t,r,e,i,a);return o.id=++Ii.event_id_count,o.current=this,this.listeners[t].push(o),this.listeners[t].sort(function(l,h){return h.priority-l.priority}),o.id}for(let l=0;l<this.listeners[t].length;l++){let h=this.listeners[t][l];if(h.equalCurrentListener(t,e,r,i))return h.id}return 0}removeEventListener(t,e,r){if(this.hasEventListener(t,e,r))for(var i=0;i<this.listeners[t].length;i++){var a=this.listeners[t][i];if(a.equalCurrentListener(t,e,r,a.param)){a.handler=null,a.thisObject=null,this.listeners[t].splice(i,1);return}}}removeEventListenerAt(t){for(var e in this.listeners)for(var r=0;r<this.listeners[e].length;r++){var i=this.listeners[e][r];if(i.id==t)return i.handler=null,i.thisObject=null,this.listeners[e].splice(r,1),!0}return!1}removeAllEventListener(t=null){let e;if(t){if(this.listeners[t]){for(var r=0;r<this.listeners[t].length;r++)e=this.listeners[t][r],e.dispose(),this.listeners[t].splice(r,1);delete this.listeners[t]}}else for(let i in this.listeners){for(var r=0;r<this.listeners[i].length;r++)e=this.listeners[i][r],e.dispose(),this.listeners[i].splice(r,1);delete this.listeners[i]}}containEventListener(t){return this.listeners[t]==null?!1:this.listeners[t].length>0}hasEventListener(t,e=null,r=null){if(this.listeners[t]==null)return!1;if(r&&e)for(var i=0;i<this.listeners[t].length;i++){var a=this.listeners[t][i];if(a.equalCurrentListener(t,e,r,a.param))return!0}return!1}}class jr extends mt{constructor(){super(...arguments);s(this,"keyCode",0)}}s(jr,"KEY_DOWN","onKeyDown"),s(jr,"KEY_UP","onKeyUp");class O extends mt{constructor(){super(...arguments);s(this,"pointerId");s(this,"pointerType");s(this,"isPrimary");s(this,"pressure");s(this,"mouseX");s(this,"mouseY");s(this,"movementX");s(this,"movementY");s(this,"deltaX");s(this,"deltaY");s(this,"deltaZ")}reset(){super.reset(),this.mouseX=0,this.mouseY=0,this.movementX=0,this.movementY=0,this.deltaX=0,this.deltaY=0,this.deltaZ=0}}s(O,"PICK_OVER","onPickOver"),s(O,"PICK_OVER_GUI","onPickOverGUI"),s(O,"PICK_CLICK","onPickClick"),s(O,"PICK_CLICK_GUI","onPickClickGUI"),s(O,"PICK_OUT","onPickOut"),s(O,"PICK_OUT_GUI","onPickOutGUI"),s(O,"PICK_MOVE","onPickMove"),s(O,"PICK_UP","onPickUp"),s(O,"PICK_UP_GUI","onPickUpGUI"),s(O,"PICK_DOWN","onPickDown"),s(O,"PICK_DOWN_GUI","onPickDownGUI"),s(O,"POINTER_RIGHT_CLICK","onPointerRightClick"),s(O,"POINTER_MID_UP","onPointerMidUp"),s(O,"POINTER_MID_DOWN","onPointerMidDown"),s(O,"POINTER_CLICK","onPointerClick"),s(O,"POINTER_MOVE","onPointerMove"),s(O,"POINTER_DOWN","onPointerDown"),s(O,"POINTER_UP","onPointerUp"),s(O,"POINTER_OUT","onPointerOut"),s(O,"POINTER_OVER","onPointerOver"),s(O,"POINTER_WHEEL","onPointerWheel");const T=class T{constructor(t=0,e=0,r=0,i=0){s(this,"x",0);s(this,"y",0);s(this,"z",0);s(this,"w",1);s(this,"index",0);this.set(t,e,r,i),this.index=T._index++}static get ZERO(){return new T(0,0,0)}static get ONE(){return new T(1,1,1)}static get LEFT(){return new T(-1,0,0)}static get RIGHT(){return new T(1,0,0)}static get UP(){return new T(0,1,0)}static get DOWN(){return new T(0,-1,0)}static get BACK(){return new T(0,0,-1)}static get FORWARD(){return new T(0,0,1)}set a(t){this.w=t}set r(t){this.x=t}set g(t){this.y=t}set b(t){this.z=t}get a(){return this.w}get r(){return this.x}get g(){return this.y}get b(){return this.z}get length(){return Math.sqrt(this.lengthSquared)}get lengthSquared(){return this.x*this.x+this.y*this.y+this.z*this.z}get position(){return this}static getTowPointbyDir(t,e,r,i,a){a==T.Z_AXIS?(e.x=t.y,e.y=-t.x,r.x=-t.y,r.y=t.x,e.scaleBy(i*.5),r.scaleBy(i*.5)):a==T.Y_AXIS&&(e.x=t.z,e.z=-t.x,r.x=-t.z,r.z=t.x,e.scaleBy(i*.5),r.scaleBy(i*.5))}static pointToLine(t,e,r){let i=0,a,o,l;if(a=T.distance(t,e),o=T.distance(t,r),l=T.distance(e,r),l<=1e-6||o<=1e-6)return i=0,i;if(a<=1e-6||l*l>=a*a+o*o)return i=o,i;if(o*o>=a*a+l*l)return i=l,i;let h=(a+o+l)/2;return i=2*Math.sqrt(h*(h-a)*(h-o)*(h-l))/a,i}static dot(t,e){return t.x*e.x+t.y*e.y+t.z*e.z}static getPoints(t,e){let r=[];for(let i=0;i<t;i++){const a=new T(Math.random()*e-e*.5,Math.random()*e-e*.5,Math.random()*e-e*.5);r.push(a)}return r}static getPointNumbers(t,e){let r=[];for(let i=0;i<t;i++)r.push(Math.random()*e-e*.5,Math.random()*e-e*.5,Math.random()*e-e*.5);return r}static getAngle(t,e){let r=t.dotProduct(e)/(t.length*e.length);return Math.acos(r)*180/Math.PI}static sqrMagnitude(t){return t.x*t.x+t.y*t.y+t.z*t.z}static getZYAngle(t,e){return this.calAngle(t.y,t.z,e.y,e.z)}static sub(t,e,r=null){return r=r||new T,r.x=t.x-e.x,r.y=t.y-e.y,r.z=t.z-e.z,r}static add(t,e,r=null){return r=r||new T,r.x=t.x+e.x,r.y=t.y+e.y,r.z=t.z+e.z,r}static smoothDamp(t,e,r,i,a,o){return null}static distance(t,e){var r=t.x-e.x,i=t.y-e.y,a=t.z-e.z;return Math.sqrt(r*r+i*i+a*a)}static squareDistance(t,e){var r=t.x-e.x,i=t.y-e.y,a=t.z-e.z;return r*r+i*i+a*a}static distanceXZ(t,e){var r=t.x-e.x,i=0,a=t.z-e.z;return Math.sqrt(r*r+i*i+a*a)}set(t,e,r,i=1){return this.x=t,this.y=e,this.z=r,this.w=i,this}add(t,e=null){e||(e=new T);var r=this.x,i=this.y,a=this.z,o=this.w,l=t.x,h=t.y,u=t.z,c=t.w;return e.setTo(r+l,i+h,a+u,o+c),e}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}distanceToSquared(t){let e=this.x-t.x,r=this.y-t.y,i=this.z-t.z;return e*e+r*r+i*i}addXYZW(t,e,r,i,a=null){a||(a=new T);var o=this.x,l=this.y,h=this.z,u=this.w,c=t,d=e,f=r,p=i;return a.setTo(o+c,l+d,h+f,u+p),a}clone(){return new T(this.x,this.y,this.z,this.w)}copyFrom(t){var e=this;return e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e}decrementBy(t){this.x-=t.x,this.y-=t.y,this.z-=t.z}dotProduct(t){return this.x*t.x+this.y*t.y+this.z*t.z}equals(t,e=!1){return this.x==t.x&&this.y==t.y&&this.z==t.z&&(!e||this.w==t.w)}incrementBy(t){this.x+=t.x,this.y+=t.y,this.z+=t.z}divide(t){return t instanceof T?new T(this.x/t.x,this.y/t.y,this.z/t.z):(this.x=this.x/t,this.y=this.y/t,this.z=this.z/t,this)}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}normalize(t=1){let e=this;if(this.length!=0){var r=t/this.length;return this.x*=r,this.y*=r,this.z*=r,e}return e}applyQuaternion(t){const e=this.x,r=this.y,i=this.z,a=t.x,o=t.y,l=t.z,h=t.w,u=h*e+o*i-l*r,c=h*r+l*e-a*i,d=h*i+a*r-o*e,f=-a*e-o*r-l*i;return this.x=u*h+f*-a+c*-l-d*-o,this.y=c*h+f*-o+d*-a-u*-l,this.z=d*h+f*-l+u*-o-c*-a,this}scaleBy(t){return this.x*=t,this.y*=t,this.z*=t,this}mul(t){let e=new T;return e.x=this.x*t,e.y=this.y*t,e.z=this.z*t,e}scale(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}scaleToRef(t,e){return e||(e=new T),e.x=this.x*t,e.y=this.y*t,e.z=this.z*t,e}setTo(t,e,r,i=1){this.x=t,this.y=e,this.z=r,this.w=i}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}subtract(t,e=null){return e||(e=new T),e.setTo(this.x-t.x,this.y-t.y,this.z-t.z),e}multiply(t,e=null){e||(e=new T);var r=this.x,i=this.y,a=this.z,o=t.x,l=t.y,h=t.z;return e.setTo(r*o,i*l,a*h),e}divided(t,e=null){e||(e=new T);var r=this.x,i=this.y,a=this.z,o=t.x,l=t.y,h=t.z;return e.setTo(r/o,i/l,a/h),e}div(t,e){e||(e=new T);var r=this.x,i=this.y,a=this.z,o=this.w;return e.setTo(r/t,i/t,a/t,o/t),e}lerp(t,e,r){var i=t.x,a=t.y,o=t.z,l=t.w,h=e.x,u=e.y,c=e.z,d=e.w;this.x=(h-i)*r+i,this.y=(u-a)*r+a,this.z=(c-o)*r+o,this.w=(d-l)*r+l}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}toString(){return"<"+this.x+", "+this.y+", "+this.z+">"}normalizeToWay2D_XY(){let t=Math.abs(this.x),e=Math.abs(this.y);t>e?this.x>0?this.copyFrom(T.RIGHT):this.copyFrom(T.LEFT):this.y>0?this.copyFrom(T.DOWN):this.copyFrom(T.UP)}toArray(){return[this.x,this.y,this.z]}copyToBytes(t){t.setFloat32(0*Float32Array.BYTES_PER_ELEMENT,this.x,!0),t.setFloat32(1*Float32Array.BYTES_PER_ELEMENT,this.y,!0),t.setFloat32(2*Float32Array.BYTES_PER_ELEMENT,this.z,!0)}crossProduct(t,e=null){return e=e||new T,e.x=this.y*t.z-this.z*t.y,e.y=this.z*t.x-this.x*t.z,e.z=this.x*t.y-this.y*t.x,e.w=1,e}crossVectors(t,e){return t.crossProduct(e,this),this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}setFromArray(t,e=0){this.x=t[e],this.y=t[e+1],this.z=t[e+2]}divideScalar(t){return this.multiplyScalar(1/t)}clampLength(t,e){let r=this.length;return this.divideScalar(r||1).multiplyScalar(Math.max(t,Math.min(e,r)))}setScalar(t){return this.x=t,this.y=t,this.z=t,this}static calAngle(t,e,r,i){const a=l(r,i,t,e);let o=Math.acos(a)*180/Math.PI;return r<t&&(o=-o),o;function l(u,c,d,f){let p=[u-d,c-f];return h(p,[0,-1])}function h(u,c){let d=u[0]*c[0]+u[1]*c[1],f=Math.sqrt(u[0]*u[0]+u[1]*u[1])*Math.sqrt(c[0]*c[0]+c[1]*c[1]);return d/f}}static pointInsideTriangle(t,e,r,i){return T.HELP_0.setTo(t.x,t.z,0),T.HELP_1.setTo(e.x,e.z,0),T.HELP_2.setTo(r.x,r.z,0),T.HELP_3.setTo(i.x,i.z,0),T.pointInsideTriangle2d()}static pointInsideTriangle2d(){return T.productXY(T.HELP_1,T.HELP_2,T.HELP_3)>=0?T.productXY(T.HELP_1,T.HELP_2,T.HELP_0)>=0&&T.productXY(T.HELP_2,T.HELP_3,T.HELP_0)>=0&&T.productXY(T.HELP_3,T.HELP_1,T.HELP_0)>=0:T.productXY(T.HELP_1,T.HELP_2,T.HELP_0)<=0&&T.productXY(T.HELP_2,T.HELP_3,T.HELP_0)<=0&&T.productXY(T.HELP_3,T.HELP_1,T.HELP_0)<=0}static productXY(t,e,r){var i=(t.x-r.x)*(e.y-r.y)-(t.y-r.y)*(e.x-r.x);return i>-1e-5&&i<1e-5&&(i=0),i}static serialize(t){return new T(t.x,t.y,t.z,t.w)}};s(T,"MAX",new T(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)),s(T,"MIN",new T(Number.MIN_VALUE,Number.MIN_VALUE,Number.MIN_VALUE)),s(T,"SAFE_MAX",new T(Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)),s(T,"SAFE_MIN",new T(Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER)),s(T,"X_AXIS",new T(1,0,0)),s(T,"neg_X_AXIS",new T(-1,0,0)),s(T,"Y_AXIS",new T(0,1,0)),s(T,"Z_AXIS",new T(0,0,1)),s(T,"HELP_0",new T),s(T,"HELP_1",new T),s(T,"HELP_2",new T),s(T,"EPSILON",1e-5),s(T,"HELP_3",new T),s(T,"HELP_4",new T),s(T,"HELP_5",new T),s(T,"HELP_6",new T),s(T,"_index",0);let g=T;class uo{constructor(t){s(this,"canvasX");s(this,"canvasY");s(this,"identifier");s(this,"clientX");s(this,"clientY");s(this,"pageX");s(this,"pageY");s(this,"screenX");s(this,"screenY");this.canvasX=t.clientX,this.canvasY=t.clientY,this.identifier=t.identifier,this.clientX=t.clientX,this.clientY=t.clientY,this.pageX=t.pageX,this.pageY=t.pageY,this.screenX=t.screenX,this.screenY=t.screenY}}class co extends Fr{constructor(){super(...arguments);s(this,"canvasX",0);s(this,"canvasY",0);s(this,"isMouseDown",!1);s(this,"isRightMouseDown",!1);s(this,"canvas");s(this,"mouseX",0);s(this,"mouseY",0);s(this,"wheelDelta",0);s(this,"mouseOffsetX",0);s(this,"mouseOffsetY",0);s(this,"mouseLastX",0);s(this,"mouseLastY",0);s(this,"_time",0);s(this,"_keyStatus");s(this,"_mouseStatus");s(this,"_isTouchStart");s(this,"_keyEvent3d");s(this,"_pointerEvent3D");s(this,"_windowsEvent3d");s(this,"_gp",!1);s(this,"_oldPosition1",null);s(this,"_oldPosition2",null);s(this,"_downTime",0)}initCanvas(e){this.canvas=e,e.onpointerdown=i=>{i.button==0?this.mouseStart(i):i.button==1?this.middleDown(i):i.button==2&&this.mouseStart(i)},e.onpointerup=i=>{i.button==0?this.mouseEnd(i):i.button==1?this.middleUp(i):i.button==2&&this.mouseEnd(i)},e.onpointerenter=i=>{this.mouseOver(i)},e.onpointermove=i=>{this.mouseMove(i)},e.onpointercancel=i=>{this.mouseEnd(i)},e.onpointerleave=i=>{this.mouseEnd(i)},e.onpointerout=i=>{this.mouseEnd(i)},e.addEventListener("click",i=>{i.button==2?(this.isRightMouseDown=!1,this.rightClick(i)):i.button==0&&(this.isMouseDown=!1,this.mouseClick(i))},!0),e.addEventListener("wheel",i=>this.mouseWheel(i),{passive:!1}),window.addEventListener("keydown",i=>this.keyDown(i),!0),window.addEventListener("keyup",i=>this.keyUp(i),!0),e.oncontextmenu=function(){return!1};let r=this.canvas.getBoundingClientRect();this.canvasX=r.left,this.canvasY=r.top,this._keyStatus={},this._mouseStatus={},this._isTouchStart=!1,this._keyEvent3d=new jr,this._pointerEvent3D=new O,this._windowsEvent3d=new mt}onPinch(e,r,i,a){this._oldPosition1=new g(e,r),this._oldPosition2=new g(i,a)}onSwipe(e,r){this.mouseX=e,this.mouseY=r,this._oldPosition1=null,this._oldPosition2=null,this._time=new Date().getTime()}GetTargetTouches(e){for(var r=new Array,i=0;i<e.length;i++){var a=new uo(e[i]);r.push(a)}return r}rightClick(e){this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._pointerEvent3D.mouseX=e.clientX-this.canvasX,this._pointerEvent3D.mouseY=e.clientY-this.canvasY,this._pointerEvent3D.type=O.POINTER_RIGHT_CLICK,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this.dispatchEvent(this._pointerEvent3D)}middleDown(e){this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._pointerEvent3D.mouseX=e.clientX-this.canvasX,this._pointerEvent3D.mouseY=e.clientY-this.canvasY,this._pointerEvent3D.type=O.POINTER_MID_DOWN,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this.dispatchEvent(this._pointerEvent3D)}middleUp(e){this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._pointerEvent3D.mouseX=e.clientX-this.canvasX,this._pointerEvent3D.mouseY=e.clientY-this.canvasY,this._pointerEvent3D.type=O.POINTER_MID_UP,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this.dispatchEvent(this._pointerEvent3D)}mouseClick(e){this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._pointerEvent3D.mouseX=e.clientX-this.canvasX,this._pointerEvent3D.mouseY=e.clientY-this.canvasY,this._pointerEvent3D.type=O.POINTER_CLICK,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this.dispatchEvent(this._pointerEvent3D)}mouseEnd(e){this.isMouseDown=!1,this.mouseLastX=this.mouseX,this.mouseLastY=this.mouseY,this.mouseX=e.clientX-this.canvasX,this.mouseY=e.clientY-this.canvasY,this.mouseOffsetX=this.mouseX-this.mouseLastX,this.mouseOffsetY=this.mouseY-this.mouseLastY,this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._mouseStatus[this._pointerEvent3D.mouseCode]=!1,this._pointerEvent3D.type=O.POINTER_UP,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this._pointerEvent3D.mouseX=this.mouseX,this._pointerEvent3D.mouseY=this.mouseY,this.dispatchEvent(this._pointerEvent3D)}mouseStart(e){this.isMouseDown=!0,this.mouseLastX=this.mouseX,this.mouseLastY=this.mouseY,this.mouseX=e.clientX-this.canvasX,this.mouseY=e.clientY-this.canvasY,this.mouseOffsetX=this.mouseX-this.mouseLastX,this.mouseOffsetY=this.mouseY-this.mouseLastY,this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this._pointerEvent3D.mouseX=this.mouseX,this._pointerEvent3D.mouseY=this.mouseY,this._pointerEvent3D.type=O.POINTER_DOWN,this.dispatchEvent(this._pointerEvent3D)}mouseMove(e){this.mouseLastX=this.mouseX,this.mouseLastY=this.mouseY,this.mouseX=e.clientX-this.canvasX,this.mouseY=e.clientY-this.canvasY,this.mouseOffsetX=this.mouseX-this.mouseLastX,this.mouseOffsetY=this.mouseY-this.mouseLastY,this._pointerEvent3D.reset(),this._pointerEvent3D.type=O.POINTER_MOVE,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this._pointerEvent3D.mouseX=this.mouseX,this._pointerEvent3D.mouseY=this.mouseY,this._pointerEvent3D.movementX=e.movementX,this._pointerEvent3D.movementY=e.movementY,this.dispatchEvent(this._pointerEvent3D)}mouseOver(e){this.isMouseDown=!1,this.mouseLastX=this.mouseX,this.mouseLastY=this.mouseY,this.mouseX=e.clientX-this.canvasX,this.mouseY=e.clientY-this.canvasY,this.mouseOffsetX=this.mouseX-this.mouseLastX,this.mouseOffsetY=this.mouseY-this.mouseLastY,this._pointerEvent3D.reset(),this._pointerEvent3D.type=O.POINTER_OVER,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this._pointerEvent3D.mouseX=this.mouseX,this._pointerEvent3D.mouseY=this.mouseY,this.dispatchEvent(this._pointerEvent3D)}mouseWheel(e){e.preventDefault(),this.mouseLastX=this.mouseX,this.mouseLastY=this.mouseY,this.mouseX=e.clientX-this.canvasX,this.mouseY=e.clientY-this.canvasY,this.mouseOffsetX=this.mouseX-this.mouseLastX,this.mouseOffsetY=this.mouseY-this.mouseLastY,"wheelDelta"in e?(this._pointerEvent3D.delay=e.wheelDelta,this.wheelDelta=e.wheelDelta):"delta"in e&&(this.wheelDelta=e.delta),this._pointerEvent3D.reset(),this._pointerEvent3D.type=O.POINTER_WHEEL,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.mouseX=this.mouseX,this._pointerEvent3D.mouseY=this.mouseY,this._pointerEvent3D.deltaX=e.deltaX,this._pointerEvent3D.deltaY=e.deltaY,this._pointerEvent3D.deltaZ=e.deltaZ,this.dispatchEvent(this._pointerEvent3D)}keyDown(e){this._keyEvent3d.reset(),this._keyEvent3d.keyCode=e.keyCode,this._keyEvent3d.ctrlKey=e.ctrlKey,this._keyEvent3d.altKey=e.altKey,this._keyEvent3d.shiftKey=e.shiftKey,this._keyStatus[e.keyCode]||(this._keyStatus[e.keyCode]=!0,this._keyEvent3d.type=jr.KEY_DOWN,this.dispatchEvent(this._keyEvent3d))}keyUp(e){this._keyEvent3d.reset(),this._keyEvent3d.keyCode=e.keyCode,this._keyStatus[e.keyCode]=!1,this._keyEvent3d.type=jr.KEY_UP,this.dispatchEvent(this._keyEvent3d)}GetSlideAngle(e,r){return Math.atan2(r,e)*180/Math.PI}GetSlideDirection(e,r,i,a){var o=r-a,l=i-e,h=0;if(Math.abs(l)<2&&Math.abs(o)<2)return h;var u=this.GetSlideAngle(l,o);return u>=-45&&u<45?h=4:u>=45&&u<135?h=1:u>=-135&&u<-45?h=2:(u>=135&&u<=180||u>=-180&&u<-135)&&(h=3),h}}const fo="0.7.2";let nt={clamp_to_edge:"clamp-to-edge",repeat:"repeat",mirror_repeat:"mirror-repeat"},Xt={never:"never",less:"less",equal:"equal",less_equal:"less-equal",greater:"greater",not_equal:"not-equal",greater_equal:"greater-equal",always:"always"},Ze={none:"none",front:"front",back:"back"},Wt={nearest:"nearest",linear:"linear"},Hi={point_list:"point-list",line_list:"line-list",line_strip:"line-strip",triangle_list:"triangle-list",triangle_strip:"triangle-strip"},z={r8unorm:"r8unorm",r8snorm:"r8snorm",r8uint:"r8uint",r8sint:"r8sint",r16uint:"r16uint",r16sint:"r16sint",r16float:"r16float",rg8unorm:"rg8unorm",rg8snorm:"rg8snorm",rg8uint:"rg8uint",rg8sint:"rg8sint",r32uint:"r32uint",r32sint:"r32sint",r32float:"r32float",rg16uint:"rg16uint",rg16sint:"rg16sint",rg16float:"rg16float",rgba8unorm:"rgba8unorm",rgba8unorm_srgb:"rgba8unorm-srgb",rgba8snorm:"rgba8snorm",rgba8uint:"rgba8uint",rgba8sint:"rgba8sint",bgra8unorm:"bgra8unorm",bgra8unorm_srgb:"bgra8unorm-srgb",rgb9e5ufloat:"rgb9e5ufloat",rgb10a2unorm:"rgb10a2unorm",rg11b10ufloat:"rg11b10ufloat",rg32uint:"rg32uint",rg32sint:"rg32sint",rg32float:"rg32float",rgba16uint:"rgba16uint",rgba16sint:"rgba16sint",rgba16float:"rgba16float",rgba32uint:"rgba32uint",rgba32sint:"rgba32sint",rgba32float:"rgba32float",stencil8:"stencil8",depth16unorm:"depth16unorm",depth24plus:"depth24plus",depth24plus_stencil8:"depth24plus-stencil8",depth32float:"depth32float",bc1_rgba_unorm:"bc1-rgba-unorm",bc1_rgba_unorm_srgb:"bc1-rgba-unorm-srgb",bc2_rgba_unorm:"bc2-rgba-unorm",bc2_rgba_unorm_srgb:"bc2-rgba-unorm-srgb",bc3_rgba_unorm:"bc3-rgba-unorm",bc3_rgba_unorm_srgb:"bc3-rgba-unorm-srgb",bc4_r_unorm:"bc4-r-unorm",bc4_r_snorm:"bc4-r-snorm",bc5_rg_unorm:"bc5-rg-unorm",bc5_rg_snorm:"bc5-rg-snorm",bc6h_rgb_ufloat:"bc6h-rgb-ufloat",bc6h_rgb_float:"bc6h-rgb-float",bc7_rgba_unorm:"bc7-rgba-unorm",bc7_rgba_unorm_srgb:"bc7-rgba-unorm-srgb",depth24unorm_stencil8:"depth24unorm-stencil8",depth32float_stencil8:"depth32float-stencil8"},ci={uint8x2:"uint8x2",uint8x4:"uint8x4",sint8x2:"sint8x2",sint8x4:"sint8x4",unorm8x2:"unorm8x2",unorm8x4:"unorm8x4",snorm8x2:"snorm8x2",snorm8x4:"snorm8x4",uint16x2:"uint16x2",uint16x4:"uint16x4",sint16x2:"sint16x2",sint16x4:"sint16x4",unorm16x2:"unorm16x2",unorm16x4:"unorm16x4",snorm16x2:"snorm16x2",snorm16x4:"snorm16x4",float16x2:"float16x2",float16x4:"float16x4",float32:"float32",float32x2:"float32x2",float32x3:"float32x3",float32x4:"float32x4",uint32:"uint32",uint32x2:"uint32x2",uint32x3:"uint32x3",uint32x4:"uint32x4",sint32:"sint32",sint32x2:"sint32x2",sint32x3:"sint32x3",sint32x4:"sint32x4"};class xr extends mt{}s(xr,"RESIZE","resize");class go extends Fr{constructor(){super(...arguments);s(this,"adapter");s(this,"device");s(this,"context");s(this,"aspect");s(this,"presentationSize",[0,0]);s(this,"presentationFormat");s(this,"canvas");s(this,"windowWidth");s(this,"windowHeight");s(this,"canvasConfig");s(this,"super",1);s(this,"_pixelRatio",1);s(this,"_resizeEvent")}get pixelRatio(){return this._pixelRatio}async init(e){var r;if(this.canvasConfig=e,e&&e.canvas){if(this.canvas=e.canvas,this.canvas===null)throw new Error("no Canvas");const i=this.canvas.clientWidth,a=this.canvas.clientHeight;i!=this.canvas.clientWidth&&(this.canvas.style.width=i+"px"),a!=this.canvas.clientHeight&&(this.canvas.style.height=a+"px")}else this.canvas=document.createElement("canvas"),this.canvas.style.position="absolute",this.canvas.style.top="0px",this.canvas.style.left="0px",this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.style.zIndex=e!=null&&e.zIndex?e.zIndex.toString():"0",document.body.appendChild(this.canvas);if(e&&e.backgroundImage?(this.canvas.style.background=`url(${e.backgroundImage})`,this.canvas.style["background-size"]="cover",this.canvas.style["background-position"]="center"):this.canvas.style.background="transparent",this.canvas.style["touch-action"]="none",this.canvas.style["object-fit"]="cover",navigator.gpu===void 0)throw new Error("Your browser does not support WebGPU!");if(this.adapter=await navigator.gpu.requestAdapter({powerPreference:"high-performance"}),this.adapter==null)throw new Error("Your browser does not support WebGPU!");if(this.device=await this.adapter.requestDevice({requiredFeatures:["bgra8unorm-storage","depth-clip-control","depth32float-stencil8","indirect-first-instance","rg11b10ufloat-renderable"],requiredLimits:{minUniformBufferOffsetAlignment:256,maxStorageBufferBindingSize:this.adapter.limits.maxStorageBufferBindingSize}}),this.device==null)throw new Error("Your browser does not support WebGPU!");return this._pixelRatio=((r=this.canvasConfig)==null?void 0:r.devicePixelRatio)||window.devicePixelRatio||1,this._pixelRatio=Math.min(this._pixelRatio,2),this.device.label="device",this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),this.context=this.canvas.getContext("webgpu"),this.context.configure({device:this.device,format:this.presentationFormat,usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT,alphaMode:"premultiplied",colorSpace:"srgb"}),this._resizeEvent=new xr(xr.RESIZE,{width:this.windowWidth,height:this.windowHeight}),new ResizeObserver(()=>{this.updateSize(),Ge.destroyTexture()}).observe(this.canvas),this.updateSize(),!0}updateSize(){let e=Math.floor(this.canvas.clientWidth*this.pixelRatio*this.super),r=Math.floor(this.canvas.clientHeight*this.pixelRatio*this.super);(e!=this.windowWidth||r!=this.windowHeight)&&(this.canvas.width=this.windowWidth=e,this.canvas.height=this.windowHeight=r,this.presentationSize[0]=this.windowWidth,this.presentationSize[1]=this.windowHeight,this.aspect=this.windowWidth/this.windowHeight,this._resizeEvent.data.width=this.windowWidth,this._resizeEvent.data.height=this.windowHeight,this.dispatchEvent(this._resizeEvent))}}let w=new go;class Ce{}s(Ce,"colorBufferTex_NAME","colorBufferTex"),s(Ce,"positionBufferTex_NAME","positionBufferTex"),s(Ce,"normalBufferTex_NAME","normalBufferTex"),s(Ce,"materialBufferTex_NAME","materialBufferTex"),s(Ce,"zBufferTexture_NAME","zBufferTexture"),s(Ce,"zPreDepthTexture_NAME","zPreDepthTexture"),s(Ce,"outTex_NAME","outTex");var ke=(n=>(n[n.Default=1]="Default",n[n.IgnoreDepthPass=2]="IgnoreDepthPass",n[n.Sky=6]="Sky",n[n.Particle=10]="Particle",n[n.SkinnedMesh=16]="SkinnedMesh",n[n.MorphTarget=32]="MorphTarget",n[n.Terrain=64]="Terrain",n[n.UI=128]="UI",n))(ke||{});class Gt{static addMask(t,e){return t|e}static removeMask(t,e){return t&~e}static hasMask(t,e){return(t&e)==e}}function Si(n,t){let e=n.__NonSerialize__;e||(e=n.__NonSerialize__={},e.__NonSerialize__=!0),e[t]=!0}function ja(n,t){let e;for(;n&&(n=n.__proto__,n&&(e=n.__NonSerialize__),!e););return e&&e[t]}function Vt(n,t,e,r,i){let a=n.__EditorInspector__;a||(a=n.__EditorInspector__=new Map);let o=a.get(n.constructor.name);o||(o=new Map,a.set(n.constructor.name,o)),o.set(t,{p1:e,p2:r,p3:i})}function xt(n,t,e,r,i){let a=window.__Component__;a||(a=window.__Component__={}),a[t]=n}function po(n){let t=window.__Component__;return t[n]?t[n]:null}function or(n,t,e,r,i){let a=window.__shader__;a||(a=window.__shader__={}),a[t]=n}function Ao(n){let t=window.__shader__;return t[n]?t[n]:null}var mo=Object.defineProperty,vo=Object.getOwnPropertyDescriptor,qa=(n,t,e,r)=>{for(var i=r>1?void 0:r?vo(t,e):t,a=n.length-1,o;a>=0;a--)(o=n[a])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&mo(t,e,i),i},Yt;const aa=(Yt=class{constructor(){s(this,"__refection");s(this,"__size",0)}getValueType(){if(!this.__refection){let t=this;this.__refection=[];for(const e in t)if(!ja(this,e)){const r=t[e];let i={name:e,type:r.constructor.name};this.__refection.push(i)}}return this.__refection}static getValueSize(t){switch(t.constructor.name){case"Boolean":return 1*4;case"Number":return 1*4;case"f32":return 1*4;case"i32":return 1*4;case"u32":return 1*4;case"Float32Array":return t.byteLength;case"Vector2":return 2*4;case"Vector3":return 3*4;case"Vector4":return 4*4;case"Color":return 4*4;case"Array":let e=0;for(let r=0,i=t.length;r<i;r++)e+=Yt.getValueSize(t[r]);return e}return 0}static Ref(t){return this.Get(t).getValueType()}static Get(t){let e=Yt.__cacheStruct.get(t.prototype);return e||(e=new t,Yt.__cacheStruct.set(t.prototype,e)),e}static GetSize(t){let e=this.Get(t);if(e.__size==0){for(const r in e)if(!ja(e,r)){const i=e[r];e.__size+=Yt.getValueSize(i)}e.__size>4&&(e.__size=Math.ceil(e.__size/4)*4)}return e.__size}},s(Yt,"__cacheStruct",new Map),Yt);qa([Si],aa.prototype,"__refection",2),qa([Si],aa.prototype,"__size",2);let Tr=aa;class xo{constructor(){s(this,"byteOffset");s(this,"byteSize");s(this,"offset",0);s(this,"dataBytes")}get x(){return this.dataBytes.getFloat32(0*Float32Array.BYTES_PER_ELEMENT,!0)}set x(t){this.dataBytes.setFloat32(0*Float32Array.BYTES_PER_ELEMENT,t,!0)}get y(){return this.dataBytes.getFloat32(1*Float32Array.BYTES_PER_ELEMENT,!0)}set y(t){this.dataBytes.setFloat32(1*Float32Array.BYTES_PER_ELEMENT,t,!0)}get z(){return this.dataBytes.getFloat32(2*Float32Array.BYTES_PER_ELEMENT,!0)}set z(t){this.dataBytes.setFloat32(2*Float32Array.BYTES_PER_ELEMENT,t,!0)}get w(){return this.dataBytes.getFloat32(3*Float32Array.BYTES_PER_ELEMENT,!0)}set w(t){this.dataBytes.setFloat32(3*Float32Array.BYTES_PER_ELEMENT,t,!0)}setX(t){this.x=t}setXY(t,e){this.x=t,this.y=e}setXYZ(t,e,r){this.x=t,this.y=e,this.z=r}setXYZW(t,e,r,i){this.x=t,this.y=e,this.z=r,this.w=i}setVector2Array(t){for(let e=0;e<t.length;e++){const r=t[e];this.dataBytes.setFloat32((e*2+0)*Float32Array.BYTES_PER_ELEMENT,r.x,!0),this.dataBytes.setFloat32((e*2+1)*Float32Array.BYTES_PER_ELEMENT,r.y,!0)}}setVector3Array(t){for(let e=0;e<t.length;e++){const r=t[e];this.dataBytes.setFloat32((e*3+0)*Float32Array.BYTES_PER_ELEMENT,r.x,!0),this.dataBytes.setFloat32((e*3+1)*Float32Array.BYTES_PER_ELEMENT,r.y,!0),this.dataBytes.setFloat32((e*3+2)*Float32Array.BYTES_PER_ELEMENT,r.z,!0)}}setVector4Array(t){for(let e=0;e<t.length;e++){const r=t[e];this.dataBytes.setFloat32((e*4+0)*Float32Array.BYTES_PER_ELEMENT,r.x,!0),this.dataBytes.setFloat32((e*4+1)*Float32Array.BYTES_PER_ELEMENT,r.y,!0),this.dataBytes.setFloat32((e*4+2)*Float32Array.BYTES_PER_ELEMENT,r.z,!0),this.dataBytes.setFloat32((e*4+3)*Float32Array.BYTES_PER_ELEMENT,r.w,!0)}}setColorArray(t){for(let e=0;e<t.length;e++){const r=t[e];this.dataBytes.setFloat32((e*4+0)*Float32Array.BYTES_PER_ELEMENT,r.r,!0),this.dataBytes.setFloat32((e*4+1)*Float32Array.BYTES_PER_ELEMENT,r.g,!0),this.dataBytes.setFloat32((e*4+2)*Float32Array.BYTES_PER_ELEMENT,r.b,!0),this.dataBytes.setFloat32((e*4+3)*Float32Array.BYTES_PER_ELEMENT,r.a,!0)}}setInt8(t,e=0){this.dataBytes.setInt8(e*Int8Array.BYTES_PER_ELEMENT,t)}getInt8(t=0){return this.dataBytes.getInt8(t*Int8Array.BYTES_PER_ELEMENT)}setInt16(t,e=0){this.dataBytes.setInt16(e*Int16Array.BYTES_PER_ELEMENT,t,!0)}getInt16(t=0){return this.dataBytes.getInt16(t*Int16Array.BYTES_PER_ELEMENT,!0)}setInt32(t,e=0){this.dataBytes.setInt32(e*Int32Array.BYTES_PER_ELEMENT,t,!0)}getInt32(t=0){return this.dataBytes.getInt32(t*Int32Array.BYTES_PER_ELEMENT,!0)}setFloat(t,e=0){this.dataBytes.setFloat32(e*Float32Array.BYTES_PER_ELEMENT,t,!0)}getFloat(t=0){return this.dataBytes.getFloat32(t*Float32Array.BYTES_PER_ELEMENT,!0)}setUint8(t,e=0){this.dataBytes.setUint8(e*Uint8Array.BYTES_PER_ELEMENT,t)}getUint8(t=0){return this.dataBytes.getUint8(t*Uint8Array.BYTES_PER_ELEMENT)}setUint16(t,e=0){this.dataBytes.setUint16(e*Uint16Array.BYTES_PER_ELEMENT,t,!0)}getUint16(t=0){return this.dataBytes.getUint16(t*Uint16Array.BYTES_PER_ELEMENT,!0)}setUint32(t,e=0){this.dataBytes.setUint32(e*Uint32Array.BYTES_PER_ELEMENT,t,!0)}getUint32(t=0){return this.dataBytes.getUint32(t*Uint32Array.BYTES_PER_ELEMENT,!0)}setArray(t,e){for(let r=0;r<e.length;r++){const i=e[r];this.dataBytes.setFloat32((t+r)*Float32Array.BYTES_PER_ELEMENT,i,!0)}}setFloat32Array(t,e){new Float32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+t*Float32Array.BYTES_PER_ELEMENT,e.length).set(e)}setArrayBuffer(t,e){e instanceof Uint8Array?this.setUint8Array(t,e):e instanceof Uint16Array?this.setUint16Array(t,e):e instanceof Uint32Array?this.setUint32Array(t,e):e instanceof Int8Array?this.setInt8Array(t,e):e instanceof Int16Array?this.setInt16Array(t,e):e instanceof Int32Array?this.setInt32Array(t,e):e instanceof Float32Array&&this.setFloat32Array(t,e)}setInt8Array(t,e){new Int8Array(this.dataBytes.buffer,this.dataBytes.byteOffset+t*Int8Array.BYTES_PER_ELEMENT).set(e)}setInt16Array(t,e){new Int16Array(this.dataBytes.buffer,this.dataBytes.byteOffset+t*Int16Array.BYTES_PER_ELEMENT).set(e)}setInt32Array(t,e){new Int32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+t*Int32Array.BYTES_PER_ELEMENT).set(e)}setUint8Array(t,e){new Uint8Array(this.dataBytes.buffer,this.dataBytes.byteOffset+t*Uint8Array.BYTES_PER_ELEMENT).set(e)}setUint16Array(t,e){new Uint16Array(this.dataBytes.buffer,this.dataBytes.byteOffset+t*Uint16Array.BYTES_PER_ELEMENT).set(e)}setUint32Array(t,e){new Uint32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+t*Uint32Array.BYTES_PER_ELEMENT).set(e)}setData(t,e){this.dataBytes.setFloat32(t*Float32Array.BYTES_PER_ELEMENT,e,!0)}setVector2(t,e){this.dataBytes.setFloat32(t*Float32Array.BYTES_PER_ELEMENT,e.x,!0),this.dataBytes.setFloat32((t+1)*Float32Array.BYTES_PER_ELEMENT,e.y,!0)}setVector3(t,e){this.dataBytes.setFloat32(t*Float32Array.BYTES_PER_ELEMENT,e.x,!0),this.dataBytes.setFloat32((t+1)*Float32Array.BYTES_PER_ELEMENT,e.y,!0),this.dataBytes.setFloat32((t+2)*Float32Array.BYTES_PER_ELEMENT,e.z,!0)}setVector4(t,e){this.dataBytes.setFloat32(t*Float32Array.BYTES_PER_ELEMENT,e.x,!0),this.dataBytes.setFloat32((t+1)*Float32Array.BYTES_PER_ELEMENT,e.y,!0),this.dataBytes.setFloat32((t+2)*Float32Array.BYTES_PER_ELEMENT,e.z,!0),this.dataBytes.setFloat32((t+3)*Float32Array.BYTES_PER_ELEMENT,e.w,!0)}setColor(t,e){this.dataBytes.setFloat32(t*Float32Array.BYTES_PER_ELEMENT,e.r,!0),this.dataBytes.setFloat32((t+1)*Float32Array.BYTES_PER_ELEMENT,e.g,!0),this.dataBytes.setFloat32((t+2)*Float32Array.BYTES_PER_ELEMENT,e.b,!0),this.dataBytes.setFloat32((t+3)*Float32Array.BYTES_PER_ELEMENT,e.a,!0)}getData(t){return this.dataBytes.getFloat32(t*Float32Array.BYTES_PER_ELEMENT,!0)}writeFloat(t){this.dataBytes.setFloat32(this.offset,t,!0),this.offset+=Float32Array.BYTES_PER_ELEMENT}writeInt8(t){this.dataBytes.setInt8(this.offset,t),this.offset+=Int8Array.BYTES_PER_ELEMENT}writeInt16(t){this.dataBytes.setInt16(this.offset,t,!0),this.offset+=Int16Array.BYTES_PER_ELEMENT}writeInt32(t){this.dataBytes.setInt32(this.offset,t,!0),this.offset+=Int32Array.BYTES_PER_ELEMENT}writeUint8(t){this.dataBytes.setUint8(this.offset,t),this.offset+=Uint8Array.BYTES_PER_ELEMENT}writeUint16(t){this.dataBytes.setUint16(this.offset,t,!0),this.offset+=Uint16Array.BYTES_PER_ELEMENT}writeUint32(t){this.dataBytes.setUint32(this.offset,t,!0),this.offset+=Uint32Array.BYTES_PER_ELEMENT}writeVector2(t){this.writeFloat(t.x),this.writeFloat(t.y)}writeVector3(t){this.writeFloat(t.x),this.writeFloat(t.y),this.writeFloat(t.z)}writeVector4(t){this.writeFloat(t.x),this.writeFloat(t.y),this.writeFloat(t.z),this.writeFloat(t.w)}writeRGBColor(t){this.writeFloat(t.r),this.writeFloat(t.g),this.writeFloat(t.b)}writeArray(t){for(let e=0;e<t.length;e++){const r=t[e];this.writeFloat(r)}}writeFloat32Array(t){new Float32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(t),this.offset+=t.byteLength}writeInt8Array(t){new Int8Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(t),this.offset+=t.byteLength}writeInt16Array(t){new Int16Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(t),this.offset+=t.byteLength}writeInt32Array(t){new Int32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(t),this.offset+=t.byteLength}writeUint8Array(t){new Uint8Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(t),this.offset+=t.byteLength}writeUint16Array(t){new Uint16Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(t),this.offset+=t.byteLength}writeUint32Array(t){new Uint32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(t),this.offset+=t.byteLength}reset(){this.offset=0}destroy(){this.byteOffset=null,this.byteSize=null,this.offset=null,this.dataBytes=null}}class ri{constructor(){s(this,"shareDataBuffer");s(this,"_byteOffset",0)}allocation(t){this.shareDataBuffer&&this.shareDataBuffer.byteLength<t?this._byteOffset=0:this.shareDataBuffer=new ArrayBuffer(t)}allocation_node(t){if(this._byteOffset+t>this.shareDataBuffer.byteLength)return console.error("memory not enough!",this._byteOffset,t,this.shareDataBuffer.byteLength),null;let e=new xo;return e.byteOffset=this._byteOffset,e.byteSize=t,e.dataBytes=new DataView(this.shareDataBuffer,this._byteOffset,e.byteSize),this._byteOffset+=e.byteSize,e}allocation_memory(t){return this._byteOffset+t.byteSize>this.shareDataBuffer.byteLength?(console.error("memory not enough!",this._byteOffset,t.byteSize,this.shareDataBuffer.byteLength),null):(t.byteOffset=this._byteOffset,t.dataBytes=new DataView(this.shareDataBuffer,this._byteOffset,t.byteSize),this._byteOffset+=t.byteSize,t)}reset(){this._byteOffset=0}destroy(t){this.shareDataBuffer=null,this._byteOffset=0}}class nr{constructor(){s(this,"bufferType");s(this,"buffer");s(this,"memory");s(this,"memoryNodes");s(this,"seek");s(this,"outFloat32Array");s(this,"byteSize");s(this,"usage");s(this,"visibility",GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE);s(this,"mapAsyncBuffersOutstanding",0);s(this,"mapAsyncReady");s(this,"_readBuffer");s(this,"_dataView");s(this,"_readFlag",!1);this.mapAsyncReady=[]}debug(){}reset(t=!1,e=0,r){this.seek=0,this.memory.reset(),t&&this.createBuffer(this.usage,e,r)}setBoolean(t,e){let r=this.memoryNodes.get(t);r||(r=this.memory.allocation_node(1*4),this.memoryNodes.set(t,r)),r.setX(e?1:0)}setFloat(t,e){let r=this.memoryNodes.get(t);r||(r=this.memory.allocation_node(1*4),this.memoryNodes.set(t,r)),r.setX(e)}setInt8(t,e){let r=this.memoryNodes.get(t);r||(r=this.memory.allocation_node(1*1),this.memoryNodes.set(t,r)),r.setInt8(e)}setInt16(t,e){let r=this.memoryNodes.get(t);r||(r=this.memory.allocation_node(1*2),this.memoryNodes.set(t,r)),r.setInt16(e)}setInt32(t,e){let r=this.memoryNodes.get(t);r||(r=this.memory.allocation_node(1*4),this.memoryNodes.set(t,r)),r.setInt32(e)}setUint8(t,e){let r=this.memoryNodes.get(t);r||(r=this.memory.allocation_node(1*1),this.memoryNodes.set(t,r)),r.setUint8(e)}setUint16(t,e){let r=this.memoryNodes.get(t);r||(r=this.memory.allocation_node(1*2),this.memoryNodes.set(t,r)),r.setUint16(e)}setUint32(t,e){let r=this.memoryNodes.get(t);r||(r=this.memory.allocation_node(1*4),this.memoryNodes.set(t,r)),r.setUint32(e)}setVector2(t,e){let r=this.memoryNodes.get(t);r||(r=this.memory.allocation_node(2*4),this.memoryNodes.set(t,r)),r.setXY(e.x,e.y)}setVector3(t,e){let r=this.memoryNodes.get(t);r||(r=this.memory.allocation_node(3*4),this.memoryNodes.set(t,r)),r.setXYZ(e.x,e.y,e.z)}setVector4(t,e){let r=this.memoryNodes.get(t);r||(r=this.memory.allocation_node(4*4),this.memoryNodes.set(t,r)),r.setXYZW(e.x,e.y,e.z,e.w)}setVector4Array(t,e){let r=this.memoryNodes.get(t);r||(r=this.memory.allocation_node(4*4*e.length),this.memoryNodes.set(t,r)),r.setVector4Array(e)}setColor(t,e){let r=this.memoryNodes.get(t);r||(r=this.memory.allocation_node(4*4),this.memoryNodes.set(t,r)),r.setXYZW(e.r,e.g,e.b,e.a)}setColorArray(t,e){let r=this.memoryNodes.get(t);r||(r=this.memory.allocation_node(4*4*e.length),this.memoryNodes.set(t,r)),r.setColorArray(e)}setMatrix(t,e){let r=this.memoryNodes.get(t);r||(r=this.memory.allocation_node(16*4),this.memoryNodes.set(t,r)),r.setFloat32Array(0,e.rawData)}setMatrixArray(t,e){let r=this.memoryNodes.get(t);r||(r=this.memory.allocation_node(16*4*e.length),this.memoryNodes.set(t,r));for(let i=0;i<e.length;i++){const a=e[i];r.setFloat32Array(i*16,a.rawData)}}setArray(t,e){let r=this.memoryNodes.get(t);r||(r=this.memory.allocation_node(e.length*4),this.memoryNodes.set(t,r)),r.setArray(0,e)}setFloat32Array(t,e){let r=this.memoryNodes.get(t);r||(r=this.memory.allocation_node(e.length*4),this.memoryNodes.set(t,r)),r.setFloat32Array(0,e)}setInt32Array(t,e){let r=this.memoryNodes.get(t);r||(r=this.memory.allocation_node(e.length*4),this.memoryNodes.set(t,r)),r.setInt32Array(0,e)}setUint32Array(t,e){let r=this.memoryNodes.get(t);r||(r=this.memory.allocation_node(e.length*4),this.memoryNodes.set(t,r)),r.setUint32Array(0,e)}setStruct(t,e,r,i){let a=Tr.Ref(t);Tr.GetSize(t);let o=e,l=this.memoryNodes.get(o);l.reset();let h=r;i&&(h=h[i]);for(let u=0;u<a.length;u++){const c=a[u];let d=h[c.name];this.writeValue(l,c,d)}}writeValue(t,e,r){switch(e.type){case"Boolean":t.writeFloat(r);break;case"Number":t.writeFloat(r);break;case"Float32Array":t.writeFloat32Array(r);break;case"Vector2":t.writeVector2(r);break;case"Vector3":t.writeVector3(r);break;case"Vector4":t.writeVector4(r);break;case"Color":t.writeRGBColor(r);break;case"Array":t.writeArray(r);break}}setStructArray(t,e,r){let i=e.length;for(let a=0;a<i;a++){const o=e[a];this.setStruct(t,a,o,r)}}clean(){this._dataView.fill(0,0,this._dataView.length)}apply(){w.device.queue.writeBuffer(this.buffer,0,this.memory.shareDataBuffer)}mapAsyncWrite(t,e){let r=w.device;if(t.length>0){let i=null;for(;this.mapAsyncReady.length&&(i=this.mapAsyncReady.shift(),i.usedSize!=t.byteLength);)i.destroy(),this.mapAsyncBuffersOutstanding--,i=null;i||(i=r.createBuffer({size:t.byteLength,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.MAP_WRITE,mappedAtCreation:!0}),i.usedSize=t.byteLength,this.mapAsyncBuffersOutstanding++,this.mapAsyncBuffersOutstanding>10&&console.warn(` Warning: mapAsync requests from ${this.mapAsyncBuffersOutstanding} frames ago have not resolved yet.  MB of staging buffers allocated.`));let a=new Float32Array(t.buffer,t.byteOffset,e);new Float32Array(i.getMappedRange(0,e*4)).set(a),i.unmap();const o=r.createCommandEncoder();o.copyBufferToBuffer(i,0,this.buffer,0,e*4),r.queue.submit([o.finish()]),i.mapAsync(GPUMapMode.WRITE).then(()=>this.mapAsyncReady.push(i))}}destroy(t){this.memoryNodes&&this.memoryNodes.forEach(e=>{e.destroy()}),this.bufferType=null,this.seek=null,this.byteSize=null,this.usage=null,this.visibility=null,this.outFloat32Array=null,this.buffer&&this.buffer.destroy(),this.buffer=null,this.memory&&this.memory.destroy(),this.memory=null,this._readBuffer&&this._readBuffer.destroy()}createBuffer(t,e,r,i){let a=w.device;this.buffer&&this.destroy(),this.byteSize=e*4,this.usage=t,this.buffer=a.createBuffer({label:i,size:this.byteSize,usage:t,mappedAtCreation:!1}),this.memory=new ri,this.memoryNodes=new Map,this._dataView=new Float32Array(this.memory.shareDataBuffer),this.memory.allocation(this.byteSize),r&&(this.memory.allocation_node(r.length*4).setArrayBuffer(0,r),this.apply())}resizeBuffer(t,e){this.createBuffer(this.usage,t,e)}createNewBuffer(t,e){let r=w.device,i=e*4,a=t;return this.buffer&&this.destroy(),r.createBuffer({size:i,usage:a,mappedAtCreation:!1})}createBufferByStruct(t,e,r){let i=Tr.GetSize(e),a=i*r,o=w.device;this.buffer=o.createBuffer({label:"StructStorageGPUBuffer",size:a,usage:t,mappedAtCreation:!1}),this.memory=new ri,this.memoryNodes=new Map,this._dataView=new Float32Array(this.memory.shareDataBuffer),this.memory.allocation(a);for(let l=0;l<r;l++){let h=l,u=this.memoryNodes.get(h);u||(u=this.memory.allocation_node(i),this.memoryNodes.set(h,u))}}readBuffer(){return this.outFloat32Array||(this.outFloat32Array=new Float32Array(this.memory.shareDataBuffer.byteLength/4)),this._readBuffer||(this._readBuffer=w.device.createBuffer({size:this.memory.shareDataBuffer.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ,mappedAtCreation:!1})),this._readFlag||this.read(),this.outFloat32Array}async read(){this._readFlag=!0;let t=w.device.createCommandEncoder();t.copyBufferToBuffer(this.buffer,0,this._readBuffer,0,this.memory.shareDataBuffer.byteLength),w.device.queue.submit([t.finish()]),await this._readBuffer.mapAsync(GPUMapMode.READ);const e=this._readBuffer.getMappedRange();this.outFloat32Array.set(new Float32Array(e),0),this._readBuffer.unmap(),this._readFlag=!1}}var Ut=(n=>(n[n.IndicesGPUBuffer=0]="IndicesGPUBuffer",n[n.VertexGPUBuffer=1]="VertexGPUBuffer",n[n.UniformGPUBuffer=2]="UniformGPUBuffer",n[n.StorageGPUBuffer=3]="StorageGPUBuffer",n[n.ComputeGPUBuffer=4]="ComputeGPUBuffer",n[n.MaterialDataUniformGPUBuffer=5]="MaterialDataUniformGPUBuffer",n[n.StructStorageGPUBuffer=6]="StructStorageGPUBuffer",n))(Ut||{});class Pe extends nr{constructor(t,e=0,r){super(),this.bufferType=Ut.StorageGPUBuffer,this.createBuffer(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|e,t,r,"StorageGPUBuffer")}}class Yi extends nr{constructor(t,e){super(),this.bufferType=Ut.UniformGPUBuffer,this.createBuffer(GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC,t,e,"UniformGPUBuffer")}genUniformNodes(){}}class Je{static getMorphTargetShaderBinding(t,e){return`
            fn blendMorphTargetPosition(vertexID:i32, posIn:vec3<f32>) -> vec3<f32>{
                let offset:i32 = vertexID * 3;
                var pos = posIn * morphTargetConfig.morphBaseInfluence;
                pos += vec3<f32>(morphTargetOpPositions[offset], morphTargetOpPositions[offset + 1], morphTargetOpPositions[offset + 2]);
                return pos;
            }

            #if USE_MORPHNORMALS
                fn blendMorphTargetNormal(vertexID:i32, normalIn:vec3<f32>) -> vec3<f32>{
                    let offset:i32 = vertexID * 3;
                    var normal = normalIn * morphTargetConfig.morphBaseInfluence;
                    normal += vec3<f32>(morphTargetOpNormals[offset], morphTargetOpNormals[offset + 1], morphTargetOpNormals[offset + 2]);
                    return normal;
                }
            #endif

            struct MorphTargetConfigData {
                morphBaseInfluence:f32,
                morphTargetCount:f32,
                totalVertexCount:f32,
                computeWorkGroupXY:f32,
            };
            
            @group(${t}) @binding(${e})
            var<uniform> morphTargetConfig: MorphTargetConfigData;
            
            @group(${t}) @binding(${e+1})
            var<storage,read> morphTargetOpPositions: array<f32>;

            #if USE_MORPHNORMALS
                @group(${t}) @binding(${e+2})
                var<storage,read> morphTargetOpNormals: array<f32>;
            #endif
`}static getMorphTargetCalcVertex(){return`
            vertexPosition = blendMorphTargetPosition(i32(vertex.vIndex), vertexPosition);

            #if USE_MORPHNORMALS
                vertexNormal = blendMorphTargetNormal(i32(vertex.vIndex), vertexNormal);
            #endif
        `}}s(Je,"CsMain",`
        struct MorphTargetConfigData {
            morphBaseInfluence:f32,
            morphTargetCount:f32,
            totalVertexCount:f32,
            computeWorkGroupXY:f32,
        };

        @group(0) @binding(0) var<uniform> morphTargetConfig: MorphTargetConfigData;
        @group(0) @binding(1) var<storage, read> morphTargetInfluence : array<f32>;
        @group(0) @binding(2) var<storage, read> morphTargetPositions : array<f32>;
        @group(0) @binding(3) var<storage, read_write> morphTargetOpPositions : array<f32>;
        
        #if USE_MORPHNORMALS
            @group(0) @binding(4) var<storage, read> morphTargetNormals : array<f32>;
            @group(0) @binding(5) var<storage, read_write> morphTargetOpNormals : array<f32>;
        #endif
        
        @compute @workgroup_size( 8 , 8 , 1 )
        fn CsMain(@builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
        {
            let vertexIndex:i32 = i32(globalInvocation_id.y) * i32(morphTargetConfig.computeWorkGroupXY) + i32(globalInvocation_id.x);
        
            let morphTargetCount:i32 = i32(morphTargetConfig.morphTargetCount);
            let totalVertexCount:i32 = i32(morphTargetConfig.totalVertexCount);
            var vertexPosition:vec3<f32> = vec3<f32>(0.0);
            var vertexNormal:vec3<f32> = vec3<f32>(0.0);
            if(vertexIndex < totalVertexCount)
            {
                for(var i:i32 = 0; i < morphTargetCount; i ++){
                    let offset:i32 = (i * totalVertexCount + vertexIndex) * 3;
                    let morphPosition = vec3<f32>(morphTargetPositions[offset], morphTargetPositions[offset + 1], morphTargetPositions[offset + 2]);
                    vertexPosition += morphTargetInfluence[i] * morphPosition;
                }

                var writeOffset = vertexIndex * 3;
                //op position
                morphTargetOpPositions[writeOffset] = vertexPosition.x;
                morphTargetOpPositions[writeOffset + 1] = vertexPosition.y;
                morphTargetOpPositions[writeOffset + 2] = vertexPosition.z;

                #if USE_MORPHNORMALS
                    for(var i:i32 = 0; i < morphTargetCount; i ++){
                        let offset:i32 = (i * totalVertexCount + vertexIndex) * 3;
                        let morphNormal = vec3<f32>(morphTargetNormals[offset], morphTargetNormals[offset + 1], morphTargetNormals[offset + 2]);
                        vertexNormal += morphTargetInfluence[i] * morphNormal;
                    }

                    //op normal
                    morphTargetOpNormals[writeOffset] = vertexNormal.x;
                    morphTargetOpNormals[writeOffset + 1] = vertexNormal.y;
                    morphTargetOpNormals[writeOffset + 2] = vertexNormal.z;
                #endif
            }
        }
`);let Ct=function(n=16,t=16){var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),r=[],i;if(t=t||e.length,n)for(i=0;i<n;i++)r[i]=e[0|Math.random()*t];else{var a;for(r[8]=r[13]=r[18]=r[23]="-",r[14]="4",i=0;i<36;i++)r[i]||(a=0|Math.random()*16,r[i]=e[i==19?a&3|8:a])}return r.join("")},Ja=1e6,Ps=function(){return Ja++,Ja},Co=(...n)=>function(...t){n.forEach(e=>e.apply(this,t))};const J=class J{constructor(t=0,e=0){s(this,"x",0);s(this,"y",0);this.x=t,this.y=e}static getAngle(t,e){return Math.atan2(e.y-t.y,e.x-t.x)}static slerp(t,e,r){let i=new J,a=t.dot(e);if(a<0&&(e.x=-e.x,e.y=-e.y,a=-a),a>.9995)return i.x=t.x+r*(e.x-t.x),i.y=t.y+r*(e.y-t.y),i;let o=Math.acos(a),l=Math.sin(o),h=Math.sin((1-r)*o)/l,u=Math.sin(r*o)/l;return i.x=h*t.x+u*e.x,i.y=h*t.y+u*e.y,i}static lerp(t,e,r){return J.HELP_0.copyFrom(t),J.HELP_1.copyFrom(e),J.HELP_0.scale(r),J.HELP_1.scale(1-r),new J(J.HELP_0.x+J.HELP_1.x,J.HELP_0.y+J.HELP_1.y)}set(t=0,e=0){return this.x=t,this.y=e,this}distance(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}add(t,e){return e=e||new J,e.x=this.x+t.x,e.y=this.y+t.y,e}sub(t,e){return e=e||new J,e.x=this.x-t.x,e.y=this.y-t.y,e}scale(t){return this.x=this.x*t,this.y=this.y*t,this}multiply(t,e){return e=e||new J,e.x=this.x*t,e.y=this.y*t,e}multiplyScaler(t){return this.x*=t,this.y*=t,this}divide(t,e){return e=e||new J,e.x=this.x/t,e.y=this.y/t,e}neg(t){return t||(t=new J),t.x=-t.x,t.y=-t.y,t}abs(){return Math.sqrt(this.x*this.x+this.y*this.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}getAngle(t){return Math.atan2(t.y-this.y,t.x-this.x)}unt(t){t=t||new J;let e=this.abs();return t.x=this.x/e,t.y=this.y/e,t}angleTo(t){let e=t.x-this.x,r=t.y-this.y;return Math.atan2(r,e)}equals(t){return Math.abs(this.x-t.x)<1e-6&&Math.abs(this.y-t.y)<1e-6}pal(t){let e=this.unt(),r=t.unt();return e.equals(r)?1:e.equals(r.neg())?-1:0}clone(){return new J(this.x,this.y)}copyFrom(t){return this.x=t.x,this.y=t.y,this}dot(t){return this.x*t.x+this.y*t.y}normalize(){let t=this.abs();return this.x=this.x/t,this.y=this.y/t,this}addInPlace(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}};s(J,"HELP_0",new J),s(J,"HELP_1",new J),s(J,"HELP_2",new J),s(J,"ZERO",new J(0,0)),s(J,"SAFE_MAX",new J(Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)),s(J,"SAFE_MIN",new J(Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER));let Ae=J;const H=class H{constructor(t=0,e=0,r=0,i=0){s(this,"x",0);s(this,"y",0);s(this,"z",0);s(this,"w",1);this.x=t,this.y=e,this.z=r,this.w=i}get width(){return this.z}get height(){return this.w}static crossVectors(t,e,r){r=r||new H;var i=t.x,a=t.y,o=t.z,l=e.x,h=e.y,u=e.z;return r.x=a*u-o*h,r.y=o*l-i*u,r.z=i*h-a*l,r}static distance(t,e){let r=t.x-e.x,i=t.y-e.y,a=t.z-e.z,o=t.w-e.w;return Math.sqrt(r*r+i*i+a*a+o*o)}set(t,e,r,i){return this.x=t,this.y=e,this.z=r,this.w=i,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}copyFrom(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}clone(){return new H(this.x,this.y,this.z,this.w)}};s(H,"X_AXIS",new H(1,0,0)),s(H,"Y_AXIS",new H(0,1,0)),s(H,"Z_AXIS",new H(0,0,1)),s(H,"HELP_0",new H),s(H,"HELP_1",new H),s(H,"HELP_2",new H),s(H,"EPSILON",1e-5),s(H,"HELP_3",new H),s(H,"HELP_4",new H),s(H,"HELP_5",new H),s(H,"HELP_6",new H),s(H,"ZERO",new H),s(H,"ONE",new H(1,1,1,1)),s(H,"LEFT",new H(-1,0,0)),s(H,"RIGHT",new H(1,0,0)),s(H,"UP",new H(0,-1,0)),s(H,"DOWN",new H(0,1,0)),s(H,"BACK",new H(0,0,-1)),s(H,"FORWARD",new H(0,0,1));let K=H;var Ue=(n=>(n[n.Number=0]="Number",n[n.Vector2=1]="Vector2",n[n.Vector3=2]="Vector3",n[n.Vector4=3]="Vector4",n[n.Color=4]="Color",n[n.Float32Array=5]="Float32Array",n))(Ue||{});class lr{constructor(t){s(this,"size");s(this,"memoryInfo");s(this,"bindOnChange");s(this,"_data");s(this,"_type",Ue.Number);s(this,"_x",0);s(this,"_y",0);s(this,"_z",0);s(this,"_w",0);this.data=t}get data(){return this._data}set data(t){this._data=t,this._type=Ue.Number,t instanceof Ae?(this.size=2,this._x=t.x,this._y=t.y,this._type=Ue.Vector2):t instanceof g?(this.size=3,this._x=t.x,this._y=t.y,this._z=t.z,this._type=Ue.Vector3):t instanceof K?(this.size=4,this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._type=Ue.Vector4):t instanceof F?(this.size=4,this._x=t.r,this._y=t.g,this._z=t.b,this._w=t.a,this._type=Ue.Color):t instanceof Float32Array?(this.size=t.length,this._type=Ue.Float32Array):(this.size=1,this._x=t,this._data=t,this._type=Ue.Number)}getColor(t){return t?t.copyFrom(this._data):t=this._data,t}get color(){return new F(this._data.r,this._data.g,this._data.b,this._data.a)}set color(t){(this._x!=t.r||this._y!=t.g||this._z!=t.b||this._w!=t.a)&&(this._data.r=t.r,this._data.g=t.g,this._data.b=t.b,this._data.a=t.a,this._x=t.r,this._y=t.g,this._z=t.b,this._w=t.a,this.onChange())}get value(){return this._x}set value(t){this._x!=t&&(this._data=t,this._x=t,this.onChange())}get vector2(){return this._data}set vector2(t){(this._x!=t.x||this._y!=t.y)&&(this._data.x=t.x,this._data.y=t.y,this._x=t.x,this._y=t.y,this.onChange())}get vector3(){return this._data}set vector3(t){(this._x!=t.x||this._y!=t.y||this._z!=t.z)&&(this._data.x=t.x,this._data.y=t.y,this._data.z=t.z,this._x=t.x,this._y=t.y,this._z=t.z,this.onChange())}get vector4(){return this._data}set vector4(t){(this._x!=t.x||this._y!=t.y||this._z!=t.z||this._w!=t.w)&&(this._data.x=t.x,this._data.y=t.y,this._data.z=t.z,this._data.w=t.w,this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this.onChange())}onChange(){this.bindOnChange&&this.bindOnChange()}float32Array(t){this._data.set(t),this.onChange()}update(){switch(this._type){case Ue.Number:this.memoryInfo.dataBytes.setFloat32(0*Float32Array.BYTES_PER_ELEMENT,this._data,!0);break;case Ue.Vector2:this.memoryInfo.setVector2(0,this._data);break;case Ue.Vector3:this.memoryInfo.setVector3(0,this._data);break;case Ue.Vector4:this.memoryInfo.setVector4(0,this._data);break;case Ue.Color:this.memoryInfo.setColor(0,this._data);break;case Ue.Float32Array:this.memoryInfo.setFloat32Array(0,this._data);break}}}class Us{constructor(){s(this,"instanceID");s(this,"shaderVariant");s(this,"vsEntryPoint","main");s(this,"fsEntryPoint","main");s(this,"bindGroups");s(this,"shaderReflection");s(this,"defineValue");s(this,"constValues");s(this,"uniforms");s(this,"materialDataUniformBuffer");s(this,"_bufferDic");s(this,"_shaderChange",!0);s(this,"_valueChange",!1);this.instanceID=Ct(),this.defineValue={},this.constValues={},this.uniforms={},this._bufferDic=new Map}noticeShaderChange(){this._shaderChange=!0}noticeValueChange(){this._valueChange=!0}setStorageBuffer(t,e){this._bufferDic.has(t)?this._bufferDic.set(t,e):(this._bufferDic.set(t,e),this.noticeBufferChange(t))}setStructStorageBuffer(t,e){this._bufferDic.has(t)?(this._bufferDic.set(t,e),this.noticeBufferChange(t)):this._bufferDic.set(t,e)}setUniformBuffer(t,e){this._bufferDic.has(t)?(this._bufferDic.set(t,e),this.noticeBufferChange(t)):this._bufferDic.set(t,e)}setDefine(t,e){(this.defineValue[t]==null||this.defineValue[t]!=e)&&(this.defineValue[t]=e,this.noticeValueChange(),this.noticeShaderChange()),this.defineValue[t]=e}hasDefine(t){return this.defineValue[t]!=null}deleteDefine(t){delete this.defineValue[t],this.noticeShaderChange()}setUniformFloat(t,e){this.uniforms[t]?this.uniforms[t].value=e:(this.uniforms[t]=new lr(e),this.noticeValueChange())}setUniformVector2(t,e){this.uniforms[t]?this.uniforms[t].vector2=e:(this.uniforms[t]=new lr(e),this.noticeValueChange())}setUniformVector3(t,e){this.uniforms[t]?this.uniforms[t].vector3=e:this.uniforms[t]=new lr(e)}setUniformVector4(t,e){this.uniforms[t]?this.uniforms[t].vector4=e:this.uniforms[t]=new lr(e)}setUniformColor(t,e){this.uniforms[t]?this.uniforms[t].color=e:this.uniforms[t]=new lr(e)}setUniformArray(t,e){this.uniforms[t]?this.uniforms[t].float32Array(e):this.uniforms[t]=new lr(e)}setUniform(t,e){this.uniforms[t]?this.uniforms[t].data=e:this.uniforms[t]=new lr(e)}getUniform(t){return this.uniforms[t].data}getUniformFloat(t){return this.uniforms[t].data}getUniformVector2(t){return this.uniforms[t].data}getUniformVector3(t){return this.uniforms[t].data}getUniformVector4(t){return this.uniforms[t].data}getUniformColor(t){return this.uniforms[t].color}getBuffer(t){return this._bufferDic[t].data}noticeBufferChange(t){}applyUniform(){this.materialDataUniformBuffer&&this._valueChange&&this.materialDataUniformBuffer.apply()}destroy(t){}}var Ar=(n=>(n[n.u32=1]="u32",n[n.f32=1]="f32",n[n["vec2<f32>"]=2]="vec2<f32>",n[n["vec3<f32>"]=3]="vec3<f32>",n[n["vec4<f32>"]=4]="vec4<f32>",n[n.float32=1]="float32",n[n.float32x2=2]="float32x2",n[n.float32x3=3]="float32x3",n[n.float32x4=4]="float32x4",n))(Ar||{});let yo=[null,ci.float32,ci.float32x2,ci.float32x3,ci.float32x4],_o=`
        var<private> colorSet : array<vec3<f32>, 9> = array<vec3<f32>, 9>(
            vec3<f32>(1.0, 0.0, 0.0),
            vec3<f32>(1.0, 0.5, 0.0),
            vec3<f32>(0.5, 1.0, 0.0),
            vec3<f32>(0.0, 1.0, 0.0),
            vec3<f32>(0.0, 1.0, 0.5),
            vec3<f32>(0.0, 0.5, 1.0),
            vec3<f32>(0.0, 0.0, 1.0),
            vec3<f32>(0.5, 0.0, 1.0),
            vec3<f32>(1.0, 0.0, 0.5)
        );

        #if DEBUG_CLUSTER
        fn debugCluster(fragCoord:vec4<f32>) {
            #if USE_LIGHT
              var tileID : u32 = getClusterId3().z;
              let clusterDebug = vec4<f32>(colorSet[tileID % 9u], 1.0);
              ORI_FragmentOutput.color = clusterDebug ;
            #endif
          }
      
          fn debugClusterBox(fragCoord:vec4<f32>) {
            #if USE_LIGHT
              let clusterId3 : vec3<u32> = getClusterId3();
              let px = f32(clusterId3.x) / clustersUniform.clusterTileX ;
              let py = f32(clusterId3.y) / clustersUniform.clusterTileY ;
              let pz = f32(clusterId3.z) / clustersUniform.clusterTileZ ;
              ORI_FragmentOutput.color = vec4<f32>(px,py,pz, 1.0);

              var screenUV = ORI_VertexVarying.fragCoord.xy / vec2<f32>( globalUniform.windowWidth , globalUniform.windowHeight );
              ORI_FragmentOutput.color = vec4<f32>(screenUV.x,screenUV.y,0.0, 1.0);

              // let clusterId : u32 = getClusterIndex();
              // let cluster = clusterBuffer[clusterId];
        
              // let midPoint : vec3<f32> = (cluster.maxPoint.xyz - cluster.minPoint.xyz) * vec3<f32>(0.5);
              // let center : vec3<f32> = cluster.minPoint.xyz + midPoint;
              // let radius : f32 = length(midPoint) ;
        
              // let fragToBoundsCenter : vec3<f32> = ORI_VertexVarying.viewPosition.xyz - center;
              // let distToBoundsCenter : f32 = length(fragToBoundsCenter);
              // let normDist : f32 = distToBoundsCenter / radius;
              // ORI_FragmentOutput.color = vec4<f32>(normDist,normDist,normDist, 1.0);
            #endif
          }
      
          fn debugClusterLightCount(fragCoord:vec4<f32>){
            #if USE_LIGHT
            //LightIndex
              let cluster : LightIndex = getCluster();
              let lightCount : u32 = u32(cluster.count);
              let lightFactor : f32 = f32(lightCount) / f32(clustersUniform.maxNumLightsPerCluster);
              ORI_FragmentOutput.color =  mix(vec4<f32>(0.0, 0.0,0.0, 1.0), vec4<f32>(1.0, 1.0, 1.0, 1.0), vec4<f32>(lightFactor, lightFactor, lightFactor, lightFactor));
            #endif
          }
          #endif
    `;class wi{}s(wi,"sky_vs_frag_wgsl",`
    #include "WorldMatrixUniform"
    #include "GlobalUniform"

    struct VertexOutput {
      @location(auto) fragUV: vec2<f32>,
      @location(auto) vWorldPos: vec4<f32>,
      @location(auto) vWorldNormal: vec3<f32>,
      @builtin(position) member: vec4<f32>
    };

    var<private> ORI_VertexOut: VertexOutput ;

    @vertex
    fn main( 
      @builtin(instance_index) index : u32,
      @location(auto) position: vec3<f32>,
      @location(auto) normal: vec3<f32>,
      @location(auto) uv: vec2<f32>
    ) -> VertexOutput {
      ORI_VertexOut.fragUV = uv;
      let modelMat = models.matrix[u32(index)];
      let vm = globalUniform.viewMat * modelMat;
      let normalMatrix = mat3x3<f32>(vm[0].xyz,vm[1].xyz,vm[2].xyz);
	    ORI_VertexOut.vWorldNormal = normalize( normalMatrix * normal );
      ORI_VertexOut.vWorldPos = modelMat * vec4<f32>(position.xyz,1.0) ;

      var fixProjMat = globalUniform.projMat ;
      fixProjMat[2].z = 1.0 ;//99999.0 / (99999.0 - 1.0) ;
      fixProjMat[3].z = -1.0 ;//(-1.0 * 99999.0) / (99999.0 - 1.0) ;

      var fixViewMat = globalUniform.viewMat ;
      fixViewMat[3].x = 0.0 ;
      fixViewMat[3].y = 0.0 ;
      fixViewMat[3].z = 0.0 ;

      var clipPos = fixProjMat * fixViewMat * ORI_VertexOut.vWorldPos;
      ORI_VertexOut.member = clipPos;
      return ORI_VertexOut;
    }
  `),s(wi,"sky_fs_frag_wgsl",`
    #include "GlobalUniform"

    struct uniformData {
        exposure: f32,
        roughness: f32
    };

    struct FragmentOutput {
        @location(auto) o_Target: vec4<f32>,
        #if USE_WORLDPOS
          @location(auto) o_Position: vec4<f32>,
        #endif
        #if USEGBUFFER
          @location(auto) o_Normal: vec4<f32>,
          @location(auto) o_Material: vec4<f32>
        #endif
    };

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_cube<f32>;

    @group(2) @binding(0)
    var<uniform> global: uniformData;

    fn LinearToGammaSpace(linRGB: vec3<f32>) -> vec3<f32> {
      var linRGB1 = max(linRGB, vec3<f32>(0.0));
      linRGB1 = pow(linRGB1, vec3<f32>(0.4166666567325592));
      return max(((1.0549999475479126 * linRGB1) - vec3<f32>(0.054999999701976776)), vec3<f32>(0.0));
    }

    @fragment
    fn main(@location(auto) fragUV: vec2<f32>, @location(auto) vWorldPos: vec4<f32>, @location(auto) vWorldNormal: vec3<f32>) -> FragmentOutput {
        let maxLevel: u32 = textureNumLevels(baseMap);
        var textureColor:vec3<f32> = textureSampleLevel(baseMap, baseMapSampler, normalize(vWorldPos.xyz), global.roughness * f32(maxLevel) ).xyz;
        #if IS_HDR_SKY
        textureColor = LinearToGammaSpace(textureColor);
        #endif
        let o_Target: vec4<f32> =vec4<f32>(textureColor, 1.0) * globalUniform.skyExposure ;
        var normal_rgba8unorm = (vWorldNormal + 1.0) * 0.5;
        normal_rgba8unorm = clamp(normal_rgba8unorm, vec3<f32>(0.0), vec3<f32>(1.0));

        return FragmentOutput(
          o_Target,
          #if USE_WORLDPOS
              vWorldPos,
          #endif
          #if USEGBUFFER
              vec4<f32>(normal_rgba8unorm,0.0),
              vec4<f32>(0.0,1.0,0.0,0.0)
          #endif
        );
    }
    `);let Io=`
#include "BRDF_frag"
#include "ClusterLight"
#include "ShadowMapping_frag"

#if USE_IES_PROFILE
  #include "IESProfiles_frag"
#endif



const LUMEN = 10.764;



fn calcAttenuation( d : f32 ,  falloffStart : f32 ,  falloffEnd : f32)-> f32
{
    // Linear falloff.
    return saturate((falloffEnd-d) / (falloffEnd - falloffStart));
}

fn directLighting( albedo:vec3<f32>, N:vec3<f32>, V:vec3<f32>,  roughness:f32 , metallic:f32 , light:LightData , shadowBias:f32 ) -> vec3<f32> {
    var color = vec3<f32>(0.0) ;
    #if USE_LIGHT
      var L = -normalize(light.direction.xyz) ;
      let lightCC = pow( light.lightColor.rgb,vec3<f32>(2.2));
      var lightColor = getHDRColor( lightCC.rgb , light.linear )  ;
      var att = light.intensity / LUMEN ;
      if(light.castShadow>=0){
          #if USE_SHADOWMAPING
            for (var j: i32 = 0; j < 8; j += 1) {
                if(j == light.castShadow){
                  att *= shadowStrut.directShadowVisibility[j] ; 
                }
            }
          #endif
      }

      #if USE_LAMBERT
        color = vec3<f32>(1.0,1.0,1.0) ;
      #endif 
      
      #if USE_BRDF
        color = simpleBRDF(albedo,N,V,L,att,lightColor,roughness,metallic) ;
      #endif 
    #endif 
    return color;
}

fn directDulLighting( albedo:vec3<f32>, N:vec3<f32>, V:vec3<f32>,  roughness:f32 , metallic:f32 , light:LightData , shadowBias:f32 ) -> vec3<f32> {
  var color = vec3<f32>(0.0) ;
  #if USE_LIGHT
    var L = -normalize(light.direction.xyz) ;
    let lightCC = pow( light.lightColor.rgb,vec3<f32>(2.2));
    var lightColor = getHDRColor( lightCC.rgb , light.linear )  ;
    var att = light.intensity / LUMEN ;
    if(light.castShadow>=0){
        #if USE_SHADOWMAPING
          for (var j: i32 = 0; j < 8; j += 1) {
              if(j == light.castShadow){
                att *= shadowStrut.directShadowVisibility[j] ; 
              }
          }
        #endif
    }
    #if USE_LAMBERT
      color = vec3<f32>(1.0,1.0,1.0) ;
    #endif 
    
    #if USE_BRDF
      color = 0.85 * simpleBRDF(albedo,N,V,L,att,lightColor,0.85 * roughness,metallic) ;
      color += 0.15 * simpleBRDF(albedo,N,V,L,att,lightColor,0.15 * roughness,metallic) ;
    #endif 
  #endif 
  return color;
}

fn directHairLighting( albedo:vec3<f32>, N:vec3<f32>, V:vec3<f32>,  roughness:f32 , metallic:f32 , light:LightData , shadowBias:f32 ) -> vec3<f32> {
  var color = vec3<f32>(0.0) ;
  #if USE_LIGHT
    var L = -normalize(light.direction.xyz) ;
    let lightCC = pow( light.lightColor.rgb,vec3<f32>(2.2));
    var lightColor = getHDRColor( lightCC.rgb , light.linear )  ;
    var att = light.intensity / LUMEN ;
    if(light.castShadow>=0){
        #if USE_SHADOWMAPING
          for (var j: i32 = 0; j < 8; j += 1) {
              if(j == light.castShadow){
                att *= shadowStrut.directShadowVisibility[j] ; 
              }
          }
        #endif
    }
    #if USE_LAMBERT
      color = vec3<f32>(1.0,1.0,1.0) ;
    #endif 
    
    #if USE_BRDF
      color = 0.5 * simpleBRDF(albedo,N,V,L,att,lightColor,0.85 ,metallic) ;
      color += 0.5 * simpleBRDF(albedo,N,V,L,att,lightColor,0.15 ,metallic) ;
    #endif 
  #endif 
  return color;
}


fn pointLighting( albedo:vec3<f32>,WP:vec3<f32>, N:vec3<f32>, V:vec3<f32>, roughness:f32 , metallic:f32 ,light:LightData ) -> vec3<f32> {
    var color = vec3<f32>(0.0) ;
    let lightPos = light.position.xyz;
    var dir = lightPos.xyz - WP ;
    let dist = length(dir);
    if(dist != 0.0){
      dir *= 1.0 / dist ;
    }
    if( abs(dist) < light.range ){
        var L = dir ;
        var atten = 1.0 ;
        atten = 1.0 - smoothstep(0.0,light.range,dist) ;
        atten *= 1.0 / max(light.radius,0.001) * light.intensity / LUMEN;
        if( light.castShadow >= 0 )
        {
            #if USE_SHADOWMAPING
              // atten *= shadowStrut.pointShadows[light.castShadow] ; 
              for (var j: i32 = 0; j < 8; j += 1) {
                  if(j == light.castShadow){
                    atten *= shadowStrut.pointShadows[j] ; 
                  }
              }
            #endif
        }

        #if USE_IES_PROFILE
          atten *= getLightIESProfileAtt(WP,light);
        #endif

        var lightColor = light.lightColor.rgb  ;
        lightColor = getHDRColor(lightColor , light.linear )  ;

        #if USE_LAMBERT
          color = vec3<f32>(1.0,1.0,1.0) ;
        #endif 

        #if USE_BRDF
          color = (simpleBRDF(albedo,N,V,L,atten,lightColor,roughness,metallic))  ;
        #endif 
    } 
    return color ;
}

fn getDistanceAtten(  light:LightData , dist : f32 ) -> f32 {
  return 1.0 - smoothstep(0.0,light.range,dist) ;
}

fn spotLighting( albedo:vec3<f32>,WP:vec3<f32>, N:vec3<f32>, V:vec3<f32>, roughness:f32 , metallic:f32 ,light:LightData ) -> vec3<f32> {
    let lightPos = light.position.xyz;
    var dir = lightPos.xyz - WP ;
    let dist = length(dir) ;
    if(dist != 0.0){
      dir *= 1.0 / dist ;
    }
    var color = vec3<f32>(0.0) ;
    if( abs(dist) < light.range * 2.0 ){
        var L = dir ;
        let theta = dot(-L, normalize(light.direction));
        let angle = acos(theta) ;
        var atten = 1.0 ;
        var lightColor = light.lightColor.rgb  ;

        atten = 1.0 - smoothstep(0.0,light.range,dist) ;
        atten *= 1.0 / max(light.radius,0.1) * light.intensity / LUMEN;
        if(angle < light.outerCutOff){
          if(angle > light.innerCutOff){
            atten *= 1.0 - smoothstep(light.innerCutOff, light.outerCutOff, angle) ;
          }
        }else{
            atten = 0.0 ;
        }

        if( light.castShadow >= 0 )
        {
            #if USE_SHADOWMAPING
            for (var j: i32 = 0; j < 8; j += 1) {
                if(j == light.castShadow){
                  atten *= shadowStrut.pointShadows[j] ; 
                }
            }
          #endif
        }

        #if USE_IES_PROFILE
            atten *= getLightIESProfileAtt(WP,light);
        #endif

        lightColor = getHDRColor(lightColor , light.linear ) ;

        #if USE_LAMBERT
          color = vec3<f32>(1.0,0.5,1.0) ;
        #endif 

        #if USE_BRDF
          color = (simpleBRDF(albedo,N,V,L,atten,lightColor,roughness,metallic)) ;
        #endif 
    }
    return  color ;
}
`,So=`


fn applyQuaternion(position:vec3<f32>, q:vec4<f32>) -> vec3<f32>{
  let x:f32 = position.x;
  let y:f32 = position.y;
  let z:f32 = position.z;

  let qx:f32 = q.x;
  let qy:f32 = q.y;
  let qz:f32 = q.z;
  let qw:f32 = q.w;

  let ix:f32 = qw * x + qy * z - qz * y;
  let iy:f32 = qw * y + qz * x - qx * z;
  let iz:f32 = qw * z + qx * y - qy * x;
  let iw:f32 = -qx * x - qy * y - qz * z;

  var ret: vec3<f32>;
  ret.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  ret.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  ret.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

  return ret;
}

fn inverse( m:mat3x3<f32>) -> mat3x3<f32>{
  var a00 = m[0][0];
  var a01 = m[0][1];
  var a02 = m[0][2];
  var a10 = m[1][0];
  var a11 = m[1][1];
  var a12 = m[1][2];
  var a20 = m[2][0];
  var a21 = m[2][1];
  var a22 = m[2][2];

  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20;

  var det = a00 * b01 + a01 * b11 + a02 * b21 ;
  return mat3x3<f32>(
      vec3<f32>(b01/ det, (-a22 * a01 + a02 * a21)/ det, (a12 * a01 - a02 * a11)/ det),
      vec3<f32>(b11/ det, (a22 * a00 - a02 * a20)/ det, (-a12 * a00 + a02 * a10)/ det),
      vec3<f32>(b21/ det, (-a21 * a00 + a01 * a20)/ det, (a11 * a00 - a01 * a10)/ det)
  );
}

fn dir_to_faceId(pt:vec3<f32>) -> i32 {
    //**** nx px ny py nz pz
    var abs_x = abs(pt.x);
    var abs_y = abs(pt.y);
    var abs_z = abs(pt.z);
    var coord = max(max(abs_x, abs_y), abs_z);
    if(coord == -pt.x){  return 0;}
    if(coord == pt.x) { return 1;}

    if(coord == -pt.y){  return 2;}
    if(coord == pt.y) { return 3;}

    if(coord == -pt.z) { return 4;}
    return 5;
  }

  fn convert_xyz_to_cube_uv(x:f32, y:f32, z:f32 ) -> vec2<f32>
  {
    var dir = vec3<f32>(x, y, z);
    var absX = abs(dir.x);
    var absY = abs(dir.y);
    var absZ = abs(dir.z);

    var isXPositive = 0;
    if(dir.x > 0.0){isXPositive = 1;}
    var isYPositive = 0;
    if(dir.y > 0.0){isYPositive = 1;}
    var isZPositive = 0;
    if(dir.z > 0.0){isZPositive = 1;}

    var maxAxis:f32 = 0.0;
    var uc:f32 = 0.0;
    var vc:f32 = 0.0;

    // POSITIVE X
    if (isXPositive == 1 && absX >= absY && absX >= absZ) {
      // u (0 to 1) goes from +z to -z
      // v (0 to 1) goes from -y to +y
      maxAxis = absX;
      uc = -z;
      vc = y;
    }
    // NEGATIVE X
    if (isXPositive ==0 && absX >= absY && absX >= absZ) {
      // u (0 to 1) goes from -z to +z
      // v (0 to 1) goes from -y to +y
      maxAxis = absX;
      uc = z;
      vc = y;
    }
    // POSITIVE Y
    if (isYPositive==1 && absY >= absX && absY >= absZ) {
      // u (0 to 1) goes from -x to +x
      // v (0 to 1) goes from +z to -z
      maxAxis = absY;
      uc = x;
      vc = -z;
    }
    // NEGATIVE Y
    if (isYPositive ==0 && absY >= absX && absY >= absZ) {
      // u (0 to 1) goes from -x to +x
      // v (0 to 1) goes from -z to +z
      maxAxis = absY;
      uc = x;
      vc = z;
    }
    // POSITIVE Z
    if (isZPositive == 1&& absZ >= absX && absZ >= absY) {
      // u (0 to 1) goes from -x to +x
      // v (0 to 1) goes from -y to +y
      maxAxis = absZ;
      uc = x;
      vc = y;
    }
    // NEGATIVE Z
    if (isZPositive ==0 && absZ >= absX && absZ >= absY) {
      // u (0 to 1) goes from +x to -x
      // v (0 to 1) goes from -y to +y
      maxAxis = absZ;
      uc = -x;
      vc = y;
    }

    // Convert range from -1 to 1 to 0 to 1
    var u = 0.5f * (uc / maxAxis + 1.0f);
    var v = 0.5f * (vc / maxAxis + 1.0f);

    return vec2(u, v);
  }

    // Returns ±1
    fn signNotZero( v1:vec2<f32>) -> vec2<f32> {
        var v:vec2<f32> = v1;
        if(v.x >= 0.0){
            v.x = 1.0;
        }else{
            v.x = -1.0;
        }
        if(v.y >= 0.0){
            v.y = 1.0;
        }else{
            v.y= -1.0;
        }
        return v;
    }

    fn octEncode( v:vec3<f32> ) -> vec2<f32> {
        var l1norm = abs(v.x) + abs(v.y) + abs(v.z);
        var result = v.xy * (1.0 / l1norm);
        if (v.z < 0.0) {
            result = (1.0 - abs(result.yx)) * signNotZero(result.xy);
        }
        return result;
    }

    // Returns a unit vector. Argument o is an octahedral vector packed via octEncode,on the [-1, +1] square*/
    fn octDecode( o:vec2<f32> ) -> vec3<f32> {
        var v = vec3<f32>(o.x, o.y, 1.0 - abs(o.x) - abs(o.y));
        if (v.z < 0.0) {
            var tmp = (1.0 - abs(v.yx)) * signNotZero(v.xy);
            v.x = tmp.x;
            v.y = tmp.y;
        }
        return normalize(v);
    }

    fn Linear01Depth(z:f32,near:f32,far:f32)-> f32{
        let ZBufferZ = (-1.0+(far/near)) / far;
        let ZBufferW = near /far ;
        return 1.0 / (ZBufferZ * z + ZBufferW) ;
    }

    
    fn LinearizeDepth( depth:f32 , nearPlane:f32 , farPlane:f32 )-> f32 {
      var z = depth * 2.0 - 1.0;
      return (2.0 * nearPlane * farPlane) / (farPlane + nearPlane - z * (farPlane - nearPlane));
    }

    fn logDepth(depth : f32, far:f32) -> f32 {
      return log2(depth + 1.0) * 2.0 / (log(far + 1.0) / 0.6931471805599453) * 0.5;
    }

    fn log2Depth(depth:f32, near:f32, far:f32) -> f32 {
      let Fcoef:f32 = 2.0 / log2(far + 1.0);
      var result:f32 = (log2(max(1e-6, 1.0 + depth)) * Fcoef - 1.0);
      result = (1.0 + result) / 2.0;
      return result * depth;
    }

    fn log2DepthFixPersp(depth:f32, near:f32, far:f32) -> f32 {
      let flogz:f32 = 1.0 + depth;
      let Fcoef_half:f32 = (2.0 / log2(far + 1.0)) * 0.5;
      var result:f32 = log2(flogz) * Fcoef_half;
      result = (1.0 + result) / 2.0;
      return result;
    }


    fn QuaternionToMatrix(q: vec4<f32>) -> mat4x4<f32> {
      // If q is guaranteed to be a unit quaternion, s will always
      // be 1.  In that case, this calculation can be optimized out.
      //float norm = GetNorm (q);
      //float s = (norm > 0.0) ? 2.0/norm : 0;

      var result: mat4x4<f32>;
  
      // Precalculate coordinate products
      let x = q.x * 2.0;
      let y = q.y * 2.0;
      let z = q.z * 2.0;
      let xx = q.x * x;
      let yy = q.y * y;
      let zz = q.z * z;
      let xy = q.x * y;
      let xz = q.x * z;
      let yz = q.y * z;
      let wx = q.w * x;
      let wy = q.w * y;
      let wz = q.w * z;
  
      // Calculate 3x3 matrix from orthonormal basis
      result[0][0] = 1.0 - (yy + zz);
      result[0][1] = xy + wz;
      result[0][2] = xz - wy;
      result[0][3] = 0.0;
  
      result[1][0] = xy - wz;
      result[1][1] = 1.0 - (xx + zz);
      result[1][2] = yz + wx;
      result[1][3] = 0.0;
  
      result[2][0] = xz + wy;
      result[2][1] = yz - wx;
      result[2][2] = 1.0 - (xx + yy);
      result[2][3] = 0.0;
  
      result[3][0] = 0.0;
      result[3][1] = 0.0;
      result[3][2] = 0.0;
      result[3][3] = 1.0;

      return result;
    }

    fn MakeScaleMatrix(scale: vec3<f32>) -> mat4x4<f32> {
        return mat4x4<f32>(
          scale.x, 0.0, 0.0, 0.0,
          0.0, scale.y, 0.0, 0.0,
          0.0, 0.0, scale.z, 0.0,
          0.0, 0.0, 0.0, 1.0,
        );
    }

    fn MakeRotationMatrix(rotationQuaternion: vec4<f32>) -> mat4x4<f32> {
        return QuaternionToMatrix(rotationQuaternion);
    }

    fn MakeTranslationMatrix(translation: vec3<f32>) -> mat4x4<f32> {
        return mat4x4<f32>(
          1.0, 0.0, 0.0, 0.0,
          0.0, 1.0, 0.0, 0.0,
          0.0, 0.0, 1.0, 0.0,
          translation.x, translation.y, translation.z, 1.0,
        );
    }

    fn MakeMatrix4x4(scale: vec3<f32>, rotationQuaternion: vec4<f32>, translation: vec3<f32>) -> mat4x4<f32> {
        var scaleMat: mat4x4<f32> = MakeScaleMatrix(scale);
        var rotationMat: mat4x4<f32> = MakeRotationMatrix(rotationQuaternion);
        var translationMat: mat4x4<f32> = MakeTranslationMatrix(translation);
        return translationMat * scaleMat * rotationMat;
    }

    fn mixMatrix4x4(a: mat4x4<f32>, b: mat4x4<f32>, t:f32) -> mat4x4<f32> {
      return a * (1.0 - t) + b * t;
      // return mat4x4<f32>(
      //   mix(a[0], b[0], t),
      //   mix(a[1], b[1], t),
      //   mix(a[2], b[2], t),
      //   mix(a[3], b[3], t)
      // );
    }

    fn decodeDepth( color:vec4<f32> ) -> f32{
      var depth = 0.0 ;
      const bitShifts = vec4<f32>(1.0 / (256.0 * 256.0 * 256.0), 1.0 / (256.0 * 256.0), 1.0 / 256.0, 1.0); 
      depth = dot(color, bitShifts);
      return depth;
    }

    fn encodeDepth( depth:f32 ) -> vec4<f32>{
      const bitSh  = vec4<f32>(256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0);
      const bitMsk = vec4<f32>(0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0);
      var comp:vec4<f32>;
      comp  = depth * bitSh;
      comp  = fract(comp);
      comp -= comp.xxyz * bitMsk;
      return comp;
    }

    fn calculateBillboardMatrix2(eye:vec3f,pos:vec3f,up:vec3f) -> mat3x3<f32> {
      
      let zAxis: vec3f = -normalize(pos.xyz - eye);
      var xAxis: vec3f = cross(up,zAxis);
      xAxis = normalize(cross(zAxis,xAxis));
      let yAxis = normalize(cross(zAxis, xAxis));
      return mat3x3<f32>(xAxis, yAxis, zAxis);
    }

`,wo=`
          #if USE_CUSTOMUNIFORM
          #else
              struct MaterialUniform {
                  transformUV1:vec4<f32>,
                  transformUV2:vec4<f32>,

                  baseColor: vec4<f32>,
                  emissiveColor: vec4<f32>,
                  materialF0: vec4<f32>,
                  specularColor: vec4<f32>,
                  envIntensity: f32,
                  normalScale: f32,
                  roughness: f32,
                  metallic: f32,
                  ao: f32,

                  roughness_min: f32,
                  roughness_max: f32,
                  metallic_min: f32,
                  metallic_max: f32,
                  emissiveIntensity: f32,
                  alphaCutoff: f32,
                  ior: f32,
                  clearcoatColor: vec4<f32>,
                  clearcoatWeight: f32,
                  clearcoatFactor: f32,
                  clearcoatRoughnessFactor: f32,
              };
        #endif
      
        @group(2) @binding(0)
        var<uniform> materialUniform: MaterialUniform;
      `,bo=`


#if USE_CUSTOMUNIFORM
#else
    struct MaterialUniform {
      transformUV1:vec4<f32>,
      transformUV2:vec4<f32>,
      baseColor: vec4<f32>,
      alphaCutoff: f32,
    };
#endif


@group(2) @binding(0)
var<uniform> materialUniform: MaterialUniform;
`,Eo=`
    #include "Common_frag"
    #include "GlobalUniform"

    fn UnLit(){
        let alpha = ORI_ShadingInput.BaseColor.a ;
        ORI_FragmentOutput.color = vec4<f32>(ORI_ShadingInput.BaseColor.rgb * alpha , alpha) ;

        #if USE_WORLDPOS
            ORI_FragmentOutput.worldPos = vec4<f32>(ORI_VertexVarying.vWorldPos.xyzw);
        #endif

        #if USEGBUFFER
            var normal_rgba8unorm = (ORI_VertexVarying.vWorldNormal + 1.0) * 0.5;
            normal_rgba8unorm = clamp(normal_rgba8unorm, vec3<f32>(0.0), vec3<f32>(1.0));
            ORI_FragmentOutput.worldNormal = vec4<f32>(normal_rgba8unorm,1.0);
            ORI_FragmentOutput.material = vec4<f32>(1.0,1.0,0.0,1.0);
        #endif
    }

    fn debugFragmentOut(){

    }
`;class ii{static groupBindingAndFunctions(t,e){return`
            struct JointsMatrix {
                matrix : array<mat4x4<f32>>
            };

            @group(${t}) @binding(${e})
            var<storage, read> jointsMatrixIndexTable: array<f32>;

            @group(${t}) @binding(${e+1})
            var<storage, read> jointsInverseMatrix: JointsMatrix;

            @group(${t}) @binding(${e+2})
            var<storage, read> jointsIndexMapingTable: array<f32>;

            const MAX_JOINT_NUM = 8;
            fn getSkeletonWorldMatrix(joints: array<f32, MAX_JOINT_NUM>, weights: array<f32, MAX_JOINT_NUM>, num: u32) -> mat4x4<f32> {
                var result: mat4x4<f32>;
                for(var i: u32 = 0; i < num; i = i + 1) {
                    let jointId = i32(joints[i]);
                    let jointIndex = u32(jointsIndexMapingTable[jointId]);
                    let jointMatrixIndex = u32(jointsMatrixIndexTable[jointIndex]);
                    let joint = models.matrix[jointMatrixIndex] * jointsInverseMatrix.matrix[jointId] * weights[i];
                    result += joint;
                }
                return result;
            }

            fn getSkeletonWorldMatrix_4(joints: vec4<f32>, weights: vec4<f32>) -> mat4x4<f32> {
                return getSkeletonWorldMatrix(array<f32, MAX_JOINT_NUM>(
                    joints.x, joints.y, joints.z, joints.w,
                    0, 0, 0, 0,
                ), array<f32, MAX_JOINT_NUM>(
                    weights.x, weights.y, weights.z, weights.w,
                    0, 0, 0, 0,
                ), 4);
            }
    
            fn getSkeletonWorldMatrix_8(joints0: vec4<f32>, weights0: vec4<f32>, joints1: vec4<f32>, weights1: vec4<f32>) -> mat4x4<f32> {
                return getSkeletonWorldMatrix(array<f32, MAX_JOINT_NUM>(
                    joints0.x, joints0.y, joints0.z, joints0.w,
                    joints1.x, joints1.y, joints1.z, joints1.w,
                ), array<f32, MAX_JOINT_NUM>(
                    weights0.x, weights0.y, weights0.z, weights0.w,
                    weights1.x, weights1.y, weights1.z, weights1.w,
                ), 8);
            }
        `}}let To=`
    var<private> PI: f32 = 3.14159265359;
    #if USE_METAHUMAN
        ${Je.getMorphTargetShaderBinding(3,0)}
        ${ii.groupBindingAndFunctions(3,2)} 
    #else
        #if USE_MORPHTARGETS
            ${Je.getMorphTargetShaderBinding(3,0)}
        #endif

        #if USE_SKELETON
            ${ii.groupBindingAndFunctions(3,0)} 
        #endif
    #endif

    struct VertexAttributes{
        @builtin(instance_index) index : u32,
        @location(auto) position: vec3<f32>,
        @location(auto) normal: vec3<f32>,
        @location(auto) uv: vec2<f32>,
        @location(auto) TEXCOORD_1: vec2<f32>,

        #if USE_METAHUMAN
            #if USE_TANGENT
                @location(auto) TANGENT: vec4<f32>,
                @location(auto) joints0: vec4<f32>,
                @location(auto) weights0: vec4<f32>,
                #if USE_JOINT_VEC8
                    @location(auto) joints1: vec4<f32>,
                    @location(auto) weights1: vec4<f32>,
                    @location(auto) vIndex: f32,
                #else
                    @location(auto) vIndex: f32,
                #endif
            #else
                @location(auto) joints0: vec4<f32>,
                @location(auto) weights0: vec4<f32>,
                #if USE_JOINT_VEC8
                    @location(auto) joints1: vec4<f32>,
                    @location(auto) weights1: vec4<f32>,
                    @location(auto) vIndex: f32,
                #else
                    @location(auto) vIndex: f32,
                #endif
            #endif
        #else
            #if USE_TANGENT
                @location(auto) TANGENT: vec4<f32>,
            #endif

            #if USE_SKELETON
                #if USE_TANGENT
                    @location(auto) joints0: vec4<f32>,
                    @location(auto) weights0: vec4<f32>,
                    #if USE_JOINT_VEC8
                        @location(auto) joints1: vec4<f32>,
                        @location(auto) weights1: vec4<f32>,
                    #endif
                #else
                    @location(auto) joints0: vec4<f32>,
                    @location(auto) weights0: vec4<f32>,
                    #if USE_JOINT_VEC8
                        @location(auto) joints1: vec4<f32>,
                        @location(auto) weights1: vec4<f32>,
                    #endif
                #endif
            #endif

            #if USE_MORPHTARGETS
                #if USE_TANGENT
                    @location(auto) vIndex: f32,
                #else
                    @location(auto) vIndex: f32,
                #endif
            #endif

        #endif
    }

    struct VertexOutput {
    @location(auto) index: f32,
    @location(auto) varying_UV0: vec2<f32>,
    @location(auto) varying_UV1: vec2<f32>,
    @location(auto) varying_ViewPos: vec4<f32>,
    @location(auto) varying_Clip: vec4<f32>,
    @location(auto) varying_WPos: vec4<f32>,
    @location(auto) varying_WNormal: vec3<f32>,
    @location(auto) varying_Color: vec4<f32>,

    #if USE_SHADOWMAPING
        @location(auto) varying_ShadowPos: vec4<f32>,
    #endif

    #if USE_TANGENT
        @location(auto) varying_Tangent: vec4<f32>,
    #endif
   

    @builtin(position) member: vec4<f32>
    };

    var<private> ORI_VertexOut: VertexOutput ;

    fn ORI_Vert(vertex:VertexAttributes){
    var vertexPosition = vertex.position;
    var vertexNormal = vertex.normal;

    #if USE_METAHUMAN
        ${Je.getMorphTargetCalcVertex()}    
        #if USE_JOINT_VEC8
            let skeletonNormal = getSkeletonWorldMatrix_8(vertex.joints0, vertex.weights0, vertex.joints1, vertex.weights1);
            ORI_MATRIX_M *= skeletonNormal ;
        #else
            let skeletonNormal = getSkeletonWorldMatrix_4(vertex.joints0, vertex.weights0);
            ORI_MATRIX_M *= skeletonNormal ;
        #endif
    #else 
        #if USE_MORPHTARGETS
            ${Je.getMorphTargetCalcVertex()}    
        #endif

        #if USE_SKELETON
            #if USE_JOINT_VEC8
                let skeletonNormal = getSkeletonWorldMatrix_8(vertex.joints0, vertex.weights0, vertex.joints1, vertex.weights1);
                ORI_MATRIX_M *= skeletonNormal ;
            #else
                let skeletonNormal = getSkeletonWorldMatrix_4(vertex.joints0, vertex.weights0);
                ORI_MATRIX_M *= skeletonNormal ;
            #endif
        #endif
    #endif
    
    ORI_NORMALMATRIX = transpose(inverse( mat3x3<f32>(ORI_MATRIX_M[0].xyz,ORI_MATRIX_M[1].xyz,ORI_MATRIX_M[2].xyz) ));
   
    #if USE_TANGENT
        ORI_VertexOut.varying_Tangent = vec4f(normalize(ORI_NORMALMATRIX * vertex.TANGENT.xyz),vertex.TANGENT.w)  ;
    #endif

    var worldPos = (ORI_MATRIX_M * vec4<f32>(vertexPosition.xyz, 1.0));
    var viewPosition = ORI_MATRIX_V * worldPos;
    var clipPosition = ORI_MATRIX_P * viewPosition ;

    #if USE_LOGDEPTH
        clipPosition.z = log2Depth(clipPosition.w, globalUniform.near, globalUniform.far);
    #endif

    ORI_CameraWorldDir = normalize(ORI_CAMERAMATRIX[3].xyz - worldPos.xyz) ;

    ORI_VertexOut.index = f32(vertex.index) ;

    ORI_VertexOut.varying_UV0 = vertex.uv.xy ;

    ORI_VertexOut.varying_UV1 = vertex.TEXCOORD_1.xy;

    ORI_VertexOut.varying_ViewPos = viewPosition ;
    ORI_VertexOut.varying_Clip = clipPosition ;
    ORI_VertexOut.varying_WPos = worldPos ;
    ORI_VertexOut.varying_WPos.w = f32(vertex.index);
    ORI_VertexOut.varying_WNormal = normalize(ORI_NORMALMATRIX * vertexNormal.xyz) ;

    ORI_VertexOut.member = clipPosition ;
    }
`,Bo=`
struct MaterialUniform {
  transformUV1:vec4<f32>,
  transformUV2:vec4<f32>,
  baseColor: vec4<f32>,
  rectClip: vec4<f32>,
  alphaCutoff: f32,
};

@group(2) @binding(0)
var<uniform> materialUniform: MaterialUniform;
`,Do=`
    struct IrradianceVolumeData {
        //0
        orientationIndex:f32,
            hysteresis:f32,
            OctRTSideSize:f32,
            OctRTMaxSize:f32,

            //1
            startX:f32,
            startY:f32,
            startZ:f32,
            ProbeSpace:f32,

            //2
            gridXCount:f32,
            gridYCount:f32,
            gridZCount:f32,
            maxDistance:f32,

            //3
            depthSharpness:f32,
            ProbeSourceTextureSize:f32,
            ProbeSize:f32,
            bounceIntensity:f32,

            //4
            probeRoughness:f32,
            normalBias:f32,
            irradianceChebyshevBias:f32,
            rayNumber:f32,

            //5
            irradianceDistanceBias:f32,
            indirectIntensity:f32,
            ddgiGamma:f32,
            lerpHysteresis:f32,
            //6

            debugX:f32,
            debugY:f32,
            debugZ:f32,
            slot0:f32,

            //..
            v7:vec4<f32>,
    }
`,Ro=`
    #include "MathShader"
    #include "FastMathShader"
    #include "InstanceUniform"

    var<private> ORI_MATRIX_P: mat4x4<f32>;
    var<private> ORI_MATRIX_V: mat4x4<f32>;
    var<private> ORI_MATRIX_M: mat4x4<f32>;
    var<private> ORI_MATRIX_PV: mat4x4<f32>;
    var<private> ORI_MATRIX_PVInv: mat4x4<f32>;
    var<private> ORI_MATRIX_World: mat4x4<f32>;
    var<private> ORI_CAMERAMATRIX: mat4x4<f32>;
    var<private> ORI_NORMALMATRIX: mat3x3<f32>;
    var<private> ORI_CameraWorldDir: vec3<f32>;
    var<private> ORI_ViewDir: vec3<f32>;

    var<private> TIME: vec4<f32>;
    var<private> MOUSE: vec4<f32>;
    var<private> SCREEN: vec4<f32>;

    var<private> ProjectionParams: vec4<f32>;

    fn vertex_inline(vertex:VertexAttributes){
        TIME.x = globalUniform.frame;
        TIME.y = globalUniform.time;
        TIME.z = globalUniform.delta;

        MOUSE.x = globalUniform.mouseX;
        MOUSE.y = globalUniform.mouseY;

        SCREEN.x = globalUniform.windowWidth;
        SCREEN.y = globalUniform.windowHeight;

        ProjectionParams.x = globalUniform.near;
        ProjectionParams.y = globalUniform.far;
        ProjectionParams.z = 1.0 + 1.0 / globalUniform.far;

        ORI_MATRIX_P = globalUniform.projMat ;
        ORI_MATRIX_V = globalUniform.viewMat ;
        ORI_MATRIX_PV = ORI_MATRIX_P * ORI_MATRIX_V ;
        ORI_MATRIX_PVInv = globalUniform.pvMatrixInv ;
        ORI_CAMERAMATRIX = globalUniform.cameraWorldMatrix ;

        ORI_MATRIX_M = models.matrix[u32(vertex.index)];
            
        #if USE_INSTANCEDRAW
            let modelID = instanceDrawID.matrixIDs[vertex.index];
            ORI_MATRIX_M = models.matrix[modelID];
        #endif
    }
`,Mo=`
  #include "GlobalUniform"
  #include "FragmentVarying"
  #include "ColorPassFragmentOutput"
  #include "ShadingInput"

  var<private> ORI_FragmentOutput: FragmentOutput;
  var<private> ORI_VertexVarying: FragmentVarying;
  var<private> ORI_ShadingInput: ShadingInput;
  var<private> viewDir:vec3<f32>;
  var<private> modelIndex:u32;
  @fragment
  fn FragMain( vertex_varying:FragmentVarying ) -> FragmentOutput {
    modelIndex = u32(round(vertex_varying.index)) ; 

    ORI_VertexVarying = vertex_varying;
    ORI_FragmentOutput.color = vec4<f32>(1.0, 0.0, 0.0, 1.0);
    viewDir = normalize(globalUniform.CameraPos.xyz - ORI_VertexVarying.vWorldPos.xyz) ;
    #if USE_WORLDPOS
      ORI_FragmentOutput.worldPos = ORI_VertexVarying.vWorldPos;
    #endif
    #if USEGBUFFER
      ORI_FragmentOutput.worldNormal = vec4<f32>(ORI_ShadingInput.Normal.rgb ,1.0); 
      ORI_FragmentOutput.material = vec4<f32>(0.0,1.0,0.0,0.0);
    #endif
    frag();
    
    #if USE_DEBUG
      debugFragmentOut();
    #endif

    #if USE_OUTDEPTH
      #if USE_LOGDEPTH
        ORI_FragmentOutput.out_depth = log2DepthFixPersp(ORI_VertexVarying.fragPosition.w, globalUniform.near, globalUniform.far);
      #else
        ORI_FragmentOutput.out_depth = ORI_ShadingInput.FragDepth ;
      #endif
    #endif

    return ORI_FragmentOutput ;
  }


`,Po=`
    #include "WorldMatrixUniform"
    #include "VertexAttributes_vert"
    #include "GlobalUniform"
    #include "Inline_vert"
    @vertex
    fn VertMain( vertex:VertexAttributes ) -> VertexOutput {
        vertex_inline(vertex);
        vert(vertex);
        return ORI_VertexOut ;
    }
`,Uo=`
    @group(1) @binding(auto)
    var brdflutMapSampler: sampler;
    @group(1) @binding(auto)
    var brdflutMap: texture_2d<f32>;
`,Lo=`
    @group(1) @binding(auto)
    var prefilterMapSampler: sampler;
    @group(1) @binding(auto)
    var prefilterMap: texture_cube<f32>;
    @group(1) @binding(auto)
    var envMapSampler: sampler;
    @group(1) @binding(auto)
    var envMap: texture_cube<f32>;
`;class Rt{}s(Rt,"Cascades",4);let Ls=`

  struct GlobalUniform {
    projMat: mat4x4<f32>,
    viewMat: mat4x4<f32>,
    cameraWorldMatrix: mat4x4<f32>,
    pvMatrixInv : mat4x4<f32>,
    shadowMatrix: array<mat4x4<f32>, 8u>,
    csmShadowBias: vec4<f32>,
    csmMatrix: array<mat4x4<f32>,${Rt.Cascades}>,
    
    shadowLights:mat4x4<f32>,

    CameraPos: vec3<f32>,
    frame: f32,

    time: f32,
    delta: f32,
    shadowBias: f32,
    skyExposure: f32,

    renderPassState:f32,
    quadScale: f32,
    hdrExposure: f32,
    renderState_left: i32,

    renderState_right: i32,
    renderState_split: f32,
    mouseX: f32,
    mouseY: f32,

    windowWidth: f32,
    windowHeight: f32,
    near: f32,
    far: f32,

    pointShadowBias: f32,
    shadowMapSize: f32,
    shadowSoft: f32,
    enableCSM:f32,

    csmMargin:f32,
    nDirShadowStart: i32,
    nDirShadowEnd: i32,
    nPointShadowStart: i32,

    nPointShadowEnd: i32,
    empty1: i32,
    empty2: i32,
    empty3: i32,

    frustumPlanes: array<vec4f, 6u>,
  };

  @group(0) @binding(0)
  var<uniform> globalUniform: GlobalUniform;
`,Oo=`
    #if USE_INSTANCEDRAW
        struct InstanceUniform {
            matrixIDs : array<i32>
        };
        @group(2) @binding(7)
        var<storage, read> instanceDrawID : InstanceUniform;
    #endif
`,Os=`
    struct Uniforms {
        matrix : array<mat4x4<f32>>
    };

    @group(0) @binding(1)
    var<storage, read> models : Uniforms;
`,No=`
  fn pow2(  x : f32 ) -> f32
  {
      return x * x;
  }

  fn pow2v3(  x : vec3f ) -> vec3f
  {
      return x * x;
  }


  fn pow3(  x : f32 ) -> f32
  {
      var xx = x*x;
      return x * xx;
  }

  fn pow4(  x : f32 ) -> f32
  {
      var xx = x*x;
      return xx * xx;
  }

  fn pow5(x: f32) -> f32 {
      var x2 = x * x;
      return x2 * x2 * x;
  }

  fn rcp( x:f32 ) -> f32
  {
      return 1.0 / x;
  }

  fn rsqrt3( a : vec3<f32> ) -> vec3<f32>
  {
    return pow(a, vec3<f32>(-0.5));
  }

  fn rsqrt( a : f32 ) -> f32
  {
    return pow(a, -0.5);
  }

  fn squareF( a : f32 ) -> f32
  {
    return a * a;
  }

  fn squareV2( a : vec2f ) -> vec2f
  {
    return a * a;
  }

  fn squareV3( a : vec3f ) -> vec3f
  {
    return a * a;
  }

  fn sqrtFast(  x : f32  ) -> f32 
  {
    var i = i32(x);
    i = 0x1FBD1DF5 + (i / 2 );
    return f32(i);
  }

  fn lengthFast(  v :vec3<f32> ) -> f32
  {
    var LengthSqr = dot(v,v);
    return sqrtFast( LengthSqr );
  }

  fn asinFast( x:f32 )-> f32
  {
      return (0.5 * PI) - acosFast(x);
  }

  fn acosFast( inX: f32 ) -> f32
  {
      var x = abs(inX);
      var res = -0.156583 * x + (0.5 * PI);
      res *= sqrt(1.0 - x);

    if(inX >= 0.0){
      return res ;
    }else{
      return PI - res ;
    }
  }

  fn acosFast4( inX : f32 )-> f32
  {
    var x1 = abs(inX);
    var x2 = x1 * x1;
    var x3 = x2 * x1;
    var s = 0.0 ;

    s = -0.2121144 * x1 + 1.5707288;
    s = 0.0742610 * x2 + s;
    s = -0.0187293 * x3 + s;
    s = sqrt(1.0 - x1) * s;

    // acos function mirroring
    // check per platform if compiles to a selector - no branch neeeded
    if(inX >= 0.0){
      return s ;
    }else{
      return PI - s ;
    }
  }
`,Fo=`

    fn perturbNormal(  worldPos:vec3<f32>,  surf_norm:vec3<f32>,  mapN:vec3<f32> , normalScale:f32 , face:f32 ) -> vec3<f32> {
        var q0 = vec3<f32>( dpdx( worldPos.x ), dpdx( worldPos.y ), dpdx( worldPos.z ) );
        var q1 = vec3<f32>( dpdy( worldPos.x ), dpdy( worldPos.y ), dpdy( worldPos.z ) );
        var st0 = dpdx( ORI_VertexVarying.fragUV0.xy );
        var st1 = dpdy( ORI_VertexVarying.fragUV0.xy );
        var N = surf_norm;
        var q0perp = cross( N, q0 );
        var q1perp = cross( q1, N );

        // #if USE_TANGENT
        //     var T = ORI_VertexVarying.TANGENT.xyz ;
        // #else
            var T = q1perp * st0.x + q0perp * st1.x;
        // #endif
        
        var B = q1perp * st0.y + q0perp * st1.y;

        var det = max( dot( T, T ), dot( B, B ) );
        var scale = 1.0 ;
        if( det != 0.0 ){
            scale = inverseSqrt( det ) ;
        }

        // #if USE_TANGENT
        //     scale = scale * ORI_VertexVarying.TANGENT.w ;
        // #endif

        scale *= normalScale;
        return normalize( (T * ( -mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z ) * face ) ;
    }

    fn unpackNormalMap( normal : vec3<f32> ) -> vec3<f32>
    {
        var normalTex = vec3<f32>( normal.xyz * 2.0 - 1.0 ) ;
        return (normalTex);
    }

    fn unPackNormal(normal : vec3<f32> , height:f32 ) -> vec3<f32>{
        var face = 1.0 ;
        if(ORI_VertexVarying.face){
            face = 1.0 ;
        }else{
            face = -1.0 ;
        }

        #if USE_RGNORMAL
            return unPackRGNormal(normal,height,face);
        #else
            var n = normal ;
            #if USE_NORMALFILPY
            n.y = 1.0 - n.y ; 
            #endif
            
            var mapNormal: vec3<f32> = n ;//unpackNormalMap(n) ;
            return perturbNormal(ORI_VertexVarying.vWorldPos.xyz , ORI_VertexVarying.vWorldNormal.xyz , mapNormal , height , face  ) ;
        #endif
    }

    fn unPackRGNormal(normal : vec3<f32> , height:f32 , face:f32) -> vec3<f32> {
        var d = normal.rg * 2.0 - 1.0 ;
        var l = 1.0 - saturate(dot(d,d));
        var s = sqrt(l);
        var rg = d * height ; 
        var mapNormal = vec3<f32>(rg,s);
        var outN = perturbNormal(ORI_VertexVarying.vWorldPos.xyz,ORI_VertexVarying.vWorldNormal,mapNormal,1.0,face) ;
        return outN ;
    }
`,ko=`
    struct FragmentVarying {
        @location(auto) index: f32,
        @location(auto) fragUV0: vec2<f32>,
        @location(auto) fragUV1: vec2<f32>,
        @location(auto) viewPosition: vec4<f32>,
        @location(auto) fragPosition: vec4<f32>,
        @location(auto) vWorldPos: vec4<f32>,
        @location(auto) vWorldNormal: vec3<f32>,
        @location(auto) vColor: vec4<f32>,

        #if USE_SHADOWMAPING
            @location(auto) vShadowPos: vec4<f32>,
        #endif

        #if USE_TANGENT
            @location(auto) TANGENT: vec4<f32>,
        #endif
        
        @builtin(front_facing) face: bool,
        @builtin(position) fragCoord : vec4<f32>
    };
`,Ns=`
    struct FragmentOutput {
        @location(auto) color: vec4<f32>,
        #if USE_WORLDPOS
            @location(auto) worldPos: vec4<f32>,
        #endif
        #if USEGBUFFER
            @location(auto) worldNormal: vec4<f32>,
            @location(auto) material: vec4<f32>,
        #endif

        #if USE_OUTDEPTH
            @builtin(frag_depth) out_depth: f32
        #endif
    };
`,Qo=`
    struct ShadingInput{
        BaseColor:vec4<f32>,

        Roughness:f32,
        Metallic:f32,
        Specular:f32,

        EmissiveColor:vec4<f32>,
        SurfaceColor:vec4<f32>,

        Normal:vec3<f32>,
        HairNormal:vec3<f32>,
        Tangent:vec4<f32>,

        WorldPositionOffset:vec3<f32>,
        AmbientOcclusion:f32,

        PixelDepthOffset:f32,

        Opacity:f32,
        OpacityMask:f32,

        Refraction:f32,
        FragDepth:f32,

        SSS:vec3f,
    }
`,Go=`
    #if USE_IES_PROFILE 
        @group(1) @binding(auto)
        var iesTextureArrayMapSampler : sampler;
        @group(1) @binding(auto)
        var iesTextureArrayMap: texture_2d_array<f32> ;
    #endif

    fn getLightIESProfileAtt( wPos : vec3<f32> , light:LightData ) -> f32
    {
        #if USE_IES_PROFILE 
            let tangent = vec3<f32>(1.0,0.0,0.0);
            let lightBitangent = normalize( cross( tangent, light.direction ) );
            let lightMatrix = mat4x4( vec4<f32>(light.direction.xyz, 0.0), vec4<f32>(lightBitangent.xyz, 0.0), vec4<f32>(tangent.xyz, 0.0), vec4<f32>(0.0, 0.0, 0.0, 1.0) );
            let lightMatrixInv = transpose(lightMatrix);
            let lightPos = light.position.xyz;
            let l = lightPos - wPos; 
            let toLight = normalize(l);
            let localToLight = (vec4<f32>(toLight.xyz, 0.0) * lightMatrixInv).xyz;
            let dotProd = dot(toLight, light.direction);
            let angle = asin(dotProd);
            let normAngle = (angle / PI) + 0.5 ;
            let tangentAngle = atan2( -localToLight.z, -localToLight.x ); 
            let normTangentAngle = tangentAngle / (PI * 2.0) + 0.5 ;
            if(light.ies >= 0.0){
                return textureSampleLevel(iesTextureArrayMap, iesTextureArrayMapSampler, vec2<f32>(normAngle , normTangentAngle) , i32(light.ies) , 0.0).r ;
            }else{
                return 1.0;
            }
        #else 
            return 1.0;
        #endif
    }

`,zo=`
    @group(1) @binding(auto) var shadowMapSampler: sampler;
    @group(1) @binding(auto) var shadowMap: texture_depth_2d_array;
    @group(1) @binding(auto) var pointShadowMapSampler: sampler;
    @group(1) @binding(auto) var pointShadowMap: texture_depth_cube_array;

    struct ShadowStruct{
      directShadowVisibility: array<f32, 8>,
      pointShadows: array<f32, 8>,
    }
    var<private> shadowStrut: ShadowStruct ;

    fn useShadow(){
        shadowStrut.directShadowVisibility = array<f32, 8>( 1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0) ;
        shadowStrut.pointShadows = array<f32, 8>( 1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0) ;
        #if USE_SHADOWMAPING
          directShadowMaping(globalUniform.shadowBias);
          pointShadowMapCompare(globalUniform.pointShadowBias);
        #endif
    }

    fn calcBasicBias(shadowWorldSize:f32, shadowDepthTexSize:f32, near:f32, far:f32) -> f32{
      var bias = shadowWorldSize / shadowDepthTexSize;
      bias = bias / (far - near);
      return bias * 2.0;
    }

    const dirCount:i32 = 8 ;
    const pointCount:i32 = 8 ;
    const csmCount:i32 = ${Rt.Cascades} ;
    var<private> csmLevel:i32 = -1;
    fn directShadowMaping(shadowBias: f32)  {

        let enableCSM:bool = globalUniform.enableCSM > 0.5;
        for (var i: i32 = 0; i < dirCount ; i = i + 1) {
          if( i >= globalUniform.nDirShadowStart && i < globalUniform.nDirShadowEnd ){
            let ldx = globalUniform.shadowLights[u32(i) / 4u][u32(i) % 4u];
            let light = lightBuffer[u32(ldx)] ;
            var shadowIndex = i32(light.castShadow);
            var visibility = 1.0;
            var shadowMatrix:mat4x4<f32>;
            #if USE_CSM
              if(enableCSM && shadowIndex == 0){
                var totalWeight = 0.0;
                visibility = 0.0;
                var validCount = 0;
                for(var csm:i32 = 0; csm < csmCount; csm ++){
                  var csmShadowBias = globalUniform.csmShadowBias[csm];
                  shadowMatrix = globalUniform.csmMatrix[csm];
                  let csmShadowResult = directShadowMapingIndex(light, shadowMatrix, csm, csmShadowBias);
                  if(csmShadowResult.y < 0.5){
                    validCount ++;

                    var uv = 2.0 * csmShadowResult.zw - vec2<f32>(1.0);
                    uv = saturate(vec2<f32>(1.0) - abs(uv));
                    uv /= clamp(globalUniform.csmMargin, 0.01, 0.5);
                    var weight:f32 = min(uv.x, 1.0);
                    weight = min(weight, uv.y);

                    if(validCount == 1 && csm == csmCount - 1){
                      visibility = 1.0 - weight + csmShadowResult.x * weight;
                      totalWeight = 1.0;
                    }else{
                      weight *= 1.0 - totalWeight;
                      visibility += csmShadowResult.x * weight;
                      totalWeight += weight;
                    }
                    // if(weight < 1.0){
                    //   visibility += 0.1;
                    // }
                    if(validCount >= 2 || totalWeight >= 0.99){
                      csmLevel = csm;
                      break;
                    }
                  }
                }
                totalWeight += 0.0001;
                if(validCount == 0){
                  visibility = 1.0;
                }else{
                  visibility = visibility / totalWeight ;
                }
              }else{
                shadowMatrix = globalUniform.shadowMatrix[shadowIndex];
                if(enableCSM) {
                  shadowIndex += csmCount - 1;
                }
                visibility = directShadowMapingIndex(light, shadowMatrix, shadowIndex, shadowBias).x;
              }
            #else
              shadowMatrix = globalUniform.shadowMatrix[shadowIndex];
              visibility = directShadowMapingIndex(light, shadowMatrix, shadowIndex, shadowBias).x;
            #endif 
            shadowStrut.directShadowVisibility[i] = visibility;
          }
        }

    }

    fn directShadowMapingIndex(light:LightData, matrix:mat4x4<f32>, depthTexIndex:i32, shadowBias:f32) -> vec4<f32>
    {
      var visibility = 1.0;
      var isOutSideArea:f32 = 1.0;
      var varying_shadowUV:vec2<f32> = vec2<f32>(0.0);
      var shadowPosTmp = matrix * vec4<f32>(ORI_VertexVarying.vWorldPos.xyz, 1.0);
      var shadowPos = shadowPosTmp.xyz / shadowPosTmp.w;
      varying_shadowUV = shadowPos.xy * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5, 0.5);
      if (varying_shadowUV.x <= 1.0
        && varying_shadowUV.x >= 0.0
        && varying_shadowUV.y <= 1.0
        && varying_shadowUV.y >= 0.0
        && shadowPosTmp.z <= 1.0
        && shadowPosTmp.z >= 0.0)
      {
        visibility = 0.0;
        isOutSideArea = 0.0;
        var uvOnePixel = 1.0 / vec2<f32>(globalUniform.shadowMapSize);
        var totalWeight = 0.0;
        var NoL = (dot(normalize(ORI_VertexVarying.vWorldNormal), normalize(-light.direction)));
        let v = max(NoL, 0.0) ;
        var bias = shadowBias / v;
        for (var y = -1; y <= 1; y++) {
          for (var x = -1; x <= 1; x++) {
            var offset = vec2<f32>(f32(x), f32(y)) * uvOnePixel;
            
            // visibility += textureSampleCompare(shadowMap, shadowMapSampler, varying_shadowUV + offset, depthTexIndex, shadowPos.z - bias);
            var depth = textureSampleLevel(shadowMap, shadowMapSampler, varying_shadowUV + offset, depthTexIndex, 0);
            if ((shadowPos.z - bias ) < depth) {
              visibility += 1.0 ;
            }
            totalWeight += 1.0;
          }
        }
        visibility /= totalWeight;
        visibility += 0.001;
      }
      return vec4<f32>(visibility, isOutSideArea, varying_shadowUV);
    }

    fn pointShadowMapCompare(shadowBias: f32){
      let worldPos = ORI_VertexVarying.vWorldPos.xyz;
      let offset = 0.1;

      for (var i: i32 = 0; i < pointCount ; i = i + 1) {
        if( i >= globalUniform.nPointShadowStart && i < globalUniform.nPointShadowEnd ){
          let ldx = globalUniform.shadowLights[u32(i) / 4u][u32(i) % 4u];
          let light = lightBuffer[u32(ldx)] ;

          #if USE_SHADOWMAPING
              let lightPos = light.position.xyz;
              var shadow = 0.0;
              let frgToLight = worldPos - lightPos.xyz;
              var dir: vec3<f32> = normalize(frgToLight);
              var len = length(frgToLight);
              var bias = max(shadowBias * globalUniform.far * (1.0 - dot(ORI_ShadingInput.Normal, dir)), 0.005);
  
          #if USE_PCF_SHADOW
              let samples = 4.0;
              let sampleOffset = offset / (samples * 0.5);
              for (var x: f32 = -offset; x < offset; x += sampleOffset) {
                for (var y: f32 = -offset; y < offset; y += sampleOffset) {
                  for (var z: f32 = -offset; z < offset; z += sampleOffset) {
                    let offsetDir = normalize(dir.xyz + vec3<f32>(x, y, z));
                    var depth = textureSampleLevel(pointShadowMap, pointShadowMapSampler, offsetDir, light.castShadow, 0);
                    depth *= globalUniform.far;
                    if ((len - bias) > depth) {
                      shadow += 1.0 * dot(offsetDir, dir.xyz);
                    }
                  }
                }
                shadow = min(max(shadow / (samples * samples * samples), 0.0), 1.0);
            #endif
  
          #if USE_SOFT_SHADOW
              let vDis = length(globalUniform.CameraPos.xyz - worldPos.xyz);
              let sampleRadies = globalUniform.shadowSoft;
              let samples = 20;
              for (var j: i32 = 0; j < samples; j += 1) {
                let offsetDir = normalize(dir.xyz + sampleOffsetDir[j] * sampleRadies);
                var depth = textureSampleLevel(pointShadowMap, pointShadowMapSampler, offsetDir, light.castShadow, 0);
                depth *= globalUniform.far;
                if ((len - bias) > depth) {
                  shadow += 1.0 * dot(offsetDir, dir.xyz);
                }
              }
              shadow = min(max(shadow / f32(samples), 0.0), 1.0);
          #endif
  
          #if USE_HARD_SHADOW
              var depth = textureSampleLevel(pointShadowMap, pointShadowMapSampler, dir.xyz, light.castShadow, 0);
              depth *= globalUniform.far;
              if ((len - bias) > depth) {
                shadow = 1.0;
              }
          #endif
              for (var j = 0; j < pointCount ; j+=1 ) {
                  if(i32(light.castShadow) == j){
                    shadowStrut.pointShadows[j] = 1.0 - shadow ;
                  }
              }
          #endif
        }
        }
    }

    #if USE_SOFT_SHADOW
      var<private>sampleOffsetDir : array<vec3<f32>, 20> = array<vec3<f32>, 20>(
        vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, -1.0, 1.0), vec3<f32>(-1.0, -1.0, 1.0), vec3<f32>(-1.0, 1.0, 1.0),
        vec3<f32>(1.0, 1.0, -1.0), vec3<f32>(1.0, -1.0, -1.0), vec3<f32>(-1.0, -1.0, -1.0), vec3<f32>(-1.0, 1.0, -1.0),
        vec3<f32>(1.0, 1.0, 0.0), vec3<f32>(1.0, -1.0, 0.0), vec3<f32>(-1.0, -1.0, 0.0), vec3<f32>(-1.0, 1.0, 0.0),
        vec3<f32>(1.0, 0.0, 1.0), vec3<f32>(-1.0, 0.0, 1.0), vec3<f32>(1.0, 0.0, -1.0), vec3<f32>(-1.0, 0.0, -1.0),
        vec3<f32>(0.0, 1.0, 1.0), vec3<f32>(0.0, -1.0, 1.0), vec3<f32>(0.0, -1.0, -1.0), vec3<f32>(0.0, 1.0, -1.0),
      );
    #endif
`,Vo=`
#include "IrradianceVolumeData_frag"
    struct IrradianceField {
        probeStartPosition: vec4<f32>,
        probeCounts:vec4<f32>,
        probeStep:f32,
        irradianceTextureWidth:f32,
        irradianceTextureHeight:f32,
        irradianceProbeSideLength:f32,
    };

    @group(1) @binding(auto)
    var irradianceMapSampler: sampler;
    @group(1) @binding(auto)
    var irradianceMap: texture_2d<f32>;
    @group(1) @binding(auto)
    var irradianceDepthMapSampler: sampler;
    @group(1) @binding(auto)
    var irradianceDepthMap: texture_2d<f32>;
    @group(2) @binding(7)
    var<uniform> irradianceData : IrradianceVolumeData ;

    var<private> irradianceFieldSurface: IrradianceField;
    var<private> energyPreservation: f32 = 0.85;
    var<private> quaternion:vec4<f32> = vec4<f32>(0.0, -0.7071067811865475, 0.7071067811865475, 0.0);

    fn getIrradianceFieldSurface() -> IrradianceField{
        let data = irradianceData ;
        irradianceFieldSurface.probeStartPosition = vec4<f32>(data.startX, data.startY, data.startZ, 0.0);
        irradianceFieldSurface.probeCounts = vec4<f32>(data.gridXCount, data.gridYCount, data.gridZCount, 0.0);
        irradianceFieldSurface.probeStep = data.ProbeSpace;
        irradianceFieldSurface.irradianceTextureWidth = data.OctRTMaxSize;
        irradianceFieldSurface.irradianceTextureHeight = data.OctRTMaxSize;
        irradianceFieldSurface.irradianceProbeSideLength = data.OctRTSideSize;
        return irradianceFieldSurface;
    }

    fn rotateDir(n:vec3<f32>) -> vec3<f32>{
       return normalize(applyQuaternion(-n, quaternion));
    }

    fn square1f(v:f32) -> f32 {
        return v * v ;
     }

   fn square(v:vec3<f32>) -> vec3<f32>{
      return v*v;
   }

    fn getIrradiance() -> vec4<f32>{
        var irradiance = sampleIrradianceField();
        var outerVolumeFactor:f32 = getOuterVolume(irradianceFieldSurface, ORI_VertexVarying.vWorldPos.xyz);
        irradiance *= outerVolumeFactor;
       return irradiance ;
    }
    
    fn debugProbe(id:i32) -> vec4<f32>{
        getIrradianceFieldSurface();
        var direction = normalize(ORI_VertexVarying.vWorldNormal);
        direction = applyQuaternion(-direction, quaternion);
        var probeTextureUV : vec2<f32> = textureCoordFromDirection(normalize(direction),
            id,
            irradianceFieldSurface.irradianceTextureWidth,
            irradianceFieldSurface.irradianceTextureHeight,
            irradianceFieldSurface.irradianceProbeSideLength);

        var probeIrradiance: vec4<f32> = textureSampleLevel(irradianceMap, irradianceMapSampler, probeTextureUV ,0.0);
        return probeIrradiance;
    }
    
    fn debugProbeDepth(id:i32) -> vec4<f32>{
        getIrradianceFieldSurface();
        var direction = normalize(ORI_VertexVarying.vWorldNormal);
        direction = applyQuaternion(-direction, quaternion);
        var probeTextureUV : vec2<f32> = textureCoordFromDirection(normalize(direction),
            id,
            irradianceFieldSurface.irradianceTextureWidth,
            irradianceFieldSurface.irradianceTextureHeight,
            irradianceFieldSurface.irradianceProbeSideLength);
        
        var probeIrradiance: vec4<f32> = textureSampleLevel(irradianceDepthMap, irradianceDepthMapSampler, probeTextureUV ,0.0);
        probeIrradiance.x = probeIrradiance.x / irradianceData.maxDistance;
        probeIrradiance.y = 0.0;
        probeIrradiance.z = 0.0;
        probeIrradiance.w = 1.0;
        return probeIrradiance;
    }
    
    fn getOuterVolume(L:IrradianceField, position:vec3<f32>) -> f32{
        let halfWidth:vec3<f32> = 0.5 * (L.probeCounts.xyz - 1.0) * L.probeStep;
        let edgeWidth:vec3<f32> = halfWidth + L.probeStep;
        let centerPosition:vec3<f32> = halfWidth + L.probeStartPosition.xyz;
        let clampPos = min(edgeWidth, abs(position - centerPosition));
        
        let factorX = getOuterAxis(clampPos.x, edgeWidth.x, L.probeStep);
        let factorY = getOuterAxis(clampPos.y, edgeWidth.y, L.probeStep);
        let factorZ = getOuterAxis(clampPos.z, edgeWidth.z, L.probeStep);
        return factorX * factorY * factorZ;
    }
    
    fn getOuterAxis(current:f32, edge:f32, space:f32) -> f32{
        return clamp((edge - current) / space, 0.0, 1.0);
    }

    fn getBaseGridCoord(L:IrradianceField, X:vec3<f32>) -> vec3<i32> {
        var offsetIndex = (X - L.probeStartPosition.xyz) / irradianceFieldSurface.probeStep;
        return clamp(vec3<i32>(offsetIndex.xyz), vec3<i32>(0), vec3<i32>(L.probeCounts.xyz) - 1);
    }

    fn gridCoordToProbeIndex(L:IrradianceField, grid:vec3<i32>) -> i32
    {
        return grid.x + i32(L.probeCounts.x) * grid.z + grid.y * i32(L.probeCounts.z * L.probeCounts.x);
    }

    fn gridCoordToPosition(L:IrradianceField, grid:vec3<i32>) -> vec3<f32>
    {
        var pos:vec3<f32> = vec3<f32>(grid.xyz) * L.probeStep + L.probeStartPosition.xyz;
        return pos;
    }

    fn textureCoordFromDirection(dir:vec3<f32>, probeIndex:i32, width:f32, height:f32, sideLength:f32) -> vec2<f32>
    {
        var uv = getWriteOctUVByID(dir, u32(probeIndex), sideLength) ;
        uv.x = uv.x / irradianceFieldSurface.irradianceTextureWidth;
        uv.y = uv.y / irradianceFieldSurface.irradianceTextureHeight;
        return uv ;
    }

    fn getWriteOctUVByID(dir:vec3<f32> , probeID:u32, size: f32) -> vec2<f32>
    {
        var blockCount = u32(irradianceFieldSurface.probeCounts.x * irradianceFieldSurface.probeCounts.z) ;
        var offsetX = (probeID % blockCount) % u32(irradianceFieldSurface.probeCounts.x) ;
        var offsetY = u32(irradianceFieldSurface.probeCounts.z - 1.0) - (probeID % blockCount) / u32(irradianceFieldSurface.probeCounts.x) ;
        var offsetZ = probeID / blockCount ;

        var pixelCoord = (( octEncode(dir) + 1.0 ) * 0.5) * vec2<f32>(size,size) ;

        var blockOffset = vec2<f32>(0.0);
        blockOffset.x = f32(offsetX) * size;
        blockOffset.y = f32(offsetY) * size + f32(offsetZ) * irradianceFieldSurface.probeCounts.z * size;

        let mapHeight = u32(irradianceFieldSurface.irradianceTextureHeight);
        var probeCounts:vec3<f32> = irradianceFieldSurface.probeCounts.xyz;

        var gridOffsetFrom = vec2<i32>(blockOffset) + 1;
        var gridOffsetTo = offsetByCol(gridOffsetFrom, size, mapHeight, probeCounts);

        pixelCoord = pixelCoord + vec2<f32>(gridOffsetTo - 1) + vec2<f32>(vec2<i32>(vec2<f32>(gridOffsetTo) / size) * 2);

        return pixelCoord + 1.0 ;
    }

    fn offsetByCol(pixelCoord0:vec2<i32>, octSideSize:f32, mapHeight:u32, counts:vec3<f32>) -> vec2<i32>
    {
      var pixelCoord = pixelCoord0;
      let blockSize:vec2<i32> = vec2<i32>(i32(octSideSize * counts.x),  i32(octSideSize * counts.z));
      let blockSizeYBorder:i32 = i32((octSideSize + 2.0) * counts.z);
      let blockMaxRowBorder:i32 = i32(mapHeight) / blockSizeYBorder;
      let pixelCountYMax:i32 = blockMaxRowBorder * i32(octSideSize * counts.z);
      let col:i32 = pixelCoord.y / pixelCountYMax;
      pixelCoord.x = col * i32(octSideSize * counts.x) + pixelCoord.x;
      pixelCoord.y = pixelCoord.y % pixelCountYMax;
      return pixelCoord;
    }

    var<private> wpNormal:vec3<f32> ;
    fn sampleIrradianceField() -> vec4<f32>{
        wpNormal = ORI_ShadingInput.Normal.xyz ;
        var wo:vec3<f32> = ORI_CameraWorldDir ;
        var wsN:vec3<f32> = normalize(wpNormal);
        var direction:vec3<f32> = wpNormal;
        var worldPosition: vec3<f32> = ORI_VertexVarying.vWorldPos.xyz;
   
        getIrradianceFieldSurface();

        let surfaceBias = (wsN + 3.0 * wo) * irradianceData.normalBias ;

        var irradiance = vec3<f32>(0.0, 0.0, 0.0);
        var accumulatedWeights = 0.0;
        var biasedWorldPosition = (worldPosition + surfaceBias);

        var baseProbeCoords: vec3<i32> = getBaseGridCoord(irradianceFieldSurface, worldPosition);
        
        var baseProbeWorldPosition: vec3<f32> = gridCoordToPosition(irradianceFieldSurface, baseProbeCoords) ;
        
        var gridSpaceDistance = (biasedWorldPosition - baseProbeWorldPosition);

        // alpha is how far from the floor(currentVertex) position. on [0, 1] for each axis.
        var alpha: vec3<f32> = clamp(gridSpaceDistance / (irradianceFieldSurface.probeStep), vec3<f32>(0.0), vec3<f32>(1.0));
        // let irradianceDir = rotateDir(wsN.xyz);
        // Iterate over adjacent probe cage
        for (var i:i32 = 0; i < 8; i = i + 1) {
            var adjacentProbeOffset : vec3<i32> = vec3<i32>(i, i32(f32(i) * 0.5), i32(f32(i) * 0.25)) & vec3<i32>(1);
            var adjacentProbeCoords: vec3<i32> = clamp(baseProbeCoords + adjacentProbeOffset, vec3<i32>(0),  vec3<i32>(irradianceFieldSurface.probeCounts.xyz) - 1) ;
            
            var adjacentProbeIndex :i32 = gridCoordToProbeIndex(irradianceFieldSurface, adjacentProbeCoords);
            var adjacentProbeWorldPosition :vec3<f32> = gridCoordToPosition(irradianceFieldSurface, adjacentProbeCoords) ;//+ (wsN + 3.0 * w_o) * globalUniform.normalBias;
         
            var worldPosToAdjProbe = normalize(adjacentProbeWorldPosition - worldPosition);
            var biasedPosToAdjProbe = normalize(adjacentProbeWorldPosition - biasedWorldPosition);
            var biasedPosToAdjProbeDist = length(adjacentProbeWorldPosition - biasedWorldPosition);

            let trilinear = max(vec3<f32>(0.001), mix(1.0 - alpha, alpha, vec3<f32>(adjacentProbeOffset)));
            let trilinearWeight = (trilinear.x * trilinear.y * trilinear.z);
            var weight = 1.0;

            var wrapShading = (dot(worldPosToAdjProbe, direction) + 1.0) * 0.5;
            weight *= (wrapShading * wrapShading) + 0.2;

            var depthDir = -biasedPosToAdjProbe;//probe - world
            depthDir = applyQuaternion(depthDir, quaternion);
            var probeTextureUV : vec2<f32> = textureCoordFromDirection(depthDir.xyz,
                adjacentProbeIndex,
                irradianceFieldSurface.irradianceTextureWidth,
                irradianceFieldSurface.irradianceTextureHeight,
                irradianceFieldSurface.irradianceProbeSideLength);

            var filteredDistance : vec2<f32> = 2.0 * textureSampleLevel(irradianceDepthMap, irradianceDepthMapSampler, probeTextureUV,0.0).rg ;
           
            var variance = abs((filteredDistance.x * filteredDistance.x) - filteredDistance.y);

            var chebyshevWeight = 1.0;
            if(biasedPosToAdjProbeDist > filteredDistance.x ) // occluded
            {
                var v = biasedPosToAdjProbeDist - filteredDistance.x ;
                chebyshevWeight = variance / (variance + (v * v));
                // Increase the contrast in the weight
                chebyshevWeight = max((chebyshevWeight * chebyshevWeight * chebyshevWeight), 0.0);
            }

            weight *= max(0.05, chebyshevWeight);
            weight = max(0.000001, weight);

            let crushThreshold = 0.2;
            if (weight < crushThreshold)
            {
                weight *= (weight * weight) * (1.0 / (crushThreshold * crushThreshold));
            }

            weight *= trilinearWeight;
            
            //worldPosToAdjProbe
            let rotateDir = applyQuaternion(-direction, quaternion);
            probeTextureUV = textureCoordFromDirection((rotateDir),
            adjacentProbeIndex,
            irradianceFieldSurface.irradianceTextureWidth,
            irradianceFieldSurface.irradianceTextureHeight,
            irradianceFieldSurface.irradianceProbeSideLength);

            var probeIrradiance: vec3<f32> = textureSampleLevel(irradianceMap, irradianceMapSampler, probeTextureUV ,0.0).xyz;

            var exponent =  irradianceData.ddgiGamma * 0.5;
            probeIrradiance = pow(probeIrradiance, vec3<f32>(exponent));
            
            irradiance += (weight * probeIrradiance);
            accumulatedWeights += weight;
        }

        if(accumulatedWeights == 0.0){
            return vec4<f32>(0.0, 0.0, 0.0,1.0);
        }

        irradiance *= (1.0 / accumulatedWeights);   
        irradiance *= irradiance;                   

        irradiance *= 6.2831853071795864;
        irradiance *= irradianceData.indirectIntensity;
        return vec4<f32>(irradiance,1.0) ;
    }

`,Ho=`
#include "Clearcoat_frag"
    #include "EnvMap_frag"
    #include "BrdfLut_frag"
    #include "ColorUtil_frag"
    
    struct FragData {
        Ao: f32,
        Metallic: f32,
        Roughness: f32,

        Albedo: vec4<f32>,
        Emissive: vec3<f32>,
        Specular: vec3<f32>,

        N: vec3<f32>,
        V: vec3<f32>,
        R: vec3<f32>,
        T: vec3<f32>,

        F0: vec3<f32>,
        F: vec3<f32>,
        KS: vec3<f32>,
        KD: vec3<f32>,

        Alpha: f32,
        Shadow: f32,
        Indirect: f32,
        Reflectance: f32,

        NoV: f32,
        FaceDirection:f32,

        ClearcoatRoughness:f32,
        EnvColor: vec3<f32>,
        Irradiance: vec3<f32>,

        LightChannel: vec3<f32>
    };

    var<private> fragData: FragData;

    struct BxDFContext
    {
        NoV : f32 ,
        NoL : f32 ,
        VoL : f32 ,
        NoH : f32 ,
        HoL : f32 ,
        VoH : f32
    };

    fn getContext( N:vec3<f32>, V:vec3<f32>, H:vec3<f32>, L:vec3<f32> ) -> BxDFContext
    {
        var Context:BxDFContext ;
        Context.NoL = saturate(dot(N, L));
        Context.NoV = saturate(dot(N, V));
        Context.VoL = saturate(dot(V, L));
        Context.NoH = saturate(dot(N, H));
        Context.VoH = saturate(dot(V, H));
        Context.HoL = saturate(dot(H, L));
        return Context ;
    }

    // convert roughness to mipmapLevel
    fn roughnessToMipmapLevel( roughness: f32 , mipmapCount:i32 ) -> f32{
        let level = roughness * (1.7 - 0.7 * roughness );
        return level * f32(mipmapCount);
    }

    fn IORToF0(ior:f32)->f32{
        var dc = ior - 1.0 ;
        dc *= dc ;
        var dt = ior + 1.0 ;
        dt *= dt ;
        return dc / dt ;
    }

    fn Fd90( NoL:f32, roughness:f32) -> f32
    {
        return (2.0 * NoL * roughness) + 0.4;
    }

    fn KDisneyTerm( NoL:f32, NoV:f32 , roughness:f32) -> f32
    {
        return (1.0 + Fd90(NoL, roughness) * pow(1.0 - NoL, 5.0)) * (1.0 + Fd90(NoV, roughness) * pow(1.0 - NoV, 5.0));
    }

    fn FresnelSchlick( NoV:f32,  F0:vec3<f32>) -> vec3<f32>
    {
        return F0 + (1.0 - F0) * pow(1.0 - NoV, 5.0);
    }

    fn FresnelTerm( cosA:f32,  F0:vec3<f32>) -> vec3<f32>
    {
        let t = pow5( 1.0 - cosA );
        return F0 + (1.0 - F0) * t;
    }

    fn FresnelLerp( cosA:f32, F0:vec3<f32> , F90:vec3<f32>) -> vec3<f32>
    {
        let t = pow5( 1.0 - cosA );
        return mix( F0 ,F90,t ) ;
    }

    fn FresnelSchlickRoughness( NoV:f32,  F0:vec3<f32>,  roughness:f32) -> vec3<f32>
    {
        return F0 + (max(vec3(roughness), F0) - F0) * pow(1.0 - NoV, 5.0);
    }

    fn DistributionGGX( NdotH:f32 ,  roughness:f32 ) -> f32
    {
        let alpha = roughness * roughness;
        let alpha2 = roughness * roughness;

        let NdotH2 = NdotH * NdotH;

        let nom   = alpha2;
        var denom = (NdotH2 * (alpha2 - 1.0) + 1.0);
        denom = PI * denom * denom;

        return nom / denom;
    }

    // [Heitz 2014, "Understanding the Masking-Shadowing Function in Microfacet-Based BRDFs"]
    fn Vis_SmithJoint( NoV : f32 ,  NoL : f32 ,  a2 : f32) -> f32
    {
        var Vis_SmithV = NoL * sqrt(NoV * (NoV - NoV * a2) + a2);
        var Vis_SmithL = NoV * sqrt(NoL * (NoL - NoL * a2) + a2);
        return 0.5 * rcp(Vis_SmithV + Vis_SmithL);
    }

    fn GeometrySchlickGGX( NdotV : f32 , roughness : f32 ) -> f32
    {
        //roughness compute ks
        let r = (roughness + 1.0);
        let k = (r*r) / 8.0;

        let nom   = NdotV;
        let denom = NdotV * (1.0 - k) + k;
        
        return nom / denom;
    }
    
    fn GeometrySmith( NdotV:f32 , NdotL:f32 , roughness : f32) -> f32
    {
        // let NdotV = max(dot(N, V), 0.0);
        // let NdotL = max(dot(N, L), 0.0);
        let ggx1 = GeometrySchlickGGX(NdotV, roughness);
        let ggx2 = GeometrySchlickGGX(NdotL, roughness);
        return ggx1 * ggx2;
    }

    fn GeometryAttenuationGGXSmith( NdotL:f32,  NdotV:f32,  roughness:f32) -> f32
    {
        var NdotL2 = NdotL * NdotL;
        var NdotV2 = NdotV * NdotV;
        var kRough2 = roughness * roughness + 0.0001;

        var ggxL = (2.0 * NdotL) / (NdotL + sqrt(NdotL2 + kRough2 * (1.0 - NdotL2)));
        var ggxV = (2.0 * NdotV) / (NdotV + sqrt(NdotV2 + kRough2 * (1.0 - NdotV2)));

        return ggxL * ggxV;
    }

    fn colorLinear( colorVector:vec3<f32> ) -> vec3<f32>
    {
        var linearColor = pow(colorVector.rgb, vec3<f32>(2.2));
        return linearColor;
    }

    fn computeFresnelSchlick( NoV:f32 , F0:vec3<f32>) -> vec3<f32>
    {
        return F0 + (1.0 - F0) * pow(clamp(1.0 - NoV,0.0,1.0), 5.0);
    }

    fn computeFresnelSchlickRoughness(NoV:f32 , F0:vec3<f32>,  roughness:f32) -> vec3<f32>
    {
        return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow(clamp(1.0 - fragData.NoV,0.0,1.0), 5.0);
    }

    fn computeDistributionGGX( N:vec3<f32>,  H:vec3<f32>,  roughness:f32) -> f32
    {
        var alpha = roughness * roughness;
        var alpha2 = alpha * alpha; 

        var NdotH = saturate(dot(N, H));
        var NdotH2 = NdotH * NdotH;

        return (alpha2) / (PI * (NdotH2 * (alpha2 - 1.0) + 1.0) * (NdotH2 * (alpha2 - 1.0) + 1.0));
    }

    fn D_GGX( NoH:f32,  roughness:f32 ) -> f32
    {
        var d = ( NoH * roughness - NoH ) * NoH + 1.0;	// 2 mad
        return roughness / ( PI*d*d );					// 4 mul, 1 rcp
    }

    fn computeGeometryAttenuationGGXSmith( NdotL:f32 ,  NdotV:f32,  roughness:f32) -> f32
    {
        var NdotL2 = NdotL * NdotL;
        var NdotV2 = NdotV * NdotV;
        var kRough2 = roughness * roughness + 0.0001;

        var ggxL = (2.0 * NdotL) / (NdotL + sqrt(NdotL2 + kRough2 * (1.0 - NdotL2)));
        var ggxV = (2.0 * NdotV) / (NdotV + sqrt(NdotV2 + kRough2 * (1.0 - NdotV2)));

        return ggxL * ggxV;
    }

    fn Vis_Smith(  NoL:f32 ,  NoV:f32,  a2:f32 )-> f32
    {
        var Vis_SmithV = NoV + sqrt( NoV * (NoV - NoV * a2) + a2 );
        var Vis_SmithL = NoL + sqrt( NoL * (NoL - NoL * a2) + a2 );
        return rcp( Vis_SmithV * Vis_SmithL );
    }

    fn simpleBRDF( albedo:vec3<f32>, N:vec3<f32>, V:vec3<f32>,L:vec3<f32>,att:f32,lightColor:vec3<f32>,roughness:f32 ,metallic:f32)-> vec3<f32>{
        let H = normalize(V + L);
        let Context:BxDFContext = getContext(N,V,H,L);
        let alpha = roughness ;//pow(roughness,5.0) ;
        let F0 = mix(vec3<f32>(materialUniform.materialF0.rgb), albedo , metallic);
        let D = DistributionGGX( Context.NoH , alpha);
        let G = GeometrySmith(Context.NoV,Context.NoL, alpha );
        let F = FresnelSchlick(Context.VoH, vec3<f32>(F0));
        let specular = ( D * G * F ) / (4.0 * Context.NoV * Context.NoL + 0.001);
        
        // let kS = exp2( (-5.55473 * Context.HoL - 6.98316) * Context.HoL );
        let kS = F ;
        var kd = 1.0 - kS ;
        kd *= 1.0 - metallic ;

        #if USE_SRGB_ALBEDO
            var diffuse = kd ;
        #else 
            var diffuse = kd * (albedo.rgb / PI ) ;
        #endif

        let lightAtt = Context.NoL * lightColor * att ; 
        var diffuseColor = diffuse * lightAtt; 
        // diffuseColor = vec3f(0.0) ; 
        var specularColor = specular * lightAtt; 
        var col = (diffuseColor + specularColor ) ;
        return (col.rgb) ;
    }

    fn getSpecularDominantDir (  N : vec3<f32> , R : vec3<f32> , roughness : f32 ) -> vec3<f32>
    {
        var smoothness = saturate (1.0 - roughness );
        var lerpFactor = smoothness * ( sqrt ( smoothness ) + roughness );
        // The result is not normalized as we fetch in a cubemap
        return mix (N, R, lerpFactor );
    }

    fn approximateSpecularIBL( specularColor:vec3<f32> , roughness:f32 , R:vec3<f32> , NoV:f32 ) -> vec3<f32> {
       
        let MAX_REFLECTION_LOD  = i32(textureNumLevels(prefilterMap)) ;
        let mip = roughnessToMipmapLevel(roughness,MAX_REFLECTION_LOD);
        fragData.EnvColor = (textureSampleLevel(prefilterMap, prefilterMapSampler, getSpecularDominantDir(fragData.N,R,roughness) , mip ).rgb);
        // var prefilteredColor: vec3<f32> = (textureSampleLevel(prefilterMap, prefilterMapSampler, getSpecularDominantDir(fragData.N,R,roughness) , mip ).rgb);
        fragData.EnvColor = globalUniform.skyExposure * (fragData.EnvColor);
        var envBRDF = textureSampleLevel(brdflutMap, brdflutMapSampler, vec2<f32>(NoV, roughness) , 0.0 ) ;
        return fragData.EnvColor * (specularColor.rgb * envBRDF.x + saturate( 50.0 * specularColor.g ) * envBRDF.y) ;
    }

    fn fresnel_coat(n:vec3<f32>,v:vec3<f32>,ior:f32) -> f32 {
        var f0 = (1.0-ior)/(1.0+ior);
        f0 = f0 * f0  ;
        let fr = pow((f0 + (1.0 - f0)*(1.0 - abs( max(dot(n,v),0.0) ))) , 5.0 ) ;  
        return fr ;
    }

    fn reflectEnvMap(n:vec3<f32> , v:vec3<f32> , roughness:f32) -> vec3<f32> {
        let MAX_REFLECTION_LOD  = i32(textureNumLevels(envMap)) ;
        let mip = roughnessToMipmapLevel(roughness,MAX_REFLECTION_LOD);
        let R = 2.0 * dot( v , n ) * n - v ;
        var prefilteredColor: vec3<f32> = globalUniform.skyExposure * (textureSampleLevel(envMap, envMapSampler, R , mip ).rgb);
        prefilteredColor = LinearToGammaSpace(prefilteredColor);
        return prefilteredColor ;
    }

    fn Specular_D_GGX( NoH:f32,  roughness:f32 ) -> f32
    {
        let a2 = roughness * roughness ;
        let f = (NoH * a2 - NoH) * NoH + 1.0;
        return a2 / (PI * f * f) ;
    }

    fn V_Kelemen( LoH : f32 ) -> f32 {
        return 0.25 / (LoH * LoH);
    }

    fn F_Schlick( f0:vec3<f32> ,  f90 : f32 ,  VoH : f32 ) -> vec3<f32> {
        return f0 + (f90 - f0) * pow(1.0 - VoH,5.0);
    }

    fn F_Schlick2(  SpecularColor:vec3<f32>,  VoH :f32 )-> vec3<f32> {
        var Fc = pow5( 1.0 - VoH );
        let rt = clamp(50.0 * SpecularColor.g,0.0,1.0) ;
        return rt * Fc + (1.0 - Fc) * SpecularColor;
    }

    fn oneMinusReflectivity ( metallic : f32 , F0:f32 ) -> f32 {
        let range = 1.0 - F0;
        return range - metallic * range;
    }

    //https://google.github.io/filament/Filament.html materialsystem/clearcoatmodel/clearcoatparameterization
    fn CoatSpecular_brdf( f:vec3<f32>, s:vec3<f32>, n:vec3<f32> , v:vec3<f32> , l:vec3<f32> , att:f32 , layer :vec3<f32> , clearcoatRoughnessFactor:f32 ) -> vec3<f32> {
        let H = normalize(v + l); 
        let VdotNc = max(dot(v,n),0.0);
        let LdotNc = max(dot(l,n),0.0);
        let NoH = max(dot(n,H),0.0);
        let LoH = saturate(dot(l, H))  ;
        let NoL = max(dot(n,l),0.0);

        let Fd = f ; 
        let Fr = s ; 

        let factor = clamp(clearcoatRoughnessFactor,0.089,1.0);
        let clearCoatRoughness = factor * factor ;

        let Dc = D_GGX( NoH , factor ) ;
        let Vc = V_Kelemen( LoH ) * NoL ;
        let Fc = F_Schlick(vec3<f32>(0.04), 2.0 , LoH); 
        let Frc = (Dc * Vc) * Fc ;
        // return layer * vec3<f32>((Fd + Fr * (1.0 - Fc)) * (1.0 - Fc) + Frc) * ( 0.5 + NoL * 0.5 ) ;
        return vec3<f32>(Frc) ;
    }

    #if USE_CLEARCOAT
    fn approximate_coating(base:vec3<f32> , clearColor: vec3<f32>, n:vec3<f32> , v:vec3<f32> , light:LightData , clearcoatRoughnessFactor:f32 ) -> vec3<f32> {
        let factor = clamp(clearcoatRoughnessFactor,0.084,1.0);
        var clearcoatAlpha = factor * factor + fragData.ClearcoatRoughness;

        // var lightColor = getHDRColor( lightCC.rgb , light.linear )  ;
        var att = light.intensity / LUMEN ;
        let l = light.direction ;
   
        let NdotV = max(dot(n,v),0.0);
        let MAX_REFLECTION_LOD  = f32(textureNumLevels(prefilterMap)) ;
        // let mip = roughnessToMipmapLevel(clearcoatAlpha,MAX_REFLECTION_LOD);
        let R = 2.0 * dot( v , n ) * n - v ;
        var envIBL: vec3<f32> = globalUniform.skyExposure * (textureSampleLevel(prefilterMap, prefilterMapSampler, R , MAX_REFLECTION_LOD * clearcoatRoughnessFactor ).rgb) ;
        // envIBL = LinearToGammaSpace(envIBL);

        let clearCoat = materialUniform.clearcoatFactor ;
        // let f = FresnelSchlickRoughness( max(dot(n,v),0.0) , vec3<f32>(0.0) , clearcoatAlpha ) ;
        let clearcoat_brdf =  CoatSpecular_brdf( vec3<f32>(0.04) , vec3<f32>( 0.04 ) , n , v , -l , att , vec3<f32>( 0.04 ) , factor ) ;

        // return clearcoat_brdf;+ fragData.ClearcoatRoughness 
        return mix(base, clearcoat_brdf,materialUniform.clearcoatWeight ) ;
    }
    #endif
   

    fn EnvBRDF( SpecularColor : vec3f , Roughness : f32 , NoV : f32) -> vec3f
    {
        // brdflutMap, brdflutMapSampler
        var AB = textureSampleLevel( brdflutMap, brdflutMapSampler, vec2f( NoV, Roughness ), 0.0 ).rg;
        var GF = SpecularColor * AB.x + saturate( 50.0 * SpecularColor.g ) * AB.y;
        return GF;
    }

    fn IBLEnv( V:vec3f , N:vec3f , Roughness : f32) -> vec3f 
    {
        let NdotV = max(dot(N,V),0.0);
        let MAX_REFLECTION_LOD  = i32(textureNumLevels(prefilterMap));

        let mip = roughnessToMipmapLevel(Roughness,MAX_REFLECTION_LOD);

        let R = 2.0 * dot( V , N ) * N - V ;
        var envIBL: vec3<f32> = textureSampleLevel(prefilterMap, prefilterMapSampler, R , mip ).rgb ;
        return envIBL;
    }
`,Yo=`
  #include "Clearcoat_frag"
  #include "BRDF_frag"
  #include "MathShader"
  #include "FastMathShader"
  #include "Common_frag"
  #include "GlobalUniform"

  #include "PhysicMaterialUniform_frag"
  #include "NormalMap_frag"
  #include "LightingFunction_frag"
  #include "Irradiance_frag"
  #include "ColorUtil_frag"
  #include "BxdfDebug_frag"


 
  //ORI_ShadingInput
  fn initFragData() {
      fragData.Albedo = ORI_ShadingInput.BaseColor ;
      fragData.Ao = clamp( pow(ORI_ShadingInput.AmbientOcclusion,materialUniform.ao) , 0.0 , 1.0 ) ; 
      fragData.Roughness = clamp((ORI_ShadingInput.Roughness),0.003,1.0) ; 
      fragData.Metallic = ORI_ShadingInput.Metallic ; 
      fragData.Emissive = ORI_ShadingInput.EmissiveColor.rgb ; 
      fragData.N = ORI_ShadingInput.Normal;
      let viewDir = normalize(globalUniform.CameraPos.xyz - ORI_VertexVarying.vWorldPos.xyz) ;
      fragData.V = viewDir ;

      #if USE_TANGENT
        fragData.T = ORI_VertexVarying.TANGENT.xyz * ORI_VertexVarying.TANGENT.w ;
      #endif
 
      let R = 2.0 * dot( fragData.V , fragData.N ) * fragData.N - fragData.V ;
      fragData.R = R ;//reflect( fragData.V , fragData.N ) ;

      fragData.NoV = saturate(dot(fragData.N, fragData.V)) ;

      fragData.F0 = mix(vec3<f32>(materialUniform.specularColor.rgb), fragData.Albedo.rgb, fragData.Metallic);
      
      fragData.F = computeFresnelSchlick(fragData.NoV, fragData.F0);
      fragData.KD = vec3<f32>(fragData.F) ;
      fragData.KS = vec3<f32>(0.0) ;

      fragData.Indirect = 0.0 ;
      fragData.Reflectance = 1.0 ;

      fragData.ClearcoatRoughness = materialUniform.clearcoatRoughnessFactor ;
      #if USE_CLEARCOAT_ROUGHNESS
        fragData.ClearcoatRoughness = getClearcoatRoughness() * materialUniform.clearcoatRoughnessFactor;
      #endif
  }

  fn BxDFShading(){
      initFragData();

      var irradiance = vec3<f32>(0.0) ;
      #if USEGI
          irradiance += getIrradiance().rgb ;
      #else
          let MAX_REFLECTION_LOD  = f32(textureNumLevels(prefilterMap)) ;
          irradiance += (globalUniform.skyExposure * textureSampleLevel(prefilterMap, prefilterMapSampler, fragData.N.xyz, 0.8 * (MAX_REFLECTION_LOD) ).rgb);
      #endif
      irradiance = LinearToGammaSpace(irradiance.rgb);
      fragData.Irradiance = irradiance.rgb ;


      //***********lighting-PBR part********* 
      var specColor = vec3<f32>(0.0) ;
      let lightIndex = getCluster();
      let start = max(lightIndex.start, 0.0);
      let count = max(lightIndex.count, 0.0);
      let end = max(start + count , 0.0);
      for(var i:i32 = i32(start) ; i < i32(end); i += 1 )
      {
          let light = getLight(i32(i));
          switch (light.lightType) {
            case PointLightType: {
              specColor += pointLighting( fragData.Albedo.rgb,ORI_VertexVarying.vWorldPos.xyz,fragData.N,fragData.V,fragData.Roughness,fragData.Metallic,light) ;
              break;
            }
            case DirectLightType: {
              specColor += directLighting( fragData.Albedo.rgb ,fragData.N,fragData.V,fragData.Roughness ,fragData.Metallic, light , globalUniform.shadowBias) ;
              break;
            }
            case SpotLightType: {
              specColor += spotLighting( fragData.Albedo.rgb,ORI_VertexVarying.vWorldPos.xyz,fragData.N,fragData.V,fragData.Roughness,fragData.Metallic , light ) ;
              break;
            }
            default: {
              break;
            }
          }
      }

      fragData.LightChannel = specColor ;

      let sunLight = lightBuffer[0] ;
      //***********lighting-PBR part********* 
      var F = FresnelSchlickRoughness(fragData.NoV, fragData.F0, fragData.Roughness);
      var kS = F;
      var kD = vec3(1.0) - kS;
      kD = kD * (1.0 - fragData.Metallic);
      let envIBL =  materialUniform.envIntensity * approximateSpecularIBL( F , fragData.Roughness , fragData.R , fragData.NoV ) ;
      fragData.EnvColor = envIBL ;
      //***********indirect-specular part********* 
      
      var surfaceReduction = 1.0/(fragData.Roughness*fragData.Roughness+1.0);   
      var oneMinusReflectivity = oneMinusReflectivity(fragData.Metallic , materialUniform.materialF0.r );
      var grazingTerm = clamp((1.0 - fragData.Roughness ) + (1.0 - oneMinusReflectivity),0.0,1.0);
      var t = pow5(fragData.NoV);
      var fresnelLerp = FresnelLerp(fragData.NoV,fragData.F0.rgb,vec3<f32>(grazingTerm)) ;   
      var iblSpecularResult = surfaceReduction * fragData.EnvColor * fresnelLerp + envIBL;
      iblSpecularResult *= max(sunLight.quadratic,0.05) ;
      //***********indirect-specular part********* 
      
      //***********indirect-ambient part********* 
      var kdLast = (1.0 - 0.04) * (1.0 - fragData.Metallic);    
      //  Dim the edges, there should be more specular reflection at the edges
      var iblDiffuseResult = irradiance * vec3f(kdLast) * fragData.Albedo.rgb ;
      //irradiance
      //***********indirect-ambient part********* 
      var indirectResult = (iblSpecularResult + iblDiffuseResult) * fragData.Ao * max(sunLight.quadratic,0.05);
      // debugOut = vec4f(iblDiffuseResult,1.0);

      ORI_FragmentOutput.color = vec4<f32>(0.0);

      // Using stripped down, 'pure log', formula. Parameterized by grey points and dynamic range covered.
      #if USEGBUFFER
          var normal_rgba8unorm = (ORI_VertexVarying.vWorldNormal + 1.0) * 0.5;
          ORI_FragmentOutput.worldNormal = vec4<f32>(normal_rgba8unorm,1.0);
          ORI_FragmentOutput.material = vec4<f32>(1.0,fragData.Roughness,fragData.Metallic,1.0);
      #endif
      
      // ORI_FragmentOutput.color = vec4<f32>(ORI_FragmentOutput.color.xyz,fragData.Albedo.a) ;
      #if USE_WORLDPOS
          ORI_FragmentOutput.worldPos = vec4<f32>(ORI_VertexVarying.vWorldPos.xyzw);
          // ORI_FragmentOutput.worldPos = vec4<f32>(0.0,0.0,1.0,1.0);
      #endif
      
      var color = specColor + indirectResult ;

      var clearCoatColor = vec3<f32>(0.0);
      #if USE_CLEARCOAT
        let clearCoatBaseColor = vec3<f32>(1.0) * materialUniform.baseColor.rgb ;
        let clearNormal = fragData.N ;
        let clearcoatRoughness = fragData.ClearcoatRoughness ;
        let att = sunLight.intensity / LUMEN ;
        let clearCoatLayer = ClearCoat_BRDF( color , materialUniform.clearcoatColor.rgb , materialUniform.ior , clearNormal , -sunLight.direction ,-fragData.V , materialUniform.clearcoatWeight , clearcoatRoughness , att );
        color = vec3<f32>(clearCoatLayer.rgb/fragData.Albedo.a) ; 
      #endif
      
      var retColor = (LinearToGammaSpace(color.rgb));
      retColor += fragData.Emissive.xyz ;
      ORI_FragmentOutput.color = vec4<f32>( retColor.rgb * fragData.Albedo.a ,fragData.Albedo.a) ;
  }

  `,Wo=`
    #if USE_CLEARCOAT_ROUGHNESS
    @group(1) @binding(auto)
    var clearCoatRoughnessMapSampler: sampler;
    @group(1) @binding(auto)
    var clearCoatRoughnessMap: texture_2d<f32>;

    fn getClearcoatRoughness() -> f32{
        let clearcoatRoughness = textureSample(clearCoatRoughnessMap, clearCoatRoughnessMapSampler, ORI_VertexVarying.fragUV0.xy).r;
        return clearcoatRoughness;
    }
    #else
    fn getClearcoatRoughness() -> f32{
        return 1.0;
    }
    #endif

    #if USE_CLEARCOAT
    fn ClearCoat_BRDF( baseColor:vec3<f32>, clearCoatColor:vec3<f32> , ior:f32 ,N:vec3<f32>, L:vec3<f32> ,  V:vec3<f32> , clearCoatStrength:f32, clearCoatPerceptualRoughness:f32 , att:f32) -> vec3<f32> {
        var factor = clamp(clearCoatPerceptualRoughness, 0.0001, 1.0);
        var clearCoatRoughness = factor * factor;

        let H = normalize(-V + L);
        let R = 2.0 * dot( -V , N ) * N + V ;
        let LoH = dot(L,H);
        let NoV = max(dot(N,-V),0.0);
        let NoL = max(dot(N,L),0.0);
        let NoH = max(dot(N,H),0.00001);

        let Fr = FresnelSchlickRoughness( NoV , vec3<f32>(0.0) , clearCoatRoughness ) ;
        var Fd = clearCoatColor / 3.1415926 ;
        let F0 = IORToF0(ior) ;
        // clear coat BRDF
        var Dc = D_GGX(NoH,clearCoatRoughness);
        var Vc = V_Kelemen(LoH) * NoL;
        var Fc = F_Schlick( vec3<f32>(F0) , 1.0, NoV) * materialUniform.clearcoatFactor;
        var Frc = (Dc * Vc) * Fc;
        // base layer attenuation for energy compensation
        let oneMinusFc  = 1.0 - Fc;
        let brdfSpecular = ((Fd + Fr * oneMinusFc) * oneMinusFc + Frc)  * att ; 
        var iblSpecular = vec3<f32>(brdfSpecular);
        iblSpecular += approximateSpecularIBL(vec3<f32>(1.0),clearCoatRoughness,R, NoV) * Fc ;
        return vec3<f32>(mix(baseColor,iblSpecular,materialUniform.clearcoatWeight));
    }
    #endif
`,Ko=`
    #include "Common_vert"
    #include "Common_frag"
    #include "BxDF_frag"

    fn vert(inputData:VertexAttributes) -> VertexOutput {
        ORI_Vert(inputData) ;
        return ORI_VertexOut ;
    }

    fn frag(){
        ORI_ShadingInput.BaseColor = materialUniform.baseColor ;
        ORI_ShadingInput.Roughness = materialUniform.roughness  ;
        ORI_ShadingInput.Metallic = materialUniform.metallic ;
        ORI_ShadingInput.Specular = 0.5 ;
        ORI_ShadingInput.AmbientOcclusion = 1.0 ;
        ORI_ShadingInput.EmissiveColor = vec4<f32>(0.0);

        ORI_ShadingInput.Normal = ORI_VertexVarying.vWorldNormal.rgb ;

        BxDFShading();
    }
`,Xo=`
    #include "Common_vert"
    #include "Common_frag"
    #include "BxDF_frag"

    @group(1) @binding(auto)
    var baseMapSampler: sampler;
    @group(1) @binding(auto)
    var baseMap: texture_2d<f32>;

    @group(1) @binding(auto)
    var normalMapSampler: sampler;
    @group(1) @binding(auto)
    var normalMap: texture_2d<f32>;

    // #if USE_ARMC
        // @group(1) @binding(auto)
        // var maskMapSampler: sampler;
        // @group(1) @binding(auto)
        // var maskMap: texture_2d<f32>;
    // #endif

    // #if USE_MR
        @group(1) @binding(auto)
        var maskMapSampler: sampler;
        @group(1) @binding(auto)
        var maskMap: texture_2d<f32>;
    // #endif

    #if USE_AOTEX
        @group(1) @binding(auto)
        var aoMapSampler: sampler;
        @group(1) @binding(auto)
        var aoMap: texture_2d<f32>;
    #endif

    @group(1) @binding(auto)
    var emissiveMapSampler: sampler;
    @group(1) @binding(auto)
    var emissiveMap: texture_2d<f32>;

    var<private> debugOut : vec4f = vec4f(0.0) ;

    fn vert(inputData:VertexAttributes) -> VertexOutput {
        ORI_Vert(inputData) ;
        return ORI_VertexOut ;
    }

    fn frag(){
        var transformUV1 = materialUniform.transformUV1;
        var transformUV2 = materialUniform.transformUV2;

        var uv = transformUV1.zw * ORI_VertexVarying.fragUV0 + transformUV1.xy; 

        #if USE_SRGB_ALBEDO
            ORI_ShadingInput.BaseColor = textureSample(baseMap, baseMapSampler, uv )  ;
            ORI_ShadingInput.BaseColor = gammaToLiner(ORI_ShadingInput.BaseColor.rgb)  ;
            ORI_ShadingInput.BaseColor = vec4<f32>( ORI_ShadingInput.BaseColor * materialUniform.baseColor.rgb, ORI_ShadingInput.BaseColor.w * materialUniform.baseColor.a)  ;
        #else
            ORI_ShadingInput.BaseColor = textureSample(baseMap, baseMapSampler, uv )  ;
            ORI_ShadingInput.BaseColor = vec4f(gammaToLiner(ORI_ShadingInput.BaseColor.rgb) * materialUniform.baseColor.rgb,ORI_ShadingInput.BaseColor.a)  ;
        #endif

        var maskTex = textureSample(maskMap, maskMapSampler, uv ) ;
       
        #if USE_ALPHA_A
            ORI_ShadingInput.BaseColor.a =  ORI_ShadingInput.BaseColor.a * (maskTex.a) ;
        #endif

        #if USE_ALPHACUT 
            if( (ORI_ShadingInput.BaseColor.a - materialUniform.alphaCutoff) <= 0.0 ){
                ORI_FragmentOutput.color = vec4<f32>(0.0,0.0,0.0,1.0);
                
                #if USEGBUFFER
                    ORI_FragmentOutput.worldPos = vec4<f32>(0.0,0.0,0.0,1.0);
                    ORI_FragmentOutput.worldNormal = vec4<f32>(0.0,0.0,0.0,1.0);
                    ORI_FragmentOutput.material = vec4<f32>(0.0,0.0,0.0,1.0);
                #endif

                discard;
            }
        #endif

        useShadow();

        var roughnessChannel:f32 = 1.0 ;
        #if USE_ROUGHNESS_A
            roughnessChannel = maskTex.a ;
        #else if USE_ROUGHNESS_R
            roughnessChannel = maskTex.r ;
        #else if USE_ROUGHNESS_G
            roughnessChannel = maskTex.g ;
        #else if USE_ROUGHNESS_B
            roughnessChannel = maskTex.b ;
        #else if USE_ALBEDO_A
            roughnessChannel = ORI_ShadingInput.BaseColor.a ;
        #endif  

        #if USE_SMOOTH
            var roughness = ( 1.0 - roughnessChannel ) * materialUniform.roughness;
            ORI_ShadingInput.Roughness = clamp(roughness , 0.0001 , 1.0);
        #else
            ORI_ShadingInput.Roughness = clamp(roughnessChannel * materialUniform.roughness ,0.0001,1.0);
        #endif 

        var metallicChannel:f32 = 1.0 ;
        #if USE_METALLIC_A
            metallicChannel = maskTex.a ;
        #else if USE_METALLIC_R
            metallicChannel = maskTex.r ;
        #else if USE_METALLIC_G
            metallicChannel = maskTex.g ;
        #else if USE_METALLIC_B
            metallicChannel = maskTex.b ;
        #endif    

        ORI_ShadingInput.Metallic = metallicChannel * materialUniform.metallic ;
   
        var aoChannel:f32 = 1.0 ;
        #if USE_AOTEX
            var aoMap = textureSample(aoMap, aoMapSampler, uv );
            aoChannel = aoMap.g ;
        #else
            #if USE_AO_A
                aoChannel = maskTex.a ;
            #else if USE_AO_R
                aoChannel = maskTex.r ;
            #else if USE_AO_G
                aoChannel = maskTex.g ;
            #else if USE_AO_B
                aoChannel = maskTex.b ;
            #endif  
        #endif

        ORI_ShadingInput.AmbientOcclusion = aoChannel ;
        ORI_ShadingInput.Specular = 1.0 ;

        #if USE_EMISSIVEMAP
            var emissiveMapColor = textureSample(emissiveMap, emissiveMapSampler , ORI_VertexVarying.fragUV0.xy) ;
            let emissiveColor = materialUniform.emissiveColor.rgb * emissiveMapColor.rgb * materialUniform.emissiveIntensity ;
            ORI_ShadingInput.EmissiveColor = vec4<f32>(emissiveColor.rgb,1.0);
        #else
            let emissiveColor = materialUniform.emissiveColor.rgb * materialUniform.emissiveIntensity ;
            ORI_ShadingInput.EmissiveColor = vec4<f32>(emissiveColor,1.0);
        #endif


        var Normal = textureSample(normalMap,normalMapSampler,uv).rgb ;
        let normal = unPackRGNormal(Normal,1.0,1.0) ;  
        ORI_ShadingInput.Normal = normal ;

        BxDFShading();

        // ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(normal.rgb),1.0) ;
    }
`,jo=`
#include "ClusterDebug_frag" 

        fn debugPosition(){
            ORI_FragmentOutput.color = vec4<f32>(ORI_VertexVarying.vWorldPos.xyz,1.0);
        }

        fn debugMeshID(){
            let meshIDColor = u32(round(ORI_VertexVarying.vWorldPos.w) ) ;
            let color = colorSet[ meshIDColor % 9u] ;
            ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(color.rgb),1.0);
        }

        fn debugNormal(){
            ORI_FragmentOutput.color = vec4<f32>(ORI_ShadingInput.Normal.xyz,1.0);
        }

        fn debugUV(){
            ORI_FragmentOutput.color = vec4<f32>(ORI_VertexVarying.fragUV0.xy,0.0,1.0);
        }

        fn debugColor(){
            ORI_FragmentOutput.color = vec4<f32>(fragData.Albedo.rgb,1.0);
        }

        fn debugDiffuse(){
            ORI_FragmentOutput.color = vec4<f32>( fragData.LightChannel.rgb,1.0);
            // ORI_FragmentOutput.color = vec4<f32>(0.2,0.2,0.2,1.0);
        }

        fn debugAmbient(){
            ORI_FragmentOutput.color = vec4<f32>(vec3f(fragData.Alpha) ,1.0);
        }
        
        fn debugEmissive(){
            ORI_FragmentOutput.color = vec4<f32>(fragData.Emissive.rgb,1.0);
        }

        fn debugEnvment(){
            ORI_FragmentOutput.color = vec4<f32>(fragData.EnvColor.rgb,1.0);
        }

        fn debugAo(){
            ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(fragData.Ao),1.0);
        }

        fn debugRoughness(){
            ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(fragData.Roughness),1.0);
        }

        fn debugMetallic(){
            ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(fragData.Metallic),1.0);
        }

        fn debugIrradiance(){
            ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(fragData.Irradiance),1.0);
        }

        fn debugTangent(){
            ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(fragData.T),1.0);
        }

        fn debugFragmentOut(){
            if(ORI_VertexVarying.fragCoord.x > globalUniform.renderState_split) {
                switch (globalUniform.renderState_right)
                {
                  case 0: {
                    debugPosition();
                  }
                  case 1: {
                    debugColor();
                  }
                  case 2: {
                    debugNormal();
                  }
                  case 3: {
                    debugIrradiance();
                  }
                  case 4: {
                    debugTangent();
                  }
                  case 5: {
                    // debugTangent();
                  }
                  case 6: {
                    debugEmissive();
                  }
                  case 7: {
                    debugEnvment();
                  }
                  case 8: {
                    debugAo();
                  }
                  case 9: {
                    debugRoughness();
                  }
                  case 10: {
                    debugMetallic();
                  }
                  case 11: {
                    debugDiffuse();
                  }
                  case 12: {
                    debugAmbient();
                  }
                  case 13: {
                    debugMeshID();
                  }
                  case 14: {
                    #if DEBUG_CLUSTER
                      debugCluster( ORI_VertexVarying.fragCoord );
                    #endif
                  }
                  case 15: {
                    #if DEBUG_CLUSTER
                      debugClusterBox( ORI_VertexVarying.fragCoord );
                    #endif
                  }
                  case 16: {
                    #if DEBUG_CLUSTER
                      debugClusterLightCount( vec4<f32>(ORI_VertexVarying.fragCoord.xyz,0.0));
                      #endif
                  }
                  default: {
                  }
                }
              } else {
                switch (globalUniform.renderState_left)
                {
                  case 0: {
                    debugPosition();
                  }
                  case 1: {
                    debugColor();
                  }
                  case 2: {
                    debugNormal();
                  }
                  case 3: {
                    debugIrradiance();
                  }
                  case 4: {
                    debugTangent();
                  }
                  case 5: {
                    // debugTangent();
                  }
                  case 6: {
                    debugEmissive();
                  }
                  case 7: {
                    debugEnvment();
                  }
                  case 8: {
                    debugAo();
                  }
                  case 9: {
                    debugRoughness();
                  }
                  case 10: {
                    debugMetallic();
                  }
                  case 11: {
                    debugDiffuse();
                  }
                  case 12: {
                    debugAmbient();
                  }
                  case 13: {
                    debugMeshID();
                  }
                  case 14: {
                    #if DEBUG_CLUSTER
                      debugCluster( ORI_VertexVarying.fragCoord );
                    #endif
                  }
                  case 15: {
                    #if DEBUG_CLUSTER
                      debugClusterBox( ORI_VertexVarying.fragCoord );
                    #endif
                  }
                  case 16: {
                    #if DEBUG_CLUSTER
                      debugClusterLightCount( vec4<f32>(ORI_VertexVarying.fragCoord.xyz,0.0));
                      #endif
                  }
                  default: {
                  }
                }
              }
        }
`,qo=`
    #include "WorldMatrixUniform"
    #include "GlobalUniform"

    struct MaterialUniform {
    x:f32,
    y:f32,
    width:f32,
    height:f32,
    };

    struct VertexOutput {
        @location(auto) fragUV: vec2<f32>,
        @builtin(position) position: vec4<f32>
    };

    @vertex
    fn main(@builtin(vertex_index) vertexIndex : u32, @builtin(instance_index) index : u32 ) -> VertexOutput {
        const pos = array(
        vec2(-1.0, -1.0), vec2(1.0, -1.0), vec2(-1.0, 1.0),
        vec2(-1.0, 1.0), vec2(1.0, -1.0), vec2(1.0, 1.0),
        );
        const uv = array(
        vec2(1.0, 0.0), vec2(1.0, 1.0), vec2(0.0, 1.0), 
        vec2(1.0, 0.0), vec2(0.0, 1.0), vec2(0.0, 0.0),
        );
        let id = u32(index) ;
        var output : VertexOutput;
        output.fragUV = uv[vertexIndex] ;
        output.position = vec4<f32>(pos[vertexIndex] , 0.0, 1.0) ;
        return output ;
    }
`,Jo=`
#include "WorldMatrixUniform"
      #include "GlobalUniform"
   
      struct MaterialUniform {
        x:f32,
        y:f32,
        width:f32,
        height:f32,
      };

      struct VertexOutput {
          @location(auto) fragUV: vec2<f32>,
          @builtin(position) member: vec4<f32>
      };

      @vertex
      fn main(@builtin(instance_index) index : u32,@location(auto) position: vec3<f32>, @location(auto) TEXCOORD_1: vec2<f32>) -> VertexOutput {
        //   let id = u32(index) ;
        //   let worldMatrix = models.matrix[id];
        //   let windowSize = vec2<f32>(globalUniform.windowWidth,globalUniform.windowHeight) ;
        //   let pos = worldMatrix[3].xy ;
        //   let size = vec2<f32>(worldMatrix[0].x,worldMatrix[1].y) / windowSize ;
          let uv = vec2(((TEXCOORD_1.xy * 2.0) - vec2<f32>(1.0))) ;// / windowSize * size - offset ;
          return VertexOutput(TEXCOORD_1, vec4<f32>(uv, 0.0, 1.0));
      }
`,Zo=`
    struct FragmentOutput {
        @location(auto) o_Target: vec4<f32>
    };

    var<private> fragUV1: vec2<f32>;
    var<private> o_Target: vec4<f32>;
    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_2d<f32>;

    @fragment
    fn main(@location(auto) fragUV: vec2<f32>) -> FragmentOutput {
        var uv = fragUV ;
        uv.y = 1.0 - uv.y ;
        var color: vec4<f32> = textureSample(baseMap, baseMapSampler, uv );

        return FragmentOutput(color);
    }
`,$o=`
    struct FragmentOutput {
        @location(auto) o_Target: vec4<f32>
    }; 

    var<private> fragUV1: vec2<f32>;
    var<private> o_Target: vec4<f32>;

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_depth_2d ;

    fn Linear01Depth(  z : f32 ) -> f32
    {
        return 1.0 / (1.0 * z + 5000.0);
    }

    @fragment
    fn main(@location(auto) fragUV: vec2<f32>) -> FragmentOutput {
        var uv = fragUV ;
        uv.y = 1.0 - uv.y ;
        var depth = textureSample(baseMap, baseMapSampler, uv , vec2<i32>(0) ) ;
        return FragmentOutput(vec4<f32>(depth,0.0,0.0,1.0));
    }
`,en=`
    struct FragmentOutput {
        @location(auto) o_Target: vec4<f32>
    };

    var<private> fragUV1: vec2<f32>;
    var<private> o_Target: vec4<f32>;

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_depth_cube ;

    fn uvToXYZ( face : i32 ,  uv : vec2<f32> ) -> vec3<f32>
    {
        var out : vec3<f32> ;
        if(face == 0){
            out = vec3<f32>( 1.0, uv.y, -uv.x);
        }else if(face == 1){
            out = vec3<f32>( -1.0, uv.y, uv.x);
        }else if(face == 2){
            out = vec3<f32>( uv.x, -1.0, uv.y);
        }else if(face == 3){
            out = vec3<f32>( uv.x,  1.0, -uv.y);
        }else if(face == 4){
            out = vec3<f32>( uv.x, uv.y, 1.0);
        }else{	
            out = vec3<f32>( -uv.x, uv.y, -1.0);
        }
        return out ;
    }

    @fragment
    fn main(@location(auto) fragUV: vec2<f32>) -> FragmentOutput {
        var uv = fragUV ;
        uv.y = 1.0 - uv.y ;
        var ii = 0.16 ;
        var ouv = vec3<f32>(0.0);
        if(uv.x < ii * 6.0){
            ouv = uvToXYZ(5,uv/ii);
        }
        if(uv.x < ii * 5.0){
            ouv = uvToXYZ(4,uv/ii);
        }
        if(uv.x < ii * 4.0){
            ouv = uvToXYZ(3,uv/ii);
        } 
        if(uv.x < ii * 3.0){
            ouv = uvToXYZ(2,uv/ii);
        }
        if(uv.x < ii * 2.0){
            ouv = uvToXYZ(1,uv/ii);
        }
        if(uv.x < ii * 1.0){
            ouv = uvToXYZ(0,uv/ii);
        }
        var depth = textureSample(baseMap, baseMapSampler, ouv ) ;
        depth = 1.0 - depth; 

        return FragmentOutput(vec4<f32>(depth,0.0,0.0,1.0));
    }
`,Za=`
    fn getHDRColor(color: vec3<f32>, exposure: f32) -> vec3 < f32 > {
        // var newColor = color * (  1.0 / 255.0 ) ;
        return color * pow(2.4, exposure) ;
    }

    fn lambda2rgb(lambda : f32) -> vec3 < f32 > {
        let ultraviolet = 400.0;
        let infrared = 700.0;

        var a = (lambda - ultraviolet) / (infrared - ultraviolet);
        let c = 10.0;
        var b = vec3<f32>(a) - vec3<f32>(0.75, 0.5, 0.25);
        return max((1.0 - c * b * b), vec3<f32>(0.0));
    }

    fn CEToneMapping(color: vec3<f32>, adapted_lum: f32) -> vec3<f32>
    {
        return 1.0 - exp(-adapted_lum * color);
    }

    fn ACESToneMapping(color: vec3<f32>, adapted_lum: f32) -> vec3<f32>
    {
        let A = 2.51;
        let B = 0.03;
        let C = 2.43;
        let D = 0.59;
        let E = 0.14;

        var color2 = color * adapted_lum;
        color2 = (color2 * (A * color2 + B)) / (color2 * (C * color2 + D) + E);
        return color2;
    }

    fn gammaToLiner(color: vec3<f32>) -> vec3 < f32 > {
        let gammaCorrect = 2.4;
        var color2 = pow(color, vec3<f32>(gammaCorrect));
        return color2 ;
    }

    fn linerToGamma4(color: vec4<f32>) -> vec4 < f32 > {
        let gammaCorrect = 0.416666667;
        var color2 = pow(color, vec4<f32>(gammaCorrect));
        return color2 ;
    }

    fn linerToGamma3(color: vec3<f32>) -> vec3 < f32 > {
        let gammaCorrect = 0.416666667;
        var color2 = pow(color, vec3<f32>(gammaCorrect));
        return color2 ;
    }

    fn LinearToGammaSpace(linRGB0: vec3<f32>) -> vec3 < f32 > {
        var linRGB = max(linRGB0, vec3(0.0, 0.0, 0.0));
        linRGB.r = pow(linRGB.r, 0.416666667);
        linRGB.g = pow(linRGB.g, 0.416666667);
        linRGB.b = pow(linRGB.b, 0.416666667);
        return max(1.055 * linRGB - 0.055, vec3(0.0, 0.0, 0.0));
    }

    var<private>sRGB_2_LMS_MAT: mat3x3<f32> = mat3x3<f32>(
        17.8824, 43.5161, 4.1193,
        3.4557, 27.1554, 3.8671,
        0.02996, 0.18431, 1.4670,
    );

    var<private>LMS_2_sRGB_MAT: mat3x3<f32> = mat3x3<f32>(
        0.0809, -0.1305, 0.1167,
        -0.0102, 0.0540, -0.1136,
        -0.0003, -0.0041, 0.6935,
    );

    fn sRGB_2_LMS(RGB: vec3<f32>) -> vec3<f32>
    {
        return sRGB_2_LMS_MAT * RGB;
    }

    fn LMS_2_sRGB(LMS: vec3<f32>) -> vec3<f32>
    {
        return LMS_2_sRGB_MAT * LMS;
    }

    fn LinearToSrgbBranchless(lin: vec3<f32>) -> vec3<f32>
    {
        var lin2 = max(vec3<f32>(6.10352e-5), lin);
        return min(lin2 * 12.92, pow(max(lin2, vec3<f32>(0.00313067)), vec3<f32>(0.416666667)) * vec3<f32>(1.055) - vec3<f32>(0.055));
    }

    fn sRGBToLinear(color : vec3<f32>) -> vec3<f32>
    {
        let color2 = max(vec3<f32>(6.10352e-5), color);
        let c = 0.04045;
        if (color2.r > c && color2.g > c && color2.b > c) {
            return pow(color2 * (1.0 / 1.055) + 0.0521327, vec3<f32>(2.4));
        } else {
            return color2 * (1.0 / 12.92);
        }
    }

    fn BlendNormalRNM( n1:vec3f,  n2:vec3f) -> vec3f
	{
		let t = n1.xyz + vec3f(0.0, 0.0, 1.0);
		let u = n2.xyz * vec3f(-1.0, -1.0, 1.0);
		let r = (t / t.z) * dot(t, u) - u;
		return r;
	}

//     fn ReorientedBlendNormal(){
//         vec3 t = texture(baseMap,   uv).xyz * vec3( 2.0,  2.0, 2.0) + vec3(-1.0, -1.0,  0.0);
// vec3 u = texture(detailMap, uv).xyz * vec3(-2.0, -2.0, 2.0) + vec3( 1.0,  1.0, -1.0);
// vec3 r = normalize(t * dot(t, u) - u * t.z);
// return r;
//     }

//     fn UDNBlendNormal(){
    // vec3 t = texture(baseMap,   uv).xyz * 2.0 - 1.0;
    // vec3 u = texture(detailMap, uv).xyz * 2.0 - 1.0;
    // vec3 r = normalize(t.xy + u.xy, t.z);
    // return r;
//     }
`,tn=`
    fn madfrac(A:f32, B:f32)-> f32 {
        return A*B-floor(A*B) ;
    }

    fn sampleRandomDir(count:u32,SAMPLE_COUNT:u32) -> vec3<f32>{
    var ray_dir = sphericalFibonacci(f32((count)), f32(SAMPLE_COUNT) );
    return normalize(ray_dir) ;
    }

    fn sphericalFibonacci( i : f32 ,  n : f32 ) -> vec3<f32>{
        const PHI = sqrt(5.0) * 0.5 + 0.5;
        let phi = 2.0 * PI * madfrac(i, PHI - 1);
        let cosTheta = 1.0 - (2.0 * i + 1.0) * (1.0 / n);
        let sinTheta = sqrt(saturate(1.0 - cosTheta*cosTheta));

        return vec3<f32>(
            cos(phi) * sinTheta,
            sin(phi) * sinTheta,
            cosTheta);

    }
`,rn=`
    #include "MathShader"

    fn buildMatrix3x3() -> mat3x3<f32>{
        var mat3 = mat3x3<f32>(
            1.0,0.0,0.0,
            0.0,1.0,0.0,
            0.0,0.0,1.0,
        );
        return mat3 ;
    }

    fn buildMatrix4x4() -> mat4x4<f32>{
        var mat4 = mat4x4<f32>(
            1.0,0.0,0.0,0.0,
            0.0,1.0,0.0,0.0,
            0.0,0.0,1.0,0.0,
            0.0,0.0,0.0,1.0,
        );
        return mat4 ;
    }

    fn buildRotateXMat3(rad:f32) -> mat3x3<f32>{
        var xrot = mat3x3<f32>(
            1.0,0.0,0.0,
            0.0,cos(rad),-sin(rad),
            0.0,sin(rad),cos(rad)
        );
        return xrot;
    }

    fn buildRotateXMat4(rad:f32,x:f32,y:f32,z:f32) -> mat4x4<f32>{
        var xrot = mat4x4<f32>(
            1.0,0.0,0.0,0.0,
            0.0,cos(rad),-sin(rad),0.0,
            0.0,sin(rad),cos(rad),0.0,
            x,y,z,1.0,
        );
        return xrot;
    }

    fn buildYRotateXMat4(radY:f32,x:f32,y:f32,z:f32) -> mat4x4<f32>{
        var yRot = mat4x4<f32>(
            cos(radY),0.0,sin(radY),0.0,
            0.0,1.0,0.0,0.0,
            -sin(radY),0.0,cos(radY),0.0,
            x,y,z,1.0,
        );
        return yRot;
    }

    fn buildRotateXYZMat4(radX:f32,radY:f32,radZ:f32,x:f32,y:f32,z:f32) -> mat4x4<f32>{
        var xRot = mat4x4<f32>(
            1.0,0.0,0.0,0.0,
            0.0,cos(radX),-sin(radX),0.0,
            0.0,sin(radX),cos(radX),0.0,
            0.0,0.0,0.0,1.0,
        );
        var yRot = mat4x4<f32>(
            cos(radY),0.0,sin(radY),0.0,
            0.0,1.0,0.0,0.0,
            -sin(radY),0.0,cos(radY),0.0,
            0.0,0.0,0.0,1.0,
        );
        var zRot = mat4x4<f32>(
            cos(radZ),-sin(radZ),0.0,0.0,
            sin(radZ), cos(radZ),0.0,0.0,
            0.0,0.0,1.0,0.0,
            0.0,0.0,0.0,1.0,
        );
        var fMat = xRot * yRot * zRot ;
        fMat[3].x = x;
        fMat[3].y = y;
        fMat[3].z = z;
        return fMat;
    }

    fn buildRotateYMat3(rad:f32) -> mat3x3<f32>{
        var yrot = mat3x3<f32>(
            cos(rad),0.0,sin(rad),
            0.0,1.0,0.0,
            -sin(rad),0.0,cos(rad)
        );
        return yrot ;
    }

    fn buildRotateZ(rad:f32) -> mat3x3<f32>{
        var zrot = mat3x3<f32>(
            cos(rad),-sin(rad),0.0,
            sin(rad), cos(rad),0.0,
            0.0,0.0,1.0
        );
        return zrot;
    }

    // fn buildRotateXMat4(rad:f32) -> mat4x4<f32>{
    //     var xrot = mat4x4<f32>(
    //         1.0,0.0,0.0,0.0,
    //         0.0,cos(rad),-sin(rad),0.0,
    //         0.0,sin(rad),cos(rad),0.0,
    //         0.0,0.0,0.0,1.0);
    //     return xrot;
    // }

    fn bulidTranslateMat4(x:f32,y:f32,z:f32) -> mat4x4<f32>{
        var trans = mat4x4<f32>(
            1.0,0.0,0.0,0.0,
            0.0,1.0,0.0,0.0,
            0.0,0.0,1.0,0.0,
            x,y,z,1.0);
        return trans;
    }

`,an=`
    struct LightData {
        index:f32,
        lightType:i32,
        radius:f32,
        linear:f32,
        
        position:vec3<f32>,
        lightMatrixIndex:f32,

        direction:vec3<f32>,
        quadratic:f32,

        lightColor:vec3<f32>,
        intensity:f32,

        innerCutOff :f32,
        outerCutOff:f32,
        range :f32,
        castShadow:i32,

        lightTangent:vec3<f32>,
        ies:f32,
    };

    const PointLightType = 1;
    const DirectLightType = 2;
    const SpotLightType = 3;

    struct ClusterBox {
        minPoint:vec4<f32>,
        maxPoint:vec4<f32>
    };

    struct LightIndex {
            count:f32,
            start:f32,
            empty0:f32,
            empty1:f32,
    };

    struct ClustersUniform {
        clusterTileX:f32,
        clusterTileY:f32,
        clusterTileZ:f32,
        numLights:f32,
        maxNumLightsPerCluster:f32,
        near:f32,
        far:f32,
        screenWidth:f32,
        screenHeight:f32,
        clusterPix:f32, 
    };

    @group(2) @binding(1)
    var<storage,read> lightBuffer: array<LightData>;
    @group(2) @binding(2)
    var<uniform> clustersUniform : ClustersUniform;
    @group(2) @binding(3)
    var<storage,read> lightAssignBuffer : array<f32>;
    @group(2) @binding(4)
    var<storage,read> assignTable : array<LightIndex>;
    #if DEBUG_CLUSTER
        @group(2) @binding(5)
        var<storage,read> clusterBuffer : array<ClusterBox>;
    #endif

    fn getLight( index:i32 ) -> LightData {
        let lightId = i32(lightAssignBuffer[index]);
        var lightData = lightBuffer[lightId];
        return lightData ;
    }

    fn linearTo01Depth(depth : f32) -> f32 {
        return (globalUniform.far ) * globalUniform.near / fma(depth, globalUniform.near-globalUniform.far, globalUniform.far);
    }

    fn getClusterId3() -> vec3<u32> {
        let z = linearTo01Depth(ORI_VertexVarying.fragCoord.z) ; 

        let sliceScale = f32(clustersUniform.clusterTileZ) / log2(globalUniform.far / globalUniform.near);
        let sliceBias = -(f32(clustersUniform.clusterTileZ) * log2(globalUniform.near) / log2(globalUniform.far / globalUniform.near));
        let zTile = u32(max(log2(z) * sliceScale + sliceBias, 0.0));

        var screenUV = ORI_VertexVarying.fragCoord.xy / vec2<f32>( globalUniform.windowWidth , globalUniform.windowHeight );
        let i = u32(floor(screenUV.x * clustersUniform.clusterTileX)) ;
        let j = u32(floor(screenUV.y * clustersUniform.clusterTileY) );

        return vec3<u32>(i,j,zTile);
    }

    fn getCluster() -> LightIndex {
        let tile = getClusterId3();
        let id = tile.x +
            tile.y * u32(clustersUniform.clusterTileX) +
            tile.z * u32(clustersUniform.clusterTileX) * u32(clustersUniform.clusterTileY);
        return assignTable[id];
    }

    fn getClusterIndex() -> u32 {
        let tile = getClusterId3();
        let id = tile.x +
            tile.y * u32(clustersUniform.clusterTileX) +
            tile.z * u32(clustersUniform.clusterTileX) * u32(clustersUniform.clusterTileY);
        return id;
    }
`,sn=`
  #include "BRDF_frag"
  #include "MathShader"
  #include "FastMathShader"
  #include "Common_frag"
  #include "GlobalUniform"

  #include "PhysicMaterialUniform_frag"
  #include "NormalMap_frag"
  #include "LightingFunction_frag"
  #include "Irradiance_frag"
  #include "ColorUtil_frag"
  #include "BxdfDebug_frag"

  struct FHairTransmittanceData{
    bUseBacklit:bool,
    bUseSeparableR:bool,
    bUseLegacyAbsorption:bool
  };
 
  //ORI_ShadingInput
  fn initFragData() {
      fragData.Albedo = ORI_ShadingInput.BaseColor ;
      fragData.Ao = clamp( pow(ORI_ShadingInput.AmbientOcclusion,materialUniform.ao) , 0.0 , 1.0 ) ; 
      fragData.Roughness = ORI_ShadingInput.Roughness ; 
      fragData.Metallic = ORI_ShadingInput.Metallic ; 
      fragData.Emissive = ORI_ShadingInput.EmissiveColor.rgb ; 
      fragData.Specular = vec3f(materialUniform.specularColor.rgb) ; 
      fragData.N = ORI_ShadingInput.Normal;
      let viewDir = normalize(globalUniform.CameraPos.xyz - ORI_VertexVarying.vWorldPos.xyz ) ;
      fragData.V = viewDir ;
      fragData.Ao = materialUniform.ao ;
      #if USE_TANGENT
        fragData.T = ORI_VertexVarying.TANGENT.xyz * ORI_VertexVarying.TANGENT.w ;
      #endif
 
      let R = 2.0 * dot( fragData.V , fragData.N ) * fragData.N - fragData.V ;
      fragData.R = R ;//reflect( fragData.V , fragData.N ) ;

      fragData.NoV = saturate(dot(fragData.N, fragData.V)) ;

      fragData.F0 = mix(vec3<f32>(materialUniform.specularColor.rgb), fragData.Albedo.rgb, fragData.Metallic);
      
      fragData.F = computeFresnelSchlick(fragData.NoV, fragData.F0);
      fragData.KD = vec3<f32>(fragData.F) ;
      fragData.KS = vec3<f32>(0.0) ;

      fragData.Indirect = 0.0 ;
      fragData.Reflectance = 1.0 ;
  }

  

  fn transformHairNormal(normal : vec3<f32>) -> vec3<f32>{
      var face = 1.0 ;
      if(ORI_VertexVarying.face){
          face = 1.0 ;
      }else{
          face = -1.0 ;
      }
      #if USE_TANGENT
        let T = ORI_VertexVarying.TANGENT.xyz;
        let N = ORI_VertexVarying.vWorldNormal ;
        let B = cross(T,N) * ORI_VertexVarying.TANGENT.w * face;
        let mat3 = mat3x3<f32>(T,B,N);
        let n = mat3 * normal;
        return n ;
      #else
        return normal ;
      #endif
  }


  fn Hair_g( B:f32 ,  Theta:f32 ) -> f32
  {
      return exp(-0.5 * pow2(Theta) / (B * B)) / (sqrt(2 * PI) * B);
  }

  fn Hair_F( CosTheta:f32 )-> f32
  {
      let n = 1.55;
      let F0 = pow2((1.0 - n) / (1.0 + n));
      return F0 + (1.0 - F0) * pow5(1.0 - CosTheta);
  }

  fn HairColorToAbsorption( C:vec3f ,  B:f32 ) -> vec3f
  {
      let b2 = B * B;
      let b3 = B * b2;
      let b4 = b2 * b2;
      let b5 = B * b4;
      let D = (5.969 - 0.215 * B + 2.532 * b2 - 10.73 * b3 + 5.574 * b4 + 0.245 * b5);
      return pow2v3(log(C) / D);
  }

  fn Luminance(  LinearColor : vec3f ) -> f32
  {
    return dot( LinearColor, vec3f( 0.3, 0.59, 0.11 ) );
  }

  fn KajiyaKayDiffuseAttenuation( L:vec3f,  V:vec3f,  N:vec3f,  Shadow:f32 ) -> vec3f
  {
    // Use soft Kajiya Kay diffuse attenuation
    var KajiyaDiffuse = 1.0 - abs(dot(N, L));

    var FakeNormal = normalize(V - N * dot(V, N));
    //N = normalize( DiffuseN + FakeNormal * 2 );
    let nN = FakeNormal;

    let BaseColor = fragData.Albedo.rgb / PI ;
    // Hack approximation for multiple scattering.
    var Wrap = 1.0;
    var NoL = saturate((dot(nN, L) + Wrap) / squareF(1.0 + Wrap));
    var DiffuseScatter = (1.0 / PI) * mix(NoL, KajiyaDiffuse, 0.33) * fragData.Metallic;
    var Luma = Luminance(BaseColor);
    var ScatterTint = pow(BaseColor / Luma, vec3f(1.0 - Shadow));
    return sqrt(BaseColor) * DiffuseScatter * ScatterTint;
  }

  fn HairNormal( ID : f32 ) -> vec4f {
      let tangentA = vec4f(0.0,0.0,0.3,1.0);
      let tangentB = vec4f(0.0,0.0,-0.3,1.0);

      let iTangent = mix(tangentA,tangentB,vec4f(ID));
      var tangent = vec4f(0.0);
      #if USE_FLOWER

      #else 
        let tt = vec4f(0.0,-1.0,0.0,1.0);
        tangent = tt + iTangent;
      #endif

      return normalize(tangent) ;
  }

  fn hairShading( light:LightData , sV:vec3f, N:vec3f, Shadow:f32 , HairTransmittance : FHairTransmittanceData ,  InBacklit:f32 ,  Area:f32 ,  Random:vec2f ) -> vec3f{
      var ClampedRoughness = clamp(fragData.Roughness, 1/255.0, 1.0);
      let Backlit	= min(InBacklit, materialUniform.backlit);
      let HairColor = fragData.Albedo.rgb ;
      let lightCC = pow( light.lightColor.rgb,vec3<f32>(2.2));
      var lightColor = getHDRColor( lightCC.rgb , light.linear )  ;
      var lightAtt = light.intensity  ;

      let V = normalize(sV) ;
      let L = normalize(-light.direction) ;
      let H = normalize(N+L) ;
      var S : vec3f= vec3f(0.0) ;

      var KajiyaKayDiffuseFactor = 1.0;

      let VoL       = dot(V,L);                                                      
      let SinThetaL = clamp(dot(N,L), -1.0, 1.0);
      let SinThetaV = clamp(dot(N,V), -1.0, 1.0);

      var CosThetaD = cos( 0.5 * abs( asinFast( SinThetaV ) - asinFast( SinThetaL ) ) );
      // var CosThetaD = cos( 0.5 * abs( asin( SinThetaV ) - asin( SinThetaL ) ) );
      
      var Lp = L - SinThetaL * N;
      var Vp = V - SinThetaV * N;
      var CosPhi = dot(Lp,Vp) * rsqrt( dot(Lp,Lp) * dot(Vp,Vp) + 1e-4 );
      var CosHalfPhi = sqrt( saturate( 0.5 + 0.5 * CosPhi ) );

      let n = 1.55;
      let n_prime = 1.19 / CosThetaD + 0.36 * CosThetaD;

      let Shift = 0.035;
      var Alpha:array<f32,3> = array<f32,3>(
        -Shift * 2.0,
        Shift,
        Shift * 4.0,
      );

      var B:array<f32,3> =array<f32,3>(
        Area + pow2(ClampedRoughness),
        (Area + pow2(ClampedRoughness) / 2.0),
        Area + pow2(ClampedRoughness) * 2.0,
      );
     
      //S SR
      let sa = sin(Alpha[0]);
      let ca = cos(Alpha[0]);
      var ShiftA = 2.0 * sa * (ca * CosHalfPhi * sqrt(1.0 - SinThetaV * SinThetaV) + sa * SinThetaV);
      var BScale = 1.0;
      if(HairTransmittance.bUseSeparableR){
          BScale = sqrt(2.0) * CosHalfPhi ;
      }
      var Mp_R = Hair_g(B[0] * BScale, SinThetaL + SinThetaV - ShiftA);
      var Np_R = 0.25 * CosHalfPhi;
      var Fp_R = Hair_F(sqrt(saturate(0.5 + 0.5 * (VoL))));
      S += vec3f(Mp_R* Np_R * Fp_R * (fragData.F0 * 2.0)) * mix(1.0, 0.0, saturate(-VoL));
      KajiyaKayDiffuseFactor -= Fp_R;

      //S ST
      var Mp_ST = Hair_g( B[1], SinThetaL + SinThetaV - Alpha[1] );
      var a_ST = 1.0 / n_prime;
      var h_ST = CosHalfPhi * ( 1.0 + a_ST * ( 0.6 - 0.8 * CosPhi ) );
      var f_ST = Hair_F( CosThetaD * sqrt( saturate( 1.0 - h_ST * h_ST ) ) );
      var Fp_ST = pow2(1.0 - f_ST);
      var Tp_ST : vec3f = vec3f( 0.0 );
      if (HairTransmittance.bUseLegacyAbsorption)
      {
        Tp_ST = pow(HairColor.rgb, vec3f(0.5 * sqrt(1.0 - pow2(h_ST * a_ST)) / CosThetaD));
      }
      else
      {
        let AbsorptionColor = HairColorToAbsorption(HairColor.rgb,0.3);
        Tp_ST = exp(-AbsorptionColor * 2.0 * abs(1.0 - pow2(h_ST * a_ST) / CosThetaD));
      }
     
      var Np_ST = exp( -3.65 * CosPhi - 3.98 );
      
      S += Mp_ST * Np_ST * Fp_ST * Tp_ST * Backlit;
      KajiyaKayDiffuseFactor -= Fp_ST;

      //S TRT
      var Mp_TRT = Hair_g( B[2], SinThetaL + SinThetaV - Alpha[2] );
      
      //float h = 0.75;
      var f_TRT = Hair_F( CosThetaD * 0.5 );
      var Fp_TRT = pow2(1.0 - f_TRT) * f_TRT;
      var Tp_TRT = pow( HairColor.rgb , vec3f(0.8 / CosThetaD) );
      var Np_TRT = exp( 17.0 * CosPhi - 16.78 );
      
      S += Mp_TRT * Np_TRT * Fp_TRT * Tp_TRT;
      KajiyaKayDiffuseFactor -= Fp_TRT;
      // S = vec3f((KajiyaKayDiffuseFactor));
     
      S += KajiyaKayDiffuseAttenuation(L,V,N,Shadow) ;//* saturate(KajiyaKayDiffuseFactor);
      // S = vec3f((KajiyaKayDiffuseFactor));
      S = -min(-S, vec3f(0.0));
      return 2.0 * PI *vec3f(S) * (lightAtt / LUMEN) ;
  }

  fn BSSSRDFShading(){
    initFragData();

    var irradiance = vec3<f32>(0.0) ;
    #if USEGI
        irradiance += getIrradiance().rgb ;
    #else
        let MAX_REFLECTION_LOD  = f32(textureNumLevels(prefilterMap)) ;
        irradiance += (globalUniform.skyExposure * textureSampleLevel(prefilterMap, prefilterMapSampler, fragData.N.xyz, 0.8 * (MAX_REFLECTION_LOD) ).rgb);
    #endif
    irradiance = ORI_ShadingInput.SSS + (irradiance.rgb);
    fragData.Irradiance = irradiance.rgb ;

    //***********lighting-PBR part********* 
    var specColor = vec3<f32>(0.0) ;
    let lightIndex = getCluster();
    let start = max(lightIndex.start, 0.0);
    let count = max(lightIndex.count, 0.0);
    let end = max(start + count , 0.0);
    for(var i:i32 = i32(start) ; i < i32(end); i += 1 )
    {
        let light = getLight(i32(i));
        switch (light.lightType) {
          case PointLightType: {
            // specColor += pointLighting( fragData.Albedo.rgb,ORI_VertexVarying.vWorldPos.xyz,fragData.N,fragData.V,fragData.Roughness,fragData.Metallic,light) ;
          }
          case DirectLightType: {
              // specColor += directHairLighting( fragData.Albedo.rgb ,fragData.N,fragData.V,fragData.Roughness ,fragData.Metallic, light , globalUniform.shadowBias) ;
              var fHairTransmittanceData : FHairTransmittanceData ;
              fHairTransmittanceData.bUseBacklit = true ;
              fHairTransmittanceData.bUseSeparableR = true ;
              fHairTransmittanceData.bUseLegacyAbsorption = false ;

              //use shadow visible backlit
              // var shadow = 0.0 ;
              // if(light.castShadow>=0){
              //     #if USE_SHADOWMAPING
              //       shadow = shadowStrut.directShadowVisibility[i32(light.castShadow)] ; 
              //     #endif
              // }

              specColor = hairShading(light,fragData.V, ORI_ShadingInput.HairNormal , 1.0 ,fHairTransmittanceData,1.0,materialUniform.area,vec2f(0.0));
          }
          case SpotLightType: {
            // specColor += spotLighting( fragData.Albedo.rgb,ORI_VertexVarying.vWorldPos.xyz,fragData.N,fragData.V,fragData.Roughness,fragData.Metallic , light ) ;
          }
          default: {
          }
        }
    }


    let sunLight = lightBuffer[0] ;
    //***********lighting-PBR part********* 
    var F = FresnelSchlickRoughness(fragData.NoV, fragData.F0.rgb , fragData.Roughness);
    var kS = F;
    // var kD = vec3(1.0) - kS;
    // kD = kD * (1.0 - fragData.Metallic);
    let envIBL =  materialUniform.envIntensity * IBLEnv(fragData.V ,fragData.N ,fragData.Roughness ) ;
    fragData.EnvColor = envIBL ;
    // fragData.Specular = envIBL ;
    //***********indirect-specular part********* 
    
    var iblSpecularResult = fragData.Metallic * fragData.EnvColor * materialUniform.specularColor.rgb ;
    //***********indirect-specular part********* 
    
    //***********indirect-ambient part********* 
    var kdLast = (1.0 - fragData.F0.r) * (1.0 - fragData.Metallic);    
    var iblDiffuseResult = irradiance * kdLast * fragData.Albedo.rgb * (vec3(1.0) - kS) ;
    //irradiance
    //***********indirect-ambient part********* 
    var indirectResult = (iblSpecularResult + iblDiffuseResult * max(sunLight.quadratic,0.05) ) * fragData.Ao ;
    fragData.LightChannel = specColor ;

    // Using stripped down, 'pure log', formula. Parameterized by grey points and dynamic range covered.
    #if USEGBUFFER
        var normal_rgba8unorm = (ORI_VertexVarying.vWorldNormal + 1.0) * 0.5;
        normal_rgba8unorm = clamp(normal_rgba8unorm, vec3<f32>(0.0), vec3<f32>(1.0));
        ORI_FragmentOutput.worldNormal = vec4<f32>(normal_rgba8unorm,1.0);
        ORI_FragmentOutput.material = vec4<f32>(1.0,fragData.Roughness,fragData.Metallic,1.0);
    #endif
    
    #if USE_WORLDPOS
        ORI_FragmentOutput.worldPos = vec4<f32>(ORI_VertexVarying.vWorldPos.xyzw);
    #endif
  
    let finalColor =  LinearToGammaSpace(vec3f(specColor + indirectResult) ) ;
    ORI_FragmentOutput.color = vec4<f32>( finalColor ,fragData.Albedo.a) ;
    // ORI_FragmentOutput.color = vec4<f32>( vec3f(specColor) ,fragData.Albedo.a) ;
}

  `,on=`
  #include "Clearcoat_frag"
  #include "BRDF_frag"
  #include "MathShader"
  #include "FastMathShader"
  #include "Common_frag"
  #include "GlobalUniform"

  #include "PhysicMaterialUniform_frag"
  #include "NormalMap_frag"
  #include "LightingFunction_frag"
  #include "Irradiance_frag"
  #include "ColorUtil_frag"
  #include "BxdfDebug_frag"


 
  //ORI_ShadingInput
  fn initFragData() {
      fragData.Albedo = ORI_ShadingInput.BaseColor ;
      fragData.Ao = clamp( pow(ORI_ShadingInput.AmbientOcclusion,materialUniform.ao) , 0.0 , 1.0 ) ; 
      fragData.Roughness = clamp((ORI_ShadingInput.Roughness),0.003,1.0) ; 
      fragData.Metallic = ORI_ShadingInput.Metallic ; 
      fragData.Emissive = ORI_ShadingInput.EmissiveColor.rgb ; 
      fragData.N = ORI_ShadingInput.Normal;
      let viewDir = normalize(globalUniform.CameraPos.xyz - ORI_VertexVarying.vWorldPos.xyz) ;
      fragData.V = viewDir ;
      #if USE_TANGENT
        fragData.T = ORI_VertexVarying.TANGENT.xyz ;
      #endif
 
      let R = 2.0 * dot( fragData.V , fragData.N ) * fragData.N - fragData.V ;
      fragData.R = R ;//reflect( fragData.V , fragData.N ) ;

      fragData.NoV = saturate(dot(fragData.N, fragData.V)) ;

      fragData.F0 = mix(vec3<f32>(materialUniform.specularColor.rgb), fragData.Albedo.rgb, fragData.Metallic);
      
      fragData.F = computeFresnelSchlick(fragData.NoV, fragData.F0);
      fragData.KD = vec3<f32>(fragData.F) ;
      fragData.KS = vec3<f32>(0.0) ;

      fragData.Indirect = 0.0 ;
      fragData.Reflectance = 1.0 ;

      fragData.ClearcoatRoughness = materialUniform.clearcoatRoughnessFactor ;
      #if USE_CLEARCOAT_ROUGHNESS
        fragData.ClearcoatRoughness = getClearcoatRoughness() * materialUniform.clearcoatRoughnessFactor;
      #endif
  }

  fn BsDFShading(){
      initFragData();

      var irradiance = vec3<f32>(0.0) ;
      #if USEGI
          irradiance += getIrradiance().rgb ;
      #else
          let MAX_REFLECTION_LOD  = f32(textureNumLevels(prefilterMap)) ;
          irradiance += (globalUniform.skyExposure * textureSampleLevel(prefilterMap, prefilterMapSampler, fragData.N.xyz, 0.8 * (MAX_REFLECTION_LOD) ).rgb);
      #endif
      irradiance = ORI_ShadingInput.SSS + LinearToGammaSpace(irradiance.rgb);
      fragData.Irradiance = irradiance.rgb ;

   

      //***********lighting-PBR part********* 
      var specColor = vec3<f32>(0.0) ;
      let lightIndex = getCluster();
      let start = max(lightIndex.start, 0.0);
      let count = max(lightIndex.count, 0.0);
      let end = max(start + count , 0.0);
      for(var i:i32 = i32(start) ; i < i32(end); i += 1 )
      {
          let light = getLight(i32(i));
          switch (light.lightType) {
            case PointLightType: {
              specColor += pointLighting( fragData.Albedo.rgb,ORI_VertexVarying.vWorldPos.xyz,fragData.N,fragData.V,fragData.Roughness,fragData.Metallic,light) ;
            }
            case DirectLightType: {
              specColor += directDulLighting( fragData.Albedo.rgb ,fragData.N,fragData.V,fragData.Roughness ,fragData.Metallic, light , globalUniform.shadowBias) ;
            }
            case SpotLightType: {
              specColor += spotLighting( fragData.Albedo.rgb,ORI_VertexVarying.vWorldPos.xyz,fragData.N,fragData.V,fragData.Roughness,fragData.Metallic , light ) ;
            }
            default: {
            }
          }
      }


      fragData.LightChannel = specColor ;

      let sunLight = lightBuffer[0] ;
      //***********lighting-PBR part********* 
      var F = FresnelSchlickRoughness(fragData.NoV, fragData.F0, fragData.Roughness);
      var kS = F;
      var kD = vec3(1.0) - kS;
      kD = kD * (1.0 - fragData.Metallic);
      let envIBL =  materialUniform.envIntensity * approximateSpecularIBL( F , fragData.Roughness , fragData.R , fragData.NoV ) ;
      fragData.EnvColor = envIBL ;
      //***********indirect-specular part********* 
      
      var surfaceReduction = 1.0/(fragData.Roughness*fragData.Roughness+1.0);   
      var oneMinusReflectivity = oneMinusReflectivity(fragData.Metallic , materialUniform.materialF0.r );
      var grazingTerm = clamp((1.0 - fragData.Roughness ) + (1.0 - oneMinusReflectivity),0.0,1.0);
      var t = pow5(fragData.NoV);
      var fresnelLerp = FresnelLerp(fragData.NoV,fragData.F0.rgb,vec3<f32>(grazingTerm)) ;   
      var iblSpecularResult = surfaceReduction * fragData.EnvColor * fresnelLerp + envIBL;
      iblSpecularResult *= max(sunLight.quadratic,0.05) ;
      //***********indirect-specular part********* 
      
      //***********indirect-ambient part********* 
      var kdLast = (1.0 - fragData.F0.r) * (1.0 - fragData.Metallic);    
      //  Dim the edges, there should be more specular reflection at the edges
      var iblDiffuseResult = irradiance * 2.0 * kdLast * fragData.Albedo.rgb * (vec3(1.0) - kS) ;
      //irradiance
      //***********indirect-ambient part********* 
      var indirectResult = (iblSpecularResult + iblDiffuseResult) * fragData.Ao * max(sunLight.quadratic,0.05);
      // debugOut = vec4f(iblDiffuseResult,1.0);

      ORI_FragmentOutput.color = vec4<f32>(0.0);

      // Using stripped down, 'pure log', formula. Parameterized by grey points and dynamic range covered.
      #if USEGBUFFER
          var normal_rgba8unorm = (ORI_VertexVarying.vWorldNormal + 1.0) * 0.5;
          normal_rgba8unorm = clamp(normal_rgba8unorm, vec3<f32>(0.0), vec3<f32>(1.0));
          ORI_FragmentOutput.worldNormal = vec4<f32>(normal_rgba8unorm,1.0);
          ORI_FragmentOutput.material = vec4<f32>(1.0,fragData.Roughness,fragData.Metallic,1.0);
      #endif
      
      #if USE_WORLDPOS
          ORI_FragmentOutput.worldPos = vec4<f32>(ORI_VertexVarying.vWorldPos.xyzw);
      #endif
      
      var color = specColor + indirectResult ;
      color += fragData.Emissive.xyz ;

      var clearCoatColor = vec3<f32>(0.0);
      #if USE_CLEARCOAT
        let clearCoatBaseColor = vec3<f32>(1.0) * materialUniform.baseColor.rgb ;
        let clearNormal = fragData.N ;
        let clearcoatRoughness = fragData.ClearcoatRoughness ;
        let att = sunLight.intensity / LUMEN ;
        let clearCoatLayer = ClearCoat_BRDF( color , materialUniform.clearcoatColor.rgb , materialUniform.ior , clearNormal , -sunLight.direction ,-fragData.V , materialUniform.clearcoatWeight , clearcoatRoughness , att );
        color = vec3<f32>(clearCoatLayer.rgb/fragData.Albedo.a) ; 
      #endif
      
      let retColor = (LinearToGammaSpace(color.rgb));
      ORI_FragmentOutput.color = vec4<f32>( retColor ,fragData.Albedo.a) ;
  }

  `,nn=`
    #include "Common_vert"
    #include "Common_frag"
    #include "UnLit_frag"
    #include "UnLitMaterialUniform_frag"

    #if USE_CUSTOMUNIFORM
        struct MaterialUniform {
            transformUV1:vec4<f32>,
            transformUV2:vec4<f32>,
            baseColor: vec4<f32>,
            alphaCutoff: f32,
        };
    #endif

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_2d<f32>;

    fn vert(inputData:VertexAttributes) -> VertexOutput {
        ORI_Vert(inputData) ;
        return ORI_VertexOut ;
    }

    fn frag(){
        var transformUV1 = materialUniform.transformUV1;
        var transformUV2 = materialUniform.transformUV2;

        var uv = transformUV1.zw * ORI_VertexVarying.fragUV0 + transformUV1.xy; 
        let color = textureSample(baseMap,baseMapSampler,uv) ;
        if(color.w < 0.5){
            discard ;
        }
        
        ORI_ShadingInput.BaseColor = color * materialUniform.baseColor ;
        
        UnLit();

        // ORI_FragmentOutput.color = vec4<f32>( 1.0,0.0,0.0,1.0) ;
    }
`,ln=`
    #include "Common_vert"
    #include "Common_frag"
    #include "ClusterLight"
    #include "UnLit_frag"
    #include "UnLitMaterialUniform_frag"

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_2d<f32>;

    fn vert(inputData:VertexAttributes) -> VertexOutput {
        ORI_Vert(inputData) ;
        return ORI_VertexOut ;
    }

    fn frag(){
        var transformUV1 = materialUniform.transformUV1;
        var transformUV2 = materialUniform.transformUV2;

        var uv = transformUV1.zw * ORI_VertexVarying.fragUV0 + transformUV1.xy; 
        let baseColor = textureSample(baseMap,baseMapSampler,uv) ;
        if(baseColor.w < 0.5){
            discard ;
        }

        var lightColor = vec4<f32>(0.0);
        let lightIndex = getCluster();
        let start = max(lightIndex.start, 0.0);
        let count = max(lightIndex.count, 0.0);
        let end = max(start + count , 0.0);
        for(var i:i32 = i32(start) ; i < i32(end); i += 1 )
        {
          let light = getLight(i32(i));
  
          switch (light.lightType) {
            case PointLightType: {
            }
            case DirectLightType: {
                var normal = ORI_VertexVarying.vWorldNormal ;
                let intensity = (light.intensity/10.0);
                let att = max(dot(normal,-light.direction),0.0) * intensity ;
                lightColor += baseColor * att * 0.5 + baseColor * 0.5 ; 
                // lightColor = baseColor * 0.5; 
            }
            case SpotLightType: {
            }
            default: {
            }
          }
        }
        
        ORI_ShadingInput.BaseColor = lightColor * materialUniform.baseColor ;
        ORI_ShadingInput.BaseColor.w = 1.0 ;
        UnLit();

        // let n = globalUniform.near ;
        // let f = globalUniform.far ;
        // let z = ORI_VertexVarying.fragCoord.z ;
        // ORI_FragmentOutput.out_depth = z * (n/(f-n)) ;
    }
`,hn=`
    #include "WorldMatrixUniform"
    #include "GlobalUniform"

    struct VertexOutput {
        @location(auto) fragUV: vec2<f32>,
        @builtin(position) member: vec4<f32>
    };

    @vertex
    fn main(@builtin(instance_index) index : u32, @location(auto) position: vec3<f32>, @location(auto) TEXCOORD_1: vec2<f32>) -> VertexOutput {
        let id = u32(index);
        let worldMatrix = models.matrix[id];

        let screenPos = vec2(((TEXCOORD_1 * 2.0) - vec2<f32>(1.0))) * 0.5 ; 
        return VertexOutput(TEXCOORD_1, vec4<f32>(screenPos, 0.0, 1.0));
    }
`,un=`
#version 450

layout(location = 0) in vec2 fragUV;

layout(location = 0) out vec4 o_Target;

layout(set = 0, binding = 0) uniform ConstUniform {
    mat4 projMat;
    mat4 viewMat;
    mat4 shadowMatrix;
    mat4 cameraWorldMatrix;
    mat4 pvMatrixInv;
    float frame;
    float time;
    float delta;
    float shadowBias;
    float skyExposure;
    float renderPassState;
    float quadScale;

};

layout(set = 2, binding = 0) uniform sampler baseMapSampler;
layout(set = 2, binding = 1) uniform texture2D baseMap;
layout(set = 3, binding = 0) uniform MaterialDataUniform {
    vec4 color;
};

void main() {
        vec2 uv = fragUV.xy;
    uv.y = 1.0 - uv.y;
        vec4 colorTexture = texture(sampler2D(baseMap, baseMapSampler), uv * quadScale) * color;
    o_Target = vec4(colorTexture.rgb, colorTexture.a);

    if (o_Target.r <= 0.5 && o_Target.g <= 0.5 && o_Target.b <= 0.5) {
        discard;
    }
    // float gamma     = 2.2;
    // float exposure  = 1.0;
    // float pureWhite = 1.0;

    // float luminance = dot(colorTexture.rgb, vec3(0.2126, 0.7152, 0.0722));
    // float mappedLuminance = (luminance * (1.0 + luminance/(pureWhite*pureWhite))) / (1.0 + luminance);

    // // Scale color by ratio of average luminances.
    // vec3 mappedColor = (mappedLuminance / luminance) * colorTexture.rgb;

    // // Gamma correction.
    // o_Target = vec4(pow(o_Target.rgb, vec3(1.0/gamma)), 1.0);
};
`,cn=`
#include "GlobalUniform"

struct uniformData {
    eyesPos: vec3<f32>,
    exposure: f32,
    roughness: f32,
};

struct FragmentOutput {
    @location(auto) o_Position: vec4<f32>,
    @location(auto) o_Normal: vec4<f32>,
    @location(auto) o_Color: vec4<f32>
};

@group(1) @binding(4)
var baseMapSampler: sampler;
@group(1) @binding(5)
var baseMap: texture_cube<f32>;

@group(2) @binding(0)
var<uniform> global: uniformData;

fn LinearToGammaSpace(linRGB: vec3<f32>) -> vec3<f32> {
    var linRGB1 = max(linRGB, vec3<f32>(0.0));
    linRGB1 = pow(linRGB1, vec3<f32>(0.4166666567325592));
    return max(((1.0549999475479126 * linRGB1) - vec3<f32>(0.054999999701976776)), vec3<f32>(0.0));
  }

@fragment
fn main(@location(auto) fragUV: vec2<f32>, @location(auto) vWorldPos: vec4<f32>, @location(auto) vWorldNormal: vec3<f32>) -> FragmentOutput {
    let maxLevel: u32 = textureNumLevels(baseMap);
    let textureColor:vec3<f32> = textureSampleLevel(baseMap, baseMapSampler, normalize(vWorldPos.xyz), global.roughness * f32(maxLevel) ).xyz;
    let o_Color = 0.618 * vec4<f32>(LinearToGammaSpace(textureColor) * globalUniform.skyExposure , 1.0);
    let o_Normal = vec4(vWorldNormal,1.0) ;
    let o_Position = vec4<f32>(vWorldPos.xyz,100000.0) ;
    return FragmentOutput(o_Position,o_Normal,o_Color);
}
`,$a=`
#include "Common_vert"
#include "FragmentVarying"
#include "GlobalUniform"

struct FragmentOutput {
    @location(auto) o_Position: vec4<f32>,
    @location(auto) o_Normal: vec4<f32>,
    @location(auto) o_Color: vec4<f32>
};

struct MaterialUniform {
    baseColor: vec4<f32>,
    emissiveColor: vec4<f32>,
    emissiveIntensity: f32,
    normalScale: f32,
    alphaCutoff: f32
};

@group(2) @binding(0)
var<uniform> materialUniform: MaterialUniform;

@group(1) @binding(auto)
var baseMapSampler: sampler;
@group(1) @binding(auto)
var baseMap: texture_2d<f32>;

@group(1) @binding(auto)
var normalMapSampler: sampler;
@group(1) @binding(auto)
var normalMap: texture_2d<f32>;

@group(1) @binding(auto)
var emissiveMapSampler: sampler;
@group(1) @binding(auto)
var emissiveMap: texture_2d<f32>;

fn vert(inputData:VertexAttributes) -> VertexOutput {
    ORI_Vert(inputData) ;
    return ORI_VertexOut ;
}

var<private> ORI_FragmentOutput: FragmentOutput;
var<private> ORI_VertexVarying: FragmentVarying;

@fragment
fn FragMain(vertex_varying:FragmentVarying) -> FragmentOutput {
    ORI_VertexVarying = vertex_varying;
    var texColor = textureSample(baseMap, baseMapSampler, ORI_VertexVarying.fragUV0.xy );

    var emissive = textureSample(emissiveMap, emissiveMapSampler, ORI_VertexVarying.fragUV0.xy ).rgb ;
    let intensity = materialUniform.emissiveIntensity * materialUniform.emissiveColor.a ;
    emissive = emissive.rgb * materialUniform.emissiveColor.rgb ;
    emissive = convertToHDRRGB(emissive,intensity);

    if (materialUniform.alphaCutoff-texColor.w > 0.0) {
        discard ;
    }

    var o_Position = vec4<f32>(ORI_VertexVarying.vWorldPos.xyz,emissive.r) ;
    var o_Normal = vec4<f32>((ORI_VertexVarying.vWorldNormal.xyz * 0.5 + 0.5 ),emissive.g) ;
    var o_Color = vec4<f32>((texColor * materialUniform.baseColor).rgb , emissive.b )  ;
    return FragmentOutput(o_Position,o_Normal,vec4<f32>(o_Color));
}

fn convertToHDRRGB( color : vec3<f32> , ins:f32 ) -> vec3<f32> {
    var hdrColor = vec3<f32>(0.0,0.0,0.0);
    hdrColor.r = color.r * pow(2.4, ins);
    hdrColor.g = color.g * pow(2.4, ins);
    hdrColor.b = color.b * pow(2.4, ins);
    return hdrColor;
}
`,dn=`
#include "WorldMatrixUniform"
#include "GlobalUniform"

struct VertexOutput {
    @location(auto) fragUV: vec2<f32>,
    @builtin(position) member: vec4<f32>
};

#if USE_MORPHTARGETS
    ${Je.getMorphTargetShaderBinding(2,1)}
#endif

#if USE_SKELETON
    ${ii.groupBindingAndFunctions(2,1)} 
#endif

var<private> worldMatrix: mat4x4<f32>;

struct VertexAttributes{
    @builtin(instance_index) index : u32,
    @location(auto) position: vec3<f32>,
    @location(auto) normal: vec3<f32>,
    @location(auto) uv: vec2<f32>,
    @location(auto) TEXCOORD_1: vec2<f32>,

    #if USE_METAHUMAN
        #if USE_TANGENT
            @location(auto) TANGENT: vec4<f32>,
            @location(auto) joints0: vec4<f32>,
            @location(auto) weights0: vec4<f32>,
            #if USE_JOINT_VEC8
                @location(auto) joints1: vec4<f32>,
                @location(auto) weights1: vec4<f32>,
                @location(auto) vIndex: f32,
            #else
                @location(auto) vIndex: f32,
            #endif
        #else
            @location(auto) joints0: vec4<f32>,
            @location(auto) weights0: vec4<f32>,
            #if USE_JOINT_VEC8
                @location(auto) joints1: vec4<f32>,
                @location(auto) weights1: vec4<f32>,
                @location(auto) vIndex: f32,
            #else
                @location(auto) vIndex: f32,
            #endif
        #endif
    #else
        #if USE_TANGENT
            @location(auto) TANGENT: vec4<f32>,
        #endif

        #if USE_SKELETON
            #if USE_TANGENT
                @location(auto) joints0: vec4<f32>,
                @location(auto) weights0: vec4<f32>,
                #if USE_JOINT_VEC8
                    @location(auto) joints1: vec4<f32>,
                    @location(auto) weights1: vec4<f32>,
                #endif
            #else
                @location(auto) joints0: vec4<f32>,
                @location(auto) weights0: vec4<f32>,
                #if USE_JOINT_VEC8
                    @location(auto) joints1: vec4<f32>,
                    @location(auto) weights1: vec4<f32>,
                #endif
            #endif
        #endif

        #if USE_MORPHTARGETS
            #if USE_TANGENT
                @location(auto) vIndex: f32,
            #else
                @location(auto) vIndex: f32,
            #endif
        #endif

    #endif
}

@vertex
fn main(vertex:VertexAttributes) -> VertexOutput {
    worldMatrix = models.matrix[vertex.index];
    let shadowMatrix: mat4x4<f32> = globalUniform.projMat * globalUniform.viewMat ;
    var vertexPosition = vertex.position.xyz;
    var vertexNormal = vertex.normal.xyz;

    #if USE_MORPHTARGETS
     ${Je.getMorphTargetCalcVertex()}    
    #endif

    #if USE_SKELETON
        #if USE_JOINT_VEC8
          worldMatrix *= getSkeletonWorldMatrix_8(vertex.joints0, vertex.weights0, vertex.joints1, vertex.weights1);
        #else
          worldMatrix *= getSkeletonWorldMatrix_4(vertex.joints0, vertex.weights0);
        #endif
    #endif

    var worldPos = worldMatrix * vec4<f32>(vertexPosition, 1.0) ;
    var vPos = shadowMatrix * worldPos;

    return VertexOutput(vertex.uv, vPos );  
}
`,fn=`
#include "WorldMatrixUniform"
#include "GlobalUniform"

struct VertexOutput {
    @location(auto) fragUV: vec2<f32>,
    @location(auto) worldPos: vec3<f32>,
    @builtin(position) member: vec4<f32>
};

#if USE_MORPHTARGETS
    ${Je.getMorphTargetShaderBinding(2,1)}
##endif
 
#if USE_SKELETON
    ${ii.groupBindingAndFunctions(2,1)} 
#endif

var<private> worldMatrix: mat4x4<f32>;

struct VertexAttributes{
  @builtin(instance_index) index : u32,
  @location(auto) position: vec3<f32>,
  @location(auto) normal: vec3<f32>,
  @location(auto) uv: vec2<f32>,
  @location(auto) TEXCOORD_1: vec2<f32>,

  
  #if USE_METAHUMAN
    #if USE_TANGENT
        @location(auto) TANGENT: vec4<f32>,
        @location(auto) joints0: vec4<f32>,
        @location(auto) weights0: vec4<f32>,
        @location(auto) joints1: vec4<f32>,
        @location(auto) weights1: vec4<f32>,
        @location(auto) vIndex: f32,
    #else
        @location(auto) joints0: vec4<f32>,
        @location(auto) weights0: vec4<f32>,
        @location(auto) joints1: vec4<f32>,
        @location(auto) weights1: vec4<f32>,
        @location(auto) vIndex: f32,
    #endif
    #else
    #if USE_TANGENT
        @location(auto) TANGENT: vec4<f32>,
    #endif

    #if USE_SKELETON
        #if USE_TANGENT
            @location(auto) joints0: vec4<f32>,
            @location(auto) weights0: vec4<f32>,
            #if USE_JOINT_VEC8
                @location(auto) joints1: vec4<f32>,
                @location(auto) weights1: vec4<f32>,
            #endif
        #else
            @location(auto) joints0: vec4<f32>,
            @location(auto) weights0: vec4<f32>,
            #if USE_JOINT_VEC8
                @location(auto) joints1: vec4<f32>,
                @location(auto) weights1: vec4<f32>,
            #endif
        #endif
    #endif

    #if USE_MORPHTARGETS
        #if USE_TANGENT
            @location(auto) vIndex: f32,
        #else
            @location(auto) vIndex: f32,
        #endif
    #endif

    #endif
}

@vertex
fn main(vertex:VertexAttributes) -> VertexOutput {
    worldMatrix = models.matrix[vertex.index];
    let shadowMatrix: mat4x4<f32> = globalUniform.projMat * globalUniform.viewMat ;
    var vertexPosition = vertex.position.xyz;

    #if USE_METAHUMAN
        ${Je.getMorphTargetCalcVertex()}
        #if USE_JOINT_VEC8
            worldMatrix *= getSkeletonWorldMatrix_8(vertex.joints0, vertex.weights0, vertex.joints1, vertex.weights1);
        #else
            worldMatrix *= getSkeletonWorldMatrix_4(vertex.joints0, vertex.weights0);
        #endif
    #endif

    #if USE_MORPHTARGETS
        ${Je.getMorphTargetCalcVertex()}
    #endif

    #if USE_SKELETON
        #if USE_JOINT_VEC8
          worldMatrix *= getSkeletonWorldMatrix_8(vertex.joints0, vertex.weights0, vertex.joints1, vertex.weights1);
        #else
          worldMatrix *= getSkeletonWorldMatrix_4(vertex.joints0, vertex.weights0);
        #endif
    #endif

    var worldPos = worldMatrix * vec4<f32>(vertexPosition, 1.0) ;
    var vPos = shadowMatrix * worldPos;
    return VertexOutput(vertex.uv, worldPos.xyz , vPos ); 
}
`,gn=`
    #if USE_ALPHACUT
      @group(1) @binding(0)
      var baseMapSampler: sampler;
      @group(1) @binding(1)
      var baseMap: texture_2d<f32>;
    #endif

    struct FragmentOutput {
      @location(auto) o_Target: vec4<f32>,
      @builtin(frag_depth) out_depth: f32
    };

    struct MaterialUniform {
      lightWorldPos: vec3<f32>,
      cameraFar: f32,
    };

    @group(2) @binding(0)
    var<uniform> materialUniform: MaterialUniform;

    @fragment
    fn main(@location(auto) fragUV: vec2<f32> , @location(auto) worldPos:vec3<f32> ) -> FragmentOutput {
        var distance = length(worldPos.xyz - materialUniform.lightWorldPos ) ;
        distance = distance / materialUniform.cameraFar ;
        var fragOut:FragmentOutput; 

      #if USE_ALPHACUT
        let Albedo = textureSample(baseMap,baseMapSampler,fragUV);
        if(Albedo.w > 0.5){
          fragOut = FragmentOutput(vec4<f32>(0.0),distance);
        }
      #else
        fragOut = FragmentOutput(vec4<f32>(0.0),distance);
      #endif
      
        return fragOut ;
    }
`,pn=`
    #if USE_ALPHACUT
      @group(1) @binding(0)
      var baseMapSampler: sampler;
      @group(1) @binding(1)
      var baseMap: texture_2d<f32>;
    #endif

    struct FragmentOutput {
      @location(auto) o_Target: vec4<f32>,
      @builtin(frag_depth) out_depth: f32
    };

    struct MaterialUniform {
      lightWorldPos: vec3<f32>,
      cameraFar: f32,
    };

    @group(2) @binding(0)
    var<uniform> materialUniform: MaterialUniform;

    @fragment
    fn main(@location(auto) fragUV: vec2<f32> , @location(auto) clipPos:vec3<f32> ) -> FragmentOutput {
        // var distance = length(worldPos.xyz - materialUniform.lightWorldPos ) ;
        // distance = distance / materialUniform.cameraFar ;
        var fragOut:FragmentOutput; 

      // #if USE_ALPHACUT
      //   let Albedo = textureSample(baseMap,baseMapSampler,fragUV);
      //   if(Albedo.w > 0.5){
      //     fragOut = FragmentOutput(vec4<f32>(0.0),distance);
      //   }
      // #else
      //   fragOut = FragmentOutput(vec4<f32>(0.0),distance);
      // #endif
      
        return fragOut ;
    }
`,An=`
    #include "GlobalUniform"
    #include "MathShader"
    struct VertexOutput {
        @location(auto) vID: f32 ,
        @location(auto) vPos: vec3<f32> ,
        @location(auto) vClipPos: vec4<f32> ,
        @builtin(position) member: vec4<f32>
    };

    struct Uniforms {
        matrix : array<mat4x4<f32>>
    };

    @group(0) @binding(1)
    var<storage, read> models : Uniforms;

    var<private> worldMatrix: mat4x4<f32>;

    #if USE_MORPHTARGETS
        ${Je.getMorphTargetShaderBinding(1,0)}
    #endif

    #if USE_SKELETON
        ${ii.groupBindingAndFunctions(1,0)}
    #endif

    @vertex
    fn main(
        @builtin(instance_index) index : u32,
        @location(auto) position: vec3<f32>,
        @location(auto) normal: vec3<f32>,
        @location(auto) uv: vec2<f32>,
        @location(auto) TEXCOORD_1: vec2<f32>,

    #if USE_TANGENT
        @location(auto) TANGENT: vec4<f32>,
        #if USE_SKELETON
            @location(auto) joints0: vec4<f32>,
            @location(auto) weights0: vec4<f32>,
            #if USE_JOINT_VEC8
                @location(auto) joints1: vec4<f32>,
                @location(auto) weights1: vec4<f32>,
            #endif
        #elseif USE_MORPHTARGETS
            @location(auto) vIndex: f32,
        #endif
    #elseif USE_SKELETON
        @location(auto) joints0: vec4<f32>,
        @location(auto) weights0: vec4<f32>,
        #if USE_JOINT_VEC8
            @location(auto) joints1: vec4<f32>,
            @location(auto) weights1: vec4<f32>,
        #endif
    #elseif USE_MORPHTARGETS
        @location(auto) vIndex: f32,
    #endif
    ) -> VertexOutput {
    worldMatrix = models.matrix[index];

    var vertexPosition = position;
    var vertexNormal = normal;
    #if USE_MORPHTARGETS
        ${Je.getMorphTargetCalcVertex()}
    #endif

    #if USE_SKELETON
        #if USE_JOINT_VEC8
            worldMatrix *= getSkeletonWorldMatrix_8(joints0, weights0, joints1, weights1);
        #else
            worldMatrix *= getSkeletonWorldMatrix_4(joints0, weights0);
        #endif
    #endif

        
        let wPos = worldMatrix * vec4<f32>(vertexPosition.xyz, 1.0);
        var fixProjMat = globalUniform.projMat ;
        var rzMatrix : mat4x4<f32> ;
        rzMatrix[0] = vec4<f32>(1.0,0.0,0.0,0.0) ; 
        rzMatrix[1] = vec4<f32>(0.0,1.0,0.0,0.0) ; 
        rzMatrix[2] = vec4<f32>(0.0,0.0,1.0,0.0) ; 
        rzMatrix[3] = vec4<f32>(0.0,0.0,0.0,1.0) ; 
        var clipPos:vec4<f32> = fixProjMat * globalUniform.viewMat * (wPos) ;

        // let d = log2Depth(clipPos.z * (globalUniform.far - globalUniform.near),globalUniform.near,globalUniform.far) ;
        return VertexOutput(f32(index) , wPos.xyz,clipPos, clipPos);
    }

    fn depthToLinear01(depth:f32) -> f32 {
        let a = 1.0 / (globalUniform.near - globalUniform.far);
        return (globalUniform.near*globalUniform.far*a) / (depth + globalUniform.far * a) ;
    }
`,mn=`
    #include "GlobalUniform"
    #include "MathShader"
    struct FragmentOutput {
        @location(auto) o_Target: vec4<f32>,
        @builtin(frag_depth) out_depth: f32
    };
   

    @fragment
    fn main(@location(auto) vID: f32, @location(auto) vPos:vec3<f32> ,  @location(auto) vClipPos: vec4<f32> ,  @builtin(position) fragCoord : vec4<f32>) -> FragmentOutput {
        var op = vec4<f32>( vPos, vID);
        let d = log2Depth(fragCoord.z+0.00001,globalUniform.near,globalUniform.far);
        return FragmentOutput(op,d);
    }
`;class L{static init(){L.register("MathShader",So),L.register("FastMathShader",No),L.register("MatrixShader",rn),L.register("GlobalUniform",Ls),L.register("WorldMatrixUniform",Os),L.register("NormalMap_frag",Fo),L.register("LightingFunction_frag",Io),L.register("PhysicMaterialUniform_frag",wo),L.register("UnLitMaterialUniform_frag",bo),L.register("VideoUniform_frag",Bo),L.register("InstanceUniform",Oo),L.register("Inline_vert",Ro),L.register("VertexAttributes_vert",To),L.register("Common_vert",Po),L.register("Common_frag",Mo),L.register("FragmentVarying",ko),L.register("ColorPassFragmentOutput",Ns),L.register("ClusterLight",an),L.register("ShadingInput",Qo),L.register("IESProfiles_frag",Go),L.register("ShadowMapping_frag",zo),L.register("Irradiance_frag",Vo),L.register("IrradianceVolumeData_frag",Do),L.register("BrdfLut_frag",Uo),L.register("EnvMap_frag",Lo),L.register("ColorUtil_frag",Za),L.register("ColorUtil",Za),L.register("BRDF_frag",Ho),L.register("Hair_frag",sn),L.register("BxDF_frag",Yo),L.register("BsDF_frag",on),L.register("UnLit_frag",Eo),L.register("UnLit",nn),L.register("Clearcoat_frag",Wo),L.register("LitShader",Ko),L.register("PBRLItShader",Xo),L.register("ClusterDebug_frag",_o),L.register("BxdfDebug_frag",jo),L.register("GenerayRandomDir",tn),L.register("Quad_vert_wgsl",Jo),L.register("Quad_frag_wgsl",Zo),L.register("Quad_depth2d_frag_wgsl",$o),L.register("Quad_depthCube_frag_wgsl",en),L.register("sky_vs_frag_wgsl",wi.sky_vs_frag_wgsl),L.register("sky_fs_frag_wgsl",wi.sky_fs_frag_wgsl),L.register("LambertShader",ln),L.register("QuadGlsl_vs",hn),L.register("QuadGlsl_fs",un),L.register("SkyGBuffer_fs",cn),L.register("gbuffer_vs",$a),L.register("gbuffer_fs",$a),L.register("castPointShadowMap_vert",fn),L.register("shadowCastMap_frag",gn),L.register("shadowCastMap_vert",dn),L.register("directionShadowCastMap_frag",pn),L.register("ZPass_shader_vs",An),L.register("ZPass_shader_fs",mn)}static register(t,e){L[t.toLowerCase()]||(L[t.toLowerCase()]=e)}static getShader(t){return L[t.toLowerCase()],L[t.toLowerCase()]}}class ur{static parse(t,e){return t=this.filterComment(t),t=this.parsePreprocess(new es,t,e),t=this.parseAutoBindingForAllGroup(t),t=this.parseAutoLocationBlock(t),t}static parseComputeShader(t,e){return t=this.filterComment(t),t=this.parsePreprocess(new es,t,e),t=this.parseAutoBindingForAllGroup(t),t}static parsePreprocess(t,e,r){let i=e.indexOf("#");if(i==-1)return e;let a=e.substring(0,i),o=e.indexOf(`
`,e.lastIndexOf("#")),l=e.substring(i,o),h=e.substring(o);return a+this.parsePreprocessCommand(t,l,r)+h}static parseAutoBindingForAllGroup(t){let e=0,r="",i=new Map;for(;e<t.length;){let a=t.indexOf("@group(",e);if(a==-1){r+=t.substring(e);break}let o=t.indexOf(")",a),l=Number.parseInt(t.substring(a+7,o));a=t.indexOf("@binding(",o),o=t.indexOf(")",a);let h=t.substring(a+9,o);if(r+=t.substring(e,a),h.includes("auto"))if(i.has(l)){let u=i.get(l)+1;r+=`@binding(${u})`,i.set(l,u)}else r+="@binding(0)",i.set(l,0);else{let u=Number.parseInt(h);(!i.has(l)||i.get(l)<u)&&i.set(l,u),r+=`@binding(${h})`}e=o+1}return r}static parseAutoBindingForGroupX(t,e){let r=0,i="",a=new Map;for(;r<t.length;){let o=t.indexOf("@group(",r);if(o==-1){i+=t.substring(r);break}let l=t.indexOf(")",o),h=Number.parseInt(t.substring(o+7,l));if(o=t.indexOf("@binding(",l),l=t.indexOf(")",o),i+=t.substring(r,o),h==e)if(a.has(h)){let u=a.get(h)+1;i+=`@binding(${u})`,a.set(h,u)}else i+="@binding(0)",a.set(h,0);else i+=t.substring(o,l+1);r=l+1}return i}static parseAutoLocation(t){let e=0,r="",i=0;for(;e<t.length;){let a=t.indexOf("@location(",e);if(a==-1){r+=t.substring(e);break}let o=t.indexOf(")",a),l=t.substring(a+10,o);r+=t.substring(e,a),l==="auto"?(r+=`@location(${i})`,i++):r+=t.substring(a,o+1),e=o+1}return r}static parseAutoLocationBlock(t){let e=0,r="";for(;e<t.length;){let i=t.indexOf("@location(",e);if(i==-1){r+=t.substring(e);break}let a=t.indexOf("}",i),o=t.indexOf("->",i);o!=-1&&o<a&&(a=o);let l=t.substring(i,a+1);l=this.parseAutoLocation(l),r+=t.substring(e,i),r+=l,e=a+1}return r}static parsePreprocessCommand(t,e,r){let i="",a=e.split(`
`),o=[!1],l=[!1];for(let h=0;h<a.length;h++){let u=a[h],c=o[o.length-1];if(u.trim().indexOf("#")!=0){c||(i+=u+`
`);continue}let d=u.trim();if(d.indexOf("#if")!=-1){if(c&&o.length>1){o.push(c);continue}let f=d.substring(3).trim();c=!this.parseCondition(f,r),o.push(c),l.push(!c);continue}else if(d.indexOf("#elseif")!=-1||d.indexOf("#else")!=-1&&d.indexOf(" if")!=-1){if(l[l.length-1]){o.pop(),c=!0,o.push(c);continue}if(o.pop(),c=o[o.length-1],c&&o.length>1){o.push(c);continue}let f=d.substring(d.indexOf("if")+2).trim();f==""&&console.error(`preprocess command error, conditions missing: ${d}`),c=!this.parseCondition(f,r),o.push(c),l.push(!c);continue}else if(d.indexOf("#else")!=-1){o.pop(),c&&o.length>1&&o[o.length-1]?o.push(c):o.push(!c);continue}else if(d.indexOf("#endif")!=-1){o.pop(),l.pop();continue}else if(d.indexOf("#include")!=-1){let f="",p=d.charAt(d.length-1);if(p==">"?f=this.extract(d,"<",">"):f=this.extract(d,p,p),!t.includeMap.has(f)){t.includeMap.set(f,!0);let A=L.getShader(f);if(!A)throw`${d} error: '${f}' not found`;A=this.filterComment(A),A=this.parsePreprocess(t,A,r),i+=A+`\r
`}continue}else if(d.indexOf("#define ")!=-1){let f=d.substring(d.indexOf("#define ")+8).trim(),p=f.indexOf(" "),A=f,x="";p!=-1&&(A=f.substring(0,p).trim(),x=f.substring(p+1).trim()),r[A]=x;continue}else throw"nonsupport: "+d}return i}static parseCondition(t,e){let r=e[t];return r==null?!1:r==!0||r!=0}static filterComment(t){let e="",r=!0,i=!0;for(let a=0;a<t.length;){let o=r?t.indexOf("//",a):-1,l=i?t.indexOf("/*",a):-1;if(o==-1&&l==-1){e+=t.substring(a);break}r=o!=-1,i=l!=-1,o!=-1&&l!=-1&&(o<l?l=-1:o=-1),o!=-1?(l=t.indexOf(`
`,o),e+=t.substring(a,o),a=l!=-1?l:t.length):l!=-1&&(o=t.indexOf("*/",l),e+=t.substring(a,l),a=o+2)}return e}static extract(t,e,r){let i=t.indexOf(e)+e.length,a=t.indexOf(r,i);return t.substring(i,a).trim()}}class es{constructor(){s(this,"includeMap",new Map)}}const Ir=class Ir{constructor(){s(this,"attributes",[]);s(this,"vs_variables",[]);s(this,"fs_variables",[]);s(this,"cs_variables",[]);s(this,"groups",[]);s(this,"variables",{});s(this,"useSplit",!1)}static parser(t,e){e.shaderReflection||(e.shaderReflection=new Ir),t.indexOf("@vertex")!=-1?(e.shaderReflection.attributes=this.parserVertexOld(t),e.shaderReflection.vs_variables=this.parserVariables(t)):t.indexOf("@fragment")!=-1?e.shaderReflection.fs_variables=this.parserVariables(t):t.indexOf("@compute")!=-1&&(e.shaderReflection.cs_variables=this.parserVariables(t))}static parser2(t,e){e.shaderReflection||(e.shaderReflection=new Ir);let r=e.shaderReflection;t.indexOf("@vertex")!=-1?(r.attributes=this.parserVertex(e.vsEntryPoint,t),r.vs_variables=this.parserVariables(t)):t.indexOf("@fragment")!=-1?r.fs_variables=this.parserVariables(t):t.indexOf("@compute")!=-1&&(r.cs_variables=this.parserVariables(t)),t.indexOf("splitTexture")!=-1&&(r.useSplit=!0)}static combineShaderReflectionVarInfo(t,e){for(const r of e){t.groups[r.group]||(t.groups[r.group]=[]);let i=r;if(t.groups[r.group][r.binding]){let a=t.groups[r.group][r.binding],o=r;if(a.dataFields)for(let l=0;l<a.dataFields.length;l++)a.dataFields[l];if(o.dataFields)for(let l=0;l<o.dataFields.length;l++)o.dataFields[l]}t.groups[r.group][r.binding]=i,t.variables[r.varName]=i}}static final(t){let e=t.shaderReflection;this._shaderReflectionMap.set(t.shaderVariant,e),this.combineShaderReflectionVarInfo(e,e.vs_variables),this.combineShaderReflectionVarInfo(e,e.fs_variables)}static getShaderReflection2(t,e){let r=ur.parse(t,e.defineValue);Ir.parser2(r,e)}static poolGetReflection(t){return this._shaderReflectionMap.get(t)}static genShaderVar(t){let e=`${t.vs}${t.fs}${t.compute}`;e+="|";for(const r in t.uniforms)e+=r+":";e+="|";for(const r in t.constValues)e+=r+":",e+=t.constValues[r];e+="|";for(const r in t.defines)e+=r+":",e+=t.defines[r];e+="|";for(const r in t.shaderState)e+=r+":",e+=t.shaderState[r]+";";return e}static genShaderVariant(t){let e="";for(const r in t.uniforms)e+=r+":";e+="|";for(const r in t.constValues)e+=r+":",e+=t.constValues[r];e+="|";for(const r in t.defineValue)e+=r+":",e+=t.defineValue[r];return e}static genRenderShaderVariant(t){let e=`RenderShader(${t.vsName},${t.fsName})`;e+="|",e+=this.genShaderVariant(t),e+="|";for(const r in t.shaderState)e+=r+":",e+=t.shaderState[r]+";";return e}static genComputeShaderVariant(t){let e=`ComputeShader(${t.instanceID})`;return e+="|",e+=this.genShaderVariant(t),e}combine(t){let e=t.shaderReflection,r=t.defines,i={};for(let o=0;o<this.attributes.length;o++){let l=this.attributes[o];r[l.name]&&(i[l.name]=l)}let a=e.attributes.length;for(let o=0;o<a;o++){const l=e.attributes[o];if(!i[l.name])this.attributes.push(l);else{let h=i[l.name];h.location==l.location&&h.name!=l.name&&console.log("location must same!")}}}static parserVariables(t){let e=0,r=[];for(;e<t.length;){let i=t.indexOf("@group(",e);if(i<0)break;let a=t.indexOf(";",i);e=a;let o=t.substring(i,a),l=this.extract(o,"@group(",")"),h=this.extract(o,"@binding(",")"),u="",c="var";o.indexOf("var<")!=-1?(u=this.extract(o,">",":"),c=this.extract(o,"var<",">").replace(",","-").replaceAll(" ","")):u=this.extract(o,"var",":");let d=o.substring(o.lastIndexOf(":")+1).trim(),f={group:0,binding:0,varType:"",varName:"",dataType:"",dataIsBuiltinType:!0,dataFields:null};f.group=Number.parseInt(l),f.binding=Number.parseInt(h),f.varType=c,f.varName=u,f.dataType=d,f.dataIsBuiltinType=this.isBuiltinTypes(f.dataType),f.dataIsBuiltinType||(f.dataFields=this.parserStructFields(t,f.dataType)),r.push(f)}return r}static extract(t,e,r){let i=t.indexOf(e)+e.length,a=t.indexOf(r,i);return t.substring(i,a).trim()}static isBuiltinTypes(t){switch(t){case"i32":return!0;case"u32":return!0;case"f32":return!0;default:let e=t.indexOf("<");if(e!=-1)switch(t.substring(0,e)){case"vec2":return!0;case"vec3":return!0;case"vec4":return!0;case"mat3":return!0;case"mat4":return!0;case"array":return this.isBuiltinTypes(t.substring(e+1,t.lastIndexOf(">")))}break}return!1}static parserStructFields(t,e){let r=[],i=0;for(;i<t.length;){let a=t.indexOf("struct ",i);if(a<0)break;let o=t.indexOf("{",a);if(i=o,t.substring(a+6,o).trim()===e){a=t.indexOf("{",a),o=t.indexOf("}",a);let l=t.substring(a+1,o).split(",");for(let h of l){let u=h.indexOf(":");if(u!=-1){let c={name:h.substring(0,u).trim(),type:h.substring(u+1).trim()};r.push(c)}}break}}return r}static parserVertexOld(t){let e=[],r=t.split("fn main(")[1].split("->")[0],i=r.split("@");if(i&&i.length>1)for(let o=1;o<i.length;o++){let l=i[o].replace(/\s*$/g,"");l=l.replaceAll(",",""),l=l.replaceAll(`
`,""),l=l.replaceAll("  "," "),this.parserAttribute(l,e)}else{var a=r.split(":")[1];a=a.replaceAll("  ",""),a=a.replaceAll(" ",""),a=a.replaceAll(")",""),a=t.split(`struct ${a}`)[1];let o=a.indexOf("{"),l=a.indexOf("}");a=a.slice(o,l),i=a.split("@");for(let h=1;h<i.length;h++){let u=i[h].replace(/\s*$/g,"");u=u.replaceAll(`
`,""),u=u.split(",")[0],u=u.replaceAll("  "," "),this.parserAttribute(u,e)}}return e}static parserVertex(t,e){let r=[],i=e.split(`fn ${t}(`)[1].split("->")[0],a=i.split("@");if(a&&a.length>1)for(let l=1;l<a.length;l++){let h=a[l].replace(/\s*$/g,"");h=h.replaceAll(",",""),h=h.replaceAll(`
`,""),h=h.replaceAll("  "," "),this.parserAttribute(h,r)}else{var o=i.split(":")[1];o=o.replaceAll("  ",""),o=o.replaceAll(" ",""),o=o.replaceAll(")",""),o=e.split(`struct ${o}`)[1];let l=o.indexOf("{"),h=o.indexOf("}");o=o.slice(l,h),a=o.split("@");for(let u=1;u<a.length;u++){let c=a[u].replace(/\s*$/g,"");c=c.replaceAll(`
`,""),c=c.split(",")[0],c=c.replaceAll("  "," "),this.parserAttribute(c,r)}}return r}static parserAttribute(t,e){let r={name:"",group:0,location:0,type:"",valueType:"",value:0,size:0,format:"float32"};if(t.indexOf("builtin")!=-1){r.type="builtin";var i=t.match(/\((.+?)\)/g)[0];i=t.match(/\((.+?)\)/g)[0],i=i.replace("(",""),i=i.replaceAll(")",""),r.location=parseInt(i);let a=t.split(":");r.name=a[0].split(" ")[1],r.name=r.name.replaceAll("  "," "),r.name=r.name.replaceAll(" ",""),r.valueType=a[1],r.valueType=r.valueType.replaceAll("  "," "),r.valueType=r.valueType.replaceAll(" ",""),r.valueType=r.valueType.replaceAll("\r",""),r.valueType=r.valueType.replaceAll(")",""),r.valueType=r.valueType.replaceAll(")",""),r.size=Ar[r.valueType],e.push(r)}else if(t.indexOf("location")!=-1){r.type="location";var i=t.match(/\((.+?)\)/g)[0];i=t.match(/\((.+?)\)/g)[0],i=i.replace("(",""),i=i.replaceAll(")",""),r.location=parseInt(i);let o=t.split(":");r.name=o[0].split(" ")[1],r.name=r.name.replaceAll("  "," "),r.name=r.name.replaceAll(" ",""),r.valueType=o[1],r.valueType=r.valueType.replaceAll("  "," "),r.valueType=r.valueType.replaceAll(" ",""),r.valueType=r.valueType.replaceAll("\r",""),r.valueType=r.valueType.replaceAll(")",""),r.valueType=r.valueType.replaceAll(")",""),r.size=Ar[r.valueType],e.push(r)}r.format=yo[Ar[r.valueType]]}};s(Ir,"_shaderReflectionMap",new Map);let je=Ir;class Mt extends Us{constructor(e){super();s(this,"entryPoint","CsMain");s(this,"workerSizeX",1);s(this,"workerSizeY",0);s(this,"workerSizeZ",0);s(this,"_computePipeline");s(this,"_csShaderModule");s(this,"_destCS");s(this,"_sourceCS");s(this,"_storageTextureDic");s(this,"_sampleTextureDic");s(this,"_groupsShaderReflectionVarInfos");s(this,"_groupCache",{});this._sourceCS=e,je.getShaderReflection2(e,this),this._storageTextureDic=new Map,this._sampleTextureDic=new Map}setStorageTexture(e,r){this._storageTextureDic.has(e)||this._storageTextureDic.set(e,r)}setSamplerTexture(e,r){this._sampleTextureDic.set(e,r)}compute(e){this._computePipeline||this.genComputePipeline(),e.setPipeline(this._computePipeline);for(let r=0;r<this.bindGroups.length;++r)e.setBindGroup(r,this.bindGroups[r]);this.workerSizeX&&this.workerSizeY&&this.workerSizeZ?e.dispatchWorkgroups(this.workerSizeX,this.workerSizeY,this.workerSizeZ):this.workerSizeX&&this.workerSizeY?e.dispatchWorkgroups(this.workerSizeX,this.workerSizeY):e.dispatchWorkgroups(this.workerSizeX)}createBufferBindGroup(e,r,i,a){let o=this._bufferDic.get(r);if(o){let l={binding:i,resource:{buffer:o.buffer,offset:0,size:o.memory.shareDataBuffer.byteLength}};a.push(l)}else console.error(`ComputeShader(${this.instanceID})`,`buffer ${r} is missing!`)}noticeBufferChange(e){let r=this._groupCache[e];r&&this.genGroups(r.groupIndex,r.infos,!0)}genGroups(e,r,i=!1){if(!this.bindGroups[e]||i){const a=r[e];let o=[];for(let h=0;h<a.length;++h){const u=a[h];if(u)switch(u.varType){case"uniform":case"storage-read":case"storage-read_write":this.createBufferBindGroup(e,u.varName,u.binding,o),this._groupCache[u.varName]={groupIndex:e,infos:r};break;case"var":if(u.dataType=="sampler"){let c=u.varName.replace("Sampler",""),d=this._sampleTextureDic.get(c);if(d){let f={binding:u.binding,resource:d.gpuSampler};o.push(f)}else console.error(`ComputeShader(${this.instanceID})`,`texture ${u.varName} is missing! `)}else if(u.dataType=="sampler_comparison"){let c=u.varName.replace("Sampler",""),d=this._sampleTextureDic.get(c);if(d){let f={binding:u.binding,resource:d.gpuSampler_comparison};o.push(f)}else console.error(`ComputeShader(${this.instanceID})`,`texture ${u.varName} is missing! `)}else if(u.dataType.indexOf("texture_storage")!=-1){let c=this._storageTextureDic.get(u.varName);if(c){let d={binding:u.binding,resource:c.getGPUView()};o.push(d),q.getInstance().attached(c,this)}else console.error(`ComputeShader(${this.instanceID})`,`texture ${u.varName} is missing! `)}else if(u.dataType.indexOf("texture")!=-1){let c=this._sampleTextureDic.get(u.varName);if(c){let d={binding:u.binding,resource:c.getGPUView()};o.push(d),q.getInstance().attached(c,this)}else console.error(`ComputeShader(${this.instanceID})`,`texture ${u.varName} is missing! `)}break;default:console.error("unprocessed type:",u.varType);break}}let l=w.device.createBindGroup({layout:this._computePipeline.getBindGroupLayout(e),entries:o});this.bindGroups[e]=l}}genComputePipeline(){this.preCompileShader(this._sourceCS),this.genReflection(),this._computePipeline=w.device.createComputePipeline({layout:"auto",compute:{module:this.compileShader(),entryPoint:this.entryPoint}}),this._groupsShaderReflectionVarInfos=[];let e=this.shaderReflection;this.bindGroups=[];for(let r=0;r<e.groups.length;++r){let i=e.groups[r];this._groupsShaderReflectionVarInfos[r]=i,this.genGroups(r,this._groupsShaderReflectionVarInfos)}w.addEventListener(xr.RESIZE,r=>{for(let i=0;i<e.groups.length;++i){let a=e.groups[i];this._groupsShaderReflectionVarInfos[i]=a,this.genGroups(i,this._groupsShaderReflectionVarInfos,!0)}},this)}preCompileShader(e){for(const r in this.constValues)if(Object.prototype.hasOwnProperty.call(this.constValues,r)){const i=this.constValues[r];e=e.replaceAll(`&${r}`,i.toString())}this._destCS=ur.parseComputeShader(e,this.defineValue)}compileShader(){let e=w.device.createShaderModule({label:`ComputeShader(${this.instanceID})`,code:this._destCS});return e.getCompilationInfo().then(r=>{r.messages.length>0&&console.log(this._destCS)}),this._csShaderModule=e,e}genReflection(){this.shaderVariant+=je.genComputeShaderVariant(this);let e=je.poolGetReflection(this.shaderVariant);e?this.shaderReflection=e:(je.getShaderReflection2(this._destCS,this),je.combineShaderReflectionVarInfo(this.shaderReflection,this.shaderReflection.cs_variables))}}class rt{static start(t){let e=this.profilerLabelMap.get(t);e||(e={lable:t,start:0,end:0,total:0,count:0,child:new Map},this.profilerLabelMap.set(t,e)),e.start=performance.now(),e.end=performance.now(),e.count=0,e.child.clear()}static end(t){let e=this.profilerLabelMap.get(t);e&&(e.end=performance.now(),e.total=e.end-e.start)}static countStart(t,e=""){let r=this.profilerLabelMap.get(t);if(r&&(r.count++,e!="")){let i=r.child.get(e);i||(i={lable:e,start:0,end:0,total:0,count:0}),i.start=performance.now(),i.end=performance.now(),i.count=0,r.child.set(e,i)}}static countEnd(t,e){let r=this.profilerLabelMap.get(t);if(r&&e!=""){let i=r.child.get(e);i||(i={lable:e,start:0,end:0,total:0,count:0}),i.end=performance.now(),i.total=i.end-i.start,i.count++}}static print(t){let e=this.profilerLabelMap.get(t);e&&console.log("performance",t,e.total+" ms")}}s(rt,"profilerLabelMap",new Map);const vn=`var Module=typeof Module!="undefined"?Module:{};var moduleOverrides=Object.assign({},Module);var arguments_=[];var thisProgram="./this.program";var quit_=(status,toThrow)=>{throw toThrow};var ENVIRONMENT_IS_WEB=typeof window=="object";var ENVIRONMENT_IS_WORKER=typeof importScripts=="function";var ENVIRONMENT_IS_NODE=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary,setWindowTitle;if(ENVIRONMENT_IS_NODE){var fs=require("fs");var nodePath=require("path");if(ENVIRONMENT_IS_WORKER){scriptDirectory=nodePath.dirname(scriptDirectory)+"/"}else{scriptDirectory=__dirname+"/"}read_=(filename,binary)=>{filename=isFileURI(filename)?new URL(filename):nodePath.normalize(filename);return fs.readFileSync(filename,binary?undefined:"utf8")};readBinary=filename=>{var ret=read_(filename,true);if(!ret.buffer){ret=new Uint8Array(ret)}return ret};readAsync=(filename,onload,onerror,binary=true)=>{filename=isFileURI(filename)?new URL(filename):nodePath.normalize(filename);fs.readFile(filename,binary?undefined:"utf8",((err,data)=>{if(err)onerror(err);else onload(binary?data.buffer:data)}))};if(!Module["thisProgram"]&&process.argv.length>1){thisProgram=process.argv[1].replace(/\\\\/g,"/")}arguments_=process.argv.slice(2);if(typeof module!="undefined"){module["exports"]=Module}process.on("uncaughtException",(ex=>{if(ex!=="unwind"&&!(ex instanceof ExitStatus)&&!(ex.context instanceof ExitStatus)){throw ex}}));quit_=(status,toThrow)=>{process.exitCode=status;throw toThrow};Module["inspect"]=()=>"[Emscripten Module object]"}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(typeof document!="undefined"&&document.currentScript){scriptDirectory=document.currentScript.src}if(scriptDirectory.indexOf("blob:")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.replace(/[?#].*/,"").lastIndexOf("/")+1)}else{scriptDirectory=""}{read_=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=(url,onload,onerror)=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=()=>{if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()};xhr.onerror=onerror;xhr.send(null)}}setWindowTitle=title=>document.title=title}else{}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.error.bind(console);Object.assign(Module,moduleOverrides);moduleOverrides=null;if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["quit"])quit_=Module["quit"];var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];var noExitRuntime=Module["noExitRuntime"]||true;if(typeof WebAssembly!="object"){abort("no native wasm support detected")}var wasmMemory;var ABORT=false;var EXITSTATUS;var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateMemoryViews(){var b=wasmMemory.buffer;Module["HEAP8"]=HEAP8=new Int8Array(b);Module["HEAP16"]=HEAP16=new Int16Array(b);Module["HEAP32"]=HEAP32=new Int32Array(b);Module["HEAPU8"]=HEAPU8=new Uint8Array(b);Module["HEAPU16"]=HEAPU16=new Uint16Array(b);Module["HEAPU32"]=HEAPU32=new Uint32Array(b);Module["HEAPF32"]=HEAPF32=new Float32Array(b);Module["HEAPF64"]=HEAPF64=new Float64Array(b)}var wasmTable;var __ATPRERUN__=[];var __ATINIT__=[];var __ATMAIN__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;var runtimeKeepaliveCounter=0;function keepRuntimeAlive(){return noExitRuntime||runtimeKeepaliveCounter>0}function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function preMain(){callRuntimeCallbacks(__ATMAIN__)}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnInit(cb){__ATINIT__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}function abort(what){if(Module["onAbort"]){Module["onAbort"](what)}what="Aborted("+what+")";err(what);ABORT=true;EXITSTATUS=1;what+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(what);throw e}var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return filename.startsWith(dataURIPrefix)}function isFileURI(filename){return filename.startsWith("file://")}var wasmBinaryFile;wasmBinaryFile="data:application/octet-stream;base64,AGFzbQEAAAABfBRgAX8Bf2ABfwBgA39/fwF/YAN/f38AYAAAYAV/f39/fwBgBH9/f38AYAZ/f39/f38AYAABf2ACf38Bf2AEf39/fwF/YAF8AX1gAnx/AXxgAn9/AGABfQF9YAN/f30AYAJ+fwF/YAZ/fH9/f38Bf2ACfX8Bf2ADf35/AX4CHwUBYQFhAAoBYQFiAAMBYQFjAAABYQFkAAQBYQFlAAMDSEcDBQsLAgEAEAEADAEDDQ4CAA4PBAQABAABAAYDCQAAAAkRAwAKDAACARINAQAAAQAAAAAHBwUFAQYGAgEBEwACCQ8BCAgICAQFAXABICAFBwEBgAKAgAIGCAF/AUHgtwQLBzUNAWYCAAFnABsBaAEAAWkAMAFqAEsBawBKAWwASQFtAEgBbgBHAW8ARgFwAEUBcQAxAXIANwklAQBBAQsfIh5BQDwzQ0RCJiINLS0/ODo+DTk7PQ01DTQNNh0yHQryvgFHFwAgAC0AAEEgcUUEQCABIAIgABAUGgsLbgEBfyMAQYACayIFJAACQCACIANMDQAgBEGAwARxDQAgBSABQf8BcSACIANrIgNBgAIgA0GAAkkiARsQESABRQRAA0AgACAFQYACEAUgA0GAAmsiA0H/AUsNAAsLIAAgBSADEAULIAVBgAJqJAALSwECfCAAIACiIgEgAKIiAiABIAGioiABRKdGO4yHzcY+okR058ri+QAqv6CiIAIgAUSy+26JEBGBP6JEd6zLVFVVxb+goiAAoKC2C08BAXwgACAAoiIAIAAgAKIiAaIgAERpUO7gQpP5PqJEJx4P6IfAVr+goiABREI6BeFTVaU/oiAARIFeDP3//9+/okQAAAAAAADwP6CgoLYLdAEBfyACRQRAIAAoAgQgASgCBEYPCyAAIAFGBEBBAQ8LIAEoAgQiAi0AACEBAkAgACgCBCIDLQAAIgBFDQAgACABRw0AA0AgAi0AASEBIAMtAAEiAEUNASACQQFqIQIgA0EBaiEDIAAgAUYNAAsLIAAgAUYL0gsBB38CQCAARQ0AIABBCGsiAiAAQQRrKAIAIgFBeHEiAGohBQJAIAFBAXENACABQQNxRQ0BIAIgAigCACIBayICQfgzKAIASQ0BIAAgAWohAAJAAkBB/DMoAgAgAkcEQCABQf8BTQRAIAFBA3YhBCACKAIMIgEgAigCCCIDRgRAQegzQegzKAIAQX4gBHdxNgIADAULIAMgATYCDCABIAM2AggMBAsgAigCGCEGIAIgAigCDCIBRwRAIAIoAggiAyABNgIMIAEgAzYCCAwDCyACQRRqIgQoAgAiA0UEQCACKAIQIgNFDQIgAkEQaiEECwNAIAQhByADIgFBFGoiBCgCACIDDQAgAUEQaiEEIAEoAhAiAw0ACyAHQQA2AgAMAgsgBSgCBCIBQQNxQQNHDQJB8DMgADYCACAFIAFBfnE2AgQgAiAAQQFyNgIEIAUgADYCAA8LQQAhAQsgBkUNAAJAIAIoAhwiA0ECdEGYNmoiBCgCACACRgRAIAQgATYCACABDQFB7DNB7DMoAgBBfiADd3E2AgAMAgsgBkEQQRQgBigCECACRhtqIAE2AgAgAUUNAQsgASAGNgIYIAIoAhAiAwRAIAEgAzYCECADIAE2AhgLIAIoAhQiA0UNACABIAM2AhQgAyABNgIYCyACIAVPDQAgBSgCBCIBQQFxRQ0AAkACQAJAAkAgAUECcUUEQEGANCgCACAFRgRAQYA0IAI2AgBB9DNB9DMoAgAgAGoiADYCACACIABBAXI2AgQgAkH8MygCAEcNBkHwM0EANgIAQfwzQQA2AgAPC0H8MygCACAFRgRAQfwzIAI2AgBB8DNB8DMoAgAgAGoiADYCACACIABBAXI2AgQgACACaiAANgIADwsgAUF4cSAAaiEAIAFB/wFNBEAgAUEDdiEEIAUoAgwiASAFKAIIIgNGBEBB6DNB6DMoAgBBfiAEd3E2AgAMBQsgAyABNgIMIAEgAzYCCAwECyAFKAIYIQYgBSAFKAIMIgFHBEBB+DMoAgAaIAUoAggiAyABNgIMIAEgAzYCCAwDCyAFQRRqIgQoAgAiA0UEQCAFKAIQIgNFDQIgBUEQaiEECwNAIAQhByADIgFBFGoiBCgCACIDDQAgAUEQaiEEIAEoAhAiAw0ACyAHQQA2AgAMAgsgBSABQX5xNgIEIAIgAEEBcjYCBCAAIAJqIAA2AgAMAwtBACEBCyAGRQ0AAkAgBSgCHCIDQQJ0QZg2aiIEKAIAIAVGBEAgBCABNgIAIAENAUHsM0HsMygCAEF+IAN3cTYCAAwCCyAGQRBBFCAGKAIQIAVGG2ogATYCACABRQ0BCyABIAY2AhggBSgCECIDBEAgASADNgIQIAMgATYCGAsgBSgCFCIDRQ0AIAEgAzYCFCADIAE2AhgLIAIgAEEBcjYCBCAAIAJqIAA2AgAgAkH8MygCAEcNAEHwMyAANgIADwsgAEH/AU0EQCAAQXhxQZA0aiEBAn9B6DMoAgAiA0EBIABBA3Z0IgBxRQRAQegzIAAgA3I2AgAgAQwBCyABKAIICyEAIAEgAjYCCCAAIAI2AgwgAiABNgIMIAIgADYCCA8LQR8hAyAAQf///wdNBEAgAEEmIABBCHZnIgFrdkEBcSABQQF0a0E+aiEDCyACIAM2AhwgAkIANwIQIANBAnRBmDZqIQECQAJAAkBB7DMoAgAiBEEBIAN0IgdxRQRAQewzIAQgB3I2AgAgASACNgIAIAIgATYCGAwBCyAAQRkgA0EBdmtBACADQR9HG3QhAyABKAIAIQEDQCABIgQoAgRBeHEgAEYNAiADQR12IQEgA0EBdCEDIAQgAUEEcWoiB0EQaigCACIBDQALIAcgAjYCECACIAQ2AhgLIAIgAjYCDCACIAI2AggMAQsgBCgCCCIAIAI2AgwgBCACNgIIIAJBADYCGCACIAQ2AgwgAiAANgIIC0GINEGINCgCAEEBayIAQX8gABs2AgALC08BAn9B2CkoAgAiASAAQQdqQXhxIgJqIQACQCACQQAgACABTRsNACAAPwBBEHRLBEAgABACRQ0BC0HYKSAANgIAIAEPC0GoMkEwNgIAQX8LgwECA38BfgJAIABCgICAgBBUBEAgACEFDAELA0AgAUEBayIBIAAgAEIKgCIFQgp+fadBMHI6AAAgAEL/////nwFWIQIgBSEAIAINAAsLIAWnIgIEQANAIAFBAWsiASACIAJBCm4iA0EKbGtBMHI6AAAgAkEJSyEEIAMhAiAEDQALCyABCwYAIAAQCgs1AQF/QQEgACAAQQFNGyEAAkADQCAAECQiAQ0BQdg3KAIAIgEEQCABEQQADAELCxADAAsgAQuoAQACQCABQYAITgRAIABEAAAAAAAA4H+iIQAgAUH/D0kEQCABQf8HayEBDAILIABEAAAAAAAA4H+iIQBB/RcgASABQf0XThtB/g9rIQEMAQsgAUGBeEoNACAARAAAAAAAAGADoiEAIAFBuHBLBEAgAUHJB2ohAQwBCyAARAAAAAAAAGADoiEAQfBoIAEgAUHwaEwbQZIPaiEBCyAAIAFB/wdqrUI0hr+iCwYAIAAQCgvwAgICfwF+AkAgAkUNACAAIAE6AAAgACACaiIDQQFrIAE6AAAgAkEDSQ0AIAAgAToAAiAAIAE6AAEgA0EDayABOgAAIANBAmsgAToAACACQQdJDQAgACABOgADIANBBGsgAToAACACQQlJDQAgAEEAIABrQQNxIgRqIgMgAUH/AXFBgYKECGwiADYCACADIAIgBGtBfHEiAmoiAUEEayAANgIAIAJBCUkNACADIAA2AgggAyAANgIEIAFBCGsgADYCACABQQxrIAA2AgAgAkEZSQ0AIAMgADYCGCADIAA2AhQgAyAANgIQIAMgADYCDCABQRBrIAA2AgAgAUEUayAANgIAIAFBGGsgADYCACABQRxrIAA2AgAgAiADQQRxQRhyIgFrIgJBIEkNACAArUKBgICAEH4hBSABIANqIQEDQCABIAU3AxggASAFNwMQIAEgBTcDCCABIAU3AwAgAUEgaiEBIAJBIGsiAkEfSw0ACwsLMgAgACABKgIAIAAqAgCSOAIAIAAgASoCBCAAKgIEkjgCBCAAIAEqAgggACoCCJI4AggL/gICA38BfCMAQRBrIgEkAAJAIAC8IgNB/////wdxIgJB2p+k+gNNBEAgAkGAgIDMA0kNASAAuxAHIQAMAQsgAkHRp+2DBE0EQCAAuyEEIAJB45fbgARNBEAgA0EASARAIAREGC1EVPsh+T+gEAiMIQAMAwsgBEQYLURU+yH5v6AQCCEADAILRBgtRFT7IQnARBgtRFT7IQlAIANBAE4bIASgmhAHIQAMAQsgAkHV44iHBE0EQCACQd/bv4UETQRAIAC7IQQgA0EASARAIARE0iEzf3zZEkCgEAghAAwDCyAERNIhM3982RLAoBAIjCEADAILRBgtRFT7IRlARBgtRFT7IRnAIANBAEgbIAC7oBAHIQAMAQsgAkGAgID8B08EQCAAIACTIQAMAQsCQAJAAkACQCAAIAFBCGoQLkEDcQ4DAAECAwsgASsDCBAHIQAMAwsgASsDCBAIIQAMAgsgASsDCJoQByEADAELIAErAwgQCIwhAAsgAUEQaiQAIAALwAEBA38CQCABIAIoAhAiAwR/IAMFIAIQFQ0BIAIoAhALIAIoAhQiBWtLBEAgAiAAIAEgAigCJBECAA8LAkAgAigCUEEASARAQQAhAwwBCyABIQQDQCAEIgNFBEBBACEDDAILIAAgA0EBayIEai0AAEEKRw0ACyACIAAgAyACKAIkEQIAIgQgA0kNASAAIANqIQAgASADayEBIAIoAhQhBQsgBSAAIAEQLBogAiACKAIUIAFqNgIUIAEgA2ohBAsgBAtZAQF/IAAgACgCSCIBQQFrIAFyNgJIIAAoAgAiAUEIcQRAIAAgAUEgcjYCAEF/DwsgAEIANwIEIAAgACgCLCIBNgIcIAAgATYCFCAAIAEgACgCMGo2AhBBAAvoAgIDfwF8IwBBEGsiASQAAn0gALwiA0H/////B3EiAkHan6T6A00EQEMAAIA/IAJBgICAzANJDQEaIAC7EAgMAQsgAkHRp+2DBE0EQCACQeSX24AETwRARBgtRFT7IQlARBgtRFT7IQnAIANBAEgbIAC7oBAIjAwCCyAAuyEEIANBAEgEQCAERBgtRFT7Ifk/oBAHDAILRBgtRFT7Ifk/IAShEAcMAQsgAkHV44iHBE0EQCACQeDbv4UETwRARBgtRFT7IRlARBgtRFT7IRnAIANBAEgbIAC7oBAIDAILIANBAEgEQETSITN/fNkSwCAAu6EQBwwCCyAAu0TSITN/fNkSwKAQBwwBCyAAIACTIAJBgICA/AdPDQAaAkACQAJAAkAgACABQQhqEC5BA3EOAwABAgMLIAErAwgQCAwDCyABKwMImhAHDAILIAErAwgQCIwMAQsgASsDCBAHCyEAIAFBEGokACAACzMBAn0gASoCACAClCEDIAEqAgQgApQhBCAAIAEqAgggApQ4AgggACAEOAIEIAAgAzgCAAsqAQF/QQQQIyIAQeQmNgIAIABBvCY2AgAgAEHQJjYCACAAQcAnQQEQAQALXwEDf0EIECMiAEHkJjYCACAAQdQnNgIAQZ0IECsiAUENahAOIgJBADYCCCACIAE2AgQgAiABNgIAIAAgAkEMakGdCCABQQFqECw2AgQgAEGEKDYCACAAQaQoQQIQAQALfwAgAP0MAAAAAAAAAAAAAAAAAAAAAP0LAiQgAP0MAAAAAAAAAAAAAAAAAAAAAP0LAhQgAP0MAAAAAAAAAAAAAAAAAAAAAP0LAgQgAEGAgID8AzYCPCAAQYCAgPwDNgIAIABCADcCNCAAQYCAgPwDNgIoIABBgICA/AM2AhQgAAtTAEHsKUEANgIAQeQpQgA3AgBB+ClBADYCAEHwKUIANwIAQYQqQQA2AgBB/ClCADcCAEGQKkEANgIAQYgqQgA3AgBBxDNBzDI2AgBB/DJBKjYCAAv8BwMIfw59EHsjAEFAaiICJABB5CkoAgAgAEEGdGohAUH8KSgCACAAQQR0aiIFKAIABEAgBSgCBCEDIwBBEGsiBiQAIABBJGwiBEHwKSgCAGoiAEEYaiEHIABBDGohCCADBEAgBkEEaiIDQYgqKAIAIARqIgRB4CkqAgAQFyAAIAMQEiADIARBDGpB4CkqAgAQFyAIIAMQEiADIARBGGpB4CkqAgAQFyAHIAMQEgsgACoCFCEJIAAqAhAhCiAAKgIAIRIgACoCBCETIAAqAgghECAIKgIAIQwgAUEANgIsIAFBADYCHCABQQA2AgwgDEM1+o48lEMAAAA/lCIMEBMhDiAKQzX6jjyUQwAAAD+UIgoQEyERIAlDNfqOPJRDAAAAP5QiDRATIQkgDBAWIQsgChAWIQ8gASAQIAsgEZQiFCANEBYiCpQgCSAOIA+UIg2UkiIMIAkgCyAPlCILlCAKIA4gEZQiD5STIhEgEZIiDpQiFSALIAqUIA8gCZSSIgsgDSAKlCAJIBSUkyIJIAmSIg+UIg2TlDgCJCABIBAgCSAOlCIUIAsgDCAMkiIKlCIWkpQ4AiAgASATIBUgDZKUOAIYIAEgEyAJIAqUIg0gCyAOlCILk5Q4AhAgASASIBQgFpOUOAIIIAEgEiANIAuSlDgCBCABIBBDAACAPyAJIA+UIgkgDCAKlCIQkpOUOAIoIAEgE0MAAIA/IAkgESAOlCIJkpOUOAIUIAEgEkMAAIA/IBAgCZKTlDgCACABIAcqAgA4AjAgASAAKgIcOAI0IAAqAiAhCSABQYCAgPwDNgI8IAEgCTgCOCAGQRBqJAAgBSgCCCIAQX9HBEAgABAcIQAgAhAaGiAB/QkCDCEbIAH9CQIIIRwgAf0JAgAhHSAB/QkCBCEeIAH9CQIcIR8gAf0JAhghICAB/QkCECEhIAH9CQIUISIgAf0JAiwhIyAB/QkCKCEkIAH9CQIgISUgAf0JAiQhJiACIAD9AAIwIhcgAf0JAjz95gEgAP0AAiAiGCAB/QkCOP3mASAA/QACACIZIAH9CQIw/eYBIAD9AAIQIhogAf0JAjT95gH95AH95AH95AH9CwIwIAIgFyAj/eYBIBggJP3mASAZICX95gEgGiAm/eYB/eQB/eQB/eQB/QsCICACIBcgH/3mASAYICD95gEgGSAh/eYBIBogIv3mAf3kAf3kAf3kAf0LAhAgAiAXIBv95gEgGCAc/eYBIBkgHf3mASAeIBr95gH95AH95AH95AH9CwIAIAEgAv0AAjD9CwIwIAEgAv0AAiD9CwIgIAEgAv0AAhD9CwIQIAEgAv0AAgD9CwIACyAFQQA2AgALIAJBQGskACABCwsAIAAQHhogABAKCzEBAn8gAEHUJzYCACAAKAIEQQxrIgEgASgCCEEBayICNgIIIAJBAEgEQCABEBALIAALmgEAIABBAToANQJAIAAoAgQgAkcNACAAQQE6ADQCQCAAKAIQIgJFBEAgAEEBNgIkIAAgAzYCGCAAIAE2AhAgA0EBRw0CIAAoAjBBAUYNAQwCCyABIAJGBEAgACgCGCICQQJGBEAgACADNgIYIAMhAgsgACgCMEEBRw0CIAJBAUYNAQwCCyAAIAAoAiRBAWo2AiQLIABBAToANgsLXQEBfyAAKAIQIgNFBEAgAEEBNgIkIAAgAjYCGCAAIAE2AhAPCwJAIAEgA0YEQCAAKAIYQQJHDQEgACACNgIYDwsgAEEBOgA2IABBAjYCGCAAIAAoAiRBAWo2AiQLC7kCAQN/IwBBQGoiAiQAIAAoAgAiA0EEaygCACEEIANBCGsoAgAhAyACQgA3AiAgAkIANwIoIAJCADcCMCACQgA3ADcgAkIANwIYIAJBADYCFCACQZQkNgIQIAIgADYCDCACIAE2AgggACADaiEAQQAhAwJAIAQgAUEAEAkEQCACQQE2AjggBCACQQhqIAAgAEEBQQAgBCgCACgCFBEHACAAQQAgAigCIEEBRhshAwwBCyAEIAJBCGogAEEBQQAgBCgCACgCGBEFAAJAAkAgAigCLA4CAAECCyACKAIcQQAgAigCKEEBRhtBACACKAIkQQFGG0EAIAIoAjBBAUYbIQMMAQsgAigCIEEBRwRAIAIoAjANASACKAIkQQFHDQEgAigCKEEBRw0BCyACKAIYIQMLIAJBQGskACADCwQAIAALDgAgAEHQAGoQJEHQAGoLnCgBC38jAEEQayILJAACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIABB9AFNBEBB6DMoAgAiBkEQIABBC2pBeHEgAEELSRsiBUEDdiIAdiIBQQNxBEACQCABQX9zQQFxIABqIgJBA3QiAUGQNGoiACABQZg0aigCACIBKAIIIgRGBEBB6DMgBkF+IAJ3cTYCAAwBCyAEIAA2AgwgACAENgIICyABQQhqIQAgASACQQN0IgJBA3I2AgQgASACaiIBIAEoAgRBAXI2AgQMDwsgBUHwMygCACIHTQ0BIAEEQAJAQQIgAHQiAkEAIAJrciABIAB0cSIAQQAgAGtxaCIBQQN0IgBBkDRqIgIgAEGYNGooAgAiACgCCCIERgRAQegzIAZBfiABd3EiBjYCAAwBCyAEIAI2AgwgAiAENgIICyAAIAVBA3I2AgQgACAFaiIIIAFBA3QiASAFayIEQQFyNgIEIAAgAWogBDYCACAHBEAgB0F4cUGQNGohAUH8MygCACECAn8gBkEBIAdBA3Z0IgNxRQRAQegzIAMgBnI2AgAgAQwBCyABKAIICyEDIAEgAjYCCCADIAI2AgwgAiABNgIMIAIgAzYCCAsgAEEIaiEAQfwzIAg2AgBB8DMgBDYCAAwPC0HsMygCACIKRQ0BIApBACAKa3FoQQJ0QZg2aigCACICKAIEQXhxIAVrIQMgAiEBA0ACQCABKAIQIgBFBEAgASgCFCIARQ0BCyAAKAIEQXhxIAVrIgEgAyABIANJIgEbIQMgACACIAEbIQIgACEBDAELCyACKAIYIQkgAiACKAIMIgRHBEBB+DMoAgAaIAIoAggiACAENgIMIAQgADYCCAwOCyACQRRqIgEoAgAiAEUEQCACKAIQIgBFDQMgAkEQaiEBCwNAIAEhCCAAIgRBFGoiASgCACIADQAgBEEQaiEBIAQoAhAiAA0ACyAIQQA2AgAMDQtBfyEFIABBv39LDQAgAEELaiIAQXhxIQVB7DMoAgAiCEUNAEEAIAVrIQMCQAJAAkACf0EAIAVBgAJJDQAaQR8gBUH///8HSw0AGiAFQSYgAEEIdmciAGt2QQFxIABBAXRrQT5qCyIHQQJ0QZg2aigCACIBRQRAQQAhAAwBC0EAIQAgBUEZIAdBAXZrQQAgB0EfRxt0IQIDQAJAIAEoAgRBeHEgBWsiBiADTw0AIAEhBCAGIgMNAEEAIQMgASEADAMLIAAgASgCFCIGIAYgASACQR12QQRxaigCECIBRhsgACAGGyEAIAJBAXQhAiABDQALCyAAIARyRQRAQQAhBEECIAd0IgBBACAAa3IgCHEiAEUNAyAAQQAgAGtxaEECdEGYNmooAgAhAAsgAEUNAQsDQCAAKAIEQXhxIAVrIgIgA0khASACIAMgARshAyAAIAQgARshBCAAKAIQIgEEfyABBSAAKAIUCyIADQALCyAERQ0AIANB8DMoAgAgBWtPDQAgBCgCGCEHIAQgBCgCDCICRwRAQfgzKAIAGiAEKAIIIgAgAjYCDCACIAA2AggMDAsgBEEUaiIBKAIAIgBFBEAgBCgCECIARQ0DIARBEGohAQsDQCABIQYgACICQRRqIgEoAgAiAA0AIAJBEGohASACKAIQIgANAAsgBkEANgIADAsLIAVB8DMoAgAiBE0EQEH8MygCACEAAkAgBCAFayIBQRBPBEAgACAFaiICIAFBAXI2AgQgACAEaiABNgIAIAAgBUEDcjYCBAwBCyAAIARBA3I2AgQgACAEaiIBIAEoAgRBAXI2AgRBACECQQAhAQtB8DMgATYCAEH8MyACNgIAIABBCGohAAwNCyAFQfQzKAIAIgJJBEBB9DMgAiAFayIBNgIAQYA0QYA0KAIAIgAgBWoiAjYCACACIAFBAXI2AgQgACAFQQNyNgIEIABBCGohAAwNC0EAIQAgBUEvaiIDAn9BwDcoAgAEQEHINygCAAwBC0HMN0J/NwIAQcQ3QoCggICAgAQ3AgBBwDcgC0EMakFwcUHYqtWqBXM2AgBB1DdBADYCAEGkN0EANgIAQYAgCyIBaiIGQQAgAWsiCHEiASAFTQ0MQaA3KAIAIgQEQEGYNygCACIHIAFqIgkgB00NDSAEIAlJDQ0LAkBBpDctAABBBHFFBEACQAJAAkACQEGANCgCACIEBEBBqDchAANAIAQgACgCACIHTwRAIAcgACgCBGogBEsNAwsgACgCCCIADQALC0EAEAsiAkF/Rg0DIAEhBkHENygCACIAQQFrIgQgAnEEQCABIAJrIAIgBGpBACAAa3FqIQYLIAUgBk8NA0GgNygCACIABEBBmDcoAgAiBCAGaiIIIARNDQQgACAISQ0ECyAGEAsiACACRw0BDAULIAYgAmsgCHEiBhALIgIgACgCACAAKAIEakYNASACIQALIABBf0YNASAFQTBqIAZNBEAgACECDAQLQcg3KAIAIgIgAyAGa2pBACACa3EiAhALQX9GDQEgAiAGaiEGIAAhAgwDCyACQX9HDQILQaQ3QaQ3KAIAQQRyNgIACyABEAshAkEAEAshACACQX9GDQUgAEF/Rg0FIAAgAk0NBSAAIAJrIgYgBUEoak0NBQtBmDdBmDcoAgAgBmoiADYCAEGcNygCACAASQRAQZw3IAA2AgALAkBBgDQoAgAiAwRAQag3IQADQCACIAAoAgAiASAAKAIEIgRqRg0CIAAoAggiAA0ACwwEC0H4MygCACIAQQAgACACTRtFBEBB+DMgAjYCAAtBACEAQaw3IAY2AgBBqDcgAjYCAEGINEF/NgIAQYw0QcA3KAIANgIAQbQ3QQA2AgADQCAAQQN0IgFBmDRqIAFBkDRqIgQ2AgAgAUGcNGogBDYCACAAQQFqIgBBIEcNAAtB9DMgBkEoayIAQXggAmtBB3FBACACQQhqQQdxGyIBayIENgIAQYA0IAEgAmoiATYCACABIARBAXI2AgQgACACakEoNgIEQYQ0QdA3KAIANgIADAQLIAIgA00NAiABIANLDQIgACgCDEEIcQ0CIAAgBCAGajYCBEGANCADQXggA2tBB3FBACADQQhqQQdxGyIAaiIBNgIAQfQzQfQzKAIAIAZqIgIgAGsiADYCACABIABBAXI2AgQgAiADakEoNgIEQYQ0QdA3KAIANgIADAMLQQAhBAwKC0EAIQIMCAtB+DMoAgAgAksEQEH4MyACNgIACyACIAZqIQFBqDchAAJAAkACQANAIAEgACgCAEcEQCAAKAIIIgANAQwCCwsgAC0ADEEIcUUNAQtBqDchAANAIAMgACgCACIBTwRAIAEgACgCBGoiBCADSw0DCyAAKAIIIQAMAAsACyAAIAI2AgAgACAAKAIEIAZqNgIEIAJBeCACa0EHcUEAIAJBCGpBB3EbaiIHIAVBA3I2AgQgAUF4IAFrQQdxQQAgAUEIakEHcRtqIgYgBSAHaiIFayEAIAMgBkYEQEGANCAFNgIAQfQzQfQzKAIAIABqIgA2AgAgBSAAQQFyNgIEDAgLQfwzKAIAIAZGBEBB/DMgBTYCAEHwM0HwMygCACAAaiIANgIAIAUgAEEBcjYCBCAAIAVqIAA2AgAMCAsgBigCBCIDQQNxQQFHDQYgA0F4cSEJIANB/wFNBEAgBigCDCIBIAYoAggiAkYEQEHoM0HoMygCAEF+IANBA3Z3cTYCAAwHCyACIAE2AgwgASACNgIIDAYLIAYoAhghCCAGIAYoAgwiAkcEQCAGKAIIIgEgAjYCDCACIAE2AggMBQsgBkEUaiIBKAIAIgNFBEAgBigCECIDRQ0EIAZBEGohAQsDQCABIQQgAyICQRRqIgEoAgAiAw0AIAJBEGohASACKAIQIgMNAAsgBEEANgIADAQLQfQzIAZBKGsiAEF4IAJrQQdxQQAgAkEIakEHcRsiAWsiCDYCAEGANCABIAJqIgE2AgAgASAIQQFyNgIEIAAgAmpBKDYCBEGENEHQNygCADYCACADIARBJyAEa0EHcUEAIARBJ2tBB3EbakEvayIAIAAgA0EQakkbIgFBGzYCBCABQbA3KQIANwIQIAFBqDcpAgA3AghBsDcgAUEIajYCAEGsNyAGNgIAQag3IAI2AgBBtDdBADYCACABQRhqIQADQCAAQQc2AgQgAEEIaiECIABBBGohACACIARJDQALIAEgA0YNACABIAEoAgRBfnE2AgQgAyABIANrIgJBAXI2AgQgASACNgIAIAJB/wFNBEAgAkF4cUGQNGohAAJ/QegzKAIAIgFBASACQQN2dCICcUUEQEHoMyABIAJyNgIAIAAMAQsgACgCCAshASAAIAM2AgggASADNgIMIAMgADYCDCADIAE2AggMAQtBHyEAIAJB////B00EQCACQSYgAkEIdmciAGt2QQFxIABBAXRrQT5qIQALIAMgADYCHCADQgA3AhAgAEECdEGYNmohAQJAAkBB7DMoAgAiBEEBIAB0IgZxRQRAQewzIAQgBnI2AgAgASADNgIADAELIAJBGSAAQQF2a0EAIABBH0cbdCEAIAEoAgAhBANAIAQiASgCBEF4cSACRg0CIABBHXYhBCAAQQF0IQAgASAEQQRxaiIGKAIQIgQNAAsgBiADNgIQCyADIAE2AhggAyADNgIMIAMgAzYCCAwBCyABKAIIIgAgAzYCDCABIAM2AgggA0EANgIYIAMgATYCDCADIAA2AggLQfQzKAIAIgAgBU0NAEH0MyAAIAVrIgE2AgBBgDRBgDQoAgAiACAFaiICNgIAIAIgAUEBcjYCBCAAIAVBA3I2AgQgAEEIaiEADAgLQagyQTA2AgBBACEADAcLQQAhAgsgCEUNAAJAIAYoAhwiAUECdEGYNmoiBCgCACAGRgRAIAQgAjYCACACDQFB7DNB7DMoAgBBfiABd3E2AgAMAgsgCEEQQRQgCCgCECAGRhtqIAI2AgAgAkUNAQsgAiAINgIYIAYoAhAiAQRAIAIgATYCECABIAI2AhgLIAYoAhQiAUUNACACIAE2AhQgASACNgIYCyAAIAlqIQAgBiAJaiIGKAIEIQMLIAYgA0F+cTYCBCAFIABBAXI2AgQgACAFaiAANgIAIABB/wFNBEAgAEF4cUGQNGohAQJ/QegzKAIAIgJBASAAQQN2dCIAcUUEQEHoMyAAIAJyNgIAIAEMAQsgASgCCAshACABIAU2AgggACAFNgIMIAUgATYCDCAFIAA2AggMAQtBHyEDIABB////B00EQCAAQSYgAEEIdmciAWt2QQFxIAFBAXRrQT5qIQMLIAUgAzYCHCAFQgA3AhAgA0ECdEGYNmohAQJAAkBB7DMoAgAiAkEBIAN0IgRxRQRAQewzIAIgBHI2AgAgASAFNgIADAELIABBGSADQQF2a0EAIANBH0cbdCEDIAEoAgAhAgNAIAIiASgCBEF4cSAARg0CIANBHXYhAiADQQF0IQMgASACQQRxaiIEKAIQIgINAAsgBCAFNgIQCyAFIAE2AhggBSAFNgIMIAUgBTYCCAwBCyABKAIIIgAgBTYCDCABIAU2AgggBUEANgIYIAUgATYCDCAFIAA2AggLIAdBCGohAAwCCwJAIAdFDQACQCAEKAIcIgBBAnRBmDZqIgEoAgAgBEYEQCABIAI2AgAgAg0BQewzIAhBfiAAd3EiCDYCAAwCCyAHQRBBFCAHKAIQIARGG2ogAjYCACACRQ0BCyACIAc2AhggBCgCECIABEAgAiAANgIQIAAgAjYCGAsgBCgCFCIARQ0AIAIgADYCFCAAIAI2AhgLAkAgA0EPTQRAIAQgAyAFaiIAQQNyNgIEIAAgBGoiACAAKAIEQQFyNgIEDAELIAQgBUEDcjYCBCAEIAVqIgIgA0EBcjYCBCACIANqIAM2AgAgA0H/AU0EQCADQXhxQZA0aiEAAn9B6DMoAgAiAUEBIANBA3Z0IgNxRQRAQegzIAEgA3I2AgAgAAwBCyAAKAIICyEBIAAgAjYCCCABIAI2AgwgAiAANgIMIAIgATYCCAwBC0EfIQAgA0H///8HTQRAIANBJiADQQh2ZyIAa3ZBAXEgAEEBdGtBPmohAAsgAiAANgIcIAJCADcCECAAQQJ0QZg2aiEBAkACQCAIQQEgAHQiBnFFBEBB7DMgBiAIcjYCACABIAI2AgAMAQsgA0EZIABBAXZrQQAgAEEfRxt0IQAgASgCACEFA0AgBSIBKAIEQXhxIANGDQIgAEEddiEGIABBAXQhACABIAZBBHFqIgYoAhAiBQ0ACyAGIAI2AhALIAIgATYCGCACIAI2AgwgAiACNgIIDAELIAEoAggiACACNgIMIAEgAjYCCCACQQA2AhggAiABNgIMIAIgADYCCAsgBEEIaiEADAELAkAgCUUNAAJAIAIoAhwiAEECdEGYNmoiASgCACACRgRAIAEgBDYCACAEDQFB7DMgCkF+IAB3cTYCAAwCCyAJQRBBFCAJKAIQIAJGG2ogBDYCACAERQ0BCyAEIAk2AhggAigCECIABEAgBCAANgIQIAAgBDYCGAsgAigCFCIARQ0AIAQgADYCFCAAIAQ2AhgLAkAgA0EPTQRAIAIgAyAFaiIAQQNyNgIEIAAgAmoiACAAKAIEQQFyNgIEDAELIAIgBUEDcjYCBCACIAVqIgQgA0EBcjYCBCADIARqIAM2AgAgBwRAIAdBeHFBkDRqIQBB/DMoAgAhAQJ/QQEgB0EDdnQiBSAGcUUEQEHoMyAFIAZyNgIAIAAMAQsgACgCCAshBiAAIAE2AgggBiABNgIMIAEgADYCDCABIAY2AggLQfwzIAQ2AgBB8DMgAzYCAAsgAkEIaiEACyALQRBqJAAgAAuXAgAgAEUEQEEADwsCfwJAIAAEfyABQf8ATQ0BAkBBxDMoAgAoAgBFBEAgAUGAf3FBgL8DRg0DDAELIAFB/w9NBEAgACABQT9xQYABcjoAASAAIAFBBnZBwAFyOgAAQQIMBAsgAUGAQHFBgMADRyABQYCwA09xRQRAIAAgAUE/cUGAAXI6AAIgACABQQx2QeABcjoAACAAIAFBBnZBP3FBgAFyOgABQQMMBAsgAUGAgARrQf//P00EQCAAIAFBP3FBgAFyOgADIAAgAUESdkHwAXI6AAAgACABQQZ2QT9xQYABcjoAAiAAIAFBDHZBP3FBgAFyOgABQQQMBAsLQagyQRk2AgBBfwVBAQsMAQsgACABOgAAQQELC5YYAxJ/AXwCfiMAQbAEayIMJAAgDEEANgIsAkAgAb0iGUIAUwRAQQEhEEGKCCETIAGaIgG9IRkMAQsgBEGAEHEEQEEBIRBBjQghEwwBC0GQCEGLCCAEQQFxIhAbIRMgEEUhFQsCQCAZQoCAgICAgID4/wCDQoCAgICAgID4/wBRBEAgAEEgIAIgEEEDaiIDIARB//97cRAGIAAgEyAQEAUgAEGzCEH2CCAFQSBxIgUbQcwIQfoIIAUbIAEgAWIbQQMQBSAAQSAgAiADIARBgMAAcxAGIAMgAiACIANIGyEJDAELIAxBEGohEQJAAn8CQCABIAxBLGoQKiIBIAGgIgFEAAAAAAAAAABiBEAgDCAMKAIsIgZBAWs2AiwgBUEgciIOQeEARw0BDAMLIAVBIHIiDkHhAEYNAiAMKAIsIQpBBiADIANBAEgbDAELIAwgBkEdayIKNgIsIAFEAAAAAAAAsEGiIQFBBiADIANBAEgbCyELIAxBMGpBoAJBACAKQQBOG2oiDSEHA0AgBwJ/IAFEAAAAAAAA8EFjIAFEAAAAAAAAAABmcQRAIAGrDAELQQALIgM2AgAgB0EEaiEHIAEgA7ihRAAAAABlzc1BoiIBRAAAAAAAAAAAYg0ACwJAIApBAEwEQCAKIQMgByEGIA0hCAwBCyANIQggCiEDA0BBHSADIANBHU4bIQMCQCAHQQRrIgYgCEkNACADrSEaQgAhGQNAIAYgGUL/////D4MgBjUCACAahnwiGSAZQoCU69wDgCIZQoCU69wDfn0+AgAgBkEEayIGIAhPDQALIBmnIgZFDQAgCEEEayIIIAY2AgALA0AgCCAHIgZJBEAgBkEEayIHKAIARQ0BCwsgDCAMKAIsIANrIgM2AiwgBiEHIANBAEoNAAsLIANBAEgEQCALQRlqQQluQQFqIQ8gDkHmAEYhEgNAQQlBACADayIDIANBCU4bIQkCQCAGIAhNBEAgCCgCACEHDAELQYCU69wDIAl2IRRBfyAJdEF/cyEWQQAhAyAIIQcDQCAHIAMgBygCACIXIAl2ajYCACAWIBdxIBRsIQMgB0EEaiIHIAZJDQALIAgoAgAhByADRQ0AIAYgAzYCACAGQQRqIQYLIAwgDCgCLCAJaiIDNgIsIA0gCCAHRUECdGoiCCASGyIHIA9BAnRqIAYgBiAHa0ECdSAPShshBiADQQBIDQALC0EAIQMCQCAGIAhNDQAgDSAIa0ECdUEJbCEDQQohByAIKAIAIglBCkkNAANAIANBAWohAyAJIAdBCmwiB08NAAsLIAsgA0EAIA5B5gBHG2sgDkHnAEYgC0EAR3FrIgcgBiANa0ECdUEJbEEJa0gEQEEEQaQCIApBAEgbIAxqIAdBgMgAaiIJQQltIg9BAnRqQdAfayEKQQohByAJIA9BCWxrIglBB0wEQANAIAdBCmwhByAJQQFqIglBCEcNAAsLAkAgCigCACISIBIgB24iDyAHbGsiCUUgCkEEaiIUIAZGcQ0AAkAgD0EBcUUEQEQAAAAAAABAQyEBIAdBgJTr3ANHDQEgCCAKTw0BIApBBGstAABBAXFFDQELRAEAAAAAAEBDIQELRAAAAAAAAOA/RAAAAAAAAPA/RAAAAAAAAPg/IAYgFEYbRAAAAAAAAPg/IAkgB0EBdiIURhsgCSAUSRshGAJAIBUNACATLQAAQS1HDQAgGJohGCABmiEBCyAKIBIgCWsiCTYCACABIBigIAFhDQAgCiAHIAlqIgM2AgAgA0GAlOvcA08EQANAIApBADYCACAIIApBBGsiCksEQCAIQQRrIghBADYCAAsgCiAKKAIAQQFqIgM2AgAgA0H/k+vcA0sNAAsLIA0gCGtBAnVBCWwhA0EKIQcgCCgCACIJQQpJDQADQCADQQFqIQMgCSAHQQpsIgdPDQALCyAKQQRqIgcgBiAGIAdLGyEGCwNAIAYiByAITSIJRQRAIAdBBGsiBigCAEUNAQsLAkAgDkHnAEcEQCAEQQhxIQoMAQsgA0F/c0F/IAtBASALGyIGIANKIANBe0pxIgobIAZqIQtBf0F+IAobIAVqIQUgBEEIcSIKDQBBdyEGAkAgCQ0AIAdBBGsoAgAiDkUNAEEKIQlBACEGIA5BCnANAANAIAYiCkEBaiEGIA4gCUEKbCIJcEUNAAsgCkF/cyEGCyAHIA1rQQJ1QQlsIQkgBUFfcUHGAEYEQEEAIQogCyAGIAlqQQlrIgZBACAGQQBKGyIGIAYgC0obIQsMAQtBACEKIAsgAyAJaiAGakEJayIGQQAgBkEAShsiBiAGIAtKGyELC0F/IQkgC0H9////B0H+////ByAKIAtyIhIbSg0BIAsgEkEAR2pBAWohDgJAIAVBX3EiFUHGAEYEQCADIA5B/////wdzSg0DIANBACADQQBKGyEGDAELIBEgAyADQR91IgZzIAZrrSAREAwiBmtBAUwEQANAIAZBAWsiBkEwOgAAIBEgBmtBAkgNAAsLIAZBAmsiDyAFOgAAIAZBAWtBLUErIANBAEgbOgAAIBEgD2siBiAOQf////8Hc0oNAgsgBiAOaiIDIBBB/////wdzSg0BIABBICACIAMgEGoiBSAEEAYgACATIBAQBSAAQTAgAiAFIARBgIAEcxAGAkACQAJAIBVBxgBGBEAgDEEQaiIGQQhyIQMgBkEJciEKIA0gCCAIIA1LGyIJIQgDQCAINQIAIAoQDCEGAkAgCCAJRwRAIAYgDEEQak0NAQNAIAZBAWsiBkEwOgAAIAYgDEEQaksNAAsMAQsgBiAKRw0AIAxBMDoAGCADIQYLIAAgBiAKIAZrEAUgCEEEaiIIIA1NDQALIBIEQCAAQf4IQQEQBQsgByAITQ0BIAtBAEwNAQNAIAg1AgAgChAMIgYgDEEQaksEQANAIAZBAWsiBkEwOgAAIAYgDEEQaksNAAsLIAAgBkEJIAsgC0EJThsQBSALQQlrIQYgCEEEaiIIIAdPDQMgC0EJSiEDIAYhCyADDQALDAILAkAgC0EASA0AIAcgCEEEaiAHIAhLGyEJIAxBEGoiBkEIciEDIAZBCXIhDSAIIQcDQCANIAc1AgAgDRAMIgZGBEAgDEEwOgAYIAMhBgsCQCAHIAhHBEAgBiAMQRBqTQ0BA0AgBkEBayIGQTA6AAAgBiAMQRBqSw0ACwwBCyAAIAZBARAFIAZBAWohBiAKIAtyRQ0AIABB/ghBARAFCyAAIAYgDSAGayIGIAsgBiALSBsQBSALIAZrIQsgB0EEaiIHIAlPDQEgC0EATg0ACwsgAEEwIAtBEmpBEkEAEAYgACAPIBEgD2sQBQwCCyALIQYLIABBMCAGQQlqQQlBABAGCyAAQSAgAiAFIARBgMAAcxAGIAUgAiACIAVIGyEJDAELIBMgBUEadEEfdUEJcWohCAJAIANBC0sNAEEMIANrIQZEAAAAAAAAMEAhGANAIBhEAAAAAAAAMECiIRggBkEBayIGDQALIAgtAABBLUYEQCAYIAGaIBihoJohAQwBCyABIBigIBihIQELIBEgDCgCLCIGIAZBH3UiBnMgBmutIBEQDCIGRgRAIAxBMDoADyAMQQ9qIQYLIBBBAnIhCyAFQSBxIQ0gDCgCLCEHIAZBAmsiCiAFQQ9qOgAAIAZBAWtBLUErIAdBAEgbOgAAIARBCHEhBiAMQRBqIQcDQCAHIgUCfyABmUQAAAAAAADgQWMEQCABqgwBC0GAgICAeAsiB0HgI2otAAAgDXI6AAAgASAHt6FEAAAAAAAAMECiIQECQCAFQQFqIgcgDEEQamtBAUcNAAJAIAYNACADQQBKDQAgAUQAAAAAAAAAAGENAQsgBUEuOgABIAVBAmohBwsgAUQAAAAAAAAAAGINAAtBfyEJQf3///8HIAsgESAKayIGaiINayADSA0AIABBICACIA0gA0ECaiAHIAxBEGoiB2siBSAFQQJrIANIGyAFIAMbIglqIgMgBBAGIAAgCCALEAUgAEEwIAIgAyAEQYCABHMQBiAAIAcgBRAFIABBMCAJIAVrQQBBABAGIAAgCiAGEAUgAEEgIAIgAyAEQYDAAHMQBiADIAIgAiADSBshCQsgDEGwBGokACAJC7QCAAJAAkACQAJAAkACQAJAAkACQAJAAkAgAUEJaw4SAAgJCggJAQIDBAoJCgoICQUGBwsgAiACKAIAIgFBBGo2AgAgACABKAIANgIADwsgAiACKAIAIgFBBGo2AgAgACABMgEANwMADwsgAiACKAIAIgFBBGo2AgAgACABMwEANwMADwsgAiACKAIAIgFBBGo2AgAgACABMAAANwMADwsgAiACKAIAIgFBBGo2AgAgACABMQAANwMADwsgAiACKAIAQQdqQXhxIgFBCGo2AgAgACABKwMAOQMADwsACw8LIAIgAigCACIBQQRqNgIAIAAgATQCADcDAA8LIAIgAigCACIBQQRqNgIAIAAgATUCADcDAA8LIAIgAigCAEEHakF4cSIBQQhqNgIAIAAgASkDADcDAAtyAQN/IAAoAgAsAABBMGtBCk8EQEEADwsDQCAAKAIAIQNBfyEBIAJBzJmz5gBNBEBBfyADLAAAQTBrIgEgAkEKbCICaiABIAJB/////wdzShshAQsgACADQQFqNgIAIAEhAiADLAABQTBrQQpJDQALIAILkRQCE38BfkGHCSELIwBB0ABrIgUkACAFQYcJNgJMIAVBN2ohFSAFQThqIRACQAJAAkACQANAIAshCiAEIAxB/////wdzSg0BIAQgDGohDAJAAkACQCAKIgQtAAAiBgRAA0ACQAJAIAZB/wFxIgtFBEAgBCELDAELIAtBJUcNASAEIQYDQCAGLQABQSVHBEAgBiELDAILIARBAWohBCAGLQACIQcgBkECaiILIQYgB0ElRg0ACwsgBCAKayIEIAxB/////wdzIhZKDQcgAARAIAAgCiAEEAULIAQNBiAFIAs2AkwgC0EBaiEEQX8hDQJAIAssAAFBMGtBCk8NACALLQACQSRHDQAgC0EDaiEEIAssAAFBMGshDUEBIRELIAUgBDYCTEEAIQgCQCAELAAAIgZBIGsiC0EfSwRAIAQhBwwBCyAEIQdBASALdCILQYnRBHFFDQADQCAFIARBAWoiBzYCTCAIIAtyIQggBCwAASIGQSBrIgtBIE8NASAHIQRBASALdCILQYnRBHENAAsLAkAgBkEqRgRAAn8CQCAHLAABQTBrQQpPDQAgBy0AAkEkRw0AIAcsAAFBAnQgA2pBwAFrQQo2AgAgB0EDaiEGQQEhESAHLAABQQN0IAJqQYADaygCAAwBCyARDQYgB0EBaiEGIABFBEAgBSAGNgJMQQAhEUEAIQ4MAwsgASABKAIAIgRBBGo2AgBBACERIAQoAgALIQ4gBSAGNgJMIA5BAE4NAUEAIA5rIQ4gCEGAwAByIQgMAQsgBUHMAGoQKCIOQQBIDQggBSgCTCEGC0EAIQRBfyEJAn8gBi0AAEEuRwRAIAYhC0EADAELIAYtAAFBKkYEQAJ/AkAgBiwAAkEwa0EKTw0AIAYtAANBJEcNACAGLAACQQJ0IANqQcABa0EKNgIAIAZBBGohCyAGLAACQQN0IAJqQYADaygCAAwBCyARDQYgBkECaiELQQAgAEUNABogASABKAIAIgdBBGo2AgAgBygCAAshCSAFIAs2AkwgCUF/c0EfdgwBCyAFIAZBAWo2AkwgBUHMAGoQKCEJIAUoAkwhC0EBCyESA0AgBCEPQRwhByALIhQsAAAiBEH7AGtBRkkNCSAUQQFqIQsgBCAPQTpsakHPH2otAAAiBEEBa0EISQ0ACyAFIAs2AkwCQAJAIARBG0cEQCAERQ0LIA1BAE4EQCADIA1BAnRqIAQ2AgAgBSACIA1BA3RqKQMANwNADAILIABFDQggBUFAayAEIAEQJwwCCyANQQBODQoLQQAhBCAARQ0HCyAIQf//e3EiBiAIIAhBgMAAcRshCEEAIQ1BgAghEyAQIQcCQAJAAkACfwJAAkACQAJAAn8CQAJAAkACQAJAAkACQCAULAAAIgRBX3EgBCAEQQ9xQQNGGyAEIA8bIgRB2ABrDiEEFBQUFBQUFBQOFA8GDg4OFAYUFBQUAgUDFBQJFAEUFAQACwJAIARBwQBrDgcOFAsUDg4OAAsgBEHTAEYNCQwTCyAFKQNAIRdBgAgMBQtBACEEAkACQAJAAkACQAJAAkAgD0H/AXEOCAABAgMEGgUGGgsgBSgCQCAMNgIADBkLIAUoAkAgDDYCAAwYCyAFKAJAIAysNwMADBcLIAUoAkAgDDsBAAwWCyAFKAJAIAw6AAAMFQsgBSgCQCAMNgIADBQLIAUoAkAgDKw3AwAMEwtBCCAJIAlBCE0bIQkgCEEIciEIQfgAIQQLIBAhCiAFKQNAIhdCAFIEQCAEQSBxIQYDQCAKQQFrIgogF6dBD3FB4CNqLQAAIAZyOgAAIBdCD1YhDyAXQgSIIRcgDw0ACwsgBSkDQFANAyAIQQhxRQ0DIARBBHZBgAhqIRNBAiENDAMLIBAhBCAFKQNAIhdCAFIEQANAIARBAWsiBCAXp0EHcUEwcjoAACAXQgdWIQogF0IDiCEXIAoNAAsLIAQhCiAIQQhxRQ0CIAkgECAKayIEQQFqIAQgCUgbIQkMAgsgBSkDQCIXQgBTBEAgBUIAIBd9Ihc3A0BBASENQYAIDAELIAhBgBBxBEBBASENQYEIDAELQYIIQYAIIAhBAXEiDRsLIRMgFyAQEAwhCgsgEkEAIAlBAEgbDQ4gCEH//3txIAggEhshCAJAIAUpA0AiF0IAUg0AIAkNACAQIQpBACEJDAwLIAkgF1AgECAKa2oiBCAEIAlIGyEJDAsLAn9B/////wcgCSAJQf////8HTxsiDyIHQQBHIQgCQAJAAkAgBSgCQCIEQYAJIAQbIgoiBEEDcUUNACAHRQ0AA0AgBC0AAEUNAiAHQQFrIgdBAEchCCAEQQFqIgRBA3FFDQEgBw0ACwsgCEUNAQJAIAQtAABFDQAgB0EESQ0AA0AgBCgCACIIQX9zIAhBgYKECGtxQYCBgoR4cQ0CIARBBGohBCAHQQRrIgdBA0sNAAsLIAdFDQELA0AgBCAELQAARQ0CGiAEQQFqIQQgB0EBayIHDQALC0EACyIEIAprIA8gBBsiBCAKaiEHIAlBAE4EQCAGIQggBCEJDAsLIAYhCCAEIQkgBy0AAA0NDAoLIAkEQCAFKAJADAILQQAhBCAAQSAgDkEAIAgQBgwCCyAFQQA2AgwgBSAFKQNAPgIIIAUgBUEIaiIENgJAQX8hCSAECyEGQQAhBAJAA0AgBigCACIKRQ0BAkAgBUEEaiAKECUiCkEASCIHDQAgCiAJIARrSw0AIAZBBGohBiAEIApqIgQgCUkNAQwCCwsgBw0NC0E9IQcgBEEASA0LIABBICAOIAQgCBAGIARFBEBBACEEDAELQQAhByAFKAJAIQYDQCAGKAIAIgpFDQEgBUEEaiAKECUiCiAHaiIHIARLDQEgACAFQQRqIAoQBSAGQQRqIQYgBCAHSw0ACwsgAEEgIA4gBCAIQYDAAHMQBiAOIAQgBCAOSBshBAwICyASQQAgCUEASBsNCEE9IQcgACAFKwNAIA4gCSAIIAQQJiIEQQBODQcMCQsgBSAFKQNAPAA3QQEhCSAVIQogBiEIDAQLIAQtAAEhBiAEQQFqIQQMAAsACyAADQcgEUUNAkEBIQQDQCADIARBAnRqKAIAIgAEQCACIARBA3RqIAAgARAnQQEhDCAEQQFqIgRBCkcNAQwJCwtBASEMIARBCk8NBwNAIAMgBEECdGooAgANASAEQQFqIgRBCkcNAAsMBwtBHCEHDAQLIAkgByAKayIPIAkgD0obIgkgDUH/////B3NKDQJBPSEHIA4gCSANaiIGIAYgDkgbIgQgFkoNAyAAQSAgBCAGIAgQBiAAIBMgDRAFIABBMCAEIAYgCEGAgARzEAYgAEEwIAkgD0EAEAYgACAKIA8QBSAAQSAgBCAGIAhBgMAAcxAGDAELC0EAIQwMAwtBPSEHC0GoMiAHNgIAC0F/IQwLIAVB0ABqJAAgDAt+AgF/AX4gAL0iA0I0iKdB/w9xIgJB/w9HBHwgAkUEQCABIABEAAAAAAAAAABhBH9BAAUgAEQAAAAAAADwQ6IgARAqIQAgASgCAEFAags2AgAgAA8LIAEgAkH+B2s2AgAgA0L/////////h4B/g0KAgICAgICA8D+EvwUgAAsLegEDfwJAAkAgACIBQQNxRQ0AIAAtAABFBEBBAA8LA0AgAUEBaiIBQQNxRQ0BIAEtAAANAAsMAQsDQCABIgJBBGohASACKAIAIgNBf3MgA0GBgoQIa3FBgIGChHhxRQ0ACwNAIAIiAUEBaiECIAEtAAANAAsLIAEgAGsLgAQBA38gAkGABE8EQCAAIAEgAhAEIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAEEDcUUEQCAAIQIMAQsgAkUEQCAAIQIMAQsgACECA0AgAiABLQAAOgAAIAFBAWohASACQQFqIgJBA3FFDQEgAiADSQ0ACwsCQCADQXxxIgRBwABJDQAgAiAEQUBqIgVLDQADQCACIAEoAgA2AgAgAiABKAIENgIEIAIgASgCCDYCCCACIAEoAgw2AgwgAiABKAIQNgIQIAIgASgCFDYCFCACIAEoAhg2AhggAiABKAIcNgIcIAIgASgCIDYCICACIAEoAiQ2AiQgAiABKAIoNgIoIAIgASgCLDYCLCACIAEoAjA2AjAgAiABKAI0NgI0IAIgASgCODYCOCACIAEoAjw2AjwgAUFAayEBIAJBQGsiAiAFTQ0ACwsgAiAETw0BA0AgAiABKAIANgIAIAFBBGohASACQQRqIgIgBEkNAAsMAQsgA0EESQRAIAAhAgwBCyAAIANBBGsiBEsEQCAAIQIMAQsgACECA0AgAiABLQAAOgAAIAIgAS0AAToAASACIAEtAAI6AAIgAiABLQADOgADIAFBBGohASACQQRqIgIgBE0NAAsLIAIgA0kEQANAIAIgAS0AADoAACABQQFqIQEgAkEBaiICIANHDQALCyAACwMAAQv4DwIUfwN8IwBBEGsiCyQAAkAgALwiEUH/////B3EiA0Han6TuBE0EQCABIAC7IhcgF0SDyMltMF/kP6JEAAAAAAAAOEOgRAAAAAAAADjDoCIWRAAAAFD7Ifm/oqAgFkRjYhphtBBRvqKgIhg5AwAgGEQAAABg+yHpv2MhAgJ/IBaZRAAAAAAAAOBBYwRAIBaqDAELQYCAgIB4CyEDIAIEQCABIBcgFkQAAAAAAADwv6AiFkQAAABQ+yH5v6KgIBZEY2IaYbQQUb6ioDkDACADQQFrIQMMAgsgGEQAAABg+yHpP2RFDQEgASAXIBZEAAAAAAAA8D+gIhZEAAAAUPsh+b+ioCAWRGNiGmG0EFG+oqA5AwAgA0EBaiEDDAELIANBgICA/AdPBEAgASAAIACTuzkDAEEAIQMMAQsgCyADIANBF3ZBlgFrIgNBF3Rrvrs5AwggC0EIaiEOIwBBsARrIgUkACADIANBA2tBGG0iAkEAIAJBAEobIg1BaGxqIQZB8AkoAgAiB0EATgRAIAdBAWohAyANIQIDQCAFQcACaiAEQQN0aiACQQBIBHxEAAAAAAAAAAAFIAJBAnRBgApqKAIAtws5AwAgAkEBaiECIARBAWoiBCADRw0ACwsgBkEYayEIQQAhAyAHQQAgB0EAShshBANAQQAhAkQAAAAAAAAAACEWA0AgDiACQQN0aisDACAFQcACaiADIAJrQQN0aisDAKIgFqAhFiACQQFqIgJBAUcNAAsgBSADQQN0aiAWOQMAIAMgBEYhAiADQQFqIQMgAkUNAAtBLyAGayESQTAgBmshDyAGQRlrIRMgByEDAkADQCAFIANBA3RqKwMAIRZBACECIAMhBCADQQBMIglFBEADQCAFQeADaiACQQJ0agJ/An8gFkQAAAAAAABwPqIiF5lEAAAAAAAA4EFjBEAgF6oMAQtBgICAgHgLtyIXRAAAAAAAAHDBoiAWoCIWmUQAAAAAAADgQWMEQCAWqgwBC0GAgICAeAs2AgAgBSAEQQFrIgRBA3RqKwMAIBegIRYgAkEBaiICIANHDQALCwJ/IBYgCBAPIhYgFkQAAAAAAADAP6KcRAAAAAAAACDAoqAiFplEAAAAAAAA4EFjBEAgFqoMAQtBgICAgHgLIQogFiAKt6EhFgJAAkACQAJ/IAhBAEwiFEUEQCADQQJ0IAVqIgIgAigC3AMiAiACIA91IgIgD3RrIgQ2AtwDIAIgCmohCiAEIBJ1DAELIAgNASADQQJ0IAVqKALcA0EXdQsiDEEATA0CDAELQQIhDCAWRAAAAAAAAOA/Zg0AQQAhDAwBC0EAIQJBACEEIAlFBEADQCAFQeADaiACQQJ0aiIVKAIAIQlB////ByEQAn8CQCAEDQBBgICACCEQIAkNAEEADAELIBUgECAJazYCAEEBCyEEIAJBAWoiAiADRw0ACwsCQCAUDQBB////AyECAkACQCATDgIBAAILQf///wEhAgsgA0ECdCAFaiIJIAkoAtwDIAJxNgLcAwsgCkEBaiEKIAxBAkcNAEQAAAAAAADwPyAWoSEWQQIhDCAERQ0AIBZEAAAAAAAA8D8gCBAPoSEWCyAWRAAAAAAAAAAAYQRAQQAhBAJAIAcgAyICTg0AA0AgBUHgA2ogAkEBayICQQJ0aigCACAEciEEIAIgB0oNAAsgBEUNACAIIQYDQCAGQRhrIQYgBUHgA2ogA0EBayIDQQJ0aigCAEUNAAsMAwtBASECA0AgAiIEQQFqIQIgBUHgA2ogByAEa0ECdGooAgBFDQALIAMgBGohBANAIAVBwAJqIANBAWoiA0EDdGogAyANakECdEGACmooAgC3OQMAQQAhAkQAAAAAAAAAACEWA0AgDiACQQN0aisDACAFQcACaiADIAJrQQN0aisDAKIgFqAhFiACQQFqIgJBAUcNAAsgBSADQQN0aiAWOQMAIAMgBEgNAAsgBCEDDAELCwJAIBZBGCAGaxAPIhZEAAAAAAAAcEFmBEAgBUHgA2ogA0ECdGoCfwJ/IBZEAAAAAAAAcD6iIheZRAAAAAAAAOBBYwRAIBeqDAELQYCAgIB4CyICt0QAAAAAAABwwaIgFqAiFplEAAAAAAAA4EFjBEAgFqoMAQtBgICAgHgLNgIAIANBAWohAwwBCwJ/IBaZRAAAAAAAAOBBYwRAIBaqDAELQYCAgIB4CyECIAghBgsgBUHgA2ogA0ECdGogAjYCAAtEAAAAAAAA8D8gBhAPIRYCQCADQQBIDQAgAyECA0AgBSACIgRBA3RqIBYgBUHgA2ogAkECdGooAgC3ojkDACACQQFrIQIgFkQAAAAAAABwPqIhFiAEDQALIANBAEgNACADIQQDQEQAAAAAAAAAACEWQQAhAiAHIAMgBGsiBiAGIAdKGyIIQQBOBEADQCACQQN0QdAfaisDACAFIAIgBGpBA3RqKwMAoiAWoCEWIAIgCEchDSACQQFqIQIgDQ0ACwsgBUGgAWogBkEDdGogFjkDACAEQQBKIQIgBEEBayEEIAINAAsLRAAAAAAAAAAAIRYgA0EATgRAA0AgAyICQQFrIQMgFiAFQaABaiACQQN0aisDAKAhFiACDQALCyALIBaaIBYgDBs5AwAgBUGwBGokACAKQQdxIQMgCysDACEWIBFBAEgEQCABIBaaOQMAQQAgA2shAwwBCyABIBY5AwALIAtBEGokACADC/YEAQh/IAEgACgCCCIEIAAoAgQiAmtBJG1NBEAgACABBH8gAiABQSRsaiEAA0AgAv0MAAAAAAAAAAAAAAAAAAAAAP0LAgAgAkEANgIgIAL9DAAAAAAAAAAAAAAAAAAAAAD9CwIQIAJBADYCCCACQgA3AgAgAkEMaiIBQQA2AgggAUIANwIAIAJBGGoiAUEANgIIIAFCADcCACACQSRqIgIgAEcNAAsgAAUgAgs2AgQPCwJAIAIgACgCACICa0EkbSIGIAFqIgNByOPxOEkEQEHH4/E4IAQgAmtBJG0iAkEBdCIEIAMgAyAESRsgAkHj8bgcTxsiBARAIARByOPxOE8NAiAEQSRsEA4hBQsgBSAGQSRsaiIDIAFBJGxqIQYgAyECA0AgAv0MAAAAAAAAAAAAAAAAAAAAAP0LAgAgAkEANgIgIAL9DAAAAAAAAAAAAAAAAAAAAAD9CwIQIAJBADYCCCACQgA3AgAgAkEMaiIBQQA2AgggAUIANwIAIAJBGGoiAUEANgIIIAFCADcCACACQSRqIgIgBkcNAAsgBSAEQSRsaiEIAkAgACgCBCICIAAoAgAiCUYEQCADIQUMAQsDQCADQSRrIgUgAkEkayIBKgIAOAIAIAUgASoCBDgCBCAFIAEqAgg4AgggA0EYayIEIAJBGGsiByoCADgCACAEIAcqAgQ4AgQgBCAHKgIIOAIIIANBDGsiAyACQQxrIgIqAgA4AgAgAyACKgIEOAIEIAMgAioCCDgCCCAFIQMgASICIAlHDQALIAAoAgAhAgsgACAINgIIIAAgBjYCBCAAIAU2AgAgAgRAIAIQCgsPCxAZAAsQGAALrgoBCH8CQEHoKSgCAEHkKSgCACICa0EGdSIBIABJBEAgACABayIDQewpKAIAIgRB6CkoAgAiAWtBBnVNBEBB6CkgAwR/IAEgA0EGdGohAgNAIAEQGkFAayIBIAJHDQALIAIFIAELNgIADAILAkAgAUHkKSgCACICa0EGdSIGIANqIgVBgICAIEkEQEH///8fIAQgAmsiAUEFdSICIAUgAiAFSxsgAUHA////B08bIgcEfyAHQYCAgCBPDQIgB0EGdBAOBUEACyIEIAZBBnRqIgIgA0EGdGohBSACIQEDQCABEBpBQGsiASAFRw0AC0HoKSgCACIBQeQpKAIAIgZHBEADQCACQUBqIgMgAUFAaiIBIgL9AAIA/QsCACADIAL9AAIw/QsCMCADIAL9AAIg/QsCICADIAL9AAIQ/QsCECADIQIgASAGRw0AC0HkKSgCACEBC0HsKSAEIAdBBnRqNgIAQegpIAU2AgBB5CkgAjYCACABBEAgARAQCwwDCxAZAAsQGAALIAAgAU8NAEHoKSACIABBBnRqNgIACwJAQfQpKAIAQfApKAIAIgJrQSRtIgEgAEkEQEHwKSAAIAFrEC8MAQsgACABTw0AQfQpIAIgAEEkbGo2AgALAkBBgCooAgBB/CkoAgAiAmtBBHUiASAASQRAQQAhBEEAIQcgACABayIDQYQqKAIAIgZBgCooAgAiAmtBBHVNBEACQCADRQ0AIAIhASADQQdxIggEQANAIAFC/////w83AgggAUIANwIAIAFBEGohASAEQQFqIgQgCEcNAAsLIANBBHQgAmohAiADQQFrQf////8AcUEHSQ0AA0AgAUIANwJwIAFCADcCYCABQgA3AlAgAUIANwJAIAFCADcCMCABQgA3AiAgAUIANwIQIAFC/////w83AgggAUIANwIAIAFC/////w83AnggAUL/////DzcCaCABQv////8PNwJYIAFC/////w83AkggAUL/////DzcCOCABQv////8PNwIoIAFC/////w83AhggAUGAAWoiASACRw0ACwtBgCogAjYCAAwCCwJAIAJB/CkoAgAiAWtBBHUiBCADaiIFQYCAgIABSQRAQf////8AIAYgAWsiBkEDdSIBIAUgASAFSxsgBkHw////B08bIgUEQCAFQYCAgIABTw0CIAVBBHQQDiEHCyAHIARBBHRqIgQhASADQQdxIgYEQANAIAFC/////w83AgggAUIANwIAIAFBEGohASAIQQFqIgggBkcNAAsLIANBBHQgBGohCCADQQFrQf////8AcUEHTwRAA0AgAUIANwJwIAFCADcCYCABQgA3AlAgAUIANwJAIAFCADcCMCABQgA3AiAgAUIANwIQIAFC/////w83AgggAUIANwIAIAFC/////w83AnggAUL/////DzcCaCABQv////8PNwJYIAFC/////w83AkggAUL/////DzcCOCABQv////8PNwIoIAFC/////w83AhggAUGAAWoiASAIRw0ACwtB/CkoAgAiASACRwRAA0AgBEEQayIEIAJBEGsiAv0AAgD9CwIAIAEgAkcNAAtB/CkoAgAhAgtBhCogByAFQQR0ajYCAEGAKiAINgIAQfwpIAQ2AgAgAgRAIAIQEAsMAwsQGQALEBgACyAAIAFPDQBBgCogAiAAQQR0ajYCAAtBjCooAgBBiCooAgAiAmtBJG0iASAASQRAQYgqIAAgAWsQLw8LIAAgAUkEQEGMKiACIABBJGxqNgIACwsQACMAIABrQXBxIgAkACAACwcAIAAoAgQLGQBBiCooAgAiAARAQYwqIAA2AgAgABAKCwsFAEG3CAsFAEHnCAsFAEGkCAsVACAARQRAQQAPCyAAQaQlECFBAEcLGgAgACABKAIIIAUQCQRAIAEgAiADIAQQHwsLNwAgACABKAIIIAUQCQRAIAEgAiADIAQQHw8LIAAoAggiACABIAIgAyAEIAUgACgCACgCFBEHAAunAQAgACABKAIIIAQQCQRAAkAgASgCBCACRw0AIAEoAhxBAUYNACABIAM2AhwLDwsCQCAAIAEoAgAgBBAJRQ0AAkAgAiABKAIQRwRAIAEoAhQgAkcNAQsgA0EBRw0BIAFBATYCIA8LIAEgAjYCFCABIAM2AiAgASABKAIoQQFqNgIoAkAgASgCJEEBRw0AIAEoAhhBAkcNACABQQE6ADYLIAFBBDYCLAsLiAIAIAAgASgCCCAEEAkEQAJAIAEoAgQgAkcNACABKAIcQQFGDQAgASADNgIcCw8LAkAgACABKAIAIAQQCQRAAkAgAiABKAIQRwRAIAEoAhQgAkcNAQsgA0EBRw0CIAFBATYCIA8LIAEgAzYCIAJAIAEoAixBBEYNACABQQA7ATQgACgCCCIAIAEgAiACQQEgBCAAKAIAKAIUEQcAIAEtADUEQCABQQM2AiwgAS0ANEUNAQwDCyABQQQ2AiwLIAEgAjYCFCABIAEoAihBAWo2AiggASgCJEEBRw0BIAEoAhhBAkcNASABQQE6ADYPCyAAKAIIIgAgASACIAMgBCAAKAIAKAIYEQUACwsZAEH8KSgCACIABEBBgCogADYCACAAEAoLCzEAIAAgASgCCEEAEAkEQCABIAIgAxAgDwsgACgCCCIAIAEgAiADIAAoAgAoAhwRBgALGAAgACABKAIIQQAQCQRAIAEgAiADECALC5sBAQF/IwBBQGoiAyQAAn9BASAAIAFBABAJDQAaQQAgAUUNABpBACABQcQkECEiAUUNABogA0EMakEAQTQQESADQQE2AjggA0F/NgIUIAMgADYCECADIAE2AgggASADQQhqIAIoAgBBASABKAIAKAIcEQYAIAMoAiAiAEEBRgRAIAIgAygCGDYCAAsgAEEBRgshACADQUBrJAAgAAsZAEHwKSgCACIABEBB9CkgADYCACAAEAoLCxkAQeQpKAIAIgAEQEHoKSAANgIAIAAQCgsLBABCAAsEAEEAC/QCAQd/IwBBIGsiAyQAIAMgACgCHCIENgIQIAAoAhQhBSADIAI2AhwgAyABNgIYIAMgBSAEayIBNgIUIAEgAmohBUECIQcCfwJAAkACQCAAKAI8IANBEGoiAUECIANBDGoQACIEBH9BqDIgBDYCAEF/BUEACwRAIAEhBAwBCwNAIAUgAygCDCIGRg0CIAZBAEgEQCABIQQMBAsgASAGIAEoAgQiCEsiCUEDdGoiBCAGIAhBACAJG2siCCAEKAIAajYCACABQQxBBCAJG2oiASABKAIAIAhrNgIAIAUgBmshBSAAKAI8IAQiASAHIAlrIgcgA0EMahAAIgYEf0GoMiAGNgIAQX8FQQALRQ0ACwsgBUF/Rw0BCyAAIAAoAiwiATYCHCAAIAE2AhQgACABIAAoAjBqNgIQIAIMAQsgAEEANgIcIABCADcDECAAIAAoAgBBIHI2AgBBACAHQQJGDQAaIAIgBCgCBGsLIQAgA0EgaiQAIAALhwIAQZQpKAIAGgJAQX9BAAJ/QdAIECsiAAJ/QZQpKAIAQQBIBEBB0AggAEHIKBAUDAELQdAIIABByCgQFAsiASAARg0AGiABCyAARxtBAEgNAAJAQZgpKAIAQQpGDQBB3CgoAgAiAEHYKCgCAEYNAEHcKCAAQQFqNgIAIABBCjoAAAwBCyMAQRBrIgAkACAAQQo6AA8CQAJAQdgoKAIAIgEEfyABBUHIKBAVDQJB2CgoAgALQdwoKAIAIgFGDQBBmCkoAgBBCkYNAEHcKCABQQFqNgIAIAFBCjoAAAwBC0HIKCAAQQ9qQQFB7CgoAgARAgBBAUcNACAALQAPGgsgAEEQaiQAC0EACyYAQeApIAI4AgAgACABSARAA0AgABAcGiAAQQFqIgAgAUcNAAsLC+UEAgZ/D30jAEGAAWsiASQAQeQpKAIAIABBBnRqIgAqAgAhByAAKgIEIQggACoCCCEJIAAqAgwhCiAAKgIQIQsgACoCFCEMIAAqAhghDSAAKgIcIQ4gACoCICEPIAAqAiQhECAAKgIoIREgACoCLCESIAAqAjAhEyAAKgI0IRQgACoCOCEVIAEgACoCPLs5A3ggASAVuzkDcCABIBS7OQNoIAEgE7s5A2AgASASuzkDWCABIBG7OQNQIAEgELs5A0ggAUFAayAPuzkDACABIA67OQM4IAEgDbs5AzAgASAMuzkDKCABIAu7OQMgIAEgCrs5AxggASAJuzkDECABIAi7OQMIIAEgB7s5AwAjAEEQayIEJAAgBCABNgIMIwBB0AFrIgAkACAAIAE2AswBIABBoAFqIgJBAEEoEBEgACAAKALMATYCyAECQEEAIABByAFqIABB0ABqIAIQKUEASA0AQZQpKAIAQQBOIQVByCgoAgAhAkGQKSgCAEEATARAQcgoIAJBX3E2AgALAn8CQAJAQfgoKAIARQRAQfgoQdAANgIAQeQoQQA2AgBB2ChCADcDAEH0KCgCACEDQfQoIAA2AgAMAQtB2CgoAgANAQtBf0HIKBAVDQEaC0HIKCAAQcgBaiAAQdAAaiAAQaABahApCyEGIAMEf0HIKEEAQQBB7CgoAgARAgAaQfgoQQA2AgBB9CggAzYCAEHkKEEANgIAQdwoKAIAGkHYKEIANwMAQQAFIAYLGkHIKEHIKCgCACACQSBxcjYCACAFRQ0ACyAAQdABaiQAIARBEGokACABQYABaiQACwgAQYgqKAIACwgAQfwpKAIACwgAQfApKAIACwgAQeQpKAIACwvnHxQAQYAIC8cXLSsgICAwWDB4AC0wWCswWCAwWC0weCsweCAweAB2ZWN0b3IAc3RkOjpleGNlcHRpb24AbmFuAGJhZF9hcnJheV9uZXdfbGVuZ3RoAGluZgBlbXNjcmlwdGVuIGhhdmUgbG9hZGVkAHN0ZDo6YmFkX2FsbG9jAE5BTgBJTkYALgAobnVsbCkAWyUuMmYsICUuMmYsICUuMmYsICUuMmZdDQpbJS4yZiwgJS4yZiwgJS4yZiwgJS4yZl0NClslLjJmLCAlLjJmLCAlLjJmLCAlLjJmXQ0KWyUuMmYsICUuMmYsICUuMmYsICUuMmZdDQoAAwAAAAQAAAAEAAAABgAAAIP5ogBETm4A/CkVANFXJwDdNPUAYtvAADyZlQBBkEMAY1H+ALveqwC3YcUAOm4kANJNQgBJBuAACeouAByS0QDrHf4AKbEcAOg+pwD1NYIARLsuAJzphAC0JnAAQX5fANaROQBTgzkAnPQ5AItfhAAo+b0A+B87AN7/lwAPmAUAES/vAApaiwBtH20Az342AAnLJwBGT7cAnmY/AC3qXwC6J3UA5evHAD178QD3OQcAklKKAPtr6gAfsV8ACF2NADADVgB7/EYA8KtrACC8zwA29JoA46kdAF5hkQAIG+YAhZllAKAUXwCNQGgAgNj/ACdzTQAGBjEAylYVAMmocwB74mAAa4zAABnERwDNZ8MACejcAFmDKgCLdsQAphyWAESv3QAZV9EApT4FAAUH/wAzfj8AwjLoAJhP3gC7fTIAJj3DAB5r7wCf+F4ANR86AH/yygDxhx0AfJAhAGokfADVbvoAMC13ABU7QwC1FMYAwxmdAK3EwgAsTUEADABdAIZ9RgDjcS0Am8aaADNiAAC00nwAtKeXADdV1QDXPvYAoxAYAE12/ABknSoAcNerAGN8+AB6sFcAFxXnAMBJVgA71tkAp4Q4ACQjywDWincAWlQjAAAfuQDxChsAGc7fAJ8x/wBmHmoAmVdhAKz7RwB+f9gAImW3ADLoiQDmv2AA78TNAGw2CQBdP9QAFt7XAFg73gDem5IA0iIoACiG6ADiWE0AxsoyAAjjFgDgfcsAF8BQAPMdpwAY4FsALhM0AIMSYgCDSAEA9Y5bAK2wfwAe6fIASEpDABBn0wCq3dgArl9CAGphzgAKKKQA05m0AAam8gBcd38Ao8KDAGE8iACKc3gAr4xaAG/XvQAtpmMA9L/LAI2B7wAmwWcAVcpFAMrZNgAoqNIAwmGNABLJdwAEJhQAEkabAMRZxADIxUQATbKRAAAX8wDUQ60AKUnlAP3VEAAAvvwAHpTMAHDO7gATPvUA7PGAALPnwwDH+CgAkwWUAMFxPgAuCbMAC0XzAIgSnACrIHsALrWfAEeSwgB7Mi8ADFVtAHKnkABr5x8AMcuWAHkWSgBBeeIA9N+JAOiUlwDi5oQAmTGXAIjtawBfXzYAu/0OAEiatABnpGwAcXJCAI1dMgCfFbgAvOUJAI0xJQD3dDkAMAUcAA0MAQBLCGgALO5YAEeqkAB05wIAvdYkAPd9pgBuSHIAnxbvAI6UpgC0kfYA0VNRAM8K8gAgmDMA9Ut+ALJjaADdPl8AQF0DAIWJfwBVUikAN2TAAG3YEAAySDIAW0x1AE5x1ABFVG4ACwnBACr1aQAUZtUAJwedAF0EUAC0O9sA6nbFAIf5FwBJa30AHSe6AJZpKQDGzKwArRRUAJDiagCI2YkALHJQAASkvgB3B5QA8zBwAAD8JwDqcagAZsJJAGTgPQCX3YMAoz+XAEOU/QANhowAMUHeAJI5nQDdcIwAF7fnAAjfOwAVNysAXICgAFqAkwAQEZIAD+jYAGyArwDb/0sAOJAPAFkYdgBipRUAYcu7AMeJuQAQQL0A0vIEAEl1JwDrtvYA2yK7AAoUqgCJJi8AZIN2AAk7MwAOlBoAUTqqAB2jwgCv7a4AXCYSAG3CTQAtepwAwFaXAAM/gwAJ8PYAK0CMAG0xmQA5tAcADCAVANjDWwD1ksQAxq1LAE7KpQCnN80A5qk2AKuSlADdQmgAGWPeAHaM7wBoi1IA/Ns3AK6hqwDfFTEAAK6hAAz72gBkTWYA7QW3ACllMABXVr8AR/86AGr5uQB1vvMAKJPfAKuAMABmjPYABMsVAPoiBgDZ5B0APbOkAFcbjwA2zQkATkLpABO+pAAzI7UA8KoaAE9lqADSwaUACz8PAFt4zQAj+XYAe4sEAIkXcgDGplMAb27iAO/rAACbSlgAxNq3AKpmugB2z88A0QIdALHxLQCMmcEAw613AIZI2gD3XaAAxoD0AKzwLwDd7JoAP1y8ANDebQCQxx8AKtu2AKMlOgAAr5oArVOTALZXBAApLbQAS4B+ANoHpwB2qg4Ae1mhABYSKgDcty0A+uX9AInb/gCJvv0A5HZsAAap/AA+gHAAhW4VAP2H/wAoPgcAYWczACoYhgBNveoAs+evAI9tbgCVZzkAMb9bAITXSAAw3xYAxy1DACVhNQDJcM4AMMu4AL9s/QCkAKIABWzkAFrdoAAhb0cAYhLSALlchABwYUkAa1bgAJlSAQBQVTcAHtW3ADPxxAATbl8AXTDkAIUuqQAdssMAoTI2AAi3pADqsdQAFvchAI9p5AAn/3cADAOAAI1ALQBPzaAAIKWZALOi0wAvXQoAtPlCABHaywB9vtAAm9vBAKsXvQDKooEACGpcAC5VFwAnAFUAfxTwAOEHhgAUC2QAlkGNAIe+3gDa/SoAayW2AHuJNAAF8/4Aub+eAGhqTwBKKqgAT8RaAC34vADXWpgA9MeVAA1NjQAgOqYApFdfABQ/sQCAOJUAzCABAHHdhgDJ3rYAv2D1AE1lEQABB2sAjLCsALLA0ABRVUgAHvsOAJVywwCjBjsAwEA1AAbcewDgRcwATin6ANbKyADo80EAfGTeAJtk2ADZvjEApJfDAHdY1ABp48UA8NoTALo6PABGGEYAVXVfANK99QBuksYArC5dAA5E7QAcPkIAYcSHACn96QDn1vMAInzKAG+RNQAI4MUA/9eNAG5q4gCw/cYAkwjBAHxddABrrbIAzW6dAD5yewDGEWoA98+pAClz3wC1yboAtwBRAOKyDQB0uiQA5X1gAHTYigANFSwAgRgMAH5mlAABKRYAn3p2AP39vgBWRe8A2X42AOzZEwCLurkAxJf8ADGoJwDxbsMAlMU2ANioVgC0qLUAz8wOABKJLQBvVzQALFaJAJnO4wDWILkAa16qAD4qnAARX8wA/QtKAOH0+wCOO20A4oYsAOnUhAD8tKkA7+7RAC41yQAvOWEAOCFEABvZyACB/AoA+0pqAC8c2ABTtIQATpmMAFQizAAqVdwAwMbWAAsZlgAacLgAaZVkACZaYAA/Uu4AfxEPAPS1EQD8y/UANLwtADS87gDoXcwA3V5gAGeOmwCSM+8AyRe4AGFYmwDhV7wAUYPGANg+EADdcUgALRzdAK8YoQAhLEYAWfPXANl6mACeVMAAT4b6AFYG/ADlea4AiSI2ADitIgBnk9wAVeiqAIImOADK55sAUQ2kAJkzsQCp1w4AaQVIAGWy8AB/iKcAiEyXAPnRNgAhkrMAe4JKAJjPIQBAn9wA3EdVAOF0OgBn60IA/p3fAF7UXwB7Z6QAuqx6AFX2ogAriCMAQbpVAFluCAAhKoYAOUeDAInj5gDlntQASftAAP9W6QAcD8oAxVmKAJT6KwDTwcUAD8XPANtargBHxYYAhUNiACGGOwAseZQAEGGHACpMewCALBoAQ78SAIgmkAB4PIkAqMTkAOXbewDEOsIAJvTqAPdnigANkr8AZaMrAD2TsQC9fAsApFHcACfdYwBp4d0AmpQZAKgplQBozigACe20AESfIABOmMoAcIJjAH58IwAPuTIAp/WOABRW5wAh8QgAtZ0qAG9+TQClGVEAtfmrAILf1gCW3WEAFjYCAMQ6nwCDoqEAcu1tADmNegCCuKkAazJcAEYnWwAANO0A0gB3APz0VQABWU0A4HGAAEHTHwt+QPsh+T8AAAAALUR0PgAAAICYRvg8AAAAYFHMeDsAAACAgxvwOQAAAEAgJXo4AAAAgCKC4zYAAAAAHfNpNRkACgAZGRkAAAAABQAAAAAAAAkAAAAACwAAAAAAAAAAGQARChkZGQMKBwABAAkLGAAACQYLAAALAAYZAAAAGRkZAEHhIAshDgAAAAAAAAAAGQAKDRkZGQANAAACAAkOAAAACQAOAAAOAEGbIQsBDABBpyELFRMAAAAAEwAAAAAJDAAAAAAADAAADABB1SELARAAQeEhCxUPAAAABA8AAAAACRAAAAAAABAAABAAQY8iCwESAEGbIgseEQAAAAARAAAAAAkSAAAAAAASAAASAAAaAAAAGhoaAEHSIgsOGgAAABoaGgAAAAAAAAkAQYMjCwEUAEGPIwsVFwAAAAAXAAAAAAkUAAAAAAAUAAAUAEG9IwsBFgBBySML/QQVAAAAABUAAAAACRYAAAAAABYAABYAADAxMjM0NTY3ODlBQkNERUZOMTBfX2N4eGFiaXYxMTZfX3NoaW1fdHlwZV9pbmZvRQAAAADgEgAA8BEAAEAUAABOMTBfX2N4eGFiaXYxMTdfX2NsYXNzX3R5cGVfaW5mb0UAAADgEgAAIBIAABQSAABOMTBfX2N4eGFiaXYxMTdfX3BiYXNlX3R5cGVfaW5mb0UAAADgEgAAUBIAABQSAABOMTBfX2N4eGFiaXYxMTlfX3BvaW50ZXJfdHlwZV9pbmZvRQDgEgAAgBIAAHQSAAAAAAAARBIAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAAAAAACgTAAALAAAAEwAAAA0AAAAOAAAADwAAABQAAAAVAAAAFgAAAE4xMF9fY3h4YWJpdjEyMF9fc2lfY2xhc3NfdHlwZV9pbmZvRQAAAADgEgAAABMAAEQSAAAAAAAAmBMAAAEAAAAXAAAAGAAAAAAAAADAEwAAAQAAABkAAAAaAAAAAAAAAIATAAABAAAAGwAAABwAAABTdDlleGNlcHRpb24AAAAAuBIAAHATAABTdDliYWRfYWxsb2MAAAAA4BIAAIgTAACAEwAAU3QyMGJhZF9hcnJheV9uZXdfbGVuZ3RoAAAAAOASAACkEwAAmBMAAAAAAADwEwAAAgAAAB0AAAAeAAAAU3QxMWxvZ2ljX2Vycm9yAOASAADgEwAAgBMAAAAAAAAkFAAAAgAAAB8AAAAeAAAAU3QxMmxlbmd0aF9lcnJvcgAAAADgEgAAEBQAAPATAABTdDl0eXBlX2luZm8AAAAAuBIAADAUAEHIKAsBBQBB1CgLAQcAQewoCw4IAAAACQAAACgVAAAABABBhCkLAQEAQZQpCwX/////CgBB2CkLA+AbAQ==";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}function getBinarySync(file){if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}throw"both async and sync fetching of the wasm failed"}function getBinaryPromise(binaryFile){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)){if(typeof fetch=="function"&&!isFileURI(binaryFile)){return fetch(binaryFile,{credentials:"same-origin"}).then((response=>{if(!response["ok"]){throw"failed to load wasm binary file at '"+binaryFile+"'"}return response["arrayBuffer"]()})).catch((()=>getBinarySync(binaryFile)))}else if(readAsync){return new Promise(((resolve,reject)=>{readAsync(binaryFile,(response=>resolve(new Uint8Array(response))),reject)}))}}return Promise.resolve().then((()=>getBinarySync(binaryFile)))}function instantiateArrayBuffer(binaryFile,imports,receiver){return getBinaryPromise(binaryFile).then((binary=>WebAssembly.instantiate(binary,imports))).then((instance=>instance)).then(receiver,(reason=>{err("failed to asynchronously prepare wasm: "+reason);abort(reason)}))}function instantiateAsync(binary,binaryFile,imports,callback){if(!binary&&typeof WebAssembly.instantiateStreaming=="function"&&!isDataURI(binaryFile)&&!isFileURI(binaryFile)&&!ENVIRONMENT_IS_NODE&&typeof fetch=="function"){return fetch(binaryFile,{credentials:"same-origin"}).then((response=>{var result=WebAssembly.instantiateStreaming(response,imports);return result.then(callback,(function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");return instantiateArrayBuffer(binaryFile,imports,callback)}))}))}return instantiateArrayBuffer(binaryFile,imports,callback)}function createWasm(){var info={"a":wasmImports};function receiveInstance(instance,module){var exports=instance.exports;Module["asm"]=exports;wasmMemory=Module["asm"]["f"];updateMemoryViews();wasmTable=Module["asm"]["h"];addOnInit(Module["asm"]["g"]);removeRunDependency("wasm-instantiate");return exports}addRunDependency("wasm-instantiate");function receiveInstantiationResult(result){receiveInstance(result["instance"])}if(Module["instantiateWasm"]){try{return Module["instantiateWasm"](info,receiveInstance)}catch(e){err("Module.instantiateWasm callback failed with error: "+e);return false}}instantiateAsync(wasmBinary,wasmBinaryFile,info,receiveInstantiationResult);return{}}function ExitStatus(status){this.name="ExitStatus";this.message=\`Program terminated with exit(\${status})\`;this.status=status}var callRuntimeCallbacks=callbacks=>{while(callbacks.length>0){callbacks.shift()(Module)}};function ExceptionInfo(excPtr){this.excPtr=excPtr;this.ptr=excPtr-24;this.set_type=function(type){HEAPU32[this.ptr+4>>2]=type};this.get_type=function(){return HEAPU32[this.ptr+4>>2]};this.set_destructor=function(destructor){HEAPU32[this.ptr+8>>2]=destructor};this.get_destructor=function(){return HEAPU32[this.ptr+8>>2]};this.set_caught=function(caught){caught=caught?1:0;HEAP8[this.ptr+12>>0]=caught};this.get_caught=function(){return HEAP8[this.ptr+12>>0]!=0};this.set_rethrown=function(rethrown){rethrown=rethrown?1:0;HEAP8[this.ptr+13>>0]=rethrown};this.get_rethrown=function(){return HEAP8[this.ptr+13>>0]!=0};this.init=function(type,destructor){this.set_adjusted_ptr(0);this.set_type(type);this.set_destructor(destructor)};this.set_adjusted_ptr=function(adjustedPtr){HEAPU32[this.ptr+16>>2]=adjustedPtr};this.get_adjusted_ptr=function(){return HEAPU32[this.ptr+16>>2]};this.get_exception_ptr=function(){var isPointer=___cxa_is_pointer_type(this.get_type());if(isPointer){return HEAPU32[this.excPtr>>2]}var adjusted=this.get_adjusted_ptr();if(adjusted!==0)return adjusted;return this.excPtr}}var exceptionLast=0;var uncaughtExceptionCount=0;function ___cxa_throw(ptr,type,destructor){var info=new ExceptionInfo(ptr);info.init(type,destructor);exceptionLast=ptr;uncaughtExceptionCount++;throw exceptionLast}var _abort=()=>{abort("")};var _emscripten_memcpy_big=(dest,src,num)=>HEAPU8.copyWithin(dest,src,src+num);var getHeapMax=()=>2147483648;var growMemory=size=>{var b=wasmMemory.buffer;var pages=size-b.byteLength+65535>>>16;try{wasmMemory.grow(pages);updateMemoryViews();return 1}catch(e){}};var _emscripten_resize_heap=requestedSize=>{var oldSize=HEAPU8.length;requestedSize>>>=0;var maxHeapSize=getHeapMax();if(requestedSize>maxHeapSize){return false}var alignUp=(x,multiple)=>x+(multiple-x%multiple)%multiple;for(var cutDown=1;cutDown<=4;cutDown*=2){var overGrownHeapSize=oldSize*(1+.2/cutDown);overGrownHeapSize=Math.min(overGrownHeapSize,requestedSize+100663296);var newSize=Math.min(maxHeapSize,alignUp(Math.max(requestedSize,overGrownHeapSize),65536));var replacement=growMemory(newSize);if(replacement){return true}}return false};var printCharBuffers=[null,[],[]];var UTF8Decoder=typeof TextDecoder!="undefined"?new TextDecoder("utf8"):undefined;var UTF8ArrayToString=(heapOrArray,idx,maxBytesToRead)=>{var endIdx=idx+maxBytesToRead;var endPtr=idx;while(heapOrArray[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&heapOrArray.buffer&&UTF8Decoder){return UTF8Decoder.decode(heapOrArray.subarray(idx,endPtr))}var str="";while(idx<endPtr){var u0=heapOrArray[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heapOrArray[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heapOrArray[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|heapOrArray[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}return str};var printChar=(stream,curr)=>{var buffer=printCharBuffers[stream];if(curr===0||curr===10){(stream===1?out:err)(UTF8ArrayToString(buffer,0));buffer.length=0}else{buffer.push(curr)}};var UTF8ToString=(ptr,maxBytesToRead)=>ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):"";var SYSCALLS={varargs:undefined,get(){SYSCALLS.varargs+=4;var ret=HEAP32[SYSCALLS.varargs-4>>2];return ret},getStr(ptr){var ret=UTF8ToString(ptr);return ret}};var _fd_write=(fd,iov,iovcnt,pnum)=>{var num=0;for(var i=0;i<iovcnt;i++){var ptr=HEAPU32[iov>>2];var len=HEAPU32[iov+4>>2];iov+=8;for(var j=0;j<len;j++){printChar(fd,HEAPU8[ptr+j])}num+=len}HEAPU32[pnum>>2]=num;return 0};var _proc_exit=code=>{EXITSTATUS=code;if(!keepRuntimeAlive()){if(Module["onExit"])Module["onExit"](code);ABORT=true}quit_(code,new ExitStatus(code))};var exitJS=(status,implicit)=>{EXITSTATUS=status;_proc_exit(status)};var handleException=e=>{if(e instanceof ExitStatus||e=="unwind"){return EXITSTATUS}quit_(1,e)};var lengthBytesUTF8=str=>{var len=0;for(var i=0;i<str.length;++i){var c=str.charCodeAt(i);if(c<=127){len++}else if(c<=2047){len+=2}else if(c>=55296&&c<=57343){len+=4;++i}else{len+=3}}return len};var stringToUTF8Array=(str,heap,outIdx,maxBytesToWrite)=>{if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343){var u1=str.charCodeAt(++i);u=65536+((u&1023)<<10)|u1&1023}if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}}heap[outIdx]=0;return outIdx-startIdx};var stringToUTF8=(str,outPtr,maxBytesToWrite)=>stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite);var stringToUTF8OnStack=str=>{var size=lengthBytesUTF8(str)+1;var ret=stackAlloc(size);stringToUTF8(str,ret,size);return ret};var wasmImports={b:___cxa_throw,d:_abort,e:_emscripten_memcpy_big,c:_emscripten_resize_heap,a:_fd_write};var asm=createWasm();var ___wasm_call_ctors=function(){return(___wasm_call_ctors=Module["asm"]["g"]).apply(null,arguments)};var _allocation=Module["_allocation"]=function(){return(_allocation=Module["_allocation"]=Module["asm"]["i"]).apply(null,arguments)};var _getMatrixBufferPtr=Module["_getMatrixBufferPtr"]=function(){return(_getMatrixBufferPtr=Module["_getMatrixBufferPtr"]=Module["asm"]["j"]).apply(null,arguments)};var _getSRTPtr=Module["_getSRTPtr"]=function(){return(_getSRTPtr=Module["_getSRTPtr"]=Module["asm"]["k"]).apply(null,arguments)};var _getInfoPtr=Module["_getInfoPtr"]=function(){return(_getInfoPtr=Module["_getInfoPtr"]=Module["asm"]["l"]).apply(null,arguments)};var _getContinuedSRTPtr=Module["_getContinuedSRTPtr"]=function(){return(_getContinuedSRTPtr=Module["_getContinuedSRTPtr"]=Module["asm"]["m"]).apply(null,arguments)};var _printMatrix=Module["_printMatrix"]=function(){return(_printMatrix=Module["_printMatrix"]=Module["asm"]["n"]).apply(null,arguments)};var _updateAllMatrixContinueTransform=Module["_updateAllMatrixContinueTransform"]=function(){return(_updateAllMatrixContinueTransform=Module["_updateAllMatrixContinueTransform"]=Module["asm"]["o"]).apply(null,arguments)};var _main=Module["_main"]=function(){return(_main=Module["_main"]=Module["asm"]["p"]).apply(null,arguments)};var ___errno_location=function(){return(___errno_location=Module["asm"]["__errno_location"]).apply(null,arguments)};var stackAlloc=function(){return(stackAlloc=Module["asm"]["q"]).apply(null,arguments)};var ___cxa_is_pointer_type=function(){return(___cxa_is_pointer_type=Module["asm"]["r"]).apply(null,arguments)};var calledRun;dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function callMain(args=[]){var entryFunction=_main;args.unshift(thisProgram);var argc=args.length;var argv=stackAlloc((argc+1)*4);var argv_ptr=argv>>2;args.forEach((arg=>{HEAP32[argv_ptr++]=stringToUTF8OnStack(arg)}));HEAP32[argv_ptr]=0;try{var ret=entryFunction(argc,argv);exitJS(ret,true);return ret}catch(e){return handleException(e)}}function run(args=arguments_){if(runDependencies>0){return}preRun();if(runDependencies>0){return}function doRun(){if(calledRun)return;calledRun=true;Module["calledRun"]=true;if(ABORT)return;initRuntime();preMain();if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();if(shouldRunNow)callMain(args);postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout((function(){setTimeout((function(){Module["setStatus"]("")}),1);doRun()}),1)}else{doRun()}}if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}var shouldRunNow=true;if(Module["noInitialRun"])shouldRunNow=false;run();

if (!Module['ENVIRONMENT_IS_PTHREAD']) {
    // console.log("is main");
    window['wasmMatrix'] = Module;
}
        `,Ie=class Ie{static async init(t){await new Promise(e=>{const r=document.createElement("script");r.async=!0,r.type="text/javascript",r.src=URL.createObjectURL(new Blob([vn])),document.head.appendChild(r),r.onload=()=>{let i=()=>{this.wasm=window.wasmMatrix,this.wasm&&this.wasm.calledRun?e(!0):setTimeout(i,20)};i()}}),this.allocMatrix(t)}static allocMatrix(t){t>V.maxCount&&console.error(`The maximum allocation size is exceeded! current:${t}, limit:${V.maxCount}`),this.wasm._allocation(t),this.matrixBufferPtr=this.wasm._getMatrixBufferPtr(),this.matrixSRTBufferPtr=this.wasm._getSRTPtr(),this.matrixStateBufferPtr=this.wasm._getInfoPtr(),this.matrixContinuedSRTBufferPtr=this.wasm._getContinuedSRTPtr(),this.matrixBuffer=new Float32Array(this.wasm.HEAPF32.buffer,this.matrixBufferPtr,16*t),this.matrixSRTBuffer=new Float32Array(this.wasm.HEAPF32.buffer,this.matrixSRTBufferPtr,3*3*t),this.matrixContinuedSRTBuffer=new Float32Array(this.wasm.HEAPF32.buffer,this.matrixContinuedSRTBufferPtr,3*3*t),this.matrixStateBuffer=new Int32Array(this.wasm.HEAP32.buffer,this.matrixStateBufferPtr,Ie.stateStruct*t),V.allocMatrix(t)}static updateAllContinueTransform(t,e,r){this.wasm._updateAllMatrixContinueTransform(t,e,r)}static setParent(t,e,r){this.matrixStateBuffer[t*Ie.stateStruct+2]=e>=0?e:-1,this.matrixStateBuffer[t*Ie.stateStruct+3]=r}static setTranslate(t,e,r,i){this.matrixSRTBuffer[t*9+6]=e,this.matrixSRTBuffer[t*9+7]=r,this.matrixSRTBuffer[t*9+8]=i}static setRotation(t,e,r,i){this.matrixSRTBuffer[t*9+3]=e%360,this.matrixSRTBuffer[t*9+4]=r%360,this.matrixSRTBuffer[t*9+5]=i%360}static setScale(t,e,r,i){this.matrixSRTBuffer[t*9+0]=e,this.matrixSRTBuffer[t*9+1]=r,this.matrixSRTBuffer[t*9+2]=i}static setContinueTranslate(t,e,r,i){(e!=0||r!=0||i!=0)&&(this.matrixContinuedSRTBuffer[t*9+6]=e,this.matrixContinuedSRTBuffer[t*9+7]=r,this.matrixContinuedSRTBuffer[t*9+8]=i,this.matrixStateBuffer[t*Ie.stateStruct+1]=1)}static setContinueRotation(t,e,r,i){(e!=0||r!=0||i!=0)&&(this.matrixContinuedSRTBuffer[t*9+3]=e,this.matrixContinuedSRTBuffer[t*9+4]=r,this.matrixContinuedSRTBuffer[t*9+5]=i,this.matrixStateBuffer[t*Ie.stateStruct+1]=1)}static setContinueScale(t,e,r,i){(e!=0||r!=0||i!=0)&&(this.matrixContinuedSRTBuffer[t*9+0]=e,this.matrixContinuedSRTBuffer[t*9+1]=r,this.matrixContinuedSRTBuffer[t*9+2]=i,this.matrixStateBuffer[t*Ie.stateStruct+1]=1)}};s(Ie,"matrixBuffer"),s(Ie,"matrixSRTBuffer"),s(Ie,"matrixContinuedSRTBuffer"),s(Ie,"matrixStateBuffer"),s(Ie,"matrixBufferPtr"),s(Ie,"matrixSRTBufferPtr"),s(Ie,"matrixContinuedSRTBufferPtr"),s(Ie,"matrixStateBufferPtr"),s(Ie,"wasm"),s(Ie,"stateStruct",4);let $=Ie;class Bt{}s(Bt,"AXIS_ANGLE","axisAngle"),s(Bt,"EULER_ANGLES","eulerAngles"),s(Bt,"QUATERNION","quaternion");const pe=class pe{constructor(t=0,e=0,r=0,i=1){s(this,"x",0);s(this,"y",0);s(this,"z",0);s(this,"w",1);this.x=t,this.y=e,this.z=r,this.w=i}static identity(){return pe._zero}static quaternionToMatrix(t,e){let r=t.x*2,i=t.y*2,a=t.z*2,o=t.x*r,l=t.y*i,h=t.z*a,u=t.x*i,c=t.x*a,d=t.y*a,f=t.w*r,p=t.w*i,A=t.w*a;e.rawData[0]=1-(l+h),e.rawData[1]=u+A,e.rawData[2]=c-p,e.rawData[3]=0,e.rawData[4]=u-A,e.rawData[5]=1-(o+h),e.rawData[6]=d+f,e.rawData[7]=0,e.rawData[8]=c+p,e.rawData[9]=d-f,e.rawData[10]=1-(o+l),e.rawData[11]=0,e.rawData[12]=0,e.rawData[13]=0,e.rawData[14]=0,e.rawData[15]=1}get magnitude(){return Math.sqrt(this.w*this.w+this.x*this.x+this.y*this.y+this.z*this.z)}set(t=0,e=0,r=0,i=1){this.x=t,this.y=e,this.z=r,this.w=i}divide(t){return t instanceof pe?new pe(this.x/t.x,this.y/t.y,this.z/t.z):(this.x=this.x/t,this.y=this.y/t,this.z=this.z/t,this)}setFromArray(t){return this.x=t[0],this.y=t[1],this.z=t[2],this.w=t[3],this}multiply(t,e){var r=t.w,i=t.x,a=t.y,o=t.z,l=e.w,h=e.x,u=e.y,c=e.z;this.w=r*l-i*h-a*u-o*c,this.x=r*h+i*l+a*c-o*u,this.y=r*u-i*c+a*l+o*h,this.z=r*c+i*u-a*h+o*l}multiplyVector(t,e=null){e||(e=new pe);var r=t.x,i=t.y,a=t.z;return e.w=-this.x*r-this.y*i-this.z*a,e.x=this.w*r+this.y*a-this.z*i,e.y=this.w*i-this.x*a+this.z*r,e.z=this.w*a+this.x*i-this.y*r,e}fromAxisAngle(t,e){e*=Math.PI/180;var r=e*.5,i=Math.sin(r);this.w=Math.cos(r),this.x=t.x*i,this.y=t.y*i,this.z=t.z*i,this.normalize()}toAxisAngle(t){var e=this.x*this.x+this.y*this.y+this.z*this.z,r=0;return e>0?(r=2*Math.acos(this.w),e=1/Math.sqrt(e),t.x=this.x*e,t.y=this.y*e,t.z=this.z*e):(r=0,t.x=1,t.y=0,t.z=0),r}slerp(t,e,r){var i=t.w,a=t.x,o=t.y,l=t.z,h=e.w,u=e.x,c=e.y,d=e.z,f=i*h+a*u+o*c+l*d;if(f<0&&(f=-f,h=-h,u=-u,c=-c,d=-d),f<.95){var p=Math.acos(f),A=1/Math.sin(p),x=Math.sin(p*(1-r))*A,C=Math.sin(p*r)*A;this.w=i*x+h*C,this.x=a*x+u*C,this.y=o*x+c*C,this.z=l*x+d*C}else{this.w=i+r*(h-i),this.x=a+r*(u-a),this.y=o+r*(c-o),this.z=l+r*(d-l);var v=1/Math.sqrt(this.w*this.w+this.x*this.x+this.y*this.y+this.z*this.z);this.w*=v,this.x*=v,this.y*=v,this.z*=v}}lerp(t,e,r){var i=t.w,a=t.x,o=t.y,l=t.z,h=e.w,u=e.x,c=e.y,d=e.z,f;i*h+a*u+o*c+l*d<0&&(h=-h,u=-u,c=-c,d=-d),this.w=i+r*(h-i),this.x=a+r*(u-a),this.y=o+r*(c-o),this.z=l+r*(d-l),f=1/Math.sqrt(this.w*this.w+this.x*this.x+this.y*this.y+this.z*this.z),this.w*=f,this.x*=f,this.y*=f,this.z*=f}fromEulerAngles(t,e,r){t*=oe,e*=oe,r*=oe;var i=t*.5,a=e*.5,o=r*.5,l=Math.cos(i),h=Math.sin(i),u=Math.cos(a),c=Math.sin(a),d=Math.cos(o),f=Math.sin(o);return this.w=l*u*d+h*c*f,this.x=h*u*d-l*c*f,this.y=l*c*d+h*u*f,this.z=l*u*f-h*c*d,this}setFromRotationMatrix(t){const e=t.rawData,r=e[0],i=e[4],a=e[8],o=e[1],l=e[5],h=e[9],u=e[2],c=e[6],d=e[10],f=r+l+d;if(f>0){const p=.5/Math.sqrt(f+1);this.w=.25/p,this.x=(c-h)*p,this.y=(a-u)*p,this.z=(o-i)*p}else if(r>l&&r>d){const p=2*Math.sqrt(1+r-l-d);this.w=(c-h)/p,this.x=.25*p,this.y=(i+o)/p,this.z=(a+u)/p}else if(l>d){const p=2*Math.sqrt(1+l-r-d);this.w=(a-u)/p,this.x=(i+o)/p,this.y=.25*p,this.z=(h+c)/p}else{const p=2*Math.sqrt(1+d-r-l);this.w=(o-i)/p,this.x=(a+u)/p,this.y=(h+c)/p,this.z=.25*p}return this}getEulerAngles(t){var e,r,i,a,o,l,h,u;return t||(t=new g),a=this.x,o=this.y,l=this.z,h=this.w,u=2*(h*o-a*l),u<=-.99999?(e=2*Math.atan2(a,h),r=-Math.PI/2,i=0):u>=.99999?(e=2*Math.atan2(a,h),r=Math.PI/2,i=0):(e=Math.atan2(2*(h*a+o*l),1-2*(a*a+o*o)),r=Math.asin(u),i=Math.atan2(2*(h*l+a*o),1-2*(o*o+l*l))),t.set(e,r,i).scaleBy(hi)}normalize(t=1){var e=t/Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);this.x*=e,this.y*=e,this.z*=e,this.w*=e}toString(){return"{x:"+this.x+" y:"+this.y+" z:"+this.z+" w:"+this.w+"}"}fromMatrix(t){var e=t.decompose(Bt.QUATERNION)[1];this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w}inverse(t=null){t||(t=new pe);var e=this.w*this.w+this.x*this.x+this.y*this.y+this.z*this.z;if(e>0){var r=1/e;t.w=this.w*r,t.x=-this.x*r,t.y=-this.y*r,t.z=-this.z*r}return t}clone(){return new pe(this.x,this.y,this.z,this.w)}transformVector(t,e=null){var r,i,a,o,l=t.x,h=t.y,u=t.z;return e||(e=new g),o=-this.x*l-this.y*h-this.z*u,r=this.w*l+this.y*u-this.z*h,i=this.w*h-this.x*u+this.z*l,a=this.w*u+this.x*h-this.y*l,e.x=-o*this.x+r*this.w-i*this.z+a*this.y,e.y=-o*this.y+r*this.z+i*this.w-a*this.x,e.z=-o*this.z-r*this.y+i*this.x+a*this.w,e}copyFrom(t){var e=this;return e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,this}mul(t,e,r){let i=r||new pe;return i.x=t.w*e.x+t.x*e.w+t.y*e.z-t.z*e.y,i.y=t.w*e.y+t.y*e.w+t.z*e.x-t.x*e.z,i.z=t.w*e.z+t.z*e.w+t.x*e.y-t.y*e.x,i.w=t.w*e.w-t.x*e.x-t.y*e.y-t.z*e.z,i}clampf(t,e,r){if(e>r){var i=e;e=r,r=i}return t<e?e:t<r?t:r}static serialize(t){return new pe(t.x,t.y,t.z,t.w)}};s(pe,"HELP_0",new pe(0,0,0,1)),s(pe,"HELP_1",new pe(0,0,0,1)),s(pe,"HELP_2",new pe(0,0,0,1)),s(pe,"_zero",new pe(0,0,0,1)),s(pe,"CALCULATION_QUATERNION",new pe);let X=pe,hi=180/Math.PI,oe=Math.PI/180;function pt(n,t,e){return Math.max(t,Math.min(e,n))}class it{static gaussFunction(t,e,r,i){let a=Math.pow(t-r,2),o=2*Math.pow(i,2),l=-1*(a/o),h=Math.pow(Math.E,l);return Math.round(h*e)}static computeGaussian(t,e){return 1/Math.sqrt(2*Math.PI*e)*Math.exp(-(t*t)/(2*e*e))}static gaussCoef(t){t<.5&&(t=.5);let e=Math.exp(.726*.726)/t,r=Math.exp(-e),i=Math.exp(-2*e),a=(1-r)*(1-r)/(1+2*e*r-i),o=a,l=a*(e-1)*r,h=a*(e+1)*r,u=-a*i,c=2*r,d=-i,f=(o+l)/(1-c-d),p=(h+u)/(1-c-d);return new Float32Array([o,l,h,u,c,d,f,p])}static clampf(t,e,r){if(e>r){let i=e;e=r,r=i}return t<e?e:t<r?t:r}static normalizeAngle(t){for(;t>180;)t-=360;for(;t<-180;)t+=360;return t}static fract(t){return t-Math.floor(t)}static getRandDirXZ(t){let e=t*Math.random(),r=360*Math.random()*oe,i=Math.cos(r)*e,a=Math.sin(r)*e;return{x:i,z:a}}static getRandDirXYZ(t){let e=t*Math.random(),r=360*Math.random()*oe,i=Math.cos(r)*e,a=Math.tan(r)*e,o=Math.sin(r)*e;return new g(i,a,o)}static getCycleXYZ(t){let e=t*Math.random(),r=360*Math.random()*oe,i=Math.cos(r)*e,a=t*Math.random()-t*.5,o=Math.sin(r)*e;return new g(i,a,o)}static angle(t,e){let r=Ae.HELP_0,i=Ae.HELP_1;return r.set(t.x,t.z),i.set(e.x,e.z),Math.acos((r.x*i.x+r.y*i.y)/(r.abs()*i.abs()))}static angle_360(t,e){let r=g.HELP_0;return t.crossProduct(e,r),r.z>0?it.angle(t,e):360-it.angle(t,e)}getRotationY(t){return it.normalizeAngle(Math.atan2(t.z,t.x)*hi)}static fromToRotation(t,e,r=null){r||(r=new X);let i=V.help_matrix_2;return V.fromToRotation(t,e,i),r.fromMatrix(i),r}static getEularDir_yUp(t){let e=X.HELP_0;return e.fromEulerAngles(0,t,0),e.transformVector(g.Z_AXIS,g.HELP_5),g.HELP_5}static transformVector(t,e,r=null){r||(r=new g);let i=t.rawData,a=i[0],o=i[1],l=i[2],h=i[3],u=i[4],c=i[5],d=i[6],f=i[7],p=i[8],A=i[9],x=i[10],C=i[11],v=i[12],_=i[13],S=i[14],B=i[15],M=e.x,D=e.y,N=e.z;return r.x=a*M+u*D+p*N+v,r.y=o*M+c*D+A*N+_,r.z=l*M+d*D+x*N+S,r.w=h*M+f*D+C*N+B,r}}let ts=function(n,t,e){let r=e-t;return Math.floor(n/r)%2==0?n%r+t:e-n%r+t},rs=function(n,t,e){let r=e-t;return n%r+t};function sa(n,t){return n instanceof g&&t instanceof g||n instanceof X&&t instanceof X?n.x*t.x+n.y*t.y+n.z*t.z:n.x*t.x+n.y*t.y}function xn(n){return sa(n,n)}function Cn(n,t){return n-Math.floor(n/t)*t}const yn=1e-6,E=class E{constructor(t=!1){s(this,"index",0);s(this,"offset",0);s(this,"rawData");s(this,"_position");if(E.useCount>=E.allocCount){let e=E.allocCount+E.allocOnceCount;$.allocMatrix(e)}this.index=E.useCount,this.offset=E.wasmMatrixPtr+this.index*E.blockBytes,E.dynamicGlobalMatrixRef[this.index]=this,E.useCount++,this.rawData=new Float32Array(E.dynamicMatrixBytes.buffer,this.offset,16),this._position=new g,this.identity()}static allocMatrix(t){this.allocCount=t,E.dynamicMatrixBytes=$.matrixBuffer,E.buffer=E.dynamicMatrixBytes.buffer,E.wasmMatrixPtr=$.matrixBufferPtr,this.dynamicGlobalMatrixRef||(this.dynamicGlobalMatrixRef=[]),this.dynamicGlobalMatrixRef.forEach(e=>{e.offset=E.wasmMatrixPtr+e.index*E.blockBytes,e.rawData=new Float32Array(E.dynamicMatrixBytes.buffer,e.offset,16)}),E.help_matrix_0||(E.help_matrix_0=new E),E.help_matrix_1||(E.help_matrix_1=new E),E.help_matrix_2||(E.help_matrix_2=new E),E.helpMatrix||(E.helpMatrix=new E),E.helpMatrix2||(E.helpMatrix2=new E),E._getEulerMatrix||(E._getEulerMatrix=new E),E._getEulerMatrix.identity()}static fromToRotation(t,e,r){return r||(r=new E),r.transformDir(t,e),r}static getAxisRotation(t,e,r,i){let a=new E,o=i*(Math.PI/180),l=Math.cos(o),h=Math.sin(o),u=1-l,c,d;return a.rawData[0]=l+t*t*u,a.rawData[5]=l+e*e*u,a.rawData[10]=l+r*r*u,c=t*e*u,d=r*h,a.rawData[1]=c+d,a.rawData[4]=c-d,c=t*r*u,d=e*h,a.rawData[8]=c+d,a.rawData[2]=c-d,c=e*r*u,d=t*h,a.rawData[9]=c-d,a.rawData[6]=c+d,a}static sanitizeEuler(t){E.makePositive(t)}static makePositive(t){let e=-1e-4,r=Math.PI*2-1e-4;t.x<e?t.x+=2*Math.PI:t.x>r&&(t.x-=2*Math.PI),t.y<e?t.y+=2*Math.PI:t.y>r&&(t.y-=2*Math.PI),t.z<e?t.z+=2*Math.PI:t.z>r&&(t.z-=2*Math.PI)}static matrixToEuler(t,e){return t.get(1,2)<.999?t.get(1,2)>-.999?(e.x=Math.asin(-t.get(1,2)),e.y=Math.atan2(t.get(0,2),t.get(2,2)),e.z=Math.atan2(t.get(1,0),t.get(1,1)),E.sanitizeEuler(e),!0):(e.x=Math.PI*.5,e.y=Math.atan2(t.get(0,1),t.get(0,0)),e.z=0,E.sanitizeEuler(e),!1):(e.x=-Math.PI*.5,e.y=Math.atan2(-t.get(0,1),t.get(0,0)),e.z=0,E.sanitizeEuler(e),!1)}static matrixMultiply(t,e,r){E.wasm.Matrix_Multiply(t.index,e.index,r.index)}static matrixAppend(t,e,r){E.wasm.Matrix_Append(t.index,e.index,r.index)}static matrixRotateY(t,e){E.wasm.Matrix_Append(t,e.index)}static matrixRotate(t,e,r){E.wasm.Matrix_Rotate(t,e,r.index)}lookAt(t,e,r=g.Y_AXIS){let i=this.rawData,a=e.subtract(t,g.HELP_0);a.length<1e-4&&(a.z=1),a.normalize();let o=r.crossProduct(a,g.HELP_1);o.length<1e-4&&(Math.abs(r.z)>.9999?a.x+=1e-4:a.z+=1e-4,a.normalize()),o=r.crossProduct(a,o).normalize();let l=a.crossProduct(o,g.HELP_2).normalize();i[0]=o.x,i[1]=l.x,i[2]=a.x,i[3]=0,i[4]=o.y,i[5]=l.y,i[6]=a.y,i[7]=0,i[8]=o.z,i[9]=l.z,i[10]=a.z,i[11]=0,i[12]=-o.dotProduct(t),i[13]=-l.dotProduct(t),i[14]=-a.dotProduct(t),i[15]=1}multiply(t){let e=this.rawData,r=t.rawData,i=E.float32Array;i[0]=e[0]*r[0]+e[1]*r[4]+e[2]*r[8]+e[3]*r[12],i[1]=e[0]*r[1]+e[1]*r[5]+e[2]*r[9]+e[3]*r[13],i[2]=e[0]*r[2]+e[1]*r[6]+e[2]*r[10]+e[3]*r[14],i[3]=e[0]*r[3]+e[1]*r[7]+e[2]*r[11]+e[3]*r[15],i[4]=e[4]*r[0]+e[5]*r[4]+e[6]*r[8]+e[7]*r[12],i[5]=e[4]*r[1]+e[5]*r[5]+e[6]*r[9]+e[7]*r[13],i[6]=e[4]*r[2]+e[5]*r[6]+e[6]*r[10]+e[7]*r[14],i[7]=e[4]*r[3]+e[5]*r[7]+e[6]*r[11]+e[7]*r[15],i[8]=e[8]*r[0]+e[9]*r[4]+e[10]*r[8]+e[11]*r[12],i[9]=e[8]*r[1]+e[9]*r[5]+e[10]*r[9]+e[11]*r[13],i[10]=e[8]*r[2]+e[9]*r[6]+e[10]*r[10]+e[11]*r[14],i[11]=e[8]*r[3]+e[9]*r[7]+e[10]*r[11]+e[11]*r[15],i[12]=e[12]*r[0]+e[13]*r[4]+e[14]*r[8]+e[15]*r[12],i[13]=e[12]*r[1]+e[13]*r[5]+e[14]*r[9]+e[15]*r[13],i[14]=e[12]*r[2]+e[13]*r[6]+e[14]*r[10]+e[15]*r[14],i[15]=e[12]*r[3]+e[13]*r[7]+e[14]*r[11]+e[15]*r[15],e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15]}multiplyMatrices(t,e){const r=t.rawData,i=e.rawData,a=this.rawData,o=r[0],l=r[4],h=r[8],u=r[12],c=r[1],d=r[5],f=r[9],p=r[13],A=r[2],x=r[6],C=r[10],v=r[14],_=r[3],S=r[7],B=r[11],M=r[15],D=i[0],N=i[4],Q=i[8],U=i[12],le=i[1],he=i[5],me=i[9],ce=i[13],re=i[2],_e=i[6],de=i[10],Ve=i[14],$e=i[3],Xe=i[7],ht=i[11],ve=i[15];return a[0]=o*D+l*le+h*re+u*$e,a[4]=o*N+l*he+h*_e+u*Xe,a[8]=o*Q+l*me+h*de+u*ht,a[12]=o*U+l*ce+h*Ve+u*ve,a[1]=c*D+d*le+f*re+p*$e,a[5]=c*N+d*he+f*_e+p*Xe,a[9]=c*Q+d*me+f*de+p*ht,a[13]=c*U+d*ce+f*Ve+p*ve,a[2]=A*D+x*le+C*re+v*$e,a[6]=A*N+x*he+C*_e+v*Xe,a[10]=A*Q+x*me+C*de+v*ht,a[14]=A*U+x*ce+C*Ve+v*ve,a[3]=_*D+S*le+B*re+M*$e,a[7]=_*N+S*he+B*_e+M*Xe,a[11]=_*Q+S*me+B*de+M*ht,a[15]=_*U+S*ce+B*Ve+M*ve,this}multiplyPoint3(t,e){e||(e=new g);let r=this.rawData;return e.x=r[0]*t.x+r[4]*t.y+r[8]*t.z+r[12],e.y=r[1]*t.x+r[5]*t.y+r[9]*t.z+r[13],e.z=r[2]*t.x+r[6]*t.y+r[10]*t.z+r[14],e}multiplyVector4(t,e){e||(e=new g);let r=this.rawData,i=t.x,a=t.y,o=t.z,l=r[3]*i+r[7]*a+r[11]*o+r[15];return l=l||1,e.x=(r[0]*i+r[4]*a+r[8]*o+r[12])/l,e.y=(r[1]*i+r[5]*a+r[9]*o+r[13])/l,e.z=(r[2]*i+r[6]*a+r[10]*o+r[14])/l,e.w=1,e}transformVector4(t,e){let r=this.rawData;e||(e=new g);let i=t.x,a=t.y,o=t.z,l=t.w;return e.x=i*r[0]+a*r[4]+o*r[8]+l*r[12],e.y=i*r[1]+a*r[5]+o*r[9]+l*r[13],e.z=i*r[2]+a*r[6]+o*r[10]+l*r[14],e.w=i*r[3]+a*r[7]+o*r[11]+l*r[15],e}perspectiveMultiplyPoint3(t,e){let r=g.HELP_2,i,a=this.rawData;if(r.x=a[0]*t.x+a[4]*t.y+a[8]*t.z+a[12],r.y=a[1]*t.x+a[5]*t.y+a[9]*t.z+a[13],r.z=a[2]*t.x+a[6]*t.y+a[10]*t.z+a[14],i=a[3]*t.x+a[7]*t.y+a[11]*t.z+a[15],Math.abs(i)>1e-7){let o=1/i;return e.x=r.x*o,e.y=r.y*o,e.z=r.z*o,!0}else return e.x=0,e.y=0,e.z=0,!1}perspective(t,e,r,i){let a=this.rawData,o=t*oe/2,l=Math.cos(o)/Math.sin(o);a[0]=-l/e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=l,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=i/(i-r),a[11]=1,a[12]=0,a[13]=0,a[14]=-r*i/(i-r),a[15]=0}perspective3(t,e,r,i){var a=Math.tan(t*Math.PI/360)*r,o=a*e;this.frustum(-o,o,-a,a,r,i)}frustum(t,e,r,i,a,o){var l=this.rawData;l[0]=-2*a/(e-t),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*a/(i-r),l[6]=0,l[7]=0,l[8]=(e+t)/(e-t),l[9]=(i+r)/(i-r),l[10]=o/(o-a),l[11]=1,l[12]=0,l[13]=0,l[14]=-o*a/(o-a),l[15]=0}ortho(t,e,r,i){let a=this.rawData;return a[0]=2/t,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2/e,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1/(i-r),a[11]=0,a[12]=0,a[13]=0,a[14]=r/(r-i),a[15]=1,this}orthoZO(t,e,r,i,a,o){let l=this.rawData,h=1/(t-e),u=1/(r-i),c=1/(a-o);return l[0]=-2*h,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=-2*u,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=c,l[11]=0,l[12]=(t+e)*h,l[13]=(i+r)*u,l[14]=a*c,l[15]=1,this}orthoOffCenter(t,e,r,i,a,o){let l=this.rawData;l[0]=2/(e-t),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2/(i-r),l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1/(o-a),l[11]=0,l[12]=(t+e)/(t-e),l[13]=(i+r)/(r-i),l[14]=a/(a-o),l[15]=1}transformDir(t,e){let r=this.rawData,i=1e-6,a=g.ZERO;e.crossProduct(t,a);let o=e.dotProduct(t);if(o>1-i)this.identity();else{let l,h,u,c,d,f=a.dotProduct(a),p=(1-o)/f;l=p*a.x,h=p*a.z,u=l*a.y,c=l*a.z,d=h*a.y,r[0]=o+l*a.x,r[1]=u-a.z,r[2]=c+a.y,r[4]=u+a.z,r[5]=o+p*a.y*a.y,r[6]=d-a.x,r[8]=c-a.y,r[9]=d+a.x,r[10]=o+h*a.z,r[3]=0,r[7]=0,r[11]=0,r[15]=1}}append(t){let e=this.rawData,r=e[0],i=e[4],a=e[8],o=e[12],l=e[1],h=e[5],u=e[9],c=e[13],d=e[2],f=e[6],p=e[10],A=e[14],x=e[3],C=e[7],v=e[11],_=e[15];e[0]=r*t.rawData[0]+l*t.rawData[4]+d*t.rawData[8]+x*t.rawData[12],e[1]=r*t.rawData[1]+l*t.rawData[5]+d*t.rawData[9]+x*t.rawData[13],e[2]=r*t.rawData[2]+l*t.rawData[6]+d*t.rawData[10]+x*t.rawData[14],e[3]=r*t.rawData[3]+l*t.rawData[7]+d*t.rawData[11]+x*t.rawData[15],e[4]=i*t.rawData[0]+h*t.rawData[4]+f*t.rawData[8]+C*t.rawData[12],e[5]=i*t.rawData[1]+h*t.rawData[5]+f*t.rawData[9]+C*t.rawData[13],e[6]=i*t.rawData[2]+h*t.rawData[6]+f*t.rawData[10]+C*t.rawData[14],e[7]=i*t.rawData[3]+h*t.rawData[7]+f*t.rawData[11]+C*t.rawData[15],e[8]=a*t.rawData[0]+u*t.rawData[4]+p*t.rawData[8]+v*t.rawData[12],e[9]=a*t.rawData[1]+u*t.rawData[5]+p*t.rawData[9]+v*t.rawData[13],e[10]=a*t.rawData[2]+u*t.rawData[6]+p*t.rawData[10]+v*t.rawData[14],e[11]=a*t.rawData[3]+u*t.rawData[7]+p*t.rawData[11]+v*t.rawData[15],e[12]=o*t.rawData[0]+c*t.rawData[4]+A*t.rawData[8]+_*t.rawData[12],e[13]=o*t.rawData[1]+c*t.rawData[5]+A*t.rawData[9]+_*t.rawData[13],e[14]=o*t.rawData[2]+c*t.rawData[6]+A*t.rawData[10]+_*t.rawData[14],e[15]=o*t.rawData[3]+c*t.rawData[7]+A*t.rawData[11]+_*t.rawData[15]}add(t){let e=this.rawData,r=e[0],i=e[4],a=e[8],o=e[12],l=e[1],h=e[5],u=e[9],c=e[13],d=e[2],f=e[6],p=e[10],A=e[14],x=e[3],C=e[7],v=e[11],_=e[15],S=t.rawData[0],B=t.rawData[4],M=t.rawData[8],D=t.rawData[12],N=t.rawData[1],Q=t.rawData[5],U=t.rawData[9],le=t.rawData[13],he=t.rawData[2],me=t.rawData[6],ce=t.rawData[10],re=t.rawData[14],_e=t.rawData[3],de=t.rawData[7],Ve=t.rawData[11],$e=t.rawData[15];return e[0]=r+S,e[1]=l+N,e[2]=d+he,e[3]=x+_e,e[4]=i+B,e[5]=h+Q,e[6]=f+me,e[7]=C+de,e[8]=a+M,e[9]=u+U,e[10]=p+ce,e[11]=v+Ve,e[12]=o+D,e[13]=c+le,e[14]=A+re,e[15]=_+$e,this}sub(t){let e=this.rawData,r=e[0],i=e[4],a=e[8],o=e[12],l=e[1],h=e[5],u=e[9],c=e[13],d=e[2],f=e[6],p=e[10],A=e[14],x=e[3],C=e[7],v=e[11],_=e[15],S=t.rawData[0],B=t.rawData[4],M=t.rawData[8],D=t.rawData[12],N=t.rawData[1],Q=t.rawData[5],U=t.rawData[9],le=t.rawData[13],he=t.rawData[2],me=t.rawData[6],ce=t.rawData[10],re=t.rawData[14],_e=t.rawData[3],de=t.rawData[7],Ve=t.rawData[11],$e=t.rawData[15];return e[0]=r-S,e[1]=l-N,e[2]=d-he,e[3]=x-_e,e[4]=i-B,e[5]=h-Q,e[6]=f-me,e[7]=C-de,e[8]=a-M,e[9]=u-U,e[10]=p-ce,e[11]=v-Ve,e[12]=o-D,e[13]=c-le,e[14]=A-re,e[15]=_-$e,this}mult(t){let e=this.rawData;return e[0]*=t,e[1]*=t,e[2]*=t,e[3]*=t,e[4]*=t,e[5]*=t,e[6]*=t,e[7]*=t,e[8]*=t,e[9]*=t,e[10]*=t,e[11]*=t,e[12]*=t,e[13]*=t,e[14]*=t,e[15]*=t,this}appendRotation(t,e){let r=E.getAxisRotation(e.x,e.y,e.z,t);this.append(r)}createByRotation(t,e){let r=E.helpMatrix,i,a,o=t*oe;return i=Math.sin(o),a=Math.cos(o),e.x==1&&(r.rawData[0]=1,r.rawData[1]=0,r.rawData[2]=0,r.rawData[3]=0,r.rawData[4]=0,r.rawData[5]=a,r.rawData[6]=i,r.rawData[7]=0,r.rawData[8]=0,r.rawData[9]=-i,r.rawData[10]=a,r.rawData[11]=0,r.rawData[12]=0,r.rawData[13]=0,r.rawData[14]=0,r.rawData[15]=1),e.y==1&&(r.rawData[0]=a,r.rawData[1]=0,r.rawData[2]=-i,r.rawData[3]=0,r.rawData[4]=0,r.rawData[5]=1,r.rawData[6]=0,r.rawData[7]=0,r.rawData[8]=i,r.rawData[9]=0,r.rawData[10]=a,r.rawData[11]=0,r.rawData[12]=0,r.rawData[13]=0,r.rawData[14]=0,r.rawData[15]=1),e.z==1&&(r.rawData[0]=a,r.rawData[1]=i,r.rawData[2]=0,r.rawData[3]=0,r.rawData[4]=-i,r.rawData[5]=a,r.rawData[6]=0,r.rawData[7]=0,r.rawData[8]=0,r.rawData[9]=0,r.rawData[10]=1,r.rawData[11]=0,r.rawData[12]=0,r.rawData[13]=0,r.rawData[14]=0,r.rawData[15]=1),this.append(r),this}appendScale(t,e,r){E.helpMatrix.createByScale(t,e,r),this.append(E.helpMatrix)}createByScale(t,e,r){let i=this.rawData;i[0]=t,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=e,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=r,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1}appendTranslation(t,e,r){let i=this.rawData;i[12]+=t,i[13]+=e,i[14]+=r}clone(){let t=new E;return t.copyFrom(this),t}copyRowFrom(t,e){let r=this.rawData;switch(t){case 0:r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=e.w;break;case 1:r[4]=e.x,r[5]=e.y,r[6]=e.z,r[7]=e.w;break;case 2:r[8]=e.x,r[9]=e.y,r[10]=e.z,r[11]=e.w;break;case 3:r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=e.w;break}}copyRowTo(t,e){let r=this.rawData;switch(t){case 0:e.x=r[0],e.y=r[1],e.z=r[2],e.w=r[3];break;case 1:e.x=r[4],e.y=r[5],e.z=r[6],e.w=r[7];break;case 2:e.x=r[8],e.y=r[9],e.z=r[10],e.w=r[11];break;case 3:e.x=r[12],e.y=r[13],e.z=r[14],e.w=r[15];break}}copyFrom(t){let e=this.rawData;return e[0]=t.rawData[0],e[1]=t.rawData[1],e[2]=t.rawData[2],e[3]=t.rawData[3],e[4]=t.rawData[4],e[5]=t.rawData[5],e[6]=t.rawData[6],e[7]=t.rawData[7],e[8]=t.rawData[8],e[9]=t.rawData[9],e[10]=t.rawData[10],e[11]=t.rawData[11],e[12]=t.rawData[12],e[13]=t.rawData[13],e[14]=t.rawData[14],e[15]=t.rawData[15],this}copyRawDataTo(t,e=0,r=!1){let i=this.rawData;t[0+e]=i[0],t[1+e]=i[1],t[2+e]=i[2],t[3+e]=i[3],t[4+e]=i[4],t[5+e]=i[5],t[6+e]=i[6],t[7+e]=i[7],t[8+e]=i[8],t[9+e]=i[9],t[10+e]=i[10],t[11+e]=i[11],t[12+e]=i[12],t[13+e]=i[13],t[14+e]=i[14],t[15+e]=i[15]}copyColFrom(t,e){let r=this.rawData;switch(t){case 0:r[0]=e.x,r[4]=e.y,r[8]=e.z,r[12]=e.w;break;case 1:r[1]=e.x,r[5]=e.y,r[9]=e.z,r[13]=e.w;break;case 2:r[2]=e.x,r[6]=e.y,r[10]=e.z,r[14]=e.w;break;case 3:r[3]=e.x,r[7]=e.y,r[11]=e.z,r[15]=e.w;break}}copyColTo(t,e){let r=this.rawData;switch(t){case 0:e.x=r[0],e.y=r[4],e.z=r[8],e.w=r[12];break;case 1:e.x=r[1],e.y=r[5],e.z=r[9],e.w=r[13];break;case 2:e.x=r[2],e.y=r[6],e.z=r[10],e.w=r[14];break;case 3:e.x=r[3],e.y=r[7],e.z=r[11],e.w=r[15];break}}copyToMatrix3D(t){t.rawData=this.rawData.slice(0)}makeRotationFromQuaternion(t){return this.compose(E._zero,t,E._one),this}decompose(t="eulerAngles",e){let r=X.CALCULATION_QUATERNION,i=e||E._prs;this.copyRawDataTo(E.decomposeRawData);let a=E.decomposeRawData,o=i[0];o.x=a[12],o.y=a[13],o.z=a[14],a[12]=0,a[13]=0,a[14]=0;let l=i[2];l.x=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]),l.y=Math.sqrt(a[4]*a[4]+a[5]*a[5]+a[6]*a[6]),l.z=Math.sqrt(a[8]*a[8]+a[9]*a[9]+a[10]*a[10]),a[0]*(a[5]*a[10]-a[6]*a[9])-a[1]*(a[4]*a[10]-a[6]*a[8])+a[2]*(a[4]*a[9]-a[5]*a[8])<0&&(l.z=-l.z),a[0]/=l.x,a[1]/=l.x,a[2]/=l.x,a[4]/=l.y,a[5]/=l.y,a[6]/=l.y,a[8]/=l.z,a[9]/=l.z,a[10]/=l.z;let h=i[1],u;switch(t){case Bt.AXIS_ANGLE:h.w=Math.acos((a[0]+a[5]+a[10]-1)/2);let c=Math.sqrt((a[6]-a[9])*(a[6]-a[9])+(a[8]-a[2])*(a[8]-a[2])+(a[1]-a[4])*(a[1]-a[4]));h.x=(a[6]-a[9])/c,h.y=(a[8]-a[2])/c,h.z=(a[1]-a[4])/c;break;case Bt.QUATERNION:u=a[0]+a[5]+a[10],u>0?(h.w=Math.sqrt(1+u)/2,h.x=(a[6]-a[9])/(4*h.w),h.y=(a[8]-a[2])/(4*h.w),h.z=(a[1]-a[4])/(4*h.w)):a[0]>a[5]&&a[0]>a[10]?(h.x=Math.sqrt(1+a[0]-a[5]-a[10])/2,h.w=(a[6]-a[9])/(4*h.x),h.y=(a[1]+a[4])/(4*h.x),h.z=(a[8]+a[2])/(4*h.x)):a[5]>a[10]?(h.y=Math.sqrt(1+a[5]-a[0]-a[10])/2,h.x=(a[1]+a[4])/(4*h.y),h.w=(a[8]-a[2])/(4*h.y),h.z=(a[6]+a[9])/(4*h.y)):(h.z=Math.sqrt(1+a[10]-a[0]-a[5])/2,h.x=(a[8]+a[2])/(4*h.z),h.y=(a[6]+a[9])/(4*h.z),h.w=(a[1]-a[4])/(4*h.z));break;case Bt.EULER_ANGLES:u=a[0]+a[5]+a[10],u>0?(r.w=Math.sqrt(1+u)/2,r.x=(a[6]-a[9])/(4*r.w),r.y=(a[8]-a[2])/(4*r.w),r.z=(a[1]-a[4])/(4*r.w)):a[0]>a[5]&&a[0]>a[10]?(r.x=Math.sqrt(1+a[0]-a[5]-a[10])/2,r.w=(a[6]-a[9])/(4*r.x),r.y=(a[1]+a[4])/(4*r.x),r.z=(a[8]+a[2])/(4*r.x)):a[5]>a[10]?(h.y=Math.sqrt(1+a[5]-a[0]-a[10])/2,r.x=(a[1]+a[4])/(4*r.y),r.w=(a[8]-a[2])/(4*r.y),r.z=(a[6]+a[9])/(4*r.y)):(r.z=Math.sqrt(1+a[10]-a[0]-a[5])/2,r.x=(a[8]+a[2])/(4*r.z),r.y=(a[6]+a[9])/(4*r.z),r.w=(a[1]-a[4])/(4*r.z)),r.getEulerAngles(h);break}return i[0]=o,i[1]=h,i[2]=l,i}static getEuler(t,e,r=!0,i){return t||(t=new g),E._getEulerMatrix.makeRotationFromQuaternion(e).makeEuler(t,r,i),t}compose(t,e,r){const i=this.rawData,a=e.x,o=e.y,l=e.z,h=e.w,u=a+a,c=o+o,d=l+l,f=a*u,p=a*c,A=a*d,x=o*c,C=o*d,v=l*d,_=h*u,S=h*c,B=h*d,M=r.x,D=r.y,N=r.z;return i[0]=(1-(x+v))*M,i[1]=(p+B)*M,i[2]=(A-S)*M,i[3]=0,i[4]=(p-B)*D,i[5]=(1-(f+v))*D,i[6]=(C+_)*D,i[7]=0,i[8]=(A+S)*N,i[9]=(C-_)*N,i[10]=(1-(f+x))*N,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}deltaTransformVector(t,e){e||(e=new g);let r=this.rawData,i=t.x,a=t.y,o=t.z;return e.x=i*r[0]+a*r[4]+o*r[8],e.y=i*r[1]+a*r[5]+o*r[9],e.z=i*r[2]+a*r[6]+o*r[10],e.w=i*r[3]+a*r[7]+o*r[11],e}identity(){let t=this.rawData;return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}fill(t){let e=this.rawData;e[1]=t,e[2]=t,e[3]=t,e[4]=t,e[6]=t,e[7]=t,e[8]=t,e[9]=t,e[11]=t,e[12]=t,e[13]=t,e[14]=t,e[0]=t,e[5]=t,e[10]=t,e[15]=t}invers33(){let t=this.rawData,e=t[5]*t[10]-t[9]*t[6],r=t[8]*t[6]-t[4]*t[10],i=t[4]*t[9]-t[8]*t[5],a=t[9]*t[2]-t[1]*t[10],o=t[0]*t[10]-t[8]*t[2],l=t[8]*t[1]-t[0]*t[9],h=t[1]*t[6]-t[5]*t[2],u=t[4]*t[2]-t[0]*t[6],c=t[0]*t[5]-t[4]*t[1],d=t[0]*e+t[4]*a+t[8]*h;if(Math.abs(d)>1e-11){let f=1/d;t[0]=f*e,t[4]=f*r,t[8]=f*i,t[1]=f*a,t[5]=f*o,t[9]=f*l,t[2]=f*h,t[6]=f*u,t[10]=f*c}}invert(){let t=this.determinant,e=Math.abs(t)>1e-11,r=this.rawData;if(e){t=1/t;let i=r[0],a=r[4],o=r[8],l=r[12],h=r[1],u=r[5],c=r[9],d=r[13],f=r[2],p=r[6],A=r[10],x=r[14],C=r[3],v=r[7],_=r[11],S=r[15];r[0]=t*(u*(A*S-x*_)-c*(p*S-x*v)+d*(p*_-A*v)),r[1]=-t*(h*(A*S-x*_)-c*(f*S-x*C)+d*(f*_-A*C)),r[2]=t*(h*(p*S-x*v)-u*(f*S-x*C)+d*(f*v-p*C)),r[3]=-t*(h*(p*_-A*v)-u*(f*_-A*C)+c*(f*v-p*C)),r[4]=-t*(a*(A*S-x*_)-o*(p*S-x*v)+l*(p*_-A*v)),r[5]=t*(i*(A*S-x*_)-o*(f*S-x*C)+l*(f*_-A*C)),r[6]=-t*(i*(p*S-x*v)-a*(f*S-x*C)+l*(f*v-p*C)),r[7]=t*(i*(p*_-A*v)-a*(f*_-A*C)+o*(f*v-p*C)),r[8]=t*(a*(c*S-d*_)-o*(u*S-d*v)+l*(u*_-c*v)),r[9]=-t*(i*(c*S-d*_)-o*(h*S-d*C)+l*(h*_-c*C)),r[10]=t*(i*(u*S-d*v)-a*(h*S-d*C)+l*(h*v-u*C)),r[11]=-t*(i*(u*_-c*v)-a*(h*_-c*C)+o*(h*v-u*C)),r[12]=-t*(a*(c*x-d*A)-o*(u*x-d*p)+l*(u*A-c*p)),r[13]=t*(i*(c*x-d*A)-o*(h*x-d*f)+l*(h*A-c*f)),r[14]=-t*(i*(u*x-d*p)-a*(h*x-d*f)+l*(h*p-u*f)),r[15]=t*(i*(u*A-c*p)-a*(h*A-c*f)+o*(h*p-u*f))}return e}transformPoint(t,e){let r=this.rawData;e||(e=new g);let i=t.x,a=t.y,o=t.z;return e.x=i*r[0]+a*r[4]+o*r[8]+r[12],e.y=i*r[1]+a*r[5]+o*r[9]+r[13],e.z=i*r[2]+a*r[6]+o*r[10]+r[14],e}transformVector(t,e){let r=this.rawData;e||(e=new g);let i=t.x,a=t.y,o=t.z;return e.x=i*r[0]+a*r[4]+o*r[8],e.y=i*r[1]+a*r[5]+o*r[9],e.z=i*r[2]+a*r[6]+o*r[10],e}transpose(){let t=this.rawData;for(let e=0;e<E.helpMatrix.rawData.length;e++)E.helpMatrix.rawData[e]=t[e];t[1]=E.helpMatrix.rawData[4],t[2]=E.helpMatrix.rawData[8],t[3]=E.helpMatrix.rawData[12],t[4]=E.helpMatrix.rawData[1],t[6]=E.helpMatrix.rawData[9],t[7]=E.helpMatrix.rawData[13],t[8]=E.helpMatrix.rawData[2],t[9]=E.helpMatrix.rawData[6],t[11]=E.helpMatrix.rawData[14],t[12]=E.helpMatrix.rawData[3],t[13]=E.helpMatrix.rawData[7],t[14]=E.helpMatrix.rawData[11]}get determinant(){let t=this.rawData;return(t[0]*t[5]-t[4]*t[1])*(t[10]*t[15]-t[14]*t[11])-(t[0]*t[9]-t[8]*t[1])*(t[6]*t[15]-t[14]*t[7])+(t[0]*t[13]-t[12]*t[1])*(t[6]*t[11]-t[10]*t[7])+(t[4]*t[9]-t[8]*t[5])*(t[2]*t[15]-t[14]*t[3])-(t[4]*t[13]-t[12]*t[5])*(t[2]*t[11]-t[10]*t[3])+(t[8]*t[13]-t[12]*t[9])*(t[2]*t[7]-t[6]*t[3])}getPosition(t){t||(t=new g);let e=this.rawData;return t.x=e[12],t.y=e[13],t.z=e[14],t}get position(){return this._position.set(this.rawData[12],this.rawData[13],this.rawData[14]),this._position}set position(t){let e=this.rawData;e[12]=t.x,e[13]=t.y,e[14]=t.z}get scale(){let t=this.rawData;return new g(t[0],t[5],t[10])}set scale(t){let e=this.rawData;e[0]=t.x,e[5]=t.y,e[10]=t.z}toString(){let t=this.rawData;return"matrix3d("+Math.round(t[0]*1e3)/1e3+","+Math.round(t[1]*1e3)/1e3+","+Math.round(t[2]*1e3)/1e3+","+Math.round(t[3]*1e3)/1e3+","+Math.round(t[4]*1e3)/1e3+","+Math.round(t[5]*1e3)/1e3+","+Math.round(t[6]*1e3)/1e3+","+Math.round(t[7]*1e3)/1e3+","+Math.round(t[8]*1e3)/1e3+","+Math.round(t[9]*1e3)/1e3+","+Math.round(t[10]*1e3)/1e3+","+Math.round(t[11]*1e3)/1e3+","+Math.round(t[12]*1e3)/1e3+","+Math.round(t[13]*1e3)/1e3+","+Math.round(t[14]*1e3)/1e3+","+Math.round(t[15]*1e3)/1e3+")"}lerp(t,e,r){this.copyFrom(e).sub(t).mult(r).add(t)}get(t,e){return this.rawData[t+e*4]}set(t,e,r){this.rawData[t+e*4]=r}getMaxScaleOnAxis(){let t=this.rawData,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,r,i))}translate(t){let e=this.get(0,0)*t.x+this.get(0,1)*t.y+this.get(0,2)*t.z+this.get(0,3),r=this.get(1,0)*t.x+this.get(1,1)*t.y+this.get(1,2)*t.z+this.get(1,3),i=this.get(2,0)*t.x+this.get(2,1)*t.y+this.get(2,2)*t.z+this.get(2,3),a=this.get(3,0)*t.x+this.get(3,1)*t.y+this.get(3,2)*t.z+this.get(3,3);return this.set(0,3,e),this.set(1,3,r),this.set(2,3,i),this.set(3,3,a),this}setTRInverse(t,e){e=e.inverse(),X.quaternionToMatrix(e,this),this.translate(new g(-t.x,-t.y,-t.z))}setScale(t){return this.set(0,0,t.x),this.set(0,1,0),this.set(0,2,0),this.set(0,3,0),this.set(1,0,0),this.set(1,1,t.y),this.set(1,2,0),this.set(1,3,0),this.set(2,0,0),this.set(2,1,0),this.set(2,2,t.z),this.set(2,3,0),this.set(3,0,0),this.set(3,1,0),this.set(3,2,0),this.set(3,3,1),this}makeBasis(t,e,r){return this.setElements(t.x,e.x,r.x,0,t.y,e.y,r.y,0,t.z,e.z,r.z,0,0,0,0,1),this}makeRotationAxis(t,e){const r=Math.cos(e),i=Math.sin(e),a=1-r,o=t.x,l=t.y,h=t.z,u=a*o,c=a*l;return this.setElements(u*o+r,u*l-i*h,u*h+i*l,0,u*l+i*h,c*l+r,c*h-i*o,0,u*h-i*l,c*h+i*o,a*h*h+r,0,0,0,0,1),this}static transpose(t,e){e||(e=new E);let r=t.rawData,i=e.rawData;return i[0]=r[0],i[1]=r[4],i[2]=r[8],i[3]=r[12],i[4]=r[1],i[5]=r[5],i[6]=r[9],i[7]=r[13],i[8]=r[2],i[9]=r[6],i[10]=r[10],i[11]=r[14],i[12]=r[3],i[13]=r[7],i[14]=r[11],i[15]=r[15],e}static inverse(t,e){e||(e=new E);let r=t.rawData,i=e.rawData;i[0]=r[5]*r[10]*r[15]-r[5]*r[14]*r[11]-r[6]*r[9]*r[15]+r[6]*r[13]*r[11]+r[7]*r[9]*r[14]-r[7]*r[13]*r[10],i[1]=-r[1]*r[10]*r[15]+r[1]*r[14]*r[11]+r[2]*r[9]*r[15]-r[2]*r[13]*r[11]-r[3]*r[9]*r[14]+r[3]*r[13]*r[10],i[2]=r[1]*r[6]*r[15]-r[1]*r[14]*r[7]-r[2]*r[5]*r[15]+r[2]*r[13]*r[7]+r[3]*r[5]*r[14]-r[3]*r[13]*r[6],i[3]=-r[1]*r[6]*r[11]+r[1]*r[10]*r[7]+r[2]*r[5]*r[11]-r[2]*r[9]*r[7]-r[3]*r[5]*r[10]+r[3]*r[9]*r[6],i[4]=-r[4]*r[10]*r[15]+r[4]*r[14]*r[11]+r[6]*r[8]*r[15]-r[6]*r[12]*r[11]-r[7]*r[8]*r[14]+r[7]*r[12]*r[10],i[5]=r[0]*r[10]*r[15]-r[0]*r[14]*r[11]-r[2]*r[8]*r[15]+r[2]*r[12]*r[11]+r[3]*r[8]*r[14]-r[3]*r[12]*r[10],i[6]=-r[0]*r[6]*r[15]+r[0]*r[14]*r[7]+r[2]*r[4]*r[15]-r[2]*r[12]*r[7]-r[3]*r[4]*r[14]+r[3]*r[12]*r[6],i[7]=r[0]*r[6]*r[11]-r[0]*r[10]*r[7]-r[2]*r[4]*r[11]+r[2]*r[8]*r[7]+r[3]*r[4]*r[10]-r[3]*r[8]*r[6],i[8]=r[4]*r[9]*r[15]-r[4]*r[13]*r[11]-r[5]*r[8]*r[15]+r[5]*r[12]*r[11]+r[7]*r[8]*r[13]-r[7]*r[12]*r[9],i[9]=-r[0]*r[9]*r[15]+r[0]*r[13]*r[11]+r[1]*r[8]*r[15]-r[1]*r[12]*r[11]-r[3]*r[8]*r[13]+r[3]*r[12]*r[9],i[10]=r[0]*r[5]*r[15]-r[0]*r[13]*r[7]-r[1]*r[4]*r[15]+r[1]*r[12]*r[7]+r[3]*r[4]*r[13]-r[3]*r[12]*r[5],i[11]=-r[0]*r[5]*r[11]+r[0]*r[9]*r[7]+r[1]*r[4]*r[11]-r[1]*r[8]*r[7]-r[3]*r[4]*r[9]+r[3]*r[8]*r[5],i[12]=-r[4]*r[9]*r[14]+r[4]*r[13]*r[10]+r[5]*r[8]*r[14]-r[5]*r[12]*r[10]-r[6]*r[8]*r[13]+r[6]*r[12]*r[9],i[13]=r[0]*r[9]*r[14]-r[0]*r[13]*r[10]-r[1]*r[8]*r[14]+r[1]*r[12]*r[10]+r[2]*r[8]*r[13]-r[2]*r[12]*r[9],i[14]=-r[0]*r[5]*r[14]+r[0]*r[13]*r[6]+r[1]*r[4]*r[14]-r[1]*r[12]*r[6]-r[2]*r[4]*r[13]+r[2]*r[12]*r[5],i[15]=r[0]*r[5]*r[10]-r[0]*r[9]*r[6]-r[1]*r[4]*r[10]+r[1]*r[8]*r[6]+r[2]*r[4]*r[9]-r[2]*r[8]*r[5];let a=r[0]*i[0]+r[1]*i[4]+r[2]*i[8]+r[3]*i[12];for(let o=0;o<16;o++)i[o]/=a;return e}makeEuler(t,e,r="XYZ"){const i=this.rawData,a=i[0],o=i[4],l=i[8],h=i[1],u=i[5],c=i[9],d=i[2],f=i[6],p=i[10];switch(r){case"XYZ":t.y=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(t.x=Math.atan2(-c,p),t.z=Math.atan2(-o,a)):(t.x=Math.atan2(f,u),t.z=0);break;case"YXZ":t.x=Math.asin(-pt(c,-1,1)),Math.abs(c)<.9999999?(t.y=Math.atan2(l,p),t.z=Math.atan2(h,u)):(t.y=Math.atan2(-d,a),t.z=0);break;case"ZXY":t.x=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(t.y=Math.atan2(-d,p),t.z=Math.atan2(-o,u)):(t.y=0,t.z=Math.atan2(h,a));break;case"ZYX":t.y=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(t.x=Math.atan2(f,p),t.z=Math.atan2(h,a)):(t.x=0,t.z=Math.atan2(-o,u));break;case"YZX":t.z=Math.asin(pt(h,-1,1)),Math.abs(h)<.9999999?(t.x=Math.atan2(-c,u),t.y=Math.atan2(-d,a)):(t.x=0,t.y=Math.atan2(l,p));break;case"XZY":t.z=Math.asin(-pt(o,-1,1)),Math.abs(o)<.9999999?(t.x=Math.atan2(f,u),t.y=Math.atan2(l,a)):(t.x=Math.atan2(-c,p),t.y=0);break}return e&&t.multiplyScalar(hi),t}setElements(t,e,r,i,a,o,l,h,u,c,d,f,p,A,x,C){const v=this.rawData;return v[0]=t,v[4]=e,v[8]=r,v[12]=i,v[1]=a,v[5]=o,v[9]=l,v[13]=h,v[2]=u,v[6]=c,v[10]=d,v[14]=f,v[3]=p,v[7]=A,v[11]=x,v[15]=C,this}makeMatrix44ByQuaternion(t,e,r){this.identity(),X.quaternionToMatrix(r,this),this.appendTranslation(t.x,t.y,t.z),this.appendScale(e.x,e.y,e.z)}};s(E,"blockBytes",16*4),s(E,"block",16),s(E,"allocCount",1e3),s(E,"allocOnceCount",1e3),s(E,"maxCount",50*1e4),s(E,"useCount",0),s(E,"buffer"),s(E,"wasmMatrixPtr",0),s(E,"dynamicMatrixBytes"),s(E,"dynamicGlobalMatrixRef"),s(E,"wasm"),s(E,"help_matrix_0"),s(E,"help_matrix_1"),s(E,"help_matrix_2"),s(E,"helpMatrix"),s(E,"helpMatrix2"),s(E,"_getEulerMatrix"),s(E,"_zero",new g(0,0,0)),s(E,"_one",new g(1,1,1)),s(E,"_prs",[new g,new g,new g]),s(E,"float32Array",new Float32Array(16).fill(0)),s(E,"decomposeRawData",new Float32Array(16).fill(0));let V=E;function _n(n,t,e){for(let r=0;r<4;r++)e.rawData[r]=n.rawData[r]*t.rawData[0]+n.rawData[r+4]*t.rawData[1]+n.rawData[r+8]*t.rawData[2]+n.rawData[r+12]*t.rawData[3],e.rawData[r+4]=n.rawData[r]*t.rawData[4]+n.rawData[r+4]*t.rawData[5]+n.rawData[r+8]*t.rawData[6]+n.rawData[r+12]*t.rawData[7],e.rawData[r+8]=n.rawData[r]*t.rawData[8]+n.rawData[r+4]*t.rawData[9]+n.rawData[r+8]*t.rawData[10]+n.rawData[r+12]*t.rawData[11],e.rawData[r+12]=n.rawData[r]*t.rawData[12]+n.rawData[r+4]*t.rawData[13]+n.rawData[r+8]*t.rawData[14]+n.rawData[r+12]*t.rawData[15]}function oa(n,t,e,r){let i=r.rawData,a=n.x*oe,o=n.y*oe,l=n.z*oe,h=0,u=a*.5,c=o*.5,d=l*.5,f=Math.cos(u),p=Math.sin(u),A=Math.cos(c),x=Math.sin(c),C=Math.cos(d),v=Math.sin(d);h=f*A*C+p*x*v,a=p*A*C-f*x*v,o=f*x*C+p*A*v,l=f*A*v-p*x*C;let _=a+a,S=o+o,B=l+l,M=a*_,D=a*S,N=a*B,Q=o*S,U=o*B,le=l*B,he=h*_,me=h*S,ce=h*B,re=e.x,_e=e.y,de=e.z;i[0]=(1-(Q+le))*re,i[1]=(D+ce)*re,i[2]=(N-me)*re,i[3]=0,i[4]=(D-ce)*_e,i[5]=(1-(M+le))*_e,i[6]=(U+he)*_e,i[7]=0,i[8]=(N+me)*de,i[9]=(U-he)*de,i[10]=(1-(M+Q))*de,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1}function In(n,t,e){let r=n.rawData,i=e.rawData,a=r[0],o=r[4],l=r[8],h=r[12],u=r[1],c=r[5],d=r[9],f=r[13],p=r[2],A=r[6],x=r[10],C=r[14],v=r[3],_=r[7],S=r[11],B=r[15];i[0]=a*t.rawData[0]+u*t.rawData[4]+p*t.rawData[8]+v*t.rawData[12],i[1]=a*t.rawData[1]+u*t.rawData[5]+p*t.rawData[9]+v*t.rawData[13],i[2]=a*t.rawData[2]+u*t.rawData[6]+p*t.rawData[10]+v*t.rawData[14],i[3]=a*t.rawData[3]+u*t.rawData[7]+p*t.rawData[11]+v*t.rawData[15],i[4]=o*t.rawData[0]+c*t.rawData[4]+A*t.rawData[8]+_*t.rawData[12],i[5]=o*t.rawData[1]+c*t.rawData[5]+A*t.rawData[9]+_*t.rawData[13],i[6]=o*t.rawData[2]+c*t.rawData[6]+A*t.rawData[10]+_*t.rawData[14],i[7]=o*t.rawData[3]+c*t.rawData[7]+A*t.rawData[11]+_*t.rawData[15],i[8]=l*t.rawData[0]+d*t.rawData[4]+x*t.rawData[8]+S*t.rawData[12],i[9]=l*t.rawData[1]+d*t.rawData[5]+x*t.rawData[9]+S*t.rawData[13],i[10]=l*t.rawData[2]+d*t.rawData[6]+x*t.rawData[10]+S*t.rawData[14],i[11]=l*t.rawData[3]+d*t.rawData[7]+x*t.rawData[11]+S*t.rawData[15],i[12]=h*t.rawData[0]+f*t.rawData[4]+C*t.rawData[8]+B*t.rawData[12],i[13]=h*t.rawData[1]+f*t.rawData[5]+C*t.rawData[9]+B*t.rawData[13],i[14]=h*t.rawData[2]+f*t.rawData[6]+C*t.rawData[10]+B*t.rawData[14],i[15]=h*t.rawData[3]+f*t.rawData[7]+C*t.rawData[11]+B*t.rawData[15]}function Sn(n,t,e){let r=t.x,i=t.y,a=t.z,o=Math.hypot(r,i,a),l,h,u,c,d,f,p,A,x,C,v,_;if(o<yn)return null;o=1/o,r*=o,i*=o,a*=o,l=Math.sin(n),h=Math.cos(n),u=1-h,c=r*r*u+h,d=i*r*u+a*l,f=a*r*u-i*l,p=r*i*u-a*l,A=i*i*u+h,x=a*i*u+r*l,C=r*a*u+i*l,v=i*a*u-r*l,_=a*a*u+h;let S=e.rawData;return S[0]=c,S[1]=d,S[2]=f,S[3]=0,S[4]=p,S[5]=A,S[6]=x,S[7]=0,S[8]=C,S[9]=v,S[10]=_,S[11]=0,S[12]=0,S[13]=0,S[14]=0,S[15]=1,S}function is(n,t,e){let r=n.rawData,i=r[0],a=r[1],o=r[2],l=r[3],h=r[4],u=r[5],c=r[6],d=r[7],f=r[8],p=r[9],A=r[10],x=r[11],C=r[12],v=r[13],_=r[14],S=r[15],B=t.rawData,M=e.rawData,D=B[0],N=B[1],Q=B[2],U=B[3];return M[0]=D*i+N*h+Q*f+U*C,M[1]=D*a+N*u+Q*p+U*v,M[2]=D*o+N*c+Q*A+U*_,M[3]=D*l+N*d+Q*x+U*S,D=B[4],N=B[5],Q=B[6],U=B[7],M[4]=D*i+N*h+Q*f+U*C,M[5]=D*a+N*u+Q*p+U*v,M[6]=D*o+N*c+Q*A+U*_,M[7]=D*l+N*d+Q*x+U*S,D=B[8],N=B[9],Q=B[10],U=B[11],M[8]=D*i+N*h+Q*f+U*C,M[9]=D*a+N*u+Q*p+U*v,M[10]=D*o+N*c+Q*A+U*_,M[11]=D*l+N*d+Q*x+U*S,D=B[12],N=B[13],Q=B[14],U=B[15],M[12]=D*i+N*h+Q*f+U*C,M[13]=D*a+N*u+Q*p+U*v,M[14]=D*o+N*c+Q*A+U*_,M[15]=D*l+N*d+Q*x+U*S,M}var be=(n=>(n[n.None=0]="None",n[n.PointLight=1]="PointLight",n[n.DirectionLight=2]="DirectionLight",n[n.SpotLight=3]="SpotLight",n[n.SkyLight=4]="SkyLight",n))(be||{});class bi extends Tr{constructor(){super(...arguments);s(this,"index",-1);s(this,"lightType",-1);s(this,"radius",.5);s(this,"linear",1);s(this,"lightPosition",new g);s(this,"lightMatrixIndex",-1);s(this,"direction",new g);s(this,"quadratic",.032);s(this,"lightColor",new F(1,1,1,1));s(this,"intensity",1);s(this,"innerAngle",0);s(this,"outerAngle",1);s(this,"range",100);s(this,"castShadowIndex",-1);s(this,"lightTangent",g.FORWARD);s(this,"iesIndex",-1)}}s(bi,"lightSize",24);const ut=class ut{static init(){this._init||(this._init=!0,this.componentsUpdateList=new Map,this.componentsLateUpdateList=new Map,this.componentsBeforeUpdateList=new Map,this.componentsComputeList=new Map,this.componentsEnablePickerList=new Map,this.graphicComponent=new Map,this.waitStartComponent=new Map)}static bindUpdate(t,e,r){this.init();let i=this.componentsUpdateList.get(t);i||(i=new Map,this.componentsUpdateList.set(t,i)),i.set(e,r)}static unBindUpdate(t,e){this.init();let r=this.componentsUpdateList.get(t);r&&r.delete(e)}static bindLateUpdate(t,e,r){this.init();let i=this.componentsLateUpdateList.get(t);i||(i=new Map,this.componentsLateUpdateList.set(t,i)),i.set(e,r)}static unBindLateUpdate(t,e){this.init();let r=this.componentsLateUpdateList.get(t);r&&r.delete(e)}static bindBeforeUpdate(t,e,r){this.init();let i=this.componentsBeforeUpdateList.get(t);i||(i=new Map,this.componentsBeforeUpdateList.set(t,i)),i.set(e,r)}static unBindBeforeUpdate(t,e){this.init();let r=this.componentsBeforeUpdateList.get(t);r&&r.delete(e)}static bindCompute(t,e,r){this.init();let i=this.componentsComputeList.get(t);i||(i=new Map,this.componentsComputeList.set(t,i)),i.set(e,r)}static unBindCompute(t,e){this.init();let r=this.componentsComputeList.get(t);r&&r.delete(e)}static bindGraphic(t,e,r){this.init();let i=this.graphicComponent.get(t);i||(i=new Map,this.graphicComponent.set(t,i)),i.set(e,r)}static unBindGraphic(t,e){this.init();let r=this.graphicComponent.get(t);r&&r.delete(e)}static appendWaitStart(t){this.init();let e=this.waitStartComponent.get(t.object3D);e?e.indexOf(t)==-1&&e.push(t):this.waitStartComponent.set(t.object3D,[t])}static removeWaitStart(t,e){this.init();let r=ut.waitStartComponent.get(t);if(r){let i=r.indexOf(e);i!=-1&&r.splice(i)}}static bindEnablePick(t,e,r){this.init();let i=this.componentsEnablePickerList.get(t);i||(i=new Map,this.componentsEnablePickerList.set(t,i)),i.set(e,r)}static unBindEnablePick(t,e){this.init();let r=this.componentsEnablePickerList.get(t);r&&r.delete(e)}};s(ut,"componentsUpdateList"),s(ut,"componentsLateUpdateList"),s(ut,"componentsBeforeUpdateList"),s(ut,"componentsComputeList"),s(ut,"componentsEnablePickerList"),s(ut,"graphicComponent"),s(ut,"waitStartComponent"),s(ut,"_init",!1);let ae=ut;class Ke{constructor(){s(this,"object3D",null);s(this,"_eventDispatcher");s(this,"_enable",!0);s(this,"__isStart",!1);s(this,"isDestroyed")}get eventDispatcher(){return this._eventDispatcher||(this._eventDispatcher=new Fr),this._eventDispatcher}set eventDispatcher(t){console.error("The eventDispatcher should not be set externally!")}get isStart(){return this.__isStart}get transform(){return this.object3D.transform}set enable(t){var e,r;this._enable!=t&&(this._enable=t,this._enable?(e=this.onEnable)==null||e.call(this,this.transform.view3D):(r=this.onDisable)==null||r.call(this,this.transform.view3D))}get enable(){return this._enable}__init(t){this.init(t)}__start(){var t,e;this.transform&&this.transform.scene3D&&this._enable&&((t=this.onEnable)==null||t.call(this,this.transform.view3D)),this.transform&&this.transform.scene3D&&this.__isStart==!1&&((e=this.start)==null||e.call(this),this.__isStart=!0),this.onUpdate&&this._onUpdate(this.onUpdate.bind(this)),this.onLateUpdate&&this._onLateUpdate(this.onLateUpdate.bind(this)),this.onBeforeUpdate&&this._onBeforeUpdate(this.onBeforeUpdate.bind(this)),this.onCompute&&this._onCompute(this.onCompute.bind(this)),this.onGraphic&&this._onGraphic(this.onGraphic.bind(this))}__stop(){var t;this.transform&&this.transform.scene3D&&((t=this.onDisable)==null||t.call(this,this.transform.view3D)),this._onUpdate(null),this._onLateUpdate(null),this._onBeforeUpdate(null),this._onCompute(null),this._onGraphic(null)}init(t){}start(){}stop(){}cloneTo(t){}copyComponent(t){return this}_onUpdate(t){t!=null?ae.bindUpdate(this.transform.view3D,this,t):ae.unBindUpdate(this.transform.view3D,this)}_onLateUpdate(t){t!=null?ae.bindLateUpdate(this.transform.view3D,this,t):ae.unBindLateUpdate(this.transform.view3D,this)}_onBeforeUpdate(t){t!=null?ae.bindBeforeUpdate(this.transform.view3D,this,t):ae.unBindBeforeUpdate(this.transform.view3D,this)}_onCompute(t){t!=null?ae.bindCompute(this.transform.view3D,this,t):ae.unBindCompute(this.transform.view3D,this)}_onGraphic(t){t!=null?ae.bindGraphic(this.transform.view3D,this,t):ae.unBindGraphic(this.transform.view3D,this)}beforeDestroy(t){ae.removeWaitStart(this.object3D,this)}destroy(t){this.isDestroyed||(this.isDestroyed=!0,this.enable=!1,this.stop(),this._onBeforeUpdate(null),this._onUpdate(null),this._onLateUpdate(null),this.onEnable=null,this.onDisable=null,this.onUpdate=null,this.onLateUpdate=null,this.onBeforeUpdate=null,this.onCompute=null,this.onGraphic=null)}}class Ji{constructor(){s(this,"value",0);s(this,"inv_base",0)}static get(t,e){let r=0,i=1/e;for(;t>0;)r+=t%e*i,t/=e,i/=e;return r}getBase(t,e){let r=this.inv_base=1/e;for(;t>0;)this.value+=r*(t%e),t/=e,r*=this.inv_base}next(){let t=1-this.value-1e-7;if(this.inv_base<t)this.value+=this.inv_base;else{let e=this.inv_base,r;do r=e,e*=this.inv_base;while(e>=t);this.value+=r+e-1}}get(){return this.value}}const Ot=class Ot{constructor(t,e){s(this,"origin",new g);s(this,"length",Number.MAX_VALUE);s(this,"_vector",new g);s(this,"_dir",new g);s(this,"_v0",new g);s(this,"_v1",new g);s(this,"_v2",new g);s(this,"_E1",new g);s(this,"_E2",new g);s(this,"_P",new g);s(this,"_T",new g);s(this,"_Q",new g);this.origin.copyFrom(t||new g),this._dir.copyFrom(e||new g),this._dir.normalize()}get direction(){return this._dir}set direction(t){this._dir.copyFrom(t),this._dir.normalize()}clone(){return new Ot(this.origin,this.direction)}intersectBox(t,e){let r=this.direction,i=this.origin,a,o,l,h,u,c;const d=1/r.x,f=1/r.y,p=1/r.z,A=t.min,x=t.max;return a=((d>=0?A.x:x.x)-i.x)*d,o=((d>=0?x.x:A.x)-i.x)*d,l=((f>=0?A.y:x.y)-i.y)*f,h=((f>=0?x.y:A.y)-i.y)*f,a>h||l>o||(l>a&&(a=l),h<o&&(o=h),u=((p>=0?A.z:x.z)-i.z)*p,c=((p>=0?x.z:A.z)-i.z)*p,a>c||u>o)||(u>a&&(a=u),c<o&&(o=c),o<0)?null:(e||(e=new g),this.pointAt(a>=0?a:o,e))}pointAt(t,e){return e||(e=new g),e.copy(this.direction),e.multiplyScalar(t),e.add(this.origin,e),e}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this._dir.copy(t._dir),this.length=t.length,this}setApproxDirection(t){this._dir=t.normalize()}setOrigin(t){this.origin.copyFrom(t)}getOrigin(){return this.origin}getPoint(t){return this._dir.scaleBy(t),this.origin.add(this._dir)}sqrDistToPoint(t){let e=this._dir,r=t.subtract(this.origin),i=sa(r,e),a=sa(e,e),o=i/a,l=this.getPoint(o);return xn(t.subtract(l))}applyMatrix(t){this.origin=t.transformPoint(this.origin),this._dir=t.transformVector(this._dir)}pointInTriangle(t,e,r,i){let a=this._v0,o=this._v1,l=this._v2;i.subtract(e,a),r.subtract(e,o),t.subtract(e,l);let h=g.dot(a,a),u=g.dot(a,o),c=g.dot(a,l),d=g.dot(o,o),f=g.dot(o,l),p=1/(h*d-u*u),A=(d*c-u*f)*p,x=(h*f-u*c)*p;return A>=0&&x>=0&&A+x<1}intersectTriangle(t,e,r){let i=r.v1,a=r.v2,o=r.v3;a.subtract(i,this._E1),o.subtract(i,this._E2),e.crossProduct(this._E2,this._P);let l=this._E1.dotProduct(this._P);if(l>0?t.subtract(i,this._T):(i.subtract(t,this._T),l=-l),l<1e-4||(r.u=this._T.dotProduct(this._P),r.u<0||r.u>l)||(this._T.crossProduct(this._E1,this._Q),r.v=e.dotProduct(this._Q),r.v<0||r.u+r.v>l))return null;let h=new g;r.t0=r.t=this._E2.dotProduct(this._Q);let u=1/l;return r.t*=u,r.u*=u,r.v*=u,h.x=t.x+r.t*e.x,h.y=t.y+r.t*e.y,h.z=t.z+r.t*e.z,h}intersectSphere(t,e,r,i){let a=t.subtract(r),o=g.dot(e,e),l=2*g.dot(a,e),h=g.dot(a,a)-i*i,u=l*l-4*o*h,c=g.HELP_3;if(u<0)return null;{let d=(-l-Math.sqrt(u))/(o*2);return d<0?null:(c.x=t.x+d*e.x,c.y=t.y+d*e.y,c.z=t.z+d*e.z,c)}}intersectionSegment(t,e,r){const i=this.origin,a=g.HELP_0,o=g.HELP_1,l=g.HELP_2,h=g.HELP_3;e.subtract(t,a),this._dir.scaleToRef(Ot._rayl,l),i.add(l,o),t.subtract(i,h);var u=g.dot(a,a),c=g.dot(a,l),d=g.dot(l,l),f=g.dot(a,h),p=g.dot(l,h),A=u*d-c*c,x,C,v=A,_,S,B=A;A<Ot._smallnum?(C=0,v=1,S=p,B=d):(C=c*p-d*f,S=u*p-c*f,C<0?(C=0,S=p,B=d):C>v&&(C=v,S=p+c,B=d)),S<0?(S=0,-f<0?C=0:-f>u?C=v:(C=-f,v=u)):S>B&&(S=B,-f+c<0?C=0:-f+c>u?C=v:(C=-f+c,v=u)),x=Math.abs(C)<Ot._smallnum?0:C/v,_=Math.abs(S)<Ot._smallnum?0:S/B;const M=g.HELP_4;l.scaleToRef(_,M);const D=g.HELP_5;a.scaleToRef(x,D),D.add(h,D);const N=g.HELP_6;D.subtract(M,N);var Q=_>0&&_<=this._dir.length&&N.lengthSquared<r*r;if(Q){let U=new g;return U.copyFrom(e.subtract(t)),U.scaleBy(x),U.add(t,U),{out:U,length:D.length}}return{out:null,length:-1}}get_vec(t,e){let r=g.HELP_1;return r.x=t.x-e.x,r.y=t.y-e.y,r.z=t.z-e.z,r}};s(Ot,"_rayl",1e9),s(Ot,"_smallnum",1e-8);let ai=Ot;class Ei{constructor(t=0,e=0,r=0,i=0){s(this,"x");s(this,"y");s(this,"w");s(this,"h");this.x=t,this.y=e,this.w=r,this.h=i}get width(){return this.w}set width(t){this.w=t}get height(){return this.h}set height(t){this.h=t}static pointInRect(t,e,r,i,a,o){return!(t<r||t>a||e<i||e>o)}clone(){return new Ei(this.x,this.y,this.w,this.h)}copyFrom(t){this.x=t.x,this.y=t.y,this.w=t.w,this.h=t.h}copyTo(t){t.copyFrom(this)}inner(t,e){return!(t<this.x||t>this.x+this.width||e<this.y||e>this.y+this.height)}equal(t){return!(this.x!=t.x||this.y!=t.y||this.width!=t.width||this.height!=t.height)}equalArea(t,e,r,i){return!(this.x!=t||this.y!=e||this.width!=r||this.height!=i)}equalInnerArea(t){var e=this.x,r=this.y,i=this.x+this.width,a=this.y+this.height,o=t.x,l=t.y,h=t.x+t.width,u=t.y+t.height;return Math.max(e,o)<=Math.min(i,h)&&Math.max(r,l)<=Math.min(a,u)}innerArea(t,e){e=e||new Ei;var r=this.x,i=this.y,a=this.x+this.width,o=this.y+this.height,l=t.x,h=t.y,u=t.x+t.width,c=t.y+t.height,d=Math.max(i,h),f=Math.min(o,c),p=Math.max(r,l),A=Math.min(u,a);return d>=0&&f>=0&&f-d>=0&&A-p>0?(e.x=p,e.y=d,e.width=A-p,e.height=f-d):(e.x=0,e.y=0,e.width=0,e.height=0),e}setTo(t,e,r,i){this.x=t,this.y=e,this.width=r,this.height=i}}const Jt=class Jt{constructor(t,e){s(this,"center");s(this,"extents");s(this,"max");s(this,"min");s(this,"size");t||(t=g.ZERO.clone()),e||(e=g.ZERO.clone()),this.setFromCenterAndSize(t,e)}makeEmpty(){return this.setFromMinMax(Jt.maxVector3,Jt.minVector3),this}setFromMinMax(t,e){return this.init(),e.subtract(t,this.size),t.add(e,this.center).multiplyScalar(.5),this.extents.copyFrom(this.size).multiplyScalar(.5),this.min.copyFrom(t),this.max.copyFrom(e),this}init(){return this.min||(this.min=new g),this.max||(this.max=new g),this.size||(this.size=new g),this.center||(this.center=new g),this.extents||(this.extents=new g),this}setFromCenterAndSize(t,e){return this.size=e,this.center=t,this.init(),this.extents.copy(e).multiplyScalar(.5),this.center.subtract(this.extents,this.min),this.center.add(this.extents,this.max),this}inFrustum(t,e){return e.containsBox(t.bound)}merge(t){t.min.x<this.min.x&&(this.min.x=t.min.x),t.min.y<this.min.y&&(this.min.y=t.min.y),t.min.z<this.min.z&&(this.min.z=t.min.z),t.max.x>this.max.x&&(this.max.x=t.max.x),t.max.y>this.max.y&&(this.max.y=t.max.y),t.max.z>this.max.z&&(this.max.z=t.max.z),this.size.x=t.max.x-t.min.x,this.size.y=t.max.y-t.min.y,this.size.z=t.max.z-t.min.z,this.extents.x=this.size.x*.5,this.extents.y=this.size.y*.5,this.extents.z=this.size.z*.5,this.center.x=this.extents.x+t.min.x,this.center.y=this.extents.y+t.min.y,this.center.z=this.extents.z+t.min.z}intersects(t){return this.min.x<=t.max.x&&this.max.x>=t.min.x&&this.min.y<=t.max.y&&this.max.y>=t.min.y&&this.min.z<=t.max.z&&this.max.z>=t.min.z}intersectsSphere(t){return this.min.x<=t.max.x&&this.max.x>=t.min.x&&this.min.y<=t.max.y&&this.max.y>=t.min.y&&this.min.z<=t.max.z&&this.max.z>=t.min.z}intersectsBox(t){return this.min.x<=t.max.x&&this.max.x>=t.min.x&&this.min.y<=t.max.y&&this.max.y>=t.min.y&&this.min.z<=t.max.z&&this.max.z>=t.min.z}equals(t){return this.center.equals(t.center)&&this.extents.equals(t.extents)}expandByPoint(t){t.x<this.min.x&&(this.min.x=t.x),t.x>this.max.x&&(this.max.x=t.x),t.y<this.min.y&&(this.min.y=t.y),t.y>this.max.y&&(this.max.y=t.y),t.z<this.min.z&&(this.min.z=t.z),t.z>this.max.z&&(this.max.z=t.z)}static fromPoints(t){for(var e=new Jt(new g,new g),r=0;r<t.length;r++)e.expandByPoint(t[r]);return e}calculateTransform(t){}clone(){var t=new Jt(this.center.clone(),this.size.clone());return t}intersectsRay(t,e){throw new Error("Method not implemented.")}containsPoint(t){return this.min.x<=t.x&&this.max.x>=t.x&&this.min.y<=t.y&&this.max.y>=t.y&&this.min.z<=t.z&&this.max.z>=t.z}containsBox(t){let e=this.min,r=this.max;return e.x<=t.min.x&&e.y<=t.min.y&&e.z<=t.min.z&&r.x>=t.max.x&&r.y>=t.max.y&&r.z>=t.max.z}updateBound(){}destroy(t){this.center=null,this.extents=null,this.min=null,this.max=null,this.size=null}};s(Jt,"maxVector3",new g(1,1,1).multiplyScalar(Number.MAX_VALUE*.1)),s(Jt,"minVector3",new g(1,1,1).multiplyScalar(-Number.MAX_VALUE*.1));let Qe=Jt;class wn{constructor(){s(this,"planes");s(this,"corners");s(this,"boundingBox",new Qe);this.planes=[],this.corners=[];for(var t=0;t<6;t++)this.planes[t]=new g;for(var t=0;t<2*2*2;t++)this.corners[t]=new g}updateBoundBox(t){this.boundingBox.makeEmpty();let e=this.boundingBox.min,r=this.boundingBox.max,i=0;for(let a=0;a<2;++a)for(let o=0;o<2;++o)for(let l=0;l<2;++l){let h=this.corners[i];i++,h.set(2*a-1,2*o-1,l,1),t.transformVector4(h,h),h.div(h.w,h),e.x=Math.min(h.x,e.x),e.y=Math.min(h.y,e.y),e.z=Math.min(h.z,e.z),r.x=Math.max(h.x,r.x),r.y=Math.max(h.y,r.y),r.z=Math.max(h.z,r.z)}return this.boundingBox.setFromMinMax(e,r),this}setFrustumCorners(t){let e=0;for(let r=0;r<2;++r)for(let i=0;i<2;++i)for(let a=0;a<2;++a){let o=this.corners[e];o.set(2*r-1,2*i-1,a,1),t.transformVector4(o,o),o.div(o.w,o),e++}}update(t){var e=t.rawData;this.planes[0].x=e[3]-e[0],this.planes[0].y=e[7]-e[4],this.planes[0].z=e[11]-e[8],this.planes[0].w=e[15]-e[12];var r=Math.sqrt(this.planes[0].x*this.planes[0].x+this.planes[0].y*this.planes[0].y+this.planes[0].z*this.planes[0].z);this.planes[0].x/=r,this.planes[0].y/=r,this.planes[0].z/=r,this.planes[0].w/=r,this.planes[1].x=e[3]+e[0],this.planes[1].y=e[7]+e[4],this.planes[1].z=e[11]+e[8],this.planes[1].w=e[15]+e[12],r=Math.sqrt(this.planes[1].x*this.planes[1].x+this.planes[1].y*this.planes[1].y+this.planes[1].z*this.planes[1].z),this.planes[1].x/=r,this.planes[1].y/=r,this.planes[1].z/=r,this.planes[1].w/=r,this.planes[2].x=e[3]+e[1],this.planes[2].y=e[7]+e[5],this.planes[2].z=e[11]+e[9],this.planes[2].w=e[15]+e[13],r=Math.sqrt(this.planes[2].x*this.planes[2].x+this.planes[2].y*this.planes[2].y+this.planes[2].z*this.planes[2].z),this.planes[2].x/=r,this.planes[2].y/=r,this.planes[2].z/=r,this.planes[2].w/=r,this.planes[3].x=e[3]-e[1],this.planes[3].y=e[7]-e[5],this.planes[3].z=e[11]-e[9],this.planes[3].w=e[15]-e[13],r=Math.sqrt(this.planes[3].x*this.planes[3].x+this.planes[3].y*this.planes[3].y+this.planes[3].z*this.planes[3].z),this.planes[3].x/=r,this.planes[3].y/=r,this.planes[3].z/=r,this.planes[3].w/=r,this.planes[4].x=e[3]-e[2],this.planes[4].y=e[7]-e[6],this.planes[4].z=e[11]-e[10],this.planes[4].w=e[15]-e[14],r=Math.sqrt(this.planes[4].x*this.planes[4].x+this.planes[4].y*this.planes[4].y+this.planes[4].z*this.planes[4].z),this.planes[4].x/=r,this.planes[4].y/=r,this.planes[4].z/=r,this.planes[4].w/=r,this.planes[5].x=e[3]+e[2],this.planes[5].y=e[7]+e[6],this.planes[5].z=e[11]+e[10],this.planes[5].w=e[15]+e[14],r=Math.sqrt(this.planes[5].x*this.planes[5].x+this.planes[5].y*this.planes[5].y+this.planes[5].z*this.planes[5].z),this.planes[5].x/=r,this.planes[5].y/=r,this.planes[5].z/=r,this.planes[5].w/=r}containsPoint(t){for(var e=0;e<6;e++)if(this.planes[e].x*t.x+this.planes[e].y*t.y+this.planes[e].z*t.z+this.planes[e].w<=0)return!1;return!0}containsSphere(t){let e=t.bound,r=0,i,a=t.transform.worldPosition,o=e.radius,l=e.center.x+a.x,h=e.center.y+a.y,u=e.center.z+a.z;for(let c of this.planes){if(i=c.x*l+c.y*h+c.z*u+c.w,i<=-o)return 0;i>o&&r++}return r===6?2:1}containsBox(t){let e=0,r,i=Math.max(t.size.x,t.size.y,t.size.z)*2,a=t.center.x,o=t.center.y,l=t.center.z;for(let h of this.planes){if(r=h.x*a+h.y*o+h.z*l+h.w,r<=-i)return 0;r>i&&e++}return e===6?2:1}containsBox2(t){let e=0,r,i=1.74*Math.max(t.extents.x,t.extents.y,t.extents.z);for(let a of this.planes){if(r=a.x*t.center.x+a.y*t.center.y+a.z*t.center.z+a.w,r<=-i)return 0;r>i&&e++}return e===6?2:1}}var ue=(n=>(n[n.ortho=0]="ortho",n[n.perspective=1]="perspective",n[n.shadow=2]="shadow",n))(ue||{});class bn{constructor(t){s(this,"corners");s(this,"index");this.index=t,this.corners=[];for(let e=0;e<4;e++)this.corners.push(new g)}}class En{constructor(t,e,r){s(this,"bound");s(this,"twoSections");s(this,"name");s(this,"color");s(this,"shadowCamera");s(this,"index");this.bound=new Qe,this.shadowCamera=ye.createCamera3DObject(null,"csmShadowCamera_"+r),this.shadowCamera.isShadowCamera=!0,this.shadowCamera.orthoOffCenter(100,-100,100,-100,1,1e4),this.twoSections=[t,e],this.index=r,r==0?this.color=new F(1,0,0,1):r==1?this.color=new F(0,1,0,1):r==2?this.color=new F(0,0,1,1):r==3&&(this.color=new F(0,1,1,1)),this.name="child_"+r}updateBound(){this.bound.makeEmpty();let t=this.bound.min,e=this.bound.max;for(let r of this.twoSections)for(let i of r.corners)t.x=Math.min(i.x,t.x),t.y=Math.min(i.y,t.y),t.z=Math.min(i.z,t.z),e.x=Math.max(i.x,e.x),e.y=Math.max(i.y,e.y),e.z=Math.max(i.z,e.z);return this.bound.setFromMinMax(t,e),this}}class Tn{constructor(t){s(this,"sections");s(this,"children");s(this,"name");this.sections=[];let e=t+1;for(let r=0;r<e;r++)this.sections.push(new bn(r));this.children=[];for(let r=0;r<t;r++)this.children.push(new En(this.sections[r],this.sections[r+1],r))}update(t,e,r,i,a){let o=this.sections.length-1;for(let l=0;l<=o;++l){let h=this.sections[l],u=0,c=this.logSplit(r,i,l,this.sections.length);{let f=(c-r)/i;f=f**a.csmScatteringExp,c=(i-r)*f+r}c*=a.csmAreaScale;let d=(t.rawData[10]*c+t.rawData[14])/c;for(let f=0;f<2;++f)for(let p=0;p<2;++p){let A=h.corners[u];u++,A.set(2*f-1,2*p-1,d,1),e.transformVector4(A,A),A.div(A.w,A)}}for(let l of this.children)l.updateBound();return this}squareSplit(t,e,r,i){return(r/(i-1))**4*(e-t)+t}uniformSplit(t,e,r,i){return r/(i-1)*(e-t)+t}logSplit(t,e,r,i){return t*(e/t)**(r/(i-1))}}class Fs extends Ke{constructor(){super();s(this,"fov",1);s(this,"name");s(this,"aspect",1);s(this,"near",1);s(this,"far",5e3);s(this,"viewPort",new Ei);s(this,"frustum");s(this,"isShadowCamera",!1);s(this,"_projectionMatrixInv",new V);s(this,"_projectionMatrix",new V);s(this,"_viewMatrix",new V);s(this,"_unprojection",new V);s(this,"_pvMatrixInv",new V);s(this,"_pvMatrix",new V);s(this,"_halfw");s(this,"_halfh");s(this,"_ray");s(this,"_enableCSM",!1);s(this,"lookTarget");s(this,"type",ue.perspective);s(this,"csm");s(this,"cubeShadowCameras",[]);s(this,"_haltonSeq");s(this,"_jitterOffsetList");s(this,"_useJitterProjection",!1);s(this,"_jitterFrameIndex",0);s(this,"_sampleIndex",0);s(this,"_jitterX",0);s(this,"_jitterY",0)}get projectionMatrix(){return this._projectionMatrix}get enableCSM(){return this._enableCSM}set enableCSM(e){e&&!this.csm&&(this.csm=new Tn(Rt.Cascades)),this._enableCSM=e}init(){super.init(),this._ray=new ai,this.frustum=new wn,this.viewPort.x=0,this.viewPort.y=0,this.viewPort.w=w.presentationSize[0],this.viewPort.h=w.presentationSize[1],this.lookTarget=new g(0,0,0)}getShadowBias(e){let r=2*this.getShadowWorldExtents()/e,i=this.far-this.near;return r/i-y.setting.shadow.shadowBias*.01}getShadowWorldExtents(){let e=y.setting.shadow.shadowBound;return e?e*=.5:e=Math.round(.05*this.frustum.boundingBox.extents.length),e}getCSMShadowBias(e,r){let i=2*this.getCSMShadowWorldExtents(e)/r,a=this.far-this.near;return i/a}getCSMShadowWorldExtents(e){return Math.round(this.csm.children[e].bound.extents.length)}perspective(e,r,i,a){this.fov=e,this.aspect=r,this.near=i,this.far=a,this._projectionMatrix.perspective(e,r,i,a),this.type=ue.perspective}resetPerspective(e){this.type==ue.perspective&&this._projectionMatrix.perspective(this.fov,e,this.near,this.far)}ortho(e,r,i,a){this.near=Math.max(i,.1),this.far=a,this._projectionMatrix.ortho(e,r,i,a),this.type=ue.ortho}orthoOffCenter(e,r,i,a,o,l){this.near=Math.max(o,.01),this.far=l,this._projectionMatrix.orthoOffCenter(e,r,i,a,o,l),this.type=ue.ortho}orthoZo(e,r,i,a,o,l){this.near=Math.max(o,.01),this.far=l,this._projectionMatrix.orthoZO(e,r,i,a,o,l),this.type=ue.ortho}get viewMatrix(){return this._viewMatrix.copyFrom(this.transform.worldMatrix),this._viewMatrix.invert(),this._viewMatrix}get shadowViewMatrix(){return this._viewMatrix.copyFrom(this.transform.worldMatrix),this._viewMatrix.appendScale(1,1,1),this._viewMatrix.invert(),this._viewMatrix}object3DToScreenRay(e,r=null){return r||(r=new g(0,0,0,1)),this._halfw=this.viewPort.width*.5,this._halfh=this.viewPort.height*.5,it.transformVector(this.viewMatrix,e,r),this.project(r,r),r.x=this._halfw+r.x*this._halfw,r.y=this.viewPort.height-(this._halfh-r.y*this._halfh),r}screenRayToObject3D(e,r=null){r||(r=new g),this._halfw=this.viewPort.width*.5,this._halfh=this.viewPort.height*.5;let i=e.x,a=e.y;return r.x=i/this.viewPort.width-.25,r.y=a/this.viewPort.height-.25,this.unProject(r.x,r.y,e.z,r),r}get pvMatrix(){return is(this._projectionMatrix,this.viewMatrix,this._pvMatrix),this._pvMatrix}get pvMatrix2(){is(this._projectionMatrix,this.transform.worldMatrix,this._pvMatrix);let e=this._pvMatrixInv.copyFrom(this.pvMatrix);return e.invert(),e}get pvMatrixInv(){let e=this._pvMatrixInv.copyFrom(this.pvMatrix);return e.invert(),e}get projectionMatrixInv(){return this._projectionMatrixInv.copyFrom(this._projectionMatrix),this._projectionMatrixInv.invert(),this._projectionMatrixInv}unProject(e,r,i,a){return a||(a=new g),a.x=e,a.y=-r,a.z=i,a.w=1,a.x*=i,a.y*=i,this._unprojection.copyFrom(this._projectionMatrix),this._unprojection.invert(),it.transformVector(this._unprojection,a,a),a.z=i,a}project(e,r){return this._projectionMatrix.perspectiveMultiplyPoint3(e,r),r.x=r.x/r.w,r.y=-r.y/r.w,r.z=e.z,r}screenPointToRay(e,r){let i=this._ray,a=ye.UnProjection(e,r,.01,this),o=ye.UnProjection(e,r,1,this);return o=o.subtract(a).normalize(),i.origin.copyFrom(a),i.direction=o,i}screenPointToWorld(e,r,i){return ye.UnProjection(e,r,i,this)}worldToScreenPoint(e,r){return ye.Projection(e,this,r)}lookAt(e,r,i=g.Y_AXIS){this.transform.lookAt(e,r,i),r&&this.lookTarget.copyFrom(r)}resetProjectMatrix(){this.perspective(this.fov,this.aspect,this.near,this.far)}onUpdate(){var r;this.type==ue.perspective&&(this.aspect=w.aspect,this.resetProjectMatrix()),this._useJitterProjection&&this.getJitteredProjectionMatrix(),this.frustum.update(this.pvMatrix),this.frustum.updateBoundBox(this.pvMatrixInv);let e=y.setting.shadow;this.enableCSM&&((r=this.csm)==null||r.update(this._projectionMatrix,this._pvMatrixInv,this.near,this.far,e))}get jitterFrameIndex(){return this._jitterFrameIndex}get jitterX(){return this._jitterX}get jitterY(){return this._jitterY}enableJitterProjection(e){this._jitterFrameIndex=0,this._useJitterProjection=e,this._haltonSeq||(this._haltonSeq=new Ji),this._jitterOffsetList=[];for(let r=0;r<8;r++){let i=this.generateRandomOffset();this._jitterOffsetList.push(i)}this._jitterOffsetList.reverse()}generateRandomOffset(){let e=new Ae(Ji.get((this._sampleIndex&1023)+1,2)-.5,Ji.get((this._sampleIndex&1023)+1,3)-.5);return++this._sampleIndex>=8&&(this._sampleIndex=0),e}getJitteredProjectionMatrix(){let e=y.setting.render.postProcessing.taa,r=this._projectionMatrix,i=e.temporalJitterScale,a=this._jitterFrameIndex%e.jitterSeedCount,o=this._jitterOffsetList[a].x*i,l=this._jitterOffsetList[a].y*i,h=r.get(0,2),u=r.get(1,2);this._jitterX=o/this.viewPort.width,this._jitterY=l/this.viewPort.height,h+=this._jitterX,u+=this._jitterY,r.set(0,2,h),r.set(1,2,u),this._jitterFrameIndex++}getWorldDirection(e){e||(e=new g);const r=this.transform._worldMatrix.rawData;return e.set(-r[8],-r[9],-r[10]).normalize()}}const De=class De extends Ke{constructor(){super();s(this,"eventPositionChange",new mt(De.POSITION_ONCHANGE));s(this,"eventRotationChange",new mt(De.ROTATION_ONCHANGE));s(this,"eventScaleChange",new mt(De.SCALE_ONCHANGE));s(this,"eventLocalChange",new mt(De.LOCAL_ONCHANGE));s(this,"onPositionChange");s(this,"onRotationChange");s(this,"onScaleChange");s(this,"_scene3d");s(this,"_parent");s(this,"_localPos");s(this,"_localRot");s(this,"_localRotQuat");s(this,"_localScale");s(this,"_localDetailPos");s(this,"_localDetailRot");s(this,"_localDetailScale");s(this,"index");s(this,"index2");s(this,"_forward",new g);s(this,"_back",new g);s(this,"_right",new g);s(this,"_left",new g);s(this,"_up",new g);s(this,"_down",new g);s(this,"_worldMatrix");s(this,"_targetPos");s(this,"static",!1);s(this,"depthOrder",0);this._worldMatrix=new V(!0),this.index=this._worldMatrix.index,this.index2=this._worldMatrix.index*$.stateStruct,this._localPos=new g,this._localRot=new g,this._localRotQuat=new X,this._localScale=new g(1,1,1),$.setScale(this.index,this._localScale.x,this._localScale.y,this._localScale.z),$.setRotation(this.index,this._localRot.x,this._localRot.y,this._localRot.z),$.setTranslate(this.index,this._localPos.x,this._localPos.y,this._localPos.z)}get localChange(){return $.matrixStateBuffer[this.index2]!=0}set localChange(e){$.matrixStateBuffer[this.index2]=e?1:0}get targetPos(){return this._targetPos}set targetPos(e){this._targetPos=e}get parent(){return this._parent}set parent(e){var i;let r=(i=this._parent)==null?void 0:i.object3D;if(this._parent=e,this.depthOrder=e?e.depthOrder+1:0,$.setParent(this.index,e?e.worldMatrix.index:-1,this.depthOrder),this.localChange=!0,this.object3D){let a=e?e.scene3D:null;a?(this._scene3d=a,this.object3D.components.forEach(o=>{ae.appendWaitStart(o)})):this.object3D.components.forEach(o=>{o.__stop()});for(let o of this.object3D.entityChildren)o.transform.parent=e?this:null;this.object3D.components.forEach(o=>{var l,h;(h=o.onParentChange)==null||h.call(o,r,(l=this._parent)==null?void 0:l.object3D)})}this.notifyLocalChange()}set enable(e){this.transform._scene3d&&e?super.enable=!0:super.enable=!1;for(let r of this.object3D.entityChildren)r.transform.enable=e}get enable(){return this._enable}get scene3D(){return this._scene3d}set scene3D(e){this._scene3d=e}get view3D(){return this._scene3d&&this._scene3d.view?this._scene3d.view:null}awake(){}start(){}stop(){}notifyLocalChange(){if(this.localChange=!0,this.object3D){let e=this.object3D.entityChildren,r=0,i=e.length;for(r=0;r<i;r++)e[r].transform.notifyLocalChange()}this.eventDispatcher.dispatchEvent(this.eventLocalChange)}get up(){return this.worldMatrix.transformVector(g.UP,this._up),this._up}set up(e){this._up.copyFrom(e),it.fromToRotation(g.UP,this._up,X.HELP_0),this.transform.localRotQuat=X.HELP_0}get down(){return this.worldMatrix.transformVector(g.DOWN,this._down),this._down}set down(e){var r;this._down.copyFrom(e),it.fromToRotation(g.DOWN,this._down,X.HELP_0),this.transform.localRotQuat=X.HELP_0,this.notifyLocalChange(),(r=this.onRotationChange)==null||r.call(this),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get forward(){return this.worldMatrix.transformVector(g.FORWARD,this._forward),this._forward}set forward(e){var r;this._forward.copyFrom(e),it.fromToRotation(g.FORWARD,this._forward,X.HELP_0),this.transform.localRotQuat=X.HELP_0,this.notifyLocalChange(),(r=this.onRotationChange)==null||r.call(this),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get back(){return this.worldMatrix.transformVector(g.BACK,this._back),this._back}set back(e){this._back.copyFrom(e),it.fromToRotation(g.BACK,this._back,X.HELP_0),this.transform.localRotQuat=X.HELP_0}get left(){return this.worldMatrix.transformVector(g.neg_X_AXIS,this._left),this._left}set left(e){this._left.copyFrom(e),it.fromToRotation(g.LEFT,this._left,X.HELP_0),this.transform.localRotQuat=X.HELP_0}get right(){return this.worldMatrix.transformVector(g.X_AXIS,this._right),this._right}set right(e){var r;this._right.copyFrom(e),it.fromToRotation(g.RIGHT,this._right,X.HELP_0),this.transform.localRotQuat=X.HELP_0,this.notifyLocalChange(),(r=this.onRotationChange)==null||r.call(this),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get localRotQuat(){return this._localRotQuat}set localRotQuat(e){var r;(e.x!=this._localRotQuat.x||e.y!=this._localRotQuat.y||e.z!=this._localRotQuat.z||e.w!=this._localRotQuat.w)&&(this._localRotQuat.copyFrom(e),this._localRotQuat.getEulerAngles(this._localRot),$.setRotation(this.index,this._localRot.x,this._localRot.y,this._localRot.z),this.notifyLocalChange(),(r=this.onRotationChange)==null||r.call(this),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange))}notifyChange(){var e,r,i;this.notifyLocalChange(),(e=this.onRotationChange)==null||e.call(this),(r=this.onScaleChange)==null||r.call(this),(i=this.onPositionChange)==null||i.call(this),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange),this.eventPositionChange&&this.eventDispatcher.dispatchEvent(this.eventPositionChange),this.eventScaleChange&&this.eventDispatcher.dispatchEvent(this.eventScaleChange)}get worldMatrix(){return this.updateWorldMatrix(),this._worldMatrix}updateWorldMatrix(e=!1){(this.localChange||e)&&(this.parent?(oa(this._localRot,this._localPos,this._localScale,this._worldMatrix),In(this._worldMatrix,this.parent.worldMatrix,this._worldMatrix)):oa(this._localRot,this._localPos,this._localScale,this._worldMatrix),this.localChange=!1)}updateChildTransform(){let e=this;if(e.localChange&&e.updateWorldMatrix(),e.object3D.numChildren>0)for(const r of e.object3D.entityChildren)r.transform.updateChildTransform()}lookTarget(e,r=g.UP){this.lookAt(this.transform.worldPosition,e,r)}lookAt(e,r,i=g.UP){this._targetPos||(this._targetPos=new g),this._targetPos.copyFrom(r),this.localPosition=e,V.helpMatrix.lookAt(e,r,i),V.helpMatrix.invert();var a=V.helpMatrix.decompose(Bt.QUATERNION);this.localRotQuat=X.CALCULATION_QUATERNION.copyFrom(a[1])}decomposeFromMatrix(e,r="eulerAngles"){let i=e.decompose(r),a=this.transform;return a.localRotQuat.copyFrom(i[1]),a.localRotQuat=a.localRotQuat,a.localPosition.copyFrom(i[0]),a.localPosition=a.localPosition,a.localScale.copyFrom(i[2]),a.localScale=a.localScale,this}cloneTo(e){e.transform.localPosition=this.localPosition,e.transform.localRotation=this.localRotation,e.transform.localScale=this.localScale}set x(e){var r;this._localPos.x!=e&&(this._localPos.x=e,$.setTranslate(this.index,this._localPos.x,this._localPos.y,this._localPos.z),this.notifyLocalChange(),(r=this.onPositionChange)==null||r.call(this),this.eventPositionChange&&this.eventDispatcher.dispatchEvent(this.eventPositionChange))}get x(){return this._localPos.x}set y(e){var r;this._localPos.y!=e&&(this._localPos.y=e,$.setTranslate(this.index,this._localPos.x,this._localPos.y,this._localPos.z),this.notifyLocalChange(),(r=this.onPositionChange)==null||r.call(this),this.eventPositionChange&&this.eventDispatcher.dispatchEvent(this.eventPositionChange))}get y(){return this._localPos.y}set z(e){var r;this._localPos.z!=e&&(this._localPos.z=e,$.setTranslate(this.index,this._localPos.x,this._localPos.y,this._localPos.z),this.notifyLocalChange(),(r=this.onPositionChange)==null||r.call(this),this.eventPositionChange&&this.eventDispatcher.dispatchEvent(this.eventPositionChange))}get z(){return this._localPos.z}set scaleX(e){var r;this._localScale.x!=e&&(this._localScale.x=e,$.setScale(this.index,this._localScale.x,this._localScale.y,this._localScale.z),this.notifyLocalChange(),(r=this.onScaleChange)==null||r.call(this),this.eventScaleChange&&this.eventDispatcher.dispatchEvent(this.eventScaleChange))}get scaleX(){return this._localScale.x}set scaleY(e){var r;this._localScale.y!=e&&(this._localScale.y=e,$.setScale(this.index,this._localScale.x,this._localScale.y,this._localScale.z),this.notifyLocalChange(),(r=this.onScaleChange)==null||r.call(this),this.eventScaleChange&&this.eventDispatcher.dispatchEvent(this.eventScaleChange))}get scaleY(){return this._localScale.y}set scaleZ(e){var r;this._localScale.z!=e&&(this._localScale.z=e,$.setScale(this.index,this._localScale.x,this._localScale.y,this._localScale.z),this.notifyLocalChange(),(r=this.onScaleChange)==null||r.call(this),this.eventScaleChange&&this.eventDispatcher.dispatchEvent(this.eventScaleChange))}get scaleZ(){return this._localScale.z}set rotationX(e){var r;this._localRot.x!=e&&(this._localRot.x=e,$.setRotation(this.index,this._localRot.x,this._localRot.y,this._localRot.z),this.notifyLocalChange(),(r=this.onRotationChange)==null||r.call(this),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange))}get rotationX(){return this._localRot.x}set rotationY(e){var r;this._localRot.y!=e&&(this._localRot.y=e,$.setRotation(this.index,this._localRot.x,this._localRot.y,this._localRot.z),this.notifyLocalChange(),(r=this.onRotationChange)==null||r.call(this),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange))}get rotationY(){return this._localRot.y}set rotationZ(e){var r;this._localRot.z!=e&&(this._localRot.z=e,$.setRotation(this.index,this._localRot.x,this._localRot.y,this._localRot.z),this.notifyLocalChange(),(r=this.onRotationChange)==null||r.call(this),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange))}get rotationZ(){return this._localRot.z}get worldPosition(){return this.localChange&&this.updateWorldMatrix(),this._worldMatrix.position}set localPosition(e){var r;this._localPos.copyFrom(e),$.setTranslate(this.index,e.x,e.y,e.z),this.notifyLocalChange(),(r=this.onPositionChange)==null||r.call(this),this.eventPositionChange&&this.eventDispatcher.dispatchEvent(this.eventPositionChange)}get localPosition(){return this._localPos}set localRotation(e){var r;$.setRotation(this.index,e.x,e.y,e.z),this._localRot.copyFrom(e),this.notifyLocalChange(),(r=this.onRotationChange)==null||r.call(this),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get localRotation(){return this._localRot}set localScale(e){var r;$.setScale(this.index,e.x,e.y,e.z),this._localScale.copyFrom(e),this.notifyLocalChange(),(r=this.onScaleChange)==null||r.call(this),this.eventScaleChange&&this.eventDispatcher.dispatchEvent(this.eventScaleChange)}get localScale(){return this._localScale}get localDetailScale(){return this._localDetailScale}set localDetailScale(e){this._localDetailScale=e,$.setContinueScale(this.index,e.x,e.y,e.z)}get localDetailRot(){return this._localDetailRot}set localDetailRot(e){this._localDetailRot=e,$.setContinueRotation(this.index,e.x,e.y,e.z)}get localDetailPos(){return this._localDetailPos}set localDetailPos(e){this._localDetailPos=e,$.setContinueTranslate(this.index,e.x,e.y,e.z)}beforeDestroy(e){this.parent&&this.parent.object3D&&this.parent.object3D.removeChild(this.object3D),super.beforeDestroy(e)}destroy(){super.destroy(),this.scene3D=null,this.eventPositionChange=null,this.eventRotationChange=null,this.eventScaleChange=null,this.onPositionChange=null,this.onRotationChange=null,this.onScaleChange=null,this._scene3d=null,this._parent=null,this._localPos=null,this._localRot=null,this._localRotQuat=null,this._localScale=null,this._forward=null,this._back=null,this._right=null,this._left=null,this._up=null,this._down=null,this.localChange=null,this._targetPos=null}};s(De,"LIMIT",1),s(De,"COMPONENT_NAME","UUTransform"),s(De,"COMPONENT_TYPE","Transform"),s(De,"POSITION_ONCHANGE","POSITION_ONCHANGE"),s(De,"ROTATION_ONCHANGE","ROTATION_ONCHANGE"),s(De,"SCALE_ONCHANGE","SCALE_ONCHANGE"),s(De,"PARENT_ONCHANGE","PARENT_ONCHANGE"),s(De,"CHILDREN_ONCHANGE","CHILDREN_ONCHANGE"),s(De,"ADD_ONCHANGE","ADD_ONCHANGE"),s(De,"LOCAL_ONCHANGE","LOCAL_ONCHANGE");let Dt=De;const Zt=class Zt{static genMeshBounds(t,e){let r=this.genMeshMinVector,i=this.genMeshMaxVector,a=this.genMeshVectorList8;e||(e=new Qe(g.ZERO,g.ZERO)),e.setFromMinMax(this.maxVector,this.minVector);let o=t.getComponents(se);for(const l of o)if(l&&l.geometry){let h=l.object3D.transform.worldMatrix;r.copy(l.geometry.bounds.min),i.copy(l.geometry.bounds.max),a[0].set(r.x,r.y,r.z),a[1].set(r.x,r.y,i.z),a[2].set(r.x,i.y,r.z),a[3].set(r.x,i.y,i.z),a[4].set(i.x,r.y,r.z),a[5].set(i.x,r.y,i.z),a[6].set(i.x,i.y,r.z),a[7].set(i.x,i.y,i.z);for(const u of a)h.transformPoint(u,u),e.expandByPoint(u)}return i.copyFrom(e.max),r.copyFrom(e.min),e.setFromMinMax(r,i),e}static transformBound(t,e,r){let i=this.genMeshMinVector.copyFrom(e.min),a=this.genMeshMaxVector.copyFrom(e.max),o=this.genMeshVectorList8;r||(r=new Qe(g.ZERO,g.ZERO)),r.setFromMinMax(this.maxVector,this.minVector),o[0].set(i.x,i.y,i.z),o[1].set(i.x,i.y,a.z),o[2].set(i.x,a.y,i.z),o[3].set(i.x,a.y,a.z),o[4].set(a.x,i.y,i.z),o[5].set(a.x,i.y,a.z),o[6].set(a.x,a.y,i.z),o[7].set(a.x,a.y,a.z);for(const l of o)t.transformPoint(l,l),r.expandByPoint(l);return a.copyFrom(r.max),i.copyFrom(r.min),r.setFromMinMax(i,a),r}};s(Zt,"maxVector",new g(Number.MAX_VALUE*.1,Number.MAX_VALUE*.1,Number.MAX_VALUE*.1)),s(Zt,"minVector",Zt.maxVector.clone().multiplyScalar(-1)),s(Zt,"genMeshMaxVector",g.ZERO.clone()),s(Zt,"genMeshMinVector",g.ZERO.clone()),s(Zt,"genMeshVectorList8",[new g,new g,new g,new g,new g,new g,new g,new g]);let si=Zt;class Bn extends Fr{constructor(){super();s(this,"name","");s(this,"_instanceID","");s(this,"_numChildren");s(this,"transform");s(this,"renderNode");s(this,"entityChildren");s(this,"components");s(this,"waitDisposeComponents");s(this,"_bound");s(this,"_boundWorld");s(this,"_isBoundChange",!0);s(this,"_dispose",!1);this.entityChildren=[],this.components=new Map,this._instanceID=Ps().toString(),this.waitDisposeComponents=[]}get instanceID(){return this._instanceID}getObjectByName(e){if(e.indexOf("/")>=0){let r=e.split("/"),i=this;for(;r.length>0&&i;){let a=r.shift();if(i=i.getChildByName(a,!1),!i)return null}return i}else return this.getChildByName(e,!1)}get numChildren(){return this._numChildren}addChild(e){if(e==null)throw new Error("child is null!");if(e===this)throw new Error("child is self!");return this.entityChildren.indexOf(e)==-1?(e.removeFromParent(),e.transform.parent=this.transform,this.entityChildren.push(e),this._numChildren=this.entityChildren.length,e):null}removeChild(e){if(e===null)return;if(e===this)throw new Error("add child is self!");let r=this.entityChildren.indexOf(e);r!=-1&&(this.entityChildren.splice(r,1),e.transform.parent=null,this._numChildren=this.entityChildren.length)}removeAllChild(){for(;this.numChildren>0;)this.removeChild(this.entityChildren[0])}removeSelf(){return this.removeFromParent()}removeChildByIndex(e){e>=0&&e<this.entityChildren.length?this.removeChild(this.entityChildren[e]):console.error("remove child by index , index out of range")}hasChild(e){return this.entityChildren.indexOf(e)!=-1}removeFromParent(){let e=this.transform.parent;return e&&e.object3D&&e.object3D.removeChild(this),this}getChildByIndex(e){let r=null;return e<this.entityChildren.length&&(r=this.entityChildren[e]),r}getChildByName(e,r=!0){let i=null;for(const a of this.entityChildren){if(a.name==e)return i=a,i;if(r&&(i=a.getChildByName(e,r),i))return i}return i}update(){}instantiate(){return null}onTransformLocalChange(e){this._isBoundChange=!0}get bound(){return(this._isBoundChange||!this._bound)&&this.updateBound(),this._boundWorld}set bound(e){this._bound=e,this._boundWorld=this._bound.clone(),this._isBoundChange=!0}updateBound(){return this._bound||(this._bound=new Qe,this._boundWorld=this._bound.clone(),this._isBoundChange=!0),this._isBoundChange&&(si.transformBound(this.transform.worldMatrix,this._bound,this._boundWorld),this._isBoundChange=!1),this._boundWorld}waitUpdate(){this._dispose?(this.transform.parent&&this.transform.parent.object3D.removeChild(this),this.components.forEach((e,r)=>{e.enable=!1,e.beforeDestroy(),e.destroy()}),this.components.clear()):ae.waitStartComponent.forEach((e,r)=>{for(;e.length>0;){const i=e.shift();i.__start(),ae.waitStartComponent.delete(i.object3D)}})}destroy(e){this._dispose||(this.components.forEach(r=>{r.beforeDestroy(e)}),this.components.forEach(r=>{r.destroy(e)}),this.components.clear(),this.entityChildren.forEach(r=>{r.destroy(e)}),this.removeAllChild(),this.transform.parent=null,this._dispose=!0,super.destroy())}}var Dn=Object.defineProperty,Rn=Object.getOwnPropertyDescriptor,Mn=(n,t,e,r)=>{for(var i=r>1?void 0:r?Rn(t,e):t,a=n.length-1,o;a>=0;a--)(o=n[a])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&Dn(t,e,i),i};let ee=class extends Bn{constructor(){super();s(this,"_isScene3D");s(this,"prefabRef");s(this,"serializeTag");this.transform=this.addComponent(Dt),this.transform.eventDispatcher.addEventListener(Dt.LOCAL_ONCHANGE,this.onTransformLocalChange,this)}get isScene3D(){return this._isScene3D}forChild(t){this.entityChildren.forEach(e=>{t(e),e.forChild(t)})}addComponent(t,e){if(!this.components.has(t)){let r=new t;return r.object3D=this,this.components.set(t,r),r.__init(e),ae.appendWaitStart(r),r}return null}getOrAddComponent(t){let e=this.components.get(t);return e||(e=this.addComponent(t)),e}removeComponent(t){if(this.components.has(t)){let e=this.components.get(t);ae.removeWaitStart(this,e),this.components.delete(t),e.__stop(),e.beforeDestroy(),e.destroy()}}hasComponent(t){return this.components.has(t)}getComponent(t){return this.components.get(t)}getComponentFromParent(t){return this.parent?this.parent.object3D.getComponent(t)||this.parent.object3D.getComponentFromParent(t):null}getComponentsInChild(t){let e=[],r=this.components.get(t);r&&e.push(r);for(let i=0;i<this.entityChildren.length;i++){let a=this.entityChildren[i].getComponentsInChild(t);e.push(...a)}return e}getComponents(t,e,r){e||(e=[]);let i=this.getComponent(t);i&&(i.enable||r)&&e.push(i);for(let a=0,o=this.entityChildren.length;a<o;a++){let l=this.entityChildren[a];l&&l instanceof ee&&l.getComponents(t,e,r)}return e}getComponentsExt(t,e,r){e||(e=[]);let i=this.components.get(t);if(i&&(i.enable||r))e.push(i);else for(const a of this.entityChildren)a instanceof ee&&a.getComponentsExt(t,e,r);return e}getComponentsByProperty(t,e,r=!0,i,a){i||(i=[]);let o;for(const l of this.components.values())l&&(l.enable||a)&&l[t]===e&&(i.push(l),o=!0);if(!(o&&r))for(const l of this.entityChildren)l instanceof ee&&l.getComponentsByProperty(t,e,r,i,a);return i}clone(){return this.instantiate()}instantiate(){let t=new ee;return t.name=this.name,t.serializeTag=this.serializeTag,t.prefabRef=this.prefabRef,this.entityChildren.forEach((e,r)=>{let i=e.instantiate();t.addChild(i)}),this.components.forEach((e,r)=>{e.cloneTo(t)}),t}get localPosition(){return this.transform.localPosition}set localPosition(t){this.transform.localPosition=t}get localRotation(){return this.transform.localRotation}set localRotation(t){this.transform.localRotation=t}get localScale(){return this.transform.localScale}set localScale(t){this.transform.localScale=t}get localQuaternion(){return this.transform.localRotQuat}set localQuaternion(t){this.transform.localRotQuat=t}notifyChange(){this.transform.notifyChange()}get parent(){return this.transform.parent}get parentObject(){return this.transform.parent.object3D}set x(t){this.transform.x=t}get x(){return this.transform.x}set y(t){this.transform.y=t}get y(){return this.transform.y}set z(t){this.transform.z=t}get z(){return this.transform.z}set scaleX(t){this.transform.scaleX=t}get scaleX(){return this.transform.scaleX}set scaleY(t){this.transform.scaleY=t}get scaleY(){return this.transform.scaleY}set scaleZ(t){this.transform.scaleZ=t}get scaleZ(){return this.transform.scaleZ}set rotationX(t){this.transform.rotationX=t}get rotationX(){return this.transform.rotationX}set rotationY(t){this.transform.rotationY=t}get rotationY(){return this.transform.rotationY}set rotationZ(t){this.transform.rotationZ=t}get rotationZ(){return this.transform.rotationZ}fixedUpdate(){}lateUpdate(){}traverse(t){t(this);for(let e=0,r=this.entityChildren.length;e<r;e++){let i=this.entityChildren[e];i instanceof ee&&i.traverse(t)}}destroy(t){this.transform.eventDispatcher.removeEventListener(Dt.LOCAL_ONCHANGE,this.onTransformLocalChange,this),super.destroy(t)}};ee=Mn([Pn],ee);function Pn(n,t){return class extends ee{set active(e){this.transform.enable=e>0}get active(){return this.transform.enable?1:0}get materialColor(){var e,r;return(r=(e=this.getComponent(se))==null?void 0:e.material)==null?void 0:r.shader.getDefaultColorShader().baseColor}set materialColor(e){var i;let r=(i=this.getComponent(se))==null?void 0:i.material;r&&(r.shader.getDefaultColorShader().baseColor=e)}notifyMaterialColorChange(e,r){var i,a;(a=(i=this.getComponent(se).materials)==null?void 0:i[e])==null||a.shader.getDefaultColorShader().uniforms[r].onChange()}}}class ye{static createCamera3DObject(t,e){return this.createCamera3D(null,t,e)}static createCamera3D(t,e,r){return t||(t=new ee),e&&e.addChild(t),r&&(t.name=r),t.getOrAddComponent(Fs)}static UnProjection(t,e,r=1,i){let a=new g(t,e,0),o=1,l=g.HELP_0,h=w.canvas.offsetLeft,u=w.canvas.offsetTop,c=w.canvas.clientWidth,d=w.canvas.clientHeight;l.x=((a.x-h)*o/c-.5)*2,l.y=-((a.y-u)*o/d-.5)*2,l.z=r;let f=new g(0,0,0),p=V.helpMatrix2;p.copyFrom(i.projectionMatrix),p.invert();let A=V.helpMatrix;return A.identity(),A.multiply(p),A.multiply(i.transform.worldMatrix),A.perspectiveMultiplyPoint3(l,f),f}static Projection(t,e,r){let i=r||new g(0,0,0),a=V.helpMatrix;a.copyFrom(e.viewMatrix),a.multiply(e.projectionMatrix),a.perspectiveMultiplyPoint3(t,i);let o=w.canvas.clientWidth/2,l=w.canvas.clientHeight/2;return i.x=i.x*o+o,i.y=l-i.y*l,i}static UnProjection2(t,e,r,i,a){let o=a||new g(0,0,0),l=V.helpMatrix;l.copyFrom(i.pvMatrixInv);let h=w.canvas.clientWidth/2,u=w.canvas.clientHeight/2;return o.x=(t-h)/h,o.y=(u-e)/u,o.z=r,l.perspectiveMultiplyPoint3(o,o),o}}const Nt=class Nt{static init(){this.directionLightList=new Map,this.pointLightList=new Map,this.shadowLights=new Map}static createBuffer(t){if(!this.shadowLights.has(t.scene)){let e=new Float32Array(16);this.shadowLights.set(t.scene,e)}}static getShadowLightList(t){if(!t.transform.view3D)return null;if(t.lightData.lightType==be.DirectionLight){let e=this.directionLightList.get(t.transform.view3D.scene);return e||(e=[],this.directionLightList.set(t.transform.view3D.scene,e)),e}else if(t.lightData.lightType==be.PointLight){let e=this.pointLightList.get(t.transform.view3D.scene);return e||(e=[],this.pointLightList.set(t.transform.view3D.scene,e)),e}else if(t.lightData.lightType==be.SpotLight){let e=this.pointLightList.get(t.transform.view3D.scene);return e||(e=[],this.pointLightList.set(t.transform.view3D.scene,e)),e}}static getShadowLightWhichScene(t,e){if(e==be.DirectionLight){let r=this.directionLightList.get(t);return r||(r=[],this.directionLightList.set(t,r)),r}else if(e==be.PointLight){let r=this.pointLightList.get(t);return r||(r=[],this.pointLightList.set(t,r)),r}}static getDirectShadowLightWhichScene(t){let e=this.directionLightList.get(t);return e||(e=[],this.directionLightList.set(t,e)),e}static getPointShadowLightWhichScene(t){let e=this.pointLightList.get(t);return e||(e=[],this.pointLightList.set(t,e)),e}static addShadowLight(t){if(!t.transform.view3D)return null;let e=t.transform.view3D.scene;if(t.lightData.lightType==be.DirectionLight){let r=this.directionLightList.get(e);if(r||(r=[],this.directionLightList.set(e,r)),!t.shadowCamera){t.shadowCamera=ye.createCamera3DObject(null,"shadowCamera"),t.shadowCamera.isShadowCamera=!0;let i=-1e3;t.shadowCamera.orthoOffCenter(i,-i,i,-i,1,1e4)}return r.indexOf(t)==-1&&r.push(t),r}else if(t.lightData.lightType==be.PointLight||t.lightData.lightType==be.SpotLight){let r=this.pointLightList.get(e);return r&&r.length>=8||(r||(r=[],this.pointLightList.set(e,r)),r.indexOf(t)==-1&&r.push(t)),r}}static removeShadowLight(t){if(t.lightData.castShadowIndex=-1,!t.transform.view3D)return null;if(t.lightData.lightType==be.DirectionLight){let e=this.directionLightList.get(t.transform.view3D.scene);if(e){let r=e.indexOf(t);r!=-1&&e.splice(r,1)}return t.lightData.castShadowIndex=-1,e}else if(t.lightData.lightType==be.PointLight||t.lightData.lightType==be.SpotLight){let e=this.pointLightList.get(t.transform.view3D.scene);if(e){let r=e.indexOf(t);r!=-1&&e.splice(r,1)}return t.lightData.castShadowIndex=-1,e}}static update(t){let e=ge.getCameraGroup(t.camera),r=this.shadowLights.get(t.scene),i=Nt.directionLightList.get(t.scene),a=Nt.pointLightList.get(t.scene),o=0,l=0,h=0,u=0;if(r.fill(0),i){let c=0;for(let d=0;d<i.length;d++){const f=i[d];r[d]=f.lightData.index,f.lightData.castShadowIndex=c++}l=i.length}if(e.dirShadowStart=o,e.dirShadowEnd=l,a){h=l;let c=0;for(let d=h;d<a.length;d++){const f=a[d];r[d]=f.lightData.index,f.lightData.castShadowIndex=c++}u=h+a.length}e.pointShadowStart=h,e.pointShadowEnd=u,e.shadowLights=r}};s(Nt,"maxNumDirectionShadow",8),s(Nt,"maxNumPointShadow",8),s(Nt,"directionLightList"),s(Nt,"pointLightList"),s(Nt,"shadowLights");let st=Nt;class Da{static getGlobalDataBindGroupLayout(){if(this._globalDataBindGroupLayout)return this._globalDataBindGroupLayout;let t=[];return t.push({binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}),t.push({binding:1,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}),this._globalDataBindGroupLayout=w.device.createBindGroupLayout({entries:t}),this._globalDataBindGroupLayout}}s(Da,"_globalDataBindGroupLayout");class Un{constructor(t){s(this,"uuid");s(this,"usage");s(this,"globalBindGroup");s(this,"uniformGPUBuffer");s(this,"matrixBindGroup");s(this,"uniformByteLength");s(this,"matrixesByteLength");s(this,"shadowMatrixRaw",new Float32Array(8*16));s(this,"csmMatrixRaw",new Float32Array(Rt.Cascades*16));s(this,"csmShadowBias",new Float32Array(4));s(this,"shadowLights",new Float32Array(16));s(this,"dirShadowStart",0);s(this,"dirShadowEnd",0);s(this,"pointShadowStart",0);s(this,"pointShadowEnd",0);this.uuid=Ct(),this.usage=GPUBufferUsage.UNIFORM|GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,this.uniformGPUBuffer=new Yi(8192),this.uniformGPUBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.matrixBindGroup=t,this.createBindGroup()}createBindGroup(){this.uniformByteLength=this.uniformGPUBuffer.memory.shareDataBuffer.byteLength,this.matrixesByteLength=V.blockBytes*V.maxCount,this.globalBindGroup=w.device.createBindGroup({label:"global_bindGroupLayout",layout:Da.getGlobalDataBindGroupLayout(),entries:[{binding:0,resource:{buffer:this.uniformGPUBuffer.buffer,offset:0,size:this.uniformByteLength}},{binding:1,resource:{buffer:this.matrixBindGroup.matrixBufferDst.buffer,offset:0,size:this.matrixesByteLength}}]})}setCamera(t){this.uniformGPUBuffer.setMatrix("_projectionMatrix",t.projectionMatrix),this.uniformGPUBuffer.setMatrix("_viewMatrix",t.viewMatrix),this.uniformGPUBuffer.setMatrix("_cameraWorldMatrix",t.transform.worldMatrix),this.uniformGPUBuffer.setMatrix("pvMatrixInv",t.projectionMatrixInv);let e=st.getDirectShadowLightWhichScene(t.transform.scene3D);this.csmShadowBias.fill(1e-4),this.shadowMatrixRaw.fill(0),this.csmMatrixRaw.fill(0);for(let o=0;o<8;o++)if(o<e.length){let l=e[o].shadowCamera;this.shadowMatrixRaw.set(l.pvMatrix.rawData,o*16)}else this.shadowMatrixRaw.set(t.transform.worldMatrix.rawData,o*16);this.uniformGPUBuffer.setFloat32Array("shadowMatrix",this.shadowMatrixRaw);let r=y.setting.shadow.shadowSize;if(t.enableCSM&&e[0])for(let o=0;o<Rt.Cascades;o++){let l=t.csm.children[o].shadowCamera;this.csmMatrixRaw.set(l.pvMatrix.rawData,o*16),this.csmShadowBias[o]=t.getCSMShadowBias(o,r)}this.uniformGPUBuffer.setFloat32Array("csmShadowBias",this.csmShadowBias),this.uniformGPUBuffer.setFloat32Array("csmMatrix",this.csmMatrixRaw),this.uniformGPUBuffer.setFloat32Array("shadowLights",this.shadowLights),this.uniformGPUBuffer.setVector3("CameraPos",t.transform.worldPosition),this.uniformGPUBuffer.setFloat("frame",ie.frame),this.uniformGPUBuffer.setFloat("time",ie.frame),this.uniformGPUBuffer.setFloat("delta",ie.delta),this.uniformGPUBuffer.setFloat("shadowBias",t.getShadowBias(r)),this.uniformGPUBuffer.setFloat("skyExposure",y.setting.sky.skyExposure),this.uniformGPUBuffer.setFloat("renderPassState",y.setting.render.renderPassState),this.uniformGPUBuffer.setFloat("quadScale",y.setting.render.quadScale),this.uniformGPUBuffer.setFloat("hdrExposure",y.setting.render.hdrExposure),this.uniformGPUBuffer.setInt32("renderState_left",y.setting.render.renderState_left),this.uniformGPUBuffer.setInt32("renderState_right",y.setting.render.renderState_right),this.uniformGPUBuffer.setFloat("renderState_split",y.setting.render.renderState_split);let i=y.inputSystem.mouseX*w.pixelRatio,a=y.inputSystem.mouseY*w.pixelRatio;this.uniformGPUBuffer.setFloat("mouseX",i),this.uniformGPUBuffer.setFloat("mouseY",a),this.uniformGPUBuffer.setFloat("windowWidth",w.windowWidth),this.uniformGPUBuffer.setFloat("windowHeight",w.windowHeight),this.uniformGPUBuffer.setFloat("near",t.near),this.uniformGPUBuffer.setFloat("far",t.far),this.uniformGPUBuffer.setFloat("pointShadowBias",y.setting.shadow.pointShadowBias),this.uniformGPUBuffer.setFloat("shadowMapSize",r),this.uniformGPUBuffer.setFloat("shadowSoft",y.setting.shadow.shadowSoft),this.uniformGPUBuffer.setFloat("enableCSM",t.enableCSM?1:0),this.uniformGPUBuffer.setFloat("csmMargin",y.setting.shadow.csmMargin),this.uniformGPUBuffer.setInt32("nDirShadowStart",this.dirShadowStart),this.uniformGPUBuffer.setInt32("nDirShadowEnd",this.dirShadowEnd),this.uniformGPUBuffer.setInt32("nPointShadowStart",this.pointShadowStart),this.uniformGPUBuffer.setInt32("nPointShadowEnd",this.pointShadowEnd),this.uniformGPUBuffer.setInt32("empty1",0),this.uniformGPUBuffer.setInt32("empty2",0),this.uniformGPUBuffer.setInt32("empty3",0),this.uniformGPUBuffer.setVector4Array("frustumPlanes",t.frustum.planes),this.uniformGPUBuffer.apply()}setShadowCamera(t){this.uniformGPUBuffer.setMatrix("_projectionMatrix",t.projectionMatrix),this.uniformGPUBuffer.setMatrix("_viewMatrix",t.viewMatrix),this.uniformGPUBuffer.setMatrix("_pvMatrix",t.pvMatrix),this.uniformGPUBuffer.setMatrix("pvMatrixInv",t.projectionMatrixInv),this.csmShadowBias.fill(1e-4),this.shadowMatrixRaw.fill(0),this.csmMatrixRaw.fill(0),this.uniformGPUBuffer.setFloat32Array("shadowCamera",this.shadowMatrixRaw),this.uniformGPUBuffer.setFloat32Array("csmShadowBias",this.csmShadowBias),this.uniformGPUBuffer.setFloat32Array("csmMatrix",this.csmMatrixRaw),this.uniformGPUBuffer.setFloat32Array("shadowLights",this.shadowLights),this.uniformGPUBuffer.setVector3("CameraPos",t.transform.worldPosition),this.uniformGPUBuffer.setFloat("frame",ie.frame),this.uniformGPUBuffer.setFloat("time",ie.frame),this.uniformGPUBuffer.setFloat("delta",ie.delta),this.uniformGPUBuffer.setFloat("shadowBias",y.setting.shadow.shadowBias),this.uniformGPUBuffer.setFloat("skyExposure",y.setting.sky.skyExposure),this.uniformGPUBuffer.setFloat("renderPassState",y.setting.render.renderPassState),this.uniformGPUBuffer.setFloat("quadScale",y.setting.render.quadScale),this.uniformGPUBuffer.setFloat("hdrExposure",y.setting.render.hdrExposure),this.uniformGPUBuffer.setInt32("renderState_left",y.setting.render.renderState_left),this.uniformGPUBuffer.setInt32("renderState_right",y.setting.render.renderState_right),this.uniformGPUBuffer.setFloat("renderState_split",y.setting.render.renderState_split);let e=y.inputSystem.mouseX*w.pixelRatio,r=y.inputSystem.mouseY*w.pixelRatio;this.uniformGPUBuffer.setFloat("mouseX",e),this.uniformGPUBuffer.setFloat("mouseY",r),this.uniformGPUBuffer.setFloat("windowWidth",w.windowWidth),this.uniformGPUBuffer.setFloat("windowHeight",w.windowHeight),this.uniformGPUBuffer.setFloat("near",t.near),this.uniformGPUBuffer.setFloat("far",t.far),this.uniformGPUBuffer.setFloat("pointShadowBias",y.setting.shadow.pointShadowBias),this.uniformGPUBuffer.setFloat("shadowMapSize",y.setting.shadow.shadowSize),this.uniformGPUBuffer.setFloat("shadowSoft",y.setting.shadow.shadowSoft),this.uniformGPUBuffer.setFloat("enableCSM",0),this.uniformGPUBuffer.setFloat("csmMargin",y.setting.shadow.csmMargin),this.uniformGPUBuffer.setInt32("nDirShadowStart",this.dirShadowStart),this.uniformGPUBuffer.setInt32("nDirShadowEnd",this.dirShadowEnd),this.uniformGPUBuffer.setInt32("nPointShadowStart",this.pointShadowStart),this.uniformGPUBuffer.setInt32("nPointShadowEnd",this.pointShadowEnd),this.uniformGPUBuffer.apply()}setShadowLight(){}}const ct=class ct{constructor(t,e=0,r=null,i=0){s(this,"entities");s(this,"box");s(this,"subTrees",[]);s(this,"parent");s(this,"level");s(this,"index");s(this,"uuid");s(this,"__rayCastTempVector",new g);this.parent=r,this.box=t.clone(),this.level=i,this.index=e,this.uuid=i+"_"+e,this.entities=new Map}tryInsertEntity(t){let e=t.renderer.object3D.bound;if(this.level==0||this.box.containsBox(e)){this.subTrees.length==0&&this.level<ct.maxSplitLevel&&this.splitTree();let r;if(this.subTrees.length>0){for(let i of this.subTrees)if(i.tryInsertEntity(t)){r=!0;break}}return r||t.enterNode(this),!0}return!1}splitTree(){if(this.subTrees.length==0){const t=ct._v1,e=this.box.extents.clone();let r=this.level+1,i=0;for(let a=0;a<2;a++)for(let o=0;o<2;o++)for(let l=0;l<2;l++){const h=new Qe;this.box.min.add(t.set(a,o,l).multiply(e),h.min),h.min.add(e,h.max),h.setFromMinMax(h.min,h.max);let u=new ct(h,i++,this,r);this.subTrees.push(u)}}}rayCasts(t,e){if(this.level==0||t.intersectBox(this.box,this.__rayCastTempVector)){this.entities.size>0&&e.push(...this.entities.values());for(let r of this.subTrees)r.rayCasts(t,e);return!0}return!1}frustumCasts(t,e){if(this.level==0||t.containsBox2(this.box)>0){if(this.entities.size>0)for(const r of this.entities.values())(this.level>ct.autoSplitLevel||t.containsBox2(r.renderer.object3D.bound)>0)&&e.push(r);for(let r of this.subTrees)r.frustumCasts(t,e);return!0}return!1}getRenderNode(t,e){if(this.level==0||t.containsBox2(this.box)>0){if(this.entities.size>0)for(const r of this.entities.values())(this.level>ct.autoSplitLevel||t.containsBox2(r.renderer.object3D.bound)>0)&&(r.renderer.renderOrder<3e3?e.opaqueList.push(r.renderer):r.renderer.renderOrder>=3e3&&e.transparentList.push(r.renderer));for(let r of this.subTrees)r.getRenderNode(t,e);return!0}return!1}boxCasts(t,e){if(t.intersectsBox(this.box)){this.entities.size>0&&e.push(...this.entities.values());for(let r of this.subTrees)r.boxCasts(t,e);return!0}return!1}clean(){for(let t of this.entities.values())t.leaveNode();return this.entities.clear(),this}};s(ct,"_v1",new g),s(ct,"_v2",new g),s(ct,"maxSplitLevel",6),s(ct,"autoSplitLevel",3);let na=ct;class Ln{constructor(){s(this,"_pool",[]);s(this,"_worldPosition",new g);s(this,"_viewPosition",new g);s(this,"_zSortList",[])}pop(){return this._pool.pop()||{}}recycle(){for(let t of this._zSortList)t.z=0,t.userData=null,t.obj3d=null,this._pool.push(t);this._zSortList.length=0}sort(t,e,r,i){this._zSortList=[];for(let a of e){let o=this.pop();o.userData=a,o.obj3d=r(a),o.z=this.worldToCameraDepth(o.obj3d,t),this._zSortList.push(o)}this._zSortList.sort((a,o)=>a.z-o.z>0?1:-1),i||(i=[]);for(let a of this._zSortList)i.push(a.userData);return this.recycle(),i}worldToCameraDepth(t,e){e||(e=t.transform.view3D.camera);let r=0;return e&&(this._worldPosition.copyFrom(t.transform.worldPosition),e.worldToScreenPoint(this._worldPosition,this._viewPosition),r=this._viewPosition.z),r}}let On=new Ln;var Ti=(n=>(n[n.None=2]="None",n[n.StaticBatch=4]="StaticBatch",n[n.DynamicBatch=8]="DynamicBatch",n))(Ti||{});class as{static addMask(t,e){return t|e}static removeMask(t,e){return t&~e}static hasMask(t,e){return(t&e)!=0}}var Y=(n=>(n[n.COLOR=1]="COLOR",n[n.NORMAL=2]="NORMAL",n[n.POSITION=4]="POSITION",n[n.GRAPHIC=8]="GRAPHIC",n[n.GI=16]="GI",n[n.Cluster=32]="Cluster",n[n.SHADOW=64]="SHADOW",n[n.POINT_SHADOW=128]="POINT_SHADOW",n[n.POST=256]="POST",n[n.DEPTH=512]="DEPTH",n[n.REFLECTION=1024]="REFLECTION",n))(Y||{});class te{}s(te,"GLTF_NODE_INDEX_PROPERTY"),s(te,"BASE_COLOR_UNIFORM","u_baseColorFactor"),s(te,"BASE_COLOR_TEXTURE_UNIFORM","u_baseColorSampler"),s(te,"METALROUGHNESS_UNIFORM","u_metallicRoughnessValues"),s(te,"METALROUGHNESS_TEXTURE_UNIFORM","u_metallicRoughnessSampler"),s(te,"NORMAL_TEXTURE_UNIFORM","u_normalSampler"),s(te,"NORMAL_SCALE_UNIFORM","u_normalScale"),s(te,"EMISSIVE_TEXTURE_UNIFORM","u_emissiveSampler"),s(te,"EMISSIVE_FACTOR_UNIFORM","u_emissiveFactor"),s(te,"OCCLUSION_TEXTURE_UNIFORM","u_occlusionSampler"),s(te,"OCCLUSION_FACTOR_UNIFORM","u_occlusionFactor"),s(te,"MAX_MORPH_TARGETS",8),s(te,"MORPH_POSITION_PREFIX","a_morphPositions_"),s(te,"MORPH_NORMAL_PREFIX","a_morphNormals_"),s(te,"MORPH_TANGENT_PREFIX","a_morphTangents_"),s(te,"MORPH_WEIGHT_UNIFORM","u_morphWeights"),s(te,"SCENE_ROOT_SKELETON","SCENE_ROOT"),s(te,"IDENTITY_INVERSE_BIND_MATRICES","IDENTITY_IBM"),s(te,"JOINT_MATRICES_UNIFORM","u_jointMatrix"),s(te,"ALPHA_CUTOFF_UNIFORM","u_alphaCutoff");var R=(n=>(n.position="position",n.normal="normal",n.uv="uv",n.TANGENT="TANGENT",n.TEXCOORD_1="TEXCOORD_1",n.TEXCOORD_2="TEXCOORD_2",n.TEXCOORD_3="TEXCOORD_3",n.TEXCOORD_4="TEXCOORD_4",n.TEXCOORD_5="TEXCOORD_5",n.TEXCOORD_6="TEXCOORD_6",n.TEXCOORD_7="TEXCOORD_7",n.color="color",n.joints0="joints0",n.joints1="joints1",n.weights0="weights0",n.weights1="weights1",n.weight="weight",n.indices="indices",n.vIndex="vIndex",n.a_morphPositions_0="a_morphPositions_0",n.all="all",n))(R||{}),j=(n=>(n[n.NONE=0]="NONE",n[n.ABOVE=1]="ABOVE",n[n.ALPHA=2]="ALPHA",n[n.NORMAL=3]="NORMAL",n[n.ADD=4]="ADD",n[n.BELOW=5]="BELOW",n[n.ERASE=6]="ERASE",n[n.MUL=7]="MUL",n[n.SCREEN=8]="SCREEN",n[n.DIVD=9]="DIVD",n[n.SOFT_ADD=10]="SOFT_ADD",n))(j||{}),Nn=(n=>(n[n.src_a=0]="src_a",n[n.dest_a=1]="dest_a",n))(Nn||{});class Fn{static getBlend(t){let e={color:{srcFactor:"src-alpha",dstFactor:"one"},alpha:{srcFactor:"one",dstFactor:"one"}};switch(t){case 0:e.color.srcFactor="one",e.color.dstFactor="zero",e.color.operation="add";break;case 1:e.color.srcFactor="one-minus-src-alpha",e.color.dstFactor="dst-alpha",e.color.operation="add";break;case 4:e.color.srcFactor="one",e.color.dstFactor="one",e.color.operation="add",e.alpha.srcFactor="one",e.alpha.dstFactor="one",e.alpha.operation="add";break;case 2:e.color.srcFactor="src-alpha",e.color.dstFactor="one-minus-src-alpha";break;case 5:e.color.srcFactor="one-minus-src-alpha",e.color.dstFactor="one",e.color.operation="add";break;case 6:e.color.srcFactor="zero",e.color.dstFactor="one-minus-src-alpha",e.color.operation="add";break;case 7:e.color.srcFactor="dst",e.color.dstFactor="one-minus-src-alpha",e.color.operation="add";break;case 3:e.color.srcFactor="src-alpha",e.color.dstFactor="one-minus-src-alpha",e.color.operation="add";break;case 10:e.color.srcFactor="one",e.color.dstFactor="one",e.color.operation="max",e.alpha.srcFactor="one",e.alpha.dstFactor="one",e.alpha.operation="add";break;case 8:e.color.srcFactor="one",e.color.dstFactor="one-minus-src",e.color.operation="add";break}return e}}const tt=class tt{static getMipmapPipeline(t){let e=t.format,r=w.device,i=tt.pipelineCache[t.format],a;if(!i){a=r.createShaderModule({code:tt.mipmapShader});let o=r.createBindGroupLayout({entries:[{binding:0,visibility:t.visibility,sampler:t.samplerBindingLayout},{binding:1,visibility:t.visibility,texture:t.textureBindingLayout}]}),l=w.device.createPipelineLayout({bindGroupLayouts:[o]});i=b.createPipeline({layout:l,vertex:{module:a,entryPoint:"vertexMain"},fragment:{module:a,entryPoint:"fragmentMain",targets:[{format:e}]}}),tt.pipelineCache[e]=i}return i}static getMipmapCount(t){let e=t.width,r=t.height,i=Math.max(e,r);return 1+Math.log2(i)|0}static webGPUGenerateMipmap(t){let e=w.device,r=t.textureDescriptor;if(!tt.pipeline){const l=e.createShaderModule({code:`
        var<private> pos : array<vec2<f32>, 4> = array<vec2<f32>, 4>(
          vec2<f32>(-1.0, 1.0), vec2<f32>(1.0, 1.0),
          vec2<f32>(-1.0, -1.0), vec2<f32>(1.0, -1.0));

        struct VertexOutput {
          @builtin(position) position : vec4<f32>,
          @location(0) texCoord : vec2<f32>
        };

        @vertex
        fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
          var output : VertexOutput;
          output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);
          output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
          return output;
        }

        @binding(0) @group(0) var imgSampler : sampler;
        @binding(1) @group(0) var img : texture_2d<f32>;

        @fragment
        fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {
          var outColor: vec4<f32> = textureSampleLevel(img, imgSampler, texCoord , 0.0 );
          return outColor;
        }
      `});tt.pipeline=e.createRenderPipeline({layout:"auto",vertex:{module:l,entryPoint:"vertexMain"},fragment:{module:l,entryPoint:"fragmentMain",targets:[{format:r.format}]},primitive:{topology:"triangle-strip",stripIndexFormat:"uint32"}})}let i;t.format=="rgba16float"?i=e.createSampler({minFilter:"nearest",magFilter:"linear"}):i=e.createSampler({minFilter:Wt.linear,magFilter:Wt.linear});let a=t.getGPUTexture().createView({baseMipLevel:0,mipLevelCount:1});const o=b.beginCommandEncoder();for(let l=1;l<r.mipLevelCount;++l){const h=t.getGPUTexture().createView({baseMipLevel:l,mipLevelCount:1}),u=o.beginRenderPass({colorAttachments:[{view:h,clearValue:[0,0,0,0],loadOp:"clear",storeOp:"store"}]}),c=e.createBindGroup({layout:tt.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:i},{binding:1,resource:a}]});u.setPipeline(tt.pipeline),u.setBindGroup(0,c),u.draw(4),u.end(),a=h}b.endCommandEncoder(o)}};s(tt,"mipmapShader",`
    var<private> pos : array<vec2<f32>, 3> = array<vec2<f32>, 3>(
        vec2<f32>(-1.0, -1.0), vec2<f32>(-1.0, 3.0), vec2<f32>(3.0, -1.0));
      struct VertexOutput {
        @builtin(position) position : vec4<f32>;
        @location(0) texCoord : vec2<f32>;
      };
      @vertex
      fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
        var output : VertexOutput;
        output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);
        output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
        return output;
      }
      @binding(0) @group(0) var imgSampler : sampler;
      @binding(1) @group(0) var img : texture_2d<f32>;
      @fragment
      fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {
        var outColor: vec4<f32> = textureSample(img, imgSampler, texCoord);
        return outColor ;
      }`),s(tt,"pipelineCache",{}),s(tt,"pipeline");let Mr=tt;class Ge{constructor(t=32,e=32,r=1){s(this,"name");s(this,"url");s(this,"gpuTexture");s(this,"pid");s(this,"view");s(this,"gpuSampler");s(this,"gpuSampler_comparison");s(this,"format");s(this,"usage");s(this,"width",4);s(this,"height",4);s(this,"depthOrArrayLayers",1);s(this,"numberLayer",1);s(this,"viewDescriptor");s(this,"textureDescriptor");s(this,"visibility",GPUShaderStage.COMPUTE|GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT);s(this,"textureBindingLayout",{viewDimension:"2d",multisampled:!1});s(this,"samplerBindingLayout",{type:"filtering"});s(this,"sampler_comparisonBindingLayout",{type:"comparison"});s(this,"flipY");s(this,"isVideoTexture");s(this,"isHDRTexture");s(this,"_useMipmap",!1);s(this,"_sourceImageData");s(this,"_addressModeU");s(this,"_addressModeV");s(this,"_addressModeW");s(this,"_magFilter");s(this,"_minFilter");s(this,"_mipmapFilter");s(this,"_lodMinClamp");s(this,"_lodMaxClamp");s(this,"_compare");s(this,"_maxAnisotropy");s(this,"mipmapCount",1);s(this,"_textureChange",!1);s(this,"_stateChangeRef",new Map);this.width=t,this.height=e,this.numberLayer=r,this.minFilter=Wt.linear,this.magFilter=Wt.linear,this.mipmapFilter=Wt.linear,this.addressModeU=nt.repeat,this.addressModeV=nt.repeat}init(){let t=this;return t.internalCreateBindingLayoutDesc&&t.internalCreateBindingLayoutDesc(),t.internalCreateTexture&&t.internalCreateTexture(),t.internalCreateView&&t.internalCreateView(),t.internalCreateSampler&&t.internalCreateSampler(),this}createTextureDescriptor(t,e,r,i,a=GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING,o=1,l=0){this.width=t,this.height=e,this.format=i,this.usage=a,this.textureDescriptor={size:[t,e,o],mipLevelCount:r,format:i,usage:a,label:`${this.name+this.width+this.height+this.format}`},l>0&&(this.textureDescriptor.sampleCount=l),o>1?this.viewDescriptor={dimension:"2d-array"}:this.viewDescriptor={dimension:this.textureBindingLayout.viewDimension,mipLevelCount:r,baseMipLevel:0}}generate(t){let e=32,r=32;"width"in t&&(e=t.width,r=t.height),(e<32||r<32)&&console.log(t.name+"Size must be greater than 32!"),this.width=e,this.height=r,this.createTexture(t)}createTexture(t){this._sourceImageData=t,this.updateTextureDescription(),this.updateGPUTexture();let e=w.device;this.gpuTexture instanceof GPUTexture&&e.queue.copyExternalImageToTexture({source:this._sourceImageData},{texture:this.gpuTexture},[this.width,this.height]),this.useMipmap&&Mr.webGPUGenerateMipmap(this)}get useMipmap(){return this._useMipmap}set useMipmap(t){if(t){if(this.samplerBindingLayout.type="filtering",this._useMipmap==!1&&this._sourceImageData){this._useMipmap=!0,this.updateTextureDescription(),this.updateGPUTexture();let e=w.device;this.gpuTexture instanceof GPUTexture&&e.queue.copyExternalImageToTexture({source:this._sourceImageData},{texture:this.gpuTexture},[this.width,this.height]),Mr.webGPUGenerateMipmap(this)}}else if(this.samplerBindingLayout.type="non-filtering",this._useMipmap==!0&&this._sourceImageData){this._useMipmap=!1,this.updateTextureDescription(),this.updateGPUTexture();let e=w.device;this.gpuTexture instanceof GPUTexture&&e.queue.copyExternalImageToTexture({source:this._sourceImageData},{texture:this.gpuTexture},[this.width,this.height])}this._textureChange=!0,this._useMipmap=t,this.noticeChange()}get sourceImageData(){return this._sourceImageData}getMipmapCount(){let t=this.width,e=this.height,r=Math.max(t,e);return 1+Math.log2(r)|0}updateTextureDescription(){this.mipmapCount=Math.floor(this.useMipmap?this.getMipmapCount():1),this.createTextureDescriptor(this.width,this.height,this.mipmapCount,this.format)}updateGPUTexture(){this.gpuTexture&&this.gpuTexture instanceof GPUTexture&&this.gpuTexture.destroy(),this.gpuTexture=null,this.view=null,this.gpuTexture=this.getGPUTexture()}getGPUTexture(){return this.gpuTexture||(this.gpuTexture=w.device.createTexture(this.textureDescriptor)),this.gpuTexture}getGPUView(t=0){return this.view||(this.gpuTexture=this.getGPUTexture(),this.gpuTexture instanceof GPUTexture&&(this.view=this.gpuTexture.createView(this.viewDescriptor),this.view.label=this.name)),this.view}bindStateChange(t,e){this._stateChangeRef.set(e,t)}unBindStateChange(t){this._stateChangeRef.delete(t)}noticeChange(){this.gpuSampler=w.device.createSampler(this),this._stateChangeRef.forEach((t,e)=>{t()})}destroy(t){t&&this.gpuTexture instanceof GPUTexture&&(this.gpuSampler=null,this.gpuSampler_comparison=null,this.textureBindingLayout=null,this.textureDescriptor=null,this.gpuTexture.destroy(),this.gpuTexture=null),this._stateChangeRef.clear()}get addressModeU(){return this._addressModeU}set addressModeU(t){this._addressModeU!=t&&(this._addressModeU=t,this.noticeChange())}get addressModeV(){return this._addressModeV}set addressModeV(t){this._addressModeV!=t&&(this._addressModeV=t,this.noticeChange())}get addressModeW(){return this._addressModeW}set addressModeW(t){this._addressModeW!=t&&(this._addressModeW=t,this.noticeChange())}get magFilter(){return this._magFilter}set magFilter(t){this._magFilter!=t&&(this._magFilter=t,this.noticeChange())}get minFilter(){return this._minFilter}set minFilter(t){this._minFilter!=t&&(this._minFilter=t,this.noticeChange())}get mipmapFilter(){return this._mipmapFilter}set mipmapFilter(t){this._mipmapFilter!=t&&(this._mipmapFilter=t,this.noticeChange())}get lodMinClamp(){return this._lodMinClamp}set lodMinClamp(t){this._lodMinClamp!=t&&(this._lodMinClamp=t,this.noticeChange())}get lodMaxClamp(){return this._lodMaxClamp}set lodMaxClamp(t){this._lodMaxClamp!=t&&(this._lodMaxClamp=t,this.noticeChange())}get compare(){return this._compare}set compare(t){this._compare!=t&&(this._compare=t,this.noticeChange())}get maxAnisotropy(){return this._maxAnisotropy}set maxAnisotropy(t){this._maxAnisotropy!=t&&(this._maxAnisotropy=t,this.noticeChange())}static delayDestroyTexture(t){this._texs.includes(t)||this._texs.push(t)}static destroyTexture(){if(this._texs.length>0)for(;this._texs.length>0;)this._texs.shift().destroy()}}s(Ge,"_texs",[]);class kn extends Ge{constructor(e,r,i){super(e,r,i);s(this,"_bitmapTextures");this.format=z.rgba8unorm,this.mipmapCount=1,this._bitmapTextures=[],this.init()}setTextures(e){this._bitmapTextures.length=0;for(let r=0;r<e.length;r++){const i=e[r];this.addTexture(i)}}addTexture(e){(e.width!=this.width||e.height!=this.height)&&console.error("bitmap texture must match bitmapTextureArray size!"),e.pid=this._bitmapTextures.length,this._bitmapTextures.push(e),this.updateTexture()}removeTexture(e){let r=this._bitmapTextures.indexOf(e);if(r!=-1){this._bitmapTextures.splice(r,1);for(let i=0;i<this._bitmapTextures.length;i++){const a=this._bitmapTextures[i];a.pid=i}}}updateTexture(){let e=b.beginCommandEncoder();for(let r=0;r<this._bitmapTextures.length;r++){let i=this._bitmapTextures[r];e.copyTextureToTexture({texture:i.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:0}},{texture:this.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:r}},{width:this.width,height:this.height,depthOrArrayLayers:1})}b.endCommandEncoder(e)}internalCreateBindingLayoutDesc(){this.textureBindingLayout.viewDimension="2d-array",this.samplerBindingLayout.type="filtering",this.minFilter=Wt.linear,this.magFilter=Wt.linear}internalCreateTexture(){this.textureDescriptor={format:this.format,size:{width:this.width,height:this.height,depthOrArrayLayers:this.numberLayer},dimension:"2d",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.TEXTURE_BINDING},this.gpuTexture=this.getGPUTexture()}internalCreateView(){this.viewDescriptor={dimension:"2d-array"},this.view=this.getGPUView()}internalCreateSampler(){this.gpuSampler=w.device.createSampler(this)}}const dt=class dt{constructor(){s(this,"_iesTexture");s(this,"index",0)}generateIES(t){}set IESTexture(t){this._iesTexture=t,t.addressModeU=nt.repeat,t.addressModeV=nt.repeat,t.addressModeW=nt.repeat,dt.ies_list.indexOf(this)==-1&&(this.index=dt.ies_list.length,dt.ies_list.push(this),dt.iesTexture||dt.create(t.width,t.height),dt.iesTexture.addTexture(t))}get IESTexture(){return this._iesTexture}static create(t,e){let r=48;this.iesTexture=new kn(t,e,r)}};s(dt,"use",!1),s(dt,"iesTexture"),s(dt,"ies_list",[]);let oi=dt;class di{constructor(t=0,e="\0"){s(this,"Type",0);s(this,"Line",0);s(this,"Colume",0);s(this,"Literal","");this.Type=t,this.Literal=e}isTypeEqual(t){return this.Type==t}isLiteralEqual(t){return this.Literal==t}isBuiltinType(){return this.Type>33&&this.Type<101}isDataType(){return this.Type==1||this.isBuiltinType()}isOperation(){return this.Type>102&&this.Type<127}isAssignOperation(){return this.Type>128&&this.Type<133}get nOperationPriorityLevel(){switch(this.Type){case 26:return 1;case 27:return 1;case 125:return 2;case 110:return 3;case 114:return 3;case 105:return 4;case 106:return 4;case 103:return 5;case 104:return 5;case 115:return 6;case 116:return 6;case 119:return 7;case 120:return 7;case 122:return 7;case 123:return 7;case 121:return 8;case 124:return 8;case 111:return 9;case 113:return 10;case 112:return 11;case 107:return 12;case 109:return 13;case 108:return 14;case 24:return 15;case 126:return 16;case 129:return 16;case 130:return 16;case 131:return 16;case 132:return 16}return 99}}var m=(n=>(n[n.EOF=0]="EOF",n[n.IDENT=1]="IDENT",n[n.VOID=2]="VOID",n[n.CONST=3]="CONST",n[n.LAYOUT=4]="LAYOUT",n[n.PRECISION=5]="PRECISION",n[n.ATTRIBUTE=6]="ATTRIBUTE",n[n.UNIFORM=7]="UNIFORM",n[n.VARYING=8]="VARYING",n[n.INVARIANT=9]="INVARIANT",n[n.IN=10]="IN",n[n.OUT=11]="OUT",n[n.INOUT=12]="INOUT",n[n.IF=13]="IF",n[n.ELSE=14]="ELSE",n[n.FOR=15]="FOR",n[n.WHILE=16]="WHILE",n[n.DO=17]="DO",n[n.BREAK=18]="BREAK",n[n.RETURN=19]="RETURN",n[n.CONTINUE=20]="CONTINUE",n[n.STRUCT=21]="STRUCT",n[n.COMMA=22]="COMMA",n[n.COLON=23]="COLON",n[n.QUEMARK=24]="QUEMARK",n[n.SEMICOLON=25]="SEMICOLON",n[n.LEFTSAMLL=26]="LEFTSAMLL",n[n.RIGHTSAMLL=27]="RIGHTSAMLL",n[n.LEFTMEDI=28]="LEFTMEDI",n[n.RIGHTMEDI=29]="RIGHTMEDI",n[n.LEFTBIG=30]="LEFTBIG",n[n.RIGHTBIG=31]="RIGHTBIG",n[n.LITERAL=32]="LITERAL",n[n.BeginBuiltinType=33]="BeginBuiltinType",n[n.INT=34]="INT",n[n.INT_ARRAY=35]="INT_ARRAY",n[n.UINT=36]="UINT",n[n.UINT_ARRAY=37]="UINT_ARRAY",n[n.BOOL=38]="BOOL",n[n.BOOL_ARRAY=39]="BOOL_ARRAY",n[n.FLOAT=40]="FLOAT",n[n.FLOAT_ARRAY=41]="FLOAT_ARRAY",n[n.DOUBLE=42]="DOUBLE",n[n.DOUBLE_ARRAY=43]="DOUBLE_ARRAY",n[n.VEC2=44]="VEC2",n[n.VEC2_ARRAY=45]="VEC2_ARRAY",n[n.VEC3=46]="VEC3",n[n.VEC3_ARRAY=47]="VEC3_ARRAY",n[n.VEC4=48]="VEC4",n[n.VEC4_ARRAY=49]="VEC4_ARRAY",n[n.BVEC2=50]="BVEC2",n[n.BVEC2_ARRAY=51]="BVEC2_ARRAY",n[n.BVEC3=52]="BVEC3",n[n.BVEC3_ARRAY=53]="BVEC3_ARRAY",n[n.BVEC4=54]="BVEC4",n[n.BVEC4_ARRAY=55]="BVEC4_ARRAY",n[n.IVEC2=56]="IVEC2",n[n.IVEC2_ARRAY=57]="IVEC2_ARRAY",n[n.IVEC3=58]="IVEC3",n[n.IVEC3_ARRAY=59]="IVEC3_ARRAY",n[n.IVEC4=60]="IVEC4",n[n.IVEC4_ARRAY=61]="IVEC4_ARRAY",n[n.UVEC2=62]="UVEC2",n[n.UVEC2_ARRAY=63]="UVEC2_ARRAY",n[n.UVEC3=64]="UVEC3",n[n.UVEC3_ARRAY=65]="UVEC3_ARRAY",n[n.UVEC4=66]="UVEC4",n[n.UVEC4_ARRAY=67]="UVEC4_ARRAY",n[n.MAT2x2=68]="MAT2x2",n[n.MAT2x2_ARRAY=69]="MAT2x2_ARRAY",n[n.MAT2x3=70]="MAT2x3",n[n.MAT2x3_ARRAY=71]="MAT2x3_ARRAY",n[n.MAT2x4=72]="MAT2x4",n[n.MAT2x4_ARRAY=73]="MAT2x4_ARRAY",n[n.MAT3x2=74]="MAT3x2",n[n.MAT3x2_ARRAY=75]="MAT3x2_ARRAY",n[n.MAT3x3=76]="MAT3x3",n[n.MAT3x3_ARRAY=77]="MAT3x3_ARRAY",n[n.MAT3x4=78]="MAT3x4",n[n.MAT3x4_ARRAY=79]="MAT3x4_ARRAY",n[n.MAT4x2=80]="MAT4x2",n[n.MAT4x2_ARRAY=81]="MAT4x2_ARRAY",n[n.MAT4x3=82]="MAT4x3",n[n.MAT4x3_ARRAY=83]="MAT4x3_ARRAY",n[n.MAT4x4=84]="MAT4x4",n[n.MAT4x4_ARRAY=85]="MAT4x4_ARRAY",n[n.SAMPLER=86]="SAMPLER",n[n.SAMPLER_1D=87]="SAMPLER_1D",n[n.SAMPLER_2D=88]="SAMPLER_2D",n[n.SAMPLER_3D=89]="SAMPLER_3D",n[n.SAMPLER_CUBE=90]="SAMPLER_CUBE",n[n.SAMPLER_SHADOW=91]="SAMPLER_SHADOW",n[n.SAMPLER_1D_SHADOW=92]="SAMPLER_1D_SHADOW",n[n.SAMPLER_2D_SHADOW=93]="SAMPLER_2D_SHADOW",n[n.TEXTURE_1D=94]="TEXTURE_1D",n[n.TEXTURE_1D_ARRAY=95]="TEXTURE_1D_ARRAY",n[n.TEXTURE_2D=96]="TEXTURE_2D",n[n.TEXTURE_2D_ARRAY=97]="TEXTURE_2D_ARRAY",n[n.TEXTURE_3D=98]="TEXTURE_3D",n[n.TEXTURE_CUBE=99]="TEXTURE_CUBE",n[n.TEXTURE_CUBE_ARRAY=100]="TEXTURE_CUBE_ARRAY",n[n.EndBuiltinType=101]="EndBuiltinType",n[n.BeginOperation=102]="BeginOperation",n[n.ADD=103]="ADD",n[n.SUB=104]="SUB",n[n.MUL=105]="MUL",n[n.DIV=106]="DIV",n[n.AND=107]="AND",n[n.OR=108]="OR",n[n.XOR=109]="XOR",n[n.NOT=110]="NOT",n[n.BITAND=111]="BITAND",n[n.BITOR=112]="BITOR",n[n.BITXOR=113]="BITXOR",n[n.BITNOT=114]="BITNOT",n[n.BITSHIFT_L=115]="BITSHIFT_L",n[n.BITSHIFT_R=116]="BITSHIFT_R",n[n.INC=117]="INC",n[n.DEC=118]="DEC",n[n.GREATER=119]="GREATER",n[n.GREATEREQUAL=120]="GREATEREQUAL",n[n.EQUAL=121]="EQUAL",n[n.LESS=122]="LESS",n[n.LESSEQUAL=123]="LESSEQUAL",n[n.NOTEQUAL=124]="NOTEQUAL",n[n.DOT=125]="DOT",n[n.ASSIGN=126]="ASSIGN",n[n.EndOperation=127]="EndOperation",n[n.BeginAssignOperation=128]="BeginAssignOperation",n[n.ADDASSIGN=129]="ADDASSIGN",n[n.SUBASSIGN=130]="SUBASSIGN",n[n.MULASSIGN=131]="MULASSIGN",n[n.DIVASSIGN=132]="DIVASSIGN",n[n.EndAssignOperation=133]="EndAssignOperation",n))(m||{});class qr{constructor(t){s(this,"_char");s(this,"_line");s(this,"_column");s(this,"_source");s(this,"_currPosition");s(this,"_nextPosition");this.reset(t)}reset(t){this._char="",this._line=0,this._column=0,this._source=t,this._currPosition=0,this._nextPosition=0}get source(){return this._source}getChar(){return this._char}get currPosition(){return this._currPosition}peekChar(){return this._nextPosition>=this._source.length?"\0":this._source[this._nextPosition]}readChar(){this._char=this._nextPosition>=this._source.length?"\0":this._source[this._nextPosition],this._char!==`
`?this._column++:(this._line++,this._column=0),this._currPosition=this._nextPosition,this._nextPosition++}readCharAndSkipWhitespace(){this.readChar(),this.skipWhitespace()}readIdentifier(){for(var t=this._currPosition;this.isIdentifier(this._char);)this.readChar();return this._source.substring(t,this._currPosition)}isIdentifier(t){var e=t.charCodeAt(0);return 97<=e&&e<=122||65<=e&&e<=90||48<=e&&e<=57||e==95}skipWhitespace(){for(;this.IsWhitespace(this._char);)this.readChar()}IsWhitespace(t){return t===" "||t==="	"||t==="\r"||t===`
`}skipComment(){for(;this._char!==`
`&&this._char!=="\0";)this.readChar();this.skipWhitespace()}skipMultilineComment(){if(!(this._char!=="/"&&this.peekChar()!=="*")){this.readChar(),this.readChar();for(let t=1;t>0&&this._char!=="\0";)if(this.readChar(),this._char==="/"&&this.peekChar()==="*"){t++,this.readChar();continue}else if(this._char==="*"&&this.peekChar()==="/"){t--,this.readChar();continue}this.readChar(),this.readChar(),this.skipWhitespace()}}isDigit(t){var e=t.charCodeAt(0);return 48<=e&&e<=57}readNumber(){for(var t=this._currPosition;this.isDigit(this._char);)this.readChar();if(this._char===".")for(this.readChar();this.isDigit(this._char);)this.readChar();return this._source.substring(t,this._currPosition)}readValue(){return this.isDigit(this._char)?this.readNumber():this.readIdentifier()}readLine(){var t=this._currPosition,e=this._source.indexOf(`
`,this._currPosition);return e==-1&&(e=this._source.length),this._line++,this._column=0,this._currPosition=e,this._nextPosition=e+1,this._source.substring(t,e+1)}}class Qn extends qr{constructor(e){super(e.source);s(this,"_tokenPosition",0);s(this,"_tokens",[]);this.parse()}skipToken(e){this._tokenPosition+=e}peekToken(e){return this._tokenPosition+e>=this._tokens.length?new di(m.EOF,"\0"):this._tokens[this._tokenPosition+e]}GetNextToken(){if(this._tokenPosition>=this._tokens.length)return new di(m.EOF,"\0");let e=this._tokens[this._tokenPosition];return this._tokenPosition++,e}get currTokenPosition(){return this._tokenPosition}parse(){this.readChar(),this._tokens=new Array;var e;do e=this.nextToken(),this._tokens.push(e);while(e.Type!=m.EOF)}nextToken(){if(this.skipWhitespace(),this._char==="/"){if(this.peekChar()==="/")return this.skipComment(),this.nextToken();if(this.peekChar()==="*")return this.skipMultilineComment(),this.nextToken()}var e=new di;switch(e.Line=this._line,e.Colume=this._column,this._char){case"\0":e.Type=m.EOF,e.Literal="EOF";break;case".":e.Type=m.DOT,e.Literal=".";break;case",":e.Type=m.COMMA,e.Literal=",";break;case":":e.Type=m.COLON,e.Literal=":";break;case"?":e.Type=m.QUEMARK,e.Literal="?";break;case";":e.Type=m.SEMICOLON,e.Literal=";";break;case"(":e.Type=m.LEFTSAMLL,e.Literal="(";break;case")":e.Type=m.RIGHTSAMLL,e.Literal=")";break;case"[":e.Type=m.LEFTMEDI,e.Literal="[";break;case"]":e.Type=m.RIGHTMEDI,e.Literal="]";break;case"{":e.Type=m.LEFTBIG,e.Literal="{";break;case"}":e.Type=m.RIGHTBIG,e.Literal="}";break;case"+":if(this.peekChar()==="+"){this.readChar(),e.Type=m.INC,e.Literal="++";break}else if(this.peekChar()==="="){this.readChar(),e.Type=m.ADDASSIGN,e.Literal="+=";break}e.Type=m.ADD,e.Literal="+";break;case"-":if(this.peekChar()==="-"){this.readChar(),e.Type=m.DEC,e.Literal="--";break}else if(this.peekChar()==="="){this.readChar(),e.Type=m.SUBASSIGN,e.Literal="-=";break}e.Type=m.SUB,e.Literal="-";break;case"*":if(this.peekChar()==="="){this.readChar(),e.Type=m.MULASSIGN,e.Literal="*=";break}e.Type=m.MUL,e.Literal="*";break;case"/":if(this.peekChar()==="="){this.readChar(),e.Type=m.DIVASSIGN,e.Literal="/=";break}e.Type=m.DIV,e.Literal="/";break;case"&":if(this.peekChar()==="&"){this.readChar(),e.Type=m.AND,e.Literal="&&";break}e.Type=m.BITAND,e.Literal="&";break;case"|":if(this.peekChar()==="|"){this.readChar(),e.Type=m.OR,e.Literal="||";break}e.Type=m.BITOR,e.Literal="&";break;case"^":e.Type=m.BITXOR,e.Literal="^";break;case"!":if(this.peekChar()==="="){this.readChar(),e.Type=m.NOTEQUAL,e.Literal="!=";break}e.Type=m.NOT,e.Literal="!";break;case">":if(this.peekChar()==="="){this.readChar(),e.Type=m.GREATEREQUAL,e.Literal=">=";break}else if(this.peekChar()===">"){this.readChar(),e.Type=m.BITSHIFT_R,e.Literal=">>";break}e.Type=m.GREATER,e.Literal=">";break;case"=":if(this.peekChar()==="="){this.readChar(),e.Type=m.EQUAL,e.Literal="==";break}e.Type=m.ASSIGN,e.Literal="=";break;case"<":if(this.peekChar()==="="){this.readChar(),e.Type=m.LESSEQUAL,e.Literal="<=";break}else if(this.peekChar()==="<"){this.readChar(),e.Type=m.BITSHIFT_L,e.Literal="<<";break}e.Type=m.LESS,e.Literal="<";break;default:return this.isDigit(this._char)?this.readDecimal():(e.Literal=this.readIdentifier(),e.Type=this.lookupIdentifier(e.Literal),this.getChar()=="["&&this.peekChar()=="]"&&e.isBuiltinType()&&(e.Type++,e.Literal+="[]",this.readChar(),this.readChar()),e)}return this.readChar(),e}readDecimal(){var e=new di;e.Line=this._line,e.Colume=this._column,e.Type=m.LITERAL;var r=this.readNumber();return this._char==="e"?(e.Literal=r+this._char,this.readChar(),e.Literal+=this._char,this.readChar(),e.Literal+=this.readNumber(),e.Type=m.LITERAL,e):this._char==="u"?(this.readChar(),e.Type=m.LITERAL,e.Literal=r+"u",e):this._char==="f"?(this.readChar(),e.Type=m.LITERAL,e.Literal=r+"f",e):(e.Type=m.LITERAL,e.Literal=r,e)}lookupIdentifier(e){switch(e){case"void":return m.VOID;case"int":return m.INT;case"uint":return m.UINT;case"bool":return m.BOOL;case"true":return m.BOOL;case"false":return m.BOOL;case"float":return m.FLOAT;case"vec2":return m.VEC2;case"vec3":return m.VEC3;case"vec4":return m.VEC4;case"bvec2":return m.BVEC2;case"bvec3":return m.BVEC3;case"bvec4":return m.BVEC4;case"ivec2":return m.IVEC2;case"ivec3":return m.IVEC3;case"ivec4":return m.IVEC4;case"uvec2":return m.UVEC2;case"uvec3":return m.UVEC3;case"uvec4":return m.UVEC4;case"mat2":return m.MAT2x2;case"mat2x2":return m.MAT2x2;case"mat2x3":return m.MAT2x3;case"mat2x4":return m.MAT2x4;case"mat3":return m.MAT3x3;case"mat3x2":return m.MAT3x2;case"mat3x3":return m.MAT3x3;case"mat3x4":return m.MAT3x4;case"mat4":return m.MAT4x4;case"mat4x2":return m.MAT4x2;case"mat4x3":return m.MAT4x3;case"mat4x4":return m.MAT4x4;case"sampler":return m.SAMPLER;case"sampler1D":return m.SAMPLER_1D;case"sampler2D":return m.SAMPLER_2D;case"sampler3D":return m.SAMPLER_3D;case"samplerCube":return m.SAMPLER_CUBE;case"samplerShadow":return m.SAMPLER_SHADOW;case"sampler1DShadow":return m.SAMPLER_1D_SHADOW;case"sampler2DShadow":return m.SAMPLER_2D_SHADOW;case"texture1D":return m.TEXTURE_1D;case"texture2D":return m.TEXTURE_2D;case"texture3D":return m.TEXTURE_3D;case"textureCube":return m.TEXTURE_CUBE;case"texture1DArray":return m.TEXTURE_1D_ARRAY;case"texture2DArray":return m.TEXTURE_2D_ARRAY;case"textureCubeArray":return m.TEXTURE_CUBE_ARRAY;case"const":return m.CONST;case"layout":return m.LAYOUT;case"precision":return m.PRECISION;case"attribute":return m.ATTRIBUTE;case"uniform":return m.UNIFORM;case"varying":return m.VARYING;case"invariant":return m.INVARIANT;case"in":return m.IN;case"out":return m.OUT;case"inout":return m.INOUT;case"if":return m.IF;case"else":return m.ELSE;case"for":return m.FOR;case"while":return m.WHILE;case"do":return m.DO;case"break":return m.BREAK;case"return":return m.RETURN;case"continue":return m.CONTINUE;case"struct":return m.STRUCT}return m.IDENT}}class Gn{constructor(){s(this,"name","");s(this,"value","");s(this,"args",[])}}class zn extends qr{constructor(e){super(e);s(this,"_result");s(this,"_skipLine");s(this,"_definitionTables");this._result="",this._skipLine=!1,this._definitionTables=new Map,this.parse()}parse(){for(this.readChar();this._char!=="\0";){if(this.skipWhitespace(),this._char==="/"){if(this.peekChar()==="/"){this.skipComment();continue}if(this.peekChar()==="*"){this.skipMultilineComment();continue}}if(this._char==="#"){this.readCharAndSkipWhitespace();var e=this.readIdentifier();switch(e){case"version":this.readLine().trim();break;case"define":this.readCharAndSkipWhitespace();var r=this.readIdentifier();if(this.getChar()==="("){let h=new Gn;if(this.readCharAndSkipWhitespace(),this.getChar()!==")")do{var i=this.readIdentifier();if(h.args.push(i),this.skipWhitespace(),this.getChar()===","){this.readCharAndSkipWhitespace();continue}}while(this.getChar()!==")");this.readCharAndSkipWhitespace(),h.name=r,h.value=this.readLine().trim(),this._definitionTables.set(r,h),this.readCharAndSkipWhitespace()}else{let h=this.readLine().trim();h[0]=="="&&(h=h.substring(1)),this._definitionTables.set(r,h)}break;case"if":let l=this.readLine().trim();if(l=="0"||l=="false"){this._skipLine=!0;break}if(this._definitionTables.has(l)&&(l=this._definitionTables.get(l),l=="0"||l=="false")){this._skipLine=!0;break}break;case"ifdef":this.readCharAndSkipWhitespace();var a=this.readIdentifier();this._skipLine=!this._definitionTables.has(a);break;case"else":this._skipLine=!this._skipLine;break;case"endif":this._skipLine=!1;break;default:throw"Unknown preprocessing command:"+e}}else{var o=this.readLine();if(!this._skipLine){for(let l of this._definitionTables.keys()){let h=o.indexOf(l);if(h!=-1){let u=this._definitionTables.get(l);if(typeof u=="string")o=o.replace(l,u);else{let c=u,d=new qr(o.substring(h+l.length));if(d.readCharAndSkipWhitespace(),d.getChar()==="("){d.readCharAndSkipWhitespace();for(let x=1;d.getChar()!=="\0"&&x>0;){switch(d.getChar()){case"(":x++;break;case")":x--;break}d.readCharAndSkipWhitespace()}}let f=h,p=f+l.length+d.currPosition,A=o.substring(f,p).trim();if(c.args.length>0){let x=[],C=A.substring(A.indexOf("(")+1,A.lastIndexOf(")")).trim();C.length>0&&(x=this.parseArgs(C));let v=c.value.substring(c.value.indexOf("("));for(let _=0;_<c.args.length;_++)v=v.replace(c.args[_],x[_]);v=c.value.substring(0,c.value.indexOf("("))+v,o=o.replace(A,v)}else o=o.replace(A,c.value)}}}this._result+=o}this.readChar()}}}get source(){return this._result}parseArgs(e){let r=[],i=0,a=new qr(e),o=a.currPosition;if(a.readCharAndSkipWhitespace(),a.getChar()!=="\0")for(a.readCharAndSkipWhitespace();a.getChar()!=="\0";){switch(a.getChar()){case"(":i++;break;case")":i--;break;case",":if(i==0){let l=e.substring(o,a.currPosition);r.push(l),o=a.currPosition+1}break}a.readCharAndSkipWhitespace()}if(o<a.currPosition){let l=e.substring(o,a.currPosition);r.push(l)}return r}}class Vn{constructor(t){s(this,"result");s(this,"ASTRoot");s(this,"_syntax");this.result="",this._syntax=t,this.ASTRoot=t.ASTRoot}generateWGSL(){let t=new ks;var e=new Kn;let r=[],i=[],a=[];for(let c of this.ASTRoot.nodes)if(c instanceof Ki)if(c.scope=="in")if(c.nodes[0]instanceof fe){t.layoutsIn.push(c);let d=new os;d.name=c.nodes[0].name,d.type=c.nodes[0].type,d.locationID=Number.parseInt(c.qualifier.get("location")),e.inputAttribute.push(d)}else if(c.qualifier.has("local_size_x"))t.workGroupSize=c;else throw"not impl";else if(c.scope=="out")if(t.layoutsOut.push(c),c.nodes[0]instanceof fe){let d=new os;d.name=c.nodes[0].name,d.type=c.nodes[0].type,d.locationID=Number.parseInt(c.qualifier.get("location")),e.outputAttribute.push(d)}else throw"not impl";else if(c.scope=="uniform")if(i.push(c),c.nodes[0]instanceof fe){let d=new ss;d.name=c.nodes[0].name,d.type=c.nodes[0].type,d.setID=Number.parseInt(c.qualifier.get("set")),d.bindingID=Number.parseInt(c.qualifier.get("binding")),e.uniformInfo.push(d)}else if(c.nodes[0]instanceof rr){let d=new ss;d.name="unif"+e.uniformInfo.length.toString(),d.type=c.nodes[0].name,d.setID=Number.parseInt(c.qualifier.get("set")),d.bindingID=Number.parseInt(c.qualifier.get("binding")),e.uniformInfo.push(d)}else throw"not impl";else c.scope=="buffer"&&r.push(c);else a.push(c);t.stage="fragment";let o=0,l=new qr(""),h=this._syntax.lexer.source,u=new Map;for(;(o=h.indexOf("gl_",o))!=-1;){l.reset(h.substring(o,o+32)),l.readChar();let c=l.readIdentifier();if(o+=c.length,!u.has(c))switch(u.set(c,c),c){case"gl_InstanceID":t.stage="vertex",t.builtinIn.push("@builtin(instance_index) gl_InstanceID: u32");break;case"gl_Position":t.stage="vertex",t.builtinOut.push("@builtin(position) gl_Position: vec4<f32>"),t.addIdentifier("gl_Position","stout.gl_Position");break;case"gl_VertexIndex":t.stage="vertex",t.builtinIn.push("@builtin(vertex_index) gl_VertexIndex: u32");break;case"gl_FrontFacing":t.stage="fragment",t.builtinIn.push("@builtin(front_facing) gl_FrontFacing: bool");break;case"gl_FragDepth":t.stage="fragment",t.builtinOut.push("@builtin(frag_depth) gl_FragDepth: f32"),t.addIdentifier("gl_FragDepth","stout.gl_FragDepth");break;case"gl_WorkGroupID":t.stage="compute",t.builtinIn.push("@builtin(workgroup_id) gl_WorkGroupID: vec3<u32>");break;case"gl_NumWorkGroups":t.stage="compute",t.builtinIn.push("@builtin(num_workgroups) gl_NumWorkGroups: vec3<u32>");break;case"gl_LocalInvocationID":t.stage="compute",t.builtinIn.push("@builtin(local_invocation_id) gl_LocalInvocationID: vec3<u32>");break;case"gl_LocalInvocationIndex":t.stage="compute",t.builtinIn.push("@builtin(local_invocation_index) gl_LocalInvocationIndex: u32");break;case"gl_GlobalInvocationID":t.stage="compute",t.builtinIn.push("@builtin(global_invocation_id) gl_GlobalInvocationID: vec3<u32>");break;default:throw"Unprocessed built-in variables: "+c}}for(let c of i)c.nodes[0]instanceof rr&&(e.sourceCode+=c.nodes[0].formatToWGSL(t,0),e.sourceCode+=`\r
`);for(let c of i)e.sourceCode+=c.formatToWGSL(t,0);e.sourceCode+=`\r
`;for(let c of r)c.nodes[0]instanceof rr&&(e.sourceCode+=c.nodes[0].formatToWGSL(t,0),e.sourceCode+=`\r
`);for(let c of r)e.sourceCode+=c.formatToWGSL(t,0);e.sourceCode+=`\r
`;for(let c of a)e.sourceCode+=c.formatToWGSL(t,0),c instanceof fe&&(e.sourceCode+=`;\r
`);return e}}class ks{constructor(t){s(this,"_stage","fragment");s(this,"_builtinIn",[]);s(this,"_builtinOut",[]);s(this,"_layoutsIn",[]);s(this,"_layoutsOut",[]);s(this,"_layoutUniformCount",0);s(this,"_workGroupSize");s(this,"_parentContext");s(this,"_identifierEnv",new Map);this._parentContext=t}get stage(){return this.parentContext!=null?this.parentContext.stage:this._stage}set stage(t){this.parentContext!=null&&(this.parentContext.stage=t),this._stage=t}get builtinIn(){return this.parentContext!=null?this.parentContext.builtinIn:this._builtinIn}get builtinOut(){return this.parentContext!=null?this.parentContext.builtinOut:this._builtinOut}get layoutsIn(){return this.parentContext!=null?this.parentContext.layoutsIn:this._layoutsIn}get layoutsOut(){return this.parentContext!=null?this.parentContext.layoutsOut:this._layoutsOut}get layoutUniformCount(){return this.parentContext!=null?this.parentContext.layoutUniformCount:this._layoutUniformCount}set layoutUniformCount(t){if(this.parentContext!=null){this.parentContext.layoutUniformCount=t;return}this._layoutUniformCount=t}get workGroupSize(){return this.parentContext!=null?this.parentContext.workGroupSize:this._workGroupSize}set workGroupSize(t){this.parentContext!=null&&(this.parentContext.workGroupSize=t),this._workGroupSize=t}get parentContext(){return this._parentContext}findIdentifier(t){return this._identifierEnv.has(t)?this._identifierEnv.get(t):this._parentContext!=null?this._parentContext.findIdentifier(t):t}addIdentifier(t,e){this._identifierEnv.set(t,e)}hasIdentifier(t){return this._identifierEnv.has(t)}}class ne{constructor(){s(this,"nodes",[])}addNode(t){this.nodes.push(t)}formatToWGSL(t,e){return""}}class rr extends ne{constructor(e){super();s(this,"name","");s(this,"fields",[]);this.name=e}static parse(e){if(e.peekToken(0).Type==m.IDENT&&e.peekToken(1).Type==m.LEFTBIG){let r=new rr(e.peekToken(0).Literal);for(e.skipToken(2);e.peekToken(0).Type!=m.RIGHTBIG;){let i=fe.parse(e);r.fields.push(i)}return e.peekToken(0).Type==m.RIGHTBIG&&e.skipToken(1),e.peekToken(0).Type==m.SEMICOLON&&e.skipToken(1),r}throw"Error parsing structure: Unexpected character"}formatToWGSL(e,r){let i="",a=r<=0?"":"    ".repeat(r);i+=a+"struct "+this.name+` {\r
`;for(let o of this.fields)o.arraySize.nodes.length<=0?i+=a+"  "+o.name+": "+ot(o.type)+`,\r
`:o.arraySize.nodes[0]instanceof ar?i+=a+"  "+o.name+": array<"+ot(o.type)+", "+o.arraySize.nodes[0].value+`>,\r
`:i+=a+"  "+o.name+": array<"+ot(o.type)+", "+o.arraySize.nodes[0].formatToWGSL(e,0)+`>,\r
`;return i+=a+`};\r
`,i}}class Ra extends ne{constructor(e,r,i,a){super();s(this,"name");s(this,"args");s(this,"body");s(this,"returnType");this.name=e,this.args=r,this.body=i,this.returnType=a}static parse(e){if((e.peekToken(0).isBuiltinType()||e.peekToken(0).Type==m.VOID)&&e.peekToken(1).Type==m.IDENT&&e.peekToken(2).Type==m.LEFTSAMLL){let r=e.peekToken(0).Literal,i=e.peekToken(1).Literal;e.skipToken(2);let a=new Array;if(e.peekToken(0).Type!=m.LEFTSAMLL)throw"Error parsing function parameter list: Unexpected character";for(e.skipToken(1);e.peekToken(0).Type!=m.EOF;){if(e.peekToken(0).Type==m.RIGHTSAMLL){e.skipToken(1);break}(e.peekToken(0).Type==m.INOUT||e.peekToken(0).Type==m.IN||e.peekToken(0).Type==m.OUT)&&e.skipToken(1);let l=fe.parse(e);a.push(l),e.peekToken(0).Type==m.COMMA&&e.skipToken(1)}let o=Tt.parse(e);return new Ra(i,a,o,r)}throw"Error parsing function: Unexpected character"}formatToWGSL(e,r){let i="",a=r<=0?"":"    ".repeat(r),o,l=e.layoutsOut.length>0||e.builtinOut.length>0;switch(e.stage){case"compute":o="ComputeOutput";break;case"vertex":o="VertexOutput";break;case"fragment":o="FragmentOutput";break;default:o="StructOutput";break}if(this.name=="main"&&l){i+="struct "+o+` {\r
`;for(let d of e.layoutsOut)if(d.nodes[0]instanceof fe){let f=d.nodes[0];d.qualifier.size==1&&d.qualifier.has("location")&&(i+="  @location("+d.qualifier.get("location")+") "),i+=f.name+": "+ot(f.type)+`,\r
`,e.addIdentifier(f.name,"stout."+f.name)}let c=e.builtinOut;for(let d of c)i+="  "+d+`,\r
`;i+=`};\r
\r
`}let h="";if(this.name=="main"&&(e.workGroupSize!=null?h+="@"+e.stage+" "+e.workGroupSize.formatToWGSL(e,0)+` \r
`:h+="@"+e.stage+`\r
`),e=new ks(e),h+=a+"fn "+this.name+"(",this.name!="main"){for(let c=0;c<this.args.length;c++){let d=this.args[c];c>0&&(h+=", "),h+=d.name+": "+ot(d.type),e.addIdentifier(d.name,d.name)}h+=") -> "+ot(this.returnType)}else{let c=e.layoutsIn;for(let f=0;f<c.length;f++){let p=c[f];if(f>0?h+=`,\r
    `:h+=`\r
    `,p.nodes[0]instanceof fe){let A=p.nodes[0];p.qualifier.size==1&&p.qualifier.has("location")&&(h+="@location("+p.qualifier.get("location")+") "),h+=A.name+": "+ot(A.type),e.addIdentifier(A.name,A.name)}}c.length>0&&(h+=`,\r
    `);let d=e.builtinIn;for(let f of d)h+=f+`,\r
    `;l?h+=") -> "+o:h+=") "}let u="";this.name=="main"&&l&&(u+="    var stout: "+o+` ;\r
`);for(let c of this.body.nodes)u+=c.formatToWGSL(e,r+1),!(c instanceof kr)&&!(c instanceof Lr)&&!(c instanceof Ur)&&(u+=`;\r
`);return this.name=="main"&&l&&(u+=`    return stout;\r
`),i+=h+` {\r
`,i+=u,i+=a+`}\r
`,i+=`\r
`,i}}class Ma extends ne{constructor(){super();s(this,"args",[])}static parse(e){if(e.peekToken(0).Type==m.LEFTSAMLL){e.skipToken(1);let r=new Ma;for(;e.peekToken(0).Type!=m.EOF;){if(e.peekToken(0).Type==m.RIGHTSAMLL){e.skipToken(1);break}let i=W.parse(e);r.args.push(i),e.peekToken(0).Type==m.COMMA&&e.skipToken(1)}return r}throw"Error parsing function argument table: Unexpected character"}}class Pr extends ne{constructor(e,r){super();s(this,"name");s(this,"args");this.name=e,this.args=r}static parse(e){if(e.peekToken(0).isDataType()&&e.peekToken(1).Type==m.LEFTSAMLL){let r=e.peekToken(0).Literal;e.skipToken(1);let i=Ma.parse(e);return new Pr(r,i)}throw"Error parsing function argument table: Unexpected character"}formatToWGSL(e,r){let i="",a=r<=0?"":"    ".repeat(r);if(this.name=="texture"&&this.args.args[0].nodes[0]instanceof Pr){let o=this.args.args[0].nodes[0];if(o.name=="sampler2D"){i+=a+"textureSample(";for(let l=0;l<o.args.args.length;l++){let h=o.args.args[l];l>0&&(i+=", "),i+=h.formatToWGSL(e,0)}for(let l=1;l<this.args.args.length;l++){let h=this.args.args[l];l>0&&(i+=", "),i+=h.formatToWGSL(e,0)}return i+=")",i}}i+=a+ot(this.name)+"(";for(let o=0;o<this.args.args.length;o++){let l=this.args.args[o];o>0&&(i+=", "),i+=l.formatToWGSL(e,0)}return i+=")",i}}class fe extends ne{constructor(e,r,i=new W){super();s(this,"type");s(this,"name");s(this,"arraySize");s(this,"hasIn");s(this,"hasOut");s(this,"hasConst");this.type=e,this.name=r,this.hasIn=!1,this.hasOut=!1,this.hasConst=!1,this.arraySize=i}static parse(e){let r=new fe("",""),i=e.peekToken(0);if(i.Type==m.CONST)e.skipToken(1),r.hasConst=!0;else if(i.Type==m.IN)e.skipToken(1),r.hasIn=!0;else if(i.Type==m.OUT)e.skipToken(1),r.hasOut=!0;else if(i.Type==m.INOUT)e.skipToken(1),r.hasIn=!0,r.hasOut=!0;else if(!i.isDataType())throw"Error parsing declaration expression: Unexpected character("+i.Literal+")";if(i=e.peekToken(0),i.isDataType()&&e.peekToken(1).Type==m.LEFTMEDI){if(r.type=i.Literal,e.skipToken(2),r.arraySize=W.parse(e),e.peekToken(0).Type==m.RIGHTMEDI&&e.skipToken(1),e.peekToken(0).Type!=m.IDENT)throw"Unexpected";r.name=e.peekToken(0).Literal,e.skipToken(1)}else if(i.isDataType()&&e.peekToken(1).Type==m.IDENT&&e.peekToken(2).Type==m.LEFTMEDI)r.type=e.peekToken(0).Literal,r.name=e.peekToken(1).Literal,e.skipToken(3),e.peekToken(0).Type==m.RIGHTMEDI?e.skipToken(1):(r.arraySize=W.parse(e),e.peekToken(0).Type==m.RIGHTMEDI&&e.skipToken(1));else if(i.isDataType()&&e.peekToken(1).Type==m.IDENT)r.type=e.peekToken(0).Literal,r.name=e.peekToken(1).Literal,e.skipToken(2);else throw"Error parsing declaration expression: Unexpected character("+i.Literal+")";if(i=e.peekToken(0),i.Type==m.SEMICOLON)return e.skipToken(1),r;if(i.Type==m.RIGHTSAMLL)return r;if(i.Type==m.ASSIGN){let a=e.peekToken(0);e.skipToken(1);let o=new ir(r.name),l=W.parse(e);return e.peekToken(0).Type==m.SEMICOLON&&e.skipToken(1),r.addNode(new mr(a,o,l)),r}else if(i.Type==m.COMMA){for(;e.peekToken(0).Type==m.COMMA&&e.peekToken(1).Type==m.IDENT;){let a=new fe(r.type,e.peekToken(1).Literal);r.addNode(a),e.skipToken(2),e.peekToken(0).Type==m.ASSIGN&&(e.skipToken(-1),a.addNode(W.parse(e)))}return r}throw"Error parsing declaration expression: Unexpected character("+e.peekToken(0).Literal+")"}formatToWGSL(e,r){let i="",a=r<=0?"":"    ".repeat(r);if(this.hasConst?i+=a+"let ":i+=a+"var ",e.addIdentifier(this.name,this.name),this.arraySize.nodes.length<=0?i+=this.name+": "+ot(this.type):this.arraySize.nodes[0]instanceof ar?i+=this.name+": array<"+ot(this.type)+", "+this.arraySize.nodes[0].value+">":i+=this.name+": array<"+ot(this.type)+", "+this.arraySize.nodes[0].formatToWGSL(e,0)+">",this.nodes.length>0&&this.nodes[0]instanceof mr)i+=" = "+this.nodes[0].rightValue.formatToWGSL(e,0);else if(this.nodes.length>0&&this.nodes[0]instanceof W&&this.nodes[0].nodes[0]instanceof mr)i+=" = "+this.nodes[0].nodes[0].rightValue.formatToWGSL(e,0);else if(this.nodes.length>0&&this.nodes[0]instanceof fe){i+=`;\r
`;for(let o of this.nodes)i+=o.formatToWGSL(e,r)+`;\r
`}else i+=`;\r
`;return i}}class Ur extends ne{constructor(e,r,i,a){super();s(this,"expression1");s(this,"condition");s(this,"expression2");s(this,"loopBody");this.expression1=e,this.condition=r,this.expression2=i,this.loopBody=a}static parse(e){if(e.peekToken(0).Type==m.FOR&&e.peekToken(1).Type==m.LEFTSAMLL){e.skipToken(2);let r;e.peekToken(0).Type==m.SEMICOLON?(e.skipToken(1),r=new W):e.peekToken(0).isDataType()&&e.peekToken(1).Type==m.IDENT&&e.peekToken(2).Type==m.ASSIGN?(r=new fe(e.peekToken(0).Literal,e.peekToken(1).Literal),e.skipToken(1),r.addNode(W.parse(e)),e.peekToken(0).Type==m.SEMICOLON&&e.skipToken(1)):(r=W.parse(e),e.peekToken(0).Type==m.SEMICOLON&&e.skipToken(1));let i;e.peekToken(0).Type==m.SEMICOLON?(e.skipToken(1),i=new W):(i=W.parse(e),e.peekToken(0).Type==m.SEMICOLON&&e.skipToken(1));let a;e.peekToken(0).Type==m.SEMICOLON?(e.skipToken(1),a=new W):(a=W.parse(e),e.peekToken(0).Type==m.SEMICOLON&&e.skipToken(1)),e.peekToken(0).Type==m.RIGHTSAMLL&&e.skipToken(1);let o;return e.peekToken(0).Type==m.LEFTBIG?o=Tt.parse(e):o=new Tt,new Ur(r,i,a,o)}throw"Error parsing for loop: Unexpected character"}formatToWGSL(e,r){let i="",a=r<=0?"":"    ".repeat(r);i+=a+"for (",i+=this.expression1.formatToWGSL(e,0)+"; ",i+=this.condition.formatToWGSL(e,0)+"; ",i+=this.expression2.formatToWGSL(e,0)+")",i+=` { \r
`;for(let o of this.loopBody.nodes)i+=o.formatToWGSL(e,r+1),!(o instanceof kr)&&!(o instanceof Lr)&&!(o instanceof Ur)&&(i+=`;\r
`);return i+=a+`} \r
`,i}}class Lr extends ne{constructor(e,r){super();s(this,"conditionExpr");s(this,"loopBody");this.conditionExpr=e,this.loopBody=r}static parse(e){if(e.peekToken(0).Type==m.WHILE){e.skipToken(1),e.peekToken(0).Type==m.LEFTSAMLL&&e.skipToken(1);let r=W.parse(e);e.peekToken(0).Type==m.RIGHTSAMLL&&e.skipToken(1);let i=Tt.parse(e);return new Lr(r,i)}throw"Error parsing while loop: Unexpected character"}formatToWGSL(e,r){let i="",a=r<=0?"":"    ".repeat(r);i+=a+`loop {\r
`,i+=a+"    if ("+this.conditionExpr.formatToWGSL(e,0)+`) { break; }\r
\r
`;for(let o of this.loopBody.nodes)i+=o.formatToWGSL(e,r+1),!(o instanceof kr)&&!(o instanceof Lr)&&!(o instanceof Ur)&&(i+=`;\r
`);return i+=a+`}\r
`,i}}class kr extends ne{constructor(e,r,i){super();s(this,"conditionExpr");s(this,"trueBranch");s(this,"falseBranch");this.conditionExpr=e,this.trueBranch=r,this.falseBranch=i}static parse(e){if(e.peekToken(0).Type==m.IF){e.skipToken(1),e.peekToken(0).Type==m.LEFTSAMLL&&e.skipToken(1);let r=W.parse(e),i,a=new Tt;if(e.peekToken(0).Type==m.RIGHTSAMLL&&e.skipToken(1),e.peekToken(0).Type==m.LEFTBIG?i=Tt.parse(e):(i=new Tt,e.peekToken(0).Type==m.RETURN?i.addNode(Wi.parse(e)):i.addNode(W.parse(e))),e.peekToken(0).Type==m.ELSE)if(e.skipToken(1),e.peekToken(0).Type==m.LEFTBIG)a=Tt.parse(e);else throw"not impl";return new kr(r,i,a)}throw"Error parsing IF branch statement: Unexpected character"}formatToWGSL(e,r){let i="",a=r<=0?"":"    ".repeat(r);i+=a+"if ("+this.conditionExpr.formatToWGSL(e,0)+`) {\r
`;for(let o of this.trueBranch.nodes)i+=o.formatToWGSL(e,r+1)+`;\r
`;if(this.falseBranch.nodes.length>0){i+=a+`} else {\r
`;for(let o of this.falseBranch.nodes)i+=o.formatToWGSL(e,r+1)+`;\r
`}return i+=a+`}\r
`,i}}class W extends ne{constructor(){super()}static parse(t){let e=new Array,r=new Array,i=0;for(;t.peekToken(0).Type!=m.EOF;){let a=t.peekToken(0);if(a.Type==m.SEMICOLON||a.Type==m.RIGHTMEDI||a.Type==m.COMMA||a.Type==m.COLON||a.Type==m.RIGHTBIG)break;if(a.isOperation()){if(a.isOperation()){if(a.Type==m.INC||a.Type==m.DEC){let o=a;t.skipToken(1);let l=W.parse(t);r.push(new Wr(o,void 0,l));continue}else if(e.length>0){if(e[e.length-1].nOperationPriorityLevel<=a.nOperationPriorityLevel)W.unionOperation(e,r);else if(e.length>0&&e[e.length-1].Literal=="-"){let o=e.pop(),l=r.pop();r.push(new Wr(o,void 0,l))}}e.push(a),t.skipToken(1)}}else if(a.Type==m.LITERAL){r.push(new ar(a.Literal)),t.skipToken(1);continue}else if(a.Type==m.LEFTSAMLL){i++,e.push(a),t.skipToken(1);continue}else if(a.Type==m.RIGHTSAMLL){if(i<=0)break;for(i--;W.unionOperation(e,r););if(e[e.length-1].Type==m.LEFTSAMLL){e.pop();let o=new Hn;o.addNode(r.pop()),r.push(o)}t.skipToken(1);continue}else if(a.Type==m.IDENT){if(t.peekToken(1).Type==m.INC||t.peekToken(1).Type==m.DEC){let o=t.peekToken(1),l=new ir(a.Literal);r.push(new Wr(o,l,void 0)),t.skipToken(2);continue}else if(t.peekToken(1).Type==m.LEFTSAMLL){r.push(Pr.parse(t));continue}else if(t.peekToken(1).Type==m.DOT){r.push(Di.parse(t));continue}else if(t.peekToken(1).Type==m.LEFTMEDI){r.push(Or.parse(t));continue}r.push(new ir(a.Literal)),t.skipToken(1);continue}else{if(a.isBuiltinType()&&t.peekToken(1).Type==m.LEFTSAMLL){r.push(Pr.parse(t));continue}if(a.isAssignOperation()){let o=a;t.skipToken(1);let l=r.pop(),h=W.parse(t);r.push(new mr(o,l,h));continue}if(a.Type==m.LEFTBIG&&(t.peekToken(1).Type==m.LITERAL||t.peekToken(1).Type==m.SUB&&t.peekToken(2).Type==m.LITERAL)){r.push(Bi.parse(t));continue}if(a.Type==m.QUEMARK){e.length>0&&e[e.length-1].nOperationPriorityLevel<=a.nOperationPriorityLevel&&W.unionOperation(e,r),t.skipToken(1);let o=r.pop(),l=W.parse(t);t.peekToken(0).Type==m.COLON&&t.skipToken(1);let h=W.parse(t);if(r.push(new Yn(o,l,h)),t.peekToken(-1).Type==m.SEMICOLON)break;continue}if(a.Type==m.LEFTMEDI){t.skipToken(1);let o=W.parse(t);t.peekToken(0).Type==m.RIGHTMEDI&&t.skipToken(1);let l=r.pop();r.push(new Or(l,o));continue}throw"An unexpected character"}}for(;e.length>0&&W.unionOperation(e,r););if(e.length<=0&&r.length==1){let a=new W;return a.addNode(r.pop()),a}throw"Error parsing expression: Unexpected character("+t.peekToken(0).Literal+")"}formatToWGSL(t,e){return this.nodes[0].formatToWGSL(t,e)}static unionOperation(t,e){if(t.length<0||e.length<2){if(t.length>0&&t[t.length-1].Literal=="-"){let r=t.pop(),i=e.pop();return e.push(new Wr(r,void 0,i)),!0}return!1}if(t[t.length-1].isOperation()){let r=e.pop(),i=t.pop(),a=e.pop();return i.Type==m.DOT?e.push(new Di(a,r)):e.push(new mr(i,a,r)),!0}return!1}}class Hn extends ne{constructor(){super()}formatToWGSL(t,e){return(e<=0?"":"    ".repeat(e))+"("+this.nodes[0].formatToWGSL(t,0)+")"}}class ir extends ne{constructor(e){super();s(this,"name");this.name=e}formatToWGSL(e,r){return(r<=0?"":"    ".repeat(r))+e.findIdentifier(this.name)}}class ar extends ne{constructor(e){super();s(this,"value");this.value=e}static parse(e){let r=e.peekToken(0);if(r.Type==m.SUB&&e.peekToken(1).Type==m.LITERAL){let i=new ar("-"+e.peekToken(1).Literal);return e.skipToken(2),i}else if(r.Type==m.LITERAL){let i=new ar(r.Literal);return e.skipToken(1),i}throw"Error parsing literal constants: Unexpected characters("+r.Literal+")"}formatToWGSL(e,r){return(r<=0?"":"    ".repeat(r))+this.value}}class Bi extends ar{constructor(e){super("");s(this,"arrayValue");this.arrayValue=e}static parse(e){if(e.peekToken(0).Type==m.LEFTBIG&&e.peekToken(1).Type==m.LITERAL||e.peekToken(0).Type==m.LEFTBIG&&e.peekToken(1).Type==m.SUB&&e.peekToken(2).Type==m.LITERAL){e.skipToken(1);let r=[];for(;e.peekToken(0).Type!=m.RIGHTBIG;){if(e.peekToken(0).Type==m.LEFTSAMLL){r.push(Bi.parse(e));continue}if(r.push(ar.parse(e)),e.peekToken(0).Type==m.COMMA){e.skipToken(1);continue}else if(e.peekToken(0).Type==m.RIGHTBIG){e.skipToken(1);break}else throw"Error parsing array constants: Unexpected characters"}return new Bi(r)}throw"Error parsing array constants: Unexpected characters"}formatToWGSL(e,r){let i="",a=r<=0?"":"    ".repeat(r);this.arrayValue[0].value.includes(".")?i+=a+"array<f32, "+this.arrayValue.length.toString()+">(":i+=a+"array<i32, "+this.arrayValue.length.toString()+">(";for(let o=0;o<this.arrayValue.length;o++)o>0&&(i+=", "),i+=this.arrayValue[o].formatToWGSL(e,0);return i+=")",i}}class Pa extends ne{constructor(){super()}static parse(t){if(t.peekToken(0).Type==m.CONTINUE&&t.peekToken(1).Type==m.SEMICOLON)return t.skipToken(2),new Pa;throw"Error parsing continue: Unexpected character"}formatToWGSL(t,e){let r="",i=e<=0?"":"    ".repeat(e);return r+=i+"continue",r}}class Wi extends ne{constructor(e){super();s(this,"value");this.value=e}static parse(e){if(e.peekToken(0).Type==m.RETURN){e.skipToken(1);let r=W.parse(e);return e.peekToken(0).Type==m.SEMICOLON&&e.skipToken(1),new Wi(r)}throw"Error parsing return expression: Unexpected character"}formatToWGSL(e,r){let i="",a=r<=0?"":"    ".repeat(r);return i+=a+"return "+this.value.formatToWGSL(e,0),i}}class Wr extends ne{constructor(e,r,i){super();s(this,"op");s(this,"leftValue");s(this,"rightValue");this.op=e,this.leftValue=r,this.rightValue=i}formatToWGSL(e,r){let i="",a=r<=0?"":"    ".repeat(r);if(this.op.Literal=="++"||this.op.Literal=="--")if(this.leftValue!=null){let o=this.leftValue.formatToWGSL(e,0);i+=a+o+" = "+o+" "+this.op.Literal[0]+" 1"}else{let o=this.rightValue.formatToWGSL(e,0);i+=a+o+" = "+o+" "+this.op.Literal[0]+" 1"}else this.leftValue!=null?i+=a+this.leftValue.formatToWGSL(e,0)+this.op.Literal:i+=a+this.op.Literal+this.rightValue.formatToWGSL(e,0);return i}}class mr extends ne{constructor(e,r,i){super();s(this,"op");s(this,"leftValue");s(this,"rightValue");this.op=e,this.leftValue=r,this.rightValue=i}formatToWGSL(e,r){let i="",a=r<=0?"":"    ".repeat(r);return i+=a+this.leftValue.formatToWGSL(e,0)+" "+this.op.Literal+" "+this.rightValue.formatToWGSL(e,0),i}}class Yn extends ne{constructor(e,r,i){super();s(this,"condition");s(this,"expression1");s(this,"expression2");this.condition=e,this.expression1=r,this.expression2=i}static parse(e){throw"Error parsing ternary operation expression: Unexpected character"}formatToWGSL(e,r){return""}}class Di extends ne{constructor(e,r){super();s(this,"leftValue");s(this,"rightValue");this.leftValue=e,this.rightValue=r}static parse(e){if(e.peekToken(0).Type==m.IDENT&&e.peekToken(1).Type==m.DOT&&e.peekToken(2).Type==m.IDENT){let r=new ir(e.peekToken(0).Literal),i=new ir(e.peekToken(2).Literal);return e.skipToken(3),new Di(r,i)}throw"Error parsing selection expression: Unexpected character"}formatToWGSL(e,r){return(r<=0?"":"    ".repeat(r))+this.leftValue.formatToWGSL(e,0)+"."+this.rightValue.formatToWGSL(e,0)}}class Or extends ne{constructor(e,r){super();s(this,"leftValue");s(this,"indexValue");this.leftValue=e,this.indexValue=r}static parse(e){if(e.peekToken(0).Type==m.IDENT&&e.peekToken(1).Type==m.LEFTMEDI){let r=new ir(e.peekToken(0).Literal);e.skipToken(2);let i=W.parse(e);e.peekToken(0).Type==m.RIGHTMEDI&&e.skipToken(1);let a=new Or(r,i);for(;e.peekToken(0).Type==m.LEFTMEDI;)e.skipToken(1),i=W.parse(e),e.peekToken(0).Type==m.RIGHTMEDI&&e.skipToken(1),a=new Or(a,i);return a}throw"Error parsing index expression: Unexpected character"}formatToWGSL(e,r){return(r<=0?"":"    ".repeat(r))+this.leftValue.formatToWGSL(e,0)+"["+this.indexValue.formatToWGSL(e,0)+"]"}}class Tt extends ne{constructor(){super()}static parse(t){if(t.peekToken(0).Type==m.LEFTBIG){t.skipToken(1);let e=new Tt;for(let r=1;r>0&&t.peekToken(0).Type!=m.EOF;){let i=t.peekToken(0);if(i.Type==m.LEFTBIG){r++,t.skipToken(1);continue}if(i.Type==m.RIGHTBIG){r--,t.skipToken(1);continue}if(i.Type==m.SEMICOLON){t.skipToken(1);continue}if(i.isDataType()&&t.peekToken(1).Type==m.IDENT){e.addNode(fe.parse(t));continue}if(i.Type==m.CONST&&t.peekToken(1).isDataType()&&t.peekToken(2).Type==m.IDENT){e.addNode(fe.parse(t));continue}else if(i.Type==m.IDENT&&t.peekToken(1).Type==m.ASSIGN){e.addNode(W.parse(t)),t.peekToken(0).Type==m.SEMICOLON&&t.skipToken(1);continue}else if(i.Type==m.IDENT&&t.peekToken(1).Type==m.LEFTMEDI){let a=Or.parse(t);if(t.peekToken(0).Type==m.ASSIGN){let o=t.peekToken(0);t.skipToken(1);let l=W.parse(t);t.peekToken(0).Type==m.RIGHTMEDI&&t.skipToken(1),e.addNode(new mr(o,a,l));continue}e.addNode(a);continue}else if(i.Type==m.IDENT&&t.peekToken(1).Type==m.DOT){let a=W.parse(t);e.addNode(a);continue}else if(i.Type==m.IDENT&&t.peekToken(1).isAssignOperation()){let a=t.peekToken(1),o=new ir(i.Literal);t.skipToken(2);let l=W.parse(t);t.peekToken(0).Type==m.SEMICOLON&&t.skipToken(1),e.addNode(new mr(a,o,l));continue}else if(i.Type==m.IDENT&&(t.peekToken(1).Type==m.INC||t.peekToken(1).Type==m.DEC)&&t.peekToken(2).Type==m.SEMICOLON){let a=t.peekToken(1);e.addNode(new Wr(a,new ir(i.Literal),void 0)),t.skipToken(3);continue}else if(i.Type==m.RETURN){e.addNode(Wi.parse(t));continue}else if(i.Type==m.CONTINUE){e.addNode(Pa.parse(t));continue}else if(i.Type==m.WHILE){e.addNode(Lr.parse(t));continue}else if(i.Type==m.FOR){e.addNode(Ur.parse(t));continue}else if(i.Type==m.IF){e.addNode(kr.parse(t));continue}else if(i.Type==m.IDENT&&t.peekToken(1).Type==m.LEFTSAMLL){e.addNode(Pr.parse(t)),t.peekToken(0).Type==m.SEMICOLON&&t.skipToken(0);continue}throw"Error parsing block: Unexpected symbol("+i.Literal+")"}return e}throw"Error parsing block: Unexpected symbol"}}class Ua extends ne{constructor(e,r){super();s(this,"type");s(this,"qualifier");this.type=r,this.qualifier=e}static parse(e){if(e.peekToken(0).Type==m.PRECISION&&e.peekToken(1).Type==m.IDENT&&e.peekToken(2).isBuiltinType()){let r=new Ua(e.peekToken(1).Literal,e.peekToken(2).Literal);return e.skipToken(3),e.peekToken(0).Type==m.SEMICOLON&&e.skipToken(1),r}throw"Error parsing precision qualifier: Unexpected character"}formatToWGSL(e,r){return""}}class Ki extends ne{constructor(){super();s(this,"scope","");s(this,"qualifier",new Map)}addQualifier(e,r=""){this.qualifier.set(e,r)}static parse(e){if(e.peekToken(0).Type==m.LAYOUT&&e.peekToken(1).Type==m.LEFTSAMLL){let r=new Ki;e.skipToken(2);do if(e.peekToken(0).Type==m.IDENT){if(e.peekToken(1).Type==m.ASSIGN&&e.peekToken(2).Type==m.LITERAL){let i=e.peekToken(0).Literal,a=e.peekToken(2).Literal;if(r.addQualifier(i,a),e.skipToken(3),e.peekToken(0).Type==m.COMMA){e.skipToken(1);continue}let o=e.peekToken(0);o.Line=0}else if(e.peekToken(1).Type==m.RIGHTSAMLL){let i=e.peekToken(0).Literal;r.addQualifier(i,""),e.skipToken(1);break}else if(e.peekToken(1).Type==m.COMMA){let i=e.peekToken(0).Literal;r.addQualifier(i,""),e.skipToken(2);continue}}while(e.peekToken(0).Type!=m.RIGHTSAMLL);if(e.peekToken(0).Type==m.RIGHTSAMLL&&e.skipToken(1),r.scope=e.peekToken(0).Literal,e.skipToken(1),e.peekToken(0).Type==m.SEMICOLON)return e.skipToken(1),r;if(e.peekToken(0).isBuiltinType()&&e.peekToken(1).Type==m.IDENT&&e.peekToken(2).Type==m.SEMICOLON){let i=new fe(e.peekToken(0).Literal,e.peekToken(1).Literal);return r.addNode(i),e.skipToken(3),r}else if(e.peekToken(0).Type==m.IDENT&&e.peekToken(1).Type==m.LEFTBIG){let i=rr.parse(e);return r.addNode(i),e.peekToken(0).Type==m.IDENT&&e.peekToken(1).Type==m.SEMICOLON&&(i.addNode(new fe(i.name,e.peekToken(0).Literal)),e.skipToken(2)),r}else throw"Error parsing layout qualifier type: Unexpected symbol("+e.peekToken(0).Literal+")"}throw"Error parsing layout qualifier: Unexpected symbol"}formatToWGSL(e,r){let i="";if(this.qualifier.size==1&&this.qualifier.has("location"))i+="@location("+this.qualifier.get("location")+") ";else if(this.qualifier.size==2&&this.qualifier.has("set")&&this.qualifier.has("binding"))i+="@group("+this.qualifier.get("set")+") @binding("+this.qualifier.get("binding")+") ";else if(this.qualifier.size>=1&&this.qualifier.has("binding"))i+="@group(0) @binding("+this.qualifier.get("binding")+") ";else if(this.qualifier.size==1&&this.qualifier.has("push_constant"))i+="@push_constant ";else if(this.qualifier.size>=1&&this.qualifier.has("local_size_x"))i+="@workgroup_size(",i+=this.qualifier.get("local_size_x")+", ",i+=this.qualifier.has("local_size_y")?this.qualifier.get("local_size_y")+", ":"1, ",i+=this.qualifier.has("local_size_z")?this.qualifier.get("local_size_z")+"":"1",i+=")";else if(this.nodes.length<=0)return"";let a=this.nodes[0];if(a instanceof fe){switch(a.type){case"sampler":case"texture2D":i+="var ";break;default:this.scope=="buffer"?e.stage=="compute"?i+="var<storage, read_write> ":i+="var<storage, read> ":i+="var<"+this.scope+"> ";break}e.addIdentifier(a.name,a.name),i+=a.name+": "+ot(a.type)+`;\r
`}else if(a instanceof rr){if(this.scope=="buffer"?e.stage=="compute"?i+="var<storage, read_write> ":i+="var<storage, read> ":i+="var<"+this.scope+"> ",a.nodes.length<=0){let o="unif"+e.layoutUniformCount.toString();for(;e.hasIdentifier(o);)e.layoutUniformCount++,o="unif"+e.layoutUniformCount.toString();for(let l of a.fields)e.addIdentifier(l.name,o+"."+l.name);i+=o+": "+a.name+`;\r
`,e.layoutUniformCount++}else{let o=a.nodes[0];i+=o.name+": "+o.type+`;\r
`}return i}return i}}function ot(n){switch(n){case"int":return"i32";case"int[]":return"array<i32>";case"uint":return"u32";case"uint[]":return"array<u32>";case"float":return"f32";case"float[]":return"array<f32>";case"vec2":return"vec2<f32>";case"vec3":return"vec3<f32>";case"vec4":return"vec4<f32>";case"vec2[]":return"array<vec2<f32>>";case"vec3[]":return"array<vec3<f32>>";case"vec4[]":return"array<vec4<f32>>";case"ivec2":return"vec2<i32>";case"ivec3":return"vec3<i32>";case"ivec4":return"vec4<i32>";case"ivec2[]":return"array<vec2<i32>>";case"ivec3[]":return"array<vec3<i32>>";case"ivec4[]":return"array<vec4<i32>>";case"mat2":return"mat2x2<f32>";case"mat2x2":return"mat2x2<f32>";case"mat2x3":return"mat2x3<f32>";case"mat2x4":return"mat2x4<f32>";case"mat2[]":return"array<mat2x2<f32>>";case"mat2x2[]":return"array<mat2x2<f32>>";case"mat2x3[]":return"array<mat2x3<f32>>";case"mat2x4[]":return"array<mat2x4<f32>>";case"mat3":return"mat3x3<f32>";case"mat3x2":return"mat3x2<f32>";case"mat3x3":return"mat3x3<f32>";case"mat3x4":return"mat3x4<f32>";case"mat3[]":return"array<mat3x3<f32>>";case"mat3x2[]":return"array<mat3x2<f32>>";case"mat3x3[]":return"array<mat3x3<f32>>";case"mat3x4[]":return"array<mat3x4<f32>>";case"mat4":return"mat4x4<f32>";case"mat4x2":return"mat4x2<f32>";case"mat4x3":return"mat4x3<f32>";case"mat4x4":return"mat4x4<f32>";case"mat4[]":return"array<mat4x4<f32>>";case"mat4x2[]":return"array<mat4x2<f32>>";case"mat4x3[]":return"array<mat4x3<f32>>";case"mat4x4[]":return"array<mat4x4<f32>>";case"texture2D":return"texture_2d<f32>"}return n}class Wn{constructor(t){s(this,"_lexer");s(this,"_rootNode");this._lexer=t,this._rootNode=new ne,this.parse()}get lexer(){return this._lexer}parse(){for(;this.peekToken(0).Type!==m.EOF;){if(this.peekToken(0).Type==m.SEMICOLON){this.skipToken(1);continue}let t=this.parseStatement();t!==null&&this._rootNode.addNode(t)}}parseStatement(){let t=this.peekToken();if(t.Type==m.LAYOUT&&this.peekToken(1).Type==m.LEFTSAMLL)return Ki.parse(this._lexer);if(t.Type==m.STRUCT)return this.skipToken(1),rr.parse(this._lexer);if((t.isBuiltinType()||t.Type==m.VOID)&&this.peekToken(1).Type==m.IDENT&&this.peekToken(2).Type==m.LEFTSAMLL)return Ra.parse(this._lexer);if(t.Type==m.CONST&&this.peekToken(1).isDataType())return fe.parse(this._lexer);if(t.isDataType()&&this.peekToken(1).Type==m.IDENT)return fe.parse(this._lexer);if(t.Type==m.OUT&&this.peekToken(1).isDataType()&&this.peekToken(2).Type==m.IDENT)return fe.parse(this._lexer);if(t.Type==m.PRECISION)return Ua.parse(this._lexer);throw"Error parsing statement: Unexpected character"}skipToken(t){this._lexer.skipToken(t)}peekToken(t=0){return this._lexer.peekToken(t)}getNextToken(){return this._lexer.GetNextToken()}get ASTRoot(){return this._rootNode}}class la{static convertGLSL(t){var e=new zn(t),r=new Qn(e),i=new Wn(r),a=new Vn(i);return a.generateWGSL()}}s(la,"VertexShader","VertexShader"),s(la,"FragmentShader","FragmentShader");class ss{constructor(){s(this,"setID",0);s(this,"bindingID",0);s(this,"name","");s(this,"type","")}}class os{constructor(){s(this,"name","");s(this,"type","");s(this,"locationID",0);s(this,"builtinName","")}isBuiltinAttribute(){return this.builtinName!=""}}class Kn{constructor(){s(this,"uniformInfo",[]);s(this,"inputAttribute",[]);s(this,"outputAttribute",[]);s(this,"sourceCode","")}}var _t=(n=>(n[n.vertex=0]="vertex",n[n.fragment=1]="fragment",n[n.computer=2]="computer",n))(_t||{});class Xn{constructor(){s(this,"blendMode",j.NONE);s(this,"depthCompare",Xt.less);s(this,"depthWriteEnabled",!0);s(this,"frontFace","ccw");s(this,"cullMode",Ze.back);s(this,"topology",Hi.triangle_list);s(this,"depthBias",10);s(this,"useLight",!1);s(this,"useProbe",!1);s(this,"acceptGI",!1);s(this,"acceptShadow",!1);s(this,"castShadow",!1);s(this,"castReflection",!1);s(this,"receiveEnv",!1);s(this,"renderLayer",1e3);s(this,"renderOrder",2e3);s(this,"unclippedDepth",!1);s(this,"transparent",!1);s(this,"multisample",0);s(this,"label");s(this,"useZ",!0);s(this,"splitTexture",!1);s(this,"alphaCutoff");s(this,"useFragDepth",!1);s(this,"writeMasks",[])}setFromMapValues(t){t.has("blendMode")&&(this.blendMode=this.convertBlendMode(t.get("blendMode"))),t.has("depthCompare")&&(this.depthCompare=t.get("depthCompare")),t.has("depthWriteEnabled")&&(this.depthWriteEnabled=t.get("depthWriteEnabled")),t.has("frontFace")&&(this.frontFace=t.get("frontFace")),t.has("cullMode")&&(this.cullMode=t.get("cullMode")),t.has("topology")&&(this.topology=t.get("topology")),t.has("depthBias")&&(this.depthBias=t.get("depthBias")),t.has("useLight")&&(this.useLight=t.get("useLight")),t.has("useProbe")&&(this.useProbe=t.get("useProbe")),t.has("acceptGI")&&(this.acceptGI=t.get("acceptGI")),t.has("acceptShadow")&&(this.acceptShadow=t.get("acceptShadow")),t.has("castShadow")&&(this.castShadow=t.get("castShadow")),t.has("receiveEnv")&&(this.receiveEnv=t.get("receiveEnv")),t.has("renderLayer")&&(this.renderLayer=t.get("renderLayer")),t.has("renderOrder")&&(this.renderOrder=t.get("renderOrder")),t.has("unclippedDepth")&&(this.unclippedDepth=t.get("unclippedDepth")),t.has("multisample")&&(this.multisample=t.get("multisample")),t.has("label")&&(this.label=t.get("label")),t.has("useZ")&&(this.useZ=t.get("useZ"))}convertBlendMode(t){switch(t){case"ABOVE":return j.ABOVE;case"ALPHA":return j.ALPHA;case"NORMAL":return j.NORMAL;case"ADD":return j.ADD;case"BELOW":return j.BELOW;case"ERASE":return j.ERASE;case"MUL":return j.MUL;case"SCREEN":return j.SCREEN;case"DIVD":return j.DIVD;case"SOFT_ADD":return j.SOFT_ADD}return j.NONE}}class jn extends nr{constructor(){super();s(this,"uniformNodes",[]);s(this,"_onChange",!0);this.bufferType=Ut.MaterialDataUniformGPUBuffer}initDataUniform(e){this.uniformNodes=e;let r=0;for(const i in e){const a=e[i];a||console.error(i,"is empty"),r+=a.size*4}r=Math.floor(r/256+1)*256,this.createBuffer(GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,r/4,null,"MaterialDataUniformGPUBuffer");for(const i in e){const a=e[i];a||console.error(i,"is empty");let o=this.memory.allocation_node(a.size*4);a.memoryInfo=o,a.bindOnChange=()=>this.onChange()}}onChange(){this._onChange=!0}apply(){if(this.uniformNodes.length!=0&&this._onChange){for(const e in this.uniformNodes)this.uniformNodes[e].update();super.apply(),this._onChange=!1}}}class wt{static init(){this.renderShaderModulePool=new Map,this.renderShader=new Map}}s(wt,"renderShaderModulePool"),s(wt,"renderShader");const Qi=class Qi{constructor(){s(this,"reference")}static getInstance(){return this._ins||(this._ins=new Qi),this._ins}attached(t,e){this.reference||(this.reference=new Map);let r=this.reference.get(t);r||(r=new Map),r.set(e,t),this.reference.set(t,r)}detached(t,e){let r=this.reference.get(t);r&&r.delete(e)}hasReference(t){let e=this.reference.get(t);return e?e.size>0:!1}getReferenceCount(t){let e=this.reference.get(t);return e?e.size:0}getReference(t){return this.reference.get(t)||null}};s(Qi,"_ins");let q=Qi;class ha{static getSharePipeline(t){return this.pipelineMap.get(t)||null}static setSharePipeline(t,e){this.pipelineMap.set(t,e)}}s(ha,"pipelineMap",new Map);class Be extends Us{constructor(e,r){super();s(this,"passType",Y.COLOR);s(this,"useRz",!1);s(this,"vsName");s(this,"fsName");s(this,"shaderState");s(this,"textures");s(this,"pipeline");s(this,"bindGroupLayouts");s(this,"envMap");s(this,"prefilterMap");s(this,"_sourceVS");s(this,"_sourceFS");s(this,"_destVS");s(this,"_destFS");s(this,"_vsShaderModule");s(this,"_fsShaderModule");s(this,"_textureGroup",-1);s(this,"_textureChange",!1);s(this,"_groupsShaderReflectionVarInfos");s(this,"outBufferMask");s(this,"_cacheEntries");this.vsName=e.toLowerCase(),this.fsName=r.toLowerCase(),this.vsName in L||console.error("Shader Not Register, Please Register Shader!",this.vsName),this.fsName in L||console.error("Shader Not Register, Please Register Shader!",this.fsName),L[this.vsName]&&(this._sourceVS=L[this.vsName]),L[this.fsName]&&(this._sourceFS=L[this.fsName]),this.textures={},this.bindGroups=[],this.shaderState=new Xn,this.materialDataUniformBuffer=new jn,this.materialDataUniformBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,this._bufferDic.set("global",this.materialDataUniformBuffer),this._bufferDic.set("materialUniform",this.materialDataUniformBuffer)}get renderOrder(){return this.shaderState.renderOrder}set renderOrder(e){this.shaderState.renderOrder!=e&&(this._valueChange=!0),this.shaderState.renderOrder=e}get doubleSide(){return this.shaderState.cullMode==Ze.none}set doubleSide(e){let r=e?Ze.none:this.cullMode;this.shaderState.cullMode!=r&&(this._valueChange=!0),this.shaderState.cullMode=r}get depthWriteEnabled(){return this.shaderState.depthWriteEnabled}set depthWriteEnabled(e){this.shaderState.depthWriteEnabled!=e&&(this._valueChange=!0),this.shaderState.depthWriteEnabled=e}get cullMode(){return this.shaderState.cullMode}set cullMode(e){this.shaderState.cullMode!=e&&(this._valueChange=!0),this.shaderState.cullMode=e}get frontFace(){return this.shaderState.frontFace}set frontFace(e){this.shaderState.frontFace!=e&&(this._valueChange=!0),this.shaderState.frontFace=e}get depthBias(){return this.shaderState.depthBias}set depthBias(e){this.shaderState.depthBias!=e&&(this._valueChange=!0),this.shaderState.depthBias=e}get topology(){return this.shaderState.topology}set topology(e){this.shaderState.topology!=e&&(this._valueChange=!0),this.shaderState.topology=e}get blendMode(){return this.shaderState.blendMode}set blendMode(e){this.shaderState.blendMode!=e&&(this._valueChange=!0,e!=j.NORMAL&&e!=j.NONE&&(this.renderOrder=3e3)),this.shaderState.blendMode=e}get depthCompare(){return this.shaderState.depthCompare}set depthCompare(e){this.shaderState.depthCompare!=e&&(this._valueChange=!0),this.shaderState.depthCompare=e}setShaderEntry(e="",r=""){this.vsEntryPoint=e,this.fsEntryPoint=r}setUniform(e,r){super.setUniform(e,r),this.materialDataUniformBuffer.onChange()}setTexture(e,r){r&&this.textures[e]!=r&&(this.textures[e]&&this.textures[e].unBindStateChange(this),this._textureChange=!0,this.textures[e]=r,e=="envMap"?this.envMap=r:e=="prefilterMap"&&(this.prefilterMap=r),r.bindStateChange(()=>{this._textureChange=!0},this))}get baseColor(){return this.getUniform("baseColor")}set baseColor(e){this.setUniform("baseColor",e)}getTexture(e){return this.textures[e]}genRenderPipeline(e,r){let i=this.createGroupLayouts();this.createPipeline(e,r,i)}reBuild(e,r){this.compileShader(_t.vertex,this._destVS,r),this.compileShader(_t.fragment,this._destFS,r),this.genRenderPipeline(e,r)}apply(e,r,i){this.materialDataUniformBuffer.apply(),this._textureChange&&this._textureGroup!=-1&&(this._textureChange=!1,this.genGroups(this._textureGroup,this.shaderReflection.groups,!0)),this._valueChange&&(this._shaderChange&&(this.preCompile(e),this._shaderChange=!1),this.shaderVariant=je.genRenderShaderVariant(this),this.reBuild(e,r),this._valueChange=!1,i&&i())}preCompile(e){this.preDefine(e),this.preCompileShader(_t.vertex,this._sourceVS.concat()),this.preCompileShader(_t.fragment,this._sourceFS.concat()),this.genReflection()}applyPostDefine(e,r){return r.renderTargetTextures.length>1?(this.defineValue.USE_WORLDPOS=!0,this.defineValue.USEGBUFFER=!0):(this.defineValue.USE_WORLDPOS=!1,this.defineValue.USEGBUFFER=!1),ur.parse(e,this.defineValue)}setBindGroup(e,r){this.bindGroups[e]=r}checkBuffer(e,r){}preCompileShader(e,r,i){let a=r;if(a.indexOf("version ")!=-1){var o=la.convertGLSL(a);a=o.sourceCode}for(const l in this.constValues)if(Object.prototype.hasOwnProperty.call(this.constValues,l)){const h=this.constValues[l];a=a.replaceAll(`&${l}`,h.toString())}switch(e){case _t.vertex:this._destVS=a;break;case _t.fragment:this._destFS=a;break}}compileShader(e,r,i){let a=r;a=this.applyPostDefine(a,i);let o=r;for(let h in this.defineValue)o+=`${h}=${this.defineValue[h]},`;let l=wt.renderShaderModulePool.get(o);switch(l||(a=this.applyPostDefine(a,i),l=w.device.createShaderModule({label:e==_t.vertex?this.vsName:this.fsName,code:a}),l.getCompilationInfo().then(h=>{h.messages.length>0&&(console.log(a),console.log(h))}),wt.renderShaderModulePool.set(o,l)),e){case _t.vertex:this._vsShaderModule=l,this._destVS=a;break;case _t.fragment:this._fsShaderModule=l,this._destFS=a;break}}getGroupLayout(e,r){let i=[];for(let a=0;a<r.length;a++){const o=r[a];if(o)if(o.varType=="uniform"){this._bufferDic.has(o.varName)||console.error(`not set ${o.varName} buffer`);let l=this._bufferDic.get(o.varName).visibility,h={binding:o.binding,visibility:l,buffer:{type:"uniform"}};i.push(h)}else if(o.varType=="storage-read"){this._bufferDic.has(o.varName)||console.error(`not set ${o.varName} buffer`);let l=this._bufferDic.get(o.varName).visibility,h={binding:o.binding,visibility:l,buffer:{type:"read-only-storage"}};i.push(h)}else if(o.varType=="var")switch(o.dataType){case"sampler":{let l=o.varName.replace("Sampler",""),h=this.textures[l]?this.textures[l]:y.res.redTexture,u={binding:o.binding,visibility:h.visibility,sampler:h.samplerBindingLayout};i.push(u),this._textureGroup=e}break;case"sampler_comparison":{let l=o.varName.replace("Sampler",""),h=this.textures[l]?this.textures[l]:y.res.redTexture,u={binding:o.binding,visibility:h.visibility,sampler:h.sampler_comparisonBindingLayout};i.push(u),this._textureGroup=e}break;case"texture_2d<f32>":case"texture_2d_array<f32>":case"texture_cube<f32>":case"texture_depth_2d":case"texture_depth_2d_array":case"texture_depth_cube":case"texture_depth_cube_array":{let l=this.textures[o.varName]?this.textures[o.varName]:y.res.redTexture,h={binding:o.binding,visibility:l.visibility,texture:l.textureBindingLayout};i.push(h),this._textureGroup=e,q.getInstance().attached(l,this)}break;case"texture_external":{let l=this.textures[o.varName]?this.textures[o.varName]:y.res.redTexture,h={binding:o.binding,visibility:l.visibility,externalTexture:{}};i.push(h),this._textureGroup=e,q.getInstance().attached(l,this)}break;default:{let l=this.textures[o.varName]?this.textures[o.varName]:y.res.redTexture,h={binding:o.binding,visibility:l.visibility,texture:l.textureBindingLayout};i.push(h),this._textureGroup=e,q.getInstance().attached(l,this)}break}else{debugger;console.error("bind group can't empty")}}return i}genGroups(e,r,i=!1){if(!this.bindGroups[e]||i){const a=r[e];let o=[];for(let h=0;h<a.length;h++){const u=a[h];if(u){if(u.varType=="uniform"){let c=this._bufferDic.get(u.varName);if(c){if(c.bufferType==Ut.MaterialDataUniformGPUBuffer){let f=[];for(let p=0;p<u.dataFields.length;p++){const A=u.dataFields[p];this.uniforms[A.name]||console.error(`shader-${this.vsName}:${this.fsName} ${A.name}is empty`),f.push(this.uniforms[A.name])}this.materialDataUniformBuffer.initDataUniform(f)}let d={binding:u.binding,resource:{buffer:c.buffer,offset:0,size:c.memory.shareDataBuffer.byteLength}};o.push(d),this.checkBuffer(u.varName,c)}else console.error(`shader${this.vsName}-${this.fsName}`,`buffer ${u.varName} is missing!`)}else if(u.varType=="storage-read"){let c=this._bufferDic.get(u.varName);if(c){let d={binding:u.binding,resource:{buffer:c.buffer,offset:0,size:c.memory.shareDataBuffer.byteLength}};o.push(d),this.checkBuffer(u.varName,c)}else console.error(`buffer ${u.varName} is missing!`)}else if(u.varType=="var")if(u.dataType=="sampler"){let c=u.varName.replace("Sampler",""),d=this.textures[c];if(d||(d=y.res.blackTexture,this.setTexture(c,d)),d){let f={binding:u.binding,resource:d.gpuSampler};o.push(f)}else console.error(`shader${this.vsName}-${this.fsName}`,`texture ${u.varName} is missing! `)}else if(u.dataType=="sampler_comparison"){let c=u.varName.replace("Sampler",""),d=this.textures[c];if(d){let f={binding:u.binding,resource:d.gpuSampler_comparison};o.push(f)}else console.error(`shader${this.vsName}-${this.fsName}`,`texture ${u.varName} is missing! `)}else{let c=this.textures[u.varName];if(c||(c=y.res.whiteTexture,this.setTexture(u.varName,c)),c){let d={binding:u.binding,resource:c.getGPUView()};o.push(d)}else console.error(`shader${this.vsName}-${this.fsName}`,`texture ${u.varName} is missing! `)}}}let l=w.device.createBindGroup({layout:this.bindGroupLayouts[e],entries:o});this.bindGroups[e]=l}}createPipeline(e,r,i){let a=e,o=this.shaderState,l=[];for(const c of r.renderTargetTextures)l.push({format:c.format});for(let c=0;c<l.length;c++){const d=l[c];o.writeMasks&&o.writeMasks.length>0&&(d.writeMask=o.writeMasks[c])}if(r.outColor!=-1){let c=l[r.outColor];o.blendMode!=j.NONE?c.blend=Fn.getBlend(o.blendMode):delete c.blend}let h={label:this.vsName+"|"+this.fsName,layout:i,primitive:{topology:o.topology,cullMode:o.cullMode,frontFace:o.frontFace},vertex:void 0};this.vsEntryPoint!=""&&(h.vertex={module:this._vsShaderModule,entryPoint:this.vsEntryPoint,buffers:a.vertexBuffer.vertexBufferLayouts}),this.fsEntryPoint!=""&&(h.fragment={module:this._fsShaderModule,entryPoint:this.fsEntryPoint,targets:l}),o.multisample>0&&(h.multisample={count:o.multisample}),(r.zPreTexture||r.depthTexture)&&(o.blendMode!=j.NONE,y.setting.render.zPrePass&&r.zPreTexture&&o.useZ?h.depthStencil={depthWriteEnabled:!1,depthCompare:Xt.less,format:r.zPreTexture.format}:h.depthStencil={depthWriteEnabled:o.depthWriteEnabled,depthCompare:o.depthCompare,format:r.depthTexture.format});let u=ha.getSharePipeline(this.shaderVariant);u?this.pipeline=u:(this.pipeline=b.createPipeline(h),ha.setSharePipeline(this.shaderVariant,this.pipeline))}createGroupLayouts(){this._groupsShaderReflectionVarInfos=[];let e=this.shaderReflection;this.bindGroupLayouts=[Da.getGlobalDataBindGroupLayout()];for(let i=1;i<e.groups.length;i++){let a=e.groups[i];if(a){let o=this.getGroupLayout(i,a);this._groupsShaderReflectionVarInfos[i]=a;let l=w.device.createBindGroupLayout({entries:o,label:`vs${this.vsName} fs${this.fsName} ${a.length}`});this.bindGroupLayouts[i]=l}else console.error("can't set empty group!",i)}let r=w.device.createPipelineLayout({bindGroupLayouts:this.bindGroupLayouts});return this._groupsShaderReflectionVarInfos[0],this._groupsShaderReflectionVarInfos[1]&&this.genGroups(1,this._groupsShaderReflectionVarInfos),this._groupsShaderReflectionVarInfos[2]&&this.genGroups(2,this._groupsShaderReflectionVarInfos),this._groupsShaderReflectionVarInfos[3]&&this.genGroups(3,this._groupsShaderReflectionVarInfos),r}preDefine(e){let r=e.hasAttribute(R.TEXCOORD_1),i=e.hasAttribute(R.joints0),a=e.hasAttribute(R.a_morphPositions_0),o=e.hasAttribute(R.TANGENT),l=e.hasAttribute(R.color),h=this.shaderState.acceptGI,u=this.shaderState.useLight;r&&(this.defineValue.USE_SECONDUV=!0),i&&a?this.defineValue.USE_METAHUMAN=!0:(this.defineValue.USE_SKELETON=i,this.defineValue.USE_MORPHTARGETS=a),"USE_TANGENT"in this.defineValue||(this.defineValue.USE_TANGENT=o),this.defineValue.USE_GI=h,this.defineValue.USE_SHADOWMAPING=this.shaderState.acceptShadow,this.defineValue.USE_LIGHT=u,this.defineValue.USE_VERTXCOLOR=l,y.setting.pick.mode=="pixel"&&(this.defineValue.USE_WORLDPOS=!0),y.setting.gi.enable?this.defineValue.USEGI=!0:this.defineValue.USEGI=!1,y.setting.render.debug&&(this.defineValue.USE_DEBUG=!0,this.defineValue.DEBUG_CLUSTER=!0),this.shaderState.useLight?this.defineValue.USE_LIGHT=!0:this.defineValue.USE_LIGHT=!1,y.setting.render.useLogDepth?(this.defineValue.USE_LOGDEPTH=!0,this.shaderState.useFragDepth=!0):this.defineValue.USE_LOGDEPTH=!1,this.shaderState.useFragDepth?this.defineValue.USE_OUTDEPTH=!0:this.defineValue.USE_OUTDEPTH=!1,this.defineValue.USE_PCF_SHADOW=y.setting.shadow.type=="PCF",this.defineValue.USE_HARD_SHADOW=y.setting.shadow.type=="HARD",this.defineValue.USE_SOFT_SHADOW=y.setting.shadow.type=="SOFT",this.defineValue.USE_CSM=Rt.Cascades>1,this.defineValue.USE_IES_PROFILE=oi.use}genReflection(){this.shaderVariant=je.genRenderShaderVariant(this);let e=je.poolGetReflection(this.shaderVariant);if(e)this.shaderReflection=e;else{let r=ur.parse(this._destVS,this.defineValue);r=ur.parse(r,this.defineValue),je.getShaderReflection2(r,this);let i=ur.parse(this._destFS,this.defineValue);i=ur.parse(i,this.defineValue),je.getShaderReflection2(i,this),je.final(this)}this.shaderState.splitTexture=this.shaderReflection.useSplit}destroy(e){for(const r in this.textures)if(Object.prototype.hasOwnProperty.call(this.textures,r)){const i=this.textures[r];if(q.getInstance().detached(i,this),e&&!q.getInstance().hasReference(i))i.destroy(e);else{i.destroy(!1);let a=q.getInstance().getReference(i);if(a){let o=[];a.forEach((l,h)=>{"name"in l?o.push(l.name):o.push("NaN")})}}}this.bindGroups.length=0,this.shaderState=null,this.textures=null,this.pipeline=null,this.bindGroupLayouts=null,this._sourceVS=null,this._sourceFS=null,this._destVS=null,this._destFS=null,this._vsShaderModule=null,this._fsShaderModule=null,this.materialDataUniformBuffer.destroy(e),this.materialDataUniformBuffer=null}static destroyShader(e){wt.renderShader.has(e)&&(wt.renderShader.get(e).destroy(),wt.renderShader.delete(e))}static getShader(e){return wt.renderShader.get(e)}static createShader(e,r){let i=new Be(e,r);return wt.renderShader.set(i.instanceID,i),i.instanceID}}class qn extends Be{constructor(){super("sky_vs_frag_wgsl","SkyGBuffer_fs"),this.passType=Y.GI,this.setUniformVector3("eyesPos",new g),this.setUniformFloat("exposure",1),this.setUniformFloat("roughness",0);let t=this.shaderState;t.frontFace="ccw",t.cullMode=Ze.front,t.depthWriteEnabled=!1,t.depthCompare=Xt.less}}class Jn extends Be{constructor(){super("gbuffer_vs","gbuffer_fs");s(this,"transparency");this.setShaderEntry("VertMain","FragMain"),this.passType=Y.GI,this.setUniformColor("baseColor",new F),this.setUniformColor("emissiveColor",new F),this.setUniformFloat("emissiveIntensity",1),this.setUniformFloat("normalScale",1),this.setUniformFloat("alphaCutoff",1),this.blendMode=j.NONE,this.setTexture("normalMap",y.res.normalTexture)}}class Zn extends Be{constructor(){super("shadowCastMap_vert","directionShadowCastMap_frag"),this.passType=Y.SHADOW,this.setShaderEntry("main"),this.setUniformFloat("cameraFar",5e3),this.setUniformVector3("lightWorldPos",g.ZERO),this.shaderState.receiveEnv=!1,this.shaderState.castShadow=!1,this.shaderState.acceptShadow=!1,this.setDefine("USE_ALPHACUT",!0)}}class $n extends Be{constructor(){super("castPointShadowMap_vert","shadowCastMap_frag"),this.passType=Y.POINT_SHADOW,this.setShaderEntry("main","main"),this.setUniformFloat("cameraFar",5e3),this.setUniformVector3("lightWorldPos",g.ZERO),this.shaderState.receiveEnv=!1,this.shaderState.castShadow=!1,this.shaderState.acceptShadow=!1,this.setDefine("USE_ALPHACUT",!0)}}class el extends Be{constructor(){super("ZPass_shader_vs","ZPass_shader_vs"),this.passType=Y.DEPTH,this.setShaderEntry("main"),this.useRz=!1;let t=this.shaderState;t.receiveEnv=!1}}class fi{static createGIPass(t,e){if(Gt.hasMask(t.rendererMask,ke.Sky)){if(!e.passShader.get(Y.GI)){let r=e.getSubShaders(Y.COLOR)[0],i=new qn;i.setTexture("baseMap",r.getTexture("baseMap")),i.cullMode=r.cullMode,i.frontFace=r.frontFace,e.addRenderPass(i,0),i.preCompile(t.geometry)}}else this.castGBufferPass(t,e)}static castGBufferPass(t,e){let r=e.getDefaultShaders();for(let i=0;i<r.length;i++){const a=r[i];let o=e.getSubShaders(Y.GI);if(!o||o.length==0||o.length<i){let l=new Jn;l.setTexture("baseMap",a.getTexture("baseMap")),l.setTexture("normalMap",a.getTexture("normalMap")),l.setTexture("emissiveMap",a.getTexture("emissiveMap")),l.setUniform("baseColor",a.getUniform("baseColor")),l.setUniform("envIntensity",a.getUniform("envIntensity")),l.setUniform("emissiveColor",a.getUniform("emissiveColor")),l.setUniform("emissiveIntensity",a.getUniform("emissiveIntensity")),l.setUniform("alphaCutoff",a.getUniform("alphaCutoff")),l.cullMode=a.cullMode,l.frontFace=a.frontFace,l.preCompile(t.geometry),e.addRenderPass(l)}}}static createShadowPass(t,e){let r=Gt.hasMask(t.rendererMask,ke.SkinnedMesh),i=t.geometry.hasAttribute(R.TANGENT),a=t.geometry.hasAttribute(te.MORPH_POSITION_PREFIX+"0"),o=t.geometry.hasAttribute(te.MORPH_NORMAL_PREFIX+"0"),l=e.getSubShaders(Y.COLOR);for(let h=0;h<l.length;h++){const u=l[h];let c=e.getSubShaders(Y.SHADOW);if(!c||c.length<h+1){let f=new Zn;f.setTexture("baseMap",u.getTexture("baseMap")),f.setUniform("alphaCutoff",u.getUniform("alphaCutoff")),i&&f.setDefine("USE_TANGENT",i),r&&f.setDefine("USE_SKELETON",r),a&&f.setDefine("USE_MORPHTARGETS",a),o&&f.setDefine("USE_MORPHNORMALS",o),u.cullMode=="none"?f.shaderState.cullMode="none":u.cullMode=="back"?f.shaderState.cullMode="front":u.cullMode=="front"&&(f.shaderState.cullMode="back"),f.preCompile(t.geometry),e.addRenderPass(f)}let d=e.getSubShaders(Y.POINT_SHADOW);if(!d||d.length<h+1){let f=new $n;f.setTexture("baseMap",u.getTexture("baseMap")),f.setUniform("alphaCutoff",u.getUniform("alphaCutoff")),f.setDefine("USE_ALPHACUT",1);for(let p=0;p<1;p++)i&&f.setDefine("USE_TANGENT",i),r&&f.setDefine("USE_SKELETON",r),a&&f.setDefine("USE_MORPHTARGETS",a),o&&f.setDefine("USE_MORPHNORMALS",o),f.shaderState.cullMode="front",f.preCompile(t.geometry);e.addRenderPass(f)}}}static createDepthPass(t,e){let r=e.getSubShaders(Y.COLOR),i=t.geometry.hasAttribute("TANGENT"),a=t.geometry.hasAttribute(te.MORPH_POSITION_PREFIX+"0"),o=t.geometry.hasAttribute(te.MORPH_NORMAL_PREFIX+"0"),l=Gt.hasMask(t.rendererMask,ke.SkinnedMesh);for(let h=0;h<r.length;h++){const u=r[h];let c=e.getSubShaders(Y.DEPTH);if(!c&&u.shaderState.useZ&&(!c||c.length<h)){let d=new el;d.setTexture("baseMap",u.getTexture("baseMap")),i||d.setDefine("USE_TANGENT",i),l&&d.setDefine("USE_SKELETON",l),a&&d.setDefine("USE_MORPHTARGETS",a),o&&d.setDefine("USE_MORPHNORMALS",o),d.cullMode=u.cullMode,d.frontFace=u.frontFace,d.preCompile(t.geometry),e.addRenderPass(d)}}}}class tl{constructor(t){s(this,"renderer");s(this,"owner");s(this,"uuid");this.renderer=t,this.uuid=t.object3D.instanceID}leaveNode(){this.owner&&(this.owner.entities.delete(this.uuid),this.owner=null)}enterNode(t){this.owner&&this.leaveNode(),this.owner=t,t.entities.set(this.uuid,this)}update(t){var e;return(e=this.owner)!=null&&e.tryInsertEntity(this)||(this.leaveNode(),t.tryInsertEntity(this)),this.owner}}var rl=Object.defineProperty,il=Object.getOwnPropertyDescriptor,zr=(n,t,e,r)=>{for(var i=r>1?void 0:r?il(t,e):t,a=n.length-1,o;a>=0;a--)(o=n[a])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&rl(t,e,i),i};class cr extends Ke{constructor(){super(...arguments);s(this,"instanceCount",0);s(this,"lodLevel",0);s(this,"alwaysRender",!1);s(this,"instanceID");s(this,"drawType",0);s(this,"_geometry");s(this,"_materials",[]);s(this,"_castShadow",!0);s(this,"_castReflection",!1);s(this,"_castGI",!1);s(this,"_rendererMask",ke.Default);s(this,"_inRenderer",!1);s(this,"_readyPipeline",!1);s(this,"_combineShaderRefection");s(this,"_ignoreEnvMap");s(this,"_ignorePrefilterMap");s(this,"__renderOrder",0);s(this,"_renderOrder",0);s(this,"isRenderOrderChange");s(this,"needSortOnCameraZ");s(this,"_octreeBinder");s(this,"preInit",!1);s(this,"_renderLayer",Ti.None);s(this,"_computes")}init(e){this.renderOrder=0,this.rendererMask=ke.Default,this.instanceID=Ps().toString(),this._computes=[]}attachSceneOctree(e){this._octreeBinder={octree:e,entity:new tl(this)},this.transform.eventDispatcher.addEventListener(Dt.LOCAL_ONCHANGE,this.updateOctreeEntity,this)}detachSceneOctree(){var e;this._octreeBinder&&((e=this._octreeBinder.entity)==null||e.leaveNode(),this.transform.eventDispatcher.removeEventListener(Dt.LOCAL_ONCHANGE,this.updateOctreeEntity,this),this._octreeBinder=null)}updateOctreeEntity(e){var r,i;(i=(r=this._octreeBinder)==null?void 0:r.entity)==null||i.update(this._octreeBinder.octree)}copyComponent(e){return super.copyComponent(e),this.geometry=e._geometry,this.materials=e._materials.slice(),this.drawType=e.drawType,this.alwaysRender=e.alwaysRender,this.needSortOnCameraZ=e.needSortOnCameraZ,this.isRenderOrderChange=e.isRenderOrderChange,this.castShadow=e.castShadow,this.castGI=e.castGI,this.rendererMask=e.rendererMask,this}get renderLayer(){return this._renderLayer}set renderLayer(e){this._renderLayer=e}get geometry(){return this._geometry}set geometry(e){this._geometry!=e&&(this._geometry&&q.getInstance().detached(this._geometry,this),q.getInstance().attached(e,this)),this._geometry=e}addMask(e){this._rendererMask=Gt.addMask(this.rendererMask,e)}removeMask(e){this._rendererMask=Gt.removeMask(this.rendererMask,e)}hasMask(e){return Gt.hasMask(this.rendererMask,e)}get rendererMask(){return this._rendererMask}set rendererMask(e){this._rendererMask=e}get renderOrder(){return this._renderOrder}set renderOrder(e){e!=this._renderOrder&&(this.isRenderOrderChange=!0,this.__renderOrder=e),this._renderOrder=e}get materials(){return this._materials}set materials(e){this._readyPipeline=!1;for(let i=0;i<this._materials.length;i++){let a=this._materials[i];q.getInstance().detached(a,this),a.shader&&a.shader.computes&&this.removeComputes(a.shader.computes)}for(let i=0;i<e.length;i++){let a=e[i];q.getInstance().attached(a,this),a.shader&&a.shader.computes&&this.addComputes(a.shader.computes)}this._materials=e;let r=0;for(let i=0;i<e.length;i++){const a=e[i].getPass(Y.COLOR)[0];a.shaderState.transparent&&(r=r>a.renderOrder?r:a.renderOrder)}this.renderOrder=r,this._readyPipeline||this.initPipeline()}addComputes(e){this._computes.push(...e)}removeComputes(e){for(const r of e){let i=this._computes.indexOf(r);i!=-1&&this._computes.splice(i,1)}}addRendererMask(e){this._rendererMask=Gt.addMask(this._rendererMask,e)}removeRendererMask(e){this._rendererMask=Gt.removeMask(this._rendererMask,e)}onEnable(){this._readyPipeline||this.initPipeline(),k.instance.addRenderNode(this.transform.scene3D,this),this.updateOctreeEntity()}onDisable(){var e;this._enable=!1,k.instance.removeRenderNode(this.transform.scene3D,this),(e=super.onDisable)==null||e.call(this)}selfCloneMaterials(e){let r=[];for(let i=0,a=this.materials.length;i<a;i++){const o=this.materials[i].clone();r.push(o)}return this.materials=r,this._readyPipeline=!1,this.initPipeline(),this}initPipeline(){if(this._geometry&&this._materials.length>0){for(let r=0;r<this._materials.length;r++){let i=this._materials[r].getPass(Y.COLOR);for(let a=0;a<i.length;a++){const o=i[a];o.shaderReflection||o.preCompile(this._geometry),this._geometry.generate(o.shaderReflection)}this.object3D.bound=this._geometry.bounds.clone()}this._readyPipeline=!0;let e=0;for(let r=0;r<this.materials.length;r++){const i=this.materials[r].getPass(Y.COLOR)[0];i.renderOrder>=3e3?e=e>i.renderOrder?e:i.renderOrder:e=Math.max(e-3e3,0),this.castNeedPass()}this.renderOrder=e,this.enable&&this.transform&&this.transform.scene3D&&k.instance.addRenderNode(this.transform.scene3D,this)}}castNeedPass(){if(this.castGI)for(let e=0;e<this.materials.length;e++){const r=this.materials[e];fi.createGIPass(this,r.shader)}for(let e=0;e<this.materials.length;e++){const r=this.materials[e];r.castShadow&&fi.createShadowPass(this,r.shader)}if(this.castReflection)for(let e=0;e<this.materials.length;e++){const r=this.materials[e];r.castShadow&&fi.createShadowPass(this,r.shader)}if(!Gt.hasMask(this.rendererMask,ke.IgnoreDepthPass)&&y.setting.render.zPrePass)for(let e=0;e<this.materials.length;e++){const r=this.materials[e];fi.createDepthPass(this,r.shader)}else for(let e=0;e<this.materials.length;e++)this.materials[e].shader.removeShaderByIndex(Y.DEPTH,0)}get castShadow(){return this._castShadow}set castShadow(e){this._castShadow=e}get castGI(){return this._castGI}set castGI(e){this._castGI=e}get castReflection(){return this._castReflection}set castReflection(e){this._castReflection=e}renderPass(e,r,i){let a=this,o=a.transform._worldMatrix;for(let l=0;l<a.materials.length;l++){const h=a.materials[l];if(!h||!h.enable)continue;let u=h.getPass(r);if(!(!u||u.length==0)){b.bindGeometryBuffer(i.encoder,a._geometry);for(let c=0;c<u.length;c++){if(!u||u.length==0)continue;const d=u[c];if(d.pipeline){d.shaderState.splitTexture&&(i.endRenderPass(),Fe.WriteSplitColorTexture(a.instanceID),i.beginOpaqueRenderPass(),b.bindCamera(i.encoder,e.camera),b.bindGeometryBuffer(i.encoder,a._geometry)),b.bindPipeline(i.encoder,d);let f=a._geometry.subGeometries[l].lodLevels[a.lodLevel];a.instanceCount>0?b.drawIndexed(i.encoder,f.indexCount,a.instanceCount,f.indexStart,0,0):b.drawIndexed(i.encoder,f.indexCount,1,f.indexStart,0,o.index)}}}}}renderPass2(e,r,i,a,o,l=!1){if(!this.enable)return;let h=this,u=h.object3D.transform._worldMatrix;for(let c=0;c<this.materials.length;c++){const d=this.materials[c];if(!d.castShadow&&r==Y.SHADOW)continue;let f=d.getPass(r);if(!f||f.length==0)return;if(this.drawType==2)for(let p of f)p.pipeline&&(b.bindPipeline(o,p),b.draw(o,6,1,0,u.index));else{b.bindGeometryBuffer(o,h._geometry);for(let p of f)if(p.pipeline){b.bindPipeline(o,p);let A=h._geometry.subGeometries[c].lodLevels[h.lodLevel];b.drawIndexed(o,A.indexCount,1,A.indexStart,0,u.index)}}}}recordRenderPass2(e,r,i,a,o,l=!1){if(!this.enable)return;let h=this;for(let u=0;u<this.materials.length;u++){let c=this.materials[u].getPass(r);if(!c||c.length==0)return;let d=h.object3D.transform._worldMatrix;for(let f=0;f<c.length;f++){const p=c[f];b.bindPipeline(o,p);let A=h._geometry.subGeometries[u].lodLevels[h.lodLevel];b.drawIndexed(o,A.indexCount,1,A.indexStart,0,d.index)}}}noticeShaderChange(){this.enable&&(this.onEnable(),this.preInit=!1)}nodeUpdate(e,r,i,a){this.preInit=!0;let o=this,l=e.scene.envMap;for(let h=0;h<o.materials.length;h++){let u=o.materials[h].getPass(r);if(u)for(let c=0;c<u.length;c++){const d=u[c];if(d.shaderState.splitTexture){let v=Fe.CreateSplitTexture(o.instanceID);d.setTexture("splitTexture_Map",v)}if(!o._ignoreEnvMap&&d.envMap!=l&&d.setTexture("envMap",l),d.setTexture("prefilterMap",l),d.pipeline){d.apply(o._geometry,i,()=>o.noticeShaderChange());continue}let f=y.res.getTexture("BRDFLUT");d.setTexture("brdflutMap",f);let p=y.getRenderJob(e).shadowMapPassRenderer;p&&p.depth2DArrayTexture&&d.setTexture("shadowMap",y.getRenderJob(e).shadowMapPassRenderer.depth2DArrayTexture);let A=y.getRenderJob(e).pointLightShadowRenderer;A&&A.cubeArrayTexture&&d.setTexture("pointShadowMap",A.cubeArrayTexture);let x=oi.iesTexture;x&&d.setTexture("iesTextureArrayMap",x),i.irradianceBuffer&&i.irradianceBuffer.length>0&&(d.setTexture("irradianceMap",i.irradianceBuffer[0]),d.setTexture("irradianceDepthMap",i.irradianceBuffer[1]));let C=ge.getLightEntries(e.scene);C&&(d.setStorageBuffer("lightBuffer",C.storageGPUBuffer),C.irradianceVolume&&d.setUniformBuffer("irradianceData",C.irradianceVolume.irradianceVolumeBuffer)),a&&(d.setStorageBuffer("clustersUniform",a.clustersUniformBuffer),d.setStorageBuffer("lightAssignBuffer",a.lightAssignBuffer),d.setStorageBuffer("assignTable",a.assignTableBuffer),d.setStorageBuffer("clusterBuffer",a.clusterBuffer)),d.apply(o._geometry,i)}}}beforeDestroy(e){q.getInstance().detached(this._geometry,this),q.getInstance().hasReference(this._geometry)||this._geometry.destroy(e);for(let r=0;r<this._materials.length;r++){const i=this._materials[r];q.getInstance().detached(i,this),q.getInstance().hasReference(i)||i.destroy(e)}super.beforeDestroy(e)}destroy(e){super.destroy(e),this._geometry=null,this._materials=null,this._combineShaderRefection=null}}zr([Vt],cr.prototype,"materials",1),zr([Vt],cr.prototype,"castShadow",1),zr([Vt],cr.prototype,"castShadow",1),zr([Vt],cr.prototype,"castGI",1),zr([Vt],cr.prototype,"castGI",1);class ns{constructor(t){s(this,"uuid");s(this,"type");s(this,"color");s(this,"count",0);s(this,"pointData");s(this,"colorData");s(this,"dirtyData",!1);s(this,"memoryDataIndex",-1);s(this,"transformIndex");this.transformIndex=t}buildAxis(t=new g(0,0,0),e=10){this.buildLines([t,new g(t.x+e,t.y,t.z)],F.hexRGBColor(F.RED)),this.buildLines([t,new g(t.x,t.y+e,t.z)],F.hexRGBColor(F.GREEN)),this.buildLines([t,new g(t.x,t.y,t.z+e)],F.hexRGBColor(F.BLUE))}buildLines(t,e=F.COLOR_WHITE){if(!(t.length<2)){if(t.length==2){this.fillShapeData(t,e);return}var r=new Array(t.length+t.length-2);for(let i=1,a=0;i<t.length;++i)r[a++]=t[i-1],r[a++]=t[i];this.fillShapeData(r,e)}}buildArcLine(t,e,r,i,a=16,o=g.Y_AXIS,l=F.COLOR_WHITE){const h=(i-r)*oe;r*=oe;var u=[];for(let p=0;p<=a;++p){p>1&&u.push(u[u.length-1]);var c=h*(p/a)+r,d=e*Math.cos(c),f=e*Math.sin(c);switch(o){case g.X_AXIS:u.push(t.add(new g(0,d,f)));break;case g.Y_AXIS:u.push(t.add(new g(d,0,f)));break;case g.Z_AXIS:u.push(t.add(new g(d,f,0)));break;default:u.push(t.add(new g(d,f,0)));break}}this.fillShapeData(u,l)}buildCircle(t,e,r=32,i=g.Y_AXIS,a=F.COLOR_WHITE){var o=[];for(let c=0;c<=r;++c){var l=2*Math.PI*c/r,h=e*Math.cos(l),u=e*Math.sin(l);switch(i){case g.X_AXIS:o.push(t.add(new g(0,h,u)));break;case g.Y_AXIS:o.push(t.add(new g(h,0,u)));break;case g.Z_AXIS:o.push(t.add(new g(h,u,0)));break;default:o.push(t.add(new g(h,u,0)));break}c>0&&o.push(o[o.length-1])}o.push(o[0]),this.fillShapeData(o,a)}fillShapeData(t,e,r=!1){if(!this.pointData)this.pointData=new Float32Array(4*t.length),this.colorData=new Float32Array(4*t.length);else if(this.count+4*t.length>=this.pointData.length){let i=new Float32Array(this.pointData.length+4*t.length);i.set(this.pointData),this.pointData=i,i=new Float32Array(this.colorData.length+4*t.length),i.set(this.colorData),this.colorData=i}if(r||this.dirtyData==!1){const i=this.pointData;let a=this.count;for(let l=0;l<t.length;++l){const h=t[l];i[this.count++]=h.x,i[this.count++]=h.y,i[this.count++]=h.z,i[this.count++]=this.transformIndex}const o=this.colorData;for(let l=0;l<t.length;++l)if(e instanceof F)o[a++]=e.r,o[a++]=e.g,o[a++]=e.b,o[a++]=e.a;else{const h=e[l];o[a++]=h.r,o[a++]=h.g,o[a++]=h.b,o[a++]=h.a}}this.dirtyData=!0}reset(){this.count=0}}class La extends cr{constructor(e,r){super();s(this,"shapes");s(this,"mDirtyData",!1);s(this,"mBatchSize");s(this,"mMinIndexCount");s(this,"mGPUPrimitiveTopology");this.alwaysRender=!0,this.mMinIndexCount=e,this.mBatchSize=Math.trunc(65536/this.mMinIndexCount),this.mGPUPrimitiveTopology=r,this.shapes=new Map}init(){super.init(),this.castGI=!1,this.castShadow=!1,this.geometry=new vt;let e=new Uint16Array((Math.trunc(this.mMinIndexCount*this.mBatchSize/4)+1)*4);for(let r=0;r<e.length;r++)e[r]=r;this.geometry.setIndices(e),this.geometry.setAttribute(R.position,new Float32Array(4*e.length)),this.geometry.setAttribute(R.color,new Float32Array(4*e.length)),this.geometry.addSubGeometry({indexStart:0,indexCount:0,vertexStart:0,vertexCount:0,firstStart:0,index:0,topology:0}),this.materials=[new Pc(this.mGPUPrimitiveTopology)]}fillShapeData(e,r,i,a){this.mDirtyData=!0;var o;this.shapes.has(e)?(o=this.shapes.get(e),o.pointData.length<4*a.length&&(o.pointData=new Float32Array(4*a.length),o.colorData=new Float32Array(4*a.length))):(o=new ns(this.transform._worldMatrix.index),o.type=r,o.color=i,o.pointData=new Float32Array(4*a.length),o.colorData=new Float32Array(4*a.length));const l=o.pointData,h=o.colorData,u=this.transform._worldMatrix.index;for(let c=0,d=0;c<a.length;++c){const f=a[c];l[d]=f.x,h[d++]=i.r,l[d]=f.y,h[d++]=i.g,l[d]=f.z,h[d++]=i.b,l[d]=u,h[d++]=i.a}this.shapes.set(e,o)}removeShape(e){this.shapes.has(e)&&(this.mDirtyData=!0,this.shapes.delete(e))}nodeUpdate(e,r,i,a){if(this.mDirtyData){let o=0,l=this.geometry.getAttribute(R.position),h=this.geometry.getAttribute(R.color);this.shapes.forEach((c,d)=>{l.data.set(c.pointData,o),h.data.set(c.colorData,o),o+=c.pointData.length}),this.geometry.vertexBuffer.upload(R.position,l),this.geometry.vertexBuffer.upload(R.color,h);let u=o/4;this.geometry.subGeometries[0].lodLevels[0].indexCount=u,this.mDirtyData=!1}super.nodeUpdate(e,r,i,a)}allocGraphics3DShape(e,r){let i;return this.shapes.has(e)?(i=this.shapes.get(e),i.reset()):(i=new ns(r),i.uuid=e,i.type="line",i.color=F.COLOR_WHITE,this.shapes.set(i.uuid,i)),this.mDirtyData=!0,i}}class al{constructor(){s(this,"opaqueList",[]);s(this,"transparentList",[]);s(this,"sky")}clean(){this.opaqueList.length=0,this.transparentList.length=0}}class sl{constructor(){s(this,"renderGroup");this.renderGroup=new Map}collect_add(t){let e="",r="";e+=t.geometry.instanceID;for(let a=0;a<t.materials.length;a++){const o=t.materials[a];r+=o.shader.getDefaultColorShader().shaderVariant}let i=e+r;this.renderGroup.has(i)||this.renderGroup.set(i,{bundleMap:new Map,key:i,renderNodes:[]}),this.renderGroup.get(i).renderNodes.indexOf(t)==-1&&this.renderGroup.get(i).renderNodes.push(t)}}class ol{constructor(){s(this,"renderShaderUpdateList",new Map);s(this,"renderNodeList",new Map)}collect_add(t){let e=t.transform.view3D;e&&t.materials&&t.materials.forEach(r=>{let i=this.renderShaderUpdateList.get(e);i||(i=new Map,this.renderShaderUpdateList.set(e,i));let a=this.renderNodeList.get(e);a||(a=new Map,this.renderNodeList.set(e,a)),a.set(t.instanceID,t);let o=r.getAllPass();for(let l=0;l<o.length;l++){const h=o[l];let u=`${t.geometry.instanceID+h.instanceID}`,c=i.get(u);c||(c=new Map,i.set(u,c)),c.set(t.instanceID,t)}})}collect_remove(t){let e=t.transform.view3D;if(e&&t.materials){let r=this.renderShaderUpdateList.get(e);r&&t.materials.forEach(i=>{let a=i.getAllPass();for(let o=0;o<a.length;o++){const l=a[o];let h=`${t.geometry.instanceID+l.instanceID}`;r.delete(h)}})}}}const Gi=class Gi{constructor(){s(this,"_sceneLights");s(this,"_sceneGIProbes");s(this,"_op_RenderNodes");s(this,"_tr_RenderNodes");s(this,"_octreeRenderNodes");s(this,"_graphics");s(this,"_op_renderGroup");s(this,"_tr_renderGroup");s(this,"_renderShaderCollect");s(this,"state",{giLightingChange:!0});s(this,"sky");s(this,"_collectInfo");s(this,"rendererOctree");this._sceneLights=new Map,this._sceneGIProbes=new Map,this._op_RenderNodes=new Map,this._tr_RenderNodes=new Map,this._graphics=[],this._op_renderGroup=new Map,this._tr_renderGroup=new Map,this._collectInfo=new al,this._renderShaderCollect=new ol,this._octreeRenderNodes=new Map}static get instance(){return this._instance||(this._instance=new Gi),this._instance}getPashList(t,e){if(e.renderOrder<3e3)return this._op_RenderNodes.get(t);if(e.renderOrder>=3e3)return this._tr_RenderNodes.get(t)}sortRenderNode(t,e){for(let r=t.length-1;r>0;r--)if(t[r].renderOrder<e.renderOrder){t.push(e);return}t.push(e)}addRenderNode(t,e){if(!t)return;let r=e.renderOrder>=3e3;if(e.hasMask(ke.Sky))this.sky=e;else if(e instanceof La)this._graphics.indexOf(e)==-1&&this._graphics.push(e);else if(as.hasMask(e.renderLayer,Ti.None)){this.removeRenderNode(t,e);let i=r?this._tr_RenderNodes:this._op_RenderNodes;i.has(t)||i.set(t,[]),i.get(t).push(e),y.setting.occlusionQuery.octree&&e.attachSceneOctree(this.getOctree(t));let a=this.getPashList(t,e);a.indexOf(e)==-1&&this.sortRenderNode(a,e)}else{this.removeRenderNode(t,e);let i=r?this._tr_renderGroup:this._op_renderGroup;i.has(t)||i.set(t,new sl),i.get(t).collect_add(e)}e.object3D.renderNode=e,this._renderShaderCollect.collect_add(e)}getOctree(t){let e,r=y.setting.occlusionQuery.octree;if(r&&(e=this._octreeRenderNodes.get(t),!e)){let i=new g(r.x,r.y,r.z),a=new g(r.width,r.height,r.depth),o=new Qe(i,a);e=new na(o),this._octreeRenderNodes.set(t,e)}return e}removeRenderNode(t,e){if(e.detachSceneOctree(),e.hasMask(ke.Sky))this.sky=null;else if(as.hasMask(e.renderLayer,Ti.None)){let r=this.getPashList(t,e);if(r){let i=r.indexOf(e);i!=-1&&r.splice(i,1)}}this._renderShaderCollect.collect_remove(e)}addLight(t,e){if(!this._sceneLights.has(t))this._sceneLights.set(t,[e]);else{let r=this._sceneLights.get(t);if(r.length>=y.setting.light.maxLight){console.warn("Alreay meet maxmium light number:",y.setting.light.maxLight);return}r.indexOf(e)!=-1||r.push(e)}}removeLight(t,e){if(this._sceneLights.has(t)){let r=this._sceneLights.get(t),i=r.indexOf(e);i!=-1&&r.splice(i,1)}}getLights(t){return this._sceneLights.get(t)||[]}addGIProbe(t,e){this._sceneGIProbes.has(t)?this._sceneGIProbes.get(t).push(e):this._sceneGIProbes.set(t,[e])}removeGIProbe(t,e){if(this._sceneGIProbes.has(t)){let r=this._sceneGIProbes.get(t),i=r.indexOf(e);i!=-1&&r.splice(i,1)}}getProbes(t){return this._sceneGIProbes.get(t)||[]}autoSortRenderNodes(t){let e=this._tr_RenderNodes.get(t);if(!e)return;let r=!1;for(const i of e)if(i.isRenderOrderChange||i.needSortOnCameraZ){r=!0;break}if(r){for(const i of e){let a=i.renderOrder;if(i.needSortOnCameraZ){let o=On.worldToCameraDepth(i.object3D);o=1-Math.max(0,Math.min(1,o)),a+=o}i.__renderOrder=a,i.isRenderOrderChange=!1}e.sort((i,a)=>i.__renderOrder>a.__renderOrder?1:-1)}return this}getRenderNodes(t,e){if(this.autoSortRenderNodes(t),this._collectInfo.clean(),this._collectInfo.sky=this.sky,y.setting.occlusionQuery.octree)this.rendererOctree=this.getOctree(t),this.rendererOctree.getRenderNode(e.frustum,this._collectInfo);else{let r=this._op_RenderNodes.get(t);r&&(this._collectInfo.opaqueList=r.concat());let i=this._tr_RenderNodes.get(t);i&&(this._collectInfo.transparentList=i.concat())}return this._collectInfo}getOpRenderGroup(t){return this._op_renderGroup.get(t)}getTrRenderGroup(t){return this._tr_renderGroup.get(t)}getGraphicList(){return this._graphics}getRenderShaderCollect(t){return this._renderShaderCollect.renderShaderUpdateList.get(t)}};s(Gi,"_instance");let k=Gi;class nl{constructor(){s(this,"setting");s(this,"probesBufferData");s(this,"probesBuffer");s(this,"isVolumeFrameChange",!0);s(this,"randomOrientation");s(this,"startPosition",new g);s(this,"isVolumeChange",!0);s(this,"irradianceVolumeBuffer");s(this,"directionDistance",20);s(this,"randomSeedCount",3);s(this,"useRandomIndex",0);s(this,"centerDirection",new g(0,0,this.directionDistance).normalize(1));s(this,"arroundPositions",[]);s(this,"debugX",0);s(this,"debugY",0);s(this,"debugZ",0)}updateOrientation(){return this.useRandomIndex++,this.useRandomIndex>=this.arroundPositions.length&&(this.useRandomIndex=0),V.fromToRotation(this.centerDirection,this.arroundPositions[this.useRandomIndex],this.randomOrientation),this.randomOrientation}init(t){this.setting=t,this.randomOrientation=new V(!1),this.randomOrientation.identity(),this.irradianceVolumeBuffer=new Yi(80),this.createFramesBuffer(),this.arroundPositions.push(this.centerDirection.clone());for(let e=0;e<this.randomSeedCount;e++){let r=Math.PI*2*e/this.randomSeedCount,i=new g(Math.sin(r),Math.cos(r),this.directionDistance).normalize(1);this.arroundPositions.push(i)}}setVolumeDataChange(){this.isVolumeChange=!0}updateProbes(t){let e=this.probesBufferData;for(let r of t){let i=r.index*4;e[i+3]=r.drawCallFrame}}createFramesBuffer(){if(!this.probesBufferData){let t=this.setting.probeXCount*this.setting.probeYCount*this.setting.probeZCount;this.probesBufferData=new Float32Array(t*4),this.probesBufferData.fill(-1),this.probesBuffer=new Pe(t*4,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST)}}uploadBuffer(){this.isVolumeChange&&(this.fillIrradianceData(),this.isVolumeChange=!1,this.isVolumeFrameChange=!0),this.probesBuffer.setFloat32Array("uniformFramesBuffer",this.probesBufferData)}calcPosition(t,e,r,i){let a=this.setting,o=this.setting.probeSpace;return i=i||new g,i.x=t*o-o*(a.probeXCount-1)*.5+a.offsetX,i.y=e*o-o*(a.probeYCount-1)*.5+a.offsetY,i.z=r*o-o*(a.probeZCount-1)*.5+a.offsetZ,i}fillIrradianceData(){let t=this.setting,e=this.calcPosition(0,0,0,this.startPosition);this.irradianceVolumeBuffer.setFloat("orientationIndex",this.randomOrientation.index),this.irradianceVolumeBuffer.setFloat("hysteresis",t.hysteresis),this.irradianceVolumeBuffer.setFloat("OctRTSideSize",t.octRTSideSize),this.irradianceVolumeBuffer.setFloat("OctRTMaxSize",t.octRTMaxSize),this.irradianceVolumeBuffer.setFloat("startX",e.x),this.irradianceVolumeBuffer.setFloat("startY",e.y),this.irradianceVolumeBuffer.setFloat("startZ",e.z),this.irradianceVolumeBuffer.setFloat("ProbeSpace",t.probeSpace),this.irradianceVolumeBuffer.setFloat("probeXCount",t.probeXCount),this.irradianceVolumeBuffer.setFloat("probeYCount",t.probeYCount),this.irradianceVolumeBuffer.setFloat("probeZCount",t.probeZCount),this.irradianceVolumeBuffer.setFloat("maxDistance",t.probeSpace*1.732),this.irradianceVolumeBuffer.setFloat("depthSharpness",t.depthSharpness),this.irradianceVolumeBuffer.setFloat("ProbeSourceTextureSize",t.probeSourceTextureSize),this.irradianceVolumeBuffer.setFloat("ProbeSize",t.probeSize),this.irradianceVolumeBuffer.setFloat("bounceIntensity",t.bounceIntensity),this.irradianceVolumeBuffer.setFloat("probeRoughness",t.probeRoughness),this.irradianceVolumeBuffer.setFloat("normalBias",t.normalBias),this.irradianceVolumeBuffer.setFloat("irradianceChebyshevBias",t.irradianceChebyshevBias),this.irradianceVolumeBuffer.setFloat("rayNumber",t.rayNumber),this.irradianceVolumeBuffer.setFloat("irradianceDistanceBias",t.irradianceDistanceBias),this.irradianceVolumeBuffer.setFloat("indirectIntensity",t.indirectIntensity),this.irradianceVolumeBuffer.setFloat("ddgiGamma",t.ddgiGamma),this.irradianceVolumeBuffer.setFloat("lerpHysteresis",t.lerpHysteresis),this.irradianceVolumeBuffer.setFloat("debugX",this.debugX),this.irradianceVolumeBuffer.setFloat("debugY",this.debugY),this.irradianceVolumeBuffer.setFloat("debugZ",this.debugZ),this.irradianceVolumeBuffer.apply()}}class ll{constructor(){s(this,"storageGPUBuffer");s(this,"irradianceVolume");s(this,"_lightList",[]);this.storageGPUBuffer=new Pe(bi.lightSize*y.setting.light.maxLight,GPUBufferUsage.COPY_SRC),this.irradianceVolume=new nl,this.irradianceVolume.init(y.setting.gi);for(let t=0;t<y.setting.light.maxLight;t++){let e=this.storageGPUBuffer.memory.allocation_node(bi.lightSize*4);this._lightList.push(e)}this.storageGPUBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE}update(t){this.storageGPUBuffer.clean();let e=k.instance.getLights(t.scene);for(let r=0;r<e.length;r++){const i=e[r].lightData;i.index=r,this.writeLightBytes(i,this._lightList[r])}this.storageGPUBuffer.apply()}writeLightBytes(t,e){e.offset=0,e.writeFloat(t.index),e.writeInt32(t.lightType),e.writeFloat(t.radius),e.writeFloat(t.linear),e.writeVector3(t.lightPosition),e.writeFloat(t.lightMatrixIndex),e.writeVector3(t.direction),e.writeFloat(t.quadratic),e.writeRGBColor(t.lightColor),e.writeFloat(t.intensity),e.writeFloat(t.innerAngle),e.writeFloat(t.outerAngle),e.writeFloat(t.range),e.writeInt32(t.castShadowIndex),e.writeVector3(t.lightTangent),e.writeFloat(t.iesIndex)}}class hl{constructor(){s(this,"gpuBuffer");s(this,"probes");s(this,"memoryDo");s(this,"_probeInfoList")}initDataUniform(t){this.memoryDo=new ri,this.probes=t,this._probeInfoList=[],this.memoryDo.destroy(),this.memoryDo.allocation(t.length*17*4);for(let r=0;r<t.length;r++){var e=17;let i=this.memoryDo.allocation_node(e*4);this._probeInfoList.push(i);let a=t[r].transform.worldPosition;i.setArray(0,[a.x,a.y,a.z])}this.gpuBuffer=w.device.createBuffer({size:this.memoryDo.shareDataBuffer.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE,label:"ProbeBuffer",mappedAtCreation:!1})}updateGPUBuffer(){const t=this.memoryDo.shareDataBuffer;let e=this.memoryDo.shareDataBuffer.byteLength,r=0;const i=5e3*64;for(;r<e;)w.device.queue.writeBuffer(this.gpuBuffer,r,t,r,Math.floor(Math.min(i,e-r))),r+=i}}class ul extends nr{constructor(e,r=0,i){super();s(this,"size");this.bufferType=Ut.StorageGPUBuffer,this.size=e,this.createBuffer(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|r,e,i,"MatrixGPUBuffer")}writeBufferByHeap(e,r){let i=w.device;if(e.length>0){let a=null;for(;this.mapAsyncReady.length&&(a=this.mapAsyncReady.shift(),a.usedSize!=e.byteLength);)a.destroy(),this.mapAsyncBuffersOutstanding--,a=null;a||(a=i.createBuffer({size:e.byteLength,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.MAP_WRITE,mappedAtCreation:!0}),a.usedSize=e.byteLength,this.mapAsyncBuffersOutstanding++,this.mapAsyncBuffersOutstanding>10&&console.warn(` Warning: mapAsync requests from ${this.mapAsyncBuffersOutstanding} frames ago have not resolved yet.  MB of staging buffers allocated.`));let o=new Float32Array(e.buffer,e.byteOffset,r);new Float32Array(a.getMappedRange(0,r*4)).set(o),a.unmap();const l=i.createCommandEncoder();l.copyBufferToBuffer(a,0,this.buffer,0,r*4),i.queue.submit([l.finish()]),a.mapAsync(GPUMapMode.WRITE).then(()=>this.mapAsyncReady.push(a))}}}class cl{constructor(){s(this,"uuid");s(this,"index");s(this,"usage");s(this,"groupBufferSize");s(this,"matrixBufferDst");this.uuid=Ct(),this.groupBufferSize=0,this.usage=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,this.cacheWorldMatrix()}cacheWorldMatrix(){this.groupBufferSize=V.maxCount*V.blockBytes,this.matrixBufferDst=new ul(this.groupBufferSize/4),this.matrixBufferDst.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.matrixBufferDst.buffer.label=this.groupBufferSize.toString()}writeBuffer(t){const e=V.dynamicMatrixBytes;this.matrixBufferDst.mapAsyncWrite(e,t)}}class ge{static init(){this.modelMatrixBindGroup=new cl,this._cameraBindGroups=new Map,this._lightEntriesMap=new Map}static getCameraGroup(t){let e=this._cameraBindGroups.get(t);return e||(e=new Un(this.modelMatrixBindGroup),this._cameraBindGroups.set(t,e)),t.isShadowCamera?e.setShadowCamera(t):e.setCamera(t),e}static getLightEntries(t){t||console.log("getLightEntries scene is null");let e=this._lightEntriesMap.get(t);return e||(e=new ll,this._lightEntriesMap.set(t,e)),this._lightEntriesMap.get(t)}static updateProbes(t){this._probeEntries||(this._probeEntries=new hl,this._probeEntries.initDataUniform(t))}}s(ge,"_cameraBindGroups"),s(ge,"_lightEntriesMap"),s(ge,"_probeEntries"),s(ge,"modelMatrixBindGroup");const Re=class Re{static bindPipeline(t,e){if(Re.lastShader!=e)Re.lastShader=e;else return;Re.lastPipeline!=e.pipeline&&(Re.lastPipeline=e.pipeline,t.setPipeline(e.pipeline));for(let r=1;r<e.bindGroups.length;r++){const i=e.bindGroups[r];i&&t.setBindGroup(r,i)}}static bindCamera(t,e){let r=ge.getCameraGroup(e);t.setBindGroup(0,r.globalBindGroup)}static bindGeometryBuffer(t,e){if(this.lastGeometry!=e){this.lastGeometry=e,e.indicesBuffer&&t.setIndexBuffer(e.indicesBuffer.indicesGPUBuffer.buffer,e.indicesBuffer.indicesFormat);let r=e.vertexBuffer.vertexGPUBuffer,i=e.vertexBuffer.vertexBufferLayouts;for(let a=0;a<i.length;a++){const o=i[a];t.setVertexBuffer(a,r.buffer,o.offset,o.size)}}}static cleanCache(){this.lastGeometry=null,this.lastPipeline=null,this.lastShader=null}static createPipeline(t){return rt.countStart("GPUContext","pipeline"),w.device.createRenderPipeline(t)}static beginCommandEncoder(){return rt.countStart("GPUContext","beginCommandEncoder"),this.LastCommand&&w.device.queue.submit([this.LastCommand.finish()]),this.LastCommand=w.device.createCommandEncoder(),this.LastCommand}static endCommandEncoder(t){this.LastCommand==t&&(w.device.queue.submit([this.LastCommand.finish()]),this.LastCommand=null,rt.countStart("GPUContext","endCommandEncoder"))}static recordBundleEncoder(t){return w.device.createRenderBundleEncoder(t)}static beginRenderPass(t,e){if(this.cleanCache(),this.renderPassCount++,this.lastRenderPassState=e,e.renderTargets&&e.renderTargets.length>0){for(let r=0;r<e.renderTargets.length;++r){const i=e.renderTargets[r];let a=e.renderPassDescriptor.colorAttachments[r];e.multisample>0&&e.renderTargets.length==1?(a.view=e.multiTexture.createView(),a.resolveTarget=i.getGPUView()):a.view=i.getGPUTexture().createView()}return t.beginRenderPass(e.renderPassDescriptor)}else{let r=e.renderPassDescriptor.colorAttachments[0];return r&&(e.multisample>0?(r.view=e.multiTexture.createView(),r.resolveTarget=w.context.getCurrentTexture().createView()):r.view=w.context.getCurrentTexture().createView()),t.beginRenderPass(e.renderPassDescriptor)}}static drawIndexed(t,e,r,i,a,o){t.drawIndexed(e,r,i,a,o),this.drawCount++}static draw(t,e,r,i,a){t.draw(e,r,i,a),this.drawCount++}static endPass(t){t.insertDebugMarker("end"),t.end()}static computeCommand(t,e){let r=t.beginComputePass();for(let i=0;i<e.length;i++)e[i].compute(r);r.end()}};s(Re,"lastGeometry"),s(Re,"lastPipeline"),s(Re,"lastShader"),s(Re,"drawCount",0),s(Re,"renderPassCount",0),s(Re,"geometryCount",0),s(Re,"pipelineCount",0),s(Re,"matrixCount",0),s(Re,"lastRenderPassState"),s(Re,"LastCommand");let b=Re;class ls{constructor(){s(this,"source");s(this,"input");s(this,"output")}reset(t){this.input&&this.input.destroy(),this.output&&this.output.destroy(),this.input=this.output=null,this.source=t}apply(t){if(this.source){if(!this.input){let e=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST;this.input=new Pe(this.source.length,e,this.source),this.input.apply()}if(!this.output){let e=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC;this.output=new Pe(t*3,e),this.output.apply()}}}}class dl{constructor(){s(this,"enable");s(this,"morphTargetsRelative");s(this,"MaxMorphTargetCount",64);s(this,"_computeConfigArray");s(this,"_computeConfigBuffer");s(this,"_morphInfluenceArray");s(this,"_morphInfluenceBuffer");s(this,"_positionAttrDataGroup");s(this,"_normalAttrDataGroup");s(this,"_isInfluenceDirty");s(this,"_morphTargetCount");s(this,"_totalVertexCount");s(this,"_computeShader");s(this,"_computeShaders");s(this,"_computeWorkGroupXY",1);s(this,"_collectMorphTargetData");s(this,"_blendTarget");this._isInfluenceDirty=!0,this.generateGPUBuffer(),this._positionAttrDataGroup=new ls,this._normalAttrDataGroup=new ls}initMorphTarget(t){this._collectMorphTargetData=this.collectMorphTargetList(t),this._computeShader&&this._computeShader.destroy();let e=Je.CsMain;this._computeShader=new Mt(e),this._collectMorphTargetData.mergedNormal?this._computeShader.setDefine("USE_MORPHNORMALS",!0):this._computeShader.deleteDefine("USE_MORPHNORMALS"),this._computeShaders=[this._computeShader],this._isInfluenceDirty=!0,this._morphTargetCount=this._collectMorphTargetData.mtCount,this._totalVertexCount=this._collectMorphTargetData.vCount,this._morphInfluenceArray.fill(0),this._computeWorkGroupXY=this.calcWorkGroup(this._totalVertexCount),this._positionAttrDataGroup.reset(this._collectMorphTargetData.mergedPos),this._normalAttrDataGroup.reset(this._collectMorphTargetData.mergedNormal)}applyRenderShader(t){this.uploadMorphTargetBuffer(),this.uploadConfigGBuffer(),t.setUniformBuffer("morphTargetConfig",this._computeConfigBuffer),t.setStorageBuffer("morphTargetOpPositions",this._positionAttrDataGroup.output),this._collectMorphTargetData.mergedNormal&&t.setStorageBuffer("morphTargetOpNormals",this._normalAttrDataGroup.output)}computeMorphTarget(t){this.uploadConfigGBuffer(),this.uploadMorphTargetBuffer(),this._computeShader.setUniformBuffer("morphTargetConfig",this._computeConfigBuffer),this._computeShader.setStorageBuffer("morphTargetInfluence",this._morphInfluenceBuffer),this._computeShader.setStorageBuffer("morphTargetPositions",this._positionAttrDataGroup.input),this._computeShader.setStorageBuffer("morphTargetOpPositions",this._positionAttrDataGroup.output),this._collectMorphTargetData.mergedNormal&&(this._computeShader.setStorageBuffer("morphTargetNormals",this._normalAttrDataGroup.input),this._computeShader.setStorageBuffer("morphTargetOpNormals",this._normalAttrDataGroup.output)),this._computeShader.workerSizeX=this._computeWorkGroupXY,this._computeShader.workerSizeY=this._computeWorkGroupXY,this._computeShader.workerSizeZ=1,b.computeCommand(t,this._computeShaders)}updateInfluence(t,e){this._isInfluenceDirty=!0,this._morphInfluenceArray[t]=e}get blendShape(){return this._blendTarget}collectMorphTargetList(t){let e=this.collectAttribute("a_morphPositions_",t),r=e.length,i=e[0].data.length/3;if(this._blendTarget={},t.blendShapeData)for(let h=0;h<t.blendShapeData.shapeIndexs.length;h++){let u=t.blendShapeData.shapeIndexs[h],c=t.blendShapeData.shapeNames[h].split("."),d=c[c.length-1];this._blendTarget[d]=f=>this.updateInfluence(u,f)}let a=new Float32Array(i*r*3);{let h=0;for(let u=0;u<r;u++){let c=e[u];a.set(c.data,h),h+=c.data.length}}let o=this.collectAttribute("a_morphNormals_",t),l;if(o&&o.length>0){let h=0;l=new Float32Array(i*r*3);for(let u=0;u<r;u++){let c=o[u];l.set(c.data,h),h+=c.data.length}}return{mtCount:r,vCount:i,mergedPos:a,mergedNormal:l}}collectAttribute(t,e){let r=[];for(let i=0;i<this.MaxMorphTargetCount;i++){let a=t+i,o=e.getAttribute(a);if(o)r[i]=o;else break}return r}uploadConfigGBuffer(){if(this._isInfluenceDirty){let t=0;for(let e=0;e<this._morphTargetCount;e++)t+=this._morphInfluenceArray[e];this._morphInfluenceBuffer.setFloat32Array("data",this._morphInfluenceArray),this._morphInfluenceBuffer.apply(),this._computeConfigArray[0]=this.morphTargetsRelative?1:1-t,this._computeConfigArray[1]=this._morphTargetCount,this._computeConfigArray[2]=this._totalVertexCount,this._computeConfigArray[3]=this._computeWorkGroupXY,this._computeConfigBuffer.setFloat32Array("data",this._computeConfigArray),this._computeConfigBuffer.apply(),this._isInfluenceDirty=!1}}calcWorkGroup(t){let e=Math.ceil(Math.sqrt(t)),r=Math.ceil(Math.log2(e));return e=Math.pow(2,r),e}uploadMorphTargetBuffer(){this._positionAttrDataGroup.output||this._positionAttrDataGroup.apply(this._totalVertexCount),this._normalAttrDataGroup.output||this._normalAttrDataGroup.apply(this._totalVertexCount)}generateGPUBuffer(){this._computeConfigArray=new Float32Array(4),this._computeConfigBuffer=new Yi(4),this._morphInfluenceArray=new Float32Array(this.MaxMorphTargetCount);let t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST;this._morphInfluenceBuffer=new Pe(this.MaxMorphTargetCount,t)}}var fl=Object.defineProperty,gl=Object.getOwnPropertyDescriptor,Vr=(n,t,e,r)=>{for(var i=r>1?void 0:r?gl(t,e):t,a=n.length-1,o;a>=0;a--)(o=n[a])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&fl(t,e,i),i};let se=class extends cr{constructor(){super();s(this,"receiveShadow");s(this,"morphData")}onEnable(){super.onEnable()}onDisable(){super.onDisable()}cloneTo(t){t.addComponent(se).copyComponent(this)}copyComponent(t){return super.copyComponent(t),this.receiveShadow=t.receiveShadow,this}get geometry(){return this._geometry}set geometry(t){super.geometry=t;let e=t.morphTargetDictionary!=null;e&&(this.morphData||(this.morphData=new dl),this.morphData.morphTargetsRelative=t.morphTargetsRelative,this.morphData.initMorphTarget(t)),this.morphData&&(this.morphData.enable=e),this.morphData&&this.morphData.enable?this.addRendererMask(ke.MorphTarget):this.removeRendererMask(ke.MorphTarget),this.object3D.bound=this._geometry.bounds.clone(),this._readyPipeline||(this.initPipeline(),this._computes&&this._computes&&(this.onCompute=Co(this.onCompute,()=>{for(let r=0;r<this._computes.length;r++)this._computes[r].onUpdate()})))}get material(){return this._materials[0]}set material(t){this.materials=[t]}setMorphInfluence(t,e){if(this.morphData&&this.morphData.enable){let r=this._geometry.morphTargetDictionary[t];r>=0&&this.morphData.updateInfluence(r,e)}}setMorphInfluenceIndex(t,e){this.morphData&&this.morphData.enable&&t>=0&&this.morphData.updateInfluence(t,e)}onCompute(t,e){this.morphData&&this.morphData.enable&&this.morphData.computeMorphTarget(e)}nodeUpdate(t,e,r,i){if(this.morphData&&this.morphData.enable)for(let a=0;a<this.materials.length;a++){let o=this.materials[a].getPass(e);if(o)for(let l=0;l<o.length;l++)this.morphData.applyRenderShader(o[l])}super.nodeUpdate(t,e,r,i)}destroy(t){super.destroy(t)}};Vr([Vt],se.prototype,"geometry",1),Vr([Vt],se.prototype,"geometry",1),Vr([Vt],se.prototype,"material",1),Vr([Vt],se.prototype,"material",1),se=Vr([xt(se,"MeshRenderer")],se);class pl{constructor(){s(this,"label","");s(this,"customSize",!1);s(this,"zPreTexture",null);s(this,"depthTexture",null);s(this,"renderTargetTextures");s(this,"outColor",-1);s(this,"renderTargets");s(this,"rtTextureDescriptors");s(this,"irradianceBuffer");s(this,"multisample",0);s(this,"multiTexture");s(this,"depthViewIndex",0);s(this,"depthCleanValue",0);s(this,"isOutTarget",!0);s(this,"camera3D");s(this,"rtFrame");s(this,"renderPassDescriptor");s(this,"renderBundleEncoderDescriptor");s(this,"depthLoadOp")}getLastRenderTexture(){return this.renderTargets&&this.renderTargets.length>0?this.renderTargets[0]:y.res.redTexture}}const It=class It{static createRendererPassState(t,e=null){let r=new pl;if(r.label=t.label,r.customSize=t.customSize,r.rtFrame=t,r.zPreTexture=t.zPreTexture,r.depthTexture=t.depthTexture,r.depthViewIndex=t.depthViewIndex,r.isOutTarget=t.isOutTarget,r.depthCleanValue=t.depthCleanValue,r.depthLoadOp=t.depthLoadOp,t&&t.renderTargets.length>0){r.renderTargets=t.renderTargets,r.rtTextureDescriptors=t.rtDescriptors,r.renderPassDescriptor=It.getRenderPassDescriptor(r),r.renderBundleEncoderDescriptor=It.getRenderBundleDescriptor(r),r.renderTargetTextures=[];for(let i=0;i<t.renderTargets.length;i++){const a=t.renderTargets[i];r.renderTargetTextures[i]={format:a.format},a.name.indexOf(Ce.colorBufferTex_NAME)!=-1&&(r.outColor=i)}}else r.renderPassDescriptor=It.getRenderPassDescriptor(r,e),r.renderBundleEncoderDescriptor=It.getRenderBundleDescriptor(r),r.renderTargetTextures=[{format:w.presentationFormat}],r.outColor=0;return r}static getRenderPassDescriptor(t,e=null){w.device,w.presentationSize;let r=[];if(t.renderTargets&&t.renderTargets.length>0){t.renderTargets[0].width,t.renderTargets[0].height;for(let a=0;a<t.renderTargets.length;a++){const o=t.renderTargets[a],l=t.rtTextureDescriptors[a];r.push({view:o.getGPUView(),resolveTarget:void 0,loadOp:l.loadOp,clearValue:l.clearValue,storeOp:l.storeOp})}}else if(!t.customSize){let a=w.canvasConfig&&w.canvasConfig.alpha?[1,1,1,0]:[0,0,0,1];t.isOutTarget==!0&&r.push({view:void 0,resolveTarget:void 0,loadOp:w.canvasConfig&&w.canvasConfig.alpha||e!=null?"load":"clear",clearValue:a,storeOp:"store"})}let i=null;return t.depthTexture||t.zPreTexture?(t.zPreTexture&&(t.depthTexture=t.zPreTexture),i={label:`${t.label} renderPassDescriptor zPreTexture${t.zPreTexture?"load":"clear"}`,colorAttachments:r,depthStencilAttachment:{view:t.depthTexture.getGPUView(),depthLoadOp:t.zPreTexture?"load":t.depthLoadOp,depthClearValue:t.zPreTexture?1:t.depthCleanValue,depthStoreOp:"store"}}):i={colorAttachments:r,label:"renderPassDescriptor not writeDepth"},this.renderPassDescriptorCount++,i}static getRenderBundleDescriptor(t){w.presentationSize;let e=[];if(t.renderTargets&&t.renderTargets.length>0){t.renderTargets[0].width,t.renderTargets[0].height;for(let i=0;i<t.renderTargets.length;i++){const a=t.renderTargets[i];e.push(a.format)}}let r=null;return t.depthTexture?r={colorFormats:e,depthStencilFormat:t.depthTexture.format}:r={colorFormats:e},this.renderPassDescriptorCount++,r}};s(It,"bindGroupDescriptorCount",0),s(It,"bindTextureDescriptorCount",0),s(It,"renderPassDescriptorCount",0),s(It,"pipelineDescriptorCount",0);let Pt=It;class Zi extends nr{constructor(e){super();s(this,"node");this.bufferType=Ut.VertexGPUBuffer,this.createVertexBuffer(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.VERTEX,e)}createVertexBuffer(e,r){let i=w.device;this.byteSize=r*Float32Array.BYTES_PER_ELEMENT,this.usage=e,this.buffer&&this.destroy(),this.buffer=i.createBuffer({label:"VertexGPUBuffer",size:this.byteSize,usage:e,mappedAtCreation:!1}),this.memory=new ri,this.memoryNodes=new Map,this.memory.allocation(this.byteSize),this.node=this.memory.allocation_node(this.byteSize)}}var Le=(n=>(n[n.split=0]="split",n[n.compose=1]="compose",n[n.compose_bin=2]="compose_bin",n))(Le||{});class Al{constructor(){s(this,"vertexCount",0);s(this,"vertexGPUBuffer");s(this,"geometryType",Le.compose);s(this,"_vertexBufferLayouts");s(this,"_attributeSlotLayouts");s(this,"_attributeLocation");this._vertexBufferLayouts=[],this._attributeLocation={},this._attributeSlotLayouts=[]}get vertexBufferLayouts(){return this._vertexBufferLayouts}createVertexBuffer(t,e){switch(this.geometryType){case Le.split:this.createSplitVertexBuffer(t,e);break;case Le.compose:this.createComposeVertexBuffer(t,e);break;case Le.compose_bin:this.createComposBinVertexBuffer(t,e);break}}createSplitVertexBuffer(t,e){let r=0;for(let i=0;i<e.attributes.length;i++){const a=e.attributes[i];if(a.name=="index")continue;this._attributeLocation[a.name]=a.location;let o={name:a.name,format:a.format,offset:0,shaderLocation:a.location,stride:Ar[a.format]};this._attributeSlotLayouts[a.location]=[o];let l=t.get(a.name);l||(l={attribute:a.name,data:new Float32Array(a.size*this.vertexCount)},t.set(a.name,l));let h=l.data.length/o.stride;this.vertexCount!=0&&this.vertexCount!=h&&console.error(" vertex count not match attribute count"),this.vertexCount=h,this._vertexBufferLayouts[a.location]={name:a.name,arrayStride:a.size*4,stepMode:"vertex",attributes:this._attributeSlotLayouts[a.location],offset:r*4,size:this.vertexCount*a.size*4},r+=this.vertexCount*a.size}this.vertexGPUBuffer=new Zi(r)}createComposeVertexBuffer(t,e){this._attributeSlotLayouts[0]=[];let r=0;for(let i=0;i<e.attributes.length;i++){const a=e.attributes[i];if(a.name=="index"||a.type=="builtin")continue;this._attributeLocation[a.name]=a.location;let o={name:a.name,format:a.format,offset:r*4,shaderLocation:a.location,stride:Ar[a.format]};this._attributeSlotLayouts[0][a.location]=o;let l=t.get(a.name);if(l||(l={attribute:a.name,data:new Float32Array(a.size*this.vertexCount)},t.set(a.name,l)),l.data){let h=l.data.length/o.stride;this.vertexCount!=0&&this.vertexCount!=h&&console.error(" vertex count not match attribute count"),this.vertexCount=h}r+=a.size}this._vertexBufferLayouts[0]={name:"composeStruct",arrayStride:r*4,stepMode:"vertex",attributes:this._attributeSlotLayouts[0],offset:0,size:this.vertexCount*r*4},this.vertexGPUBuffer=new Zi(this.vertexCount*r)}createComposBinVertexBuffer(t,e){this._attributeSlotLayouts[0]=[];let r=0;for(let a=0;a<e.attributes.length;a++){const o=e.attributes[a];if(o.name=="index"||o.type=="builtin")continue;this._attributeLocation[o.name]=o.location;let l={name:o.name,format:o.format,offset:r*4,shaderLocation:o.location,stride:Ar[o.format]};this._attributeSlotLayouts[0][o.location]=l;let h=t.get(o.name);if(h||(h={attribute:o.name,data:new Float32Array(o.size*this.vertexCount)},t.set(o.name,h)),h.data){let u=h.data.length/l.stride;this.vertexCount!=0&&this.vertexCount!=u&&console.error(" vertex count not match attribute count"),this.vertexCount=u}r+=o.size}let i=t.get(R.all).data.length/r;this.vertexCount=i,this._vertexBufferLayouts[0]={name:"composeStruct",arrayStride:r*4,stepMode:"vertex",attributes:this._attributeSlotLayouts[0],offset:0,size:this.vertexCount*r*4},this.vertexGPUBuffer=new Zi(this.vertexCount*r)}upload(t,e){var r;if(this.vertexGPUBuffer){switch(this.geometryType){case Le.split:{let i=this._attributeLocation[t],a=this._vertexBufferLayouts[i];this.vertexGPUBuffer.node.setFloat32Array(a.offset/4,e.data)}break;case Le.compose:for(let i=0;i<this.vertexCount;i++){const a=this._attributeSlotLayouts[0][this._attributeLocation[t]];for(let o=0;o<a.stride;o++){let l=e.data[i*a.stride+o],h=i*(this._vertexBufferLayouts[0].arrayStride/4)+a.offset/4+o;this.vertexGPUBuffer.node.setFloat(l,h)}}break;case Le.compose_bin:this.vertexGPUBuffer.node.setFloat32Array(0,e.data);break}(r=this.vertexGPUBuffer)==null||r.apply()}}updateAttributes(t){switch(this.geometryType){case Le.split:for(let e=0;e<this._vertexBufferLayouts.length;e++){const r=this._vertexBufferLayouts[e];let i=t.get(r.name);this.vertexGPUBuffer.node.setFloat32Array(r.offset/4,i.data)}break;case Le.compose:for(let e=0;e<this.vertexCount;e++)this._attributeSlotLayouts.forEach(r=>{for(let i=0;i<r.length;i++){const a=r[i];let o=t.get(a.name);for(let l=0;l<a.stride;l++){let h=o.data[e*a.stride+l],u=e*(this._vertexBufferLayouts[0].arrayStride/4)+a.offset/4+l;this.vertexGPUBuffer.node.setFloat(h,u)}}});break;case Le.compose_bin:{let e=t.get(R.all);this.vertexGPUBuffer.node.setFloat32Array(0,e.data)}break}this.vertexGPUBuffer.apply()}compute(){}destroy(t){this.vertexCount=null,this.geometryType=null,this._vertexBufferLayouts=null,this._attributeSlotLayouts=null,this._attributeLocation=null,this.vertexGPUBuffer&&this.vertexGPUBuffer.destroy(t),this.vertexGPUBuffer=null}}class ml extends nr{constructor(e){super();s(this,"indicesNode");this.bufferType=Ut.IndicesGPUBuffer,this.createIndicesBuffer(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.INDEX|GPUBufferUsage.INDIRECT,e)}createIndicesBuffer(e,r){let i=w.device;this.byteSize=r.length*4,this.usage=e,this.buffer&&this.destroy(),this.buffer=i.createBuffer({label:"IndicesGPUBuffer",size:this.byteSize,usage:e,mappedAtCreation:!1}),this.memory=new ri,this.memoryNodes=new Map,this.memory.allocation(this.byteSize),r&&(this.indicesNode=this.memory.allocation_node(r.length*4),this.indicesNode.setArrayBuffer(0,r),this.apply())}}class vl{constructor(){s(this,"uuid","");s(this,"name");s(this,"indicesGPUBuffer");s(this,"indicesFormat","uint16");s(this,"indicesCount",0)}createIndicesBuffer(t){t.data instanceof Uint16Array?this.indicesFormat="uint16":t.data instanceof Uint32Array&&(this.indicesFormat="uint32"),this.indicesCount=t.data.length,this.indicesGPUBuffer=new ml(t.data)}upload(t){this.indicesGPUBuffer.indicesNode.setArrayBuffer(0,t),this.indicesGPUBuffer.apply()}compute(){}destroy(){this.uuid=null,this.name=null,this.indicesFormat=null,this.indicesCount=null,this.indicesGPUBuffer.destroy(),this.indicesGPUBuffer=null}}class xl{constructor(){s(this,"lodLevels")}}const He=class He{constructor(){s(this,"instanceID");s(this,"name");s(this,"subGeometries",[]);s(this,"morphTargetsRelative");s(this,"morphTargetDictionary");s(this,"skinNames");s(this,"bindPose");s(this,"blendShapeData");s(this,"vertexDim");s(this,"_bounds");s(this,"_attributeMap");s(this,"_attributes");s(this,"_indicesBuffer");s(this,"_vertexBuffer");s(this,"_onChange",!0);s(this,"_wireframeLines");this.instanceID=Ct(),this._attributeMap=new Map,this._attributes=[],this._vertexBuffer=new Al}get indicesBuffer(){return this._indicesBuffer}get vertexBuffer(){return this._vertexBuffer}get vertexAttributes(){return this._attributes}get vertexAttributeMap(){return this._attributeMap}get geometryType(){return this._vertexBuffer.geometryType}set geometryType(t){this._vertexBuffer.geometryType=t}get bounds(){if(!this._bounds){this._bounds=new Qe(new g,new g(1,1,1)),this._bounds.min.x=Number.MAX_VALUE,this._bounds.min.y=Number.MAX_VALUE,this._bounds.min.z=Number.MAX_VALUE,this._bounds.max.x=-Number.MAX_VALUE,this._bounds.max.y=-Number.MAX_VALUE,this._bounds.max.z=-Number.MAX_VALUE;let t=this.getAttribute(R.position);if(t&&t.data)for(let e=0;e<t.data.length/3;e++){const r=t.data[e*3+0],i=t.data[e*3+1],a=t.data[e*3+2];this._bounds.min.x>r&&(this._bounds.min.x=r),this._bounds.min.y>i&&(this._bounds.min.y=i),this._bounds.min.z>a&&(this._bounds.min.z=a),this._bounds.max.x<r&&(this._bounds.max.x=r),this._bounds.max.y<i&&(this._bounds.max.y=i),this._bounds.max.z<a&&(this._bounds.max.z=a)}this._bounds.setFromMinMax(this._bounds.min,this._bounds.max)}return this._bounds}set bounds(t){this._bounds=t}addSubGeometry(...t){let e=new xl;return e.lodLevels=t,this.subGeometries.push(e),e}generate(t){this._onChange&&(this._onChange=!1,this._indicesBuffer.upload(this.getAttribute(R.indices).data),this._vertexBuffer.createVertexBuffer(this._attributeMap,t),this._vertexBuffer.updateAttributes(this._attributeMap))}setIndices(t){if(!this._attributeMap.has(R.indices)){let e={attribute:R.indices,data:t};this._attributeMap.set(R.indices,e),this._indicesBuffer=new vl,this._indicesBuffer.createIndicesBuffer(e)}}setAttribute(t,e){if(t==R.indices)this.setIndices(e);else{let r={attribute:t,data:e};this._attributeMap.set(t,r),this._attributes.push(t)}}getAttribute(t){return this._attributeMap.get(t)}hasAttribute(t){return this._attributeMap.has(t)}genWireframe(){if(this._wireframeLines)return this._wireframeLines;if(this.geometryType==Le.split||this.geometryType==Le.compose){let t=this.getAttribute(R.position),e=this.getAttribute(R.indices);if(e&&t&&e.data.length>0){let r=t.data,i=[];for(let a=0;a<e.data.length/3;a++){const o=e.data[a*3+0],l=e.data[a*3+1],h=e.data[a*3+2];let u=new g(r[o*3+0],r[o*3+1],r[o*3+2]),c=new g(r[l*3+0],r[l*3+1],r[l*3+2]),d=new g(r[h*3+0],r[h*3+1],r[h*3+2]);i.push(u,c),i.push(c,d),i.push(d,u)}return this._wireframeLines=i,i}}else if(this.geometryType==Le.compose_bin){let t=this.getAttribute(R.all),e=this.vertexDim,r=this.getAttribute(R.indices);if(r&&t&&r.data.length>0){let i=t.data,a=[];for(let o=0;o<r.data.length/3;o++){const l=r.data[o*3+0],h=r.data[o*3+1],u=r.data[o*3+2];let c=new g(i[l*e+0],i[l*e+1],i[l*e+2]),d=new g(i[h*e+0],i[h*e+1],i[h*e+2]),f=new g(i[u*e+0],i[u*e+1],i[u*e+2]);a.push(c,d),a.push(d,f),a.push(f,c)}return this._wireframeLines=a,a}}return null}compute(){this._indicesBuffer&&this._indicesBuffer.compute(),this._vertexBuffer&&this._vertexBuffer.compute()}computeNormals(){let t=this.getAttribute(R.position),e=this.getAttribute(R.normal),r=this.getAttribute(R.indices);if(!t||!e||!r)return this;let i=r.data.length/3,a=He.point1,o=He.point2,l=He.point3,h=He.crossA,u=He.crossB,c=He.crossRet;for(let d=0;d<i;d++){let f=r.data[d*3],p=r.data[d*3+1],A=r.data[d*3+2];a.set(t.data[f*3],t.data[f*3+1],t.data[f*3+2]),o.set(t.data[p*3],t.data[p*3+1],t.data[p*3+2]),l.set(t.data[A*3],t.data[A*3+1],t.data[A*3+2]),g.sub(a,o,h).normalize(),g.sub(a,l,u).normalize();let x=h.crossProduct(u,c).normalize();e.data[f*3]=e.data[p*3]=e.data[A*3]=x.x,e.data[f*3+1]=e.data[p*3+1]=e.data[A*3+1]=x.y,e.data[f*3+2]=e.data[p*3+2]=e.data[A*3+2]=x.z}return this._vertexBuffer.upload(R.normal,e),this}isPrimitive(){return!1}destroy(t){this.instanceID=null,this.name=null,this.subGeometries=null,this.morphTargetDictionary=null,this._bounds.destroy(),this._bounds=null,this._attributeMap=null,this._attributes=null,this._indicesBuffer.destroy(),this._vertexBuffer.destroy(),this._indicesBuffer=null,this._vertexBuffer=null}};s(He,"crossA",g.UP.clone()),s(He,"crossB",g.UP.clone()),s(He,"crossRet",g.UP.clone()),s(He,"point1",g.UP.clone()),s(He,"point2",g.UP.clone()),s(He,"point3",g.UP.clone());let vt=He;class Cl extends vt{constructor(e,r,i=1,a=1,o=g.Y_AXIS){super();s(this,"width");s(this,"height");s(this,"segmentW");s(this,"segmentH");s(this,"up");this.width=e,this.height=r,this.segmentW=i,this.segmentH=a,this.up=o,this.buildGeometry(this.up)}buildGeometry(e){var r,i,a,o,l=this.segmentW+1;(this.segmentH+1)*l,this.bounds=new Qe(g.ZERO.clone(),new g(this.width,1,this.height)),a=this.segmentH*this.segmentW*6;let h=(this.segmentW+1)*(this.segmentH+1),u=new Float32Array(h*3),c=new Float32Array(h*3),d=new Float32Array(h*2),f;this.segmentW*this.segmentH*2*3>=Uint16Array.length?f=new Uint32Array(this.segmentW*this.segmentH*2*3):f=new Uint16Array(this.segmentW*this.segmentH*2*3),a=0;for(var p=0,A=0,x=0,C=0;C<=this.segmentH;++C)for(var v=0;v<=this.segmentW;++v){switch(r=(v/this.segmentW-.5)*this.width,i=(C/this.segmentH-.5)*this.height,e){case g.Y_AXIS:u[p++]=r,u[p++]=0,u[p++]=i,c[A++]=0,c[A++]=1,c[A++]=0;break;case g.Z_AXIS:u[p++]=r,u[p++]=-i,u[p++]=0,c[A++]=0,c[A++]=0,c[A++]=1;break;case g.X_AXIS:u[p++]=0,u[p++]=r,u[p++]=i,c[A++]=1,c[A++]=0,c[A++]=0;break;default:u[p++]=r,u[p++]=0,u[p++]=i,c[A++]=0,c[A++]=1,c[A++]=0;break}d[x++]=v/this.segmentW,d[x++]=C/this.segmentH,v!=this.segmentW&&C!=this.segmentH&&(o=v+C*l,f[a++]=o+1,f[a++]=o,f[a++]=o+l,f[a++]=o+1,f[a++]=o+l,f[a++]=o+l+1)}this.setIndices(f),this.setAttribute(R.position,u),this.setAttribute(R.normal,c),this.setAttribute(R.uv,d),this.setAttribute(R.TEXCOORD_1,d),this.addSubGeometry({indexStart:0,indexCount:f.length,vertexStart:0,vertexCount:0,firstStart:0,index:0,topology:0})}}class qt{constructor(){s(this,"instanceID");s(this,"name");s(this,"enable",!0);s(this,"_defaultSubShader");s(this,"_shader")}set shader(t){this._shader=t,this._defaultSubShader=t.getDefaultShaders()[0]}get shader(){return this._shader}get doubleSide(){return this._defaultSubShader.doubleSide}set doubleSide(t){this._defaultSubShader.doubleSide=t}get castShadow(){return this._defaultSubShader.shaderState.castShadow}set castShadow(t){let e=this._defaultSubShader.shaderState;t!=e.castShadow&&(e.castShadow=t)}get acceptShadow(){return this._defaultSubShader.shaderState.acceptShadow}set acceptShadow(t){let e=this._defaultSubShader.shaderState;e.acceptShadow!=t&&(e.acceptShadow=t,this._defaultSubShader.noticeShaderChange(),this._defaultSubShader.noticeValueChange())}get blendMode(){return this._defaultSubShader.blendMode}set blendMode(t){this._defaultSubShader.blendMode=t}get depthCompare(){return this._defaultSubShader.depthCompare}set depthCompare(t){this._defaultSubShader.depthCompare=t}get transparent(){return this._defaultSubShader.shaderState.transparent}set transparent(t){this._defaultSubShader.shaderState.transparent=t,t&&(this._defaultSubShader.renderOrder=3e3)}get cullMode(){return this._defaultSubShader.cullMode}set cullMode(t){if(this._defaultSubShader.cullMode!=t){for(let e of this._shader.passShader.values())for(let r of e)r.cullMode=t;this._defaultSubShader.cullMode=t}}get depthWriteEnabled(){return this._defaultSubShader.depthWriteEnabled}set depthWriteEnabled(t){this._defaultSubShader.depthWriteEnabled=t}set useBillboard(t){this._defaultSubShader.setDefine("USE_BILLBOARD",t)}getPass(t){return this._shader.getSubShaders(t)}getAllPass(){return this._shader.getSubShaders(Y.COLOR)}clone(){let t=new qt;return t.shader=this.shader.clone(),t}destroy(t){this._shader.destroy(),this._shader=null}setDefine(t,e){this.shader.setDefine(t,e)}setTexture(t,e){this._shader.setTexture(t,e)}setStorageBuffer(t,e){this._shader.setStorageBuffer(t,e)}setUniformBuffer(t,e){this._shader.setStorageBuffer(t,e)}setUniformFloat(t,e){this._shader.setUniformFloat(t,e)}setUniformVector2(t,e){this._shader.setUniformVector2(t,e)}setUniformVector3(t,e){this._shader.setUniformVector3(t,e)}setUniformVector4(t,e){this._shader.setUniformVector4(t,e)}setUniformColor(t,e){this._shader.setUniformColor(t,e)}getUniformFloat(t){return this._shader.getUniform(t).data}getUniformV2(t){return this._shader.getUniformVector2(t)}getUniformV3(t){return this._shader.getUniformVector3(t)}getUniformV4(t){return this._shader.getUniformVector4(t)}getUniformColor(t){return this._shader.getUniformColor(t)}getTexture(t){return this._shader.getTexture(t)}getStorageBuffer(t){return this._shader.getStorageBuffer(t)}getStructStorageBuffer(t){return this._shader.getStructStorageBuffer(t)}getUniformBuffer(t){return this._shader.getUniformBuffer(t)}applyUniform(){this._shader.applyUniform()}}class lt{constructor(){s(this,"computes");s(this,"passShader");this.computes=[],this.passShader=new Map}addRenderPass(t,e=-1){let r=this.passShader.get(t.passType)||[];e==-1?r.push(t):r.splice(e,-1,t),this.passShader.set(t.passType,r)}removeShader(t,e=-1){let r=this.passShader.get(t.passType);if(r)if(e==-1){let i=r.indexOf(t);i!=-1&&r.splice(i)}else r.splice(e,1)}removeShaderByIndex(t,e=-1){let r=this.passShader.get(t);r&&(e==-1?this.passShader.delete(t):r.splice(e,1))}getSubShaders(t){return this.passShader.get(t)||[]}hasSubShaders(t){return this.passShader.get(t).length>0}getDefaultShaders(){return this.passShader.get(Y.COLOR)}getDefaultColorShader(){return this.passShader.get(Y.COLOR)[0]}setDefine(t,e){for(const r of this.passShader)for(const i of r[1])i.setDefine(t,e)}deleteDefine(t){for(const e of this.passShader)for(const r of e[1])r.deleteDefine(t)}setUniform(t,e){for(const r of this.passShader)for(const i of r[1])i.setUniform(t,e)}setUniformFloat(t,e){for(const r of this.passShader)for(const i of r[1])i.setUniformFloat(t,e)}setUniformVector2(t,e){for(const r of this.passShader)for(const i of r[1])i.setUniformVector2(t,e)}setUniformVector3(t,e){for(const r of this.passShader)for(const i of r[1])i.setUniformVector3(t,e)}setUniformVector4(t,e){for(const r of this.passShader)for(const i of r[1])i.setUniformVector4(t,e)}setUniformColor(t,e){for(const r of this.passShader)for(const i of r[1])i.setUniformColor(t,e)}getUniform(t){return this.getDefaultColorShader().getUniform(t)}getUniformFloat(t){return this.getDefaultColorShader().getUniformFloat(t)}getUniformVector2(t){return this.getDefaultColorShader().getUniformVector2(t)}getUniformVector3(t){return this.getDefaultColorShader().getUniformVector3(t)}getUniformVector4(t){return this.getDefaultColorShader().getUniformVector4(t)}getUniformColor(t){return this.getDefaultColorShader().getUniformColor(t)}setTexture(t,e){for(const r of this.passShader)for(const i of r[1])i.setTexture(t,e);this.setDefine(`USE_${t.toLocaleUpperCase()}`,!0)}getTexture(t){return this.getDefaultColorShader().textures[t]}setUniformBuffer(t,e){for(const r of this.passShader)for(const i of r[1])i.setUniformBuffer(t,e)}getUniformBuffer(t){return this.getDefaultColorShader().getBuffer(t)}setStorageBuffer(t,e){for(const r of this.passShader)for(const i of r[1])i.setStorageBuffer(t,e)}getStorageBuffer(t){return this.getDefaultColorShader().getBuffer(t)}setStructStorageBuffer(t,e){for(const r of this.passShader)for(const i of r[1])i.setStructStorageBuffer(t,e)}getStructStorageBuffer(t){return this.getDefaultColorShader().getBuffer(t)}noticeValueChange(){for(const t of this.passShader)for(const e of t[1])e.noticeValueChange()}destroy(){this.getDefaultColorShader().destroy()}clone(){let t=new lt,e=this.getDefaultShaders();for(const r of e)t.addRenderPass(r);return t}applyUniform(){for(const t of this.passShader)for(const e of t[1])e.applyUniform()}}var yl=Object.defineProperty,_l=Object.getOwnPropertyDescriptor,Il=(n,t,e,r)=>{for(var i=r>1?void 0:r?_l(t,e):t,a=n.length-1,o;a>=0;a--)(o=n[a])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&yl(t,e,i),i};let ua=class extends lt{constructor(n="QuadGlsl_vs",t="QuadGlsl_fs"){super();let e=new Be(n,t);this.addRenderPass(e);let r=e.shaderState;e.blendMode=j.NONE,r.frontFace="cw",r.depthWriteEnabled=!1,r.depthCompare=Xt.always,r.multisample=0,this.setTexture("baseMap",y.res.blackTexture),this.setUniformFloat("x",0),this.setUniformFloat("y",0),this.setUniformFloat("width",100),this.setUniformFloat("height",100)}};ua=Il([or],ua);class Oa extends ee{constructor(e="QuadGlsl_vs",r="QuadGlsl_fs",i,a=0,o=!1){super();s(this,"width",128);s(this,"height",128);s(this,"quadRenderer");s(this,"material");s(this,"rendererPassState");s(this,"quadShader");let l=i?i.renderTargets:[];this.material=new qt,this.quadShader=new ua(e,r),this.material.shader=this.quadShader,this.quadRenderer=this.addComponent(se),this.quadRenderer.material=this.material,this.quadRenderer.castGI=!1,this.quadRenderer.castShadow=!1,this.quadRenderer.drawType=o?2:0,this.quadRenderer.geometry=new Cl(100,100,1,1),this.quadRenderer.material=this.material,this.quadRenderer.__start(),this.quadRenderer._enable=!0,this.quadRenderer.onEnable(),this.rendererPassState=Pt.createRendererPassState(i,"load"),a>0&&(this.rendererPassState.multisample=this.quadShader.getDefaultColorShader().shaderState.multisample,this.rendererPassState.multiTexture=w.device.createTexture({size:{width:w.presentationSize[0],height:w.presentationSize[1]},sampleCount:a,format:l.length>0?l[0].format:w.presentationFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT})),w.addEventListener(xr.RESIZE,h=>{this.rendererPassState=Pt.createRendererPassState(i,"load"),a>0&&(this.rendererPassState.multisample=this.quadShader.getDefaultColorShader().shaderState.multisample,this.rendererPassState.multiTexture=w.device.createTexture({size:{width:w.presentationSize[0],height:w.presentationSize[1]},sampleCount:a,format:l.length>0?l[0].format:w.presentationFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT}))},this)}renderTarget(e,r,i){let a=e.camera,o=b.beginRenderPass(i,r.rendererPassState);b.bindCamera(o,a),r.quadRenderer.nodeUpdate(e,Y.COLOR,r.rendererPassState,null),r.quadRenderer.renderPass2(e,Y.COLOR,r.rendererPassState,null,o),b.endPass(o)}renderToViewQuad(e,r,i,a){let o=e.camera;r.quadShader.setTexture("baseMap",a);let l=b.beginRenderPass(i,r.rendererPassState);b.bindCamera(l,o),r.quadRenderer.nodeUpdate(e,Y.COLOR,r.rendererPassState,null),r.quadRenderer.renderPass2(e,Y.COLOR,r.rendererPassState,null,l),b.endPass(l)}}class qe{constructor(){s(this,"storeOp","store");s(this,"loadOp","clear");s(this,"clearValue",[0,0,0,0])}}class Lt{constructor(t,e,r,i,a=!0){s(this,"label");s(this,"customSize",!1);s(this,"renderTargets");s(this,"rtDescriptors");s(this,"zPreTexture");s(this,"depthTexture");s(this,"depthViewIndex",0);s(this,"depthCleanValue",1);s(this,"depthLoadOp","clear");s(this,"isOutTarget",!0);this.renderTargets=t,this.rtDescriptors=e,this.depthTexture=r,this.zPreTexture=i,this.isOutTarget=a}clone2Frame(t){t.renderTargets.push(...this.renderTargets.concat());for(let e=0;e<this.rtDescriptors.length;e++){const r=this.rtDescriptors[e];let i=new qe;i.loadOp=r.loadOp,i.storeOp=r.storeOp,i.clearValue=r.clearValue,t.rtDescriptors.push(i)}t.depthTexture=this.depthTexture,t.zPreTexture=this.zPreTexture,t.customSize=this.customSize}clone(){let t=new Lt([],[]);return this.clone2Frame(t),t}}class We extends Ge{constructor(e,r,i=z.rgba8unorm,a=!1,o,l=1,h=0,u=!0,c=!0){super(e,r,l);s(this,"resolveTarget");s(this,"sampleCount");s(this,"autoResize");s(this,"clear");this.name=Ct(),this.autoResize=c,this.useMipmap=a,this.sampleCount=h,this.format=i,this.numberLayer=l,this.clear=u,o!=null?this.usage=o:this.usage=o|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.COPY_DST,this.resize(e,r),c&&w.addEventListener(xr.RESIZE,d=>{let{width:f,height:p}=d.data;this.resize(f,p),this._textureChange=!0},this)}resize(e,r){let i=w.device;this.gpuTexture&&(Ge.delayDestroyTexture(this.gpuTexture),this.gpuTexture=null,this.view=null),this.width=e,this.height=r,this.createTextureDescriptor(e,r,1,this.format,this.usage,this.numberLayer,this.sampleCount),this.useMipmap=!1,this.visibility=GPUShaderStage.COMPUTE|GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,this.format==z.rgba32float?(this.samplerBindingLayout.type="non-filtering",this.textureBindingLayout.sampleType="unfilterable-float",this.gpuSampler=i.createSampler({})):this.format==z.depth32float?(this.samplerBindingLayout.type="filtering",this.sampler_comparisonBindingLayout.type="comparison",this.textureBindingLayout.sampleType="depth",this.gpuSampler=w.device.createSampler({}),this.gpuSampler_comparison=w.device.createSampler({compare:"less",label:"sampler_comparison"})):this.format==z.depth24plus?(this.samplerBindingLayout={type:"filtering"},this.sampler_comparisonBindingLayout={type:"comparison"},this.textureBindingLayout.sampleType="depth",this.gpuSampler=w.device.createSampler({}),this.gpuSampler_comparison=w.device.createSampler({compare:"less",label:"sampler_comparison"})):(this.samplerBindingLayout.type="filtering",this.textureBindingLayout.sampleType="float",this.sampleCount>0&&(this.textureBindingLayout.multisampled=!0),this.minFilter="linear",this.magFilter="linear",this.mipmapFilter="linear",this.maxAnisotropy=16,this.addressModeU=nt.clamp_to_edge,this.addressModeV=nt.clamp_to_edge,this.gpuSampler=i.createSampler(this)),this._textureChange=!0}create(e,r,i=!0){let a=w.device;const o=e*4;let l=new Float32Array(e*r*4);const h=a.createBuffer({size:l.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});a.queue.writeBuffer(h,0,l);const u=b.beginCommandEncoder();u.copyBufferToTexture({buffer:h,bytesPerRow:o},{texture:this.getGPUTexture()},{width:e,height:r,depthOrArrayLayers:1}),b.endCommandEncoder(u)}clone(){let e=new We(this.width,this.height,this.format,this.useMipmap,this.usage,this.numberLayer,this.sampleCount,this.clear,this.autoResize);return e.name="clone_"+e.name,e}readTextureToImage(){let e=w.device,r=w.windowWidth,i=w.windowHeight,a=new Float32Array(r*i*4);const o=e.createBuffer({size:a.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});return b.beginCommandEncoder().copyTextureToBuffer({texture:this.getGPUTexture()},{buffer:o},[r,i]),o.getMappedRange(0,a.byteLength)}}const dr=class dr{static init(){this.rtTextureMap=new Map,this.rtViewQuad=new Map}static createRTTexture(t,e,r,i,a=!1,o=0){let l=this.rtTextureMap.get(t);return l||(t==Ce.colorBufferTex_NAME?l=new We(e,r,i,a,void 0,1,o,!1):l=new We(e,r,i,a,void 0,1,o,!0),l.name=t,dr.rtTextureMap.set(t,l)),l}static createRTTextureArray(t,e,r,i,a=1,o=!1,l=0){let h=this.rtTextureMap.get(t);return h||(h=new We(e,r,i,o,void 0,a,l),h.name=t,dr.rtTextureMap.set(t,h)),h}static createViewQuad(t,e,r,i,a=0){let o=new Lt([i],[new qe]),l=new Oa(e,r,o,a);return dr.rtViewQuad.set(t,l),l}static getTexture(t){return this.rtTextureMap.get(t)}static CreateSplitTexture(t){let e=this.getTexture(Ce.colorBufferTex_NAME),r=this.getTexture(t+"_split");return r||(r=this.createRTTexture(t+"_split",e.width,e.height,e.format,!1)),r}static WriteSplitColorTexture(t){let e=this.getTexture(Ce.colorBufferTex_NAME),r=this.getTexture(t+"_split");const i=b.beginCommandEncoder();i.copyTextureToTexture({texture:e.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:0}},{texture:r.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:0}},{width:r.width,height:r.height,depthOrArrayLayers:1}),b.endCommandEncoder(i)}};s(dr,"rtTextureMap"),s(dr,"rtViewQuad");let Fe=dr;class Sl{constructor(t){s(this,"command");s(this,"encoder");s(this,"rendererPassStates");s(this,"rtFrame");this.rtFrame=t,this.rendererPassStates=[]}clean(){this.rendererPassStates.length=0,b.cleanCache()}beginContinueRendererPassState(t="load",e="load"){if(this.rendererPassStates.length>0){let r=this.rtFrame.clone();for(const a of r.rtDescriptors)a.loadOp="load";r.depthLoadOp=e;let i=Pt.createRendererPassState(r,t);return this.rendererPassStates.push(i),i}else{this.rtFrame.depthLoadOp=e;let r=Pt.createRendererPassState(this.rtFrame,t);return this.rendererPassStates.push(r),r}}get rendererPassState(){return this.rendererPassStates[this.rendererPassStates.length-1]}beginOpaqueRenderPass(){this.beginContinueRendererPassState("clear","clear"),this.begineNewCommand(),this.beginNewEncoder()}beginTransparentRenderPass(){this.beginContinueRendererPassState("load","load"),this.begineNewCommand(),this.beginNewEncoder()}endRenderPass(){this.endEncoder(),this.endCommand()}begineNewCommand(){return this.command=b.beginCommandEncoder(),this.command}endCommand(){b.endCommandEncoder(this.command),this.command=null}beginNewEncoder(){return this.encoder=b.beginRenderPass(this.command,this.rendererPassState),this.encoder}endEncoder(){b.endPass(this.encoder),this.encoder=null}}class yr extends Fr{constructor(){super();s(this,"rendererPassState");s(this,"splitRendererPassState");s(this,"useRenderBundle",!1);s(this,"debugViewQuads");s(this,"debugTextures");s(this,"renderContext");s(this,"_rendererType");s(this,"_rtFrame");this.debugTextures=[],this.debugViewQuads=[]}get passType(){return this._rendererType}set passType(e){this._rendererType=e}setRenderStates(e){if(this._rtFrame=e,e){this.rendererPassState=Pt.createRendererPassState(e);let r=e.clone();r.depthLoadOp="load";for(const i of r.rtDescriptors)i.loadOp="load";this.splitRendererPassState=Pt.createRendererPassState(r)}this.renderContext=new Sl(e)}setIrradiance(e,r){this.rendererPassState.irradianceBuffer=[e,r]}compute(e,r){}render(e,r,i,a=!1){b.cleanCache();let o=e.camera,l=e.scene;this.rendererPassState.camera3D=o;let h=k.instance.getRenderNodes(l,o),u=this.renderBundleOp(e,h,r,i),c=a?[]:this.renderBundleTr(e,h,r,i);{let d=b.beginCommandEncoder(),f=b.beginRenderPass(d,this.rendererPassState);u.length>0&&f.executeBundles(u),!a&&k.instance.sky&&(b.bindCamera(f,o),k.instance.sky.renderPass2(e,this._rendererType,this.rendererPassState,i,f)),this.drawRenderNodes(e,f,d,h.opaqueList,r),b.endPass(f),b.endCommandEncoder(d)}{let d=b.beginCommandEncoder(),f=b.beginRenderPass(d,this.rendererPassState);c.length>0&&f.executeBundles(c),a||(b.bindCamera(f,o),this.drawRenderNodes(e,f,d,h.transparentList,r)),b.endPass(f),b.endCommandEncoder(d)}}nodeUpload(e,r,i){}occlusionRenderNodeTest(e,r,i){return i?i.occlusionRenderNodeTest(e)>0:!0}renderOp(e,r,i,a,o){}renderTr(e,r,i,a,o){}renderBundleOp(e,r,i,a){let o=k.instance.getOpRenderGroup(e.scene);if(o){let l=[];return o.renderGroup.forEach(h=>{if(h.bundleMap.has(this._rendererType))l.push(h.bundleMap.get(this._rendererType));else{let u=b.recordBundleEncoder(this.rendererPassState.renderBundleEncoderDescriptor);this.recordRenderBundleNode(e,u,h.renderNodes,a);let c=u.finish();h.bundleMap.set(this._rendererType,c),l.push(c)}}),l}return[]}renderBundleTr(e,r,i,a){let o=k.instance.getTrRenderGroup(e.scene);if(o){let l=[];return o.renderGroup.forEach(h=>{if(h.bundleMap.has(this._rendererType))l.push(h.bundleMap.get(this._rendererType));else{let u=b.recordBundleEncoder(this.rendererPassState.renderBundleEncoderDescriptor);this.recordRenderBundleNode(e,u,h.renderNodes,a);let c=u.finish();h.bundleMap.set(this._rendererType,c),l.push(c)}}),l}return[]}recordRenderBundleNode(e,r,i,a){b.bindCamera(r,e.camera),b.bindGeometryBuffer(r,i[0].geometry);for(let o=0;o<i.length;++o){let l=i[o];l.transform.worldMatrix.index,l.transform.enable&&l.recordRenderPass2(e,this._rendererType,this.rendererPassState,a,r)}}drawRenderNodes(e,r,i,a,o,l){b.bindCamera(r,e.camera);for(let h=y.setting.render.drawOpMin;h<Math.min(a.length,y.setting.render.drawOpMax);++h){let u=a[h];u.transform.enable&&u.enable&&u.renderPass2(e,this._rendererType,this.rendererPassState,l,r)}}setDebugTexture(e){for(let r=0;r<e.length;r++){let i=e[r],a="Quad_vert_wgsl",o="Quad_frag_wgsl";switch(i.format){case z.rgba8sint:case z.rgba8uint:case z.rgba8unorm:case z.rgba16float:case z.rgba32float:o="Quad_frag_wgsl";break;case z.depth24plus:case z.depth32float:o="Quad_depth2d_frag_wgsl",i.textureBindingLayout.viewDimension=="cube"&&(o="Quad_depthCube_frag_wgsl");break}let l=new Oa(a,o,new Lt([],[]));this.debugTextures.push(e[r]),this.debugViewQuads.push(l)}}}class wl extends yr{constructor(){super(),this.passType=Y.COLOR}render(t,e,r,i=!1){this.renderContext.clean();let a=t.scene,o=t.camera;this.rendererPassState.camera3D=o;let l=k.instance.getRenderNodes(a,o),h=this.renderBundleOp(t,l,e,r),u=i?[]:this.renderBundleTr(t,l,e,r);rt.start("colorPass Renderer");{rt.start("ColorPass Draw Opaque"),this.renderContext.beginOpaqueRenderPass(),this.renderContext.command;let c=this.renderContext.encoder;b.bindCamera(c,o),h.length>0&&(k.instance.getOpRenderGroup(a),c.executeBundles(h)),!i&&k.instance.sky&&(b.bindCamera(c,o),k.instance.sky.preInit||k.instance.sky.nodeUpdate(t,this._rendererType,this.rendererPassState,r),k.instance.sky.renderPass2(t,this._rendererType,this.rendererPassState,r,c)),l.opaqueList&&(b.bindCamera(c,o),this.drawNodes(t,this.renderContext,l.opaqueList,e,r),this.renderContext.endRenderPass(),rt.end("ColorPass Draw Opaque"))}{rt.start("ColorPass Draw Transparent"),this.renderContext.beginTransparentRenderPass(),this.renderContext.command;let c=this.renderContext.encoder;u.length>0&&c.executeBundles(u),!i&&l.transparentList&&(b.bindCamera(c,o),this.drawNodes(t,this.renderContext,l.transparentList,e,r));let d=k.instance.getGraphicList();for(let f=0;f<d.length;f++){const p=d[f];p.transform.worldMatrix.index,p.nodeUpdate(t,this._rendererType,this.splitRendererPassState,r),p.renderPass2(t,this._rendererType,this.splitRendererPassState,r,c)}this.renderContext.endRenderPass(),rt.end("ColorPass Draw Transparent")}rt.end("colorPass Renderer")}drawNodes(t,e,r,i,a){let o=k.instance.getRenderShaderCollect(t);if(o){for(const l of o){let h=l[1];for(const u of h){let c=u[1];if(c.preInit){c.nodeUpdate(t,this._rendererType,this.rendererPassState,a);break}}}for(let l=y.setting.render.drawOpMin;l<Math.min(r.length,y.setting.render.drawOpMax);++l){let h=r[l];h.transform.enable&&h.enable&&(h.preInit||h.nodeUpdate(t,this._rendererType,this.rendererPassState,a),h.renderPass(t,this.passType,this.renderContext))}}}occlusionRenderNodeTest(t,e,r){return r.zDepthRenderNodeTest(e)>0}}const ft=class ft extends Lt{constructor(){super([],[])}crateGBuffer(t,e,r){let i=this.renderTargets,a=this.rtDescriptors,o=Fe.createRTTexture(t+Ce.colorBufferTex_NAME,e,r,z.rgba16float,!1),l=Fe.createRTTexture(t+Ce.positionBufferTex_NAME,e,r,z.rgba16float,!1),h=Fe.createRTTexture(t+Ce.normalBufferTex_NAME,e,r,z.rgba8unorm,!1),u=Fe.createRTTexture(t+Ce.materialBufferTex_NAME,e,r,z.rgba8unorm,!1);ft.bufferTexture&&(i.push(o),i.push(l),i.push(h),i.push(u));let c=new qe;c.loadOp="clear";let d=new We(e,r,z.depth24plus,!1);d.name="depthTexture";let f=new qe;f.loadOp="load",this.depthTexture=d,ft.bufferTexture&&(a.push(c),a.push(new qe),a.push(new qe),a.push(new qe))}getColorMap(){return this.renderTargets[0]}getPositionMap(){return this.renderTargets[1]}getNormalMap(){return this.renderTargets[2]}getMaterialMap(){return this.renderTargets[3]}static getGBufferFrame(t){let e;if(ft.gBufferMap.has(t))e=ft.gBufferMap.get(t);else{e=new ft;let r=w.presentationSize;e.crateGBuffer(t,r[0],r[1]),ft.gBufferMap.set(t,e)}return e}clone(){let t=new ft;return this.clone2Frame(t),t}};s(ft,"gBufferMap",new Map),s(ft,"bufferTexture",!1);let Nr=ft;class Qs{constructor(){s(this,"frustumCullingList");s(this,"zVisibleList");s(this,"_renderList");this._renderList=new Map}occlusionRenderNodeTest(t){return y.setting.occlusionQuery.enable?this.frustumCullingList?this.frustumCullingList[t]:0:1}zDepthRenderNodeTest(t){return this.zVisibleList?this.zVisibleList[t]:0}update(t,e){}collect(t,e){}renderCommitTesting(t,e){return!0}}s(Qs,"enable",!0);class mi extends nr{constructor(t,e){super(),this.bufferType=Ut.ComputeGPUBuffer,this.createBuffer(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST,t,e,"ComputeGPUBuffer")}}class bl{constructor(t,e){s(this,"clusterBuffer");s(this,"lightAssignBuffer");s(this,"assignTableBuffer");s(this,"clustersUniformBuffer");this.clusterBuffer=new mi(t*2*4),this.clustersUniformBuffer=new Yi(10),this.clustersUniformBuffer.visibility=GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.lightAssignBuffer=new mi(t*e),this.lightAssignBuffer.visibility=GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.assignTableBuffer=new mi(t*4),this.assignTableBuffer.visibility=GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE}update(t,e,r,i,a,o,l,h,u,c){this.clustersUniformBuffer.setFloat("clusterTileX",i),this.clustersUniformBuffer.setFloat("clusterTileY",a),this.clustersUniformBuffer.setFloat("clusterTileZ",o),this.clustersUniformBuffer.setFloat("numLights",l),this.clustersUniformBuffer.setFloat("maxNumLightsPerCluster",h),this.clustersUniformBuffer.setFloat("near",u),this.clustersUniformBuffer.setFloat("far",c),this.clustersUniformBuffer.setFloat("screenWidth",t),this.clustersUniformBuffer.setFloat("screenHeight",e),this.clustersUniformBuffer.setFloat("clusterPix",r),this.clustersUniformBuffer.apply()}}class Ee{}s(Ee,"clusterTileX",16),s(Ee,"clusterTileY",16),s(Ee,"clusterTileZ",32);let El=`
  #include "GlobalUniform"

        struct ClusterBox{
            minPoint:vec4<f32>,
            maxPoint:vec4<f32>
        }

        struct ClustersUniform{
            clusterTileX:f32,
            clusterTileY:f32,
            clusterTileZ:f32,
            numLights:f32,
            maxNumLightsPerCluster:f32,
            near:f32,
            far:f32,
            screenWidth:f32,
            screenHeight:f32,
            clusterPix:f32
        }
     
        @group(0) @binding(1) var<uniform> clustersUniform : ClustersUniform;
        @group(0) @binding(2) var<storage,read_write> clusterBuffer : array<ClusterBox>;


        var<private> clusterTileX:f32 ;
        var<private> clusterTileY:f32 ;
        var<private> clusterTileZ:f32 ;
        fn convertNDCToView( v4:vec4<f32> ) -> vec4<f32> {
            var v = globalUniform.pvMatrixInv * v4 ;
            v = v / v.w ;
            return v ;
        }

        fn gridToIndex(i:vec3<u32>) -> u32{
            return i.z * u32(clusterTileX) * u32(clusterTileY) + i.y * u32(clusterTileX) + i.x ;
        }

        fn ScreenToView(screen : vec4<f32>) -> vec4<f32> {
            let texCoord = screen.xy / vec2<f32>(clustersUniform.screenWidth, clustersUniform.screenHeight);
            let clip = vec4<f32>(vec2<f32>(texCoord.x, 1.0 - texCoord.y) * 2.0 - vec2<f32>(1.0, 1.0), screen.z, screen.w);
            return convertNDCToView(clip);
          }

        fn LineIntersectionToZPlane( eye:vec3<f32> , ndcPoint :vec3<f32> , z:f32) -> vec3<f32>
        {
            var normal = vec3<f32>(0.0, 0.0, 1.0);
            var dir = ndcPoint - eye;
            var t = (z - dot(normal, eye)) / dot(normal, dir);
            var result = eye + t * dir;
            return result;
        }

        @compute @workgroup_size(${Ee.clusterTileX},${Ee.clusterTileY},1)
        fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(local_invocation_id) local_invocation_id : vec3<u32> ){

            let i = local_invocation_id.x ;
            let j = local_invocation_id.y ;
            let k = workgroup_id.x ;

            clusterTileX = clustersUniform.clusterTileX;
            clusterTileY = clustersUniform.clusterTileY;
            clusterTileZ = clustersUniform.clusterTileZ;

            let clusterGrid = vec3<u32>(i,j,k);
            let tileIndex = gridToIndex(clusterGrid);
            let eyePos = vec3<f32>(0.0, 0.0, 0.0);

            let tx = clusterTileX;
            let ty = clusterTileY;
            let tz = clusterTileZ ;
            let near = clustersUniform.near ;
            let far = clustersUniform.far ;

            let titleSize = vec2<f32>( globalUniform.windowWidth / tx , globalUniform.windowHeight / ty ) ;

            var maxPointSs = vec4<f32>(vec2<f32>(f32(i) + 1.0, f32(j) + 1.0) * titleSize, 0.0, 1.0);
	        var minPointSs = vec4<f32>(vec2<f32>(f32(i) , f32(j)) * titleSize, 0.0, 1.0);

            var maxPointVs = ScreenToView(maxPointSs).xyz;
	        var minPointVs = ScreenToView(minPointSs).xyz;
 
            var tileNear = clustersUniform.near * pow(clustersUniform.far / clustersUniform.near, f32(k) / clustersUniform.clusterTileZ);
	        var tileFar = clustersUniform.near * pow(clustersUniform.far / clustersUniform.near, (f32(k) + 1.0) / clustersUniform.clusterTileZ);

            var minPointNear = LineIntersectionToZPlane(eyePos, minPointVs, tileNear);
            var minPointFar = LineIntersectionToZPlane(eyePos, minPointVs, tileFar);
            var maxPointNear = LineIntersectionToZPlane(eyePos, maxPointVs, tileNear);
            var maxPointFar = LineIntersectionToZPlane(eyePos, maxPointVs, tileFar);

            var minPointAABB = min(min(minPointNear, minPointFar), min(maxPointNear, maxPointFar));
            var maxPointAABB = max(max(minPointNear, minPointFar), max(maxPointNear, maxPointFar));

            var clusterBox : ClusterBox ;
            clusterBox.minPoint = vec4<f32>(minPointAABB,f32(tileIndex)) ;
            clusterBox.maxPoint = vec4<f32>(maxPointAABB,f32(tileIndex)) ;
            clusterBuffer[tileIndex] = clusterBox;
        }
`,Tl=`
#include "GlobalUniform"

struct ClusterBox{
    min:vec4<f32>,
    max:vec4<f32>
}

struct Light {
    index:f32,
    lightType:i32,
    radius:f32,
    linear:f32,

    position:vec3<f32>,
    lightMatrixIndex:f32,

    direction:vec3<f32>,
    quadratic:f32,

    lightColor:vec3<f32>,
    intensity:f32,

    innerCutOff :f32,
    outerCutOff:f32,
    range :f32,
    castShadow:f32,

    lightTangent:vec3<f32>,
    ies:f32,
};

struct LightIndex
{
    count:f32,
    start:f32,
    empty0:f32,
    empty1:f32,
};

struct ClustersUniform{
    clusterTileX:f32,
    clusterTileY:f32,
    clusterTileZ:f32,
    numLights:f32,
    maxNumLightsPerCluster:f32,
    near:f32,
    far:f32,
    screenWidth:f32,
    screenHeight:f32,
    clusterPix:f32, 
}

var<private> clusterTileX:f32 ;
var<private> clusterTileY:f32 ;
var<private> clusterTileZ:f32 ;

// @group(0) @binding(1) var<storage, read> models : Uniforms;
@group(0) @binding(1) var<uniform> clustersUniform : ClustersUniform;
@group(0) @binding(2) var<storage,read> clusterBuffer : array<ClusterBox>;
@group(0) @binding(3) var<storage,read> lightBuffer : array<Light>; 
@group(0) @binding(4) var<storage,read_write> lightAssignBuffer : array<f32>;
@group(0) @binding(5) var<storage,read_write> assignTable : array<LightIndex>;

fn gridToIndex(i:vec3<u32>) -> u32{
    return i.z * u32(clusterTileX) * u32(clusterTileY) + i.y * u32(clusterTileX) + i.x ;
}

fn GetSqdisPointAABB( pos:vec3<f32>,  cluster:ClusterBox  ) -> f32
{
    var sqDistance = 0.0;
    for (var i = 0u; i < 3u; i+=1u)
    {
        var v = pos[i];
        if (v < cluster.min[i])
        {
            let diff = cluster.min[i] - v;
            sqDistance += diff * diff;
        }

        if (v > cluster.max[i])
        {
            let diff =  v - cluster.max[i];
            sqDistance += diff * diff;
        }
    }
    return sqDistance;
}

fn TestSphereAABB( box:ClusterBox ,light:Light ) -> bool
{
    let lightPos = light.position.xyz;
    var radius = light.range * 2.0 ;
    var spherePos = globalUniform.viewMat * vec4<f32>(lightPos.xyz, 1.0) ;
    spherePos = spherePos / spherePos.w ;
    let sqDistance = GetSqdisPointAABB(spherePos.xyz , box);
    return sqDistance <= (radius*radius);
}

@compute @workgroup_size(${Ee.clusterTileX},${Ee.clusterTileY},1)
fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(local_invocation_id) local_invocation_id : vec3<u32> ){
    // cluster ID 
    let i = local_invocation_id.x ;
    let j = local_invocation_id.y ;
    let k = workgroup_id.x ;

    clusterTileX = clustersUniform.clusterTileX;
    clusterTileY = clustersUniform.clusterTileY;
    clusterTileZ = clustersUniform.clusterTileZ;

    var clusterId_3D = vec3<u32>(i,j,k);
    var clusterId_1D = gridToIndex(clusterId_3D);

    var box:ClusterBox = clusterBuffer[clusterId_1D];

    var startIndex = i32(clusterId_1D) * i32(clustersUniform.maxNumLightsPerCluster) ;
    var endIndex = startIndex;

    for(var lightID = 0 ; lightID < i32(clustersUniform.numLights) ; lightID+=1)
    {
        let li:Light = lightBuffer[lightID];
        if(!TestSphereAABB(box, li)) {
            continue;
        }
        lightAssignBuffer[endIndex] = f32(lightID);
        endIndex++;
    }

    var idx: LightIndex;
    idx.count = f32(endIndex-startIndex);
    idx.start = f32(startIndex);
    idx.empty0 = f32(clusterId_1D);
    idx.empty1 = f32(clustersUniform.maxNumLightsPerCluster);
    assignTable[clusterId_1D] = idx;
}
`;class Bl extends yr{constructor(e){super();s(this,"maxNumLightsPerCluster",64);s(this,"clusterPix",1);s(this,"clusterLightingBuffer");s(this,"_currentLightCount",0);s(this,"_clusterGenerateCompute");s(this,"_clusterLightingCompute");s(this,"_useCamera");s(this,"resize",!1);this.passType=Y.Cluster,this.initCompute(e)}initCompute(e){this._clusterGenerateCompute=new Mt(El),this._clusterLightingCompute=new Mt(Tl);let r=w.presentationSize,i=Ee.clusterTileX*Ee.clusterTileY*Ee.clusterTileZ,a=e.camera,o=a.near,l=a.far;this.clusterLightingBuffer=new bl(i,this.maxNumLightsPerCluster),this.clusterLightingBuffer.update(r[0],r[1],this.clusterPix,Ee.clusterTileX,Ee.clusterTileY,Ee.clusterTileZ,0,this.maxNumLightsPerCluster,o,l),this._clusterGenerateCompute.setUniformBuffer("clustersUniform",this.clusterLightingBuffer.clustersUniformBuffer),this._clusterGenerateCompute.setStorageBuffer("clusterBuffer",this.clusterLightingBuffer.clusterBuffer);let h=ge.getLightEntries(e.scene);this._clusterLightingCompute.setStorageBuffer("models",ge.modelMatrixBindGroup.matrixBufferDst),this._clusterLightingCompute.setUniformBuffer("clustersUniform",this.clusterLightingBuffer.clustersUniformBuffer),this._clusterLightingCompute.setStorageBuffer("clusterBuffer",this.clusterLightingBuffer.clusterBuffer),this._clusterLightingCompute.setStorageBuffer("lightBuffer",h.storageGPUBuffer),this._clusterLightingCompute.setStorageBuffer("lightAssignBuffer",this.clusterLightingBuffer.lightAssignBuffer),this._clusterLightingCompute.setStorageBuffer("assignTable",this.clusterLightingBuffer.assignTableBuffer),this.resize=!0}render(e,r){let i=e.scene,a=k.instance.getLights(i);if(this._useCamera!=e.camera){this._useCamera=e.camera;let h=ge.getCameraGroup(this._useCamera);this._clusterGenerateCompute.setUniformBuffer("globalUniform",h.uniformGPUBuffer),this._clusterLightingCompute.setUniformBuffer("globalUniform",h.uniformGPUBuffer)}this._currentLightCount!=a.length&&(this._currentLightCount=a.length,this.clusterLightingBuffer.clustersUniformBuffer.setFloat("numLights",a.length),this.clusterLightingBuffer.clustersUniformBuffer.apply(),this._clusterGenerateCompute.workerSizeX=Ee.clusterTileZ,this._clusterLightingCompute.workerSizeX=Ee.clusterTileZ);let o=w.presentationSize;this.clusterLightingBuffer.update(o[0],o[1],this.clusterPix,Ee.clusterTileX,Ee.clusterTileY,Ee.clusterTileZ,a.length,this.maxNumLightsPerCluster,e.camera.near,e.camera.far),this.resize=!1;let l=b.beginCommandEncoder();b.computeCommand(l,[this._clusterGenerateCompute,this._clusterLightingCompute]),b.endCommandEncoder(l)}}class jt extends Ge{constructor(e,r,i=z.rgba8unorm,a=!1,o,l=1,h=0,u=!0){super(e,r,l);s(this,"resolveTarget");s(this,"sampleCount");w.device,this.name=Ct(),this.useMipmap=a,this.sampleCount=h,this.format=i,this.numberLayer=l,o!=null?this.usage=o:this.usage=o|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.COPY_DST,this.resize(e,r)}clone(){let e=new jt(this.width,this.height,this.format,this.useMipmap,this.usage,this.numberLayer,this.sampleCount);return e.name="clone_"+e.name,e}resize(e,r){let i=w.device;this.gpuTexture&&(Ge.delayDestroyTexture(this.gpuTexture),this.gpuTexture=null,this.view=null),this.width=e,this.height=r,this.createTextureDescriptor(e,r,1,this.format,this.usage,this.numberLayer,this.sampleCount),this.useMipmap=!1,this.visibility=GPUShaderStage.COMPUTE|GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,this.format==z.rgba32float?(this.samplerBindingLayout.type="non-filtering",this.textureBindingLayout.sampleType="unfilterable-float",this.gpuSampler=i.createSampler({})):this.format==z.depth32float?(this.samplerBindingLayout.type="filtering",this.sampler_comparisonBindingLayout.type="comparison",this.textureBindingLayout.sampleType="depth",this.gpuSampler=w.device.createSampler({}),this.gpuSampler_comparison=w.device.createSampler({compare:"less",label:"sampler_comparison"})):this.format==z.depth24plus?(this.samplerBindingLayout={type:"filtering"},this.sampler_comparisonBindingLayout={type:"comparison"},this.textureBindingLayout.sampleType="depth",this.gpuSampler=w.device.createSampler({}),this.gpuSampler_comparison=w.device.createSampler({compare:"less",label:"sampler_comparison"})):(this.samplerBindingLayout.type="filtering",this.textureBindingLayout.sampleType="float",this.sampleCount>0&&(this.textureBindingLayout.multisampled=!0),this.minFilter="linear",this.magFilter="linear",this.mipmapFilter="linear",this.maxAnisotropy=16,this.addressModeU=nt.clamp_to_edge,this.addressModeV=nt.clamp_to_edge,this.gpuSampler=i.createSampler(this)),this._textureChange=!0}create(e,r,i=!0){let a=w.device;const o=e*4;let l=new Float32Array(e*r*4);const h=a.createBuffer({size:l.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});a.queue.writeBuffer(h,0,l);const u=b.beginCommandEncoder();u.copyBufferToTexture({buffer:h,bytesPerRow:o},{texture:this.getGPUTexture()},{width:e,height:r,depthOrArrayLayers:1}),b.endCommandEncoder(u)}readTextureToImage(){let e=w.device,r=w.windowWidth,i=w.windowHeight,a=new Float32Array(r*i*4);const o=e.createBuffer({size:a.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});return b.beginCommandEncoder().copyTextureToBuffer({texture:this.getGPUTexture()},{buffer:o},[r,i]),o.getMappedRange(0,a.byteLength)}}class Dl extends ee{constructor(e=.001,r=1e4,i=90,a=!1){super();s(this,"up_camera");s(this,"down_camera");s(this,"left_camera");s(this,"right_camera");s(this,"front_camera");s(this,"back_camera");this.initCubeCamera(e,r,i,a)}set label(e){this.up_camera.name=e+"up",this.down_camera.name=e+"down",this.left_camera.name=e+"left",this.right_camera.name=e+"right",this.front_camera.name=e+"front",this.back_camera.name=e+"back"}initCubeCamera(e,r,i=90,a=!1){this.up_camera=ye.createCamera3DObject(this,"up"),this.down_camera=ye.createCamera3DObject(this,"down"),this.left_camera=ye.createCamera3DObject(this,"left"),this.right_camera=ye.createCamera3DObject(this,"right"),this.front_camera=ye.createCamera3DObject(this,"front"),this.back_camera=ye.createCamera3DObject(this,"back"),this.up_camera.isShadowCamera=a,this.down_camera.isShadowCamera=a,this.left_camera.isShadowCamera=a,this.right_camera.isShadowCamera=a,this.front_camera.isShadowCamera=a,this.back_camera.isShadowCamera=a;let o=1;this.up_camera.perspective(i,o,e,r),this.up_camera.lookAt(g.ZERO,g.UP,g.DOWN),this.up_camera.object3D.scaleX=-1,this.up_camera.object3D.rotationY=180,this.down_camera.perspective(i,o,e,r),this.down_camera.lookAt(g.ZERO,g.DOWN,g.DOWN),this.down_camera.object3D.scaleX=-1,this.down_camera.object3D.rotationY=180,this.left_camera.perspective(i,o,e,r),this.left_camera.lookAt(g.ZERO,g.LEFT),this.left_camera.object3D.scaleX=-1,this.right_camera.perspective(i,o,e,r),this.right_camera.lookAt(g.ZERO,g.RIGHT),this.right_camera.object3D.scaleX=-1,this.front_camera.perspective(i,o,e,r),this.front_camera.lookAt(g.ZERO,g.FORWARD),this.front_camera.object3D.scaleX=-1,this.back_camera.perspective(i,o,e,r),this.back_camera.lookAt(g.ZERO,g.BACK),this.back_camera.object3D.scaleX=-1,this.up_camera.type=ue.shadow,this.down_camera.type=ue.shadow,this.left_camera.type=ue.shadow,this.right_camera.type=ue.shadow,this.front_camera.type=ue.shadow,this.back_camera.type=ue.shadow}}class Rl extends Ge{constructor(t,e,r){super(t,e,r),this.format=z.depth32float,this.mipmapCount=1,this.init()}internalCreateBindingLayoutDesc(){this.textureBindingLayout.sampleType="depth",this.textureBindingLayout.viewDimension="cube-array",this.samplerBindingLayout.type="filtering",this.sampler_comparisonBindingLayout.type="comparison"}internalCreateTexture(){this.textureDescriptor={format:this.format,size:{width:this.width,height:this.height,depthOrArrayLayers:6*this.numberLayer},dimension:"2d",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.TEXTURE_BINDING},this.gpuTexture=this.getGPUTexture()}internalCreateView(){this.viewDescriptor={dimension:"cube-array"},this.view=this.getGPUView()}internalCreateSampler(){this.gpuSampler=w.device.createSampler({minFilter:Wt.linear,magFilter:Wt.linear}),this.gpuSampler_comparison=w.device.createSampler({compare:"less",label:"sampler_comparison"})}}class Ml extends yr{constructor(){super();s(this,"shadowPassCount");s(this,"_forceUpdate",!1);s(this,"_shadowCameraDic");s(this,"shadowCamera");s(this,"cubeArrayTexture");s(this,"colorTexture");s(this,"shadowSize",1024);this.passType=Y.POINT_SHADOW,this._shadowCameraDic=new Map,this.cubeArrayTexture=new Rl(this.shadowSize,this.shadowSize,8),this.colorTexture=new jt(this.shadowSize,this.shadowSize,z.bgra8unorm,!1),q.getInstance().attached(this.cubeArrayTexture,this)}getShadowCamera(e,r){var a;let i;if(this._shadowCameraDic.has(r))i=this._shadowCameraDic.get(r);else{let o=new Dl(e.camera.near,e.camera.far,90,!0);o.label=r.name;let l=[],h=[];for(let u=0;u<6;u++){let c=new jt(this.shadowSize,this.shadowSize,this.cubeArrayTexture.format,!1),d=new Lt([this.colorTexture],[new qe]);c.name="shadowDepthTexture_"+r.name+u+"_face",d.depthTexture=c,d.label="shadowRender",d.customSize=!0;let f=Pt.createRendererPassState(d);h[u]=f,l[u]=c,(a=y.getRenderJob(e).postRenderer)==null||a.setDebugTexture([c])}i={cubeCamera:o,depthTexture:l,rendererPassState:h},this._shadowCameraDic.set(r,i)}return i}render(e,r){if(!y.setting.shadow.enable)return;this.shadowPassCount=0,e.camera;let i=e.scene,a=st.getPointShadowLightWhichScene(i),o=a.length;for(let l=0;l<o;l++){let h=a[l];if(h.lightData.lightType!=be.DirectionLight&&h.lightData.castShadowIndex>-1&&(h.needUpdateShadow||this._forceUpdate||ie.frame<5||h.realTimeShadow)){h.needUpdateShadow=!1;let u=this.getShadowCamera(e,h),c=h.transform.worldPosition;u.cubeCamera.x=c.x,u.cubeCamera.y=c.y,u.cubeCamera.z=c.z;let d;u.cubeCamera.transform.updateWorldMatrix(!0),r.update(u.cubeCamera.right_camera,i),d=k.instance.getRenderNodes(i,u.cubeCamera.right_camera),this.renderSceneOnce(0,u,e,u.cubeCamera.right_camera,d,r),r.update(u.cubeCamera.left_camera,i),d=k.instance.getRenderNodes(i,u.cubeCamera.left_camera),this.renderSceneOnce(1,u,e,u.cubeCamera.left_camera,d,r),r.update(u.cubeCamera.up_camera,i),d=k.instance.getRenderNodes(i,u.cubeCamera.up_camera),this.renderSceneOnce(2,u,e,u.cubeCamera.up_camera,d,r),r.update(u.cubeCamera.down_camera,i),d=k.instance.getRenderNodes(i,u.cubeCamera.down_camera),this.renderSceneOnce(3,u,e,u.cubeCamera.down_camera,d,r),r.update(u.cubeCamera.front_camera,i),d=k.instance.getRenderNodes(i,u.cubeCamera.front_camera),this.renderSceneOnce(4,u,e,u.cubeCamera.front_camera,d,r),r.update(u.cubeCamera.back_camera,i),d=k.instance.getRenderNodes(i,u.cubeCamera.back_camera),this.renderSceneOnce(5,u,e,u.cubeCamera.back_camera,d,r);let f=b.beginCommandEncoder();for(let p=0;p<6;p++)f.copyTextureToTexture({texture:u.depthTexture[p].getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:0}},{texture:this.cubeArrayTexture.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:h.shadowIndex*6+p}},{width:this.shadowSize,height:this.shadowSize,depthOrArrayLayers:1});b.endCommandEncoder(f)}}this._forceUpdate=!1}renderSceneOnce(e,r,i,a,o,l){this.rendererPassState=r.rendererPassState[e];let h=b.beginCommandEncoder(),u=b.beginRenderPass(h,this.rendererPassState);u.setViewport(0,0,this.shadowSize,this.shadowSize,0,1),u.setScissorRect(0,0,this.shadowSize,this.shadowSize),a.onUpdate(),a.transform.updateWorldMatrix(!0);let c=k.instance.getRenderShaderCollect(i);for(const d of c){let f=d[1];for(const p of f){let A=p[1];if(A.preInit){A.nodeUpdate(i,this._rendererType,this.rendererPassState,null);break}}}this.drawShadowRenderNodes(i,a,u,o.opaqueList,l),this.drawShadowRenderNodes(i,a,u,o.transparentList,l),b.endPass(u),b.endCommandEncoder(h)}drawShadowRenderNodes(e,r,i,a,o){if(b.bindCamera(i,r),a)for(let l=y.setting.render.drawOpMin;l<Math.min(a.length,y.setting.render.drawOpMax);++l){let h=a[l];if(h.transform.worldMatrix.index,!!h.transform.enable&&h.enable){h.preInit||h.nodeUpdate(e,this._rendererType,this.rendererPassState);for(let u of h.materials){let c=u.getPass(this._rendererType);if(!c||c.length==0)continue;b.bindGeometryBuffer(i,h.geometry);let d=h.object3D.transform._worldMatrix;for(let f of c){const p=f;if(p.pipeline){p.setUniformFloat("cameraFar",r.far),p.setUniformVector3("lightWorldPos",r.transform.worldPosition),p.materialDataUniformBuffer.apply(),b.bindPipeline(i,p);let A=h.geometry.subGeometries;for(const x of A){let C=x.lodLevels[h.lodLevel];b.drawIndexed(i,C.indexCount,1,C.indexStart,0,d.index)}}}}}}}}class Pl extends Ge{constructor(t,e,r=z.depth32float,i=4){super(t,e,i),this.format=r,this.mipmapCount=1,this.init()}internalCreateBindingLayoutDesc(){this.textureBindingLayout.sampleType="depth",this.textureBindingLayout.viewDimension="2d-array",this.samplerBindingLayout.type="filtering",this.sampler_comparisonBindingLayout.type="comparison"}internalCreateTexture(){this.textureDescriptor={format:this.format,size:{width:this.width,height:this.height,depthOrArrayLayers:this.numberLayer},dimension:"2d",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.TEXTURE_BINDING},this.gpuTexture=this.getGPUTexture()}internalCreateView(){this.viewDescriptor={dimension:"2d-array"},this.view=this.getGPUView()}internalCreateSampler(){this.gpuSampler=w.device.createSampler({}),this.gpuSampler_comparison=w.device.createSampler({compare:"less",label:"sampler_comparison"})}}class Ul extends yr{constructor(){super();s(this,"shadowPassCount");s(this,"depth2DArrayTexture");s(this,"rendererPassStates");s(this,"_forceUpdate",!1);s(this,"_shadowPos",new g);s(this,"_shadowCameraTarget",new g);this.setShadowMap(y.setting.shadow.shadowSize,Rt.Cascades),this.passType=Y.SHADOW}setShadowMap(e,r){this.rendererPassStates=[],this.depth2DArrayTexture=new Pl(e,e,z.depth32float,8),q.getInstance().attached(this.depth2DArrayTexture,this);for(let i=0;i<8;i++){let a=new Lt([],[]);const o=new jt(e,e,z.depth32float,!1);o.name=`shadowDepthTexture_${i}`,a.depthTexture=o,a.label="shadowRender",a.customSize=!0,a.depthCleanValue=1;let l=Pt.createRendererPassState(a);this.rendererPassStates[i]=l}}render(e,r){let i=y.setting.shadow;if(!i.enable)return;let a=e.camera,o=e.scene;if(this.shadowPassCount=0,!i.needUpdate||ie.frame%i.updateFrameRate!=0)return;let l=st.getDirectShadowLightWhichScene(o),h=i.shadowSize;const u=Rt.Cascades;for(let c of l){const d=c;let f=d.shadowIndex;this.rendererPassState=this.rendererPassStates[f],h=this.rendererPassState.depthTexture.width;let p=k.instance.getRenderShaderCollect(e);for(const A of p){let x=A[1];for(const C of x){let v=C[1];if(v.preInit){v.nodeUpdate(e,this._rendererType,this.rendererPassState,null);break}}}if(d.castShadow&&d.needUpdateShadow||this._forceUpdate||d.castShadow&&i.autoUpdate)if(d.needUpdateShadow=!1,a.enableCSM&&f==0)for(let A=0;A<u;A++){this.rendererPassState=this.rendererPassStates[A];let x=a.csm.children[A],C=a.getCSMShadowWorldExtents(A);this.poseShadowCamera(a,d.direction,x.shadowCamera,C,x.bound.center),this.renderShadow(e,x.shadowCamera,r,this.rendererPassState),this.copyDepthTexture(this.rendererPassState.depthTexture,this.depth2DArrayTexture,A,h)}else{a.enableCSM&&(f+=u-1);let A=a.getShadowWorldExtents();this.rendererPassState=this.rendererPassStates[f],this.poseShadowCamera(a,d.direction,d.shadowCamera,A,a.lookTarget),this.renderShadow(e,d.shadowCamera,r,this.rendererPassState),this.copyDepthTexture(this.rendererPassState.depthTexture,this.depth2DArrayTexture,f,h)}}this._forceUpdate=!1}copyDepthTexture(e,r,i,a){let o=b.beginCommandEncoder();o.copyTextureToTexture({texture:e.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:0}},{texture:r.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:i}},{width:a,height:a,depthOrArrayLayers:1}),b.endCommandEncoder(o)}poseShadowCamera(e,r,i,a,o){this._shadowPos.copy(r).normalize(e.far),o.add(this._shadowPos,this._shadowCameraTarget),o.subtract(this._shadowPos,this._shadowPos),i.transform.lookAt(this._shadowPos,this._shadowCameraTarget),i.orthoOffCenter(-a,a,-a,a,e.near,e.far*2)}compute(){}renderShadow(e,r,i,a){let o=k.instance.getRenderNodes(e.scene,r),l=b.beginCommandEncoder(),h=b.beginRenderPass(l,a);r.transform.updateWorldMatrix(),i.update(r,e.scene),i.collect(o,r),b.bindCamera(h,r);let u=this.renderShadowBundleOp(e,r,a),c=this.renderShadowBundleTr(e,r,a);u.length>0&&h.executeBundles(u),this.drawShadowRenderNodes(e,r,h,o.opaqueList),c.length>0&&h.executeBundles(c),this.drawShadowRenderNodes(e,r,h,o.transparentList),b.endPass(h),b.endCommandEncoder(l)}renderShadowBundleOp(e,r,i){let a=k.instance.getOpRenderGroup(e.scene);if(a){let o=[];return a.renderGroup.forEach(l=>{if(l.bundleMap.has(this._rendererType))o.push(l.bundleMap.get(this._rendererType));else{let h=b.recordBundleEncoder(i.renderBundleEncoderDescriptor);this.recordShadowRenderBundleNode(e,r,h,l.renderNodes);let u=h.finish();l.bundleMap.set(this._rendererType,u),o.push(u)}}),o}return[]}renderShadowBundleTr(e,r,i){let a=k.instance.getTrRenderGroup(e.scene);if(a){let o=[];return a.renderGroup.forEach(l=>{if(l.bundleMap.has(this._rendererType))o.push(l.bundleMap.get(this._rendererType));else{let h=b.recordBundleEncoder(i.renderBundleEncoderDescriptor);this.recordShadowRenderBundleNode(e,r,h,l.renderNodes);let u=h.finish();l.bundleMap.set(this._rendererType,u),o.push(u)}}),o}return[]}recordShadowRenderBundleNode(e,r,i,a,o){if(b.bindCamera(i,r),a){b.bindGeometryBuffer(i,a[0].geometry);for(let l=0;l<a.length;++l){let h=a[l];h.transform.enable&&h.recordRenderPass2(e,this._rendererType,this.rendererPassState,o,i)}}}drawShadowRenderNodes(e,r,i,a,o){if(b.bindCamera(i,r),a)for(let l=y.setting.render.drawOpMin;l<Math.min(a.length,y.setting.render.drawOpMax);++l){let h=a[l];h.transform.enable&&h.enable&&h.castShadow&&h.renderPass2(e,this._rendererType,this.rendererPassState,o,i)}}}class Ll extends yr{constructor(){super();s(this,"zBufferTexture");s(this,"useRenderBundle",!1);s(this,"shadowPassCount");s(this,"zCullingCompute");this.passType=Y.DEPTH;let e=w.presentationSize,r=1;this.zBufferTexture=Fe.createRTTexture(Ce.zBufferTexture_NAME,Math.floor(e[0]*r),Math.floor(e[1]*r),z.rgba16float,!1);let i=new qe;i.clearValue=[0,0,0,0],i.loadOp="clear";let a=new Lt([],[],Fe.createRTTexture(Ce.zPreDepthTexture_NAME,Math.floor(e[0]),Math.floor(e[1]),z.depth32float,!1),null,!1);this.setRenderStates(a)}render(e,r){let i=e.camera,a=e.scene;b.cleanCache(),rt.start("DepthPass Renderer");let o=a;this.rendererPassState.camera3D=i;let l=k.instance.getRenderNodes(o,i);this.compute(e,r);let h=this.renderBundleOp(e,l,r),u=[],c=b.beginCommandEncoder(),d=b.beginRenderPass(c,this.rendererPassState);h.length>0&&d.executeBundles(h);let f=k.instance.getRenderShaderCollect(e);for(const p of f){let A=p[1];for(const x of A){let C=x[1];if(C.preInit){C.nodeUpdate(e,this._rendererType,this.rendererPassState,null);break}}}this.drawRenderNodes(e,d,c,l.opaqueList,r),u.length>0&&d.executeBundles(u),b.endPass(d),b.endCommandEncoder(c),rt.end("DepthPass Renderer")}drawRenderNodes(e,r,i,a,o,l){b.bindCamera(r,e.camera);for(let h=y.setting.render.drawOpMin;h<Math.min(a.length,y.setting.render.drawOpMax);++h){let u=a[h];u.transform.enable&&u.enable&&(u.preInit||u.nodeUpdate(e,this._rendererType,this.rendererPassState),u.renderPass2(e,this._rendererType,this.rendererPassState,l,r))}}}class Ol{constructor(){s(this,"map");s(this,"passRendererList");this.map=new Map,this.passRendererList=[]}addRenderer(t){this.map.has(t.passType)?console.error("same renderer pass repeat!"):(this.map.set(t.passType,t),t.passType<=8&&this.addPassRenderer(t))}getRenderer(t){return this.map.get(t)}addPassRenderer(t){this.passRendererList.push(t)}getAllRenderer(){return this.map}getAllPassRenderer(){return this.passRendererList}}class Nl extends yr{constructor(){super();s(this,"finalQuadView");s(this,"postList");this._rendererType=Y.POST,this.postList=[],this.initRenderer()}initRenderer(){L.register("FullQuad_vert_wgsl",qo),this.finalQuadView=new Oa("Quad_vert_wgsl","Quad_frag_wgsl",new Lt([],[]),0,!1)}attachPost(e,r){r.postRenderer=this,this.postList.indexOf(r)!=-1||(this.postList.push(r),r.onAttach(e))}detachPost(e,r){let i=this.postList.indexOf(r);return i>=0&&(this.postList.splice(i,1),r.onDetach(e),r.postRenderer=null),i>=0}render(e){let r=b.beginCommandEncoder();for(let a=0;a<this.postList.length;a++){const o=this.postList[a];o.enable&&o.render(e,r)}let i=b.lastRenderPassState.getLastRenderTexture();if(this.finalQuadView.renderToViewQuad(e,this.finalQuadView,r,i),this.debugViewQuads.length){let a=y.setting.render.debugQuad;a>=0&&this.debugViewQuads[a].renderToViewQuad(e,this.debugViewQuads[a],r,this.debugTextures[a])}b.endCommandEncoder(r)}}class ca{constructor(){s(this,"enable",!0);s(this,"postRenderer");s(this,"rtViewQuad");s(this,"virtualTexture");this.rtViewQuad=new Map,this.virtualTexture=new Map,w.addEventListener(xr.RESIZE,this.onResize,this)}createRTTexture(t,e,r,i,a=!1,o=0){let l=Fe.createRTTexture(t,e,r,i,a,o);return l.name=t,this.virtualTexture.set(t,l),q.getInstance().attached(l,this),l}createViewQuad(t,e,r,i=0){let a=Fe.createViewQuad(t,"Quad_vert_wgsl",e,r,i);return this.rtViewQuad.set(t,a),a}getOutTexture(){let t,e=b.lastRenderPassState.renderTargets;return e.length>0?t=e[0]:t=Fe.getTexture(Ce.colorBufferTex_NAME),t}autoSetColorTexture(t,e){let r=this.getOutTexture();e.setSamplerTexture(t,r)}compute(t){}onAttach(t){}onDetach(t){}onResize(){}render(t,e){this.compute(t),this.rtViewQuad.forEach((r,i)=>{let a=b.lastRenderPassState.getLastRenderTexture();r.renderToViewQuad(t,r,e,a)})}destroy(t){this.postRenderer=null;for(let e=0;e<this.rtViewQuad.size;e++)this.rtViewQuad.values[e].destroy(t);this.rtViewQuad.clear(),this.rtViewQuad=null;for(let e=0;e<this.virtualTexture.size;e++){const r=this.virtualTexture.values[e];q.getInstance().detached(r,this),r.destroy(t)}}}class Fl{constructor(t){s(this,"rendererMap");s(this,"shadowMapPassRenderer");s(this,"pointLightShadowRenderer");s(this,"ddgiProbeRenderer");s(this,"postRenderer");s(this,"clusterLightingRender");s(this,"occlusionSystem");s(this,"depthPassRenderer");s(this,"colorPassRenderer");s(this,"pauseRender",!1);s(this,"pickFire");s(this,"renderState",!1);s(this,"_view");this._view=t,this.rendererMap=new Ol,this.occlusionSystem=new Qs,this.clusterLightingRender=this.addRenderer(Bl,t),y.setting.render.zPrePass&&(this.depthPassRenderer=this.addRenderer(Ll)),this.shadowMapPassRenderer=new Ul,this.pointLightShadowRenderer=new Ml}addRenderer(t,e){let r;return e?r=new t(e):r=new t,this.rendererMap.addRenderer(r),r}get view(){return this._view}set view(t){this._view=t}start(){this.renderState=!0}stop(){}pause(){this.pauseRender=!0}resume(){this.pauseRender=!1}enablePost(t){this.postRenderer=this.addRenderer(Nl),this.postRenderer.setRenderStates(t)}addPost(t){return this.postRenderer||(Nr.bufferTexture=!0,this.enablePost(Nr.getGBufferFrame("ColorPassGBuffer"))),t instanceof ca&&this.postRenderer.attachPost(this.view,t),t}removePost(t){if(t instanceof ca)this.postRenderer.detachPost(this.view,t);else for(let e=0;e<t.length;e++)this.postRenderer.detachPost(this.view,t[e])}renderFrame(){let t=this._view;ge.getLightEntries(t.scene).update(t),this.occlusionSystem.update(t.camera,t.scene),this.clusterLightingRender.render(t,this.occlusionSystem),this.shadowMapPassRenderer&&(st.update(t),this.shadowMapPassRenderer.render(t,this.occlusionSystem)),this.pointLightShadowRenderer&&this.pointLightShadowRenderer.render(t,this.occlusionSystem),this.depthPassRenderer&&(this.depthPassRenderer.compute(t,this.occlusionSystem),this.depthPassRenderer.render(t,this.occlusionSystem)),y.setting.gi.enable&&this.ddgiProbeRenderer&&(this.ddgiProbeRenderer.compute(t,this.occlusionSystem),this.ddgiProbeRenderer.render(t,this.occlusionSystem));let e=this.rendererMap.getAllPassRenderer();for(let r=0;r<e.length;r++){const i=e[r];i.compute(t,this.occlusionSystem),i.render(t,this.occlusionSystem,this.clusterLightingRender.clusterLightingBuffer)}this.postRenderer&&this.postRenderer.postList.length>0&&this.postRenderer.render(t)}debug(){}}class kl extends ee{constructor(e=.001,r=1e4,i=90,a=!1){super();s(this,"up_camera");s(this,"down_camera");s(this,"left_camera");s(this,"right_camera");s(this,"front_camera");s(this,"back_camera");this.initCubeCamera(e,r,i,a)}initCubeCamera(e,r,i=90,a=!1){this.up_camera=ye.createCamera3DObject(this,"up"),this.down_camera=ye.createCamera3DObject(this,"down"),this.left_camera=ye.createCamera3DObject(this,"left"),this.right_camera=ye.createCamera3DObject(this,"right"),this.front_camera=ye.createCamera3DObject(this,"front"),this.back_camera=ye.createCamera3DObject(this,"back"),this.up_camera.isShadowCamera=a,this.down_camera.isShadowCamera=a,this.left_camera.isShadowCamera=a,this.right_camera.isShadowCamera=a,this.front_camera.isShadowCamera=a,this.back_camera.isShadowCamera=a;let o=1;this.up_camera.perspective(i,o,e,r),this.up_camera.lookAt(g.ZERO,g.UP,g.DOWN),this.down_camera.perspective(i,o,e,r),this.down_camera.lookAt(g.ZERO,g.DOWN,g.DOWN),this.left_camera.perspective(i,o,e,r),this.left_camera.lookAt(g.ZERO,g.LEFT),this.right_camera.perspective(i,o,e,r),this.right_camera.lookAt(g.ZERO,g.RIGHT),this.front_camera.perspective(i,o,e,r),this.front_camera.lookAt(g.ZERO,g.FORWARD),this.back_camera.perspective(i,o,e,r),this.back_camera.lookAt(g.ZERO,g.BACK),this.up_camera.type=ue.shadow,this.down_camera.type=ue.shadow,this.left_camera.type=ue.shadow,this.right_camera.type=ue.shadow,this.front_camera.type=ue.shadow,this.back_camera.type=ue.shadow}}class Ql extends Lt{constructor(t,e,r=!0){super([],[]),this.crateGBuffer(t,e,r)}crateGBuffer(t,e,r){let i=this.renderTargets,a=this.rtDescriptors,o=new We(t,e,z.rgba16float,!1,void 0,1,0,!0,r);o.name="positionMap";let l=new qe;l.loadOp="load";let h=new We(t,e,z.rgba16float,!1,void 0,1,0,!0,r);h.name="normalMap";let u=new qe;u.loadOp="load";let c=new We(t,e,z.rgba16float,!1,void 0,1,0,!0,r);c.name="colorMap";let d=new qe;d.loadOp="load";let f=new We(t,e,z.depth24plus,!1,void 0,1,0,!0,r);f.name="depthTexture";let p=new qe;p.loadOp="load",i.push(o),i.push(h),i.push(c),a.push(l),a.push(u),a.push(d),this.depthTexture=f}}let Gl=`
#include "GenerayRandomDir"
#include "MathShader"
#include "IrradianceVolumeData_frag"
var<private> PI: f32 = 3.14159265359;

struct ProbeData{
  offsetX:f32,
  offsetY:f32,
  offsetZ:f32,
  frame:f32,
}

 struct Uniforms {
     matrix : array<mat4x4<f32>>
 };

struct RayProbeBuffer{
  WPosition: vec3<f32>,
  WNormal:vec3<f32>,
  WRadiance:vec4<f32>,
}

struct CacheHitData{
  color:vec4<f32>,
  depth:vec4<f32>,
}

//  struct RayInfo{
//   rays:array<vec4<f32>,4096>
//  }

@group(0) @binding(0) var<storage, read> probes : array<ProbeData>;
@group(0) @binding(1) var<storage, read_write> irradianceBuffer : array<vec4<f32>>;
@group(0) @binding(2) var<storage, read_write> depthBuffer : array<vec4<f32>>;
@group(0) @binding(3) var<uniform> uniformData : IrradianceVolumeData ;
@group(0) @binding(4) var probeIrradianceMap : texture_storage_2d<rgba16float, write>;
@group(0) @binding(5) var probeDepthMap : texture_storage_2d<rgba16float, write>;
@group(0) @binding(6) var<storage, read_write> depthRaysBuffer : array<vec4<f32>>;

@group(1) @binding(0) var positionMap : texture_2d<f32>;
@group(1) @binding(1) var normalMap : texture_2d<f32>;
@group(1) @binding(2) var colorMap : texture_2d<f32>;

@group(2) @binding(0)
var<storage, read> models : Uniforms;

var<private> probeID: u32 ;
var<private> workgroup_idx: u32 ;
var<private> workgroup_idy: u32 ;
var<private> hysteresis: f32 = 0.98 ;
var<private> epsilon: f32 = 1e-6 ;
var<private> probeLocation:vec3<f32> = vec3<f32>(0.0);
var<private> energyConservation: f32 = 0.85 ;
var<private> resultIrradiance: vec4<f32> ;
var<private> resultDepth: vec4<f32> ;
var<private> RAYS_PER_PROBE: f32 = 144.0 ;
var<private> OCT_RT_SIZE: u32;
var<private> PROBE_OCT_RT_SIZE: u32;
var<private> OCT_SIDE_SIZE_u32: u32;
var<private> OCT_SIDE_SIZE_f32: f32;
var<private> OCT_RT_SIZE_f32: f32;
var<private> PROBE_SOURCESIZE: f32;
var<private> PROBEMAP_SOURCESIZE: f32;
var<private> quaternion:vec4<f32> = vec4<f32>(0.0, -0.7071067811865475, 0.7071067811865475, 0.0);
var<private> randomMatrix:mat4x4<f32>;

@compute @workgroup_size( 8 , 8 , 1 )
fn CsMain(@builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
{
   RAYS_PER_PROBE = f32(i32(uniformData.rayNumber));
   OCT_RT_SIZE = u32(uniformData.OctRTMaxSize);
   OCT_RT_SIZE_f32 = f32(uniformData.OctRTMaxSize);
   OCT_SIDE_SIZE_u32 = u32(uniformData.OctRTSideSize);
   OCT_SIDE_SIZE_f32 = f32(uniformData.OctRTSideSize);
   PROBE_SOURCESIZE = f32(uniformData.ProbeSize);
   PROBEMAP_SOURCESIZE = f32(uniformData.ProbeSourceTextureSize);
   hysteresis = uniformData.hysteresis;
    // probe index
    probeID = globalInvocation_id.z ;
    // pixel coord
    workgroup_idx = globalInvocation_id.x ;
    workgroup_idy = globalInvocation_id.y;

    probeLocation = calcProbePosition(probeID);

    resultIrradiance = vec4<f32>(0.0);
    resultDepth = vec4<f32>(0.0,0.0,0.0,0.0);

    var tdr = normalize(getCurrentDir());
    let orientationIndex = u32(uniformData.orientationIndex);
    randomMatrix = models.matrix[orientationIndex];

    var distancePprobeUV = getSampleProbeUV(tdr.xyz);
    var rayUv:vec2<i32> = vec2<i32>(distancePprobeUV.xy * f32(PROBEMAP_SOURCESIZE - 1.0));
    let rayHitPosition = textureLoad(positionMap, rayUv, 0).xyz ;
    
    for(var i:f32 = 0.0; i < RAYS_PER_PROBE ; i = i + 1.0 ){
      radianceProbeOnce(i, tdr);
    }

    if (resultIrradiance.w > epsilon) {
      var color = vec3<f32>(resultIrradiance.xyz/(2.0*resultIrradiance.w)) ;
      color = pow(color.rgb, vec3<f32>(1.0 / uniformData.ddgiGamma));
      resultIrradiance = vec4<f32>(color,1.0-hysteresis);
    }

    // if nonzero
    if (resultDepth.w > epsilon) {
      resultDepth = vec4<f32>(resultDepth.xyz/(2.0*resultDepth.w),1.0-hysteresis) ;
    }

   let pixelCoord = getWriteOctUVByID();

   var lerpDataResult:CacheHitData;

   lerpDataResult.color = resultIrradiance;

   lerpDataResult.depth = resultDepth;

   lerpDataResult = lerpHitData(lerpDataResult, pixelCoord);

   writeRayHitData(pixelCoord, lerpDataResult);

   storePixelAtCoord(probeIrradianceMap, pixelCoord , vec4<f32>(lerpDataResult.color.xyz, 1.0), true);

   storePixelAtCoord(probeDepthMap, pixelCoord , vec4<f32>(resultDepth.xy, 0.0, 1.0), false);
}

fn lerpHitData(data:CacheHitData, coord:vec2<i32>) -> CacheHitData{
   let frameIndex = probes[probeID].frame;
   var newData:CacheHitData = data;

   //if(frameIndex > 1.0){
      var oldData = readRayHitData(coord);
      newData.color = mix(oldData.color, newData.color, uniformData.lerpHysteresis);
      newData.depth = mix(oldData.depth, newData.depth, uniformData.lerpHysteresis);
   //}
   return newData;
}

fn square(v:vec3<f32>) -> vec3<f32>{
   var v3 = v;
   v3.x = v3.x * v3.x;
   v3.y = v3.y * v3.y;
   v3.z = v3.z * v3.z;
   return v3;
}

 fn testSample() ->vec4<f32>{
   var ux = f32(workgroup_idx) / OCT_SIDE_SIZE_f32;
   var uy = f32(workgroup_idy) / OCT_SIDE_SIZE_f32;
   var uv = vec2<f32>(ux,uy) * 2.0 - 1.0 ;
   var dir = octDecode(uv);
   var probeUV = getSampleProbeUV(dir.xyz);
   var rayProbeBuffer = getCurrentRayHitBuffer(probeUV);
   return rayProbeBuffer.WRadiance;
 }

 fn gridCoordToProbeIndex(grid:vec3<i32>) -> i32
 {
     return grid.x + grid.z * i32(uniformData.gridXCount) + grid.y * i32(uniformData.gridXCount * uniformData.gridZCount);
 }

fn storePixelAtCoord(texture:texture_storage_2d<rgba16float, write>, coord:vec2<i32>, color:vec4<f32>, isColor:bool){
   let sideCnt = i32(OCT_SIDE_SIZE_u32);
   let sideBorderCnt = sideCnt + 2;
   let indexXY = coord / sideCnt;
   let modeXY = coord % sideCnt;

   var newCoord = indexXY * sideBorderCnt + modeXY;
   textureStore(texture, newCoord + 1, color);

   var borderCoord = vec2<i32>(-1);
   //左右
   if(modeXY.x % (sideCnt - 1) == 0){
     borderCoord = modeXY;
     borderCoord.y = sideCnt - borderCoord.y;
     if(modeXY.x == sideCnt - 1){
       borderCoord.x = sideBorderCnt - 1;
     }
     borderCoord = indexXY * sideBorderCnt + borderCoord;
     textureStore(texture, borderCoord, color);
   }
   //上下
   if(modeXY.y % (sideCnt - 1) == 0){
     borderCoord = modeXY;
     borderCoord.x = sideCnt - borderCoord.x;
     if(modeXY.y == sideCnt - 1){
         borderCoord.y = sideBorderCnt - 1;
     }
     borderCoord = indexXY * sideBorderCnt + borderCoord;
     textureStore(texture, borderCoord, color);
   }
   //补角
   if(modeXY.x % (sideCnt - 1) == 0 && modeXY.y % (sideCnt - 1) == 0){
      var cornerCoord = modeXY;
      if(modeXY.x == 0){
         cornerCoord.x = sideBorderCnt - 1;
      }else{
         cornerCoord.x = 0;
      }
       if(modeXY.y == 0){
         cornerCoord.y = sideBorderCnt - 1;
      }else{
         cornerCoord.y = 0;
      }
      cornerCoord = indexXY * sideBorderCnt + cornerCoord;
      textureStore(texture, cornerCoord, color);
   }
}

fn calcProbePosition(id:u32) -> vec3<f32>{
   var probeLocation = vec3<f32>(0.0);
   var blockCount = u32(uniformData.gridXCount * uniformData.gridZCount) ;
   var grid = vec3<u32>(0u);
   grid.x = (id % blockCount) % u32(uniformData.gridXCount);
   grid.y = id / blockCount;
   grid.z = (id % blockCount) / u32(uniformData.gridXCount);
   probeLocation.x = f32(grid.x) * uniformData.ProbeSpace + uniformData.startX;
   probeLocation.y = f32(grid.y) * uniformData.ProbeSpace + uniformData.startY;
   probeLocation.z = f32(grid.z) * uniformData.ProbeSpace + uniformData.startZ;
   return probeLocation;
}

fn getWriteOctUVByID() -> vec2<i32>
{
   var blockCount = u32(uniformData.gridXCount * uniformData.gridZCount) ;
   var offsetX = (probeID % blockCount) % u32(uniformData.gridXCount) ;
   var offsetY = u32(uniformData.gridZCount - 1.0) - (probeID % blockCount) / u32(uniformData.gridXCount) ;
   var offsetZ = probeID / blockCount ;
   var pixelCoord = vec2<i32>(i32(workgroup_idx), i32(workgroup_idy));
   pixelCoord.x = pixelCoord.x + i32(offsetX * OCT_SIDE_SIZE_u32);
   pixelCoord.y = pixelCoord.y + i32(offsetY * OCT_SIDE_SIZE_u32 + offsetZ * u32(uniformData.gridZCount) * OCT_SIDE_SIZE_u32);

   pixelCoord = offsetByCol(pixelCoord, OCT_SIDE_SIZE_f32, OCT_RT_SIZE, vec3<f32>(uniformData.gridXCount, uniformData.gridYCount, uniformData.gridZCount));
   return pixelCoord;
}

fn offsetByCol(pixelCoord0:vec2<i32>, octSideSize:f32, mapHeight:u32, counts:vec3<f32>) -> vec2<i32>
{
 var pixelCoord = pixelCoord0;
 let blockSize:vec2<i32> = vec2<i32>(i32(octSideSize * counts.x),  i32(octSideSize * counts.z));
 let blockSizeYBorder:i32 = i32((octSideSize + 2.0) * counts.z);
 let blockMaxRowBorder:i32 = i32(mapHeight) / blockSizeYBorder;
 let pixelCountYMax:i32 = blockMaxRowBorder * i32(octSideSize * counts.z);
 let col:i32 = pixelCoord.y / pixelCountYMax;

 pixelCoord.x = col * i32(octSideSize * counts.x) + pixelCoord.x;
 pixelCoord.y = pixelCoord.y % pixelCountYMax;

 return pixelCoord;
}

fn radianceProbeOnce(rayID:f32, tdr:vec3<f32>){
   var texelDirection = sphericalFibonacci(rayID, RAYS_PER_PROBE ) ;
   var rayDirection = normalize( vec3<f32>((randomMatrix * vec4<f32>(texelDirection, 1.0)).xyz));
   var probeUV = getSampleProbeUV(rayDirection.xyz);
   var rayWriteUV = getWriteRayInfoUV();

   var rayProbeBuffer = getCurrentRayHitBuffer(probeUV);
   var rayHitLocation = rayProbeBuffer.WPosition + normalize(rayProbeBuffer.WNormal) * 0.01;

   var rayProbeDistance = length(probeLocation - rayHitLocation) ;
   // rayProbeDistance = min(uniformData.ProbeSpace * 4.0, rayProbeDistance) ;

   // if (dot(rayProbeBuffer.WNormal, rayProbeBuffer.WNormal) < epsilon) {
   //   rayProbeDistance = epsilon ;
   // }

   let rid = i32(probeID) * i32(RAYS_PER_PROBE) + i32(rayID) ;
   depthRaysBuffer[rid] = vec4<f32>(rayDirection.xyz,rayProbeDistance) ;

   // Detect misses and force depth
   var i_weight = max(0.0, dot(tdr,rayDirection) );
   var d_weight = pow(i_weight, uniformData.depthSharpness);
   
   if (i_weight >= epsilon) {
     //  var weightColor = pow(weight, (2.0 - uniformData.probeRoughness) * 2.0);
      resultIrradiance += vec4(rayProbeBuffer.WRadiance.rgb, i_weight );
     
   }
   if(d_weight>= epsilon){
       resultDepth += vec4(rayProbeDistance * d_weight, rayProbeDistance * rayProbeDistance * d_weight, 0.0 , i_weight);
   }
}

fn getCurrentRayHitBuffer(probeUV:vec2<f32>) -> RayProbeBuffer {
  var rayProbeBuffer : RayProbeBuffer ;
  var uv:vec2<i32> = vec2<i32>(probeUV.xy * f32(PROBEMAP_SOURCESIZE - 1.0));
  rayProbeBuffer.WPosition = textureLoad(positionMap, uv, 0).xyz ;
  rayProbeBuffer.WNormal = normalize(textureLoad(normalMap, uv, 0).xyz * 2.0 - 1.0);
  rayProbeBuffer.WRadiance = textureLoad(colorMap, uv, 0).xyzw * energyConservation;
  return rayProbeBuffer ;
}

fn getSampleProbeUV(dir0:vec3<f32>) -> vec2<f32> {
   var dir = applyQuaternion(dir0, quaternion);
   let faceId = dir_to_faceId(dir);
   var targetUV:vec2<f32> = convert_xyz_to_cube_uv(dir.x, dir.y, dir.z);
   targetUV.x = 1.0 - targetUV.x;
   let threshould = 0.5 / PROBE_SOURCESIZE;
   targetUV = clamp(targetUV, vec2<f32>(threshould), vec2<f32>(1.0 - threshould));

   targetUV.x = f32(faceId) + targetUV.x;

   let aspect:f32 = PROBE_SOURCESIZE / PROBEMAP_SOURCESIZE;
   targetUV = targetUV * aspect ;

   var fullCol = u32(PROBEMAP_SOURCESIZE) / u32(PROBE_SOURCESIZE);
   var offsetSampleUv = vec2<f32>( f32(probeID / fullCol) * 6.0 , f32(probeID % fullCol)) * aspect;
   return targetUV + offsetSampleUv;
}

fn getWriteRayInfoUV() -> vec2<i32> {
  var writeUV = vec2<i32>(i32(workgroup_idy),i32(probeID)) ;
  return writeUV ;
}

fn writeRayHitData( uv:vec2<i32> , data:CacheHitData){
  let index = uv.y * i32(OCT_RT_SIZE) + uv.x ;
  irradianceBuffer[index] = data.color ;
  depthBuffer[index] = data.depth ;
}

fn readRayHitData( uv:vec2<i32> ) -> CacheHitData{
  var data:CacheHitData;
  let index = uv.y * i32(OCT_RT_SIZE) + uv.x ;
  data.color = irradianceBuffer[index] ;
  data.depth = depthBuffer[index] ;
  return data;
}

fn getCurrentDir() -> vec3<f32> {
  var ux = f32(workgroup_idx) / OCT_SIDE_SIZE_f32;
  var uy = f32(workgroup_idy) / OCT_SIDE_SIZE_f32;
  var uv = vec2<f32>(ux,uy) * 2.0 - 1.0 ;
  var dir = octDecode(uv) ;
  return normalize(dir) ;
}


`;class zl{constructor(t){s(this,"irradianceBuffer");s(this,"depthBuffer");s(this,"probeIrradianceMap");s(this,"probeDepthMap");s(this,"volume");s(this,"computeShader");s(this,"depthRaysBuffer");this.volume=t,this.initPipeline()}initPipeline(){this.computeShader=new Mt(Gl);let t=y.setting.gi,e=t.octRTMaxSize*t.octRTMaxSize;this.irradianceBuffer=new Pe(e*4,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST),this.computeShader.setStorageBuffer("irradianceBuffer",this.irradianceBuffer),this.depthBuffer=new Pe(e*4,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST),this.computeShader.setStorageBuffer("depthBuffer",this.depthBuffer),this.depthRaysBuffer=new Pe(4096*4*2*2*2,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC),this.computeShader.setStorageBuffer("depthRaysBuffer",this.depthRaysBuffer),this.computeShader.setStorageBuffer("probes",this.volume.probesBuffer),this.computeShader.setUniformBuffer("uniformData",this.volume.irradianceVolumeBuffer),this.computeShader.setStorageBuffer("models",ge.modelMatrixBindGroup.matrixBufferDst)}setTextures(t,e,r){this.probeIrradianceMap=e,this.probeDepthMap=r;let i=t[0],a=t[1],o=t[2];this.computeShader.setStorageTexture("probeIrradianceMap",this.probeIrradianceMap),this.computeShader.setStorageTexture("probeDepthMap",this.probeDepthMap),this.computeShader.setSamplerTexture("positionMap",i),this.computeShader.setSamplerTexture("normalMap",a),this.computeShader.setSamplerTexture("colorMap",o)}readBuffer(){return this.depthRaysBuffer.readBuffer()}compute(t,e){let r=this.volume.setting,i=b.beginCommandEncoder(),a=k.instance.getProbes(t.scene);this.computeShader.workerSizeX=r.octRTSideSize/8,this.computeShader.workerSizeY=r.octRTSideSize/8,this.computeShader.workerSizeZ=a.length,b.computeCommand(i,[this.computeShader])}}let Vl=`
  #include "MathShader"
  #include "IrradianceVolumeData_frag"

  struct IrradianceField {
      probeStartPosition: vec4<f32>,
      probeCounts:vec4<f32>,
      probeStep:f32,
      irradianceTextureWidth:f32,
      irradianceTextureHeight:f32,
      irradianceProbeSideLength:f32,
  };

  @group(0) @binding(0) var outputBuffer : texture_storage_2d<rgba16float, write>;
  @group(0) @binding(1) var<uniform> uniformData : IrradianceVolumeData ;

  @group(1) @binding(0) var normalMapSampler : sampler;
  @group(1) @binding(1) var normalMap : texture_2d<f32>;

  @group(1) @binding(2) var colorMapSampler : sampler;
  @group(1) @binding(3) var colorMap : texture_2d<f32>;

  @group(1) @binding(4) var litMapSampler : sampler;
  @group(1) @binding(5) var litMap : texture_2d<f32>;

  @group(1) @binding(6) var irradianceMapSampler : sampler;
  @group(1) @binding(7) var irradianceMap : texture_2d<f32>;

  var<private> wsn:vec3<f32>;
  var<private> ulitColor:vec4<f32>;
  var<private> litColor:vec4<f32>;
  var<private> irradianceFieldSurface : IrradianceField ;
  var<private> probeID:u32;

  var<private> quaternion:vec4<f32> = vec4<f32>(0.0, -0.7071067811865475, 0.7071067811865475, 0.0);

  fn getIrradianceFieldSurface() -> IrradianceField{
    let data = uniformData;
    irradianceFieldSurface.probeStartPosition = vec4<f32>(data.startX, data.startY, data.startZ, 0.0);
    irradianceFieldSurface.probeCounts = vec4<f32>(data.gridXCount, data.gridYCount, data.gridZCount, 0.0);
    irradianceFieldSurface.probeStep = data.ProbeSpace;
    irradianceFieldSurface.irradianceTextureWidth = data.OctRTMaxSize;
    irradianceFieldSurface.irradianceTextureHeight = data.OctRTMaxSize;
    irradianceFieldSurface.irradianceProbeSideLength = data.OctRTSideSize;
    return irradianceFieldSurface;
  }

  fn rotateDir(n:vec3<f32>) -> vec3<f32>{
     return normalize(applyQuaternion(-n, quaternion));
  }

  fn sampleLitColor(uv:vec2<i32>) -> vec4<f32>
  {
      var oc1:vec4<f32> = textureSampleLevel(litMap, litMapSampler, vec2<f32>(0.0), 0.0);
      var oc:vec4<f32> = textureLoad(litMap, uv, 0);
      return oc;
  }

  fn sampleNormal(uv:vec2<i32>) -> vec4<f32>
  {
      var oc1:vec4<f32> = textureSampleLevel(normalMap, normalMapSampler, vec2<f32>(0.0), 0.0);
      var oc:vec4<f32> = textureLoad(normalMap, uv, 0);
      return oc;
  }

  fn sampleColor(uv:vec2<i32>) -> vec4<f32>
  {
      var oc1:vec4<f32> = textureSampleLevel(colorMap, colorMapSampler, vec2<f32>(0.0), 0.0);
      var oc:vec4<f32> = textureLoad(colorMap, uv, 0);
      return oc;
  }

  fn sampleProbe(fragCoord:vec2<u32>){
    var uv = vec2<i32>(i32(fragCoord.x), i32(fragCoord.y)) ;

    litColor = sampleLitColor(uv);

    var normalMap = sampleNormal(uv);
    wsn = normalMap.xyz * 2.0 - 1.0;

    ulitColor = sampleColor(uv);
  }

  @compute @workgroup_size( 8 , 8 , 1 )
  fn CsMain(@builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
  {
    getIrradianceFieldSurface();
    var fragCoord = vec2<u32>( globalInvocation_id.x, globalInvocation_id.y);
    probeID = globalInvocation_id.z;
    fragCoord = fragCoord + getCoordOffset(probeID);

    sampleProbe(fragCoord);

    let irradiance = getIrradianceColor();
    let result = blendIrradianceColor(irradiance);
    textureStore(outputBuffer, vec2<i32>(fragCoord), result);
  }

  fn blendIrradianceColor(irradiance:vec4<f32>) -> vec4<f32>{
     var bounceColor = irradiance * ulitColor;
     let bounceIntensity = getBounceIntensity(uniformData.bounceIntensity);
     let conservation1 = 1.0 / sqrt((1.0 + bounceIntensity * 0.55));
     let conservation2 = 1.0 / sqrt((1.0 + bounceIntensity));
     var result = litColor * conservation2 + bounceColor * sqrt(bounceIntensity) * conservation1;
     return vec4<f32>(result.xyz, litColor.w);
  }

  fn getBounceIntensity(intensity:f32) -> f32 {
    var value = clamp(intensity, 0.0, 1.0) * 10.0;
    return value;
  }

  fn getCoordOffset(id:u32) -> vec2<u32>{
      var fullCol = u32(uniformData.ProbeSourceTextureSize / uniformData.ProbeSize);
      var offsetSampleUv = vec2<u32>( (id / fullCol) * 6u , id % fullCol) * u32(uniformData.ProbeSize);
      return offsetSampleUv;
  }

  fn getIrradianceColor() -> vec4<f32>{
     var probeIrradiance: vec4<f32> = vec4<f32>(0.0);
     if(length(wsn) > 0.01){
       probeIrradiance = getIrrdiaceIndex(i32(probeID), wsn);
     }
     return probeIrradiance;
  }

  fn getIrrdiaceIndex(index:i32, wsn:vec3<f32>) -> vec4<f32>{
    var wsN = rotateDir(wsn.xyz);
    var texCoord:vec2<f32> = textureCoordFromDirection(wsN,
      index,
      irradianceFieldSurface.irradianceTextureWidth,
      irradianceFieldSurface.irradianceTextureHeight,
      irradianceFieldSurface.irradianceProbeSideLength);

    var probeIrradiance: vec3<f32> = textureSampleLevel(irradianceMap, irradianceMapSampler, texCoord, 0.0).xyz;
    return vec4<f32>(probeIrradiance, 1.0);
  }

  fn textureCoordFromDirection(dir:vec3<f32>, probeIndex:i32, width:f32, height:f32, sideLength:f32) -> vec2<f32>
  {
      var uv = getWriteOctUVByID(dir, u32(probeIndex), sideLength) ;
      uv.x = uv.x / irradianceFieldSurface.irradianceTextureWidth;
      uv.y = uv.y / irradianceFieldSurface.irradianceTextureHeight;
      return uv ;
  }

  fn getWriteOctUVByID(dir:vec3<f32> , probeID:u32, size: f32) -> vec2<f32>
  {
      var blockCount = u32(irradianceFieldSurface.probeCounts.x * irradianceFieldSurface.probeCounts.z) ;
      var offsetX = (probeID % blockCount) % u32(irradianceFieldSurface.probeCounts.x) ;
      var offsetY = u32(irradianceFieldSurface.probeCounts.z - 1.0) - (probeID % blockCount) / u32(irradianceFieldSurface.probeCounts.x) ;
      var offsetZ = probeID / blockCount ;

      var pixelCoord = (( octEncode(dir) + 1.0 ) * 0.5) * vec2<f32>(size,size) ;

      var blockOffset = vec2<f32>(0.0);
      blockOffset.x = f32(offsetX) * size;
      blockOffset.y = f32(offsetY) * size + f32(offsetZ) * f32(irradianceFieldSurface.probeCounts.z) * size;

      let mapHeight = u32(irradianceFieldSurface.irradianceTextureHeight);
      var probeCounts:vec3<f32> = vec3<f32>(irradianceFieldSurface.probeCounts.xyz);

      var gridOffsetFrom = vec2<i32>(blockOffset) + 1;
      var gridOffsetTo = offsetByCol(gridOffsetFrom, size, mapHeight, probeCounts);

      pixelCoord = pixelCoord + vec2<f32>(gridOffsetTo - 1) + vec2<f32>(vec2<i32>(vec2<f32>(gridOffsetTo) / size) * 2);

      return pixelCoord + 1.0 ;
  }

  fn offsetByCol(pixelCoord0:vec2<i32>, octSideSize:f32, mapHeight:u32, counts:vec3<f32>) -> vec2<i32>
  {
    var pixelCoord = pixelCoord0;
    let blockSize:vec2<i32> = vec2<i32>(i32(octSideSize * counts.x),  i32(octSideSize * counts.z));
    let blockSizeYBorder:i32 = i32((octSideSize + 2.0) * counts.z);
    let blockMaxRowBorder:i32 = i32(mapHeight) / blockSizeYBorder;
    let pixelCountYMax:i32 = blockMaxRowBorder * i32(octSideSize * counts.z);
    let col:i32 = pixelCoord.y / pixelCountYMax;

    pixelCoord.x = col * i32(octSideSize * counts.x) + pixelCoord.x;
    pixelCoord.y = pixelCoord.y % pixelCountYMax;

    return pixelCoord;
  }
`;class Hl{constructor(t){s(this,"blendTexture");s(this,"volume");s(this,"computerShader");this.volume=t,this.initPipeline()}initPipeline(){let t=y.setting.gi;this.blendTexture=new We(t.probeSourceTextureSize,t.probeSourceTextureSize,z.rgba16float,!1,GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.STORAGE_BINDING),this.computerShader=new Mt(Vl),this.computerShader.setStorageTexture("outputBuffer",this.blendTexture),this.computerShader.setUniformBuffer("uniformData",this.volume.irradianceVolumeBuffer)}setInputs(t){let e=t[0],r=t[1],i=t[2],a=t[3];this.computerShader.setSamplerTexture("normalMap",e),this.computerShader.setSamplerTexture("colorMap",r),this.computerShader.setSamplerTexture("litMap",i),this.computerShader.setSamplerTexture("irradianceMap",a)}compute(t,e){let r=b.beginCommandEncoder(),i=this.volume.setting,a=i.probeXCount*i.probeYCount*i.probeZCount,o=i.probeSize;this.computerShader.workerSizeX=o*6/8,this.computerShader.workerSizeY=o/8,this.computerShader.workerSizeZ=a,b.computeCommand(r,[this.computerShader])}}let Yl=`
var<private> PI: f32 = 3.14159265359;

#include "GlobalUniform"
#include "MathShader"
#include "FastMathShader"
#include "ColorUtil"

struct ConstUniform{
   screenWidth:f32,
   screenHeight:f32
}

struct LightData {
     index:f32,
     lightType:i32,
     radius:f32,
     linear:f32,
     
     position:vec3<f32>,
     lightMatrixIndex:f32,

     direction:vec3<f32>,
     quadratic:f32,

     lightColor:vec3<f32>,
     intensity:f32,

     innerCutOff :f32,
     outerCutOff:f32,
     range :f32,
     castShadow:i32,

     lightTangent:vec3<f32>,
     ies:f32,
};

struct Uniforms {
     matrix : array<mat4x4<f32>>
 };

const PointLightType = 1;
const DirectLightType = 2;
const SpotLightType = 3;

@group(0) @binding(auto) var outputBuffer : texture_storage_2d<rgba16float, write>;
@group(0) @binding(auto) var prefilterMapSampler: sampler;
@group(0) @binding(auto) var prefilterMap: texture_cube<f32>;

@group(1) @binding(auto) var positionMapSampler : sampler;
@group(1) @binding(auto) var positionMap : texture_2d<f32>;

@group(1) @binding(auto) var normalMapSampler : sampler;
@group(1) @binding(auto) var normalMap : texture_2d<f32>;

@group(1) @binding(auto) var colorMapSampler : sampler;
@group(1) @binding(auto) var colorMap : texture_2d<f32>;

@group(1) @binding(auto) var shadowMapSampler : sampler_comparison;
@group(1) @binding(auto) var shadowMap : texture_depth_2d_array;
@group(1) @binding(auto) var pointShadowMapSampler: sampler;
@group(1) @binding(auto) var pointShadowMap: texture_depth_cube_array ;

@group(2) @binding(0)
var<storage,read> lightBuffer: array<LightData>;

@group(2) @binding(1)
var<storage, read> models : Uniforms;

struct ShadowStruct{
 directShadowVisibility:f32,
 pointShadows:array<f32,8>,
}

var<private> shadowStrut: ShadowStruct ;
var<private> ulitColor:vec3<f32>;
var<private> wPosition:vec3<f32>;
var<private> wNormal:vec3<f32>;

const LUMEN = 10.764;

fn samplePosition(uv:vec2<f32>) -> vec4<f32>
{
   return textureSampleLevel(positionMap, positionMapSampler,uv, 0.0);
}

fn sampleNormal(uv:vec2<f32>) -> vec4<f32>
{
  return textureSampleLevel(normalMap, normalMapSampler, uv, 0.0);
}

fn sampleColor(uv:vec2<f32>) -> vec4<f32>
{
   var oc:vec4<f32> = textureSampleLevel(colorMap, colorMapSampler, uv, 0.0);
   ulitColor = vec3(oc.xyz);
   return oc;
}

const csmCount:i32 = ${Rt.Cascades} ;
fn directShadowMaping(P:vec3<f32>, N:vec3<f32>, shadowBias: f32)  {
  let enableCSM:bool = globalUniform.enableCSM > 0.5;
  var light = lightBuffer[0];
  var visibility = 1.0;
    var shadowIndex = i32(light.castShadow);
    if (shadowIndex >= 0 ) {
      var shadowMatrix:mat4x4<f32>;
      if(enableCSM && csmCount > 1){
        for(var csm:i32 = 0; csm < csmCount; csm ++){
          var csmShadowBias = globalUniform.csmShadowBias[csm];
          shadowMatrix = globalUniform.csmMatrix[csm];
          let csmShadowResult = directShadowMapingIndex(light, shadowMatrix, P, N, csm, csmShadowBias);
          if(csmShadowResult.y < 0.5){
            visibility = csmShadowResult.x;
            break;
          }
        }
      }else{
        shadowMatrix = globalUniform.shadowMatrix[shadowIndex];
        visibility = directShadowMapingIndex(light, shadowMatrix, P, N, shadowIndex, shadowBias).x;
      }
    }
  shadowStrut.directShadowVisibility = visibility;
}

fn directShadowMapingIndex(light:LightData, matrix:mat4x4<f32>, P:vec3<f32>, N:vec3<f32>, depthTexIndex:i32, shadowBias:f32) -> vec2<f32>
{
  var visibility = 1.0;
  var isOutSideArea:f32 = 1.0;
  var shadowPosTmp = matrix * vec4<f32>(P.xyz, 1.0);
  var shadowPos = shadowPosTmp.xyz / shadowPosTmp.w;
  var varying_shadowUV = shadowPos.xy * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5, 0.5);
  if (varying_shadowUV.x <= 1.0
    && varying_shadowUV.x >= 0.0
    && varying_shadowUV.y <= 1.0
    && varying_shadowUV.y >= 0.0
    && shadowPosTmp.z <= 1.0
    && shadowPosTmp.z >= 0.0)
  {
    isOutSideArea = 0.0;
    var uvOnePixel = 1.0 / vec2<f32>(globalUniform.shadowMapSize);
    var NoL = abs(dot(N, normalize(light.direction)));
    var bias = shadowBias / max(NoL, 0.000001);
    visibility = textureSampleCompareLevel(shadowMap, shadowMapSampler, varying_shadowUV, depthTexIndex, shadowPos.z - bias);
    visibility += 0.001;
  }
  return vec2<f32>(visibility, isOutSideArea);
}

fn pointShadowMapCompare(shadowBias:f32){
   for(var i:i32 = i32(0) ; i < i32(8); i = i + 1 )
   { 
       var v = 1.0 ;
       let light = lightBuffer[i] ;
       if(light.castShadow < 0 ){
         shadowStrut.pointShadows[i] = v ;
         continue ;
       }

       let frgToLight = wPosition - light.position.xyz;
       var dir:vec3<f32> = normalize(frgToLight)  ;

       var len = length(frgToLight) ;
       var depth = textureSampleLevel(pointShadowMap,pointShadowMapSampler,dir.xyz,i,0); 
       depth *= globalUniform.far ;
       if((len - shadowBias) > depth){
          v = 0.0 ; 
       }
       shadowStrut.pointShadows[i] = v ;
   }
} 

fn directLighting( albedo:vec3<f32> , WP :vec3<f32>, N:vec3<f32> , V:vec3<f32> , light:LightData , shadowBias:f32  ) -> vec3<f32> {
 var L = -normalize(light.direction.xyz) ;
 var NoL = max(dot(N,L),0.0);
 let lightCC = pow( light.lightColor.rgb,vec3<f32>(2.2));
 var lightColor = getHDRColor( lightCC , light.linear ) ;
 var att = light.intensity / LUMEN ;
 if(light.castShadow>=0){
     lightColor *= shadowStrut.directShadowVisibility ;
 }
 let finalLight = (albedo / PI) * lightColor * NoL * att * 2.0 ;
 return finalLight ;
}

fn pointLighting( albedo:vec3<f32>,WP:vec3<f32>, N:vec3<f32>, V:vec3<f32>, light:LightData ) -> vec3<f32> {
 let lightPos = models.matrix[u32(light.lightMatrixIndex)][3].xyz;
 var dir = lightPos.xyz - WP ;
 let dist = length(dir);
 var color = vec3<f32>(0.0) ;

 if(dist != 0.0){
   dir *= 1.0 / dist ;
 }

 if( abs(dist) < light.range ){
     var L = dir ;
     var atten = 1.0 ;
     atten = 1.0 - smoothstep(0.0,light.range,dist) ;
     atten *= 1.0 / max(light.radius,0.0001) ;

     var lightColor = light.lightColor.rgb  ;
     lightColor = getHDRColor(lightColor , light.linear ) * light.intensity / LUMEN * 2.0;
     color = (albedo / PI) * lightColor.rgb * atten ;
 }

 return  color *0.0;
}

fn spotLight( albedo:vec3<f32>,WP:vec3<f32>, N:vec3<f32>, V:vec3<f32>, light:LightData ) -> vec3<f32> {
 let lightPos = models.matrix[u32(light.lightMatrixIndex)][3].xyz;
 var dir = lightPos.xyz - WP ;
 let dist = length(dir) ;

 if(dist != 0.0){
   dir *= 1.0 / dist ;
 }

 var color = vec3<f32>(0.0) ;
 if( abs(dist) < light.range * 2.0 ){
     var L = dir ;
     let theta = dot(-L, normalize(light.direction));
     let angle = acos(theta) ;
     var atten = 1.0 ;
     atten = 1.0 - smoothstep(0.0,light.range,dist) ;
     atten *= 1.0 / max(light.radius,0.1) ;
     if(angle < light.outerCutOff){
       if(angle > light.innerCutOff){
         atten *= 1.0 - smoothstep(light.innerCutOff, light.outerCutOff, angle) ;
       }
     }else{
       atten = 0.0 ;
     }
     var lightColor = light.lightColor.rgb  ;
     lightColor = getHDRColor(lightColor , light.linear ) * light.intensity / LUMEN * 2.0;
     color = (albedo / PI) * lightColor.rgb * atten ;
   }
 return  color ;
}

fn CalcUV_01(coord:vec2<i32>, texSize:vec2<u32>) -> vec2<f32>
{
  let u = (f32(coord.x) + 0.5) / f32(texSize.x);
  let v = (f32(coord.y) + 0.5) / f32(texSize.y);
  return vec2<f32>(u, v);
}

fn coordFun(fragCoord:vec2<i32>)-> vec4<f32>{
 let uv_01 = CalcUV_01(fragCoord, texSize);
 var pos = samplePosition(uv_01);

 var normalMap = sampleNormal(uv_01);
 var normal = normalize( normalMap.xyz * 2.0 - 1.0 );

 var color = sampleColor(uv_01);
 var emissive = vec4<f32>(pos.a,normalMap.a,color.a,0.0) * 1.0 ;
 if(pos.w + 1.0 > 10000.0){
   return vec4<f32>(color);
 }
 var V = normalize(pos.xyz - globalUniform.cameraWorldMatrix[3].xyz);
 var N = normal.xyz ;

 wPosition = pos.xyz;
 wNormal = N;

 directShadowMaping(wPosition, wNormal, globalUniform.shadowBias);
 pointShadowMapCompare(globalUniform.shadowBias);

 var lighting = vec3<f32>(0.0);
 let lightCount = 32 ;
 for(var i:i32 = 0 ; i < lightCount ; i = i + 1 )
 {
     let light = lightBuffer[i];
     switch (light.lightType) {
         case PointLightType: {
             lighting += pointLighting(color.rgb,pos.xyz,N,V,light);
         }
         case DirectLightType: {
             lighting += directLighting(color.rgb,pos.xyz,N,V,light,globalUniform.shadowBias);
         }
         case SpotLightType: {
             lighting += spotLight(color.rgb,pos.xyz,N,V,light);
         }
         default: {
         }
     }
 }

 // lighting = vec3<f32>(1.0) / (vec3<f32>(1.0) + lighting.rgb) * lighting.rgb;

 var skyLight: vec3<f32> = globalUniform.skyExposure * (textureSampleLevel(prefilterMap, prefilterMapSampler, N.xyz, 8.0 ).rgb);
 // skyLight = LinearToGammaSpace(skyLight);
 // skyLight = (color.rgb / 3.1415926 ) * skyLight;
 // skyLight = vec3<f32>(1.0) / (vec3<f32>(1.0) + skyLight.rgb) * skyLight.rgb;

 lighting = lighting.rgb ;//+ skyLight.rgb ;

 return vec4<f32>(lighting.rgb,color.w)+emissive;
}

// fn vertexToCoord(vertexPosition:vec3<f32>) -> vec4<f32>{
//   var worldPos = vec4<f32>(vertexPosition.xyz, 1.0);
//   var fragPosition = globalUniform.viewMat * worldPos ;
//   // var position = globalUniform.projMat * fragPosition ;
//   return fragPosition;
// }

var<private> texSize: vec2<u32>;

@compute @workgroup_size( 8 , 8 , 1 )
fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
{
   var fragCoord = vec2<i32>(globalInvocation_id.xy);
   texSize = textureDimensions(colorMap).xy;
   var color = coordFun(fragCoord);
   // color = vec4(pow(color.rgb,vec3<f32>(1.0/2.4)),1.0);
   textureStore(outputBuffer, fragCoord, color);
}

`;class Wl{constructor(){s(this,"computeShader");s(this,"worldPosMap");s(this,"worldNormalMap");s(this,"colorMap");s(this,"shadowMap");s(this,"pointShadowMap");s(this,"lightingTexture");let t=y.setting.gi;this.lightingTexture=new We(t.probeSourceTextureSize,t.probeSourceTextureSize,z.rgba16float,!1,GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.STORAGE_BINDING)}create(t){let e=ge.getLightEntries(t.scene);this.computeShader=new Mt(Yl);let r=ge.getCameraGroup(t.camera);this.computeShader.setUniformBuffer("globalUniform",r.uniformGPUBuffer),this.computeShader.setStorageTexture("outputBuffer",this.lightingTexture),this.computeShader.setStorageBuffer("lightBuffer",e.storageGPUBuffer),this.computeShader.setStorageBuffer("models",ge.modelMatrixBindGroup.matrixBufferDst),this.computeShader.setSamplerTexture("positionMap",this.worldPosMap),this.computeShader.setSamplerTexture("normalMap",this.worldNormalMap),this.computeShader.setSamplerTexture("colorMap",this.colorMap),this.computeShader.setSamplerTexture("shadowMap",this.shadowMap),this.computeShader.setSamplerTexture("pointShadowMap",this.pointShadowMap),this.computeShader.setSamplerTexture("prefilterMap",y.res.defaultSky)}setInputs(t){this.worldPosMap=t[0],this.worldNormalMap=t[1],this.colorMap=t[2],this.shadowMap=t[3],this.pointShadowMap=t[4]}compute(t,e){this.computeShader||this.create(t);let r=b.beginCommandEncoder(),i=y.setting.gi;this.computeShader.workerSizeX=i.probeSourceTextureSize/8,this.computeShader.workerSizeY=i.probeSourceTextureSize/8,this.computeShader.workerSizeZ=1,b.computeCommand(r,[this.computeShader])}}let hs=new mt("GIRenderStartEvent"),Kl=new mt("GIRenderCompleteEvent");class Xl{constructor(){s(this,"count");s(this,"complete")}}class jl extends yr{constructor(e){super();s(this,"cubeCamera");s(this,"volume");s(this,"probeCountPerFrame",1);s(this,"nextProbeIndex",-1);s(this,"tempProbeList",[]);s(this,"isRenderCloudGI");s(this,"probeRenderResult");s(this,"renderStatus","none");s(this,"positionMap");s(this,"normalMap");s(this,"colorMap");s(this,"probeNext",128);s(this,"sizeW");s(this,"sizeH");s(this,"lightingPass");s(this,"bouncePass");s(this,"irradianceComputePass");s(this,"irradianceDepthMap");s(this,"irradianceColorMap");this.passType=Y.GI,this.volume=e;let r=e.setting;this.cubeCamera=new kl(.01,5e3),this.sizeW=r.probeSourceTextureSize,this.sizeH=r.probeSourceTextureSize,this.probeNext=r.probeSourceTextureSize/r.probeSize,this.initIrradianceMap(e),this.probeRenderResult=new Xl;let i=new Ql(this.sizeW,this.sizeH,!1);this.positionMap=i.renderTargets[0],this.normalMap=i.renderTargets[1],this.colorMap=i.renderTargets[2],this.setRenderStates(i)}setInputTexture(e){this.lightingPass=new Wl,this.bouncePass=new Hl(this.volume),this.irradianceComputePass=new zl(this.volume),this.lightingPass.setInputs([this.positionMap,this.normalMap,this.colorMap,e[0],e[1]]),this.bouncePass.setInputs([this.normalMap,this.colorMap,this.lightingPass.lightingTexture,this.irradianceColorMap]),this.irradianceComputePass.setTextures([this.positionMap,this.normalMap,this.bouncePass.blendTexture],this.irradianceColorMap,this.irradianceDepthMap)}setIrradianceData(e,r,i,a){if(i!=this.irradianceColorMap.width||a!=this.irradianceColorMap.height){console.error("irradiance image size not match !");return}this.writeToTexture(this.irradianceColorMap,e,i,a),this.writeToTexture(this.irradianceDepthMap,r,i,a)}updateProbe(e,r,i){let a=k.instance.getLights(e.scene),o=this.volume.setting.probeSize;r.drawCallFrame+=1,this.cubeCamera.x=r.x,this.cubeCamera.y=r.y,this.cubeCamera.z=r.z,this.volume.setting.debugCamera?(this.cubeCamera.x=e.camera.transform.x,this.cubeCamera.y=e.camera.transform.y,this.cubeCamera.z=e.camera.transform.z,this.cubeCamera.rotationX=e.camera.transform.rotationX,this.cubeCamera.rotationY=e.camera.transform.rotationY,this.cubeCamera.rotationZ=e.camera.transform.rotationZ):(this.cubeCamera.rotationX=r.rotationX,this.cubeCamera.rotationY=r.rotationY,this.cubeCamera.rotationZ=r.rotationZ);let l=this.cubeCamera,h=Math.floor(r.index/this.probeNext)*(o*6),u=Math.floor(r.index%this.probeNext)*o;i.setViewport(0+h,u,o,o,0,1),this.renderSceneOnce(e,l.right_camera,i,a),i.setViewport(o+h,u,o,o,0,1),this.renderSceneOnce(e,l.left_camera,i,a),i.setViewport(o*2+h,u,o,o,0,1),this.renderSceneOnce(e,l.up_camera,i,a),i.setViewport(o*3+h,u,o,o,0,1),this.renderSceneOnce(e,l.down_camera,i,a),i.setViewport(o*4+h,u,o,o,0,1),this.renderSceneOnce(e,l.front_camera,i,a),i.setViewport(o*5+h,u,o,o,0,1),this.renderSceneOnce(e,l.back_camera,i,a)}renderSceneOnce(e,r,i,a){this.volume.uploadBuffer();let o=k.instance.getRenderNodes(e.scene,r);b.bindCamera(i,r);let l=Math.max(0,y.setting.render.drawOpMin),h=Math.min(y.setting.render.drawOpMax,o.opaqueList.length),u=k.instance.getRenderShaderCollect(e);for(const c of u){let d=c[1];for(const f of d){let p=f[1];if(p.preInit){p.nodeUpdate(e,this.passType,this.rendererPassState,null);break}}}for(let c=l;c<h;++c){let d=o.opaqueList[c];d.enable&&d.transform.enable&&(d.preInit||d.nodeUpdate(e,this.passType,this.rendererPassState,null),d.renderPass2(e,this.passType,this.rendererPassState,null,i))}k.instance.sky&&(k.instance.sky.preInit||k.instance.sky.nodeUpdate(e,this.passType,this.rendererPassState,null),k.instance.sky.renderPass2(e,this.passType,this.rendererPassState,null,i)),l=Math.max(0,y.setting.render.drawTrMin),h=Math.min(y.setting.render.drawTrMax,o.transparentList.length);for(let c=l;c<h;++c){let d=o.transparentList[c];d.enable&&d.transform.enable&&(d.preInit||d.nodeUpdate(e,this.passType,this.rendererPassState,null),d.renderPass2(e,this.passType,this.rendererPassState,null,i))}}render(e,r){if(!y.setting.gi.enable)return;this.volume.updateOrientation(),this.volume.isVolumeFrameChange=!1,this.volume.uploadBuffer(),this.rendProbe(e);let i=this.probeRenderResult.count>0;(k.instance.state.giLightingChange||i||y.setting.gi.realTimeGI)&&(k.instance.state.giLightingChange=!1,this.lightingPass.compute(e,this.rendererPassState),this.bouncePass.compute(e,this.rendererPassState),this.irradianceComputePass.compute(e,this.rendererPassState)),this.probeRenderResult.complete&&this.dispatchEvent(Kl)}startRenderGI(e=0){this.nextProbeIndex==-1&&e==0&&this.dispatchEvent(hs),this.nextProbeIndex=e,this.renderStatus="rendering"}startRenderCloudGI(){this.dispatchEvent(hs),this.nextProbeIndex=0,this.renderStatus="rendering",this.isRenderCloudGI=!0}rendProbe(e){let r=y.setting.gi.autoRenderProbe,i=!1;if(r?(this.nextProbeIndex==-1&&this.startRenderGI(),i=!0):i=this.renderStatus=="rendering",this.probeRenderResult.count=0,this.probeRenderResult.complete=!1,i){let a=k.instance.getProbes(e.scene);this.renderContext.clean(),this.renderContext.beginOpaqueRenderPass(),this.tempProbeList.length=0;let o=Math.min(this.probeCountPerFrame,a.length);for(this.probeRenderResult.count=o;o>0;){const h=a[this.nextProbeIndex];this.updateProbe(e,h,this.renderContext.encoder),o--,this.nextProbeIndex++,h.drawCallFrame<3&&this.tempProbeList.push(h)}this.tempProbeList.length>0&&this.volume.updateProbes(this.tempProbeList);let l=this.nextProbeIndex>=a.length;this.nextProbeIndex>=a.length&&this.isRenderCloudGI&&this.updateProbe(e,a[0],this.renderContext.encoder),this.renderContext.endRenderPass(),l&&(this.nextProbeIndex=-1,this.renderStatus="complete",this.probeRenderResult.complete=!0)}}initIrradianceMap(e){let r=e.setting,i=GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.COPY_DST;this.irradianceDepthMap=new We(r.octRTMaxSize,r.octRTMaxSize,z.rgba16float,!1,i),this.irradianceDepthMap.name="irradianceDepthMap",this.irradianceColorMap=new We(r.octRTMaxSize,r.octRTMaxSize,z.rgba16float,!1,i),this.irradianceColorMap.name="irradianceColorMap"}writeToTexture(e,r,i,a){console.log(e.name);const o=w.device.createBuffer({size:r.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});w.device.queue.writeBuffer(o,0,r);const l=b.beginCommandEncoder();l.copyBufferToTexture({buffer:o,bytesPerRow:i*16},{texture:e.getGPUTexture()},{width:i,height:a,depthOrArrayLayers:1}),b.endCommandEncoder(l)}}class us extends Fl{constructor(t){super(t)}start(){super.start();let t=Nr.getGBufferFrame("ColorPassGBuffer");{let e=[],r=new wl;y.setting.render.zPrePass&&(t.zPreTexture=this.depthPassRenderer.rendererPassState.depthTexture),r.setRenderStates(t);for(let i=0;i<t.renderTargets.length;i++){const a=t.renderTargets[i];e.push(a)}if(y.setting.gi.enable){let i=ge.getLightEntries(this.view.scene);this.ddgiProbeRenderer=new jl(i.irradianceVolume),this.ddgiProbeRenderer.setInputTexture([this.shadowMapPassRenderer.depth2DArrayTexture,this.pointLightShadowRenderer.cubeArrayTexture]),r.setIrradiance(this.ddgiProbeRenderer.irradianceColorMap,this.ddgiProbeRenderer.irradianceDepthMap),this.rendererMap.addRenderer(this.ddgiProbeRenderer),e.push(this.ddgiProbeRenderer.positionMap,this.ddgiProbeRenderer.normalMap,this.ddgiProbeRenderer.colorMap,this.ddgiProbeRenderer.lightingPass.lightingTexture,this.ddgiProbeRenderer.irradianceColorMap,this.ddgiProbeRenderer.irradianceDepthMap)}this.postRenderer&&this.postRenderer.setDebugTexture(e),this.rendererMap.addRenderer(r)}y.setting.render.debug&&this.debug()}debug(){}}class ql{constructor(){s(this,"_factor");s(this,"_doubleFactor");this._factor=1,this._doubleFactor=2}get accelerateInterpolator(){return this._factor}set accelerateInterpolator(t){this._factor=t,this._doubleFactor=2*this._factor}getInterpolation(t){return this._factor==1?t*t:Math.pow(t,this._doubleFactor)}}class Jl{constructor(){s(this,"_factor",1)}get decelerateInterpolator(){return this._factor}set decelerateInterpolator(t){this._factor=t}getInterpolation(t){let e;return this._factor==1?e=1-(1-t)*(1-t):e=1-Math.pow(1-t,2*this._factor),e}}class Zl{constructor(){s(this,"_factor",1)}getInterpolation(t){return Math.cos((t+1)*Math.PI)/2+.5}}class $l{getInterpolation(t){return t}}class eh{getInterpolation(t){return 4.9*t+4.9*t}}class et{constructor(){}static bounce(t){return t*t*9.8}getInterpolation(t){return t*=1.1226,t<.3535?et.bounce(t):t<.7408?et.bounce(t-.54719)+.7:t<.9644?et.bounce(t-.8526)+.9:et.bounce(t-1.0435)+.95}getBounceInterpolation(t){return t<.5?et.bounce(t):et.bounce(t-1)}geJumpUp(t,e){return e<.5?(e=e/.5,t*e-et.bounce(e)):e<.8?(e=(e-.5)/(.8-.5),(t*e-et.bounce(e))*.3):e<1?(e=(e-.8)/(1-.8),(t*e-et.bounce(e))*.15):t*e-et.bounce(e)}}class th{constructor(){s(this,"_tension");this._tension=2}get anticipateInterpolator(){return this._tension}set anticipateInterpolator(t){this._tension=t}getInterpolation(t){return t*t*((this._tension+1)*t-this._tension)}}class Ri{constructor(){s(this,"_tension");this._tension=1*1.5}anticipateOvershootInterpolator(t){this._tension=t*1.5}anticipateOvershootInterpolator2(t,e){this._tension=t*e}getInterpolation(t){return t<.5?.5*Ri.a(t*2,this._tension):.5*(Ri.o(t*2-2,this._tension)+2)}static a(t,e){return t*t*((e+1)*t-e)}static o(t,e){return t*t*((e+1)*t+e)}}class rh{constructor(t){s(this,"_cycles");this._cycles=t}getInterpolation(t){return Math.sin(2*this._cycles*Math.PI*t)}}class ih{constructor(){s(this,"_tension");this._tension=2}getInterpolation(t){return t-=1,t*t*((this._tension+1)*t+this._tension)+1}}var Gs=(n=>(n[n.AccelerateInterpolator=0]="AccelerateInterpolator",n[n.DecelerateInterpolator=1]="DecelerateInterpolator",n[n.AccelerateDecelerateInterpolator=2]="AccelerateDecelerateInterpolator",n[n.LinearInterpolator=3]="LinearInterpolator",n[n.BounceInterpolator=4]="BounceInterpolator",n[n.AnticipateInterpolator=5]="AnticipateInterpolator",n[n.AnticipateOvershootInterpolator=6]="AnticipateOvershootInterpolator",n[n.CycleInterpolator=7]="CycleInterpolator",n[n.OvershootInterpolator=8]="OvershootInterpolator",n[n.JumperInterpolator=9]="JumperInterpolator",n))(Gs||{});const $t=class $t{constructor(){s(this,"complete",!1);s(this,"onComplete");s(this,"onProgress");s(this,"target");s(this,"property");s(this,"targetProperty");s(this,"durtion");s(this,"interpolatorEnum");s(this,"delayTime",0);s(this,"_interpolator");s(this,"_ct",0);s(this,"_p",0)}static to(t,e,r,i=0){var a=new $t;return a.target=t,a.property=e,a.durtion=r,a.interpolatorEnum=i,a.start(),a.delayTime=e.delayTime?e.delayTime:0,e.onComplete&&(a.onComplete=e.onComplete),e.onProgress&&(a.onProgress=e.onProgress),this.interpolators.push(a),a}static tick(t){let e=$t.interpolators;for(let r of e)r.complete?$t.remove(r,!0):r.tick(t)}static remove(t,e){let r=$t.interpolators,i=r.indexOf(t);i!=-1&&r.splice(i,1),e&&t.dispose()}static removeList(t,e){t.forEach(r=>{this.remove(r,e)})}start(){window.AccelerateInterpolator=ql,window.DecelerateInterpolator=Jl,window.AccelerateDecelerateInterpolator=Zl,window.LinearInterpolator=$l,window.BounceInterpolator=et,window.AnticipateInterpolator=th,window.AnticipateOvershootInterpolator=Ri,window.CycleInterpolator=rh,window.OvershootInterpolator=ih,window.JumperInterpolator=eh,this._interpolator=new window[Gs[this.interpolatorEnum]],this.targetProperty={};for(let t in this.property)this.targetProperty[t]=this.target[t]}tick(t){if(this.delayTime<=0){this._p=Math.min(this._ct/this.durtion,1);let e=this._interpolator.getInterpolation(this._p),r=this.property,i=this.target,a=this.targetProperty,o,l;for(let h in r)l=r[h],o=a[h],i[h]=o+(l-o)*e;this.onProgress!=null&&this.onProgress(this._p),this._ct>=this.durtion&&(this.complete=!0,this.onComplete!=null&&this.onComplete(this.target)),this._ct+=t}else this.delayTime-=t}dispose(){this.onComplete=null,this.onProgress=null,this.target=null,this.property=null,this.targetProperty=null,this.interpolatorEnum=null,this._interpolator=null,$t.remove(this)}};s($t,"interpolators",[]);let da=$t;class Ne{static hasString(t,e){for(var r=0;r<t.length;++r)if(t[r]==e)return r;return-1}static getEllipsis(t,e=4){let r=t;return r.length>e&&(r=r.slice(0,e)+"..."),r}static getURLName(t){var e;e=t.split("/");let r=e[e.length-1];return r=r.split(".")[0],r}static getFileFormat(t){var e=t.lastIndexOf(".");e++;var r=t.length;t.indexOf("?",e)!==-1&&(r=t.indexOf("?",e));var i=t.substr(e,r-e);return i=i.toLowerCase(),i}static readLineProperty(t,e){t.trim().split(" ").forEach((r,i)=>{let a=r.split("=");if(a.length>1){let o=a[0],l=a[1];Object.prototype.hasOwnProperty.call(e,o)&&(l.indexOf('"')==-1?e[o]=parseFloat(a[1]):e[o]=l.replace('"',"").replace('"',""))}})}static getPath(t){var e=t.lastIndexOf("/");return e++,t.substring(0,e)}static normalizePath(t){var e=t.replaceAll("//","/");return e=e.replaceAll("\\","/"),e}static getStringList(t,e=";"){return t.split(e)}static formatTime(t){let e=t/1e3/60,r=Math.floor(e),i=Math.floor(e-r);return[r.toString(),i.toString()]}static trim(t){return t.replace(/^\s+/g,"").replace(/\s+$/g,"")}static isEmpty(t){return!t||typeof t>"u"||t==null||typeof t=="string"&&this.trim(t)===""||t==="null"}static strCut(t,e){if(t.length*2<=e)return t;for(var r=0,i="",a=0;a<t.length;a++)if(i=i+t.charAt(a),t.charCodeAt(a)>128){if(r=r+2,r>=e)return i.substring(0,i.length-1)+"..."}else if(r=r+1,r>=e)return i.substring(0,i.length-2)+"...";return i}static toQueryPair(t,e,r=!1){return t+"="+(r?encodeURIComponent(e):e)}static stringFormat(t,...e){if(arguments.length===0)throw new Error("please give arg at least one !");if(arguments.length===2&&typeof arguments[1]=="object")for(let r in arguments[1]){let i=new RegExp("({"+r+"})","g");t=t.replace(i,arguments[1][r])}else for(let r=0;r<e.length;r++){if(e[r]==null)return t;{let i=new RegExp("({["+r+"]})","g");t=t.replace(i,e[r])}}return t}static parseJson2String(t,e){let r=null,i="",a=0,o="    ";return e=e||{},e.newlineAfterColonIfBeforeBraceOrBracket=e.newlineAfterColonIfBeforeBraceOrBracket===!0,e.spaceAfterColon=e.spaceAfterColon!==!1,typeof t!="string"||(t=JSON.parse(t)),t=JSON.stringify(t),r=/([\{\}])/g,t=t.replace(r,`\r
$1\r
`),r=/([\[\]])/g,t=t.replace(r,`\r
$1\r
`),r=/(\,)/g,t=t.replace(r,`$1\r
`),r=/(\r\n\r\n)/g,t=t.replace(r,`\r
`),r=/\r\n\,/g,t=t.replace(r,","),e.newlineAfterColonIfBeforeBraceOrBracket||(r=/\:\r\n\{/g,t=t.replace(r,":{"),r=/\:\r\n\[/g,t=t.replace(r,":[")),e.spaceAfterColon&&(r=/\:/g,t=t.replace(r,":")),t.split(`\r
`).forEach(function(l,h){let u=0,c=0,d="";for(l.match(/\{$/)||l.match(/\[$/)?c=1:l.match(/\}/)||l.match(/\]/)?a!==0&&(a-=1):c=0,u=0;u<a;u++)d+=o;i+=d+l+`\r
`,a+=c}),i}static compareVersion(t,e){t=t.split("."),e=e.split(".");let r=Math.max(t.length,e.length);for(;t.length<r;)t.push("0");for(;e.length<r;)e.push("0");for(let i=0;i<r;i++){let a=parseInt(t[i]),o=parseInt(e[i]);if(a>o)return 1;if(a<o)return-1}return 0}static buildRandomCode(){let t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",e=t.length,r="";for(let i=0;i<26;i++){let a=Math.floor(Math.random()*e);r+=t.charAt(a)}return`${new Date().getTime()}-${r}`}static UUID(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=Math.random()*16|0,r=t=="x"?e:e&3|8;return r.toString(16)})}static stringToHash(t){let e=0;if(t.length==0)return e;for(let r=0;r<t.length;r++){const i=t.charCodeAt(r);e=(e<<5)-e+i,e=e&e}return e}static parseUrl(t,e){return e.match(/^(blob|http|https):/)?e:t+e}}s(Ne,"_filterChar",[" ","  ",";",`
`,"\r","	",`
`,"\r","	"]);class sr extends Ge{constructor(e=!0){super();s(this,"_source");s(this,"premultiplyAlpha","none");s(this,"imageData");this.useMipmap=e,this.lodMinClamp=0,this.lodMaxClamp=4}get source(){return this._source}set source(e){this._source=e,this._source instanceof HTMLImageElement?this._source.decode().then(async()=>{if(this._source instanceof HTMLImageElement){const r=await createImageBitmap(this._source,{imageOrientation:this.flipY?"flipY":"from-image",premultiplyAlpha:"none"});this.generate(r)}}):(this._source instanceof HTMLCanvasElement||this._source instanceof ImageBitmap)&&this.generate(this._source)}async load(e,r){if(this.name=Ne.getURLName(e),e.indexOf(";base64")!=-1){const i=document.createElement("img");let a=e.indexOf("data:image"),o=e.substring(a,e.length);i.src=o,await i.decode(),i.width=Math.max(i.width,32),i.height=Math.max(i.height,32);const l=await createImageBitmap(i,{resizeWidth:i.width,resizeHeight:i.height,imageOrientation:this.flipY?"flipY":"from-image",premultiplyAlpha:"none"});this.format=z.rgba8unorm,this.generate(l)}else return new Promise((i,a)=>{fetch(e,{headers:Object.assign({Accept:"image/avif,image/webp,*/*"},r==null?void 0:r.headers)}).then(o=>{Br.read(e,o,r).then(l=>{let h=new Blob([l],{type:"image/jpeg"});l=null,this.loadFromBlob(h).then(()=>{i(!0)})})})});return!0}async loadFromBlob(e){this.imageData=e;let r=await createImageBitmap(e,{imageOrientation:this.flipY?"flipY":"from-image",premultiplyAlpha:"none"});if(r.width<32||r.height<32){let i=Math.max(r.width,32),a=Math.max(r.height,32);r=await createImageBitmap(r,{resizeWidth:i,resizeHeight:a,imageOrientation:this.flipY?"flipY":"from-image",premultiplyAlpha:"none"})}return this.format=z.rgba8unorm,this.generate(r),!0}}class Br{constructor(){s(this,"baseUrl","");s(this,"initUrl");s(this,"_progress",0)}async loadBinData(t,e){return this.baseUrl=Ne.getPath(t),this.initUrl=t,new Promise(async(r,i)=>{fetch(t,{headers:e==null?void 0:e.headers}).then(async a=>{if(a.ok){let o=await Br.read(t,a,e),l=o.buffer;o=null,r(l)}else throw Error("request rejected with status "+a.status)}).catch(a=>{e.onError&&e.onError(a),i(a)})})}async loadAsyncBitmapTexture(t,e){this.baseUrl=Ne.getPath(t),this.initUrl=t;let r=new sr;return r.url=t,r.name=Ne.getURLName(t),await r.load(t,e),y.res.addTexture(t,r),r}async loadJson(t,e){return this.baseUrl=Ne.getPath(t),this.initUrl=t,new Promise(async(r,i)=>{fetch(t,{headers:e==null?void 0:e.headers}).then(async a=>{if(a.ok){let o=await Br.read(t,a,e);const l=new TextDecoder("utf-8").decode(o);o=null,r(JSON.parse(l))}else throw Error("request rejected with status"+a.status)}).catch(a=>{e.onError&&e.onError(a),i(a)})})}async loadTxt(t,e){return this.baseUrl=Ne.getPath(t),new Promise(async(r,i)=>{fetch(t).then(async a=>{if(a.ok){let o=await Br.read(t,a,e);const l=new TextDecoder("utf-8").decode(o);o=null,r({data:l})}else throw Error("request rejected with status"+a.status)}).catch(a=>{e.onError&&e.onError(a),i(a)})})}static async read(t,e,r){const i=e.body.getReader(),a=+e.headers.get("Content-Length");let o=0,l=[],h=[];for(;;){const{done:d,value:f}=await i.read();if(d){a>0&&r&&r.onComplete&&r.onComplete.call(this,t);break}l.push(f),o+=f.length,a>0?r&&r.onProgress&&r.onProgress.call(this,o,a,t):h.push(f.length)}if(h.length>0)for(let d=0;d<l.length;d++)console.log(h[d]),r&&r.onProgress&&r.onProgress.call(this,h[d],o,t),h[d]==o&&r&&r.onComplete&&r.onComplete.call(this,t);let u=new Uint8Array(o),c=0;for(let d of l)u.set(d,c),c+=d.length;return u}}var Te=(n=>(n[n.TEXT=0]="TEXT",n[n.BIN=1]="BIN",n[n.JSON=2]="JSON",n))(Te||{});class Ye extends Br{async load(t,e,r,i){switch(e.format){case Te.BIN:return new Promise(async(a,o)=>{this.loadBinData(t,r).then(async l=>{let h=new e;if(h.userData=i,h.baseUrl=this.baseUrl,h.initUrl=t,await h.parseBuffer(l),h.verification())a(h);else throw new Error("parser error")}).catch(l=>{o(l)})});case Te.JSON:return new Promise((a,o)=>{this.loadJson(t,r).then(async l=>{let h=new e;h.userData=i,h.baseUrl=this.baseUrl,h.initUrl=t,h.loaderFunctions=r,await h.parseJson(l),a(h)}).catch(l=>{o(l)})});case Te.TEXT:return new Promise((a,o)=>{this.loadTxt(t,r).then(async l=>{let h=new e;h.userData=i,h.baseUrl=this.baseUrl,h.initUrl=t,h.loaderFunctions=r,l.data?(await h.parseString(l.data),a(h)):o("text load is empty!")}).catch(l=>{o(l)})})}}}class ze{constructor(){s(this,"baseUrl");s(this,"initUrl");s(this,"loaderFunctions");s(this,"userData");s(this,"data")}parseString(t){}parseJson(t){}parseBuffer(t){}parseTexture(t){throw this.parserError("Method not implemented.",-1)}parse(t){}verification(t){throw this.parserError("Method not implemented.",-1)}parserError(t,e){console.error(`error id:${e} ${t}`)}}s(ze,"format",Te.BIN);class fa{constructor(){s(this,"asset");s(this,"accessors");s(this,"buffers");s(this,"bufferViews");s(this,"materials");s(this,"meshes");s(this,"nodes");s(this,"scene",0);s(this,"scenes");s(this,"textures");s(this,"cameras");s(this,"skins");s(this,"resources");s(this,"images");s(this,"samplers");s(this,"animations");s(this,"extensions")}}const ah=5120,sh=5121,oh=5122,nh=5123,lh=5124,hh=5125,uh=5126,ch=32819,dh=32820,fh=33635,gh=5131,ph=33640,Ah=35899,mh=35902,vh=36269,xh=34042,zs={};{const n=zs;n[ah]=Int8Array,n[sh]=Uint8Array,n[oh]=Int16Array,n[nh]=Uint16Array,n[lh]=Int32Array,n[hh]=Uint32Array,n[uh]=Float32Array,n[ch]=Uint16Array,n[dh]=Uint16Array,n[fh]=Uint16Array,n[gh]=Uint16Array,n[ph]=Uint32Array,n[Ah]=Uint32Array,n[mh]=Uint32Array,n[vh]=Uint32Array,n[xh]=Uint32Array}function cs(n){const t=zs[n];if(!t)throw new Error("unkonw gl type");return t}class Mi{static async apply(t,e){if(!e.extensions)return;const r=e.extensions.KHR_draco_mesh_compression;if(!r)return;let i=this._workers.get(t.gltf);i||(i=new Worker(await this.initDecoder()),this._workers.set(t.gltf,i)),i.postMessage({type:"init",decoderConfig:{}});let a=t.parseBufferView(r.bufferView);if(!a.result){let o=await new Promise((l,h)=>{i.onmessage=u=>{const c=u.data;c.type=="decode"?l(c.result):c.type=="error"&&h(c.error)},i.postMessage({type:"decoder",buffer:a,attributes:r.attributes},[a])});a.result=o}return a.result}static unload(t){let e=this._workers.get(t);e&&(e.terminate(),this._workers.delete(t))}static async initDecoder(){if(!this._workerCode){let t=await new Ye().loadTxt("https://cdn.orillusion.com/draco_decoder_gltf.js");const e=new Blob([t.data,"",`(${Ch})()`],{type:"application/javascript"});this._workerCode=URL.createObjectURL(e)}return this._workerCode}}s(Mi,"_workerCode"),s(Mi,"_workers",new Map);function Ch(){let n,t;onmessage=e=>{const r=e.data;switch(r.type){case"init":n=r.decoderConfig,t=new Promise((o,l)=>{n.onModuleLoaded=h=>{o({draco:h})},DracoDecoderModule(n)});break;case"decoder":const i=r.buffer,a=r.attributes;t.then(o=>{const l=o.draco;let h=new l.Decoder,u=new l.DecoderBuffer;u.Init(new Int8Array(i),i.byteLength);let c,d;try{const f=h.GetEncodedGeometryType(u);f==l.TRIANGULAR_MESH?(d=new l.Mesh,c=h.DecodeBufferToMesh(u,d)):self.postMessage(new Error("INVALID_GEOMETRY_TYPE:"+f)),c.ok()||self.postMessage(new Error("DracoDecode:"+c.error_msg()));let p={};for(const A in a){let x=h.GetAttributeByUniqueId(d,a[A]);const C=x.num_components(),v=d.num_points()*C,_=v*Float32Array.BYTES_PER_ELEMENT,S=l.DT_FLOAT32,B=l._malloc(_);h.GetAttributeDataArrayForAllPoints(d,x,S,_,B);const M=new Float32Array(l.HEAPF32.buffer,B,v).slice();l._free(B),p[A]={data:M,numComponents:C,normalize:!1}}{const A=d.num_faces()*3,x=A*4,C=l._malloc(x);h.GetTrianglesUInt32Array(d,x,C);const v=new Uint32Array(l.HEAPF32.buffer,C,A).slice();l._free(C),p.indices={data:v,numComponents:1,normalize:!1}}self.postMessage({type:"decode",result:p})}catch(f){self.postMessage({type:"error",error:f.message})}finally{l.destroy(d),l.destroy(h),l.destroy(u)}});break}}}class yh{constructor(t){s(this,"gltf");this.gltf=t}parse(t){const e=this.gltf.cameras[t];if(!e)return this.errorMiss("camera",t);if(e.isParsed)return e.dcamera;e.isParsed=!0,e.dcamera=!1;const{name:r,type:i,perspective:a,orthographic:o}=e;if(i==="perspective"&&a){const{aspectRatio:l,yfov:h,zfar:u,znear:c}=a;e.dcamera=Object.assign({},{name:r,type:i,yfov:h,znear:c,aspectRatio:l,zfar:u})}else if(i==="orthographic"&&o){const{xmag:l,ymag:h,zfar:u,znear:c}=o;e.dcamera=Object.assign({},{name:r,type:i,xmag:l,ymag:h,zfar:u,znear:c})}return e.dcamera}errorMiss(t,e){throw new Error(t+e)}}const Sr=class Sr extends ze{constructor(){super(...arguments);s(this,"_gltf")}async parseJson(e){this._gltf=new fa,this._gltf={...this._gltf,...e},this._gltf.resources={},await Promise.all([this.load_gltf_bin(),this.load_gltf_textures()]);let r=new pa,i=await r.parse(this.initUrl,this._gltf,this._gltf.scene);return r.destory(),r=null,i?(this.data=i.rootNode,i.rootNode):(this._gltf=null,null)}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}static getMeshNameCounter(){return function(){return`GLTF_NO_NAME_PRIMITIVE_${Sr._counter++}`}}static getModelNameCounter(){let e=0;return function(){return`GLTF_NO_NAME_MESH_${e++}`}}static getTexCoordDefine(e){return`UV_NUM ${e}`}static getVertexColorDefine(e){return`HAS_VERTEXCOLOR ${e}`}static getBaseColorTextureDefine(){return"HAS_BASECOLORMAP"}static getMetalRoughnessDefine(){return"HAS_METALROUGHNESSMAP"}static getNormalMapDefine(){return"HAS_NORMALMAP"}static getEmissiveMapDefine(){return"HAS_EMISSIVEMAP"}static getOcclusionMapDefine(){return"HAS_OCCLUSIONMAP"}static getMorphTargetsDefine(e){return`MORPH_TARGET_NUM ${e}`}static getMorphtargetPositionDefine(){return"HAS_MORPH_POSITION"}static getMorphtargetNormalDefine(){return"HAS_MORPH_NORMAL"}static getMorphtargetTangentDefine(){return"HAS_MORPH_TANGENT"}static getJointsNumDefine(e){return`JOINTS_NUM ${e}`}static getJointVec8Define(){return"JOINT_VEC8"}static getHasNormalDefine(){return"HAS_NORMAL"}static getHasTangentDefine(){return"HAS_TANGENT"}static getHasNormalMapDefine(){return"HAS_NORMAL_MAP"}static getAlphaMaskDefine(){return"ALPHA_MASK"}static getAlphaBlendDefine(){return"ALPHA_BLEND"}async load_gltf_bin(){var e;if(this._gltf.buffers&&this._gltf.buffers.length>0){let r=[];for(let i=0;i<this._gltf.buffers.length;i++){const a=this._gltf.buffers[i];if(a.uri.substring(0,5)!=="data:"){let o=Ne.parseUrl(this.baseUrl,a.uri);(e=this.loaderFunctions)!=null&&e.onUrl&&(o=await this.loaderFunctions.onUrl(o));let l=new Ye().loadBinData(o,this.loaderFunctions).then(h=>{this._gltf.resources[a.uri]=h});r.push(l)}}await Promise.all(r)}}async load_gltf_textures(){var e;if(this._gltf,this._gltf.images){let r=[];for(let i=0;i<this._gltf.images.length;i++){const a=this._gltf.images[i];if(a.uri){let o=Ne.parseUrl(this.baseUrl,a.uri);(e=this.loaderFunctions)!=null&&e.onUrl&&(o=await this.loaderFunctions.onUrl(o));let l=new Ye().loadAsyncBitmapTexture(o,this.loaderFunctions).then(h=>{h.name=Ne.getURLName(a.uri),this._gltf.resources[h.name]=h});r.push(l)}}await Promise.all(r)}}};s(Sr,"format",Te.JSON),s(Sr,"_counter",0),s(Sr,"defaultMaterial",{name:"GLTF_DEFAULT_MATERIAL",alphaCutoff:.33,alphaMode:"MASK",pbrMetallicRoughness:{name:"GLTF_DEFAULT_MATERIAL",defines:[],doubleSided:!1,baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1,emissiveFactor:[0,0,0]}});let Oe=Sr;class _h{constructor(t){s(this,"gltf");s(this,"subParser");this.gltf=t.gltf,this.subParser=t}async parse(t){const e=this.gltf.meshes[t];if(!e)return this.errorMiss("mesh",t);if(e.isParsed)return e.dprimitives;const r=e.primitives,i=e.extras,a=[];for(let o=0;o<r.length;o++){const l=r[o],{attributes:h,indices:u,material:c,mode:d,name:f,targets:p,morphTargetsRelative:A,extensions:x}=l;let C=e.name;for(let N in h)C+=N;C+=`indices:${u}`,C+=`material:${c}`;const v={attribArrays:{indices:[]},weights:[],defines:[],material:null,drawMode:null,meshName:null,modelName:null,morphTargetsRelative:!1,targetNames:i?i.targetNames:null};let _=!1,S=0,B=!1,M;x&&x.KHR_draco_mesh_compression&&(M=await Mi.apply(this.subParser,l));for(const N in h){const Q=M?M[N]:this.parseAccessor(h[N]);if(Q){let U;switch(N){case"POSITION":U=R.position;break;case"NORMAL":U=R.normal,_=!0;break;case"TEXCOORD_0":U=R.uv,S++;break;case"JOINTS_0":U=R.joints0;break;case"JOINTS_1":U=R.joints1,B=!0;break;case"WEIGHTS_0":U=R.weights0;break;case"WEIGHTS_1":U=R.weights1;break;default:U=N}v.attribArrays[U]=Q}}if(_&&v.defines.push(Oe.getHasNormalDefine()),S&&v.defines.push(Oe.getTexCoordDefine(S)),B&&v.defines.push(Oe.getJointVec8Define()),u!==void 0){const N=M?M.indices:this.parseAccessor(u);N&&(v.attribArrays.indices=N)}const D=await this.parseMaterial(c);if(D&&(v.material=D,v.defines=v.defines.concat(D.defines)),v.drawMode=d===void 0?4:d,v.meshName=()=>C,v.modelName=e.name||Oe.getModelNameCounter(),p){v.defines.push(Oe.getMorphTargetsDefine(p.length)),v.morphTargetsRelative=!0;let N=!1,Q=!1,U=!1;for(let le=0;le<p.length;le++){const he=p[le];Object.keys(he).forEach(me=>{const ce=this.parseAccessor(he[me]);if(ce){let re;switch(me){case"POSITION":re=te.MORPH_POSITION_PREFIX+le,N=!0;break;case"NORMAL":re=te.MORPH_NORMAL_PREFIX+le,Q=!0;break;case"TANGENT":re=te.MORPH_TANGENT_PREFIX+le,U=!0;break;default:re=!1}re?v.attribArrays[re]=ce:console.error(`glTF has unsupported morph target attribute ${me}`)}})}N&&v.defines.push(Oe.getMorphtargetPositionDefine()),Q&&v.defines.push(Oe.getMorphtargetNormalDefine()),U&&v.defines.push(Oe.getMorphtargetTangentDefine()),v.weights=e.weights||new Array(p.length).fill(0)}a.push(v)}return e.dprimitives=a,e.isParsed=!0,e.dprimitives}parseAccessor(t){return this.subParser.parseAccessor(t)}parseMaterial(t){return this.subParser.parseMaterial(t)}errorMiss(t,e){throw new Error(t+e)}}class Ih{constructor(t){s(this,"gltf");s(this,"subParser");this.gltf=t.gltf,this.subParser=t}async parse(t){let e;if(t==null?e=Oe.defaultMaterial:e=this.gltf.materials[t],!e)return this.errorMiss("material",t);if(e.isParsed)return e.dmaterial;let{name:r,pbrMetallicRoughness:i,normalTexture:a,occlusionTexture:o,emissiveTexture:l,emissiveFactor:h,alphaMode:u,alphaCutoff:c,doubleSided:d,extensions:f}=e;const p={name:r,defines:[],doubleSided:!!d,baseColorFactor:[1,1,1,1],emissiveFactor:null,alphaCutoff:0,enableBlend:!1,baseColorTexture:null,metallicRoughnessTexture:null,normalTexture:null,occlusionTexture:null,emissiveTexture:null,transformUV1:null,transformUV2:null,extensions:null};if(i){const{baseColorFactor:A,metallicFactor:x,roughnessFactor:C,baseColorTexture:v,metallicRoughnessTexture:_}=i;if(Object.assign(p,{baseColorFactor:A||[1,1,1,1],metallicFactor:x===void 0?1:x,roughnessFactor:C===void 0?.5:C}),v){let S=v.extensions;if(S){let M=S.KHR_texture_transform;M&&(p.transformUV1=new K(M.offset?M.offset[0]:0,M.offset?M.offset[1]:0,M.scale?M.scale[0]:1,M.scale?M.scale[1]:1))}const B=await this.parseTexture(v.index);B?p.baseColorTexture=B:p.baseColorTexture=y.res.redTexture}if(_){const S=await this.parseTexture(_.index);S?p.metallicRoughnessTexture=S:p.metallicRoughnessTexture=y.res.blackTexture}}else Object.assign(p,{baseColorFactor:[1,1,1,1],metallicFactor:0,roughnessFactor:.5});if(p.baseColorFactor&&p.baseColorFactor[3]<1&&(u=u==="MASK"?"MASK":"BLEND"),u&&u!=="OPAQUE"&&(u==="MASK"&&(p.defines.push(Oe.getAlphaMaskDefine()),p.alphaCutoff=c===void 0?.5:c),u==="BLEND"&&(p.defines.push(Oe.getAlphaBlendDefine()),p.enableBlend=!0)),a){const A=await this.parseTexture(a.index);A?p.normalTexture=A:p.normalTexture=y.res.normalTexture}if(o){const A=await this.parseTexture(o.index);A&&(p.occlusionTexture=A)}if(h&&(p.emissiveFactor=h),l){const A=await this.parseTexture(l.index);A?p.emissiveTexture=A:p.emissiveTexture=y.res.blackTexture}return f&&(p.extensions=f),e.isParsed=!0,e.dmaterial=p,p}async parseTexture(t){return this.subParser.parseTexture(t)}errorMiss(t,e){throw new Error(t+e)}}class Sh{constructor(t){s(this,"gltf");s(this,"subParser");this.gltf=t.gltf,this.subParser=t}parse(t){const e=this.gltf.skins[t];if(!e)return this.errorMiss("skin",t);if(e.isParsed)return e.dskin;const{name:r,joints:i,inverseBindMatrices:a,skeleton:o}=e;if(!i)return this.errorMiss("skin.joints",t);e.isParsed=!0,e.dskin=!1;let l={name:r,skeleton:null,inverseBindMatrices:null,joints:i,defines:[Oe.getJointsNumDefine(i.length)]};if(o)l.skeleton=o;else{var h=-1;for(let u=0;u<this.gltf.nodes.length;u++)if(this.gltf.nodes[u].name=="root"){h=u;break}if(h==-1){let u=this.gltf.scenes[this.gltf.scene];h=u.nodes[u.nodes.length-1]}l.skeleton=h}if(l.inverseBindMatrices=te.IDENTITY_INVERSE_BIND_MATRICES,a!==void 0){const u=this.parseAccessor(a);if(u){const c=u.data,d=[];for(let f=0;f<c.length;f+=16)d.push(c.slice(f,f+16));l.inverseBindMatrices=d}else l=null}return e.dskin=l,e.dskin}parseAccessor(t){return this.subParser.parseAccessor(t)}errorMiss(t,e){throw new Error(t+e)}}class wh{constructor(t=""){s(this,"name","");s(this,"index",0);s(this,"instanceID","");s(this,"parent",null);s(this,"scale",new g);s(this,"rotation",new X);s(this,"translation",new g);this.name=t}}class bh{constructor(t=[]){s(this,"joints");this.joints=t}get numJoint(){return this.joints.length}addJoint(t){t.index=this.joints.push(t)-1}getJointName(t){return this.joints[t].name}getJointParentIndex(t){let e=this.joints[t];return e.parent?e.parent.index:-1}getJointByName(t){for(let e of this.joints)if(e.name==t)return e;return null}}class ds{constructor(t,e=!1){s(this,"index");s(this,"worldMatrix");this.index=t,this.worldMatrix=new V(!e)}}class Pi{constructor(t,e=!1){s(this,"time");s(this,"_skeleton");s(this,"_jointsPose");s(this,"mJointMatrixIndexTable");this._skeleton=t,this._jointsPose=new Array(t.numJoint),this.mJointMatrixIndexTable=new Array(t.numJoint);for(let r=0;r<t.numJoint;r++){let i=new ds(r,e);this._jointsPose[r]=i,this.mJointMatrixIndexTable[r]=i.worldMatrix.index}}buildSkeletonPose(t){let e=new g,r=new X,i=new g,a=new Array(this._skeleton.numJoint);this.time=t[11]>0?t[11]:t[24];for(let o=0;o<this._skeleton.numJoint;o++){let l=12*o*4,h=new Float32Array(t.buffer,t.byteOffset+l,12),u=new V;e.set(h[0],h[1],h[2]),r.set(h[4],h[5],h[6],h[7]),i.set(h[8],h[9],h[10]),oa(r.getEulerAngles(),i,e,u),a[o]=u;let c=new ds(o);const d=this._skeleton.getJointParentIndex(o);if(d<0)c.worldMatrix.copyFrom(u);else{let f=this._jointsPose[d];_n(f.worldMatrix,u,c.worldMatrix)}this._jointsPose[o]=c}}get numJoint(){return this._skeleton.numJoint}get joints(){return this._jointsPose}get jointMatrixIndexTable(){return this.mJointMatrixIndexTable}lerp(t,e,r){if(t&&e)for(let i=0;i<this._jointsPose.length;i++){let a=t._jointsPose[i],o=e._jointsPose[i];this._jointsPose[i].worldMatrix.lerp(a.worldMatrix,o.worldMatrix,r)}else for(let i=0;i<this._jointsPose.length;i++){let a=t._jointsPose[i];this._jointsPose[i].worldMatrix.copyFrom(a.worldMatrix)}}copyFrom(t){for(let e=0;e<this._jointsPose.length;e++)this._jointsPose[e].worldMatrix.copyFrom(t._jointsPose[e].worldMatrix)}reset(){for(let t=0;t<this._jointsPose.length;t++)this._jointsPose[t].worldMatrix.identity()}}class Eh extends mt{constructor(e,r){super();s(this,"skeletonAnimation");this.type=e,this.time=r}}class Na{constructor(t,e,r,i){s(this,"name","");s(this,"_skeleton");s(this,"_skeletonPoses");s(this,"_animationClipData");s(this,"_events");if(this.name=t,this._skeleton=e,this._animationClipData=i,r>0&&i){this._skeletonPoses=new Array(r);let a=12*e.numJoint;for(let o=0;o<r;o++){let l=a*o*4,h=new Float32Array(i.buffer,l,a),u=new Pi(e);u.buildSkeletonPose(h),this._skeletonPoses[o]=u}}}get totalTime(){return this._skeletonPoses[this._skeletonPoses.length-1].time}get frameRate(){return this.totalTime/this._skeletonPoses.length}get skeleton(){return this._skeleton}get numFrame(){return this._skeletonPoses.length-1}get animationClipData(){return this._animationClipData}getSkeletonPose(t){return this._skeletonPoses[t]}getLerpSkeletonPose(t,e,r,i){let a=this.getSkeletonPose(t),o=this.getSkeletonPose(e);return i.lerp(a,o,r),i}createSubClip(t,e,r){var i=new Na(t,this._skeleton,0,null);const a=Math.max(Math.floor(e/this.frameRate),0),o=Math.min(Math.floor(r/this.frameRate),this._skeletonPoses.length-1);i._skeletonPoses=this._skeletonPoses.slice(a,o);const l=12*this._skeleton.numJoint*4;return this._animationClipData=new Float32Array(this._animationClipData,a*l,(o-a)*l),i}addEvent(t,e){this._events||(this._events=new Array),this._events.push(new Eh(t,e))}removeEvent(t){this._events&&(this._events=this._events.filter(e=>e.type!=t))}getEvents(){return this._events}}class fs{constructor(t){s(this,"gltf");s(this,"subParser");this.gltf=t.gltf,this.subParser=t}parse(t){let e=new bh;return this.buildSkeleton(e,void 0,t),e}parseSkeletonAnimation(t,e){let r=this.subParser.parseAccessor(e.samplers[0].input),i=r.data.length,a=r.data[1]-r.data[0];r.data[r.data.length-1];let o=12*t.numJoint,l=new Float32Array(o*i);for(var h=0;h<t.numJoint;h++)for(var u=0;u<i;u++){var c=o*u+12*h;l[c+0]=1,l[c+1]=1,l[c+2]=1,l[c+3]=1}for(let A of e.channels){let x=e.samplers[A.sampler];const C=this.subParser.parseAccessor(x.input),v=this.subParser.parseAccessor(x.output);let _=A.target.node,S=A.target.path,B=this.gltf.nodes[_];if(!B)continue;let M=t.getJointByName(B.name);if(M)switch(S){case"scale":if(i*v.numComponents==v.data.length)for(var u=0;u<i;u++){var d=u*v.numComponents,c=o*u+12*M.index;l[c+0]=v.data[d+0],l[c+1]=v.data[d+1],l[c+2]=v.data[d+2],l[c+3]=1}else if(C.data.length==2){let D=0;C.data[0];let N=C.data[1];var f=0*v.numComponents;g.HELP_0.set(v.data[f+0],v.data[f+1],v.data[f+2]);var p=1*v.numComponents;g.HELP_1.set(v.data[p+0],v.data[p+1],v.data[p+2]);for(var u=0;u<i;u++){let U=D/N;g.HELP_2.lerp(g.HELP_0,g.HELP_1,U);var c=o*u+12*M.index;l[c+0]=g.HELP_2.x,l[c+1]=g.HELP_2.y,l[c+2]=g.HELP_2.z,l[c+3]=1,D+=a}}else throw new Error("Unsupported animation sampler interpolation.");break;case"rotation":if(i*v.numComponents==v.data.length)for(var u=0;u<i;u++){var d=u*v.numComponents,c=o*u+12*M.index+4;l[c+0]=v.data[d+0],l[c+1]=v.data[d+1],l[c+2]=v.data[d+2],l[c+3]=v.data[d+3]}else if(C.data.length==2){let D=0;C.data[0];let N=C.data[1];var f=0*v.numComponents;g.HELP_0.set(v.data[f+0],v.data[f+1],v.data[f+2],v.data[f+3]);var p=1*v.numComponents;g.HELP_1.set(v.data[p+0],v.data[p+1],v.data[p+2],v.data[p+3]);for(var u=0;u<i;u++){let he=D/N;g.HELP_2.lerp(g.HELP_0,g.HELP_1,he);var c=o*u+12*M.index+4;l[c+0]=g.HELP_2.x,l[c+1]=g.HELP_2.y,l[c+2]=g.HELP_2.z,l[c+3]=g.HELP_2.w,D+=a}}else throw new Error("Unsupported animation sampler interpolation.");break;case"translation":if(i*v.numComponents==v.data.length)for(var u=0;u<i;u++){var d=u*v.numComponents,c=o*u+12*M.index+8;l[c+0]=v.data[d+0],l[c+1]=v.data[d+1],l[c+2]=v.data[d+2],l[c+3]=C.data[u*C.numComponents]}else if(C.data.length==2){let D=0;C.data[0];let N=C.data[1];var f=0*v.numComponents;g.HELP_0.set(v.data[f+0],v.data[f+1],v.data[f+2]);var p=1*v.numComponents;g.HELP_1.set(v.data[p+0],v.data[p+1],v.data[p+2]);for(var u=0;u<i;u++){let he=D/N;g.HELP_2.lerp(g.HELP_0,g.HELP_1,he);var c=o*u+12*M.index+8;l[c+0]=g.HELP_2.x,l[c+1]=g.HELP_2.y,l[c+2]=g.HELP_2.z,l[c+3]=D,D+=a}}else throw new Error("Unsupported animation sampler interpolation.");break}}return new Na(e.name,t,i,l)}buildSkeleton(t,e,r,i=0){let a=this.gltf.nodes[r];a.name||(a.name="Node_"+r);let o=new wh(a.name);if(o.parent=e,a.scale&&o.scale.set(a.scale[0],a.scale[1],a.scale[2]),a.rotation&&o.rotation.set(a.rotation[0],a.rotation[1],a.rotation[2],a.rotation[3]),a.translation&&o.translation.set(a.translation[0],a.translation[1],a.translation[2]),t.addJoint(o),a.children)for(let l of a.children)this.buildSkeleton(t,o,l,i+1)}}class Th{constructor(t){s(this,"loop",!0);s(this,"speed",1);s(this,"t",0);s(this,"time",0);s(this,"weight",0);s(this,"currFrame",0);s(this,"lastFrame",-1);s(this,"nextFrame",0);s(this,"clip");s(this,"animation");s(this,"_isEnd",!1);s(this,"_currSkeletonPose");this.clip=t,this._currSkeletonPose=new Pi(this.clip.skeleton)}reset(){this.time=0,this.weight=0,this._isEnd=!1}get name(){return this.clip.name}get currSkeletonPose(){return this._currSkeletonPose}update(t){this.time=(this.time+t*this.speed)%this.clip.totalTime;let e=this.time/this.clip.frameRate;if(this.currFrame=Math.trunc(e),this.t=e-this.currFrame,this.currFrame<0&&(this.currFrame=this.clip.numFrame+this.currFrame),this.time>=0?this.nextFrame=(this.currFrame+1)%this.clip.numFrame:(this.nextFrame=this.currFrame-1,this.nextFrame<0&&(this.nextFrame=this.clip.numFrame+this.nextFrame),this.t=1-this.t),this._isEnd)this.currFrame=this.nextFrame=this.speed<0?0:this.clip.numFrame-1;else if(this.currFrame!=this.lastFrame){let a=this.speed<0?0:this.clip.numFrame;this.currFrame==a&&(this.loop?(this.currFrame=0,this.nextFrame=1,this.time=this.t=0):(this.currFrame=this.nextFrame=this.speed<0?0:this.clip.numFrame-1,this._isEnd=!0));var r=this.clip.getEvents();if(r)for(let o of r){var i=Math.floor(o.time/this.clip.frameRate);if(i=Math.min(i,this.clip.numFrame),i=Math.max(i,0),i==this.currFrame){o.skeletonAnimation=this.animation,this.animation.eventDispatcher.dispatchEvent(o);break}}this.lastFrame=this.currFrame}this.clip.getLerpSkeletonPose(this.currFrame,this.nextFrame,this.t,this._currSkeletonPose)}}var Bh=Object.defineProperty,Dh=Object.getOwnPropertyDescriptor,Rh=(n,t,e,r)=>{for(var i=r>1?void 0:r?Dh(t,e):t,a=n.length-1,o;a>=0;a--)(o=n[a])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&Bh(t,e,i),i};let Kt=class extends Ke{constructor(){super();s(this,"isPlaying",!0);s(this,"timeScale",1);s(this,"_skeleton");s(this,"_clips",[]);s(this,"_clipStates",new Map);s(this,"_mixSkeletonPose");s(this,"_mixTempSkeletonPose");s(this,"_currentClipState");s(this,"_bindList",[]);s(this,"_jointMatrixIndexTableBuffer");s(this,"_crossFadeState")}start(){}get currName(){return this._currentClipState?this._currentClipState.name:""}set skeleton(t){this._skeleton=t,this._mixSkeletonPose=new Pi(this._skeleton,!0),this._mixTempSkeletonPose=new Pi(this._skeleton);const e=new Float32Array(this._mixSkeletonPose.jointMatrixIndexTable);this._jointMatrixIndexTableBuffer=new Pe(this._skeleton.numJoint*4,0,e)}get skeleton(){return this._skeleton}get finalSkeletonPose(){return this._mixSkeletonPose}get jointMatrixIndexTableBuffer(){return this._jointMatrixIndexTableBuffer}getJointIndexTable(t){let e=new Array;for(let r=0;r<t.length;r++){const i=t[r];let a=this._skeleton.getJointByName(i);e[r]=a?a.index:-1}return e}addAnimationClip(t){if(!this._clipStates.has(t.name)){this._clips.push(t);let e=new Th(t);e.animation=this,this._clipStates.set(t.name,e),this._currentClipState||this.setCurrentClipState(e)}}getAnimationClip(t){var e=this.getAnimationClipState(t);return e?e.clip:null}getAnimationClips(){return this._clips}getAnimationClipState(t){return this._clipStates.has(t)?this._clipStates.get(t):null}getAnimationClipStates(){return this._clipStates}pause(){this.isPlaying=!1}resume(){this.isPlaying=!0}play(t,e=1,r=!1){if(this._currentClipState&&this._currentClipState.name==t)return r&&this._currentClipState.reset(),!1;let i=this.getAnimationClipState(t);return i?(i.speed=e,i.reset(),this._clipStates.forEach((a,o)=>{a.weight=0}),this.setCurrentClipState(i),!0):!1}crossFade(t,e){if(e<.01){this.play(t);return}if(this._currentClipState.name==t)return;let r=this.getAnimationClipState(t);r&&(r.reset(),this._crossFadeState?(this._crossFadeState.inClip&&(this._crossFadeState.inClip.weight=0),this._crossFadeState.outClip&&(this._crossFadeState.outClip.weight=0),this._crossFadeState.reset(r,this._currentClipState,e)):this._crossFadeState=new Mh(r,this._currentClipState,e),this._currentClipState=r)}setAnimIsLoop(t,e){this._clipStates.has(t)&&(this._clipStates.get(t).loop=e)}addJointBind(t,e){this._bindList.push({jointName:t,obj:e})}removeJointBind(t){for(let e=0;e<this._bindList.length;e++)if(this._bindList[e].obj==t){this._bindList.splice(e,1);break}}onUpdate(){if(!this.isPlaying)return;let t=ie.delta*.001*this.timeScale;this._crossFadeState&&this._crossFadeState.update(t);var e=0,r=[];if(this._clipStates.forEach((a,o)=>{a.weight>0&&(a.update(t),e+=a.weight,r.push(a))}),r.length>0){this._mixSkeletonPose.copyFrom(r[0].currSkeletonPose);for(var i=1;i<r.length;++i){const a=r[i];this._mixTempSkeletonPose.lerp(this._mixSkeletonPose,a.currSkeletonPose,a.weight/e),this._mixSkeletonPose.copyFrom(this._mixTempSkeletonPose)}}}cloneTo(t){let e=t.addComponent(Kt);e.skeleton=this.skeleton;for(var r=0;r<this._clips.length;++r)e.addAnimationClip(this._clips[r])}setCurrentClipState(t){this._currentClipState!=t&&(this._currentClipState=t,this._currentClipState.weight=1)}};Kt=Rh([xt(Kt,"SkeletonAnimationComponent")],Kt);class Mh{constructor(t,e,r){s(this,"inClip");s(this,"outClip");s(this,"currentTime");s(this,"crossFadeTime");this.reset(t,e,r)}reset(t,e,r){this.inClip=t,this.outClip=e,this.currentTime=0,this.crossFadeTime=r}update(t){!this.inClip||!this.outClip||(this.currentTime+=t,this.inClip.weight=Math.min(Math.abs(this.currentTime%this.crossFadeTime)/this.crossFadeTime,1),this.outClip.weight=1-this.inClip.weight,Math.abs(this.currentTime)>=this.crossFadeTime&&(this.inClip.weight=1,this.outClip.weight=0,this.inClip=null,this.outClip=null))}}class ga{static add(t){this.list.indexOf(t)==-1&&this.list.push(t)}static remove(t){let e=this.list.indexOf(t);e!=-1&&this.list.splice(e,1)}}s(ga,"list",[]);class Xi extends Ke{constructor(){super();s(this,"name");s(this,"size",1);s(this,"lightData");s(this,"dirFix",1);s(this,"bindOnChange");s(this,"needUpdateShadow",!0);s(this,"realTimeShadow",!0);s(this,"_castGI",!1);s(this,"_castShadow",!1);s(this,"_iesProfiles")}init(){this.transform.object3D.bound=new Qe(new g,new g),this.lightData=new bi,this.lightData.lightMatrixIndex=this.transform.worldMatrix.index}onChange(){this.bindOnChange&&this.bindOnChange(),this.transform.object3D.bound.setFromCenterAndSize(this.transform.worldPosition,new g(this.size,this.size,this.size)),this._castGI&&(k.instance.state.giLightingChange=!0),this._castShadow?(this.needUpdateShadow=!0,st.addShadowLight(this)):st.removeShadowLight(this)}start(){this.transform.onPositionChange=()=>this.onPositionChange(),this.transform.onScaleChange=()=>this.onScaleChange(),this.transform.onRotationChange=()=>this.onRotChange(),this.onPositionChange(),this.onRotChange(),this.onScaleChange()}onPositionChange(){this.lightData.lightPosition.copyFrom(this.transform.worldPosition)}onRotChange(){this.dirFix==1?this.lightData.direction.copyFrom(this.transform.forward):this.lightData.direction.copyFrom(this.transform.back),this.lightData.lightTangent.copyFrom(this.transform.up),this.onChange()}onScaleChange(){this.onChange()}onEnable(){this.onChange(),k.instance.addLight(this.transform.scene3D,this)}onDisable(){this.onChange(),k.instance.removeLight(this.transform.scene3D,this),st.removeShadowLight(this)}set iesProfiles(e){this._iesProfiles=e,this.lightData.iesIndex=e.index,oi.use=!0,this.onChange()}get iesProfile(){return this._iesProfiles}get r(){return this.lightData.lightColor.r}set r(e){this.lightData.lightColor.r=e,this.onChange()}get g(){return this.lightData.lightColor.g}set g(e){this.lightData.lightColor.g=e,this.onChange()}get b(){return this.lightData.lightColor.b}set b(e){this.lightData.lightColor.b=e,this.onChange()}get lightColor(){return this.lightData.lightColor}set lightColor(e){this.lightData.lightColor=e,this.onChange()}get color(){return this.lightData.lightColor}set color(e){this.lightData.lightColor=e,this.onChange()}get intensity(){return this.lightData.intensity}set intensity(e){this.lightData.intensity=e,this.onChange()}set castShadow(e){e!=this._castShadow&&(this._castShadow=e,this.onChange())}get castShadow(){return this._castShadow}get shadowIndex(){return this.lightData.castShadowIndex}get castGI(){return this._castGI}set castGI(e){e?ga.add(this):ga.remove(this),this._castGI=e,e&&this.onChange()}get direction(){return this.lightData.direction}destroy(e){this.bindOnChange=null,k.instance.removeLight(this.transform.scene3D,this),st.removeShadowLight(this),this.transform.eventDispatcher.removeEventListener(Dt.ROTATION_ONCHANGE,this.onRotChange,this),this.transform.eventDispatcher.removeEventListener(Dt.SCALE_ONCHANGE,this.onScaleChange,this),super.destroy(e)}}var Ph=Object.defineProperty,Uh=Object.getOwnPropertyDescriptor,Lh=(n,t,e,r)=>{for(var i=r>1?void 0:r?Uh(t,e):t,a=n.length-1,o;a>=0;a--)(o=n[a])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&Ph(t,e,i),i};let vi=class extends Xi{constructor(){super();s(this,"shadowCamera")}init(){super.init(),this.object3D.name==""&&(this.object3D.name="DirectionLight_"+Ct()),this.radius=Number.MAX_SAFE_INTEGER,this.lightData.lightType=be.DirectionLight,this.lightData.linear=0,this.lightData.quadratic=.3}start(){super.start(),this.castGI=!0}get radius(){return this.lightData.range}set radius(t){this.lightData.range=t,this.onChange()}get indirect(){return this.lightData.quadratic}set indirect(t){this.lightData.quadratic=t,this.onChange()}debug(){}};vi=Lh([xt(vi,"DirectLight")],vi);var Oh=Object.defineProperty,Nh=Object.getOwnPropertyDescriptor,Fh=(n,t,e,r)=>{for(var i=r>1?void 0:r?Nh(t,e):t,a=n.length-1,o;a>=0;a--)(o=n[a])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&Oh(t,e,i),i};let xi=class extends Xi{constructor(){super()}init(){super.init(),this.lightData.lightType=be.PointLight,this.object3D.name==""&&(this.object3D.name="PointLight"+Ct())}get range(){return this.lightData.range}set range(n){this.lightData.range=n,this.onChange()}get at(){return this.lightData.linear}set at(n){this.lightData.linear=n,this.onChange()}get radius(){return this.lightData.radius}set radius(n){this.lightData.radius=n,this.onChange()}get quadratic(){return this.lightData.quadratic}set quadratic(n){this.lightData.quadratic=n,this.onChange()}start(){this.transform.rotationX=90,super.start()}onUpdate(){}onGraphic(n){}debug(){}debugDraw(n){}};xi=Fh([xt(xi,"PointLight")],xi);var kh=Object.defineProperty,Qh=Object.getOwnPropertyDescriptor,Gh=(n,t,e,r)=>{for(var i=r>1?void 0:r?Qh(t,e):t,a=n.length-1,o;a>=0;a--)(o=n[a])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&kh(t,e,i),i};let Ci=class extends Xi{constructor(){super()}init(){super.init(),this.lightData.lightType=be.SpotLight,this.object3D.name==""&&(this.object3D.name="SpotLight"+Ct())}get innerAngle(){return this.lightData.innerAngle/this.lightData.outerAngle*100}set innerAngle(n){this.lightData.innerAngle=pt(n,0,100)/100*this.lightData.outerAngle,this.onChange()}get outerAngle(){return this.lightData.outerAngle*hi*2}set outerAngle(n){this.lightData.outerAngle=pt(n,1,179)*oe*.5,this.onChange()}get radius(){return this.lightData.radius}set radius(n){this.lightData.radius=n,this.onChange()}get range(){return this.lightData.range}set range(n){this.lightData.range=n,this.onChange()}get at(){return this.lightData.linear}set at(n){this.lightData.linear=n,this.onChange()}start(){super.start(),this.lightData.lightType=be.SpotLight}onUpdate(){}onGraphic(n){}debug(){}debugDraw(n){}};Ci=Gh([xt(Ci,"SpotLight")],Ci);var zh=Object.defineProperty,Vh=Object.getOwnPropertyDescriptor,Hh=(n,t,e,r)=>{for(var i=r>1?void 0:r?Vh(t,e):t,a=n.length-1,o;a>=0;a--)(o=n[a])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&zh(t,e,i),i};let Jr=class extends se{constructor(){super();s(this,"skinJointsName");s(this,"mInverseBindMatrixData");s(this,"mInverseBindMatrixBuffer");s(this,"mSkeletonAnimation");s(this,"mJointIndexTableBuffer");this.addRendererMask(ke.SkinnedMesh)}start(){if(super.start(),this.skeletonAnimation=this.object3D.getComponent(Kt),!this.skeletonAnimation){let t=this.object3D.parentObject.parentObject.getComponentsInChild(Kt);t.length>0&&(this.skeletonAnimation=t[0]);let e=this.object3D;for(;!this.skeletonAnimation&&e;)this.skeletonAnimation=e.getComponentFromParent(Kt),e.parent&&(e=e.parent.object3D)}}onEnable(){super.onEnable()}get skeletonAnimation(){return this.mSkeletonAnimation}set skeletonAnimation(t){if(this.mSkeletonAnimation=t,!!t&&!this.mJointIndexTableBuffer){let e=this.mSkeletonAnimation.getJointIndexTable(this.skinJointsName);this.mJointIndexTableBuffer=new Pe(e.length*4,0,new Float32Array(e)),this.mJointIndexTableBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.COMPUTE}}get skinInverseBindMatrices(){return this.mInverseBindMatrixData}set skinInverseBindMatrices(t){this.mInverseBindMatrixData=t;var e=new Float32Array(t.length*16);for(let r=0;r<t.length;r++){let i=r*16,a=t[r];e.set(a,i)}this.mInverseBindMatrixBuffer=new Pe(e.byteLength,0,e),this.mInverseBindMatrixBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.COMPUTE}get inverseBindMatrixBuffer(){return this.mInverseBindMatrixBuffer}get jointIndexTableBuffer(){return this.mJointIndexTableBuffer.buffer}cloneTo(t){let e=t.addComponent(Jr);e.geometry=this.geometry,e.material=this.material.clone(),e.castShadow=this.castShadow,e.castGI=this.castGI,e.receiveShadow=this.receiveShadow,e.rendererMask=this.rendererMask,e.skinJointsName=this.skinJointsName,e.skinInverseBindMatrices=this.skinInverseBindMatrices,e.mJointIndexTableBuffer=this.mJointIndexTableBuffer}nodeUpdate(t,e,r,i){for(let a=0;a<this.materials.length;a++){let o=this.materials[a].getPass(e);if(o)for(let l=0;l<o.length;l++){const h=o[l];!h.pipeline&&this.mSkeletonAnimation&&(h.setStorageBuffer("jointsMatrixIndexTable",this.mSkeletonAnimation.jointMatrixIndexTableBuffer),h.setStorageBuffer("jointsInverseMatrix",this.mInverseBindMatrixBuffer),h.setStorageBuffer("jointsIndexMapingTable",this.mJointIndexTableBuffer))}}super.nodeUpdate(t,e,r,i)}};Jr=Hh([xt(Jr,"SkinnedMeshRenderer")],Jr);class Yh{static apply(t,e,r){let i=e.extensions;if(i&&i.KHR_materials_clearcoat){r.shader.getDefaultColorShader().setDefine("USE_CLEARCOAT",!0);let a=i.KHR_materials_clearcoat;"clearcoatFactor"in a&&(e.clearcoatFactor=a.clearcoatFactor,r.clearcoatFactor=e.clearcoatFactor),"clearcoatRoughnessFactor"in a&&(e.clearcoatRoughnessFactor=a.clearcoatRoughnessFactor,r.clearcoatRoughnessFactor=e.clearcoatRoughnessFactor)}}}class Wh{static apply(t,e,r){let i=e.extensions;i&&i.KHR_materials_emissive_strength?(r.emissiveIntensity=i.KHR_materials_emissive_strength.emissiveStrength*.5,r.emissiveMap==y.res.blackTexture&&(r.emissiveMap=y.res.whiteTexture)):r.emissiveIntensity=1}}class Kh{static apply(t,e,r){let i=e.extensions;i&&i.KHR_materials_unlit?r.supportLight=!0:r.supportLight=!1}}class Xh{constructor(t){s(this,"gltf");s(this,"subParser");s(this,"_testCount",8);s(this,"_hasCastShadow",!1);this.gltf=t.gltf,this.subParser=t}async convertNodeToObject3D(t,e){const r=new ee;if(r.name=t.name,r[te.GLTF_NODE_INDEX_PROPERTY]=t.nodeId,t.nodeObj=r,t.matrix&&(t.translation=[0,0,0],t.rotation=[0,0,0,1],t.scale=[1,1,1]),t.translation&&(r.transform.x=t.translation[0],r.transform.y=t.translation[1],r.transform.z=t.translation[2]),t.rotation){let i=new X;i.setFromArray(t.rotation),r.transform.localRotQuat=i}if(t.scale&&(r.transform.scaleX=t.scale[0],r.transform.scaleY=t.scale[1],r.transform.scaleZ=t.scale[2]),e.addChild(r),t.light&&this.convertLight(t,r),t.primitives&&this.convertprimitives(t,r),t.skeleton){let i=r.addComponent(Kt);if(i){i.skeleton=this.subParser.parseSkeleton(t.skeleton.skeleton);for(let a=0;a<this.gltf.animations.length;a++){let o=this.gltf.animations[a];o.name||(o.name=a.toString());let l=this.subParser.parseSkeletonAnimation(i.skeleton,o);i.addAnimationClip(l)}}}return r}convertLight(t,e){switch(t.light.type){case"directional":let r=e.addComponent(vi);e.name=t.light.name,r.intensity=t.light.intensity*.1,r.radius=Number.MAX_SAFE_INTEGER,r.dirFix=-1,this._hasCastShadow||(this._hasCastShadow=!0,r.castShadow=this._hasCastShadow),r.lightColor=t.light.color?new F(t.light.color[0],t.light.color[1],t.light.color[2]):new F(1,1,1,1),r.debug();break;case"point":if(this._testCount>0){let a=e.addComponent(xi);a.name=t.light.name,a.intensity=t.light.intensity?t.light.intensity*8*2:1,a.radius=8,a.at=2,a.range=t.light.range?t.light.range:8,a.lightColor=t.light.color?new F(t.light.color[0],t.light.color[1],t.light.color[2]):new F(1,1,1,1)}this._testCount--;break;case"spot":let i=e.addComponent(Ci);i.name=t.light.name,i.intensity=t.light.intensity*5,i.radius=1,i.dirFix=-1,i.at=2,i.range=t.light.range?t.light.range:8,i.outerAngle=t.light.spot.outerConeAngle*hi,i.lightColor=t.light.color?new F(t.light.color[0],t.light.color[1],t.light.color[2]):new F(1,1,1,1);break}}convertprimitives(t,e){for(let r=0;r<t.primitives.length;r++){const i=t.primitives[r];i.modelName;let a=i.material;a.name==null&&(a.name=Ct());let o,l=`matkey_${a.name}`;if(a&&this.gltf.resources[l])o=this.gltf.resources[l];else{let f=o=new ui;if(this.gltf.resources[l]=f,f.name=a.name,i.material){const{baseColorTexture:p,baseColorFactor:A,metallicFactor:x,roughnessFactor:C,doubleSided:v,metallicRoughnessTexture:_,normalTexture:S,occlusionTexture:B,emissiveTexture:M,emissiveFactor:D,enableBlend:N,alphaCutoff:Q}=i.material;let U=f=this.applyMaterialExtensions(i.material,f);"enableBlend"in i.material&&(i.material.enableBlend?U.blendMode=j.SOFT_ADD:U.blendMode=j.NONE),"alphaCutoff"in i.material&&Q>0&&Q<1&&(U.setUniformFloat("alphaCutoff",Q),U.blendMode=j.NORMAL,U.transparent=!0),i.material.transformUV1&&U.setUniformVector4("uvTransform_1",i.material.transformUV1),i.material.transformUV2&&U.setUniformVector4("uvTransform_2",i.material.transformUV2),U.setUniformColor("baseColor",new F(A[0],A[1],A[2],A[3])),U.setUniformFloat("roughness",C),U.setUniformFloat("metallic",x),U.setUniformFloat("ao",1),U.doubleSide=v,p&&U.setTexture("baseMap",p),S&&U.setTexture("normalMap",S),_&&U.setTexture("maskMap",_),B&&_!=B&&U.setTexture("aoMap",B),M&&U.setTexture("emissiveMap",M),D&&(D[0]>0||D[1]>0||D[2]>0)&&(U.shader.getTexture("emissiveMap")||U.shader.setTexture("emissiveMap",y.res.whiteTexture),U.setUniformColor("emissiveColor",new F(D[0],D[1],D[2],D[3])))}}const{attribArrays:h,modelName:u,drawMode:c}=i;let d;if(!h.indices.data){let f=[],p=h.position.data.length/3/3;for(let A=0;A<p;A++){let x=A*3;f.push(x+2),f.push(x+0),f.push(x+1)}h.indices={data:new Uint8Array(f),normalize:!1,numComponents:1}}if(!h.normal){let f=[],p=h.position.data.length/3;for(let A=0;A<p;A++)f.push(0),f.push(0),f.push(0);h.normal={data:new Float32Array(f),normalize:!1,numComponents:3}}if(h.indices.data&&h.indices.data.length>3){let f=i.meshName();this.gltf.resources[f]?d=this.gltf.resources[f]:(d||(d=this.createGeometryBase(f,h,i)),this.gltf.resources[f]=d);const p=new ee;if(p.name=u+r,this.gltf.animations&&h[R.joints0]!=null){d||(d=this.createGeometryBase(u,h,i)),this.gltf.resources[f]=d;let A=this.gltf.nodes[t.skin.skeleton];if(A.dnode&&A.dnode.nodeObj){let C=A.dnode.nodeObj.addComponent(Kt);if(C){C.skeleton=this.subParser.parseSkeleton(t.skin.skeleton);for(let v=0;v<this.gltf.animations.length;v++){let _=this.gltf.animations[v];_.name||(_.name=v.toString());let S=this.subParser.parseSkeletonAnimation(C.skeleton,_);C.addAnimationClip(S)}}}else A.dnode.skeleton=t.skin;let x=p.addComponent(Jr);x.castShadow=!0,x.castGI=!0,x.geometry=d,x.material=o,x.skinJointsName=this.parseSkinJoints(t.skin),x.skinInverseBindMatrices=t.skin.inverseBindMatrices}else{d||(d=this.createGeometryBase(u,h,i)),this.gltf.resources[f]=d,d.hasAttribute(R.joints0)&&d.vertexAttributeMap.delete(R.joints0);let A=p.addComponent(se);A.castShadow=!0,A.castGI=!0,A.geometry=d,A.material=o}t.skin&&t.skin.defines,e.addChild(p)}}}createGeometryBase(t,e,r){let i=new vt;i.name=t,"indices"in e&&(e.indices.data.length>65535?e.indices.data=new Uint32Array(e.indices.data):e.indices.data=new Uint16Array(e.indices.data)),i.morphTargetsRelative=r.morphTargetsRelative;let a=r.targetNames;if(a&&a.length>0){let l=i.morphTargetDictionary={};for(let h=0;h<a.length;h++)l[a[h]]=h}if(i.morphTargetDictionary){let l=e.position.data.length/3,h=new Float32Array(l);for(let u=0;u<l;u++)h[u]=u;e.vIndex={data:h,normalize:!1,numComponents:1}}for(const l in e){let h=e[l];i.setAttribute(l,h.data)}let o=i.getAttribute(R.indices);return i.addSubGeometry({indexStart:0,indexCount:o.data.length,vertexStart:0,index:0,vertexCount:0,firstStart:0,topology:0}),i}applyMaterialExtensions(t,e){return Yh.apply(this.gltf,t,e),Kh.apply(this.gltf,t,e),Wh.apply(this.gltf,t,e),e}parseSkinJoints(t){let e=[];for(let r of t.joints){let i=this.gltf.nodes[r];e.push(i.name)}return e}}class pa{constructor(){s(this,"currentSceneName");s(this,"gltf");s(this,"initUrl");s(this,"_generator");s(this,"_version");s(this,"_BASE64_MARKER",";base64,");s(this,"_cameraParser",null);s(this,"_meshParser",null);s(this,"_materialParser",null);s(this,"_skinParser",null);s(this,"_skeletonParser",null);s(this,"_converter",null)}get version(){return this.version?this.version:this.gltf?this.gltf.asset?(this._version=this.gltf.asset.version,this.gltf.asset.minVersion&&(this._version+=`\r minVersion${this.gltf.asset.minVersion}`),this.version):this.errorMiss("asset"):(console.warn("glTF not loaded."),null)}async parse(t,e,r){this.gltf=e,this.initUrl=t;const{version:i,generator:a}=this.gltf.asset;if(this._generator=a,i!=="2.0")return console.error(`GLTFParser only support glTF 2.0 for now! Received glTF version: ${this.version}`),!1;const o={nodes:await this.parseScene(r),animations:this.parseAnimations(),name:this.currentSceneName};return await this.convertToNode(o)}destory(){Mi.unload(this.gltf),this.gltf=null}async parseScene(t){const e=t||this.gltf.scene||0,r=this.gltf.scenes[e];if(typeof r>"u")return this.errorMiss("scene",e);this.currentSceneName=r.name||"GLTF_NO_NAME_SCENE";const i=[],a=r.nodes;for(let o=0;o<a.length;o++){const l=await this.parseNode(a[o]);l&&i.push(l)}return i}async parseNode(t){const e=this.gltf.nodes[t];if(!e)return this.errorMiss("node",t);if(e.isParsed)return e.dnode;const{name:r,matrix:i,translation:a,rotation:o,scale:l}=e,h={name:r,matrix:i,translation:a,rotation:o,scale:l,nodeId:t,camera:null,primitives:null,skin:null,children:null,light:null};if(e.camera!==void 0&&(h.camera=this.parseCamera(e.camera)),e.mesh!==void 0&&(h.primitives=await this.parseMesh(e.mesh)),e.extensions!==void 0&&this.applyNodeExtensions(e,h),e.skin!==void 0){const u=this.parseSkin(e.skin);u&&(h.skin=u)}if(h.children=[],e.children)for(let u=0;u<e.children.length;u++)h.children.push(await this.parseNode(e.children[u]));return e.dnode=h,e.isParsed=!0,e.dnode}errorMiss(t,e){throw new Error(t+e)}parseCamera(t){return this._cameraParser||(this._cameraParser=new yh(this.gltf)),this._cameraParser.parse(t)}async parseMesh(t){return this._meshParser||(this._meshParser=new _h(this)),this._meshParser.parse(t)}async parseTexture(t){let e=this.gltf.textures[t];if(e&&!e.dtexture){if(e&&e.source!=null){let r=this.gltf.images[e.source];if(r.uri){let i=r.uri;i=Ne.getURLName(i),e.dtexture=this.gltf.resources[i]}else if(r.bufferView){let i=this.parseBufferView(r.bufferView),a=new sr,o=new Blob([i],{type:r.mimeType});await a.loadFromBlob(o),e.dtexture=a}else e.dtexture=this.gltf.resources[r.name]}else if(e.name){let r=Ne.getURLName(e.name);e.dtexture=this.gltf.resources[r]}}return e.dtexture||console.log("miss texture , please check texture!",t,e),e.dtexture}async parseMaterial(t){return this._materialParser||(this._materialParser=new Ih(this)),this._materialParser.parse(t)}parseAnimations(){return[]}async parseObject3D(t,e){return this._converter||(this._converter=new Xh(this)),this._converter.convertNodeToObject3D(t,e)}parseSkeleton(t){return this._skeletonParser||(this._skeletonParser=new fs(this)),this._skeletonParser.parse(t)}parseSkeletonAnimation(t,e){return this._skeletonParser||(this._skeletonParser=new fs(this)),this._skeletonParser.parseSkeletonAnimation(t,e)}async traverse(t,e){for(let r=0;r<e.length;r++){const i=await this.parseObject3D(e[r],t);await this.traverse(i,e[r].children)}}async convertToNode(t){const e=new ee;e.name=t.name;const r=t.nodes;t.animations;const i=[],a=[];return await this.traverse(e,r),{rootNode:e,textures:i,animations:void 0,cameras:a}}parseSkin(t){return this._skinParser||(this._skinParser=new Sh(this)),this._skinParser.parse(t)}parseAccessor(t){const e=this.gltf.accessors[t];if(!e)return this.errorMiss("accessor",t);if(e.isParsed)return e.daccessor;e.isParsed=!0,e.daccessor=!1;const r=!!e.normalized,i=this.gltf.bufferViews[e.bufferView],a=i&&i.byteStride,o=cs(e.componentType);let l=1;switch(e.type){case"SCALAR":l=1;break;case"VEC2":l=2;break;case"VEC3":l=3;break;case"VEC4":case"MAT2":l=4;break;case"MAT3":l=9;break;case"MAT4":l=16;break;default:l=0;break}if(l===0)return console.error(`glTF has unknown data type in accessor: ${e.type}`),!1;const h=l*o.BYTES_PER_ELEMENT;let u;if(i!==void 0){if(u=this.parseBufferView(e.bufferView),!u)return e.daccessor}else u=new Uint8Array(h*e.count).buffer;let c=this.getTypedArrayFromArrayBuffer(u,a,e.byteOffset||0,o,l,e.count);if(e.sparse){const{count:d,indices:f,values:p}=e.sparse;c=new o(c);const A=f.byteOffset||0,x=this.gltf.bufferViews[f.bufferView],C=cs(f.componentType),v=this.parseBufferView(f.bufferView),_=this.getTypedArrayFromArrayBuffer(v,x.byteStride,A,C,1,d),S=p.byteOffset||0,B=this.gltf.bufferViews[p.bufferView],M=this.parseBufferView(p.bufferView),D=this.getTypedArrayFromArrayBuffer(M,B.byteStride,S,o,l,d);for(let N=0;N<_.length;N++)c.set(D.slice(N*l,N*l+l),_[N]*l)}return e.computeResult={typedArray:c,arrayType:o,numComponents:l},e.daccessor={data:c,numComponents:l,normalize:r},e.daccessor}getTypedArrayFromArrayBuffer(t,e,r,i,a,o){let l;const h=a*i.BYTES_PER_ELEMENT;if(e&&h!==e){const u=a*o;l=new i(u);for(let c=0;c<o;c++){const d=new i(t,r+c*e,a);for(let f=0;f<a;f++)l[c*a+f]=d[f]}}else l=new i(t,r,o*a);return l}parseBufferView(t){const e=this.gltf.bufferViews[t];if(!e)return this.errorMiss("bufferView",t);if(e.isParsed)return e.dbufferView;e.isParsed=!0,e.dbufferView=!1;const r=this.parseBuffer(e.buffer);if(r){const{byteOffset:i,byteLength:a}=e,o=new Uint8Array(r,i||0,a);e.dbufferView=new Uint8Array(o).buffer}return e.dbufferView}parseBuffer(t){const e=this.gltf.buffers[t];if(!e)return this.errorMiss("buffer",t);if(e.isParsed)return e.dbuffer;if(e.isParsed=!0,e.dbuffer=!1,e.uri.substring(0,5)!=="data:"){const r=e.uri,i=this.gltf.resources[r];i?i.byteLength===e.byteLength?e.dbuffer=this.gltf.resources[r]:console.error(`load gltf resource "${r}" at buffers[${t} failed, ArrayBuffer.byteLength not equals buffer's byteLength]`):console.error(`load gltf resource "${r}" at buffers[${t}] failed`)}else{const r=e.uri.indexOf(this._BASE64_MARKER)+this._BASE64_MARKER.length,i=window.atob(e.uri.substring(r)),a=new Uint8Array(i.length);for(let o=0;o<i.length;o++)a[o]=i.charCodeAt(o);e.dbuffer=a.buffer}return e.dbuffer}getLight(t){return this.gltf.extensions.KHR_lights_punctual.lights[t]}applyNodeExtensions(t,e){let r=t.extensions;r.KHR_lights_punctual&&this.gltf.extensions.KHR_lights_punctual&&(e.light=this.getLight(r.KHR_lights_punctual.light))}}class jh{constructor(){s(this,"magic");s(this,"version");s(this,"length")}}class qh{constructor(){s(this,"chunkLength");s(this,"chunkType");s(this,"chunkData")}}class Fa extends ze{constructor(){super(...arguments);s(this,"_gltf")}async parseBuffer(e){let r=new Uint8Array(e);r.pos=0;const i=this.parseHeader(r);if(i.magic!=1179937895)return console.error("invalid GLB file"),!1;if(i.version!==2)return console.error(`GLBParser only support glTF 2.0 for now! Received glTF version: ${i.version}`),!1;let a=[];for(;r.pos<r.length;){let d=this.parseChunk(r);a.push(d)}if(a[0].chunkType!=1313821514)return console.error("invalid GLBChunk"),!1;let o="",l=65535,h=a[0].chunkData;for(let d=0;d<h.length;d+=l){let f=h.length-d;f=Math.min(f,l);let p=h.subarray(d,d+f);o+=String.fromCharCode(...p)}let u=JSON.parse(o);this._gltf=new fa,this._gltf={...this._gltf,...u},this._gltf.resources={};for(let d=0;d<this._gltf.buffers.length;d++){let f=this._gltf.buffers[d];f.isParsed=!0,f.dbuffer=a[d+1].chunkData.buffer}if(this._gltf.images)for(let d=0;d<this._gltf.images.length;d++){let f=this._gltf.images[d];f.name=f.name||"bufferView_"+f.bufferView.toString();const p=this._gltf.bufferViews[f.bufferView],A=this._gltf.buffers[p.buffer];let x=new Uint8Array(A.dbuffer,p.byteOffset,p.byteLength),C=new Blob([x],{type:f.mimeType}),v=new sr;await v.loadFromBlob(C),v.name=f.name,this._gltf.resources[f.name]=v}let c=await new pa().parse(this.initUrl,this._gltf,this._gltf.scene);return c?(this.data=c.rootNode,c.rootNode):null}async parseJsonAndBuffer(e,r){this._gltf=new fa,this._gltf={...this._gltf,...e},this._gltf.resources={};let i=this._gltf.buffers[0];if(i.isParsed=!0,i.dbuffer=r,this._gltf.images)for(let o=0;o<this._gltf.images.length;o++){let l=this._gltf.images[o];l.name=l.name||"bufferView_"+l.bufferView.toString();const h=this._gltf.bufferViews[l.bufferView],u=this._gltf.buffers[h.buffer];let c=new Uint8Array(u.dbuffer,h.byteOffset,h.byteLength),d=new Blob([c],{type:l.mimeType}),f=new sr;await f.loadFromBlob(d),f.name=l.name,this._gltf.resources[l.name]=f}let a=await new pa().parse(this.initUrl,this._gltf,this._gltf.scene);return a?(this.data=a.rootNode,a.rootNode):null}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}parseHeader(e){let r=e.pos,i=new jh,a=new Uint32Array(e.buffer,r,3);return e.pos+=a.byteLength,i.magic=a[0],i.version=a[1],i.length=a[2],i}parseChunk(e){let r=e.pos,i=new qh,a=new Uint32Array(e.buffer,r,2);r=e.pos+=a.byteLength,i.chunkLength=a[0],i.chunkType=a[1],i.chunkData=new Uint8Array(e.buffer,r,i.chunkLength);const o=new Uint8Array(i.chunkLength);for(let l=0;l<i.chunkLength;l++)o[l]=i.chunkData[l];return i.chunkData=o,e.pos+=i.chunkLength,i}}s(Fa,"format",Te.BIN);var Jh=Object.defineProperty,Zh=Object.getOwnPropertyDescriptor,$h=(n,t,e,r)=>{for(var i=r>1?void 0:r?Zh(t,e):t,a=n.length-1,o;a>=0;a--)(o=n[a])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&Jh(t,e,i),i};let Aa=class extends lt{constructor(){super();let n=new Be("PBRLItShader","PBRLItShader");n.setShaderEntry("VertMain","FragMain"),n.passType=Y.COLOR,this.addRenderPass(n);let t=n.shaderState;t.acceptShadow=!0,t.castShadow=!0,t.receiveEnv=!0,t.acceptGI=!0,t.useLight=!0,this.setDefine("USE_BRDF",!0),this.setDefine("USE_AO_R",!0),this.setDefine("USE_ROUGHNESS_G",!0),this.setDefine("USE_METALLIC_B",!0),this.setDefine("USE_ALPHA_A",!0),this.setDefault()}setDefault(){this.setUniformFloat("shadowBias",35e-5),this.setUniformVector4("transformUV1",new K(0,0,1,1)),this.setUniformVector4("transformUV2",new K(0,0,1,1)),this.setUniformColor("baseColor",new F(.75,.75,.75,1)),this.setUniformColor("emissiveColor",new F(0,0,0)),this.setUniformVector4("materialF0",new K(.04,.04,.04,1)),this.setUniformColor("specularColor",new F(.04,.04,.04)),this.setUniformFloat("envIntensity",1),this.setUniformFloat("normalScale",1),this.setUniformFloat("roughness",1),this.setUniformFloat("metallic",1),this.setUniformFloat("ao",1),this.setUniformFloat("roughness_min",0),this.setUniformFloat("roughness_max",1),this.setUniformFloat("metallic_min",0),this.setUniformFloat("metallic_max",1),this.setUniformFloat("emissiveIntensity",0),this.setUniformFloat("alphaCutoff",0),this.setUniformFloat("ior",1.5),this.setUniformFloat("clearcoatFactor",0),this.setUniformFloat("clearcoatRoughnessFactor",0),this.setUniformColor("clearcoatColor",new F(1,1,1)),this.setUniformFloat("clearcoatWeight",0),this.baseMap=y.res.whiteTexture,this.normalMap=y.res.normalTexture,this.maskMap=y.res.maskTexture}get baseMap(){return this.getDefaultColorShader().getTexture("baseMap")}set baseMap(n){this.getDefaultColorShader().setTexture("baseMap",n)}get baseColor(){return this.getDefaultColorShader().getUniform("baseColor")}set baseColor(n){this.getDefaultColorShader().setUniformColor("baseColor",n)}get normalMap(){return this.getDefaultColorShader().getTexture("normalMap")}set normalMap(n){this.getDefaultColorShader().setTexture("normalMap",n)}get doubleSide(){return this.getDefaultColorShader().doubleSide}set doubleSide(n){this.getDefaultColorShader().doubleSide=n}get alphaCutoff(){return this.getDefaultColorShader().shaderState.alphaCutoff}set alphaCutoff(n){this.getDefaultColorShader().setDefine("USE_ALPHACUT",!0),this.getDefaultColorShader().shaderState.alphaCutoff=n,this.getDefaultColorShader().setUniform("alphaCutoff",n)}get emissiveColor(){return this.getDefaultColorShader().getUniform("emissiveColor")}set emissiveColor(n){this.getDefaultColorShader().setUniform("emissiveColor",n)}get emissiveIntensity(){return this.getDefaultColorShader().getUniform("emissiveIntensity")}set emissiveIntensity(n){this.getDefaultColorShader().setUniform("emissiveIntensity",n)}get uvTransform_1(){return this.getDefaultColorShader().uniforms.transformUV1.vector4}set uvTransform_1(n){this.getDefaultColorShader().setUniform("transformUV1",n)}get uvTransform_2(){return this.getDefaultColorShader().uniforms.transformUV2.vector4}set uvTransform_2(n){this.getDefaultColorShader().setUniform("transformUV2",n)}get depthWriteEnabled(){return this.getDefaultColorShader().shaderState.depthWriteEnabled}set depthWriteEnabled(n){this.getDefaultColorShader().shaderState.depthWriteEnabled=n}get materialF0(){return this.getDefaultColorShader().uniforms.materialF0.vector4}set materialF0(n){this.getDefaultColorShader().setUniform("materialF0",n)}get specularColor(){return this.getDefaultColorShader().uniforms.specularColor.color}set specularColor(n){this.getDefaultColorShader().setUniform("specularColor",n)}get roughness(){return this.getDefaultColorShader().uniforms.roughness.value}set roughness(n){this.getDefaultColorShader().setUniform("roughness",n)}get metallic(){return this.getDefaultColorShader().uniforms.metallic.value}set metallic(n){this.getDefaultColorShader().setUniform("metallic",n)}get ao(){return this.getDefaultColorShader().uniforms.ao.value}set ao(n){this.getDefaultColorShader().setUniform("ao",n)}get metallic_min(){return this.getDefaultColorShader().uniforms.metallic_min.value}set metallic_min(n){this.getDefaultColorShader().setUniform("metallic_min",n)}get metallic_max(){return this.getDefaultColorShader().uniforms.metallic_max.value}set metallic_max(n){this.getDefaultColorShader().setUniform("metallic_max",n)}get roughness_min(){return this.getDefaultColorShader().uniforms.roughness_min.value}set roughness_min(n){this.getDefaultColorShader().setUniform("roughness_min",n)}get roughness_max(){return this.getDefaultColorShader().uniforms.roughness_max.value}set roughness_max(n){this.getDefaultColorShader().setUniform("roughness_max",n)}get normalScale(){return this.getDefaultColorShader().uniforms.normalScale.value}set normalScale(n){this.getDefaultColorShader().setUniform("normalScale",n)}get maskMap(){return this.getDefaultColorShader().textures.maskMap}set maskMap(n){this.getDefaultColorShader().setDefine("USE_MR",!0),this.getDefaultColorShader().setTexture("maskMap",n)}set aoMap(n){n&&(this.getDefaultColorShader().setTexture("aoMap",n),n!=y.res.whiteTexture&&this.getDefaultColorShader().setDefine("USE_AOTEX",!0))}get aoMap(){return this.getDefaultColorShader().textures.aoMap}set clearCoatRoughnessMap(n){n&&(console.log("USE_CLEARCOAT_ROUGHNESS"),this.getDefaultColorShader().setTexture("clearCoatRoughnessMap",n),this.getDefaultColorShader().setDefine("USE_CLEARCOAT_ROUGHNESS",!0))}get clearCoatRoughnessMap(){return this.getDefaultColorShader().textures.clearCoatRoughnessMap}get brdfLUT(){return this.getDefaultColorShader().textures.brdfLUT}set brdfLUT(n){this.getDefaultColorShader().setTexture("brdfLUT",n),this.getDefaultColorShader().setTexture("brdflutMap",n)}get emissiveMap(){return this.getDefaultColorShader().textures.emissiveMap}set emissiveMap(n){this.getDefaultColorShader().setTexture("emissiveMap",n)}set envIntensity(n){this.getDefaultColorShader().setUniformFloat("envIntensity",n)}get envIntensity(){return this.getDefaultColorShader().uniforms.envIntensity.value}set ior(n){this.getDefaultColorShader().setUniformFloat("ior",n)}get ior(){return this.getDefaultColorShader().uniforms.ior.value}useCleanCoat(){this.getDefaultColorShader().setDefine("USE_CLEARCOAT",!0)}set clearcoatFactor(n){this.getDefaultColorShader().setUniformFloat("clearcoatFactor",n),this.useCleanCoat()}get clearcoatFactor(){return this.getDefaultColorShader().uniforms.clearcoatFactor.value}set clearcoatRoughnessFactor(n){this.getDefaultColorShader().setUniformFloat("clearcoatRoughnessFactor",n),this.useCleanCoat()}get clearcoatRoughnessFactor(){return this.getDefaultColorShader().uniforms.clearcoatRoughnessFactor.value}set clearcoatWeight(n){this.getDefaultColorShader().setUniformFloat("clearcoatWeight",n),this.useCleanCoat()}get clearcoatWeight(){return this.getDefaultColorShader().uniforms.clearcoatWeight.value}set clearcoatColor(n){this.getDefaultColorShader().setUniformColor("clearcoatColor",n),this.useCleanCoat()}get clearcoatColor(){return this.getDefaultColorShader().uniforms.clearcoatColor.color}};Aa=$h([or],Aa);class ui extends qt{constructor(){super();let t=new Aa;this.shader=t}clone(){let t=new ui,e=t.shader.getDefaultColorShader(),r=this.shader.getDefaultColorShader();return e.defineValue={...r.defineValue},e.setUniform("shadowBias",r.getUniform("shadowBias")),e.setUniform("transformUV1",r.getUniform("transformUV1")),e.setUniform("transformUV2",r.getUniform("transformUV2")),e.setUniform("baseColor",r.getUniform("baseColor")),e.setUniform("specularColor",r.getUniform("specularColor")),e.setUniform("emissiveColor",r.getUniform("emissiveColor")),e.setUniform("materialF0",r.getUniform("materialF0")),e.setUniform("envIntensity",r.getUniform("envIntensity")),e.setUniform("normalScale",r.getUniform("normalScale")),e.setUniform("roughness",r.getUniform("roughness")),e.setUniform("metallic",r.getUniform("metallic")),e.setUniform("ao",r.getUniform("ao")),e.setUniform("roughness_min",r.getUniform("roughness_min")),e.setUniform("roughness_max",r.getUniform("roughness_max")),e.setUniform("metallic_min",r.getUniform("metallic_min")),e.setUniform("metallic_max",r.getUniform("metallic_max")),e.setUniform("emissiveIntensity",r.getUniform("emissiveIntensity")),e.setUniform("alphaCutoff",r.getUniform("alphaCutoff")),e.setUniform("ior",r.getUniform("ior")),e.setUniform("clearcoatFactor",r.getUniform("clearcoatFactor")),e.setUniform("clearcoatRoughnessFactor",r.getUniform("clearcoatRoughnessFactor")),e.setUniform("clearcoatColor",r.getUniform("clearcoatColor")),e.setUniform("clearcoatWeight",r.getUniform("clearcoatWeight")),e.setTexture("baseMap",r.getTexture("baseMap")),e.setTexture("normalMap",r.getTexture("normalMap")),e.setTexture("emissiveMap",r.getTexture("emissiveMap")),e.setTexture("aoMap",r.getTexture("aoMap")),e.setTexture("maskMap",r.getTexture("maskMap")),t}set baseMap(t){this.shader.setTexture("baseMap",t)}get baseMap(){return this.shader.getTexture("baseMap")}set maskMap(t){this.shader.setTexture("maskMap",t)}get maskMap(){return this.shader.getTexture("maskMap")}set normalMap(t){this.shader.setTexture("normalMap",t)}get normalMap(){return this.shader.getTexture("normalMap")}set emissiveMap(t){this.shader.setTexture("emissiveMap",t)}get emissiveMap(){return this.shader.getTexture("emissiveMap")}set aoMap(t){this.shader.setTexture("aoMap",t)}get aoMap(){return this.shader.getTexture("aoMap")}set clearCoatRoughnessMap(t){this.shader.setTexture("clearCoatRoughnessMap",t),this.shader.setDefine("USE_CLEARCOAT",!0),this.shader.setDefine("USE_CLEARCOAT_ROUGHNESS",!0)}get clearCoatRoughnessMap(){return this.shader.getTexture("clearCoatRoughnessMap")}set clearcoatColor(t){this.shader.setUniformColor("clearcoatColor",t),this.shader.setDefine("USE_CLEARCOAT",!0)}get clearcoatColor(){return this.shader.getUniformColor("clearcoatColor")}set clearcoatWeight(t){this.shader.setUniformFloat("clearcoatWeight",t),this.shader.setDefine("USE_CLEARCOAT",!0)}get clearcoatWeight(){return this.shader.getUniformFloat("clearcoatWeight")}set clearcoatFactor(t){this.shader.setUniformFloat("clearcoatFactor",t),this.shader.setDefine("USE_CLEARCOAT",!0)}get clearcoatFactor(){return this.shader.getUniformFloat("clearcoatFactor")}set clearcoatRoughnessFactor(t){this.shader.setUniformFloat("clearcoatRoughnessFactor",t),this.shader.setDefine("USE_CLEARCOAT",!0)}get clearcoatRoughnessFactor(){return this.shader.getUniformFloat("clearcoatRoughnessFactor")}set alphaCutoff(t){this.shader.setUniform("alphaCutoff",t)}get alphaCutoff(){return this.shader.getUniform("alphaCutoff")}set baseColor(t){this.shader.setUniformColor("baseColor",t)}get baseColor(){return this.shader.getUniformColor("baseColor")}get roughness(){return this.shader.getUniformFloat("roughness")}set roughness(t){this.shader.setUniformFloat("roughness",t)}get metallic(){return this.shader.getUniformFloat("metallic")}set metallic(t){this.shader.setUniformFloat("metallic",t)}get emissiveColor(){return this.shader.getUniformColor("emissiveColor")}set emissiveColor(t){this.shader.setUniformColor("emissiveColor",t)}get emissiveIntensity(){return this.shader.getUniformFloat("emissiveIntensity")}set emissiveIntensity(t){this.shader.setUniformFloat("emissiveIntensity",t)}get ao(){return this.shader.getUniform("ao")}set ao(t){this.shader.setUniform("ao",t)}}class Vs extends ze{constructor(){super(...arguments);s(this,"textData","");s(this,"source_vertices");s(this,"source_normals");s(this,"source_tangents");s(this,"source_textureCoords");s(this,"matLibs");s(this,"geometrys");s(this,"activeGeo");s(this,"facesMaterialsIndex");s(this,"mtl");s(this,"mtlUrl")}async parseString(e){return this.source_vertices=[],this.source_normals=[],this.source_tangents=[],this.source_textureCoords=[],this.matLibs={},this.geometrys={},this.textData=e,await Promise.all([this.parserOBJ(),this.loadMTL()]),this.parser_mesh(),"null"}applyVector2(e,r,i){r[e]&&r[e].length>0?(i.push(r[e][0]),i.push(r[e][1])):(i.push(0),i.push(0))}applyVector3(e,r,i){i.push(r[e][0]),i.push(r[e][1]),i.push(r[e][2])}applyVector4(e,r,i){i.push(r[e][0]),i.push(r[e][1]),i.push(r[e][2]),i.push(r[e][3])}async loadMTL(){let e=await new Ye().loadTxt(this.baseUrl+this.mtlUrl),r=e.data,i,a=r.split(`\r
`);for(let h=0;h<a.length;h++){let u=a[h];var o=u.indexOf("#");o!=-1&&(u=u.substring(0,o)),u=u.trim();var l=u.split(/\s+/);l[0]==="newmtl"?(i={name:l[1]},this.matLibs[l[1]]=i):l[0].indexOf("map_")!=-1?(i[l[0]]=l[1],i.textures||(i.textures=[l[l.length-1]]),i.textures.push(l[l.length-1])):l.length==2?i[l[0]]=Number(l[1]):l.length==3?i[l[0]]=[Number(l[1]),Number(l[2])]:l.length==4&&(i[l[0]]=[Number(l[1]),Number(l[2]),Number(l[3])])}for(const h in this.matLibs){const u=this.matLibs[h];if(u.textures&&u.textures.length>0)for(let c=0;c<u.textures.length;c++){const d=Ne.normalizePath(this.baseUrl+u.textures[c]);await y.res.loadTexture(d)}}return e=null,!0}async load_textures(){}parserLine(e){var r=e.indexOf("#");if(r!=-1){if(e.indexOf("# object")!=-1){var i=e.split(/\s+/);let p=i[1],A=i[2];this.activeGeo={type:p,name:A[1],source_mat:"",source_faces:[]},this.geometrys[A]=this.activeGeo}e=e.substring(0,r)}e=e.trim();var i=e.split(/\s+/);if(i[0]==="v"){var a=[Number(i[1]),Number(i[2]),Number(i[3]),i[4]?1:Number(i[4])];this.source_vertices.push(a)}else if(i[0]==="vt"){var o=[Number(i[1]),Number(i[2]),i[3]?1:Number(i[3])];this.source_textureCoords.push(o)}else if(i[0]==="vn"){var l=[Number(i[1]),Number(i[2]),Number(i[3])];this.source_normals.push(l)}else if(i[0]==="f"){for(var h={indices:[],texture:[],normal:[]},u=1;u<i.length;++u){var c=i[u].indexOf("//"),d=i[u].split(/\W+/);c>0?(h.indices.push(d[0]),h.normal.push(d[1])):d.length===1?h.indices.push(d[0]):d.length===2?(h.indices.push(d[0]),h.texture.push(d[1])):d.length===3&&(h.indices.push(d[0]),h.texture.push(d[1]),h.normal.push(d[2]))}this.activeGeo.source_faces.push(h)}else i[0]==="usemtl"?this.activeGeo.source_mat=i[1]:i[0]==="mtllib"&&(this.mtlUrl=i[1])}async parserOBJ(){let e=this.textData.split(`\r
`);for(let r=0;r<e.length;r++){const i=e[r];this.parserLine(i)}return this.textData="",!0}async parser_mesh(){for(const e in this.geometrys){const r=this.geometrys[e];r.vertex_arr=[],r.normal_arr=[],r.uv_arr=[],r.indeice_arr=[];let i=0;for(let o=0;o<r.source_faces.length;o++){const l=r.source_faces[o];let h=parseInt(l.indices[0])-1,u=parseInt(l.indices[1])-1,c=parseInt(l.indices[2])-1,d=parseInt(l.normal[0])-1,f=parseInt(l.normal[1])-1,p=parseInt(l.normal[2])-1,A=parseInt(l.texture[0])-1,x=parseInt(l.texture[1])-1,C=parseInt(l.texture[2])-1;if(this.applyVector3(h,this.source_vertices,r.vertex_arr),this.applyVector3(d,this.source_normals,r.normal_arr),this.applyVector2(A,this.source_textureCoords,r.uv_arr),r.indeice_arr[i]=i++,this.applyVector3(u,this.source_vertices,r.vertex_arr),this.applyVector3(f,this.source_normals,r.normal_arr),this.applyVector2(x,this.source_textureCoords,r.uv_arr),r.indeice_arr[i]=i++,this.applyVector3(c,this.source_vertices,r.vertex_arr),this.applyVector3(p,this.source_normals,r.normal_arr),this.applyVector2(C,this.source_textureCoords,r.uv_arr),r.indeice_arr[i]=i++,l.indices.length>3){let v=parseInt(l.indices[3])-1,_=parseInt(l.normal[3])-1,S=parseInt(l.texture[3])-1;this.applyVector3(h,this.source_vertices,r.vertex_arr),this.applyVector3(d,this.source_normals,r.normal_arr),this.applyVector2(A,this.source_textureCoords,r.uv_arr),r.indeice_arr[i]=i++,this.applyVector3(c,this.source_vertices,r.vertex_arr),this.applyVector3(p,this.source_normals,r.normal_arr),this.applyVector2(C,this.source_textureCoords,r.uv_arr),r.indeice_arr[i]=i++,this.applyVector3(v,this.source_vertices,r.vertex_arr),this.applyVector3(_,this.source_normals,r.normal_arr),this.applyVector2(S,this.source_textureCoords,r.uv_arr),r.indeice_arr[i]=i++}}let a=new ee;for(const o in this.geometrys){const l=this.geometrys[o];let h=new vt;h.setIndices(new Uint32Array(l.indeice_arr)),h.setAttribute(R.position,new Float32Array(l.vertex_arr)),h.setAttribute(R.normal,new Float32Array(l.normal_arr)),h.setAttribute(R.uv,new Float32Array(l.uv_arr)),h.setAttribute(R.TEXCOORD_1,new Float32Array(l.uv_arr)),h.addSubGeometry({indexStart:0,indexCount:l.indeice_arr.length,vertexStart:0,vertexCount:0,firstStart:0,index:0,topology:0});let u=new ui,c=this.matLibs[l.source_mat];u.baseMap=y.res.getTexture(Ne.normalizePath(this.baseUrl+c.map_Kd));let d=new ee,f=d.addComponent(se);f.geometry=h,f.material=u,a.addChild(d)}this.data=a}}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}}s(Vs,"format",Te.TEXT);let eu=`
    struct ImageSize {
        srcWidth: i32,
            srcHeight : i32,
                dstWidth : i32,
                    dstHeight : i32,
    };

    @group(0) @binding(0) var<uniform>size : ImageSize;
    @group(0) @binding(1) var inputTexture: texture_2d<f32>;
    @group(0) @binding(2) var outputTexture: texture_storage_2d<rgba8unorm, write>;

    @compute @workgroup_size(8, 8, 1)
    fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
        var uv: vec2<f32> = vec2<f32>(f32(GlobalInvocationID.x) / f32(size.dstWidth), f32(GlobalInvocationID.y) / f32(size.dstHeight));
        uv = uv * vec2<f32>(f32(size.srcWidth), f32(size.srcHeight));
        var dstId: vec2<i32> = vec2<i32>(i32(GlobalInvocationID.x), i32(GlobalInvocationID.y));
        var srcId: vec2<i32> = vec2<i32>(i32(GlobalInvocationID.x * 2u), i32(GlobalInvocationID.y * 2u));
        textureStore(outputTexture, dstId, textureLoad(inputTexture, srcId, 0));
    }
`,tu=`
    struct ImageSize {
        srcWidth: i32,
            srcHeight : i32,
                dstWidth : i32,
                    dstHeight : i32,
    };

    @group(0) @binding(0) var<uniform>size : ImageSize;
    @group(0) @binding(1) var inputTexture: texture_2d<f32>;
    @group(0) @binding(2) var outputTexture: texture_storage_2d<rgba8unorm, write>;

    fn repeat_i32(id: i32, max: i32) -> i32 {
        var ret = id;
        if (id < 0) {
            ret = max + id;
        }
        if (id >= max) {
            ret = id - max;
        }
        return ret;
    }

    fn clamp_i32(id: i32, max: i32) -> i32 {
        var ret = id;
        if (id < 0) {
            ret = 0;
        }
        if (id >= max) {
            ret = max - 1;
        }
        return ret;
    }

    fn blur(idx: u32) -> vec4 < f32 > {
        var id: vec2<i32>;
        id.y = i32(idx) / size.srcWidth;
        id.x = i32(idx) - i32(id.y) * size.srcWidth;
        var _BlurSpread: i32 = 1;
        var result = vec4<f32>(0.0, 0.0, 0.0, 0.0);
        let g: array < f32, 3u > = array<f32, 3u > (0.4026, 0.2442, 0.0545);
        var uv: vec2<i32>;
        for(var h: i32 = 0; h< 5; h = h + 1) {
        let offsetU: i32 = (h - 2) * _BlurSpread;
        uv.x = id.x + offsetU;
        uv.x = clamp_i32(uv.x, size.srcWidth);
        for (var v: i32 = 0; v < 5; v = v + 1) {
            let offsetV: i32 = (v - 2) * _BlurSpread;
            uv.y = id.y + offsetV;
            uv.y = clamp(uv.y, 0, size.srcHeight);
            let weightU: i32 = abs(h - 2);
            let weightV: i32 = abs(v - 2);
            let resultWeight: f32 = g[weightU] * g[weightV];
            var colorf32: vec4<f32> = textureLoad(inputTexture, uv, 0);
            let sampleColor: vec4<f32> = vec4<f32>(colorf32 * resultWeight);
            result = result + sampleColor;
        }
    }

    return result;
    }

    @compute @workgroup_size(8, 8, 1)
    fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
        var uv: vec2<f32> = vec2<f32>(f32(GlobalInvocationID.x) / f32(size.dstWidth), f32(GlobalInvocationID.y) / f32(size.dstHeight));
        uv = uv * vec2<f32>(f32(size.srcWidth), f32(size.srcHeight));
        let srcIdx = i32(uv.y) * size.srcWidth + i32(uv.x);
        var dstId: vec2<i32> = vec2<i32>(i32(GlobalInvocationID.x), i32(GlobalInvocationID.y));
        textureStore(outputTexture, dstId, blur(u32(srcIdx)));
    }
`;class ru{static blurImageFromTexture(t,e,r,i){const a=w.device;let o=i?tu:eu;const l=a.createComputePipeline({layout:"auto",compute:{module:a.createShaderModule({code:o}),entryPoint:"main"}}),h=4*4,u=a.createBuffer({size:h,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});a.queue.writeBuffer(u,0,new Uint32Array([t.width,t.height,e,r]));const c=a.createTexture({size:[e,r,1],mipLevelCount:1,format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC|GPUTextureUsage.RENDER_ATTACHMENT,label:"blurImageFromTexture"});let d=[{binding:0,resource:{buffer:u,size:4*4}},{binding:1,resource:t.gpuTexture.createView({format:"rgba8unorm",dimension:"2d",baseMipLevel:0,mipLevelCount:1})},{binding:2,resource:c.createView({format:"rgba8unorm",dimension:"2d",baseMipLevel:0,mipLevelCount:1})}];const f=a.createBindGroup({layout:l.getBindGroupLayout(0),entries:d}),p=b.beginCommandEncoder(),A=p.beginComputePass();return A.setPipeline(l),A.setBindGroup(0,f),A.dispatchWorkgroups(Math.floor(e/8),Math.floor(r/8)),A.end(),b.endCommandEncoder(p),u.destroy(),c}}class ka extends Ge{constructor(){super(4,4);s(this,"width",4);s(this,"height",4);s(this,"depthOrArrayLayers",6);s(this,"visibility",GPUShaderStage.FRAGMENT);s(this,"textureBindingLayout",{viewDimension:"cube",multisampled:!1});s(this,"samplerBindingLayout",{type:"filtering"});this.addressModeU=nt.clamp_to_edge,this.addressModeV=nt.clamp_to_edge,this.addressModeW=nt.clamp_to_edge,this.magFilter=this.minFilter="linear",this.mipmapFilter="linear",this.visibility=GPUShaderStage.FRAGMENT}createTextureDescriptor(e,r,i,a,o=GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT,l=1){this.width=e,this.height=r,this.format=a,this.usage=o,this.textureDescriptor={size:{width:e,height:r,depthOrArrayLayers:6},mipLevelCount:i,format:a,usage:o,dimension:"2d"},l>1?this.viewDescriptor={dimension:"cube-array"}:this.viewDescriptor={dimension:this.textureBindingLayout.viewDimension}}}const fr=class fr{static createFace(t,e,r,i){const a=w.device;this.pipeline==null&&(this.pipeline=a.createComputePipeline({layout:"auto",compute:{module:a.createShaderModule({code:fr.createCube}),entryPoint:"main"}}));const o=this.pipeline,l=4*4;this.configBuffer||(this.configBuffer=a.createBuffer({size:l,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),a.queue.writeBuffer(this.configBuffer,0,new Uint32Array([t,0,0,0])),this.blurSettingBuffer||(this.blurSettingBuffer=a.createBuffer({size:l,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),a.queue.writeBuffer(this.blurSettingBuffer,0,new Float32Array([0,0,0,0]));let h=[{binding:0,resource:{buffer:this.configBuffer,size:4*4}},{binding:1,resource:r.getGPUView()},{binding:2,resource:i.getGPUView()}];const u=a.createBindGroup({layout:o.getBindGroupLayout(0),entries:h}),c=b.beginCommandEncoder(),d=c.beginComputePass();d.setPipeline(o),d.setBindGroup(0,u),d.dispatchWorkgroups(e/8,e/8),d.end(),b.endCommandEncoder(c)}};s(fr,"createCube",`

struct SettingUniform {
  faceIndex : i32,
  srcHeight : i32,
  dstWidth : i32,
  dstHeight : i32
};

@group(0) @binding(0) var<uniform> settingUniform : SettingUniform;
@group(0) @binding(1) var inputTex : texture_2d<f32>;
@group(0) @binding(2) var outTex : texture_storage_2d<rgba8unorm, write>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
  let coord = vec2<i32>(GlobalInvocationID.xy);
  
  let outTexSize = textureDimensions(outTex).xy;
  let outTexel = 1.0 / vec2<f32>(outTexSize - 1);
  
  let uv_0 = vec2<f32>(coord) * outTexel;
  var oc = samplePixel(settingUniform.faceIndex, uv_0);
  textureStore(outTex, coord, oc);
}

fn samplePixel(face:i32, uv01:vec2<f32>) -> vec4<f32> {
    let rectangle_v2_f32 = round(vec2<f32>(0.25, 0.33333) * vec2<f32>(textureDimensions(inputTex).xy));
    let rectangle = vec2<i32>(rectangle_v2_f32);
    
    var offsetIndex = vec2<i32>(0);
    if(face == 0){
        offsetIndex.x = 2;
        offsetIndex.y = 1;
    }else if(face == 1){
        offsetIndex.x = 0;
        offsetIndex.y = 1;
    }else if(face == 2){
        offsetIndex.x = 1;
        offsetIndex.y = 0;
    }else if(face == 3){
        offsetIndex.x = 1;
        offsetIndex.y = 2;
    }else if(face == 4){
        offsetIndex.x = 1;
        offsetIndex.y = 1;
    }else if(face == 5){
        offsetIndex.x = 3;
        offsetIndex.y = 1;
    }
    
    let coordOffset = rectangle * offsetIndex;
    let coordIndex = vec2<i32>(vec2<f32>(rectangle - 1) * uv01);
    var oc = textureLoad(inputTex, coordOffset + coordIndex, 0);
    return oc;
}
`),s(fr,"configBuffer",null),s(fr,"blurSettingBuffer",null),s(fr,"pipeline");let ma=fr;class gs extends ka{constructor(){super();s(this,"_images");s(this,"_url");this.useMipmap=!0}generateImages(e){let r=w.device;this.width=this.height=32,"width"in e[0]&&(this.width=this.height=e[0].width);let i=Math.min(this.width,this.height);for(this.mipmapCount=1;i>16;)i/=2,this.mipmapCount++;this.textureBindingLayout.viewDimension="cube",this.samplerBindingLayout.type="filtering",this.createTextureDescriptor(this.width,this.height,this.mipmapCount,this.format),this.textureDescriptor.size={width:this.width,height:this.height,depthOrArrayLayers:6},this.textureDescriptor.dimension="2d",this.gpuTexture=this.getGPUTexture();let a=[],o=a,l=this.width,h=this.height;if(e[0]instanceof Ge){for(let u=0;u<6;u++){let c=e[u];a[u]=c.getGPUTexture()}this.uploadMipmapGPUTexture(0,this.width,this.width,a)}else{this.uploadBaseImages(this.width,e);for(let u=0;u<6;u++){let c=new sr(!1);c.format=this.format,c.source=e[u],a[u]=c.getGPUTexture()}}for(let u=1;u<this.mipmapCount;u++){o=a,a=[];let c={width:l,height:h,gpuTexture:null};l=l/2,h=h/2;for(let d=0;d<6;d++)c.gpuTexture=o[d],a[d]=ru.blurImageFromTexture(c,l,h,!1);this.uploadMipmapGPUTexture(u,l,h,a)}this.gpuSampler=r.createSampler(this)}uploadBaseImages(e,r){let i=w.device;const a=b.beginCommandEncoder();for(let o=0;o<6;o++)i.queue.copyExternalImageToTexture({source:r[o]},{texture:this.gpuTexture,mipLevel:0,origin:{x:0,y:0,z:o}},{width:e,height:e,depthOrArrayLayers:1});b.endCommandEncoder(a)}uploadMipmapGPUTexture(e,r,i,a){const o=b.beginCommandEncoder();for(let l=0;l<6;l++)o.copyTextureToTexture({texture:a[l],mipLevel:0,origin:{x:0,y:0,z:0}},{texture:this.gpuTexture,mipLevel:e,origin:{x:0,y:0,z:l}},{width:r,height:i,depthOrArrayLayers:1});b.endCommandEncoder(o)}get images(){return this._images}set images(e){if(this._images=e,this._images[0]instanceof HTMLImageElement){let r=function(l,h){h.decode().then(async()=>{i[l]=await createImageBitmap(h),a--,a==0&&o.generateImages(i)})},i=[],a=6,o=this;for(let l=0;l<6;l++)r(l,this._images[l])}else(this._images instanceof HTMLCanvasElement||this._images instanceof ImageBitmap)&&this.generateImages(this._images)}async load(e){this._url=e;let r=6,i=[];this.format=z.rgba8unorm;let a=this;async function o(l,h){const u=document.createElement("img");if(u.src=h,u.setAttribute("crossOrigin",""),await u.decode(),i[l]=await createImageBitmap(u),r--,r==0)return a.generateImages(i),!0}for(let l=0;l<6;l++)await o(l,e[l]);return!0}async loadStd(e){this._url=e,this.format=z.rgba8unorm;const r=document.createElement("img");r.src=e,r.setAttribute("crossOrigin",""),await r.decode();let i=new sr(!1);i.name=Ne.getURLName(e),i.format="rgba8unorm",i.source=await createImageBitmap(r);let a=Math.round(Math.log2(i.width/4));a=Math.pow(2,a),this.width=this.height=a;let o=[];for(let l=0;l<6;l++){let h=new jt(a,a,this.format,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.TEXTURE_BINDING);h.name="face "+l,o.push(h),ma.createFace(l,this.width,i,h)}return this.generateImages(o),!0}}var iu=(n=>(n[n.Left=0]="Left",n[n.Right=1]="Right",n[n.Bottom=2]="Bottom",n[n.Top=3]="Top",n[n.Back=4]="Back",n[n.Front=5]="Front",n))(iu||{});class Hs{static getRotationToFace(t){let e=X.identity().clone(),r=new g,i=new V().identity(),a=new g;switch(t){case 3:r.set(0,-1,0),a.set(0,0,-1);break;case 2:r.set(0,1,0),a.set(0,0,1);break;case 1:r.set(1,0,0),a.set(0,1,0);break;case 0:r.set(-1,0,0),a.set(0,1,0);break;case 4:r.set(0,0,-1),a.set(0,1,0);break;case 5:return X.identity()}return i.lookAt(new g,r,a),e.setFromRotationMatrix(i),e}}let au=`
  struct ImageSize {
    srcWidth : i32,
    srcHeight : i32,
    dstWidth : i32,
    dstHeight : i32
  };

  @group(0) @binding(0) var<uniform> size : ImageSize;
  @group(0) @binding(1) var<storage,read_write> faceRotation: array<vec4<f32>>;
  @group(0) @binding(2) var inputTexSampler : sampler;
  @group(0) @binding(3) var inputTex : texture_2d<f32>;

  @group(1) @binding(0) var outputBuffer0 : texture_storage_2d_array<rgba16float, write>;

  fn SampleSphericalMap(v: vec3<f32>) -> vec2<f32> {
      var uv:vec2<f32> = vec2<f32>(atan2(v.z, v.x), asin(v.y));
      //uv = (uv * (vec2<f32>(0.1590999960899353, 0.3183000087738037) + vec2<f32>(0.0010000000474974513)));
      uv = uv * vec2<f32>(0.1590999960899353, 0.3183000087738037);
      uv = uv + vec2<f32>(0.5);
      uv = clamp(uv, vec2<f32>(0.0), vec2<f32>(1.0));
      return uv;
  }


  fn applyQuaternion(position:vec3<f32>, q:vec4<f32>) -> vec3<f32>{
      let x:f32 = position.x;
      let y:f32 = position.y;
      let z:f32 = position.z;

      let qx:f32 = q.x;
      let qy:f32 = q.y;
      let qz:f32 = q.z;
      let qw:f32 = q.w;

      let ix:f32 = qw * x + qy * z - qz * y;
      let iy:f32 = qw * y + qz * x - qx * z;
      let iz:f32 = qw * z + qx * y - qy * x;
      let iw:f32 = -qx * x - qy * y - qz * z;

      var ret: vec3<f32>;
      ret.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
      ret.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
      ret.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

      return ret;
  }

  fn convertIdToDir3(uv_i32:vec2<i32>, quaternion:vec4<f32>) -> vec3<f32>{
      var uv_f32:vec2<f32> = vec2<f32>(uv_i32.xy);
      var halfSize:f32 = f32(size.dstWidth / 2) - 0.5;
      var worldDirection:vec3<f32> = vec3<f32>(uv_f32.x - halfSize, uv_f32.y - halfSize, -halfSize);
      worldDirection = normalize(worldDirection);
      worldDirection = applyQuaternion(worldDirection, quaternion);
      return worldDirection;
  }

  @compute @workgroup_size(8, 8, 1)
  fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
    let coord = vec2<i32>(GlobalInvocationID.xy);
    let quaternion = faceRotation[GlobalInvocationID.z];
    var worldDirection:vec3<f32> = convertIdToDir3(coord, quaternion);
    let uv_f32:vec2<f32> = SampleSphericalMap(worldDirection);
    let oc = textureSampleLevel(inputTex, inputTexSampler, uv_f32 , 0.0);
    textureStore(outputBuffer0, coord, i32(GlobalInvocationID.z), oc);
  }
`,su=`
  struct ImageSize {
    srcWidth : i32,
    srcHeight : i32,
    dstWidth : i32,
    dstHeight : i32
  };

  @group(0) @binding(0) var<uniform> size : ImageSize;
  @group(0) @binding(1) var<storage, read> tex_in: array<vec4<f32>>;
  @group(0) @binding(2) var outputBuffer : texture_storage_2d<rgba16float, write>;

  @compute @workgroup_size(8, 8, 1)
  fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
    let fragCoord = vec2<i32>(i32(GlobalInvocationID.x), i32(GlobalInvocationID.y));
    var oc:vec4<f32> = tex_in[fragCoord.y * size.srcWidth + fragCoord.x] / 256.0;
    var e = pow(2.0, oc.w * 255.0 - 128.0);
    oc = oc * e;
    oc = scaleByThreshold(oc, 40.0);
    textureStore(outputBuffer, fragCoord , vec4<f32>(oc.xyz, 1.0) );
  }

  fn scaleByThreshold(color:vec4<f32>, threshold:f32) -> vec4<f32>{
    var oc = color;
    let brightness = length(vec3<f32>(oc.xyz));
    var scale = brightness / threshold;
    if(scale > 1.0){
        scale = 1.0 / pow(scale, 0.7);
        oc = oc * scale;
    }
    oc.a = 1.0;
    return oc;
  }
`;const Se=class Se{static convertRGBE2RGBA(t,e){const r=w.device,i=r.createComputePipeline({layout:"auto",compute:{module:r.createShaderModule({code:su}),entryPoint:"main"}}),a=r.createBuffer({size:4*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});r.queue.writeBuffer(a,0,new Uint32Array([t.width,t.height,t.width,t.height]));const o=r.createBuffer({size:e.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});r.queue.writeBuffer(o,0,e);let l=[{binding:0,resource:{buffer:a,size:4*4}},{binding:1,resource:{buffer:o,size:e.byteLength}},{binding:2,resource:t.getGPUView()}];const h=r.createBindGroup({layout:i.getBindGroupLayout(0),entries:l}),u=b.beginCommandEncoder(),c=u.beginComputePass();c.setPipeline(i),c.setBindGroup(0,h),c.dispatchWorkgroups(Math.floor(t.width/8),Math.floor(t.height/8)),c.end(),b.endCommandEncoder(u),a.destroy()}static makeTextureCube(t,e,r){const i=w.device;Se.makeFaceTexturePipeline||(Se.makeFaceTexturePipeline=i.createComputePipeline({layout:"auto",compute:{module:i.createShaderModule({code:au}),entryPoint:"main"}}));const a=Se.makeFaceTexturePipeline,o=4*4;Se.configBuffer||(Se.configBuffer=i.createBuffer({size:o,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),i.queue.writeBuffer(Se.configBuffer,0,new Uint32Array([t.width,t.height,e,e]));const l=4*6;if(!Se.quaternionBuffer){Se.quaternionBuffer=i.createBuffer({size:l*4*6,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});let A=new Float32Array(4*6);for(let x=0;x<6;x++){let C=Hs.getRotationToFace(x);A[x*4+0]=C.x,A[x*4+1]=C.y,A[x*4+2]=C.z,A[x*4+3]=C.w}i.queue.writeBuffer(Se.quaternionBuffer,0,A)}let h=[{binding:0,resource:{buffer:Se.configBuffer,size:4*4}},{binding:1,resource:{buffer:Se.quaternionBuffer,size:l*4}},{binding:2,resource:t.gpuSampler},{binding:3,resource:t.getGPUView()}],u=[{binding:0,resource:r}];const c=i.createBindGroup({layout:a.getBindGroupLayout(0),entries:h}),d=i.createBindGroup({layout:a.getBindGroupLayout(1),entries:u}),f=b.beginCommandEncoder(),p=f.beginComputePass();p.setPipeline(a),p.setBindGroup(0,c),p.setBindGroup(1,d),p.dispatchWorkgroups(e/8,e/8,6),p.end(),b.endCommandEncoder(f)}};s(Se,"makeFaceTexturePipeline"),s(Se,"configBuffer"),s(Se,"quaternionBuffer");let ni=Se;class Ys extends Ge{constructor(){super(32,32,null),this.isHDRTexture=!0}create(t=32,e=32,r=null,i=!0){this.width=t,this.height=e;let a=w.device;const o=t*4*2;let l=r;this.format=z.rgba16float,this.useMipmap=i,this.updateTextureDescription(),this.updateGPUTexture();const h=a.createBuffer({size:l.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});a.queue.writeBuffer(h,0,l);const u=b.beginCommandEncoder();return u.copyBufferToTexture({buffer:h,bytesPerRow:o},{texture:this.getGPUTexture()},{width:t,height:e,depthOrArrayLayers:1}),b.endCommandEncoder(u),this.useMipmap||(this.samplerBindingLayout.type="filtering",this.textureBindingLayout.sampleType="float"),this.gpuSampler=a.createSampler(this),this}async load(t,e){return(await new Ye().load(t,Ks,e)).getHDRTexture()}}const Ws=new Float32Array(1),ou=new Int32Array(Ws.buffer);let gi=function(n){Ws[0]=n;const t=ou[0];let e=t>>16&32768,r=t>>12&2047;const i=t>>23&255;return i<103?e:i>142?(e|=31744,e|=(i==255?1:0)&&t&8388607,e):i<114?(r|=2048,e|=(r>>114-i)+(r>>113-i&1),e):(e|=i-112<<10|r>>1,e+=r&1,e)};var nu=(n=>(n[n.RGBE_RETURN_FAILURE=-1]="RGBE_RETURN_FAILURE",n[n.rgbe_read_error=1]="rgbe_read_error",n[n.rgbe_write_error=2]="rgbe_write_error",n[n.rgbe_format_error=3]="rgbe_format_error",n[n.rgbe_memory_error=4]="rgbe_memory_error",n))(nu||{});class ps{constructor(){s(this,"valid");s(this,"string");s(this,"comments");s(this,"programtype");s(this,"format");s(this,"gamma");s(this,"exposure");s(this,"width");s(this,"height")}}class Ks extends ze{constructor(){super(...arguments);s(this,"_rgbeArray");s(this,"_width");s(this,"_height");s(this,"_RGBE_RETURN_FAILURE",-1);s(this,"_parserType",z.rgba8uint)}parseBuffer(e){let r,i=new Uint8Array(e);i.pos=0;const a=this.paserHeader(i);if(a instanceof ps){const o=this._width=a.width,l=this._height=a.height;let h=this.parserPixel(i.subarray(i.pos),o,l);if(h instanceof Uint8Array){switch(this._rgbeArray=h,this._parserType){}return this.data=r,r}}return null}verification(){if(this.data&&this.data instanceof Ge||this._rgbeArray)return!0;throw new Error("Method not implemented.")}getTexture(){return this.data}getCubeTexture(){let e=this._width/4;return new va().createFromHDRData(e,{width:this._width,height:this._height,array:this._rgbeArray})}getHDRTexture(){return new Ys().create(this._width,this._height,this._rgbeArray)}parseError(e,r){switch(e){case 1:console.error("Read Error: "+(r||""));break;case 2:console.error("Write Error: "+(r||""));break;case 3:console.error("Bad File Format: "+(r||""));break;default:case 4:console.error("Error: "+(r||""))}return-1}parserBlock(e,r,i){r=r||1024;let a=e.pos,o=-1,l=0,h="",u=String.fromCharCode.apply(null,new Uint16Array(e.subarray(a,a+128)));const c=`
`;for(;0>(o=u.indexOf(c))&&l<r&&a<e.byteLength;)h+=u,l+=u.length,a+=128,u+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(a,a+128)));return-1<o?(i!==!1&&(e.pos+=l+o+1),h+u.slice(0,o)):!1}paserHeader(e){const r=/^#\?(\S+)/,i=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,a=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,o=/^\s*FORMAT=(\S+)\s*$/,l=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,h=new ps;let u,c;if(e.pos>=e.byteLength||!(u=this.parserBlock(e)))return this.parseError(1,"no header found");if(!(c=u.match(r)))return this.parseError(3,"bad initial token");const d=1,f=2,p=4;for(h.valid|=d,h.programtype=c[1],h.string+=u+`
`;u=this.parserBlock(e),u!==!1;){if(h.string+=u+`
`,u.charAt(0)==="#"){h.comments+=u+`
`;continue}if((c=u.match(i))&&(h.gamma=Math.floor(parseFloat(c[1])*10)/10),(c=u.match(a))&&(h.exposure=Math.floor(parseFloat(c[1])*10)/10),(c=u.match(o))&&(h.valid|=f,h.format=c[1]),(c=u.match(l))&&(h.valid|=p,h.height=parseInt(c[1],10),h.width=parseInt(c[2],10)),h.valid&f&&h.valid&p)break}return h.valid&f?h.valid&p?h:(this.parseError(3,"missing image size specifier"),null):(this.parseError(3,"missing format specifier"),null)}parserPixel(e,r,i){const a=r;if(a<8||a>32767||e[0]!==2||e[1]!==2||e[2]&128)return new Uint8Array(e);if(a!==(e[2]<<8|e[3]))return this.parseError(3,"wrong scanline width");const o=new Uint8Array(4*r*i);if(!o.length)return this.parseError(4,"unable to allocate buffer space");let l=0,h=0;const u=4*a,c=new Uint8Array(4),d=new Uint8Array(u);let f=i;for(;f>0&&h<e.byteLength;){if(h+4>e.byteLength)return this.parseError(1,"");if(c[0]=e[h++],c[1]=e[h++],c[2]=e[h++],c[3]=e[h++],c[0]!=2||c[1]!=2||(c[2]<<8|c[3])!=a)return this.parseError(3,"bad rgbe scanline format");let p=0,A;for(;p<u&&h<e.byteLength;){A=e[h++];const C=A>128;if(C&&(A-=128),A===0||p+A>u)return this.parseError(3,"bad scanline data");if(C){const v=e[h++];for(let _=0;_<A;_++)d[p++]=v}else d.set(e.subarray(h,h+A),p),p+=A,h+=A}const x=a;for(let C=0;C<x;C++){let v=0;o[l]=d[C+v],v+=a,o[l+1]=d[C+v],v+=a,o[l+2]=d[C+v],v+=a,o[l+3]=d[C+v],l+=4}f--}return o}rbgeToFloat(e,r,i,a){const o=e[r+3],l=Math.pow(2,o-128)/255;i[a+0]=e[r+0]*l,i[a+1]=e[r+1]*l,i[a+2]=e[r+2]*l,i[a+3]=1}rbgeToHalfFloat(e,r,i,a){const o=e[r+3],l=Math.pow(2,o-128)/255;i[a+0]=gi(e[r+0]*l),i[a+1]=gi(e[r+1]*l),i[a+2]=gi(e[r+2]*l),i[a+3]=gi(1)}}let lu=`
    struct ImageSize {
        srcWidth : i32,
        srcHeight : i32,
        dstWidth : i32,
        dstHeight : i32
    };
    
    @group(0) @binding(0) var<uniform> size : ImageSize;
    @group(0) @binding(1) var<storage,read_write> faceRotation: array<vec4<f32>>;
    @group(0) @binding(2) var inputTexSampler : sampler;
    @group(0) @binding(3) var inputTex : texture_2d<f32>;
    
    @group(1) @binding(0) var<uniform> blurSetting : vec4<f32>;
    @group(1) @binding(1) var outputBuffer0 : texture_storage_2d_array<rgba16float, write>;
    
    var<private> PI: f32 = 3.14159265359;
    
    fn applyQuaternion(position:vec3<f32>, q:vec4<f32>) -> vec3<f32>{
        let x:f32 = position.x;
        let y:f32 = position.y;
        let z:f32 = position.z;
    
        let qx:f32 = q.x;
        let qy:f32 = q.y;
        let qz:f32 = q.z;
        let qw:f32 = q.w;
    
        let ix:f32 = qw * x + qy * z - qz * y;
        let iy:f32 = qw * y + qz * x - qx * z;
        let iz:f32 = qw * z + qx * y - qy * x;
        let iw:f32 = -qx * x - qy * y - qz * z;
    
        var ret: vec3<f32>;
        ret.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        ret.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        ret.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    
        return ret;
    }
    
    fn convertIdToDir3(uv_i32:vec2<i32>, quaternion:vec4<f32>) -> vec3<f32>{
        var uv_f32:vec2<f32> = vec2<f32>(uv_i32.xy);
        var halfSize:f32 = f32(size.dstWidth / 2);
        var worldDirection:vec3<f32> = vec3<f32>(uv_f32.x - halfSize, uv_f32.y - halfSize, -halfSize);
        worldDirection = normalize(worldDirection);
        worldDirection = applyQuaternion(worldDirection, quaternion);
        return worldDirection;
    }
    
    fn VanDerCorpus(n0:u32, base0:u32) -> f32
    {
        var n = n0;
        var base = base0;
        var invBase:f32 = 1.0 / f32(base);
        var denom:f32   = 1.0;
        var result:f32  = 0.0;
    
        for(var i:u32 = 0u; i < 32u; i = i + 1u)
        {
            if(n > 0u)
            {
                denom   = f32(n) % 2.0;
                result = result + denom * invBase;
                invBase = invBase / 2.0;
                n       = u32(f32(n) / 2.0);
            }
        }
    
        return result;
    }
    
    fn HammersleyNoBitOps(i:u32, N:u32) -> vec2<f32>
    {
        return vec2(f32(i)/f32(N), VanDerCorpus(i, 2u));
    }
    
    fn hammersley( i : u32 ,  N : u32 ) -> vec2<f32>
    {
        // Radical inverse based on http://holger.dammertz.org/stuff/notes_HammersleyOnHemisphere.html
        var bits = (i << 16u) | (i >> 16u);
        bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
        bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
        bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
        bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
        var rdi = f32(bits) * 2.3283064365386963e-10;
        return vec2<f32>(f32(i) /f32(N), rdi);
    }
    
    fn ImportanceSampleGGX( Xi:vec2<f32>, N:vec3<f32>, roughness:f32) ->vec3<f32>
    {
        var a = roughness*roughness;
    
        var phi = 2.0 * PI * Xi.x;
        var cosTheta = sqrt((1.0 - Xi.y) / (1.0 + (a*a - 1.0) * Xi.y));
        var sinTheta = sqrt(1.0 - cosTheta*cosTheta);
    
        // from spherical coordinates to cartesian coordinates
        var H:vec3<f32>;
        H.x = cos(phi) * sinTheta;
        H.y = sin(phi) * sinTheta;
        H.z = cosTheta;
    
        // from tangent-space vector to world-space sample vector
        var up:vec3<f32>;
        if(abs(N.z) < 0.999)
        {
            up = vec3<f32>(0.0, 0.0, 1.0);
        }
        else
        {
            up = vec3<f32>(1.0, 0.0, 0.0);
        }
        var tangent:vec3<f32>  = normalize(cross(up, N));
        var bitangent:vec3<f32> = cross(N, tangent);
        var sampleVec:vec3<f32> = tangent * H.x + bitangent * H.y + N * H.z;
        return normalize(sampleVec);
    }
    
    fn multiSample(localPos:vec3<f32>, roughness:f32) -> vec4<f32>
    {
        var N: vec3<f32> = normalize(localPos);
        var R: vec3<f32> = N;
        var V: vec3<f32> = R;
    
        let SAMPLE_COUNT:u32 = 1024u;
        var totalWeight:f32 = 0.0;
        var prefilteredColor:vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);
        for(var i:u32 = 0u; i < SAMPLE_COUNT; i = i + 1u)
        {
            var Xi:vec2<f32> = hammersley(i, SAMPLE_COUNT);
            var H :vec3<f32> = ImportanceSampleGGX(Xi, N, roughness);
            var L :vec3<f32> = normalize(2.0 * dot(V, H) * H - V);
    
            var NdotL:f32 = max(dot(N, L), 0.0);
            if(NdotL > 0.0)
            {
                var att = 1.0 ;//( f32(SAMPLE_COUNT - i) / f32(SAMPLE_COUNT)) ;
    
                prefilteredColor = prefilteredColor + sampleColor(L).rgb * NdotL;
                prefilteredColor = prefilteredColor * att ;
                totalWeight      = totalWeight + NdotL;
            }
        }
        prefilteredColor = prefilteredColor / totalWeight;
    
        return vec4<f32>(prefilteredColor, 1.0);
    }
    
    fn SampleSphericalMap(v: vec3<f32>) -> vec2<f32> {
        var uv:vec2<f32> = vec2<f32>(atan2(v.z, v.x), asin(v.y));
        //uv = (uv * (vec2<f32>(0.1590999960899353, 0.3183000087738037) + vec2<f32>(0.0010000000474974513)));
        uv = uv * vec2<f32>(0.1590999960899353, 0.3183000087738037);
        uv = uv + vec2<f32>(0.5);
        uv = clamp(uv, vec2<f32>(0.0), vec2<f32>(1.0));
        return uv;
    }
    
    fn sampleColor(d:vec3<f32>) -> vec4<f32>
    {
        let uv_f32:vec2<f32> = SampleSphericalMap(d);
        let oc = textureSampleLevel(inputTex, inputTexSampler, uv_f32 , 0.0);
        //let dir = vec3<f32>(-d.x, -d.y, d.z);
        //var oc:vec4<f32> = textureSampleLevel(cubeMap, cubeMapSampler, dir, 0.0);
        return oc;
    }
    
    @compute @workgroup_size(8, 8, 1)
    fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
        let coord = vec2<i32>(GlobalInvocationID.xy);
        let quaternion = faceRotation[GlobalInvocationID.z];
        var worldDirection:vec3<f32> = convertIdToDir3(coord, quaternion);
        var oc:vec4<f32> = multiSample(worldDirection, blurSetting.x);
        textureStore(outputBuffer0, coord, i32(GlobalInvocationID.z), oc);
    }

`;class Kr{static importantSample(t,e,r,i){const a=w.device;this.pipeline==null&&(this.pipeline=a.createComputePipeline({layout:"auto",compute:{module:a.createShaderModule({code:lu}),entryPoint:"main"}}));const o=this.pipeline,l=4*4;this.configBuffer||(this.configBuffer=a.createBuffer({size:l,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),a.queue.writeBuffer(this.configBuffer,0,new Uint32Array([t.width,t.height,e,e]));const h=4*6;if(!this.quaternionBuffer){this.quaternionBuffer=a.createBuffer({size:h*4*6,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});let C=new Float32Array(4*6);for(let v=0;v<6;v++){let _=Hs.getRotationToFace(v);C[v*4+0]=_.x,C[v*4+1]=_.y,C[v*4+2]=_.z,C[v*4+3]=_.w}a.queue.writeBuffer(this.quaternionBuffer,0,C)}this.blurSettingBuffer||(this.blurSettingBuffer=a.createBuffer({size:l,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),a.queue.writeBuffer(this.blurSettingBuffer,0,new Float32Array([r,0,0,0]));const u=t.erpTexture;let c=[{binding:0,resource:{buffer:this.configBuffer,size:4*4}},{binding:1,resource:{buffer:this.quaternionBuffer,size:h*4}},{binding:2,resource:u.gpuSampler},{binding:3,resource:u.getGPUView()}],d=[{binding:0,resource:{buffer:this.blurSettingBuffer,size:4*4}},{binding:1,resource:i}];const f=a.createBindGroup({layout:o.getBindGroupLayout(0),entries:c}),p=a.createBindGroup({layout:o.getBindGroupLayout(1),entries:d}),A=b.beginCommandEncoder(),x=A.beginComputePass();x.setPipeline(o),x.setBindGroup(0,f),x.setBindGroup(1,p),x.dispatchWorkgroups(e/8,e/8,6),x.end(),b.endCommandEncoder(A)}}s(Kr,"configBuffer",null),s(Kr,"quaternionBuffer",null),s(Kr,"blurSettingBuffer",null),s(Kr,"pipeline");class Xs{constructor(t){s(this,"faceTextureRef");s(this,"_texture");this._texture=t,this.faceTextureRef={}}uploadTexture(t,e){let r=this.getGpuSource(t);return ni.makeTextureCube(e,this._texture.width,r.v),this}uploadErpTexture(t){let e=this.getGpuSource(0);return ni.makeTextureCube(t,this._texture.width,e.v),this.generateMipmap(t),this}getGpuSource(t){let e=this.faceTextureRef[t];return e||(e={t:this._texture.getGPUTexture(),v:this._texture.getGPUTexture().createView({format:this._texture.format,dimension:"2d-array",baseMipLevel:t,mipLevelCount:1,arrayLayerCount:6})},this.faceTextureRef[t]=e),e}generateMipmap(t){let e=1;for(;e<this._texture.mipmapCount;)this.generateMipmapAtLevel(e,t),e++}generateMipmapAtLevel(t,e,r=3){let i=this._texture.width/Math.pow(2,t),a={width:i,height:i,erpTexture:e},o=(t+1)/this._texture.mipmapCount;o=Math.pow(o,r);let l=this.getGpuSource(t);Kr.importantSample(a,i,o,l.v)}}class va extends ka{constructor(){super();s(this,"_url");s(this,"_faceData");this.useMipmap=!0,this.format=z.rgba16float,this.isHDRTexture=!0,this._faceData=new Xs(this)}createFromHDRData(e,r){let i=new jt(r.width,r.height,z.rgba16float,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING),a=new Float32Array(r.array);return ni.convertRGBE2RGBA(i,a),this.createFromTexture(e,i),this}createFromTexture(e,r){this.width=this.height=e,this.textureBindingLayout.viewDimension="cube";let i=this.width;for(this.mipmapCount=1;i>16;)i/=2,this.mipmapCount++;return this.createTextureDescriptor(e,e,this.mipmapCount,this.format),this.textureDescriptor.size={width:e,height:e,depthOrArrayLayers:6},this.textureDescriptor.dimension="2d",this.gpuSampler=w.device.createSampler(this),this._faceData.uploadErpTexture(r),this}async load(e,r){return this._url=e,(await new Ye().load(e,Ks,r)).getCubeTexture()}}function hu(n){return new TextDecoder().decode(n)}class Qa{constructor(t,e,r,i){s(this,"buffer");s(this,"binOffset");s(this,"binLength");s(this,"header");this.buffer=t,this.binOffset=e+r,this.binLength=i;let a=null;if(r!==0){const o=new Uint8Array(t,e,r);a=JSON.parse(hu(o))}else a={};this.header=a}getKeys(){return Object.keys(this.header)}getData(t,e,r=null,i=null){const a=this.header;if(!(t in a))return null;const o=a[t];if(o instanceof Object){if(Array.isArray(o))return o;{const{buffer:l,binOffset:h,binLength:u}=this,c=o.byteOffset||0,d=o.type||i,f=o.componentType||r;if("type"in o&&i&&o.type!==i)throw new Error("FeatureTable: Specified type does not match expected type.");let p;switch(d){case"SCALAR":p=1;break;case"VEC2":p=2;break;case"VEC3":p=3;break;case"VEC4":p=4;break;default:throw new Error(`FeatureTable : Feature type not provided for "${t}".`)}let A;const x=h+c,C=e*p;switch(f){case"BYTE":A=new Int8Array(l,x,C);break;case"UNSIGNED_BYTE":A=new Uint8Array(l,x,C);break;case"SHORT":A=new Int16Array(l,x,C);break;case"UNSIGNED_SHORT":A=new Uint16Array(l,x,C);break;case"INT":A=new Int32Array(l,x,C);break;case"UNSIGNED_INT":A=new Uint32Array(l,x,C);break;case"FLOAT":A=new Float32Array(l,x,C);break;case"DOUBLE":A=new Float64Array(l,x,C);break;default:throw new Error(`FeatureTable : Feature component type not provided for "${t}".`)}if(x+C*A.BYTES_PER_ELEMENT>h+u)throw new Error("FeatureTable: Feature data read outside binary body length.");return A}}else return o}}class js extends Qa{constructor(e,r,i,a,o){super(e,i,a,o);s(this,"batchSize");this.batchSize=r}getData(e,r=null,i=null){return super.getData(e,this.batchSize,r,i)}}function qs(n){let t;if(n instanceof DataView?t=n:t=new DataView(n),String.fromCharCode(t.getUint8(0))==="{")return null;let e="";for(let r=0;r<4;r++)e+=String.fromCharCode(t.getUint8(r));return e}class uu{async parse(t){const e=new DataView(t),r=qs(e);console.assert(r==="b3dm");const i=e.getUint32(4,!0);console.assert(i===1);const a=e.getUint32(8,!0);console.assert(a===t.byteLength);const o=e.getUint32(12,!0),l=e.getUint32(16,!0),h=e.getUint32(20,!0),u=e.getUint32(24,!0),c=28,d=new Qa(t,c,o,l),f=c+o+l,p=new js(t,d.getData("BATCH_LENGTH"),f,h,u),A=f+h+u,x=new Uint8Array(t,A,a-A);return{version:i,featureTable:d,batchTable:p,glbBytes:x}}}const gr=class gr extends uu{constructor(){super();s(this,"adjustmentTransform");s(this,"gltfBuffer");this.adjustmentTransform=new V().identity(),gr.tempMatrix||(gr.tempMatrix=new V().identity())}async parse(e){const r=await super.parse(e);this.gltfBuffer=r.glbBytes.slice().buffer;let i=await new $s().parseBinary(this.gltfBuffer),{batchTable:a,featureTable:o}=r;const l=o.getData("RTC_CENTER");l&&(i.x+=l[0],i.y+=l[1],i.z+=l[2]);let h=i.getComponent(Dt);h.updateWorldMatrix();let u=gr.tempMatrix;u.compose(h.localPosition,h.localRotQuat,h.localScale),u.multiply(this.adjustmentTransform);let c=u.decompose(Bt.QUATERNION);return h.localRotQuat.copyFrom(c[1]),h.localRotQuat=h.localRotQuat,h.localPosition.copyFrom(c[0]),h.localPosition=h.localPosition,h.localScale.copyFrom(c[2]),h.localScale=h.localScale,h.updateWorldMatrix(),i.batchTable=a,i.featureTable=o,i}static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let r="";for(let i=0,a=e.length;i<a;i++)r+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(r))}catch{return r}}};s(gr,"tempMatrix");let Cr=gr;class Js extends ze{async parseBuffer(t){let e=new Cr;e.adjustmentTransform=this.userData,this.data=await e.parse(t)}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}}s(Js,"format",Te.JSON);const Zs="glTF",Hr=12,As={JSON:1313821514,BIN:5130562},xa={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class cu{constructor(t){s(this,"name");s(this,"content");s(this,"body");s(this,"header");this.name=xa.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Hr);if(this.header={magic:Cr.decodeText(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Zs)throw new Error("GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("GLTFLoader: Legacy binary file detected.");const r=this.header.length-Hr,i=new DataView(t,Hr);let a=0;for(;a<r;){const o=i.getUint32(a,!0);a+=4;const l=i.getUint32(a,!0);if(a+=4,l===As.JSON){const h=new Uint8Array(t,Hr+a,o);this.content=Cr.decodeText(h)}else if(l===As.BIN){const h=Hr+a;this.body=t.slice(h,h+o)}a+=o}if(this.content===null)throw new Error("GLTFLoader: JSON content not found.")}}class $s{constructor(){s(this,"_binary")}async parseBinary(t){this._binary=t;const e=Cr.decodeText(new Uint8Array(this._binary,0,4)),r={};let i,a;if(e===Zs){try{a=r[xa.KHR_BINARY_GLTF]=new cu(this._binary)}catch{return}i=r[xa.KHR_BINARY_GLTF].content}else i=Cr.decodeText(new Uint8Array(this._binary));const o=JSON.parse(i);return await this.parseGLB(o,a.body)}async parseGLB(t,e){return await new Fa().parseJsonAndBuffer(t,e)}}class du{async parse(t){const e=new DataView(t),r=qs(e);console.assert(r==="i3dm");const i=e.getUint32(4,!0);console.assert(i===1);const a=e.getUint32(8,!0);console.assert(a===t.byteLength);const o=e.getUint32(12,!0),l=e.getUint32(16,!0),h=e.getUint32(20,!0),u=e.getUint32(24,!0);e.getUint32(28,!0);const c=32,d=new Qa(t,c,o,l),f=c+o+l,p=new js(t,d.getData("INSTANCES_LENGTH"),f,h,u),A=f+h+u,x=new Uint8Array(t,A,a-A);return{version:i,featureTable:d,batchTable:p,glbBytes:x}}}class eo extends ee{constructor(e,r,i){super();s(this,"_geometry");s(this,"_material");s(this,"_instanceList");this._geometry=e,this._material=r,this._instanceList=[];for(let a=0;a<i;a++){let o,l=new ee;o=l.addComponent(se),o.geometry=this._geometry,o.material=this._material,this.addChild(l),this._instanceList.push(l)}}setMatrixAt(e,r){let i=this._instanceList[e],a=r.decompose(Bt.QUATERNION),o=i.transform;return o.localRotQuat.copyFrom(a[1]),o.localRotQuat=o.localRotQuat,o.localPosition.copyFrom(a[0]),o.localPosition=o.localPosition,o.localScale.copyFrom(a[2]),o.localScale=o.localScale,this}}const Z=class Z extends du{constructor(){super();s(this,"adjustmentTransform");s(this,"_gltfBuffer");Z.tempFwd||(Z.tempFwd=new g),Z.tempUp||(Z.tempUp=new g),Z.tempRight||(Z.tempRight=new g),Z.tempPos||(Z.tempPos=new g),Z.tempQuat||(Z.tempQuat=new X),Z.tempSca||(Z.tempSca=new g),Z.tempMat||(Z.tempMat=new V),this.adjustmentTransform=new V().identity()}async parse(e){const r=await super.parse(e);this._gltfBuffer=r.glbBytes.slice().buffer;let i=await new $s().parseBinary(this._gltfBuffer),{batchTable:a,featureTable:o}=r;const l=this.adjustmentTransform,h=o.getData("INSTANCES_LENGTH"),u=o.getData("POSITION",h,"FLOAT","VEC3"),c=o.getData("NORMAL_UP",h,"FLOAT","VEC3"),d=o.getData("NORMAL_RIGHT",h,"FLOAT","VEC3"),f=o.getData("SCALE_NON_UNIFORM",h,"FLOAT","VEC3"),p=o.getData("SCALE",h,"FLOAT","SCALAR"),A=new Map,x=[];i.traverse(_=>{let S;if(S=_?_.getComponent(se):null,S){const{geometry:B,material:M}=S,D=new eo(B,M,h);D.localPosition=D.localPosition.copy(_.localPosition),D.localRotation=D.localRotation.copy(_.localRotation),D.localScale=D.localScale.copy(_.localScale),x.push(D),A.set(_,D)}});const C=new g;for(let _=0;_<h;_++)C.x+=u[_*3+0]/h,C.y+=u[_*3+1]/h,C.z+=u[_*3+2]/h;A.forEach((_,S)=>{const B=S.parent?S.parentObject:null;B&&(B.removeChild(S),B.addChild(_),_.transform.updateWorldMatrix(),_.transform.worldMatrix.transformVector4(C,_.localPosition))});const v=Z;for(let _=0;_<h;_++){v.tempMat.identity(),v.tempPos.set(u[_*3+0]-C.x,u[_*3+1]-C.y,u[_*3+2]-C.z),c?(v.tempUp.set(c[_*3+0],c[_*3+1],c[_*3+2]),v.tempRight.set(d[_*3+0],d[_*3+1],d[_*3+2]),v.tempRight.crossProduct(v.tempUp,v.tempFwd).normalize(),v.tempMat.makeBasis(v.tempRight,v.tempUp,v.tempFwd),v.tempQuat.setFromRotationMatrix(v.tempMat)):v.tempQuat.set(0,0,0,1),p?v.tempSca.setScalar(p[_]):f?v.tempSca.set(f[_*3+0],f[_*3+1],f[_*3+2]):v.tempSca.set(1,1,1),v.tempMat.compose(v.tempPos,v.tempQuat,v.tempSca),v.tempMat.multiplyMatrices(v.tempMat,l);for(let S=0,B=x.length;S<B;S++)x[S].setMatrixAt(_,v.tempMat)}return i.batchTable=a,i.featureTable=o,i}};s(Z,"tempFwd"),s(Z,"tempUp"),s(Z,"tempRight"),s(Z,"tempPos"),s(Z,"tempQuat"),s(Z,"tempSca"),s(Z,"tempMat");let Ca=Z;class to extends ze{async parseBuffer(t){let e=new Ca;e.adjustmentTransform=this.userData,this.data=await e.parse(t)}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}}s(to,"format",Te.BIN);class fu extends ka{constructor(){super();s(this,"_faceData");s(this,"_url");this.useMipmap=!0,this.format=z.rgba16float,this._faceData=new Xs(this)}get ldrImageUrl(){return this._url}async load(e,r){this._url=e;let i=new sr(!1);return await i.load(e,r),this.createFromLDRTexture(i),this}createFromLDRTexture(e){let r=Math.log2(e.width/4);return r=Math.pow(2,Math.round(r)),this.createFromTexture(r,e),this}createFromTexture(e,r){this.width=this.height=e,this.textureBindingLayout.viewDimension="cube";let i=this.width;for(this.mipmapCount=1;i>16;)i/=2,this.mipmapCount++;return this.createTextureDescriptor(e,e,this.mipmapCount,this.format),this.textureDescriptor.size={width:e,height:e,depthOrArrayLayers:6},this.textureDescriptor.dimension="2d",this.gpuSampler=w.device.createSampler(this),this._faceData.uploadErpTexture(r),this}}let gu=`
var<private>PI: f32 = 3.141592653589793;

// fn saturate( x : f32 ) -> f32 {
//     return clamp(x, 0.0, 1.0);
// }

fn hammersley(i : u32, N : u32) -> vec2<f32>
{
    // Radical inverse based on http://holger.dammertz.org/stuff/notes_HammersleyOnHemisphere.html
    var bits = (i << 16u) | (i >> 16u);
    bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
    bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
    bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
    bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
    var rdi = f32(bits) * 2.3283064365386963e-10;
    return vec2<f32>(f32(i) / f32(N), rdi);
}

fn G_Smith(NoV: f32, NoL : f32, roughness : f32) -> f32
{
    var k = (roughness * roughness) / 2.0;
    var GGXL = NoL / (NoL * (1.0 - k) + k);
    var GGXV = NoV / (NoV * (1.0 - k) + k);
    return GGXL * GGXV;
}

fn V_SmithGGXCorrelated(NoV: f32, NoL : f32, roughness : f32) -> f32
{
    var a2 = pow(roughness, 4.0);
    var GGXV = NoL * sqrt(NoV * NoV * (1.0 - a2) + a2);
    var GGXL = NoV * sqrt(NoL * NoL * (1.0 - a2) + a2);
    return 0.5 / (GGXV + GGXL);
}


// Based on Karis 2014
fn importanceSampleGGX(Xi: vec2<f32>, roughness: f32, N: vec3<f32>) -> vec3<f32>
{
    var a = roughness * roughness;
    // Sample in spherical coordinates
    var Phi = 2.0 * PI * Xi.x;
    var CosTheta = sqrt((1.0 - Xi.y) / (1.0 + (a * a - 1.0) * Xi.y));
    var SinTheta = sqrt(1.0 - CosTheta * CosTheta);
    // Construct tangent space vector
    var H: vec3<f32>;
    H.x = SinTheta * cos(Phi);
    H.y = SinTheta * sin(Phi);
    H.z = CosTheta;

    // Tangent to world space
    var UpVector = vec3<f32>(1.0, 0.0, 0.0);
    if (abs(N.z) < 0.999) {
        UpVector = vec3<f32>(0.0, 0.0, 1.0);
    }
    var TangentX = normalize(cross(UpVector, N));
    var TangentY = cross(N, TangentX);
    return TangentX * H.x + TangentY * H.y + N * H.z;
}


// Karis 2014
fn integrateBRDF(roughness: f32, NoV: f32) -> vec2<f32>
{
    var V: vec3<f32>;
    V.x = sqrt(1.0 - NoV * NoV); // sin
    V.y = 0.0;
    V.z = NoV; // cos

    // N points straight upwards for this integration
    var N = vec3<f32>(0.0, 0.0, 1.0);

    var A = 0.0;
    var B = 0.0;
    var numSamples = 1024u;

    for (var i = 0u; i < numSamples; i += 1u) {
        var Xi = hammersley(i, numSamples);
        // Sample microfacet direction
        var H = importanceSampleGGX(Xi, roughness, N);

        // Get the light direction
        var L = 2.0 * dot(V, H) * H - V;

        var NoL = saturate(dot(N, L));
        var NoH = saturate(dot(N, H));
        var VoH = saturate(dot(V, H));

        if (NoL > 0.0) {
            var V_pdf = V_SmithGGXCorrelated(NoV, NoL, roughness) * VoH * NoL / NoH;
            var Fc = pow(1.0 - VoH, 5.0);
            A += (1.0 - Fc) * V_pdf;
            B += Fc * V_pdf;
        }
    }

    return 4.0 * vec2<f32>(A, B) / f32(numSamples);
}

@group(0) @binding(0) var brdflutTexture: texture_storage_2d<rgba8unorm, write>;
@compute @workgroup_size(8, 8, 1)
// fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(local_invocation_id) local_invocation_id : vec3<u32> ){
fn CsMain(@builtin(global_invocation_id) global_invocation_id : vec3<u32>){
    var fragCoord = vec2<u32>(global_invocation_id.x, global_invocation_id.y);

    var fragColor = vec4<f32>(0.0);
    // Output to screen
    var res = integrateBRDF(f32(fragCoord.y + 1u) / 256.0, f32(fragCoord.x + 1u) / 256.0);
    fragColor = vec4<f32>(res.x, res.y, 0.0, 1.0);

    textureStore(brdflutTexture, vec2<i32>(fragCoord.xy), fragColor);
}
`;class pu{constructor(){s(this,"compute");this.compute=new Mt(gu)}generateBRDFLUTTexture(){let t=new jt(256,256,z.rgba8unorm,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING);this.compute.setStorageTexture("brdflutTexture",t),this.compute.workerSizeX=256/8,this.compute.workerSizeY=256/8;let e=b.beginCommandEncoder();return b.computeCommand(e,[this.compute]),b.endCommandEncoder(e),t}}class Au extends Ge{constructor(){super(...arguments);s(this,"_dataBuffer")}create(e,r,i,a=!1){let o=w.device;const l=Math.ceil(e*4/256)*256;this.format=z.rgba8unorm,this.mipmapCount=Math.floor(a?Math.log2(e):1),this.createTextureDescriptor(e,r,this.mipmapCount,this.format);const h=this._dataBuffer=o.createBuffer({size:i.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});o.queue.writeBuffer(h,0,i);const u=b.beginCommandEncoder();return u.copyBufferToTexture({buffer:h,bytesPerRow:l},{texture:this.getGPUTexture()},{width:e,height:r,depthOrArrayLayers:1}),b.endCommandEncoder(u),a&&Mr.webGPUGenerateMipmap(this),this}updateTexture(e,r,i){let a=w.device;const o=Math.ceil(e*4/256)*256;this.mipmapCount=Math.floor(Math.log2(e)),this._dataBuffer&&this._dataBuffer.destroy(),this._dataBuffer=null;const l=this._dataBuffer=a.createBuffer({size:i.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});a.queue.writeBuffer(l,0,i);const h=b.beginCommandEncoder();h.copyBufferToTexture({buffer:l,bytesPerRow:o},{texture:this.getGPUTexture()},{width:e,height:r,depthOrArrayLayers:1}),b.endCommandEncoder(h),this.gpuSampler=a.createSampler(this),this.mipmapCount>1&&Mr.webGPUGenerateMipmap(this)}}class Ui{constructor(t){s(this,"id");s(this,"guiTexture");s(this,"uvRec",new K(0,0,1,1));s(this,"uvBorder",new K(0,0,0,0));s(this,"offsetSize",new K(0,0,4,4));s(this,"borderSize",new K(0,0,0,0));s(this,"trimSize",new Ae);s(this,"isSliced",!1);s(this,"height",4);s(this,"width",4);s(this,"xadvance",0);s(this,"xoffset",0);s(this,"yoffset",0);this.guiTexture=t||y.res.defaultGUITexture}}const ei=class ei{constructor(t){s(this,"_staticId",-1);s(this,"dynamicId",-1);s(this,"texture");s(this,"width",1);s(this,"height",1);t||(t=y.res.whiteTexture),this.texture=t,ei._maxUid++,this._staticId=ei._maxUid,this.init()}get staticId(){return this._staticId}init(){this.dynamicId=-1,this.width=this.texture.width,this.height=this.texture.height}};s(ei,"_maxUid",-1);let li=ei;class mu{constructor(){s(this,"fntCache",{});s(this,"fntData",{})}addFontData(t,e,r){this.fntData[`${t}${e}`]=r}getFontData(t,e){return this.fntData[`${t}${e}`]}addFnt(t,e,r,i){let a=`${t}${e}`;this.fntCache[a]||(this.fntCache[a]={}),this.fntCache[a][r]=i}getFnt(t,e,r){let i=`${t}${e}`,a=this.fntCache[i];return a?a[r]:this.fntCache[" "]}}let ya=new mu;class vu{constructor(){s(this,"face","");s(this,"size",0);s(this,"bold",!1);s(this,"italic",!1);s(this,"stretchH",0);s(this,"spacing","");s(this,"outline",0);s(this,"lineHeight",0);s(this,"base",0);s(this,"scaleW",0);s(this,"scaleH",0);s(this,"pages",0);s(this,"packed",0);s(this,"alphaChnl",0);s(this,"redChnl",0);s(this,"greenChnl",0);s(this,"blueChnl",0);s(this,"count",0);s(this,"fontPage",[]);s(this,"fontChar",{})}}class xu{constructor(){s(this,"id",0);s(this,"file","")}}class Cu{constructor(){s(this,"id",-1);s(this,"x",0);s(this,"y",0);s(this,"width",0);s(this,"height",0);s(this,"xoffset",0);s(this,"yoffset",0);s(this,"xadvance",0);s(this,"page",0);s(this,"chnl",0)}}const Ft=class Ft extends ze{static parseSprite(t,e){for(const r in e.fontChar)if(Object.prototype.hasOwnProperty.call(e.fontChar,r)){const i=e.fontChar[r];let a=new Ui;a.id=i.id.toString(),a.offsetSize.set(0,0,i.width,i.height),a.trimSize.set(i.width,i.height),a.width=i.width,a.height=i.height,a.xadvance=i.xadvance,a.xoffset=i.xoffset,a.yoffset=i.yoffset,a.guiTexture=t[i.page],a.uvRec.set(i.x/e.scaleW,(e.scaleH-(i.y+i.height))/e.scaleH,i.width/e.scaleW,i.height/e.scaleH),ya.addFnt(e.face,e.size,a.id,a)}}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}async parseString(t){let e=this.getNewLine(t),r=t,i=new vu;r.trim().split(e).forEach((a,o)=>{if(o<2)Ft.readLineProperty(a,i);else if(o<i.pages+2){let l=new xu;Ft.readLineProperty(a,l),i.fontPage.push(l)}else if(o<i.pages+3)Ft.readLineProperty(a,i);else if(i.count>0){let l=new Cu;Ft.readLineProperty(a,l),i.fontChar[l.id]=l,i.count--}}),r="",this.data=i,await this.loadFontTextures()}getNewLine(t){return t.indexOf(`\r
`)!=-1?`\r
`:t.indexOf("\r")!=-1?"\r":`
`}async loadFontTextures(){let t=[],e=this.data;for(const r of e.fontPage){let i=this.baseUrl+r.file;await y.res.loadTexture(i,null,!0);let a=y.res.getTexture(i),o=new li(a);t.push(o)}Ft.parseSprite(t,e),e.fontChar[" "]||Ft.insertSpaceChar(e,t[0])}static insertSpaceChar(t,e){let r=new Ui,i=t.size*.5,a=t.lineHeight*.5;r.id=" ",r.offsetSize.set(0,0,t.size,t.size),r.trimSize.set(i,a),r.width=i,r.height=a,r.xadvance=0,r.xoffset=0,r.yoffset=0,r.guiTexture=e,r.uvRec.set(0,0,1e-6,1e-6),ya.addFnt(t.face,t.size,r.id,r)}static readLineProperty(t,e){t.trim().split(" ").forEach((r,i)=>{let a=r.split("=");if(a.length>1){let o=a[0],l=a[1];Object.prototype.hasOwnProperty.call(e,o)&&(l.indexOf('"')==-1?e[o]=parseFloat(a[1]):e[o]=l.replace('"',"").replace('"',""))}})}};s(Ft,"format",Te.TEXT);let _a=Ft;function yu(n,t,e){let r=new Ui;r.guiTexture=n,r.id=t,r.uvRec.copyFrom(e.textureRect),r.trimSize.x=e.textureRect.z,r.trimSize.y=e.textureRect.w,r.offsetSize.x=e.textureRectOffset.x,r.offsetSize.y=e.textureRectOffset.y,r.offsetSize.z=e.size.x,r.offsetSize.w=e.size.y,r.width=e.size.x,r.height=e.size.y;let i=1/n.width,a=1/n.height;r.uvRec.set(r.uvRec.x*i,r.uvRec.y*a,r.uvRec.z*i,r.uvRec.w*a);let o=.1;return e.border.x<=o&&e.border.y<=o&&e.border.z<=o&&e.border.x<=o?r.isSliced=!1:(r.borderSize.copyFrom(e.border),r.uvBorder.copyFrom(e.border),r.uvBorder.x-=e.textureRectOffset.x,r.uvBorder.y-=e.textureRectOffset.y,r.uvBorder.z=e.border.z-(e.size.x-e.textureRect.z-e.textureRectOffset.x),r.uvBorder.w=e.border.w-(e.size.y-e.textureRect.w-e.textureRectOffset.y),r.uvBorder.x/=e.textureRect.z,r.uvBorder.z/=e.textureRect.z,r.uvBorder.y/=e.textureRect.w,r.uvBorder.w/=e.textureRect.w,r.isSliced=!0),r}class _u{constructor(t){s(this,"_spriteMap",new Map);s(this,"_spriteList",[]);s(this,"textureSize",new Ae);s(this,"name");this.textureSize.set(t.x,t.y)}setTexture(t,e,r){let i=yu(t,e,r);return this._spriteMap.set(i.id,i),this._spriteList.push(i),i}getSprite(t){return this._spriteMap.get(t)}get spriteList(){return this._spriteList}}class ro extends ze{constructor(){super(...arguments);s(this,"_json");s(this,"_texture")}async parseString(e){this._json=JSON.parse(e);let r=this.userData.replace(".json",".png");this._texture=await y.res.loadTexture(r,null,!0),this.data={json:this._json,texture:this._texture},this.parseAtlas()}verification(){if(this.data)return!0;throw new Error("verify failed.")}parseAtlas(){let e=new _u(this._json.size),r=new li(this._texture),i=this._json.atlas;for(const a in i)e.setTexture(r,a,i[a]);y.res.addAtlas(this.baseUrl,e),this.data=e}}s(ro,"format",Te.TEXT);class Iu{constructor(){s(this,"_texturePool");s(this,"_materialPool");s(this,"_prefabPool");s(this,"_gltfPool");s(this,"_geometryPool");s(this,"_atlasList");s(this,"_obj");s(this,"normalTexture");s(this,"maskTexture");s(this,"whiteTexture");s(this,"blackTexture");s(this,"redTexture");s(this,"blueTexture");s(this,"greenTexture");s(this,"yellowTexture");s(this,"grayTexture");s(this,"defaultSky");s(this,"defaultGUITexture");s(this,"defaultGUISprite");s(this,"defaultMaterial");this._texturePool=new Map,this._materialPool=new Map,this._prefabPool=new Map,this._geometryPool=new Map,this._gltfPool=new Map,this._atlasList=new Map,this._obj=new Map}getGltf(t){return this._gltfPool.get(t)}addObj(t,e){this._obj.set(t,e)}getObj(t){return this._obj.get(t)}addTexture(t,e){this._texturePool.set(t,e)}getTexture(t){return this._texturePool.get(t)}addGeometry(t,e){this._geometryPool.set(t,e)}getGeometry(t){return this._geometryPool.get(t)}addMat(t,e){return this._materialPool.set(t,e)}getMat(t){return this._materialPool.get(t)}addPrefab(t,e){this._prefabPool.set(t,e)}getPrefab(t){return this._prefabPool.get(t).instantiate()}addAtlas(t,e){e.name=t,this._atlasList.set(t,e)}getAtlas(t){return this._atlasList.get(t)}getGUISprite(t){for(let e of this._atlasList.values()){let r=e.getSprite(t);if(r)return r}return null}async load(t,e,r){return(await new Ye().load(t,e,r)).data}async loadGltf(t,e){if(this._prefabPool.has(t))return this._prefabPool.get(t);let r,i=t.substring(t.lastIndexOf(".")).toLowerCase(),a=new Ye;i==".gltf"?r=await a.load(t,Oe,e):r=await a.load(t,Fa,e);let o=r.data;return this._prefabPool.set(t,o),this._gltfPool.set(t,r.gltf),o}async loadObj(t,e){if(this._prefabPool.has(t))return this._prefabPool.get(t);let r,i=t.substring(t.lastIndexOf(".")).toLowerCase(),a=new Ye;i==".obj"&&(r=await a.load(t,Vs,e));let o=r.data;return this._prefabPool.set(t,o),o}async loadB3DM(t,e,r){if(this._prefabPool.has(t))return this._prefabPool.get(t);let i=(await new Ye().load(t,Js,e,r)).data;return this._prefabPool.set(t,i),i}async loadI3DM(t,e,r){if(this._prefabPool.has(t))return this._prefabPool.get(t);let i=(await new Ye().load(t,to,e,r)).data;return this._prefabPool.set(t,i),i}async loadTexture(t,e,r){if(this._texturePool.has(t))return this._texturePool.get(t);let i=new sr;return i.flipY=r,await i.load(t,e),this._texturePool.set(t,i),i}async loadTextureCount(t,e,r,i){return new Promise(async(a,o)=>{let l=0,h=[];e==0&&a(h);for(let u=0;u<e;u++){const c=t.shift();this.loadTexture(c,r,i).then(d=>{h.push(d),l++,l==e&&a(h)})}})}async loadBitmapTextures(t,e=5,r,i){let a=[],o=Math.floor(t.length/e)+1,l=Math.floor(t.length%e);for(let h=0;h<o;h++){let u=await this.loadTextureCount(t,h==o-1?l:e,r,i);a.push(...u)}return a}async loadHDRTexture(t,e){if(this._texturePool.has(t))return this._texturePool.get(t);let r=new Ys;return r=await r.load(t,e),this._texturePool.set(t,r),r}async loadHDRTextureCube(t,e){if(this._texturePool.has(t))return this._texturePool.get(t);let r=new va;return r=await r.load(t,e),this._texturePool.set(t,r),r}async loadLDRTextureCube(t,e){if(this._texturePool.has(t))return this._texturePool.get(t);let r=new fu;return r=await r.load(t,e),this._texturePool.set(t,r),r}async loadTextureCubeMaps(t){let e=t[0];if(this._texturePool.has(e))return this._texturePool.get(e);let r=new gs;return await r.load(t),this._texturePool.set(t[0],r),r}async loadTextureCubeStd(t,e){if(this._texturePool.has(t))return this._texturePool.get(t);let r=new gs;return await r.loadStd(t),r}async loadJSON(t,e){return await new Ye().loadJson(t,e).then(async r=>r).catch(r=>{console.log(r)})}async loadFont(t,e,r){let i=await new Ye().load(t,_a,e,r),a=i.data;return ya.addFontData(a.face,a.size,a),i.data}async loadAtlas(t,e){return(await new Ye().load(t,ro,e,t)).data}createTexture(t,e,r,i,a,o,l){let h=32,u=32,c=new Uint8Array(h*u*4);this.fillColor(c,t,e,r,i,a,o);let d=new Au;return d.name=l,d.create(16,16,c,!0),l&&this.addTexture(l,d),d}fillColor(t,e,r,i,a,o,l){for(let h=0;h<e;h++)for(let u=0;u<r;u++){let c=u*e+h;t[c*4+0]=i,t[c*4+1]=a,t[c*4+2]=o,t[c*4+3]=l}}initDefault(){this.normalTexture=this.createTexture(32,32,255*.5,255*.5,255,255,"default-normalTexture"),this.maskTexture=this.createTexture(32,32,255,255*.5,255,255,"default-maskTexture"),this.whiteTexture=this.createTexture(32,32,255,255,255,255,"default-whiteTexture"),this.blackTexture=this.createTexture(32,32,0,0,0,255,"default-blackTexture"),this.redTexture=this.createTexture(32,32,255,0,0,255,"default-redTexture"),this.blueTexture=this.createTexture(32,32,0,0,255,255,"default-blueTexture"),this.greenTexture=this.createTexture(32,32,0,255,0,255,"default-greenTexture"),this.yellowTexture=this.createTexture(32,32,0,255,255,255,"default-yellowTexture"),this.grayTexture=this.createTexture(32,32,128,128,128,255,"default-grayTexture");let t=new pu().generateBRDFLUTTexture(),e=t.name="BRDFLUT";this.addTexture(e,t),this.defaultSky=new va,this.defaultSky.createFromTexture(128,this.blackTexture),q.getInstance().attached(this.defaultSky,this),q.getInstance().attached(t,this),q.getInstance().attached(this.normalTexture,this),q.getInstance().attached(this.maskTexture,this),q.getInstance().attached(this.whiteTexture,this),q.getInstance().attached(this.blackTexture,this),q.getInstance().attached(this.redTexture,this),q.getInstance().attached(this.blueTexture,this),q.getInstance().attached(this.greenTexture,this),q.getInstance().attached(this.yellowTexture,this),q.getInstance().attached(this.grayTexture,this),this.defaultGUITexture=new li(this.whiteTexture),this.defaultGUISprite=new Ui(this.defaultGUITexture),this.defaultGUISprite.trimSize.set(4,4),this.defaultMaterial=new ui}}class _r extends ca{constructor(){super();let t=w.presentationSize;L.register("FXAA_Shader",Pu);let e=this.createRTTexture("FXAAPost",t[0],t[1],z.rgba16float),r=this.createViewQuad("fxaa","FXAA_Shader",e);r.quadShader.setUniform("u_texel",new Ae(1/t[0],1/t[1])),r.quadShader.setUniform("u_strength",4)}onAttach(t){y.setting.render.postProcessing.fxaa.enable=!0}onDetach(t){y.setting.render.postProcessing.fxaa.enable=!1}}class ms extends Ke{constructor(){super(...arguments);s(this,"_postList")}init(e){this._postList=new Map}start(){}stop(){}onEnable(){this.activePost()}onDisable(){this.unActivePost()}activePost(){let e=this.transform.view3D,r=y.getRenderJob(e);this._postList.forEach(i=>{r.addPost(i)})}unActivePost(){let e=this.transform.view3D,r=y.getRenderJob(e);this._postList.forEach(i=>{r.removePost(i)})}addPost(e){if(this._postList.has(e))return;if(!this._postList.has(_r)){let i=new _r;if(this._postList.set(_r,i),this._enable&&this.activePost(),e===_r)return i}let r=new e;return this._postList.set(e,r),this._enable&&this.activePost(),r}removePost(e){if(!this._postList.has(e))return;let r=this._postList.get(e);this._postList.delete(e);let i=this.transform.view3D;y.getRenderJob(i).removePost(r)}getPost(e){return this._postList.has(e)?this._postList.get(e):null}}class y{static get frameRate(){return this._frameRate}static set frameRate(t){this._frameRate=t,this._frameRateValue=1/t,t>=360&&(this._frameRateValue=0)}static get size(){return w.presentationSize}static get aspect(){return w.aspect}static get width(){return w.windowWidth}static get height(){return w.windowHeight}static async init(t={}){console.log("Engine Version",fo),this.setting={...this.setting,...t.engineSetting},await $.init(V.allocCount),await w.init(t.canvasConfig),L.init(),wt.init(),ge.init(),Fe.init(),st.init(),this.res=new Iu,this.res.initDefault(),this._beforeRender=t.beforeRender,this._renderLoop=t.renderLoop,this._lateRender=t.lateRender,this.inputSystem=new co,this.inputSystem.initCanvas(w.canvas)}static startRenderView(t){this.renderJobs||(this.renderJobs=new Map),this.views=[t];let e=new us(t);return this.renderJobs.set(t,e),w.presentationSize,this.setting.pick.mode=="pixel"&&t.scene.getOrAddComponent(ms).addPost(_r),(this.setting.pick.mode=="pixel"||this.setting.pick.mode=="bound")&&(t.enablePick=!0),this.resume(),e}static startRenderViews(t){this.renderJobs||(this.renderJobs=new Map),this.views=t;for(let e=0;e<t.length;e++){const r=t[e];let i=new us(r);this.renderJobs.set(r,i);let a=w.presentationSize;this.setting.pick.mode=="pixel"?r.scene.addComponent(ms).addPost(_r):Fe.createRTTexture(Ce.colorBufferTex_NAME,a[0],a[1],z.rgba16float,!1),(this.setting.pick.mode=="pixel"||this.setting.pick.mode=="bound")&&(r.enablePick=!0)}this.resume()}static getRenderJob(t){return this.renderJobs.get(t)}static pause(){this._requestAnimationFrameID!=0&&(cancelAnimationFrame(this._requestAnimationFrameID),this._requestAnimationFrameID=0)}static resume(){this._requestAnimationFrameID=requestAnimationFrame(t=>this.render(t))}static render(t){this._deltaTime=t-this._time,this._time=t,this._frameRateValue>0?(this._frameTimeCount+=this._deltaTime*.001,this._frameTimeCount>=this._frameRateValue*.95&&(this._frameTimeCount=0,this.updateFrame(t))):this.updateFrame(t),this.resume()}static updateFrame(t){ie.delta=t-ie.time,ie.time=t,ie.frame+=1,da.tick(ie.delta);let e=this.views,r=0;for(r=0;r<e.length;r++){const a=e[r];a.scene.waitUpdate(),a.camera.resetPerspective(w.aspect)}this._beforeRender&&this._beforeRender();for(const a of ae.componentsBeforeUpdateList){let o=a[0],l=a[1];for(const h of l){let u=h[0],c=h[1];u.enable&&c(o)}}let i=w.device.createCommandEncoder();for(const a of ae.componentsComputeList){let o=a[0],l=a[1];for(const h of l){let u=h[0],c=h[1];u.enable&&c(o,i)}}w.device.queue.submit([i.finish()]);for(const a of ae.componentsUpdateList){let o=a[0],l=a[1];for(const h of l){let u=h[0],c=h[1];u.enable&&c(o)}}for(const a of ae.graphicComponent){let o=a[0],l=a[1];for(const h of l){let u=h[0],c=h[1];o&&u.enable&&c(o)}}this._renderLoop&&this._renderLoop(),$.updateAllContinueTransform(0,V.useCount,16),ge.modelMatrixBindGroup.writeBuffer(V.useCount*16),this.renderJobs.forEach((a,o)=>{a.renderState||a.start(),a.renderFrame()});for(const a of ae.componentsLateUpdateList){let o=a[0],l=a[1];for(const h of l){let u=h[0],c=h[1];u.enable&&c(o)}}this._lateRender&&this._lateRender()}}s(y,"res"),s(y,"inputSystem"),s(y,"views"),s(y,"_frameRateValue",0),s(y,"_frameRate",360),s(y,"_frameTimeCount",0),s(y,"_deltaTime",0),s(y,"_time",0),s(y,"_beforeRender"),s(y,"_renderLoop"),s(y,"_lateRender"),s(y,"_requestAnimationFrameID",0),s(y,"Engine3D"),s(y,"divB"),s(y,"setting",{occlusionQuery:{enable:!0,debug:!1},pick:{enable:!0,mode:"bound",detail:"mesh"},render:{debug:!1,renderPassState:4,renderState_left:5,renderState_right:5,renderState_split:.5,quadScale:1,hdrExposure:1.5,debugQuad:-1,maxPointLight:1e3,maxDirectLight:4,maxSportLight:1e3,drawOpMin:0,drawOpMax:Number.MAX_SAFE_INTEGER,drawTrMin:0,drawTrMax:Number.MAX_SAFE_INTEGER,zPrePass:!1,useLogDepth:!1,gi:!1,postProcessing:{bloom:{downSampleStep:5,downSampleBlurSize:5,downSampleBlurSigma:1,upSampleBlurSize:5,upSampleBlurSigma:1,luminanceThreshole:1,bloomIntensity:1},globalFog:{debug:!1,enable:!1,fogType:0,fogHeightScale:.1,start:400,end:10,density:.02,ins:.5,skyFactor:.5,skyRoughness:.4,overrideSkyFactor:.8,fogColor:new F(96/255,117/255,133/255,1),falloff:.7,rayLength:200,scatteringExponent:2.7,dirHeightLine:10},godRay:{blendColor:!0,rayMarchCount:16,scatteringExponent:5,intensity:.5},ssao:{enable:!1,radius:.15,bias:-.1,aoPower:2,debug:!0},outline:{enable:!1,strength:1,groupCount:4,outlinePixel:2,fadeOutlinePixel:4,textureScale:.7,useAddMode:!1,debug:!0},taa:{enable:!1,jitterSeedCount:8,blendFactor:.1,sharpFactor:.6,sharpPreBlurFactor:.5,temporalJitterScale:.13,debug:!0},gtao:{enable:!1,darkFactor:1,maxDistance:5,maxPixel:50,rayMarchSegment:6,multiBounce:!1,usePosFloat32:!0,blendColor:!0,debug:!0},ssr:{enable:!1,pixelRatio:1,fadeEdgeRatio:.2,rayMarchRatio:.5,fadeDistanceMin:600,fadeDistanceMax:2e3,roughnessThreshold:.5,powDotRN:.2,mixThreshold:.1,debug:!0},fxaa:{enable:!1},depthOfView:{enable:!1,iterationCount:3,pixelOffset:1,near:150,far:300}}},shadow:{enable:!0,type:"HARD",pointShadowBias:.002,shadowSize:1024,pointShadowSize:1024,shadowSoft:.005,shadowBias:1e-4,needUpdate:!0,autoUpdate:!0,updateFrameRate:2,csmMargin:.1,csmScatteringExp:.7,csmAreaScale:.4,debug:!1},gi:{enable:!1,offsetX:0,offsetY:0,offsetZ:0,probeSpace:64,probeXCount:4,probeYCount:2,probeZCount:4,probeSize:32,probeSourceTextureSize:2048,octRTMaxSize:2048,octRTSideSize:16,maxDistance:64*1.73,normalBias:.25,depthSharpness:1,hysteresis:.98,lerpHysteresis:.01,irradianceChebyshevBias:.01,rayNumber:144,irradianceDistanceBias:32,indirectIntensity:1,ddgiGamma:2.2,bounceIntensity:.025,probeRoughness:1,realTimeGI:!1,debug:!1,autoRenderProbe:!1},sky:{type:"HDRSKY",sky:null,skyExposure:1,defaultFar:65536,defaultNear:1},light:{maxLight:4096},material:{materialChannelDebug:!1,materialDebug:!1},loader:{numConcurrent:20}}),s(y,"renderJobs");let Su=`

    #include "GlobalUniform"

    struct PickResult{
        pick_meshID:f32,
        pick_meshID2:f32,
        pick_UV:vec2<f32>,
        pick_Position:vec4<f32>,
        pick_Normal:vec4<f32>,
        pick_Tangent:vec4<f32>,
    }

    //@group(0) @binding(0) var<uniform> globalUniform: GlobalUniform;
    @group(0) @binding(1) var<storage,read_write> outBuffer: PickResult;
    @group(0) @binding(2) var visibleMap : texture_2d<f32>;

    @compute @workgroup_size( 1 )
    fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
    {
    var result:PickResult ;
    // result.pick_meshID
    let texSize = textureDimensions(visibleMap).xy;
    let screenPoint = vec2<f32>(globalUniform.mouseX/globalUniform.windowWidth,globalUniform.mouseY/globalUniform.windowHeight);

    let mouseUV = screenPoint * vec2<f32>(texSize.xy); 
    let info = textureLoad(visibleMap, vec2<i32>(mouseUV) , 0);

    outBuffer.pick_meshID = f32(info.w) ;
    outBuffer.pick_meshID2 = f32(info.w) ;
    outBuffer.pick_Tangent = vec4<f32>(2.0,2.0,2.0,2.0) ;
    outBuffer.pick_UV = vec2<f32>(globalUniform.mouseX,globalUniform.mouseY) ;
    outBuffer.pick_Position = vec4<f32>(info.xyzw) ;
    outBuffer.pick_Normal = vec4<f32>(info.xyzw) ;
    }
`,wu=`
var<private>PI: f32 = 3.141592653589793;

fn Scatter( r:f32) -> vec3f
{
    return Gaussian(0.0064 * 1.414, r) * vec3f(0.233, 0.455, 0.649)
           + Gaussian(0.0484 * 1.414, r) * vec3f(0.100, 0.336, 0.344)
           + Gaussian(0.1870 * 1.414, r) * vec3f(0.118, 0.198, 0.000)
           + Gaussian(0.5670 * 1.414, r) * vec3f(0.113, 0.007, 0.007)
           + Gaussian(1.9900 * 1.414, r) * vec3f(0.358, 0.004, 0.00001)
           + Gaussian(7.4100 * 1.414, r) * vec3f(0.078, 0.00001, 0.00001);
}

fn Gaussian( v:f32 , r:f32 ) -> f32
{
    return 1.0 / sqrt(2.0 * PI * v) * exp(-(r * r) / (2.0 * v));
}

fn Integrate( cosTheta : f32 ,  skinRadius: f32 ) -> vec3f
{
    var theta = acos(cosTheta);  // theta -> the angle from lighting direction
    var totalWeights = vec3f(0.0);
    var totalLight = vec3f(0.0);

    var a = -(PI / 2.0);
    let inc = 0.05;

    while ( a <= (PI / 2.0) ) {
        var sampleAngle = theta + a;
        var diffuse = clamp(cos(sampleAngle),0.0,1.0);

        // calc distance
        var sampleDist = abs(2.0 * skinRadius * sin(a * 0.5));

        // estimated by Gaussian pdf
        var weights = Scatter(sampleDist);

        totalWeights += weights;
        totalLight += diffuse * weights;
        a += inc;
    }

    var result = vec3f(totalLight.x / totalWeights.x, totalLight.y / totalWeights.y, totalLight.z / totalWeights.z);
    return result;
}

@group(0) @binding(0) var sssMap: texture_storage_2d<rgba8unorm, write>;

@compute @workgroup_size(8, 8, 1)
// fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(local_invocation_id) local_invocation_id : vec3<u32> ){
fn CsMain(@builtin(global_invocation_id) global_invocation_id : vec3<u32>){
    var fragCoord = vec2<u32>(global_invocation_id.x, global_invocation_id.y);

    var fragColor = vec4<f32>(1.0,1.0,0.0,1.0);
    // // Output to screen
    // var res = integrateBRDF(f32(fragCoord.y + 1u) / 256.0, f32(fragCoord.x + 1u) / 256.0);
    // fragColor = vec4<f32>(res.x, res.y, 0.0, 1.0);

    var NDotL = mix(-1.0, 1.0, f32(fragCoord.x) / 256.0) ; 
    var oneOverR = 2.0 * 1.0 / (f32((fragCoord.y + 1u)) / 256.0);  

    //Integrate Diffuse Scattering
    var diff = Integrate(NDotL, oneOverR);
    // fragColor = vec4f(diff,1.0);
    fragColor = vec4f(vec3f(diff),1.0);
    textureStore(sssMap, vec2<i32>(fragCoord.xy), fragColor);
}
`,bu=`
    #include "WorldMatrixUniform"
    struct VertexAttributes{
        @builtin(instance_index) index : u32,

        @location(auto) position: vec3<f32>,
        @location(auto) normal: vec3<f32>,
        @location(auto) uv: vec2<f32>,
        @location(auto) TEXCOORD_1: vec2<f32>,
        @location(auto) vIndex: f32,
        @location(auto) index2: f32,
        
    }

    struct VertexOutput {
        @location(auto) index: f32,
        @location(auto) varying_UV0: vec2<f32>,
        @location(auto) varying_UV1: vec2<f32>,
        @location(auto) varying_ViewPos: vec4<f32>,
        @location(auto) varying_Clip: vec4<f32>,
        @location(auto) varying_WPos: vec4<f32>,
        @location(auto) varying_WNormal: vec3<f32>,
        @location(auto) varying_Color: vec4<f32>,
        #if USE_SHADOWMAPING
            @location(auto) varying_ShadowPos: vec4<f32>,
        #endif
        @builtin(position) member: vec4<f32>
    };

    struct TransformVertex{
        position:vec3<f32>,
        normal:vec3<f32>,
    }

    struct GraphicNodeStruct{
        matrixIndex:f32,
        texIndex:f32,
        tex2Index:f32,
        tex3Index:f32,

        fillRotation:f32,
        empty0:f32,
        empty1:f32,
        empty2:f32,

        baseColor:vec4f,
        lineColor:vec4f,
        emissiveColor:vec4f,
        uvRect:vec4f,
        uvRect2:vec4f,
        uvSpeed:vec4f,
    }

    var<private> ORI_VertexOut: VertexOutput ;
    var<private> worldMatrix: mat4x4<f32> ;
    var<private> graphicNode: GraphicNodeStruct ;

    fn ORI_Vert(vertex:VertexAttributes){
        var vertexPosition = vertex.position;
        var vertexNormal = vertex.normal;

        ORI_VertexOut.index = f32(vertex.vIndex) ;
        graphicNode = graphicBuffer[u32(round(vertex.vIndex))];
        let node_Matrix_M = models.matrix[u32(round(graphicNode.matrixIndex))];

        #if USE_TANGENT
            ORI_VertexOut.varying_Tangent = vertex.TANGENT ;
        #endif

        ORI_MATRIX_M = node_Matrix_M * ORI_MATRIX_M ;

        #if USE_BILLBOARD
            let billboardMatrix: mat3x3<f32> = calculateBillboardMatrix2(globalUniform.CameraPos.xyz,ORI_MATRIX_M[3].xyz,globalUniform.cameraWorldMatrix[1].xyz);
            vertexPosition = billboardMatrix * vertexPosition.xyz;
        #endif

        worldMatrix = ORI_MATRIX_M ;

        let nMat = mat3x3<f32>(ORI_MATRIX_M[0].xyz,ORI_MATRIX_M[1].xyz,ORI_MATRIX_M[2].xyz) ;
        ORI_NORMALMATRIX = transpose(inverse( nMat ));

        var worldPos = (ORI_MATRIX_M * vec4<f32>(vertexPosition.xyz, 1.0));

        #if TRANSFORMVERTEX
            var transformVertex = transformVertex(worldPos.xyz,vertexNormal,vertex);
            worldPos = vec4<f32>(transformVertex.position ,worldPos.w);
            vertexNormal = transformVertex.normal ;
        #endif

        var viewPosition = ORI_MATRIX_V * worldPos;
        var clipPosition = ORI_MATRIX_P * viewPosition ;

        ORI_VertexOut.varying_UV0 = vertex.uv.xy ;
        ORI_VertexOut.varying_UV1 = vertex.TEXCOORD_1.xy;
        ORI_VertexOut.varying_ViewPos = viewPosition / viewPosition.w;
        ORI_VertexOut.varying_Clip = clipPosition;
        ORI_VertexOut.varying_WPos = worldPos;
        ORI_VertexOut.varying_WNormal = normalize( vertexNormal.xyz);
        ORI_VertexOut.member = clipPosition ;
    }
`,Eu=`
    #include "WorldMatrixUniform"
    #include "GlobalUniform"

    struct VertexAttributes {
        @location(auto) position: vec4<f32>,
        @location(auto) color: vec4<f32>,
    }

    struct VertexOutput {
        @location(auto) varying_WPos: vec4<f32>,
        @location(auto) varying_Color: vec4<f32>,
        @builtin(position) member: vec4<f32>
    };

    @vertex
    fn VertMain( vertex:VertexAttributes ) -> VertexOutput {
        var worldMatrix = models.matrix[u32(vertex.position.w)];
        var worldPos = (worldMatrix * vec4<f32>(vertex.position.xyz, 1.0));
        var viewPosition = ((globalUniform.viewMat) * worldPos);
        var clipPosition = globalUniform.projMat * viewPosition;

        var ORI_VertexOut: VertexOutput; 
        ORI_VertexOut.varying_WPos = worldPos;
        ORI_VertexOut.varying_Color = vertex.color;
        ORI_VertexOut.member = clipPosition;
        return ORI_VertexOut;
    }

    struct FragmentOutput {
        @location(auto) color: vec4<f32>,
        // #if USE_WORLDPOS
            @location(auto) worldPos: vec4<f32>,
        // #endif
        // #if USEGBUFFER
            @location(auto) worldNormal: vec4<f32>,
            @location(auto) material: vec4<f32>,
        // #endif
        @builtin(frag_depth) out_depth: f32
    };

    @fragment
    fn FragMain(  
        @location(auto) vWorldPos: vec4<f32>,
        @location(auto) varying_Color: vec4<f32>,
    ) -> FragmentOutput {
        var result: FragmentOutput;

        // #if USE_WORLDPOS
            result.worldPos = vWorldPos;
        // #endif

        // #if USEGBUFFER
            // result.worldNormal = vec4<f32>(0.0, 0.0, 0.0, 1.0); 
            result.material = vec4<f32>(0.0, 1.0, 0.0, 0.0);
        // #endif

        result.color = varying_Color;

        // let n = globalUniform.near ;
        // let f = globalUniform.far ;
        // let z = ORI_VertexVarying.fragCoord.z ;
        // let pt = pow((f / n),z);
        // let ratio = n * pt / (f / n);
        // result.out_depth =  ratio ;
        return result;
    }
`,Tu=n=>`
    #include "GlobalUniform"
    struct VertexInfo{
        position:vec3f,
        // px:f32,
        // py:f32,
        // pz:f32,
        nx:f32,
        ny:f32,
        nz:f32,
        uv_x:f32,
        uv_y:f32,
        uv2_x:f32,
        uv2_y:f32,
        index:f32,
        index2:f32
    }

    struct TrailInfo{
        index : f32 ,
        segment : f32 ,
        visible : f32 ,
        width: f32,

        uv: vec4f,

        uvSpeed: vec2f,
        smoothLine: f32,
        faceMode: f32,
        up: vec4f,
        ids:array<f32,${n}>
    }

    @group(0) @binding(1) var<storage, read_write> vertexBuffer : array<VertexInfo>;
    @group(0) @binding(2) var<storage, read> trailBuffer : array<TrailInfo>;
    @group(0) @binding(3) var<storage, read> models : array<mat4x4<f32>>;

    var<private> time:f32;
    var<private> viewDir:vec3f;

    @compute @workgroup_size(256)
    fn CsMain(@builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) global_invocation_id : vec3<u32>){
        let rID = workgroup_id.x ;
        let trailInfo = trailBuffer[rID];
        let vLen = u32(trailInfo.segment+1.0) ;
        let vID = global_invocation_id.x ;

        // if(vID < vLen ){
            time = globalUniform.time * 0.001;
            var right:vec3f ;
            
            switch (u32(trailInfo.faceMode)) {
                case 0u:{
                    right = getRightByMode(vID,vLen,viewDir,trailInfo) ;
                    break;
                }
                case 1u:{
                    right = vec3f(0.0,0.0,1.0) ;
                    break;
                }
                case 2u:{
                    right = getRightByMode(vID,vLen,trailInfo.up.xyz,trailInfo) ;
                    break;
                }
                default:{
                    break;
                }
            }
            writeTOBuffer(rID,vID,vLen,right,trailInfo);
        // }
    }

 

    fn writeTOBuffer(rID:u32, vID:u32 , vLen:u32, right:vec3f , trailInfo:TrailInfo ){
        let i0 = (vID + (vLen * rID)) * 2u ;
        let li = i0 + 0u ;
        let ri = i0 + 1u ;

        let worldPos = models[i32(trailInfo.ids[vID])][3].xyz ;
        let leftPos = worldPos - right.xyz * trailInfo.width ;
        let rightPos = worldPos + right.xyz * trailInfo.width ;

        vertexBuffer[li].position = leftPos ;
        vertexBuffer[ri].position = rightPos ;

        let uvS = time * trailInfo.uvSpeed ;

        vertexBuffer[li].uv_x = (trailInfo.uv.x) + uvS.x ;
        vertexBuffer[ri].uv_x = (trailInfo.uv.z + trailInfo.uv.x) + uvS.x ;

        // var ld = 0.0 ;
        // var rd = 0.0 ;
        // if(vID>0u){
        //     let vid0 = getVID(vID,vLen,rID);
        //     let vid1 = getVID(vID-1u,vLen,rID);
        
        //     ld = distance( vertexBuffer[li].position , vertexBuffer[vid1.x].position ) ;
        //     rd = distance( vertexBuffer[ri].position , vertexBuffer[vid1.y].position ) ;

        //     vertexBuffer[li].uv_y = vertexBuffer[vid1.x].uv_y + 1.0 / ld * 100.0 ;//+ uvS.y ;
        //     vertexBuffer[ri].uv_y = vertexBuffer[vid1.y].uv_y + 1.0 / rd * 100.0 ;//+ uvS.y ;
        // }else{
            let v = (1.0 - f32(vID) / trailInfo.segment) * trailInfo.uv.w + trailInfo.uv.y;
            vertexBuffer[li].uv_y = v + uvS.y ;
            vertexBuffer[ri].uv_y = v + uvS.y ;
        // }
    }

    fn getRight(p0:vec3f,p1:vec3f,p2:vec3f,up:vec3f) -> vec3f {
        let d0 = normalize(p1 - p0) ;
        let d1 = normalize(p2 - p1) ;
        // var a = dot(d0,d1) ;
        // var ep = 0.0 ;
        // if(a<0.0){
        //     a = -a ;
        //     ep = 1.0/sin(a*0.25) ;
        // }else if(a == 0.0){
        //     ep = 1.414 ;
        // }else{
        //     ep = 1.0 ;
        // }
        let forward = normalize((d0 + d1)+ vec3f(0.000001,0.000001,0.000001)) ;
        return normalize(cross(forward,up)) ;//* ep ;
    }

    fn getVID(vID:u32,vLen:u32,rID:u32) -> vec2<u32> {
        let i0 = (vID + (vLen * rID)) * 2u ;
        let li = i0 + 0u ;
        let ri = i0 + 1u ;
        return vec2<u32>(li,ri);
    }

    fn getRightByMode( vID:u32 , vLen:u32, up:vec3f, trailInfo:TrailInfo ) -> vec3f{
        var right:vec3f;
        if(vID==0u){
            // first
            let sp0 = models[i32(trailInfo.ids[ 0 ])][3].xyz ;
            let sp1 = models[i32(trailInfo.ids[ 1 ])][3].xyz ;
            let firstFront = normalize(sp1 - sp0) ;
            viewDir = -normalize(globalUniform.CameraPos.xyz - sp0) ;
            right = normalize(cross(firstFront,viewDir));
        }else if( vID < (vLen-1) ){
            // body
            let bp0 = models[i32(trailInfo.ids[vID-1])][3].xyz ;
            let bp1 = models[i32(trailInfo.ids[vID])][3].xyz ;
            let bp2 = models[i32(trailInfo.ids[vID+1])][3].xyz ;
            viewDir = -normalize(globalUniform.CameraPos.xyz - bp1) ;
            right = getRight(bp0,bp1,bp2,viewDir) ;
        }else{
            // last
            let ep0 = models[i32(trailInfo.ids[u32(trailInfo.segment)-1u])][3].xyz ;
            let ep1 = models[i32(trailInfo.ids[u32(trailInfo.segment)])][3].xyz ;
            let endFront = normalize(ep1 - ep0) ;
            viewDir = -normalize(globalUniform.CameraPos.xyz - ep1) ;
            right = normalize(cross(endFront,viewDir));
        }
        return normalize(right) ; 
    }
    `,Bu=`
    #include "Common_vert"
    #include "Common_frag"
    #include "Hair_frag"

    @group(1) @binding(auto)
    var baseMapSampler: sampler;
    @group(1) @binding(auto)
    var baseMap: texture_2d<f32>;

    @group(1) @binding(auto)
    var idMapSampler: sampler;
    @group(1) @binding(auto)
    var idMap: texture_2d<f32>;

    @group(1) @binding(auto)
    var depthMapSampler: sampler;
    @group(1) @binding(auto)
    var depthMap: texture_2d<f32>;

    @group(1) @binding(auto)
    var rootMapSampler: sampler;
    @group(1) @binding(auto)
    var rootMap: texture_2d<f32>;

    @group(1) @binding(auto)
    var alphaMapSampler: sampler;
    @group(1) @binding(auto)
    var alphaMap: texture_2d<f32>;

    #if USE_CUSTOMUNIFORM
    struct MaterialUniform {
      transformUV1:vec4<f32>,
      transformUV2:vec4<f32>,

      baseColor0: vec4<f32>,
      baseColor1: vec4<f32>,
      emissiveColor: vec4<f32>,
      materialF0: vec4<f32>,
      specularColor: vec4<f32>,
      envIntensity: f32,
      normalScale: f32,
      roughness: f32,
      metallic: f32,

      ao: f32,
      roughness_min: f32,
      roughness_max: f32,
      metallic_min: f32,

      metallic_max: f32,
      emissiveIntensity: f32,
      alphaCutoff: f32,
      ior: f32,

      backlit: f32,
      area: f32,
    };
#endif
    
    var<private> debugOut : vec4f = vec4f(0.0) ;
    var<private> uv : vec2f = vec2f(0.0) ;

    fn vert(inputData:VertexAttributes) -> VertexOutput {
        ORI_Vert(inputData) ;
        return ORI_VertexOut ;
    }

    fn frag(){
        var transformUV1 = materialUniform.transformUV1;
        var transformUV2 = materialUniform.transformUV2;
        uv = transformUV1.zw * ORI_VertexVarying.fragUV0 + transformUV1.xy; 

        ORI_ShadingInput.Roughness = materialUniform.roughness;
        ORI_ShadingInput.Metallic = materialUniform.metallic;
        

        #if USE_HAIRCOLOR
            let root = textureSample(rootMap, rootMapSampler, uv ).r ;
            ORI_ShadingInput.BaseColor = mix(materialUniform.baseColor0,materialUniform.baseColor1,root)  ;
        #else
            #if USE_SRGB_ALBEDO
                ORI_ShadingInput.BaseColor = textureSample(baseMap, baseMapSampler, uv )  ;
            #else 
                ORI_ShadingInput.BaseColor = textureSample(baseMap, baseMapSampler, uv )  ;
            #endif
        #endif

        fragData.Alpha = 1.0 ;
        #if USE_ALPHA_A
        // fragData.Alpha =  textureSampleLevel(alphaMap, alphaMapSampler, uv , 0.0 ).r ;
            // let shake = (globalUniform.frame % 5.0) / 5.0 * 2.0 ;
            fragData.Alpha =  textureSample(alphaMap, alphaMapSampler, uv ).r ;
        #endif

        #if USE_ALPHACUT 
            if( (fragData.Alpha - materialUniform.alphaCutoff) < 0.0 ){
                #if USEGBUFFER
                    ORI_FragmentOutput.worldPos = vec4<f32>(0.0,0.0,0.0,1.0);
                    ORI_FragmentOutput.worldNormal = vec4<f32>(0.0,0.0,0.0,1.0);
                    ORI_FragmentOutput.material = vec4<f32>(0.0,0.0,0.0,1.0);
                #endif
                discard;
            }
        #endif

        useShadow();

        ORI_ShadingInput.Specular = 1.0 ;

        let idMap = textureSampleLevel(idMap, idMapSampler, uv , 0.0 );
        var hairNormal = HairNormal(idMap.r).rgb ;
        hairNormal = transformHairNormal( hairNormal) ;  
        ORI_ShadingInput.HairNormal = hairNormal ;

        ORI_ShadingInput.Normal = unPackRGNormal(vec3f(0.5,0.5,1.0),1.0,1.0) ;

        ORI_ShadingInput.BaseColor.a = fragData.Alpha;
        
        BSSSRDFShading();
    }
`,Du=`
#include "Common_vert"
#include "Common_frag"
#include "Hair_frag"

@group(1) @binding(auto)
var baseMapSampler: sampler;
@group(1) @binding(auto)
var baseMap: texture_2d<f32>;

@group(1) @binding(auto)
var idMapSampler: sampler;
@group(1) @binding(auto)
var idMap: texture_2d<f32>;

@group(1) @binding(auto)
var depthMapSampler: sampler;
@group(1) @binding(auto)
var depthMap: texture_2d<f32>;

@group(1) @binding(auto)
var rootMapSampler: sampler;
@group(1) @binding(auto)
var rootMap: texture_2d<f32>;

@group(1) @binding(auto)
var alphaMapSampler: sampler;
@group(1) @binding(auto)
var alphaMap: texture_2d<f32>;

#if USE_CUSTOMUNIFORM
struct MaterialUniform {
  transformUV1:vec4<f32>,
  transformUV2:vec4<f32>,

  baseColor0: vec4<f32>,
  baseColor1: vec4<f32>,
  emissiveColor: vec4<f32>,
  materialF0: vec4<f32>,
  specularColor: vec4<f32>,
  envIntensity: f32,
  normalScale: f32,
  roughness: f32,
  metallic: f32,

  ao: f32,
  roughness_min: f32,
  roughness_max: f32,
  metallic_min: f32,

  metallic_max: f32,
  emissiveIntensity: f32,
  alphaCutoff: f32,
  ior: f32,

  backlit: f32,
  area: f32,
};
#endif

var<private> debugOut : vec4f = vec4f(0.0) ;
var<private> uv : vec2f = vec2f(0.0) ;

fn vert(inputData:VertexAttributes) -> VertexOutput {
    ORI_Vert(inputData) ;
    return ORI_VertexOut ;
}

fn frag(){
    var transformUV1 = materialUniform.transformUV1;
    var transformUV2 = materialUniform.transformUV2;
    uv = transformUV1.zw * ORI_VertexVarying.fragUV0 + transformUV1.xy; 

    ORI_ShadingInput.Roughness = materialUniform.roughness;
    ORI_ShadingInput.Metallic = materialUniform.metallic;

    #if USE_HAIRCOLOR
        let root = textureSample(rootMap, rootMapSampler, uv ).r ;
        ORI_ShadingInput.BaseColor = mix(materialUniform.baseColor0,materialUniform.baseColor1,root)  ;
    #else
        #if USE_SRGB_ALBEDO
            ORI_ShadingInput.BaseColor = textureSample(baseMap, baseMapSampler, uv )  ;
        #else 
            ORI_ShadingInput.BaseColor = textureSample(baseMap, baseMapSampler, uv )  ;
        #endif
    #endif

    fragData.Alpha = 1.0 ;
    #if USE_ALPHA_A
        fragData.Alpha =  textureSampleLevel(alphaMap, alphaMapSampler, uv , 0.0 ).r ;
    #endif

    #if USE_ALPHACUT 
        if( (((1.0 - fragData.Alpha) - (1.0 - materialUniform.alphaCutoff))) < 0.0 ){
            #if USEGBUFFER
                ORI_FragmentOutput.worldPos = vec4<f32>(0.0,0.0,0.0,1.0);
                ORI_FragmentOutput.worldNormal = vec4<f32>(0.0,0.0,0.0,1.0);
                ORI_FragmentOutput.material = vec4<f32>(0.0,0.0,0.0,1.0);
            #endif
            discard;
        }
    #endif

    #if USE_SHADOWMAPING
        useShadow();
    #endif

    ORI_ShadingInput.Specular = 1.0 ;

    let idMap = textureSampleLevel(idMap, idMapSampler, uv , 0.0 );
    var hairNormal = HairNormal(idMap.r).rgb ;
    hairNormal = transformHairNormal( hairNormal) ;  
    ORI_ShadingInput.HairNormal = hairNormal ;

    ORI_ShadingInput.Normal = unPackRGNormal(vec3f(0.5,0.5,1.0),1.0,1.0) ;

    ORI_ShadingInput.BaseColor.a = fragData.Alpha;
    
    BSSSRDFShading();
}
`,Ru=`
    #include "Common_vert"
    #include "Common_frag"
    #include "BsDF_frag"

    @group(1) @binding(auto)
    var baseMapSampler: sampler;
    @group(1) @binding(auto)
    var baseMap: texture_2d<f32>;

    @group(1) @binding(auto)
    var normalMapSampler: sampler;
    @group(1) @binding(auto)
    var normalMap: texture_2d<f32>;

    #if USE_CUSTOMUNIFORM
        struct MaterialUniform {
          transformUV1:vec4<f32>,
          transformUV2:vec4<f32>,

          baseColor: vec4<f32>,
          emissiveColor: vec4<f32>,
          materialF0: vec4<f32>,
          specularColor: vec4<f32>,
          envIntensity: f32,
          normalScale: f32,
          roughness: f32,
          metallic: f32,

          ao: f32,
          roughness_min: f32,
          roughness_max: f32,
          metallic_min: f32,

          metallic_max: f32,
          emissiveIntensity: f32,
          alphaCutoff: f32,
          ior: f32,

          clearcoatColor: vec4<f32>,

          clearcoatWeight: f32,
          clearcoatFactor: f32,
          clearcoatRoughnessFactor: f32,
          skinPower: f32,
          
          skinColor: vec4<f32>,
          skinColorIns: f32,
          curveFactor: f32,
        };
    #endif
    // #if USE_ARMC
        // @group(1) @binding(auto)
        // var maskMapSampler: sampler;
        // @group(1) @binding(auto)
        // var maskMap: texture_2d<f32>;
    // #endif

    // #if USE_MR
        @group(1) @binding(auto)
        var maskMapSampler: sampler;
        @group(1) @binding(auto)
        var maskMap: texture_2d<f32>;
    // #endif

    #if USE_AOTEX
        @group(1) @binding(auto)
        var aoMapSampler: sampler;
        @group(1) @binding(auto)
        var aoMap: texture_2d<f32>;
    #endif

    @group(1) @binding(auto)
    var emissiveMapSampler: sampler;
    @group(1) @binding(auto)
    var emissiveMap: texture_2d<f32>;

    @group(1) @binding(auto)
    var sssMapSampler: sampler;
    @group(1) @binding(auto)
    var sssMap: texture_2d<f32>;

    @group(1) @binding(auto)
    var lutMapSampler: sampler;
    @group(1) @binding(auto)
    var lutMap: texture_2d<f32>;

    var<private> debugOut : vec4f = vec4f(0.0) ;

    fn vert(inputData:VertexAttributes) -> VertexOutput {
        ORI_Vert(inputData) ;
        return ORI_VertexOut ;
    }

    fn frag(){
        var transformUV1 = materialUniform.transformUV1;
        var transformUV2 = materialUniform.transformUV2;

        var uv = transformUV1.zw * ORI_VertexVarying.fragUV0 + transformUV1.xy; 

        #if USE_SRGB_ALBEDO
            ORI_ShadingInput.BaseColor = textureSample(baseMap, baseMapSampler, uv )  ;
            ORI_ShadingInput.BaseColor = vec4f(ORI_ShadingInput.BaseColor.rgb/ORI_ShadingInput.BaseColor.a,ORI_ShadingInput.BaseColor.a)  ;
            ORI_ShadingInput.BaseColor = vec4<f32>(gammaToLiner(ORI_ShadingInput.BaseColor.rgb) * materialUniform.baseColor.rgb, ORI_ShadingInput.BaseColor.w * materialUniform.baseColor.a)  ;
        #else
            ORI_ShadingInput.BaseColor = textureSample(baseMap, baseMapSampler, uv )  ;
            ORI_ShadingInput.BaseColor = vec4f(ORI_ShadingInput.BaseColor.rgb/ORI_ShadingInput.BaseColor.a,ORI_ShadingInput.BaseColor.a)  ;
            ORI_ShadingInput.BaseColor = vec4<f32>(gammaToLiner(ORI_ShadingInput.BaseColor.rgb) * materialUniform.baseColor.rgb, ORI_ShadingInput.BaseColor.w * materialUniform.baseColor.a)  ;
        #endif

        var maskTex = textureSample(maskMap, maskMapSampler, uv ) ;
       
        #if USE_ALPHA_A
            ORI_ShadingInput.BaseColor.a =  ORI_ShadingInput.BaseColor.a * (maskTex.a) ;
            ORI_ShadingInput.BaseColor =  vec4f(ORI_ShadingInput.BaseColor.rgb/ORI_ShadingInput.BaseColor.a,ORI_ShadingInput.BaseColor.a) ;
        #endif

        #if USE_ALPHACUT 
            if( (ORI_ShadingInput.BaseColor.a - materialUniform.alphaCutoff) <= 0.0 ){
                ORI_FragmentOutput.color = vec4<f32>(0.0,0.0,0.0,1.0);
                ORI_FragmentOutput.worldPos = vec4<f32>(0.0,0.0,0.0,1.0);
                ORI_FragmentOutput.worldNormal = vec4<f32>(0.0,0.0,0.0,1.0);
                ORI_FragmentOutput.material = vec4<f32>(0.0,0.0,0.0,1.0);
                discard;
            }
        #endif

        useShadow();

        // maskTex =vec4f( gammaToLiner(maskTex.rgb), maskTex.a );

        var roughnessChannel:f32 = 1.0 ;
        #if USE_ROUGHNESS_A
            roughnessChannel = maskTex.a ;
        #else if USE_ROUGHNESS_R
            roughnessChannel = maskTex.r ;
        #else if USE_ROUGHNESS_G
            roughnessChannel = maskTex.g ;
        #else if USE_ROUGHNESS_B
            roughnessChannel = maskTex.b ;
        #else if USE_ALBEDO_A
            roughnessChannel = ORI_ShadingInput.BaseColor.a ;
        #endif  

        #if USE_SMOOTH
            var roughness = ( 1.0 - roughnessChannel ) * materialUniform.roughness;
            ORI_ShadingInput.Roughness = clamp(roughness , 0.0001 , 1.0);
        #else
            ORI_ShadingInput.Roughness = clamp(roughnessChannel * materialUniform.roughness ,0.0001,1.0);
        #endif 

        var metallicChannel:f32 = 1.0 ;
        #if USE_METALLIC_A
            metallicChannel = maskTex.a ;
        #else if USE_METALLIC_R
            metallicChannel = maskTex.r ;
        #else if USE_METALLIC_G
            metallicChannel = maskTex.g ;
        #else if USE_METALLIC_B
            metallicChannel = maskTex.b ;
        #endif    
        ORI_ShadingInput.Metallic = metallicChannel * metallicChannel * materialUniform.metallic ;
   
        var aoChannel:f32 = 1.0 ;
        #if USE_AOTEX
            var aoMap = textureSample(aoMap, aoMapSampler, uv );
            aoChannel = aoMap.g ;
        #else
            #if USE_AO_A
                aoChannel = maskTex.a ;
            #else if USE_AO_R
                aoChannel = maskTex.r ;
            #else if USE_AO_G
                aoChannel = maskTex.g ;
            #else if USE_AO_B
                aoChannel = maskTex.b ;
            #endif  
        #endif

        // ORI_ShadingInput.BaseColor.a = maskTex.a ;

        ORI_ShadingInput.AmbientOcclusion = aoChannel ;

        ORI_ShadingInput.Specular = 1.0 ;

        var emissiveColor = textureSample(emissiveMap, emissiveMapSampler , ORI_VertexVarying.fragUV0.xy) ;

        emissiveColor = vec4<f32>(gammaToLiner(emissiveColor.rgb),emissiveColor.w);

        ORI_ShadingInput.EmissiveColor = vec4<f32>(materialUniform.emissiveColor.rgb * emissiveColor.rgb * materialUniform.emissiveIntensity,1.0);

     

        var Normal = textureSample(normalMap,normalMapSampler,uv).rgb ;

        let normal = unPackRGNormal(Normal,1.0,1.0) ;  
        
        ORI_ShadingInput.Normal = normal ;

        var sssColor = vec3f(pow(textureSample(sssMap, sssMapSampler, uv ).r,materialUniform.skinPower)) * materialUniform.skinColor.rgb ;
        let sunLight = lightBuffer[0] ;
        let sunLightIntensity = (sunLight.intensity / LUMEN)  ;
        let ndl = 1.0 - clamp(dot(normalize(normal),-normalize(sunLight.direction)),0.0,1.0) * 0.5 + 0.5 ;//1.0 - saturate( dot(normalize(normal),normalize(sunLight.direction)) ) * 0.5 + 0.5 ;
        ORI_ShadingInput.SSS += 0.5 * vec3f(sssColor * sunLightIntensity * materialUniform.skinColorIns * ndl * sunLight.lightColor.rgb ) ;
     
        var curve = clamp(materialUniform.curveFactor * (length(fwidth(ORI_ShadingInput.Normal.xyz)) / length(fwidth(ORI_VertexVarying.vWorldPos.xyz*100.0))),0.0,1.0);
        var NDotL = dot(ORI_ShadingInput.Normal, -sunLight.direction );
        var sssColor2 = textureSample(lutMap, lutMapSampler ,vec2f(NDotL * 0.5 + 0.5, materialUniform.curveFactor * sssColor.r)).rgb * sunLight.lightColor.rgb * sunLightIntensity ;
        ORI_ShadingInput.SSS = sssColor2.rgb * ORI_ShadingInput.BaseColor.rgb ;
     
        BsDFShading();

        // ORI_FragmentOutput.color = vec4f(vec3f(0.5*ORI_ShadingInput.SSS),1.0)  ;
    }
`,Mu=`
    // #include "Common_vert"
    #include "Common_frag"
    #include "UnLit_frag"
    #include "UnLitMaterialUniform_frag"

    #include "WorldMatrixUniform"
    #include "VertexAttributeIndexShader"
    #include "GlobalUniform"
    #include "Inline_vert"
    #include "EnvMap_frag"
    #include "ColorUtil_frag"

    const DEGREES_TO_RADIANS : f32 = 3.1415926 / 180.0 ;
    const PI : f32 = 3.1415926 ;

    #if USE_CUSTOMUNIFORM
        struct MaterialUniform {
            transformUV1:vec4<f32>,
            transformUV2:vec4<f32>,
            baseColor: vec4<f32>,
            alphaCutoff: f32,
        };
    #endif

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_2d_array<f32>;

    @group(2) @binding(5)
    var<storage,read> graphicBuffer : array<GraphicNodeStruct>;
    
    @vertex
    fn VertMain( vertex:VertexAttributes ) -> VertexOutput {
        vertex_inline(vertex);
        vert(vertex);
        return ORI_VertexOut ;
    }

    fn vert(inputData:VertexAttributes) -> VertexOutput {
        ORI_Vert(inputData) ;
        return ORI_VertexOut ;
    }

    fn frag(){
        var transformUV1 = materialUniform.transformUV1;
        var transformUV2 = materialUniform.transformUV2;

        // var irradiance = vec3<f32>(0.0) ;
        // let MAX_REFLECTION_LOD  = f32(textureNumLevels(prefilterMap)) ;
        // irradiance += (globalUniform.skyExposure * textureSampleLevel(prefilterMap, prefilterMapSampler, ORI_VertexVarying.vWorldNormal.xyz, 0.8 * (MAX_REFLECTION_LOD) ).rgb);

        graphicNode = graphicBuffer[u32(round(ORI_VertexVarying.index))];
        
        var uv = transformUV1.zw * ORI_VertexVarying.fragUV0 + transformUV1.xy;
        //The fragUV1.x is 1.0 when the vertex belongs to line.
        if(ORI_VertexVarying.fragUV1.x > 0.5){
            uv = graphicNode.uvRect2.zw * uv.xy + graphicNode.uvRect2.xy;
            uv += graphicNode.uvSpeed.zw * globalUniform.time;
        }else{
            uv = graphicNode.uvRect.zw * uv.xy + graphicNode.uvRect.xy;
            uv += graphicNode.uvSpeed.xy * globalUniform.time;
            let rad = graphicNode.fillRotation;
            if(rad != 0.0){
                let zrot = mat3x3<f32>(
                    cos(rad),-sin(rad),0.0,
                    sin(rad), cos(rad),0.0,
                    0.0,0.0,1.0
                );
                uv = (zrot * vec3f(uv, 0.0)).xy;
            }
        }
        var graphicTextureID = graphicNode.texIndex;
        var graphicNodeColor = graphicNode.baseColor;
        if(ORI_VertexVarying.fragUV1.x > 0.5){
            graphicTextureID = graphicNode.tex2Index;
            graphicNodeColor = graphicNode.lineColor;
        }
        var color = textureSample(baseMap,baseMapSampler,uv, u32(round(graphicTextureID)) ) * materialUniform.baseColor * graphicNodeColor ;
        // let color = textureSample(baseMap,baseMapSampler,uv, u32(round(ORI_VertexVarying.index)));

        // ORI_ViewDir = normalize( globalUniform.CameraPos.xyz - ORI_VertexVarying.vWorldPos.xyz);
        // let att = dot( ORI_ViewDir , ORI_VertexVarying.vWorldNormal.xyz );

        // irradiance = LinearToGammaSpace(irradiance.rgb) * color.rgb ;//* att ;

        color += graphicNode.emissiveColor ;
        if(color.w < 0.5){
            discard ;
        }

        // let outColor = vec4f( color.rgb * (att * 0.5 + 0.5 ) , 1.0 ) * materialUniform.baseColor ;
        let outColor = vec4f( color.rgb , 1.0 ) * materialUniform.baseColor ;
        
        // ORI_ShadingInput.BaseColor = color  ;
        ORI_ShadingInput.BaseColor = vec4f(outColor.xyz,1.0)  ;
        UnLit();
    }
`,Pu=`
    struct FragmentOutput {
        @location(auto) o_Target: vec4<f32>
    };

    var<private> varying_uv: vec2<f32>;
    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_2d<f32>;

    struct MaterialUniform{
        u_texel: vec2<f32>,
        u_strength: f32,
    }

    @group(2) @binding(0)
    var<uniform> materialUniform: MaterialUniform;


    fn LinearToGammaSpace(linRGB0: vec3<f32>) -> vec3<f32> {
        var linRGB = max(linRGB0, vec3(0.0, 0.0, 0.0));
        linRGB.r = pow(linRGB.r,0.416666667);
        linRGB.g = pow(linRGB.g,0.416666667);
        linRGB.b = pow(linRGB.b,0.416666667);
        return max(1.055 * linRGB - 0.055, vec3(0.0, 0.0, 0.0));
    }

    fn texture2D( uv:vec2<f32> , offset:vec2<f32> ) -> vec4<f32> {
        return textureSample(baseMap, baseMapSampler, uv.xy + offset ).rgba ;
    }

    @fragment
    fn main(@location(auto) fragUV: vec2<f32>) -> FragmentOutput {
        var v_vTexcoord = fragUV ;
        // v_vTexcoord.x = 1.0 - v_vTexcoord.x ;
        v_vTexcoord.y = 1.0 - v_vTexcoord.y ;

        var reducemul = 1.0 / 8.0;
        var reducemin = 1.0 / 128.0;

        var basecol = texture2D(v_vTexcoord , vec2<f32>(0.0)).rgba;
        var baseNW = texture2D(v_vTexcoord , -materialUniform.u_texel).rgb;
        var baseNE = texture2D(v_vTexcoord , vec2<f32>(materialUniform.u_texel.x, -materialUniform.u_texel.y)).rgb;
        var baseSW = texture2D(v_vTexcoord , vec2<f32>(-materialUniform.u_texel.x, materialUniform.u_texel.y)).rgb;
        var baseSE = texture2D(v_vTexcoord , materialUniform.u_texel ).rgb;

        // var gray = vec3<f32>(0.299, 0.587, 0.114);
        var gray = vec3<f32>(0.213, 0.715, 0.072);
        var monocol = dot(basecol.rgb, gray);
        var monoNW = dot(baseNW, gray);
        var monoNE = dot(baseNE, gray);
        var monoSW = dot(baseSW, gray);
        var monoSE = dot(baseSE, gray);

        var monomin = min(monocol, min(min(monoNW, monoNE), min(monoSW, monoSE)));
        var monomax = max(monocol, max(max(monoNW, monoNE), max(monoSW, monoSE)));

        var dir = vec2<f32>(-((monoNW + monoNE) - (monoSW + monoSE)), ((monoNW + monoSW) - (monoNE + monoSE)));
        var dirreduce = max((monoNW + monoNE + monoSW + monoSE) * reducemul * 0.25, reducemin);
        var dirmin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirreduce);
        dir = min(vec2<f32>(materialUniform.u_strength), max(vec2<f32>(-materialUniform.u_strength), dir * dirmin)) * materialUniform.u_texel;

        var resultA = 0.5 * (texture2D(v_vTexcoord , dir * -0.166667).rgb  +
                            texture2D(v_vTexcoord , dir * 0.166667).rgb);
        var resultB = resultA * 0.5 + 0.25 * (texture2D( v_vTexcoord , dir * -0.5).rgb +
                                            texture2D( v_vTexcoord , dir * 0.5).rgb);
        var monoB = dot(resultB.rgb, gray);
        
        var color:vec3<f32> ;
        if(monoB < monomin || monoB > monomax) {
            color = resultA ;//* v_vColour;
        } else {
            color = resultB ;//* v_vColour;
        }
        return FragmentOutput(vec4<f32>(color.rgb,basecol.a));
    }
`;var Uu=Object.defineProperty,Lu=Object.getOwnPropertyDescriptor,Ou=(n,t,e,r)=>{for(var i=r>1?void 0:r?Lu(t,e):t,a=n.length-1,o;a>=0;a--)(o=n[a])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&Uu(t,e,i),i};let vs=class extends lt{constructor(){super();let n=new Be("sky_vs_frag_wgsl","sky_fs_frag_wgsl");this.addRenderPass(n),n.setUniformVector3("eyesPos",new g),n.setUniformFloat("exposure",1),n.setUniformFloat("roughness",0);let t=n.shaderState;t.frontFace="cw",t.cullMode=Ze.back,t.depthWriteEnabled=!1,t.depthCompare=Xt.less}};vs=Ou([or],vs);class at{}s(at,"panelRatio",1),s(at,"quadMaxCountForWorld",256),s(at,"quadMaxCountForView",2048),s(at,"SortOrderStartWorld",7e3),s(at,"SortOrderStartView",8e3),s(at,"SortOrderCanvasSpan",1e4);var Et=(n=>(n[n.View=0]="View",n[n.World=2]="World",n))(Et||{}),Li=(n=>(n[n.Simple=0]="Simple",n[n.Sliced=1]="Sliced",n[n.Tiled=2]="Tiled",n[n.Filled=3]="Filled",n))(Li||{}),pr=(n=>(n[n.None=0]="None",n[n.BillboardY=9]="BillboardY",n[n.BillboardXYZ=10]="BillboardXYZ",n))(pr||{});class Oi extends Ke{constructor(){super();s(this,"type");s(this,"camera");s(this,"_cameraPosition");this._cameraPosition=new g}onUpdate(){this.enable&&this.transform.view3D.camera&&this.updateBillboardMatrix()}updateBillboardMatrix(){let e=this.transform.view3D.camera;this._cameraPosition.copyFrom(e.transform.back),this.type==pr.BillboardXYZ||this.type==pr.BillboardY&&(this._cameraPosition.y=0),this._cameraPosition.normalize(),this._cameraPosition.add(this.object3D.localPosition,this._cameraPosition),this.transform.lookAt(this.object3D.localPosition,this._cameraPosition,e.transform.up)}cloneTo(e){let r=e.addComponent(Oi);r.type=this.type}}var Nu=(n=>(n[n.None=0]="None",n[n.Box=1]="Box",n[n.Capsule=2]="Capsule",n[n.Sphere=3]="Sphere",n[n.Mesh=4]="Mesh",n))(Nu||{}),Fu=Object.defineProperty,ku=Object.getOwnPropertyDescriptor,Qu=(n,t,e,r)=>{for(var i=r>1?void 0:r?ku(t,e):t,a=n.length-1,o;a>=0;a--)(o=n[a])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&Fu(t,e,i),i};let vr=class extends Ke{constructor(){super(...arguments);s(this,"jointMatrixIndexTableBuffer");s(this,"playBlendShapeLoop",!1);s(this,"inverseBindMatrices");s(this,"_avatar");s(this,"_rendererList");s(this,"propertyCache");s(this,"_clips");s(this,"_clipsMap");s(this,"_currentSkeletonClip");s(this,"_currentBlendAnimClip");s(this,"_skeletonTime",0);s(this,"_blendShapeTime",0);s(this,"_skeletonSpeed",1);s(this,"_blendShapeSpeed",1);s(this,"_skeletonStart",!0);s(this,"_blendShapeStart",!0);s(this,"root");s(this,"_avatarName");s(this,"skeltonPoseObject3D",{});s(this,"skeltonTPoseObject3D",{})}init(t){this.propertyCache=new Map,this._clipsMap=new Map,this._clips=[]}start(){this._rendererList=this.object3D.getComponentsInChild(Zr)}debug(){}playAnim(t,e=0,r=1){this._clipsMap.has(t)?(this._currentSkeletonClip=this._clipsMap.get(t),this._skeletonTime=e,this._skeletonSpeed=r,this._skeletonStart=!0):console.warn(`not has anim ${t}`)}playBlendShape(t,e=0,r=1){this._clipsMap.has(t)?(this._currentBlendAnimClip=this._clipsMap.get(t),this._blendShapeTime=e,this._blendShapeSpeed=r,this._blendShapeStart=!0):console.warn(`not has blendShape ${t}`)}set avatar(t){this._avatarName=t,this.inverseBindMatrices=[],this._avatar=y.res.getObj(t);let e=this.buildSkeletonPose();const r=new Float32Array(e);this.jointMatrixIndexTableBuffer=new Pe(this._avatar.count,0,r)}getJointIndexTable(t){let e=new Array;for(let r=0;r<t.length;r++){let i=this._avatar.boneMap.get(t[r]);e[r]=i?i.boneID:-1}return e}buildSkeletonPose(){let t=[];for(const e of this._avatar.boneData){let r=new ee;V.getEuler(g.HELP_6,e.q,!0,"ZYX"),r.localPosition=e.t.clone(),r.localRotation=g.HELP_6.clone(),r.localScale=g.ONE,e.s.clone(),this.skeltonPoseObject3D[e.boneName]=r,this.skeltonTPoseObject3D[e.bonePath]=r.clone(),e.parentBoneName&&e.parentBoneName!=""?this.skeltonPoseObject3D[e.parentBoneName].addChild(r):(this.object3D.transform.scene3D&&this.object3D.transform.scene3D.addChild(r),this.root=r),t.push(r.transform.worldMatrix.index);let i=new V;i.copyFrom(r.transform.worldMatrix),i.invert(),this.inverseBindMatrices.push(i.rawData)}return t}set clips(t){this._clips=t;for(const e of t)this._clipsMap.set(e.clipName,e)}get clips(){return this._clips}cloneTo(t){let e=t.addComponent(vr);e.avatar=this._avatarName,e.clips=this._clips}updateTime(){this._skeletonStart&&(this._skeletonTime+=ie.delta*.001*this._skeletonSpeed,this._currentSkeletonClip&&this._currentSkeletonClip.loopTime&&(this._skeletonTime=this._skeletonTime%this._currentSkeletonClip.stopTime)),this._blendShapeStart&&(this._blendShapeTime+=ie.delta*.001*this._blendShapeSpeed,this._currentBlendAnimClip&&(this._currentBlendAnimClip.loopTime&&this.playBlendShapeLoop?this._blendShapeTime=this._blendShapeTime%this._currentBlendAnimClip.stopTime:this._blendShapeTime=Math.min(this._blendShapeTime,this._currentBlendAnimClip.stopTime)-1e-4))}onUpdate(t){this.transform.worldMatrix,this.updateTime(),this.updateSkeletonAnim(),this.updateMorphAnim()}updateSkeletonAnim(){if(this._currentSkeletonClip){let t=this._avatar.boneData,e=0,r=t.length;for(e=0;e<r;e++){const i=t[e];let a=this.skeltonPoseObject3D[i.boneName];if(this._currentSkeletonClip.useSkeletonPos){let l=this.getPosition(i.bonePath,this._skeletonTime);a.transform.localPosition=l}let o=this.getRotation(i.bonePath,this._skeletonTime);if(a.transform.localRotation=o,this._currentSkeletonClip.useSkeletonScale){let l=this.getScale(i.bonePath,this._skeletonTime);a.transform.localScale=l}}}}updateMorphAnim(){if(this._currentBlendAnimClip&&this._currentBlendAnimClip.floatCurves&&this._currentBlendAnimClip.floatCurves.size>0&&this._rendererList)for(const t of this._currentBlendAnimClip.floatCurves){let e=t[0],r=t[1].propertys,i=this._currentBlendAnimClip.floatCurves.get(e).getValue(this._blendShapeTime)/100;for(const a of this._rendererList)if(a.blendShape){let o=this.propertyCache.get(a);if(o&&e in o)o[e](i);else{o=a;for(const l of r){if(!o[l])break;o=o[l]}if(!o||o==a)break;this.propertyCache.get(a)||this.propertyCache.set(a,{}),this.propertyCache.get(a)[e]=o,o(i)}}}}updateBlendShape(t,e,r){for(const i of this._rendererList)if(i.blendShape){let a=this.propertyCache.get(i);if(a&&e in a)a[e](r);else{a=i;for(const o of t){if(!a[o])break;a=a[o]}if(!a||a==i)break;this.propertyCache.get(i)||this.propertyCache.set(i,{}),this.propertyCache.get(i)[e]=a,a(r)}}}getPosition(t,e){return this._currentSkeletonClip.positionCurves.has(t)?this._currentSkeletonClip.positionCurves.get(t).getValue(e):this.skeltonTPoseObject3D[t].localPosition}getRotation(t,e){if(this._currentSkeletonClip.rotationCurves.has(t)){let r=this._currentSkeletonClip.rotationCurves.get(t).getValue(e);return X.HELP_2.set(r.x,r.y,r.z,r.w),V.getEuler(g.HELP_6,X.HELP_2,!0,"ZYX"),g.HELP_6}return this.skeltonTPoseObject3D[t].localRotation}getScale(t,e){return this._currentSkeletonClip.scaleCurves.has(t)?this._currentSkeletonClip.scaleCurves.get(t).getValue(e):this.skeltonTPoseObject3D[t].localScale}getFloat(t,e){return this._currentSkeletonClip.floatCurves.get(t).getValue(e)}};vr=Qu([xt(vr,"AnimatorComponent")],vr);class Gu{constructor(){s(this,"index");s(this,"time");s(this,"timeEnd");s(this,"coeff",[])}}var hr=(n=>(n[n.PingPong=0]="PingPong",n[n.Repeat=1]="Repeat",n[n.Clamp=2]="Clamp",n))(hr||{});class Ia{constructor(t=0,e=0){s(this,"serializedVersion","2");s(this,"time");s(this,"value");s(this,"inSlope",0);s(this,"outSlope",0);s(this,"tangentMode",0);s(this,"weightedMode",0);s(this,"inWeight");s(this,"outWeight");this.time=t,this.value=e}unSerialized(t){this.serializedVersion=t.serializedVersion,this.time=t.time,this.value=t.value,this.tangentMode=t.tangentMode,this.inSlope=t.inSlope=="Infinity"?NaN:t.inSlope,this.outSlope=t.outSlope=="Infinity"?NaN:t.outSlope}unSerialized2(t){this.serializedVersion=t.serializedVersion,this.time=t.time,this.value=t.value,this.tangentMode=t.tangentMode,this.inSlope=t.inTangent=="Infinity"?NaN:t.inTangent,this.outSlope=t.outTangent=="Infinity"?NaN:t.outTangent}}class zu{constructor(t,e=hr.Repeat,r=hr.Repeat){s(this,"_totalTime",1);s(this,"_cache",new Gu);s(this,"_cacheOut",{lhsIndex:0,rhsIndex:0});s(this,"_InvalidateCache",!1);s(this,"curve",[]);s(this,"serializedVersion");s(this,"preWarpMode");s(this,"postWarpMode");s(this,"rotationOrder");if(t)for(let i=0;i<t.length;i++){const a=t[i];this.addKeyFrame(a)}this.preWarpMode=e,this.postWarpMode=r}get totalTime(){return this._totalTime}get first(){return this.curve[0]}get last(){return this.curve[this.curve.length-1]}addKeyFrame(t){this.curve.indexOf(t)==-1&&this.curve.push(t),this.calcTotalTime()}removeKeyFrame(t){let e=this.curve.indexOf(t);e!=-1&&this.curve.splice(e,1),this.calcTotalTime()}calculateCacheData(t,e,r,i=0){let a=this.curve,o=a[e],l=a[r];t.index=e,t.time=o.time+i,t.timeEnd=l.time+i,t.index=e;let h,u,c,d,f,p,A;h=l.time-o.time,h=Math.max(h,1e-4),c=l.value-o.value,u=1/(h*h),d=o.outSlope,f=l.inSlope,p=d*h,A=f*h,t.coeff[0]=(p+A-c-c)*u/h,t.coeff[1]=(c+c+c-p-p-A)*u,t.coeff[2]=d,t.coeff[3]=o.value,this.setupStepped(t.coeff,o,l)}getValue(t){return t=this.wrapTime(t),this.findCurve(t,this._cacheOut),this.calculateCacheData(this._cache,this._cacheOut.lhsIndex,this._cacheOut.rhsIndex,0),this.evaluateCache(this._cache,t)}getKeyCount(){return this.curve.length}getKey(t){return this.curve[t]}unSerialized(t){this.preWarpMode=t.m_PreInfinity,this.postWarpMode=t.m_PostInfinity,this.rotationOrder=t.m_RotationOrder;let e=t.m_Curve.length;for(let r=0;r<e;r++)this.curve[r]=new Ia,this.curve[r].unSerialized(t.m_Curve[r.toString()]);return this.calcTotalTime(),this}unSerialized2(t){this.preWarpMode=t.preWrapMode,this.postWarpMode=t.postWrapMode;let e=t.keyFrames||t.keys,r=e.length;for(let i=0;i<r;i++)this.curve[i]=new Ia,this.curve[i].unSerialized2(e[i.toString()]);return this.calcTotalTime(),this}wrapTime(t){let e=this.curve,r=e[0].time,i=e[e.length-1].time;return t<r?this.preWarpMode==hr.Clamp?t=r:this.preWarpMode==hr.PingPong?t=ts(t,r,i):t=rs(t,r,i):t>i&&(this.postWarpMode==hr.Clamp?t=i:this.postWarpMode==hr.PingPong?t=ts(t,r,i):t=rs(t,r,i)),t}evaluateCache(t,e){let r=e-t.time;return r*(r*(r*t.coeff[0]+t.coeff[1])+t.coeff[2])+t.coeff[3]}findCurve(t,e){let r=this.curve;for(let i=1;i<r.length;i++){let a=r[i-1],o=r[i];a.time<=t&&o.time>t&&(e.lhsIndex=i-1,e.rhsIndex=i)}}setupStepped(t,e,r){(isNaN(e.outSlope)||isNaN(r.inSlope))&&(t[0]=0,t[1]=0,t[2]=0,t[3]=e.value)}invalidateCache(){this._InvalidateCache=!0}calcTotalTime(){let t=0;for(let e of this.curve)e?t=Math.max(t,e.time):console.error(e);this._totalTime=t}static scaleCurveValue(t,e){if(!t._InvalidateCache)for(let r=0;r<t.curve.length;r++){let i=t.curve[r];i.value*=e,i.inSlope*=e,i.outSlope*=e}t.invalidateCache()}}var Vu=(n=>(n[n.Default=0]="Default",n[n.Clamp=1]="Clamp",n[n.Once=1]="Once",n[n.Loop=2]="Loop",n[n.PingPong=4]="PingPong",n[n.ClampForever=8]="ClampForever",n))(Vu||{}),Hu=Object.defineProperty,Yu=Object.getOwnPropertyDescriptor,Wu=(n,t,e,r)=>{for(var i=r>1?void 0:r?Yu(t,e):t,a=n.length-1,o;a>=0;a--)(o=n[a])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&Hu(t,e,i),i};let Zr=class extends se{constructor(){super();s(this,"skinJointsName");s(this,"mInverseBindMatrixData");s(this,"mInverseBindMatrixBuffer");s(this,"mSkeletonAnimation");s(this,"mJointIndexTableBuffer");this.addRendererMask(ke.SkinnedMesh)}get geometry(){return this._geometry}set geometry(t){this.skinJointsName=t.skinNames;let e=[];for(let r=0;r<t.bindPose.length;r++)e.push(t.bindPose[r].rawData.slice(0,16));this.skinInverseBindMatrices=e,super.geometry=t}start(){if(super.start(),this.skeletonAnimation=this.object3D.getComponent(vr),!this.skeletonAnimation){let t=this.object3D.parentObject.parentObject.getComponentsInChild(vr);t.length>0&&(this.skeletonAnimation=t[0]);let e=this.object3D;for(;!this.skeletonAnimation&&e;)this.skeletonAnimation=e.getComponentFromParent(vr),e.parent&&(e=e.parent.object3D)}}get blendShape(){return this.morphData}onEnable(){super.onEnable()}get skeletonAnimation(){return this.mSkeletonAnimation}set skeletonAnimation(t){if(this.mSkeletonAnimation=t,!!t&&!this.mJointIndexTableBuffer){let e=this.mSkeletonAnimation.getJointIndexTable(this.skinJointsName);this.mJointIndexTableBuffer=new Pe(e.length,0,new Float32Array(e)),this.mJointIndexTableBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.COMPUTE}}get skinInverseBindMatrices(){return this.mInverseBindMatrixData}set skinInverseBindMatrices(t){this.mInverseBindMatrixData=t;var e=new Float32Array(t.length*16);for(let r=0;r<t.length;r++){let i=r*16,a=t[r];e.set(a,i)}this.mInverseBindMatrixBuffer=new Pe(e.byteLength,0,e),this.mInverseBindMatrixBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.COMPUTE}get inverseBindMatrixBuffer(){return this.mInverseBindMatrixBuffer}get jointIndexTableBuffer(){return this.mJointIndexTableBuffer.buffer}cloneTo(t){let e=t.addComponent(Zr),r=[];for(const i of this.materials)r.push(i.clone());e.materials=r,e.geometry=this.geometry,e.castShadow=this.castShadow,e.castGI=this.castGI,e.receiveShadow=this.receiveShadow,e.rendererMask=this.rendererMask,e.skinJointsName=this.skinJointsName,e.skinInverseBindMatrices=this.skinInverseBindMatrices,e.mJointIndexTableBuffer=this.mJointIndexTableBuffer}nodeUpdate(t,e,r,i){for(let a=0;a<this.materials.length;a++){let o=this.materials[a].getPass(e);if(o)for(let l=0;l<o.length;l++){const h=o[l];!h.pipeline&&this.mSkeletonAnimation&&(h.setStorageBuffer("jointsMatrixIndexTable",this.mSkeletonAnimation.jointMatrixIndexTableBuffer),h.setStorageBuffer("jointsInverseMatrix",this.mInverseBindMatrixBuffer),h.setStorageBuffer("jointsIndexMapingTable",this.mJointIndexTableBuffer))}}super.nodeUpdate(t,e,r,i)}};Zr=Wu([xt(Zr,"SkinnedMeshRenderer2")],Zr);var Ku=(n=>(n.mouthRollLower="mouthRollLower",n.browOuterUp_L="browOuterUpLeft",n.mouthSmile_L="mouthSmileLeft",n.jawRight="jawRight",n.eyeLookOut_L="eyeLookOutLeft",n.mouthFunnel="mouthFunnel",n.mouthUpperUp_R="mouthUpperUpRight",n.browDown_L="browDownLeft",n.jawLeft="jawLeft",n.mouthLowerDown_L="mouthLowerDownLeft",n.noseSneer_R="noseSneerRight",n.jawForward="jawForward",n.mouthLowerDown_R="mouthLowerDownRight",n.browInnerUp="browInnerUp",n.mouthRollUpper="mouthRollUpper",n.mouthStretch_R="mouthStretchRight",n.mouthPucker="mouthPucker",n.eyeBlink_L="eyeBlinkLeft",n.mouthUpperUp_L="mouthUpperUpLeft",n.mouthShrugUpper="mouthShrugUpper",n.eyeLookIn_R="eyeLookInRight",n.noseSneer_L="noseSneerLeft",n.mouthFrown_L="mouthFrownLeft",n.cheekSquint_L="cheekSquintLeft",n.eyeLookDown_L="eyeLookDownLeft",n.mouthDimple_L="mouthDimpleLeft",n.mouthFrown_R="mouthFrownRight",n.eyeLookIn_L="eyeLookInLeft",n.eyeLookOut_R="eyeLookOutRight",n.mouthLeft="mouthLeft",n.mouthStretch_L="mouthStretchLeft",n.mouthPress_L="mouthPressLeft",n.mouthDimple_R="mouthDimpleRight",n.eyeWide_R="eyeWideRight",n.browDown_R="browDownRight",n.eyeLookUp_R="eyeLookUpRight",n.eyeBlink_R="eyeBlinkRight",n.cheekSquint_R="cheekSquintRight",n.mouthRight="mouthDimpleRight",n.eyeLookDown_R="eyeLookDownRight",n.eyeLookUp_L="eyeLookUpLeft",n.eyeSquint_L="eyeSquintLeft",n.jawOpen="jawOpen",n.browOuterUp_R="browOuterUpRight",n.mouthClose="mouthClose",n.mouthShrugLower="mouthShrugLower",n.eyeWide_L="eyeWideLeft",n.tongueOut="tongueOut",n.eyeSquint_R="eyeSquintRight",n.cheekPuff="cheekPuff",n.mouthPress_R="mouthPressRight",n.mouthSmile_R="mouthSmileRight",n))(Ku||{}),Xu=(n=>(n[n.Key_BackSpace=8]="Key_BackSpace",n[n.Key_Tab=9]="Key_Tab",n[n.Key_Clear=12]="Key_Clear",n[n.Key_Enter=13]="Key_Enter",n[n.Key_Shift_L=16]="Key_Shift_L",n[n.Key_Control_L=17]="Key_Control_L",n[n.Key_Alt_L=18]="Key_Alt_L",n[n.Key_Pause=19]="Key_Pause",n[n.Key_CapsLock=20]="Key_CapsLock",n[n.Key_Escape=21]="Key_Escape",n[n.Key_Esc=27]="Key_Esc",n[n.Key_Space=32]="Key_Space",n[n.Key_Prior=33]="Key_Prior",n[n.Key_Next=34]="Key_Next",n[n.Key_End=35]="Key_End",n[n.Key_Home=36]="Key_Home",n[n.Key_Left=37]="Key_Left",n[n.Key_Up=38]="Key_Up",n[n.Key_Right=39]="Key_Right",n[n.Key_Down=40]="Key_Down",n[n.Key_Select=41]="Key_Select",n[n.Key_Print=42]="Key_Print",n[n.Key_Execute=43]="Key_Execute",n[n.Key_Insert=45]="Key_Insert",n[n.Key_Delete=46]="Key_Delete",n[n.Key_Help=47]="Key_Help",n[n.Key_0=48]="Key_0",n[n.Key_1=49]="Key_1",n[n.Key_2=50]="Key_2",n[n.Key_3=51]="Key_3",n[n.Key_4=52]="Key_4",n[n.Key_5=53]="Key_5",n[n.Key_6=54]="Key_6",n[n.Key_7=55]="Key_7",n[n.Key_8=56]="Key_8",n[n.Key_9=57]="Key_9",n[n.Key_A=65]="Key_A",n[n.Key_B=66]="Key_B",n[n.Key_C=67]="Key_C",n[n.Key_D=68]="Key_D",n[n.Key_E=69]="Key_E",n[n.Key_F=70]="Key_F",n[n.Key_G=71]="Key_G",n[n.Key_H=72]="Key_H",n[n.Key_I=73]="Key_I",n[n.Key_J=74]="Key_J",n[n.Key_K=75]="Key_K",n[n.Key_L=76]="Key_L",n[n.Key_M=77]="Key_M",n[n.Key_N=78]="Key_N",n[n.Key_O=79]="Key_O",n[n.Key_P=80]="Key_P",n[n.Key_Q=81]="Key_Q",n[n.Key_R=82]="Key_R",n[n.Key_S=83]="Key_S",n[n.Key_T=84]="Key_T",n[n.Key_U=85]="Key_U",n[n.Key_V=86]="Key_V",n[n.Key_W=87]="Key_W",n[n.Key_X=88]="Key_X",n[n.Key_Y=89]="Key_Y",n[n.Key_Z=90]="Key_Z",n[n.Key_KP_0=96]="Key_KP_0",n[n.Key_KP_1=97]="Key_KP_1",n[n.Key_KP_2=98]="Key_KP_2",n[n.Key_KP_3=99]="Key_KP_3",n[n.Key_KP_4=100]="Key_KP_4",n[n.Key_KP_5=101]="Key_KP_5",n[n.Key_KP_6=102]="Key_KP_6",n[n.Key_KP_7=103]="Key_KP_7",n[n.Key_KP_8=104]="Key_KP_8",n[n.Key_KP_9=105]="Key_KP_9",n[n.Key_Multiply=106]="Key_Multiply",n[n.Key_Add=107]="Key_Add",n[n.Key_Separator=108]="Key_Separator",n[n.Key_Subtract=109]="Key_Subtract",n[n.Key_Decimal=110]="Key_Decimal",n[n.Key_Divide=111]="Key_Divide",n[n.Key_F1=112]="Key_F1",n[n.Key_F2=113]="Key_F2",n[n.Key_F3=114]="Key_F3",n[n.Key_F4=115]="Key_F4",n[n.Key_F5=116]="Key_F5",n[n.Key_F6=117]="Key_F6",n[n.Key_F7=118]="Key_F7",n[n.Key_F8=119]="Key_F8",n[n.Key_F9=120]="Key_F9",n[n.Key_F10=121]="Key_F10",n[n.Key_F11=122]="Key_F11",n[n.Key_F12=123]="Key_F12",n[n.Key_F13=124]="Key_F13",n[n.Key_F14=125]="Key_F14",n[n.Key_F15=126]="Key_F15",n[n.Key_F16=127]="Key_F16",n[n.Key_F17=128]="Key_F17",n[n.Key_F18=129]="Key_F18",n[n.Key_F19=130]="Key_F19",n[n.Key_F20=131]="Key_F20",n[n.Key_F21=132]="Key_F21",n[n.Key_F22=133]="Key_F22",n[n.Key_F23=134]="Key_F23",n[n.Key_F24=135]="Key_F24",n[n.Key_Num_Lock=136]="Key_Num_Lock",n[n.Key_Scroll_Lock=137]="Key_Scroll_Lock",n))(Xu||{});class pi{static add(t,e,r){return r||(r=new g),r.x=t.x+e.x,r.y=t.y+e.y,r.z=t.z+e.z,r}static sub(t,e,r){return r||(r=new g),r.x=t.x-e.x,r.y=t.y-e.y,r.z=t.z-e.z,r}static mul(t,e,r){return r||(r=new g),r.x=t.x*e.x,r.y=t.y*e.y,r.z=t.z*e.z,r}static mulScale(t,e,r){return r||(r=new g),r.x=t.x*e,r.y=t.y*e,r.z=t.z*e,r}static div(t,e,r){return r||(r=new g),r.x=t.x/e.x,r.y=t.y/e.y,r.z=t.z/e.z,r}static normalize(t){return t.clone().normalize()}static dot(t,e){let r=g.HELP_0;return r.copyFrom(t),r.dotProduct(e)}static calculateVectorAngle_xz(t,e){return Math.acos((t.x*e.x+t.y*e.y)/Math.sqrt((t.x*t.x+t.y*t.y)*(e.x*e.x+e.y*e.y)))}static distance(t,e){return g.distance(t,e)}static getRandomXYZ(t=-100,e=100){return new g(Math.random()*(e-t)+t,Math.random()*(e-t)+t,Math.random()*(e-t)+t)}static getRandomV3(t=-100,e=100,r,i){return new g(Math.random()*e+t,Math.random()*i+r,Math.random()*e+t)}static sphere(t){let e=t*Math.random(),r=new g(Math.random()*1-.5,Math.random()*1-.5,Math.random()*1-.5);return r.normalize(),r.scaleBy(e),r}static sphereXYZ(t,e,r=1,i=1,a=1){let o=t+(e-t)*Math.random(),l=new g(Math.random()*r-r*.5,Math.random()*i-i*.5,Math.random()*a-a*.5);return l.normalize(),l.scaleBy(o),l}}class ju extends Ke{constructor(){super();s(this,"camera");s(this,"minDistance",.1);s(this,"maxDistance",500);s(this,"rollSmooth",15);s(this,"dragSmooth",20);s(this,"wheelSmooth",10);s(this,"wheelStep",.002);s(this,"mouseRightFactor",.5);s(this,"mouseLeftFactor",20);s(this,"smooth",!0);s(this,"_wheelStep",.002);s(this,"_distance",0);s(this,"distance",10);s(this,"_roll",0);s(this,"roll",0);s(this,"_pitch",0);s(this,"pitch",0);s(this,"_currentPos");s(this,"_targetPos");s(this,"_flowTarget");s(this,"_flowOffset");s(this,"_mouseLeftDown",!1);s(this,"_mouseRightDown",!1);s(this,"_bottomClamp",89.99);s(this,"_topClamp",-89.99);s(this,"_tempDir",new g);s(this,"_tempPos",new g);this._currentPos=new ee,this._targetPos=new ee}start(){this.camera=this.object3D.getOrAddComponent(Fs),y.inputSystem.addEventListener(O.POINTER_DOWN,this.onMouseDown,this),y.inputSystem.addEventListener(O.POINTER_MOVE,this.onMouseMove,this),y.inputSystem.addEventListener(O.POINTER_UP,this.onMouseUp,this),y.inputSystem.addEventListener(O.POINTER_WHEEL,this.onMouseWheel,this)}flowTarget(e,r=g.ZERO){this._flowTarget=e,this._flowOffset||(this._flowOffset=new g),this._flowOffset.copyFrom(r)}getFlowTarget(){return this._flowTarget}setCamera(e,r,i,a){this.roll=e,this.pitch=r,this.distance=i,this.maxDistance<i*1.5&&(this.maxDistance=i*1.5),a&&this._targetPos.transform.localPosition.copy(a)}focusByBounds(e){let r=si.genMeshBounds(e);this.target=r.center}set target(e){this._targetPos.transform.localPosition.copy(e)}get target(){return this._targetPos.transform.localPosition}onMouseWheel(e){this.enable&&(this._wheelStep=this.wheelStep*pi.distance(this._currentPos.transform.worldPosition,this.camera.transform.worldPosition)/10,this.distance-=y.inputSystem.wheelDelta*this._wheelStep,this.distance=pt(this.distance,this.minDistance,this.maxDistance))}onMouseDown(e){if(this.enable)switch(e.mouseCode){case 0:this._mouseLeftDown=!0;break;case 1:break;case 2:this._mouseRightDown=!0;break}}onMouseUp(e){this._mouseLeftDown=!1,this._mouseRightDown=!1}onMouseMove(e){if(this.enable){if(this._mouseRightDown){let r=.25,i=this.camera.transform.forward;pi.mulScale(i,e.movementY*r*this.camera.aspect,g.HELP_1),this._targetPos.x+=g.HELP_1.x*this.mouseRightFactor,this._targetPos.z+=g.HELP_1.z*this.mouseRightFactor;let a=this.camera.transform.right;pi.mulScale(a,-e.movementX*r,g.HELP_1),this._targetPos.x-=g.HELP_1.x*this.mouseRightFactor,this._targetPos.z-=g.HELP_1.z*this.mouseRightFactor}this._mouseLeftDown&&(this.roll-=e.movementX*ie.delta*.001*this.mouseLeftFactor,this.pitch-=e.movementY*ie.delta*.001*this.mouseLeftFactor,this.pitch=pt(this.pitch,this._topClamp,this._bottomClamp))}}onBeforeUpdate(e){if(!this.enable)return;this._flowTarget&&(g.HELP_0.copyFrom(this._flowTarget.transform.worldPosition),g.HELP_0.add(this._flowOffset,g.HELP_0),this.target=g.HELP_0);let r=pt(ie.delta,0,.016);this.smooth?(this._currentPos.x+=(this._targetPos.x-this._currentPos.x)*r*this.dragSmooth,this._currentPos.y+=(this._targetPos.y-this._currentPos.y)*r*this.dragSmooth,this._currentPos.z+=(this._targetPos.z-this._currentPos.z)*r*this.dragSmooth,this._distance+=(this.distance-this._distance)*r*this.wheelSmooth,this._roll+=(this.roll-this._roll)*r*this.rollSmooth,this._pitch+=(this.pitch-this._pitch)*r*this.rollSmooth):(this._currentPos.x=this._targetPos.x,this._currentPos.y=this._targetPos.y,this._currentPos.z=this._targetPos.z,this._distance=this.distance,this._roll=this.roll,this._pitch=this.pitch),this._tempDir.set(0,0,1);let i=X.HELP_0;i.fromEulerAngles(this._pitch,this._roll,0),this._tempDir.applyQuaternion(i),this._tempPos=pi.mulScale(this._tempDir,this._distance,this._tempPos),this._tempPos.add(this._currentPos.transform.localPosition,this._tempPos),this.transform.lookAt(this._tempPos,this._currentPos.transform.localPosition,g.UP),this.camera.lookTarget.copy(this._currentPos.transform.localPosition)}destroy(e){y.inputSystem.removeEventListener(O.POINTER_DOWN,this.onMouseDown,this),y.inputSystem.removeEventListener(O.POINTER_MOVE,this.onMouseMove,this),y.inputSystem.removeEventListener(O.POINTER_UP,this.onMouseUp,this),y.inputSystem.removeEventListener(O.POINTER_WHEEL,this.onMouseWheel,this),super.destroy(e),this.camera=null,this._flowTarget=null}}var Xr=(n=>(n[n.NORMAL=0]="NORMAL",n[n.DOWN=1]="DOWN",n[n.OVER=2]="OVER",n[n.DISABLE=3]="DISABLE",n))(Xr||{});let qu=Math.PI,xs=qu*2;class Dr{constructor(t=1,e=0,r=0,i=1,a=0,o=0){s(this,"a");s(this,"b");s(this,"c");s(this,"d");s(this,"tx");s(this,"ty");this.a=t,this.b=e,this.c=r,this.d=i,this.tx=a,this.ty=o}clone(){return new Dr(this.a,this.b,this.c,this.d,this.tx,this.ty)}concat(t){let e=this.a,r=this.c,i=this.tx;this.a=e*t.a+this.b*t.c,this.b=e*t.b+this.b*t.d,this.c=r*t.a+this.d*t.c,this.d=r*t.b+this.d*t.d,this.tx=i*t.a+this.ty*t.c+t.tx,this.ty=i*t.b+this.ty*t.d+t.ty}copyFrom(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this}identity(){return this.a=this.d=1,this.b=this.c=this.tx=this.ty=0,this}invert(){this._invertInto(this)}rotate(t){if(t=+t,t!==0){t=t*oe;let e=Math.cos(t),r=Math.sin(t),i=this.a,a=this.b,o=this.c,l=this.d,h=this.tx,u=this.ty;this.a=i*e-a*r,this.b=i*r+a*e,this.c=o*e-l*r,this.d=o*r+l*e,this.tx=h*e-u*r,this.ty=h*r+u*e}}scale(t,e){t!==1&&(this.a*=t,this.c*=t,this.tx*=t),e!==1&&(this.b*=e,this.d*=e,this.ty*=e)}setTo(t,e,r,i,a,o){return this.a=t,this.b=e,this.c=r,this.d=i,this.tx=a,this.ty=o,this}transformPoint(t,e,r){let i=this.a*t+this.c*e+this.tx,a=this.b*t+this.d*e+this.ty;return r?(r.setTo(i,a,0,1),r):new g(i,a,0,1)}setTranslate(t,e){this.tx=t,this.ty=e}translate(t,e){this.tx+=t,this.ty+=e}mul(t){let e=this,r=t,i=e.a,a=e.b,o=e.c,l=e.d,h=e.tx,u=e.ty,c=r.a,d=r.b,f=r.c,p=r.d,A=r.tx,x=r.ty;d!==0||f!==0?(this.a=i*c+a*f,this.b=i*d+a*p,this.c=o*c+l*f,this.d=o*d+l*p,this.tx=c*h+f*u+A,this.ty=d*h+p*u+x):(this.a=i*c,this.b=a*p,this.c=o*c,this.d=l*p,this.tx=c*h+A,this.ty=p*u+x)}equals(t){return this.a==t.a&&this.b==t.b&&this.c==t.c&&this.d==t.d&&this.tx==t.tx&&this.ty==t.ty}prepend(t,e,r,i,a,o){let l=this.tx;if(t!=1||e!=0||r!=0||i!=1){let h=this.a,u=this.c;this.a=h*t+this.b*r,this.b=h*e+this.b*i,this.c=u*t+this.d*r,this.d=u*e+this.d*i}return this.tx=l*t+this.ty*r+a,this.ty=l*e+this.ty*i+o,this}append(t){let e=this.a,r=this.b,i=this.c,a=this.d;return(t.a!=1||t.b!=0||t.c!=0||t.d!=1)&&(this.a=t.a*e+t.b*i,this.b=t.a*r+t.b*a,this.c=t.c*e+t.d*i,this.d=t.c*r+t.d*a),this.tx=t.tx*e+t.ty*i+this.tx,this.ty=t.tx*r+t.ty*a+this.ty,this}deltaTransformPoint(t){let e=this,r=e.a*t.x+e.c*t.y,i=e.b*t.x+e.d*t.y;return new g(r,i)}toString(){return"(a="+this.a+", b="+this.b+", c="+this.c+", d="+this.d+", tx="+this.tx+", ty="+this.ty+")"}createBox(t,e,r=0,i=0,a=0){let o=this;if(r!==0){r=r*oe;let l=Math.cos(r),h=Math.sin(r);o.a=l*t,o.b=h*e,o.c=-h*t,o.d=l*e}else o.a=t,o.b=0,o.c=0,o.d=e;o.tx=i,o.ty=a}createGradientBox(t,e,r=0,i=0,a=0){this.createBox(t/1638.4,e/1638.4,r,i+t/2,a+e/2)}_invertInto(t){let e=this.a,r=this.b,i=this.c,a=this.d,o=this.tx,l=this.ty;if(r==0&&i==0){t.b=t.c=0,e==0||a==0?t.a=t.d=t.tx=t.ty=0:(e=t.a=1/e,a=t.d=1/a,t.tx=-e*o,t.ty=-a*l);return}let h=e*a-r*i;if(h==0){t.identity();return}h=1/h;let u=t.a=a*h;r=t.b=-r*h,i=t.c=-i*h,a=t.d=e*h,t.tx=-(u*o+i*l),t.ty=-(r*o+a*l)}getScaleX(){let t=this;if(t.a==1&&t.b==0)return 1;let e=Math.sqrt(t.a*t.a+t.b*t.b);return this.getDeterminant()<0?-e:e}getScaleY(){let t=this;if(t.c==0&&t.d==1)return 1;let e=Math.sqrt(t.c*t.c+t.d*t.d);return this.getDeterminant()<0?-e:e}getSkewX(){return Math.atan2(this.d,this.c)-Math.PI/2}getSkewY(){return Math.atan2(this.b,this.a)}updateScaleAndRotation(t,e,r,i){if((r==0||r==xs)&&(i==0||i==xs)){this.a=t,this.b=this.c=0,this.d=e;return}r=r*oe,i=i*oe;let a=Math.cos(r),o=Math.sin(r);r==i?(this.a=a*t,this.b=o*t):(this.a=Math.cos(i)*t,this.b=Math.sin(i)*t),this.c=-o*e,this.d=a*e}preMultiplyInto(t,e){let r=t.a*this.a,i=0,a=0,o=t.d*this.d,l=t.tx*this.a+this.tx,h=t.ty*this.d+this.ty;(t.b!==0||t.c!==0||this.b!==0||this.c!==0)&&(r+=t.b*this.c,o+=t.c*this.b,i+=t.a*this.b+t.b*this.d,a+=t.c*this.a+t.d*this.c,l+=t.ty*this.c,h+=t.tx*this.b),e.a=r,e.b=i,e.c=a,e.d=o,e.tx=l,e.ty=h}$transformBounds(t){let e=this.a,r=this.b,i=this.c,a=this.d,o=this.tx,l=this.ty,h=t.x,u=t.y,c=h+t.width,d=u+t.height,f=e*h+i*u+o,p=r*h+a*u+l,A=e*c+i*u+o,x=r*c+a*u+l,C=e*c+i*d+o,v=r*c+a*d+l,_=e*h+i*d+o,S=r*h+a*d+l,B=0;f>A&&(B=f,f=A,A=B),C>_&&(B=C,C=_,_=B),t.x=Math.floor(f<C?f:C),t.width=Math.ceil((A>_?A:_)-t.x),p>x&&(B=p,p=x,x=B),v>S&&(B=v,v=S,S=B),t.y=Math.floor(p<v?p:v),t.height=Math.ceil((x>S?x:S)-t.y)}getDeterminant(){return this.a*this.d-this.b*this.c}}class ji extends Ke{constructor(){super(...arguments);s(this,"isGUICanvas",!0);s(this,"index",0)}addChild(e){return this.object3D.addChild(e),this}removeChild(e){return this.object3D.removeChild(e),this}cloneTo(e){e.getOrAddComponent(ji).copyComponent(this)}copyComponent(e){return e.index=e.index,this}}var xe=(n=>(n[n.NONE=0]="NONE",n[n.POSITION=1]="POSITION",n[n.SPRITE=2]="SPRITE",n[n.COLOR=4]="COLOR",n[n.MAX=7]="MAX",n))(xe||{});class $i{constructor(t){s(this,"array");s(this,"buffer");this.buffer=new Pe(t,0),this.array=new Float32Array(this.buffer.memory.shareDataBuffer)}}class Ju extends vt{constructor(e){super();s(this,"_attributeUV");s(this,"_attributeVIndex");s(this,"_faceIndexes");s(this,"_uvSize",2);s(this,"_vIndexSize",1);s(this,"_posAttribute");s(this,"_spriteAttribute");s(this,"_colorAttribute");s(this,"_onPositionChange",!0);s(this,"_onSpriteChange",!0);s(this,"_onColorChange",!0);s(this,"maxQuadCount");this.maxQuadCount=e}updateSubGeometry(e,r,i){let a=this.subGeometries[e];if(a){let o=a.lodLevels[0];o.indexStart=r,o.indexCount=i,o.index=e}else a=this.addSubGeometry({indexStart:r,indexCount:i,vertexStart:0,vertexCount:0,firstStart:0,index:e,topology:0});return a}resetSubGeometries(){for(let e of this.subGeometries){let r=e.lodLevels[0];r.indexStart=0,r.indexCount=0,r.index=0}}updateBounds(e,r){let i=Number.MAX_VALUE*.1;return e=new g(-i,-i,-i),r=new g(i,i,i),this.bounds.setFromMinMax(e,r),this}getPositionBuffer(){return this._onPositionChange&&(this._posAttribute.buffer.apply(),this._onPositionChange=!1),this._posAttribute.buffer}getSpriteBuffer(){return this._onSpriteChange&&(this._spriteAttribute.buffer.apply(),this._onSpriteChange=!1),this._spriteAttribute.buffer}getColorBuffer(){return this._onColorChange&&(this._colorAttribute.buffer.apply(),this._onColorChange=!1),this._colorAttribute.buffer}create(){this.createBuffer(),this.updateBounds();let e=this.maxQuadCount,r=[],i=[];for(let o=0;o<e;o++)r.push(...zt.attUV);for(let o=0,l=this.maxQuadCount*zt.vertexCount;o<l;o++)i[o]=o;this._attributeUV=new Float32Array(zt.vertexCount*e*this._uvSize),this._attributeVIndex=new Float32Array(zt.vertexCount*e*this._vIndexSize),this._attributeUV.set(r,0),this._attributeVIndex.set(i,0);let a=[];for(let o=0;o<e;o++)for(let l=0;l<zt.indecies.length;l++){const h=zt.indecies[l]+o*4;a.push(h)}return this._faceIndexes=new Uint32Array(e*6),this._faceIndexes.set(a,0),this.setIndices(this._faceIndexes),this.setAttribute(R.uv,this._attributeUV),this.setAttribute(R.vIndex,this._attributeVIndex),this.updateSubGeometry(0,0,this._faceIndexes.length),this}createBuffer(){let e=this.maxQuadCount;this._posAttribute=new $i(e*4),this._spriteAttribute=new $i(e*12),this._colorAttribute=new $i(e*4)}fillQuad(e,r){e.dirtyAttributes&xe.POSITION&&this.fillQuadPosition(e,r),e.dirtyAttributes&xe.COLOR&&this.fillQuadColor(e,r),e.dirtyAttributes&xe.SPRITE&&this.fillQuadSprite(e,r)}fillQuadPosition(e,r){Cs.setXYZW(this._posAttribute.array,e.z,e.left,e.bottom,e.right,e.top),this._onPositionChange=!0}fillQuadColor(e,r){let i=e.color,a=this._colorAttribute.array;Cs.setXYZW(a,e.z,i.r,i.g,i.b,i.a),this._onColorChange=!0}fillQuadSprite(e,r){let i=e.sprite,a=0,o=0;i.isSliced&&e.imageType==Li.Sliced&&(a=i.trimSize.x,a=(r.width-(i.offsetSize.z-i.trimSize.x))/a,o=i.trimSize.y,o=(r.height-(i.offsetSize.w-i.trimSize.y))/o);let l=i.guiTexture.dynamicId,h=i.uvRec,u=i.uvBorder,c=this._spriteAttribute.array,d=12*e.z;c[d+0]=h.x,c[d+1]=h.y,c[d+2]=h.z,c[d+3]=h.w,c[d+4]=u.x,c[d+5]=u.y,c[d+6]=u.z,c[d+7]=u.w,c[d+8]=a,c[d+9]=o,c[d+10]=l,c[d+11]=e.visible?1:0,this._onSpriteChange=!0}}class Zu{static set(t,e,r,i,...a){let o=e*i+r;for(let l=0,h=a.length;l<h;l++)t[o+l]=a[l]}}class Cs extends Zu{static setXYZW(t,e,r,i,a,o){this.set(t,e,0,4,r,i,a,o)}static setXYZ(t,e,r,i,a){this.set(t,e,0,4,r,i,a)}static setZ(t,e,r){this.set(t,e,3,4,r)}}class zt{}s(zt,"vertexCount",4),s(zt,"attUV",[0,0,1,0,1,1,0,1]),s(zt,"indecies",[0,1,2,0,2,3]);class $u{constructor(){s(this,"_textureMap",new Map);s(this,"_textureList",[])}build(t,e,r){let i=e._geometry;i.resetSubGeometries();let a=-1,o=0,l=0,h=0,u=0,c=this._textureList,d=this._textureMap;function f(){h>0&&(e.updateDrawCallSegment(u,l,h),e._uiRenderer.materials[u].setTextures(c),d.clear(),c.length=0,u++,l+=h,h=0,o=0)}d.clear(),c.length=0;let p=[],A=e.quadMaxCount-1;for(let x of t){let C=x.needUpdateQuads;p.length=0;const v=this.collectQuads(x.object3D,p);for(let _ of v){let S=_.sprite.guiTexture;if(d.has(S.staticId)||(o==7&&f(),d.set(S.staticId,S),S.dynamicId=o,c[o]=S.texture,o+=1),_.z=++a,h+=6,_.cacheTextureId!=S.dynamicId&&(_.dirtyAttributes=xe.MAX,_.cacheTextureId=S.dynamicId),(C||r)&&(_.dirtyAttributes=xe.MAX),_.dirtyAttributes&xe.POSITION&&_.applyTransform(x),_.dirtyAttributes&&_.writeToGeometry(i,x),a==A)return f(),!0}}return f(),!1}collectQuads(t,e){e||(e=[]);let r=t.components.values();for(let i of r){let a=i;if(a.isUIShadow||!a.mainQuads)continue;let o=a.getShadowRender();o&&this.push(o.mainQuads,e),this.push(a.mainQuads,e)}return e}push(t,e){t&&t.length>0&&e.push(...t)}}const we=class we{static bindTextureArray(){let t="";for(let e=0;e<7;e++)t+=`
        @group(1) @binding(auto)
        var tex_${e}Sampler: sampler;
        @group(1) @binding(auto)
#if VideoTexture${e}
        var tex_${e}: texture_external;
#else
        var tex_${e}: texture_2d<f32>;
#endif
`;return t}static sampleTexture(t){return`
#if VideoTexture${t}
            let size = textureDimensions(tex_${t}).xy - 1;
            uv.y = 1.0 - uv.y;
            let iuv = vec2<i32>(uv * vec2<f32>(size));
            color = textureLoad(tex_${t}, iuv) ;
#else
            color = textureSampleLevel(tex_${t}, tex_${t}Sampler, uv, 0.0);
#endif        `}};s(we,"fs",`
        ${Ns}
        ${we.bindTextureArray()}

        var<private> fragmentOutput: FragmentOutput;
        var<private> uvSlice: vec2<f32>;
        var<private> EPSILON: f32 = 0.001;
        
        fn sliceBorder(uv:f32, scale:f32, border:vec2<f32>) -> f32 
        {
            var s = uv * scale;
            if(s > border.x){
                s -= border.x;
                let centerPartMax = scale - border.x - border.y;
                let centerPartMin = 1.0 - border.x - border.y;
                if(s < centerPartMax){
                    s = border.x + (s / centerPartMax) * centerPartMin;
                }else{
                    s = s - centerPartMax + border.x + centerPartMin;
                }
            }
            return s;
        }

        fn isInsideAlpha(coord:vec2<f32>, rect:vec4<f32>, cornerRadius0:f32, fadeOutSize0:f32) -> f32
        {
            var minX = min(rect.x, rect.z);
            var maxX = max(rect.x, rect.z);
            var minY = min(rect.y, rect.w);
            var maxY = max(rect.y, rect.w);

            var cornerRadius = max(EPSILON, cornerRadius0);

            var center = vec2<f32>(minX + maxX, minY + maxY) * 0.5;
            var extents = vec2<f32>(maxX - minX, maxY - minY) * 0.5;

            cornerRadius = min(extents.x, cornerRadius);
            cornerRadius = min(extents.y, cornerRadius);
            
            var extendsMin = max(vec2<f32>(0.0), extents - cornerRadius);
            
            var toCenter = abs(coord - center);
            var outerDist = toCenter - extents;
            var innerDist = toCenter - extendsMin;
            
            if(innerDist.x <= 0 && innerDist.y <= 0){
                return 1.0;
            }else if(outerDist.x <= 0 && outerDist.y <= 0){
                var fadeOutPercent = clamp(fadeOutSize0, EPSILON, cornerRadius) / cornerRadius;
                innerDist = max(vec2(EPSILON), innerDist);
                var distance = min(cornerRadius, length(innerDist));
                var alpha = 1.0 - distance / cornerRadius;
                alpha /= fadeOutPercent;
                alpha = clamp(alpha, 0.0, 1.0);
                return alpha;
            }
            return 0.0;
        }
        
        @fragment
        fn FragMain( 
            @location(auto) vUV: vec2<f32>,
            @location(auto) vColor4: vec4<f32>,
            @location(auto) vLocalPos: vec2<f32>,
            @location(auto) vUvRec: vec4<f32>,
            @location(auto) vUvBorder: vec4<f32>,
            @location(auto) vUvSlice: vec2<f32>,
            @location(auto) vTextureID: f32,
            @builtin(front_facing) face: bool,
            @builtin(position) fragCoord : vec4<f32> 
        ) -> FragmentOutput {

            var scissorAlpha = 1.0;
#if SCISSOR_ENABLE
            scissorAlpha = isInsideAlpha(
                vLocalPos.xy,
                materialUniform.scissorRect,
                materialUniform.scissorCornerRadius,
                materialUniform.scissorFadeOutSize);

            if(scissorAlpha < EPSILON){
                discard;
            }
#endif

            uvSlice = vUvSlice;
            
            var uv:vec2<f32> = vUV;
            if(uvSlice.x > 1.0){ uv.x = sliceBorder(uv.x, uvSlice.x, vUvBorder.xz);}
            if(uvSlice.y > 1.0){ uv.y = sliceBorder(uv.y, uvSlice.y, vUvBorder.yw);}
            uv = uv * vUvRec.zw + vUvRec.xy;
            
            var color = vec4<f32>(0.0,0.0,0.0,1.0);
            let texId = i32(vTextureID + 0.5);
            
            var texSize = vec2<i32>(0);
            var coord = vec2<i32>(0);
            
            if(texId == 0){
                ${we.sampleTexture(0)}
            }else if(texId == 1){
                ${we.sampleTexture(1)}
            }else if(texId == 2){
                ${we.sampleTexture(2)}
            }else if(texId == 3){            
                ${we.sampleTexture(3)}
            }else if(texId == 4){            
                ${we.sampleTexture(4)}
            }else if(texId == 5){            
                ${we.sampleTexture(5)}
            }else if(texId == 6){            
                ${we.sampleTexture(6)}
            }
            color *= vColor4;
            color.a *= scissorAlpha;
            if(color.a < EPSILON)
            { 
                discard;
            }

            fragmentOutput.color = color;
            return fragmentOutput ;
        }`),s(we,"GUI_common_vs",`
        ${Os}
        ${Ls}

        struct VertexSpriteBuffer {
            vUvRec: vec4<f32>,
            vUvBorder: vec4<f32>,
            vUvSlice: vec2<f32>,
            vTextureID: f32,
            vVisible: f32
        }
                
        struct MaterialUniform{
            scissorRect:vec4<f32>,

            screenSize:vec2<f32>,
            scissorCornerRadius:f32,
            scissorFadeOutSize:f32,

            pixelRatio:f32,
            v3:vec3<f32>
        }
        
        struct VertexOutput {
            @location(auto) vUV: vec2<f32>,
            @location(auto) vColor4: vec4<f32>,
            @location(auto) vLocalPos: vec2<f32>,
            @location(auto) vUvRec: vec4<f32>,
            @location(auto) vUvBorder: vec4<f32>,
            @location(auto) vUvSlice: vec2<f32>,
            @location(auto) vTextureID: f32,
            
            @builtin(position) member: vec4<f32>
        };
        
         struct VertexInput{
            @builtin(instance_index) index : u32,
            @location(auto) uv: vec2<f32>,
            @location(auto) vIndex: f32,
        }

        @group(2) @binding(0)
        var<uniform> materialUniform : MaterialUniform;
        @group(3) @binding(1)
        var<storage, read> vPositionBuffer: array<vec4<f32>>;
        @group(3) @binding(2)
        var<storage, read> vSpriteBuffer: array<VertexSpriteBuffer>;
        @group(3) @binding(3)
        var<storage, read> vColorBuffer: array<vec4<f32>>;

        var<private> vertexOut: VertexOutput ;

        //quad: (left, bottom, right, top)
        //index: 0~3
        fn getVertexXY(quad:vec4<f32>, index:u32) -> vec2<f32>
        {
            var ret = vec2<f32>(0.0);
            if(index == 0 || index == 3){
                ret.x = quad.x;
            }else{
                ret.x = quad.z;
            }
            if(index == 0 || index == 1){
                ret.y = quad.w;
            }else{
                ret.y = quad.y;
            }
            return ret;
        }
    `),s(we,"GUI_shader_view",`
        ${we.GUI_common_vs}

        @vertex
        fn VertMain( vertex:VertexInput ) -> VertexOutput {
            var _m = models.matrix[0];
            var _n = globalUniform.frame;
            
            let vertexIndex = vertex.vIndex;
            let quadIndex = u32(vertex.vIndex * 0.25);
            let vertexPosition = getVertexXY(vPositionBuffer[quadIndex], u32(vertexIndex) % 4u);
            var vSpriteData = vSpriteBuffer[quadIndex];
            
            var op = vec2<f32>(0.0001);
            let isValidVertex = vSpriteData.vVisible > 0.5;
            if(isValidVertex){
                op = 2.0 * vertexPosition * materialUniform.pixelRatio  / materialUniform.screenSize;
            }

            vertexOut.vLocalPos = vertexPosition;
            vertexOut.member = vec4<f32>(op.x, op.y, vertexIndex * 0.0001, 1.0);

            vertexOut.vUV = vec2<f32>(vertex.uv);
            vertexOut.vUvRec = vSpriteData.vUvRec;
            vertexOut.vUvBorder = vSpriteData.vUvBorder;
            vertexOut.vUvSlice = vSpriteData.vUvSlice;
            vertexOut.vTextureID = vSpriteData.vTextureID;
            vertexOut.vColor4 = vColorBuffer[quadIndex];

            return vertexOut;
         }
         
         ${we.fs}
        `),s(we,"GUI_shader_world",`
        ${we.GUI_common_vs}
        @vertex
        fn VertMain( vertex:VertexInput ) -> VertexOutput {
            var modelMatrix = models.matrix[vertex.index];
            
            let vertexIndex = vertex.vIndex;
            let quadIndex = u32(vertex.vIndex * 0.25);
            let vertexPosition = getVertexXY(vPositionBuffer[quadIndex], u32(vertexIndex) % 4u);
            var localPos = vec4<f32>(vertexPosition.xy, vertexIndex * 0.0001, 1.0) ;
            var op = vec4<f32>(0.0001);
            var vSpriteData = vSpriteBuffer[quadIndex];

            let isValidVertex = vSpriteData.vVisible > 0.5;
            if(isValidVertex){
                op = globalUniform.projMat * globalUniform.viewMat * modelMatrix * localPos ;
            }

            vertexOut.vLocalPos = vertexPosition;
            vertexOut.member = op;

            vertexOut.vUV = vec2<f32>(vertex.uv);
            vertexOut.vUvRec = vSpriteData.vUvRec;
            vertexOut.vUvBorder = vSpriteData.vUvBorder;
            vertexOut.vUvSlice = vSpriteData.vUvSlice;
            vertexOut.vTextureID = vSpriteData.vTextureID;
            vertexOut.vColor4 = vColorBuffer[quadIndex];

            return vertexOut;
         }
         
         ${we.fs}

        `);let Ni=we;class ys extends qt{constructor(e){super();s(this,"_scissorRect");s(this,"_screenSize",new Ae(1024,768));s(this,"_scissorEnable",!1);s(this,"_videoTextureFlags",{});L.register("GUI_shader_view",Ni.GUI_shader_view),L.register("GUI_shader_world",Ni.GUI_shader_world);let r=new lt,i=e==Et.View?"GUI_shader_view":"GUI_shader_world",a=new Be(i,i);a.passType=Y.COLOR,a.setShaderEntry("VertMain","FragMain"),a.setUniformVector4("scissorRect",new K),a.setUniformVector2("screenSize",this._screenSize),a.setUniformFloat("scissorCornerRadius",0),a.setUniformFloat("scissorFadeOutSize",0),a.setUniformFloat("pixelRatio",1),a.setUniformVector3("v3",g.ZERO);let o=a.shaderState;o.depthWriteEnabled=!1,a.blendMode=j.ALPHA,a.depthCompare=e==Et.View?Xt.always:Xt.less_equal,a.cullMode=Ze.back,r.addRenderPass(a),this.shader=r}setPanelRatio(e){this.shader.setUniformFloat("pixelRatio",e)}setScissorRect(e,r,i,a){this._scissorRect||(this._scissorRect=new K),this._scissorRect.set(e,r,i,a),this.shader.setUniformVector4("scissorRect",this._scissorRect)}setScissorEnable(e){this._scissorEnable!=e&&(this._scissorEnable=e,e?this.shader.setDefine("SCISSOR_ENABLE",!0):this.shader.deleteDefine("SCISSOR_ENABLE"),this.shader.noticeValueChange())}setScissorCorner(e,r){this.shader.setUniformFloat("scissorCornerRadius",e),this.shader.setUniformFloat("scissorFadeOutSize",r)}setScreenSize(e,r){return this._screenSize.set(e,r),this.shader.setUniformVector2("screenSize",this._screenSize),this}setTextures(e){for(let r=0;r<7;r++){let i=e[r]||y.res.whiteTexture;this.shader.setTexture(`tex_${r}`,i),this.setVideoTextureDefine(r,i.isVideoTexture)}}setVideoTextureDefine(e,r){let i=!1;r!=this._videoTextureFlags[e]&&(r?this.shader.setDefine(`VideoTexture${e}`,!0):this.shader.deleteDefine(`VideoTexture${e}`),this._videoTextureFlags[e]=r,i=!0),i&&this.shader.noticeValueChange()}set envMap(e){}set shadowMap(e){}set baseMap(e){}set normalMap(e){}set emissiveMap(e){}set irradianceMap(e){}set irradianceDepthMap(e){}}class ec extends se{constructor(){super(...arguments);s(this,"_guiGeometry")}init(e){super.init(),this.addRendererMask(ke.UI),this.removeRendererMask(ke.Default),this.castGI=!1,this.castShadow=!1,this.alwaysRender=!0,this._ignoreEnvMap=this._ignorePrefilterMap=!0}get geometry(){return super.geometry}set geometry(e){super.geometry=e,this._guiGeometry=e}nodeUpdate(e,r,i,a){for(let o=0;o<this.materials.length;o++){let l=this.materials[o].getPass(r),h=this._guiGeometry.getPositionBuffer(),u=this._guiGeometry.getSpriteBuffer(),c=this._guiGeometry.getColorBuffer();if(l)for(let d=0;d<l.length;d++){const f=l[d];f.pipeline||(f.setStorageBuffer("vPositionBuffer",h),f.setStorageBuffer("vSpriteBuffer",u),f.setStorageBuffer("vColorBuffer",c))}}super.nodeUpdate(e,r,i,a)}onUpdate(e){}}class tc{constructor(){s(this,"_use");s(this,"_unUse");this._use=[],this._unUse=[]}pushBack(t){let e=this._use.indexOf(t);e!=-1&&(this._use.splice(e,1),this._unUse.push(t))}getUseList(){return this._use}getOne(t,e){let r;return this._unUse.length>0?(r=this._unUse[0],this._unUse.splice(0,1),this._use.push(r),r):(r=new t(e),this._use.push(r),r)}hasFree(){return this._unUse.length>0}}let Yr;const wr=class wr{constructor(){s(this,"x",0);s(this,"y",0);s(this,"z",0);s(this,"width",1);s(this,"height",1);s(this,"_globalX",0);s(this,"_globalY",0);s(this,"_globalWidth",0);s(this,"_globalHeight",0);s(this,"_visible",!0);s(this,"_offsetX",0);s(this,"_offsetY",0);s(this,"_sprite",y.res.defaultGUISprite);s(this,"_color",new F(1,1,1,1));s(this,"_imageType",Li.Simple);s(this,"dirtyAttributes",xe.MAX);s(this,"cacheTextureId",-1)}static get quadPool(){return this.textPool||(this.textPool=new tc),this.textPool}static recycleQuad(t){t.sprite=null,t.dirtyAttributes=xe.MAX,t.x=0,t.y=0,t.z=-1,t.cacheTextureId=-1,wr.quadPool.pushBack(t)}static spawnQuad(){return wr.quadPool.getOne(wr)}get imageType(){return this._imageType}set imageType(t){this._imageType=t,this.setAttrChange(xe.SPRITE|xe.POSITION)}get color(){return this._color}set color(t){this._color.copyFrom(t),this.setAttrChange(xe.COLOR)}get visible(){return this._visible}set visible(t){t!=this._visible&&(this._visible=t,this.setAttrChange(xe.SPRITE))}get sprite(){return this._sprite}set sprite(t){this._sprite!=t&&(this._sprite=t,this.setAttrChange(xe.SPRITE|xe.POSITION))}get left(){return this._globalX-this._offsetX}get right(){return this.left+this._globalWidth}get top(){return this._globalY-this._offsetY}get bottom(){return this.top+this._globalHeight}setSize(t,e){this.width=t,this.height=e,this.setAttrChange(xe.POSITION)}setXY(t,e){this.x=t,this.y=e,this.setAttrChange(xe.POSITION)}setAttrChange(t){this.dirtyAttributes=this.dirtyAttributes|t}applyTransform(t){this.setAttrChange(xe.POSITION);let e=this._sprite,r=t.getWorldMatrix();(this.x!=0||this.y!=0)&&(r=this.getQuadMatrix(r));let i=r.getScaleX(),a=r.getScaleY(),o=e.isSliced&&this._imageType==Li.Sliced;if(this._offsetX=t.width*.5*i,this._offsetY=t.height*.5*a,o)this._globalWidth=i*(t.width-(e.offsetSize.z-e.trimSize.x)),this._globalHeight=a*(t.height-(e.offsetSize.w-e.trimSize.y)),this._globalX=r.tx+e.offsetSize.x*i,this._globalY=r.ty+e.offsetSize.y*a;else{let l=this.width/e.offsetSize.z,h=this.height/e.offsetSize.w;this._globalWidth=i*e.trimSize.x*l,this._globalHeight=a*e.trimSize.y*h,this._globalX=r.tx+e.offsetSize.x*l*i,this._globalY=r.ty+e.offsetSize.y*h*a}return this}getQuadMatrix(t){return Yr||(Yr=new Dr),Yr.identity(),Yr.setTranslate(this.x,this.y),Yr.mul(t),Yr}writeToGeometry(t,e){return t.fillQuad(this,e),this.dirtyAttributes=xe.NONE,this}};s(wr,"textPool");let Fi=wr;class rc extends Ke{constructor(){super(...arguments);s(this,"_uiTransform");s(this,"_visible",!0)}destroy(){this._uiTransform.setNeedUpdateUIPanel(),super.destroy()}get uiTransform(){return this._uiTransform}get visible(){return this._visible}set visible(e){var r;this._visible!=e&&(this._visible=e,(r=this.onUIComponentVisible)==null||r.call(this,this._visible))}init(e){var r;(r=super.init)==null||r.call(this,e),this._uiTransform=this.object3D.getOrAddComponent(tr),this._uiTransform.setNeedUpdateUIPanel()}copyComponent(e){return this.visible=e.visible,this}}class ic extends rc{constructor(){super(...arguments);s(this,"_mainQuads");s(this,"_shadowRender");s(this,"_shadowSource");s(this,"isUIShadow");s(this,"isShadowless");s(this,"needUpdateShadow")}init(e){var r;(r=super.init)==null||r.call(this,e),this._mainQuads=[]}destroy(){var e,r;this.detachQuads(),(e=this._shadowRender)==null||e.setShadowSource(null),(r=this._shadowSource)==null||r.setShadowRenderer(null),super.destroy(),this._shadowRender=null,this._shadowSource=null}start(){var e;(e=super.start)==null||e.call(this),this.isUIShadow?this.autoBindShadow(null,this):this.isShadowless||this.autoBindShadow(this,null),this.setShadowDirty()}setShadowDirty(){this._shadowRender&&(this._shadowRender.needUpdateShadow=!0)}get mainQuads(){return this._mainQuads}setShadowRenderer(e){this._shadowRender=e}setShadowSource(e){this._shadowSource=e}getShadowRender(){return this._shadowRender}autoBindShadow(e,r){let i=this.object3D.components.values();if(!e)for(let a of i){let o=a;if(!(o.isShadowless||o.isUIShadow)&&o.mainQuads){e=o;break}}if(!r)for(let a of i){let o=a;if(o.isUIShadow&&o.mainQuads){r=o;break}}return e&&r?(e.setShadowRenderer(r),r.setShadowSource(e),!0):!1}recycleQuad(e){if(e&&this._mainQuads){let r=this._mainQuads.indexOf(e);r>=0?(this._mainQuads.splice(r,1),Fi.recycleQuad(e)):e=null}return e}attachQuad(e){return this._mainQuads&&this._mainQuads.push(e),this}detachQuads(){if(this._mainQuads)for(;this._mainQuads.length>0;){let e=this._mainQuads.shift();this.recycleQuad(e)}return this}copyComponent(e){return super.copyComponent(e),this.isUIShadow=e.isUIShadow,this.isShadowless=e.isShadowless,this}}class Ga extends ic{init(t){var e;(e=super.init)==null||e.call(this,t),this.attachQuad(Fi.spawnQuad()),this.sprite=y.res.defaultGUISprite}cloneTo(t){t.getOrAddComponent(Ga).copyComponent(this)}copyComponent(t){return super.copyComponent(t),this.sprite=t.sprite,this.color=t.color,this.imageType=t.imageType,this}set sprite(t){t||(t=y.res.defaultGUISprite);for(let e of this._mainQuads)e.sprite=t,e.setSize(this._uiTransform.width,this._uiTransform.height);this.setShadowDirty()}onTransformResize(){this.applyTransformSize()}applyTransformSize(){for(let t of this._mainQuads)t.setSize(this._uiTransform.width,this._uiTransform.height);this.setShadowDirty()}get sprite(){return this._mainQuads[0].sprite}onUIComponentVisible(t){this.applyComponentVisible()}onUITransformVisible(t){this.applyComponentVisible()}applyComponentVisible(){let t=!this._visible||!this._uiTransform.globalVisible;for(let e of this._mainQuads)e.visible=!t;this.setShadowDirty()}get color(){return this._mainQuads[0].color}set color(t){for(let e of this._mainQuads)e.color=t;this.setShadowDirty()}get imageType(){return this._mainQuads[0].imageType}set imageType(t){for(let e of this._mainQuads)e.imageType=t;this.setShadowDirty()}}class qi extends Ga{constructor(){super(...arguments);s(this,"space",Et.World);s(this,"needUpdateGeometry",!0);s(this,"panelOrder",0);s(this,"needSortOnCameraZ");s(this,"_billboard");s(this,"_rebuild");s(this,"scissorEnable",!1);s(this,"scissorCornerRadius",0);s(this,"scissorFadeOutSize",0);s(this,"_uiRenderer");s(this,"_geometry");s(this,"_maxCount",128);s(this,"panelRatio",1);s(this,"isUIPanel",!0);s(this,"_collectTransform",[])}cloneTo(e){e.getOrAddComponent(qi).copyComponent(this)}copyComponent(e){return super.copyComponent(e),this.panelOrder=e.panelOrder,this.needSortOnCameraZ=e.needSortOnCameraZ,this.cullMode=e.cullMode,this.billboard=e.billboard,this.scissorEnable=e.scissorEnable,this.scissorCornerRadius=e.scissorCornerRadius,this.scissorFadeOutSize=e.scissorFadeOutSize,this}init(e){super.init(e),this._uiTransform.resize(w.canvas.width,w.canvas.height),this.create(this.space),this.visible=!1}updateDrawCallSegment(e,r,i){this._geometry.updateSubGeometry(e,r,i);let a=this._uiRenderer.material,o=this._uiRenderer.materials[e];if(!o){o=new ys(this.space);let l=this._uiRenderer.materials.slice();l.push(o),this._uiRenderer.materials=l,o.cullMode=a.cullMode,o.depthCompare=a.depthCompare}}create(e){this._maxCount=this.space==Et.World?at.quadMaxCountForWorld:at.quadMaxCountForView,this._uiRenderer=this.object3D.addComponent(ec),this._geometry=this._uiRenderer.geometry=new Ju(this._maxCount).create(),this._uiRenderer.material=new ys(e),this._uiRenderer.renderOrder=at.SortOrderStartWorld,this._rebuild=new $u,this.object3D.bound=new Qe(new g,new g(1,1,1).multiplyScalar(Number.MAX_VALUE*.1))}get quadMaxCount(){return this._maxCount}set billboard(e){this.space==Et.View?e=pr.None:console.warn("Cannot enable billboard in view space"),e==pr.BillboardXYZ||e==pr.BillboardY?(this._billboard=this.object3D.getOrAddComponent(Oi),this._billboard.type=e):(this.object3D.removeComponent(Oi),this._billboard=null)}get billboard(){return this._billboard?this._billboard.type:pr.None}set cullMode(e){if(this.space==Et.World)for(let r of this._uiRenderer.materials)r.cullMode=e;else console.warn("Cannot change cullMode in view space")}get cullMode(){return this._uiRenderer.material.cullMode}onUpdate(e){var r;(r=super.onUpdate)==null||r.call(this,e),this.rebuildGUIMesh(e)}rebuildGUIMesh(e){let r=this,i=r._collectTransform;if(i.length=0,r.object3D.getComponents(tr,i),i.length>0){r._rebuild.build(i,r,r.needUpdateGeometry);for(const h of i)h.needUpdateQuads=!1}let a=r.object3D.getComponentFromParent(ji),o=a?a.index:0;r._uiRenderer.enable=i.length>0;let l=r.isViewPanel?at.SortOrderStartView:at.SortOrderStartWorld;if(r._uiRenderer.renderOrder=o*at.SortOrderCanvasSpan+l+r.panelOrder,r._uiRenderer.needSortOnCameraZ=r.needSortOnCameraZ,this.space==Et.View){let h=w.canvas.clientWidth,u=w.canvas.clientHeight,c=this._uiTransform.width,d=this._uiTransform.height;this.panelRatio=this.updateGUIPixelRatio(h,u,c,d)}else this.panelRatio=1;for(let h of r._uiRenderer.materials){let u=h;if(u.setPanelRatio(this.panelRatio),u.setScreenSize(w.canvas.clientWidth,w.canvas.clientHeight),u.setScissorEnable(r.scissorEnable),r.scissorEnable){let c=r.mainQuads[0];u.setScissorRect(c.left,c.bottom,c.right,c.top),u.setScissorCorner(r.scissorCornerRadius,r.scissorFadeOutSize)}}r.needUpdateGeometry=!1}updateGUIPixelRatio(e,r,i,a){let o=i/a,l=e/r,h=1;return o<l?h=r/a:h=e/i,h}}class za extends qi{constructor(){super();s(this,"isViewPanel",!0);s(this,"space",Et.View)}cloneTo(e){e.getOrAddComponent(za).copyComponent(this)}}class Va extends qi{constructor(){super();s(this,"isWorldPanel",!0);s(this,"space",Et.World);s(this,"_depthTest",!0)}cloneTo(e){e.getOrAddComponent(Va).copyComponent(this)}copyComponent(e){return super.copyComponent(e),this.depthTest=e.depthTest,this}get depthTest(){return this._depthTest}set depthTest(e){if(this._depthTest!=e){this._depthTest=e;let r=this.depthTest?Xt.less_equal:Xt.always;for(let i of this._uiRenderer.materials)i.depthCompare=r}}}let _s;class tr extends Ke{constructor(){super();s(this,"useParentPivot",!1);s(this,"parent");s(this,"pivotX",.5);s(this,"pivotY",.5);s(this,"_width",100);s(this,"_height",100);s(this,"_localVisible",!0);s(this,"_globalVisible",!0);s(this,"_uiInteractiveList");s(this,"_localMatrix");s(this,"_worldMatrix");s(this,"_onChange",!0);s(this,"needUpdateQuads",!0);s(this,"_tempTransforms",[]);this._localMatrix=new Dr,this._worldMatrix=new Dr}get uiInteractiveList(){return this._uiInteractiveList}init(e){var r;super.init(e),this.transform.eventDispatcher.addEventListener(this.transform.eventLocalChange.type,this.onTransformChange,this),this.onParentChange(null,(r=this.object3D.parent)==null?void 0:r.object3D)}onTransformChange(e){this.onChange=!0}addUIInteractive(e){return this._uiInteractiveList||(this._uiInteractiveList=[]),this._uiInteractiveList.push(e),this}removeUIInteractive(e){if(this._uiInteractiveList){let r=this._uiInteractiveList.indexOf(e);if(r>=0)return this._uiInteractiveList.slice(r,1),e}return null}get globalVisible(){return this._globalVisible}set visible(e){if(this._localVisible!=e){this._localVisible=e;let r=this.parent?this.parent._globalVisible:!0;this.onUITransformVisible(this._localVisible&&r)}}get visible(){return this._localVisible}onUITransformVisible(e){let r=this._localVisible&&e;r!=this._globalVisible&&(this._globalVisible=r,this.object3D.components.forEach((i,a)=>{let o=i;if(o.onUITransformVisible)if(o==this)for(let l of this.object3D.entityChildren){let h=l.getComponent(tr);h&&h.onUITransformVisible(this._globalVisible)}else o.onUITransformVisible(this._globalVisible)}))}onParentChange(e,r){var i,a;(i=this.parent)==null||i.setNeedUpdateUIPanel(),this.parent=r==null?void 0:r.getComponent(tr),(a=this.parent)==null||a.setNeedUpdateUIPanel()}get width(){return this._width}get height(){return this._height}resize(e,r){var i;if(this._width!=e||this._height!=r){this._width=e,this._height=r,this.onChange=!0;for(let a of this.object3D.components.values())(i=a.onTransformResize)==null||i.call(a);return!0}return!1}get x(){return this.object3D.x}set x(e){e!=this.object3D.x&&(this.object3D.x=e,this.onChange=!0)}get y(){return this.object3D.y}set y(e){e!=this.object3D.y&&(this.object3D.y=e,this.onChange=!0)}setXY(e,r){let i=this.object3D.localPosition;i.set(e,r,i.z),this.object3D.localPosition=i,this.onChange=!0}get z(){return this.object3D.z}set z(e){e!=this.object3D.z&&(this.object3D.z=e,this.onChange=!0)}get scaleX(){return this.object3D.scaleX}set scaleX(e){this.onChange=!0,this.object3D.scaleX=e}get scaleY(){return this.object3D.scaleY}set scaleY(e){this.onChange=!0,this.object3D.scaleY=e}get scaleZ(){return this.object3D.scaleZ}set scaleZ(e){this.onChange=!0,this.object3D.scaleZ=e}get onChange(){return this._onChange}set onChange(e){if(this._onChange!=e&&(this._onChange=e,e)){this._tempTransforms.length=0;let r=this.object3D.getComponents(tr,this._tempTransforms,!0);for(let i of r)i._onChange=!0,i.needUpdateQuads=!0}}onEnable(){this.setNeedUpdateUIPanel(),this.onChange=!0}onDisable(){this.setNeedUpdateUIPanel(),this.onChange=!0}setNeedUpdateUIPanel(){let e;e=this.object3D.getComponentFromParent(Va),e||(e=this.object3D.getComponentFromParent(za)),e&&(e.needUpdateGeometry=!0)}cloneTo(e){let r=e.getOrAddComponent(tr);r.visible=this.visible,r.x=this.x,r.y=this.y,r.z=this.z,r.resize(this.width,this.height),r.pivotX=this.pivotX,r.pivotY=this.pivotY,r.scaleX=this.scaleX,r.scaleY=this.scaleY}matrix(){let e=this._localMatrix,r=this.object3D.rotationZ;return this.parent?(e.updateScaleAndRotation(this.object3D.scaleX,this.object3D.scaleY,r,r),e.tx=this.object3D.x,e.ty=this.object3D.y):e.updateScaleAndRotation(1,1,0,0),(this.pivotX!=.5||this.pivotY!=.5)&&(_s||(_s=new Dr().identity()),e.mul(_s.setTo(1,0,0,1,-(this.pivotX-.5)*this.width,-(this.pivotY-.5)*this.height))),e}getWorldMatrix(){let e=this,r=e._worldMatrix;return this._onChange&&(r.copyFrom(e.matrix()),e.parent&&r.mul(e.parent.getWorldMatrix()),e._onChange=!1),r}beforeDestroy(e){var r;this.transform.eventDispatcher.addEventListener(this.transform.eventLocalChange.type,this.onTransformChange,this),(r=super.beforeDestroy)==null||r.call(this,e)}}class ac{constructor(){s(this,"_ray");s(this,"_mouseCode");s(this,"_clickEvent");s(this,"_outEvent");s(this,"_overEvent");s(this,"_upEvent");s(this,"_downEvent");s(this,"_view");s(this,"_lastDownTarget");s(this,"_lastOverTarget");s(this,"_lastDownPosition",new Ae);s(this,"_calcDistanceVec2",new Ae);s(this,"_lastDownTime",0);s(this,"_clickTimeSpan",200);s(this,"_clickDistanceSpan",10);s(this,"_colliderOut",[]);s(this,"_transformList",[]);s(this,"_sortWorldPanelList",[]);s(this,"_iteractive2PanelDict",new Map)}init(t){this._view=t,this._ray=new ai,this._clickEvent=new O(O.PICK_CLICK_GUI),this._outEvent=new O(O.PICK_OUT_GUI),this._overEvent=new O(O.PICK_OVER_GUI),this._upEvent=new O(O.PICK_UP_GUI),this._downEvent=new O(O.PICK_DOWN_GUI),y.inputSystem.addEventListener(O.POINTER_DOWN,this.onTouchDown,this,null,1),y.inputSystem.addEventListener(O.POINTER_UP,this.onTouchUp,this,null,1),y.inputSystem.addEventListener(O.POINTER_MOVE,this.onTouchMove,this,null,1),y.inputSystem.addEventListener(O.POINTER_CLICK,this.onTouchClick,this,null,1)}onTouchClick(t){this._lastOverTarget&&t.stopImmediatePropagation()}onTouchMove(t){this._mouseCode=t.mouseCode,this.collectEntities();let e=this.pick(this._colliderOut);e&&t.stopImmediatePropagation();let r=e?e.collider:null;r!=this._lastOverTarget&&(this._lastOverTarget&&this._lastOverTarget.enable&&(this._lastOverTarget.mouseStyle=Xr.NORMAL,this._outEvent.data=this._lastOverTarget,this._lastOverTarget.object3D.dispatchEvent(this._outEvent)),r&&(r.mouseStyle=Xr.OVER,this._overEvent.data=r,r.object3D.dispatchEvent(this._overEvent)),this._lastOverTarget=r)}onTouchDown(t){this._lastDownTime=ie.time,this._lastDownPosition.set(t.mouseX,t.mouseY),this._mouseCode=t.mouseCode,this.collectEntities();let e=this.pick(this._colliderOut);e&&t.stopImmediatePropagation();let r=e?e.collider:null;r&&(r.mouseStyle=Xr.DOWN,this._overEvent.data=r,r.object3D.dispatchEvent(this._overEvent)),this._lastDownTarget=r}onTouchUp(t){this._calcDistanceVec2.set(t.mouseX,t.mouseY),this._mouseCode=t.mouseCode,this.collectEntities();let e=this.pick(this._colliderOut);e&&t.stopImmediatePropagation();let r=e?e.collider:null;this._lastDownTarget&&this._lastDownTarget.enable&&(this._lastDownTarget.mouseStyle=Xr.NORMAL),r&&r==this._lastDownTarget&&ie.time-this._lastDownTime<=this._clickTimeSpan&&(this._calcDistanceVec2.set(t.mouseX,t.mouseY),this._calcDistanceVec2.distance(this._lastDownPosition)<=this._clickDistanceSpan&&(this._clickEvent.data={pick:r,pickInfo:e,mouseCode:this._mouseCode},r.object3D.dispatchEvent(this._clickEvent))),this._lastDownTarget=null}collectEntities(){return this._colliderOut.length=0,this._sortWorldPanelList.length=0,this._iteractive2PanelDict.clear(),this._view.canvasList.slice().reverse().forEach(t=>{if(t&&t.transform&&t.transform.parent){let e=t.object3D.getComponentsByProperty("isUIPanel",!0,!0);e.sort((r,i)=>{let a=r._uiRenderer.__renderOrder,o=i._uiRenderer.__renderOrder;return a>o?-1:1});for(let r of e){this._transformList.length=0,r.object3D.getComponents(tr,this._transformList),this._transformList.reverse();for(const i of this._transformList){let a=i.uiInteractiveList;if(a&&a.length>0)for(let o of a)this._colliderOut.push(o),this._iteractive2PanelDict.set(o,r)}}}}),this._colliderOut}pick(t){this._ray=this._view.camera.screenPointToRay(y.inputSystem.mouseX,y.inputSystem.mouseY);let e=new Ae(y.inputSystem.mouseX,y.inputSystem.mouseY),r=new Ae(w.canvas.clientWidth,w.canvas.clientHeight),i;for(const a of t)if(a.interactive&&a.enable&&a.interactiveVisible){let o=this._iteractive2PanelDict.get(a);if(i=a.rayPick(this._ray,o,e,r),i)return i.collider=a,i}return null}}var sc=(n=>(n[n.COLLINEAR=0]="COLLINEAR",n[n.LINES_INTERSECT=1]="LINES_INTERSECT",n[n.SEGMENTS_INTERSECT=2]="SEGMENTS_INTERSECT",n[n.A_BISECTS_B=3]="A_BISECTS_B",n[n.B_BISECTS_A=4]="B_BISECTS_A",n[n.PARALELL=5]="PARALELL",n))(sc||{}),oc=(n=>(n[n.ON_LINE=0]="ON_LINE",n[n.LEFT_SIDE=1]="LEFT_SIDE",n[n.RIGHT_SIDE=2]="RIGHT_SIDE",n))(oc||{});const Me=class Me{constructor(t,e){s(this,"start");s(this,"end");s(this,"color",new F(1,1,1,1));s(this,"_normal");s(this,"_normalCalculated",!1);this.start=t,this.end=e}set(t,e){this.start=t,this.end=e}getCenter(){let t=g.HELP_0;return this.start.subtract(this.end,t),t.scaleBy(.5),t.add(this.end),t}inverse(){let t=this.start;this.start=this.end,this.end=t}equals(t){return this.start==t.start&&this.end==t.end||this.start==t.end&&this.end==t.start}toArray(){return[this.start.x,this.start.y,this.start.z,this.end.x,this.end.y,this.end.z]}static getLines(t){let e=[];for(let r=0;r<t.length;r++){let i=r,a=Cn(r+1,t.length),o=t[i],l=t[a];e.push(new Me(o,l))}return e}intersection(t,e=null){var r=(t.end.z-t.start.z)*(this.end.x-this.start.x)-(t.end.x-t.start.x)*(this.end.z-this.start.z),i=(t.end.x-t.start.x)*(this.start.z-t.start.z)-(t.end.z-t.start.z)*(this.start.x-t.start.x),a=(t.start.x-this.start.x)*(this.end.z-this.start.z)-(t.start.z-this.start.z)*(this.end.x-this.start.x);if(r==0)return i==0&&a==0?0:5;i=i/r,a=a/r;var o=this.start.x+i*(this.end.x-this.start.x),l=this.start.z+i*(this.end.z-this.start.z);return e!=null&&(e.x=o,e.y=0,e.z=l),i>=0&&i<=1&&a>=0&&a<=1?2:a>=0&&a<=1?3:i>=0&&i<=1?4:1}getDirection(){var t=this.end.subtract(this.start),e=new g(t.x,t.y);return e.normalize()}copyFrom(t){this.start||(this.start=new g),this.end||(this.end=new g),this.start.copyFrom(t.start),this.end.copyFrom(t.end)}static IsEqual(t,e){return Math.abs(t-e)<1e-7}static squreDistanceSegmentToSegment(t,e,r){let i=t.start,a=t.end,o=e.start,l=e.end,h=i.x,u=i.y,c=i.z,d=a.x,f=a.y,p=a.z,A=o.x,x=o.y,C=o.z,v=l.x,_=l.y,S=l.z,B=d-h,M=f-u,D=p-c,N=v-A,Q=_-x,U=S-C,le=h-A,he=u-x,me=c-C,ce=B*B+M*M+D*D,re=B*N+M*Q+D*U,_e=N*N+Q*Q+U*U,de=B*le+M*he+D*me,Ve=N*le+Q*he+U*me,$e=ce*_e-re*re,Xe=$e,ht=$e,ve=0,yt=0;this.IsEqual($e,0)?(ve=0,Xe=1,yt=Ve,ht=_e):(ve=re*Ve-_e*de,yt=ce*Ve-re*de,ve<0?(ve=0,yt=Ve,ht=_e):ve>Xe&&(ve=Xe,yt=Ve+re,ht=_e)),yt<0?(yt=0,-de<0?ve=0:-de>ce?ve=Xe:(ve=-de,Xe=ce)):yt>ht&&(yt=ht,-de+re<0?ve=0:-de+re>ce?ve=Xe:(ve=-de+re,Xe=ce));let Qr=0,Gr=0;this.IsEqual(ve,0)?Qr=0:Qr=ve/Xe,this.IsEqual(yt,0)?Gr=0:Gr=yt/ht;let Wa=le+Qr*B-Gr*N,Ka=he+Qr*M-Gr*Q,Xa=me+Qr*D-Gr*U;return Wa*Wa+Ka*Ka+Xa*Xa}isNear(t,e=0,r){let i=g.HELP_0,a=g.HELP_1;i.copyFrom(t.origin),a.copyFrom(t.direction),a.scaleBy(9999),a.add(i,a),Me.cacluteLine0.set(i,a),Me.cacluteLine1.copyFrom(this),r&&(r.perspectiveMultiplyPoint3(Me.cacluteLine1.start,Me.cacluteLine1.start),r.perspectiveMultiplyPoint3(Me.cacluteLine1.end,Me.cacluteLine1.end));let o=Me.squreDistanceSegmentToSegment(Me.cacluteLine0,Me.cacluteLine1,r);return o+1e-4<=e?(t.length=o,!0):(t.length=-999999,!1)}};s(Me,"cacluteLine0",new Me(null,null)),s(Me,"cacluteLine1",new Me(null,null));let Is=Me;var nc=(n=>(n[n.UpperLeft=0]="UpperLeft",n[n.UpperCenter=1]="UpperCenter",n[n.UpperRight=2]="UpperRight",n[n.MiddleLeft=3]="MiddleLeft",n[n.MiddleCenter=4]="MiddleCenter",n[n.MiddleRight=5]="MiddleRight",n[n.LowerLeft=6]="LowerLeft",n[n.LowerCenter=7]="LowerCenter",n[n.LowerRight=8]="LowerRight",n))(nc||{}),lc=(n=>(n[n.Upper=0]="Upper",n[n.Middle=1]="Middle",n[n.Lower=2]="Lower",n))(lc||{}),hc=(n=>(n[n.Left=0]="Left",n[n.Center=1]="Center",n[n.Right=2]="Right",n))(hc||{}),uc=(n=>(n[n.NONE=0]="NONE",n[n.COLOR=1]="COLOR",n[n.SPRITE=2]="SPRITE",n))(uc||{}),cc=Object.defineProperty,dc=Object.getOwnPropertyDescriptor,fc=(n,t,e,r)=>{for(var i=r>1?void 0:r?dc(t,e):t,a=n.length-1,o;a>=0;a--)(o=n[a])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&cc(t,e,i),i};let ea=class extends Xi{constructor(){super()}init(){super.init(),this.lightData.lightType=be.PointLight,this.object3D.name==""&&(this.object3D.name="PointLight"+Ct())}get range(){return this.lightData.range}set range(n){this.lightData.range=n,this.onChange()}get at(){return this.lightData.linear}set at(n){this.lightData.linear=n,this.onChange()}get radius(){return this.lightData.radius}set radius(n){this.lightData.radius=n,this.onChange()}get quadratic(){return this.lightData.quadratic}set quadratic(n){this.lightData.quadratic=n,this.onChange()}start(){this.transform.rotationX=90,super.start()}onUpdate(){}onGraphic(n){let t=n.graphic3D.createCustomShape(`PointLight_${this.object3D.instanceID}`,this.transform);t.buildAxis(),t.buildCircle(g.ZERO,this.range,32,g.X_AXIS),t.buildCircle(g.ZERO,this.range,32,g.Y_AXIS),t.buildCircle(g.ZERO,this.range,32,g.Z_AXIS)}debug(){}debugDraw(n){}};ea=fc([xt(ea,"Light")],ea);var gc=(n=>(n[n.CastGI=0]="CastGI",n[n.ReceiveGI=1]="ReceiveGI",n[n.CastDepth=2]="CastDepth",n[n.Other=3]="Other",n))(gc||{}),pc=Object.defineProperty,Ac=Object.getOwnPropertyDescriptor,mc=(n,t,e,r)=>{for(var i=r>1?void 0:r?Ac(t,e):t,a=n.length-1,o;a>=0;a--)(o=n[a])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&pc(t,e,i),i};let ta=class extends se{constructor(){super()}get geometry(){return null}set geometry(n){}cloneTo(n){}set meshURL(n){let t=y.res.getGeometry(n);t?this.geometry=t:console.error("no geometry set",n)}};ta=mc([xt(ta,"MeshFilter")],ta);class vc extends ee{constructor(){super();s(this,"_envMap");s(this,"skyObject");s(this,"envMapChange",!0);s(this,"view");this.transform.scene3D=this,this.skyObject=new ee,this.addChild(this.skyObject),this._isScene3D=!0,this.envMap||(this.envMap=y.res.defaultSky)}get envMap(){return this._envMap}set envMap(e){this._envMap!=e&&(this.envMapChange=!0),this._envMap=e,k.instance.sky&&"map"in k.instance.sky&&(k.instance.sky.map=e)}get exposure(){return k.instance.sky&&"exposure"in k.instance.sky?k.instance.sky.exposure:0}set exposure(e){k.instance.sky&&"exposure"in k.instance.sky&&(k.instance.sky.exposure=e,y.setting.sky.skyExposure=e)}get roughness(){if(k.instance.sky&&"roughness"in k.instance.sky)return k.instance.sky.roughness}set roughness(e){k.instance.sky&&"roughness"in k.instance.sky&&(k.instance.sky.roughness=e)}}class xc extends La{constructor(){super(3,Hi.triangle_list)}}class Cc extends La{constructor(){super(2,Hi.line_list)}}class yc extends ee{constructor(){super();s(this,"mLineRender");s(this,"mFillRender");this.mLineRender=this.addComponent(Cc),this.mFillRender=this.addComponent(xc)}drawAxis(e,r=new g(0,0,0),i=10){this.createCustomShape(e).buildAxis(r,i)}drawLines(e,r,i=F.COLOR_WHITE){this.createCustomShape(e).buildLines(r,i)}drawCurve(e,r,i=10,a=.5,o=F.COLOR_WHITE){var l=[];let h=new g,u=new g;for(let c=0;c<r.length-1;++c){l.push(r[c]);const d=r[Math.max(c-1,0)],f=r[c],p=r[c+1],A=r[Math.min(c+2,r.length-1)];p.subtract(d,h).multiplyScalar(a/3).add(f,h),f.subtract(A,u).multiplyScalar(a/3).add(p,u),l.push(...this.calculateBezierCurve(f,h,u,p,i))}l.push(r[r.length-1]),this.drawLines(e,l,o)}calculateBezierCurve(e,r,i,a,o){var l=new Array(o);for(let h=0;h<o;++h){let u=(h+1)/(o+1),c=1-u,d=e.mul(c*c*c),f=r.mul(3*u*c*c),p=i.mul(3*u*u*c),A=a.mul(u*u*u);l[h]=d.add(f).add(p).add(A)}return l}drawRect(e,r,i,a,o=F.COLOR_WHITE){this.drawLines(e,[r,new g(r.x+i,r.y,r.z),new g(r.x+i,r.y+a,r.z),new g(r.x,r.y+a,r.z),r],o)}drawCircle(e,r,i,a=32,o=g.Y_AXIS,l=F.COLOR_WHITE){this.createCustomShape(e).buildCircle(r,i,a,o,l)}drawSector(e,r,i,a,o,l=16,h=g.Y_AXIS,u=F.COLOR_WHITE){const c=(o-a)*oe;a*=oe;var d=[];d.push(r);for(let x=0;x<=l;++x){x>0&&d.push(d[d.length-1]);var f=c*(x/l)+a,p=i*Math.cos(f),A=i*Math.sin(f);switch(h){case g.X_AXIS:d.push(r.add(new g(0,p,A)));break;case g.Y_AXIS:d.push(r.add(new g(p,0,A)));break;case g.Z_AXIS:d.push(r.add(new g(p,A,0)));break;default:d.push(r.add(new g(p,A,0)));break}}d.push(d[d.length-1]),d.push(r),this.mLineRender.fillShapeData(e,"line",u,d)}drawArcLine(e,r,i,a,o,l=16,h=g.Y_AXIS,u=F.COLOR_WHITE){this.mLineRender.allocGraphics3DShape(e,this.transform._worldMatrix.index).buildArcLine(r,i,a,o,l,h,u)}createCustomShape(e,r=this.transform){return this.mLineRender.allocGraphics3DShape(e,r._worldMatrix.index)}drawBox(e,r,i,a=F.COLOR_WHITE){var o=[];o.push(r),o.push(new g(i.x,r.y,r.z)),o.push(o[o.length-1]),o.push(new g(i.x,i.y,r.z)),o.push(o[o.length-1]),o.push(new g(r.x,i.y,r.z)),o.push(o[o.length-1]),o.push(r),o.push(o[o.length-1]),o.push(new g(r.x,r.y,i.z)),o.push(o[o.length-1]),o.push(new g(i.x,r.y,i.z)),o.push(o[o.length-1]),o.push(new g(i.x,i.y,i.z)),o.push(o[o.length-1]),o.push(new g(r.x,i.y,i.z)),o.push(o[o.length-1]),o.push(new g(r.x,r.y,i.z)),o.push(new g(r.x,i.y,r.z)),o.push(new g(r.x,i.y,i.z)),o.push(new g(i.x,i.y,r.z)),o.push(new g(i.x,i.y,i.z)),o.push(new g(i.x,r.y,r.z)),o.push(new g(i.x,r.y,i.z)),this.mLineRender.fillShapeData(e,"line",a,o)}drawFillRect(e,r,i,a,o=F.COLOR_WHITE){this.mFillRender.fillShapeData(e,"fill",o,[r,new g(r.x+i,r.y,r.z),new g(r.x+i,r.y,r.z+a),new g(r.x+i,r.y,r.z+a),new g(r.x,r.y,r.z+a),r])}drawFillCircle(e,r,i,a=32,o=g.Y_AXIS,l=F.COLOR_WHITE){var h=[];h.push(r);for(let f=0;f<=a;++f){f>=2&&(h.push(r),h.push(h[h.length-2]));var u=2*Math.PI*f/a,c=i*Math.cos(u),d=i*Math.sin(u);switch(o){case g.X_AXIS:h.push(r.add(new g(0,c,d)));break;case g.Y_AXIS:h.push(r.add(new g(c,0,d)));break;case g.Z_AXIS:h.push(r.add(new g(c,d,0)));break;default:h.push(r.add(new g(c,d,0)));break}}this.mFillRender.fillShapeData(e,"fill",l,h)}drawMeshWireframe(e,r,i,a=F.COLOR_WHITE,o=!1){r&&this.createCustomShape(e,i||this.transform).fillShapeData(r.genWireframe(),a,o)}drawFillSector(e,r,i,a,o,l=16,h=g.Y_AXIS,u=F.COLOR_WHITE){const c=(o-a)*oe;a*=oe;var d=[];d.push(r);for(let x=0;x<=l;++x){x>=2&&(d.push(r),d.push(d[d.length-2]));var f=c*(x/l)+a,p=i*Math.cos(f),A=i*Math.sin(f);switch(h){case g.X_AXIS:d.push(r.add(new g(0,p,A)));break;case g.Y_AXIS:d.push(r.add(new g(p,0,A)));break;case g.Z_AXIS:d.push(r.add(new g(p,A,0)));break;default:d.push(r.add(new g(p,A,0)));break}}this.mFillRender.fillShapeData(e,"fill",u,d)}drawBoundingBox(e,r,i=F.COLOR_WHITE){this.drawBox(e,r.min,r.max,i)}drawCameraFrustum(e,r=F.COLOR_WHITE){if(e.type==ue.perspective){let i=Math.tan(e.fov/2*oe),a=i*e.aspect,o=e.transform._worldMatrix,l=o.transformVector(new g(-a,-i,1)),h=o.transformVector(new g(-a,i,1)),u=o.transformVector(new g(a,-i,1)),c=o.transformVector(new g(a,i,1)),d=e.far,f=e.near,p=e.transform.worldPosition,A=new g().copyFrom(l).multiplyScalar(d).add(p),x=new g().copyFrom(h).multiplyScalar(d).add(p),C=new g().copyFrom(u).multiplyScalar(d).add(p),v=new g().copyFrom(c).multiplyScalar(d).add(p),_=new g().copyFrom(l).multiplyScalar(f).add(p),S=new g().copyFrom(h).multiplyScalar(f).add(p),B=new g().copyFrom(u).multiplyScalar(f).add(p),M=new g().copyFrom(c).multiplyScalar(f).add(p),D=this.createCustomShape(`CameraFrustum_${e.object3D.instanceID}`);D.buildLines([S,x],r),D.buildLines([_,A],r),D.buildLines([M,v],r),D.buildLines([B,C],r),D.buildLines([x,v,C,A,x],r),D.buildLines([S,M,B,_,S],r)}else if(e.type==ue.ortho){e.viewPort,e.viewPort.height;let i=e.transform.worldMatrix,a=i.transformVector(new g(e.viewPort.width*-.5,e.viewPort.height*.5,e.far)),o=i.transformVector(new g(e.viewPort.width*-.5,e.viewPort.height*-.5,e.far)),l=i.transformVector(new g(e.viewPort.width*.5,e.viewPort.height*.5,e.far)),h=i.transformVector(new g(e.viewPort.width*.5,e.viewPort.height*-.5,e.far)),u=i.transformVector(new g(e.viewPort.width*-.5,e.viewPort.height*.5,e.near)),c=i.transformVector(new g(e.viewPort.width*-.5,e.viewPort.height*-.5,e.near)),d=i.transformVector(new g(e.viewPort.width*.5,e.viewPort.height*.5,e.near)),f=i.transformVector(new g(e.viewPort.width*.5,e.viewPort.height*-.5,e.near)),p=this.createCustomShape(`CameraFrustum_${e.object3D.instanceID}`);p.buildLines([u,a],r),p.buildLines([c,o],r),p.buildLines([d,l],r),p.buildLines([f,h],r),p.buildLines([a,l,h,o,a],r),p.buildLines([u,d,f,c,u],r)}}drawObjectBoundingBox(e,r=F.COLOR_WHITE){let i=si.genMeshBounds(e);this.drawBox(`Bounds_${e.instanceID}`,i.min,i.max,r)}Clear(e){this.mLineRender.shapes.has(e)?this.mLineRender.removeShape(e):this.mFillRender.shapes.has(e)&&this.mFillRender.removeShape(e)}ClearAll(){this.mLineRender.shapes.clear(),this.mFillRender.shapes.clear()}ChangeColor(e,r){var i;if(this.mLineRender.shapes.has(e))i=this.mLineRender.shapes.get(e);else if(this.mFillRender.shapes.has(e))i=this.mFillRender.shapes.get(e);else return;const a=i.colorData;for(let o=0;o<a.length;o+=4)a[o+0]=r.r,a[o+1]=r.g,a[o+2]=r.b,a[o+3]=r.a}}class _c{constructor(){s(this,"_computeShader");s(this,"_outBuffer")}init(){let t=Nr.getGBufferFrame("ColorPassGBuffer");this._computeShader=new Mt(Su),this._outBuffer=new mi(32),this._computeShader.setStorageBuffer("outBuffer",this._outBuffer),this._computeShader.setSamplerTexture("visibleMap",t.getPositionMap())}compute(t){let e=ge.getCameraGroup(t.camera);this._computeShader.setStorageBuffer("globalUniform",e.uniformGPUBuffer);let r=b.beginCommandEncoder();b.computeCommand(r,[this._computeShader]),b.endCommandEncoder(r),this._outBuffer.readBuffer()}getPickMeshID(){var t=this._outBuffer.outFloat32Array[0]+.1;return Math.floor(t)}getPickWorldPosition(t){t||(t=new g);var e=this._outBuffer.outFloat32Array[4],r=this._outBuffer.outFloat32Array[5],i=this._outBuffer.outFloat32Array[6];return t.set(e,r,i),t}getPickScreenUV(t){t||(t=new Ae);var e=this._outBuffer.outFloat32Array[2],r=this._outBuffer.outFloat32Array[3];return t.set(e,r),t}}class Ic extends Fr{constructor(e){super();s(this,"ray");s(this,"isTouching",!1);s(this,"_mouseCode");s(this,"_pickEvent");s(this,"_outEvent");s(this,"_overEvent");s(this,"_upEvent");s(this,"_downEvent");s(this,"_mouseMove");s(this,"_pickCompute");s(this,"_lastDownTarget");s(this,"mouseEnableMap");s(this,"_view");s(this,"_lastFocus");s(this,"_interestList",[]);this._view=e,this.init()}init(){this.ray=new ai,this.mouseEnableMap=new Map,this._pickEvent=new O(O.PICK_CLICK),this._outEvent=new O(O.PICK_OUT),this._overEvent=new O(O.PICK_OVER),this._mouseMove=new O(O.PICK_MOVE),this._upEvent=new O(O.PICK_UP),this._downEvent=new O(O.PICK_DOWN)}start(){y.setting.pick.enable&&(y.inputSystem.addEventListener(O.POINTER_DOWN,this.onTouchStart,this),y.inputSystem.addEventListener(O.POINTER_UP,this.onTouchEnd,this),y.inputSystem.addEventListener(O.POINTER_CLICK,this.onTouchOnce,this),y.inputSystem.addEventListener(O.POINTER_MOVE,this.onTouchMove,this)),y.setting.pick.mode=="pixel"&&(this._pickCompute=new _c,this._pickCompute.init())}stop(){y.inputSystem.removeEventListener(O.POINTER_DOWN,this.onTouchStart,this),y.inputSystem.removeEventListener(O.POINTER_UP,this.onTouchEnd,this),y.inputSystem.removeEventListener(O.POINTER_CLICK,this.onTouchOnce,this),y.inputSystem.removeEventListener(O.POINTER_MOVE,this.onTouchMove,this)}onTouchStart(e){this.isTouching=!0,this._mouseCode=e.mouseCode,this.pick(this._view.camera);let r=this.findNearestObj(this._interestList,this._view.camera);this._lastDownTarget=r,r&&(this._downEvent.target=r.object3D,this._downEvent.ctrlKey=e.ctrlKey,this._downEvent.data={pick:r,pickInfo:this.getPickInfo(),mouseCode:this._mouseCode},this.dispatchEvent(this._downEvent),r.object3D.containEventListener(O.PICK_DOWN)&&r.object3D.dispatchEvent(this._downEvent))}onTouchEnd(e){this.isTouching=!1,this._mouseCode=e.mouseCode,this.pick(this._view.camera);let r=this.findNearestObj(this._interestList,this._view.camera);r&&(this._upEvent.target=r.object3D,this._upEvent.ctrlKey=e.ctrlKey,this._upEvent.data={pick:r,pickInfo:this.getPickInfo(),mouseCode:this._mouseCode},this.dispatchEvent(this._upEvent),r.object3D.containEventListener(O.PICK_UP)&&r.object3D.dispatchEvent(this._upEvent))}getPickInfo(){return{worldPos:this._pickCompute.getPickWorldPosition(),screenUv:this._pickCompute.getPickScreenUV(),meshID:this._pickCompute.getPickMeshID()}}onTouchMove(e){this.isTouching=!0,this._mouseCode=e.mouseCode,this.pick(this._view.camera);let r=this.findNearestObj(this._interestList,this._view.camera);r&&(this._mouseMove.target=r.object3D,this._mouseMove.ctrlKey=e.ctrlKey,this._mouseMove.data={pick:r,pickInfo:this.getPickInfo(),mouseCode:this._mouseCode},this.dispatchEvent(this._mouseMove),r.object3D.containEventListener(O.PICK_MOVE)&&r.object3D.dispatchEvent(this._mouseMove)),r!=this._lastFocus&&(this._lastFocus&&this._lastFocus.object3D&&(this._outEvent.target=this._lastFocus.object3D,this._outEvent.data={pick:this._lastFocus,pickInfo:this.getPickInfo(),mouseCode:this._mouseCode},this._outEvent.ctrlKey=e.ctrlKey,this.dispatchEvent(this._outEvent),this._lastFocus.object3D.containEventListener(O.PICK_OUT)&&this._lastFocus.object3D.dispatchEvent(this._outEvent)),r&&(this._overEvent.target=r.object3D,this._overEvent.ctrlKey=e.ctrlKey,this._overEvent.data={pick:r,pickInfo:this.getPickInfo(),mouseCode:this._mouseCode},this.dispatchEvent(this._overEvent),r.object3D.containEventListener(O.PICK_OVER)&&r.object3D.dispatchEvent(this._overEvent))),this._lastFocus=r}onTouchOnce(e){this.isTouching=!0,this._mouseCode=e.mouseCode,this.pick(this._view.camera);let r=this.findNearestObj(this._interestList,this._view.camera);if(r){let i=y.setting.pick.mode=="pixel"?this.getPickInfo():null;this._pickEvent.target=r.object3D,this._pickEvent.ctrlKey=e.ctrlKey,this._pickEvent.data={pick:r,pickInfo:i,mouseCode:this._mouseCode},this.dispatchEvent(this._pickEvent),r===this._lastDownTarget&&r.object3D.containEventListener(O.PICK_CLICK)&&r.object3D.dispatchEvent(this._pickEvent)}this._lastDownTarget=null}findNearestObj(e,r){var i;return e.sort((a,o)=>a.distance>o.distance?1:-1),(i=e[0])==null?void 0:i.collider}pick(e){if(this._interestList.length=0,y.setting.pick.mode=="pixel"){this._pickCompute.compute(this._view);let r=this._pickCompute.getPickMeshID(),i=this.mouseEnableMap.get(r);if(i){let a=this._pickCompute.getPickWorldPosition(),o=g.distance(a,this.ray.origin);this._interestList.push({distance:o,collider:i,intersectPoint:a})}}else if(y.setting.pick.mode=="bound"){this.ray=e.screenPointToRay(y.inputSystem.mouseX,y.inputSystem.mouseY);let r,i=ae.componentsEnablePickerList.get(this._view);if(i)for(const a of i){let o=a[0];o.enable&&(r=o.rayPick(this.ray),r&&(r.collider=o,this._interestList.push(r)))}}}}class Sc extends Ii{constructor(e=0,r=0,i=0,a=0){super();s(this,"_camera");s(this,"_scene");s(this,"_viewPort");s(this,"_enablePick",!1);s(this,"_enable",!0);s(this,"pickFire");s(this,"guiPick");s(this,"canvasList");s(this,"graphic3D");this.canvasList=[],this._viewPort=new K(e,r,i,a),this.graphic3D=new yc}get enable(){return this._enable}set enable(e){this._enable=e}get enablePick(){return this._enablePick}set enablePick(e){this._enablePick!=e&&(this.pickFire=new Ic(this),this.pickFire.start()),this._enablePick=e}get scene(){return this._scene}set scene(e){this._scene=e,e.view=this,st.createBuffer(this),this.graphic3D&&e.addChild(this.graphic3D),e&&this.canvasList.forEach(r=>{r&&e.addChild(r.object3D)})}get camera(){return this._camera}set camera(e){this._camera=e}get viewPort(){return this._viewPort}set viewPort(e){this._viewPort=e}enableUICanvas(e=0){let r=this.canvasList[e];if(!r){let i=new ee;i.name="Canvas "+e,r=i.addComponent(ji),r.index=e,this.canvasList[e]=r}return this.scene.addChild(r.object3D),this.guiPick||(this.guiPick=new ac,this.guiPick.init(this)),r}disableUICanvas(e=0){let r=this.canvasList[e];r&&r.object3D&&r.object3D.removeFromParent()}}var wc=(n=>(n[n.position=3]="position",n[n.normal=3]="normal",n[n.TANGENT=4]="TANGENT",n[n.uv=2]="uv",n[n.TEXCOORD_1=2]="TEXCOORD_1",n[n.color=4]="color",n[n.joints0=4]="joints0",n[n.weights0=4]="weights0",n[n.joints1=4]="joints1",n[n.weights1=4]="weights1",n[n.vIndex=1]="vIndex",n[n.weight=1]="weight",n[n.a_morphPositions_0=3]="a_morphPositions_0",n))(wc||{});class bc{constructor(){s(this,"min",0);s(this,"max",0)}set(t,e){return this.max=e,this.min=t,this}copy(t){return this.max=t.max,this.min=t.min,this}isInterestRange(t){return!(this.max>t.min||t.max<this.min)}}class Ec{constructor(){s(this,"_spaceDesc")}getRange(t){return this._spaceDesc[t]}initSpace(t){this._spaceDesc={};for(let e of t)(this._spaceDesc[e]=new bc).set(-Number.MAX_VALUE,Number.MAX_VALUE);return this}isContain(t,e){let r=this._spaceDesc[t];return e>=r.min&&e<r.max}isInterestRange(t,e){let r=this._spaceDesc[t];return r?e.isInterestRange(r):!1}splitSpace(t,e,r){let i=this._spaceDesc[t];return e?i.max=r:i.min=r,this}copySpace(t){for(let e in t._spaceDesc){let r=t._spaceDesc[e];this._spaceDesc[e].copy(r)}return this}}const br=class br{};s(br,"MaxEntityCountInLeaf",4),s(br,"MaxLayer",10),s(br,"ClearLeafLayer",br.MaxLayer-4);let $r=br;const zi=class zi{constructor(){s(this,"uuid","0");this.uuid=(zi.UUID++).toString()}};s(zi,"UUID",0);let Sa=zi;class Tc{constructor(){s(this,"map",{});s(this,"_count",0)}get count(){return this._count}push(t){return this.map[t.uuid]?!1:(this.map[t.uuid]=t,this._count++,!0)}remove(t){return this.map[t]?(delete this.map[t],this._count--,!0):!1}}const St=class St extends Sa{constructor(e=0){super();s(this,"_dimensionIndex",0);s(this,"_dimensions");s(this,"_dimension");s(this,"_left");s(this,"_right");s(this,"_space");s(this,"_parent");s(this,"_entities");s(this,"layer");s(this,"_splitEntityList",[]);s(this,"pointIntersect",new g);this.layer=e,St.nodeCount++}get dimension(){return this._dimension}initNode(e,r,i){return this._dimensions=r,this._dimensionIndex=i,this._dimension=r[i],this._space=new Ec().initSpace(r),e&&this._space.copySpace(e._space),this._parent=e,this._entities=new Tc,this}updateEntity(e){if(e.isInNode(this,this._dimension)&&(e.attachTreeNode(this),this.autoSplit(),this._left&&this._right)){let r=(this._dimensionIndex+1)%this._dimensions.length,i=this._dimensions[r];e.isInNode(this._right,i)?this._right.updateEntity(e):e.isInNode(this._left,i)&&this._left.updateEntity(e)}}buildRoot(e){for(const r of e)r.entity.attachTreeNode(this);this.autoSplit()}autoSplit(){if(this._entities.count>$r.MaxEntityCountInLeaf&&!this._right&&!this._left&&this.layer<$r.MaxLayer){let e=this._splitEntityList,r=(this._dimensionIndex+1)%this._dimensions.length,i=this._dimensions[r],a=0;for(const o in this._entities.map){let l=this._entities.map[o];a+=l.centerValue(i),e.push(l)}a/=this._entities.count,this._left=new St(this.layer+1),this._right=new St(this.layer+1),this._left.initNode(this,this._dimensions,r),this._right.initNode(this,this._dimensions,r),this._left.setSpace(!0,a),this._right.setSpace(!1,a);for(let o of e)o.isInNode(this._right,i)?o.attachTreeNode(this._right):o.isInNode(this._left,i)&&o.attachTreeNode(this._left)}this._left&&this._left.autoSplit(),this._right&&this._right.autoSplit()}setSpace(e,r){return this._parent&&this._space.splitSpace(this._dimension,e,r),this}isEmpty(){return this._left==null&&this._right==null&&this._entities.count==0}pushEntity(e){return this._entities.push(e)}removeEntity(e){return this._entities.remove(e.uuid)}autoClear(){let e=this;for(;e&&e.layer>$r.ClearLeafLayer&&e.clearLeaf();)e=e._parent}clearLeaf(){let e=!this._left&&!this._right,r=!e&&this._left.isEmpty()&&this._right.isEmpty();return r&&(this._left=this._right=null,St.nodeCount-=2),e||r}isContain(e){return this._space.isContain(this._dimension,e)}nodeIntersectsBox(e){let r=this._space.getRange("x"),i=this._space.getRange("y"),a=this._space.getRange("z"),o=St.rangeBox;return o.min.set(r.min,i.min,a.min),o.max.set(r.max,i.max,a.max),o.intersectsBox(e)}nodeIntersectsRay(e){let r=this._space.getRange("x"),i=this._space.getRange("y"),a=this._space.getRange("z"),o=St.rangeBox;return o.min.set(r.min,i.min,a.min),o.max.set(r.max,i.max,a.max),!0}pointCast(e,r=0,i){if(i=i||[],this._entities.count>0){let a=this._entities.map;for(let o in a){let l=a[o],h=l.entityContainPoint(e);!h&&r>0&&(h=l.squareDistanceTo(e,this._dimensions)<=r),h&&i.push(l)}}this._left&&this._left.isContain(e[this._left.dimension])&&this._left.pointCast(e,r,i),this._right&&this._right.isContain(e[this._right.dimension])&&this._right.pointCast(e,r,i)}boxCast(e,r){if(r=r||[],this._entities.count>0){let i=this._entities.map;for(let a in i){let o=i[a];o.entityIntersectsBox(e)&&r.push(o)}}this._left&&this._left.nodeIntersectsBox(e)&&this._left.boxCast(e,r),this._right&&this._right.nodeIntersectsBox(e)&&this._right.boxCast(e,r)}rayCast(e,r,i){r=r||[],i=i||[];let a=this.pointIntersect;if(this._entities.count>0){let o=this._entities.map;for(let l in o){let h=o[l];h.entityIntersectsRay(e,a)&&(i.push(new g().copyFrom(a)),r.push(h))}}this._left&&this._left.nodeIntersectsRay(e)&&this._left.rayCast(e,r,i),this._right&&this._right.nodeIntersectsRay(e)&&this._right.rayCast(e,r,i)}};s(St,"nodeCount",0),s(St,"rangeBox",new Qe(new g(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),new g(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)));let Ss=St;var Bc=(n=>(n[n.MOUSE_LEFT=0]="MOUSE_LEFT",n[n.MOUSE_MID=1]="MOUSE_MID",n[n.MOUSE_RIGHT=2]="MOUSE_RIGHT",n))(Bc||{});class Dc{constructor(t,e){s(this,"sourceShader");s(this,"compute");s(this,"needUpdate",!0);this.sourceShader=e,this.compute=new Mt(t),this.init()}init(){}onUpdate(){this.onFrame&&this.onFrame(),this.onOnce&&this.needUpdate&&(this.needUpdate=!1,this.onFrame())}}class Rc extends Dc{constructor(t){super(wu,t)}init(){let t=new jt(256,256,z.rgba8unorm,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING);return this.compute.setStorageTexture("sssMap",t),this.sourceShader.setTexture("lutMap",t),t}onFrame(){this.compute.workerSizeX=256/8,this.compute.workerSizeY=256/8;let t=b.beginCommandEncoder();b.computeCommand(t,[this.compute]),b.endCommandEncoder(t)}}class Mc extends nr{constructor(t,e,r=0){super(),this.bufferType=Ut.StructStorageGPUBuffer,this.createBufferByStruct(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|r,t,e)}}class Pc extends qt{constructor(t=Hi.triangle_list){super(),L.register("Graphic3DShader",Eu);let e=new Be("Graphic3DShader","Graphic3DShader");e.setShaderEntry("VertMain","FragMain"),e.noticeValueChange();let r=new lt;r.addRenderPass(e),this.shader=r;let i=e.shaderState;i.acceptShadow=!1,i.castShadow=!1,i.receiveEnv=!1,i.acceptGI=!1,i.useLight=!1,i.topology=t}}var Uc=Object.defineProperty,Lc=Object.getOwnPropertyDescriptor,Oc=(n,t,e,r)=>{for(var i=r>1?void 0:r?Lc(t,e):t,a=n.length-1,o;a>=0;a--)(o=n[a])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&Uc(t,e,i),i};let wa=class extends lt{constructor(){super(),L.register("VertexAttributeIndexShader",bu),L.register("UnLitTextureArray",Mu);let n=new Be("UnLitTextureArray","UnLitTextureArray");n.setShaderEntry("VertMain","FragMain"),this.addRenderPass(n);let t=n.shaderState;t.acceptShadow=!1,t.castShadow=!1,t.receiveEnv=!1,t.acceptGI=!1,t.useLight=!1,this.setDefine("USE_BRDF",!0),this.setDefine("USE_AO_R",!0),this.setDefine("USE_ROUGHNESS_G",!0),this.setDefine("USE_METALLIC_B",!0),this.setDefine("USE_ALPHA_A",!0),this.setDefault()}setDefault(){this.setUniformVector4("transformUV1",new K(0,0,1,1)),this.setUniformVector4("transformUV2",new K(0,0,1,1)),this.setUniformColor("baseColor",new F),this.setUniformFloat("alphaCutoff",0)}set _MainTex(n){this.setTexture("baseMap",n)}set _BumpMap(n){this.setTexture("normalMap",n)}set _MaskTex(n){this.setTexture("maskMap",n)}set _UVTransform(n){this.setUniformVector4("transformUV1",n)}set _Metallic(n){this.setUniformFloat("metallic",n)}set _Roughness(n){this.setUniformFloat("roughness",n)}set _MainColor(n){this.setUniformColor("baseColor",n)}set _AlphaCutoff(n){this.setUniformFloat("alphaCutoff",n)}set _DoubleSidedEnable(n){let t=this.getDefaultColorShader();t.shaderState.cullMode=n?Ze.none:t.shaderState.cullMode}set _SurfaceType(n){let t=this.getDefaultColorShader();n==0?t.blendMode=j.NONE:t.blendMode=j.ALPHA}set _AlphaCutoffEnable(n){n==0?this.setDefine("USE_ALPHACUT",!1):this.setDefine("USE_ALPHACUT",!0)}};wa=Oc([or],wa);class Nc extends qt{constructor(){super(),this.shader=new wa,this.baseMap=y.res.whiteTexture}set baseMap(t){this.shader.setTexture("baseMap",t)}get baseMap(){return this.shader.getTexture("baseMap")}set baseColor(t){this.shader.setUniformColor("baseColor",t)}get baseColor(){return this.shader.getUniformColor("baseColor")}set shadowMap(t){}}var Fc=Object.defineProperty,kc=Object.getOwnPropertyDescriptor,Qc=(n,t,e,r)=>{for(var i=r>1?void 0:r?kc(t,e):t,a=n.length-1,o;a>=0;a--)(o=n[a])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&Fc(t,e,i),i};class Gc extends Tr{constructor(){super(...arguments);s(this,"shapeIndex",0);s(this,"shapeType",0);s(this,"width",0);s(this,"lineCap",0);s(this,"pathCount",0);s(this,"uScale",0);s(this,"vScale",0);s(this,"lineJoin",0);s(this,"startPath",0);s(this,"endPath",0);s(this,"uSpeed",0);s(this,"vSpeed",0);s(this,"paths",[])}}Qc([Si],Gc.prototype,"paths",2);var zc=(n=>(n[n.bevel=0]="bevel",n[n.miter=1]="miter",n[n.round=2]="round",n))(zc||{}),Vc=(n=>(n[n.butt=0]="butt",n[n.square=1]="square",n[n.round=2]="round",n))(Vc||{});class Hc{static merge(t,e,r){}static mergeNumber(t,e,r){let i=r||new vt,a=t.getAttribute(R.position).data.length/3,o=new Float32Array(a*e);for(const c of t.vertexAttributeMap){let d=c[1].attribute;if(d==R.indices)continue;let f=t.getAttribute(d).data,p=f.length,A=new Float32Array(p*e);for(let x=0;x<e;x++){A.set(f,p*x);for(let C=0;C<a;C++)o[a*x+C]=x}i.setAttribute(d,A)}i.setAttribute(R.vIndex,o);let l=t.getAttribute(R.indices).data,h=l.length,u=new Uint32Array(l.length*e);for(let c=0;c<e;c++)for(let d=0;d<h;d++){let f=c*a,p=c*h;const A=l[d]+f;u[p+d]=A}return i.setIndices(u),i.addSubGeometry({indexStart:0,indexCount:u.length,vertexStart:0,index:0,vertexCount:0,firstStart:0,topology:0}),i}static generateNormal(){}static generateTangent(){}static packUV(){}}class Yc extends vt{constructor(e){super();s(this,"segment");s(this,"row",0);this.segment=e,this.buildGeometry()}buildGeometry(){this.row=this.segment+1;let e=new Uint32Array(this.segment*6),r=new Float32Array(this.row*3*2),i=new Float32Array(this.row*3*2),a=new Float32Array(this.row*2*2);for(let o=0;o<this.row;o++){r[o*3*2+0]=0,r[o*3*2+1]=0,r[o*3*2+2]=0,r[o*3*2+3]=0,r[o*3*2+4]=0,r[o*3*2+5]=0,i[o*3*2+0]=0,i[o*3*2+1]=0,i[o*3*2+2]=1,i[o*3*2+3]=0,i[o*3*2+4]=0,i[o*3*2+5]=1,a[o*2*2+0]=0,a[o*2*2+1]=o/this.segment,a[o*2*2+2]=1,a[o*2*2+3]=o/this.segment;let l=o*2,h=l,u=l+1,c=l+2,d=l+3;e[o*6+0]=h,e[o*6+1]=u,e[o*6+2]=c,e[o*6+3]=u,e[o*6+4]=d,e[o*6+5]=c}this.setIndices(e),this.setAttribute(R.position,r),this.setAttribute(R.normal,i),this.setAttribute(R.uv,a),this.setAttribute(R.TEXCOORD_1,a),this.addSubGeometry({indexStart:0,indexCount:e.length,vertexStart:0,vertexCount:0,firstStart:0,index:0,topology:0})}}var Wc=Object.defineProperty,Kc=Object.getOwnPropertyDescriptor,Xc=(n,t,e,r)=>{for(var i=r>1?void 0:r?Kc(t,e):t,a=n.length-1,o;a>=0;a--)(o=n[a])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&Wc(t,e,i),i},jc=(n=>(n[n.FaceToCamera=0]="FaceToCamera",n[n.FaceToPath=1]="FaceToPath",n[n.FaceToUp=2]="FaceToUp",n))(jc||{});class yi extends Tr{constructor(){super(...arguments);s(this,"index",1);s(this,"segment",5);s(this,"visible",1);s(this,"width",.25);s(this,"uv",new K(0,0,1,30));s(this,"uvSpeed",new Ae(0,2.1));s(this,"smooth",0);s(this,"faceMode",0);s(this,"up",new K(0,1,0));s(this,"ids",new Float32Array(ba.maxRibbonSegment));s(this,"ribbonPoint",[])}}Xc([Si],yi.prototype,"ribbonPoint",2);const ti=class ti extends se{constructor(){super(...arguments);s(this,"transformBuffer");s(this,"sourceGeometry");s(this,"texture");s(this,"object3Ds");s(this,"ribbons");s(this,"ribbonCount",10);s(this,"_onChange",!1);s(this,"_computeShader");s(this,"_ribbonBuffer");s(this,"ribbonSegment")}init(){super.init()}create(e,r,i){this.ribbons=[],this.ribbonSegment=e;for(let l=0;l<i;l++)this.ribbons[l]=new yi,this.ribbons[l].index=l,this.ribbons[l].segment=e,this.ribbons[l].width=.5,this.ribbons[l].faceMode=0;let a=new Yc(e),o=new Nc;o.baseMap=r,this.material=o,this.transformBuffer=new Pe(i*(7*4),0),this.material.setStorageBuffer("graphicBuffer",this.transformBuffer),this.object3Ds=[];for(let l=0;l<i;l++){const h=new ee;this.object3Ds.push(h),this.object3D.addChild(h),this.transformBuffer.setFloat("matrix_"+l,h.transform.worldMatrix.index),this.transformBuffer.setFloat("texId_"+l,1),this.transformBuffer.setFloat("texId2_"+l,1),this.transformBuffer.setFloat("texId3_"+l,1),this.transformBuffer.setColor("baseColor_"+l,new F),this.transformBuffer.setColor("lineColor_"+l,new F),this.transformBuffer.setColor("emissiveColor_"+l,new F(0,0,0,0)),this.transformBuffer.setVector4("uvRect_"+l,new K(0,0,1,1)),this.transformBuffer.setVector4("uvRect2_"+l,new K(0,0,1,1)),this.transformBuffer.setVector4("uvSpeed_"+l,new K(0,0,0,0))}this.transformBuffer.apply(),this.geometry=Hc.mergeNumber(a,i)}startRibbon(e,r,i){this.ribbonCount=i,this.create(r,e,i),this._computeShader=new Mt(Tu(ti.maxRibbonSegment)),this._ribbonBuffer=new Mc(yi,i);for(let a=0;a<i;a++){this.ribbons[a].ribbonPoint=[];for(let o=0;o<ti.maxRibbonSegment;o++){const l=new ee;this.object3D.addChild(l),this.ribbons[a].ribbonPoint[o]=l,this.ribbons[a].ids[o]=l.transform.worldMatrix.index}}this._ribbonBuffer.setStructArray(yi,this.ribbons),this._ribbonBuffer.apply(),this.start=()=>{this._computeShader.setStorageBuffer("vertexBuffer",this.geometry.vertexBuffer.vertexGPUBuffer),this._computeShader.setStorageBuffer("trailBuffer",this._ribbonBuffer),this._computeShader.setStorageBuffer("models",ge.modelMatrixBindGroup.matrixBufferDst),this._computeShader.setStorageBuffer("globalUniform",ge.getCameraGroup(this.transform.scene3D.view.camera).uniformGPUBuffer)},this.onCompute=(a,o)=>this.computeTrail(a,o)}setTextureID(e,r){this.transformBuffer.setFloat("texId_"+e,r),this._onChange=!0}setBaseColor(e,r){this.transformBuffer.setColor("baseColor_"+e,r),this._onChange=!0}setEmissiveColor(e,r){this.transformBuffer.setColor("emissiveColor_"+e,r),this._onChange=!0}setUVRect(e,r){this.transformBuffer.setVector4("uvRect_"+e,r),this._onChange=!0}setLineUVRect(e,r){this.transformBuffer.setVector4("uvRect1_"+e,r),this._onChange=!0}onUpdate(e){this._onChange&&(this._onChange=!1,this.transformBuffer.apply())}computeTrail(e,r){this._computeShader.workerSizeX=this.ribbonCount,this._computeShader.workerSizeY=1,b.computeCommand(r,[this._computeShader])}};s(ti,"maxRibbonSegment",256);let ba=ti;class qc{constructor(){s(this,"indexList");s(this,"color");s(this,"count")}}class Jc{constructor(){s(this,"SlotCount",8);s(this,"MaxEntities",16);s(this,"defaultColor",new F(.2,1,1,1));s(this,"slots",[]);s(this,"dataDirty",!0);let t=y.setting.render.postProcessing.outline.groupCount;this.SlotCount=Math.max(1,Math.min(t,this.SlotCount));for(let e=0;e<this.SlotCount;e++){let r=this.slots[e]=new qc;r.indexList=new Float32Array(this.MaxEntities),r.color=this.defaultColor.clone(),r.count=0}}clear(){for(let t=0;t<this.SlotCount;t++)this.clearAt(t)}clearAt(t){this.dataDirty=!0;let e=this.slots[t];return e.color.copyFrom(this.defaultColor),e.indexList.fill(-1),e.count=0,this}fillDataAt(t,e,r){this.dataDirty=!0;let i=this.slots[t];if(i){i.indexList.fill(-1);for(let a=0,o=e.length;a<o;a++)i.indexList[a]=e[a];i.count=e.length,i.color.copyFrom(r)}return this}fetchData(t){return t.dirty=this.dataDirty,t.slots=this.slots,this.dataDirty=!1,this}}new Jc;var Zc=(n=>(n.Point="Point",n.LineString="LineString",n.MultiPolygon="MultiPolygon",n))(Zc||{});class $c extends ze{constructor(){super(...arguments);s(this,"json")}async parseString(e){this.json=e,this.data=JSON.parse(e)}}s($c,"format",Te.JSON);class ed{constructor(){s(this,"boneName");s(this,"bonePath");s(this,"parentBoneName");s(this,"boneID");s(this,"parentBoneID");s(this,"instanceID");s(this,"parentInstanceID");s(this,"t");s(this,"q");s(this,"s")}formBytes(t){this.boneName=t.readUTF(),this.bonePath=t.readUTF(),this.parentBoneName=t.readUTF(),this.boneID=t.readInt32(),this.parentBoneID=t.readInt32(),this.instanceID=t.readUTF(),this.parentInstanceID=t.readUTF(),this.t=t.readVector3(),this.q=t.readQuaternion(),this.s=t.readVector3()}}class td{constructor(){s(this,"name");s(this,"count");s(this,"boneData");s(this,"boneMap")}formBytes(t){this.boneData=[],this.boneMap=new Map,this.name=t.readUTF(),this.count=t.readInt32();for(let e=0;e<this.count;e++){let r=new ed;r.formBytes(t.readBytesArray()),this.boneData[e]=r,this.boneMap.set(r.boneName,r)}}}class io extends ze{static parser(t,e){let r=t.readInt32();for(let i=0;i<r;i++){let a=new td;a.formBytes(t.readBytesArray()),y.res.addObj(a.name,a)}}verification(){if(this.data)return!0;throw new Error("verify failed.")}}s(io,"format",Te.BIN);R.position,R.normal,R.color,R.TANGENT,R.uv,R.TEXCOORD_1,R.TEXCOORD_2,R.TEXCOORD_2,R.TEXCOORD_4,R.TEXCOORD_5,R.TEXCOORD_6,R.TEXCOORD_7,R.joints0,R.weights0;var P=(n=>(n[n.single=0]="single",n[n.boolean=1]="boolean",n[n.int=2]="int",n[n.int16=3]="int16",n[n.int32=4]="int32",n[n.float=5]="float",n[n.long=6]="long",n[n.uint=7]="uint",n[n.uint32=8]="uint32",n[n.uint64=9]="uint64",n[n.double=10]="double",n[n.string=11]="string",n[n.singleArray=12]="singleArray",n[n.stringArray=13]="stringArray",n[n.floatArray=14]="floatArray",n[n.vector2=15]="vector2",n[n.vector3=16]="vector3",n[n.vector4=17]="vector4",n[n.color=18]="color",n[n.color32=19]="color32",n[n.animationCurve=20]="animationCurve",n[n.quaternion=21]="quaternion",n[n.matrix4x4=22]="matrix4x4",n[n.mesh=23]="mesh",n[n.texture=24]="texture",n[n.material=25]="material",n[n.materials=26]="materials",n[n.skeleton=27]="skeleton",n[n.animClip=28]="animClip",n[n.vector2Int=29]="vector2Int",n[n.int32List=30]="int32List",n[n.colorList=31]="colorList",n[n.color32List=32]="color32List",n))(P||{});class ra{static GetMaterial(t){let e=t,r=e.split("/");e=r[r.length-1],r=e.split("."),e=r[r.length-1];let i=Ao(e);if(i){let a=new qt;return a.shader=new i,a}else throw new Error("not found shader, shader name is "+e)}static applyMaterialTexture(t,e){for(let r=0;r<e.length;r++){const i=e[r];i.property in t?t[i.property]=i.texture:i.property in t.shader?t.shader[i.property]=i.texture:t.setTexture(i.property,i.texture)}}static applyMaterialProperties(t,e){for(let r=0;r<e.length;r++){const i=e[r],a=i.key;switch(i.type){case P.color:case P.color32:{let o=i.getValue();a in t?t[a]=o:a in t.shader?t.shader[a]=o:t.setUniformColor(a,o)}break;case P.single:case P.float:case P.int:case P.int16:case P.int32:case P.uint:case P.uint32:case P.uint64:{let o=i.getValue();a in t?t[a]=o:a in t.shader?t.shader[a]=o:t.setUniformFloat(a,o)}break;case P.singleArray:{let o=i.getValue()[0];a in t?t[a]=o:a in t.shader?t.shader[a]=o:t.setUniformFloat(a,o)}break;case P.vector2:case P.vector2Int:{let o=i.getValue();a in t?t[a]=o:a in t.shader?t.shader[a]=o:t.setUniformVector2(a,o)}break;case P.vector3:{let o=i.getValue();a in t?t[a]=o:a in t.shader?t.shader[a]=o:t.setUniformVector3(a,o)}break;case P.vector4:{let o=i.getValue();a in t?t[a]=o:a in t.shader?t.shader[a]=o:t.setUniformVector4(a,o)}break}}}}class Ht{static parser(t){switch(t.readInt32()){case P.single:return{t:P.single,v:t.readFloat32()};case P.boolean:return{t:P.boolean,v:t.readBoolean()};case P.int:return{t:P.int,v:t.readInt32()};case P.int16:return{t:P.int16,v:t.readInt16()};case P.int32:return{t:P.int32,v:t.readInt32()};case P.float:return{t:P.float,v:t.readFloat32()};case P.long:return{t:P.long,v:t.readFloat64()};case P.uint:return{t:P.uint,v:t.readUnit32()};case P.uint32:return{t:P.uint32,v:t.readUnit32()};case P.uint64:return{t:P.uint64,v:t.readUnit32()};case P.double:return{t:P.double,v:t.readFloat64()};case P.string:return{t:P.string,v:t.readUTF()};case P.singleArray:return{t:P.singleArray,v:t.readFloatArray()};case P.stringArray:return{t:P.stringArray,v:t.readStringArray()};case P.floatArray:return{t:P.floatArray,v:t.readFloatArray()};case P.vector2:return{t:P.vector2,v:t.readVector2()};case P.vector3:return{t:P.vector3,v:t.readVector3()};case P.vector4:return{t:P.vector4,v:t.readVector4()};case P.color:return{t:P.color,v:t.readColor()};case P.color32:return{t:P.color32,v:t.readColor()};case P.animationCurve:return{t:P.animationCurve,v:null};case P.quaternion:return{t:P.quaternion,v:t.readQuaternion()};case P.matrix4x4:return{t:P.matrix4x4,v:null};case P.mesh:{let o=t.readUTF(),l=y.res.getGeometry(o);return{t:P.mesh,v:l}}case P.texture:{let o=t.readUTF(),l=y.res.getTexture(o);return{t:P.texture,v:l}}case P.material:{let o=t.readUTF(),l=y.res.getMat(o);return{t:P.material,v:l}}case P.materials:{let o=t.readStringArray(),l=[];for(let h=0;h<o.length;h++){const u=o[h];let c=y.res.getMat(u);l.push(c)}return{t:P.materials,v:l}}case P.skeleton:break;case P.animClip:{let o=[],l=t.readInt32();for(let h=0;h<l;h++){let u=new _d;u.formBytes(t),o.push(u)}return{t:P.animClip,v:o}}case P.vector2Int:return{t:P.vector2Int,v:t.readVector2int()};case P.int32List:return{t:P.int32List,v:t.readInt32List()};case P.colorList:let e=t.readInt32(),r=[];for(let o=0;o<e;o++){const l=Ht.parser(t).v;r.push(l)}return{t:P.colorList,v:r};case P.color32List:let i=t.readInt32(),a=[];for(let o=0;o<i;o++){const l=Ht.parser(t).v;a.push(l)}return{t:P.color32List,v:a}}}}class ao{constructor(){s(this,"key");s(this,"type");s(this,"_data")}getValue(){return this._data}formBytes(t){this.key=t.readUTF();let{t:e,v:r}=Ht.parser(t);this.type=e,this._data=r}}class rd{constructor(){s(this,"property");s(this,"name");s(this,"texture");s(this,"texelSize");s(this,"wrapModeU");s(this,"wrapModeV");s(this,"wrapModeW");s(this,"wrapMode");s(this,"anisoLevel");s(this,"dimension");s(this,"filterMode")}}class so extends ze{static parserMaterial(t,e){let r=t.readInt32();for(let i=0;i<r;i++){let a=t.readBytesArray(),o=a.readUTF(),l=a.readUTF();a.readUTF();let h=a.readStringArray();a.readVector4(),a.readVector4();let u=a.readUTF(),c=[],d=[],f=a.readInt32();for(let x=0;x<f;x++){let C=new ao;C.formBytes(a),c.push(C)}let p=a.readInt32();for(let x=0;x<p;x++){let C=a.readBytesArray(),v=new rd;v.property=C.readUTF(),v.name=C.readUTF(),v.texture=y.res.getTexture(v.name),v.texelSize=C.readVector2(),v.wrapModeU=C.readUnit32(),v.wrapModeV=C.readUnit32(),v.wrapModeW=C.readUnit32(),v.wrapMode=C.readUnit32(),v.anisoLevel=C.readUnit32(),v.dimension=C.readUnit32(),v.filterMode=C.readUnit32(),d.push(v)}let A=ra.GetMaterial(u);A.name=o;for(let x=0;x<h.length;x++){const C=h[x];A.shader.setDefine(C,!0)}ra.applyMaterialTexture(A,d),ra.applyMaterialProperties(A,c),y.res.addMat(l,A)}}verification(){if(this.data)return!0;throw new Error("verify failed.")}}s(so,"format",Te.TEXT);class id{constructor(){s(this,"shapeName");s(this,"shapeIndex");s(this,"frameCount");s(this,"blendPositionList",new Float32Array);s(this,"blendNormalList",new Float32Array)}formBytes(t){let e=t.readBytesArray();this.shapeName=e.readUTF(),this.shapeIndex=e.readInt32(),this.frameCount=e.readInt32();let r=e.readInt32();this.blendPositionList=e.readFloat32Array(r*3);let i=e.readInt32();this.blendNormalList=e.readFloat32Array(i*3)}}class ad{constructor(){s(this,"vertexCount");s(this,"shapeNames");s(this,"shapeIndexs");s(this,"blendCount");s(this,"blendShapePropertyDatas");s(this,"blendShapeMap")}formBytes(t){this.blendShapeMap=new Map,this.blendShapePropertyDatas=[];let e=t.readBytesArray();this.vertexCount=e.readInt32(),this.shapeNames=e.readStringArray(),this.shapeIndexs=e.readIntArray(),this.blendCount=e.readInt32();for(let r=0;r<this.blendCount;r++){let i=new id;i.formBytes(e),this.blendShapePropertyDatas.push(i),this.blendShapeMap.set(i.shapeName,i)}return t}}class sd{constructor(){s(this,"name");s(this,"meshName");s(this,"meshID");s(this,"vertexCount");s(this,"vertexStrip");s(this,"vertexBuffer");s(this,"indices");s(this,"attributes");s(this,"bones");s(this,"bindPose");s(this,"blendShapeData")}}class oo extends ze{async parseBuffer(t){}static parserMeshs(t,e){let r=t.readInt32();for(let i=0;i<r;i++){let a=new sd,o=t.readBytesArray();a.meshName=o.readUTF(),a.meshID=o.readUTF(),o.readFloat32()>0,o.readFloat32()>0,o.readFloat32()>0;let l=o.readFloat32()>0,h=o.readFloat32()>0;l&&(a.bones=o.readStringArray(),a.bindPose=o.readMatrix44Array()),h&&(a.blendShapeData=new ad,a.blendShapeData.formBytes(o));let u=o.readBytesArray(),c=o.readBytesArray(),d=u.readInt32(),f=0,p=[];for(let _=0;_<d;_++)p[_]={},p[_].att=od[u.readUTF()],p[_].dim=u.readInt32(),f+=p[_].dim,p[_].format=u.readUTF();a.vertexCount=u.readInt32(),a.vertexBuffer=c.getFloat32Array();let A=o.readInt32Array(),x=[],C=o.readInt32();for(let _=0;_<C;_++){let S=o.readInt32(),B=o.readInt32(),M=o.readInt32(),D=o.readInt32(),N=o.readInt32(),Q=o.readInt32();o.readVector3(),o.readVector3();let U={indexStart:B,indexCount:M,vertexStart:D,vertexCount:Q,firstStart:N,topology:S,index:_};x.push(U)}A.length>65535?a.indices=new Uint32Array(A):a.indices=new Uint16Array(A);let v=new vt;if(v.vertexDim=f,v.geometryType=Le.compose_bin,v.setIndices(a.indices),v.setAttribute(R.all,a.vertexBuffer),l&&(v.skinNames=a.bones,v.bindPose=a.bindPose),h){v.blendShapeData=a.blendShapeData,v.morphTargetsRelative=!0,v.morphTargetDictionary={};for(let _=0;_<a.blendShapeData.blendCount;_++){v.setAttribute("a_morphPositions_"+_,a.blendShapeData.blendShapePropertyDatas[_].blendPositionList),v.setAttribute("a_morphNormals_"+_,a.blendShapeData.blendShapePropertyDatas[_].blendNormalList);for(let S=0;S<a.blendShapeData.blendCount;S++){let B=a.blendShapeData.shapeNames[S],M=a.blendShapeData.shapeIndexs[S];v.morphTargetDictionary[B]=M}}}for(let _=0;_<p.length;_++){const S=p[_].att;v.setAttribute(S,null)}for(let _=0;_<x.length;_++){const S=x[_];v.addSubGeometry(S)}v.name=a.meshName,y.res.addGeometry(a.meshID,v)}}verification(){if(this.data)return!0;throw new Error("verify failed.")}}s(oo,"format",Te.BIN);let od={Position:R.position,Normal:R.normal,Color:R.color,Tangent:R.TANGENT,TexCoord0:R.uv,TexCoord1:R.TEXCOORD_1,TexCoord2:R.TEXCOORD_2,TexCoord3:R.TEXCOORD_2,TexCoord4:R.TEXCOORD_4,TexCoord5:R.TEXCOORD_5,TexCoord6:R.TEXCOORD_6,TexCoord7:R.vIndex,BlendIndices:R.joints0,BlendWeight:R.weights0};class Ha extends DataView{constructor(e,r,i){super(e,r,i);s(this,"position",0);s(this,"littleEndian",!0);this.position=0,this.position+=this.byteOffset}readUTF(){let e=this.readInt32(),r=e%4;r>0&&r<4&&(r=4-r);let i="",a=new Int8Array(this.buffer,this.position,e);return this.position+=e*Int8Array.BYTES_PER_ELEMENT,i+=String.fromCharCode.apply(null,a),this.position+=r*Int8Array.BYTES_PER_ELEMENT,i}readStringArray(){let e=[],r=this.readInt32();for(let i=0;i<r;i++)e.push(this.readUTF());return e}readByte(){let e=this.buffer[this.position];return this.position+=1,e}readBoolean(){let e=this.readInt32();return this.position+=4,e==1}readBytes(e){let r=new DataView(this.buffer,this.position,e);return this.position+=e,r.buffer}readBytesArray(){let e=this.readInt32(),r=new Ha(this.buffer.slice(this.position,this.position+e));return this.position+=e,r}readUnit8(){let e=this.getUint8(this.position);return this.position+=Uint8Array.BYTES_PER_ELEMENT,e}readUnit16(){let e=this.getUint16(this.position);return this.position+=Uint16Array.BYTES_PER_ELEMENT,e}readUnit32(){let e=this.getUint32(this.position);return this.position+=Uint32Array.BYTES_PER_ELEMENT,e}readInt8(){let e=this.getInt8(this.position);return this.position+=Int8Array.BYTES_PER_ELEMENT,e}readInt16(){let e=this.getInt16(this.position,this.littleEndian);return this.position+=Int16Array.BYTES_PER_ELEMENT,e}readInt32(){let e=this.getInt32(this.position,this.littleEndian);return this.position+=Int32Array.BYTES_PER_ELEMENT,e}readFloat32(){let e=this.getFloat32(this.position,this.littleEndian);return this.position+=Float32Array.BYTES_PER_ELEMENT,e}readFloat64(){let e=this.getFloat64(this.position,this.littleEndian);return this.position+=Float64Array.BYTES_PER_ELEMENT,e}readInt32Array(){let e=this.readInt32(),r=new Int32Array(this.buffer,this.position,e);return r=r.slice(0,e),this.position+=r.byteLength,r}readInt32List(){let e=this.readInt32(),r=[];for(let i=0;i<e;i++)r.push(this.readInt32());return r}readFloatArray(){let e=this.readInt32(),r=[];for(let i=0;i<e;i++){let a=this.readFloat32();r.push(a)}return r}readIntArray(){let e=this.readInt32(),r=[];for(let i=0;i<e;i++){let a=this.readInt32();r.push(a)}return r}readVector2int(){let e=new Ae;return e.x=this.readInt32(),e.y=this.readInt32(),e}readVector2(){let e=new Ae;return e.x=this.readFloat32(),e.y=this.readFloat32(),e}readVector3(){let e=new g;return e.x=this.readFloat32(),e.y=this.readFloat32(),e.z=this.readFloat32(),e}readVector3Array(){let e=[],r=this.readInt32();for(let i=0;i<r;i++)e.push(this.readVector3());return e}readVector4(){let e=new K;return e.x=this.readFloat32(),e.y=this.readFloat32(),e.z=this.readFloat32(),e.w=this.readFloat32(),e}readVector4Array(){let e=[],r=this.readInt32();for(let i=0;i<r;i++)e.push(this.readVector4());return e}readColor(){let e=new F;return e.r=this.readFloat32(),e.g=this.readFloat32(),e.b=this.readFloat32(),e.a=this.readFloat32(),e}readColorArray(){let e=[],r=this.readInt32();for(let i=0;i<r;i++)e.push(this.readColor());return e}readQuaternion(){let e=new X;return e.x=this.readFloat32(),e.y=this.readFloat32(),e.z=this.readFloat32(),e.w=this.readFloat32(),e}readQuaternionArray(){let e=[],r=this.readInt32();for(let i=0;i<r;i++)e.push(this.readQuaternion());return e}readMatrix44(){let e=new V,r=e.rawData;return r[0]=this.readFloat32(),r[1]=this.readFloat32(),r[2]=this.readFloat32(),r[3]=this.readFloat32(),r[4]=this.readFloat32(),r[5]=this.readFloat32(),r[6]=this.readFloat32(),r[7]=this.readFloat32(),r[8]=this.readFloat32(),r[9]=this.readFloat32(),r[10]=this.readFloat32(),r[11]=this.readFloat32(),r[12]=this.readFloat32(),r[13]=this.readFloat32(),r[14]=this.readFloat32(),r[15]=this.readFloat32(),e}readMatrix44Array(){let e=this.readInt32(),r=[];for(let i=0;i<e;i++){let a=this.readMatrix44();r.push(a)}return r}readFloat32Array(e){let r=new Float32Array(this.buffer,this.position,e);return r=r.slice(0,this.byteLength),this.position+=e*Float32Array.BYTES_PER_ELEMENT,r}getFloat32Array(){let e=new Float32Array(this.buffer,this.byteOffset,this.byteLength/Float32Array.BYTES_PER_ELEMENT);return e=e.slice(0,this.byteLength),e}}class no extends ze{static async parserTexture(t,e,r){let i=t.readInt32(),a=[];for(let l=0;l<i;l++){let h=t.readUTF();Ea.useWebp?(h=h.replace("png","webp"),h=h.replace("jpb","webp"),a.push(e.baseUrl+"webp/"+h)):a.push(e.baseUrl+h)}let o=await y.res.loadBitmapTextures(a,y.setting.loader.numConcurrent,r,!0);for(const l of o)y.res.addTexture(l.name,l)}verification(){if(this.data)return!0;throw new Error("verify failed.")}}s(no,"format",Te.TEXT);var nd=Object.defineProperty,ld=Object.getOwnPropertyDescriptor,hd=(n,t,e,r)=>{for(var i=r>1?void 0:r?ld(t,e):t,a=n.length-1,o;a>=0;a--)(o=n[a])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&nd(t,e,i),i};let ws=class extends lt{constructor(){super(),L.register("PBRLitSSSShader",Ru);let n=new Be("PBRLitSSSShader","PBRLitSSSShader");n.setShaderEntry("VertMain","FragMain"),this.addRenderPass(n);let t=n.shaderState;t.acceptShadow=!0,t.castShadow=!0,t.receiveEnv=!0,t.acceptGI=!0,t.useLight=!0,this.setDefine("USE_BRDF",!0),this.setDefine("USE_AO_R",!0),this.setDefine("USE_ROUGHNESS_G",!0),this.setDefine("USE_METALLIC_B",!0),this.setDefine("USE_ALPHA_A",!0),this.setDefine("USE_CUSTOMUNIFORM",!0),this.setDefault(),this.debug(),this.computes=[new Rc(this)]}debug(){}setDefault(){this.setUniformFloat("shadowBias",35e-5),this.setUniformVector4("transformUV1",new K(0,0,1,1)),this.setUniformVector4("transformUV2",new K(0,0,1,1)),this.setUniformColor("baseColor",new F),this.setUniformColor("emissiveColor",new F(1,1,1)),this.setUniformVector4("materialF0",new K(.04,.04,.04,1)),this.setUniformColor("specularColor",new F(.04,.04,.04)),this.setUniformFloat("envIntensity",1),this.setUniformFloat("normalScale",1),this.setUniformFloat("roughness",1),this.setUniformFloat("metallic",0),this.setUniformFloat("ao",1),this.setUniformFloat("roughness_min",0),this.setUniformFloat("roughness_max",1),this.setUniformFloat("metallic_min",0),this.setUniformFloat("metallic_max",1),this.setUniformFloat("emissiveIntensity",0),this.setUniformFloat("alphaCutoff",0),this.setUniformFloat("ior",1.5),this.setUniformFloat("clearcoatFactor",0),this.setUniformFloat("clearcoatRoughnessFactor",0),this.setUniformColor("clearcoatColor",new F(1,1,1)),this.setUniformFloat("clearcoatWeight",0),this.setUniformColor("skinColor",new F(1,0,0)),this.setUniformFloat("skinPower",3.4),this.setUniformFloat("skinColorIns",.5),this.setUniformFloat("curveFactor",1)}set _MainTex(n){this.setTexture("baseMap",n)}set _BumpMap(n){this.setTexture("normalMap",n)}set _SSSMap(n){this.setTexture("sssMap",n)}set _MaskTex(n){this.setTexture("maskMap",n)}set _UVTransform(n){this.setUniformVector4("transformUV1",n)}set _Metallic(n){this.setUniformFloat("metallic",n)}set _Roughness(n){this.setUniformFloat("roughness",n)}set _MainColor(n){this.setUniformColor("baseColor",n)}set _AlphaCutoff(n){this.setUniformFloat("alphaCutoff",n)}set _DoubleSidedEnable(n){let t=this.getDefaultColorShader();t.shaderState.cullMode=n?Ze.none:t.shaderState.cullMode}set _SkinColor(n){this.setUniformColor("skinColor",n)}set _SkinPower(n){this.setUniformFloat("skinPower",n)}set _SkinColorIns(n){this.setUniformFloat("skinColorIns",n)}set curveFactor(n){this.setUniformFloat("curveFactor",n)}set _SurfaceType(n){let t=this.getDefaultColorShader();n==0?t.blendMode=j.NONE:t.blendMode=j.ALPHA}set _AlphaCutoffEnable(n){n==0?this.setDefine("USE_ALPHACUT",!1):this.setDefine("USE_ALPHACUT",!0)}};ws=hd([or],ws);var ud=Object.defineProperty,cd=Object.getOwnPropertyDescriptor,dd=(n,t,e,r)=>{for(var i=r>1?void 0:r?cd(t,e):t,a=n.length-1,o;a>=0;a--)(o=n[a])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&ud(t,e,i),i};let bs=class extends lt{constructor(){super();let n=new Be("PBRLItShader","PBRLItShader");n.setShaderEntry("VertMain","FragMain"),this.addRenderPass(n);let t=n.shaderState;t.acceptShadow=!0,t.castShadow=!0,t.receiveEnv=!0,t.acceptGI=!0,t.useLight=!0,this.setDefine("USE_BRDF",!0),this.setDefine("USE_AO_R",!0),this.setDefine("USE_ROUGHNESS_G",!0),this.setDefine("USE_METALLIC_B",!0),this.setDefine("USE_ALPHA_A",!0),this.setDefault()}setDefault(){this.setUniformFloat("shadowBias",35e-5),this.setUniformVector4("transformUV1",new K(0,0,1,1)),this.setUniformVector4("transformUV2",new K(0,0,1,1)),this.setUniformColor("baseColor",new F),this.setUniformColor("emissiveColor",new F(0,0,0)),this.setUniformVector4("materialF0",new K(.04,.04,.04,1)),this.setUniformColor("specularColor",new F(.04,.04,.04)),this.setUniformFloat("envIntensity",1),this.setUniformFloat("normalScale",1),this.setUniformFloat("roughness",1),this.setUniformFloat("metallic",0),this.setUniformFloat("ao",1),this.setUniformFloat("roughness_min",0),this.setUniformFloat("roughness_max",1),this.setUniformFloat("metallic_min",0),this.setUniformFloat("metallic_max",1),this.setUniformFloat("emissiveIntensity",0),this.setUniformFloat("alphaCutoff",0),this.setUniformFloat("ior",1.5),this.setUniformFloat("clearcoatFactor",0),this.setUniformFloat("clearcoatRoughnessFactor",0),this.setUniformColor("clearcoatColor",new F(1,1,1)),this.setUniformFloat("clearcoatWeight",0),this._MainTex=y.res.grayTexture,this._BumpMap=y.res.normalTexture,this._MaskTex=y.res.maskTexture}set _MainTex(n){this.setTexture("baseMap",n)}set _BumpMap(n){this.setTexture("normalMap",n)}set _MaskTex(n){this.setTexture("maskMap",n)}set _UVTransform(n){this.setUniformVector4("transformUV1",n)}set _Metallic(n){this.setUniformFloat("metallic",n)}set _Roughness(n){this.setUniformFloat("roughness",n)}set _MainColor(n){this.setUniformColor("baseColor",n)}set _AlphaCutoff(n){this.setUniformFloat("alphaCutoff",n)}set _DoubleSidedEnable(n){let t=this.getDefaultColorShader();t.shaderState.cullMode=n?Ze.none:t.shaderState.cullMode}set _SurfaceType(n){let t=this.getDefaultColorShader();n==0?t.blendMode=j.NONE:t.blendMode=j.ALPHA}set _AlphaCutoffEnable(n){n==0?this.setDefine("USE_ALPHACUT",!1):this.setDefine("USE_ALPHACUT",!0)}};bs=dd([or],bs);class Ya{constructor(){s(this,"comName");s(this,"data")}static parser(t){let e=t.readBytesArray(),r=new Ya;r.comName=e.readUTF(),r.data=[];let i=e.readInt32();for(let a=0;a<i;a++){let o=new ao;o.formBytes(e),r.data.push(o)}return r}}class ki{constructor(){s(this,"name");s(this,"parentName");s(this,"position");s(this,"rotation");s(this,"scale");s(this,"comDatas");s(this,"child")}static parser(t){let e=t.readBytesArray(),r=new ki;r.name=e.readUTF(),r.parentName=e.readUTF(),r.position=e.readVector3(),r.rotation=e.readQuaternion(),r.scale=e.readVector3(),r.comDatas=[],r.child=[];let i=e.readInt32();for(let o=0;o<i;o++){const l=Ya.parser(e);r.comDatas.push(l)}let a=e.readInt32();for(let o=0;o<a;o++){const l=ki.parser(e);r.child.push(l)}return r}}class Ea extends ze{constructor(){super(...arguments);s(this,"avatarDic");s(this,"nodeData")}async parseBuffer(e){this.avatarDic={};let r=new Ha(e,0);await no.parserTexture(r,this,this.loaderFunctions),io.parser(r,this),oo.parserMeshs(r,this),so.parserMaterial(r,this),this.nodeData=this.parserPrefabNode(r),this.data=this.data=this.parserNodeTree(this.nodeData)}parserPrefabNode(e){return ki.parser(e)}parserNodeTree(e){let r=new ee;if(r.localPosition=g.serialize(e.position),r.localQuaternion=X.serialize(e.rotation),r.localScale=g.serialize(e.scale),r.name=e.name,e.comDatas)for(let i=0;i<e.comDatas.length;i++){const a=e.comDatas[i];let o=null,l=po(a.comName);if(l){o=r.getOrAddComponent(l);for(let h=0;h<a.data.length;h++){const u=a.data[h];u.key in o&&(o[u.key]=u.getValue())}}}if(e.child&&e.child.length>0)for(let i=0;i<e.child.length;i++){let a=this.parserNodeTree(e.child[i]);r.addChild(a)}return r}verification(){if(this.data)return!0;throw new Error("verify failed.")}}s(Ea,"useWebp",!0),s(Ea,"format",Te.BIN);var fd=Object.defineProperty,gd=Object.getOwnPropertyDescriptor,pd=(n,t,e,r)=>{for(var i=r>1?void 0:r?gd(t,e):t,a=n.length-1,o;a>=0;a--)(o=n[a])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&fd(t,e,i),i};let Es=class extends lt{constructor(){super(),this.create_opPass(),this.setDefine("USEC",!0),this.setDefine("USE_BRDF",!0),this.setDefine("USE_AO_R",!0),this.setDefine("USE_ROUGHNESS_G",!0),this.setDefine("USE_METALLIC_B",!0),this.setDefine("USE_ALPHA_A",!0),this.setDefine("USE_HAIR",!0),this.setDefine("USE_CUSTOMUNIFORM",!0),this.setDefine("USE_HAIRCOLOR",!0),this.setDefault(),this.debug()}create_opPass(){L.register("HairShader_op",Bu);let n=new Be("HairShader_op","HairShader_op");this.addRenderPass(n),n.setShaderEntry("VertMain","FragMain");let t=n.shaderState;t.acceptShadow=!0,t.castShadow=!0,t.receiveEnv=!0,t.acceptGI=!0,t.useLight=!0,t.blendMode=j.NONE,t.cullMode=Ze.none,t.writeMasks[0]=GPUColorWrite.ALL}create_trPass(){L.register("HairShader_tr",Du);let n=new Be("HairShader_tr","HairShader_tr");this.addRenderPass(n),n.setShaderEntry("VertMain","FragMain");let t=n.shaderState;t.acceptShadow=!0,t.castShadow=!0,t.receiveEnv=!0,t.acceptGI=!0,t.useLight=!0,t.depthWriteEnabled=!1,t.blendMode=j.NORMAL,t.cullMode=Ze.none,t.writeMasks[0]=GPUColorWrite.ALL,t.writeMasks[1]=0,t.writeMasks[2]=0,t.writeMasks[3]=0}debug(){}setDefault(){this.setUniformFloat("shadowBias",35e-5),this.setUniformVector4("transformUV1",new K(0,0,1,1)),this.setUniformVector4("transformUV2",new K(0,0,1,1)),this.setUniformColor("baseColor0",new F(3/255,2/255,2/255)),this.setUniformColor("baseColor1",new F(2/255,2/255,2/255)),this.setUniformColor("emissiveColor",new F(1,1,1)),this.setUniformVector4("materialF0",new K(.04,.04,.04,1)),this.setUniformColor("specularColor",new F(36/255,36/255,36/255)),this.setUniformFloat("envIntensity",1),this.setUniformFloat("normalScale",1),this.setUniformFloat("roughness",.1),this.setUniformFloat("metallic",.3),this.setUniformFloat("ao",1),this.setUniformFloat("roughness_min",0),this.setUniformFloat("roughness_max",1),this.setUniformFloat("metallic_min",0),this.setUniformFloat("metallic_max",1),this.setUniformFloat("emissiveIntensity",0),this.setUniformFloat("alphaCutoff",.1),this.setUniformFloat("ior",1.5),this.setUniformFloat("backlit",.3987),this.setUniformFloat("area",.0615)}set _MainTex(n){this.setTexture("baseMap",n)}set _IDMap(n){this.setTexture("idMap",n)}set _DepthMap(n){this.setTexture("depthMap",n)}set _RootMap(n){this.setTexture("rootMap",n)}set _AlphaMap(n){this.setTexture("alphaMap",n)}set _UVTransform(n){this.setUniformVector4("transformUV1",n)}set _Metallic(n){this.setUniformFloat("metallic",n)}set _Roughness(n){this.setUniformFloat("roughness",n)}set _HairColor0(n){this.setUniformColor("baseColor0",n)}set _HairColor1(n){this.setUniformColor("baseColor1",n)}set _SpecularColor(n){this.setUniformColor("specularColor",n)}set _AlphaCutoff(n){this.setUniformFloat("alphaCutoff",n)}set _BackLit(n){this.setUniformFloat("backlit",n)}set _Area(n){this.setUniformFloat("area",n)}set _DoubleSidedEnable(n){let t=this.getSubShaders(Y.COLOR)[0];t.shaderState.cullMode=n?Ze.none:t.shaderState.cullMode}set _SurfaceType(n){}set _AlphaCutoffEnable(n){n==0?this.setDefine("USE_ALPHACUT",!1):this.setDefine("USE_ALPHACUT",!0)}};Es=pd([or],Es);var Ad=Object.defineProperty,md=Object.getOwnPropertyDescriptor,vd=(n,t,e,r)=>{for(var i=r>1?void 0:r?md(t,e):t,a=n.length-1,o;a>=0;a--)(o=n[a])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&Ad(t,e,i),i};let Ta=class extends lt{constructor(){super();let n=new Be("UnLit","UnLit");n.setShaderEntry("VertMain","FragMain"),this.addRenderPass(n);let t=n.shaderState;t.acceptShadow=!1,t.castShadow=!1,t.receiveEnv=!1,t.acceptGI=!1,t.useLight=!1,this.setDefine("USE_BRDF",!0),this.setDefine("USE_AO_R",!0),this.setDefine("USE_ROUGHNESS_G",!0),this.setDefine("USE_METALLIC_B",!0),this.setDefine("USE_ALPHA_A",!0),this.setDefault()}setDefault(){this.setUniformVector4("transformUV1",new K(0,0,1,1)),this.setUniformVector4("transformUV2",new K(0,0,1,1)),this.setUniformColor("baseColor",new F),this.setUniformFloat("alphaCutoff",0)}set _MainTex(n){this.setTexture("baseMap",n)}set _BumpMap(n){this.setTexture("normalMap",n)}set _MaskTex(n){this.setTexture("maskMap",n)}set _UVTransform(n){this.setUniformVector4("transformUV1",n)}set _Metallic(n){this.setUniformFloat("metallic",n)}set _Roughness(n){this.setUniformFloat("roughness",n)}set _MainColor(n){this.setUniformColor("baseColor",n)}set _AlphaCutoff(n){this.setUniformFloat("alphaCutoff",n)}set _DoubleSidedEnable(n){let t=this.getDefaultColorShader();t.shaderState.cullMode=n?Ze.none:t.shaderState.cullMode}set _SurfaceType(n){let t=this.getDefaultColorShader();n==0?t.blendMode=j.NONE:t.blendMode=j.ALPHA}set _AlphaCutoffEnable(n){n==0?this.setDefine("USE_ALPHACUT",!1):this.setDefine("USE_ALPHACUT",!0)}};Ta=vd([or],Ta);var xd=Object.defineProperty,Cd=Object.getOwnPropertyDescriptor,yd=(n,t,e,r)=>{for(var i=r>1?void 0:r?Cd(t,e):t,a=n.length-1,o;a>=0;a--)(o=n[a])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&xd(t,e,i),i};let ia=class extends Ke{constructor(){super(...arguments);s(this,"size");s(this,"blockSize");s(this,"walk");s(this,"obs");s(this,"colors");s(this,"aPaths")}onGraphic(t){}};ia=yd([xt(ia,"APatch")],ia);class Ts extends qt{constructor(){super(),this.shader=new Ta,this.baseMap=y.res.whiteTexture}set baseMap(t){this.shader.setTexture("baseMap",t)}get baseMap(){return this.shader.getTexture("baseMap")}set baseColor(t){this.shader.setUniformColor("baseColor",t)}get baseColor(){return this.shader.getUniformColor("baseColor")}set envMap(t){}set shadowMap(t){}}class _d{constructor(){s(this,"clipName");s(this,"loopTime");s(this,"startTime");s(this,"stopTime");s(this,"sampleRate");s(this,"useSkeletonPos");s(this,"useSkeletonScale");s(this,"positionCurves",new Map);s(this,"rotationCurves",new Map);s(this,"scaleCurves",new Map);s(this,"floatCurves",new Map)}formBytes(t){if(this.clipName=t.readUTF(),this.loopTime=!t.readInt32(),this.startTime=t.readFloat32(),this.stopTime=t.readFloat32(),this.sampleRate=t.readInt32(),this.useSkeletonPos=t.readInt32()>0,this.useSkeletonScale=t.readInt32()>0,this.useSkeletonPos){let i=t.readInt32();for(let a=0;a<i;a++){let o=new Ai;o.formBytes(t),this.positionCurves.set(o.path,o)}}let e=t.readInt32();for(let i=0;i<e;i++){let a=new Ai;a.formBytes(t),this.rotationCurves.set(a.path,a)}if(this.useSkeletonScale){let i=t.readInt32();for(let a=0;a<i;a++){let o=new Ai;o.formBytes(t),this.scaleCurves.set(o.path,o)}}let r=t.readInt32();for(let i=0;i<r;i++){let a=new Ai;a.formBytes(t),this.floatCurves.set(a.attribute,a)}}}class Ai{constructor(t=1){s(this,"path");s(this,"attribute");s(this,"propertys");s(this,"preInfinity");s(this,"postInfinity");s(this,"rotationOrder");s(this,"m_curves");s(this,"k",0);s(this,"_cacheValue");s(this,"_kValue");this.k=t,this.m_curves=[],this.check()}check(){var t;for(let e=0;e<this.k;e++)(t=this.m_curves)[e]||(t[e]=new zu);switch(this.k){case 1:this._cacheValue=0;break;case 2:this._cacheValue=new Ae;break;case 3:this._cacheValue=new g;break;case 4:this._cacheValue=new K;break}}get totalTime(){return this.m_curves[0].totalTime}addKeyFrame(t){for(let e=0;e<this.k;e++)this.m_curves[e].addKeyFrame(t.getK(e))}removeKeyFrame(t){for(let e=0;e<this.k;e++)this.m_curves[e].removeKeyFrame(t.getK(e))}getValue(t){switch(this.k){case 1:this._cacheValue=this.m_curves[0].getValue(t);break;case 2:this._cacheValue.x=this.m_curves[0].getValue(t),this._cacheValue.y=this.m_curves[1].getValue(t);break;case 3:this._cacheValue.x=this.m_curves[0].getValue(t),this._cacheValue.y=this.m_curves[1].getValue(t),this._cacheValue.z=this.m_curves[2].getValue(t);break;case 4:this._cacheValue.x=this.m_curves[0].getValue(t),this._cacheValue.y=this.m_curves[1].getValue(t),this._cacheValue.z=this.m_curves[2].getValue(t),this._cacheValue.w=this.m_curves[3].getValue(t);break}return this._cacheValue}getKeyCount(){return this.m_curves[0].getKeyCount()}getKey(t){let e=[];for(let r=0;r<this.k;r++)e.push(this.m_curves[r].getKey(t));return e}formBytes(t){this.path=t.readUTF(),this.k=t.readInt32(),this.check(),this.attribute=t.readUTF(),this.propertys=this.attribute.split("."),this.preInfinity=t.readInt32(),this.postInfinity=t.readInt32(),this.rotationOrder=t.readInt32();let e=t.readInt32();for(let r=0;r<e;r++){let i=new Ed(0);i.formBytes(t),this.addKeyFrame(i)}}}var Id=(n=>(n[n.Open=0]="Open",n[n.Closed=1]="Closed",n))(Id||{}),Sd=(n=>(n[n.kParticleSystemClampVelocityCurveId=322376503]="kParticleSystemClampVelocityCurveId",n[n.kParticleSystemForceCurveId=306581307]="kParticleSystemForceCurveId",n[n.kParticleSystemRotationCurveId=1793934638]="kParticleSystemRotationCurveId",n[n.kParticleSystemRotationBySpeedCurveId=3737431713]="kParticleSystemRotationBySpeedCurveId",n[n.kParticleSystemStartSpeedCurveId=2527743459]="kParticleSystemStartSpeedCurveId",n[n.kParticleSystemSizeCurveId=2368504881]="kParticleSystemSizeCurveId",n[n.kParticleSystemSizeBySpeedCurveId=4085612399]="kParticleSystemSizeBySpeedCurveId",n[n.kParticleSystemVelocityCurveId=3774601268]="kParticleSystemVelocityCurveId",n[n.kParticleSystemUVCurveId=326370691]="kParticleSystemUVCurveId",n[n.kParticleSystemColorGradientId=1494990940]="kParticleSystemColorGradientId",n[n.kParticleSystemColorByVelocityGradientId=1089181156]="kParticleSystemColorByVelocityGradientId",n[n.kParticleSystemMeshSelectionId=3159510623]="kParticleSystemMeshSelectionId",n[n.kParticleSystemUVRowSelectionId=2941263940]="kParticleSystemUVRowSelectionId",n))(Sd||{}),wd=(n=>(n[n.kEMScalar=0]="kEMScalar",n[n.kEMOptimized=1]="kEMOptimized",n[n.kEMOptimizedMinMax=2]="kEMOptimizedMinMax",n[n.kEMSlow=3]="kEMSlow",n))(wd||{}),bd=(n=>(n[n.kMMCScalar=0]="kMMCScalar",n[n.kMMCCurve=1]="kMMCCurve",n[n.kMMCTwoCurves=2]="kMMCTwoCurves",n[n.kMMCTwoConstants=3]="kMMCTwoConstants",n))(bd||{});class er{}s(er,"BACK",0),s(er,"FRONT",1),s(er,"IN",0),s(er,"OUT",1),s(er,"INTERSECT",2);const Vi=class Vi extends Ae{constructor(e=0,r=0){super(e,r);s(this,"u",0);s(this,"v",0);this.u=e,this.v=r}length(){return 0}static getUVSheet(e,r,i){let a=Math.floor(e%(r*i)),o=Math.floor(a/r),l=a%r;return new K(o/r,l/i,1/r,1/i)}};s(Vi,"uv_0",new Vi);let Bs=Vi;class Ed{constructor(t=0){s(this,"serializedVersion","2");s(this,"time");s(this,"tangentMode",0);s(this,"weightedMode",0);s(this,"propertyKeyFrame");this.time=t,this.propertyKeyFrame={}}getK(t){return this.propertyKeyFrame[t]}split(t,e,r){switch(t){case P.single:{let i=this.getKeyFrame(0);i[r]=e}break;case P.float:{let i=this.getKeyFrame(0);i[r]=e}break;case P.vector2:{let i=e,a=this.getKeyFrame(0);a[r]=i.x;let o=this.getKeyFrame(1);o[r]=i.y}break;case P.vector3:{let i=e,a=this.getKeyFrame(0);a[r]=i.x;let o=this.getKeyFrame(1);o[r]=i.y;let l=this.getKeyFrame(2);l[r]=i.z}break;case P.vector4:{let i=e,a=this.getKeyFrame(0);a[r]=i.x;let o=this.getKeyFrame(1);o[r]=i.y;let l=this.getKeyFrame(2);l[r]=i.y;let h=this.getKeyFrame(3);h[r]=i.y}break;case P.quaternion:{let i=e,a=this.getKeyFrame(0);a[r]=i.x;let o=this.getKeyFrame(1);o[r]=i.y;let l=this.getKeyFrame(2);l[r]=i.z;let h=this.getKeyFrame(3);h[r]=i.w}break}}getKeyFrame(t){let e=this.propertyKeyFrame[t];return e||(e=new Ia,e.time=this.time,e.tangentMode=this.tangentMode,e.weightedMode=this.weightedMode,this.propertyKeyFrame[t]=e),e}formBytes(t){this.time=t.readFloat32();{let{t:e,v:r}=Ht.parser(t);this.split(e,r,"value")}{let{t:e,v:r}=Ht.parser(t);this.split(e,r,"inSlope")}{let{t:e,v:r}=Ht.parser(t);this.split(e,r,"outSlope")}this.tangentMode=t.readInt32(),this.weightedMode=t.readInt32();{let{t:e,v:r}=Ht.parser(t);this.split(e,r,"inWeight")}{let{t:e,v:r}=Ht.parser(t);this.split(e,r,"outWeight")}}}class _i{}s(_i,"WalkAble",1);const Er=class Er{static SetConst(t){this.EPSILON=t,this.POWER_EPSILON=t*t}};s(Er,"EPSILON",.1),s(Er,"POWER_EPSILON",Er.EPSILON*Er.EPSILON);let Rr=Er;const kt=class kt extends g{constructor(e,r,i,a){super(r,i,a,0);s(this,"_pointId",0);this._pointId=e}get id(){return this._pointId}static equalPoint(e,r){return(e.x-r.x)*(e.x-r.x)+(e.y-r.y)*(e.y-r.y)+(e.z-r.z)*(e.z-r.z)<Rr.POWER_EPSILON}static calcDistance(e,r){return kt.CALC_VECTOR3D3.setTo(e.x-r.x,e.y-r.y,e.z-r.z),kt.CALC_VECTOR3D3.length}};s(kt,"CALC_VECTOR3D1",new g),s(kt,"CALC_VECTOR3D2",new g),s(kt,"CALC_VECTOR3D3",new g),s(kt,"CALC_VECTOR3D4",new g),s(kt,"CALC_VECTOR3D5",new g);let At=kt;class bt extends At{constructor(e,r){super(e.id,0,0,0);s(this,"_ownerPoint");s(this,"_ownerEdge");s(this,"radius",0);this._ownerEdge=r,this._ownerPoint=e}get ownerPoint(){return this._ownerPoint}get ownerEdge(){return this._ownerEdge}scalePoint(e=.7){var r=new bt(this._ownerPoint,this._ownerEdge);return r.copyFrom(this),r.decrementBy(this._ownerPoint),r.scaleBy(e),r.radius=r.length,r.incrementBy(this._ownerPoint),r}}const gt=class gt{constructor(t,e){s(this,"_edgeMask",0);s(this,"_edgeSize",0);s(this,"_pointA");s(this,"_pointB");s(this,"_triangleOwners");s(this,"_centerPoint");s(this,"_edgeDirA2B");s(this,"crossPoint");s(this,"fatPointA");s(this,"fatPointB");if(this._pointA=t,this._pointB=e,t.id>=e.id)throw new Error("edge point order error!!!");this._triangleOwners=new Array,this._centerPoint=new g,this._edgeMask=_i.WalkAble,At.CALC_VECTOR3D1.setTo(t.x-e.x,t.y-e.y,t.z-e.z),this._edgeSize=At.CALC_VECTOR3D1.length,this._centerPoint.setTo((t.x+e.x)/2,(t.y+e.y)/2,(t.z+e.z)/2)}get size(){return this._edgeSize}get triangleOwners(){return this._triangleOwners}get centerPoint(){return this._centerPoint}initFatPoints(t){this._edgeDirA2B=this._pointB.subtract(this._pointA),this._edgeDirA2B.normalize(),this.fatPointA=this.fatPointA||new bt(this._pointA,this),this.fatPointB=this.fatPointB||new bt(this._pointB,this),this.fatPointA.radius!=t&&(gt.CALC_FAT_VECTOR.copyFrom(this._edgeDirA2B),gt.CALC_FAT_VECTOR.scaleBy(t),gt.CALC_FAT_VECTOR.incrementBy(this._pointA),this.fatPointA.copyFrom(gt.CALC_FAT_VECTOR),this.fatPointA.radius=t),this.fatPointB.radius!=t&&(gt.CALC_FAT_VECTOR.copyFrom(this._edgeDirA2B),gt.CALC_FAT_VECTOR.scaleBy(-t),gt.CALC_FAT_VECTOR.incrementBy(this._pointB),this.fatPointB.copyFrom(gt.CALC_FAT_VECTOR),this.fatPointB.radius=t)}getFatPoint(t){return t==this._pointA?this.fatPointA:this.fatPointB}getAnotherFatPoint(t){return t==this._pointA?this.fatPointB:this.fatPointA}getAnotherPoint(t){return t==this._pointA?this._pointB:this._pointA}containsPoint(t){return At.equalPoint(t,this._pointA)?this._pointA:At.equalPoint(t,this._pointB)?this._pointB:null}addTriangleOwners(t){if(t.edges.indexOf(this)==-1)throw new Error("the edge is not belong triangle!!!");this._triangleOwners.indexOf(t)==-1&&this._triangleOwners.push(t)}getPublicPoint(t){return this._pointA==t._pointA||this._pointA==t._pointB?this._pointA:this._pointB==t._pointA||this._pointB==t._pointB?this._pointB:null}getEqualPoint(t){return At.equalPoint(t,this._pointA)?this._pointA:At.equalPoint(t,this._pointB)?this._pointB:null}get pointA(){return this._pointA}get pointB(){return this._pointB}get walkAble(){return(this._edgeMask&_i.WalkAble)==_i.WalkAble}testMask(t){return(this._edgeMask&t)==t}};s(gt,"CALC_FAT_VECTOR",new g);let Ds=gt;const G=class G{constructor(){s(this,"endPoint");s(this,"curPoint");s(this,"rayA");s(this,"rayB");s(this,"rayAPoint");s(this,"rayBPoint");s(this,"cornerPoint");s(this,"cornerEdge")}continuePass(t,e,r){this.resetData(),this.curPoint=t,this.endPoint=e,this.cornerEdge=r}passEdge(t,e,r,i){if((this.rayA==null||this.rayB==null)&&(this.rayA=G.RAY_1,this.rayB=G.RAY_2,this.rayAPoint=t.pointA,this.rayBPoint=t.pointB,this.rayA.setTo(this.rayAPoint.x-this.curPoint.x,0,this.rayAPoint.z-this.curPoint.z),this.rayB.setTo(this.rayBPoint.x-this.curPoint.x,0,this.rayBPoint.z-this.curPoint.z)),i)return this.checkEndPoint(r);if(G.TEST_RAY.setTo(r.x-this.curPoint.x,0,r.z-this.curPoint.z),this.isPointAtCenter(G.TEST_RAY,this.rayA,this.rayB)){this.hasCrossPoint(e.pointA,e.pointB,this.rayAPoint,this.rayA)?(this.rayB.copyFrom(G.TEST_RAY),r instanceof At?this.rayBPoint=r:this.rayBPoint=null):(this.rayA.copyFrom(G.TEST_RAY),r instanceof At?this.rayAPoint=r:this.rayAPoint=null);var a=e.getAnotherPoint(r);G.TEST_RAY.setTo(a.x-this.curPoint.x,0,a.z-this.curPoint.z),(a==this.rayAPoint||a==this.rayBPoint||this.isPointAtCenter(G.TEST_RAY,this.rayA,this.rayB))&&(this.cornerEdge=e)}else{var o;if(G.TEST_RAY_1.copyFrom(e.pointA),G.TEST_RAY_1.decrementBy(this.curPoint),G.TEST_RAY_2.copyFrom(e.pointB),G.TEST_RAY_2.decrementBy(this.curPoint),G.TEST_RAY_1.y=0,G.TEST_RAY_2.y=0,this.isPointAtCenter(this.rayA,G.TEST_RAY_1,G.TEST_RAY_2)||this.isPointAtCenter(this.rayB,G.TEST_RAY_1,G.TEST_RAY_2)?o=!1:o=!0,o)return this.isPointAtCenter(this.rayA,G.TEST_RAY,this.rayB)?this.cornerPoint=this.rayAPoint:this.cornerPoint=this.rayBPoint,this.cornerEdge.crossPoint=this.cornerPoint,!1}return!0}checkEndPoint(t){return G.TEST_RAY.setTo(t.x-this.curPoint.x,0,t.z-this.curPoint.z),this.isPointAtCenter(G.TEST_RAY,this.rayA,this.rayB)?!0:(this.isPointAtCenter(this.rayA,G.TEST_RAY,this.rayB)?this.cornerPoint=this.rayAPoint:this.cornerPoint=this.rayBPoint,this.cornerEdge.crossPoint=this.cornerPoint,!1)}calcCrossEdge(t,e,r){return this.calcCrossPoint(t.fatPointA,t.fatPointB,e,r)}calcCrossPoint(t,e,r,i){G.CALC_CROSS_POINT.copyFrom(e),G.CALC_CROSS_POINT.decrementBy(t);let a=G.CALC_CROSS_POINT.x*i.z-i.x*G.CALC_CROSS_POINT.z;var o=0;return a!=0&&(o=((t.z-r.z)*i.x-(t.x-r.x)*i.z)/a),o>1?o=1:o<0&&(o=0),G.CALC_CROSS_POINT.scaleBy(o),G.CALC_CROSS_POINT.incrementBy(t),G.CALC_CROSS_POINT.clone()}calcCrossPointOut(t,e,r,i){G.CALC_CROSS_POINT.copyFrom(e),G.CALC_CROSS_POINT.decrementBy(t);var a=((t.z-r.z)*i.x-(t.x-r.x)*i.z)/(G.CALC_CROSS_POINT.x*i.z-i.x*G.CALC_CROSS_POINT.z);return a<=1&&a>=0?null:(G.CALC_CROSS_POINT.scaleBy(a),G.CALC_CROSS_POINT.incrementBy(t),G.CALC_CROSS_POINT.clone())}hasCrossPoint(t,e,r,i){G.CALC_CROSS_TEST.copyFrom(e),G.CALC_CROSS_TEST.decrementBy(t);var a=((t.z-r.z)*i.x-(t.x-r.x)*i.z)/(G.CALC_CROSS_TEST.x*i.z-i.x*G.CALC_CROSS_TEST.z);return a<=1&&a>=0}isPointAtCenter(t,e,r){var i=e.crossProduct(t);if(i.length==0&&t.length<e.length)return!0;var a=r.crossProduct(t);return a.length==0&&t.length<r.length?!0:(i.normalize(),a.normalize(),i.incrementBy(a),i.length<.01)}resetData(){this.cornerEdge=null,this.cornerPoint=null,this.curPoint=null,this.rayA=this.rayB=null,this.rayAPoint=this.rayBPoint=null,G.RAY_1.setTo(0,0,0),G.RAY_2.setTo(0,0,0)}};s(G,"RAY_1",new g),s(G,"RAY_2",new g),s(G,"TEST_RAY",new g),s(G,"TEST_RAY_1",new g),s(G,"TEST_RAY_2",new g),s(G,"CALC_CROSS_POINT",new g),s(G,"CALC_CROSS_TEST",new g);let Ba=G;const Qt=class Qt{constructor(){s(this,"_aiRadius",0);s(this,"_router");s(this,"_result");s(this,"_tempPublicEdgeList",new Array);s(this,"_tempSamePlaneList",new Array);this._router=new Ba}searchPath(t,e,r,i=0){return i<=0&&(i=1),this._aiRadius=i*1.5,this.searchEnable(t,e,r)?(this.search(t,e,r),!0):!1}get path(){return this._result}searchEnable(t,e,r){return!(t==null||e==null||r==null||r[0].plane.classifyPoint(t,Rr.EPSILON)!=er.INTERSECT||r[r.length-1].plane.classifyPoint(e,Rr.EPSILON)!=er.INTERSECT)}search(t,e,r){this._tempPublicEdgeList.length=0,this._tempSamePlaneList.length=0;var i=0,a=r.length-1,o,l,h,u;for(i=0;i<a;i++)l=r[i].getPublicEdge(r[i+1]),l.crossPoint=null,l.initFatPoints(this._aiRadius),this._tempPublicEdgeList.push(l),o=r[i],u=o.plane,o=r[i+1],h=o.getEdgeAgainstPoint(l),this._tempSamePlaneList.push(u.classifyPoint(h,Rr.EPSILON)==er.INTERSECT);this._router.continuePass(t,e,this._tempPublicEdgeList[0]),a=this._tempPublicEdgeList.length;var c,d,f,p;for(i=0;i<a;i++)l=this._tempPublicEdgeList[i],o=r[i+1],p=i==a-1,p?h=e:h=o.getEdgeAgainstPoint(l),f=this._router.passEdge(l,this._tempPublicEdgeList[i+1],h,p),f||(c=this._router.cornerPoint,d=this._router.cornerEdge,i=this._tempPublicEdgeList.indexOf(d),this._router.continuePass(c,e,this._tempPublicEdgeList[i+1]));this.pushAllPathPoint2(t,e),this._result.length>=3&&(this.optimusTerminusFat(),this.optimusByRadius());let A=[];for(let x of this._result)A.push(new g().copyFrom(x));this._result=A}optimusTerminusFat(){var t,e,r;r=this._result[1],r instanceof bt&&(t=r),r=this._result[this._result.length-2],r instanceof bt&&(e=r),t&&(this._result[1]=t.scalePoint()),e&&t!=e&&(this._result[this._result.length-2]=e.scalePoint())}pushAllPathPoint2(t,e){var r=this._tempPublicEdgeList.length,i,a;this._result=new Array,this._result.push(t);for(var o=t,l,h,u,c=0;c<r;c++)if(i=this._tempPublicEdgeList[c],h=null,i.crossPoint)h=this.getFatPoint(i,i.crossPoint),h?this._result.push(h):this._result.push(i.crossPoint),o=i.crossPoint;else{a=null,l=null;for(var d=c+1;d<r&&(a=this._tempPublicEdgeList[d],l=a.crossPoint,!l);d++);l==null&&(l=e),h=this.getFatPoint(i,l),h?this._result.push(h):(l==o?u=l.clone():(Qt.CROSS_TEST_DIRECTION.setTo(l.x-o.x,0,l.z-o.z),u=this._router.calcCrossEdge(i,o,Qt.CROSS_TEST_DIRECTION)),this._result.push(u))}this._result.push(e)}optimusByRadius(){var t=new Array;t.length=this._result.length;var e=this._result.length-2,r,i,a,o,l,h,u,c,d,f,p,A,x;for(x=0;x<e;x++)u=c=d=null,o=l=h=null,p=!1,A=null,r=this._result[x],i=this._result[x+1],a=this._result[x+2],r instanceof bt&&(o=r),i instanceof bt&&(l=i),a instanceof bt&&(h=a),o&&(u=o.ownerPoint),l&&(c=l.ownerPoint),h&&(d=h.ownerPoint),u&&c&&u==c&&c!=d&&(p=!0),d&&c&&d==c&&u!=c&&(p=!0),p&&(Qt.CROSS_TEST_DIRECTION.copyFrom(r),Qt.CROSS_TEST_DIRECTION.decrementBy(a),f=l.ownerEdge,p=this._router.hasCrossPoint(f.pointA,f.pointB,a,Qt.CROSS_TEST_DIRECTION),p&&(A=this._router.calcCrossPointOut(c,i,a,Qt.CROSS_TEST_DIRECTION)),A&&(t[x+1]=A))}getFatPoint(t,e){if(t==null)return null;var r;e instanceof bt&&(r=e);var i;return r?i=r.ownerPoint:i=t.getEqualPoint(e),i==null?null:(r=t.getFatPoint(i),r)}};s(Qt,"CROSS_TEST_DIRECTION",new g);let Rs=Qt;class Td extends vt{constructor(e=1,r=1,i=1){super();s(this,"width");s(this,"height");s(this,"depth");this.width=e,this.height=r,this.depth=i,this.initVertex()}initVertex(){let e=this.width/2,r=this.height/2,i=this.depth/2;this.bounds=new Qe(g.ZERO.clone(),new g(this.width,this.height,this.depth));let a=new Float32Array([-e,r,i,e,r,i,e,r,-i,-e,r,-i,-e,r,i,e,r,-i,e,-r,i,-e,-r,i,-e,-r,-i,e,-r,-i,e,-r,i,-e,-r,-i,-e,-r,i,-e,r,i,-e,r,-i,-e,-r,-i,-e,-r,i,-e,r,-i,e,r,i,e,-r,i,e,-r,-i,e,r,-i,e,r,i,e,-r,-i,e,r,i,-e,r,i,-e,-r,i,-e,-r,i,e,-r,i,e,r,i,e,-r,-i,-e,-r,-i,-e,r,-i,e,r,-i,e,-r,-i,-e,r,-i]),o=new Float32Array([0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1]),l=new Float32Array([1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0]),h=[0,2,1,3,5,4,6,8,7,9,11,10,12,14,13,15,17,16,18,20,19,21,23,22,24,26,25,27,29,28,30,32,31,33,35,34],u=new Uint16Array(h.reverse());this.setIndices(u),this.setAttribute(R.position,a),this.setAttribute(R.normal,o),this.setAttribute(R.uv,l),this.setAttribute(R.TEXCOORD_1,l),this.addSubGeometry({indexStart:0,indexCount:h.length,vertexStart:0,vertexCount:0,firstStart:0,index:0,topology:0})}}class Bd extends Ke{constructor(){super(...arguments);s(this,"container");s(this,"beginTime",performance.now());s(this,"prevTime",this.beginTime);s(this,"frames",0);s(this,"fpsPanel");s(this,"memPanel")}init(){const e=this.container=document.createElement("div");e.className="stats",e.setAttribute("style","display:flex;flex-direction:column;gap:1px;position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000"),this.fpsPanel=new Ms(e,"FPS","#0ff","#002"),"memory"in performance&&(this.memPanel=new Ms(e,"MB","#f08","#201")),this.beginTime=(performance||Date).now(),document.body.appendChild(this.container)}onDisable(){this.container.style.display="none"}onEnable(){this.container.style.display="flex"}stop(){var e;this.fpsPanel.destroy(),(e=this.memPanel)==null||e.destroy(),document.body.removeChild(this.container)}onUpdate(){var r;this.frames++;const e=this.beginTime=performance.now();e>=this.prevTime+1e3&&(this.fpsPanel.update(this.frames*1e3/(e-this.prevTime),100),(r=this.memPanel)==null||r.update(performance.memory.totalJSHeapSize/1048576,256),this.prevTime=e,this.frames=0)}}class Ms{constructor(t,e,r,i){s(this,"canvas");s(this,"worker");s(this,"width",80);s(this,"height",48);const a=this.canvas=document.createElement("canvas");a.width=this.width,a.height=this.height,t.appendChild(a);const o=a.transferControlToOffscreen(),l=new Blob([`(${Dd})()`],{type:"application/javascript"});this.worker=new Worker(URL.createObjectURL(l)),this.worker.postMessage({type:"init",offscreen:o,name:e,fg:r,bg:i},[o])}update(t,e){this.worker.postMessage({type:"update",value:t,maxValue:e})}destroy(){this.worker.terminate()}}function Dd(){let n,t,e,r,i,a,o,l=1/0,h=0;const u=1,c=3,d=2,f=3,p=15,A=74,x=30;onmessage=C=>{C.data.type=="update"?(l=Math.min(l,C.data.value),h=Math.max(h,C.data.value),t.fillStyle=r,t.globalAlpha=1,t.fillRect(0,0,a,p),t.fillStyle=i,t.fillText(Math.round(C.data.value)+" "+e+" ("+Math.round(l)+"-"+Math.round(h)+")",c,d),t.drawImage(n,f+u,p,A-u,x,f,p,A-u,x),t.fillRect(f+A-u,p,u,x),t.fillStyle=r,t.globalAlpha=.9,t.fillRect(f+A-u,p,u,Math.round((1-C.data.value/C.data.maxValue)*x))):C.data.type=="init"&&(n=C.data.offscreen,e=C.data.name,r=C.data.bg,i=C.data.fg,a=n.width,o=n.height,t=n.getContext("2d"),t.font="bold 9px Helvetica,Arial,sans-serif",t.textBaseline="top",t.fillStyle=r,t.fillRect(0,0,a,o),t.fillStyle=i,t.fillText(e,c,d),t.fillRect(f,p,A,x),t.fillStyle=r,t.globalAlpha=.9,t.fillRect(f,p,A,x))}}class Rd{constructor(){s(this,"view")}async run(){y.setting.shadow.enable=!1,await y.init(),this.view=new Sc,this.view.scene=new vc,this.view.scene.addComponent(Bd),this.view.camera=ye.createCamera3DObject(this.view.scene),this.view.camera.perspective(60,w.aspect,1,5e3),this.view.camera.object3D.addComponent(ju).setCamera(35,-20,300),y.startRenderView(this.view),this.createScene(this.view.scene)}async createScene(t){let e=new Td(1,1,1),r=new F(1,1,.8);{let i=1e4;for(let a=0;a<i;a++){let o=new ee,l=o.addComponent(se);l.material=new Ts,l.material.baseColor=r,l.geometry=e,o.x=Math.random()*200-100,o.y=Math.random()*200-100,o.z=Math.random()*200-100,o.rotationX=Math.random()*90,o.rotationY=Math.random()*90,o.rotationZ=Math.random()*90,t.addChild(o)}}{let i=1e4,a=new Ts;a.baseColor=r;let o=new eo(e,a,i);for(let l=0;l<i;l++){let h=new V,u=Math.random();Sn(u*Math.PI/2,new g(1,0,0),h),h.translate(new g(Math.random()*200-100,Math.random()*200-100,Math.random()*200-100)),o.setMatrixAt(l,h)}}}}new Rd().run();

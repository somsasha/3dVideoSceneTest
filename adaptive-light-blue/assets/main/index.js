System.register("chunks:///_virtual/Debug.ts",["./rollupPluginModLoBabelHelpers.js","cc","./PlateController.ts","./ThingsCreator.ts"],(function(e){"use strict";var t,i,n,o,r,l,a,s,c,u,h,p,f,g,w;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,l=e._decorator,a=e.Node,s=e.EditBox,c=e.input,u=e.Input,h=e.Vec3,p=e.KeyCode,f=e.Component},function(e){g=e.PlateController},function(e){w=e.ThingsCreator}],execute:function(){var b,v,d,C,y,m,D,A,P,k,E,z,S,B,x,_,I;r._RF.push({},"51353pprxZO25I3WU0aqaN+","Debug",void 0);var K=l.ccclass,L=l.property;e("Debug",(b=K("Debug"),v=L(a),d=L(w),C=L(a),y=L(a),m=L([s]),D=L(a),A=L(g),b((E=t((k=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return t=e.call.apply(e,[this].concat(r))||this,n(t,"content",E,o(t)),n(t,"creator",z,o(t)),n(t,"walls",S,o(t)),n(t,"wallsDebug",B,o(t)),n(t,"wallsEditBoxes",x,o(t)),n(t,"plate",_,o(t)),n(t,"plateController",I,o(t)),t.isActive=!1,t}i(t,e);var r=t.prototype;return r.onLoad=function(){window.isAutoMove=!0,c.on(u.EventType.KEY_DOWN,this.onKeyDown,this)},r.regenerate=function(){for(var e=this.content.children,t=0;t<e.length;t++){var i=e[t].name,n=e[t].getComponentInChildren(s);if(n){var o=+n.string;o||(o=0),this.creator.setThingCount(i,o)}}this.plateController.clearAll(),this.setActive(!1),this.creator.reset()},r.setShowWalls=function(e){"Left"===e.node.name?this.wallsDebug[0].active=e.isChecked:"Right"===e.node.name?this.wallsDebug[1].active=e.isChecked:"Front"===e.node.name?this.wallsDebug[2].active=e.isChecked:"Back"===e.node.name&&(this.wallsDebug[3].active=e.isChecked)},r.moveWalls=function(){for(var e=0;e<this.wallsEditBoxes.length;e++){var t=this.wallsEditBoxes[e],i=t.node.name,n=t.string.split(","),o=+(n[0]||0),r=+(n[1]||0),l=+(n[2]||0),a=new h(o,r,l);"Left"===i?this.walls[0].setPosition(a):"Right"===i?this.walls[1].setPosition(a):"Front"===i?this.walls[2].setPosition(a):"Back"===i&&this.walls[3].setPosition(a)}},r.setPlateScale=function(e){this.plate.setScale(new h(.5*e,1,.5*e))},r.setActive=function(e){this.isActive=e,this.node.setPosition(this.isActive?0:5e3,this.isActive?0:5e3,0)},r.onPlateScaleChange=function(e){var t=+e.string||1;this.setPlateScale(t),this.plateController.currentScale=t},r.onSetIsAutoMove=function(e){window.isAutoMove=!e.isChecked},r.onKeyDown=function(e){switch(e.keyCode){case p.KEY_O:this.setActive(!this.isActive);break;case p.ESCAPE:this.setActive(!1)}},t}(f)).prototype,"content",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=t(k.prototype,"creator",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=t(k.prototype,"walls",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),B=t(k.prototype,"wallsDebug",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),x=t(k.prototype,"wallsEditBoxes",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),_=t(k.prototype,"plate",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=t(k.prototype,"plateController",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=k))||P));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Debug.ts","./PlateController.ts","./PlatePlace.ts","./Thing.ts","./ThingsController.ts","./ThingsCreator.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/PlateController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./PlatePlace.ts","./Thing.ts"],(function(e){"use strict";var t,n,i,r,s,l,o,c,a,h,u,p,g,d,f,v,T;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){s=e.cclegacy,l=e._decorator,o=e.input,c=e.Input,a=e.Collider,h=e.Tween,u=e.Quat,p=e.easing,g=e.MeshRenderer,d=e.KeyCode,f=e.Component},function(e){v=e.PlatePlace},function(e){T=e.Thing}],execute:function(){var P,y,w,m,C;s._RF.push({},"ca84eoc08hDmI050deOT0eH","PlateController",void 0);var S=l.ccclass,b=l.property;e("PlateController",(P=S("PlateController"),y=b(v),P((C=t((m=function(e){function t(){for(var t,n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return t=e.call.apply(e,[this].concat(s))||this,i(t,"places",C,r(t)),t.currentScale=1,t.currentThing=null,t}n(t,e);var s=t.prototype;return s.onLoad=function(){o.on(c.EventType.KEY_DOWN,this.onKeyDown,this),window.places=this.places},s.start=function(){var e=this.node.getComponent(a);e.on("onTriggerEnter",this.onTriggerEnter,this),e.on("onTriggerExit",this.onTriggerExit,this)},s.getPlace=function(e){for(var t=[],n=0;n<this.places.length;n++)if(!this.places[n].currentThing&&this.places[n].isActive&&this.currentThing&&this.currentThing.node===e){t.push(this.places[n]);break}for(var i=e.getWorldPosition().x,r=null,s=1/0,l=0;l<t.length;l++){var o=Math.abs(t[l].node.getWorldPosition().x-i);o<s&&(s=o,r=t[l])}return r||null},s.setThing=function(e,t){for(var n=this,i=null,r=0,s=0;s<this.places.length;s++){var l,o;if((null==(l=this.places[s])||null==(o=l.currentThing)?void 0:o.id)===t.id){var c,a;i=this.places[s],r=s,this.places[s+1]&&(null==(c=this.places[s+1])||null==(a=c.currentThing)?void 0:a.id)===t.id&&(i=this.places[s+1],r=s+1);break}}if(i)if(this.places[r+1].currentThing){for(var d=-1,f=r+1;f<this.places.length;f++)if(!this.places[f].currentThing){d=f;break}if(-1!==d){for(var v=d-1;v>=r+1;v--)new h(this.places[v].currentThing.node).to(.25,{position:this.places[v+1].node.getWorldPosition().clone().add(this.places[v].currentThing.platePositionOffset.clone().multiplyScalar(this.currentScale))}).start(),this.places[v+1].setThing(this.places[v].currentThing),this.places[v+1].isActive=!1,this.places[v].clear();e=this.places[r+1]}}else e=this.places[r+1];e.isActive=!1,e.setThing(t),this.currentThing=null;var T=e.node.getWorldPosition().clone().add(t.platePositionOffset.clone().multiplyScalar(this.currentScale));new h(t.node).to(window.isAutoMove?.375:.25,{worldPosition:T,scale:t.plateScale.clone().multiplyScalar(this.currentScale),rotation:u.fromEuler(new u,t.plateRotation.x,t.plateRotation.y,t.plateRotation.z)},{easing:p.cubicInOut}).call((function(){var e=t.node.getComponentInChildren(g);e&&(e.shadowCastingMode=0),n.check()})).start()},s.check=function(){for(var e={},t=0;t<this.places.length;t++)if(!this.places[t].isActive){var n=this.places[t].currentThing.id;e[n]?e[n]+=1:e[n]=1}for(var i in e)e[i]>=3&&this.mergeId(+i)},s.mergeId=function(e){for(var t=this,n=[],i=0;i<this.places.length&&(this.places[i].isActive||(this.places[i].currentThing.id===e&&(n.push(this.places[i].currentThing),this.places[i].clear()),3!==n.length));i++);n.sort((function(e,t){var n,i,r,s;return Math.abs((null==e||null==(n=e.node)||null==(i=n.position)?void 0:i.x)-(null==t||null==(r=t.node)||null==(s=r.position)?void 0:s.x))}));var r=n[1].node.getWorldPosition();new h(n[0].node).to(.66,{worldPosition:r},{easing:p.cubicInOut}).start(),new h(n[2].node).to(.66,{worldPosition:r},{easing:p.cubicInOut}).start(),this.scheduleOnce((function(){for(var e=0;e<n.length;e++){var i;null!=(i=n[e])&&i.node&&n[e].node.destroy()}t.checkSequence()}),.7)},s.checkSequence=function(){for(var e=-1,t=-1,n=0;n<this.places.length;n++)if(-1!==e){if(this.places[n].currentThing){t=n;break}}else this.places[n].currentThing||(e=n);if(-1!==e&&-1!==t){for(var i=0;i<t-e;i++){var r;null!=(r=this.places[t+i])&&r.currentThing&&(new h(this.places[t+i].currentThing.node).to(.25,{position:this.places[e+i].node.getWorldPosition().clone().add(this.places[t+i].currentThing.platePositionOffset.clone().multiplyScalar(this.currentScale))}).start(),this.places[e+i].setThing(this.places[t+i].currentThing),this.places[e+i].isActive=!1,this.places[t+i].clear())}this.checkSequence()}},s.clearAll=function(){for(var e=0;e<this.places.length;e++)!this.places[e].isActive&&this.places[e].currentThing&&this.places[e].currentThing.node.destroy(),this.places[e].clear()},s.onTriggerEnter=function(e){var t=e.otherCollider.node.getComponent(T);t&&(this.currentThing=t)},s.onTriggerExit=function(e){this.currentThing=null},s.onKeyDown=function(e){switch(e.keyCode){case d.KEY_P:this.clearAll()}},t}(f)).prototype,"places",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),w=m))||w));s._RF.pop()}}}));

System.register("chunks:///_virtual/PlatePlace.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Thing.ts"],(function(t){"use strict";var e,n,i,r,c,o,l,a,s;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){c=t.cclegacy,o=t._decorator,l=t.CCInteger,a=t.Component},function(t){s=t.Thing}],execute:function(){var u,h,p,g,f;c._RF.push({},"83312HkmaFHSKsBJ8jKfXF2","PlatePlace",void 0);var v=o.ccclass,T=o.property;t("PlatePlace",(u=v("PlatePlace"),h=T(l),u((f=e((g=function(t){function e(){for(var e,n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return e=t.call.apply(t,[this].concat(c))||this,i(e,"placeId",f,r(e)),e.isActive=!0,e.currentThing=null,e}n(e,t);var c=e.prototype;return c.start=function(){},c.clear=function(){this.currentThing=null,this.isActive=!0},c.setThing=function(t){this.currentThing=t},c.onTriggerEnter=function(t){if(this.isActive){var e=t.otherCollider.node.getComponent(s);e&&(this.currentThing=e)}},c.onTriggerExit=function(t){this.isActive&&(this.currentThing=null)},e}(a)).prototype,"placeId",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),p=g))||p));c._RF.pop()}}}));

System.register("chunks:///_virtual/Thing.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,i,n,r,o,a,l,c,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,l=e.CCInteger,c=e.Vec3,u=e.Component}],execute:function(){var p,s,f,b,g,h,y,w,d,m,v;o._RF.push({},"4abecENNUlAj4Vl3Y6Z3gwE","Thing",void 0);var z=a.ccclass,T=a.property;e("Thing",(p=z("Thing"),s=T(l),f=T(c),b=T(c),g=T(c),p((w=t((y=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o))||this,n(t,"id",w,r(t)),n(t,"platePositionOffset",d,r(t)),n(t,"plateScale",m,r(t)),n(t,"plateRotation",v,r(t)),t}return i(t,e),t}(u)).prototype,"id",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),d=t(y.prototype,"platePositionOffset",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new c(0,0,0)}}),m=t(y.prototype,"plateScale",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new c(1,1,1)}}),v=t(y.prototype,"plateRotation",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new c(0,0,0)}}),h=y))||h));o._RF.pop()}}}));

System.register("chunks:///_virtual/ThingsController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./PlateController.ts","./Thing.ts"],(function(t){"use strict";var i,n,e,o,r,a,c,l,s,u,h,p,g,T,w,v,d,f,m,A,y,b;return{setters:[function(t){i=t.applyDecoratedDescriptor,n=t.inheritsLoose,e=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,c=t.Camera,l=t.CCFloat,s=t.Node,u=t.input,h=t.Input,p=t.geometry,g=t.PhysicsSystem,T=t.MobilityMode,w=t.RigidBody,v=t.Collider,d=t.Tween,f=t.Vec3,m=t.easing,A=t.Component},function(t){y=t.PlateController},function(t){b=t.Thing}],execute:function(){var P,C,S,U,z,M,D,R,E,L,N,_,k,x,F,H,O,B,Y,W,V,I,K;r._RF.push({},"3e61e+Pbe5NAJ3VdGkddPmh","ThingsController",void 0);var X=a.ccclass,j=a.property;t("ThingsController",(P=X("ThingsController"),C=j(c),S=j(l),U=j(l),z=j(s),M=j(s),D=j(s),R=j(s),E=j(l),L=j(y),N=j(s),P((x=i((k=function(t){function i(){for(var i,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return i=t.call.apply(t,[this].concat(r))||this,e(i,"camera",x,o(i)),e(i,"tapDuration",F,o(i)),e(i,"positionY",H,o(i)),e(i,"wallLeft",O,o(i)),e(i,"wallRight",B,o(i)),e(i,"wallFront",Y,o(i)),e(i,"wallBack",W,o(i)),e(i,"wallsTreashold",V,o(i)),e(i,"plate",I,o(i)),e(i,"spawnNode",K,o(i)),i.currentActiveThing=null,i.currentActiveThingDistance=0,i.currentActiveThingStartPosition=new f,i.currentActiveThingTapPositionDelta=new f,i.currantActiveThingTapTime=0,i.currentUpTween=null,i.isMovingUp=!1,i}n(i,t);var r=i.prototype;return r.onLoad=function(){var t=this;window.destructionAnimation={maxScale:1.1,increaseTime:.15,minScale:0,decreaseTime:.15},u.on(h.EventType.TOUCH_START,this.onTouchStart,this),u.on(h.EventType.TOUCH_END,this.onTouchEnd,this),u.on(h.EventType.TOUCH_MOVE,this.onTouchMove,this),window.setSize=function(i,n,e,o){void 0===e&&(e=0),void 0===o&&(o=0),t.wallLeft.setPosition(i/2+e,t.wallLeft.position.y,t.wallLeft.position.z),t.wallLeft.setPosition(-i/2+e,t.wallRight.position.y,t.wallRight.position.z),t.wallFront.setPosition(t.wallFront.position.x,t.wallFront.position.y,n/2-o),t.wallBack.setPosition(t.wallBack.position.x,t.wallBack.position.y,-n/2-o)},window.setDestructionAnimation=function(t,i,n,e){window.destructionAnimation.maxScale=t,window.destructionAnimation.increaseTime=i,window.destructionAnimation.minScale=n,window.destructionAnimation.decreaseTime=e}},r.onDestroy=function(){u.off(h.EventType.TOUCH_START,this.onTouchStart,this),u.off(h.EventType.TOUCH_END,this.onTouchEnd,this),u.off(h.EventType.TOUCH_MOVE,this.onTouchMove,this)},r.onTouchStart=function(t){var i=this,n=new p.Ray;this.camera.screenPointToRay(t.getLocationX(),t.getLocationY(),n);if(g.instance.raycast(n,4294967295,1e7,!0)){var e=g.instance.raycastResults,o=null;e.sort((function(t,i){return t.distance-i.distance}));for(var r=0;r<e.length;r++){var a,c;if(null!=(a=e[r])&&null!=(c=a.collider)&&c.node&&e[r].collider.node.mobility===T.Movable){o=e[r];break}}if(!o)return;var l=o.collider.node;this.currentActiveThing=l,this.currentActiveThingDistance=o.distance,this.currentActiveThingStartPosition=this.currentActiveThing.getWorldPosition(),this.currentActiveThingTapPositionDelta=this.currentActiveThingStartPosition.clone().subtract(o.hitPoint),this.currentActiveThing.getComponent(w).isKinematic=!0,this.currentActiveThing.getComponent(w).allowSleep=!1,this.currentActiveThing.getComponent(w).wakeUp(),this.currantActiveThingTapTime=Date.now(),this.currentUpTween&&this.currentUpTween.stop(),this.isMovingUp=!0;var s={position:this.currentActiveThing.getPosition().clone(),thing:l},u=function(){if(i.currentActiveThingTapPositionDelta=new f(i.spawnNode.getWorldPosition().x,i.positionY,i.spawnNode.getWorldPosition().z).subtract(o.hitPoint),i.isMovingUp=!1,window.isAutoMove&&i.currentActiveThing){i.plate.currentThing=i.currentActiveThing.getComponent(b);var t=i.plate.getPlace(i.currentActiveThing);t?(i.currentActiveThing.mobility=T.Static,i.plate.setThing(t,i.currentActiveThing.getComponent(b))):i.currentActiveThing.getComponent(w).isKinematic=!1,i.currentActiveThing.getComponent(w).allowSleep=!0,i.currentActiveThing=null}};if(window.isAutoMove){for(var h=l.getComponents(v),A=0;A<h.length;A++)h[A].enabled=!1;u()}else this.currentUpTween=new d(s).to(.25,{position:new f(this.spawnNode.getWorldPosition().x,this.positionY,this.spawnNode.getWorldPosition().z)},{onUpdate:function(t,i){l&&l.setPosition(t.position)},easing:m.quadIn}).call(u).start()}},r.onTouchMove=function(t){if(this.currentActiveThing&&!this.isMovingUp&&!window.isAutoMove){var i=new p.Ray;this.camera.screenPointToRay(t.getLocationX(),t.getLocationY(),i);var n=new f;i.computeHit(n,this.currentActiveThingDistance),n=n.add(this.currentActiveThingTapPositionDelta),this.currentActiveThing.setWorldPosition(n.x,this.positionY,n.z)}},r.onTouchEnd=function(){if(this.currentActiveThing&&!window.isAutoMove){this.currentUpTween&&(this.currentUpTween.stop(),this.isMovingUp=!1);var t=this.plate.getPlace(this.currentActiveThing);t?(this.currentActiveThing.mobility=T.Static,this.plate.setThing(t,this.currentActiveThing.getComponent(b))):this.currentActiveThing.getComponent(w).isKinematic=!1,this.currentActiveThing.getComponent(w).allowSleep=!0}this.currentActiveThing=null},i}(A)).prototype,"camera",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=i(k.prototype,"tapDuration",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),H=i(k.prototype,"positionY",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 4}}),O=i(k.prototype,"wallLeft",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=i(k.prototype,"wallRight",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Y=i(k.prototype,"wallFront",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),W=i(k.prototype,"wallBack",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),V=i(k.prototype,"wallsTreashold",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),I=i(k.prototype,"plate",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),K=i(k.prototype,"spawnNode",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=k))||_));r._RF.pop()}}}));

System.register("chunks:///_virtual/ThingsCreator.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Thing.ts"],(function(t){"use strict";var n,e,i,a,r,o,s,u,l,c,p,h,f,g,b;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.initializerDefineProperty,i=t.inheritsLoose,a=t.assertThisInitialized},function(t){r=t.cclegacy,o=t._decorator,s=t.Prefab,u=t.CCInteger,l=t.Vec3,c=t.Node,p=t.CCFloat,h=t.instantiate,f=t.RigidBody,g=t.Component},function(t){b=t.Thing}],execute:function(){var d,w,m,T,y,D,v,S,C,P,R,z,I,k,O,M,F,_,L,j,x,B,A,E,H,N;r._RF.push({},"12184tZ3C5MjIeU9OsExf59","ThingsCreator",void 0);var U=o.ccclass,V=o.property,Z=t("ThingData",(d=U("ThingData"),w=V(s),m=V(u),T=V(l),y=V(l),D=V(l),d((C=n((S=function(){e(this,"prefab",C,this),e(this,"count",P,this),e(this,"platePositionOffset",R,this),e(this,"plateScale",z,this),e(this,"plateRotation",I,this),this.id=0}).prototype,"prefab",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=n(S.prototype,"count",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),R=n(S.prototype,"platePositionOffset",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new l(0,0,0)}}),z=n(S.prototype,"plateScale",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new l(1,1,1)}}),I=n(S.prototype,"plateRotation",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new l(0,0,0)}}),v=S))||v));t("ThingsCreator",(k=U("ThingsCreator"),O=V(Z),M=V(c),F=V(p),_=V(p),L=V(p),k((B=n((x=function(t){function n(){for(var n,i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return n=t.call.apply(t,[this].concat(r))||this,e(n,"things",B,a(n)),e(n,"spawnPoint",A,a(n)),e(n,"spawnRadius",E,a(n)),e(n,"spawnDelay",H,a(n)),e(n,"spawnImpuls",N,a(n)),n.currentThingsData=[],n.currentThings=[],n.currentSkateboardData=null,n}i(n,t);var r=n.prototype;return r.onLoad=function(){for(var t=this,n=0;n<this.things.length;n++)this.things[n].id=n;this.createScene(),window.resetScene=function(){t.reset()},window.setCount=function(n,e){t.setThingCount(n,e)}},r.reset=function(){for(var t=0;t<this.currentThings.length;t++)this.currentThings[t]&&this.currentThings[t].destroy();this.currentThings=[],this.createScene()},r.setThingCount=function(t,n){for(var e=0;e<this.things.length;e++)if(this.things[e].prefab.name===t)return void(this.things[e].count=n);console.warn("Invalid prefab name")},r.createScene=function(){for(var t=this,n=0;n<this.things.length;n++){var e=this.things[n];if(!(e.count<=0)){var i=new Z;i.prefab=e.prefab,i.count=e.count,i.platePositionOffset=e.platePositionOffset,i.plateScale=e.plateScale,i.plateRotation=e.plateRotation,i.id=e.id,"Skateboard"===i.prefab.name?this.currentSkateboardData=i:this.currentThingsData.push(i)}}for(var a=0,r=function(){var n,e,i=t.randomInt(0,t.currentThingsData.length-1),r=t.currentThingsData[i];(null==(n=t.currentSkateboardData)?void 0:n.count)>0&&a%(null==(e=t.currentSkateboardData)?void 0:e.count)==0&&(r=t.currentSkateboardData);var o=t.spawnPoint.getPosition().clone();o.add3f(t.randomFloat(0,t.spawnRadius/2),0,t.randomFloat(0,t.spawnRadius/2)),t.scheduleOnce((function(){t.spawn(r,o)}),t.spawnDelay*a),a+=1,r!==t.currentSkateboardData?(t.currentThingsData[i].count-=1,t.currentThingsData[i].count<=0&&t.currentThingsData.splice(i,1)):t.currentSkateboardData.count-=1};this.currentThingsData.length>0;)r()},r.spawn=function(t,n){var e=h(t.prefab),i=e.addComponent(b);i.platePositionOffset=t.platePositionOffset,i.plateScale=t.plateScale,i.plateRotation=t.plateRotation,i.id=t.id,e.setParent(this.node),e.setPosition(n),e.getComponent(f).applyImpulse(new l(0,this.spawnImpuls,0)),this.currentThings.push(e)},r.randomInt=function(t,n){return t=Math.ceil(t),n=Math.floor(n),Math.floor(Math.random()*(n-t+1))+t},r.randomFloat=function(t,n){return Math.random()*(n-t)+t},n}(g)).prototype,"things",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),A=n(x.prototype,"spawnPoint",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=n(x.prototype,"spawnRadius",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),H=n(x.prototype,"spawnDelay",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.1}}),N=n(x.prototype,"spawnImpuls",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return-25}}),j=x))||j));r._RF.pop()}}}));

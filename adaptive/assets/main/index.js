System.register("chunks:///_virtual/Debug.ts",["./rollupPluginModLoBabelHelpers.js","cc","./PlateController.ts","./ThingsCreator.ts"],(function(e){"use strict";var t,i,n,r,o,l,a,s,c,u,h,p,f,g,b;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){o=e.cclegacy,l=e._decorator,a=e.Node,s=e.EditBox,c=e.input,u=e.Input,h=e.Vec3,p=e.KeyCode,f=e.Component},function(e){g=e.PlateController},function(e){b=e.ThingsCreator}],execute:function(){var w,v,d,y,C,m,D,P,A,E,k,z,B,S,x,_,K;o._RF.push({},"51353pprxZO25I3WU0aqaN+","Debug",void 0);var L=l.ccclass,T=l.property;e("Debug",(w=L("Debug"),v=T(a),d=T(b),y=T(a),C=T(a),m=T([s]),D=T(a),P=T(g),w((k=t((E=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return t=e.call.apply(e,[this].concat(o))||this,n(t,"content",k,r(t)),n(t,"creator",z,r(t)),n(t,"walls",B,r(t)),n(t,"wallsDebug",S,r(t)),n(t,"wallsEditBoxes",x,r(t)),n(t,"plate",_,r(t)),n(t,"plateController",K,r(t)),t.isActive=!1,t}i(t,e);var o=t.prototype;return o.onLoad=function(){c.on(u.EventType.KEY_DOWN,this.onKeyDown,this)},o.regenerate=function(){for(var e=this.content.children,t=0;t<e.length;t++){var i=e[t].name,n=e[t].getComponentInChildren(s);if(n){var r=+n.string;r||(r=0),this.creator.setThingCount(i,r)}}this.setActive(!1),this.creator.reset()},o.setShowWalls=function(e){"Left"===e.node.name?this.wallsDebug[0].active=e.isChecked:"Right"===e.node.name?this.wallsDebug[1].active=e.isChecked:"Front"===e.node.name?this.wallsDebug[2].active=e.isChecked:"Back"===e.node.name&&(this.wallsDebug[3].active=e.isChecked)},o.moveWalls=function(){for(var e=0;e<this.wallsEditBoxes.length;e++){var t=this.wallsEditBoxes[e],i=t.node.name,n=t.string.split(","),r=+(n[0]||0),o=+(n[1]||0),l=+(n[2]||0),a=new h(r,o,l);"Left"===i?this.walls[0].setPosition(a):"Right"===i?this.walls[1].setPosition(a):"Front"===i?this.walls[2].setPosition(a):"Back"===i&&this.walls[3].setPosition(a)}},o.setPlateScale=function(e){this.plate.setScale(new h(.5*e,1,.5*e))},o.setActive=function(e){this.isActive=e,this.node.setPosition(this.isActive?0:5e3,this.isActive?0:5e3,0)},o.onPlateScaleChange=function(e){var t=+e.string||1;this.setPlateScale(t),this.plateController.currentScale=t},o.onKeyDown=function(e){switch(e.keyCode){case p.KEY_O:this.setActive(!this.isActive);break;case p.ESCAPE:this.setActive(!1)}},t}(f)).prototype,"content",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=t(E.prototype,"creator",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=t(E.prototype,"walls",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),S=t(E.prototype,"wallsDebug",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),x=t(E.prototype,"wallsEditBoxes",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),_=t(E.prototype,"plate",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),K=t(E.prototype,"plateController",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=E))||A));o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Debug.ts","./PlateController.ts","./PlatePlace.ts","./Thing.ts","./ThingsController.ts","./ThingsCreator.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/PlateController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./PlatePlace.ts","./Thing.ts"],(function(t){"use strict";var e,n,i,r,o,l,s,c,a,u,h,p,g,d,f,v;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){o=t.cclegacy,l=t._decorator,s=t.input,c=t.Input,a=t.Collider,u=t.Tween,h=t.Quat,p=t.easing,g=t.KeyCode,d=t.Component},function(t){f=t.PlatePlace},function(t){v=t.Thing}],execute:function(){var T,P,y,w,m;o._RF.push({},"ca84eoc08hDmI050deOT0eH","PlateController",void 0);var C=l.ccclass,E=l.property;t("PlateController",(T=C("PlateController"),P=E(f),T((m=e((w=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return e=t.call.apply(t,[this].concat(o))||this,i(e,"places",m,r(e)),e.currentScale=1,e.currentThing=null,e}n(e,t);var o=e.prototype;return o.onLoad=function(){s.on(c.EventType.KEY_DOWN,this.onKeyDown,this)},o.start=function(){var t=this.node.getComponent(a);t.on("onTriggerEnter",this.onTriggerEnter,this),t.on("onTriggerExit",this.onTriggerExit,this)},o.getPlace=function(t){for(var e=[],n=0;n<this.places.length;n++)if(!this.places[n].currentThing&&this.places[n].isActive&&this.currentThing&&this.currentThing.node===t){e.push(this.places[n]);break}for(var i=t.getWorldPosition().x,r=null,o=1/0,l=0;l<e.length;l++){var s=Math.abs(e[l].node.getWorldPosition().x-i);s<o&&(o=s,r=e[l])}return r||null},o.setThing=function(t,e){var n=this;t.isActive=!1,t.setThing(e),this.currentThing=null;var i=t.node.getWorldPosition().clone().add(e.platePositionOffset.clone().multiplyScalar(this.currentScale));new u(e.node).to(.25,{worldPosition:i,scale:e.plateScale.clone().multiplyScalar(this.currentScale),rotation:h.fromEuler(new h,e.plateRotation.x,e.plateRotation.y,e.plateRotation.z)}).call((function(){n.check()})).start()},o.check=function(){for(var t={},e=0;e<this.places.length;e++)if(!this.places[e].isActive){var n=this.places[e].currentThing.id;t[n]?t[n]+=1:t[n]=1}for(var i in t)t[i]>=3&&this.mergeId(+i)},o.mergeId=function(t){for(var e=[],n=0;n<this.places.length&&(this.places[n].isActive||(this.places[n].currentThing.id===t&&(e.push(this.places[n].currentThing),this.places[n].clear()),3!==e.length));n++);e.sort((function(t,e){var n,i,r,o;return Math.abs((null==t||null==(n=t.node)||null==(i=n.position)?void 0:i.x)-(null==e||null==(r=e.node)||null==(o=r.position)?void 0:o.x))}));var i=e[1].node.getWorldPosition();new u(e[0].node).to(.66,{worldPosition:i},{easing:p.cubicInOut}).start(),new u(e[2].node).to(.66,{worldPosition:i},{easing:p.cubicInOut}).start(),this.scheduleOnce((function(){for(var t=0;t<e.length;t++)e[t].node.destroy()}),.7)},o.clearAll=function(){for(var t=0;t<this.places.length;t++)!this.places[t].isActive&&this.places[t].currentThing&&this.places[t].currentThing.node.destroy(),this.places[t].clear()},o.onTriggerEnter=function(t){var e=t.otherCollider.node.getComponent(v);e&&(this.currentThing=e)},o.onTriggerExit=function(t){this.currentThing=null},o.onKeyDown=function(t){switch(t.keyCode){case g.KEY_P:this.clearAll()}},e}(d)).prototype,"places",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),y=w))||y));o._RF.pop()}}}));

System.register("chunks:///_virtual/PlatePlace.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Thing.ts"],(function(t){"use strict";var e,n,i,r,c,o,l,a,s;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){c=t.cclegacy,o=t._decorator,l=t.CCInteger,a=t.Component},function(t){s=t.Thing}],execute:function(){var u,h,p,g,f;c._RF.push({},"83312HkmaFHSKsBJ8jKfXF2","PlatePlace",void 0);var v=o.ccclass,T=o.property;t("PlatePlace",(u=v("PlatePlace"),h=T(l),u((f=e((g=function(t){function e(){for(var e,n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return e=t.call.apply(t,[this].concat(c))||this,i(e,"placeId",f,r(e)),e.isActive=!0,e.currentThing=null,e}n(e,t);var c=e.prototype;return c.start=function(){},c.clear=function(){this.currentThing=null,this.isActive=!0},c.setThing=function(t){this.currentThing=t},c.onTriggerEnter=function(t){if(this.isActive){var e=t.otherCollider.node.getComponent(s);e&&(this.currentThing=e)}},c.onTriggerExit=function(t){this.isActive&&(this.currentThing=null)},e}(a)).prototype,"placeId",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),p=g))||p));c._RF.pop()}}}));

System.register("chunks:///_virtual/Thing.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,i,n,r,o,a,l,c,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,l=e.CCInteger,c=e.Vec3,u=e.Component}],execute:function(){var p,s,f,b,g,h,y,w,d,m,v;o._RF.push({},"4abecENNUlAj4Vl3Y6Z3gwE","Thing",void 0);var z=a.ccclass,T=a.property;e("Thing",(p=z("Thing"),s=T(l),f=T(c),b=T(c),g=T(c),p((w=t((y=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o))||this,n(t,"id",w,r(t)),n(t,"platePositionOffset",d,r(t)),n(t,"plateScale",m,r(t)),n(t,"plateRotation",v,r(t)),t}return i(t,e),t}(u)).prototype,"id",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),d=t(y.prototype,"platePositionOffset",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new c(0,0,0)}}),m=t(y.prototype,"plateScale",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new c(1,1,1)}}),v=t(y.prototype,"plateRotation",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new c(0,0,0)}}),h=y))||h));o._RF.pop()}}}));

System.register("chunks:///_virtual/ThingsController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./PlateController.ts","./Thing.ts"],(function(t){"use strict";var i,n,e,o,r,a,l,c,s,u,h,p,T,g,v,w,f,d,m,y;return{setters:[function(t){i=t.applyDecoratedDescriptor,n=t.inheritsLoose,e=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,l=t.Camera,c=t.CCFloat,s=t.Node,u=t.input,h=t.Input,p=t.geometry,T=t.PhysicsSystem,g=t.MobilityMode,v=t.RigidBody,w=t.Tween,f=t.Vec3,d=t.Component},function(t){m=t.PlateController},function(t){y=t.Thing}],execute:function(){var A,b,P,C,S,z,D,R,E,L,_,k,M,F,H,O,Y,x,B,U,N;r._RF.push({},"3e61e+Pbe5NAJ3VdGkddPmh","ThingsController",void 0);var V=a.ccclass,I=a.property;t("ThingsController",(A=V("ThingsController"),b=I(l),P=I(c),C=I(c),S=I(s),z=I(s),D=I(s),R=I(s),E=I(c),L=I(m),A((M=i((k=function(t){function i(){for(var i,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return i=t.call.apply(t,[this].concat(r))||this,e(i,"camera",M,o(i)),e(i,"tapDuration",F,o(i)),e(i,"positionY",H,o(i)),e(i,"wallLeft",O,o(i)),e(i,"wallRight",Y,o(i)),e(i,"wallFront",x,o(i)),e(i,"wallBack",B,o(i)),e(i,"wallsTreashold",U,o(i)),e(i,"plate",N,o(i)),i.currentActiveThing=null,i.currentActiveThingDistance=0,i.currentActiveThingStartPosition=new f,i.currentActiveThingTapPositionDelta=new f,i.currantActiveThingTapTime=0,i}n(i,t);var r=i.prototype;return r.onLoad=function(){var t=this;window.destructionAnimation={maxScale:1.1,increaseTime:.15,minScale:0,decreaseTime:.15},u.on(h.EventType.TOUCH_START,this.onTouchStart,this),u.on(h.EventType.TOUCH_END,this.onTouchEnd,this),u.on(h.EventType.TOUCH_MOVE,this.onTouchMove,this),window.setSize=function(i,n,e,o){void 0===e&&(e=0),void 0===o&&(o=0),t.wallLeft.setPosition(i/2+e,t.wallLeft.position.y,t.wallLeft.position.z),t.wallLeft.setPosition(-i/2+e,t.wallRight.position.y,t.wallRight.position.z),t.wallFront.setPosition(t.wallFront.position.x,t.wallFront.position.y,n/2-o),t.wallBack.setPosition(t.wallBack.position.x,t.wallBack.position.y,-n/2-o)},window.setDestructionAnimation=function(t,i,n,e){window.destructionAnimation.maxScale=t,window.destructionAnimation.increaseTime=i,window.destructionAnimation.minScale=n,window.destructionAnimation.decreaseTime=e}},r.onDestroy=function(){u.off(h.EventType.TOUCH_START,this.onTouchStart,this),u.off(h.EventType.TOUCH_END,this.onTouchEnd,this),u.off(h.EventType.TOUCH_MOVE,this.onTouchMove,this)},r.onTouchStart=function(t){var i=new p.Ray;this.camera.screenPointToRay(t.getLocationX(),t.getLocationY(),i);if(T.instance.raycast(i,4294967295,1e7,!0)){var n=T.instance.raycastResults,e=null;n.sort((function(t,i){return t.distance-i.distance}));for(var o=0;o<n.length;o++){var r,a;if(null!=(r=n[o])&&null!=(a=r.collider)&&a.node&&n[o].collider.node.mobility===g.Movable){e=n[o];break}}if(!e)return;var l=e.collider.node;this.currentActiveThing=l,this.currentActiveThingDistance=e.distance,this.currentActiveThingStartPosition=this.currentActiveThing.getWorldPosition(),this.currentActiveThingTapPositionDelta=this.currentActiveThingStartPosition.clone().subtract(e.hitPoint),this.currentActiveThing.getComponent(v).isKinematic=!0,this.currentActiveThing.getComponent(v).allowSleep=!1,this.currentActiveThing.getComponent(v).wakeUp(),this.currantActiveThingTapTime=Date.now();var c={positionY:this.currentActiveThing.position.y,thing:l};new w(c).to(.25,{positionY:this.positionY},{progress:function(t,i,n,e){var o=t+(i-t)*e;if(l){var r=l.getPosition();l.setPosition(r.x,o,r.z)}return o}}).start()}},r.onTouchMove=function(t){if(this.currentActiveThing){var i=new p.Ray;this.camera.screenPointToRay(t.getLocationX(),t.getLocationY(),i);var n=new f;i.computeHit(n,this.currentActiveThingDistance),n=n.add(this.currentActiveThingTapPositionDelta),this.currentActiveThing.setWorldPosition(n.x,this.positionY,n.z)}},r.onTouchEnd=function(){if(this.currentActiveThing){var t=this.plate.getPlace(this.currentActiveThing);t?(this.currentActiveThing.mobility=g.Static,this.plate.setThing(t,this.currentActiveThing.getComponent(y))):this.currentActiveThing.getComponent(v).isKinematic=!1,this.currentActiveThing.getComponent(v).allowSleep=!0}this.currentActiveThing=null},i}(d)).prototype,"camera",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=i(k.prototype,"tapDuration",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),H=i(k.prototype,"positionY",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 4}}),O=i(k.prototype,"wallLeft",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Y=i(k.prototype,"wallRight",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=i(k.prototype,"wallFront",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=i(k.prototype,"wallBack",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=i(k.prototype,"wallsTreashold",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),N=i(k.prototype,"plate",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=k))||_));r._RF.pop()}}}));

System.register("chunks:///_virtual/ThingsCreator.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Thing.ts"],(function(t){"use strict";var n,e,i,a,r,o,s,u,l,c,p,h,f,g,b;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.initializerDefineProperty,i=t.inheritsLoose,a=t.assertThisInitialized},function(t){r=t.cclegacy,o=t._decorator,s=t.Prefab,u=t.CCInteger,l=t.Vec3,c=t.Node,p=t.CCFloat,h=t.instantiate,f=t.RigidBody,g=t.Component},function(t){b=t.Thing}],execute:function(){var d,w,m,T,y,D,v,S,C,P,R,z,I,O,M,k,F,_,L,j,x,B,A,E,H,N;r._RF.push({},"12184tZ3C5MjIeU9OsExf59","ThingsCreator",void 0);var U=o.ccclass,V=o.property,Z=t("ThingData",(d=U("ThingData"),w=V(s),m=V(u),T=V(l),y=V(l),D=V(l),d((C=n((S=function(){e(this,"prefab",C,this),e(this,"count",P,this),e(this,"platePositionOffset",R,this),e(this,"plateScale",z,this),e(this,"plateRotation",I,this),this.id=0}).prototype,"prefab",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=n(S.prototype,"count",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),R=n(S.prototype,"platePositionOffset",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new l(0,0,0)}}),z=n(S.prototype,"plateScale",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new l(1,1,1)}}),I=n(S.prototype,"plateRotation",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new l(0,0,0)}}),v=S))||v));t("ThingsCreator",(O=U("ThingsCreator"),M=V(Z),k=V(c),F=V(p),_=V(p),L=V(p),O((B=n((x=function(t){function n(){for(var n,i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return n=t.call.apply(t,[this].concat(r))||this,e(n,"things",B,a(n)),e(n,"spawnPoint",A,a(n)),e(n,"spawnRadius",E,a(n)),e(n,"spawnDelay",H,a(n)),e(n,"spawnImpuls",N,a(n)),n.currentThingsData=[],n.currentThings=[],n.currentSkateboardData=null,n}i(n,t);var r=n.prototype;return r.onLoad=function(){for(var t=this,n=0;n<this.things.length;n++)this.things[n].id=n;this.createScene(),window.resetScene=function(){t.reset()},window.setCount=function(n,e){t.setThingCount(n,e)}},r.reset=function(){for(var t=0;t<this.currentThings.length;t++)this.currentThings[t]&&this.currentThings[t].destroy();this.currentThings=[],this.createScene()},r.setThingCount=function(t,n){for(var e=0;e<this.things.length;e++)if(this.things[e].prefab.name===t)return void(this.things[e].count=n);console.warn("Invalid prefab name")},r.createScene=function(){for(var t=this,n=0;n<this.things.length;n++){var e=this.things[n];if(!(e.count<=0)){var i=new Z;i.prefab=e.prefab,i.count=e.count,i.platePositionOffset=e.platePositionOffset,i.plateScale=e.plateScale,i.plateRotation=e.plateRotation,i.id=e.id,"Skateboard"===i.prefab.name?this.currentSkateboardData=i:this.currentThingsData.push(i)}}for(var a=0,r=function(){var n=t.randomInt(0,t.currentThingsData.length-1),e=t.currentThingsData[n];a%t.currentSkateboardData.count==0&&(e=t.currentSkateboardData);var i=t.spawnPoint.getPosition().clone();i.add3f(t.randomFloat(0,t.spawnRadius/2),0,t.randomFloat(0,t.spawnRadius/2)),t.scheduleOnce((function(){t.spawn(e,i)}),t.spawnDelay*a),a+=1,t.currentThingsData[n].count-=1,t.currentThingsData[n].count<=0&&t.currentThingsData.splice(n,1)};this.currentThingsData.length>0;)r()},r.spawn=function(t,n){var e=h(t.prefab),i=e.addComponent(b);i.platePositionOffset=t.platePositionOffset,i.plateScale=t.plateScale,i.plateRotation=t.plateRotation,i.id=t.id,e.setParent(this.node),e.setPosition(n),e.getComponent(f).applyImpulse(new l(0,this.spawnImpuls,0)),this.currentThings.push(e)},r.randomInt=function(t,n){return t=Math.ceil(t),n=Math.floor(n),Math.floor(Math.random()*(n-t+1))+t},r.randomFloat=function(t,n){return Math.random()*(n-t)+t},n}(g)).prototype,"things",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),A=n(x.prototype,"spawnPoint",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=n(x.prototype,"spawnRadius",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),H=n(x.prototype,"spawnDelay",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.1}}),N=n(x.prototype,"spawnImpuls",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return-25}}),j=x))||j));r._RF.pop()}}}));

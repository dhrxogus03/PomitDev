define("DS/VCXWebScenarioManager/VCXScenarioManager",["UWA/Utils","DS/CoreEvents/Events","UWA/Class","DS/Visualization/ThreeJS_DS","DS/VCXWebModifiables/VCXModifiableServer","DS/VCXWebProperties/VCXPropertyValueFloat","DS/VCXKeyFramer/VCXKeyFramer","DS/VCXKeyFramer/VCXObjectAnimation","DS/VCXWebTracks/VCXTrack","DS/VCXWebTracks/VCXKey","DS/VCXWebProperties/VCXPropertyMap","DS/VCXKeyFramer/VCXScenario","DS/VCXWebVisibility/VCXIVisibility","DS/VCXWebProperties/VCXPropertyInfo","DS/WebRBTree/WebRBIterator","DS/VCXWebProperties/VCXPropertyValueMap","DS/VCXWebProperties/VCXPropertyValueList"],function(e,t,r,i,a,n,s,o,l,u,c,p,f,h,y,S,_){"use strict";var b=r.extend({getUpdatePriority:function(){return-10},init:function(){this._privateModifiableServer=null,this._callback=null,this._parameter=null},initialize:function(){this._privateModifiableServer=new a,this._keyframer=new s(this._privateModifiableServer);var e=this._experienceBase.getManager("VCXContextManager");this._keyframer.SetContextMngr(e),this._CurrentScenarioID="",this._Scenarios={},this._FPS=30,this._interFramesMax=-1,this._startScenarioId="",this._startFrame=0,this._timeDelay=0,this._bIsPlaying=!1,this._bAutoKey=!1,this._bCameraAutoKey=!1,this._maxIndex=0,this._scenariosToPlay={},this._bIsBouncing=!1,this._previousFrame=0,this._speed=1,this._TransitionTime=1e3},unInitialize:function(){this._CurrentScenarioID="",this.unInitializeScenario(),this._Scenarios={},this._FPS=30,this._startScenarioId="",this._bIsPlaying=!1,this._bAutoKey=!1,this._bCameraAutoKey=!1,this._maxIndex=0,this._scenariosLoadingPromises=null,this._scenariosToPlay={},this._keyframer&&(this._keyframer.unInitialize(),this._keyframer=null),this._privateModifiableServer&&(this._privateModifiableServer.unInitialize(),this._privateModifiableServer=null)},unInitializeScenario:function(){for(var e in this._Scenarios)this._Scenarios.hasOwnProperty(e)&&this._Scenarios[e].unInitialize()},postInitialize:function(){this._scenariosLoadingPromises={},this._WUXEventTokens={}},SetAutoKey:function(e){this._bAutoKey!=e&&(this._bAutoKey=e,t.publish({event:"VCX_Timeline_AutoKey",data:this._bAutoKey}))},GetAutoKey:function(){return this._bAutoKey},SetCameraAutoKey:function(e){this._bCameraAutoKey!=e&&(this._bCameraAutoKey=e,t.publish({event:"VCX_Timeline_CameraAutoKey",data:this._bCameraAutoKey}))},GetCameraAutoKey:function(){return this._bCameraAutoKey},GetIsPlayingCurrentScenario:function(){return this._bIsPlaying},SetIsPlayingCurrentScenario:function(e){var t=this._Scenarios[this._CurrentScenarioID];if(t){var r=this._experienceBase.getManager("VCXVisuManager");if(e){if(t._bIsBouncing)if(t._bIsReverse)var i=-t.GetCurrentFrame();else i=2*this.GetMaxFrame(this._CurrentScenarioID)-t.GetCurrentFrame();else i=t.GetCurrentFrame();0===i&&t.ResetRangeCache(),r&&(r.CameraControlsViewpoint=!0),this.InitRestoreSetforPlay(),this.PlayScenario(t,i)}else r&&(r.CameraControlsViewpoint=!1),this.StopPlayingScenario(this._CurrentScenarioID);this._bIsPlaying=e}},SetIsBouncing:function(e){for(var t in this._scenariosToPlay){if(this._scenariosToPlay.hasOwnProperty(t))this._scenariosToPlay[t].scenario._bIsBouncing=e}},PlayScenario:function(t,r,a,n,s,o){if(t){var l=t.GetID();l||(l=e.getUUID());var u={};return u.scenario=t,u.clockMesure=new i.Clock,u.clockMesure.start(),u.timeDelay=0,u.lastRealElapsedTime=0,u.startFrame=r,u._fpsHistory={},this._scenariosToPlay[l]=u,void 0!==n&&u.scenario.SetIsBounce(n),void 0!==a&&u.scenario.SetIsLoop(a),void 0!==s&&u.scenario.SetIsReverse(s),void 0!==o&&u.scenario.SetSpeed(o),u.scenario._bIsReverse?u.startFrame=this.GetMaxFrame(l)-r:(t.InitForPlay(this._keyframer),this.UpdateProperties2(t,u.startFrame)),l}},StopPlayingScenario:function(e){if(this._scenariosToPlay[e]){var t=this._scenariosToPlay[e]._fpsHistory,r=0,i=0,a=-1;for(var n in t)t.hasOwnProperty(n)&&(a=n,i+=t[n],r++);if(-1!=a&&(i-=t[a],r--,delete t[a]),r>1){i/=r,console.log("[PERFO] fpsMoyenne "+i);var s=0;for(var n in t)t.hasOwnProperty(n)&&(s+=(t[n]-i)*(t[n]-i));s=Math.sqrt(s/(r-1)),console.log("[PERFO] fpsEcartType "+s)}delete this._scenariosToPlay[e]}var o=this._Scenarios[e];void 0!==o&&o.ClearVolatileKeys()},GetScenarios:function(){return this._Scenarios},GetScenariosFromType:function(e){var t={};for(var r in this._Scenarios)if(this._Scenarios.hasOwnProperty(r)){var i=this._Scenarios[r];i.GetScenarioType()===e&&(t[r]=i)}return t},SetDefaultInterpolator:function(e,t){this._keyframer.SetDefaultInterpolator(e,t)},GetDefaultInterpolator:function(e){return this._keyframer.GetDefaultInterpolator(e)},SetStartingScenarioId:function(e){this._startScenarioId=e},GetStartingScenarioId:function(){return this._startScenarioId},GetFPS:function(){return this._FPS},SetFPS:function(e){this._FPS=e},SetInterFramesMax:function(e){this._interFramesMax=e},GetInterFramesMax:function(){return this._interFramesMax},SetTransitionTime:function(e){this._TransitionTime=e},GetTransitionTime:function(){return this._TransitionTime},SetCurrentFrame:function(e){var t=this._Scenarios[this._CurrentScenarioID];t&&t.SetCurrentFrame(e)},GetCurrentFrame:function(){var e=this._Scenarios[this._CurrentScenarioID];return e?e.GetCurrentFrame():0},GetCurrentTime:function(){var e=this._Scenarios[this._CurrentScenarioID];return e?e.GetCurrentFrame()/this.GetFPS():0},AddScenario:function(e,t){t.SetID(e),this.AddScenario2(t)},AddScenario2:function(e){var t=e.GetID();t||(this._experienceBase.ComponentsMap.AddComponent(e),t=e.GetID());var r=e.GetPersistency();this._Scenarios[t]||0===r&&this._maxIndex++,this._Scenarios[t]=e;var i=e.QueryInterface("VCXIModifiable");this.ModifiableServer.AddModifiable(i)},RemoveScenario:function(e){this._CurrentScenarioID===e&&(this._CurrentScenarioID=""),delete this._Scenarios[e]},SetCurrentScenario:function(e){this._Scenarios[e]&&(this._CurrentScenarioID=e)},GetCurrentScenario:function(){return this._CurrentScenarioID},AddObjectAnimation:function(e,t,r){this.ModifiableServer.AddModifiable(e);var i=e.GetHashing();t.AddObjectAnimation(i,r)},RemoveObjectAnimation:function(e,t){t.RemoveObjectAnimation(e)},AddNeutrals:function(e,t){this._keyframer.AddNeutrals(e,t)},RemoveNeutrals:function(e){this._keyframer.RemoveNeutrals(e)},GetNeutrals:function(e){return this._keyframer.GetNeutrals(e)},RestoreNeutralPropertiesOneModifiable:function(e){this._keyframer.RestoreNeutralPropertiesOneModifiable(e)},RestoreNeutralProperties:function(){this._keyframer.RestoreNeutralProperties(null)},AddPropertyToRestoreSet:function(e,t){this._bIsPlaying||this._keyframer.AddPropertyToRestoreSet(e,t)},RemoveModifiableFromRestoreSet:function(e){var t=this.ModifiableServer.GetModifiableFromHashing(e);this._keyframer.EmptyRestoreSetOneModifiable(t)},InitRestoreSetFromNeutrals:function(e){this._keyframer.InitRestoreSetFromNeutrals(e)},InitRestoreSetforPlay:function(){var e=this._Scenarios[this._CurrentScenarioID];e&&this._keyframer.InitRestoreSetforPlay(e)},GetNewFrame:function(e){var t=e.clockMesure.getElapsedTime(),r=t-e.lastRealElapsedTime;e.lastRealElapsedTime=t;var i=0;if(!("true"==this._experienceBase.getManager("VCXContextManager").odtPerfo)&&-1!=this._interFramesMax){var a=this._interFramesMax/(this.GetFPS()*e.scenario._speed);r>a&&(i=r-a,e.timeDelay+=i)}var n=e.clockMesure.getElapsedTime()-e.timeDelay,s=e.startFrame+n*this.GetFPS()*(e.scenario._speed?e.scenario._speed:1),o=Math.floor(t);return void 0===e._fpsHistory[o]?e._fpsHistory[o]=1:e._fpsHistory[o]++,s},update:function(e){for(var r in this._scenariosToPlay)if(this._scenariosToPlay.hasOwnProperty(r)){var i=this._scenariosToPlay[r],a=this.GetNewFrame(i),n=i.scenario,s=n.GetMaxFrame();null!==n.GetSequenceMaxFrame()&&(s=n.GetSequenceMaxFrame()),n._bIsLoop?(n._bIsBounce&&n._bIsReverse&&i.startFrame>=s&&!n._bIsBouncing&&(a-=s),a>=s&&(n._bIsBounce?n._bIsBouncing?(s-a%s>this._previousFrame?(a%=s,n._bIsBouncing=!1):a=s-a%s,t.publish({event:"VCX_SCENARIO_PLAY_LOOP_START_REACHED",data:r})):(a%s<this._previousFrame?(a=s-a%s,n._bIsBouncing=!0):a%=s,t.publish({event:"VCX_SCENARIO_PLAY_LOOP_END_REACHED",data:r})):(a%=s,t.publish({event:"VCX_SCENARIO_PLAY_LOOP_END_REACHED",data:r}),t.publish({event:"VCX_SCENARIO_PLAY_LOOP_START_REACHED",data:r}))),this._previousFrame=a,n._bIsReverse&&(a=s-a%s),n.SetCurrentFrame(a),this.UpdateProperties2(n,a)):n._bIsBounce?(n._bIsReverse&&i.startFrame>=s&&!n._bIsBouncing&&(a-=s),a>=s?a>2*s-this._startFrame?(n._bIsReverse?(n.SetCurrentFrame(s),this.UpdateProperties2(n,s),n._bIsBouncing=!1):(n.SetCurrentFrame(0),this.UpdateProperties2(n,0),n._bIsBouncing=!1),this.StopPlayingScenario(r),n._bIsBouncing=!1,n.SetSequenceMaxFrame(null),r===this._CurrentScenarioID&&(this._bIsPlaying=!1,t.publish({event:"VCX_SCENARIO_END_REACHED"}),this._callback&&(this._callback(this._parameter),this._callback=null,this._parameter=null)),t.publish({event:"VCX_SCENARIO_PLAY_END_REACHED",data:r})):(a=s-a%s,n._bIsBouncing=!0,n._bIsReverse&&(a=s-a%s),n.SetCurrentFrame(a),this.UpdateProperties2(n,a)):(n._bIsReverse&&(a=s-a%s),n.SetCurrentFrame(a),this.UpdateProperties2(n,a))):n._bIsReverse&&i.startFrame>=s&&a>=2*s||n._bIsReverse&&i.startFrame<s&&a>=s||!n._bIsReverse&&a>=s?(n._bIsReverse?(n.SetCurrentFrame(0),this.UpdateProperties2(n,0)):(n.SetCurrentFrame(s),this.UpdateProperties2(n,s)),this.StopPlayingScenario(r),n._bIsBouncing=!1,n.SetSequenceMaxFrame(null),this._previousFrame=a,r===this._CurrentScenarioID&&(this._bIsPlaying=!1,t.publish({event:"VCX_SCENARIO_END_REACHED"}),this._callback&&(this._callback(this._parameter),this._callback=null,this._parameter=null)),t.publish({event:"VCX_SCENARIO_PLAY_END_REACHED",data:r})):(n._bIsReverse&&(a=s-a%s),n.SetCurrentFrame(a),this.UpdateProperties2(n,a))}},SetCallback:function(e,t){this._callback=e,this._parameter=t},UpdateProperties2:function(e,t){this._keyframer.UpdateProperties(e,t)},UpdateProperties:function(e,t){var r=this._Scenarios[this._CurrentScenarioID];r&&this._keyframer.UpdateProperties(r,this.GetCurrentFrame(),e,t)},UpdateProperty:function(e,t){var r=this._Scenarios[this._CurrentScenarioID];r&&this._keyframer.UpdateProperty(r,this.GetCurrentFrame(),e,t)},ApplyScenarioVisibility:function(e){var t=this._Scenarios[e];t&&this.ApplyVisibility(t)},ApplyVisibility:function(e){var r=e.GetVisibility();if(r){var i=[],a=[],s=r.GetMode(),o=this._experienceBase.ComponentsMap.GetComponentTable();for(var l in o){if(o.hasOwnProperty(l))if(y=o[l]){if(!y.IsKindOf("VCXWebComponentOccurrence"))continue;if(S=y.QueryInterface("VCXIVisibility")){var u=r.IsVisibleWithParents(y);0===s?1===u?(S.SetVisibility(f.EVisState.Visible),i.push(S.GetObject())):0===u&&(S.SetVisibility(f.EVisState.Hidden),a.push(S.GetObject())):1===s?1===u?(S.SetVisibility(f.EVisState.Visible),i.push(S.GetObject())):(S.SetVisibility(f.EVisState.Hidden),a.push(S.GetObject())):2===s&&(0===u?(S.SetVisibility(f.EVisState.Hidden),a.push(S.GetObject())):(S.SetVisibility(f.EVisState.Visible),i.push(S.GetObject())))}}}var c=this._experienceBase.getManager("VCXDressupManager");if(c){var p=c.getDressups();for(var h in p){var y,S;if(p.hasOwnProperty(h))if(y=p[h])if(S=y.QueryInterface("VCXIVisibility"))if(r.FindVisibleCollab(y.GetID())>=0){S.SetVisibility(f.EVisState.Visible);var _=y.QueryInterface("VCXIModifiable");if(_&&!e.GetIsTransition()){var b=new n;b.SetValue(1),_.OnChangeProperty("Actor.Visibility.Opacity",b),_.OnChangePropertiesEnd()}i.push(S.GetObject())}else(e.GetApplyNeutralAtGoToScenario()||e.GetIsTransition())&&(S.SetVisibility(f.EVisState.Hidden),a.push(S.GetObject()))}}i.length&&t.publish({event:"VCX_VISIBILITY_CHANGED",data:{components:i,visibility:f.EVisState.Visible}}),a.length&&t.publish({event:"VCX_VISIBILITY_CHANGED",data:{components:a,visibility:f.EVisState.Hidden}});var v=this._experienceBase.getManager("VCXContextManager");v&&(v.traverseGraphMustBePerformed=!0)}},CaptureDiffOfNeutrals:function(e,t){null===e&&(e=new c);var r=this._keyframer._restoreSet;for(var i in r)if(r.hasOwnProperty(i)){var a=this.ModifiableServer.GetModifiableFromHashing(i);if(t&&!1===a.IsLiving())continue;var n=a.GetRequiredPropertiesForTransition();if(n)for(var s in n){if(n.hasOwnProperty(s))(p=a.GetProperty(s))&&e.AddOrModifyProperty(i,p)}var o=this.GetNeutrals(i);if(o){var l=r[i];for(var u in l)if(l.hasOwnProperty(u)){var p,f=o.GetProperty(u);if(f)(p=a.GetProperty(u))&&p.GetPropertyInfo().GetBehaviorType()!==h.EBehaviorType.Singleton&&(p.GetPropertyValue().IsEqualTo(f.GetPropertyValue())||e.AddOrModifyProperty(i,p))}}}},CaptureInScenario:function(e,t,r,i){var a=this.ModifiableServer.GetHashTable();for(var n in a)if(a.hasOwnProperty(n)){var s=n,c=a[s];if(c.GetObject().IsKindOf("VCXScenario"))continue;if(!1===r&&(c.GetObject().IsKindOf("VCXWebComponentCamera")||c.GetObject().IsKindOf("CXPCameraActor_Spec")))continue;if(!1===i){var p=!1;if(1===c._type&&c._var._bIsCamera&&(p=!0),!p)continue}var f=e.GetObjectAnimation(s);null===f&&(f=new o,e.AddObjectAnimation(s,f));var h=c.GetProperties(!0),y=[];h.GetListPropertyNames(y);for(var S=0;S<y.length;S++){var _=y[S],b=h.GetProperty(_);if(b&&b.GetPropertyValue()){var v=b.GetPropertyValue();if(v){var d=f.GetTrack(_);null===d&&(d=new l,f.AddTrack(_,d));var P=new u;P.SetFrame(t),P.SetValue(v),d.AddKey(P)}}}}},CaptureInPropMap:function(e){null===e&&(e=new c);var t=this.ModifiableServer.GetHashTable();for(var r in t)if(t.hasOwnProperty(r)){var i=r,a=t[i].GetProperties(!0);if(a){var n=[];a.GetListPropertyNames(n);for(var s=0;s<n.length;s++){var o=n[s],l=a.GetProperty(o);l&&(!0===l.GetPropertyValue()._bUndefined||e.AddOrModifyProperty(i,l))}}}},GetMaxFrame:function(e){var t=0,r=this._Scenarios[e];return r&&(t=r.GetMaxFrame()),t},ConsiderNewComponent:function(e){var t=this.GetScenarios();for(var r in t)if(t.hasOwnProperty(r)){const o=t[r];if(o){var i=o.GetVisibility();if(i){var a=i.GetMode(),n=e.QueryInterface("VCXIVisibility");if(n){var s=n.GetVisibility();0===a?s!==f.EVisState.Hidden?i.AddVisible(e):i.AddInvisible(e):1===a?s!==f.EVisState.Hidden&&i.AddVisible(e):2===a&&s===f.EVisState.Hidden&&i.AddInvisible(e)}o.SetVisibility(i)}}}},CaptureCurrentVisibility:function(e){if(e){var t=e.GetVisibility();if(t){t.Empty();for(var r=t.GetMode(),i=this._experienceBase.ComponentsMap.GetComponentFromType("VCXWebComponentOccurrence"),a=0;a<i.length;a++){if(u=i[a])if(c=u.QueryInterface("VCXIVisibility")){var n=c.GetVisibility();0===r?n!==f.EVisState.Hidden?t.AddVisible(u):t.AddInvisible(u):1===r?n!==f.EVisState.Hidden&&t.AddVisible(u):2===r&&n===f.EVisState.Hidden&&t.AddInvisible(u)}}var s=null,o=this._experienceBase.getManager("VCXDressupManager");for(var l in o&&(s=o.getDressups()),s){var u,c;if(s.hasOwnProperty(l))if(u=s[l])if(c=u.QueryInterface("VCXIVisibility"))(n=c.GetVisibility())!==f.EVisState.Hidden&&t.AddVisibleCollab(u)}e.SetVisibility(t)}}},ApplyView:function(e,t){t||this.ApplyVisibility(e),e._bApplyNeutralAtGoToScenario&&this._keyframer.RestoreNeutralProperties(e),this.UpdateProperties2(e,0)},CaptureCurrentView:function(e){var t=this._experienceBase.Factory.BuildComponent("VCXScenario"),r=p.EScenarioType.Scenario;e&&void 0!==e.scenarioType&&(r=e.scenarioType),t.SetScenarioType(r);var i=1;e&&void 0!==e.visibilityMode&&(i=e.visibilityMode),t.GetVisibility().SetMode(i);var a=2;e&&void 0!==e.persistency&&(a=e.persistency),t.SetPersistency(a);var n,s=!1;return e&&void 0!==e.bIsPartialView&&(s=e.bIsPartialView),s&&t.SetApplyNeutralAtGoToScenario(!1),this.CaptureCurrentVisibility(t),e&&void 0!==e.propMapDiffNeutrals&&(n=e.propMapDiffNeutrals),n||(n=new c),this.CaptureDiffOfNeutrals(n,!0),t.SetPropertyMapAtFrame(n,0),t},ChangeProperties:function(e){for(var t in e._map)if(e._map.hasOwnProperty(t)){var r=this.ModifiableServer.GetModifiableFromHashing(t),i=e.GetPropertySet(t);for(var a in i._map)if(i._map.hasOwnProperty(a)){var n=i._map[a];r.OnChangeProperty(a,n.GetPropertyValue())}r.OnChangePropertiesEnd()}},ChangePropertiesPropSet:function(e,t){for(var r in t._map)if(t._map.hasOwnProperty(r)){var i=t._map[r];e.OnChangeProperty(r,i.GetPropertyValue())}e.OnChangePropertiesEnd()},IsCurrentPropertyDifferentFromNeutral:function(e,t){if(!e)return!1;var r=this._keyframer._Neutrals,i=e.GetHashing(),a=r.GetPropertySet(i);if(!a)return!1;var n=a.GetProperty(t);if(!n)return!1;var s=n.GetPropertyValue();if(!s)return!1;var o=e.GetProperty(t);return!!o&&!o.GetPropertyValue().IsEqualTo(s)},SearchAllValuesForOneProperty:function(e,t,r){const i=this._experienceBase.getManager("VCXScenarioManager"),a=i._keyframer._Neutrals;for(let s in a._map)if(a._map.hasOwnProperty(s)){var n=a.GetPropertySet(s);if(n._map.hasOwnProperty(e))if((b=n.GetProperty(e).GetPropertyValue()).GetValue()===t){const e=i.ModifiableServer.GetModifiableFromHashing(s);e&&r&&r({type:"Neutrals",modifiable:e,propSet:n,propValue:b})}}const s=i.GetScenarios();for(var o in s)if(s.hasOwnProperty(o)){var l=s[o],u=[];l.GetListModifiables(u);for(var c=0;c<u.length;c++){let a=u[c];var p=l.GetObjectAnimation(a);if(p){var f=p.GetTrack(e);if(f)for(var h=f._treekeys,S=new y(h),_=S.next();null!==_;){var b;if((b=_.GetValue()).GetValue()===t){var v=i.ModifiableServer.GetModifiableFromHashing(a);v&&r&&r({type:"Track",modifiable:v,Frame:_.GetFrame(),Scenario:l,Easing:_.GetEasing()})}_=S.next()}}}}},ResetLinksInPropertyValuetree:function(e,t,r,i,a){var n=!1;if("VCXPropertyValueLink"===e.GetType()){var s=e.GetValue();!0===t[s]&&(i?console.log("LINK FOUND : "+s):a?(e.SetValue(a),console.log("LINK REPLACED : ["+s+"] by ["+a+"]")):(e.SetValue(""),console.log("LINK REMOVED : "+s)),n=!0,r[s]=!0)}else if(e instanceof S)for(var o=0;o<e._value.length;o++){(l=e._value[o])&&this.ResetLinksInPropertyValuetree(l,t,r,i,a)&&(n=!0)}else if(e instanceof _)for(o=0;o<e._value.length;o++){var l;(l=e._value[o])&&this.ResetLinksInPropertyValuetree(l,t,r,i,a)&&(n=!0)}return n},ResetLinksTo:function(e,t,r,i,a){var n=this._keyframer._Neutrals;for(var s in n._map)if(n._map.hasOwnProperty(s)){var o=n.GetPropertySet(s);for(var l in o._map)if(o._map.hasOwnProperty(l)){var u=o.GetProperty(l).GetPropertyValue(),c={};if(this.ResetLinksInPropertyValuetree(u,e,c,i,a))if(i||(n._LinksCleaned=!0),G=this.ModifiableServer.GetModifiableFromHashing(s)){var p=G.GetObject().GetID();for(var f in void 0===t[p]&&(t[p]={}),t[p].neutral=c,c)c.hasOwnProperty(f)&&(void 0===r[f]&&(r[f]={}),void 0===r[f].neutral&&(r[f].neutral={}),r[f].neutral[p]=!0)}}}var h=this.GetScenarios();for(var S in h)if(h.hasOwnProperty(S)){var _=h[S],b=[];_.GetListModifiables(b);for(var v=0;v<b.length;v++){s=b[v];var d=_.GetObjectAnimation(s);if(d){var P=[];d.GetListTrackNames(P);for(var m=0;m<P.length;m++){l=P[m];for(var C=d.GetTrack(l)._treekeys,V=new y(C),I=V.next();null!==I;){var G;u=I.GetValue(),c={};if(this.ResetLinksInPropertyValuetree(u,e,c,i,a))if(i||_.SetBoostDirty(),G=this.ModifiableServer.GetModifiableFromHashing(s)){p=G.GetObject().GetID();for(var f in void 0===t[p]&&(t[p]={}),t[p][S]=c,c)c.hasOwnProperty(f)&&(void 0===r[f]&&(r[f]={}),void 0===r[f][S]&&(r[f][S]={}),r[f][S][p]=!0)}I=V.next()}}}}var M=_.GetVisibility();if(M)for(var g in e)if(e.hasOwnProperty(g)){var O=M._visibilityMap[g];void 0!==O&&(i?console.log("LINK FOUND in visibilityMap: "+g):(delete M._visibilityMap[g],a?(M._visibilityMap[a]=O,console.log("LINK REPLACED in visible : ["+g+"] by ["+a+"]")):console.log("LINK REMOVED from visible : "+g),_.SetBoostDirty())),void 0!==(O=M._visibilityMapCollab[g])&&(i?console.log("LINK FOUND in visibilityMapCollab: "+g):(delete M._visibilityMapCollab[g],a?(M._visibilityMapCollab[a]=O,console.log("LINK REPLACED in visibilityMapCollab : ["+g+"] by ["+a+"]")):console.log("LINK REMOVED from visibilityMapCollab: "+g),_.SetBoostDirty()))}}}});return Object.defineProperty(b.prototype,"ModifiableServer",{enumerable:!0,get:function(){return this._privateModifiableServer}}),Object.defineProperty(b.prototype,"componentType",{enumerable:!0,get:function(){return"VCXScenarioManager"}}),b}),define("DS/VCXWebScenarioManager/VCXModifiableScenarioManager",["DS/VCXWebModifiables/VCXModifiable","DS/VCXWebProperties/VCXPropertySet","DS/VCXWebProperties/VCXProperty","DS/VCXWebProperties/VCXPropertyInfo","DS/VCXWebProperties/VCXPropertyValueFloat","DS/VCXWebProperties/VCXPropertyValueString","DS/VCXWebProperties/VCXPropertyValueInt"],function(e,t,r,i,a,n,s){"use strict";return e.extend({init:function(){this._parent()},OnChangeProperty:function(e,t){if("ScenarioManager.InterFramesMax"===e)this.GetObject().SetInterFramesMax(t.GetValue());else if("ScenarioManager.FPS"===e)this.GetObject().SetFPS(t.GetValue());else if("ScenarioManager.TransitionTime"===e)this.GetObject().SetTransitionTime(t.GetValue());else{if("ScenarioManager.startScenarioId"!==e)return console.log("property not found!"),!1;this.GetObject().SetStartingScenarioId(t.GetValue())}return!0},GetProperty:function(e){var t=null;if("ScenarioManager.FPS"===e)(u=new a).SetValue(this.GetObject().GetFPS()),t=new r(new i(e,2),u);else if("ScenarioManager.InterFramesMax"===e){var o=new s;o.SetValue(this.GetObject().GetInterFramesMax()),t=new r(new i(e,2),o)}else if("ScenarioManager.startScenarioId"===e){var l=new n;l.SetValue(this.GetObject().GetStartingScenarioId()),t=new r(new i(e,2),l)}else if("ScenarioManager.TransitionTime"===e){var u;(u=new a).SetValue(this.GetObject().GetTransitionTime()),t=new r(new i(e,2),u)}return t},GetProperties:function(){var e=new t;return e.AddOrModifyProperty(this.GetProperty("ScenarioManager.FPS")),e.AddOrModifyProperty(this.GetProperty("ScenarioManager.InterFramesMax")),e.AddOrModifyProperty(this.GetProperty("ScenarioManager.startScenarioId")),e.AddOrModifyProperty(this.GetProperty("ScenarioManager.TransitionTime")),e}})});
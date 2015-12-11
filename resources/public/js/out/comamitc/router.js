// Compiled by ClojureScript 1.7.170 {}
goog.provide('comamitc.router');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('comamitc.html.core');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
goog.require('comamitc.utils');
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__24574__auto___24683 = (function (params__24575__auto__){
if(cljs.core.map_QMARK_.call(null,params__24575__auto__)){
var map__24680 = params__24575__auto__;
var map__24680__$1 = ((((!((map__24680 == null)))?((((map__24680.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24680.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24680):map__24680);
return comamitc.html.core.render.call(null,new cljs.core.Keyword(null,"default","default",-1987822328));
} else {
if(cljs.core.vector_QMARK_.call(null,params__24575__auto__)){
var vec__24682 = params__24575__auto__;
return comamitc.html.core.render.call(null,new cljs.core.Keyword(null,"default","default",-1987822328));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__24574__auto___24683);

var action__24574__auto___24687 = (function (params__24575__auto__){
if(cljs.core.map_QMARK_.call(null,params__24575__auto__)){
var map__24684 = params__24575__auto__;
var map__24684__$1 = ((((!((map__24684 == null)))?((((map__24684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24684):map__24684);
return comamitc.html.core.render.call(null,new cljs.core.Keyword(null,"profile","profile",-545963874));
} else {
if(cljs.core.vector_QMARK_.call(null,params__24575__auto__)){
var vec__24686 = params__24575__auto__;
return comamitc.html.core.render.call(null,new cljs.core.Keyword(null,"profile","profile",-545963874));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/profile",action__24574__auto___24687);

var action__24574__auto___24691 = (function (params__24575__auto__){
if(cljs.core.map_QMARK_.call(null,params__24575__auto__)){
var map__24688 = params__24575__auto__;
var map__24688__$1 = ((((!((map__24688 == null)))?((((map__24688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24688):map__24688);
return comamitc.html.core.render.call(null,new cljs.core.Keyword(null,"projects","projects",-364845983));
} else {
if(cljs.core.vector_QMARK_.call(null,params__24575__auto__)){
var vec__24690 = params__24575__auto__;
return comamitc.html.core.render.call(null,new cljs.core.Keyword(null,"projects","projects",-364845983));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/projects",action__24574__auto___24691);

var action__24574__auto___24695 = (function (params__24575__auto__){
if(cljs.core.map_QMARK_.call(null,params__24575__auto__)){
var map__24692 = params__24575__auto__;
var map__24692__$1 = ((((!((map__24692 == null)))?((((map__24692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24692):map__24692);
return comamitc.utils.log.call(null,"this page does not exist");
} else {
if(cljs.core.vector_QMARK_.call(null,params__24575__auto__)){
var vec__24694 = params__24575__auto__;
return comamitc.utils.log.call(null,"this page does not exist");
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"*",action__24574__auto___24695);

comamitc.router.init = (function comamitc$router$init(){
var h = (new goog.History());
goog.events.listen(h,goog.history.EventType.NAVIGATE,((function (h){
return (function (p1__24696_SHARP_){
return secretary.core.dispatch_BANG_.call(null,p1__24696_SHARP_.token);
});})(h))
);

var G__24698 = h;
G__24698.setEnabled(true);

return G__24698;
});

//# sourceMappingURL=router.js.map
// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16826__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16826__auto__){
return or__16826__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16826__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22385_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22385_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__22390 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22391 = null;
var count__22392 = (0);
var i__22393 = (0);
while(true){
if((i__22393 < count__22392)){
var n = cljs.core._nth.call(null,chunk__22391,i__22393);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22394 = seq__22390;
var G__22395 = chunk__22391;
var G__22396 = count__22392;
var G__22397 = (i__22393 + (1));
seq__22390 = G__22394;
chunk__22391 = G__22395;
count__22392 = G__22396;
i__22393 = G__22397;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22390);
if(temp__4425__auto__){
var seq__22390__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22390__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__22390__$1);
var G__22398 = cljs.core.chunk_rest.call(null,seq__22390__$1);
var G__22399 = c__17629__auto__;
var G__22400 = cljs.core.count.call(null,c__17629__auto__);
var G__22401 = (0);
seq__22390 = G__22398;
chunk__22391 = G__22399;
count__22392 = G__22400;
i__22393 = G__22401;
continue;
} else {
var n = cljs.core.first.call(null,seq__22390__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22402 = cljs.core.next.call(null,seq__22390__$1);
var G__22403 = null;
var G__22404 = (0);
var G__22405 = (0);
seq__22390 = G__22402;
chunk__22391 = G__22403;
count__22392 = G__22404;
i__22393 = G__22405;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__22444_22451 = cljs.core.seq.call(null,deps);
var chunk__22445_22452 = null;
var count__22446_22453 = (0);
var i__22447_22454 = (0);
while(true){
if((i__22447_22454 < count__22446_22453)){
var dep_22455 = cljs.core._nth.call(null,chunk__22445_22452,i__22447_22454);
topo_sort_helper_STAR_.call(null,dep_22455,(depth + (1)),state);

var G__22456 = seq__22444_22451;
var G__22457 = chunk__22445_22452;
var G__22458 = count__22446_22453;
var G__22459 = (i__22447_22454 + (1));
seq__22444_22451 = G__22456;
chunk__22445_22452 = G__22457;
count__22446_22453 = G__22458;
i__22447_22454 = G__22459;
continue;
} else {
var temp__4425__auto___22460 = cljs.core.seq.call(null,seq__22444_22451);
if(temp__4425__auto___22460){
var seq__22444_22461__$1 = temp__4425__auto___22460;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22444_22461__$1)){
var c__17629__auto___22462 = cljs.core.chunk_first.call(null,seq__22444_22461__$1);
var G__22463 = cljs.core.chunk_rest.call(null,seq__22444_22461__$1);
var G__22464 = c__17629__auto___22462;
var G__22465 = cljs.core.count.call(null,c__17629__auto___22462);
var G__22466 = (0);
seq__22444_22451 = G__22463;
chunk__22445_22452 = G__22464;
count__22446_22453 = G__22465;
i__22447_22454 = G__22466;
continue;
} else {
var dep_22467 = cljs.core.first.call(null,seq__22444_22461__$1);
topo_sort_helper_STAR_.call(null,dep_22467,(depth + (1)),state);

var G__22468 = cljs.core.next.call(null,seq__22444_22461__$1);
var G__22469 = null;
var G__22470 = (0);
var G__22471 = (0);
seq__22444_22451 = G__22468;
chunk__22445_22452 = G__22469;
count__22446_22453 = G__22470;
i__22447_22454 = G__22471;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22448){
var vec__22450 = p__22448;
var x = cljs.core.nth.call(null,vec__22450,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22450,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22450,x,xs,get_deps__$1){
return (function (p1__22406_SHARP_){
return clojure.set.difference.call(null,p1__22406_SHARP_,x);
});})(vec__22450,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__22484 = cljs.core.seq.call(null,provides);
var chunk__22485 = null;
var count__22486 = (0);
var i__22487 = (0);
while(true){
if((i__22487 < count__22486)){
var prov = cljs.core._nth.call(null,chunk__22485,i__22487);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22488_22496 = cljs.core.seq.call(null,requires);
var chunk__22489_22497 = null;
var count__22490_22498 = (0);
var i__22491_22499 = (0);
while(true){
if((i__22491_22499 < count__22490_22498)){
var req_22500 = cljs.core._nth.call(null,chunk__22489_22497,i__22491_22499);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22500,prov);

var G__22501 = seq__22488_22496;
var G__22502 = chunk__22489_22497;
var G__22503 = count__22490_22498;
var G__22504 = (i__22491_22499 + (1));
seq__22488_22496 = G__22501;
chunk__22489_22497 = G__22502;
count__22490_22498 = G__22503;
i__22491_22499 = G__22504;
continue;
} else {
var temp__4425__auto___22505 = cljs.core.seq.call(null,seq__22488_22496);
if(temp__4425__auto___22505){
var seq__22488_22506__$1 = temp__4425__auto___22505;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22488_22506__$1)){
var c__17629__auto___22507 = cljs.core.chunk_first.call(null,seq__22488_22506__$1);
var G__22508 = cljs.core.chunk_rest.call(null,seq__22488_22506__$1);
var G__22509 = c__17629__auto___22507;
var G__22510 = cljs.core.count.call(null,c__17629__auto___22507);
var G__22511 = (0);
seq__22488_22496 = G__22508;
chunk__22489_22497 = G__22509;
count__22490_22498 = G__22510;
i__22491_22499 = G__22511;
continue;
} else {
var req_22512 = cljs.core.first.call(null,seq__22488_22506__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22512,prov);

var G__22513 = cljs.core.next.call(null,seq__22488_22506__$1);
var G__22514 = null;
var G__22515 = (0);
var G__22516 = (0);
seq__22488_22496 = G__22513;
chunk__22489_22497 = G__22514;
count__22490_22498 = G__22515;
i__22491_22499 = G__22516;
continue;
}
} else {
}
}
break;
}

var G__22517 = seq__22484;
var G__22518 = chunk__22485;
var G__22519 = count__22486;
var G__22520 = (i__22487 + (1));
seq__22484 = G__22517;
chunk__22485 = G__22518;
count__22486 = G__22519;
i__22487 = G__22520;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22484);
if(temp__4425__auto__){
var seq__22484__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22484__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__22484__$1);
var G__22521 = cljs.core.chunk_rest.call(null,seq__22484__$1);
var G__22522 = c__17629__auto__;
var G__22523 = cljs.core.count.call(null,c__17629__auto__);
var G__22524 = (0);
seq__22484 = G__22521;
chunk__22485 = G__22522;
count__22486 = G__22523;
i__22487 = G__22524;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22484__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22492_22525 = cljs.core.seq.call(null,requires);
var chunk__22493_22526 = null;
var count__22494_22527 = (0);
var i__22495_22528 = (0);
while(true){
if((i__22495_22528 < count__22494_22527)){
var req_22529 = cljs.core._nth.call(null,chunk__22493_22526,i__22495_22528);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22529,prov);

var G__22530 = seq__22492_22525;
var G__22531 = chunk__22493_22526;
var G__22532 = count__22494_22527;
var G__22533 = (i__22495_22528 + (1));
seq__22492_22525 = G__22530;
chunk__22493_22526 = G__22531;
count__22494_22527 = G__22532;
i__22495_22528 = G__22533;
continue;
} else {
var temp__4425__auto___22534__$1 = cljs.core.seq.call(null,seq__22492_22525);
if(temp__4425__auto___22534__$1){
var seq__22492_22535__$1 = temp__4425__auto___22534__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22492_22535__$1)){
var c__17629__auto___22536 = cljs.core.chunk_first.call(null,seq__22492_22535__$1);
var G__22537 = cljs.core.chunk_rest.call(null,seq__22492_22535__$1);
var G__22538 = c__17629__auto___22536;
var G__22539 = cljs.core.count.call(null,c__17629__auto___22536);
var G__22540 = (0);
seq__22492_22525 = G__22537;
chunk__22493_22526 = G__22538;
count__22494_22527 = G__22539;
i__22495_22528 = G__22540;
continue;
} else {
var req_22541 = cljs.core.first.call(null,seq__22492_22535__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22541,prov);

var G__22542 = cljs.core.next.call(null,seq__22492_22535__$1);
var G__22543 = null;
var G__22544 = (0);
var G__22545 = (0);
seq__22492_22525 = G__22542;
chunk__22493_22526 = G__22543;
count__22494_22527 = G__22544;
i__22495_22528 = G__22545;
continue;
}
} else {
}
}
break;
}

var G__22546 = cljs.core.next.call(null,seq__22484__$1);
var G__22547 = null;
var G__22548 = (0);
var G__22549 = (0);
seq__22484 = G__22546;
chunk__22485 = G__22547;
count__22486 = G__22548;
i__22487 = G__22549;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__22554_22558 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22555_22559 = null;
var count__22556_22560 = (0);
var i__22557_22561 = (0);
while(true){
if((i__22557_22561 < count__22556_22560)){
var ns_22562 = cljs.core._nth.call(null,chunk__22555_22559,i__22557_22561);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22562);

var G__22563 = seq__22554_22558;
var G__22564 = chunk__22555_22559;
var G__22565 = count__22556_22560;
var G__22566 = (i__22557_22561 + (1));
seq__22554_22558 = G__22563;
chunk__22555_22559 = G__22564;
count__22556_22560 = G__22565;
i__22557_22561 = G__22566;
continue;
} else {
var temp__4425__auto___22567 = cljs.core.seq.call(null,seq__22554_22558);
if(temp__4425__auto___22567){
var seq__22554_22568__$1 = temp__4425__auto___22567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22554_22568__$1)){
var c__17629__auto___22569 = cljs.core.chunk_first.call(null,seq__22554_22568__$1);
var G__22570 = cljs.core.chunk_rest.call(null,seq__22554_22568__$1);
var G__22571 = c__17629__auto___22569;
var G__22572 = cljs.core.count.call(null,c__17629__auto___22569);
var G__22573 = (0);
seq__22554_22558 = G__22570;
chunk__22555_22559 = G__22571;
count__22556_22560 = G__22572;
i__22557_22561 = G__22573;
continue;
} else {
var ns_22574 = cljs.core.first.call(null,seq__22554_22568__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22574);

var G__22575 = cljs.core.next.call(null,seq__22554_22568__$1);
var G__22576 = null;
var G__22577 = (0);
var G__22578 = (0);
seq__22554_22558 = G__22575;
chunk__22555_22559 = G__22576;
count__22556_22560 = G__22577;
i__22557_22561 = G__22578;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16826__auto__ = goog.require__;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__22579__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22580__i = 0, G__22580__a = new Array(arguments.length -  0);
while (G__22580__i < G__22580__a.length) {G__22580__a[G__22580__i] = arguments[G__22580__i + 0]; ++G__22580__i;}
  args = new cljs.core.IndexedSeq(G__22580__a,0);
} 
return G__22579__delegate.call(this,args);};
G__22579.cljs$lang$maxFixedArity = 0;
G__22579.cljs$lang$applyTo = (function (arglist__22581){
var args = cljs.core.seq(arglist__22581);
return G__22579__delegate(args);
});
G__22579.cljs$core$IFn$_invoke$arity$variadic = G__22579__delegate;
return G__22579;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22583 = cljs.core._EQ_;
var expr__22584 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22583.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22584))){
var path_parts = ((function (pred__22583,expr__22584){
return (function (p1__22582_SHARP_){
return clojure.string.split.call(null,p1__22582_SHARP_,/[\/\\]/);
});})(pred__22583,expr__22584))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22583,expr__22584){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22586){if((e22586 instanceof Error)){
var e = e22586;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22586;

}
}})());
});
;})(path_parts,sep,root,pred__22583,expr__22584))
} else {
if(cljs.core.truth_(pred__22583.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22584))){
return ((function (pred__22583,expr__22584){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22583,expr__22584){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22583,expr__22584))
);

return deferred.addErrback(((function (deferred,pred__22583,expr__22584){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22583,expr__22584))
);
});
;})(pred__22583,expr__22584))
} else {
return ((function (pred__22583,expr__22584){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22583,expr__22584))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22587,callback){
var map__22590 = p__22587;
var map__22590__$1 = ((((!((map__22590 == null)))?((((map__22590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22590):map__22590);
var file_msg = map__22590__$1;
var request_url = cljs.core.get.call(null,map__22590__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22590,map__22590__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22590,map__22590__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19491__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto__){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto__){
return (function (state_22614){
var state_val_22615 = (state_22614[(1)]);
if((state_val_22615 === (7))){
var inst_22610 = (state_22614[(2)]);
var state_22614__$1 = state_22614;
var statearr_22616_22636 = state_22614__$1;
(statearr_22616_22636[(2)] = inst_22610);

(statearr_22616_22636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22615 === (1))){
var state_22614__$1 = state_22614;
var statearr_22617_22637 = state_22614__$1;
(statearr_22617_22637[(2)] = null);

(statearr_22617_22637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22615 === (4))){
var inst_22594 = (state_22614[(7)]);
var inst_22594__$1 = (state_22614[(2)]);
var state_22614__$1 = (function (){var statearr_22618 = state_22614;
(statearr_22618[(7)] = inst_22594__$1);

return statearr_22618;
})();
if(cljs.core.truth_(inst_22594__$1)){
var statearr_22619_22638 = state_22614__$1;
(statearr_22619_22638[(1)] = (5));

} else {
var statearr_22620_22639 = state_22614__$1;
(statearr_22620_22639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22615 === (6))){
var state_22614__$1 = state_22614;
var statearr_22621_22640 = state_22614__$1;
(statearr_22621_22640[(2)] = null);

(statearr_22621_22640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22615 === (3))){
var inst_22612 = (state_22614[(2)]);
var state_22614__$1 = state_22614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22614__$1,inst_22612);
} else {
if((state_val_22615 === (2))){
var state_22614__$1 = state_22614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22614__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22615 === (11))){
var inst_22606 = (state_22614[(2)]);
var state_22614__$1 = (function (){var statearr_22622 = state_22614;
(statearr_22622[(8)] = inst_22606);

return statearr_22622;
})();
var statearr_22623_22641 = state_22614__$1;
(statearr_22623_22641[(2)] = null);

(statearr_22623_22641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22615 === (9))){
var inst_22598 = (state_22614[(9)]);
var inst_22600 = (state_22614[(10)]);
var inst_22602 = inst_22600.call(null,inst_22598);
var state_22614__$1 = state_22614;
var statearr_22624_22642 = state_22614__$1;
(statearr_22624_22642[(2)] = inst_22602);

(statearr_22624_22642[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22615 === (5))){
var inst_22594 = (state_22614[(7)]);
var inst_22596 = figwheel.client.file_reloading.blocking_load.call(null,inst_22594);
var state_22614__$1 = state_22614;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22614__$1,(8),inst_22596);
} else {
if((state_val_22615 === (10))){
var inst_22598 = (state_22614[(9)]);
var inst_22604 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22598);
var state_22614__$1 = state_22614;
var statearr_22625_22643 = state_22614__$1;
(statearr_22625_22643[(2)] = inst_22604);

(statearr_22625_22643[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22615 === (8))){
var inst_22600 = (state_22614[(10)]);
var inst_22594 = (state_22614[(7)]);
var inst_22598 = (state_22614[(2)]);
var inst_22599 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22600__$1 = cljs.core.get.call(null,inst_22599,inst_22594);
var state_22614__$1 = (function (){var statearr_22626 = state_22614;
(statearr_22626[(9)] = inst_22598);

(statearr_22626[(10)] = inst_22600__$1);

return statearr_22626;
})();
if(cljs.core.truth_(inst_22600__$1)){
var statearr_22627_22644 = state_22614__$1;
(statearr_22627_22644[(1)] = (9));

} else {
var statearr_22628_22645 = state_22614__$1;
(statearr_22628_22645[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19491__auto__))
;
return ((function (switch__19379__auto__,c__19491__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19380__auto__ = null;
var figwheel$client$file_reloading$state_machine__19380__auto____0 = (function (){
var statearr_22632 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22632[(0)] = figwheel$client$file_reloading$state_machine__19380__auto__);

(statearr_22632[(1)] = (1));

return statearr_22632;
});
var figwheel$client$file_reloading$state_machine__19380__auto____1 = (function (state_22614){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_22614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e22633){if((e22633 instanceof Object)){
var ex__19383__auto__ = e22633;
var statearr_22634_22646 = state_22614;
(statearr_22634_22646[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22647 = state_22614;
state_22614 = G__22647;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19380__auto__ = function(state_22614){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19380__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19380__auto____1.call(this,state_22614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19380__auto____0;
figwheel$client$file_reloading$state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19380__auto____1;
return figwheel$client$file_reloading$state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto__))
})();
var state__19493__auto__ = (function (){var statearr_22635 = f__19492__auto__.call(null);
(statearr_22635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto__);

return statearr_22635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto__))
);

return c__19491__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22648,callback){
var map__22651 = p__22648;
var map__22651__$1 = ((((!((map__22651 == null)))?((((map__22651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22651):map__22651);
var file_msg = map__22651__$1;
var namespace = cljs.core.get.call(null,map__22651__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22651,map__22651__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22651,map__22651__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22653){
var map__22656 = p__22653;
var map__22656__$1 = ((((!((map__22656 == null)))?((((map__22656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22656):map__22656);
var file_msg = map__22656__$1;
var namespace = cljs.core.get.call(null,map__22656__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16814__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16814__auto__){
var or__16826__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
var or__16826__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto____$1)){
return or__16826__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16814__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22658,callback){
var map__22661 = p__22658;
var map__22661__$1 = ((((!((map__22661 == null)))?((((map__22661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22661):map__22661);
var file_msg = map__22661__$1;
var request_url = cljs.core.get.call(null,map__22661__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22661__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19491__auto___22749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto___22749,out){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto___22749,out){
return (function (state_22731){
var state_val_22732 = (state_22731[(1)]);
if((state_val_22732 === (1))){
var inst_22709 = cljs.core.nth.call(null,files,(0),null);
var inst_22710 = cljs.core.nthnext.call(null,files,(1));
var inst_22711 = files;
var state_22731__$1 = (function (){var statearr_22733 = state_22731;
(statearr_22733[(7)] = inst_22709);

(statearr_22733[(8)] = inst_22710);

(statearr_22733[(9)] = inst_22711);

return statearr_22733;
})();
var statearr_22734_22750 = state_22731__$1;
(statearr_22734_22750[(2)] = null);

(statearr_22734_22750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22732 === (2))){
var inst_22711 = (state_22731[(9)]);
var inst_22714 = (state_22731[(10)]);
var inst_22714__$1 = cljs.core.nth.call(null,inst_22711,(0),null);
var inst_22715 = cljs.core.nthnext.call(null,inst_22711,(1));
var inst_22716 = (inst_22714__$1 == null);
var inst_22717 = cljs.core.not.call(null,inst_22716);
var state_22731__$1 = (function (){var statearr_22735 = state_22731;
(statearr_22735[(10)] = inst_22714__$1);

(statearr_22735[(11)] = inst_22715);

return statearr_22735;
})();
if(inst_22717){
var statearr_22736_22751 = state_22731__$1;
(statearr_22736_22751[(1)] = (4));

} else {
var statearr_22737_22752 = state_22731__$1;
(statearr_22737_22752[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22732 === (3))){
var inst_22729 = (state_22731[(2)]);
var state_22731__$1 = state_22731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22731__$1,inst_22729);
} else {
if((state_val_22732 === (4))){
var inst_22714 = (state_22731[(10)]);
var inst_22719 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22714);
var state_22731__$1 = state_22731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22731__$1,(7),inst_22719);
} else {
if((state_val_22732 === (5))){
var inst_22725 = cljs.core.async.close_BANG_.call(null,out);
var state_22731__$1 = state_22731;
var statearr_22738_22753 = state_22731__$1;
(statearr_22738_22753[(2)] = inst_22725);

(statearr_22738_22753[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22732 === (6))){
var inst_22727 = (state_22731[(2)]);
var state_22731__$1 = state_22731;
var statearr_22739_22754 = state_22731__$1;
(statearr_22739_22754[(2)] = inst_22727);

(statearr_22739_22754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22732 === (7))){
var inst_22715 = (state_22731[(11)]);
var inst_22721 = (state_22731[(2)]);
var inst_22722 = cljs.core.async.put_BANG_.call(null,out,inst_22721);
var inst_22711 = inst_22715;
var state_22731__$1 = (function (){var statearr_22740 = state_22731;
(statearr_22740[(12)] = inst_22722);

(statearr_22740[(9)] = inst_22711);

return statearr_22740;
})();
var statearr_22741_22755 = state_22731__$1;
(statearr_22741_22755[(2)] = null);

(statearr_22741_22755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19491__auto___22749,out))
;
return ((function (switch__19379__auto__,c__19491__auto___22749,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19380__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19380__auto____0 = (function (){
var statearr_22745 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22745[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19380__auto__);

(statearr_22745[(1)] = (1));

return statearr_22745;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19380__auto____1 = (function (state_22731){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_22731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e22746){if((e22746 instanceof Object)){
var ex__19383__auto__ = e22746;
var statearr_22747_22756 = state_22731;
(statearr_22747_22756[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22757 = state_22731;
state_22731 = G__22757;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19380__auto__ = function(state_22731){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19380__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19380__auto____1.call(this,state_22731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19380__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19380__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto___22749,out))
})();
var state__19493__auto__ = (function (){var statearr_22748 = f__19492__auto__.call(null);
(statearr_22748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto___22749);

return statearr_22748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto___22749,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22758,opts){
var map__22762 = p__22758;
var map__22762__$1 = ((((!((map__22762 == null)))?((((map__22762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22762):map__22762);
var eval_body__$1 = cljs.core.get.call(null,map__22762__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22762__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16814__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16814__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16814__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22764){var e = e22764;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__22765_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22765_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__22770){
var vec__22771 = p__22770;
var k = cljs.core.nth.call(null,vec__22771,(0),null);
var v = cljs.core.nth.call(null,vec__22771,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22772){
var vec__22773 = p__22772;
var k = cljs.core.nth.call(null,vec__22773,(0),null);
var v = cljs.core.nth.call(null,vec__22773,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22777,p__22778){
var map__23025 = p__22777;
var map__23025__$1 = ((((!((map__23025 == null)))?((((map__23025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23025):map__23025);
var opts = map__23025__$1;
var before_jsload = cljs.core.get.call(null,map__23025__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__23025__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__23025__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__23026 = p__22778;
var map__23026__$1 = ((((!((map__23026 == null)))?((((map__23026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23026):map__23026);
var msg = map__23026__$1;
var files = cljs.core.get.call(null,map__23026__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__23026__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__23026__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19491__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto__,map__23025,map__23025__$1,opts,before_jsload,on_jsload,reload_dependents,map__23026,map__23026__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto__,map__23025,map__23025__$1,opts,before_jsload,on_jsload,reload_dependents,map__23026,map__23026__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23179){
var state_val_23180 = (state_23179[(1)]);
if((state_val_23180 === (7))){
var inst_23040 = (state_23179[(7)]);
var inst_23041 = (state_23179[(8)]);
var inst_23042 = (state_23179[(9)]);
var inst_23043 = (state_23179[(10)]);
var inst_23048 = cljs.core._nth.call(null,inst_23041,inst_23043);
var inst_23049 = figwheel.client.file_reloading.eval_body.call(null,inst_23048,opts);
var inst_23050 = (inst_23043 + (1));
var tmp23181 = inst_23040;
var tmp23182 = inst_23041;
var tmp23183 = inst_23042;
var inst_23040__$1 = tmp23181;
var inst_23041__$1 = tmp23182;
var inst_23042__$1 = tmp23183;
var inst_23043__$1 = inst_23050;
var state_23179__$1 = (function (){var statearr_23184 = state_23179;
(statearr_23184[(7)] = inst_23040__$1);

(statearr_23184[(8)] = inst_23041__$1);

(statearr_23184[(11)] = inst_23049);

(statearr_23184[(9)] = inst_23042__$1);

(statearr_23184[(10)] = inst_23043__$1);

return statearr_23184;
})();
var statearr_23185_23271 = state_23179__$1;
(statearr_23185_23271[(2)] = null);

(statearr_23185_23271[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (20))){
var inst_23083 = (state_23179[(12)]);
var inst_23091 = figwheel.client.file_reloading.sort_files.call(null,inst_23083);
var state_23179__$1 = state_23179;
var statearr_23186_23272 = state_23179__$1;
(statearr_23186_23272[(2)] = inst_23091);

(statearr_23186_23272[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (27))){
var state_23179__$1 = state_23179;
var statearr_23187_23273 = state_23179__$1;
(statearr_23187_23273[(2)] = null);

(statearr_23187_23273[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (1))){
var inst_23032 = (state_23179[(13)]);
var inst_23029 = before_jsload.call(null,files);
var inst_23030 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_23031 = (function (){return ((function (inst_23032,inst_23029,inst_23030,state_val_23180,c__19491__auto__,map__23025,map__23025__$1,opts,before_jsload,on_jsload,reload_dependents,map__23026,map__23026__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22774_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22774_SHARP_);
});
;})(inst_23032,inst_23029,inst_23030,state_val_23180,c__19491__auto__,map__23025,map__23025__$1,opts,before_jsload,on_jsload,reload_dependents,map__23026,map__23026__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23032__$1 = cljs.core.filter.call(null,inst_23031,files);
var inst_23033 = cljs.core.not_empty.call(null,inst_23032__$1);
var state_23179__$1 = (function (){var statearr_23188 = state_23179;
(statearr_23188[(14)] = inst_23029);

(statearr_23188[(15)] = inst_23030);

(statearr_23188[(13)] = inst_23032__$1);

return statearr_23188;
})();
if(cljs.core.truth_(inst_23033)){
var statearr_23189_23274 = state_23179__$1;
(statearr_23189_23274[(1)] = (2));

} else {
var statearr_23190_23275 = state_23179__$1;
(statearr_23190_23275[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (24))){
var state_23179__$1 = state_23179;
var statearr_23191_23276 = state_23179__$1;
(statearr_23191_23276[(2)] = null);

(statearr_23191_23276[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (39))){
var inst_23133 = (state_23179[(16)]);
var state_23179__$1 = state_23179;
var statearr_23192_23277 = state_23179__$1;
(statearr_23192_23277[(2)] = inst_23133);

(statearr_23192_23277[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (46))){
var inst_23174 = (state_23179[(2)]);
var state_23179__$1 = state_23179;
var statearr_23193_23278 = state_23179__$1;
(statearr_23193_23278[(2)] = inst_23174);

(statearr_23193_23278[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (4))){
var inst_23077 = (state_23179[(2)]);
var inst_23078 = cljs.core.List.EMPTY;
var inst_23079 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_23078);
var inst_23080 = (function (){return ((function (inst_23077,inst_23078,inst_23079,state_val_23180,c__19491__auto__,map__23025,map__23025__$1,opts,before_jsload,on_jsload,reload_dependents,map__23026,map__23026__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22775_SHARP_){
var and__16814__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22775_SHARP_);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22775_SHARP_));
} else {
return and__16814__auto__;
}
});
;})(inst_23077,inst_23078,inst_23079,state_val_23180,c__19491__auto__,map__23025,map__23025__$1,opts,before_jsload,on_jsload,reload_dependents,map__23026,map__23026__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23081 = cljs.core.filter.call(null,inst_23080,files);
var inst_23082 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_23083 = cljs.core.concat.call(null,inst_23081,inst_23082);
var state_23179__$1 = (function (){var statearr_23194 = state_23179;
(statearr_23194[(17)] = inst_23079);

(statearr_23194[(18)] = inst_23077);

(statearr_23194[(12)] = inst_23083);

return statearr_23194;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23195_23279 = state_23179__$1;
(statearr_23195_23279[(1)] = (16));

} else {
var statearr_23196_23280 = state_23179__$1;
(statearr_23196_23280[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (15))){
var inst_23067 = (state_23179[(2)]);
var state_23179__$1 = state_23179;
var statearr_23197_23281 = state_23179__$1;
(statearr_23197_23281[(2)] = inst_23067);

(statearr_23197_23281[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (21))){
var inst_23093 = (state_23179[(19)]);
var inst_23093__$1 = (state_23179[(2)]);
var inst_23094 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23093__$1);
var state_23179__$1 = (function (){var statearr_23198 = state_23179;
(statearr_23198[(19)] = inst_23093__$1);

return statearr_23198;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23179__$1,(22),inst_23094);
} else {
if((state_val_23180 === (31))){
var inst_23177 = (state_23179[(2)]);
var state_23179__$1 = state_23179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23179__$1,inst_23177);
} else {
if((state_val_23180 === (32))){
var inst_23133 = (state_23179[(16)]);
var inst_23138 = inst_23133.cljs$lang$protocol_mask$partition0$;
var inst_23139 = (inst_23138 & (64));
var inst_23140 = inst_23133.cljs$core$ISeq$;
var inst_23141 = (inst_23139) || (inst_23140);
var state_23179__$1 = state_23179;
if(cljs.core.truth_(inst_23141)){
var statearr_23199_23282 = state_23179__$1;
(statearr_23199_23282[(1)] = (35));

} else {
var statearr_23200_23283 = state_23179__$1;
(statearr_23200_23283[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (40))){
var inst_23154 = (state_23179[(20)]);
var inst_23153 = (state_23179[(2)]);
var inst_23154__$1 = cljs.core.get.call(null,inst_23153,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23155 = cljs.core.get.call(null,inst_23153,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23156 = cljs.core.not_empty.call(null,inst_23154__$1);
var state_23179__$1 = (function (){var statearr_23201 = state_23179;
(statearr_23201[(20)] = inst_23154__$1);

(statearr_23201[(21)] = inst_23155);

return statearr_23201;
})();
if(cljs.core.truth_(inst_23156)){
var statearr_23202_23284 = state_23179__$1;
(statearr_23202_23284[(1)] = (41));

} else {
var statearr_23203_23285 = state_23179__$1;
(statearr_23203_23285[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (33))){
var state_23179__$1 = state_23179;
var statearr_23204_23286 = state_23179__$1;
(statearr_23204_23286[(2)] = false);

(statearr_23204_23286[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (13))){
var inst_23053 = (state_23179[(22)]);
var inst_23057 = cljs.core.chunk_first.call(null,inst_23053);
var inst_23058 = cljs.core.chunk_rest.call(null,inst_23053);
var inst_23059 = cljs.core.count.call(null,inst_23057);
var inst_23040 = inst_23058;
var inst_23041 = inst_23057;
var inst_23042 = inst_23059;
var inst_23043 = (0);
var state_23179__$1 = (function (){var statearr_23205 = state_23179;
(statearr_23205[(7)] = inst_23040);

(statearr_23205[(8)] = inst_23041);

(statearr_23205[(9)] = inst_23042);

(statearr_23205[(10)] = inst_23043);

return statearr_23205;
})();
var statearr_23206_23287 = state_23179__$1;
(statearr_23206_23287[(2)] = null);

(statearr_23206_23287[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (22))){
var inst_23096 = (state_23179[(23)]);
var inst_23093 = (state_23179[(19)]);
var inst_23097 = (state_23179[(24)]);
var inst_23101 = (state_23179[(25)]);
var inst_23096__$1 = (state_23179[(2)]);
var inst_23097__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23096__$1);
var inst_23098 = (function (){var all_files = inst_23093;
var res_SINGLEQUOTE_ = inst_23096__$1;
var res = inst_23097__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_23096,inst_23093,inst_23097,inst_23101,inst_23096__$1,inst_23097__$1,state_val_23180,c__19491__auto__,map__23025,map__23025__$1,opts,before_jsload,on_jsload,reload_dependents,map__23026,map__23026__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22776_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22776_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_23096,inst_23093,inst_23097,inst_23101,inst_23096__$1,inst_23097__$1,state_val_23180,c__19491__auto__,map__23025,map__23025__$1,opts,before_jsload,on_jsload,reload_dependents,map__23026,map__23026__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23099 = cljs.core.filter.call(null,inst_23098,inst_23096__$1);
var inst_23100 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_23101__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23100);
var inst_23102 = cljs.core.not_empty.call(null,inst_23101__$1);
var state_23179__$1 = (function (){var statearr_23207 = state_23179;
(statearr_23207[(26)] = inst_23099);

(statearr_23207[(23)] = inst_23096__$1);

(statearr_23207[(24)] = inst_23097__$1);

(statearr_23207[(25)] = inst_23101__$1);

return statearr_23207;
})();
if(cljs.core.truth_(inst_23102)){
var statearr_23208_23288 = state_23179__$1;
(statearr_23208_23288[(1)] = (23));

} else {
var statearr_23209_23289 = state_23179__$1;
(statearr_23209_23289[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (36))){
var state_23179__$1 = state_23179;
var statearr_23210_23290 = state_23179__$1;
(statearr_23210_23290[(2)] = false);

(statearr_23210_23290[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (41))){
var inst_23154 = (state_23179[(20)]);
var inst_23158 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_23159 = cljs.core.map.call(null,inst_23158,inst_23154);
var inst_23160 = cljs.core.pr_str.call(null,inst_23159);
var inst_23161 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_23160)].join('');
var inst_23162 = figwheel.client.utils.log.call(null,inst_23161);
var state_23179__$1 = state_23179;
var statearr_23211_23291 = state_23179__$1;
(statearr_23211_23291[(2)] = inst_23162);

(statearr_23211_23291[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (43))){
var inst_23155 = (state_23179[(21)]);
var inst_23165 = (state_23179[(2)]);
var inst_23166 = cljs.core.not_empty.call(null,inst_23155);
var state_23179__$1 = (function (){var statearr_23212 = state_23179;
(statearr_23212[(27)] = inst_23165);

return statearr_23212;
})();
if(cljs.core.truth_(inst_23166)){
var statearr_23213_23292 = state_23179__$1;
(statearr_23213_23292[(1)] = (44));

} else {
var statearr_23214_23293 = state_23179__$1;
(statearr_23214_23293[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (29))){
var inst_23099 = (state_23179[(26)]);
var inst_23096 = (state_23179[(23)]);
var inst_23093 = (state_23179[(19)]);
var inst_23097 = (state_23179[(24)]);
var inst_23133 = (state_23179[(16)]);
var inst_23101 = (state_23179[(25)]);
var inst_23129 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23132 = (function (){var all_files = inst_23093;
var res_SINGLEQUOTE_ = inst_23096;
var res = inst_23097;
var files_not_loaded = inst_23099;
var dependencies_that_loaded = inst_23101;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23099,inst_23096,inst_23093,inst_23097,inst_23133,inst_23101,inst_23129,state_val_23180,c__19491__auto__,map__23025,map__23025__$1,opts,before_jsload,on_jsload,reload_dependents,map__23026,map__23026__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23131){
var map__23215 = p__23131;
var map__23215__$1 = ((((!((map__23215 == null)))?((((map__23215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23215):map__23215);
var namespace = cljs.core.get.call(null,map__23215__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23099,inst_23096,inst_23093,inst_23097,inst_23133,inst_23101,inst_23129,state_val_23180,c__19491__auto__,map__23025,map__23025__$1,opts,before_jsload,on_jsload,reload_dependents,map__23026,map__23026__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23133__$1 = cljs.core.group_by.call(null,inst_23132,inst_23099);
var inst_23135 = (inst_23133__$1 == null);
var inst_23136 = cljs.core.not.call(null,inst_23135);
var state_23179__$1 = (function (){var statearr_23217 = state_23179;
(statearr_23217[(16)] = inst_23133__$1);

(statearr_23217[(28)] = inst_23129);

return statearr_23217;
})();
if(inst_23136){
var statearr_23218_23294 = state_23179__$1;
(statearr_23218_23294[(1)] = (32));

} else {
var statearr_23219_23295 = state_23179__$1;
(statearr_23219_23295[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (44))){
var inst_23155 = (state_23179[(21)]);
var inst_23168 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23155);
var inst_23169 = cljs.core.pr_str.call(null,inst_23168);
var inst_23170 = [cljs.core.str("not required: "),cljs.core.str(inst_23169)].join('');
var inst_23171 = figwheel.client.utils.log.call(null,inst_23170);
var state_23179__$1 = state_23179;
var statearr_23220_23296 = state_23179__$1;
(statearr_23220_23296[(2)] = inst_23171);

(statearr_23220_23296[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (6))){
var inst_23074 = (state_23179[(2)]);
var state_23179__$1 = state_23179;
var statearr_23221_23297 = state_23179__$1;
(statearr_23221_23297[(2)] = inst_23074);

(statearr_23221_23297[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (28))){
var inst_23099 = (state_23179[(26)]);
var inst_23126 = (state_23179[(2)]);
var inst_23127 = cljs.core.not_empty.call(null,inst_23099);
var state_23179__$1 = (function (){var statearr_23222 = state_23179;
(statearr_23222[(29)] = inst_23126);

return statearr_23222;
})();
if(cljs.core.truth_(inst_23127)){
var statearr_23223_23298 = state_23179__$1;
(statearr_23223_23298[(1)] = (29));

} else {
var statearr_23224_23299 = state_23179__$1;
(statearr_23224_23299[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (25))){
var inst_23097 = (state_23179[(24)]);
var inst_23113 = (state_23179[(2)]);
var inst_23114 = cljs.core.not_empty.call(null,inst_23097);
var state_23179__$1 = (function (){var statearr_23225 = state_23179;
(statearr_23225[(30)] = inst_23113);

return statearr_23225;
})();
if(cljs.core.truth_(inst_23114)){
var statearr_23226_23300 = state_23179__$1;
(statearr_23226_23300[(1)] = (26));

} else {
var statearr_23227_23301 = state_23179__$1;
(statearr_23227_23301[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (34))){
var inst_23148 = (state_23179[(2)]);
var state_23179__$1 = state_23179;
if(cljs.core.truth_(inst_23148)){
var statearr_23228_23302 = state_23179__$1;
(statearr_23228_23302[(1)] = (38));

} else {
var statearr_23229_23303 = state_23179__$1;
(statearr_23229_23303[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (17))){
var state_23179__$1 = state_23179;
var statearr_23230_23304 = state_23179__$1;
(statearr_23230_23304[(2)] = recompile_dependents);

(statearr_23230_23304[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (3))){
var state_23179__$1 = state_23179;
var statearr_23231_23305 = state_23179__$1;
(statearr_23231_23305[(2)] = null);

(statearr_23231_23305[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (12))){
var inst_23070 = (state_23179[(2)]);
var state_23179__$1 = state_23179;
var statearr_23232_23306 = state_23179__$1;
(statearr_23232_23306[(2)] = inst_23070);

(statearr_23232_23306[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (2))){
var inst_23032 = (state_23179[(13)]);
var inst_23039 = cljs.core.seq.call(null,inst_23032);
var inst_23040 = inst_23039;
var inst_23041 = null;
var inst_23042 = (0);
var inst_23043 = (0);
var state_23179__$1 = (function (){var statearr_23233 = state_23179;
(statearr_23233[(7)] = inst_23040);

(statearr_23233[(8)] = inst_23041);

(statearr_23233[(9)] = inst_23042);

(statearr_23233[(10)] = inst_23043);

return statearr_23233;
})();
var statearr_23234_23307 = state_23179__$1;
(statearr_23234_23307[(2)] = null);

(statearr_23234_23307[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (23))){
var inst_23099 = (state_23179[(26)]);
var inst_23096 = (state_23179[(23)]);
var inst_23093 = (state_23179[(19)]);
var inst_23097 = (state_23179[(24)]);
var inst_23101 = (state_23179[(25)]);
var inst_23104 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_23106 = (function (){var all_files = inst_23093;
var res_SINGLEQUOTE_ = inst_23096;
var res = inst_23097;
var files_not_loaded = inst_23099;
var dependencies_that_loaded = inst_23101;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23099,inst_23096,inst_23093,inst_23097,inst_23101,inst_23104,state_val_23180,c__19491__auto__,map__23025,map__23025__$1,opts,before_jsload,on_jsload,reload_dependents,map__23026,map__23026__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23105){
var map__23235 = p__23105;
var map__23235__$1 = ((((!((map__23235 == null)))?((((map__23235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23235):map__23235);
var request_url = cljs.core.get.call(null,map__23235__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23099,inst_23096,inst_23093,inst_23097,inst_23101,inst_23104,state_val_23180,c__19491__auto__,map__23025,map__23025__$1,opts,before_jsload,on_jsload,reload_dependents,map__23026,map__23026__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23107 = cljs.core.reverse.call(null,inst_23101);
var inst_23108 = cljs.core.map.call(null,inst_23106,inst_23107);
var inst_23109 = cljs.core.pr_str.call(null,inst_23108);
var inst_23110 = figwheel.client.utils.log.call(null,inst_23109);
var state_23179__$1 = (function (){var statearr_23237 = state_23179;
(statearr_23237[(31)] = inst_23104);

return statearr_23237;
})();
var statearr_23238_23308 = state_23179__$1;
(statearr_23238_23308[(2)] = inst_23110);

(statearr_23238_23308[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (35))){
var state_23179__$1 = state_23179;
var statearr_23239_23309 = state_23179__$1;
(statearr_23239_23309[(2)] = true);

(statearr_23239_23309[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (19))){
var inst_23083 = (state_23179[(12)]);
var inst_23089 = figwheel.client.file_reloading.expand_files.call(null,inst_23083);
var state_23179__$1 = state_23179;
var statearr_23240_23310 = state_23179__$1;
(statearr_23240_23310[(2)] = inst_23089);

(statearr_23240_23310[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (11))){
var state_23179__$1 = state_23179;
var statearr_23241_23311 = state_23179__$1;
(statearr_23241_23311[(2)] = null);

(statearr_23241_23311[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (9))){
var inst_23072 = (state_23179[(2)]);
var state_23179__$1 = state_23179;
var statearr_23242_23312 = state_23179__$1;
(statearr_23242_23312[(2)] = inst_23072);

(statearr_23242_23312[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (5))){
var inst_23042 = (state_23179[(9)]);
var inst_23043 = (state_23179[(10)]);
var inst_23045 = (inst_23043 < inst_23042);
var inst_23046 = inst_23045;
var state_23179__$1 = state_23179;
if(cljs.core.truth_(inst_23046)){
var statearr_23243_23313 = state_23179__$1;
(statearr_23243_23313[(1)] = (7));

} else {
var statearr_23244_23314 = state_23179__$1;
(statearr_23244_23314[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (14))){
var inst_23053 = (state_23179[(22)]);
var inst_23062 = cljs.core.first.call(null,inst_23053);
var inst_23063 = figwheel.client.file_reloading.eval_body.call(null,inst_23062,opts);
var inst_23064 = cljs.core.next.call(null,inst_23053);
var inst_23040 = inst_23064;
var inst_23041 = null;
var inst_23042 = (0);
var inst_23043 = (0);
var state_23179__$1 = (function (){var statearr_23245 = state_23179;
(statearr_23245[(7)] = inst_23040);

(statearr_23245[(8)] = inst_23041);

(statearr_23245[(9)] = inst_23042);

(statearr_23245[(32)] = inst_23063);

(statearr_23245[(10)] = inst_23043);

return statearr_23245;
})();
var statearr_23246_23315 = state_23179__$1;
(statearr_23246_23315[(2)] = null);

(statearr_23246_23315[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (45))){
var state_23179__$1 = state_23179;
var statearr_23247_23316 = state_23179__$1;
(statearr_23247_23316[(2)] = null);

(statearr_23247_23316[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (26))){
var inst_23099 = (state_23179[(26)]);
var inst_23096 = (state_23179[(23)]);
var inst_23093 = (state_23179[(19)]);
var inst_23097 = (state_23179[(24)]);
var inst_23101 = (state_23179[(25)]);
var inst_23116 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23118 = (function (){var all_files = inst_23093;
var res_SINGLEQUOTE_ = inst_23096;
var res = inst_23097;
var files_not_loaded = inst_23099;
var dependencies_that_loaded = inst_23101;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23099,inst_23096,inst_23093,inst_23097,inst_23101,inst_23116,state_val_23180,c__19491__auto__,map__23025,map__23025__$1,opts,before_jsload,on_jsload,reload_dependents,map__23026,map__23026__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23117){
var map__23248 = p__23117;
var map__23248__$1 = ((((!((map__23248 == null)))?((((map__23248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23248):map__23248);
var namespace = cljs.core.get.call(null,map__23248__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23248__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23099,inst_23096,inst_23093,inst_23097,inst_23101,inst_23116,state_val_23180,c__19491__auto__,map__23025,map__23025__$1,opts,before_jsload,on_jsload,reload_dependents,map__23026,map__23026__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23119 = cljs.core.map.call(null,inst_23118,inst_23097);
var inst_23120 = cljs.core.pr_str.call(null,inst_23119);
var inst_23121 = figwheel.client.utils.log.call(null,inst_23120);
var inst_23122 = (function (){var all_files = inst_23093;
var res_SINGLEQUOTE_ = inst_23096;
var res = inst_23097;
var files_not_loaded = inst_23099;
var dependencies_that_loaded = inst_23101;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23099,inst_23096,inst_23093,inst_23097,inst_23101,inst_23116,inst_23118,inst_23119,inst_23120,inst_23121,state_val_23180,c__19491__auto__,map__23025,map__23025__$1,opts,before_jsload,on_jsload,reload_dependents,map__23026,map__23026__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23099,inst_23096,inst_23093,inst_23097,inst_23101,inst_23116,inst_23118,inst_23119,inst_23120,inst_23121,state_val_23180,c__19491__auto__,map__23025,map__23025__$1,opts,before_jsload,on_jsload,reload_dependents,map__23026,map__23026__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23123 = setTimeout(inst_23122,(10));
var state_23179__$1 = (function (){var statearr_23250 = state_23179;
(statearr_23250[(33)] = inst_23121);

(statearr_23250[(34)] = inst_23116);

return statearr_23250;
})();
var statearr_23251_23317 = state_23179__$1;
(statearr_23251_23317[(2)] = inst_23123);

(statearr_23251_23317[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (16))){
var state_23179__$1 = state_23179;
var statearr_23252_23318 = state_23179__$1;
(statearr_23252_23318[(2)] = reload_dependents);

(statearr_23252_23318[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (38))){
var inst_23133 = (state_23179[(16)]);
var inst_23150 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23133);
var state_23179__$1 = state_23179;
var statearr_23253_23319 = state_23179__$1;
(statearr_23253_23319[(2)] = inst_23150);

(statearr_23253_23319[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (30))){
var state_23179__$1 = state_23179;
var statearr_23254_23320 = state_23179__$1;
(statearr_23254_23320[(2)] = null);

(statearr_23254_23320[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (10))){
var inst_23053 = (state_23179[(22)]);
var inst_23055 = cljs.core.chunked_seq_QMARK_.call(null,inst_23053);
var state_23179__$1 = state_23179;
if(inst_23055){
var statearr_23255_23321 = state_23179__$1;
(statearr_23255_23321[(1)] = (13));

} else {
var statearr_23256_23322 = state_23179__$1;
(statearr_23256_23322[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (18))){
var inst_23087 = (state_23179[(2)]);
var state_23179__$1 = state_23179;
if(cljs.core.truth_(inst_23087)){
var statearr_23257_23323 = state_23179__$1;
(statearr_23257_23323[(1)] = (19));

} else {
var statearr_23258_23324 = state_23179__$1;
(statearr_23258_23324[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (42))){
var state_23179__$1 = state_23179;
var statearr_23259_23325 = state_23179__$1;
(statearr_23259_23325[(2)] = null);

(statearr_23259_23325[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (37))){
var inst_23145 = (state_23179[(2)]);
var state_23179__$1 = state_23179;
var statearr_23260_23326 = state_23179__$1;
(statearr_23260_23326[(2)] = inst_23145);

(statearr_23260_23326[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23180 === (8))){
var inst_23040 = (state_23179[(7)]);
var inst_23053 = (state_23179[(22)]);
var inst_23053__$1 = cljs.core.seq.call(null,inst_23040);
var state_23179__$1 = (function (){var statearr_23261 = state_23179;
(statearr_23261[(22)] = inst_23053__$1);

return statearr_23261;
})();
if(inst_23053__$1){
var statearr_23262_23327 = state_23179__$1;
(statearr_23262_23327[(1)] = (10));

} else {
var statearr_23263_23328 = state_23179__$1;
(statearr_23263_23328[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19491__auto__,map__23025,map__23025__$1,opts,before_jsload,on_jsload,reload_dependents,map__23026,map__23026__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19379__auto__,c__19491__auto__,map__23025,map__23025__$1,opts,before_jsload,on_jsload,reload_dependents,map__23026,map__23026__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19380__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19380__auto____0 = (function (){
var statearr_23267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23267[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19380__auto__);

(statearr_23267[(1)] = (1));

return statearr_23267;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19380__auto____1 = (function (state_23179){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_23179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e23268){if((e23268 instanceof Object)){
var ex__19383__auto__ = e23268;
var statearr_23269_23329 = state_23179;
(statearr_23269_23329[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23330 = state_23179;
state_23179 = G__23330;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19380__auto__ = function(state_23179){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19380__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19380__auto____1.call(this,state_23179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19380__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19380__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto__,map__23025,map__23025__$1,opts,before_jsload,on_jsload,reload_dependents,map__23026,map__23026__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19493__auto__ = (function (){var statearr_23270 = f__19492__auto__.call(null);
(statearr_23270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto__);

return statearr_23270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto__,map__23025,map__23025__$1,opts,before_jsload,on_jsload,reload_dependents,map__23026,map__23026__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19491__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23333,link){
var map__23336 = p__23333;
var map__23336__$1 = ((((!((map__23336 == null)))?((((map__23336.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23336.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23336):map__23336);
var file = cljs.core.get.call(null,map__23336__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__23336,map__23336__$1,file){
return (function (p1__23331_SHARP_,p2__23332_SHARP_){
if(cljs.core._EQ_.call(null,p1__23331_SHARP_,p2__23332_SHARP_)){
return p1__23331_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__23336,map__23336__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23342){
var map__23343 = p__23342;
var map__23343__$1 = ((((!((map__23343 == null)))?((((map__23343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23343):map__23343);
var match_length = cljs.core.get.call(null,map__23343__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23343__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23338_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23338_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args23345 = [];
var len__17884__auto___23348 = arguments.length;
var i__17885__auto___23349 = (0);
while(true){
if((i__17885__auto___23349 < len__17884__auto___23348)){
args23345.push((arguments[i__17885__auto___23349]));

var G__23350 = (i__17885__auto___23349 + (1));
i__17885__auto___23349 = G__23350;
continue;
} else {
}
break;
}

var G__23347 = args23345.length;
switch (G__23347) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23345.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23352_SHARP_,p2__23353_SHARP_){
return cljs.core.assoc.call(null,p1__23352_SHARP_,cljs.core.get.call(null,p2__23353_SHARP_,key),p2__23353_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__23354){
var map__23357 = p__23354;
var map__23357__$1 = ((((!((map__23357 == null)))?((((map__23357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23357):map__23357);
var f_data = map__23357__$1;
var file = cljs.core.get.call(null,map__23357__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23359,files_msg){
var map__23366 = p__23359;
var map__23366__$1 = ((((!((map__23366 == null)))?((((map__23366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23366):map__23366);
var opts = map__23366__$1;
var on_cssload = cljs.core.get.call(null,map__23366__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23368_23372 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23369_23373 = null;
var count__23370_23374 = (0);
var i__23371_23375 = (0);
while(true){
if((i__23371_23375 < count__23370_23374)){
var f_23376 = cljs.core._nth.call(null,chunk__23369_23373,i__23371_23375);
figwheel.client.file_reloading.reload_css_file.call(null,f_23376);

var G__23377 = seq__23368_23372;
var G__23378 = chunk__23369_23373;
var G__23379 = count__23370_23374;
var G__23380 = (i__23371_23375 + (1));
seq__23368_23372 = G__23377;
chunk__23369_23373 = G__23378;
count__23370_23374 = G__23379;
i__23371_23375 = G__23380;
continue;
} else {
var temp__4425__auto___23381 = cljs.core.seq.call(null,seq__23368_23372);
if(temp__4425__auto___23381){
var seq__23368_23382__$1 = temp__4425__auto___23381;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23368_23382__$1)){
var c__17629__auto___23383 = cljs.core.chunk_first.call(null,seq__23368_23382__$1);
var G__23384 = cljs.core.chunk_rest.call(null,seq__23368_23382__$1);
var G__23385 = c__17629__auto___23383;
var G__23386 = cljs.core.count.call(null,c__17629__auto___23383);
var G__23387 = (0);
seq__23368_23372 = G__23384;
chunk__23369_23373 = G__23385;
count__23370_23374 = G__23386;
i__23371_23375 = G__23387;
continue;
} else {
var f_23388 = cljs.core.first.call(null,seq__23368_23382__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23388);

var G__23389 = cljs.core.next.call(null,seq__23368_23382__$1);
var G__23390 = null;
var G__23391 = (0);
var G__23392 = (0);
seq__23368_23372 = G__23389;
chunk__23369_23373 = G__23390;
count__23370_23374 = G__23391;
i__23371_23375 = G__23392;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__23366,map__23366__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__23366,map__23366__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map
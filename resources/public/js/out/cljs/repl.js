// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23409_23423 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23410_23424 = null;
var count__23411_23425 = (0);
var i__23412_23426 = (0);
while(true){
if((i__23412_23426 < count__23411_23425)){
var f_23427 = cljs.core._nth.call(null,chunk__23410_23424,i__23412_23426);
cljs.core.println.call(null,"  ",f_23427);

var G__23428 = seq__23409_23423;
var G__23429 = chunk__23410_23424;
var G__23430 = count__23411_23425;
var G__23431 = (i__23412_23426 + (1));
seq__23409_23423 = G__23428;
chunk__23410_23424 = G__23429;
count__23411_23425 = G__23430;
i__23412_23426 = G__23431;
continue;
} else {
var temp__4425__auto___23432 = cljs.core.seq.call(null,seq__23409_23423);
if(temp__4425__auto___23432){
var seq__23409_23433__$1 = temp__4425__auto___23432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23409_23433__$1)){
var c__17629__auto___23434 = cljs.core.chunk_first.call(null,seq__23409_23433__$1);
var G__23435 = cljs.core.chunk_rest.call(null,seq__23409_23433__$1);
var G__23436 = c__17629__auto___23434;
var G__23437 = cljs.core.count.call(null,c__17629__auto___23434);
var G__23438 = (0);
seq__23409_23423 = G__23435;
chunk__23410_23424 = G__23436;
count__23411_23425 = G__23437;
i__23412_23426 = G__23438;
continue;
} else {
var f_23439 = cljs.core.first.call(null,seq__23409_23433__$1);
cljs.core.println.call(null,"  ",f_23439);

var G__23440 = cljs.core.next.call(null,seq__23409_23433__$1);
var G__23441 = null;
var G__23442 = (0);
var G__23443 = (0);
seq__23409_23423 = G__23440;
chunk__23410_23424 = G__23441;
count__23411_23425 = G__23442;
i__23412_23426 = G__23443;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23444 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16826__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23444);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23444)))?cljs.core.second.call(null,arglists_23444):arglists_23444));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23413 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23414 = null;
var count__23415 = (0);
var i__23416 = (0);
while(true){
if((i__23416 < count__23415)){
var vec__23417 = cljs.core._nth.call(null,chunk__23414,i__23416);
var name = cljs.core.nth.call(null,vec__23417,(0),null);
var map__23418 = cljs.core.nth.call(null,vec__23417,(1),null);
var map__23418__$1 = ((((!((map__23418 == null)))?((((map__23418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23418):map__23418);
var doc = cljs.core.get.call(null,map__23418__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23418__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23445 = seq__23413;
var G__23446 = chunk__23414;
var G__23447 = count__23415;
var G__23448 = (i__23416 + (1));
seq__23413 = G__23445;
chunk__23414 = G__23446;
count__23415 = G__23447;
i__23416 = G__23448;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23413);
if(temp__4425__auto__){
var seq__23413__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23413__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__23413__$1);
var G__23449 = cljs.core.chunk_rest.call(null,seq__23413__$1);
var G__23450 = c__17629__auto__;
var G__23451 = cljs.core.count.call(null,c__17629__auto__);
var G__23452 = (0);
seq__23413 = G__23449;
chunk__23414 = G__23450;
count__23415 = G__23451;
i__23416 = G__23452;
continue;
} else {
var vec__23420 = cljs.core.first.call(null,seq__23413__$1);
var name = cljs.core.nth.call(null,vec__23420,(0),null);
var map__23421 = cljs.core.nth.call(null,vec__23420,(1),null);
var map__23421__$1 = ((((!((map__23421 == null)))?((((map__23421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23421):map__23421);
var doc = cljs.core.get.call(null,map__23421__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23421__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23453 = cljs.core.next.call(null,seq__23413__$1);
var G__23454 = null;
var G__23455 = (0);
var G__23456 = (0);
seq__23413 = G__23453;
chunk__23414 = G__23454;
count__23415 = G__23455;
i__23416 = G__23456;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
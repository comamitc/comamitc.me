// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17891__auto__ = [];
var len__17884__auto___23594 = arguments.length;
var i__17885__auto___23595 = (0);
while(true){
if((i__17885__auto___23595 < len__17884__auto___23594)){
args__17891__auto__.push((arguments[i__17885__auto___23595]));

var G__23596 = (i__17885__auto___23595 + (1));
i__17885__auto___23595 = G__23596;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((2) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17892__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__23586_23597 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__23587_23598 = null;
var count__23588_23599 = (0);
var i__23589_23600 = (0);
while(true){
if((i__23589_23600 < count__23588_23599)){
var k_23601 = cljs.core._nth.call(null,chunk__23587_23598,i__23589_23600);
e.setAttribute(cljs.core.name.call(null,k_23601),cljs.core.get.call(null,attrs,k_23601));

var G__23602 = seq__23586_23597;
var G__23603 = chunk__23587_23598;
var G__23604 = count__23588_23599;
var G__23605 = (i__23589_23600 + (1));
seq__23586_23597 = G__23602;
chunk__23587_23598 = G__23603;
count__23588_23599 = G__23604;
i__23589_23600 = G__23605;
continue;
} else {
var temp__4425__auto___23606 = cljs.core.seq.call(null,seq__23586_23597);
if(temp__4425__auto___23606){
var seq__23586_23607__$1 = temp__4425__auto___23606;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23586_23607__$1)){
var c__17629__auto___23608 = cljs.core.chunk_first.call(null,seq__23586_23607__$1);
var G__23609 = cljs.core.chunk_rest.call(null,seq__23586_23607__$1);
var G__23610 = c__17629__auto___23608;
var G__23611 = cljs.core.count.call(null,c__17629__auto___23608);
var G__23612 = (0);
seq__23586_23597 = G__23609;
chunk__23587_23598 = G__23610;
count__23588_23599 = G__23611;
i__23589_23600 = G__23612;
continue;
} else {
var k_23613 = cljs.core.first.call(null,seq__23586_23607__$1);
e.setAttribute(cljs.core.name.call(null,k_23613),cljs.core.get.call(null,attrs,k_23613));

var G__23614 = cljs.core.next.call(null,seq__23586_23607__$1);
var G__23615 = null;
var G__23616 = (0);
var G__23617 = (0);
seq__23586_23597 = G__23614;
chunk__23587_23598 = G__23615;
count__23588_23599 = G__23616;
i__23589_23600 = G__23617;
continue;
}
} else {
}
}
break;
}

var seq__23590_23618 = cljs.core.seq.call(null,children);
var chunk__23591_23619 = null;
var count__23592_23620 = (0);
var i__23593_23621 = (0);
while(true){
if((i__23593_23621 < count__23592_23620)){
var ch_23622 = cljs.core._nth.call(null,chunk__23591_23619,i__23593_23621);
e.appendChild(ch_23622);

var G__23623 = seq__23590_23618;
var G__23624 = chunk__23591_23619;
var G__23625 = count__23592_23620;
var G__23626 = (i__23593_23621 + (1));
seq__23590_23618 = G__23623;
chunk__23591_23619 = G__23624;
count__23592_23620 = G__23625;
i__23593_23621 = G__23626;
continue;
} else {
var temp__4425__auto___23627 = cljs.core.seq.call(null,seq__23590_23618);
if(temp__4425__auto___23627){
var seq__23590_23628__$1 = temp__4425__auto___23627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23590_23628__$1)){
var c__17629__auto___23629 = cljs.core.chunk_first.call(null,seq__23590_23628__$1);
var G__23630 = cljs.core.chunk_rest.call(null,seq__23590_23628__$1);
var G__23631 = c__17629__auto___23629;
var G__23632 = cljs.core.count.call(null,c__17629__auto___23629);
var G__23633 = (0);
seq__23590_23618 = G__23630;
chunk__23591_23619 = G__23631;
count__23592_23620 = G__23632;
i__23593_23621 = G__23633;
continue;
} else {
var ch_23634 = cljs.core.first.call(null,seq__23590_23628__$1);
e.appendChild(ch_23634);

var G__23635 = cljs.core.next.call(null,seq__23590_23628__$1);
var G__23636 = null;
var G__23637 = (0);
var G__23638 = (0);
seq__23590_23618 = G__23635;
chunk__23591_23619 = G__23636;
count__23592_23620 = G__23637;
i__23593_23621 = G__23638;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq23583){
var G__23584 = cljs.core.first.call(null,seq23583);
var seq23583__$1 = cljs.core.next.call(null,seq23583);
var G__23585 = cljs.core.first.call(null,seq23583__$1);
var seq23583__$2 = cljs.core.next.call(null,seq23583__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__23584,G__23585,seq23583__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17742__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17743__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__,hierarchy__17743__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__,hierarchy__17743__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17743__auto__,method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_23639 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_23639.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_23639.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_23639.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_23639);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__23640,st_map){
var map__23645 = p__23640;
var map__23645__$1 = ((((!((map__23645 == null)))?((((map__23645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23645):map__23645);
var container_el = cljs.core.get.call(null,map__23645__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__23645,map__23645__$1,container_el){
return (function (p__23647){
var vec__23648 = p__23647;
var k = cljs.core.nth.call(null,vec__23648,(0),null);
var v = cljs.core.nth.call(null,vec__23648,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__23645,map__23645__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__23649,dom_str){
var map__23652 = p__23649;
var map__23652__$1 = ((((!((map__23652 == null)))?((((map__23652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23652):map__23652);
var c = map__23652__$1;
var content_area_el = cljs.core.get.call(null,map__23652__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__23654){
var map__23657 = p__23654;
var map__23657__$1 = ((((!((map__23657 == null)))?((((map__23657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23657):map__23657);
var content_area_el = cljs.core.get.call(null,map__23657__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19491__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto__){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto__){
return (function (state_23700){
var state_val_23701 = (state_23700[(1)]);
if((state_val_23701 === (1))){
var inst_23685 = (state_23700[(7)]);
var inst_23685__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_23686 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_23687 = ["10px","10px","100%","68px","1.0"];
var inst_23688 = cljs.core.PersistentHashMap.fromArrays(inst_23686,inst_23687);
var inst_23689 = cljs.core.merge.call(null,inst_23688,style);
var inst_23690 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23685__$1,inst_23689);
var inst_23691 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_23685__$1,msg);
var inst_23692 = cljs.core.async.timeout.call(null,(300));
var state_23700__$1 = (function (){var statearr_23702 = state_23700;
(statearr_23702[(8)] = inst_23691);

(statearr_23702[(9)] = inst_23690);

(statearr_23702[(7)] = inst_23685__$1);

return statearr_23702;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23700__$1,(2),inst_23692);
} else {
if((state_val_23701 === (2))){
var inst_23685 = (state_23700[(7)]);
var inst_23694 = (state_23700[(2)]);
var inst_23695 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_23696 = ["auto"];
var inst_23697 = cljs.core.PersistentHashMap.fromArrays(inst_23695,inst_23696);
var inst_23698 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23685,inst_23697);
var state_23700__$1 = (function (){var statearr_23703 = state_23700;
(statearr_23703[(10)] = inst_23694);

return statearr_23703;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23700__$1,inst_23698);
} else {
return null;
}
}
});})(c__19491__auto__))
;
return ((function (switch__19379__auto__,c__19491__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19380__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19380__auto____0 = (function (){
var statearr_23707 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23707[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19380__auto__);

(statearr_23707[(1)] = (1));

return statearr_23707;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19380__auto____1 = (function (state_23700){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_23700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e23708){if((e23708 instanceof Object)){
var ex__19383__auto__ = e23708;
var statearr_23709_23711 = state_23700;
(statearr_23709_23711[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23712 = state_23700;
state_23700 = G__23712;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19380__auto__ = function(state_23700){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19380__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19380__auto____1.call(this,state_23700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19380__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19380__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto__))
})();
var state__19493__auto__ = (function (){var statearr_23710 = f__19492__auto__.call(null);
(statearr_23710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto__);

return statearr_23710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto__))
);

return c__19491__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__23714 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__23714,(0),null);
var ln = cljs.core.nth.call(null,vec__23714,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__23717 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__23717,(0),null);
var file_line = cljs.core.nth.call(null,vec__23717,(1),null);
var file_column = cljs.core.nth.call(null,vec__23717,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__23717,file_name,file_line,file_column){
return (function (p1__23715_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__23715_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__23717,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16826__auto__ = file_line;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
var and__16814__auto__ = cause;
if(cljs.core.truth_(and__16814__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16814__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__23720 = figwheel.client.heads_up.ensure_container.call(null);
var map__23720__$1 = ((((!((map__23720 == null)))?((((map__23720.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23720.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23720):map__23720);
var content_area_el = cljs.core.get.call(null,map__23720__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19491__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto__){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto__){
return (function (state_23768){
var state_val_23769 = (state_23768[(1)]);
if((state_val_23769 === (1))){
var inst_23751 = (state_23768[(7)]);
var inst_23751__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_23752 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_23753 = ["0.0"];
var inst_23754 = cljs.core.PersistentHashMap.fromArrays(inst_23752,inst_23753);
var inst_23755 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23751__$1,inst_23754);
var inst_23756 = cljs.core.async.timeout.call(null,(300));
var state_23768__$1 = (function (){var statearr_23770 = state_23768;
(statearr_23770[(8)] = inst_23755);

(statearr_23770[(7)] = inst_23751__$1);

return statearr_23770;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23768__$1,(2),inst_23756);
} else {
if((state_val_23769 === (2))){
var inst_23751 = (state_23768[(7)]);
var inst_23758 = (state_23768[(2)]);
var inst_23759 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_23760 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_23761 = cljs.core.PersistentHashMap.fromArrays(inst_23759,inst_23760);
var inst_23762 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23751,inst_23761);
var inst_23763 = cljs.core.async.timeout.call(null,(200));
var state_23768__$1 = (function (){var statearr_23771 = state_23768;
(statearr_23771[(9)] = inst_23758);

(statearr_23771[(10)] = inst_23762);

return statearr_23771;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23768__$1,(3),inst_23763);
} else {
if((state_val_23769 === (3))){
var inst_23751 = (state_23768[(7)]);
var inst_23765 = (state_23768[(2)]);
var inst_23766 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_23751,"");
var state_23768__$1 = (function (){var statearr_23772 = state_23768;
(statearr_23772[(11)] = inst_23765);

return statearr_23772;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23768__$1,inst_23766);
} else {
return null;
}
}
}
});})(c__19491__auto__))
;
return ((function (switch__19379__auto__,c__19491__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19380__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19380__auto____0 = (function (){
var statearr_23776 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23776[(0)] = figwheel$client$heads_up$clear_$_state_machine__19380__auto__);

(statearr_23776[(1)] = (1));

return statearr_23776;
});
var figwheel$client$heads_up$clear_$_state_machine__19380__auto____1 = (function (state_23768){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_23768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e23777){if((e23777 instanceof Object)){
var ex__19383__auto__ = e23777;
var statearr_23778_23780 = state_23768;
(statearr_23778_23780[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23781 = state_23768;
state_23768 = G__23781;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19380__auto__ = function(state_23768){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19380__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19380__auto____1.call(this,state_23768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19380__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19380__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto__))
})();
var state__19493__auto__ = (function (){var statearr_23779 = f__19492__auto__.call(null);
(statearr_23779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto__);

return statearr_23779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto__))
);

return c__19491__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19491__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto__){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto__){
return (function (state_23813){
var state_val_23814 = (state_23813[(1)]);
if((state_val_23814 === (1))){
var inst_23803 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_23813__$1 = state_23813;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23813__$1,(2),inst_23803);
} else {
if((state_val_23814 === (2))){
var inst_23805 = (state_23813[(2)]);
var inst_23806 = cljs.core.async.timeout.call(null,(400));
var state_23813__$1 = (function (){var statearr_23815 = state_23813;
(statearr_23815[(7)] = inst_23805);

return statearr_23815;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23813__$1,(3),inst_23806);
} else {
if((state_val_23814 === (3))){
var inst_23808 = (state_23813[(2)]);
var inst_23809 = figwheel.client.heads_up.clear.call(null);
var state_23813__$1 = (function (){var statearr_23816 = state_23813;
(statearr_23816[(8)] = inst_23808);

return statearr_23816;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23813__$1,(4),inst_23809);
} else {
if((state_val_23814 === (4))){
var inst_23811 = (state_23813[(2)]);
var state_23813__$1 = state_23813;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23813__$1,inst_23811);
} else {
return null;
}
}
}
}
});})(c__19491__auto__))
;
return ((function (switch__19379__auto__,c__19491__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19380__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19380__auto____0 = (function (){
var statearr_23820 = [null,null,null,null,null,null,null,null,null];
(statearr_23820[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19380__auto__);

(statearr_23820[(1)] = (1));

return statearr_23820;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19380__auto____1 = (function (state_23813){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_23813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e23821){if((e23821 instanceof Object)){
var ex__19383__auto__ = e23821;
var statearr_23822_23824 = state_23813;
(statearr_23822_23824[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23825 = state_23813;
state_23813 = G__23825;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19380__auto__ = function(state_23813){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19380__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19380__auto____1.call(this,state_23813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19380__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19380__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto__))
})();
var state__19493__auto__ = (function (){var statearr_23823 = f__19492__auto__.call(null);
(statearr_23823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto__);

return statearr_23823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto__))
);

return c__19491__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map
// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__23828 = cljs.core._EQ_;
var expr__23829 = (function (){var or__16826__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23828.call(null,"true",expr__23829))){
return true;
} else {
if(cljs.core.truth_(pred__23828.call(null,"false",expr__23829))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23829)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17891__auto__ = [];
var len__17884__auto___23832 = arguments.length;
var i__17885__auto___23833 = (0);
while(true){
if((i__17885__auto___23833 < len__17884__auto___23832)){
args__17891__auto__.push((arguments[i__17885__auto___23833]));

var G__23834 = (i__17885__auto___23833 + (1));
i__17885__auto___23833 = G__23834;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq23831){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23831));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23835){
var map__23838 = p__23835;
var map__23838__$1 = ((((!((map__23838 == null)))?((((map__23838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23838):map__23838);
var message = cljs.core.get.call(null,map__23838__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23838__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16826__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16814__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16814__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16814__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19491__auto___24000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto___24000,ch){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto___24000,ch){
return (function (state_23969){
var state_val_23970 = (state_23969[(1)]);
if((state_val_23970 === (7))){
var inst_23965 = (state_23969[(2)]);
var state_23969__$1 = state_23969;
var statearr_23971_24001 = state_23969__$1;
(statearr_23971_24001[(2)] = inst_23965);

(statearr_23971_24001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (1))){
var state_23969__$1 = state_23969;
var statearr_23972_24002 = state_23969__$1;
(statearr_23972_24002[(2)] = null);

(statearr_23972_24002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (4))){
var inst_23922 = (state_23969[(7)]);
var inst_23922__$1 = (state_23969[(2)]);
var state_23969__$1 = (function (){var statearr_23973 = state_23969;
(statearr_23973[(7)] = inst_23922__$1);

return statearr_23973;
})();
if(cljs.core.truth_(inst_23922__$1)){
var statearr_23974_24003 = state_23969__$1;
(statearr_23974_24003[(1)] = (5));

} else {
var statearr_23975_24004 = state_23969__$1;
(statearr_23975_24004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (15))){
var inst_23929 = (state_23969[(8)]);
var inst_23944 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23929);
var inst_23945 = cljs.core.first.call(null,inst_23944);
var inst_23946 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23945);
var inst_23947 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_23946)].join('');
var inst_23948 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23947);
var state_23969__$1 = state_23969;
var statearr_23976_24005 = state_23969__$1;
(statearr_23976_24005[(2)] = inst_23948);

(statearr_23976_24005[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (13))){
var inst_23953 = (state_23969[(2)]);
var state_23969__$1 = state_23969;
var statearr_23977_24006 = state_23969__$1;
(statearr_23977_24006[(2)] = inst_23953);

(statearr_23977_24006[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (6))){
var state_23969__$1 = state_23969;
var statearr_23978_24007 = state_23969__$1;
(statearr_23978_24007[(2)] = null);

(statearr_23978_24007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (17))){
var inst_23951 = (state_23969[(2)]);
var state_23969__$1 = state_23969;
var statearr_23979_24008 = state_23969__$1;
(statearr_23979_24008[(2)] = inst_23951);

(statearr_23979_24008[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (3))){
var inst_23967 = (state_23969[(2)]);
var state_23969__$1 = state_23969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23969__$1,inst_23967);
} else {
if((state_val_23970 === (12))){
var inst_23928 = (state_23969[(9)]);
var inst_23942 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23928,opts);
var state_23969__$1 = state_23969;
if(cljs.core.truth_(inst_23942)){
var statearr_23980_24009 = state_23969__$1;
(statearr_23980_24009[(1)] = (15));

} else {
var statearr_23981_24010 = state_23969__$1;
(statearr_23981_24010[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (2))){
var state_23969__$1 = state_23969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23969__$1,(4),ch);
} else {
if((state_val_23970 === (11))){
var inst_23929 = (state_23969[(8)]);
var inst_23934 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23935 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23929);
var inst_23936 = cljs.core.async.timeout.call(null,(1000));
var inst_23937 = [inst_23935,inst_23936];
var inst_23938 = (new cljs.core.PersistentVector(null,2,(5),inst_23934,inst_23937,null));
var state_23969__$1 = state_23969;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23969__$1,(14),inst_23938);
} else {
if((state_val_23970 === (9))){
var inst_23929 = (state_23969[(8)]);
var inst_23955 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23956 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23929);
var inst_23957 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23956);
var inst_23958 = [cljs.core.str("Not loading: "),cljs.core.str(inst_23957)].join('');
var inst_23959 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23958);
var state_23969__$1 = (function (){var statearr_23982 = state_23969;
(statearr_23982[(10)] = inst_23955);

return statearr_23982;
})();
var statearr_23983_24011 = state_23969__$1;
(statearr_23983_24011[(2)] = inst_23959);

(statearr_23983_24011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (5))){
var inst_23922 = (state_23969[(7)]);
var inst_23924 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23925 = (new cljs.core.PersistentArrayMap(null,2,inst_23924,null));
var inst_23926 = (new cljs.core.PersistentHashSet(null,inst_23925,null));
var inst_23927 = figwheel.client.focus_msgs.call(null,inst_23926,inst_23922);
var inst_23928 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23927);
var inst_23929 = cljs.core.first.call(null,inst_23927);
var inst_23930 = figwheel.client.autoload_QMARK_.call(null);
var state_23969__$1 = (function (){var statearr_23984 = state_23969;
(statearr_23984[(8)] = inst_23929);

(statearr_23984[(9)] = inst_23928);

return statearr_23984;
})();
if(cljs.core.truth_(inst_23930)){
var statearr_23985_24012 = state_23969__$1;
(statearr_23985_24012[(1)] = (8));

} else {
var statearr_23986_24013 = state_23969__$1;
(statearr_23986_24013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (14))){
var inst_23940 = (state_23969[(2)]);
var state_23969__$1 = state_23969;
var statearr_23987_24014 = state_23969__$1;
(statearr_23987_24014[(2)] = inst_23940);

(statearr_23987_24014[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (16))){
var state_23969__$1 = state_23969;
var statearr_23988_24015 = state_23969__$1;
(statearr_23988_24015[(2)] = null);

(statearr_23988_24015[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (10))){
var inst_23961 = (state_23969[(2)]);
var state_23969__$1 = (function (){var statearr_23989 = state_23969;
(statearr_23989[(11)] = inst_23961);

return statearr_23989;
})();
var statearr_23990_24016 = state_23969__$1;
(statearr_23990_24016[(2)] = null);

(statearr_23990_24016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23970 === (8))){
var inst_23928 = (state_23969[(9)]);
var inst_23932 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23928,opts);
var state_23969__$1 = state_23969;
if(cljs.core.truth_(inst_23932)){
var statearr_23991_24017 = state_23969__$1;
(statearr_23991_24017[(1)] = (11));

} else {
var statearr_23992_24018 = state_23969__$1;
(statearr_23992_24018[(1)] = (12));

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
});})(c__19491__auto___24000,ch))
;
return ((function (switch__19379__auto__,c__19491__auto___24000,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19380__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19380__auto____0 = (function (){
var statearr_23996 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23996[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19380__auto__);

(statearr_23996[(1)] = (1));

return statearr_23996;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19380__auto____1 = (function (state_23969){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_23969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e23997){if((e23997 instanceof Object)){
var ex__19383__auto__ = e23997;
var statearr_23998_24019 = state_23969;
(statearr_23998_24019[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23997;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24020 = state_23969;
state_23969 = G__24020;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19380__auto__ = function(state_23969){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19380__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19380__auto____1.call(this,state_23969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19380__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19380__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto___24000,ch))
})();
var state__19493__auto__ = (function (){var statearr_23999 = f__19492__auto__.call(null);
(statearr_23999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto___24000);

return statearr_23999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto___24000,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24021_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24021_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_24028 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24028){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24026 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24027 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24027;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24026;
}}catch (e24025){if((e24025 instanceof Error)){
var e = e24025;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24028], null));
} else {
var e = e24025;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24028))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24029){
var map__24036 = p__24029;
var map__24036__$1 = ((((!((map__24036 == null)))?((((map__24036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24036):map__24036);
var opts = map__24036__$1;
var build_id = cljs.core.get.call(null,map__24036__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24036,map__24036__$1,opts,build_id){
return (function (p__24038){
var vec__24039 = p__24038;
var map__24040 = cljs.core.nth.call(null,vec__24039,(0),null);
var map__24040__$1 = ((((!((map__24040 == null)))?((((map__24040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24040):map__24040);
var msg = map__24040__$1;
var msg_name = cljs.core.get.call(null,map__24040__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24039,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24039,map__24040,map__24040__$1,msg,msg_name,_,map__24036,map__24036__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24039,map__24040,map__24040__$1,msg,msg_name,_,map__24036,map__24036__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24036,map__24036__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24046){
var vec__24047 = p__24046;
var map__24048 = cljs.core.nth.call(null,vec__24047,(0),null);
var map__24048__$1 = ((((!((map__24048 == null)))?((((map__24048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24048):map__24048);
var msg = map__24048__$1;
var msg_name = cljs.core.get.call(null,map__24048__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24047,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24050){
var map__24060 = p__24050;
var map__24060__$1 = ((((!((map__24060 == null)))?((((map__24060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24060):map__24060);
var on_compile_warning = cljs.core.get.call(null,map__24060__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24060__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24060,map__24060__$1,on_compile_warning,on_compile_fail){
return (function (p__24062){
var vec__24063 = p__24062;
var map__24064 = cljs.core.nth.call(null,vec__24063,(0),null);
var map__24064__$1 = ((((!((map__24064 == null)))?((((map__24064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24064):map__24064);
var msg = map__24064__$1;
var msg_name = cljs.core.get.call(null,map__24064__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24063,(1));
var pred__24066 = cljs.core._EQ_;
var expr__24067 = msg_name;
if(cljs.core.truth_(pred__24066.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24067))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24066.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24067))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24060,map__24060__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19491__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto__,msg_hist,msg_names,msg){
return (function (state_24283){
var state_val_24284 = (state_24283[(1)]);
if((state_val_24284 === (7))){
var inst_24207 = (state_24283[(2)]);
var state_24283__$1 = state_24283;
if(cljs.core.truth_(inst_24207)){
var statearr_24285_24331 = state_24283__$1;
(statearr_24285_24331[(1)] = (8));

} else {
var statearr_24286_24332 = state_24283__$1;
(statearr_24286_24332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (20))){
var inst_24277 = (state_24283[(2)]);
var state_24283__$1 = state_24283;
var statearr_24287_24333 = state_24283__$1;
(statearr_24287_24333[(2)] = inst_24277);

(statearr_24287_24333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (27))){
var inst_24273 = (state_24283[(2)]);
var state_24283__$1 = state_24283;
var statearr_24288_24334 = state_24283__$1;
(statearr_24288_24334[(2)] = inst_24273);

(statearr_24288_24334[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (1))){
var inst_24200 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24283__$1 = state_24283;
if(cljs.core.truth_(inst_24200)){
var statearr_24289_24335 = state_24283__$1;
(statearr_24289_24335[(1)] = (2));

} else {
var statearr_24290_24336 = state_24283__$1;
(statearr_24290_24336[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (24))){
var inst_24275 = (state_24283[(2)]);
var state_24283__$1 = state_24283;
var statearr_24291_24337 = state_24283__$1;
(statearr_24291_24337[(2)] = inst_24275);

(statearr_24291_24337[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (4))){
var inst_24281 = (state_24283[(2)]);
var state_24283__$1 = state_24283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24283__$1,inst_24281);
} else {
if((state_val_24284 === (15))){
var inst_24279 = (state_24283[(2)]);
var state_24283__$1 = state_24283;
var statearr_24292_24338 = state_24283__$1;
(statearr_24292_24338[(2)] = inst_24279);

(statearr_24292_24338[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (21))){
var inst_24238 = (state_24283[(2)]);
var state_24283__$1 = state_24283;
var statearr_24293_24339 = state_24283__$1;
(statearr_24293_24339[(2)] = inst_24238);

(statearr_24293_24339[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (31))){
var inst_24262 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24283__$1 = state_24283;
if(cljs.core.truth_(inst_24262)){
var statearr_24294_24340 = state_24283__$1;
(statearr_24294_24340[(1)] = (34));

} else {
var statearr_24295_24341 = state_24283__$1;
(statearr_24295_24341[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (32))){
var inst_24271 = (state_24283[(2)]);
var state_24283__$1 = state_24283;
var statearr_24296_24342 = state_24283__$1;
(statearr_24296_24342[(2)] = inst_24271);

(statearr_24296_24342[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (33))){
var inst_24260 = (state_24283[(2)]);
var state_24283__$1 = state_24283;
var statearr_24297_24343 = state_24283__$1;
(statearr_24297_24343[(2)] = inst_24260);

(statearr_24297_24343[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (13))){
var inst_24221 = figwheel.client.heads_up.clear.call(null);
var state_24283__$1 = state_24283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24283__$1,(16),inst_24221);
} else {
if((state_val_24284 === (22))){
var inst_24242 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24243 = figwheel.client.heads_up.append_message.call(null,inst_24242);
var state_24283__$1 = state_24283;
var statearr_24298_24344 = state_24283__$1;
(statearr_24298_24344[(2)] = inst_24243);

(statearr_24298_24344[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (36))){
var inst_24269 = (state_24283[(2)]);
var state_24283__$1 = state_24283;
var statearr_24299_24345 = state_24283__$1;
(statearr_24299_24345[(2)] = inst_24269);

(statearr_24299_24345[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (29))){
var inst_24253 = (state_24283[(2)]);
var state_24283__$1 = state_24283;
var statearr_24300_24346 = state_24283__$1;
(statearr_24300_24346[(2)] = inst_24253);

(statearr_24300_24346[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (6))){
var inst_24202 = (state_24283[(7)]);
var state_24283__$1 = state_24283;
var statearr_24301_24347 = state_24283__$1;
(statearr_24301_24347[(2)] = inst_24202);

(statearr_24301_24347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (28))){
var inst_24249 = (state_24283[(2)]);
var inst_24250 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24251 = figwheel.client.heads_up.display_warning.call(null,inst_24250);
var state_24283__$1 = (function (){var statearr_24302 = state_24283;
(statearr_24302[(8)] = inst_24249);

return statearr_24302;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24283__$1,(29),inst_24251);
} else {
if((state_val_24284 === (25))){
var inst_24247 = figwheel.client.heads_up.clear.call(null);
var state_24283__$1 = state_24283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24283__$1,(28),inst_24247);
} else {
if((state_val_24284 === (34))){
var inst_24264 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24283__$1 = state_24283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24283__$1,(37),inst_24264);
} else {
if((state_val_24284 === (17))){
var inst_24229 = (state_24283[(2)]);
var state_24283__$1 = state_24283;
var statearr_24303_24348 = state_24283__$1;
(statearr_24303_24348[(2)] = inst_24229);

(statearr_24303_24348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (3))){
var inst_24219 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24283__$1 = state_24283;
if(cljs.core.truth_(inst_24219)){
var statearr_24304_24349 = state_24283__$1;
(statearr_24304_24349[(1)] = (13));

} else {
var statearr_24305_24350 = state_24283__$1;
(statearr_24305_24350[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (12))){
var inst_24215 = (state_24283[(2)]);
var state_24283__$1 = state_24283;
var statearr_24306_24351 = state_24283__$1;
(statearr_24306_24351[(2)] = inst_24215);

(statearr_24306_24351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (2))){
var inst_24202 = (state_24283[(7)]);
var inst_24202__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24283__$1 = (function (){var statearr_24307 = state_24283;
(statearr_24307[(7)] = inst_24202__$1);

return statearr_24307;
})();
if(cljs.core.truth_(inst_24202__$1)){
var statearr_24308_24352 = state_24283__$1;
(statearr_24308_24352[(1)] = (5));

} else {
var statearr_24309_24353 = state_24283__$1;
(statearr_24309_24353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (23))){
var inst_24245 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24283__$1 = state_24283;
if(cljs.core.truth_(inst_24245)){
var statearr_24310_24354 = state_24283__$1;
(statearr_24310_24354[(1)] = (25));

} else {
var statearr_24311_24355 = state_24283__$1;
(statearr_24311_24355[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (35))){
var state_24283__$1 = state_24283;
var statearr_24312_24356 = state_24283__$1;
(statearr_24312_24356[(2)] = null);

(statearr_24312_24356[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (19))){
var inst_24240 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24283__$1 = state_24283;
if(cljs.core.truth_(inst_24240)){
var statearr_24313_24357 = state_24283__$1;
(statearr_24313_24357[(1)] = (22));

} else {
var statearr_24314_24358 = state_24283__$1;
(statearr_24314_24358[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (11))){
var inst_24211 = (state_24283[(2)]);
var state_24283__$1 = state_24283;
var statearr_24315_24359 = state_24283__$1;
(statearr_24315_24359[(2)] = inst_24211);

(statearr_24315_24359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (9))){
var inst_24213 = figwheel.client.heads_up.clear.call(null);
var state_24283__$1 = state_24283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24283__$1,(12),inst_24213);
} else {
if((state_val_24284 === (5))){
var inst_24204 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24283__$1 = state_24283;
var statearr_24316_24360 = state_24283__$1;
(statearr_24316_24360[(2)] = inst_24204);

(statearr_24316_24360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (14))){
var inst_24231 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24283__$1 = state_24283;
if(cljs.core.truth_(inst_24231)){
var statearr_24317_24361 = state_24283__$1;
(statearr_24317_24361[(1)] = (18));

} else {
var statearr_24318_24362 = state_24283__$1;
(statearr_24318_24362[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (26))){
var inst_24255 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24283__$1 = state_24283;
if(cljs.core.truth_(inst_24255)){
var statearr_24319_24363 = state_24283__$1;
(statearr_24319_24363[(1)] = (30));

} else {
var statearr_24320_24364 = state_24283__$1;
(statearr_24320_24364[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (16))){
var inst_24223 = (state_24283[(2)]);
var inst_24224 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24225 = figwheel.client.format_messages.call(null,inst_24224);
var inst_24226 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24227 = figwheel.client.heads_up.display_error.call(null,inst_24225,inst_24226);
var state_24283__$1 = (function (){var statearr_24321 = state_24283;
(statearr_24321[(9)] = inst_24223);

return statearr_24321;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24283__$1,(17),inst_24227);
} else {
if((state_val_24284 === (30))){
var inst_24257 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24258 = figwheel.client.heads_up.display_warning.call(null,inst_24257);
var state_24283__$1 = state_24283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24283__$1,(33),inst_24258);
} else {
if((state_val_24284 === (10))){
var inst_24217 = (state_24283[(2)]);
var state_24283__$1 = state_24283;
var statearr_24322_24365 = state_24283__$1;
(statearr_24322_24365[(2)] = inst_24217);

(statearr_24322_24365[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (18))){
var inst_24233 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24234 = figwheel.client.format_messages.call(null,inst_24233);
var inst_24235 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24236 = figwheel.client.heads_up.display_error.call(null,inst_24234,inst_24235);
var state_24283__$1 = state_24283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24283__$1,(21),inst_24236);
} else {
if((state_val_24284 === (37))){
var inst_24266 = (state_24283[(2)]);
var state_24283__$1 = state_24283;
var statearr_24323_24366 = state_24283__$1;
(statearr_24323_24366[(2)] = inst_24266);

(statearr_24323_24366[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24284 === (8))){
var inst_24209 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24283__$1 = state_24283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24283__$1,(11),inst_24209);
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
});})(c__19491__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19379__auto__,c__19491__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19380__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19380__auto____0 = (function (){
var statearr_24327 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24327[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19380__auto__);

(statearr_24327[(1)] = (1));

return statearr_24327;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19380__auto____1 = (function (state_24283){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_24283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e24328){if((e24328 instanceof Object)){
var ex__19383__auto__ = e24328;
var statearr_24329_24367 = state_24283;
(statearr_24329_24367[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24368 = state_24283;
state_24283 = G__24368;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19380__auto__ = function(state_24283){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19380__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19380__auto____1.call(this,state_24283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19380__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19380__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto__,msg_hist,msg_names,msg))
})();
var state__19493__auto__ = (function (){var statearr_24330 = f__19492__auto__.call(null);
(statearr_24330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto__);

return statearr_24330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto__,msg_hist,msg_names,msg))
);

return c__19491__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19491__auto___24431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto___24431,ch){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto___24431,ch){
return (function (state_24414){
var state_val_24415 = (state_24414[(1)]);
if((state_val_24415 === (1))){
var state_24414__$1 = state_24414;
var statearr_24416_24432 = state_24414__$1;
(statearr_24416_24432[(2)] = null);

(statearr_24416_24432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24415 === (2))){
var state_24414__$1 = state_24414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24414__$1,(4),ch);
} else {
if((state_val_24415 === (3))){
var inst_24412 = (state_24414[(2)]);
var state_24414__$1 = state_24414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24414__$1,inst_24412);
} else {
if((state_val_24415 === (4))){
var inst_24402 = (state_24414[(7)]);
var inst_24402__$1 = (state_24414[(2)]);
var state_24414__$1 = (function (){var statearr_24417 = state_24414;
(statearr_24417[(7)] = inst_24402__$1);

return statearr_24417;
})();
if(cljs.core.truth_(inst_24402__$1)){
var statearr_24418_24433 = state_24414__$1;
(statearr_24418_24433[(1)] = (5));

} else {
var statearr_24419_24434 = state_24414__$1;
(statearr_24419_24434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24415 === (5))){
var inst_24402 = (state_24414[(7)]);
var inst_24404 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24402);
var state_24414__$1 = state_24414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24414__$1,(8),inst_24404);
} else {
if((state_val_24415 === (6))){
var state_24414__$1 = state_24414;
var statearr_24420_24435 = state_24414__$1;
(statearr_24420_24435[(2)] = null);

(statearr_24420_24435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24415 === (7))){
var inst_24410 = (state_24414[(2)]);
var state_24414__$1 = state_24414;
var statearr_24421_24436 = state_24414__$1;
(statearr_24421_24436[(2)] = inst_24410);

(statearr_24421_24436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24415 === (8))){
var inst_24406 = (state_24414[(2)]);
var state_24414__$1 = (function (){var statearr_24422 = state_24414;
(statearr_24422[(8)] = inst_24406);

return statearr_24422;
})();
var statearr_24423_24437 = state_24414__$1;
(statearr_24423_24437[(2)] = null);

(statearr_24423_24437[(1)] = (2));


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
});})(c__19491__auto___24431,ch))
;
return ((function (switch__19379__auto__,c__19491__auto___24431,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19380__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19380__auto____0 = (function (){
var statearr_24427 = [null,null,null,null,null,null,null,null,null];
(statearr_24427[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19380__auto__);

(statearr_24427[(1)] = (1));

return statearr_24427;
});
var figwheel$client$heads_up_plugin_$_state_machine__19380__auto____1 = (function (state_24414){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_24414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e24428){if((e24428 instanceof Object)){
var ex__19383__auto__ = e24428;
var statearr_24429_24438 = state_24414;
(statearr_24429_24438[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24439 = state_24414;
state_24414 = G__24439;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19380__auto__ = function(state_24414){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19380__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19380__auto____1.call(this,state_24414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19380__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19380__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto___24431,ch))
})();
var state__19493__auto__ = (function (){var statearr_24430 = f__19492__auto__.call(null);
(statearr_24430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto___24431);

return statearr_24430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto___24431,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19491__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto__){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto__){
return (function (state_24460){
var state_val_24461 = (state_24460[(1)]);
if((state_val_24461 === (1))){
var inst_24455 = cljs.core.async.timeout.call(null,(3000));
var state_24460__$1 = state_24460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24460__$1,(2),inst_24455);
} else {
if((state_val_24461 === (2))){
var inst_24457 = (state_24460[(2)]);
var inst_24458 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24460__$1 = (function (){var statearr_24462 = state_24460;
(statearr_24462[(7)] = inst_24457);

return statearr_24462;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24460__$1,inst_24458);
} else {
return null;
}
}
});})(c__19491__auto__))
;
return ((function (switch__19379__auto__,c__19491__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19380__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19380__auto____0 = (function (){
var statearr_24466 = [null,null,null,null,null,null,null,null];
(statearr_24466[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19380__auto__);

(statearr_24466[(1)] = (1));

return statearr_24466;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19380__auto____1 = (function (state_24460){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_24460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e24467){if((e24467 instanceof Object)){
var ex__19383__auto__ = e24467;
var statearr_24468_24470 = state_24460;
(statearr_24468_24470[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24471 = state_24460;
state_24460 = G__24471;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19380__auto__ = function(state_24460){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19380__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19380__auto____1.call(this,state_24460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19380__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19380__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto__))
})();
var state__19493__auto__ = (function (){var statearr_24469 = f__19492__auto__.call(null);
(statearr_24469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto__);

return statearr_24469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto__))
);

return c__19491__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24472){
var map__24479 = p__24472;
var map__24479__$1 = ((((!((map__24479 == null)))?((((map__24479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24479):map__24479);
var ed = map__24479__$1;
var formatted_exception = cljs.core.get.call(null,map__24479__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24479__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24479__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24481_24485 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24482_24486 = null;
var count__24483_24487 = (0);
var i__24484_24488 = (0);
while(true){
if((i__24484_24488 < count__24483_24487)){
var msg_24489 = cljs.core._nth.call(null,chunk__24482_24486,i__24484_24488);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24489);

var G__24490 = seq__24481_24485;
var G__24491 = chunk__24482_24486;
var G__24492 = count__24483_24487;
var G__24493 = (i__24484_24488 + (1));
seq__24481_24485 = G__24490;
chunk__24482_24486 = G__24491;
count__24483_24487 = G__24492;
i__24484_24488 = G__24493;
continue;
} else {
var temp__4425__auto___24494 = cljs.core.seq.call(null,seq__24481_24485);
if(temp__4425__auto___24494){
var seq__24481_24495__$1 = temp__4425__auto___24494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24481_24495__$1)){
var c__17629__auto___24496 = cljs.core.chunk_first.call(null,seq__24481_24495__$1);
var G__24497 = cljs.core.chunk_rest.call(null,seq__24481_24495__$1);
var G__24498 = c__17629__auto___24496;
var G__24499 = cljs.core.count.call(null,c__17629__auto___24496);
var G__24500 = (0);
seq__24481_24485 = G__24497;
chunk__24482_24486 = G__24498;
count__24483_24487 = G__24499;
i__24484_24488 = G__24500;
continue;
} else {
var msg_24501 = cljs.core.first.call(null,seq__24481_24495__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24501);

var G__24502 = cljs.core.next.call(null,seq__24481_24495__$1);
var G__24503 = null;
var G__24504 = (0);
var G__24505 = (0);
seq__24481_24485 = G__24502;
chunk__24482_24486 = G__24503;
count__24483_24487 = G__24504;
i__24484_24488 = G__24505;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24506){
var map__24509 = p__24506;
var map__24509__$1 = ((((!((map__24509 == null)))?((((map__24509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24509):map__24509);
var w = map__24509__$1;
var message = cljs.core.get.call(null,map__24509__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16814__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16814__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16814__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24517 = cljs.core.seq.call(null,plugins);
var chunk__24518 = null;
var count__24519 = (0);
var i__24520 = (0);
while(true){
if((i__24520 < count__24519)){
var vec__24521 = cljs.core._nth.call(null,chunk__24518,i__24520);
var k = cljs.core.nth.call(null,vec__24521,(0),null);
var plugin = cljs.core.nth.call(null,vec__24521,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24523 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24517,chunk__24518,count__24519,i__24520,pl_24523,vec__24521,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24523.call(null,msg_hist);
});})(seq__24517,chunk__24518,count__24519,i__24520,pl_24523,vec__24521,k,plugin))
);
} else {
}

var G__24524 = seq__24517;
var G__24525 = chunk__24518;
var G__24526 = count__24519;
var G__24527 = (i__24520 + (1));
seq__24517 = G__24524;
chunk__24518 = G__24525;
count__24519 = G__24526;
i__24520 = G__24527;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24517);
if(temp__4425__auto__){
var seq__24517__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24517__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__24517__$1);
var G__24528 = cljs.core.chunk_rest.call(null,seq__24517__$1);
var G__24529 = c__17629__auto__;
var G__24530 = cljs.core.count.call(null,c__17629__auto__);
var G__24531 = (0);
seq__24517 = G__24528;
chunk__24518 = G__24529;
count__24519 = G__24530;
i__24520 = G__24531;
continue;
} else {
var vec__24522 = cljs.core.first.call(null,seq__24517__$1);
var k = cljs.core.nth.call(null,vec__24522,(0),null);
var plugin = cljs.core.nth.call(null,vec__24522,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24532 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24517,chunk__24518,count__24519,i__24520,pl_24532,vec__24522,k,plugin,seq__24517__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24532.call(null,msg_hist);
});})(seq__24517,chunk__24518,count__24519,i__24520,pl_24532,vec__24522,k,plugin,seq__24517__$1,temp__4425__auto__))
);
} else {
}

var G__24533 = cljs.core.next.call(null,seq__24517__$1);
var G__24534 = null;
var G__24535 = (0);
var G__24536 = (0);
seq__24517 = G__24533;
chunk__24518 = G__24534;
count__24519 = G__24535;
i__24520 = G__24536;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args24537 = [];
var len__17884__auto___24540 = arguments.length;
var i__17885__auto___24541 = (0);
while(true){
if((i__17885__auto___24541 < len__17884__auto___24540)){
args24537.push((arguments[i__17885__auto___24541]));

var G__24542 = (i__17885__auto___24541 + (1));
i__17885__auto___24541 = G__24542;
continue;
} else {
}
break;
}

var G__24539 = args24537.length;
switch (G__24539) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24537.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17891__auto__ = [];
var len__17884__auto___24548 = arguments.length;
var i__17885__auto___24549 = (0);
while(true){
if((i__17885__auto___24549 < len__17884__auto___24548)){
args__17891__auto__.push((arguments[i__17885__auto___24549]));

var G__24550 = (i__17885__auto___24549 + (1));
i__17885__auto___24549 = G__24550;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24545){
var map__24546 = p__24545;
var map__24546__$1 = ((((!((map__24546 == null)))?((((map__24546.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24546.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24546):map__24546);
var opts = map__24546__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24544){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24544));
});

//# sourceMappingURL=client.js.map
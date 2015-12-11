// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args19536 = [];
var len__17884__auto___19542 = arguments.length;
var i__17885__auto___19543 = (0);
while(true){
if((i__17885__auto___19543 < len__17884__auto___19542)){
args19536.push((arguments[i__17885__auto___19543]));

var G__19544 = (i__17885__auto___19543 + (1));
i__17885__auto___19543 = G__19544;
continue;
} else {
}
break;
}

var G__19538 = args19536.length;
switch (G__19538) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19536.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19539 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19539 = (function (f,blockable,meta19540){
this.f = f;
this.blockable = blockable;
this.meta19540 = meta19540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19541,meta19540__$1){
var self__ = this;
var _19541__$1 = this;
return (new cljs.core.async.t_cljs$core$async19539(self__.f,self__.blockable,meta19540__$1));
});

cljs.core.async.t_cljs$core$async19539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19541){
var self__ = this;
var _19541__$1 = this;
return self__.meta19540;
});

cljs.core.async.t_cljs$core$async19539.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19539.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19539.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19539.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19539.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19540","meta19540",-1783122168,null)], null);
});

cljs.core.async.t_cljs$core$async19539.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19539";

cljs.core.async.t_cljs$core$async19539.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async19539");
});

cljs.core.async.__GT_t_cljs$core$async19539 = (function cljs$core$async$__GT_t_cljs$core$async19539(f__$1,blockable__$1,meta19540){
return (new cljs.core.async.t_cljs$core$async19539(f__$1,blockable__$1,meta19540));
});

}

return (new cljs.core.async.t_cljs$core$async19539(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args19548 = [];
var len__17884__auto___19551 = arguments.length;
var i__17885__auto___19552 = (0);
while(true){
if((i__17885__auto___19552 < len__17884__auto___19551)){
args19548.push((arguments[i__17885__auto___19552]));

var G__19553 = (i__17885__auto___19552 + (1));
i__17885__auto___19552 = G__19553;
continue;
} else {
}
break;
}

var G__19550 = args19548.length;
switch (G__19550) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19548.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args19555 = [];
var len__17884__auto___19558 = arguments.length;
var i__17885__auto___19559 = (0);
while(true){
if((i__17885__auto___19559 < len__17884__auto___19558)){
args19555.push((arguments[i__17885__auto___19559]));

var G__19560 = (i__17885__auto___19559 + (1));
i__17885__auto___19559 = G__19560;
continue;
} else {
}
break;
}

var G__19557 = args19555.length;
switch (G__19557) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19555.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args19562 = [];
var len__17884__auto___19565 = arguments.length;
var i__17885__auto___19566 = (0);
while(true){
if((i__17885__auto___19566 < len__17884__auto___19565)){
args19562.push((arguments[i__17885__auto___19566]));

var G__19567 = (i__17885__auto___19566 + (1));
i__17885__auto___19566 = G__19567;
continue;
} else {
}
break;
}

var G__19564 = args19562.length;
switch (G__19564) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19562.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19569 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19569);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19569,ret){
return (function (){
return fn1.call(null,val_19569);
});})(val_19569,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args19570 = [];
var len__17884__auto___19573 = arguments.length;
var i__17885__auto___19574 = (0);
while(true){
if((i__17885__auto___19574 < len__17884__auto___19573)){
args19570.push((arguments[i__17885__auto___19574]));

var G__19575 = (i__17885__auto___19574 + (1));
i__17885__auto___19574 = G__19575;
continue;
} else {
}
break;
}

var G__19572 = args19570.length;
switch (G__19572) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19570.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17729__auto___19577 = n;
var x_19578 = (0);
while(true){
if((x_19578 < n__17729__auto___19577)){
(a[x_19578] = (0));

var G__19579 = (x_19578 + (1));
x_19578 = G__19579;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19580 = (i + (1));
i = G__19580;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19584 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19584 = (function (alt_flag,flag,meta19585){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19585 = meta19585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19586,meta19585__$1){
var self__ = this;
var _19586__$1 = this;
return (new cljs.core.async.t_cljs$core$async19584(self__.alt_flag,self__.flag,meta19585__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19584.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19586){
var self__ = this;
var _19586__$1 = this;
return self__.meta19585;
});})(flag))
;

cljs.core.async.t_cljs$core$async19584.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19584.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19584.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19584.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19584.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19585","meta19585",1042675765,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19584.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19584.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19584";

cljs.core.async.t_cljs$core$async19584.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async19584");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19584 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19584(alt_flag__$1,flag__$1,meta19585){
return (new cljs.core.async.t_cljs$core$async19584(alt_flag__$1,flag__$1,meta19585));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19584(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19590 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19590 = (function (alt_handler,flag,cb,meta19591){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19591 = meta19591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19592,meta19591__$1){
var self__ = this;
var _19592__$1 = this;
return (new cljs.core.async.t_cljs$core$async19590(self__.alt_handler,self__.flag,self__.cb,meta19591__$1));
});

cljs.core.async.t_cljs$core$async19590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19592){
var self__ = this;
var _19592__$1 = this;
return self__.meta19591;
});

cljs.core.async.t_cljs$core$async19590.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19590.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19590.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19590.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19590.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19591","meta19591",1580726994,null)], null);
});

cljs.core.async.t_cljs$core$async19590.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19590.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19590";

cljs.core.async.t_cljs$core$async19590.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async19590");
});

cljs.core.async.__GT_t_cljs$core$async19590 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19590(alt_handler__$1,flag__$1,cb__$1,meta19591){
return (new cljs.core.async.t_cljs$core$async19590(alt_handler__$1,flag__$1,cb__$1,meta19591));
});

}

return (new cljs.core.async.t_cljs$core$async19590(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19593_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19593_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19594_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19594_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16826__auto__ = wport;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19595 = (i + (1));
i = G__19595;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16826__auto__ = ret;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16814__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16814__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___19601 = arguments.length;
var i__17885__auto___19602 = (0);
while(true){
if((i__17885__auto___19602 < len__17884__auto___19601)){
args__17891__auto__.push((arguments[i__17885__auto___19602]));

var G__19603 = (i__17885__auto___19602 + (1));
i__17885__auto___19602 = G__19603;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19598){
var map__19599 = p__19598;
var map__19599__$1 = ((((!((map__19599 == null)))?((((map__19599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19599):map__19599);
var opts = map__19599__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19596){
var G__19597 = cljs.core.first.call(null,seq19596);
var seq19596__$1 = cljs.core.next.call(null,seq19596);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19597,seq19596__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args19604 = [];
var len__17884__auto___19654 = arguments.length;
var i__17885__auto___19655 = (0);
while(true){
if((i__17885__auto___19655 < len__17884__auto___19654)){
args19604.push((arguments[i__17885__auto___19655]));

var G__19656 = (i__17885__auto___19655 + (1));
i__17885__auto___19655 = G__19656;
continue;
} else {
}
break;
}

var G__19606 = args19604.length;
switch (G__19606) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19604.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19491__auto___19658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto___19658){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto___19658){
return (function (state_19630){
var state_val_19631 = (state_19630[(1)]);
if((state_val_19631 === (7))){
var inst_19626 = (state_19630[(2)]);
var state_19630__$1 = state_19630;
var statearr_19632_19659 = state_19630__$1;
(statearr_19632_19659[(2)] = inst_19626);

(statearr_19632_19659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19631 === (1))){
var state_19630__$1 = state_19630;
var statearr_19633_19660 = state_19630__$1;
(statearr_19633_19660[(2)] = null);

(statearr_19633_19660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19631 === (4))){
var inst_19609 = (state_19630[(7)]);
var inst_19609__$1 = (state_19630[(2)]);
var inst_19610 = (inst_19609__$1 == null);
var state_19630__$1 = (function (){var statearr_19634 = state_19630;
(statearr_19634[(7)] = inst_19609__$1);

return statearr_19634;
})();
if(cljs.core.truth_(inst_19610)){
var statearr_19635_19661 = state_19630__$1;
(statearr_19635_19661[(1)] = (5));

} else {
var statearr_19636_19662 = state_19630__$1;
(statearr_19636_19662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19631 === (13))){
var state_19630__$1 = state_19630;
var statearr_19637_19663 = state_19630__$1;
(statearr_19637_19663[(2)] = null);

(statearr_19637_19663[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19631 === (6))){
var inst_19609 = (state_19630[(7)]);
var state_19630__$1 = state_19630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19630__$1,(11),to,inst_19609);
} else {
if((state_val_19631 === (3))){
var inst_19628 = (state_19630[(2)]);
var state_19630__$1 = state_19630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19630__$1,inst_19628);
} else {
if((state_val_19631 === (12))){
var state_19630__$1 = state_19630;
var statearr_19638_19664 = state_19630__$1;
(statearr_19638_19664[(2)] = null);

(statearr_19638_19664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19631 === (2))){
var state_19630__$1 = state_19630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19630__$1,(4),from);
} else {
if((state_val_19631 === (11))){
var inst_19619 = (state_19630[(2)]);
var state_19630__$1 = state_19630;
if(cljs.core.truth_(inst_19619)){
var statearr_19639_19665 = state_19630__$1;
(statearr_19639_19665[(1)] = (12));

} else {
var statearr_19640_19666 = state_19630__$1;
(statearr_19640_19666[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19631 === (9))){
var state_19630__$1 = state_19630;
var statearr_19641_19667 = state_19630__$1;
(statearr_19641_19667[(2)] = null);

(statearr_19641_19667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19631 === (5))){
var state_19630__$1 = state_19630;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19642_19668 = state_19630__$1;
(statearr_19642_19668[(1)] = (8));

} else {
var statearr_19643_19669 = state_19630__$1;
(statearr_19643_19669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19631 === (14))){
var inst_19624 = (state_19630[(2)]);
var state_19630__$1 = state_19630;
var statearr_19644_19670 = state_19630__$1;
(statearr_19644_19670[(2)] = inst_19624);

(statearr_19644_19670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19631 === (10))){
var inst_19616 = (state_19630[(2)]);
var state_19630__$1 = state_19630;
var statearr_19645_19671 = state_19630__$1;
(statearr_19645_19671[(2)] = inst_19616);

(statearr_19645_19671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19631 === (8))){
var inst_19613 = cljs.core.async.close_BANG_.call(null,to);
var state_19630__$1 = state_19630;
var statearr_19646_19672 = state_19630__$1;
(statearr_19646_19672[(2)] = inst_19613);

(statearr_19646_19672[(1)] = (10));


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
});})(c__19491__auto___19658))
;
return ((function (switch__19379__auto__,c__19491__auto___19658){
return (function() {
var cljs$core$async$state_machine__19380__auto__ = null;
var cljs$core$async$state_machine__19380__auto____0 = (function (){
var statearr_19650 = [null,null,null,null,null,null,null,null];
(statearr_19650[(0)] = cljs$core$async$state_machine__19380__auto__);

(statearr_19650[(1)] = (1));

return statearr_19650;
});
var cljs$core$async$state_machine__19380__auto____1 = (function (state_19630){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_19630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e19651){if((e19651 instanceof Object)){
var ex__19383__auto__ = e19651;
var statearr_19652_19673 = state_19630;
(statearr_19652_19673[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19674 = state_19630;
state_19630 = G__19674;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
cljs$core$async$state_machine__19380__auto__ = function(state_19630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19380__auto____1.call(this,state_19630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19380__auto____0;
cljs$core$async$state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19380__auto____1;
return cljs$core$async$state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto___19658))
})();
var state__19493__auto__ = (function (){var statearr_19653 = f__19492__auto__.call(null);
(statearr_19653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto___19658);

return statearr_19653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto___19658))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__19858){
var vec__19859 = p__19858;
var v = cljs.core.nth.call(null,vec__19859,(0),null);
var p = cljs.core.nth.call(null,vec__19859,(1),null);
var job = vec__19859;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19491__auto___20041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto___20041,res,vec__19859,v,p,job,jobs,results){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto___20041,res,vec__19859,v,p,job,jobs,results){
return (function (state_19864){
var state_val_19865 = (state_19864[(1)]);
if((state_val_19865 === (1))){
var state_19864__$1 = state_19864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19864__$1,(2),res,v);
} else {
if((state_val_19865 === (2))){
var inst_19861 = (state_19864[(2)]);
var inst_19862 = cljs.core.async.close_BANG_.call(null,res);
var state_19864__$1 = (function (){var statearr_19866 = state_19864;
(statearr_19866[(7)] = inst_19861);

return statearr_19866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19864__$1,inst_19862);
} else {
return null;
}
}
});})(c__19491__auto___20041,res,vec__19859,v,p,job,jobs,results))
;
return ((function (switch__19379__auto__,c__19491__auto___20041,res,vec__19859,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____0 = (function (){
var statearr_19870 = [null,null,null,null,null,null,null,null];
(statearr_19870[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__);

(statearr_19870[(1)] = (1));

return statearr_19870;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____1 = (function (state_19864){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_19864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e19871){if((e19871 instanceof Object)){
var ex__19383__auto__ = e19871;
var statearr_19872_20042 = state_19864;
(statearr_19872_20042[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20043 = state_19864;
state_19864 = G__20043;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__ = function(state_19864){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____1.call(this,state_19864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto___20041,res,vec__19859,v,p,job,jobs,results))
})();
var state__19493__auto__ = (function (){var statearr_19873 = f__19492__auto__.call(null);
(statearr_19873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto___20041);

return statearr_19873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto___20041,res,vec__19859,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19874){
var vec__19875 = p__19874;
var v = cljs.core.nth.call(null,vec__19875,(0),null);
var p = cljs.core.nth.call(null,vec__19875,(1),null);
var job = vec__19875;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17729__auto___20044 = n;
var __20045 = (0);
while(true){
if((__20045 < n__17729__auto___20044)){
var G__19876_20046 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19876_20046) {
case "compute":
var c__19491__auto___20048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20045,c__19491__auto___20048,G__19876_20046,n__17729__auto___20044,jobs,results,process,async){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (__20045,c__19491__auto___20048,G__19876_20046,n__17729__auto___20044,jobs,results,process,async){
return (function (state_19889){
var state_val_19890 = (state_19889[(1)]);
if((state_val_19890 === (1))){
var state_19889__$1 = state_19889;
var statearr_19891_20049 = state_19889__$1;
(statearr_19891_20049[(2)] = null);

(statearr_19891_20049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19890 === (2))){
var state_19889__$1 = state_19889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19889__$1,(4),jobs);
} else {
if((state_val_19890 === (3))){
var inst_19887 = (state_19889[(2)]);
var state_19889__$1 = state_19889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19889__$1,inst_19887);
} else {
if((state_val_19890 === (4))){
var inst_19879 = (state_19889[(2)]);
var inst_19880 = process.call(null,inst_19879);
var state_19889__$1 = state_19889;
if(cljs.core.truth_(inst_19880)){
var statearr_19892_20050 = state_19889__$1;
(statearr_19892_20050[(1)] = (5));

} else {
var statearr_19893_20051 = state_19889__$1;
(statearr_19893_20051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19890 === (5))){
var state_19889__$1 = state_19889;
var statearr_19894_20052 = state_19889__$1;
(statearr_19894_20052[(2)] = null);

(statearr_19894_20052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19890 === (6))){
var state_19889__$1 = state_19889;
var statearr_19895_20053 = state_19889__$1;
(statearr_19895_20053[(2)] = null);

(statearr_19895_20053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19890 === (7))){
var inst_19885 = (state_19889[(2)]);
var state_19889__$1 = state_19889;
var statearr_19896_20054 = state_19889__$1;
(statearr_19896_20054[(2)] = inst_19885);

(statearr_19896_20054[(1)] = (3));


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
});})(__20045,c__19491__auto___20048,G__19876_20046,n__17729__auto___20044,jobs,results,process,async))
;
return ((function (__20045,switch__19379__auto__,c__19491__auto___20048,G__19876_20046,n__17729__auto___20044,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____0 = (function (){
var statearr_19900 = [null,null,null,null,null,null,null];
(statearr_19900[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__);

(statearr_19900[(1)] = (1));

return statearr_19900;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____1 = (function (state_19889){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_19889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e19901){if((e19901 instanceof Object)){
var ex__19383__auto__ = e19901;
var statearr_19902_20055 = state_19889;
(statearr_19902_20055[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20056 = state_19889;
state_19889 = G__20056;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__ = function(state_19889){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____1.call(this,state_19889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__;
})()
;})(__20045,switch__19379__auto__,c__19491__auto___20048,G__19876_20046,n__17729__auto___20044,jobs,results,process,async))
})();
var state__19493__auto__ = (function (){var statearr_19903 = f__19492__auto__.call(null);
(statearr_19903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto___20048);

return statearr_19903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(__20045,c__19491__auto___20048,G__19876_20046,n__17729__auto___20044,jobs,results,process,async))
);


break;
case "async":
var c__19491__auto___20057 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20045,c__19491__auto___20057,G__19876_20046,n__17729__auto___20044,jobs,results,process,async){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (__20045,c__19491__auto___20057,G__19876_20046,n__17729__auto___20044,jobs,results,process,async){
return (function (state_19916){
var state_val_19917 = (state_19916[(1)]);
if((state_val_19917 === (1))){
var state_19916__$1 = state_19916;
var statearr_19918_20058 = state_19916__$1;
(statearr_19918_20058[(2)] = null);

(statearr_19918_20058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19917 === (2))){
var state_19916__$1 = state_19916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19916__$1,(4),jobs);
} else {
if((state_val_19917 === (3))){
var inst_19914 = (state_19916[(2)]);
var state_19916__$1 = state_19916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19916__$1,inst_19914);
} else {
if((state_val_19917 === (4))){
var inst_19906 = (state_19916[(2)]);
var inst_19907 = async.call(null,inst_19906);
var state_19916__$1 = state_19916;
if(cljs.core.truth_(inst_19907)){
var statearr_19919_20059 = state_19916__$1;
(statearr_19919_20059[(1)] = (5));

} else {
var statearr_19920_20060 = state_19916__$1;
(statearr_19920_20060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19917 === (5))){
var state_19916__$1 = state_19916;
var statearr_19921_20061 = state_19916__$1;
(statearr_19921_20061[(2)] = null);

(statearr_19921_20061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19917 === (6))){
var state_19916__$1 = state_19916;
var statearr_19922_20062 = state_19916__$1;
(statearr_19922_20062[(2)] = null);

(statearr_19922_20062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19917 === (7))){
var inst_19912 = (state_19916[(2)]);
var state_19916__$1 = state_19916;
var statearr_19923_20063 = state_19916__$1;
(statearr_19923_20063[(2)] = inst_19912);

(statearr_19923_20063[(1)] = (3));


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
});})(__20045,c__19491__auto___20057,G__19876_20046,n__17729__auto___20044,jobs,results,process,async))
;
return ((function (__20045,switch__19379__auto__,c__19491__auto___20057,G__19876_20046,n__17729__auto___20044,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____0 = (function (){
var statearr_19927 = [null,null,null,null,null,null,null];
(statearr_19927[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__);

(statearr_19927[(1)] = (1));

return statearr_19927;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____1 = (function (state_19916){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_19916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e19928){if((e19928 instanceof Object)){
var ex__19383__auto__ = e19928;
var statearr_19929_20064 = state_19916;
(statearr_19929_20064[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20065 = state_19916;
state_19916 = G__20065;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__ = function(state_19916){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____1.call(this,state_19916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__;
})()
;})(__20045,switch__19379__auto__,c__19491__auto___20057,G__19876_20046,n__17729__auto___20044,jobs,results,process,async))
})();
var state__19493__auto__ = (function (){var statearr_19930 = f__19492__auto__.call(null);
(statearr_19930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto___20057);

return statearr_19930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(__20045,c__19491__auto___20057,G__19876_20046,n__17729__auto___20044,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20066 = (__20045 + (1));
__20045 = G__20066;
continue;
} else {
}
break;
}

var c__19491__auto___20067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto___20067,jobs,results,process,async){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto___20067,jobs,results,process,async){
return (function (state_19952){
var state_val_19953 = (state_19952[(1)]);
if((state_val_19953 === (1))){
var state_19952__$1 = state_19952;
var statearr_19954_20068 = state_19952__$1;
(statearr_19954_20068[(2)] = null);

(statearr_19954_20068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19953 === (2))){
var state_19952__$1 = state_19952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19952__$1,(4),from);
} else {
if((state_val_19953 === (3))){
var inst_19950 = (state_19952[(2)]);
var state_19952__$1 = state_19952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19952__$1,inst_19950);
} else {
if((state_val_19953 === (4))){
var inst_19933 = (state_19952[(7)]);
var inst_19933__$1 = (state_19952[(2)]);
var inst_19934 = (inst_19933__$1 == null);
var state_19952__$1 = (function (){var statearr_19955 = state_19952;
(statearr_19955[(7)] = inst_19933__$1);

return statearr_19955;
})();
if(cljs.core.truth_(inst_19934)){
var statearr_19956_20069 = state_19952__$1;
(statearr_19956_20069[(1)] = (5));

} else {
var statearr_19957_20070 = state_19952__$1;
(statearr_19957_20070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19953 === (5))){
var inst_19936 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19952__$1 = state_19952;
var statearr_19958_20071 = state_19952__$1;
(statearr_19958_20071[(2)] = inst_19936);

(statearr_19958_20071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19953 === (6))){
var inst_19938 = (state_19952[(8)]);
var inst_19933 = (state_19952[(7)]);
var inst_19938__$1 = cljs.core.async.chan.call(null,(1));
var inst_19939 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19940 = [inst_19933,inst_19938__$1];
var inst_19941 = (new cljs.core.PersistentVector(null,2,(5),inst_19939,inst_19940,null));
var state_19952__$1 = (function (){var statearr_19959 = state_19952;
(statearr_19959[(8)] = inst_19938__$1);

return statearr_19959;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19952__$1,(8),jobs,inst_19941);
} else {
if((state_val_19953 === (7))){
var inst_19948 = (state_19952[(2)]);
var state_19952__$1 = state_19952;
var statearr_19960_20072 = state_19952__$1;
(statearr_19960_20072[(2)] = inst_19948);

(statearr_19960_20072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19953 === (8))){
var inst_19938 = (state_19952[(8)]);
var inst_19943 = (state_19952[(2)]);
var state_19952__$1 = (function (){var statearr_19961 = state_19952;
(statearr_19961[(9)] = inst_19943);

return statearr_19961;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19952__$1,(9),results,inst_19938);
} else {
if((state_val_19953 === (9))){
var inst_19945 = (state_19952[(2)]);
var state_19952__$1 = (function (){var statearr_19962 = state_19952;
(statearr_19962[(10)] = inst_19945);

return statearr_19962;
})();
var statearr_19963_20073 = state_19952__$1;
(statearr_19963_20073[(2)] = null);

(statearr_19963_20073[(1)] = (2));


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
});})(c__19491__auto___20067,jobs,results,process,async))
;
return ((function (switch__19379__auto__,c__19491__auto___20067,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____0 = (function (){
var statearr_19967 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19967[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__);

(statearr_19967[(1)] = (1));

return statearr_19967;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____1 = (function (state_19952){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_19952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e19968){if((e19968 instanceof Object)){
var ex__19383__auto__ = e19968;
var statearr_19969_20074 = state_19952;
(statearr_19969_20074[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20075 = state_19952;
state_19952 = G__20075;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__ = function(state_19952){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____1.call(this,state_19952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto___20067,jobs,results,process,async))
})();
var state__19493__auto__ = (function (){var statearr_19970 = f__19492__auto__.call(null);
(statearr_19970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto___20067);

return statearr_19970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto___20067,jobs,results,process,async))
);


var c__19491__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto__,jobs,results,process,async){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto__,jobs,results,process,async){
return (function (state_20008){
var state_val_20009 = (state_20008[(1)]);
if((state_val_20009 === (7))){
var inst_20004 = (state_20008[(2)]);
var state_20008__$1 = state_20008;
var statearr_20010_20076 = state_20008__$1;
(statearr_20010_20076[(2)] = inst_20004);

(statearr_20010_20076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (20))){
var state_20008__$1 = state_20008;
var statearr_20011_20077 = state_20008__$1;
(statearr_20011_20077[(2)] = null);

(statearr_20011_20077[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (1))){
var state_20008__$1 = state_20008;
var statearr_20012_20078 = state_20008__$1;
(statearr_20012_20078[(2)] = null);

(statearr_20012_20078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (4))){
var inst_19973 = (state_20008[(7)]);
var inst_19973__$1 = (state_20008[(2)]);
var inst_19974 = (inst_19973__$1 == null);
var state_20008__$1 = (function (){var statearr_20013 = state_20008;
(statearr_20013[(7)] = inst_19973__$1);

return statearr_20013;
})();
if(cljs.core.truth_(inst_19974)){
var statearr_20014_20079 = state_20008__$1;
(statearr_20014_20079[(1)] = (5));

} else {
var statearr_20015_20080 = state_20008__$1;
(statearr_20015_20080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (15))){
var inst_19986 = (state_20008[(8)]);
var state_20008__$1 = state_20008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20008__$1,(18),to,inst_19986);
} else {
if((state_val_20009 === (21))){
var inst_19999 = (state_20008[(2)]);
var state_20008__$1 = state_20008;
var statearr_20016_20081 = state_20008__$1;
(statearr_20016_20081[(2)] = inst_19999);

(statearr_20016_20081[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (13))){
var inst_20001 = (state_20008[(2)]);
var state_20008__$1 = (function (){var statearr_20017 = state_20008;
(statearr_20017[(9)] = inst_20001);

return statearr_20017;
})();
var statearr_20018_20082 = state_20008__$1;
(statearr_20018_20082[(2)] = null);

(statearr_20018_20082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (6))){
var inst_19973 = (state_20008[(7)]);
var state_20008__$1 = state_20008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20008__$1,(11),inst_19973);
} else {
if((state_val_20009 === (17))){
var inst_19994 = (state_20008[(2)]);
var state_20008__$1 = state_20008;
if(cljs.core.truth_(inst_19994)){
var statearr_20019_20083 = state_20008__$1;
(statearr_20019_20083[(1)] = (19));

} else {
var statearr_20020_20084 = state_20008__$1;
(statearr_20020_20084[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (3))){
var inst_20006 = (state_20008[(2)]);
var state_20008__$1 = state_20008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20008__$1,inst_20006);
} else {
if((state_val_20009 === (12))){
var inst_19983 = (state_20008[(10)]);
var state_20008__$1 = state_20008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20008__$1,(14),inst_19983);
} else {
if((state_val_20009 === (2))){
var state_20008__$1 = state_20008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20008__$1,(4),results);
} else {
if((state_val_20009 === (19))){
var state_20008__$1 = state_20008;
var statearr_20021_20085 = state_20008__$1;
(statearr_20021_20085[(2)] = null);

(statearr_20021_20085[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (11))){
var inst_19983 = (state_20008[(2)]);
var state_20008__$1 = (function (){var statearr_20022 = state_20008;
(statearr_20022[(10)] = inst_19983);

return statearr_20022;
})();
var statearr_20023_20086 = state_20008__$1;
(statearr_20023_20086[(2)] = null);

(statearr_20023_20086[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (9))){
var state_20008__$1 = state_20008;
var statearr_20024_20087 = state_20008__$1;
(statearr_20024_20087[(2)] = null);

(statearr_20024_20087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (5))){
var state_20008__$1 = state_20008;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20025_20088 = state_20008__$1;
(statearr_20025_20088[(1)] = (8));

} else {
var statearr_20026_20089 = state_20008__$1;
(statearr_20026_20089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (14))){
var inst_19988 = (state_20008[(11)]);
var inst_19986 = (state_20008[(8)]);
var inst_19986__$1 = (state_20008[(2)]);
var inst_19987 = (inst_19986__$1 == null);
var inst_19988__$1 = cljs.core.not.call(null,inst_19987);
var state_20008__$1 = (function (){var statearr_20027 = state_20008;
(statearr_20027[(11)] = inst_19988__$1);

(statearr_20027[(8)] = inst_19986__$1);

return statearr_20027;
})();
if(inst_19988__$1){
var statearr_20028_20090 = state_20008__$1;
(statearr_20028_20090[(1)] = (15));

} else {
var statearr_20029_20091 = state_20008__$1;
(statearr_20029_20091[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (16))){
var inst_19988 = (state_20008[(11)]);
var state_20008__$1 = state_20008;
var statearr_20030_20092 = state_20008__$1;
(statearr_20030_20092[(2)] = inst_19988);

(statearr_20030_20092[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (10))){
var inst_19980 = (state_20008[(2)]);
var state_20008__$1 = state_20008;
var statearr_20031_20093 = state_20008__$1;
(statearr_20031_20093[(2)] = inst_19980);

(statearr_20031_20093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (18))){
var inst_19991 = (state_20008[(2)]);
var state_20008__$1 = state_20008;
var statearr_20032_20094 = state_20008__$1;
(statearr_20032_20094[(2)] = inst_19991);

(statearr_20032_20094[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (8))){
var inst_19977 = cljs.core.async.close_BANG_.call(null,to);
var state_20008__$1 = state_20008;
var statearr_20033_20095 = state_20008__$1;
(statearr_20033_20095[(2)] = inst_19977);

(statearr_20033_20095[(1)] = (10));


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
});})(c__19491__auto__,jobs,results,process,async))
;
return ((function (switch__19379__auto__,c__19491__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____0 = (function (){
var statearr_20037 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20037[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__);

(statearr_20037[(1)] = (1));

return statearr_20037;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____1 = (function (state_20008){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_20008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e20038){if((e20038 instanceof Object)){
var ex__19383__auto__ = e20038;
var statearr_20039_20096 = state_20008;
(statearr_20039_20096[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20097 = state_20008;
state_20008 = G__20097;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__ = function(state_20008){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____1.call(this,state_20008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19380__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto__,jobs,results,process,async))
})();
var state__19493__auto__ = (function (){var statearr_20040 = f__19492__auto__.call(null);
(statearr_20040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto__);

return statearr_20040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto__,jobs,results,process,async))
);

return c__19491__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args20098 = [];
var len__17884__auto___20101 = arguments.length;
var i__17885__auto___20102 = (0);
while(true){
if((i__17885__auto___20102 < len__17884__auto___20101)){
args20098.push((arguments[i__17885__auto___20102]));

var G__20103 = (i__17885__auto___20102 + (1));
i__17885__auto___20102 = G__20103;
continue;
} else {
}
break;
}

var G__20100 = args20098.length;
switch (G__20100) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20098.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args20105 = [];
var len__17884__auto___20108 = arguments.length;
var i__17885__auto___20109 = (0);
while(true){
if((i__17885__auto___20109 < len__17884__auto___20108)){
args20105.push((arguments[i__17885__auto___20109]));

var G__20110 = (i__17885__auto___20109 + (1));
i__17885__auto___20109 = G__20110;
continue;
} else {
}
break;
}

var G__20107 = args20105.length;
switch (G__20107) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20105.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args20112 = [];
var len__17884__auto___20165 = arguments.length;
var i__17885__auto___20166 = (0);
while(true){
if((i__17885__auto___20166 < len__17884__auto___20165)){
args20112.push((arguments[i__17885__auto___20166]));

var G__20167 = (i__17885__auto___20166 + (1));
i__17885__auto___20166 = G__20167;
continue;
} else {
}
break;
}

var G__20114 = args20112.length;
switch (G__20114) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20112.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19491__auto___20169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto___20169,tc,fc){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto___20169,tc,fc){
return (function (state_20140){
var state_val_20141 = (state_20140[(1)]);
if((state_val_20141 === (7))){
var inst_20136 = (state_20140[(2)]);
var state_20140__$1 = state_20140;
var statearr_20142_20170 = state_20140__$1;
(statearr_20142_20170[(2)] = inst_20136);

(statearr_20142_20170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (1))){
var state_20140__$1 = state_20140;
var statearr_20143_20171 = state_20140__$1;
(statearr_20143_20171[(2)] = null);

(statearr_20143_20171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (4))){
var inst_20117 = (state_20140[(7)]);
var inst_20117__$1 = (state_20140[(2)]);
var inst_20118 = (inst_20117__$1 == null);
var state_20140__$1 = (function (){var statearr_20144 = state_20140;
(statearr_20144[(7)] = inst_20117__$1);

return statearr_20144;
})();
if(cljs.core.truth_(inst_20118)){
var statearr_20145_20172 = state_20140__$1;
(statearr_20145_20172[(1)] = (5));

} else {
var statearr_20146_20173 = state_20140__$1;
(statearr_20146_20173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (13))){
var state_20140__$1 = state_20140;
var statearr_20147_20174 = state_20140__$1;
(statearr_20147_20174[(2)] = null);

(statearr_20147_20174[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (6))){
var inst_20117 = (state_20140[(7)]);
var inst_20123 = p.call(null,inst_20117);
var state_20140__$1 = state_20140;
if(cljs.core.truth_(inst_20123)){
var statearr_20148_20175 = state_20140__$1;
(statearr_20148_20175[(1)] = (9));

} else {
var statearr_20149_20176 = state_20140__$1;
(statearr_20149_20176[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (3))){
var inst_20138 = (state_20140[(2)]);
var state_20140__$1 = state_20140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20140__$1,inst_20138);
} else {
if((state_val_20141 === (12))){
var state_20140__$1 = state_20140;
var statearr_20150_20177 = state_20140__$1;
(statearr_20150_20177[(2)] = null);

(statearr_20150_20177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (2))){
var state_20140__$1 = state_20140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20140__$1,(4),ch);
} else {
if((state_val_20141 === (11))){
var inst_20117 = (state_20140[(7)]);
var inst_20127 = (state_20140[(2)]);
var state_20140__$1 = state_20140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20140__$1,(8),inst_20127,inst_20117);
} else {
if((state_val_20141 === (9))){
var state_20140__$1 = state_20140;
var statearr_20151_20178 = state_20140__$1;
(statearr_20151_20178[(2)] = tc);

(statearr_20151_20178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (5))){
var inst_20120 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20121 = cljs.core.async.close_BANG_.call(null,fc);
var state_20140__$1 = (function (){var statearr_20152 = state_20140;
(statearr_20152[(8)] = inst_20120);

return statearr_20152;
})();
var statearr_20153_20179 = state_20140__$1;
(statearr_20153_20179[(2)] = inst_20121);

(statearr_20153_20179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (14))){
var inst_20134 = (state_20140[(2)]);
var state_20140__$1 = state_20140;
var statearr_20154_20180 = state_20140__$1;
(statearr_20154_20180[(2)] = inst_20134);

(statearr_20154_20180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (10))){
var state_20140__$1 = state_20140;
var statearr_20155_20181 = state_20140__$1;
(statearr_20155_20181[(2)] = fc);

(statearr_20155_20181[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20141 === (8))){
var inst_20129 = (state_20140[(2)]);
var state_20140__$1 = state_20140;
if(cljs.core.truth_(inst_20129)){
var statearr_20156_20182 = state_20140__$1;
(statearr_20156_20182[(1)] = (12));

} else {
var statearr_20157_20183 = state_20140__$1;
(statearr_20157_20183[(1)] = (13));

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
});})(c__19491__auto___20169,tc,fc))
;
return ((function (switch__19379__auto__,c__19491__auto___20169,tc,fc){
return (function() {
var cljs$core$async$state_machine__19380__auto__ = null;
var cljs$core$async$state_machine__19380__auto____0 = (function (){
var statearr_20161 = [null,null,null,null,null,null,null,null,null];
(statearr_20161[(0)] = cljs$core$async$state_machine__19380__auto__);

(statearr_20161[(1)] = (1));

return statearr_20161;
});
var cljs$core$async$state_machine__19380__auto____1 = (function (state_20140){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_20140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e20162){if((e20162 instanceof Object)){
var ex__19383__auto__ = e20162;
var statearr_20163_20184 = state_20140;
(statearr_20163_20184[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20185 = state_20140;
state_20140 = G__20185;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
cljs$core$async$state_machine__19380__auto__ = function(state_20140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19380__auto____1.call(this,state_20140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19380__auto____0;
cljs$core$async$state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19380__auto____1;
return cljs$core$async$state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto___20169,tc,fc))
})();
var state__19493__auto__ = (function (){var statearr_20164 = f__19492__auto__.call(null);
(statearr_20164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto___20169);

return statearr_20164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto___20169,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19491__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto__){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto__){
return (function (state_20249){
var state_val_20250 = (state_20249[(1)]);
if((state_val_20250 === (7))){
var inst_20245 = (state_20249[(2)]);
var state_20249__$1 = state_20249;
var statearr_20251_20272 = state_20249__$1;
(statearr_20251_20272[(2)] = inst_20245);

(statearr_20251_20272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (1))){
var inst_20229 = init;
var state_20249__$1 = (function (){var statearr_20252 = state_20249;
(statearr_20252[(7)] = inst_20229);

return statearr_20252;
})();
var statearr_20253_20273 = state_20249__$1;
(statearr_20253_20273[(2)] = null);

(statearr_20253_20273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (4))){
var inst_20232 = (state_20249[(8)]);
var inst_20232__$1 = (state_20249[(2)]);
var inst_20233 = (inst_20232__$1 == null);
var state_20249__$1 = (function (){var statearr_20254 = state_20249;
(statearr_20254[(8)] = inst_20232__$1);

return statearr_20254;
})();
if(cljs.core.truth_(inst_20233)){
var statearr_20255_20274 = state_20249__$1;
(statearr_20255_20274[(1)] = (5));

} else {
var statearr_20256_20275 = state_20249__$1;
(statearr_20256_20275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (6))){
var inst_20232 = (state_20249[(8)]);
var inst_20236 = (state_20249[(9)]);
var inst_20229 = (state_20249[(7)]);
var inst_20236__$1 = f.call(null,inst_20229,inst_20232);
var inst_20237 = cljs.core.reduced_QMARK_.call(null,inst_20236__$1);
var state_20249__$1 = (function (){var statearr_20257 = state_20249;
(statearr_20257[(9)] = inst_20236__$1);

return statearr_20257;
})();
if(inst_20237){
var statearr_20258_20276 = state_20249__$1;
(statearr_20258_20276[(1)] = (8));

} else {
var statearr_20259_20277 = state_20249__$1;
(statearr_20259_20277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (3))){
var inst_20247 = (state_20249[(2)]);
var state_20249__$1 = state_20249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20249__$1,inst_20247);
} else {
if((state_val_20250 === (2))){
var state_20249__$1 = state_20249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20249__$1,(4),ch);
} else {
if((state_val_20250 === (9))){
var inst_20236 = (state_20249[(9)]);
var inst_20229 = inst_20236;
var state_20249__$1 = (function (){var statearr_20260 = state_20249;
(statearr_20260[(7)] = inst_20229);

return statearr_20260;
})();
var statearr_20261_20278 = state_20249__$1;
(statearr_20261_20278[(2)] = null);

(statearr_20261_20278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (5))){
var inst_20229 = (state_20249[(7)]);
var state_20249__$1 = state_20249;
var statearr_20262_20279 = state_20249__$1;
(statearr_20262_20279[(2)] = inst_20229);

(statearr_20262_20279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (10))){
var inst_20243 = (state_20249[(2)]);
var state_20249__$1 = state_20249;
var statearr_20263_20280 = state_20249__$1;
(statearr_20263_20280[(2)] = inst_20243);

(statearr_20263_20280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20250 === (8))){
var inst_20236 = (state_20249[(9)]);
var inst_20239 = cljs.core.deref.call(null,inst_20236);
var state_20249__$1 = state_20249;
var statearr_20264_20281 = state_20249__$1;
(statearr_20264_20281[(2)] = inst_20239);

(statearr_20264_20281[(1)] = (10));


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
});})(c__19491__auto__))
;
return ((function (switch__19379__auto__,c__19491__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19380__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19380__auto____0 = (function (){
var statearr_20268 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20268[(0)] = cljs$core$async$reduce_$_state_machine__19380__auto__);

(statearr_20268[(1)] = (1));

return statearr_20268;
});
var cljs$core$async$reduce_$_state_machine__19380__auto____1 = (function (state_20249){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_20249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e20269){if((e20269 instanceof Object)){
var ex__19383__auto__ = e20269;
var statearr_20270_20282 = state_20249;
(statearr_20270_20282[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20283 = state_20249;
state_20249 = G__20283;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19380__auto__ = function(state_20249){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19380__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19380__auto____1.call(this,state_20249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19380__auto____0;
cljs$core$async$reduce_$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19380__auto____1;
return cljs$core$async$reduce_$_state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto__))
})();
var state__19493__auto__ = (function (){var statearr_20271 = f__19492__auto__.call(null);
(statearr_20271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto__);

return statearr_20271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto__))
);

return c__19491__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args20284 = [];
var len__17884__auto___20336 = arguments.length;
var i__17885__auto___20337 = (0);
while(true){
if((i__17885__auto___20337 < len__17884__auto___20336)){
args20284.push((arguments[i__17885__auto___20337]));

var G__20338 = (i__17885__auto___20337 + (1));
i__17885__auto___20337 = G__20338;
continue;
} else {
}
break;
}

var G__20286 = args20284.length;
switch (G__20286) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20284.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19491__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto__){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto__){
return (function (state_20311){
var state_val_20312 = (state_20311[(1)]);
if((state_val_20312 === (7))){
var inst_20293 = (state_20311[(2)]);
var state_20311__$1 = state_20311;
var statearr_20313_20340 = state_20311__$1;
(statearr_20313_20340[(2)] = inst_20293);

(statearr_20313_20340[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (1))){
var inst_20287 = cljs.core.seq.call(null,coll);
var inst_20288 = inst_20287;
var state_20311__$1 = (function (){var statearr_20314 = state_20311;
(statearr_20314[(7)] = inst_20288);

return statearr_20314;
})();
var statearr_20315_20341 = state_20311__$1;
(statearr_20315_20341[(2)] = null);

(statearr_20315_20341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (4))){
var inst_20288 = (state_20311[(7)]);
var inst_20291 = cljs.core.first.call(null,inst_20288);
var state_20311__$1 = state_20311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20311__$1,(7),ch,inst_20291);
} else {
if((state_val_20312 === (13))){
var inst_20305 = (state_20311[(2)]);
var state_20311__$1 = state_20311;
var statearr_20316_20342 = state_20311__$1;
(statearr_20316_20342[(2)] = inst_20305);

(statearr_20316_20342[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (6))){
var inst_20296 = (state_20311[(2)]);
var state_20311__$1 = state_20311;
if(cljs.core.truth_(inst_20296)){
var statearr_20317_20343 = state_20311__$1;
(statearr_20317_20343[(1)] = (8));

} else {
var statearr_20318_20344 = state_20311__$1;
(statearr_20318_20344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (3))){
var inst_20309 = (state_20311[(2)]);
var state_20311__$1 = state_20311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20311__$1,inst_20309);
} else {
if((state_val_20312 === (12))){
var state_20311__$1 = state_20311;
var statearr_20319_20345 = state_20311__$1;
(statearr_20319_20345[(2)] = null);

(statearr_20319_20345[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (2))){
var inst_20288 = (state_20311[(7)]);
var state_20311__$1 = state_20311;
if(cljs.core.truth_(inst_20288)){
var statearr_20320_20346 = state_20311__$1;
(statearr_20320_20346[(1)] = (4));

} else {
var statearr_20321_20347 = state_20311__$1;
(statearr_20321_20347[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (11))){
var inst_20302 = cljs.core.async.close_BANG_.call(null,ch);
var state_20311__$1 = state_20311;
var statearr_20322_20348 = state_20311__$1;
(statearr_20322_20348[(2)] = inst_20302);

(statearr_20322_20348[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (9))){
var state_20311__$1 = state_20311;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20323_20349 = state_20311__$1;
(statearr_20323_20349[(1)] = (11));

} else {
var statearr_20324_20350 = state_20311__$1;
(statearr_20324_20350[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (5))){
var inst_20288 = (state_20311[(7)]);
var state_20311__$1 = state_20311;
var statearr_20325_20351 = state_20311__$1;
(statearr_20325_20351[(2)] = inst_20288);

(statearr_20325_20351[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (10))){
var inst_20307 = (state_20311[(2)]);
var state_20311__$1 = state_20311;
var statearr_20326_20352 = state_20311__$1;
(statearr_20326_20352[(2)] = inst_20307);

(statearr_20326_20352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20312 === (8))){
var inst_20288 = (state_20311[(7)]);
var inst_20298 = cljs.core.next.call(null,inst_20288);
var inst_20288__$1 = inst_20298;
var state_20311__$1 = (function (){var statearr_20327 = state_20311;
(statearr_20327[(7)] = inst_20288__$1);

return statearr_20327;
})();
var statearr_20328_20353 = state_20311__$1;
(statearr_20328_20353[(2)] = null);

(statearr_20328_20353[(1)] = (2));


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
});})(c__19491__auto__))
;
return ((function (switch__19379__auto__,c__19491__auto__){
return (function() {
var cljs$core$async$state_machine__19380__auto__ = null;
var cljs$core$async$state_machine__19380__auto____0 = (function (){
var statearr_20332 = [null,null,null,null,null,null,null,null];
(statearr_20332[(0)] = cljs$core$async$state_machine__19380__auto__);

(statearr_20332[(1)] = (1));

return statearr_20332;
});
var cljs$core$async$state_machine__19380__auto____1 = (function (state_20311){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_20311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e20333){if((e20333 instanceof Object)){
var ex__19383__auto__ = e20333;
var statearr_20334_20354 = state_20311;
(statearr_20334_20354[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20355 = state_20311;
state_20311 = G__20355;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
cljs$core$async$state_machine__19380__auto__ = function(state_20311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19380__auto____1.call(this,state_20311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19380__auto____0;
cljs$core$async$state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19380__auto____1;
return cljs$core$async$state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto__))
})();
var state__19493__auto__ = (function (){var statearr_20335 = f__19492__auto__.call(null);
(statearr_20335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto__);

return statearr_20335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto__))
);

return c__19491__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17481__auto__ = (((_ == null))?null:_);
var m__17482__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,_);
} else {
var m__17482__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20577 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20577 = (function (mult,ch,cs,meta20578){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20578 = meta20578;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20579,meta20578__$1){
var self__ = this;
var _20579__$1 = this;
return (new cljs.core.async.t_cljs$core$async20577(self__.mult,self__.ch,self__.cs,meta20578__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20577.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20579){
var self__ = this;
var _20579__$1 = this;
return self__.meta20578;
});})(cs))
;

cljs.core.async.t_cljs$core$async20577.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20577.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20577.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20577.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20577.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20577.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20577.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20578","meta20578",1691764321,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20577.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20577.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20577";

cljs.core.async.t_cljs$core$async20577.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async20577");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20577 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20577(mult__$1,ch__$1,cs__$1,meta20578){
return (new cljs.core.async.t_cljs$core$async20577(mult__$1,ch__$1,cs__$1,meta20578));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20577(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19491__auto___20798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto___20798,cs,m,dchan,dctr,done){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto___20798,cs,m,dchan,dctr,done){
return (function (state_20710){
var state_val_20711 = (state_20710[(1)]);
if((state_val_20711 === (7))){
var inst_20706 = (state_20710[(2)]);
var state_20710__$1 = state_20710;
var statearr_20712_20799 = state_20710__$1;
(statearr_20712_20799[(2)] = inst_20706);

(statearr_20712_20799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (20))){
var inst_20611 = (state_20710[(7)]);
var inst_20621 = cljs.core.first.call(null,inst_20611);
var inst_20622 = cljs.core.nth.call(null,inst_20621,(0),null);
var inst_20623 = cljs.core.nth.call(null,inst_20621,(1),null);
var state_20710__$1 = (function (){var statearr_20713 = state_20710;
(statearr_20713[(8)] = inst_20622);

return statearr_20713;
})();
if(cljs.core.truth_(inst_20623)){
var statearr_20714_20800 = state_20710__$1;
(statearr_20714_20800[(1)] = (22));

} else {
var statearr_20715_20801 = state_20710__$1;
(statearr_20715_20801[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (27))){
var inst_20653 = (state_20710[(9)]);
var inst_20582 = (state_20710[(10)]);
var inst_20658 = (state_20710[(11)]);
var inst_20651 = (state_20710[(12)]);
var inst_20658__$1 = cljs.core._nth.call(null,inst_20651,inst_20653);
var inst_20659 = cljs.core.async.put_BANG_.call(null,inst_20658__$1,inst_20582,done);
var state_20710__$1 = (function (){var statearr_20716 = state_20710;
(statearr_20716[(11)] = inst_20658__$1);

return statearr_20716;
})();
if(cljs.core.truth_(inst_20659)){
var statearr_20717_20802 = state_20710__$1;
(statearr_20717_20802[(1)] = (30));

} else {
var statearr_20718_20803 = state_20710__$1;
(statearr_20718_20803[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (1))){
var state_20710__$1 = state_20710;
var statearr_20719_20804 = state_20710__$1;
(statearr_20719_20804[(2)] = null);

(statearr_20719_20804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (24))){
var inst_20611 = (state_20710[(7)]);
var inst_20628 = (state_20710[(2)]);
var inst_20629 = cljs.core.next.call(null,inst_20611);
var inst_20591 = inst_20629;
var inst_20592 = null;
var inst_20593 = (0);
var inst_20594 = (0);
var state_20710__$1 = (function (){var statearr_20720 = state_20710;
(statearr_20720[(13)] = inst_20593);

(statearr_20720[(14)] = inst_20592);

(statearr_20720[(15)] = inst_20628);

(statearr_20720[(16)] = inst_20591);

(statearr_20720[(17)] = inst_20594);

return statearr_20720;
})();
var statearr_20721_20805 = state_20710__$1;
(statearr_20721_20805[(2)] = null);

(statearr_20721_20805[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (39))){
var state_20710__$1 = state_20710;
var statearr_20725_20806 = state_20710__$1;
(statearr_20725_20806[(2)] = null);

(statearr_20725_20806[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (4))){
var inst_20582 = (state_20710[(10)]);
var inst_20582__$1 = (state_20710[(2)]);
var inst_20583 = (inst_20582__$1 == null);
var state_20710__$1 = (function (){var statearr_20726 = state_20710;
(statearr_20726[(10)] = inst_20582__$1);

return statearr_20726;
})();
if(cljs.core.truth_(inst_20583)){
var statearr_20727_20807 = state_20710__$1;
(statearr_20727_20807[(1)] = (5));

} else {
var statearr_20728_20808 = state_20710__$1;
(statearr_20728_20808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (15))){
var inst_20593 = (state_20710[(13)]);
var inst_20592 = (state_20710[(14)]);
var inst_20591 = (state_20710[(16)]);
var inst_20594 = (state_20710[(17)]);
var inst_20607 = (state_20710[(2)]);
var inst_20608 = (inst_20594 + (1));
var tmp20722 = inst_20593;
var tmp20723 = inst_20592;
var tmp20724 = inst_20591;
var inst_20591__$1 = tmp20724;
var inst_20592__$1 = tmp20723;
var inst_20593__$1 = tmp20722;
var inst_20594__$1 = inst_20608;
var state_20710__$1 = (function (){var statearr_20729 = state_20710;
(statearr_20729[(13)] = inst_20593__$1);

(statearr_20729[(14)] = inst_20592__$1);

(statearr_20729[(18)] = inst_20607);

(statearr_20729[(16)] = inst_20591__$1);

(statearr_20729[(17)] = inst_20594__$1);

return statearr_20729;
})();
var statearr_20730_20809 = state_20710__$1;
(statearr_20730_20809[(2)] = null);

(statearr_20730_20809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (21))){
var inst_20632 = (state_20710[(2)]);
var state_20710__$1 = state_20710;
var statearr_20734_20810 = state_20710__$1;
(statearr_20734_20810[(2)] = inst_20632);

(statearr_20734_20810[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (31))){
var inst_20658 = (state_20710[(11)]);
var inst_20662 = done.call(null,null);
var inst_20663 = cljs.core.async.untap_STAR_.call(null,m,inst_20658);
var state_20710__$1 = (function (){var statearr_20735 = state_20710;
(statearr_20735[(19)] = inst_20662);

return statearr_20735;
})();
var statearr_20736_20811 = state_20710__$1;
(statearr_20736_20811[(2)] = inst_20663);

(statearr_20736_20811[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (32))){
var inst_20653 = (state_20710[(9)]);
var inst_20650 = (state_20710[(20)]);
var inst_20651 = (state_20710[(12)]);
var inst_20652 = (state_20710[(21)]);
var inst_20665 = (state_20710[(2)]);
var inst_20666 = (inst_20653 + (1));
var tmp20731 = inst_20650;
var tmp20732 = inst_20651;
var tmp20733 = inst_20652;
var inst_20650__$1 = tmp20731;
var inst_20651__$1 = tmp20732;
var inst_20652__$1 = tmp20733;
var inst_20653__$1 = inst_20666;
var state_20710__$1 = (function (){var statearr_20737 = state_20710;
(statearr_20737[(9)] = inst_20653__$1);

(statearr_20737[(22)] = inst_20665);

(statearr_20737[(20)] = inst_20650__$1);

(statearr_20737[(12)] = inst_20651__$1);

(statearr_20737[(21)] = inst_20652__$1);

return statearr_20737;
})();
var statearr_20738_20812 = state_20710__$1;
(statearr_20738_20812[(2)] = null);

(statearr_20738_20812[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (40))){
var inst_20678 = (state_20710[(23)]);
var inst_20682 = done.call(null,null);
var inst_20683 = cljs.core.async.untap_STAR_.call(null,m,inst_20678);
var state_20710__$1 = (function (){var statearr_20739 = state_20710;
(statearr_20739[(24)] = inst_20682);

return statearr_20739;
})();
var statearr_20740_20813 = state_20710__$1;
(statearr_20740_20813[(2)] = inst_20683);

(statearr_20740_20813[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (33))){
var inst_20669 = (state_20710[(25)]);
var inst_20671 = cljs.core.chunked_seq_QMARK_.call(null,inst_20669);
var state_20710__$1 = state_20710;
if(inst_20671){
var statearr_20741_20814 = state_20710__$1;
(statearr_20741_20814[(1)] = (36));

} else {
var statearr_20742_20815 = state_20710__$1;
(statearr_20742_20815[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (13))){
var inst_20601 = (state_20710[(26)]);
var inst_20604 = cljs.core.async.close_BANG_.call(null,inst_20601);
var state_20710__$1 = state_20710;
var statearr_20743_20816 = state_20710__$1;
(statearr_20743_20816[(2)] = inst_20604);

(statearr_20743_20816[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (22))){
var inst_20622 = (state_20710[(8)]);
var inst_20625 = cljs.core.async.close_BANG_.call(null,inst_20622);
var state_20710__$1 = state_20710;
var statearr_20744_20817 = state_20710__$1;
(statearr_20744_20817[(2)] = inst_20625);

(statearr_20744_20817[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (36))){
var inst_20669 = (state_20710[(25)]);
var inst_20673 = cljs.core.chunk_first.call(null,inst_20669);
var inst_20674 = cljs.core.chunk_rest.call(null,inst_20669);
var inst_20675 = cljs.core.count.call(null,inst_20673);
var inst_20650 = inst_20674;
var inst_20651 = inst_20673;
var inst_20652 = inst_20675;
var inst_20653 = (0);
var state_20710__$1 = (function (){var statearr_20745 = state_20710;
(statearr_20745[(9)] = inst_20653);

(statearr_20745[(20)] = inst_20650);

(statearr_20745[(12)] = inst_20651);

(statearr_20745[(21)] = inst_20652);

return statearr_20745;
})();
var statearr_20746_20818 = state_20710__$1;
(statearr_20746_20818[(2)] = null);

(statearr_20746_20818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (41))){
var inst_20669 = (state_20710[(25)]);
var inst_20685 = (state_20710[(2)]);
var inst_20686 = cljs.core.next.call(null,inst_20669);
var inst_20650 = inst_20686;
var inst_20651 = null;
var inst_20652 = (0);
var inst_20653 = (0);
var state_20710__$1 = (function (){var statearr_20747 = state_20710;
(statearr_20747[(9)] = inst_20653);

(statearr_20747[(27)] = inst_20685);

(statearr_20747[(20)] = inst_20650);

(statearr_20747[(12)] = inst_20651);

(statearr_20747[(21)] = inst_20652);

return statearr_20747;
})();
var statearr_20748_20819 = state_20710__$1;
(statearr_20748_20819[(2)] = null);

(statearr_20748_20819[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (43))){
var state_20710__$1 = state_20710;
var statearr_20749_20820 = state_20710__$1;
(statearr_20749_20820[(2)] = null);

(statearr_20749_20820[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (29))){
var inst_20694 = (state_20710[(2)]);
var state_20710__$1 = state_20710;
var statearr_20750_20821 = state_20710__$1;
(statearr_20750_20821[(2)] = inst_20694);

(statearr_20750_20821[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (44))){
var inst_20703 = (state_20710[(2)]);
var state_20710__$1 = (function (){var statearr_20751 = state_20710;
(statearr_20751[(28)] = inst_20703);

return statearr_20751;
})();
var statearr_20752_20822 = state_20710__$1;
(statearr_20752_20822[(2)] = null);

(statearr_20752_20822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (6))){
var inst_20642 = (state_20710[(29)]);
var inst_20641 = cljs.core.deref.call(null,cs);
var inst_20642__$1 = cljs.core.keys.call(null,inst_20641);
var inst_20643 = cljs.core.count.call(null,inst_20642__$1);
var inst_20644 = cljs.core.reset_BANG_.call(null,dctr,inst_20643);
var inst_20649 = cljs.core.seq.call(null,inst_20642__$1);
var inst_20650 = inst_20649;
var inst_20651 = null;
var inst_20652 = (0);
var inst_20653 = (0);
var state_20710__$1 = (function (){var statearr_20753 = state_20710;
(statearr_20753[(9)] = inst_20653);

(statearr_20753[(20)] = inst_20650);

(statearr_20753[(29)] = inst_20642__$1);

(statearr_20753[(30)] = inst_20644);

(statearr_20753[(12)] = inst_20651);

(statearr_20753[(21)] = inst_20652);

return statearr_20753;
})();
var statearr_20754_20823 = state_20710__$1;
(statearr_20754_20823[(2)] = null);

(statearr_20754_20823[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (28))){
var inst_20669 = (state_20710[(25)]);
var inst_20650 = (state_20710[(20)]);
var inst_20669__$1 = cljs.core.seq.call(null,inst_20650);
var state_20710__$1 = (function (){var statearr_20755 = state_20710;
(statearr_20755[(25)] = inst_20669__$1);

return statearr_20755;
})();
if(inst_20669__$1){
var statearr_20756_20824 = state_20710__$1;
(statearr_20756_20824[(1)] = (33));

} else {
var statearr_20757_20825 = state_20710__$1;
(statearr_20757_20825[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (25))){
var inst_20653 = (state_20710[(9)]);
var inst_20652 = (state_20710[(21)]);
var inst_20655 = (inst_20653 < inst_20652);
var inst_20656 = inst_20655;
var state_20710__$1 = state_20710;
if(cljs.core.truth_(inst_20656)){
var statearr_20758_20826 = state_20710__$1;
(statearr_20758_20826[(1)] = (27));

} else {
var statearr_20759_20827 = state_20710__$1;
(statearr_20759_20827[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (34))){
var state_20710__$1 = state_20710;
var statearr_20760_20828 = state_20710__$1;
(statearr_20760_20828[(2)] = null);

(statearr_20760_20828[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (17))){
var state_20710__$1 = state_20710;
var statearr_20761_20829 = state_20710__$1;
(statearr_20761_20829[(2)] = null);

(statearr_20761_20829[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (3))){
var inst_20708 = (state_20710[(2)]);
var state_20710__$1 = state_20710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20710__$1,inst_20708);
} else {
if((state_val_20711 === (12))){
var inst_20637 = (state_20710[(2)]);
var state_20710__$1 = state_20710;
var statearr_20762_20830 = state_20710__$1;
(statearr_20762_20830[(2)] = inst_20637);

(statearr_20762_20830[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (2))){
var state_20710__$1 = state_20710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20710__$1,(4),ch);
} else {
if((state_val_20711 === (23))){
var state_20710__$1 = state_20710;
var statearr_20763_20831 = state_20710__$1;
(statearr_20763_20831[(2)] = null);

(statearr_20763_20831[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (35))){
var inst_20692 = (state_20710[(2)]);
var state_20710__$1 = state_20710;
var statearr_20764_20832 = state_20710__$1;
(statearr_20764_20832[(2)] = inst_20692);

(statearr_20764_20832[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (19))){
var inst_20611 = (state_20710[(7)]);
var inst_20615 = cljs.core.chunk_first.call(null,inst_20611);
var inst_20616 = cljs.core.chunk_rest.call(null,inst_20611);
var inst_20617 = cljs.core.count.call(null,inst_20615);
var inst_20591 = inst_20616;
var inst_20592 = inst_20615;
var inst_20593 = inst_20617;
var inst_20594 = (0);
var state_20710__$1 = (function (){var statearr_20765 = state_20710;
(statearr_20765[(13)] = inst_20593);

(statearr_20765[(14)] = inst_20592);

(statearr_20765[(16)] = inst_20591);

(statearr_20765[(17)] = inst_20594);

return statearr_20765;
})();
var statearr_20766_20833 = state_20710__$1;
(statearr_20766_20833[(2)] = null);

(statearr_20766_20833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (11))){
var inst_20591 = (state_20710[(16)]);
var inst_20611 = (state_20710[(7)]);
var inst_20611__$1 = cljs.core.seq.call(null,inst_20591);
var state_20710__$1 = (function (){var statearr_20767 = state_20710;
(statearr_20767[(7)] = inst_20611__$1);

return statearr_20767;
})();
if(inst_20611__$1){
var statearr_20768_20834 = state_20710__$1;
(statearr_20768_20834[(1)] = (16));

} else {
var statearr_20769_20835 = state_20710__$1;
(statearr_20769_20835[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (9))){
var inst_20639 = (state_20710[(2)]);
var state_20710__$1 = state_20710;
var statearr_20770_20836 = state_20710__$1;
(statearr_20770_20836[(2)] = inst_20639);

(statearr_20770_20836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (5))){
var inst_20589 = cljs.core.deref.call(null,cs);
var inst_20590 = cljs.core.seq.call(null,inst_20589);
var inst_20591 = inst_20590;
var inst_20592 = null;
var inst_20593 = (0);
var inst_20594 = (0);
var state_20710__$1 = (function (){var statearr_20771 = state_20710;
(statearr_20771[(13)] = inst_20593);

(statearr_20771[(14)] = inst_20592);

(statearr_20771[(16)] = inst_20591);

(statearr_20771[(17)] = inst_20594);

return statearr_20771;
})();
var statearr_20772_20837 = state_20710__$1;
(statearr_20772_20837[(2)] = null);

(statearr_20772_20837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (14))){
var state_20710__$1 = state_20710;
var statearr_20773_20838 = state_20710__$1;
(statearr_20773_20838[(2)] = null);

(statearr_20773_20838[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (45))){
var inst_20700 = (state_20710[(2)]);
var state_20710__$1 = state_20710;
var statearr_20774_20839 = state_20710__$1;
(statearr_20774_20839[(2)] = inst_20700);

(statearr_20774_20839[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (26))){
var inst_20642 = (state_20710[(29)]);
var inst_20696 = (state_20710[(2)]);
var inst_20697 = cljs.core.seq.call(null,inst_20642);
var state_20710__$1 = (function (){var statearr_20775 = state_20710;
(statearr_20775[(31)] = inst_20696);

return statearr_20775;
})();
if(inst_20697){
var statearr_20776_20840 = state_20710__$1;
(statearr_20776_20840[(1)] = (42));

} else {
var statearr_20777_20841 = state_20710__$1;
(statearr_20777_20841[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (16))){
var inst_20611 = (state_20710[(7)]);
var inst_20613 = cljs.core.chunked_seq_QMARK_.call(null,inst_20611);
var state_20710__$1 = state_20710;
if(inst_20613){
var statearr_20778_20842 = state_20710__$1;
(statearr_20778_20842[(1)] = (19));

} else {
var statearr_20779_20843 = state_20710__$1;
(statearr_20779_20843[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (38))){
var inst_20689 = (state_20710[(2)]);
var state_20710__$1 = state_20710;
var statearr_20780_20844 = state_20710__$1;
(statearr_20780_20844[(2)] = inst_20689);

(statearr_20780_20844[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (30))){
var state_20710__$1 = state_20710;
var statearr_20781_20845 = state_20710__$1;
(statearr_20781_20845[(2)] = null);

(statearr_20781_20845[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (10))){
var inst_20592 = (state_20710[(14)]);
var inst_20594 = (state_20710[(17)]);
var inst_20600 = cljs.core._nth.call(null,inst_20592,inst_20594);
var inst_20601 = cljs.core.nth.call(null,inst_20600,(0),null);
var inst_20602 = cljs.core.nth.call(null,inst_20600,(1),null);
var state_20710__$1 = (function (){var statearr_20782 = state_20710;
(statearr_20782[(26)] = inst_20601);

return statearr_20782;
})();
if(cljs.core.truth_(inst_20602)){
var statearr_20783_20846 = state_20710__$1;
(statearr_20783_20846[(1)] = (13));

} else {
var statearr_20784_20847 = state_20710__$1;
(statearr_20784_20847[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (18))){
var inst_20635 = (state_20710[(2)]);
var state_20710__$1 = state_20710;
var statearr_20785_20848 = state_20710__$1;
(statearr_20785_20848[(2)] = inst_20635);

(statearr_20785_20848[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (42))){
var state_20710__$1 = state_20710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20710__$1,(45),dchan);
} else {
if((state_val_20711 === (37))){
var inst_20582 = (state_20710[(10)]);
var inst_20669 = (state_20710[(25)]);
var inst_20678 = (state_20710[(23)]);
var inst_20678__$1 = cljs.core.first.call(null,inst_20669);
var inst_20679 = cljs.core.async.put_BANG_.call(null,inst_20678__$1,inst_20582,done);
var state_20710__$1 = (function (){var statearr_20786 = state_20710;
(statearr_20786[(23)] = inst_20678__$1);

return statearr_20786;
})();
if(cljs.core.truth_(inst_20679)){
var statearr_20787_20849 = state_20710__$1;
(statearr_20787_20849[(1)] = (39));

} else {
var statearr_20788_20850 = state_20710__$1;
(statearr_20788_20850[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20711 === (8))){
var inst_20593 = (state_20710[(13)]);
var inst_20594 = (state_20710[(17)]);
var inst_20596 = (inst_20594 < inst_20593);
var inst_20597 = inst_20596;
var state_20710__$1 = state_20710;
if(cljs.core.truth_(inst_20597)){
var statearr_20789_20851 = state_20710__$1;
(statearr_20789_20851[(1)] = (10));

} else {
var statearr_20790_20852 = state_20710__$1;
(statearr_20790_20852[(1)] = (11));

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
});})(c__19491__auto___20798,cs,m,dchan,dctr,done))
;
return ((function (switch__19379__auto__,c__19491__auto___20798,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19380__auto__ = null;
var cljs$core$async$mult_$_state_machine__19380__auto____0 = (function (){
var statearr_20794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20794[(0)] = cljs$core$async$mult_$_state_machine__19380__auto__);

(statearr_20794[(1)] = (1));

return statearr_20794;
});
var cljs$core$async$mult_$_state_machine__19380__auto____1 = (function (state_20710){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_20710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e20795){if((e20795 instanceof Object)){
var ex__19383__auto__ = e20795;
var statearr_20796_20853 = state_20710;
(statearr_20796_20853[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20854 = state_20710;
state_20710 = G__20854;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19380__auto__ = function(state_20710){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19380__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19380__auto____1.call(this,state_20710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19380__auto____0;
cljs$core$async$mult_$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19380__auto____1;
return cljs$core$async$mult_$_state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto___20798,cs,m,dchan,dctr,done))
})();
var state__19493__auto__ = (function (){var statearr_20797 = f__19492__auto__.call(null);
(statearr_20797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto___20798);

return statearr_20797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto___20798,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args20855 = [];
var len__17884__auto___20858 = arguments.length;
var i__17885__auto___20859 = (0);
while(true){
if((i__17885__auto___20859 < len__17884__auto___20858)){
args20855.push((arguments[i__17885__auto___20859]));

var G__20860 = (i__17885__auto___20859 + (1));
i__17885__auto___20859 = G__20860;
continue;
} else {
}
break;
}

var G__20857 = args20855.length;
switch (G__20857) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20855.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,state_map);
} else {
var m__17482__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,mode);
} else {
var m__17482__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___20872 = arguments.length;
var i__17885__auto___20873 = (0);
while(true){
if((i__17885__auto___20873 < len__17884__auto___20872)){
args__17891__auto__.push((arguments[i__17885__auto___20873]));

var G__20874 = (i__17885__auto___20873 + (1));
i__17885__auto___20873 = G__20874;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((3) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17892__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20866){
var map__20867 = p__20866;
var map__20867__$1 = ((((!((map__20867 == null)))?((((map__20867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20867):map__20867);
var opts = map__20867__$1;
var statearr_20869_20875 = state;
(statearr_20869_20875[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__20867,map__20867__$1,opts){
return (function (val){
var statearr_20870_20876 = state;
(statearr_20870_20876[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20867,map__20867__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_20871_20877 = state;
(statearr_20871_20877[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20862){
var G__20863 = cljs.core.first.call(null,seq20862);
var seq20862__$1 = cljs.core.next.call(null,seq20862);
var G__20864 = cljs.core.first.call(null,seq20862__$1);
var seq20862__$2 = cljs.core.next.call(null,seq20862__$1);
var G__20865 = cljs.core.first.call(null,seq20862__$2);
var seq20862__$3 = cljs.core.next.call(null,seq20862__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20863,G__20864,G__20865,seq20862__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21041 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21041 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21042){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21042 = meta21042;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21041.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21043,meta21042__$1){
var self__ = this;
var _21043__$1 = this;
return (new cljs.core.async.t_cljs$core$async21041(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21042__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21041.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21043){
var self__ = this;
var _21043__$1 = this;
return self__.meta21042;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21041.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21041.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21041.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21041.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21041.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21041.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21041.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21041.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21041.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21042","meta21042",227656076,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21041.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21041.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21041";

cljs.core.async.t_cljs$core$async21041.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21041");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21041 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21041(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21042){
return (new cljs.core.async.t_cljs$core$async21041(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21042));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21041(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19491__auto___21204 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto___21204,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto___21204,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21141){
var state_val_21142 = (state_21141[(1)]);
if((state_val_21142 === (7))){
var inst_21059 = (state_21141[(2)]);
var state_21141__$1 = state_21141;
var statearr_21143_21205 = state_21141__$1;
(statearr_21143_21205[(2)] = inst_21059);

(statearr_21143_21205[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (20))){
var inst_21071 = (state_21141[(7)]);
var state_21141__$1 = state_21141;
var statearr_21144_21206 = state_21141__$1;
(statearr_21144_21206[(2)] = inst_21071);

(statearr_21144_21206[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (27))){
var state_21141__$1 = state_21141;
var statearr_21145_21207 = state_21141__$1;
(statearr_21145_21207[(2)] = null);

(statearr_21145_21207[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (1))){
var inst_21047 = (state_21141[(8)]);
var inst_21047__$1 = calc_state.call(null);
var inst_21049 = (inst_21047__$1 == null);
var inst_21050 = cljs.core.not.call(null,inst_21049);
var state_21141__$1 = (function (){var statearr_21146 = state_21141;
(statearr_21146[(8)] = inst_21047__$1);

return statearr_21146;
})();
if(inst_21050){
var statearr_21147_21208 = state_21141__$1;
(statearr_21147_21208[(1)] = (2));

} else {
var statearr_21148_21209 = state_21141__$1;
(statearr_21148_21209[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (24))){
var inst_21101 = (state_21141[(9)]);
var inst_21094 = (state_21141[(10)]);
var inst_21115 = (state_21141[(11)]);
var inst_21115__$1 = inst_21094.call(null,inst_21101);
var state_21141__$1 = (function (){var statearr_21149 = state_21141;
(statearr_21149[(11)] = inst_21115__$1);

return statearr_21149;
})();
if(cljs.core.truth_(inst_21115__$1)){
var statearr_21150_21210 = state_21141__$1;
(statearr_21150_21210[(1)] = (29));

} else {
var statearr_21151_21211 = state_21141__$1;
(statearr_21151_21211[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (4))){
var inst_21062 = (state_21141[(2)]);
var state_21141__$1 = state_21141;
if(cljs.core.truth_(inst_21062)){
var statearr_21152_21212 = state_21141__$1;
(statearr_21152_21212[(1)] = (8));

} else {
var statearr_21153_21213 = state_21141__$1;
(statearr_21153_21213[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (15))){
var inst_21088 = (state_21141[(2)]);
var state_21141__$1 = state_21141;
if(cljs.core.truth_(inst_21088)){
var statearr_21154_21214 = state_21141__$1;
(statearr_21154_21214[(1)] = (19));

} else {
var statearr_21155_21215 = state_21141__$1;
(statearr_21155_21215[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (21))){
var inst_21093 = (state_21141[(12)]);
var inst_21093__$1 = (state_21141[(2)]);
var inst_21094 = cljs.core.get.call(null,inst_21093__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21095 = cljs.core.get.call(null,inst_21093__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21096 = cljs.core.get.call(null,inst_21093__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21141__$1 = (function (){var statearr_21156 = state_21141;
(statearr_21156[(10)] = inst_21094);

(statearr_21156[(13)] = inst_21095);

(statearr_21156[(12)] = inst_21093__$1);

return statearr_21156;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21141__$1,(22),inst_21096);
} else {
if((state_val_21142 === (31))){
var inst_21123 = (state_21141[(2)]);
var state_21141__$1 = state_21141;
if(cljs.core.truth_(inst_21123)){
var statearr_21157_21216 = state_21141__$1;
(statearr_21157_21216[(1)] = (32));

} else {
var statearr_21158_21217 = state_21141__$1;
(statearr_21158_21217[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (32))){
var inst_21100 = (state_21141[(14)]);
var state_21141__$1 = state_21141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21141__$1,(35),out,inst_21100);
} else {
if((state_val_21142 === (33))){
var inst_21093 = (state_21141[(12)]);
var inst_21071 = inst_21093;
var state_21141__$1 = (function (){var statearr_21159 = state_21141;
(statearr_21159[(7)] = inst_21071);

return statearr_21159;
})();
var statearr_21160_21218 = state_21141__$1;
(statearr_21160_21218[(2)] = null);

(statearr_21160_21218[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (13))){
var inst_21071 = (state_21141[(7)]);
var inst_21078 = inst_21071.cljs$lang$protocol_mask$partition0$;
var inst_21079 = (inst_21078 & (64));
var inst_21080 = inst_21071.cljs$core$ISeq$;
var inst_21081 = (inst_21079) || (inst_21080);
var state_21141__$1 = state_21141;
if(cljs.core.truth_(inst_21081)){
var statearr_21161_21219 = state_21141__$1;
(statearr_21161_21219[(1)] = (16));

} else {
var statearr_21162_21220 = state_21141__$1;
(statearr_21162_21220[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (22))){
var inst_21101 = (state_21141[(9)]);
var inst_21100 = (state_21141[(14)]);
var inst_21099 = (state_21141[(2)]);
var inst_21100__$1 = cljs.core.nth.call(null,inst_21099,(0),null);
var inst_21101__$1 = cljs.core.nth.call(null,inst_21099,(1),null);
var inst_21102 = (inst_21100__$1 == null);
var inst_21103 = cljs.core._EQ_.call(null,inst_21101__$1,change);
var inst_21104 = (inst_21102) || (inst_21103);
var state_21141__$1 = (function (){var statearr_21163 = state_21141;
(statearr_21163[(9)] = inst_21101__$1);

(statearr_21163[(14)] = inst_21100__$1);

return statearr_21163;
})();
if(cljs.core.truth_(inst_21104)){
var statearr_21164_21221 = state_21141__$1;
(statearr_21164_21221[(1)] = (23));

} else {
var statearr_21165_21222 = state_21141__$1;
(statearr_21165_21222[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (36))){
var inst_21093 = (state_21141[(12)]);
var inst_21071 = inst_21093;
var state_21141__$1 = (function (){var statearr_21166 = state_21141;
(statearr_21166[(7)] = inst_21071);

return statearr_21166;
})();
var statearr_21167_21223 = state_21141__$1;
(statearr_21167_21223[(2)] = null);

(statearr_21167_21223[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (29))){
var inst_21115 = (state_21141[(11)]);
var state_21141__$1 = state_21141;
var statearr_21168_21224 = state_21141__$1;
(statearr_21168_21224[(2)] = inst_21115);

(statearr_21168_21224[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (6))){
var state_21141__$1 = state_21141;
var statearr_21169_21225 = state_21141__$1;
(statearr_21169_21225[(2)] = false);

(statearr_21169_21225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (28))){
var inst_21111 = (state_21141[(2)]);
var inst_21112 = calc_state.call(null);
var inst_21071 = inst_21112;
var state_21141__$1 = (function (){var statearr_21170 = state_21141;
(statearr_21170[(15)] = inst_21111);

(statearr_21170[(7)] = inst_21071);

return statearr_21170;
})();
var statearr_21171_21226 = state_21141__$1;
(statearr_21171_21226[(2)] = null);

(statearr_21171_21226[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (25))){
var inst_21137 = (state_21141[(2)]);
var state_21141__$1 = state_21141;
var statearr_21172_21227 = state_21141__$1;
(statearr_21172_21227[(2)] = inst_21137);

(statearr_21172_21227[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (34))){
var inst_21135 = (state_21141[(2)]);
var state_21141__$1 = state_21141;
var statearr_21173_21228 = state_21141__$1;
(statearr_21173_21228[(2)] = inst_21135);

(statearr_21173_21228[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (17))){
var state_21141__$1 = state_21141;
var statearr_21174_21229 = state_21141__$1;
(statearr_21174_21229[(2)] = false);

(statearr_21174_21229[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (3))){
var state_21141__$1 = state_21141;
var statearr_21175_21230 = state_21141__$1;
(statearr_21175_21230[(2)] = false);

(statearr_21175_21230[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (12))){
var inst_21139 = (state_21141[(2)]);
var state_21141__$1 = state_21141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21141__$1,inst_21139);
} else {
if((state_val_21142 === (2))){
var inst_21047 = (state_21141[(8)]);
var inst_21052 = inst_21047.cljs$lang$protocol_mask$partition0$;
var inst_21053 = (inst_21052 & (64));
var inst_21054 = inst_21047.cljs$core$ISeq$;
var inst_21055 = (inst_21053) || (inst_21054);
var state_21141__$1 = state_21141;
if(cljs.core.truth_(inst_21055)){
var statearr_21176_21231 = state_21141__$1;
(statearr_21176_21231[(1)] = (5));

} else {
var statearr_21177_21232 = state_21141__$1;
(statearr_21177_21232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (23))){
var inst_21100 = (state_21141[(14)]);
var inst_21106 = (inst_21100 == null);
var state_21141__$1 = state_21141;
if(cljs.core.truth_(inst_21106)){
var statearr_21178_21233 = state_21141__$1;
(statearr_21178_21233[(1)] = (26));

} else {
var statearr_21179_21234 = state_21141__$1;
(statearr_21179_21234[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (35))){
var inst_21126 = (state_21141[(2)]);
var state_21141__$1 = state_21141;
if(cljs.core.truth_(inst_21126)){
var statearr_21180_21235 = state_21141__$1;
(statearr_21180_21235[(1)] = (36));

} else {
var statearr_21181_21236 = state_21141__$1;
(statearr_21181_21236[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (19))){
var inst_21071 = (state_21141[(7)]);
var inst_21090 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21071);
var state_21141__$1 = state_21141;
var statearr_21182_21237 = state_21141__$1;
(statearr_21182_21237[(2)] = inst_21090);

(statearr_21182_21237[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (11))){
var inst_21071 = (state_21141[(7)]);
var inst_21075 = (inst_21071 == null);
var inst_21076 = cljs.core.not.call(null,inst_21075);
var state_21141__$1 = state_21141;
if(inst_21076){
var statearr_21183_21238 = state_21141__$1;
(statearr_21183_21238[(1)] = (13));

} else {
var statearr_21184_21239 = state_21141__$1;
(statearr_21184_21239[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (9))){
var inst_21047 = (state_21141[(8)]);
var state_21141__$1 = state_21141;
var statearr_21185_21240 = state_21141__$1;
(statearr_21185_21240[(2)] = inst_21047);

(statearr_21185_21240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (5))){
var state_21141__$1 = state_21141;
var statearr_21186_21241 = state_21141__$1;
(statearr_21186_21241[(2)] = true);

(statearr_21186_21241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (14))){
var state_21141__$1 = state_21141;
var statearr_21187_21242 = state_21141__$1;
(statearr_21187_21242[(2)] = false);

(statearr_21187_21242[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (26))){
var inst_21101 = (state_21141[(9)]);
var inst_21108 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21101);
var state_21141__$1 = state_21141;
var statearr_21188_21243 = state_21141__$1;
(statearr_21188_21243[(2)] = inst_21108);

(statearr_21188_21243[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (16))){
var state_21141__$1 = state_21141;
var statearr_21189_21244 = state_21141__$1;
(statearr_21189_21244[(2)] = true);

(statearr_21189_21244[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (38))){
var inst_21131 = (state_21141[(2)]);
var state_21141__$1 = state_21141;
var statearr_21190_21245 = state_21141__$1;
(statearr_21190_21245[(2)] = inst_21131);

(statearr_21190_21245[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (30))){
var inst_21101 = (state_21141[(9)]);
var inst_21094 = (state_21141[(10)]);
var inst_21095 = (state_21141[(13)]);
var inst_21118 = cljs.core.empty_QMARK_.call(null,inst_21094);
var inst_21119 = inst_21095.call(null,inst_21101);
var inst_21120 = cljs.core.not.call(null,inst_21119);
var inst_21121 = (inst_21118) && (inst_21120);
var state_21141__$1 = state_21141;
var statearr_21191_21246 = state_21141__$1;
(statearr_21191_21246[(2)] = inst_21121);

(statearr_21191_21246[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (10))){
var inst_21047 = (state_21141[(8)]);
var inst_21067 = (state_21141[(2)]);
var inst_21068 = cljs.core.get.call(null,inst_21067,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21069 = cljs.core.get.call(null,inst_21067,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21070 = cljs.core.get.call(null,inst_21067,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21071 = inst_21047;
var state_21141__$1 = (function (){var statearr_21192 = state_21141;
(statearr_21192[(16)] = inst_21068);

(statearr_21192[(17)] = inst_21070);

(statearr_21192[(18)] = inst_21069);

(statearr_21192[(7)] = inst_21071);

return statearr_21192;
})();
var statearr_21193_21247 = state_21141__$1;
(statearr_21193_21247[(2)] = null);

(statearr_21193_21247[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (18))){
var inst_21085 = (state_21141[(2)]);
var state_21141__$1 = state_21141;
var statearr_21194_21248 = state_21141__$1;
(statearr_21194_21248[(2)] = inst_21085);

(statearr_21194_21248[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (37))){
var state_21141__$1 = state_21141;
var statearr_21195_21249 = state_21141__$1;
(statearr_21195_21249[(2)] = null);

(statearr_21195_21249[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21142 === (8))){
var inst_21047 = (state_21141[(8)]);
var inst_21064 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21047);
var state_21141__$1 = state_21141;
var statearr_21196_21250 = state_21141__$1;
(statearr_21196_21250[(2)] = inst_21064);

(statearr_21196_21250[(1)] = (10));


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
});})(c__19491__auto___21204,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19379__auto__,c__19491__auto___21204,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19380__auto__ = null;
var cljs$core$async$mix_$_state_machine__19380__auto____0 = (function (){
var statearr_21200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21200[(0)] = cljs$core$async$mix_$_state_machine__19380__auto__);

(statearr_21200[(1)] = (1));

return statearr_21200;
});
var cljs$core$async$mix_$_state_machine__19380__auto____1 = (function (state_21141){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_21141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e21201){if((e21201 instanceof Object)){
var ex__19383__auto__ = e21201;
var statearr_21202_21251 = state_21141;
(statearr_21202_21251[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21252 = state_21141;
state_21141 = G__21252;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19380__auto__ = function(state_21141){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19380__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19380__auto____1.call(this,state_21141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19380__auto____0;
cljs$core$async$mix_$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19380__auto____1;
return cljs$core$async$mix_$_state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto___21204,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19493__auto__ = (function (){var statearr_21203 = f__19492__auto__.call(null);
(statearr_21203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto___21204);

return statearr_21203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto___21204,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args21253 = [];
var len__17884__auto___21256 = arguments.length;
var i__17885__auto___21257 = (0);
while(true){
if((i__17885__auto___21257 < len__17884__auto___21256)){
args21253.push((arguments[i__17885__auto___21257]));

var G__21258 = (i__17885__auto___21257 + (1));
i__17885__auto___21257 = G__21258;
continue;
} else {
}
break;
}

var G__21255 = args21253.length;
switch (G__21255) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21253.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args21261 = [];
var len__17884__auto___21386 = arguments.length;
var i__17885__auto___21387 = (0);
while(true){
if((i__17885__auto___21387 < len__17884__auto___21386)){
args21261.push((arguments[i__17885__auto___21387]));

var G__21388 = (i__17885__auto___21387 + (1));
i__17885__auto___21387 = G__21388;
continue;
} else {
}
break;
}

var G__21263 = args21261.length;
switch (G__21263) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21261.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16826__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16826__auto__,mults){
return (function (p1__21260_SHARP_){
if(cljs.core.truth_(p1__21260_SHARP_.call(null,topic))){
return p1__21260_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21260_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16826__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21264 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21264 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21265){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21265 = meta21265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21266,meta21265__$1){
var self__ = this;
var _21266__$1 = this;
return (new cljs.core.async.t_cljs$core$async21264(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21265__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21264.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21266){
var self__ = this;
var _21266__$1 = this;
return self__.meta21265;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21264.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21264.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21264.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async21264.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21264.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21264.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21264.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21264.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21265","meta21265",-684314173,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21264.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21264";

cljs.core.async.t_cljs$core$async21264.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21264");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async21264 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21264(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21265){
return (new cljs.core.async.t_cljs$core$async21264(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21265));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21264(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19491__auto___21390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto___21390,mults,ensure_mult,p){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto___21390,mults,ensure_mult,p){
return (function (state_21338){
var state_val_21339 = (state_21338[(1)]);
if((state_val_21339 === (7))){
var inst_21334 = (state_21338[(2)]);
var state_21338__$1 = state_21338;
var statearr_21340_21391 = state_21338__$1;
(statearr_21340_21391[(2)] = inst_21334);

(statearr_21340_21391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (20))){
var state_21338__$1 = state_21338;
var statearr_21341_21392 = state_21338__$1;
(statearr_21341_21392[(2)] = null);

(statearr_21341_21392[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (1))){
var state_21338__$1 = state_21338;
var statearr_21342_21393 = state_21338__$1;
(statearr_21342_21393[(2)] = null);

(statearr_21342_21393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (24))){
var inst_21317 = (state_21338[(7)]);
var inst_21326 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21317);
var state_21338__$1 = state_21338;
var statearr_21343_21394 = state_21338__$1;
(statearr_21343_21394[(2)] = inst_21326);

(statearr_21343_21394[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (4))){
var inst_21269 = (state_21338[(8)]);
var inst_21269__$1 = (state_21338[(2)]);
var inst_21270 = (inst_21269__$1 == null);
var state_21338__$1 = (function (){var statearr_21344 = state_21338;
(statearr_21344[(8)] = inst_21269__$1);

return statearr_21344;
})();
if(cljs.core.truth_(inst_21270)){
var statearr_21345_21395 = state_21338__$1;
(statearr_21345_21395[(1)] = (5));

} else {
var statearr_21346_21396 = state_21338__$1;
(statearr_21346_21396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (15))){
var inst_21311 = (state_21338[(2)]);
var state_21338__$1 = state_21338;
var statearr_21347_21397 = state_21338__$1;
(statearr_21347_21397[(2)] = inst_21311);

(statearr_21347_21397[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (21))){
var inst_21331 = (state_21338[(2)]);
var state_21338__$1 = (function (){var statearr_21348 = state_21338;
(statearr_21348[(9)] = inst_21331);

return statearr_21348;
})();
var statearr_21349_21398 = state_21338__$1;
(statearr_21349_21398[(2)] = null);

(statearr_21349_21398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (13))){
var inst_21293 = (state_21338[(10)]);
var inst_21295 = cljs.core.chunked_seq_QMARK_.call(null,inst_21293);
var state_21338__$1 = state_21338;
if(inst_21295){
var statearr_21350_21399 = state_21338__$1;
(statearr_21350_21399[(1)] = (16));

} else {
var statearr_21351_21400 = state_21338__$1;
(statearr_21351_21400[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (22))){
var inst_21323 = (state_21338[(2)]);
var state_21338__$1 = state_21338;
if(cljs.core.truth_(inst_21323)){
var statearr_21352_21401 = state_21338__$1;
(statearr_21352_21401[(1)] = (23));

} else {
var statearr_21353_21402 = state_21338__$1;
(statearr_21353_21402[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (6))){
var inst_21319 = (state_21338[(11)]);
var inst_21269 = (state_21338[(8)]);
var inst_21317 = (state_21338[(7)]);
var inst_21317__$1 = topic_fn.call(null,inst_21269);
var inst_21318 = cljs.core.deref.call(null,mults);
var inst_21319__$1 = cljs.core.get.call(null,inst_21318,inst_21317__$1);
var state_21338__$1 = (function (){var statearr_21354 = state_21338;
(statearr_21354[(11)] = inst_21319__$1);

(statearr_21354[(7)] = inst_21317__$1);

return statearr_21354;
})();
if(cljs.core.truth_(inst_21319__$1)){
var statearr_21355_21403 = state_21338__$1;
(statearr_21355_21403[(1)] = (19));

} else {
var statearr_21356_21404 = state_21338__$1;
(statearr_21356_21404[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (25))){
var inst_21328 = (state_21338[(2)]);
var state_21338__$1 = state_21338;
var statearr_21357_21405 = state_21338__$1;
(statearr_21357_21405[(2)] = inst_21328);

(statearr_21357_21405[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (17))){
var inst_21293 = (state_21338[(10)]);
var inst_21302 = cljs.core.first.call(null,inst_21293);
var inst_21303 = cljs.core.async.muxch_STAR_.call(null,inst_21302);
var inst_21304 = cljs.core.async.close_BANG_.call(null,inst_21303);
var inst_21305 = cljs.core.next.call(null,inst_21293);
var inst_21279 = inst_21305;
var inst_21280 = null;
var inst_21281 = (0);
var inst_21282 = (0);
var state_21338__$1 = (function (){var statearr_21358 = state_21338;
(statearr_21358[(12)] = inst_21281);

(statearr_21358[(13)] = inst_21304);

(statearr_21358[(14)] = inst_21279);

(statearr_21358[(15)] = inst_21282);

(statearr_21358[(16)] = inst_21280);

return statearr_21358;
})();
var statearr_21359_21406 = state_21338__$1;
(statearr_21359_21406[(2)] = null);

(statearr_21359_21406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (3))){
var inst_21336 = (state_21338[(2)]);
var state_21338__$1 = state_21338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21338__$1,inst_21336);
} else {
if((state_val_21339 === (12))){
var inst_21313 = (state_21338[(2)]);
var state_21338__$1 = state_21338;
var statearr_21360_21407 = state_21338__$1;
(statearr_21360_21407[(2)] = inst_21313);

(statearr_21360_21407[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (2))){
var state_21338__$1 = state_21338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21338__$1,(4),ch);
} else {
if((state_val_21339 === (23))){
var state_21338__$1 = state_21338;
var statearr_21361_21408 = state_21338__$1;
(statearr_21361_21408[(2)] = null);

(statearr_21361_21408[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (19))){
var inst_21319 = (state_21338[(11)]);
var inst_21269 = (state_21338[(8)]);
var inst_21321 = cljs.core.async.muxch_STAR_.call(null,inst_21319);
var state_21338__$1 = state_21338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21338__$1,(22),inst_21321,inst_21269);
} else {
if((state_val_21339 === (11))){
var inst_21279 = (state_21338[(14)]);
var inst_21293 = (state_21338[(10)]);
var inst_21293__$1 = cljs.core.seq.call(null,inst_21279);
var state_21338__$1 = (function (){var statearr_21362 = state_21338;
(statearr_21362[(10)] = inst_21293__$1);

return statearr_21362;
})();
if(inst_21293__$1){
var statearr_21363_21409 = state_21338__$1;
(statearr_21363_21409[(1)] = (13));

} else {
var statearr_21364_21410 = state_21338__$1;
(statearr_21364_21410[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (9))){
var inst_21315 = (state_21338[(2)]);
var state_21338__$1 = state_21338;
var statearr_21365_21411 = state_21338__$1;
(statearr_21365_21411[(2)] = inst_21315);

(statearr_21365_21411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (5))){
var inst_21276 = cljs.core.deref.call(null,mults);
var inst_21277 = cljs.core.vals.call(null,inst_21276);
var inst_21278 = cljs.core.seq.call(null,inst_21277);
var inst_21279 = inst_21278;
var inst_21280 = null;
var inst_21281 = (0);
var inst_21282 = (0);
var state_21338__$1 = (function (){var statearr_21366 = state_21338;
(statearr_21366[(12)] = inst_21281);

(statearr_21366[(14)] = inst_21279);

(statearr_21366[(15)] = inst_21282);

(statearr_21366[(16)] = inst_21280);

return statearr_21366;
})();
var statearr_21367_21412 = state_21338__$1;
(statearr_21367_21412[(2)] = null);

(statearr_21367_21412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (14))){
var state_21338__$1 = state_21338;
var statearr_21371_21413 = state_21338__$1;
(statearr_21371_21413[(2)] = null);

(statearr_21371_21413[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (16))){
var inst_21293 = (state_21338[(10)]);
var inst_21297 = cljs.core.chunk_first.call(null,inst_21293);
var inst_21298 = cljs.core.chunk_rest.call(null,inst_21293);
var inst_21299 = cljs.core.count.call(null,inst_21297);
var inst_21279 = inst_21298;
var inst_21280 = inst_21297;
var inst_21281 = inst_21299;
var inst_21282 = (0);
var state_21338__$1 = (function (){var statearr_21372 = state_21338;
(statearr_21372[(12)] = inst_21281);

(statearr_21372[(14)] = inst_21279);

(statearr_21372[(15)] = inst_21282);

(statearr_21372[(16)] = inst_21280);

return statearr_21372;
})();
var statearr_21373_21414 = state_21338__$1;
(statearr_21373_21414[(2)] = null);

(statearr_21373_21414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (10))){
var inst_21281 = (state_21338[(12)]);
var inst_21279 = (state_21338[(14)]);
var inst_21282 = (state_21338[(15)]);
var inst_21280 = (state_21338[(16)]);
var inst_21287 = cljs.core._nth.call(null,inst_21280,inst_21282);
var inst_21288 = cljs.core.async.muxch_STAR_.call(null,inst_21287);
var inst_21289 = cljs.core.async.close_BANG_.call(null,inst_21288);
var inst_21290 = (inst_21282 + (1));
var tmp21368 = inst_21281;
var tmp21369 = inst_21279;
var tmp21370 = inst_21280;
var inst_21279__$1 = tmp21369;
var inst_21280__$1 = tmp21370;
var inst_21281__$1 = tmp21368;
var inst_21282__$1 = inst_21290;
var state_21338__$1 = (function (){var statearr_21374 = state_21338;
(statearr_21374[(17)] = inst_21289);

(statearr_21374[(12)] = inst_21281__$1);

(statearr_21374[(14)] = inst_21279__$1);

(statearr_21374[(15)] = inst_21282__$1);

(statearr_21374[(16)] = inst_21280__$1);

return statearr_21374;
})();
var statearr_21375_21415 = state_21338__$1;
(statearr_21375_21415[(2)] = null);

(statearr_21375_21415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (18))){
var inst_21308 = (state_21338[(2)]);
var state_21338__$1 = state_21338;
var statearr_21376_21416 = state_21338__$1;
(statearr_21376_21416[(2)] = inst_21308);

(statearr_21376_21416[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (8))){
var inst_21281 = (state_21338[(12)]);
var inst_21282 = (state_21338[(15)]);
var inst_21284 = (inst_21282 < inst_21281);
var inst_21285 = inst_21284;
var state_21338__$1 = state_21338;
if(cljs.core.truth_(inst_21285)){
var statearr_21377_21417 = state_21338__$1;
(statearr_21377_21417[(1)] = (10));

} else {
var statearr_21378_21418 = state_21338__$1;
(statearr_21378_21418[(1)] = (11));

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
});})(c__19491__auto___21390,mults,ensure_mult,p))
;
return ((function (switch__19379__auto__,c__19491__auto___21390,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19380__auto__ = null;
var cljs$core$async$state_machine__19380__auto____0 = (function (){
var statearr_21382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21382[(0)] = cljs$core$async$state_machine__19380__auto__);

(statearr_21382[(1)] = (1));

return statearr_21382;
});
var cljs$core$async$state_machine__19380__auto____1 = (function (state_21338){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_21338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e21383){if((e21383 instanceof Object)){
var ex__19383__auto__ = e21383;
var statearr_21384_21419 = state_21338;
(statearr_21384_21419[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21420 = state_21338;
state_21338 = G__21420;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
cljs$core$async$state_machine__19380__auto__ = function(state_21338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19380__auto____1.call(this,state_21338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19380__auto____0;
cljs$core$async$state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19380__auto____1;
return cljs$core$async$state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto___21390,mults,ensure_mult,p))
})();
var state__19493__auto__ = (function (){var statearr_21385 = f__19492__auto__.call(null);
(statearr_21385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto___21390);

return statearr_21385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto___21390,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args21421 = [];
var len__17884__auto___21424 = arguments.length;
var i__17885__auto___21425 = (0);
while(true){
if((i__17885__auto___21425 < len__17884__auto___21424)){
args21421.push((arguments[i__17885__auto___21425]));

var G__21426 = (i__17885__auto___21425 + (1));
i__17885__auto___21425 = G__21426;
continue;
} else {
}
break;
}

var G__21423 = args21421.length;
switch (G__21423) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21421.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args21428 = [];
var len__17884__auto___21431 = arguments.length;
var i__17885__auto___21432 = (0);
while(true){
if((i__17885__auto___21432 < len__17884__auto___21431)){
args21428.push((arguments[i__17885__auto___21432]));

var G__21433 = (i__17885__auto___21432 + (1));
i__17885__auto___21432 = G__21433;
continue;
} else {
}
break;
}

var G__21430 = args21428.length;
switch (G__21430) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21428.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args21435 = [];
var len__17884__auto___21506 = arguments.length;
var i__17885__auto___21507 = (0);
while(true){
if((i__17885__auto___21507 < len__17884__auto___21506)){
args21435.push((arguments[i__17885__auto___21507]));

var G__21508 = (i__17885__auto___21507 + (1));
i__17885__auto___21507 = G__21508;
continue;
} else {
}
break;
}

var G__21437 = args21435.length;
switch (G__21437) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21435.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19491__auto___21510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto___21510,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto___21510,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21476){
var state_val_21477 = (state_21476[(1)]);
if((state_val_21477 === (7))){
var state_21476__$1 = state_21476;
var statearr_21478_21511 = state_21476__$1;
(statearr_21478_21511[(2)] = null);

(statearr_21478_21511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (1))){
var state_21476__$1 = state_21476;
var statearr_21479_21512 = state_21476__$1;
(statearr_21479_21512[(2)] = null);

(statearr_21479_21512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (4))){
var inst_21440 = (state_21476[(7)]);
var inst_21442 = (inst_21440 < cnt);
var state_21476__$1 = state_21476;
if(cljs.core.truth_(inst_21442)){
var statearr_21480_21513 = state_21476__$1;
(statearr_21480_21513[(1)] = (6));

} else {
var statearr_21481_21514 = state_21476__$1;
(statearr_21481_21514[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (15))){
var inst_21472 = (state_21476[(2)]);
var state_21476__$1 = state_21476;
var statearr_21482_21515 = state_21476__$1;
(statearr_21482_21515[(2)] = inst_21472);

(statearr_21482_21515[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (13))){
var inst_21465 = cljs.core.async.close_BANG_.call(null,out);
var state_21476__$1 = state_21476;
var statearr_21483_21516 = state_21476__$1;
(statearr_21483_21516[(2)] = inst_21465);

(statearr_21483_21516[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (6))){
var state_21476__$1 = state_21476;
var statearr_21484_21517 = state_21476__$1;
(statearr_21484_21517[(2)] = null);

(statearr_21484_21517[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (3))){
var inst_21474 = (state_21476[(2)]);
var state_21476__$1 = state_21476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21476__$1,inst_21474);
} else {
if((state_val_21477 === (12))){
var inst_21462 = (state_21476[(8)]);
var inst_21462__$1 = (state_21476[(2)]);
var inst_21463 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21462__$1);
var state_21476__$1 = (function (){var statearr_21485 = state_21476;
(statearr_21485[(8)] = inst_21462__$1);

return statearr_21485;
})();
if(cljs.core.truth_(inst_21463)){
var statearr_21486_21518 = state_21476__$1;
(statearr_21486_21518[(1)] = (13));

} else {
var statearr_21487_21519 = state_21476__$1;
(statearr_21487_21519[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (2))){
var inst_21439 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21440 = (0);
var state_21476__$1 = (function (){var statearr_21488 = state_21476;
(statearr_21488[(7)] = inst_21440);

(statearr_21488[(9)] = inst_21439);

return statearr_21488;
})();
var statearr_21489_21520 = state_21476__$1;
(statearr_21489_21520[(2)] = null);

(statearr_21489_21520[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (11))){
var inst_21440 = (state_21476[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21476,(10),Object,null,(9));
var inst_21449 = chs__$1.call(null,inst_21440);
var inst_21450 = done.call(null,inst_21440);
var inst_21451 = cljs.core.async.take_BANG_.call(null,inst_21449,inst_21450);
var state_21476__$1 = state_21476;
var statearr_21490_21521 = state_21476__$1;
(statearr_21490_21521[(2)] = inst_21451);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21476__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (9))){
var inst_21440 = (state_21476[(7)]);
var inst_21453 = (state_21476[(2)]);
var inst_21454 = (inst_21440 + (1));
var inst_21440__$1 = inst_21454;
var state_21476__$1 = (function (){var statearr_21491 = state_21476;
(statearr_21491[(7)] = inst_21440__$1);

(statearr_21491[(10)] = inst_21453);

return statearr_21491;
})();
var statearr_21492_21522 = state_21476__$1;
(statearr_21492_21522[(2)] = null);

(statearr_21492_21522[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (5))){
var inst_21460 = (state_21476[(2)]);
var state_21476__$1 = (function (){var statearr_21493 = state_21476;
(statearr_21493[(11)] = inst_21460);

return statearr_21493;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21476__$1,(12),dchan);
} else {
if((state_val_21477 === (14))){
var inst_21462 = (state_21476[(8)]);
var inst_21467 = cljs.core.apply.call(null,f,inst_21462);
var state_21476__$1 = state_21476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21476__$1,(16),out,inst_21467);
} else {
if((state_val_21477 === (16))){
var inst_21469 = (state_21476[(2)]);
var state_21476__$1 = (function (){var statearr_21494 = state_21476;
(statearr_21494[(12)] = inst_21469);

return statearr_21494;
})();
var statearr_21495_21523 = state_21476__$1;
(statearr_21495_21523[(2)] = null);

(statearr_21495_21523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (10))){
var inst_21444 = (state_21476[(2)]);
var inst_21445 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21476__$1 = (function (){var statearr_21496 = state_21476;
(statearr_21496[(13)] = inst_21444);

return statearr_21496;
})();
var statearr_21497_21524 = state_21476__$1;
(statearr_21497_21524[(2)] = inst_21445);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21476__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21477 === (8))){
var inst_21458 = (state_21476[(2)]);
var state_21476__$1 = state_21476;
var statearr_21498_21525 = state_21476__$1;
(statearr_21498_21525[(2)] = inst_21458);

(statearr_21498_21525[(1)] = (5));


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
});})(c__19491__auto___21510,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19379__auto__,c__19491__auto___21510,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19380__auto__ = null;
var cljs$core$async$state_machine__19380__auto____0 = (function (){
var statearr_21502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21502[(0)] = cljs$core$async$state_machine__19380__auto__);

(statearr_21502[(1)] = (1));

return statearr_21502;
});
var cljs$core$async$state_machine__19380__auto____1 = (function (state_21476){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_21476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e21503){if((e21503 instanceof Object)){
var ex__19383__auto__ = e21503;
var statearr_21504_21526 = state_21476;
(statearr_21504_21526[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21503;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21527 = state_21476;
state_21476 = G__21527;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
cljs$core$async$state_machine__19380__auto__ = function(state_21476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19380__auto____1.call(this,state_21476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19380__auto____0;
cljs$core$async$state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19380__auto____1;
return cljs$core$async$state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto___21510,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19493__auto__ = (function (){var statearr_21505 = f__19492__auto__.call(null);
(statearr_21505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto___21510);

return statearr_21505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto___21510,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args21529 = [];
var len__17884__auto___21585 = arguments.length;
var i__17885__auto___21586 = (0);
while(true){
if((i__17885__auto___21586 < len__17884__auto___21585)){
args21529.push((arguments[i__17885__auto___21586]));

var G__21587 = (i__17885__auto___21586 + (1));
i__17885__auto___21586 = G__21587;
continue;
} else {
}
break;
}

var G__21531 = args21529.length;
switch (G__21531) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21529.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19491__auto___21589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto___21589,out){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto___21589,out){
return (function (state_21561){
var state_val_21562 = (state_21561[(1)]);
if((state_val_21562 === (7))){
var inst_21540 = (state_21561[(7)]);
var inst_21541 = (state_21561[(8)]);
var inst_21540__$1 = (state_21561[(2)]);
var inst_21541__$1 = cljs.core.nth.call(null,inst_21540__$1,(0),null);
var inst_21542 = cljs.core.nth.call(null,inst_21540__$1,(1),null);
var inst_21543 = (inst_21541__$1 == null);
var state_21561__$1 = (function (){var statearr_21563 = state_21561;
(statearr_21563[(9)] = inst_21542);

(statearr_21563[(7)] = inst_21540__$1);

(statearr_21563[(8)] = inst_21541__$1);

return statearr_21563;
})();
if(cljs.core.truth_(inst_21543)){
var statearr_21564_21590 = state_21561__$1;
(statearr_21564_21590[(1)] = (8));

} else {
var statearr_21565_21591 = state_21561__$1;
(statearr_21565_21591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21562 === (1))){
var inst_21532 = cljs.core.vec.call(null,chs);
var inst_21533 = inst_21532;
var state_21561__$1 = (function (){var statearr_21566 = state_21561;
(statearr_21566[(10)] = inst_21533);

return statearr_21566;
})();
var statearr_21567_21592 = state_21561__$1;
(statearr_21567_21592[(2)] = null);

(statearr_21567_21592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21562 === (4))){
var inst_21533 = (state_21561[(10)]);
var state_21561__$1 = state_21561;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21561__$1,(7),inst_21533);
} else {
if((state_val_21562 === (6))){
var inst_21557 = (state_21561[(2)]);
var state_21561__$1 = state_21561;
var statearr_21568_21593 = state_21561__$1;
(statearr_21568_21593[(2)] = inst_21557);

(statearr_21568_21593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21562 === (3))){
var inst_21559 = (state_21561[(2)]);
var state_21561__$1 = state_21561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21561__$1,inst_21559);
} else {
if((state_val_21562 === (2))){
var inst_21533 = (state_21561[(10)]);
var inst_21535 = cljs.core.count.call(null,inst_21533);
var inst_21536 = (inst_21535 > (0));
var state_21561__$1 = state_21561;
if(cljs.core.truth_(inst_21536)){
var statearr_21570_21594 = state_21561__$1;
(statearr_21570_21594[(1)] = (4));

} else {
var statearr_21571_21595 = state_21561__$1;
(statearr_21571_21595[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21562 === (11))){
var inst_21533 = (state_21561[(10)]);
var inst_21550 = (state_21561[(2)]);
var tmp21569 = inst_21533;
var inst_21533__$1 = tmp21569;
var state_21561__$1 = (function (){var statearr_21572 = state_21561;
(statearr_21572[(10)] = inst_21533__$1);

(statearr_21572[(11)] = inst_21550);

return statearr_21572;
})();
var statearr_21573_21596 = state_21561__$1;
(statearr_21573_21596[(2)] = null);

(statearr_21573_21596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21562 === (9))){
var inst_21541 = (state_21561[(8)]);
var state_21561__$1 = state_21561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21561__$1,(11),out,inst_21541);
} else {
if((state_val_21562 === (5))){
var inst_21555 = cljs.core.async.close_BANG_.call(null,out);
var state_21561__$1 = state_21561;
var statearr_21574_21597 = state_21561__$1;
(statearr_21574_21597[(2)] = inst_21555);

(statearr_21574_21597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21562 === (10))){
var inst_21553 = (state_21561[(2)]);
var state_21561__$1 = state_21561;
var statearr_21575_21598 = state_21561__$1;
(statearr_21575_21598[(2)] = inst_21553);

(statearr_21575_21598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21562 === (8))){
var inst_21542 = (state_21561[(9)]);
var inst_21533 = (state_21561[(10)]);
var inst_21540 = (state_21561[(7)]);
var inst_21541 = (state_21561[(8)]);
var inst_21545 = (function (){var cs = inst_21533;
var vec__21538 = inst_21540;
var v = inst_21541;
var c = inst_21542;
return ((function (cs,vec__21538,v,c,inst_21542,inst_21533,inst_21540,inst_21541,state_val_21562,c__19491__auto___21589,out){
return (function (p1__21528_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21528_SHARP_);
});
;})(cs,vec__21538,v,c,inst_21542,inst_21533,inst_21540,inst_21541,state_val_21562,c__19491__auto___21589,out))
})();
var inst_21546 = cljs.core.filterv.call(null,inst_21545,inst_21533);
var inst_21533__$1 = inst_21546;
var state_21561__$1 = (function (){var statearr_21576 = state_21561;
(statearr_21576[(10)] = inst_21533__$1);

return statearr_21576;
})();
var statearr_21577_21599 = state_21561__$1;
(statearr_21577_21599[(2)] = null);

(statearr_21577_21599[(1)] = (2));


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
});})(c__19491__auto___21589,out))
;
return ((function (switch__19379__auto__,c__19491__auto___21589,out){
return (function() {
var cljs$core$async$state_machine__19380__auto__ = null;
var cljs$core$async$state_machine__19380__auto____0 = (function (){
var statearr_21581 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21581[(0)] = cljs$core$async$state_machine__19380__auto__);

(statearr_21581[(1)] = (1));

return statearr_21581;
});
var cljs$core$async$state_machine__19380__auto____1 = (function (state_21561){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_21561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e21582){if((e21582 instanceof Object)){
var ex__19383__auto__ = e21582;
var statearr_21583_21600 = state_21561;
(statearr_21583_21600[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21601 = state_21561;
state_21561 = G__21601;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
cljs$core$async$state_machine__19380__auto__ = function(state_21561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19380__auto____1.call(this,state_21561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19380__auto____0;
cljs$core$async$state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19380__auto____1;
return cljs$core$async$state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto___21589,out))
})();
var state__19493__auto__ = (function (){var statearr_21584 = f__19492__auto__.call(null);
(statearr_21584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto___21589);

return statearr_21584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto___21589,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args21602 = [];
var len__17884__auto___21651 = arguments.length;
var i__17885__auto___21652 = (0);
while(true){
if((i__17885__auto___21652 < len__17884__auto___21651)){
args21602.push((arguments[i__17885__auto___21652]));

var G__21653 = (i__17885__auto___21652 + (1));
i__17885__auto___21652 = G__21653;
continue;
} else {
}
break;
}

var G__21604 = args21602.length;
switch (G__21604) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21602.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19491__auto___21655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto___21655,out){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto___21655,out){
return (function (state_21628){
var state_val_21629 = (state_21628[(1)]);
if((state_val_21629 === (7))){
var inst_21610 = (state_21628[(7)]);
var inst_21610__$1 = (state_21628[(2)]);
var inst_21611 = (inst_21610__$1 == null);
var inst_21612 = cljs.core.not.call(null,inst_21611);
var state_21628__$1 = (function (){var statearr_21630 = state_21628;
(statearr_21630[(7)] = inst_21610__$1);

return statearr_21630;
})();
if(inst_21612){
var statearr_21631_21656 = state_21628__$1;
(statearr_21631_21656[(1)] = (8));

} else {
var statearr_21632_21657 = state_21628__$1;
(statearr_21632_21657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21629 === (1))){
var inst_21605 = (0);
var state_21628__$1 = (function (){var statearr_21633 = state_21628;
(statearr_21633[(8)] = inst_21605);

return statearr_21633;
})();
var statearr_21634_21658 = state_21628__$1;
(statearr_21634_21658[(2)] = null);

(statearr_21634_21658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21629 === (4))){
var state_21628__$1 = state_21628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21628__$1,(7),ch);
} else {
if((state_val_21629 === (6))){
var inst_21623 = (state_21628[(2)]);
var state_21628__$1 = state_21628;
var statearr_21635_21659 = state_21628__$1;
(statearr_21635_21659[(2)] = inst_21623);

(statearr_21635_21659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21629 === (3))){
var inst_21625 = (state_21628[(2)]);
var inst_21626 = cljs.core.async.close_BANG_.call(null,out);
var state_21628__$1 = (function (){var statearr_21636 = state_21628;
(statearr_21636[(9)] = inst_21625);

return statearr_21636;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21628__$1,inst_21626);
} else {
if((state_val_21629 === (2))){
var inst_21605 = (state_21628[(8)]);
var inst_21607 = (inst_21605 < n);
var state_21628__$1 = state_21628;
if(cljs.core.truth_(inst_21607)){
var statearr_21637_21660 = state_21628__$1;
(statearr_21637_21660[(1)] = (4));

} else {
var statearr_21638_21661 = state_21628__$1;
(statearr_21638_21661[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21629 === (11))){
var inst_21605 = (state_21628[(8)]);
var inst_21615 = (state_21628[(2)]);
var inst_21616 = (inst_21605 + (1));
var inst_21605__$1 = inst_21616;
var state_21628__$1 = (function (){var statearr_21639 = state_21628;
(statearr_21639[(8)] = inst_21605__$1);

(statearr_21639[(10)] = inst_21615);

return statearr_21639;
})();
var statearr_21640_21662 = state_21628__$1;
(statearr_21640_21662[(2)] = null);

(statearr_21640_21662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21629 === (9))){
var state_21628__$1 = state_21628;
var statearr_21641_21663 = state_21628__$1;
(statearr_21641_21663[(2)] = null);

(statearr_21641_21663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21629 === (5))){
var state_21628__$1 = state_21628;
var statearr_21642_21664 = state_21628__$1;
(statearr_21642_21664[(2)] = null);

(statearr_21642_21664[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21629 === (10))){
var inst_21620 = (state_21628[(2)]);
var state_21628__$1 = state_21628;
var statearr_21643_21665 = state_21628__$1;
(statearr_21643_21665[(2)] = inst_21620);

(statearr_21643_21665[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21629 === (8))){
var inst_21610 = (state_21628[(7)]);
var state_21628__$1 = state_21628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21628__$1,(11),out,inst_21610);
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
});})(c__19491__auto___21655,out))
;
return ((function (switch__19379__auto__,c__19491__auto___21655,out){
return (function() {
var cljs$core$async$state_machine__19380__auto__ = null;
var cljs$core$async$state_machine__19380__auto____0 = (function (){
var statearr_21647 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21647[(0)] = cljs$core$async$state_machine__19380__auto__);

(statearr_21647[(1)] = (1));

return statearr_21647;
});
var cljs$core$async$state_machine__19380__auto____1 = (function (state_21628){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_21628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e21648){if((e21648 instanceof Object)){
var ex__19383__auto__ = e21648;
var statearr_21649_21666 = state_21628;
(statearr_21649_21666[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21667 = state_21628;
state_21628 = G__21667;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
cljs$core$async$state_machine__19380__auto__ = function(state_21628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19380__auto____1.call(this,state_21628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19380__auto____0;
cljs$core$async$state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19380__auto____1;
return cljs$core$async$state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto___21655,out))
})();
var state__19493__auto__ = (function (){var statearr_21650 = f__19492__auto__.call(null);
(statearr_21650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto___21655);

return statearr_21650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto___21655,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21675 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21675 = (function (map_LT_,f,ch,meta21676){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21676 = meta21676;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21677,meta21676__$1){
var self__ = this;
var _21677__$1 = this;
return (new cljs.core.async.t_cljs$core$async21675(self__.map_LT_,self__.f,self__.ch,meta21676__$1));
});

cljs.core.async.t_cljs$core$async21675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21677){
var self__ = this;
var _21677__$1 = this;
return self__.meta21676;
});

cljs.core.async.t_cljs$core$async21675.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21675.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21675.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21675.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21675.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21678 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21678 = (function (map_LT_,f,ch,meta21676,_,fn1,meta21679){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21676 = meta21676;
this._ = _;
this.fn1 = fn1;
this.meta21679 = meta21679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21680,meta21679__$1){
var self__ = this;
var _21680__$1 = this;
return (new cljs.core.async.t_cljs$core$async21678(self__.map_LT_,self__.f,self__.ch,self__.meta21676,self__._,self__.fn1,meta21679__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21678.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21680){
var self__ = this;
var _21680__$1 = this;
return self__.meta21679;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21678.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21678.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21678.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21678.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21668_SHARP_){
return f1.call(null,(((p1__21668_SHARP_ == null))?null:self__.f.call(null,p1__21668_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21678.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21676","meta21676",1560524706,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21675","cljs.core.async/t_cljs$core$async21675",200122127,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21679","meta21679",1474553362,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21678.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21678";

cljs.core.async.t_cljs$core$async21678.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21678");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21678 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21678(map_LT___$1,f__$1,ch__$1,meta21676__$1,___$2,fn1__$1,meta21679){
return (new cljs.core.async.t_cljs$core$async21678(map_LT___$1,f__$1,ch__$1,meta21676__$1,___$2,fn1__$1,meta21679));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21678(self__.map_LT_,self__.f,self__.ch,self__.meta21676,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16814__auto__ = ret;
if(cljs.core.truth_(and__16814__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16814__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21675.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21675.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21675.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21676","meta21676",1560524706,null)], null);
});

cljs.core.async.t_cljs$core$async21675.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21675.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21675";

cljs.core.async.t_cljs$core$async21675.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21675");
});

cljs.core.async.__GT_t_cljs$core$async21675 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21675(map_LT___$1,f__$1,ch__$1,meta21676){
return (new cljs.core.async.t_cljs$core$async21675(map_LT___$1,f__$1,ch__$1,meta21676));
});

}

return (new cljs.core.async.t_cljs$core$async21675(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21684 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21684 = (function (map_GT_,f,ch,meta21685){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21685 = meta21685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21686,meta21685__$1){
var self__ = this;
var _21686__$1 = this;
return (new cljs.core.async.t_cljs$core$async21684(self__.map_GT_,self__.f,self__.ch,meta21685__$1));
});

cljs.core.async.t_cljs$core$async21684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21686){
var self__ = this;
var _21686__$1 = this;
return self__.meta21685;
});

cljs.core.async.t_cljs$core$async21684.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21684.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21684.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21684.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21684.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21684.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21684.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21685","meta21685",213369743,null)], null);
});

cljs.core.async.t_cljs$core$async21684.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21684.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21684";

cljs.core.async.t_cljs$core$async21684.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21684");
});

cljs.core.async.__GT_t_cljs$core$async21684 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21684(map_GT___$1,f__$1,ch__$1,meta21685){
return (new cljs.core.async.t_cljs$core$async21684(map_GT___$1,f__$1,ch__$1,meta21685));
});

}

return (new cljs.core.async.t_cljs$core$async21684(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21690 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21690 = (function (filter_GT_,p,ch,meta21691){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21691 = meta21691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21692,meta21691__$1){
var self__ = this;
var _21692__$1 = this;
return (new cljs.core.async.t_cljs$core$async21690(self__.filter_GT_,self__.p,self__.ch,meta21691__$1));
});

cljs.core.async.t_cljs$core$async21690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21692){
var self__ = this;
var _21692__$1 = this;
return self__.meta21691;
});

cljs.core.async.t_cljs$core$async21690.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21690.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21690.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21690.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21690.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21690.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21690.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21690.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21691","meta21691",110496361,null)], null);
});

cljs.core.async.t_cljs$core$async21690.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21690.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21690";

cljs.core.async.t_cljs$core$async21690.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21690");
});

cljs.core.async.__GT_t_cljs$core$async21690 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21690(filter_GT___$1,p__$1,ch__$1,meta21691){
return (new cljs.core.async.t_cljs$core$async21690(filter_GT___$1,p__$1,ch__$1,meta21691));
});

}

return (new cljs.core.async.t_cljs$core$async21690(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args21693 = [];
var len__17884__auto___21737 = arguments.length;
var i__17885__auto___21738 = (0);
while(true){
if((i__17885__auto___21738 < len__17884__auto___21737)){
args21693.push((arguments[i__17885__auto___21738]));

var G__21739 = (i__17885__auto___21738 + (1));
i__17885__auto___21738 = G__21739;
continue;
} else {
}
break;
}

var G__21695 = args21693.length;
switch (G__21695) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21693.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19491__auto___21741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto___21741,out){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto___21741,out){
return (function (state_21716){
var state_val_21717 = (state_21716[(1)]);
if((state_val_21717 === (7))){
var inst_21712 = (state_21716[(2)]);
var state_21716__$1 = state_21716;
var statearr_21718_21742 = state_21716__$1;
(statearr_21718_21742[(2)] = inst_21712);

(statearr_21718_21742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (1))){
var state_21716__$1 = state_21716;
var statearr_21719_21743 = state_21716__$1;
(statearr_21719_21743[(2)] = null);

(statearr_21719_21743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (4))){
var inst_21698 = (state_21716[(7)]);
var inst_21698__$1 = (state_21716[(2)]);
var inst_21699 = (inst_21698__$1 == null);
var state_21716__$1 = (function (){var statearr_21720 = state_21716;
(statearr_21720[(7)] = inst_21698__$1);

return statearr_21720;
})();
if(cljs.core.truth_(inst_21699)){
var statearr_21721_21744 = state_21716__$1;
(statearr_21721_21744[(1)] = (5));

} else {
var statearr_21722_21745 = state_21716__$1;
(statearr_21722_21745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (6))){
var inst_21698 = (state_21716[(7)]);
var inst_21703 = p.call(null,inst_21698);
var state_21716__$1 = state_21716;
if(cljs.core.truth_(inst_21703)){
var statearr_21723_21746 = state_21716__$1;
(statearr_21723_21746[(1)] = (8));

} else {
var statearr_21724_21747 = state_21716__$1;
(statearr_21724_21747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (3))){
var inst_21714 = (state_21716[(2)]);
var state_21716__$1 = state_21716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21716__$1,inst_21714);
} else {
if((state_val_21717 === (2))){
var state_21716__$1 = state_21716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21716__$1,(4),ch);
} else {
if((state_val_21717 === (11))){
var inst_21706 = (state_21716[(2)]);
var state_21716__$1 = state_21716;
var statearr_21725_21748 = state_21716__$1;
(statearr_21725_21748[(2)] = inst_21706);

(statearr_21725_21748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (9))){
var state_21716__$1 = state_21716;
var statearr_21726_21749 = state_21716__$1;
(statearr_21726_21749[(2)] = null);

(statearr_21726_21749[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (5))){
var inst_21701 = cljs.core.async.close_BANG_.call(null,out);
var state_21716__$1 = state_21716;
var statearr_21727_21750 = state_21716__$1;
(statearr_21727_21750[(2)] = inst_21701);

(statearr_21727_21750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (10))){
var inst_21709 = (state_21716[(2)]);
var state_21716__$1 = (function (){var statearr_21728 = state_21716;
(statearr_21728[(8)] = inst_21709);

return statearr_21728;
})();
var statearr_21729_21751 = state_21716__$1;
(statearr_21729_21751[(2)] = null);

(statearr_21729_21751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21717 === (8))){
var inst_21698 = (state_21716[(7)]);
var state_21716__$1 = state_21716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21716__$1,(11),out,inst_21698);
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
});})(c__19491__auto___21741,out))
;
return ((function (switch__19379__auto__,c__19491__auto___21741,out){
return (function() {
var cljs$core$async$state_machine__19380__auto__ = null;
var cljs$core$async$state_machine__19380__auto____0 = (function (){
var statearr_21733 = [null,null,null,null,null,null,null,null,null];
(statearr_21733[(0)] = cljs$core$async$state_machine__19380__auto__);

(statearr_21733[(1)] = (1));

return statearr_21733;
});
var cljs$core$async$state_machine__19380__auto____1 = (function (state_21716){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_21716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e21734){if((e21734 instanceof Object)){
var ex__19383__auto__ = e21734;
var statearr_21735_21752 = state_21716;
(statearr_21735_21752[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21753 = state_21716;
state_21716 = G__21753;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
cljs$core$async$state_machine__19380__auto__ = function(state_21716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19380__auto____1.call(this,state_21716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19380__auto____0;
cljs$core$async$state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19380__auto____1;
return cljs$core$async$state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto___21741,out))
})();
var state__19493__auto__ = (function (){var statearr_21736 = f__19492__auto__.call(null);
(statearr_21736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto___21741);

return statearr_21736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto___21741,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args21754 = [];
var len__17884__auto___21757 = arguments.length;
var i__17885__auto___21758 = (0);
while(true){
if((i__17885__auto___21758 < len__17884__auto___21757)){
args21754.push((arguments[i__17885__auto___21758]));

var G__21759 = (i__17885__auto___21758 + (1));
i__17885__auto___21758 = G__21759;
continue;
} else {
}
break;
}

var G__21756 = args21754.length;
switch (G__21756) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21754.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19491__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto__){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto__){
return (function (state_21926){
var state_val_21927 = (state_21926[(1)]);
if((state_val_21927 === (7))){
var inst_21922 = (state_21926[(2)]);
var state_21926__$1 = state_21926;
var statearr_21928_21969 = state_21926__$1;
(statearr_21928_21969[(2)] = inst_21922);

(statearr_21928_21969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (20))){
var inst_21892 = (state_21926[(7)]);
var inst_21903 = (state_21926[(2)]);
var inst_21904 = cljs.core.next.call(null,inst_21892);
var inst_21878 = inst_21904;
var inst_21879 = null;
var inst_21880 = (0);
var inst_21881 = (0);
var state_21926__$1 = (function (){var statearr_21929 = state_21926;
(statearr_21929[(8)] = inst_21880);

(statearr_21929[(9)] = inst_21903);

(statearr_21929[(10)] = inst_21879);

(statearr_21929[(11)] = inst_21878);

(statearr_21929[(12)] = inst_21881);

return statearr_21929;
})();
var statearr_21930_21970 = state_21926__$1;
(statearr_21930_21970[(2)] = null);

(statearr_21930_21970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (1))){
var state_21926__$1 = state_21926;
var statearr_21931_21971 = state_21926__$1;
(statearr_21931_21971[(2)] = null);

(statearr_21931_21971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (4))){
var inst_21867 = (state_21926[(13)]);
var inst_21867__$1 = (state_21926[(2)]);
var inst_21868 = (inst_21867__$1 == null);
var state_21926__$1 = (function (){var statearr_21932 = state_21926;
(statearr_21932[(13)] = inst_21867__$1);

return statearr_21932;
})();
if(cljs.core.truth_(inst_21868)){
var statearr_21933_21972 = state_21926__$1;
(statearr_21933_21972[(1)] = (5));

} else {
var statearr_21934_21973 = state_21926__$1;
(statearr_21934_21973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (15))){
var state_21926__$1 = state_21926;
var statearr_21938_21974 = state_21926__$1;
(statearr_21938_21974[(2)] = null);

(statearr_21938_21974[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (21))){
var state_21926__$1 = state_21926;
var statearr_21939_21975 = state_21926__$1;
(statearr_21939_21975[(2)] = null);

(statearr_21939_21975[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (13))){
var inst_21880 = (state_21926[(8)]);
var inst_21879 = (state_21926[(10)]);
var inst_21878 = (state_21926[(11)]);
var inst_21881 = (state_21926[(12)]);
var inst_21888 = (state_21926[(2)]);
var inst_21889 = (inst_21881 + (1));
var tmp21935 = inst_21880;
var tmp21936 = inst_21879;
var tmp21937 = inst_21878;
var inst_21878__$1 = tmp21937;
var inst_21879__$1 = tmp21936;
var inst_21880__$1 = tmp21935;
var inst_21881__$1 = inst_21889;
var state_21926__$1 = (function (){var statearr_21940 = state_21926;
(statearr_21940[(8)] = inst_21880__$1);

(statearr_21940[(14)] = inst_21888);

(statearr_21940[(10)] = inst_21879__$1);

(statearr_21940[(11)] = inst_21878__$1);

(statearr_21940[(12)] = inst_21881__$1);

return statearr_21940;
})();
var statearr_21941_21976 = state_21926__$1;
(statearr_21941_21976[(2)] = null);

(statearr_21941_21976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (22))){
var state_21926__$1 = state_21926;
var statearr_21942_21977 = state_21926__$1;
(statearr_21942_21977[(2)] = null);

(statearr_21942_21977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (6))){
var inst_21867 = (state_21926[(13)]);
var inst_21876 = f.call(null,inst_21867);
var inst_21877 = cljs.core.seq.call(null,inst_21876);
var inst_21878 = inst_21877;
var inst_21879 = null;
var inst_21880 = (0);
var inst_21881 = (0);
var state_21926__$1 = (function (){var statearr_21943 = state_21926;
(statearr_21943[(8)] = inst_21880);

(statearr_21943[(10)] = inst_21879);

(statearr_21943[(11)] = inst_21878);

(statearr_21943[(12)] = inst_21881);

return statearr_21943;
})();
var statearr_21944_21978 = state_21926__$1;
(statearr_21944_21978[(2)] = null);

(statearr_21944_21978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (17))){
var inst_21892 = (state_21926[(7)]);
var inst_21896 = cljs.core.chunk_first.call(null,inst_21892);
var inst_21897 = cljs.core.chunk_rest.call(null,inst_21892);
var inst_21898 = cljs.core.count.call(null,inst_21896);
var inst_21878 = inst_21897;
var inst_21879 = inst_21896;
var inst_21880 = inst_21898;
var inst_21881 = (0);
var state_21926__$1 = (function (){var statearr_21945 = state_21926;
(statearr_21945[(8)] = inst_21880);

(statearr_21945[(10)] = inst_21879);

(statearr_21945[(11)] = inst_21878);

(statearr_21945[(12)] = inst_21881);

return statearr_21945;
})();
var statearr_21946_21979 = state_21926__$1;
(statearr_21946_21979[(2)] = null);

(statearr_21946_21979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (3))){
var inst_21924 = (state_21926[(2)]);
var state_21926__$1 = state_21926;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21926__$1,inst_21924);
} else {
if((state_val_21927 === (12))){
var inst_21912 = (state_21926[(2)]);
var state_21926__$1 = state_21926;
var statearr_21947_21980 = state_21926__$1;
(statearr_21947_21980[(2)] = inst_21912);

(statearr_21947_21980[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (2))){
var state_21926__$1 = state_21926;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21926__$1,(4),in$);
} else {
if((state_val_21927 === (23))){
var inst_21920 = (state_21926[(2)]);
var state_21926__$1 = state_21926;
var statearr_21948_21981 = state_21926__$1;
(statearr_21948_21981[(2)] = inst_21920);

(statearr_21948_21981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (19))){
var inst_21907 = (state_21926[(2)]);
var state_21926__$1 = state_21926;
var statearr_21949_21982 = state_21926__$1;
(statearr_21949_21982[(2)] = inst_21907);

(statearr_21949_21982[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (11))){
var inst_21878 = (state_21926[(11)]);
var inst_21892 = (state_21926[(7)]);
var inst_21892__$1 = cljs.core.seq.call(null,inst_21878);
var state_21926__$1 = (function (){var statearr_21950 = state_21926;
(statearr_21950[(7)] = inst_21892__$1);

return statearr_21950;
})();
if(inst_21892__$1){
var statearr_21951_21983 = state_21926__$1;
(statearr_21951_21983[(1)] = (14));

} else {
var statearr_21952_21984 = state_21926__$1;
(statearr_21952_21984[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (9))){
var inst_21914 = (state_21926[(2)]);
var inst_21915 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21926__$1 = (function (){var statearr_21953 = state_21926;
(statearr_21953[(15)] = inst_21914);

return statearr_21953;
})();
if(cljs.core.truth_(inst_21915)){
var statearr_21954_21985 = state_21926__$1;
(statearr_21954_21985[(1)] = (21));

} else {
var statearr_21955_21986 = state_21926__$1;
(statearr_21955_21986[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (5))){
var inst_21870 = cljs.core.async.close_BANG_.call(null,out);
var state_21926__$1 = state_21926;
var statearr_21956_21987 = state_21926__$1;
(statearr_21956_21987[(2)] = inst_21870);

(statearr_21956_21987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (14))){
var inst_21892 = (state_21926[(7)]);
var inst_21894 = cljs.core.chunked_seq_QMARK_.call(null,inst_21892);
var state_21926__$1 = state_21926;
if(inst_21894){
var statearr_21957_21988 = state_21926__$1;
(statearr_21957_21988[(1)] = (17));

} else {
var statearr_21958_21989 = state_21926__$1;
(statearr_21958_21989[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (16))){
var inst_21910 = (state_21926[(2)]);
var state_21926__$1 = state_21926;
var statearr_21959_21990 = state_21926__$1;
(statearr_21959_21990[(2)] = inst_21910);

(statearr_21959_21990[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21927 === (10))){
var inst_21879 = (state_21926[(10)]);
var inst_21881 = (state_21926[(12)]);
var inst_21886 = cljs.core._nth.call(null,inst_21879,inst_21881);
var state_21926__$1 = state_21926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21926__$1,(13),out,inst_21886);
} else {
if((state_val_21927 === (18))){
var inst_21892 = (state_21926[(7)]);
var inst_21901 = cljs.core.first.call(null,inst_21892);
var state_21926__$1 = state_21926;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21926__$1,(20),out,inst_21901);
} else {
if((state_val_21927 === (8))){
var inst_21880 = (state_21926[(8)]);
var inst_21881 = (state_21926[(12)]);
var inst_21883 = (inst_21881 < inst_21880);
var inst_21884 = inst_21883;
var state_21926__$1 = state_21926;
if(cljs.core.truth_(inst_21884)){
var statearr_21960_21991 = state_21926__$1;
(statearr_21960_21991[(1)] = (10));

} else {
var statearr_21961_21992 = state_21926__$1;
(statearr_21961_21992[(1)] = (11));

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
});})(c__19491__auto__))
;
return ((function (switch__19379__auto__,c__19491__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19380__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19380__auto____0 = (function (){
var statearr_21965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21965[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19380__auto__);

(statearr_21965[(1)] = (1));

return statearr_21965;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19380__auto____1 = (function (state_21926){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_21926);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e21966){if((e21966 instanceof Object)){
var ex__19383__auto__ = e21966;
var statearr_21967_21993 = state_21926;
(statearr_21967_21993[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21994 = state_21926;
state_21926 = G__21994;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19380__auto__ = function(state_21926){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19380__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19380__auto____1.call(this,state_21926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19380__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19380__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto__))
})();
var state__19493__auto__ = (function (){var statearr_21968 = f__19492__auto__.call(null);
(statearr_21968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto__);

return statearr_21968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto__))
);

return c__19491__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args21995 = [];
var len__17884__auto___21998 = arguments.length;
var i__17885__auto___21999 = (0);
while(true){
if((i__17885__auto___21999 < len__17884__auto___21998)){
args21995.push((arguments[i__17885__auto___21999]));

var G__22000 = (i__17885__auto___21999 + (1));
i__17885__auto___21999 = G__22000;
continue;
} else {
}
break;
}

var G__21997 = args21995.length;
switch (G__21997) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21995.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args22002 = [];
var len__17884__auto___22005 = arguments.length;
var i__17885__auto___22006 = (0);
while(true){
if((i__17885__auto___22006 < len__17884__auto___22005)){
args22002.push((arguments[i__17885__auto___22006]));

var G__22007 = (i__17885__auto___22006 + (1));
i__17885__auto___22006 = G__22007;
continue;
} else {
}
break;
}

var G__22004 = args22002.length;
switch (G__22004) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22002.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args22009 = [];
var len__17884__auto___22060 = arguments.length;
var i__17885__auto___22061 = (0);
while(true){
if((i__17885__auto___22061 < len__17884__auto___22060)){
args22009.push((arguments[i__17885__auto___22061]));

var G__22062 = (i__17885__auto___22061 + (1));
i__17885__auto___22061 = G__22062;
continue;
} else {
}
break;
}

var G__22011 = args22009.length;
switch (G__22011) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22009.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19491__auto___22064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto___22064,out){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto___22064,out){
return (function (state_22035){
var state_val_22036 = (state_22035[(1)]);
if((state_val_22036 === (7))){
var inst_22030 = (state_22035[(2)]);
var state_22035__$1 = state_22035;
var statearr_22037_22065 = state_22035__$1;
(statearr_22037_22065[(2)] = inst_22030);

(statearr_22037_22065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22036 === (1))){
var inst_22012 = null;
var state_22035__$1 = (function (){var statearr_22038 = state_22035;
(statearr_22038[(7)] = inst_22012);

return statearr_22038;
})();
var statearr_22039_22066 = state_22035__$1;
(statearr_22039_22066[(2)] = null);

(statearr_22039_22066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22036 === (4))){
var inst_22015 = (state_22035[(8)]);
var inst_22015__$1 = (state_22035[(2)]);
var inst_22016 = (inst_22015__$1 == null);
var inst_22017 = cljs.core.not.call(null,inst_22016);
var state_22035__$1 = (function (){var statearr_22040 = state_22035;
(statearr_22040[(8)] = inst_22015__$1);

return statearr_22040;
})();
if(inst_22017){
var statearr_22041_22067 = state_22035__$1;
(statearr_22041_22067[(1)] = (5));

} else {
var statearr_22042_22068 = state_22035__$1;
(statearr_22042_22068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22036 === (6))){
var state_22035__$1 = state_22035;
var statearr_22043_22069 = state_22035__$1;
(statearr_22043_22069[(2)] = null);

(statearr_22043_22069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22036 === (3))){
var inst_22032 = (state_22035[(2)]);
var inst_22033 = cljs.core.async.close_BANG_.call(null,out);
var state_22035__$1 = (function (){var statearr_22044 = state_22035;
(statearr_22044[(9)] = inst_22032);

return statearr_22044;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22035__$1,inst_22033);
} else {
if((state_val_22036 === (2))){
var state_22035__$1 = state_22035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22035__$1,(4),ch);
} else {
if((state_val_22036 === (11))){
var inst_22015 = (state_22035[(8)]);
var inst_22024 = (state_22035[(2)]);
var inst_22012 = inst_22015;
var state_22035__$1 = (function (){var statearr_22045 = state_22035;
(statearr_22045[(7)] = inst_22012);

(statearr_22045[(10)] = inst_22024);

return statearr_22045;
})();
var statearr_22046_22070 = state_22035__$1;
(statearr_22046_22070[(2)] = null);

(statearr_22046_22070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22036 === (9))){
var inst_22015 = (state_22035[(8)]);
var state_22035__$1 = state_22035;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22035__$1,(11),out,inst_22015);
} else {
if((state_val_22036 === (5))){
var inst_22012 = (state_22035[(7)]);
var inst_22015 = (state_22035[(8)]);
var inst_22019 = cljs.core._EQ_.call(null,inst_22015,inst_22012);
var state_22035__$1 = state_22035;
if(inst_22019){
var statearr_22048_22071 = state_22035__$1;
(statearr_22048_22071[(1)] = (8));

} else {
var statearr_22049_22072 = state_22035__$1;
(statearr_22049_22072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22036 === (10))){
var inst_22027 = (state_22035[(2)]);
var state_22035__$1 = state_22035;
var statearr_22050_22073 = state_22035__$1;
(statearr_22050_22073[(2)] = inst_22027);

(statearr_22050_22073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22036 === (8))){
var inst_22012 = (state_22035[(7)]);
var tmp22047 = inst_22012;
var inst_22012__$1 = tmp22047;
var state_22035__$1 = (function (){var statearr_22051 = state_22035;
(statearr_22051[(7)] = inst_22012__$1);

return statearr_22051;
})();
var statearr_22052_22074 = state_22035__$1;
(statearr_22052_22074[(2)] = null);

(statearr_22052_22074[(1)] = (2));


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
});})(c__19491__auto___22064,out))
;
return ((function (switch__19379__auto__,c__19491__auto___22064,out){
return (function() {
var cljs$core$async$state_machine__19380__auto__ = null;
var cljs$core$async$state_machine__19380__auto____0 = (function (){
var statearr_22056 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22056[(0)] = cljs$core$async$state_machine__19380__auto__);

(statearr_22056[(1)] = (1));

return statearr_22056;
});
var cljs$core$async$state_machine__19380__auto____1 = (function (state_22035){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_22035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e22057){if((e22057 instanceof Object)){
var ex__19383__auto__ = e22057;
var statearr_22058_22075 = state_22035;
(statearr_22058_22075[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22076 = state_22035;
state_22035 = G__22076;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
cljs$core$async$state_machine__19380__auto__ = function(state_22035){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19380__auto____1.call(this,state_22035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19380__auto____0;
cljs$core$async$state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19380__auto____1;
return cljs$core$async$state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto___22064,out))
})();
var state__19493__auto__ = (function (){var statearr_22059 = f__19492__auto__.call(null);
(statearr_22059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto___22064);

return statearr_22059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto___22064,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22077 = [];
var len__17884__auto___22147 = arguments.length;
var i__17885__auto___22148 = (0);
while(true){
if((i__17885__auto___22148 < len__17884__auto___22147)){
args22077.push((arguments[i__17885__auto___22148]));

var G__22149 = (i__17885__auto___22148 + (1));
i__17885__auto___22148 = G__22149;
continue;
} else {
}
break;
}

var G__22079 = args22077.length;
switch (G__22079) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22077.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19491__auto___22151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto___22151,out){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto___22151,out){
return (function (state_22117){
var state_val_22118 = (state_22117[(1)]);
if((state_val_22118 === (7))){
var inst_22113 = (state_22117[(2)]);
var state_22117__$1 = state_22117;
var statearr_22119_22152 = state_22117__$1;
(statearr_22119_22152[(2)] = inst_22113);

(statearr_22119_22152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22118 === (1))){
var inst_22080 = (new Array(n));
var inst_22081 = inst_22080;
var inst_22082 = (0);
var state_22117__$1 = (function (){var statearr_22120 = state_22117;
(statearr_22120[(7)] = inst_22081);

(statearr_22120[(8)] = inst_22082);

return statearr_22120;
})();
var statearr_22121_22153 = state_22117__$1;
(statearr_22121_22153[(2)] = null);

(statearr_22121_22153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22118 === (4))){
var inst_22085 = (state_22117[(9)]);
var inst_22085__$1 = (state_22117[(2)]);
var inst_22086 = (inst_22085__$1 == null);
var inst_22087 = cljs.core.not.call(null,inst_22086);
var state_22117__$1 = (function (){var statearr_22122 = state_22117;
(statearr_22122[(9)] = inst_22085__$1);

return statearr_22122;
})();
if(inst_22087){
var statearr_22123_22154 = state_22117__$1;
(statearr_22123_22154[(1)] = (5));

} else {
var statearr_22124_22155 = state_22117__$1;
(statearr_22124_22155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22118 === (15))){
var inst_22107 = (state_22117[(2)]);
var state_22117__$1 = state_22117;
var statearr_22125_22156 = state_22117__$1;
(statearr_22125_22156[(2)] = inst_22107);

(statearr_22125_22156[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22118 === (13))){
var state_22117__$1 = state_22117;
var statearr_22126_22157 = state_22117__$1;
(statearr_22126_22157[(2)] = null);

(statearr_22126_22157[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22118 === (6))){
var inst_22082 = (state_22117[(8)]);
var inst_22103 = (inst_22082 > (0));
var state_22117__$1 = state_22117;
if(cljs.core.truth_(inst_22103)){
var statearr_22127_22158 = state_22117__$1;
(statearr_22127_22158[(1)] = (12));

} else {
var statearr_22128_22159 = state_22117__$1;
(statearr_22128_22159[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22118 === (3))){
var inst_22115 = (state_22117[(2)]);
var state_22117__$1 = state_22117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22117__$1,inst_22115);
} else {
if((state_val_22118 === (12))){
var inst_22081 = (state_22117[(7)]);
var inst_22105 = cljs.core.vec.call(null,inst_22081);
var state_22117__$1 = state_22117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22117__$1,(15),out,inst_22105);
} else {
if((state_val_22118 === (2))){
var state_22117__$1 = state_22117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22117__$1,(4),ch);
} else {
if((state_val_22118 === (11))){
var inst_22097 = (state_22117[(2)]);
var inst_22098 = (new Array(n));
var inst_22081 = inst_22098;
var inst_22082 = (0);
var state_22117__$1 = (function (){var statearr_22129 = state_22117;
(statearr_22129[(7)] = inst_22081);

(statearr_22129[(8)] = inst_22082);

(statearr_22129[(10)] = inst_22097);

return statearr_22129;
})();
var statearr_22130_22160 = state_22117__$1;
(statearr_22130_22160[(2)] = null);

(statearr_22130_22160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22118 === (9))){
var inst_22081 = (state_22117[(7)]);
var inst_22095 = cljs.core.vec.call(null,inst_22081);
var state_22117__$1 = state_22117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22117__$1,(11),out,inst_22095);
} else {
if((state_val_22118 === (5))){
var inst_22081 = (state_22117[(7)]);
var inst_22082 = (state_22117[(8)]);
var inst_22085 = (state_22117[(9)]);
var inst_22090 = (state_22117[(11)]);
var inst_22089 = (inst_22081[inst_22082] = inst_22085);
var inst_22090__$1 = (inst_22082 + (1));
var inst_22091 = (inst_22090__$1 < n);
var state_22117__$1 = (function (){var statearr_22131 = state_22117;
(statearr_22131[(12)] = inst_22089);

(statearr_22131[(11)] = inst_22090__$1);

return statearr_22131;
})();
if(cljs.core.truth_(inst_22091)){
var statearr_22132_22161 = state_22117__$1;
(statearr_22132_22161[(1)] = (8));

} else {
var statearr_22133_22162 = state_22117__$1;
(statearr_22133_22162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22118 === (14))){
var inst_22110 = (state_22117[(2)]);
var inst_22111 = cljs.core.async.close_BANG_.call(null,out);
var state_22117__$1 = (function (){var statearr_22135 = state_22117;
(statearr_22135[(13)] = inst_22110);

return statearr_22135;
})();
var statearr_22136_22163 = state_22117__$1;
(statearr_22136_22163[(2)] = inst_22111);

(statearr_22136_22163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22118 === (10))){
var inst_22101 = (state_22117[(2)]);
var state_22117__$1 = state_22117;
var statearr_22137_22164 = state_22117__$1;
(statearr_22137_22164[(2)] = inst_22101);

(statearr_22137_22164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22118 === (8))){
var inst_22081 = (state_22117[(7)]);
var inst_22090 = (state_22117[(11)]);
var tmp22134 = inst_22081;
var inst_22081__$1 = tmp22134;
var inst_22082 = inst_22090;
var state_22117__$1 = (function (){var statearr_22138 = state_22117;
(statearr_22138[(7)] = inst_22081__$1);

(statearr_22138[(8)] = inst_22082);

return statearr_22138;
})();
var statearr_22139_22165 = state_22117__$1;
(statearr_22139_22165[(2)] = null);

(statearr_22139_22165[(1)] = (2));


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
});})(c__19491__auto___22151,out))
;
return ((function (switch__19379__auto__,c__19491__auto___22151,out){
return (function() {
var cljs$core$async$state_machine__19380__auto__ = null;
var cljs$core$async$state_machine__19380__auto____0 = (function (){
var statearr_22143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22143[(0)] = cljs$core$async$state_machine__19380__auto__);

(statearr_22143[(1)] = (1));

return statearr_22143;
});
var cljs$core$async$state_machine__19380__auto____1 = (function (state_22117){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_22117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e22144){if((e22144 instanceof Object)){
var ex__19383__auto__ = e22144;
var statearr_22145_22166 = state_22117;
(statearr_22145_22166[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22167 = state_22117;
state_22117 = G__22167;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
cljs$core$async$state_machine__19380__auto__ = function(state_22117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19380__auto____1.call(this,state_22117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19380__auto____0;
cljs$core$async$state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19380__auto____1;
return cljs$core$async$state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto___22151,out))
})();
var state__19493__auto__ = (function (){var statearr_22146 = f__19492__auto__.call(null);
(statearr_22146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto___22151);

return statearr_22146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto___22151,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22168 = [];
var len__17884__auto___22242 = arguments.length;
var i__17885__auto___22243 = (0);
while(true){
if((i__17885__auto___22243 < len__17884__auto___22242)){
args22168.push((arguments[i__17885__auto___22243]));

var G__22244 = (i__17885__auto___22243 + (1));
i__17885__auto___22243 = G__22244;
continue;
} else {
}
break;
}

var G__22170 = args22168.length;
switch (G__22170) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22168.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19491__auto___22246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19491__auto___22246,out){
return (function (){
var f__19492__auto__ = (function (){var switch__19379__auto__ = ((function (c__19491__auto___22246,out){
return (function (state_22212){
var state_val_22213 = (state_22212[(1)]);
if((state_val_22213 === (7))){
var inst_22208 = (state_22212[(2)]);
var state_22212__$1 = state_22212;
var statearr_22214_22247 = state_22212__$1;
(statearr_22214_22247[(2)] = inst_22208);

(statearr_22214_22247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22213 === (1))){
var inst_22171 = [];
var inst_22172 = inst_22171;
var inst_22173 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22212__$1 = (function (){var statearr_22215 = state_22212;
(statearr_22215[(7)] = inst_22173);

(statearr_22215[(8)] = inst_22172);

return statearr_22215;
})();
var statearr_22216_22248 = state_22212__$1;
(statearr_22216_22248[(2)] = null);

(statearr_22216_22248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22213 === (4))){
var inst_22176 = (state_22212[(9)]);
var inst_22176__$1 = (state_22212[(2)]);
var inst_22177 = (inst_22176__$1 == null);
var inst_22178 = cljs.core.not.call(null,inst_22177);
var state_22212__$1 = (function (){var statearr_22217 = state_22212;
(statearr_22217[(9)] = inst_22176__$1);

return statearr_22217;
})();
if(inst_22178){
var statearr_22218_22249 = state_22212__$1;
(statearr_22218_22249[(1)] = (5));

} else {
var statearr_22219_22250 = state_22212__$1;
(statearr_22219_22250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22213 === (15))){
var inst_22202 = (state_22212[(2)]);
var state_22212__$1 = state_22212;
var statearr_22220_22251 = state_22212__$1;
(statearr_22220_22251[(2)] = inst_22202);

(statearr_22220_22251[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22213 === (13))){
var state_22212__$1 = state_22212;
var statearr_22221_22252 = state_22212__$1;
(statearr_22221_22252[(2)] = null);

(statearr_22221_22252[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22213 === (6))){
var inst_22172 = (state_22212[(8)]);
var inst_22197 = inst_22172.length;
var inst_22198 = (inst_22197 > (0));
var state_22212__$1 = state_22212;
if(cljs.core.truth_(inst_22198)){
var statearr_22222_22253 = state_22212__$1;
(statearr_22222_22253[(1)] = (12));

} else {
var statearr_22223_22254 = state_22212__$1;
(statearr_22223_22254[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22213 === (3))){
var inst_22210 = (state_22212[(2)]);
var state_22212__$1 = state_22212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22212__$1,inst_22210);
} else {
if((state_val_22213 === (12))){
var inst_22172 = (state_22212[(8)]);
var inst_22200 = cljs.core.vec.call(null,inst_22172);
var state_22212__$1 = state_22212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22212__$1,(15),out,inst_22200);
} else {
if((state_val_22213 === (2))){
var state_22212__$1 = state_22212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22212__$1,(4),ch);
} else {
if((state_val_22213 === (11))){
var inst_22180 = (state_22212[(10)]);
var inst_22176 = (state_22212[(9)]);
var inst_22190 = (state_22212[(2)]);
var inst_22191 = [];
var inst_22192 = inst_22191.push(inst_22176);
var inst_22172 = inst_22191;
var inst_22173 = inst_22180;
var state_22212__$1 = (function (){var statearr_22224 = state_22212;
(statearr_22224[(11)] = inst_22190);

(statearr_22224[(7)] = inst_22173);

(statearr_22224[(12)] = inst_22192);

(statearr_22224[(8)] = inst_22172);

return statearr_22224;
})();
var statearr_22225_22255 = state_22212__$1;
(statearr_22225_22255[(2)] = null);

(statearr_22225_22255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22213 === (9))){
var inst_22172 = (state_22212[(8)]);
var inst_22188 = cljs.core.vec.call(null,inst_22172);
var state_22212__$1 = state_22212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22212__$1,(11),out,inst_22188);
} else {
if((state_val_22213 === (5))){
var inst_22180 = (state_22212[(10)]);
var inst_22173 = (state_22212[(7)]);
var inst_22176 = (state_22212[(9)]);
var inst_22180__$1 = f.call(null,inst_22176);
var inst_22181 = cljs.core._EQ_.call(null,inst_22180__$1,inst_22173);
var inst_22182 = cljs.core.keyword_identical_QMARK_.call(null,inst_22173,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22183 = (inst_22181) || (inst_22182);
var state_22212__$1 = (function (){var statearr_22226 = state_22212;
(statearr_22226[(10)] = inst_22180__$1);

return statearr_22226;
})();
if(cljs.core.truth_(inst_22183)){
var statearr_22227_22256 = state_22212__$1;
(statearr_22227_22256[(1)] = (8));

} else {
var statearr_22228_22257 = state_22212__$1;
(statearr_22228_22257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22213 === (14))){
var inst_22205 = (state_22212[(2)]);
var inst_22206 = cljs.core.async.close_BANG_.call(null,out);
var state_22212__$1 = (function (){var statearr_22230 = state_22212;
(statearr_22230[(13)] = inst_22205);

return statearr_22230;
})();
var statearr_22231_22258 = state_22212__$1;
(statearr_22231_22258[(2)] = inst_22206);

(statearr_22231_22258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22213 === (10))){
var inst_22195 = (state_22212[(2)]);
var state_22212__$1 = state_22212;
var statearr_22232_22259 = state_22212__$1;
(statearr_22232_22259[(2)] = inst_22195);

(statearr_22232_22259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22213 === (8))){
var inst_22180 = (state_22212[(10)]);
var inst_22176 = (state_22212[(9)]);
var inst_22172 = (state_22212[(8)]);
var inst_22185 = inst_22172.push(inst_22176);
var tmp22229 = inst_22172;
var inst_22172__$1 = tmp22229;
var inst_22173 = inst_22180;
var state_22212__$1 = (function (){var statearr_22233 = state_22212;
(statearr_22233[(14)] = inst_22185);

(statearr_22233[(7)] = inst_22173);

(statearr_22233[(8)] = inst_22172__$1);

return statearr_22233;
})();
var statearr_22234_22260 = state_22212__$1;
(statearr_22234_22260[(2)] = null);

(statearr_22234_22260[(1)] = (2));


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
});})(c__19491__auto___22246,out))
;
return ((function (switch__19379__auto__,c__19491__auto___22246,out){
return (function() {
var cljs$core$async$state_machine__19380__auto__ = null;
var cljs$core$async$state_machine__19380__auto____0 = (function (){
var statearr_22238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22238[(0)] = cljs$core$async$state_machine__19380__auto__);

(statearr_22238[(1)] = (1));

return statearr_22238;
});
var cljs$core$async$state_machine__19380__auto____1 = (function (state_22212){
while(true){
var ret_value__19381__auto__ = (function (){try{while(true){
var result__19382__auto__ = switch__19379__auto__.call(null,state_22212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19382__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19382__auto__;
}
break;
}
}catch (e22239){if((e22239 instanceof Object)){
var ex__19383__auto__ = e22239;
var statearr_22240_22261 = state_22212;
(statearr_22240_22261[(5)] = ex__19383__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22262 = state_22212;
state_22212 = G__22262;
continue;
} else {
return ret_value__19381__auto__;
}
break;
}
});
cljs$core$async$state_machine__19380__auto__ = function(state_22212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19380__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19380__auto____1.call(this,state_22212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19380__auto____0;
cljs$core$async$state_machine__19380__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19380__auto____1;
return cljs$core$async$state_machine__19380__auto__;
})()
;})(switch__19379__auto__,c__19491__auto___22246,out))
})();
var state__19493__auto__ = (function (){var statearr_22241 = f__19492__auto__.call(null);
(statearr_22241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19491__auto___22246);

return statearr_22241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19493__auto__);
});})(c__19491__auto___22246,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map
// Compiled by ClojureScript 1.7.170 {}
goog.provide('comamitc.utils');
goog.require('cljs.core');
/**
 * Log a Clojure thing.
 */
comamitc.utils.log = (function comamitc$utils$log(thing){
return console.log(cljs.core.pr_str.call(null,thing));
});
/**
 * Log a JavaScript thing.
 */
comamitc.utils.js_log = (function comamitc$utils$js_log(thing){
return console.log(thing);
});

//# sourceMappingURL=utils.js.map
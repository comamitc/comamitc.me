// Compiled by ClojureScript 1.7.170 {}
goog.provide('comamitc.dom');
goog.require('cljs.core');
goog.require('goog.dom');
comamitc.dom.by_id = (function comamitc$dom$by_id(id){
return document.getElementById(id);
});
comamitc.dom.element_QMARK_ = (function comamitc$dom$element_QMARK_(el){
return goog.dom.isElement(el);
});
comamitc.dom.get_value = (function comamitc$dom$get_value(id){
return (comamitc.dom.by_id.call(null,id)["value"]);
});
comamitc.dom.set_body_BANG_ = (function comamitc$dom$set_body_BANG_(html){
return (document.body["innerHTML"] = html);
});
comamitc.dom.set_html_BANG_ = (function comamitc$dom$set_html_BANG_(id,html){
return (comamitc.dom.by_id.call(null,id)["innerHTML"] = html);
});
comamitc.dom.set_value_BANG_ = (function comamitc$dom$set_value_BANG_(id,v){
return (comamitc.dom.by_id.call(null,id)["value"] = v);
});
comamitc.dom.show_el_BANG_ = (function comamitc$dom$show_el_BANG_(id){
return (comamitc.dom.by_id.call(null,id)["style"]["display"] = "");
});
comamitc.dom.hide_el_BANG_ = (function comamitc$dom$hide_el_BANG_(id){
return (comamitc.dom.by_id.call(null,id)["style"]["display"] = "none");
});
comamitc.dom.toggle_display_BANG_ = (function comamitc$dom$toggle_display_BANG_(id){
var el = comamitc.dom.by_id.call(null,id);
var display = (el["style"]["display"]);
if(cljs.core._EQ_.call(null,display,"none")){
return comamitc.dom.show_el_BANG_.call(null,id);
} else {
return comamitc.dom.hide_el_BANG_.call(null,id);
}
});

//# sourceMappingURL=dom.js.map
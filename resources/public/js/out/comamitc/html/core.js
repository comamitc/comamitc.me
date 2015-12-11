// Compiled by ClojureScript 1.7.170 {}
goog.provide('comamitc.html.core');
goog.require('cljs.core');
goog.require('comamitc.dom');
goog.require('comamitc.utils');
goog.require('comamitc.config');
goog.require('hiccups.runtime');
comamitc.html.core.home_content = (function comamitc$html$core$home_content(){
return [cljs.core.str("<div"),cljs.core.str(" class=\"wrapper-a0def\" id=\"bodyContent\""),cljs.core.str(">"),cljs.core.str("<div"),cljs.core.str(" class=\"home-content-6ff4e\""),cljs.core.str(">"),cljs.core.str("<div>Howdy!</div>"),cljs.core.str((function (){var attrs18251 = [cljs.core.str("I am a passionate full-stack engineer and leader experienced in designing,"),cljs.core.str(" developing & deploying fully cloud-based applications.")].join('');
if(cljs.core.map_QMARK_.call(null,attrs18251)){
return [cljs.core.str("<div"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"home-greet-a199e"], null),attrs18251))),cljs.core.str(">"),cljs.core.str("</div>")].join('');
} else {
return [cljs.core.str("<div class=\"home-greet-a199e\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18251)),cljs.core.str("</div>")].join('');
}
})()),cljs.core.str("<div class=\"location-a36e7\"><i class=\"fa fa-map-marker marker-cd4ad\"></i><span class=\"city-07ffa\">Houston, TX</span></div>"),cljs.core.str("</div>"),cljs.core.str("</div>")].join('');
});
comamitc.html.core.experience = (function comamitc$html$core$experience(){
return [cljs.core.str("<div"),cljs.core.str(" class=\"exp-d625a\""),cljs.core.str(">"),cljs.core.str("<div class=\"prof-title-2f701\"><i class=\"fa fa-briefcase space-right\"></i>Experience</div>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__17598__auto__ = (function comamitc$html$core$experience_$_iter__18302(s__18303){
return (new cljs.core.LazySeq(null,(function (){
var s__18303__$1 = s__18303;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18303__$1);
if(temp__4425__auto__){
var s__18303__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18303__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__18303__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__18305 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__18304 = (0);
while(true){
if((i__18304 < size__17597__auto__)){
var job = cljs.core._nth.call(null,c__17596__auto__,i__18304);
cljs.core.chunk_append.call(null,b__18305,[cljs.core.str("<div"),cljs.core.str(" class=\"job-b1d10\""),cljs.core.str(">"),cljs.core.str("<div"),cljs.core.str(" class=\"job-ttl-4bdc6\""),cljs.core.str(">"),cljs.core.str((function (){var attrs18326 = new cljs.core.Keyword(null,"job-title","job-title",1246185035).cljs$core$IFn$_invoke$arity$1(job);
if(cljs.core.map_QMARK_.call(null,attrs18326)){
return [cljs.core.str("<span"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"job-ttl-dd7a7"], null),attrs18326))),cljs.core.str(">"),cljs.core.str("</span>")].join('');
} else {
return [cljs.core.str("<span class=\"job-ttl-dd7a7\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18326)),cljs.core.str("</span>")].join('');
}
})()),cljs.core.str((function (){var attrs18327 = new cljs.core.Keyword(null,"span","span",1394872991).cljs$core$IFn$_invoke$arity$1(job);
if(cljs.core.map_QMARK_.call(null,attrs18327)){
return [cljs.core.str("<span"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"job-date-06fc3"], null),attrs18327))),cljs.core.str(">"),cljs.core.str("</span>")].join('');
} else {
return [cljs.core.str("<span class=\"job-date-06fc3\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18327)),cljs.core.str("</span>")].join('');
}
})()),cljs.core.str("</div>"),cljs.core.str("<div"),cljs.core.str(" class=\"co-name-6be4f\""),cljs.core.str(">"),cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(job)], null))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,new cljs.core.Keyword(null,"company","company",-340475075).cljs$core$IFn$_invoke$arity$1(job))),cljs.core.str("</a>"),cljs.core.str("</div>"),cljs.core.str("<div"),cljs.core.str(" class=\"job-desc-ee279\""),cljs.core.str(">"),cljs.core.str("<ul"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__17598__auto__ = ((function (i__18304,job,c__17596__auto__,size__17597__auto__,b__18305,s__18303__$2,temp__4425__auto__){
return (function comamitc$html$core$experience_$_iter__18302_$_iter__18328(s__18329){
return (new cljs.core.LazySeq(null,((function (i__18304,job,c__17596__auto__,size__17597__auto__,b__18305,s__18303__$2,temp__4425__auto__){
return (function (){
var s__18329__$1 = s__18329;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__18329__$1);
if(temp__4425__auto____$1){
var s__18329__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18329__$2)){
var c__17596__auto____$1 = cljs.core.chunk_first.call(null,s__18329__$2);
var size__17597__auto____$1 = cljs.core.count.call(null,c__17596__auto____$1);
var b__18331 = cljs.core.chunk_buffer.call(null,size__17597__auto____$1);
if((function (){var i__18330 = (0);
while(true){
if((i__18330 < size__17597__auto____$1)){
var desc = cljs.core._nth.call(null,c__17596__auto____$1,i__18330);
cljs.core.chunk_append.call(null,b__18331,[cljs.core.str((function (){var attrs18334 = desc;
if(cljs.core.map_QMARK_.call(null,attrs18334)){
return [cljs.core.str("<li"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs18334))),cljs.core.str(">"),cljs.core.str("</li>")].join('');
} else {
return [cljs.core.str("<li>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18334)),cljs.core.str("</li>")].join('');
}
})())].join(''));

var G__18346 = (i__18330 + (1));
i__18330 = G__18346;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18331),comamitc$html$core$experience_$_iter__18302_$_iter__18328.call(null,cljs.core.chunk_rest.call(null,s__18329__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18331),null);
}
} else {
var desc = cljs.core.first.call(null,s__18329__$2);
return cljs.core.cons.call(null,[cljs.core.str((function (){var attrs18335 = desc;
if(cljs.core.map_QMARK_.call(null,attrs18335)){
return [cljs.core.str("<li"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs18335))),cljs.core.str(">"),cljs.core.str("</li>")].join('');
} else {
return [cljs.core.str("<li>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18335)),cljs.core.str("</li>")].join('');
}
})())].join(''),comamitc$html$core$experience_$_iter__18302_$_iter__18328.call(null,cljs.core.rest.call(null,s__18329__$2)));
}
} else {
return null;
}
break;
}
});})(i__18304,job,c__17596__auto__,size__17597__auto__,b__18305,s__18303__$2,temp__4425__auto__))
,null,null));
});})(i__18304,job,c__17596__auto__,size__17597__auto__,b__18305,s__18303__$2,temp__4425__auto__))
;
return iter__17598__auto__.call(null,new cljs.core.Keyword(null,"job-desc","job-desc",511484207).cljs$core$IFn$_invoke$arity$1(job));
})())),cljs.core.str("</ul>"),cljs.core.str("</div>"),cljs.core.str("</div>")].join(''));

var G__18347 = (i__18304 + (1));
i__18304 = G__18347;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18305),comamitc$html$core$experience_$_iter__18302.call(null,cljs.core.chunk_rest.call(null,s__18303__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18305),null);
}
} else {
var job = cljs.core.first.call(null,s__18303__$2);
return cljs.core.cons.call(null,[cljs.core.str("<div"),cljs.core.str(" class=\"job-b1d10\""),cljs.core.str(">"),cljs.core.str("<div"),cljs.core.str(" class=\"job-ttl-4bdc6\""),cljs.core.str(">"),cljs.core.str((function (){var attrs18336 = new cljs.core.Keyword(null,"job-title","job-title",1246185035).cljs$core$IFn$_invoke$arity$1(job);
if(cljs.core.map_QMARK_.call(null,attrs18336)){
return [cljs.core.str("<span"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"job-ttl-dd7a7"], null),attrs18336))),cljs.core.str(">"),cljs.core.str("</span>")].join('');
} else {
return [cljs.core.str("<span class=\"job-ttl-dd7a7\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18336)),cljs.core.str("</span>")].join('');
}
})()),cljs.core.str((function (){var attrs18337 = new cljs.core.Keyword(null,"span","span",1394872991).cljs$core$IFn$_invoke$arity$1(job);
if(cljs.core.map_QMARK_.call(null,attrs18337)){
return [cljs.core.str("<span"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"job-date-06fc3"], null),attrs18337))),cljs.core.str(">"),cljs.core.str("</span>")].join('');
} else {
return [cljs.core.str("<span class=\"job-date-06fc3\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18337)),cljs.core.str("</span>")].join('');
}
})()),cljs.core.str("</div>"),cljs.core.str("<div"),cljs.core.str(" class=\"co-name-6be4f\""),cljs.core.str(">"),cljs.core.str("<a"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null,new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(job)], null))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,new cljs.core.Keyword(null,"company","company",-340475075).cljs$core$IFn$_invoke$arity$1(job))),cljs.core.str("</a>"),cljs.core.str("</div>"),cljs.core.str("<div"),cljs.core.str(" class=\"job-desc-ee279\""),cljs.core.str(">"),cljs.core.str("<ul"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__17598__auto__ = ((function (job,s__18303__$2,temp__4425__auto__){
return (function comamitc$html$core$experience_$_iter__18302_$_iter__18338(s__18339){
return (new cljs.core.LazySeq(null,((function (job,s__18303__$2,temp__4425__auto__){
return (function (){
var s__18339__$1 = s__18339;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__18339__$1);
if(temp__4425__auto____$1){
var s__18339__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18339__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__18339__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__18341 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__18340 = (0);
while(true){
if((i__18340 < size__17597__auto__)){
var desc = cljs.core._nth.call(null,c__17596__auto__,i__18340);
cljs.core.chunk_append.call(null,b__18341,[cljs.core.str((function (){var attrs18344 = desc;
if(cljs.core.map_QMARK_.call(null,attrs18344)){
return [cljs.core.str("<li"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs18344))),cljs.core.str(">"),cljs.core.str("</li>")].join('');
} else {
return [cljs.core.str("<li>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18344)),cljs.core.str("</li>")].join('');
}
})())].join(''));

var G__18348 = (i__18340 + (1));
i__18340 = G__18348;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18341),comamitc$html$core$experience_$_iter__18302_$_iter__18338.call(null,cljs.core.chunk_rest.call(null,s__18339__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18341),null);
}
} else {
var desc = cljs.core.first.call(null,s__18339__$2);
return cljs.core.cons.call(null,[cljs.core.str((function (){var attrs18345 = desc;
if(cljs.core.map_QMARK_.call(null,attrs18345)){
return [cljs.core.str("<li"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs18345))),cljs.core.str(">"),cljs.core.str("</li>")].join('');
} else {
return [cljs.core.str("<li>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18345)),cljs.core.str("</li>")].join('');
}
})())].join(''),comamitc$html$core$experience_$_iter__18302_$_iter__18338.call(null,cljs.core.rest.call(null,s__18339__$2)));
}
} else {
return null;
}
break;
}
});})(job,s__18303__$2,temp__4425__auto__))
,null,null));
});})(job,s__18303__$2,temp__4425__auto__))
;
return iter__17598__auto__.call(null,new cljs.core.Keyword(null,"job-desc","job-desc",511484207).cljs$core$IFn$_invoke$arity$1(job));
})())),cljs.core.str("</ul>"),cljs.core.str("</div>"),cljs.core.str("</div>")].join(''),comamitc$html$core$experience_$_iter__18302.call(null,cljs.core.rest.call(null,s__18303__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17598__auto__.call(null,comamitc.config.career);
})())),cljs.core.str("</div>")].join('');
});
comamitc.html.core.education = (function comamitc$html$core$education(){
return [cljs.core.str("<div class=\"edu-f0232\"><div class=\"prof-title-2f701\"><i class=\"fa fa-graduation-cap space-right\"></i>Education</div><div><div class=\"uni-6c2bd\">University of Houston</div><div class=\"degree-c86ab\">B.B.A. Management</div><div class=\"dates-053aa\">2005 - 2010</div></div></div>")].join('');
});
comamitc.html.core.skills_sect = (function comamitc$html$core$skills_sect(){
return [cljs.core.str("<div"),cljs.core.str(" class=\"skills-1c9f7\""),cljs.core.str(">"),cljs.core.str("<div class=\"prof-title-2f701\"><i class=\"fa fa-wrench space-right\"></i>Skills</div>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__17598__auto__ = (function comamitc$html$core$skills_sect_$_iter__18365(s__18366){
return (new cljs.core.LazySeq(null,(function (){
var s__18366__$1 = s__18366;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18366__$1);
if(temp__4425__auto__){
var s__18366__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18366__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__18366__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__18368 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__18367 = (0);
while(true){
if((i__18367 < size__17597__auto__)){
var skill = cljs.core._nth.call(null,c__17596__auto__,i__18367);
cljs.core.chunk_append.call(null,b__18368,[cljs.core.str((function (){var attrs18371 = skill;
if(cljs.core.map_QMARK_.call(null,attrs18371)){
return [cljs.core.str("<div"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"skill-11c15"], null),attrs18371))),cljs.core.str(">"),cljs.core.str("</div>")].join('');
} else {
return [cljs.core.str("<div class=\"skill-11c15\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18371)),cljs.core.str("</div>")].join('');
}
})())].join(''));

var G__18373 = (i__18367 + (1));
i__18367 = G__18373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18368),comamitc$html$core$skills_sect_$_iter__18365.call(null,cljs.core.chunk_rest.call(null,s__18366__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18368),null);
}
} else {
var skill = cljs.core.first.call(null,s__18366__$2);
return cljs.core.cons.call(null,[cljs.core.str((function (){var attrs18372 = skill;
if(cljs.core.map_QMARK_.call(null,attrs18372)){
return [cljs.core.str("<div"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"skill-11c15"], null),attrs18372))),cljs.core.str(">"),cljs.core.str("</div>")].join('');
} else {
return [cljs.core.str("<div class=\"skill-11c15\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18372)),cljs.core.str("</div>")].join('');
}
})())].join(''),comamitc$html$core$skills_sect_$_iter__18365.call(null,cljs.core.rest.call(null,s__18366__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17598__auto__.call(null,comamitc.config.skills);
})())),cljs.core.str("</div>")].join('');
});
comamitc.html.core.profile_content = (function comamitc$html$core$profile_content(){
return [cljs.core.str("<div"),cljs.core.str(" class=\"wrapper-a0def\" id=\"bodyContent\""),cljs.core.str(">"),cljs.core.str("<div"),cljs.core.str(" class=\"profile-e619f\""),cljs.core.str(">"),cljs.core.str("<div class=\"profile-left-44dfc\"><img class=\"profile-pic-8ab09\" src=\"images/mitch-2015-2.png\" /></div>"),cljs.core.str("<div"),cljs.core.str(" class=\"profile-right-717af\""),cljs.core.str(">"),cljs.core.str("<div"),cljs.core.str(" class=\"profile-about-58d23\""),cljs.core.str(">"),cljs.core.str("<div"),cljs.core.str(" class=\"about-content-80f15\""),cljs.core.str(">"),cljs.core.str((function (){var attrs18386 = [cljs.core.str("Hi, I'm Mitch.  "),cljs.core.str("I'm a full-stack engineer with 7 years of experience "),cljs.core.str("who enjoys working on simple, intuitive user experiences and efficient "),cljs.core.str("code. I currently work at ")].join('');
if(cljs.core.map_QMARK_.call(null,attrs18386)){
return [cljs.core.str("<p"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs18386))),cljs.core.str(">"),cljs.core.str("<a class=\"generic-link-20b6e\" href=\"http://cmn.com\">CMN</a>"),cljs.core.str(hiccups.runtime.render_html.call(null,[cljs.core.str(" where I develop dynamic applications for the web using"),cljs.core.str(" NodeJS, MySQL, JavaScript, CSS3, and HTML5.")].join(''))),cljs.core.str("</p>")].join('');
} else {
return [cljs.core.str("<p>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18386)),cljs.core.str("<a class=\"generic-link-20b6e\" href=\"http://cmn.com\">CMN</a>"),cljs.core.str(hiccups.runtime.render_html.call(null,[cljs.core.str(" where I develop dynamic applications for the web using"),cljs.core.str(" NodeJS, MySQL, JavaScript, CSS3, and HTML5.")].join(''))),cljs.core.str("</p>")].join('');
}
})()),cljs.core.str((function (){var attrs18391 = [cljs.core.str("When I'm not at my day job, I enjoy traveling around the world with my wife,"),cljs.core.str(" listening to music, working on side projects and driving my car.")].join('');
if(cljs.core.map_QMARK_.call(null,attrs18391)){
return [cljs.core.str("<p"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),null], null),attrs18391))),cljs.core.str(" />")].join('');
} else {
return [cljs.core.str("<p>"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18391)),cljs.core.str("</p>")].join('');
}
})()),cljs.core.str("</div>"),cljs.core.str("</div>"),cljs.core.str("</div>"),cljs.core.str("</div>"),cljs.core.str("<div"),cljs.core.str(" class=\"profile-e619f\""),cljs.core.str(">"),cljs.core.str((function (){var attrs18392 = comamitc.html.core.education.call(null);
if(cljs.core.map_QMARK_.call(null,attrs18392)){
return [cljs.core.str("<div"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"profile-left-44dfc"], null),attrs18392))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,comamitc.html.core.skills_sect.call(null))),cljs.core.str("</div>")].join('');
} else {
return [cljs.core.str("<div class=\"profile-left-44dfc\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18392)),cljs.core.str(hiccups.runtime.render_html.call(null,comamitc.html.core.skills_sect.call(null))),cljs.core.str("</div>")].join('');
}
})()),cljs.core.str((function (){var attrs18393 = comamitc.html.core.experience.call(null);
if(cljs.core.map_QMARK_.call(null,attrs18393)){
return [cljs.core.str("<div"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"profile-right-717af"], null),attrs18393))),cljs.core.str(">"),cljs.core.str("</div>")].join('');
} else {
return [cljs.core.str("<div class=\"profile-right-717af\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18393)),cljs.core.str("</div>")].join('');
}
})()),cljs.core.str("</div>"),cljs.core.str("</div>")].join('');
});
comamitc.html.core.project_content = (function comamitc$html$core$project_content(){
return [cljs.core.str("<div"),cljs.core.str(" class=\"wrapper-a0def\" id=\"bodyContent\""),cljs.core.str(">"),cljs.core.str("<div"),cljs.core.str(" class=\"projects-92dca\""),cljs.core.str(">"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__17598__auto__ = (function comamitc$html$core$project_content_$_iter__18422(s__18423){
return (new cljs.core.LazySeq(null,(function (){
var s__18423__$1 = s__18423;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18423__$1);
if(temp__4425__auto__){
var s__18423__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18423__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__18423__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__18425 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__18424 = (0);
while(true){
if((i__18424 < size__17597__auto__)){
var proj = cljs.core._nth.call(null,c__17596__auto__,i__18424);
cljs.core.chunk_append.call(null,b__18425,[cljs.core.str("<div"),cljs.core.str(" class=\"project-a8584\""),cljs.core.str(">"),cljs.core.str("<"),cljs.core.str("img"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"proj-img-037f6",new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(proj)], null))),cljs.core.str(" />"),cljs.core.str((function (){var attrs18438 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(proj);
if(cljs.core.map_QMARK_.call(null,attrs18438)){
return [cljs.core.str("<div"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"proj-title-78cce"], null),attrs18438))),cljs.core.str(">"),cljs.core.str((function (){var attrs18439 = new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(proj);
if(cljs.core.map_QMARK_.call(null,attrs18439)){
return [cljs.core.str("<span"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"right-0258c"], null),attrs18439))),cljs.core.str(">"),cljs.core.str("</span>")].join('');
} else {
return [cljs.core.str("<span class=\"right-0258c\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18439)),cljs.core.str("</span>")].join('');
}
})()),cljs.core.str("</div>")].join('');
} else {
return [cljs.core.str("<div class=\"proj-title-78cce\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18438)),cljs.core.str((function (){var attrs18440 = new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(proj);
if(cljs.core.map_QMARK_.call(null,attrs18440)){
return [cljs.core.str("<span"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"right-0258c"], null),attrs18440))),cljs.core.str(">"),cljs.core.str("</span>")].join('');
} else {
return [cljs.core.str("<span class=\"right-0258c\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18440)),cljs.core.str("</span>")].join('');
}
})()),cljs.core.str("</div>")].join('');
}
})()),cljs.core.str((function (){var attrs18441 = new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(proj);
if(cljs.core.map_QMARK_.call(null,attrs18441)){
return [cljs.core.str("<div"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"proj-desc-78cce"], null),attrs18441))),cljs.core.str(">"),cljs.core.str("<div"),cljs.core.str(" class=\"proj-links-6d319\""),cljs.core.str(">"),cljs.core.str((function (){var attrs18442 = (function (){var temp__4425__auto____$1 = new cljs.core.Keyword(null,"site","site",-1852581499).cljs$core$IFn$_invoke$arity$1(proj);
if(cljs.core.truth_(temp__4425__auto____$1)){
var site = temp__4425__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),site], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-link.proj-link-c7825","i.fa.fa-link.proj-link-c7825",-1189351419)], null)], null);
} else {
return null;
}
})();
if(cljs.core.map_QMARK_.call(null,attrs18442)){
return [cljs.core.str("<div"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"right-ac7f2"], null),attrs18442))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,(function (){var temp__4425__auto____$1 = new cljs.core.Keyword(null,"github","github",567794498).cljs$core$IFn$_invoke$arity$1(proj);
if(cljs.core.truth_(temp__4425__auto____$1)){
var github = temp__4425__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),github], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-github-alt.proj-link-c7825","i.fa.fa-github-alt.proj-link-c7825",821375979)], null)], null);
} else {
return null;
}
})())),cljs.core.str("</div>")].join('');
} else {
return [cljs.core.str("<div class=\"right-ac7f2\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18442)),cljs.core.str(hiccups.runtime.render_html.call(null,(function (){var temp__4425__auto____$1 = new cljs.core.Keyword(null,"github","github",567794498).cljs$core$IFn$_invoke$arity$1(proj);
if(cljs.core.truth_(temp__4425__auto____$1)){
var github = temp__4425__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),github], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-github-alt.proj-link-c7825","i.fa.fa-github-alt.proj-link-c7825",821375979)], null)], null);
} else {
return null;
}
})())),cljs.core.str("</div>")].join('');
}
})()),cljs.core.str("</div>"),cljs.core.str("</div>")].join('');
} else {
return [cljs.core.str("<div class=\"proj-desc-78cce\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18441)),cljs.core.str("<div"),cljs.core.str(" class=\"proj-links-6d319\""),cljs.core.str(">"),cljs.core.str((function (){var attrs18443 = (function (){var temp__4425__auto____$1 = new cljs.core.Keyword(null,"site","site",-1852581499).cljs$core$IFn$_invoke$arity$1(proj);
if(cljs.core.truth_(temp__4425__auto____$1)){
var site = temp__4425__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),site], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-link.proj-link-c7825","i.fa.fa-link.proj-link-c7825",-1189351419)], null)], null);
} else {
return null;
}
})();
if(cljs.core.map_QMARK_.call(null,attrs18443)){
return [cljs.core.str("<div"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"right-ac7f2"], null),attrs18443))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,(function (){var temp__4425__auto____$1 = new cljs.core.Keyword(null,"github","github",567794498).cljs$core$IFn$_invoke$arity$1(proj);
if(cljs.core.truth_(temp__4425__auto____$1)){
var github = temp__4425__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),github], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-github-alt.proj-link-c7825","i.fa.fa-github-alt.proj-link-c7825",821375979)], null)], null);
} else {
return null;
}
})())),cljs.core.str("</div>")].join('');
} else {
return [cljs.core.str("<div class=\"right-ac7f2\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18443)),cljs.core.str(hiccups.runtime.render_html.call(null,(function (){var temp__4425__auto____$1 = new cljs.core.Keyword(null,"github","github",567794498).cljs$core$IFn$_invoke$arity$1(proj);
if(cljs.core.truth_(temp__4425__auto____$1)){
var github = temp__4425__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),github], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-github-alt.proj-link-c7825","i.fa.fa-github-alt.proj-link-c7825",821375979)], null)], null);
} else {
return null;
}
})())),cljs.core.str("</div>")].join('');
}
})()),cljs.core.str("</div>"),cljs.core.str("</div>")].join('');
}
})()),cljs.core.str("</div>")].join(''));

var G__18450 = (i__18424 + (1));
i__18424 = G__18450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18425),comamitc$html$core$project_content_$_iter__18422.call(null,cljs.core.chunk_rest.call(null,s__18423__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18425),null);
}
} else {
var proj = cljs.core.first.call(null,s__18423__$2);
return cljs.core.cons.call(null,[cljs.core.str("<div"),cljs.core.str(" class=\"project-a8584\""),cljs.core.str(">"),cljs.core.str("<"),cljs.core.str("img"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"proj-img-037f6",new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"img","img",1442687358).cljs$core$IFn$_invoke$arity$1(proj)], null))),cljs.core.str(" />"),cljs.core.str((function (){var attrs18444 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(proj);
if(cljs.core.map_QMARK_.call(null,attrs18444)){
return [cljs.core.str("<div"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"proj-title-78cce"], null),attrs18444))),cljs.core.str(">"),cljs.core.str((function (){var attrs18445 = new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(proj);
if(cljs.core.map_QMARK_.call(null,attrs18445)){
return [cljs.core.str("<span"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"right-0258c"], null),attrs18445))),cljs.core.str(">"),cljs.core.str("</span>")].join('');
} else {
return [cljs.core.str("<span class=\"right-0258c\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18445)),cljs.core.str("</span>")].join('');
}
})()),cljs.core.str("</div>")].join('');
} else {
return [cljs.core.str("<div class=\"proj-title-78cce\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18444)),cljs.core.str((function (){var attrs18446 = new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(proj);
if(cljs.core.map_QMARK_.call(null,attrs18446)){
return [cljs.core.str("<span"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"right-0258c"], null),attrs18446))),cljs.core.str(">"),cljs.core.str("</span>")].join('');
} else {
return [cljs.core.str("<span class=\"right-0258c\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18446)),cljs.core.str("</span>")].join('');
}
})()),cljs.core.str("</div>")].join('');
}
})()),cljs.core.str((function (){var attrs18447 = new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(proj);
if(cljs.core.map_QMARK_.call(null,attrs18447)){
return [cljs.core.str("<div"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"proj-desc-78cce"], null),attrs18447))),cljs.core.str(">"),cljs.core.str("<div"),cljs.core.str(" class=\"proj-links-6d319\""),cljs.core.str(">"),cljs.core.str((function (){var attrs18448 = (function (){var temp__4425__auto____$1 = new cljs.core.Keyword(null,"site","site",-1852581499).cljs$core$IFn$_invoke$arity$1(proj);
if(cljs.core.truth_(temp__4425__auto____$1)){
var site = temp__4425__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),site], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-link.proj-link-c7825","i.fa.fa-link.proj-link-c7825",-1189351419)], null)], null);
} else {
return null;
}
})();
if(cljs.core.map_QMARK_.call(null,attrs18448)){
return [cljs.core.str("<div"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"right-ac7f2"], null),attrs18448))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,(function (){var temp__4425__auto____$1 = new cljs.core.Keyword(null,"github","github",567794498).cljs$core$IFn$_invoke$arity$1(proj);
if(cljs.core.truth_(temp__4425__auto____$1)){
var github = temp__4425__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),github], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-github-alt.proj-link-c7825","i.fa.fa-github-alt.proj-link-c7825",821375979)], null)], null);
} else {
return null;
}
})())),cljs.core.str("</div>")].join('');
} else {
return [cljs.core.str("<div class=\"right-ac7f2\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18448)),cljs.core.str(hiccups.runtime.render_html.call(null,(function (){var temp__4425__auto____$1 = new cljs.core.Keyword(null,"github","github",567794498).cljs$core$IFn$_invoke$arity$1(proj);
if(cljs.core.truth_(temp__4425__auto____$1)){
var github = temp__4425__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),github], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-github-alt.proj-link-c7825","i.fa.fa-github-alt.proj-link-c7825",821375979)], null)], null);
} else {
return null;
}
})())),cljs.core.str("</div>")].join('');
}
})()),cljs.core.str("</div>"),cljs.core.str("</div>")].join('');
} else {
return [cljs.core.str("<div class=\"proj-desc-78cce\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18447)),cljs.core.str("<div"),cljs.core.str(" class=\"proj-links-6d319\""),cljs.core.str(">"),cljs.core.str((function (){var attrs18449 = (function (){var temp__4425__auto____$1 = new cljs.core.Keyword(null,"site","site",-1852581499).cljs$core$IFn$_invoke$arity$1(proj);
if(cljs.core.truth_(temp__4425__auto____$1)){
var site = temp__4425__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),site], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-link.proj-link-c7825","i.fa.fa-link.proj-link-c7825",-1189351419)], null)], null);
} else {
return null;
}
})();
if(cljs.core.map_QMARK_.call(null,attrs18449)){
return [cljs.core.str("<div"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"right-ac7f2"], null),attrs18449))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,(function (){var temp__4425__auto____$1 = new cljs.core.Keyword(null,"github","github",567794498).cljs$core$IFn$_invoke$arity$1(proj);
if(cljs.core.truth_(temp__4425__auto____$1)){
var github = temp__4425__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),github], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-github-alt.proj-link-c7825","i.fa.fa-github-alt.proj-link-c7825",821375979)], null)], null);
} else {
return null;
}
})())),cljs.core.str("</div>")].join('');
} else {
return [cljs.core.str("<div class=\"right-ac7f2\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18449)),cljs.core.str(hiccups.runtime.render_html.call(null,(function (){var temp__4425__auto____$1 = new cljs.core.Keyword(null,"github","github",567794498).cljs$core$IFn$_invoke$arity$1(proj);
if(cljs.core.truth_(temp__4425__auto____$1)){
var github = temp__4425__auto____$1;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),github], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-github-alt.proj-link-c7825","i.fa.fa-github-alt.proj-link-c7825",821375979)], null)], null);
} else {
return null;
}
})())),cljs.core.str("</div>")].join('');
}
})()),cljs.core.str("</div>"),cljs.core.str("</div>")].join('');
}
})()),cljs.core.str("</div>")].join(''),comamitc$html$core$project_content_$_iter__18422.call(null,cljs.core.rest.call(null,s__18423__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17598__auto__.call(null,comamitc.config.projects);
})())),cljs.core.str("</div>"),cljs.core.str("</div>")].join('');
});
comamitc.html.core.nav_list = (function comamitc$html$core$nav_list(alt){
return [cljs.core.str("<ul"),cljs.core.str(""),cljs.core.str(">"),cljs.core.str((function (){var attrs18461 = ((cljs.core._EQ_.call(null,alt,new cljs.core.Keyword(null,"profile","profile",-545963874)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"active-link-8157d"], null):null);
if(cljs.core.map_QMARK_.call(null,attrs18461)){
return [cljs.core.str("<li"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"nav-link-2c23a"], null),attrs18461))),cljs.core.str(">"),cljs.core.str("<a href=\"#/profile\">profile</a>"),cljs.core.str("</li>")].join('');
} else {
return [cljs.core.str("<li class=\"nav-link-2c23a\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18461)),cljs.core.str("<a href=\"#/profile\">profile</a>"),cljs.core.str("</li>")].join('');
}
})()),cljs.core.str((function (){var attrs18466 = ((cljs.core._EQ_.call(null,alt,new cljs.core.Keyword(null,"projects","projects",-364845983)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"active-link-8157d"], null):null);
if(cljs.core.map_QMARK_.call(null,attrs18466)){
return [cljs.core.str("<li"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"nav-link-2c23a"], null),attrs18466))),cljs.core.str(">"),cljs.core.str("<a href=\"#/projects\">projects</a>"),cljs.core.str("</li>")].join('');
} else {
return [cljs.core.str("<li class=\"nav-link-2c23a\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18466)),cljs.core.str("<a href=\"#/projects\">projects</a>"),cljs.core.str("</li>")].join('');
}
})()),cljs.core.str("</ul>")].join('');
});
comamitc.html.core.nav_bar = (function comamitc$html$core$nav_bar(alt){
return [cljs.core.str("<header"),cljs.core.str(" class=\"wrapper-a0def header-7f1e8\" id=\"navBar\""),cljs.core.str(">"),cljs.core.str("<a class=\"header-left-363bb\" href=\"#/\"><div class=\"header-logo-5bacd\"><img alt=\"MFC\" height=\"50px\" src=\"images/texas-sil.png\" /></div><div class=\"header-title-947c2\">Mitch Comardo</div></a>"),cljs.core.str((function (){var attrs18476 = comamitc.html.core.nav_list.call(null,alt);
if(cljs.core.map_QMARK_.call(null,attrs18476)){
return [cljs.core.str("<div"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"header-right-591aa"], null),attrs18476))),cljs.core.str(">"),cljs.core.str("</div>")].join('');
} else {
return [cljs.core.str("<div class=\"header-right-591aa\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18476)),cljs.core.str("</div>")].join('');
}
})()),cljs.core.str("</header>")].join('');
});
comamitc.html.core.footer = (function comamitc$html$core$footer(){
return [cljs.core.str("<footer class=\"bottom-c3612\"><div class=\"wrapper-a0def footer-center-b2a7f\"><ul><li class=\"footer-link-b3f79\"><a href=\"mailto:comamitc@gmail.com\"><i class=\"fa fa-envelope\"></i></a></li><li class=\"footer-link-b3f79\"><a href=\"http://facebook.com/comamitc\"><i class=\"fa fa-facebook\"></i></a></li><li class=\"footer-link-b3f79\"><a href=\"http://twitter.com/comamitc\"><i class=\"fa fa-twitter\"></i></a></li><li class=\"footer-link-b3f79\"><a href=\"http://linkedin.com/in/mitchcomardo\"><i class=\"fa fa-linkedin\"></i></a></li><li class=\"footer-link-b3f79\"><a href=\"http://github.com/comamitc\"><i class=\"fa fa-github-alt\"></i></a></li></ul><div class=\"disclaimer-d553a\"><div class=\"license-5cb15\">All Rights Reserved Mitch Comardo \u00A9 2015</div></div></div></footer>")].join('');
});
comamitc.html.core.body_map = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),comamitc.html.core.home_content,new cljs.core.Keyword(null,"profile","profile",-545963874),comamitc.html.core.profile_content,new cljs.core.Keyword(null,"projects","projects",-364845983),comamitc.html.core.project_content], null);
comamitc.html.core.app = (function comamitc$html$core$app(alt){
return [cljs.core.str((function (){var attrs18482 = comamitc.html.core.nav_bar.call(null,alt);
if(cljs.core.map_QMARK_.call(null,attrs18482)){
return [cljs.core.str("<div"),cljs.core.str(hiccups.runtime.render_attr_map.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"class","class",-2030961996),"body-c83c6"], null),attrs18482))),cljs.core.str(">"),cljs.core.str(hiccups.runtime.render_html.call(null,cljs.core.get.call(null,comamitc.html.core.body_map,alt).call(null))),cljs.core.str(hiccups.runtime.render_html.call(null,comamitc.html.core.footer.call(null))),cljs.core.str("</div>")].join('');
} else {
return [cljs.core.str("<div class=\"body-c83c6\">"),cljs.core.str(hiccups.runtime.render_html.call(null,attrs18482)),cljs.core.str(hiccups.runtime.render_html.call(null,cljs.core.get.call(null,comamitc.html.core.body_map,alt).call(null))),cljs.core.str(hiccups.runtime.render_html.call(null,comamitc.html.core.footer.call(null))),cljs.core.str("</div>")].join('');
}
})())].join('');
});
comamitc.html.core.render = (function comamitc$html$core$render(alt){
return comamitc.dom.set_body_BANG_.call(null,comamitc.html.core.app.call(null,alt));
});
goog.exportSymbol('comamitc.html.core.render', comamitc.html.core.render);

//# sourceMappingURL=core.js.map
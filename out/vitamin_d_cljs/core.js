// Compiled by ClojureScript 1.8.34 {}
goog.provide('vitamin_d_cljs.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
vitamin_d_cljs.core.slots_tick = (40);
vitamin_d_cljs.core.mood_tick = (60);
vitamin_d_cljs.core.success_tick = (60);
vitamin_d_cljs.core.time_tick = (60);
vitamin_d_cljs.core.btn_dimension = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),(180),new cljs.core.Keyword(null,"h","h",1109658740),(50)], null);
vitamin_d_cljs.core.btn_out_coord = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(450)], null);
vitamin_d_cljs.core.btn_in_coord = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(320),new cljs.core.Keyword(null,"y","y",-1757859776),(450)], null);
vitamin_d_cljs.core.stats_icons = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mood","mood",-616134094),"sun.png",new cljs.core.Keyword(null,"success","success",1890645906),"money.png"], null);
vitamin_d_cljs.core.slot_images = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"0","0",351625802),"beers.png",new cljs.core.Keyword(null,"1","1",-521621649),"computer.png",new cljs.core.Keyword(null,"2","2",-1645882217),"fries.png",new cljs.core.Keyword(null,"3","3",2097825370),"book.png"], null);
vitamin_d_cljs.core.initial_state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"countdown","countdown",-1468813996),(60),new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mood","mood",-616134094),(50),new cljs.core.Keyword(null,"success","success",1890645906),(50)], null),new cljs.core.Keyword(null,"slots","slots",276818598),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"running","running",1554969103),false], null);
vitamin_d_cljs.core.load_image = cljs.core.memoize.call(null,quil.core.load_image);
vitamin_d_cljs.core.reset = (function vitamin_d_cljs$core$reset(state){
return vitamin_d_cljs.core.initial_state;
});
vitamin_d_cljs.core.check_if_alive = (function vitamin_d_cljs$core$check_if_alive(state){
if(((new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(state)) <= (0))) || ((new cljs.core.Keyword(null,"mood","mood",-616134094).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(state)) <= (0))) || ((new cljs.core.Keyword(null,"countdown","countdown",-1468813996).cljs$core$IFn$_invoke$arity$1(state) <= (0)))){
return vitamin_d_cljs.core.reset.call(null,state);
} else {
return state;
}
});
vitamin_d_cljs.core.increase_stats = (function vitamin_d_cljs$core$increase_stats(state,stat){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stats","stats",-85643011),stat], null),cljs.core.inc);
});
vitamin_d_cljs.core.is_in_button = (function vitamin_d_cljs$core$is_in_button(){
if(((quil.core.mouse_x.call(null) > new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vitamin_d_cljs.core.btn_out_coord))) && ((quil.core.mouse_x.call(null) < (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vitamin_d_cljs.core.btn_out_coord) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(vitamin_d_cljs.core.btn_dimension)))) && ((quil.core.mouse_y.call(null) > new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vitamin_d_cljs.core.btn_out_coord))) && ((quil.core.mouse_y.call(null) < (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vitamin_d_cljs.core.btn_out_coord) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(vitamin_d_cljs.core.btn_dimension))))){
return new cljs.core.Keyword(null,"mood","mood",-616134094);
} else {
if(((quil.core.mouse_x.call(null) > new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vitamin_d_cljs.core.btn_in_coord))) && ((quil.core.mouse_x.call(null) < (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vitamin_d_cljs.core.btn_in_coord) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(vitamin_d_cljs.core.btn_dimension)))) && ((quil.core.mouse_y.call(null) > new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vitamin_d_cljs.core.btn_in_coord))) && ((quil.core.mouse_y.call(null) < (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vitamin_d_cljs.core.btn_in_coord) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(vitamin_d_cljs.core.btn_dimension))))){
return new cljs.core.Keyword(null,"success","success",1890645906);
} else {
return false;
}
}
});
vitamin_d_cljs.core.handle_mouse = (function vitamin_d_cljs$core$handle_mouse(state){
var button_name = vitamin_d_cljs.core.is_in_button.call(null);
var slots = new cljs.core.Keyword(null,"slots","slots",276818598).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core._EQ_.call(null,cljs.core.nth.call(null,slots,(0)),cljs.core.nth.call(null,slots,(1)),cljs.core.nth.call(null,slots,(2)))){
if(cljs.core.truth_((function (){var and__6198__auto__ = quil.core.mouse_pressed_QMARK_.call(null);
if(cljs.core.truth_(and__6198__auto__)){
return button_name;
} else {
return and__6198__auto__;
}
})())){
return vitamin_d_cljs.core.increase_stats.call(null,state,button_name);
} else {
return state;
}
} else {
return state;
}
});
vitamin_d_cljs.core.check_for_tick = (function vitamin_d_cljs$core$check_for_tick(num){
return cljs.core._EQ_.call(null,cljs.core.mod.call(null,quil.core.frame_count.call(null),num),(0));
});
vitamin_d_cljs.core.update_countdown = (function vitamin_d_cljs$core$update_countdown(state){
if(cljs.core.truth_(vitamin_d_cljs.core.check_for_tick.call(null,vitamin_d_cljs.core.time_tick))){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countdown","countdown",-1468813996)], null),cljs.core.dec);
} else {
return state;
}
});
vitamin_d_cljs.core.update_mood = (function vitamin_d_cljs$core$update_mood(state){
if(cljs.core.truth_(vitamin_d_cljs.core.check_for_tick.call(null,vitamin_d_cljs.core.mood_tick))){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"mood","mood",-616134094)], null),cljs.core.dec);
} else {
return state;
}
});
vitamin_d_cljs.core.update_success = (function vitamin_d_cljs$core$update_success(state){
if(cljs.core.truth_(vitamin_d_cljs.core.check_for_tick.call(null,vitamin_d_cljs.core.success_tick))){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stats","stats",-85643011),new cljs.core.Keyword(null,"success","success",1890645906)], null),cljs.core.dec);
} else {
return state;
}
});
vitamin_d_cljs.core.generate_slot = (function vitamin_d_cljs$core$generate_slot(){
return cljs.core.rand_int.call(null,(4));
});
vitamin_d_cljs.core.update_slots = (function vitamin_d_cljs$core$update_slots(state){
if(cljs.core.truth_(vitamin_d_cljs.core.check_for_tick.call(null,vitamin_d_cljs.core.slots_tick))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"slots","slots",276818598),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vitamin_d_cljs.core.generate_slot.call(null),vitamin_d_cljs.core.generate_slot.call(null),vitamin_d_cljs.core.generate_slot.call(null)], null));
} else {
return state;
}
});
vitamin_d_cljs.core.setup = (function vitamin_d_cljs$core$setup(){
quil.core.text_font.call(null,quil.core.create_font.call(null,"Quicksand-Bold",(30)));

return vitamin_d_cljs.core.initial_state;
});
vitamin_d_cljs.core.load_slot_image = (function vitamin_d_cljs$core$load_slot_image(i,state){
var num = cljs.core.nth.call(null,new cljs.core.Keyword(null,"slots","slots",276818598).cljs$core$IFn$_invoke$arity$1(state),i);
return vitamin_d_cljs.core.load_image.call(null,cljs.core.keyword.call(null,[cljs.core.str(num)].join('')).call(null,vitamin_d_cljs.core.slot_images));
});
vitamin_d_cljs.core.draw_stats_counter = (function vitamin_d_cljs$core$draw_stats_counter(state,description,key,x,y){
quil.core.text.call(null,description,x,(y - (20)));

var seq__7823 = cljs.core.seq.call(null,cljs.core.range.call(null,(key.call(null,new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(state)) / (10))));
var chunk__7824 = null;
var count__7825 = (0);
var i__7826 = (0);
while(true){
if((i__7826 < count__7825)){
var i = cljs.core._nth.call(null,chunk__7824,i__7826);
quil.core.image.call(null,vitamin_d_cljs.core.load_image.call(null,key.call(null,vitamin_d_cljs.core.stats_icons)),(x + ((25) * i)),y,(20),(18));

var G__7827 = seq__7823;
var G__7828 = chunk__7824;
var G__7829 = count__7825;
var G__7830 = (i__7826 + (1));
seq__7823 = G__7827;
chunk__7824 = G__7828;
count__7825 = G__7829;
i__7826 = G__7830;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__7823);
if(temp__4657__auto__){
var seq__7823__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7823__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__7823__$1);
var G__7831 = cljs.core.chunk_rest.call(null,seq__7823__$1);
var G__7832 = c__7021__auto__;
var G__7833 = cljs.core.count.call(null,c__7021__auto__);
var G__7834 = (0);
seq__7823 = G__7831;
chunk__7824 = G__7832;
count__7825 = G__7833;
i__7826 = G__7834;
continue;
} else {
var i = cljs.core.first.call(null,seq__7823__$1);
quil.core.image.call(null,vitamin_d_cljs.core.load_image.call(null,key.call(null,vitamin_d_cljs.core.stats_icons)),(x + ((25) * i)),y,(20),(18));

var G__7835 = cljs.core.next.call(null,seq__7823__$1);
var G__7836 = null;
var G__7837 = (0);
var G__7838 = (0);
seq__7823 = G__7835;
chunk__7824 = G__7836;
count__7825 = G__7837;
i__7826 = G__7838;
continue;
}
} else {
return null;
}
}
break;
}
});
vitamin_d_cljs.core.draw_ui = (function vitamin_d_cljs$core$draw_ui(){
quil.core.no_stroke.call(null);

quil.core.fill.call(null,(100),(200),(200));

quil.core.rect.call(null,(100),(68),(400),(20));

quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vitamin_d_cljs.core.btn_out_coord),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vitamin_d_cljs.core.btn_out_coord),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(vitamin_d_cljs.core.btn_dimension),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(vitamin_d_cljs.core.btn_dimension));

quil.core.rect.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vitamin_d_cljs.core.btn_in_coord),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vitamin_d_cljs.core.btn_in_coord),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(vitamin_d_cljs.core.btn_dimension),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(vitamin_d_cljs.core.btn_dimension));

return quil.core.fill.call(null,(0));
});
vitamin_d_cljs.core.draw_stats = (function vitamin_d_cljs$core$draw_stats(state){
quil.core.text_size.call(null,(30));

quil.core.text.call(null,[cljs.core.str("Time left: "),cljs.core.str(new cljs.core.Keyword(null,"countdown","countdown",-1468813996).cljs$core$IFn$_invoke$arity$1(state)),cljs.core.str("s")].join(''),(200),(80));

quil.core.text_size.call(null,(16));

vitamin_d_cljs.core.draw_stats_counter.call(null,state,"MOOD",new cljs.core.Keyword(null,"mood","mood",-616134094),(100),(180));

return vitamin_d_cljs.core.draw_stats_counter.call(null,state,"SUCCESS",new cljs.core.Keyword(null,"success","success",1890645906),(380),(180));
});
vitamin_d_cljs.core.draw_slots = (function vitamin_d_cljs$core$draw_slots(state){
var seq__7843 = cljs.core.seq.call(null,cljs.core.range.call(null,(3)));
var chunk__7844 = null;
var count__7845 = (0);
var i__7846 = (0);
while(true){
if((i__7846 < count__7845)){
var i = cljs.core._nth.call(null,chunk__7844,i__7846);
quil.core.image.call(null,vitamin_d_cljs.core.load_slot_image.call(null,i,state),((100) + ((150) * i)),(260),(100),(100));

var G__7847 = seq__7843;
var G__7848 = chunk__7844;
var G__7849 = count__7845;
var G__7850 = (i__7846 + (1));
seq__7843 = G__7847;
chunk__7844 = G__7848;
count__7845 = G__7849;
i__7846 = G__7850;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__7843);
if(temp__4657__auto__){
var seq__7843__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7843__$1)){
var c__7021__auto__ = cljs.core.chunk_first.call(null,seq__7843__$1);
var G__7851 = cljs.core.chunk_rest.call(null,seq__7843__$1);
var G__7852 = c__7021__auto__;
var G__7853 = cljs.core.count.call(null,c__7021__auto__);
var G__7854 = (0);
seq__7843 = G__7851;
chunk__7844 = G__7852;
count__7845 = G__7853;
i__7846 = G__7854;
continue;
} else {
var i = cljs.core.first.call(null,seq__7843__$1);
quil.core.image.call(null,vitamin_d_cljs.core.load_slot_image.call(null,i,state),((100) + ((150) * i)),(260),(100),(100));

var G__7855 = cljs.core.next.call(null,seq__7843__$1);
var G__7856 = null;
var G__7857 = (0);
var G__7858 = (0);
seq__7843 = G__7855;
chunk__7844 = G__7856;
count__7845 = G__7857;
i__7846 = G__7858;
continue;
}
} else {
return null;
}
}
break;
}
});
vitamin_d_cljs.core.draw_buttons = (function vitamin_d_cljs$core$draw_buttons(){
quil.core.text_size.call(null,(28));

if(cljs.core.truth_((function (){var and__6198__auto__ = quil.core.mouse_pressed_QMARK_.call(null);
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core._EQ_.call(null,vitamin_d_cljs.core.is_in_button.call(null),new cljs.core.Keyword(null,"mood","mood",-616134094));
} else {
return and__6198__auto__;
}
})())){
quil.core.fill.call(null,(255));
} else {
quil.core.fill.call(null,(0));
}

quil.core.text.call(null,"Go outside",(110),(485));

if(cljs.core.truth_((function (){var and__6198__auto__ = quil.core.mouse_pressed_QMARK_.call(null);
if(cljs.core.truth_(and__6198__auto__)){
return cljs.core._EQ_.call(null,vitamin_d_cljs.core.is_in_button.call(null),new cljs.core.Keyword(null,"success","success",1890645906));
} else {
return and__6198__auto__;
}
})())){
quil.core.fill.call(null,(255));
} else {
quil.core.fill.call(null,(0));
}

return quil.core.text.call(null,"Stay inside",(330),(485));
});
vitamin_d_cljs.core.draw_start_screen = (function vitamin_d_cljs$core$draw_start_screen(){
return quil.core.image.call(null,vitamin_d_cljs.core.load_image.call(null,"start.png"),(0),(0));
});
vitamin_d_cljs.core.draw = (function vitamin_d_cljs$core$draw(state){
quil.core.background.call(null,(255));

if(cljs.core.truth_(new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(state))){
vitamin_d_cljs.core.draw_ui.call(null);

vitamin_d_cljs.core.draw_stats.call(null,state);

vitamin_d_cljs.core.draw_slots.call(null,state);

return vitamin_d_cljs.core.draw_buttons.call(null);
} else {
return vitamin_d_cljs.core.draw_start_screen.call(null);
}
});
vitamin_d_cljs.core.update_running = (function vitamin_d_cljs$core$update_running(state){
if((cljs.core._EQ_.call(null,cljs.core.mod.call(null,quil.core.frame_count.call(null),(100)),(0))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(state),false))){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"running","running",1554969103),true);
} else {
return state;
}
});
vitamin_d_cljs.core.update_state = (function vitamin_d_cljs$core$update_state(state){
return vitamin_d_cljs.core.handle_mouse.call(null,vitamin_d_cljs.core.update_countdown.call(null,vitamin_d_cljs.core.update_success.call(null,vitamin_d_cljs.core.update_mood.call(null,vitamin_d_cljs.core.update_slots.call(null,vitamin_d_cljs.core.check_if_alive.call(null,vitamin_d_cljs.core.update_running.call(null,state)))))));
});
vitamin_d_cljs.core.all_images = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["beers","book","computer","fries","money","start-2x","start","sun"], null);
vitamin_d_cljs.core.start_sketch = (function vitamin_d_cljs$core$start_sketch(){
vitamin_d_cljs.core.vitamin_d = (function vitamin_d_cljs$core$start_sketch_$_vitamin_d(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"vitamin-d-cljs",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,vitamin_d_cljs.core.update_state))?(function() { 
var G__7859__delegate = function (args){
return cljs.core.apply.call(null,vitamin_d_cljs.core.update_state,args);
};
var G__7859 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7860__i = 0, G__7860__a = new Array(arguments.length -  0);
while (G__7860__i < G__7860__a.length) {G__7860__a[G__7860__i] = arguments[G__7860__i + 0]; ++G__7860__i;}
  args = new cljs.core.IndexedSeq(G__7860__a,0);
} 
return G__7859__delegate.call(this,args);};
G__7859.cljs$lang$maxFixedArity = 0;
G__7859.cljs$lang$applyTo = (function (arglist__7861){
var args = cljs.core.seq(arglist__7861);
return G__7859__delegate(args);
});
G__7859.cljs$core$IFn$_invoke$arity$variadic = G__7859__delegate;
return G__7859;
})()
:vitamin_d_cljs.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(600)], null),new cljs.core.Keyword(null,"title","title",636505583),"Vitamin D",new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,vitamin_d_cljs.core.setup))?(function() { 
var G__7862__delegate = function (args){
return cljs.core.apply.call(null,vitamin_d_cljs.core.setup,args);
};
var G__7862 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7863__i = 0, G__7863__a = new Array(arguments.length -  0);
while (G__7863__i < G__7863__a.length) {G__7863__a[G__7863__i] = arguments[G__7863__i + 0]; ++G__7863__i;}
  args = new cljs.core.IndexedSeq(G__7863__a,0);
} 
return G__7862__delegate.call(this,args);};
G__7862.cljs$lang$maxFixedArity = 0;
G__7862.cljs$lang$applyTo = (function (arglist__7864){
var args = cljs.core.seq(arglist__7864);
return G__7862__delegate(args);
});
G__7862.cljs$core$IFn$_invoke$arity$variadic = G__7862__delegate;
return G__7862;
})()
:vitamin_d_cljs.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,vitamin_d_cljs.core.draw))?(function() { 
var G__7865__delegate = function (args){
return cljs.core.apply.call(null,vitamin_d_cljs.core.draw,args);
};
var G__7865 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7866__i = 0, G__7866__a = new Array(arguments.length -  0);
while (G__7866__i < G__7866__a.length) {G__7866__a[G__7866__i] = arguments[G__7866__i + 0]; ++G__7866__i;}
  args = new cljs.core.IndexedSeq(G__7866__a,0);
} 
return G__7865__delegate.call(this,args);};
G__7865.cljs$lang$maxFixedArity = 0;
G__7865.cljs$lang$applyTo = (function (arglist__7867){
var args = cljs.core.seq(arglist__7867);
return G__7865__delegate(args);
});
G__7865.cljs$core$IFn$_invoke$arity$variadic = G__7865__delegate;
return G__7865;
})()
:vitamin_d_cljs.core.draw));
});
goog.exportSymbol('vitamin_d_cljs.core.vitamin_d', vitamin_d_cljs.core.vitamin_d);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__7363__7364__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__7363__7364__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),vitamin_d_cljs.core.vitamin_d,new cljs.core.Keyword(null,"host-id","host-id",742376279),"vitamin-d-cljs"], null));
}
});
vitamin_d_cljs.core.preload_images_and_go = (function vitamin_d_cljs$core$preload_images_and_go(imgs){
if(cljs.core.seq.call(null,imgs)){
var jsimg = (new Image());
jsimg.onload = vitamin_d_cljs$core$preload_images_and_go.call(null,cljs.core.next.call(null,imgs));

jsimg.onabort = vitamin_d_cljs$core$preload_images_and_go.call(null,cljs.core.next.call(null,imgs));

jsimg.onerror = vitamin_d_cljs$core$preload_images_and_go.call(null,cljs.core.next.call(null,imgs));

return jsimg.src = [cljs.core.str(cljs.core.first.call(null,imgs)),cljs.core.str(".png")].join('');
} else {
return vitamin_d_cljs.core.start_sketch.call(null);
}
});
vitamin_d_cljs.core.preload_images_and_go.call(null,vitamin_d_cljs.core.all_images);

//# sourceMappingURL=core.js.map
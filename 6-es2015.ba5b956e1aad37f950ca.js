(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{UvNp:function(e,t,s){"use strict";s.r(t),s.d(t,"NgxTabFocusDemoModule",(function(){return w}));var n=s("kZht");let o=(()=>{class e{}return e.\u0275mod=n.Fb({type:e}),e.\u0275inj=n.Eb({factory:function(t){return new(t||e)},imports:[[]]}),e})();var i=s("ZTXN"),r=s("IdLP"),c=s("FU6l"),l=s("IJgj"),a=s("YtkY");function b(e,t,s,n){return Object(l.a)(s)&&(n=s,s=void 0),n?b(e,t,s).pipe(Object(a.a)(e=>Object(c.a)(e)?n(...e):n(e))):new r.a(n=>{!function e(t,s,n,o,i){let r;if(function(e){return e&&"function"==typeof e.addEventListener&&"function"==typeof e.removeEventListener}(t)){const e=t;t.addEventListener(s,n,i),r=()=>e.removeEventListener(s,n,i)}else if(function(e){return e&&"function"==typeof e.on&&"function"==typeof e.off}(t)){const e=t;t.on(s,n),r=()=>e.off(s,n)}else if(function(e){return e&&"function"==typeof e.addListener&&"function"==typeof e.removeListener}(t)){const e=t;t.addListener(s,n),r=()=>e.removeListener(s,n)}else{if(!t||!t.length)throw new TypeError("Invalid event target");for(let r=0,c=t.length;r<c;r++)e(t[r],s,n,o,i)}o.add(r)}(e,t,(function(e){n.next(arguments.length>1?Array.prototype.slice.call(arguments):e)}),n,s)})}var u=s("pBDD"),h=s("mW0F");class f{constructor(e){this.notifier=e}call(e,t){const s=new y(e),n=Object(h.a)(s,this.notifier);return n&&!s.seenValue?(s.add(n),t.subscribe(s)):s}}class y extends u.a{constructor(e){super(e),this.seenValue=!1}notifyNext(e,t,s,n,o){this.seenValue=!0,this.complete()}notifyComplete(){}}const m=["wrapper"],p=["content"],d=["*"];let v=(()=>{class e{constructor(e,t){this.element=e,this.renderer=t,this.ngUnsubscribe=new i.a,this.styleOnClick=!1,this.styleOnHover=!1,this.styleClassName="tab-focus-style",this.activeClassName="tab-focus-active",this.focused=!1,this.paintedBecauseHover=!1}ngAfterViewInit(){this.refresh()}ngOnChanges(e){const t=t=>e.hasOwnProperty(t)&&!e[t].isFirstChange;(t("styleOnClick")||t("styleOnHover"))&&this.refresh()}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}refresh(){this.ngUnsubscribe.next(),this.obsUntilDestroy(b(this.element.nativeElement,"focus")).subscribe(()=>this.focus()),this.obsUntilDestroy(b(this.wrapper.nativeElement,"focus")).subscribe(()=>this.onFocus()),this.obsUntilDestroy(b(this.wrapper.nativeElement,"blur")).subscribe(()=>this.onBlur()),this.styleOnClick&&this.obsUntilDestroy(b(this.content.nativeElement,"focus")).subscribe(()=>this.focus()),this.styleOnHover&&(this.obsUntilDestroy(b(this.content.nativeElement,"mouseenter")).subscribe(()=>this.setStyle(!0)),this.obsUntilDestroy(b(this.content.nativeElement,"mouseleave")).subscribe(()=>this.removeStyle(!0)))}focus(){this.wrapper.nativeElement.focus()}blur(){this.wrapper.nativeElement.blur()}onFocus(){this.focused=!0,this.setStyle()}onBlur(){this.focused=!1,this.removeStyle()}obsUntilDestroy(e){return e.pipe((t=this.ngUnsubscribe,e=>e.lift(new f(t))));var t}setStyle(e=!1){this.paintedBecauseHover=!this.focused&&e,this.renderer.addClass(this.content.nativeElement,this.styleClassName),this.renderer.addClass(this.element.nativeElement,this.activeClassName)}removeStyle(e=!1){e&&!this.paintedBecauseHover||(this.renderer.removeClass(this.content.nativeElement,this.styleClassName),this.renderer.removeClass(this.element.nativeElement,this.activeClassName))}}return e.\u0275fac=function(t){return new(t||e)(n.Hb(n.l),n.Hb(n.D))},e.\u0275cmp=n.Bb({type:e,selectors:[["ngx-tab-focus"]],viewQuery:function(e,t){var s;1&e&&(n.jc(m,!0),n.jc(p,!0)),2&e&&(n.ac(s=n.Ub())&&(t.wrapper=s.first),n.ac(s=n.Ub())&&(t.content=s.first))},inputs:{styleOnClick:"styleOnClick",styleOnHover:"styleOnHover",styleClassName:"styleClassName",activeClassName:"activeClassName"},features:[n.wb],ngContentSelectors:d,decls:5,vars:4,consts:[["type","button",1,"tab-focus__wrapper"],["wrapper",""],["tabindex","-1",1,"tab-focus__content"],["content",""]],template:function(e,t){1&e&&(n.Xb(),n.Mb(0,"button",0,1),n.Mb(2,"div",2,3),n.Wb(4),n.Lb(),n.Lb()),2&e&&n.zb("style-on-mouse",t.styleOnClick)("style-on-hover",t.styleOnHover)},styles:["ngx-tab-focus{display:block}.tab-focus__wrapper{display:block;border:none;background:none;color:inherit;font-size:inherit;font-weight:inherit;text-align:inherit;font-family:inherit;border-radius:0;outline:none;margin:0;padding:0;cursor:pointer}.tab-focus__content{display:block}.tab-focus__content:focus,.tab-focus__wrapper:focus{outline:none}.tab-focus-style{color:red;background:#90ee90}"],encapsulation:2,changeDetection:0}),e})();var g=s("1VvW");const C=[{path:"",component:(()=>{class e{constructor(){this.customClassName="custom-tab-focus-style"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Bb({type:e,selectors:[["ngx-tab-focus-demo"]],decls:34,vars:12,consts:[[1,"tabs-list"],[1,"chip"],[1,"chip-inner"],[1,"chip","custom-focus",3,"styleClassName"],[1,"chip","custom-focus",3,"styleOnHover"],[1,"chip","custom-focus",3,"styleOnHover","styleClassName"],[1,"chip",3,"styleOnClick"],[1,"chip","custom-focus",3,"styleOnClick","styleClassName"],[1,"chip",3,"styleOnClick","styleOnHover"],[1,"chip","custom-focus",3,"styleOnClick","styleOnHover","styleClassName"]],template:function(e,t){1&e&&(n.Mb(0,"h2"),n.hc(1," Only with Keyboard "),n.Lb(),n.Mb(2,"h3"),n.hc(3," Mouse click doesn't trigger style "),n.Lb(),n.Mb(4,"div",0),n.Mb(5,"ngx-tab-focus",1),n.Mb(6,"div",2),n.hc(7," basic "),n.Lb(),n.Lb(),n.Mb(8,"ngx-tab-focus",3),n.Mb(9,"div",2),n.hc(10," custom style "),n.Lb(),n.Lb(),n.Mb(11,"ngx-tab-focus",4),n.Mb(12,"div",2),n.hc(13," show style when hover "),n.Lb(),n.Lb(),n.Mb(14,"ngx-tab-focus",5),n.Mb(15,"div",2),n.hc(16," show custom style when hover "),n.Lb(),n.Lb(),n.Lb(),n.Mb(17,"h2"),n.hc(18," Plus mouse click "),n.Lb(),n.Mb(19,"h3"),n.hc(20," Mouse clicks also triggers the style "),n.Lb(),n.Mb(21,"div",0),n.Mb(22,"ngx-tab-focus",6),n.Mb(23,"div",2),n.hc(24," basic "),n.Lb(),n.Lb(),n.Mb(25,"ngx-tab-focus",7),n.Mb(26,"div",2),n.hc(27," Custom style "),n.Lb(),n.Lb(),n.Mb(28,"ngx-tab-focus",8),n.Mb(29,"div",2),n.hc(30," show style when hover "),n.Lb(),n.Lb(),n.Mb(31,"ngx-tab-focus",9),n.Mb(32,"div",2),n.hc(33," show custom style when hover "),n.Lb(),n.Lb(),n.Lb()),2&e&&(n.xb(8),n.Yb("styleClassName",t.customClassName),n.xb(3),n.Yb("styleOnHover",!0),n.xb(3),n.Yb("styleOnHover",!0)("styleClassName",t.customClassName),n.xb(8),n.Yb("styleOnClick",!0),n.xb(3),n.Yb("styleOnClick",!0)("styleClassName",t.customClassName),n.xb(3),n.Yb("styleOnClick",!0)("styleOnHover",!0),n.xb(3),n.Yb("styleOnClick",!0)("styleOnHover",!0)("styleClassName",t.customClassName))},directives:[v],styles:["[_nghost-%COMP%]{width:100%;padding:2rem;box-sizing:border-box}.chip[_ngcontent-%COMP%], [_nghost-%COMP%]{display:block}.chip[_ngcontent-%COMP%]{margin:1rem 0}.chip[_ngcontent-%COMP%]:first-of-type{margin-top:0}.chip[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}.chip-inner[_ngcontent-%COMP%]{height:100%;height:2rem;padding:0 1rem;box-sizing:border-box;border-radius:1rem;background:#add8e6;display:flex;align-items:center;justify-content:flex-start}"]}),e})()}];let O=(()=>{class e{}return e.\u0275mod=n.Fb({type:e}),e.\u0275inj=n.Eb({factory:function(t){return new(t||e)},imports:[[g.e.forChild(C)],g.e]}),e})(),w=(()=>{class e{}return e.\u0275mod=n.Fb({type:e}),e.\u0275inj=n.Eb({factory:function(t){return new(t||e)},imports:[[O,o]]}),e})()}}]);
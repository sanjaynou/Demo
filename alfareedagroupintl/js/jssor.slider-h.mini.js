(function(k,g,c,i,d,l,j){/*! Jssor */
new(function(){});var e={be:function(a){return-c.cos(a*c.PI)/2+.5},jc:function(a){return a},ce:function(a){return-a*(a-2)}},f={he:e.jc};var b=new function(){var f=this,G=1,db=2,hb=3,gb=4,lb=5,H,r=0,h=0,s=0,W=0,z=0,J=navigator,pb=J.appName,o=J.userAgent,p=parseFloat;function zb(){if(!H){H={Vd:"ontouchstart"in k||"createTouch"in g};var a;if(J.pointerEnabled||(a=J.msPointerEnabled))H.Tc=a?"msTouchAction":"touchAction"}return H}function v(i){if(!r){r=-1;if(pb=="Microsoft Internet Explorer"&&!!k.attachEvent&&!!k.ActiveXObject){var e=o.indexOf("MSIE");r=G;s=p(o.substring(e+5,o.indexOf(";",e)));/*@cc_on W=@_jscript_version@*/;h=g.documentMode||s}else if(pb=="Netscape"&&!!k.addEventListener){var d=o.indexOf("Firefox"),b=o.indexOf("Safari"),f=o.indexOf("Chrome"),c=o.indexOf("AppleWebKit");if(d>=0){r=db;h=p(o.substring(d+8))}else if(b>=0){var j=o.substring(0,b).lastIndexOf("/");r=f>=0?gb:hb;h=p(o.substring(j+1,b))}else{var a=/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(o);if(a){r=G;h=s=p(a[1])}}if(c>=0)z=p(o.substring(c+12))}else{var a=/(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(o);if(a){r=lb;h=p(a[2])}}}return i==r}function q(){return v(G)}function R(){return q()&&(h<6||g.compatMode=="BackCompat")}function fb(){return v(hb)}function kb(){return v(lb)}function wb(){return fb()&&z>534&&z<535}function K(){v();return z>537||h>42||r==G&&h>=11}function P(){return q()&&h<9}function xb(a){var b,c;return function(f){if(!b){b=d;var e=a.substr(0,1).toUpperCase()+a.substr(1);n([a].concat(["WebKit","ms","Moz","O","webkit"]),function(g,d){var b=a;if(d)b=g+e;if(f.style[b]!=j)return c=b})}return c}}function vb(b){var a;return function(c){a=a||xb(b)(c)||b;return a}}var L=vb("transform");function ob(a){return{}.toString.call(a)}var F;function Hb(){if(!F){F={};n(["Boolean","Number","String","Function","Array","Date","RegExp","Object"],function(a){F["[object "+a+"]"]=a.toLowerCase()})}return F}function n(b,d){var a,c;if(ob(b)=="[object Array]"){for(a=0;a<b.length;a++)if(c=d(b[a],a,b))return c}else for(a in b)if(c=d(b[a],a,b))return c}function C(a){return a==i?String(a):Hb()[ob(a)]||"object"}function A(a){try{return C(a)=="object"&&!a.nodeType&&a!=a.window&&(!a.constructor||{}.hasOwnProperty.call(a.constructor.prototype,"isPrototypeOf"))}catch(b){}}function u(a,b){return{x:a,y:b}}function sb(b,a){setTimeout(b,a||0)}function I(b,d,c){var a=!b||b=="inherit"?"":b;n(d,function(c){var b=c.exec(a);if(b){var d=a.substr(0,b.index),e=a.substr(b.index+b[0].length+1,a.length-1);a=d+e}});a=c+(!a.indexOf(" ")?"":" ")+a;return a}function ub(b,a){if(h<9)b.style.filter=a}f.Wd=zb;f.Lc=q;f.pe=fb;f.Ce=K;f.Yc=P;xb("transform");f.Kc=function(){return h};f.qc=sb;function Z(a){a.constructor===Z.caller&&a.pc&&a.pc.apply(a,Z.caller.arguments)}f.pc=Z;f.Lb=function(a){if(f.we(a))a=g.getElementById(a);return a};function t(a){return a||k.event}f.mc=t;f.Ob=function(b){b=t(b);var a=b.target||b.srcElement||g;if(a.nodeType==3)a=f.kc(a);return a};f.ic=function(a){a=t(a);return{x:a.pageX||a.clientX||0,y:a.pageY||a.clientY||0}};function D(c,d,a){if(a!==j)c.style[d]=a==j?"":a;else{var b=c.currentStyle||c.style;a=b[d];if(a==""&&k.getComputedStyle){b=c.ownerDocument.defaultView.getComputedStyle(c,i);b&&(a=b.getPropertyValue(d)||b[d])}return a}}function bb(b,c,a,d){if(a!==j){if(a==i)a="";else d&&(a+="px");D(b,c,a)}else return p(D(b,c))}function m(c,a){var d=a?bb:D,b;if(a&4)b=vb(c);return function(e,f){return d(e,b?b(e):c,f,a&2)}}function Eb(b){if(q()&&s<9){var a=/opacity=([^)]*)/.exec(b.style.filter||"");return a?p(a[1])/100:1}else return p(b.style.opacity||"1")}function Gb(b,a,f){if(q()&&s<9){var h=b.style.filter||"",i=new RegExp(/[\s]*alpha\([^\)]*\)/g),e=c.round(100*a),d="";if(e<100||f)d="alpha(opacity="+e+") ";var g=I(h,[i],d);ub(b,g)}else b.style.opacity=a==1?"":c.round(a*100)/100}var M={Q:["rotate"],I:["rotateX"],G:["rotateY"],pb:["skewX"],qb:["skewY"]};if(!K())M=B(M,{l:["scaleX",2],k:["scaleY",2],F:["translateZ",1]});function N(d,a){var c="";if(a){if(q()&&h&&h<10){delete a.I;delete a.G;delete a.F}b.e(a,function(d,b){var a=M[b];if(a){var e=a[1]||0;if(O[b]!=d)c+=" "+a[0]+"("+d+(["deg","px",""])[e]+")"}});if(K()){if(a.R||a.N||a.F)c+=" translate3d("+(a.R||0)+"px,"+(a.N||0)+"px,"+(a.F||0)+"px)";if(a.l==j)a.l=1;if(a.k==j)a.k=1;if(a.l!=1||a.k!=1)c+=" scale3d("+a.l+", "+a.k+", 1)"}}d.style[L(d)]=c}f.Gc=m("transformOrigin",4);f.te=m("backfaceVisibility",4);f.ue=m("transformStyle",4);f.ve=m("perspective",6);f.De=m("perspectiveOrigin",4);f.re=function(a,b){if(q()&&s<9||s<10&&R())a.style.zoom=b==1?"":b;else{var c=L(a),f="scale("+b+")",e=a.style[c],g=new RegExp(/[\s]*scale\(.*?\)/g),d=I(e,[g],f);a.style[c]=d}};f.Ac=function(b,a){return function(c){c=t(c);var e=c.type,d=c.relatedTarget||(e=="mouseout"?c.toElement:c.fromElement);(!d||d!==a&&!f.xe(a,d))&&b(c)}};f.c=function(a,d,b,c){a=f.Lb(a);if(a.addEventListener){d=="mousewheel"&&a.addEventListener("DOMMouseScroll",b,c);a.addEventListener(d,b,c)}else if(a.attachEvent){a.attachEvent("on"+d,b);c&&a.setCapture&&a.setCapture()}};f.kb=function(a,c,d,b){a=f.Lb(a);if(a.removeEventListener){c=="mousewheel"&&a.removeEventListener("DOMMouseScroll",d,b);a.removeEventListener(c,d,b)}else if(a.detachEvent){a.detachEvent("on"+c,d);b&&a.releaseCapture&&a.releaseCapture()}};f.Sb=function(a){a=t(a);a.preventDefault&&a.preventDefault();a.cancel=d;a.returnValue=l};f.se=function(a){a=t(a);a.stopPropagation&&a.stopPropagation();a.cancelBubble=d};f.ub=function(d,c){var a=[].slice.call(arguments,2),b=function(){var b=a.concat([].slice.call(arguments,0));return c.apply(d,b)};return b};f.ye=function(a,b){if(b==j)return a.textContent||a.innerText;var c=g.createTextNode(b);f.Ub(a);a.appendChild(c)};f.tb=function(d,c){for(var b=[],a=d.firstChild;a;a=a.nextSibling)(c||a.nodeType==1)&&b.push(a);return b};function nb(a,c,e,b){b=b||"u";for(a=a?a.firstChild:i;a;a=a.nextSibling)if(a.nodeType==1){if(V(a,b)==c)return a;if(!e){var d=nb(a,c,e,b);if(d)return d}}}f.r=nb;function T(a,d,f,b){b=b||"u";var c=[];for(a=a?a.firstChild:i;a;a=a.nextSibling)if(a.nodeType==1){V(a,b)==d&&c.push(a);if(!f){var e=T(a,d,f,b);if(e.length)c=c.concat(e)}}return c}f.ld=T;function ib(a,c,d){for(a=a?a.firstChild:i;a;a=a.nextSibling)if(a.nodeType==1){if(a.tagName==c)return a;if(!d){var b=ib(a,c,d);if(b)return b}}}f.kd=ib;function B(){var e=arguments,d,c,b,a,g=1&e[0],f=1+g;d=e[f-1]||{};for(;f<e.length;f++)if(c=e[f])for(b in c){a=c[b];if(a!==j){a=c[b];var h=d[b];d[b]=g&&(A(h)||A(a))?B(g,{},h,a):a}}return d}f.sb=B;f.Jc=function(a){return C(a)=="function"};f.we=function(a){return C(a)=="string"};f.ed=function(a){return!isNaN(p(a))&&isFinite(a)};f.e=n;function S(a){return g.createElement(a)}f.W=function(){return S("DIV")};f.Dc=function(){};function X(b,c,a){if(a==j)return b.getAttribute(c);b.setAttribute(c,a)}function V(a,b){return X(a,b)||X(a,"data-"+b)}f.rb=X;f.f=V;function x(b,a){if(a==j)return b.className;b.className=a}f.hc=x;f.kc=function(a){return a.parentNode};f.z=function(a){f.J(a,"none")};f.lb=function(a,b){f.J(a,b?"none":"")};f.Ad=function(b,a){b.removeAttribute(a)};f.zd=function(){return q()&&h<10};f.yd=function(d,a){if(a)d.style.clip="rect("+c.round(a.j)+"px "+c.round(a.o)+"px "+c.round(a.p)+"px "+c.round(a.i)+"px)";else if(a!==j){var g=d.style.cssText,f=[new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),new RegExp(/[\s]*cliptop: .*?[;]?/i),new RegExp(/[\s]*clipright: .*?[;]?/i),new RegExp(/[\s]*clipbottom: .*?[;]?/i),new RegExp(/[\s]*clipleft: .*?[;]?/i)],e=I(g,f,"");b.mb(d,e)}};f.K=function(){return+new Date};f.D=function(b,a){b.appendChild(a)};f.Hb=function(b,a,c){(c||a.parentNode).insertBefore(b,a)};f.Pc=function(b,a){a=a||b.parentNode;a&&a.removeChild(b)};f.pd=function(a,b){n(a,function(a){f.Pc(a,b)})};f.Ub=function(a){f.pd(f.tb(a,d),a)};f.Bd=function(a,b){var c=f.kc(a);b&1&&f.C(a,(f.m(c)-f.m(a))/2);b&2&&f.B(a,(f.n(c)-f.n(a))/2)};f.hd=function(b,a){return parseInt(b,a||10)};f.jd=p;f.xe=function(b,a){var c=g.body;while(a&&b!==a&&c!==a)try{a=a.parentNode}catch(d){return l}return b===a};function Y(d,c,b){var a=d.cloneNode(!c);!b&&f.Ad(a,"id");return a}f.bb=Y;f.ab=function(e,g){var a=new Image;function b(e,d){f.kb(a,"load",b);f.kb(a,"abort",c);f.kb(a,"error",c);g&&g(a,d)}function c(a){b(a,d)}if(kb()&&h<11.6||!e)b(!e);else{f.c(a,"load",b);f.c(a,"abort",c);f.c(a,"error",c);a.src=e}};f.gd=function(d,a,e){var c=d.length+1;function b(b){c--;if(a&&b&&b.src==a.src)a=b;!c&&e&&e(a)}n(d,function(a){f.ab(a.src,b)});b()};f.O=D;f.vb=m("overflow");f.B=m("top",2);f.C=m("left",2);f.m=m("width",2);f.n=m("height",2);f.xd=m("marginLeft",2);f.Dd=m("marginTop",2);f.s=m("position");f.J=m("display");f.q=m("zIndex",1);f.Yb=function(b,a,c){if(a!=j)Gb(b,a,c);else return Eb(b)};f.mb=function(a,b){if(b!=j)a.style.cssText=b;else return a.style.cssText};var U={fb:f.Yb,j:f.B,i:f.C,zb:f.m,Bb:f.n,X:f.s,Oe:f.J,Y:f.q};function w(g,l){var e=P(),b=K(),d=wb(),h=L(g);function k(b,d,a){var e=b.T(u(-d/2,-a/2)),f=b.T(u(d/2,-a/2)),g=b.T(u(d/2,a/2)),h=b.T(u(-d/2,a/2));b.T(u(300,300));return u(c.min(e.x,f.x,g.x,h.x)+d/2,c.min(e.y,f.y,g.y,h.y)+a/2)}function a(d,a){a=a||{};var g=a.F||0,l=(a.I||0)%360,m=(a.G||0)%360,o=(a.Q||0)%360,p=a.Ne;if(e){g=0;l=0;m=0;p=0}var c=new Db(a.R,a.N,g);c.I(l);c.G(m);c.Cd(o);c.id(a.pb,a.qb);c.nd(a.l,a.k,p);if(b){c.cb(a.u,a.v);d.style[h]=c.qd()}else if(!W||W<9){var i="";if(o||a.l!=j&&a.l!=1||a.k!=j&&a.k!=1){var n=k(c,a.L,a.M);f.Dd(d,n.y);f.xd(d,n.x);i=c.wd()}var r=d.style.filter,s=new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),q=I(r,[s],i);ub(d,q)}}w=function(e,c){c=c||{};var h=c.u,k=c.v,g;n(U,function(a,b){g=c[b];g!==j&&a(e,g)});f.yd(e,c.a);if(!b){h!=j&&f.C(e,c.ad+h);k!=j&&f.B(e,c.Oc+k)}if(c.vd)if(d)sb(f.ub(i,N,e,c));else a(e,c)};f.Ab=N;if(d)f.Ab=w;if(e)f.Ab=a;else if(!b)a=N;f.H=w;w(g,l)}f.Ab=w;f.H=w;function Db(k,l,p){var d=this,b=[1,0,0,0,0,1,0,0,0,0,1,0,k||0,l||0,p||0,1],h=c.sin,g=c.cos,m=c.tan;function f(a){return a*c.PI/180}function o(a,b){return{x:a,y:b}}function n(c,e,l,m,o,r,t,u,w,z,A,C,E,b,f,k,a,g,i,n,p,q,s,v,x,y,B,D,F,d,h,j){return[c*a+e*p+l*x+m*F,c*g+e*q+l*y+m*d,c*i+e*s+l*B+m*h,c*n+e*v+l*D+m*j,o*a+r*p+t*x+u*F,o*g+r*q+t*y+u*d,o*i+r*s+t*B+u*h,o*n+r*v+t*D+u*j,w*a+z*p+A*x+C*F,w*g+z*q+A*y+C*d,w*i+z*s+A*B+C*h,w*n+z*v+A*D+C*j,E*a+b*p+f*x+k*F,E*g+b*q+f*y+k*d,E*i+b*s+f*B+k*h,E*n+b*v+f*D+k*j]}function e(c,a){return n.apply(i,(a||b).concat(c))}d.nd=function(a,c,d){if(a==j)a=1;if(c==j)c=1;if(d==j)d=1;if(a!=1||c!=1||d!=1)b=e([a,0,0,0,0,c,0,0,0,0,d,0,0,0,0,1])};d.cb=function(a,c,d){b[12]+=a||0;b[13]+=c||0;b[14]+=d||0};d.I=function(c){if(c){a=f(c);var d=g(a),i=h(a);b=e([1,0,0,0,0,d,i,0,0,-i,d,0,0,0,0,1])}};d.G=function(c){if(c){a=f(c);var d=g(a),i=h(a);b=e([d,0,-i,0,0,1,0,0,i,0,d,0,0,0,0,1])}};d.Cd=function(c){if(c){a=f(c);var d=g(a),i=h(a);b=e([d,i,0,0,-i,d,0,0,0,0,1,0,0,0,0,1])}};d.id=function(a,c){if(a||c){k=f(a);l=f(c);b=e([1,m(l),0,0,m(k),1,0,0,0,0,1,0,0,0,0,1])}};d.T=function(c){var a=e(b,[1,0,0,0,0,1,0,0,0,0,1,0,c.x,c.y,0,1]);return o(a[12],a[13])};d.qd=function(){return"matrix3d("+b.join(",")+")"};d.wd=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+b[0]+", M12="+b[4]+", M21="+b[1]+", M22="+b[5]+", SizingMethod='auto expand')"}}new function(){var a=this;function b(d,g){for(var j=d[0].length,i=d.length,h=g[0].length,f=[],c=0;c<i;c++)for(var k=f[c]=[],b=0;b<h;b++){for(var e=0,a=0;a<j;a++)e+=d[c][a]*g[a][b];k[b]=e}return f}a.l=function(b,c){return a.Cc(b,c,0)};a.k=function(b,c){return a.Cc(b,0,c)};a.Cc=function(a,c,d){return b(a,[[c,0],[0,d]])};a.T=function(d,c){var a=b(d,[[c.x],[c.y]]);return u(a[0][0],a[1][0])}};var O={ad:0,Oc:0,u:0,v:0,U:1,l:1,k:1,Q:0,I:0,G:0,R:0,N:0,F:0,pb:0,qb:0};f.dd=function(a){var c=a||{};if(a)if(b.Jc(a))c={Wb:c};else if(b.Jc(a.a))c.a={Wb:a.a};return c};f.fd=function(l,m,w,n,y,z,o){var a=m;if(l){a={};for(var g in m){var A=z[g]||1,v=y[g]||[0,1],f=(w-v[0])/v[1];f=c.min(c.max(f,0),1);f=f*A;var u=c.floor(f);if(f!=u)f-=u;var h=n.Wb||e.be,k,B=l[g],q=m[g];if(b.ed(q)){h=n[g]||h;var x=h(f);k=B+q*x}else{k=b.sb({yb:{}},l[g]);b.e(q.yb||q,function(d,a){if(n.a)h=n.a[a]||n.a.Wb||h;var c=h(f),b=d*c;k.yb[a]=b;k[a]+=b})}a[g]=k}var t=b.e(m,function(b,a){return O[a]!=j});t&&b.e(O,function(c,b){if(a[b]==j&&l[b]!==j)a[b]=l[b]});if(t){if(a.U)a.l=a.k=a.U;a.L=o.L;a.M=o.M;a.vd=d}}if(m.a&&o.cb){var p=a.a.yb,s=(p.j||0)+(p.p||0),r=(p.i||0)+(p.o||0);a.i=(a.i||0)+r;a.j=(a.j||0)+s;a.a.i-=r;a.a.o-=r;a.a.j-=s;a.a.p-=s}if(a.a&&b.zd()&&!a.a.j&&!a.a.i&&a.a.o==o.L&&a.a.p==o.M)a.a=i;return a}};function n(){var a=this,d=[];function h(a,b){d.push({Fb:a,Ib:b})}function g(a,c){b.e(d,function(b,e){b.Fb==a&&b.Ib===c&&d.splice(e,1)})}a.hb=a.addEventListener=h;a.removeEventListener=g;a.g=function(a){var c=[].slice.call(arguments,1);b.e(d,function(b){b.Fb==a&&b.Ib.apply(k,c)})}}var m=function(z,C,h,J,M,L){z=z||0;var a=this,q,n,o,u,A=0,G,H,F,B,y=0,g=0,m=0,D,j,f,e,p,w=[],x;function O(a){f+=a;e+=a;j+=a;g+=a;m+=a;y+=a}function t(o){var i=o;if(p&&(i>=e||i<=f))i=((i-f)%p+p)%p+f;if(!D||u||g!=i){var k=c.min(i,e);k=c.max(k,f);if(!D||u||k!=m){if(L){var l=(k-j)/(C||1);if(h.od)l=1-l;var n=b.fd(M,L,l,G,F,H,h);if(x)b.e(n,function(b,a){x[a]&&x[a](J,b)});else b.H(J,n)}a.Nb(m-j,k-j);m=k;b.e(w,function(b,c){var a=o<g?w[w.length-c-1]:b;a.E(m-y)});var r=g,q=m;g=i;D=d;a.ob(r,q)}}}function E(a,b,d){b&&a.Pb(e);if(!d){f=c.min(f,a.fc()+y);e=c.max(e,a.Rb()+y)}w.push(a)}var r=k.requestAnimationFrame||k.webkitRequestAnimationFrame||k.mozRequestAnimationFrame||k.msRequestAnimationFrame;if(b.pe()&&b.Kc()<7)r=i;r=r||function(a){b.qc(a,h.Bc)};function I(){if(q){var d=b.K(),e=c.min(d-A,h.tc),a=g+e*o;A=d;if(a*o>=n*o)a=n;t(a);if(!u&&a*o>=n*o)K(B);else r(I)}}function s(h,i,j){if(!q){q=d;u=j;B=i;h=c.max(h,f);h=c.min(h,e);n=h;o=n<g?-1:1;a.Ic();A=b.K();r(I)}}function K(b){if(q){u=q=B=l;a.Hc();b&&b()}}a.Fc=function(a,b,c){s(a?g+a:e,b,c)};a.zc=s;a.S=K;a.qe=function(a){s(a)};a.A=function(){return g};a.wc=function(){return n};a.gb=function(){return m};a.E=t;a.cb=function(a){t(g+a)};a.Rc=function(){return q};a.md=function(a){p=a};a.Pb=O;a.Ec=function(a,b){E(a,0,b)};a.Qb=function(a){E(a,1)};a.fc=function(){return f};a.Rb=function(){return e};a.ob=a.Ic=a.Hc=a.Nb=b.Dc;a.ac=b.K();h=b.sb({Bc:16,tc:50},h);p=h.sc;x=h.ud;f=j=z;e=z+C;H=h.td||{};F=h.sd||{};G=b.dd(h.Z)};new(function(){});var h=function(p,fc){var f=this;function Bc(){var a=this;m.call(a,-1e8,2e8);a.Ud=function(){var b=a.gb(),d=c.floor(b),f=t(d),e=b-c.floor(b);return{P:f,Td:d,X:e}};a.ob=function(b,a){var e=c.floor(a);if(e!=a&&a>b)e++;Ub(e,d);f.g(h.Sd,t(a),t(b),a,b)}}function Ac(){var a=this;m.call(a,0,0,{sc:r});b.e(C,function(b){D&1&&b.md(r);a.Qb(b);b.Pb(ib/bc)})}function zc(){var a=this,b=Tb.V;m.call(a,-1,2,{Z:e.jc,ud:{X:Zb},sc:r},b,{X:1},{X:-2});a.Gb=b}function nc(o,n){var b=this,e,g,j,k,c;m.call(b,-1e8,2e8,{tc:100});b.Ic=function(){M=d;R=i;f.g(h.Rd,t(w.A()),w.A())};b.Hc=function(){M=l;k=l;var a=w.Ud();f.g(h.Qd,t(w.A()),w.A());!a.X&&Dc(a.Td,s)};b.ob=function(h,f){var b;if(k)b=c;else{b=g;if(j){var d=f/j;b=a.Mc(d)*(g-e)+e}}w.E(b)};b.nb=function(a,d,c,f){e=a;g=d;j=c;w.E(a);b.E(0);b.zc(c,f)};b.Pd=function(a){k=d;c=a;b.Fc(a,i,d)};b.Od=function(a){c=a};w=new Bc;w.Ec(o);w.Ec(n)}function pc(){var c=this,a=Xb();b.q(a,0);b.O(a,"pointerEvents","none");c.V=a;c.wb=function(){b.z(a);b.Ub(a)}}function xc(o,g){var e=this,q,L,v,k,y=[],x,B,W,G,Q,F,j,w,p;m.call(e,-u,u+1,{});function E(a){q&&q.Sc();T(o,a,0);F=d;q=new I.eb(o,I,b.jd(b.f(o,"idle"))||lc);q.E(0)}function Z(){q.ac<I.ac&&E()}function M(p,r,o){if(!G){G=d;if(k&&o){var i=o.width,c=o.height,n=i,m=c;if(i&&c&&a.db){if(a.db&3&&(!(a.db&4)||i>K||c>J)){var j=l,q=K/J*c/i;if(a.db&1)j=q>1;else if(a.db&2)j=q<1;n=j?i*J/c:K;m=j?J:c*K/i}b.m(k,n);b.n(k,m);b.B(k,(J-m)/2);b.C(k,(K-n)/2)}b.s(k,"absolute");f.g(h.Nd,g)}}b.z(r);p&&p(e)}function Y(b,c,d,f){if(f==R&&s==g&&N)if(!Cc){var a=t(b);A.Be(a,g,c,e,d);c.Md();U.Pb(a-U.fc()-1);U.E(a);z.nb(b,b,0)}}function cb(b){if(b==R&&s==g){if(!j){var a=i;if(A)if(A.P==g)a=A.Yd();else A.wb();Z();j=new vc(o,g,a,q);j.Qc(p)}!j.Rc()&&j.Mb()}}function S(d,f,l){if(d==g){if(d!=f)C[f]&&C[f].Ld();else!l&&j&&j.Kd();p&&p.uc();var m=R=b.K();e.ab(b.ub(i,cb,m))}else{var k=c.min(g,d),h=c.max(g,d),o=c.min(h-k,k+r-h),n=u+a.Jd-1;(!Q||o<=n)&&e.ab()}}function db(){if(s==g&&j){j.S();p&&p.Id();p&&p.Hd();j.bd()}}function eb(){s==g&&j&&j.S()}function ab(a){!P&&f.g(h.Fd,g,a)}function O(){p=w.pInstance;j&&j.Qc(p)}e.ab=function(c,a){a=a||v;if(y.length&&!G){b.lb(a);if(!W){W=d;f.g(h.Xd,g);b.e(y,function(a){if(!b.rb(a,"src")){a.src=b.f(a,"src2");b.J(a,a["display-origin"])}})}b.gd(y,k,b.ub(i,M,c,a))}else M(c,a)};e.Zd=function(){var h=g;if(a.Zb<0)h-=r;var d=h+a.Zb*tc;if(D&2)d=t(d);if(!(D&1))d=c.max(0,c.min(d,r-u));if(d!=g){if(A){var e=A.Ae(r);if(e){var j=R=b.K(),f=C[t(d)];return f.ab(b.ub(i,Y,d,f,e,j),v)}}bb(d)}};e.dc=function(){S(g,g,d)};e.Ld=function(){p&&p.Id();p&&p.Hd();e.Nc();j&&j.oe();j=i;E()};e.Md=function(){b.z(o)};e.Nc=function(){b.lb(o)};e.Ed=function(){p&&p.uc()};function T(a,c,e){if(b.rb(a,"jssor-slider"))return;if(!F){if(a.tagName=="IMG"){y.push(a);if(!b.rb(a,"src")){Q=d;a["display-origin"]=b.J(a);b.z(a)}}b.Yc()&&b.q(a,(b.q(a)||0)+1)}var f=b.tb(a);b.e(f,function(f){var h=f.tagName,i=b.f(f,"u");if(i=="player"&&!w){w=f;if(w.pInstance)O();else b.c(w,"dataavailable",O)}if(i=="caption"){if(c){b.Gc(f,b.f(f,"to"));b.te(f,b.f(f,"bf"));b.f(f,"3d")&&b.ue(f,"preserve-3d")}else if(!b.Lc()){var g=b.bb(f,l,d);b.Hb(g,f,a);b.Pc(f,a);f=g;c=d}}else if(!F&&!e&&!k){if(h=="A"){if(b.f(f,"u")=="image")k=b.kd(f,"IMG");else k=b.r(f,"image",d);if(k){x=f;b.J(x,"block");b.H(x,V);B=b.bb(x,d);b.s(x,"relative");b.Yb(B,0);b.O(B,"backgroundColor","#000")}}else if(h=="IMG"&&b.f(f,"u")=="image")k=f;if(k){k.border=0;b.H(k,V)}}T(f,c,e+1)})}e.Nb=function(c,b){var a=u-b;Zb(L,a)};e.P=g;n.call(e);b.ve(o,b.f(o,"p"));b.De(o,b.f(o,"po"));var H=b.r(o,"thumb",d);if(H){b.bb(H);b.z(H)}b.lb(o);v=b.bb(fb);b.q(v,1e3);b.c(o,"click",ab);E(d);e.ze=k;e.Uc=B;e.Gb=L=o;b.D(L,v);f.hb(203,S);f.hb(28,eb);f.hb(24,db)}function vc(y,g,p,q){var a=this,n=0,u=0,i,j,e,c,k,t,r,o=C[g];m.call(a,0,0);function v(){b.Ub(L);cc&&k&&o.Uc&&b.D(L,o.Uc);b.lb(L,!k&&o.ze)}function w(){a.Mb()}function x(b){r=b;a.S();a.Mb()}a.Mb=function(){var b=a.gb();if(!B&&!M&&!r&&s==g){if(!b){if(i&&!k){k=d;a.bd(d);f.g(h.ae,g,n,u,i,c)}v()}var l,p=h.Vc;if(b!=c)if(b==e)l=c;else if(b==j)l=e;else if(!b)l=j;else l=a.wc();f.g(p,g,b,n,j,e,c);var m=N&&(!E||F);if(b==c)(e!=c&&!(E&12)||m)&&o.Zd();else(m||b!=e)&&a.zc(l,w)}};a.Kd=function(){e==c&&e==a.gb()&&a.E(j)};a.oe=function(){A&&A.P==g&&A.wb();var b=a.gb();b<c&&f.g(h.Vc,g,-b-1,n,j,e,c)};a.bd=function(a){p&&b.vb(jb,a&&p.rc.Me?"":"hidden")};a.Nb=function(b,a){if(k&&a>=i){k=l;v();o.Nc();A.wb();f.g(h.ne,g,n,u,i,c)}f.g(h.me,g,a,n,j,e,c)};a.Qc=function(a){if(a&&!t){t=a;a.hb($JssorPlayer$.rd,x)}};p&&a.Qb(p);i=a.Rb();a.Qb(q);j=i+q.nc;e=i+q.lc;c=a.Rb()}function Kb(a,c,d){b.C(a,c);b.B(a,d)}function Zb(c,b){var a=x>0?x:eb,d=zb*b*(a&1),e=Ab*b*(a>>1&1);Kb(c,d,e)}function Pb(){pb=M;Ib=z.wc();G=w.A()}function gc(){Pb();if(B||!F&&E&12){z.S();f.g(h.le)}}function ec(f){if(!B&&(F||!(E&12))&&!z.Rc()){var d=w.A(),b=c.ceil(G);if(f&&c.abs(H)>=a.ec){b=c.ceil(d);b+=hb}if(!(D&1))b=c.min(r-u,c.max(b,0));var e=c.abs(b-d);e=1-c.pow(1-e,5);if(!P&&pb)z.qe(Ib);else if(d==b){sb.Ed();sb.dc()}else z.nb(d,b,e*Vb)}}function Hb(a){!b.f(b.Ob(a),"nodrag")&&b.Sb(a)}function rc(a){Yb(a,1)}function Yb(a,c){a=b.mc(a);var k=b.Ob(a);if(!O&&!b.f(k,"nodrag")&&sc()&&(!c||a.touches.length==1)){B=d;yb=l;R=i;b.c(g,c?"touchmove":"mousemove",Bb);b.K();P=0;gc();if(!pb)x=0;if(c){var j=a.touches[0];ub=j.clientX;vb=j.clientY}else{var e=b.ic(a);ub=e.x;vb=e.y}H=0;gb=0;hb=0;f.g(h.ke,t(G),G,a)}}function Bb(e){if(B){e=b.mc(e);var f;if(e.type!="mousemove"){var l=e.touches[0];f={x:l.clientX,y:l.clientY}}else f=b.ic(e);if(f){var j=f.x-ub,k=f.y-vb;if(c.floor(G)!=G)x=x||eb&O;if((j||k)&&!x){if(O==3)if(c.abs(k)>c.abs(j))x=2;else x=1;else x=O;if(mb&&x==1&&c.abs(k)-c.abs(j)>3)yb=d}if(x){var a=k,i=Ab;if(x==1){a=j;i=zb}if(!(D&1)){if(a>0){var g=i*s,h=a-g;if(h>0)a=g+c.sqrt(h)*5}if(a<0){var g=i*(r-u-s),h=-a-g;if(h>0)a=-g-c.sqrt(h)*5}}if(H-gb<-2)hb=0;else if(H-gb>2)hb=-1;gb=H;H=a;rb=G-H/i/(Y||1);if(H&&x&&!yb){b.Sb(e);if(!M)z.Pd(rb);else z.Od(rb)}}}}}function ab(){qc();if(B){B=l;b.K();b.kb(g,"mousemove",Bb);b.kb(g,"touchmove",Bb);P=H;z.S();var a=w.A();f.g(h.je,t(a),a,t(G),G);E&12&&Pb();ec(d)}}function jc(c){if(P){b.se(c);var a=b.Ob(c);while(a&&v!==a){a.tagName=="A"&&b.Sb(c);try{a=a.parentNode}catch(d){break}}}}function Jb(a){C[s];s=t(a);sb=C[s];Ub(a);return s}function Dc(a,b){x=0;Jb(a);f.g(h.ie,t(a),b)}function Ub(a,c){wb=a;b.e(S,function(b){b.bc(t(a),a,c)})}function sc(){var b=h.vc||0,a=X;if(mb)a&1&&(a&=1);h.vc|=a;return O=a&~b}function qc(){if(O){h.vc&=~X;O=0}}function Xb(){var a=b.W();b.H(a,V);b.s(a,"absolute");return a}function t(a){return(a%r+r)%r}function kc(b,d){if(d)if(!D){b=c.min(c.max(b+wb,0),r-u);d=l}else if(D&2){b=t(b+wb);d=l}bb(b,a.xb,d)}function xb(){b.e(S,function(a){a.Db(a.Cb.Le<=F)})}function hc(){if(!F){F=1;xb();if(!B){E&12&&ec();E&3&&C[s].dc()}}}function Ec(){if(F){F=0;xb();B||!(E&12)||gc()}}function ic(){V={zb:K,Bb:J,j:0,i:0};b.e(T,function(a){b.H(a,V);b.s(a,"absolute");b.vb(a,"hidden");b.z(a)});b.H(fb,V)}function ob(b,a){bb(b,a,d)}function bb(g,f,k){if(Rb&&(!B&&(F||!(E&12))||a.xc)){M=d;B=l;z.S();if(f==j)f=Vb;var e=Cb.gb(),b=g;if(k){b=e+g;if(g>0)b=c.ceil(b);else b=c.floor(b)}if(D&2)b=t(b);if(!(D&1))b=c.max(0,c.min(b,r-u));var i=(b-e)%r;b=e+i;var h=e==b?0:f*c.abs(i);h=c.min(h,f*u*1.5);z.nb(e,b,h||1)}}f.Fc=function(){if(!N){N=d;C[s]&&C[s].dc()}};function W(){return b.m(y||p)}function lb(){return b.n(y||p)}f.L=W;f.M=lb;function Eb(c,d){if(c==j)return b.m(p);if(!y){var a=b.W(g);b.hc(a,b.hc(p));b.mb(a,b.mb(p));b.J(a,"block");b.s(a,"relative");b.B(a,0);b.C(a,0);b.vb(a,"visible");y=b.W(g);b.s(y,"absolute");b.B(y,0);b.C(y,0);b.m(y,b.m(p));b.n(y,b.n(p));b.Gc(y,"0 0");b.D(y,a);var h=b.tb(p);b.D(p,y);b.O(p,"backgroundImage","");b.e(h,function(c){b.D(b.f(c,"noscale")?p:a,c);b.f(c,"autocenter")&&Mb.push(c)})}Y=c/(d?b.n:b.m)(y);b.re(y,Y);var f=d?Y*W():c,e=d?c:Y*lb();b.m(p,f);b.n(p,e);b.e(Mb,function(a){var c=b.hd(b.f(a,"autocenter"));b.Bd(a,c)})}n.call(f);f.V=p=b.Lb(p);var a=b.sb({db:0,Jd:1,Tb:1,Xb:0,Eb:l,yc:1,jb:d,xc:d,Zb:1,Zc:3e3,Jb:1,xb:500,Mc:e.ce,ec:20,Wc:0,ib:1,Xc:0,ge:1,cc:1,gc:1},fc);a.jb=a.jb&&b.Ce();if(a.oc!=j)a.Zc=a.oc;if(a.fe!=j)a.Xc=a.fe;var eb=a.cc&3,tc=(a.cc&4)/-4||1,kb=a.Ke,I=b.sb({eb:q,jb:a.jb},a.Fe);I.Vb=I.Vb||I.Ee;var Fb=a.Ge,Z=a.Je,db=a.Ie,Q=!a.ge,y,v=b.r(p,"slides",Q),fb=b.r(p,"loading",Q)||b.W(g),Nb=b.r(p,"navigator",Q),dc=b.r(p,"arrowleft",Q),ac=b.r(p,"arrowright",Q),Lb=b.r(p,"thumbnavigator",Q),oc=b.m(v),mc=b.n(v),V,T=[],uc=b.tb(v);b.e(uc,function(a){if(a.tagName=="DIV"&&!b.f(a,"u"))T.push(a);else b.Yc()&&b.q(a,(b.q(a)||0)+1)});var s=-1,wb,sb,r=T.length,K=a.cd||oc,J=a.ee||mc,Wb=a.Wc,zb=K+Wb,Ab=J+Wb,bc=eb&1?zb:Ab,u=c.min(a.ib,r),jb,x,O,yb,S=[],Qb,Sb,Ob,cc,Cc,N,E=a.Jb,lc=a.Zc,Vb=a.xb,qb,tb,ib,Rb=u<r,D=Rb?a.yc:0,X,P,F=1,M,B,R,ub=0,vb=0,H,gb,hb,Cb,w,U,z,Tb=new pc,Y,Mb=[];if(r){if(a.jb)Kb=function(a,c,d){b.Ab(a,{R:c,N:d})};N=a.Eb;f.Cb=fc;ic();b.rb(p,"jssor-slider",d);b.q(v,b.q(v)||0);b.s(v,"absolute");jb=b.bb(v,d);b.Hb(jb,v);if(kb){cc=kb.He;qb=kb.eb;tb=u==1&&r>1&&qb&&(!b.Lc()||b.Kc()>=8)}ib=tb||u>=r||!(D&1)?0:a.Xc;X=(u>1||ib?eb:-1)&a.gc;var Gb=v,C=[],A,L,Db=b.Wd(),mb=Db.Vd,G,pb,Ib,rb;Db.Tc&&b.O(Gb,Db.Tc,([i,"pan-y","pan-x","none"])[X]||"");U=new zc;if(tb)A=new qb(Tb,K,J,kb,mb);b.D(jb,U.Gb);b.vb(v,"hidden");L=Xb();b.O(L,"backgroundColor","#000");b.Yb(L,0);b.Hb(L,Gb.firstChild,Gb);for(var cb=0;cb<T.length;cb++){var wc=T[cb],yc=new xc(wc,cb);C.push(yc)}b.z(fb);Cb=new Ac;z=new nc(Cb,U);if(X){b.c(v,"mousedown",Yb);b.c(v,"touchstart",rc);b.c(v,"dragstart",Hb);b.c(v,"selectstart",Hb);b.c(g,"mouseup",ab);b.c(g,"touchend",ab);b.c(g,"touchcancel",ab);b.c(k,"blur",ab)}E&=mb?10:5;if(Nb&&Fb){Qb=new Fb.eb(Nb,Fb,W(),lb());S.push(Qb)}if(Z&&dc&&ac){Z.yc=D;Z.ib=u;Sb=new Z.eb(dc,ac,Z,W(),lb());S.push(Sb)}if(Lb&&db){db.Xb=a.Xb;Ob=new db.eb(Lb,db);S.push(Ob)}b.e(S,function(a){a.Kb(r,C,fb);a.hb(o.de,kc)});b.O(p,"visibility","visible");Eb(W());b.c(v,"click",jc,d);b.c(p,"mouseout",b.Ac(hc,p));b.c(p,"mouseover",b.Ac(Ec,p));xb();a.Tb&&b.c(g,"keydown",function(b){if(b.keyCode==37)ob(-a.Tb);else b.keyCode==39&&ob(a.Tb)});var nb=a.Xb;if(!(D&1))nb=c.max(0,c.min(nb,r-u));z.nb(nb,nb,0)}};h.Fd=21;h.ke=22;h.je=23;h.Rd=24;h.Qd=25;h.Xd=26;h.Nd=27;h.le=28;h.Sd=202;h.ie=203;h.ae=206;h.ne=207;h.me=208;h.Vc=209;var o={de:1};function q(e,d,c){var a=this;m.call(a,0,c);a.Sc=b.Dc;a.nc=0;a.lc=c}jssor_2_slider_init=function(){var a={Eb:d,oc:0,Zb:4,xb:1600,Mc:f.he,Jb:4,cd:140,ib:8},c=new h("jssor_2",a);function e(){var e=b.ld(c.V,"slides");if(e){var d=e[1];if(d){var a=b.r(d,"ad");if(!a){a=b.W();b.mb(a,"position:absolute;top:0px;right:0px;width:80px;height:20px;background-color:rgba(255,255,140,0.5);font-size: 12px;line-height: 20px;text-align:center;");b.ye(a,"Jssor Slider");b.D(d,a)}}}}e()}})(window,document,Math,null,true,false)
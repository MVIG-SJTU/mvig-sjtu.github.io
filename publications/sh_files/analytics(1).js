(function(){var $c=function(a){this.w=a||[]};$c.prototype.set=function(a){this.w[a]=!0};$c.prototype.encode=function(){for(var a=[],b=0;b<this.w.length;b++)this.w[b]&&(a[math.floor(b 0="=a.indexOf(b)},sa=function(a){return" 6)]^="1<<b%6);for(b=0;b<a.length;b++)a[b]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[b]||0);return" a.join("")+"~"};var="" vd="new" $c;function="" j(a){vd.set(a)}var="" nd="function(a,b){var" c="new" $c(dd(a));c.set(b);a.set(gd,c.w)},td="function(a){a=Dd(a);a=new" $c(a);for(var="" b="vd.w.slice(),c=0;c<a.w.length;c++)b[c]=b[c]||a.w[c];return(new" $c(b)).encode()},dd="function(a){a=a.get(Gd);ka(a)||(a=[]);return" a};var="" ea="function(a){return"function"==typeof" a},ka="function(a){return"[object" array]"="=Object.prototype.toString.call(Object(a))},qa=function(a){return" void="" 0!="a&&-1<(a.constructor+"").indexOf("String")},D=function(a,b){return" a?a.replace(="" ^[\s\xa0]+|[\s\xa0]+$="" g,""):""},ta="function(a){var" b},ua="function(){},K=function(a){if(encodeURIComponent" instanceof="" function)return="" encodeuricomponent(a);j(28);return="" a},="" l="function(a,b,c,d){try{a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)}catch(e){J(27)}},f=/^[\w\-:/.?=&%!]+$/,wa=function(a,b,c){a&&(c?(c="",b&&f.test(b)&&(c='" id="'+b+'" '),f.test(a)&&m.write("<script"+c+'="" src="'+a+'">\x3c/script>')):(c=M.createElement("script"),c.type="text/javascript",c.async=!0,c.src=a,b&&(c.id=b),a=M.getElementsByTagName("script")[0],a.parentNode.insertBefore(c,a)))},Ud=function(){return"https:"==M.location.protocol},E=function(a,b){var c=
a.match("(?:&|#|\\?)"+K(b).replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")+"=([^&#]*)");return c&&2==c.length?c[1]:""},xa=function(){var a=""+M.location.hostname;return 0==a.indexOf("www.")?a.substring(4):a},ya=function(a){var b=M.referrer;if(/^https?:\/\//i.test(b)){if(a)return b;a="//"+M.location.hostname;var c=b.indexOf(a);if(5==c||6==c)if(a=b.charAt(c+a.length),"/"==a||"?"==a||""==a||":"==a)return;return b}},za=function(a,b){if(1==b.length&&null!=b[0]&&"object"===typeof b[0])return b[0];for(var c=
{},d=Math.min(a.length+1,b.length),e=0;e<d;e++)if("object"===typeof b[e]){for(var="" g="" in="" b[e])b[e].hasownproperty(g)&&(c[g]="b[e][g]);break}else" e<a.length&&(c[a[e]]="b[e]);return" c};var="" ee="function(){this.keys=[];this.values={};this.m={}};ee.prototype.set=function(a,b,c){this.keys.push(a);c?this.m[":"+a]=b:this.values[":"+a]=b};ee.prototype.get=function(a){return" this.m.hasownproperty(":"+a)?this.m[":"+a]:this.values[":"+a]};ee.prototype.map="function(a){for(var" b="0;b<this.keys.length;b++){var" c="this.keys[b],d=this.get(c);d&&a(c,d)}};var" o="window,M=document;var" f="window,G=function(a){var" ca="function(a){var" regexp("^\\s*"+a+"="\\s*(.*?)\\s*$");for(var" d="0;d<c.length;d++){var" e="c[d].match(a);e&&b.push(e[1])}return" b},zc="function(a,b,c,d,e,g){e=G(e)?!1:eb.test(M.location.hostname)||"/"==c&&vc.test(d)?!1:!0;if(!e)return!1;b&&1200<b.length&&(b=b.substring(0,1200),J(24));c=a+"="+b+";" path="+c+" ;="" ";g&&(c+="expires=" +(new="" date((new="" date).gettime()+g)).togmtstring()+";="" ");d&&"none"!="d&&(c+="domain="+d+";");d=M.cookie;M.cookie=c;if(!(d=d!=M.cookie))a:{a=" ca(a);for(d="0;d<a.length;d++)if(b==a[d]){d=!0;break" a}d="!1}return" d},cc="function(a){return" k(a).replace(="" \(="" g,"%28").replace(="" \)="" g,"%29")},vc="/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,eb=/(^|\.)doubleclick\.net$/i;var" oc="function(){return(Ba||Ud()?"https:":"http:")+"//www.google-analytics.com"},Da=function(a){this.name="len";this.message=a+"-8192"},ba=function(a,b,c){c=c||ua;if(2036">=b.length)wc(a,b,c);else if(8192>=b.length)x(a,b,c)||wd(a,b,c)||wc(a,b,c);else throw ge("len",b.length),new Da(b.length);},wc=function(a,b,c){var d=ta(a+"?"+b);d.onload=d.onerror=function(){d.onload=null;d.onerror=null;c()}},wd=function(a,b,c){var d=O.XMLHttpRequest;if(!d)return!1;var e=new d;if(!("withCredentials"in e))return!1;
e.open("POST",a,!0);e.withCredentials=!0;e.setRequestHeader("Content-Type","text/plain");e.onreadystatechange=function(){4==e.readyState&&(c(),e=null)};e.send(b);return!0},x=function(a,b,c){return O.navigator.sendBeacon?O.navigator.sendBeacon(a,b)?(c(),!0):!1:!1},ge=function(a,b,c){1<=100*math.random()||g("?")||(a=["t=error","_e="+a,"_v=j47","sr=1"],b&&a.push("_f="+b),c&&a.push("_m="+k(c.substring(0,100))),a.push("aip=1"),a.push("z="+hd()),wc(oc()+" collect",a.join("&"),ua))};var="" h="function(a){var" b="O.gaData=O.gaData||{};return" b[a]="b[a]||{}};var" ha="function(){this.M=[]};Ha.prototype.add=function(a){this.M.push(a)};Ha.prototype.D=function(a){try{for(var" c="a.get(this.M[b]);c&&ea(c)&&c.call(O,a)}}catch(d){}b=a.get(Ia);b!=ua&&ea(b)&&(a.set(Ia,ua,!0),setTimeout(b,10))};function" ja(a){if(100!="a.get(Ka)&&La(P(a,Q))%1E4">=100*R(a,Ka))throw"abort";}function Ma(a){if(G(P(a,Na)))throw"abort";}function Oa(){var a=M.location.protocol;if("http:"!=a&&"https:"!=a)throw"abort";}
function Pa(a){try{O.navigator.sendBeacon?J(42):O.XMLHttpRequest&&"withCredentials"in new O.XMLHttpRequest&&J(40)}catch(c){}a.set(ld,Td(a),!0);a.set(Ac,R(a,Ac)+1);var b=[];Qa.map(function(c,d){if(d.F){var e=a.get(c);void 0!=e&&e!=d.defaultValue&&("boolean"==typeof e&&(e*=1),b.push(d.F+"="+K(""+e)))}});b.push("z="+Bd());a.set(Ra,b.join("&"),!0)}
function Sa(a){var b=P(a,gd)||oc()+"/collect",c=P(a,fa);!c&&a.get(Vd)&&(c="beacon");if(c){var d=P(a,Ra),e=a.get(Ia),e=e||ua;"image"==c?wc(b,d,e):"xhr"==c&&wd(b,d,e)||"beacon"==c&&x(b,d,e)||ba(b,d,e)}else ba(b,P(a,Ra),a.get(Ia));b=a.get(Na);b=h(b);c=b.hitcount;b.hitcount=c?c+1:1;b=a.get(Na);delete h(b).pending_experiments;a.set(Ia,ua,!0)}
function Hc(a){(O.gaData=O.gaData||{}).expId&&a.set(Nc,(O.gaData=O.gaData||{}).expId);(O.gaData=O.gaData||{}).expVar&&a.set(Oc,(O.gaData=O.gaData||{}).expVar);var b;var c=a.get(Na);if(c=h(c).pending_experiments){var d=[];for(b in c)c.hasOwnProperty(b)&&c[b]&&d.push(encodeURIComponent(b)+"."+encodeURIComponent(c[b]));b=d.join("!")}else b=void 0;b&&a.set(m,b,!0)}function cd(){if(O.navigator&&"preview"==O.navigator.loadPurpose)throw"abort";}
function yd(a){var b=O.gaDevIds;ka(b)&&0!=b.length&&a.set("&did",b.join(","),!0)}function vb(a){if(!a.get(Na))throw"abort";};var hd=function(){return Math.round(2147483647*Math.random())},Bd=function(){try{var a=new Uint32Array(1);O.crypto.getRandomValues(a);return a[0]&2147483647}catch(b){return hd()}};function Ta(a){var b=R(a,Ua);500<=b&&j(15);var c="P(a,Va);if("transaction"!=c&&"item"!=c){var" date).gettime(),e="R(a,Xa);0==e&&a.set(Xa,d);e=Math.round(2*(d-e)/1E3);0<e&&(c=Math.min(c+e,20),a.set(Xa,d));if(0">=c)throw"abort";a.set(Wa,--c)}a.set(Ua,++b)};var Ya=function(){this.data=new ee},Qa=new ee,Za=[];Ya.prototype.get=function(a){var b=$a(a),c=this.data.get(a);b&&void 0==c&&(c=ea(b.defaultValue)?b.defaultValue():b.defaultValue);return b&&b.Z?b.Z(this,a,c):c};var P=function(a,b){var c=a.get(b);return void 0==c?"":""+c},R=function(a,b){var c=a.get(b);return void 0==c||""===c?0:1*c};Ya.prototype.set=function(a,b,c){if(a)if("object"==typeof a)for(var d in a)a.hasOwnProperty(d)&&ab(this,d,a[d],c);else ab(this,a,b,c)};
var ab=function(a,b,c,d){if(void 0!=c)switch(b){case Na:wb.test(c)}var e=$a(b);e&&e.o?e.o(a,b,c,d):a.data.set(b,c,d)},bb=function(a,b,c,d,e){this.name=a;this.F=b;this.Z=d;this.o=e;this.defaultValue=c},$a=function(a){var b=Qa.get(a);if(!b)for(var c=0;c<za.length;c++){var 0="==c&&(c=Bd());return" d="Za[c],e=d[0].exec(a);if(e){b=d[1](e);Qa.set(b.name,b);break}}return" b},yc="function(a){var" b;qa.map(function(c,d){d.f="=a&&(b=d)});return" b&&b.name},s="function(a,b,c,d,e){a=new" bb(a,b,c,d,e);qa.set(a.name,a);return="" a.name},cb="function(a," b){za.push([new="" regexp("^"+a+"$"),b])},t="function(a,b,c){return" s(a,b,c,void="" 0,db)},db="function(){};var" gb="qa(window.GoogleAnalyticsObject)&&sa(window.GoogleAnalyticsObject)||"ga",Ba=!1,hb=T("apiVersion","v"),ib=T("clientVersion","_v");S("anonymizeIp","aip");var" jb="S("adSenseId","a"),Va=S("hitType","t"),Ia=S("hitCallback"),Ra=S("hitPayload");S("nonInteraction","ni");S("currencyCode","cu");S("dataSource","ds");var" vd="S("useBeacon",void" 0,!1),fa="S("transport");S("sessionControl","sc","");S("sessionGroup","sg");S("queueTime","qt");var" ac="S("_s","_s");S("screenName","cd");" var="" kb="S("location","dl",""),lb=S("referrer","dr"),mb=S("page","dp","");S("hostname","dh");var" nb="S("language","ul"),ob=S("encoding","de");S("title","dt",function(){return" m.title||void="" 0});cb("contentgroup([0-9]+)",function(a){return="" new="" bb(a[0],"cg"+a[1])});var="" pb="S("screenColors","sd"),qb=S("screenResolution","sr"),rb=S("viewportSize","vp"),sb=S("javaEnabled","je"),tb=S("flashVersion","fl");S("campaignId","ci");S("campaignName","cn");S("campaignSource","cs");S("campaignMedium","cm");" s("campaignkeyword","ck");s("campaigncontent","cc");var="" ub="S("eventCategory","ec"),xb=S("eventAction","ea"),yb=S("eventLabel","el"),zb=S("eventValue","ev"),Bb=S("socialNetwork","sn"),Cb=S("socialAction","sa"),Db=S("socialTarget","st"),Eb=S("l1","plt"),Fb=S("l2","pdt"),Gb=S("l3","dns"),Hb=S("l4","rrt"),Ib=S("l5","srt"),Jb=S("l6","tcp"),Kb=S("l7","dit"),Lb=S("l8","clt"),Mb=S("timingCategory","utc"),Nb=S("timingVar","utv"),Ob=S("timingLabel","utl"),Pb=S("timingValue","utt");S("appName","an");" s("appversion","av","");s("appid","aid","");s("appinstallerid","aiid","");s("exdescription","exd");s("exfatal","exf");var="" nc="S("expId","xid"),Oc=S("expVar","xvar"),m=S("exp","exp"),Rc=S("_utma","_utma"),Sc=S("_utmz","_utmz"),Tc=S("_utmht","_utmht"),Ua=S("_hc",void" 0,0),xa="S("_ti",void" 0,0),wa="S("_to",void" 0,20);cb("dimension([0-9]+)",function(a){return="" bb(a[0],"cd"+a[1])});cb("metric([0-9]+)",function(a){return="" bb(a[0],"cm"+a[1])});s("linkerparam",void="" 0,void="" 0,bc,db);="" ld="S("usage","_u"),Gd=S("_um");S("forceSSL",void" 0,function(){return="" ba},function(a,b,c){j(34);ba="!!c});var" ed="S("_j1","jid");cb("\\&(.*)",function(a){var" b="new" bb(a[0],a[1]),c="yc(a[0].substring(1));c&&(b.Z=function(a){return" a.get(c)},b.o="function(a,b,g,ca){a.set(c,g,ca)},b.F=void" 0);return="" b});="" qb="T("_oot"),dd=S("previewTask"),Rb=S("checkProtocolTask"),md=S("validationTask"),Sb=S("checkStorageTask"),Uc=S("historyImportTask"),Tb=S("samplerTask"),Vb=S("_rlt"),Wb=S("buildHitTask"),Xb=S("sendHitTask"),Vc=S("ceTask"),zd=S("devIdTask"),Cd=S("timingTask"),Ld=S("displayFeaturesTask"),V=T("name"),Q=T("clientId","cid"),n=T("clientIdTime"),Ad=S("userId","uid"),Na=T("trackingId","tid"),U=T("cookieName",void" 0,"_ga"),w="T("cookieDomain"),Yb=T("cookiePath",void" 0,"="" "),zb="T("cookieExpires",void" 0,63072e3),="" $b="T("legacyCookieDomain"),Wc=T("legacyHistoryImport",void" 0,!0),ac="T("storage",void" 0,"cookie"),bc="T("allowLinker",void" 0,!1),cc="T("allowAnchor",void" 0,!0),ka="T("sampleRate","sf",100),dc=T("siteSpeedSampleRate",void" 0,1),ec="T("alwaysSendReferrer",void" 0,!1),gd="S("transportUrl"),Md=S("_r","_r");function" x(a,b,c,d){b[a]="function(){try{return" d&&j(d),c.apply(this,arguments)}catch(e){throw="" ge("exc",a,e&&e.name),e;}}};var="" od="function(a){this.V=a;this.fa=void" 0;this.$="!1;this.oa=void" 0;this.ea="1},Ed=function(a,b){var" c;if(a.fa&&a.$)return="" 0;a.$="!0;if(b){if(a.oa&&R(b,a.oa))return" r(b,a.oa);if(0="=b.get(dc))return" 0}if(0="=a.V)return" 0;void="" fc(){var="" a,b,c;if((c="(c=O.navigator)?c.plugins:null)&&c.length)for(var" e="c[d];-1<e.name.indexOf("Shockwave" flash")&&(b="e.description)}if(!b)try{a=new" activexobject("shockwaveflash.shockwaveflash.7"),b="a.GetVariable("$version")}catch(g){}if(!b)try{a=new" activexobject("shockwaveflash.shockwaveflash.6"),b="WIN 6,0,21,0" ,a.allowscriptaccess="always" ,b="a.GetVariable("$version")}catch(g){}if(!b)try{a=new" activexobject("shockwaveflash.shockwaveflash"),b="a.GetVariable("$version")}catch(g){}b&&" (a="b.match(/[\d]+/g))&&3<=a.length&&(b=a[0]+"."+a[1]+"" r"+a[2]);return="" b||void="" 0};var="" aa="function(a){var" la(p(a,q))%100="">=b?!1:!0},gc=function(a){var b={};if(Ec(b)||Fc(b)){var c=b[Eb];void 0==c||Infinity==c||isNaN(c)||(0<c?(y(b,gb),y(b,jb),y(b,ib),y(b,fb),y(b,hb),y(b,kb),y(b,lb),a(b)):l(o,"load",function(){gc(a)},!1))}},ec=function(a){var 0="=c)return!1;a[Eb]=c;return!0},Y=function(a,b){var" b="O.performance||O.webkitPerformance,b=b&&b.timing;if(!b)return!1;var" c="b.navigationStart;if(0==c)return!1;a[Eb]=b.loadEventStart-c;a[Gb]=b.domainLookupEnd-b.domainLookupStart;a[Jb]=b.connectEnd-b.connectStart;a[Ib]=" b.responsestart-b.requeststart;a[fb]="b.responseEnd-b.responseStart;a[Hb]=b.fetchStart-c;a[Kb]=b.domInteractive-c;a[Lb]=b.domContentLoadedEventStart-c;return!0},Fc=function(a){if(O.top!=O)return!1;var" 0);2147483648<c&&(c="void" 0);0<c&&b.setpagereadytime();if(void="">c)a[b]=void 0},Fd=function(a){return function(b){if("pageview"==b.get(Va)&&!a.I){a.I=!0;var c=
aa(b);b=0<e(b.get(kb),"gclid").length;(c||b)&&gc(function(b){a.send(c?"timing":"adtiming",b)})}}};var 0="=g||l.H[c]<g?(e=[l],g=l.H[c]):l.H[c]==g&&e.push(l)}return" hc="!1,mc=function(a){if("cookie"==P(a,ac)){var" b="P(a,U),c=nd(a),d=kc(P(a,Yb)),e=lc(P(a,W)),g=1E3*R(a,Zb),ca=P(a,Na);if("auto"!=e)zc(b,c,d,e,ca,g)&&(hc=!0);else{J(32);var" l;a:{c="[];e=xa().split(".");if(4==e.length&&(l=e[e.length-1],parseInt(l,10)==l)){l=["none"];break" a}for(l="e.length-2;0<=l;l--)c.push(e.slice(l).join("."));c.push("none");l=c}for(var" k="0;k<l.length;k++)if(e=l[k],a.data.set(W,e),c=nd(a),zc(b,c,d,e,ca,g)){hc=!0;return}a.data.set(W,"auto")}}},nc=function(a){if("cookie"==P(a,ac)&&" !hc&&(mc(a),!hc))throw"abort";},yc="function(a){if(a.get(Wc)){var" date).gettime(),!0),a.set(rc,d.r),(b="Xc("__utmz",c,b))&&d.hash==b.hash&&a.set(Sc,b.R))}},nd=function(a){var" d="[],e=[],g,ca=0;ca<a.length;ca++){var" l="a[ca];l.H[c]==b?d.push(l):void" 0<="" d.length?d:e},lc="function(a){return" a},jc="function(a){a=kc(a);return"/"==a?1:a.split("/").length};function" xc(a,b,c){"none"="=b&&(b="");var" g="0;g<e.length;g++){var" ca="(""+e[g]).split(".");ca.length">=a&&d.push({hash:ca[0],R:e[g],O:ca})}if(0!=d.length)return 1==d.length?d[0]:Zc(b,d)||Zc(c,d)||Zc(null,d)||d[0]}function Zc(a,b){var c,d;null==a?c=d=1:(c=La(a),d=La(D(a,".")?a.substring(1):"."+a));for(var e=0;e<b.length;e++)if(b[e].hash==c||b[e].hash==d)return b[e]};var="" od="new" regexp(="" ^https?:\="" \="" ([^\="" :]+)="" ),pd="/(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/;function" bc(a){a="a.get(Q);var" b="Ic(a,0);return"_ga=1."+K(b+"."+a)}function" ic(a,b){for(var="" c="new" date,d="O.navigator,e=d.plugins||[],c=[a,d.userAgent,c.getTimezoneOffset(),c.getYear(),c.getDate(),c.getHours(),c.getMinutes()+b],d=0;d<e.length;++d)c.push(e[d].description);return" la(c.join("."))}var="" dc="function(a){J(48);this.target=a;this.T=!1};" dc.prototype.ca="function(a,b){if(a.tagName){if("a"==a.tagName.toLowerCase()){a.href&&(a.href=qd(this,a.href,b));return}if("form"==a.tagName.toLowerCase())return" rd(this,a)}if("string"="=typeof" a)return="" qd(this,a,b)};="" var="" qd="function(a,b,c){var" d="pd.exec(b);d&&3<=d.length&&(b=d[1]+(d[3]?d[2]+d[3]:""));a=a.target.get("linkerParam");var" e="b.indexOf("?"),d=b.indexOf("#");c?b+=(-1==d?"#":"&")+a:(c=-1==e?"?":"&",b=-1==d?b+(c+a):b.substring(0,d)+c+a+b.substring(d));return" m.createelement("input");d.setattribute("type","hidden");d.setattribute("name","_ga");d.setattribute("value",c);b.appendchild(d)}else"post"="=b.method.toLowerCase()&&(b.action=qd(a,b.action))}};" dc.prototype.s="function(a,b,c){function" d(c){try{c="c||O.event;var" d;a:{var="" g="c.target||c.srcElement;for(c=100;g&&0<c;){if(g.href&&g.nodeName.match(/^a(?:rea)?$/i)){d=g;break" a}g="g.parentNode;c--}d={}}("http:"==d.protocol||"https:"==d.protocol)&&sd(a,d.hostname||"")&&d.href&&(d.href=qd(e,d.href,b))}catch(k){J(26)}}var" c[1])&&rd(e,b)}})};function="" sd(a,b){if(b="=M.location.hostname)return!1;for(var" regexp){if(a[c].test(b))return!0}else="" if(0<="b.indexOf(a[c]))return!0;return!1};var" p="/^(GTM|OPT)-[A-Z0-9]+$/,q=/;_gaexp=[^;]*/g,r=/;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,t=function(a){function" b(a,b){b&&(c+="&" +a+"="+K(b))}var c=" https:="" www.google-analytics.com="" gtm="" js?id="+K(a.id);" datalayer"!="a.B&&b("l",a.B);b("t",a.target);b("cid",a.ja);b("cidt",a.ka);b("gac",a.la);b("aip",a.ia);a.na&&b("m","sync");b("cycle",a.G);return" c};var="" jd="function(a,b,c){this.U=ed;this.aa=b;(b=c)||(b=(b=P(a,V))&&"t0"!=b?Wd.test(b)?"_gat_"+Cc(P(a,Na)):"_gat_"+Cc(b):"_gat");this.Y=b;Ed(new" od(100),a)&&(j(30),this.pa="!0)},Rd=function(a,b){var" d});var="" c})},pd="function(a,b){b.get(a.U)||("1"==Ca(a.Y)[0]?b.set(a.U,"",!0):b.set(a.U,""+hd(),!0))},Qd=function(a,b){if(b.get(a.U)){var" b.get(na),c)}},id="function(a,b){if(b.get(a.U)){var" ee,d="function(a){$a(a).F&&c.set($a(a).F,b.get(a))};d(hb);d(ib);d(Na);d(Q);d(Ad);d(a.U);c.set($a(ld).F,Td(b));var" fd="function(a,b){var" d;b[u]&&(d="Cc(b[U]));d=new" jd(c,"https:="" stats.g.doubleclick.net="" r="" collect?t="dc&aip=1&_r=3&",d);Rd(d,c);c.set("dcLoaded",!0)}};var" sd="function(a){if(!a.get("dcLoaded")&&"cookie"==a.get(ac)){Nd(a,51);var" jd(a);pd(b,a);qd(b,a);a.get(b.u)&&(a.set(md,1,!0),a.set(gd,oc()+"="" collect",!0))}};var="" lc="function(){var" a="O.gaGlobal=O.gaGlobal||{};return" a.hid="a.hid||hd()};var" ad,bd="function(a,b,c){if(!ad){var" d;d="M.location.hash;var" wb="/^(UA|YT|MO|GP)-(\d+)-(\d+)$/,pc=function(a){function" b(a,b){d.b.data.set(a,b)}function="" c(a,c){b(a,c);d.filters.add(a)}var="" ya;this.filters="new" ha;b(v,a[v]);b(na,sa(a[na]));b(u,a[u]);b(w,a[w]||xa());b(yb,a[yb]);b(zb,a[zb]);b($b,a[$b]);b(wc,a[wc]);b(bc,a[bc]);b(cc,a[cc]);b(ka,a[ka]);b(dc,a[dc]);b(ec,a[ec]);b(ac,a[ac]);b(ad,a[ad]);b(n,a[n]);b(hb,1);b(ib,"j47");c(qb,ma);c(dd,cd);c(rb,oa);c(md,vb);c(sb,nc);c(uc,yc);c(tb,ja);c(vb,ta);c(vc,hc);c(zd,yd);c(ld,sd);c(wb,pa);c(xb,sa);="" c(cd,fd(this));jc(this.b,a[q]);kc(this.b);this.b.set(jb,lc());bd(this.b.get(na),this.b.get(w),this.b.get(yb))},jc="function(a,b){if("cookie"==P(a,ac)){hc=!1;var" c;b:{var="">d.length)){c=[];for(var e=0;e<d.length;e++){var g;g="d[e].split(".");var" ca="g.shift();("GA1"==ca||"1"==ca)&&1<g.length?(ca=g.shift().split("-"),1==ca.length&&(ca[1]="1"),ca[0]*=1,ca[1]*=1,g={H:ca,s:g.join(".")}):g=void" 0;g&&c.push(g)}if(1="=c.length){J(13);c=c[0].s;break" b}if(0="=c.length)J(12);else{J(14);d=lc(P(a," w)).split(".").length;c="Gc(c,d,0);if(1==c.length){c=c[0].s;break" b}d="jc(P(a,Yb));c=Gc(c,d,1);c=c[0]&&c[0].s;break" b}}c="void" 0}c||(c="P(a,W),d=P(a,$b)||xa(),c=Xc("__utma",d,c),void" 0!="c?(J(10),c=c.O[1]+"."+c.O[2]):c=void" 0);c&&(a.data.set(q,c),hc="!0)}c=a.get(cc);if(e=E(M.location[c?"href":"search"],"_ga"))a.get(bc)?(c=e.indexOf("."),-1==c?J(22):(d=e.substring(c+1),"1"!=e.substring(0,c)?J(22):(c=d.indexOf("."),-1==c?J(22):(e=d.substring(0,c),c=d.substring(c+1),e!=Ic(c,0)&&e!=Ic(c,-1)&&e!=Ic(c,-2)?J(23):" (j(11),a.data.set(q,c)))))):j(21);b&&(j(9),a.data.set(q,k(b)));if(!a.get(q))if(c="(c=O.gaGlobal&&O.gaGlobal.vid)&&-1!=c.search(/^(?:utma\.)?\d+\.\d+$/)?c:void" 0)j(17),a.data.set(q,c);else{j(8);c="O.navigator.userAgent+(M.cookie?M.cookie:"")+(M.referrer?M.referrer:"");d=c.length;for(e=O.history.length;0<e;)c+=e--^d++;a.data.set(Q,[hd()^La(c)&2147483647,Math.round((new" date).gettime()="" 1e3)].join("."))}mc(a)},kc="function(a){var" b="O.navigator,c=O.screen,d=M.location;a.set(lb,ya(a.get(ec)));if(d){var" e="d.pathname||"";"/"!=e.charAt(0)&&(J(31),e="/"+e);a.set(kb,d.protocol+"//"+d.hostname+e+d.search)}c&&a.set(qb,c.width+"x"+c.height);c&&a.set(pb,c.colorDepth+"-bit");var" c="M.documentElement,g=(e=M.body)&&e.clientWidth&&e.clientHeight,ca=[];c&&c.clientWidth&&c.clientHeight&&("CSS1Compat"===M.compatMode||!g)?ca=[c.clientWidth,c.clientHeight]:g&&(ca=[e.clientWidth,e.clientHeight]);c=0">=ca[0]||0>=ca[1]?"":ca.join("x");a.set(rb,c);a.set(tb,fc());a.set(ob,M.characterSet||M.charset);a.set(sb,b&&"function"===
typeof b.javaEnabled&&b.javaEnabled()||!1);a.set(nb,(b&&(b.language||b.browserLanguage)||"").toLowerCase());if(d&&a.get(cc)&&(b=M.location.hash)){b=b.split(/[?&#]+/);d=[];for(c=0;c<b.length;++c)(d(b[c],"utm_id")||d(b[c],"utm_campaign")||d(b[c],"utm_source")||d(b[c],"utm_medium")||d(b[c],"utm_term")||d(b[c],"utm_content")||d(b[c],"gclid")||d(b[c],"dclid")||d(b[c],"gclsrc"))&&d.push(b[c]);0<d.length&&(b="#"+d.join("&"),a.set(kb,a.get(kb)+b))}};pc.prototype.get=function(a){return this.b.get(a)};="" pc.prototype.set="function(a,b){this.b.set(a,b)};var" qc="{pageview:[mb],event:[ub,xb,yb,zb],social:[Bb,Cb,Db],timing:[Mb,Nb,Pb,Ob]};pc.prototype.send=function(a){if(!(1">arguments.length)){var b,c;"string"===typeof arguments[0]?(b=arguments[0],c=[].slice.call(arguments,1)):(b=arguments[0]&&arguments[0][Va],c=arguments);b&&(c=za(qc[b]||[],c),c[Va]=b,this.b.set(c,void 0,!0),this.filters.D(this.b),this.b.data.m={})}};
pc.prototype.ma=function(a,b){var c=this;u(a,c,b)||(v(a,function(){u(a,c,b)}),y(String(c.get(V)),a,void 0,b,!0))};var rc=function(a){if("prerender"==M.visibilityState)return!1;a();return!0},z=function(a){if(!rc(a)){J(16);var b=!1,c=function(){if(!b&&rc(a)){b=!0;var d=c,e=M;e.removeEventListener?e.removeEventListener("visibilitychange",d,!1):e.detachEvent&&e.detachEvent("onvisibilitychange",d)}};L(M,"visibilitychange",c)}};var td=/^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,sc=function(a){if(ea(a[0]))this.u=a[0];else{var b=td.exec(a[0]);null!=b&&4==b.length&&(this.c=b[1]||"t0",this.K=b[2]||"",this.C=b[3],this.a=[].slice.call(a,1),this.K||(this.A="create"==this.C,this.i="require"==this.C,this.g="provide"==this.C,this.ba="remove"==this.C),this.i&&(3<=this.a.length?(this.x=this.a[1],this.w=this.a[2]):this.a[1]&&(qa(this.a[1])?this.x=this.a[1]:this.w=this.a[1])));b=a[1];a=a[2];if(!this.c)throw"abort";if(this.i&&(!qa(b)||""==b))throw"abort"; if(this.g&&(!qa(b)||""="=b||!ea(a)))throw"abort";if(ud(this.c)||ud(this.K))throw"abort";if(this.g&&"t0"!=this.c)throw"abort";}};function" ud(a){return="" 0<="a.indexOf(".")||0<=a.indexOf(":")};var" yd,zd,$d,a;yd="new" ee;$d="new" ee;a="new" ee;zd="{ec:45,ecommerce:46,linkid:47};" var="" u="function(a,b,c){b==N||b.get(V);var" d="Yd.get(a);if(!ea(d))return!1;b.plugins_=b.plugins_||new" ee;if(b.plugins_.get(a))return!0;b.plugins_.set(a,new="" d(b,c||{}));return!0},y="function(a,b,c,d,e){if(!ea(Yd.get(b))&&!$d.get(b)){Zd.hasOwnProperty(b)&&J(Zd[b]);if(p.test(b)){J(52);a=N.j(a);if(!a)return!0;c=d||{};d={id:b,B:c.dataLayer||"dataLayer",ia:!!a.get("anonymizeIp"),na:e,G:!1};a.get("&gtm")==b&&(d.G=!0);var" g="String(a.get("name"));"t0"!=g&&(d.target=g);G(String(a.get("trackingId")))||(d.ja=String(a.get(Q))," d.ka="Number(a.get(n)),a=c.palindrome?r:q,a=(a=M.cookie.replace(/^|(;" +)="" g,";").match(a))?a.sort().join("").substring(1):void="" 0,d.la="a);a=d.B;c=(new" date).gettime();o[a]="O[a]||[];c={"gtm.start":c};e||(c.event="gtm.js");O[a].push(c);c=t(d)}!c&&Zd.hasOwnProperty(b)?(J(39),c=b+".js"):J(43);c&&(c&&0<=c.indexOf("/")||(c=(Ba||Ud()?"https:":"http:")+"//www.google-analytics.com/plugins/ua/"+c),d=ae(c),a=d.protocol,c=M.location.protocol,("https:"==a||a==c||("http:"!=a?0:"http:"==c))&&B(d)&&(wa(d.url,void" 0,="" e),$d.set(b,!0)))}},v="function(a,b){var" c="A.get(a)||[];c.push(b);A.set(a,c)},C=function(a,b){Yd.set(a,b);for(var" b="ae(M.location.href);if(D(a.url,"https://www.google-analytics.com/gtm/js?id="))return!0;if(a.query||0<=a.url.indexOf("?")||0<=a.path.indexOf("://"))return!1;if(a.host==b.host&&a.port==b.port)return!0;b="http:"==a.protocol?80:443;return"www.google-analytics.com"==a.host&&(a.port||b)==b&&D(a.path,"/plugins/")?!0:!1}," ae="function(a){function" b(a){var="">a.split("/")[0].indexOf(":")&&(a=ca+e[2].substring(0,e[2].lastIndexOf("/"))+"/"+
a);c.href=a;d=b(c);return{protocol:(c.protocol||"").toLowerCase(),host:d[0],port:d[1],path:d[2],query:c.search||"",url:a||""}};var Z={ga:function(){Z.f=[]}};Z.ga();Z.D=function(a){var b=Z.J.apply(Z,arguments),b=Z.f.concat(b);for(Z.f=[];0<b.length&&!z.v(b[0])&&!(b.shift(),0<z.f.length););z.f=z.f.concat(b)};z.j=function(a){for(var b="[],c=0;c<arguments.length;c++)try{var" d="new" sc(arguments[c]);d.g?c(d.a[0],d.a[1]):(d.i&&(d.ha="y(d.c,d.a[0],d.X,d.W)),b.push(d))}catch(e){}return" b};="" z.v="function(a){try{if(a.u)a.u.call(O,N.j("t0"));else{var" if(a.ba)n.remove(a.c);else="" if(b)if(a.i){if(a.ha&&(a.ha="y(a.c,a.a[0],a.X,a.W)),!u(a.a[0],b,a.W))return!0}else" if(a.k){var="" c="a.C,d=a.a,e=b.plugins_.get(a.K);e[c].apply(e,d)}else" b[a.c].apply(b,a.a)}}catch(g){}};var="" n="function(a){J(1);Z.D.apply(Z,[arguments])};N.h={};N.P=[];N.L=0;N.answer=42;var" uc="[Na,W,V];N.create=function(a){var" +b[v];if(n.h[c])return="" n.h[c];b="new" pc(b);n.h[c]="b;N.P.push(b);return" b};n.remove="function(a){for(var" n.h[a]};n.getall="function(){return" n.p.slice(0)};="" n.n="function(){"ga"!=gb&&J(49);var" a="O[gb];if(!a||42!=a.answer){N.L=a&&a.l;N.loaded=!0;var">c;c++){var d=b[c].src;if(d&&0==d.indexOf("https://www.google-analytics.com/analytics")){J(33);
b=!0;break a}}b=!1}b&&(Ba=!0)}Ud()||Ba||!Ed(new Od(1E4))||(J(36),Ba=!0);(O.gaplugins=O.gaplugins||{}).Linker=Dc;b=Dc.prototype;C("linker",Dc);X("decorate",b,b.ca,20);X("autoLink",b,b.S,25);C("displayfeatures",fd);C("adfeatures",fd);a=a&&a.q;ka(a)?Z.D.apply(N,a):J(50)}};N.da=function(){for(var a=N.getAll(),b=0;b<a.length;b++)a[b].get(v)};var h="N.N,I=O[gb];I&&I.r?H():z(H);z(function(){Z.D(["provide","render",ua])});function" la(a){var="" b="1,c,d;if(a)for(b=0,d=a.length-1;0<=d;d--)c=a.charCodeAt(d),b=(b<<6&268435455)+c+(c<<14),c=b&266338304,b=0!=c?b^c">>21:b;return b};})(window);
</a.length;b++)a[b].get(v)};var></b.length&&!z.v(b[0])&&!(b.shift(),0<z.f.length););z.f=z.f.concat(b)};z.j=function(a){for(var></=this.a.length?(this.x=this.a[1],this.w=this.a[2]):this.a[1]&&(qa(this.a[1])?this.x=this.a[1]:this.w=this.a[1])));b=a[1];a=a[2];if(!this.c)throw"abort";if(this.i&&(!qa(b)||""==b))throw"abort";></b.length;++c)(d(b[c],"utm_id")||d(b[c],"utm_campaign")||d(b[c],"utm_source")||d(b[c],"utm_medium")||d(b[c],"utm_term")||d(b[c],"utm_content")||d(b[c],"gclid")||d(b[c],"dclid")||d(b[c],"gclsrc"))&&d.push(b[c]);0<d.length&&(b="#"+d.join("&"),a.set(kb,a.get(kb)+b))}};pc.prototype.get=function(a){return></d.length;e++){var></b.length;e++)if(b[e].hash==c||b[e].hash==d)return></e(b.get(kb),"gclid").length;(c||b)&&gc(function(b){a.send(c?"timing":"adtiming",b)})}}};var></c?(y(b,gb),y(b,jb),y(b,ib),y(b,fb),y(b,hb),y(b,kb),y(b,lb),a(b)):l(o,"load",function(){gc(a)},!1))}},ec=function(a){var></za.length;c++){var></=b&&j(15);var></=100*math.random()||g("?")||(a=["t=error","_e="+a,"_v=j47","sr=1"],b&&a.push("_f="+b),c&&a.push("_m="+k(c.substring(0,100))),a.push("aip=1"),a.push("z="+hd()),wc(oc()+"></d;e++)if("object"===typeof></this.w.length;b++)this.w[b]&&(a[math.floor(b>
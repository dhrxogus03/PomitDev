define("DS/MobilePairing/UrlShortener/UrlShortener",[],function(){"use strict";var t,e={},r={},n={};for(t in e.url={},e.url.enc={0:"0",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"a",11:"b",12:"c",13:"d",14:"e",15:"f",16:"g",17:"h",18:"i",19:"j",20:"k",21:"l",22:"m",23:"n",24:"o",25:"p",26:"q",27:"r",28:"s",29:"t",30:"u",31:"v",32:"w",33:"x",34:"y",35:"z",36:".",37:"-",38:"_",39:"~",40:":",41:"/",42:"?",43:"#",44:"[",45:"]",46:"@",47:"!",48:"$",49:"&",50:"'",51:"(",52:")",53:"*",54:"+",55:",",56:";",57:"="},e.url.dec={},e.url.enc)e.url.dec[e.url.enc[t]]=t;return e.b58Characters={},e.b58Characters.enc={0:"a",1:"b",2:"c",3:"d",4:"e",5:"f",6:"g",7:"h",8:"i",9:"j",10:"k",11:"l",12:"m",13:"n",14:"o",15:"p",16:"q",17:"r",18:"s",19:"t",20:"u",21:"v",22:"w",23:"x",24:"y",25:"z",26:"A",27:"B",28:"C",29:"D",30:"E",31:"F",32:"G",33:"H",34:"I",35:"J",36:"K",37:"L",38:"M",39:"N",40:"O",41:"P",42:"Q",43:"R",44:"S",45:"T",46:"U",47:"V",48:"W",49:"X",50:"Y",51:"Z",52:"0",53:"1",54:"2",55:"3",56:"4",57:"5"},r.enc={"-apps.3dexperience.3ds.com/enovia":1,"-apps.3dx-staging.3ds.com/enovia":2,".ux.dsone.3ds.com/3DSpace":3,".dsone.3ds.com/3DSpace":4,"apps.3dexperience.3ds.com/enovia":5,"/3DSpace":6},n.enc={"eu1-":1,"euw1-":2,"3dspace.":3},{shorten:function(i){var o,a,s=0,h=0,l=0;if("string"==typeof i){for(t in"https"===(i=(i=function t(e,r){return r.slice(r.length-e.length)===e?t(e,r.slice(0,0-e.length)):r}("/",i)).replace(":443","")).toLowerCase().substring(0,5)?(s=1,i=i.substring(8)):i=i.substring(7),n.enc)if(i.substring(0,t.length)===t){h=n.enc[t],i=i.substring(t.length);break}for(t in r.enc)if(i.substring(i.length-t.length,i.length)===t){l=r.enc[t],i=i.substring(0,i.length-t.length);break}for(o=e.b58Characters.enc[4*s+2*(h>0?1:0)+(l>0?1:0)],(h>0||l>0)&&(o+=e.b58Characters.enc[8*h+l]),i=i.toLowerCase(),a=0;a<i.length;a++)o+=e.b58Characters.enc[57-e.url.dec[i.charAt(a)]];return o}return!1}}}),define("DS/MobilePairing/QRCode/QRCode",[],function(){var t;function e(t){this.mode=n.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,r=this.data.length;e<r;e++){var i=[],o=this.data.charCodeAt(e);o>65536?(i[0]=240|(1835008&o)>>>18,i[1]=128|(258048&o)>>>12,i[2]=128|(4032&o)>>>6,i[3]=128|63&o):o>2048?(i[0]=224|(61440&o)>>>12,i[1]=128|(4032&o)>>>6,i[2]=128|63&o):o>128?(i[0]=192|(1984&o)>>>6,i[1]=128|63&o):i[0]=o,this.parsedData.push(i)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function r(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}e.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,r=this.parsedData.length;e<r;e++)t.put(this.parsedData[e],8)}},r.prototype={addData:function(t){var r=new e(t);this.dataList.push(r),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var i=0;i<this.moduleCount;i++)this.modules[n][i]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=r.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var n=-1;n<=7;n++)e+n<=-1||this.moduleCount<=e+n||(this.modules[t+r][e+n]=0<=r&&r<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=n&&n<=4)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var n=f.getLostPoint(this);(0==r||t>n)&&(t=n,e=r)}return e},createMovieClip:function(t,e,r){var n=t.createEmptyMovieClip(e,r);this.make();for(var i=0;i<this.modules.length;i++)for(var o=1*i,a=0;a<this.modules[i].length;a++){var s=1*a;this.modules[i][a]&&(n.beginFill(0,100),n.moveTo(s,o),n.lineTo(s+1,o),n.lineTo(s+1,o+1),n.lineTo(s,o+1),n.endFill())}return n},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=f.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var n=t[e],i=t[r];if(null==this.modules[n][i])for(var o=-2;o<=2;o++)for(var a=-2;a<=2;a++)this.modules[n+o][i+a]=-2==o||2==o||-2==a||2==a||0==o&&0==a}},setupTypeNumber:function(t){for(var e=f.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var n=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(r=0;r<18;r++){n=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n}},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,n=f.getBCHTypeInfo(r),i=0;i<15;i++){var o=!t&&1==(n>>i&1);i<6?this.modules[i][8]=o:i<8?this.modules[i+1][8]=o:this.modules[this.moduleCount-15+i][8]=o}for(i=0;i<15;i++){o=!t&&1==(n>>i&1);i<8?this.modules[8][this.moduleCount-i-1]=o:i<9?this.modules[8][15-i-1+1]=o:this.modules[8][15-i-1]=o}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,n=this.moduleCount-1,i=7,o=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var s=0;s<2;s++)if(null==this.modules[n][a-s]){var h=!1;o<t.length&&(h=1==(t[o]>>>i&1)),f.getMask(e,n,a-s)&&(h=!h),this.modules[n][a-s]=h,-1==--i&&(o++,i=7)}if((n+=r)<0||this.moduleCount<=n){n-=r,r=-r;break}}}},r.PAD0=236,r.PAD1=17,r.createData=function(t,e,n){for(var i=_.getRSBlocks(t,e),o=new v,a=0;a<n.length;a++){var s=n[a];o.put(s.mode,4),o.put(s.getLength(),f.getLengthInBits(s.mode,t)),s.write(o)}var h=0;for(a=0;a<i.length;a++)h+=i[a].dataCount;if(o.getLengthInBits()>8*h)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*h+")");for(o.getLengthInBits()+4<=8*h&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*h||(o.put(r.PAD0,8),o.getLengthInBits()>=8*h));)o.put(r.PAD1,8);return r.createBytes(o,i)},r.createBytes=function(t,e){for(var r=0,n=0,i=0,o=new Array(e.length),a=new Array(e.length),s=0;s<e.length;s++){var h=e[s].dataCount,l=e[s].totalCount-h;n=Math.max(n,h),i=Math.max(i,l),o[s]=new Array(h);for(var u=0;u<o[s].length;u++)o[s][u]=255&t.buffer[u+r];r+=h;var g=f.getErrorCorrectPolynomial(l),c=new m(o[s],g.getLength()-1).mod(g);a[s]=new Array(g.getLength()-1);for(u=0;u<a[s].length;u++){var d=u+c.getLength()-a[s].length;a[s][u]=d>=0?c.get(d):0}}var p=0;for(u=0;u<e.length;u++)p+=e[u].totalCount;var _=new Array(p),v=0;for(u=0;u<n;u++)for(s=0;s<e.length;s++)u<o[s].length&&(_[v++]=o[s][u]);for(u=0;u<i;u++)for(s=0;s<e.length;s++)u<a[s].length&&(_[v++]=a[s][u]);return _};for(var n={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},i={L:1,M:0,Q:3,H:2},o=0,a=1,s=2,h=3,l=4,u=5,g=6,c=7,f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;f.getBCHDigit(e)-f.getBCHDigit(f.G15)>=0;)e^=f.G15<<f.getBCHDigit(e)-f.getBCHDigit(f.G15);return(t<<10|e)^f.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;f.getBCHDigit(e)-f.getBCHDigit(f.G18)>=0;)e^=f.G18<<f.getBCHDigit(e)-f.getBCHDigit(f.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return f.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case o:return(e+r)%2==0;case a:return e%2==0;case s:return r%3==0;case h:return(e+r)%3==0;case l:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case u:return e*r%2+e*r%3==0;case g:return(e*r%2+e*r%3)%2==0;case c:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new m([1],0),r=0;r<t;r++)e=e.multiply(new m([1,d.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case n.MODE_NUMBER:return 10;case n.MODE_ALPHA_NUM:return 9;case n.MODE_8BIT_BYTE:case n.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case n.MODE_NUMBER:return 12;case n.MODE_ALPHA_NUM:return 11;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case n.MODE_NUMBER:return 14;case n.MODE_ALPHA_NUM:return 13;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,n=0;n<e;n++)for(var i=0;i<e;i++){for(var o=0,a=t.isDark(n,i),s=-1;s<=1;s++)if(!(n+s<0||e<=n+s))for(var h=-1;h<=1;h++)i+h<0||e<=i+h||0==s&&0==h||a==t.isDark(n+s,i+h)&&o++;o>5&&(r+=3+o-5)}for(n=0;n<e-1;n++)for(i=0;i<e-1;i++){var l=0;t.isDark(n,i)&&l++,t.isDark(n+1,i)&&l++,t.isDark(n,i+1)&&l++,t.isDark(n+1,i+1)&&l++,0!=l&&4!=l||(r+=3)}for(n=0;n<e;n++)for(i=0;i<e-6;i++)t.isDark(n,i)&&!t.isDark(n,i+1)&&t.isDark(n,i+2)&&t.isDark(n,i+3)&&t.isDark(n,i+4)&&!t.isDark(n,i+5)&&t.isDark(n,i+6)&&(r+=40);for(i=0;i<e;i++)for(n=0;n<e-6;n++)t.isDark(n,i)&&!t.isDark(n+1,i)&&t.isDark(n+2,i)&&t.isDark(n+3,i)&&t.isDark(n+4,i)&&!t.isDark(n+5,i)&&t.isDark(n+6,i)&&(r+=40);var u=0;for(i=0;i<e;i++)for(n=0;n<e;n++)t.isDark(n,i)&&u++;return r+=10*(Math.abs(100*u/e/e-50)/5)}},d={glog:function(t){if(t<1)throw new Error("glog("+t+")");return d.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return d.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},p=0;p<8;p++)d.EXP_TABLE[p]=1<<p;for(p=8;p<256;p++)d.EXP_TABLE[p]=d.EXP_TABLE[p-4]^d.EXP_TABLE[p-5]^d.EXP_TABLE[p-6]^d.EXP_TABLE[p-8];for(p=0;p<255;p++)d.LOG_TABLE[d.EXP_TABLE[p]]=p;function m(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var n=0;n<t.length-r;n++)this.num[n]=t[n+r]}function _(t,e){this.totalCount=t,this.dataCount=e}function v(){this.buffer=[],this.length=0}m.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var n=0;n<t.getLength();n++)e[r+n]^=d.gexp(d.glog(this.get(r))+d.glog(t.get(n)));return new m(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=d.glog(this.get(0))-d.glog(t.get(0)),r=new Array(this.getLength()),n=0;n<this.getLength();n++)r[n]=this.get(n);for(n=0;n<t.getLength();n++)r[n]^=d.gexp(d.glog(t.get(n))+e);return new m(r,0).mod(t)}},_.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],_.getRSBlocks=function(t,e){var r=_.getRsBlockTable(t,e);if(null==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var n=r.length/3,i=[],o=0;o<n;o++)for(var a=r[3*o+0],s=r[3*o+1],h=r[3*o+2],l=0;l<a;l++)i.push(new _(s,h));return i},_.getRsBlockTable=function(t,e){switch(e){case i.L:return _.RS_BLOCK_TABLE[4*(t-1)+0];case i.M:return _.RS_BLOCK_TABLE[4*(t-1)+1];case i.Q:return _.RS_BLOCK_TABLE[4*(t-1)+2];case i.H:return _.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},v.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var C=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function w(){var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var r=e.toString().match(/android ([0-9]\.[0-9])/i);r&&r[1]&&(t=parseFloat(r[1]))}return t}var D,b=((D=function(t,e){this._el=t,this._htOption=e}).prototype.draw=function(t){var e=this._htOption,r=this._el,n=t.getModuleCount();function i(t,e){var r=document.createElementNS("http://www.w3.org/2000/svg",t);for(var n in e)e.hasOwnProperty(n)&&r.setAttribute(n,e[n]);return r}Math.floor(e.width/n),Math.floor(e.height/n),this.clear();var o=i("svg",{viewBox:"0 0 "+String(n)+" "+String(n),width:"100%",height:"100%",fill:e.colorLight});o.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),r.appendChild(o),o.appendChild(i("rect",{fill:e.colorLight,width:"100%",height:"100%"})),o.appendChild(i("rect",{fill:e.colorDark,width:"1",height:"1",id:"template"}));for(var a=0;a<n;a++)for(var s=0;s<n;s++)if(t.isDark(a,s)){var h=i("use",{x:String(s),y:String(a)});h.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),o.appendChild(h)}},D.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},D),A="svg"===document.documentElement.tagName.toLowerCase()?b:"undefined"==typeof CanvasRenderingContext2D?function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){for(var e=this._htOption,r=this._el,n=t.getModuleCount(),i=Math.floor(e.width/n),o=Math.floor(e.height/n),a=['<table style="border:0;border-collapse:collapse;">'],s=0;s<n;s++){a.push("<tr>");for(var h=0;h<n;h++)a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+i+"px;height:"+o+"px;background-color:"+(t.isDark(s,h)?e.colorDark:e.colorLight)+';"></td>');a.push("</tr>")}a.push("</table>"),r.innerHTML=a.join("");var l=r.childNodes[0],u=(e.width-l.offsetWidth)/2,g=(e.height-l.offsetHeight)/2;u>0&&g>0&&(l.style.margin=g+"px "+u+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}():function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}if(this._android&&this._android<=2.1){var e=1/window.devicePixelRatio,r=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(t,n,i,o,a,s,h,l,u){if("nodeName"in t&&/img/i.test(t.nodeName))for(var g=arguments.length-1;g>=1;g--)arguments[g]=arguments[g]*e;else void 0===l&&(arguments[1]*=e,arguments[2]*=e,arguments[3]*=e,arguments[4]*=e);r.apply(this,arguments)}}var n=function(t,e){this._bIsPainted=!1,this._android=w(),this._htOption=e,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=e.width,this._elCanvas.height=e.height,t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return n.prototype.draw=function(t){var e=this._elImage,r=this._oContext,n=this._htOption,i=t.getModuleCount(),o=n.width/i,a=n.height/i,s=Math.round(o),h=Math.round(a);e.style.display="none",this.clear();for(var l=0;l<i;l++)for(var u=0;u<i;u++){var g=t.isDark(l,u),c=u*o,f=l*a;r.strokeStyle=g?n.colorDark:n.colorLight,r.lineWidth=1,r.fillStyle=g?n.colorDark:n.colorLight,r.fillRect(c,f,o,a),r.strokeRect(Math.floor(c)+.5,Math.floor(f)+.5,s,h),r.strokeRect(Math.ceil(c)-.5,Math.ceil(f)-.5,s,h)}this._bIsPainted=!0},n.prototype.makeImage=function(){this._bIsPainted&&function(t,e){var r=this;if(r._fFail=e,r._fSuccess=t,null===r._bSupportDataURI){var n=document.createElement("img"),i=function(){r._bSupportDataURI=!1,r._fFail&&r._fFail.call(r)};return n.onabort=i,n.onerror=i,n.onload=function(){r._bSupportDataURI=!0,r._fSuccess&&r._fSuccess.call(r)},void(n.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}!0===r._bSupportDataURI&&r._fSuccess?r._fSuccess.call(r):!1===r._bSupportDataURI&&r._fFail&&r._fFail.call(r)}.call(this,t)},n.prototype.isPainted=function(){return this._bIsPainted},n.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},n.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},n}();function L(t,e){for(var r=1,n=function(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}(t),o=0,a=C.length;o<=a;o++){var s=0;switch(e){case i.L:s=C[o][0];break;case i.M:s=C[o][1];break;case i.Q:s=C[o][2];break;case i.H:s=C[o][3]}if(n<=s)break;r++}if(r>C.length)throw new Error("Too long data");return r}return(t=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:i.H},"string"==typeof e&&(e={text:e}),e)for(var r in e)this._htOption[r]=e[r];"string"==typeof t&&(t=document.getElementById(t)),this._htOption.useSVG&&(A=b),this._android=w(),this._el=t,this._oQRCode=null,this._oDrawing=new A(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)}).prototype.makeCode=function(t){this._oQRCode=new r(L(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode),this.makeImage()},t.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},t.prototype.clear=function(){this._oDrawing.clear()},t.CorrectLevel=i,t}),define("DS/MobilePairing/MobilePairing",["UWA/Core","DS/MobilePairing/QRCode/QRCode","DS/MobilePairing/UrlShortener/UrlShortener","i18n!DS/MobilePairing/assets/nls/mobilePairing","css!DS/MobilePairing/MobilePairing"],function(t,e,r,n){"use strict";return{buildMobilePairingDialog:function(i,o){var a,s=i.getBody().getElement(".template-cont");s.empty(!0),i.getFooter().hide(),s.removeClassName("support"),s.removeClassName("about"),s.removeClassName("update-planned"),s.setStyle("padding","0px"),s.setStyle("height","auto"),s.addClassName("mobile-pairing"),t.createElement("div",{class:"mobile-pairing-description",text:n.description}).inject(s),new e(s,{width:200,height:200,correctLevel:e.CorrectLevel.L}).makeCode(function(t){return JSON.stringify({myappsUrl:t.myAppsBaseURL,login:dsUserLogin,firstName:t.firstName,lastName:t.lastName,lang:dsLang,platformId:t.tenant})}(o)),s.title="",a=r.shorten(o.myAppsBaseURL),t.createElement("span",{class:"mobile-pairing-encoded",text:a}).inject(s)}}});
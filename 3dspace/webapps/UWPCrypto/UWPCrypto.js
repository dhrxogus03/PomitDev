define("DS/UWPCrypto/UWPCrypto",function(){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n=function(r,n){return r<<n|r>>>32-n},t=function(r,n){var t,e,o,a,f;return o=2147483648&r,a=2147483648&n,f=(1073741823&r)+(1073741823&n),(t=1073741824&r)&(e=1073741824&n)?2147483648^f^o^a:t|e?1073741824&f?3221225472^f^o^a:1073741824^f^o^a:f^o^a},e=function(r,e,o,a,f,c,u){return r=t(r,t(t(function(r,n,t){return r&n|~r&t}(e,o,a),f),u)),t(n(r,c),e)},o=function(r,e,o,a,f,c,u){return r=t(r,t(t(function(r,n,t){return r&t|n&~t}(e,o,a),f),u)),t(n(r,c),e)},a=function(r,e,o,a,f,c,u){return r=t(r,t(t(function(r,n,t){return r^n^t}(e,o,a),f),u)),t(n(r,c),e)},f=function(r,e,o,a,f,c,u){return r=t(r,t(t(function(r,n,t){return n^(r|~t)}(e,o,a),f),u)),t(n(r,c),e)},c=function(r){var n,t="",e="";for(n=0;n<=3;n++)t+=(e="0"+(r>>>8*n&255).toString(16)).substr(e.length-2,2);return t},u={md5:function(r){var n,i,h,C,d,g,A,S,m,l,s;for(S=1732584193,m=4023233417,l=2562383102,s=271733878,n=(i=function(r){for(var n,t=r.length,e=t+8,o=16*((e-e%64)/64+1),a=new Array(o-1),f=0,c=0;c<t;)f=c%4*8,a[n=(c-c%4)/4]=a[n]|r.charCodeAt(c)<<f,c++;return f=c%4*8,a[n=(c-c%4)/4]=a[n]|128<<f,a[o-2]=t<<3,a[o-1]=t>>>29,a}(r=u.utf8Encode(r))).length,h=0;h<n;h+=16)C=S,d=m,g=l,A=s,S=e(S,m,l,s,i[h+0],7,3614090360),s=e(s,S,m,l,i[h+1],12,3905402710),l=e(l,s,S,m,i[h+2],17,606105819),m=e(m,l,s,S,i[h+3],22,3250441966),S=e(S,m,l,s,i[h+4],7,4118548399),s=e(s,S,m,l,i[h+5],12,1200080426),l=e(l,s,S,m,i[h+6],17,2821735955),m=e(m,l,s,S,i[h+7],22,4249261313),S=e(S,m,l,s,i[h+8],7,1770035416),s=e(s,S,m,l,i[h+9],12,2336552879),l=e(l,s,S,m,i[h+10],17,4294925233),m=e(m,l,s,S,i[h+11],22,2304563134),S=e(S,m,l,s,i[h+12],7,1804603682),s=e(s,S,m,l,i[h+13],12,4254626195),l=e(l,s,S,m,i[h+14],17,2792965006),m=e(m,l,s,S,i[h+15],22,1236535329),S=o(S,m,l,s,i[h+1],5,4129170786),s=o(s,S,m,l,i[h+6],9,3225465664),l=o(l,s,S,m,i[h+11],14,643717713),m=o(m,l,s,S,i[h+0],20,3921069994),S=o(S,m,l,s,i[h+5],5,3593408605),s=o(s,S,m,l,i[h+10],9,38016083),l=o(l,s,S,m,i[h+15],14,3634488961),m=o(m,l,s,S,i[h+4],20,3889429448),S=o(S,m,l,s,i[h+9],5,568446438),s=o(s,S,m,l,i[h+14],9,3275163606),l=o(l,s,S,m,i[h+3],14,4107603335),m=o(m,l,s,S,i[h+8],20,1163531501),S=o(S,m,l,s,i[h+13],5,2850285829),s=o(s,S,m,l,i[h+2],9,4243563512),l=o(l,s,S,m,i[h+7],14,1735328473),m=o(m,l,s,S,i[h+12],20,2368359562),S=a(S,m,l,s,i[h+5],4,4294588738),s=a(s,S,m,l,i[h+8],11,2272392833),l=a(l,s,S,m,i[h+11],16,1839030562),m=a(m,l,s,S,i[h+14],23,4259657740),S=a(S,m,l,s,i[h+1],4,2763975236),s=a(s,S,m,l,i[h+4],11,1272893353),l=a(l,s,S,m,i[h+7],16,4139469664),m=a(m,l,s,S,i[h+10],23,3200236656),S=a(S,m,l,s,i[h+13],4,681279174),s=a(s,S,m,l,i[h+0],11,3936430074),l=a(l,s,S,m,i[h+3],16,3572445317),m=a(m,l,s,S,i[h+6],23,76029189),S=a(S,m,l,s,i[h+9],4,3654602809),s=a(s,S,m,l,i[h+12],11,3873151461),l=a(l,s,S,m,i[h+15],16,530742520),m=a(m,l,s,S,i[h+2],23,3299628645),S=f(S,m,l,s,i[h+0],6,4096336452),s=f(s,S,m,l,i[h+7],10,1126891415),l=f(l,s,S,m,i[h+14],15,2878612391),m=f(m,l,s,S,i[h+5],21,4237533241),S=f(S,m,l,s,i[h+12],6,1700485571),s=f(s,S,m,l,i[h+3],10,2399980690),l=f(l,s,S,m,i[h+10],15,4293915773),m=f(m,l,s,S,i[h+1],21,2240044497),S=f(S,m,l,s,i[h+8],6,1873313359),s=f(s,S,m,l,i[h+15],10,4264355552),l=f(l,s,S,m,i[h+6],15,2734768916),m=f(m,l,s,S,i[h+13],21,1309151649),S=f(S,m,l,s,i[h+4],6,4149444226),s=f(s,S,m,l,i[h+11],10,3174756917),l=f(l,s,S,m,i[h+2],15,718787259),m=f(m,l,s,S,i[h+9],21,3951481745),S=t(S,C),m=t(m,d),l=t(l,g),s=t(s,A);return(c(S)+c(m)+c(l)+c(s)).toLowerCase()},base64Encode:function(n){var t,e,o,a,f,c,i,h="",C=0;for(n=u.utf8Encode(n);C<n.length;)a=(t=n.charCodeAt(C++))>>2,f=(3&t)<<4|(e=n.charCodeAt(C++))>>4,c=(15&e)<<2|(o=n.charCodeAt(C++))>>6,i=63&o,isNaN(e)?c=i=64:isNaN(o)&&(i=64),h=h+r.charAt(a)+r.charAt(f)+r.charAt(c)+r.charAt(i);return h},base64Decode:function(n){var t,e,o,a,f,c,i="",h=0;for(n=n.replace(/[^A-Za-z0-9\+\/\=]/g,"");h<n.length;)t=r.indexOf(n.charAt(h++))<<2|(a=r.indexOf(n.charAt(h++)))>>4,e=(15&a)<<4|(f=r.indexOf(n.charAt(h++)))>>2,o=(3&f)<<6|(c=r.indexOf(n.charAt(h++))),i+=String.fromCharCode(t),64!==f&&(i+=String.fromCharCode(e)),64!==c&&(i+=String.fromCharCode(o));return i=u.utf8Decode(i)},utf8Encode:function(r){var n,t,e="";for(r=r.replace(/\r\n/g,"\n"),t=0;t<r.length;t++)(n=r.charCodeAt(t))<128?e+=String.fromCharCode(n):n>127&&n<2048?(e+=String.fromCharCode(n>>6|192),e+=String.fromCharCode(63&n|128)):(e+=String.fromCharCode(n>>12|224),e+=String.fromCharCode(n>>6&63|128),e+=String.fromCharCode(63&n|128));return e},utf8Decode:function(r){for(var n="",t=0,e=0,o=0,a=0;t<r.length;)(e=r.charCodeAt(t))<128?(n+=String.fromCharCode(e),t++):e>191&&e<224?(o=r.charCodeAt(t+1),n+=String.fromCharCode((31&e)<<6|63&o),t+=2):(o=r.charCodeAt(t+1),a=r.charCodeAt(t+2),n+=String.fromCharCode((15&e)<<12|(63&o)<<6|63&a),t+=3);return n}};return u});
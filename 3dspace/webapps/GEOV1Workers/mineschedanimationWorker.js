!function(e){"use strict";e.onmessage=function(a){require(["DS/GEO7zip/GEO7zip"],function(r){var t=a.data.meshName,s=a.data.arraybuffer,o=a.data.id,l=a.data.ply,n=a.data.parameters;if(l){var i=e._parsePLY(l,n);postMessage({meshInputs:i,id:o})}else if(s){if(!e.geo7Zip){e.geo7Zip=new r(s);var p=e.geo7Zip.listEntries.length;postMessage({zipSize:p,id:o})}}else e.geo7Zip.unzipEntry(t,s).then(function(a){var r=e.geo7Zip.listEntries.length;postMessage({data:a,zipSize:r,id:o})})})},e._parsePLY=function(e,a){var r=a.color.r,t=a.color.g,s=a.color.b,o=a.color.a,l=a.Scale;void 0===l&&(l=1);var n,i,p,d=e.split("\n"),c=/([+-]?\d*\.\d+)(?![-+0-9.])(\s+)+([+-]?\d*\.\d+)(?![-+0-9.])(\s+)+([+-]?\d*\.\d+)(?![-+0-9.])/,v=/(3)(\s+)(\d+)(\s+)(\d+)(\s+)(\d+)/;null!==(n=/(element)(\s+)(vertex)(\s+)(\d+)/.exec(e))&&(i=parseInt(n[5])),null!==(n=/(element)(\s+)(face)(\s+)(\d+)/.exec(e))&&(p=parseInt(n[5]));for(var f=-1,u=0;u<d.length&&-1===f;u++){var F=d[u];-1!==(F=F.trim()).search("end_header")&&(f=u+1)}for(var g=new Float32Array(3*i),m=new Float32Array(3*p),h=f;h<f+i;h++){var y=d[h];y=y.trim(),null!==(n=c.exec(y))&&(g[3*(h-f)]=parseFloat(n[1]),g[3*(h-f)+1]=parseFloat(n[3]),g[3*(h-f)+2]=parseFloat(n[5]))}for(var z=p,w=new Float32Array(3*z*3),x=new Float32Array(3*z*3),A=new Float32Array(4*z*3),E=f+i;E<f+i+p;E++){var Z=d[E];if(Z=Z.trim(),null!==(n=v.exec(Z))){var S=parseFloat(n[3]),b=parseFloat(n[5]),I=parseFloat(n[7]);m[3*(E-f-i)]=parseFloat(n[3]),m[3*(E-f-i)+1]=parseFloat(n[5]),m[3*(E-f-i)+2]=parseFloat(n[7]),w[9*(E-f-i)]=1e3*l*g[3*S],w[9*(E-f-i)+1]=1e3*l*g[3*S+1],w[9*(E-f-i)+2]=1e3*l*g[3*S+2],w[9*(E-f-i)+3]=1e3*l*g[3*b],w[9*(E-f-i)+4]=1e3*l*g[3*b+1],w[9*(E-f-i)+5]=1e3*l*g[3*b+2],w[9*(E-f-i)+6]=1e3*l*g[3*I],w[9*(E-f-i)+7]=1e3*l*g[3*I+1],w[9*(E-f-i)+8]=1e3*l*g[3*I+2],x[9*(E-f-i)]=-(g[3*b+1]-g[3*S+1])*(g[3*I+2]-g[3*S+2])+(g[3*b+2]-g[3*S+2])*(g[3*I+1]-g[3*S+1]),x[9*(E-f-i)+1]=(g[3*b+2]-g[3*S+2])*(g[3*I]-g[3*S])-(g[3*b]-g[3*S])*(g[3*I+2]-g[3*S+2]),x[9*(E-f-i)+2]=(g[3*b]-g[3*S])*(g[3*I+1]-g[3*S+1])-(g[3*b+1]-g[3*S+1])*(g[3*I]-g[3*S]),x[9*(E-f-i)+3]=x[9*(E-f-i)],x[9*(E-f-i)+4]=x[9*(E-f-i)+1],x[9*(E-f-i)+5]=x[9*(E-f-i)+2],x[9*(E-f-i)+6]=x[9*(E-f-i)],x[9*(E-f-i)+7]=x[9*(E-f-i)+1],x[9*(E-f-i)+8]=x[9*(E-f-i)+2],A[12*(E-f-i)]=r,A[12*(E-f-i)+1]=t,A[12*(E-f-i)+2]=s,A[12*(E-f-i)+3]=o,A[12*(E-f-i)+4]=r,A[12*(E-f-i)+5]=t,A[12*(E-f-i)+6]=s,A[12*(E-f-i)+7]=o,A[12*(E-f-i)+8]=r,A[12*(E-f-i)+9]=t,A[12*(E-f-i)+10]=s,A[12*(E-f-i)+11]=o}}return{nbFaces:z,vertices:w,normals:x,colors:A}}}(this);
__d(function(n,r,t,u){"use strict";var c=(r(14),[]),e=-1;u.createCursor=function(n){return{current:n}},u.isEmpty=function(){return e===-1},u.pop=function(n,r){e<0||(n.current=c[e],c[e]=null,e--)},u.push=function(n,r,t){e++,c[e]=n.current,n.current=r},u.reset=function(){for(;e>-1;)c[e]=null,e--}},63);
__d(function(e,n,t,i){"use strict";var o=n(17),r=n(31),c=o.AccessibilityInfo,s="touchExplorationDidChange",u=new Map,a={fetch:function(){return new Promise(function(e,n){c.isTouchExplorationEnabled(function(n){e(n)})})},addEventListener:function(e,n){var t=r.addListener(s,function(e){n(e)});u.set(n,t)},removeEventListener:function(e,n){var t=u.get(n);t&&(t.remove(),u.delete(n))}};t.exports=a},16);
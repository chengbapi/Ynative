__d(function(e,n,r,t){"use strict";var i=n(70),o=i.mountChildFibersInPlace,l=i.reconcileChildFibers,s=i.reconcileChildFibersInPlace,u=i.cloneChildFibers,a=n(53),d=a.beginUpdateQueue,c=n(62),p=n(56),f=p.getMaskedContext,g=p.getUnmaskedContext,h=p.hasContextChanged,m=p.pushContextProvider,P=p.pushTopLevelContextObject,y=p.invalidateContextProvider,C=c.IndeterminateComponent,v=c.FunctionalComponent,k=c.ClassComponent,b=c.HostRoot,z=c.HostComponent,W=c.HostText,x=c.HostPortal,N=c.CoroutineComponent,T=c.CoroutineHandlerPhase,I=c.YieldComponent,F=c.Fragment,R=n(55),w=R.NoWork,E=R.OffscreenPriority,H=n(54),S=H.Placement,D=H.ContentReset,U=H.Err,L=H.Ref,j=n(61),M=n(76),O=n(13);r.exports=function(e,n,r,t){function i(e,n,r){n.progressedChild=n.child,n.progressedPriority=r,null!==e&&(e.progressedChild=n.progressedChild,e.progressedPriority=n.progressedPriority)}function a(e){e.progressedFirstDeletion=e.progressedLastDeletion=null}function c(e){e.firstEffect=e.progressedFirstDeletion,e.lastEffect=e.progressedLastDeletion}function p(e,n,r){var t=n.pendingWorkPriority;R(e,n,r,t)}function R(e,n,r,t){n.memoizedProps=null,null===e?n.child=o(n,n.child,r,t):e.child===n.child?(a(n),n.child=l(n,n.child,r,t),c(n)):(n.child=s(n,n.child,r,t),c(n)),i(e,n,t)}function H(e,n){var r=n.pendingProps;if(h())null===r&&(r=n.memoizedProps);else if(null===r||n.memoizedProps===r)return X(e,n);return p(e,n,r),$(n,r),n.child}function Q(e,n){var r=n.ref;null===r||e&&e.ref===r||(n.effectTag|=L)}function _(e,n){var r=n.type,t=n.pendingProps,i=n.memoizedProps;if(h())null===t&&(t=i);else{if(null===t||i===t)return X(e,n);if("function"==typeof r.shouldComponentUpdate&&!r.shouldComponentUpdate(i,t))return $(n,t),X(e,n)}var o,l=g(n),s=f(n,l);return o=r(t,s),p(e,n,o),$(n,t),n.child}function A(e,n,r){var t=m(n),i=void 0;return null===e?n.stateNode?i=pe(n,r):(de(n),ce(n,r),i=!0):i=fe(e,n,r),Y(e,n,i,t)}function Y(e,n,r,t){if(Q(e,n),!r)return X(e,n);var i=n.stateNode;j.current=n;var o=void 0;return o=i.render(),p(e,n,o),ee(n,i.state),$(n,i.props),t&&y(n),n.child}function q(e,n,r){var t=n.stateNode;t.pendingContext?P(n,t.pendingContext,t.pendingContext!==t.context):t.context&&P(n,t.context,!1),se(n,t.containerInfo);var i=n.updateQueue;if(null!==i){var o=n.memoizedState,l=d(n,i,null,o,null,r);if(o===l)return X(e,n);var s=l.element;return p(e,n,s),ee(n,l),n.child}return X(e,n)}function B(e,n){le(n);var r=n.pendingProps,t=null!==e?e.memoizedProps:null,i=n.memoizedProps;if(h())null===r&&(r=i,O(null!==r,"We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue."));else if(null===r||i===r){if(!ie&&oe(n.type,i)&&n.pendingWorkPriority!==E){for(var o=n.progressedChild;null!==o;)o.pendingWorkPriority=E,o=o.sibling;return null}return X(e,n)}var l=r.children,s=te(r);if(s?l=null:t&&te(t)&&(n.effectTag|=D),Q(e,n),!ie&&oe(n.type,r)&&n.pendingWorkPriority!==E){if(n.progressedPriority===E&&(n.child=n.progressedChild),R(e,n,l,E),$(n,r),n.child=null!==e?e.child:null,null===e)for(var u=n.progressedChild;null!==u;)u.effectTag=S,u=u.sibling;return null}return p(e,n,l),$(n,r),n.child}function G(e,n){var r=n.pendingProps;return null===r&&(r=n.memoizedProps),$(n,r),null}function J(e,n,r){O(null===e,"An indeterminate component should never have mounted. This error is likely caused by a bug in React. Please file an issue.");var t,i=n.type,o=n.pendingProps,l=g(n),s=f(n,l);if(t=i(o,s),"object"==typeof t&&null!==t&&"function"==typeof t.render){n.tag=k;var u=m(n);return ae(n,t),ce(n,r),Y(e,n,!0,u)}return n.tag=v,p(e,n,t),$(n,o),n.child}function K(e,n){var r=n.pendingProps;h()?null===r&&(r=e&&e.memoizedProps,O(null!==r,"We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue.")):null!==r&&n.memoizedProps!==r||(r=n.memoizedProps);var t=r.children,i=n.pendingWorkPriority;return n.memoizedProps=null,null===e?n.stateNode=o(n,n.stateNode,t,i):e.child===n.child?(a(n),n.stateNode=l(n,n.stateNode,t,i),c(n)):(n.stateNode=s(n,n.stateNode,t,i),c(n)),$(n,r),n.stateNode}function V(e,n){se(n,n.stateNode.containerInfo);var r=n.pendingWorkPriority,t=n.pendingProps;if(h())null===t&&(t=e&&e.memoizedProps,O(null!=t,"We should always have pending or current props. This error is likely caused by a bug in React. Please file an issue."));else if(null===t||n.memoizedProps===t)return X(e,n);return null===e?(n.child=s(n,n.child,t,r),$(n,t),i(e,n,r)):(p(e,n,t),$(n,t)),n.child}function X(e,n){var r=n.pendingWorkPriority;return e&&n.child===e.child&&a(n),u(e,n),i(e,n,r),n.child}function Z(e,n){switch(n.tag){case k:m(n);break;case x:se(n,n.stateNode.containerInfo)}return null}function $(e,n){e.memoizedProps=n,e.pendingProps=null}function ee(e,n){e.memoizedState=n}function ne(e,n,r){if(n.pendingWorkPriority===w||n.pendingWorkPriority>r)return Z(e,n);switch(n.firstEffect=null,n.lastEffect=null,n.progressedPriority===r&&(n.child=n.progressedChild),n.tag){case C:return J(e,n,r);case v:return _(e,n);case k:return A(e,n,r);case b:return q(e,n,r);case z:return B(e,n);case W:return G(e,n);case T:n.tag=N;case N:return K(e,n);case I:return null;case x:return V(e,n);case F:return H(e,n);default:O(!1,"Unknown unit of work tag. This error is likely caused by a bug in React. Please file an issue.")}}function re(e,n,r){if(O(n.tag===k||n.tag===b,"Invalid type of work. This error is likely caused by a bug in React. Please file an issue."),n.effectTag|=U,n.pendingWorkPriority===w||n.pendingWorkPriority>r)return Z(e,n);n.firstEffect=null,n.lastEffect=null;var t=null;if(p(e,n,t),n.tag===k){var i=n.stateNode;n.memoizedProps=i.props,n.memoizedState=i.state,n.pendingProps=null}return n.child}var te=e.shouldSetTextContent,ie=e.useSyncScheduling,oe=e.shouldDeprioritizeSubtree,le=n.pushHostContext,se=n.pushHostContainer,ue=M(r,t,$,ee),ae=ue.adoptClassInstance,de=ue.constructClassInstance,ce=ue.mountClassInstance,pe=ue.resumeMountClassInstance,fe=ue.updateClassInstance;return{beginWork:ne,beginFailedWork:re}}},69);
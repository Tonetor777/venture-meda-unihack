import{a1 as w,a2 as P,r as s,cm as _,aj as S,cY as E,aH as x,cZ as M,c_ as R,c$ as k,aR as $,d0 as j,bL as v,cX as U,be as y,b8 as D,at as F}from"./sanity-SL-LWqSk.js";function I(c){return w(function(t,r){var i=!1,n=0;t.subscribe(P(r,function(a){return(i||(i=!c(a,n++)))&&r.next(a)}))})}const L=c=>{const{comlink:t,refs:r,perspective:i}=c,n=_(),a=S(),u=s.useMemo(()=>new E,[]),d=s.useMemo(()=>u.asObservable().pipe(x(b=>R(b.map(e=>{const m={...e,_id:k(e._id)},f=i==="published"?$:n.observeForPreview(m,a.get(m._type)).pipe(j(),I(o=>o.snapshot===null)),h={...e,_id:v(e._id)},g=n.observeForPreview(h,a.get(h._type));return U(g.pipe(y(f)),f).pipe(D(o=>!!o.snapshot),F(o=>{const p=o.snapshot;return{_id:v(p._id),title:p.title,subtitle:p.subtitle,description:p.description,imageUrl:p.imageUrl}}))}))),M(0)),[n,u,a,i]),l=s.useRef([]);return s.useEffect(()=>{const b=d.subscribe(e=>{t.post("presentation/preview-snapshots",{snapshots:e}),l.current=e});return()=>{b.unsubscribe()}},[t,d]),s.useEffect(()=>t.on("visual-editing/preview-snapshots",()=>({snapshots:l.current})),[t]),s.useEffect(()=>{u.next(r)},[r,u]),null};var H=s.memo(L);export{H as default};

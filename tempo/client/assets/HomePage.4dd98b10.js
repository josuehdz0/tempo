import{_ as i,m as d,n as p,h as l,b as _,A as y,q as u,c as e,a as n,F as m,x as v,P as f,o as t,y as P,e as g,f as h,z as x}from"./index.5809a6a3.js";const S={setup(){async function s(){try{await l.getAllPlaylists()}catch(a){f.error(a,"Getting all Playlists")}}return d(()=>{s()}),p(()=>{l.clearPlaylists()}),{playlists:_(()=>y.playlists)}},components:{PlaylistCard:u}},w=s=>(g("data-v-30325724"),s=s(),h(),s),A={class:"container-fluid"},C={class:"row justify-content-center justify-content-md-evenly"},I=w(()=>n("div",{class:"row mt-4 mt-md-none"},null,-1));function k(s,a,B,c,$,b){const r=x("PlaylistCard");return t(),e("div",A,[n("div",C,[(t(!0),e(m,null,v(c.playlists.slice().reverse(),o=>(t(),e("div",{key:o.id,class:"col-10 col-md-5 mt-4 cardbg"},[P(r,{playlist:o},null,8,["playlist"])]))),128)),I])])}const F=i(S,[["render",k],["__scopeId","data-v-30325724"]]);export{F as default};

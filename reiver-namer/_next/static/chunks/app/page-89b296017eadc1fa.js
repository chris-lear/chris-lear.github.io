(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{281:function(e,a,t){Promise.resolve().then(t.bind(t,9923))},9923:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return Home}});var r=t(7437),n=t(5417),l=t.n(n),o=t(9050),i=t(9872),s=t(6507),d=t(6858),u=t(3226),h=t(5133),c=t(2498),m=t(2320),g=t(819),f=t(7739),p=t(8254),x=t(5550),b=t(5171),v=t(2265),C=t(8595),y=t(3948),k=t(429);let j=(0,C.Z)({typography:{fontFamily:"".concat(l().style.fontFamily)}});function toTitleCase(e){return e.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}function pickfrom(e){return e[Math.floor(Math.random()*e.length)]}let w=["Little","Big","Young","Old","Bold","Ramish","Lang","Muckle-Mouthed","Sneaky","Stubborn","Devious","Dim","Unlucky","Boastful","Foolish","Callous","Rude","Vain","Idle","Cowardly","Nasty","Silly","Mad","Wee","Black","Bloody","Lucky","Red"],Z={m:["Sir","Lord","Captain","Squire","Chief"],f:["Lady","Dame","Miss","Madam"]},S=["Archbold","Armstrong","Beattie","Bell","Burns","Carleton","Carlisle","Carnaby","Carrs","Carruthers","Chamberlain","Charlton","Collingwood","Crisp","Crozier","Cuthbert","Hume","Watson","Wilson","Woodrington","Young","Dacre","Davison","Dixon","Dodd","Douglas","Dunne","Elliot","Fenwick","Forster","Graham","Gray","Hall","Hedley","Henderson","Heron","Hetherington","Irvine","Irving","Johnstone","Kerr","Laidlaw","Little","Lowther","Maxwell","Milburn","Musgrove","Nixon","Noble","Ogle","Oliver","Potts","Pringle","Wake","Radcliffe","Reade","Ridley","Robson","Routledge","Rutherford","Salkeld","Scott","Selby","Shaftoe","Storey","Simpson","Tait","Taylor","Trotter","Turnbull"];function Home(){let[e,a]=(0,v.useState)(!0),[t,n]=(0,v.useState)(""),[l,C]=(0,v.useState)(""),[T,M]=(0,v.useState)(""),[R,D]=(0,v.useState)(""),[L,N]=(0,v.useState)(""),[H,B]=(0,v.useState)(""),[F,W]=(0,v.useState)("m"),[Y,G]=(0,v.useState)("");(0,v.useEffect)(()=>{t&&l&&T&&R&&L&&H&&F?a(!1):a(!0)},[t,l,T,R,L,H,F]);let timer=e=>new Promise(a=>setTimeout(a,e));async function makeNames(e){e.preventDefault();for(var a=5;a<20;a++)(function(){let e;.3>Math.random()?e=toTitleCase(t):("John"!==(e=toTitleCase(t.replace(/(^.*?[bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ].*[bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ]).*/,"$1")))&&(e=e.replace(/o/g,"a")),e=e.replace(/[aeiou]([bcdfghjklmnpqrstvwxz])$/,"$&$1")+"ie"),G(((.2>Math.random()?"":Math.random()<5/8?pickfrom(w):toTitleCase(H)+"less")+" "+(.2>Math.random()?"":Math.random()<5/8?pickfrom(Z[F]):Math.random()<2/3?toTitleCase(l)+"'s":toTitleCase(T)+"'s "+toTitleCase(l)+"'s")+" "+e+" "+(.5>Math.random()?pickfrom(S):.5>Math.random()?"the "+toTitleCase(R):"o'"+toTitleCase(L))).replace(/\s\s*/g," "))})(),await timer(30*a)}return(0,r.jsx)(y.Z,{theme:j,children:(0,r.jsx)(s.Z,{sx:{display:"flex",backgroundImage:'url("'.concat("/reiver-namer/_next/static/media/background.7c539de6.jpg",'")'),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",minHeight:"95vh"},children:(0,r.jsxs)(i.Z,{elevation:3,sx:{p:3,maxWidth:"900px",width:"80%",marginLeft:"auto",marginRight:"auto",backgroundColor:"rgba(255,255,255,0.9)"},children:[(0,r.jsx)(u.Z,{variant:"h2",children:"Reiver Namer"}),(0,r.jsx)("form",{onSubmit:makeNames,children:(0,r.jsxs)(c.Z,{spacing:2,children:[(0,r.jsx)(d.Z,{onChange:e=>n(e.target.value),label:"First name",helperText:"One syllable version only",variant:"filled"}),(0,r.jsx)(d.Z,{onChange:e=>C(e.target.value),label:"Dad's name",helperText:"Your Dad's first name",variant:"filled"}),(0,r.jsx)(d.Z,{onChange:e=>M(e.target.value),label:"Grandad's name",helperText:"Your paternal grandfather's first name",variant:"filled"}),(0,r.jsx)(d.Z,{onChange:e=>D(e.target.value),label:"Profession",helperText:"Your profession",variant:"filled"}),(0,r.jsx)(d.Z,{onChange:e=>N(e.target.value),label:"Town",helperText:"Your town of birth",variant:"filled"}),(0,r.jsx)(d.Z,{onChange:e=>B(e.target.value),label:"Thing you want",helperText:"A one-word thing you'd like to own",variant:"filled"}),(0,r.jsxs)(m.Z,{fullWidth:!0,variant:"filled",children:[(0,r.jsx)(g.Z,{children:"Gender"}),(0,r.jsxs)(p.Z,{value:F,label:"Gender",onChange:e=>W(e.target.value),children:[(0,r.jsx)(f.Z,{value:"m",children:"Male"}),(0,r.jsx)(f.Z,{value:"f",children:"Female"})]}),(0,r.jsx)(x.Z,{children:"Your gender"})]}),(0,r.jsx)(o.Z,{variant:"contained",disabled:e,type:"submit",children:"Go!"})]})}),Y?(0,r.jsx)(b.Z,{open:!!Y,onClose:()=>G(""),"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,r.jsxs)(h.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"300px",height:"400px",bgcolor:"background.paper",boxShadow:24,p:4},children:[(0,r.jsx)(u.Z,{variant:"h3",children:"Your Reiver Name is..."}),(0,r.jsx)(u.Z,{variant:"h4",sx:{p:6,textAlign:"center"},children:Y})]})}):"",Y?(0,r.jsx)(k.Z,{url:"https://www.youtube.com/shorts/trENa1LZYRk",playing:!0,width:"1px",height:"1px"}):""]})})})}}},function(e){e.O(0,[344,971,864,744],function(){return e(e.s=281)}),_N_E=e.O()}]);
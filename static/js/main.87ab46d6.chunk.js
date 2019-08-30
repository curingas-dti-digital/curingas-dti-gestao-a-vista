(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{192:function(e,t,a){e.exports=a(328)},197:function(e,t,a){},328:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(34),i=a.n(c),o=(a(197),a(6)),l=a(7),s=a(13),u=a(12),m=a(14),f=a(11),h=a(1),d=Object(f.createMuiTheme)({palette:{primary:{main:"#504d94"},secondary:{main:"#1c68b1"},error:{main:"#e72372"}},typography:{fontFamily:'"Poppins"',useNextVariants:!0}}),p=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.evento,a=e.classes;return r.a.createElement(h.c,null,r.a.createElement(h.f,{className:a.media,image:t.Imagem}),r.a.createElement(h.d,null,r.a.createElement(h.p,{color:"primary",style:{fontSize:24,fontWeight:900}},t.Responsavel),r.a.createElement(h.p,{style:{fontSize:24,fontWeight:200}},t.Data.format("DD/MM")),r.a.createElement(h.p,{style:{fontSize:20,fontWeight:400}},t.Descricao)))}}]),t}(r.a.Component),g=Object(f.withStyles)(function(){return{media:{paddingTop:"100%"}}})(p),E=a(25),b=a.n(E),y=a(16),v=a(18),j=a.n(v),O=new(function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"listarEvento",value:function(){var e=this;return b.a.get("https://sheets.googleapis.com/v4/spreadsheets/1ZABfkaqfHYAmcclLlGCviI4E9aTT64j_we4Hb2TRrSw/values/'Eventos'!A2:F?key=AIzaSyBGIJGZ64VWP-O9KQPcmr6YaVeZh_O0KLw").then(function(t){return y.chain(t.data.values).map(e.parseEvento).value()}).catch(function(e){console.log(e)})}},{key:"parseEvento",value:function(e){return{Imagem:"https://docs.google.com/uc?id=".concat(e[0].split("d/")[1].split("/")[0]),Responsavel:e[1],Data:j()(e[2],"DD/MM/YYYY"),Descricao:e[3]}}}]),e}()),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={criarEvento:!1,eventos:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;O.listarEvento().then(function(t){e.setState({eventos:t})})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(h.h,{container:!0,spacing:16,justify:"center",className:e.grid},y.chain(this.state.eventos).orderBy(function(e){return e.Data}).map(function(e){return r.a.createElement(h.h,{item:!0,xs:4},r.a.createElement(g,{evento:e}))}).value()))}}]),t}(r.a.Component),S=(Object(f.withStyles)(function(e){return{grid:{padding:e.spacing.unit,height:"calc(100vh - 48px - ".concat(2*e.spacing.unit,"px)"),width:"100%"}}})(k),function(e){switch(e){case 1:return{backgroundColor:"#e95d6a"};case 2:return{backgroundColor:"#f6b26b"};case 3:return{backgroundColor:"#57bb8a"};default:return{backgroundColor:"#ffffff"}}}),C=function(e){var t=e.squad;return[r.a.createElement(h.h,{item:!0,container:!0,xs:2,style:{minHeight:72}},r.a.createElement(h.h,{item:!0,container:!0,justify:"center",direction:"column",align:"right"},r.a.createElement(h.p,{style:{fontSize:22,fontWeight:900}},t.Squad.replace("Curingas - ","")))),r.a.createElement(h.h,{item:!0,container:!0,xs:10,justify:"center"},r.a.createElement(h.h,{item:!0,xs:!0,style:S(t.GroomingEPlanning)}),r.a.createElement(h.h,{item:!0,xs:!0,style:S(t.TamanhoDasEstorias)}),r.a.createElement(h.h,{item:!0,xs:!0,style:S(t.Burndown)}),r.a.createElement(h.h,{item:!0,xs:!0,style:S(t.ReuniaoDiaria)}),r.a.createElement(h.h,{item:!0,xs:!0,style:S(t.GestaoAVista)}),r.a.createElement(h.h,{item:!0,xs:!0,style:S(t.WorkInProgress)}),r.a.createElement(h.h,{item:!0,xs:!0,style:S(t.DtiFlow)}),r.a.createElement(h.h,{item:!0,xs:!0,style:S(t.TestesAutomatizados)}),r.a.createElement(h.h,{item:!0,xs:!0,style:S(t.SonarQube)}),r.a.createElement(h.h,{item:!0,xs:!0,style:S(t.CulturaImplantacao)}))]},w=a(52),x=a.n(w),N=a(103),A=new(function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"listarSquads",value:function(){var e=Object(N.a)(x.a.mark(function e(t){var a=this;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b.a.get("https://sheets.googleapis.com/v4/spreadsheets/1ZABfkaqfHYAmcclLlGCviI4E9aTT64j_we4Hb2TRrSw/values/'Squads'!A:T?key=AIzaSyBGIJGZ64VWP-O9KQPcmr6YaVeZh_O0KLw").then(function(e){return y.chain(e.data.values).map(a.parseSquad).filter(function(e){return e.Tribo===t}).value()}).catch(function(e){console.log(e)}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"parseSquad",value:function(e){return{Squad:e[0],Tribo:e[1],DeveloperLeader:e[2],Andon:Number(e[3]),Estoque:Number(e[4]),CheckArquitetural:j()(e[5],"DD/MM/YYYY"),CheckExecucao:j()(e[6],"DD/MM/YYYY"),RetroSprint:j()(e[7],"DD/MM/YYYY"),GroomingEPlanning:Number(e[8]),TamanhoDasEstorias:Number(e[9]),Burndown:Number(e[10]),ReuniaoDiaria:Number(e[11]),GestaoAVista:Number(e[12]),WorkInProgress:Number(e[13]),DtiFlow:Number(e[14]),TestesAutomatizados:Number(e[15]),SonarQube:Number(e[16]),CulturaImplantacao:Number(e[17]),ProgressoConcreto:Number(e[18]),Score:Number(e[19])}}}]),e}()),D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={squads:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;A.listarSquads("Curingas").then(function(t){e.setState({squads:t})})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(h.c,{className:e.card},r.a.createElement(h.h,{container:!0,spacing:16},r.a.createElement(h.h,{item:!0,container:!0,xs:2,alignItems:"flex-end"},r.a.createElement(h.h,{item:!0,xs:!0,padding:"none",align:"right"},r.a.createElement(h.p,{className:e.header},"Squad"))),r.a.createElement(h.h,{item:!0,container:!0,xs:10,alignItems:"flex-end"},r.a.createElement(h.h,{item:!0,xs:!0,padding:"none",align:"center"},r.a.createElement(h.p,{className:e.header},"Grooming e Planning")),r.a.createElement(h.h,{item:!0,xs:!0,padding:"none",align:"center"},r.a.createElement(h.p,{className:e.header},"Tamanho das Est\xf3rias")),r.a.createElement(h.h,{item:!0,xs:!0,padding:"none",align:"center"},r.a.createElement(h.p,{className:e.header},"Burndown")),r.a.createElement(h.h,{item:!0,xs:!0,padding:"none",align:"center"},r.a.createElement(h.p,{className:e.header},"Reuni\xe3o Di\xe1ria")),r.a.createElement(h.h,{item:!0,xs:!0,padding:"none",align:"center"},r.a.createElement(h.p,{className:e.header},"Gest\xe3o \xe0 Vista")),r.a.createElement(h.h,{item:!0,xs:!0,padding:"none",align:"center"},r.a.createElement(h.p,{className:e.header},"Work In Progress")),r.a.createElement(h.h,{item:!0,xs:!0,padding:"none",align:"center"},r.a.createElement(h.p,{className:e.header},"dti Flow")),r.a.createElement(h.h,{item:!0,xs:!0,padding:"none",align:"center"},r.a.createElement(h.p,{className:e.header},"Testes Automatizados")),r.a.createElement(h.h,{item:!0,xs:!0,padding:"none",align:"center"},r.a.createElement(h.p,{className:e.header},"SonarQube")),r.a.createElement(h.h,{item:!0,xs:!0,padding:"none",align:"center"},r.a.createElement(h.p,{className:e.header},"Cultura de Implanta\xe7\xe3o"))),y.map(this.state.squads,function(e){return r.a.createElement(C,{key:e.Squad,squad:e})}))))}}]),t}(r.a.Component),W=Object(f.withStyles)(function(e){return{card:{margin:2*e.spacing.unit,padding:2*e.spacing.unit},header:{fontSize:16,fontWeight:200,fontStyle:"italic"}}})(D),q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={editarItem:!1},a.corStatus=function(e){switch(e){case"Pendente":return a.props.classes.Pendente;case"Conclu\xeddo":return a.props.classes.Concluido;case"Em andamento":return a.props.classes.Andamento;case"Cancelado":default:return a.props.classes.Cancelado}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.item;return r.a.createElement(h.n,null,r.a.createElement(h.l,{padding:"none"},r.a.createElement(h.p,{style:{fontSize:32,fontWeight:600}},e.Acao)),r.a.createElement(h.l,{padding:"none"},r.a.createElement(h.p,{style:{fontSize:24,fontWeight:300,fontStyle:"italic"}},e.Responsavel)),r.a.createElement(h.l,{className:this.corStatus(e.Status),align:"center",padding:"none"},r.a.createElement(h.p,{align:"center",style:{fontSize:24,fontWeight:200,color:"#ffffff"}},e.Status)))}}]),t}(r.a.Component),M=Object(f.withStyles)(function(){return{Pendente:{backgroundColor:"#e95d6a"},Concluido:{backgroundColor:"#57bb8a"},Andamento:{backgroundColor:"#6fa8dc"},Cancelado:{backgroundColor:"#303030"}}})(q),Y=new(function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"listarRetro",value:function(){var e=this;return b.a.get("https://sheets.googleapis.com/v4/spreadsheets/1ZABfkaqfHYAmcclLlGCviI4E9aTT64j_we4Hb2TRrSw/values/'Retro'!A2:F?key=AIzaSyBGIJGZ64VWP-O9KQPcmr6YaVeZh_O0KLw").then(function(t){return y.chain(t.data.values).map(e.parseRetro).value()}).catch(function(e){console.log(e)})}},{key:"parseRetro",value:function(e){return{Acao:e[0],Responsavel:e[1],Status:e[2]}}}]),e}()),I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={criarItem:!1,items:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;Y.listarRetro().then(function(t){e.setState({items:t})})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(h.c,{className:e.card},r.a.createElement(h.j,null,r.a.createElement(h.m,null,r.a.createElement(h.n,null,r.a.createElement(h.l,{align:"left"},"Plano de A\xe7\xe3o"),r.a.createElement(h.l,{align:"left"},"Respons\xe1vel"),r.a.createElement(h.l,{align:"center"},"Status"))),r.a.createElement(h.k,null,this.state.items.map(function(e){return r.a.createElement(M,{key:e.Acao,item:e})})))))}}]),t}(r.a.Component),P=(Object(f.withStyles)(function(e){return{card:{margin:2*e.spacing.unit,padding:2*e.spacing.unit},fab:{position:"absolute",bottom:2*e.spacing.unit,right:2*e.spacing.unit}}})(I),a(53)),z=a.n(P),R=function(e){var t=e.squad;return[r.a.createElement(h.h,{key:"a",item:!0,container:!0,xs:2,style:{minHeight:72}},r.a.createElement(h.h,{item:!0,container:!0,justify:"center",direction:"column",align:"right"},r.a.createElement(h.p,{style:{fontSize:22,fontWeight:900}},t.Squad.replace("Curingas - ","")))),r.a.createElement(h.h,{key:"b",item:!0,container:!0,xs:10,justify:"center"},r.a.createElement(h.h,{item:!0,xs:1,container:!0,justify:"center",direction:"column",align:"center"},G(t.Andon)),r.a.createElement(h.h,{item:!0,xs:1,style:V(t.Estoque),container:!0,justify:"center",direction:"column",align:"center"},r.a.createElement(h.p,{variant:"h4",style:{color:"#ffffff",fontWeight:900}},t.Estoque)),T(t.CheckArquitetural),T(t.CheckExecucao),T(t.RetroSprint))]},T=function(e){return r.a.createElement(h.h,{item:!0,xs:!0,style:B(j()().diff(e,"days")),container:!0,justify:"center",direction:"column",align:"center"},r.a.createElement(h.p,{variant:"h4",style:{color:"#ffffff",fontWeight:900}},e.isValid()?e.format("DD/MM/YY"):"NOVO"),e.isValid()&&r.a.createElement(h.p,{variant:"subtitle2",style:{color:"#ffffff",fontWeight:400}},"Pr\xf3ximo:"," ",j()(e).add(14,"days").format("DD/MM/YY")))},G=function(e){switch(e){case 1:return r.a.createElement(z.a,{style:{fontSize:64,color:"#f6b26b"}});case 2:return r.a.createElement(z.a,{style:{fontSize:64,color:"#e95d6a"}});default:return r.a.createElement("div",null)}},B=function(e){return e>14?{backgroundColor:"#e95d6a"}:14===e?{backgroundColor:"#f6b26b"}:{backgroundColor:"#57bb8a"}},V=function(e){return e>1?{backgroundColor:"#e95d6a"}:1===e?{backgroundColor:"#f6b26b"}:e<1?{backgroundColor:"#57bb8a"}:{backgroundColor:"#464646"}},L=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={squads:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;A.listarSquads("Curingas").then(function(t){e.setState({squads:t})})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(h.c,{className:e.card},r.a.createElement(h.h,{container:!0,spacing:16},r.a.createElement(h.h,{item:!0,container:!0,xs:2,alignItems:"flex-end"},r.a.createElement(h.h,{item:!0,xs:!0,padding:"none",align:"right"},r.a.createElement(h.p,{className:e.header},"Squad"))),r.a.createElement(h.h,{item:!0,container:!0,xs:10},r.a.createElement(h.h,{item:!0,xs:1,padding:"none",align:"center"},r.a.createElement(h.p,{className:e.header},"Andon")),r.a.createElement(h.h,{item:!0,xs:1,padding:"none",align:"center"},r.a.createElement(h.p,{className:e.header},"Estoque")),r.a.createElement(h.h,{item:!0,xs:!0,padding:"none",align:"center"},r.a.createElement(h.p,{className:e.header},"Check Arquitetural")),r.a.createElement(h.h,{item:!0,xs:!0,padding:"none",align:"center"},r.a.createElement(h.p,{className:e.header},"Check de Execu\xe7\xe3o")),r.a.createElement(h.h,{item:!0,xs:!0,padding:"none",align:"center"},r.a.createElement(h.p,{className:e.header},"Retrospectiva"))),y.map(this.state.squads,function(e){return r.a.createElement(R,{key:e.Squad,squad:e})}))))}}]),t}(r.a.Component),Z=Object(f.withStyles)(function(e){return{card:{margin:2*e.spacing.unit,padding:2*e.spacing.unit},header:{fontSize:16,fontWeight:200,fontStyle:"italic"}}})(L),H=new(function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,[{key:"listarCuringas",value:function(){return b.a.get("http://one-on-ones-dti.herokuapp.com/api/data_tribe/Curingas").then(function(e){return e.data.crafters}).catch(function(e){console.log(e)})}},{key:"parseCuringa",value:function(e){return{Crafter:e[0],Data:j()(e[1],"DD/MM/YYYY"),Lider:e[2],Cliente:e[3],OKR:"TRUE"===e[4],Imagem:e[5],Pontos:Number(e[6])}}}]),e}()),K=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).corStatus=function(e){if(!e)return a.props.classes.Escalado;var t=j()().diff(j()(e.lastMeeting),"days");return t<21?a.props.classes.EmDia:t<30?a.props.classes.Proximo:t<45?a.props.classes.Atrasado:a.props.classes.Escalado},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.crafter;return r.a.createElement(h.h,{item:!0,xs:4},r.a.createElement(h.c,{className:this.corStatus(e.meeting)},r.a.createElement(h.e,{style:{paddingBottom:0},title:r.a.createElement(h.p,{align:"justify",style:{fontSize:18,fontWeight:900,color:"#ffffff"}},e.name)}),r.a.createElement(h.d,null,r.a.createElement(h.h,{container:!0},r.a.createElement(h.h,{item:!0,xs:2},r.a.createElement(h.p,{style:{fontSize:12,fontWeight:200,fontStyle:"italic",color:"#ffffff"}},"Data:"),r.a.createElement(h.p,{style:{fontSize:16,fontWeight:700,color:"#ffffff"}},e.meeting?j()(e.meeting.lastMeeting).format("DD/MM"):"-")),r.a.createElement(h.h,{item:!0,xs:10},r.a.createElement(h.p,{style:{fontSize:12,fontWeight:200,fontStyle:"italic",color:"#ffffff"}},"L\xedder:"),r.a.createElement(h.p,{style:{fontSize:16,fontWeight:400,color:"#ffffff"}},e.meeting?e.meeting.leader:"-"))))))}}]),t}(r.a.Component),_=Object(f.withStyles)(function(){return{Atrasado:{backgroundColor:"#e95d6a"},EmDia:{backgroundColor:"#57bb8a"},Proximo:{backgroundColor:"#f6b26b"},Escalado:{backgroundColor:"#505050"}}})(K),F=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={criarItem:!1,crafters:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;H.listarCuringas().then(function(t){e.setState({crafters:t})})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.card},r.a.createElement(h.h,{container:!0,spacing:8,direction:"row"},y.chain(this.state.crafters).orderBy(function(e){return e.meeting?e.meeting.lastMeeting:""}).map(function(e){return r.a.createElement(_,{key:e.name,crafter:e})}).value()))}}]),t}(r.a.Component),Q=Object(f.withStyles)(function(e){return{card:{padding:e.spacing.unit,height:"calc(100vh - 48px - ".concat(2*e.spacing.unit,")")}}})(F),J=a(104),U=a.n(J),$=a(105),X=a.n($),ee=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.curinga;return r.a.createElement(h.h,{item:!0,xs:2},r.a.createElement(h.c,{style:{backgroundColor:"#22b5c3"}},r.a.createElement(h.e,{avatar:r.a.createElement(h.b,{src:e.Imagem,style:{width:80,height:80,backgroundColor:"#ed6a20"}},r.a.createElement(h.p,{align:"justify",style:{fontSize:48,fontWeight:300,color:"#ffffff"}},e.Crafter[0])),title:r.a.createElement(h.p,{align:"justify",style:{fontSize:20,fontWeight:900,color:"#ffffff"}},e.Crafter)}),r.a.createElement(h.d,null,r.a.createElement(h.p,{style:{fontSize:20,fontWeight:500,fontStyle:"italic",color:"#ffffff"}},e.Pontos," Pontos"))))}}]),t}(r.a.Component),te=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ranking:[]},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;H.listarCuringas().then(function(t){e.setState({ranking:t})})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.card},r.a.createElement(h.h,{container:!0,spacing:8,direction:"row"},y.chain(this.state.ranking).filter(function(e){return e.Pontos>0}).orderBy(function(e){return e.Pontos},"desc").map(function(e){return r.a.createElement(ee,{key:e.Crafter,curinga:e})}).value()))}}]),t}(r.a.Component),ae=(Object(f.withStyles)(function(e){return{card:{padding:e.spacing.unit,height:"calc(100vh - 48px - ".concat(2*e.spacing.unit,")")}}})(te),[0,1,2]),ne=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={index:0,page:2,play:!1},a.handleChange=function(e,t){a.setState({page:t})},a.handleClick=function(){a.setState({play:!a.state.play})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval(function(){if(e.state.play){var t=(e.state.index+1)%ae.length;e.setState({index:t,page:ae[t]})}},15e3)}},{key:"render",value:function(){var e=this.state.page,t=this.props.classes;return r.a.createElement(f.MuiThemeProvider,{theme:d},r.a.createElement(h.a,{position:"static"},r.a.createElement(h.o,{value:e,onChange:this.handleChange,style:{flexGrow:1}},r.a.createElement(h.i,{wrapped:!0,label:"Ritos"}),r.a.createElement(h.i,{wrapped:!0,label:"Diagn\xf3stico"}),r.a.createElement(h.i,{wrapped:!0,label:"1-1"})),r.a.createElement(h.g,{onClick:this.handleClick,className:t.fab,color:"secondary"},this.state.play?r.a.createElement(U.a,{style:{color:"#ffffff"}}):r.a.createElement(X.a,{style:{color:"#ffffff"}}))),0===e&&r.a.createElement(Z,null),1===e&&r.a.createElement(W,null),2===e&&r.a.createElement(Q,null))}}]),t}(r.a.Component),re=Object(f.withStyles)(function(e){return{fab:{position:"absolute",bottom:2*e.spacing.unit,right:2*e.spacing.unit}}})(ne);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[192,1,2]]]);
//# sourceMappingURL=main.87ab46d6.chunk.js.map
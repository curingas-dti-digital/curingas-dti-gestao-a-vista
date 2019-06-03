(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{191:function(e,t,a){e.exports=a(324)},196:function(e,t,a){},324:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(34),i=a.n(c),o=(a(196),a(6)),s=a(7),l=a(14),u=a(13),m=a(15),f=a(10),d=a(1),h=Object(f.createMuiTheme)({palette:{primary:{main:"#504d94"},secondary:{main:"#22b5c3"},error:{main:"#e72372"}},typography:{fontFamily:'"Montserrat"',useNextVariants:!0}}),g=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.evento,a=e.classes;return r.a.createElement(d.b,null,r.a.createElement(d.d,{className:a.media,image:t.Imagem}),r.a.createElement(d.c,null,r.a.createElement(d.m,{variant:"h4"},t.Responsavel),r.a.createElement(d.m,{variant:"h5"},t.Descricao)))}}]),t}(r.a.Component),p=Object(f.withStyles)(function(){return{media:{height:"64vh",paddingTop:0}}})(g),E=a(25),v=a.n(E),b=a(18),y=a(16),O=a.n(y),j=new(function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"listarEvento",value:function(){var e=this;return v.a.get("https://sheets.googleapis.com/v4/spreadsheets/1ZABfkaqfHYAmcclLlGCviI4E9aTT64j_we4Hb2TRrSw/values/'Eventos'!A2:F?key=AIzaSyAwwlgH1jqu9GuM1KWBKDdQSoLgqALqlPM").then(function(t){return b.chain(t.data.values).map(e.parseEvento).value()}).catch(function(e){console.log(e)})}},{key:"parseEvento",value:function(e){return{Imagem:"https://docs.google.com/uc?id=".concat(e[0].split("d/")[1].split("/")[0]),Responsavel:e[1],Descricao:e[2],Data:O()(e[3],"DD/MM/YYYY")}}}]),e}()),k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={criarEvento:!1,eventos:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;j.listarEvento().then(function(t){e.setState({eventos:t})})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(d.e,{container:!0,spacing:16,justify:"center",className:e.grid},this.state.eventos.map(function(e){return r.a.createElement(d.e,{item:!0,xs:6},r.a.createElement(p,{evento:e}))})))}}]),t}(r.a.Component),S=Object(f.withStyles)(function(e){return{grid:{padding:e.spacing.unit},fab:{position:"absolute",bottom:2*e.spacing.unit,right:2*e.spacing.unit}}})(k),x=a(29),w=a.n(x),C=a(42),A=new(function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"listarDiagnosticos",value:function(){var e=Object(C.a)(w.a.mark(function e(t){var a=this;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.a.get("https://sheets.googleapis.com/v4/spreadsheets/1ZABfkaqfHYAmcclLlGCviI4E9aTT64j_we4Hb2TRrSw/values/'Fast%20check%20Aux'!A1:R?key=AIzaSyAwwlgH1jqu9GuM1KWBKDdQSoLgqALqlPM").then(function(e){return b.chain(e.data.values).filter(function(e){return e[2]===t}).map(a.parseFastCheck).value()}).catch(function(e){console.log(e)}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"parseFastCheck",value:function(e){return{Squad:e[1],Tribo:e[2],DeveloperLeader:e[3],UltimoGemba:e[4],Gember:e[5],Cadencia:e[6],Score:e[7],GroomingEPlanning:e[8],TamanhoDasEstorias:e[9],Burndown:e[10],ReuniaoDiaria:e[11],GestaoAVista:e[12],WorkInProgress:e[13],DtiFlow:e[14],TestesAutomatizados:e[15],SonarQube:e[16],EstoqueDeSprints:e[17]}}}]),e}()),D=function(e){switch(e){case"1":return{backgroundColor:"#e95d6a"};case"2":return{backgroundColor:"#f6b26b"};case"3":return{backgroundColor:"#57bb8a"};default:return{backgroundColor:"#ffffff"}}},M=function(e){var t=e.diagnostico;return[r.a.createElement(d.e,{item:!0,container:!0,xs:2,style:{minHeight:72}},r.a.createElement(d.e,{item:!0,container:!0,justify:"center",direction:"column",align:"right"},r.a.createElement(d.m,{style:{fontSize:20,fontWeight:700}},t.Squad.replace("Curingas - ","")))),r.a.createElement(d.e,{item:!0,container:!0,xs:10,justify:"center"},r.a.createElement(d.e,{item:!0,xs:!0,style:D(t.GroomingEPlanning)}),r.a.createElement(d.e,{item:!0,xs:!0,style:D(t.TamanhoDasEstorias)}),r.a.createElement(d.e,{item:!0,xs:!0,style:D(t.Burndown)}),r.a.createElement(d.e,{item:!0,xs:!0,style:D(t.ReuniaoDiaria)}),r.a.createElement(d.e,{item:!0,xs:!0,style:D(t.GestaoAVista)}),r.a.createElement(d.e,{item:!0,xs:!0,style:D(t.WorkInProgress)}),r.a.createElement(d.e,{item:!0,xs:!0,style:D(t.DtiFlow)}),r.a.createElement(d.e,{item:!0,xs:!0,style:D(t.TestesAutomatizados)}),r.a.createElement(d.e,{item:!0,xs:!0,style:D(t.SonarQube)}),r.a.createElement(d.e,{item:!0,xs:!0,style:D(t.EstoqueDeSprints)}))]},q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={diagnosticos:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;A.listarDiagnosticos("Curingas").then(function(t){e.setState({diagnosticos:t})})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(d.b,{className:e.card},r.a.createElement(d.e,{container:!0,spacing:16},r.a.createElement(d.e,{item:!0,container:!0,xs:2,alignItems:"flex-end"},r.a.createElement(d.e,{item:!0,xs:!0,padding:"none",align:"right"},r.a.createElement(d.m,{className:e.header},"Squad"))),r.a.createElement(d.e,{item:!0,container:!0,xs:10,alignItems:"flex-end"},r.a.createElement(d.e,{item:!0,xs:!0,padding:"none",align:"center"},r.a.createElement(d.m,{className:e.header},"Grooming e Planning")),r.a.createElement(d.e,{item:!0,xs:!0,padding:"none",align:"center"},r.a.createElement(d.m,{className:e.header},"Tamanho das Est\xf3rias")),r.a.createElement(d.e,{item:!0,xs:!0,padding:"none",align:"center"},r.a.createElement(d.m,{className:e.header},"Burndown")),r.a.createElement(d.e,{item:!0,xs:!0,padding:"none",align:"center"},r.a.createElement(d.m,{className:e.header},"Reuni\xe3o Di\xe1ria")),r.a.createElement(d.e,{item:!0,xs:!0,padding:"none",align:"center"},r.a.createElement(d.m,{className:e.header},"Gest\xe3o \xe0 Vista")),r.a.createElement(d.e,{item:!0,xs:!0,padding:"none",align:"center"},r.a.createElement(d.m,{className:e.header},"Work In Progress")),r.a.createElement(d.e,{item:!0,xs:!0,padding:"none",align:"center"},r.a.createElement(d.m,{className:e.header},"dti Flow")),r.a.createElement(d.e,{item:!0,xs:!0,padding:"none",align:"center"},r.a.createElement(d.m,{className:e.header},"Testes Automatizados")),r.a.createElement(d.e,{item:!0,xs:!0,padding:"none",align:"center"},r.a.createElement(d.m,{className:e.header},"SonarQube")),r.a.createElement(d.e,{item:!0,xs:!0,padding:"none",align:"center"},r.a.createElement(d.m,{className:e.header},"Estoque de Sprints"))),b.map(this.state.diagnosticos,function(e){return r.a.createElement(M,{diagnostico:e})}))))}}]),t}(r.a.Component),Y=Object(f.withStyles)(function(e){return{card:{margin:2*e.spacing.unit,padding:2*e.spacing.unit},header:{fontSize:14,fontWeight:300}}})(q),W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={editarItem:!1},a.corStatus=function(e){switch(e){case"Pendente":return a.props.classes.Pendente;case"Conclu\xeddo":return a.props.classes.Concluido;case"Em andamento":return a.props.classes.Andamento;case"Cancelado":default:return a.props.classes.Cancelado}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.item;return r.a.createElement(d.k,null,r.a.createElement(d.i,{padding:"none"},r.a.createElement(d.m,{style:{fontSize:40,fontWeight:600}},e.Acao)),r.a.createElement(d.i,{padding:"none"},r.a.createElement(d.m,{style:{fontSize:24,fontWeight:600}},e.Responsavel)),r.a.createElement(d.i,{className:this.corStatus(e.Status),align:"center",padding:"none"},r.a.createElement(d.m,{align:"center",style:{fontSize:24,fontWeight:400,color:"#ffffff"}},e.Status)))}}]),t}(r.a.Component),R=Object(f.withStyles)(function(){return{Pendente:{backgroundColor:"#e95d6a"},Concluido:{backgroundColor:"#57bb8a"},Andamento:{backgroundColor:"#6fa8dc"},Cancelado:{backgroundColor:"#303030"}}})(W),T=new(function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"listarRetro",value:function(){var e=this;return v.a.get("https://sheets.googleapis.com/v4/spreadsheets/1ZABfkaqfHYAmcclLlGCviI4E9aTT64j_we4Hb2TRrSw/values/'Retro'!A2:F?key=AIzaSyAwwlgH1jqu9GuM1KWBKDdQSoLgqALqlPM").then(function(t){return b.chain(t.data.values).map(e.parseRetro).value()}).catch(function(e){console.log(e)})}},{key:"parseRetro",value:function(e){return{Acao:e[0],Responsavel:e[1],Status:e[2]}}}]),e}()),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={criarItem:!1,items:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;T.listarRetro().then(function(t){e.setState({items:t})})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(d.b,{className:e.card},r.a.createElement(d.g,null,r.a.createElement(d.j,null,r.a.createElement(d.k,null,r.a.createElement(d.i,{align:"left"},"Plano de A\xe7\xe3o"),r.a.createElement(d.i,{align:"left"},"Respons\xe1vel"),r.a.createElement(d.i,{align:"center"},"Status"))),r.a.createElement(d.h,null,this.state.items.map(function(e){return r.a.createElement(R,{key:e.Acao,item:e})})))))}}]),t}(r.a.Component),P=Object(f.withStyles)(function(e){return{card:{margin:2*e.spacing.unit,padding:2*e.spacing.unit},fab:{position:"absolute",bottom:2*e.spacing.unit,right:2*e.spacing.unit}}})(N),I=new(function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"listarRitos",value:function(){var e=Object(C.a)(w.a.mark(function e(t){var a=this;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.a.get("https://sheets.googleapis.com/v4/spreadsheets/1ZABfkaqfHYAmcclLlGCviI4E9aTT64j_we4Hb2TRrSw/values/'Ritos%20Aux'!A1:F?key=AIzaSyAwwlgH1jqu9GuM1KWBKDdQSoLgqALqlPM").then(function(e){return b.chain(e.data.values).filter(function(e){return e[1]&&e[1].includes(t)}).map(a.parseSquad).value()}).catch(function(e){console.log(e)}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},{key:"parseSquad",value:function(e){return{Squad:e[1],Cliente:e[2],CheckArquitetural:O()(e[3],"DD/MM/YYYY"),CheckExecucao:O()(e[4],"DD/MM/YYYY"),Retro:O()(e[5],"DD/MM/YYYY"),Andon:e[0]}}}]),e}()),z=a(52),G=a.n(z),H=function(e){var t=e.squad;return[r.a.createElement(d.e,{key:"a",item:!0,container:!0,xs:2,style:{minHeight:72}},r.a.createElement(d.e,{item:!0,container:!0,justify:"center",direction:"column",align:"right"},r.a.createElement(d.m,{style:{fontSize:20,fontWeight:700}},t.Squad.replace("Curingas - ","")))),r.a.createElement(d.e,{key:"b",item:!0,container:!0,xs:10,justify:"center"},r.a.createElement(d.e,{item:!0,xs:2,container:!0,justify:"center",direction:"column",align:"center"},L(t.Andon)),r.a.createElement(d.e,{item:!0,xs:!0,style:B(O()().diff(t.CheckArquitetural,"days")),container:!0,justify:"center",direction:"column",align:"center"},r.a.createElement(d.m,{variant:"h4",style:{color:"#ffffff",fontWeight:700}},t.CheckArquitetural.format("DD/MM/YY")),r.a.createElement(d.m,{variant:"subtitle2",style:{color:"#ffffff",fontWeight:300}},"Pr\xf3ximo:"," ",O()(t.CheckArquitetural).add(14,"days").format("DD/MM/YY"))),r.a.createElement(d.e,{item:!0,xs:!0,style:B(O()().diff(t.CheckExecucao,"days")),container:!0,justify:"center",direction:"column",align:"center"},r.a.createElement(d.m,{variant:"h4",style:{color:"#ffffff",fontWeight:700}},t.CheckExecucao.format("DD/MM/YY")),r.a.createElement(d.m,{variant:"subtitle2",style:{color:"#ffffff",fontWeight:300}},"Pr\xf3ximo:"," ",O()(t.CheckExecucao).add(14,"days").format("DD/MM/YY"))),r.a.createElement(d.e,{item:!0,xs:!0,style:B(O()().diff(t.Retro,"days")),container:!0,justify:"center",direction:"column",align:"center"},r.a.createElement(d.m,{variant:"h4",style:{color:"#ffffff",fontWeight:700}},t.Retro.format("DD/MM/YY")),r.a.createElement(d.m,{variant:"subtitle2",style:{color:"#ffffff",fontWeight:300}},"Pr\xf3ximo:"," ",O()(t.Retro).add(14,"days").format("DD/MM/YY"))))]},L=function(e){switch(e){case"1":return r.a.createElement(G.a,{style:{fontSize:64,color:"#f6b26b"}});case"2":return r.a.createElement(G.a,{style:{fontSize:64,color:"#e95d6a"}});default:return r.a.createElement("div",null)}},B=function(e){return e>14?{backgroundColor:"#e95d6a"}:14===e?{backgroundColor:"#f6b26b"}:{backgroundColor:"#57bb8a"}},K=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={squads:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;I.listarRitos("Curingas").then(function(t){e.setState({squads:t})})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(d.b,{className:e.card},r.a.createElement(d.e,{container:!0,spacing:16},r.a.createElement(d.e,{item:!0,container:!0,xs:2,alignItems:"flex-end"},r.a.createElement(d.e,{item:!0,xs:!0,padding:"none",align:"right"},r.a.createElement(d.m,{className:e.header},"Squad"))),r.a.createElement(d.e,{item:!0,container:!0,xs:10},r.a.createElement(d.e,{item:!0,xs:2,padding:"none",align:"center"},r.a.createElement(d.m,{className:e.header},"Andon")),r.a.createElement(d.e,{item:!0,xs:!0,padding:"none",align:"center"},r.a.createElement(d.m,{className:e.header},"Check Arquitetural")),r.a.createElement(d.e,{item:!0,xs:!0,padding:"none",align:"center"},r.a.createElement(d.m,{className:e.header},"Check de Execu\xe7\xe3o")),r.a.createElement(d.e,{item:!0,xs:!0,padding:"none",align:"center"},r.a.createElement(d.m,{className:e.header},"Retrospectiva"))),b.map(this.state.squads,function(e){return r.a.createElement(H,{key:e.Squad,squad:e})}))))}}]),t}(r.a.Component),F=Object(f.withStyles)(function(e){return{card:{margin:2*e.spacing.unit,padding:2*e.spacing.unit},header:{fontSize:14,fontWeight:300}}})(K),Q=new(function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"listarOneOnOne",value:function(e){var t=this;return v.a.get("https://sheets.googleapis.com/v4/spreadsheets/1ZABfkaqfHYAmcclLlGCviI4E9aTT64j_we4Hb2TRrSw/values/'1-1'!A2:E?key=AIzaSyAwwlgH1jqu9GuM1KWBKDdQSoLgqALqlPM").then(function(a){return b.chain(a.data.values).map(t.parseOneOnOne).filter(function(t){return t.Cliente===e}).value()}).catch(function(e){console.log(e)})}},{key:"parseOneOnOne",value:function(e){return{Crafter:e[0],Data:O()(e[1],"DD/MM/YYYY"),Lider:e[2],Cliente:e[3],OKR:"TRUE"===e[4]}}}]),e}()),Z=a(101),_=a.n(Z),V=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).corStatus=function(e){var t=O()().diff(e,"days");return t<21?a.props.classes.EmDia:t<30?a.props.classes.Proximo:t<45?a.props.classes.Atrasado:a.props.classes.Escalado},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.oneOnOne;return r.a.createElement(d.e,{item:!0,xs:3,spacing:16},r.a.createElement(d.b,{className:this.corStatus(e.Data)},r.a.createElement(d.c,null,r.a.createElement(d.e,{container:!0,spacing:16},r.a.createElement(d.e,{item:!0,xs:8},r.a.createElement(d.m,{style:{fontSize:32,fontWeight:200,color:"#ffffff"}},e.Crafter)),r.a.createElement(d.e,{item:!0,xs:4,align:"right"},e.OKR&&r.a.createElement(_.a,{style:{color:"#ffffff"}})),r.a.createElement(d.e,{item:!0,xs:6},r.a.createElement(d.m,{style:{fontSize:20,fontWeight:200,color:"#ffffff"}},"Data:"),r.a.createElement(d.m,{style:{fontSize:24,fontWeight:600,color:"#ffffff"}},e.Data.format("DD/MM/YY"))),r.a.createElement(d.e,{item:!0,xs:6},r.a.createElement(d.m,{style:{fontSize:20,fontWeight:200,color:"#ffffff"}},"L\xedder:"),r.a.createElement(d.m,{style:{fontSize:20,fontWeight:300,color:"#ffffff"}},e.Lider))))))}}]),t}(r.a.Component),J=Object(f.withStyles)(function(){return{Atrasado:{backgroundColor:"#e95d6a"},EmDia:{backgroundColor:"#57bb8a"},Proximo:{backgroundColor:"#f6b26b"},Escalado:{backgroundColor:"#505050"}}})(V),U=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={criarItem:!1,listaOneOnOne:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;Q.listarOneOnOne(this.props.cliente).then(function(t){e.setState({listaOneOnOne:t})})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.card},r.a.createElement(d.e,{container:!0,spacing:8,direction:"row"},b.chain(this.state.listaOneOnOne).orderBy(function(e){return e.Data}).map(function(e){return r.a.createElement(J,{key:e.Crafter,oneOnOne:e})}).value()))}}]),t}(r.a.Component),$=Object(f.withStyles)(function(e){return{card:{margin:e.spacing.unit,padding:e.spacing.unit,height:"calc(100vh - 48px - ".concat(2*e.spacing.unit,")")}}})(U),X=[0,1,2,3,4,5,0,1,6,0,1,2,3,4,5,0,1,6,0,1,2,3,4,5,0,1,7],ee=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={index:2,page:0,play:!0},a.handleChange=function(e,t){a.setState({page:t})},a.handleClick=function(){a.setState({play:!a.state.play})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval(function(){var t=(e.state.index+1)%X.length;e.setState({index:t,page:X[t]})},15e3)}},{key:"render",value:function(){var e=this.state.page;return r.a.createElement(f.MuiThemeProvider,{theme:h},r.a.createElement(d.a,{position:"static"},r.a.createElement(d.l,{value:e,onChange:this.handleChange,style:{flexGrow:1}},r.a.createElement(d.f,{label:"Ritos"}),r.a.createElement(d.f,{label:"Diagn\xf3stico"}),r.a.createElement(d.f,{label:"1-1 Cross"}),r.a.createElement(d.f,{label:"1-1 Prodap"}),r.a.createElement(d.f,{label:"1-1 BH"}),r.a.createElement(d.f,{label:"1-1 Serasa"}),r.a.createElement(d.f,{label:"Retro da Tribo"}),r.a.createElement(d.f,{label:"Pr\xf3ximos Eventos"}))),0===e&&r.a.createElement(F,null),1===e&&r.a.createElement(Y,null),2===e&&r.a.createElement($,{cliente:"Cross"}),3===e&&r.a.createElement($,{cliente:"Prodap"}),4===e&&r.a.createElement($,{cliente:"BH"}),5===e&&r.a.createElement($,{cliente:"Serasa"}),6===e&&r.a.createElement(P,null),7===e&&r.a.createElement(S,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[191,1,2]]]);
//# sourceMappingURL=main.1bf146f6.chunk.js.map
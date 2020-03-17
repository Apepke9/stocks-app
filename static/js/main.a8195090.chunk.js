(this.webpackJsonpstocks_app=this.webpackJsonpstocks_app||[]).push([[0],{10:function(e,t,o){e.exports=o(17)},17:function(e,t,o){"use strict";o.r(t);var a=o(0),r=o.n(a),n=o(9),i=o.n(n),s=(o(15),o(6)),c=o.n(s),l=o(7),p=o(1),m=o(2),h=o(4),u=o(3),b=o(5),f=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Stock Prices"),r.a.createElement("p",null,"Find information about a stock"))}}]),t}(a.Component),y=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.getStockPrice},r.a.createElement("input",{type:"text",name:"symbol",placeholder:"Symbol"}),r.a.createElement("button",null,"Get Stock Information"))}}]),t}(a.Component),d=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,this.props.fbSymbol&&this.props.fbPrice&&r.a.createElement("p",null,"Facebook Stock Price: ",this.props.fbSymbol," , ",this.props.fbPrice," ","per share"),this.props.amznSymbol&&this.props.amznPrice&&r.a.createElement("p",null,"Amazon Stock Price: ",this.props.amznSymbol," ,"," ",this.props.amznPrice," per share"),this.props.aaplSymbol&&this.props.aaplPrice&&r.a.createElement("p",null,"Apple Stock Price: ",this.props.aaplSymbol," ,"," ",this.props.aaplPrice," per share"),this.props.nflxSymbol&&this.props.nflxPrice&&r.a.createElement("p",null,"Netflix Stock Price: ",this.props.nflxSymbol," ,"," ",this.props.nflxPrice," per share"),this.props.googSymbol&&this.props.googPrice&&r.a.createElement("p",null,"Google Stock Price: ",this.props.googSymbol," ,"," ",this.props.googPrice," per share"),r.a.createElement("br",null)),r.a.createElement("div",null,this.props.name&&this.props.price&&r.a.createElement("p",null,"Stock Information: ",this.props.name," , ",this.props.price," per share"),this.props.fiftytwoWeekHigh&&r.a.createElement("p",null,"52 week High: ",this.props.fiftytwoWeekHigh),this.props.fiftytwoWeekLow&&r.a.createElement("p",null,"52 week Low: ",this.props.fiftytwoWeekLow),this.props.volume&&r.a.createElement("p",null," Volume: ",this.props.volume),this.props.error&&r.a.createElement("p",null," ",this.props.error)))}}]),t}(a.Component),v="N9wJwfuVyqBclNRtdw9V5zLLRQacv7nm0ONaM113GF9ywcihrPo3f0OABsGc",g=function(e){function t(){var e,o;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(o=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={symbol:void 0,name:void 0,price:void 0,fiftytwoWeekHigh:void 0,fiftytwoWeekLow:void 0,volume:void 0,fbPrice:void 0,fbSymbol:void 0,amznPrice:void 0,amznSymbol:void 0,aaplPrice:void 0,aaplSymbol:void 0,nflxPrice:void 0,nflxSymbol:void 0,googPrice:void 0,googSymbol:void 0,error:void 0},o.componentDidMount=function(){var e=Object(l.a)(c.a.mark((function e(t){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.worldtradingdata.com/api/v1/stock?symbol=FB,AAPL,AMZN,NFLX,GOOG&api_token=".concat(v));case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,console.log(r),o.setState({fbSymbol:r.data[2].symbol,fbPrice:r.data[2].price,amznSymbol:r.data[1].symbol,amznPrice:r.data[1].price,aaplSymbol:r.data[0].symbol,aaplPrice:r.data[0].price,nflxSymbol:r.data[4].symbol,nflxPrice:r.data[4].price,googSymbol:r.data[3].symbol,googPrice:r.data[3].price,error:""});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o.getStockPrice=function(){var e=Object(l.a)(c.a.mark((function e(t){var a,r,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.target.elements.symbol.value.toUpperCase(),e.next=4,fetch("https://api.worldtradingdata.com/api/v1/stock?symbol=".concat(a,"&api_token=").concat(v));case 4:return r=e.sent,e.next=7,r.json();case 7:n=e.sent,a?(console.log(n),o.setState({symbol:n.data[0].symbol,name:n.data[0].name,price:n.data[0].price,fiftytwoWeekHigh:n.data[0]["52_week_high"],fiftytwoWeekLow:n.data[0]["52_week_low"],volume:n.data[0].volume,error:""})):o.setState({symbol:void 0,name:void 0,price:void 0,error:"Please enter the symbol of a company."});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(y,{getStockPrice:this.getStockPrice}),r.a.createElement(d,{symbol:this.state.symbol,name:this.state.name,price:this.state.price,fiftytwoWeekHigh:this.state.fiftytwoWeekHigh,fiftytwoWeekLow:this.state.fiftytwoWeekLow,volume:this.state.volume,error:this.state.error,fbPrice:this.state.fbPrice,fbSymbol:this.state.fbSymbol,amznPrice:this.state.amznPrice,amznSymbol:this.state.amznSymbol,aaplPrice:this.state.aaplPrice,aaplSymbol:this.state.aaplSymbol,nflxPrice:this.state.nflxPrice,nflxSymbol:this.state.nflxSymbol,googPrice:this.state.googPrice,googSymbol:this.state.googSymbol}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.a8195090.chunk.js.map
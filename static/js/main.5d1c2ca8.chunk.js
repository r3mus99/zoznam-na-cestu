(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{182:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(25),s=a.n(l),r=(a(76),a(18)),c=a(19),o=a(22),h=a(20),m=a(21),d=(a(34),a(33)),u=a.n(d),v=a(43),b=a(8),k=a(69),p=a.n(k),y=a(70),f=a.n(y),j=a(42),C=a.n(j),O=a(66),E=a.n(O),g=a(68),w=a.n(g),N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={checkBoxValue:!1,visibility:!1},a.handleChange=a.handleChange.bind(Object(b.a)(Object(b.a)(a))),a.handleVisibility=a.handleVisibility.bind(Object(b.a)(Object(b.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(){var e=!this.state.checkBoxValue;this.setState({checkBoxValue:e}),this.props.onChange(this.props.id,e)}},{key:"handleVisibility",value:function(){this.setState({visibility:!this.state.visibility})}},{key:"render",value:function(){var e;return e=this.state.visibility?i.a.createElement(E.a,null):i.a.createElement(w.a,null),i.a.createElement("div",{className:"item"},i.a.createElement("div",{className:"Left"},i.a.createElement(p.a,{checked:this.state.checkBoxValue,onClick:this.handleChange,disabled:this.state.visibility}),i.a.createElement(f.a,{onClick:this.handleChange,disabled:this.state.visibility},this.props.label)),i.a.createElement("div",{className:"Right"},i.a.createElement(C.a,{"aria-label":"hide",className:"grayIcon",onClick:this.handleVisibility},e)))}}]),t}(n.Component),I=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={itemsChecked:0,itemsAvailable:a.props.items.filter(function(e){return"ColoredLine"!==e}).length},a.handleItemChange=a.handleItemChange.bind(Object(b.a)(Object(b.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleItemChange",value:function(e,t){var a,n=this.state.itemsChecked;t?n++:n--,this.setState((a={},Object(v.a)(a,e,t),Object(v.a)(a,"itemsChecked",n),a))}},{key:"render",value:function(){var e=this,t=this.props.items.map(function(t){return"ColoredLine"===t?i.a.createElement("hr",null):i.a.createElement(N,{label:t,id:t,onChange:e.handleItemChange,value:e.state[t]})}),a=this.state.itemsAvailable,n=this.state.itemsChecked,l=n/a*100;return i.a.createElement("div",{className:"Section"},i.a.createElement("div",{className:"Header"},i.a.createElement("div",{className:"Left"},i.a.createElement("p",null,this.props.header)),i.a.createElement("div",{className:"Right"},i.a.createElement("p",null,n,"/",a))),t,i.a.createElement("div",null,JSON.stringify(this.state)),i.a.createElement(u.a,{variant:"determinate",color:"secondary",value:l}))}}]),t}(n.Component),V=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(i)))).state={completed:0},a.progress=function(){var e=a.state.completed;if(100===e);else{var t=10*Math.random();a.setState({completed:Math.min(e+t,100)})}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.timer=setInterval(this.progress,500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(u.a,{color:"secondary",variant:"determinate",value:this.state.completed}),i.a.createElement(I,{header:"Hlavn\xe9",items:["peniaze a platobn\xe1 karta","ob\u010diansk\xfd preukaz","vodi\u010dsk\xfd preukaz","cestovn\xfd pas","karti\u010dka cestovn\xe9ho poistenia","karti\u010dka zdravotn\xe9ho poistenia","dokumenty od cestovnej kancel\xe1rie","ColoredLine","lieky, ktor\xe9 beriem","lieky, ktor\xe9 by sa mohli hodi\u0165","ColoredLine","okuliare","telef\xf3n (+ nab\xedja\u010dka)","z\xe1mky na bato\u017einu (+ k\u013e\xfa\u010de)"]}),i.a.createElement(I,{header:"Oble\u010denie",items:["ko\u0161ele","nohavice","oblek a kravata","plavky"]}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},34:function(e,t,a){},71:function(e,t,a){e.exports=a(182)},76:function(e,t,a){}},[[71,2,1]]]);
//# sourceMappingURL=main.5d1c2ca8.chunk.js.map
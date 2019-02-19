(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){},181:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(15),r=n.n(s),c=(n(78),n(6)),l=n(7),o=n(9),m=n(8),h=n(10),d=(n(16),n(36)),u=n(69),p=n.n(u),b=n(34),k=n.n(b),v=n(44),f=n.n(v),O=n(66),j=n.n(O),y=n(68),E=n.n(y),C=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).handleChange=function(){n.props.onChange(n.props.id)},n.handleVisibility=function(){n.props.onVisibilityChange(n.props.id)},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e;return e=this.props.visible?i.a.createElement(E.a,null):i.a.createElement(j.a,null),i.a.createElement("div",{className:"item"},i.a.createElement("div",{className:"Left"},i.a.createElement(p.a,{checked:this.props.checked,onClick:this.handleChange,disabled:!this.props.visible}),i.a.createElement(k.a,{onClick:this.handleChange,disabled:!this.props.visible},this.props.label)),i.a.createElement("div",{className:"Right"},i.a.createElement(f.a,{"aria-label":"hide",className:"grayIcon",onClick:this.handleVisibility},e)))}}]),t}(a.Component),g=n(71),V=n.n(g),I=n(70),w=n.n(I),N=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.contentVisible&&!this.props.disabled?i.a.createElement(w.a,null):i.a.createElement(V.a,null);return i.a.createElement("div",{style:{width:"auto"}},i.a.createElement(k.a,{fullWidth:!0,disabled:this.props.disabled,onClick:this.props.onClick},e))}}]),t}(a.Component),A=n(35),S=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(){var e=!n.state.contentVisible;n.setState({contentVisible:e})},n.state={contentVisible:!1},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=0===this.props.items.length?null:i.a.createElement(N,{contentVisible:this.state.contentVisible,onClick:this.handleClick}),t=this.state.contentVisible?this.props.items:null;return i.a.createElement("div",null,i.a.createElement(A.a,{duration:100,enterAnimation:"accordionVertical",leaveAnimation:"none",staggerDelayBy:20},e,t))}}]),t}(a.Component),z=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Header"},i.a.createElement("div",{className:"Left"},i.a.createElement("p",null,this.props.header)),i.a.createElement("div",{className:"Right"},i.a.createElement("p",null,this.props.itemsChecked,"/",this.props.itemsAll)))}}]),t}(a.Component),H=n(72),W=n.n(H),x=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(A.a,{duration:100,enterAnimation:"accordionVertical",leaveAnimation:"none"},this.props.items),i.a.createElement(W.a,{variant:"determinate",color:"secondary",value:this.props.progress}))}}]),t}(a.Component),B=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleItemChange=function(e){var t=n.isItemChecked(e),a=n.state.itemsChecked;t?n.setState(function(t){return{itemsChecked:t.itemsChecked.filter(function(t){return t!==e})}}):n.setState({itemsChecked:[].concat(Object(d.a)(a),[e])})},n.handleItemVisibilityChange=function(e){var t=n.isItemVisible(e),a=n.state.itemsHidden,i=n.state.itemsVisible;t?(n.setState({itemsHidden:[].concat(Object(d.a)(a),[e])}),n.setState(function(t){return{itemsVisible:t.itemsVisible.filter(function(t){return t!==e})}})):(n.setState({itemsVisible:[].concat(Object(d.a)(i),[e])}),n.setState(function(t){return{itemsHidden:t.itemsHidden.filter(function(t){return t!==e})}}))},n.mapItem=function(e){return i.a.createElement(C,{label:e,id:e,onChange:n.handleItemChange,onVisibilityChange:n.handleItemVisibilityChange,checked:n.isItemChecked(e),visible:n.isItemVisible(e)})},n.state={itemsChecked:[],itemsHidden:[],itemsVisible:n.props.items},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"isItemChecked",value:function(e){return-1!==this.state.itemsChecked.indexOf(e)}},{key:"isItemVisible",value:function(e){return-1!==this.state.itemsVisible.indexOf(e)}},{key:"render",value:function(){var e=this,t=this.state.itemsVisible.map(this.mapItem),n=this.state.itemsHidden.map(this.mapItem),a=this.state.itemsVisible.length,s=this.state.itemsChecked.filter(function(t){return e.isItemVisible(t)}).length,r=s/a*100;return i.a.createElement("div",{className:"Section"},i.a.createElement(z,{header:this.props.header,itemsChecked:s,itemsAll:a}),i.a.createElement(x,{items:t,progress:r}),i.a.createElement(S,{items:n}))}}]),t}(a.Component),D=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={completed:0},n.progress=function(){var e=n.state.completed;if(100===e);else{var t=10*Math.random();n.setState({completed:Math.min(e+t,100)})}},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.timer=setInterval(this.progress,500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(B,{header:"Doklady",items:["peniaze a platobn\xe1 karta","ob\u010diansk\xfd preukaz","vodi\u010dsk\xfd preukaz","cestovn\xfd pas"]}),i.a.createElement(B,{header:"Elektronika",items:["telef\xf3n (+ nab\xedja\u010dka)","sl\xfachadl\xe1","powerbanka"]}),i.a.createElement(B,{header:"Lieky",items:["lieky, ktor\xe9 beriem","lieky, ktor\xe9 by sa mohli hodi\u0165","karti\u010dka cestovn\xe9ho poistenia","karti\u010dka zdravotn\xe9ho poistenia"]}),i.a.createElement(B,{header:"Oble\u010denie - hlavn\xe9",items:["nohavice (1ks/4dni)","tri\u010dko / sveter / ko\u0161e\u013ea (1-2ks/de\u0148)"]}),i.a.createElement(B,{header:"Oble\u010denie - doplnky",items:["spodn\xe9 pr\xe1dlo","pono\u017eky"]}),i.a.createElement(B,{header:"Na spanie",items:["py\u017eamo","\u0161tuple do u\u0161\xed","maska na o\u010di"]}),i.a.createElement(B,{header:"Kozmetika",items:["dezodorant","vo\u0148avka","zubn\xe1 kefka (+ pasta)"]}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},73:function(e,t,n){e.exports=n(181)},78:function(e,t,n){}},[[73,1,2]]]);
//# sourceMappingURL=main.c5bf4a82.chunk.js.map
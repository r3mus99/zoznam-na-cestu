(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{185:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(26),l=a.n(s),r=(a(79),a(8)),c=a(9),o=a(12),h=a(10),m=a(11),d=(a(23),a(36)),u=a.n(d),b=a(45),p=a(46),v=a(13),k=a(71),f=a.n(k),y=a(35),C=a.n(y),j=a(44),O=a.n(j),E=a(68),g=a.n(E),V=a(70),w=a.n(V),I=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={checkBoxValue:!1,visibility:!1},a.handleChange=a.handleChange.bind(Object(v.a)(Object(v.a)(a))),a.handleVisibility=a.handleVisibility.bind(Object(v.a)(Object(v.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(){var e=!this.state.checkBoxValue;this.setState({checkBoxValue:e}),this.props.onChange(this.props.id,e)}},{key:"handleVisibility",value:function(){var e=!this.state.visibility;this.setState({visibility:e}),this.props.onVisibilityChange(this.props.id,e)}},{key:"render",value:function(){var e;return e=this.state.visibility?n.a.createElement(g.a,null):n.a.createElement(w.a,null),n.a.createElement("div",{className:"item"},n.a.createElement("div",{className:"Left"},n.a.createElement(f.a,{checked:this.state.checkBoxValue,onClick:this.handleChange,disabled:this.state.visibility}),n.a.createElement(C.a,{onClick:this.handleChange,disabled:this.state.visibility},this.props.label)),n.a.createElement("div",{className:"Right"},n.a.createElement(O.a,{"aria-label":"hide",className:"grayIcon",onClick:this.handleVisibility},e)))}}]),t}(i.Component),S=a(73),N=a.n(S),H=a(72),B=a.n(H),L=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.itemsVisible&&!this.props.disabled?n.a.createElement(B.a,null):n.a.createElement(N.a,null);return n.a.createElement("div",{style:{width:"auto"}},n.a.createElement(C.a,{fullWidth:!0,disabled:this.props.disabled,onClick:this.props.onClick},e))}}]),t}(i.Component),x=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).handleClick=function(){var e=!a.state.itemsVisible;a.setState({itemsVisible:e})},a.state={itemsVisible:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=0===this.props.items.length,t=this.state.itemsVisible?this.props.items.map(function(e){return n.a.createElement(I,{label:e,id:e,onChange:function(e,t){},onVisibilityChange:function(e,t){}})}):null;return n.a.createElement("div",null,n.a.createElement(L,{itemsVisible:this.state.itemsVisible,disabled:e,onClick:this.handleClick}),t)}}]),t}(i.Component),z=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).handleItemVisibilityChange=function(e,t){var i=a.state.itemsHidden,n=a.state.itemsVisible;t?(a.setState({itemsHidden:Object(p.a)(i).concat([e])}),a.setState(function(t){return{itemsVisible:t.itemsVisible.filter(function(t){return t!==e})}})):(a.setState({itemsVisible:Object(p.a)(n).concat([e])}),a.setState(function(t){return{itemsHidden:t.itemsHidden.filter(function(t){return t!==e})}}))},a.state={itemsChecked:0,itemsHidden:[],itemsVisible:a.props.items.filter(function(e){return"ColoredLine"!==e})},a.handleItemChange=a.handleItemChange.bind(Object(v.a)(Object(v.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleItemChange",value:function(e,t){var a,i=this.state.itemsChecked;t?i++:i--,this.setState((a={},Object(b.a)(a,e,t),Object(b.a)(a,"itemsChecked",i),a))}},{key:"render",value:function(){var e=this,t=this.props.items.map(function(t){return"ColoredLine"===t?n.a.createElement("hr",null):n.a.createElement(I,{label:t,id:t,onChange:e.handleItemChange,onVisibilityChange:e.handleItemVisibilityChange,value:e.state[t]})}),a=this.state.itemsVisible.length,i=this.state.itemsChecked,s=i/a*100;return n.a.createElement("div",{className:"Section"},n.a.createElement("div",{className:"Header"},n.a.createElement("div",{className:"Left"},n.a.createElement("p",null,this.props.header)),n.a.createElement("div",{className:"Right"},n.a.createElement("p",null,i,"/",a))),t,n.a.createElement(u.a,{variant:"determinate",color:"secondary",value:s}),n.a.createElement(x,{items:this.state.itemsHidden}))}}]),t}(i.Component),W=function(e){function t(){var e,a;Object(r.a)(this,t);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={completed:0},a.progress=function(){var e=a.state.completed;if(100===e);else{var t=10*Math.random();a.setState({completed:Math.min(e+t,100)})}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.timer=setInterval(this.progress,500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(u.a,{color:"secondary",variant:"determinate",value:this.state.completed}),n.a.createElement(z,{header:"Hlavn\xe9",items:["peniaze a platobn\xe1 karta","ob\u010diansk\xfd preukaz","vodi\u010dsk\xfd preukaz","cestovn\xfd pas","karti\u010dka cestovn\xe9ho poistenia","karti\u010dka zdravotn\xe9ho poistenia","dokumenty od cestovnej kancel\xe1rie","ColoredLine","lieky, ktor\xe9 beriem","lieky, ktor\xe9 by sa mohli hodi\u0165","ColoredLine","okuliare","telef\xf3n (+ nab\xedja\u010dka)","z\xe1mky na bato\u017einu (+ k\u013e\xfa\u010de)"]}),n.a.createElement(z,{header:"Oble\u010denie",items:["ko\u0161ele","nohavice","oblek a kravata","plavky"]}))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},23:function(e,t,a){},74:function(e,t,a){e.exports=a(185)},79:function(e,t,a){}},[[74,2,1]]]);
//# sourceMappingURL=main.644fe24e.chunk.js.map
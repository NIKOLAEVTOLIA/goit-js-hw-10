import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as n}from"./assets/vendor-651d7991.js";function i(e,t){return new Promise((s,o)=>{setTimeout(()=>{t==="fulfilled"?s(e):o(e)},e)})}const m=document.querySelector(".form");m.addEventListener("submit",function(e){var o;e.preventDefault();const t=parseInt(this.elements.delay.value,10),s=(o=document.querySelector('input[name="state"]:checked'))==null?void 0:o.value;i(t,s).then(r=>{n.success({messageColor:"#FFF",position:"topRight",backgroundColor:"#59A10D",message:`✅ Fulfilled promise in ${r}ms`})}).catch(r=>{n.error({messageColor:"#FFF",position:"topRight",backgroundColor:"#EF4040",message:`❌ Rejected promise in ${r}ms`})})});
//# sourceMappingURL=commonHelpers2.js.map

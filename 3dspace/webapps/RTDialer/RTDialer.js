define("DS/RTDialer/components/virtual-keyboard/virtual-keyboard",["text!DS/RTDialer/components/virtual-keyboard/virtual-keyboard.html"],function(e){"use strict";return{props:{buttonsValues:Array,submitValue:String},methods:{input:function(e){this.$emit("updateInput",e)},submit:function(){this.$emit("submit",{})}},template:e}}),define("DS/RTDialer/components/dialer/dialer",["DS/RTDialer/components/virtual-keyboard/virtual-keyboard","i18n!DS/RTDialer/assets/nls/feed","DS/RTDialer/assets/country-calling-codes","text!DS/RTDialer/components/dialer/dialer.html"],function(e,t,r,o){"use strict";const n=t.RTDialerCountriesName||t,l=function(e){function t(e){return String.fromCodePoint(127397+e.toUpperCase().charCodeAt(0))}return t(e[0])+t(e[1])};var a=[];for(var i in r){var u=r[i];i=i.replace("-",""),a.push({value:`+${u.replace("-","")}`,label:`${l(i)} +${u} ${n[i]}`,countryCode:i})}return a.sort((e,t)=>e.countryCode.localeCompare(t.countryCode)),{data:()=>({error:"",countrySelector:{model:"",options:a,rules:[e=>e.length>0||t.RuleRequired],placeholder:t.CountrySelectorPlaceholder},phoneInput:{model:"",rules:[e=>e.length>0||t.RuleRequired],placeholder:t.PhoneInputPlaceholder}}),props:["callFunction","callIcon","keyboardValues"],components:{VirtualKeyboard:e},computed:{},methods:{updateInput:function(e){this.phoneInput.model+=e,this.error=""},checkKeyboardInput:function(e){var t=e.keyCode?e.keyCode:e.which;35==t||42==t||t>=48&&t<=57||e.preventDefault()},deleteLastInput:function(){""!=this.phoneInput.model&&(this.phoneInput.model=this.phoneInput.model.slice(0,-1))},submit:function(){var e=this.countrySelector.model+this.phoneInput.model;if(!this.$refs.form.validate())return this.errorMessage();e=e.replace(" ",""),this.callFunction(e)},errorMessage(){this.$message({text:t.ErrorInputNotValid,timeout:5e3,color:"error"})}},template:o}}),define("DS/RTDialer/RTDialer",["vuejs","vu-kit","DS/RTDialer/components/dialer/dialer","i18n!DS/RTDialer/assets/nls/feed","css!DS/RTDialer/RTDialer.css","css!vuekit/vu-kit"],function(e,t,r,o){"use strict";var n={name:"vu-dialer",components:{dialer:r},props:{callFunction:{type:Function,required:!0},callIcon:{type:String,default:'<span class="dialer-btn-icon fonticon fonticon-phone"style="float:none;"></span>'+o.Call},keyboardValues:{type:Array,default:()=>[["1","2","3"],["4","5","6"],["7","8","9"],["*","0","#"]]}},template:'<dialer v-bind="$props" />'},l=e.component("vu-dialer",n);return l.vue3cmp=n,l});
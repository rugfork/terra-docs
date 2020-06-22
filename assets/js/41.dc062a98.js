(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{418:function(t,e,a){"use strict";a.r(e);var s=a(5),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"oracle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle"}},[t._v("#")]),t._v(" Oracle")]),t._v(" "),a("h2",{attrs:{id:"submit-an-exchange-rate-vote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#submit-an-exchange-rate-vote"}},[t._v("#")]),t._v(" Submit an Exchange Rate Vote")]),t._v(" "),a("p",[t._v("Validators must submit two exchange rate vote transactions to participate in the oracle; a "),a("code",[t._v("prevote")]),t._v(" containing the hash of the actual vote in the first vote period, and a "),a("code",[t._v("vote")]),t._v(" containing the salt of the hash submitted in the prevote phase to prove honestly. The hash is the leading 20 bytes of the SHA256 hexa string run over the string of the format "),a("code",[t._v("salt:price:denom:validator-address")]),t._v(".")]),t._v(" "),a("p",[t._v("To submit a prevote, run:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("terracli tx oracle prevote "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("salt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("price"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("validator_address"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --from mykey\n")])])]),a("p",[t._v("After "),a("code",[t._v("VotePeriod")]),t._v(" has expired from the submission of the prevote, the voter must submit the actual exchange rate vote. To do so, run:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("terracli tx oracle vote "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("salt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("price"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("validator_address"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --from mykey "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --validator "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("validator-address"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("Where price is the form of Coin "),a("code",[t._v("8890.32ukrw")])]),t._v(" "),a("p",[t._v("Given that oracle votes have to be submitted in a feed over short time intervals (30 seconds), prevotes and votes will need to be submitted via some persistent server daemon, and not manually. For more information on how to do this, read the "),a("RouterLink",{attrs:{to:"/terracli/validator-oracle.html"}},[t._v("Exchange Rate Oracle")]),t._v(" section of the Validator Handbook, and the "),a("RouterLink",{attrs:{to:"/dev/spec-oracle.html"}},[t._v("Oracle Module Specification")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"delegate-exchange-rate-voting-rights"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delegate-exchange-rate-voting-rights"}},[t._v("#")]),t._v(" Delegate Exchange Rate Voting Rights")]),t._v(" "),a("p",[t._v("A voter may also elect to delegate exchange rate voting to another signing key.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("terracli tx oracle set-feeder "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("feeder_address"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --from"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("mykey\n")])])]),a("p",[t._v("where "),a("code",[t._v("feeder_address")]),t._v(" is the address you want to delegate your voting rights to. Note that the feeder will still need to submit votes on behalf of your validator in order for you to get credit.")])])}),[],!1,null,null,null);e.default=r.exports}}]);
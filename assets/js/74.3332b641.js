(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{467:function(t,e,a){"use strict";a.r(e);var n=a(5),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"query-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-data"}},[t._v("#")]),t._v(" Query data")]),t._v(" "),a("p",[t._v("After you're connected to the blockchain via an "),a("code",[t._v("LCDClient")]),t._v(" instance, you can query data from it. Data access is organized into various module APIs, which are accessible from within the "),a("code",[t._v("LCDClient")]),t._v(" instance. Because they make HTTP requests in the background, they are Promises that can be awaited in order to not block during network IO.")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" marketParams "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" terra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("market"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parameters")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" exchangeRates "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" terra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("oracle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exchangeRates")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("marketParams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("base_pool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("exchangeRates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'uusd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Each module has its own set of querying functions. To get a comprehensive list, explore the module documentation:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://terra-money.github.io/terra.js/modules/client_lcd_api_AuthAPI.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("auth")]),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://terra-money.github.io/terra.js/modules/client_lcd_api_BankAPI.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("bank")]),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://terra-money.github.io/terra.js/modules/client_lcd_api_DistributionAPI.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("distribution")]),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://terra-money.github.io/terra.js/modules/client_lcd_api_GovAPI.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("gov")]),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://terra-money.github.io/terra.js/modules/client_lcd_api_MarketAPI.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("market")]),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://terra-money.github.io/terra.js/modules/client_lcd_api_MintAPI.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("mint")]),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://terra-money.github.io/terra.js/modules/client_lcd_api_MsgAuthAPI.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("msgauth")]),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://terra-money.github.io/terra.js/modules/client_lcd_api_OracleAPI.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("oracle")]),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://terra-money.github.io/terra.js/modules/client_lcd_api_SlashingAPI.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("slashing")]),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://terra-money.github.io/terra.js/modules/client_lcd_api_StakingAPI.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("staking")]),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://terra-money.github.io/terra.js/modules/client_lcd_api_SupplyAPI.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("supply")]),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://terra-money.github.io/terra.js/modules/client_lcd_api_TendermintAPI.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("tendermint")]),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://terra-money.github.io/terra.js/modules/client_lcd_api_TreasuryAPI.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("treasury")]),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://terra-money.github.io/terra.js/modules/client_lcd_api_TxAPI.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("tx")]),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://terra-money.github.io/terra.js/modules/client_lcd_api_WasmAPI.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("wasm")]),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);
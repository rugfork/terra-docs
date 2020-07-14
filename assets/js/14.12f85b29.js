(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{389:function(e,t,a){"use strict";a.r(t);var r=a(5),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"developer-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#developer-guide"}},[e._v("#")]),e._v(" Developer Guide")]),e._v(" "),a("p",[e._v("This document covers tips and guidelines to help you to understand how Terra works and efficiently navigate the codebase of Terra Core, the official Golang reference implementation of the Terra node software.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Terra Core is built using the "),a("a",{attrs:{href:"https://cosmos.network/sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK"),a("OutboundLink")],1),e._v(", which provides a robust framework for constructing blockchains that run atop the "),a("a",{attrs:{href:"https://tendermint.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint"),a("OutboundLink")],1),e._v(" Consensus Protocol.")]),e._v(" "),a("p",[e._v("It is highly recommended that you review these projects before diving into the Terra developer documentation, as they assume familiarity with concepts such as ABCI, Validators, Keepers, Message Handlers, etc.")])]),e._v(" "),a("h2",{attrs:{id:"how-to-use-the-docs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-the-docs"}},[e._v("#")]),e._v(" How to use the Docs")]),e._v(" "),a("p",[e._v("As a developer, you will likely find the "),a("strong",[e._v("Module Specifications")]),e._v(" section the most informative. Each specification starts out with a short description of the module's main function within the architecture of the system, and how it contributes in implementing Terra's features.")]),e._v(" "),a("p",[e._v("Beyond the introduction, each module will lay out a more detailed description of its main process and algorithms, alongside any concepts you may need to know. It is recommended that you start here to understand a module, as it is usually cross-referenced with more specific sections deeper in the spec such as specific state variables, message handlers and functions that may be of interest.")]),e._v(" "),a("p",[e._v("The current function documentation is not an exhaustive reference, but has been written to be a reference companion for those needing to work directly with the Terra Core codebase or understand it. The important functions in each module have been covered, and many of the trivial ones (such as getters and setters) have been left out for economy. Other places where module logic can be found is within either the message handler, or block transitions (begin-blocker and end-blocker).")]),e._v(" "),a("p",[e._v("At the end, the specification lists out various module parameters alongside their default values with a brief explanation of their purpose, and associated events / tags and errors emitted by the module.")]),e._v(" "),a("h2",{attrs:{id:"module-architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-architecture"}},[e._v("#")]),e._v(" Module Architecture")]),e._v(" "),a("p",[e._v("The node software is organized into individual modules that implement different parts of the Terra protocol. Here are they, listed in the order they are initialized during genesis:")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("genaccounts")]),e._v(" - import & export genesis account")]),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/dev/spec-distribution.html"}},[a("code",[e._v("distribution")])]),e._v(": distribute rewards between validators and delegators\n"),a("ul",[a("li",[e._v("tax and reward distribution")]),e._v(" "),a("li",[e._v("community pool")])])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/dev/spec-staking.html"}},[a("code",[e._v("staking")])]),e._v(": validators and Luna")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/dev/spec-auth.html"}},[a("code",[e._v("auth")])]),e._v(": ante handler\n"),a("ul",[a("li",[e._v("vesting accounts")]),e._v(" "),a("li",[e._v("stability layer fee")])])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/dev/spec-bank.html"}},[a("code",[e._v("bank")])]),e._v(" - sending funds from account to account")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/dev/spec-slashing.html"}},[a("code",[e._v("slashing")])]),e._v(" - low-level Tendermint slashing (double-signing, etc)")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/dev/spec-supply.html"}},[a("code",[e._v("supply")])]),e._v(" - Terra / Luna supplies")],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/dev/spec-oracle.html"}},[a("code",[e._v("oracle")])]),e._v(" - exchange rate feed oracle\n"),a("ul",[a("li",[e._v("vote tallying weighted median")]),e._v(" "),a("li",[e._v("ballot rewards")]),e._v(" "),a("li",[e._v("slashing misbehaving oracles")])])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/dev/spec-treasury.html"}},[a("code",[e._v("treasury")])]),e._v(": miner incentive stabilization\n"),a("ul",[a("li",[e._v("macroecnomic monitoring")]),e._v(" "),a("li",[e._v("monetary policy levers (Tax Rate, Reward Weight)")]),e._v(" "),a("li",[e._v("seigniorage settlement")])])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/dev/spec-governance.html"}},[a("code",[e._v("gov")])]),e._v(": on-chain governance\n"),a("ul",[a("li",[e._v("proposals")]),e._v(" "),a("li",[e._v("parameter updating")])])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/dev/spec-market.html"}},[a("code",[e._v("market")])]),e._v(": price-stabilization\n"),a("ul",[a("li",[e._v("Terra<>Terra spot-conversion, Tobin Tax")]),e._v(" "),a("li",[e._v("Terra<>Luna market-maker, Constant-Product spread")])])],1),e._v(" "),a("li",[a("code",[e._v("crisis")]),e._v(" - reports consensus failure state with proof to halt the chain")]),e._v(" "),a("li",[a("code",[e._v("genutil")]),e._v(" - handles "),a("code",[e._v("gentx")]),e._v(" commands\n"),a("ul",[a("li",[e._v("filter and handle "),a("code",[e._v("MsgCreateValidator")]),e._v(" messages")])])])]),e._v(" "),a("h3",{attrs:{id:"inherited-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inherited-modules"}},[e._v("#")]),e._v(" Inherited Modules")]),e._v(" "),a("p",[e._v("Many of the modules in Terra Core are inherited from Cosmos SDK, and are configured to work with Terra through customization in either genesis parameters or by augmenting their functionality with additional code.")]),e._v(" "),a("h2",{attrs:{id:"block-lifecycle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block-lifecycle"}},[e._v("#")]),e._v(" Block Lifecycle")]),e._v(" "),a("p",[e._v("The following processes get executed during each block transition:")]),e._v(" "),a("h3",{attrs:{id:"begin-block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#begin-block"}},[e._v("#")]),e._v(" Begin Block")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Distribution")]),e._v(" "),a("ul",[a("li",[e._v("Distribute rewards for the previous block")])])]),e._v(" "),a("li",[a("p",[e._v("Slashing")]),e._v(" "),a("ul",[a("li",[e._v("Checking of infraction evidence or downtime of validators for double-signing and downtime penalites.")])])])]),e._v(" "),a("h3",{attrs:{id:"process-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process-messages"}},[e._v("#")]),e._v(" Process Messages")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Messages are routed to the modules that are responsible for working them and then procesed by the appropriate Message Handlers.")])]),e._v(" "),a("h3",{attrs:{id:"end-block"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#end-block"}},[e._v("#")]),e._v(" End Block")]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[e._v("Crisis")]),e._v(" "),a("ul",[a("li",[e._v("Check all registered invariants and assert they remain true")])])]),e._v(" "),a("li",[a("p",[e._v("Oracle")]),e._v(" "),a("ul",[a("li",[e._v("If at the end of "),a("code",[e._v("VotePeriod")]),e._v(", run "),a("RouterLink",{attrs:{to:"/dev/spec-oracle.html#voting-procedure"}},[e._v("Voting Procedure")]),e._v(" and "),a("strong",[e._v("update Luna Exchange Rate")]),e._v(".")],1),e._v(" "),a("li",[e._v("If at the end of "),a("code",[e._v("SlashWindow")]),e._v(", "),a("strong",[e._v("penalize validators")]),e._v(" who "),a("RouterLink",{attrs:{to:"/dev/spec-oracle.html#slashing"}},[e._v("missed")]),e._v(" more "),a("code",[e._v("VotePeriod")]),e._v("s than permitted.")],1)])]),e._v(" "),a("li",[a("p",[e._v("Governance")]),e._v(" "),a("ul",[a("li",[e._v("Get rid of inactive proposals, check active proposals whose voting periods have ended for passes, and run registered proposal handler of the passed proposal.")])])]),e._v(" "),a("li",[a("p",[e._v("Market")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/dev/spec-market.html#end-block"}},[e._v("Replenish")]),e._v(" liquidity pools, "),a("strong",[e._v("allowing spread fees to decrease")]),e._v(".")],1)])]),e._v(" "),a("li",[a("p",[e._v("Treasury")]),e._v(" "),a("ul",[a("li",[e._v("If at the end of "),a("code",[e._v("epoch")]),e._v(", update indicators, mint seigniorage, and recalibrate monetary policy levers (tax-rate, reward-weight) for the next epoch.")])])]),e._v(" "),a("li",[a("p",[e._v("Staking")]),e._v(" "),a("ul",[a("li",[e._v("The new set of active validators is determined from the top 100 Luna stakers, and validators that lose their spot within the set are start to unbond.")])])])]),e._v(" "),a("h2",{attrs:{id:"conventions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conventions"}},[e._v("#")]),e._v(" Conventions")]),e._v(" "),a("h3",{attrs:{id:"currency-denominations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#currency-denominations"}},[e._v("#")]),e._v(" Currency Denominations")]),e._v(" "),a("p",[e._v("There are two types of tokens that can be held by accounts and wallets in the Terra protocol:")]),e._v(" "),a("ol",[a("li",[a("p",[a("strong",[e._v("Terra Stablecoins")]),e._v(" are transactional assets that are track the exchange rate of various fiat currencies. By convention, given a fiat currency, the Terra peg that corresponds to it is Terra-"),a("code",[e._v("<3-letter ISO4217 currency-code>")]),e._v(" (see "),a("a",{attrs:{href:"https://www.xe.com/iso4217.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(") abbreviated "),a("code",[e._v("<country-code>T")]),e._v(", where the "),a("code",[e._v("T")]),e._v(" replaces the currency's designator. For instance, TerraKRW is the peg for the Korean Won, and is abbreviated KRT.")]),e._v(" "),a("p",[e._v('The flagship, standard Terra currency is TerraSDR, or SDT, the peg to the IMF\'s Special Drawing Rights. The protocol will use SDT as its default, "base" currency to do calculations and setting standards.')])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Luna")]),e._v(", the native staking asset that entitles the staking delegator to mining rewards (including exchange rate ballot rewards) if bonded to an active validator. Luna is also is necessary for making governance proposals and collateralizing the Terra economy.")])])]),e._v(" "),a("p",[e._v("Both Terra (of all denominations) and Luna tokens are divisible up to microunits ("),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"SVG"}},[a("svg",{staticStyle:{"vertical-align":"-0.05ex"},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"6.18ex",height:"2.005ex",viewBox:"0 -864 2731.7 886"}},[a("g",{attrs:{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"matrix(1 0 0 -1 0 0)"}},[a("g",{attrs:{"data-mml-node":"math"}},[a("g",{attrs:{"data-mml-node":"mo"}},[a("path",{attrs:{"data-c":"D7",d:"M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z"}})]),a("g",{attrs:{"data-mml-node":"msup",transform:"translate(778, 0)"}},[a("g",{attrs:{"data-mml-node":"mn"}},[a("path",{attrs:{"data-c":"31",d:"M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"}}),a("path",{attrs:{"data-c":"30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z",transform:"translate(500, 0)"}})]),a("g",{attrs:{"data-mml-node":"TeXAtom",transform:"translate(1000, 393.1) scale(0.707)"}},[a("g",{attrs:{"data-mml-node":"mo"}},[a("path",{attrs:{"data-c":"2212",d:"M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z"}})]),a("g",{attrs:{"data-mml-node":"mn",transform:"translate(778, 0)"}},[a("path",{attrs:{"data-c":"36",d:"M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z"}})])])])])])])]),e._v("). The micro-unit is considered the atomic unit of tokens, and cannot be further divided. Below is a list of several denominations that are recognized by the protocol at the time of writing:")],1),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Denomination")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Micro-Unit")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Code")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("Luna")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("µLuna")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("uluna")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("0.000001 Luna")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("TerraSDR")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("µSDR")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("usdr")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("0.000001 SDT")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("TerraKRW")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("µKRW")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("ukrw")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("0.000001 KRT")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("TerraUSD")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("µUSD")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("uusd")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("0.000001 UST")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("TerraMNT")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("µMNT")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[e._v("umnt")])]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("0.000001 MNT")])])])]),e._v(" "),a("p",[e._v("Note that the Terra protocol is only aware of the value of fiat currencies through their Terra stablecoin counterparts, which are assumed to trade relatively close to the value of the fiat currency they are pegged to, due to arbitrage activity.")])])}),[],!1,null,null,null);t.default=o.exports}}]);
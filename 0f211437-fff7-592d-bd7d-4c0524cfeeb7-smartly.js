/*! For license information please see LICENSE under https://github.com/sburke781/Smartly-Drag-And-Drop */
function copyToClipboard(textToCopy) {
    // navigator clipboard api needs a secure context (https)
    if (navigator.clipboard && window.isSecureContext) {
        // navigator clipboard api method'
        return navigator.clipboard.writeText(textToCopy);
    } else {
        // text area method
        let textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        // make the textarea out of viewport
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy')
		textArea.remove();
        
    }
}
!function (e) {
    var t = {};
    function i(n) {
        if (t[n])
            return t[n].exports;
        var s = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(s.exports, s, s.exports, i),
        s.l = !0,
        s.exports
    }
    i.m = e,
    i.c = t,
    i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    },
    i.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var s in e)
                i.d(n, s, function (t) {
                    return e[t]
                }
                    .bind(null, s));
        return n
    },
    i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        }
         : function () {
            return e
        };
        return i.d(t, "a", t),
        t
    },
    i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    i.p = "/dist/",
    i(i.s = 12)
}
([function (e) {
            e.exports = JSON.parse('{"customJS":"!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){\\"undefined\\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:\\"Module\\"}),Object.defineProperty(t,\\"__esModule\\",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&\\"object\\"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,\\"default\\",{enumerable:!0,value:t}),2&e&&\\"string\\"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,\\"a\\",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p=\\"/dist/\\",n(n.s=0)}([function(t,e,n){\\"use strict\\";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,c)}a((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},\\"function\\"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError(\\"Generator is already executing.\\");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(t,u)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};r(void 0,void 0,void 0,(function(){var t,e,n,i,u,c,a,l;return o(this,(function(s){switch(s.label){case 0:return t=document.getElementsByTagName(\\"body\\")[0],e=document.getElementById(\\"inserted-body-script\\"),i=function(t){return r(void 0,void 0,void 0,(function(){return o(this,(function(e){return[2,fetch(t).then((function(t){return 404!=t.status})).catch((function(t){return!1}))]}))}))},(n=null!=e)||(e=document.createElement(\\"script\\")).setAttribute(\\"id\\",\\"inserted-body-script\\"),e.type=\\"text/javascript\\",u=!1,c=!1,\\"cloud.hubitat.com\\"===window.location.hostname?[3,3]:[4,i(\\"/local/0f211437-fff7-592d-bd7d-4c0524cfeeb7-smartly.js\\")];case 1:return(u=s.sent())?[3,3]:[4,i(\\"/local/smartly.js\\")];case 2:c=s.sent(),s.label=3;case 3:return\\"cloud.hubitat.com\\"!==window.location.hostname&&(u||c)?e.src=u?\\"/local/0f211437-fff7-592d-bd7d-4c0524cfeeb7-smartly.js\\":\\"/local/smartly.js\\":e.src=\\"https://hubitat.ezeek.us/smartly-base/assets/dist/smartly.js?1599929911\\",n||t.appendChild(e),a=document.getElementById(\\"inserted-body-html\\"),(l=null!=a)||(a=document.createElement(\\"div\\")).setAttribute(\\"id\\",\\"inserted-body-html\\"),a.innerHTML=\\"\\",l||t.prepend(a),[2]}}))}))}]);","customHTML":"<style>.hdi,\\n  .modal,\\n  #open-modal-btn { display: none; }\\n  #hidden-json-update{\\n    visibility:hidden;\\n    position:fixed;\\n    z-index:-99999\\n  }\\n  #open-modal-btn-dummy { opacity: .3 }</style><div id=open-modal-btns class=hdi style=\\"margin: -.1em .5em 0 0; text-shadow: none;\\"><div id=open-modal-btn><a href=# class=material-icons>pets</a></div><div id=open-modal-btn-dummy><a href=# class=material-icons>pets</a></div></div><div id=modal-1 class=\\"modal hdi\\" aria-hidden=true><div tabindex=-1 data-micromodal-close><div role=dialog aria-modal=true aria-labelledby=modal-1-title><div id=grid-header><div id=grid-buttons><span id=grid-label>drag and drop!</span> <a id=close-modal-btn class=\\"material-icons cursor-pointer\\" aria-label=\\"close grid\\">pets</a> <a class=\\"material-icons cursor-pointer\\" aria-label=\\"save grid\\" id=saveGrid href=#>save</a> <a class=\\"material-icons cursor-pointer\\" aria-label=\\"refresh grid\\" id=loadGrid>refresh</a></div><span id=grid-message></span> <span id=he-logo-block></span></div><div id=grid-stack-scroller><div class=grid-stack></div></div></div></div></div><div id=loading-overlay style=\\"display: none\\" class=\\"w-full h-screen flex flex-col justify-center\\"><div class=\\"text-center text-3xl\\">Loading Layout...<br><span class=loader></span></div></div>"}')
        }, function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.obsolete = function (e, t, i, n, s) {
                let o = (...o) => (console.warn("gridstack.js: Function `" + i + "` is deprecated in " + s + " and has been replaced with `" + n + "`. It will be **completely** removed in v1.0"), t.apply(e, o));
                return o.prototype = t.prototype,
                o
            },
            t.obsoleteOpts = function (e, t, i, n) {
                void 0 !== e[t] && (e[i] = e[t], console.warn("gridstack.js: Option `" + t + "` is deprecated in " + n + " and has been replaced with `" + i + "`. It will be **completely** removed in v1.0"))
            },
            t.obsoleteOptsDel = function (e, t, i, n) {
                void 0 !== e[t] && console.warn("gridstack.js: Option `" + t + "` is deprecated in " + i + n)
            },
            t.obsoleteAttr = function (e, t, i, n) {
                let s = e.getAttribute(t);
                null !== s && (e.setAttribute(i, s), console.warn("gridstack.js: attribute `" + t + "`=" + s + " is deprecated on this object in " + n + " and has been replaced with `" + i + "`. It will be **completely** removed in v1.0"))
            };
            class n {
                static isIntercepted(e, t) {
                    return !(e.x + e.width <= t.x || t.x + t.width <= e.x || e.y + e.height <= t.y || t.y + t.height <= e.y)
                }
                static sort(e, t, i) {
                    if (!i) {
                        let t = e.map(e => e.x + e.width);
                        i = Math.max(...t)
                    }
                    return -1 === t ? e.sort((e, t) => t.x + t.y * i - (e.x + e.y * i)) : e.sort((e, t) => e.x + e.y * i - (t.x + t.y * i))
                }
                static createStylesheet(e, t) {
                    let i = document.createElement("style");
                    return i.setAttribute("type", "text/css"),
                    i.setAttribute("data-gs-style-id", e),
                    i.styleSheet ? i.styleSheet.cssText = "" : i.appendChild(document.createTextNode("")),
                    t ? t.insertBefore(i, t.firstChild) : (t = document.getElementsByTagName("head")[0]).appendChild(i),
                    i.sheet
                }
                static removeStylesheet(e) {
                    let t = document.querySelector("STYLE[data-gs-style-id=" + e + "]");
                    t && t.parentNode && t.parentNode.removeChild(t)
                }
                static addCSSRule(e, t, i) {
                    "function" == typeof e.addRule ? e.addRule(t, i) : "function" == typeof e.insertRule && e.insertRule(`${t}{${i}}`)
                }
                static toBool(e) {
                    return "boolean" == typeof e ? e : "string" == typeof e ? !("" === (e = e.toLowerCase()) || "no" === e || "false" === e || "0" === e) : Boolean(e)
                }
                static toNumber(e) {
                    return null === e || 0 === e.length ? null : Number(e)
                }
                static parseHeight(e) {
                    let t,
                    i = "px";
                    if ("string" == typeof e) {
                        let n = e.match(/^(-[0-9]+\.[0-9]+|[0-9]*\.[0-9]+|-[0-9]+|[0-9]+)(px|em|rem|vh|vw|%)?$/);
                        if (!n)
                            throw new Error("Invalid height");
                        i = n[2] || "px",
                        t = parseFloat(n[1])
                    } else
                        t = e;
                    return {
                        height: t,
                        unit: i
                    }
                }
                static defaults(e, ...t) {
                    return t.forEach((function (t) {
                            for (let i in t)
                                !Object.prototype.hasOwnProperty.call(t, i) || null !== e[i] && void 0 !== e[i] || (e[i] = t[i])
                        })),
                    e
                }
                static clone(e) {
                    return Object.assign({}, e)
                }
                static closestByClass(e, t) {
                    return (e = e.parentElement) ? e.classList.contains(t) ? e : n.closestByClass(e, t) : null
                }
                static throttle(e, t) {
                    let i = !1;
                    return function (...n) {
                        i || (e.apply(this, n), i = !0, setTimeout((function () {
                                    i = !1
                                }), t))
                    }
                }
                static removePositioningStyles(e) {
                    let t = e.style;
                    t.position && t.removeProperty("position"),
                    t.left && t.removeProperty("left"),
                    t.top && t.removeProperty("top"),
                    t.width && t.removeProperty("width"),
                    t.height && t.removeProperty("height")
                }
                static getScrollParent(e) {
                    let t;
                    return t = null === e ? null : e.scrollHeight > e.clientHeight ? e : this.getScrollParent(e.parentElement),
                    t
                }
                static updateScrollPosition(e, t, i) {
                    let n = e.getBoundingClientRect(),
                    s = window.innerHeight || document.documentElement.clientHeight;
                    if (n.top < 0 || n.bottom > s) {
                        let o = n.bottom - s,
                        r = n.top,
                        a = this.getScrollParent(e);
                        if (null !== a) {
                            let l = a.scrollTop;
                            n.top < 0 && i < 0 ? e.offsetHeight > s ? a.scrollTop += i : a.scrollTop += Math.abs(r) > Math.abs(i) ? i : r : i > 0 && (e.offsetHeight > s ? a.scrollTop += i : a.scrollTop += o > i ? i : o),
                            t.top += a.scrollTop - l
                        }
                    }
                }
            }
            t.Utils = n
        }, function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            class n {
                constructor(e) {
                    this.grid = e
                }
                static registerPlugin(e) {
                    n.registeredPlugins.push(e)
                }
                static get() {
                    return n.registeredPlugins[0] || n
                }
                resizable(e, t, i, n) {
                    return this
                }
                draggable(e, t, i, n) {
                    return this
                }
                dragIn(e, t) {
                    return this
                }
                isDraggable(e) {
                    return !1
                }
                droppable(e, t, i, n) {
                    return this
                }
                isDroppable(e) {
                    return !1
                }
                on(e, t, i) {
                    return this
                }
                off(e, t) {
                    return this
                }
            }
            n.registeredPlugins = [],
            t.GridStackDD = n
        }, function (e, t, i) {
            "use strict";
            function n(e) {
                for (var i in e)
                    t.hasOwnProperty(i) || (t[i] = e[i])
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            i(6);
            const s = i(4),
            o = i(1),
            r = i(2);
            n(i(1)),
            n(i(4)),
            n(i(2)),
            i(5),
            n(i(5));
            class a {
                constructor(e, t = {}) {
                    this._gsEventHandler = {},
                    this.setGridWidth = o.obsolete(this, a.prototype.column, "setGridWidth", "column", "v0.5.3"),
                    this.setColumn = o.obsolete(this, a.prototype.column, "setColumn", "column", "v0.6.4"),
                    this.getGridHeight = o.obsolete(this, s.GridStackEngine.prototype.getRow, "getGridHeight", "getRow", "v1.0.0"),
                    this.el = e,
                    t = t || {},
                    o.obsoleteOpts(t, "width", "column", "v0.5.3"),
                    o.obsoleteOpts(t, "height", "maxRow", "v0.5.3"),
                    o.obsoleteOpts(t, "verticalMargin", "margin", "v2.0"),
                    o.obsoleteOptsDel(t, "oneColumnModeClass", "v0.6.3", ". Use class `.grid-stack-1` instead"),
                    o.obsoleteAttr(this.el, "data-gs-width", "data-gs-column", "v0.5.3"),
                    o.obsoleteAttr(this.el, "data-gs-height", "data-gs-max-row", "v0.5.3"),
                    o.obsoleteAttr(this.el, "data-gs-current-height", "data-gs-current-row", "v1.0.0"),
                    t.row && (t.minRow = t.maxRow = t.row, delete t.row);
                    let i = o.Utils.toNumber(e.getAttribute("data-gs-row")),
                    n = {
                        column: o.Utils.toNumber(e.getAttribute("data-gs-column")) || 12,
                        minRow: i || (o.Utils.toNumber(e.getAttribute("data-gs-min-row")) || 0),
                        maxRow: i || (o.Utils.toNumber(e.getAttribute("data-gs-max-row")) || 0),
                        itemClass: "grid-stack-item",
                        placeholderClass: "grid-stack-placeholder",
                        placeholderText: "",
                        handle: ".grid-stack-item-content",
                        handleClass: null,
                        styleInHead: !1,
                        cellHeight: "auto",
                        margin: 10,
                        auto: !0,
                        minWidth: 768,
                        float: !1,
                        staticGrid: !1,
                        _class: "grid-stack-instance-" + (1e4 * Math.random()).toFixed(0),
                        animate: o.Utils.toBool(e.getAttribute("data-gs-animate")) || !1,
                        alwaysShowResizeHandle: !1,
                        resizable: {
                            autoHide: !t.alwaysShowResizeHandle,
                            handles: "se"
                        },
                        draggable: {
                            handle: (t.handleClass ? "." + t.handleClass : t.handle ? t.handle : "") || ".grid-stack-item-content",
                            scroll: !1,
                            appendTo: "body"
                        },
                        dragIn: void 0,
                        dragInOptions: {
                            revert: "invalid",
                            handle: ".grid-stack-item-content",
                            scroll: !1,
                            appendTo: "body"
                        },
                        disableDrag: !1,
                        disableResize: !1,
                        rtl: "auto",
                        removable: !1,
                        removableOptions: {
                            accept: "." + (t.itemClass || "grid-stack-item")
                        },
                        removeTimeout: 2e3,
                        marginUnit: "px",
                        cellHeightUnit: "px",
                        disableOneColumnMode: !1,
                        oneColumnModeDomSort: !1
                    };
                    if (this.opts = o.Utils.defaults(t, n), this.initMargin(), !1 === this.opts.ddPlugin ? this.opts.ddPlugin = r.GridStackDD : void 0 === this.opts.ddPlugin && (this.opts.ddPlugin = r.GridStackDD.get()), this.dd = new this.opts.ddPlugin(this), "auto" === this.opts.rtl && (this.opts.rtl = "rtl" === e.style.direction), this.opts.rtl && this.el.classList.add("grid-stack-rtl"), this.opts._isNested = null !== o.Utils.closestByClass(this.el, t.itemClass), this.opts._isNested && this.el.classList.add("grid-stack-nested"), this._isAutoCellHeight = "auto" === this.opts.cellHeight, this._isAutoCellHeight) {
                        let e = -this.opts.marginRight - this.opts.marginLeft + this.opts.marginTop + this.opts.marginBottom;
                        this.cellHeight(this.cellWidth() + e, !1)
                    } else
                        this.cellHeight(this.opts.cellHeight, !1);
                    if (this.el.classList.add(this.opts._class), this._setStaticClass(), this._initStyles(), this.engine = new s.GridStackEngine(this.opts.column, (e, t = !0) => {
                            let i = 0;
                            this.engine.nodes.forEach(e => {
                                i = Math.max(i, e.y + e.height)
                            }),
                            e.forEach(e => {
                                let i = e.el;
                                t && null === e._id ? i && i.parentNode && i.parentNode.removeChild(i) : this._writeAttrs(i, e.x, e.y, e.width, e.height)
                            }),
                            this._updateStyles(i + 10)
                        }, this.opts.float, this.opts.maxRow), this.opts.auto) {
                        let e = [];
                        this.getGridItems().forEach(t => {
                            let i = parseInt(t.getAttribute("data-gs-x")),
                            n = parseInt(t.getAttribute("data-gs-y"));
                            e.push({
                                el: t,
                                i: (Number.isNaN(i) ? 1e3 : i) + (Number.isNaN(n) ? 1e3 : n) * this.opts.column
                            })
                        }),
                        e.sort(e => e.i).forEach(e => {
                            this._prepareElement(e.el)
                        })
                    }
                    this.engine.saveInitial(),
                    this.setAnimation(this.opts.animate);
                    let l = document.createElement("div");
                    l.className = "placeholder-content",
                    l.innerHTML = this.opts.placeholderText,
                    this.placeholder = document.createElement("div"),
                    this.placeholder.classList.add(this.opts.placeholderClass, this.opts.itemClass),
                    this.placeholder.appendChild(l),
                    this._updateContainerHeight(),
                    window.addEventListener("resize", this._onResizeHandler.bind(this)),
                    this._onResizeHandler(),
                    this._setupDragIn(),
                    this._setupRemoveDrop(),
                    this._setupAcceptWidget()
                }
                static init(e = {}, t = ".grid-stack") {
                    let i = a.getGridElement(t);
                    return i ? (i.gridstack || (i.gridstack = new a(i, o.Utils.clone(e))), i.gridstack) : ("string" == typeof t ? console.log("gridstack.js: init() no grid was found. Did you forget class " + t + ' on your element ?\n".grid-stack" is required for proper CSS styling and drag/drop.') : console.log("gridstack.js: init() no grid element was passed."), null)
                }
                static initAll(e = {}, t = ".grid-stack") {
                    let i = [];
                    return a.getGridElements(t).forEach(t => {
                        t.gridstack || (t.gridstack = new a(t, o.Utils.clone(e))),
                        i.push(t.gridstack)
                    }),
                    0 === i.length && console.log("gridstack.js: initAll() no grid was found. Did you forget class " + t + ' on your element ?\n".grid-stack" is required for proper CSS styling and drag/drop.'),
                    i
                }
                addWidget(e, t) {
                    if (arguments.length > 2) {
                        console.warn("gridstack.ts: `addWidget(el, x, y, width...)` is deprecated. Use `addWidget(el, {x, y, width,...})`. It will be removed soon");
                        let t = arguments,
                        i = 1,
                        n = {
                            x: t[i++],
                            y: t[i++],
                            width: t[i++],
                            height: t[i++],
                            autoPosition: t[i++],
                            minWidth: t[i++],
                            maxWidth: t[i++],
                            minHeight: t[i++],
                            maxHeight: t[i++],
                            id: t[i++]
                        };
                        return this.addWidget(e, n)
                    }
                    if ("string" == typeof e) {
                        let t = document.implementation.createHTMLDocument();
                        t.body.innerHTML = e,
                        e = t.body.children[0]
                    }
                    if (t) {
                        let i = this._readAttr(e);
                        o.Utils.defaults(t, i),
                        this.engine.prepareNode(t),
                        this._writeAttr(e, t)
                    }
                    return this.el.appendChild(e),
                    this.makeWidget(e)
                }
                save() {
                    return this.engine.save()
                }
                load(e, t = !0) {
                    let i = a.Utils.sort(e),
                    n = [];
                    if (this.batchUpdate(), t) {
                        [...this.engine.nodes].forEach(e => {
                            i.find(t => e.id === t.id) || ("function" == typeof t ? t(e, !1) : (n.push(e), this.removeWidget(e.el, !0, !1)))
                        })
                    }
                    i.forEach(e => {
                        let i = this.engine.nodes.find(t => t.id === e.id);
                        i ? this.update(i.el, e.x, e.y, e.width, e.height) : t && ("function" == typeof t ? t(e, !0) : this.addWidget('<div><div class="grid-stack-item-content"></div></div>', e))
                    }),
                    this.engine.removedNodes = n,
                    this.commit()
                }
                batchUpdate() {
                    return this.engine.batchUpdate(),
                    this
                }
                getCellHeight() {
                    if (this.opts.cellHeight && "auto" !== this.opts.cellHeight)
                        return this.opts.cellHeight;
                    let e = this.el.querySelector("." + this.opts.itemClass),
                    t = o.Utils.toNumber(e.getAttribute("data-gs-height"));
                    return Math.round(e.offsetHeight / t)
                }
                cellHeight(e, t = !0) {
                    let i = o.Utils.parseHeight(e);
                    return this.opts.cellHeightUnit === i.unit && this.opts.cellHeight === i.height || (this.opts.cellHeightUnit = i.unit, this.opts.cellHeight = i.height, t && this._updateStyles()),
                    this
                }
                cellWidth() {
                    return this.el.offsetWidth / this.opts.column
                }
                commit() {
                    return this.engine.commit(),
                    this._triggerRemoveEvent(),
                    this._triggerAddEvent(),
                    this._triggerChangeEvent(),
                    this
                }
                compact() {
                    return this.engine.compact(),
                    this._triggerChangeEvent(),
                    this
                }
                column(e, t) {
                    if (this.opts.column === e)
                        return this;
                    let i = this.opts.column;
                    if (1 === e ? this._prevColumn = i : delete this._prevColumn, this.el.classList.remove("grid-stack-" + i), this.el.classList.add("grid-stack-" + e), this.opts.column = this.engine.column = e, !0 === t)
                        return this;
                    let n = void 0;
                    return 1 === e && this.opts.oneColumnModeDomSort && (n = [], this.getGridItems().forEach(e => {
                            e.gridstackNode && n.push(e.gridstackNode)
                        }), n.length || (n = void 0)),
                    this.engine.updateNodeWidths(i, e, n),
                    this._triggerChangeEvent(!0),
                    this
                }
                getColumn() {
                    return this.opts.column
                }
                getGridItems() {
                    return Array.from(this.el.children).filter(e => e.matches("." + this.opts.itemClass) && !e.matches("." + this.opts.placeholderClass))
                }
                destroy(e = !0) {
                    return window.removeEventListener("resize", this._onResizeHandler),
                    this.disable(),
                    e ? this.el.parentNode.removeChild(this.el) : (this.removeAll(e), this.el.classList.remove(this.opts._class), delete this.el.gridstack),
                    o.Utils.removeStylesheet(this._stylesId),
                    delete this.engine,
                    this
                }
                disable() {
                    return this.enableMove(!1),
                    this.enableResize(!1),
                    this._triggerEvent("disable"),
                    this
                }
                enable() {
                    return this.enableMove(!0),
                    this.enableResize(!0),
                    this._triggerEvent("enable"),
                    this
                }
                enableMove(e, t = !0) {
                    return this.getGridItems().forEach(t => this.movable(t, e)),
                    t && (this.opts.disableDrag = !e),
                    this
                }
                enableResize(e, t = !0) {
                    return this.getGridItems().forEach(t => this.resizable(t, e)),
                    t && (this.opts.disableResize = !e),
                    this
                }
                float(e) {
                    return this.engine.float = e,
                    this._triggerChangeEvent(),
                    this
                }
                getFloat() {
                    return this.engine.float
                }
                getCellFromPixel(e, t = !1) {
                    let i,
                    n = this.el.getBoundingClientRect();
                    i = t ? {
                        top: n.top + document.documentElement.scrollTop,
                        left: n.left
                    }
                     : {
                        top: this.el.offsetTop,
                        left: this.el.offsetLeft
                    };
                    let s = e.left - i.left,
                    o = e.top - i.top,
                    r = n.width / this.opts.column,
                    a = n.height / parseInt(this.el.getAttribute("data-gs-current-row"));
                    return {
                        x: Math.floor(s / r),
                        y: Math.floor(o / a)
                    }
                }
                getRow() {
                    return Math.max(this.engine.getRow(), this.opts.minRow)
                }
                isAreaEmpty(e, t, i, n) {
                    return this.engine.isAreaEmpty(e, t, i, n)
                }
                locked(e, t) {
                    return this.getElements(e).forEach(e => {
                        let i = e.gridstackNode;
                        i && (i.locked = t || !1, i.locked ? e.setAttribute("data-gs-locked", "yes") : e.removeAttribute("data-gs-locked"))
                    }),
                    this
                }
                makeWidget(e) {
                    let t = this.getElement(e);
                    return this._prepareElement(t, !0),
                    this._updateContainerHeight(),
                    this._triggerAddEvent(),
                    this._triggerChangeEvent(),
                    t
                }
                maxWidth(e, t) {
                    return this.getElements(e).forEach(e => {
                        let i = e.gridstackNode;
                        i && (i.maxWidth = t || void 0, t ? e.setAttribute("data-gs-max-width", String(t)) : e.removeAttribute("data-gs-max-width"))
                    }),
                    this
                }
                minWidth(e, t) {
                    return this.getElements(e).forEach(e => {
                        e.gridstackNode && (t ? e.setAttribute("data-gs-min-width", String(t)) : e.removeAttribute("data-gs-min-width"))
                    }),
                    this
                }
                maxHeight(e, t) {
                    return this.getElements(e).forEach(e => {
                        e.gridstackNode && (t ? e.setAttribute("data-gs-max-height", String(t)) : e.removeAttribute("data-gs-max-height"))
                    }),
                    this
                }
                minHeight(e, t) {
                    return this.getElements(e).forEach(e => {
                        e.gridstackNode && (t ? e.setAttribute("data-gs-min-height", String(t)) : e.removeAttribute("data-gs-min-height"))
                    }),
                    this
                }
                movable(e, t) {
                    return this.getElements(e).forEach(e => {
                        let i = e.gridstackNode;
                        i && (i.noMove = !t, i.noMove ? (this.dd.draggable(e, "disable"), e.classList.remove("ui-draggable-handle")) : (this.dd.draggable(e, "enable"), e.classList.remove("ui-draggable-handle")))
                    }),
                    this
                }
                move(e, t, i) {
                    return this._updateElement(e, (e, n) => {
                        t = void 0 !== t ? t : n.x,
                        i = void 0 !== i ? i : n.y,
                        this.engine.moveNode(n, t, i, n.width, n.height)
                    }),
                    this
                }
                on(e, t) {
                    if (-1 !== e.indexOf(" ")) {
                        return e.split(" ").forEach(e => this.on(e, t)),
                        this
                    }
                    if ("change" === e || "added" === e || "removed" === e || "enable" === e || "disable" === e) {
                        let i = "enable" === e || "disable" === e;
                        this._gsEventHandler[e] = i ? e => t(e) : e => t(e, e.detail),
                        this.el.addEventListener(e, this._gsEventHandler[e])
                    } else
                        "dragstart" === e || "dragstop" === e || "resizestart" === e || "resizestop" === e || "dropped" === e ? this._gsEventHandler[e] = t : console.log("gridstack.on(" + e + ") event not supported");
                    return this
                }
                off(e) {
                    if (-1 !== e.indexOf(" ")) {
                        return e.split(" ").forEach(e => this.off(e)),
                        this
                    }
                    return "change" !== e && "added" !== e && "removed" !== e && "enable" !== e && "disable" !== e || this._gsEventHandler[e] && this.el.removeEventListener(e, this._gsEventHandler[e]),
                    delete this._gsEventHandler[e],
                    this
                }
                removeWidget(e, t = !0, i = !0) {
                    return this.getElements(e).forEach(e => {
                        if (e.parentElement !== this.el)
                            return;
                        let n = e.gridstackNode;
                        n || (n = this.engine.nodes.find(t => e === t.el)),
                        n && (delete e.gridstackNode, this.dd.draggable(e, "destroy").resizable(e, "destroy"), this.engine.removeNode(n, t, i), t && e.parentElement && e.remove())
                    }),
                    i && (this._triggerRemoveEvent(), this._triggerChangeEvent()),
                    this
                }
                removeAll(e = !0) {
                    return this.engine.nodes.forEach(e => {
                        delete e.el.gridstackNode,
                        this.dd.draggable(e.el, "destroy").resizable(e.el, "destroy")
                    }),
                    this.engine.removeAll(e),
                    this._triggerRemoveEvent(),
                    this
                }
                resize(e, t, i) {
                    return this._updateElement(e, (e, n) => {
                        t = t || n.width,
                        i = i || n.height,
                        this.engine.moveNode(n, n.x, n.y, t, i)
                    }),
                    this
                }
                resizable(e, t) {
                    return this.getElements(e).forEach(e => {
                        let i = e.gridstackNode;
                        i && (i.noResize = !t, i.noResize ? this.dd.resizable(e, "disable") : this.dd.resizable(e, "enable"))
                    }),
                    this
                }
                setAnimation(e) {
                    return e ? this.el.classList.add("grid-stack-animate") : this.el.classList.remove("grid-stack-animate"),
                    this
                }
                setStatic(e) {
                    return this.opts.staticGrid = !0 === e,
                    this.enableMove(!e),
                    this.enableResize(!e),
                    this._setStaticClass(),
                    this
                }
                update(e, t, i, n, s) {
                    return this._updateElement(e, (e, o) => {
                        t = void 0 !== t ? t : o.x,
                        i = void 0 !== i ? i : o.y,
                        n = n || o.width,
                        s = s || o.height,
                        this.engine.moveNode(o, t, i, n, s)
                    }),
                    this
                }
                margin(e) {
                    let t = o.Utils.parseHeight(e);
                    if (this.opts.marginUnit !== t.unit || this.opts.margin !== t.height)
                        return this.opts.marginUnit = t.unit, this.opts.marginTop = this.opts.marginBottom = this.opts.marginLeft = this.opts.marginRight = this.opts.margin = t.height, this._updateStyles(), this
                }
                getMargin() {
                    return this.opts.margin
                }
                willItFit(e, t, i, n, s) {
                    return this.engine.canBePlacedWithRespectToHeight({
                        x: e,
                        y: t,
                        width: i,
                        height: n,
                        autoPosition: s
                    })
                }
                _triggerChangeEvent(e) {
                    if (this.engine.batchMode)
                        return this;
                    let t = this.engine.getDirtyNodes(!0);
                    return t && t.length && (e || this.engine.layoutsNodesChange(t), this._triggerEvent("change", t)),
                    this.engine.saveInitial(),
                    this
                }
                _triggerAddEvent() {
                    return this.engine.batchMode || this.engine.addedNodes && this.engine.addedNodes.length > 0 && (this.engine.layoutsNodesChange(this.engine.addedNodes), this.engine.addedNodes.forEach(e => {
                            delete e._dirty
                        }), this._triggerEvent("added", this.engine.addedNodes), this.engine.addedNodes = []),
                    this
                }
                _triggerRemoveEvent() {
                    return this.engine.batchMode || this.engine.removedNodes && this.engine.removedNodes.length > 0 && (this._triggerEvent("removed", this.engine.removedNodes), this.engine.removedNodes = []),
                    this
                }
                _triggerEvent(e, t) {
                    let i = t ? new CustomEvent(e, {
                        bubbles: !1,
                        detail: t
                    }) : new Event(e);
                    return this.el.dispatchEvent(i),
                    this
                }
                _initStyles() {
                    this._stylesId && o.Utils.removeStylesheet(this._stylesId),
                    this._stylesId = "gridstack-style-" + (1e5 * Math.random()).toFixed();
                    let e = this.opts.styleInHead ? void 0 : this.el.parentNode;
                    return this._styles = o.Utils.createStylesheet(this._stylesId, e),
                    null !== this._styles && (this._styles._max = 0),
                    this
                }
                _updateStyles(e) {
                    if (!this._styles)
                        return this;
                    if (void 0 === e && (e = this._styles._max), this._initStyles(), this._updateContainerHeight(), !this.opts.cellHeight)
                        return this;
                    if (0 !== this._styles._max && e <= this._styles._max)
                        return this;
                    let t = this.opts.cellHeight,
                    i = this.opts.cellHeightUnit,
                    n = `.${this.opts._class} > .${this.opts.itemClass}`;
                    if (0 === this._styles._max) {
                        o.Utils.addCSSRule(this._styles, n, `min-height: ${t}${i}`);
                        let e = this.opts.marginTop + this.opts.marginUnit,
                        s = this.opts.marginBottom + this.opts.marginUnit,
                        r = this.opts.marginRight + this.opts.marginUnit,
                        a = this.opts.marginLeft + this.opts.marginUnit,
                        l = n + " > .grid-stack-item-content",
                        h = `.${this.opts._class} > .grid-stack-placeholder > .placeholder-content`;
                        o.Utils.addCSSRule(this._styles, l, `top: ${e}; right: ${r}; bottom: ${s}; left: ${a};`),
                        o.Utils.addCSSRule(this._styles, h, `top: ${e}; right: ${r}; bottom: ${s}; left: ${a};`),
                        o.Utils.addCSSRule(this._styles, n + " > .ui-resizable-ne", "right: " + r),
                        o.Utils.addCSSRule(this._styles, n + " > .ui-resizable-e", "right: " + r),
                        o.Utils.addCSSRule(this._styles, n + " > .ui-resizable-se", `right: ${r}; bottom: ${s}`),
                        o.Utils.addCSSRule(this._styles, n + " > .ui-resizable-nw", "left: " + a),
                        o.Utils.addCSSRule(this._styles, n + " > .ui-resizable-w", "left: " + a),
                        o.Utils.addCSSRule(this._styles, n + " > .ui-resizable-sw", `left: ${a}; bottom: ${s}`)
                    }
                    if (e > this._styles._max) {
                        let s = e => t * e + i;
                        for (let t = this._styles._max + 1; t <= e; t++) {
                            let e = s(t);
                            o.Utils.addCSSRule(this._styles, `${n}[data-gs-y="${t-1}"]`, "top: " + s(t - 1)),
                            o.Utils.addCSSRule(this._styles, `${n}[data-gs-height="${t}"]`, "height: " + e),
                            o.Utils.addCSSRule(this._styles, `${n}[data-gs-min-height="${t}"]`, "min-height: " + e),
                            o.Utils.addCSSRule(this._styles, `${n}[data-gs-max-height="${t}"]`, "max-height: " + e)
                        }
                        this._styles._max = e
                    }
                    return this
                }
                _updateContainerHeight() {
                    if (this.engine.batchMode)
                        return this;
                    let e = this.getRow(),
                    t = parseInt(getComputedStyle(this.el)["min-height"]);
                    if (t > 0) {
                        let i = Math.round(t / this.getCellHeight());
                        e < i && (e = i)
                    }
                    if (this.el.setAttribute("data-gs-current-row", String(e)), 0 === e)
                        return this.el.style.removeProperty("height"), this;
                    let i = this.opts.cellHeight,
                    n = this.opts.cellHeightUnit;
                    return i ? (this.el.style.height = e * i + n, this) : this
                }
                _setupRemovingTimeout(e) {
                    let t = e.gridstackNode;
                    return t && !t._removeTimeout && this.opts.removable ? (t._removeTimeout = setTimeout(() => {
                            e.classList.add("grid-stack-item-removing"),
                            t._isAboutToRemove = !0
                        }, this.opts.removeTimeout), this) : this
                }
                _clearRemovingTimeout(e) {
                    let t = e.gridstackNode;
                    return t && t._removeTimeout ? (clearTimeout(t._removeTimeout), delete t._removeTimeout, e.classList.remove("grid-stack-item-removing"), delete t._isAboutToRemove, this) : this
                }
                _prepareDragDropByNode(e) {
                    let t,
                    i,
                    n = e.el,
                    s = (s, o) => {
                        this._gsEventHandler[s.type] && this._gsEventHandler[s.type](s, s.target),
                        this.engine.cleanNodes(),
                        this.engine.beginUpdate(e),
                        t = this.cellWidth(),
                        i = this.getCellHeight();
                        let {
                            target: r
                        } = s;
                        this.placeholder.setAttribute("data-gs-x", r.getAttribute("data-gs-x")),
                        this.placeholder.setAttribute("data-gs-y", r.getAttribute("data-gs-y")),
                        this.placeholder.setAttribute("data-gs-width", r.getAttribute("data-gs-width")),
                        this.placeholder.setAttribute("data-gs-height", r.getAttribute("data-gs-height")),
                        this.el.append(this.placeholder),
                        e.el = this.placeholder,
                        e._beforeDragX = e.x,
                        e._beforeDragY = e.y,
                        e._prevYPix = o.position.top;
                        let a = e.minHeight || 1;
                        if (this.dd.resizable(n, "option", "minWidth", t * (e.minWidth || 1)), this.dd.resizable(n, "option", "minHeight", i * a), "resizestart" === s.type) {
                            let e = r.querySelector(".grid-stack-item");
                            if (e) {
                                document.createEvent("HTMLEvents").initEvent("resizestart", !0, !1),
                                e.dispatchEvent(s)
                            }
                        }
                    },
                    r = (s, r) => {
                        let a,
                        l,
                        h = Math.round(r.position.left / t),
                        d = Math.floor((r.position.top + i / 2) / i);
                        if ("drag" === s.type) {
                            let t = r.position.top - e._prevYPix;
                            if (e._prevYPix = r.position.top, o.Utils.updateScrollPosition(n, r.position, t), n.dataset.inTrashZone || h < 0 || h >= this.engine.column || d < 0 || !this.engine.float && d > this.engine.getRow()) {
                                if (e._temporaryRemoved)
                                    return;
                                !0 === this.opts.removable && this._setupRemovingTimeout(n),
                                h = e._beforeDragX,
                                d = e._beforeDragY,
                                this.placeholder.parentNode === this.el && this.el.removeChild(this.placeholder),
                                this.engine.removeNode(e),
                                this._updateContainerHeight(),
                                e._temporaryRemoved = !0
                            } else
                                this._clearRemovingTimeout(n), e._temporaryRemoved && (this.engine.addNode(e), this._writeAttrs(this.placeholder, h, d, a, l), this.el.appendChild(this.placeholder), e.el = this.placeholder, delete e._temporaryRemoved)
                        } else if ("resize" === s.type) {
                            if (h < 0)
                                return;
                            a = Math.round(r.size.width / t),
                            l = Math.round((r.size.height + this.getMargin()) / i)
                        }
                        let c = a || e._lastTriedWidth,
                        u = l || e._lastTriedHeight;
                        !this.engine.canMoveNode(e, h, d, a, l) || e._lastTriedX === h && e._lastTriedY === d && e._lastTriedWidth === c && e._lastTriedHeight === u || (e._lastTriedX = h, e._lastTriedY = d, e._lastTriedWidth = a, e._lastTriedHeight = l, this.engine.moveNode(e, h, d, a, l), this._updateContainerHeight())
                    },
                    a = t => {
                        this.placeholder.parentNode === this.el && this.el.removeChild(this.placeholder);
                        let i = t.target;
                        if (i.gridstackNode && i.gridstackNode.grid === this) {
                            if (e.el = i, e._isAboutToRemove) {
                                let s = n.gridstackNode.grid;
                                s._gsEventHandler[t.type] && s._gsEventHandler[t.type](t, i),
                                s.engine.removedNodes.push(e),
                                s._triggerRemoveEvent(),
                                delete n.gridstackNode,
                                n.remove()
                            } else
                                this._clearRemovingTimeout(n), e._temporaryRemoved ? (o.Utils.removePositioningStyles(i), this._writeAttrs(i, e._beforeDragX, e._beforeDragY, e.width, e.height), e.x = e._beforeDragX, e.y = e._beforeDragY, delete e._temporaryRemoved, this.engine.addNode(e)) : (o.Utils.removePositioningStyles(i), this._writeAttrs(i, e.x, e.y, e.width, e.height)), this._gsEventHandler[t.type] && this._gsEventHandler[t.type](t, i);
                            this._updateContainerHeight(),
                            this._triggerChangeEvent(),
                            this.engine.endUpdate(),
                            "resizestop" === t.type && i.querySelectorAll(".grid-stack").forEach(e => e.gridstack._onResizeHandler())
                        }
                    };
                    return this.dd.draggable(n, {
                        start: s,
                        stop: a,
                        drag: r
                    }).resizable(n, {
                        start: s,
                        stop: a,
                        resize: r
                    }),
                    (e.noMove || this.opts.disableDrag || this.opts.staticGrid) && this.dd.draggable(n, "disable"),
                    (e.noResize || this.opts.disableResize || this.opts.staticGrid) && this.dd.resizable(n, "disable"),
                    this._writeAttr(n, e),
                    this
                }
                _prepareElement(e, t = !1) {
                    e.classList.add(this.opts.itemClass);
                    let i = this._readAttr(e, {
                        el: e,
                        grid: this
                    });
                    return i = this.engine.addNode(i, t),
                    e.gridstackNode = i,
                    this._prepareDragDropByNode(i),
                    this
                }
                _writeAttrs(e, t, i, n, s) {
                    return null != t && e.setAttribute("data-gs-x", String(t)),
                    null != i && e.setAttribute("data-gs-y", String(i)),
                    n && e.setAttribute("data-gs-width", String(n)),
                    s && e.setAttribute("data-gs-height", String(s)),
                    this
                }
                _writeAttr(e, t) {
                    return t ? (this._writeAttrs(e, t.x, t.y, t.width, t.height), t.autoPosition ? e.setAttribute("data-gs-auto-position", "true") : e.removeAttribute("data-gs-auto-position"), t.minWidth && e.setAttribute("data-gs-min-width", String(t.minWidth)), t.maxWidth && e.setAttribute("data-gs-max-width", String(t.maxWidth)), t.minHeight && e.setAttribute("data-gs-min-height", String(t.minHeight)), t.maxHeight && e.setAttribute("data-gs-max-height", String(t.maxHeight)), t.noResize ? e.setAttribute("data-gs-no-resize", "true") : e.removeAttribute("data-gs-no-resize"), t.noMove ? e.setAttribute("data-gs-no-move", "true") : e.removeAttribute("data-gs-no-move"), t.locked ? e.setAttribute("data-gs-locked", "true") : e.removeAttribute("data-gs-locked"), t.resizeHandles && e.setAttribute("data-gs-resize-handles", t.resizeHandles), t.id && e.setAttribute("data-gs-id", String(t.id)), this) : this
                }
                _readAttr(e, t = {}) {
                    return t.x = o.Utils.toNumber(e.getAttribute("data-gs-x")),
                    t.y = o.Utils.toNumber(e.getAttribute("data-gs-y")),
                    t.width = o.Utils.toNumber(e.getAttribute("data-gs-width")),
                    t.height = o.Utils.toNumber(e.getAttribute("data-gs-height")),
                    t.maxWidth = o.Utils.toNumber(e.getAttribute("data-gs-max-width")),
                    t.minWidth = o.Utils.toNumber(e.getAttribute("data-gs-min-width")),
                    t.maxHeight = o.Utils.toNumber(e.getAttribute("data-gs-max-height")),
                    t.minHeight = o.Utils.toNumber(e.getAttribute("data-gs-min-height")),
                    t.autoPosition = o.Utils.toBool(e.getAttribute("data-gs-auto-position")),
                    t.noResize = o.Utils.toBool(e.getAttribute("data-gs-no-resize")),
                    t.noMove = o.Utils.toBool(e.getAttribute("data-gs-no-move")),
                    t.locked = o.Utils.toBool(e.getAttribute("data-gs-locked")),
                    t.resizeHandles = e.getAttribute("data-gs-resize-handles"),
                    t.id = e.getAttribute("data-gs-id"),
                    t
                }
                _updateElement(e, t) {
                    let i = this.getElement(e);
                    if (!i)
                        return this;
                    let n = i.gridstackNode;
                    return n ? (this.engine.cleanNodes(), this.engine.beginUpdate(n), t.call(this, i, n), this._updateContainerHeight(), this._triggerChangeEvent(), this.engine.endUpdate(), this) : this
                }
                _setStaticClass() {
                    let e = "grid-stack-static";
                    return !0 === this.opts.staticGrid ? this.el.classList.add(e) : this.el.classList.remove(e),
                    this
                }
                _onResizeHandler() {
                    if (this._isAutoCellHeight && o.Utils.throttle(() => {
                            let e = -this.opts.marginRight - this.opts.marginLeft + this.opts.marginTop + this.opts.marginBottom;
                            this.cellHeight(this.cellWidth() + e)
                        }, 100), !this.opts.disableOneColumnMode && this.el.clientWidth <= this.opts.minWidth) {
                        if (this._oneColumnMode)
                            return this;
                        this._oneColumnMode = !0,
                        this.column(1)
                    } else {
                        if (!this._oneColumnMode)
                            return this;
                        delete this._oneColumnMode,
                        this.column(this._prevColumn)
                    }
                    return this
                }
                _setupDragIn() {
                    return this.opts.staticGrid || "string" != typeof this.opts.dragIn || this.dd.isDraggable(this.opts.dragIn) || this.dd.dragIn(this.opts.dragIn, this.opts.dragInOptions),
                    this
                }
                _setupRemoveDrop() {
                    if (!this.opts.staticGrid && "string" == typeof this.opts.removable) {
                        let e = document.querySelector(this.opts.removable);
                        if (!e)
                            return this;
                        this.dd.isDroppable(e) || this.dd.droppable(e, this.opts.removableOptions),
                        this.dd.on(e, "dropover", (e, t) => {
                            let i = t.gridstackNode;
                            i && i.grid === this && (t.dataset.inTrashZone = "true", this._setupRemovingTimeout(t))
                        }).on(e, "dropout", (e, t) => {
                            let i = t.gridstackNode;
                            i && i.grid === this && (delete t.dataset.inTrashZone, this._clearRemovingTimeout(t))
                        })
                    }
                    return this
                }
                _setupAcceptWidget() {
                    if (this.opts.staticGrid || !this.opts.acceptWidgets)
                        return this;
                    let e = (e, t) => {
                        let i = t.gridstackNode,
                        n = this.getCellFromPixel({
                            left: e.pageX,
                            top: e.pageY
                        }, !0),
                        s = Math.max(0, n.x),
                        o = Math.max(0, n.y);
                        i._added ? s === i.x && o === i.y || !this.engine.canMoveNode(i, s, o) || (this.engine.moveNode(i, s, o), this._updateContainerHeight()) : (i._added = !0, i.el = t, i.x = s, i.y = o, delete i.autoPosition, this.engine.cleanNodes(), this.engine.beginUpdate(i), this.engine.addNode(i), this._writeAttrs(this.placeholder, i.x, i.y, i.width, i.height), this.el.appendChild(this.placeholder), i.el = this.placeholder, i._beforeDragX = i.x, i._beforeDragY = i.y, this._updateContainerHeight())
                    };
                    return this.dd.droppable(this.el, {
                        accept: e => {
                            let t = e.gridstackNode;
                            if (t && t.grid === this)
                                return !1;
                            if ("function" == typeof this.opts.acceptWidgets)
                                return this.opts.acceptWidgets(e);
                            let i = !0 === this.opts.acceptWidgets ? ".grid-stack-item" : this.opts.acceptWidgets;
                            return e.matches(i)
                        }
                    }).on(this.el, "dropover", (t, i) => {
                        let n,
                        s,
                        o = i.gridstackNode;
                        if (!o || !o.width || !o.height) {
                            let e = parseInt(i.getAttribute("data-gs-width"));
                            e > 0 && (o = o || {}, o.width = e);
                            let t = parseInt(i.getAttribute("data-gs-height"));
                            t > 0 && (o = o || {}, o.height = t)
                        }
                        let r = this.cellWidth(),
                        a = this.getCellHeight();
                        n = o && o.width ? o.width : Math.round(i.offsetWidth / r) || 1,
                        s = o && o.height ? o.height : Math.round(i.offsetHeight / a) || 1;
                        let l = this.engine.prepareNode({
                            width: n,
                            height: s,
                            _added: !1,
                            _temporary: !0
                        });
                        return l._isOutOfGrid = !0,
                        i.gridstackNode = l,
                        i._gridstackNodeOrig = o,
                        this.dd.on(i, "drag", e),
                        !1
                    }).on(this.el, "dropout", (e, t) => {
                        let i = t.gridstackNode;
                        if (i && i._isOutOfGrid)
                            return this.dd.off(t, "drag"), i.el = null, this.engine.removeNode(i), this.placeholder.parentNode === this.el && this.el.removeChild(this.placeholder), this._updateContainerHeight(), t.gridstackNode = t._gridstackNodeOrig, !1
                    }).on(this.el, "drop", (e, t, i) => {
                        this.placeholder.remove();
                        let n = t._gridstackNodeOrig;
                        if (delete t._gridstackNodeOrig, n && n.grid && n.grid !== this) {
                            let e = n.grid;
                            e.placeholder.remove(),
                            n.el = t,
                            e.engine.removedNodes.push(n),
                            e._triggerRemoveEvent()
                        }
                        let s = t.gridstackNode;
                        return this.engine.cleanupNode(s),
                        s.grid = this,
                        this.dd.off(t, "drag"),
                        i !== t ? (i.remove(), t.gridstackNode = n, t = t.cloneNode(!0)) : (t.remove(), this.dd.draggable(t, "destroy").resizable(t, "destroy")),
                        t.gridstackNode = s,
                        s.el = t,
                        o.Utils.removePositioningStyles(t),
                        this._writeAttr(t, s),
                        this.el.appendChild(t),
                        this._updateContainerHeight(),
                        this.engine.addedNodes.push(s),
                        this._triggerAddEvent(),
                        this._triggerChangeEvent(),
                        this.engine.endUpdate(),
                        this._gsEventHandler.dropped && this._gsEventHandler.dropped({
                            type: "dropped"
                        }, n && n.grid ? n : void 0, s),
                        window.setTimeout(() => {
                            s.el && s.el.parentElement && this._prepareDragDropByNode(s)
                        }),
                        !1
                    }),
                    this
                }
                getElement(e = ".grid-stack-item") {
                    return "string" == typeof e ? document.querySelector(e) || document.querySelector("#" + e) || document.querySelector("." + e) : e
                }
                getElements(e = ".grid-stack-item") {
                    if ("string" == typeof e) {
                        let t = document.querySelectorAll(e);
                        return t.length || (t = document.querySelectorAll("." + e)),
                        t.length || (t = document.querySelectorAll("#" + e)),
                        Array.from(t)
                    }
                    return [e]
                }
                static getGridElement(e = ".grid-stack") {
                    return "string" == typeof e ? document.querySelector(e) || document.querySelector("#" + e) || document.querySelector("." + e) : e
                }
                static getGridElements(e = ".grid-stack") {
                    if ("string" == typeof e) {
                        let t = document.querySelectorAll(e);
                        return t.length || (t = document.querySelectorAll("." + e)),
                        t.length || (t = document.querySelectorAll("#" + e)),
                        Array.from(t)
                    }
                    return [e]
                }
                initMargin() {
                    let e = o.Utils.parseHeight(this.opts.margin);
                    this.opts.marginUnit = e.unit;
                    let t = this.opts.margin = e.height;
                    return void 0 === this.opts.marginTop ? this.opts.marginTop = t : (e = o.Utils.parseHeight(this.opts.marginTop), this.opts.marginTop = e.height, delete this.opts.margin),
                    void 0 === this.opts.marginBottom ? this.opts.marginBottom = t : (e = o.Utils.parseHeight(this.opts.marginBottom), this.opts.marginBottom = e.height, delete this.opts.margin),
                    void 0 === this.opts.marginRight ? this.opts.marginRight = t : (e = o.Utils.parseHeight(this.opts.marginRight), this.opts.marginRight = e.height, delete this.opts.margin),
                    void 0 === this.opts.marginLeft ? this.opts.marginLeft = t : (e = o.Utils.parseHeight(this.opts.marginLeft), this.opts.marginLeft = e.height, delete this.opts.margin),
                    this.opts.marginUnit = e.unit,
                    this
                }
            }
            a.Utils = o.Utils,
            a.Engine = s.GridStackEngine,
            t.GridStack = a
        }, function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = i(1);
            class s {
                constructor(e = 12, t, i = !1, o = 0, r = []) {
                    this.addedNodes = [],
                    this.removedNodes = [],
                    this.getGridHeight = n.obsolete(this, s.prototype.getRow, "getGridHeight", "getRow", "v1.0.0"),
                    this.column = e,
                    this.onchange = t,
                    this._float = i,
                    this.maxRow = o,
                    this.nodes = r
                }
                batchUpdate() {
                    return this.batchMode || (this.batchMode = !0, this._prevFloat = this._float, this._float = !0),
                    this
                }
                commit() {
                    return this.batchMode ? (this.batchMode = !1, this._float = this._prevFloat, delete this._prevFloat, this._packNodes(), this._notify(), this) : this
                }
                _fixCollisions(e) {
                    this._sortNodes(-1);
                    let t = e,
                    i = Boolean(this.nodes.find(e => e.locked));
                    for (this.float || i || (t = {
                                x: 0,
                                y: e.y,
                                width: this.column,
                                height: e.height
                            }); ; ) {
                        let i,
                        s = this.nodes.find(i => i !== e && n.Utils.isIntercepted(i, t), {
                            node: e,
                            nn: t
                        });
                        if (!s)
                            return this;
                        if (i = s.locked ? this.moveNode(e, e.x, s.y + s.height, e.width, e.height, !0) : this.moveNode(s, s.x, e.y + e.height, s.width, s.height, !0), !i)
                            return this
                    }
                }
                isAreaEmpty(e, t, i, s) {
                    let o = {
                        x: e || 0,
                        y: t || 0,
                        width: i || 1,
                        height: s || 1
                    };
                    return !this.nodes.find(e => n.Utils.isIntercepted(e, o))
                }
                compact() {
                    if (0 === this.nodes.length)
                        return this;
                    this.batchUpdate(),
                    this._sortNodes();
                    let e = this.nodes;
                    return this.nodes = [],
                    e.forEach(e => {
                        e.noMove || e.locked || (e.autoPosition = !0),
                        this.addNode(e, !1),
                        e._dirty = !0
                    }),
                    this.commit(),
                    this
                }
                set float(e) {
                    this._float !== e && (this._float = e || !1, e || (this._packNodes(), this._notify()))
                }
                get float() {
                    return this._float || !1
                }
                _sortNodes(e) {
                    return this.nodes = n.Utils.sort(this.nodes, e, this.column),
                    this
                }
                _packNodes() {
                    return this._sortNodes(),
                    this.float ? this.nodes.forEach((e, t) => {
                        if (e._updating || void 0 === e._packY || e.y === e._packY)
                            return this;
                        let i = e.y;
                        for (; i >= e._packY; ) {
                            let s = {
                                x: e.x,
                                y: i,
                                width: e.width,
                                height: e.height
                            };
                            this.nodes.slice(0, t).find(e => n.Utils.isIntercepted(s, e), {
                                n: e,
                                newY: i
                            }) || (e._dirty = !0, e.y = i),
                            --i
                        }
                    }) : this.nodes.forEach((e, t) => {
                        if (e.locked)
                            return this;
                        for (; e.y > 0; ) {
                            let i = e.y - 1,
                            s = 0 === t,
                            o = {
                                x: e.x,
                                y: i,
                                width: e.width,
                                height: e.height
                            };
                            if (t > 0) {
                                s = void 0 === this.nodes.slice(0, t).find(e => n.Utils.isIntercepted(o, e), {
                                    n: e,
                                    newY: i
                                })
                            }
                            if (!s)
                                break;
                            e._dirty = e.y !== i,
                            e.y = i
                        }
                    }),
                    this
                }
                prepareNode(e, t) {
                    void 0 !== (e = e || {}).x && void 0 !== e.y && null !== e.x && null !== e.y || (e.autoPosition = !0);
                    let i = {
                        width: 1,
                        height: 1,
                        x: 0,
                        y: 0
                    };
                    return (e = n.Utils.defaults(e, i)).autoPosition = e.autoPosition || !1,
                    e.noResize = e.noResize || !1,
                    e.noMove = e.noMove || !1,
                    Number.isNaN(e.x) && (e.x = i.x, e.autoPosition = !0),
                    Number.isNaN(e.y) && (e.y = i.y, e.autoPosition = !0),
                    Number.isNaN(e.width) && (e.width = i.width),
                    Number.isNaN(e.height) && (e.height = i.height),
                    e.maxWidth && (e.width = Math.min(e.width, e.maxWidth)),
                    e.maxHeight && (e.height = Math.min(e.height, e.maxHeight)),
                    e.minWidth && (e.width = Math.max(e.width, e.minWidth)),
                    e.minHeight && (e.height = Math.max(e.height, e.minHeight)),
                    e.width > this.column ? e.width = this.column : e.width < 1 && (e.width = 1),
                    this.maxRow && e.height > this.maxRow ? e.height = this.maxRow : e.height < 1 && (e.height = 1),
                    e.x < 0 && (e.x = 0),
                    e.y < 0 && (e.y = 0),
                    e.x + e.width > this.column && (t ? e.width = this.column - e.x : e.x = this.column - e.width),
                    this.maxRow && e.y + e.height > this.maxRow && (t ? e.height = this.maxRow - e.y : e.y = this.maxRow - e.height),
                    e
                }
                getDirtyNodes(e) {
                    if (e) {
                        let e = [];
                        return this.nodes.forEach(t => {
                            t._dirty && (t.y === t._origY && t.x === t._origX && t.width === t._origW && t.height === t._origH ? delete t._dirty : e.push(t))
                        }),
                        e
                    }
                    return this.nodes.filter(e => e._dirty)
                }
                _notify(e, t = !0) {
                    if (this.batchMode)
                        return this;
                    let i = (e = void 0 === e ? [] : Array.isArray(e) ? e : [e]).concat(this.getDirtyNodes());
                    return this.onchange && this.onchange(i, t),
                    this
                }
                cleanNodes() {
                    return this.batchMode || this.nodes.forEach(e => {
                        delete e._dirty
                    }),
                    this
                }
                addNode(e, t = !1) {
                    if ((e = this.prepareNode(e))._id = e._id || s._idSeq++, e.autoPosition) {
                        this._sortNodes();
                        for (let t = 0; ; ++t) {
                            let i = t % this.column,
                            s = Math.floor(t / this.column);
                            if (i + e.width > this.column)
                                continue;
                            let o = {
                                x: i,
                                y: s,
                                width: e.width,
                                height: e.height
                            };
                            if (!this.nodes.find(e => n.Utils.isIntercepted(o, e), {
                                    x: i,
                                    y: s,
                                    node: e
                                })) {
                                e.x = i,
                                e.y = s,
                                delete e.autoPosition;
                                break
                            }
                        }
                    }
                    return this.nodes.push(e),
                    t && this.addedNodes.push(e),
                    this._fixCollisions(e),
                    this._packNodes(),
                    this._notify(),
                    e
                }
                removeNode(e, t = !0, i = !1) {
                    return i && this.removedNodes.push(e),
                    e._id = null,
                    this.nodes.splice(this.nodes.findIndex(t => t === e), 1),
                    this.float || this._packNodes(),
                    this._notify(e, t),
                    this
                }
                removeAll(e = !0) {
                    return delete this._layouts,
                    0 === this.nodes.length || (e && this.nodes.forEach(e => {
                            e._id = null
                        }), this.removedNodes = this.nodes, this.nodes = [], this._notify(this.removedNodes, e)),
                    this
                }
                canMoveNode(e, t, i, o, r) {
                    if (!this.isNodeChangedPosition(e, t, i, o, r))
                        return !1;
                    let a,
                    l = Boolean(this.nodes.find(e => e.locked));
                    if (!this.maxRow && !l)
                        return !0;
                    let h = new s(this.column, null, this.float, 0, this.nodes.map(t => t === e ? (a = n.Utils.clone(t), a) : n.Utils.clone(t)));
                    if (!a)
                        return !0;
                    h.moveNode(a, t, i, o, r);
                    let d = !0;
                    return l && (d = d && !Boolean(h.nodes.find(e => e !== a && Boolean(e.locked) && Boolean(e._dirty)))),
                    this.maxRow && (d = d && h.getRow() <= this.maxRow),
                    d
                }
                canBePlacedWithRespectToHeight(e) {
                    if (!this.maxRow)
                        return !0;
                    let t = new s(this.column, null, this.float, 0, this.nodes.map(e => n.Utils.clone(e)));
                    return t.addNode(e),
                    t.getRow() <= this.maxRow
                }
                isNodeChangedPosition(e, t, i, n, s) {
                    return "number" != typeof t && (t = e.x),
                    "number" != typeof i && (i = e.y),
                    "number" != typeof n && (n = e.width),
                    "number" != typeof s && (s = e.height),
                    e.maxWidth && (n = Math.min(n, e.maxWidth)),
                    e.maxHeight && (s = Math.min(s, e.maxHeight)),
                    e.minWidth && (n = Math.max(n, e.minWidth)),
                    e.minHeight && (s = Math.max(s, e.minHeight)),
                    e.x !== t || e.y !== i || e.width !== n || e.height !== s
                }
                moveNode(e, t, i, n, s, o) {
                    if (e.locked)
                        return null;
                    "number" != typeof t && (t = e.x),
                    "number" != typeof i && (i = e.y),
                    "number" != typeof n && (n = e.width),
                    "number" != typeof s && (s = e.height);
                    let r = e.width !== n || e.height !== s,
                    a = {
                        x: t,
                        y: i,
                        width: n,
                        height: s,
                        maxWidth: e.maxWidth,
                        maxHeight: e.maxHeight,
                        minWidth: e.minWidth,
                        minHeight: e.minHeight
                    };
                    return a = this.prepareNode(a, r),
                    e.x === a.x && e.y === a.y && e.width === a.width && e.height === a.height ? null : (e._dirty = !0, e.x = e._lastTriedX = a.x, e.y = e._lastTriedY = a.y, e.width = e._lastTriedWidth = a.width, e.height = e._lastTriedHeight = a.height, this._fixCollisions(e), o || (this._packNodes(), this._notify()), e)
                }
                getRow() {
                    return this.nodes.reduce((e, t) => Math.max(e, t.y + t.height), 0)
                }
                beginUpdate(e) {
                    return e._updating || (e._updating = !0, this.nodes.forEach(e => {
                            e._packY = e.y
                        })),
                    this
                }
                endUpdate() {
                    let e = this.nodes.find(e => e._updating);
                    return e && (delete e._updating, this.nodes.forEach(e => {
                            delete e._packY
                        })),
                    this
                }
                save() {
                    let e = [];
                    return n.Utils.sort(this.nodes),
                    this.nodes.forEach(t => {
                        let i = {};
                        for (let e in t)
                            "_" !== e[0] && null !== t[e] && void 0 !== t[e] && (i[e] = t[e]);
                        delete i.el,
                        delete i.grid,
                        i.autoPosition || delete i.autoPosition,
                        i.noResize || delete i.noResize,
                        i.noMove || delete i.noMove,
                        i.locked || delete i.locked,
                        e.push(i)
                    }),
                    e
                }
                layoutsNodesChange(e) {
                    return !this._layouts || this._ignoreLayoutsNodeChange || this._layouts.forEach((t, i) => {
                        if (!t || i === this.column)
                            return this;
                        i < this.column ? this._layouts[i] = void 0 : e.forEach(e => {
                            let n = t.find(t => t._id === e._id);
                            if (!n)
                                return this;
                            let s = i / this.column;
                            e.y !== e._origY && (n.y += e.y - e._origY),
                            e.x !== e._origX && (n.x = Math.round(e.x * s)),
                            e.width !== e._origW && (n.width = Math.round(e.width * s))
                        })
                    }),
                    this
                }
                updateNodeWidths(e, t, i) {
                    if (!this.nodes.length || e === t)
                        return this;
                    let s = [];
                    if (this.nodes.forEach((e, t) => {
                            s[t] = {
                                x: e.x,
                                y: e.y,
                                width: e.width,
                                _id: e._id
                            }
                        }), this._layouts = this._layouts || [], this._layouts[e] = s, 1 === t && i && i.length) {
                        let e = 0;
                        i.forEach(t => {
                            t.x = 0,
                            t.width = 1,
                            t.y = Math.max(t.y, e),
                            e = t.y + t.height
                        })
                    } else
                        i = n.Utils.sort(this.nodes, -1, e);
                    let o = this._layouts[t] || [],
                    r = this._layouts.length - 1;
                    0 === o.length && t > e && t < r && (o = this._layouts[r] || [], o.length && (e = r, o.forEach(e => {
                                let t = i.findIndex(t => t._id === e._id);
                                -1 !== t && (i[t].x = e.x, i[t].y = e.y, i[t].width = e.width)
                            }), o = []));
                    let a = [];
                    o.forEach(e => {
                        let t = i.findIndex(t => t && t._id === e._id);
                        -1 !== t && (i[t].x = e.x, i[t].y = e.y, i[t].width = e.width, a.push(i[t]), i[t] = null)
                    });
                    let l = t / e;
                    return i.forEach(i => {
                        if (!i)
                            return this;
                        i.x = 1 === t ? 0 : Math.round(i.x * l),
                        i.width = 1 === t || 1 === e ? 1 : Math.round(i.width * l) || 1,
                        a.push(i)
                    }),
                    a = n.Utils.sort(a, -1, t),
                    this._ignoreLayoutsNodeChange = !0,
                    this.batchUpdate(),
                    this.nodes = [],
                    a.forEach(e => {
                        this.addNode(e, !1),
                        e._dirty = !0
                    }, this),
                    this.commit(),
                    delete this._ignoreLayoutsNodeChange,
                    this
                }
                saveInitial() {
                    return this.nodes.forEach(e => {
                        e._origX = e.x,
                        e._origY = e.y,
                        e._origW = e.width,
                        e._origH = e.height,
                        delete e._dirty
                    }),
                    this
                }
                cleanupNode(e) {
                    for (let t in e)
                        "_" === t[0] && delete e[t]
                }
            }
            s._idSeq = 1,
            t.GridStackEngine = s
        }, function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            const n = i(2),
            s = i(7);
            t.$ = s,
            function (e) {
                for (var i in e)
                    t.hasOwnProperty(i) || (t[i] = e[i])
            }
            (i(8));
            class o extends n.GridStackDD {
                constructor(e) {
                    super(e)
                }
                resizable(e, t, i, n) {
                    let o = s(e);
                    if ("disable" === t || "enable" === t)
                        o.resizable(t);
                    else if ("destroy" === t)
                        o.data("ui-resizable") && o.resizable(t);
                    else if ("option" === t)
                        o.resizable(t, i, n);
                    else {
                        let e = o.data("gs-resize-handles") ? o.data("gs-resize-handles") : this.grid.opts.resizable.handles;
                        o.resizable(Object.assign({}, this.grid.opts.resizable, {
                                handles: e
                            }, {
                                start: t.start,
                                stop: t.stop,
                                resize: t.resize
                            }))
                    }
                    return this
                }
                draggable(e, t, i, n) {
                    let o = s(e);
                    return "disable" === t || "enable" === t ? o.draggable(t) : "destroy" === t ? o.data("ui-draggable") && o.draggable(t) : "option" === t ? o.draggable(t, i, n) : o.draggable(Object.assign({}, this.grid.opts.draggable, {
                            containment: this.grid.opts._isNested && !this.grid.opts.dragOut ? s(this.grid.el).parent() : this.grid.opts.draggable.containment || null,
                            start: t.start,
                            stop: t.stop,
                            drag: t.drag
                        })),
                    this
                }
                dragIn(e, t) {
                    return s(e).draggable(t),
                    this
                }
                droppable(e, t, i, n) {
                    let o = s(e);
                    return "function" != typeof t.accept || t._accept || (t._accept = t.accept, t.accept = e => t._accept(e.get(0))),
                    o.droppable(t, i, n),
                    this
                }
                isDroppable(e) {
                    let t = s(e);
                    return Boolean(t.data("ui-droppable"))
                }
                isDraggable(e) {
                    let t = s(e);
                    return Boolean(t.data("ui-draggable"))
                }
                on(e, t, i) {
                    return s(e).on(t, (e, t) => {
                        i(e, t.draggable ? t.draggable[0] : e.target, t.helper ? t.helper[0] : null)
                    }),
                    this
                }
                off(e, t) {
                    return s(e).off(t),
                    this
                }
            }
            t.GridStackDDJQueryUI = o,
            n.GridStackDD.registerPlugin(o)
        }, function (e, t) {
            !function () {
                if ("function" == typeof window.CustomEvent)
                    return !1;
                window.CustomEvent = function (e, t) {
                    t = t || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: null
                    };
                    var i = document.createEvent("CustomEvent");
                    return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
                    i
                }
            }
            (),
            Number.isNaN = Number.isNaN || function (e) {
                return "number" == typeof e && e != e
            },
            Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
                value: function (e) {
                    if (null == this)
                        throw TypeError('"this" is null or not defined');
                    var t = Object(this),
                    i = t.length >>> 0;
                    if ("function" != typeof e)
                        throw TypeError("predicate must be a function");
                    for (var n = arguments[1], s = 0; s < i; ) {
                        var o = t[s];
                        if (e.call(n, o, s, t))
                            return o;
                        s++
                    }
                },
                configurable: !0,
                writable: !0
            }),
            Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
                value: function (e) {
                    if (null == this)
                        throw new TypeError('"this" is null or not defined');
                    var t = Object(this),
                    i = t.length >>> 0;
                    if ("function" != typeof e)
                        throw new TypeError("predicate must be a function");
                    for (var n = arguments[1], s = 0; s < i; ) {
                        var o = t[s];
                        if (e.call(n, o, s, t))
                            return s;
                        s++
                    }
                    return -1
                },
                configurable: !0,
                writable: !0
            })
        }, function (e, t, i) {
            var n;
            !function (t, i) {
                "use strict";
                "object" == typeof e.exports ? e.exports = t.document ? i(t) : function (e) {
                    if (!e.document)
                        throw new Error("jQuery requires a window with a document");
                    return i(e)
                }
                 : i(t)
            }
            ("undefined" != typeof window ? window : this, (function (i, s) {
                    "use strict";
                    function o(e) {
                        return null != e && e === e.window
                    }
                    var r = [],
                    a = Object.getPrototypeOf,
                    l = r.slice,
                    h = r.flat ? function (e) {
                        return r.flat.call(e)
                    }
                     : function (e) {
                        return r.concat.apply([], e)
                    },
                    d = r.push,
                    c = r.indexOf,
                    u = {},
                    p = u.toString,
                    f = u.hasOwnProperty,
                    g = f.toString,
                    m = g.call(Object),
                    v = {},
                    y = function (e) {
                        return "function" == typeof e && "number" != typeof e.nodeType
                    },
                    b = i.document,
                    w = {
                        type: !0,
                        src: !0,
                        nonce: !0,
                        noModule: !0
                    };
                    function x(e, t, i) {
                        var n,
                        s,
                        o = (i = i || b).createElement("script");
                        if (o.text = e, t)
                            for (n in w)
                                (s = t[n] || t.getAttribute && t.getAttribute(n)) && o.setAttribute(n, s);
                        i.head.appendChild(o).parentNode.removeChild(o)
                    }
                    function _(e) {
                        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[p.call(e)] || "object" : typeof e
                    }
                    var C = "3.5.1",
                    E = function (e, t) {
                        return new E.fn.init(e, t)
                    };
                    function k(e) {
                        var t = !!e && "length" in e && e.length,
                        i = _(e);
                        return !y(e) && !o(e) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
                    }
                    E.fn = E.prototype = {
                        jquery: C,
                        constructor: E,
                        length: 0,
                        toArray: function () {
                            return l.call(this)
                        },
                        get: function (e) {
                            return null == e ? l.call(this) : e < 0 ? this[e + this.length] : this[e]
                        },
                        pushStack: function (e) {
                            var t = E.merge(this.constructor(), e);
                            return t.prevObject = this,
                            t
                        },
                        each: function (e) {
                            return E.each(this, e)
                        },
                        map: function (e) {
                            return this.pushStack(E.map(this, (function (t, i) {
                                        return e.call(t, i, t)
                                    })))
                        },
                        slice: function () {
                            return this.pushStack(l.apply(this, arguments))
                        },
                        first: function () {
                            return this.eq(0)
                        },
                        last: function () {
                            return this.eq(-1)
                        },
                        even: function () {
                            return this.pushStack(E.grep(this, (function (e, t) {
                                        return (t + 1) % 2
                                    })))
                        },
                        odd: function () {
                            return this.pushStack(E.grep(this, (function (e, t) {
                                        return t % 2
                                    })))
                        },
                        eq: function (e) {
                            var t = this.length,
                            i = +e + (e < 0 ? t : 0);
                            return this.pushStack(0 <= i && i < t ? [this[i]] : [])
                        },
                        end: function () {
                            return this.prevObject || this.constructor()
                        },
                        push: d,
                        sort: r.sort,
                        splice: r.splice
                    },
                    E.extend = E.fn.extend = function () {
                        var e,
                        t,
                        i,
                        n,
                        s,
                        o,
                        r = arguments[0] || {},
                        a = 1,
                        l = arguments.length,
                        h = !1;
                        for ("boolean" == typeof r && (h = r, r = arguments[a] || {}, a++), "object" == typeof r || y(r) || (r = {}), a === l && (r = this, a--); a < l; a++)
                            if (null != (e = arguments[a]))
                                for (t in e)
                                    n = e[t], "__proto__" !== t && r !== n && (h && n && (E.isPlainObject(n) || (s = Array.isArray(n))) ? (i = r[t], o = s && !Array.isArray(i) ? [] : s || E.isPlainObject(i) ? i : {}, s = !1, r[t] = E.extend(h, o, n)) : void 0 !== n && (r[t] = n));
                        return r
                    },
                    E.extend({
                        expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
                        isReady: !0,
                        error: function (e) {
                            throw new Error(e)
                        },
                        noop: function () {},
                        isPlainObject: function (e) {
                            var t,
                            i;
                            return !(!e || "[object Object]" !== p.call(e) || (t = a(e)) && ("function" != typeof(i = f.call(t, "constructor") && t.constructor) || g.call(i) !== m))
                        },
                        isEmptyObject: function (e) {
                            var t;
                            for (t in e)
                                return !1;
                            return !0
                        },
                        globalEval: function (e, t, i) {
                            x(e, {
                                nonce: t && t.nonce
                            }, i)
                        },
                        each: function (e, t) {
                            var i,
                            n = 0;
                            if (k(e))
                                for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
                            else
                                for (n in e)
                                    if (!1 === t.call(e[n], n, e[n]))
                                        break;
                            return e
                        },
                        makeArray: function (e, t) {
                            var i = t || [];
                            return null != e && (k(Object(e)) ? E.merge(i, "string" == typeof e ? [e] : e) : d.call(i, e)),
                            i
                        },
                        inArray: function (e, t, i) {
                            return null == t ? -1 : c.call(t, e, i)
                        },
                        merge: function (e, t) {
                            for (var i = +t.length, n = 0, s = e.length; n < i; n++)
                                e[s++] = t[n];
                            return e.length = s,
                            e
                        },
                        grep: function (e, t, i) {
                            for (var n = [], s = 0, o = e.length, r = !i; s < o; s++)
                                !t(e[s], s) != r && n.push(e[s]);
                            return n
                        },
                        map: function (e, t, i) {
                            var n,
                            s,
                            o = 0,
                            r = [];
                            if (k(e))
                                for (n = e.length; o < n; o++)
                                    null != (s = t(e[o], o, i)) && r.push(s);
                            else
                                for (o in e)
                                    null != (s = t(e[o], o, i)) && r.push(s);
                            return h(r)
                        },
                        guid: 1,
                        support: v
                    }),
                    "function" == typeof Symbol && (E.fn[Symbol.iterator] = r[Symbol.iterator]),
                    E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (e, t) {
                            u["[object " + t + "]"] = t.toLowerCase()
                        }));
                    var S = function (e) {
                        function t(e, t) {
                            var i = "0x" + e.slice(1) - 65536;
                            return t || (i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320))
                        }
                        function i() {
                            f()
                        }
                        var n,
                        s,
                        o,
                        r,
                        a,
                        l,
                        h,
                        d,
                        c,
                        u,
                        p,
                        f,
                        g,
                        m,
                        v,
                        y,
                        b,
                        w,
                        x,
                        _ = "sizzle" + +new Date,
                        C = e.document,
                        E = 0,
                        k = 0,
                        S = le(),
                        T = le(),
                        N = le(),
                        A = le(),
                        H = function (e, t) {
                            return e === t && (p = !0),
                            0
                        },
                        P = {}
                        .hasOwnProperty,
                        D = [],
                        z = D.pop,
                        M = D.push,
                        R = D.push,
                        L = D.slice,
                        O = function (e, t) {
                            for (var i = 0, n = e.length; i < n; i++)
                                if (e[i] === t)
                                    return i;
                            return -1
                        },
                        j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        $ = "[\\x20\\t\\r\\n\\f]",
                        I = "(?:\\\\[\\da-fA-F]{1,6}" + $ + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                        W = "\\[" + $ + "*(" + I + ")(?:" + $ + "*([*^$|!~]?=)" + $ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + $ + "*\\]",
                        U = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
                        q = new RegExp($ + "+", "g"),
                        B = new RegExp("^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$", "g"),
                        F = new RegExp("^" + $ + "*," + $ + "*"),
                        G = new RegExp("^" + $ + "*([>+~]|" + $ + ")" + $ + "*"),
                        X = new RegExp($ + "|>"),
                        Y = new RegExp(U),
                        J = new RegExp("^" + I + "$"),
                        V = {
                            ID: new RegExp("^#(" + I + ")"),
                            CLASS: new RegExp("^\\.(" + I + ")"),
                            TAG: new RegExp("^(" + I + "|[*])"),
                            ATTR: new RegExp("^" + W),
                            PSEUDO: new RegExp("^" + U),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + $ + "*(even|odd|(([+-]|)(\\d*)n|)" + $ + "*(?:([+-]|)" + $ + "*(\\d+)|))" + $ + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + j + ")$", "i"),
                            needsContext: new RegExp("^" + $ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $ + "*((?:-\\d)?\\d*)" + $ + "*\\)|)(?=[^-]|$)", "i")
                        },
                        K = /HTML$/i,
                        Q = /^(?:input|select|textarea|button)$/i,
                        Z = /^h\d$/i,
                        ee = /^[^{]+\{\s*\[native \w/,
                        te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        ie = /[+~]/,
                        ne = new RegExp("\\\\[\\da-fA-F]{1,6}" + $ + "?|\\\\([^\\r\\n\\f])", "g"),
                        se = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                        oe = function (e, t) {
                            return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                        },
                        re = we((function (e) {
                                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                                }), {
                                dir: "parentNode",
                                next: "legend"
                            });
                        try {
                            R.apply(D = L.call(C.childNodes), C.childNodes),
                            D[C.childNodes.length].nodeType
                        } catch (n) {
                            R = {
                                apply: D.length ? function (e, t) {
                                    M.apply(e, L.call(t))
                                }
                                 : function (e, t) {
                                    for (var i = e.length, n = 0; e[i++] = t[n++]; );
                                    e.length = i - 1
                                }
                            }
                        }
                        function ae(e, t, i, n) {
                            var o,
                            r,
                            a,
                            h,
                            c,
                            u,
                            p,
                            m = t && t.ownerDocument,
                            b = t ? t.nodeType : 9;
                            if (i = i || [], "string" != typeof e || !e || 1 !== b && 9 !== b && 11 !== b)
                                return i;
                            if (!n && (f(t), t = t || g, v)) {
                                if (11 !== b && (c = te.exec(e)))
                                    if (o = c[1]) {
                                        if (9 === b) {
                                            if (!(a = t.getElementById(o)))
                                                return i;
                                            if (a.id === o)
                                                return i.push(a), i
                                        } else if (m && (a = m.getElementById(o)) && x(t, a) && a.id === o)
                                            return i.push(a), i
                                    } else {
                                        if (c[2])
                                            return R.apply(i, t.getElementsByTagName(e)), i;
                                        if ((o = c[3]) && s.getElementsByClassName && t.getElementsByClassName)
                                            return R.apply(i, t.getElementsByClassName(o)), i
                                    }
                                if (s.qsa && !A[e + " "] && (!y || !y.test(e)) && (1 !== b || "object" !== t.nodeName.toLowerCase())) {
                                    if (p = e, m = t, 1 === b && (X.test(e) || G.test(e))) {
                                        for ((m = ie.test(e) && ve(t.parentNode) || t) === t && s.scope || ((h = t.getAttribute("id")) ? h = h.replace(se, oe) : t.setAttribute("id", h = _)), r = (u = l(e)).length; r--; )
                                            u[r] = (h ? "#" + h : ":scope") + " " + be(u[r]);
                                        p = u.join(",")
                                    }
                                    try {
                                        return R.apply(i, m.querySelectorAll(p)),
                                        i
                                    } catch (t) {
                                        A(e, !0)
                                    }
                                    finally {
                                        h === _ && t.removeAttribute("id")
                                    }
                                }
                            }
                            return d(e.replace(B, "$1"), t, i, n)
                        }
                        function le() {
                            var e = [];
                            return function t(i, n) {
                                return e.push(i + " ") > o.cacheLength && delete t[e.shift()],
                                t[i + " "] = n
                            }
                        }
                        function he(e) {
                            return e[_] = !0,
                            e
                        }
                        function de(e) {
                            var t = g.createElement("fieldset");
                            try {
                                return !!e(t)
                            } catch (e) {
                                return !1
                            }
                            finally {
                                t.parentNode && t.parentNode.removeChild(t),
                                t = null
                            }
                        }
                        function ce(e, t) {
                            for (var i = e.split("|"), n = i.length; n--; )
                                o.attrHandle[i[n]] = t
                        }
                        function ue(e, t) {
                            var i = t && e,
                            n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                            if (n)
                                return n;
                            if (i)
                                for (; i = i.nextSibling; )
                                    if (i === t)
                                        return -1;
                            return e ? 1 : -1
                        }
                        function pe(e) {
                            return function (t) {
                                return "input" === t.nodeName.toLowerCase() && t.type === e
                            }
                        }
                        function fe(e) {
                            return function (t) {
                                var i = t.nodeName.toLowerCase();
                                return ("input" === i || "button" === i) && t.type === e
                            }
                        }
                        function ge(e) {
                            return function (t) {
                                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e
                            }
                        }
                        function me(e) {
                            return he((function (t) {
                                    return t = +t,
                                    he((function (i, n) {
                                            for (var s, o = e([], i.length, t), r = o.length; r--; )
                                                i[s = o[r]] && (i[s] = !(n[s] = i[s]))
                                        }))
                                }))
                        }
                        function ve(e) {
                            return e && void 0 !== e.getElementsByTagName && e
                        }
                        for (n in s = ae.support = {}, a = ae.isXML = function (e) {
                            var t = e.namespaceURI,
                            i = (e.ownerDocument || e).documentElement;
                            return !K.test(t || i && i.nodeName || "HTML")
                        }, f = ae.setDocument = function (e) {
                            var n,
                            r,
                            l = e ? e.ownerDocument || e : C;
                            return l != g && 9 === l.nodeType && l.documentElement && (m = (g = l).documentElement, v = !a(g), C != g && (r = g.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", i, !1) : r.attachEvent && r.attachEvent("onunload", i)), s.scope = de((function (e) {
                                            return m.appendChild(e).appendChild(g.createElement("div")),
                                            void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                                        })), s.attributes = de((function (e) {
                                            return e.className = "i",
                                            !e.getAttribute("className")
                                        })), s.getElementsByTagName = de((function (e) {
                                            return e.appendChild(g.createComment("")),
                                            !e.getElementsByTagName("*").length
                                        })), s.getElementsByClassName = ee.test(g.getElementsByClassName), s.getById = de((function (e) {
                                            return m.appendChild(e).id = _,
                                            !g.getElementsByName || !g.getElementsByName(_).length
                                        })), s.getById ? (o.filter.ID = function (e) {
                                    var i = e.replace(ne, t);
                                    return function (e) {
                                        return e.getAttribute("id") === i
                                    }
                                }, o.find.ID = function (e, t) {
                                    if (void 0 !== t.getElementById && v) {
                                        var i = t.getElementById(e);
                                        return i ? [i] : []
                                    }
                                }) : (o.filter.ID = function (e) {
                                    var i = e.replace(ne, t);
                                    return function (e) {
                                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                        return t && t.value === i
                                    }
                                }, o.find.ID = function (e, t) {
                                    if (void 0 !== t.getElementById && v) {
                                        var i,
                                        n,
                                        s,
                                        o = t.getElementById(e);
                                        if (o) {
                                            if ((i = o.getAttributeNode("id")) && i.value === e)
                                                return [o];
                                            for (s = t.getElementsByName(e), n = 0; o = s[n++]; )
                                                if ((i = o.getAttributeNode("id")) && i.value === e)
                                                    return [o]
                                        }
                                        return []
                                    }
                                }), o.find.TAG = s.getElementsByTagName ? function (e, t) {
                                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : s.qsa ? t.querySelectorAll(e) : void 0
                            }
                                 : function (e, t) {
                                var i,
                                n = [],
                                s = 0,
                                o = t.getElementsByTagName(e);
                                if ("*" !== e)
                                    return o;
                                for (; i = o[s++]; )
                                    1 === i.nodeType && n.push(i);
                                    return n
                                }, o.find.CLASS = s.getElementsByClassName && function (e, t) {
                                    if (void 0 !== t.getElementsByClassName && v)
                                        return t.getElementsByClassName(e)
                                }, b = [], y = [], (s.qsa = ee.test(g.querySelectorAll)) && (de((function (e) {
                                                var t;
                                                m.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                                                e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + $ + "*(?:''|\"\")"),
                                                e.querySelectorAll("[selected]").length || y.push("\\[" + $ + "*(?:value|" + j + ")"),
                                                e.querySelectorAll("[id~=" + _ + "-]").length || y.push("~="),
                                                (t = g.createElement("input")).setAttribute("name", ""),
                                                e.appendChild(t),
                                                e.querySelectorAll("[name='']").length || y.push("\\[" + $ + "*name" + $ + "*=" + $ + "*(?:''|\"\")"),
                                                e.querySelectorAll(":checked").length || y.push(":checked"),
                                                e.querySelectorAll("a#" + _ + "+*").length || y.push(".#.+[+~]"),
                                                e.querySelectorAll("\\\f"),
                                                y.push("[\\r\\n\\f]")
                                            })), de((function (e) {
                                                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                                var t = g.createElement("input");
                                                t.setAttribute("type", "hidden"),
                                                e.appendChild(t).setAttribute("name", "D"),
                                                e.querySelectorAll("[name=d]").length && y.push("name" + $ + "*[*^$|!~]?="),
                                                2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"),
                                                m.appendChild(e).disabled = !0,
                                                2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"),
                                                e.querySelectorAll("*,:x"),
                                                y.push(",.*:")
                                            }))), (s.matchesSelector = ee.test(w = m.matches || m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && de((function (e) {
                                            s.disconnectedMatch = w.call(e, "*"),
                                            w.call(e, "[s!='']:x"),
                                            b.push("!=", U)
                                        })), y = y.length && new RegExp(y.join("|")), b = b.length && new RegExp(b.join("|")), n = ee.test(m.compareDocumentPosition), x = n || ee.test(m.contains) ? function (e, t) {
                                    var i = 9 === e.nodeType ? e.documentElement : e,
                                    n = t && t.parentNode;
                                    return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                                }
                                     : function (e, t) {
                                    if (t)
                                        for (; t = t.parentNode; )
                                            if (t === e)
                                                return !0;
                                    return !1
                                }, H = n ? function (e, t) {
                                    if (e === t)
                                        return p = !0, 0;
                                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                    return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !s.sortDetached && t.compareDocumentPosition(e) === i ? e == g || e.ownerDocument == C && x(C, e) ? -1 : t == g || t.ownerDocument == C && x(C, t) ? 1 : u ? O(u, e) - O(u, t) : 0 : 4 & i ? -1 : 1)
                                }
                                     : function (e, t) {
                                    if (e === t)
                                        return p = !0, 0;
                                    var i,
                                    n = 0,
                                    s = e.parentNode,
                                    o = t.parentNode,
                                    r = [e],
                                    a = [t];
                                    if (!s || !o)
                                        return e == g ? -1 : t == g ? 1 : s ? -1 : o ? 1 : u ? O(u, e) - O(u, t) : 0;
                                    if (s === o)
                                        return ue(e, t);
                                    for (i = e; i = i.parentNode; )
                                        r.unshift(i);
                                    for (i = t; i = i.parentNode; )
                                        a.unshift(i);
                                    for (; r[n] === a[n]; )
                                        n++;
                                    return n ? ue(r[n], a[n]) : r[n] == C ? -1 : a[n] == C ? 1 : 0
                                }),
                                g
                            }, ae.matches = function (e, t) {
                                return ae(e, null, null, t)
                            }, ae.matchesSelector = function (e, t) {
                                if (f(e), s.matchesSelector && v && !A[t + " "] && (!b || !b.test(t)) && (!y || !y.test(t)))
                                    try {
                                        var i = w.call(e, t);
                                        if (i || s.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                            return i
                                    } catch (e) {
                                        A(t, !0)
                                    }
                                return 0 < ae(t, g, null, [e]).length
                            }, ae.contains = function (e, t) {
                                return (e.ownerDocument || e) != g && f(e),
                                x(e, t)
                            }, ae.attr = function (e, t) {
                                (e.ownerDocument || e) != g && f(e);
                                var i = o.attrHandle[t.toLowerCase()],
                                n = i && P.call(o.attrHandle, t.toLowerCase()) ? i(e, t, !v) : void 0;
                                return void 0 !== n ? n : s.attributes || !v ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
                            }, ae.escape = function (e) {
                                return (e + "").replace(se, oe)
                            }, ae.error = function (e) {
                                throw new Error("Syntax error, unrecognized expression: " + e)
                            }, ae.uniqueSort = function (e) {
                                var t,
                                i = [],
                                n = 0,
                                o = 0;
                                if (p = !s.detectDuplicates, u = !s.sortStable && e.slice(0), e.sort(H), p) {
                                    for (; t = e[o++]; )
                                        t === e[o] && (n = i.push(o));
                                    for (; n--; )
                                        e.splice(i[n], 1)
                                }
                                return u = null,
                                e
                            }, r = ae.getText = function (e) {
                                var t,
                                i = "",
                                n = 0,
                                s = e.nodeType;
                                if (s) {
                                    if (1 === s || 9 === s || 11 === s) {
                                        if ("string" == typeof e.textContent)
                                            return e.textContent;
                                        for (e = e.firstChild; e; e = e.nextSibling)
                                            i += r(e)
                                    } else if (3 === s || 4 === s)
                                        return e.nodeValue
                                } else
                                    for (; t = e[n++]; )
                                        i += r(t);
                                return i
                            }, (o = ae.selectors = {
                                        cacheLength: 50,
                                        createPseudo: he,
                                        match: V,
                                        attrHandle: {},
                                        find: {},
                                        relative: {
                                            ">": {
                                                dir: "parentNode",
                                                first: !0
                                            },
                                            " ": {
                                                dir: "parentNode"
                                            },
                                            "+": {
                                                dir: "previousSibling",
                                                first: !0
                                            },
                                            "~": {
                                                dir: "previousSibling"
                                            }
                                        },
                                        preFilter: {
                                            ATTR: function (e) {
                                                return e[1] = e[1].replace(ne, t),
                                                e[3] = (e[3] || e[4] || e[5] || "").replace(ne, t),
                                                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                                e.slice(0, 4)
                                            },
                                            CHILD: function (e) {
                                                return e[1] = e[1].toLowerCase(),
                                                "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] =  + (e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] =  + (e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]),
                                                e
                                            },
                                            PSEUDO: function (e) {
                                                var t,
                                                i = !e[6] && e[2];
                                                return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && Y.test(i) && (t = l(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                                            }
                                        },
                                        filter: {
                                            TAG: function (e) {
                                                var i = e.replace(ne, t).toLowerCase();
                                                return "*" === e ? function () {
                                                    return !0
                                                }
                                                 : function (e) {
                                                    return e.nodeName && e.nodeName.toLowerCase() === i
                                                }
                                            },
                                            CLASS: function (e) {
                                                var t = S[e + " "];
                                                return t || (t = new RegExp("(^|" + $ + ")" + e + "(" + $ + "|$)")) && S(e, (function (e) {
                                                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                                    }))
                                            },
                                            ATTR: function (e, t, i) {
                                                return function (n) {
                                                    var s = ae.attr(n, e);
                                                    return null == s ? "!=" === t : !t || (s += "", "=" === t ? s === i : "!=" === t ? s !== i : "^=" === t ? i && 0 === s.indexOf(i) : "*=" === t ? i && -1 < s.indexOf(i) : "$=" === t ? i && s.slice(-i.length) === i : "~=" === t ? -1 < (" " + s.replace(q, " ") + " ").indexOf(i) : "|=" === t && (s === i || s.slice(0, i.length + 1) === i + "-"))
                                                }
                                            },
                                            CHILD: function (e, t, i, n, s) {
                                                var o = "nth" !== e.slice(0, 3),
                                                r = "last" !== e.slice(-4),
                                                a = "of-type" === t;
                                                return 1 === n && 0 === s ? function (e) {
                                                    return !!e.parentNode
                                                }
                                                 : function (t, i, l) {
                                                    var h,
                                                    d,
                                                    c,
                                                    u,
                                                    p,
                                                    f,
                                                    g = o != r ? "nextSibling" : "previousSibling",
                                                    m = t.parentNode,
                                                    v = a && t.nodeName.toLowerCase(),
                                                    y = !l && !a,
                                                    b = !1;
                                                    if (m) {
                                                        if (o) {
                                                            for (; g; ) {
                                                                for (u = t; u = u[g]; )
                                                                    if (a ? u.nodeName.toLowerCase() === v : 1 === u.nodeType)
                                                                        return !1;
                                                                f = g = "only" === e && !f && "nextSibling"
                                                            }
                                                            return !0
                                                        }
                                                        if (f = [r ? m.firstChild : m.lastChild], r && y) {
                                                            for (b = (p = (h = (d = (c = (u = m)[_] || (u[_] = {}))[u.uniqueID] || (c[u.uniqueID] = {}))[e] || [])[0] === E && h[1]) && h[2], u = p && m.childNodes[p]; u = ++p && u && u[g] || (b = p = 0) || f.pop(); )
                                                                if (1 === u.nodeType && ++b && u === t) {
                                                                    d[e] = [E, p, b];
                                                                    break
                                                                }
                                                        } else if (y && (b = p = (h = (d = (c = (u = t)[_] || (u[_] = {}))[u.uniqueID] || (c[u.uniqueID] = {}))[e] || [])[0] === E && h[1]), !1 === b)
                                                            for (; (u = ++p && u && u[g] || (b = p = 0) || f.pop()) && ((a ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++b || (y && ((d = (c = u[_] || (u[_] = {}))[u.uniqueID] || (c[u.uniqueID] = {}))[e] = [E, b]), u !== t)); );
                                                        return (b -= s) === n || b % n == 0 && 0 <= b / n
                                                    }
                                                }
                                            },
                                            PSEUDO: function (e, t) {
                                                var i,
                                                n = o.pseudos[e] || o.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                                                return n[_] ? n(t) : 1 < n.length ? (i = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? he((function (e, i) {
                                                            for (var s, o = n(e, t), r = o.length; r--; )
                                                                e[s = O(e, o[r])] = !(i[s] = o[r])
                                                        })) : function (e) {
                                                    return n(e, 0, i)
                                                }) : n
                                            }
                                        },
                                        pseudos: {
                                            not: he((function (e) {
                                                    var t = [],
                                                    i = [],
                                                    n = h(e.replace(B, "$1"));
                                                    return n[_] ? he((function (e, t, i, s) {
                                                            for (var o, r = n(e, null, s, []), a = e.length; a--; )
                                                                (o = r[a]) && (e[a] = !(t[a] = o))
                                                        })) : function (e, s, o) {
                                                        return t[0] = e,
                                                        n(t, null, o, i),
                                                        t[0] = null,
                                                        !i.pop()
                                                    }
                                                })),
                                            has: he((function (e) {
                                                    return function (t) {
                                                        return 0 < ae(e, t).length
                                                    }
                                                })),
                                            contains: he((function (e) {
                                                    return e = e.replace(ne, t),
                                                    function (t) {
                                                        return -1 < (t.textContent || r(t)).indexOf(e)
                                                    }
                                                })),
                                            lang: he((function (e) {
                                                    return J.test(e || "") || ae.error("unsupported lang: " + e),
                                                    e = e.replace(ne, t).toLowerCase(),
                                                    function (t) {
                                                        var i;
                                                        do {
                                                            if (i = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                                                return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                                                        } while ((t = t.parentNode) && 1 === t.nodeType);
                                                        return !1
                                                    }
                                                })),
                                            target: function (t) {
                                                var i = e.location && e.location.hash;
                                                return i && i.slice(1) === t.id
                                            },
                                            root: function (e) {
                                                return e === m
                                            },
                                            focus: function (e) {
                                                return e === g.activeElement && (!g.hasFocus || g.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                            },
                                            enabled: ge(!1),
                                            disabled: ge(!0),
                                            checked: function (e) {
                                                var t = e.nodeName.toLowerCase();
                                                return "input" === t && !!e.checked || "option" === t && !!e.selected
                                            },
                                            selected: function (e) {
                                                return e.parentNode && e.parentNode.selectedIndex,
                                                !0 === e.selected
                                            },
                                            empty: function (e) {
                                                for (e = e.firstChild; e; e = e.nextSibling)
                                                    if (e.nodeType < 6)
                                                        return !1;
                                                return !0
                                            },
                                            parent: function (e) {
                                                return !o.pseudos.empty(e)
                                            },
                                            header: function (e) {
                                                return Z.test(e.nodeName)
                                            },
                                            input: function (e) {
                                                return Q.test(e.nodeName)
                                            },
                                            button: function (e) {
                                                var t = e.nodeName.toLowerCase();
                                                return "input" === t && "button" === e.type || "button" === t
                                            },
                                            text: function (e) {
                                                var t;
                                                return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                            },
                                            first: me((function () {
                                                    return [0]
                                                })),
                                            last: me((function (e, t) {
                                                    return [t - 1]
                                                })),
                                            eq: me((function (e, t, i) {
                                                    return [i < 0 ? i + t : i]
                                                })),
                                            even: me((function (e, t) {
                                                    for (var i = 0; i < t; i += 2)
                                                        e.push(i);
                                                    return e
                                                })),
                                            odd: me((function (e, t) {
                                                    for (var i = 1; i < t; i += 2)
                                                        e.push(i);
                                                    return e
                                                })),
                                            lt: me((function (e, t, i) {
                                                    for (var n = i < 0 ? i + t : t < i ? t : i; 0 <= --n; )
                                                        e.push(n);
                                                    return e
                                                })),
                                            gt: me((function (e, t, i) {
                                                    for (var n = i < 0 ? i + t : i; ++n < t; )
                                                        e.push(n);
                                                    return e
                                                }))
                                        }
                                    }).pseudos.nth = o.pseudos.eq, {
                                radio: !0,
                                checkbox: !0,
                                file: !0,
                                password: !0,
                                image: !0
                            })o.pseudos[n] = pe(n);
                        for (n in {
                            submit: !0,
                            reset: !0
                        })
                            o.pseudos[n] = fe(n);
                        function ye() {}
                        function be(e) {
                            for (var t = 0, i = e.length, n = ""; t < i; t++)
                                n += e[t].value;
                            return n
                        }
                        function we(e, t, i) {
                            var n = t.dir,
                            s = t.next,
                            o = s || n,
                            r = i && "parentNode" === o,
                            a = k++;
                            return t.first ? function (t, i, s) {
                                for (; t = t[n]; )
                                    if (1 === t.nodeType || r)
                                        return e(t, i, s);
                                return !1
                            }
                             : function (t, i, l) {
                                var h,
                                d,
                                c,
                                u = [E, a];
                                if (l) {
                                    for (; t = t[n]; )
                                        if ((1 === t.nodeType || r) && e(t, i, l))
                                            return !0
                                } else
                                    for (; t = t[n]; )
                                        if (1 === t.nodeType || r)
                                            if (d = (c = t[_] || (t[_] = {}))[t.uniqueID] || (c[t.uniqueID] = {}), s && s === t.nodeName.toLowerCase())
                                                t = t[n] || t;
                                            else {
                                                if ((h = d[o]) && h[0] === E && h[1] === a)
                                                    return u[2] = h[2];
                                                if ((d[o] = u)[2] = e(t, i, l))
                                                    return !0
                                            }
                                return !1
                            }
                        }
                        function xe(e) {
                            return 1 < e.length ? function (t, i, n) {
                                for (var s = e.length; s--; )
                                    if (!e[s](t, i, n))
                                        return !1;
                                return !0
                            }
                             : e[0]
                        }
                        function _e(e, t, i, n, s) {
                            for (var o, r = [], a = 0, l = e.length, h = null != t; a < l; a++)
                                (o = e[a]) && (i && !i(o, n, s) || (r.push(o), h && t.push(a)));
                            return r
                        }
                        function Ce(e, t, i, n, s, o) {
                            return n && !n[_] && (n = Ce(n)),
                            s && !s[_] && (s = Ce(s, o)),
                            he((function (o, r, a, l) {
                                    var h,
                                    d,
                                    c,
                                    u = [],
                                    p = [],
                                    f = r.length,
                                    g = o || function (e, t, i) {
                                        for (var n = 0, s = t.length; n < s; n++)
                                            ae(e, t[n], i);
                                        return i
                                    }
                                    (t || "*", a.nodeType ? [a] : a, []),
                                    m = !e || !o && t ? g : _e(g, u, e, a, l),
                                    v = i ? s || (o ? e : f || n) ? [] : r : m;
                                    if (i && i(m, v, a, l), n)
                                        for (h = _e(v, p), n(h, [], a, l), d = h.length; d--; )
                                            (c = h[d]) && (v[p[d]] = !(m[p[d]] = c));
                                    if (o) {
                                        if (s || e) {
                                            if (s) {
                                                for (h = [], d = v.length; d--; )
                                                    (c = v[d]) && h.push(m[d] = c);
                                                s(null, v = [], h, l)
                                            }
                                            for (d = v.length; d--; )
                                                (c = v[d]) && -1 < (h = s ? O(o, c) : u[d]) && (o[h] = !(r[h] = c))
                                        }
                                    } else
                                        v = _e(v === r ? v.splice(f, v.length) : v), s ? s(null, r, v, l) : R.apply(r, v)
                                }))
                        }
                        function Ee(e) {
                            for (var t, i, n, s = e.length, r = o.relative[e[0].type], a = r || o.relative[" "], l = r ? 1 : 0, h = we((function (e) {
                                            return e === t
                                        }), a, !0), d = we((function (e) {
                                            return -1 < O(t, e)
                                        }), a, !0), u = [function (e, i, n) {
                                        var s = !r && (n || i !== c) || ((t = i).nodeType ? h : d)(e, i, n);
                                        return t = null,
                                        s
                                    }
                                ]; l < s; l++)
                                if (i = o.relative[e[l].type])
                                    u = [we(xe(u), i)];
                                else {
                                    if ((i = o.filter[e[l].type].apply(null, e[l].matches))[_]) {
                                        for (n = ++l; n < s && !o.relative[e[n].type]; n++);
                                        return Ce(1 < l && xe(u), 1 < l && be(e.slice(0, l - 1).concat({
                                                    value: " " === e[l - 2].type ? "*" : ""
                                                })).replace(B, "$1"), i, l < n && Ee(e.slice(l, n)), n < s && Ee(e = e.slice(n)), n < s && be(e))
                                    }
                                    u.push(i)
                                }
                            return xe(u)
                        }
                        return ye.prototype = o.filters = o.pseudos,
                        o.setFilters = new ye,
                        l = ae.tokenize = function (e, t) {
                            var i,
                            n,
                            s,
                            r,
                            a,
                            l,
                            h,
                            d = T[e + " "];
                            if (d)
                                return t ? 0 : d.slice(0);
                            for (a = e, l = [], h = o.preFilter; a; ) {
                                for (r in i && !(n = F.exec(a)) || (n && (a = a.slice(n[0].length) || a), l.push(s = [])), i = !1, (n = G.exec(a)) && (i = n.shift(), s.push({
                                            value: i,
                                            type: n[0].replace(B, " ")
                                        }), a = a.slice(i.length)), o.filter)
                                    !(n = V[r].exec(a)) || h[r] && !(n = h[r](n)) || (i = n.shift(), s.push({
                                            value: i,
                                            type: r,
                                            matches: n
                                        }), a = a.slice(i.length));
                                if (!i)
                                    break
                            }
                            return t ? a.length : a ? ae.error(e) : T(e, l).slice(0)
                        },
                        h = ae.compile = function (e, t) {
                            var i,
                            n = [],
                            s = [],
                            r = N[e + " "];
                            if (!r) {
                                for (i = (t = t || l(e)).length; i--; )
                                    (r = Ee(t[i]))[_] ? n.push(r) : s.push(r);
                                (r = N(e, function (e, t) {
                                        function i(i, r, a, l, h) {
                                            var d,
                                            u,
                                            p,
                                            m = 0,
                                            y = "0",
                                            b = i && [],
                                            w = [],
                                            x = c,
                                            _ = i || s && o.find.TAG("*", h),
                                            C = E += null == x ? 1 : Math.random() || .1,
                                            k = _.length;
                                            for (h && (c = r == g || r || h); y !== k && null != (d = _[y]); y++) {
                                                if (s && d) {
                                                    for (u = 0, r || d.ownerDocument == g || (f(d), a = !v); p = e[u++]; )
                                                        if (p(d, r || g, a)) {
                                                            l.push(d);
                                                            break
                                                        }
                                                    h && (E = C)
                                                }
                                                n && ((d = !p && d) && m--, i && b.push(d))
                                            }
                                            if (m += y, n && y !== m) {
                                                for (u = 0; p = t[u++]; )
                                                    p(b, w, r, a);
                                                if (i) {
                                                    if (0 < m)
                                                        for (; y--; )
                                                            b[y] || w[y] || (w[y] = z.call(l));
                                                    w = _e(w)
                                                }
                                                R.apply(l, w),
                                                h && !i && 0 < w.length && 1 < m + t.length && ae.uniqueSort(l)
                                            }
                                            return h && (E = C, c = x),
                                            b
                                        }
                                        var n = 0 < t.length,
                                        s = 0 < e.length;
                                        return n ? he(i) : i
                                    }
                                            (s, n))).selector = e
                            }
                            return r
                        },
                        d = ae.select = function (e, i, n, s) {
                            var r,
                            a,
                            d,
                            c,
                            u,
                            p = "function" == typeof e && e,
                            f = !s && l(e = p.selector || e);
                            if (n = n || [], 1 === f.length) {
                                if (2 < (a = f[0] = f[0].slice(0)).length && "ID" === (d = a[0]).type && 9 === i.nodeType && v && o.relative[a[1].type]) {
                                    if (!(i = (o.find.ID(d.matches[0].replace(ne, t), i) || [])[0]))
                                        return n;
                                    p && (i = i.parentNode),
                                    e = e.slice(a.shift().value.length)
                                }
                                for (r = V.needsContext.test(e) ? 0 : a.length; r-- && (d = a[r], !o.relative[c = d.type]); )
                                    if ((u = o.find[c]) && (s = u(d.matches[0].replace(ne, t), ie.test(a[0].type) && ve(i.parentNode) || i))) {
                                        if (a.splice(r, 1), !(e = s.length && be(a)))
                                            return R.apply(n, s), n;
                                        break
                                    }
                            }
                            return (p || h(e, f))(s, i, !v, n, !i || ie.test(e) && ve(i.parentNode) || i),
                            n
                        },
                        s.sortStable = _.split("").sort(H).join("") === _,
                        s.detectDuplicates = !!p,
                        f(),
                        s.sortDetached = de((function (e) {
                                    return 1 & e.compareDocumentPosition(g.createElement("fieldset"))
                                })),
                        de((function (e) {
                                return e.innerHTML = "<a href='#'></a>",
                                "#" === e.firstChild.getAttribute("href")
                            })) || ce("type|href|height|width", (function (e, t, i) {
                                if (!i)
                                    return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                            })),
                        s.attributes && de((function (e) {
                                return e.innerHTML = "<input/>",
                                e.firstChild.setAttribute("value", ""),
                                "" === e.firstChild.getAttribute("value")
                            })) || ce("value", (function (e, t, i) {
                                if (!i && "input" === e.nodeName.toLowerCase())
                                    return e.defaultValue
                            })),
                        de((function (e) {
                                return null == e.getAttribute("disabled")
                            })) || ce(j, (function (e, t, i) {
                                var n;
                                if (!i)
                                    return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
                            })),
                        ae
                    }
                    (i);
                    function T(e, t, i) {
                        for (var n = [], s = void 0 !== i; (e = e[t]) && 9 !== e.nodeType; )
                            if (1 === e.nodeType) {
                                if (s && E(e).is(i))
                                    break;
                                n.push(e)
                            }
                        return n
                    }
                    function N(e, t) {
                        for (var i = []; e; e = e.nextSibling)
                            1 === e.nodeType && e !== t && i.push(e);
                        return i
                    }
                    E.find = S,
                    E.expr = S.selectors,
                    E.expr[":"] = E.expr.pseudos,
                    E.uniqueSort = E.unique = S.uniqueSort,
                    E.text = S.getText,
                    E.isXMLDoc = S.isXML,
                    E.contains = S.contains,
                    E.escapeSelector = S.escape;
                    var A = E.expr.match.needsContext;
                    function H(e, t) {
                        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                    }
                    var P = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                    function D(e, t, i) {
                        return y(t) ? E.grep(e, (function (e, n) {
                                return !!t.call(e, n, e) !== i
                            })) : t.nodeType ? E.grep(e, (function (e) {
                                return e === t !== i
                            })) : "string" != typeof t ? E.grep(e, (function (e) {
                                return -1 < c.call(t, e) !== i
                            })) : E.filter(t, e, i)
                    }
                    E.filter = function (e, t, i) {
                        var n = t[0];
                        return i && (e = ":not(" + e + ")"),
                        1 === t.length && 1 === n.nodeType ? E.find.matchesSelector(n, e) ? [n] : [] : E.find.matches(e, E.grep(t, (function (e) {
                                    return 1 === e.nodeType
                                })))
                    },
                    E.fn.extend({
                        find: function (e) {
                            var t,
                            i,
                            n = this.length,
                            s = this;
                            if ("string" != typeof e)
                                return this.pushStack(E(e).filter((function () {
                                            for (t = 0; t < n; t++)
                                                if (E.contains(s[t], this))
                                                    return !0
                                        })));
                            for (i = this.pushStack([]), t = 0; t < n; t++)
                                E.find(e, s[t], i);
                            return 1 < n ? E.uniqueSort(i) : i
                        },
                        filter: function (e) {
                            return this.pushStack(D(this, e || [], !1))
                        },
                        not: function (e) {
                            return this.pushStack(D(this, e || [], !0))
                        },
                        is: function (e) {
                            return !!D(this, "string" == typeof e && A.test(e) ? E(e) : e || [], !1).length
                        }
                    });
                    var z,
                    M = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                    (E.fn.init = function (e, t, i) {
                        var n,
                        s;
                        if (!e)
                            return this;
                        if (i = i || z, "string" != typeof e)
                            return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== i.ready ? i.ready(e) : e(E) : E.makeArray(e, this);
                        if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : M.exec(e)) || !n[1] && t)
                            return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
                        if (n[1]) {
                            if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), P.test(n[1]) && E.isPlainObject(t))
                                for (n in t)
                                    y(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                            return this
                        }
                        return (s = b.getElementById(n[2])) && (this[0] = s, this.length = 1),
                        this
                    }).prototype = E.fn,
                    z = E(b);
                    var R = /^(?:parents|prev(?:Until|All))/,
                    L = {
                        children: !0,
                        contents: !0,
                        next: !0,
                        prev: !0
                    };
                    function O(e, t) {
                        for (; (e = e[t]) && 1 !== e.nodeType; );
                        return e
                    }
                    E.fn.extend({
                        has: function (e) {
                            var t = E(e, this),
                            i = t.length;
                            return this.filter((function () {
                                    for (var e = 0; e < i; e++)
                                        if (E.contains(this, t[e]))
                                            return !0
                                }))
                        },
                        closest: function (e, t) {
                            var i,
                            n = 0,
                            s = this.length,
                            o = [],
                            r = "string" != typeof e && E(e);
                            if (!A.test(e))
                                for (; n < s; n++)
                                    for (i = this[n]; i && i !== t; i = i.parentNode)
                                        if (i.nodeType < 11 && (r ? -1 < r.index(i) : 1 === i.nodeType && E.find.matchesSelector(i, e))) {
                                            o.push(i);
                                            break
                                        }
                            return this.pushStack(1 < o.length ? E.uniqueSort(o) : o)
                        },
                        index: function (e) {
                            return e ? "string" == typeof e ? c.call(E(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                        },
                        add: function (e, t) {
                            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
                        },
                        addBack: function (e) {
                            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                        }
                    }),
                    E.each({
                        parent: function (e) {
                            var t = e.parentNode;
                            return t && 11 !== t.nodeType ? t : null
                        },
                        parents: function (e) {
                            return T(e, "parentNode")
                        },
                        parentsUntil: function (e, t, i) {
                            return T(e, "parentNode", i)
                        },
                        next: function (e) {
                            return O(e, "nextSibling")
                        },
                        prev: function (e) {
                            return O(e, "previousSibling")
                        },
                        nextAll: function (e) {
                            return T(e, "nextSibling")
                        },
                        prevAll: function (e) {
                            return T(e, "previousSibling")
                        },
                        nextUntil: function (e, t, i) {
                            return T(e, "nextSibling", i)
                        },
                        prevUntil: function (e, t, i) {
                            return T(e, "previousSibling", i)
                        },
                        siblings: function (e) {
                            return N((e.parentNode || {}).firstChild, e)
                        },
                        children: function (e) {
                            return N(e.firstChild)
                        },
                        contents: function (e) {
                            return null != e.contentDocument && a(e.contentDocument) ? e.contentDocument : (H(e, "template") && (e = e.content || e), E.merge([], e.childNodes))
                        }
                    }, (function (e, t) {
                            E.fn[e] = function (i, n) {
                                var s = E.map(this, t, i);
                                return "Until" !== e.slice(-5) && (n = i),
                                n && "string" == typeof n && (s = E.filter(n, s)),
                                1 < this.length && (L[e] || E.uniqueSort(s), R.test(e) && s.reverse()),
                                this.pushStack(s)
                            }
                        }));
                    var j = /[^\x20\t\r\n\f]+/g;
                    function $(e) {
                        return e
                    }
                    function I(e) {
                        throw e
                    }
                    function W(e, t, i, n) {
                        var s;
                        try {
                            e && y(s = e.promise) ? s.call(e).done(t).fail(i) : e && y(s = e.then) ? s.call(e, t, i) : t.apply(void 0, [e].slice(n))
                        } catch (e) {
                            i.apply(void 0, [e])
                        }
                    }
                    E.Callbacks = function (e) {
                        var t,
                        i;
                        function n() {
                            for (a = a || e.once, r = s = !0; h.length; d = -1)
                                for (o = h.shift(); ++d < l.length; )
                                    !1 === l[d].apply(o[0], o[1]) && e.stopOnFalse && (d = l.length, o = !1);
                            e.memory || (o = !1),
                            s = !1,
                            a && (l = o ? [] : "")
                        }
                        e = "string" == typeof e ? (t = e, i = {}, E.each(t.match(j) || [], (function (e, t) {
                                        i[t] = !0
                                    })), i) : E.extend({}, e);
                        var s,
                        o,
                        r,
                        a,
                        l = [],
                        h = [],
                        d = -1,
                        c = {
                            add: function () {
                                return l && (o && !s && (d = l.length - 1, h.push(o)), function t(i) {
                                    E.each(i, (function (i, n) {
                                            y(n) ? e.unique && c.has(n) || l.push(n) : n && n.length && "string" !== _(n) && t(n)
                                        }))
                                }
                                    (arguments), o && !s && n()),
                                this
                            },
                            remove: function () {
                                return E.each(arguments, (function (e, t) {
                                        for (var i; -1 < (i = E.inArray(t, l, i)); )
                                            l.splice(i, 1), i <= d && d--
                                    })),
                                this
                            },
                            has: function (e) {
                                return e ? -1 < E.inArray(e, l) : 0 < l.length
                            },
                            empty: function () {
                                return l = l && [],
                                this
                            },
                            disable: function () {
                                return a = h = [],
                                l = o = "",
                                this
                            },
                            disabled: function () {
                                return !l
                            },
                            lock: function () {
                                return a = h = [],
                                o || s || (l = o = ""),
                                this
                            },
                            locked: function () {
                                return !!a
                            },
                            fireWith: function (e, t) {
                                return a || (t = [e, (t = t || []).slice ? t.slice() : t], h.push(t), s || n()),
                                this
                            },
                            fire: function () {
                                return c.fireWith(this, arguments),
                                this
                            },
                            fired: function () {
                                return !!r
                            }
                        };
                        return c
                    },
                    E.extend({
                        Deferred: function (e) {
                            var t = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]],
                            n = "pending",
                            s = {
                                state: function () {
                                    return n
                                },
                                always: function () {
                                    return o.done(arguments).fail(arguments),
                                    this
                                },
                                catch : function (e) {
                                    return s.then(null, e)
                                },
                            pipe: function () {
                                var e = arguments;
                                return E.Deferred((function (i) {
                                        E.each(t, (function (t, n) {
                                                var s = y(e[n[4]]) && e[n[4]];
                                                o[n[1]]((function () {
                                                        var e = s && s.apply(this, arguments);
                                                        e && y(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[n[0] + "With"](this, s ? [e] : arguments)
                                                    }))
                                            })),
                                        e = null
                                    })).promise()
                            },
                            then: function (e, n, s) {
                                var o = 0;
                                function r(e, t, n, s) {
                                    return function () {
                                        function a() {
                                            var i,
                                            a;
                                            if (!(e < o)) {
                                                if ((i = n.apply(l, h)) === t.promise())
                                                    throw new TypeError("Thenable self-resolution");
                                                    a = i && ("object" == typeof i || "function" == typeof i) && i.then,
                                                    y(a) ? s ? a.call(i, r(o, t, $, s), r(o, t, I, s)) : (o++, a.call(i, r(o, t, $, s), r(o, t, I, s), r(o, t, $, t.notifyWith))) : (n !== $ && (l = void 0, h = [i]), (s || t.resolveWith)(l, h))
                                                }
                                            }
                                            var l = this,
                                            h = arguments,
                                            d = s ? a : function () {
                                                try {
                                                    a()
                                                } catch (i) {
                                                    E.Deferred.exceptionHook && E.Deferred.exceptionHook(i, d.stackTrace),
                                                    o <= e + 1 && (n !== I && (l = void 0, h = [i]), t.rejectWith(l, h))
                                                }
                                            };
                                            e ? d() : (E.Deferred.getStackHook && (d.stackTrace = E.Deferred.getStackHook()), i.setTimeout(d))
                                        }
                                    }
                                    return E.Deferred((function (i) {
                                            t[0][3].add(r(0, i, y(s) ? s : $, i.notifyWith)),
                                            t[1][3].add(r(0, i, y(e) ? e : $)),
                                            t[2][3].add(r(0, i, y(n) ? n : I))
                                        })).promise()
                                },
                                promise: function (e) {
                                    return null != e ? E.extend(e, s) : s
                                }
                            },
                            o = {};
                            return E.each(t, (function (e, i) {
                                    var r = i[2],
                                    a = i[5];
                                    s[i[1]] = r.add,
                                    a && r.add((function () {
                                            n = a
                                        }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock),
                                    r.add(i[3].fire),
                                    o[i[0]] = function () {
                                        return o[i[0] + "With"](this === o ? void 0 : this, arguments),
                                        this
                                    },
                                    o[i[0] + "With"] = r.fireWith
                                })),
                            s.promise(o),
                            e && e.call(o, o),
                            o
                        },
                        when: function (e) {
                            function t(e) {
                                return function (t) {
                                    s[e] = this,
                                    o[e] = 1 < arguments.length ? l.call(arguments) : t,
                                    --i || r.resolveWith(s, o)
                                }
                            }
                            var i = arguments.length,
                            n = i,
                            s = Array(n),
                            o = l.call(arguments),
                            r = E.Deferred();
                            if (i <= 1 && (W(e, r.done(t(n)).resolve, r.reject, !i), "pending" === r.state() || y(o[n] && o[n].then)))
                                return r.then();
                            for (; n--; )
                                W(o[n], t(n), r.reject);
                            return r.promise()
                        }
                    });
                    var U = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                    E.Deferred.exceptionHook = function (e, t) {
                        i.console && i.console.warn && e && U.test(e.name) && i.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
                    },
                    E.readyException = function (e) {
                        i.setTimeout((function () {
                                throw e
                            }))
                    };
                    var q = E.Deferred();
                    function B() {
                        b.removeEventListener("DOMContentLoaded", B),
                        i.removeEventListener("load", B),
                        E.ready()
                    }
                    E.fn.ready = function (e) {
                        return q.then(e).catch((function (e) {
                                E.readyException(e)
                            })),
                        this
                    },
                    E.extend({
                        isReady: !1,
                        readyWait: 1,
                        ready: function (e) {
                            (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || q.resolveWith(b, [E])
                        }
                    }),
                    E.ready.then = q.then,
                    "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? i.setTimeout(E.ready) : (b.addEventListener("DOMContentLoaded", B), i.addEventListener("load", B));
                    var F = function (e, t, i, n, s, o, r) {
                        var a = 0,
                        l = e.length,
                        h = null == i;
                        if ("object" === _(i))
                            for (a in s = !0, i)
                                F(e, t, a, i[a], !0, o, r);
                        else if (void 0 !== n && (s = !0, y(n) || (r = !0), h && (t = r ? (t.call(e, n), null) : (h = t, function (e, t, i) {
                                        return h.call(E(e), i)
                                    })), t))
                            for (; a < l; a++)
                                t(e[a], i, r ? n : n.call(e[a], a, t(e[a], i)));
                        return s ? e : h ? t.call(e) : l ? t(e[0], i) : o
                    },
                    G = /^-ms-/,
                    X = /-([a-z])/g;
                    function Y(e, t) {
                        return t.toUpperCase()
                    }
                    function J(e) {
                        return e.replace(G, "ms-").replace(X, Y)
                    }
                    function V(e) {
                        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                    }
                    function K() {
                        this.expando = E.expando + K.uid++
                    }
                    K.uid = 1,
                    K.prototype = {
                        cache: function (e) {
                            var t = e[this.expando];
                            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                                        value: t,
                                        configurable: !0
                                    }))),
                            t
                        },
                        set: function (e, t, i) {
                            var n,
                            s = this.cache(e);
                            if ("string" == typeof t)
                                s[J(t)] = i;
                            else
                                for (n in t)
                                    s[J(n)] = t[n];
                            return s
                        },
                        get: function (e, t) {
                            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][J(t)]
                        },
                        access: function (e, t, i) {
                            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t)
                        },
                        remove: function (e, t) {
                            var i,
                            n = e[this.expando];
                            if (void 0 !== n) {
                                if (void 0 !== t) {
                                    i = (t = Array.isArray(t) ? t.map(J) : (t = J(t))in n ? [t] : t.match(j) || []).length;
                                    for (; i--; )
                                        delete n[t[i]]
                                }
                                void 0 !== t && !E.isEmptyObject(n) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                            }
                        },
                        hasData: function (e) {
                            var t = e[this.expando];
                            return void 0 !== t && !E.isEmptyObject(t)
                        }
                    };
                    var Q = new K,
                    Z = new K,
                    ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                    te = /[A-Z]/g;
                    function ie(e, t, i) {
                        var n,
                        s;
                        if (void 0 === i && 1 === e.nodeType)
                            if (n = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof(i = e.getAttribute(n))) {
                                try {
                                    i = "true" === (s = i) || "false" !== s && ("null" === s ? null : s === +s + "" ? +s : ee.test(s) ? JSON.parse(s) : s)
                                } catch (e) {}
                                Z.set(e, t, i)
                            } else
                                i = void 0;
                        return i
                    }
                    E.extend({
                        hasData: function (e) {
                            return Z.hasData(e) || Q.hasData(e)
                        },
                        data: function (e, t, i) {
                            return Z.access(e, t, i)
                        },
                        removeData: function (e, t) {
                            Z.remove(e, t)
                        },
                        _data: function (e, t, i) {
                            return Q.access(e, t, i)
                        },
                        _removeData: function (e, t) {
                            Q.remove(e, t)
                        }
                    }),
                    E.fn.extend({
                        data: function (e, t) {
                            var i,
                            n,
                            s,
                            o = this[0],
                            r = o && o.attributes;
                            if (void 0 !== e)
                                return "object" == typeof e ? this.each((function () {
                                        Z.set(this, e)
                                    })) : F(this, (function (t) {
                                        var i;
                                        if (o && void 0 === t)
                                            return void 0 !== (i = Z.get(o, e)) || void 0 !== (i = ie(o, e)) ? i : void 0;
                                        this.each((function () {
                                                Z.set(this, e, t)
                                            }))
                                    }), null, t, 1 < arguments.length, null, !0);
                            if (this.length && (s = Z.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                                for (i = r.length; i--; )
                                    r[i] && 0 === (n = r[i].name).indexOf("data-") && (n = J(n.slice(5)), ie(o, n, s[n]));
                                Q.set(o, "hasDataAttrs", !0)
                            }
                            return s
                        },
                        removeData: function (e) {
                            return this.each((function () {
                                    Z.remove(this, e)
                                }))
                        }
                    }),
                    E.extend({
                        queue: function (e, t, i) {
                            var n;
                            if (e)
                                return t = (t || "fx") + "queue", n = Q.get(e, t), i && (!n || Array.isArray(i) ? n = Q.access(e, t, E.makeArray(i)) : n.push(i)), n || []
                        },
                        dequeue: function (e, t) {
                            t = t || "fx";
                            var i = E.queue(e, t),
                            n = i.length,
                            s = i.shift(),
                            o = E._queueHooks(e, t);
                            "inprogress" === s && (s = i.shift(), n--),
                            s && ("fx" === t && i.unshift("inprogress"), delete o.stop, s.call(e, (function () {
                                        E.dequeue(e, t)
                                    }), o)),
                            !n && o && o.empty.fire()
                        },
                        _queueHooks: function (e, t) {
                            var i = t + "queueHooks";
                            return Q.get(e, i) || Q.access(e, i, {
                                empty: E.Callbacks("once memory").add((function () {
                                        Q.remove(e, [t + "queue", i])
                                    }))
                            })
                        }
                    }),
                    E.fn.extend({
                        queue: function (e, t) {
                            var i = 2;
                            return "string" != typeof e && (t = e, e = "fx", i--),
                            arguments.length < i ? E.queue(this[0], e) : void 0 === t ? this : this.each((function () {
                                    var i = E.queue(this, e, t);
                                    E._queueHooks(this, e),
                                    "fx" === e && "inprogress" !== i[0] && E.dequeue(this, e)
                                }))
                        },
                        dequeue: function (e) {
                            return this.each((function () {
                                    E.dequeue(this, e)
                                }))
                        },
                        clearQueue: function (e) {
                            return this.queue(e || "fx", [])
                        },
                        promise: function (e, t) {
                            function i() {
                                --s || o.resolveWith(r, [r])
                            }
                            var n,
                            s = 1,
                            o = E.Deferred(),
                            r = this,
                            a = this.length;
                            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--; )
                                (n = Q.get(r[a], e + "queueHooks")) && n.empty && (s++, n.empty.add(i));
                            return i(),
                            o.promise(t)
                        }
                    });
                    var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                    se = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
                    oe = ["Top", "Right", "Bottom", "Left"],
                    re = b.documentElement,
                    ae = function (e) {
                        return E.contains(e.ownerDocument, e)
                    },
                    le = {
                        composed: !0
                    };
                    re.getRootNode && (ae = function (e) {
                        return E.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument
                    });
                    var he = function (e, t) {
                        return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === E.css(e, "display")
                    };
                    function de(e, t, i, n) {
                        var s,
                        o,
                        r = 20,
                        a = n ? function () {
                            return n.cur()
                        }
                         : function () {
                            return E.css(e, t, "")
                        },
                        l = a(),
                        h = i && i[3] || (E.cssNumber[t] ? "" : "px"),
                        d = e.nodeType && (E.cssNumber[t] || "px" !== h && +l) && se.exec(E.css(e, t));
                        if (d && d[3] !== h) {
                            for (l /= 2, h = h || d[3], d = +l || 1; r--; )
                                E.style(e, t, d + h), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (r = 0), d /= o;
                            d *= 2,
                            E.style(e, t, d + h),
                            i = i || []
                        }
                        return i && (d = +d || +l || 0, s = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = h, n.start = d, n.end = s)),
                        s
                    }
                    var ce = {};
                    function ue(e, t) {
                        for (var i, n, s, o, r, a, l, h = [], d = 0, c = e.length; d < c; d++)
                            (n = e[d]).style && (i = n.style.display, t ? ("none" === i && (h[d] = Q.get(n, "display") || null, h[d] || (n.style.display = "")), "" === n.style.display && he(n) && (h[d] = (l = r = o = void 0, r = (s = n).ownerDocument, a = s.nodeName, (l = ce[a]) || (o = r.body.appendChild(r.createElement(a)), l = E.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), ce[a] = l)))) : "none" !== i && (h[d] = "none", Q.set(n, "display", i)));
                        for (d = 0; d < c; d++)
                            null != h[d] && (e[d].style.display = h[d]);
                        return e
                    }
                    E.fn.extend({
                        show: function () {
                            return ue(this, !0)
                        },
                        hide: function () {
                            return ue(this)
                        },
                        toggle: function (e) {
                            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () {
                                    he(this) ? E(this).show() : E(this).hide()
                                }))
                        }
                    });
                    var pe,
                    fe,
                    ge = /^(?:checkbox|radio)$/i,
                    me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                    ve = /^$|^module$|\/(?:java|ecma)script/i;
                    pe = b.createDocumentFragment().appendChild(b.createElement("div")),
                    (fe = b.createElement("input")).setAttribute("type", "radio"),
                    fe.setAttribute("checked", "checked"),
                    fe.setAttribute("name", "t"),
                    pe.appendChild(fe),
                    v.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked,
                    pe.innerHTML = "<textarea>x</textarea>",
                    v.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue,
                    pe.innerHTML = "<option></option>",
                    v.option = !!pe.lastChild;
                    var ye = {
                        thead: [1, "<table>", "</table>"],
                        col: [2, "<table><colgroup>", "</colgroup></table>"],
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                        _default: [0, "", ""]
                    };
                    function be(e, t) {
                        var i;
                        return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
                        void 0 === t || t && H(e, t) ? E.merge([e], i) : i
                    }
                    function we(e, t) {
                        for (var i = 0, n = e.length; i < n; i++)
                            Q.set(e[i], "globalEval", !t || Q.get(t[i], "globalEval"))
                    }
                    ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead,
                    ye.th = ye.td,
                    v.option || (ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]);
                    var xe = /<|&#?\w+;/;
                    function _e(e, t, i, n, s) {
                        for (var o, r, a, l, h, d, c = t.createDocumentFragment(), u = [], p = 0, f = e.length; p < f; p++)
                            if ((o = e[p]) || 0 === o)
                                if ("object" === _(o))
                                    E.merge(u, o.nodeType ? [o] : o);
                                else if (xe.test(o)) {
                                    for (r = r || c.appendChild(t.createElement("div")), a = (me.exec(o) || ["", ""])[1].toLowerCase(), l = ye[a] || ye._default, r.innerHTML = l[1] + E.htmlPrefilter(o) + l[2], d = l[0]; d--; )
                                        r = r.lastChild;
                                    E.merge(u, r.childNodes),
                                    (r = c.firstChild).textContent = ""
                                } else
                                    u.push(t.createTextNode(o));
                        for (c.textContent = "", p = 0; o = u[p++]; )
                            if (n && -1 < E.inArray(o, n))
                                s && s.push(o);
                            else if (h = ae(o), r = be(c.appendChild(o), "script"), h && we(r), i)
                                for (d = 0; o = r[d++]; )
                                    ve.test(o.type || "") && i.push(o);
                        return c
                    }
                    var Ce = /^key/,
                    Ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                    ke = /^([^.]*)(?:\.(.+)|)/;
                    function Se() {
                        return !0
                    }
                    function Te() {
                        return !1
                    }
                    function Ne(e, t) {
                        return e === function () {
                            try {
                                return b.activeElement
                            } catch (e) {}
                        }
                        () == ("focus" === t)
                    }
                    function Ae(e, t, i, n, s, o) {
                        var r,
                        a;
                        if ("object" == typeof t) {
                            for (a in "string" != typeof i && (n = n || i, i = void 0), t)
                                Ae(e, a, i, n, t[a], o);
                            return e
                        }
                        if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), !1 === s)
                            s = Te;
                        else if (!s)
                            return e;
                        return 1 === o && (r = s, (s = function (e) {
                                return E().off(e),
                                r.apply(this, arguments)
                            }).guid = r.guid || (r.guid = E.guid++)),
                        e.each((function () {
                                E.event.add(this, t, s, n, i)
                            }))
                    }
                    function He(e, t, i) {
                        i ? (Q.set(e, t, !1), E.event.add(e, t, {
                                namespace: !1,
                                handler: function (e) {
                                    var n,
                                    s,
                                    o = Q.get(this, t);
                                    if (1 & e.isTrigger && this[t]) {
                                        if (o.length)
                                            (E.event.special[t] || {}).delegateType && e.stopPropagation();
                                        else if (o = l.call(arguments), Q.set(this, t, o), n = i(this, t), this[t](), o !== (s = Q.get(this, t)) || n ? Q.set(this, t, !1) : s = {}, o !== s)
                                            return e.stopImmediatePropagation(), e.preventDefault(), s.value
                                    } else
                                        o.length && (Q.set(this, t, {
                                                value: E.event.trigger(E.extend(o[0], E.Event.prototype), o.slice(1), this)
                                            }), e.stopImmediatePropagation())
                                }
                            })) : void 0 === Q.get(e, t) && E.event.add(e, t, Se)
                    }
                    E.event = {
                        global: {},
                        add: function (e, t, i, n, s) {
                            var o,
                            r,
                            a,
                            l,
                            h,
                            d,
                            c,
                            u,
                            p,
                            f,
                            g,
                            m = Q.get(e);
                            if (V(e))
                                for (i.handler && (i = (o = i).handler, s = o.selector), s && E.find.matchesSelector(re, s), i.guid || (i.guid = E.guid++), (l = m.events) || (l = m.events = Object.create(null)), (r = m.handle) || (r = m.handle = function (t) {
                                        return void 0 !== E && E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0
                                    }), h = (t = (t || "").match(j) || [""]).length; h--; )
                                    p = g = (a = ke.exec(t[h]) || [])[1], f = (a[2] || "").split(".").sort(), p && (c = E.event.special[p] || {}, p = (s ? c.delegateType : c.bindType) || p, c = E.event.special[p] || {}, d = E.extend({
                                            type: p,
                                            origType: g,
                                            data: n,
                                            handler: i,
                                            guid: i.guid,
                                            selector: s,
                                            needsContext: s && E.expr.match.needsContext.test(s),
                                            namespace: f.join(".")
                                        }, o), (u = l[p]) || ((u = l[p] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(e, n, f, r) || e.addEventListener && e.addEventListener(p, r)), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = i.guid)), s ? u.splice(u.delegateCount++, 0, d) : u.push(d), E.event.global[p] = !0)
                        },
                        remove: function (e, t, i, n, s) {
                            var o,
                            r,
                            a,
                            l,
                            h,
                            d,
                            c,
                            u,
                            p,
                            f,
                            g,
                            m = Q.hasData(e) && Q.get(e);
                            if (m && (l = m.events)) {
                                for (h = (t = (t || "").match(j) || [""]).length; h--; )
                                    if (p = g = (a = ke.exec(t[h]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
                                        for (c = E.event.special[p] || {}, u = l[p = (n ? c.delegateType : c.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = o = u.length; o--; )
                                            d = u[o], !s && g !== d.origType || i && i.guid !== d.guid || a && !a.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (u.splice(o, 1), d.selector && u.delegateCount--, c.remove && c.remove.call(e, d));
                                        r && !u.length && (c.teardown && !1 !== c.teardown.call(e, f, m.handle) || E.removeEvent(e, p, m.handle), delete l[p])
                                    } else
                                        for (p in l)
                                            E.event.remove(e, p + t[h], i, n, !0);
                                E.isEmptyObject(l) && Q.remove(e, "handle events")
                            }
                        },
                        dispatch: function (e) {
                            var t,
                            i,
                            n,
                            s,
                            o,
                            r,
                            a = new Array(arguments.length),
                            l = E.event.fix(e),
                            h = (Q.get(this, "events") || Object.create(null))[l.type] || [],
                            d = E.event.special[l.type] || {};
                            for (a[0] = l, t = 1; t < arguments.length; t++)
                                a[t] = arguments[t];
                            if (l.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, l)) {
                                for (r = E.event.handlers.call(this, l, h), t = 0; (s = r[t++]) && !l.isPropagationStopped(); )
                                    for (l.currentTarget = s.elem, i = 0; (o = s.handlers[i++]) && !l.isImmediatePropagationStopped(); )
                                        l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (n = ((E.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, a)) && !1 === (l.result = n) && (l.preventDefault(), l.stopPropagation()));
                                return d.postDispatch && d.postDispatch.call(this, l),
                                l.result
                            }
                        },
                        handlers: function (e, t) {
                            var i,
                            n,
                            s,
                            o,
                            r,
                            a = [],
                            l = t.delegateCount,
                            h = e.target;
                            if (l && h.nodeType && !("click" === e.type && 1 <= e.button))
                                for (; h !== this; h = h.parentNode || this)
                                    if (1 === h.nodeType && ("click" !== e.type || !0 !== h.disabled)) {
                                        for (o = [], r = {}, i = 0; i < l; i++)
                                            void 0 === r[s = (n = t[i]).selector + " "] && (r[s] = n.needsContext ? -1 < E(s, this).index(h) : E.find(s, this, null, [h]).length), r[s] && o.push(n);
                                        o.length && a.push({
                                            elem: h,
                                            handlers: o
                                        })
                                    }
                            return h = this,
                            l < t.length && a.push({
                                elem: h,
                                handlers: t.slice(l)
                            }),
                            a
                        },
                        addProp: function (e, t) {
                            Object.defineProperty(E.Event.prototype, e, {
                                enumerable: !0,
                                configurable: !0,
                                get: y(t) ? function () {
                                    if (this.originalEvent)
                                        return t(this.originalEvent)
                                }
                                 : function () {
                                    if (this.originalEvent)
                                        return this.originalEvent[e]
                                },
                                set: function (t) {
                                    Object.defineProperty(this, e, {
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                        value: t
                                    })
                                }
                            })
                        },
                        fix: function (e) {
                            return e[E.expando] ? e : new E.Event(e)
                        },
                        special: {
                            load: {
                                noBubble: !0
                            },
                            click: {
                                setup: function (e) {
                                    var t = this || e;
                                    return ge.test(t.type) && t.click && H(t, "input") && He(t, "click", Se),
                                    !1
                                },
                                trigger: function (e) {
                                    var t = this || e;
                                    return ge.test(t.type) && t.click && H(t, "input") && He(t, "click"),
                                    !0
                                },
                                _default: function (e) {
                                    var t = e.target;
                                    return ge.test(t.type) && t.click && H(t, "input") && Q.get(t, "click") || H(t, "a")
                                }
                            },
                            beforeunload: {
                                postDispatch: function (e) {
                                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                                }
                            }
                        }
                    },
                    E.removeEvent = function (e, t, i) {
                        e.removeEventListener && e.removeEventListener(t, i)
                    },
                    E.Event = function (e, t) {
                        if (!(this instanceof E.Event))
                            return new E.Event(e, t);
                        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Se : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e,
                        t && E.extend(this, t),
                        this.timeStamp = e && e.timeStamp || Date.now(),
                        this[E.expando] = !0
                    },
                    E.Event.prototype = {
                        constructor: E.Event,
                        isDefaultPrevented: Te,
                        isPropagationStopped: Te,
                        isImmediatePropagationStopped: Te,
                        isSimulated: !1,
                        preventDefault: function () {
                            var e = this.originalEvent;
                            this.isDefaultPrevented = Se,
                            e && !this.isSimulated && e.preventDefault()
                        },
                        stopPropagation: function () {
                            var e = this.originalEvent;
                            this.isPropagationStopped = Se,
                            e && !this.isSimulated && e.stopPropagation()
                        },
                        stopImmediatePropagation: function () {
                            var e = this.originalEvent;
                            this.isImmediatePropagationStopped = Se,
                            e && !this.isSimulated && e.stopImmediatePropagation(),
                            this.stopPropagation()
                        }
                    },
                    E.each({
                        altKey: !0,
                        bubbles: !0,
                        cancelable: !0,
                        changedTouches: !0,
                        ctrlKey: !0,
                        detail: !0,
                        eventPhase: !0,
                        metaKey: !0,
                        pageX: !0,
                        pageY: !0,
                        shiftKey: !0,
                        view: !0,
                        char: !0,
                        code: !0,
                        charCode: !0,
                        key: !0,
                        keyCode: !0,
                        button: !0,
                        buttons: !0,
                        clientX: !0,
                        clientY: !0,
                        offsetX: !0,
                        offsetY: !0,
                        pointerId: !0,
                        pointerType: !0,
                        screenX: !0,
                        screenY: !0,
                        targetTouches: !0,
                        toElement: !0,
                        touches: !0,
                        which: function (e) {
                            var t = e.button;
                            return null == e.which && Ce.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ee.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                        }
                    }, E.event.addProp),
                    E.each({
                        focus: "focusin",
                        blur: "focusout"
                    }, (function (e, t) {
                            E.event.special[e] = {
                                setup: function () {
                                    return He(this, e, Ne),
                                    !1
                                },
                                trigger: function () {
                                    return He(this, e),
                                    !0
                                },
                                delegateType: t
                            }
                        })),
                    E.each({
                        mouseenter: "mouseover",
                        mouseleave: "mouseout",
                        pointerenter: "pointerover",
                        pointerleave: "pointerout"
                    }, (function (e, t) {
                            E.event.special[e] = {
                                delegateType: t,
                                bindType: t,
                                handle: function (e) {
                                    var i,
                                    n = e.relatedTarget,
                                    s = e.handleObj;
                                    return n && (n === this || E.contains(this, n)) || (e.type = s.origType, i = s.handler.apply(this, arguments), e.type = t),
                                    i
                                }
                            }
                        })),
                    E.fn.extend({
                        on: function (e, t, i, n) {
                            return Ae(this, e, t, i, n)
                        },
                        one: function (e, t, i, n) {
                            return Ae(this, e, t, i, n, 1)
                        },
                        off: function (e, t, i) {
                            var n,
                            s;
                            if (e && e.preventDefault && e.handleObj)
                                return n = e.handleObj, E(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                            if ("object" != typeof e)
                                return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = Te), this.each((function () {
                                        E.event.remove(this, e, i, t)
                                    }));
                            for (s in e)
                                this.off(s, t, e[s]);
                            return this
                        }
                    });
                    var Pe = /<script|<style|<link/i,
                    De = /checked\s*(?:[^=]|=\s*.checked.)/i,
                    ze = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                    function Me(e, t) {
                        return H(e, "table") && H(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
                    }
                    function Re(e) {
                        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                        e
                    }
                    function Le(e) {
                        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
                        e
                    }
                    function Oe(e, t) {
                        var i,
                        n,
                        s,
                        o,
                        r,
                        a;
                        if (1 === t.nodeType) {
                            if (Q.hasData(e) && (a = Q.get(e).events))
                                for (s in Q.remove(t, "handle events"), a)
                                    for (i = 0, n = a[s].length; i < n; i++)
                                        E.event.add(t, s, a[s][i]);
                            Z.hasData(e) && (o = Z.access(e), r = E.extend({}, o), Z.set(t, r))
                        }
                    }
                    function je(e, t, i, n) {
                        t = h(t);
                        var s,
                        o,
                        r,
                        a,
                        l,
                        d,
                        c = 0,
                        u = e.length,
                        p = u - 1,
                        f = t[0],
                        g = y(f);
                        if (g || 1 < u && "string" == typeof f && !v.checkClone && De.test(f))
                            return e.each((function (s) {
                                    var o = e.eq(s);
                                    g && (t[0] = f.call(this, s, o.html())),
                                    je(o, t, i, n)
                                }));
                        if (u && (o = (s = _e(t, e[0].ownerDocument, !1, e, n)).firstChild, 1 === s.childNodes.length && (s = o), o || n)) {
                            for (a = (r = E.map(be(s, "script"), Re)).length; c < u; c++)
                                l = s, c !== p && (l = E.clone(l, !0, !0), a && E.merge(r, be(l, "script"))), i.call(e[c], l, c);
                            if (a)
                                for (d = r[r.length - 1].ownerDocument, E.map(r, Le), c = 0; c < a; c++)
                                    l = r[c], ve.test(l.type || "") && !Q.access(l, "globalEval") && E.contains(d, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? E._evalUrl && !l.noModule && E._evalUrl(l.src, {
                                            nonce: l.nonce || l.getAttribute("nonce")
                                        }, d) : x(l.textContent.replace(ze, ""), l, d))
                        }
                        return e
                    }
                    function $e(e, t, i) {
                        for (var n, s = t ? E.filter(t, e) : e, o = 0; null != (n = s[o]); o++)
                            i || 1 !== n.nodeType || E.cleanData(be(n)), n.parentNode && (i && ae(n) && we(be(n, "script")), n.parentNode.removeChild(n));
                        return e
                    }
                    function Ie(e, t, i) {
                        var n,
                        s,
                        o = {};
                        for (s in t)
                            o[s] = e.style[s], e.style[s] = t[s];
                        for (s in n = i.call(e), t)
                            e.style[s] = o[s];
                        return n
                    }
                    E.extend({
                        htmlPrefilter: function (e) {
                            return e
                        },
                        clone: function (e, t, i) {
                            var n,
                            s,
                            o,
                            r,
                            a,
                            l,
                            h,
                            d = e.cloneNode(!0),
                            c = ae(e);
                            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                                for (r = be(d), n = 0, s = (o = be(e)).length; n < s; n++)
                                    a = o[n], "input" === (h = (l = r[n]).nodeName.toLowerCase()) && ge.test(a.type) ? l.checked = a.checked : "input" !== h && "textarea" !== h || (l.defaultValue = a.defaultValue);
                            if (t)
                                if (i)
                                    for (o = o || be(e), r = r || be(d), n = 0, s = o.length; n < s; n++)
                                        Oe(o[n], r[n]);
                                else
                                    Oe(e, d);
                            return 0 < (r = be(d, "script")).length && we(r, !c && be(e, "script")),
                            d
                        },
                        cleanData: function (e) {
                            for (var t, i, n, s = E.event.special, o = 0; void 0 !== (i = e[o]); o++)
                                if (V(i)) {
                                    if (t = i[Q.expando]) {
                                        if (t.events)
                                            for (n in t.events)
                                                s[n] ? E.event.remove(i, n) : E.removeEvent(i, n, t.handle);
                                        i[Q.expando] = void 0
                                    }
                                    i[Z.expando] && (i[Z.expando] = void 0)
                                }
                        }
                    }),
                    E.fn.extend({
                        detach: function (e) {
                            return $e(this, e, !0)
                        },
                        remove: function (e) {
                            return $e(this, e)
                        },
                        text: function (e) {
                            return F(this, (function (e) {
                                    return void 0 === e ? E.text(this) : this.empty().each((function () {
                                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                                        }))
                                }), null, e, arguments.length)
                        },
                        append: function () {
                            return je(this, arguments, (function (e) {
                                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Me(this, e).appendChild(e)
                                }))
                        },
                        prepend: function () {
                            return je(this, arguments, (function (e) {
                                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                        var t = Me(this, e);
                                        t.insertBefore(e, t.firstChild)
                                    }
                                }))
                        },
                        before: function () {
                            return je(this, arguments, (function (e) {
                                    this.parentNode && this.parentNode.insertBefore(e, this)
                                }))
                        },
                        after: function () {
                            return je(this, arguments, (function (e) {
                                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                                }))
                        },
                        empty: function () {
                            for (var e, t = 0; null != (e = this[t]); t++)
                                1 === e.nodeType && (E.cleanData(be(e, !1)), e.textContent = "");
                            return this
                        },
                        clone: function (e, t) {
                            return e = null != e && e,
                            t = null == t ? e : t,
                            this.map((function () {
                                    return E.clone(this, e, t)
                                }))
                        },
                        html: function (e) {
                            return F(this, (function (e) {
                                    var t = this[0] || {},
                                    i = 0,
                                    n = this.length;
                                    if (void 0 === e && 1 === t.nodeType)
                                        return t.innerHTML;
                                    if ("string" == typeof e && !Pe.test(e) && !ye[(me.exec(e) || ["", ""])[1].toLowerCase()]) {
                                        e = E.htmlPrefilter(e);
                                        try {
                                            for (; i < n; i++)
                                                1 === (t = this[i] || {}).nodeType && (E.cleanData(be(t, !1)), t.innerHTML = e);
                                            t = 0
                                        } catch (e) {}
                                    }
                                    t && this.empty().append(e)
                                }), null, e, arguments.length)
                        },
                        replaceWith: function () {
                            var e = [];
                            return je(this, arguments, (function (t) {
                                    var i = this.parentNode;
                                    E.inArray(this, e) < 0 && (E.cleanData(be(this)), i && i.replaceChild(t, this))
                                }), e)
                        }
                    }),
                    E.each({
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after",
                        replaceAll: "replaceWith"
                    }, (function (e, t) {
                            E.fn[e] = function (e) {
                                for (var i, n = [], s = E(e), o = s.length - 1, r = 0; r <= o; r++)
                                    i = r === o ? this : this.clone(!0), E(s[r])[t](i), d.apply(n, i.get());
                                return this.pushStack(n)
                            }
                        }));
                    var We,
                    Ue,
                    qe,
                    Be,
                    Fe,
                    Ge,
                    Xe,
                    Ye,
                    Je = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
                    Ve = function (e) {
                        var t = e.ownerDocument.defaultView;
                        return t && t.opener || (t = i),
                        t.getComputedStyle(e)
                    },
                    Ke = new RegExp(oe.join("|"), "i");
                    function Qe() {
                        if (Ye) {
                            Xe.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                            Ye.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                            re.appendChild(Xe).appendChild(Ye);
                            var e = i.getComputedStyle(Ye);
                            We = "1%" !== e.top,
                            Ge = 12 === Ze(e.marginLeft),
                            Ye.style.right = "60%",
                            Be = 36 === Ze(e.right),
                            Ue = 36 === Ze(e.width),
                            Ye.style.position = "absolute",
                            qe = 12 === Ze(Ye.offsetWidth / 3),
                            re.removeChild(Xe),
                            Ye = null
                        }
                    }
                    function Ze(e) {
                        return Math.round(parseFloat(e))
                    }
                    function et(e, t, i) {
                        var n,
                        s,
                        o,
                        r,
                        a = e.style;
                        return (i = i || Ve(e)) && ("" !== (r = i.getPropertyValue(t) || i[t]) || ae(e) || (r = E.style(e, t)), !v.pixelBoxStyles() && Je.test(r) && Ke.test(t) && (n = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = s, a.maxWidth = o)),
                        void 0 !== r ? r + "" : r
                    }
                    function tt(e, t) {
                        return {
                            get: function () {
                                if (!e())
                                    return (this.get = t).apply(this, arguments);
                                delete this.get
                            }
                        }
                    }
                    Xe = b.createElement("div"),
                    (Ye = b.createElement("div")).style && (Ye.style.backgroundClip = "content-box", Ye.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === Ye.style.backgroundClip, E.extend(v, {
                            boxSizingReliable: function () {
                                return Qe(),
                                Ue
                            },
                            pixelBoxStyles: function () {
                                return Qe(),
                                Be
                            },
                            pixelPosition: function () {
                                return Qe(),
                                We
                            },
                            reliableMarginLeft: function () {
                                return Qe(),
                                Ge
                            },
                            scrollboxSize: function () {
                                return Qe(),
                                qe
                            },
                            reliableTrDimensions: function () {
                                var e,
                                t,
                                n,
                                s;
                                return null == Fe && (e = b.createElement("table"), t = b.createElement("tr"), n = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), s = i.getComputedStyle(t), Fe = 3 < parseInt(s.height), re.removeChild(e)),
                                Fe
                            }
                        }));
                    var it = ["Webkit", "Moz", "ms"],
                    nt = b.createElement("div").style,
                    st = {};
                    function ot(e) {
                        return E.cssProps[e] || st[e] || (e in nt ? e : st[e] = function (e) {
                            for (var t = e[0].toUpperCase() + e.slice(1), i = it.length; i--; )
                                if ((e = it[i] + t)in nt)
                                    return e
                        }
                            (e) || e)
                    }
                    var rt = /^(none|table(?!-c[ea]).+)/,
                    at = /^--/,
                    lt = {
                        position: "absolute",
                        visibility: "hidden",
                        display: "block"
                    },
                    ht = {
                        letterSpacing: "0",
                        fontWeight: "400"
                    };
                    function dt(e, t, i) {
                        var n = se.exec(t);
                        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
                    }
                    function ct(e, t, i, n, s, o) {
                        var r = "width" === t ? 1 : 0,
                        a = 0,
                        l = 0;
                        if (i === (n ? "border" : "content"))
                            return 0;
                        for (; r < 4; r += 2)
                            "margin" === i && (l += E.css(e, i + oe[r], !0, s)), n ? ("content" === i && (l -= E.css(e, "padding" + oe[r], !0, s)), "margin" !== i && (l -= E.css(e, "border" + oe[r] + "Width", !0, s))) : (l += E.css(e, "padding" + oe[r], !0, s), "padding" !== i ? l += E.css(e, "border" + oe[r] + "Width", !0, s) : a += E.css(e, "border" + oe[r] + "Width", !0, s));
                        return !n && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0),
                        l
                    }
                    function ut(e, t, i) {
                        var n = Ve(e),
                        s = (!v.boxSizingReliable() || i) && "border-box" === E.css(e, "boxSizing", !1, n),
                        o = s,
                        r = et(e, t, n),
                        a = "offset" + t[0].toUpperCase() + t.slice(1);
                        if (Je.test(r)) {
                            if (!i)
                                return r;
                            r = "auto"
                        }
                        return (!v.boxSizingReliable() && s || !v.reliableTrDimensions() && H(e, "tr") || "auto" === r || !parseFloat(r) && "inline" === E.css(e, "display", !1, n)) && e.getClientRects().length && (s = "border-box" === E.css(e, "boxSizing", !1, n), (o = a in e) && (r = e[a])),
                        (r = parseFloat(r) || 0) + ct(e, t, i || (s ? "border" : "content"), o, n, r) + "px"
                    }
                    function pt(e, t, i, n, s) {
                        return new pt.prototype.init(e, t, i, n, s)
                    }
                    E.extend({
                        cssHooks: {
                            opacity: {
                                get: function (e, t) {
                                    if (t) {
                                        var i = et(e, "opacity");
                                        return "" === i ? "1" : i
                                    }
                                }
                            }
                        },
                        cssNumber: {
                            animationIterationCount: !0,
                            columnCount: !0,
                            fillOpacity: !0,
                            flexGrow: !0,
                            flexShrink: !0,
                            fontWeight: !0,
                            gridArea: !0,
                            gridColumn: !0,
                            gridColumnEnd: !0,
                            gridColumnStart: !0,
                            gridRow: !0,
                            gridRowEnd: !0,
                            gridRowStart: !0,
                            lineHeight: !0,
                            opacity: !0,
                            order: !0,
                            orphans: !0,
                            widows: !0,
                            zIndex: !0,
                            zoom: !0
                        },
                        cssProps: {},
                        style: function (e, t, i, n) {
                            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                                var s,
                                o,
                                r,
                                a = J(t),
                                l = at.test(t),
                                h = e.style;
                                if (l || (t = ot(a)), r = E.cssHooks[t] || E.cssHooks[a], void 0 === i)
                                    return r && "get" in r && void 0 !== (s = r.get(e, !1, n)) ? s : h[t];
                                "string" == (o = typeof i) && (s = se.exec(i)) && s[1] && (i = de(e, t, s), o = "number"),
                                null != i && i == i && ("number" !== o || l || (i += s && s[3] || (E.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (h[t] = "inherit"), r && "set" in r && void 0 === (i = r.set(e, i, n)) || (l ? h.setProperty(t, i) : h[t] = i))
                            }
                        },
                        css: function (e, t, i, n) {
                            var s,
                            o,
                            r,
                            a = J(t);
                            return at.test(t) || (t = ot(a)),
                            (r = E.cssHooks[t] || E.cssHooks[a]) && "get" in r && (s = r.get(e, !0, i)),
                            void 0 === s && (s = et(e, t, n)),
                            "normal" === s && t in ht && (s = ht[t]),
                            "" === i || i ? (o = parseFloat(s), !0 === i || isFinite(o) ? o || 0 : s) : s
                        }
                    }),
                    E.each(["height", "width"], (function (e, t) {
                            E.cssHooks[t] = {
                                get: function (e, i, n) {
                                    if (i)
                                        return !rt.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ut(e, t, n) : Ie(e, lt, (function () {
                                                return ut(e, t, n)
                                            }))
                                },
                                set: function (e, i, n) {
                                    var s,
                                    o = Ve(e),
                                    r = !v.scrollboxSize() && "absolute" === o.position,
                                    a = (r || n) && "border-box" === E.css(e, "boxSizing", !1, o),
                                    l = n ? ct(e, t, n, a, o) : 0;
                                    return a && r && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - ct(e, t, "border", !1, o) - .5)),
                                    l && (s = se.exec(i)) && "px" !== (s[3] || "px") && (e.style[t] = i, i = E.css(e, t)),
                                    dt(0, i, l)
                                }
                            }
                        })),
                    E.cssHooks.marginLeft = tt(v.reliableMarginLeft, (function (e, t) {
                                if (t)
                                    return (parseFloat(et(e, "marginLeft")) || e.getBoundingClientRect().left - Ie(e, {
                                            marginLeft: 0
                                        }, (function () {
                                                return e.getBoundingClientRect().left
                                            }))) + "px"
                            })),
                    E.each({
                        margin: "",
                        padding: "",
                        border: "Width"
                    }, (function (e, t) {
                            E.cssHooks[e + t] = {
                                expand: function (i) {
                                    for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++)
                                        s[e + oe[n] + t] = o[n] || o[n - 2] || o[0];
                                    return s
                                }
                            },
                            "margin" !== e && (E.cssHooks[e + t].set = dt)
                        })),
                    E.fn.extend({
                        css: function (e, t) {
                            return F(this, (function (e, t, i) {
                                    var n,
                                    s,
                                    o = {},
                                    r = 0;
                                    if (Array.isArray(t)) {
                                        for (n = Ve(e), s = t.length; r < s; r++)
                                            o[t[r]] = E.css(e, t[r], !1, n);
                                        return o
                                    }
                                    return void 0 !== i ? E.style(e, t, i) : E.css(e, t)
                                }), e, t, 1 < arguments.length)
                        }
                    }),
                    ((E.Tween = pt).prototype = {
                            constructor: pt,
                            init: function (e, t, i, n, s, o) {
                                this.elem = e,
                                this.prop = i,
                                this.easing = s || E.easing._default,
                                this.options = t,
                                this.start = this.now = this.cur(),
                                this.end = n,
                                this.unit = o || (E.cssNumber[i] ? "" : "px")
                            },
                            cur: function () {
                                var e = pt.propHooks[this.prop];
                                return e && e.get ? e.get(this) : pt.propHooks._default.get(this)
                            },
                            run: function (e) {
                                var t,
                                i = pt.propHooks[this.prop];
                                return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                                this.now = (this.end - this.start) * t + this.start,
                                this.options.step && this.options.step.call(this.elem, this.now, this),
                                i && i.set ? i.set(this) : pt.propHooks._default.set(this),
                                this
                            }
                        }).init.prototype = pt.prototype,
                    (pt.propHooks = {
                            _default: {
                                get: function (e) {
                                    var t;
                                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                                },
                                set: function (e) {
                                    E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[ot(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
                                }
                            }
                        }).scrollTop = pt.propHooks.scrollLeft = {
                        set: function (e) {
                            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                        }
                    },
                    E.easing = {
                        linear: function (e) {
                            return e
                        },
                        swing: function (e) {
                            return .5 - Math.cos(e * Math.PI) / 2
                        },
                        _default: "swing"
                    },
                    E.fx = pt.prototype.init,
                    E.fx.step = {};
                    var ft,
                    gt,
                    mt,
                    vt,
                    yt = /^(?:toggle|show|hide)$/,
                    bt = /queueHooks$/;
                    function wt() {
                        gt && (!1 === b.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(wt) : i.setTimeout(wt, E.fx.interval), E.fx.tick())
                    }
                    function xt() {
                        return i.setTimeout((function () {
                                ft = void 0
                            })),
                        ft = Date.now()
                    }
                    function _t(e, t) {
                        var i,
                        n = 0,
                        s = {
                            height: e
                        };
                        for (t = t ? 1 : 0; n < 4; n += 2 - t)
                            s["margin" + (i = oe[n])] = s["padding" + i] = e;
                        return t && (s.opacity = s.width = e),
                        s
                    }
                    function Ct(e, t, i) {
                        for (var n, s = (Et.tweeners[t] || []).concat(Et.tweeners["*"]), o = 0, r = s.length; o < r; o++)
                            if (n = s[o].call(i, t, e))
                                return n
                    }
                    function Et(e, t, i) {
                        var n,
                        s,
                        o = 0,
                        r = Et.prefilters.length,
                        a = E.Deferred().always((function () {
                                    delete l.elem
                                })),
                        l = function () {
                            if (s)
                                return !1;
                            for (var t = ft || xt(), i = Math.max(0, h.startTime + h.duration - t), n = 1 - (i / h.duration || 0), o = 0, r = h.tweens.length; o < r; o++)
                                h.tweens[o].run(n);
                            return a.notifyWith(e, [h, n, i]),
                            n < 1 && r ? i : (r || a.notifyWith(e, [h, 1, 0]), a.resolveWith(e, [h]), !1)
                        },
                        h = a.promise({
                            elem: e,
                            props: E.extend({}, t),
                            opts: E.extend(!0, {
                                specialEasing: {},
                                easing: E.easing._default
                            }, i),
                            originalProperties: t,
                            originalOptions: i,
                            startTime: ft || xt(),
                            duration: i.duration,
                            tweens: [],
                            createTween: function (t, i) {
                                var n = E.Tween(e, h.opts, t, i, h.opts.specialEasing[t] || h.opts.easing);
                                return h.tweens.push(n),
                                n
                            },
                            stop: function (t) {
                                var i = 0,
                                n = t ? h.tweens.length : 0;
                                if (s)
                                    return this;
                                for (s = !0; i < n; i++)
                                    h.tweens[i].run(1);
                                return t ? (a.notifyWith(e, [h, 1, 0]), a.resolveWith(e, [h, t])) : a.rejectWith(e, [h, t]),
                                this
                            }
                        }),
                        d = h.props;
                        for (function (e, t) {
                            var i,
                            n,
                            s,
                            o,
                            r;
                            for (i in e)
                                if (s = t[n = J(i)], o = e[i], Array.isArray(o) && (s = o[1], o = e[i] = o[0]), i !== n && (e[n] = o, delete e[i]), (r = E.cssHooks[n]) && "expand" in r)
                                    for (i in o = r.expand(o), delete e[n], o)
                                        i in e || (e[i] = o[i], t[i] = s);
                                    else
                                        t[n] = s
                            }
                                (d, h.opts.specialEasing); o < r; o++)if (n = Et.prefilters[o].call(h, e, d, h.opts))
                                return y(n.stop) && (E._queueHooks(h.elem, h.opts.queue).stop = n.stop.bind(n)), n;
                        return E.map(d, Ct, h),
                        y(h.opts.start) && h.opts.start.call(e, h),
                        h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always),
                        E.fx.timer(E.extend(l, {
                                elem: e,
                                anim: h,
                                queue: h.opts.queue
                            })),
                        h
                    }
                    E.Animation = E.extend(Et, {
                        tweeners: {
                            "*": [function (e, t) {
                                    var i = this.createTween(e, t);
                                    return de(i.elem, e, se.exec(t), i),
                                    i
                                }
                            ]
                        },
                        tweener: function (e, t) {
                            for (var i, n = 0, s = (e = y(e) ? (t = e, ["*"]) : e.match(j)).length; n < s; n++)
                                i = e[n], Et.tweeners[i] = Et.tweeners[i] || [], Et.tweeners[i].unshift(t)
                        },
                        prefilters: [function (e, t, i) {
                                var n,
                                s,
                                o,
                                r,
                                a,
                                l,
                                h,
                                d,
                                c = "width" in t || "height" in t,
                                u = this,
                                p = {},
                                f = e.style,
                                g = e.nodeType && he(e),
                                m = Q.get(e, "fxshow");
                                for (n in i.queue || (null == (r = E._queueHooks(e, "fx")).unqueued && (r.unqueued = 0, a = r.empty.fire, r.empty.fire = function () {
                                            r.unqueued || a()
                                        }), r.unqueued++, u.always((function () {
                                                u.always((function () {
                                                        r.unqueued--,
                                                        E.queue(e, "fx").length || r.empty.fire()
                                                    }))
                                            }))), t)
                                    if (s = t[n], yt.test(s)) {
                                        if (delete t[n], o = o || "toggle" === s, s === (g ? "hide" : "show")) {
                                            if ("show" !== s || !m || void 0 === m[n])
                                                continue;
                                            g = !0
                                        }
                                        p[n] = m && m[n] || E.style(e, n)
                                    }
                                if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(p))
                                    for (n in c && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (h = m && m.display) && (h = Q.get(e, "display")), "none" === (d = E.css(e, "display")) && (h ? d = h : (ue([e], !0), h = e.style.display || h, d = E.css(e, "display"), ue([e]))), ("inline" === d || "inline-block" === d && null != h) && "none" === E.css(e, "float") && (l || (u.done((function () {
                                                            f.display = h
                                                        })), null == h && (d = f.display, h = "none" === d ? "" : d)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", u.always((function () {
                                                    f.overflow = i.overflow[0],
                                                    f.overflowX = i.overflow[1],
                                                    f.overflowY = i.overflow[2]
                                                }))), l = !1, p)
                                        l || (m ? "hidden" in m && (g = m.hidden) : m = Q.access(e, "fxshow", {
                                                display: h
                                            }), o && (m.hidden = !g), g && ue([e], !0), u.done((function () {
                                                    for (n in g || ue([e]), Q.remove(e, "fxshow"), p)
                                                        E.style(e, n, p[n])
                                                }))), l = Ct(g ? m[n] : 0, n, u), n in m || (m[n] = l.start, g && (l.end = l.start, l.start = 0))
                            }
                        ],
                        prefilter: function (e, t) {
                            t ? Et.prefilters.unshift(e) : Et.prefilters.push(e)
                        }
                    }),
                    E.speed = function (e, t, i) {
                        var n = e && "object" == typeof e ? E.extend({}, e) : {
                            complete: i || !i && t || y(e) && e,
                            duration: e,
                            easing: i && t || t && !y(t) && t
                        };
                        return E.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in E.fx.speeds ? n.duration = E.fx.speeds[n.duration] : n.duration = E.fx.speeds._default),
                        null != n.queue && !0 !== n.queue || (n.queue = "fx"),
                        n.old = n.complete,
                        n.complete = function () {
                            y(n.old) && n.old.call(this),
                            n.queue && E.dequeue(this, n.queue)
                        },
                        n
                    },
                    E.fn.extend({
                        fadeTo: function (e, t, i, n) {
                            return this.filter(he).css("opacity", 0).show().end().animate({
                                opacity: t
                            }, e, i, n)
                        },
                        animate: function (e, t, i, n) {
                            function s() {
                                var t = Et(this, E.extend({}, e), r);
                                (o || Q.get(this, "finish")) && t.stop(!0)
                            }
                            var o = E.isEmptyObject(e),
                            r = E.speed(t, i, n);
                            return s.finish = s,
                            o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
                        },
                        stop: function (e, t, i) {
                            function n(e) {
                                var t = e.stop;
                                delete e.stop,
                                t(i)
                            }
                            return "string" != typeof e && (i = t, t = e, e = void 0),
                            t && this.queue(e || "fx", []),
                            this.each((function () {
                                    var t = !0,
                                    s = null != e && e + "queueHooks",
                                    o = E.timers,
                                    r = Q.get(this);
                                    if (s)
                                        r[s] && r[s].stop && n(r[s]);
                                    else
                                        for (s in r)
                                            r[s] && r[s].stop && bt.test(s) && n(r[s]);
                                    for (s = o.length; s--; )
                                        o[s].elem !== this || null != e && o[s].queue !== e || (o[s].anim.stop(i), t = !1, o.splice(s, 1));
                                    !t && i || E.dequeue(this, e)
                                }))
                        },
                        finish: function (e) {
                            return !1 !== e && (e = e || "fx"),
                            this.each((function () {
                                    var t,
                                    i = Q.get(this),
                                    n = i[e + "queue"],
                                    s = i[e + "queueHooks"],
                                    o = E.timers,
                                    r = n ? n.length : 0;
                                    for (i.finish = !0, E.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = o.length; t--; )
                                        o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                                    for (t = 0; t < r; t++)
                                        n[t] && n[t].finish && n[t].finish.call(this);
                                    delete i.finish
                                }))
                        }
                    }),
                    E.each(["toggle", "show", "hide"], (function (e, t) {
                            var i = E.fn[t];
                            E.fn[t] = function (e, n, s) {
                                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(_t(t, !0), e, n, s)
                            }
                        })),
                    E.each({
                        slideDown: _t("show"),
                        slideUp: _t("hide"),
                        slideToggle: _t("toggle"),
                        fadeIn: {
                            opacity: "show"
                        },
                        fadeOut: {
                            opacity: "hide"
                        },
                        fadeToggle: {
                            opacity: "toggle"
                        }
                    }, (function (e, t) {
                            E.fn[e] = function (e, i, n) {
                                return this.animate(t, e, i, n)
                            }
                        })),
                    E.timers = [],
                    E.fx.tick = function () {
                        var e,
                        t = 0,
                        i = E.timers;
                        for (ft = Date.now(); t < i.length; t++)
                            (e = i[t])() || i[t] !== e || i.splice(t--, 1);
                        i.length || E.fx.stop(),
                        ft = void 0
                    },
                    E.fx.timer = function (e) {
                        E.timers.push(e),
                        E.fx.start()
                    },
                    E.fx.interval = 13,
                    E.fx.start = function () {
                        gt || (gt = !0, wt())
                    },
                    E.fx.stop = function () {
                        gt = null
                    },
                    E.fx.speeds = {
                        slow: 600,
                        fast: 200,
                        _default: 400
                    },
                    E.fn.delay = function (e, t) {
                        return e = E.fx && E.fx.speeds[e] || e,
                        t = t || "fx",
                        this.queue(t, (function (t, n) {
                                var s = i.setTimeout(t, e);
                                n.stop = function () {
                                    i.clearTimeout(s)
                                }
                            }))
                    },
                    mt = b.createElement("input"),
                    vt = b.createElement("select").appendChild(b.createElement("option")),
                    mt.type = "checkbox",
                    v.checkOn = "" !== mt.value,
                    v.optSelected = vt.selected,
                    (mt = b.createElement("input")).value = "t",
                    mt.type = "radio",
                    v.radioValue = "t" === mt.value;
                    var kt,
                    St = E.expr.attrHandle;
                    E.fn.extend({
                        attr: function (e, t) {
                            return F(this, E.attr, e, t, 1 < arguments.length)
                        },
                        removeAttr: function (e) {
                            return this.each((function () {
                                    E.removeAttr(this, e)
                                }))
                        }
                    }),
                    E.extend({
                        attr: function (e, t, i) {
                            var n,
                            s,
                            o = e.nodeType;
                            if (3 !== o && 8 !== o && 2 !== o)
                                return void 0 === e.getAttribute ? E.prop(e, t, i) : (1 === o && E.isXMLDoc(e) || (s = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? kt : void 0)), void 0 !== i ? null === i ? void E.removeAttr(e, t) : s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : s && "get" in s && null !== (n = s.get(e, t)) || null != (n = E.find.attr(e, t)) ? n : void 0)
                        },
                        attrHooks: {
                            type: {
                                set: function (e, t) {
                                    if (!v.radioValue && "radio" === t && H(e, "input")) {
                                        var i = e.value;
                                        return e.setAttribute("type", t),
                                        i && (e.value = i),
                                        t
                                    }
                                }
                            }
                        },
                        removeAttr: function (e, t) {
                            var i,
                            n = 0,
                            s = t && t.match(j);
                            if (s && 1 === e.nodeType)
                                for (; i = s[n++]; )
                                    e.removeAttribute(i)
                        }
                    }),
                    kt = {
                        set: function (e, t, i) {
                            return !1 === t ? E.removeAttr(e, i) : e.setAttribute(i, i),
                            i
                        }
                    },
                    E.each(E.expr.match.bool.source.match(/\w+/g), (function (e, t) {
                            var i = St[t] || E.find.attr;
                            St[t] = function (e, t, n) {
                                var s,
                                o,
                                r = t.toLowerCase();
                                return n || (o = St[r], St[r] = s, s = null != i(e, t, n) ? r : null, St[r] = o),
                                s
                            }
                        }));
                    var Tt = /^(?:input|select|textarea|button)$/i,
                    Nt = /^(?:a|area)$/i;
                    function At(e) {
                        return (e.match(j) || []).join(" ")
                    }
                    function Ht(e) {
                        return e.getAttribute && e.getAttribute("class") || ""
                    }
                    function Pt(e) {
                        return Array.isArray(e) ? e : "string" == typeof e && e.match(j) || []
                    }
                    E.fn.extend({
                        prop: function (e, t) {
                            return F(this, E.prop, e, t, 1 < arguments.length)
                        },
                        removeProp: function (e) {
                            return this.each((function () {
                                    delete this[E.propFix[e] || e]
                                }))
                        }
                    }),
                    E.extend({
                        prop: function (e, t, i) {
                            var n,
                            s,
                            o = e.nodeType;
                            if (3 !== o && 8 !== o && 2 !== o)
                                return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, s = E.propHooks[t]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : e[t] = i : s && "get" in s && null !== (n = s.get(e, t)) ? n : e[t]
                        },
                        propHooks: {
                            tabIndex: {
                                get: function (e) {
                                    var t = E.find.attr(e, "tabindex");
                                    return t ? parseInt(t, 10) : Tt.test(e.nodeName) || Nt.test(e.nodeName) && e.href ? 0 : -1
                                }
                            }
                        },
                        propFix: {
                            for : "htmlFor", class: "className"
                    }
                }),
                v.optSelected || (E.propHooks.selected = {
                        get: function (e) {
                            var t = e.parentNode;
                            return t && t.parentNode && t.parentNode.selectedIndex,
                            null
                        },
                        set: function (e) {
                            var t = e.parentNode;
                            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                        }
                    }),
                E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
                        E.propFix[this.toLowerCase()] = this
                    })),
                E.fn.extend({
                    addClass: function (e) {
                        var t,
                        i,
                        n,
                        s,
                        o,
                        r,
                        a,
                        l = 0;
                        if (y(e))
                            return this.each((function (t) {
                                    E(this).addClass(e.call(this, t, Ht(this)))
                                }));
                            if ((t = Pt(e)).length)
                                for (; i = this[l++]; )
                                    if (s = Ht(i), n = 1 === i.nodeType && " " + At(s) + " ") {
                                        for (r = 0; o = t[r++]; )
                                            n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                                        s !== (a = At(n)) && i.setAttribute("class", a)
                                    }
                            return this
                        },
                        removeClass: function (e) {
                            var t,
                            i,
                            n,
                            s,
                            o,
                            r,
                            a,
                            l = 0;
                            if (y(e))
                                return this.each((function (t) {
                                        E(this).removeClass(e.call(this, t, Ht(this)))
                                    }));
                            if (!arguments.length)
                                return this.attr("class", "");
                            if ((t = Pt(e)).length)
                                for (; i = this[l++]; )
                                    if (s = Ht(i), n = 1 === i.nodeType && " " + At(s) + " ") {
                                        for (r = 0; o = t[r++]; )
                                            for (; -1 < n.indexOf(" " + o + " "); )
                                                n = n.replace(" " + o + " ", " ");
                                        s !== (a = At(n)) && i.setAttribute("class", a)
                                    }
                            return this
                        },
                        toggleClass: function (e, t) {
                            var i = typeof e,
                            n = "string" == i || Array.isArray(e);
                            return "boolean" == typeof t && n ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each((function (i) {
                                    E(this).toggleClass(e.call(this, i, Ht(this), t), t)
                                })) : this.each((function () {
                                    var t,
                                    s,
                                    o,
                                    r;
                                    if (n)
                                        for (s = 0, o = E(this), r = Pt(e); t = r[s++]; )
                                            o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                                    else
                                        void 0 !== e && "boolean" != i || ((t = Ht(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", !t && !1 !== e && Q.get(this, "__className__") || ""))
                                }))
                        },
                        hasClass: function (e) {
                            var t,
                            i,
                            n = 0;
                            for (t = " " + e + " "; i = this[n++]; )
                                if (1 === i.nodeType && -1 < (" " + At(Ht(i)) + " ").indexOf(t))
                                    return !0;
                            return !1
                        }
                    });
                    var Dt = /\r/g;
                    function zt(e) {
                        e.stopPropagation()
                    }
                    E.fn.extend({
                        val: function (e) {
                            var t,
                            i,
                            n,
                            s = this[0];
                            return arguments.length ? (n = y(e), this.each((function (i) {
                                        var s;
                                        1 === this.nodeType && (null == (s = n ? e.call(this, i, E(this).val()) : e) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = E.map(s, (function (e) {
                                                                return null == e ? "" : e + ""
                                                            }))), (t = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, s, "value") || (this.value = s))
                                    }))) : s ? (t = E.valHooks[s.type] || E.valHooks[s.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(s, "value")) ? i : "string" == typeof(i = s.value) ? i.replace(Dt, "") : null == i ? "" : i : void 0
                        }
                    }),
                    E.extend({
                        valHooks: {
                            option: {
                                get: function (e) {
                                    var t = E.find.attr(e, "value");
                                    return null != t ? t : At(E.text(e))
                                }
                            },
                            select: {
                                get: function (e) {
                                    var t,
                                    i,
                                    n,
                                    s = e.options,
                                    o = e.selectedIndex,
                                    r = "select-one" === e.type,
                                    a = r ? null : [],
                                    l = r ? o + 1 : s.length;
                                    for (n = o < 0 ? l : r ? o : 0; n < l; n++)
                                        if (((i = s[n]).selected || n === o) && !i.disabled && (!i.parentNode.disabled || !H(i.parentNode, "optgroup"))) {
                                            if (t = E(i).val(), r)
                                                return t;
                                            a.push(t)
                                        }
                                    return a
                                },
                                set: function (e, t) {
                                    for (var i, n, s = e.options, o = E.makeArray(t), r = s.length; r--; )
                                        ((n = s[r]).selected = -1 < E.inArray(E.valHooks.option.get(n), o)) && (i = !0);
                                    return i || (e.selectedIndex = -1),
                                    o
                                }
                            }
                        }
                    }),
                    E.each(["radio", "checkbox"], (function () {
                            E.valHooks[this] = {
                                set: function (e, t) {
                                    if (Array.isArray(t))
                                        return e.checked = -1 < E.inArray(E(e).val(), t)
                                }
                            },
                            v.checkOn || (E.valHooks[this].get = function (e) {
                                return null === e.getAttribute("value") ? "on" : e.value
                            })
                        })),
                    v.focusin = "onfocusin" in i;
                    var Mt = /^(?:focusinfocus|focusoutblur)$/;
                    E.extend(E.event, {
                        trigger: function (e, t, n, s) {
                            var r,
                            a,
                            l,
                            h,
                            d,
                            c,
                            u,
                            p,
                            g = [n || b],
                            m = f.call(e, "type") ? e.type : e,
                            v = f.call(e, "namespace") ? e.namespace.split(".") : [];
                            if (a = p = l = n = n || b, 3 !== n.nodeType && 8 !== n.nodeType && !Mt.test(m + E.event.triggered) && (-1 < m.indexOf(".") && (m = (v = m.split(".")).shift(), v.sort()), d = m.indexOf(":") < 0 && "on" + m, (e = e[E.expando] ? e : new E.Event(m, "object" == typeof e && e)).isTrigger = s ? 2 : 3, e.namespace = v.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), u = E.event.special[m] || {}, s || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                                if (!s && !u.noBubble && !o(n)) {
                                    for (h = u.delegateType || m, Mt.test(h + m) || (a = a.parentNode); a; a = a.parentNode)
                                        g.push(a), l = a;
                                    l === (n.ownerDocument || b) && g.push(l.defaultView || l.parentWindow || i)
                                }
                                for (r = 0; (a = g[r++]) && !e.isPropagationStopped(); )
                                    p = a, e.type = 1 < r ? h : u.bindType || m, (c = (Q.get(a, "events") || Object.create(null))[e.type] && Q.get(a, "handle")) && c.apply(a, t), (c = d && a[d]) && c.apply && V(a) && (e.result = c.apply(a, t), !1 === e.result && e.preventDefault());
                                return e.type = m,
                                s || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(g.pop(), t) || !V(n) || d && y(n[m]) && !o(n) && ((l = n[d]) && (n[d] = null), E.event.triggered = m, e.isPropagationStopped() && p.addEventListener(m, zt), n[m](), e.isPropagationStopped() && p.removeEventListener(m, zt), E.event.triggered = void 0, l && (n[d] = l)),
                                e.result
                            }
                        },
                        simulate: function (e, t, i) {
                            var n = E.extend(new E.Event, i, {
                                type: e,
                                isSimulated: !0
                            });
                            E.event.trigger(n, null, t)
                        }
                    }),
                    E.fn.extend({
                        trigger: function (e, t) {
                            return this.each((function () {
                                    E.event.trigger(e, t, this)
                                }))
                        },
                        triggerHandler: function (e, t) {
                            var i = this[0];
                            if (i)
                                return E.event.trigger(e, t, i, !0)
                        }
                    }),
                    v.focusin || E.each({
                        focus: "focusin",
                        blur: "focusout"
                    }, (function (e, t) {
                            function i(e) {
                                E.event.simulate(t, e.target, E.event.fix(e))
                            }
                            E.event.special[t] = {
                                setup: function () {
                                    var n = this.ownerDocument || this.document || this,
                                    s = Q.access(n, t);
                                    s || n.addEventListener(e, i, !0),
                                    Q.access(n, t, (s || 0) + 1)
                                },
                                teardown: function () {
                                    var n = this.ownerDocument || this.document || this,
                                    s = Q.access(n, t) - 1;
                                    s ? Q.access(n, t, s) : (n.removeEventListener(e, i, !0), Q.remove(n, t))
                                }
                            }
                        }));
                    var Rt = i.location,
                    Lt = {
                        guid: Date.now()
                    },
                    Ot = /\?/;
                    E.parseXML = function (e) {
                        var t;
                        if (!e || "string" != typeof e)
                            return null;
                        try {
                            t = (new i.DOMParser).parseFromString(e, "text/xml")
                        } catch (e) {
                            t = void 0
                        }
                        return t && !t.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + e),
                        t
                    };
                    var jt = /\[\]$/,
                    $t = /\r?\n/g,
                    It = /^(?:submit|button|image|reset|file)$/i,
                    Wt = /^(?:input|select|textarea|keygen)/i;
                    function Ut(e, t, i, n) {
                        var s;
                        if (Array.isArray(t))
                            E.each(t, (function (t, s) {
                                    i || jt.test(e) ? n(e, s) : Ut(e + "[" + ("object" == typeof s && null != s ? t : "") + "]", s, i, n)
                                }));
                        else if (i || "object" !== _(t))
                            n(e, t);
                        else
                            for (s in t)
                                Ut(e + "[" + s + "]", t[s], i, n)
                    }
                    E.param = function (e, t) {
                        function i(e, t) {
                            var i = y(t) ? t() : t;
                            s[s.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
                        }
                        var n,
                        s = [];
                        if (null == e)
                            return "";
                        if (Array.isArray(e) || e.jquery && !E.isPlainObject(e))
                            E.each(e, (function () {
                                    i(this.name, this.value)
                                }));
                        else
                            for (n in e)
                                Ut(n, e[n], t, i);
                        return s.join("&")
                    },
                    E.fn.extend({
                        serialize: function () {
                            return E.param(this.serializeArray())
                        },
                        serializeArray: function () {
                            return this.map((function () {
                                    var e = E.prop(this, "elements");
                                    return e ? E.makeArray(e) : this
                                })).filter((function () {
                                    var e = this.type;
                                    return this.name && !E(this).is(":disabled") && Wt.test(this.nodeName) && !It.test(e) && (this.checked || !ge.test(e))
                                })).map((function (e, t) {
                                    var i = E(this).val();
                                    return null == i ? null : Array.isArray(i) ? E.map(i, (function (e) {
                                            return {
                                                name: t.name,
                                                value: e.replace($t, "\r\n")
                                            }
                                        })) : {
                                        name: t.name,
                                        value: i.replace($t, "\r\n")
                                    }
                                })).get()
                        }
                    });
                    var qt = /%20/g,
                    Bt = /#.*$/,
                    Ft = /([?&])_=[^&]*/,
                    Gt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                    Xt = /^(?:GET|HEAD)$/,
                    Yt = /^\/\//,
                    Jt = {},
                    Vt = {},
                    Kt = "*/".concat("*"),
                    Qt = b.createElement("a");
                    function Zt(e) {
                        return function (t, i) {
                            "string" != typeof t && (i = t, t = "*");
                            var n,
                            s = 0,
                            o = t.toLowerCase().match(j) || [];
                            if (y(i))
                                for (; n = o[s++]; )
                                    "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
                        }
                    }
                    function ei(e, t, i, n) {
                        var s = {},
                        o = e === Vt;
                        function r(a) {
                            var l;
                            return s[a] = !0,
                            E.each(e[a] || [], (function (e, a) {
                                    var h = a(t, i, n);
                                    return "string" != typeof h || o || s[h] ? o ? !(l = h) : void 0 : (t.dataTypes.unshift(h), r(h), !1)
                                })),
                            l
                        }
                        return r(t.dataTypes[0]) || !s["*"] && r("*")
                    }
                    function ti(e, t) {
                        var i,
                        n,
                        s = E.ajaxSettings.flatOptions || {};
                        for (i in t)
                            void 0 !== t[i] && ((s[i] ? e : n = n || {})[i] = t[i]);
                        return n && E.extend(!0, e, n),
                        e
                    }
                    Qt.href = Rt.href,
                    E.extend({
                        active: 0,
                        lastModified: {},
                        etag: {},
                        ajaxSettings: {
                            url: Rt.href,
                            type: "GET",
                            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Rt.protocol),
                            global: !0,
                            processData: !0,
                            async: !0,
                            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                            accepts: {
                                "*": Kt,
                                text: "text/plain",
                                html: "text/html",
                                xml: "application/xml, text/xml",
                                json: "application/json, text/javascript"
                            },
                            contents: {
                                xml: /\bxml\b/,
                                html: /\bhtml/,
                                json: /\bjson\b/
                            },
                            responseFields: {
                                xml: "responseXML",
                                text: "responseText",
                                json: "responseJSON"
                            },
                            converters: {
                                "* text": String,
                                "text html": !0,
                                "text json": JSON.parse,
                                "text xml": E.parseXML
                            },
                            flatOptions: {
                                url: !0,
                                context: !0
                            }
                        },
                        ajaxSetup: function (e, t) {
                            return t ? ti(ti(e, E.ajaxSettings), t) : ti(E.ajaxSettings, e)
                        },
                        ajaxPrefilter: Zt(Jt),
                        ajaxTransport: Zt(Vt),
                        ajax: function (e, t) {
                            "object" == typeof e && (t = e, e = void 0),
                            t = t || {};
                            var n,
                            s,
                            o,
                            r,
                            a,
                            l,
                            h,
                            d,
                            c,
                            u,
                            p = E.ajaxSetup({}, t),
                            f = p.context || p,
                            g = p.context && (f.nodeType || f.jquery) ? E(f) : E.event,
                            m = E.Deferred(),
                            v = E.Callbacks("once memory"),
                            y = p.statusCode || {},
                            w = {},
                            x = {},
                            _ = "canceled",
                            C = {
                                readyState: 0,
                                getResponseHeader: function (e) {
                                    var t;
                                    if (h) {
                                        if (!r)
                                            for (r = {}; t = Gt.exec(o); )
                                                r[t[1].toLowerCase() + " "] = (r[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                        t = r[e.toLowerCase() + " "]
                                    }
                                    return null == t ? null : t.join(", ")
                                },
                                getAllResponseHeaders: function () {
                                    return h ? o : null
                                },
                                setRequestHeader: function (e, t) {
                                    return null == h && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t),
                                    this
                                },
                                overrideMimeType: function (e) {
                                    return null == h && (p.mimeType = e),
                                    this
                                },
                                statusCode: function (e) {
                                    var t;
                                    if (e)
                                        if (h)
                                            C.always(e[C.status]);
                                        else
                                            for (t in e)
                                                y[t] = [y[t], e[t]];
                                    return this
                                },
                                abort: function (e) {
                                    var t = e || _;
                                    return n && n.abort(t),
                                    k(0, t),
                                    this
                                }
                            };
                            if (m.promise(C), p.url = ((e || p.url || Rt.href) + "").replace(Yt, Rt.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(j) || [""], null == p.crossDomain) {
                                l = b.createElement("a");
                                try {
                                    l.href = p.url,
                                    l.href = l.href,
                                    p.crossDomain = Qt.protocol + "//" + Qt.host != l.protocol + "//" + l.host
                                } catch (e) {
                                    p.crossDomain = !0
                                }
                            }
                            if (p.data && p.processData && "string" != typeof p.data && (p.data = E.param(p.data, p.traditional)), ei(Jt, p, t, C), h)
                                return C;
                            for (c in(d = E.event && p.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Xt.test(p.type), s = p.url.replace(Bt, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(qt, "+")) : (u = p.url.slice(s.length), p.data && (p.processData || "string" == typeof p.data) && (s += (Ot.test(s) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (s = s.replace(Ft, "$1"), u = (Ot.test(s) ? "&" : "?") + "_=" + Lt.guid++ + u), p.url = s + u), p.ifModified && (E.lastModified[s] && C.setRequestHeader("If-Modified-Since", E.lastModified[s]), E.etag[s] && C.setRequestHeader("If-None-Match", E.etag[s])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Kt + "; q=0.01" : "") : p.accepts["*"]), p.headers)
                                C.setRequestHeader(c, p.headers[c]);
                            if (p.beforeSend && (!1 === p.beforeSend.call(f, C, p) || h))
                                return C.abort();
                            if (_ = "abort", v.add(p.complete), C.done(p.success), C.fail(p.error), n = ei(Vt, p, t, C)) {
                                if (C.readyState = 1, d && g.trigger("ajaxSend", [C, p]), h)
                                    return C;
                                p.async && 0 < p.timeout && (a = i.setTimeout((function () {
                                                C.abort("timeout")
                                            }), p.timeout));
                                try {
                                    h = !1,
                                    n.send(w, k)
                                } catch (e) {
                                    if (h)
                                        throw e;
                                    k(-1, e)
                                }
                            } else
                                k(-1, "No Transport");
                            function k(e, t, r, l) {
                                var c,
                                u,
                                b,
                                w,
                                x,
                                _ = t;
                                h || (h = !0, a && i.clearTimeout(a), n = void 0, o = l || "", C.readyState = 0 < e ? 4 : 0, c = 200 <= e && e < 300 || 304 === e, r && (w = function (e, t, i) {
                                        for (var n, s, o, r, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                                            l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                                        if (n)
                                            for (s in a)
                                                if (a[s] && a[s].test(n)) {
                                                    l.unshift(s);
                                                    break
                                                }
                                        if (l[0]in i)
                                            o = l[0];
                                        else {
                                            for (s in i) {
                                                if (!l[0] || e.converters[s + " " + l[0]]) {
                                                    o = s;
                                                    break
                                                }
                                                r = r || s
                                            }
                                            o = o || r
                                        }
                                        if (o)
                                            return o !== l[0] && l.unshift(o), i[o]
                                    }
                                        (p, C, r)), !c && -1 < E.inArray("script", p.dataTypes) && (p.converters["text script"] = function () {}), w = function (e, t, i, n) {
                                    var s,
                                    o,
                                    r,
                                    a,
                                    l,
                                    h = {},
                                    d = e.dataTypes.slice();
                                    if (d[1])
                                        for (r in e.converters)
                                            h[r.toLowerCase()] = e.converters[r];
                                    for (o = d.shift(); o; )
                                        if (e.responseFields[o] && (i[e.responseFields[o]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = d.shift())
                                            if ("*" === o)
                                                o = l;
                                            else if ("*" !== l && l !== o) {
                                                if (!(r = h[l + " " + o] || h["* " + o]))
                                                    for (s in h)
                                                        if ((a = s.split(" "))[1] === o && (r = h[l + " " + a[0]] || h["* " + a[0]])) {
                                                            !0 === r ? r = h[s] : !0 !== h[s] && (o = a[0], d.unshift(a[1]));
                                                            break
                                                        }
                                                if (!0 !== r)
                                                    if (r && e.throws)
                                                        t = r(t);
                                                    else
                                                        try {
                                                            t = r(t)
                                                        } catch (e) {
                                                            return {
                                                                state: "parsererror",
                                                                error: r ? e : "No conversion from " + l + " to " + o
                                                            }
                                                        }
                                            }
                                    return {
                                        state: "success",
                                        data: t
                                    }
                                }
                                    (p, w, C, c), c ? (p.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (E.lastModified[s] = x), (x = C.getResponseHeader("etag")) && (E.etag[s] = x)), 204 === e || "HEAD" === p.type ? _ = "nocontent" : 304 === e ? _ = "notmodified" : (_ = w.state, u = w.data, c = !(b = w.error))) : (b = _, !e && _ || (_ = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || _) + "", c ? m.resolveWith(f, [u, _, C]) : m.rejectWith(f, [C, _, b]), C.statusCode(y), y = void 0, d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? u : b]), v.fireWith(f, [C, _]), d && (g.trigger("ajaxComplete", [C, p]), --E.active || E.event.trigger("ajaxStop")))
                            }
                            return C
                        },
                        getJSON: function (e, t, i) {
                            return E.get(e, t, i, "json")
                        },
                        getScript: function (e, t) {
                            return E.get(e, void 0, t, "script")
                        }
                    }),
                    E.each(["get", "post"], (function (e, t) {
                            E[t] = function (e, i, n, s) {
                                return y(i) && (s = s || n, n = i, i = void 0),
                                E.ajax(E.extend({
                                        url: e,
                                        type: t,
                                        dataType: s,
                                        data: i,
                                        success: n
                                    }, E.isPlainObject(e) && e))
                            }
                        })),
                    E.ajaxPrefilter((function (e) {
                            var t;
                            for (t in e.headers)
                                "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
                        })),
                    E._evalUrl = function (e, t, i) {
                        return E.ajax({
                            url: e,
                            type: "GET",
                            dataType: "script",
                            cache: !0,
                            async: !1,
                            global: !1,
                            converters: {
                                "text script": function () {}
                            },
                            dataFilter: function (e) {
                                E.globalEval(e, t, i)
                            }
                        })
                    },
                    E.fn.extend({
                        wrapAll: function (e) {
                            var t;
                            return this[0] && (y(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function () {
                                        for (var e = this; e.firstElementChild; )
                                            e = e.firstElementChild;
                                        return e
                                    })).append(this)),
                            this
                        },
                        wrapInner: function (e) {
                            return y(e) ? this.each((function (t) {
                                    E(this).wrapInner(e.call(this, t))
                                })) : this.each((function () {
                                    var t = E(this),
                                    i = t.contents();
                                    i.length ? i.wrapAll(e) : t.append(e)
                                }))
                        },
                        wrap: function (e) {
                            var t = y(e);
                            return this.each((function (i) {
                                    E(this).wrapAll(t ? e.call(this, i) : e)
                                }))
                        },
                        unwrap: function (e) {
                            return this.parent(e).not("body").each((function () {
                                    E(this).replaceWith(this.childNodes)
                                })),
                            this
                        }
                    }),
                    E.expr.pseudos.hidden = function (e) {
                        return !E.expr.pseudos.visible(e)
                    },
                    E.expr.pseudos.visible = function (e) {
                        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                    },
                    E.ajaxSettings.xhr = function () {
                        try {
                            return new i.XMLHttpRequest
                        } catch (e) {}
                    };
                    var ii = {
                        0: 200,
                        1223: 204
                    },
                    ni = E.ajaxSettings.xhr();
                    v.cors = !!ni && "withCredentials" in ni,
                    v.ajax = ni = !!ni,
                    E.ajaxTransport((function (e) {
                            var t,
                            n;
                            if (v.cors || ni && !e.crossDomain)
                                return {
                                    send: function (s, o) {
                                        var r,
                                        a = e.xhr();
                                        if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                                            for (r in e.xhrFields)
                                                a[r] = e.xhrFields[r];
                                        for (r in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s)
                                            a.setRequestHeader(r, s[r]);
                                        t = function (e) {
                                            return function () {
                                                t && (t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(ii[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                                        binary: a.response
                                                    }
                                                         : {
                                                        text: a.responseText
                                                    }, a.getAllResponseHeaders()))
                                            }
                                        },
                                        a.onload = t(),
                                        n = a.onerror = a.ontimeout = t("error"),
                                        void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function () {
                                            4 === a.readyState && i.setTimeout((function () {
                                                    t && n()
                                                }))
                                        },
                                        t = t("abort");
                                        try {
                                            a.send(e.hasContent && e.data || null)
                                        } catch (s) {
                                            if (t)
                                                throw s
                                        }
                                    },
                                    abort: function () {
                                        t && t()
                                    }
                                }
                        })),
                    E.ajaxPrefilter((function (e) {
                            e.crossDomain && (e.contents.script = !1)
                        })),
                    E.ajaxSetup({
                        accepts: {
                            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                        },
                        contents: {
                            script: /\b(?:java|ecma)script\b/
                        },
                        converters: {
                            "text script": function (e) {
                                return E.globalEval(e),
                                e
                            }
                        }
                    }),
                    E.ajaxPrefilter("script", (function (e) {
                            void 0 === e.cache && (e.cache = !1),
                            e.crossDomain && (e.type = "GET")
                        })),
                    E.ajaxTransport("script", (function (e) {
                            var t,
                            i;
                            if (e.crossDomain || e.scriptAttrs)
                                return {
                                    send: function (n, s) {
                                        t = E("<script>").attr(e.scriptAttrs || {}).prop({
                                            charset: e.scriptCharset,
                                            src: e.url
                                        }).on("load error", i = function (e) {
                                                t.remove(),
                                                i = null,
                                                e && s("error" === e.type ? 404 : 200, e.type)
                                            }),
                                        b.head.appendChild(t[0])
                                    },
                                    abort: function () {
                                        i && i()
                                    }
                                }
                        }));
                    var si,
                    oi = [],
                    ri = /(=)\?(?=&|$)|\?\?/;
                    E.ajaxSetup({
                        jsonp: "callback",
                        jsonpCallback: function () {
                            var e = oi.pop() || E.expando + "_" + Lt.guid++;
                            return this[e] = !0,
                            e
                        }
                    }),
                    E.ajaxPrefilter("json jsonp", (function (e, t, n) {
                            var s,
                            o,
                            r,
                            a = !1 !== e.jsonp && (ri.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && ri.test(e.data) && "data");
                            if (a || "jsonp" === e.dataTypes[0])
                                return s = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(ri, "$1" + s) : !1 !== e.jsonp && (e.url += (Ot.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function () {
                                    return r || E.error(s + " was not called"),
                                    r[0]
                                },
                            e.dataTypes[0] = "json",
                            o = i[s],
                            i[s] = function () {
                                r = arguments
                            },
                            n.always((function () {
                                    void 0 === o ? E(i).removeProp(s) : i[s] = o,
                                    e[s] && (e.jsonpCallback = t.jsonpCallback, oi.push(s)),
                                    r && y(o) && o(r[0]),
                                    r = o = void 0
                                })),
                            "script"
                        })),
                    v.createHTMLDocument = ((si = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === si.childNodes.length),
                    E.parseHTML = function (e, t, i) {
                        return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (v.createHTMLDocument ? ((n = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, t.head.appendChild(n)) : t = b), o = !i && [], (s = P.exec(e)) ? [t.createElement(s[1])] : (s = _e([e], t, o), o && o.length && E(o).remove(), E.merge([], s.childNodes)));
                        var n,
                        s,
                        o
                    },
                    E.fn.load = function (e, t, i) {
                        var n,
                        s,
                        o,
                        r = this,
                        a = e.indexOf(" ");
                        return -1 < a && (n = At(e.slice(a)), e = e.slice(0, a)),
                        y(t) ? (i = t, t = void 0) : t && "object" == typeof t && (s = "POST"),
                        0 < r.length && E.ajax({
                            url: e,
                            type: s || "GET",
                            dataType: "html",
                            data: t
                        }).done((function (e) {
                                o = arguments,
                                r.html(n ? E("<div>").append(E.parseHTML(e)).find(n) : e)
                            })).always(i && function (e, t) {
                            r.each((function () {
                                    i.apply(this, o || [e.responseText, t, e])
                                }))
                        }),
                        this
                    },
                    E.expr.pseudos.animated = function (e) {
                        return E.grep(E.timers, (function (t) {
                                return e === t.elem
                            })).length
                    },
                    E.offset = {
                        setOffset: function (e, t, i) {
                            var n,
                            s,
                            o,
                            r,
                            a,
                            l,
                            h = E.css(e, "position"),
                            d = E(e),
                            c = {};
                            "static" === h && (e.style.position = "relative"),
                            a = d.offset(),
                            o = E.css(e, "top"),
                            l = E.css(e, "left"),
                            s = ("absolute" === h || "fixed" === h) && -1 < (o + l).indexOf("auto") ? (r = (n = d.position()).top, n.left) : (r = parseFloat(o) || 0, parseFloat(l) || 0),
                            y(t) && (t = t.call(e, i, E.extend({}, a))),
                            null != t.top && (c.top = t.top - a.top + r),
                            null != t.left && (c.left = t.left - a.left + s),
                            "using" in t ? t.using.call(e, c) : ("number" == typeof c.top && (c.top += "px"), "number" == typeof c.left && (c.left += "px"), d.css(c))
                        }
                    },
                    E.fn.extend({
                        offset: function (e) {
                            if (arguments.length)
                                return void 0 === e ? this : this.each((function (t) {
                                        E.offset.setOffset(this, e, t)
                                    }));
                            var t,
                            i,
                            n = this[0];
                            return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                                top: t.top + i.pageYOffset,
                                left: t.left + i.pageXOffset
                            }) : {
                                top: 0,
                                left: 0
                            }
                             : void 0
                        },
                        position: function () {
                            if (this[0]) {
                                var e,
                                t,
                                i,
                                n = this[0],
                                s = {
                                    top: 0,
                                    left: 0
                                };
                                if ("fixed" === E.css(n, "position"))
                                    t = n.getBoundingClientRect();
                                else {
                                    for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === E.css(e, "position"); )
                                        e = e.parentNode;
                                    e && e !== n && 1 === e.nodeType && ((s = E(e).offset()).top += E.css(e, "borderTopWidth", !0), s.left += E.css(e, "borderLeftWidth", !0))
                                }
                                return {
                                    top: t.top - s.top - E.css(n, "marginTop", !0),
                                    left: t.left - s.left - E.css(n, "marginLeft", !0)
                                }
                            }
                        },
                        offsetParent: function () {
                            return this.map((function () {
                                    for (var e = this.offsetParent; e && "static" === E.css(e, "position"); )
                                        e = e.offsetParent;
                                    return e || re
                                }))
                        }
                    }),
                    E.each({
                        scrollLeft: "pageXOffset",
                        scrollTop: "pageYOffset"
                    }, (function (e, t) {
                            var i = "pageYOffset" === t;
                            E.fn[e] = function (n) {
                                return F(this, (function (e, n, s) {
                                        var r;
                                        if (o(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === s)
                                            return r ? r[t] : e[n];
                                        r ? r.scrollTo(i ? r.pageXOffset : s, i ? s : r.pageYOffset) : e[n] = s
                                    }), e, n, arguments.length)
                            }
                        })),
                    E.each(["top", "left"], (function (e, t) {
                            E.cssHooks[t] = tt(v.pixelPosition, (function (e, i) {
                                        if (i)
                                            return i = et(e, t), Je.test(i) ? E(e).position()[t] + "px" : i
                                    }))
                        })),
                    E.each({
                        Height: "height",
                        Width: "width"
                    }, (function (e, t) {
                            E.each({
                                padding: "inner" + e,
                                content: t,
                                "": "outer" + e
                            }, (function (i, n) {
                                    E.fn[n] = function (s, r) {
                                        var a = arguments.length && (i || "boolean" != typeof s),
                                        l = i || (!0 === s || !0 === r ? "margin" : "border");
                                        return F(this, (function (t, i, s) {
                                                var r;
                                                return o(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === s ? E.css(t, i, l) : E.style(t, i, s, l)
                                            }), t, a ? s : void 0, a)
                                    }
                                }))
                        })),
                    E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) {
                            E.fn[t] = function (e) {
                                return this.on(t, e)
                            }
                        })),
                    E.fn.extend({
                        bind: function (e, t, i) {
                            return this.on(e, null, t, i)
                        },
                        unbind: function (e, t) {
                            return this.off(e, null, t)
                        },
                        delegate: function (e, t, i, n) {
                            return this.on(t, e, i, n)
                        },
                        undelegate: function (e, t, i) {
                            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
                        },
                        hover: function (e, t) {
                            return this.mouseenter(e).mouseleave(t || e)
                        }
                    }),
                    E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (e, t) {
                            E.fn[t] = function (e, i) {
                                return 0 < arguments.length ? this.on(t, null, e, i) : this.trigger(t)
                            }
                        }));
                    var ai = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                    E.proxy = function (e, t) {
                        var i,
                        n,
                        s;
                        if ("string" == typeof t && (i = e[t], t = e, e = i), y(e))
                            return n = l.call(arguments, 2), (s = function () {
                                return e.apply(t || this, n.concat(l.call(arguments)))
                            }).guid = e.guid = e.guid || E.guid++, s
                    },
                    E.holdReady = function (e) {
                        e ? E.readyWait++ : E.ready(!0)
                    },
                    E.isArray = Array.isArray,
                    E.parseJSON = JSON.parse,
                    E.nodeName = H,
                    E.isFunction = y,
                    E.isWindow = o,
                    E.camelCase = J,
                    E.type = _,
                    E.now = Date.now,
                    E.isNumeric = function (e) {
                        var t = E.type(e);
                        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                    },
                    E.trim = function (e) {
                        return null == e ? "" : (e + "").replace(ai, "")
                    },
                    void 0 === (n = function () {
                        return E
                    }
                        .apply(t, [])) || (e.exports = n);
                    var li = i.jQuery,
                    hi = i.$;
                    return E.noConflict = function (e) {
                        return i.$ === E && (i.$ = hi),
                        e && i.jQuery === E && (i.jQuery = li),
                        E
                    },
                    i.jQuery = i.$ = E,
                    E
                }))
        }, function (e, t) {
            !function (e) {
                e.ui = e.ui || {};
                e.ui.version = "1.12.1";
                var t = 0,
                i = Array.prototype.slice;
                e.cleanData = function (t) {
                    return function (i) {
                        var n,
                        s,
                        o;
                        for (o = 0; null != (s = i[o]); o++)
                            try {
                                (n = e._data(s, "events")) && n.remove && e(s).triggerHandler("remove")
                            } catch (i) {}
                        t(i)
                    }
                }
                (e.cleanData),
                e.widget = function (t, i, n) {
                    var s,
                    o,
                    r,
                    a = {},
                    l = t.split(".")[0],
                    h = l + "-" + (t = t.split(".")[1]);
                    return n || (n = i, i = e.Widget),
                    e.isArray(n) && (n = e.extend.apply(null, [{}
                                ].concat(n))),
                    e.expr[":"][h.toLowerCase()] = function (t) {
                        return !!e.data(t, h)
                    },
                    e[l] = e[l] || {},
                    s = e[l][t],
                    o = e[l][t] = function (e, t) {
                        if (!this._createWidget)
                            return new o(e, t);
                        arguments.length && this._createWidget(e, t)
                    },
                    e.extend(o, s, {
                        version: n.version,
                        _proto: e.extend({}, n),
                        _childConstructors: []
                    }),
                    (r = new i).options = e.widget.extend({}, r.options),
                    e.each(n, (function (t, n) {
                            e.isFunction(n) ? a[t] = function () {
                                function e() {
                                    return i.prototype[t].apply(this, arguments)
                                }
                                function s(e) {
                                    return i.prototype[t].apply(this, e)
                                }
                                return function () {
                                    var t,
                                    i = this._super,
                                    o = this._superApply;
                                    return this._super = e,
                                    this._superApply = s,
                                    t = n.apply(this, arguments),
                                    this._super = i,
                                    this._superApply = o,
                                    t
                                }
                            }
                            () : a[t] = n
                        })),
                    o.prototype = e.widget.extend(r, {
                        widgetEventPrefix: s && r.widgetEventPrefix || t
                    }, a, {
                        constructor: o,
                        namespace: l,
                        widgetName: t,
                        widgetFullName: h
                    }),
                    s ? (e.each(s._childConstructors, (function (t, i) {
                                var n = i.prototype;
                                e.widget(n.namespace + "." + n.widgetName, o, i._proto)
                            })), delete s._childConstructors) : i._childConstructors.push(o),
                    e.widget.bridge(t, o),
                    o
                },
                e.widget.extend = function (t) {
                    for (var n, s, o = i.call(arguments, 1), r = 0, a = o.length; r < a; r++)
                        for (n in o[r])
                            s = o[r][n], o[r].hasOwnProperty(n) && void 0 !== s && (e.isPlainObject(s) ? t[n] = e.isPlainObject(t[n]) ? e.widget.extend({}, t[n], s) : e.widget.extend({}, s) : t[n] = s);
                    return t
                },
                e.widget.bridge = function (t, n) {
                    var s = n.prototype.widgetFullName || t;
                    e.fn[t] = function (o) {
                        var r = "string" == typeof o,
                        a = i.call(arguments, 1),
                        l = this;
                        return r ? this.length || "instance" !== o ? this.each((function () {
                                var i,
                                n = e.data(this, s);
                                return "instance" === o ? (l = n, !1) : n ? e.isFunction(n[o]) && "_" !== o.charAt(0) ? (i = n[o].apply(n, a)) !== n && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0 : e.error("no such method '" + o + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + o + "'")
                            })) : l = void 0 : (a.length && (o = e.widget.extend.apply(null, [o].concat(a))), this.each((function () {
                                        var t = e.data(this, s);
                                        t ? (t.option(o || {}), t._init && t._init()) : e.data(this, s, new n(o, this))
                                    }))),
                        l
                    }
                },
                e.Widget = function () {},
                e.Widget._childConstructors = [],
                e.Widget.prototype = {
                    widgetName: "widget",
                    widgetEventPrefix: "",
                    defaultElement: "<div>",
                    options: {
                        classes: {},
                        disabled: !1,
                        create: null
                    },
                    _createWidget: function (i, n) {
                        n = e(n || this.defaultElement || this)[0],
                        this.element = e(n),
                        this.uuid = t++,
                        this.eventNamespace = "." + this.widgetName + this.uuid,
                        this.bindings = e(),
                        this.hoverable = e(),
                        this.focusable = e(),
                        this.classesElementLookup = {},
                        n !== this && (e.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                                remove: function (e) {
                                    e.target === n && this.destroy()
                                }
                            }), this.document = e(n.style ? n.ownerDocument : n.document || n), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)),
                        this.options = e.widget.extend({}, this.options, this._getCreateOptions(), i),
                        this._create(),
                        this.options.disabled && this._setOptionDisabled(this.options.disabled),
                        this._trigger("create", null, this._getCreateEventData()),
                        this._init()
                    },
                    _getCreateOptions: function () {
                        return {}
                    },
                    _getCreateEventData: e.noop,
                    _create: e.noop,
                    _init: e.noop,
                    destroy: function () {
                        var t = this;
                        this._destroy(),
                        e.each(this.classesElementLookup, (function (e, i) {
                                t._removeClass(i, e)
                            })),
                        this.element.off(this.eventNamespace).removeData(this.widgetFullName),
                        this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
                        this.bindings.off(this.eventNamespace)
                    },
                    _destroy: e.noop,
                    widget: function () {
                        return this.element
                    },
                    option: function (t, i) {
                        var n,
                        s,
                        o,
                        r = t;
                        if (0 === arguments.length)
                            return e.widget.extend({}, this.options);
                        if ("string" == typeof t)
                            if (r = {}, n = t.split("."), t = n.shift(), n.length) {
                                for (s = r[t] = e.widget.extend({}, this.options[t]), o = 0; o < n.length - 1; o++)
                                    s[n[o]] = s[n[o]] || {},
                                s = s[n[o]];
                                if (t = n.pop(), 1 === arguments.length)
                                    return void 0 === s[t] ? null : s[t];
                                s[t] = i
                            } else {
                                if (1 === arguments.length)
                                    return void 0 === this.options[t] ? null : this.options[t];
                                r[t] = i
                            }
                        return this._setOptions(r),
                        this
                    },
                    _setOptions: function (e) {
                        var t;
                        for (t in e)
                            this._setOption(t, e[t]);
                        return this
                    },
                    _setOption: function (e, t) {
                        return "classes" === e && this._setOptionClasses(t),
                        this.options[e] = t,
                        "disabled" === e && this._setOptionDisabled(t),
                        this
                    },
                    _setOptionClasses: function (t) {
                        var i,
                        n,
                        s;
                        for (i in t)
                            s = this.classesElementLookup[i], t[i] !== this.options.classes[i] && s && s.length && (n = e(s.get()), this._removeClass(s, i), n.addClass(this._classes({
                                        element: n,
                                        keys: i,
                                        classes: t,
                                        add: !0
                                    })))
                    },
                    _setOptionDisabled: function (e) {
                        this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e),
                        e && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
                    },
                    enable: function () {
                        return this._setOptions({
                            disabled: !1
                        })
                    },
                    disable: function () {
                        return this._setOptions({
                            disabled: !0
                        })
                    },
                    _classes: function (t) {
                        var i = [],
                        n = this;
                        function s(s, o) {
                            var r,
                            a;
                            for (a = 0; a < s.length; a++)
                                r = n.classesElementLookup[s[a]] || e(), r = t.add ? e(e.unique(r.get().concat(t.element.get()))) : e(r.not(t.element).get()), n.classesElementLookup[s[a]] = r, i.push(s[a]), o && t.classes[s[a]] && i.push(t.classes[s[a]])
                        }
                        return t = e.extend({
                            element: this.element,
                            classes: this.options.classes || {}
                        }, t),
                        this._on(t.element, {
                            remove: "_untrackClassesElement"
                        }),
                        t.keys && s(t.keys.match(/\S+/g) || [], !0),
                        t.extra && s(t.extra.match(/\S+/g) || []),
                        i.join(" ")
                    },
                    _untrackClassesElement: function (t) {
                        var i = this;
                        e.each(i.classesElementLookup, (function (n, s) {
                                -1 !== e.inArray(t.target, s) && (i.classesElementLookup[n] = e(s.not(t.target).get()))
                            }))
                    },
                    _removeClass: function (e, t, i) {
                        return this._toggleClass(e, t, i, !1)
                    },
                    _addClass: function (e, t, i) {
                        return this._toggleClass(e, t, i, !0)
                    },
                    _toggleClass: function (e, t, i, n) {
                        n = "boolean" == typeof n ? n : i;
                        var s = "string" == typeof e || null === e,
                        o = {
                            extra: s ? t : i,
                            keys: s ? e : t,
                            element: s ? this.element : e,
                            add: n
                        };
                        return o.element.toggleClass(this._classes(o), n),
                        this
                    },
                    _on: function (t, i, n) {
                        var s,
                        o = this;
                        "boolean" != typeof t && (n = i, i = t, t = !1),
                        n ? (i = s = e(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()),
                        e.each(n, (function (n, r) {
                                function a() {
                                    if (t || !0 !== o.options.disabled && !e(this).hasClass("ui-state-disabled"))
                                        return ("string" == typeof r ? o[r] : r).apply(o, arguments)
                                }
                                "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || e.guid++);
                                var l = n.match(/^([\w:-]*)\s*(.*)$/),
                                h = l[1] + o.eventNamespace,
                                d = l[2];
                                d ? s.on(h, d, a) : i.on(h, a)
                            }))
                    },
                    _off: function (t, i) {
                        i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
                        t.off(i).off(i),
                        this.bindings = e(this.bindings.not(t).get()),
                        this.focusable = e(this.focusable.not(t).get()),
                        this.hoverable = e(this.hoverable.not(t).get())
                    },
                    _delay: function (e, t) {
                        var i = this;
                        return setTimeout((function () {
                                return ("string" == typeof e ? i[e] : e).apply(i, arguments)
                            }), t || 0)
                    },
                    _hoverable: function (t) {
                        this.hoverable = this.hoverable.add(t),
                        this._on(t, {
                            mouseenter: function (t) {
                                this._addClass(e(t.currentTarget), null, "ui-state-hover")
                            },
                            mouseleave: function (t) {
                                this._removeClass(e(t.currentTarget), null, "ui-state-hover")
                            }
                        })
                    },
                    _focusable: function (t) {
                        this.focusable = this.focusable.add(t),
                        this._on(t, {
                            focusin: function (t) {
                                this._addClass(e(t.currentTarget), null, "ui-state-focus")
                            },
                            focusout: function (t) {
                                this._removeClass(e(t.currentTarget), null, "ui-state-focus")
                            }
                        })
                    },
                    _trigger: function (t, i, n) {
                        var s,
                        o,
                        r = this.options[t];
                        if (n = n || {}, (i = e.Event(i)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                            for (s in o)
                                s in i || (i[s] = o[s]);
                        return this.element.trigger(i, n),
                        !(e.isFunction(r) && !1 === r.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented())
                    }
                },
                e.each({
                    show: "fadeIn",
                    hide: "fadeOut"
                }, (function (t, i) {
                        e.Widget.prototype["_" + t] = function (n, s, o) {
                            var r;
                            "string" == typeof s && (s = {
                                    effect: s
                                });
                            var a = s ? !0 === s || "number" == typeof s ? i : s.effect || i : t;
                            "number" == typeof(s = s || {}) && (s = {
                                    duration: s
                                }),
                            r = !e.isEmptyObject(s),
                            s.complete = o,
                            s.delay && n.delay(s.delay),
                            r && e.effects && e.effects.effect[a] ? n[t](s) : a !== t && n[a] ? n[a](s.duration, s.easing, o) : n.queue((function (i) {
                                    e(this)[t](),
                                    o && o.call(n[0]),
                                    i()
                                }))
                        }
                    }));
                e.widget,
                e.extend(e.expr[":"], {
                    data: e.expr.createPseudo ? e.expr.createPseudo((function (t) {
                            return function (i) {
                                return !!e.data(i, t)
                            }
                        })) : function (t, i, n) {
                        return !!e.data(t, n[3])
                    }
                }),
                e.fn.extend({
                    disableSelection: function () {
                        var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                        return function () {
                            return this.on(e + ".ui-disableSelection", (function (e) {
                                    e.preventDefault()
                                }))
                        }
                    }
                    (),
                    enableSelection: function () {
                        return this.off(".ui-disableSelection")
                    }
                }),
                e.fn.scrollParent = function (t) {
                    var i = this.css("position"),
                    n = "absolute" === i,
                    s = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    o = this.parents().filter((function () {
                                var t = e(this);
                                return (!n || "static" !== t.css("position")) && s.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                            })).eq(0);
                    return "fixed" !== i && o.length ? o : e(this[0].ownerDocument || document)
                },
                e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
                var n = !1;
                e(document).on("mouseup", (function () {
                        n = !1
                    }));
                e.widget("ui.mouse", {
                    version: "1.12.1",
                    options: {
                        cancel: "input, textarea, button, select, option",
                        distance: 1,
                        delay: 0
                    },
                    _mouseInit: function () {
                        var t = this;
                        this.element.on("mousedown." + this.widgetName, (function (e) {
                                return t._mouseDown(e)
                            })).on("click." + this.widgetName, (function (i) {
                                if (!0 === e.data(i.target, t.widgetName + ".preventClickEvent"))
                                    return e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
                            })),
                        this.started = !1
                    },
                    _mouseDestroy: function () {
                        this.element.off("." + this.widgetName),
                        this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
                    },
                    _mouseDown: function (t) {
                        if (!n) {
                            this._mouseMoved = !1,
                            this._mouseStarted && this._mouseUp(t),
                            this._mouseDownEvent = t;
                            var i = this,
                            s = 1 === t.which,
                            o = !("string" != typeof this.options.cancel || !t.target.nodeName) && e(t.target).closest(this.options.cancel).length;
                            return !(s && !o && this._mouseCapture(t)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout((function () {
                                                i.mouseDelayMet = !0
                                            }), this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t), !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
                                    return i._mouseMove(e)
                                }, this._mouseUpDelegate = function (e) {
                                    return i._mouseUp(e)
                                }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n = !0, !0))
                        }
                    },
                    _mouseMove: function (t) {
                        if (this._mouseMoved) {
                            if (e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button)
                                return this._mouseUp(t);
                            if (!t.which)
                                if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey)
                                    this.ignoreMissingWhich = !0;
                                else if (!this.ignoreMissingWhich)
                                    return this._mouseUp(t)
                        }
                        return (t.which || t.button) && (this._mouseMoved = !0),
                        this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
                    },
                    _mouseUp: function (t) {
                        this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate),
                        this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)),
                        this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer),
                        this.ignoreMissingWhich = !1,
                        n = !1,
                        t.preventDefault()
                    },
                    _mouseDistanceMet: function (e) {
                        return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
                    },
                    _mouseDelayMet: function () {
                        return this.mouseDelayMet
                    },
                    _mouseStart: function () {},
                    _mouseDrag: function () {},
                    _mouseStop: function () {},
                    _mouseCapture: function () {
                        return !0
                    }
                }),
                e.ui.plugin = {
                    add: function (t, i, n) {
                        var s,
                        o = e.ui[t].prototype;
                        for (s in n)
                            o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([i, n[s]])
                    },
                    call: function (e, t, i, n) {
                        var s,
                        o = e.plugins[t];
                        if (o && (n || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                            for (s = 0; s < o.length; s++)
                                e.options[o[s][0]] && o[s][1].apply(e.element, i)
                    }
                },
                e.ui.safeActiveElement = function (e) {
                    var t;
                    try {
                        t = e.activeElement
                    } catch (i) {
                        t = e.body
                    }
                    return t || (t = e.body),
                    t.nodeName || (t = e.body),
                    t
                },
                e.ui.safeBlur = function (t) {
                    t && "body" !== t.nodeName.toLowerCase() && e(t).trigger("blur")
                };
                e.widget("ui.draggable", e.ui.mouse, {
                    version: "1.12.1",
                    widgetEventPrefix: "drag",
                    options: {
                        addClasses: !0,
                        appendTo: "parent",
                        axis: !1,
                        connectToSortable: !1,
                        containment: !1,
                        cursor: "auto",
                        cursorAt: !1,
                        grid: !1,
                        handle: !1,
                        helper: "original",
                        iframeFix: !1,
                        opacity: !1,
                        refreshPositions: !1,
                        revert: !1,
                        revertDuration: 500,
                        scope: "default",
                        scroll: !0,
                        scrollSensitivity: 20,
                        scrollSpeed: 20,
                        snap: !1,
                        snapMode: "both",
                        snapTolerance: 20,
                        stack: !1,
                        zIndex: !1,
                        drag: null,
                        start: null,
                        stop: null
                    },
                    _create: function () {
                        "original" === this.options.helper && this._setPositionRelative(),
                        this.options.addClasses && this._addClass("ui-draggable"),
                        this._setHandleClassName(),
                        this._mouseInit()
                    },
                    _setOption: function (e, t) {
                        this._super(e, t),
                        "handle" === e && (this._removeHandleClassName(), this._setHandleClassName())
                    },
                    _destroy: function () {
                        (this.helper || this.element).is(".ui-draggable-dragging") ? this.destroyOnClear = !0 : (this._removeHandleClassName(), this._mouseDestroy())
                    },
                    _mouseCapture: function (t) {
                        var i = this.options;
                        return !(this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(t), !!this.handle && (this._blurActiveElement(t), this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix), !0))
                    },
                    _blockFrames: function (t) {
                        this.iframeBlocks = this.document.find(t).map((function () {
                                    var t = e(this);
                                    return e("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
                                }))
                    },
                    _unblockFrames: function () {
                        this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
                    },
                    _blurActiveElement: function (t) {
                        var i = e.ui.safeActiveElement(this.document[0]);
                        e(t.target).closest(i).length || e.ui.safeBlur(i)
                    },
                    _mouseStart: function (t) {
                        var i = this.options;
                        return this.helper = this._createHelper(t),
                        this._addClass(this.helper, "ui-draggable-dragging"),
                        this._cacheHelperProportions(),
                        e.ui.ddmanager && (e.ui.ddmanager.current = this),
                        this._cacheMargins(),
                        this.cssPosition = this.helper.css("position"),
                        this.scrollParent = this.helper.scrollParent(!0),
                        this.offsetParent = this.helper.offsetParent(),
                        this.hasFixedAncestor = this.helper.parents().filter((function () {
                                    return "fixed" === e(this).css("position")
                                })).length > 0,
                        this.positionAbs = this.element.offset(),
                        this._refreshOffsets(t),
                        this.originalPosition = this.position = this._generatePosition(t, !1),
                        this.originalPageX = t.pageX,
                        this.originalPageY = t.pageY,
                        i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
                        this._setContainment(),
                        !1 === this._trigger("start", t) ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
                    },
                    _refreshOffsets: function (e) {
                        this.offset = {
                            top: this.positionAbs.top - this.margins.top,
                            left: this.positionAbs.left - this.margins.left,
                            scroll: !1,
                            parent: this._getParentOffset(),
                            relative: this._getRelativeOffset()
                        },
                        this.offset.click = {
                            left: e.pageX - this.offset.left,
                            top: e.pageY - this.offset.top
                        }
                    },
                    _mouseDrag: function (t, i) {
                        if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                            var n = this._uiHash();
                            if (!1 === this._trigger("drag", t, n))
                                return this._mouseUp(new e.Event("mouseup", t)), !1;
                            this.position = n.position
                        }
                        return this.helper[0].style.left = this.position.left + "px",
                        this.helper[0].style.top = this.position.top + "px",
                        e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
                        !1
                    },
                    _mouseStop: function (t) {
                        var i = this,
                        n = !1;
                        return e.ui.ddmanager && !this.options.dropBehaviour && (n = e.ui.ddmanager.drop(this, t)),
                        this.dropped && (n = this.dropped, this.dropped = !1),
                        "invalid" === this.options.revert && !n || "valid" === this.options.revert && n || !0 === this.options.revert || e.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), (function () {
                                !1 !== i._trigger("stop", t) && i._clear()
                            })) : !1 !== this._trigger("stop", t) && this._clear(),
                        !1
                    },
                    _mouseUp: function (t) {
                        return this._unblockFrames(),
                        e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t),
                        this.handleElement.is(t.target) && this.element.trigger("focus"),
                        e.ui.mouse.prototype._mouseUp.call(this, t)
                    },
                    cancel: function () {
                        return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new e.Event("mouseup", {
                                target: this.element[0]
                            })) : this._clear(),
                        this
                    },
                    _getHandle: function (t) {
                        return !this.options.handle || !!e(t.target).closest(this.element.find(this.options.handle)).length
                    },
                    _setHandleClassName: function () {
                        this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element,
                        this._addClass(this.handleElement, "ui-draggable-handle")
                    },
                    _removeHandleClassName: function () {
                        this._removeClass(this.handleElement, "ui-draggable-handle")
                    },
                    _createHelper: function (t) {
                        var i = this.options,
                        n = e.isFunction(i.helper),
                        s = n ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
                        return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo),
                        n && s[0] === this.element[0] && this._setPositionRelative(),
                        s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"),
                        s
                    },
                    _setPositionRelative: function () {
                        /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
                    },
                    _adjustOffsetFromHelper: function (t) {
                        "string" == typeof t && (t = t.split(" ")),
                        e.isArray(t) && (t = {
                                left: +t[0],
                                top: +t[1] || 0
                            }),
                        "left" in t && (this.offset.click.left = t.left + this.margins.left),
                        "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
                        "top" in t && (this.offset.click.top = t.top + this.margins.top),
                        "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
                    },
                    _isRootNode: function (e) {
                        return /(html|body)/i.test(e.tagName) || e === this.document[0]
                    },
                    _getParentOffset: function () {
                        var t = this.offsetParent.offset(),
                        i = this.document[0];
                        return "absolute" === this.cssPosition && this.scrollParent[0] !== i && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()),
                        this._isRootNode(this.offsetParent[0]) && (t = {
                                top: 0,
                                left: 0
                            }), {
                            top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                            left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                        }
                    },
                    _getRelativeOffset: function () {
                        if ("relative" !== this.cssPosition)
                            return {
                                top: 0,
                                left: 0
                            };
                        var e = this.element.position(),
                        t = this._isRootNode(this.scrollParent[0]);
                        return {
                            top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
                            left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
                        }
                    },
                    _cacheMargins: function () {
                        this.margins = {
                            left: parseInt(this.element.css("marginLeft"), 10) || 0,
                            top: parseInt(this.element.css("marginTop"), 10) || 0,
                            right: parseInt(this.element.css("marginRight"), 10) || 0,
                            bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                        }
                    },
                    _cacheHelperProportions: function () {
                        this.helperProportions = {
                            width: this.helper.outerWidth(),
                            height: this.helper.outerHeight()
                        }
                    },
                    _setContainment: function () {
                        var t,
                        i,
                        n,
                        s = this.options,
                        o = this.document[0];
                        this.relativeContainer = null,
                        s.containment ? "window" !== s.containment ? "document" !== s.containment ? s.containment.constructor !== Array ? ("parent" === s.containment && (s.containment = this.helper[0].parentNode), (n = (i = e(s.containment))[0]) && (t = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i)) : this.containment = s.containment : this.containment = [0, 0, e(o).width() - this.helperProportions.width - this.margins.left, (e(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = null
                    },
                    _convertPositionTo: function (e, t) {
                        t || (t = this.position);
                        var i = "absolute" === e ? 1 : -1,
                        n = this._isRootNode(this.scrollParent[0]);
                        return {
                            top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
                            left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
                        }
                    },
                    _generatePosition: function (e, t) {
                        var i,
                        n,
                        s,
                        o,
                        r = this.options,
                        a = this._isRootNode(this.scrollParent[0]),
                        l = e.pageX,
                        h = e.pageY;
                        return a && this.offset.scroll || (this.offset.scroll = {
                                top: this.scrollParent.scrollTop(),
                                left: this.scrollParent.scrollLeft()
                            }),
                        t && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), r.grid && (s = r.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, h = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - r.grid[1] : s + r.grid[1] : s, o = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - r.grid[0] : o + r.grid[0] : o), "y" === r.axis && (l = this.originalPageX), "x" === r.axis && (h = this.originalPageY)), {
                            top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top),
                            left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left)
                        }
                    },
                    _clear: function () {
                        this._removeClass(this.helper, "ui-draggable-dragging"),
                        this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
                        this.helper = null,
                        this.cancelHelperRemoval = !1,
                        this.destroyOnClear && this.destroy()
                    },
                    _trigger: function (t, i, n) {
                        return n = n || this._uiHash(),
                        e.ui.plugin.call(this, t, [i, n, this], !0),
                        /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), n.offset = this.positionAbs),
                        e.Widget.prototype._trigger.call(this, t, i, n)
                    },
                    plugins: {},
                    _uiHash: function () {
                        return {
                            helper: this.helper,
                            position: this.position,
                            originalPosition: this.originalPosition,
                            offset: this.positionAbs
                        }
                    }
                }),
                e.ui.plugin.add("draggable", "connectToSortable", {
                    start: function (t, i, n) {
                        var s = e.extend({}, i, {
                            item: n.element
                        });
                        n.sortables = [],
                        e(n.options.connectToSortable).each((function () {
                                var i = e(this).sortable("instance");
                                i && !i.options.disabled && (n.sortables.push(i), i.refreshPositions(), i._trigger("activate", t, s))
                            }))
                    },
                    stop: function (t, i, n) {
                        var s = e.extend({}, i, {
                            item: n.element
                        });
                        n.cancelHelperRemoval = !1,
                        e.each(n.sortables, (function () {
                                var e = this;
                                e.isOver ? (e.isOver = 0, n.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = {
                                        position: e.placeholder.css("position"),
                                        top: e.placeholder.css("top"),
                                        left: e.placeholder.css("left")
                                    }, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger("deactivate", t, s))
                            }))
                    },
                    drag: function (t, i, n) {
                        e.each(n.sortables, (function () {
                                var s = !1,
                                o = this;
                                o.positionAbs = n.positionAbs,
                                o.helperProportions = n.helperProportions,
                                o.offset.click = n.offset.click,
                                o._intersectsWith(o.containerCache) && (s = !0, e.each(n.sortables, (function () {
                                            return this.positionAbs = n.positionAbs,
                                            this.helperProportions = n.helperProportions,
                                            this.offset.click = n.offset.click,
                                            this !== o && this._intersectsWith(this.containerCache) && e.contains(o.element[0], this.element[0]) && (s = !1),
                                            s
                                        }))),
                                s ? (o.isOver || (o.isOver = 1, n._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function () {
                                        return i.helper[0]
                                    }, t.target = o.currentItem[0], o._mouseCapture(t, !0), o._mouseStart(t, !0, !0), o.offset.click.top = n.offset.click.top, o.offset.click.left = n.offset.click.left, o.offset.parent.left -= n.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= n.offset.parent.top - o.offset.parent.top, n._trigger("toSortable", t), n.dropped = o.element, e.each(n.sortables, (function () {
                                                this.refreshPositions()
                                            })), n.currentItem = n.element, o.fromOutside = n), o.currentItem && (o._mouseDrag(t), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", t, o._uiHash(o)), o._mouseStop(t, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(n._parent), n._refreshOffsets(t), i.position = n._generatePosition(t, !0), n._trigger("fromSortable", t), n.dropped = !1, e.each(n.sortables, (function () {
                                            this.refreshPositions()
                                        })))
                            }))
                    }
                }),
                e.ui.plugin.add("draggable", "cursor", {
                    start: function (t, i, n) {
                        var s = e("body"),
                        o = n.options;
                        s.css("cursor") && (o._cursor = s.css("cursor")),
                        s.css("cursor", o.cursor)
                    },
                    stop: function (t, i, n) {
                        var s = n.options;
                        s._cursor && e("body").css("cursor", s._cursor)
                    }
                }),
                e.ui.plugin.add("draggable", "opacity", {
                    start: function (t, i, n) {
                        var s = e(i.helper),
                        o = n.options;
                        s.css("opacity") && (o._opacity = s.css("opacity")),
                        s.css("opacity", o.opacity)
                    },
                    stop: function (t, i, n) {
                        var s = n.options;
                        s._opacity && e(i.helper).css("opacity", s._opacity)
                    }
                }),
                e.ui.plugin.add("draggable", "scroll", {
                    start: function (e, t, i) {
                        i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
                        i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
                    },
                    drag: function (t, i, n) {
                        var s = n.options,
                        o = !1,
                        r = n.scrollParentNotHidden[0],
                        a = n.document[0];
                        r !== a && "HTML" !== r.tagName ? (s.axis && "x" === s.axis || (n.overflowOffset.top + r.offsetHeight - t.pageY < s.scrollSensitivity ? r.scrollTop = o = r.scrollTop + s.scrollSpeed : t.pageY - n.overflowOffset.top < s.scrollSensitivity && (r.scrollTop = o = r.scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (n.overflowOffset.left + r.offsetWidth - t.pageX < s.scrollSensitivity ? r.scrollLeft = o = r.scrollLeft + s.scrollSpeed : t.pageX - n.overflowOffset.left < s.scrollSensitivity && (r.scrollLeft = o = r.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (t.pageY - e(a).scrollTop() < s.scrollSensitivity ? o = e(a).scrollTop(e(a).scrollTop() - s.scrollSpeed) : e(window).height() - (t.pageY - e(a).scrollTop()) < s.scrollSensitivity && (o = e(a).scrollTop(e(a).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (t.pageX - e(a).scrollLeft() < s.scrollSensitivity ? o = e(a).scrollLeft(e(a).scrollLeft() - s.scrollSpeed) : e(window).width() - (t.pageX - e(a).scrollLeft()) < s.scrollSensitivity && (o = e(a).scrollLeft(e(a).scrollLeft() + s.scrollSpeed)))),
                        !1 !== o && e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(n, t)
                    }
                }),
                e.ui.plugin.add("draggable", "snap", {
                    start: function (t, i, n) {
                        var s = n.options;
                        n.snapElements = [],
                        e(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each((function () {
                                var t = e(this),
                                i = t.offset();
                                this !== n.element[0] && n.snapElements.push({
                                    item: this,
                                    width: t.outerWidth(),
                                    height: t.outerHeight(),
                                    top: i.top,
                                    left: i.left
                                })
                            }))
                    },
                    drag: function (t, i, n) {
                        var s,
                        o,
                        r,
                        a,
                        l,
                        h,
                        d,
                        c,
                        u,
                        p,
                        f = n.options,
                        g = f.snapTolerance,
                        m = i.offset.left,
                        v = m + n.helperProportions.width,
                        y = i.offset.top,
                        b = y + n.helperProportions.height;
                        for (u = n.snapElements.length - 1; u >= 0; u--)
                            h = (l = n.snapElements[u].left - n.margins.left) + n.snapElements[u].width, c = (d = n.snapElements[u].top - n.margins.top) + n.snapElements[u].height, v < l - g || m > h + g || b < d - g || y > c + g || !e.contains(n.snapElements[u].item.ownerDocument, n.snapElements[u].item) ? (n.snapElements[u].snapping && n.options.snap.release && n.options.snap.release.call(n.element, t, e.extend(n._uiHash(), {
                                        snapItem: n.snapElements[u].item
                                    })), n.snapElements[u].snapping = !1) : ("inner" !== f.snapMode && (s = Math.abs(d - b) <= g, o = Math.abs(c - y) <= g, r = Math.abs(l - v) <= g, a = Math.abs(h - m) <= g, s && (i.position.top = n._convertPositionTo("relative", {
                                            top: d - n.helperProportions.height,
                                            left: 0
                                        }).top), o && (i.position.top = n._convertPositionTo("relative", {
                                            top: c,
                                            left: 0
                                        }).top), r && (i.position.left = n._convertPositionTo("relative", {
                                            top: 0,
                                            left: l - n.helperProportions.width
                                        }).left), a && (i.position.left = n._convertPositionTo("relative", {
                                            top: 0,
                                            left: h
                                        }).left)), p = s || o || r || a, "outer" !== f.snapMode && (s = Math.abs(d - y) <= g, o = Math.abs(c - b) <= g, r = Math.abs(l - m) <= g, a = Math.abs(h - v) <= g, s && (i.position.top = n._convertPositionTo("relative", {
                                            top: d,
                                            left: 0
                                        }).top), o && (i.position.top = n._convertPositionTo("relative", {
                                            top: c - n.helperProportions.height,
                                            left: 0
                                        }).top), r && (i.position.left = n._convertPositionTo("relative", {
                                            top: 0,
                                            left: l
                                        }).left), a && (i.position.left = n._convertPositionTo("relative", {
                                            top: 0,
                                            left: h - n.helperProportions.width
                                        }).left)), !n.snapElements[u].snapping && (s || o || r || a || p) && n.options.snap.snap && n.options.snap.snap.call(n.element, t, e.extend(n._uiHash(), {
                                        snapItem: n.snapElements[u].item
                                    })), n.snapElements[u].snapping = s || o || r || a || p)
                    }
                }),
                e.ui.plugin.add("draggable", "stack", {
                    start: function (t, i, n) {
                        var s,
                        o = n.options,
                        r = e.makeArray(e(o.stack)).sort((function (t, i) {
                                    return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
                                }));
                        r.length && (s = parseInt(e(r[0]).css("zIndex"), 10) || 0, e(r).each((function (t) {
                                    e(this).css("zIndex", s + t)
                                })), this.css("zIndex", s + r.length))
                    }
                }),
                e.ui.plugin.add("draggable", "zIndex", {
                    start: function (t, i, n) {
                        var s = e(i.helper),
                        o = n.options;
                        s.css("zIndex") && (o._zIndex = s.css("zIndex")),
                        s.css("zIndex", o.zIndex)
                    },
                    stop: function (t, i, n) {
                        var s = n.options;
                        s._zIndex && e(i.helper).css("zIndex", s._zIndex)
                    }
                });
                e.ui.draggable;
                e.widget("ui.droppable", {
                    version: "1.12.1",
                    widgetEventPrefix: "drop",
                    options: {
                        accept: "*",
                        addClasses: !0,
                        greedy: !1,
                        scope: "default",
                        tolerance: "intersect",
                        activate: null,
                        deactivate: null,
                        drop: null,
                        out: null,
                        over: null
                    },
                    _create: function () {
                        var t,
                        i = this.options,
                        n = i.accept;
                        this.isover = !1,
                        this.isout = !0,
                        this.accept = e.isFunction(n) ? n : function (e) {
                            return e.is(n)
                        },
                        this.proportions = function () {
                            if (!arguments.length)
                                return t || (t = {
                                        width: this.element[0].offsetWidth,
                                        height: this.element[0].offsetHeight
                                    });
                            t = arguments[0]
                        },
                        this._addToManager(i.scope),
                        i.addClasses && this._addClass("ui-droppable")
                    },
                    _addToManager: function (t) {
                        e.ui.ddmanager.droppables[t] = e.ui.ddmanager.droppables[t] || [],
                        e.ui.ddmanager.droppables[t].push(this)
                    },
                    _splice: function (e) {
                        for (var t = 0; t < e.length; t++)
                            e[t] === this && e.splice(t, 1)
                    },
                    _destroy: function () {
                        var t = e.ui.ddmanager.droppables[this.options.scope];
                        this._splice(t)
                    },
                    _setOption: function (t, i) {
                        if ("accept" === t)
                            this.accept = e.isFunction(i) ? i : function (e) {
                                return e.is(i)
                            };
                        else if ("scope" === t) {
                            var n = e.ui.ddmanager.droppables[this.options.scope];
                            this._splice(n),
                            this._addToManager(i)
                        }
                        this._super(t, i)
                    },
                    _activate: function (t) {
                        var i = e.ui.ddmanager.current;
                        this._addActiveClass(),
                        i && this._trigger("activate", t, this.ui(i))
                    },
                    _deactivate: function (t) {
                        var i = e.ui.ddmanager.current;
                        this._removeActiveClass(),
                        i && this._trigger("deactivate", t, this.ui(i))
                    },
                    _over: function (t) {
                        var i = e.ui.ddmanager.current;
                        i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", t, this.ui(i)))
                    },
                    _out: function (t) {
                        var i = e.ui.ddmanager.current;
                        i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", t, this.ui(i)))
                    },
                    _drop: function (t, i) {
                        var n = i || e.ui.ddmanager.current,
                        o = !1;
                        return !(!n || (n.currentItem || n.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each((function () {
                                    var i = e(this).droppable("instance");
                                    if (i.options.greedy && !i.options.disabled && i.options.scope === n.options.scope && i.accept.call(i.element[0], n.currentItem || n.element) && s(n, e.extend(i, {
                                                offset: i.element.offset()
                                            }), i.options.tolerance, t))
                                        return o = !0, !1
                                })), !o && (!!this.accept.call(this.element[0], n.currentItem || n.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", t, this.ui(n)), this.element)))
                    },
                    ui: function (e) {
                        return {
                            draggable: e.currentItem || e.element,
                            helper: e.helper,
                            position: e.position,
                            offset: e.positionAbs
                        }
                    },
                    _addHoverClass: function () {
                        this._addClass("ui-droppable-hover")
                    },
                    _removeHoverClass: function () {
                        this._removeClass("ui-droppable-hover")
                    },
                    _addActiveClass: function () {
                        this._addClass("ui-droppable-active")
                    },
                    _removeActiveClass: function () {
                        this._removeClass("ui-droppable-active")
                    }
                });
                var s = e.ui.intersect = function () {
                    function e(e, t, i) {
                        return e >= t && e < t + i
                    }
                    return function (t, i, n, s) {
                        if (!i.offset)
                            return !1;
                        var o = (t.positionAbs || t.position.absolute).left + t.margins.left,
                        r = (t.positionAbs || t.position.absolute).top + t.margins.top,
                        a = o + t.helperProportions.width,
                        l = r + t.helperProportions.height,
                        h = i.offset.left,
                        d = i.offset.top,
                        c = h + i.proportions().width,
                        u = d + i.proportions().height;
                        switch (n) {
                        case "fit":
                            return h <= o && a <= c && d <= r && l <= u;
                        case "intersect":
                            return h < o + t.helperProportions.width / 2 && a - t.helperProportions.width / 2 < c && d < r + t.helperProportions.height / 2 && l - t.helperProportions.height / 2 < u;
                        case "pointer":
                            return e(s.pageY, d, i.proportions().height) && e(s.pageX, h, i.proportions().width);
                        case "touch":
                            return (r >= d && r <= u || l >= d && l <= u || r < d && l > u) && (o >= h && o <= c || a >= h && a <= c || o < h && a > c);
                        default:
                            return !1
                        }
                    }
                }
                ();
                e.ui.ddmanager = {
                    current: null,
                    droppables: {
                    default:
                        []
                    },
                    prepareOffsets: function (t, i) {
                        var n,
                        s,
                        o = e.ui.ddmanager.droppables[t.options.scope] || [],
                        r = i ? i.type : null,
                        a = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
                        e: for (n = 0; n < o.length; n++)
                            if (!(o[n].options.disabled || t && !o[n].accept.call(o[n].element[0], t.currentItem || t.element))) {
                                for (s = 0; s < a.length; s++)
                                    if (a[s] === o[n].element[0]) {
                                        o[n].proportions().height = 0;
                                        continue e
                                    }
                                o[n].visible = "none" !== o[n].element.css("display"),
                                o[n].visible && ("mousedown" === r && o[n]._activate.call(o[n], i), o[n].offset = o[n].element.offset(), o[n].proportions({
                                        width: o[n].element[0].offsetWidth,
                                        height: o[n].element[0].offsetHeight
                                    }))
                            }
                    },
                    drop: function (t, i) {
                        var n = !1;
                        return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), (function () {
                                this.options && (!this.options.disabled && this.visible && s(t, this, this.options.tolerance, i) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
                            })),
                        n
                    },
                    dragStart: function (t, i) {
                        t.element.parentsUntil("body").on("scroll.droppable", (function () {
                                t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
                            }))
                    },
                    drag: function (t, i) {
                        t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i),
                        e.each(e.ui.ddmanager.droppables[t.options.scope] || [], (function () {
                                if (!this.options.disabled && !this.greedyChild && this.visible) {
                                    var n,
                                    o,
                                    r,
                                    a = s(t, this, this.options.tolerance, i),
                                    l = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                                    l && (this.options.greedy && (o = this.options.scope, (r = this.element.parents(":data(ui-droppable)").filter((function () {
                                                            return e(this).droppable("instance").options.scope === o
                                                        }))).length && ((n = e(r[0]).droppable("instance")).greedyChild = "isover" === l)), n && "isover" === l && (n.isover = !1, n.isout = !0, n._out.call(n, i)), this[l] = !0, this["isout" === l ? "isover" : "isout"] = !1, this["isover" === l ? "_over" : "_out"].call(this, i), n && "isout" === l && (n.isout = !1, n.isover = !0, n._over.call(n, i)))
                                }
                            }))
                    },
                    dragStop: function (t, i) {
                        t.element.parentsUntil("body").off("scroll.droppable"),
                        t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
                    }
                },
                !1 !== e.uiBackCompat && e.widget("ui.droppable", e.ui.droppable, {
                    options: {
                        hoverClass: !1,
                        activeClass: !1
                    },
                    _addActiveClass: function () {
                        this._super(),
                        this.options.activeClass && this.element.addClass(this.options.activeClass)
                    },
                    _removeActiveClass: function () {
                        this._super(),
                        this.options.activeClass && this.element.removeClass(this.options.activeClass)
                    },
                    _addHoverClass: function () {
                        this._super(),
                        this.options.hoverClass && this.element.addClass(this.options.hoverClass)
                    },
                    _removeHoverClass: function () {
                        this._super(),
                        this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
                    }
                });
                e.ui.droppable;
                e.widget("ui.resizable", e.ui.mouse, {
                    version: "1.12.1",
                    widgetEventPrefix: "resize",
                    options: {
                        alsoResize: !1,
                        animate: !1,
                        animateDuration: "slow",
                        animateEasing: "swing",
                        aspectRatio: !1,
                        autoHide: !1,
                        classes: {
                            "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
                        },
                        containment: !1,
                        ghost: !1,
                        grid: !1,
                        handles: "e,s,se",
                        helper: !1,
                        maxHeight: null,
                        maxWidth: null,
                        minHeight: 10,
                        minWidth: 10,
                        zIndex: 90,
                        resize: null,
                        start: null,
                        stop: null
                    },
                    _num: function (e) {
                        return parseFloat(e) || 0
                    },
                    _isNumber: function (e) {
                        return !isNaN(parseFloat(e))
                    },
                    _hasScroll: function (t, i) {
                        if ("hidden" === e(t).css("overflow"))
                            return !1;
                        var n,
                        s = i && "left" === i ? "scrollLeft" : "scrollTop";
                        return t[s] > 0 || (t[s] = 1, n = t[s] > 0, t[s] = 0, n)
                    },
                    _create: function () {
                        var t,
                        i = this.options,
                        n = this;
                        this._addClass("ui-resizable"),
                        e.extend(this, {
                            _aspectRatio: !!i.aspectRatio,
                            aspectRatio: i.aspectRatio,
                            originalElement: this.element,
                            _proportionallyResizeElements: [],
                            _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
                        }),
                        this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                                    position: this.element.css("position"),
                                    width: this.element.outerWidth(),
                                    height: this.element.outerHeight(),
                                    top: this.element.css("top"),
                                    left: this.element.css("left")
                                })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, t = {
                                marginTop: this.originalElement.css("marginTop"),
                                marginRight: this.originalElement.css("marginRight"),
                                marginBottom: this.originalElement.css("marginBottom"),
                                marginLeft: this.originalElement.css("marginLeft")
                            }, this.element.css(t), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                                    position: "static",
                                    zoom: 1,
                                    display: "block"
                                })), this.originalElement.css(t), this._proportionallyResize()),
                        this._setupHandles(),
                        i.autoHide && e(this.element).on("mouseenter", (function () {
                                i.disabled || (n._removeClass("ui-resizable-autohide"), n._handles.show())
                            })).on("mouseleave", (function () {
                                i.disabled || n.resizing || (n._addClass("ui-resizable-autohide"), n._handles.hide())
                            })),
                        this._mouseInit()
                    },
                    _destroy: function () {
                        this._mouseDestroy();
                        var t,
                        i = function (t) {
                            e(t).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
                        };
                        return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
                                position: t.css("position"),
                                width: t.outerWidth(),
                                height: t.outerHeight(),
                                top: t.css("top"),
                                left: t.css("left")
                            }).insertAfter(t), t.remove()),
                        this.originalElement.css("resize", this.originalResizeStyle),
                        i(this.originalElement),
                        this
                    },
                    _setOption: function (e, t) {
                        switch (this._super(e, t), e) {
                        case "handles":
                            this._removeHandles(),
                            this._setupHandles()
                        }
                    },
                    _setupHandles: function () {
                        var t,
                        i,
                        n,
                        s,
                        o,
                        r = this.options,
                        a = this;
                        if (this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? {
                                n: ".ui-resizable-n",
                                e: ".ui-resizable-e",
                                s: ".ui-resizable-s",
                                w: ".ui-resizable-w",
                                se: ".ui-resizable-se",
                                sw: ".ui-resizable-sw",
                                ne: ".ui-resizable-ne",
                                nw: ".ui-resizable-nw"
                            }
                                     : "e,s,se"), this._handles = e(), this.handles.constructor === String)
                            for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), n = this.handles.split(","), this.handles = {}, i = 0; i < n.length; i++)
                                s = "ui-resizable-" + (t = e.trim(n[i])), o = e("<div>"), this._addClass(o, "ui-resizable-handle " + s), o.css({
                                    zIndex: r.zIndex
                                }), this.handles[t] = ".ui-resizable-" + t, this.element.append(o);
                        this._renderAxis = function (t) {
                            var i,
                            n,
                            s,
                            o;
                            for (i in t = t || this.element, this.handles)
                                this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = e(this.handles[i]), this._on(this.handles[i], {
                                            mousedown: a._mouseDown
                                        })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (n = e(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(s, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
                        },
                        this._renderAxis(this.element),
                        this._handles = this._handles.add(this.element.find(".ui-resizable-handle")),
                        this._handles.disableSelection(),
                        this._handles.on("mouseover", (function () {
                                a.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a.axis = o && o[1] ? o[1] : "se")
                            })),
                        r.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
                    },
                    _removeHandles: function () {
                        this._handles.remove()
                    },
                    _mouseCapture: function (t) {
                        var i,
                        n,
                        s = !1;
                        for (i in this.handles)
                            ((n = e(this.handles[i])[0]) === t.target || e.contains(n, t.target)) && (s = !0);
                        return !this.options.disabled && s
                    },
                    _mouseStart: function (t) {
                        var i,
                        n,
                        s,
                        o = this.options,
                        r = this.element;
                        return this.resizing = !0,
                        this._renderProxy(),
                        i = this._num(this.helper.css("left")),
                        n = this._num(this.helper.css("top")),
                        o.containment && (i += e(o.containment).scrollLeft() || 0, n += e(o.containment).scrollTop() || 0),
                        this.offset = this.helper.offset(),
                        this.position = {
                            left: i,
                            top: n
                        },
                        this.size = this._helper ? {
                            width: this.helper.width(),
                            height: this.helper.height()
                        }
                         : {
                            width: r.width(),
                            height: r.height()
                        },
                        this.originalSize = this._helper ? {
                            width: r.outerWidth(),
                            height: r.outerHeight()
                        }
                         : {
                            width: r.width(),
                            height: r.height()
                        },
                        this.sizeDiff = {
                            width: r.outerWidth() - r.width(),
                            height: r.outerHeight() - r.height()
                        },
                        this.originalPosition = {
                            left: i,
                            top: n
                        },
                        this.originalMousePosition = {
                            left: t.pageX,
                            top: t.pageY
                        },
                        this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
                        s = e(".ui-resizable-" + this.axis).css("cursor"),
                        e("body").css("cursor", "auto" === s ? this.axis + "-resize" : s),
                        this._addClass("ui-resizable-resizing"),
                        this._propagate("start", t),
                        !0
                    },
                    _mouseDrag: function (t) {
                        var i,
                        n,
                        s = this.originalMousePosition,
                        o = this.axis,
                        r = t.pageX - s.left || 0,
                        a = t.pageY - s.top || 0,
                        l = this._change[o];
                        return this._updatePrevProperties(),
                        !!l && (i = l.apply(this, [t, r, a]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), n = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(n) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1)
                    },
                    _mouseStop: function (t) {
                        this.resizing = !1;
                        var i,
                        n,
                        s,
                        o,
                        r,
                        a,
                        l,
                        h = this.options,
                        d = this;
                        return this._helper && (s = (n = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left") ? 0 : d.sizeDiff.height, o = n ? 0 : d.sizeDiff.width, r = {
                                width: d.helper.width() - o,
                                height: d.helper.height() - s
                            }, a = parseFloat(d.element.css("left")) + (d.position.left - d.originalPosition.left) || null, l = parseFloat(d.element.css("top")) + (d.position.top - d.originalPosition.top) || null, h.animate || this.element.css(e.extend(r, {
                                    top: l,
                                    left: a
                                })), d.helper.height(d.size.height), d.helper.width(d.size.width), this._helper && !h.animate && this._proportionallyResize()),
                        e("body").css("cursor", "auto"),
                        this._removeClass("ui-resizable-resizing"),
                        this._propagate("stop", t),
                        this._helper && this.helper.remove(),
                        !1
                    },
                    _updatePrevProperties: function () {
                        this.prevPosition = {
                            top: this.position.top,
                            left: this.position.left
                        },
                        this.prevSize = {
                            width: this.size.width,
                            height: this.size.height
                        }
                    },
                    _applyChanges: function () {
                        var e = {};
                        return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"),
                        this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"),
                        this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"),
                        this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"),
                        this.helper.css(e),
                        e
                    },
                    _updateVirtualBoundaries: function (e) {
                        var t,
                        i,
                        n,
                        s,
                        o,
                        r = this.options;
                        o = {
                            minWidth: this._isNumber(r.minWidth) ? r.minWidth : 0,
                            maxWidth: this._isNumber(r.maxWidth) ? r.maxWidth : 1 / 0,
                            minHeight: this._isNumber(r.minHeight) ? r.minHeight : 0,
                            maxHeight: this._isNumber(r.maxHeight) ? r.maxHeight : 1 / 0
                        },
                        (this._aspectRatio || e) && (t = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, t > o.minWidth && (o.minWidth = t), n > o.minHeight && (o.minHeight = n), i < o.maxWidth && (o.maxWidth = i), s < o.maxHeight && (o.maxHeight = s)),
                        this._vBoundaries = o
                    },
                    _updateCache: function (e) {
                        this.offset = this.helper.offset(),
                        this._isNumber(e.left) && (this.position.left = e.left),
                        this._isNumber(e.top) && (this.position.top = e.top),
                        this._isNumber(e.height) && (this.size.height = e.height),
                        this._isNumber(e.width) && (this.size.width = e.width)
                    },
                    _updateRatio: function (e) {
                        var t = this.position,
                        i = this.size,
                        n = this.axis;
                        return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio),
                        "sw" === n && (e.left = t.left + (i.width - e.width), e.top = null),
                        "nw" === n && (e.top = t.top + (i.height - e.height), e.left = t.left + (i.width - e.width)),
                        e
                    },
                    _respectSize: function (e) {
                        var t = this._vBoundaries,
                        i = this.axis,
                        n = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width,
                        s = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height,
                        o = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width,
                        r = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height,
                        a = this.originalPosition.left + this.originalSize.width,
                        l = this.originalPosition.top + this.originalSize.height,
                        h = /sw|nw|w/.test(i),
                        d = /nw|ne|n/.test(i);
                        return o && (e.width = t.minWidth),
                        r && (e.height = t.minHeight),
                        n && (e.width = t.maxWidth),
                        s && (e.height = t.maxHeight),
                        o && h && (e.left = a - t.minWidth),
                        n && h && (e.left = a - t.maxWidth),
                        r && d && (e.top = l - t.minHeight),
                        s && d && (e.top = l - t.maxHeight),
                        e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null,
                        e
                    },
                    _getPaddingPlusBorderDimensions: function (e) {
                        for (var t = 0, i = [], n = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], s = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")]; t < 4; t++)
                            i[t] = parseFloat(n[t]) || 0, i[t] += parseFloat(s[t]) || 0;
                        return {
                            height: i[0] + i[2],
                            width: i[1] + i[3]
                        }
                    },
                    _proportionallyResize: function () {
                        if (this._proportionallyResizeElements.length)
                            for (var e, t = 0, i = this.helper || this.element; t < this._proportionallyResizeElements.length; t++)
                                e = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)), e.css({
                                    height: i.height() - this.outerDimensions.height || 0,
                                    width: i.width() - this.outerDimensions.width || 0
                                })
                    },
                    _renderProxy: function () {
                        var t = this.element,
                        i = this.options;
                        this.elementOffset = t.offset(),
                        this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
                                width: this.element.outerWidth(),
                                height: this.element.outerHeight(),
                                position: "absolute",
                                left: this.elementOffset.left + "px",
                                top: this.elementOffset.top + "px",
                                zIndex: ++i.zIndex
                            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
                    },
                    _change: {
                        e: function (e, t) {
                            return {
                                width: this.originalSize.width + t
                            }
                        },
                        w: function (e, t) {
                            var i = this.originalSize;
                            return {
                                left: this.originalPosition.left + t,
                                width: i.width - t
                            }
                        },
                        n: function (e, t, i) {
                            var n = this.originalSize;
                            return {
                                top: this.originalPosition.top + i,
                                height: n.height - i
                            }
                        },
                        s: function (e, t, i) {
                            return {
                                height: this.originalSize.height + i
                            }
                        },
                        se: function (t, i, n) {
                            return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, n]))
                        },
                        sw: function (t, i, n) {
                            return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, n]))
                        },
                        ne: function (t, i, n) {
                            return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, n]))
                        },
                        nw: function (t, i, n) {
                            return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, n]))
                        }
                    },
                    _propagate: function (t, i) {
                        e.ui.plugin.call(this, t, [i, this.ui()]),
                        "resize" !== t && this._trigger(t, i, this.ui())
                    },
                    plugins: {},
                    ui: function () {
                        return {
                            originalElement: this.originalElement,
                            element: this.element,
                            helper: this.helper,
                            position: this.position,
                            size: this.size,
                            originalSize: this.originalSize,
                            originalPosition: this.originalPosition
                        }
                    }
                }),
                e.ui.plugin.add("resizable", "animate", {
                    stop: function (t) {
                        var i = e(this).resizable("instance"),
                        n = i.options,
                        s = i._proportionallyResizeElements,
                        o = s.length && /textarea/i.test(s[0].nodeName),
                        r = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                        a = o ? 0 : i.sizeDiff.width,
                        l = {
                            width: i.size.width - a,
                            height: i.size.height - r
                        },
                        h = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                        d = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
                        i.element.animate(e.extend(l, d && h ? {
                                top: d,
                                left: h
                            }
                                 : {}), {
                            duration: n.animateDuration,
                            easing: n.animateEasing,
                            step: function () {
                                var n = {
                                    width: parseFloat(i.element.css("width")),
                                    height: parseFloat(i.element.css("height")),
                                    top: parseFloat(i.element.css("top")),
                                    left: parseFloat(i.element.css("left"))
                                };
                                s && s.length && e(s[0]).css({
                                    width: n.width,
                                    height: n.height
                                }),
                                i._updateCache(n),
                                i._propagate("resize", t)
                            }
                        })
                    }
                }),
                e.ui.plugin.add("resizable", "containment", {
                    start: function () {
                        var t,
                        i,
                        n,
                        s,
                        o,
                        r,
                        a,
                        l = e(this).resizable("instance"),
                        h = l.options,
                        d = l.element,
                        c = h.containment,
                        u = c instanceof e ? c.get(0) : /parent/.test(c) ? d.parent().get(0) : c;
                        u && (l.containerElement = e(u), /document/.test(c) || c === document ? (l.containerOffset = {
                                    left: 0,
                                    top: 0
                                }, l.containerPosition = {
                                    left: 0,
                                    top: 0
                                }, l.parentData = {
                                    element: e(document),
                                    left: 0,
                                    top: 0,
                                    width: e(document).width(),
                                    height: e(document).height() || document.body.parentNode.scrollHeight
                                }) : (t = e(u), i = [], e(["Top", "Right", "Left", "Bottom"]).each((function (e, n) {
                                        i[e] = l._num(t.css("padding" + n))
                                    })), l.containerOffset = t.offset(), l.containerPosition = t.position(), l.containerSize = {
                                    height: t.innerHeight() - i[3],
                                    width: t.innerWidth() - i[1]
                                }, n = l.containerOffset, s = l.containerSize.height, o = l.containerSize.width, r = l._hasScroll(u, "left") ? u.scrollWidth : o, a = l._hasScroll(u) ? u.scrollHeight : s, l.parentData = {
                                    element: u,
                                    left: n.left,
                                    top: n.top,
                                    width: r,
                                    height: a
                                }))
                    },
                    resize: function (t) {
                        var i,
                        n,
                        s,
                        o,
                        r = e(this).resizable("instance"),
                        a = r.options,
                        l = r.containerOffset,
                        h = r.position,
                        d = r._aspectRatio || t.shiftKey,
                        c = {
                            top: 0,
                            left: 0
                        },
                        u = r.containerElement,
                        p = !0;
                        u[0] !== document && /static/.test(u.css("position")) && (c = l),
                        h.left < (r._helper ? l.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - l.left : r.position.left - c.left), d && (r.size.height = r.size.width / r.aspectRatio, p = !1), r.position.left = a.helper ? l.left : 0),
                        h.top < (r._helper ? l.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - l.top : r.position.top), d && (r.size.width = r.size.height * r.aspectRatio, p = !1), r.position.top = r._helper ? l.top : 0),
                        s = r.containerElement.get(0) === r.element.parent().get(0),
                        o = /relative|absolute/.test(r.containerElement.css("position")),
                        s && o ? (r.offset.left = r.parentData.left + r.position.left, r.offset.top = r.parentData.top + r.position.top) : (r.offset.left = r.element.offset().left, r.offset.top = r.element.offset().top),
                        i = Math.abs(r.sizeDiff.width + (r._helper ? r.offset.left - c.left : r.offset.left - l.left)),
                        n = Math.abs(r.sizeDiff.height + (r._helper ? r.offset.top - c.top : r.offset.top - l.top)),
                        i + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - i, d && (r.size.height = r.size.width / r.aspectRatio, p = !1)),
                        n + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - n, d && (r.size.width = r.size.height * r.aspectRatio, p = !1)),
                        p || (r.position.left = r.prevPosition.left, r.position.top = r.prevPosition.top, r.size.width = r.prevSize.width, r.size.height = r.prevSize.height)
                    },
                    stop: function () {
                        var t = e(this).resizable("instance"),
                        i = t.options,
                        n = t.containerOffset,
                        s = t.containerPosition,
                        o = t.containerElement,
                        r = e(t.helper),
                        a = r.offset(),
                        l = r.outerWidth() - t.sizeDiff.width,
                        h = r.outerHeight() - t.sizeDiff.height;
                        t._helper && !i.animate && /relative/.test(o.css("position")) && e(this).css({
                            left: a.left - s.left - n.left,
                            width: l,
                            height: h
                        }),
                        t._helper && !i.animate && /static/.test(o.css("position")) && e(this).css({
                            left: a.left - s.left - n.left,
                            width: l,
                            height: h
                        })
                    }
                }),
                e.ui.plugin.add("resizable", "alsoResize", {
                    start: function () {
                        var t = e(this).resizable("instance").options;
                        e(t.alsoResize).each((function () {
                                var t = e(this);
                                t.data("ui-resizable-alsoresize", {
                                    width: parseFloat(t.width()),
                                    height: parseFloat(t.height()),
                                    left: parseFloat(t.css("left")),
                                    top: parseFloat(t.css("top"))
                                })
                            }))
                    },
                    resize: function (t, i) {
                        var n = e(this).resizable("instance"),
                        s = n.options,
                        o = n.originalSize,
                        r = n.originalPosition,
                        a = {
                            height: n.size.height - o.height || 0,
                            width: n.size.width - o.width || 0,
                            top: n.position.top - r.top || 0,
                            left: n.position.left - r.left || 0
                        };
                        e(s.alsoResize).each((function () {
                                var t = e(this),
                                n = e(this).data("ui-resizable-alsoresize"),
                                s = {},
                                o = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                                e.each(o, (function (e, t) {
                                        var i = (n[t] || 0) + (a[t] || 0);
                                        i && i >= 0 && (s[t] = i || null)
                                    })),
                                t.css(s)
                            }))
                    },
                    stop: function () {
                        e(this).removeData("ui-resizable-alsoresize")
                    }
                }),
                e.ui.plugin.add("resizable", "ghost", {
                    start: function () {
                        var t = e(this).resizable("instance"),
                        i = t.size;
                        t.ghost = t.originalElement.clone(),
                        t.ghost.css({
                            opacity: .25,
                            display: "block",
                            position: "relative",
                            height: i.height,
                            width: i.width,
                            margin: 0,
                            left: 0,
                            top: 0
                        }),
                        t._addClass(t.ghost, "ui-resizable-ghost"),
                        !1 !== e.uiBackCompat && "string" == typeof t.options.ghost && t.ghost.addClass(this.options.ghost),
                        t.ghost.appendTo(t.helper)
                    },
                    resize: function () {
                        var t = e(this).resizable("instance");
                        t.ghost && t.ghost.css({
                            position: "relative",
                            height: t.size.height,
                            width: t.size.width
                        })
                    },
                    stop: function () {
                        var t = e(this).resizable("instance");
                        t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
                    }
                }),
                e.ui.plugin.add("resizable", "grid", {
                    resize: function () {
                        var t,
                        i = e(this).resizable("instance"),
                        n = i.options,
                        s = i.size,
                        o = i.originalSize,
                        r = i.originalPosition,
                        a = i.axis,
                        l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
                        h = l[0] || 1,
                        d = l[1] || 1,
                        c = Math.round((s.width - o.width) / h) * h,
                        u = Math.round((s.height - o.height) / d) * d,
                        p = o.width + c,
                        f = o.height + u,
                        g = n.maxWidth && n.maxWidth < p,
                        m = n.maxHeight && n.maxHeight < f,
                        v = n.minWidth && n.minWidth > p,
                        y = n.minHeight && n.minHeight > f;
                        n.grid = l,
                        v && (p += h),
                        y && (f += d),
                        g && (p -= h),
                        m && (f -= d),
                        /^(se|s|e)$/.test(a) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.top = r.top - u) : /^(sw)$/.test(a) ? (i.size.width = p, i.size.height = f, i.position.left = r.left - c) : ((f - d <= 0 || p - h <= 0) && (t = i._getPaddingPlusBorderDimensions(this)), f - d > 0 ? (i.size.height = f, i.position.top = r.top - u) : (f = d - t.height, i.size.height = f, i.position.top = r.top + o.height - f), p - h > 0 ? (i.size.width = p, i.position.left = r.left - c) : (p = h - t.width, i.size.width = p, i.position.left = r.left + o.width - p))
                    }
                });
                e.ui.resizable
            }
            (jQuery)
        }, function (e, t) {
            !function (e) {
                if (e.support.touch = "ontouchend" in document, e.support.touch) {
                    var t,
                    i = e.ui.mouse.prototype,
                    n = i._mouseInit,
                    s = i._mouseDestroy;
                    i._touchStart = function (e) {
                        !t && this._mouseCapture(e.originalEvent.changedTouches[0]) && (t = !0, this._touchMoved = !1, o(e, "mouseover"), o(e, "mousemove"), o(e, "mousedown"))
                    },
                    i._touchMove = function (e) {
                        t && (this._touchMoved = !0, o(e, "mousemove"))
                    },
                    i._touchEnd = function (e) {
                        t && (o(e, "mouseup"), o(e, "mouseout"), this._touchMoved || o(e, "click"), t = !1)
                    },
                    i._mouseInit = function () {
                        var t = this;
                        t.element.bind({
                            touchstart: e.proxy(t, "_touchStart"),
                            touchmove: e.proxy(t, "_touchMove"),
                            touchend: e.proxy(t, "_touchEnd")
                        }),
                        n.call(t)
                    },
                    i._mouseDestroy = function () {
                        var t = this;
                        t.element.unbind({
                            touchstart: e.proxy(t, "_touchStart"),
                            touchmove: e.proxy(t, "_touchMove"),
                            touchend: e.proxy(t, "_touchEnd")
                        }),
                        s.call(t)
                    }
                }
                function o(e, t) {
                    if (!(e.originalEvent.touches.length > 1)) {
                        e.preventDefault();
                        var i = e.originalEvent.changedTouches[0],
                        n = document.createEvent("MouseEvents");
                        n.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null),
                        e.target.dispatchEvent(n)
                    }
                }
            }
            (jQuery)
        }, function (e, t, i) {}, function (e, t, i) {}, function (e, t, i) {
            "use strict";
            function n(e, t) {
                void 0 === t && (t = !1);
                var i,
                s = ["tile-primary", "overflow-hidden", "h-full", "material-icons", "flex-grow-0", "w-full", "self-start"];
                e.each((function () {
                        var e,
                        t,
                        i,
                        n,
                        o,
                        r,
                        a,
                        l = this,
                        h = $(this).attr("class").split(" "),
                        d = void 0 !== $(this).attr("state");
                        switch (h[1]) {
                        case "temperature":
                            a = $(this).find(".tile-primary"),
                            r = parseInt(null !== (e = null == a ? void 0 : a.contents().text()) && void 0 !== e ? e : "", 10),
                            d && $(this).removeClass("temp-" + $(this).attr("state")),
                            $(this).addClass("temp-" + r),
                            $(this).attr("state", r);
                            break;
                        case "thermostat":
                            o = (null !== (t = (a = $(this).find("div").children().first()).attr("class")) && void 0 !== t ? t : "").split(" ").filter((function (e) {
                                    return -1 == s.indexOf(e)
                                })),
                            d && $(this).removeClass($(this).attr("state")),
                            $(this).addClass(o.reverse()[0]),
                            $(this).attr("state", o.reverse()[0]);
                            break;
                        case "bulb-color":
                            o = (null !== (i = (a = $(this).find(".tile-primary>div>i")).attr("class")) && void 0 !== i ? i : "").split(" ").filter((function (e) {
                                    return -1 == s.indexOf(e)
                                })),
                            d && $(this).removeClass($(this).attr("state")),
                            $(this).addClass(o[0].replace("he-bulb_", "")),
                            $(this).attr("state", o[0].replace("he-bulb_", ""));
                            break;
                        case "button":
                            a = $(this).find(".tile-primary"),
                            $(this).click((function () {
                                    $(l).addClass("pressed");
                                    var e = $(l);
                                    setTimeout((function () {
                                            e.removeClass("pressed")
                                        }), 500)
                                }));
                            break;
                        default:
                            o = (null !== (n = (a = $(this).find(".tile-primary")).attr("class")) && void 0 !== n ? n : "").split(" ").filter((function (e) {
                                    return -1 == s.indexOf(e)
                                })),
                            d && $(this).removeClass($(this).attr("state")),
                            $(this).addClass(o[0]),
                            $(this).attr("state", o[0])
                        }
                        a.addClass("state-target")
                    })),
                t && (i = "#app", new MutationObserver((function (e) {
                            e.forEach((function (e) {
                                    var t;
                                    switch (e.type) {
                                    case "characterData":
                                        n($(e.target).closest(".tile"));
                                        break;
                                    default:
                                        if (null !== (t = $(e.target).attr("state")) && void 0 !== t && t)
                                            return;
                                        var i = $(e.target).attr("class");
                                        i && (i.includes("state-target") || i.includes("tile-primary")) && n($(e.target).closest(".tile"))
                                    }
                                }))
                        })).observe($(i)[0], {
                        childList: !0,
                        attributes: !0,
                        subtree: !0,
                        characterData: !0
                    }))
            }
            i.r(t);
            var s = function (e, t, i, n) {
                return new(i || (i = Promise))((function (s, o) {
                        function r(e) {
                            try {
                                l(n.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }
                        function a(e) {
                            try {
                                l(n.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }
                        function l(e) {
                            var t;
                            e.done ? s(e.value) : (t = e.value, t instanceof i ? t : new i((function (e) {
                                        e(t)
                                    }))).then(r, a)
                        }
                        l((n = n.apply(e, t || [])).next())
                    }))
            },
            o = function (e, t) {
                var i,
                n,
                s,
                o,
                r = {
                    label: 0,
                    sent: function () {
                        if (1 & s[0])
                            throw s[1];
                        return s[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw : a(1),
                    return : a(2)
                },
                "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                    return this
                }),
                o;
                function a(o) {
                    return function (a) {
                        return function (o) {
                            if (i)
                                throw new TypeError("Generator is already executing.");
                            for (; r; )
                                try {
                                    if (i = 1, n && (s = 2 & o[0] ? n.return : o[0] ? n.throw || ((s = n.return) && s.call(n), 0) : n.next) && !(s = s.call(n, o[1])).done)
                                        return s;
                                    switch (n = 0, s && (o = [2 & o[0], s.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        s = o;
                                        break;
                                    case 4:
                                        return r.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        r.label++,
                                        n = o[1],
                                        o = [0];
                                        continue;
                                    case 7:
                                        o = r.ops.pop(),
                                        r.trys.pop();
                                        continue;
                                    default:
                                        if (!(s = r.trys, (s = s.length > 0 && s[s.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            r = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!s || o[1] > s[0] && o[1] < s[3])) {
                                            r.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && r.label < s[1]) {
                                            r.label = s[1],
                                            s = o;
                                            break
                                        }
                                        if (s && r.label < s[2]) {
                                            r.label = s[2],
                                            r.ops.push(o);
                                            break
                                        }
                                        s[2] && r.ops.pop(),
                                        r.trys.pop();
                                        continue
                                    }
                                    o = t.call(e, r)
                                } catch (e) {
                                    o = [6, e],
                                    n = 0
                                }
                            finally {
                                i = s = 0
                            }
                            if (5 & o[0])
                                throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }
                        ([o, a])
                    }
                }
            };
            function r(e) {
                return s(this, void 0, void 0, (function () {
                        return o(this, (function (t) {
                                return [2, fetch(e).then((function (e) {
                                            return 404 != e.status
                                        })).catch((function (e) {
                                            return !0
                                        }))]
                            }))
                    }))
            }
            function a(e) {
                var t = new URLSearchParams(window.location.search),
                i = new XMLHttpRequest;
                i.overrideMimeType("application/json"),
                i.open("GET", window.location.pathname + "/layout", !0),
                i.withCredentials = !0,
                i.setRequestHeader("Authorization", "Bearer " + t.get("access_token")),
                i.onreadystatechange = function () {
                    4 == i.readyState && 200 == +i.status && e(i.responseText)
                },
                i.send(null)
            }
            function l(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            function h(e) {
                return function (e) {
                    if (Array.isArray(e))
                        return d(e)
                }
                (e) || function (e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                        return Array.from(e)
                }
                (e) || function (e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return d(e, t);
                    var i = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === i && e.constructor && (i = e.constructor.name);
                    if ("Map" === i || "Set" === i)
                        return Array.from(i);
                    if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
                        return d(e, t)
                }
                (e) || function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                ()
            }
            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, n = new Array(t); i < t; i++)
                    n[i] = e[i];
                return n
            }
            var c,
            u,
            p,
            f,
            g,
            m = (c = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'], u = function () {
                function e(t) {
                    var i = t.targetModal,
                    n = t.triggers,
                    s = void 0 === n ? [] : n,
                    o = t.onShow,
                    r = void 0 === o ? function () {}
                     : o,
                    a = t.onClose,
                    l = void 0 === a ? function () {}
                     : a,
                    d = t.openTrigger,
                    c = void 0 === d ? "data-micromodal-trigger" : d,
                    u = t.closeTrigger,
                    p = void 0 === u ? "data-micromodal-close" : u,
                    f = t.openClass,
                    g = void 0 === f ? "is-open" : f,
                    m = t.disableScroll,
                    v = void 0 !== m && m,
                    y = t.disableFocus,
                    b = void 0 !== y && y,
                    w = t.awaitCloseAnimation,
                    x = void 0 !== w && w,
                    _ = t.awaitOpenAnimation,
                    C = void 0 !== _ && _,
                    E = t.debugMode,
                    k = void 0 !== E && E;
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }
                    (this, e),
                    this.modal = document.getElementById(i),
                    this.config = {
                        debugMode: k,
                        disableScroll: v,
                        openTrigger: c,
                        closeTrigger: p,
                        openClass: g,
                        onShow: r,
                        onClose: l,
                        awaitCloseAnimation: x,
                        awaitOpenAnimation: C,
                        disableFocus: b
                    },
                    s.length > 0 && this.registerTriggers.apply(this, h(s)),
                    this.onClick = this.onClick.bind(this),
                    this.onKeydown = this.onKeydown.bind(this)
                }
                var t,
                i,
                n;
                return t = e,
                (i = [{
                            key: "registerTriggers",
                            value: function () {
                                for (var e = this, t = arguments.length, i = new Array(t), n = 0; n < t; n++)
                                    i[n] = arguments[n];
                                i.filter(Boolean).forEach((function (t) {
                                        t.addEventListener("click", (function (t) {
                                                return e.showModal(t)
                                            }))
                                    }))
                            }
                        }, {
                            key: "showModal",
                            value: function () {
                                var e = this,
                                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                                if (this.activeElement = document.activeElement, this.modal.setAttribute("aria-hidden", "false"), this.modal.classList.add(this.config.openClass), this.scrollBehaviour("disable"), this.addEventListeners(), this.config.awaitOpenAnimation) {
                                    var i = function t() {
                                        e.modal.removeEventListener("animationend", t, !1),
                                        e.setFocusToFirstNode()
                                    };
                                    this.modal.addEventListener("animationend", i, !1)
                                } else
                                    this.setFocusToFirstNode();
                                this.config.onShow(this.modal, this.activeElement, t)
                            }
                        }, {
                            key: "closeModal",
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                t = this.modal;
                                if (this.modal.setAttribute("aria-hidden", "true"), this.removeEventListeners(), this.scrollBehaviour("enable"), this.activeElement && this.activeElement.focus && this.activeElement.focus(), this.config.onClose(this.modal, this.activeElement, e), this.config.awaitCloseAnimation) {
                                    var i = this.config.openClass;
                                    this.modal.addEventListener("animationend", (function e() {
                                            t.classList.remove(i),
                                            t.removeEventListener("animationend", e, !1)
                                        }), !1)
                                } else
                                    t.classList.remove(this.config.openClass)
                            }
                        }, {
                            key: "closeModalById",
                            value: function (e) {
                                this.modal = document.getElementById(e),
                                this.modal && this.closeModal()
                            }
                        }, {
                            key: "scrollBehaviour",
                            value: function (e) {
                                if (this.config.disableScroll) {
                                    var t = document.querySelector("body");
                                    switch (e) {
                                    case "enable":
                                        Object.assign(t.style, {
                                            overflow: ""
                                        });
                                        break;
                                    case "disable":
                                        Object.assign(t.style, {
                                            overflow: "hidden"
                                        })
                                    }
                                }
                            }
                        }, {
                            key: "addEventListeners",
                            value: function () {
                                this.modal.addEventListener("touchstart", this.onClick),
                                this.modal.addEventListener("click", this.onClick),
                                document.addEventListener("keydown", this.onKeydown)
                            }
                        }, {
                            key: "removeEventListeners",
                            value: function () {
                                this.modal.removeEventListener("touchstart", this.onClick),
                                this.modal.removeEventListener("click", this.onClick),
                                document.removeEventListener("keydown", this.onKeydown)
                            }
                        }, {
                            key: "onClick",
                            value: function (e) {
                                e.target.hasAttribute(this.config.closeTrigger) && this.closeModal(e)
                            }
                        }, {
                            key: "onKeydown",
                            value: function (e) {
                                27 === e.keyCode && this.closeModal(e),
                                9 === e.keyCode && this.retainFocus(e)
                            }
                        }, {
                            key: "getFocusableNodes",
                            value: function () {
                                var e = this.modal.querySelectorAll(c);
                                return Array.apply(void 0, h(e))
                            }
                        }, {
                            key: "setFocusToFirstNode",
                            value: function () {
                                var e = this;
                                if (!this.config.disableFocus) {
                                    var t = this.getFocusableNodes();
                                    if (0 !== t.length) {
                                        var i = t.filter((function (t) {
                                                    return !t.hasAttribute(e.config.closeTrigger)
                                                }));
                                        i.length > 0 && i[0].focus(),
                                        0 === i.length && t[0].focus()
                                    }
                                }
                            }
                        }, {
                            key: "retainFocus",
                            value: function (e) {
                                var t = this.getFocusableNodes();
                                if (0 !== t.length)
                                    if (t = t.filter((function (e) {
                                                    return null !== e.offsetParent
                                                })), this.modal.contains(document.activeElement)) {
                                        var i = t.indexOf(document.activeElement);
                                        e.shiftKey && 0 === i && (t[t.length - 1].focus(), e.preventDefault()),
                                        !e.shiftKey && t.length > 0 && i === t.length - 1 && (t[0].focus(), e.preventDefault())
                                    } else
                                        t[0].focus()
                            }
                        }
                    ]) && l(t.prototype, i),
                n && l(t, n),
                e
            }
                (), p = null, f = function (e) {
                if (!document.getElementById(e))
                    return console.warn("MicroModal: â—Seems like you have missed %c'".concat(e, "'"), "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="'.concat(e, '"></div>')), !1
            }, g = function (e, t) {
                if (function (e) {
                    e.length <= 0 && (console.warn("MicroModal: â—Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>'))
                }
                    (e), !t)
                    return !0;
                for (var i in t)
                    f(i);
                return !0
            }, {
                init: function (e) {
                    var t = Object.assign({}, {
                        openTrigger: "data-micromodal-trigger"
                    }, e),
                    i = h(document.querySelectorAll("[".concat(t.openTrigger, "]"))),
                    n = function (e, t) {
                        var i = [];
                        return e.forEach((function (e) {
                                var n = e.attributes[t].value;
                                void 0 === i[n] && (i[n] = []),
                                i[n].push(e)
                            })),
                        i
                    }
                    (i, t.openTrigger);
                    if (!0 !== t.debugMode || !1 !== g(i, n))
                        for (var s in n) {
                            var o = n[s];
                            t.targetModal = s,
                            t.triggers = h(o),
                            p = new u(t)
                        }
                },
                show: function (e, t) {
                    var i = t || {};
                    i.targetModal = e,
                    !0 === i.debugMode && !1 === f(e) || (p && p.removeEventListeners(), (p = new u(i)).showModal())
                },
                close: function (e) {
                    e ? p.closeModalById(e) : p.closeModal()
                }
            });
            window.MicroModal = m;
            var v = m,
            y = i(3);
            function b(e, t, i) {
                void 0 === i && (i = !1),
                $("#grid-message").stop().hide(),
                $("#grid-message").html("<span class='message-" + e + "'>" + t + "</span>"),
                i ? $("#grid-message").stop(!0, !0).fadeIn() : $("#grid-message").stop(!0, !0).fadeIn().delay(5e3).fadeOut()
            }
            function w(e, t) {
                var i = $(e).scrollTop(),
                n = $(e).scrollLeft();
                $(t).scrollTop(i).scrollLeft(n)
            }
            function x(e) {
                var t = $("#" + e);
                t && t.remove()
            }
            var _ = i(0);
            i(9);
            function C(e, t, i) {
                $.fn.onAvailable = function (e, t) {
                    var i;
                    this.length > 0 ? t.call(this) : i = setInterval((function () {
                                $(e).length > 0 && (t.call($(e)), clearInterval(i))
                            }), 50)
                };
                var n,
                s,
                o,
                r = !0,
                a = $("#hidden-json-update");
                if (a.length || (console.log("No hiddenJsonUpdate"), $("body").prepend('<div id="hidden-json-update"></div>'), a = $("#hidden-json-update"), r = !1), console.log("hiddenJsonUpdate", a, Date.now()), r || (n = "popup-hiding-css", s = "div#app .popup-container, #hidden-json-update {display: none}", (o = $("#" + n)).length || ($('<style id="' + n + '" type="text/css"></div>').appendTo($("head")), o = $("#" + n)), o.html(s)), "update" === e && r) {
                    var l = $("#hidden-json-update textarea.exportBox");
                    console.log("eb length", l.length, Date.now()),
                    l.val(i),
                    l[0].dispatchEvent(new Event("input")),
					copyToClipboard(i),
					alert("Updated Layout JSON Copied to Clipboard"),
                    $("#hidden-json-update div.inline-block:contains(Save Layout JSON)").trigger("click"),
                    console.log("Shortcut save used!", l.length, $("#hidden-json-update div.inline-block:contains(Save Layout JSON)").length, Date.now())
                } else
                    $("i:contains(settings)").one("click", (function () {
                            $("div.navLink:contains(Advanced)").onAvailable("div.navLink:contains(Advanced)", (function () {
                                    $("div.navLink:contains(Advanced)").one("click", (function () {
                                            $("textarea.exportBox").onAvailable("textarea.exportBox", (function () {
                                                    var n = $("textarea.exportBox");
                                                    if ("get" === e) {
                                                        var s = n.val();
                                                        $("div.navLink:contains(X)").trigger("click"),
                                                        x("popup-hiding-css"),
                                                        t(s)
                                                    } else {
                                                        var o = $("div#app .popup-container");
                                                        console.log("pc length", o.length),
                                                        a.append(o.clone(!0));
                                                        var r = $("#hidden-json-update .popup-container");
                                                        r.empty(),
                                                        r.append(o.contents()),
                                                        $("#hidden-json-update div.navLink:contains(X)").prependTo(o).trigger("click"),
                                                        console.log("new pc length", r.length);
                                                        var l = !0;
                                                        if ("init" === e) {
                                                            console.log("Initializing the JSON handler...");
                                                            var h = null;
                                                            try {
                                                                h = JSON.parse(n.val())
                                                            } catch (e) {
                                                                console.error("No JSON data found! Something is VERY broken... Please report this issue in the Smartly Injection thread.")
                                                            }
                                                            h && ("customJS" in h && h.customJS == _.customJS || (console.log("customJS needs updating!"), l = !1, h.customJS = _.customJS), "customHTML" in h && h.customHTML == _.customHTML || (console.log("customHTML needs updating!"), l = !1, h.customHTML = _.customHTML), n.val(JSON.stringify(h, null, 2)))
                                                        } else
                                                            l = !1, n.val(i);
                                                        l ? (console.log("Nothing to update"), x("popup-hiding-css")) : (n[0].dispatchEvent(new Event("input")), $("div.inline-block:contains(Save Layout JSON)").trigger("click"), $("div.importError").onAvailable("div.importError", (function () {
                                                                    console.log("Done saving", Date.now()),
                                                                    x("popup-hiding-css")
                                                                })))
                                                    }
                                                }))
                                        })),
                                    $("div.navLink:contains(Advanced)").trigger("click")
                                }))
                        })), $("i:contains(settings)").trigger("click")
            }
            function E(e) {
                void 0 === e && (e = !1);
                var t = [],
                i = 0,
                n = 0,
                s = !1,
                o = !1;
                a((function (r) {
                        var l = JSON.parse(r);
                        i = l.cols,
                        n = l.rows;
                        for (var h = 0, d = l.tiles.map((function (e, t) {
                                        return {
                                            index: t,
                                            tile: e
                                        }
                                    })); h < d.length; h++) {
                            var c = d[h],
                            u = (c.index, c.tile);
                            if ("smartly" != u.template && "javascript" != u.templateExtra) {
                                var p = $("#app #tile-" + u.id);
                                t.push({
                                    x: u.col - 1,
                                    y: u.row - 1,
                                    width: u.colSpan,
                                    height: u.rowSpan,
                                    id: u.id,
                                    innerHTML: p[0].outerHTML
                                }),
                                i < u.col && (i = u.col),
                                n < u.row && (n = u.row)
                            }
                        }
                        var f = l.colWidth,
                        g = l.rowHeight,
                        m = $("div.dashboard div.wrapper").width(),
                        x = $("div.dashboard div.wrapper").height();
                        console.log("originalDashWidth ", m),
                        console.log("originalDashHeight ", x),
                        f || (f =  + ((m - i * (l.gridGap + 1.2)) / (i + 1)).toFixed(3)),
                        g || (g =  + ((x - n * (l.gridGap - .5)) / n).toFixed(3)),
                        console.log("calc w 1", 110),
                        console.log("calc w 2", 236),
                        console.log("calc h 1", 40),
                        console.log("calc h 2", 95);
                        var k = i + 2,
                        S = n + 2,
                        T = f + l.gridGap,
                        N = g + l.gridGap,
                        A = T * k,
                        H = N * S;
                        console.log({
                            width: A + "px",
                            height: H + "px",
                            left: l.gridGap + "px"
                        }),
                        console.log("columnTotalWidth", T),
                        console.log("columnsUsed", k),
                        console.log("colWidth", f),
                        console.log("colWidth - 100", f - 100),
                        console.log("(colWidth - 100) * grid_colums", (f - 100) * i),
                        console.log("rowHeight", g),
                        console.log("rowHeight - 40", g - 40),
                        console.log("(rowHeight - 40) * grid_colums", (g - 40) * i),
                        console.log("inputJSON.colWidth", l.colWidth),
                        console.log("rowTotalHeight", N),
                        console.log("rowsUsed", S),
                        console.log("stack_width", A),
                        console.log("stack_height", H);
                        for (var P = [], D = 0; D < k; D++) {
                            P.push(".grid-stack>.grid-stack-item[data-gs-x='" + D + "'] { left: " + T * D + "px}");
                            var z = D > 0 ? D * l.gridGap : 0;
                            P.push(".grid-stack>.grid-stack-item[data-gs-width='" + (D + 1) + "'] { width: " + (f * (D + 1) + z - 1) + "px}"),
                            P.push(".grid-stack>.grid-stack-item[data-gs-width='" + (D + 1) + "']>.tile { width: " + (f * (D + 1) + z - 1) + "px}")
                        }
                        for (var M = 0; M < S; M++) {
                            P.push(".grid-stack>.grid-stack-item[data-gs-y='" + M + "'] { top: " + N * M + "px}");
                            var R = M > 0 ? M * l.gridGap : 0;
                            P.push(".grid-stack>.grid-stack-item[data-gs-height='" + (M + 1) + "'] { height: " + (g * (M + 1) + R) + "px}")
                        }
                        P.push(".grid-stack { min-height: " + H + "px; /* height: " + H + "px !important; */ width: " + A + "px !important; }"),
                        P.push(".grid-stack-item { min-width: " + (f - 1) + "px !important; }"),
                        P.push(".grid-stack-item { min-height: " + g + "px !important; }"),
                        $("#grid-stack-fixed-width").remove(),
                        $('<style id="grid-stack-fixed-width">').prop("type", "text/css").html(P.join(" \n")).prependTo("body");
                        var L = y.GridStack.init({
                            float: !0,
                            cellHeight: g + l.gridGap,
                            column: k,
                            disableOneColumnMode: !0,
                            margin: l.gridGap,
                            alwaysShowResizeHandle: !0,
                            styleInHead: !0,
                            minRow: S
                        });
                        function O(e, t) {
                            t.forEach((function (e) {
                                    " (x,y)=" + e.x + "," + e.y
                                }))
                        }
                        var j = function () {
                            $("#close-modal-btn").removeClass("button-alert"),
                            $("#loadGrid").removeClass("button-alert"),
                            console.log("saveGrid inputJSON.tiles: ", l.tiles),
                            a((function (e) {
                                    var t = JSON.parse(e);
                                    console.log("saveGrid updated nputJSON.tiles: ", t.tiles);
                                    var i = t.cols,
                                    n = t.rows;
                                    L.engine.nodes.forEach((function (e, s) {
                                            var o = t.tiles.findIndex((function (t) {
                                                        return +t.id == +e.id && "smartly" !== t.template
                                                    }));
                                            null != o && -1 != o ? (t.tiles[o].colSpan = e.width, t.tiles[o].rowSpan = e.height, t.tiles[o].col = e.x + 1, t.tiles[o].row = e.y + 1, e.x + 1 > i && (i = e.x + 1), e.y + 1 > n && (n = e.y + 1)) : console.log("couldn't find index: " + o + " in inputJSON..")
                                        })),
                                    t.customJS = _.customJS,
                                    t.customHTML = _.customHTML,
                                    t.cols = i,
                                    t.rows = n,
                                    C("update", null, JSON.stringify(t, null, 2)),
                                    b("success", "Changes saved!"),
                                    s = !1,
                                    o = !1
                                }))
                        };
                        e || (v.init({
                                debugMode: !1
                            }), $(document).prop("title", l.name), $("#saveGrid").click((function () {
                                    $("#saveGrid").stop(),
                                    j()
                                })), $("#loadGrid").click((function () {
                                    o ? (b("warning", "There are unsaved changes! Click again to discard changes.", !0), $("#saveGrid").stop().fadeOut().fadeIn(), $("#grid-message .message-warning").css({
                                            "background-color": "red"
                                        }), $("#loadGrid").fadeOut().addClass("button-alert").fadeIn(), o = !1) : ($("#close-modal-btn").removeClass("button-alert"), $("#loadGrid").removeClass("button-alert"), $("#loading-overlay").show(), E(!0), s = !1, o = !1)
                                })), L.on("added", (function (e, t) {
                                    O(0, t)
                                })), L.on("removed", (function (e, t) {
                                    O(0, t)
                                })), L.on("change", (function (e, t) {
                                    b("warning", "There are unsaved changes!", !0),
                                    s = !0,
                                    o = !0,
                                    $("#close-modal-btn").removeClass("button-alert"),
                                    $("#loadGrid").removeClass("button-alert"),
                                    O(0, t)
                                })), $("#grid-stack-extra-styling").remove(), $('<style id="grid-stack-extra-styling">').prop("type", "text/css").html(".grid-stack > .grid-stack-item > .ui-resizable-se { right: 7.5px;bottom: 7.5px;}").prependTo("body"), $("#clearGrid").click((function () {
                                    L.removeAll()
                                })), $("i:contains(settings)").parent().parent().prepend($("#open-modal-btns")), $("#open-modal-btns").show(), $("#open-modal-btn a").click((function () {
                                    $("#loading-overlay").show(),
                                    E(!0),
                                    v.show("modal-1"),
                                    w(".dashboard .wrapper.z-0", "#grid-stack-scroller"),
                                    $("#app .wrapper").hide(),
                                    $("#app .header>.justify-end").hide(),
                                    $("#app .header").hide(),
                                    $("head style").last().after('<style id="popup-container-style" type="text/css">.popup-container {visibility: hidden;}</style>'),
                                    $("i:contains(settings)").parent().show()
                                })), $("#close-modal-btn").click((function () {
                                    console.log(s, "changed warning?"),
                                    s ? (b("warning", "There are unsaved changes! Click again to discard changes.", !0), $("#saveGrid").stop().fadeOut().fadeIn(), $("#grid-message .message-warning").css({
                                            "background-color": "red"
                                        }), $("#close-modal-btn").fadeOut().addClass("button-alert").fadeIn(), s = !1) : ($("#close-modal-btn").removeClass("button-alert"), $("#loadGrid").removeClass("button-alert"), $("#grid-message").stop().hide(), $("#app .wrapper").show(), w("#grid-stack-scroller", ".dashboard .wrapper.z-0"), v.close("modal-1"), $("#app .header").show(), $("#app .header>.justify-end").show(), $("#popup-container-style").remove(), s = !1, o = !1)
                                })), $("#close-modal-btn").dblclick((function () {
                                    console.log("prevented a double-click!")
                                })), $(".hdi").removeClass("hdi"), $(".grid-stack").css("touch-action", "none")),
                        function () {
                            console.log("loadGrid inputJSON.tiles: ", l.tiles),
                            L.removeAll();
                            var e = y.GridStack.Utils.sort(t);
                            L.batchUpdate(),
                            e.forEach((function (e) {
                                    L.addWidget('<div><div class="grid-stack-item-content">' + e.innerHTML + "</div></div>", e)
                                })),
                            L.commit(),
                            $("#grid-message").hide(),
                            $("#loading-overlay").hide()
                        }
                        ()
                    }))
            }
            function k() {
                var e = null;
                return $("script#inserted-body-script").each((function (t, i) {
                        e = i
                    })),
                $("<a>").prop("href", $(e).attr("src"))
            }
            var S = function () {
                if (function () {
                    var e = k();
                    return !(!e || window.location.origin === e.prop("origin"))
                }
                    ()) {
                    var e = k();
                    return e.prop("origin") + function (e) {
                        var t = e.substr(e.lastIndexOf("/") + 1) + "$";
                        return e.replace(new RegExp(t), "")
                    }
                    (e.prop("pathname"))
                }
                return window.location.origin + "/local/"
            }
            ();
            i(10),
            i(11);
            $("div.tile:contains(javascript)").hide(),
            console.log("Base URL: ", S),
            function (e, t) {
                s(this, void 0, void 0, (function () {
                        var i,
                        n,
                        s,
                        a,
                        l,
                        h,
                        d;
                        return o(this, (function (o) {
                                switch (o.label) {
                                case 0:
                                    i = document.getElementsByTagName("head")[0],
                                    n = document.getElementById(t + "-css"),
                                    s = null != n,
                                    a = null,
                                    l = 0,
                                    o.label = 1;
                                case 1:
                                    return l < e.length ? (h = l != e.length - 1) ? [4, r(e[l])] : [3, 3] : [3, 5];
                                case 2:
                                    h = o.sent(),
                                    o.label = 3;
                                case 3:
                                    h ? (console.log("Using a tested CSS URL: " + e[l]), a = e[l], l = e.length) : l == e.length - 1 && (console.log("Using the final fallback CSS URL: " + e[l]), a = e[l], l = e.length),
                                    o.label = 4;
                                case 4:
                                    return l++,
                                    [3, 1];
                                case 5:
                                    return s || ((d = document.createElement("link")).setAttribute("id", t + "-css"), d.setAttribute("rel", "stylesheet"), d.setAttribute("type", "text/css"), d.setAttribute("href", a), i.appendChild(d)),
                                    [2]
                                }
                            }))
                    }))
            }
            ([S + "a08eec5a-f464-51de-bd7c-5a9b622676d7-smartly-injected.min.css?1600389632168", S + "smartly-injected.min.css?1600389632168", "https://hubitat.ezeek.us/smartly-base/assets/dist/smartly-injected.min.css?1600389632168"], "smartly-injected"),
            C("init", null, ""),
            E(),
            n($(".tile"), !0),
            $("#he-logo-block").empty(),
            $(".dashName, .dashBack").clone().prependTo("#he-logo-block")
        }
    ]);

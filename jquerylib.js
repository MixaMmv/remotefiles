var datadog = {
    init: function(){
        window.DD_RUM && window.DD_RUM.init({
            applicationId: '0d20aa71-1bf6-4dc5-b0e5-94b5a68284a2',
            clientToken: 'pub1c45a1872967d2f58dc18bd609afafcb',
            site: 'datadoghq.eu',
            service:'mobile-app-js',
            // Specify a version number to identify the deployed version of your application in Datadog 
            // version: '1.0.0',
            sampleRate: 100,
            trackInteractions: true
        });
    },

    add_action: function(name, json_object){
        window.DD_RUM && DD_RUM.addAction(name, json_object);
    },

    add_timing: function(name){
        window.DD_RUM && DD_RUM.addTiming(name);
    }
}

! function() {
    "use strict";
    var t = function() {
        return(t = Object.assign || function(t) {
            for(var e, n = 1, r = arguments.length; n < r; n++)
                for(var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }).apply(this, arguments)
    };

    function e(t, e) {
        var n, r, i, o, a = {
            label: 0,
            sent: function() {
                if(1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function u(o) {
            return function(u) {
                return function(o) {
                    if(n) throw new TypeError("Generator is already executing.");
                    for(; a;) try {
                        if(n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                        switch(r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if(!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    a = 0;
                                    continue
                                }
                                if(3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if(6 === o[0] && a.label < i[1]) {
                                    a.label = i[1], i = o;
                                    break
                                }
                                if(i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(o);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = e.call(t, a)
                    } catch(t) {
                        o = [6, t], r = 0
                    } finally {
                        n = i = 0
                    }
                    if(5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, u])
            }
        }
    }

    function n() {
        for(var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
        var r = Array(t),
            i = 0;
        for(e = 0; e < n; e++)
            for(var o = arguments[e], a = 0, u = o.length; a < u; a++, i++) r[i] = o[a];
        return r
    }
    var r = function(t) {
            return Array.isArray(t)
        },
        i = function(t) {
            return !Array.isArray(t) && "object" == typeof t && null !== t
        };

    function o() {
        for(var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        for(var r = 0, i = e; r < i.length; r++) {
            var o = i[r];
            null != o && (t = s(t, o, u()))
        }
        return t
    }

    function a(t) {
        return s(void 0, t, u())
    }

    function u() {
        if("undefined" != typeof WeakSet) {
            var t = new WeakSet;
            return {
                hasAlreadyBeenSeen: function(e) {
                    var n = t.has(e);
                    return n || t.add(e), n
                }
            }
        }
        var e = [];
        return {
            hasAlreadyBeenSeen: function(t) {
                var n = e.indexOf(t) >= 0;
                return n || e.push(t), n
            }
        }
    }

    function s(t, e, n) {
        if(void 0 === e) return t;
        if(!i(e) && !r(e)) return e;
        if(!n.hasAlreadyBeenSeen(e)) {
            if(i(e) && (void 0 === t || i(t))) {
                var o = t || {};
                for(var a in e) Object.prototype.hasOwnProperty.call(e, a) && (o[a] = s(o[a], e[a], n));
                return o
            }
            if(r(e) && (void 0 === t || r(t))) {
                (o = t || []).length = Math.max(o.length, e.length);
                for(var u = 0; u < e.length; u += 1) o[u] = s(o[u], e[u], n);
                return o
            }
            return e
        }
    }
    var c = "agent",
        f = "console",
        d = "custom",
        l = "network",
        p = "source";

    function v(t, e, n) {
        return t && (void 0 !== t.message || e instanceof Error) ? {
            message: t.message || "Empty message",
            stack: m(t),
            type: t.name
        } : {
            message: n + " " + Ct(e),
            stack: "No stack, consider using an instance of Error",
            type: t && t.name
        }
    }

    function m(t) {
        var e = h(t);
        return t.stack.forEach((function(t) {
            var n = "?" === t.func ? "<anonymous>" : t.func,
                r = t.args && t.args.length > 0 ? "(" + t.args.join(", ") + ")" : "",
                i = t.line ? ":" + t.line : "",
                o = t.line && t.column ? ":" + t.column : "";
            e += "\n  at " + n + r + " @ " + t.url + i + o
        })), e
    }

    function h(t) {
        return(t.name || "Error") + ": " + t.message
    }
    var E, g = !1;

    function y() {
        return g ? S() : O()
    }

    function T(t) {
        return g ? t.timeStamp : I(t.relative)
    }

    function b(t) {
        return g ? t.timeStamp : t.relative
    }

    function C(t) {
        return {
            relative: t,
            timeStamp: g ? R(t) : I(t)
        }
    }

    function R(t) {
        var e = Date.now() - performance.now();
        return e > D() ? Math.round(e + t) : I(t)
    }

    function _(t) {
        return Ot(t) ? Tt(1e6 * t, 0) : t
    }

    function S() {
        return Date.now()
    }

    function O() {
        return performance.now()
    }

    function w() {
        return {
            relative: O(),
            timeStamp: S()
        }
    }

    function A(t, e) {
        return e - t
    }

    function I(t) {
        return Math.round(D() + t)
    }

    function D() {
        return void 0 === E && (E = performance.timing.navigationStart), E
    }
    var k = /[^\u0000-\u007F]/,
        x = function() {
            function t(t, e, n) {
                void 0 === n && (n = !1), this.endpointUrl = t, this.bytesLimit = e, this.withBatchTime = n
            }
            return t.prototype.send = function(t, e) {
                var n = this.withBatchTime ? function(t) {
                    return t + (-1 === t.indexOf("?") ? "?" : "&") + "batch_time=" + (new Date).getTime() + "&m_time=" + I(O())
                }(this.endpointUrl) : this.endpointUrl;
                if(navigator.sendBeacon && e < this.bytesLimit) try {
                    if(navigator.sendBeacon(n, t)) return
                } catch(t) {
                    ! function(t) {
                        L || (L = !0, ct(t))
                    }(t)
                }
                var r = new XMLHttpRequest;
                r.open("POST", n, !0), r.send(t)
            }, t
        }();
    var L = !1;
    var N = function() {
            function t(t, e, n, r, i, o) {
                void 0 === o && (o = bt), this.request = t, this.maxSize = e, this.bytesLimit = n, this.maxMessageSize = r, this.flushTimeout = i, this.beforeUnloadCallback = o, this.pushOnlyBuffer = [], this.upsertBuffer = {}, this.bufferBytesSize = 0, this.bufferMessageCount = 0, this.flushOnVisibilityHidden(), this.flushPeriodically()
            }
            return t.prototype.add = function(t) {
                this.addOrUpdate(t)
            }, t.prototype.upsert = function(t, e) {
                this.addOrUpdate(t, e)
            }, t.prototype.flush = function() {
                if(0 !== this.bufferMessageCount) {
                    var t = n(this.pushOnlyBuffer, (e = this.upsertBuffer, r = [], Object.keys(e).forEach((function(t) {
                        r.push(e[t])
                    })), r));
                    this.request.send(t.join("\n"), this.bufferBytesSize), this.pushOnlyBuffer = [], this.upsertBuffer = {}, this.bufferBytesSize = 0, this.bufferMessageCount = 0
                }
                var e, r
            }, t.prototype.sizeInBytes = function(t) {
                return k.test(t) ? void 0 !== window.TextEncoder ? (new TextEncoder).encode(t).length : new Blob([t]).size : t.length
            }, t.prototype.addOrUpdate = function(t, e) {
                var n = this.process(t),
                    r = n.processedMessage,
                    i = n.messageBytesSize;
                i >= this.maxMessageSize ? console.warn("Discarded a message whose size was bigger than the maximum allowed size " + this.maxMessageSize + "KB.") : (this.hasMessageFor(e) && this.remove(e), this.willReachedBytesLimitWith(i) && this.flush(), this.push(r, i, e), this.isFull() && this.flush())
            }, t.prototype.process = function(t) {
                var e = Ct(t);
                return {
                    processedMessage: e,
                    messageBytesSize: this.sizeInBytes(e)
                }
            }, t.prototype.push = function(t, e, n) {
                this.bufferMessageCount > 0 && (this.bufferBytesSize += 1), void 0 !== n ? this.upsertBuffer[n] = t : this.pushOnlyBuffer.push(t), this.bufferBytesSize += e, this.bufferMessageCount += 1
            }, t.prototype.remove = function(t) {
                var e = this.upsertBuffer[t];
                delete this.upsertBuffer[t];
                var n = this.sizeInBytes(e);
                this.bufferBytesSize -= n, this.bufferMessageCount -= 1, this.bufferMessageCount > 0 && (this.bufferBytesSize -= 1)
            }, t.prototype.hasMessageFor = function(t) {
                return void 0 !== t && void 0 !== this.upsertBuffer[t]
            }, t.prototype.willReachedBytesLimitWith = function(t) {
                return this.bufferBytesSize + t + 1 >= this.bytesLimit
            }, t.prototype.isFull = function() {
                return this.bufferMessageCount === this.maxSize || this.bufferBytesSize >= this.bytesLimit
            }, t.prototype.flushPeriodically = function() {
                var t = this;
                setTimeout(at((function() {
                    t.flush(), t.flushPeriodically()
                })), this.flushTimeout)
            }, t.prototype.flushOnVisibilityHidden = function() {
                var t = this;
                navigator.sendBeacon && (kt(window, "beforeunload", this.beforeUnloadCallback), kt(document, "visibilitychange", (function() {
                    "hidden" === document.visibilityState && t.flush()
                })), kt(window, "beforeunload", (function() {
                    return t.flush()
                })))
            }, t
        }(),
        M = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;

    function U(t) {
        if(B) {
            if(P === t) return;
            K()
        }
        var e = X(t);
        throw B = e, P = t, setTimeout(at((function() {
            P === t && K()
        })), e.incomplete ? 2e3 : 0), t
    }
    var P, B, H, W, V, j = [];

    function q(t) {
        ! function() {
            if(W) return;
            H = window.onerror, window.onerror = at(z), W = !0
        }(),
        function() {
            if(V) return;
            null !== window.onunhandledrejection ? window.onunhandledrejection : void 0, window.onunhandledrejection = at(G), V = !0
        }(), j.push(t)
    }

    function F(t, e, n) {
        var r;
        if(j.forEach((function(i) {
                try {
                    i(t, e, n)
                } catch(t) {
                    r = t
                }
            })), r) throw r
    }

    function z(t, e, n, r, i) {
        if(B) Q(B, e, n), K();
        else if(i) F(X(i), !0, i);
        else {
            var o, a = {
                    url: e,
                    column: r,
                    line: n
                },
                u = t;
            if("[object String]" === {}.toString.call(t)) {
                var s = M.exec(u);
                s && (o = s[1], u = s[2])
            }
            F({
                name: o,
                message: "string" == typeof u ? u : void 0,
                stack: [a]
            }, !0, t)
        }
        return !!H && H.apply(this, arguments)
    }

    function G(t) {
        var e = t.reason || "Empty reason";
        F(X(e), !0, e)
    }

    function K() {
        var t = B,
            e = P;
        B = void 0, P = void 0, F(t, !1, e)
    }
    var $ = "?";

    function X(t, e) {
        var n, r = void 0 === e ? 0 : +e;
        try {
            if(n = function(t) {
                    var e = tt(t, "stacktrace");
                    if(!e) return;
                    for(var n, r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, i = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i, o = e.split("\n"), a = [], u = 0; u < o.length; u += 2) {
                        var s = void 0;
                        r.exec(o[u]) ? s = {
                            args: [],
                            column: void 0,
                            func: (n = r.exec(o[u]))[3],
                            line: +n[1],
                            url: n[2]
                        } : i.exec(o[u]) && (s = {
                            args: (n = i.exec(o[u]))[5] ? n[5].split(",") : [],
                            column: +n[2],
                            func: n[3] || n[4],
                            line: +n[1],
                            url: n[6]
                        }), s && (!s.func && s.line && (s.func = $), s.context = [o[u + 1]], a.push(s))
                    }
                    if(!a.length) return;
                    return {
                        stack: a,
                        message: tt(t, "message"),
                        name: tt(t, "name")
                    }
                }(t)) return n
        } catch(t) {
            if(J) throw t
        }
        try {
            if(n = function(t) {
                    var e = tt(t, "stack");
                    if(!e) return;
                    for(var n, r, i, o, a = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, u = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|capacitor|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, s = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, c = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, f = /\((\S*)(?::(\d+))(?::(\d+))\)/, d = e.split("\n"), l = [], p = 0, v = d.length; p < v; p += 1) {
                        if(a.exec(d[p])) {
                            var m = (i = a.exec(d[p]))[2] && 0 === i[2].indexOf("native");
                            n = i[2] && 0 === i[2].indexOf("eval"), r = f.exec(i[2]), n && r && (i[2] = r[1], i[3] = r[2], i[4] = r[3]), o = {
                                args: m ? [i[2]] : [],
                                column: i[4] ? +i[4] : void 0,
                                func: i[1] || $,
                                line: i[3] ? +i[3] : void 0,
                                url: m ? void 0 : i[2]
                            }
                        } else if(s.exec(d[p])) o = {
                            args: [],
                            column: (i = s.exec(d[p]))[4] ? +i[4] : void 0,
                            func: i[1] || $,
                            line: +i[3],
                            url: i[2]
                        };
                        else {
                            if(!u.exec(d[p])) continue;
                            n = (i = u.exec(d[p]))[3] && i[3].indexOf(" > eval") > -1, r = c.exec(i[3]), n && r ? (i[3] = r[1], i[4] = r[2], i[5] = void 0) : 0 !== p || i[5] || nt(t.columnNumber) || (l[0].column = t.columnNumber + 1), o = {
                                args: i[2] ? i[2].split(",") : [],
                                column: i[5] ? +i[5] : void 0,
                                func: i[1] || $,
                                line: i[4] ? +i[4] : void 0,
                                url: i[3]
                            }
                        }!o.func && o.line && (o.func = $), l.push(o)
                    }
                    if(!l.length) return;
                    return {
                        stack: l,
                        message: tt(t, "message"),
                        name: tt(t, "name")
                    }
                }(t)) return n
        } catch(t) {
            if(J) throw t
        }
        try {
            if(n = function(t) {
                    var e = tt(t, "message");
                    if(!e) return;
                    var n = e.split("\n");
                    if(n.length < 4) return;
                    var r, i = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                        o = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                        a = /^\s*Line (\d+) of function script\s*$/i,
                        u = [],
                        s = window && window.document && window.document.getElementsByTagName("script"),
                        c = [];
                    for(var f in s) et(s, f) && !s[f].src && c.push(s[f]);
                    for(var d = 2; d < n.length; d += 2) {
                        var l = void 0;
                        if(i.exec(n[d])) l = {
                            args: [],
                            column: void 0,
                            func: (r = i.exec(n[d]))[3],
                            line: +r[1],
                            url: r[2]
                        };
                        else if(o.exec(n[d])) l = {
                            args: [],
                            column: void 0,
                            func: (r = o.exec(n[d]))[4],
                            line: +r[1],
                            url: r[3]
                        };
                        else if(a.exec(n[d])) {
                            r = a.exec(n[d]), l = {
                                url: window.location.href.replace(/#.*$/, ""),
                                args: [],
                                column: void 0,
                                func: "",
                                line: +r[1]
                            }
                        }
                        l && (l.func || (l.func = $), l.context = [n[d + 1]], u.push(l))
                    }
                    if(!u.length) return;
                    return {
                        stack: u,
                        message: n[0],
                        name: tt(t, "name")
                    }
                }(t)) return n
        } catch(t) {
            if(J) throw t
        }
        try {
            if(n = Z(t, r + 1)) return n
        } catch(t) {
            if(J) throw t
        }
        return {
            message: tt(t, "message"),
            name: tt(t, "name"),
            stack: []
        }
    }
    var Y, J = !1;

    function Q(t, e, n) {
        var r = {
            url: e,
            line: n ? +n : void 0
        };
        if(r.url && r.line) {
            t.incomplete = !1;
            var i = t.stack;
            if(i.length > 0 && i[0].url === r.url) {
                if(i[0].line === r.line) return !1;
                if(!i[0].line && i[0].func === r.func) return i[0].line = r.line, i[0].context = r.context, !1
            }
            return i.unshift(r), t.partial = !0, !0
        }
        return t.incomplete = !0, !1
    }

    function Z(t, e) {
        for(var n, r, i = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, o = [], a = {}, u = !1, s = Z.caller; s && !u; s = s.caller) s !== X && s !== U && (r = {
            args: [],
            column: void 0,
            func: $,
            line: void 0,
            url: void 0
        }, n = i.exec(s.toString()), s.name ? r.func = s.name : n && (r.func = n[1]), void 0 === r.func && (r.func = n ? n.input.substring(0, n.input.indexOf("{")) : void 0), a[s.toString()] ? u = !0 : a[s.toString()] = !0, o.push(r));
        e && o.splice(0, e);
        var c = {
            stack: o,
            message: tt(t, "message"),
            name: tt(t, "name")
        };
        return Q(c, tt(t, "sourceURL") || tt(t, "fileName"), tt(t, "line") || tt(t, "lineNumber")), c
    }

    function tt(t, e) {
        if("object" == typeof t && t && e in t) {
            var n = t[e];
            return "string" == typeof n ? n : void 0
        }
    }

    function et(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    function nt(t) {
        return void 0 === t
    }! function(t) {
        t.info = "info", t.error = "error"
    }(Y || (Y = {}));
    var rt, it = {
        maxMessagesPerPage: 0,
        sentMessageCount: 0
    };

    function ot(t) {
        if(t.internalMonitoringEndpoint) {
            var e = function(t) {
                var e, n = r(t.internalMonitoringEndpoint);
                void 0 !== t.replica && (e = r(t.replica.internalMonitoringEndpoint));

                function r(e) {
                    return new N(new x(e, t.batchBytesLimit), t.maxBatchSize, t.batchBytesLimit, t.maxMessageSize, t.flushTimeout)
                }

                function i(t) {
                    return o({
                        date: (new Date).getTime(),
                        view: {
                            referrer: document.referrer,
                            url: window.location.href
                        }
                    }, void 0 !== rt ? rt() : {}, t)
                }
                return {
                    add: function(t) {
                        var r = i(t);
                        n.add(r), e && e.add(r)
                    }
                }
            }(t);
            ! function(t) {
                for(var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                e.forEach((function(e) {
                    for(var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                }))
            }(it, {
                batch: e,
                maxMessagesPerPage: t.maxInternalMonitoringMessagesPerPage,
                sentMessageCount: 0
            })
        }
        return {
            setExternalContextProvider: function(t) {
                rt = t
            }
        }
    }

    function at(t) {
        return function() {
            return ut(t, this, arguments)
        }
    }

    function ut(t, e, n) {
        try {
            return t.apply(e, n)
        } catch(t) {
            lt(t);
            try {
                ct(t)
            } catch(t) {
                lt(t)
            }
        }
    }

    function st(e, n) {
        ! function(t) {
            it.debugMode && console.log("[MONITORING MESSAGE]", t)
        }(e), ft(t(t({
            message: e
        }, n), {
            status: Y.info
        }))
    }

    function ct(e) {
        ft(t(t({}, function(t) {
            if(t instanceof Error) {
                var e = X(t);
                return {
                    error: {
                        kind: e.name,
                        stack: m(e)
                    },
                    message: e.message
                }
            }
            return {
                error: {
                    stack: "Not an instance of error"
                },
                message: "Uncaught " + Ct(t)
            }
        }(e)), {
            status: Y.error
        }))
    }

    function ft(t) {
        it.batch && it.sentMessageCount < it.maxMessagesPerPage && (it.sentMessageCount += 1, it.batch.add(t))
    }

    function dt(t) {
        it.debugMode = t
    }

    function lt(t) {
        it.debugMode && console.warn("[INTERNAL ERROR]", t)
    }
    var pt, vt, mt = 1e3,
        ht = 6e4;

    function Et(t, e, n) {
        var r, i, o = !n || void 0 === n.leading || n.leading,
            a = !n || void 0 === n.trailing || n.trailing,
            u = !1;
        return {
            throttled: function() {
                for(var n = [], s = 0; s < arguments.length; s++) n[s] = arguments[s];
                u ? r = n : (o ? t.apply(void 0, n) : r = n, u = !0, i = setTimeout((function() {
                    a && r && t.apply(void 0, r), u = !1, r = void 0
                }), e))
            },
            cancel: function() {
                clearTimeout(i), u = !1, r = void 0
            }
        }
    }

    function gt(t) {
        return t ? (parseInt(t, 10) ^ 16 * Math.random() >> parseInt(t, 10) / 4).toString(16) : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, gt)
    }

    function yt(t) {
        return 0 !== t && 100 * Math.random() <= t
    }

    function Tt(t, e) {
        return +t.toFixed(e)
    }

    function bt() {}

    function Ct(t, e, n) {
        if(null == t) return JSON.stringify(t);
        var r = [!1, void 0];
        Rt(t) && (r = [!0, t.toJSON], delete t.toJSON);
        var i, o, a = [!1, void 0];
        "object" == typeof t && Rt(i = Object.getPrototypeOf(t)) && (a = [!0, i.toJSON], delete i.toJSON);
        try {
            o = JSON.stringify(t, e, n)
        } catch(t) {
            o = "<error: unable to serialize object>"
        } finally {
            r[0] && (t.toJSON = r[1]), a[0] && (i.toJSON = a[1])
        }
        return o
    }

    function Rt(t) {
        return "object" == typeof t && null !== t && t.hasOwnProperty("toJSON")
    }

    function _t(t, e) {
        return -1 !== t.indexOf(e)
    }

    function St(t) {
        return Ot(t) && t >= 0 && t <= 100
    }

    function Ot(t) {
        return "number" == typeof t
    }

    function wt(t) {
        return Object.keys(t).map((function(e) {
            return [e, t[e]]
        }))
    }

    function At(t) {
        return 0 === Object.keys(t).length
    }

    function It(t) {
        if(t.origin) return t.origin;
        var e = t.host.replace(/(:80|:443)$/, "");
        return t.protocol + "//" + e
    }

    function Dt(t, e) {
        var n = new RegExp("(?:^|;)\\s*" + e + "\\s*=\\s*([^;]+)").exec(t);
        return n ? n[1] : void 0
    }

    function kt(t, e, n, r) {
        return xt(t, [e], n, r)
    }

    function xt(t, e, n, r) {
        var i = void 0 === r ? {} : r,
            o = i.once,
            a = i.capture,
            u = i.passive,
            s = at(o ? function(t) {
                f(), n(t)
            } : n),
            c = u ? {
                capture: a,
                passive: u
            } : a;
        e.forEach((function(e) {
            return t.addEventListener(e, s, c)
        }));
        var f = function() {
            return e.forEach((function(e) {
                return t.removeEventListener(e, s, c)
            }))
        };
        return {
            stop: f
        }
    }

    function Lt(t, e) {
            document.readyState === t || "complete" === document.readyState ? e() : kt(window, "complete" === t ? "load" : "DOMContentLoaded", e, {
                once: !0
            })
        }! function(t) {
            t.DOCUMENT = "document", t.XHR = "xhr", t.BEACON = "beacon", t.FETCH = "fetch", t.CSS = "css", t.JS = "js", t.IMAGE = "image", t.FONT = "font", t.MEDIA = "media", t.OTHER = "other"
        }(pt || (pt = {})),
        function(t) {
            t.FETCH = "fetch", t.XHR = "xhr"
        }(vt || (vt = {}));
    var Nt, Mt;

    function Ut(t, e, n, r) {
        var i = new Date;
        i.setTime(i.getTime() + n);
        var o = "expires=" + i.toUTCString(),
            a = r && r.crossSite ? "none" : "strict",
            u = r && r.domain ? ";domain=" + r.domain : "",
            s = r && r.secure ? ";secure" : "";
        document.cookie = t + "=" + e + ";" + o + ";path=/;samesite=" + a + u + s
    }

    function Pt(t) {
        return Dt(document.cookie, t)
    }

    function Bt(t, e) {
        return function() {
            for(var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            try {
                return t.apply(void 0, n)
            } catch(t) {
                console.error(e, t)
            }
        }
    }
    var Ht = {
            alternate: {
                logs: "logs",
                rum: "rum",
                sessionReplay: "session-replay",
                trace: "trace"
            },
            classic: {
                logs: "browser",
                rum: "rum",
                sessionReplay: void 0,
                trace: "public-trace"
            }
        },
        Wt = "eu",
        Vt = "us",
        jt = ((Mt = {})[Wt] = "datadoghq.eu", Mt[Vt] = "datadoghq.com", Mt),
        qt = [jt[Vt], jt[Wt]];

    function Ft(e, n) {
        var r = {
                buildMode: n.buildMode,
                clientToken: e.clientToken,
                env: e.env,
                proxyHost: e.proxyHost,
                sdkVersion: n.sdkVersion,
                service: e.service,
                site: e.site || jt[e.datacenter || n.datacenter],
                version: e.version
            },
            i = function(t, e) {
                return !e.useAlternateIntakeDomains && _t(qt, t) ? "classic" : "alternate"
            }(r.site, e),
            o = function(t, e, n) {
                if(e.proxyHost) return ["https://" + e.proxyHost + "/v1/input/"];
                var r = [e.site];
                e.buildMode === Kt.STAGING && n && r.push(jt[Vt]);
                for(var i = [], o = Object.keys(Ht[t]), a = 0, u = r; a < u.length; a++)
                    for(var s = u[a], c = 0, f = o; c < f.length; c++) {
                        var d = f[c];
                        i.push("https://" + zt(t, d, s) + "/v1/input/")
                    }
                return i
            }(i, r, void 0 !== e.replica),
            a = {
                isIntakeUrl: function(t) {
                    return o.some((function(e) {
                        return 0 === t.indexOf(e)
                    }))
                },
                logsEndpoint: Gt(i, "logs", r),
                rumEndpoint: Gt(i, "rum", r),
                sessionReplayEndpoint: Gt(i, "sessionReplay", r),
                traceEndpoint: Gt(i, "trace", r)
            };
        if(e.internalMonitoringApiKey && (a.internalMonitoringEndpoint = Gt(i, "logs", r, "browser-agent-internal-monitoring")), r.buildMode === Kt.E2E_TEST && (a.internalMonitoringEndpoint = "<<< E2E INTERNAL MONITORING ENDPOINT >>>", a.logsEndpoint = "<<< E2E LOGS ENDPOINT >>>", a.rumEndpoint = "<<< E2E RUM ENDPOINT >>>", a.sessionReplayEndpoint = "<<< E2E SESSION REPLAY ENDPOINT >>>"), r.buildMode === Kt.STAGING && void 0 !== e.replica) {
            var u = t(t({}, r), {
                applicationId: e.replica.applicationId,
                clientToken: e.replica.clientToken,
                site: jt[Vt]
            });
            a.replica = {
                applicationId: e.replica.applicationId,
                internalMonitoringEndpoint: Gt(i, "logs", u, "browser-agent-internal-monitoring"),
                logsEndpoint: Gt(i, "logs", u),
                rumEndpoint: Gt(i, "rum", u)
            }
        }
        return a
    }

    function zt(t, e, n) {
        return "classic" === t && function(t, e) {
            var n = Ht.classic[t];
            return n && n + "-http-intake.logs." + e
        }(e, n) || function(t, e) {
            var n = Ht.alternate[t],
                r = e.split("."),
                i = r.pop(),
                o = r.join("-") + "." + i;
            return n + ".browser-intake-" + o
        }(e, n)
    }

    function Gt(t, e, n, r) {
        var i = "sdk_version:" + n.sdkVersion + (n.env ? ",env:" + n.env : "") + (n.service ? ",service:" + n.service : "") + (n.version ? ",version:" + n.version : ""),
            o = zt(t, e, n.site),
            a = n.proxyHost ? n.proxyHost : o,
            u = (n.proxyHost ? "ddhost=" + o + "&" : "") + "ddsource=" + (r || "browser") + "&ddtags=" + encodeURIComponent(i);
        return "https://" + a + "/v1/input/" + n.clientToken + "?" + u
    }
    var Kt, $t = {
        allowedTracingOrigins: [],
        maxErrorsByMinute: 3e3,
        maxInternalMonitoringMessagesPerPage: 15,
        resourceSampleRate: 100,
        sampleRate: 100,
        silentMultipleInit: !1,
        trackInteractions: !1,
        requestErrorResponseLengthLimit: 32768,
        flushTimeout: 3e4,
        maxBatchSize: 50,
        maxMessageSize: 262144,
        batchBytesLimit: 16384
    };

    function Xt(t) {
        var e = {};
        return e.secure = function(t) {
            return !!t.useSecureSessionCookie || !!t.useCrossSiteSessionCookie
        }(t), e.crossSite = !!t.useCrossSiteSessionCookie, t.trackSessionAcrossSubdomains && (e.domain = function() {
            if(void 0 === Nt) {
                for(var t = "dd_site_test_" + gt(), e = window.location.hostname.split("."), n = e.pop(); e.length && !Pt(t);) n = e.pop() + "." + n, Ut(t, "test", mt, {
                    domain: n
                });
                Nt = n
            }
            return Nt
        }()), e
    }

    function Yt(e, n) {
        var r = function(e, n) {
            var r = Array.isArray(e.enableExperimentalFeatures) ? e.enableExperimentalFeatures : [],
                i = t(t({
                    beforeSend: e.beforeSend && Bt(e.beforeSend, "beforeSend threw an error:"),
                    cookieOptions: Xt(e),
                    isEnabled: function(t) {
                        return _t(r, t)
                    },
                    service: e.service
                }, Ft(e, n)), $t);
            return "allowedTracingOrigins" in e && (i.allowedTracingOrigins = e.allowedTracingOrigins), "sampleRate" in e && (i.sampleRate = e.sampleRate), "resourceSampleRate" in e && (i.resourceSampleRate = e.resourceSampleRate), "trackInteractions" in e && (i.trackInteractions = !!e.trackInteractions), i
        }(e, n);
        return r.isEnabled("system-clock") && (g = !0), {
            configuration: r,
            internalMonitoring: ot(r)
        }
    }

    function Jt(t) {
        return !! function(t) {
            if(void 0 === document.cookie || null === document.cookie) return !1;
            try {
                var e = "dd_cookie_test_" + gt(),
                    n = "test";
                return Ut(e, n, mt, t), Pt(e) === n
            } catch(t) {
                return console.error(t), !1
            }
        }(t) || (console.warn("Cookies are not authorized, we will not send any data."), !1)
    }

    function Qt() {
        return true;
    }! function(t) {
        t.RELEASE = "release", t.STAGING = "staging", t.E2E_TEST = "e2e-test"
    }(Kt || (Kt = {}));
    var Zt, te, ee, ne, re = function() {
        function t(t) {
            void 0 === t && (t = 1e4), this.limit = t, this.buffer = []
        }
        return t.prototype.add = function(t) {
            this.buffer.push(t) > this.limit && this.buffer.splice(0, 1)
        }, t.prototype.drain = function(t) {
            this.buffer.forEach((function(e) {
                return t(e)
            })), this.buffer.length = 0
        }, t
    }();
    ! function(t) {
        t.ACTION = "action", t.ERROR = "error", t.LONG_TASK = "long_task", t.VIEW = "view", t.RESOURCE = "resource"
    }(Zt || (Zt = {})),
    function(t) {
        t.INITIAL_LOAD = "initial_load", t.ROUTE_CHANGE = "route_change"
    }(te || (te = {})),
    function(t) {
        t.CLICK = "click", t.CUSTOM = "custom"
    }(ee || (ee = {})),
    function(t) {
        t[t.PERFORMANCE_ENTRY_COLLECTED = 0] = "PERFORMANCE_ENTRY_COLLECTED", t[t.AUTO_ACTION_CREATED = 1] = "AUTO_ACTION_CREATED", t[t.AUTO_ACTION_COMPLETED = 2] = "AUTO_ACTION_COMPLETED", t[t.AUTO_ACTION_DISCARDED = 3] = "AUTO_ACTION_DISCARDED", t[t.VIEW_CREATED = 4] = "VIEW_CREATED", t[t.VIEW_UPDATED = 5] = "VIEW_UPDATED", t[t.VIEW_ENDED = 6] = "VIEW_ENDED", t[t.REQUEST_STARTED = 7] = "REQUEST_STARTED", t[t.REQUEST_COMPLETED = 8] = "REQUEST_COMPLETED", t[t.SESSION_RENEWED = 9] = "SESSION_RENEWED", t[t.DOM_MUTATED = 10] = "DOM_MUTATED", t[t.BEFORE_UNLOAD = 11] = "BEFORE_UNLOAD", t[t.RAW_RUM_EVENT_COLLECTED = 12] = "RAW_RUM_EVENT_COLLECTED", t[t.RUM_EVENT_COLLECTED = 13] = "RUM_EVENT_COLLECTED", t[t.RECORD_STARTED = 14] = "RECORD_STARTED", t[t.RECORD_STOPPED = 15] = "RECORD_STOPPED"
    }(ne || (ne = {}));
    var ie, oe = function() {
        function t() {
            this.callbacks = {}
        }
        return t.prototype.notify = function(t, e) {
            var n = this.callbacks[t];
            n && n.forEach((function(t) {
                return t(e)
            }))
        }, t.prototype.subscribe = function(t, e) {
            var n = this;
            return this.callbacks[t] || (this.callbacks[t] = []), this.callbacks[t].push(e), {
                unsubscribe: function() {
                    n.callbacks[t] = n.callbacks[t].filter((function(t) {
                        return e !== t
                    }))
                }
            }
        }, t
    }();

    function ae(t) {
        var e, n = function() {
            var t, e = window;
            if(e.Zone) {
                var n = e.Zone.__symbol__("MutationObserver");
                t = e[n]
            }
            return t || (t = e.MutationObserver), t
        }();
        return n && (e = new n(at((function() {
            t.notify(ne.DOM_MUTATED)
        })))).observe(document.documentElement, {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0
        }), {
            stop: function() {
                e && e.disconnect()
            }
        }
    }

    function ue(t) {
        return ce(t, It(window.location)).href
    }

    function se(t) {
        return It(ce(t))
    }

    function ce(t, e) {
        if(function() {
                if(void 0 !== ie) return ie;
                try {
                    var t = new URL("http://test/path");
                    return ie = "http://test/path" === t.href
                } catch(t) {
                    ie = !1
                }
                return ie
            }()) return void 0 !== e ? new URL(t, e) : new URL(t);
        if(void 0 === e && !/:/.test(t)) throw new Error("Invalid URL: '" + t + "'");
        var n = document,
            r = n.createElement("a");
        if(void 0 !== e) {
            var i = (n = document.implementation.createHTMLDocument("")).createElement("base");
            i.href = e, n.head.appendChild(i), n.body.appendChild(r)
        }
        return r.href = t, r
    }
    var fe = "initial_document",
        de = [
            [pt.DOCUMENT, function(t) {
                return fe === t
            }],
            [pt.XHR, function(t) {
                return "xmlhttprequest" === t
            }],
            [pt.FETCH, function(t) {
                return "fetch" === t
            }],
            [pt.BEACON, function(t) {
                return "beacon" === t
            }],
            [pt.CSS, function(t, e) {
                return /\.css$/i.test(e)
            }],
            [pt.JS, function(t, e) {
                return /\.js$/i.test(e)
            }],
            [pt.IMAGE, function(t, e) {
                return _t(["image", "img", "icon"], t) || null !== /\.(gif|jpg|jpeg|tiff|png|svg|ico)$/i.exec(e)
            }],
            [pt.FONT, function(t, e) {
                return null !== /\.(woff|eot|woff2|ttf)$/i.exec(e)
            }],
            [pt.MEDIA, function(t, e) {
                return _t(["audio", "video"], t) || null !== /\.(mp3|mp4)$/i.exec(e)
            }]
        ];

    function le(t) {
        var e = t.name;
        if(! function(t) {
                try {
                    return !!ce(t)
                } catch(t) {
                    return !1
                }
            }(e)) return st('Failed to construct URL for "' + t.name + '"'), pt.OTHER;
        for(var n = function(t) {
                var e = ce(t).pathname;
                return "/" === e[0] ? e : "/" + e
            }(e), r = 0, i = de; r < i.length; r++) {
            var o = i[r],
                a = o[0];
            if((0, o[1])(t.initiatorType, n)) return a
        }
        return pt.OTHER
    }

    function pe() {
        for(var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for(var n = 1; n < t.length; n += 1)
            if(t[n - 1] > t[n]) return !1;
        return !0
    }

    function ve(t) {
        var e = me(t);
        if(e) {
            var n = e.startTime,
                r = e.fetchStart,
                i = e.redirectStart,
                o = e.redirectEnd,
                a = e.domainLookupStart,
                u = e.domainLookupEnd,
                s = e.connectStart,
                c = e.secureConnectionStart,
                f = e.connectEnd,
                d = e.requestStart,
                l = e.responseStart,
                p = {
                    download: Ee(n, l, e.responseEnd),
                    first_byte: Ee(n, d, l)
                };
            return f !== r && (p.connect = Ee(n, s, f), pe(s, c, f) && (p.ssl = Ee(n, c, f))), u !== r && (p.dns = Ee(n, a, u)), he(t) && (p.redirect = Ee(n, i, o)), p
        }
    }

    function me(e) {
        if(pe(e.startTime, e.fetchStart, e.domainLookupStart, e.domainLookupEnd, e.connectStart, e.connectEnd, e.requestStart, e.responseStart, e.responseEnd)) {
            if(!he(e)) return e;
            var n = e.redirectStart,
                r = e.redirectEnd;
            if(n < e.startTime && (n = e.startTime), r < e.startTime && (r = e.fetchStart), pe(e.startTime, n, r, e.fetchStart)) return t(t({}, e), {
                redirectEnd: r,
                redirectStart: n
            })
        }
    }

    function he(t) {
        return t.fetchStart !== t.startTime
    }

    function Ee(t, e, n) {
        return {
            duration: _(A(e, n)),
            start: _(A(t, e))
        }
    }

    function ge(t) {
        if(t.startTime < t.responseStart) return t.decodedBodySize
    }

    function ye(t, e) {
        return e && !t.isIntakeUrl(e)
    }
    var Te;

    function be(t) {
        var e = function(t) {
            var e = t.querySelector("meta[name=dd-trace-id]"),
                n = t.querySelector("meta[name=dd-trace-time]");
            return Ce(e && e.content, n && n.content)
        }(t) || function(t) {
            var e = function(t) {
                for(var e = 0; e < t.childNodes.length; e += 1) {
                    if(n = Re(t.childNodes[e])) return n
                }
                if(t.body)
                    for(e = t.body.childNodes.length - 1; e >= 0; e -= 1) {
                        var n, r = t.body.childNodes[e];
                        if(n = Re(r)) return n;
                        if(!_e(r)) break
                    }
            }(t);
            if(!e) return;
            return Ce(Dt(e, "trace-id"), Dt(e, "trace-time"))
        }(t);
        if(e && !(e.traceTime <= Date.now() - 12e4)) return e.traceId
    }

    function Ce(t, e) {
        var n = e && Number(e);
        if(t && n) return {
            traceId: t,
            traceTime: n
        }
    }

    function Re(t) {
        if(t && function(t) {
                return "#comment" === t.nodeName
            }(t)) {
            var e = /^\s*DATADOG;(.*?)\s*$/.exec(t.data);
            if(e) return e[1]
        }
    }

    function _e(t) {
        return "#text" === t.nodeName
    }

    function Se() {
        return void 0 !== window.performance && "getEntries" in performance
    }

    function Oe(t) {
        return window.PerformanceObserver && void 0 !== PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes(t)
    }

    function we(e, n) {
        var r;
        if(r = function(t) {
                De(e, n, t)
            }, Lt("interactive", (function() {
                var e, n = {
                    entryType: "resource",
                    initiatorType: fe,
                    traceId: be(document)
                };
                if(Oe("navigation") && performance.getEntriesByType("navigation").length > 0) {
                    var i = performance.getEntriesByType("navigation")[0];
                    e = t(t({}, i.toJSON()), n)
                } else {
                    var o = Ae();
                    e = t(t(t({}, o), {
                        decodedBodySize: 0,
                        duration: o.responseEnd,
                        name: window.location.href,
                        startTime: 0
                    }), n)
                }
                r(e)
            })), Se() && Ie(e, n, performance.getEntries()), window.PerformanceObserver) {
            new PerformanceObserver(at((function(t) {
                return Ie(e, n, t.getEntries())
            }))).observe({
                entryTypes: ["resource", "navigation", "longtask", "paint", "largest-contentful-paint", "first-input", "layout-shift"]
            }), Se() && "addEventListener" in performance && performance.addEventListener("resourcetimingbufferfull", (function() {
                performance.clearResourceTimings()
            }))
        }
        Oe("navigation") || function(e) {
            function n() {
                e(t(t({}, Ae()), {
                    entryType: "navigation"
                }))
            }
            Lt("complete", (function() {
                setTimeout(at(n))
            }))
        }((function(t) {
            De(e, n, t)
        })), Oe("first-input") || function(t) {
            var e = Date.now(),
                n = !1,
                r = xt(window, ["click", "mousedown", "keydown", "touchstart", "pointerdown"], (function(t) {
                    if(t.cancelable) {
                        var e = {
                            entryType: "first-input",
                            processingStart: O(),
                            startTime: t.timeStamp
                        };
                        "pointerdown" === t.type ? i(e) : o(e)
                    }
                }), {
                    passive: !0,
                    capture: !0
                }).stop;

            function i(t) {
                xt(window, ["pointerup", "pointercancel"], (function(e) {
                    "pointerup" === e.type && o(t)
                }), {
                    once: !0
                })
            }

            function o(i) {
                if(!n) {
                    n = !0, r();
                    var o = i.processingStart - i.startTime;
                    o >= 0 && o < Date.now() - e && t(i)
                }
            }
        }((function(t) {
            De(e, n, t)
        }))
    }

    function Ae() {
        var t = {},
            e = performance.timing;
        for(var n in e)
            if(Ot(e[n])) {
                var r = n,
                    i = e[r];
                t[r] = 0 === i ? 0 : i - D()
            }
        return t
    }

    function Ie(t, e, n) {
        n.forEach((function(n) {
            "resource" !== n.entryType && "navigation" !== n.entryType && "paint" !== n.entryType && "longtask" !== n.entryType && "largest-contentful-paint" !== n.entryType && "first-input" !== n.entryType && "layout-shift" !== n.entryType || De(t, e, n)
        }))
    }

    function De(t, e, n) {
        (function(t) {
            return "navigation" === t.entryType && t.loadEventEnd <= 0
        })(n) || function(t, e) {
            return "resource" === e.entryType && !ye(t, e.name)
        }(e, n) || t.notify(ne.PERFORMANCE_ENTRY_COLLECTED, n)
    }

    function ke(t, e, n) {
        var r = a(t),
            i = n(r);
        return e.forEach((function(e) {
            var n = xe(t, e),
                i = xe(r, e);
            "string" == typeof n && "string" == typeof i && function(t, e, n) {
                for(var r = t, i = e.split("."), o = 0; o < i.length; o += 1) {
                    var a = i[o];
                    if(!Le(r, a)) return;
                    o !== i.length - 1 ? r = r[a] : r[a] = n
                }
            }(t, e, i)
        })), i
    }

    function xe(t, e) {
        for(var n = t, r = 0, i = e.split("."); r < i.length; r++) {
            var o = i[r];
            if(!Le(n, o)) return;
            n = n[o]
        }
        return n
    }

    function Le(t, e) {
        return "object" == typeof t && null !== t && e in t
    }! function(t) {
        t.SYNTHETICS = "synthetics", t.USER = "user"
    }(Te || (Te = {}));
    var Ne = ["view.url", "view.referrer", "action.target.name", "error.message", "error.stack", "error.resource.url", "resource.url"];

    function Me(t, e, n, r, i, a) {
        n.subscribe(ne.RAW_RUM_EVENT_COLLECTED, (function(u) {
            var s, c = u.startTime,
                f = u.rawRumEvent,
                d = u.savedCommonContext,
                l = u.customerContext,
                p = i.findView(c);
            if(r.isTracked() && p && p.session.id === r.getId()) {
                var v = i.findAction(c),
                    m = d || a(),
                    h = {
                        _dd: {
                            format_version: 2
                        },
                        application: {
                            id: t
                        },
                        date: S(),
                        service: e.service,
                        session: {
                            type: void 0 === window._DATADOG_SYNTHETICS_BROWSER ? Te.USER : Te.SYNTHETICS
                        }
                    },
                    E = (s = f, -1 !== [Zt.ERROR, Zt.RESOURCE, Zt.LONG_TASK].indexOf(s.type) ? o(h, p, v, f) : o(h, p, f)),
                    g = o(m.context, l);
                At(g) || (E.context = g), "has_replay" in E.session || (E.session.has_replay = m.hasReplay), At(m.user) || (E.usr = m.user),
                    function(t, e) {
                        if(e) {
                            var n = ke(t, Ne, e);
                            if(!1 === n && t.type !== Zt.VIEW) return !1;
                            !1 === n && console.warn("Can't dismiss view events using beforeSend!")
                        }
                        return !0
                    }(E, e.beforeSend) && n.notify(ne.RUM_EVENT_COLLECTED, E)
            }
        }))
    }
    var Ue = function() {
        function t() {
            this.observers = []
        }
        return t.prototype.subscribe = function(t) {
            this.observers.push(t)
        }, t.prototype.notify = function(t) {
            this.observers.forEach((function(e) {
                return e(t)
            }))
        }, t
    }();
    var Pe = 9e5,
        Be = 144e5;

    function He(t, e, n) {
        var r = function(t, e) {
            var n, r, i = !1,
                o = function() {
                    i = !0, clearTimeout(n), n = setTimeout((function() {
                        i = !1
                    }), 1e3)
                };
            return {
                get: function() {
                    return i || (r = Pt(t), o()), r
                },
                set: function(n, i) {
                    Ut(t, n, i, e), r = n, o()
                }
            }
        }("_dd_s", t);
        ! function(t) {
            var e = t.get(),
                n = Pt("_dd"),
                r = Pt("_dd_r"),
                i = Pt("_dd_l");
            if(!e) {
                var o = {};
                n && (o.id = n), i && /^[01]$/.test(i) && (o.logs = i), r && /^[012]$/.test(r) && (o.rum = r), qe(o, t)
            }
        }(r);
        var i = new Ue,
            o = je(r).id,
            a = Et(at((function() {
                var t = je(r),
                    a = n(t[e]),
                    u = a.trackingType,
                    s = a.isTracked;
                t[e] = u, s && !t.id && (t.id = gt(), t.created = String(Date.now())), qe(t, r), s && o !== t.id && (o = t.id, i.notify())
            })), 1e3).throttled;
        return a(),
            function(t) {
                var e = xt(window, ["click", "touchstart", "keydown", "scroll"], t, {
                    capture: !0,
                    passive: !0
                }).stop;
                ze.push(e)
            }(a),
            function(t) {
                var e = at((function() {
                        "visible" === document.visibilityState && t()
                    })),
                    n = kt(document, "visibilitychange", e).stop;
                ze.push(n);
                var r = setInterval(e, 6e4);
                ze.push((function() {
                    clearInterval(r)
                }))
            }((function() {
                qe(je(r), r)
            })), {
                getId: function() {
                    return je(r).id
                },
                getTrackingType: function() {
                    return je(r)[e]
                },
                renewObservable: i
            }
    }
    var We = /^([a-z]+)=([a-z0-9-]+)$/,
        Ve = "&";

    function je(t) {
        var e = function(t) {
            var e = t.get(),
                n = {};
            (function(t) {
                return void 0 !== t && (-1 !== t.indexOf("&") || We.test(t))
            })(e) && e.split(Ve).forEach((function(t) {
                var e = We.exec(t);
                if(null !== e) {
                    var r = e[1],
                        i = e[2];
                    n[r] = i
                }
            }));
            return n
        }(t);
        return function(t) {
            return(void 0 === t.created || Date.now() - Number(t.created) < Be) && (void 0 === t.expire || Date.now() < Number(t.expire))
        }(e) ? e : (Fe(t), {})
    }

    function qe(t, e) {
        if(At(t)) Fe(e);
        else {
            t.expire = String(Date.now() + Pe);
            var n = wt(t).map((function(t) {
                return t[0] + "=" + t[1]
            })).join(Ve);
            e.set(n, Pe)
        }
    }

    function Fe(t) {
        t.set("", 0)
    }
    var ze = [];
    var Ge;
    var Ke, $e, Xe, Ye, Je, Qe = [],
        Ze = [];

    function tn() {
        return Ge || (Ke = XMLHttpRequest.prototype.open, $e = XMLHttpRequest.prototype.send, Xe = XMLHttpRequest.prototype.abort, XMLHttpRequest.prototype.open = function(t, e) {
            var n = this;
            return ut((function() {
                n._datadog_xhr = {
                    method: t,
                    url: ue(e)
                }
            })), Ke.apply(this, arguments)
        }, XMLHttpRequest.prototype.send = function() {
            var e = this;
            return ut((function() {
                if(e._datadog_xhr) {
                    var n = e._datadog_xhr;
                    n.startTime = O(), n.startClocks = w(), n.isAborted = !1;
                    var r = e.onreadystatechange;
                    e.onreadystatechange = function() {
                        this.readyState === XMLHttpRequest.DONE && ut(o), r && r.apply(this, arguments)
                    };
                    var i = !1,
                        o = function() {
                            if(!i) {
                                i = !0;
                                var r = t(t({}, n), {
                                    duration: A(b(n.startClocks), y()),
                                    response: e.response,
                                    status: e.status
                                });
                                Ze.forEach((function(t) {
                                    return t(r)
                                }))
                            }
                        };
                    e.addEventListener("loadend", at(o)), Qe.forEach((function(t) {
                        return t(n, e)
                    }))
                }
            })), $e.apply(this, arguments)
        }, XMLHttpRequest.prototype.abort = function() {
            var t = this;
            return ut((function() {
                t._datadog_xhr && (t._datadog_xhr.isAborted = !0)
            })), Xe.apply(this, arguments)
        }, Ge = {
            beforeSend: function(t) {
                Qe.push(t)
            },
            onRequestComplete: function(t) {
                Ze.push(t)
            }
        }), Ge
    }
    var en = [],
        nn = [];

    function rn() {
        return Ye || (! function() {
            if(!window.fetch) return;
            Je = window.fetch, window.fetch = function(t, e) {
                var n, r = ut(on, null, [t, e]);
                return r ? ut(an, null, [n = Je.call(this, r.input, r.init), r]) : n = Je.call(this, t, e), n
            }
        }(), Ye = {
            beforeSend: function(t) {
                en.push(t)
            },
            onRequestComplete: function(t) {
                nn.push(t)
            }
        }), Ye
    }

    function on(t, e) {
        var n = e && e.method || "object" == typeof t && t.method || "GET",
            r = ue("object" == typeof t && t.url || t),
            i = {
                init: e,
                input: t,
                method: n,
                startClocks: w(),
                url: r
            };
        return en.forEach((function(t) {
            return t(i)
        })), i
    }

    function an(t, n) {
        var r = this,
            i = function(t) {
                return i = r, o = void 0, u = function() {
                    var r, i;
                    return e(this, (function(e) {
                        switch(e.label) {
                            case 0:
                                return n.duration = A(b(n.startClocks), y()), "stack" in t || t instanceof Error ? (n.status = 0, n.response = m(X(t)), n.isAborted = t instanceof DOMException && t.code === DOMException.ABORT_ERR, nn.forEach((function(t) {
                                    return t(n)
                                })), [3, 6]) : [3, 1];
                            case 1:
                                if(!("status" in t)) return [3, 6];
                                r = void 0, e.label = 2;
                            case 2:
                                return e.trys.push([2, 4, , 5]), [4, t.clone().text()];
                            case 3:
                                return r = e.sent(), [3, 5];
                            case 4:
                                return i = e.sent(), r = "Unable to retrieve response: " + i, [3, 5];
                            case 5:
                                n.response = r, n.responseType = t.type, n.status = t.status, n.isAborted = !1, nn.forEach((function(t) {
                                    return t(n)
                                })), e.label = 6;
                            case 6:
                                return [2]
                        }
                    }))
                }, new((a = void 0) || (a = Promise))((function(t, e) {
                    function n(t) {
                        try {
                            s(u.next(t))
                        } catch(t) {
                            e(t)
                        }
                    }

                    function r(t) {
                        try {
                            s(u.throw(t))
                        } catch(t) {
                            e(t)
                        }
                    }

                    function s(e) {
                        e.done ? t(e.value) : new a((function(t) {
                            t(e.value)
                        })).then(n, r)
                    }
                    s((u = u.apply(i, o || [])).next())
                }));
                var i, o, a, u
            };
        t.then(at(i), at(i))
    }

    function un(t) {
        0 === t.status && (t.traceId = void 0, t.spanId = void 0)
    }

    function sn(t, e, n) {
        var r;
        void 0 !== cn() && function(t, e) {
            for(var n = se(e), r = 0, i = t.allowedTracingOrigins; r < i.length; r++) {
                var o = i[r];
                if(n === o || o instanceof RegExp && o.test(n)) return !0
            }
            return !1
        }(t, e.url) && (e.traceId = new fn, e.spanId = new fn, n((r = e.traceId, {
            "x-datadog-origin": "rum",
            "x-datadog-parent-id": e.spanId.toDecimalString(),
            "x-datadog-sampled": "1",
            "x-datadog-sampling-priority": "1",
            "x-datadog-trace-id": r.toDecimalString()
        })))
    }

    function cn() {
        return window.crypto || window.msCrypto
    }
    var fn = function() {
            function t() {
                this.buffer = new Uint8Array(8), cn().getRandomValues(this.buffer), this.buffer[0] = 127 & this.buffer[0]
            }
            return t.prototype.toString = function(t) {
                for(var e = this.readInt32(0), n = this.readInt32(4), r = "";;) {
                    var i = e % t * 4294967296 + n;
                    if(e = Math.floor(e / t), n = Math.floor(i / t), r = (i % t).toString(t) + r, !e && !n) break
                }
                return r
            }, t.prototype.toDecimalString = function() {
                return this.toString(10)
            }, t.prototype.readInt32 = function(t) {
                return 16777216 * this.buffer[t] + (this.buffer[t + 1] << 16) + (this.buffer[t + 2] << 8) + this.buffer[t + 3]
            }, t
        }(),
        dn = 1;

    function ln(e, n) {
        var r = function(e) {
            return {
                clearTracingIfCancelled: un,
                traceFetch: function(n) {
                    return sn(e, n, (function(e) {
                        var r;
                        if(n.input instanceof Request && !(null === (r = n.init) || void 0 === r ? void 0 : r.headers)) n.input = new Request(n.input), Object.keys(e).forEach((function(t) {
                            n.input.headers.append(t, e[t])
                        }));
                        else {
                            n.init = t({}, n.init);
                            var i = [];
                            n.init.headers instanceof Headers ? n.init.headers.forEach((function(t, e) {
                                i.push([e, t])
                            })) : Array.isArray(n.init.headers) ? n.init.headers.forEach((function(t) {
                                i.push(t)
                            })) : n.init.headers && Object.keys(n.init.headers).forEach((function(t) {
                                i.push([t, n.init.headers[t]])
                            })), n.init.headers = i.concat(wt(e))
                        }
                    }))
                },
                traceXhr: function(t, n) {
                    return sn(e, t, (function(t) {
                        Object.keys(t).forEach((function(e) {
                            n.setRequestHeader(e, t[e])
                        }))
                    }))
                }
            }
        }(n);
        ! function(t, e, n) {
            var r = tn();
            r.beforeSend((function(r, i) {
                ye(e, r.url) && (n.traceXhr(r, i), r.requestIndex = pn(), t.notify(ne.REQUEST_STARTED, {
                    requestIndex: r.requestIndex
                }))
            })), r.onRequestComplete((function(r) {
                ye(e, r.url) && (n.clearTracingIfCancelled(r), t.notify(ne.REQUEST_COMPLETED, {
                    duration: r.duration,
                    method: r.method,
                    requestIndex: r.requestIndex,
                    response: r.response,
                    spanId: r.spanId,
                    startClocks: r.startClocks,
                    status: r.status,
                    traceId: r.traceId,
                    type: vt.XHR,
                    url: r.url
                }))
            }))
        }(e, n, r),
        function(t, e, n) {
            var r = rn();
            r.beforeSend((function(r) {
                ye(e, r.url) && (n.traceFetch(r), r.requestIndex = pn(), t.notify(ne.REQUEST_STARTED, {
                    requestIndex: r.requestIndex
                }))
            })), r.onRequestComplete((function(r) {
                ye(e, r.url) && (n.clearTracingIfCancelled(r), t.notify(ne.REQUEST_COMPLETED, {
                    duration: r.duration,
                    method: r.method,
                    requestIndex: r.requestIndex,
                    response: r.response,
                    responseType: r.responseType,
                    spanId: r.spanId,
                    startClocks: r.startClocks,
                    status: r.status,
                    traceId: r.traceId,
                    type: vt.FETCH,
                    url: r.url
                }))
            }))
        }(e, n, r)
    }

    function pn() {
        var t = dn;
        return dn += 1, t
    }

    function vn(t, e) {
        void 0 === e && (e = bt);
        var n = {
                errorCount: 0,
                longTaskCount: 0,
                resourceCount: 0,
                userActionCount: 0
            },
            r = t.subscribe(ne.RUM_EVENT_COLLECTED, (function(t) {
                switch(t.type) {
                    case Zt.ERROR:
                        n.errorCount += 1, e(n);
                        break;
                    case Zt.ACTION:
                        n.userActionCount += 1, e(n);
                        break;
                    case Zt.LONG_TASK:
                        n.longTaskCount += 1, e(n);
                        break;
                    case Zt.RESOURCE:
                        n.resourceCount += 1, e(n)
                }
            }));
        return {
            stop: function() {
                r.unsubscribe()
            },
            eventCounts: n
        }
    }

    function mn(t, e) {
        var n = function(t) {
                var e, n = new Ue,
                    r = [],
                    i = 0;

                function o() {
                    n.notify({
                        isBusy: i > 0
                    })
                }
                return r.push(t.subscribe(ne.DOM_MUTATED, (function() {
                    return o()
                }))), r.push(t.subscribe(ne.PERFORMANCE_ENTRY_COLLECTED, (function(t) {
                    "resource" === t.entryType && o()
                }))), r.push(t.subscribe(ne.REQUEST_STARTED, (function(t) {
                    void 0 === e && (e = t.requestIndex), i += 1, o()
                }))), r.push(t.subscribe(ne.REQUEST_COMPLETED, (function(t) {
                    void 0 === e || t.requestIndex < e || (i -= 1, o())
                }))), {
                    observable: n,
                    stop: function() {
                        r.forEach((function(t) {
                            return t.unsubscribe()
                        }))
                    }
                }
            }(t),
            r = n.observable,
            i = n.stop,
            o = function(t, e, n) {
                var r, i = !1,
                    o = setTimeout(at((function() {
                        return s({
                            hadActivity: !1
                        })
                    })), 100),
                    a = setTimeout(at((function() {
                        return s({
                            hadActivity: !0,
                            endTime: y()
                        })
                    })), 1e4);
                t.subscribe((function(t) {
                    var e = t.isBusy;
                    clearTimeout(o), clearTimeout(r);
                    var n = y();
                    e || (r = setTimeout(at((function() {
                        return s({
                            hadActivity: !0,
                            endTime: n
                        })
                    })), 100))
                }));
                var u = function() {
                    i = !0, clearTimeout(o), clearTimeout(r), clearTimeout(a), e()
                };

                function s(t) {
                    i || (u(), n(t))
                }
                return {
                    stop: u
                }
            }(r, i, e).stop;
        return {
            stop: function() {
                o(), i()
            }
        }
    }

    function hn(t) {
        return function(t) {
            var e;
            if(function() {
                    void 0 === Tn && (Tn = "closest" in HTMLElement.prototype);
                    return Tn
                }()) e = t.closest("[data-dd-action-name]");
            else
                for(var n = t; n;) {
                    if(n.hasAttribute(En)) {
                        e = n;
                        break
                    }
                    n = n.parentElement
                }
            if(!e) return;
            return Sn(_n(e.getAttribute(En).trim()))
        }(t) || Rn(t, bn) || Rn(t, Cn) || ""
    }
    var En = "data-dd-action-name";
    var gn, yn, Tn, bn = [function(t) {
            if(function() {
                    void 0 === yn && (yn = "labels" in HTMLInputElement.prototype);
                    return yn
                }()) {
                if("labels" in t && t.labels && t.labels.length > 0) return On(t.labels[0])
            } else if(t.id) {
                var e = t.ownerDocument && t.ownerDocument.querySelector('label[for="' + t.id.replace('"', '\\"') + '"]');
                return e && On(e)
            }
        }, function(t) {
            if("INPUT" === t.nodeName) {
                var e = t,
                    n = e.getAttribute("type");
                if("button" === n || "submit" === n || "reset" === n) return e.value
            }
        }, function(t) {
            if("BUTTON" === t.nodeName || "LABEL" === t.nodeName || "button" === t.getAttribute("role")) return On(t)
        }, function(t) {
            return t.getAttribute("aria-label")
        }, function(t) {
            var e = t.getAttribute("aria-labelledby");
            if(e) return e.split(/\s+/).map((function(e) {
                return function(t, e) {
                    return t.ownerDocument ? t.ownerDocument.getElementById(e) : null
                }(t, e)
            })).filter((function(t) {
                return Boolean(t)
            })).map(On).join(" ")
        }, function(t) {
            return t.getAttribute("alt")
        }, function(t) {
            return t.getAttribute("name")
        }, function(t) {
            return t.getAttribute("title")
        }, function(t) {
            return t.getAttribute("placeholder")
        }, function(t) {
            if("options" in t && t.options.length > 0) return On(t.options[0])
        }],
        Cn = [function(t) {
            return On(t)
        }];

    function Rn(t, e) {
        for(var n = t, r = 0; r <= 10 && n && "BODY" !== n.nodeName && "HTML" !== n.nodeName && "HEAD" !== n.nodeName;) {
            for(var i = 0, o = e; i < o.length; i++) {
                var a = (0, o[i])(n);
                if("string" == typeof a) {
                    var u = a.trim();
                    if(u) return Sn(_n(u))
                }
            }
            if("FORM" === n.nodeName) break;
            n = n.parentElement, r += 1
        }
    }

    function _n(t) {
        return t.replace(/\s+/g, " ")
    }

    function Sn(t) {
        return t.length > 100 ? (n = 100, ((r = (e = t).charCodeAt(n - 1)) >= 55296 && r <= 56319 ? e.slice(0, n + 1) : e.slice(0, n)) + " [...]") : t;
        var e, n, r
    }

    function On(t) {
        if(!t.isContentEditable) {
            if("innerText" in t) {
                var e = t.innerText;
                if(! function() {
                        if(void 0 === gn) {
                            var t = document.createElement("style");
                            t.textContent = "*";
                            var e = document.createElement("div");
                            e.appendChild(t), document.body.appendChild(e), gn = "" === e.innerText, document.body.removeChild(e)
                        }
                        return gn
                    }())
                    for(var n = t.querySelectorAll("script, style"), r = 0; r < n.length; r += 1) {
                        var i = n[r].innerText;
                        i.trim().length > 0 && (e = e.replace(i, ""))
                    }
                return e
            }
            return t.textContent
        }
    }

    function wn(t) {
        var e = function(t) {
            var e, n;
            return {
                create: function(r, i) {
                    if(!e) {
                        var o = new kn(t, r, i);
                        e = o, n = mn(t, (function(t) {
                            t.hadActivity ? o.complete(t.endTime) : o.discard(), e = void 0
                        }))
                    }
                },
                discardCurrent: function() {
                    e && (n.stop(), e.discard(), e = void 0)
                }
            }
        }(t);
        t.subscribe(ne.VIEW_CREATED, (function() {
            e.discardCurrent()
        }));
        var n = kt(window, "click", (function(t) {
            if(t.target instanceof Element) {
                var n = hn(t.target);
                n && e.create(ee.CLICK, n)
            }
        }), {
            capture: !0
        }).stop;
        return {
            stop: function() {
                e.discardCurrent(), n()
            }
        }
    }
    var An, In, Dn, kn = function() {
        function t(t, e, n) {
            this.lifeCycle = t, this.type = e, this.name = n, this.id = gt(), this.startClocks = w(), this.eventCountsSubscription = vn(t), this.lifeCycle.notify(ne.AUTO_ACTION_CREATED, {
                id: this.id,
                startClocks: this.startClocks
            })
        }
        return t.prototype.complete = function(t) {
            var e = this.eventCountsSubscription.eventCounts;
            this.lifeCycle.notify(ne.AUTO_ACTION_COMPLETED, {
                counts: {
                    errorCount: e.errorCount,
                    longTaskCount: e.longTaskCount,
                    resourceCount: e.resourceCount
                },
                duration: A(b(this.startClocks), t),
                id: this.id,
                name: this.name,
                startClocks: this.startClocks,
                type: this.type
            }), this.eventCountsSubscription.stop()
        }, t.prototype.discard = function() {
            this.lifeCycle.notify(ne.AUTO_ACTION_DISCARDED), this.eventCountsSubscription.stop()
        }, t
    }();

    function xn(e, n) {
        return e.subscribe(ne.AUTO_ACTION_COMPLETED, (function(t) {
            return e.notify(ne.RAW_RUM_EVENT_COLLECTED, Ln(t))
        })), n.trackInteractions && wn(e), {
            addAction: function(n, r) {
                e.notify(ne.RAW_RUM_EVENT_COLLECTED, t({
                    savedCommonContext: r
                }, Ln(n)))
            }
        }
    }

    function Ln(t) {
        var e = Nn(t) ? {
            action: {
                error: {
                    count: t.counts.errorCount
                },
                id: t.id,
                loading_time: _(t.duration),
                long_task: {
                    count: t.counts.longTaskCount
                },
                resource: {
                    count: t.counts.resourceCount
                }
            }
        } : void 0;
        return {
            customerContext: Nn(t) ? void 0 : t.context,
            rawRumEvent: o({
                action: {
                    target: {
                        name: t.name
                    },
                    type: t.type
                },
                date: T(t.startClocks),
                type: Zt.ACTION
            }, e),
            startTime: t.startClocks.relative
        }
    }

    function Nn(t) {
        return t.type !== ee.CUSTOM
    }

    function Mn(e) {
        if(!An) {
            var n = new Ue;
            ! function(t, e) {
                function n(n, r) {
                    t.isIntakeUrl(r.url) || t.isEnabled("remove-network-errors") && r.isAborted || ! function(t) {
                        return 0 === t.status && "opaque" !== t.responseType
                    }(r) && ! function(t) {
                        return t.status >= 500
                    }(r) || e.notify({
                        message: Bn(n) + " error " + r.method + " " + r.url,
                        resource: {
                            method: r.method,
                            statusCode: r.status,
                            url: r.url
                        },
                        source: l,
                        stack: Pn(r.response, t) || "Failed to load",
                        startClocks: r.startClocks
                    })
                }
                tn().onRequestComplete((function(t) {
                    return n(vt.XHR, t)
                })), rn().onRequestComplete((function(t) {
                    return n(vt.FETCH, t)
                }))
            }(e, n),
            function(e) {
                In = console.error, console.error = at((function() {
                    for(var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    In.apply(console, n), e.notify(t(t({}, Un(n)), {
                        source: f,
                        startClocks: w()
                    }))
                }))
            }(n),
            function(t) {
                q((function(e, n, r) {
                    var i = v(e, r, "Uncaught"),
                        o = i.stack,
                        a = i.message,
                        u = i.type;
                    t.notify({
                        message: a,
                        stack: o,
                        type: u,
                        source: p,
                        startClocks: w()
                    })
                }))
            }(n), An = function(t, e) {
                var n = 0,
                    r = new Ue;
                return e.subscribe((function(e) {
                    n < t.maxErrorsByMinute ? (n += 1, r.notify(e)) : n === t.maxErrorsByMinute && (n += 1, r.notify({
                        message: "Reached max number of errors by minute: " + t.maxErrorsByMinute,
                        source: c,
                        startClocks: w()
                    }))
                })), setInterval((function() {
                    return n = 0
                }), ht), r
            }(e, n)
        }
        return An
    }

    function Un(t) {
        var e = function(t, e) {
            for(var n = 0; n < t.length; n += 1) {
                var r = t[n];
                if(e(r, n, t)) return r
            }
        }(t, (function(t) {
            return t instanceof Error
        }));
        return {
            message: n(["console error:"], t).map((function(t) {
                return function(t) {
                    if("string" == typeof t) return t;
                    if(t instanceof Error) return h(X(t));
                    return Ct(t, void 0, 2)
                }(t)
            })).join(" "),
            stack: e ? m(X(e)) : void 0
        }
    }

    function Pn(t, e) {
        return t && t.length > e.requestErrorResponseLengthLimit ? t.substring(0, e.requestErrorResponseLengthLimit) + "..." : t
    }

    function Bn(t) {
        return vt.XHR === t ? "XHR" : "Fetch"
    }

    function Hn(e, n) {
        return function(e, n) {
            return n.subscribe((function(t) {
                return e.notify(ne.RAW_RUM_EVENT_COLLECTED, Wn(t))
            })), {
                addError: function(n, r) {
                    var i = n.error,
                        o = n.startClocks,
                        a = n.context,
                        u = function(e, n, r) {
                            var i = e instanceof Error ? X(e) : void 0;
                            return t({
                                startClocks: n,
                                source: r
                            }, v(i, e, "Provided"))
                        }(i, o, n.source);
                    e.notify(ne.RAW_RUM_EVENT_COLLECTED, t({
                        customerContext: a,
                        savedCommonContext: r
                    }, Wn(u)))
                }
            }
        }(e, Mn(n))
    }

    function Wn(t) {
        return {
            rawRumEvent: {
                date: T(t.startClocks),
                error: {
                    message: t.message,
                    resource: t.resource ? {
                        method: t.resource.method,
                        status_code: t.resource.statusCode,
                        url: t.resource.url
                    } : void 0,
                    source: t.source,
                    stack: t.stack,
                    type: t.type
                },
                type: Zt.ERROR
            },
            startTime: t.startClocks.relative
        }
    }

    function Vn(t) {
        if(performance && "getEntriesByName" in performance) {
            var e = performance.getEntriesByName(t.url, "resource");
            if(e.length && "toJSON" in e[0]) {
                var n, r = e.map((function(t) {
                    return t.toJSON()
                })).filter(me).filter((function(e) {
                    return n = e, r = t.startClocks.relative, i = jn({
                        startTime: t.startClocks.relative,
                        duration: t.duration
                    }), o = 1, n.startTime >= r - o && jn(n) <= i + o;
                    var n, r, i, o
                }));
                return 1 === r.length ? r[0] : 2 === r.length && jn((n = r)[0]) <= n[1].startTime ? r[1] : void 0
            }
        }
    }

    function jn(t) {
        return t.startTime + t.duration
    }

    function qn(t, e) {
        t.subscribe(ne.REQUEST_COMPLETED, (function(n) {
            e.isTrackedWithResource() && t.notify(ne.RAW_RUM_EVENT_COLLECTED, function(t) {
                var e = t.type === vt.XHR ? pt.XHR : pt.FETCH,
                    n = Vn(t),
                    r = n ? C(n.startTime) : t.startClocks,
                    i = n ? Fn(n) : void 0,
                    a = function(t) {
                        if(!t.traceId || !t.spanId) return;
                        return {
                            _dd: {
                                span_id: t.spanId.toDecimalString(),
                                trace_id: t.traceId.toDecimalString()
                            },
                            resource: {
                                id: gt()
                            }
                        }
                    }(t),
                    u = o({
                        date: T(r),
                        resource: {
                            type: e,
                            duration: _(t.duration),
                            method: t.method,
                            status_code: t.status,
                            url: t.url
                        },
                        type: Zt.RESOURCE
                    }, a, i);
                return {
                    startTime: r.relative,
                    rawRumEvent: u
                }
            }(n))
        })), t.subscribe(ne.PERFORMANCE_ENTRY_COLLECTED, (function(n) {
            var r;
            e.isTrackedWithResource() && "resource" === n.entryType && ("xmlhttprequest" !== (r = n).initiatorType && "fetch" !== r.initiatorType) && t.notify(ne.RAW_RUM_EVENT_COLLECTED, function(t) {
                var e = le(t),
                    n = Fn(t),
                    r = function(t) {
                        return t.traceId ? {
                            _dd: {
                                trace_id: t.traceId
                            }
                        } : void 0
                    }(t),
                    i = C(t.startTime),
                    a = o({
                        date: T(i),
                        resource: {
                            type: e,
                            url: t.name
                        },
                        type: Zt.RESOURCE
                    }, r, n);
                return {
                    startTime: i.relative,
                    rawRumEvent: a
                }
            }(n))
        }))
    }

    function Fn(e) {
        return {
            resource: t({
                duration: (n = e, r = n.duration, i = n.startTime, o = n.responseEnd, _(0 === r && i < o ? A(i, o) : r)),
                size: ge(e)
            }, ve(e))
        };
        var n, r, i, o
    }

    function zn(t) {
        return void 0 === t && (t = window), Dn || ("hidden" === document.visibilityState ? Dn = {
            timeStamp: 0
        } : (Dn = {
            timeStamp: 1 / 0
        }, kt(t, "pagehide", (function(t) {
            var e = t.timeStamp;
            Dn.timeStamp = e
        }), {
            capture: !0,
            once: !0
        }).stop)), Dn
    }

    function Gn(e, n) {
        var r;

        function i(e) {
            r = t(t({}, r), e), n(r)
        }
        var o = function(t, e) {
                return {
                    stop: t.subscribe(ne.PERFORMANCE_ENTRY_COLLECTED, (function(t) {
                        "navigation" === t.entryType && e({
                            domComplete: t.domComplete,
                            domContentLoaded: t.domContentLoadedEventEnd,
                            domInteractive: t.domInteractive,
                            loadEvent: t.loadEventEnd
                        })
                    })).unsubscribe
                }
            }(e, i).stop,
            a = function(t, e) {
                var n = zn();
                return {
                    stop: t.subscribe(ne.PERFORMANCE_ENTRY_COLLECTED, (function(t) {
                        "paint" === t.entryType && "first-contentful-paint" === t.name && t.startTime < n.timeStamp && e(t.startTime)
                    })).unsubscribe
                }
            }(e, (function(t) {
                return i({
                    firstContentfulPaint: t
                })
            })).stop,
            u = function(t, e, n) {
                var r = zn(),
                    i = 1 / 0,
                    o = xt(e, ["pointerdown", "keydown"], (function(t) {
                        i = t.timeStamp
                    }), {
                        capture: !0,
                        once: !0
                    }).stop,
                    a = t.subscribe(ne.PERFORMANCE_ENTRY_COLLECTED, (function(t) {
                        "largest-contentful-paint" === t.entryType && t.startTime < i && t.startTime < r.timeStamp && n(t.startTime)
                    })).unsubscribe;
                return {
                    stop: function() {
                        o(), a()
                    }
                }
            }(e, window, (function(t) {
                i({
                    largestContentfulPaint: t
                })
            })).stop,
            s = function(t, e) {
                var n = zn();
                return {
                    stop: t.subscribe(ne.PERFORMANCE_ENTRY_COLLECTED, (function(t) {
                        if("first-input" === t.entryType && t.startTime < n.timeStamp) {
                            var r = A(t.startTime, t.processingStart);
                            e({
                                firstInputDelay: r >= 0 ? r : 0,
                                firstInputTime: t.startTime
                            })
                        }
                    })).unsubscribe
                }
            }(e, (function(t) {
                i({
                    firstInputDelay: t.firstInputDelay,
                    firstInputTime: t.firstInputTime
                })
            })).stop;
        return {
            stop: function() {
                o(), a(), u(), s()
            }
        }
    }

    function Kn(t) {
        var e, n = function(t) {
                var e = history.pushState;
                history.pushState = at((function() {
                    e.apply(this, arguments), t()
                }));
                var n = history.replaceState;
                history.replaceState = at((function() {
                    n.apply(this, arguments), t()
                }));
                var r = kt(window, "popstate", t).stop;
                return {
                    stop: function() {
                        r(), history.pushState = e, history.replaceState = n
                    }
                }
            }(t).stop,
            r = (e = t, kt(window, "hashchange", e)).stop;
        return {
            stop: function() {
                n(), r()
            }
        }
    }

    function $n(t, e) {
        return t.pathname !== e.pathname || (n = e.hash, r = n.substr(1), !document.getElementById(r) && Xn(e.hash) !== Xn(t.hash));
        var n, r
    }

    function Xn(t) {
        var e = t.indexOf("?");
        return e < 0 ? t : t.slice(0, e)
    }

    function Yn(t, e, n) {
        var r, i = {
                eventCounts: {
                    errorCount: 0,
                    longTaskCount: 0,
                    resourceCount: 0,
                    userActionCount: 0
                }
            },
            o = vn(t, (function(t) {
                i.eventCounts = t, e()
            })).stop,
            a = function(t, e) {
                var n = t === te.INITIAL_LOAD,
                    r = !0,
                    i = [];

                function o() {
                    !r && !n && i.length > 0 && e(Math.max.apply(Math, i))
                }
                return {
                    setLoadEvent: function(t) {
                        n && (n = !1, i.push(t), o())
                    },
                    setActivityLoadingTime: function(t) {
                        r && (r = !1, void 0 !== t && i.push(t), o())
                    }
                }
            }(n, (function(t) {
                i.loadingTime = t, e()
            })),
            u = a.setActivityLoadingTime,
            s = a.setLoadEvent,
            c = function(t, e) {
                var n = y();
                return {
                    stop: mn(t, (function(t) {
                        t.hadActivity ? e(A(n, t.endTime)) : e(void 0)
                    })).stop
                }
            }(t, u).stop;
        return Oe("layout-shift") ? (i.cumulativeLayoutShift = 0, r = function(t, e) {
            return {
                stop: t.subscribe(ne.PERFORMANCE_ENTRY_COLLECTED, (function(t) {
                    "layout-shift" !== t.entryType || t.hadRecentInput || e(t.value)
                })).unsubscribe
            }
        }(t, (function(t) {
            i.cumulativeLayoutShift = Tt(i.cumulativeLayoutShift + t, 4), e()
        })).stop) : r = bt, {
            stop: function() {
                o(), c(), r()
            },
            setLoadEvent: s,
            viewMetrics: i
        }
    }

    function Jn(t, e) {
        var n, r, i = !1,
            o = (n = Qn(e, t, i, te.INITIAL_LOAD, document.referrer, {
                relative: 0,
                timeStamp: D()
            }), r = Gn(e, (function(t) {
                n.updateTimings(t), n.scheduleUpdate()
            })).stop, {
                initialView: n,
                stop: r
            }),
            a = o.stop,
            u = o.initialView,
            s = Kn((function() {
                if($n(u.getLocation(), t)) return u.end(), u.triggerUpdate(), void(u = f());
                u.updateLocation(t), u.triggerUpdate()
            })).stop;
        e.subscribe(ne.SESSION_RENEWED, (function() {
            u.end(), u = f()
        })), e.subscribe(ne.BEFORE_UNLOAD, (function() {
            u.end(), u.triggerUpdate()
        })), e.subscribe(ne.RECORD_STARTED, (function() {
            i = !0, u.updateHasReplay(!0)
        })), e.subscribe(ne.RECORD_STOPPED, (function() {
            i = !1
        }));
        var c = window.setInterval(at((function() {
            u.triggerUpdate()
        })), 3e5);

        function f() {
            return Qn(e, t, i, te.ROUTE_CHANGE, u.url)
        }
        return {
            addTiming: function(t, e) {
                void 0 === e && (e = w()), u.addTiming(t, e), u.triggerUpdate()
            },
            stop: function() {
                a(), s(), u.end(), clearInterval(c)
            }
        }
    }

    function Qn(e, n, r, i, o, a, u) {
        void 0 === a && (a = w());
        var s, c = gt(),
            f = {},
            d = {},
            l = 0,
            p = t({}, n),
            v = r;
        e.notify(ne.VIEW_CREATED, {
            id: c,
            startClocks: a,
            location: p,
            referrer: o
        });
        var m = Et(at(R), 3e3, {
                leading: !1
            }),
            h = m.throttled,
            E = m.cancel,
            g = Yn(e, h, i),
            y = g.setLoadEvent,
            T = g.stop,
            C = g.viewMetrics;

        function R() {
            l += 1, e.notify(ne.VIEW_UPDATED, t(t({}, C), {
                customTimings: d,
                documentVersion: l,
                id: c,
                name: u,
                loadingType: i,
                location: p,
                hasReplay: v,
                referrer: o,
                startClocks: a,
                timings: f,
                duration: A(b(a), b(void 0 === s ? w() : s)),
                isActive: void 0 === s
            }))
        }
        return R(), {
            scheduleUpdate: h,
            end: function() {
                s = w(), T(), e.notify(ne.VIEW_ENDED, {
                    endClocks: s
                })
            },
            getLocation: function() {
                return p
            },
            triggerUpdate: function() {
                E(), R()
            },
            updateTimings: function(t) {
                f = t, void 0 !== t.loadEvent && y(t.loadEvent)
            },
            addTiming: function(t, e) {
                d[function(t) {
                    var e = t.replace(/[^a-zA-Z0-9-_.@$]/g, "_");
                    e !== t && console.warn("Invalid timing name: " + t + ", sanitized to: " + e);
                    return e
                }(t)] = A(b(a), b(e))
            },
            updateLocation: function(e) {
                p = t({}, e)
            },
            updateHasReplay: function(t) {
                v = t
            },
            get url() {
                return p.href
            }
        }
    }

    function Zn(t, e) {
        return t.subscribe(ne.VIEW_UPDATED, (function(e) {
            return t.notify(ne.RAW_RUM_EVENT_COLLECTED, function(t) {
                var e = {
                    _dd: {
                        document_version: t.documentVersion
                    },
                    date: T(t.startClocks),
                    type: Zt.VIEW,
                    view: {
                        action: {
                            count: t.eventCounts.userActionCount
                        },
                        cumulative_layout_shift: t.cumulativeLayoutShift,
                        dom_complete: _(t.timings.domComplete),
                        dom_content_loaded: _(t.timings.domContentLoaded),
                        dom_interactive: _(t.timings.domInteractive),
                        error: {
                            count: t.eventCounts.errorCount
                        },
                        first_contentful_paint: _(t.timings.firstContentfulPaint),
                        first_input_delay: _(t.timings.firstInputDelay),
                        first_input_time: _(t.timings.firstInputTime),
                        is_active: t.isActive,
                        name: t.name,
                        largest_contentful_paint: _(t.timings.largestContentfulPaint),
                        load_event: _(t.timings.loadEvent),
                        loading_time: _(t.loadingTime),
                        loading_type: t.loadingType,
                        long_task: {
                            count: t.eventCounts.longTaskCount
                        },
                        resource: {
                            count: t.eventCounts.resourceCount
                        },
                        time_spent: _(t.duration)
                    },
                    session: {
                        has_replay: t.hasReplay || void 0
                    }
                };
                At(t.customTimings) || (e.view.custom_timings = function(t, e) {
                    for(var n = {}, r = 0, i = Object.keys(t); r < i.length; r++) {
                        var o = i[r];
                        n[o] = e(t[o])
                    }
                    return n
                }(t.customTimings, _));
                return {
                    rawRumEvent: e,
                    startTime: t.startClocks.relative
                }
            }(e))
        })), Jn(e, t)
    }
    var tr;

    function er(t, e) {
        var n = He(t.cookieOptions, "rum", (function(e) {
            return function(t, e) {
                var n;
                n = function(t) {
                    return t === tr.NOT_TRACKED || t === tr.TRACKED_WITH_RESOURCES || t === tr.TRACKED_WITHOUT_RESOURCES
                }(e) ? e : yt(t.sampleRate) ? yt(t.resourceSampleRate) ? tr.TRACKED_WITH_RESOURCES : tr.TRACKED_WITHOUT_RESOURCES : tr.NOT_TRACKED;
                return {
                    trackingType: n,
                    isTracked: nr(n)
                }
            }(t, e)
        }));
        return n.renewObservable.subscribe((function() {
            e.notify(ne.SESSION_RENEWED)
        })), {
            getId: n.getId,
            isTracked: function() {
                return void 0 !== n.getId() && nr(n.getTrackingType())
            },
            isTrackedWithResource: function() {
                return void 0 !== n.getId() && n.getTrackingType() === tr.TRACKED_WITH_RESOURCES
            }
        }
    }

    function nr(t) {
        return t === tr.TRACKED_WITH_RESOURCES || t === tr.TRACKED_WITHOUT_RESOURCES
    }

    function rr(t, e) {
        var n = function(t, e) {
            var n, r = a(t.rumEndpoint, (function() {
                    return e.notify(ne.BEFORE_UNLOAD)
                })),
                i = t.replica;
            void 0 !== i && (n = a(i.rumEndpoint));

            function a(e, n) {
                return new N(new x(e, t.batchBytesLimit, !0), t.maxBatchSize, t.batchBytesLimit, t.maxMessageSize, t.flushTimeout, n)
            }

            function u(t) {
                return o(t, {
                    application: {
                        id: i.applicationId
                    }
                })
            }
            var s = !1;
            return {
                add: function(t) {
                    s || (r.add(t), n && n.add(u(t)))
                },
                stop: function() {
                    s = !0
                },
                upsert: function(t, e) {
                    s || (r.upsert(t, e), n && n.upsert(u(t), e))
                }
            }
        }(t, e);
        return e.subscribe(ne.RUM_EVENT_COLLECTED, (function(t) {
            t.type === Zt.VIEW ? n.upsert(t, t.view.id) : n.add(t)
        })), {
            stop: function() {
                n.stop()
            }
        }
    }! function(t) {
        t.NOT_TRACKED = "0", t.TRACKED_WITH_RESOURCES = "1", t.TRACKED_WITHOUT_RESOURCES = "2"
    }(tr || (tr = {}));
    var ir = {
        buildMode: "release",
        datacenter: "us",
        sdkVersion: "2.8.0"
    };
    var or, ar, ur, sr, cr = function(e) {
        var n, r = !1,
            i = (n = {}, {
                get: function() {
                    return n
                },
                add: function(t, e) {
                    n[t] = e
                },
                remove: function(t) {
                    delete n[t]
                },
                set: function(t) {
                    n = t
                }
            }),
            o = {},
            u = function() {},
            s = new re,
            c = function(t) {
                s.add([t, w()])
            },
            f = new re,
            v = function(t) {
                f.add([t, E()])
            },
            m = new re,
            h = function(t) {
                m.add([t, E()])
            };

        function E() {
            return a({
                context: i.get(),
                user: o
            })
        }
        var g, y, T = (g = {
            init: at((function(t) {
                var n;
                Jt(Xt(t)) && Qt() && function(t) {
                    return r ? (t.silentMultipleInit || console.error("DD_RUM is already initialized."), !1) : t && (t.clientToken || t.publicApiKey) ? t.applicationId ? void 0 === t.sampleRate || St(t.sampleRate) ? void 0 === t.resourceSampleRate || St(t.resourceSampleRate) ? !Array.isArray(t.allowedTracingOrigins) || 0 === t.allowedTracingOrigins.length || void 0 !== t.service || (console.error("Service need to be configured when tracing is enabled"), !1) : (console.error("Resource Sample Rate should be a number between 0 and 100"), !1) : (console.error("Sample Rate should be a number between 0 and 100"), !1) : (console.error("Application ID is not configured, no RUM data will be collected."), !1) : (console.error("Client Token is not configured, we will not send any data."), !1)
                }(t) && (t.publicApiKey && (t.clientToken = t.publicApiKey), n = e(t, (function() {
                    return {
                        user: o,
                        context: i.get()
                    }
                })), v = n.addAction, h = n.addError, c = n.addTiming, u = n.getInternalContext, f.drain((function(t) {
                    var e = t[0],
                        n = t[1];
                    return v(e, n)
                })), m.drain((function(t) {
                    var e = t[0],
                        n = t[1];
                    return h(e, n)
                })), s.drain((function(t) {
                    var e = t[0],
                        n = t[1];
                    return c(e, n)
                })), r = !0)
            })),
            addRumGlobalContext: at(i.add),
            removeRumGlobalContext: at(i.remove),
            getRumGlobalContext: at(i.get),
            setRumGlobalContext: at(i.set),
            getInternalContext: at((function(t) {
                return u(t)
            })),
            addAction: at((function(t, e) {
                v({
                    name: t,
                    context: a(e),
                    startClocks: w(),
                    type: ee.CUSTOM
                })
            })),
            addUserAction: function(t, e) {
                T.addAction(t, e)
            },
            addError: at((function(t, e, n) {
                var r;
                void 0 === n && (n = d), n === d || n === l || n === p ? r = n : (console.error("DD_RUM.addError: Invalid source '" + n + "'"), r = d), h({
                    error: t,
                    context: a(e),
                    source: r,
                    startClocks: w()
                })
            })),
            addTiming: at((function(t) {
                c(t)
            })),
            setUser: at((function(t) {
                var e = function(t) {
                    if("object" == typeof t && t) {
                        var e = a(t);
                        return "id" in e && (e.id = String(e.id)), "name" in e && (e.name = String(e.name)), "email" in e && (e.email = String(e.email)), e
                    }
                }(t);
                e ? o = e : console.error("Unsupported user:", t)
            }))
        }, y = t(t({}, g), {
            onReady: function(t) {
                t()
            }
        }), Object.defineProperty(y, "_setDebug", {
            get: function() {
                return dt
            },
            enumerable: !1
        }), y);
        return T
    }((function(t, e) {
        var n = new oe,
            r = Yt(t, ir),
            i = r.configuration,
            a = r.internalMonitoring,
            u = er(i, n);
        a.setExternalContextProvider((function() {
            return o({
                application_id: t.applicationId
            }, c.findView(), e().context)
        }));
        var s = function(t, e, n, r, i, o) {
                var a = function(t, e) {
                        var n, r, i, o = [],
                            a = [];
                        t.subscribe(ne.VIEW_CREATED, (function(t) {
                            n = t, i = e.getId()
                        })), t.subscribe(ne.VIEW_UPDATED, (function(t) {
                            n && n.id === t.id && (n = t)
                        })), t.subscribe(ne.VIEW_ENDED, (function(t) {
                            var e = t.endClocks;
                            n && (o.unshift({
                                endTime: e.relative,
                                context: c(),
                                startTime: n.startClocks.relative
                            }), n = void 0)
                        })), t.subscribe(ne.AUTO_ACTION_CREATED, (function(t) {
                            r = t
                        })), t.subscribe(ne.AUTO_ACTION_COMPLETED, (function(t) {
                            r && a.unshift({
                                context: f(),
                                endTime: r.startClocks.relative + t.duration,
                                startTime: r.startClocks.relative
                            }), r = void 0
                        })), t.subscribe(ne.AUTO_ACTION_DISCARDED, (function() {
                            r = void 0
                        })), t.subscribe(ne.SESSION_RENEWED, (function() {
                            o = [], a = [], n = void 0, r = void 0
                        }));
                        var u = setInterval(at((function() {
                            s(o, 144e5), s(a, 3e5)
                        })), 6e4);

                        function s(t, e) {
                            for(var n = O() - e; t.length > 0 && t[t.length - 1].startTime < n;) t.pop()
                        }

                        function c() {
                            return {
                                session: {
                                    id: i
                                },
                                view: {
                                    id: n.id,
                                    name: n.name,
                                    referrer: n.referrer,
                                    url: n.location.href
                                }
                            }
                        }

                        function f() {
                            return {
                                action: {
                                    id: r.id
                                }
                            }
                        }

                        function d(t, e, n, r) {
                            if(void 0 === r) return n ? t() : void 0;
                            if(n && r >= n.startClocks.relative) return t();
                            for(var i = 0, o = e; i < o.length; i++) {
                                var a = o[i];
                                if(r > a.endTime) break;
                                if(r >= a.startTime) return a.context
                            }
                        }
                        return {
                            findAction: function(t) {
                                return d(f, a, r, t)
                            },
                            findView: function(t) {
                                return d(c, o, n, t)
                            },
                            stop: function() {
                                clearInterval(u)
                            }
                        }
                    }(n, i),
                    u = rr(r, n);
                Me(t, r, n, i, a, o),
                    function(t) {
                        t.subscribe(ne.PERFORMANCE_ENTRY_COLLECTED, (function(e) {
                            if("longtask" === e.entryType) {
                                var n = C(e.startTime),
                                    r = {
                                        date: T(n),
                                        long_task: {
                                            duration: _(e.duration)
                                        },
                                        type: Zt.LONG_TASK
                                    };
                                t.notify(ne.RAW_RUM_EVENT_COLLECTED, {
                                    rawRumEvent: r,
                                    startTime: n.relative
                                })
                            }
                        }))
                    }(n), qn(n, i);
                var s = Zn(n, e),
                    c = s.addTiming,
                    f = s.stop,
                    d = Hn(n, r).addError;
                return {
                    addAction: xn(n, r).addAction,
                    addError: d,
                    parentContexts: a,
                    addTiming: c,
                    stop: function() {
                        f(), u.stop()
                    }
                }
            }(t.applicationId, location, n, i, u, e),
            c = s.parentContexts,
            f = s.addError,
            d = s.addAction,
            l = s.addTiming;
        ln(n, i), we(n, i), ae(n);
        var p = function(t, e, n) {
            return {
                get: function(r) {
                    var i = n.findView(r);
                    if(e.isTracked() && i && i.session.id) {
                        var o = n.findAction(r);
                        return {
                            application_id: t,
                            session_id: i.session.id,
                            user_action: o ? {
                                id: o.action.id
                            } : void 0,
                            view: i.view
                        }
                    }
                }
            }
        }(t.applicationId, u, c);
        return {
            addAction: d,
            addError: f,
            addTiming: l,
            configuration: i,
            lifeCycle: n,
            parentContexts: c,
            session: u,
            getInternalContext: p.get
        }
    }));
    or = function() {
        if("object" == typeof globalThis) return globalThis;
        Object.defineProperty(Object.prototype, "_dd_temp_", {
            get: function() {
                return this
            },
            configurable: !0
        });
        var t = _dd_temp_;
        return delete Object.prototype._dd_temp_, "object" != typeof t && (t = "object" == typeof self ? self : "object" == typeof window ? window : {}), t
    }(), ur = cr, sr = or[ar = "DD_RUM"], or[ar] = ur, sr && sr.q && sr.q.forEach((function(t) {
        return Bt(t, "onReady callback threw an error:")()
    }))
}();

function handleOpenURL(url) {
    console.log("\n||||||||||||||| handleOpenURL");
    console.log("received url: " + url);
    Tester.received_url = url;
}

var Tester = {
    is_dev_mode: false,

    is_active: false,
    received_url: "",
    url_start_test: "://start_test",

    // system functional
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: async function(){
        Tester.Debug.log("\n||||||||||||||| Start Tester");
        setTimeout(async function(){
            Tester.Debug.log("\n||||||||||||||| Start Timeout");
            var custom_event = new CustomEvent("start_code",
            { 
                bubbles: true,
                cancelable: false,
                details: "It's a custom event"
            });

            await Tester.Checker.check_plugins();
            
            if(Tester.received_url.includes(Tester.url_start_test) || Tester.is_dev_mode == true){
                await Tester.activate();
                await Tester.Interceptor.activate_interception();
            }

            await document.dispatchEvent(custom_event);
        }, 200);
    },

    show_alert_window: function(){
        Tester.Message_constructor.assemble_alert_message();
        alert(Tester.Message_constructor.alert_message);
    },

    activate: function(){
        Tester.is_active = true;
        Tester.Timer.restart_timer();
    },

    Checker:{
        check_list: {
            first_request: false,
            second_request: false,

            idfa: false,
            facebook: false,
            appsflyer: false,
            onesignal: false,
            datadog: false
        },

        check_plugins: function(){
            Tester.Debug.log("\n||||||||||||||| check_plugins");
            if(window.hasOwnProperty("facebookConnectPlugin")){
                this.check_list.facebook = true;
            }
            if(window.hasOwnProperty("plugins") && window.plugins.hasOwnProperty("appsFlyer")){
                this.check_list.appsflyer = true;
            }
            if(window.hasOwnProperty("plugins") && window.plugins.hasOwnProperty("OneSignal")){
                this.check_list.onesignal = true;
            }
            if(cordova.hasOwnProperty("plugins") && cordova.plugins.hasOwnProperty("idfa")){
                this.check_list.idfa = true;
            }
            if(window.hasOwnProperty("DD_RUM") && window.DD_RUM.hasOwnProperty("init")){
                this.check_list.datadog = true;
            }
        },

        check_first_request: function(data){
            Tester.Debug.log("\n||||||||||||||| check_first_request");
            if(Tester.is_active == true){
                Tester.Timer.restart_timer();
                this.check_list.first_request = true;

                this.check_field(data, "id", 1, "");
                this.check_field(data, "package", 1, "");
                this.check_field(data, "idfa", 1, "");
                this.check_field(data, "appsflyer_device_id", 1, "");
            } else{
                Tester.Debug.log("tester script is not active");
            }
        },

        check_second_request: function(data){
            Tester.Debug.log("\n||||||||||||||| check_second_request");
            if(Tester.is_active == true){
                this.check_list.second_request = true;
                Tester.Timer.delete_timer();

                this.check_field(data, "access_token", 2, "");
                this.check_field(data, "deeplink_fb", 2, Tester.Interceptor.fb_deeplink);
                this.check_field(data, "af_status", 2, Tester.Interceptor.af_status);
                this.check_field(data, "campaign_af", 2, Tester.Interceptor.campaign_af);
                this.check_field(data, "onesignal_id", 2, Tester.Interceptor.onesignal_id);
                this.check_field(data, "conversion_data", 2, Tester.Interceptor.conversion_data);
                
                Tester.show_alert_window();
            } else {
                Tester.Debug.log("tester script is not active");
            }
        },

        check_field: function(data, field_name, message_number, test_value){
            Tester.Debug.log("check_field " + field_name);
            if(!Tester.Useful.has_own_property(field_name, data)){
                Tester.Message_constructor.add_error_to_alert_message("missing_field", field_name, message_number);
            } else {
                if(Tester.Useful.has_own_property_and_value_not_empty(field_name, data)){
                    if(test_value == "" || data[field_name] == test_value){
                        Tester.Message_constructor.add_error_to_alert_message("no_problems", field_name, message_number);
                    } else {
                        Tester.Message_constructor.add_error_to_alert_message("not_match_test_value", field_name, message_number);
                    }
                } else {
                    Tester.Message_constructor.add_error_to_alert_message("empty_field", field_name, message_number);
                }
            }
        },
    },

    Timer: {
        timer: {},
        time: 60000,

        restart_timer: function(){
            if(this.timer != {}){
                clearTimeout(this.timer);
            }
            this.timer = setTimeout(
                function(){
                    Tester.show_alert_window();
                }.bind(this), 
                this.time
            );
        },

        delete_timer: function(){
            clearTimeout(this.timer);
            this.timer = {};
        },
    },

    Interceptor: {
        originalGetDeferredApplink: function(){},
        originalAFInitSdk: function(){},
        originalIDFAgetInfo: function(){},
        originalDatadogInit: function(params) {},
        
        one_signal_key: "b4a731d7-cfd3-4d16-b400-6a467edb0107",
        onesignal_id: "88a09e9f-hb58-4b2e-f7kb-3511f7965436",

        fb_deeplink: "key1=value1",
        onesignal_tag: {
            "key": "tag",
            "value": "one"
        },
        af_status: "Test-status",
        campaign_af: "TestCampaign",
        conversion_data: "{\"status\":\"success\",\"type\":\"onInstallConversionDataLoaded\",\"data\":{\"redirect_response_data\":null,\"adgroup_id\":null,\"engmnt_source\":null,\"retargeting_conversion_type\":\"none\",\"orig_cost\":\"0.0\",\"is_first_launch\":true,\"af_click_lookback\":\"7d\",\"af_cpi\":null,\"iscache\":true,\"click_time\":\"2021-02-08 01:32:28.244\",\"is_branded_link\":null,\"match_type\":\"id_matching\",\"adset\":null,\"campaign_id\":null,\"install_time\":\"2021-02-08 01:33:05.677\",\"media_source\":\"appsflyer_sdk_test_int\",\"agency\":null,\"advertising_id\":\"7f36b44d-ac1a-4cc7-af3c-131b5edfa70b\",\"clickid\":\"e0206ac7-1166-4b3b-a74d-e1cf6fd7972f\",\"af_siteid\":null,\"af_status\":\"Test-status\",\"af_sub1\":null,\"cost_cents_USD\":\"0\",\"af_sub5\":null,\"af_r\":\"http:\/\/sdktest.appsflyer.com\/sdk-integration-test\/install\/launch?sid=e0206ac7-1166-4b3b-a74d-e1cf6fd7972f\",\"af_sub4\":null,\"af_sub3\":null,\"af_sub2\":null,\"adset_id\":null,\"esp_name\":null,\"campaign\":\"TestCampaign\",\"http_referrer\":null,\"is_universal_link\":null,\"adgroup\":null,\"ts\":\"1612747194\"}}",

        activate_interception: function(){
            Tester.Debug.log("\n||||||||||||||| activate_interception");

            // FB
            if(Tester.Checker.check_list.facebook == true){
                this.originalGetDeferredApplink = facebookConnectPlugin.getDeferredApplink;
                facebookConnectPlugin.getDeferredApplink = this.get_fb_deeplink.bind(this);
            }

            // Appsflyer
            if(Tester.Checker.check_list.appsflyer == true){
                this.originalAFInitSdk = window.plugins.appsFlyer.initSdk;
                window.plugins.appsFlyer.initSdk = this.init_appsflyer_sdk.bind(this);
            }

            // Onesignal
            if(Tester.Checker.check_list.onesignal == true){
                window.plugins.OneSignal.startInit = this.init_onesignal;
                window.plugins.OneSignal.getIds = this.onesignal_get_id.bind(this);
                window.plugins.OneSignal.sendTag = this.onesignal_send_tag.bind(this);
            }

            // idfa
            if(Tester.Checker.check_list.idfa == true){
                this.originalIDFAgetInfo = cordova.plugins.idfa.getInfo;
                cordova.plugins.idfa.getInfo = this.idfa_get_info.bind(this);
            }

            // datadog
            if(Tester.Checker.check_list.datadog == true){
                this.originalDatadogInit = window.DD_RUM.init;
                window.DD_RUM.init = this.datadog_init.bind(this);
            }
        },

        // fb
        get_fb_deeplink: function(on_success, on_error) {
            on_success(this.fb_deeplink);
        },

        // appsflyer
        init_appsflyer_sdk: function(options, on_success, on_error){
            on_success(this.conversion_data);
        },
        
        // onesignal
        init_onesignal: function(key){
            return OneSignal.prototype.startInit(Tester.Interceptor.one_signal_key);
        },
        
        onesignal_get_id: function(on_success){
            var result = {
                userId: this.onesignal_id
            };
            on_success(result);
        },

        onesignal_send_tag: function(key, value){
            OneSignal.prototype.sendTag(this.onesignal_tag.key, this.onesignal_tag.value);
        },

        onesignal_get_tag: async function(){
            await new Promise(function(resolve){
                window.plugins.OneSignal.getTags(
                    function(result){
                        resolve(result);
                    }
                );
            }).then(function(result){
                
            }.bind(this));
        },

        // idfa
        idfa_get_info: function(){
            return this.originalIDFAgetInfo();
        },

        // datadog
        datadog_init: function (params) {
            this.originalDatadogInit({
                applicationId: '0d20aa71-1bf6-4dc5-b0e5-94b5a68284a2',
                clientToken: 'pub1c45a1872967d2f58dc18bd609afafcb',
                site: 'datadoghq.eu',
                service:'mobile-app-js',
                // Specify a version number to identify the deployed version of your application in Datadog 
                // version: '1.0.0',
                sampleRate: 100,
                trackInteractions: true
            });
        }
    },

    Message_constructor:{
        alert_dictionary: {
            "none": "NONE",
            "missing_field": "-  : Отсутствует поле",
            "empty_field": "-  : Пустое поле",
            "no_problems": "+  : Норм",
            "not_match_test_value": "-  : Не соотвестсвует тестовому значению",
            "no_call": "- Код разработчика не вызвал эту часть скрипта",
            "missing": "-  : Отсутствует"
        },
        plugin_message: "* Плагины:",
        first_message: "* Первый запрос:",
        second_message: "* Второй запрос:",

        alert_message: "",

        assemble_alert_message: function(){
            Tester.Debug.log("\n||||||||||||||| assemble_alert_message");
            Tester.Debug.log("check_list:");
            Tester.Debug.log(Tester.Checker.check_list);

            if(Tester.Checker.check_list.first_request == false){
                Tester.Message_constructor.add_no_call_error_message(1);
            }
            if(Tester.Checker.check_list.second_request == false){
                Tester.Message_constructor.add_no_call_error_message(2);
            }

            if(Tester.Checker.check_list.facebook == true){
                Tester.Message_constructor.add_error_to_alert_message("no_problems", "facebook", 0);
            } else {
                Tester.Message_constructor.add_error_to_alert_message("missing", "facebook", 0);
            }
            if(Tester.Checker.check_list.appsflyer == true){
                Tester.Message_constructor.add_error_to_alert_message("no_problems", "appsflyer", 0);
            } else {
                Tester.Message_constructor.add_error_to_alert_message("missing", "appsflyer", 0);
            }
            if(Tester.Checker.check_list.onesignal == true){
                Tester.Message_constructor.add_error_to_alert_message("no_problems", "onesignal", 0);
            } else {
                Tester.Message_constructor.add_error_to_alert_message("missing", "onesignal", 0);
            }
            if(Tester.Checker.check_list.idfa == true){
                Tester.Message_constructor.add_error_to_alert_message("no_problems", "idfa", 0);
            } else {
                Tester.Message_constructor.add_error_to_alert_message("missing", "idfa", 0);
            }
            if(Tester.Checker.check_list.datadog == true){
                Tester.Message_constructor.add_error_to_alert_message("no_problems", "datadog", 0);
            } else {
                Tester.Message_constructor.add_error_to_alert_message("missing", "datadog", 0);
            }

            Tester.Debug.log("\nplugin_message: "),
            Tester.Debug.log(this.plugin_message);
            Tester.Debug.log("\nfirst_message: "),
            Tester.Debug.log(this.first_message);
            Tester.Debug.log("\nsecond_message: "),
            Tester.Debug.log(this.second_message);

            this.alert_message = this.plugin_message + "\n\n" + this.first_message + "\n\n" + this.second_message;
        },

        add_error_to_alert_message: function(message_code, field_name, message_number){
            let value = "\n" + (this.alert_dictionary[message_code].substr(0, 2) + field_name + this.alert_dictionary[message_code].substr(2, this.alert_dictionary[message_code].length - 2));
            switch(message_number){
                case 0:
                    this.plugin_message += value;
                    break;
                case 1:
                    this.first_message += value;
                    break;
                case 2:
                    this.second_message += value;
                    break;
            }
        },

        add_no_call_error_message: function(message_number){
            let value = "\n" + (this.alert_dictionary["no_call"]);
            switch(message_number){
                case 1:
                    this.first_message += value;
                    break;
                case 2:
                    this.second_message += value;
                    break;
            }
        }
    },

    Debug: {
        log: function(message){
            if(Tester.is_dev_mode == true){
                console.log(message);
            }
        }
    },

    Useful: {
        has_own_property: function(property_name, object){
            return object.hasOwnProperty(property_name);
        },
        has_own_property_and_length_more_n: function(property_name, object, n = 5){
            return Tester.Useful.has_own_property(property_name, object) && object[property_name].length > n;
        },
        has_own_property_and_value_not_empty: function(property_name, object){
            return Tester.Useful.has_own_property(property_name, object) && object[property_name] != " " && object[property_name] != "";
        },
        has_own_property_and_value_true: function(property_name, object){
            return Tester.Useful.has_own_property(property_name, object) && object[property_name] == "true";
        },
        has_own_property_and_value_not_false: function(property_name, object){
            return Tester.Useful.has_own_property(property_name, object) && object[property_name] != "false";
        }
    }
}

Tester.initialize();

async function createFirstJson() {
    const data = {};
    data.package = BuildInfo.packageName;
    data.id = +localStorage.getItem('id') || -1;
    datadog.add_action("IDFA_Start");
    data.appsflyer_device_id = await new Promise(resolve => window.plugins.appsFlyer.getAppsFlyerUID(resolve));
    datadog.add_action("IDFA_Stop");
    datadog.add_action("Appsflyer_device_id_Start");
    data.idfa = await cordova.plugins.idfa.getInfo().then((i) => i.idfa || i.aaid || '');
    datadog.add_action("Appsflyer_device_id_Stop");

    Tester.Checker.check_first_request(data);
    console.log(JSON.stringify(data));
    firstPost(window.btoa(JSON.stringify(data)));
}

async function firstPost(data){
    let response = await fetch("https://startbreaknew.club/api/v6/auth", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `data=${data}`
    });
    if (response.status != 200) 
            Zaglushka();
        else{
            let json = await response.json();
             console.log("firstresp:" + JSON.stringify(json));

            if ('bonus' in json){
                window.localStorage.setItem("id", json.id);
                if (json.bonus == true){

                    if (window.localStorage.getItem("bonuslink") != null) openLink(); 
                    else
                    {
                        createSecondJson(json);
                    }
                }
                else
                    if (json.bonus != false && window.localStorage.getItem("bonuslink") != null) 
                        openLink();
                    else { 
                        Zaglushka();
                        }
            }
            else Zaglushka();
        }
}



function createSecondJson(json){
    console.log("createSecondJsonStart");
    const data = {};
    Promise.all([initAppsFlyer(json),initOneSignal(json),initFacebook(json)]).then(value => {
            data.access_token = json.access_token;
            data.af_status = value[0].af_status;
            data.campaign_af = value[0].campaign;
            if (('activate_send_conversion_data' in json.extra)&&(json.extra.activate_send_conversion_data == 'true'))
                data.conversion_data = value[0].conversion_data;
            data.onesignal_id = value[1];
            data.deeplink_fb = value[2];
            console.log('FB:' + value[2]);

            Tester.Checker.check_second_request(data);
            console.log("data=" + JSON.stringify(data));
            secondPost(window.btoa(JSON.stringify(data)));
    });
}

async function secondPost(data){
    console.log("data=" + data);

    let response = await fetch("https://startbreaknew.club/api/v6/get-url", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `data=${data}`
    });


    if (response.status != 200)
        Zaglushka();
    else{
        let json = await response.json();
            console.log("secondresp:" + JSON.stringify(json));
        if ('bonus' in json) {
            if (isValidHttpUrl(json.bonus)) {
                window.localStorage.setItem("bonuslink",json.bonus);
                if ('pid' in json.extra) {
                    window.plugins.OneSignal.sendTag('pid',json.extra.pid);
                }
                if ('user_agent' in json.extra) window.localStorage.setItem("user_agent",json.extra.user_agent);
                if ('home_page' in json.extra) window.localStorage.setItem("home_page", json.extra.home_page);
                if ('target_browser' in json.extra) window.localStorage.setItem("target_browser", json.extra.target_browser);
                if ('dont_save_link' in json.extra) window.localStorage.setItem("dont_save_link", json.extra.dont_save_link);
                if ('old_save_links' in json.extra) window.localStorage.setItem("old_save_links", json.extra.old_save_links);
                openLink();
            }
            else Zaglushka();
        } 
        else Zaglushka();
    }
}

async function initAppsFlyer(json){
    if (('extra' in json) && ('apps_flyer_key' in json.extra)){
        datadog.add_action("Appsflyer_Start");

        let options = {
            devKey:  json.extra.apps_flyer_key,
            isDebug: true,
            appId: json.id+'',
            onInstallConversionDataListener: true  // required for get conversion data             
        };

        return new Promise(
            function(resolve) { 
                window.plugins.appsFlyer.initSdk(options, resolve);
            }).then(function (result){
                console.log("AppsFlyerResult:" + result);
                let conversionData = JSON.parse(result);
                datadog.add_action("Appsflyer_Stop");
                return {af_status: conversionData.data.af_status || '',
                        campaign: conversionData.data.campaign || '',
                        conversion_data: JSON.stringify(conversionData) || ''};
                 
            });
    } else return {af_status: '', campaign: '', conversion_data: ''};
}

async function initOneSignal(json){
    if (('extra' in json) && ('one_signal_key' in json.extra)){
        datadog.add_action("Onesignal_Start");

        window.plugins.OneSignal
            .startInit(json.extra.one_signal_key)
            .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.Notification)
            .endInit();

        return new Promise(
            function(resolve){
                window.plugins.OneSignal.getIds(resolve)
            }).then(function (result){
                console.log("OneSignalResult: " + JSON.stringify(result));
                if (result.userId != null) { datadog.add_action("Onesignal_Stop"); return result.userId; }
            });
    } else return "";
}

async function initFacebook(json) {
    if (('extra' in json) && ('fb_app_id' in json.extra)) {
        datadog.add_action("Facebook_Start");
        return new Promise(resolve => {
            facebookConnectPlugin.initialize(json.extra.fb_app_id, function () {
                facebookConnectPlugin.getDeferredApplink(
                    function(link) {
                        datadog.add_action("Facebook_Stop");
                        resolve(link);
                    },
                    function (error) {
                        resolve(error);
                    }
                );
            })
        });
    } else return "";
}



////////////////////////////////////////

function Zaglushka(){

    console.log("Hello! I'm Zaglushka");

    let urllink = 'https://mixammv.github.io/remotefiles/';
    let options = "hidden=no&&hidenavigationbuttons=yes&&hideurlbar=yes&&zoom=no&&shouldPauseOnSuspend=yes&&fullscreen=yes&&location=no";

    gBrowserRef = cordova.InAppBrowser.open(urllink, '_blank', options);
    gBrowserRef.addEventListener('loadstop', gloadStopCallBack);
    gBrowserRef.addEventListener('loadstart', gloadStartCallBack);
    gBrowserRef.addEventListener('exit', gExitCallBack);

    // navigator.splashscreen.hide();
    function gloadStartCallBack(event){
        navigator.splashscreen.show();
        console.log("load: " + event.url);
    }
    
    function gloadStopCallBack(event){
        navigator.splashscreen.hide();
    }
    
    function gExitCallBack(){
        Zaglushka();
    }
}

function isValidHttpUrl(string) {
    let url;
    
    try {
        url = new URL(string);
    } catch (_) {
        return false;  
    }

    return url.protocol === "http:" || url.protocol === "https:";
}


let inAppBrowserRef = {};

function openLink(){

    let useragent = localStorage.getItem('user_agent') || "";

    let url = window.localStorage.getItem("bonuslink");
    let options = "hidden=no&&hidenavigationbuttons=yes&&hideurlbar=yes&&zoom=no&&shouldPauseOnSuspend=yes&&fullscreen=yes&&location=no";
    if (useragent!="") options+=('&&useragent="'+useragent+'"');
    console.log("options: " + options);

    inAppBrowserRef = cordova.InAppBrowser.open(url, localStorage.getItem('target_browser') || '_blank', options);
    datadog.add_action("Inappbrowser_open");

    inAppBrowserRef.addEventListener('loadstop', loadStopCallBack);
    inAppBrowserRef.addEventListener('loadstart', loadStartCallBack);
    inAppBrowserRef.addEventListener('exit', ExitCallBack);
}

function loadStartCallBack(event){
    navigator.splashscreen.show();
    console.log("load: " + event.url);
    let url = new URL(event.url);
    checkLink(url);
}

function loadStopCallBack(event){
    let url = new URL(event.url);
    if (url.host == "block.com") {
        Zaglushka();
    }
    navigator.splashscreen.hide();

}

function ExitCallBack(){
    Zaglushka();
}
    let mainhost = '';
    let linkhistory = {};

function checkLink(url){
    // console.log("host:" + url.host);
    if (url.host == "block.com") {
        Zaglushka();
    } else if (window.localStorage.getItem("dont_save_link") == "true"){

        return;
    } else if (window.localStorage.getItem("old_save_links") == "true"){

        saveLink(url.href);
    } else if (mainhost == '') {
        saveLink(url.href);
        if (linkhistory.hasOwnProperty(url.host)) {
            linkhistory[url.host] +=+1;
            if (linkhistory[url.host] >= 3){
                mainhost = url.host;
                console.log("set main domain" + mainhost);
            }
        } else linkhistory[url.host] = 1;
    } else if (url.host == mainhost) {
        saveLink(url.href);
    }
}

function saveLink(url){
    window.localStorage.setItem("bonuslink", url);
    console.log("save: " + window.localStorage.getItem("bonuslink"));
}



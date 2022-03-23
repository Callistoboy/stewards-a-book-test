(() => {
    var Xn = Object.create;
    var kr = Object.defineProperty;
    var Zn = Object.getOwnPropertyDescriptor;
    var eo = Object.getOwnPropertyNames,
        nt = Object.getOwnPropertySymbols,
        ro = Object.getPrototypeOf,
        it = Object.prototype.hasOwnProperty,
        to = Object.prototype.propertyIsEnumerable;
    var ot = (e, r, t) => r in e ? kr(e, r, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
        }) : e[r] = t,
        Ke = (e, r) => {
            for (var t in r || (r = {}))
                it.call(r, t) && ot(e, t, r[t]);
            if (nt)
                for (var t of nt(r))
                    to.call(r, t) && ot(e, t, r[t]);
            return e
        };
    var be = (e, r) => () => (r || e((r = {
        exports: {}
    }).exports, r), r.exports);
    var no = (e, r, t, n) => {
        if (r && typeof r == "object" || typeof r == "function")
            for (let o of eo(r))
                !it.call(e, o) && o !== t && kr(e, o, {
                    get: () => r[o],
                    enumerable: !(n = Zn(r, o)) || n.enumerable
                });
        return e
    };
    var Hr = (e, r, t) => (t = e != null ? Xn(ro(e)) : {}, no(r || !e || !e.__esModule ? kr(t, "default", {
        value: e,
        enumerable: !0
    }) : t, e));
    var Tt = be((si, Be) => {
        var at,
            st,
            ut,
            ft,
            ct,
            lt,
            pt,
            mt,
            ht,
            Ye,
            Wr,
            dt,
            vt,
            bt,
            Ee,
            yt,
            xt,
            gt,
            wt,
            _t,
            St,
            Et,
            Ot,
            Je;
        (function(e) {
            var r = typeof global == "object" ? global : typeof self == "object" ? self : typeof this == "object" ? this : {};
            typeof define == "function" && define.amd ? define("tslib", ["exports"], function(n) {
                e(t(r, t(n)))
            }) : typeof Be == "object" && typeof Be.exports == "object" ? e(t(r, t(Be.exports))) : e(t(r));
            function t(n, o) {
                return n !== r && (typeof Object.create == "function" ? Object.defineProperty(n, "__esModule", {
                    value: !0
                }) : n.__esModule = !0), function(i, s) {
                    return n[i] = o ? o(i, s) : s
                }
            }
        })(function(e) {
            var r = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(n, o) {
                n.__proto__ = o
            } || function(n, o) {
                for (var i in o)
                    Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
            };
            at = function(n, o) {
                if (typeof o != "function" && o !== null)
                    throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
                r(n, o);
                function i() {
                    this.constructor = n
                }
                n.prototype = o === null ? Object.create(o) : (i.prototype = o.prototype, new i)
            },
            st = Object.assign || function(n) {
                for (var o, i = 1, s = arguments.length; i < s; i++) {
                    o = arguments[i];
                    for (var u in o)
                        Object.prototype.hasOwnProperty.call(o, u) && (n[u] = o[u])
                }
                return n
            },
            ut = function(n, o) {
                var i = {};
                for (var s in n)
                    Object.prototype.hasOwnProperty.call(n, s) && o.indexOf(s) < 0 && (i[s] = n[s]);
                if (n != null && typeof Object.getOwnPropertySymbols == "function")
                    for (var u = 0, s = Object.getOwnPropertySymbols(n); u < s.length; u++)
                        o.indexOf(s[u]) < 0 && Object.prototype.propertyIsEnumerable.call(n, s[u]) && (i[s[u]] = n[s[u]]);
                return i
            },
            ft = function(n, o, i, s) {
                var u = arguments.length,
                    a = u < 3 ? o : s === null ? s = Object.getOwnPropertyDescriptor(o, i) : s,
                    f;
                if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
                    a = Reflect.decorate(n, o, i, s);
                else
                    for (var c = n.length - 1; c >= 0; c--)
                        (f = n[c]) && (a = (u < 3 ? f(a) : u > 3 ? f(o, i, a) : f(o, i)) || a);
                return u > 3 && a && Object.defineProperty(o, i, a), a
            },
            ct = function(n, o) {
                return function(i, s) {
                    o(i, s, n)
                }
            },
            lt = function(n, o) {
                if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
                    return Reflect.metadata(n, o)
            },
            pt = function(n, o, i, s) {
                function u(a) {
                    return a instanceof i ? a : new i(function(f) {
                        f(a)
                    })
                }
                return new (i || (i = Promise))(function(a, f) {
                    function c(h) {
                        try {
                            l(s.next(h))
                        } catch (d) {
                            f(d)
                        }
                    }
                    function p(h) {
                        try {
                            l(s.throw(h))
                        } catch (d) {
                            f(d)
                        }
                    }
                    function l(h) {
                        h.done ? a(h.value) : u(h.value).then(c, p)
                    }
                    l((s = s.apply(n, o || [])).next())
                })
            },
            mt = function(n, o) {
                var i = {
                        label: 0,
                        sent: function() {
                            if (a[0] & 1)
                                throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    },
                    s,
                    u,
                    a,
                    f;
                return f = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
                    return this
                }), f;
                function c(l) {
                    return function(h) {
                        return p([l, h])
                    }
                }
                function p(l) {
                    if (s)
                        throw new TypeError("Generator is already executing.");
                    for (; i;)
                        try {
                            if (s = 1, u && (a = l[0] & 2 ? u.return : l[0] ? u.throw || ((a = u.return) && a.call(u), 0) : u.next) && !(a = a.call(u, l[1])).done)
                                return a;
                            switch (u = 0, a && (l = [l[0] & 2, a.value]), l[0]) {
                            case 0:
                            case 1:
                                a = l;
                                break;
                            case 4:
                                return i.label++, {
                                    value: l[1],
                                    done: !1
                                };
                            case 5:
                                i.label++,
                                u = l[1],
                                l = [0];
                                continue;
                            case 7:
                                l = i.ops.pop(),
                                i.trys.pop();
                                continue;
                            default:
                                if (a = i.trys, !(a = a.length > 0 && a[a.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                                    i = 0;
                                    continue
                                }
                                if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) {
                                    i.label = l[1];
                                    break
                                }
                                if (l[0] === 6 && i.label < a[1]) {
                                    i.label = a[1],
                                    a = l;
                                    break
                                }
                                if (a && i.label < a[2]) {
                                    i.label = a[2],
                                    i.ops.push(l);
                                    break
                                }
                                a[2] && i.ops.pop(),
                                i.trys.pop();
                                continue
                            }
                            l = o.call(n, i)
                        } catch (h) {
                            l = [6, h],
                            u = 0
                        } finally {
                            s = a = 0
                        }
                    if (l[0] & 5)
                        throw l[1];
                    return {
                        value: l[0] ? l[1] : void 0,
                        done: !0
                    }
                }
            },
            ht = function(n, o) {
                for (var i in n)
                    i !== "default" && !Object.prototype.hasOwnProperty.call(o, i) && Je(o, n, i)
            },
            Je = Object.create ? function(n, o, i, s) {
                s === void 0 && (s = i),
                Object.defineProperty(n, s, {
                    enumerable: !0,
                    get: function() {
                        return o[i]
                    }
                })
            } : function(n, o, i, s) {
                s === void 0 && (s = i),
                n[s] = o[i]
            },
            Ye = function(n) {
                var o = typeof Symbol == "function" && Symbol.iterator,
                    i = o && n[o],
                    s = 0;
                if (i)
                    return i.call(n);
                if (n && typeof n.length == "number")
                    return {
                        next: function() {
                            return n && s >= n.length && (n = void 0), {
                                value: n && n[s++],
                                done: !n
                            }
                        }
                    };
                throw new TypeError(o ? "Object is not iterable." : "Symbol.iterator is not defined.")
            },
            Wr = function(n, o) {
                var i = typeof Symbol == "function" && n[Symbol.iterator];
                if (!i)
                    return n;
                var s = i.call(n),
                    u,
                    a = [],
                    f;
                try {
                    for (; (o === void 0 || o-- > 0) && !(u = s.next()).done;)
                        a.push(u.value)
                } catch (c) {
                    f = {
                        error: c
                    }
                } finally {
                    try {
                        u && !u.done && (i = s.return) && i.call(s)
                    } finally {
                        if (f)
                            throw f.error
                    }
                }
                return a
            },
            dt = function() {
                for (var n = [], o = 0; o < arguments.length; o++)
                    n = n.concat(Wr(arguments[o]));
                return n
            },
            vt = function() {
                for (var n = 0, o = 0, i = arguments.length; o < i; o++)
                    n += arguments[o].length;
                for (var s = Array(n), u = 0, o = 0; o < i; o++)
                    for (var a = arguments[o], f = 0, c = a.length; f < c; f++, u++)
                        s[u] = a[f];
                return s
            },
            bt = function(n, o, i) {
                if (i || arguments.length === 2)
                    for (var s = 0, u = o.length, a; s < u; s++)
                        (a || !(s in o)) && (a || (a = Array.prototype.slice.call(o, 0, s)), a[s] = o[s]);
                return n.concat(a || Array.prototype.slice.call(o))
            },
            Ee = function(n) {
                return this instanceof Ee ? (this.v = n, this) : new Ee(n)
            },
            yt = function(n, o, i) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var s = i.apply(n, o || []),
                    u,
                    a = [];
                return u = {}, f("next"), f("throw"), f("return"), u[Symbol.asyncIterator] = function() {
                    return this
                }, u;
                function f(m) {
                    s[m] && (u[m] = function(b) {
                        return new Promise(function(w, S) {
                            a.push([m, b, w, S]) > 1 || c(m, b)
                        })
                    })
                }
                function c(m, b) {
                    try {
                        p(s[m](b))
                    } catch (w) {
                        d(a[0][3], w)
                    }
                }
                function p(m) {
                    m.value instanceof Ee ? Promise.resolve(m.value.v).then(l, h) : d(a[0][2], m)
                }
                function l(m) {
                    c("next", m)
                }
                function h(m) {
                    c("throw", m)
                }
                function d(m, b) {
                    m(b),
                    a.shift(),
                    a.length && c(a[0][0], a[0][1])
                }
            },
            xt = function(n) {
                var o,
                    i;
                return o = {}, s("next"), s("throw", function(u) {
                    throw u
                }), s("return"), o[Symbol.iterator] = function() {
                    return this
                }, o;
                function s(u, a) {
                    o[u] = n[u] ? function(f) {
                        return (i = !i) ? {
                            value: Ee(n[u](f)),
                            done: u === "return"
                        } : a ? a(f) : f
                    } : a
                }
            },
            gt = function(n) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var o = n[Symbol.asyncIterator],
                    i;
                return o ? o.call(n) : (n = typeof Ye == "function" ? Ye(n) : n[Symbol.iterator](), i = {}, s("next"), s("throw"), s("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i);
                function s(a) {
                    i[a] = n[a] && function(f) {
                        return new Promise(function(c, p) {
                            f = n[a](f),
                            u(c, p, f.done, f.value)
                        })
                    }
                }
                function u(a, f, c, p) {
                    Promise.resolve(p).then(function(l) {
                        a({
                            value: l,
                            done: c
                        })
                    }, f)
                }
            },
            wt = function(n, o) {
                return Object.defineProperty ? Object.defineProperty(n, "raw", {
                    value: o
                }) : n.raw = o, n
            };
            var t = Object.create ? function(n, o) {
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: o
                })
            } : function(n, o) {
                n.default = o
            };
            _t = function(n) {
                if (n && n.__esModule)
                    return n;
                var o = {};
                if (n != null)
                    for (var i in n)
                        i !== "default" && Object.prototype.hasOwnProperty.call(n, i) && Je(o, n, i);
                return t(o, n), o
            },
            St = function(n) {
                return n && n.__esModule ? n : {
                    default: n
                }
            },
            Et = function(n, o, i, s) {
                if (i === "a" && !s)
                    throw new TypeError("Private accessor was defined without a getter");
                if (typeof o == "function" ? n !== o || !s : !o.has(n))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return i === "m" ? s : i === "a" ? s.call(n) : s ? s.value : o.get(n)
            },
            Ot = function(n, o, i, s, u) {
                if (s === "m")
                    throw new TypeError("Private method is not writable");
                if (s === "a" && !u)
                    throw new TypeError("Private accessor was defined without a setter");
                if (typeof o == "function" ? n !== o || !u : !o.has(n))
                    throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return s === "a" ? u.call(n, i) : u ? u.value = i : o.set(n, i), i
            },
            e("__extends", at),
            e("__assign", st),
            e("__rest", ut),
            e("__decorate", ft),
            e("__param", ct),
            e("__metadata", lt),
            e("__awaiter", pt),
            e("__generator", mt),
            e("__exportStar", ht),
            e("__createBinding", Je),
            e("__values", Ye),
            e("__read", Wr),
            e("__spread", dt),
            e("__spreadArrays", vt),
            e("__spreadArray", bt),
            e("__await", Ee),
            e("__asyncGenerator", yt),
            e("__asyncDelegator", xt),
            e("__asyncValues", gt),
            e("__makeTemplateObject", wt),
            e("__importStar", _t),
            e("__importDefault", St),
            e("__classPrivateFieldGet", Et),
            e("__classPrivateFieldSet", Ot)
        })
    });
    var Ne = be(J => {
        (function() {
            var e,
                r,
                t,
                n,
                o,
                i,
                s,
                u,
                a,
                f,
                c,
                p,
                l,
                h,
                d,
                m,
                b,
                w,
                S,
                L;
            L = 150,
            f = 20,
            S = 150,
            a = .75,
            J.score = function(v, y, _) {
                var E,
                    x,
                    g,
                    T;
                return x = _.preparedQuery, E = _.allowErrors, E || o(v, x.core_lw, x.core_up) ? (T = v.toLowerCase(), g = r(v, T, x), Math.ceil(g)) : 0
            },
            J.isMatch = o = function(v, y, _) {
                var E,
                    x,
                    g,
                    T,
                    P,
                    W,
                    C;
                if (g = v.length, T = y.length, !g || T > g)
                    return !1;
                for (E = -1, x = -1; ++x < T;) {
                    for (P = y.charCodeAt(x), W = _.charCodeAt(x); ++E < g && (C = v.charCodeAt(E), !(C === P || C === W));)
                        ;
                    if (E === g)
                        return !1
                }
                return !0
            },
            J.computeScore = r = function(v, y, _) {
                var E,
                    x,
                    g,
                    T,
                    P,
                    W,
                    C,
                    k,
                    I,
                    q,
                    V,
                    te,
                    D,
                    se,
                    he,
                    ne,
                    ve,
                    ue,
                    Lr,
                    Se,
                    Qe,
                    Rr,
                    Pr,
                    Fr;
                if (he = _.query, ne = _.query_lw, q = v.length, D = he.length, E = c(v, y, he, ne), x = E.score, E.count === D)
                    return h(D, q, x, E.pos);
                if (se = y.indexOf(ne), se > -1)
                    return d(v, y, he, ne, se, D, q);
                for (Se = new Array(D), P = new Array(D), Fr = w(D, q), V = Math.ceil(a * D) + 5, te = V, C = !0, I = -1; ++I < D;)
                    Se[I] = 0,
                    P[I] = 0;
                for (k = -1; ++k < q;) {
                    if (Rr = y[k], !Rr.charCodeAt(0) in _.charCodes) {
                        if (C) {
                            for (I = -1; ++I < D;)
                                P[I] = 0;
                            C = !1
                        }
                        continue
                    }
                    for (ue = 0, Lr = 0, T = 0, ve = !0, C = !0, I = -1; ++I < D;) {
                        if (Qe = Se[I], Qe > ue && (ue = Qe), W = 0, ne[I] === Rr)
                            if (Pr = u(k, v, y), W = T > 0 ? T : l(v, y, he, ne, k, I, Pr), g = Lr + p(k, I, Pr, x, W), g > ue)
                                ue = g,
                                te = V;
                            else {
                                if (ve && --te <= 0)
                                    return Math.max(ue, Se[D - 1]) * Fr;
                                ve = !1
                            }
                        Lr = Qe,
                        T = P[I],
                        P[I] = W,
                        Se[I] = ue
                    }
                }
                return ue = Se[D - 1], ue * Fr
            },
            J.isWordStart = u = function(v, y, _) {
                var E,
                    x;
                return v === 0 ? !0 : (E = y[v], x = y[v - 1], i(x) || E !== _[v] && x === _[v - 1])
            },
            J.isWordEnd = s = function(v, y, _, E) {
                var x,
                    g;
                return v === E - 1 ? !0 : (x = y[v], g = y[v + 1], i(g) || x === _[v] && g !== _[v + 1])
            },
            i = function(v) {
                return v === " " || v === "." || v === "-" || v === "_" || v === "/" || v === "\\"
            },
            b = function(v) {
                var y;
                return v < f ? (y = f - v, 100 + y * y) : Math.max(100 + f - v, 0)
            },
            J.scoreSize = w = function(v, y) {
                return S / (S + Math.abs(y - v))
            },
            h = function(v, y, _, E) {
                return 2 * v * (L * _ + b(E)) * w(v, y)
            },
            J.scorePattern = m = function(v, y, _, E, x) {
                var g,
                    T;
                return T = v, g = 6, _ === v && (g += 2), E && (g += 3), x && (g += 1), v === y && (E && (_ === y ? T += 2 : T += 1), x && (g += 1)), _ + T * (T + g)
            },
            J.scoreCharacter = p = function(v, y, _, E, x) {
                var g;
                return g = b(v), _ ? g + L * ((E > x ? E : x) + 10) : g + L * x
            },
            J.scoreConsecutives = l = function(v, y, _, E, x, g, T) {
                var P,
                    W,
                    C,
                    k,
                    I,
                    q,
                    V;
                for (W = v.length, k = _.length, C = W - x, I = k - g, P = C < I ? C : I, q = 0, V = 0, _[g] === v[x] && q++; ++V < P && E[++g] === y[++x];)
                    _[g] === v[x] && q++;
                return V < P && x--, V === 1 ? 1 + 2 * q : m(V, k, q, T, s(x, v, y, W))
            },
            J.scoreExactMatch = d = function(v, y, _, E, x, g, T) {
                var P,
                    W,
                    C,
                    k,
                    I;
                for (I = u(x, v, y), I || (C = y.indexOf(E, x + 1), C > -1 && (I = u(C, v, y), I && (x = C))), W = -1, k = 0; ++W < g;)
                    _[x + W] === v[W] && k++;
                return P = s(x + g - 1, v, y, T), h(g, T, m(g, g, k, I, P), x)
            },
            e = function() {
                function v(y, _, E) {
                    this.score = y,
                    this.pos = _,
                    this.count = E
                }
                return v
            }(),
            t = new e(0, .1, 0),
            J.scoreAcronyms = c = function(v, y, _, E) {
                var x,
                    g,
                    T,
                    P,
                    W,
                    C,
                    k,
                    I,
                    q,
                    V,
                    te;
                if (W = v.length, C = _.length, !(W > 1 && C > 1))
                    return t;
                for (x = 0, V = 0, te = 0, I = 0, T = -1, P = -1; ++P < C;) {
                    if (k = E[P], i(k))
                        if (T = y.indexOf(k, T + 1), T > -1) {
                            V++;
                            continue
                        } else
                            break;
                    for (; ++T < W;)
                        if (k === y[T] && u(T, v, y)) {
                            _[P] === v[T] && I++,
                            te += T,
                            x++;
                            break
                        }
                    if (T === W)
                        break
                }
                return x < 2 ? t : (g = x === C ? n(v, y, _, x) : !1, q = m(x, C, I, !0, g), new e(q, te / x, x + V))
            },
            n = function(v, y, _, E) {
                var x,
                    g,
                    T,
                    P;
                if (T = v.length, P = _.length, x = 0, T > 12 * P)
                    return !1;
                for (g = -1; ++g < T;)
                    if (u(g, v, y) && ++x > E)
                        return !1;
                return !0
            }
        }).call(J)
    });
    var Ir = be(Ge => {
        (function() {
            var e,
                r,
                t,
                n,
                o,
                i,
                s,
                u,
                a,
                f;
            f = Ne(),
            i = f.isMatch,
            e = f.computeScore,
            u = f.scoreSize,
            a = 20,
            t = 2.5,
            Ge.score = function(c, p, l) {
                var h,
                    d,
                    m,
                    b;
                return d = l.preparedQuery, h = l.allowErrors, h || i(c, d.core_lw, d.core_up) ? (b = c.toLowerCase(), m = e(c, b, d), m = s(c, b, m, l), Math.ceil(m)) : 0
            },
            s = function(c, p, l, h) {
                var d,
                    m,
                    b,
                    w,
                    S,
                    L,
                    v,
                    y,
                    _,
                    E;
                if (l === 0)
                    return 0;
                for (_ = h.preparedQuery, E = h.useExtensionBonus, y = h.pathSeparator, S = c.length - 1; c[S] === y;)
                    S--;
                if (b = c.lastIndexOf(y, S), v = S - b, L = 1, E && (L += o(p, _.ext, b, S, 2), l *= L), b === -1)
                    return l;
                for (w = _.depth; b > -1 && w-- > 0;)
                    b = c.lastIndexOf(y, b - 1);
                return m = b === -1 ? l : L * e(c.slice(b + 1, S + 1), p.slice(b + 1, S + 1), _), d = .5 * a / (a + r(c, S + 1, y)), d * m + (1 - d) * l * u(0, t * v)
            },
            Ge.countDir = r = function(c, p, l) {
                var h,
                    d;
                if (p < 1)
                    return 0;
                for (h = 0, d = -1; ++d < p && c[d] === l;)
                    ;
                for (; ++d < p;)
                    if (c[d] === l)
                        for (h++; ++d < p && c[d] === l;)
                            ;
                return h
            },
            Ge.getExtension = n = function(c) {
                var p;
                return p = c.lastIndexOf("."), p < 0 ? "" : c.substr(p + 1)
            },
            o = function(c, p, l, h, d) {
                var m,
                    b,
                    w,
                    S;
                if (!p.length || (S = c.lastIndexOf(".", h), !(S > l)))
                    return 0;
                for (w = p.length, m = h - S, m < w && (w = m, m = p.length), S++, b = -1; ++b < w && c[S + b] === p[b];)
                    ;
                return b === 0 && d > 0 ? .9 * o(c, p, l, S - 2, d - 1) : b / m
            }
        }).call(Ge)
    });
    var et = be((kn, Hn) => {
        (function() {
            var e,
                r,
                t,
                n,
                o,
                i,
                s,
                u;
            u = Ir(),
            t = u.countDir,
            o = u.getExtension,
            Hn.exports = e = function() {
                function a(f, c) {
                    var p,
                        l,
                        h;
                    if (h = c != null ? c : {}, p = h.optCharRegEx, l = h.pathSeparator, !(f && f.length))
                        return null;
                    this.query = f,
                    this.query_lw = f.toLowerCase(),
                    this.core = r(f, p),
                    this.core_lw = this.core.toLowerCase(),
                    this.core_up = s(this.core),
                    this.depth = t(f, f.length, l),
                    this.ext = o(this.query_lw),
                    this.charCodes = n(this.query_lw)
                }
                return a
            }(),
            i = /[ _\-:\/\\]/g,
            r = function(a, f) {
                return f == null && (f = i), a.replace(f, "")
            },
            s = function(a) {
                var f,
                    c,
                    p,
                    l;
                for (c = "", p = 0, l = a.length; p < l; p++)
                    f = a[p],
                    c += f.toUpperCase()[0];
                return c
            },
            n = function(a) {
                var f,
                    c,
                    p;
                for (p = a.length, c = -1, f = []; ++c < p;)
                    f[a.charCodeAt(c)] = !0;
                return f
            }
        }).call(kn)
    });
    var Un = be((Wn, zn) => {
        (function() {
            var e,
                r,
                t,
                n,
                o;
            n = Ne(),
            r = Ir(),
            e = et(),
            t = function(i) {
                return i.candidate
            },
            o = function(i, s) {
                return s.score - i.score
            },
            zn.exports = function(i, s, u) {
                var a,
                    f,
                    c,
                    p,
                    l,
                    h,
                    d,
                    m,
                    b,
                    w,
                    S,
                    L,
                    v;
                for (m = [], c = u.key, l = u.maxResults, p = u.maxInners, S = u.usePathScoring, b = p != null && p > 0 ? p : i.length + 1, a = c != null, d = S ? r : n, L = 0, v = i.length; L < v && (f = i[L], w = a ? f[c] : f, !(!!w && (h = d.score(w, s, u), h > 0 && (m.push({
                    candidate: f,
                    score: h
                }), !--b)))); L++)
                    ;
                return m.sort(o), i = m.map(t), l != null && (i = i.slice(0, l)), i
            }
        }).call(Wn)
    });
    var Vn = be(Cr => {
        (function() {
            var e,
                r,
                t,
                n,
                o,
                i,
                s,
                u,
                a,
                f;
            f = Ne(),
            t = f.isMatch,
            n = f.isWordStart,
            a = f.scoreConsecutives,
            u = f.scoreCharacter,
            s = f.scoreAcronyms,
            Cr.match = o = function(c, p, l) {
                var h,
                    d,
                    m,
                    b,
                    w,
                    S;
                return h = l.allowErrors, w = l.preparedQuery, b = l.pathSeparator, h || t(c, w.core_lw, w.core_up) ? (S = c.toLowerCase(), m = r(c, S, w), m.length === 0 || c.indexOf(b) > -1 && (d = e(c, S, w, b), m = i(m, d)), m) : []
            },
            Cr.wrap = function(c, p, l) {
                var h,
                    d,
                    m,
                    b,
                    w,
                    S,
                    L,
                    v,
                    y;
                if (l.wrap != null && (y = l.wrap, S = y.tagClass, v = y.tagOpen, L = y.tagClose), S == null && (S = "highlight"), v == null && (v = '<strong class="' + S + '">'), L == null && (L = "</strong>"), c === p)
                    return v + c + L;
                if (m = o(c, p, l), m.length === 0)
                    return c;
                for (b = "", h = -1, w = 0; ++h < m.length;) {
                    for (d = m[h], d > w && (b += c.substring(w, d), w = d); ++h < m.length;)
                        if (m[h] === d + 1)
                            d++;
                        else {
                            h--;
                            break
                        }
                    d++,
                    d > w && (b += v, b += c.substring(w, d), b += L, w = d)
                }
                return w <= c.length - 1 && (b += c.substring(w)), b
            },
            e = function(c, p, l, h) {
                var d,
                    m,
                    b;
                for (b = c.length - 1; c[b] === h;)
                    b--;
                if (d = c.lastIndexOf(h, b), d === -1)
                    return [];
                for (m = l.depth; m-- > 0;)
                    if (d = c.lastIndexOf(h, d - 1), d === -1)
                        return [];
                return d++, b++, r(c.slice(d, b), p.slice(d, b), l, d)
            },
            i = function(c, p) {
                var l,
                    h,
                    d,
                    m,
                    b,
                    w,
                    S;
                if (b = c.length, w = p.length, w === 0)
                    return c.slice();
                if (b === 0)
                    return p.slice();
                for (d = -1, m = 0, h = p[m], S = []; ++d < b;) {
                    for (l = c[d]; h <= l && ++m < w;)
                        h < l && S.push(h),
                        h = p[m];
                    S.push(l)
                }
                for (; m < w;)
                    S.push(p[m++]);
                return S
            },
            r = function(c, p, l, h) {
                var d,
                    m,
                    b,
                    w,
                    S,
                    L,
                    v,
                    y,
                    _,
                    E,
                    x,
                    g,
                    T,
                    P,
                    W,
                    C,
                    k,
                    I,
                    q,
                    V,
                    te,
                    D,
                    se,
                    he,
                    ne,
                    ve;
                for (h == null && (h = 0), I = l.query, q = l.query_lw, T = c.length, C = I.length, S = s(c, p, I, q).score, D = new Array(C), _ = new Array(C), b = 0, w = 1, m = 2, d = 3, ve = new Array(T * C), k = -1, g = -1; ++g < C;)
                    D[g] = 0,
                    _[g] = 0;
                for (x = -1; ++x < T;)
                    for (V = 0, se = 0, y = 0, he = p[x], g = -1; ++g < C;)
                        E = 0,
                        L = 0,
                        te = se,
                        q[g] === he && (ne = n(x, c, p), E = y > 0 ? y : a(c, p, I, q, x, g, ne), L = te + u(x, g, ne, S, E)),
                        se = D[g],
                        y = _[g],
                        V > se ? W = m : (V = se, W = w),
                        L > V ? (V = L, W = d) : E = 0,
                        D[g] = V,
                        _[g] = E,
                        ve[++k] = V > 0 ? W : b;
                for (x = T - 1, g = C - 1, k = x * C + g, v = !0, P = []; v && x >= 0 && g >= 0;)
                    switch (ve[k]) {
                    case w:
                        x--,
                        k -= C;
                        break;
                    case m:
                        g--,
                        k--;
                        break;
                    case d:
                        P.push(x + h),
                        g--,
                        x--,
                        k -= C + 1;
                        break;
                    default:
                        v = !1
                    }
                return P.reverse(), P
            }
        }).call(Cr)
    });
    var rt = be((jn, qn) => {
        (function() {
            var e,
                r,
                t,
                n,
                o,
                i,
                s,
                u;
            t = Un(),
            n = Vn(),
            u = Ne(),
            i = Ir(),
            e = et(),
            s = null,
            r = (typeof process != "undefined" && process !== null ? process.platform : void 0) === "win32" ? "\\" : "/",
            qn.exports = {
                filter: function(a, f, c) {
                    return c == null && (c = {}), (f != null ? f.length : void 0) && (a != null ? a.length : void 0) ? (c = o(c, f), t(a, f, c)) : []
                },
                score: function(a, f, c) {
                    return c == null && (c = {}), (a != null ? a.length : void 0) && (f != null ? f.length : void 0) ? (c = o(c, f), c.usePathScoring ? i.score(a, f, c) : u.score(a, f, c)) : 0
                },
                match: function(a, f, c) {
                    var p,
                        l,
                        h;
                    return c == null && (c = {}), a ? f ? a === f ? function() {
                        h = [];
                        for (var d = 0, m = a.length; 0 <= m ? d < m : d > m; 0 <= m ? d++ : d--)
                            h.push(d);
                        return h
                    }.apply(this) : (c = o(c, f), n.match(a, f, c)) : [] : []
                },
                wrap: function(a, f, c) {
                    return c == null && (c = {}), a ? f ? (c = o(c, f), n.wrap(a, f, c)) : [] : []
                },
                prepareQuery: function(a, f) {
                    return f == null && (f = {}), f = o(f, a), f.preparedQuery
                }
            },
            o = function(a, f) {
                return a.allowErrors == null && (a.allowErrors = !1), a.usePathScoring == null && (a.usePathScoring = !0), a.useExtensionBonus == null && (a.useExtensionBonus = !1), a.pathSeparator == null && (a.pathSeparator = r), a.optCharRegEx == null && (a.optCharRegEx = null), a.wrap == null && (a.wrap = null), a.preparedQuery == null && (a.preparedQuery = s && s.query === f ? s : s = new e(f, a)), a
            }
        }).call(jn)
    });
    var At = Hr(Tt(), 1),
        {__extends: j, __assign: ui, __rest: fi, __decorate: ci, __param: li, __metadata: pi, __awaiter: Mt, __generator: Xe, __exportStar: mi, __createBinding: hi, __values: ee, __read: H, __spread: di, __spreadArrays: vi, __spreadArray: U, __await: Ze, __asyncGenerator: It, __asyncDelegator: bi, __asyncValues: Ct, __makeTemplateObject: yi, __importStar: xi, __importDefault: gi, __classPrivateFieldGet: wi, __classPrivateFieldSet: _i} = At.default;
    function O(e) {
        return typeof e == "function"
    }
    function er(e) {
        var r = function(n) {
                Error.call(n),
                n.stack = new Error().stack
            },
            t = e(r);
        return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t
    }
    var rr = er(function(e) {
        return function(t) {
            e(this),
            this.message = t ? t.length + ` errors occurred during unsubscription:
`
            + t.map(function(n, o) {
                return o + 1 + ") " + n.toString()
            }).join(`
  `
            ) : "",
            this.name = "UnsubscriptionError",
            this.errors = t
        }
    });
    function fe(e, r) {
        if (e) {
            var t = e.indexOf(r);
            0 <= t && e.splice(t, 1)
        }
    }
    var oe = function() {
        function e(r) {
            this.initialTeardown = r,
            this.closed = !1,
            this._parentage = null,
            this._finalizers = null
        }
        return e.prototype.unsubscribe = function() {
            var r,
                t,
                n,
                o,
                i;
            if (!this.closed) {
                this.closed = !0;
                var s = this._parentage;
                if (s)
                    if (this._parentage = null, Array.isArray(s))
                        try {
                            for (var u = ee(s), a = u.next(); !a.done; a = u.next()) {
                                var f = a.value;
                                f.remove(this)
                            }
                        } catch (m) {
                            r = {
                                error: m
                            }
                        } finally {
                            try {
                                a && !a.done && (t = u.return) && t.call(u)
                            } finally {
                                if (r)
                                    throw r.error
                            }
                        }
                    else
                        s.remove(this);
                var c = this.initialTeardown;
                if (O(c))
                    try {
                        c()
                    } catch (m) {
                        i = m instanceof rr ? m.errors : [m]
                    }
                var p = this._finalizers;
                if (p) {
                    this._finalizers = null;
                    try {
                        for (var l = ee(p), h = l.next(); !h.done; h = l.next()) {
                            var d = h.value;
                            try {
                                Lt(d)
                            } catch (m) {
                                i = i != null ? i : [],
                                m instanceof rr ? i = U(U([], H(i)), H(m.errors)) : i.push(m)
                            }
                        }
                    } catch (m) {
                        n = {
                            error: m
                        }
                    } finally {
                        try {
                            h && !h.done && (o = l.return) && o.call(l)
                        } finally {
                            if (n)
                                throw n.error
                        }
                    }
                }
                if (i)
                    throw new rr(i)
            }
        }, e.prototype.add = function(r) {
            var t;
            if (r && r !== this)
                if (this.closed)
                    Lt(r);
                else {
                    if (r instanceof e) {
                        if (r.closed || r._hasParent(this))
                            return;
                        r._addParent(this)
                    }
                    (this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(r)
                }
        }, e.prototype._hasParent = function(r) {
            var t = this._parentage;
            return t === r || Array.isArray(t) && t.includes(r)
        }, e.prototype._addParent = function(r) {
            var t = this._parentage;
            this._parentage = Array.isArray(t) ? (t.push(r), t) : t ? [t, r] : r
        }, e.prototype._removeParent = function(r) {
            var t = this._parentage;
            t === r ? this._parentage = null : Array.isArray(t) && fe(t, r)
        }, e.prototype.remove = function(r) {
            var t = this._finalizers;
            t && fe(t, r),
            r instanceof e && r._removeParent(this)
        }, e.EMPTY = function() {
            var r = new e;
            return r.closed = !0, r
        }(), e
    }();
    var zr = oe.EMPTY;
    function tr(e) {
        return e instanceof oe || e && "closed" in e && O(e.remove) && O(e.add) && O(e.unsubscribe)
    }
    function Lt(e) {
        O(e) ? e() : e.unsubscribe()
    }
    var re = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1
    };
    var Oe = {
        setTimeout: function(e, r) {
            for (var t = [], n = 2; n < arguments.length; n++)
                t[n - 2] = arguments[n];
            var o = Oe.delegate;
            return o != null && o.setTimeout ? o.setTimeout.apply(o, U([e, r], H(t))) : setTimeout.apply(void 0, U([e, r], H(t)))
        },
        clearTimeout: function(e) {
            var r = Oe.delegate;
            return ((r == null ? void 0 : r.clearTimeout) || clearTimeout)(e)
        },
        delegate: void 0
    };
    function nr(e) {
        Oe.setTimeout(function() {
            var r = re.onUnhandledError;
            if (r)
                r(e);
            else
                throw e
        })
    }
    function ce() {}
    var Rt = function() {
        return Ur("C", void 0, void 0)
    }();
    function Pt(e) {
        return Ur("E", void 0, e)
    }
    function Ft(e) {
        return Ur("N", e, void 0)
    }
    function Ur(e, r, t) {
        return {
            kind: e,
            value: r,
            error: t
        }
    }
    var ye = null;
    function Te(e) {
        if (re.useDeprecatedSynchronousErrorHandling) {
            var r = !ye;
            if (r && (ye = {
                errorThrown: !1,
                error: null
            }), e(), r) {
                var t = ye,
                    n = t.errorThrown,
                    o = t.error;
                if (ye = null, n)
                    throw o
            }
        } else
            e()
    }
    function kt(e) {
        re.useDeprecatedSynchronousErrorHandling && ye && (ye.errorThrown = !0, ye.error = e)
    }
    var We = function(e) {
        j(r, e);
        function r(t) {
            var n = e.call(this) || this;
            return n.isStopped = !1, t ? (n.destination = t, tr(t) && t.add(n)) : n.destination = so, n
        }
        return r.create = function(t, n, o) {
            return new Ae(t, n, o)
        }, r.prototype.next = function(t) {
            this.isStopped ? jr(Ft(t), this) : this._next(t)
        }, r.prototype.error = function(t) {
            this.isStopped ? jr(Pt(t), this) : (this.isStopped = !0, this._error(t))
        }, r.prototype.complete = function() {
            this.isStopped ? jr(Rt, this) : (this.isStopped = !0, this._complete())
        }, r.prototype.unsubscribe = function() {
            this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null)
        }, r.prototype._next = function(t) {
            this.destination.next(t)
        }, r.prototype._error = function(t) {
            try {
                this.destination.error(t)
            } finally {
                this.unsubscribe()
            }
        }, r.prototype._complete = function() {
            try {
                this.destination.complete()
            } finally {
                this.unsubscribe()
            }
        }, r
    }(oe);
    var oo = Function.prototype.bind;
    function Vr(e, r) {
        return oo.call(e, r)
    }
    var io = function() {
            function e(r) {
                this.partialObserver = r
            }
            return e.prototype.next = function(r) {
                var t = this.partialObserver;
                if (t.next)
                    try {
                        t.next(r)
                    } catch (n) {
                        or(n)
                    }
            }, e.prototype.error = function(r) {
                var t = this.partialObserver;
                if (t.error)
                    try {
                        t.error(r)
                    } catch (n) {
                        or(n)
                    }
                else
                    or(r)
            }, e.prototype.complete = function() {
                var r = this.partialObserver;
                if (r.complete)
                    try {
                        r.complete()
                    } catch (t) {
                        or(t)
                    }
            }, e
        }(),
        Ae = function(e) {
            j(r, e);
            function r(t, n, o) {
                var i = e.call(this) || this,
                    s;
                if (O(t) || !t)
                    s = {
                        next: t != null ? t : void 0,
                        error: n != null ? n : void 0,
                        complete: o != null ? o : void 0
                    };
                else {
                    var u;
                    i && re.useDeprecatedNextContext ? (u = Object.create(t), u.unsubscribe = function() {
                        return i.unsubscribe()
                    }, s = {
                        next: t.next && Vr(t.next, u),
                        error: t.error && Vr(t.error, u),
                        complete: t.complete && Vr(t.complete, u)
                    }) : s = t
                }
                return i.destination = new io(s), i
            }
            return r
        }(We);
    function or(e) {
        re.useDeprecatedSynchronousErrorHandling ? kt(e) : nr(e)
    }
    function ao(e) {
        throw e
    }
    function jr(e, r) {
        var t = re.onStoppedNotification;
        t && Oe.setTimeout(function() {
            return t(e, r)
        })
    }
    var so = {
        closed: !0,
        next: ce,
        error: ao,
        complete: ce
    };
    var Me = function() {
        return typeof Symbol == "function" && Symbol.observable || "@@observable"
    }();
    function Y(e) {
        return e
    }
    function Ht(e) {
        return e.length === 0 ? Y : e.length === 1 ? e[0] : function(t) {
            return e.reduce(function(n, o) {
                return o(n)
            }, t)
        }
    }
    var R = function() {
        function e(r) {
            r && (this._subscribe = r)
        }
        return e.prototype.lift = function(r) {
            var t = new e;
            return t.source = this, t.operator = r, t
        }, e.prototype.subscribe = function(r, t, n) {
            var o = this,
                i = fo(r) ? r : new Ae(r, t, n);
            return Te(function() {
                var s = o,
                    u = s.operator,
                    a = s.source;
                i.add(u ? u.call(i, a) : a ? o._subscribe(i) : o._trySubscribe(i))
            }), i
        }, e.prototype._trySubscribe = function(r) {
            try {
                return this._subscribe(r)
            } catch (t) {
                r.error(t)
            }
        }, e.prototype.forEach = function(r, t) {
            var n = this;
            return t = Wt(t), new t(function(o, i) {
                var s = new Ae({
                    next: function(u) {
                        try {
                            r(u)
                        } catch (a) {
                            i(a),
                            s.unsubscribe()
                        }
                    },
                    error: i,
                    complete: o
                });
                n.subscribe(s)
            })
        }, e.prototype._subscribe = function(r) {
            var t;
            return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(r)
        }, e.prototype[Me] = function() {
            return this
        }, e.prototype.pipe = function() {
            for (var r = [], t = 0; t < arguments.length; t++)
                r[t] = arguments[t];
            return Ht(r)(this)
        }, e.prototype.toPromise = function(r) {
            var t = this;
            return r = Wt(r), new r(function(n, o) {
                var i;
                t.subscribe(function(s) {
                    return i = s
                }, function(s) {
                    return o(s)
                }, function() {
                    return n(i)
                })
            })
        }, e.create = function(r) {
            return new e(r)
        }, e
    }();
    function Wt(e) {
        var r;
        return (r = e != null ? e : re.Promise) !== null && r !== void 0 ? r : Promise
    }
    function uo(e) {
        return e && O(e.next) && O(e.error) && O(e.complete)
    }
    function fo(e) {
        return e && e instanceof We || uo(e) && tr(e)
    }
    function co(e) {
        return O(e == null ? void 0 : e.lift)
    }
    function A(e) {
        return function(r) {
            if (co(r))
                return r.lift(function(t) {
                    try {
                        return e(t, this)
                    } catch (n) {
                        this.error(n)
                    }
                });
            throw new TypeError("Unable to lift unknown Observable type")
        }
    }
    function M(e, r, t, n, o) {
        return new lo(e, r, t, n, o)
    }
    var lo = function(e) {
        j(r, e);
        function r(t, n, o, i, s, u) {
            var a = e.call(this, t) || this;
            return a.onFinalize = s, a.shouldUnsubscribe = u, a._next = n ? function(f) {
                try {
                    n(f)
                } catch (c) {
                    t.error(c)
                }
            } : e.prototype._next, a._error = i ? function(f) {
                try {
                    i(f)
                } catch (c) {
                    t.error(c)
                } finally {
                    this.unsubscribe()
                }
            } : e.prototype._error, a._complete = o ? function() {
                try {
                    o()
                } catch (f) {
                    t.error(f)
                } finally {
                    this.unsubscribe()
                }
            } : e.prototype._complete, a
        }
        return r.prototype.unsubscribe = function() {
            var t;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                var n = this.closed;
                e.prototype.unsubscribe.call(this),
                !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this))
            }
        }, r
    }(We);
    var Ie = {
        schedule: function(e) {
            var r = requestAnimationFrame,
                t = cancelAnimationFrame,
                n = Ie.delegate;
            n && (r = n.requestAnimationFrame, t = n.cancelAnimationFrame);
            var o = r(function(i) {
                t = void 0,
                e(i)
            });
            return new oe(function() {
                return t == null ? void 0 : t(o)
            })
        },
        requestAnimationFrame: function() {
            for (var e = [], r = 0; r < arguments.length; r++)
                e[r] = arguments[r];
            var t = Ie.delegate;
            return ((t == null ? void 0 : t.requestAnimationFrame) || requestAnimationFrame).apply(void 0, U([], H(e)))
        },
        cancelAnimationFrame: function() {
            for (var e = [], r = 0; r < arguments.length; r++)
                e[r] = arguments[r];
            var t = Ie.delegate;
            return ((t == null ? void 0 : t.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, U([], H(e)))
        },
        delegate: void 0
    };
    var zt = er(function(e) {
        return function() {
            e(this),
            this.name = "ObjectUnsubscribedError",
            this.message = "object unsubscribed"
        }
    });
    var B = function(e) {
        j(r, e);
        function r() {
            var t = e.call(this) || this;
            return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t
        }
        return r.prototype.lift = function(t) {
            var n = new Ut(this, this);
            return n.operator = t, n
        }, r.prototype._throwIfClosed = function() {
            if (this.closed)
                throw new zt
        }, r.prototype.next = function(t) {
            var n = this;
            Te(function() {
                var o,
                    i;
                if (n._throwIfClosed(), !n.isStopped) {
                    n.currentObservers || (n.currentObservers = Array.from(n.observers));
                    try {
                        for (var s = ee(n.currentObservers), u = s.next(); !u.done; u = s.next()) {
                            var a = u.value;
                            a.next(t)
                        }
                    } catch (f) {
                        o = {
                            error: f
                        }
                    } finally {
                        try {
                            u && !u.done && (i = s.return) && i.call(s)
                        } finally {
                            if (o)
                                throw o.error
                        }
                    }
                }
            })
        }, r.prototype.error = function(t) {
            var n = this;
            Te(function() {
                if (n._throwIfClosed(), !n.isStopped) {
                    n.hasError = n.isStopped = !0,
                    n.thrownError = t;
                    for (var o = n.observers; o.length;)
                        o.shift().error(t)
                }
            })
        }, r.prototype.complete = function() {
            var t = this;
            Te(function() {
                if (t._throwIfClosed(), !t.isStopped) {
                    t.isStopped = !0;
                    for (var n = t.observers; n.length;)
                        n.shift().complete()
                }
            })
        }, r.prototype.unsubscribe = function() {
            this.isStopped = this.closed = !0,
            this.observers = this.currentObservers = null
        }, Object.defineProperty(r.prototype, "observed", {
            get: function() {
                var t;
                return ((t = this.observers) === null || t === void 0 ? void 0 : t.length) > 0
            },
            enumerable: !1,
            configurable: !0
        }), r.prototype._trySubscribe = function(t) {
            return this._throwIfClosed(), e.prototype._trySubscribe.call(this, t)
        }, r.prototype._subscribe = function(t) {
            return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t)
        }, r.prototype._innerSubscribe = function(t) {
            var n = this,
                o = this,
                i = o.hasError,
                s = o.isStopped,
                u = o.observers;
            return i || s ? zr : (this.currentObservers = null, u.push(t), new oe(function() {
                n.currentObservers = null,
                fe(u, t)
            }))
        }, r.prototype._checkFinalizedStatuses = function(t) {
            var n = this,
                o = n.hasError,
                i = n.thrownError,
                s = n.isStopped;
            o ? t.error(i) : s && t.complete()
        }, r.prototype.asObservable = function() {
            var t = new R;
            return t.source = this, t
        }, r.create = function(t, n) {
            return new Ut(t, n)
        }, r
    }(R);
    var Ut = function(e) {
        j(r, e);
        function r(t, n) {
            var o = e.call(this) || this;
            return o.destination = t, o.source = n, o
        }
        return r.prototype.next = function(t) {
            var n,
                o;
            (o = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || o === void 0 || o.call(n, t)
        }, r.prototype.error = function(t) {
            var n,
                o;
            (o = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || o === void 0 || o.call(n, t)
        }, r.prototype.complete = function() {
            var t,
                n;
            (n = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || n === void 0 || n.call(t)
        }, r.prototype._subscribe = function(t) {
            var n,
                o;
            return (o = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)) !== null && o !== void 0 ? o : zr
        }, r
    }(B);
    var ze = {
        now: function() {
            return (ze.delegate || Date).now()
        },
        delegate: void 0
    };
    var Vt = function(e) {
        j(r, e);
        function r(t, n, o) {
            t === void 0 && (t = 1 / 0),
            n === void 0 && (n = 1 / 0),
            o === void 0 && (o = ze);
            var i = e.call(this) || this;
            return i._bufferSize = t, i._windowTime = n, i._timestampProvider = o, i._buffer = [], i._infiniteTimeWindow = !0, i._infiniteTimeWindow = n === 1 / 0, i._bufferSize = Math.max(1, t), i._windowTime = Math.max(1, n), i
        }
        return r.prototype.next = function(t) {
            var n = this,
                o = n.isStopped,
                i = n._buffer,
                s = n._infiniteTimeWindow,
                u = n._timestampProvider,
                a = n._windowTime;
            o || (i.push(t), !s && i.push(u.now() + a)),
            this._trimBuffer(),
            e.prototype.next.call(this, t)
        }, r.prototype._subscribe = function(t) {
            this._throwIfClosed(),
            this._trimBuffer();
            for (var n = this._innerSubscribe(t), o = this, i = o._infiniteTimeWindow, s = o._buffer, u = s.slice(), a = 0; a < u.length && !t.closed; a += i ? 1 : 2)
                t.next(u[a]);
            return this._checkFinalizedStatuses(t), n
        }, r.prototype._trimBuffer = function() {
            var t = this,
                n = t._bufferSize,
                o = t._timestampProvider,
                i = t._buffer,
                s = t._infiniteTimeWindow,
                u = (s ? 1 : 2) * n;
            if (n < 1 / 0 && u < i.length && i.splice(0, i.length - u), !s) {
                for (var a = o.now(), f = 0, c = 1; c < i.length && i[c] <= a; c += 2)
                    f = c;
                f && i.splice(0, f + 1)
            }
        }, r
    }(B);
    var jt = function(e) {
        j(r, e);
        function r(t, n) {
            return e.call(this) || this
        }
        return r.prototype.schedule = function(t, n) {
            return n === void 0 && (n = 0), this
        }, r
    }(oe);
    var Ue = {
        setInterval: function(e, r) {
            for (var t = [], n = 2; n < arguments.length; n++)
                t[n - 2] = arguments[n];
            var o = Ue.delegate;
            return o != null && o.setInterval ? o.setInterval.apply(o, U([e, r], H(t))) : setInterval.apply(void 0, U([e, r], H(t)))
        },
        clearInterval: function(e) {
            var r = Ue.delegate;
            return ((r == null ? void 0 : r.clearInterval) || clearInterval)(e)
        },
        delegate: void 0
    };
    var ir = function(e) {
        j(r, e);
        function r(t, n) {
            var o = e.call(this, t, n) || this;
            return o.scheduler = t, o.work = n, o.pending = !1, o
        }
        return r.prototype.schedule = function(t, n) {
            if (n === void 0 && (n = 0), this.closed)
                return this;
            this.state = t;
            var o = this.id,
                i = this.scheduler;
            return o != null && (this.id = this.recycleAsyncId(i, o, n)), this.pending = !0, this.delay = n, this.id = this.id || this.requestAsyncId(i, this.id, n), this
        }, r.prototype.requestAsyncId = function(t, n, o) {
            return o === void 0 && (o = 0), Ue.setInterval(t.flush.bind(t, this), o)
        }, r.prototype.recycleAsyncId = function(t, n, o) {
            if (o === void 0 && (o = 0), o != null && this.delay === o && this.pending === !1)
                return n;
            Ue.clearInterval(n)
        }, r.prototype.execute = function(t, n) {
            if (this.closed)
                return new Error("executing a cancelled action");
            this.pending = !1;
            var o = this._execute(t, n);
            if (o)
                return o;
            this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
        }, r.prototype._execute = function(t, n) {
            var o = !1,
                i;
            try {
                this.work(t)
            } catch (s) {
                o = !0,
                i = s || new Error("Scheduled action threw falsy error")
            }
            if (o)
                return this.unsubscribe(), i
        }, r.prototype.unsubscribe = function() {
            if (!this.closed) {
                var t = this,
                    n = t.id,
                    o = t.scheduler,
                    i = o.actions;
                this.work = this.state = this.scheduler = null,
                this.pending = !1,
                fe(i, this),
                n != null && (this.id = this.recycleAsyncId(o, n, null)),
                this.delay = null,
                e.prototype.unsubscribe.call(this)
            }
        }, r
    }(jt);
    var qr = function() {
        function e(r, t) {
            t === void 0 && (t = e.now),
            this.schedulerActionCtor = r,
            this.now = t
        }
        return e.prototype.schedule = function(r, t, n) {
            return t === void 0 && (t = 0), new this.schedulerActionCtor(this, r).schedule(n, t)
        }, e.now = ze.now, e
    }();
    var ar = function(e) {
        j(r, e);
        function r(t, n) {
            n === void 0 && (n = qr.now);
            var o = e.call(this, t, n) || this;
            return o.actions = [], o._active = !1, o._scheduled = void 0, o
        }
        return r.prototype.flush = function(t) {
            var n = this.actions;
            if (this._active) {
                n.push(t);
                return
            }
            var o;
            this._active = !0;
            do if (o = t.execute(t.state, t.delay))
                break;
            while (t = n.shift());
            if (this._active = !1, o) {
                for (; t = n.shift();)
                    t.unsubscribe();
                throw o
            }
        }, r
    }(qr);
    var xe = new ar(ir),
        qt = xe;
    var Dt = function(e) {
        j(r, e);
        function r(t, n) {
            var o = e.call(this, t, n) || this;
            return o.scheduler = t, o.work = n, o
        }
        return r.prototype.requestAsyncId = function(t, n, o) {
            return o === void 0 && (o = 0), o !== null && o > 0 ? e.prototype.requestAsyncId.call(this, t, n, o) : (t.actions.push(this), t._scheduled || (t._scheduled = Ie.requestAnimationFrame(function() {
                return t.flush(void 0)
            })))
        }, r.prototype.recycleAsyncId = function(t, n, o) {
            if (o === void 0 && (o = 0), o != null && o > 0 || o == null && this.delay > 0)
                return e.prototype.recycleAsyncId.call(this, t, n, o);
            t.actions.some(function(i) {
                return i.id === n
            }) || (Ie.cancelAnimationFrame(n), t._scheduled = void 0)
        }, r
    }(ir);
    var $t = function(e) {
        j(r, e);
        function r() {
            return e !== null && e.apply(this, arguments) || this
        }
        return r.prototype.flush = function(t) {
            this._active = !0;
            var n = this._scheduled;
            this._scheduled = void 0;
            var o = this.actions,
                i;
            t = t || o.shift();
            do if (i = t.execute(t.state, t.delay))
                break;
            while ((t = o[0]) && t.id === n && o.shift());
            if (this._active = !1, i) {
                for (; (t = o[0]) && t.id === n && o.shift();)
                    t.unsubscribe();
                throw i
            }
        }, r
    }(ar);
    var Dr = new $t(Dt);
    var le = new R(function(e) {
        return e.complete()
    });
    function sr(e) {
        return e && O(e.schedule)
    }
    function $r(e) {
        return e[e.length - 1]
    }
    function Ce(e) {
        return O($r(e)) ? e.pop() : void 0
    }
    function ie(e) {
        return sr($r(e)) ? e.pop() : void 0
    }
    function Nt(e, r) {
        return typeof $r(e) == "number" ? e.pop() : r
    }
    var Le = function(e) {
        return e && typeof e.length == "number" && typeof e != "function"
    };
    function ur(e) {
        return O(e == null ? void 0 : e.then)
    }
    function fr(e) {
        return O(e[Me])
    }
    function cr(e) {
        return Symbol.asyncIterator && O(e == null ? void 0 : e[Symbol.asyncIterator])
    }
    function lr(e) {
        return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
    }
    function po() {
        return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator
    }
    var pr = po();
    function mr(e) {
        return O(e == null ? void 0 : e[pr])
    }
    function hr(e) {
        return It(this, arguments, function() {
            var t,
                n,
                o,
                i;
            return Xe(this, function(s) {
                switch (s.label) {
                case 0:
                    t = e.getReader(),
                    s.label = 1;
                case 1:
                    s.trys.push([1, , 9, 10]),
                    s.label = 2;
                case 2:
                    return [4, Ze(t.read())];
                case 3:
                    return n = s.sent(), o = n.value, i = n.done, i ? [4, Ze(void 0)] : [3, 5];
                case 4:
                    return [2, s.sent()];
                case 5:
                    return [4, Ze(o)];
                case 6:
                    return [4, s.sent()];
                case 7:
                    return s.sent(), [3, 2];
                case 8:
                    return [3, 10];
                case 9:
                    return t.releaseLock(), [7];
                case 10:
                    return [2]
                }
            })
        })
    }
    function dr(e) {
        return O(e == null ? void 0 : e.getReader)
    }
    function z(e) {
        if (e instanceof R)
            return e;
        if (e != null) {
            if (fr(e))
                return mo(e);
            if (Le(e))
                return ho(e);
            if (ur(e))
                return vo(e);
            if (cr(e))
                return Gt(e);
            if (mr(e))
                return bo(e);
            if (dr(e))
                return yo(e)
        }
        throw lr(e)
    }
    function mo(e) {
        return new R(function(r) {
            var t = e[Me]();
            if (O(t.subscribe))
                return t.subscribe(r);
            throw new TypeError("Provided object does not correctly implement Symbol.observable")
        })
    }
    function ho(e) {
        return new R(function(r) {
            for (var t = 0; t < e.length && !r.closed; t++)
                r.next(e[t]);
            r.complete()
        })
    }
    function vo(e) {
        return new R(function(r) {
            e.then(function(t) {
                r.closed || (r.next(t), r.complete())
            }, function(t) {
                return r.error(t)
            }).then(null, nr)
        })
    }
    function bo(e) {
        return new R(function(r) {
            var t,
                n;
            try {
                for (var o = ee(e), i = o.next(); !i.done; i = o.next()) {
                    var s = i.value;
                    if (r.next(s), r.closed)
                        return
                }
            } catch (u) {
                t = {
                    error: u
                }
            } finally {
                try {
                    i && !i.done && (n = o.return) && n.call(o)
                } finally {
                    if (t)
                        throw t.error
                }
            }
            r.complete()
        })
    }
    function Gt(e) {
        return new R(function(r) {
            xo(e, r).catch(function(t) {
                return r.error(t)
            })
        })
    }
    function yo(e) {
        return Gt(hr(e))
    }
    function xo(e, r) {
        var t,
            n,
            o,
            i;
        return Mt(this, void 0, void 0, function() {
            var s,
                u;
            return Xe(this, function(a) {
                switch (a.label) {
                case 0:
                    a.trys.push([0, 5, 6, 11]),
                    t = Ct(e),
                    a.label = 1;
                case 1:
                    return [4, t.next()];
                case 2:
                    if (n = a.sent(), !!n.done)
                        return [3, 4];
                    if (s = n.value, r.next(s), r.closed)
                        return [2];
                    a.label = 3;
                case 3:
                    return [3, 1];
                case 4:
                    return [3, 11];
                case 5:
                    return u = a.sent(), o = {
                        error: u
                    }, [3, 11];
                case 6:
                    return a.trys.push([6, , 9, 10]), n && !n.done && (i = t.return) ? [4, i.call(t)] : [3, 8];
                case 7:
                    a.sent(),
                    a.label = 8;
                case 8:
                    return [3, 10];
                case 9:
                    if (o)
                        throw o.error;
                    return [7];
                case 10:
                    return [7];
                case 11:
                    return r.complete(), [2]
                }
            })
        })
    }
    function N(e, r, t, n, o) {
        n === void 0 && (n = 0),
        o === void 0 && (o = !1);
        var i = r.schedule(function() {
            t(),
            o ? e.add(this.schedule(null, n)) : this.unsubscribe()
        }, n);
        if (e.add(i), !o)
            return i
    }
    function vr(e, r) {
        return r === void 0 && (r = 0), A(function(t, n) {
            t.subscribe(M(n, function(o) {
                return N(n, e, function() {
                    return n.next(o)
                }, r)
            }, function() {
                return N(n, e, function() {
                    return n.complete()
                }, r)
            }, function(o) {
                return N(n, e, function() {
                    return n.error(o)
                }, r)
            }))
        })
    }
    function br(e, r) {
        return r === void 0 && (r = 0), A(function(t, n) {
            n.add(e.schedule(function() {
                return t.subscribe(n)
            }, r))
        })
    }
    function Qt(e, r) {
        return z(e).pipe(br(r), vr(r))
    }
    function Kt(e, r) {
        return z(e).pipe(br(r), vr(r))
    }
    function Yt(e, r) {
        return new R(function(t) {
            var n = 0;
            return r.schedule(function() {
                n === e.length ? t.complete() : (t.next(e[n++]), t.closed || this.schedule())
            })
        })
    }
    function Jt(e, r) {
        return new R(function(t) {
            var n;
            return N(t, r, function() {
                n = e[pr](),
                N(t, r, function() {
                    var o,
                        i,
                        s;
                    try {
                        o = n.next(),
                        i = o.value,
                        s = o.done
                    } catch (u) {
                        t.error(u);
                        return
                    }
                    s ? t.complete() : t.next(i)
                }, 0, !0)
            }), function() {
                return O(n == null ? void 0 : n.return) && n.return()
            }
        })
    }
    function yr(e, r) {
        if (!e)
            throw new Error("Iterable cannot be null");
        return new R(function(t) {
            N(t, r, function() {
                var n = e[Symbol.asyncIterator]();
                N(t, r, function() {
                    n.next().then(function(o) {
                        o.done ? t.complete() : t.next(o.value)
                    })
                }, 0, !0)
            })
        })
    }
    function Bt(e, r) {
        return yr(hr(e), r)
    }
    function Xt(e, r) {
        if (e != null) {
            if (fr(e))
                return Qt(e, r);
            if (Le(e))
                return Yt(e, r);
            if (ur(e))
                return Kt(e, r);
            if (cr(e))
                return yr(e, r);
            if (mr(e))
                return Jt(e, r);
            if (dr(e))
                return Bt(e, r)
        }
        throw lr(e)
    }
    function G(e, r) {
        return r ? Xt(e, r) : z(e)
    }
    function ae() {
        for (var e = [], r = 0; r < arguments.length; r++)
            e[r] = arguments[r];
        var t = ie(e);
        return G(e, t)
    }
    function Zt(e) {
        return e instanceof Date && !isNaN(e)
    }
    function F(e, r) {
        return A(function(t, n) {
            var o = 0;
            t.subscribe(M(n, function(i) {
                n.next(e.call(r, i, o++))
            }))
        })
    }
    var go = Array.isArray;
    function wo(e, r) {
        return go(r) ? e.apply(void 0, U([], H(r))) : e(r)
    }
    function xr(e) {
        return F(function(r) {
            return wo(e, r)
        })
    }
    var _o = Array.isArray,
        So = Object.getPrototypeOf,
        Eo = Object.prototype,
        Oo = Object.keys;
    function en(e) {
        if (e.length === 1) {
            var r = e[0];
            if (_o(r))
                return {
                    args: r,
                    keys: null
                };
            if (To(r)) {
                var t = Oo(r);
                return {
                    args: t.map(function(n) {
                        return r[n]
                    }),
                    keys: t
                }
            }
        }
        return {
            args: e,
            keys: null
        }
    }
    function To(e) {
        return e && typeof e == "object" && So(e) === Eo
    }
    function rn(e, r) {
        return e.reduce(function(t, n, o) {
            return t[n] = r[o], t
        }, {})
    }
    function Re() {
        for (var e = [], r = 0; r < arguments.length; r++)
            e[r] = arguments[r];
        var t = ie(e),
            n = Ce(e),
            o = en(e),
            i = o.args,
            s = o.keys;
        if (i.length === 0)
            return G([], t);
        var u = new R(Ao(i, t, s ? function(a) {
            return rn(s, a)
        } : Y));
        return n ? u.pipe(xr(n)) : u
    }
    function Ao(e, r, t) {
        return t === void 0 && (t = Y), function(n) {
            tn(r, function() {
                for (var o = e.length, i = new Array(o), s = o, u = o, a = function(c) {
                        tn(r, function() {
                            var p = G(e[c], r),
                                l = !1;
                            p.subscribe(M(n, function(h) {
                                i[c] = h,
                                l || (l = !0, u--),
                                u || n.next(t(i.slice()))
                            }, function() {
                                --s || n.complete()
                            }))
                        }, n)
                    }, f = 0; f < o; f++)
                    a(f)
            }, n)
        }
    }
    function tn(e, r, t) {
        e ? N(t, e, r) : r()
    }
    function nn(e, r, t, n, o, i, s, u) {
        var a = [],
            f = 0,
            c = 0,
            p = !1,
            l = function() {
                p && !a.length && !f && r.complete()
            },
            h = function(m) {
                return f < n ? d(m) : a.push(m)
            },
            d = function(m) {
                i && r.next(m),
                f++;
                var b = !1;
                z(t(m, c++)).subscribe(M(r, function(w) {
                    o == null || o(w),
                    i ? h(w) : r.next(w)
                }, function() {
                    b = !0
                }, void 0, function() {
                    if (b)
                        try {
                            f--;
                            for (var w = function() {
                                var S = a.shift();
                                s ? N(r, s, function() {
                                    return d(S)
                                }) : d(S)
                            }; a.length && f < n;)
                                w();
                            l()
                        } catch (S) {
                            r.error(S)
                        }
                }))
            };
        return e.subscribe(M(r, h, function() {
            p = !0,
            l()
        })), function() {
            u == null || u()
        }
    }
    function ge(e, r, t) {
        return t === void 0 && (t = 1 / 0), O(r) ? ge(function(n, o) {
            return F(function(i, s) {
                return r(n, i, o, s)
            })(z(e(n, o)))
        }, t) : (typeof r == "number" && (t = r), A(function(n, o) {
            return nn(n, o, e, t)
        }))
    }
    function gr(e) {
        return e === void 0 && (e = 1 / 0), ge(Y, e)
    }
    function on() {
        return gr(1)
    }
    function Ve() {
        for (var e = [], r = 0; r < arguments.length; r++)
            e[r] = arguments[r];
        return on()(G(e, ie(e)))
    }
    function je(e) {
        return new R(function(r) {
            z(e()).subscribe(r)
        })
    }
    var Mo = ["addListener", "removeListener"],
        Io = ["addEventListener", "removeEventListener"],
        Co = ["on", "off"];
    function Q(e, r, t, n) {
        if (O(t) && (n = t, t = void 0), n)
            return Q(e, r, t).pipe(xr(n));
        var o = H(Po(e) ? Io.map(function(u) {
                return function(a) {
                    return e[u](r, a, t)
                }
            }) : Lo(e) ? Mo.map(an(e, r)) : Ro(e) ? Co.map(an(e, r)) : [], 2),
            i = o[0],
            s = o[1];
        if (!i && Le(e))
            return ge(function(u) {
                return Q(u, r, t)
            })(z(e));
        if (!i)
            throw new TypeError("Invalid event target");
        return new R(function(u) {
            var a = function() {
                for (var f = [], c = 0; c < arguments.length; c++)
                    f[c] = arguments[c];
                return u.next(1 < f.length ? f : f[0])
            };
            return i(a), function() {
                return s(a)
            }
        })
    }
    function an(e, r) {
        return function(t) {
            return function(n) {
                return e[t](r, n)
            }
        }
    }
    function Lo(e) {
        return O(e.addListener) && O(e.removeListener)
    }
    function Ro(e) {
        return O(e.on) && O(e.off)
    }
    function Po(e) {
        return O(e.addEventListener) && O(e.removeEventListener)
    }
    function wr(e, r, t) {
        e === void 0 && (e = 0),
        t === void 0 && (t = qt);
        var n = -1;
        return r != null && (sr(r) ? t = r : n = r), new R(function(o) {
            var i = Zt(e) ? +e - t.now() : e;
            i < 0 && (i = 0);
            var s = 0;
            return t.schedule(function() {
                o.closed || (o.next(s++), 0 <= n ? this.schedule(void 0, n) : o.complete())
            }, i)
        })
    }
    function $() {
        for (var e = [], r = 0; r < arguments.length; r++)
            e[r] = arguments[r];
        var t = ie(e),
            n = Nt(e, 1 / 0),
            o = e;
        return o.length ? o.length === 1 ? z(o[0]) : gr(n)(G(o, t)) : le
    }
    var qe = new R(ce);
    var Fo = Array.isArray;
    function sn(e) {
        return e.length === 1 && Fo(e[0]) ? e[0] : e
    }
    function pe(e, r) {
        return A(function(t, n) {
            var o = 0;
            t.subscribe(M(n, function(i) {
                return e.call(r, i, o++) && n.next(i)
            }))
        })
    }
    function un() {
        for (var e = [], r = 0; r < arguments.length; r++)
            e[r] = arguments[r];
        var t = Ce(e),
            n = sn(e);
        return n.length ? new R(function(o) {
            var i = n.map(function() {
                    return []
                }),
                s = n.map(function() {
                    return !1
                });
            o.add(function() {
                i = s = null
            });
            for (var u = function(f) {
                    z(n[f]).subscribe(M(o, function(c) {
                        if (i[f].push(c), i.every(function(l) {
                            return l.length
                        })) {
                            var p = i.map(function(l) {
                                return l.shift()
                            });
                            o.next(t ? t.apply(void 0, U([], H(p))) : p),
                            i.some(function(l, h) {
                                return !l.length && s[h]
                            }) && o.complete()
                        }
                    }, function() {
                        s[f] = !0,
                        !i[f].length && o.complete()
                    }))
                }, a = 0; !o.closed && a < n.length; a++)
                u(a);
            return function() {
                i = s = null
            }
        }) : le
    }
    function fn(e) {
        return A(function(r, t) {
            var n = !1,
                o = null,
                i = null,
                s = !1,
                u = function() {
                    if (i == null || i.unsubscribe(), i = null, n) {
                        n = !1;
                        var f = o;
                        o = null,
                        t.next(f)
                    }
                    s && t.complete()
                },
                a = function() {
                    i = null,
                    s && t.complete()
                };
            r.subscribe(M(t, function(f) {
                n = !0,
                o = f,
                i || z(e(f)).subscribe(i = M(t, u, a))
            }, function() {
                s = !0,
                (!n || !i || i.closed) && t.complete()
            }))
        })
    }
    function Nr(e, r) {
        return r === void 0 && (r = xe), fn(function() {
            return wr(e, r)
        })
    }
    function Gr(e, r) {
        return r === void 0 && (r = null), r = r != null ? r : e, A(function(t, n) {
            var o = [],
                i = 0;
            t.subscribe(M(n, function(s) {
                var u,
                    a,
                    f,
                    c,
                    p = null;
                i++ % r === 0 && o.push([]);
                try {
                    for (var l = ee(o), h = l.next(); !h.done; h = l.next()) {
                        var d = h.value;
                        d.push(s),
                        e <= d.length && (p = p != null ? p : [], p.push(d))
                    }
                } catch (w) {
                    u = {
                        error: w
                    }
                } finally {
                    try {
                        h && !h.done && (a = l.return) && a.call(l)
                    } finally {
                        if (u)
                            throw u.error
                    }
                }
                if (p)
                    try {
                        for (var m = ee(p), b = m.next(); !b.done; b = m.next()) {
                            var d = b.value;
                            fe(o, d),
                            n.next(d)
                        }
                    } catch (w) {
                        f = {
                            error: w
                        }
                    } finally {
                        try {
                            b && !b.done && (c = m.return) && c.call(m)
                        } finally {
                            if (f)
                                throw f.error
                        }
                    }
            }, function() {
                var s,
                    u;
                try {
                    for (var a = ee(o), f = a.next(); !f.done; f = a.next()) {
                        var c = f.value;
                        n.next(c)
                    }
                } catch (p) {
                    s = {
                        error: p
                    }
                } finally {
                    try {
                        f && !f.done && (u = a.return) && u.call(a)
                    } finally {
                        if (s)
                            throw s.error
                    }
                }
                n.complete()
            }, void 0, function() {
                o = null
            }))
        })
    }
    function _r(e) {
        return A(function(r, t) {
            var n = null,
                o = !1,
                i;
            n = r.subscribe(M(t, void 0, void 0, function(s) {
                i = z(e(s, _r(e)(r))),
                n ? (n.unsubscribe(), n = null, i.subscribe(t)) : o = !0
            })),
            o && (n.unsubscribe(), n = null, i.subscribe(t))
        })
    }
    function Qr(e, r) {
        return r === void 0 && (r = xe), A(function(t, n) {
            var o = null,
                i = null,
                s = null,
                u = function() {
                    if (o) {
                        o.unsubscribe(),
                        o = null;
                        var f = i;
                        i = null,
                        n.next(f)
                    }
                };
            function a() {
                var f = s + e,
                    c = r.now();
                if (c < f) {
                    o = this.schedule(void 0, f - c),
                    n.add(o);
                    return
                }
                u()
            }
            t.subscribe(M(n, function(f) {
                i = f,
                s = r.now(),
                o || (o = r.schedule(a, e), n.add(o))
            }, function() {
                u(),
                n.complete()
            }, void 0, function() {
                i = o = null
            }))
        })
    }
    function De(e) {
        return e <= 0 ? function() {
            return le
        } : A(function(r, t) {
            var n = 0;
            r.subscribe(M(t, function(o) {
                ++n <= e && (t.next(o), e <= n && t.complete())
            }))
        })
    }
    function cn() {
        return A(function(e, r) {
            e.subscribe(M(r, ce))
        })
    }
    function ln(e) {
        return F(function() {
            return e
        })
    }
    function Kr(e, r) {
        return r ? function(t) {
            return Ve(r.pipe(De(1), cn()), t.pipe(Kr(e)))
        } : ge(function(t, n) {
            return e(t, n).pipe(De(1), ln(t))
        })
    }
    function Yr(e, r) {
        r === void 0 && (r = xe);
        var t = wr(e, r);
        return Kr(function() {
            return t
        })
    }
    function me(e, r) {
        return r === void 0 && (r = Y), e = e != null ? e : ko, A(function(t, n) {
            var o,
                i = !0;
            t.subscribe(M(n, function(s) {
                var u = r(s);
                (i || !e(o, u)) && (i = !1, o = u, n.next(s))
            }))
        })
    }
    function ko(e, r) {
        return e === r
    }
    function Sr(e, r) {
        return me(function(t, n) {
            return r ? r(t[e], n[e]) : t[e] === n[e]
        })
    }
    function we(e) {
        return A(function(r, t) {
            try {
                r.subscribe(t)
            } finally {
                t.add(e)
            }
        })
    }
    function pn(e) {
        e === void 0 && (e = {});
        var r = e.connector,
            t = r === void 0 ? function() {
                return new B
            } : r,
            n = e.resetOnError,
            o = n === void 0 ? !0 : n,
            i = e.resetOnComplete,
            s = i === void 0 ? !0 : i,
            u = e.resetOnRefCountZero,
            a = u === void 0 ? !0 : u;
        return function(f) {
            var c = null,
                p = null,
                l = null,
                h = 0,
                d = !1,
                m = !1,
                b = function() {
                    p == null || p.unsubscribe(),
                    p = null
                },
                w = function() {
                    b(),
                    c = l = null,
                    d = m = !1
                },
                S = function() {
                    var L = c;
                    w(),
                    L == null || L.unsubscribe()
                };
            return A(function(L, v) {
                h++,
                !m && !d && b();
                var y = l = l != null ? l : t();
                v.add(function() {
                    h--,
                    h === 0 && !m && !d && (p = Jr(S, a))
                }),
                y.subscribe(v),
                c || (c = new Ae({
                    next: function(_) {
                        return y.next(_)
                    },
                    error: function(_) {
                        m = !0,
                        b(),
                        p = Jr(w, o, _),
                        y.error(_)
                    },
                    complete: function() {
                        d = !0,
                        b(),
                        p = Jr(w, s),
                        y.complete()
                    }
                }), G(L).subscribe(c))
            })(f)
        }
    }
    function Jr(e, r) {
        for (var t = [], n = 2; n < arguments.length; n++)
            t[n - 2] = arguments[n];
        return r === !0 ? (e(), null) : r === !1 ? null : r.apply(void 0, U([], H(t))).pipe(De(1)).subscribe(function() {
            return e()
        })
    }
    function _e(e, r, t) {
        var n,
            o,
            i,
            s,
            u = !1;
        return e && typeof e == "object" ? (n = e.bufferSize, s = n === void 0 ? 1 / 0 : n, o = e.windowTime, r = o === void 0 ? 1 / 0 : o, i = e.refCount, u = i === void 0 ? !1 : i, t = e.scheduler) : s = e != null ? e : 1 / 0, pn({
            connector: function() {
                return new Vt(s, r, t)
            },
            resetOnError: !0,
            resetOnComplete: !1,
            resetOnRefCountZero: u
        })
    }
    function de() {
        for (var e = [], r = 0; r < arguments.length; r++)
            e[r] = arguments[r];
        var t = ie(e);
        return A(function(n, o) {
            (t ? Ve(e, n, t) : Ve(e, n)).subscribe(o)
        })
    }
    function K(e, r) {
        return A(function(t, n) {
            var o = null,
                i = 0,
                s = !1,
                u = function() {
                    return s && !o && n.complete()
                };
            t.subscribe(M(n, function(a) {
                o == null || o.unsubscribe();
                var f = 0,
                    c = i++;
                z(e(a, c)).subscribe(o = M(n, function(p) {
                    return n.next(r ? r(a, p, c, f++) : p)
                }, function() {
                    o = null,
                    u()
                }))
            }, function() {
                s = !0,
                u()
            }))
        })
    }
    function Pe(e, r, t) {
        var n = O(e) || r || t ? {
            next: e,
            error: r,
            complete: t
        } : e;
        return n ? A(function(o, i) {
            var s;
            (s = n.subscribe) === null || s === void 0 || s.call(n);
            var u = !0;
            o.subscribe(M(i, function(a) {
                var f;
                (f = n.next) === null || f === void 0 || f.call(n, a),
                i.next(a)
            }, function() {
                var a;
                u = !1,
                (a = n.complete) === null || a === void 0 || a.call(n),
                i.complete()
            }, function(a) {
                var f;
                u = !1,
                (f = n.error) === null || f === void 0 || f.call(n, a),
                i.error(a)
            }, function() {
                var a,
                    f;
                u && ((a = n.unsubscribe) === null || a === void 0 || a.call(n)),
                (f = n.finalize) === null || f === void 0 || f.call(n)
            }))
        }) : Y
    }
    function Fe() {
        for (var e = [], r = 0; r < arguments.length; r++)
            e[r] = arguments[r];
        var t = Ce(e);
        return A(function(n, o) {
            for (var i = e.length, s = new Array(i), u = e.map(function() {
                    return !1
                }), a = !1, f = function(p) {
                    z(e[p]).subscribe(M(o, function(l) {
                        s[p] = l,
                        !a && !u[p] && (u[p] = !0, (a = u.every(Y)) && (u = null))
                    }, ce))
                }, c = 0; c < i; c++)
                f(c);
            n.subscribe(M(o, function(p) {
                if (a) {
                    var l = U([p], H(s));
                    o.next(t ? t.apply(void 0, U([], H(l))) : l)
                }
            }))
        })
    }
    function mn() {
        for (var e = [], r = 0; r < arguments.length; r++)
            e[r] = arguments[r];
        return A(function(t, n) {
            un.apply(void 0, U([t], H(e))).subscribe(n)
        })
    }
    function Br() {
        for (var e = [], r = 0; r < arguments.length; r++)
            e[r] = arguments[r];
        return mn.apply(void 0, U([], H(e)))
    }
    function hn(e, r=document) {
        return Array.from(r.querySelectorAll(e))
    }
    function X(e, r=document) {
        let t = dn(e, r);
        if (typeof t == "undefined")
            throw new ReferenceError(`Missing element: expected "${e}" to be present`);
        return t
    }
    function dn(e, r=document) {
        return r.querySelector(e) || void 0
    }
    function Er() {
        return document.activeElement instanceof HTMLElement && document.activeElement || void 0
    }
    function vn(e) {
        return $(Q(document.body, "focusin"), Q(document.body, "focusout")).pipe(Qr(1), F(() => {
            let r = Er();
            return typeof r != "undefined" ? e.contains(r) : !1
        }), de(e === Er()), me())
    }
    function bn(e) {
        return {
            x: e.scrollLeft,
            y: e.scrollTop
        }
    }
    function yn(e) {
        return $(Q(e, "scroll"), Q(window, "resize")).pipe(Nr(0, Dr), F(() => bn(e)), de(bn(e)))
    }
    var gn = function() {
            if (typeof Map != "undefined")
                return Map;
            function e(r, t) {
                var n = -1;
                return r.some(function(o, i) {
                    return o[0] === t ? (n = i, !0) : !1
                }), n
            }
            return function() {
                function r() {
                    this.__entries__ = []
                }
                return Object.defineProperty(r.prototype, "size", {
                    get: function() {
                        return this.__entries__.length
                    },
                    enumerable: !0,
                    configurable: !0
                }), r.prototype.get = function(t) {
                    var n = e(this.__entries__, t),
                        o = this.__entries__[n];
                    return o && o[1]
                }, r.prototype.set = function(t, n) {
                    var o = e(this.__entries__, t);
                    ~o ? this.__entries__[o][1] = n : this.__entries__.push([t, n])
                }, r.prototype.delete = function(t) {
                    var n = this.__entries__,
                        o = e(n, t);
                    ~o && n.splice(o, 1)
                }, r.prototype.has = function(t) {
                    return !!~e(this.__entries__, t)
                }, r.prototype.clear = function() {
                    this.__entries__.splice(0)
                }, r.prototype.forEach = function(t, n) {
                    n === void 0 && (n = null);
                    for (var o = 0, i = this.__entries__; o < i.length; o++) {
                        var s = i[o];
                        t.call(n, s[1], s[0])
                    }
                }, r
            }()
        }(),
        Xr = typeof window != "undefined" && typeof document != "undefined" && window.document === document,
        Or = function() {
            return typeof global != "undefined" && global.Math === Math ? global : typeof self != "undefined" && self.Math === Math ? self : typeof window != "undefined" && window.Math === Math ? window : Function("return this")()
        }(),
        Ho = function() {
            return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Or) : function(e) {
                return setTimeout(function() {
                    return e(Date.now())
                }, 1e3 / 60)
            }
        }(),
        Wo = 2;
    function zo(e, r) {
        var t = !1,
            n = !1,
            o = 0;
        function i() {
            t && (t = !1, e()),
            n && u()
        }
        function s() {
            Ho(i)
        }
        function u() {
            var a = Date.now();
            if (t) {
                if (a - o < Wo)
                    return;
                n = !0
            } else
                t = !0,
                n = !1,
                setTimeout(s, r);
            o = a
        }
        return u
    }
    var Uo = 20,
        Vo = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
        jo = typeof MutationObserver != "undefined",
        qo = function() {
            function e() {
                this.connected_ = !1,
                this.mutationEventsAdded_ = !1,
                this.mutationsObserver_ = null,
                this.observers_ = [],
                this.onTransitionEnd_ = this.onTransitionEnd_.bind(this),
                this.refresh = zo(this.refresh.bind(this), Uo)
            }
            return e.prototype.addObserver = function(r) {
                ~this.observers_.indexOf(r) || this.observers_.push(r),
                this.connected_ || this.connect_()
            }, e.prototype.removeObserver = function(r) {
                var t = this.observers_,
                    n = t.indexOf(r);
                ~n && t.splice(n, 1),
                !t.length && this.connected_ && this.disconnect_()
            }, e.prototype.refresh = function() {
                var r = this.updateObservers_();
                r && this.refresh()
            }, e.prototype.updateObservers_ = function() {
                var r = this.observers_.filter(function(t) {
                    return t.gatherActive(), t.hasActive()
                });
                return r.forEach(function(t) {
                    return t.broadcastActive()
                }), r.length > 0
            }, e.prototype.connect_ = function() {
                !Xr || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), jo ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
            }, e.prototype.disconnect_ = function() {
                !Xr || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
            }, e.prototype.onTransitionEnd_ = function(r) {
                var t = r.propertyName,
                    n = t === void 0 ? "" : t,
                    o = Vo.some(function(i) {
                        return !!~n.indexOf(i)
                    });
                o && this.refresh()
            }, e.getInstance = function() {
                return this.instance_ || (this.instance_ = new e), this.instance_
            }, e.instance_ = null, e
        }(),
        wn = function(e, r) {
            for (var t = 0, n = Object.keys(r); t < n.length; t++) {
                var o = n[t];
                Object.defineProperty(e, o, {
                    value: r[o],
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                })
            }
            return e
        },
        ke = function(e) {
            var r = e && e.ownerDocument && e.ownerDocument.defaultView;
            return r || Or
        },
        _n = Ar(0, 0, 0, 0);
    function Tr(e) {
        return parseFloat(e) || 0
    }
    function xn(e) {
        for (var r = [], t = 1; t < arguments.length; t++)
            r[t - 1] = arguments[t];
        return r.reduce(function(n, o) {
            var i = e["border-" + o + "-width"];
            return n + Tr(i)
        }, 0)
    }
    function Do(e) {
        for (var r = ["top", "right", "bottom", "left"], t = {}, n = 0, o = r; n < o.length; n++) {
            var i = o[n],
                s = e["padding-" + i];
            t[i] = Tr(s)
        }
        return t
    }
    function $o(e) {
        var r = e.getBBox();
        return Ar(0, 0, r.width, r.height)
    }
    function No(e) {
        var r = e.clientWidth,
            t = e.clientHeight;
        if (!r && !t)
            return _n;
        var n = ke(e).getComputedStyle(e),
            o = Do(n),
            i = o.left + o.right,
            s = o.top + o.bottom,
            u = Tr(n.width),
            a = Tr(n.height);
        if (n.boxSizing === "border-box" && (Math.round(u + i) !== r && (u -= xn(n, "left", "right") + i), Math.round(a + s) !== t && (a -= xn(n, "top", "bottom") + s)), !Qo(e)) {
            var f = Math.round(u + i) - r,
                c = Math.round(a + s) - t;
            Math.abs(f) !== 1 && (u -= f),
            Math.abs(c) !== 1 && (a -= c)
        }
        return Ar(o.left, o.top, u, a)
    }
    var Go = function() {
        return typeof SVGGraphicsElement != "undefined" ? function(e) {
            return e instanceof ke(e).SVGGraphicsElement
        } : function(e) {
            return e instanceof ke(e).SVGElement && typeof e.getBBox == "function"
        }
    }();
    function Qo(e) {
        return e === ke(e).document.documentElement
    }
    function Ko(e) {
        return Xr ? Go(e) ? $o(e) : No(e) : _n
    }
    function Yo(e) {
        var r = e.x,
            t = e.y,
            n = e.width,
            o = e.height,
            i = typeof DOMRectReadOnly != "undefined" ? DOMRectReadOnly : Object,
            s = Object.create(i.prototype);
        return wn(s, {
            x: r,
            y: t,
            width: n,
            height: o,
            top: t,
            right: r + n,
            bottom: o + t,
            left: r
        }), s
    }
    function Ar(e, r, t, n) {
        return {
            x: e,
            y: r,
            width: t,
            height: n
        }
    }
    var Jo = function() {
            function e(r) {
                this.broadcastWidth = 0,
                this.broadcastHeight = 0,
                this.contentRect_ = Ar(0, 0, 0, 0),
                this.target = r
            }
            return e.prototype.isActive = function() {
                var r = Ko(this.target);
                return this.contentRect_ = r, r.width !== this.broadcastWidth || r.height !== this.broadcastHeight
            }, e.prototype.broadcastRect = function() {
                var r = this.contentRect_;
                return this.broadcastWidth = r.width, this.broadcastHeight = r.height, r
            }, e
        }(),
        Bo = function() {
            function e(r, t) {
                var n = Yo(t);
                wn(this, {
                    target: r,
                    contentRect: n
                })
            }
            return e
        }(),
        Xo = function() {
            function e(r, t, n) {
                if (this.activeObservations_ = [], this.observations_ = new gn, typeof r != "function")
                    throw new TypeError("The callback provided as parameter 1 is not a function.");
                this.callback_ = r,
                this.controller_ = t,
                this.callbackCtx_ = n
            }
            return e.prototype.observe = function(r) {
                if (!arguments.length)
                    throw new TypeError("1 argument required, but only 0 present.");
                if (!(typeof Element == "undefined" || !(Element instanceof Object))) {
                    if (!(r instanceof ke(r).Element))
                        throw new TypeError('parameter 1 is not of type "Element".');
                    var t = this.observations_;
                    t.has(r) || (t.set(r, new Jo(r)), this.controller_.addObserver(this), this.controller_.refresh())
                }
            }, e.prototype.unobserve = function(r) {
                if (!arguments.length)
                    throw new TypeError("1 argument required, but only 0 present.");
                if (!(typeof Element == "undefined" || !(Element instanceof Object))) {
                    if (!(r instanceof ke(r).Element))
                        throw new TypeError('parameter 1 is not of type "Element".');
                    var t = this.observations_;
                    !t.has(r) || (t.delete(r), t.size || this.controller_.removeObserver(this))
                }
            }, e.prototype.disconnect = function() {
                this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this)
            }, e.prototype.gatherActive = function() {
                var r = this;
                this.clearActive(),
                this.observations_.forEach(function(t) {
                    t.isActive() && r.activeObservations_.push(t)
                })
            }, e.prototype.broadcastActive = function() {
                if (!!this.hasActive()) {
                    var r = this.callbackCtx_,
                        t = this.activeObservations_.map(function(n) {
                            return new Bo(n.target, n.broadcastRect())
                        });
                    this.callback_.call(r, t, r),
                    this.clearActive()
                }
            }, e.prototype.clearActive = function() {
                this.activeObservations_.splice(0)
            }, e.prototype.hasActive = function() {
                return this.activeObservations_.length > 0
            }, e
        }(),
        Sn = typeof WeakMap != "undefined" ? new WeakMap : new gn,
        En = function() {
            function e(r) {
                if (!(this instanceof e))
                    throw new TypeError("Cannot call a class as a function.");
                if (!arguments.length)
                    throw new TypeError("1 argument required, but only 0 present.");
                var t = qo.getInstance(),
                    n = new Xo(r, t, this);
                Sn.set(this, n)
            }
            return e
        }();
    ["observe", "unobserve", "disconnect"].forEach(function(e) {
        En.prototype[e] = function() {
            var r;
            return (r = Sn.get(this))[e].apply(r, arguments)
        }
    });
    var Zo = function() {
            return typeof Or.ResizeObserver != "undefined" ? Or.ResizeObserver : En
        }(),
        On = Zo;
    var ei = new B,
        Rp = je(() => ae(new On(e => {
            for (let r of e)
                ei.next(r)
        }))).pipe(K(e => $(qe, ae(e)).pipe(we(() => e.disconnect()))), _e(1));
    function Tn(e) {
        return {
            width: e.offsetWidth,
            height: e.offsetHeight
        }
    }
    function An(e) {
        return {
            width: e.scrollWidth,
            height: e.scrollHeight
        }
    }
    var ri = new B,
        jp = je(() => ae(new IntersectionObserver(e => {
            for (let r of e)
                ri.next(r)
        }, {
            threshold: 0
        }))).pipe(K(e => $(qe, ae(e)).pipe(we(() => e.disconnect()))), _e(1));
    function Mn(e, r=16) {
        return yn(e).pipe(F(({y: t}) => {
            let n = Tn(e),
                o = An(e);
            return t >= o.height - n.height - r
        }), me())
    }
    var Jp = {
        drawer: X("[data-md-toggle=drawer]"),
        search: X("[data-md-toggle=search]")
    };
    function In() {
        return new URL(location.href)
    }
    function Cn(e, r) {
        if (typeof r == "string" || typeof r == "number")
            e.innerHTML += r.toString();
        else if (r instanceof Node)
            e.appendChild(r);
        else if (Array.isArray(r))
            for (let t of r)
                Cn(e, t)
    }
    function Z(e, r, ...t) {
        let n = document.createElement(e);
        if (r)
            for (let o of Object.keys(r))
                typeof r[o] != "undefined" && (typeof r[o] != "boolean" ? n.setAttribute(o, r[o]) : n.setAttribute(o, ""));
        for (let o of t)
            Cn(n, o);
        return n
    }
    function Ln(e) {
        if (e > 999) {
            let r = +((e - 950) % 1e3 > 99);
            return `${((e + 1e-6) / 1e3).toFixed(r)}k`
        } else
            return e.toString()
    }
    function ti(e, r={
        credentials: "same-origin"
    }) {
        return G(fetch(`${e}`, r)).pipe(pe(t => t.status === 200), _r(() => le))
    }
    function Mr(e, r) {
        return ti(e, r).pipe(K(t => t.json()), _e(1))
    }
    function He(e, r=document) {
        return X(`[data-mdx-component=${e}]`, r)
    }
    function Zr(e, r=document) {
        return hn(`[data-mdx-component=${e}]`, r)
    }
    var ni = X("#__config"),
        $e = JSON.parse(ni.textContent);
    $e.base = `${new URL($e.base, In())}`;
    function Rn() {
        return $e
    }
    function Pn(e, r) {
        return typeof r != "undefined" ? $e.translations[e].replace("#", r.toString()) : $e.translations[e]
    }
    function Fn(e) {
        let r = vn(e),
            t = $(Q(e, "keyup"), Q(e, "focus").pipe(Yr(1))).pipe(F(() => e.value), de(e.value), me());
        return r.pipe(pe(n => !n), Fe(t)).subscribe(([, n]) => {
            let o = document.location.pathname;
            typeof ga == "function" && n.length && ga("send", "pageview", `${o}?q=[icon]+${n}`)
        }), Re([t, r]).pipe(F(([n, o]) => ({
            ref: e,
            value: n,
            focus: o
        })))
    }
    var tt = Hr(rt());
    var $n = Hr(rt());
    function Dn(e, r) {
        return (0, $n.wrap)(e.shortcode, r, {
            wrap: {
                tagOpen: "<b>",
                tagClose: "</b>"
            }
        })
    }
    function Nn(e, r, t) {
        return Z("li", {
            class: "mdx-iconsearch-result__item"
        }, Z("span", {
            class: "twemoji"
        }, Z("img", {
            src: e.url
        })), Z("button", {
            class: "md-clipboard--inline",
            title: Pn("clipboard.copy"),
            "data-clipboard-text": t ? e.shortcode : `:${e.shortcode}:`
        }, Z("code", null, t ? Dn(e, r) : `:${Dn(e, r)}:`)))
    }
    function Gn(e) {
        let r = `@${e.name}`;
        return Z("a", {
            href: e.url,
            title: r,
            class: "mdx-sponsorship__item"
        }, Z("img", {
            src: e.image
        }))
    }
    function Qn(e) {
        return Z("a", {
            href: "https://github.com/sponsors/squidfunk",
            class: "mdx-sponsorship__item mdx-sponsorship__item--private"
        }, "+", e)
    }
    function oi(e, {index$: r, query$: t}) {
        switch (e.getAttribute("data-mdx-mode")) {
        case "file":
            return Re([t.pipe(Sr("value")), r.pipe(F(({icons: n}) => Object.values(n.data).map(o => o.replace(/\.svg$/, ""))))]).pipe(F(([{value: n}, o]) => (0, tt.filter)(o, n)), K(n => r.pipe(F(({icons: o}) => ({
                data: n.map(i => ({
                    shortcode: i,
                    url: [o.base, i, ".svg"].join("")
                }))
            })))));
        default:
            return Re([t.pipe(Sr("value")), r.pipe(F(({icons: n, emojis: o}) => [...Object.keys(n.data), ...Object.keys(o.data)]))]).pipe(F(([{value: n}, o]) => (0, tt.filter)(o, n)), K(n => r.pipe(F(({icons: o, emojis: i}) => ({
                data: n.map(s => {
                    let u = s in o.data ? o : i;
                    return {
                        shortcode: s,
                        url: [u.base, u.data[s]].join("")
                    }
                })
            })))))
        }
    }
    function Kn(e, {index$: r, query$: t}) {
        let n = new B,
            o = Mn(e).pipe(pe(Boolean)),
            i = X(":scope > :first-child", e);
        n.pipe(Fe(t)).subscribe(([{data: a}, {value: f}]) => {
            if (f)
                switch (a.length) {
                case 0:
                    i.textContent = "No matches";
                    break;
                case 1:
                    i.textContent = "1 match";
                    break;
                default:
                    i.textContent = `${Ln(a.length)} matches`
                }
            else
                i.textContent = "Type to start searching"
        });
        let s = e.getAttribute("data-mdx-mode") === "file",
            u = X(":scope > :last-child", e);
        return n.pipe(Pe(() => u.innerHTML = ""), K(({data: a}) => $(ae(...a.slice(0, 10)), ae(...a.slice(10)).pipe(Gr(10), Br(o), K(([f]) => f)))), Fe(t)).subscribe(([a, {value: f}]) => u.appendChild(Nn(a, f, s))), oi(e, {
            query$: t,
            index$: r
        }).pipe(Pe(a => n.next(a)), we(() => n.complete()), F(a => Ke({
            ref: e
        }, a)))
    }
    function Yn(e) {
        let r = Rn(),
            t = Mr(new URL("overrides/assets/javascripts/iconsearch_index.json", r.base)),
            n = He("iconsearch-query", e),
            o = He("iconsearch-result", e),
            i = Fn(n),
            s = Kn(o, {
                index$: t,
                query$: i
            });
        return $(i, s)
    }
    function Jn(e) {
        let r = Mr("https://3if8u9o552.execute-api.us-east-1.amazonaws.com/_/"),
            t = He("sponsorship-count"),
            n = He("sponsorship-total");
        return r.subscribe(o => {
            e.removeAttribute("hidden");
            let i = X(":scope > :first-child", e);
            for (let s of o.sponsors)
                s.type === "public" && i.appendChild(Gn(s.user));
            i.appendChild(Qn(o.sponsors.filter(({type: s}) => s === "private").length)),
            t.innerText = `${o.sponsors.length}`,
            n.innerText = `$ ${o.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} a month`
        }), r.pipe(F(o => Ke({
            ref: e
        }, o)))
    }
    function Bn() {
        let {origin: e} = new URL(location.href);
        typeof ga != "undefined" && Q(document.body, "click").subscribe(r => {
            if (r.target instanceof HTMLElement) {
                let t = r.target.closest("a");
                t && t.origin !== e && ga("send", "event", "outbound", "click", t.href)
            }
        })
    }
    Bn();
    var ii = document$.pipe(K(() => $(...Zr("iconsearch").map(e => Yn(e)), ...Zr("sponsorship").map(e => Jn(e)))));
    ii.subscribe();
})();

(() => {
    var sa = Object.create;
    var Sr = Object.defineProperty;
    var ca = Object.getOwnPropertyDescriptor;
    var fa = Object.getOwnPropertyNames,
        Ct = Object.getOwnPropertySymbols,
        ua = Object.getPrototypeOf,
        Or = Object.prototype.hasOwnProperty,
        fn = Object.prototype.propertyIsEnumerable;
    var cn = (e, t, r) => t in e ? Sr(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r,
        H = (e, t) => {
            for (var r in t || (t = {}))
                Or.call(t, r) && cn(e, r, t[r]);
            if (Ct)
                for (var r of Ct(t))
                    fn.call(t, r) && cn(e, r, t[r]);
            return e
        };
    var un = (e, t) => {
        var r = {};
        for (var n in e)
            Or.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (e != null && Ct)
            for (var n of Ct(e))
                t.indexOf(n) < 0 && fn.call(e, n) && (r[n] = e[n]);
        return r
    };
    var gt = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t), t.exports);
    var pa = (e, t, r, n) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let o of fa(t))
                !Or.call(e, o) && o !== r && Sr(e, o, {
                    get: () => t[o],
                    enumerable: !(n = ca(t, o)) || n.enumerable
                });
        return e
    };
    var tt = (e, t, r) => (r = e != null ? sa(ua(e)) : {}, pa(t || !e || !e.__esModule ? Sr(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e));
    var ln = gt((Tr, pn) => {
        (function(e, t) {
            typeof Tr == "object" && typeof pn != "undefined" ? t() : typeof define == "function" && define.amd ? define(t) : t()
        })(Tr, function() {
            "use strict";
            function e(r) {
                var n = !0,
                    o = !1,
                    i = null,
                    a = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };
                function c(_) {
                    return !!(_ && _ !== document && _.nodeName !== "HTML" && _.nodeName !== "BODY" && "classList" in _ && "contains" in _.classList)
                }
                function s(_) {
                    var We = _.type,
                        be = _.tagName;
                    return !!(be === "INPUT" && a[We] && !_.readOnly || be === "TEXTAREA" && !_.readOnly || _.isContentEditable)
                }
                function f(_) {
                    _.classList.contains("focus-visible") || (_.classList.add("focus-visible"), _.setAttribute("data-focus-visible-added", ""))
                }
                function u(_) {
                    !_.hasAttribute("data-focus-visible-added") || (_.classList.remove("focus-visible"), _.removeAttribute("data-focus-visible-added"))
                }
                function p(_) {
                    _.metaKey || _.altKey || _.ctrlKey || (c(r.activeElement) && f(r.activeElement), n = !0)
                }
                function l(_) {
                    n = !1
                }
                function d(_) {
                    !c(_.target) || (n || s(_.target)) && f(_.target)
                }
                function h(_) {
                    !c(_.target) || (_.target.classList.contains("focus-visible") || _.target.hasAttribute("data-focus-visible-added")) && (o = !0, window.clearTimeout(i), i = window.setTimeout(function() {
                        o = !1
                    }, 100), u(_.target))
                }
                function b(_) {
                    document.visibilityState === "hidden" && (o && (n = !0), F())
                }
                function F() {
                    document.addEventListener("mousemove", U),
                    document.addEventListener("mousedown", U),
                    document.addEventListener("mouseup", U),
                    document.addEventListener("pointermove", U),
                    document.addEventListener("pointerdown", U),
                    document.addEventListener("pointerup", U),
                    document.addEventListener("touchmove", U),
                    document.addEventListener("touchstart", U),
                    document.addEventListener("touchend", U)
                }
                function Y() {
                    document.removeEventListener("mousemove", U),
                    document.removeEventListener("mousedown", U),
                    document.removeEventListener("mouseup", U),
                    document.removeEventListener("pointermove", U),
                    document.removeEventListener("pointerdown", U),
                    document.removeEventListener("pointerup", U),
                    document.removeEventListener("touchmove", U),
                    document.removeEventListener("touchstart", U),
                    document.removeEventListener("touchend", U)
                }
                function U(_) {
                    _.target.nodeName && _.target.nodeName.toLowerCase() === "html" || (n = !1, Y())
                }
                document.addEventListener("keydown", p, !0),
                document.addEventListener("mousedown", l, !0),
                document.addEventListener("pointerdown", l, !0),
                document.addEventListener("touchstart", l, !0),
                document.addEventListener("visibilitychange", b, !0),
                F(),
                r.addEventListener("focus", d, !0),
                r.addEventListener("blur", h, !0),
                r.nodeType === Node.DOCUMENT_FRAGMENT_NODE && r.host ? r.host.setAttribute("data-js-focus-visible", "") : r.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"), document.documentElement.setAttribute("data-js-focus-visible", ""))
            }
            if (typeof window != "undefined" && typeof document != "undefined") {
                window.applyFocusVisiblePolyfill = e;
                var t;
                try {
                    t = new CustomEvent("focus-visible-polyfill-ready")
                } catch (r) {
                    t = document.createEvent("CustomEvent"),
                    t.initCustomEvent("focus-visible-polyfill-ready", !1, !1, {})
                }
                window.dispatchEvent(t)
            }
            typeof document != "undefined" && e(document)
        })
    });
    var mn = gt(_r => {
        (function(e) {
            var t = function() {
                    try {
                        return !!Symbol.iterator
                    } catch (f) {
                        return !1
                    }
                },
                r = t(),
                n = function(f) {
                    var u = {
                        next: function() {
                            var p = f.shift();
                            return {
                                done: p === void 0,
                                value: p
                            }
                        }
                    };
                    return r && (u[Symbol.iterator] = function() {
                        return u
                    }), u
                },
                o = function(f) {
                    return encodeURIComponent(f).replace(/%20/g, "+")
                },
                i = function(f) {
                    return decodeURIComponent(String(f).replace(/\+/g, " "))
                },
                a = function() {
                    var f = function(p) {
                            Object.defineProperty(this, "_entries", {
                                writable: !0,
                                value: {}
                            });
                            var l = typeof p;
                            if (l !== "undefined")
                                if (l === "string")
                                    p !== "" && this._fromString(p);
                                else if (p instanceof f) {
                                    var d = this;
                                    p.forEach(function(Y, U) {
                                        d.append(U, Y)
                                    })
                                } else if (p !== null && l === "object")
                                    if (Object.prototype.toString.call(p) === "[object Array]")
                                        for (var h = 0; h < p.length; h++) {
                                            var b = p[h];
                                            if (Object.prototype.toString.call(b) === "[object Array]" || b.length !== 2)
                                                this.append(b[0], b[1]);
                                            else
                                                throw new TypeError("Expected [string, any] as entry at index " + h + " of URLSearchParams's input")
                                        }
                                    else
                                        for (var F in p)
                                            p.hasOwnProperty(F) && this.append(F, p[F]);
                                else
                                    throw new TypeError("Unsupported input's type for URLSearchParams")
                        },
                        u = f.prototype;
                    u.append = function(p, l) {
                        p in this._entries ? this._entries[p].push(String(l)) : this._entries[p] = [String(l)]
                    },
                    u.delete = function(p) {
                        delete this._entries[p]
                    },
                    u.get = function(p) {
                        return p in this._entries ? this._entries[p][0] : null
                    },
                    u.getAll = function(p) {
                        return p in this._entries ? this._entries[p].slice(0) : []
                    },
                    u.has = function(p) {
                        return p in this._entries
                    },
                    u.set = function(p, l) {
                        this._entries[p] = [String(l)]
                    },
                    u.forEach = function(p, l) {
                        var d;
                        for (var h in this._entries)
                            if (this._entries.hasOwnProperty(h)) {
                                d = this._entries[h];
                                for (var b = 0; b < d.length; b++)
                                    p.call(l, d[b], h, this)
                            }
                    },
                    u.keys = function() {
                        var p = [];
                        return this.forEach(function(l, d) {
                            p.push(d)
                        }), n(p)
                    },
                    u.values = function() {
                        var p = [];
                        return this.forEach(function(l) {
                            p.push(l)
                        }), n(p)
                    },
                    u.entries = function() {
                        var p = [];
                        return this.forEach(function(l, d) {
                            p.push([d, l])
                        }), n(p)
                    },
                    r && (u[Symbol.iterator] = u.entries),
                    u.toString = function() {
                        var p = [];
                        return this.forEach(function(l, d) {
                            p.push(o(d) + "=" + o(l))
                        }), p.join("&")
                    },
                    e.URLSearchParams = f
                },
                c = function() {
                    try {
                        var f = e.URLSearchParams;
                        return new f("?a=1").toString() === "a=1" && typeof f.prototype.set == "function" && typeof f.prototype.entries == "function"
                    } catch (u) {
                        return !1
                    }
                };
            c() || a();
            var s = e.URLSearchParams.prototype;
            typeof s.sort != "function" && (s.sort = function() {
                var f = this,
                    u = [];
                this.forEach(function(l, d) {
                    u.push([d, l]),
                    f._entries || f.delete(d)
                }),
                u.sort(function(l, d) {
                    return l[0] < d[0] ? -1 : l[0] > d[0] ? 1 : 0
                }),
                f._entries && (f._entries = {});
                for (var p = 0; p < u.length; p++)
                    this.append(u[p][0], u[p][1])
            }),
            typeof s._fromString != "function" && Object.defineProperty(s, "_fromString", {
                enumerable: !1,
                configurable: !1,
                writable: !1,
                value: function(f) {
                    if (this._entries)
                        this._entries = {};
                    else {
                        var u = [];
                        this.forEach(function(h, b) {
                            u.push(b)
                        });
                        for (var p = 0; p < u.length; p++)
                            this.delete(u[p])
                    }
                    f = f.replace(/^\?/, "");
                    for (var l = f.split("&"), d, p = 0; p < l.length; p++)
                        d = l[p].split("="),
                        this.append(i(d[0]), d.length > 1 ? i(d[1]) : "")
                }
            })
        })(typeof global != "undefined" ? global : typeof window != "undefined" ? window : typeof self != "undefined" ? self : _r);
        (function(e) {
            var t = function() {
                    try {
                        var o = new e.URL("b", "http://a");
                        return o.pathname = "c d", o.href === "http://a/c%20d" && o.searchParams
                    } catch (i) {
                        return !1
                    }
                },
                r = function() {
                    var o = e.URL,
                        i = function(s, f) {
                            typeof s != "string" && (s = String(s)),
                            f && typeof f != "string" && (f = String(f));
                            var u = document,
                                p;
                            if (f && (e.location === void 0 || f !== e.location.href)) {
                                f = f.toLowerCase(),
                                u = document.implementation.createHTMLDocument(""),
                                p = u.createElement("base"),
                                p.href = f,
                                u.head.appendChild(p);
                                try {
                                    if (p.href.indexOf(f) !== 0)
                                        throw new Error(p.href)
                                } catch (_) {
                                    throw new Error("URL unable to set base " + f + " due to " + _)
                                }
                            }
                            var l = u.createElement("a");
                            l.href = s,
                            p && (u.body.appendChild(l), l.href = l.href);
                            var d = u.createElement("input");
                            if (d.type = "url", d.value = s, l.protocol === ":" || !/:/.test(l.href) || !d.checkValidity() && !f)
                                throw new TypeError("Invalid URL");
                            Object.defineProperty(this, "_anchorElement", {
                                value: l
                            });
                            var h = new e.URLSearchParams(this.search),
                                b = !0,
                                F = !0,
                                Y = this;
                            ["append", "delete", "set"].forEach(function(_) {
                                var We = h[_];
                                h[_] = function() {
                                    We.apply(h, arguments),
                                    b && (F = !1, Y.search = h.toString(), F = !0)
                                }
                            }),
                            Object.defineProperty(this, "searchParams", {
                                value: h,
                                enumerable: !0
                            });
                            var U = void 0;
                            Object.defineProperty(this, "_updateSearchParams", {
                                enumerable: !1,
                                configurable: !1,
                                writable: !1,
                                value: function() {
                                    this.search !== U && (U = this.search, F && (b = !1, this.searchParams._fromString(this.search), b = !0))
                                }
                            })
                        },
                        a = i.prototype,
                        c = function(s) {
                            Object.defineProperty(a, s, {
                                get: function() {
                                    return this._anchorElement[s]
                                },
                                set: function(f) {
                                    this._anchorElement[s] = f
                                },
                                enumerable: !0
                            })
                        };
                    ["hash", "host", "hostname", "port", "protocol"].forEach(function(s) {
                        c(s)
                    }),
                    Object.defineProperty(a, "search", {
                        get: function() {
                            return this._anchorElement.search
                        },
                        set: function(s) {
                            this._anchorElement.search = s,
                            this._updateSearchParams()
                        },
                        enumerable: !0
                    }),
                    Object.defineProperties(a, {
                        toString: {
                            get: function() {
                                var s = this;
                                return function() {
                                    return s.href
                                }
                            }
                        },
                        href: {
                            get: function() {
                                return this._anchorElement.href.replace(/\?$/, "")
                            },
                            set: function(s) {
                                this._anchorElement.href = s,
                                this._updateSearchParams()
                            },
                            enumerable: !0
                        },
                        pathname: {
                            get: function() {
                                return this._anchorElement.pathname.replace(/(^\/?)/, "/")
                            },
                            set: function(s) {
                                this._anchorElement.pathname = s
                            },
                            enumerable: !0
                        },
                        origin: {
                            get: function() {
                                var s = {
                                        "http:": 80,
                                        "https:": 443,
                                        "ftp:": 21
                                    }[this._anchorElement.protocol],
                                    f = this._anchorElement.port != s && this._anchorElement.port !== "";
                                return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (f ? ":" + this._anchorElement.port : "")
                            },
                            enumerable: !0
                        },
                        password: {
                            get: function() {
                                return ""
                            },
                            set: function(s) {},
                            enumerable: !0
                        },
                        username: {
                            get: function() {
                                return ""
                            },
                            set: function(s) {},
                            enumerable: !0
                        }
                    }),
                    i.createObjectURL = function(s) {
                        return o.createObjectURL.apply(o, arguments)
                    },
                    i.revokeObjectURL = function(s) {
                        return o.revokeObjectURL.apply(o, arguments)
                    },
                    e.URL = i
                };
            if (t() || r(), e.location !== void 0 && !("origin" in e.location)) {
                var n = function() {
                    return e.location.protocol + "//" + e.location.hostname + (e.location.port ? ":" + e.location.port : "")
                };
                try {
                    Object.defineProperty(e.location, "origin", {
                        get: n,
                        enumerable: !0
                    })
                } catch (o) {
                    setInterval(function() {
                        e.location.origin = n()
                    }, 100)
                }
            }
        })(typeof global != "undefined" ? global : typeof window != "undefined" ? window : typeof self != "undefined" ? self : _r)
    });
    var Pn = gt((Qs, Ht) => {
        var dn,
            hn,
            bn,
            vn,
            gn,
            yn,
            xn,
            wn,
            En,
            Rt,
            Mr,
            Sn,
            On,
            Tn,
            rt,
            _n,
            Mn,
            Ln,
            An,
            Cn,
            Rn,
            kn,
            Hn,
            kt;
        (function(e) {
            var t = typeof global == "object" ? global : typeof self == "object" ? self : typeof this == "object" ? this : {};
            typeof define == "function" && define.amd ? define("tslib", ["exports"], function(n) {
                e(r(t, r(n)))
            }) : typeof Ht == "object" && typeof Ht.exports == "object" ? e(r(t, r(Ht.exports))) : e(r(t));
            function r(n, o) {
                return n !== t && (typeof Object.create == "function" ? Object.defineProperty(n, "__esModule", {
                    value: !0
                }) : n.__esModule = !0), function(i, a) {
                    return n[i] = o ? o(i, a) : a
                }
            }
        })(function(e) {
            var t = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function(n, o) {
                n.__proto__ = o
            } || function(n, o) {
                for (var i in o)
                    Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i])
            };
            dn = function(n, o) {
                if (typeof o != "function" && o !== null)
                    throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
                t(n, o);
                function i() {
                    this.constructor = n
                }
                n.prototype = o === null ? Object.create(o) : (i.prototype = o.prototype, new i)
            },
            hn = Object.assign || function(n) {
                for (var o, i = 1, a = arguments.length; i < a; i++) {
                    o = arguments[i];
                    for (var c in o)
                        Object.prototype.hasOwnProperty.call(o, c) && (n[c] = o[c])
                }
                return n
            },
            bn = function(n, o) {
                var i = {};
                for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && o.indexOf(a) < 0 && (i[a] = n[a]);
                if (n != null && typeof Object.getOwnPropertySymbols == "function")
                    for (var c = 0, a = Object.getOwnPropertySymbols(n); c < a.length; c++)
                        o.indexOf(a[c]) < 0 && Object.prototype.propertyIsEnumerable.call(n, a[c]) && (i[a[c]] = n[a[c]]);
                return i
            },
            vn = function(n, o, i, a) {
                var c = arguments.length,
                    s = c < 3 ? o : a === null ? a = Object.getOwnPropertyDescriptor(o, i) : a,
                    f;
                if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
                    s = Reflect.decorate(n, o, i, a);
                else
                    for (var u = n.length - 1; u >= 0; u--)
                        (f = n[u]) && (s = (c < 3 ? f(s) : c > 3 ? f(o, i, s) : f(o, i)) || s);
                return c > 3 && s && Object.defineProperty(o, i, s), s
            },
            gn = function(n, o) {
                return function(i, a) {
                    o(i, a, n)
                }
            },
            yn = function(n, o) {
                if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
                    return Reflect.metadata(n, o)
            },
            xn = function(n, o, i, a) {
                function c(s) {
                    return s instanceof i ? s : new i(function(f) {
                        f(s)
                    })
                }
                return new (i || (i = Promise))(function(s, f) {
                    function u(d) {
                        try {
                            l(a.next(d))
                        } catch (h) {
                            f(h)
                        }
                    }
                    function p(d) {
                        try {
                            l(a.throw(d))
                        } catch (h) {
                            f(h)
                        }
                    }
                    function l(d) {
                        d.done ? s(d.value) : c(d.value).then(u, p)
                    }
                    l((a = a.apply(n, o || [])).next())
                })
            },
            wn = function(n, o) {
                var i = {
                        label: 0,
                        sent: function() {
                            if (s[0] & 1)
                                throw s[1];
                            return s[1]
                        },
                        trys: [],
                        ops: []
                    },
                    a,
                    c,
                    s,
                    f;
                return f = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
                    return this
                }), f;
                function u(l) {
                    return function(d) {
                        return p([l, d])
                    }
                }
                function p(l) {
                    if (a)
                        throw new TypeError("Generator is already executing.");
                    for (; i;)
                        try {
                            if (a = 1, c && (s = l[0] & 2 ? c.return : l[0] ? c.throw || ((s = c.return) && s.call(c), 0) : c.next) && !(s = s.call(c, l[1])).done)
                                return s;
                            switch (c = 0, s && (l = [l[0] & 2, s.value]), l[0]) {
                            case 0:
                            case 1:
                                s = l;
                                break;
                            case 4:
                                return i.label++, {
                                    value: l[1],
                                    done: !1
                                };
                            case 5:
                                i.label++,
                                c = l[1],
                                l = [0];
                                continue;
                            case 7:
                                l = i.ops.pop(),
                                i.trys.pop();
                                continue;
                            default:
                                if (s = i.trys, !(s = s.length > 0 && s[s.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                                    i = 0;
                                    continue
                                }
                                if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) {
                                    i.label = l[1];
                                    break
                                }
                                if (l[0] === 6 && i.label < s[1]) {
                                    i.label = s[1],
                                    s = l;
                                    break
                                }
                                if (s && i.label < s[2]) {
                                    i.label = s[2],
                                    i.ops.push(l);
                                    break
                                }
                                s[2] && i.ops.pop(),
                                i.trys.pop();
                                continue
                            }
                            l = o.call(n, i)
                        } catch (d) {
                            l = [6, d],
                            c = 0
                        } finally {
                            a = s = 0
                        }
                    if (l[0] & 5)
                        throw l[1];
                    return {
                        value: l[0] ? l[1] : void 0,
                        done: !0
                    }
                }
            },
            En = function(n, o) {
                for (var i in n)
                    i !== "default" && !Object.prototype.hasOwnProperty.call(o, i) && kt(o, n, i)
            },
            kt = Object.create ? function(n, o, i, a) {
                a === void 0 && (a = i),
                Object.defineProperty(n, a, {
                    enumerable: !0,
                    get: function() {
                        return o[i]
                    }
                })
            } : function(n, o, i, a) {
                a === void 0 && (a = i),
                n[a] = o[i]
            },
            Rt = function(n) {
                var o = typeof Symbol == "function" && Symbol.iterator,
                    i = o && n[o],
                    a = 0;
                if (i)
                    return i.call(n);
                if (n && typeof n.length == "number")
                    return {
                        next: function() {
                            return n && a >= n.length && (n = void 0), {
                                value: n && n[a++],
                                done: !n
                            }
                        }
                    };
                throw new TypeError(o ? "Object is not iterable." : "Symbol.iterator is not defined.")
            },
            Mr = function(n, o) {
                var i = typeof Symbol == "function" && n[Symbol.iterator];
                if (!i)
                    return n;
                var a = i.call(n),
                    c,
                    s = [],
                    f;
                try {
                    for (; (o === void 0 || o-- > 0) && !(c = a.next()).done;)
                        s.push(c.value)
                } catch (u) {
                    f = {
                        error: u
                    }
                } finally {
                    try {
                        c && !c.done && (i = a.return) && i.call(a)
                    } finally {
                        if (f)
                            throw f.error
                    }
                }
                return s
            },
            Sn = function() {
                for (var n = [], o = 0; o < arguments.length; o++)
                    n = n.concat(Mr(arguments[o]));
                return n
            },
            On = function() {
                for (var n = 0, o = 0, i = arguments.length; o < i; o++)
                    n += arguments[o].length;
                for (var a = Array(n), c = 0, o = 0; o < i; o++)
                    for (var s = arguments[o], f = 0, u = s.length; f < u; f++, c++)
                        a[c] = s[f];
                return a
            },
            Tn = function(n, o, i) {
                if (i || arguments.length === 2)
                    for (var a = 0, c = o.length, s; a < c; a++)
                        (s || !(a in o)) && (s || (s = Array.prototype.slice.call(o, 0, a)), s[a] = o[a]);
                return n.concat(s || Array.prototype.slice.call(o))
            },
            rt = function(n) {
                return this instanceof rt ? (this.v = n, this) : new rt(n)
            },
            _n = function(n, o, i) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var a = i.apply(n, o || []),
                    c,
                    s = [];
                return c = {}, f("next"), f("throw"), f("return"), c[Symbol.asyncIterator] = function() {
                    return this
                }, c;
                function f(b) {
                    a[b] && (c[b] = function(F) {
                        return new Promise(function(Y, U) {
                            s.push([b, F, Y, U]) > 1 || u(b, F)
                        })
                    })
                }
                function u(b, F) {
                    try {
                        p(a[b](F))
                    } catch (Y) {
                        h(s[0][3], Y)
                    }
                }
                function p(b) {
                    b.value instanceof rt ? Promise.resolve(b.value.v).then(l, d) : h(s[0][2], b)
                }
                function l(b) {
                    u("next", b)
                }
                function d(b) {
                    u("throw", b)
                }
                function h(b, F) {
                    b(F),
                    s.shift(),
                    s.length && u(s[0][0], s[0][1])
                }
            },
            Mn = function(n) {
                var o,
                    i;
                return o = {}, a("next"), a("throw", function(c) {
                    throw c
                }), a("return"), o[Symbol.iterator] = function() {
                    return this
                }, o;
                function a(c, s) {
                    o[c] = n[c] ? function(f) {
                        return (i = !i) ? {
                            value: rt(n[c](f)),
                            done: c === "return"
                        } : s ? s(f) : f
                    } : s
                }
            },
            Ln = function(n) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var o = n[Symbol.asyncIterator],
                    i;
                return o ? o.call(n) : (n = typeof Rt == "function" ? Rt(n) : n[Symbol.iterator](), i = {}, a("next"), a("throw"), a("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i);
                function a(s) {
                    i[s] = n[s] && function(f) {
                        return new Promise(function(u, p) {
                            f = n[s](f),
                            c(u, p, f.done, f.value)
                        })
                    }
                }
                function c(s, f, u, p) {
                    Promise.resolve(p).then(function(l) {
                        s({
                            value: l,
                            done: u
                        })
                    }, f)
                }
            },
            An = function(n, o) {
                return Object.defineProperty ? Object.defineProperty(n, "raw", {
                    value: o
                }) : n.raw = o, n
            };
            var r = Object.create ? function(n, o) {
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: o
                })
            } : function(n, o) {
                n.default = o
            };
            Cn = function(n) {
                if (n && n.__esModule)
                    return n;
                var o = {};
                if (n != null)
                    for (var i in n)
                        i !== "default" && Object.prototype.hasOwnProperty.call(n, i) && kt(o, n, i);
                return r(o, n), o
            },
            Rn = function(n) {
                return n && n.__esModule ? n : {
                    default: n
                }
            },
            kn = function(n, o, i, a) {
                if (i === "a" && !a)
                    throw new TypeError("Private accessor was defined without a getter");
                if (typeof o == "function" ? n !== o || !a : !o.has(n))
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return i === "m" ? a : i === "a" ? a.call(n) : a ? a.value : o.get(n)
            },
            Hn = function(n, o, i, a, c) {
                if (a === "m")
                    throw new TypeError("Private method is not writable");
                if (a === "a" && !c)
                    throw new TypeError("Private accessor was defined without a setter");
                if (typeof o == "function" ? n !== o || !c : !o.has(n))
                    throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return a === "a" ? c.call(n, i) : c ? c.value = i : o.set(n, i), i
            },
            e("__extends", dn),
            e("__assign", hn),
            e("__rest", bn),
            e("__decorate", vn),
            e("__param", gn),
            e("__metadata", yn),
            e("__awaiter", xn),
            e("__generator", wn),
            e("__exportStar", En),
            e("__createBinding", kt),
            e("__values", Rt),
            e("__read", Mr),
            e("__spread", Sn),
            e("__spreadArrays", On),
            e("__spreadArray", Tn),
            e("__await", rt),
            e("__asyncGenerator", _n),
            e("__asyncDelegator", Mn),
            e("__asyncValues", Ln),
            e("__makeTemplateObject", An),
            e("__importStar", Cn),
            e("__importDefault", Rn),
            e("__classPrivateFieldGet", kn),
            e("__classPrivateFieldSet", Hn)
        })
    });
    var Zr = gt((Mt, Xr) => {
        (function(t, r) {
            typeof Mt == "object" && typeof Xr == "object" ? Xr.exports = r() : typeof define == "function" && define.amd ? define([], r) : typeof Mt == "object" ? Mt.ClipboardJS = r() : t.ClipboardJS = r()
        })(Mt, function() {
            return function() {
                var e = {
                        686: function(n, o, i) {
                            "use strict";
                            i.d(o, {
                                default: function() {
                                    return aa
                                }
                            });
                            var a = i(279),
                                c = i.n(a),
                                s = i(370),
                                f = i.n(s),
                                u = i(817),
                                p = i.n(u);
                            function l($) {
                                try {
                                    return document.execCommand($)
                                } catch (L) {
                                    return !1
                                }
                            }
                            var d = function(L) {
                                    var O = p()(L);
                                    return l("cut"), O
                                },
                                h = d;
                            function b($) {
                                var L = document.documentElement.getAttribute("dir") === "rtl",
                                    O = document.createElement("textarea");
                                O.style.fontSize = "12pt",
                                O.style.border = "0",
                                O.style.padding = "0",
                                O.style.margin = "0",
                                O.style.position = "absolute",
                                O.style[L ? "right" : "left"] = "-9999px";
                                var W = window.pageYOffset || document.documentElement.scrollTop;
                                return O.style.top = "".concat(W, "px"), O.setAttribute("readonly", ""), O.value = $, O
                            }
                            var F = function(L) {
                                    var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                                            container: document.body
                                        },
                                        W = "";
                                    if (typeof L == "string") {
                                        var k = b(L);
                                        O.container.appendChild(k),
                                        W = p()(k),
                                        l("copy"),
                                        k.remove()
                                    } else
                                        W = p()(L),
                                        l("copy");
                                    return W
                                },
                                Y = F;
                            function U($) {
                                return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? U = function(O) {
                                    return typeof O
                                } : U = function(O) {
                                    return O && typeof Symbol == "function" && O.constructor === Symbol && O !== Symbol.prototype ? "symbol" : typeof O
                                }, U($)
                            }
                            var _ = function() {
                                    var L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                                        O = L.action,
                                        W = O === void 0 ? "copy" : O,
                                        k = L.container,
                                        z = L.target,
                                        Me = L.text;
                                    if (W !== "copy" && W !== "cut")
                                        throw new Error('Invalid "action" value, use either "copy" or "cut"');
                                    if (z !== void 0)
                                        if (z && U(z) === "object" && z.nodeType === 1) {
                                            if (W === "copy" && z.hasAttribute("disabled"))
                                                throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                            if (W === "cut" && (z.hasAttribute("readonly") || z.hasAttribute("disabled")))
                                                throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)
                                        } else
                                            throw new Error('Invalid "target" value, use a valid Element');
                                    if (Me)
                                        return Y(Me, {
                                            container: k
                                        });
                                    if (z)
                                        return W === "cut" ? h(z) : Y(z, {
                                            container: k
                                        })
                                },
                                We = _;
                            function be($) {
                                return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? be = function(O) {
                                    return typeof O
                                } : be = function(O) {
                                    return O && typeof Symbol == "function" && O.constructor === Symbol && O !== Symbol.prototype ? "symbol" : typeof O
                                }, be($)
                            }
                            function et($, L) {
                                if (!($ instanceof L))
                                    throw new TypeError("Cannot call a class as a function")
                            }
                            function sn($, L) {
                                for (var O = 0; O < L.length; O++) {
                                    var W = L[O];
                                    W.enumerable = W.enumerable || !1,
                                    W.configurable = !0,
                                    "value" in W && (W.writable = !0),
                                    Object.defineProperty($, W.key, W)
                                }
                            }
                            function Zi($, L, O) {
                                return L && sn($.prototype, L), O && sn($, O), $
                            }
                            function ea($, L) {
                                if (typeof L != "function" && L !== null)
                                    throw new TypeError("Super expression must either be null or a function");
                                $.prototype = Object.create(L && L.prototype, {
                                    constructor: {
                                        value: $,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }),
                                L && wr($, L)
                            }
                            function wr($, L) {
                                return wr = Object.setPrototypeOf || function(W, k) {
                                    return W.__proto__ = k, W
                                }, wr($, L)
                            }
                            function ta($) {
                                var L = oa();
                                return function() {
                                    var W = Lt($),
                                        k;
                                    if (L) {
                                        var z = Lt(this).constructor;
                                        k = Reflect.construct(W, arguments, z)
                                    } else
                                        k = W.apply(this, arguments);
                                    return ra(this, k)
                                }
                            }
                            function ra($, L) {
                                return L && (be(L) === "object" || typeof L == "function") ? L : na($)
                            }
                            function na($) {
                                if ($ === void 0)
                                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return $
                            }
                            function oa() {
                                if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
                                    return !1;
                                if (typeof Proxy == "function")
                                    return !0;
                                try {
                                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                                } catch ($) {
                                    return !1
                                }
                            }
                            function Lt($) {
                                return Lt = Object.setPrototypeOf ? Object.getPrototypeOf : function(O) {
                                    return O.__proto__ || Object.getPrototypeOf(O)
                                }, Lt($)
                            }
                            function Er($, L) {
                                var O = "data-clipboard-".concat($);
                                if (!!L.hasAttribute(O))
                                    return L.getAttribute(O)
                            }
                            var ia = function($) {
                                    ea(O, $);
                                    var L = ta(O);
                                    function O(W, k) {
                                        var z;
                                        return et(this, O), z = L.call(this), z.resolveOptions(k), z.listenClick(W), z
                                    }
                                    return Zi(O, [{
                                        key: "resolveOptions",
                                        value: function() {
                                            var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                                            this.action = typeof k.action == "function" ? k.action : this.defaultAction,
                                            this.target = typeof k.target == "function" ? k.target : this.defaultTarget,
                                            this.text = typeof k.text == "function" ? k.text : this.defaultText,
                                            this.container = be(k.container) === "object" ? k.container : document.body
                                        }
                                    }, {
                                        key: "listenClick",
                                        value: function(k) {
                                            var z = this;
                                            this.listener = f()(k, "click", function(Me) {
                                                return z.onClick(Me)
                                            })
                                        }
                                    }, {
                                        key: "onClick",
                                        value: function(k) {
                                            var z = k.delegateTarget || k.currentTarget,
                                                Me = this.action(z) || "copy",
                                                At = We({
                                                    action: Me,
                                                    container: this.container,
                                                    target: this.target(z),
                                                    text: this.text(z)
                                                });
                                            this.emit(At ? "success" : "error", {
                                                action: Me,
                                                text: At,
                                                trigger: z,
                                                clearSelection: function() {
                                                    z && z.focus(),
                                                    document.activeElement.blur(),
                                                    window.getSelection().removeAllRanges()
                                                }
                                            })
                                        }
                                    }, {
                                        key: "defaultAction",
                                        value: function(k) {
                                            return Er("action", k)
                                        }
                                    }, {
                                        key: "defaultTarget",
                                        value: function(k) {
                                            var z = Er("target", k);
                                            if (z)
                                                return document.querySelector(z)
                                        }
                                    }, {
                                        key: "defaultText",
                                        value: function(k) {
                                            return Er("text", k)
                                        }
                                    }, {
                                        key: "destroy",
                                        value: function() {
                                            this.listener.destroy()
                                        }
                                    }], [{
                                        key: "copy",
                                        value: function(k) {
                                            var z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                                                container: document.body
                                            };
                                            return Y(k, z)
                                        }
                                    }, {
                                        key: "cut",
                                        value: function(k) {
                                            return h(k)
                                        }
                                    }, {
                                        key: "isSupported",
                                        value: function() {
                                            var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"],
                                                z = typeof k == "string" ? [k] : k,
                                                Me = !!document.queryCommandSupported;
                                            return z.forEach(function(At) {
                                                Me = Me && !!document.queryCommandSupported(At)
                                            }), Me
                                        }
                                    }]), O
                                }(c()),
                                aa = ia
                        },
                        828: function(n) {
                            var o = 9;
                            if (typeof Element != "undefined" && !Element.prototype.matches) {
                                var i = Element.prototype;
                                i.matches = i.matchesSelector || i.mozMatchesSelector || i.msMatchesSelector || i.oMatchesSelector || i.webkitMatchesSelector
                            }
                            function a(c, s) {
                                for (; c && c.nodeType !== o;) {
                                    if (typeof c.matches == "function" && c.matches(s))
                                        return c;
                                    c = c.parentNode
                                }
                            }
                            n.exports = a
                        },
                        438: function(n, o, i) {
                            var a = i(828);
                            function c(u, p, l, d, h) {
                                var b = f.apply(this, arguments);
                                return u.addEventListener(l, b, h), {
                                    destroy: function() {
                                        u.removeEventListener(l, b, h)
                                    }
                                }
                            }
                            function s(u, p, l, d, h) {
                                return typeof u.addEventListener == "function" ? c.apply(null, arguments) : typeof l == "function" ? c.bind(null, document).apply(null, arguments) : (typeof u == "string" && (u = document.querySelectorAll(u)), Array.prototype.map.call(u, function(b) {
                                    return c(b, p, l, d, h)
                                }))
                            }
                            function f(u, p, l, d) {
                                return function(h) {
                                    h.delegateTarget = a(h.target, p),
                                    h.delegateTarget && d.call(u, h)
                                }
                            }
                            n.exports = s
                        },
                        879: function(n, o) {
                            o.node = function(i) {
                                return i !== void 0 && i instanceof HTMLElement && i.nodeType === 1
                            },
                            o.nodeList = function(i) {
                                var a = Object.prototype.toString.call(i);
                                return i !== void 0 && (a === "[object NodeList]" || a === "[object HTMLCollection]") && "length" in i && (i.length === 0 || o.node(i[0]))
                            },
                            o.string = function(i) {
                                return typeof i == "string" || i instanceof String
                            },
                            o.fn = function(i) {
                                var a = Object.prototype.toString.call(i);
                                return a === "[object Function]"
                            }
                        },
                        370: function(n, o, i) {
                            var a = i(879),
                                c = i(438);
                            function s(l, d, h) {
                                if (!l && !d && !h)
                                    throw new Error("Missing required arguments");
                                if (!a.string(d))
                                    throw new TypeError("Second argument must be a String");
                                if (!a.fn(h))
                                    throw new TypeError("Third argument must be a Function");
                                if (a.node(l))
                                    return f(l, d, h);
                                if (a.nodeList(l))
                                    return u(l, d, h);
                                if (a.string(l))
                                    return p(l, d, h);
                                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
                            }
                            function f(l, d, h) {
                                return l.addEventListener(d, h), {
                                    destroy: function() {
                                        l.removeEventListener(d, h)
                                    }
                                }
                            }
                            function u(l, d, h) {
                                return Array.prototype.forEach.call(l, function(b) {
                                    b.addEventListener(d, h)
                                }), {
                                    destroy: function() {
                                        Array.prototype.forEach.call(l, function(b) {
                                            b.removeEventListener(d, h)
                                        })
                                    }
                                }
                            }
                            function p(l, d, h) {
                                return c(document.body, l, d, h)
                            }
                            n.exports = s
                        },
                        817: function(n) {
                            function o(i) {
                                var a;
                                if (i.nodeName === "SELECT")
                                    i.focus(),
                                    a = i.value;
                                else if (i.nodeName === "INPUT" || i.nodeName === "TEXTAREA") {
                                    var c = i.hasAttribute("readonly");
                                    c || i.setAttribute("readonly", ""),
                                    i.select(),
                                    i.setSelectionRange(0, i.value.length),
                                    c || i.removeAttribute("readonly"),
                                    a = i.value
                                } else {
                                    i.hasAttribute("contenteditable") && i.focus();
                                    var s = window.getSelection(),
                                        f = document.createRange();
                                    f.selectNodeContents(i),
                                    s.removeAllRanges(),
                                    s.addRange(f),
                                    a = s.toString()
                                }
                                return a
                            }
                            n.exports = o
                        },
                        279: function(n) {
                            function o() {}
                            o.prototype = {
                                on: function(i, a, c) {
                                    var s = this.e || (this.e = {});
                                    return (s[i] || (s[i] = [])).push({
                                        fn: a,
                                        ctx: c
                                    }), this
                                },
                                once: function(i, a, c) {
                                    var s = this;
                                    function f() {
                                        s.off(i, f),
                                        a.apply(c, arguments)
                                    }
                                    return f._ = a, this.on(i, f, c)
                                },
                                emit: function(i) {
                                    var a = [].slice.call(arguments, 1),
                                        c = ((this.e || (this.e = {}))[i] || []).slice(),
                                        s = 0,
                                        f = c.length;
                                    for (s; s < f; s++)
                                        c[s].fn.apply(c[s].ctx, a);
                                    return this
                                },
                                off: function(i, a) {
                                    var c = this.e || (this.e = {}),
                                        s = c[i],
                                        f = [];
                                    if (s && a)
                                        for (var u = 0, p = s.length; u < p; u++)
                                            s[u].fn !== a && s[u].fn._ !== a && f.push(s[u]);
                                    return f.length ? c[i] = f : delete c[i], this
                                }
                            },
                            n.exports = o,
                            n.exports.TinyEmitter = o
                        }
                    },
                    t = {};
                function r(n) {
                    if (t[n])
                        return t[n].exports;
                    var o = t[n] = {
                        exports: {}
                    };
                    return e[n](o, o.exports, r), o.exports
                }
                return function() {
                    r.n = function(n) {
                        var o = n && n.__esModule ? function() {
                            return n.default
                        } : function() {
                            return n
                        };
                        return r.d(o, {
                            a: o
                        }), o
                    }
                }(), function() {
                    r.d = function(n, o) {
                        for (var i in o)
                            r.o(o, i) && !r.o(n, i) && Object.defineProperty(n, i, {
                                enumerable: !0,
                                get: o[i]
                            })
                    }
                }(), function() {
                    r.o = function(n, o) {
                        return Object.prototype.hasOwnProperty.call(n, o)
                    }
                }(), r(686)
            }().default
        })
    });
    var _i = gt((OE, Ti) => {
        "use strict";
        var Ls = /["'&<>]/;
        Ti.exports = As;
        function As(e) {
            var t = "" + e,
                r = Ls.exec(t);
            if (!r)
                return t;
            var n,
                o = "",
                i = 0,
                a = 0;
            for (i = r.index; i < t.length; i++) {
                switch (t.charCodeAt(i)) {
                case 34:
                    n = "&quot;";
                    break;
                case 38:
                    n = "&amp;";
                    break;
                case 39:
                    n = "&#39;";
                    break;
                case 60:
                    n = "&lt;";
                    break;
                case 62:
                    n = "&gt;";
                    break;
                default:
                    continue
                }
                a !== i && (o += t.substring(a, i)),
                a = i + 1,
                o += n
            }
            return a !== i ? o + t.substring(a, i) : o
        }
    });
    Array.prototype.flat || Object.defineProperty(Array.prototype, "flat", {
        configurable: !0,
        value: function e() {
            var t = isNaN(arguments[0]) ? 1 : Number(arguments[0]);
            return t ? Array.prototype.reduce.call(this, function(r, n) {
                return Array.isArray(n) ? r.push.apply(r, e.call(n, t - 1)) : r.push(n), r
            }, []) : Array.prototype.slice.call(this)
        },
        writable: !0
    }),
    Array.prototype.flatMap || Object.defineProperty(Array.prototype, "flatMap", {
        configurable: !0,
        value: function(e) {
            return Array.prototype.map.apply(this, arguments).flat()
        },
        writable: !0
    });
    var YT = tt(ln());
    (() => {
        function e(o, i) {
            parent.postMessage(o, i || "*")
        }
        function t(...o) {
            return o.reduce((i, a) => i.then(() => new Promise(c => {
                let s = document.createElement("script");
                s.src = a,
                s.addEventListener("load", () => c()),
                document.body.appendChild(s)
            })), Promise.resolve())
        }
        function r() {
            let o = document.createElement("iframe");
            return o.width = o.height = o.frameBorder = "0", o
        }
        var n = class {
            constructor(o, i)
            {
                if (this.url = o, this.onerror = null, this.onmessage = null, this.onmessageerror = null, this.handleMessage = c => {
                    c.source === this.worker && (c.stopImmediatePropagation(), this.dispatchEvent(new MessageEvent("message", {
                        data: c.data
                    })), this.onmessage && this.onmessage(c))
                }, this.handleError = (c, s, f, u, p) => {
                    if (s === this.url.toString()) {
                        let l = new ErrorEvent("error", {
                            message: c,
                            filename: s,
                            lineno: f,
                            colno: u,
                            error: p
                        });
                        this.dispatchEvent(l),
                        this.onerror && this.onerror(l)
                    }
                }, typeof i != "undefined")
                    throw new TypeError("Options are not supported for iframe workers");
                let a = new EventTarget;
                this.addEventListener = a.addEventListener.bind(a),
                this.removeEventListener = a.removeEventListener.bind(a),
                this.dispatchEvent = a.dispatchEvent.bind(a),
                document.body.appendChild(this.iframe = r()),
                this.worker.document.open(),
                this.worker.document.write(`<html><body><script>postMessage=${e};importScripts=${t};addEventListener("error",ev=>{parent.dispatchEvent(new ErrorEvent("error",{filename:"${o}",error:ev.error}))})<\/script><script src="${o}?${+Date.now()}"><\/script></body></html>`),
                this.worker.document.close(),
                window.addEventListener("message", this.handleMessage),
                window.onerror = this.handleError,
                this.ready = new Promise((c, s) => {
                    this.worker.onload = c,
                    this.worker.onerror = s
                })
            }
            terminate()
            {
                document.body.removeChild(this.iframe),
                window.removeEventListener("message", this.handleMessage),
                window.onerror = null
            }
            postMessage(o)
            {
                this.ready.catch().then(() => {
                    this.worker.dispatchEvent(new MessageEvent("message", {
                        data: o
                    }))
                })
            }
            get worker()
            {
                return this.iframe.contentWindow
            }
        }
        ;
        window.IFrameWorker = n,
        location.protocol === "file:" && (window.Worker = n)
    })();
    self.fetch || (self.fetch = function(e, t) {
        return t = t || {}, new Promise(function(r, n) {
            var o = new XMLHttpRequest,
                i = [],
                a = [],
                c = {},
                s = function() {
                    return {
                        ok: (o.status / 100 | 0) == 2,
                        statusText: o.statusText,
                        status: o.status,
                        url: o.responseURL,
                        text: function() {
                            return Promise.resolve(o.responseText)
                        },
                        json: function() {
                            return Promise.resolve(o.responseText).then(JSON.parse)
                        },
                        blob: function() {
                            return Promise.resolve(new Blob([o.response]))
                        },
                        clone: s,
                        headers: {
                            keys: function() {
                                return i
                            },
                            entries: function() {
                                return a
                            },
                            get: function(u) {
                                return c[u.toLowerCase()]
                            },
                            has: function(u) {
                                return u.toLowerCase() in c
                            }
                        }
                    }
                };
            for (var f in o.open(t.method || "get", e, !0), o.onload = function() {
                o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(u, p, l) {
                    i.push(p = p.toLowerCase()),
                    a.push([p, l]),
                    c[p] = c[p] ? c[p] + "," + l : l
                }),
                r(s())
            }, o.onerror = n, o.withCredentials = t.credentials == "include", t.headers)
                o.setRequestHeader(f, t.headers[f]);
            o.send(t.body || null)
        })
    });
    var JT = tt(mn());
    var In = tt(Pn(), 1),
        {__extends: oe, __assign: Ys, __rest: Bs, __decorate: Gs, __param: Js, __metadata: Xs, __awaiter: $n, __generator: Pt, __exportStar: Zs, __createBinding: ec, __values: ve, __read: j, __spread: tc, __spreadArrays: rc, __spreadArray: D, __await: It, __asyncGenerator: jn, __asyncDelegator: nc, __asyncValues: Fn, __makeTemplateObject: oc, __importStar: ic, __importDefault: ac, __classPrivateFieldGet: sc, __classPrivateFieldSet: cc} = In.default;
    function T(e) {
        return typeof e == "function"
    }
    function $t(e) {
        var t = function(n) {
                Error.call(n),
                n.stack = new Error().stack
            },
            r = e(t);
        return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r
    }
    var jt = $t(function(e) {
        return function(r) {
            e(this),
            this.message = r ? r.length + ` errors occurred during unsubscription:
`
            + r.map(function(n, o) {
                return o + 1 + ") " + n.toString()
            }).join(`
  `
            ) : "",
            this.name = "UnsubscriptionError",
            this.errors = r
        }
    });
    function je(e, t) {
        if (e) {
            var r = e.indexOf(t);
            0 <= r && e.splice(r, 1)
        }
    }
    var Pe = function() {
        function e(t) {
            this.initialTeardown = t,
            this.closed = !1,
            this._parentage = null,
            this._finalizers = null
        }
        return e.prototype.unsubscribe = function() {
            var t,
                r,
                n,
                o,
                i;
            if (!this.closed) {
                this.closed = !0;
                var a = this._parentage;
                if (a)
                    if (this._parentage = null, Array.isArray(a))
                        try {
                            for (var c = ve(a), s = c.next(); !s.done; s = c.next()) {
                                var f = s.value;
                                f.remove(this)
                            }
                        } catch (b) {
                            t = {
                                error: b
                            }
                        } finally {
                            try {
                                s && !s.done && (r = c.return) && r.call(c)
                            } finally {
                                if (t)
                                    throw t.error
                            }
                        }
                    else
                        a.remove(this);
                var u = this.initialTeardown;
                if (T(u))
                    try {
                        u()
                    } catch (b) {
                        i = b instanceof jt ? b.errors : [b]
                    }
                var p = this._finalizers;
                if (p) {
                    this._finalizers = null;
                    try {
                        for (var l = ve(p), d = l.next(); !d.done; d = l.next()) {
                            var h = d.value;
                            try {
                                Un(h)
                            } catch (b) {
                                i = i != null ? i : [],
                                b instanceof jt ? i = D(D([], j(i)), j(b.errors)) : i.push(b)
                            }
                        }
                    } catch (b) {
                        n = {
                            error: b
                        }
                    } finally {
                        try {
                            d && !d.done && (o = l.return) && o.call(l)
                        } finally {
                            if (n)
                                throw n.error
                        }
                    }
                }
                if (i)
                    throw new jt(i)
            }
        }, e.prototype.add = function(t) {
            var r;
            if (t && t !== this)
                if (this.closed)
                    Un(t);
                else {
                    if (t instanceof e) {
                        if (t.closed || t._hasParent(this))
                            return;
                        t._addParent(this)
                    }
                    (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(t)
                }
        }, e.prototype._hasParent = function(t) {
            var r = this._parentage;
            return r === t || Array.isArray(r) && r.includes(t)
        }, e.prototype._addParent = function(t) {
            var r = this._parentage;
            this._parentage = Array.isArray(r) ? (r.push(t), r) : r ? [r, t] : t
        }, e.prototype._removeParent = function(t) {
            var r = this._parentage;
            r === t ? this._parentage = null : Array.isArray(r) && je(r, t)
        }, e.prototype.remove = function(t) {
            var r = this._finalizers;
            r && je(r, t),
            t instanceof e && t._removeParent(this)
        }, e.EMPTY = function() {
            var t = new e;
            return t.closed = !0, t
        }(), e
    }();
    var Lr = Pe.EMPTY;
    function Ft(e) {
        return e instanceof Pe || e && "closed" in e && T(e.remove) && T(e.add) && T(e.unsubscribe)
    }
    function Un(e) {
        T(e) ? e() : e.unsubscribe()
    }
    var Le = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1
    };
    var nt = {
        setTimeout: function(e, t) {
            for (var r = [], n = 2; n < arguments.length; n++)
                r[n - 2] = arguments[n];
            var o = nt.delegate;
            return o != null && o.setTimeout ? o.setTimeout.apply(o, D([e, t], j(r))) : setTimeout.apply(void 0, D([e, t], j(r)))
        },
        clearTimeout: function(e) {
            var t = nt.delegate;
            return ((t == null ? void 0 : t.clearTimeout) || clearTimeout)(e)
        },
        delegate: void 0
    };
    function Ut(e) {
        nt.setTimeout(function() {
            var t = Le.onUnhandledError;
            if (t)
                t(e);
            else
                throw e
        })
    }
    function pe() {}
    var Wn = function() {
        return Ar("C", void 0, void 0)
    }();
    function Dn(e) {
        return Ar("E", void 0, e)
    }
    function Vn(e) {
        return Ar("N", e, void 0)
    }
    function Ar(e, t, r) {
        return {
            kind: e,
            value: t,
            error: r
        }
    }
    var Be = null;
    function ot(e) {
        if (Le.useDeprecatedSynchronousErrorHandling) {
            var t = !Be;
            if (t && (Be = {
                errorThrown: !1,
                error: null
            }), e(), t) {
                var r = Be,
                    n = r.errorThrown,
                    o = r.error;
                if (Be = null, n)
                    throw o
            }
        } else
            e()
    }
    function Nn(e) {
        Le.useDeprecatedSynchronousErrorHandling && Be && (Be.errorThrown = !0, Be.error = e)
    }
    var yt = function(e) {
        oe(t, e);
        function t(r) {
            var n = e.call(this) || this;
            return n.isStopped = !1, r ? (n.destination = r, Ft(r) && r.add(n)) : n.destination = ha, n
        }
        return t.create = function(r, n, o) {
            return new it(r, n, o)
        }, t.prototype.next = function(r) {
            this.isStopped ? Rr(Vn(r), this) : this._next(r)
        }, t.prototype.error = function(r) {
            this.isStopped ? Rr(Dn(r), this) : (this.isStopped = !0, this._error(r))
        }, t.prototype.complete = function() {
            this.isStopped ? Rr(Wn, this) : (this.isStopped = !0, this._complete())
        }, t.prototype.unsubscribe = function() {
            this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null)
        }, t.prototype._next = function(r) {
            this.destination.next(r)
        }, t.prototype._error = function(r) {
            try {
                this.destination.error(r)
            } finally {
                this.unsubscribe()
            }
        }, t.prototype._complete = function() {
            try {
                this.destination.complete()
            } finally {
                this.unsubscribe()
            }
        }, t
    }(Pe);
    var la = Function.prototype.bind;
    function Cr(e, t) {
        return la.call(e, t)
    }
    var ma = function() {
            function e(t) {
                this.partialObserver = t
            }
            return e.prototype.next = function(t) {
                var r = this.partialObserver;
                if (r.next)
                    try {
                        r.next(t)
                    } catch (n) {
                        Wt(n)
                    }
            }, e.prototype.error = function(t) {
                var r = this.partialObserver;
                if (r.error)
                    try {
                        r.error(t)
                    } catch (n) {
                        Wt(n)
                    }
                else
                    Wt(t)
            }, e.prototype.complete = function() {
                var t = this.partialObserver;
                if (t.complete)
                    try {
                        t.complete()
                    } catch (r) {
                        Wt(r)
                    }
            }, e
        }(),
        it = function(e) {
            oe(t, e);
            function t(r, n, o) {
                var i = e.call(this) || this,
                    a;
                if (T(r) || !r)
                    a = {
                        next: r != null ? r : void 0,
                        error: n != null ? n : void 0,
                        complete: o != null ? o : void 0
                    };
                else {
                    var c;
                    i && Le.useDeprecatedNextContext ? (c = Object.create(r), c.unsubscribe = function() {
                        return i.unsubscribe()
                    }, a = {
                        next: r.next && Cr(r.next, c),
                        error: r.error && Cr(r.error, c),
                        complete: r.complete && Cr(r.complete, c)
                    }) : a = r
                }
                return i.destination = new ma(a), i
            }
            return t
        }(yt);
    function Wt(e) {
        Le.useDeprecatedSynchronousErrorHandling ? Nn(e) : Ut(e)
    }
    function da(e) {
        throw e
    }
    function Rr(e, t) {
        var r = Le.onStoppedNotification;
        r && nt.setTimeout(function() {
            return r(e, t)
        })
    }
    var ha = {
        closed: !0,
        next: pe,
        error: da,
        complete: pe
    };
    var at = function() {
        return typeof Symbol == "function" && Symbol.observable || "@@observable"
    }();
    function ge(e) {
        return e
    }
    function zn() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return kr(e)
    }
    function kr(e) {
        return e.length === 0 ? ge : e.length === 1 ? e[0] : function(r) {
            return e.reduce(function(n, o) {
                return o(n)
            }, r)
        }
    }
    var P = function() {
        function e(t) {
            t && (this._subscribe = t)
        }
        return e.prototype.lift = function(t) {
            var r = new e;
            return r.source = this, r.operator = t, r
        }, e.prototype.subscribe = function(t, r, n) {
            var o = this,
                i = va(t) ? t : new it(t, r, n);
            return ot(function() {
                var a = o,
                    c = a.operator,
                    s = a.source;
                i.add(c ? c.call(i, s) : s ? o._subscribe(i) : o._trySubscribe(i))
            }), i
        }, e.prototype._trySubscribe = function(t) {
            try {
                return this._subscribe(t)
            } catch (r) {
                t.error(r)
            }
        }, e.prototype.forEach = function(t, r) {
            var n = this;
            return r = qn(r), new r(function(o, i) {
                var a = new it({
                    next: function(c) {
                        try {
                            t(c)
                        } catch (s) {
                            i(s),
                            a.unsubscribe()
                        }
                    },
                    error: i,
                    complete: o
                });
                n.subscribe(a)
            })
        }, e.prototype._subscribe = function(t) {
            var r;
            return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(t)
        }, e.prototype[at] = function() {
            return this
        }, e.prototype.pipe = function() {
            for (var t = [], r = 0; r < arguments.length; r++)
                t[r] = arguments[r];
            return kr(t)(this)
        }, e.prototype.toPromise = function(t) {
            var r = this;
            return t = qn(t), new t(function(n, o) {
                var i;
                r.subscribe(function(a) {
                    return i = a
                }, function(a) {
                    return o(a)
                }, function() {
                    return n(i)
                })
            })
        }, e.create = function(t) {
            return new e(t)
        }, e
    }();
    function qn(e) {
        var t;
        return (t = e != null ? e : Le.Promise) !== null && t !== void 0 ? t : Promise
    }
    function ba(e) {
        return e && T(e.next) && T(e.error) && T(e.complete)
    }
    function va(e) {
        return e && e instanceof yt || ba(e) && Ft(e)
    }
    function ga(e) {
        return T(e == null ? void 0 : e.lift)
    }
    function g(e) {
        return function(t) {
            if (ga(t))
                return t.lift(function(r) {
                    try {
                        return e(r, this)
                    } catch (n) {
                        this.error(n)
                    }
                });
            throw new TypeError("Unable to lift unknown Observable type")
        }
    }
    function x(e, t, r, n, o) {
        return new ya(e, t, r, n, o)
    }
    var ya = function(e) {
        oe(t, e);
        function t(r, n, o, i, a, c) {
            var s = e.call(this, r) || this;
            return s.onFinalize = a, s.shouldUnsubscribe = c, s._next = n ? function(f) {
                try {
                    n(f)
                } catch (u) {
                    r.error(u)
                }
            } : e.prototype._next, s._error = i ? function(f) {
                try {
                    i(f)
                } catch (u) {
                    r.error(u)
                } finally {
                    this.unsubscribe()
                }
            } : e.prototype._error, s._complete = o ? function() {
                try {
                    o()
                } catch (f) {
                    r.error(f)
                } finally {
                    this.unsubscribe()
                }
            } : e.prototype._complete, s
        }
        return t.prototype.unsubscribe = function() {
            var r;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                var n = this.closed;
                e.prototype.unsubscribe.call(this),
                !n && ((r = this.onFinalize) === null || r === void 0 || r.call(this))
            }
        }, t
    }(yt);
    var st = {
        schedule: function(e) {
            var t = requestAnimationFrame,
                r = cancelAnimationFrame,
                n = st.delegate;
            n && (t = n.requestAnimationFrame, r = n.cancelAnimationFrame);
            var o = t(function(i) {
                r = void 0,
                e(i)
            });
            return new Pe(function() {
                return r == null ? void 0 : r(o)
            })
        },
        requestAnimationFrame: function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            var r = st.delegate;
            return ((r == null ? void 0 : r.requestAnimationFrame) || requestAnimationFrame).apply(void 0, D([], j(e)))
        },
        cancelAnimationFrame: function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            var r = st.delegate;
            return ((r == null ? void 0 : r.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, D([], j(e)))
        },
        delegate: void 0
    };
    var Kn = $t(function(e) {
        return function() {
            e(this),
            this.name = "ObjectUnsubscribedError",
            this.message = "object unsubscribed"
        }
    });
    var E = function(e) {
        oe(t, e);
        function t() {
            var r = e.call(this) || this;
            return r.closed = !1, r.currentObservers = null, r.observers = [], r.isStopped = !1, r.hasError = !1, r.thrownError = null, r
        }
        return t.prototype.lift = function(r) {
            var n = new Qn(this, this);
            return n.operator = r, n
        }, t.prototype._throwIfClosed = function() {
            if (this.closed)
                throw new Kn
        }, t.prototype.next = function(r) {
            var n = this;
            ot(function() {
                var o,
                    i;
                if (n._throwIfClosed(), !n.isStopped) {
                    n.currentObservers || (n.currentObservers = Array.from(n.observers));
                    try {
                        for (var a = ve(n.currentObservers), c = a.next(); !c.done; c = a.next()) {
                            var s = c.value;
                            s.next(r)
                        }
                    } catch (f) {
                        o = {
                            error: f
                        }
                    } finally {
                        try {
                            c && !c.done && (i = a.return) && i.call(a)
                        } finally {
                            if (o)
                                throw o.error
                        }
                    }
                }
            })
        }, t.prototype.error = function(r) {
            var n = this;
            ot(function() {
                if (n._throwIfClosed(), !n.isStopped) {
                    n.hasError = n.isStopped = !0,
                    n.thrownError = r;
                    for (var o = n.observers; o.length;)
                        o.shift().error(r)
                }
            })
        }, t.prototype.complete = function() {
            var r = this;
            ot(function() {
                if (r._throwIfClosed(), !r.isStopped) {
                    r.isStopped = !0;
                    for (var n = r.observers; n.length;)
                        n.shift().complete()
                }
            })
        }, t.prototype.unsubscribe = function() {
            this.isStopped = this.closed = !0,
            this.observers = this.currentObservers = null
        }, Object.defineProperty(t.prototype, "observed", {
            get: function() {
                var r;
                return ((r = this.observers) === null || r === void 0 ? void 0 : r.length) > 0
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype._trySubscribe = function(r) {
            return this._throwIfClosed(), e.prototype._trySubscribe.call(this, r)
        }, t.prototype._subscribe = function(r) {
            return this._throwIfClosed(), this._checkFinalizedStatuses(r), this._innerSubscribe(r)
        }, t.prototype._innerSubscribe = function(r) {
            var n = this,
                o = this,
                i = o.hasError,
                a = o.isStopped,
                c = o.observers;
            return i || a ? Lr : (this.currentObservers = null, c.push(r), new Pe(function() {
                n.currentObservers = null,
                je(c, r)
            }))
        }, t.prototype._checkFinalizedStatuses = function(r) {
            var n = this,
                o = n.hasError,
                i = n.thrownError,
                a = n.isStopped;
            o ? r.error(i) : a && r.complete()
        }, t.prototype.asObservable = function() {
            var r = new P;
            return r.source = this, r
        }, t.create = function(r, n) {
            return new Qn(r, n)
        }, t
    }(P);
    var Qn = function(e) {
        oe(t, e);
        function t(r, n) {
            var o = e.call(this) || this;
            return o.destination = r, o.source = n, o
        }
        return t.prototype.next = function(r) {
            var n,
                o;
            (o = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || o === void 0 || o.call(n, r)
        }, t.prototype.error = function(r) {
            var n,
                o;
            (o = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || o === void 0 || o.call(n, r)
        }, t.prototype.complete = function() {
            var r,
                n;
            (n = (r = this.destination) === null || r === void 0 ? void 0 : r.complete) === null || n === void 0 || n.call(r)
        }, t.prototype._subscribe = function(r) {
            var n,
                o;
            return (o = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(r)) !== null && o !== void 0 ? o : Lr
        }, t
    }(E);
    var xt = {
        now: function() {
            return (xt.delegate || Date).now()
        },
        delegate: void 0
    };
    var wt = function(e) {
        oe(t, e);
        function t(r, n, o) {
            r === void 0 && (r = 1 / 0),
            n === void 0 && (n = 1 / 0),
            o === void 0 && (o = xt);
            var i = e.call(this) || this;
            return i._bufferSize = r, i._windowTime = n, i._timestampProvider = o, i._buffer = [], i._infiniteTimeWindow = !0, i._infiniteTimeWindow = n === 1 / 0, i._bufferSize = Math.max(1, r), i._windowTime = Math.max(1, n), i
        }
        return t.prototype.next = function(r) {
            var n = this,
                o = n.isStopped,
                i = n._buffer,
                a = n._infiniteTimeWindow,
                c = n._timestampProvider,
                s = n._windowTime;
            o || (i.push(r), !a && i.push(c.now() + s)),
            this._trimBuffer(),
            e.prototype.next.call(this, r)
        }, t.prototype._subscribe = function(r) {
            this._throwIfClosed(),
            this._trimBuffer();
            for (var n = this._innerSubscribe(r), o = this, i = o._infiniteTimeWindow, a = o._buffer, c = a.slice(), s = 0; s < c.length && !r.closed; s += i ? 1 : 2)
                r.next(c[s]);
            return this._checkFinalizedStatuses(r), n
        }, t.prototype._trimBuffer = function() {
            var r = this,
                n = r._bufferSize,
                o = r._timestampProvider,
                i = r._buffer,
                a = r._infiniteTimeWindow,
                c = (a ? 1 : 2) * n;
            if (n < 1 / 0 && c < i.length && i.splice(0, i.length - c), !a) {
                for (var s = o.now(), f = 0, u = 1; u < i.length && i[u] <= s; u += 2)
                    f = u;
                f && i.splice(0, f + 1)
            }
        }, t
    }(E);
    var Yn = function(e) {
        oe(t, e);
        function t(r, n) {
            return e.call(this) || this
        }
        return t.prototype.schedule = function(r, n) {
            return n === void 0 && (n = 0), this
        }, t
    }(Pe);
    var Et = {
        setInterval: function(e, t) {
            for (var r = [], n = 2; n < arguments.length; n++)
                r[n - 2] = arguments[n];
            var o = Et.delegate;
            return o != null && o.setInterval ? o.setInterval.apply(o, D([e, t], j(r))) : setInterval.apply(void 0, D([e, t], j(r)))
        },
        clearInterval: function(e) {
            var t = Et.delegate;
            return ((t == null ? void 0 : t.clearInterval) || clearInterval)(e)
        },
        delegate: void 0
    };
    var Dt = function(e) {
        oe(t, e);
        function t(r, n) {
            var o = e.call(this, r, n) || this;
            return o.scheduler = r, o.work = n, o.pending = !1, o
        }
        return t.prototype.schedule = function(r, n) {
            if (n === void 0 && (n = 0), this.closed)
                return this;
            this.state = r;
            var o = this.id,
                i = this.scheduler;
            return o != null && (this.id = this.recycleAsyncId(i, o, n)), this.pending = !0, this.delay = n, this.id = this.id || this.requestAsyncId(i, this.id, n), this
        }, t.prototype.requestAsyncId = function(r, n, o) {
            return o === void 0 && (o = 0), Et.setInterval(r.flush.bind(r, this), o)
        }, t.prototype.recycleAsyncId = function(r, n, o) {
            if (o === void 0 && (o = 0), o != null && this.delay === o && this.pending === !1)
                return n;
            Et.clearInterval(n)
        }, t.prototype.execute = function(r, n) {
            if (this.closed)
                return new Error("executing a cancelled action");
            this.pending = !1;
            var o = this._execute(r, n);
            if (o)
                return o;
            this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
        }, t.prototype._execute = function(r, n) {
            var o = !1,
                i;
            try {
                this.work(r)
            } catch (a) {
                o = !0,
                i = a || new Error("Scheduled action threw falsy error")
            }
            if (o)
                return this.unsubscribe(), i
        }, t.prototype.unsubscribe = function() {
            if (!this.closed) {
                var r = this,
                    n = r.id,
                    o = r.scheduler,
                    i = o.actions;
                this.work = this.state = this.scheduler = null,
                this.pending = !1,
                je(i, this),
                n != null && (this.id = this.recycleAsyncId(o, n, null)),
                this.delay = null,
                e.prototype.unsubscribe.call(this)
            }
        }, t
    }(Yn);
    var Hr = function() {
        function e(t, r) {
            r === void 0 && (r = e.now),
            this.schedulerActionCtor = t,
            this.now = r
        }
        return e.prototype.schedule = function(t, r, n) {
            return r === void 0 && (r = 0), new this.schedulerActionCtor(this, t).schedule(n, r)
        }, e.now = xt.now, e
    }();
    var Vt = function(e) {
        oe(t, e);
        function t(r, n) {
            n === void 0 && (n = Hr.now);
            var o = e.call(this, r, n) || this;
            return o.actions = [], o._active = !1, o._scheduled = void 0, o
        }
        return t.prototype.flush = function(r) {
            var n = this.actions;
            if (this._active) {
                n.push(r);
                return
            }
            var o;
            this._active = !0;
            do if (o = r.execute(r.state, r.delay))
                break;
            while (r = n.shift());
            if (this._active = !1, o) {
                for (; r = n.shift();)
                    r.unsubscribe();
                throw o
            }
        }, t
    }(Hr);
    var we = new Vt(Dt),
        Pr = we;
    var Bn = function(e) {
        oe(t, e);
        function t(r, n) {
            var o = e.call(this, r, n) || this;
            return o.scheduler = r, o.work = n, o
        }
        return t.prototype.requestAsyncId = function(r, n, o) {
            return o === void 0 && (o = 0), o !== null && o > 0 ? e.prototype.requestAsyncId.call(this, r, n, o) : (r.actions.push(this), r._scheduled || (r._scheduled = st.requestAnimationFrame(function() {
                return r.flush(void 0)
            })))
        }, t.prototype.recycleAsyncId = function(r, n, o) {
            if (o === void 0 && (o = 0), o != null && o > 0 || o == null && this.delay > 0)
                return e.prototype.recycleAsyncId.call(this, r, n, o);
            r.actions.some(function(i) {
                return i.id === n
            }) || (st.cancelAnimationFrame(n), r._scheduled = void 0)
        }, t
    }(Dt);
    var Gn = function(e) {
        oe(t, e);
        function t() {
            return e !== null && e.apply(this, arguments) || this
        }
        return t.prototype.flush = function(r) {
            this._active = !0;
            var n = this._scheduled;
            this._scheduled = void 0;
            var o = this.actions,
                i;
            r = r || o.shift();
            do if (i = r.execute(r.state, r.delay))
                break;
            while ((r = o[0]) && r.id === n && o.shift());
            if (this._active = !1, i) {
                for (; (r = o[0]) && r.id === n && o.shift();)
                    r.unsubscribe();
                throw i
            }
        }, t
    }(Vt);
    var ye = new Gn(Bn);
    var V = new P(function(e) {
        return e.complete()
    });
    function Nt(e) {
        return e && T(e.schedule)
    }
    function Ir(e) {
        return e[e.length - 1]
    }
    function De(e) {
        return T(Ir(e)) ? e.pop() : void 0
    }
    function Ee(e) {
        return Nt(Ir(e)) ? e.pop() : void 0
    }
    function zt(e, t) {
        return typeof Ir(e) == "number" ? e.pop() : t
    }
    var ct = function(e) {
        return e && typeof e.length == "number" && typeof e != "function"
    };
    function qt(e) {
        return T(e == null ? void 0 : e.then)
    }
    function Kt(e) {
        return T(e[at])
    }
    function Qt(e) {
        return Symbol.asyncIterator && T(e == null ? void 0 : e[Symbol.asyncIterator])
    }
    function Yt(e) {
        return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
    }
    function xa() {
        return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator
    }
    var Bt = xa();
    function Gt(e) {
        return T(e == null ? void 0 : e[Bt])
    }
    function Jt(e) {
        return jn(this, arguments, function() {
            var r,
                n,
                o,
                i;
            return Pt(this, function(a) {
                switch (a.label) {
                case 0:
                    r = e.getReader(),
                    a.label = 1;
                case 1:
                    a.trys.push([1, , 9, 10]),
                    a.label = 2;
                case 2:
                    return [4, It(r.read())];
                case 3:
                    return n = a.sent(), o = n.value, i = n.done, i ? [4, It(void 0)] : [3, 5];
                case 4:
                    return [2, a.sent()];
                case 5:
                    return [4, It(o)];
                case 6:
                    return [4, a.sent()];
                case 7:
                    return a.sent(), [3, 2];
                case 8:
                    return [3, 10];
                case 9:
                    return r.releaseLock(), [7];
                case 10:
                    return [2]
                }
            })
        })
    }
    function Xt(e) {
        return T(e == null ? void 0 : e.getReader)
    }
    function N(e) {
        if (e instanceof P)
            return e;
        if (e != null) {
            if (Kt(e))
                return wa(e);
            if (ct(e))
                return Ea(e);
            if (qt(e))
                return Sa(e);
            if (Qt(e))
                return Jn(e);
            if (Gt(e))
                return Oa(e);
            if (Xt(e))
                return Ta(e)
        }
        throw Yt(e)
    }
    function wa(e) {
        return new P(function(t) {
            var r = e[at]();
            if (T(r.subscribe))
                return r.subscribe(t);
            throw new TypeError("Provided object does not correctly implement Symbol.observable")
        })
    }
    function Ea(e) {
        return new P(function(t) {
            for (var r = 0; r < e.length && !t.closed; r++)
                t.next(e[r]);
            t.complete()
        })
    }
    function Sa(e) {
        return new P(function(t) {
            e.then(function(r) {
                t.closed || (t.next(r), t.complete())
            }, function(r) {
                return t.error(r)
            }).then(null, Ut)
        })
    }
    function Oa(e) {
        return new P(function(t) {
            var r,
                n;
            try {
                for (var o = ve(e), i = o.next(); !i.done; i = o.next()) {
                    var a = i.value;
                    if (t.next(a), t.closed)
                        return
                }
            } catch (c) {
                r = {
                    error: c
                }
            } finally {
                try {
                    i && !i.done && (n = o.return) && n.call(o)
                } finally {
                    if (r)
                        throw r.error
                }
            }
            t.complete()
        })
    }
    function Jn(e) {
        return new P(function(t) {
            _a(e, t).catch(function(r) {
                return t.error(r)
            })
        })
    }
    function Ta(e) {
        return Jn(Jt(e))
    }
    function _a(e, t) {
        var r,
            n,
            o,
            i;
        return $n(this, void 0, void 0, function() {
            var a,
                c;
            return Pt(this, function(s) {
                switch (s.label) {
                case 0:
                    s.trys.push([0, 5, 6, 11]),
                    r = Fn(e),
                    s.label = 1;
                case 1:
                    return [4, r.next()];
                case 2:
                    if (n = s.sent(), !!n.done)
                        return [3, 4];
                    if (a = n.value, t.next(a), t.closed)
                        return [2];
                    s.label = 3;
                case 3:
                    return [3, 1];
                case 4:
                    return [3, 11];
                case 5:
                    return c = s.sent(), o = {
                        error: c
                    }, [3, 11];
                case 6:
                    return s.trys.push([6, , 9, 10]), n && !n.done && (i = r.return) ? [4, i.call(r)] : [3, 8];
                case 7:
                    s.sent(),
                    s.label = 8;
                case 8:
                    return [3, 10];
                case 9:
                    if (o)
                        throw o.error;
                    return [7];
                case 10:
                    return [7];
                case 11:
                    return t.complete(), [2]
                }
            })
        })
    }
    function le(e, t, r, n, o) {
        n === void 0 && (n = 0),
        o === void 0 && (o = !1);
        var i = t.schedule(function() {
            r(),
            o ? e.add(this.schedule(null, n)) : this.unsubscribe()
        }, n);
        if (e.add(i), !o)
            return i
    }
    function Fe(e, t) {
        return t === void 0 && (t = 0), g(function(r, n) {
            r.subscribe(x(n, function(o) {
                return le(n, e, function() {
                    return n.next(o)
                }, t)
            }, function() {
                return le(n, e, function() {
                    return n.complete()
                }, t)
            }, function(o) {
                return le(n, e, function() {
                    return n.error(o)
                }, t)
            }))
        })
    }
    function Zt(e, t) {
        return t === void 0 && (t = 0), g(function(r, n) {
            n.add(e.schedule(function() {
                return r.subscribe(n)
            }, t))
        })
    }
    function Xn(e, t) {
        return N(e).pipe(Zt(t), Fe(t))
    }
    function Zn(e, t) {
        return N(e).pipe(Zt(t), Fe(t))
    }
    function eo(e, t) {
        return new P(function(r) {
            var n = 0;
            return t.schedule(function() {
                n === e.length ? r.complete() : (r.next(e[n++]), r.closed || this.schedule())
            })
        })
    }
    function to(e, t) {
        return new P(function(r) {
            var n;
            return le(r, t, function() {
                n = e[Bt](),
                le(r, t, function() {
                    var o,
                        i,
                        a;
                    try {
                        o = n.next(),
                        i = o.value,
                        a = o.done
                    } catch (c) {
                        r.error(c);
                        return
                    }
                    a ? r.complete() : r.next(i)
                }, 0, !0)
            }), function() {
                return T(n == null ? void 0 : n.return) && n.return()
            }
        })
    }
    function er(e, t) {
        if (!e)
            throw new Error("Iterable cannot be null");
        return new P(function(r) {
            le(r, t, function() {
                var n = e[Symbol.asyncIterator]();
                le(r, t, function() {
                    n.next().then(function(o) {
                        o.done ? r.complete() : r.next(o.value)
                    })
                }, 0, !0)
            })
        })
    }
    function ro(e, t) {
        return er(Jt(e), t)
    }
    function no(e, t) {
        if (e != null) {
            if (Kt(e))
                return Xn(e, t);
            if (ct(e))
                return eo(e, t);
            if (qt(e))
                return Zn(e, t);
            if (Qt(e))
                return er(e, t);
            if (Gt(e))
                return to(e, t);
            if (Xt(e))
                return ro(e, t)
        }
        throw Yt(e)
    }
    function ce(e, t) {
        return t ? no(e, t) : N(e)
    }
    function I() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = Ee(e);
        return ce(e, r)
    }
    function $r(e, t) {
        var r = T(e) ? e : function() {
                return e
            },
            n = function(o) {
                return o.error(r())
            };
        return new P(t ? function(o) {
            return t.schedule(n, 0, o)
        } : n)
    }
    function oo(e) {
        return e instanceof Date && !isNaN(e)
    }
    function m(e, t) {
        return g(function(r, n) {
            var o = 0;
            r.subscribe(x(n, function(i) {
                n.next(e.call(t, i, o++))
            }))
        })
    }
    var Ma = Array.isArray;
    function La(e, t) {
        return Ma(t) ? e.apply(void 0, D([], j(t))) : e(t)
    }
    function Ve(e) {
        return m(function(t) {
            return La(e, t)
        })
    }
    var Aa = Array.isArray,
        Ca = Object.getPrototypeOf,
        Ra = Object.prototype,
        ka = Object.keys;
    function io(e) {
        if (e.length === 1) {
            var t = e[0];
            if (Aa(t))
                return {
                    args: t,
                    keys: null
                };
            if (Ha(t)) {
                var r = ka(t);
                return {
                    args: r.map(function(n) {
                        return t[n]
                    }),
                    keys: r
                }
            }
        }
        return {
            args: e,
            keys: null
        }
    }
    function Ha(e) {
        return e && typeof e == "object" && Ca(e) === Ra
    }
    function ao(e, t) {
        return e.reduce(function(r, n, o) {
            return r[n] = t[o], r
        }, {})
    }
    function G() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = Ee(e),
            n = De(e),
            o = io(e),
            i = o.args,
            a = o.keys;
        if (i.length === 0)
            return ce([], r);
        var c = new P(jr(i, r, a ? function(s) {
            return ao(a, s)
        } : ge));
        return n ? c.pipe(Ve(n)) : c
    }
    function jr(e, t, r) {
        return r === void 0 && (r = ge), function(n) {
            so(t, function() {
                for (var o = e.length, i = new Array(o), a = o, c = o, s = function(u) {
                        so(t, function() {
                            var p = ce(e[u], t),
                                l = !1;
                            p.subscribe(x(n, function(d) {
                                i[u] = d,
                                l || (l = !0, c--),
                                c || n.next(r(i.slice()))
                            }, function() {
                                --a || n.complete()
                            }))
                        }, n)
                    }, f = 0; f < o; f++)
                    s(f)
            }, n)
        }
    }
    function so(e, t, r) {
        e ? le(r, e, t) : t()
    }
    function co(e, t, r, n, o, i, a, c) {
        var s = [],
            f = 0,
            u = 0,
            p = !1,
            l = function() {
                p && !s.length && !f && t.complete()
            },
            d = function(b) {
                return f < n ? h(b) : s.push(b)
            },
            h = function(b) {
                i && t.next(b),
                f++;
                var F = !1;
                N(r(b, u++)).subscribe(x(t, function(Y) {
                    o == null || o(Y),
                    i ? d(Y) : t.next(Y)
                }, function() {
                    F = !0
                }, void 0, function() {
                    if (F)
                        try {
                            f--;
                            for (var Y = function() {
                                var U = s.shift();
                                a ? le(t, a, function() {
                                    return h(U)
                                }) : h(U)
                            }; s.length && f < n;)
                                Y();
                            l()
                        } catch (U) {
                            t.error(U)
                        }
                }))
            };
        return e.subscribe(x(t, d, function() {
            p = !0,
            l()
        })), function() {
            c == null || c()
        }
    }
    function ue(e, t, r) {
        return r === void 0 && (r = 1 / 0), T(t) ? ue(function(n, o) {
            return m(function(i, a) {
                return t(n, i, o, a)
            })(N(e(n, o)))
        }, r) : (typeof t == "number" && (r = t), g(function(n, o) {
            return co(n, o, e, r)
        }))
    }
    function ft(e) {
        return e === void 0 && (e = 1 / 0), ue(ge, e)
    }
    function fo() {
        return ft(1)
    }
    function Ge() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return fo()(ce(e, Ee(e)))
    }
    function R(e) {
        return new P(function(t) {
            N(e()).subscribe(t)
        })
    }
    var Pa = ["addListener", "removeListener"],
        Ia = ["addEventListener", "removeEventListener"],
        $a = ["on", "off"];
    function v(e, t, r, n) {
        if (T(r) && (n = r, r = void 0), n)
            return v(e, t, r).pipe(Ve(n));
        var o = j(Ua(e) ? Ia.map(function(c) {
                return function(s) {
                    return e[c](t, s, r)
                }
            }) : ja(e) ? Pa.map(uo(e, t)) : Fa(e) ? $a.map(uo(e, t)) : [], 2),
            i = o[0],
            a = o[1];
        if (!i && ct(e))
            return ue(function(c) {
                return v(c, t, r)
            })(N(e));
        if (!i)
            throw new TypeError("Invalid event target");
        return new P(function(c) {
            var s = function() {
                for (var f = [], u = 0; u < arguments.length; u++)
                    f[u] = arguments[u];
                return c.next(1 < f.length ? f : f[0])
            };
            return i(s), function() {
                return a(s)
            }
        })
    }
    function uo(e, t) {
        return function(r) {
            return function(n) {
                return e[r](t, n)
            }
        }
    }
    function ja(e) {
        return T(e.addListener) && T(e.removeListener)
    }
    function Fa(e) {
        return T(e.on) && T(e.off)
    }
    function Ua(e) {
        return T(e.addEventListener) && T(e.removeEventListener)
    }
    function tr(e, t, r) {
        return r ? tr(e, t).pipe(Ve(r)) : new P(function(n) {
            var o = function() {
                    for (var a = [], c = 0; c < arguments.length; c++)
                        a[c] = arguments[c];
                    return n.next(a.length === 1 ? a[0] : a)
                },
                i = e(o);
            return T(t) ? function() {
                return t(o, i)
            } : void 0
        })
    }
    function Ne(e, t, r) {
        e === void 0 && (e = 0),
        r === void 0 && (r = Pr);
        var n = -1;
        return t != null && (Nt(t) ? r = t : n = t), new P(function(o) {
            var i = oo(e) ? +e - r.now() : e;
            i < 0 && (i = 0);
            var a = 0;
            return r.schedule(function() {
                o.closed || (o.next(a++), 0 <= n ? this.schedule(void 0, n) : o.complete())
            }, i)
        })
    }
    function A() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = Ee(e),
            n = zt(e, 1 / 0),
            o = e;
        return o.length ? o.length === 1 ? N(o[0]) : ft(n)(ce(o, r)) : V
    }
    var Se = new P(pe);
    var Wa = Array.isArray;
    function ut(e) {
        return e.length === 1 && Wa(e[0]) ? e[0] : e
    }
    function y(e, t) {
        return g(function(r, n) {
            var o = 0;
            r.subscribe(x(n, function(i) {
                return e.call(t, i, o++) && n.next(i)
            }))
        })
    }
    function St() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = De(e),
            n = ut(e);
        return n.length ? new P(function(o) {
            var i = n.map(function() {
                    return []
                }),
                a = n.map(function() {
                    return !1
                });
            o.add(function() {
                i = a = null
            });
            for (var c = function(f) {
                    N(n[f]).subscribe(x(o, function(u) {
                        if (i[f].push(u), i.every(function(l) {
                            return l.length
                        })) {
                            var p = i.map(function(l) {
                                return l.shift()
                            });
                            o.next(r ? r.apply(void 0, D([], j(p))) : p),
                            i.some(function(l, d) {
                                return !l.length && a[d]
                            }) && o.complete()
                        }
                    }, function() {
                        a[f] = !0,
                        !i[f].length && o.complete()
                    }))
                }, s = 0; !o.closed && s < n.length; s++)
                c(s);
            return function() {
                i = a = null
            }
        }) : V
    }
    function po(e) {
        return g(function(t, r) {
            var n = !1,
                o = null,
                i = null,
                a = !1,
                c = function() {
                    if (i == null || i.unsubscribe(), i = null, n) {
                        n = !1;
                        var f = o;
                        o = null,
                        r.next(f)
                    }
                    a && r.complete()
                },
                s = function() {
                    i = null,
                    a && r.complete()
                };
            t.subscribe(x(r, function(f) {
                n = !0,
                o = f,
                i || N(e(f)).subscribe(i = x(r, c, s))
            }, function() {
                a = !0,
                (!n || !i || i.closed) && r.complete()
            }))
        })
    }
    function Ae(e, t) {
        return t === void 0 && (t = we), po(function() {
            return Ne(e, t)
        })
    }
    function Ce(e, t) {
        return t === void 0 && (t = null), t = t != null ? t : e, g(function(r, n) {
            var o = [],
                i = 0;
            r.subscribe(x(n, function(a) {
                var c,
                    s,
                    f,
                    u,
                    p = null;
                i++ % t === 0 && o.push([]);
                try {
                    for (var l = ve(o), d = l.next(); !d.done; d = l.next()) {
                        var h = d.value;
                        h.push(a),
                        e <= h.length && (p = p != null ? p : [], p.push(h))
                    }
                } catch (Y) {
                    c = {
                        error: Y
                    }
                } finally {
                    try {
                        d && !d.done && (s = l.return) && s.call(l)
                    } finally {
                        if (c)
                            throw c.error
                    }
                }
                if (p)
                    try {
                        for (var b = ve(p), F = b.next(); !F.done; F = b.next()) {
                            var h = F.value;
                            je(o, h),
                            n.next(h)
                        }
                    } catch (Y) {
                        f = {
                            error: Y
                        }
                    } finally {
                        try {
                            F && !F.done && (u = b.return) && u.call(b)
                        } finally {
                            if (f)
                                throw f.error
                        }
                    }
            }, function() {
                var a,
                    c;
                try {
                    for (var s = ve(o), f = s.next(); !f.done; f = s.next()) {
                        var u = f.value;
                        n.next(u)
                    }
                } catch (p) {
                    a = {
                        error: p
                    }
                } finally {
                    try {
                        f && !f.done && (c = s.return) && c.call(s)
                    } finally {
                        if (a)
                            throw a.error
                    }
                }
                n.complete()
            }, void 0, function() {
                o = null
            }))
        })
    }
    function ze(e) {
        return g(function(t, r) {
            var n = null,
                o = !1,
                i;
            n = t.subscribe(x(r, void 0, void 0, function(a) {
                i = N(e(a, ze(e)(t))),
                n ? (n.unsubscribe(), n = null, i.subscribe(r)) : o = !0
            })),
            o && (n.unsubscribe(), n = null, i.subscribe(r))
        })
    }
    function lo(e, t, r, n, o) {
        return function(i, a) {
            var c = r,
                s = t,
                f = 0;
            i.subscribe(x(a, function(u) {
                var p = f++;
                s = c ? e(s, u, p) : (c = !0, u),
                n && a.next(s)
            }, o && function() {
                c && a.next(s),
                a.complete()
            }))
        }
    }
    function Fr() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = De(e);
        return r ? zn(Fr.apply(void 0, D([], j(e))), Ve(r)) : g(function(n, o) {
            jr(D([n], j(ut(e))))(o)
        })
    }
    function qe() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return Fr.apply(void 0, D([], j(e)))
    }
    function Ur(e, t) {
        return T(t) ? ue(e, t, 1) : ue(e, 1)
    }
    function Re(e, t) {
        return t === void 0 && (t = we), g(function(r, n) {
            var o = null,
                i = null,
                a = null,
                c = function() {
                    if (o) {
                        o.unsubscribe(),
                        o = null;
                        var f = i;
                        i = null,
                        n.next(f)
                    }
                };
            function s() {
                var f = a + e,
                    u = t.now();
                if (u < f) {
                    o = this.schedule(void 0, f - u),
                    n.add(o);
                    return
                }
                c()
            }
            r.subscribe(x(n, function(f) {
                i = f,
                a = t.now(),
                o || (o = t.schedule(s, e), n.add(o))
            }, function() {
                c(),
                n.complete()
            }, void 0, function() {
                i = o = null
            }))
        })
    }
    function Ue(e) {
        return g(function(t, r) {
            var n = !1;
            t.subscribe(x(r, function(o) {
                n = !0,
                r.next(o)
            }, function() {
                n || r.next(e),
                r.complete()
            }))
        })
    }
    function te(e) {
        return e <= 0 ? function() {
            return V
        } : g(function(t, r) {
            var n = 0;
            t.subscribe(x(r, function(o) {
                ++n <= e && (r.next(o), e <= n && r.complete())
            }))
        })
    }
    function mo() {
        return g(function(e, t) {
            e.subscribe(x(t, pe))
        })
    }
    function J(e) {
        return m(function() {
            return e
        })
    }
    function Wr(e, t) {
        return t ? function(r) {
            return Ge(t.pipe(te(1), mo()), r.pipe(Wr(e)))
        } : ue(function(r, n) {
            return e(r, n).pipe(te(1), J(r))
        })
    }
    function ke(e, t) {
        t === void 0 && (t = we);
        var r = Ne(e, t);
        return Wr(function() {
            return r
        })
    }
    function B(e, t) {
        return t === void 0 && (t = ge), e = e != null ? e : Da, g(function(r, n) {
            var o,
                i = !0;
            r.subscribe(x(n, function(a) {
                var c = t(a);
                (i || !e(o, c)) && (i = !1, o = c, n.next(a))
            }))
        })
    }
    function Da(e, t) {
        return e === t
    }
    function X(e, t) {
        return B(function(r, n) {
            return t ? t(r[e], n[e]) : r[e] === n[e]
        })
    }
    function rr() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return function(r) {
            return Ge(r, I.apply(void 0, D([], j(e))))
        }
    }
    function M(e) {
        return g(function(t, r) {
            try {
                t.subscribe(r)
            } finally {
                r.add(e)
            }
        })
    }
    function ae(e) {
        return e <= 0 ? function() {
            return V
        } : g(function(t, r) {
            var n = [];
            t.subscribe(x(r, function(o) {
                n.push(o),
                e < n.length && n.shift()
            }, function() {
                var o,
                    i;
                try {
                    for (var a = ve(n), c = a.next(); !c.done; c = a.next()) {
                        var s = c.value;
                        r.next(s)
                    }
                } catch (f) {
                    o = {
                        error: f
                    }
                } finally {
                    try {
                        c && !c.done && (i = a.return) && i.call(a)
                    } finally {
                        if (o)
                            throw o.error
                    }
                }
                r.complete()
            }, void 0, function() {
                n = null
            }))
        })
    }
    function ho() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = Ee(e),
            n = zt(e, 1 / 0);
        return e = ut(e), g(function(o, i) {
            ft(n)(ce(D([o], j(e)), r)).subscribe(i)
        })
    }
    function Je() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return ho.apply(void 0, D([], j(e)))
    }
    function Ot(e) {
        var t,
            r = 1 / 0,
            n;
        return e != null && (typeof e == "object" ? (t = e.count, r = t === void 0 ? 1 / 0 : t, n = e.delay) : r = e), r <= 0 ? function() {
            return V
        } : g(function(o, i) {
            var a = 0,
                c,
                s = function() {
                    if (c == null || c.unsubscribe(), c = null, n != null) {
                        var u = typeof n == "number" ? Ne(n) : N(n(a)),
                            p = x(i, function() {
                                p.unsubscribe(),
                                f()
                            });
                        u.subscribe(p)
                    } else
                        f()
                },
                f = function() {
                    var u = !1;
                    c = o.subscribe(x(i, void 0, function() {
                        ++a < r ? c ? s() : u = !0 : i.complete()
                    })),
                    u && s()
                };
            f()
        })
    }
    function pt(e) {
        return g(function(t, r) {
            var n = !1,
                o = null;
            t.subscribe(x(r, function(i) {
                n = !0,
                o = i
            })),
            e.subscribe(x(r, function() {
                if (n) {
                    n = !1;
                    var i = o;
                    o = null,
                    r.next(i)
                }
            }, pe))
        })
    }
    function Dr(e, t) {
        return g(lo(e, t, arguments.length >= 2, !0))
    }
    function se(e) {
        e === void 0 && (e = {});
        var t = e.connector,
            r = t === void 0 ? function() {
                return new E
            } : t,
            n = e.resetOnError,
            o = n === void 0 ? !0 : n,
            i = e.resetOnComplete,
            a = i === void 0 ? !0 : i,
            c = e.resetOnRefCountZero,
            s = c === void 0 ? !0 : c;
        return function(f) {
            var u = null,
                p = null,
                l = null,
                d = 0,
                h = !1,
                b = !1,
                F = function() {
                    p == null || p.unsubscribe(),
                    p = null
                },
                Y = function() {
                    F(),
                    u = l = null,
                    h = b = !1
                },
                U = function() {
                    var _ = u;
                    Y(),
                    _ == null || _.unsubscribe()
                };
            return g(function(_, We) {
                d++,
                !b && !h && F();
                var be = l = l != null ? l : r();
                We.add(function() {
                    d--,
                    d === 0 && !b && !h && (p = Vr(U, s))
                }),
                be.subscribe(We),
                u || (u = new it({
                    next: function(et) {
                        return be.next(et)
                    },
                    error: function(et) {
                        b = !0,
                        F(),
                        p = Vr(Y, o, et),
                        be.error(et)
                    },
                    complete: function() {
                        h = !0,
                        F(),
                        p = Vr(Y, a),
                        be.complete()
                    }
                }), ce(_).subscribe(u))
            })(f)
        }
    }
    function Vr(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++)
            r[n - 2] = arguments[n];
        return t === !0 ? (e(), null) : t === !1 ? null : t.apply(void 0, D([], j(r))).pipe(te(1)).subscribe(function() {
            return e()
        })
    }
    function Z(e, t, r) {
        var n,
            o,
            i,
            a,
            c = !1;
        return e && typeof e == "object" ? (n = e.bufferSize, a = n === void 0 ? 1 / 0 : n, o = e.windowTime, t = o === void 0 ? 1 / 0 : o, i = e.refCount, c = i === void 0 ? !1 : i, r = e.scheduler) : a = e != null ? e : 1 / 0, se({
            connector: function() {
                return new wt(a, t, r)
            },
            resetOnError: !0,
            resetOnComplete: !1,
            resetOnRefCountZero: c
        })
    }
    function He(e) {
        return y(function(t, r) {
            return e <= r
        })
    }
    function Tt(e) {
        return g(function(t, r) {
            var n = !1,
                o = x(r, function() {
                    o == null || o.unsubscribe(),
                    n = !0
                }, pe);
            N(e).subscribe(o),
            t.subscribe(x(r, function(i) {
                return n && r.next(i)
            }))
        })
    }
    function K() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = Ee(e);
        return g(function(n, o) {
            (r ? Ge(e, n, r) : Ge(e, n)).subscribe(o)
        })
    }
    function S(e, t) {
        return g(function(r, n) {
            var o = null,
                i = 0,
                a = !1,
                c = function() {
                    return a && !o && n.complete()
                };
            r.subscribe(x(n, function(s) {
                o == null || o.unsubscribe();
                var f = 0,
                    u = i++;
                N(e(s, u)).subscribe(o = x(n, function(p) {
                    return n.next(t ? t(s, p, u, f++) : p)
                }, function() {
                    o = null,
                    c()
                }))
            }, function() {
                a = !0,
                c()
            }))
        })
    }
    function Xe(e, t) {
        return T(t) ? S(function() {
            return e
        }, t) : S(function() {
            return e
        })
    }
    function re(e) {
        return g(function(t, r) {
            N(e).subscribe(x(r, function() {
                return r.complete()
            }, pe)),
            !r.closed && t.subscribe(r)
        })
    }
    function Nr(e, t) {
        return t === void 0 && (t = !1), g(function(r, n) {
            var o = 0;
            r.subscribe(x(n, function(i) {
                var a = e(i, o++);
                (a || t) && n.next(i),
                !a && n.complete()
            }))
        })
    }
    function w(e, t, r) {
        var n = T(e) || t || r ? {
            next: e,
            error: t,
            complete: r
        } : e;
        return n ? g(function(o, i) {
            var a;
            (a = n.subscribe) === null || a === void 0 || a.call(n);
            var c = !0;
            o.subscribe(x(i, function(s) {
                var f;
                (f = n.next) === null || f === void 0 || f.call(n, s),
                i.next(s)
            }, function() {
                var s;
                c = !1,
                (s = n.complete) === null || s === void 0 || s.call(n),
                i.complete()
            }, function(s) {
                var f;
                c = !1,
                (f = n.error) === null || f === void 0 || f.call(n, s),
                i.error(s)
            }, function() {
                var s,
                    f;
                c && ((s = n.unsubscribe) === null || s === void 0 || s.call(n)),
                (f = n.finalize) === null || f === void 0 || f.call(n)
            }))
        }) : ge
    }
    var zr = {
        leading: !0,
        trailing: !1
    };
    function _t(e, t) {
        return t === void 0 && (t = zr), g(function(r, n) {
            var o = t.leading,
                i = t.trailing,
                a = !1,
                c = null,
                s = null,
                f = !1,
                u = function() {
                    s == null || s.unsubscribe(),
                    s = null,
                    i && (d(), f && n.complete())
                },
                p = function() {
                    s = null,
                    f && n.complete()
                },
                l = function(h) {
                    return s = N(e(h)).subscribe(x(n, u, p))
                },
                d = function() {
                    if (a) {
                        a = !1;
                        var h = c;
                        c = null,
                        n.next(h),
                        !f && l(h)
                    }
                };
            r.subscribe(x(n, function(h) {
                a = !0,
                c = h,
                !(s && !s.closed) && (o ? d() : l(h))
            }, function() {
                f = !0,
                !(i && a && s && !s.closed) && n.complete()
            }))
        })
    }
    function qr(e, t, r) {
        t === void 0 && (t = we),
        r === void 0 && (r = zr);
        var n = Ne(e, t);
        return _t(function() {
            return n
        }, r)
    }
    function me() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = De(e);
        return g(function(n, o) {
            for (var i = e.length, a = new Array(i), c = e.map(function() {
                    return !1
                }), s = !1, f = function(p) {
                    N(e[p]).subscribe(x(o, function(l) {
                        a[p] = l,
                        !s && !c[p] && (c[p] = !0, (s = c.every(ge)) && (c = null))
                    }, pe))
                }, u = 0; u < i; u++)
                f(u);
            n.subscribe(x(o, function(p) {
                if (s) {
                    var l = D([p], j(a));
                    o.next(r ? r.apply(void 0, D([], j(l))) : l)
                }
            }))
        })
    }
    function bo() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return g(function(r, n) {
            St.apply(void 0, D([r], j(e))).subscribe(n)
        })
    }
    function Kr() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return bo.apply(void 0, D([], j(e)))
    }
    function vo() {
        let e = new wt(1);
        return v(document, "DOMContentLoaded", {
            once: !0
        }).subscribe(() => e.next(document)), e
    }
    function Q(e, t=document) {
        return Array.from(t.querySelectorAll(e))
    }
    function q(e, t=document) {
        let r = fe(e, t);
        if (typeof r == "undefined")
            throw new ReferenceError(`Missing element: expected "${e}" to be present`);
        return r
    }
    function fe(e, t=document) {
        return t.querySelector(e) || void 0
    }
    function Ie() {
        return document.activeElement instanceof HTMLElement && document.activeElement || void 0
    }
    function nr(e) {
        return A(v(document.body, "focusin"), v(document.body, "focusout")).pipe(Re(1), m(() => {
            let t = Ie();
            return typeof t != "undefined" ? e.contains(t) : !1
        }), K(e === Ie()), B())
    }
    function Ke(e) {
        return {
            x: e.offsetLeft,
            y: e.offsetTop
        }
    }
    function go(e) {
        return A(v(window, "load"), v(window, "resize")).pipe(Ae(0, ye), m(() => Ke(e)), K(Ke(e)))
    }
    function yo(e) {
        return {
            x: e.scrollLeft,
            y: e.scrollTop
        }
    }
    function or(e) {
        return A(v(e, "scroll"), v(window, "resize")).pipe(Ae(0, ye), m(() => yo(e)), K(yo(e)))
    }
    var wo = function() {
            if (typeof Map != "undefined")
                return Map;
            function e(t, r) {
                var n = -1;
                return t.some(function(o, i) {
                    return o[0] === r ? (n = i, !0) : !1
                }), n
            }
            return function() {
                function t() {
                    this.__entries__ = []
                }
                return Object.defineProperty(t.prototype, "size", {
                    get: function() {
                        return this.__entries__.length
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.get = function(r) {
                    var n = e(this.__entries__, r),
                        o = this.__entries__[n];
                    return o && o[1]
                }, t.prototype.set = function(r, n) {
                    var o = e(this.__entries__, r);
                    ~o ? this.__entries__[o][1] = n : this.__entries__.push([r, n])
                }, t.prototype.delete = function(r) {
                    var n = this.__entries__,
                        o = e(n, r);
                    ~o && n.splice(o, 1)
                }, t.prototype.has = function(r) {
                    return !!~e(this.__entries__, r)
                }, t.prototype.clear = function() {
                    this.__entries__.splice(0)
                }, t.prototype.forEach = function(r, n) {
                    n === void 0 && (n = null);
                    for (var o = 0, i = this.__entries__; o < i.length; o++) {
                        var a = i[o];
                        r.call(n, a[1], a[0])
                    }
                }, t
            }()
        }(),
        Qr = typeof window != "undefined" && typeof document != "undefined" && window.document === document,
        ir = function() {
            return typeof global != "undefined" && global.Math === Math ? global : typeof self != "undefined" && self.Math === Math ? self : typeof window != "undefined" && window.Math === Math ? window : Function("return this")()
        }(),
        Va = function() {
            return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(ir) : function(e) {
                return setTimeout(function() {
                    return e(Date.now())
                }, 1e3 / 60)
            }
        }(),
        Na = 2;
    function za(e, t) {
        var r = !1,
            n = !1,
            o = 0;
        function i() {
            r && (r = !1, e()),
            n && c()
        }
        function a() {
            Va(i)
        }
        function c() {
            var s = Date.now();
            if (r) {
                if (s - o < Na)
                    return;
                n = !0
            } else
                r = !0,
                n = !1,
                setTimeout(a, t);
            o = s
        }
        return c
    }
    var qa = 20,
        Ka = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
        Qa = typeof MutationObserver != "undefined",
        Ya = function() {
            function e() {
                this.connected_ = !1,
                this.mutationEventsAdded_ = !1,
                this.mutationsObserver_ = null,
                this.observers_ = [],
                this.onTransitionEnd_ = this.onTransitionEnd_.bind(this),
                this.refresh = za(this.refresh.bind(this), qa)
            }
            return e.prototype.addObserver = function(t) {
                ~this.observers_.indexOf(t) || this.observers_.push(t),
                this.connected_ || this.connect_()
            }, e.prototype.removeObserver = function(t) {
                var r = this.observers_,
                    n = r.indexOf(t);
                ~n && r.splice(n, 1),
                !r.length && this.connected_ && this.disconnect_()
            }, e.prototype.refresh = function() {
                var t = this.updateObservers_();
                t && this.refresh()
            }, e.prototype.updateObservers_ = function() {
                var t = this.observers_.filter(function(r) {
                    return r.gatherActive(), r.hasActive()
                });
                return t.forEach(function(r) {
                    return r.broadcastActive()
                }), t.length > 0
            }, e.prototype.connect_ = function() {
                !Qr || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Qa ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
            }, e.prototype.disconnect_ = function() {
                !Qr || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
            }, e.prototype.onTransitionEnd_ = function(t) {
                var r = t.propertyName,
                    n = r === void 0 ? "" : r,
                    o = Ka.some(function(i) {
                        return !!~n.indexOf(i)
                    });
                o && this.refresh()
            }, e.getInstance = function() {
                return this.instance_ || (this.instance_ = new e), this.instance_
            }, e.instance_ = null, e
        }(),
        Eo = function(e, t) {
            for (var r = 0, n = Object.keys(t); r < n.length; r++) {
                var o = n[r];
                Object.defineProperty(e, o, {
                    value: t[o],
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                })
            }
            return e
        },
        lt = function(e) {
            var t = e && e.ownerDocument && e.ownerDocument.defaultView;
            return t || ir
        },
        So = sr(0, 0, 0, 0);
    function ar(e) {
        return parseFloat(e) || 0
    }
    function xo(e) {
        for (var t = [], r = 1; r < arguments.length; r++)
            t[r - 1] = arguments[r];
        return t.reduce(function(n, o) {
            var i = e["border-" + o + "-width"];
            return n + ar(i)
        }, 0)
    }
    function Ba(e) {
        for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, o = t; n < o.length; n++) {
            var i = o[n],
                a = e["padding-" + i];
            r[i] = ar(a)
        }
        return r
    }
    function Ga(e) {
        var t = e.getBBox();
        return sr(0, 0, t.width, t.height)
    }
    function Ja(e) {
        var t = e.clientWidth,
            r = e.clientHeight;
        if (!t && !r)
            return So;
        var n = lt(e).getComputedStyle(e),
            o = Ba(n),
            i = o.left + o.right,
            a = o.top + o.bottom,
            c = ar(n.width),
            s = ar(n.height);
        if (n.boxSizing === "border-box" && (Math.round(c + i) !== t && (c -= xo(n, "left", "right") + i), Math.round(s + a) !== r && (s -= xo(n, "top", "bottom") + a)), !Za(e)) {
            var f = Math.round(c + i) - t,
                u = Math.round(s + a) - r;
            Math.abs(f) !== 1 && (c -= f),
            Math.abs(u) !== 1 && (s -= u)
        }
        return sr(o.left, o.top, c, s)
    }
    var Xa = function() {
        return typeof SVGGraphicsElement != "undefined" ? function(e) {
            return e instanceof lt(e).SVGGraphicsElement
        } : function(e) {
            return e instanceof lt(e).SVGElement && typeof e.getBBox == "function"
        }
    }();
    function Za(e) {
        return e === lt(e).document.documentElement
    }
    function es(e) {
        return Qr ? Xa(e) ? Ga(e) : Ja(e) : So
    }
    function ts(e) {
        var t = e.x,
            r = e.y,
            n = e.width,
            o = e.height,
            i = typeof DOMRectReadOnly != "undefined" ? DOMRectReadOnly : Object,
            a = Object.create(i.prototype);
        return Eo(a, {
            x: t,
            y: r,
            width: n,
            height: o,
            top: r,
            right: t + n,
            bottom: o + r,
            left: t
        }), a
    }
    function sr(e, t, r, n) {
        return {
            x: e,
            y: t,
            width: r,
            height: n
        }
    }
    var rs = function() {
            function e(t) {
                this.broadcastWidth = 0,
                this.broadcastHeight = 0,
                this.contentRect_ = sr(0, 0, 0, 0),
                this.target = t
            }
            return e.prototype.isActive = function() {
                var t = es(this.target);
                return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
            }, e.prototype.broadcastRect = function() {
                var t = this.contentRect_;
                return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
            }, e
        }(),
        ns = function() {
            function e(t, r) {
                var n = ts(r);
                Eo(this, {
                    target: t,
                    contentRect: n
                })
            }
            return e
        }(),
        os = function() {
            function e(t, r, n) {
                if (this.activeObservations_ = [], this.observations_ = new wo, typeof t != "function")
                    throw new TypeError("The callback provided as parameter 1 is not a function.");
                this.callback_ = t,
                this.controller_ = r,
                this.callbackCtx_ = n
            }
            return e.prototype.observe = function(t) {
                if (!arguments.length)
                    throw new TypeError("1 argument required, but only 0 present.");
                if (!(typeof Element == "undefined" || !(Element instanceof Object))) {
                    if (!(t instanceof lt(t).Element))
                        throw new TypeError('parameter 1 is not of type "Element".');
                    var r = this.observations_;
                    r.has(t) || (r.set(t, new rs(t)), this.controller_.addObserver(this), this.controller_.refresh())
                }
            }, e.prototype.unobserve = function(t) {
                if (!arguments.length)
                    throw new TypeError("1 argument required, but only 0 present.");
                if (!(typeof Element == "undefined" || !(Element instanceof Object))) {
                    if (!(t instanceof lt(t).Element))
                        throw new TypeError('parameter 1 is not of type "Element".');
                    var r = this.observations_;
                    !r.has(t) || (r.delete(t), r.size || this.controller_.removeObserver(this))
                }
            }, e.prototype.disconnect = function() {
                this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this)
            }, e.prototype.gatherActive = function() {
                var t = this;
                this.clearActive(),
                this.observations_.forEach(function(r) {
                    r.isActive() && t.activeObservations_.push(r)
                })
            }, e.prototype.broadcastActive = function() {
                if (!!this.hasActive()) {
                    var t = this.callbackCtx_,
                        r = this.activeObservations_.map(function(n) {
                            return new ns(n.target, n.broadcastRect())
                        });
                    this.callback_.call(t, r, t),
                    this.clearActive()
                }
            }, e.prototype.clearActive = function() {
                this.activeObservations_.splice(0)
            }, e.prototype.hasActive = function() {
                return this.activeObservations_.length > 0
            }, e
        }(),
        Oo = typeof WeakMap != "undefined" ? new WeakMap : new wo,
        To = function() {
            function e(t) {
                if (!(this instanceof e))
                    throw new TypeError("Cannot call a class as a function.");
                if (!arguments.length)
                    throw new TypeError("1 argument required, but only 0 present.");
                var r = Ya.getInstance(),
                    n = new os(t, r, this);
                Oo.set(this, n)
            }
            return e
        }();
    ["observe", "unobserve", "disconnect"].forEach(function(e) {
        To.prototype[e] = function() {
            var t;
            return (t = Oo.get(this))[e].apply(t, arguments)
        }
    });
    var is = function() {
            return typeof ir.ResizeObserver != "undefined" ? ir.ResizeObserver : To
        }(),
        _o = is;
    var Mo = new E,
        as = R(() => I(new _o(e => {
            for (let t of e)
                Mo.next(t)
        }))).pipe(S(e => A(Se, I(e)).pipe(M(() => e.disconnect()))), Z(1));
    function de(e) {
        return {
            width: e.offsetWidth,
            height: e.offsetHeight
        }
    }
    function xe(e) {
        return as.pipe(w(t => t.observe(e)), S(t => Mo.pipe(y(({target: r}) => r === e), M(() => t.unobserve(e)), m(() => de(e)))), K(de(e)))
    }
    function cr(e) {
        return {
            width: e.scrollWidth,
            height: e.scrollHeight
        }
    }
    function fr(e) {
        let t = e.parentElement;
        for (; t && e.scrollHeight <= t.scrollHeight;)
            t = (e = t).parentElement;
        return t ? e : void 0
    }
    var Lo = new E,
        ss = R(() => I(new IntersectionObserver(e => {
            for (let t of e)
                Lo.next(t)
        }, {
            threshold: 0
        }))).pipe(S(e => A(Se, I(e)).pipe(M(() => e.disconnect()))), Z(1));
    function Ao(e) {
        return ss.pipe(w(t => t.observe(e)), S(t => Lo.pipe(y(({target: r}) => r === e), M(() => t.unobserve(e)), m(({isIntersecting: r}) => r))))
    }
    function Co(e, t=16) {
        return or(e).pipe(m(({y: r}) => {
            let n = de(e),
                o = cr(e);
            return r >= o.height - n.height - t
        }), B())
    }
    var ur = {
        drawer: q("[data-md-toggle=drawer]"),
        search: q("[data-md-toggle=search]")
    };
    function Ro(e) {
        return ur[e].checked
    }
    function Qe(e, t) {
        ur[e].checked !== t && ur[e].click()
    }
    function mt(e) {
        let t = ur[e];
        return v(t, "change").pipe(m(() => t.checked), K(t.checked))
    }
    function cs(e, t) {
        switch (e.constructor) {
        case HTMLInputElement:
            return e.type === "radio" ? /^Arrow/.test(t) : !0;
        case HTMLSelectElement:
        case HTMLTextAreaElement:
            return !0;
        default:
            return e.isContentEditable
        }
    }
    function ko() {
        return v(window, "keydown").pipe(y(e => !(e.metaKey || e.ctrlKey)), m(e => ({
            mode: Ro("search") ? "search" : "global",
            type: e.key,
            claim() {
                e.preventDefault(),
                e.stopPropagation()
            }
        })), y(({mode: e, type: t}) => {
            if (e === "global") {
                let r = Ie();
                if (typeof r != "undefined")
                    return !cs(r, t)
            }
            return !0
        }), se())
    }
    function Oe() {
        return new URL(location.href)
    }
    function pr(e) {
        location.href = e.href
    }
    function Ho() {
        return new E
    }
    function Po(e, t) {
        if (typeof t == "string" || typeof t == "number")
            e.innerHTML += t.toString();
        else if (t instanceof Node)
            e.appendChild(t);
        else if (Array.isArray(t))
            for (let r of t)
                Po(e, r)
    }
    function C(e, t, ...r) {
        let n = document.createElement(e);
        if (t)
            for (let o of Object.keys(t))
                typeof t[o] != "undefined" && (typeof t[o] != "boolean" ? n.setAttribute(o, t[o]) : n.setAttribute(o, ""));
        for (let o of r)
            Po(n, o);
        return n
    }
    function lr(e) {
        if (e > 999) {
            let t = +((e - 950) % 1e3 > 99);
            return `${((e + 1e-6) / 1e3).toFixed(t)}k`
        } else
            return e.toString()
    }
    function Yr(e, t, r) {
        t = new RegExp(t, "g");
        let n,
            o = 0;
        do {
            n = t.exec(e);
            let i = n ? n.index : e.length;
            if (o < i && r([o, i]), n) {
                let [a] = n;
                o = n.index + a.length,
                a.length === 0 && (t.lastIndex = n.index + 1)
            }
        } while (n)
    }
    function Io() {
        return location.hash.substring(1)
    }
    function $o(e) {
        let t = C("a", {
            href: e
        });
        t.addEventListener("click", r => r.stopPropagation()),
        t.click()
    }
    function fs() {
        return v(window, "hashchange").pipe(m(Io), K(Io()), y(e => e.length > 0), Z(1))
    }
    function jo() {
        return fs().pipe(m(e => fe(`[id="${e}"]`)), y(e => typeof e != "undefined"))
    }
    function Br(e) {
        let t = matchMedia(e);
        return tr(r => t.addListener(() => r(t.matches))).pipe(K(t.matches))
    }
    function Fo() {
        let e = matchMedia("print");
        return A(v(window, "beforeprint").pipe(J(!0)), v(window, "afterprint").pipe(J(!1))).pipe(K(e.matches))
    }
    function Gr(e, t) {
        return e.pipe(S(r => r ? t() : V))
    }
    function mr(e, t={
        credentials: "same-origin"
    }) {
        return ce(fetch(`${e}`, t)).pipe(y(r => r.status === 200), ze(() => V))
    }
    function $e(e, t) {
        return mr(e, t).pipe(S(r => r.json()), Z(1))
    }
    function Uo(e, t) {
        let r = new DOMParser;
        return mr(e, t).pipe(S(n => n.text()), m(n => r.parseFromString(n, "text/xml")), Z(1))
    }
    function dr(e) {
        let t = C("script", {
            src: e
        });
        return R(() => (document.head.appendChild(t), A(v(t, "load"), v(t, "error").pipe(S(() => $r(() => new ReferenceError(`Invalid script: ${e}`))))).pipe(J(void 0), M(() => document.head.removeChild(t)), te(1))))
    }
    function Wo() {
        return {
            x: Math.max(0, scrollX),
            y: Math.max(0, scrollY)
        }
    }
    function Do() {
        return A(v(window, "scroll", {
            passive: !0
        }), v(window, "resize", {
            passive: !0
        })).pipe(m(Wo), K(Wo()))
    }
    function Vo() {
        return {
            width: innerWidth,
            height: innerHeight
        }
    }
    function No() {
        return v(window, "resize", {
            passive: !0
        }).pipe(m(Vo), K(Vo()))
    }
    function zo() {
        return G([Do(), No()]).pipe(m(([e, t]) => ({
            offset: e,
            size: t
        })), Z(1))
    }
    function hr(e, {viewport$: t, header$: r}) {
        let n = t.pipe(X("size")),
            o = G([n, r]).pipe(m(() => Ke(e)));
        return G([r, t, o]).pipe(m(([{height: i}, {offset: a, size: c}, {x: s, y: f}]) => ({
            offset: {
                x: a.x - s,
                y: a.y - f + i
            },
            size: c
        })))
    }
    function qo(e, {tx$: t}) {
        let r = v(e, "message").pipe(m(({data: n}) => n));
        return t.pipe(_t(() => r, {
            leading: !0,
            trailing: !0
        }), w(n => e.postMessage(n)), Xe(r), se())
    }
    var us = q("#__config"),
        dt = JSON.parse(us.textContent);
    dt.base = `${new URL(dt.base, Oe())}`;
    function he() {
        return dt
    }
    function ee(e) {
        return dt.features.includes(e)
    }
    function ne(e, t) {
        return typeof t != "undefined" ? dt.translations[e].replace("#", t.toString()) : dt.translations[e]
    }
    function Te(e, t=document) {
        return q(`[data-md-component=${e}]`, t)
    }
    function ie(e, t=document) {
        return Q(`[data-md-component=${e}]`, t)
    }
    function ps(e) {
        let t = q(".md-typeset > :first-child", e);
        return v(t, "click", {
            once: !0
        }).pipe(J(q(".md-typeset", e)), m(r => ({
            hash: __md_hash(r.innerHTML)
        })))
    }
    function Ko(e) {
        return !ee("announce.dismiss") || !e.childElementCount ? V : R(() => {
            let t = new E;
            return t.pipe(K({
                hash: __md_get("__announce")
            })).subscribe(({hash: r}) => {
                var n;
                r && r === ((n = __md_get("__announce")) != null ? n : r) && (e.hidden = !0, __md_set("__announce", r))
            }), ps(e).pipe(w(r => t.next(r)), M(() => t.complete()), m(r => H({
                ref: e
            }, r)))
        })
    }
    function ls(e, {target$: t}) {
        return t.pipe(m(r => ({
            hidden: r !== e
        })))
    }
    function Qo(e, t) {
        let r = new E;
        return r.subscribe(({hidden: n}) => {
            e.hidden = n
        }), ls(e, t).pipe(w(n => r.next(n)), M(() => r.complete()), m(n => H({
            ref: e
        }, n)))
    }
    function ms(e, t) {
        let r = R(() => G([go(e), or(t)])).pipe(m(([{x: n, y: o}, i]) => {
            let {width: a, height: c} = de(e);
            return {
                x: n - i.x + a / 2,
                y: o - i.y + c / 2
            }
        }));
        return nr(e).pipe(S(n => r.pipe(m(o => ({
            active: n,
            offset: o
        })), te(+!n || 1 / 0))))
    }
    function Yo(e, t, {target$: r}) {
        let [n, o] = Array.from(e.children);
        return R(() => {
            let i = new E;
            return i.subscribe({
                next({offset: a}) {
                    e.style.setProperty("--md-tooltip-x", `${a.x}px`),
                    e.style.setProperty("--md-tooltip-y", `${a.y}px`)
                },
                complete() {
                    e.style.removeProperty("--md-tooltip-x"),
                    e.style.removeProperty("--md-tooltip-y")
                }
            }), A(i.pipe(y(({active: a}) => a)), i.pipe(Re(250), y(({active: a}) => !a))).subscribe({
                next({active: a}) {
                    a ? e.prepend(n) : n.remove()
                },
                complete() {
                    e.prepend(n)
                }
            }), i.pipe(Ae(0, ye)).subscribe(({active: a}) => {
                n.classList.toggle("md-tooltip--active", a)
            }), i.pipe(qr(500, ye), y(() => !!e.offsetParent), m(() => e.offsetParent.getBoundingClientRect()), m(({x: a}) => a)).subscribe({
                next(a) {
                    a ? e.style.setProperty("--md-tooltip-0", `${-a}px`) : e.style.removeProperty("--md-tooltip-0")
                },
                complete() {
                    e.style.removeProperty("--md-tooltip-0")
                }
            }), v(o, "click").pipe(re(i.pipe(ae(1))), y(a => !(a.metaKey || a.ctrlKey))).subscribe(a => a.preventDefault()), v(o, "mousedown").pipe(re(i.pipe(ae(1))), me(i)).subscribe(([a, {active: c}]) => {
                var s;
                if (a.button !== 0 || a.metaKey || a.ctrlKey)
                    a.preventDefault();
                else if (c) {
                    a.preventDefault();
                    let f = e.parentElement.closest(".md-annotation");
                    f instanceof HTMLElement ? f.focus() : (s = Ie()) == null || s.blur()
                }
            }), r.pipe(re(i.pipe(ae(1))), y(a => a === n), ke(125)).subscribe(() => e.focus()), ms(e, t).pipe(w(a => i.next(a)), M(() => i.complete()), m(a => H({
                ref: e
            }, a)))
        })
    }
    function Bo(e) {
        return C("div", {
            class: "md-tooltip",
            id: e
        }, C("div", {
            class: "md-tooltip__inner md-typeset"
        }))
    }
    function Go(e, t) {
        t = t ? `${t}_annotation_${e}` : void 0;
        let r = t ? `#${t}` : void 0;
        return C("aside", {
            class: "md-annotation",
            tabIndex: 0
        }, Bo(t), C("a", {
            href: r,
            class: "md-annotation__index",
            tabIndex: -1
        }, C("span", {
            "data-md-annotation-id": e
        })))
    }
    function Jo(e) {
        return C("button", {
            class: "md-clipboard md-icon",
            title: ne("clipboard.copy"),
            "data-clipboard-target": `#${e} > code`
        })
    }
    function Jr(e, t) {
        let r = t & 2,
            n = t & 1,
            o = Object.keys(e.terms).filter(a => !e.terms[a]).reduce((a, c) => [...a, C("del", null, c), " "], []).slice(0, -1),
            i = new URL(e.location);
        return ee("search.highlight") && i.searchParams.set("h", Object.entries(e.terms).filter(([, a]) => a).reduce((a, [c]) => `${a} ${c}`.trim(), "")), C("a", {
            href: `${i}`,
            class: "md-search-result__link",
            tabIndex: -1
        }, C("article", {
            class: "md-search-result__article md-typeset",
            "data-md-score": e.score.toFixed(2)
        }, r > 0 && C("div", {
            class: "md-search-result__icon md-icon"
        }), r > 0 && C("h1", null, e.title), r <= 0 && C("h2", null, e.title), n > 0 && e.text.length > 0 && e.text, e.tags && e.tags.map(a => C("span", {
            class: "md-tag"
        }, a)), n > 0 && o.length > 0 && C("p", {
            class: "md-search-result__terms"
        }, ne("search.result.term.missing"), ": ", o)))
    }
    function Xo(e) {
        let t = e[0].score,
            r = [...e],
            n = r.findIndex(f => !f.location.includes("#")),
            [o] = r.splice(n, 1),
            i = r.findIndex(f => f.score < t);
        i === -1 && (i = r.length);
        let a = r.slice(0, i),
            c = r.slice(i),
            s = [Jr(o, 2 | +(!n && i === 0)), ...a.map(f => Jr(f, 1)), ...c.length ? [C("details", {
                class: "md-search-result__more"
            }, C("summary", {
                tabIndex: -1
            }, C("div", null, c.length > 0 && c.length === 1 ? ne("search.result.more.one") : ne("search.result.more.other", c.length))), c.map(f => Jr(f, 1)))] : []];
        return C("li", {
            class: "md-search-result__item"
        }, s)
    }
    function Zo(e) {
        return C("ul", {
            class: "md-source__facts"
        }, Object.entries(e).map(([t, r]) => C("li", {
            class: `md-source__fact md-source__fact--${t}`
        }, typeof r == "number" ? lr(r) : r)))
    }
    function ei(e) {
        return C("div", {
            class: "md-typeset__scrollwrap"
        }, C("div", {
            class: "md-typeset__table"
        }, e))
    }
    function ds(e) {
        let t = he(),
            r = new URL(`../${e.version}/`, t.base);
        return C("li", {
            class: "md-version__item"
        }, C("a", {
            href: `${r}`,
            class: "md-version__link"
        }, e.title))
    }
    function ti(e, t) {
        return C("div", {
            class: "md-version"
        }, C("button", {
            class: "md-version__current",
            "aria-label": ne("select.version.title")
        }, t.title), C("ul", {
            class: "md-version__list"
        }, e.map(ds)))
    }
    function hs(e) {
        let t = [];
        for (let r of e.tagName === "CODE" ? Q(".c, .c1, .cm", e) : [e]) {
            let n = [],
                o = document.createNodeIterator(r, NodeFilter.SHOW_TEXT);
            for (let i = o.nextNode(); i; i = o.nextNode())
                n.push(i);
            for (let i of n) {
                let a;
                for (; a = /(\(\d+\))(!)?/.exec(i.textContent);) {
                    let [, c, s] = a;
                    if (typeof s == "undefined") {
                        let f = i.splitText(a.index);
                        i = f.splitText(c.length),
                        t.push(f)
                    } else {
                        i.textContent = c,
                        t.push(i);
                        break
                    }
                }
            }
        }
        return t
    }
    function ri(e, t) {
        t.append(...Array.from(e.childNodes))
    }
    function br(e, t, {target$: r, print$: n}) {
        let o = t.closest("[id]"),
            i = o == null ? void 0 : o.id,
            a = new Map;
        for (let c of hs(t)) {
            let [, s] = c.textContent.match(/\((\d+)\)/);
            fe(`li:nth-child(${s})`, e) && (a.set(s, Go(s, i)), c.replaceWith(a.get(s)))
        }
        return a.size === 0 ? V : R(() => {
            let c = new E,
                s = [];
            for (let [f, u] of a)
                s.push([q(".md-typeset", u), q(`li:nth-child(${f})`, e)]);
            return n.pipe(re(c.pipe(ae(1)))).subscribe(f => {
                e.hidden = !f;
                for (let [u, p] of s)
                    f ? ri(u, p) : ri(p, u)
            }), A(...[...a].map(([, f]) => Yo(f, t, {
                target$: r
            }))).pipe(M(() => c.complete()), se())
        })
    }
    function ni(e) {
        if (e.nextElementSibling) {
            let t = e.nextElementSibling;
            if (t.tagName === "OL")
                return t;
            if (t.tagName === "P" && !t.children.length)
                return ni(t)
        }
    }
    function oi(e, t) {
        return R(() => {
            let r = ni(e);
            return typeof r != "undefined" ? br(r, e, t) : V
        })
    }
    var ai = tt(Zr());
    var bs = 0;
    function si(e) {
        if (e.nextElementSibling) {
            let t = e.nextElementSibling;
            if (t.tagName === "OL")
                return t;
            if (t.tagName === "P" && !t.children.length)
                return si(t)
        }
    }
    function ii(e) {
        return xe(e).pipe(m(({width: t}) => ({
            scrollable: cr(e).width > t
        })), X("scrollable"))
    }
    function ci(e, t) {
        let {matches: r} = matchMedia("(hover)"),
            n = R(() => {
                let o = new E;
                if (o.subscribe(({scrollable: a}) => {
                    a && r ? e.setAttribute("tabindex", "0") : e.removeAttribute("tabindex")
                }), ai.default.isSupported()) {
                    let a = e.closest("pre");
                    a.id = `__code_${++bs}`,
                    a.insertBefore(Jo(a.id), e)
                }
                let i = e.closest([":not(td):not(.code) > .highlight", ".highlighttable"].join(", "));
                if (i instanceof HTMLElement) {
                    let a = si(i);
                    if (typeof a != "undefined" && (i.classList.contains("annotate") || ee("content.code.annotate"))) {
                        let c = br(a, e, t);
                        return ii(e).pipe(w(s => o.next(s)), M(() => o.complete()), m(s => H({
                            ref: e
                        }, s)), Je(xe(i).pipe(re(o.pipe(ae(1))), m(({width: s, height: f}) => s && f), B(), S(s => s ? c : V))))
                    }
                }
                return ii(e).pipe(w(a => o.next(a)), M(() => o.complete()), m(a => H({
                    ref: e
                }, a)))
            });
        return Ao(e).pipe(y(o => o), te(1), S(() => n))
    }
    var fi = ".node circle,.node ellipse,.node path,.node polygon,.node rect{fill:var(--md-mermaid-node-bg-color);stroke:var(--md-mermaid-node-fg-color)}marker{fill:var(--md-mermaid-edge-color)!important}.edgeLabel .label rect{fill:transparent}.label{color:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}.label foreignObject{line-height:normal;overflow:visible}.label div .edgeLabel{color:var(--md-mermaid-label-fg-color)}.edgeLabel,.edgeLabel rect,.label div .edgeLabel{background-color:var(--md-mermaid-label-bg-color)}.edgeLabel,.edgeLabel rect{fill:var(--md-mermaid-label-bg-color);color:var(--md-mermaid-edge-color)}.edgePath .path,.flowchart-link{stroke:var(--md-mermaid-edge-color)}.edgePath .arrowheadPath{fill:var(--md-mermaid-edge-color);stroke:none}.cluster rect{fill:var(--md-default-fg-color--lightest);stroke:var(--md-default-fg-color--lighter)}.cluster span{color:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}#flowchart-circleEnd,#flowchart-circleStart,#flowchart-crossEnd,#flowchart-crossStart,#flowchart-pointEnd,#flowchart-pointStart{stroke:none}g.classGroup line,g.classGroup rect{fill:var(--md-mermaid-node-bg-color);stroke:var(--md-mermaid-node-fg-color)}g.classGroup text{fill:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}.classLabel .box{fill:var(--md-mermaid-label-bg-color);background-color:var(--md-mermaid-label-bg-color);opacity:1}.classLabel .label{fill:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}.node .divider{stroke:var(--md-mermaid-node-fg-color)}.relation{stroke:var(--md-mermaid-edge-color)}.cardinality{fill:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}.cardinality text{fill:inherit!important}#compositionEnd,#compositionStart,#dependencyEnd,#dependencyStart,#extensionEnd,#extensionStart{fill:var(--md-mermaid-edge-color)!important;stroke:var(--md-mermaid-edge-color)!important}#aggregationEnd,#aggregationStart{fill:var(--md-mermaid-label-bg-color)!important;stroke:var(--md-mermaid-edge-color)!important}g.stateGroup rect{fill:var(--md-mermaid-node-bg-color);stroke:var(--md-mermaid-node-fg-color)}g.stateGroup .state-title{fill:var(--md-mermaid-label-fg-color)!important;font-family:var(--md-mermaid-font-family)}g.stateGroup .composit{fill:var(--md-mermaid-label-bg-color)}.nodeLabel{color:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}.node circle.state-end,.node circle.state-start,.start-state{fill:var(--md-mermaid-edge-color);stroke:none}.end-state-inner,.end-state-outer{fill:var(--md-mermaid-edge-color)}.end-state-inner,.node circle.state-end{stroke:var(--md-mermaid-label-bg-color)}.transition{stroke:var(--md-mermaid-edge-color)}[id^=state-fork] rect,[id^=state-join] rect{fill:var(--md-mermaid-edge-color)!important;stroke:none!important}.statediagram-cluster.statediagram-cluster .inner{fill:var(--md-default-bg-color)}.statediagram-cluster rect{fill:var(--md-mermaid-node-bg-color);stroke:var(--md-mermaid-node-fg-color)}.statediagram-state rect.divider{fill:var(--md-default-fg-color--lightest);stroke:var(--md-default-fg-color--lighter)}.entityBox{fill:var(--md-mermaid-label-bg-color);stroke:var(--md-mermaid-node-fg-color)}.entityLabel{fill:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}.relationshipLabelBox{fill:var(--md-mermaid-label-bg-color);fill-opacity:1;background-color:var(--md-mermaid-label-bg-color);opacity:1}.relationshipLabel{fill:var(--md-mermaid-label-fg-color)}.relationshipLine{stroke:var(--md-mermaid-edge-color)}#ONE_OR_MORE_END *,#ONE_OR_MORE_START *,#ONLY_ONE_END *,#ONLY_ONE_START *,#ZERO_OR_MORE_END *,#ZERO_OR_MORE_START *,#ZERO_OR_ONE_END *,#ZERO_OR_ONE_START *{stroke:var(--md-mermaid-edge-color)!important}#ZERO_OR_MORE_END circle,#ZERO_OR_MORE_START circle,.actor{fill:var(--md-mermaid-label-bg-color)}.actor{stroke:var(--md-mermaid-node-fg-color)}text.actor>tspan{fill:var(--md-mermaid-label-fg-color);font-family:var(--md-mermaid-font-family)}line{stroke:var(--md-default-fg-color--lighter)}.messageLine0,.messageLine1{stroke:var(--md-mermaid-edge-color)}.loopText>tspan,.messageText{font-family:var(--md-mermaid-font-family)!important}#arrowhead path,.loopText>tspan,.messageText{fill:var(--md-mermaid-edge-color);stroke:none}.loopLine{stroke:var(--md-mermaid-node-fg-color)}.labelBox,.loopLine{fill:var(--md-mermaid-node-bg-color)}.labelBox{stroke:none}.labelText,.labelText>span{fill:var(--md-mermaid-node-fg-color);font-family:var(--md-mermaid-font-family)}";
    var en,
        gs = 0;
    function ys() {
        return typeof mermaid == "undefined" || mermaid instanceof Element ? dr("https://squidfunk.github.io/mkdocs-material/assets/externals/unpkg.com/mermaid@8.13.3/dist/mermaid.min.js") : I(void 0)
    }
    function ui(e) {
        return e.classList.remove("mermaid"), en || (en = ys().pipe(w(() => mermaid.initialize({
            startOnLoad: !1,
            themeCSS: fi
        })), J(void 0), Z(1))), en.subscribe(() => {
            e.classList.add("mermaid");
            let t = `__mermaid_${gs++}`,
                r = C("div", {
                    class: "mermaid"
                });
            mermaid.mermaidAPI.render(t, e.textContent, n => {
                let o = r.attachShadow({
                    mode: "closed"
                });
                o.innerHTML = n,
                e.replaceWith(r)
            })
        }), en.pipe(J({
            ref: e
        }))
    }
    function xs(e, {target$: t, print$: r}) {
        let n = !0;
        return A(t.pipe(m(o => o.closest("details:not([open])")), y(o => e === o), J({
            action: "open",
            reveal: !0
        })), r.pipe(y(o => o || !n), w(() => n = e.open), m(o => ({
            action: o ? "open" : "close"
        }))))
    }
    function pi(e, t) {
        return R(() => {
            let r = new E;
            return r.subscribe(({action: n, reveal: o}) => {
                n === "open" ? e.setAttribute("open", "") : e.removeAttribute("open"),
                o && e.scrollIntoView()
            }), xs(e, t).pipe(w(n => r.next(n)), M(() => r.complete()), m(n => H({
                ref: e
            }, n)))
        })
    }
    var li = C("table");
    function mi(e) {
        return e.replaceWith(li), li.replaceWith(ei(e)), I({
            ref: e
        })
    }
    function ws(e) {
        let t = Q(":scope > input", e),
            r = t.find(n => n.checked);
        return A(...t.map(n => v(n, "change").pipe(J({
            active: q(`label[for=${n.id}]`)
        })))).pipe(K({
            active: q(`label[for=${r.id}]`)
        }))
    }
    function di(e) {
        let t = q(".tabbed-labels", e);
        return R(() => {
            let r = new E;
            return G([r, xe(e)]).pipe(Ae(1, ye), re(r.pipe(ae(1)))).subscribe({
                next([{active: n}]) {
                    let o = Ke(n),
                        {width: i} = de(n);
                    e.style.setProperty("--md-indicator-x", `${o.x}px`),
                    e.style.setProperty("--md-indicator-width", `${i}px`),
                    t.scrollTo({
                        behavior: "smooth",
                        left: o.x
                    })
                },
                complete() {
                    e.style.removeProperty("--md-indicator-x"),
                    e.style.removeProperty("--md-indicator-width")
                }
            }), ee("content.tabs.link") && r.pipe(He(1)).subscribe(({active: n}) => {
                let o = n.innerText.trim();
                for (let a of Q("[data-tabs]"))
                    for (let c of Q(":scope > input", a))
                        if (q(`label[for=${c.id}]`).innerText.trim() === o) {
                            c.click();
                            break
                        }
                let i = __md_get("__tabs") || [];
                __md_set("__tabs", [...new Set([o, ...i])])
            }), ws(e).pipe(w(n => r.next(n)), M(() => r.complete()), m(n => H({
                ref: e
            }, n)))
        })
    }
    function hi(e, {target$: t, print$: r}) {
        return A(...Q(".annotate:not(.highlight, .highlighttable)", e).map(n => oi(n, {
            target$: t,
            print$: r
        })), ...Q("pre:not(.mermaid) > code", e).map(n => ci(n, {
            target$: t,
            print$: r
        })), ...Q("pre.mermaid", e).map(n => ui(n)), ...Q("table:not([class])", e).map(n => mi(n)), ...Q("details", e).map(n => pi(n, {
            target$: t,
            print$: r
        })), ...Q("[data-tabs]", e).map(n => di(n)))
    }
    function Es(e, {alert$: t}) {
        return t.pipe(S(r => A(I(!0), I(!1).pipe(ke(2e3))).pipe(m(n => ({
            message: r,
            active: n
        })))))
    }
    function bi(e, t) {
        let r = q(".md-typeset", e);
        return R(() => {
            let n = new E;
            return n.subscribe(({message: o, active: i}) => {
                e.classList.toggle("md-dialog--active", i),
                r.textContent = o
            }), Es(e, t).pipe(w(o => n.next(o)), M(() => n.complete()), m(o => H({
                ref: e
            }, o)))
        })
    }
    function Ss({viewport$: e}) {
        if (!ee("header.autohide"))
            return I(!1);
        let t = e.pipe(m(({offset: {y: o}}) => o), Ce(2, 1), m(([o, i]) => [o < i, i]), X(0)),
            r = G([e, t]).pipe(y(([{offset: o}, [, i]]) => Math.abs(i - o.y) > 100), m(([, [o]]) => o), B()),
            n = mt("search");
        return G([e, n]).pipe(m(([{offset: o}, i]) => o.y > 400 && !i), B(), S(o => o ? r : I(!1)), K(!1))
    }
    function vi(e, t) {
        return R(() => {
            let r = getComputedStyle(e);
            return I(r.position === "sticky" || r.position === "-webkit-sticky")
        }).pipe(qe(xe(e), Ss(t)), m(([r, {height: n}, o]) => ({
            height: r ? n : 0,
            sticky: r,
            hidden: o
        })), B((r, n) => r.sticky === n.sticky && r.height === n.height && r.hidden === n.hidden), Z(1))
    }
    function gi(e, {header$: t, main$: r}) {
        return R(() => {
            let n = new E;
            return n.pipe(X("active"), qe(t)).subscribe(([{active: o}, {hidden: i}]) => {
                e.classList.toggle("md-header--hidden", i),
                e.classList.toggle("md-header--shadow", o && !i)
            }), r.subscribe(n), t.pipe(re(n.pipe(ae(1))), m(o => H({
                ref: e
            }, o)))
        })
    }
    function Os(e, {viewport$: t, header$: r}) {
        return hr(e, {
            viewport$: t,
            header$: r
        }).pipe(m(({offset: {y: n}}) => {
            let {height: o} = de(e);
            return {
                active: n >= o
            }
        }), X("active"))
    }
    function yi(e, t) {
        return R(() => {
            let r = new E;
            r.subscribe(({active: o}) => {
                e.classList.toggle("md-header__title--active", o)
            });
            let n = fe("article h1");
            return typeof n == "undefined" ? V : Os(n, t).pipe(w(o => r.next(o)), M(() => r.complete()), m(o => H({
                ref: e
            }, o)))
        })
    }
    function xi(e, {viewport$: t, header$: r}) {
        let n = r.pipe(m(({height: i}) => i), B()),
            o = n.pipe(S(() => xe(e).pipe(m(({height: i}) => ({
                top: e.offsetTop,
                bottom: e.offsetTop + i
            })), X("bottom"))));
        return G([n, o, t]).pipe(m(([i, {top: a, bottom: c}, {offset: {y: s}, size: {height: f}}]) => (f = Math.max(0, f - Math.max(0, a - s, i) - Math.max(0, f + s - c)), {
            offset: a - i,
            height: f,
            active: a - i <= s
        })), B((i, a) => i.offset === a.offset && i.height === a.height && i.active === a.active))
    }
    function Ts(e) {
        let t = __md_get("__palette") || {
            index: e.findIndex(r => matchMedia(r.getAttribute("data-md-color-media")).matches)
        };
        return I(...e).pipe(ue(r => v(r, "change").pipe(J(r))), K(e[Math.max(0, t.index)]), m(r => ({
            index: e.indexOf(r),
            color: {
                scheme: r.getAttribute("data-md-color-scheme"),
                primary: r.getAttribute("data-md-color-primary"),
                accent: r.getAttribute("data-md-color-accent")
            }
        })), Z(1))
    }
    function wi(e) {
        return R(() => {
            let t = new E;
            t.subscribe(n => {
                for (let [o, i] of Object.entries(n.color))
                    document.body.setAttribute(`data-md-color-${o}`, i);
                for (let o = 0; o < r.length; o++) {
                    let i = r[o].nextElementSibling;
                    i instanceof HTMLElement && (i.hidden = n.index !== o)
                }
                __md_set("__palette", n)
            });
            let r = Q("input", e);
            return Ts(r).pipe(w(n => t.next(n)), M(() => t.complete()), m(n => H({
                ref: e
            }, n)))
        })
    }
    var tn = tt(Zr());
    function _s(e) {
        e.setAttribute("data-md-copying", "");
        let t = e.innerText;
        return e.removeAttribute("data-md-copying"), t
    }
    function Ei({alert$: e}) {
        tn.default.isSupported() && new P(t => {
            new tn.default("[data-clipboard-target], [data-clipboard-text]", {
                text: r => r.getAttribute("data-clipboard-text") || _s(q(r.getAttribute("data-clipboard-target")))
            }).on("success", r => t.next(r))
        }).pipe(w(t => {
            t.trigger.focus()
        }), J(ne("clipboard.copied"))).subscribe(e)
    }
    function Ms(e) {
        if (e.length < 2)
            return [""];
        let [t, r] = [...e].sort((o, i) => o.length - i.length).map(o => o.replace(/[^/]+$/, "")),
            n = 0;
        if (t === r)
            n = t.length;
        else
            for (; t.charCodeAt(n) === r.charCodeAt(n);)
                n++;
        return e.map(o => o.replace(t.slice(0, n), ""))
    }
    function vr(e) {
        let t = __md_get("__sitemap", sessionStorage, e);
        if (t)
            return I(t);
        {
            let r = he();
            return Uo(new URL("sitemap.xml", e || r.base)).pipe(m(n => Ms(Q("loc", n).map(o => o.textContent))), Ue([]), w(n => __md_set("__sitemap", n, sessionStorage, e)))
        }
    }
    function Si({document$: e, location$: t, viewport$: r}) {
        let n = he();
        if (location.protocol === "file:")
            return;
        "scrollRestoration" in history && (history.scrollRestoration = "manual", v(window, "beforeunload").subscribe(() => {
            history.scrollRestoration = "auto"
        }));
        let o = fe("link[rel=icon]");
        typeof o != "undefined" && (o.href = o.href);
        let i = vr().pipe(m(f => f.map(u => `${new URL(u, n.base)}`)), S(f => v(document.body, "click").pipe(y(u => !u.metaKey && !u.ctrlKey), S(u => {
                if (u.target instanceof Element) {
                    let p = u.target.closest("a");
                    if (p && !p.target) {
                        let l = new URL(p.href);
                        if (l.search = "", l.hash = "", l.pathname !== location.pathname && f.includes(l.toString()))
                            return u.preventDefault(), I({
                                url: new URL(p.href)
                            })
                    }
                }
                return Se
            }))), se()),
            a = v(window, "popstate").pipe(y(f => f.state !== null), m(f => ({
                url: new URL(location.href),
                offset: f.state
            })), se());
        A(i, a).pipe(B((f, u) => f.url.href === u.url.href), m(({url: f}) => f)).subscribe(t);
        let c = t.pipe(X("pathname"), S(f => mr(f.href).pipe(ze(() => (pr(f), Se)))), se());
        i.pipe(pt(c)).subscribe(({url: f}) => {
            history.pushState({}, "", `${f}`)
        });
        let s = new DOMParser;
        c.pipe(S(f => f.text()), m(f => s.parseFromString(f, "text/html"))).subscribe(e),
        e.pipe(He(1)).subscribe(f => {
            for (let u of ["title", "link[rel=canonical]", "meta[name=author]", "meta[name=description]", "[data-md-component=announce]", "[data-md-component=container]", "[data-md-component=header-topic]", "[data-md-component=outdated]", "[data-md-component=logo]", "[data-md-component=skip]", ...ee("navigation.tabs.sticky") ? ["[data-md-component=tabs]"] : []]) {
                let p = fe(u),
                    l = fe(u, f);
                typeof p != "undefined" && typeof l != "undefined" && p.replaceWith(l)
            }
        }),
        e.pipe(He(1), m(() => Te("container")), S(f => Q("script", f)), Ur(f => {
            let u = C("script");
            if (f.src) {
                for (let p of f.getAttributeNames())
                    u.setAttribute(p, f.getAttribute(p));
                return f.replaceWith(u), new P(p => {
                    u.onload = () => p.complete()
                })
            } else
                return u.textContent = f.textContent, f.replaceWith(u), V
        })).subscribe(),
        A(i, a).pipe(pt(e)).subscribe(({url: f, offset: u}) => {
            f.hash && !u ? $o(f.hash) : window.scrollTo(0, (u == null ? void 0 : u.y) || 0)
        }),
        r.pipe(Tt(i), Re(250), X("offset")).subscribe(({offset: f}) => {
            history.replaceState(f, "")
        }),
        A(i, a).pipe(Ce(2, 1), y(([f, u]) => f.url.pathname === u.url.pathname), m(([, f]) => f)).subscribe(({offset: f}) => {
            window.scrollTo(0, (f == null ? void 0 : f.y) || 0)
        })
    }
    function Oi(e, t=r => r) {
        return e.split(/"([^"]+)"/g).map((r, n) => n & 1 ? r.replace(/^\b|^(?![^\x00-\x7F]|$)|\s+/g, " +") : r).join("").replace(/"|(?:^|\s+)[*+\-:^~]+(?=\s+|$)/g, "").split(/\s+/g).flatMap(t).map(r => /^[+-]/.test(r) ? r : `${r}*`).join(" ").trim()
    }
    var Mi = tt(_i());
    function Li(e) {
        let t = e.separator.split("|").map(o => o.replace(/(\(\?[!=][^)]+\))/g, "").length === 0 ? "\uFFFD" : o).join("|"),
            r = new RegExp(t, "img"),
            n = (o, i, a) => `${i}<mark data-md-highlight>${a}</mark>`;
        return o => {
            o = o.replace(/[\s*+\-:~^]+/g, " ").trim();
            let i = new RegExp(`(^|${e.separator}|\\b)(${o.replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&").replace(r, "|")})`, "img");
            return a => (0, Mi.default)(a).replace(i, n).replace(/<\/mark>(\s+)<mark[^>]*>/img, "$1")
        }
    }
    function ht(e) {
        return e.type === 1
    }
    function Ai(e) {
        return e.type === 2
    }
    function bt(e) {
        return e.type === 3
    }
    function Rs({config: e, docs: t}) {
        e.lang.length === 1 && e.lang[0] === "en" && (e.lang = [ne("search.config.lang")]),
        e.separator === "[\\s\\-]+" && (e.separator = ne("search.config.separator"));
        let n = {
            pipeline: ne("search.config.pipeline").split(/\s*,\s*/).filter(Boolean),
            suggestions: ee("search.suggest")
        };
        return {
            config: e,
            docs: t,
            options: n
        }
    }
    function Ci(e, t) {
        let r = he(),
            n = new Worker(e),
            o = new E,
            i = qo(n, {
                tx$: o
            }).pipe(m(a => {
                if (bt(a))
                    for (let c of a.data.items)
                        for (let s of c)
                            s.location = `${new URL(s.location, r.base)}`;
                return a
            }), se());
        return ce(t).pipe(m(a => ({
            type: 0,
            data: Rs(a)
        }))).subscribe(o.next.bind(o)), {
            tx$: o,
            rx$: i
        }
    }
    function Ri({document$: e}) {
        let t = he(),
            r = $e(new URL("../versions.json", t.base)),
            n = r.pipe(m(o => {
                let [, i] = t.base.match(/([^/]+)\/?$/);
                return o.find(({version: a, aliases: c}) => a === i || c.includes(i)) || o[0]
            }));
        G([r, n]).pipe(m(([o, i]) => new Map(o.filter(a => a !== i).map(a => [`${new URL(`../${a.version}/`, t.base)}`, a]))), S(o => v(document.body, "click").pipe(y(i => !i.metaKey && !i.ctrlKey), S(i => {
            if (i.target instanceof Element) {
                let a = i.target.closest("a");
                if (a && !a.target && o.has(a.href))
                    return i.preventDefault(), I(a.href)
            }
            return V
        }), S(i => {
            let {version: a} = o.get(i);
            return vr(new URL(i)).pipe(m(c => {
                let f = Oe().href.replace(t.base, "");
                return c.includes(f) ? new URL(`../${a}/${f}`, t.base) : new URL(i)
            }))
        })))).subscribe(o => pr(o)),
        G([r, n]).subscribe(([o, i]) => {
            q(".md-header__topic").appendChild(ti(o, i))
        }),
        e.pipe(Xe(n)).subscribe(o => {
            var a;
            let i = __md_get("__outdated", sessionStorage);
            if (i === null) {
                let c = ((a = t.version) == null ? void 0 : a.default) || "latest";
                i = !o.aliases.includes(c),
                __md_set("__outdated", i, sessionStorage)
            }
            if (i)
                for (let c of ie("outdated"))
                    c.hidden = !1
        })
    }
    function ks(e, {rx$: t}, {index$: r}) {
        let n = (__search == null ? void 0 : __search.transform) || Oi,
            {searchParams: o} = Oe();
        o.has("q") && Qe("search", !0);
        let i = t.pipe(y(ht), te(1), m(() => o.get("q") || ""));
        mt("search").pipe(y(s => !s), te(1)).subscribe(() => {
            let s = new URL(location.href);
            s.searchParams.delete("q"),
            history.replaceState({}, "", `${s}`)
        }),
        i.subscribe(s => {
            s && (e.value = s)
        });
        let a = nr(e),
            c = A(v(e, "keyup"), v(e, "focus").pipe(ke(1)), i).pipe(Xe(r), m(({config: s}) => n(e.value, f => {
                let u = [];
                return Yr(f, s.separator, p => {
                    u.push(f.slice(...p))
                }), u
            })), B());
        return G([c, a]).pipe(m(([s, f]) => ({
            value: s,
            focus: f
        })), Z(1))
    }
    function ki(e, {tx$: t, rx$: r}, n) {
        let o = new E;
        return o.pipe(X("value"), m(({value: i}) => ({
            type: 2,
            data: i
        }))).subscribe(t.next.bind(t)), o.pipe(X("focus")).subscribe(({focus: i}) => {
            i ? (Qe("search", i), e.placeholder = "") : e.placeholder = ne("search.placeholder")
        }), v(e.form, "reset").pipe(re(o.pipe(ae(1)))).subscribe(() => e.focus()), ks(e, {
            tx$: t,
            rx$: r
        }, n).pipe(w(i => o.next(i)), M(() => o.complete()), m(i => H({
            ref: e
        }, i)), se())
    }
    function Hi(e, {rx$: t}, {query$: r}) {
        let n = new E,
            o = Co(e.parentElement).pipe(y(Boolean)),
            i = q(":scope > :first-child", e),
            a = q(":scope > :last-child", e),
            c = t.pipe(y(ht), te(1));
        return n.pipe(me(r), Tt(c)).subscribe(([{items: f}, {value: u}]) => {
            if (u)
                switch (f.length) {
                case 0:
                    i.textContent = ne("search.result.none");
                    break;
                case 1:
                    i.textContent = ne("search.result.one");
                    break;
                default:
                    i.textContent = ne("search.result.other", lr(f.length))
                }
            else
                i.textContent = ne("search.result.placeholder")
        }), n.pipe(w(() => a.innerHTML = ""), S(({items: f}) => A(I(...f.slice(0, 10)), I(...f.slice(10)).pipe(Ce(4), Kr(o), S(([u]) => u)))), m(f => {
            let u = Xo(f);
            return a.appendChild(u), fe("details", u)
        })).subscribe(f => {
            f && f.addEventListener("toggle", () => {
                !f.open && f.offsetTop <= e.parentElement.scrollTop && (e.parentElement.scrollTop = f.offsetTop)
            })
        }), t.pipe(y(bt), m(({data: f}) => f)).pipe(w(f => n.next(f)), M(() => n.complete()), m(f => H({
            ref: e
        }, f)))
    }
    function Hs(e, {query$: t}) {
        return t.pipe(m(({value: r}) => {
            let n = Oe();
            return n.hash = "", n.searchParams.delete("h"), n.searchParams.set("q", r), {
                url: n
            }
        }))
    }
    function Pi(e, t) {
        let r = new E;
        return r.subscribe(({url: n}) => {
            e.setAttribute("data-clipboard-text", e.href),
            e.href = `${n}`
        }), v(e, "click").subscribe(n => n.preventDefault()), Hs(e, t).pipe(w(n => r.next(n)), M(() => r.complete()), m(n => H({
            ref: e
        }, n)))
    }
    function Ii(e, {rx$: t}, {keyboard$: r}) {
        let n = new E,
            o = Te("search-query"),
            i = A(v(o, "keydown"), v(o, "focus")).pipe(Fe(we), m(() => o.value), B());
        return n.pipe(qe(i), m(([{suggestions: c}, s]) => {
            let f = s.split(/([\s-]+)/);
            if ((c == null ? void 0 : c.length) && f[f.length - 1]) {
                let u = c[c.length - 1];
                u.startsWith(f[f.length - 1]) && (f[f.length - 1] = u)
            } else
                f.length = 0;
            return f
        })).subscribe(c => e.innerHTML = c.join("").replace(/\s/g, "&nbsp;")), r.pipe(y(({mode: c}) => c === "search")).subscribe(c => {
            switch (c.type) {
            case "ArrowRight":
                e.innerText.length && o.selectionStart === o.value.length && (o.value = e.innerText);
                break
            }
        }), t.pipe(y(bt), m(({data: c}) => c)).pipe(w(c => n.next(c)), M(() => n.complete()), m(() => ({
            ref: e
        })))
    }
    function $i(e, {index$: t, keyboard$: r}) {
        let n = he();
        try {
            let o = (__search == null ? void 0 : __search.worker) || n.search,
                i = Ci(o, t),
                a = Te("search-query", e),
                c = Te("search-result", e),
                {tx$: s, rx$: f} = i;
            s.pipe(y(Ai), pt(f.pipe(y(ht))), te(1)).subscribe(s.next.bind(s)),
            r.pipe(y(({mode: l}) => l === "search")).subscribe(l => {
                let d = Ie();
                switch (l.type) {
                case "Enter":
                    if (d === a) {
                        let h = new Map;
                        for (let b of Q(":first-child [href]", c)) {
                            let F = b.firstElementChild;
                            h.set(b, parseFloat(F.getAttribute("data-md-score")))
                        }
                        if (h.size) {
                            let [[b]] = [...h].sort(([, F], [, Y]) => Y - F);
                            b.click()
                        }
                        l.claim()
                    }
                    break;
                case "Escape":
                case "Tab":
                    Qe("search", !1),
                    a.blur();
                    break;
                case "ArrowUp":
                case "ArrowDown":
                    if (typeof d == "undefined")
                        a.focus();
                    else {
                        let h = [a, ...Q(":not(details) > [href], summary, details[open] [href]", c)],
                            b = Math.max(0, (Math.max(0, h.indexOf(d)) + h.length + (l.type === "ArrowUp" ? -1 : 1)) % h.length);
                        h[b].focus()
                    }
                    l.claim();
                    break;
                default:
                    a !== Ie() && a.focus()
                }
            }),
            r.pipe(y(({mode: l}) => l === "global")).subscribe(l => {
                switch (l.type) {
                case "f":
                case "s":
                case "/":
                    a.focus(),
                    a.select(),
                    l.claim();
                    break
                }
            });
            let u = ki(a, i, {
                    index$: t
                }),
                p = Hi(c, i, {
                    query$: u
                });
            return A(u, p).pipe(Je(...ie("search-share", e).map(l => Pi(l, {
                query$: u
            })), ...ie("search-suggest", e).map(l => Ii(l, i, {
                keyboard$: r
            }))))
        } catch (o) {
            return e.hidden = !0, Se
        }
    }
    function ji(e, {index$: t, location$: r}) {
        return G([t, r.pipe(K(Oe()), y(n => !!n.searchParams.get("h")))]).pipe(m(([n, o]) => Li(n.config)(o.searchParams.get("h"))), m(n => {
            var a;
            let o = new Map,
                i = document.createNodeIterator(e, NodeFilter.SHOW_TEXT);
            for (let c = i.nextNode(); c; c = i.nextNode())
                if ((a = c.parentElement) != null && a.offsetHeight) {
                    let s = c.textContent,
                        f = n(s);
                    f.length > s.length && o.set(c, f)
                }
            for (let [c, s] of o) {
                let {childNodes: f} = C("span", null, s);
                c.replaceWith(...Array.from(f))
            }
            return {
                ref: e,
                nodes: o
            }
        }))
    }
    function Ps(e, {viewport$: t, main$: r}) {
        let n = e.parentElement,
            o = n.offsetTop - n.parentElement.offsetTop;
        return G([r, t]).pipe(m(([{offset: i, height: a}, {offset: {y: c}}]) => (a = a + Math.min(o, Math.max(0, c - i)) - o, {
            height: a,
            locked: c >= i + o
        })), B((i, a) => i.height === a.height && i.locked === a.locked))
    }
    function rn(e, n) {
        var o = n,
            {header$: t} = o,
            r = un(o, ["header$"]);
        let i = q(".md-sidebar__scrollwrap", e),
            {y: a} = Ke(i);
        return R(() => {
            let c = new E;
            return c.pipe(Ae(0, ye), me(t)).subscribe({
                next([{height: s}, {height: f}]) {
                    i.style.height = `${s - 2 * a}px`,
                    e.style.top = `${f}px`
                },
                complete() {
                    i.style.height = "",
                    e.style.top = ""
                }
            }), c.pipe(Fe(ye), te(1)).subscribe(() => {
                for (let s of Q(".md-nav__link--active[href]", e)) {
                    let f = fr(s);
                    if (typeof f != "undefined") {
                        let u = s.offsetTop - f.offsetTop,
                            {height: p} = de(f);
                        f.scrollTo({
                            top: u - p / 2
                        })
                    }
                }
            }), Ps(e, r).pipe(w(s => c.next(s)), M(() => c.complete()), m(s => H({
                ref: e
            }, s)))
        })
    }
    function Fi(e, t) {
        if (typeof t != "undefined") {
            let r = `https://api.github.com/repos/${e}/${t}`;
            return St($e(`${r}/releases/latest`).pipe(m(n => ({
                version: n.tag_name
            })), Ue({})), $e(r).pipe(m(n => ({
                stars: n.stargazers_count,
                forks: n.forks_count
            })), Ue({}))).pipe(m(([n, o]) => H(H({}, n), o)))
        } else {
            let r = `https://api.github.com/users/${e}`;
            return $e(r).pipe(m(n => ({
                repositories: n.public_repos
            })), Ue({}))
        }
    }
    function Ui(e, t) {
        let r = `https://${e}/api/v4/projects/${encodeURIComponent(t)}`;
        return $e(r).pipe(m(({star_count: n, forks_count: o}) => ({
            stars: n,
            forks: o
        })), Ue({}))
    }
    function Wi(e) {
        let [t] = e.match(/(git(?:hub|lab))/i) || [];
        switch (t.toLowerCase()) {
        case "github":
            let [, r, n] = e.match(/^.+github\.com\/([^/]+)\/?([^/]+)?/i);
            return Fi(r, n);
        case "gitlab":
            let [, o, i] = e.match(/^.+?([^/]*gitlab[^/]+)\/(.+?)\/?$/i);
            return Ui(o, i);
        default:
            return V
        }
    }
    var Is;
    function $s(e) {
        return Is || (Is = R(() => {
                let t = __md_get("__source", sessionStorage);
                return t ? I(t) : Wi(e.href).pipe(w(r => __md_set("__source", r, sessionStorage)))
            }).pipe(ze(() => V), y(t => Object.keys(t).length > 0), m(t => ({
                facts: t
            })), Z(1)))
    }
    function Di(e) {
        let t = q(":scope > :last-child", e);
        return R(() => {
            let r = new E;
            return r.subscribe(({facts: n}) => {
                t.appendChild(Zo(n)),
                t.classList.add("md-source__repository--active")
            }), $s(e).pipe(w(n => r.next(n)), M(() => r.complete()), m(n => H({
                ref: e
            }, n)))
        })
    }
    function js(e, {viewport$: t, header$: r}) {
        return xe(document.body).pipe(S(() => hr(e, {
            header$: r,
            viewport$: t
        })), m(({offset: {y: n}}) => ({
            hidden: n >= 10
        })), X("hidden"))
    }
    function Vi(e, t) {
        return R(() => {
            let r = new E;
            return r.subscribe({
                next({hidden: n}) {
                    e.classList.toggle("md-tabs--hidden", n)
                },
                complete() {
                    e.classList.remove("md-tabs--hidden")
                }
            }), (ee("navigation.tabs.sticky") ? I({
                hidden: !1
            }) : js(e, t)).pipe(w(n => r.next(n)), M(() => r.complete()), m(n => H({
                ref: e
            }, n)))
        })
    }
    function Fs(e, {viewport$: t, header$: r}) {
        let n = new Map,
            o = Q("[href^=\\#]", e);
        for (let c of o) {
            let s = decodeURIComponent(c.hash.substring(1)),
                f = fe(`[id="${s}"]`);
            typeof f != "undefined" && n.set(c, f)
        }
        let i = r.pipe(X("height"), m(({height: c}) => {
            let s = Te("main"),
                f = q(":scope > :first-child", s);
            return c + .8 * (f.offsetTop - s.offsetTop)
        }), se());
        return xe(document.body).pipe(X("height"), S(c => R(() => {
            let s = [];
            return I([...n].reduce((f, [u, p]) => {
                for (; s.length && n.get(s[s.length - 1]).tagName >= p.tagName;)
                    s.pop();
                let l = p.offsetTop;
                for (; !l && p.parentElement;)
                    p = p.parentElement,
                    l = p.offsetTop;
                return f.set([...s = [...s, u]].reverse(), l)
            }, new Map))
        }).pipe(m(s => new Map([...s].sort(([, f], [, u]) => f - u))), qe(i), S(([s, f]) => t.pipe(Dr(([u, p], {offset: {y: l}, size: d}) => {
            let h = l + d.height >= Math.floor(c.height);
            for (; p.length;) {
                let [, b] = p[0];
                if (b - f < l || h)
                    u = [...u, p.shift()];
                else
                    break
            }
            for (; u.length;) {
                let [, b] = u[u.length - 1];
                if (b - f >= l && !h)
                    p = [u.pop(), ...p];
                else
                    break
            }
            return [u, p]
        }, [[], [...s]]), B((u, p) => u[0] === p[0] && u[1] === p[1])))))).pipe(m(([c, s]) => ({
            prev: c.map(([f]) => f),
            next: s.map(([f]) => f)
        })), K({
            prev: [],
            next: []
        }), Ce(2, 1), m(([c, s]) => c.prev.length < s.prev.length ? {
            prev: s.prev.slice(Math.max(0, c.prev.length - 1), s.prev.length),
            next: []
        } : {
            prev: s.prev.slice(-1),
            next: s.next.slice(0, s.next.length - c.next.length)
        }))
    }
    function Ni(e, {viewport$: t, header$: r, target$: n}) {
        return R(() => {
            let o = new E;
            if (o.subscribe(({prev: i, next: a}) => {
                for (let [c] of a)
                    c.classList.remove("md-nav__link--passed"),
                    c.classList.remove("md-nav__link--active");
                for (let [c, [s]] of i.entries())
                    s.classList.add("md-nav__link--passed"),
                    s.classList.toggle("md-nav__link--active", c === i.length - 1)
            }), ee("toc.follow")) {
                let i = A(t.pipe(Re(1), J(void 0)), t.pipe(Re(250), J("smooth")));
                o.pipe(y(({prev: a}) => a.length > 0), me(i)).subscribe(([{prev: a}, c]) => {
                    let [s] = a[a.length - 1];
                    if (s.offsetHeight) {
                        let f = fr(s);
                        if (typeof f != "undefined") {
                            let u = s.offsetTop - f.offsetTop,
                                {height: p} = de(f);
                            f.scrollTo({
                                top: u - p / 2,
                                behavior: c
                            })
                        }
                    }
                })
            }
            return ee("navigation.tracking") && t.pipe(re(o.pipe(ae(1))), X("offset"), Re(250), He(1), re(n.pipe(He(1))), Ot({
                delay: 250
            }), me(o)).subscribe(([, {prev: i}]) => {
                let a = Oe(),
                    c = i[i.length - 1];
                if (c && c.length) {
                    let [s] = c,
                        {hash: f} = new URL(s.href);
                    a.hash !== f && (a.hash = f, history.replaceState({}, "", `${a}`))
                } else
                    a.hash = "",
                    history.replaceState({}, "", `${a}`)
            }), Fs(e, {
                viewport$: t,
                header$: r
            }).pipe(w(i => o.next(i)), M(() => o.complete()), m(i => H({
                ref: e
            }, i)))
        })
    }
    function Us(e, {viewport$: t, main$: r, target$: n}) {
        let o = t.pipe(m(({offset: {y: a}}) => a), Ce(2, 1), m(([a, c]) => a > c && c > 0), B()),
            i = r.pipe(m(({active: a}) => a));
        return G([i, o]).pipe(m(([a, c]) => !(a && c)), B(), re(n.pipe(He(1))), rr(!0), Ot({
            delay: 250
        }), m(a => ({
            hidden: a
        })))
    }
    function zi(e, {viewport$: t, header$: r, main$: n, target$: o}) {
        let i = new E;
        return i.subscribe({
            next({hidden: a}) {
                e.classList.toggle("md-top--hidden", a),
                a ? (e.setAttribute("tabindex", "-1"), e.blur()) : e.removeAttribute("tabindex")
            },
            complete() {
                e.style.top = "",
                e.classList.add("md-top--hidden"),
                e.removeAttribute("tabindex")
            }
        }), r.pipe(re(i.pipe(rr(0), ae(1))), X("height")).subscribe(({height: a}) => {
            e.style.top = `${a + 16}px`
        }), Us(e, {
            viewport$: t,
            main$: n,
            target$: o
        }).pipe(w(a => i.next(a)), M(() => i.complete()), m(a => H({
            ref: e
        }, a)))
    }
    function qi({document$: e, tablet$: t}) {
        e.pipe(S(() => Q(".md-toggle--indeterminate, [data-md-state=indeterminate]")), w(r => {
            r.indeterminate = !0,
            r.checked = !1
        }), ue(r => v(r, "change").pipe(Nr(() => r.classList.contains("md-toggle--indeterminate")), J(r))), me(t)).subscribe(([r, n]) => {
            r.classList.remove("md-toggle--indeterminate"),
            n && (r.checked = !1)
        })
    }
    function Ws() {
        return /(iPad|iPhone|iPod)/.test(navigator.userAgent)
    }
    function Ki({document$: e}) {
        e.pipe(S(() => Q("[data-md-scrollfix]")), w(t => t.removeAttribute("data-md-scrollfix")), y(Ws), ue(t => v(t, "touchstart").pipe(J(t)))).subscribe(t => {
            let r = t.scrollTop;
            r === 0 ? t.scrollTop = 1 : r + t.offsetHeight === t.scrollHeight && (t.scrollTop = r - 1)
        })
    }
    function Qi({viewport$: e, tablet$: t}) {
        G([mt("search"), t]).pipe(m(([r, n]) => r && !n), S(r => I(r).pipe(ke(r ? 400 : 100))), me(e)).subscribe(([r, {offset: {y: n}}]) => {
            if (r)
                document.body.setAttribute("data-md-scrolllock", ""),
                document.body.style.top = `-${n}px`;
            else {
                let o = -1 * parseInt(document.body.style.top, 10);
                document.body.removeAttribute("data-md-scrolllock"),
                document.body.style.top = "",
                o && window.scrollTo(0, o)
            }
        })
    }
    Object.entries || (Object.entries = function(e) {
        let t = [];
        for (let r of Object.keys(e))
            t.push([r, e[r]]);
        return t
    });
    Object.values || (Object.values = function(e) {
        let t = [];
        for (let r of Object.keys(e))
            t.push(e[r]);
        return t
    });
    typeof Element != "undefined" && (Element.prototype.scrollTo || (Element.prototype.scrollTo = function(e, t) {
        typeof e == "object" ? (this.scrollLeft = e.left, this.scrollTop = e.top) : (this.scrollLeft = e, this.scrollTop = t)
    }), Element.prototype.replaceWith || (Element.prototype.replaceWith = function(...e) {
        let t = this.parentNode;
        if (t) {
            e.length === 0 && t.removeChild(this);
            for (let r = e.length - 1; r >= 0; r--) {
                let n = e[r];
                typeof n != "object" ? n = document.createTextNode(n) : n.parentNode && n.parentNode.removeChild(n),
                r ? t.insertBefore(this.previousSibling, n) : t.replaceChild(n, this)
            }
        }
    }));
    function Ds() {
        return location.protocol === "file:" ? dr(`${new URL("search/search_index.js", nn.base)}`).pipe(m(() => __index), Z(1)) : $e(new URL("search/search_index.json", nn.base))
    }
    document.documentElement.classList.remove("no-js");
    document.documentElement.classList.add("js");
    var Ze = vo(),
        yr = Ho(),
        vt = jo(),
        on = ko(),
        _e = zo(),
        xr = Br("(min-width: 960px)"),
        Bi = Br("(min-width: 1220px)"),
        Gi = Fo(),
        nn = he(),
        Ji = document.forms.namedItem("search") ? Ds() : Se,
        an = new E;
    Ei({
        alert$: an
    });
    ee("navigation.instant") && Si({
        document$: Ze,
        location$: yr,
        viewport$: _e
    });
    var Yi;
    ((Yi = nn.version) == null ? void 0 : Yi.provider) === "mike" && Ri({
        document$: Ze
    });
    A(yr, vt).pipe(ke(125)).subscribe(() => {
        Qe("drawer", !1),
        Qe("search", !1)
    });
    on.pipe(y(({mode: e}) => e === "global")).subscribe(e => {
        switch (e.type) {
        case "p":
        case ",":
            let t = fe("[href][rel=prev]");
            typeof t != "undefined" && t.click();
            break;
        case "n":
        case ".":
            let r = fe("[href][rel=next]");
            typeof r != "undefined" && r.click();
            break
        }
    });
    qi({
        document$: Ze,
        tablet$: xr
    });
    Ki({
        document$: Ze
    });
    Qi({
        viewport$: _e,
        tablet$: xr
    });
    var Ye = vi(Te("header"), {
            viewport$: _e
        }),
        gr = Ze.pipe(m(() => Te("main")), S(e => xi(e, {
            viewport$: _e,
            header$: Ye
        })), Z(1)),
        Vs = A(...ie("consent").map(e => Qo(e, {
            target$: vt
        })), ...ie("dialog").map(e => bi(e, {
            alert$: an
        })), ...ie("header").map(e => gi(e, {
            viewport$: _e,
            header$: Ye,
            main$: gr
        })), ...ie("palette").map(e => wi(e)), ...ie("search").map(e => $i(e, {
            index$: Ji,
            keyboard$: on
        })), ...ie("source").map(e => Di(e))),
        Ns = R(() => A(...ie("announce").map(e => Ko(e)), ...ie("content").map(e => hi(e, {
            target$: vt,
            print$: Gi
        })), ...ie("content").map(e => ee("search.highlight") ? ji(e, {
            index$: Ji,
            location$: yr
        }) : V), ...ie("header-title").map(e => yi(e, {
            viewport$: _e,
            header$: Ye
        })), ...ie("sidebar").map(e => e.getAttribute("data-md-type") === "navigation" ? Gr(Bi, () => rn(e, {
            viewport$: _e,
            header$: Ye,
            main$: gr
        })) : Gr(xr, () => rn(e, {
            viewport$: _e,
            header$: Ye,
            main$: gr
        }))), ...ie("tabs").map(e => Vi(e, {
            viewport$: _e,
            header$: Ye
        })), ...ie("toc").map(e => Ni(e, {
            viewport$: _e,
            header$: Ye,
            target$: vt
        })), ...ie("top").map(e => zi(e, {
            viewport$: _e,
            header$: Ye,
            main$: gr,
            target$: vt
        })))),
        Xi = Ze.pipe(S(() => Ns), Je(Vs), Z(1));
    Xi.subscribe();
    window.document$ = Ze;
    window.location$ = yr;
    window.target$ = vt;
    window.keyboard$ = on;
    window.viewport$ = _e;
    window.tablet$ = xr;
    window.screen$ = Bi;
    window.print$ = Gi;
    window.alert$ = an;
    window.component$ = Xi;
})();


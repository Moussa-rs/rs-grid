var an = Object.defineProperty;
var ln = (t, e, i) => e in t ? an(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var d = (t, e, i) => (ln(t, typeof e != "symbol" ? e + "" : e, i), i);
import { openBlock as oe, createElementBlock as ae, normalizeClass as He, normalizeStyle as hi, renderSlot as fi, createCommentVNode as cn, resolveComponent as un, withDirectives as hn, createVNode as fn, vShow as dn } from "vue";
function pn(t) {
  return { all: t = t || /* @__PURE__ */ new Map(), on: function(e, i) {
    var n = t.get(e);
    n ? n.push(i) : t.set(e, [i]);
  }, off: function(e, i) {
    var n = t.get(e);
    n && (i ? n.splice(n.indexOf(i) >>> 0, 1) : t.set(e, []));
  }, emit: function(e, i) {
    var n = t.get(e);
    n && n.slice().map(function(s) {
      s(i);
    }), (n = t.get("*")) && n.slice().map(function(s) {
      s(e, i);
    });
  } };
}
const Gt = {}, Rt = pn();
Gt.$emit = (...t) => {
  Rt.emit(t[0], t.slice(1));
};
Gt.$on = function() {
  Reflect.apply(Rt.on, Rt, arguments);
};
Gt.$off = function() {
  Reflect.apply(Rt.off, Rt, arguments);
};
var jt = {}, gn = {
  get exports() {
    return jt;
  },
  set exports(t) {
    jt = t;
  }
}, mn = gn.exports = {};
mn.forEach = function(t, e) {
  for (var i = 0; i < t.length; i++) {
    var n = e(t[i]);
    if (n)
      return n;
  }
};
var yn = function(t) {
  var e = t.stateHandler.getState;
  function i(o) {
    var a = e(o);
    return a && !!a.isDetectable;
  }
  function n(o) {
    e(o).isDetectable = !0;
  }
  function s(o) {
    return !!e(o).busy;
  }
  function r(o, a) {
    e(o).busy = !!a;
  }
  return {
    isDetectable: i,
    markAsDetectable: n,
    isBusy: s,
    markBusy: r
  };
}, vn = function(t) {
  var e = {};
  function i(o) {
    var a = t.get(o);
    return a === void 0 ? [] : e[a] || [];
  }
  function n(o, a) {
    var c = t.get(o);
    e[c] || (e[c] = []), e[c].push(a);
  }
  function s(o, a) {
    for (var c = i(o), l = 0, u = c.length; l < u; ++l)
      if (c[l] === a) {
        c.splice(l, 1);
        break;
      }
  }
  function r(o) {
    var a = i(o);
    a && (a.length = 0);
  }
  return {
    get: i,
    add: n,
    removeListener: s,
    removeAllListeners: r
  };
}, bn = function() {
  var t = 1;
  function e() {
    return t++;
  }
  return {
    generate: e
  };
}, xn = function(t) {
  var e = t.idGenerator, i = t.stateHandler.getState;
  function n(r) {
    var o = i(r);
    return o && o.id !== void 0 ? o.id : null;
  }
  function s(r) {
    var o = i(r);
    if (!o)
      throw new Error("setId required the element to have a resize detection state.");
    var a = e.generate();
    return o.id = a, a;
  }
  return {
    get: n,
    set: s
  };
}, wn = function(t) {
  function e() {
  }
  var i = {
    log: e,
    warn: e,
    error: e
  };
  if (!t && window.console) {
    var n = function(s, r) {
      s[r] = function() {
        var a = console[r];
        if (a.apply)
          a.apply(console, arguments);
        else
          for (var c = 0; c < arguments.length; c++)
            a(arguments[c]);
      };
    };
    n(i, "log"), n(i, "warn"), n(i, "error");
  }
  return i;
}, Nt = {}, Sn = {
  get exports() {
    return Nt;
  },
  set exports(t) {
    Nt = t;
  }
}, di = Sn.exports = {};
di.isIE = function(t) {
  function e() {
    var n = navigator.userAgent.toLowerCase();
    return n.indexOf("msie") !== -1 || n.indexOf("trident") !== -1 || n.indexOf(" edge/") !== -1;
  }
  if (!e())
    return !1;
  if (!t)
    return !0;
  var i = function() {
    var n, s = 3, r = document.createElement("div"), o = r.getElementsByTagName("i");
    do
      r.innerHTML = "<!--[if gt IE " + ++s + "]><i></i><![endif]-->";
    while (o[0]);
    return s > 4 ? s : n;
  }();
  return t === i;
};
di.isLegacyOpera = function() {
  return !!window.opera;
};
var le = {}, En = {
  get exports() {
    return le;
  },
  set exports(t) {
    le = t;
  }
}, zn = En.exports = {};
zn.getOption = In;
function In(t, e, i) {
  var n = t[e];
  return n == null && i !== void 0 ? i : n;
}
var Ae = le, Mn = function(e) {
  e = e || {};
  var i = e.reporter, n = Ae.getOption(e, "async", !0), s = Ae.getOption(e, "auto", !0);
  s && !n && (i && i.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."), n = !0);
  var r = Be(), o, a = !1;
  function c(v, z) {
    !a && s && n && r.size() === 0 && f(), r.add(v, z);
  }
  function l() {
    for (a = !0; r.size(); ) {
      var v = r;
      r = Be(), v.process();
    }
    a = !1;
  }
  function u(v) {
    a || (v === void 0 && (v = n), o && (g(o), o = null), v ? f() : l());
  }
  function f() {
    o = y(l);
  }
  function g(v) {
    var z = clearTimeout;
    return z(v);
  }
  function y(v) {
    var z = function(M) {
      return setTimeout(M, 0);
    };
    return z(v);
  }
  return {
    add: c,
    force: u
  };
};
function Be() {
  var t = {}, e = 0, i = 0, n = 0;
  function s(a, c) {
    c || (c = a, a = 0), a > i ? i = a : a < n && (n = a), t[a] || (t[a] = []), t[a].push(c), e++;
  }
  function r() {
    for (var a = n; a <= i; a++)
      for (var c = t[a], l = 0; l < c.length; l++) {
        var u = c[l];
        u();
      }
  }
  function o() {
    return e;
  }
  return {
    add: s,
    process: r,
    size: o
  };
}
var xe = "_erd";
function Tn(t) {
  return t[xe] = {}, pi(t);
}
function pi(t) {
  return t[xe];
}
function Dn(t) {
  delete t[xe];
}
var Cn = {
  initState: Tn,
  getState: pi,
  cleanState: Dn
}, zt = Nt, Rn = function(t) {
  t = t || {};
  var e = t.reporter, i = t.batchProcessor, n = t.stateHandler.getState;
  if (!e)
    throw new Error("Missing required dependency: reporter.");
  function s(l, u) {
    function f() {
      u(l);
    }
    if (zt.isIE(8))
      n(l).object = {
        proxy: f
      }, l.attachEvent("onresize", f);
    else {
      var g = a(l);
      if (!g)
        throw new Error("Element is not detectable by this strategy.");
      g.contentDocument.defaultView.addEventListener("resize", f);
    }
  }
  function r(l) {
    var u = t.important ? " !important; " : "; ";
    return (l.join(u) + u).trim();
  }
  function o(l, u, f) {
    f || (f = u, u = l, l = null), l = l || {}, l.debug;
    function g(y, v) {
      var z = r(["display: block", "position: absolute", "top: 0", "left: 0", "width: 100%", "height: 100%", "border: none", "padding: 0", "margin: 0", "opacity: 0", "z-index: -1000", "pointer-events: none"]), M = !1, _ = window.getComputedStyle(y), S = y.offsetWidth, I = y.offsetHeight;
      n(y).startSize = {
        width: S,
        height: I
      };
      function m() {
        function h() {
          if (_.position === "static") {
            y.style.setProperty("position", "relative", l.important ? "important" : "");
            var $ = function(H, R, B, D) {
              function k(W) {
                return W.replace(/[^-\d\.]/g, "");
              }
              var N = B[D];
              N !== "auto" && k(N) !== "0" && (H.warn("An element that is positioned static has style." + D + "=" + N + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + D + " will be set to 0. Element: ", R), R.style.setProperty(D, "0", l.important ? "important" : ""));
            };
            $(e, y, _, "top"), $(e, y, _, "right"), $(e, y, _, "bottom"), $(e, y, _, "left");
          }
        }
        function T() {
          M || h();
          function $(R, B) {
            if (!R.contentDocument) {
              var D = n(R);
              D.checkForObjectDocumentTimeoutId && window.clearTimeout(D.checkForObjectDocumentTimeoutId), D.checkForObjectDocumentTimeoutId = setTimeout(function() {
                D.checkForObjectDocumentTimeoutId = 0, $(R, B);
              }, 100);
              return;
            }
            B(R.contentDocument);
          }
          var H = this;
          $(H, function(B) {
            v(y);
          });
        }
        _.position !== "" && (h(), M = !0);
        var b = document.createElement("object");
        b.style.cssText = z, b.tabIndex = -1, b.type = "text/html", b.setAttribute("aria-hidden", "true"), b.onload = T, zt.isIE() || (b.data = "about:blank"), n(y) && (y.appendChild(b), n(y).object = b, zt.isIE() && (b.data = "about:blank"));
      }
      i ? i.add(m) : m();
    }
    zt.isIE(8) ? f(u) : g(u, f);
  }
  function a(l) {
    return n(l).object;
  }
  function c(l) {
    if (n(l)) {
      var u = a(l);
      u && (zt.isIE(8) ? l.detachEvent("onresize", u.proxy) : l.removeChild(u), n(l).checkForObjectDocumentTimeoutId && window.clearTimeout(n(l).checkForObjectDocumentTimeoutId), delete n(l).object);
    }
  }
  return {
    makeDetectable: o,
    addListener: s,
    uninstall: c
  };
}, _n = jt.forEach, Pn = function(t) {
  t = t || {};
  var e = t.reporter, i = t.batchProcessor, n = t.stateHandler.getState;
  t.stateHandler.hasState;
  var s = t.idHandler;
  if (!i)
    throw new Error("Missing required dependency: batchProcessor");
  if (!e)
    throw new Error("Missing required dependency: reporter.");
  var r = u(), o = "erd_scroll_detection_scrollbar_style", a = "erd_scroll_detection_container";
  function c(m) {
    f(m, o, a);
  }
  c(window.document);
  function l(m) {
    var h = t.important ? " !important; " : "; ";
    return (m.join(h) + h).trim();
  }
  function u() {
    var m = 500, h = 500, T = document.createElement("div");
    T.style.cssText = l(["position: absolute", "width: " + m * 2 + "px", "height: " + h * 2 + "px", "visibility: hidden", "margin: 0", "padding: 0"]);
    var b = document.createElement("div");
    b.style.cssText = l(["position: absolute", "width: " + m + "px", "height: " + h + "px", "overflow: scroll", "visibility: none", "top: " + -m * 3 + "px", "left: " + -h * 3 + "px", "visibility: hidden", "margin: 0", "padding: 0"]), b.appendChild(T), document.body.insertBefore(b, document.body.firstChild);
    var $ = m - b.clientWidth, H = h - b.clientHeight;
    return document.body.removeChild(b), {
      width: $,
      height: H
    };
  }
  function f(m, h, T) {
    function b(B, D) {
      D = D || function(N) {
        m.head.appendChild(N);
      };
      var k = m.createElement("style");
      return k.innerHTML = B, k.id = h, D(k), k;
    }
    if (!m.getElementById(h)) {
      var $ = T + "_animation", H = T + "_animation_active", R = `/* Created by the element-resize-detector library. */
`;
      R += "." + T + " > div::-webkit-scrollbar { " + l(["display: none"]) + ` }

`, R += "." + H + " { " + l(["-webkit-animation-duration: 0.1s", "animation-duration: 0.1s", "-webkit-animation-name: " + $, "animation-name: " + $]) + ` }
`, R += "@-webkit-keyframes " + $ + ` { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }
`, R += "@keyframes " + $ + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }", b(R);
    }
  }
  function g(m) {
    m.className += " " + a + "_animation_active";
  }
  function y(m, h, T) {
    if (m.addEventListener)
      m.addEventListener(h, T);
    else if (m.attachEvent)
      m.attachEvent("on" + h, T);
    else
      return e.error("[scroll] Don't know how to add event listeners.");
  }
  function v(m, h, T) {
    if (m.removeEventListener)
      m.removeEventListener(h, T);
    else if (m.detachEvent)
      m.detachEvent("on" + h, T);
    else
      return e.error("[scroll] Don't know how to remove event listeners.");
  }
  function z(m) {
    return n(m).container.childNodes[0].childNodes[0].childNodes[0];
  }
  function M(m) {
    return n(m).container.childNodes[0].childNodes[0].childNodes[1];
  }
  function _(m, h) {
    var T = n(m).listeners;
    if (!T.push)
      throw new Error("Cannot add listener to an element that is not detectable.");
    n(m).listeners.push(h);
  }
  function S(m, h, T) {
    T || (T = h, h = m, m = null), m = m || {};
    function b() {
      if (m.debug) {
        var x = Array.prototype.slice.call(arguments);
        if (x.unshift(s.get(h), "Scroll: "), e.log.apply)
          e.log.apply(null, x);
        else
          for (var C = 0; C < x.length; C++)
            e.log(x[C]);
      }
    }
    function $(x) {
      function C(O) {
        var G = O.getRootNode && O.getRootNode().contains(O);
        return O === O.ownerDocument.body || O.ownerDocument.body.contains(O) || G;
      }
      return !C(x) || window.getComputedStyle(x) === null;
    }
    function H(x) {
      var C = n(x).container.childNodes[0], O = window.getComputedStyle(C);
      return !O.width || O.width.indexOf("px") === -1;
    }
    function R() {
      var x = window.getComputedStyle(h), C = {};
      return C.position = x.position, C.width = h.offsetWidth, C.height = h.offsetHeight, C.top = x.top, C.right = x.right, C.bottom = x.bottom, C.left = x.left, C.widthCSS = x.width, C.heightCSS = x.height, C;
    }
    function B() {
      var x = R();
      n(h).startSize = {
        width: x.width,
        height: x.height
      }, b("Element start size", n(h).startSize);
    }
    function D() {
      n(h).listeners = [];
    }
    function k() {
      if (b("storeStyle invoked."), !n(h)) {
        b("Aborting because element has been uninstalled");
        return;
      }
      var x = R();
      n(h).style = x;
    }
    function N(x, C, O) {
      n(x).lastWidth = C, n(x).lastHeight = O;
    }
    function W(x) {
      return z(x).childNodes[0];
    }
    function rt() {
      return 2 * r.width + 1;
    }
    function kt() {
      return 2 * r.height + 1;
    }
    function $t(x) {
      return x + 10 + rt();
    }
    function Ot(x) {
      return x + 10 + kt();
    }
    function Ji(x) {
      return x * 2 + rt();
    }
    function Zi(x) {
      return x * 2 + kt();
    }
    function Ce(x, C, O) {
      var G = z(x), ot = M(x), pt = $t(C), gt = Ot(O), j = Ji(C), P = Zi(O);
      G.scrollLeft = pt, G.scrollTop = gt, ot.scrollLeft = j, ot.scrollTop = P;
    }
    function Re() {
      var x = n(h).container;
      if (!x) {
        x = document.createElement("div"), x.className = a, x.style.cssText = l(["visibility: hidden", "display: inline", "width: 0px", "height: 0px", "z-index: -1", "overflow: hidden", "margin: 0", "padding: 0"]), n(h).container = x, g(x), h.appendChild(x);
        var C = function() {
          n(h).onRendered && n(h).onRendered();
        };
        y(x, "animationstart", C), n(h).onAnimationStart = C;
      }
      return x;
    }
    function Qi() {
      function x() {
        var A = n(h).style;
        if (A.position === "static") {
          h.style.setProperty("position", "relative", m.important ? "important" : "");
          var V = function(yt, lt, sn, At) {
            function rn(on) {
              return on.replace(/[^-\d\.]/g, "");
            }
            var Qt = sn[At];
            Qt !== "auto" && rn(Qt) !== "0" && (yt.warn("An element that is positioned static has style." + At + "=" + Qt + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + At + " will be set to 0. Element: ", lt), lt.style[At] = 0);
          };
          V(e, h, A, "top"), V(e, h, A, "right"), V(e, h, A, "bottom"), V(e, h, A, "left");
        }
      }
      function C(A, V, yt, lt) {
        return A = A ? A + "px" : "0", V = V ? V + "px" : "0", yt = yt ? yt + "px" : "0", lt = lt ? lt + "px" : "0", ["left: " + A, "top: " + V, "right: " + lt, "bottom: " + yt];
      }
      if (b("Injecting elements"), !n(h)) {
        b("Aborting because element has been uninstalled");
        return;
      }
      x();
      var O = n(h).container;
      O || (O = Re());
      var G = r.width, ot = r.height, pt = l(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%", "left: 0px", "top: 0px"]), gt = l(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden"].concat(C(-(1 + G), -(1 + ot), -ot, -G))), j = l(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]), P = l(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]), F = l(["position: absolute", "left: 0", "top: 0"]), at = l(["position: absolute", "width: 200%", "height: 200%"]), U = document.createElement("div"), K = document.createElement("div"), mt = document.createElement("div"), Pe = document.createElement("div"), Ht = document.createElement("div"), ke = document.createElement("div");
      U.dir = "ltr", U.style.cssText = pt, U.className = a, K.className = a, K.style.cssText = gt, mt.style.cssText = j, Pe.style.cssText = F, Ht.style.cssText = P, ke.style.cssText = at, mt.appendChild(Pe), Ht.appendChild(ke), K.appendChild(mt), K.appendChild(Ht), U.appendChild(K), O.appendChild(U);
      function $e() {
        var A = n(h);
        A && A.onExpand ? A.onExpand() : b("Aborting expand scroll handler: element has been uninstalled");
      }
      function Oe() {
        var A = n(h);
        A && A.onShrink ? A.onShrink() : b("Aborting shrink scroll handler: element has been uninstalled");
      }
      y(mt, "scroll", $e), y(Ht, "scroll", Oe), n(h).onExpandScroll = $e, n(h).onShrinkScroll = Oe;
    }
    function tn() {
      function x(j, P, F) {
        var at = W(j), U = $t(P), K = Ot(F);
        at.style.setProperty("width", U + "px", m.important ? "important" : ""), at.style.setProperty("height", K + "px", m.important ? "important" : "");
      }
      function C(j) {
        var P = h.offsetWidth, F = h.offsetHeight, at = P !== n(h).lastWidth || F !== n(h).lastHeight;
        b("Storing current size", P, F), N(h, P, F), i.add(0, function() {
          if (at) {
            if (!n(h)) {
              b("Aborting because element has been uninstalled");
              return;
            }
            if (!O()) {
              b("Aborting because element container has not been initialized");
              return;
            }
            if (m.debug) {
              var K = h.offsetWidth, mt = h.offsetHeight;
              (K !== P || mt !== F) && e.warn(s.get(h), "Scroll: Size changed before updating detector elements.");
            }
            x(h, P, F);
          }
        }), i.add(1, function() {
          if (!n(h)) {
            b("Aborting because element has been uninstalled");
            return;
          }
          if (!O()) {
            b("Aborting because element container has not been initialized");
            return;
          }
          Ce(h, P, F);
        }), at && j && i.add(2, function() {
          if (!n(h)) {
            b("Aborting because element has been uninstalled");
            return;
          }
          if (!O()) {
            b("Aborting because element container has not been initialized");
            return;
          }
          j();
        });
      }
      function O() {
        return !!n(h).container;
      }
      function G() {
        function j() {
          return n(h).lastNotifiedWidth === void 0;
        }
        b("notifyListenersIfNeeded invoked");
        var P = n(h);
        if (j() && P.lastWidth === P.startSize.width && P.lastHeight === P.startSize.height)
          return b("Not notifying: Size is the same as the start size, and there has been no notification yet.");
        if (P.lastWidth === P.lastNotifiedWidth && P.lastHeight === P.lastNotifiedHeight)
          return b("Not notifying: Size already notified");
        b("Current size not notified, notifying..."), P.lastNotifiedWidth = P.lastWidth, P.lastNotifiedHeight = P.lastHeight, _n(n(h).listeners, function(F) {
          F(h);
        });
      }
      function ot() {
        if (b("startanimation triggered."), H(h)) {
          b("Ignoring since element is still unrendered...");
          return;
        }
        b("Element rendered.");
        var j = z(h), P = M(h);
        (j.scrollLeft === 0 || j.scrollTop === 0 || P.scrollLeft === 0 || P.scrollTop === 0) && (b("Scrollbars out of sync. Updating detector elements..."), C(G));
      }
      function pt() {
        if (b("Scroll detected."), H(h)) {
          b("Scroll event fired while unrendered. Ignoring...");
          return;
        }
        C(G);
      }
      if (b("registerListenersAndPositionElements invoked."), !n(h)) {
        b("Aborting because element has been uninstalled");
        return;
      }
      n(h).onRendered = ot, n(h).onExpand = pt, n(h).onShrink = pt;
      var gt = n(h).style;
      x(h, gt.width, gt.height);
    }
    function en() {
      if (b("finalizeDomMutation invoked."), !n(h)) {
        b("Aborting because element has been uninstalled");
        return;
      }
      var x = n(h).style;
      N(h, x.width, x.height), Ce(h, x.width, x.height);
    }
    function nn() {
      T(h);
    }
    function _e() {
      b("Installing..."), D(), B(), i.add(0, k), i.add(1, Qi), i.add(2, tn), i.add(3, en), i.add(4, nn);
    }
    b("Making detectable..."), $(h) ? (b("Element is detached"), Re(), b("Waiting until element is attached..."), n(h).onRendered = function() {
      b("Element is now attached"), _e();
    }) : _e();
  }
  function I(m) {
    var h = n(m);
    h && (h.onExpandScroll && v(z(m), "scroll", h.onExpandScroll), h.onShrinkScroll && v(M(m), "scroll", h.onShrinkScroll), h.onAnimationStart && v(h.container, "animationstart", h.onAnimationStart), h.container && m.removeChild(h.container));
  }
  return {
    makeDetectable: S,
    addListener: _,
    uninstall: I,
    initDocument: c
  };
}, Tt = jt.forEach, kn = yn, $n = vn, On = bn, Hn = xn, An = wn, Le = Nt, Bn = Mn, tt = Cn, Ln = Rn, Wn = Pn;
function We(t) {
  return Array.isArray(t) || t.length !== void 0;
}
function je(t) {
  if (Array.isArray(t))
    return t;
  var e = [];
  return Tt(t, function(i) {
    e.push(i);
  }), e;
}
function Ne(t) {
  return t && t.nodeType === 1;
}
var jn = function(t) {
  t = t || {};
  var e;
  if (t.idHandler)
    e = {
      get: function(S) {
        return t.idHandler.get(S, !0);
      },
      set: t.idHandler.set
    };
  else {
    var i = On(), n = Hn({
      idGenerator: i,
      stateHandler: tt
    });
    e = n;
  }
  var s = t.reporter;
  if (!s) {
    var r = s === !1;
    s = An(r);
  }
  var o = et(t, "batchProcessor", Bn({ reporter: s })), a = {};
  a.callOnAdd = !!et(t, "callOnAdd", !0), a.debug = !!et(t, "debug", !1);
  var c = $n(e), l = kn({
    stateHandler: tt
  }), u, f = et(t, "strategy", "object"), g = et(t, "important", !1), y = {
    reporter: s,
    batchProcessor: o,
    stateHandler: tt,
    idHandler: e,
    important: g
  };
  if (f === "scroll" && (Le.isLegacyOpera() ? (s.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."), f = "object") : Le.isIE(9) && (s.warn("Scroll strategy is not supported on IE9. Changing to object strategy."), f = "object")), f === "scroll")
    u = Wn(y);
  else if (f === "object")
    u = Ln(y);
  else
    throw new Error("Invalid strategy name: " + f);
  var v = {};
  function z(S, I, m) {
    function h(B) {
      var D = c.get(B);
      Tt(D, function(N) {
        N(B);
      });
    }
    function T(B, D, k) {
      c.add(D, k), B && k(D);
    }
    if (m || (m = I, I = S, S = {}), !I)
      throw new Error("At least one element required.");
    if (!m)
      throw new Error("Listener required.");
    if (Ne(I))
      I = [I];
    else if (We(I))
      I = je(I);
    else
      return s.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
    var b = 0, $ = et(S, "callOnAdd", a.callOnAdd), H = et(S, "onReady", function() {
    }), R = et(S, "debug", a.debug);
    Tt(I, function(D) {
      tt.getState(D) || (tt.initState(D), e.set(D));
      var k = e.get(D);
      if (R && s.log("Attaching listener to element", k, D), !l.isDetectable(D)) {
        if (R && s.log(k, "Not detectable."), l.isBusy(D)) {
          R && s.log(k, "System busy making it detectable"), T($, D, m), v[k] = v[k] || [], v[k].push(function() {
            b++, b === I.length && H();
          });
          return;
        }
        return R && s.log(k, "Making detectable..."), l.markBusy(D, !0), u.makeDetectable({ debug: R, important: g }, D, function(W) {
          if (R && s.log(k, "onElementDetectable"), tt.getState(W)) {
            l.markAsDetectable(W), l.markBusy(W, !1), u.addListener(W, h), T($, W, m);
            var rt = tt.getState(W);
            if (rt && rt.startSize) {
              var kt = W.offsetWidth, $t = W.offsetHeight;
              (rt.startSize.width !== kt || rt.startSize.height !== $t) && h(W);
            }
            v[k] && Tt(v[k], function(Ot) {
              Ot();
            });
          } else
            R && s.log(k, "Element uninstalled before being detectable.");
          delete v[k], b++, b === I.length && H();
        });
      }
      R && s.log(k, "Already detecable, adding listener."), T($, D, m), b++;
    }), b === I.length && H();
  }
  function M(S) {
    if (!S)
      return s.error("At least one element is required.");
    if (Ne(S))
      S = [S];
    else if (We(S))
      S = je(S);
    else
      return s.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
    Tt(S, function(I) {
      c.removeAllListeners(I), u.uninstall(I), tt.cleanState(I);
    });
  }
  function _(S) {
    u.initDocument && u.initDocument(S);
  }
  return {
    listenTo: z,
    removeListener: c.removeListener,
    removeAllListeners: c.removeAllListeners,
    uninstall: M,
    initDocument: _
  };
};
function et(t, e, i) {
  var n = t[e];
  return n == null && i !== void 0 ? i : n;
}
function Nn(t) {
  let e = 0, i;
  for (let n = 0, s = t.length; n < s; n++)
    i = t[n].y + t[n].h, i > e && (e = i);
  return e;
}
function ce(t) {
  const e = Array(t.length);
  for (let i = 0, n = t.length; i < n; i++)
    e[i] = Fn(t[i]);
  return e;
}
function Fn(t) {
  return JSON.parse(JSON.stringify(t));
}
function gi(t, e) {
  return !(t === e || t.x + t.w <= e.x || t.x >= e.x + e.w || t.y + t.h <= e.y || t.y >= e.y + e.h);
}
function bt(t, e, i) {
  const n = yi(t), s = vi(t), r = Array(t.length);
  for (let o = 0, a = s.length; o < a; o++) {
    let c = s[o];
    c.static || (c = Xn(n, c, e, i), n.push(c)), r[t.indexOf(c)] = c, c.moved = !1;
  }
  return r;
}
function Xn(t, e, i, n) {
  if (i)
    for (; e.y > 0 && !Dt(t, e); )
      e.y--;
  else if (n) {
    const r = n[e.i].y;
    for (; e.y > r && !Dt(t, e); )
      e.y--;
  }
  let s;
  for (; s = Dt(t, e); )
    e.y = s.y + s.h;
  return e;
}
function Yn(t, e) {
  const i = yi(t);
  for (let n = 0, s = t.length; n < s; n++) {
    const r = t[n];
    if (r.x + r.w > e.cols && (r.x = e.cols - r.w), r.x < 0 && (r.x = 0, r.w = e.cols), !r.static)
      i.push(r);
    else
      for (; Dt(i, r); )
        r.y++;
  }
  return t;
}
function Fe(t, e) {
  for (let i = 0, n = t.length; i < n; i++)
    if (t[i].i === e)
      return t[i];
}
function Dt(t, e) {
  for (let i = 0, n = t.length; i < n; i++)
    if (gi(t[i], e))
      return t[i];
}
function mi(t, e) {
  return t.filter((i) => gi(i, e));
}
function yi(t) {
  return t.filter((e) => e.static);
}
function ue(t, e, i, n, s, r) {
  if (e.static)
    return t;
  const o = e.x, a = e.y, c = n && e.y > n;
  typeof i == "number" && (e.x = i), typeof n == "number" && (e.y = n), e.moved = !0;
  let l = vi(t);
  c && (l = l.reverse());
  const u = mi(l, e);
  if (r && u.length)
    return e.x = o, e.y = a, e.moved = !1, t;
  for (let f = 0, g = u.length; f < g; f++) {
    const y = u[f];
    y.moved || e.y > y.y && e.y - y.y > y.h / 4 || (y.static ? t = Xe(t, y, e, s) : t = Xe(t, e, y, s));
  }
  return t;
}
function Xe(t, e, i, n) {
  if (n) {
    const r = {
      x: i.x,
      y: i.y,
      w: i.w,
      h: i.h,
      i: "-1"
    };
    if (r.y = Math.max(e.y - i.h, 0), !Dt(t, r))
      return ue(t, i, void 0, r.y, !1);
  }
  return ue(t, i, void 0, i.y + 1, !1);
}
function qn(t, e, i, n) {
  const s = "translate3d(" + e + "px," + t + "px, 0)";
  return {
    transform: s,
    WebkitTransform: s,
    MozTransform: s,
    msTransform: s,
    OTransform: s,
    width: i + "px",
    height: n + "px",
    position: "absolute"
  };
}
function Gn(t, e, i, n) {
  const s = "translate3d(" + e * -1 + "px," + t + "px, 0)";
  return {
    transform: s,
    WebkitTransform: s,
    MozTransform: s,
    msTransform: s,
    OTransform: s,
    width: i + "px",
    height: n + "px",
    position: "absolute"
  };
}
function Un(t, e, i, n) {
  return {
    top: t + "px",
    left: e + "px",
    width: i + "px",
    height: n + "px",
    position: "absolute"
  };
}
function Kn(t, e, i, n) {
  return {
    top: t + "px",
    right: e + "px",
    width: i + "px",
    height: n + "px",
    position: "absolute"
  };
}
function vi(t) {
  return [].concat(t).sort(function(e, i) {
    return e.y === i.y && e.x === i.x ? 0 : e.y > i.y || e.y === i.y && e.x > i.x ? 1 : -1;
  });
}
function Vn(t, e) {
  e = e || "Layout";
  const i = ["x", "y", "w", "h"], n = [];
  if (!Array.isArray(t))
    throw new Error(e + " must be an array!");
  for (let s = 0, r = t.length; s < r; s++) {
    const o = t[s];
    for (let a = 0; a < i.length; a++)
      if (typeof o[i[a]] != "number")
        throw new Error(
          "GridLayout: " + e + "[" + s + "]." + i[a] + " must be a number!"
        );
    if (o.i === void 0 || o.i === null)
      throw new Error("GridLayout: " + e + "[" + s + "].i cannot be null!");
    if (typeof o.i != "number" && typeof o.i != "string")
      throw new Error("GridLayout: " + e + "[" + s + "].i must be a string or number!");
    if (n.indexOf(o.i) >= 0)
      throw new Error("GridLayout: " + e + "[" + s + "].i must be unique!");
    if (n.push(o.i), o.static !== void 0 && typeof o.static != "boolean")
      throw new Error("GridLayout: " + e + "[" + s + "].static must be a boolean!");
  }
}
function Jn(t, e) {
  const i = bi(t);
  let n = i[0];
  for (let s = 1, r = i.length; s < r; s++) {
    const o = i[s];
    e > t[o] && (n = o);
  }
  return n;
}
function he(t, e) {
  if (!e[t])
    throw new Error(
      "ResponsiveGridLayout: `cols` entry for breakpoint " + t + " is missing!"
    );
  return e[t];
}
function Zn(t, e, i, n, s, r, o) {
  if (e[n])
    return ce(e[n]);
  let a = t;
  const c = bi(i), l = c.slice(c.indexOf(n));
  for (let u = 0, f = l.length; u < f; u++) {
    const g = l[u];
    if (e[g]) {
      a = e[g];
      break;
    }
  }
  return a = ce(a || []), bt(Yn(a, { cols: r }), o);
}
function bi(t) {
  return Object.keys(t).sort(function(i, n) {
    return t[i] - t[n];
  });
}
function Ye(t) {
  return Qn(t);
}
function Qn(t) {
  const e = t.target.offsetParent || document.body, i = t.offsetParent === document.body ? { left: 0, top: 0 } : e.getBoundingClientRect(), n = t.clientX + e.scrollLeft - i.left, s = t.clientY + e.scrollTop - i.top;
  return { x: n, y: s };
}
function qe(t, e, i, n) {
  return ts(t) ? {
    deltaX: i - t,
    deltaY: n - e,
    lastX: t,
    lastY: e,
    x: i,
    y: n
  } : {
    deltaX: 0,
    deltaY: 0,
    lastX: i,
    lastY: n,
    x: i,
    y: n
  };
}
function ts(t) {
  return typeof t == "number" && !isNaN(t);
}
let es = "auto";
function is() {
  return typeof document < "u";
}
function xi() {
  return typeof window < "u";
}
function Ge() {
  return is() ? typeof document.dir < "u" ? document.dir : document.getElementsByTagName("html")[0].getAttribute("dir") : es;
}
function ns(t, e) {
  if (!xi) {
    e();
    return;
  }
  window.addEventListener(t, e);
}
function ss(t, e) {
  xi && window.removeEventListener(t, e);
}
const X = {
  init: rs,
  document: null,
  DocumentFragment: null,
  SVGElement: null,
  SVGSVGElement: null,
  SVGElementInstance: null,
  Element: null,
  HTMLElement: null,
  Event: null,
  Touch: null,
  PointerEvent: null
};
function vt() {
}
const L = X;
function rs(t) {
  const e = t;
  X.document = e.document, X.DocumentFragment = e.DocumentFragment || vt, X.SVGElement = e.SVGElement || vt, X.SVGSVGElement = e.SVGSVGElement || vt, X.SVGElementInstance = e.SVGElementInstance || vt, X.Element = e.Element || vt, X.HTMLElement = e.HTMLElement || X.Element, X.Event = e.Event, X.Touch = e.Touch || vt, X.PointerEvent = e.PointerEvent || e.MSPointerEvent;
}
const wi = (t) => !!(t && t.Window) && t instanceof t.Window;
let Si, it;
function Ei(t) {
  Si = t;
  const e = t.document.createTextNode("");
  e.ownerDocument !== t.document && typeof t.wrap == "function" && t.wrap(e) === e && (t = t.wrap(t)), it = t;
}
typeof window < "u" && window && Ei(window);
function ht(t) {
  return wi(t) ? t : (t.ownerDocument || t).defaultView || it.window;
}
const os = (t) => t === it || wi(t), as = (t) => Ut(t) && t.nodeType === 11, Ut = (t) => !!t && typeof t == "object", zi = (t) => typeof t == "function", ls = (t) => typeof t == "number", cs = (t) => typeof t == "boolean", us = (t) => typeof t == "string", hs = (t) => {
  if (!t || typeof t != "object")
    return !1;
  const e = ht(t) || it;
  return /object|function/.test(typeof Element) ? t instanceof Element || t instanceof e.Element : t.nodeType === 1 && typeof t.nodeName == "string";
}, fs = (t) => Ut(t) && !!t.constructor && /function Object\b/.test(t.constructor.toString()), ds = (t) => Ut(t) && typeof t.length < "u" && zi(t.splice), p = {
  window: os,
  docFrag: as,
  object: Ut,
  func: zi,
  number: ls,
  bool: cs,
  string: us,
  element: hs,
  plainObject: fs,
  array: ds
}, Y = {
  init: ps,
  supportsTouch: null,
  supportsPointerEvent: null,
  isIOS7: null,
  isIOS: null,
  isIe9: null,
  isOperaMobile: null,
  prefixedMatchesSelector: null,
  pEventTypes: null,
  wheelEvent: null
};
function ps(t) {
  const e = L.Element, i = t.navigator || {};
  Y.supportsTouch = "ontouchstart" in t || p.func(t.DocumentTouch) && L.document instanceof t.DocumentTouch, Y.supportsPointerEvent = i.pointerEnabled !== !1 && !!L.PointerEvent, Y.isIOS = /iP(hone|od|ad)/.test(i.platform), Y.isIOS7 = /iP(hone|od|ad)/.test(i.platform) && /OS 7[^\d]/.test(i.appVersion), Y.isIe9 = /MSIE 9/.test(i.userAgent), Y.isOperaMobile = i.appName === "Opera" && Y.supportsTouch && /Presto/.test(i.userAgent), Y.prefixedMatchesSelector = "matches" in e.prototype ? "matches" : "webkitMatchesSelector" in e.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in e.prototype ? "mozMatchesSelector" : "oMatchesSelector" in e.prototype ? "oMatchesSelector" : "msMatchesSelector", Y.pEventTypes = Y.supportsPointerEvent ? L.PointerEvent === t.MSPointerEvent ? {
    up: "MSPointerUp",
    down: "MSPointerDown",
    over: "mouseover",
    out: "mouseout",
    move: "MSPointerMove",
    cancel: "MSPointerCancel"
  } : {
    up: "pointerup",
    down: "pointerdown",
    over: "pointerover",
    out: "pointerout",
    move: "pointermove",
    cancel: "pointercancel"
  } : null, Y.wheelEvent = L.document && "onmousewheel" in L.document ? "mousewheel" : "wheel";
}
const q = Y, gs = (t, e) => t.indexOf(e) !== -1, Ii = (t, e) => {
  for (const i of e)
    t.push(i);
  return t;
}, Mi = (t) => Ii([], t), Kt = (t, e) => {
  for (let i = 0; i < t.length; i++)
    if (e(t[i], i, t))
      return i;
  return -1;
}, fe = (t, e) => t[Kt(t, e)];
function Et(t) {
  const e = {};
  for (const i in t) {
    const n = t[i];
    p.plainObject(n) ? e[i] = Et(n) : p.array(n) ? e[i] = Mi(n) : e[i] = n;
  }
  return e;
}
function w(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
let Ue = 0, J, ct;
function ms(t) {
  if (J = t.requestAnimationFrame, ct = t.cancelAnimationFrame, !J) {
    const e = ["ms", "moz", "webkit", "o"];
    for (const i of e)
      J = t[`${i}RequestAnimationFrame`], ct = t[`${i}CancelAnimationFrame`] || t[`${i}CancelRequestAnimationFrame`];
  }
  J = J && J.bind(t), ct = ct && ct.bind(t), J || (J = (e) => {
    const i = Date.now(), n = Math.max(0, 16 - (i - Ue)), s = t.setTimeout(() => {
      e(i + n);
    }, n);
    return Ue = i + n, s;
  }, ct = (e) => clearTimeout(e));
}
const xt = {
  request: (t) => J(t),
  cancel: (t) => ct(t),
  init: ms
};
function wt(t, e, i) {
  if (i = i || {}, p.string(t) && t.search(" ") !== -1 && (t = Ke(t)), p.array(t))
    return t.reduce((n, s) => w(n, wt(s, e, i)), i);
  if (p.object(t) && (e = t, t = ""), p.func(e))
    i[t] = i[t] || [], i[t].push(e);
  else if (p.array(e))
    for (const n of e)
      wt(t, n, i);
  else if (p.object(e))
    for (const n in e) {
      const s = Ke(n).map((r) => `${t}${r}`);
      wt(s, e[n], i);
    }
  return i;
}
function Ke(t) {
  return t.trim().split(/ +/);
}
function Ve(t, e) {
  for (const i of e) {
    if (t.immediatePropagationStopped)
      break;
    i(t);
  }
}
class Ti {
  constructor(e) {
    d(this, "options");
    d(this, "types", {});
    d(this, "propagationStopped", !1);
    d(this, "immediatePropagationStopped", !1);
    d(this, "global");
    this.options = w({}, e || {});
  }
  fire(e) {
    let i;
    const n = this.global;
    (i = this.types[e.type]) && Ve(e, i), !e.propagationStopped && n && (i = n[e.type]) && Ve(e, i);
  }
  on(e, i) {
    const n = wt(e, i);
    for (e in n)
      this.types[e] = Ii(this.types[e] || [], n[e]);
  }
  off(e, i) {
    const n = wt(e, i);
    for (e in n) {
      const s = this.types[e];
      if (!(!s || !s.length))
        for (const r of n[e]) {
          const o = s.indexOf(r);
          o !== -1 && s.splice(o, 1);
        }
    }
  }
  getRect(e) {
    return null;
  }
}
function ut(t, e) {
  if (t.contains)
    return t.contains(e);
  for (; e; ) {
    if (e === t)
      return !0;
    e = e.parentNode;
  }
  return !1;
}
function Di(t, e) {
  for (; p.element(t); ) {
    if (ft(t, e))
      return t;
    t = nt(t);
  }
  return null;
}
function nt(t) {
  let e = t.parentNode;
  if (p.docFrag(e)) {
    for (; (e = e.host) && p.docFrag(e); )
      ;
    return e;
  }
  return e;
}
function ft(t, e) {
  return it !== Si && (e = e.replace(/\/deep\//g, " ")), t[q.prefixedMatchesSelector](e);
}
function de(t, e, i) {
  for (; p.element(t); ) {
    if (ft(t, e))
      return !0;
    if (t = nt(t), t === i)
      return ft(t, e);
  }
  return !1;
}
function Je(t) {
  return t.correspondingUseElement || t;
}
function ys(t) {
  return t = t || it, {
    x: t.scrollX || t.document.documentElement.scrollLeft,
    y: t.scrollY || t.document.documentElement.scrollTop
  };
}
function we(t) {
  const e = t instanceof L.SVGElement ? t.getBoundingClientRect() : t.getClientRects()[0];
  return e && {
    left: e.left,
    right: e.right,
    top: e.top,
    bottom: e.bottom,
    width: e.width || e.right - e.left,
    height: e.height || e.bottom - e.top
  };
}
function Se(t) {
  const e = we(t);
  if (!q.isIOS7 && e) {
    const i = ys(ht(t));
    e.left += i.x, e.right += i.x, e.top += i.y, e.bottom += i.y;
  }
  return e;
}
function Ze(t) {
  return p.string(t) ? (L.document.querySelector(t), !0) : !1;
}
function Ci(t, e, i) {
  return t === "parent" ? nt(i) : t === "self" ? e.getRect(i) : Di(i, t);
}
function _t(t, e, i, n) {
  let s = t;
  return p.string(s) ? s = Ci(s, e, i) : p.func(s) && (s = s(...n)), p.element(s) && (s = Se(s)), s;
}
function Vt(t) {
  return t && {
    x: "x" in t ? t.x : t.left,
    y: "y" in t ? t.y : t.top
  };
}
function vs(t) {
  return t && !("left" in t && "top" in t) && (t = w({}, t), t.left = t.x || 0, t.top = t.y || 0, t.right = t.right || t.left + t.width, t.bottom = t.bottom || t.top + t.height), t;
}
function Qe(t) {
  return t && !("x" in t && "y" in t) && (t = w({}, t), t.x = t.left || 0, t.y = t.top || 0, t.width = t.width || (t.right || 0) - t.x, t.height = t.height || (t.bottom || 0) - t.y), t;
}
function Ee(t, e, i) {
  t.left && (e.left += i.x), t.right && (e.right += i.x), t.top && (e.top += i.y), t.bottom && (e.bottom += i.y), e.width = e.right - e.left, e.height = e.bottom - e.top;
}
function ze(t, e, i) {
  const n = t.options[i], r = n && n.origin || t.options.origin, o = _t(r, t, e, [t && e]);
  return Vt(o) || {
    x: 0,
    y: 0
  };
}
const Jt = (t, e) => Math.sqrt(t * t + e * e);
class Ri {
  constructor(e) {
    d(this, "immediatePropagationStopped", !1);
    d(this, "propagationStopped", !1);
    this._interaction = e;
  }
  preventDefault() {
  }
  /**
   * Don't call any other listeners (even on the current target)
   */
  stopPropagation() {
    this.propagationStopped = !0;
  }
  /**
   * Don't call listeners on the remaining targets
   */
  stopImmediatePropagation() {
    this.immediatePropagationStopped = this.propagationStopped = !0;
  }
}
Object.defineProperty(Ri.prototype, "interaction", {
  get() {
    return this._interaction._proxy;
  },
  set() {
  }
});
const _i = {
  base: {
    preventDefault: "auto",
    deltaSource: "page"
  },
  perAction: {
    enabled: !1,
    origin: {
      x: 0,
      y: 0
    }
  },
  actions: {}
};
class Ie extends Ri {
  /** */
  constructor(i, n, s, r, o, a, c) {
    super(i);
    d(this, "relatedTarget", null);
    d(this, "screenX");
    d(this, "screenY");
    d(this, "button");
    d(this, "buttons");
    d(this, "ctrlKey");
    d(this, "shiftKey");
    d(this, "altKey");
    d(this, "metaKey");
    d(this, "page");
    d(this, "client");
    d(this, "delta");
    d(this, "rect");
    d(this, "x0");
    d(this, "y0");
    d(this, "t0");
    d(this, "dt");
    d(this, "duration");
    d(this, "clientX0");
    d(this, "clientY0");
    d(this, "velocity");
    d(this, "speed");
    d(this, "swipe");
    // resize
    d(this, "axes");
    d(this, "preEnd");
    o = o || i.element;
    const l = i.interactable, u = (l && l.options || _i).deltaSource, f = ze(l, o, s), g = r === "start", y = r === "end", v = g ? this : i.prevEvent, z = g ? i.coords.start : y ? {
      page: v.page,
      client: v.client,
      timeStamp: i.coords.cur.timeStamp
    } : i.coords.cur;
    this.page = w({}, z.page), this.client = w({}, z.client), this.rect = w({}, i.rect), this.timeStamp = z.timeStamp, y || (this.page.x -= f.x, this.page.y -= f.y, this.client.x -= f.x, this.client.y -= f.y), this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.button = n.button, this.buttons = n.buttons, this.target = o, this.currentTarget = o, this.preEnd = a, this.type = c || s + (r || ""), this.interactable = l, this.t0 = g ? i.pointers[i.pointers.length - 1].downTime : v.t0, this.x0 = i.coords.start.page.x - f.x, this.y0 = i.coords.start.page.y - f.y, this.clientX0 = i.coords.start.client.x - f.x, this.clientY0 = i.coords.start.client.y - f.y, g || y ? this.delta = {
      x: 0,
      y: 0
    } : this.delta = {
      x: this[u].x - v[u].x,
      y: this[u].y - v[u].y
    }, this.dt = i.coords.delta.timeStamp, this.duration = this.timeStamp - this.t0, this.velocity = w({}, i.coords.velocity[u]), this.speed = Jt(this.velocity.x, this.velocity.y), this.swipe = y || r === "inertiastart" ? this.getSwipe() : null;
  }
  getSwipe() {
    const i = this._interaction;
    if (i.prevEvent.speed < 600 || this.timeStamp - i.prevEvent.timeStamp > 150)
      return null;
    let n = 180 * Math.atan2(i.prevEvent.velocityY, i.prevEvent.velocityX) / Math.PI;
    const s = 22.5;
    n < 0 && (n += 360);
    const r = 135 - s <= n && n < 225 + s, o = 225 - s <= n && n < 315 + s, a = !r && (315 - s <= n || n < 45 + s), c = !o && 45 - s <= n && n < 135 + s;
    return {
      up: o,
      down: c,
      left: r,
      right: a,
      angle: n,
      speed: i.prevEvent.speed,
      velocity: {
        x: i.prevEvent.velocityX,
        y: i.prevEvent.velocityY
      }
    };
  }
  preventDefault() {
  }
  /**
   * Don't call listeners on the remaining targets
   */
  stopImmediatePropagation() {
    this.immediatePropagationStopped = this.propagationStopped = !0;
  }
  /**
   * Don't call any other listeners (even on the current target)
   */
  stopPropagation() {
    this.propagationStopped = !0;
  }
}
Object.defineProperties(Ie.prototype, {
  pageX: {
    get() {
      return this.page.x;
    },
    set(t) {
      this.page.x = t;
    }
  },
  pageY: {
    get() {
      return this.page.y;
    },
    set(t) {
      this.page.y = t;
    }
  },
  clientX: {
    get() {
      return this.client.x;
    },
    set(t) {
      this.client.x = t;
    }
  },
  clientY: {
    get() {
      return this.client.y;
    },
    set(t) {
      this.client.y = t;
    }
  },
  dx: {
    get() {
      return this.delta.x;
    },
    set(t) {
      this.delta.x = t;
    }
  },
  dy: {
    get() {
      return this.delta.y;
    },
    set(t) {
      this.delta.y = t;
    }
  },
  velocityX: {
    get() {
      return this.velocity.x;
    },
    set(t) {
      this.velocity.x = t;
    }
  },
  velocityY: {
    get() {
      return this.velocity.y;
    },
    set(t) {
      this.velocity.y = t;
    }
  }
});
function Pt(t, e) {
  let i = !1;
  return function() {
    return i || (it.console.warn(e), i = !0), t.apply(this, arguments);
  };
}
function Pi(t, e) {
  return t.name = e.name, t.axis = e.axis, t.edges = e.edges, t;
}
function ki(t, e) {
  t.__set || (t.__set = {});
  for (const i in e)
    typeof t[i] != "function" && i !== "__set" && Object.defineProperty(t, i, {
      get() {
        return i in t.__set ? t.__set[i] : t.__set[i] = e[i];
      },
      set(n) {
        t.__set[i] = n;
      },
      configurable: !0
    });
  return t;
}
function te(t, e) {
  t.page = t.page || {}, t.page.x = e.page.x, t.page.y = e.page.y, t.client = t.client || {}, t.client.x = e.client.x, t.client.y = e.client.y, t.timeStamp = e.timeStamp;
}
function bs(t, e, i) {
  t.page.x = i.page.x - e.page.x, t.page.y = i.page.y - e.page.y, t.client.x = i.client.x - e.client.x, t.client.y = i.client.y - e.client.y, t.timeStamp = i.timeStamp - e.timeStamp;
}
function xs(t, e) {
  const i = Math.max(e.timeStamp / 1e3, 1e-3);
  t.page.x = e.page.x / i, t.page.y = e.page.y / i, t.client.x = e.client.x / i, t.client.y = e.client.y / i, t.timeStamp = i;
}
function ws(t) {
  t.page.x = 0, t.page.y = 0, t.client.x = 0, t.client.y = 0;
}
function $i(t) {
  return t instanceof L.Event || t instanceof L.Touch;
}
function Ft(t, e, i) {
  return i = i || {}, t = t || "page", i.x = e[t + "X"], i.y = e[t + "Y"], i;
}
function Ss(t, e) {
  return e = e || {
    x: 0,
    y: 0
  }, q.isOperaMobile && $i(t) ? (Ft("screen", t, e), e.x += window.scrollX, e.y += window.scrollY) : Ft("page", t, e), e;
}
function Es(t, e) {
  return e = e || {}, q.isOperaMobile && $i(t) ? Ft("screen", t, e) : Ft("client", t, e), e;
}
function Xt(t) {
  return p.number(t.pointerId) ? t.pointerId : t.identifier;
}
function zs(t, e, i) {
  const n = e.length > 1 ? Oi(e) : e[0];
  Ss(n, t.page), Es(n, t.client), t.timeStamp = i;
}
function Me(t) {
  const e = [];
  return p.array(t) ? (e[0] = t[0], e[1] = t[1]) : t.type === "touchend" ? t.touches.length === 1 ? (e[0] = t.touches[0], e[1] = t.changedTouches[0]) : t.touches.length === 0 && (e[0] = t.changedTouches[0], e[1] = t.changedTouches[1]) : (e[0] = t.touches[0], e[1] = t.touches[1]), e;
}
function Oi(t) {
  const e = {
    pageX: 0,
    pageY: 0,
    clientX: 0,
    clientY: 0,
    screenX: 0,
    screenY: 0
  };
  for (const i of t)
    for (const n in e)
      e[n] += i[n];
  for (const i in e)
    e[i] /= t.length;
  return e;
}
function Is(t) {
  if (!t.length)
    return null;
  const e = Me(t), i = Math.min(e[0].pageX, e[1].pageX), n = Math.min(e[0].pageY, e[1].pageY), s = Math.max(e[0].pageX, e[1].pageX), r = Math.max(e[0].pageY, e[1].pageY);
  return {
    x: i,
    y: n,
    left: i,
    top: n,
    right: s,
    bottom: r,
    width: s - i,
    height: r - n
  };
}
function Ms(t, e) {
  const i = e + "X", n = e + "Y", s = Me(t), r = s[0][i] - s[1][i], o = s[0][n] - s[1][n];
  return Jt(r, o);
}
function Ts(t, e) {
  const i = e + "X", n = e + "Y", s = Me(t), r = s[1][i] - s[0][i], o = s[1][n] - s[0][n];
  return 180 * Math.atan2(o, r) / Math.PI;
}
function Ds(t) {
  return p.string(t.pointerType) ? t.pointerType : p.number(t.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][t.pointerType] : (
    // if the PointerEvent API isn't available, then the "pointer" must
    // be either a MouseEvent, TouchEvent, or Touch object
    /touch/.test(t.type || "") || t instanceof L.Touch ? "touch" : "mouse"
  );
}
function Hi(t) {
  const e = p.func(t.composedPath) ? t.composedPath() : t.path;
  return [Je(e ? e[0] : t.target), Je(t.currentTarget)];
}
function It() {
  return {
    page: {
      x: 0,
      y: 0
    },
    client: {
      x: 0,
      y: 0
    },
    timeStamp: 0
  };
}
function pe(t, e) {
  if (e.phaselessTypes[t])
    return !0;
  for (const i in e.map)
    if (t.indexOf(i) === 0 && t.substr(i.length) in e.phases)
      return !0;
  return !1;
}
function Cs(t) {
  const e = (i, n) => {
    let s = t.interactables.get(i, n);
    return s || (s = t.interactables.new(i, n), s.events.global = e.globalEvents), s;
  };
  return e.getPointerAverage = Oi, e.getTouchBBox = Is, e.getTouchDistance = Ms, e.getTouchAngle = Ts, e.getElementRect = Se, e.getElementClientRect = we, e.matchesSelector = ft, e.closest = Di, e.globalEvents = {}, e.version = "1.10.17", e.scope = t, e.use = function(i, n) {
    return this.scope.usePlugin(i, n), this;
  }, e.isSet = function(i, n) {
    return !!this.scope.interactables.get(i, n && n.context);
  }, e.on = Pt(function(n, s, r) {
    if (p.string(n) && n.search(" ") !== -1 && (n = n.trim().split(/ +/)), p.array(n)) {
      for (const o of n)
        this.on(o, s, r);
      return this;
    }
    if (p.object(n)) {
      for (const o in n)
        this.on(o, n[o], s);
      return this;
    }
    return pe(n, this.scope.actions) ? this.globalEvents[n] ? this.globalEvents[n].push(s) : this.globalEvents[n] = [s] : this.scope.events.add(this.scope.document, n, s, {
      options: r
    }), this;
  }, "The interact.on() method is being deprecated"), e.off = Pt(function(n, s, r) {
    if (p.string(n) && n.search(" ") !== -1 && (n = n.trim().split(/ +/)), p.array(n)) {
      for (const o of n)
        this.off(o, s, r);
      return this;
    }
    if (p.object(n)) {
      for (const o in n)
        this.off(o, n[o], s);
      return this;
    }
    if (pe(n, this.scope.actions)) {
      let o;
      n in this.globalEvents && (o = this.globalEvents[n].indexOf(s)) !== -1 && this.globalEvents[n].splice(o, 1);
    } else
      this.scope.events.remove(this.scope.document, n, s, r);
    return this;
  }, "The interact.off() method is being deprecated"), e.debug = function() {
    return this.scope;
  }, e.supportsTouch = function() {
    return q.supportsTouch;
  }, e.supportsPointerEvent = function() {
    return q.supportsPointerEvent;
  }, e.stop = function() {
    for (const i of this.scope.interactions.list)
      i.stop();
    return this;
  }, e.pointerMoveTolerance = function(i) {
    return p.number(i) ? (this.scope.interactions.pointerMoveTolerance = i, this) : this.scope.interactions.pointerMoveTolerance;
  }, e.addDocument = function(i, n) {
    this.scope.addDocument(i, n);
  }, e.removeDocument = function(i) {
    this.scope.removeDocument(i);
  }, e;
}
class Rs {
  /** */
  constructor(e, i, n, s) {
    d(this, "options");
    d(this, "_actions");
    d(this, "target");
    d(this, "events", new Ti());
    d(this, "_context");
    d(this, "_win");
    d(this, "_doc");
    d(this, "_scopeEvents");
    /** @internal */
    d(this, "_rectChecker");
    this._actions = i.actions, this.target = e, this._context = i.context || n, this._win = ht(Ze(e) ? this._context : e), this._doc = this._win.document, this._scopeEvents = s, this.set(i);
  }
  /** @internal */
  get _defaults() {
    return {
      base: {},
      perAction: {},
      actions: {}
    };
  }
  setOnEvents(e, i) {
    return p.func(i.onstart) && this.on(`${e}start`, i.onstart), p.func(i.onmove) && this.on(`${e}move`, i.onmove), p.func(i.onend) && this.on(`${e}end`, i.onend), p.func(i.oninertiastart) && this.on(`${e}inertiastart`, i.oninertiastart), this;
  }
  updatePerActionListeners(e, i, n) {
    (p.array(i) || p.object(i)) && this.off(e, i), (p.array(n) || p.object(n)) && this.on(e, n);
  }
  setPerAction(e, i) {
    const n = this._defaults;
    for (const s in i) {
      const r = s, o = this.options[e], a = i[r];
      r === "listeners" && this.updatePerActionListeners(e, o.listeners, a), p.array(a) ? o[r] = Mi(a) : p.plainObject(a) ? (o[r] = w(o[r] || {}, Et(a)), p.object(n.perAction[r]) && "enabled" in n.perAction[r] && (o[r].enabled = a.enabled !== !1)) : p.bool(a) && p.object(n.perAction[r]) ? o[r].enabled = a : o[r] = a;
    }
  }
  /**
   * The default function to get an Interactables bounding rect. Can be
   * overridden using {@link Interactable.rectChecker}.
   *
   * @param {Element} [element] The element to measure.
   * @return {Rect} The object's bounding rectangle.
   */
  getRect(e) {
    return e = e || (p.element(this.target) ? this.target : null), p.string(this.target) && (e = e || this._context.querySelector(this.target)), Se(e);
  }
  /**
   * Returns or sets the function used to calculate the interactable's
   * element's rectangle
   *
   * @param {function} [checker] A function which returns this Interactable's
   * bounding rectangle. See {@link Interactable.getRect}
   * @return {function | object} The checker function or this Interactable
   */
  rectChecker(e) {
    return p.func(e) ? (this._rectChecker = e, this.getRect = (i) => {
      const n = w({}, this._rectChecker(i));
      return "width" in n || (n.width = n.right - n.left, n.height = n.bottom - n.top), n;
    }, this) : e === null ? (delete this.getRect, delete this._rectChecker, this) : this.getRect;
  }
  _backCompatOption(e, i) {
    if (Ze(i) || p.object(i)) {
      this.options[e] = i;
      for (const n in this._actions.map)
        this.options[n][e] = i;
      return this;
    }
    return this.options[e];
  }
  /**
   * Gets or sets the origin of the Interactable's element.  The x and y
   * of the origin will be subtracted from action event coordinates.
   *
   * @param {Element | object | string} [origin] An HTML or SVG Element whose
   * rect will be used, an object eg. { x: 0, y: 0 } or string 'parent', 'self'
   * or any CSS selector
   *
   * @return {object} The current origin or this Interactable
   */
  origin(e) {
    return this._backCompatOption("origin", e);
  }
  /**
   * Returns or sets the mouse coordinate types used to calculate the
   * movement of the pointer.
   *
   * @param {string} [newValue] Use 'client' if you will be scrolling while
   * interacting; Use 'page' if you want autoScroll to work
   * @return {string | object} The current deltaSource or this Interactable
   */
  deltaSource(e) {
    return e === "page" || e === "client" ? (this.options.deltaSource = e, this) : this.options.deltaSource;
  }
  /**
   * Gets the selector context Node of the Interactable. The default is
   * `window.document`.
   *
   * @return {Node} The context Node of this Interactable
   */
  context() {
    return this._context;
  }
  inContext(e) {
    return this._context === e.ownerDocument || ut(this._context, e);
  }
  testIgnoreAllow(e, i, n) {
    return !this.testIgnore(e.ignoreFrom, i, n) && this.testAllow(e.allowFrom, i, n);
  }
  testAllow(e, i, n) {
    return e ? p.element(n) ? p.string(e) ? de(n, e, i) : p.element(e) ? ut(e, n) : !1 : !1 : !0;
  }
  testIgnore(e, i, n) {
    return !e || !p.element(n) ? !1 : p.string(e) ? de(n, e, i) : p.element(e) ? ut(e, n) : !1;
  }
  /**
   * Calls listeners for the given InteractEvent type bound globally
   * and directly to this Interactable
   *
   * @param {InteractEvent} iEvent The InteractEvent object to be fired on this
   * Interactable
   * @return {Interactable} this Interactable
   */
  fire(e) {
    return this.events.fire(e), this;
  }
  _onOff(e, i, n, s) {
    p.object(i) && !p.array(i) && (s = n, n = null);
    const r = e === "on" ? "add" : "remove", o = wt(i, n);
    for (let a in o) {
      a === "wheel" && (a = q.wheelEvent);
      for (const c of o[a])
        pe(a, this._actions) ? this.events[e](a, c) : p.string(this.target) ? this._scopeEvents[`${r}Delegate`](this.target, this._context, a, c, s) : this._scopeEvents[r](this.target, a, c, s);
    }
    return this;
  }
  /**
   * Binds a listener for an InteractEvent, pointerEvent or DOM event.
   *
   * @param {string | array | object} types The types of events to listen
   * for
   * @param {function | array | object} [listener] The event listener function(s)
   * @param {object | boolean} [options] options object or useCapture flag for
   * addEventListener
   * @return {Interactable} This Interactable
   */
  on(e, i, n) {
    return this._onOff("on", e, i, n);
  }
  /**
   * Removes an InteractEvent, pointerEvent or DOM event listener.
   *
   * @param {string | array | object} types The types of events that were
   * listened for
   * @param {function | array | object} [listener] The event listener function(s)
   * @param {object | boolean} [options] options object or useCapture flag for
   * removeEventListener
   * @return {Interactable} This Interactable
   */
  off(e, i, n) {
    return this._onOff("off", e, i, n);
  }
  /**
   * Reset the options of this Interactable
   *
   * @param {object} options The new settings to apply
   * @return {object} This Interactable
   */
  set(e) {
    const i = this._defaults;
    p.object(e) || (e = {}), this.options = Et(i.base);
    for (const n in this._actions.methodDict) {
      const s = n, r = this._actions.methodDict[s];
      this.options[s] = {}, this.setPerAction(s, w(w({}, i.perAction), i.actions[s])), this[r](e[s]);
    }
    for (const n in e)
      p.func(this[n]) && this[n](e[n]);
    return this;
  }
  /**
   * Remove this interactable from the list of interactables and remove it's
   * action capabilities and event listeners
   */
  unset() {
    if (p.string(this.target))
      for (const e in this._scopeEvents.delegatedEvents) {
        const i = this._scopeEvents.delegatedEvents[e];
        for (let n = i.length - 1; n >= 0; n--) {
          const {
            selector: s,
            context: r,
            listeners: o
          } = i[n];
          s === this.target && r === this._context && i.splice(n, 1);
          for (let a = o.length - 1; a >= 0; a--)
            this._scopeEvents.removeDelegate(this.target, this._context, e, o[a][0], o[a][1]);
        }
      }
    else
      this._scopeEvents.remove(this.target, "all");
  }
}
class _s {
  constructor(e) {
    // all set interactables
    d(this, "list", []);
    d(this, "selectorMap", {});
    d(this, "scope");
    this.scope = e, e.addListeners({
      "interactable:unset": ({
        interactable: i
      }) => {
        const {
          target: n,
          _context: s
        } = i, r = p.string(n) ? this.selectorMap[n] : n[this.scope.id], o = Kt(r, (a) => a.context === s);
        r[o] && (r[o].context = null, r[o].interactable = null), r.splice(o, 1);
      }
    });
  }
  new(e, i) {
    i = w(i || {}, {
      actions: this.scope.actions
    });
    const n = new this.scope.Interactable(e, i, this.scope.document, this.scope.events), s = {
      context: n._context,
      interactable: n
    };
    return this.scope.addDocument(n._doc), this.list.push(n), p.string(e) ? (this.selectorMap[e] || (this.selectorMap[e] = []), this.selectorMap[e].push(s)) : (n.target[this.scope.id] || Object.defineProperty(e, this.scope.id, {
      value: [],
      configurable: !0
    }), e[this.scope.id].push(s)), this.scope.fire("interactable:new", {
      target: e,
      options: i,
      interactable: n,
      win: this.scope._win
    }), n;
  }
  get(e, i) {
    const n = i && i.context || this.scope.document, s = p.string(e), r = s ? this.selectorMap[e] : e[this.scope.id];
    if (!r)
      return null;
    const o = fe(r, (a) => a.context === n && (s || a.interactable.inContext(e)));
    return o && o.interactable;
  }
  forEachMatch(e, i) {
    for (const n of this.list) {
      let s;
      if ((p.string(n.target) ? (
        // target is a selector and the element matches
        p.element(e) && ft(e, n.target)
      ) : (
        // target is the element
        e === n.target
      )) && // the element is in context
      n.inContext(e) && (s = i(n)), s !== void 0)
        return s;
    }
  }
}
function Ps(t) {
  var e;
  const i = [], n = {}, s = [], r = {
    add: o,
    remove: a,
    addDelegate: c,
    removeDelegate: l,
    delegateListener: u,
    delegateUseCapture: f,
    delegatedEvents: n,
    documents: s,
    targets: i,
    supportsOptions: !1,
    supportsPassive: !1
  };
  (e = t.document) == null || e.createElement("div").addEventListener("test", null, {
    get capture() {
      return r.supportsOptions = !0;
    },
    get passive() {
      return r.supportsPassive = !0;
    }
  }), t.events = r;
  function o(g, y, v, z) {
    const M = Mt(z);
    let _ = fe(i, (S) => S.eventTarget === g);
    _ || (_ = {
      eventTarget: g,
      events: {}
    }, i.push(_)), _.events[y] || (_.events[y] = []), g.addEventListener && !gs(_.events[y], v) && (g.addEventListener(y, v, r.supportsOptions ? M : M.capture), _.events[y].push(v));
  }
  function a(g, y, v, z) {
    const M = Mt(z), _ = Kt(i, (h) => h.eventTarget === g), S = i[_];
    if (!S || !S.events)
      return;
    if (y === "all") {
      for (y in S.events)
        S.events.hasOwnProperty(y) && a(g, y, "all");
      return;
    }
    let I = !1;
    const m = S.events[y];
    if (m) {
      if (v === "all") {
        for (let h = m.length - 1; h >= 0; h--)
          a(g, y, m[h], M);
        return;
      } else
        for (let h = 0; h < m.length; h++)
          if (m[h] === v) {
            g.removeEventListener(y, v, r.supportsOptions ? M : M.capture), m.splice(h, 1), m.length === 0 && (delete S.events[y], I = !0);
            break;
          }
    }
    I && !Object.keys(S.events).length && i.splice(_, 1);
  }
  function c(g, y, v, z, M) {
    const _ = Mt(M);
    if (!n[v]) {
      n[v] = [];
      for (const m of s)
        o(m, v, u), o(m, v, f, !0);
    }
    const S = n[v];
    let I = fe(S, (m) => m.selector === g && m.context === y);
    I || (I = {
      selector: g,
      context: y,
      listeners: []
    }, S.push(I)), I.listeners.push([z, _]);
  }
  function l(g, y, v, z, M) {
    const _ = Mt(M), S = n[v];
    let I = !1, m;
    if (S)
      for (m = S.length - 1; m >= 0; m--) {
        const h = S[m];
        if (h.selector === g && h.context === y) {
          const {
            listeners: T
          } = h;
          for (let b = T.length - 1; b >= 0; b--) {
            const [$, {
              capture: H,
              passive: R
            }] = T[b];
            if ($ === z && H === _.capture && R === _.passive) {
              T.splice(b, 1), T.length || (S.splice(m, 1), a(y, v, u), a(y, v, f, !0)), I = !0;
              break;
            }
          }
          if (I)
            break;
        }
      }
  }
  function u(g, y) {
    const v = Mt(y), z = new ks(g), M = n[g.type], [_] = Hi(g);
    let S = _;
    for (; p.element(S); ) {
      for (let I = 0; I < M.length; I++) {
        const m = M[I], {
          selector: h,
          context: T
        } = m;
        if (ft(S, h) && ut(T, _) && ut(T, S)) {
          const {
            listeners: b
          } = m;
          z.currentTarget = S;
          for (const [$, {
            capture: H,
            passive: R
          }] of b)
            H === v.capture && R === v.passive && $(z);
        }
      }
      S = nt(S);
    }
  }
  function f(g) {
    return u.call(this, g, !0);
  }
  return r;
}
class ks {
  constructor(e) {
    d(this, "currentTarget");
    d(this, "originalEvent");
    d(this, "type");
    this.originalEvent = e, ki(this, e);
  }
  preventOriginalDefault() {
    this.originalEvent.preventDefault();
  }
  stopPropagation() {
    this.originalEvent.stopPropagation();
  }
  stopImmediatePropagation() {
    this.originalEvent.stopImmediatePropagation();
  }
}
function Mt(t) {
  if (!p.object(t))
    return {
      capture: !!t,
      passive: !1
    };
  const e = w({}, t);
  return e.capture = !!t.capture, e.passive = !!t.passive, e;
}
const $s = {
  id: "events",
  install: Ps
};
class Os {
  constructor(e, i, n, s, r) {
    d(this, "id");
    d(this, "pointer");
    d(this, "event");
    d(this, "downTime");
    d(this, "downTarget");
    this.id = e, this.pointer = i, this.event = n, this.downTime = s, this.downTarget = r;
  }
}
let ge;
(function(t) {
  t.interactable = "", t.element = "", t.prepared = "", t.pointerIsDown = "", t.pointerWasMoved = "", t._proxy = "";
})(ge || (ge = {}));
let me;
(function(t) {
  t.start = "", t.move = "", t.end = "", t.stop = "", t.interacting = "";
})(me || (me = {}));
let Hs = 0;
class As {
  /** */
  constructor({
    pointerType: e,
    scopeFire: i
  }) {
    // current interactable being interacted with
    d(this, "interactable", null);
    // the target element of the interactable
    d(this, "element", null);
    d(this, "rect", null);
    d(this, "_rects");
    d(this, "edges", null);
    d(this, "_scopeFire");
    // action that's ready to be fired on next move event
    d(this, "prepared", {
      name: null,
      axis: null,
      edges: null
    });
    d(this, "pointerType");
    // keep track of added pointers
    d(this, "pointers", []);
    // pointerdown/mousedown/touchstart event
    d(this, "downEvent", null);
    d(this, "downPointer", {});
    d(this, "_latestPointer", {
      pointer: null,
      event: null,
      eventTarget: null
    });
    // previous action event
    d(this, "prevEvent", null);
    d(this, "pointerIsDown", !1);
    d(this, "pointerWasMoved", !1);
    d(this, "_interacting", !1);
    d(this, "_ending", !1);
    d(this, "_stopped", !0);
    d(this, "_proxy", null);
    d(this, "simulation", null);
    /**
     * @alias Interaction.prototype.move
     */
    d(this, "doMove", Pt(function(e) {
      this.move(e);
    }, "The interaction.doMove() method has been renamed to interaction.move()"));
    d(this, "coords", {
      // Starting InteractEvent pointer coordinates
      start: It(),
      // Previous native pointer move event coordinates
      prev: It(),
      // current native pointer move event coordinates
      cur: It(),
      // Change in coordinates and time of the pointer
      delta: It(),
      // pointer velocity
      velocity: It()
    });
    d(this, "_id", Hs++);
    this._scopeFire = i, this.pointerType = e;
    const n = this;
    this._proxy = {};
    for (const s in ge)
      Object.defineProperty(this._proxy, s, {
        get() {
          return n[s];
        }
      });
    for (const s in me)
      Object.defineProperty(this._proxy, s, {
        value: (...r) => n[s](...r)
      });
    this._scopeFire("interactions:new", {
      interaction: this
    });
  }
  /** @internal */
  get pointerMoveTolerance() {
    return 1;
  }
  pointerDown(e, i, n) {
    const s = this.updatePointer(e, i, n, !0), r = this.pointers[s];
    this._scopeFire("interactions:down", {
      pointer: e,
      event: i,
      eventTarget: n,
      pointerIndex: s,
      pointerInfo: r,
      type: "down",
      interaction: this
    });
  }
  /**
   * ```js
   * interact(target)
   *   .draggable({
   *     // disable the default drag start by down->move
   *     manualStart: true
   *   })
   *   // start dragging after the user holds the pointer down
   *   .on('hold', function (event) {
   *     var interaction = event.interaction
   *
   *     if (!interaction.interacting()) {
   *       interaction.start({ name: 'drag' },
   *                         event.interactable,
   *                         event.currentTarget)
   *     }
   * })
   * ```
   *
   * Start an action with the given Interactable and Element as tartgets. The
   * action must be enabled for the target Interactable and an appropriate
   * number of pointers must be held down - 1 for drag/resize, 2 for gesture.
   *
   * Use it with `interactable.<action>able({ manualStart: false })` to always
   * [start actions manually](https://github.com/taye/interact.js/issues/114)
   *
   * @param {object} action   The action to be performed - drag, resize, etc.
   * @param {Interactable} target  The Interactable to target
   * @param {Element} element The DOM Element to target
   * @return {Boolean} Whether the interaction was successfully started
   */
  start(e, i, n) {
    return this.interacting() || !this.pointerIsDown || this.pointers.length < (e.name === "gesture" ? 2 : 1) || !i.options[e.name].enabled ? !1 : (Pi(this.prepared, e), this.interactable = i, this.element = n, this.rect = i.getRect(n), this.edges = this.prepared.edges ? w({}, this.prepared.edges) : {
      left: !0,
      right: !0,
      top: !0,
      bottom: !0
    }, this._stopped = !1, this._interacting = this._doPhase({
      interaction: this,
      event: this.downEvent,
      phase: "start"
    }) && !this._stopped, this._interacting);
  }
  pointerMove(e, i, n) {
    !this.simulation && !(this.modification && this.modification.endResult) && this.updatePointer(e, i, n, !1);
    const s = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
    let r, o;
    this.pointerIsDown && !this.pointerWasMoved && (r = this.coords.cur.client.x - this.coords.start.client.x, o = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = Jt(r, o) > this.pointerMoveTolerance);
    const a = this.getPointerIndex(e), c = {
      pointer: e,
      pointerIndex: a,
      pointerInfo: this.pointers[a],
      event: i,
      type: "move",
      eventTarget: n,
      dx: r,
      dy: o,
      duplicate: s,
      interaction: this
    };
    s || xs(this.coords.velocity, this.coords.delta), this._scopeFire("interactions:move", c), !s && !this.simulation && (this.interacting() && (c.type = null, this.move(c)), this.pointerWasMoved && te(this.coords.prev, this.coords.cur));
  }
  /**
   * ```js
   * interact(target)
   *   .draggable(true)
   *   .on('dragmove', function (event) {
   *     if (someCondition) {
   *       // change the snap settings
   *       event.interactable.draggable({ snap: { targets: [] }})
   *       // fire another move event with re-calculated snap
   *       event.interaction.move()
   *     }
   *   })
   * ```
   *
   * Force a move of the current action at the same coordinates. Useful if
   * snap/restrict has been changed and you want a movement with the new
   * settings.
   */
  move(e) {
    (!e || !e.event) && ws(this.coords.delta), e = w({
      pointer: this._latestPointer.pointer,
      event: this._latestPointer.event,
      eventTarget: this._latestPointer.eventTarget,
      interaction: this
    }, e || {}), e.phase = "move", this._doPhase(e);
  }
  // End interact move events and stop auto-scroll unless simulation is running
  pointerUp(e, i, n, s) {
    let r = this.getPointerIndex(e);
    r === -1 && (r = this.updatePointer(e, i, n, !1));
    const o = /cancel$/i.test(i.type) ? "cancel" : "up";
    this._scopeFire(`interactions:${o}`, {
      pointer: e,
      pointerIndex: r,
      pointerInfo: this.pointers[r],
      event: i,
      eventTarget: n,
      type: o,
      curEventTarget: s,
      interaction: this
    }), this.simulation || this.end(i), this.removePointer(e, i);
  }
  documentBlur(e) {
    this.end(e), this._scopeFire("interactions:blur", {
      event: e,
      type: "blur",
      interaction: this
    });
  }
  /**
   * ```js
   * interact(target)
   *   .draggable(true)
   *   .on('move', function (event) {
   *     if (event.pageX > 1000) {
   *       // end the current action
   *       event.interaction.end()
   *       // stop all further listeners from being called
   *       event.stopImmediatePropagation()
   *     }
   *   })
   * ```
   *
   * @param {PointerEvent} [event]
   */
  end(e) {
    this._ending = !0, e = e || this._latestPointer.event;
    let i;
    this.interacting() && (i = this._doPhase({
      event: e,
      interaction: this,
      phase: "end"
    })), this._ending = !1, i === !0 && this.stop();
  }
  currentAction() {
    return this._interacting ? this.prepared.name : null;
  }
  interacting() {
    return this._interacting;
  }
  /** */
  stop() {
    this._scopeFire("interactions:stop", {
      interaction: this
    }), this.interactable = this.element = null, this._interacting = !1, this._stopped = !0, this.prepared.name = this.prevEvent = null;
  }
  getPointerIndex(e) {
    const i = Xt(e);
    return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : Kt(this.pointers, (n) => n.id === i);
  }
  getPointerInfo(e) {
    return this.pointers[this.getPointerIndex(e)];
  }
  updatePointer(e, i, n, s) {
    const r = Xt(e);
    let o = this.getPointerIndex(e), a = this.pointers[o];
    return s = s === !1 ? !1 : s || /(down|start)$/i.test(i.type), a ? a.pointer = e : (a = new Os(r, e, i, null, null), o = this.pointers.length, this.pointers.push(a)), zs(this.coords.cur, this.pointers.map((c) => c.pointer), this._now()), bs(this.coords.delta, this.coords.prev, this.coords.cur), s && (this.pointerIsDown = !0, a.downTime = this.coords.cur.timeStamp, a.downTarget = n, ki(this.downPointer, e), this.interacting() || (te(this.coords.start, this.coords.cur), te(this.coords.prev, this.coords.cur), this.downEvent = i, this.pointerWasMoved = !1)), this._updateLatestPointer(e, i, n), this._scopeFire("interactions:update-pointer", {
      pointer: e,
      event: i,
      eventTarget: n,
      down: s,
      pointerInfo: a,
      pointerIndex: o,
      interaction: this
    }), o;
  }
  removePointer(e, i) {
    const n = this.getPointerIndex(e);
    if (n === -1)
      return;
    const s = this.pointers[n];
    this._scopeFire("interactions:remove-pointer", {
      pointer: e,
      event: i,
      eventTarget: null,
      pointerIndex: n,
      pointerInfo: s,
      interaction: this
    }), this.pointers.splice(n, 1), this.pointerIsDown = !1;
  }
  _updateLatestPointer(e, i, n) {
    this._latestPointer.pointer = e, this._latestPointer.event = i, this._latestPointer.eventTarget = n;
  }
  destroy() {
    this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
  }
  _createPreparedEvent(e, i, n, s) {
    return new Ie(this, e, this.prepared.name, i, this.element, n, s);
  }
  _fireEvent(e) {
    var i;
    (i = this.interactable) == null || i.fire(e), (!this.prevEvent || e.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = e);
  }
  _doPhase(e) {
    const {
      event: i,
      phase: n,
      preEnd: s,
      type: r
    } = e, {
      rect: o
    } = this;
    if (o && n === "move" && (Ee(this.edges, o, this.coords.delta[this.interactable.options.deltaSource]), o.width = o.right - o.left, o.height = o.bottom - o.top), this._scopeFire(`interactions:before-action-${n}`, e) === !1)
      return !1;
    const c = e.iEvent = this._createPreparedEvent(i, n, s, r);
    return this._scopeFire(`interactions:action-${n}`, e), n === "start" && (this.prevEvent = c), this._fireEvent(c), this._scopeFire(`interactions:after-action-${n}`, e), !0;
  }
  _now() {
    return Date.now();
  }
}
const Bs = As;
function Ls(t) {
  return /^(always|never|auto)$/.test(t) ? (this.options.preventDefault = t, this) : p.bool(t) ? (this.options.preventDefault = t ? "always" : "never", this) : this.options.preventDefault;
}
function Ws(t, e, i) {
  const n = t.options.preventDefault;
  if (n !== "never") {
    if (n === "always") {
      i.preventDefault();
      return;
    }
    if (e.events.supportsPassive && /^touch(start|move)$/.test(i.type)) {
      const s = ht(i.target).document, r = e.getDocOptions(s);
      if (!(r && r.events) || r.events.passive !== !1)
        return;
    }
    /^(mouse|pointer|touch)*(down|start)/i.test(i.type) || p.element(i.target) && ft(i.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || i.preventDefault();
  }
}
function js({
  interaction: t,
  event: e
}) {
  t.interactable && t.interactable.checkAndPreventDefault(e);
}
function Ns(t) {
  const {
    Interactable: e
  } = t;
  e.prototype.preventDefault = Ls, e.prototype.checkAndPreventDefault = function(i) {
    return Ws(this, t, i);
  }, t.interactions.docEvents.push({
    type: "dragstart",
    listener(i) {
      for (const n of t.interactions.list)
        if (n.element && (n.element === i.target || ut(n.element, i.target))) {
          n.interactable.checkAndPreventDefault(i);
          return;
        }
    }
  });
}
const Fs = {
  id: "core/interactablePreventDefault",
  install: Ns,
  listeners: ["down", "move", "up", "cancel"].reduce((t, e) => (t[`interactions:${e}`] = js, t), {})
}, ye = {
  methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"],
  search(t) {
    for (const e of ye.methodOrder) {
      const i = ye[e](t);
      if (i)
        return i;
    }
    return null;
  },
  // try to resume simulation with a new pointer
  simulationResume({
    pointerType: t,
    eventType: e,
    eventTarget: i,
    scope: n
  }) {
    if (!/down|start/i.test(e))
      return null;
    for (const s of n.interactions.list) {
      let r = i;
      if (s.simulation && s.simulation.allowResume && s.pointerType === t)
        for (; r; ) {
          if (r === s.element)
            return s;
          r = nt(r);
        }
    }
    return null;
  },
  // if it's a mouse or pen interaction
  mouseOrPen({
    pointerId: t,
    pointerType: e,
    eventType: i,
    scope: n
  }) {
    if (e !== "mouse" && e !== "pen")
      return null;
    let s;
    for (const r of n.interactions.list)
      if (r.pointerType === e) {
        if (r.simulation && !ti(r, t))
          continue;
        if (r.interacting())
          return r;
        s || (s = r);
      }
    if (s)
      return s;
    for (const r of n.interactions.list)
      if (r.pointerType === e && !(/down/i.test(i) && r.simulation))
        return r;
    return null;
  },
  // get interaction that has this pointer
  hasPointer({
    pointerId: t,
    scope: e
  }) {
    for (const i of e.interactions.list)
      if (ti(i, t))
        return i;
    return null;
  },
  // get first idle interaction with a matching pointerType
  idle({
    pointerType: t,
    scope: e
  }) {
    for (const i of e.interactions.list) {
      if (i.pointers.length === 1) {
        const n = i.interactable;
        if (n && !(n.options.gesture && n.options.gesture.enabled))
          continue;
      } else if (i.pointers.length >= 2)
        continue;
      if (!i.interacting() && t === i.pointerType)
        return i;
    }
    return null;
  }
};
function ti(t, e) {
  return t.pointers.some(({
    id: i
  }) => i === e);
}
const Xs = ye, Ai = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
function Ys(t) {
  const e = {};
  for (const r of Ai)
    e[r] = Bi(r, t);
  const i = q.pEventTypes;
  let n;
  L.PointerEvent ? n = [{
    type: i.down,
    listener: s
  }, {
    type: i.down,
    listener: e.pointerDown
  }, {
    type: i.move,
    listener: e.pointerMove
  }, {
    type: i.up,
    listener: e.pointerUp
  }, {
    type: i.cancel,
    listener: e.pointerUp
  }] : n = [{
    type: "mousedown",
    listener: e.pointerDown
  }, {
    type: "mousemove",
    listener: e.pointerMove
  }, {
    type: "mouseup",
    listener: e.pointerUp
  }, {
    type: "touchstart",
    listener: s
  }, {
    type: "touchstart",
    listener: e.pointerDown
  }, {
    type: "touchmove",
    listener: e.pointerMove
  }, {
    type: "touchend",
    listener: e.pointerUp
  }, {
    type: "touchcancel",
    listener: e.pointerUp
  }], n.push({
    type: "blur",
    listener(r) {
      for (const o of t.interactions.list)
        o.documentBlur(r);
    }
  }), t.prevTouchTime = 0, t.Interaction = class extends Bs {
    get pointerMoveTolerance() {
      return t.interactions.pointerMoveTolerance;
    }
    set pointerMoveTolerance(r) {
      t.interactions.pointerMoveTolerance = r;
    }
    _now() {
      return t.now();
    }
  }, t.interactions = {
    // all active and idle interactions
    list: [],
    new(r) {
      r.scopeFire = (a, c) => t.fire(a, c);
      const o = new t.Interaction(r);
      return t.interactions.list.push(o), o;
    },
    listeners: e,
    docEvents: n,
    pointerMoveTolerance: 1
  };
  function s() {
    for (const r of t.interactions.list)
      if (!(!r.pointerIsDown || r.pointerType !== "touch" || r._interacting))
        for (const o of r.pointers)
          t.documents.some(({
            doc: a
          }) => ut(a, o.downTarget)) || r.removePointer(o.pointer, o.event);
  }
  t.usePlugin(Fs);
}
function Bi(t, e) {
  return function(i) {
    const n = e.interactions.list, s = Ds(i), [r, o] = Hi(i), a = [];
    if (/^touch/.test(i.type)) {
      e.prevTouchTime = e.now();
      for (const c of i.changedTouches) {
        const l = c, u = Xt(l), f = {
          pointer: l,
          pointerId: u,
          pointerType: s,
          eventType: i.type,
          eventTarget: r,
          curEventTarget: o,
          scope: e
        }, g = ei(f);
        a.push([f.pointer, f.eventTarget, f.curEventTarget, g]);
      }
    } else {
      let c = !1;
      if (!q.supportsPointerEvent && /mouse/.test(i.type)) {
        for (let l = 0; l < n.length && !c; l++)
          c = n[l].pointerType !== "mouse" && n[l].pointerIsDown;
        c = c || e.now() - e.prevTouchTime < 500 || // on iOS and Firefox Mobile, MouseEvent.timeStamp is zero if simulated
        i.timeStamp === 0;
      }
      if (!c) {
        const l = {
          pointer: i,
          pointerId: Xt(i),
          pointerType: s,
          eventType: i.type,
          curEventTarget: o,
          eventTarget: r,
          scope: e
        }, u = ei(l);
        a.push([l.pointer, l.eventTarget, l.curEventTarget, u]);
      }
    }
    for (const [c, l, u, f] of a)
      f[t](c, i, l, u);
  };
}
function ei(t) {
  const {
    pointerType: e,
    scope: i
  } = t, s = {
    interaction: Xs.search(t),
    searchDetails: t
  };
  return i.fire("interactions:find", s), s.interaction || i.interactions.new({
    pointerType: e
  });
}
function ee({
  doc: t,
  scope: e,
  options: i
}, n) {
  const {
    interactions: {
      docEvents: s
    },
    events: r
  } = e, o = r[n];
  e.browser.isIOS && !i.events && (i.events = {
    passive: !1
  });
  for (const c in r.delegatedEvents)
    o(t, c, r.delegateListener), o(t, c, r.delegateUseCapture, !0);
  const a = i && i.events;
  for (const {
    type: c,
    listener: l
  } of s)
    o(t, c, l, a);
}
const qs = {
  id: "core/interactions",
  install: Ys,
  listeners: {
    "scope:add-document": (t) => ee(t, "add"),
    "scope:remove-document": (t) => ee(t, "remove"),
    "interactable:unset": ({
      interactable: t
    }, e) => {
      for (let i = e.interactions.list.length - 1; i >= 0; i--) {
        const n = e.interactions.list[i];
        n.interactable === t && (n.stop(), e.fire("interactions:destroy", {
          interaction: n
        }), n.destroy(), e.interactions.list.length > 2 && e.interactions.list.splice(i, 1));
      }
    }
  },
  onDocSignal: ee,
  doOnInteractions: Bi,
  methodNames: Ai
}, Gs = qs;
class Us {
  constructor() {
    d(this, "id", `__interact_scope_${Math.floor(Math.random() * 100)}`);
    d(this, "isInitialized", !1);
    d(this, "listenerMaps", []);
    d(this, "browser", q);
    d(this, "defaults", Et(_i));
    d(this, "Eventable", Ti);
    d(this, "actions", {
      map: {},
      phases: {
        start: !0,
        move: !0,
        end: !0
      },
      methodDict: {},
      phaselessTypes: {}
    });
    d(this, "interactStatic", Cs(this));
    d(this, "InteractEvent", Ie);
    d(this, "Interactable");
    d(this, "interactables", new _s(this));
    // main window
    d(this, "_win");
    // main document
    d(this, "document");
    // main window
    d(this, "window");
    // all documents being listened to
    d(this, "documents", []);
    d(this, "_plugins", {
      list: [],
      map: {}
    });
    d(this, "onWindowUnload", (e) => this.removeDocument(e.target));
    const e = this;
    this.Interactable = class extends Rs {
      get _defaults() {
        return e.defaults;
      }
      set(i) {
        return super.set(i), e.fire("interactable:set", {
          options: i,
          interactable: this
        }), this;
      }
      unset() {
        super.unset();
        const i = e.interactables.list.indexOf(this);
        i < 0 || (super.unset(), e.interactables.list.splice(i, 1), e.fire("interactable:unset", {
          interactable: this
        }));
      }
    };
  }
  addListeners(e, i) {
    this.listenerMaps.push({
      id: i,
      map: e
    });
  }
  fire(e, i) {
    for (const {
      map: {
        [e]: n
      }
    } of this.listenerMaps)
      if (n && n(i, this, e) === !1)
        return !1;
  }
  init(e) {
    return this.isInitialized ? this : Ks(this, e);
  }
  pluginIsInstalled(e) {
    return this._plugins.map[e.id] || this._plugins.list.indexOf(e) !== -1;
  }
  usePlugin(e, i) {
    if (!this.isInitialized)
      return this;
    if (this.pluginIsInstalled(e))
      return this;
    if (e.id && (this._plugins.map[e.id] = e), this._plugins.list.push(e), e.install && e.install(this, i), e.listeners && e.before) {
      let n = 0;
      const s = this.listenerMaps.length, r = e.before.reduce((o, a) => (o[a] = !0, o[ii(a)] = !0, o), {});
      for (; n < s; n++) {
        const o = this.listenerMaps[n].id;
        if (r[o] || r[ii(o)])
          break;
      }
      this.listenerMaps.splice(n, 0, {
        id: e.id,
        map: e.listeners
      });
    } else
      e.listeners && this.listenerMaps.push({
        id: e.id,
        map: e.listeners
      });
    return this;
  }
  addDocument(e, i) {
    if (this.getDocIndex(e) !== -1)
      return !1;
    const n = ht(e);
    i = i ? w({}, i) : {}, this.documents.push({
      doc: e,
      options: i
    }), this.events.documents.push(e), e !== this.document && this.events.add(n, "unload", this.onWindowUnload), this.fire("scope:add-document", {
      doc: e,
      window: n,
      scope: this,
      options: i
    });
  }
  removeDocument(e) {
    const i = this.getDocIndex(e), n = ht(e), s = this.documents[i].options;
    this.events.remove(n, "unload", this.onWindowUnload), this.documents.splice(i, 1), this.events.documents.splice(i, 1), this.fire("scope:remove-document", {
      doc: e,
      window: n,
      scope: this,
      options: s
    });
  }
  getDocIndex(e) {
    for (let i = 0; i < this.documents.length; i++)
      if (this.documents[i].doc === e)
        return i;
    return -1;
  }
  getDocOptions(e) {
    const i = this.getDocIndex(e);
    return i === -1 ? null : this.documents[i].options;
  }
  now() {
    return (this.window.Date || Date).now();
  }
}
function Ks(t, e) {
  return t.isInitialized = !0, p.window(e) && Ei(e), L.init(e), q.init(e), xt.init(e), t.window = e, t.document = e.document, t.usePlugin(Gs), t.usePlugin($s), t;
}
function ii(t) {
  return t && t.replace(/\/.*$/, "");
}
const Li = new Us(), Vs = Li.interactStatic, Q = Vs, Js = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : globalThis;
Li.init(Js);
function Zs(t) {
  const {
    /** @lends Interactable */
    Interactable: e
    // tslint:disable-line no-shadowed-variable
  } = t;
  e.prototype.getAction = function(n, s, r, o) {
    const a = Qs(this, s, r, o, t);
    return this.options.actionChecker ? this.options.actionChecker(n, s, a, this, o, r) : a;
  }, e.prototype.ignoreFrom = Pt(function(i) {
    return this._backCompatOption("ignoreFrom", i);
  }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), e.prototype.allowFrom = Pt(function(i) {
    return this._backCompatOption("allowFrom", i);
  }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), e.prototype.actionChecker = er, e.prototype.styleCursor = tr;
}
function Qs(t, e, i, n, s) {
  const r = t.getRect(n), o = e.buttons || {
    0: 1,
    1: 4,
    3: 8,
    4: 16
  }[e.button], a = {
    action: null,
    interactable: t,
    interaction: i,
    element: n,
    rect: r,
    buttons: o
  };
  return s.fire("auto-start:check", a), a.action;
}
function tr(t) {
  return p.bool(t) ? (this.options.styleCursor = t, this) : t === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
}
function er(t) {
  return p.func(t) ? (this.options.actionChecker = t, this) : t === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
}
const ir = {
  id: "auto-start/interactableMethods",
  install: Zs
};
function nr(t) {
  const {
    interactStatic: e,
    defaults: i
  } = t;
  t.usePlugin(ir), i.base.actionChecker = null, i.base.styleCursor = !0, w(i.perAction, {
    manualStart: !1,
    max: 1 / 0,
    maxPerElement: 1,
    allowFrom: null,
    ignoreFrom: null,
    // only allow left button by default
    // see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons#Return_value
    mouseButtons: 1
  }), e.maxInteractions = (n) => Fi(n, t), t.autoStart = {
    // Allow this many interactions to happen simultaneously
    maxInteractions: 1 / 0,
    withinInteractionLimit: Zt,
    cursorElement: null
  };
}
function sr({
  interaction: t,
  pointer: e,
  event: i,
  eventTarget: n
}, s) {
  if (t.interacting())
    return;
  const r = ji(t, e, i, n, s);
  Ni(t, r, s);
}
function rr({
  interaction: t,
  pointer: e,
  event: i,
  eventTarget: n
}, s) {
  if (t.pointerType !== "mouse" || t.pointerIsDown || t.interacting())
    return;
  const r = ji(t, e, i, n, s);
  Ni(t, r, s);
}
function or(t, e) {
  const {
    interaction: i
  } = t;
  if (!i.pointerIsDown || i.interacting() || !i.pointerWasMoved || !i.prepared.name)
    return;
  e.fire("autoStart:before-start", t);
  const {
    interactable: n
  } = i, s = i.prepared.name;
  s && n && (n.options[s].manualStart || !Zt(n, i.element, i.prepared, e) ? i.stop() : (i.start(i.prepared, n, i.element), Xi(i, e)));
}
function ar({
  interaction: t
}, e) {
  const {
    interactable: i
  } = t;
  i && i.options.styleCursor && ve(t.element, "", e);
}
function Wi(t, e, i, n, s) {
  return e.testIgnoreAllow(e.options[t.name], i, n) && e.options[t.name].enabled && Zt(e, i, t, s) ? t : null;
}
function lr(t, e, i, n, s, r, o) {
  for (let a = 0, c = n.length; a < c; a++) {
    const l = n[a], u = s[a], f = l.getAction(e, i, t, u);
    if (!f)
      continue;
    const g = Wi(f, l, u, r, o);
    if (g)
      return {
        action: g,
        interactable: l,
        element: u
      };
  }
  return {
    action: null,
    interactable: null,
    element: null
  };
}
function ji(t, e, i, n, s) {
  let r = [], o = [], a = n;
  function c(l) {
    r.push(l), o.push(a);
  }
  for (; p.element(a); ) {
    r = [], o = [], s.interactables.forEachMatch(a, c);
    const l = lr(t, e, i, r, o, n, s);
    if (l.action && !l.interactable.options[l.action.name].manualStart)
      return l;
    a = nt(a);
  }
  return {
    action: null,
    interactable: null,
    element: null
  };
}
function Ni(t, {
  action: e,
  interactable: i,
  element: n
}, s) {
  e = e || {
    name: null
  }, t.interactable = i, t.element = n, Pi(t.prepared, e), t.rect = i && e.name ? i.getRect(n) : null, Xi(t, s), s.fire("autoStart:prepared", {
    interaction: t
  });
}
function Zt(t, e, i, n) {
  const s = t.options, r = s[i.name].max, o = s[i.name].maxPerElement, a = n.autoStart.maxInteractions;
  let c = 0, l = 0, u = 0;
  if (!(r && o && a))
    return !1;
  for (const f of n.interactions.list) {
    const g = f.prepared.name;
    if (f.interacting()) {
      if (c++, c >= a)
        return !1;
      if (f.interactable === t && (l += g === i.name ? 1 : 0, l >= r || f.element === e && (u++, g === i.name && u >= o)))
        return !1;
    }
  }
  return a > 0;
}
function Fi(t, e) {
  return p.number(t) ? (e.autoStart.maxInteractions = t, this) : e.autoStart.maxInteractions;
}
function ve(t, e, i) {
  const {
    cursorElement: n
  } = i.autoStart;
  n && n !== t && (n.style.cursor = ""), t.ownerDocument.documentElement.style.cursor = e, t.style.cursor = e, i.autoStart.cursorElement = e ? t : null;
}
function Xi(t, e) {
  const {
    interactable: i,
    element: n,
    prepared: s
  } = t;
  if (!(t.pointerType === "mouse" && i && i.options.styleCursor)) {
    e.autoStart.cursorElement && ve(e.autoStart.cursorElement, "", e);
    return;
  }
  let r = "";
  if (s.name) {
    const o = i.options[s.name].cursorChecker;
    p.func(o) ? r = o(s, i, n, t._interacting) : r = e.actions.map[s.name].getCursor(s);
  }
  ve(t.element, r || "", e);
}
const cr = {
  id: "auto-start/base",
  before: ["actions"],
  install: nr,
  listeners: {
    "interactions:down": sr,
    "interactions:move": (t, e) => {
      rr(t, e), or(t, e);
    },
    "interactions:stop": ar
  },
  maxInteractions: Fi,
  withinInteractionLimit: Zt,
  validateAction: Wi
}, Te = cr;
function ur({
  interaction: t,
  eventTarget: e,
  dx: i,
  dy: n
}, s) {
  if (t.prepared.name !== "drag")
    return;
  const r = Math.abs(i), o = Math.abs(n), a = t.interactable.options.drag, c = a.startAxis, l = r > o ? "x" : r < o ? "y" : "xy";
  if (t.prepared.axis = a.lockAxis === "start" ? l[0] : a.lockAxis, l !== "xy" && c !== "xy" && c !== l) {
    t.prepared.name = null;
    let u = e;
    const f = function(g) {
      if (g === t.interactable)
        return;
      const y = t.interactable.options.drag;
      if (!y.manualStart && g.testIgnoreAllow(y, u, e)) {
        const v = g.getAction(t.downPointer, t.downEvent, t, u);
        if (v && v.name === "drag" && hr(l, g) && Te.validateAction(v, g, u, e, s))
          return g;
      }
    };
    for (; p.element(u); ) {
      const g = s.interactables.forEachMatch(u, f);
      if (g) {
        t.prepared.name = "drag", t.interactable = g, t.element = u;
        break;
      }
      u = nt(u);
    }
  }
}
function hr(t, e) {
  if (!e)
    return !1;
  const i = e.options.drag.startAxis;
  return t === "xy" || i === "xy" || i === t;
}
const fr = {
  id: "auto-start/dragAxis",
  listeners: {
    "autoStart:before-start": ur
  }
};
function dr(t) {
  const {
    defaults: e
  } = t;
  t.usePlugin(Te), e.perAction.hold = 0, e.perAction.delay = 0;
}
function ie(t) {
  const e = t.prepared && t.prepared.name;
  if (!e)
    return null;
  const i = t.interactable.options;
  return i[e].hold || i[e].delay;
}
const pr = {
  id: "auto-start/hold",
  install: dr,
  listeners: {
    "interactions:new": ({
      interaction: t
    }) => {
      t.autoStartHoldTimer = null;
    },
    "autoStart:prepared": ({
      interaction: t
    }) => {
      const e = ie(t);
      e > 0 && (t.autoStartHoldTimer = setTimeout(() => {
        t.start(t.prepared, t.interactable, t.element);
      }, e));
    },
    "interactions:move": ({
      interaction: t,
      duplicate: e
    }) => {
      t.autoStartHoldTimer && t.pointerWasMoved && !e && (clearTimeout(t.autoStartHoldTimer), t.autoStartHoldTimer = null);
    },
    // prevent regular down->move autoStart
    "autoStart:before-start": ({
      interaction: t
    }) => {
      ie(t) > 0 && (t.prepared.name = null);
    }
  },
  getHoldDuration: ie
}, gr = pr, mr = {
  id: "auto-start",
  install(t) {
    t.usePlugin(Te), t.usePlugin(gr), t.usePlugin(fr);
  }
};
Q.use(mr);
function yr(t) {
  const {
    defaults: e,
    actions: i
  } = t;
  t.autoScroll = E, E.now = () => t.now(), i.phaselessTypes.autoscroll = !0, e.perAction.autoScroll = E.defaults;
}
const E = {
  defaults: {
    enabled: !1,
    margin: 60,
    // the item that is scrolled (Window or HTMLElement)
    container: null,
    // the scroll speed in pixels per second
    speed: 300
  },
  now: Date.now,
  interaction: null,
  i: 0,
  // the handle returned by window.setInterval
  // Direction each pulse is to scroll in
  x: 0,
  y: 0,
  isScrolling: !1,
  prevTime: 0,
  margin: 0,
  speed: 0,
  start(t) {
    E.isScrolling = !0, xt.cancel(E.i), t.autoScroll = E, E.interaction = t, E.prevTime = E.now(), E.i = xt.request(E.scroll);
  },
  stop() {
    E.isScrolling = !1, E.interaction && (E.interaction.autoScroll = null), xt.cancel(E.i);
  },
  // scroll the window by the values in scroll.x/y
  scroll() {
    const {
      interaction: t
    } = E, {
      interactable: e,
      element: i
    } = t, n = t.prepared.name, s = e.options[n].autoScroll, r = ni(s.container, e, i), o = E.now(), a = (o - E.prevTime) / 1e3, c = s.speed * a;
    if (c >= 1) {
      const l = {
        x: E.x * c,
        y: E.y * c
      };
      if (l.x || l.y) {
        const u = si(r);
        p.window(r) ? r.scrollBy(l.x, l.y) : r && (r.scrollLeft += l.x, r.scrollTop += l.y);
        const f = si(r), g = {
          x: f.x - u.x,
          y: f.y - u.y
        };
        (g.x || g.y) && e.fire({
          type: "autoscroll",
          target: i,
          interactable: e,
          delta: g,
          interaction: t,
          container: r
        });
      }
      E.prevTime = o;
    }
    E.isScrolling && (xt.cancel(E.i), E.i = xt.request(E.scroll));
  },
  check(t, e) {
    var i;
    return (i = t.options[e].autoScroll) == null ? void 0 : i.enabled;
  },
  onInteractionMove({
    interaction: t,
    pointer: e
  }) {
    if (!(t.interacting() && E.check(t.interactable, t.prepared.name)))
      return;
    if (t.simulation) {
      E.x = E.y = 0;
      return;
    }
    let i, n, s, r;
    const {
      interactable: o,
      element: a
    } = t, c = t.prepared.name, l = o.options[c].autoScroll, u = ni(l.container, o, a);
    if (p.window(u))
      r = e.clientX < E.margin, i = e.clientY < E.margin, n = e.clientX > u.innerWidth - E.margin, s = e.clientY > u.innerHeight - E.margin;
    else {
      const f = we(u);
      r = e.clientX < f.left + E.margin, i = e.clientY < f.top + E.margin, n = e.clientX > f.right - E.margin, s = e.clientY > f.bottom - E.margin;
    }
    E.x = n ? 1 : r ? -1 : 0, E.y = s ? 1 : i ? -1 : 0, E.isScrolling || (E.margin = l.margin, E.speed = l.speed, E.start(t));
  }
};
function ni(t, e, i) {
  return (p.string(t) ? Ci(t, e, i) : t) || ht(i);
}
function si(t) {
  return p.window(t) && (t = window.document.body), {
    x: t.scrollLeft,
    y: t.scrollTop
  };
}
const vr = {
  id: "auto-scroll",
  install: yr,
  listeners: {
    "interactions:new": ({
      interaction: t
    }) => {
      t.autoScroll = null;
    },
    "interactions:destroy": ({
      interaction: t
    }) => {
      t.autoScroll = null, E.stop(), E.interaction && (E.interaction = null);
    },
    "interactions:stop": E.stop,
    "interactions:action-move": (t) => E.onInteractionMove(t)
  }
}, br = vr;
Q.use(br);
function xr(t) {
  const {
    actions: e,
    Interactable: i,
    defaults: n
  } = t;
  i.prototype.draggable = Wt.draggable, e.map.drag = Wt, e.methodDict.drag = "draggable", n.actions.drag = Wt.defaults;
}
function ne({
  interaction: t
}) {
  if (t.prepared.name !== "drag")
    return;
  const e = t.prepared.axis;
  e === "x" ? (t.coords.cur.page.y = t.coords.start.page.y, t.coords.cur.client.y = t.coords.start.client.y, t.coords.velocity.client.y = 0, t.coords.velocity.page.y = 0) : e === "y" && (t.coords.cur.page.x = t.coords.start.page.x, t.coords.cur.client.x = t.coords.start.client.x, t.coords.velocity.client.x = 0, t.coords.velocity.page.x = 0);
}
function ri({
  iEvent: t,
  interaction: e
}) {
  if (e.prepared.name !== "drag")
    return;
  const i = e.prepared.axis;
  if (i === "x" || i === "y") {
    const n = i === "x" ? "y" : "x";
    t.page[n] = e.coords.start.page[n], t.client[n] = e.coords.start.client[n], t.delta[n] = 0;
  }
}
const wr = function(e) {
  return p.object(e) ? (this.options.drag.enabled = e.enabled !== !1, this.setPerAction("drag", e), this.setOnEvents("drag", e), /^(xy|x|y|start)$/.test(e.lockAxis) && (this.options.drag.lockAxis = e.lockAxis), /^(xy|x|y)$/.test(e.startAxis) && (this.options.drag.startAxis = e.startAxis), this) : p.bool(e) ? (this.options.drag.enabled = e, this) : this.options.drag;
}, Wt = {
  id: "actions/drag",
  install: xr,
  listeners: {
    "interactions:before-action-move": ne,
    "interactions:action-resume": ne,
    // dragmove
    "interactions:action-move": ri,
    "auto-start:check": (t) => {
      const {
        interaction: e,
        interactable: i,
        buttons: n
      } = t, s = i.options.drag;
      if (!(!(s && s.enabled) || // check mouseButton setting if the pointer is down
      e.pointerIsDown && /mouse|pointer/.test(e.pointerType) && !(n & i.options.drag.mouseButtons)))
        return t.action = {
          name: "drag",
          axis: s.lockAxis === "start" ? s.startAxis : s.lockAxis
        }, !1;
    }
  },
  draggable: wr,
  beforeMove: ne,
  move: ri,
  defaults: {
    startAxis: "xy",
    lockAxis: "xy"
  },
  getCursor() {
    return "move";
  }
}, Sr = Wt;
Q.use(Sr);
function Er(t) {
  const {
    actions: e,
    browser: i,
    /** @lends Interactable */
    Interactable: n,
    // tslint:disable-line no-shadowed-variable
    defaults: s
  } = t;
  Z.cursors = Tr(i), Z.defaultMargin = i.supportsTouch || i.supportsPointerEvent ? 20 : 10, n.prototype.resizable = function(r) {
    return Ir(this, r, t);
  }, e.map.resize = Z, e.methodDict.resize = "resizable", s.actions.resize = Z.defaults;
}
function zr(t) {
  const {
    interaction: e,
    interactable: i,
    element: n,
    rect: s,
    buttons: r
  } = t;
  if (!s)
    return;
  const o = w({}, e.coords.cur.page), a = i.options.resize;
  if (!(!(a && a.enabled) || // check mouseButton setting if the pointer is down
  e.pointerIsDown && /mouse|pointer/.test(e.pointerType) && !(r & a.mouseButtons))) {
    if (p.object(a.edges)) {
      const c = {
        left: !1,
        right: !1,
        top: !1,
        bottom: !1
      };
      for (const l in c)
        c[l] = Mr(l, a.edges[l], o, e._latestPointer.eventTarget, n, s, a.margin || Z.defaultMargin);
      c.left = c.left && !c.right, c.top = c.top && !c.bottom, (c.left || c.right || c.top || c.bottom) && (t.action = {
        name: "resize",
        edges: c
      });
    } else {
      const c = a.axis !== "y" && o.x > s.right - Z.defaultMargin, l = a.axis !== "x" && o.y > s.bottom - Z.defaultMargin;
      (c || l) && (t.action = {
        name: "resize",
        axes: (c ? "x" : "") + (l ? "y" : "")
      });
    }
    return t.action ? !1 : void 0;
  }
}
function Ir(t, e, i) {
  return p.object(e) ? (t.options.resize.enabled = e.enabled !== !1, t.setPerAction("resize", e), t.setOnEvents("resize", e), p.string(e.axis) && /^x$|^y$|^xy$/.test(e.axis) ? t.options.resize.axis = e.axis : e.axis === null && (t.options.resize.axis = i.defaults.actions.resize.axis), p.bool(e.preserveAspectRatio) ? t.options.resize.preserveAspectRatio = e.preserveAspectRatio : p.bool(e.square) && (t.options.resize.square = e.square), t) : p.bool(e) ? (t.options.resize.enabled = e, t) : t.options.resize;
}
function Mr(t, e, i, n, s, r, o) {
  if (!e)
    return !1;
  if (e === !0) {
    const a = p.number(r.width) ? r.width : r.right - r.left, c = p.number(r.height) ? r.height : r.bottom - r.top;
    if (o = Math.min(o, Math.abs((t === "left" || t === "right" ? a : c) / 2)), a < 0 && (t === "left" ? t = "right" : t === "right" && (t = "left")), c < 0 && (t === "top" ? t = "bottom" : t === "bottom" && (t = "top")), t === "left") {
      const l = a >= 0 ? r.left : r.right;
      return i.x < l + o;
    }
    if (t === "top") {
      const l = c >= 0 ? r.top : r.bottom;
      return i.y < l + o;
    }
    if (t === "right")
      return i.x > (a >= 0 ? r.right : r.left) - o;
    if (t === "bottom")
      return i.y > (c >= 0 ? r.bottom : r.top) - o;
  }
  return p.element(n) ? p.element(e) ? (
    // the value is an element to use as a resize handle
    e === n
  ) : (
    // otherwise check if element matches value as selector
    de(n, e, s)
  ) : !1;
}
function Tr(t) {
  return t.isIe9 ? {
    x: "e-resize",
    y: "s-resize",
    xy: "se-resize",
    top: "n-resize",
    left: "w-resize",
    bottom: "s-resize",
    right: "e-resize",
    topleft: "se-resize",
    bottomright: "se-resize",
    topright: "ne-resize",
    bottomleft: "ne-resize"
  } : {
    x: "ew-resize",
    y: "ns-resize",
    xy: "nwse-resize",
    top: "ns-resize",
    left: "ew-resize",
    bottom: "ns-resize",
    right: "ew-resize",
    topleft: "nwse-resize",
    bottomright: "nwse-resize",
    topright: "nesw-resize",
    bottomleft: "nesw-resize"
  };
}
function Dr({
  iEvent: t,
  interaction: e
}) {
  if (e.prepared.name !== "resize" || !e.prepared.edges)
    return;
  const i = t, n = e.rect;
  e._rects = {
    start: w({}, n),
    corrected: w({}, n),
    previous: w({}, n),
    delta: {
      left: 0,
      right: 0,
      width: 0,
      top: 0,
      bottom: 0,
      height: 0
    }
  }, i.edges = e.prepared.edges, i.rect = e._rects.corrected, i.deltaRect = e._rects.delta;
}
function Cr({
  iEvent: t,
  interaction: e
}) {
  if (e.prepared.name !== "resize" || !e.prepared.edges)
    return;
  const i = t, s = e.interactable.options.resize.invert, r = s === "reposition" || s === "negate", o = e.rect, {
    start: a,
    corrected: c,
    delta: l,
    previous: u
  } = e._rects;
  if (w(u, c), r) {
    if (w(c, o), s === "reposition") {
      if (c.top > c.bottom) {
        const f = c.top;
        c.top = c.bottom, c.bottom = f;
      }
      if (c.left > c.right) {
        const f = c.left;
        c.left = c.right, c.right = f;
      }
    }
  } else
    c.top = Math.min(o.top, a.bottom), c.bottom = Math.max(o.bottom, a.top), c.left = Math.min(o.left, a.right), c.right = Math.max(o.right, a.left);
  c.width = c.right - c.left, c.height = c.bottom - c.top;
  for (const f in c)
    l[f] = c[f] - u[f];
  i.edges = e.prepared.edges, i.rect = c, i.deltaRect = l;
}
function Rr({
  iEvent: t,
  interaction: e
}) {
  if (e.prepared.name !== "resize" || !e.prepared.edges)
    return;
  const i = t;
  i.edges = e.prepared.edges, i.rect = e._rects.corrected, i.deltaRect = e._rects.delta;
}
function oi({
  iEvent: t,
  interaction: e
}) {
  if (e.prepared.name !== "resize" || !e.resizeAxes)
    return;
  const i = e.interactable.options, n = t;
  i.resize.square ? (e.resizeAxes === "y" ? n.delta.x = n.delta.y : n.delta.y = n.delta.x, n.axes = "xy") : (n.axes = e.resizeAxes, e.resizeAxes === "x" ? n.delta.y = 0 : e.resizeAxes === "y" && (n.delta.x = 0));
}
const Z = {
  id: "actions/resize",
  before: ["actions/drag"],
  install: Er,
  listeners: {
    "interactions:new": ({
      interaction: t
    }) => {
      t.resizeAxes = "xy";
    },
    "interactions:action-start": (t) => {
      Dr(t), oi(t);
    },
    "interactions:action-move": (t) => {
      Cr(t), oi(t);
    },
    "interactions:action-end": Rr,
    "auto-start:check": zr
  },
  defaults: {
    square: !1,
    preserveAspectRatio: !1,
    axis: "xy",
    // use default margin
    margin: NaN,
    // object with props left, right, top, bottom which are
    // true/false values to resize when the pointer is over that edge,
    // CSS selectors to match the handles for each direction
    // or the Elements for each handle
    edges: null,
    // a value of 'none' will limit the resize rect to a minimum of 0x0
    // 'negate' will alow the rect to have negative width/height
    // 'reposition' will keep the width/height positive by swapping
    // the top and bottom edges and/or swapping the left and right edges
    invert: "none"
  },
  cursors: null,
  getCursor({
    edges: t,
    axis: e,
    name: i
  }) {
    const n = Z.cursors;
    let s = null;
    if (e)
      s = n[i + e];
    else if (t) {
      let r = "";
      for (const o of ["top", "bottom", "left", "right"])
        t[o] && (r += o);
      s = n[r];
    }
    return s;
  },
  defaultMargin: null
}, _r = Z;
Q.use(_r);
const Pr = () => {
}, kr = () => {
}, $r = (t) => {
  const e = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(([n, s]) => n in t || s in t), i = (n, s) => {
    const {
      range: r,
      limits: o = {
        left: -1 / 0,
        right: 1 / 0,
        top: -1 / 0,
        bottom: 1 / 0
      },
      offset: a = {
        x: 0,
        y: 0
      }
    } = t, c = {
      range: r,
      grid: t,
      x: null,
      y: null
    };
    for (const [l, u] of e) {
      const f = Math.round((n - a.x) / t[l]), g = Math.round((s - a.y) / t[u]);
      c[l] = Math.max(o.left, Math.min(o.right, f * t[l] + a.x)), c[u] = Math.max(o.top, Math.min(o.bottom, g * t[u] + a.y));
    }
    return c;
  };
  return i.grid = t, i.coordFields = e, i;
}, Or = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  edgeTarget: Pr,
  elements: kr,
  grid: $r
}, Symbol.toStringTag, { value: "Module" })), Hr = {
  id: "snappers",
  install(t) {
    const {
      interactStatic: e
    } = t;
    e.snappers = w(e.snappers || {}, Or), e.createSnapGrid = e.snappers.grid;
  }
}, Ar = Hr;
class Yi {
  constructor(e) {
    d(this, "states", []);
    d(this, "startOffset", {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    });
    d(this, "startDelta");
    d(this, "result");
    d(this, "endResult");
    d(this, "edges");
    d(this, "interaction");
    this.interaction = e, this.result = Bt();
  }
  start({
    phase: e
  }, i) {
    const {
      interaction: n
    } = this, s = Br(n);
    this.prepareStates(s), this.edges = w({}, n.edges), this.startOffset = Lr(n.rect, i), this.startDelta = {
      x: 0,
      y: 0
    };
    const r = this.fillArg({
      phase: e,
      pageCoords: i,
      preEnd: !1
    });
    return this.result = Bt(), this.startAll(r), this.result = this.setAll(r);
  }
  fillArg(e) {
    const {
      interaction: i
    } = this;
    return e.interaction = i, e.interactable = i.interactable, e.element = i.element, e.rect = e.rect || i.rect, e.edges = this.edges, e.startOffset = this.startOffset, e;
  }
  startAll(e) {
    for (const i of this.states)
      i.methods.start && (e.state = i, i.methods.start(e));
  }
  setAll(e) {
    const {
      phase: i,
      preEnd: n,
      skipModifiers: s,
      rect: r
    } = e;
    e.coords = w({}, e.pageCoords), e.rect = w({}, r);
    const o = s ? this.states.slice(s) : this.states, a = Bt(e.coords, e.rect);
    for (const f of o) {
      var c;
      const {
        options: g
      } = f, y = w({}, e.coords);
      let v = null;
      (c = f.methods) != null && c.set && this.shouldDo(g, n, i) && (e.state = f, v = f.methods.set(e), Ee(this.interaction.edges, e.rect, {
        x: e.coords.x - y.x,
        y: e.coords.y - y.y
      })), a.eventProps.push(v);
    }
    a.delta.x = e.coords.x - e.pageCoords.x, a.delta.y = e.coords.y - e.pageCoords.y, a.rectDelta.left = e.rect.left - r.left, a.rectDelta.right = e.rect.right - r.right, a.rectDelta.top = e.rect.top - r.top, a.rectDelta.bottom = e.rect.bottom - r.bottom;
    const l = this.result.coords, u = this.result.rect;
    if (l && u) {
      const f = a.rect.left !== u.left || a.rect.right !== u.right || a.rect.top !== u.top || a.rect.bottom !== u.bottom;
      a.changed = f || l.x !== a.coords.x || l.y !== a.coords.y;
    }
    return a;
  }
  applyToInteraction(e) {
    const {
      interaction: i
    } = this, {
      phase: n
    } = e, s = i.coords.cur, r = i.coords.start, {
      result: o,
      startDelta: a
    } = this, c = o.delta;
    n === "start" && w(this.startDelta, o.delta);
    for (const [f, g] of [[r, a], [s, c]])
      f.page.x += g.x, f.page.y += g.y, f.client.x += g.x, f.client.y += g.y;
    const {
      rectDelta: l
    } = this.result, u = e.rect || i.rect;
    u.left += l.left, u.right += l.right, u.top += l.top, u.bottom += l.bottom, u.width = u.right - u.left, u.height = u.bottom - u.top;
  }
  setAndApply(e) {
    const {
      interaction: i
    } = this, {
      phase: n,
      preEnd: s,
      skipModifiers: r
    } = e, o = this.setAll(this.fillArg({
      preEnd: s,
      phase: n,
      pageCoords: e.modifiedCoords || i.coords.cur.page
    }));
    if (this.result = o, !o.changed && (!r || r < this.states.length) && i.interacting())
      return !1;
    if (e.modifiedCoords) {
      const {
        page: a
      } = i.coords.cur, c = {
        x: e.modifiedCoords.x - a.x,
        y: e.modifiedCoords.y - a.y
      };
      o.coords.x += c.x, o.coords.y += c.y, o.delta.x += c.x, o.delta.y += c.y;
    }
    this.applyToInteraction(e);
  }
  beforeEnd(e) {
    const {
      interaction: i,
      event: n
    } = e, s = this.states;
    if (!s || !s.length)
      return;
    let r = !1;
    for (const o of s) {
      e.state = o;
      const {
        options: a,
        methods: c
      } = o, l = c.beforeEnd && c.beforeEnd(e);
      if (l)
        return this.endResult = l, !1;
      r = r || !r && this.shouldDo(a, !0, e.phase, !0);
    }
    r && i.move({
      event: n,
      preEnd: !0
    });
  }
  stop(e) {
    const {
      interaction: i
    } = e;
    if (!this.states || !this.states.length)
      return;
    const n = w({
      states: this.states,
      interactable: i.interactable,
      element: i.element,
      rect: null
    }, e);
    this.fillArg(n);
    for (const s of this.states)
      n.state = s, s.methods.stop && s.methods.stop(n);
    this.states = null, this.endResult = null;
  }
  prepareStates(e) {
    this.states = [];
    for (let i = 0; i < e.length; i++) {
      const {
        options: n,
        methods: s,
        name: r
      } = e[i];
      this.states.push({
        options: n,
        methods: s,
        index: i,
        name: r
      });
    }
    return this.states;
  }
  restoreInteractionCoords({
    interaction: {
      coords: e,
      rect: i,
      modification: n
    }
  }) {
    if (!n.result)
      return;
    const {
      startDelta: s
    } = n, {
      delta: r,
      rectDelta: o
    } = n.result, a = [[e.start, s], [e.cur, r]];
    for (const [c, l] of a)
      c.page.x -= l.x, c.page.y -= l.y, c.client.x -= l.x, c.client.y -= l.y;
    i.left -= o.left, i.right -= o.right, i.top -= o.top, i.bottom -= o.bottom;
  }
  shouldDo(e, i, n, s) {
    return (
      // ignore disabled modifiers
      !(!e || e.enabled === !1 || // check if we require endOnly option to fire move before end
      s && !e.endOnly || // don't apply endOnly modifiers when not ending
      e.endOnly && !i || // check if modifier should run be applied on start
      n === "start" && !e.setStart)
    );
  }
  copyFrom(e) {
    this.startOffset = e.startOffset, this.startDelta = e.startDelta, this.edges = e.edges, this.states = e.states.map((i) => Et(i)), this.result = Bt(w({}, e.result.coords), w({}, e.result.rect));
  }
  destroy() {
    for (const e in this)
      this[e] = null;
  }
}
function Bt(t, e) {
  return {
    rect: e,
    coords: t,
    delta: {
      x: 0,
      y: 0
    },
    rectDelta: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventProps: [],
    changed: !0
  };
}
function Br(t) {
  const e = t.interactable.options[t.prepared.name], i = e.modifiers;
  return i && i.length ? i : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map((n) => {
    const s = e[n];
    return s && s.enabled && {
      options: s,
      methods: s._methods
    };
  }).filter((n) => !!n);
}
function Lr(t, e) {
  return t ? {
    left: e.x - t.left,
    top: e.y - t.top,
    right: t.right - e.x,
    bottom: t.bottom - e.y
  } : {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  };
}
function st(t, e) {
  const {
    defaults: i
  } = t, n = {
    start: t.start,
    set: t.set,
    beforeEnd: t.beforeEnd,
    stop: t.stop
  }, s = (r) => {
    const o = r || {};
    o.enabled = o.enabled !== !1;
    for (const c in i)
      c in o || (o[c] = i[c]);
    const a = {
      options: o,
      methods: n,
      name: e,
      enable: () => (o.enabled = !0, a),
      disable: () => (o.enabled = !1, a)
    };
    return a;
  };
  return e && typeof e == "string" && (s._defaults = i, s._methods = n), s;
}
function se({
  iEvent: t,
  interaction: e
}) {
  const i = e.modification.result;
  i && (t.modifiers = i.eventProps);
}
const Wr = {
  id: "modifiers/base",
  before: ["actions"],
  install: (t) => {
    t.defaults.perAction.modifiers = [];
  },
  listeners: {
    "interactions:new": ({
      interaction: t
    }) => {
      t.modification = new Yi(t);
    },
    "interactions:before-action-start": (t) => {
      const e = t.interaction.modification;
      e.start(t, t.interaction.coords.start.page), t.interaction.edges = e.edges, e.applyToInteraction(t);
    },
    "interactions:before-action-move": (t) => t.interaction.modification.setAndApply(t),
    "interactions:before-action-end": (t) => t.interaction.modification.beforeEnd(t),
    "interactions:action-start": se,
    "interactions:action-move": se,
    "interactions:action-end": se,
    "interactions:after-action-start": (t) => t.interaction.modification.restoreInteractionCoords(t),
    "interactions:after-action-move": (t) => t.interaction.modification.restoreInteractionCoords(t),
    "interactions:stop": (t) => t.interaction.modification.stop(t)
  }
}, jr = Wr, Nr = {
  start(t) {
    const {
      state: e,
      rect: i,
      edges: n,
      pageCoords: s
    } = t;
    let {
      ratio: r
    } = e.options;
    const {
      equalDelta: o,
      modifiers: a
    } = e.options;
    r === "preserve" && (r = i.width / i.height), e.startCoords = w({}, s), e.startRect = w({}, i), e.ratio = r, e.equalDelta = o;
    const c = e.linkedEdges = {
      top: n.top || n.left && !n.bottom,
      left: n.left || n.top && !n.right,
      bottom: n.bottom || n.right && !n.top,
      right: n.right || n.bottom && !n.left
    };
    if (e.xIsPrimaryAxis = !!(n.left || n.right), e.equalDelta) {
      const u = (c.left ? 1 : -1) * (c.top ? 1 : -1);
      e.edgeSign = {
        x: u,
        y: u
      };
    } else
      e.edgeSign = {
        x: c.left ? -1 : 1,
        y: c.top ? -1 : 1
      };
    if (w(t.edges, c), !a || !a.length)
      return;
    const l = new Yi(t.interaction);
    l.copyFrom(t.interaction.modification), l.prepareStates(a), e.subModification = l, l.startAll({
      ...t
    });
  },
  set(t) {
    const {
      state: e,
      rect: i,
      coords: n
    } = t, s = w({}, n), r = e.equalDelta ? Fr : Xr;
    if (r(e, e.xIsPrimaryAxis, n, i), !e.subModification)
      return null;
    const o = w({}, i);
    Ee(e.linkedEdges, o, {
      x: n.x - s.x,
      y: n.y - s.y
    });
    const a = e.subModification.setAll({
      ...t,
      rect: o,
      edges: e.linkedEdges,
      pageCoords: n,
      prevCoords: n,
      prevRect: o
    }), {
      delta: c
    } = a;
    if (a.changed) {
      const l = Math.abs(c.x) > Math.abs(c.y);
      r(e, l, a.coords, a.rect), w(n, a.coords);
    }
    return a.eventProps;
  },
  defaults: {
    ratio: "preserve",
    equalDelta: !1,
    modifiers: [],
    enabled: !1
  }
};
function Fr({
  startCoords: t,
  edgeSign: e
}, i, n) {
  i ? n.y = t.y + (n.x - t.x) * e.y : n.x = t.x + (n.y - t.y) * e.x;
}
function Xr({
  startRect: t,
  startCoords: e,
  ratio: i,
  edgeSign: n
}, s, r, o) {
  if (s) {
    const a = o.width / i;
    r.y = e.y + (a - t.height) * n.y;
  } else {
    const a = o.height * i;
    r.x = e.x + (a - t.width) * n.x;
  }
}
const Yr = st(Nr, "aspectRatio"), qi = () => {
};
qi._defaults = {};
const Lt = qi;
function qr({
  rect: t,
  startOffset: e,
  state: i,
  interaction: n,
  pageCoords: s
}) {
  const {
    options: r
  } = i, {
    elementRect: o
  } = r, a = w({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  }, r.offset || {});
  if (t && o) {
    const c = dt(r.restriction, n, s);
    if (c) {
      const l = c.right - c.left - t.width, u = c.bottom - c.top - t.height;
      l < 0 && (a.left += l, a.right += l), u < 0 && (a.top += u, a.bottom += u);
    }
    a.left += e.left - t.width * o.left, a.top += e.top - t.height * o.top, a.right += e.right - t.width * (1 - o.right), a.bottom += e.bottom - t.height * (1 - o.bottom);
  }
  i.offset = a;
}
function Gr({
  coords: t,
  interaction: e,
  state: i
}) {
  const {
    options: n,
    offset: s
  } = i, r = dt(n.restriction, e, t);
  if (!r)
    return;
  const o = vs(r);
  t.x = Math.max(Math.min(o.right - s.right, t.x), o.left + s.left), t.y = Math.max(Math.min(o.bottom - s.bottom, t.y), o.top + s.top);
}
function dt(t, e, i) {
  return p.func(t) ? _t(t, e.interactable, e.element, [i.x, i.y, e]) : _t(t, e.interactable, e.element);
}
const Ur = {
  restriction: null,
  elementRect: null,
  offset: null,
  endOnly: !1,
  enabled: !1
}, Yt = {
  start: qr,
  set: Gr,
  defaults: Ur
}, Kr = st(Yt, "restrict"), Gi = {
  top: 1 / 0,
  left: 1 / 0,
  bottom: -1 / 0,
  right: -1 / 0
}, Ui = {
  top: -1 / 0,
  left: -1 / 0,
  bottom: 1 / 0,
  right: 1 / 0
};
function Vr({
  interaction: t,
  startOffset: e,
  state: i
}) {
  const {
    options: n
  } = i;
  let s;
  if (n) {
    const r = dt(n.offset, t, t.coords.start.page);
    s = Vt(r);
  }
  s = s || {
    x: 0,
    y: 0
  }, i.offset = {
    top: s.y + e.top,
    left: s.x + e.left,
    bottom: s.y - e.bottom,
    right: s.x - e.right
  };
}
function Jr({
  coords: t,
  edges: e,
  interaction: i,
  state: n
}) {
  const {
    offset: s,
    options: r
  } = n;
  if (!e)
    return;
  const o = w({}, t), a = dt(r.inner, i, o) || {}, c = dt(r.outer, i, o) || {};
  ai(a, Gi), ai(c, Ui), e.top ? t.y = Math.min(Math.max(c.top + s.top, o.y), a.top + s.top) : e.bottom && (t.y = Math.max(Math.min(c.bottom + s.bottom, o.y), a.bottom + s.bottom)), e.left ? t.x = Math.min(Math.max(c.left + s.left, o.x), a.left + s.left) : e.right && (t.x = Math.max(Math.min(c.right + s.right, o.x), a.right + s.right));
}
function ai(t, e) {
  for (const i of ["top", "left", "bottom", "right"])
    i in t || (t[i] = e[i]);
  return t;
}
const Zr = {
  inner: null,
  outer: null,
  offset: null,
  endOnly: !1,
  enabled: !1
}, Ct = {
  noInner: Gi,
  noOuter: Ui,
  start: Vr,
  set: Jr,
  defaults: Zr
}, Qr = st(Ct, "restrictEdges"), to = w({
  get elementRect() {
    return {
      top: 0,
      left: 0,
      bottom: 1,
      right: 1
    };
  },
  set elementRect(t) {
  }
}, Yt.defaults), eo = {
  start: Yt.start,
  set: Yt.set,
  defaults: to
}, io = st(eo, "restrictRect"), no = {
  width: -1 / 0,
  height: -1 / 0
}, so = {
  width: 1 / 0,
  height: 1 / 0
};
function ro(t) {
  return Ct.start(t);
}
function oo(t) {
  const {
    interaction: e,
    state: i,
    rect: n,
    edges: s
  } = t, {
    options: r
  } = i;
  if (!s)
    return;
  const o = Qe(dt(r.min, e, t.coords)) || no, a = Qe(dt(r.max, e, t.coords)) || so;
  i.options = {
    endOnly: r.endOnly,
    inner: w({}, Ct.noInner),
    outer: w({}, Ct.noOuter)
  }, s.top ? (i.options.inner.top = n.bottom - o.height, i.options.outer.top = n.bottom - a.height) : s.bottom && (i.options.inner.bottom = n.top + o.height, i.options.outer.bottom = n.top + a.height), s.left ? (i.options.inner.left = n.right - o.width, i.options.outer.left = n.right - a.width) : s.right && (i.options.inner.right = n.left + o.width, i.options.outer.right = n.left + a.width), Ct.set(t), i.options = r;
}
const ao = {
  min: null,
  max: null,
  endOnly: !1,
  enabled: !1
}, lo = {
  start: ro,
  set: oo,
  defaults: ao
}, co = st(lo, "restrictSize");
function uo(t) {
  const {
    interaction: e,
    interactable: i,
    element: n,
    rect: s,
    state: r,
    startOffset: o
  } = t, {
    options: a
  } = r, c = a.offsetWithOrigin ? fo(t) : {
    x: 0,
    y: 0
  };
  let l;
  if (a.offset === "startCoords")
    l = {
      x: e.coords.start.page.x,
      y: e.coords.start.page.y
    };
  else {
    const f = _t(a.offset, i, n, [e]);
    l = Vt(f) || {
      x: 0,
      y: 0
    }, l.x += c.x, l.y += c.y;
  }
  const {
    relativePoints: u
  } = a;
  r.offsets = s && u && u.length ? u.map((f, g) => ({
    index: g,
    relativePoint: f,
    x: o.left - s.width * f.x + l.x,
    y: o.top - s.height * f.y + l.y
  })) : [{
    index: 0,
    relativePoint: null,
    x: l.x,
    y: l.y
  }];
}
function ho(t) {
  const {
    interaction: e,
    coords: i,
    state: n
  } = t, {
    options: s,
    offsets: r
  } = n, o = ze(e.interactable, e.element, e.prepared.name), a = w({}, i), c = [];
  s.offsetWithOrigin || (a.x -= o.x, a.y -= o.y);
  for (const u of r) {
    const f = a.x - u.x, g = a.y - u.y;
    for (let y = 0, v = s.targets.length; y < v; y++) {
      const z = s.targets[y];
      let M;
      p.func(z) ? M = z(f, g, e._proxy, u, y) : M = z, M && c.push({
        x: (p.number(M.x) ? M.x : f) + u.x,
        y: (p.number(M.y) ? M.y : g) + u.y,
        range: p.number(M.range) ? M.range : s.range,
        source: z,
        index: y,
        offset: u
      });
    }
  }
  const l = {
    target: null,
    inRange: !1,
    distance: 0,
    range: 0,
    delta: {
      x: 0,
      y: 0
    }
  };
  for (const u of c) {
    const f = u.range, g = u.x - a.x, y = u.y - a.y, v = Jt(g, y);
    let z = v <= f;
    f === 1 / 0 && l.inRange && l.range !== 1 / 0 && (z = !1), (!l.target || (z ? (
      // is the closest target in range?
      l.inRange && f !== 1 / 0 ? (
        // the pointer is relatively deeper in this target
        v / f < l.distance / l.range
      ) : (
        // this target has Infinite range and the closest doesn't
        f === 1 / 0 && l.range !== 1 / 0 || // OR this target is closer that the previous closest
        v < l.distance
      )
    ) : (
      // The other is not in range and the pointer is closer to this target
      !l.inRange && v < l.distance
    ))) && (l.target = u, l.distance = v, l.range = f, l.inRange = z, l.delta.x = g, l.delta.y = y);
  }
  return l.inRange && (i.x = l.target.x, i.y = l.target.y), n.closest = l, l;
}
function fo(t) {
  const {
    element: e
  } = t.interaction;
  return Vt(_t(t.state.options.origin, null, null, [e])) || ze(t.interactable, e, t.interaction.prepared.name);
}
const po = {
  range: 1 / 0,
  targets: null,
  offset: null,
  offsetWithOrigin: !0,
  origin: null,
  relativePoints: null,
  endOnly: !1,
  enabled: !1
}, De = {
  start: uo,
  set: ho,
  defaults: po
}, go = st(De, "snap");
function mo(t) {
  const {
    state: e,
    edges: i
  } = t, {
    options: n
  } = e;
  if (!i)
    return null;
  t.state = {
    options: {
      targets: null,
      relativePoints: [{
        x: i.left ? 0 : 1,
        y: i.top ? 0 : 1
      }],
      offset: n.offset || "self",
      origin: {
        x: 0,
        y: 0
      },
      range: n.range
    }
  }, e.targetFields = e.targetFields || [["width", "height"], ["x", "y"]], De.start(t), e.offsets = t.state.offsets, t.state = e;
}
function yo(t) {
  const {
    interaction: e,
    state: i,
    coords: n
  } = t, {
    options: s,
    offsets: r
  } = i, o = {
    x: n.x - r[0].x,
    y: n.y - r[0].y
  };
  i.options = w({}, s), i.options.targets = [];
  for (const c of s.targets || []) {
    let l;
    if (p.func(c) ? l = c(o.x, o.y, e) : l = c, !!l) {
      for (const [u, f] of i.targetFields)
        if (u in l || f in l) {
          l.x = l[u], l.y = l[f];
          break;
        }
      i.options.targets.push(l);
    }
  }
  const a = De.set(t);
  return i.options = s, a;
}
const vo = {
  range: 1 / 0,
  targets: null,
  offset: null,
  endOnly: !1,
  enabled: !1
}, qt = {
  start: mo,
  set: yo,
  defaults: vo
}, bo = st(qt, "snapSize");
function xo(t) {
  const {
    edges: e
  } = t;
  return e ? (t.state.targetFields = t.state.targetFields || [[e.left ? "left" : "right", e.top ? "top" : "bottom"]], qt.start(t)) : null;
}
const wo = {
  start: xo,
  set: qt.set,
  defaults: w(Et(qt.defaults), {
    targets: null,
    range: null,
    offset: {
      x: 0,
      y: 0
    }
  })
}, So = st(wo, "snapEdges"), re = {
  aspectRatio: Yr,
  restrictEdges: Qr,
  restrict: Kr,
  restrictRect: io,
  restrictSize: co,
  snapEdges: So,
  snap: go,
  snapSize: bo,
  spring: Lt,
  avoid: Lt,
  transform: Lt,
  rubberband: Lt
}, Eo = {
  id: "modifiers",
  install(t) {
    const {
      interactStatic: e
    } = t;
    t.usePlugin(jr), t.usePlugin(Ar), e.modifiers = re;
    for (const i in re) {
      const {
        _defaults: n,
        _methods: s
      } = re[i];
      n._methods = s, t.defaults.perAction[i] = n;
    }
  }
}, zo = Eo;
Q.use(zo);
const Io = {};
var St;
(function(t) {
  t.touchAction = "touchAction", t.boxSizing = "boxSizing", t.noListeners = "noListeners";
})(St || (St = {}));
const li = "[interact.js] ", be = {
  touchAction: "https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action",
  boxSizing: "https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"
}, Mo = !1;
function To(t, {
  logger: e
} = {}) {
  const {
    Interactable: i,
    defaults: n
  } = t;
  t.logger = e || console, n.base.devTools = {
    ignore: {}
  }, i.prototype.devTools = function(s) {
    return s ? (w(this.options.devTools, s), this) : this.options.devTools;
  }, t.usePlugin(Io);
}
const ci = [{
  name: St.touchAction,
  perform({
    element: t
  }) {
    return !Do(t, "touchAction", /pan-|pinch|none/);
  },
  getInfo({
    element: t
  }) {
    return [t, be.touchAction];
  },
  text: `Consider adding CSS "touch-action: none" to this element
`
}, {
  name: St.boxSizing,
  perform(t) {
    const {
      element: e
    } = t;
    return t.prepared.name === "resize" && e instanceof L.HTMLElement && !Ki(e, "boxSizing", /border-box/);
  },
  text: 'Consider adding CSS "box-sizing: border-box" to this resizable element',
  getInfo({
    element: t
  }) {
    return [t, be.boxSizing];
  }
}, {
  name: St.noListeners,
  perform(t) {
    const e = t.prepared.name;
    return !(t.interactable.events.types[`${e}move`] || []).length;
  },
  getInfo(t) {
    return [t.prepared.name, t.interactable];
  },
  text: "There are no listeners set for this action"
}];
function Ki(t, e, i) {
  const n = t.style[e] || it.getComputedStyle(t)[e];
  return i.test((n || "").toString());
}
function Do(t, e, i) {
  let n = t;
  for (; p.element(n); ) {
    if (Ki(n, e, i))
      return !0;
    n = nt(n);
  }
  return !1;
}
const ui = "dev-tools", Co = Mo ? {
  id: ui,
  install: () => {
  }
} : {
  id: ui,
  install: To,
  listeners: {
    "interactions:action-start": ({
      interaction: t
    }, e) => {
      for (const i of ci) {
        const n = t.interactable && t.interactable.options;
        !(n && n.devTools && n.devTools.ignore[i.name]) && i.perform(t) && e.logger.warn(li + i.text, ...i.getInfo(t));
      }
    }
  },
  checks: ci,
  CheckName: St,
  links: be,
  prefix: li
}, Ro = Co;
Q.use(Ro);
const Vi = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [n, s] of e)
    i[n] = s;
  return i;
}, _o = {
  name: "GridItem",
  props: {
    /*cols: {
             type: Number,
             required: true
             },*/
    /*containerWidth: {
                 type: Number,
                 required: true
    
                 },
                 rowHeight: {
                 type: Number,
                 required: true
                 },
                 margin: {
                 type: Array,
                 required: true
                 },
                 maxRows: {
                 type: Number,
                 required: true
                 },*/
    isDraggable: {
      type: Boolean,
      required: !1,
      default: null
    },
    isResizable: {
      type: Boolean,
      required: !1,
      default: null
    },
    isBounded: {
      type: Boolean,
      required: !1,
      default: null
    },
    /*useCssTransforms: {
             type: Boolean,
             required: true
             },
             */
    static: {
      type: Boolean,
      required: !1,
      default: !1
    },
    minH: {
      type: Number,
      required: !1,
      default: 1
    },
    minW: {
      type: Number,
      required: !1,
      default: 1
    },
    maxH: {
      type: Number,
      required: !1,
      default: 1 / 0
    },
    maxW: {
      type: Number,
      required: !1,
      default: 1 / 0
    },
    x: {
      type: Number,
      required: !0
    },
    y: {
      type: Number,
      required: !0
    },
    w: {
      type: Number,
      required: !0
    },
    h: {
      type: Number,
      required: !0
    },
    i: {
      required: !0
    },
    dragIgnoreFrom: {
      type: String,
      required: !1,
      default: "a, button"
    },
    dragAllowFrom: {
      type: String,
      required: !1,
      default: null
    },
    resizeIgnoreFrom: {
      type: String,
      required: !1,
      default: "a, button"
    },
    preserveAspectRatio: {
      type: Boolean,
      required: !1,
      default: !1
    },
    dragOption: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    resizeOption: {
      type: Object,
      required: !1,
      default: () => ({})
    }
  },
  inject: ["eventBus", "layoutInstance"],
  data() {
    return {
      cols: 1,
      containerWidth: 100,
      rowHeight: 30,
      margin: [10, 10],
      maxRows: 1 / 0,
      draggable: null,
      resizable: null,
      transformScale: 1,
      useCssTransforms: !0,
      useStyleCursor: !0,
      isDragging: !1,
      dragging: null,
      isResizing: !1,
      resizing: null,
      lastX: NaN,
      lastY: NaN,
      lastW: NaN,
      lastH: NaN,
      style: {},
      rtl: !1,
      dragEventSet: !1,
      resizeEventSet: !1,
      previousW: null,
      previousH: null,
      previousX: null,
      previousY: null,
      innerX: this.x,
      innerY: this.y,
      innerW: this.w,
      innerH: this.h
    };
  },
  created() {
    this.updateWidthHandler = (t) => {
      this.updateWidth(t);
    }, this.compactHandler = (t) => {
      this.compact(t);
    }, this.setDraggableHandler = (t) => {
      this.isDraggable === null && (this.draggable = t);
    }, this.setResizableHandler = (t) => {
      this.isResizable === null && (this.resizable = t);
    }, this.setBoundedHandler = (t) => {
      this.isBounded === null && (this.bounded = t);
    }, this.setTransformScaleHandler = (t) => {
      this.transformScale = t;
    }, this.setRowHeightHandler = (t) => {
      this.rowHeight = t;
    }, this.setMaxRowsHandler = (t) => {
      this.maxRows = t;
    }, this.directionchangeHandler = () => {
      this.rtl = Ge() === "rtl", this.compact();
    }, this.setColNum = (t) => {
      this.cols = parseInt(t);
    }, this.eventBus.$on("updateWidth", this.updateWidthHandler), this.eventBus.$on("compact", this.compactHandler), this.eventBus.$on("setDraggable", this.setDraggableHandler), this.eventBus.$on("setResizable", this.setResizableHandler), this.eventBus.$on("setBounded", this.setBoundedHandler), this.eventBus.$on("setTransformScale", this.setTransformScaleHandler), this.eventBus.$on("setRowHeight", this.setRowHeightHandler), this.eventBus.$on("setMaxRows", this.setMaxRowsHandler), this.eventBus.$on("directionchange", this.directionchangeHandler), this.eventBus.$on("setColNum", this.setColNum), this.rtl = Ge() === "rtl";
  },
  beforeUnmount() {
    this.eventBus.$off("updateWidth", this.updateWidthHandler), this.eventBus.$off("compact", this.compactHandler), this.eventBus.$off("setDraggable", this.setDraggableHandler), this.eventBus.$off("setResizable", this.setResizableHandler), this.eventBus.$off("setBounded", this.setBoundedHandler), this.eventBus.$off("setTransformScale", this.setTransformScaleHandler), this.eventBus.$off("setRowHeight", this.setRowHeightHandler), this.eventBus.$off("setMaxRows", this.setMaxRowsHandler), this.eventBus.$off("directionchange", this.directionchangeHandler), this.eventBus.$off("setColNum", this.setColNum), this.interactObj && this.interactObj.unset();
  },
  mounted() {
    this.layoutInstance.responsive && this.layoutInstance.lastBreakpoint ? this.cols = he(
      this.layoutInstance.lastBreakpoint,
      this.layoutInstance.cols
    ) : this.cols = this.layoutInstance.colNum, this.rowHeight = this.layoutInstance.rowHeight, this.containerWidth = this.layoutInstance.width !== null ? this.layoutInstance.width : 100, this.margin = this.layoutInstance.margin !== void 0 ? this.layoutInstance.margin : [10, 10], this.maxRows = this.layoutInstance.maxRows, this.isDraggable === null ? this.draggable = this.layoutInstance.isDraggable : this.draggable = this.isDraggable, this.isResizable === null ? this.resizable = this.layoutInstance.isResizable : this.resizable = this.isResizable, this.isBounded === null ? this.bounded = this.layoutInstance.isBounded : this.bounded = this.isBounded, this.transformScale = this.layoutInstance.transformScale, this.useCssTransforms = this.layoutInstance.useCssTransforms, this.useStyleCursor = this.layoutInstance.useStyleCursor, this.createStyle();
  },
  watch: {
    isDraggable() {
      this.draggable = this.isDraggable;
    },
    static() {
      this.tryMakeDraggable(), this.tryMakeResizable();
    },
    draggable() {
      this.tryMakeDraggable();
    },
    isResizable() {
      this.resizable = this.isResizable;
    },
    isBounded() {
      this.bounded = this.isBounded;
    },
    resizable() {
      this.tryMakeResizable();
    },
    rowHeight() {
      this.createStyle(), this.emitContainerResized();
    },
    cols() {
      this.tryMakeResizable(), this.createStyle(), this.emitContainerResized();
    },
    containerWidth() {
      this.tryMakeResizable(), this.createStyle(), this.emitContainerResized();
    },
    x(t) {
      this.innerX = t, this.createStyle();
    },
    y(t) {
      this.innerY = t, this.createStyle();
    },
    h(t) {
      this.innerH = t, this.createStyle();
    },
    w(t) {
      this.innerW = t, this.createStyle();
    },
    renderRtl() {
      this.tryMakeResizable(), this.createStyle();
    },
    minH() {
      this.tryMakeResizable();
    },
    maxH() {
      this.tryMakeResizable();
    },
    minW() {
      this.tryMakeResizable();
    },
    maxW() {
      this.tryMakeResizable();
    },
    "$parent.margin"(t) {
      !t || t[0] == this.margin[0] && t[1] == this.margin[1] || (this.margin = t.map((e) => Number(e)), this.createStyle(), this.emitContainerResized());
    }
  },
  computed: {
    classObj() {
      return {
        "vue-resizable": this.resizableAndNotStatic,
        static: this.static,
        resizing: this.isResizing,
        "vue-draggable-dragging": this.isDragging,
        cssTransforms: this.useCssTransforms,
        "render-rtl": this.renderRtl,
        "disable-userselect": this.isDragging,
        "no-touch": this.isAndroid && this.draggableOrResizableAndNotStatic
      };
    },
    resizableAndNotStatic() {
      return this.resizable && !this.static;
    },
    draggableOrResizableAndNotStatic() {
      return (this.draggable || this.resizable) && !this.static;
    },
    isAndroid() {
      return navigator.userAgent.toLowerCase().indexOf("android") !== -1;
    },
    renderRtl() {
      return this.layoutInstance.isMirrored ? !this.rtl : this.rtl;
    },
    resizableHandleClass() {
      return this.renderRtl ? "vue-resizable-handle vue-rtl-resizable-handle" : "vue-resizable-handle";
    }
  },
  methods: {
    createStyle() {
      this.x + this.w > this.cols ? (this.innerX = 0, this.innerW = this.w > this.cols ? this.cols : this.w) : (this.innerX = this.x, this.innerW = this.w);
      let t = this.calcPosition(this.innerX, this.innerY, this.innerW, this.innerH);
      this.isDragging && (t.top = this.dragging.top, this.renderRtl ? t.right = this.dragging.left : t.left = this.dragging.left), this.isResizing && (t.width = this.resizing.width, t.height = this.resizing.height);
      let e;
      this.useCssTransforms ? this.renderRtl ? e = Gn(t.top, t.right, t.width, t.height) : e = qn(t.top, t.left, t.width, t.height) : this.renderRtl ? e = Kn(t.top, t.right, t.width, t.height) : e = Un(t.top, t.left, t.width, t.height), this.style = e;
    },
    emitContainerResized() {
      let t = {};
      for (let e of ["width", "height"]) {
        let n = this.style[e].match(/^(\d+)px$/);
        if (!n)
          return;
        t[e] = n[1];
      }
      this.$emit("container-resized", this.i, this.h, this.w, t.height, t.width);
    },
    handleResize(t) {
      if (this.static)
        return;
      const e = Ye(t);
      if (e == null)
        return;
      const { x: i, y: n } = e, s = { width: 0, height: 0 };
      let r;
      switch (t.type) {
        case "resizestart": {
          this.tryMakeResizable(), this.previousW = this.innerW, this.previousH = this.innerH, r = this.calcPosition(this.innerX, this.innerY, this.innerW, this.innerH), s.width = r.width, s.height = r.height, this.resizing = s, this.isResizing = !0;
          break;
        }
        case "resizemove": {
          const o = qe(this.lastW, this.lastH, i, n);
          this.renderRtl ? s.width = this.resizing.width - o.deltaX / this.transformScale : s.width = this.resizing.width + o.deltaX / this.transformScale, s.height = this.resizing.height + o.deltaY / this.transformScale, this.resizing = s;
          break;
        }
        case "resizeend": {
          r = this.calcPosition(this.innerX, this.innerY, this.innerW, this.innerH), s.width = r.width, s.height = r.height, this.resizing = null, this.isResizing = !1;
          break;
        }
      }
      r = this.calcWH(s.height, s.width), r.w < this.minW && (r.w = this.minW), r.w > this.maxW && (r.w = this.maxW), r.h < this.minH && (r.h = this.minH), r.h > this.maxH && (r.h = this.maxH), r.h < 1 && (r.h = 1), r.w < 1 && (r.w = 1), this.lastW = i, this.lastH = n, (this.innerW !== r.w || this.innerH !== r.h) && this.$emit("resize", this.i, r.h, r.w, s.height, s.width), t.type === "resizeend" && (this.previousW !== this.innerW || this.previousH !== this.innerH) && this.$emit("resized", this.i, r.h, r.w, s.height, s.width), this.eventBus.$emit("resizeEvent", t.type, this.i, this.innerX, this.innerY, r.h, r.w);
    },
    handleDrag(t) {
      if (this.static || this.isResizing)
        return;
      const e = Ye(t);
      if (e === null)
        return;
      const { x: i, y: n } = e;
      let s = { top: 0, left: 0 };
      switch (t.type) {
        case "dragstart": {
          this.previousX = this.innerX, this.previousY = this.innerY;
          let o = t.target.offsetParent.getBoundingClientRect(), a = t.target.getBoundingClientRect();
          const c = a.left / this.transformScale, l = o.left / this.transformScale, u = a.right / this.transformScale, f = o.right / this.transformScale, g = a.top / this.transformScale, y = o.top / this.transformScale;
          this.renderRtl ? s.left = (u - f) * -1 : s.left = c - l, s.top = g - y, this.dragging = s, this.isDragging = !0;
          break;
        }
        case "dragend": {
          if (!this.isDragging)
            return;
          let o = t.target.offsetParent.getBoundingClientRect(), a = t.target.getBoundingClientRect();
          const c = a.left / this.transformScale, l = o.left / this.transformScale, u = a.right / this.transformScale, f = o.right / this.transformScale, g = a.top / this.transformScale, y = o.top / this.transformScale;
          this.renderRtl ? s.left = (u - f) * -1 : s.left = c - l, s.top = g - y, this.dragging = null, this.isDragging = !1;
          break;
        }
        case "dragmove": {
          const o = qe(this.lastX, this.lastY, i, n);
          if (this.renderRtl ? s.left = this.dragging.left - o.deltaX / this.transformScale : s.left = this.dragging.left + o.deltaX / this.transformScale, s.top = this.dragging.top + o.deltaY / this.transformScale, this.bounded) {
            const a = t.target.offsetParent.clientHeight - this.calcGridItemWHPx(this.h, this.rowHeight, this.margin[1]);
            s.top = this.clamp(s.top, 0, a);
            const c = this.calcColWidth(), l = this.containerWidth - this.calcGridItemWHPx(this.w, c, this.margin[0]);
            s.left = this.clamp(s.left, 0, l);
          }
          this.dragging = s;
          break;
        }
      }
      let r;
      this.renderRtl ? r = this.calcXY(s.top, s.left) : r = this.calcXY(s.top, s.left), this.lastX = i, this.lastY = n, (this.innerX !== r.x || this.innerY !== r.y) && this.$emit("move", this.i, r.x, r.y), t.type === "dragend" && (this.previousX !== this.innerX || this.previousY !== this.innerY) && this.$emit("moved", this.i, r.x, r.y), this.eventBus.$emit("dragEvent", t.type, this.i, r.x, r.y, this.innerH, this.innerW);
    },
    calcPosition(t, e, i, n) {
      const s = this.calcColWidth();
      let r;
      return this.renderRtl ? r = {
        right: Math.round(s * t + (t + 1) * this.margin[0]),
        top: Math.round(this.rowHeight * e + (e + 1) * this.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constriants;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes deopt
        width: i === 1 / 0 ? i : Math.round(s * i + Math.max(0, i - 1) * this.margin[0]),
        height: n === 1 / 0 ? n : Math.round(this.rowHeight * n + Math.max(0, n - 1) * this.margin[1])
      } : r = {
        left: Math.round(s * t + (t + 1) * this.margin[0]),
        top: Math.round(this.rowHeight * e + (e + 1) * this.margin[1]),
        // 0 * Infinity === NaN, which causes problems with resize constriants;
        // Fix this if it occurs.
        // Note we do it here rather than later because Math.round(Infinity) causes deopt
        width: i === 1 / 0 ? i : Math.round(s * i + Math.max(0, i - 1) * this.margin[0]),
        height: n === 1 / 0 ? n : Math.round(this.rowHeight * n + Math.max(0, n - 1) * this.margin[1])
      }, r;
    },
    /**
     * Translate x and y coordinates from pixels to grid units.
     * @param  {Number} top  Top position (relative to parent) in pixels.
     * @param  {Number} left Left position (relative to parent) in pixels.
     * @return {Object} x and y in grid units.
     */
    // TODO check if this function needs change in order to support rtl.
    calcXY(t, e) {
      const i = this.calcColWidth();
      let n = Math.round((e - this.margin[0]) / (i + this.margin[0])), s = Math.round((t - this.margin[1]) / (this.rowHeight + this.margin[1]));
      return n = Math.max(Math.min(n, this.cols - this.innerW), 0), s = Math.max(Math.min(s, this.maxRows - this.innerH), 0), { x: n, y: s };
    },
    // Helper for generating column width
    calcColWidth() {
      return (this.containerWidth - this.margin[0] * (this.cols + 1)) / this.cols;
    },
    // This can either be called:
    // calcGridItemWHPx(w, colWidth, margin[0])
    // or
    // calcGridItemWHPx(h, rowHeight, margin[1])
    calcGridItemWHPx(t, e, i) {
      return Number.isFinite(t) ? Math.round(e * t + Math.max(0, t - 1) * i) : t;
    },
    // Similar to _.clamp
    clamp(t, e, i) {
      return Math.max(Math.min(t, i), e);
    },
    /**
     * Given a height and width in pixel values, calculate grid units.
     * @param  {Number} height Height in pixels.
     * @param  {Number} width  Width in pixels.
     * @param  {Boolean} autoSizeFlag  function autoSize identifier.
     * @return {Object} w, h as grid units.
     */
    calcWH(t, e, i = !1) {
      const n = this.calcColWidth();
      let s = Math.round((e + this.margin[0]) / (n + this.margin[0])), r = 0;
      return i ? r = Math.ceil((t + this.margin[1]) / (this.rowHeight + this.margin[1])) : r = Math.round((t + this.margin[1]) / (this.rowHeight + this.margin[1])), s = Math.max(Math.min(s, this.cols - this.innerX), 0), r = Math.max(Math.min(r, this.maxRows - this.innerY), 0), { w: s, h: r };
    },
    updateWidth(t, e) {
      this.containerWidth = t, e != null && (this.cols = e);
    },
    compact() {
      this.createStyle();
    },
    tryMakeDraggable() {
      if ((this.interactObj === null || this.interactObj === void 0) && (this.interactObj = Q(this.$refs.item), this.useStyleCursor || this.interactObj.styleCursor(!1)), this.draggable && !this.static) {
        const t = {
          ignoreFrom: this.dragIgnoreFrom,
          allowFrom: this.dragAllowFrom,
          ...this.dragOption
        };
        this.interactObj.draggable(t), this.dragEventSet || (this.dragEventSet = !0, this.interactObj.on("dragstart dragmove dragend", (e) => {
          this.handleDrag(e);
        }));
      } else
        this.interactObj.draggable({
          enabled: !1
        });
    },
    tryMakeResizable() {
      if ((this.interactObj === null || this.interactObj === void 0) && (this.interactObj = Q(this.$refs.item), this.useStyleCursor || this.interactObj.styleCursor(!1)), this.resizable && !this.static) {
        let t = this.calcPosition(0, 0, this.maxW, this.maxH), e = this.calcPosition(0, 0, this.minW, this.minH);
        const i = {
          // allowFrom: "." + this.resizableHandleClass.trim().replace(" ", "."),
          edges: {
            left: !1,
            right: "." + this.resizableHandleClass.trim().replace(" ", "."),
            bottom: "." + this.resizableHandleClass.trim().replace(" ", "."),
            top: !1
          },
          ignoreFrom: this.resizeIgnoreFrom,
          restrictSize: {
            min: {
              height: e.height * this.transformScale,
              width: e.width * this.transformScale
            },
            max: {
              height: t.height * this.transformScale,
              width: t.width * this.transformScale
            }
          },
          ...this.resizeOption
        };
        this.preserveAspectRatio && (i.modifiers = [
          Q.modifiers.aspectRatio({
            ratio: "preserve"
          })
        ]), this.interactObj.resizable(i), this.resizeEventSet || (this.resizeEventSet = !0, this.interactObj.on("resizestart resizemove resizeend", (n) => {
          this.handleResize(n);
        }));
      } else
        this.interactObj.resizable({
          enabled: !1
        });
    },
    autoSize() {
      this.previousW = this.innerW, this.previousH = this.innerH;
      let t = this.$slots.default()[0].elm.getBoundingClientRect(), e = this.calcWH(t.height, t.width, !0);
      e.w < this.minW && (e.w = this.minW), e.w > this.maxW && (e.w = this.maxW), e.h < this.minH && (e.h = this.minH), e.h > this.maxH && (e.h = this.maxH), e.h < 1 && (e.h = 1), e.w < 1 && (e.w = 1), (this.innerW !== e.w || this.innerH !== e.h) && this.$emit("resize", this.i, e.h, e.w, t.height, t.width), (this.previousW !== e.w || this.previousH !== e.h) && (this.$emit("resized", this.i, e.h, e.w, t.height, t.width), this.eventBus.$emit(
        "resizeEvent",
        "resizeend",
        this.i,
        this.innerX,
        this.innerY,
        e.h,
        e.w
      ));
    }
  }
};
function Po(t, e, i, n, s, r) {
  return oe(), ae("div", {
    ref: "item",
    class: He(["vue-grid-item", r.classObj]),
    style: hi(s.style)
  }, [
    fi(t.$slots, "default"),
    r.resizableAndNotStatic ? (oe(), ae("span", {
      key: 0,
      ref: "handle",
      class: He(r.resizableHandleClass)
    }, null, 2)) : cn("", !0)
  ], 6);
}
const ko = /* @__PURE__ */ Vi(_o, [["render", Po]]);
const $o = {
  name: "GridLayout",
  provide() {
    return {
      eventBus: this.getEventBus(),
      layoutInstance: this.getLayoutInstance()
    };
  },
  components: {
    GridItem: ko
  },
  props: {
    // If true, the container height swells and contracts to fit contents
    autoSize: {
      type: Boolean,
      default: !0
    },
    colNum: {
      type: Number,
      default: 12
    },
    rowHeight: {
      type: Number,
      default: 150
    },
    maxRows: {
      type: Number,
      default: 1 / 0
    },
    margin: {
      type: Array,
      default: () => [10, 10]
    },
    isDraggable: {
      type: Boolean,
      default: !0
    },
    isResizable: {
      type: Boolean,
      default: !0
    },
    isMirrored: {
      type: Boolean,
      default: !1
    },
    isBounded: {
      type: Boolean,
      default: !1
    },
    useCssTransforms: {
      type: Boolean,
      default: !0
    },
    verticalCompact: {
      type: Boolean,
      default: !0
    },
    restoreOnDrag: {
      type: Boolean,
      default: !1
    },
    layout: {
      type: Array,
      required: !0
    },
    responsive: {
      type: Boolean,
      default: !0
    },
    responsiveLayouts: {
      type: Object,
      default: () => ({})
    },
    transformScale: {
      type: Number,
      default: 1
    },
    breakpoints: {
      type: Object,
      default: () => ({ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 })
    },
    cols: {
      type: Object,
      default: () => ({ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 })
    },
    preventCollision: {
      type: Boolean,
      default: !1
    },
    useStyleCursor: {
      type: Boolean,
      default: !0
    }
  },
  data() {
    return {
      width: null,
      mergedStyle: {},
      lastLayoutLength: 0,
      isDragging: !1,
      placeholder: {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        i: -1
      },
      // layout: [],
      layouts: {},
      // array to store all layouts from different breakpoints
      lastBreakpoint: null,
      // store last active breakpoint
      originalLayout: null
      // store original Layout
    };
  },
  created() {
    this.resizeEventHandler = (t) => {
      let e, i, n, s, r, o;
      [e, i, n, s, r, o] = t, this.resizeEvent(e, i, n, s, r, o);
    }, this.dragEventHandler = (t) => {
      let e, i, n, s, r, o;
      [e, i, n, s, r, o] = t, this.dragEvent(e, i, n, s, r, o);
    }, this.eventBus = this.getEventBus(), this.eventBus.$on("resizeEvent", this.resizeEventHandler), this.eventBus.$on("dragEvent", this.dragEventHandler), this.$emit("layout-created", this.layout);
  },
  beforeUnmount() {
    this.eventBus.$off("resizeEvent", this.resizeEventHandler), this.eventBus.$off("dragEvent", this.dragEventHandler), ss("resize", this.onWindowResize), this.erd && this.erd.uninstall(this.$refs.item);
  },
  beforeMount() {
    this.$emit("layout-before-mount", this.layout);
  },
  mounted() {
    this.$emit("layout-mounted", this.layout), this.$nextTick(() => {
      Vn(this.layout), this.originalLayout = this.layout, this.$nextTick(() => {
        this.initResponsiveFeatures(), this.onWindowResize(), ns("resize", this.onWindowResize), bt(this.layout, this.verticalCompact), this.$emit("layout-updated", this.layout), this.updateHeight(), this.$nextTick(() => {
          this.erd = jn({
            strategy: "scroll",
            //<- For ultra performance.
            // See https://github.com/wnr/element-resize-detector/issues/110 about callOnAdd.
            callOnAdd: !1
          }), this.erd.listenTo(this.$refs.item, () => {
            this.onWindowResize();
          });
        });
      });
    });
  },
  watch: {
    width(t, e) {
      this.$nextTick(() => {
        this.eventBus.$emit("updateWidth", this.width), e === null && this.$nextTick(() => {
          this.$emit("layout-ready", this.layout);
        }), this.updateHeight();
      });
    },
    layout() {
      this.layoutUpdate();
    },
    colNum(t) {
      this.eventBus.$emit("setColNum", t);
    },
    rowHeight() {
      this.eventBus.$emit("setRowHeight", this.rowHeight);
    },
    isDraggable() {
      this.eventBus.$emit("setDraggable", this.isDraggable);
    },
    isResizable() {
      this.eventBus.$emit("setResizable", this.isResizable);
    },
    isBounded() {
      this.eventBus.$emit("setBounded", this.isBounded);
    },
    transformScale() {
      this.eventBus.$emit("setTransformScale", this.transformScale);
    },
    responsive() {
      this.responsive || (this.$emit("update:layout", this.originalLayout), this.eventBus.$emit("setColNum", this.colNum)), this.onWindowResize();
    },
    maxRows() {
      this.eventBus.$emit("setMaxRows", this.maxRows);
    },
    margin() {
      this.updateHeight();
    }
  },
  methods: {
    getEventBus() {
      return Gt;
    },
    getLayoutInstance() {
      return this;
    },
    layoutUpdate() {
      if (this.layout !== void 0 && this.originalLayout !== null) {
        if (this.layout.length !== this.originalLayout.length) {
          let t = this.findDifference(this.layout, this.originalLayout);
          t.length > 0 && (this.layout.length > this.originalLayout.length ? this.originalLayout = this.originalLayout.concat(t) : this.originalLayout = this.originalLayout.filter((e) => !t.some((i) => e.i === i.i))), this.lastLayoutLength = this.layout.length, this.initResponsiveFeatures();
        }
        bt(this.layout, this.verticalCompact), this.eventBus.$emit("updateWidth", this.width), this.updateHeight(), this.$emit("layout-updated", this.layout);
      }
    },
    updateHeight() {
      this.mergedStyle = {
        height: this.containerHeight()
      };
    },
    onWindowResize() {
      this.$refs !== null && this.$refs.item !== null && this.$refs.item !== void 0 && (this.width = this.$refs.item.offsetWidth), this.eventBus.$emit("resizeEvent");
    },
    containerHeight() {
      return this.autoSize ? Nn(this.layout) * (this.rowHeight + this.margin[1]) + this.margin[1] + "px" : void 0;
    },
    dragEvent(t, e, i, n, s, r) {
      let o = Fe(this.layout, e);
      o == null && (o = { x: 0, y: 0 }), t === "dragstart" && !this.verticalCompact && (this.positionsBeforeDrag = this.layout.reduce(
        (a, { i: c, x: l, y: u }) => ({
          ...a,
          [c]: { x: l, y: u }
        }),
        {}
      )), t === "dragmove" || t === "dragstart" ? (this.placeholder.i = e, this.placeholder.x = o.x, this.placeholder.y = o.y, this.placeholder.w = r, this.placeholder.h = s, this.$nextTick(() => {
        this.isDragging = !0;
      }), this.eventBus.$emit("updateWidth", this.width)) : this.$nextTick(() => {
        this.isDragging = !1;
      }), ue(this.layout, o, i, n, !0, this.preventCollision), this.restoreOnDrag ? (o.static = !0, bt(this.layout, this.verticalCompact, this.positionsBeforeDrag), o.static = !1) : bt(this.layout, this.verticalCompact), this.eventBus.$emit("compact"), this.updateHeight(), t === "dragend" && (delete this.positionsBeforeDrag, this.$emit("layout-updated", this.layout));
    },
    resizeEvent(t, e, i, n, s, r) {
      let o = Fe(this.layout, e);
      o == null && (o = { h: 0, w: 0 });
      let a;
      if (this.preventCollision) {
        const c = mi(this.layout, { ...o, w: r, h: s }).filter(
          (l) => l.i !== o.i
        );
        if (a = c.length > 0, a) {
          let l = 1 / 0, u = 1 / 0;
          c.forEach((f) => {
            f.x > o.x && (l = Math.min(l, f.x)), f.y > o.y && (u = Math.min(u, f.y));
          }), Number.isFinite(l) && (o.w = l - o.x), Number.isFinite(u) && (o.h = u - o.y);
        }
      }
      a || (o.w = r, o.h = s), t === "resizestart" || t === "resizemove" ? (this.placeholder.i = e, this.placeholder.x = i, this.placeholder.y = n, this.placeholder.w = o.w, this.placeholder.h = o.h, this.$nextTick(() => {
        this.isDragging = !0;
      }), this.eventBus.$emit("updateWidth", this.width)) : this.$nextTick(() => {
        this.isDragging = !1;
      }), this.responsive && this.responsiveGridLayout(), bt(this.layout, this.verticalCompact), this.eventBus.$emit("compact"), this.updateHeight(), t === "resizeend" && this.$emit("layout-updated", this.layout);
    },
    // finds or generates new layouts for set breakpoints
    responsiveGridLayout() {
      let t = Jn(this.breakpoints, this.width), e = he(t, this.cols);
      this.lastBreakpoint != null && !this.layouts[this.lastBreakpoint] && (this.layouts[this.lastBreakpoint] = ce(this.layout));
      let i = Zn(
        this.originalLayout,
        this.layouts,
        this.breakpoints,
        t,
        this.lastBreakpoint,
        e,
        this.verticalCompact
      );
      this.layouts[t] = i, this.lastBreakpoint !== t && this.$emit("breakpoint-changed", t, i), this.$emit("update:layout", i), this.lastBreakpoint = t, this.eventBus.$emit("setColNum", he(t, this.cols));
    },
    // clear all responsive layouts
    initResponsiveFeatures() {
      this.layouts = Object.assign({}, this.responsiveLayouts);
    },
    // find difference in layouts
    findDifference(t, e) {
      let i = t.filter((s) => !e.some((r) => s.i === r.i)), n = e.filter((s) => !t.some((r) => s.i === r.i));
      return i.concat(n);
    }
  }
};
function Oo(t, e, i, n, s, r) {
  const o = un("grid-item");
  return oe(), ae("div", {
    ref: "item",
    class: "vue-grid-layout",
    style: hi(s.mergedStyle)
  }, [
    fi(t.$slots, "default"),
    hn(fn(o, {
      class: "vue-grid-placeholder",
      x: s.placeholder.x,
      y: s.placeholder.y,
      w: s.placeholder.w,
      h: s.placeholder.h,
      i: s.placeholder.i
    }, null, 8, ["x", "y", "w", "h", "i"]), [
      [dn, s.isDragging]
    ])
  ], 4);
}
const Bo = /* @__PURE__ */ Vi($o, [["render", Oo]]);
export {
  ko as GridItem,
  Bo as GridLayout
};

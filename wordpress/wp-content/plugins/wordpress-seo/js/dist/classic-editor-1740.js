!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var a = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var a in e)
          n.d(
            r,
            a,
            function (t) {
              return e[t];
            }.bind(null, a)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 354));
})([
  function (e, t) {
    e.exports = window.wp.element;
  },
  function (e, t) {
    e.exports = window.yoast.propTypes;
  },
  function (e, t) {
    e.exports = window.lodash;
  },
  function (e, t) {
    e.exports = window.wp.i18n;
  },
  function (e, t) {
    e.exports = window.wp.data;
  },
  function (e, t) {
    e.exports = function (e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    };
  },
  function (e, t) {
    e.exports = window.yoast.componentsNew;
  },
  function (e, t) {
    function n(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    e.exports = function (e, t, r) {
      return t && n(e.prototype, t), r && n(e, r), e;
    };
  },
  function (e, t) {
    function n(t) {
      return (
        (e.exports = n =
          Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
        n(t)
      );
    }
    e.exports = n;
  },
  function (e, t) {
    e.exports = window.yoast.helpers;
  },
  function (e, t) {
    e.exports = function (e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    };
  },
  function (e, t) {
    e.exports = window.yoast.styledComponents;
  },
  function (e, t, n) {
    var r = n(72);
    e.exports = function (e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        t && r(e, t);
    };
  },
  function (e, t, n) {
    var r = n(34),
      a = n(11);
    e.exports = function (e, t) {
      return !t || ("object" !== r(t) && "function" != typeof t) ? a(e) : t;
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      return (
        t || (t = e.slice(0)),
        Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        )
      );
    };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "e", function () {
      return a;
    }),
      n.d(t, "f", function () {
        return o;
      }),
      n.d(t, "g", function () {
        return s;
      }),
      n.d(t, "a", function () {
        return i;
      }),
      n.d(t, "d", function () {
        return c;
      }),
      n.d(t, "c", function () {
        return l;
      }),
      n.d(t, "h", function () {
        return u;
      }),
      n.d(t, "b", function () {
        return p;
      }),
      n.d(t, "l", function () {
        return d;
      }),
      n.d(t, "m", function () {
        return m;
      }),
      n.d(t, "n", function () {
        return f;
      }),
      n.d(t, "o", function () {
        return b;
      }),
      n.d(t, "k", function () {
        return h;
      }),
      n.d(t, "j", function () {
        return y;
      }),
      n.d(t, "i", function () {
        return g;
      });
    var r = n(9),
      a = "SNIPPET_EDITOR_SWITCH_MODE",
      o = "SNIPPET_EDITOR_UPDATE_DATA",
      s = "SNIPPET_EDITOR_UPDATE_REPLACEMENT_VARIABLE",
      i = "SNIPPET_EDITOR_HIDE_REPLACEMENT_VARIABLES",
      c = "SNIPPET_EDITOR_REMOVE_REPLACEMENT_VARIABLE",
      l = "SNIPPET_EDITOR_REFRESH",
      u = "SNIPPET_EDITOR_UPDATE_WORDS_TO_HIGHLIGHT",
      p = "LOAD_SNIPPET_EDITOR_DATA";
    function d(e) {
      return { type: a, mode: e };
    }
    function m(e) {
      return { type: o, data: e };
    }
    function f(e, t) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        o = "string" == typeof t ? Object(r.decodeHTML)(t) : t;
      return { type: s, name: e, value: o, label: n, hidden: a };
    }
    function b(e) {
      return { type: u, wordsToHighlight: e };
    }
    function h(e) {
      return { type: c, name: e };
    }
    function y() {
      return { type: l, time: new Date().getMilliseconds() };
    }
    function g(e) {
      return { type: i, data: e };
    }
  },
  function (e, t) {
    e.exports = window.React;
  },
  function (e, t) {
    e.exports = window.wp.components;
  },
  function (e, t) {
    e.exports = window.wp.compose;
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    });
    var r = n(2);
    function a() {
      return Object(r.get)(window, "wpseoScriptData.metabox", {
        intl: {},
        isRtl: !1,
      });
    }
  },
  ,
  function (e, t) {
    e.exports = window.yoast.components;
  },
  function (e, t) {
    e.exports = window.yoast.analysis;
  },
  ,
  function (e, t) {
    e.exports = window.yoast.styleGuide;
  },
  function (e, t) {
    e.exports = window.regeneratorRuntime;
  },
  function (e, t) {
    function n() {
      return (
        (e.exports = n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
        n.apply(this, arguments)
      );
    }
    e.exports = n;
  },
  ,
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "LocationContext", function () {
        return a;
      }),
      n.d(t, "LocationProvider", function () {
        return o;
      }),
      n.d(t, "LocationConsumer", function () {
        return s;
      });
    var r = n(0),
      a = Object(r.createContext)("location"),
      o = a.Provider,
      s = a.Consumer;
  },
  ,
  function (e, t, n) {
    var r = n(87),
      a = n(88),
      o = n(89);
    e.exports = function (e) {
      return r(e) || a(e) || o();
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      a = n(1),
      o = n.n(a),
      s = function (e) {
        var t = e.children;
        return Object(r.createElement)("div", null, t);
      };
    (s.propTypes = {
      renderPriority: o.a.number.isRequired,
      children: o.a.node.isRequired,
    }),
      (t.a = s);
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    });
    var r = n(5),
      a = n.n(r),
      o = n(7),
      s = n.n(o),
      i = (function () {
        function e() {
          a()(this, e);
        }
        return (
          s()(e, null, [
            {
              key: "articleTypeInput",
              get: function () {
                return document.getElementById(
                  "yoast_wpseo_schema_article_type"
                );
              },
            },
            {
              key: "defaultArticleType",
              get: function () {
                return e.articleTypeInput.getAttribute("data-default");
              },
            },
            {
              key: "articleType",
              get: function () {
                return e.articleTypeInput.value;
              },
              set: function (t) {
                e.articleTypeInput.value = t;
              },
            },
            {
              key: "pageTypeInput",
              get: function () {
                return document.getElementById("yoast_wpseo_schema_page_type");
              },
            },
            {
              key: "defaultPageType",
              get: function () {
                return e.pageTypeInput.getAttribute("data-default");
              },
            },
            {
              key: "pageType",
              get: function () {
                return e.pageTypeInput.value;
              },
              set: function (t) {
                e.pageTypeInput.value = t;
              },
            },
          ]),
          e
        );
      })();
  },
  function (e, t) {
    function n(t) {
      return (
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? (e.exports = n =
              function (e) {
                return typeof e;
              })
          : (e.exports = n =
              function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        n(t)
      );
    }
    e.exports = n;
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "getIconForScore", function () {
        return i;
      }),
      n.d(t, "default", function () {
        return c;
      });
    var r = n(23),
      a = n(25);
    function o(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = e.getIdentifier(),
        a = {
          score: e.score,
          rating: r.interpreters.scoreToRating(e.score),
          hasMarks: e.hasMarks(),
          marker: e.getMarker(),
          id: n,
          text: e.text,
          markerId: t.length > 0 ? "".concat(t, ":").concat(n) : n,
        };
      return "ok" === a.rating && (a.rating = "OK"), a;
    }
    function s(e, t) {
      switch (e.rating) {
        case "error":
          t.errorsResults.push(e);
          break;
        case "feedback":
          t.considerationsResults.push(e);
          break;
        case "bad":
          t.problemsResults.push(e);
          break;
        case "OK":
          t.improvementsResults.push(e);
          break;
        case "good":
          t.goodResults.push(e);
      }
      return t;
    }
    function i(e) {
      var t = { icon: "seo-score-none", color: a.colors.$color_red };
      switch (e) {
        case "loading":
          t = {
            icon: "loading-spinner",
            color: a.colors.$color_green_medium_light,
          };
          break;
        case "good":
          t = { icon: "seo-score-good", color: a.colors.$color_green_medium };
          break;
        case "ok":
          t = { icon: "seo-score-ok", color: a.colors.$color_ok };
          break;
        case "bad":
          t = { icon: "seo-score-bad", color: a.colors.$color_red };
      }
      return t;
    }
    function c(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = {
          errorsResults: [],
          problemsResults: [],
          improvementsResults: [],
          goodResults: [],
          considerationsResults: [],
        };
      if (!e) return n;
      for (var r = 0; r < e.length; r++) {
        var a = e[r];
        if (a.text) {
          var i = o(a, t);
          n = s(i, n);
        }
      }
      return n;
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    });
    var r = n(0),
      a = n(1),
      o = n.n(a);
    function s(e) {
      var t = e.target,
        n = e.children,
        a = t;
      return (
        "string" == typeof t && (a = document.getElementById(t)),
        a ? Object(r.createPortal)(n, a) : null
      );
    }
    s.propTypes = {
      target: o.a.oneOfType([o.a.string, o.a.object]).isRequired,
      children: o.a.node.isRequired,
    };
  },
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      a = i(n(17)),
      o = i(n(130)),
      s = i(n(133));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var c = void 0;
    t.default = function (e) {
      var t = e.mixedString,
        n = e.components,
        i = e.throwErrors;
      if (((c = t), !n)) return t;
      if ("object" !== (void 0 === n ? "undefined" : r(n))) {
        if (i)
          throw new Error(
            "Interpolation Error: unable to process `" +
              t +
              "` because components is not an object"
          );
        return t;
      }
      var l = (0, s.default)(t);
      try {
        return (function e(t, n) {
          var s,
            i,
            l,
            u,
            p,
            d,
            m,
            f,
            b = [],
            h = {};
          for (d = 0; d < t.length; d++)
            if ("string" !== (p = t[d]).type) {
              if (!n.hasOwnProperty(p.value) || void 0 === n[p.value])
                throw new Error(
                  "Invalid interpolation, missing component node: `" +
                    p.value +
                    "`"
                );
              if ("object" !== r(n[p.value]))
                throw new Error(
                  "Invalid interpolation, component node must be a ReactElement or null: `" +
                    p.value +
                    "`",
                  "\n> " + c
                );
              if ("componentClose" === p.type)
                throw new Error(
                  "Missing opening component token: `" + p.value + "`"
                );
              if ("componentOpen" === p.type) {
                (s = n[p.value]), (l = d);
                break;
              }
              b.push(n[p.value]);
            } else b.push(p.value);
          return (
            s &&
              ((u = (function (e, t) {
                var n,
                  r,
                  a = t[e],
                  o = 0;
                for (r = e + 1; r < t.length; r++)
                  if ((n = t[r]).value === a.value) {
                    if ("componentOpen" === n.type) {
                      o++;
                      continue;
                    }
                    if ("componentClose" === n.type) {
                      if (0 === o) return r;
                      o--;
                    }
                  }
                throw new Error(
                  "Missing closing component token `" + a.value + "`"
                );
              })(l, t)),
              (m = e(t.slice(l + 1, u), n)),
              (i = a.default.cloneElement(s, {}, m)),
              b.push(i),
              u < t.length - 1 &&
                ((f = e(t.slice(u + 1), n)), (b = b.concat(f)))),
            1 === b.length
              ? b[0]
              : (b.forEach(function (e, t) {
                  e && (h["interpolation-child-" + t] = e);
                }),
                (0, o.default)(h))
          );
        })(l, n);
      } catch (e) {
        if (i)
          throw new Error(
            "Interpolation Error: unable to process `" +
              t +
              "` because of error `" +
              e.message +
              "`"
          );
        return t;
      }
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "tmceId", function () {
        return c;
      }),
      n.d(t, "termsTmceId", function () {
        return l;
      }),
      n.d(t, "setStore", function () {
        return u;
      }),
      n.d(t, "isTinyMCELoaded", function () {
        return p;
      }),
      n.d(t, "isTinyMCEAvailable", function () {
        return d;
      }),
      n.d(t, "getContentTinyMce", function () {
        return m;
      }),
      n.d(t, "addEventHandler", function () {
        return f;
      }),
      n.d(t, "disableMarkerButtons", function () {
        return b;
      }),
      n.d(t, "enableMarkerButtons", function () {
        return h;
      }),
      n.d(t, "isTextViewActive", function () {
        return y;
      }),
      n.d(t, "wpTextViewOnInitCheck", function () {
        return g;
      }),
      n.d(t, "tinyMceEventBinder", function () {
        return v;
      });
    var r,
      a = n(2),
      o = n(93),
      s = n(123),
      i = n(45),
      c = "content",
      l = "description";
    function u(e) {
      r = e;
    }
    function p() {
      return (
        "undefined" != typeof tinyMCE &&
        void 0 !== tinyMCE.editors &&
        0 !== tinyMCE.editors.length
      );
    }
    function d(e) {
      if (!p()) return !1;
      var t = tinyMCE.get(e);
      return null !== t && !t.isHidden();
    }
    function m(e) {
      var t, n, r;
      return (
        (n =
          !1 === d(e) ||
          0 == ((t = e), null !== document.getElementById(t + "_ifr"))
            ? (function (e) {
                return (
                  (document.getElementById(e) &&
                    document.getElementById(e).value) ||
                  ""
                );
              })(e)
            : tinyMCE.get(e).getContent()),
        (r = new RegExp("&amp;", "g")),
        n.replace(r, "&")
      );
    }
    function f(e, t, n) {
      "undefined" != typeof tinyMCE &&
        "function" == typeof tinyMCE.on &&
        tinyMCE.on("addEditor", function (r) {
          var o = r.editor;
          o.id === e &&
            Object(a.forEach)(t, function (e) {
              o.on(e, n);
            });
        });
    }
    function b() {
      Object(a.isUndefined)(r) || r.dispatch(Object(i.b)("disabled"));
    }
    function h() {
      Object(a.isUndefined)(r) || r.dispatch(Object(i.b)("enabled"));
    }
    function y() {
      var e = document.getElementById("wp-content-wrap");
      return !!e && e.classList.contains("html-active");
    }
    function g() {
      y() &&
        (b(),
        p() &&
          tinyMCE.on("AddEditor", function () {
            h();
          }));
    }
    function v(e, t) {
      f(t, ["input", "change", "cut", "paste"], e), f(t, ["hide"], b);
      var n = ["show"];
      new s.a().isPageBuilderActive() || n.push("init"),
        f(t, n, h),
        f("content", ["focus"], function (e) {
          var t = e.target;
          Object(o.a)(t) && (Object(o.b)(t), YoastSEO.app.disableMarkers());
        });
    }
  },
  function (e, t, n) {
    var r = n(99),
      a = n(100),
      o = n(101);
    e.exports = function (e, t) {
      return r(e) || a(e, t) || o();
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "nonReplaceVars", function () {
        return m;
      }),
      n.d(t, "fillReplacementVariables", function () {
        return f;
      }),
      n.d(t, "handlePrefixes", function () {
        return b;
      }),
      n.d(t, "createLabelFromName", function () {
        return h;
      }),
      n.d(t, "pushNewReplaceVar", function () {
        return y;
      }),
      n.d(t, "replaceSpaces", function () {
        return g;
      }),
      n.d(t, "prepareCustomFieldForDispatch", function () {
        return v;
      }),
      n.d(t, "prepareCustomTaxonomyForDispatch", function () {
        return O;
      }),
      n.d(t, "mapCustomTaxonomies", function () {
        return j;
      }),
      n.d(t, "mapCustomFields", function () {
        return w;
      }),
      n.d(t, "excerptFromContent", function () {
        return E;
      }),
      n.d(t, "applyReplaceUsingPlugin", function () {
        return k;
      });
    var r = n(10),
      a = n.n(r),
      o = n(2),
      s = n(80),
      i = n(16);
    function c(e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }
    var l = n(48);
    function u(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function p(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? u(Object(n), !0).forEach(function (t) {
              a()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : u(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var d = n(9).strings.stripHTMLTags,
      m = ["slug", "content", "contentImage", "snippetPreviewImageURL"];
    function f(e, t) {
      Object(o.forEach)(e, function (e, n) {
        m.includes(n) || t.dispatch(Object(i.n)(n, e));
      });
    }
    function b(e) {
      if (!["ct_", "cf_", "pt_"].includes(e.substr(0, 3)))
        return e.replace(/_/g, " ");
      var t = e.slice(0, 3);
      switch (
        (-1 !== (e = e.slice(3)).indexOf("desc_") &&
          (e = e.slice(5) + " description"),
        t)
      ) {
        case "ct_":
          e += " (custom taxonomy)";
          break;
        case "cf_":
          e += " (custom field)";
          break;
        case "pt_":
          e = "Post type (" + (e = e.replace("single", "singular")) + ")";
      }
      return e;
    }
    function h(e) {
      return c((e = b(e)));
    }
    function y(e, t) {
      return (
        e.push({ name: t.name, label: t.label || h(t.name), value: t.value }), e
      );
    }
    function g(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "_";
      return e.replace(/\s/g, t);
    }
    function v(e) {
      return { name: "cf_" + g(e), label: c(e + " (custom field)") };
    }
    function O(e) {
      var t = g(e);
      return {
        name: "ct_" + t,
        label: c(e + " (custom taxonomy)"),
        descriptionName: "ct_desc_" + t,
        descriptionLabel: c(e + " description (custom taxonomy)"),
      };
    }
    function j(e, t) {
      return e.custom_taxonomies
        ? (Object(o.forEach)(e.custom_taxonomies, function (e, n) {
            var r = O(n),
              a = r.name,
              o = r.label,
              s = r.descriptionName,
              c = r.descriptionLabel;
            t.dispatch(Object(i.n)(a, e.name, o)),
              t.dispatch(Object(i.n)(s, e.description, c));
          }),
          Object(o.omit)(p({}, e), "custom_taxonomies"))
        : e;
    }
    function w(e, t) {
      return e.custom_fields
        ? (Object(o.forEach)(e.custom_fields, function (e, n) {
            var r = v(n),
              a = r.name,
              o = r.label;
            t.dispatch(Object(i.n)(a, e, o));
          }),
          Object(o.omit)(p({}, e), "custom_fields"))
        : e;
    }
    function E(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 156;
      return (
        (e = (e = Object(s.stripTags)(e)).trim()).length <= t ||
          ((e = e.substring(0, t)),
          Object(l.isFeatureEnabled)("JAPANESE_SUPPORT")
            ? /\s/.test(e) && (e = e.substring(0, e.lastIndexOf(" ")))
            : (e = e.substring(0, e.lastIndexOf(" ")))),
        e
      );
    }
    var k = function (e) {
      var t = Object(o.get)(window, ["YoastSEO", "app", "pluggable"], !1);
      if (
        !t ||
        !Object(o.get)(window, ["YoastSEO", "app", "pluggable", "loaded"], !1)
      )
        return (function (e) {
          var t = Object(o.get)(
            window,
            ["YoastSEO", "wp", "replaceVarsPlugin", "replaceVariables"],
            o.identity
          );
          return {
            url: e.url,
            title: d(t(e.title)),
            description: d(t(e.description)),
          };
        })(e);
      var n = t._applyModifications.bind(t);
      return {
        url: e.url,
        title: d(n("data_page_title", e.title)),
        description: d(n("data_meta_desc", e.description)),
      };
    };
  },
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    });
    var r = n(3),
      a = n(23),
      o = n(2);
    function s(e) {
      return (
        Object(o.isNil)(e) || (e /= 10),
        (function (e) {
          switch (e) {
            case "feedback":
              return {
                className: "na",
                screenReaderText: Object(r.__)("Feedback", "wordpress-seo"),
                screenReaderReadabilityText: "",
              };
            case "bad":
              return {
                className: "bad",
                screenReaderText: Object(r.__)(
                  "Needs improvement",
                  "wordpress-seo"
                ),
                screenReaderReadabilityText: Object(r.__)(
                  "Needs improvement",
                  "wordpress-seo"
                ),
              };
            case "ok":
              return {
                className: "ok",
                screenReaderText: Object(r.__)("OK SEO score", "wordpress-seo"),
                screenReaderReadabilityText: Object(r.__)(
                  "OK",
                  "wordpress-seo"
                ),
              };
            case "good":
              return {
                className: "good",
                screenReaderText: Object(r.__)(
                  "Good SEO score",
                  "wordpress-seo"
                ),
                screenReaderReadabilityText: Object(r.__)(
                  "Good",
                  "wordpress-seo"
                ),
              };
            default:
              return {
                className: "loading",
                screenReaderText: "",
                screenReaderReadabilityText: "",
              };
          }
        })(a.interpreters.scoreToRating(e))
      );
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return r;
    }),
      n.d(t, "a", function () {
        return a;
      }),
      n.d(t, "d", function () {
        return o;
      }),
      n.d(t, "c", function () {
        return s;
      });
    var r = "SET_SETTINGS",
      a = "SET_CONTENT_IMAGE",
      o = function (e) {
        return { type: r, settings: e };
      },
      s = function (e) {
        return { type: a, src: e };
      };
  },
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = "WPSEO_SET_MARKER_STATUS",
      a = function (e) {
        return { type: r, marksButtonStatus: e };
      };
  },
  function (e, t, n) {
    var r = n(102);
    e.exports = function (e, t) {
      if (null == e) return {};
      var n,
        a,
        o = r(e, t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (a = 0; a < s.length; a++)
          (n = s[a]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (o[n] = e[n]));
      }
      return o;
    };
  },
  function (e, t) {
    function n(e, t, n, r, a, o, s) {
      try {
        var i = e[o](s),
          c = i.value;
      } catch (e) {
        return void n(e);
      }
      i.done ? t(c) : Promise.resolve(c).then(r, a);
    }
    e.exports = function (e) {
      return function () {
        var t = this,
          r = arguments;
        return new Promise(function (a, o) {
          var s = e.apply(t, r);
          function i(e) {
            n(s, a, o, i, c, "next", e);
          }
          function c(e) {
            n(s, a, o, i, c, "throw", e);
          }
          i(void 0);
        });
      };
    };
  },
  function (e, t) {
    e.exports = window.yoast.featureFlag;
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    var r = n(39),
      a = n.n(r),
      o = n(0),
      s = n(6),
      i = n(1),
      c = n.n(i),
      l = function (e) {
        var t = Object(o.useState)(!1),
          n = a()(t, 2),
          r = n[0],
          i = n[1],
          c = e.prefixIcon;
        return Object(o.createElement)(
          "div",
          {
            className: "yoast components-panel__body ".concat(
              r ? "is-opened" : ""
            ),
          },
          Object(o.createElement)(
            "h2",
            { className: "components-panel__body-title" },
            Object(o.createElement)(
              "button",
              {
                onClick: function () {
                  i(!r);
                },
                className: "components-button components-panel__body-toggle",
              },
              Object(o.createElement)(
                "span",
                {
                  className: "yoast-icon-span",
                  style: { fill: "".concat((c && c.color) || "") },
                },
                c &&
                  Object(o.createElement)(s.SvgIcon, {
                    icon: c.icon,
                    color: c.color,
                    size: c.size,
                  })
              ),
              Object(o.createElement)(
                "span",
                { className: "yoast-title-container" },
                Object(o.createElement)(
                  "div",
                  { className: "yoast-title" },
                  e.title
                ),
                Object(o.createElement)(
                  "div",
                  { className: "yoast-subtitle" },
                  e.subTitle
                )
              ),
              Object(o.createElement)("span", {
                className: "yoast-chevron",
                "aria-hidden": "true",
              })
            )
          ),
          r && e.children
        );
      };
    (t.a = l),
      (l.propTypes = {
        title: c.a.string.isRequired,
        children: c.a.oneOfType([c.a.node, c.a.arrayOf(c.a.node)]).isRequired,
        prefixIcon: c.a.object,
        subTitle: c.a.string,
      }),
      (l.defaultProps = { prefixIcon: null, subTitle: "" });
  },
  function (e, t, n) {
    "use strict";
    var r,
      a = n(27),
      o = n.n(a),
      s = n(15),
      i = n.n(s),
      c = n(0),
      l = n(6),
      u = n(12),
      p = n.n(u)()(l.Collapsible)(
        r ||
          (r = i()([
            '\n\th2 > button {\n\t\tpadding-left: 24px;\n\t\tpadding-top: 16px;\n\n\t\t&:hover {\n\t\t\tbackground-color: #f0f0f0;\n\t\t}\n\t}\n\n\tdiv[class^="collapsible_content"] {\n\t\tpadding: 24px 0;\n\t\tmargin: 0 24px;\n\t\tborder-top: 1px solid rgba(0,0,0,0.2);\n\t}\n\n',
          ]))
      );
    t.a = function (e) {
      return Object(c.createElement)(
        p,
        o()({ hasPadding: !0, hasSeparator: !0 }, e)
      );
    };
  },
  function (e, t) {
    e.exports = window.wp.url;
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return p;
    });
    var r = n(27),
      a = n.n(r),
      o = n(46),
      s = n.n(o),
      i = n(0),
      c = n(1),
      l = n.n(c),
      u = n(18),
      p = "yoast yoast-gutenberg-modal",
      d = function (e) {
        var t = e.title,
          n = e.className,
          r = e.showYoastIcon,
          o = e.additionalClassName,
          c = s()(e, [
            "title",
            "className",
            "showYoastIcon",
            "additionalClassName",
          ]),
          l = r
            ? Object(i.createElement)("span", { className: "yoast-icon" })
            : null;
        return Object(i.createElement)(
          u.Modal,
          a()({ title: t, className: "".concat(n, " ").concat(o), icon: l }, c),
          e.children
        );
      };
    (d.propTypes = {
      title: l.a.string,
      className: l.a.string,
      showYoastIcon: l.a.bool,
      children: l.a.oneOfType([l.a.node, l.a.arrayOf(l.a.node)]),
      additionalClassName: l.a.string,
    }),
      (d.defaultProps = {
        title: "Yoast SEO",
        className: p,
        showYoastIcon: !0,
        children: null,
        additionalClassName: "",
      }),
      (t.a = d);
  },
  function (e, t, n) {
    "use strict";
    var r,
      a = n(15),
      o = n.n(a),
      s = n(25),
      i = n(9),
      c = n(12),
      l = n.n(c),
      u = Object(i.makeOutboundLink)(
        l.a.a(
          r ||
            (r = o()(
              [
                "\n\tdisplay: inline-block;\n\tposition: relative;\n\toutline: none;\n\ttext-decoration: none;\n\tborder-radius: 100%;\n\twidth: 24px;\n\theight: 24px;\n\tmargin: -4px 0;\n\tvertical-align: middle;\n\n\tcolor: ",
                ";\n\t\n\t&:hover,\n\t&:focus {\n\t\tcolor: ",
                ";\t\n\t}\n\t\n\t// Overwrite the default blue active color for links.\n\t&:active {\n\t\tcolor: ",
                ';\t\n\t}\n\n\t&::before {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tpadding: 2px;\n\t\tcontent: "\f223";\n\t}\n',
              ],
              [
                "\n\tdisplay: inline-block;\n\tposition: relative;\n\toutline: none;\n\ttext-decoration: none;\n\tborder-radius: 100%;\n\twidth: 24px;\n\theight: 24px;\n\tmargin: -4px 0;\n\tvertical-align: middle;\n\n\tcolor: ",
                ";\n\t\n\t&:hover,\n\t&:focus {\n\t\tcolor: ",
                ";\t\n\t}\n\t\n\t// Overwrite the default blue active color for links.\n\t&:active {\n\t\tcolor: ",
                ';\t\n\t}\n\n\t&::before {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tpadding: 2px;\n\t\tcontent: "\\f223";\n\t}\n',
              ]
            )),
          s.colors.$color_help_text,
          s.colors.$color_snippet_focus,
          s.colors.$color_help_text
        )
      );
    t.a = u;
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return u;
    });
    var r = n(10),
      a = n.n(r),
      o = n(19),
      s = n(0),
      i = n(29);
    function c(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function l(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? c(Object(n), !0).forEach(function (t) {
              a()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : c(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function u() {
      return Object(o.createHigherOrderComponent)(function (e) {
        return Object(o.pure)(function (t) {
          var n = Object(s.useContext)(i.LocationContext);
          return Object(s.createElement)(e, l(l({}, t), {}, { location: n }));
        });
      }, "withLocation");
    }
  },
  function (e, t) {
    e.exports = window.yoast.replacementVariableEditor;
  },
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return T;
    });
    var r = n(27),
      a = n.n(r),
      o = n(46),
      s = n.n(o),
      i = n(10),
      c = n.n(i),
      l = n(5),
      u = n.n(l),
      p = n(7),
      d = n.n(p),
      m = n(11),
      f = n.n(m),
      b = n(13),
      h = n.n(b),
      y = n(14),
      g = n.n(y),
      v = n(8),
      O = n.n(v),
      j = n(0),
      w = n(1),
      E = n.n(w);
    function k(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function _(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? k(Object(n), !0).forEach(function (t) {
              c()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : k(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var T = E.a.shape({
      value: E.a.string.isRequired,
      onChange: E.a.func.isRequired,
    });
    t.a = function (e) {
      return function (t) {
        return (function (n) {
          h()(l, n);
          var r,
            o,
            i =
              ((r = l),
              (o = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  t = O()(r);
                if (o) {
                  var n = O()(this).constructor;
                  e = Reflect.construct(t, arguments, n);
                } else e = t.apply(this, arguments);
                return g()(this, e);
              });
          function l(t) {
            var n;
            u()(this, l), ((n = i.call(this, t)).elements = {});
            var r = {};
            return (
              (n.fields = e(t)),
              n.fields.forEach(function (e) {
                var t = e.name,
                  a = e.fieldId,
                  o = document.getElementById(a);
                o &&
                  ((n.elements[t] = o),
                  (r[t] = {
                    value: o.value,
                    onChange: n.onChange.bind(f()(n), t),
                  }));
              }),
              (n.state = r),
              n
            );
          }
          return (
            d()(
              l,
              [
                {
                  key: "onChange",
                  value: function (e, t) {
                    var n = this;
                    this.setState(
                      _(
                        _({}, this.state),
                        {},
                        c()({}, e, _(_({}, this.state[e]), {}, { value: t }))
                      ),
                      function () {
                        n.elements[e] && (n.elements[e].value = t);
                      }
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      n = e.children,
                      r = s()(e, ["children"]);
                    return Object(j.createElement)(
                      t,
                      a()({}, r, this.state),
                      n
                    );
                  },
                },
              ],
              [
                {
                  key: "propTypes",
                  get: function () {
                    return { children: E.a.node };
                  },
                },
              ]
            ),
            l
          );
        })(j.Component);
      };
    };
  },
  ,
  function (e, t) {
    e.exports = window.wp.apiFetch;
  },
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return p;
    }),
      n.d(t, "b", function () {
        return d;
      });
    var r,
      a,
      o = n(15),
      s = n.n(o),
      i = n(12),
      c = n.n(i),
      l = n(6),
      u = n(9),
      p = c.a.div(
        r ||
          (r = s()([
            "\n\tmin-width: 600px;\n\n\t@media screen and ( max-width: 680px ) {\n\t\tmin-width: 0;\n\t\twidth: 86vw;\n\t}\n",
          ]))
      ),
      d = c()(l.Icon)(
        a ||
          (a = s()([
            "\n\tfloat: ",
            ";\n\tmargin: ",
            ";\n\n\t&& {\n\t\twidth: 150px;\n\t\theight: 150px;\n\n\t\t@media screen and ( max-width: 680px ) {\n\t\t\twidth: 80px;\n\t\t\theight: 80px;\n\t\t}\n\t}\n",
          ])),
        Object(u.getDirectionalStyle)("right", "left"),
        Object(u.getDirectionalStyle)("0 0 16px 16px", "0 16px 16px 0")
      );
  },
  ,
  ,
  function (e, t) {
    function n(t, r) {
      return (
        (e.exports = n =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          }),
        n(t, r)
      );
    }
    e.exports = n;
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t) {
    e.exports = window.wp.sanitize;
  },
  ,
  function (e, t, n) {
    "use strict";
    var r = n(4),
      a = n(19),
      o = n(5),
      s = n.n(o),
      i = n(7),
      c = n.n(i),
      l = n(11),
      u = n.n(l),
      p = n(13),
      d = n.n(p),
      m = n(14),
      f = n.n(m),
      b = n(8),
      h = n.n(b),
      y = n(0),
      g = n(1),
      v = n.n(g),
      O = n(95),
      j = n(23),
      w = n(35);
    var E = (function (e) {
      d()(a, e);
      var t,
        n,
        r =
          ((t = a),
          (n = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            var e,
              r = h()(t);
            if (n) {
              var a = h()(this).constructor;
              e = Reflect.construct(r, arguments, a);
            } else e = r.apply(this, arguments);
            return f()(this, e);
          });
      function a(e) {
        var t;
        s()(this, a);
        var n = (t = r.call(this, e)).props.results;
        return (
          (t.state = { mappedResults: {} }),
          null !== n &&
            (t.state = {
              mappedResults: Object(w.default)(n, t.props.keywordKey),
            }),
          (t.handleMarkButtonClick = t.handleMarkButtonClick.bind(u()(t))),
          t
        );
      }
      return (
        c()(a, [
          {
            key: "componentDidUpdate",
            value: function (e) {
              null !== this.props.results &&
                this.props.results !== e.results &&
                this.setState({
                  mappedResults: Object(w.default)(
                    this.props.results,
                    this.props.keywordKey
                  ),
                });
            },
          },
          {
            key: "handleMarkButtonClick",
            value: function (e, t) {
              var n =
                this.props.keywordKey.length > 0
                  ? "".concat(this.props.keywordKey, ":").concat(e)
                  : e;
              n === this.props.activeMarker
                ? (this.props.setActiveMarker(null),
                  this.props.setMarkerPauseStatus(!1),
                  this.removeMarkers())
                : (this.props.setActiveMarker(n), t());
            },
          },
          {
            key: "removeMarkers",
            value: function () {
              window.YoastSEO.analysis.applyMarks(new j.Paper("", {}), []);
            },
          },
          {
            key: "render",
            value: function () {
              var e = this.state.mappedResults,
                t = e.errorsResults,
                n = e.improvementsResults,
                r = e.goodResults,
                a = e.considerationsResults,
                o = e.problemsResults;
              return Object(y.createElement)(
                y.Fragment,
                null,
                Object(y.createElement)(O.ContentAnalysis, {
                  errorsResults: t,
                  problemsResults: o,
                  improvementsResults: n,
                  considerationsResults: a,
                  goodResults: r,
                  activeMarker: this.props.activeMarker,
                  onMarkButtonClick: this.handleMarkButtonClick,
                  marksButtonClassName: this.props.marksButtonClassName,
                  marksButtonStatus: this.props.marksButtonStatus,
                  headingLevel: 3,
                  keywordKey: this.props.keywordKey,
                })
              );
            },
          },
        ]),
        a
      );
    })(y.Component);
    (E.propTypes = {
      results: v.a.array,
      marksButtonClassName: v.a.string,
      marksButtonStatus: v.a.string,
      setActiveMarker: v.a.func.isRequired,
      setMarkerPauseStatus: v.a.func.isRequired,
      activeMarker: v.a.string,
      keywordKey: v.a.string,
    }),
      (E.defaultProps = {
        results: null,
        marksButtonStatus: "enabled",
        marksButtonClassName: "",
        activeMarker: null,
        keywordKey: "",
      });
    var k = E;
    t.a = Object(a.compose)([
      Object(r.withSelect)(function (e) {
        return { activeMarker: (0, e("yoast-seo/editor").getActiveMarker)() };
      }),
      Object(r.withDispatch)(function (e) {
        var t = e("yoast-seo/editor");
        return {
          setActiveMarker: t.setActiveMarker,
          setMarkerPauseStatus: t.setMarkerPauseStatus,
        };
      }),
    ])(k);
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return k;
    });
    var r = n(10),
      a = n.n(r),
      o = n(5),
      s = n.n(o),
      i = n(7),
      c = n.n(i),
      l = n(11),
      u = n.n(l),
      p = n(13),
      d = n.n(p),
      m = n(14),
      f = n.n(m),
      b = n(8),
      h = n.n(b),
      y = n(0),
      g = n(3),
      v = n(6),
      O = n(1),
      j = n.n(O),
      w = n(63);
    var E = (function (e) {
        d()(o, e);
        var t,
          n,
          r =
            ((t = o),
            (n = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r = h()(t);
              if (n) {
                var a = h()(this).constructor;
                e = Reflect.construct(r, arguments, a);
              } else e = r.apply(this, arguments);
              return f()(this, e);
            });
        function o(e) {
          var t;
          return (
            s()(this, o),
            ((t = r.call(this, e)).initialPageType = e.pageType.value),
            (t.initialArticleType = e.articleType
              ? e.articleType.value
              : "None"),
            (t.state = {
              schema_page_type: t.initialPageType,
              schema_article_type: t.initialArticleType,
            }),
            (t.handleOptionFocus = t.handleOptionFocus.bind(u()(t))),
            t
          );
        }
        return (
          c()(o, [
            {
              key: "shouldShowAlert",
              value: function () {
                return (
                  this.state.schema_page_type !== this.initialPageType ||
                  this.state.schema_article_type !== this.initialArticleType
                );
              },
            },
            {
              key: "handleOptionFocus",
              value: function (e, t) {
                this.setState(a()({}, e, t));
              },
            },
            {
              key: "render",
              value: function () {
                return Object(y.createElement)(
                  y.Fragment,
                  null,
                  Object(y.createElement)(v.FieldGroup, {
                    label: Object(g.__)("Schema settings", "wordpress-seo"),
                    linkTo: "https://yoa.st/404",
                    linkText: Object(g.__)(
                      "Learn more about the schema settings",
                      "wordpress-seo"
                    ),
                    description: Object(g.sprintf)(
                      /* translators: %1$s expands to an indexable object's name, e.g. Posts or Pages. */
                      Object(g.__)(
                        "Choose how your %1$s should be described by default in your site's schema.org markup. You can change these settings for individual %1$s.",
                        "wordpress-seo"
                      ),
                      this.props.postTypeName
                    ),
                  }),
                  this.shouldShowAlert() &&
                    Object(y.createElement)(
                      v.Alert,
                      { type: "warning" },
                      Object(g.sprintf)(
                        /* translators: %1$s expands to an indexable object's name, e.g. Posts or Pages. */
                        Object(g._n)(
                          "Upon saving, this setting will apply to all of your %1$s. %1$s that are manually configured will be left untouched.",
                          "Upon saving, these settings will apply to all of your %1$s. %1$s that are manually configured will be left untouched.",
                          this.props.articleType ? 2 : 1,
                          "wordpress-seo"
                        ),
                        this.props.postTypeName
                      )
                    ),
                  Object(y.createElement)(v.Select, {
                    id: "schema-page-type-".concat(this.props.postType),
                    name: "schema_page_type",
                    options: this.props.pageTypeOptions,
                    label: Object(g.__)("Default Page type", "wordpress-seo"),
                    onChange: this.props.pageType.onChange,
                    selected: this.props.pageType.value,
                    onOptionFocus: this.handleOptionFocus,
                  }),
                  this.props.articleType &&
                    Object(y.createElement)(v.Select, {
                      id: "schema-article-type-".concat(this.props.postType),
                      name: "schema_article_type",
                      options: this.props.articleTypeOptions,
                      label: Object(g.__)(
                        "Default Article type",
                        "wordpress-seo"
                      ),
                      onChange: this.props.articleType.onChange,
                      onOptionFocus: this.handleOptionFocus,
                      selected: this.props.articleType.value,
                    })
                );
              },
            },
          ]),
          o
        );
      })(y.Component),
      k = j.a.arrayOf(j.a.shape({ name: j.a.string, value: j.a.string }));
    (E.propTypes = {
      postType: j.a.string.isRequired,
      postTypeName: j.a.string.isRequired,
      pageType: w.b.isRequired,
      articleType: w.b,
      pageTypeOptions: k.isRequired,
      articleTypeOptions: k.isRequired,
    }),
      (E.defaultProps = { articleType: null }),
      (t.a = Object(w.a)(function (e) {
        return [
          { name: "pageType", fieldId: e.pageTypeFieldId },
          { name: "articleType", fieldId: e.articleTypeFieldId },
        ];
      })(E));
  },
  ,
  function (e, t) {
    e.exports = function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
    };
  },
  function (e, t) {
    e.exports = function (e) {
      if (
        Symbol.iterator in Object(e) ||
        "[object Arguments]" === Object.prototype.toString.call(e)
      )
        return Array.from(e);
    };
  },
  function (e, t) {
    e.exports = function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    };
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      return (function (e) {
        var t = null;
        return (
          (t = window.wp.media()).on("select", function () {
            var n = t.state().get("selection").first(),
              r = {
                type: n.attributes.subtype,
                width: n.attributes.width,
                height: n.attributes.height,
                url: n.attributes.url,
                id: n.attributes.id,
              };
            e(r);
          }),
          t
        );
      })(e).open();
    }
    n.d(t, "a", function () {
      return r;
    });
  },
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return d;
    });
    var r = n(0),
      a = n(3),
      o = n(54),
      s = n(1),
      i = n.n(s),
      c = n(6),
      l = function (e) {
        return Object(r.createElement)(
          "div",
          { className: "yoast components-panel__body" },
          Object(r.createElement)(
            "h2",
            { className: "components-panel__body-title" },
            Object(r.createElement)(
              "button",
              {
                id: e.id,
                onClick: e.onClick,
                className: "components-button components-panel__body-toggle",
              },
              Object(r.createElement)(
                "span",
                { className: "yoast-title-container" },
                Object(r.createElement)(
                  "div",
                  { className: "yoast-title" },
                  e.title
                ),
                Object(r.createElement)(
                  "div",
                  { className: "yoast-subtitle" },
                  e.subTitle
                )
              ),
              e.suffixIcon &&
                Object(r.createElement)(c.SvgIcon, {
                  size: e.suffixIcon.size,
                  icon: e.suffixIcon.icon,
                })
            )
          )
        );
      },
      u = l;
    (l.propTypes = {
      onClick: i.a.func.isRequired,
      title: i.a.string.isRequired,
      id: i.a.string,
      subTitle: i.a.string,
      suffixIcon: i.a.object,
    }),
      (l.defaultProps = { id: "", suffixIcon: null, subTitle: "" });
    var p = n(29),
      d = function (e) {
        return (
          "blur" !== e.type ||
          !(
            !e.relatedTarget ||
            !e.relatedTarget.querySelector(".components-modal__screen-overlay")
          )
        );
      },
      m = function (e) {
        var t = e.id,
          n = e.postTypeName,
          s = e.children,
          i = e.title,
          c = e.isOpen,
          l = e.close,
          m = e.open,
          f = Object(r.useCallback)(
            function (e) {
              d(e) && l();
            },
            [l]
          );
        return Object(r.createElement)(
          r.Fragment,
          null,
          c &&
            Object(r.createElement)(
              p.LocationProvider,
              { value: "modal" },
              Object(r.createElement)(
                o.a,
                {
                  title: i,
                  onRequestClose: f,
                  additionalClassName:
                    "yoast-collapsible-modal yoast-post-settings-modal",
                },
                Object(r.createElement)(
                  "div",
                  { className: "yoast-content-container" },
                  Object(r.createElement)(
                    "div",
                    { className: "yoast-modal-content" },
                    s
                  )
                ),
                Object(r.createElement)(
                  "div",
                  { className: "yoast-notice-container" },
                  Object(r.createElement)("hr", null),
                  Object(r.createElement)(
                    "div",
                    { className: "yoast-button-container" },
                    Object(r.createElement)(
                      "p",
                      null,
                      /* Translators: %s translates to the Post Label in singular form */
                      Object(a.sprintf)(
                        Object(a.__)(
                          "Make sure to save your %s for changes to take effect",
                          "wordpress-seo"
                        ),
                        n
                      )
                    ),
                    Object(r.createElement)(
                      "button",
                      {
                        className:
                          "yoast-button yoast-button--primary yoast-button--post-settings-modal",
                        type: "button",
                        onClick: f,
                      },
                      /* Translators: %s translates to the Post Label in singular form */
                      Object(a.sprintf)(
                        Object(a.__)("Return to your %s", "wordpress-seo"),
                        n
                      )
                    )
                  )
                )
              )
            ),
          Object(r.createElement)(u, {
            id: t + "-open-button",
            title: i,
            suffixIcon: { size: "20px", icon: "pencil-square" },
            onClick: m,
          })
        );
      };
    (m.propTypes = {
      id: i.a.string.isRequired,
      postTypeName: i.a.string.isRequired,
      children: i.a.oneOfType([i.a.node, i.a.arrayOf(i.a.node)]).isRequired,
      title: i.a.string.isRequired,
      isOpen: i.a.bool.isRequired,
      open: i.a.func.isRequired,
      close: i.a.func.isRequired,
    }),
      (t.a = m);
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return s;
    }),
      n.d(t, "a", function () {
        return i;
      }),
      n.d(t, "b", function () {
        return c;
      });
    var r = n(23),
      a = n(2);
    function o(e, t, n) {
      var o = e.dom,
        s = e.getContent();
      (s = r.markers.removeMarks(s)),
        Object(a.forEach)(n, function (e) {
          s = e.applyWithReplace(s);
        }),
        e.setContent(s),
        (function (e) {
          var t = e.getContent();
          (t = t
            .replace(new RegExp("&lt;yoastmark.+?&gt;", "g"), "")
            .replace(new RegExp("&lt;/yoastmark&gt;", "g"), "")),
            e.setContent(t);
        })(e);
      var i = o.select("yoastmark");
      Object(a.forEach)(i, function (e) {
        e.setAttribute("data-mce-bogus", "1");
      });
    }
    function s(e) {
      return (window.test = e), o.bind(null, e);
    }
    function i(e) {
      return -1 !== e.getContent({ format: "raw" }).indexOf("<yoastmark");
    }
    function c(e) {
      s(e)(null, []);
    }
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      return function () {
        return e;
      };
    }
    var a = function () {};
    (a.thatReturns = r),
      (a.thatReturnsFalse = r(!1)),
      (a.thatReturnsTrue = r(!0)),
      (a.thatReturnsNull = r(null)),
      (a.thatReturnsThis = function () {
        return this;
      }),
      (a.thatReturnsArgument = function (e) {
        return e;
      }),
      (e.exports = a);
  },
  function (e, t) {
    e.exports = window.yoast.analysisReport;
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      a = n(6),
      o = n(1),
      s = n.n(o),
      i = n(35),
      c = n(36),
      l = function (e) {
        var t = e.target,
          n = e.scoreIndicator;
        return Object(r.createElement)(
          c.a,
          { target: t },
          Object(r.createElement)(a.SvgIcon, Object(i.getIconForScore)(n))
        );
      };
    (l.propTypes = {
      target: s.a.string.isRequired,
      scoreIndicator: s.a.string.isRequired,
    }),
      (t.a = l);
  },
  ,
  function (e, t, n) {
    "use strict";
    var r,
      a = n(5),
      o = n.n(a),
      s = n(7),
      i = n.n(s),
      c = n(11),
      l = n.n(c),
      u = n(13),
      p = n.n(u),
      d = n(14),
      m = n.n(d),
      f = n(8),
      b = n.n(f),
      h = n(0),
      y = n(1),
      g = n.n(y),
      v = n(15),
      O = n.n(v),
      j = n(12),
      w = n.n(j),
      E = n(37),
      k = n.n(E),
      _ = n(3),
      T = n(6),
      R = n(9),
      S = w()(T.Alert)(r || (r = O()(["\n\tp {\n\t\tmargin: 0;\n\t}\n"]))),
      x = Object(R.makeOutboundLink)(),
      C = function (e) {
        var t = Object(_.sprintf)(
            /* Translators: %s expands to the social medium name, which is either Twitter or Facebook. %s expands to Yoast SEO Premium */
            Object(_.__)(
              "Want to see how your content will look when it’s shared on %s?",
              "wordpress-seo"
            ),
            e.socialMediumName
          ),
          n = Object(_.sprintf)(
            /* Translators: %s expands to Yoast SEO Premium */
            Object(_.__)("Get %s to unlock social previews!", "wordpress-seo"),
            "Yoast SEO Premium"
          );
        return Object(h.createElement)(
          h.Fragment,
          null,
          Object(h.createElement)(
            S,
            { type: "info" },
            k()({
              mixedString: t,
              components: { strong: Object(h.createElement)("b", null) },
            }),
            Object(h.createElement)("br", null),
            Object(h.createElement)(
              x,
              { href: wpseoAdminL10n["shortlinks.upsell.social_previews"] },
              Object(h.createElement)("p", null, n)
            )
          )
        );
      };
    C.propTypes = {
      socialMediumName: g.a.oneOf(["Twitter", "Facebook"]).isRequired,
    };
    var P = C,
      I = n(149),
      A = n(59);
    var L = (function (e) {
      p()(a, e);
      var t,
        n,
        r =
          ((t = a),
          (n = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            var e,
              r = b()(t);
            if (n) {
              var a = b()(this).constructor;
              e = Reflect.construct(r, arguments, a);
            } else e = r.apply(this, arguments);
            return m()(this, e);
          });
      function a(e) {
        var t;
        return (
          o()(this, a),
          ((t = r.call(this, e)).state = { activeField: "", hoveredField: "" }),
          (t.setHoveredField = t.setHoveredField.bind(l()(t))),
          (t.setActiveField = t.setActiveField.bind(l()(t))),
          (t.setEditorRef = t.setEditorRef.bind(l()(t))),
          (t.setEditorFocus = t.setEditorFocus.bind(l()(t))),
          t
        );
      }
      return (
        i()(a, [
          {
            key: "setHoveredField",
            value: function (e) {
              e !== this.state.hoveredField &&
                this.setState({ hoveredField: e });
            },
          },
          {
            key: "setActiveField",
            value: function (e) {
              var t = this;
              e !== this.state.activeField &&
                this.setState({ activeField: e }, function () {
                  return t.setEditorFocus(e);
                });
            },
          },
          {
            key: "setEditorFocus",
            value: function (e) {
              switch (e) {
                case "title":
                  this.titleEditorRef.focus();
                  break;
                case "description":
                  this.descriptionEditorRef.focus();
              }
            },
          },
          {
            key: "setEditorRef",
            value: function (e, t) {
              switch (e) {
                case "title":
                  this.titleEditorRef = t;
                  break;
                case "description":
                  this.descriptionEditorRef = t;
              }
            },
          },
          {
            key: "render",
            value: function () {
              var e = this.props,
                t = e.onDescriptionChange,
                n = e.onTitleChange,
                r = e.onSelectImageClick,
                a = e.onRemoveImageClick,
                o = e.socialMediumName,
                s = e.imageWarnings,
                i = e.description,
                c = e.descriptionInputPlaceholder,
                l = e.imageUrl,
                u = e.title,
                p = e.titleInputPlaceholder,
                d = e.replacementVariables,
                m = e.recommendedReplacementVariables,
                f = e.isPremium,
                b = e.location;
              return Object(h.createElement)(
                h.Fragment,
                null,
                Object(h.createElement)(P, { socialMediumName: o }),
                Object(h.createElement)(I.SocialMetadataPreviewForm, {
                  onDescriptionChange: t,
                  socialMediumName: o,
                  title: u,
                  titleInputPlaceholder: p,
                  onRemoveImageClick: a,
                  imageSelected: !!l,
                  imageUrl: l,
                  onTitleChange: n,
                  onSelectImageClick: r,
                  description: i,
                  descriptionInputPlaceholder: c,
                  imageWarnings: s,
                  replacementVariables: d,
                  recommendedReplacementVariables: m,
                  onMouseHover: this.setHoveredField,
                  hoveredField: this.state.hoveredField,
                  onSelect: this.setActiveField,
                  activeField: this.state.activeField,
                  isPremium: f,
                  setEditorRef: this.setEditorRef,
                  idSuffix: b,
                })
              );
            },
          },
        ]),
        a
      );
    })(h.Component);
    (L.propTypes = {
      title: g.a.string.isRequired,
      onTitleChange: g.a.func.isRequired,
      description: g.a.string.isRequired,
      onDescriptionChange: g.a.func.isRequired,
      imageUrl: g.a.string.isRequired,
      onSelectImageClick: g.a.func.isRequired,
      onRemoveImageClick: g.a.func.isRequired,
      socialMediumName: g.a.string.isRequired,
      isPremium: g.a.bool,
      imageWarnings: g.a.array,
      descriptionInputPlaceholder: g.a.string,
      titleInputPlaceholder: g.a.string,
      replacementVariables: A.replacementVariablesShape,
      recommendedReplacementVariables: A.recommendedReplacementVariablesShape,
      location: g.a.string,
    }),
      (L.defaultProps = {
        imageWarnings: [],
        recommendedReplacementVariables: [],
        replacementVariables: [],
        isPremium: !1,
        descriptionInputPlaceholder: "",
        titleInputPlaceholder: "",
        location: "",
      }),
      (t.a = L);
  },
  function (e, t) {
    e.exports = function (e) {
      if (Array.isArray(e)) return e;
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      if (
        Symbol.iterator in Object(e) ||
        "[object Arguments]" === Object.prototype.toString.call(e)
      ) {
        var n = [],
          _n = !0,
          r = !1,
          a = void 0;
        try {
          for (
            var o, s = e[Symbol.iterator]();
            !(_n = (o = s.next()).done) &&
            (n.push(o.value), !t || n.length !== t);
            _n = !0
          );
        } catch (e) {
          (r = !0), (a = e);
        } finally {
          try {
            _n || null == s.return || s.return();
          } finally {
            if (r) throw a;
          }
        }
        return n;
      }
    };
  },
  function (e, t) {
    e.exports = function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      if (null == e) return {};
      var n,
        r,
        a = {},
        o = Object.keys(e);
      for (r = 0; r < o.length; r++)
        (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      a = n(1),
      o = n.n(a),
      s = n(12),
      i = n(29),
      c = function (e) {
        var t = e.theme,
          n = e.location,
          a = e.children;
        return Object(r.createElement)(
          i.LocationProvider,
          { value: n },
          Object(r.createElement)(s.ThemeProvider, { theme: t }, a)
        );
      };
    (c.propTypes = {
      theme: o.a.object.isRequired,
      location: o.a.oneOf(["sidebar", "metabox", "modal"]).isRequired,
      children: o.a.element.isRequired,
    }),
      (t.a = c);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    });
    var r,
      a,
      o = n(17);
    function s() {
      return (s =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function i(e) {
      return o.createElement(
        "svg",
        s(
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 425 456.27",
            "aria-hidden": "true",
          },
          e
        ),
        r ||
          (r = o.createElement("path", {
            d: "M73 405.26a66.79 66.79 0 01-6.54-1.7 64.75 64.75 0 01-6.28-2.31c-1-.42-2-.89-3-1.37-1.49-.72-3-1.56-4.77-2.56-1.5-.88-2.71-1.64-3.83-2.39-.9-.61-1.8-1.26-2.68-1.92a70.154 70.154 0 01-5.08-4.19 69.21 69.21 0 01-8.4-9.17c-.92-1.2-1.68-2.25-2.35-3.24a70.747 70.747 0 01-3.44-5.64 68.29 68.29 0 01-8.29-32.55V142.13a68.26 68.26 0 018.29-32.55c1-1.92 2.21-3.82 3.44-5.64s2.55-3.58 4-5.27a69.26 69.26 0 0114.49-13.25C50.37 84.19 52.27 83 54.2 82A67.59 67.59 0 0173 75.09a68.75 68.75 0 0113.75-1.39h169.66L263 55.39H86.75A86.84 86.84 0 000 142.13v196.09A86.84 86.84 0 0086.75 425h11.32v-18.35H86.75A68.75 68.75 0 0173 405.26zM368.55 60.85l-1.41-.53-6.41 17.18 1.41.53a68.06 68.06 0 018.66 4c1.93 1 3.82 2.2 5.65 3.43A69.19 69.19 0 01391 98.67c1.4 1.68 2.72 3.46 3.95 5.27s2.39 3.72 3.44 5.64a68.29 68.29 0 018.29 32.55v264.52H233.55l-.44.76c-3.07 5.37-6.26 10.48-9.49 15.19L222 425h203V142.13a87.2 87.2 0 00-56.45-81.28z",
          })),
        a ||
          (a = o.createElement("path", {
            d: "M119.8 408.28v46c28.49-1.12 50.73-10.6 69.61-29.58 19.45-19.55 36.17-50 52.61-96L363.94 1.9H305l-98.25 272.89-48.86-153h-54l71.7 184.18a75.67 75.67 0 010 55.12c-7.3 18.68-20.25 40.66-55.79 47.19z",
            stroke: "#000",
            strokeMiterlimit: 10,
            strokeWidth: 3.81,
          }))
      );
    }
  },
  function (e, t, n) {
    "use strict";
    var r,
      a = n(15),
      o = n.n(a),
      s = n(0),
      i = n(1),
      c = n.n(i),
      l = n(12),
      u = n.n(l),
      p = n(6),
      d = n(9),
      m = u()(p.StyledSection)(
        r ||
          (r = o()([
            "\n\t&",
            " {\n\t\tpadding: 0;\n\n\t\t& ",
            " {\n\t\t\t",
            ": 20px;\n\t\t\tmargin-left: ",
            ";\n\t\t}\n\t}\n",
          ])),
        p.StyledSectionBase,
        p.StyledHeading,
        Object(d.getDirectionalStyle)("padding-left", "padding-right"),
        Object(d.getDirectionalStyle)("0", "20px")
      ),
      f = function (e) {
        var t = e.children,
          n = e.title,
          r = e.icon,
          a = e.hasPaperStyle,
          o = e.shoppingData;
        return Object(s.createElement)(
          m,
          {
            headingLevel: 3,
            headingText: n,
            headingIcon: r,
            headingIconColor: "#555",
            hasPaperStyle: a,
            shoppingData: o,
          },
          t
        );
      };
    (f.propTypes = {
      children: c.a.element,
      title: c.a.string,
      icon: c.a.string,
      hasPaperStyle: c.a.bool,
      shoppingData: c.a.object,
    }),
      (f.defaultProps = { hasPaperStyle: !0, shoppingData: null }),
      (t.a = f);
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    var r = n(4),
      a = n(19),
      o = n(0),
      s = n(3),
      i = n(1),
      c = n.n(i),
      l = n(2),
      u = n(6),
      p = function () {
        return Object(o.createElement)(
          "p",
          { className: "yoast-related-keyphrases-modal__loading-message" },
          Object(s.sprintf)(
            /* translators: %1$s expands to "Yoast SEO", %2$s expands to "Semrush". */
            Object(s.__)(
              "Please wait while %1$s connects to %2$s to get related keyphrases...",
              "wordpress-seo"
            ),
            "Yoast SEO",
            "Semrush"
          ),
          " ",
          Object(o.createElement)(u.SvgIcon, { icon: "loading-spinner" })
        );
      },
      d = n(9),
      m = Object(d.makeOutboundLink)(),
      f = function () {
        return Object(o.createElement)(
          o.Fragment,
          null,
          Object(o.createElement)(
            "p",
            null,
            Object(s.sprintf)(
              /* translators: %s : Expands to "Semrush". */
              Object(s.__)(
                "You've reached your request limit for today. Check back tomorrow or upgrade your plan over at %s.",
                "wordpress-seo"
              ),
              "Semrush"
            )
          ),
          Object(o.createElement)(
            m,
            {
              href: window.wpseoAdminL10n["shortlinks.semrush.prices"],
              className: "yoast-button-upsell",
            },
            Object(s.sprintf)(
              /* translators: %s : Expands to "Semrush". */
              Object(s.__)("Upgrade your %s plan", "wordpress-seo"),
              "Semrush"
            ),
            Object(o.createElement)("span", {
              "aria-hidden": "true",
              className: "yoast-button-upsell__caret",
            })
          )
        );
      },
      b = n(47),
      h = n.n(b),
      y = n(5),
      g = n.n(y),
      v = n(7),
      O = n.n(v),
      j = n(11),
      w = n.n(j),
      E = n(13),
      k = n.n(E),
      _ = n(14),
      T = n.n(_),
      R = n(8),
      S = n.n(R),
      x = n(26),
      C = n.n(x),
      P = n(65),
      I = n.n(P),
      A = n(53);
    var L = "yoast-semrush-country-selector",
      N = [
        { value: "us", name: "United States - US" },
        { value: "uk", name: "United Kingdom - UK" },
        { value: "ca", name: "Canada - CA" },
        { value: "ru", name: "Russia - RU" },
        { value: "de", name: "Germany - DE" },
        { value: "fr", name: "France - FR" },
        { value: "es", name: "Spain - ES" },
        { value: "it", name: "Italy - IT" },
        { value: "br", name: "Brazil - BR" },
        { value: "au", name: "Australia - AU" },
        { value: "ar", name: "Argentina - AR" },
        { value: "be", name: "Belgium - BE" },
        { value: "ch", name: "Switzerland - CH" },
        { value: "dk", name: "Denmark - DK" },
        { value: "fi", name: "Finland - FI" },
        { value: "hk", name: "Hong Kong - HK" },
        { value: "ie", name: "Ireland - IE" },
        { value: "il", name: "Israel - IL" },
        { value: "mx", name: "Mexico - MX" },
        { value: "nl", name: "Netherlands - NL" },
        { value: "no", name: "Norway - NO" },
        { value: "pl", name: "Poland - PL" },
        { value: "se", name: "Sweden - SE" },
        { value: "sg", name: "Singapore - SG" },
        { value: "tr", name: "Turkey - TR" },
        { value: "jp", name: "Japan - JP" },
        { value: "in", name: "India - IN" },
        { value: "hu", name: "Hungary - HU" },
        { value: "af", name: "Afghanistan - AF" },
        { value: "al", name: "Albania - AL" },
        { value: "dz", name: "Algeria - DZ" },
        { value: "ao", name: "Angola - AO" },
        { value: "am", name: "Armenia - AM" },
        { value: "at", name: "Austria - AT" },
        { value: "az", name: "Azerbaijan - AZ" },
        { value: "bh", name: "Bahrain - BH" },
        { value: "bd", name: "Bangladesh - BD" },
        { value: "by", name: "Belarus - BY" },
        { value: "bz", name: "Belize - BZ" },
        { value: "bo", name: "Bolivia - BO" },
        { value: "ba", name: "Bosnia and Herzegovina - BA" },
        { value: "bw", name: "Botswana - BW" },
        { value: "bn", name: "Brunei - BN" },
        { value: "bg", name: "Bulgaria - BG" },
        { value: "cv", name: "Cabo Verde - CV" },
        { value: "kh", name: "Cambodia - KH" },
        { value: "cm", name: "Cameroon - CM" },
        { value: "cl", name: "Chile - CL" },
        { value: "co", name: "Colombia - CO" },
        { value: "cr", name: "Costa Rica - CR" },
        { value: "hr", name: "Croatia - HR" },
        { value: "cy", name: "Cyprus - CY" },
        { value: "cz", name: "Czech Republic - CZ" },
        { value: "cd", name: "Congo - CD" },
        { value: "do", name: "Dominican Republic - DO" },
        { value: "ec", name: "Ecuador - EC" },
        { value: "eg", name: "Egypt - EG" },
        { value: "sv", name: "El Salvador - SV" },
        { value: "ee", name: "Estonia - EE" },
        { value: "et", name: "Ethiopia - ET" },
        { value: "ge", name: "Georgia - GE" },
        { value: "gh", name: "Ghana - GH" },
        { value: "gr", name: "Greece - GR" },
        { value: "gt", name: "Guatemala - GT" },
        { value: "gy", name: "Guyana - GY" },
        { value: "ht", name: "Haiti - HT" },
        { value: "hn", name: "Honduras - HN" },
        { value: "is", name: "Iceland - IS" },
        { value: "id", name: "Indonesia - ID" },
        { value: "jm", name: "Jamaica - JM" },
        { value: "jo", name: "Jordan - JO" },
        { value: "kz", name: "Kazakhstan - KZ" },
        { value: "kw", name: "Kuwait - KW" },
        { value: "lv", name: "Latvia - LV" },
        { value: "lb", name: "Lebanon - LB" },
        { value: "lt", name: "Lithuania - LT" },
        { value: "lu", name: "Luxembourg - LU" },
        { value: "mg", name: "Madagascar - MG" },
        { value: "my", name: "Malaysia - MY" },
        { value: "mt", name: "Malta - MT" },
        { value: "mu", name: "Mauritius - MU" },
        { value: "md", name: "Moldova - MD" },
        { value: "mn", name: "Mongolia - MN" },
        { value: "me", name: "Montenegro - ME" },
        { value: "ma", name: "Morocco - MA" },
        { value: "mz", name: "Mozambique - MZ" },
        { value: "na", name: "Namibia - NA" },
        { value: "np", name: "Nepal - NP" },
        { value: "nz", name: "New Zealand - NZ" },
        { value: "ni", name: "Nicaragua - NI" },
        { value: "ng", name: "Nigeria - NG" },
        { value: "om", name: "Oman - OM" },
        { value: "py", name: "Paraguay - PY" },
        { value: "pe", name: "Peru - PE" },
        { value: "ph", name: "Philippines - PH" },
        { value: "pt", name: "Portugal - PT" },
        { value: "ro", name: "Romania - RO" },
        { value: "sa", name: "Saudi Arabia - SA" },
        { value: "sn", name: "Senegal - SN" },
        { value: "rs", name: "Serbia - RS" },
        { value: "sk", name: "Slovakia - SK" },
        { value: "si", name: "Slovenia - SI" },
        { value: "za", name: "South Africa - ZA" },
        { value: "kr", name: "South Korea - KR" },
        { value: "lk", name: "Sri Lanka - LK" },
        { value: "th", name: "Thailand - TH" },
        { value: "bs", name: "Bahamas - BS" },
        { value: "tt", name: "Trinidad and Tobago - TT" },
        { value: "tn", name: "Tunisia - TN" },
        { value: "ua", name: "Ukraine - UA" },
        { value: "ae", name: "United Arab Emirates - AE" },
        { value: "uy", name: "Uruguay - UY" },
        { value: "ve", name: "Venezuela - VE" },
        { value: "vn", name: "Vietnam - VN" },
        { value: "zm", name: "Zambia - ZM" },
        { value: "zw", name: "Zimbabwe - ZW" },
        { value: "ly", name: "Libya - LY" },
      ],
      q = (function (e) {
        k()(c, e);
        var t,
          n,
          r,
          a,
          i =
            ((r = c),
            (a = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                t = S()(r);
              if (a) {
                var n = S()(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return T()(this, e);
            });
        function c(e) {
          var t;
          return (
            g()(this, c),
            ((t = i.call(this, e)).relatedKeyphrasesRequest =
              t.relatedKeyphrasesRequest.bind(w()(t))),
            (t.onChangeHandler = t.onChangeHandler.bind(w()(t))),
            t
          );
        }
        return (
          O()(c, [
            {
              key: "componentDidMount",
              value: function () {
                (this.props.response &&
                  this.props.keyphrase === this.props.lastRequestKeyphrase) ||
                  this.relatedKeyphrasesRequest();
              },
            },
            {
              key: "storeCountryCode",
              value: function (e) {
                I()({
                  path: "yoast/v1/semrush/country_code",
                  method: "POST",
                  data: { country_code: e },
                });
              },
            },
            {
              key: "relatedKeyphrasesRequest",
              value:
                ((n = h()(
                  C.a.mark(function e() {
                    var t, n, r, a;
                    return C.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = this.props),
                                (n = t.keyphrase),
                                (r = t.countryCode),
                                (0, t.newRequest)(r, n),
                                this.storeCountryCode(r),
                                (e.next = 5),
                                this.doRequest(n, r)
                              );
                            case 5:
                              if (200 !== (a = e.sent).status) {
                                e.next = 9;
                                break;
                              }
                              return (
                                this.handleSuccessResponse(a),
                                e.abrupt("return")
                              );
                            case 9:
                              this.handleFailedResponse(a);
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function () {
                  return n.apply(this, arguments);
                }),
            },
            {
              key: "handleSuccessResponse",
              value: function (e) {
                var t = this.props,
                  n = t.setNoResultsFound,
                  r = t.setRequestSucceeded;
                0 !== e.results.rows.length ? r(e) : n();
              },
            },
            {
              key: "handleFailedResponse",
              value: function (e) {
                var t = this.props,
                  n = t.setRequestLimitReached,
                  r = t.setRequestFailed;
                "error" in e &&
                  (e.error.includes("TOTAL LIMIT EXCEEDED") ? n() : r(e));
              },
            },
            {
              key: "doRequest",
              value:
                ((t = h()(
                  C.a.mark(function e(t, n) {
                    return C.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              I()({
                                path: Object(A.addQueryArgs)(
                                  "/yoast/v1/semrush/related_keyphrases",
                                  { keyphrase: t, country_code: n }
                                ),
                              })
                            );
                          case 2:
                            return e.abrupt("return", e.sent);
                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )),
                function (_x, e) {
                  return t.apply(this, arguments);
                }),
            },
            {
              key: "onChangeHandler",
              value: function (e) {
                this.props.setCountry(e);
              },
            },
            {
              key: "render",
              value: function () {
                return Object(o.createElement)(
                  "div",
                  { id: L },
                  Object(o.createElement)(u.SingleSelect, {
                    id: L + "-select",
                    label: Object(s.__)("Show results for:", "wordpress-seo"),
                    name: "semrush-country-code",
                    options: N,
                    selected: this.props.countryCode,
                    onChange: this.onChangeHandler,
                    wrapperClassName:
                      "yoast-field-group yoast-field-group--inline",
                  }),
                  Object(o.createElement)(
                    u.NewButton,
                    {
                      id: L + "-button",
                      variant: "secondary",
                      onClick: this.relatedKeyphrasesRequest,
                    },
                    Object(s.__)("Select country", "wordpress-seo")
                  )
                );
              },
            },
          ]),
          c
        );
      })(o.Component);
    (q.propTypes = {
      keyphrase: c.a.string,
      countryCode: c.a.string,
      response: c.a.object,
      lastRequestKeyphrase: c.a.string,
      setCountry: c.a.func.isRequired,
      newRequest: c.a.func.isRequired,
      setNoResultsFound: c.a.func.isRequired,
      setRequestSucceeded: c.a.func.isRequired,
      setRequestLimitReached: c.a.func.isRequired,
      setRequestFailed: c.a.func.isRequired,
    }),
      (q.defaultProps = {
        keyphrase: "",
        countryCode: "us",
        response: {},
        lastRequestKeyphrase: "",
      });
    var D = q,
      M = n(31),
      F = n.n(M),
      B = function (e) {
        var t = e.data,
          n = e.mapChartDataToTableData,
          r = e.dataTableCaption,
          a = e.dataTableHeaderLabels,
          i = e.isDataTableVisuallyHidden;
        return t.length !== a.length
          ? Object(o.createElement)(
              "p",
              null,
              Object(s.__)(
                "The number of headers and header labels don't match.",
                "wordpress-seo"
              )
            )
          : Object(o.createElement)(
              "div",
              { className: i ? "screen-reader-text" : null },
              Object(o.createElement)(
                "table",
                null,
                Object(o.createElement)("caption", null, r),
                Object(o.createElement)(
                  "thead",
                  null,
                  Object(o.createElement)(
                    "tr",
                    null,
                    a.map(function (e, t) {
                      return Object(o.createElement)("th", { key: t }, e);
                    })
                  )
                ),
                Object(o.createElement)(
                  "tbody",
                  null,
                  Object(o.createElement)(
                    "tr",
                    null,
                    t.map(function (e, t) {
                      return Object(o.createElement)("td", { key: t }, n(e.y));
                    })
                  )
                )
              )
            );
      };
    (B.propTypes = {
      data: c.a.arrayOf(c.a.shape({ x: c.a.number, y: c.a.number })).isRequired,
      mapChartDataToTableData: c.a.func,
      dataTableCaption: c.a.string.isRequired,
      dataTableHeaderLabels: c.a.array.isRequired,
      isDataTableVisuallyHidden: c.a.bool,
    }),
      (B.defaultProps = {
        mapChartDataToTableData: null,
        isDataTableVisuallyHidden: !0,
      });
    var K = B,
      U = function (e) {
        var t = e.data,
          n = e.width,
          r = e.height,
          a = e.fillColor,
          s = e.strokeColor,
          i = e.strokeWidth,
          c = e.className,
          l = e.mapChartDataToTableData,
          u = e.dataTableCaption,
          p = e.dataTableHeaderLabels,
          d = e.isDataTableVisuallyHidden,
          m = Math.max(
            1,
            Math.max.apply(
              Math,
              F()(
                t.map(function (e) {
                  return e.x;
                })
              )
            )
          ),
          f = Math.max(
            1,
            Math.max.apply(
              Math,
              F()(
                t.map(function (e) {
                  return e.y;
                })
              )
            )
          ),
          b = r - i,
          h = t
            .map(function (e) {
              var t = (e.x / m) * n,
                r = b - (e.y / f) * b + i;
              return "".concat(t, ",").concat(r);
            })
            .join(" "),
          y = "0,".concat(b + i, " ") + h + " ".concat(n, ",").concat(b + i);
        return Object(o.createElement)(
          o.Fragment,
          null,
          Object(o.createElement)(
            "svg",
            {
              width: n,
              height: r,
              viewBox: "0 0 ".concat(n, " ").concat(r),
              className: c,
              role: "img",
              "aria-hidden": "true",
              focusable: "false",
            },
            Object(o.createElement)("polygon", { fill: a, points: y }),
            Object(o.createElement)("polyline", {
              fill: "none",
              stroke: s,
              strokeWidth: i,
              strokeLinejoin: "round",
              strokeLinecap: "round",
              points: h,
            })
          ),
          l &&
            Object(o.createElement)(K, {
              data: t,
              mapChartDataToTableData: l,
              dataTableCaption: u,
              dataTableHeaderLabels: p,
              isDataTableVisuallyHidden: d,
            })
        );
      };
    (U.propTypes = {
      data: c.a.arrayOf(c.a.shape({ x: c.a.number, y: c.a.number })).isRequired,
      width: c.a.number.isRequired,
      height: c.a.number.isRequired,
      fillColor: c.a.string,
      strokeColor: c.a.string,
      strokeWidth: c.a.number,
      className: c.a.string,
      mapChartDataToTableData: c.a.func,
      dataTableCaption: c.a.string.isRequired,
      dataTableHeaderLabels: c.a.array.isRequired,
      isDataTableVisuallyHidden: c.a.bool,
    }),
      (U.defaultProps = {
        fillColor: null,
        strokeColor: "#000000",
        strokeWidth: 1,
        className: "",
        mapChartDataToTableData: null,
        isDataTableVisuallyHidden: !0,
      });
    var H = U,
      Y = n(55);
    var V = Object(d.makeOutboundLink)(),
      z = (function (e) {
        k()(a, e);
        var t,
          n,
          r =
            ((t = a),
            (n = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r = S()(t);
              if (n) {
                var a = S()(this).constructor;
                e = Reflect.construct(r, arguments, a);
              } else e = r.apply(this, arguments);
              return T()(this, e);
            });
        function a(e) {
          var t;
          return (
            g()(this, a),
            ((t = r.call(this, e)).transformTrendDataToChartPoints =
              t.transformTrendDataToChartPoints.bind(w()(t))),
            (t.getAreaChartDataTableHeaderLabels =
              t.getAreaChartDataTableHeaderLabels.bind(w()(t))),
            (t.mapAreaChartDataToTableData = t.mapAreaChartDataToTableData.bind(
              w()(t)
            )),
            t
          );
        }
        return (
          O()(a, [
            {
              key: "transformTrendDataToChartPoints",
              value: function (e) {
                return e.split(",").map(function (e, t) {
                  return { x: t, y: parseFloat(e) };
                });
              },
            },
            {
              key: "getAreaChartDataTableHeaderLabels",
              value: function () {
                return [
                  Object(s.__)("Twelve months ago", "wordpress-seo"),
                  Object(s.__)("Eleven months ago", "wordpress-seo"),
                  Object(s.__)("Ten months ago", "wordpress-seo"),
                  Object(s.__)("Nine months ago", "wordpress-seo"),
                  Object(s.__)("Eight months ago", "wordpress-seo"),
                  Object(s.__)("Seven months ago", "wordpress-seo"),
                  Object(s.__)("Six months ago", "wordpress-seo"),
                  Object(s.__)("Five months ago", "wordpress-seo"),
                  Object(s.__)("Four months ago", "wordpress-seo"),
                  Object(s.__)("Three months ago", "wordpress-seo"),
                  Object(s.__)("Two months ago", "wordpress-seo"),
                  Object(s.__)("Last month", "wordpress-seo"),
                ];
              },
            },
            {
              key: "mapAreaChartDataToTableData",
              value: function (e) {
                return Math.round(100 * e);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props,
                  n = t.keyphrase,
                  r = t.relatedKeyphrases,
                  a = t.countryCode,
                  i = t.data,
                  c = t.renderAction,
                  u =
                    "https://www.semrush.com/analytics/keywordoverview/?q=" +
                    encodeURIComponent(n) +
                    "&db=" +
                    encodeURIComponent(a);
                return (
                  i &&
                  !Object(l.isEmpty)(i.results) &&
                  Object(o.createElement)(
                    o.Fragment,
                    null,
                    Object(o.createElement)(
                      "table",
                      { className: "yoast yoast-table" },
                      Object(o.createElement)(
                        "thead",
                        null,
                        Object(o.createElement)(
                          "tr",
                          null,
                          Object(o.createElement)(
                            "th",
                            { scope: "col", className: "yoast-table--primary" },
                            Object(s.__)("Related keyphrase", "wordpress-seo")
                          ),
                          Object(o.createElement)(
                            "th",
                            {
                              scope: "col",
                              abbr: Object(s.__)("Volume", "wordpress-seo"),
                            },
                            Object(s.__)("Volume", "wordpress-seo"),
                            Object(o.createElement)(
                              Y.a,
                              {
                                href: window.wpseoAdminL10n[
                                  "shortlinks.semrush.volume_help"
                                ],
                                className: "dashicons",
                              },
                              Object(o.createElement)(
                                "span",
                                { className: "screen-reader-text" },
                                Object(s.__)(
                                  "Learn more about the related keyphrases volume",
                                  "wordpress-seo"
                                )
                              )
                            )
                          ),
                          Object(o.createElement)(
                            "th",
                            {
                              scope: "col",
                              abbr: Object(s.__)("Trend", "wordpress-seo"),
                            },
                            Object(s.__)("Trend", "wordpress-seo"),
                            Object(o.createElement)(
                              Y.a,
                              {
                                href: window.wpseoAdminL10n[
                                  "shortlinks.semrush.trend_help"
                                ],
                                className: "dashicons",
                              },
                              Object(o.createElement)(
                                "span",
                                { className: "screen-reader-text" },
                                Object(s.__)(
                                  "Learn more about the related keyphrases trend",
                                  "wordpress-seo"
                                )
                              )
                            )
                          ),
                          c &&
                            Object(o.createElement)("td", {
                              className: "yoast-table--nobreak",
                            })
                        )
                      ),
                      Object(o.createElement)(
                        "tbody",
                        null,
                        i.results.rows.map(function (t, n) {
                          var a = t[0],
                            i = e.transformTrendDataToChartPoints(t[2]),
                            l = e.getAreaChartDataTableHeaderLabels();
                          return Object(o.createElement)(
                            "tr",
                            { key: n },
                            Object(o.createElement)("td", null, a),
                            Object(o.createElement)("td", null, t[1]),
                            Object(o.createElement)(
                              "td",
                              { className: "yoast-table--nopadding" },
                              Object(o.createElement)(H, {
                                width: 66,
                                height: 24,
                                data: i,
                                strokeWidth: 1.8,
                                strokeColor: "#498afc",
                                fillColor: "#ade3fc",
                                className:
                                  "yoast-related-keyphrases-modal__chart",
                                mapChartDataToTableData:
                                  e.mapAreaChartDataToTableData,
                                dataTableCaption: Object(s.__)(
                                  "Keyphrase volume in the last 12 months on a scale from 0 to 100.",
                                  "wordpress-seo"
                                ),
                                dataTableHeaderLabels: l,
                              })
                            ),
                            c &&
                              Object(o.createElement)(
                                "td",
                                { className: "yoast-table--nobreak" },
                                c(a, r)
                              )
                          );
                        })
                      )
                    ),
                    Object(o.createElement)(
                      "p",
                      { style: { marginBottom: 0 } },
                      Object(o.createElement)(
                        V,
                        { href: u },
                        Object(s.sprintf)(
                          /* translators: %s expands to Semrush */
                          Object(s.__)(
                            "Get more insights at %s",
                            "wordpress-seo"
                          ),
                          "Semrush"
                        )
                      )
                    )
                  )
                );
              },
            },
          ]),
          a
        );
      })(o.Component);
    (z.propTypes = {
      data: c.a.object,
      keyphrase: c.a.string,
      relatedKeyphrases: c.a.array,
      countryCode: c.a.string,
      renderAction: c.a.func,
    }),
      (z.defaultProps = {
        data: {},
        keyphrase: "",
        relatedKeyphrases: [],
        countryCode: "us",
        renderAction: null,
      });
    var W = z,
      G = Object(d.makeOutboundLink)(),
      $ = function () {
        return Object(o.createElement)(
          u.Alert,
          { type: "info" },
          Object(s.sprintf)(
            /* translators: %s: Expands to "Yoast SEO". */
            Object(s.__)(
              "Would you like to be able to add these related keyphrases to the %s analysis so you can optimize your content even further?",
              "wordpress-seo"
            ),
            "Yoast SEO"
          ) + " ",
          Object(o.createElement)(
            G,
            {
              href: window.wpseoAdminL10n[
                "shortlinks.semrush.premium_landing_page"
              ],
            },
            Object(s.sprintf)(
              /* translators: %s: Expands to "Yoast SEO Premium". */
              Object(s.__)("Check out %s!", "wordpress-seo"),
              "Yoast SEO Premium"
            )
          )
        );
      },
      Z = function () {
        return Object(o.createElement)(
          u.Alert,
          { type: "error" },
          Object(s.__)(
            "We've encountered a problem trying to get related keyphrases. Please try again later.",
            "wordpress-seo"
          )
        );
      },
      J = function () {
        return Object(o.createElement)(
          u.Alert,
          { type: "warning" },
          Object(s.sprintf)(
            /* translators: %s: Expands to "Yoast SEO". */
            Object(s.__)(
              "You've reached the maximum amount of 4 related keyphrases. You can change or remove related keyphrases in the %s metabox or sidebar.",
              "wordpress-seo"
            ),
            "Yoast SEO"
          )
        );
      },
      X = n(20);
    function Q(e) {
      var t = e.response,
        n = e.lastRequestKeyphrase,
        r = e.keyphrase,
        a = e.newRequest,
        i = e.setCountry,
        c = e.renderAction,
        u = e.countryCode,
        d = e.requestLimitReached,
        m = e.setRequestFailed,
        b = e.setNoResultsFound,
        h = e.relatedKeyphrases,
        y = e.setRequestSucceeded,
        g = e.setRequestLimitReached,
        v = Object(X.a)().isPremium;
      return Object(o.createElement)(
        o.Fragment,
        null,
        !d &&
          Object(o.createElement)(
            o.Fragment,
            null,
            !v && Object(o.createElement)($, null),
            v &&
              (function (e) {
                return e && e.length >= 4;
              })(h) &&
              Object(o.createElement)(J, null),
            Object(o.createElement)(D, {
              countryCode: u,
              setCountry: i,
              newRequest: a,
              keyphrase: r,
              setRequestFailed: m,
              setNoResultsFound: b,
              setRequestSucceeded: y,
              setRequestLimitReached: g,
              response: t,
              lastRequestKeyphrase: n,
            })
          ),
        (function (e) {
          var t = e.isPending,
            n = e.requestLimitReached,
            r = e.isSuccess,
            a = e.response,
            i = e.requestHasData;
          return t
            ? Object(o.createElement)(p, null)
            : n
            ? Object(o.createElement)(f, null)
            : !r &&
              (function (e) {
                return !Object(l.isEmpty)(e) && "error" in e;
              })(a)
            ? Object(o.createElement)(Z, null)
            : i
            ? void 0
            : Object(o.createElement)(
                "p",
                null,
                Object(s.__)(
                  "Sorry, there's no data available for that keyphrase/country combination.",
                  "wordpress-seo"
                )
              );
        })(e),
        Object(o.createElement)(W, {
          keyphrase: r,
          relatedKeyphrases: h,
          countryCode: u,
          renderAction: c,
          data: t,
        })
      );
    }
    (Q.propTypes = {
      keyphrase: c.a.string,
      relatedKeyphrases: c.a.array,
      renderAction: c.a.func,
      requestLimitReached: c.a.bool,
      countryCode: c.a.string.isRequired,
      setCountry: c.a.func.isRequired,
      newRequest: c.a.func.isRequired,
      setRequestSucceeded: c.a.func.isRequired,
      setRequestLimitReached: c.a.func.isRequired,
      setRequestFailed: c.a.func.isRequired,
      setNoResultsFound: c.a.func.isRequired,
      response: c.a.object,
      lastRequestKeyphrase: c.a.string,
    }),
      (Q.defaultProps = {
        keyphrase: "",
        relatedKeyphrases: [],
        renderAction: null,
        requestLimitReached: !1,
        response: {},
        lastRequestKeyphrase: "",
      }),
      (t.a = Object(a.compose)([
        Object(r.withSelect)(function (e) {
          var t = e("yoast-seo/editor"),
            n = t.getFocusKeyphrase,
            r = t.getSEMrushSelectedCountry,
            a = t.getSEMrushRequestLimitReached,
            o = t.getSEMrushRequestResponse,
            s = t.getSEMrushRequestIsSuccess,
            i = t.getSEMrushIsRequestPending,
            c = t.getSEMrushRequestHasData,
            l = t.getSEMrushRequestKeyphrase;
          return {
            keyphrase: n(),
            countryCode: r(),
            requestLimitReached: a(),
            response: o(),
            isSuccess: s(),
            isPending: i(),
            requestHasData: c(),
            lastRequestKeyphrase: l(),
          };
        }),
        Object(r.withDispatch)(function (e) {
          var t = e("yoast-seo/editor"),
            n = t.setSEMrushChangeCountry,
            r = t.setSEMrushNewRequest,
            a = t.setSEMrushRequestSucceeded,
            o = t.setSEMrushRequestFailed,
            s = t.setSEMrushSetRequestLimitReached,
            i = t.setSEMrushNoResultsFound;
          return {
            setCountry: function (e) {
              n(e);
            },
            newRequest: function (e, t) {
              r(e, t);
            },
            setRequestSucceeded: function (e) {
              a(e);
            },
            setRequestFailed: function (e) {
              o(e);
            },
            setRequestLimitReached: function () {
              s();
            },
            setNoResultsFound: function () {
              i();
            },
          };
        }),
      ])(Q));
  },
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    });
    var r = n(2);
    function a(e) {
      return void 0 === e.length
        ? e
        : Object(r.flatten)(e).sort(function (e, t) {
            return void 0 === e.props.renderPriority
              ? 1
              : e.props.renderPriority - t.props.renderPriority;
          });
    }
  },
  ,
  function (e, t, n) {
    "use strict";
    var r,
      a,
      o,
      s = n(10),
      i = n.n(s),
      c = n(5),
      l = n.n(c),
      u = n(7),
      p = n.n(u),
      d = n(13),
      m = n.n(d),
      f = n(14),
      b = n.n(f),
      h = n(8),
      y = n.n(h),
      g = n(15),
      v = n.n(g),
      O = n(0),
      j = n(4),
      w = n(3),
      E = n(6),
      k = n(25),
      _ = n(1),
      T = n.n(_),
      R = n(12),
      S = n.n(R),
      x = n(42),
      C = n(82),
      P = n(9),
      I = S.a.p(
        r ||
          (r = v()([
            "\n\tcolor: ",
            ";\n\tmargin: 0;\n\tpadding-right: 8px;\n",
          ])),
        k.colors.$color_upsell_text
      ),
      A = S.a.div(
        a ||
          (a = v()([
            "\n\tfont-size: 1em;\n\tdisplay: flex;\n\tflex-direction: ",
            ";\n\t",
            ": 4px solid ",
            ";\n\tmargin: 16px 0;\n\tpadding: 0 0 0 8px;\n\tmax-width: 600px;\n\n\t> ",
            " {\n\t\tmargin-bottom: ",
            ";\n\t}\n",
          ])),
        function (e) {
          return "horizontal" === e.alignment ? "row" : "column";
        },
        Object(P.getDirectionalStyle)("border-left", "border-right"),
        k.colors.$color_pink_dark,
        I,
        function (e) {
          return "vertical" === e.alignment && "16px";
        }
      ),
      L = S()(E.SvgIcon)(
        o || (o = v()(["\n\tmargin: ", ";\n\ttransform: ", ";\n"])),
        Object(P.getDirectionalStyle)("0 0 0 4px", "0 4px 0 0"),
        Object(P.getDirectionalStyle)("rotate(0deg)", "rotate(180deg)")
      ),
      N = Object(P.makeOutboundLink)(E.UpsellLinkButton),
      q = function (e) {
        var t = e.alignment,
          n = e.url;
        return Object(O.createElement)(
          A,
          { alignment: t },
          Object(O.createElement)(
            I,
            null,
            Object(w.sprintf)(
              /* translators: %s expands to Yoast SEO Premium */
              Object(w.__)(
                "Did you know %s also analyzes the different word forms of your keyphrase, like plurals and past tenses?",
                "wordpress-seo"
              ),
              "Yoast SEO Premium"
            )
          ),
          Object(O.createElement)(
            "div",
            null,
            Object(O.createElement)(
              N,
              { href: n, className: "UpsellLinkButton" },
              Object(w.sprintf)(
                /* translators: %s expands to Premium */
                Object(w.__)("Go %s!", "wordpress-seo"),
                "Premium"
              ),
              Object(O.createElement)(L, {
                icon: "arrow-right",
                size: "8px",
                color: k.colors.$color_black,
              })
            )
          )
        );
      };
    (q.propTypes = {
      alignment: T.a.oneOf(["horizontal", "vertical"]),
      url: T.a.string.isRequired,
    }),
      (q.defaultProps = { alignment: "vertical" });
    var D,
      M,
      F = q,
      B = n(29),
      K = n(52),
      U = n(69),
      H = n(37),
      Y = n.n(H);
    var V = S.a.ul(
        D ||
          (D = v()([
            '\n\tlist-style: none;\n\tmargin: 0 0 16px;\n\tpadding: 0;\n\n\tli {\n\t\tmargin: 5px 0 0 0;\n\t\tpadding-left: 16px;\n\t}\n\n\tspan[aria-hidden="true"]:before {\n\t\tmargin: 0 8px 0 -16px;\n\t\tfont-weight: bold;\n\t\tcontent: "+";\n\t}\n',
          ]))
      ),
      z = S.a.small(M || (M = v()(["\n\tdisplay: block;\n"]))),
      W = Object(P.makeOutboundLink)(),
      G = (function (e) {
        m()(a, e);
        var t,
          n,
          r =
            ((t = a),
            (n = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r = y()(t);
              if (n) {
                var a = y()(this).constructor;
                e = Reflect.construct(r, arguments, a);
              } else e = r.apply(this, arguments);
              return b()(this, e);
            });
        function a(e) {
          return l()(this, a), r.call(this, e);
        }
        return (
          p()(a, [
            {
              key: "createBenefitsList",
              value: function (e) {
                return (
                  e.length > 0 &&
                  Object(O.createElement)(
                    V,
                    { role: "list" },
                    e.map(function (e, t) {
                      return Object(O.createElement)(
                        "li",
                        { key: t },
                        Object(O.createElement)("span", {
                          "aria-hidden": "true",
                        }),
                        Y()({
                          mixedString: e
                            .replace("<strong>", "{{strong}}")
                            .replace("</strong>", "{{/strong}}"),
                          components: {
                            strong: Object(O.createElement)("strong", null),
                          },
                        })
                      );
                    })
                  )
                );
              },
            },
            {
              key: "createInfoParagraphs",
              value: function (e) {
                return e.map(function (e, t) {
                  return Object(O.createElement)("p", { key: t }, e);
                });
              },
            },
            {
              key: "render",
              value: function () {
                return Object(O.createElement)(
                  "div",
                  null,
                  this.createInfoParagraphs(this.props.infoParagraphs),
                  this.createBenefitsList(this.props.benefits),
                  Object(O.createElement)(
                    W,
                    this.props.upsellButton,
                    this.props.upsellButtonText,
                    this.props.upsellButtonHasCaret &&
                      Object(O.createElement)("span", {
                        "aria-hidden": "true",
                        className: "yoast-button-upsell__caret",
                      })
                  ),
                  Object(O.createElement)(
                    z,
                    { id: this.props.upsellButton["aria-describedby"] },
                    this.props.upsellButtonLabel
                  )
                );
              },
            },
          ]),
          a
        );
      })(O.Component);
    (G.propTypes = {
      benefits: T.a.array,
      infoParagraphs: T.a.array,
      upsellButton: T.a.object,
      upsellButtonText: T.a.string.isRequired,
      upsellButtonLabel: T.a.string,
      upsellButtonHasCaret: T.a.bool,
    }),
      (G.defaultProps = {
        infoParagraphs: [],
        benefits: [],
        upsellButton: { href: "", className: "button button-primary" },
        upsellButtonLabel: "",
        upsellButtonHasCaret: !0,
      });
    var $ = G,
      Z = Object(P.makeOutboundLink)(),
      J = function (e) {
        var t = Object(w.sprintf)(
            /* translators: %1$s expands to a 'Yoast SEO Premium' text linked to the yoast.com website. */
            Object(w.__)("Great news: you can, with %1$s!", "wordpress-seo"),
            "{{link}}Yoast SEO Premium{{/link}}"
          ),
          n = Y()({
            mixedString: t,
            components: { link: Object(O.createElement)(Z, { href: e.link }) },
          }),
          r = [
            "<strong>".concat(
              Object(w.__)(
                "Rank better with synonyms & related keyphrases",
                "wordpress-seo"
              ),
              "</strong>"
            ),
            Object(w.sprintf)(
              /* translators: %1$s expands to a 'strong' start tag, %2$s to a 'strong' end tag. */
              Object(w.__)(
                "%1$sNo more dead links%2$s: easy redirect manager",
                "wordpress-seo"
              ),
              "<strong>",
              "</strong>"
            ),
            "<strong>".concat(
              Object(w.__)(
                "Superfast internal linking suggestions",
                "wordpress-seo"
              ),
              "</strong>"
            ),
            Object(w.sprintf)(
              /* translators: %1$s expands to a 'strong' start tag, %2$s to a 'strong' end tag. */
              Object(w.__)(
                "%1$sSocial media preview%2$s: Facebook & Twitter",
                "wordpress-seo"
              ),
              "<strong>",
              "</strong>"
            ),
            "<strong>".concat(
              Object(w.__)("24/7 email support", "wordpress-seo"),
              "</strong>"
            ),
            "<strong>".concat(
              Object(w.__)("No ads!", "wordpress-seo"),
              "</strong>"
            ),
          ],
          a = Object(w.sprintf)(
            /* translators: %s expands to 'Yoast SEO Premium'. */
            Object(w.__)("Other benefits of %s for you:", "wordpress-seo"),
            "Yoast SEO Premium"
          );
        return Object(O.createElement)($, {
          infoParagraphs: [n, a],
          benefits: r,
          upsellButtonText: Object(w.sprintf)(
            /* translators: %s expands to 'Yoast SEO Premium'. */
            Object(w.__)("Get %s", "wordpress-seo"),
            "Yoast SEO Premium"
          ),
          upsellButton: {
            href: e.buyLink,
            className: "yoast-button-upsell",
            rel: null,
          },
          upsellButtonLabel: Object(w.__)(
            "1 year free support and updates included!",
            "wordpress-seo"
          ),
        });
      };
    J.propTypes = {
      link: T.a.string.isRequired,
      buyLink: T.a.string.isRequired,
    };
    var X = J,
      Q = Object(P.makeOutboundLink)(),
      ee = function (e) {
        var t = Object(w.sprintf)(
            /* translators: %s expands to a 'Yoast SEO Premium' text linked to the yoast.com website. */
            Object(w.__)("Great news: you can, with %s!", "wordpress-seo"),
            "{{link}}Yoast SEO Premium{{/link}}"
          ),
          n = [
            Object(w.sprintf)(
              /* translators: %1$s expands to a 'strong' start tag, %2$s to a 'strong' end tag. */
              Object(w.__)(
                "%1$sNo more dead links%2$s: easy redirect manager",
                "wordpress-seo"
              ),
              "<strong>",
              "</strong>"
            ),
            "<strong>".concat(
              Object(w.__)(
                "Superfast internal linking suggestions",
                "wordpress-seo"
              ),
              "</strong>"
            ),
            Object(w.sprintf)(
              /* translators: %1$s expands to a 'strong' start tag, %2$s to a 'strong' end tag. */
              Object(w.__)(
                "%1$sSocial media preview%2$s: Facebook & Twitter",
                "wordpress-seo"
              ),
              "<strong>",
              "</strong>"
            ),
            "<strong>".concat(
              Object(w.__)("24/7 email support", "wordpress-seo"),
              "</strong>"
            ),
            "<strong>".concat(
              Object(w.__)("No ads!", "wordpress-seo"),
              "</strong>"
            ),
          ],
          r = Y()({
            mixedString: t,
            components: { link: Object(O.createElement)(Q, { href: e.link }) },
          }),
          a = Object(w.sprintf)(
            /* translators: %s expands to 'Yoast SEO Premium'. */
            Object(w.__)("Other benefits of %s for you:", "wordpress-seo"),
            "Yoast SEO Premium"
          );
        return Object(O.createElement)($, {
          infoParagraphs: [r, a],
          benefits: n,
          upsellButtonText: Object(w.sprintf)(
            /* translators: %s expands to 'Yoast SEO Premium'. */
            Object(w.__)("Get %s", "wordpress-seo"),
            "Yoast SEO Premium"
          ),
          upsellButton: {
            href: e.buyLink,
            className: "yoast-button-upsell",
            rel: null,
          },
          upsellButtonLabel: Object(w.__)(
            "1 year free support and updates included!",
            "wordpress-seo"
          ),
        });
      };
    ee.propTypes = {
      link: T.a.string.isRequired,
      buyLink: T.a.string.isRequired,
    };
    var te,
      ne = ee,
      re = n(39),
      ae = n.n(re),
      oe = n(54),
      se = S.a.button(
        te ||
          (te = v()([
            "\n\t// Increase specificity to override WP rules.\n\t&& {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t.yoast-svg-icon {\n\t\tmargin: 1px 7px 0 0;\n\t\tfill: currentColor;\n\t}\n",
          ]))
      ),
      ie = {
        open: Object(w.__)("Open", "wordpress-seo"),
        heading: "",
        closeIconButton: Object(w.__)("Close", "wordpress-seo"),
        closeButton: "",
      },
      ce = function (e) {
        var t = Object(O.useState)(!1),
          n = ae()(t, 2),
          r = n[0],
          a = n[1],
          o = Object.assign({}, ie, e.labels),
          s = Object(O.useCallback)(function () {
            return a(!1);
          }, []),
          i = Object(O.useCallback)(function () {
            return a(!0);
          }, []);
        return Object(O.createElement)(
          O.Fragment,
          null,
          Object(O.createElement)(
            se,
            {
              type: "button",
              onClick: i,
              className: "".concat(
                e.classes.openButton,
                " yoast-modal__button-open"
              ),
            },
            e.openButtonIcon &&
              Object(O.createElement)(E.SvgIcon, {
                icon: e.openButtonIcon,
                size: "13px",
              }),
            o.open
          ),
          r &&
            Object(O.createElement)(
              oe.a,
              { onRequestClose: s, className: e.className, title: o.heading },
              e.children
            )
        );
      };
    (ce.propTypes = {
      openButtonIcon: T.a.string,
      labels: T.a.shape({
        open: T.a.string,
        modalAriaLabel: T.a.string.isRequired,
        heading: T.a.string,
        closeIconButton: T.a.string,
        closeButton: T.a.string,
      }).isRequired,
      classes: T.a.shape({
        openButton: T.a.string,
        closeIconButton: T.a.string,
        closeButton: T.a.string,
      }),
      className: T.a.string,
      children: T.a.any.isRequired,
    }),
      (ce.defaultProps = { className: oe.b, openButtonIcon: "", classes: {} });
    var le = ce,
      ue = n(96),
      pe = n(51),
      de = n(18);
    function me(e) {
      var t = e.location;
      return Object(O.createElement)(de.Slot, {
        name: "yoast-synonyms-".concat(t),
      });
    }
    me.propTypes = { location: T.a.string.isRequired };
    var fe,
      be = n(35);
    function he(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function ye(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? he(Object(n), !0).forEach(function (t) {
              i()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : he(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var ge = S.a.span(
        fe ||
          (fe = v()([
            "\n\tfont-size: 1em;\n\tfont-weight: bold;\n\tmargin: 1.5em 0 1em;\n\tdisplay: block;\n",
          ]))
      ),
      ve = (function (e) {
        m()(a, e);
        var t,
          n,
          r =
            ((t = a),
            (n = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r = y()(t);
              if (n) {
                var a = y()(this).constructor;
                e = Reflect.construct(r, arguments, a);
              } else e = r.apply(this, arguments);
              return b()(this, e);
            });
        function a() {
          return l()(this, a), r.apply(this, arguments);
        }
        return (
          p()(a, [
            {
              key: "renderSynonymsUpsell",
              value: function (e) {
                var t = {
                    classes: {
                      openButton: "wpseo-keyword-synonyms button-link",
                    },
                    labels: {
                      open:
                        "+ " + Object(w.__)("Add synonyms", "wordpress-seo"),
                      modalAriaLabel: Object(w.sprintf)(
                        /* translators: %s expands to 'Yoast SEO Premium'. */
                        Object(w.__)("Get %s", "wordpress-seo"),
                        "Yoast SEO Premium"
                      ),
                      heading: Object(w.sprintf)(
                        /* translators: %s expands to 'Yoast SEO Premium'. */
                        Object(w.__)("Get %s", "wordpress-seo"),
                        "Yoast SEO Premium"
                      ),
                    },
                  },
                  n =
                    wpseoAdminL10n[
                      "shortlinks.upsell.metabox.focus_keyword_synonyms_link"
                    ],
                  r =
                    wpseoAdminL10n[
                      "shortlinks.upsell.metabox.focus_keyword_synonyms_button"
                    ];
                return (
                  "sidebar" === e.toLowerCase() &&
                    ((n =
                      wpseoAdminL10n[
                        "shortlinks.upsell.sidebar.focus_keyword_synonyms_link"
                      ]),
                    (r =
                      wpseoAdminL10n[
                        "shortlinks.upsell.sidebar.focus_keyword_synonyms_button"
                      ])),
                  Object(O.createElement)(
                    le,
                    t,
                    Object(O.createElement)(
                      U.a,
                      null,
                      Object(O.createElement)(U.b, { icon: E.YoastSeoIcon }),
                      Object(O.createElement)(
                        "h2",
                        null,
                        Object(w.__)(
                          "Would you like to add keyphrase synonyms?",
                          "wordpress-seo"
                        )
                      ),
                      Object(O.createElement)(X, { link: n, buyLink: r })
                    )
                  )
                );
              },
            },
            {
              key: "renderMultipleKeywordsUpsell",
              value: function (e) {
                var t = {
                    classes: {
                      openButton: "wpseo-multiple-keywords button-link",
                    },
                    labels: {
                      open:
                        "+ " +
                        Object(w.__)("Add related keyphrase", "wordpress-seo"),
                      modalAriaLabel: Object(w.sprintf)(
                        /* translators: %s expands to 'Yoast SEO Premium'. */
                        Object(w.__)("Get %s", "wordpress-seo"),
                        "Yoast SEO Premium"
                      ),
                      heading: Object(w.sprintf)(
                        /* translators: %s expands to 'Yoast SEO Premium'. */
                        Object(w.__)("Get %s", "wordpress-seo"),
                        "Yoast SEO Premium"
                      ),
                    },
                  },
                  n =
                    wpseoAdminL10n[
                      "shortlinks.upsell.metabox.focus_keyword_additional_link"
                    ],
                  r =
                    wpseoAdminL10n[
                      "shortlinks.upsell.metabox.focus_keyword_additional_button"
                    ];
                return (
                  "sidebar" === e.toLowerCase() &&
                    ((n =
                      wpseoAdminL10n[
                        "shortlinks.upsell.sidebar.focus_keyword_additional_link"
                      ]),
                    (r =
                      wpseoAdminL10n[
                        "shortlinks.upsell.sidebar.focus_keyword_additional_button"
                      ])),
                  Object(O.createElement)(
                    le,
                    t,
                    Object(O.createElement)(
                      U.a,
                      null,
                      Object(O.createElement)(U.b, { icon: E.YoastSeoIcon }),
                      Object(O.createElement)(
                        "h2",
                        null,
                        Object(w.__)(
                          "Would you like to add a related keyphrase?",
                          "wordpress-seo"
                        )
                      ),
                      Object(O.createElement)(ne, { link: n, buyLink: r })
                    )
                  )
                );
              },
            },
            {
              key: "renderKeywordUpsell",
              value: function (e) {
                var t =
                    wpseoAdminL10n["shortlinks.upsell.metabox.additional_link"],
                  n =
                    wpseoAdminL10n[
                      "shortlinks.upsell.metabox.additional_button"
                    ],
                  r = K.a;
                return (
                  "sidebar" === e.toLowerCase() &&
                    ((t =
                      wpseoAdminL10n[
                        "shortlinks.upsell.sidebar.additional_link"
                      ]),
                    (n =
                      wpseoAdminL10n[
                        "shortlinks.upsell.sidebar.additional_button"
                      ]),
                    (r = pe.a)),
                  Object(O.createElement)(
                    r,
                    {
                      prefixIcon: {
                        icon: "plus",
                        color: k.colors.$color_grey_medium_dark,
                      },
                      prefixIconCollapsed: {
                        icon: "plus",
                        color: k.colors.$color_grey_medium_dark,
                      },
                      title: Object(w.__)(
                        "Add related keyphrase",
                        "wordpress-seo"
                      ),
                      id: "yoast-additional-keyphrase-collapsible-".concat(e),
                    },
                    Object(O.createElement)(ne, { link: t, buyLink: n })
                  )
                );
              },
            },
            {
              key: "renderWordFormsUpsell",
              value: function (e) {
                return Object(O.createElement)(F, {
                  url:
                    "sidebar" === e
                      ? wpseoAdminL10n[
                          "shortlinks.upsell.sidebar.morphology_upsell_sidebar"
                        ]
                      : wpseoAdminL10n[
                          "shortlinks.upsell.sidebar.morphology_upsell_metabox"
                        ],
                  alignment: "sidebar" === e ? "vertical" : "horizontal",
                });
              },
            },
            {
              key: "renderTabIcon",
              value: function (e, t) {
                return "metabox" !== e
                  ? null
                  : Object(O.createElement)(ue.a, {
                      target: "wpseo-seo-score-icon",
                      scoreIndicator: t,
                    });
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = Object(x.a)(this.props.overallScore);
                return (
                  "loading" !== t.className &&
                    "" === this.props.keyword &&
                    ((t.className = "na"),
                    (t.screenReaderReadabilityText = Object(w.__)(
                      "Enter a focus keyphrase to calculate the SEO score",
                      "wordpress-seo"
                    ))),
                  Object(O.createElement)(
                    B.LocationConsumer,
                    null,
                    function (n) {
                      var r = "metabox" === n ? K.a : pe.a;
                      return Object(O.createElement)(
                        O.Fragment,
                        null,
                        Object(O.createElement)(
                          r,
                          {
                            title: Object(w.__)(
                              "SEO analysis",
                              "wordpress-seo"
                            ),
                            titleScreenReaderText:
                              t.screenReaderReadabilityText,
                            prefixIcon: Object(be.getIconForScore)(t.className),
                            prefixIconCollapsed: Object(be.getIconForScore)(
                              t.className
                            ),
                            subTitle: e.props.keyword,
                            id: "yoast-seo-analysis-collapsible-".concat(n),
                          },
                          Object(O.createElement)(me, { location: n }),
                          e.props.shouldUpsell &&
                            Object(O.createElement)(
                              O.Fragment,
                              null,
                              e.renderSynonymsUpsell(n),
                              e.renderMultipleKeywordsUpsell(n)
                            ),
                          e.props.shouldUpsellWordFormRecognition &&
                            e.renderWordFormsUpsell(n),
                          Object(O.createElement)(
                            ge,
                            null,
                            Object(w.__)("Analysis results", "wordpress-seo")
                          ),
                          Object(O.createElement)(C.a, {
                            results: e.props.results,
                            marksButtonClassName:
                              "yoast-tooltip yoast-tooltip-w",
                            marksButtonStatus: e.props.marksButtonStatus,
                          })
                        ),
                        e.props.shouldUpsell && e.renderKeywordUpsell(n),
                        e.renderTabIcon(n, t.className)
                      );
                    }
                  )
                );
              },
            },
          ]),
          a
        );
      })(O.Component);
    (ve.propTypes = {
      results: T.a.array,
      marksButtonStatus: T.a.string,
      keyword: T.a.string,
      shouldUpsell: T.a.bool,
      shouldUpsellWordFormRecognition: T.a.bool,
      overallScore: T.a.number,
    }),
      (ve.defaultProps = {
        results: [],
        marksButtonStatus: null,
        keyword: "",
        shouldUpsell: !1,
        shouldUpsellWordFormRecognition: !1,
        overallScore: null,
      }),
      (t.a = Object(j.withSelect)(function (e, t) {
        var n = e("yoast-seo/editor"),
          r = n.getFocusKeyphrase,
          a = n.getMarksButtonStatus,
          o = n.getResultsForKeyword,
          s = r();
        return ye(
          ye({}, o(s)),
          {},
          {
            marksButtonStatus: t.hideMarksButtons ? "disabled" : a(),
            keyword: s,
          }
        );
      })(ve));
  },
  function (e, t, n) {
    "use strict";
    var r = n(5),
      a = n.n(r),
      o = n(7),
      s = n.n(o),
      i = n(2),
      c = (function () {
        function e() {
          a()(this, e);
        }
        return (
          s()(
            e,
            [
              {
                key: "listen",
                value: function (e) {
                  (this.classicEditorContainer = document.getElementById(
                    "et_pb_main_editor_wrap"
                  )),
                    this.classicEditorContainer &&
                      new MutationObserver(function (t) {
                        Object(i.forEach)(t, function (t) {
                          "attributes" === t.type &&
                            "class" === t.attributeName &&
                            (t.target.classList.contains("et_pb_hidden")
                              ? e.classicEditorHidden()
                              : e.classicEditorShown());
                        });
                      }).observe(this.classicEditorContainer, {
                        attributes: !0,
                      });
                },
              },
            ],
            [
              {
                key: "isActive",
                value: function () {
                  return !!document.getElementById("et_pb_main_editor_wrap");
                },
              },
              {
                key: "isTinyMCEHidden",
                value: function () {
                  var e = document.getElementById("et_pb_main_editor_wrap");
                  return !!e && e.classList.contains("et_pb_hidden");
                },
              },
            ]
          ),
          e
        );
      })(),
      l = (function () {
        function e() {
          a()(this, e);
        }
        return (
          s()(e, null, [
            {
              key: "isActive",
              value: function () {
                return !!window.VCV_I18N;
              },
            },
          ]),
          e
        );
      })(),
      u = {
        classicEditorHidden: i.noop,
        classicEditorShown: i.noop,
        pageBuilderLoaded: i.noop,
      },
      p = (function () {
        function e() {
          a()(this, e), this.determineActivePageBuilders();
        }
        return (
          s()(e, [
            {
              key: "determineActivePageBuilders",
              value: function () {
                c.isActive() && (this.diviActive = !0),
                  l.isActive() && (this.vcActive = !0);
              },
            },
            {
              key: "isPageBuilderActive",
              value: function () {
                return this.diviActive || this.vcActive;
              },
            },
            {
              key: "listen",
              value: function (e) {
                (this.callbacks = Object(i.defaults)(e, u)),
                  this.diviActive && new c().listen(e);
              },
            },
            {
              key: "isClassicEditorHidden",
              value: function () {
                return !(!this.diviActive || !c.isTinyMCEHidden());
              },
            },
          ]),
          e
        );
      })();
    t.a = p;
  },
  function (e, t, n) {
    "use strict";
    var r,
      a = n(19),
      o = n(4),
      s = n(0),
      i = n(3),
      c = n(18),
      l = n(6),
      u = n(9),
      p = n(1),
      d = n.n(p),
      m = n(5),
      f = n.n(m),
      b = n(7),
      h = n.n(b),
      y = n(13),
      g = n.n(y),
      v = n(14),
      O = n.n(v),
      j = n(8),
      w = n.n(j),
      E = n(15),
      k = n.n(E),
      _ = n(12);
    var T = n
        .n(_)
        .a.div(r || (r = k()(["\n\tdisplay: flex;\n\tmargin-top: 8px;\n"]))),
      R = (function (e) {
        g()(a, e);
        var t,
          n,
          r =
            ((t = a),
            (n = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r = w()(t);
              if (n) {
                var a = w()(this).constructor;
                e = Reflect.construct(r, arguments, a);
              } else e = r.apply(this, arguments);
              return O()(this, e);
            });
        function a() {
          return f()(this, a), r.apply(this, arguments);
        }
        return (
          h()(a, [
            {
              key: "render",
              value: function () {
                return Object(s.createElement)(
                  T,
                  null,
                  Object(s.createElement)(l.Toggle, {
                    id: this.props.id,
                    labelText: Object(i.__)(
                      "Mark as cornerstone content",
                      "wordpress-seo"
                    ),
                    isEnabled: this.props.isEnabled,
                    onSetToggleState: this.props.onToggle,
                    onToggleDisabled: this.props.onToggleDisabled,
                  })
                );
              },
            },
          ]),
          a
        );
      })(s.Component);
    (R.propTypes = {
      id: d.a.string,
      isEnabled: d.a.bool,
      onToggle: d.a.func,
      onToggleDisabled: d.a.func,
    }),
      (R.defaultProps = {
        id: "cornerstone-toggle",
        isEnabled: !0,
        onToggle: function () {},
        onToggleDisabled: function () {},
      });
    var S = R,
      x = n(52),
      C = n(51),
      P = Object(u.makeOutboundLink)();
    function I(e) {
      var t = e.isCornerstone,
        n = e.onChange,
        r = e.learnMoreUrl,
        a = e.location,
        o = "metabox" === a ? x.a : C.a;
      return Object(s.createElement)(
        o,
        {
          id: Object(u.join)(["yoast-cornerstone-collapsible", a]),
          title: Object(i.__)("Cornerstone content", "wordpress-seo"),
        },
        Object(s.createElement)(
          l.HelpText,
          null,
          Object(i.__)(
            "Cornerstone content should be the most important and extensive articles on your site.",
            "wordpress-seo"
          ) + " ",
          Object(s.createElement)(
            P,
            { href: r },
            Object(i.__)(
              "Learn more about Cornerstone Content.",
              "wordpress-seo"
            )
          )
        ),
        Object(s.createElement)(S, {
          id: Object(u.join)(["yoast-cornerstone", a]),
          isEnabled: t,
          onToggle: n,
        }),
        Object(s.createElement)(c.Slot, { name: "YoastAfterCornerstoneToggle" })
      );
    }
    (I.propTypes = {
      isCornerstone: d.a.bool,
      onChange: d.a.func,
      learnMoreUrl: d.a.string.isRequired,
      location: d.a.string,
    }),
      (I.defaultProps = {
        isCornerstone: !0,
        onChange: function () {},
        location: "",
      });
    var A = n(58);
    t.a = Object(a.compose)([
      Object(o.withSelect)(function (e) {
        return {
          isCornerstone: (0, e("yoast-seo/editor").isCornerstoneContent)(),
          learnMoreUrl: wpseoAdminL10n["shortlinks.cornerstone_content_info"],
        };
      }),
      Object(o.withDispatch)(function (e) {
        return { onChange: e("yoast-seo/editor").toggleCornerstoneContent };
      }),
      Object(A.a)(),
    ])(I);
  },
  function (e, t, n) {
    "use strict";
    var r = n(5),
      a = n.n(r),
      o = n(7),
      s = n.n(o),
      i = n(11),
      c = n.n(i),
      l = n(13),
      u = n.n(l),
      p = n(14),
      d = n.n(p),
      m = n(8),
      f = n.n(m),
      b = n(15),
      h = n.n(b),
      y = n(0),
      g = n(18),
      v = n(19),
      O = n(4),
      j = n(3),
      w = n(1),
      E = n.n(w),
      k = n(12),
      _ = n.n(k),
      T = n(22),
      R = n(47),
      S = n.n(R),
      x = n(26),
      C = n.n(x),
      P = n(65),
      I = n.n(P),
      A = n(6),
      L = n(69),
      N = n(54),
      q = n(111),
      D = n(92);
    var M = (function (e) {
      u()(l, e);
      var t,
        n,
        r,
        o,
        i =
          ((r = l),
          (o = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch (e) {
              return !1;
            }
          })()),
          function () {
            var e,
              t = f()(r);
            if (o) {
              var n = f()(this).constructor;
              e = Reflect.construct(t, arguments, n);
            } else e = t.apply(this, arguments);
            return d()(this, e);
          });
      function l(e) {
        var t;
        return (
          a()(this, l),
          ((t = i.call(this, e)).onModalOpen = t.onModalOpen.bind(c()(t))),
          (t.onModalClose = t.onModalClose.bind(c()(t))),
          (t.onLinkClick = t.onLinkClick.bind(c()(t))),
          (t.listenToMessages = t.listenToMessages.bind(c()(t))),
          t
        );
      }
      return (
        s()(l, [
          {
            key: "onModalOpen",
            value: function () {
              this.props.keyphrase.trim()
                ? this.props.onOpen(this.props.location)
                : this.props.onOpenWithNoKeyphrase();
            },
          },
          {
            key: "onModalClose",
            value: function (e) {
              Object(D.b)(e) && this.props.onClose();
            },
          },
          {
            key: "onLinkClick",
            value: function (e) {
              if ((e.preventDefault(), this.props.keyphrase.trim())) {
                var t = e.target.href,
                  n = [
                    "top=" +
                      (window.top.outerHeight / 2 + window.top.screenY - 285),
                    "left=" +
                      (window.top.outerWidth / 2 + window.top.screenX - 170),
                    "width=340",
                    "height=570",
                    "resizable=1",
                    "scrollbars=1",
                    "status=0",
                  ];
                (this.popup && !this.popup.closed) ||
                  (this.popup = window.open(t, "SEMrush_login", n.join(","))),
                  this.popup && this.popup.focus(),
                  window.addEventListener("message", this.listenToMessages, !1);
              } else this.props.onOpenWithNoKeyphrase();
            },
          },
          {
            key: "listenToMessages",
            value:
              ((n = S()(
                C.a.mark(function e(t) {
                  var n, r;
                  return C.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((n = t.data),
                              (r = t.source),
                              "https://oauth.semrush.com" === t.origin &&
                                this.popup === r)
                            ) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return");
                          case 3:
                            if ("semrush:oauth:success" !== n.type) {
                              e.next = 8;
                              break;
                            }
                            return (
                              this.popup.close(),
                              window.removeEventListener(
                                "message",
                                this.listenToMessages,
                                !1
                              ),
                              (e.next = 8),
                              this.performAuthenticationRequest(n)
                            );
                          case 8:
                            "semrush:oauth:denied" === n.type &&
                              (this.popup.close(),
                              window.removeEventListener(
                                "message",
                                this.listenToMessages,
                                !1
                              ),
                              this.props.onAuthentication(!1));
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (_x) {
                return n.apply(this, arguments);
              }),
          },
          {
            key: "performAuthenticationRequest",
            value:
              ((t = S()(
                C.a.mark(function e(t) {
                  var n, r, a;
                  return C.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (n = new URL(t.url)),
                              (r = n.searchParams.get("code")),
                              (e.next = 5),
                              I()({
                                path: "yoast/v1/semrush/authenticate",
                                method: "POST",
                                data: { code: r },
                              })
                            );
                          case 5:
                            200 === (a = e.sent).status
                              ? (this.props.onAuthentication(!0),
                                this.onModalOpen(),
                                this.popup.close())
                              : console.error(a.error),
                              (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(0)),
                              console.error(e.t0.message);
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this,
                    [[0, 9]]
                  );
                })
              )),
              function (e) {
                return t.apply(this, arguments);
              }),
          },
          {
            key: "render",
            value: function () {
              var e = this.props,
                t = e.keyphrase,
                n = e.location,
                r = e.whichModalOpen,
                a = e.isLoggedIn;
              return Object(y.createElement)(
                y.Fragment,
                null,
                a &&
                  Object(y.createElement)(
                    "div",
                    { className: "yoast" },
                    Object(y.createElement)(
                      A.NewButton,
                      {
                        variant: "secondary",
                        id: "yoast-get-related-keyphrases-".concat(n),
                        onClick: this.onModalOpen,
                      },
                      Object(j.__)("Get related keyphrases", "wordpress-seo")
                    )
                  ),
                t &&
                  r === n &&
                  Object(y.createElement)(
                    N.a,
                    {
                      title: Object(j.__)(
                        "Related keyphrases",
                        "wordpress-seo"
                      ),
                      onRequestClose: this.onModalClose,
                      icon: Object(y.createElement)(q.a, null),
                      additionalClassName: "yoast-related-keyphrases-modal",
                    },
                    Object(y.createElement)(
                      L.a,
                      {
                        className:
                          "yoast-gutenberg-modal__content yoast-related-keyphrases-modal__content",
                      },
                      Object(y.createElement)(g.Slot, {
                        name: "YoastRelatedKeyphrases",
                      })
                    )
                  ),
                !a &&
                  Object(y.createElement)(
                    "div",
                    { className: "yoast" },
                    Object(y.createElement)(
                      A.ButtonStyledLink,
                      {
                        variant: "secondary",
                        id: "yoast-get-related-keyphrases-".concat(n),
                        href: "https://oauth.semrush.com/oauth2/authorize?ref=1513012826&client_id=yoast&redirect_uri=https%3A%2F%2Foauth.semrush.com%2Foauth2%2Fyoast%2Fsuccess&response_type=code&scope=user.id",
                        onClick: this.onLinkClick,
                      },
                      Object(j.__)("Get related keyphrases", "wordpress-seo"),
                      Object(y.createElement)(
                        "span",
                        { className: "screen-reader-text" },
                        Object(j.__)(
                          "(Opens in a new browser window)",
                          "wordpress-seo"
                        )
                      )
                    )
                  )
              );
            },
          },
        ]),
        l
      );
    })(y.Component);
    (M.propTypes = {
      keyphrase: E.a.string,
      location: E.a.string,
      whichModalOpen: E.a.oneOf(["none", "metabox", "sidebar"]),
      isLoggedIn: E.a.bool,
      onOpen: E.a.func.isRequired,
      onOpenWithNoKeyphrase: E.a.func.isRequired,
      onClose: E.a.func.isRequired,
      onAuthentication: E.a.func.isRequired,
    }),
      (M.defaultProps = {
        keyphrase: "",
        location: "",
        whichModalOpen: "none",
        isLoggedIn: !1,
      });
    var F,
      B = M,
      K = Object(v.compose)([
        Object(O.withSelect)(function (e) {
          var t = e("yoast-seo/editor"),
            n = t.getSEMrushModalOpen,
            r = t.getSEMrushLoginStatus;
          return { whichModalOpen: n(), isLoggedIn: r() };
        }),
        Object(O.withDispatch)(function (e) {
          var t = e("yoast-seo/editor"),
            n = t.setSEMrushNoKeyphraseMessage,
            r = t.setSEMrushOpenModal,
            a = t.setSEMrushDismissModal,
            o = t.setSEMrushLoginStatus;
          return {
            onOpenWithNoKeyphrase: function () {
              n();
            },
            onOpen: function (e) {
              r(e);
            },
            onClose: function () {
              a();
            },
            onAuthentication: function (e) {
              o(e);
            },
          };
        }),
      ])(B),
      U = n(29),
      H = n(55);
    var Y = _.a.div(
        F ||
          (F = h()([
            "\n\tpadding: 16px;\n\t/* Necessary to compensate negative top margin of the collapsible after the keyword input. */\n\tborder-bottom: 1px solid transparent;\n",
          ]))
      ),
      V = (function (e) {
        u()(o, e);
        var t,
          n,
          r =
            ((t = o),
            (n = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r = f()(t);
              if (n) {
                var a = f()(this).constructor;
                e = Reflect.construct(r, arguments, a);
              } else e = r.apply(this, arguments);
              return d()(this, e);
            });
        function o(e) {
          var t;
          return (
            a()(this, o),
            ((t = r.call(this, e)).validate = t.validate.bind(c()(t))),
            t
          );
        }
        return (
          s()(
            o,
            [
              {
                key: "validate",
                value: function () {
                  var e = [];
                  return (
                    0 === this.props.keyword.trim().length &&
                      this.props.displayNoKeyphraseMessage &&
                      e.push(
                        Object(j.__)(
                          "Please enter a focus keyphrase first to get related keyphrases",
                          "wordpress-seo"
                        )
                      ),
                    this.props.keyword.includes(",") &&
                      e.push(
                        Object(j.__)(
                          "Are you trying to use multiple keyphrases? You should add them separately below.",
                          "wordpress-seo"
                        )
                      ),
                    this.props.keyword.length > 191 &&
                      e.push(
                        Object(j.__)(
                          "Your keyphrase is too long. It can be a maximum of 191 characters.",
                          "wordpress-seo"
                        )
                      ),
                    e
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.validate();
                  return Object(y.createElement)(
                    U.LocationConsumer,
                    null,
                    function (n) {
                      return Object(y.createElement)(
                        "div",
                        {
                          style:
                            "sidebar" === n
                              ? { borderBottom: "1px solid #f0f0f0" }
                              : {},
                        },
                        Object(y.createElement)(
                          Y,
                          { location: n },
                          Object(y.createElement)(T.KeywordInput, {
                            id: "focus-keyword-input-".concat(n),
                            onChange: e.props.onFocusKeywordChange,
                            keyword: e.props.keyword,
                            label: Object(j.__)(
                              "Focus keyphrase",
                              "wordpress-seo"
                            ),
                            helpLink: o.renderHelpLink(),
                            onBlurKeyword: e.props.onBlurKeyword,
                            onFocusKeyword: e.props.onFocusKeyword,
                            hasError: t.length > 0,
                            errorMessages: t,
                          }),
                          e.props.isSEMrushIntegrationActive &&
                            Object(y.createElement)(K, {
                              location: n,
                              keyphrase: e.props.keyword,
                            })
                        ),
                        Object(y.createElement)(g.Slot, {
                          name: "YoastAfterKeywordInput".concat(
                            n.charAt(0).toUpperCase() + n.slice(1)
                          ),
                        })
                      );
                    }
                  );
                },
              },
            ],
            [
              {
                key: "renderHelpLink",
                value: function () {
                  return Object(y.createElement)(
                    H.a,
                    {
                      href: wpseoAdminL10n["shortlinks.focus_keyword_info"],
                      className: "dashicons",
                    },
                    Object(y.createElement)(
                      "span",
                      { className: "screen-reader-text" },
                      Object(j.__)(
                        "Help on choosing the perfect focus keyphrase",
                        "wordpress-seo"
                      )
                    )
                  );
                },
              },
            ]
          ),
          o
        );
      })(y.Component);
    (V.propTypes = {
      keyword: E.a.string,
      onFocusKeywordChange: E.a.func.isRequired,
      onFocusKeyword: E.a.func.isRequired,
      onBlurKeyword: E.a.func.isRequired,
      isSEMrushIntegrationActive: E.a.bool,
      displayNoKeyphraseMessage: E.a.bool,
    }),
      (V.defaultProps = {
        keyword: "",
        isSEMrushIntegrationActive: !1,
        displayNoKeyphraseMessage: !1,
      }),
      (t.a = Object(v.compose)([
        Object(O.withSelect)(function (e) {
          var t = e("yoast-seo/editor"),
            n = t.getFocusKeyphrase,
            r = t.getSEMrushNoKeyphraseMessage;
          return { keyword: n(), displayNoKeyphraseMessage: r() };
        }),
        Object(O.withDispatch)(function (e) {
          var t = e("yoast-seo/editor"),
            n = t.setFocusKeyword,
            r = t.setMarkerPauseStatus;
          return {
            onFocusKeywordChange: n,
            onFocusKeyword: function () {
              return r(!0);
            },
            onBlurKeyword: function () {
              return r(!1);
            },
          };
        }),
      ])(V));
  },
  function (e, t, n) {
    "use strict";
    var r,
      a,
      o,
      s = n(10),
      i = n.n(s),
      c = n(5),
      l = n.n(c),
      u = n(7),
      p = n.n(u),
      d = n(13),
      m = n.n(d),
      f = n(14),
      b = n.n(f),
      h = n(8),
      y = n.n(h),
      g = n(15),
      v = n.n(g),
      O = n(0),
      j = n(4),
      w = n(1),
      E = n.n(w),
      k = n(12),
      _ = n.n(k),
      T = n(3),
      R = n(2),
      S = n(96),
      x = n(82),
      C = n(51),
      P = n(42),
      I = n(35),
      A = n(29),
      L = n(55),
      N = n(36);
    function q(e) {
      var t = e.target,
        n = e.children;
      return Object(O.createElement)(N.a, { target: t }, n);
    }
    function D(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function M(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? D(Object(n), !0).forEach(function (t) {
              i()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : D(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    q.propTypes = {
      target: E.a.string.isRequired,
      children: E.a.node.isRequired,
    };
    var F = _.a.span(
        r ||
          (r = v()([
            "\n\tfont-size: 1em;\n\tfont-weight: bold;\n\tmargin: 0 0 8px;\n\tdisplay: block;\n",
          ]))
      ),
      B = _.a.div(a || (a = v()(["\n\tpadding: 16px;\n"]))),
      K = _()(L.a)(o || (o = v()(["\n\tmargin: -8px 0 -4px 4px;\n"]))),
      U = (function (e) {
        m()(a, e);
        var t,
          n,
          r =
            ((t = a),
            (n = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r = y()(t);
              if (n) {
                var a = y()(this).constructor;
                e = Reflect.construct(r, arguments, a);
              } else e = r.apply(this, arguments);
              return b()(this, e);
            });
        function a() {
          return l()(this, a), r.apply(this, arguments);
        }
        return (
          p()(a, [
            {
              key: "renderResults",
              value: function () {
                return Object(O.createElement)(
                  O.Fragment,
                  null,
                  Object(O.createElement)(
                    F,
                    null,
                    Object(T.__)("Analysis results", "wordpress-seo"),
                    Object(O.createElement)(
                      K,
                      {
                        href: wpseoAdminL10n[
                          "shortlinks.readability_analysis_info"
                        ],
                        className: "dashicons",
                      },
                      Object(O.createElement)(
                        "span",
                        { className: "screen-reader-text" },
                        Object(T.__)(
                          "Learn more about the readability analysis",
                          "wordpress-seo"
                        )
                      )
                    )
                  ),
                  Object(O.createElement)(x.a, {
                    results: this.props.results,
                    marksButtonClassName: "yoast-tooltip yoast-tooltip-w",
                    marksButtonStatus: this.props.marksButtonStatus,
                  })
                );
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = Object(P.a)(this.props.overallScore);
                return (
                  Object(R.isNil)(this.props.overallScore) &&
                    (t.className = "loading"),
                  Object(O.createElement)(
                    A.LocationConsumer,
                    null,
                    function (n) {
                      return "sidebar" === n
                        ? Object(O.createElement)(
                            C.a,
                            {
                              title: Object(T.__)(
                                "Readability analysis",
                                "wordpress-seo"
                              ),
                              titleScreenReaderText:
                                t.screenReaderReadabilityText,
                              prefixIcon: Object(I.getIconForScore)(
                                t.className
                              ),
                              prefixIconCollapsed: Object(I.getIconForScore)(
                                t.className
                              ),
                              id: "yoast-readability-analysis-collapsible-".concat(
                                n
                              ),
                            },
                            e.renderResults()
                          )
                        : "metabox" === n
                        ? Object(O.createElement)(
                            q,
                            { target: "wpseo-metabox-readability-root" },
                            Object(O.createElement)(
                              B,
                              null,
                              Object(O.createElement)(S.a, {
                                target: "wpseo-readability-score-icon",
                                scoreIndicator: t.className,
                              }),
                              e.renderResults()
                            )
                          )
                        : void 0;
                    }
                  )
                );
              },
            },
          ]),
          a
        );
      })(O.Component);
    (U.propTypes = {
      results: E.a.array.isRequired,
      marksButtonStatus: E.a.string.isRequired,
      overallScore: E.a.number,
    }),
      (U.defaultProps = { overallScore: null }),
      (t.a = Object(j.withSelect)(function (e) {
        var t = e("yoast-seo/editor"),
          n = t.getReadabilityResults,
          r = t.getMarkButtonStatus;
        return M(M({}, n()), {}, { marksButtonStatus: r() });
      })(U));
  },
  function (e, t, n) {
    "use strict";
    var r,
      a = n(10),
      o = n.n(a),
      s = n(0),
      i = n(19),
      c = n(4),
      l = n(3),
      u = n(1),
      p = n.n(u),
      d = n(31),
      m = n.n(d),
      f = n(15),
      b = n.n(f),
      h = n(6),
      y = n(18),
      g = n(9),
      v = n(37),
      O = n.n(v),
      j = n(12),
      w = n.n(j),
      E = n(85),
      k = n(48),
      _ = w.a.div(r || (r = b()(["\n\tpadding: 16px;\n"]))),
      T = function (e, t, n) {
        var r = e.find(function (e) {
          return e.value === t;
        });
        return [
          {
            name: Object(l.sprintf)(
              /* translators: %1$s expands to the plural name of the current post type, %2$s expands to the current site wide default. */
              Object(l.__)("Default for %1$s (%2$s)", "wordpress-seo"),
              n,
              r ? r.name : ""
            ),
            value: "",
          },
        ].concat(m()(e));
      },
      R = function (e) {
        return Object(l.sprintf)(
          /* translators: %1$s expands to the plural name of the current post type, %2$s and %3$s expand to a link to the Search Appearance Settings page */
          Object(l.__)(
            "You can change the default type for %1$s in your %2$sSearch Appearance Settings%3$s.",
            "wordpress-seo"
          ),
          e,
          "{{link}}",
          "{{/link}}"
        );
      },
      S = function (e) {
        return Object(s.createElement)(h.FieldGroup, {
          label: e.helpTextTitle,
          linkTo: e.helpTextLink,
          linkText: Object(l.__)(
            "Learn more about structured data with Schema.org",
            "wordpress-seo"
          ),
          description: e.helpTextDescription,
        });
      };
    S.propTypes = {
      helpTextTitle: p.a.string.isRequired,
      helpTextLink: p.a.string.isRequired,
      helpTextDescription: p.a.string.isRequired,
    };
    var x = function (e) {
      return Object(s.createElement)(
        "p",
        null,
        e.helpTextDescription + " ",
        Object(s.createElement)(
          "a",
          { href: e.helpTextLink },
          Object(l.__)("Read more about Schema.", "wordpress-seo")
        )
      );
    };
    x.propTypes = {
      helpTextDescription: p.a.string.isRequired,
      helpTextLink: p.a.string.isRequired,
    };
    var C = function (e) {
      var t,
        n = T(e.pageTypeOptions, e.defaultPageType, e.postTypeName),
        r = T(e.articleTypeOptions, e.defaultArticleType, e.postTypeName),
        a = Object(k.isFeatureEnabled)("SCHEMA_BLOCKS");
      return Object(s.createElement)(
        s.Fragment,
        null,
        a ? Object(s.createElement)(x, e) : Object(s.createElement)(S, e),
        a &&
          Object(s.createElement)(y.Slot, {
            name: Object(g.join)(["yoast-schema-blocks-analysis", e.location]),
          }),
        Object(s.createElement)(h.FieldGroup, {
          label: Object(l.__)(
            "What type of page or content is this?",
            "wordpress-seo"
          ),
          linkTo: e.additionalHelpTextLink,
          linkText: Object(l.__)(
            "Learn more about page or content types",
            "wordpress-seo"
          ),
        }),
        Object(s.createElement)(h.Select, {
          id: Object(g.join)(["yoast-schema-page-type", e.location]),
          options: n,
          label: Object(l.__)("Page type", "wordpress-seo"),
          onChange: e.schemaPageTypeChange,
          selected: e.schemaPageTypeSelected,
        }),
        e.showArticleTypeInput &&
          Object(s.createElement)(h.Select, {
            id: Object(g.join)(["yoast-schema-article-type", e.location]),
            options: r,
            label: Object(l.__)("Article type", "wordpress-seo"),
            onChange: e.schemaArticleTypeChange,
            selected: e.schemaArticleTypeSelected,
          }),
        e.displayFooter &&
          Object(s.createElement)(
            "p",
            null,
            ((t = e.postTypeName),
            O()({
              mixedString: R(t),
              components: {
                link: Object(s.createElement)("a", {
                  href: "/4dm1n/admin.php?page=wpseo_titles#top#post-types",
                  target: "_blank",
                }),
              },
            }))
          )
      );
    };
    (C.propTypes = {
      schemaPageTypeChange: p.a.func,
      schemaPageTypeSelected: p.a.string,
      pageTypeOptions: E.b.isRequired,
      schemaArticleTypeChange: p.a.func,
      schemaArticleTypeSelected: p.a.string,
      articleTypeOptions: E.b.isRequired,
      showArticleTypeInput: p.a.bool.isRequired,
      additionalHelpTextLink: p.a.string.isRequired,
      helpTextLink: p.a.string.isRequired,
      helpTextTitle: p.a.string.isRequired,
      helpTextDescription: p.a.string.isRequired,
      postTypeName: p.a.string.isRequired,
      displayFooter: p.a.bool,
      defaultPageType: p.a.string.isRequired,
      defaultArticleType: p.a.string.isRequired,
      location: p.a.string.isRequired,
    }),
      (C.defaultProps = {
        schemaPageTypeChange: function () {},
        schemaPageTypeSelected: null,
        schemaArticleTypeChange: function () {},
        schemaArticleTypeSelected: null,
        displayFooter: !1,
      });
    var P = function (e) {
      return e.isMetabox
        ? Object(s.createPortal)(
            Object(s.createElement)(_, null, Object(s.createElement)(C, e)),
            document.getElementById("wpseo-meta-section-schema")
          )
        : Object(s.createElement)(C, e);
    };
    (P.propTypes = {
      showArticleTypeInput: p.a.bool,
      articleTypeLabel: p.a.string,
      additionalHelpTextLink: p.a.string,
      pageTypeLabel: p.a.string.isRequired,
      helpTextLink: p.a.string.isRequired,
      helpTextTitle: p.a.string.isRequired,
      helpTextDescription: p.a.string.isRequired,
      isMetabox: p.a.bool.isRequired,
      postTypeName: p.a.string.isRequired,
      displayFooter: p.a.bool,
      loadSchemaArticleData: p.a.func.isRequired,
      loadSchemaPageData: p.a.func.isRequired,
      location: p.a.string.isRequired,
    }),
      (P.defaultProps = {
        showArticleTypeInput: !1,
        articleTypeLabel: "",
        additionalHelpTextLink: "",
        displayFooter: !1,
      });
    var I = P,
      A = n(33),
      L = n(58);
    function N(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function q(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? N(Object(n), !0).forEach(function (t) {
              o()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : N(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var D = function (e) {
      var t = null !== A.a.articleTypeInput;
      Object(s.useEffect)(function () {
        e.loadSchemaPageData(), t && e.loadSchemaArticleData();
      }, []);
      var n = window.wpseoScriptData.metabox.schema,
        r = n.pageTypeOptions,
        a = n.articleTypeOptions,
        o = {
          articleTypeLabel: Object(l.__)("Article type", "wordpress-seo"),
          pageTypeLabel: Object(l.__)("Page type", "wordpress-seo"),
          postTypeName: window.wpseoAdminL10n.postTypeNamePlural,
          helpTextTitle: Object(l.__)(
            "Yoast SEO automatically describes your pages using schema.org",
            "wordpress-seo"
          ),
          helpTextDescription: Object(l.__)(
            "This helps search engines understand your website and your content. You can change some of your settings for this page below.",
            "wordpress-seo"
          ),
          showArticleTypeInput: t,
          pageTypeOptions: r,
          articleTypeOptions: a,
        },
        i = q(
          q(q({}, e), o),
          "metabox" === e.location
            ? {
                helpTextLink:
                  wpseoAdminL10n["shortlinks.metabox.schema.explanation"],
                additionalHelpTextLink:
                  wpseoAdminL10n["shortlinks.metabox.schema.page_type"],
                isMetabox: !0,
              }
            : {
                helpTextLink:
                  wpseoAdminL10n["shortlinks.sidebar.schema.explanation"],
                additionalHelpTextLink:
                  wpseoAdminL10n["shortlinks.sidebar.schema.page_type"],
                isMetabox: !1,
              }
        );
      return Object(s.createElement)(I, i);
    };
    (D.propTypes = {
      displayFooter: p.a.bool.isRequired,
      schemaPageTypeSelected: p.a.string.isRequired,
      schemaArticleTypeSelected: p.a.string.isRequired,
      defaultArticleType: p.a.string.isRequired,
      defaultPageType: p.a.string.isRequired,
      loadSchemaPageData: p.a.func.isRequired,
      loadSchemaArticleData: p.a.func.isRequired,
      schemaPageTypeChange: p.a.func.isRequired,
      schemaArticleTypeChange: p.a.func.isRequired,
      location: p.a.string.isRequired,
    }),
      (t.a = Object(i.compose)([
        Object(c.withSelect)(function (e) {
          var t = e("yoast-seo/editor"),
            n = t.getPreferences,
            r = t.getPageType,
            a = t.getDefaultPageType,
            o = t.getArticleType,
            s = t.getDefaultArticleType;
          return {
            displayFooter: n().displaySchemaSettingsFooter,
            schemaPageTypeSelected: r(),
            schemaArticleTypeSelected: o(),
            defaultArticleType: s(),
            defaultPageType: a(),
          };
        }),
        Object(c.withDispatch)(function (e) {
          var t = e("yoast-seo/editor"),
            n = t.setPageType,
            r = t.setArticleType;
          return {
            loadSchemaPageData: t.getSchemaPageData,
            loadSchemaArticleData: t.getSchemaArticleData,
            schemaPageTypeChange: n,
            schemaArticleTypeChange: r,
          };
        }),
        Object(L.a)(),
      ])(D));
  },
  function (e, t, n) {
    "use strict";
    var r = n(19),
      a = n(4),
      o = n(0),
      s = n(3),
      i = n(6),
      c = n(9),
      l = n(1),
      u = n.n(l),
      p = n(29),
      d = function (e) {
        var t = e.noIndex,
          n = e.onNoIndexChange,
          r = e.editorContext,
          a = e.isPrivateBlog,
          l = (function (e) {
            var t = Object(s.__)("No", "wordpress-seo"),
              n = Object(s.__)("Yes", "wordpress-seo"),
              r = e.noIndex ? t : n;
            return window.wpseoScriptData.isPost
              ? [
                  {
                    name: Object(s.sprintf)(
                      /* Translators: %s translates to "yes" or "no", %s translates to the Post Label in plural form */
                      Object(s.__)(
                        "%s (current default for %s)",
                        "wordpress-seo"
                      ),
                      r,
                      e.postTypeNamePlural
                    ),
                    value: "0",
                  },
                  { name: t, value: "1" },
                  { name: n, value: "2" },
                ]
              : [
                  {
                    name: Object(s.sprintf)(
                      /* Translators: %s translates to the "yes" or "no" ,%s translates to the Post Label in plural form */
                      Object(s.__)(
                        "%s (current default for %s)",
                        "wordpress-seo"
                      ),
                      r,
                      e.postTypeNamePlural
                    ),
                    value: "default",
                  },
                  { name: n, value: "index" },
                  { name: t, value: "noindex" },
                ];
          })(r);
        return Object(o.createElement)(p.LocationConsumer, null, function (e) {
          return Object(o.createElement)(
            o.Fragment,
            null,
            a &&
              Object(o.createElement)(
                i.Alert,
                { type: "warning" },
                Object(s.__)(
                  "Even though you can set the meta robots setting here, the entire site is set to noindex in the sitewide privacy settings, so these settings won't have an effect.",
                  "wordpress-seo"
                )
              ),
            Object(o.createElement)(i.Select, {
              label: Object(s.sprintf)(
                /* Translators: %s translates to the Post Label in singular form */
                Object(s.__)(
                  "Allow search engines to show this %s in search results?",
                  "wordpress-seo"
                ),
                r.postTypeNameSingular
              ),
              onChange: n,
              id: Object(c.join)(["yoast-meta-robots-noindex", e]),
              options: l,
              selected: t,
              linkTo:
                wpseoAdminL10n["shortlinks.advanced.allow_search_engines"],
              linkText: Object(s.__)(
                "Learn more about the no-index setting on our help page.",
                "wordpress-seo"
              ),
            })
          );
        });
      };
    (d.propTypes = {
      noIndex: u.a.string.isRequired,
      onNoIndexChange: u.a.func.isRequired,
      editorContext: u.a.object.isRequired,
      isPrivateBlog: u.a.bool,
    }),
      (d.defaultProps = { isPrivateBlog: !1 });
    var m = function (e) {
      var t = e.noFollow,
        n = e.onNoFollowChange,
        r = e.postTypeName;
      return Object(o.createElement)(p.LocationConsumer, null, function (e) {
        var a = Object(c.join)(["yoast-meta-robots-nofollow", e]);
        return Object(o.createElement)(i.RadioButtonGroup, {
          id: a,
          options: [
            { value: "0", label: "Yes" },
            { value: "1", label: "No" },
          ],
          label: Object(s.sprintf)(
            /* Translators: %s translates to the Post Label in singular form */
            Object(s.__)(
              "Should search engines follow links on this %s",
              "wordpress-seo"
            ),
            r
          ),
          groupName: a,
          onChange: n,
          selected: t,
          linkTo: wpseoAdminL10n["shortlinks.advanced.follow_links"],
          linkText: Object(s.__)(
            "Learn more about the no-follow setting on our help page.",
            "wordpress-seo"
          ),
        });
      });
    };
    m.propTypes = {
      noFollow: u.a.string.isRequired,
      onNoFollowChange: u.a.func.isRequired,
      postTypeName: u.a.string.isRequired,
    };
    var f = function (e) {
      var t = e.advanced,
        n = e.onAdvancedChange;
      return Object(o.createElement)(p.LocationConsumer, null, function (e) {
        var r = Object(c.join)(["yoast-meta-robots-advanced", e]),
          a = "".concat(r, "-input");
        return Object(o.createElement)(i.MultiSelect, {
          label: Object(s.__)("Meta robots advanced", "wordpress-seo"),
          onChange: n,
          id: r,
          inputId: a,
          options: [
            {
              name: Object(s.__)("No Image Index", "wordpress-seo"),
              value: "noimageindex",
            },
            {
              name: Object(s.__)("No Archive", "wordpress-seo"),
              value: "noarchive",
            },
            {
              name: Object(s.__)("No Snippet", "wordpress-seo"),
              value: "nosnippet",
            },
          ],
          selected: t,
          linkTo: wpseoAdminL10n["shortlinks.advanced.meta_robots"],
          linkText: Object(s.__)(
            "Learn more about advanced meta robots settings on our help page.",
            "wordpress-seo"
          ),
        });
      });
    };
    f.propTypes = {
      advanced: u.a.array.isRequired,
      onAdvancedChange: u.a.func.isRequired,
    };
    var b = function (e) {
      var t = e.breadcrumbsTitle,
        n = e.onBreadcrumbsTitleChange;
      return Object(o.createElement)(p.LocationConsumer, null, function (e) {
        return Object(o.createElement)(i.TextInput, {
          label: Object(s.__)("Breadcrumbs Title", "wordpress-seo"),
          id: Object(c.join)(["yoast-breadcrumbs-title", e]),
          onChange: n,
          value: t,
          linkTo: wpseoAdminL10n["shortlinks.advanced.breadcrumbs_title"],
          linkText: Object(s.__)(
            "Learn more about the breadcrumbs title setting on our help page.",
            "wordpress-seo"
          ),
        });
      });
    };
    b.propTypes = {
      breadcrumbsTitle: u.a.string.isRequired,
      onBreadcrumbsTitleChange: u.a.func.isRequired,
    };
    var h = function (e) {
      var t = e.canonical,
        n = e.onCanonicalChange;
      return Object(o.createElement)(p.LocationConsumer, null, function (e) {
        return Object(o.createElement)(i.TextInput, {
          label: Object(s.__)("Canonical URL", "wordpress-seo"),
          id: Object(c.join)(["yoast-canonical", e]),
          onChange: n,
          value: t,
          linkTo: "https://yoa.st/canonical-url",
          linkText: Object(s.__)(
            "Learn more about canonical URLs on our help page.",
            "wordpress-seo"
          ),
        });
      });
    };
    h.propTypes = {
      canonical: u.a.string.isRequired,
      onCanonicalChange: u.a.func.isRequired,
    };
    var y = function (e) {
      var t = e.noIndex,
        n = e.noFollow,
        r = e.advanced,
        a = e.breadcrumbsTitle,
        s = e.canonical,
        i = e.onNoIndexChange,
        c = e.onNoFollowChange,
        l = e.onAdvancedChange,
        u = e.onBreadcrumbsTitleChange,
        p = e.onCanonicalChange,
        y = e.onLoad,
        g = e.isLoading,
        v = e.editorContext,
        O = e.isBreadcrumbsDisabled,
        j = e.isPrivateBlog;
      Object(o.useEffect)(function () {
        setTimeout(function () {
          g && y();
        });
      });
      var w = {
          noIndex: t,
          onNoIndexChange: i,
          editorContext: v,
          isPrivateBlog: j,
        },
        E = {
          noFollow: n,
          onNoFollowChange: c,
          postTypeName: v.postTypeNameSingular,
        },
        k = { advanced: r, onAdvancedChange: l },
        _ = { breadcrumbsTitle: a, onBreadcrumbsTitleChange: u },
        T = { canonical: s, onCanonicalChange: p };
      return g
        ? null
        : Object(o.createElement)(
            o.Fragment,
            null,
            Object(o.createElement)(d, w),
            v.isPost && Object(o.createElement)(m, E),
            v.isPost && Object(o.createElement)(f, k),
            !O && Object(o.createElement)(b, _),
            Object(o.createElement)(h, T)
          );
    };
    (y.propTypes = {
      noIndex: u.a.string.isRequired,
      canonical: u.a.string.isRequired,
      onNoIndexChange: u.a.func.isRequired,
      onCanonicalChange: u.a.func.isRequired,
      onLoad: u.a.func.isRequired,
      isLoading: u.a.bool.isRequired,
      editorContext: u.a.object.isRequired,
      isBreadcrumbsDisabled: u.a.bool.isRequired,
      isPrivateBlog: u.a.bool,
      advanced: u.a.array,
      onAdvancedChange: u.a.func,
      noFollow: u.a.string,
      onNoFollowChange: u.a.func,
      breadcrumbsTitle: u.a.string,
      onBreadcrumbsTitleChange: u.a.func,
    }),
      (y.defaultProps = {
        advanced: [],
        onAdvancedChange: function () {},
        noFollow: "",
        onNoFollowChange: function () {},
        breadcrumbsTitle: "",
        onBreadcrumbsTitleChange: function () {},
        isPrivateBlog: !1,
      });
    var g = y;
    t.a = Object(r.compose)([
      Object(a.withSelect)(function (e) {
        var t = e("yoast-seo/editor"),
          n = t.getNoIndex,
          r = t.getNoFollow,
          a = t.getAdvanced,
          o = t.getBreadcrumbsTitle,
          s = t.getCanonical,
          i = t.getIsLoading,
          c = t.getEditorContext,
          l = (0, t.getPreferences)(),
          u = l.isBreadcrumbsDisabled,
          p = l.isPrivateBlog;
        return {
          noIndex: n(),
          noFollow: r(),
          advanced: a(),
          breadcrumbsTitle: o(),
          canonical: s(),
          isLoading: i(),
          editorContext: c(),
          isBreadcrumbsDisabled: u,
          isPrivateBlog: p,
        };
      }),
      Object(a.withDispatch)(function (e) {
        var t = e("yoast-seo/editor");
        return {
          onNoIndexChange: t.setNoIndex,
          onNoFollowChange: t.setNoFollow,
          onAdvancedChange: t.setAdvanced,
          onBreadcrumbsTitleChange: t.setBreadcrumbsTitle,
          onCanonicalChange: t.setCanonical,
          onLoad: t.loadAdvancedSettingsData,
        };
      }),
    ])(g);
  },
  ,
  function (e, t, n) {
    "use strict";
    var r = n(17),
      a =
        ("function" == typeof Symbol &&
          Symbol.for &&
          Symbol.for("react.element")) ||
        60103,
      o = n(94),
      s = n(131),
      i = n(132),
      c = "function" == typeof Symbol && Symbol.iterator;
    function l(e, t) {
      return e && "object" == typeof e && null != e.key
        ? ((n = e.key),
          (r = { "=": "=0", ":": "=2" }),
          "$" +
            ("" + n).replace(/[=:]/g, function (e) {
              return r[e];
            }))
        : t.toString(36);
      var n, r;
    }
    var u = /\/+/g;
    function p(e) {
      return ("" + e).replace(u, "$&/");
    }
    var d,
      m,
      f = b,
      b = function (e) {
        if (this.instancePool.length) {
          var t = this.instancePool.pop();
          return this.call(t, e), t;
        }
        return new this(e);
      };
    function h(e, t, n, r) {
      (this.result = e),
        (this.keyPrefix = t),
        (this.func = n),
        (this.context = r),
        (this.count = 0);
    }
    function y(e, t, n) {
      var a,
        s,
        i = e.result,
        c = e.keyPrefix,
        l = e.func,
        u = e.context,
        d = l.call(u, t, e.count++);
      Array.isArray(d)
        ? g(d, i, n, o.thatReturnsArgument)
        : null != d &&
          (r.isValidElement(d) &&
            ((a = d),
            (s =
              c + (!d.key || (t && t.key === d.key) ? "" : p(d.key) + "/") + n),
            (d = r.cloneElement(
              a,
              { key: s },
              void 0 !== a.props ? a.props.children : void 0
            ))),
          i.push(d));
    }
    function g(e, t, n, r, o) {
      var i = "";
      null != n && (i = p(n) + "/");
      var u = h.getPooled(t, i, r, o);
      !(function (e, t, n) {
        null == e ||
          (function e(t, n, r, o) {
            var i,
              u = typeof t;
            if (
              (("undefined" !== u && "boolean" !== u) || (t = null),
              null === t ||
                "string" === u ||
                "number" === u ||
                ("object" === u && t.$$typeof === a))
            )
              return r(o, t, "" === n ? "." + l(t, 0) : n), 1;
            var p = 0,
              d = "" === n ? "." : n + ":";
            if (Array.isArray(t))
              for (var m = 0; m < t.length; m++)
                p += e((i = t[m]), d + l(i, m), r, o);
            else {
              var f = (function (e) {
                var t = e && ((c && e[c]) || e["@@iterator"]);
                if ("function" == typeof t) return t;
              })(t);
              if (f)
                for (var b, h = f.call(t), y = 0; !(b = h.next()).done; )
                  p += e((i = b.value), d + l(i, y++), r, o);
              else if ("object" === u) {
                var g = "" + t;
                s(
                  !1,
                  "Objects are not valid as a React child (found: %s).%s",
                  "[object Object]" === g
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : g,
                  ""
                );
              }
            }
            return p;
          })(e, "", t, n);
      })(e, y, u),
        h.release(u);
    }
    (h.prototype.destructor = function () {
      (this.result = null),
        (this.keyPrefix = null),
        (this.func = null),
        (this.context = null),
        (this.count = 0);
    }),
      (d = function (e, t, n, r) {
        if (this.instancePool.length) {
          var a = this.instancePool.pop();
          return this.call(a, e, t, n, r), a;
        }
        return new this(e, t, n, r);
      }),
      ((m = h).instancePool = []),
      (m.getPooled = d || f),
      m.poolSize || (m.poolSize = 10),
      (m.release = function (e) {
        s(
          e instanceof this,
          "Trying to release an instance into a pool of a different type."
        ),
          e.destructor(),
          this.instancePool.length < this.poolSize && this.instancePool.push(e);
      }),
      (e.exports = function (e) {
        if ("object" != typeof e || !e || Array.isArray(e))
          return (
            i(
              !1,
              "React.addons.createFragment only accepts a single object. Got: %s",
              e
            ),
            e
          );
        if (r.isValidElement(e))
          return (
            i(
              !1,
              "React.addons.createFragment does not accept a ReactElement without a wrapper object."
            ),
            e
          );
        s(
          1 !== e.nodeType,
          "React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components."
        );
        var t = [];
        for (var n in e) g(e[n], t, n, o.thatReturnsArgument);
        return t;
      });
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, r, a, o, s, i) {
      if (!e) {
        var c;
        if (void 0 === t)
          c = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
        else {
          var l = [n, r, a, o, s, i],
            u = 0;
          (c = new Error(
            t.replace(/%s/g, function () {
              return l[u++];
            })
          )).name = "Invariant Violation";
        }
        throw ((c.framesToPop = 1), c);
      }
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(94);
    e.exports = r;
  },
  function (e, t, n) {
    "use strict";
    function r(e) {
      return e.match(/^\{\{\//)
        ? { type: "componentClose", value: e.replace(/\W/g, "") }
        : e.match(/\/\}\}$/)
        ? { type: "componentSelfClosing", value: e.replace(/\W/g, "") }
        : e.match(/^\{\{/)
        ? { type: "componentOpen", value: e.replace(/\W/g, "") }
        : { type: "string", value: e };
    }
    e.exports = function (e) {
      return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(r);
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t) {
    e.exports = window.yoast.searchMetadataPreviews;
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      a = n(18),
      o = n(1),
      s = n.n(o),
      i = n(98),
      c = function (e) {
        return (
          Object(r.useEffect)(function () {
            setTimeout(e.onLoad);
          }, []),
          e.isPremium
            ? Object(r.createElement)(a.Slot, {
                name: "YoastTwitterPremium".concat(
                  e.location.charAt(0).toUpperCase() + e.location.slice(1)
                ),
                fillProps: e,
              })
            : Object(r.createElement)(i.a, e)
        );
      };
    (c.propTypes = {
      isPremium: s.a.bool.isRequired,
      onLoad: s.a.func.isRequired,
      location: s.a.string.isRequired,
    }),
      (t.a = c);
  },
  function (e, t) {
    e.exports = window.yoast.socialMetadataForms;
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      a = n(18),
      o = n(1),
      s = n.n(o),
      i = n(98),
      c = function (e) {
        return (
          Object(r.useEffect)(function () {
            setTimeout(e.onLoad);
          }, []),
          e.isPremium
            ? Object(r.createElement)(a.Slot, {
                name: "YoastFacebookPremium".concat(
                  e.location.charAt(0).toUpperCase() + e.location.slice(1)
                ),
                fillProps: e,
              })
            : Object(r.createElement)(i.a, e)
        );
      };
    (c.propTypes = {
      isPremium: s.a.bool.isRequired,
      onLoad: s.a.func.isRequired,
      location: s.a.string.isRequired,
    }),
      (t.a = c);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    var r = n(4),
      a = n(6);
    t.a = Object(r.withSelect)(function (e) {
      return { message: (0, e("yoast-seo/editor").getWarningMessage)() };
    })(a.Warning);
  },
  function (e, t, n) {
    "use strict";
    var r = n(10),
      a = n.n(r),
      o = n(27),
      s = n.n(o),
      i = n(0),
      c = n(19),
      l = n(4),
      u = n(3),
      p = n(147),
      d = n(29),
      m = n(112),
      f = n(40),
      b = function (e, t) {
        var n = 0;
        return (
          t.shortenedBaseUrl &&
            "string" == typeof t.shortenedBaseUrl &&
            (n = t.shortenedBaseUrl.length),
          (e.url = e.url.replace(/\s+/g, "-")),
          "-" === e.url[e.url.length - 1] && (e.url = e.url.slice(0, -1)),
          "-" === e.url[n] && (e.url = e.url.slice(0, n) + e.url.slice(n + 1)),
          Object(f.applyReplaceUsingPlugin)(e)
        );
      };
    t.a = Object(c.compose)([
      Object(l.withSelect)(function (e) {
        var t = e("yoast-seo/editor"),
          n = t.getBaseUrlFromSettings,
          r = t.getDateFromSettings,
          a = t.getFocusKeyphrase,
          o = t.getRecommendedReplaceVars,
          s = t.getReplaceVars,
          i = t.getShoppingData,
          c = t.getSiteIconUrlFromSettings,
          l = t.getSnippetEditorData,
          u = t.getSnippetEditorMode,
          p = t.getSnippetEditorPreviewImageUrl,
          d = t.getSnippetEditorWordsToHighlight,
          m = t.isCornerstoneContent,
          f = t.getIsTerm,
          b = s();
        return (
          b.forEach(function (e) {
            "" !== e.value ||
              ["title", "excerpt", "excerpt_only"].includes(e.name) ||
              (e.value = "%%" + e.name + "%%");
          }),
          {
            baseUrl: n(),
            data: l(),
            date: r(),
            faviconSrc: c(),
            keyword: a(),
            mobileImageSrc: p(),
            mode: u(),
            recommendedReplacementVariables: o(),
            replacementVariables: b,
            shoppingData: i(),
            wordsToHighlight: d(),
            isCornerstone: m(),
            isTaxonomy: f(),
          }
        );
      }),
      Object(l.withDispatch)(function (e) {
        var t = e("yoast-seo/editor"),
          n = t.updateData,
          r = t.switchMode,
          o = t.updateAnalysisData,
          s = e("core/editor");
        return {
          onChange: function (e, t) {
            switch (e) {
              case "mode":
                r(t);
                break;
              case "slug":
                n({ slug: t }), s && s.editPost({ slug: t });
                break;
              default:
                n(a()({}, e, t));
            }
          },
          onChangeAnalysisData: o,
        };
      }),
    ])(function (e) {
      return Object(i.createElement)(d.LocationConsumer, null, function (t) {
        return Object(i.createElement)(
          m.a,
          { icon: "eye", hasPaperStyle: e.hasPaperStyle },
          Object(i.createElement)(
            p.SnippetEditor,
            s()({}, e, {
              descriptionPlaceholder: Object(u.__)(
                "Please provide a meta description by editing the snippet below.",
                "wordpress-seo"
              ),
              mapEditorDataToPreview: b,
              showCloseButton: !1,
              idSuffix: t,
            })
          )
        );
      });
    });
  },
  function (e, t, n) {
    "use strict";
    var r = n(19),
      a = n(4),
      o = n(3),
      s = n(9),
      i = n(148),
      c = n(20),
      l = n(58),
      u = n(90),
      p = function (e) {
        Object(a.dispatch)("yoast-seo/editor").setTwitterPreviewImage({
          url: e.url,
          id: e.id,
          warnings: Object(s.validateTwitterImage)(e),
        });
      },
      d = function () {
        Object(u.a)(p);
      };
    t.a = Object(r.compose)([
      Object(a.withSelect)(function (e) {
        var t = e("yoast-seo/editor"),
          n = t.getTwitterDescription,
          r = t.getTwitterTitle,
          a = t.getTwitterImageUrl,
          s = t.getFacebookImageUrl,
          i = t.getFacebookTitle,
          l = t.getFacebookDescription,
          u = t.getDescription,
          p = t.getSeoTitle,
          d = t.getTwitterWarnings,
          m = t.getTwitterImageType,
          f = t.getImageFallback,
          b = t.getRecommendedReplaceVars,
          h = t.getReplaceVars,
          y = t.getSiteUrl,
          g = t.getAuthorName,
          v = t.getSeoTitleTemplate,
          O = t.getSeoTitleTemplateNoFallback,
          j = t.getSocialTitleTemplate,
          w = t.getSeoDescriptionTemplate,
          E = t.getSocialDescriptionTemplate,
          k = t.getReplacedExcerpt,
          _ = Object(o.sprintf)(
            /* Translators: %s expands to the social medium name, i.e. Faceboook. */
            Object(o.__)(
              "Modify your %s title by editing it right here...",
              "wordpress-seo"
            ),
            "Twitter"
          ),
          T = Object(o.sprintf)(
            /* Translators: %s expands to the social medium name, i.e. Faceboook. */
            Object(o.__)(
              "Modify your %s description by editing it right here...",
              "wordpress-seo"
            ),
            "Twitter"
          );
        /* Translators: %s expands to the social medium name, i.e. Faceboook. */ return {
          imageUrl: a(),
          imageFallbackUrl: s() || f(),
          recommendedReplacementVariables: b(),
          replacementVariables: h(),
          description: n(),
          descriptionPreviewFallback: E() || l() || u() || w() || k() || T,
          title: r(),
          titlePreviewFallback: j() || i() || p() || O() || v() || _,
          imageWarnings: d(),
          authorName: g(),
          siteUrl: y(),
          isPremium: !!Object(c.a)().isPremium,
          isLarge: "summary" !== m(),
          titleInputPlaceholder: _,
          descriptionInputPlaceholder: T,
          socialMediumName: "Twitter",
        };
      }),
      Object(a.withDispatch)(function (e) {
        var t = e("yoast-seo/editor"),
          n = t.setTwitterPreviewTitle,
          r = t.setTwitterPreviewDescription,
          a = t.clearTwitterPreviewImage,
          o = t.loadTwitterPreviewData;
        return {
          onSelectImageClick: d,
          onRemoveImageClick: a,
          onDescriptionChange: r,
          onTitleChange: n,
          onLoad: o,
        };
      }),
      Object(l.a)(),
    ])(i.a);
  },
  function (e, t, n) {
    "use strict";
    var r = n(19),
      a = n(4),
      o = n(3),
      s = n(9),
      i = n(150),
      c = n(20),
      l = n(58),
      u = n(90),
      p = function (e) {
        Object(a.dispatch)("yoast-seo/editor").setFacebookPreviewImage({
          url: e.url,
          id: e.id,
          warnings: Object(s.validateFacebookImage)(e),
        });
      },
      d = function () {
        Object(u.a)(p);
      };
    t.a = Object(r.compose)([
      Object(a.withSelect)(function (e) {
        var t = e("yoast-seo/editor"),
          n = t.getFacebookDescription,
          r = t.getDescription,
          a = t.getFacebookTitle,
          s = t.getSeoTitle,
          i = t.getFacebookImageUrl,
          l = t.getImageFallback,
          u = t.getFacebookWarnings,
          p = t.getRecommendedReplaceVars,
          d = t.getReplaceVars,
          m = t.getSiteUrl,
          f = t.getAuthorName,
          b = t.getSeoTitleTemplate,
          h = t.getSeoTitleTemplateNoFallback,
          y = t.getSocialTitleTemplate,
          g = t.getSeoDescriptionTemplate,
          v = t.getSocialDescriptionTemplate,
          O = t.getReplacedExcerpt,
          j = Object(o.sprintf)(
            /* Translators: %s expands to the social medium name, i.e. Faceboook. */
            Object(o.__)(
              "Modify your %s title by editing it right here...",
              "wordpress-seo"
            ),
            "Facebook"
          ),
          w = Object(o.sprintf)(
            /* Translators: %s expands to the social medium name, i.e. Faceboook. */
            Object(o.__)(
              "Modify your %s description by editing it right here...",
              "wordpress-seo"
            ),
            "Facebook"
          );
        /* Translators: %s expands to the social medium name, i.e. Faceboook. */ return {
          imageUrl: i(),
          imageFallbackUrl: l(),
          recommendedReplacementVariables: p(),
          replacementVariables: d(),
          description: n(),
          descriptionPreviewFallback: v() || r() || g() || O() || w,
          title: a(),
          titlePreviewFallback: y() || s() || h() || b() || j,
          imageWarnings: u(),
          authorName: f(),
          siteUrl: m(),
          isPremium: !!Object(c.a)().isPremium,
          titleInputPlaceholder: j,
          descriptionInputPlaceholder: w,
          socialMediumName: "Facebook",
        };
      }),
      Object(a.withDispatch)(function (e) {
        var t = e("yoast-seo/editor"),
          n = t.setFacebookPreviewTitle,
          r = t.setFacebookPreviewDescription,
          a = t.clearFacebookPreviewImage,
          o = t.loadFacebookPreviewData;
        return {
          onSelectImageClick: d,
          onRemoveImageClick: a,
          onDescriptionChange: r,
          onTitleChange: n,
          onLoad: o,
        };
      }),
      Object(l.a)(),
    ])(i.a);
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return I;
    });
    var r = n(0),
      a = n(1),
      o = n.n(a),
      s = n(18),
      i = n(120),
      c = n(103);
    function l(e) {
      var t = e.theme;
      return Object(r.createElement)(
        c.a,
        { theme: t, location: "metabox" },
        Object(r.createElement)(s.Slot, { name: "YoastMetabox" }, function (e) {
          return Object(i.a)(e);
        })
      );
    }
    var u = n(4),
      p = n(3),
      d = n(124),
      m = n(161),
      f = n(160),
      b = n(125),
      h = n(126),
      y = n(122),
      g = n(52),
      v = n(32),
      O = n(128),
      j = n(163),
      w = n(162),
      E = function (e) {
        var t = e.displayFacebook,
          n = e.displayTwitter;
        return Object(r.createElement)(
          r.Fragment,
          null,
          t &&
            Object(r.createElement)(
              g.a,
              {
                hasSeparator: !1,
                /* Translators: %s expands to Facebook. */ title: Object(
                  p.sprintf
                )(Object(p.__)("%s preview", "wordpress-seo"), "Facebook"),
                initialIsOpen: !0,
              },
              Object(r.createElement)(j.a, null)
            ),
          n &&
            Object(r.createElement)(
              g.a,
              /* Translators: %s expands to Twitter. */ {
                title: Object(p.sprintf)(
                  Object(p.__)("%s preview", "wordpress-seo"),
                  "Twitter"
                ),
                hasSeparator: t,
                initialIsOpen: !0,
              },
              Object(r.createElement)(w.a, null)
            )
        );
      };
    E.propTypes = {
      displayFacebook: o.a.bool.isRequired,
      displayTwitter: o.a.bool.isRequired,
    };
    var k = E,
      _ = Object(u.withSelect)(function (e) {
        var t = (0, e("yoast-seo/editor").getPreferences)();
        return {
          displayFacebook: t.displayFacebook,
          displayTwitter: t.displayTwitter,
        };
      })(k),
      T = n(36);
    function R(e) {
      var t = e.target;
      return Object(r.createElement)(
        T.a,
        { target: t },
        Object(r.createElement)(_, null)
      );
    }
    R.propTypes = { target: o.a.string.isRequired };
    var S = n(127),
      x = n(115);
    function C(e) {
      var t = e.settings;
      return Object(r.createElement)(
        s.Fill,
        { name: "YoastMetabox" },
        Object(r.createElement)(
          v.a,
          { key: "warning", renderPriority: 1 },
          Object(r.createElement)(f.a, null)
        ),
        t.isKeywordAnalysisActive &&
          Object(r.createElement)(
            v.a,
            { key: "keyword-input", renderPriority: 8 },
            Object(r.createElement)(b.a, {
              isSEMrushIntegrationActive: t.isSEMrushIntegrationActive,
            }),
            !window.wpseoScriptData.metabox.isPremium &&
              Object(r.createElement)(
                s.Fill,
                { name: "YoastRelatedKeyphrases" },
                Object(r.createElement)(x.a, null)
              )
          ),
        Object(r.createElement)(
          v.a,
          { key: "google-preview", renderPriority: 9 },
          Object(r.createElement)(
            g.a,
            {
              id: "yoast-snippet-editor-metabox",
              title: Object(p.__)("Google preview", "wordpress-seo"),
              initialIsOpen: !0,
            },
            Object(r.createElement)(m.a, { hasPaperStyle: !1 })
          )
        ),
        t.isContentAnalysisActive &&
          Object(r.createElement)(
            v.a,
            { key: "readability-analysis", renderPriority: 10 },
            Object(r.createElement)(h.a, null)
          ),
        t.isKeywordAnalysisActive &&
          Object(r.createElement)(
            v.a,
            { key: "seo-analysis", renderPriority: 20 },
            Object(r.createElement)(y.a, {
              shouldUpsell: t.shouldUpsell,
              shouldUpsellWordFormRecognition: t.isWordFormRecognitionActive,
            })
          ),
        t.isCornerstoneActive &&
          Object(r.createElement)(
            v.a,
            { key: "cornerstone", renderPriority: 30 },
            Object(r.createElement)(d.a, null)
          ),
        t.displayAdvancedTab &&
          Object(r.createElement)(
            v.a,
            { key: "advanced", renderPriority: 40 },
            Object(r.createElement)(
              g.a,
              {
                id: "collapsible-advanced-settings",
                title: Object(p.__)("Advanced", "wordpress-seo"),
              },
              Object(r.createElement)(O.a, null)
            )
          ),
        t.displaySchemaSettings &&
          Object(r.createElement)(
            v.a,
            { key: "schema", renderPriority: 50 },
            Object(r.createElement)(S.a, null)
          ),
        Object(r.createElement)(
          v.a,
          { key: "social", renderPriority: -1 },
          Object(r.createElement)(R, { target: "wpseo-section-social" })
        )
      );
    }
    C.propTypes = { settings: o.a.object.isRequired };
    var P = Object(u.withSelect)(function (e, t) {
      return {
        settings: (0, e("yoast-seo/editor").getPreferences)(),
        store: t.store,
      };
    })(C);
    function I(e) {
      var t = e.target,
        n = e.store,
        a = e.theme;
      return Object(r.createElement)(
        T.a,
        { target: t },
        Object(r.createElement)(l, { store: n, theme: a }),
        Object(r.createElement)(P, { store: n, theme: a })
      );
    }
    I.propTypes = {
      target: o.a.string.isRequired,
      store: o.a.object,
      theme: o.a.object,
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(31),
      a = n.n(r),
      o = n(5),
      s = n.n(o),
      i = n(7),
      c = n.n(i),
      l = n(13),
      u = n.n(l),
      p = n(14),
      d = n.n(p),
      m = n(8),
      f = n.n(m),
      b = n(0),
      h = n(18),
      y = n(192),
      g = n(20);
    var v = [],
      O = null,
      j = (function (e) {
        u()(o, e);
        var t,
          n,
          r =
            ((t = o),
            (n = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r = f()(t);
              if (n) {
                var a = f()(this).constructor;
                e = Reflect.construct(r, arguments, a);
              } else e = r.apply(this, arguments);
              return d()(this, e);
            });
        function o(e) {
          var t;
          return (
            s()(this, o),
            ((t = r.call(this, e)).state = { registeredComponents: [] }),
            t
          );
        }
        return (
          c()(o, [
            {
              key: "registerComponent",
              value: function (e, t) {
                this.setState({
                  registeredComponents: [].concat(
                    a()(this.state.registeredComponents),
                    [{ key: e, Component: t }]
                  ),
                });
              },
            },
            {
              key: "render",
              value: function () {
                return this.state.registeredComponents.map(function (e) {
                  var t = e.Component,
                    n = e.key;
                  return Object(b.createElement)(t, { key: n });
                });
              },
            },
          ]),
          o
        );
      })(b.Component);
    function w(e, t) {
      null === O || null === O.current
        ? v.push({ key: e, Component: t })
        : O.current.registerComponent(e, t);
    }
    var E = n(10),
      k = n.n(E),
      _ = n(23),
      T = n.n(_),
      R = n(2),
      S = n(16),
      x = n(43),
      C = n(40),
      P = n(38);
    function I(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function A(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? I(Object(n), !0).forEach(function (t) {
              k()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : I(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var L = T.a.markers.removeMarks,
      N = jQuery,
      q = (function () {
        function e(t, n) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "content";
          s()(this, e),
            (this._refresh = t),
            (this._store = n),
            (this._initialData = {}),
            (this._previousData = {}),
            (this._tinyMceId = r),
            (this.updateReplacementData =
              this.updateReplacementData.bind(this)),
            (this.refreshYoastSEO = this.refreshYoastSEO.bind(this));
        }
        return (
          c()(e, [
            {
              key: "initialize",
              value: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
                (this._initialData = this.getInitialData(e)),
                  Object(C.fillReplacementVariables)(
                    this._initialData,
                    this._store
                  ),
                  this._store.dispatch(Object(S.i)(t)),
                  this.subscribeToElements(),
                  this.subscribeToStore(),
                  this.subscribeToSnippetPreviewImage();
              },
            },
            {
              key: "subscribeToSnippetPreviewImage",
              value: function () {
                var e = this;
                if (
                  !Object(R.isUndefined)(wp.media) &&
                  !Object(R.isUndefined)(wp.media.featuredImage)
                ) {
                  N("#postimagediv").on(
                    "click",
                    "#remove-post-thumbnail",
                    function () {
                      (e.featuredImageIsSet = !1),
                        e.setImageInSnippetPreview(e.getContentImage());
                    }
                  );
                  var t = wp.media.featuredImage.frame();
                  t.on("select", function () {
                    var n = t.state().get("selection").first().attributes.url;
                    n &&
                      ((e.featuredImageIsSet = !0),
                      e.setImageInSnippetPreview(n));
                  }),
                    P.addEventHandler(this._tinyMceId, ["init"], function () {
                      var t = e.getContentImage(),
                        n = e.getFeaturedImage() || t || null;
                      e._store.dispatch(Object(x.c)(t)),
                        e.setImageInSnippetPreview(n);
                    }),
                    P.addEventHandler(
                      this._tinyMceId,
                      ["change"],
                      Object(R.debounce)(function () {
                        if (!e.featuredImageIsSet) {
                          var t = e.getContentImage();
                          e._store.dispatch(Object(x.c)(t)),
                            e.setImageInSnippetPreview(t);
                        }
                      }, 1e3)
                    );
                }
              },
            },
            {
              key: "getFeaturedImage",
              value: function () {
                var e = N("#set-post-thumbnail img").attr("src");
                return e
                  ? ((this.featuredImageIsSet = !0), e)
                  : ((this.featuredImageIsSet = !1), null);
              },
            },
            {
              key: "setImageInSnippetPreview",
              value: function (e) {
                this._store.dispatch(
                  Object(S.m)({ snippetPreviewImageURL: e })
                );
              },
            },
            {
              key: "getContentImage",
              value: function () {
                if (this.featuredImageIsSet) return "";
                var e = this.getContent(),
                  t = T.a.languageProcessing.imageInText(e),
                  n = "";
                if (0 === t.length) return n;
                do {
                  var r = t.shift(),
                    a = (r = N(r)).prop("src");
                  a && (n = a);
                } while ("" === n && t.length > 0);
                return n;
              },
            },
            {
              key: "getTitle",
              value: function () {
                var e = document.getElementById("title");
                return (e && e.value) || "";
              },
            },
            {
              key: "getExcerpt",
              value: function () {
                var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0],
                  t = document.getElementById("excerpt"),
                  n = (t && t.value) || "";
                return "" !== n || !1 === e
                  ? n
                  : Object(C.excerptFromContent)(this.getContent());
              },
            },
            {
              key: "getSlug",
              value: function () {
                var e = "",
                  t = document.getElementById("new-post-slug");
                return (
                  t
                    ? (e = t.value)
                    : null !==
                        document.getElementById("editable-post-name-full") &&
                      (e = document.getElementById(
                        "editable-post-name-full"
                      ).textContent),
                  e
                );
              },
            },
            {
              key: "getContent",
              value: function () {
                var e = this._tinyMceId;
                return L(P.getContentTinyMce(e));
              },
            },
            {
              key: "subscribeToElements",
              value: function () {
                this.subscribeToInputElement("title", "title"),
                  this.subscribeToInputElement("excerpt", "excerpt"),
                  this.subscribeToInputElement("excerpt", "excerpt_only");
              },
            },
            {
              key: "subscribeToInputElement",
              value: function (e, t) {
                var n = this,
                  r = document.getElementById(e);
                r &&
                  r.addEventListener("input", function (e) {
                    n.updateReplacementData(e, t);
                  });
              },
            },
            {
              key: "updateReplacementData",
              value: function (e, t) {
                var n = e.target.value;
                "excerpt" === t && "" === n && (n = this.getExcerpt()),
                  (this._initialData[t] = n),
                  this._store.dispatch(Object(S.n)(t, n));
              },
            },
            {
              key: "isShallowEqual",
              value: function (e, t) {
                if (Object.keys(e).length !== Object.keys(t).length) return !1;
                for (var n in e)
                  if (e.hasOwnProperty(n) && (!(n in t) || e[n] !== t[n]))
                    return !1;
                return !0;
              },
            },
            {
              key: "refreshYoastSEO",
              value: function () {
                var e = this.getData();
                !this.isShallowEqual(this._previousData, e) &&
                  (this.handleEditorChange(e),
                  (this._previousData = e),
                  window.YoastSEO &&
                    window.YoastSEO.app &&
                    window.YoastSEO.app.refresh());
              },
            },
            {
              key: "handleEditorChange",
              value: function (e) {
                this._previousData.excerpt !== e.excerpt &&
                  (this._store.dispatch(Object(S.n)("excerpt", e.excerpt)),
                  this._store.dispatch(
                    Object(S.n)("excerpt_only", e.excerpt_only)
                  )),
                  this._previousData.snippetPreviewImageURL !==
                    e.snippetPreviewImageURL &&
                    this.setImageInSnippetPreview(e.snippetPreviewImageURL);
              },
            },
            {
              key: "subscribeToStore",
              value: function () {
                (this.subscriber = Object(R.debounce)(
                  this.refreshYoastSEO,
                  500
                )),
                  this._store.subscribe(this.subscriber);
              },
            },
            {
              key: "getInitialData",
              value: function (e) {
                return (
                  (e = Object(C.mapCustomFields)(e, this._store)),
                  A(
                    A({}, (e = Object(C.mapCustomTaxonomies)(e, this._store))),
                    {},
                    {
                      title: this.getTitle(),
                      excerpt: this.getExcerpt(),
                      excerpt_only: this.getExcerpt(!1),
                      slug: this.getSlug(),
                      content: this.getContent(),
                    }
                  )
                );
              },
            },
            {
              key: "getData",
              value: function () {
                return A(
                  A({}, this._store.getState().snippetEditor.data),
                  {},
                  {
                    content: this.getContent(),
                    excerpt: this.getExcerpt(),
                    excerpt_only: this.getExcerpt(!1),
                  }
                );
              },
            },
          ]),
          e
        );
      })();
    (window.yoast = window.yoast || {}),
      (window.yoast.initEditorIntegration = function (e) {
        (window.YoastSEO = window.YoastSEO || {}),
          (window.YoastSEO._registerReactComponent = w),
          (function (e) {
            var t = Object(g.a)();
            O = Object(b.createRef)();
            var n = { isRtl: t.isRtl };
            Object(b.render)(
              Object(b.createElement)(
                h.SlotFillProvider,
                null,
                Object(b.createElement)(y.a, {
                  target: "wpseo-metabox-root",
                  store: e,
                  theme: n,
                }),
                Object(b.createElement)(j, { ref: O })
              ),
              document.getElementById("wpseo-metabox-root")
            ),
              v.forEach(function (e) {
                O.current.registerComponent(e.key, e.Component);
              });
          })(e);
      }),
      (window.yoast.EditorData = q);
  },
]);

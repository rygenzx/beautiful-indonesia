!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
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
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
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
    n((n.s = 347));
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
      o = n(11);
    e.exports = function (e, t) {
      return !t || ("object" !== r(t) && "function" != typeof t) ? o(e) : t;
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
      return o;
    }),
      n.d(t, "f", function () {
        return a;
      }),
      n.d(t, "g", function () {
        return i;
      }),
      n.d(t, "a", function () {
        return s;
      }),
      n.d(t, "d", function () {
        return c;
      }),
      n.d(t, "c", function () {
        return u;
      }),
      n.d(t, "h", function () {
        return l;
      }),
      n.d(t, "b", function () {
        return p;
      }),
      n.d(t, "l", function () {
        return d;
      }),
      n.d(t, "m", function () {
        return f;
      }),
      n.d(t, "n", function () {
        return m;
      }),
      n.d(t, "o", function () {
        return g;
      }),
      n.d(t, "k", function () {
        return b;
      }),
      n.d(t, "j", function () {
        return y;
      }),
      n.d(t, "i", function () {
        return h;
      });
    var r = n(9),
      o = "SNIPPET_EDITOR_SWITCH_MODE",
      a = "SNIPPET_EDITOR_UPDATE_DATA",
      i = "SNIPPET_EDITOR_UPDATE_REPLACEMENT_VARIABLE",
      s = "SNIPPET_EDITOR_HIDE_REPLACEMENT_VARIABLES",
      c = "SNIPPET_EDITOR_REMOVE_REPLACEMENT_VARIABLE",
      u = "SNIPPET_EDITOR_REFRESH",
      l = "SNIPPET_EDITOR_UPDATE_WORDS_TO_HIGHLIGHT",
      p = "LOAD_SNIPPET_EDITOR_DATA";
    function d(e) {
      return { type: o, mode: e };
    }
    function f(e) {
      return { type: a, data: e };
    }
    function m(e, t) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = "string" == typeof t ? Object(r.decodeHTML)(t) : t;
      return { type: i, name: e, value: a, label: n, hidden: o };
    }
    function g(e) {
      return { type: l, wordsToHighlight: e };
    }
    function b(e) {
      return { type: c, name: e };
    }
    function y() {
      return { type: u, time: new Date().getMilliseconds() };
    }
    function h(e) {
      return { type: s, data: e };
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
      return o;
    });
    var r = n(2);
    function o() {
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
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "SET_ACTIVE_MARKER", function () {
        return a.a;
      }),
      n.d(t, "setActiveMarker", function () {
        return a.b;
      }),
      n.d(t, "SET_NO_INDEX", function () {
        return i.f;
      }),
      n.d(t, "SET_NO_FOLLOW", function () {
        return i.e;
      }),
      n.d(t, "SET_ADVANCED", function () {
        return i.b;
      }),
      n.d(t, "SET_BREADCRUMBS_TITLE", function () {
        return i.c;
      }),
      n.d(t, "SET_CANONICAL_URL", function () {
        return i.d;
      }),
      n.d(t, "LOAD_ADVANCED_SETTINGS", function () {
        return i.a;
      }),
      n.d(t, "setNoIndex", function () {
        return i.l;
      }),
      n.d(t, "setNoFollow", function () {
        return i.k;
      }),
      n.d(t, "setAdvanced", function () {
        return i.h;
      }),
      n.d(t, "setBreadcrumbsTitle", function () {
        return i.i;
      }),
      n.d(t, "setCanonical", function () {
        return i.j;
      }),
      n.d(t, "loadAdvancedSettingsData", function () {
        return i.g;
      }),
      n.d(t, "UPDATE_SNIPPET_DATA", function () {
        return s;
      }),
      n.d(t, "RUN_ANALYSIS", function () {
        return c;
      }),
      n.d(t, "updateAnalysisData", function () {
        return u;
      }),
      n.d(t, "runAnalysis", function () {
        return l;
      }),
      n.d(t, "LOAD_CORNERSTONE_CONTENT", function () {
        return p.a;
      }),
      n.d(t, "TOGGLE_CORNERSTONE_CONTENT", function () {
        return p.c;
      }),
      n.d(t, "SET_CORNERSTONE_CONTENT", function () {
        return p.b;
      }),
      n.d(t, "loadCornerstoneContent", function () {
        return p.d;
      }),
      n.d(t, "setCornerstoneContent", function () {
        return p.e;
      }),
      n.d(t, "toggleCornerstoneContent", function () {
        return p.f;
      }),
      n.d(t, "SET_EDITOR_DATA_CONTENT", function () {
        return d;
      }),
      n.d(t, "SET_EDITOR_DATA_TITLE", function () {
        return f;
      }),
      n.d(t, "SET_EDITOR_DATA_EXCERPT", function () {
        return m;
      }),
      n.d(t, "SET_EDITOR_DATA_IMAGE_URL", function () {
        return g;
      }),
      n.d(t, "setEditorDataContent", function () {
        return b;
      }),
      n.d(t, "setEditorDataTitle", function () {
        return y;
      }),
      n.d(t, "setEditorDataExcerpt", function () {
        return h;
      }),
      n.d(t, "setEditorDataImageUrl", function () {
        return O;
      }),
      n.d(t, "OPEN_EDITOR_MODAL", function () {
        return w;
      }),
      n.d(t, "CLOSE_EDITOR_MODAL", function () {
        return v;
      }),
      n.d(t, "openEditorModal", function () {
        return j;
      }),
      n.d(t, "closeEditorModal", function () {
        return E;
      }),
      n.d(t, "SET_ESTIMATED_READING_TIME", function () {
        return _.b;
      }),
      n.d(t, "LOAD_ESTIMATED_READING_TIME", function () {
        return _.a;
      }),
      n.d(t, "setEstimatedReadingTime", function () {
        return _.d;
      }),
      n.d(t, "loadEstimatedReadingTime", function () {
        return _.c;
      }),
      n.d(t, "LOAD_FOCUS_KEYWORD", function () {
        return T.a;
      }),
      n.d(t, "SET_FOCUS_KEYWORD", function () {
        return T.b;
      }),
      n.d(t, "loadFocusKeyword", function () {
        return T.c;
      }),
      n.d(t, "setFocusKeyword", function () {
        return T.d;
      }),
      n.d(t, "SET_MARKER_STATUS", function () {
        return S.a;
      }),
      n.d(t, "setMarkerStatus", function () {
        return S.b;
      }),
      n.d(t, "SET_MARKER_PAUSE_STATUS", function () {
        return R.a;
      }),
      n.d(t, "setMarkerPauseStatus", function () {
        return R.b;
      }),
      n.d(t, "DISMISS_ALERT", function () {
        return k.a;
      }),
      n.d(t, "DISMISS_ALERT_SUCCESS", function () {
        return k.b;
      }),
      n.d(t, "dismissAlert", function () {
        return k.c;
      }),
      n.d(t, "SET_PRIMARY_TAXONOMY", function () {
        return P.a;
      }),
      n.d(t, "setPrimaryTaxonomyId", function () {
        return P.b;
      }),
      n.d(t, "SET_PAGE_TYPE", function () {
        return D.d;
      }),
      n.d(t, "SET_ARTICLE_TYPE", function () {
        return D.c;
      }),
      n.d(t, "GET_SCHEMA_PAGE_DATA", function () {
        return D.b;
      }),
      n.d(t, "GET_SCHEMA_ARTICLE_DATA", function () {
        return D.a;
      }),
      n.d(t, "setPageType", function () {
        return D.h;
      }),
      n.d(t, "setArticleType", function () {
        return D.g;
      }),
      n.d(t, "getSchemaPageData", function () {
        return D.f;
      }),
      n.d(t, "getSchemaArticleData", function () {
        return D.e;
      }),
      n.d(t, "MODAL_DISMISS", function () {
        return x;
      }),
      n.d(t, "MODAL_OPEN", function () {
        return A;
      }),
      n.d(t, "MODAL_OPEN_NO_KEYPHRASE", function () {
        return C;
      }),
      n.d(t, "setSEMrushDismissModal", function () {
        return I;
      }),
      n.d(t, "setSEMrushOpenModal", function () {
        return M;
      }),
      n.d(t, "setSEMrushNoKeyphraseMessage", function () {
        return N;
      }),
      n.d(t, "CHANGE_COUNTRY", function () {
        return L.a;
      }),
      n.d(t, "SET_REQUEST_SUCCEEDED", function () {
        return L.g;
      }),
      n.d(t, "SET_REQUEST_FAILED", function () {
        return L.e;
      }),
      n.d(t, "SET_REQUEST_LIMIT_REACHED", function () {
        return L.f;
      }),
      n.d(t, "NEW_REQUEST", function () {
        return L.b;
      }),
      n.d(t, "NO_DATA_FOUND", function () {
        return L.c;
      }),
      n.d(t, "SET_LOGIN_STATUS", function () {
        return L.d;
      }),
      n.d(t, "setSEMrushNewRequest", function () {
        return L.j;
      }),
      n.d(t, "setSEMrushRequestSucceeded", function () {
        return L.m;
      }),
      n.d(t, "setSEMrushRequestFailed", function () {
        return L.l;
      }),
      n.d(t, "setSEMrushSetRequestLimitReached", function () {
        return L.n;
      }),
      n.d(t, "setSEMrushChangeCountry", function () {
        return L.h;
      }),
      n.d(t, "setSEMrushNoResultsFound", function () {
        return L.k;
      }),
      n.d(t, "setSEMrushLoginStatus", function () {
        return L.i;
      }),
      n.d(t, "SET_SETTINGS", function () {
        return F.b;
      }),
      n.d(t, "SET_CONTENT_IMAGE", function () {
        return F.a;
      }),
      n.d(t, "setSettings", function () {
        return F.d;
      }),
      n.d(t, "setContentImage", function () {
        return F.c;
      }),
      n.d(t, "SET_SHOPPING_DATA", function () {
        return q.a;
      }),
      n.d(t, "setShoppingData", function () {
        return q.b;
      }),
      n.d(t, "SWITCH_MODE", function () {
        return B.e;
      }),
      n.d(t, "UPDATE_DATA", function () {
        return B.f;
      }),
      n.d(t, "UPDATE_REPLACEMENT_VARIABLE", function () {
        return B.g;
      }),
      n.d(t, "HIDE_REPLACEMENT_VARIABLES", function () {
        return B.a;
      }),
      n.d(t, "REMOVE_REPLACEMENT_VARIABLE", function () {
        return B.d;
      }),
      n.d(t, "REFRESH", function () {
        return B.c;
      }),
      n.d(t, "UPDATE_WORDS_TO_HIGHLIGHT", function () {
        return B.h;
      }),
      n.d(t, "LOAD_SNIPPET_EDITOR_DATA", function () {
        return B.b;
      }),
      n.d(t, "switchMode", function () {
        return B.l;
      }),
      n.d(t, "updateData", function () {
        return B.m;
      }),
      n.d(t, "updateReplacementVariable", function () {
        return B.n;
      }),
      n.d(t, "updateWordsToHighlight", function () {
        return B.o;
      }),
      n.d(t, "removeReplacementVariable", function () {
        return B.k;
      }),
      n.d(t, "refreshSnippetEditor", function () {
        return B.j;
      }),
      n.d(t, "hideReplacementVariables", function () {
        return B.i;
      }),
      n.d(t, "SET_TWITTER_TITLE", function () {
        return U.e;
      }),
      n.d(t, "SET_TWITTER_DESCRIPTION", function () {
        return U.c;
      }),
      n.d(t, "SET_TWITTER_IMAGE", function () {
        return U.d;
      }),
      n.d(t, "CLEAR_TWITTER_IMAGE", function () {
        return U.a;
      }),
      n.d(t, "LOAD_TWITTER_PREVIEW", function () {
        return U.b;
      }),
      n.d(t, "setTwitterPreviewTitle", function () {
        return U.j;
      }),
      n.d(t, "setTwitterPreviewDescription", function () {
        return U.h;
      }),
      n.d(t, "setTwitterPreviewImage", function () {
        return U.i;
      }),
      n.d(t, "clearTwitterPreviewImage", function () {
        return U.f;
      }),
      n.d(t, "loadTwitterPreviewData", function () {
        return U.g;
      }),
      n.d(t, "SET_FACEBOOK_TITLE", function () {
        return K.e;
      }),
      n.d(t, "SET_FACEBOOK_DESCRIPTION", function () {
        return K.c;
      }),
      n.d(t, "SET_FACEBOOK_IMAGE", function () {
        return K.d;
      }),
      n.d(t, "CLEAR_FACEBOOK_IMAGE", function () {
        return K.a;
      }),
      n.d(t, "LOAD_FACEBOOK_PREVIEW", function () {
        return K.b;
      }),
      n.d(t, "setFacebookPreviewTitle", function () {
        return K.j;
      }),
      n.d(t, "setFacebookPreviewDescription", function () {
        return K.h;
      }),
      n.d(t, "setFacebookPreviewImage", function () {
        return K.i;
      }),
      n.d(t, "clearFacebookPreviewImage", function () {
        return K.f;
      }),
      n.d(t, "loadFacebookPreviewData", function () {
        return K.g;
      }),
      n.d(t, "SET_WARNING_MESSAGE", function () {
        return V.a;
      }),
      n.d(t, "setWarningMessage", function () {
        return V.b;
      }),
      n.d(t, "setOverallReadabilityScore", function () {
        return H;
      }),
      n.d(t, "setOverallSeoScore", function () {
        return Y;
      }),
      n.d(t, "setReadabilityResults", function () {
        return r.setReadabilityResults;
      }),
      n.d(t, "setSeoResultsForKeyword", function () {
        return r.setSeoResultsForKeyword;
      });
    var r = n(22),
      o = n(30),
      a = n(75),
      i = n(44),
      s = "SNIPPET_EDITOR_UPDATE_ANALYSIS_DATA",
      c = "RUN_ANALYSIS";
    function u(e) {
      return { type: s, data: e };
    }
    function l() {
      return { type: c, timestamp: Date.now() };
    }
    var p = n(60),
      d = "SET_EDITOR_DATA_CONTENT",
      f = "SET_EDITOR_DATA_TITLE",
      m = "SET_EDITOR_DATA_EXCERPT",
      g = "SET_EDITOR_DATA_IMAGE_URL";
    function b(e) {
      return { type: d, content: e };
    }
    function y(e) {
      return { type: f, title: e };
    }
    function h(e) {
      return { type: m, excerpt: e };
    }
    function O(e) {
      return { type: g, imageUrl: e };
    }
    var w = "OPEN_MODAL",
      v = "CLOSE_MODAL";
    function j(e) {
      return { type: w, modalKey: e };
    }
    function E() {
      return { type: v };
    }
    var _ = n(68),
      T = n(61),
      S = n(45),
      R = n(76),
      k = n(70),
      P = n(77),
      D = n(57),
      x = "MODAL_DISMISS",
      A = "MODAL_OPEN",
      C = "MODAL_OPEN_NO_KEYPHRASE";
    function I() {
      return { type: x };
    }
    function M(e) {
      return { type: A, location: e };
    }
    function N() {
      return { type: C };
    }
    var L = n(41),
      F = n(43),
      q = n(78),
      B = n(16),
      U = n(49),
      K = n(50),
      V = n(79),
      H = function (e) {
        return (
          (o.a.readabilityScore = e), Object(r.setOverallReadabilityScore)(e)
        );
      },
      Y = function (e, t) {
        return (o.a.seoScore = e), Object(r.setOverallSeoScore)(e, t);
      };
  },
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
  function (e, t, n) {
    "use strict";
    var r = n(2),
      o = {
        source: "wpseoScriptData.analysis.plugins.replaceVars",
        scope: [],
        aliases: [],
      },
      a = function (e, t, n) {
        (this.placeholder = e),
          (this.replacement = t),
          (this.options = Object(r.defaults)(n, o));
      };
    (a.prototype.getPlaceholder = function (e) {
      return (e = e || !1) && this.hasAlias()
        ? this.placeholder + "|" + this.getAliases().join("|")
        : this.placeholder;
    }),
      (a.prototype.setSource = function (e) {
        this.options.source = e;
      }),
      (a.prototype.hasScope = function () {
        return !Object(r.isEmpty)(this.options.scope);
      }),
      (a.prototype.addScope = function (e) {
        this.hasScope() || (this.options.scope = []),
          this.options.scope.push(e);
      }),
      (a.prototype.inScope = function (e) {
        return (
          !this.hasScope() || Object(r.indexOf)(this.options.scope, e) > -1
        );
      }),
      (a.prototype.hasAlias = function () {
        return !Object(r.isEmpty)(this.options.aliases);
      }),
      (a.prototype.addAlias = function (e) {
        this.hasAlias() || (this.options.aliases = []),
          this.options.aliases.push(e);
      }),
      (a.prototype.getAliases = function () {
        return this.options.aliases;
      }),
      (t.a = a);
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "LocationContext", function () {
        return o;
      }),
      n.d(t, "LocationProvider", function () {
        return a;
      }),
      n.d(t, "LocationConsumer", function () {
        return i;
      });
    var r = n(0),
      o = Object(r.createContext)("location"),
      a = o.Provider,
      i = o.Consumer;
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    });
    var r = n(5),
      o = n.n(r),
      a = n(7),
      i = n.n(a),
      s = (function () {
        function e() {
          o()(this, e);
        }
        return (
          i()(e, null, [
            {
              key: "keyphraseElement",
              get: function () {
                return document.getElementById(
                  window.wpseoScriptData.isPost
                    ? "yoast_wpseo_focuskw"
                    : "hidden_wpseo_focuskw"
                );
              },
            },
            {
              key: "isCornerstoneElement",
              get: function () {
                return document.getElementById(
                  window.wpseoScriptData.isPost
                    ? "yoast_wpseo_is_cornerstone"
                    : "hidden_wpseo_is_cornerstone"
                );
              },
            },
            {
              key: "seoScoreElement",
              get: function () {
                return document.getElementById("yoast_wpseo_linkdex");
              },
            },
            {
              key: "readabilityScoreElement",
              get: function () {
                return document.getElementById("yoast_wpseo_content_score");
              },
            },
            {
              key: "keyphrase",
              get: function () {
                return e.keyphraseElement.value;
              },
              set: function (t) {
                e.keyphraseElement.value = t;
              },
            },
            {
              key: "isCornerstone",
              get: function () {
                return "1" === e.isCornerstoneElement.value;
              },
              set: function (t) {
                e.isCornerstoneElement.value = t ? "1" : "0";
              },
            },
            {
              key: "seoScore",
              get: function () {
                return e.seoScoreElement.value;
              },
              set: function (t) {
                e.seoScoreElement.value = t;
              },
            },
            {
              key: "readabilityScore",
              get: function () {
                return e.readabilityScoreElement.value;
              },
              set: function (t) {
                e.readabilityScoreElement.value = t;
              },
            },
          ]),
          e
        );
      })();
  },
  function (e, t, n) {
    var r = n(87),
      o = n(88),
      a = n(89);
    e.exports = function (e) {
      return r(e) || o(e) || a();
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = n(1),
      a = n.n(o),
      i = function (e) {
        var t = e.children;
        return Object(r.createElement)("div", null, t);
      };
    (i.propTypes = {
      renderPriority: a.a.number.isRequired,
      children: a.a.node.isRequired,
    }),
      (t.a = i);
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    });
    var r = n(5),
      o = n.n(r),
      a = n(7),
      i = n.n(a),
      s = (function () {
        function e() {
          o()(this, e);
        }
        return (
          i()(e, null, [
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
        return s;
      }),
      n.d(t, "default", function () {
        return c;
      });
    var r = n(23),
      o = n(25);
    function a(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = e.getIdentifier(),
        o = {
          score: e.score,
          rating: r.interpreters.scoreToRating(e.score),
          hasMarks: e.hasMarks(),
          marker: e.getMarker(),
          id: n,
          text: e.text,
          markerId: t.length > 0 ? "".concat(t, ":").concat(n) : n,
        };
      return "ok" === o.rating && (o.rating = "OK"), o;
    }
    function i(e, t) {
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
    function s(e) {
      var t = { icon: "seo-score-none", color: o.colors.$color_red };
      switch (e) {
        case "loading":
          t = {
            icon: "loading-spinner",
            color: o.colors.$color_green_medium_light,
          };
          break;
        case "good":
          t = { icon: "seo-score-good", color: o.colors.$color_green_medium };
          break;
        case "ok":
          t = { icon: "seo-score-ok", color: o.colors.$color_ok };
          break;
        case "bad":
          t = { icon: "seo-score-bad", color: o.colors.$color_red };
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
        var o = e[r];
        if (o.text) {
          var s = a(o, t);
          n = i(s, n);
        }
      }
      return n;
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    });
    var r = n(0),
      o = n(1),
      a = n.n(o);
    function i(e) {
      var t = e.target,
        n = e.children,
        o = t;
      return (
        "string" == typeof t && (o = document.getElementById(t)),
        o ? Object(r.createPortal)(n, o) : null
      );
    }
    i.propTypes = {
      target: a.a.oneOfType([a.a.string, a.a.object]).isRequired,
      children: a.a.node.isRequired,
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
      o = s(n(17)),
      a = s(n(130)),
      i = s(n(133));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var c = void 0;
    t.default = function (e) {
      var t = e.mixedString,
        n = e.components,
        s = e.throwErrors;
      if (((c = t), !n)) return t;
      if ("object" !== (void 0 === n ? "undefined" : r(n))) {
        if (s)
          throw new Error(
            "Interpolation Error: unable to process `" +
              t +
              "` because components is not an object"
          );
        return t;
      }
      var u = (0, i.default)(t);
      try {
        return (function e(t, n) {
          var i,
            s,
            u,
            l,
            p,
            d,
            f,
            m,
            g = [],
            b = {};
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
                (i = n[p.value]), (u = d);
                break;
              }
              g.push(n[p.value]);
            } else g.push(p.value);
          return (
            i &&
              ((l = (function (e, t) {
                var n,
                  r,
                  o = t[e],
                  a = 0;
                for (r = e + 1; r < t.length; r++)
                  if ((n = t[r]).value === o.value) {
                    if ("componentOpen" === n.type) {
                      a++;
                      continue;
                    }
                    if ("componentClose" === n.type) {
                      if (0 === a) return r;
                      a--;
                    }
                  }
                throw new Error(
                  "Missing closing component token `" + o.value + "`"
                );
              })(u, t)),
              (f = e(t.slice(u + 1, l), n)),
              (s = o.default.cloneElement(i, {}, f)),
              g.push(s),
              l < t.length - 1 &&
                ((m = e(t.slice(l + 1), n)), (g = g.concat(m)))),
            1 === g.length
              ? g[0]
              : (g.forEach(function (e, t) {
                  e && (b["interpolation-child-" + t] = e);
                }),
                (0, a.default)(b))
          );
        })(u, n);
      } catch (e) {
        if (s)
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
  ,
  function (e, t, n) {
    var r = n(99),
      o = n(100),
      a = n(101);
    e.exports = function (e, t) {
      return r(e) || o(e, t) || a();
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "nonReplaceVars", function () {
        return f;
      }),
      n.d(t, "fillReplacementVariables", function () {
        return m;
      }),
      n.d(t, "handlePrefixes", function () {
        return g;
      }),
      n.d(t, "createLabelFromName", function () {
        return b;
      }),
      n.d(t, "pushNewReplaceVar", function () {
        return y;
      }),
      n.d(t, "replaceSpaces", function () {
        return h;
      }),
      n.d(t, "prepareCustomFieldForDispatch", function () {
        return O;
      }),
      n.d(t, "prepareCustomTaxonomyForDispatch", function () {
        return w;
      }),
      n.d(t, "mapCustomTaxonomies", function () {
        return v;
      }),
      n.d(t, "mapCustomFields", function () {
        return j;
      }),
      n.d(t, "excerptFromContent", function () {
        return E;
      }),
      n.d(t, "applyReplaceUsingPlugin", function () {
        return _;
      });
    var r = n(10),
      o = n.n(r),
      a = n(2),
      i = n(80),
      s = n(16);
    function c(e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }
    var u = n(48);
    function l(e, t) {
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
          ? l(Object(n), !0).forEach(function (t) {
              o()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : l(Object(n)).forEach(function (t) {
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
      f = ["slug", "content", "contentImage", "snippetPreviewImageURL"];
    function m(e, t) {
      Object(a.forEach)(e, function (e, n) {
        f.includes(n) || t.dispatch(Object(s.n)(n, e));
      });
    }
    function g(e) {
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
    function b(e) {
      return c((e = g(e)));
    }
    function y(e, t) {
      return (
        e.push({ name: t.name, label: t.label || b(t.name), value: t.value }), e
      );
    }
    function h(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "_";
      return e.replace(/\s/g, t);
    }
    function O(e) {
      return { name: "cf_" + h(e), label: c(e + " (custom field)") };
    }
    function w(e) {
      var t = h(e);
      return {
        name: "ct_" + t,
        label: c(e + " (custom taxonomy)"),
        descriptionName: "ct_desc_" + t,
        descriptionLabel: c(e + " description (custom taxonomy)"),
      };
    }
    function v(e, t) {
      return e.custom_taxonomies
        ? (Object(a.forEach)(e.custom_taxonomies, function (e, n) {
            var r = w(n),
              o = r.name,
              a = r.label,
              i = r.descriptionName,
              c = r.descriptionLabel;
            t.dispatch(Object(s.n)(o, e.name, a)),
              t.dispatch(Object(s.n)(i, e.description, c));
          }),
          Object(a.omit)(p({}, e), "custom_taxonomies"))
        : e;
    }
    function j(e, t) {
      return e.custom_fields
        ? (Object(a.forEach)(e.custom_fields, function (e, n) {
            var r = O(n),
              o = r.name,
              a = r.label;
            t.dispatch(Object(s.n)(o, e, a));
          }),
          Object(a.omit)(p({}, e), "custom_fields"))
        : e;
    }
    function E(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 156;
      return (
        (e = (e = Object(i.stripTags)(e)).trim()).length <= t ||
          ((e = e.substring(0, t)),
          Object(u.isFeatureEnabled)("JAPANESE_SUPPORT")
            ? /\s/.test(e) && (e = e.substring(0, e.lastIndexOf(" ")))
            : (e = e.substring(0, e.lastIndexOf(" ")))),
        e
      );
    }
    var _ = function (e) {
      var t = Object(a.get)(window, ["YoastSEO", "app", "pluggable"], !1);
      if (
        !t ||
        !Object(a.get)(window, ["YoastSEO", "app", "pluggable", "loaded"], !1)
      )
        return (function (e) {
          var t = Object(a.get)(
            window,
            ["YoastSEO", "wp", "replaceVarsPlugin", "replaceVariables"],
            a.identity
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
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "g", function () {
        return o;
      }),
      n.d(t, "e", function () {
        return a;
      }),
      n.d(t, "f", function () {
        return i;
      }),
      n.d(t, "b", function () {
        return s;
      }),
      n.d(t, "c", function () {
        return c;
      }),
      n.d(t, "d", function () {
        return u;
      }),
      n.d(t, "j", function () {
        return l;
      }),
      n.d(t, "m", function () {
        return p;
      }),
      n.d(t, "l", function () {
        return d;
      }),
      n.d(t, "n", function () {
        return f;
      }),
      n.d(t, "h", function () {
        return m;
      }),
      n.d(t, "k", function () {
        return g;
      }),
      n.d(t, "i", function () {
        return b;
      });
    var r = "CHANGE_COUNTRY",
      o = "SET_REQUEST_SUCCEEDED",
      a = "SET_REQUEST_FAILED",
      i = "SET_LIMIT_REACHED",
      s = "NEW_REQUEST",
      c = "NO_DATA_FOUND",
      u = "SET_LOGIN_STATUS";
    function l(e, t) {
      return { type: s, countryCode: e, keyphrase: t };
    }
    function p(e) {
      return { type: o, response: e };
    }
    function d(e) {
      return { type: a, response: e };
    }
    function f() {
      return { type: i };
    }
    function m(e) {
      return { type: r, countryCode: e };
    }
    function g() {
      return { type: c };
    }
    function b(e) {
      return { type: u, loginStatus: e };
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    });
    var r = n(3),
      o = n(23),
      a = n(2);
    function i(e) {
      return (
        Object(a.isNil)(e) || (e /= 10),
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
        })(o.interpreters.scoreToRating(e))
      );
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return r;
    }),
      n.d(t, "a", function () {
        return o;
      }),
      n.d(t, "d", function () {
        return a;
      }),
      n.d(t, "c", function () {
        return i;
      });
    var r = "SET_SETTINGS",
      o = "SET_CONTENT_IMAGE",
      a = function (e) {
        return { type: r, settings: e };
      },
      i = function (e) {
        return { type: o, src: e };
      };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "f", function () {
      return c;
    }),
      n.d(t, "e", function () {
        return u;
      }),
      n.d(t, "b", function () {
        return l;
      }),
      n.d(t, "c", function () {
        return p;
      }),
      n.d(t, "d", function () {
        return d;
      }),
      n.d(t, "a", function () {
        return f;
      }),
      n.d(t, "l", function () {
        return m;
      }),
      n.d(t, "k", function () {
        return g;
      }),
      n.d(t, "h", function () {
        return b;
      }),
      n.d(t, "i", function () {
        return y;
      }),
      n.d(t, "j", function () {
        return h;
      }),
      n.d(t, "g", function () {
        return O;
      });
    var r = n(5),
      o = n.n(r),
      a = n(7),
      i = n.n(a),
      s = (function () {
        function e() {
          o()(this, e);
        }
        return (
          i()(e, null, [
            {
              key: "noIndexElement",
              get: function () {
                return document.getElementById(
                  window.wpseoScriptData.isPost
                    ? "yoast_wpseo_meta-robots-noindex"
                    : "hidden_wpseo_noindex"
                );
              },
            },
            {
              key: "noFollowElement",
              get: function () {
                return document.getElementById(
                  "yoast_wpseo_meta-robots-nofollow"
                );
              },
            },
            {
              key: "advancedElement",
              get: function () {
                return document.getElementById("yoast_wpseo_meta-robots-adv");
              },
            },
            {
              key: "breadcrumbsTitleElement",
              get: function () {
                return document.getElementById(
                  window.wpseoScriptData.isPost
                    ? "yoast_wpseo_bctitle"
                    : "hidden_wpseo_bctitle"
                );
              },
            },
            {
              key: "canonicalElement",
              get: function () {
                return document.getElementById(
                  window.wpseoScriptData.isPost
                    ? "yoast_wpseo_canonical"
                    : "hidden_wpseo_canonical"
                );
              },
            },
            {
              key: "noIndex",
              get: function () {
                return (e.noIndexElement && e.noIndexElement.value) || "";
              },
              set: function (t) {
                e.noIndexElement.value = t;
              },
            },
            {
              key: "noFollow",
              get: function () {
                return (e.noFollowElement && e.noFollowElement.value) || "";
              },
              set: function (t) {
                e.noFollowElement.value = t;
              },
            },
            {
              key: "advanced",
              get: function () {
                return (e.advancedElement && e.advancedElement.value) || "";
              },
              set: function (t) {
                e.advancedElement.value = t;
              },
            },
            {
              key: "breadcrumbsTitle",
              get: function () {
                return (
                  (e.breadcrumbsTitleElement &&
                    e.breadcrumbsTitleElement.value) ||
                  ""
                );
              },
              set: function (t) {
                e.breadcrumbsTitleElement.value = t;
              },
            },
            {
              key: "canonical",
              get: function () {
                return (e.canonicalElement && e.canonicalElement.value) || "";
              },
              set: function (t) {
                e.canonicalElement.value = t;
              },
            },
          ]),
          e
        );
      })(),
      c = "SET_NO_INDEX",
      u = "SET_NO_FOLLOW",
      l = "SET_ADVANCED",
      p = "SET_BREADCRUMBS_TITLE",
      d = "SET_CANONICAL_URL",
      f = "LOAD_ADVANCED_SETTINGS",
      m = function (e) {
        return (s.noIndex = e), { type: c, value: e };
      },
      g = function (e) {
        return (s.noFollow = e), { type: u, value: e };
      },
      b = function (e) {
        return (s.advanced = e.join(",")), { type: l, value: e };
      },
      y = function (e) {
        return (s.breadcrumbsTitle = e), { type: p, value: e };
      },
      h = function (e) {
        return (s.canonical = e), { type: d, value: e };
      },
      O = function () {
        return {
          type: f,
          settings: {
            noIndex: s.noIndex,
            noFollow: s.noFollow,
            advanced: s.advanced.split(","),
            breadcrumbsTitle: s.breadcrumbsTitle,
            canonical: s.canonical,
            isLoading: !1,
          },
        };
      };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return o;
      });
    var r = "WPSEO_SET_MARKER_STATUS",
      o = function (e) {
        return { type: r, marksButtonStatus: e };
      };
  },
  function (e, t, n) {
    var r = n(102);
    e.exports = function (e, t) {
      if (null == e) return {};
      var n,
        o,
        a = r(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (o = 0; o < i.length; o++)
          (n = i[o]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (a[n] = e[n]));
      }
      return a;
    };
  },
  function (e, t) {
    function n(e, t, n, r, o, a, i) {
      try {
        var s = e[a](i),
          c = s.value;
      } catch (e) {
        return void n(e);
      }
      s.done ? t(c) : Promise.resolve(c).then(r, o);
    }
    e.exports = function (e) {
      return function () {
        var t = this,
          r = arguments;
        return new Promise(function (o, a) {
          var i = e.apply(t, r);
          function s(e) {
            n(i, o, a, s, c, "next", e);
          }
          function c(e) {
            n(i, o, a, s, c, "throw", e);
          }
          s(void 0);
        });
      };
    };
  },
  function (e, t) {
    e.exports = window.yoast.featureFlag;
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "e", function () {
      return u;
    }),
      n.d(t, "c", function () {
        return l;
      }),
      n.d(t, "d", function () {
        return p;
      }),
      n.d(t, "a", function () {
        return d;
      }),
      n.d(t, "b", function () {
        return f;
      }),
      n.d(t, "j", function () {
        return m;
      }),
      n.d(t, "h", function () {
        return g;
      }),
      n.d(t, "i", function () {
        return b;
      }),
      n.d(t, "f", function () {
        return y;
      }),
      n.d(t, "g", function () {
        return h;
      });
    var r = n(4),
      o = n(5),
      a = n.n(o),
      i = n(7),
      s = n.n(i),
      c = (function () {
        function e() {
          a()(this, e);
        }
        return (
          s()(e, null, [
            {
              key: "titleElement",
              get: function () {
                return document.getElementById(
                  window.wpseoScriptData.isPost
                    ? "yoast_wpseo_twitter-title"
                    : "hidden_wpseo_twitter-title"
                );
              },
            },
            {
              key: "descriptionElement",
              get: function () {
                return document.getElementById(
                  window.wpseoScriptData.isPost
                    ? "yoast_wpseo_twitter-description"
                    : "hidden_wpseo_twitter-description"
                );
              },
            },
            {
              key: "imageIdElement",
              get: function () {
                return document.getElementById(
                  window.wpseoScriptData.isPost
                    ? "yoast_wpseo_twitter-image-id"
                    : "hidden_wpseo_twitter-image-id"
                );
              },
            },
            {
              key: "imageUrlElement",
              get: function () {
                return document.getElementById(
                  window.wpseoScriptData.isPost
                    ? "yoast_wpseo_twitter-image"
                    : "hidden_wpseo_twitter-image"
                );
              },
            },
            {
              key: "title",
              get: function () {
                return e.titleElement.value;
              },
              set: function (t) {
                e.titleElement.value = t;
              },
            },
            {
              key: "description",
              get: function () {
                return e.descriptionElement.value;
              },
              set: function (t) {
                e.descriptionElement.value = t;
              },
            },
            {
              key: "imageId",
              get: function () {
                return e.imageIdElement.value;
              },
              set: function (t) {
                e.imageIdElement.value = t;
              },
            },
            {
              key: "imageUrl",
              get: function () {
                return e.imageUrlElement.value;
              },
              set: function (t) {
                e.imageUrlElement.value = t;
              },
            },
          ]),
          e
        );
      })(),
      u = "SET_TWITTER_TITLE",
      l = "SET_TWITTER_DESCRIPTION",
      p = "SET_TWITTER_IMAGE",
      d = "CLEAR_TWITTER_IMAGE",
      f = "LOAD_TWITTER_PREVIEW",
      m = function (e) {
        return (
          e.trim() ===
          Object(r.select)("yoast-seo/editor").getSocialTitleTemplate().trim()
            ? (c.title = "")
            : (c.title = e),
          { type: u, title: e }
        );
      },
      g = function (e) {
        return (
          e.trim() ===
          Object(r.select)("yoast-seo/editor")
            .getSocialDescriptionTemplate()
            .trim()
            ? (c.description = "")
            : (c.description = e),
          { type: l, description: e }
        );
      },
      b = function (e) {
        return (c.imageId = e.id), (c.imageUrl = e.url), { type: p, image: e };
      },
      y = function () {
        return (c.imageId = ""), (c.imageUrl = ""), { type: d };
      },
      h = function () {
        var e = Object(r.select)("yoast-seo/editor"),
          t = e.getSocialDescriptionTemplate,
          n = e.getSocialTitleTemplate;
        return {
          type: f,
          imageId: c.imageId,
          imageUrl: c.imageUrl,
          description: c.description || t(),
          title: c.title || n(),
        };
      };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "e", function () {
      return u;
    }),
      n.d(t, "c", function () {
        return l;
      }),
      n.d(t, "d", function () {
        return p;
      }),
      n.d(t, "a", function () {
        return d;
      }),
      n.d(t, "b", function () {
        return f;
      }),
      n.d(t, "j", function () {
        return m;
      }),
      n.d(t, "h", function () {
        return g;
      }),
      n.d(t, "i", function () {
        return b;
      }),
      n.d(t, "f", function () {
        return y;
      }),
      n.d(t, "g", function () {
        return h;
      });
    var r = n(4),
      o = n(5),
      a = n.n(o),
      i = n(7),
      s = n.n(i),
      c = (function () {
        function e() {
          a()(this, e);
        }
        return (
          s()(e, null, [
            {
              key: "titleElement",
              get: function () {
                return document.getElementById(
                  window.wpseoScriptData.isPost
                    ? "yoast_wpseo_opengraph-title"
                    : "hidden_wpseo_opengraph-title"
                );
              },
            },
            {
              key: "descriptionElement",
              get: function () {
                return document.getElementById(
                  window.wpseoScriptData.isPost
                    ? "yoast_wpseo_opengraph-description"
                    : "hidden_wpseo_opengraph-description"
                );
              },
            },
            {
              key: "imageIdElement",
              get: function () {
                return document.getElementById(
                  window.wpseoScriptData.isPost
                    ? "yoast_wpseo_opengraph-image-id"
                    : "hidden_wpseo_opengraph-image-id"
                );
              },
            },
            {
              key: "imageUrlElement",
              get: function () {
                return document.getElementById(
                  window.wpseoScriptData.isPost
                    ? "yoast_wpseo_opengraph-image"
                    : "hidden_wpseo_opengraph-image"
                );
              },
            },
            {
              key: "title",
              get: function () {
                return e.titleElement.value;
              },
              set: function (t) {
                e.titleElement.value = t;
              },
            },
            {
              key: "description",
              get: function () {
                return e.descriptionElement.value;
              },
              set: function (t) {
                e.descriptionElement.value = t;
              },
            },
            {
              key: "imageId",
              get: function () {
                return e.imageIdElement.value;
              },
              set: function (t) {
                e.imageIdElement.value = t;
              },
            },
            {
              key: "imageUrl",
              get: function () {
                return e.imageUrlElement.value;
              },
              set: function (t) {
                e.imageUrlElement.value = t;
              },
            },
          ]),
          e
        );
      })(),
      u = "SET_FACEBOOK_TITLE",
      l = "SET_FACEBOOK_DESCRIPTION",
      p = "SET_FACEBOOK_IMAGE",
      d = "CLEAR_FACEBOOK_IMAGE",
      f = "LOAD_FACEBOOK_PREVIEW",
      m = function (e) {
        return (
          e.trim() ===
          Object(r.select)("yoast-seo/editor").getSocialTitleTemplate().trim()
            ? (c.title = "")
            : (c.title = e),
          { type: u, title: e }
        );
      },
      g = function (e) {
        return (
          e.trim() ===
          Object(r.select)("yoast-seo/editor")
            .getSocialDescriptionTemplate()
            .trim()
            ? (c.description = "")
            : (c.description = e),
          { type: l, description: e }
        );
      },
      b = function (e) {
        return (c.imageUrl = e.url), (c.imageId = e.id), { type: p, image: e };
      },
      y = function () {
        return (c.imageId = ""), (c.imageUrl = ""), { type: d };
      },
      h = function () {
        var e = Object(r.select)("yoast-seo/editor"),
          t = e.getSocialDescriptionTemplate,
          n = e.getSocialTitleTemplate;
        return {
          type: f,
          imageId: c.imageId,
          imageUrl: c.imageUrl,
          description: c.description || t(),
          title: c.title || n(),
        };
      };
  },
  function (e, t, n) {
    "use strict";
    var r = n(39),
      o = n.n(r),
      a = n(0),
      i = n(6),
      s = n(1),
      c = n.n(s),
      u = function (e) {
        var t = Object(a.useState)(!1),
          n = o()(t, 2),
          r = n[0],
          s = n[1],
          c = e.prefixIcon;
        return Object(a.createElement)(
          "div",
          {
            className: "yoast components-panel__body ".concat(
              r ? "is-opened" : ""
            ),
          },
          Object(a.createElement)(
            "h2",
            { className: "components-panel__body-title" },
            Object(a.createElement)(
              "button",
              {
                onClick: function () {
                  s(!r);
                },
                className: "components-button components-panel__body-toggle",
              },
              Object(a.createElement)(
                "span",
                {
                  className: "yoast-icon-span",
                  style: { fill: "".concat((c && c.color) || "") },
                },
                c &&
                  Object(a.createElement)(i.SvgIcon, {
                    icon: c.icon,
                    color: c.color,
                    size: c.size,
                  })
              ),
              Object(a.createElement)(
                "span",
                { className: "yoast-title-container" },
                Object(a.createElement)(
                  "div",
                  { className: "yoast-title" },
                  e.title
                ),
                Object(a.createElement)(
                  "div",
                  { className: "yoast-subtitle" },
                  e.subTitle
                )
              ),
              Object(a.createElement)("span", {
                className: "yoast-chevron",
                "aria-hidden": "true",
              })
            )
          ),
          r && e.children
        );
      };
    (t.a = u),
      (u.propTypes = {
        title: c.a.string.isRequired,
        children: c.a.oneOfType([c.a.node, c.a.arrayOf(c.a.node)]).isRequired,
        prefixIcon: c.a.object,
        subTitle: c.a.string,
      }),
      (u.defaultProps = { prefixIcon: null, subTitle: "" });
  },
  function (e, t, n) {
    "use strict";
    var r,
      o = n(27),
      a = n.n(o),
      i = n(15),
      s = n.n(i),
      c = n(0),
      u = n(6),
      l = n(12),
      p = n.n(l)()(u.Collapsible)(
        r ||
          (r = s()([
            '\n\th2 > button {\n\t\tpadding-left: 24px;\n\t\tpadding-top: 16px;\n\n\t\t&:hover {\n\t\t\tbackground-color: #f0f0f0;\n\t\t}\n\t}\n\n\tdiv[class^="collapsible_content"] {\n\t\tpadding: 24px 0;\n\t\tmargin: 0 24px;\n\t\tborder-top: 1px solid rgba(0,0,0,0.2);\n\t}\n\n',
          ]))
      );
    t.a = function (e) {
      return Object(c.createElement)(
        p,
        a()({ hasPadding: !0, hasSeparator: !0 }, e)
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
      o = n.n(r),
      a = n(46),
      i = n.n(a),
      s = n(0),
      c = n(1),
      u = n.n(c),
      l = n(18),
      p = "yoast yoast-gutenberg-modal",
      d = function (e) {
        var t = e.title,
          n = e.className,
          r = e.showYoastIcon,
          a = e.additionalClassName,
          c = i()(e, [
            "title",
            "className",
            "showYoastIcon",
            "additionalClassName",
          ]),
          u = r
            ? Object(s.createElement)("span", { className: "yoast-icon" })
            : null;
        return Object(s.createElement)(
          l.Modal,
          o()({ title: t, className: "".concat(n, " ").concat(a), icon: u }, c),
          e.children
        );
      };
    (d.propTypes = {
      title: u.a.string,
      className: u.a.string,
      showYoastIcon: u.a.bool,
      children: u.a.oneOfType([u.a.node, u.a.arrayOf(u.a.node)]),
      additionalClassName: u.a.string,
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
      o = n(15),
      a = n.n(o),
      i = n(25),
      s = n(9),
      c = n(12),
      u = n.n(c),
      l = Object(s.makeOutboundLink)(
        u.a.a(
          r ||
            (r = a()(
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
          i.colors.$color_help_text,
          i.colors.$color_snippet_focus,
          i.colors.$color_help_text
        )
      );
    t.a = l;
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    });
    var r = n(20),
      o = n(2);
    function a() {
      var e = Object(r.a)();
      return 1 === Object(o.get)(e, "keywordAnalysisActive", 0);
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "d", function () {
      return o;
    }),
      n.d(t, "c", function () {
        return a;
      }),
      n.d(t, "b", function () {
        return i;
      }),
      n.d(t, "a", function () {
        return s;
      }),
      n.d(t, "h", function () {
        return c;
      }),
      n.d(t, "g", function () {
        return u;
      }),
      n.d(t, "f", function () {
        return l;
      }),
      n.d(t, "e", function () {
        return p;
      });
    var r = n(33),
      o = "SET_PAGE_TYPE",
      a = "SET_ARTICLE_TYPE",
      i = "GET_SCHEMA_PAGE_DATA",
      s = "GET_SCHEMA_ARTICLE_DATA",
      c = function (e) {
        return (r.a.pageType = e), { type: o, pageType: e };
      },
      u = function (e) {
        return (r.a.articleType = e), { type: a, articleType: e };
      },
      l = function () {
        return {
          type: i,
          pageType: r.a.pageType,
          defaultPageType: r.a.defaultPageType,
        };
      },
      p = function () {
        return {
          type: s,
          articleType: r.a.articleType,
          defaultArticleType: r.a.defaultArticleType,
        };
      };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return l;
    });
    var r = n(10),
      o = n.n(r),
      a = n(19),
      i = n(0),
      s = n(29);
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
    function u(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? c(Object(n), !0).forEach(function (t) {
              o()(e, t, n[t]);
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
    function l() {
      return Object(a.createHigherOrderComponent)(function (e) {
        return Object(a.pure)(function (t) {
          var n = Object(i.useContext)(s.LocationContext);
          return Object(i.createElement)(e, u(u({}, t), {}, { location: n }));
        });
      }, "withLocation");
    }
  },
  function (e, t) {
    e.exports = window.yoast.replacementVariableEditor;
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    }),
      n.d(t, "c", function () {
        return a;
      }),
      n.d(t, "b", function () {
        return i;
      }),
      n.d(t, "d", function () {
        return s;
      }),
      n.d(t, "e", function () {
        return c;
      }),
      n.d(t, "f", function () {
        return u;
      });
    var r = n(30),
      o = "".concat("WPSEO_", "LOAD_CORNERSTONE_CONTENT"),
      a = "".concat("WPSEO_", "TOGGLE_CORNERSTONE_CONTENT"),
      i = "".concat("WPSEO_", "SET_CORNERSTONE_CONTENT"),
      s = function () {
        return { type: i, isCornerstone: r.a.isCornerstone };
      },
      c = function (e) {
        return (r.a.isCornerstone = e), { type: i, isCornerstone: e };
      },
      u = function () {
        return (r.a.isCornerstone = !r.a.isCornerstone), { type: a };
      };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    }),
      n.d(t, "b", function () {
        return a;
      }),
      n.d(t, "c", function () {
        return i;
      }),
      n.d(t, "d", function () {
        return s;
      });
    var r = n(30),
      o = "".concat("WPSEO_", "LOAD_FOCUS_KEYWORD"),
      a = "".concat("WPSEO_", "SET_FOCUS_KEYWORD"),
      i = function () {
        return { type: o, keyword: r.a.keyphrase };
      },
      s = function (e) {
        return (r.a.keyphrase = e), { type: a, keyword: e };
      };
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "setTextdomainL10n", function () {
        return a;
      }),
      n.d(t, "setYoastComponentsL10n", function () {
        return i;
      }),
      n.d(t, "setWordPressSeoL10n", function () {
        return s;
      });
    var r = n(3),
      o = n(2);
    function a(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "wpseoYoastJSL10n",
        n = Object(o.get)(window, [t, e, "locale_data", e], !1);
      !1 === n
        ? Object(r.setLocaleData)({ "": {} }, e)
        : Object(r.setLocaleData)(n, e);
    }
    function i() {
      a("yoast-components");
    }
    function s() {
      a("wordpress-seo");
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return S;
    });
    var r = n(27),
      o = n.n(r),
      a = n(46),
      i = n.n(a),
      s = n(10),
      c = n.n(s),
      u = n(5),
      l = n.n(u),
      p = n(7),
      d = n.n(p),
      f = n(11),
      m = n.n(f),
      g = n(13),
      b = n.n(g),
      y = n(14),
      h = n.n(y),
      O = n(8),
      w = n.n(O),
      v = n(0),
      j = n(1),
      E = n.n(j);
    function _(e, t) {
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
    function T(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? _(Object(n), !0).forEach(function (t) {
              c()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : _(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var S = E.a.shape({
      value: E.a.string.isRequired,
      onChange: E.a.func.isRequired,
    });
    t.a = function (e) {
      return function (t) {
        return (function (n) {
          b()(u, n);
          var r,
            a,
            s =
              ((r = u),
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
                  t = w()(r);
                if (a) {
                  var n = w()(this).constructor;
                  e = Reflect.construct(t, arguments, n);
                } else e = t.apply(this, arguments);
                return h()(this, e);
              });
          function u(t) {
            var n;
            l()(this, u), ((n = s.call(this, t)).elements = {});
            var r = {};
            return (
              (n.fields = e(t)),
              n.fields.forEach(function (e) {
                var t = e.name,
                  o = e.fieldId,
                  a = document.getElementById(o);
                a &&
                  ((n.elements[t] = a),
                  (r[t] = {
                    value: a.value,
                    onChange: n.onChange.bind(m()(n), t),
                  }));
              }),
              (n.state = r),
              n
            );
          }
          return (
            d()(
              u,
              [
                {
                  key: "onChange",
                  value: function (e, t) {
                    var n = this;
                    this.setState(
                      T(
                        T({}, this.state),
                        {},
                        c()({}, e, T(T({}, this.state[e]), {}, { value: t }))
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
                      r = i()(e, ["children"]);
                    return Object(v.createElement)(
                      t,
                      o()({}, r, this.state),
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
            u
          );
        })(v.Component);
      };
    };
  },
  function (e, t) {
    e.exports = window.wp.hooks;
  },
  function (e, t) {
    e.exports = window.wp.apiFetch;
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    });
    var r = n(20),
      o = n(2);
    function a() {
      var e = Object(r.a)();
      return 1 === Object(o.get)(e, "contentAnalysisActive", 0);
    }
  },
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return c;
    }),
      n.d(t, "a", function () {
        return u;
      }),
      n.d(t, "d", function () {
        return l;
      }),
      n.d(t, "c", function () {
        return p;
      });
    var r = n(5),
      o = n.n(r),
      a = n(7),
      i = n.n(a),
      s = (function () {
        function e() {
          o()(this, e);
        }
        return (
          i()(e, null, [
            {
              key: "estimatedReadingTimeElement",
              get: function () {
                return document.getElementById(
                  "yoast_wpseo_estimated-reading-time-minutes"
                );
              },
            },
            {
              key: "estimatedReadingTime",
              get: function () {
                return (
                  (e.estimatedReadingTimeElement &&
                    e.estimatedReadingTimeElement.value) ||
                  ""
                );
              },
              set: function (t) {
                e.estimatedReadingTimeElement.value = t;
              },
            },
          ]),
          e
        );
      })(),
      c = "SET_ESTIMATED_READING_TIME",
      u = "LOAD_ESTIMATED_READING_TIME";
    function l(e) {
      return (s.estimatedReadingTime = e), { type: c, estimatedReadingTime: e };
    }
    function p() {
      return { type: u, estimatedReadingTime: s.estimatedReadingTime };
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return p;
    }),
      n.d(t, "b", function () {
        return d;
      });
    var r,
      o,
      a = n(15),
      i = n.n(a),
      s = n(12),
      c = n.n(s),
      u = n(6),
      l = n(9),
      p = c.a.div(
        r ||
          (r = i()([
            "\n\tmin-width: 600px;\n\n\t@media screen and ( max-width: 680px ) {\n\t\tmin-width: 0;\n\t\twidth: 86vw;\n\t}\n",
          ]))
      ),
      d = c()(u.Icon)(
        o ||
          (o = i()([
            "\n\tfloat: ",
            ";\n\tmargin: ",
            ";\n\n\t&& {\n\t\twidth: 150px;\n\t\theight: 150px;\n\n\t\t@media screen and ( max-width: 680px ) {\n\t\t\twidth: 80px;\n\t\t\theight: 80px;\n\t\t}\n\t}\n",
          ])),
        Object(l.getDirectionalStyle)("right", "left"),
        Object(l.getDirectionalStyle)("0 0 16px 16px", "0 16px 16px 0")
      );
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    }),
      n.d(t, "b", function () {
        return s;
      }),
      n.d(t, "c", function () {
        return c;
      });
    var r = n(26),
      o = n.n(r),
      a = o.a.mark(c),
      i = "DISMISS_ALERT",
      s = "DISMISS_ALERT_SUCCESS";
    function c(e) {
      return o.a.wrap(function (t) {
        for (;;)
          switch ((t.prev = t.next)) {
            case 0:
              return (t.next = 2), { type: i, alertKey: e };
            case 2:
              return t.abrupt("return", { type: s, alertKey: e });
            case 3:
            case "end":
              return t.stop();
          }
      }, a);
    }
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "getNoIndex", function () {
        return o;
      }),
      n.d(t, "getNoFollow", function () {
        return a;
      }),
      n.d(t, "getAdvanced", function () {
        return i;
      }),
      n.d(t, "getBreadcrumbsTitle", function () {
        return s;
      }),
      n.d(t, "getCanonical", function () {
        return c;
      }),
      n.d(t, "getIsLoading", function () {
        return u;
      }),
      n.d(t, "getSeoTitle", function () {
        return Y;
      }),
      n.d(t, "getDescription", function () {
        return W;
      }),
      n.d(t, "getPermalink", function () {
        return G;
      }),
      n.d(t, "getAnalysisTimestamp", function () {
        return z;
      }),
      n.d(t, "getAnalysisData", function () {
        return $;
      }),
      n.d(t, "isCornerstoneContent", function () {
        return Q;
      }),
      n.d(t, "getEditorContext", function () {
        return p;
      }),
      n.d(t, "getPostOrPageString", function () {
        return d;
      }),
      n.d(t, "getIsBlockEditor", function () {
        return f;
      }),
      n.d(t, "getIsElementorEditor", function () {
        return m;
      }),
      n.d(t, "getIsTerm", function () {
        return g;
      }),
      n.d(t, "getEditorType", function () {
        return b;
      }),
      n.d(t, "getContentLocale", function () {
        return y;
      }),
      n.d(t, "getEditorDataContent", function () {
        return w;
      }),
      n.d(t, "getEditorDataTitle", function () {
        return v;
      }),
      n.d(t, "getEditorDataExcerpt", function () {
        return j;
      }),
      n.d(t, "getEditorDataExcerptWithFallback", function () {
        return E;
      }),
      n.d(t, "getEditorDataImageUrl", function () {
        return _;
      }),
      n.d(t, "getEditorDataImageFallback", function () {
        return T;
      }),
      n.d(t, "getIsModalOpen", function () {
        return Z;
      }),
      n.d(t, "getEstimatedReadingTime", function () {
        return X;
      }),
      n.d(t, "getFacebookTitle", function () {
        return J;
      }),
      n.d(t, "getFacebookDescription", function () {
        return ee;
      }),
      n.d(t, "getFacebookImageUrl", function () {
        return te;
      }),
      n.d(t, "getFacebookImageSrc", function () {
        return ne;
      }),
      n.d(t, "getFacebookWarnings", function () {
        return re;
      }),
      n.d(t, "getContentImage", function () {
        return oe;
      }),
      n.d(t, "getImageFallback", function () {
        return ae;
      }),
      n.d(t, "getSiteUrl", function () {
        return ie;
      }),
      n.d(t, "getSeoTitleTemplate", function () {
        return se;
      }),
      n.d(t, "getSeoTitleTemplateNoFallback", function () {
        return ce;
      }),
      n.d(t, "getSocialTitleTemplate", function () {
        return ue;
      }),
      n.d(t, "getSeoDescriptionTemplate", function () {
        return le;
      }),
      n.d(t, "getSocialDescriptionTemplate", function () {
        return pe;
      }),
      n.d(t, "getReplacedExcerpt", function () {
        return de;
      }),
      n.d(t, "getFocusKeyphrase", function () {
        return S;
      }),
      n.d(t, "getActiveMarker", function () {
        return fe;
      }),
      n.d(t, "getMarkerPauseStatus", function () {
        return me;
      }),
      n.d(t, "isMarkingAvailable", function () {
        return ge;
      }),
      n.d(t, "getMarksButtonStatus", function () {
        return be;
      }),
      n.d(t, "isAlertDismissed", function () {
        return ye;
      }),
      n.d(t, "getPreferences", function () {
        return he;
      }),
      n.d(t, "getIsKeywordAnalysisActive", function () {
        return Oe;
      }),
      n.d(t, "getPrimaryTaxonomyId", function () {
        return we;
      }),
      n.d(t, "getSeoResults", function () {
        return Te;
      }),
      n.d(t, "getResultsForKeyword", function () {
        return Se;
      }),
      n.d(t, "getReadabilityResults", function () {
        return Re;
      }),
      n.d(t, "getResultsForFocusKeyword", function () {
        return ke;
      }),
      n.d(t, "getResultById", function () {
        return Pe;
      }),
      n.d(t, "getMarkButtonStatus", function () {
        return De;
      }),
      n.d(t, "getDefaultPageType", function () {
        return xe;
      }),
      n.d(t, "getPageType", function () {
        return Ae;
      }),
      n.d(t, "getDefaultArticleType", function () {
        return Ce;
      }),
      n.d(t, "getArticleType", function () {
        return Ie;
      }),
      n.d(t, "getSEMrushModalOpen", function () {
        return Me;
      }),
      n.d(t, "getSEMrushNoKeyphraseMessage", function () {
        return Ne;
      }),
      n.d(t, "getSEMrushIsRequestPending", function () {
        return Le;
      }),
      n.d(t, "getSEMrushRequestIsSuccess", function () {
        return Fe;
      }),
      n.d(t, "getSEMrushRequestResponse", function () {
        return qe;
      }),
      n.d(t, "getSEMrushRequestLimitReached", function () {
        return Be;
      }),
      n.d(t, "getSEMrushRequestKeyphrase", function () {
        return Ue;
      }),
      n.d(t, "getSEMrushSelectedCountry", function () {
        return Ke;
      }),
      n.d(t, "getSEMrushRequestHasData", function () {
        return Ve;
      }),
      n.d(t, "getSEMrushLoginStatus", function () {
        return He;
      }),
      n.d(t, "getAuthorName", function () {
        return R;
      }),
      n.d(t, "getSiteName", function () {
        return k;
      }),
      n.d(t, "getBaseUrlFromSettings", function () {
        return P;
      }),
      n.d(t, "getDateFromSettings", function () {
        return D;
      }),
      n.d(t, "getRecommendedReplaceVars", function () {
        return x;
      }),
      n.d(t, "getSiteIconUrlFromSettings", function () {
        return A;
      }),
      n.d(t, "getShoppingData", function () {
        return Ye;
      }),
      n.d(t, "getReplaceVars", function () {
        return C;
      }),
      n.d(t, "getSnippetEditorTemplates", function () {
        return I;
      }),
      n.d(t, "getSnippetEditorMode", function () {
        return M;
      }),
      n.d(t, "getSnippetEditorTitle", function () {
        return N;
      }),
      n.d(t, "getSnippetEditorTitleWithTemplate", function () {
        return L;
      }),
      n.d(t, "getSnippetEditorDescription", function () {
        return F;
      }),
      n.d(t, "getSnippetEditorDescriptionWithTemplate", function () {
        return q;
      }),
      n.d(t, "getSnippetEditorSlug", function () {
        return B;
      }),
      n.d(t, "getSnippetEditorData", function () {
        return U;
      }),
      n.d(t, "getSnippetEditorWordsToHighlight", function () {
        return K;
      }),
      n.d(t, "getSnippetEditorIsLoading", function () {
        return V;
      }),
      n.d(t, "getSnippetEditorPreviewImageUrl", function () {
        return H;
      }),
      n.d(t, "getTwitterTitle", function () {
        return We;
      }),
      n.d(t, "getTwitterDescription", function () {
        return Ge;
      }),
      n.d(t, "getTwitterImageUrl", function () {
        return ze;
      }),
      n.d(t, "getTwitterImageType", function () {
        return $e;
      }),
      n.d(t, "getTwitterImageSrc", function () {
        return Qe;
      }),
      n.d(t, "getTwitterWarnings", function () {
        return Ze;
      }),
      n.d(t, "getWarningMessage", function () {
        return Xe;
      });
    var r = n(2),
      o = function (e) {
        return Object(r.get)(e, "advancedSettings.noIndex", "");
      },
      a = function (e) {
        return Object(r.get)(e, "advancedSettings.noFollow", "");
      },
      i = function (e) {
        return Object(r.get)(e, "advancedSettings.advanced", "");
      },
      s = function (e) {
        return Object(r.get)(e, "advancedSettings.breadcrumbsTitle", "summary");
      },
      c = function (e) {
        return Object(r.get)(e, "advancedSettings.canonical", "");
      },
      u = function (e) {
        return Object(r.get)(e, "advancedSettings.isLoading", !0);
      },
      l = n(73);
    function p(e) {
      return e.editorContext;
    }
    function d(e) {
      return "Page" === Object(r.get)(e, "editorContext.postTypeNameSingular")
        ? "page"
        : "post";
    }
    function f(e) {
      return Object(r.get)(e, "editorContext.isBlockEditor", !1);
    }
    function m(e) {
      return Object(r.get)(e, "editorContext.isElementorEditor", !1);
    }
    function g(e) {
      return Object(r.get)(e, "editorContext.isTerm", !1);
    }
    function b(e) {
      return m(e) ? "elementorEditor" : f(e) ? "blockEditor" : "classicEditor";
    }
    function y(e) {
      return Object(r.get)(e, "editorContext.contentLocale", "en_US");
    }
    var h = n(64),
      O = n(40),
      w = function (e) {
        return Object(r.get)(e, "editorData.content", "");
      },
      v = function (e) {
        return Object(r.get)(e, "editorData.title", "");
      },
      j = function (e) {
        return Object(r.get)(e, "editorData.excerpt");
      },
      E = function (e) {
        var t = Object(r.get)(e, "editorData.excerpt", "");
        return (
          "" === t &&
            (t = Object(O.excerptFromContent)(
              Object(r.get)(e, "editorData.content", "")
            )),
          t
        );
      },
      _ = function (e) {
        return Object(r.get)(e, "editorData.imageUrl", "");
      },
      T = function (e) {
        var t = [
          { featuredOrFirstImage: Object(r.get)(e, "editorData.imageUrl", "") },
          {
            socialImage: Object(r.get)(
              window,
              "wpseoScriptData.metabox.social_image_template",
              ""
            ),
          },
          {
            siteWideImage:
              Object(r.get)(
                window.wpseoScriptData,
                "metabox.showSocial.facebook"
              ) &&
              Object(r.get)(e, "settings.socialPreviews.sitewideImage", ""),
          },
        ];
        Object(h.applyFilters)("yoast.socials.imageFallback", t);
        for (var n = 0, o = t; n < o.length; n++) {
          var a = o[n];
          if (Object.values(a)[0]) return Object.values(a)[0];
        }
        return "";
      };
    function S(e) {
      return e.focusKeyword;
    }
    var R = function (e) {
        return Object(r.get)(e, "settings.socialPreviews.authorName", "");
      },
      k = function (e) {
        return Object(r.get)(e, "settings.socialPreviews.siteName", "");
      },
      P = function (e) {
        return Object(r.get)(e, "settings.snippetEditor.baseUrl", "");
      },
      D = function (e) {
        return Object(r.get)(e, "settings.snippetEditor.date", "");
      },
      x = function (e) {
        return Object(r.get)(
          e,
          "settings.snippetEditor.recommendedReplacementVariables",
          []
        );
      },
      A = function (e) {
        return Object(r.get)(e, "settings.snippetEditor.siteIconUrl", "");
      },
      C = function (e) {
        return Object(r.get)(e, "snippetEditor.replacementVariables", []);
      },
      I = function (e) {
        return Object(r.get)(e, "snippetEditor.templates", {
          title: "",
          description: "",
        });
      },
      M = function (e) {
        return Object(r.get)(e, "snippetEditor.mode", "mobile");
      },
      N = function (e) {
        return Object(r.get)(e, "snippetEditor.data.title", "");
      },
      L = function (e) {
        return Object(r.get)(e, "snippetEditor.data.title", "") || I(e).title;
      },
      F = function (e) {
        return Object(r.get)(e, "snippetEditor.data.description", "");
      },
      q = function (e) {
        return F(e) || I(e).description;
      },
      B = function (e) {
        return Object(r.get)(e, "snippetEditor.data.slug", "");
      },
      U = function (e) {
        return Object(r.get)(e, "snippetEditor.data", {
          title: N(e),
          description: F(e),
          slug: B(e),
        });
      },
      K = function (e) {
        return Object(r.get)(e, "snippetEditor.wordsToHighlight", []);
      },
      V = function (e) {
        return Object(r.get)(e, "snippetEditor.isLoading", !0);
      },
      H = function (e) {
        return Object(r.get)(
          e,
          "snippetEditor.data.snippetPreviewImageURL",
          ""
        );
      },
      Y = function (e) {
        return Object(r.get)(e, "analysisData.snippet.title", "");
      },
      W = function (e) {
        return Object(r.get)(e, "analysisData.snippet.description", "");
      },
      G = function (e) {
        return Object(r.get)(e, "analysisData.snippet.url", "");
      },
      z = function (e) {
        return parseInt(Object(r.get)(e, "analysisData.timestamp", 0), 10);
      },
      $ = function (e) {
        var t = Y(e) || N(e),
          n = B(e);
        return {
          text: w(e),
          title: t,
          keyword: S(e),
          description: W(e) || F(e),
          locale: y(e),
          titleWidth: Object(l.a)(t),
          url: n,
          permalink: P(e) + n,
        };
      };
    function Q(e) {
      return e.isCornerstone;
    }
    var Z = function (e, t) {
      return Object(r.get)(e, "editorModals.openedModal", "") === t;
    };
    function X(e) {
      return (
        Object(r.get)(e, "estimatedReadingTime.estimatedReadingTime", 0) || 0
      );
    }
    var J = function (e) {
        return Object(r.get)(e, "facebookEditor.title", "");
      },
      ee = function (e) {
        return Object(r.get)(e, "facebookEditor.description", "");
      },
      te = function (e) {
        return Object(r.get)(e, "facebookEditor.image.url");
      },
      ne = function (e) {
        return Object(r.get)(e, "facebookEditor.image.src", "");
      },
      re = function (e) {
        return Object(r.get)(e, "facebookEditor.warnings", []);
      },
      oe = function (e) {
        return Object(r.get)(e, "socialPreviews.contentImage", "");
      },
      ae = function (e) {
        var t = [
          {
            featuredImage: Object(r.get)(
              e,
              "snippetEditor.data.snippetPreviewImageURL",
              ""
            ),
          },
          {
            contentImage: Object(r.get)(
              e,
              "settings.socialPreviews.contentImage",
              ""
            ),
          },
          {
            socialImage: Object(r.get)(
              window,
              "wpseoScriptData.metabox.social_image_template",
              ""
            ),
          },
          {
            siteWideImage:
              Object(r.get)(
                window,
                "wpseoScriptData.metabox.showSocial.facebook"
              ) &&
              Object(r.get)(e, "settings.socialPreviews.sitewideImage", ""),
          },
        ];
        Object(h.applyFilters)("yoast.socials.imageFallback", t);
        for (var n = 0, o = t; n < o.length; n++) {
          var a = o[n];
          if (Object.values(a)[0]) return Object.values(a)[0];
        }
        return "";
      },
      ie = function () {
        var e = Object(r.get)(window, "wpseoScriptData.metabox.base_url", "");
        return "" === e ? "" : (e = new URL(e)).host;
      },
      se = function () {
        return Object(r.get)(
          window,
          "wpseoScriptData.metabox.title_template",
          ""
        );
      },
      ce = function () {
        return Object(r.get)(
          window,
          "wpseoScriptData.metabox.title_template_no_fallback",
          ""
        );
      },
      ue = function () {
        return Object(r.get)(
          window,
          "wpseoScriptData.metabox.social_title_template",
          ""
        );
      },
      le = function () {
        return Object(r.get)(
          window,
          "wpseoScriptData.metabox.metadesc_template",
          ""
        );
      },
      pe = function () {
        return Object(r.get)(
          window,
          "wpseoScriptData.metabox.social_description_template",
          ""
        );
      },
      de = function (e) {
        var t = "";
        return (
          Object(r.get)(e, "snippetEditor.replacementVariables", []).forEach(
            function (e) {
              "excerpt" === e.name && (t = e.value);
            }
          ),
          t
        );
      };
    function fe(e) {
      return e.activeMarker;
    }
    function me(e) {
      return e.isMarkerPaused;
    }
    function ge(e) {
      return "enabled" === e.marksButtonStatus;
    }
    function be(e) {
      return e.marksButtonStatus;
    }
    function ye(e, t) {
      return !0 === e.dismissedAlerts[t];
    }
    function he(e) {
      return e.preferences;
    }
    function Oe(e) {
      return Object(r.get)(e, "preferences.isKeywordAnalysisActive", !1);
    }
    function we(e, t) {
      return e.primaryTaxonomies[t];
    }
    var ve = n(31),
      je = n.n(ve),
      Ee = {},
      _e = [];
    function Te(e) {
      var t = Object(r.get)(e, "analysis.seo", Ee);
      return Object(r.isEmpty)(t) ? { results: _e, overallScore: null } : t;
    }
    function Se(e, t) {
      var n = Te(e);
      return Object(r.get)(n, t, Ee);
    }
    function Re(e) {
      var t = Object(r.get)(e, "analysis.readability", {});
      return Object(r.isEmpty)(t) ? { results: _e, overallScore: null } : t;
    }
    function ke(e) {
      return Se(e, e.focusKeyword);
    }
    function Pe(e, t) {
      var n = ke(e).results || _e,
        r = Re(e).results || _e;
      return [].concat(je()(n), je()(r)).find(function (e) {
        return e._identifier === t;
      });
    }
    function De(e) {
      return e.marksButtonStatus;
    }
    var xe = function (e) {
        return Object(r.get)(e, "schemaTab.defaultPageType", "");
      },
      Ae = function (e) {
        return Object(r.get)(e, "schemaTab.pageType", "");
      },
      Ce = function (e) {
        return Object(r.get)(e, "schemaTab.defaultArticleType", "");
      },
      Ie = function (e) {
        return Object(r.get)(e, "schemaTab.articleType", "");
      };
    function Me(e) {
      return e.SEMrushModal.whichModalOpen;
    }
    function Ne(e) {
      return e.SEMrushModal.displayNoKeyphraseMessage;
    }
    function Le(e) {
      return e.SEMrushRequest.isRequestPending;
    }
    function Fe(e) {
      return e.SEMrushRequest.isSuccess;
    }
    function qe(e) {
      return e.SEMrushRequest.response;
    }
    function Be(e) {
      return e.SEMrushRequest.limitReached;
    }
    function Ue(e) {
      return e.SEMrushRequest.keyphrase;
    }
    function Ke(e) {
      return e.SEMrushRequest.countryCode;
    }
    function Ve(e) {
      return e.SEMrushRequest.hasData;
    }
    function He(e) {
      return e.SEMrushRequest.isLoggedIn;
    }
    var Ye = function (e) {
        return Object(r.get)(e, "shoppingData", {});
      },
      We = function (e) {
        return Object(r.get)(e, "twitterEditor.title", "");
      },
      Ge = function (e) {
        return Object(r.get)(e, "twitterEditor.description", "");
      },
      ze = function (e) {
        return Object(r.get)(e, "twitterEditor.image.url", "");
      },
      $e = function (e) {
        return Object(r.get)(
          e,
          "settings.socialPreviews.twitterCardType",
          "summary"
        );
      },
      Qe = function (e) {
        return Object(r.get)(e, "twitterEditor.image.src", "");
      },
      Ze = function (e) {
        return Object(r.get)(e, "twitterEditor.warnings", []);
      };
    function Xe(e) {
      return Object(r.get)(e, "warning.message", []);
    }
  },
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
  function (e, t, n) {
    "use strict";
    function r(e) {
      var t,
        n = document.getElementById("yoast-measurement-element");
      return (
        n ||
          (((t = document.createElement("div")).id =
            "yoast-measurement-element"),
          (t.style.position = "absolute"),
          (t.style.left = "-9999em"),
          (t.style.top = 0),
          (t.style.height = 0),
          (t.style.overflow = "hidden"),
          (t.style.fontFamily = "arial, sans-serif"),
          (t.style.fontSize = "18px"),
          (t.style.fontWeight = "400"),
          document.body.appendChild(t),
          (n = t)),
        (n.innerHTML = e),
        n.offsetWidth
      );
    }
    n.d(t, "a", function () {
      return r;
    });
  },
  function (e, t, n) {
    "use strict";
    function r() {}
    n.d(t, "a", function () {
      return r;
    });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return o;
      });
    var r = "".concat("WPSEO_", "SET_ACTIVE_MARKER");
    function o(e) {
      return { type: r, activeMarker: e };
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return o;
      });
    var r = "".concat("WPSEO_", "SET_MARKER_PAUSE_STATUS");
    function o(e) {
      return { type: r, isMarkerPaused: e };
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return o;
      });
    var r = "".concat("WPSEO_", "SET_PRIMARY_TAXONOMY"),
      o = function (e, t) {
        return { type: r, taxonomy: e, termId: t };
      };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return o;
      });
    var r = "SET_SHOPPING_DATA";
    function o(e) {
      return { type: r, shoppingData: e };
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return o;
      });
    var r = "SET_WARNING_MESSAGE";
    function o(e) {
      return { type: r, message: e };
    }
  },
  function (e, t) {
    e.exports = window.wp.sanitize;
  },
  ,
  function (e, t, n) {
    "use strict";
    var r = n(4),
      o = n(19),
      a = n(5),
      i = n.n(a),
      s = n(7),
      c = n.n(s),
      u = n(11),
      l = n.n(u),
      p = n(13),
      d = n.n(p),
      f = n(14),
      m = n.n(f),
      g = n(8),
      b = n.n(g),
      y = n(0),
      h = n(1),
      O = n.n(h),
      w = n(95),
      v = n(23),
      j = n(35);
    var E = (function (e) {
      d()(o, e);
      var t,
        n,
        r =
          ((t = o),
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
              var o = b()(this).constructor;
              e = Reflect.construct(r, arguments, o);
            } else e = r.apply(this, arguments);
            return m()(this, e);
          });
      function o(e) {
        var t;
        i()(this, o);
        var n = (t = r.call(this, e)).props.results;
        return (
          (t.state = { mappedResults: {} }),
          null !== n &&
            (t.state = {
              mappedResults: Object(j.default)(n, t.props.keywordKey),
            }),
          (t.handleMarkButtonClick = t.handleMarkButtonClick.bind(l()(t))),
          t
        );
      }
      return (
        c()(o, [
          {
            key: "componentDidUpdate",
            value: function (e) {
              null !== this.props.results &&
                this.props.results !== e.results &&
                this.setState({
                  mappedResults: Object(j.default)(
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
              window.YoastSEO.analysis.applyMarks(new v.Paper("", {}), []);
            },
          },
          {
            key: "render",
            value: function () {
              var e = this.state.mappedResults,
                t = e.errorsResults,
                n = e.improvementsResults,
                r = e.goodResults,
                o = e.considerationsResults,
                a = e.problemsResults;
              return Object(y.createElement)(
                y.Fragment,
                null,
                Object(y.createElement)(w.ContentAnalysis, {
                  errorsResults: t,
                  problemsResults: a,
                  improvementsResults: n,
                  considerationsResults: o,
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
        o
      );
    })(y.Component);
    (E.propTypes = {
      results: O.a.array,
      marksButtonClassName: O.a.string,
      marksButtonStatus: O.a.string,
      setActiveMarker: O.a.func.isRequired,
      setMarkerPauseStatus: O.a.func.isRequired,
      activeMarker: O.a.string,
      keywordKey: O.a.string,
    }),
      (E.defaultProps = {
        results: null,
        marksButtonStatus: "enabled",
        marksButtonClassName: "",
        activeMarker: null,
        keywordKey: "",
      });
    var _ = E;
    t.a = Object(o.compose)([
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
    ])(_);
  },
  ,
  function (e, t, n) {
    "use strict";
    var r = n(19),
      o = n(4),
      a = n(92);
    t.a = Object(r.compose)([
      Object(o.withSelect)(function (e, t) {
        var n = e("yoast-seo/editor"),
          r = n.getPostOrPageString,
          o = n.getIsModalOpen;
        return { postTypeName: r(), isOpen: o(t.id) };
      }),
      Object(o.withDispatch)(function (e, t) {
        var n = e("yoast-seo/editor"),
          r = n.openEditorModal;
        return {
          open: function () {
            return r(t.id);
          },
          close: n.closeEditorModal,
        };
      }),
    ])(a.a);
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return _;
    });
    var r = n(10),
      o = n.n(r),
      a = n(5),
      i = n.n(a),
      s = n(7),
      c = n.n(s),
      u = n(11),
      l = n.n(u),
      p = n(13),
      d = n.n(p),
      f = n(14),
      m = n.n(f),
      g = n(8),
      b = n.n(g),
      y = n(0),
      h = n(3),
      O = n(6),
      w = n(1),
      v = n.n(w),
      j = n(63);
    var E = (function (e) {
        d()(a, e);
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
                r = b()(t);
              if (n) {
                var o = b()(this).constructor;
                e = Reflect.construct(r, arguments, o);
              } else e = r.apply(this, arguments);
              return m()(this, e);
            });
        function a(e) {
          var t;
          return (
            i()(this, a),
            ((t = r.call(this, e)).initialPageType = e.pageType.value),
            (t.initialArticleType = e.articleType
              ? e.articleType.value
              : "None"),
            (t.state = {
              schema_page_type: t.initialPageType,
              schema_article_type: t.initialArticleType,
            }),
            (t.handleOptionFocus = t.handleOptionFocus.bind(l()(t))),
            t
          );
        }
        return (
          c()(a, [
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
                this.setState(o()({}, e, t));
              },
            },
            {
              key: "render",
              value: function () {
                return Object(y.createElement)(
                  y.Fragment,
                  null,
                  Object(y.createElement)(O.FieldGroup, {
                    label: Object(h.__)("Schema settings", "wordpress-seo"),
                    linkTo: "https://yoa.st/404",
                    linkText: Object(h.__)(
                      "Learn more about the schema settings",
                      "wordpress-seo"
                    ),
                    description: Object(h.sprintf)(
                      /* translators: %1$s expands to an indexable object's name, e.g. Posts or Pages. */
                      Object(h.__)(
                        "Choose how your %1$s should be described by default in your site's schema.org markup. You can change these settings for individual %1$s.",
                        "wordpress-seo"
                      ),
                      this.props.postTypeName
                    ),
                  }),
                  this.shouldShowAlert() &&
                    Object(y.createElement)(
                      O.Alert,
                      { type: "warning" },
                      Object(h.sprintf)(
                        /* translators: %1$s expands to an indexable object's name, e.g. Posts or Pages. */
                        Object(h._n)(
                          "Upon saving, this setting will apply to all of your %1$s. %1$s that are manually configured will be left untouched.",
                          "Upon saving, these settings will apply to all of your %1$s. %1$s that are manually configured will be left untouched.",
                          this.props.articleType ? 2 : 1,
                          "wordpress-seo"
                        ),
                        this.props.postTypeName
                      )
                    ),
                  Object(y.createElement)(O.Select, {
                    id: "schema-page-type-".concat(this.props.postType),
                    name: "schema_page_type",
                    options: this.props.pageTypeOptions,
                    label: Object(h.__)("Default Page type", "wordpress-seo"),
                    onChange: this.props.pageType.onChange,
                    selected: this.props.pageType.value,
                    onOptionFocus: this.handleOptionFocus,
                  }),
                  this.props.articleType &&
                    Object(y.createElement)(O.Select, {
                      id: "schema-article-type-".concat(this.props.postType),
                      name: "schema_article_type",
                      options: this.props.articleTypeOptions,
                      label: Object(h.__)(
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
          a
        );
      })(y.Component),
      _ = v.a.arrayOf(v.a.shape({ name: v.a.string, value: v.a.string }));
    (E.propTypes = {
      postType: v.a.string.isRequired,
      postTypeName: v.a.string.isRequired,
      pageType: j.b.isRequired,
      articleType: j.b,
      pageTypeOptions: _.isRequired,
      articleTypeOptions: _.isRequired,
    }),
      (E.defaultProps = { articleType: null }),
      (t.a = Object(j.a)(function (e) {
        return [
          { name: "pageType", fieldId: e.pageTypeFieldId },
          { name: "articleType", fieldId: e.articleTypeFieldId },
        ];
      })(E));
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "sortResultsByIdentifier", function () {
        return s;
      }),
      n.d(t, "default", function () {
        return c;
      }),
      n.d(t, "initializationDone", function () {
        return u;
      });
    var r = n(22),
      o = n(16),
      a = n(74),
      i = !1;
    function s(e) {
      return e.sort(function (e, t) {
        return e._identifier.localeCompare(t._identifier);
      });
    }
    function c(e, t, n, c, u) {
      var l = t();
      i &&
        e
          .analyze(l)
          .then(function (e) {
            var t = e.result,
              a = t.seo,
              i = t.readability;
            if (a) {
              var p = a[""];
              p.results.forEach(function (e) {
                e.getMarker = function () {
                  return function () {
                    return n(l, e.marks);
                  };
                };
              }),
                (p.results = s(p.results)),
                c.dispatch(
                  Object(r.setSeoResultsForKeyword)(l.getKeyword(), p.results)
                ),
                c.dispatch(
                  Object(r.setOverallSeoScore)(p.score, l.getKeyword())
                ),
                c.dispatch(Object(o.j)()),
                u.saveScores(p.score, l.getKeyword());
            }
            i &&
              (i.results.forEach(function (e) {
                e.getMarker = function () {
                  return function () {
                    return n(l, e.marks);
                  };
                };
              }),
              (i.results = s(i.results)),
              c.dispatch(Object(r.setReadabilityResults)(i.results)),
              c.dispatch(Object(r.setOverallReadabilityScore)(i.score)),
              c.dispatch(Object(o.j)()),
              u.saveContentScore(i.score));
          })
          .catch(a.a);
    }
    function u() {
      i = !0;
    }
  },
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
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    });
    var r = n(2),
      o = n(20);
    function a() {
      var e = Object(o.a)();
      return Object(r.get)(e, "contentLocale", "en_US");
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return d;
    });
    var r = n(0),
      o = n(3),
      a = n(54),
      i = n(1),
      s = n.n(i),
      c = n(6),
      u = function (e) {
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
      l = u;
    (u.propTypes = {
      onClick: s.a.func.isRequired,
      title: s.a.string.isRequired,
      id: s.a.string,
      subTitle: s.a.string,
      suffixIcon: s.a.object,
    }),
      (u.defaultProps = { id: "", suffixIcon: null, subTitle: "" });
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
      f = function (e) {
        var t = e.id,
          n = e.postTypeName,
          i = e.children,
          s = e.title,
          c = e.isOpen,
          u = e.close,
          f = e.open,
          m = Object(r.useCallback)(
            function (e) {
              d(e) && u();
            },
            [u]
          );
        return Object(r.createElement)(
          r.Fragment,
          null,
          c &&
            Object(r.createElement)(
              p.LocationProvider,
              { value: "modal" },
              Object(r.createElement)(
                a.a,
                {
                  title: s,
                  onRequestClose: m,
                  additionalClassName:
                    "yoast-collapsible-modal yoast-post-settings-modal",
                },
                Object(r.createElement)(
                  "div",
                  { className: "yoast-content-container" },
                  Object(r.createElement)(
                    "div",
                    { className: "yoast-modal-content" },
                    i
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
                      Object(o.sprintf)(
                        Object(o.__)(
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
                        onClick: m,
                      },
                      /* Translators: %s translates to the Post Label in singular form */
                      Object(o.sprintf)(
                        Object(o.__)("Return to your %s", "wordpress-seo"),
                        n
                      )
                    )
                  )
                )
              )
            ),
          Object(r.createElement)(l, {
            id: t + "-open-button",
            title: s,
            suffixIcon: { size: "20px", icon: "pencil-square" },
            onClick: f,
          })
        );
      };
    (f.propTypes = {
      id: s.a.string.isRequired,
      postTypeName: s.a.string.isRequired,
      children: s.a.oneOfType([s.a.node, s.a.arrayOf(s.a.node)]).isRequired,
      title: s.a.string.isRequired,
      isOpen: s.a.bool.isRequired,
      open: s.a.func.isRequired,
      close: s.a.func.isRequired,
    }),
      (t.a = f);
  },
  ,
  function (e, t, n) {
    "use strict";
    function r(e) {
      return function () {
        return e;
      };
    }
    var o = function () {};
    (o.thatReturns = r),
      (o.thatReturnsFalse = r(!1)),
      (o.thatReturnsTrue = r(!0)),
      (o.thatReturnsNull = r(null)),
      (o.thatReturnsThis = function () {
        return this;
      }),
      (o.thatReturnsArgument = function (e) {
        return e;
      }),
      (e.exports = o);
  },
  function (e, t) {
    e.exports = window.yoast.analysisReport;
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = n(6),
      a = n(1),
      i = n.n(a),
      s = n(35),
      c = n(36),
      u = function (e) {
        var t = e.target,
          n = e.scoreIndicator;
        return Object(r.createElement)(
          c.a,
          { target: t },
          Object(r.createElement)(o.SvgIcon, Object(s.getIconForScore)(n))
        );
      };
    (u.propTypes = {
      target: i.a.string.isRequired,
      scoreIndicator: i.a.string.isRequired,
    }),
      (t.a = u);
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    });
    var r = n(2),
      o = n(20);
    function a() {
      var e = Object(o.a)(),
        t = Object(r.get)(e, "translations", {
          domain: "js-text-analysis",
          locale_data: { "js-text-analysis": { "": {} } },
        });
      return (
        "wordpress-seo" !== t.domain ||
          Object(r.isUndefined)(t.locale_data["wordpress-seo"]) ||
          ((t.domain = "js-text-analysis"),
          (t.locale_data["js-text-analysis"] = t.locale_data["wordpress-seo"]),
          (t.locale_data["js-text-analysis"][""].domain = "js-text-analysis"),
          delete t.locale_data["wordpress-seo"]),
        t
      );
    }
  },
  function (e, t, n) {
    "use strict";
    var r,
      o = n(5),
      a = n.n(o),
      i = n(7),
      s = n.n(i),
      c = n(11),
      u = n.n(c),
      l = n(13),
      p = n.n(l),
      d = n(14),
      f = n.n(d),
      m = n(8),
      g = n.n(m),
      b = n(0),
      y = n(1),
      h = n.n(y),
      O = n(15),
      w = n.n(O),
      v = n(12),
      j = n.n(v),
      E = n(37),
      _ = n.n(E),
      T = n(3),
      S = n(6),
      R = n(9),
      k = j()(S.Alert)(r || (r = w()(["\n\tp {\n\t\tmargin: 0;\n\t}\n"]))),
      P = Object(R.makeOutboundLink)(),
      D = function (e) {
        var t = Object(T.sprintf)(
            /* Translators: %s expands to the social medium name, which is either Twitter or Facebook. %s expands to Yoast SEO Premium */
            Object(T.__)(
              "Want to see how your content will look when it’s shared on %s?",
              "wordpress-seo"
            ),
            e.socialMediumName
          ),
          n = Object(T.sprintf)(
            /* Translators: %s expands to Yoast SEO Premium */
            Object(T.__)("Get %s to unlock social previews!", "wordpress-seo"),
            "Yoast SEO Premium"
          );
        return Object(b.createElement)(
          b.Fragment,
          null,
          Object(b.createElement)(
            k,
            { type: "info" },
            _()({
              mixedString: t,
              components: { strong: Object(b.createElement)("b", null) },
            }),
            Object(b.createElement)("br", null),
            Object(b.createElement)(
              P,
              { href: wpseoAdminL10n["shortlinks.upsell.social_previews"] },
              Object(b.createElement)("p", null, n)
            )
          )
        );
      };
    D.propTypes = {
      socialMediumName: h.a.oneOf(["Twitter", "Facebook"]).isRequired,
    };
    var x = D,
      A = n(149),
      C = n(59);
    var I = (function (e) {
      p()(o, e);
      var t,
        n,
        r =
          ((t = o),
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
              r = g()(t);
            if (n) {
              var o = g()(this).constructor;
              e = Reflect.construct(r, arguments, o);
            } else e = r.apply(this, arguments);
            return f()(this, e);
          });
      function o(e) {
        var t;
        return (
          a()(this, o),
          ((t = r.call(this, e)).state = { activeField: "", hoveredField: "" }),
          (t.setHoveredField = t.setHoveredField.bind(u()(t))),
          (t.setActiveField = t.setActiveField.bind(u()(t))),
          (t.setEditorRef = t.setEditorRef.bind(u()(t))),
          (t.setEditorFocus = t.setEditorFocus.bind(u()(t))),
          t
        );
      }
      return (
        s()(o, [
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
                o = e.onRemoveImageClick,
                a = e.socialMediumName,
                i = e.imageWarnings,
                s = e.description,
                c = e.descriptionInputPlaceholder,
                u = e.imageUrl,
                l = e.title,
                p = e.titleInputPlaceholder,
                d = e.replacementVariables,
                f = e.recommendedReplacementVariables,
                m = e.isPremium,
                g = e.location;
              return Object(b.createElement)(
                b.Fragment,
                null,
                Object(b.createElement)(x, { socialMediumName: a }),
                Object(b.createElement)(A.SocialMetadataPreviewForm, {
                  onDescriptionChange: t,
                  socialMediumName: a,
                  title: l,
                  titleInputPlaceholder: p,
                  onRemoveImageClick: o,
                  imageSelected: !!u,
                  imageUrl: u,
                  onTitleChange: n,
                  onSelectImageClick: r,
                  description: s,
                  descriptionInputPlaceholder: c,
                  imageWarnings: i,
                  replacementVariables: d,
                  recommendedReplacementVariables: f,
                  onMouseHover: this.setHoveredField,
                  hoveredField: this.state.hoveredField,
                  onSelect: this.setActiveField,
                  activeField: this.state.activeField,
                  isPremium: m,
                  setEditorRef: this.setEditorRef,
                  idSuffix: g,
                })
              );
            },
          },
        ]),
        o
      );
    })(b.Component);
    (I.propTypes = {
      title: h.a.string.isRequired,
      onTitleChange: h.a.func.isRequired,
      description: h.a.string.isRequired,
      onDescriptionChange: h.a.func.isRequired,
      imageUrl: h.a.string.isRequired,
      onSelectImageClick: h.a.func.isRequired,
      onRemoveImageClick: h.a.func.isRequired,
      socialMediumName: h.a.string.isRequired,
      isPremium: h.a.bool,
      imageWarnings: h.a.array,
      descriptionInputPlaceholder: h.a.string,
      titleInputPlaceholder: h.a.string,
      replacementVariables: C.replacementVariablesShape,
      recommendedReplacementVariables: C.recommendedReplacementVariablesShape,
      location: h.a.string,
    }),
      (I.defaultProps = {
        imageWarnings: [],
        recommendedReplacementVariables: [],
        replacementVariables: [],
        isPremium: !1,
        descriptionInputPlaceholder: "",
        titleInputPlaceholder: "",
        location: "",
      }),
      (t.a = I);
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
          o = void 0;
        try {
          for (
            var a, i = e[Symbol.iterator]();
            !(_n = (a = i.next()).done) &&
            (n.push(a.value), !t || n.length !== t);
            _n = !0
          );
        } catch (e) {
          (r = !0), (o = e);
        } finally {
          try {
            _n || null == i.return || i.return();
          } finally {
            if (r) throw o;
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
        o = {},
        a = Object.keys(e);
      for (r = 0; r < a.length; r++)
        (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
      return o;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = n(1),
      a = n.n(o),
      i = n(12),
      s = n(29),
      c = function (e) {
        var t = e.theme,
          n = e.location,
          o = e.children;
        return Object(r.createElement)(
          s.LocationProvider,
          { value: n },
          Object(r.createElement)(i.ThemeProvider, { theme: t }, o)
        );
      };
    (c.propTypes = {
      theme: a.a.object.isRequired,
      location: a.a.oneOf(["sidebar", "metabox", "modal"]).isRequired,
      children: a.a.element.isRequired,
    }),
      (t.a = c);
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "refreshDelay", function () {
        return r;
      });
    var r = 500;
  },
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    function r(e) {
      var t = e.alertKey;
      return new Promise(function (e) {
        return wpseoApi.post("alerts/dismiss", { key: t }, function () {
          return e();
        });
      });
    }
    n.r(t),
      n.d(t, "DISMISS_ALERT", function () {
        return r;
      });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    });
    var r,
      o,
      a = n(17);
    function i() {
      return (i =
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
    function s(e) {
      return a.createElement(
        "svg",
        i(
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 425 456.27",
            "aria-hidden": "true",
          },
          e
        ),
        r ||
          (r = a.createElement("path", {
            d: "M73 405.26a66.79 66.79 0 01-6.54-1.7 64.75 64.75 0 01-6.28-2.31c-1-.42-2-.89-3-1.37-1.49-.72-3-1.56-4.77-2.56-1.5-.88-2.71-1.64-3.83-2.39-.9-.61-1.8-1.26-2.68-1.92a70.154 70.154 0 01-5.08-4.19 69.21 69.21 0 01-8.4-9.17c-.92-1.2-1.68-2.25-2.35-3.24a70.747 70.747 0 01-3.44-5.64 68.29 68.29 0 01-8.29-32.55V142.13a68.26 68.26 0 018.29-32.55c1-1.92 2.21-3.82 3.44-5.64s2.55-3.58 4-5.27a69.26 69.26 0 0114.49-13.25C50.37 84.19 52.27 83 54.2 82A67.59 67.59 0 0173 75.09a68.75 68.75 0 0113.75-1.39h169.66L263 55.39H86.75A86.84 86.84 0 000 142.13v196.09A86.84 86.84 0 0086.75 425h11.32v-18.35H86.75A68.75 68.75 0 0173 405.26zM368.55 60.85l-1.41-.53-6.41 17.18 1.41.53a68.06 68.06 0 018.66 4c1.93 1 3.82 2.2 5.65 3.43A69.19 69.19 0 01391 98.67c1.4 1.68 2.72 3.46 3.95 5.27s2.39 3.72 3.44 5.64a68.29 68.29 0 018.29 32.55v264.52H233.55l-.44.76c-3.07 5.37-6.26 10.48-9.49 15.19L222 425h203V142.13a87.2 87.2 0 00-56.45-81.28z",
          })),
        o ||
          (o = a.createElement("path", {
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
      o = n(15),
      a = n.n(o),
      i = n(0),
      s = n(1),
      c = n.n(s),
      u = n(12),
      l = n.n(u),
      p = n(6),
      d = n(9),
      f = l()(p.StyledSection)(
        r ||
          (r = a()([
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
      m = function (e) {
        var t = e.children,
          n = e.title,
          r = e.icon,
          o = e.hasPaperStyle,
          a = e.shoppingData;
        return Object(i.createElement)(
          f,
          {
            headingLevel: 3,
            headingText: n,
            headingIcon: r,
            headingIconColor: "#555",
            hasPaperStyle: o,
            shoppingData: a,
          },
          t
        );
      };
    (m.propTypes = {
      children: c.a.element,
      title: c.a.string,
      icon: c.a.string,
      hasPaperStyle: c.a.bool,
      shoppingData: c.a.object,
    }),
      (m.defaultProps = { hasPaperStyle: !0, shoppingData: null }),
      (t.a = m);
  },
  function (e, t, n) {
    "use strict";
    var r = n(10),
      o = n.n(r),
      a = n(2),
      i = n(70);
    function s(e, t) {
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
    function c(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? s(Object(n), !0).forEach(function (t) {
              o()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : s(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var u = Object(a.get)(window, "wpseoScriptData.dismissedAlerts", {});
    t.a = function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
        t = arguments.length > 1 ? arguments[1] : void 0;
      return t.type === i.b && t.alertKey
        ? c(c({}, e), {}, o()({}, t.alertKey, !0))
        : e;
    };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return c;
    });
    var r = n(10),
      o = n.n(r),
      a = n(43);
    function i(e, t) {
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
    function s(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? i(Object(n), !0).forEach(function (t) {
              o()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : i(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function c() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 ? arguments[1] : void 0;
      switch (t.type) {
        case a.b:
          return s(s({}, e), t.settings);
        case a.a:
          var n = Object.assign({}, e.socialPreviews, { contentImage: t.src });
          return s(s({}, e), {}, { socialPreviews: s({}, n) });
        default:
          return e;
      }
    }
  },
  function (e, t, n) {
    "use strict";
    var r = n(4),
      o = n(19),
      a = n(0),
      i = n(3),
      s = n(1),
      c = n.n(s),
      u = n(2),
      l = n(6),
      p = function () {
        return Object(a.createElement)(
          "p",
          { className: "yoast-related-keyphrases-modal__loading-message" },
          Object(i.sprintf)(
            /* translators: %1$s expands to "Yoast SEO", %2$s expands to "Semrush". */
            Object(i.__)(
              "Please wait while %1$s connects to %2$s to get related keyphrases...",
              "wordpress-seo"
            ),
            "Yoast SEO",
            "Semrush"
          ),
          " ",
          Object(a.createElement)(l.SvgIcon, { icon: "loading-spinner" })
        );
      },
      d = n(9),
      f = Object(d.makeOutboundLink)(),
      m = function () {
        return Object(a.createElement)(
          a.Fragment,
          null,
          Object(a.createElement)(
            "p",
            null,
            Object(i.sprintf)(
              /* translators: %s : Expands to "Semrush". */
              Object(i.__)(
                "You've reached your request limit for today. Check back tomorrow or upgrade your plan over at %s.",
                "wordpress-seo"
              ),
              "Semrush"
            )
          ),
          Object(a.createElement)(
            f,
            {
              href: window.wpseoAdminL10n["shortlinks.semrush.prices"],
              className: "yoast-button-upsell",
            },
            Object(i.sprintf)(
              /* translators: %s : Expands to "Semrush". */
              Object(i.__)("Upgrade your %s plan", "wordpress-seo"),
              "Semrush"
            ),
            Object(a.createElement)("span", {
              "aria-hidden": "true",
              className: "yoast-button-upsell__caret",
            })
          )
        );
      },
      g = n(47),
      b = n.n(g),
      y = n(5),
      h = n.n(y),
      O = n(7),
      w = n.n(O),
      v = n(11),
      j = n.n(v),
      E = n(13),
      _ = n.n(E),
      T = n(14),
      S = n.n(T),
      R = n(8),
      k = n.n(R),
      P = n(26),
      D = n.n(P),
      x = n(65),
      A = n.n(x),
      C = n(53);
    var I = "yoast-semrush-country-selector",
      M = [
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
      N = (function (e) {
        _()(c, e);
        var t,
          n,
          r,
          o,
          s =
            ((r = c),
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
                t = k()(r);
              if (o) {
                var n = k()(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return S()(this, e);
            });
        function c(e) {
          var t;
          return (
            h()(this, c),
            ((t = s.call(this, e)).relatedKeyphrasesRequest =
              t.relatedKeyphrasesRequest.bind(j()(t))),
            (t.onChangeHandler = t.onChangeHandler.bind(j()(t))),
            t
          );
        }
        return (
          w()(c, [
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
                A()({
                  path: "yoast/v1/semrush/country_code",
                  method: "POST",
                  data: { country_code: e },
                });
              },
            },
            {
              key: "relatedKeyphrasesRequest",
              value:
                ((n = b()(
                  D.a.mark(function e() {
                    var t, n, r, o;
                    return D.a.wrap(
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
                              if (200 !== (o = e.sent).status) {
                                e.next = 9;
                                break;
                              }
                              return (
                                this.handleSuccessResponse(o),
                                e.abrupt("return")
                              );
                            case 9:
                              this.handleFailedResponse(o);
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
                ((t = b()(
                  D.a.mark(function e(t, n) {
                    return D.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              A()({
                                path: Object(C.addQueryArgs)(
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
                return Object(a.createElement)(
                  "div",
                  { id: I },
                  Object(a.createElement)(l.SingleSelect, {
                    id: I + "-select",
                    label: Object(i.__)("Show results for:", "wordpress-seo"),
                    name: "semrush-country-code",
                    options: M,
                    selected: this.props.countryCode,
                    onChange: this.onChangeHandler,
                    wrapperClassName:
                      "yoast-field-group yoast-field-group--inline",
                  }),
                  Object(a.createElement)(
                    l.NewButton,
                    {
                      id: I + "-button",
                      variant: "secondary",
                      onClick: this.relatedKeyphrasesRequest,
                    },
                    Object(i.__)("Select country", "wordpress-seo")
                  )
                );
              },
            },
          ]),
          c
        );
      })(a.Component);
    (N.propTypes = {
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
      (N.defaultProps = {
        keyphrase: "",
        countryCode: "us",
        response: {},
        lastRequestKeyphrase: "",
      });
    var L = N,
      F = n(31),
      q = n.n(F),
      B = function (e) {
        var t = e.data,
          n = e.mapChartDataToTableData,
          r = e.dataTableCaption,
          o = e.dataTableHeaderLabels,
          s = e.isDataTableVisuallyHidden;
        return t.length !== o.length
          ? Object(a.createElement)(
              "p",
              null,
              Object(i.__)(
                "The number of headers and header labels don't match.",
                "wordpress-seo"
              )
            )
          : Object(a.createElement)(
              "div",
              { className: s ? "screen-reader-text" : null },
              Object(a.createElement)(
                "table",
                null,
                Object(a.createElement)("caption", null, r),
                Object(a.createElement)(
                  "thead",
                  null,
                  Object(a.createElement)(
                    "tr",
                    null,
                    o.map(function (e, t) {
                      return Object(a.createElement)("th", { key: t }, e);
                    })
                  )
                ),
                Object(a.createElement)(
                  "tbody",
                  null,
                  Object(a.createElement)(
                    "tr",
                    null,
                    t.map(function (e, t) {
                      return Object(a.createElement)("td", { key: t }, n(e.y));
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
    var U = B,
      K = function (e) {
        var t = e.data,
          n = e.width,
          r = e.height,
          o = e.fillColor,
          i = e.strokeColor,
          s = e.strokeWidth,
          c = e.className,
          u = e.mapChartDataToTableData,
          l = e.dataTableCaption,
          p = e.dataTableHeaderLabels,
          d = e.isDataTableVisuallyHidden,
          f = Math.max(
            1,
            Math.max.apply(
              Math,
              q()(
                t.map(function (e) {
                  return e.x;
                })
              )
            )
          ),
          m = Math.max(
            1,
            Math.max.apply(
              Math,
              q()(
                t.map(function (e) {
                  return e.y;
                })
              )
            )
          ),
          g = r - s,
          b = t
            .map(function (e) {
              var t = (e.x / f) * n,
                r = g - (e.y / m) * g + s;
              return "".concat(t, ",").concat(r);
            })
            .join(" "),
          y = "0,".concat(g + s, " ") + b + " ".concat(n, ",").concat(g + s);
        return Object(a.createElement)(
          a.Fragment,
          null,
          Object(a.createElement)(
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
            Object(a.createElement)("polygon", { fill: o, points: y }),
            Object(a.createElement)("polyline", {
              fill: "none",
              stroke: i,
              strokeWidth: s,
              strokeLinejoin: "round",
              strokeLinecap: "round",
              points: b,
            })
          ),
          u &&
            Object(a.createElement)(U, {
              data: t,
              mapChartDataToTableData: u,
              dataTableCaption: l,
              dataTableHeaderLabels: p,
              isDataTableVisuallyHidden: d,
            })
        );
      };
    (K.propTypes = {
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
      (K.defaultProps = {
        fillColor: null,
        strokeColor: "#000000",
        strokeWidth: 1,
        className: "",
        mapChartDataToTableData: null,
        isDataTableVisuallyHidden: !0,
      });
    var V = K,
      H = n(55);
    var Y = Object(d.makeOutboundLink)(),
      W = (function (e) {
        _()(o, e);
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
                r = k()(t);
              if (n) {
                var o = k()(this).constructor;
                e = Reflect.construct(r, arguments, o);
              } else e = r.apply(this, arguments);
              return S()(this, e);
            });
        function o(e) {
          var t;
          return (
            h()(this, o),
            ((t = r.call(this, e)).transformTrendDataToChartPoints =
              t.transformTrendDataToChartPoints.bind(j()(t))),
            (t.getAreaChartDataTableHeaderLabels =
              t.getAreaChartDataTableHeaderLabels.bind(j()(t))),
            (t.mapAreaChartDataToTableData = t.mapAreaChartDataToTableData.bind(
              j()(t)
            )),
            t
          );
        }
        return (
          w()(o, [
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
                  Object(i.__)("Twelve months ago", "wordpress-seo"),
                  Object(i.__)("Eleven months ago", "wordpress-seo"),
                  Object(i.__)("Ten months ago", "wordpress-seo"),
                  Object(i.__)("Nine months ago", "wordpress-seo"),
                  Object(i.__)("Eight months ago", "wordpress-seo"),
                  Object(i.__)("Seven months ago", "wordpress-seo"),
                  Object(i.__)("Six months ago", "wordpress-seo"),
                  Object(i.__)("Five months ago", "wordpress-seo"),
                  Object(i.__)("Four months ago", "wordpress-seo"),
                  Object(i.__)("Three months ago", "wordpress-seo"),
                  Object(i.__)("Two months ago", "wordpress-seo"),
                  Object(i.__)("Last month", "wordpress-seo"),
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
                  o = t.countryCode,
                  s = t.data,
                  c = t.renderAction,
                  l =
                    "https://www.semrush.com/analytics/keywordoverview/?q=" +
                    encodeURIComponent(n) +
                    "&db=" +
                    encodeURIComponent(o);
                return (
                  s &&
                  !Object(u.isEmpty)(s.results) &&
                  Object(a.createElement)(
                    a.Fragment,
                    null,
                    Object(a.createElement)(
                      "table",
                      { className: "yoast yoast-table" },
                      Object(a.createElement)(
                        "thead",
                        null,
                        Object(a.createElement)(
                          "tr",
                          null,
                          Object(a.createElement)(
                            "th",
                            { scope: "col", className: "yoast-table--primary" },
                            Object(i.__)("Related keyphrase", "wordpress-seo")
                          ),
                          Object(a.createElement)(
                            "th",
                            {
                              scope: "col",
                              abbr: Object(i.__)("Volume", "wordpress-seo"),
                            },
                            Object(i.__)("Volume", "wordpress-seo"),
                            Object(a.createElement)(
                              H.a,
                              {
                                href: window.wpseoAdminL10n[
                                  "shortlinks.semrush.volume_help"
                                ],
                                className: "dashicons",
                              },
                              Object(a.createElement)(
                                "span",
                                { className: "screen-reader-text" },
                                Object(i.__)(
                                  "Learn more about the related keyphrases volume",
                                  "wordpress-seo"
                                )
                              )
                            )
                          ),
                          Object(a.createElement)(
                            "th",
                            {
                              scope: "col",
                              abbr: Object(i.__)("Trend", "wordpress-seo"),
                            },
                            Object(i.__)("Trend", "wordpress-seo"),
                            Object(a.createElement)(
                              H.a,
                              {
                                href: window.wpseoAdminL10n[
                                  "shortlinks.semrush.trend_help"
                                ],
                                className: "dashicons",
                              },
                              Object(a.createElement)(
                                "span",
                                { className: "screen-reader-text" },
                                Object(i.__)(
                                  "Learn more about the related keyphrases trend",
                                  "wordpress-seo"
                                )
                              )
                            )
                          ),
                          c &&
                            Object(a.createElement)("td", {
                              className: "yoast-table--nobreak",
                            })
                        )
                      ),
                      Object(a.createElement)(
                        "tbody",
                        null,
                        s.results.rows.map(function (t, n) {
                          var o = t[0],
                            s = e.transformTrendDataToChartPoints(t[2]),
                            u = e.getAreaChartDataTableHeaderLabels();
                          return Object(a.createElement)(
                            "tr",
                            { key: n },
                            Object(a.createElement)("td", null, o),
                            Object(a.createElement)("td", null, t[1]),
                            Object(a.createElement)(
                              "td",
                              { className: "yoast-table--nopadding" },
                              Object(a.createElement)(V, {
                                width: 66,
                                height: 24,
                                data: s,
                                strokeWidth: 1.8,
                                strokeColor: "#498afc",
                                fillColor: "#ade3fc",
                                className:
                                  "yoast-related-keyphrases-modal__chart",
                                mapChartDataToTableData:
                                  e.mapAreaChartDataToTableData,
                                dataTableCaption: Object(i.__)(
                                  "Keyphrase volume in the last 12 months on a scale from 0 to 100.",
                                  "wordpress-seo"
                                ),
                                dataTableHeaderLabels: u,
                              })
                            ),
                            c &&
                              Object(a.createElement)(
                                "td",
                                { className: "yoast-table--nobreak" },
                                c(o, r)
                              )
                          );
                        })
                      )
                    ),
                    Object(a.createElement)(
                      "p",
                      { style: { marginBottom: 0 } },
                      Object(a.createElement)(
                        Y,
                        { href: l },
                        Object(i.sprintf)(
                          /* translators: %s expands to Semrush */
                          Object(i.__)(
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
          o
        );
      })(a.Component);
    (W.propTypes = {
      data: c.a.object,
      keyphrase: c.a.string,
      relatedKeyphrases: c.a.array,
      countryCode: c.a.string,
      renderAction: c.a.func,
    }),
      (W.defaultProps = {
        data: {},
        keyphrase: "",
        relatedKeyphrases: [],
        countryCode: "us",
        renderAction: null,
      });
    var G = W,
      z = Object(d.makeOutboundLink)(),
      $ = function () {
        return Object(a.createElement)(
          l.Alert,
          { type: "info" },
          Object(i.sprintf)(
            /* translators: %s: Expands to "Yoast SEO". */
            Object(i.__)(
              "Would you like to be able to add these related keyphrases to the %s analysis so you can optimize your content even further?",
              "wordpress-seo"
            ),
            "Yoast SEO"
          ) + " ",
          Object(a.createElement)(
            z,
            {
              href: window.wpseoAdminL10n[
                "shortlinks.semrush.premium_landing_page"
              ],
            },
            Object(i.sprintf)(
              /* translators: %s: Expands to "Yoast SEO Premium". */
              Object(i.__)("Check out %s!", "wordpress-seo"),
              "Yoast SEO Premium"
            )
          )
        );
      },
      Q = function () {
        return Object(a.createElement)(
          l.Alert,
          { type: "error" },
          Object(i.__)(
            "We've encountered a problem trying to get related keyphrases. Please try again later.",
            "wordpress-seo"
          )
        );
      },
      Z = function () {
        return Object(a.createElement)(
          l.Alert,
          { type: "warning" },
          Object(i.sprintf)(
            /* translators: %s: Expands to "Yoast SEO". */
            Object(i.__)(
              "You've reached the maximum amount of 4 related keyphrases. You can change or remove related keyphrases in the %s metabox or sidebar.",
              "wordpress-seo"
            ),
            "Yoast SEO"
          )
        );
      },
      X = n(20);
    function J(e) {
      var t = e.response,
        n = e.lastRequestKeyphrase,
        r = e.keyphrase,
        o = e.newRequest,
        s = e.setCountry,
        c = e.renderAction,
        l = e.countryCode,
        d = e.requestLimitReached,
        f = e.setRequestFailed,
        g = e.setNoResultsFound,
        b = e.relatedKeyphrases,
        y = e.setRequestSucceeded,
        h = e.setRequestLimitReached,
        O = Object(X.a)().isPremium;
      return Object(a.createElement)(
        a.Fragment,
        null,
        !d &&
          Object(a.createElement)(
            a.Fragment,
            null,
            !O && Object(a.createElement)($, null),
            O &&
              (function (e) {
                return e && e.length >= 4;
              })(b) &&
              Object(a.createElement)(Z, null),
            Object(a.createElement)(L, {
              countryCode: l,
              setCountry: s,
              newRequest: o,
              keyphrase: r,
              setRequestFailed: f,
              setNoResultsFound: g,
              setRequestSucceeded: y,
              setRequestLimitReached: h,
              response: t,
              lastRequestKeyphrase: n,
            })
          ),
        (function (e) {
          var t = e.isPending,
            n = e.requestLimitReached,
            r = e.isSuccess,
            o = e.response,
            s = e.requestHasData;
          return t
            ? Object(a.createElement)(p, null)
            : n
            ? Object(a.createElement)(m, null)
            : !r &&
              (function (e) {
                return !Object(u.isEmpty)(e) && "error" in e;
              })(o)
            ? Object(a.createElement)(Q, null)
            : s
            ? void 0
            : Object(a.createElement)(
                "p",
                null,
                Object(i.__)(
                  "Sorry, there's no data available for that keyphrase/country combination.",
                  "wordpress-seo"
                )
              );
        })(e),
        Object(a.createElement)(G, {
          keyphrase: r,
          relatedKeyphrases: b,
          countryCode: l,
          renderAction: c,
          data: t,
        })
      );
    }
    (J.propTypes = {
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
      (J.defaultProps = {
        keyphrase: "",
        relatedKeyphrases: [],
        renderAction: null,
        requestLimitReached: !1,
        response: {},
        lastRequestKeyphrase: "",
      }),
      (t.a = Object(o.compose)([
        Object(r.withSelect)(function (e) {
          var t = e("yoast-seo/editor"),
            n = t.getFocusKeyphrase,
            r = t.getSEMrushSelectedCountry,
            o = t.getSEMrushRequestLimitReached,
            a = t.getSEMrushRequestResponse,
            i = t.getSEMrushRequestIsSuccess,
            s = t.getSEMrushIsRequestPending,
            c = t.getSEMrushRequestHasData,
            u = t.getSEMrushRequestKeyphrase;
          return {
            keyphrase: n(),
            countryCode: r(),
            requestLimitReached: o(),
            response: a(),
            isSuccess: i(),
            isPending: s(),
            requestHasData: c(),
            lastRequestKeyphrase: u(),
          };
        }),
        Object(r.withDispatch)(function (e) {
          var t = e("yoast-seo/editor"),
            n = t.setSEMrushChangeCountry,
            r = t.setSEMrushNewRequest,
            o = t.setSEMrushRequestSucceeded,
            a = t.setSEMrushRequestFailed,
            i = t.setSEMrushSetRequestLimitReached,
            s = t.setSEMrushNoResultsFound;
          return {
            setCountry: function (e) {
              n(e);
            },
            newRequest: function (e, t) {
              r(e, t);
            },
            setRequestSucceeded: function (e) {
              o(e);
            },
            setRequestFailed: function (e) {
              a(e);
            },
            setRequestLimitReached: function () {
              i();
            },
            setNoResultsFound: function () {
              s();
            },
          };
        }),
      ])(J));
  },
  function (e, t, n) {
    "use strict";
    var r = n(10),
      o = n.n(r),
      a = n(3),
      i = n(16),
      s = n(40);
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
    function u(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? c(Object(n), !0).forEach(function (t) {
              o()(e, t, n[t]);
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
    function l() {
      return {
        mode: "mobile",
        data: { title: "", description: "", slug: "" },
        wordsToHighlight: [],
        replacementVariables: [
          {
            name: "date",
            label: Object(a.__)("Date", "wordpress-seo"),
            value: "",
          },
          { name: "id", label: Object(a.__)("ID", "wordpress-seo"), value: "" },
          {
            name: "page",
            label: Object(a.__)("Page", "wordpress-seo"),
            value: "",
          },
          {
            name: "searchphrase",
            label: Object(a.__)("Search phrase", "wordpress-seo"),
            value: "",
          },
          {
            name: "sitedesc",
            label: Object(a.__)("Tagline", "wordpress-seo"),
            value: "",
          },
          {
            name: "sitename",
            label: Object(a.__)("Site title", "wordpress-seo"),
            value: "",
          },
          {
            name: "category",
            label: Object(a.__)("Category", "wordpress-seo"),
            value: "",
          },
          {
            name: "focuskw",
            label: Object(a.__)("Focus keyphrase", "wordpress-seo"),
            value: "",
          },
          {
            name: "title",
            label: Object(a.__)("Title", "wordpress-seo"),
            value: "",
          },
          {
            name: "parent_title",
            label: Object(a.__)("Parent title", "wordpress-seo"),
            value: "",
          },
          {
            name: "excerpt",
            label: Object(a.__)("Excerpt", "wordpress-seo"),
            value: "",
          },
          {
            name: "primary_category",
            label: Object(a.__)("Primary category", "wordpress-seo"),
            value: "",
          },
          {
            name: "sep",
            label: Object(a.__)("Separator", "wordpress-seo"),
            value: "",
          },
          {
            name: "excerpt_only",
            label: Object(a.__)("Excerpt only", "wordpress-seo"),
            value: "",
          },
          {
            name: "category_description",
            label: Object(a.__)("Category description", "wordpress-seo"),
            value: "",
          },
          {
            name: "tag_description",
            label: Object(a.__)("Tag description", "wordpress-seo"),
            value: "",
          },
          {
            name: "term_description",
            label: Object(a.__)("Term description", "wordpress-seo"),
            value: "",
          },
          {
            name: "currentyear",
            label: Object(a.__)("Current year", "wordpress-seo"),
            value: "",
          },
        ],
        uniqueRefreshValue: "",
        templates: { title: "", description: "" },
        isLoading: !0,
      };
    }
    t.a = function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l(),
        t = arguments.length > 1 ? arguments[1] : void 0;
      switch (t.type) {
        case i.e:
          return u(u({}, e), {}, { mode: t.mode });
        case i.f:
          return u(u({}, e), {}, { data: u(u({}, e.data), t.data) });
        case i.g:
          var n = !0,
            r = e.replacementVariables.map(function (e) {
              return e.name === t.name
                ? ((n = !1),
                  {
                    name: t.name,
                    label: t.label || e.label,
                    value: t.value,
                    hidden: e.hidden,
                  })
                : e;
            });
          return (
            n && (r = Object(s.pushNewReplaceVar)(r, t)),
            u(u({}, e), {}, { replacementVariables: r })
          );
        case i.a:
          var o = e.replacementVariables.map(function (e) {
            return {
              name: e.name,
              label: e.label,
              value: e.value,
              hidden: t.data.includes(e.name),
            };
          });
          return u(u({}, e), {}, { replacementVariables: o });
        case i.d:
          return u(
            u({}, e),
            {},
            {
              replacementVariables: e.replacementVariables.filter(function (e) {
                return e.name !== t.name;
              }),
            }
          );
        case i.c:
          return u(u({}, e), {}, { uniqueRefreshValue: t.time });
        case i.h:
          return u(u({}, e), {}, { wordsToHighlight: t.wordsToHighlight });
        case i.b:
          return u(
            u({}, e),
            {},
            {
              data: u(
                u({}, e.data),
                {},
                {
                  title: t.data.title,
                  description: t.data.description,
                  slug: t.data.slug,
                }
              ),
              templates: u(
                u({}, e.templates),
                {},
                {
                  title: t.templates.title,
                  description: t.templates.description,
                }
              ),
              isLoading: !1,
            }
          );
      }
      return e;
    };
  },
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return p;
    }),
      n.d(t, "b", function () {
        return d;
      });
    var r = n(2),
      o = n(23),
      a = n(91);
    function i() {
      return Object(r.get)(
        window,
        ["wpseoAdminL10n", "default_query_params"],
        {}
      );
    }
    var s = n(97),
      c = n(66),
      u = n(56),
      l = n(48);
    function p() {
      var e = Object(r.get)(
          window,
          ["wpseoScriptData", "analysis", "worker", "url"],
          "analysis-worker.js"
        ),
        t = Object(o.createWorker)(e);
      return (
        t.postMessage({
          dependencies: Object(r.get)(
            window,
            ["wpseoScriptData", "analysis", "worker", "dependencies"],
            []
          ),
        }),
        new o.AnalysisWorkerWrapper(t)
      );
    }
    function d() {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = {
          locale: Object(a.a)(),
          contentAnalysisActive: Object(c.a)(),
          keywordAnalysisActive: Object(u.a)(),
          defaultQueryParams: i(),
          logLevel: Object(r.get)(
            window,
            ["wpseoScriptData", "analysis", "worker", "log_level"],
            "ERROR"
          ),
          enabledFeatures: Object(l.enabledFeatures)(),
        };
      t = Object(r.merge)(t, e);
      var n = Object(s.a)();
      return (
        Object(r.isUndefined)(n) ||
          Object(r.isUndefined)(n.domain) ||
          (t.translations = n),
        t
      );
    }
  },
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var r = n(2);
    function o(e) {
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
      o,
      a,
      i = n(10),
      s = n.n(i),
      c = n(5),
      u = n.n(c),
      l = n(7),
      p = n.n(l),
      d = n(13),
      f = n.n(d),
      m = n(14),
      g = n.n(m),
      b = n(8),
      y = n.n(b),
      h = n(15),
      O = n.n(h),
      w = n(0),
      v = n(4),
      j = n(3),
      E = n(6),
      _ = n(25),
      T = n(1),
      S = n.n(T),
      R = n(12),
      k = n.n(R),
      P = n(42),
      D = n(82),
      x = n(9),
      A = k.a.p(
        r ||
          (r = O()([
            "\n\tcolor: ",
            ";\n\tmargin: 0;\n\tpadding-right: 8px;\n",
          ])),
        _.colors.$color_upsell_text
      ),
      C = k.a.div(
        o ||
          (o = O()([
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
        Object(x.getDirectionalStyle)("border-left", "border-right"),
        _.colors.$color_pink_dark,
        A,
        function (e) {
          return "vertical" === e.alignment && "16px";
        }
      ),
      I = k()(E.SvgIcon)(
        a || (a = O()(["\n\tmargin: ", ";\n\ttransform: ", ";\n"])),
        Object(x.getDirectionalStyle)("0 0 0 4px", "0 4px 0 0"),
        Object(x.getDirectionalStyle)("rotate(0deg)", "rotate(180deg)")
      ),
      M = Object(x.makeOutboundLink)(E.UpsellLinkButton),
      N = function (e) {
        var t = e.alignment,
          n = e.url;
        return Object(w.createElement)(
          C,
          { alignment: t },
          Object(w.createElement)(
            A,
            null,
            Object(j.sprintf)(
              /* translators: %s expands to Yoast SEO Premium */
              Object(j.__)(
                "Did you know %s also analyzes the different word forms of your keyphrase, like plurals and past tenses?",
                "wordpress-seo"
              ),
              "Yoast SEO Premium"
            )
          ),
          Object(w.createElement)(
            "div",
            null,
            Object(w.createElement)(
              M,
              { href: n, className: "UpsellLinkButton" },
              Object(j.sprintf)(
                /* translators: %s expands to Premium */
                Object(j.__)("Go %s!", "wordpress-seo"),
                "Premium"
              ),
              Object(w.createElement)(I, {
                icon: "arrow-right",
                size: "8px",
                color: _.colors.$color_black,
              })
            )
          )
        );
      };
    (N.propTypes = {
      alignment: S.a.oneOf(["horizontal", "vertical"]),
      url: S.a.string.isRequired,
    }),
      (N.defaultProps = { alignment: "vertical" });
    var L,
      F,
      q = N,
      B = n(29),
      U = n(52),
      K = n(69),
      V = n(37),
      H = n.n(V);
    var Y = k.a.ul(
        L ||
          (L = O()([
            '\n\tlist-style: none;\n\tmargin: 0 0 16px;\n\tpadding: 0;\n\n\tli {\n\t\tmargin: 5px 0 0 0;\n\t\tpadding-left: 16px;\n\t}\n\n\tspan[aria-hidden="true"]:before {\n\t\tmargin: 0 8px 0 -16px;\n\t\tfont-weight: bold;\n\t\tcontent: "+";\n\t}\n',
          ]))
      ),
      W = k.a.small(F || (F = O()(["\n\tdisplay: block;\n"]))),
      G = Object(x.makeOutboundLink)(),
      z = (function (e) {
        f()(o, e);
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
                r = y()(t);
              if (n) {
                var o = y()(this).constructor;
                e = Reflect.construct(r, arguments, o);
              } else e = r.apply(this, arguments);
              return g()(this, e);
            });
        function o(e) {
          return u()(this, o), r.call(this, e);
        }
        return (
          p()(o, [
            {
              key: "createBenefitsList",
              value: function (e) {
                return (
                  e.length > 0 &&
                  Object(w.createElement)(
                    Y,
                    { role: "list" },
                    e.map(function (e, t) {
                      return Object(w.createElement)(
                        "li",
                        { key: t },
                        Object(w.createElement)("span", {
                          "aria-hidden": "true",
                        }),
                        H()({
                          mixedString: e
                            .replace("<strong>", "{{strong}}")
                            .replace("</strong>", "{{/strong}}"),
                          components: {
                            strong: Object(w.createElement)("strong", null),
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
                  return Object(w.createElement)("p", { key: t }, e);
                });
              },
            },
            {
              key: "render",
              value: function () {
                return Object(w.createElement)(
                  "div",
                  null,
                  this.createInfoParagraphs(this.props.infoParagraphs),
                  this.createBenefitsList(this.props.benefits),
                  Object(w.createElement)(
                    G,
                    this.props.upsellButton,
                    this.props.upsellButtonText,
                    this.props.upsellButtonHasCaret &&
                      Object(w.createElement)("span", {
                        "aria-hidden": "true",
                        className: "yoast-button-upsell__caret",
                      })
                  ),
                  Object(w.createElement)(
                    W,
                    { id: this.props.upsellButton["aria-describedby"] },
                    this.props.upsellButtonLabel
                  )
                );
              },
            },
          ]),
          o
        );
      })(w.Component);
    (z.propTypes = {
      benefits: S.a.array,
      infoParagraphs: S.a.array,
      upsellButton: S.a.object,
      upsellButtonText: S.a.string.isRequired,
      upsellButtonLabel: S.a.string,
      upsellButtonHasCaret: S.a.bool,
    }),
      (z.defaultProps = {
        infoParagraphs: [],
        benefits: [],
        upsellButton: { href: "", className: "button button-primary" },
        upsellButtonLabel: "",
        upsellButtonHasCaret: !0,
      });
    var $ = z,
      Q = Object(x.makeOutboundLink)(),
      Z = function (e) {
        var t = Object(j.sprintf)(
            /* translators: %1$s expands to a 'Yoast SEO Premium' text linked to the yoast.com website. */
            Object(j.__)("Great news: you can, with %1$s!", "wordpress-seo"),
            "{{link}}Yoast SEO Premium{{/link}}"
          ),
          n = H()({
            mixedString: t,
            components: { link: Object(w.createElement)(Q, { href: e.link }) },
          }),
          r = [
            "<strong>".concat(
              Object(j.__)(
                "Rank better with synonyms & related keyphrases",
                "wordpress-seo"
              ),
              "</strong>"
            ),
            Object(j.sprintf)(
              /* translators: %1$s expands to a 'strong' start tag, %2$s to a 'strong' end tag. */
              Object(j.__)(
                "%1$sNo more dead links%2$s: easy redirect manager",
                "wordpress-seo"
              ),
              "<strong>",
              "</strong>"
            ),
            "<strong>".concat(
              Object(j.__)(
                "Superfast internal linking suggestions",
                "wordpress-seo"
              ),
              "</strong>"
            ),
            Object(j.sprintf)(
              /* translators: %1$s expands to a 'strong' start tag, %2$s to a 'strong' end tag. */
              Object(j.__)(
                "%1$sSocial media preview%2$s: Facebook & Twitter",
                "wordpress-seo"
              ),
              "<strong>",
              "</strong>"
            ),
            "<strong>".concat(
              Object(j.__)("24/7 email support", "wordpress-seo"),
              "</strong>"
            ),
            "<strong>".concat(
              Object(j.__)("No ads!", "wordpress-seo"),
              "</strong>"
            ),
          ],
          o = Object(j.sprintf)(
            /* translators: %s expands to 'Yoast SEO Premium'. */
            Object(j.__)("Other benefits of %s for you:", "wordpress-seo"),
            "Yoast SEO Premium"
          );
        return Object(w.createElement)($, {
          infoParagraphs: [n, o],
          benefits: r,
          upsellButtonText: Object(j.sprintf)(
            /* translators: %s expands to 'Yoast SEO Premium'. */
            Object(j.__)("Get %s", "wordpress-seo"),
            "Yoast SEO Premium"
          ),
          upsellButton: {
            href: e.buyLink,
            className: "yoast-button-upsell",
            rel: null,
          },
          upsellButtonLabel: Object(j.__)(
            "1 year free support and updates included!",
            "wordpress-seo"
          ),
        });
      };
    Z.propTypes = {
      link: S.a.string.isRequired,
      buyLink: S.a.string.isRequired,
    };
    var X = Z,
      J = Object(x.makeOutboundLink)(),
      ee = function (e) {
        var t = Object(j.sprintf)(
            /* translators: %s expands to a 'Yoast SEO Premium' text linked to the yoast.com website. */
            Object(j.__)("Great news: you can, with %s!", "wordpress-seo"),
            "{{link}}Yoast SEO Premium{{/link}}"
          ),
          n = [
            Object(j.sprintf)(
              /* translators: %1$s expands to a 'strong' start tag, %2$s to a 'strong' end tag. */
              Object(j.__)(
                "%1$sNo more dead links%2$s: easy redirect manager",
                "wordpress-seo"
              ),
              "<strong>",
              "</strong>"
            ),
            "<strong>".concat(
              Object(j.__)(
                "Superfast internal linking suggestions",
                "wordpress-seo"
              ),
              "</strong>"
            ),
            Object(j.sprintf)(
              /* translators: %1$s expands to a 'strong' start tag, %2$s to a 'strong' end tag. */
              Object(j.__)(
                "%1$sSocial media preview%2$s: Facebook & Twitter",
                "wordpress-seo"
              ),
              "<strong>",
              "</strong>"
            ),
            "<strong>".concat(
              Object(j.__)("24/7 email support", "wordpress-seo"),
              "</strong>"
            ),
            "<strong>".concat(
              Object(j.__)("No ads!", "wordpress-seo"),
              "</strong>"
            ),
          ],
          r = H()({
            mixedString: t,
            components: { link: Object(w.createElement)(J, { href: e.link }) },
          }),
          o = Object(j.sprintf)(
            /* translators: %s expands to 'Yoast SEO Premium'. */
            Object(j.__)("Other benefits of %s for you:", "wordpress-seo"),
            "Yoast SEO Premium"
          );
        return Object(w.createElement)($, {
          infoParagraphs: [r, o],
          benefits: n,
          upsellButtonText: Object(j.sprintf)(
            /* translators: %s expands to 'Yoast SEO Premium'. */
            Object(j.__)("Get %s", "wordpress-seo"),
            "Yoast SEO Premium"
          ),
          upsellButton: {
            href: e.buyLink,
            className: "yoast-button-upsell",
            rel: null,
          },
          upsellButtonLabel: Object(j.__)(
            "1 year free support and updates included!",
            "wordpress-seo"
          ),
        });
      };
    ee.propTypes = {
      link: S.a.string.isRequired,
      buyLink: S.a.string.isRequired,
    };
    var te,
      ne = ee,
      re = n(39),
      oe = n.n(re),
      ae = n(54),
      ie = k.a.button(
        te ||
          (te = O()([
            "\n\t// Increase specificity to override WP rules.\n\t&& {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\t.yoast-svg-icon {\n\t\tmargin: 1px 7px 0 0;\n\t\tfill: currentColor;\n\t}\n",
          ]))
      ),
      se = {
        open: Object(j.__)("Open", "wordpress-seo"),
        heading: "",
        closeIconButton: Object(j.__)("Close", "wordpress-seo"),
        closeButton: "",
      },
      ce = function (e) {
        var t = Object(w.useState)(!1),
          n = oe()(t, 2),
          r = n[0],
          o = n[1],
          a = Object.assign({}, se, e.labels),
          i = Object(w.useCallback)(function () {
            return o(!1);
          }, []),
          s = Object(w.useCallback)(function () {
            return o(!0);
          }, []);
        return Object(w.createElement)(
          w.Fragment,
          null,
          Object(w.createElement)(
            ie,
            {
              type: "button",
              onClick: s,
              className: "".concat(
                e.classes.openButton,
                " yoast-modal__button-open"
              ),
            },
            e.openButtonIcon &&
              Object(w.createElement)(E.SvgIcon, {
                icon: e.openButtonIcon,
                size: "13px",
              }),
            a.open
          ),
          r &&
            Object(w.createElement)(
              ae.a,
              { onRequestClose: i, className: e.className, title: a.heading },
              e.children
            )
        );
      };
    (ce.propTypes = {
      openButtonIcon: S.a.string,
      labels: S.a.shape({
        open: S.a.string,
        modalAriaLabel: S.a.string.isRequired,
        heading: S.a.string,
        closeIconButton: S.a.string,
        closeButton: S.a.string,
      }).isRequired,
      classes: S.a.shape({
        openButton: S.a.string,
        closeIconButton: S.a.string,
        closeButton: S.a.string,
      }),
      className: S.a.string,
      children: S.a.any.isRequired,
    }),
      (ce.defaultProps = { className: ae.b, openButtonIcon: "", classes: {} });
    var ue = ce,
      le = n(96),
      pe = n(51),
      de = n(18);
    function fe(e) {
      var t = e.location;
      return Object(w.createElement)(de.Slot, {
        name: "yoast-synonyms-".concat(t),
      });
    }
    fe.propTypes = { location: S.a.string.isRequired };
    var me,
      ge = n(35);
    function be(e, t) {
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
          ? be(Object(n), !0).forEach(function (t) {
              s()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : be(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var he = k.a.span(
        me ||
          (me = O()([
            "\n\tfont-size: 1em;\n\tfont-weight: bold;\n\tmargin: 1.5em 0 1em;\n\tdisplay: block;\n",
          ]))
      ),
      Oe = (function (e) {
        f()(o, e);
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
                r = y()(t);
              if (n) {
                var o = y()(this).constructor;
                e = Reflect.construct(r, arguments, o);
              } else e = r.apply(this, arguments);
              return g()(this, e);
            });
        function o() {
          return u()(this, o), r.apply(this, arguments);
        }
        return (
          p()(o, [
            {
              key: "renderSynonymsUpsell",
              value: function (e) {
                var t = {
                    classes: {
                      openButton: "wpseo-keyword-synonyms button-link",
                    },
                    labels: {
                      open:
                        "+ " + Object(j.__)("Add synonyms", "wordpress-seo"),
                      modalAriaLabel: Object(j.sprintf)(
                        /* translators: %s expands to 'Yoast SEO Premium'. */
                        Object(j.__)("Get %s", "wordpress-seo"),
                        "Yoast SEO Premium"
                      ),
                      heading: Object(j.sprintf)(
                        /* translators: %s expands to 'Yoast SEO Premium'. */
                        Object(j.__)("Get %s", "wordpress-seo"),
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
                  Object(w.createElement)(
                    ue,
                    t,
                    Object(w.createElement)(
                      K.a,
                      null,
                      Object(w.createElement)(K.b, { icon: E.YoastSeoIcon }),
                      Object(w.createElement)(
                        "h2",
                        null,
                        Object(j.__)(
                          "Would you like to add keyphrase synonyms?",
                          "wordpress-seo"
                        )
                      ),
                      Object(w.createElement)(X, { link: n, buyLink: r })
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
                        Object(j.__)("Add related keyphrase", "wordpress-seo"),
                      modalAriaLabel: Object(j.sprintf)(
                        /* translators: %s expands to 'Yoast SEO Premium'. */
                        Object(j.__)("Get %s", "wordpress-seo"),
                        "Yoast SEO Premium"
                      ),
                      heading: Object(j.sprintf)(
                        /* translators: %s expands to 'Yoast SEO Premium'. */
                        Object(j.__)("Get %s", "wordpress-seo"),
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
                  Object(w.createElement)(
                    ue,
                    t,
                    Object(w.createElement)(
                      K.a,
                      null,
                      Object(w.createElement)(K.b, { icon: E.YoastSeoIcon }),
                      Object(w.createElement)(
                        "h2",
                        null,
                        Object(j.__)(
                          "Would you like to add a related keyphrase?",
                          "wordpress-seo"
                        )
                      ),
                      Object(w.createElement)(ne, { link: n, buyLink: r })
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
                  r = U.a;
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
                  Object(w.createElement)(
                    r,
                    {
                      prefixIcon: {
                        icon: "plus",
                        color: _.colors.$color_grey_medium_dark,
                      },
                      prefixIconCollapsed: {
                        icon: "plus",
                        color: _.colors.$color_grey_medium_dark,
                      },
                      title: Object(j.__)(
                        "Add related keyphrase",
                        "wordpress-seo"
                      ),
                      id: "yoast-additional-keyphrase-collapsible-".concat(e),
                    },
                    Object(w.createElement)(ne, { link: t, buyLink: n })
                  )
                );
              },
            },
            {
              key: "renderWordFormsUpsell",
              value: function (e) {
                return Object(w.createElement)(q, {
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
                  : Object(w.createElement)(le.a, {
                      target: "wpseo-seo-score-icon",
                      scoreIndicator: t,
                    });
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = Object(P.a)(this.props.overallScore);
                return (
                  "loading" !== t.className &&
                    "" === this.props.keyword &&
                    ((t.className = "na"),
                    (t.screenReaderReadabilityText = Object(j.__)(
                      "Enter a focus keyphrase to calculate the SEO score",
                      "wordpress-seo"
                    ))),
                  Object(w.createElement)(
                    B.LocationConsumer,
                    null,
                    function (n) {
                      var r = "metabox" === n ? U.a : pe.a;
                      return Object(w.createElement)(
                        w.Fragment,
                        null,
                        Object(w.createElement)(
                          r,
                          {
                            title: Object(j.__)(
                              "SEO analysis",
                              "wordpress-seo"
                            ),
                            titleScreenReaderText:
                              t.screenReaderReadabilityText,
                            prefixIcon: Object(ge.getIconForScore)(t.className),
                            prefixIconCollapsed: Object(ge.getIconForScore)(
                              t.className
                            ),
                            subTitle: e.props.keyword,
                            id: "yoast-seo-analysis-collapsible-".concat(n),
                          },
                          Object(w.createElement)(fe, { location: n }),
                          e.props.shouldUpsell &&
                            Object(w.createElement)(
                              w.Fragment,
                              null,
                              e.renderSynonymsUpsell(n),
                              e.renderMultipleKeywordsUpsell(n)
                            ),
                          e.props.shouldUpsellWordFormRecognition &&
                            e.renderWordFormsUpsell(n),
                          Object(w.createElement)(
                            he,
                            null,
                            Object(j.__)("Analysis results", "wordpress-seo")
                          ),
                          Object(w.createElement)(D.a, {
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
          o
        );
      })(w.Component);
    (Oe.propTypes = {
      results: S.a.array,
      marksButtonStatus: S.a.string,
      keyword: S.a.string,
      shouldUpsell: S.a.bool,
      shouldUpsellWordFormRecognition: S.a.bool,
      overallScore: S.a.number,
    }),
      (Oe.defaultProps = {
        results: [],
        marksButtonStatus: null,
        keyword: "",
        shouldUpsell: !1,
        shouldUpsellWordFormRecognition: !1,
        overallScore: null,
      }),
      (t.a = Object(v.withSelect)(function (e, t) {
        var n = e("yoast-seo/editor"),
          r = n.getFocusKeyphrase,
          o = n.getMarksButtonStatus,
          a = n.getResultsForKeyword,
          i = r();
        return ye(
          ye({}, a(i)),
          {},
          {
            marksButtonStatus: t.hideMarksButtons ? "disabled" : o(),
            keyword: i,
          }
        );
      })(Oe));
  },
  ,
  function (e, t, n) {
    "use strict";
    var r,
      o = n(19),
      a = n(4),
      i = n(0),
      s = n(3),
      c = n(18),
      u = n(6),
      l = n(9),
      p = n(1),
      d = n.n(p),
      f = n(5),
      m = n.n(f),
      g = n(7),
      b = n.n(g),
      y = n(13),
      h = n.n(y),
      O = n(14),
      w = n.n(O),
      v = n(8),
      j = n.n(v),
      E = n(15),
      _ = n.n(E),
      T = n(12);
    var S = n
        .n(T)
        .a.div(r || (r = _()(["\n\tdisplay: flex;\n\tmargin-top: 8px;\n"]))),
      R = (function (e) {
        h()(o, e);
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
                r = j()(t);
              if (n) {
                var o = j()(this).constructor;
                e = Reflect.construct(r, arguments, o);
              } else e = r.apply(this, arguments);
              return w()(this, e);
            });
        function o() {
          return m()(this, o), r.apply(this, arguments);
        }
        return (
          b()(o, [
            {
              key: "render",
              value: function () {
                return Object(i.createElement)(
                  S,
                  null,
                  Object(i.createElement)(u.Toggle, {
                    id: this.props.id,
                    labelText: Object(s.__)(
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
          o
        );
      })(i.Component);
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
    var k = R,
      P = n(52),
      D = n(51),
      x = Object(l.makeOutboundLink)();
    function A(e) {
      var t = e.isCornerstone,
        n = e.onChange,
        r = e.learnMoreUrl,
        o = e.location,
        a = "metabox" === o ? P.a : D.a;
      return Object(i.createElement)(
        a,
        {
          id: Object(l.join)(["yoast-cornerstone-collapsible", o]),
          title: Object(s.__)("Cornerstone content", "wordpress-seo"),
        },
        Object(i.createElement)(
          u.HelpText,
          null,
          Object(s.__)(
            "Cornerstone content should be the most important and extensive articles on your site.",
            "wordpress-seo"
          ) + " ",
          Object(i.createElement)(
            x,
            { href: r },
            Object(s.__)(
              "Learn more about Cornerstone Content.",
              "wordpress-seo"
            )
          )
        ),
        Object(i.createElement)(k, {
          id: Object(l.join)(["yoast-cornerstone", o]),
          isEnabled: t,
          onToggle: n,
        }),
        Object(i.createElement)(c.Slot, { name: "YoastAfterCornerstoneToggle" })
      );
    }
    (A.propTypes = {
      isCornerstone: d.a.bool,
      onChange: d.a.func,
      learnMoreUrl: d.a.string.isRequired,
      location: d.a.string,
    }),
      (A.defaultProps = {
        isCornerstone: !0,
        onChange: function () {},
        location: "",
      });
    var C = n(58);
    t.a = Object(o.compose)([
      Object(a.withSelect)(function (e) {
        return {
          isCornerstone: (0, e("yoast-seo/editor").isCornerstoneContent)(),
          learnMoreUrl: wpseoAdminL10n["shortlinks.cornerstone_content_info"],
        };
      }),
      Object(a.withDispatch)(function (e) {
        return { onChange: e("yoast-seo/editor").toggleCornerstoneContent };
      }),
      Object(C.a)(),
    ])(A);
  },
  function (e, t, n) {
    "use strict";
    var r = n(5),
      o = n.n(r),
      a = n(7),
      i = n.n(a),
      s = n(11),
      c = n.n(s),
      u = n(13),
      l = n.n(u),
      p = n(14),
      d = n.n(p),
      f = n(8),
      m = n.n(f),
      g = n(15),
      b = n.n(g),
      y = n(0),
      h = n(18),
      O = n(19),
      w = n(4),
      v = n(3),
      j = n(1),
      E = n.n(j),
      _ = n(12),
      T = n.n(_),
      S = n(22),
      R = n(47),
      k = n.n(R),
      P = n(26),
      D = n.n(P),
      x = n(65),
      A = n.n(x),
      C = n(6),
      I = n(69),
      M = n(54),
      N = n(111),
      L = n(92);
    var F = (function (e) {
      l()(u, e);
      var t,
        n,
        r,
        a,
        s =
          ((r = u),
          (a = (function () {
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
              t = m()(r);
            if (a) {
              var n = m()(this).constructor;
              e = Reflect.construct(t, arguments, n);
            } else e = t.apply(this, arguments);
            return d()(this, e);
          });
      function u(e) {
        var t;
        return (
          o()(this, u),
          ((t = s.call(this, e)).onModalOpen = t.onModalOpen.bind(c()(t))),
          (t.onModalClose = t.onModalClose.bind(c()(t))),
          (t.onLinkClick = t.onLinkClick.bind(c()(t))),
          (t.listenToMessages = t.listenToMessages.bind(c()(t))),
          t
        );
      }
      return (
        i()(u, [
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
              Object(L.b)(e) && this.props.onClose();
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
              ((n = k()(
                D.a.mark(function e(t) {
                  var n, r;
                  return D.a.wrap(
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
              ((t = k()(
                D.a.mark(function e(t) {
                  var n, r, o;
                  return D.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (n = new URL(t.url)),
                              (r = n.searchParams.get("code")),
                              (e.next = 5),
                              A()({
                                path: "yoast/v1/semrush/authenticate",
                                method: "POST",
                                data: { code: r },
                              })
                            );
                          case 5:
                            200 === (o = e.sent).status
                              ? (this.props.onAuthentication(!0),
                                this.onModalOpen(),
                                this.popup.close())
                              : console.error(o.error),
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
                o = e.isLoggedIn;
              return Object(y.createElement)(
                y.Fragment,
                null,
                o &&
                  Object(y.createElement)(
                    "div",
                    { className: "yoast" },
                    Object(y.createElement)(
                      C.NewButton,
                      {
                        variant: "secondary",
                        id: "yoast-get-related-keyphrases-".concat(n),
                        onClick: this.onModalOpen,
                      },
                      Object(v.__)("Get related keyphrases", "wordpress-seo")
                    )
                  ),
                t &&
                  r === n &&
                  Object(y.createElement)(
                    M.a,
                    {
                      title: Object(v.__)(
                        "Related keyphrases",
                        "wordpress-seo"
                      ),
                      onRequestClose: this.onModalClose,
                      icon: Object(y.createElement)(N.a, null),
                      additionalClassName: "yoast-related-keyphrases-modal",
                    },
                    Object(y.createElement)(
                      I.a,
                      {
                        className:
                          "yoast-gutenberg-modal__content yoast-related-keyphrases-modal__content",
                      },
                      Object(y.createElement)(h.Slot, {
                        name: "YoastRelatedKeyphrases",
                      })
                    )
                  ),
                !o &&
                  Object(y.createElement)(
                    "div",
                    { className: "yoast" },
                    Object(y.createElement)(
                      C.ButtonStyledLink,
                      {
                        variant: "secondary",
                        id: "yoast-get-related-keyphrases-".concat(n),
                        href: "https://oauth.semrush.com/oauth2/authorize?ref=1513012826&client_id=yoast&redirect_uri=https%3A%2F%2Foauth.semrush.com%2Foauth2%2Fyoast%2Fsuccess&response_type=code&scope=user.id",
                        onClick: this.onLinkClick,
                      },
                      Object(v.__)("Get related keyphrases", "wordpress-seo"),
                      Object(y.createElement)(
                        "span",
                        { className: "screen-reader-text" },
                        Object(v.__)(
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
        u
      );
    })(y.Component);
    (F.propTypes = {
      keyphrase: E.a.string,
      location: E.a.string,
      whichModalOpen: E.a.oneOf(["none", "metabox", "sidebar"]),
      isLoggedIn: E.a.bool,
      onOpen: E.a.func.isRequired,
      onOpenWithNoKeyphrase: E.a.func.isRequired,
      onClose: E.a.func.isRequired,
      onAuthentication: E.a.func.isRequired,
    }),
      (F.defaultProps = {
        keyphrase: "",
        location: "",
        whichModalOpen: "none",
        isLoggedIn: !1,
      });
    var q,
      B = F,
      U = Object(O.compose)([
        Object(w.withSelect)(function (e) {
          var t = e("yoast-seo/editor"),
            n = t.getSEMrushModalOpen,
            r = t.getSEMrushLoginStatus;
          return { whichModalOpen: n(), isLoggedIn: r() };
        }),
        Object(w.withDispatch)(function (e) {
          var t = e("yoast-seo/editor"),
            n = t.setSEMrushNoKeyphraseMessage,
            r = t.setSEMrushOpenModal,
            o = t.setSEMrushDismissModal,
            a = t.setSEMrushLoginStatus;
          return {
            onOpenWithNoKeyphrase: function () {
              n();
            },
            onOpen: function (e) {
              r(e);
            },
            onClose: function () {
              o();
            },
            onAuthentication: function (e) {
              a(e);
            },
          };
        }),
      ])(B),
      K = n(29),
      V = n(55);
    var H = T.a.div(
        q ||
          (q = b()([
            "\n\tpadding: 16px;\n\t/* Necessary to compensate negative top margin of the collapsible after the keyword input. */\n\tborder-bottom: 1px solid transparent;\n",
          ]))
      ),
      Y = (function (e) {
        l()(a, e);
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
                r = m()(t);
              if (n) {
                var o = m()(this).constructor;
                e = Reflect.construct(r, arguments, o);
              } else e = r.apply(this, arguments);
              return d()(this, e);
            });
        function a(e) {
          var t;
          return (
            o()(this, a),
            ((t = r.call(this, e)).validate = t.validate.bind(c()(t))),
            t
          );
        }
        return (
          i()(
            a,
            [
              {
                key: "validate",
                value: function () {
                  var e = [];
                  return (
                    0 === this.props.keyword.trim().length &&
                      this.props.displayNoKeyphraseMessage &&
                      e.push(
                        Object(v.__)(
                          "Please enter a focus keyphrase first to get related keyphrases",
                          "wordpress-seo"
                        )
                      ),
                    this.props.keyword.includes(",") &&
                      e.push(
                        Object(v.__)(
                          "Are you trying to use multiple keyphrases? You should add them separately below.",
                          "wordpress-seo"
                        )
                      ),
                    this.props.keyword.length > 191 &&
                      e.push(
                        Object(v.__)(
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
                    K.LocationConsumer,
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
                          H,
                          { location: n },
                          Object(y.createElement)(S.KeywordInput, {
                            id: "focus-keyword-input-".concat(n),
                            onChange: e.props.onFocusKeywordChange,
                            keyword: e.props.keyword,
                            label: Object(v.__)(
                              "Focus keyphrase",
                              "wordpress-seo"
                            ),
                            helpLink: a.renderHelpLink(),
                            onBlurKeyword: e.props.onBlurKeyword,
                            onFocusKeyword: e.props.onFocusKeyword,
                            hasError: t.length > 0,
                            errorMessages: t,
                          }),
                          e.props.isSEMrushIntegrationActive &&
                            Object(y.createElement)(U, {
                              location: n,
                              keyphrase: e.props.keyword,
                            })
                        ),
                        Object(y.createElement)(h.Slot, {
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
                    V.a,
                    {
                      href: wpseoAdminL10n["shortlinks.focus_keyword_info"],
                      className: "dashicons",
                    },
                    Object(y.createElement)(
                      "span",
                      { className: "screen-reader-text" },
                      Object(v.__)(
                        "Help on choosing the perfect focus keyphrase",
                        "wordpress-seo"
                      )
                    )
                  );
                },
              },
            ]
          ),
          a
        );
      })(y.Component);
    (Y.propTypes = {
      keyword: E.a.string,
      onFocusKeywordChange: E.a.func.isRequired,
      onFocusKeyword: E.a.func.isRequired,
      onBlurKeyword: E.a.func.isRequired,
      isSEMrushIntegrationActive: E.a.bool,
      displayNoKeyphraseMessage: E.a.bool,
    }),
      (Y.defaultProps = {
        keyword: "",
        isSEMrushIntegrationActive: !1,
        displayNoKeyphraseMessage: !1,
      }),
      (t.a = Object(O.compose)([
        Object(w.withSelect)(function (e) {
          var t = e("yoast-seo/editor"),
            n = t.getFocusKeyphrase,
            r = t.getSEMrushNoKeyphraseMessage;
          return { keyword: n(), displayNoKeyphraseMessage: r() };
        }),
        Object(w.withDispatch)(function (e) {
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
      ])(Y));
  },
  function (e, t, n) {
    "use strict";
    var r,
      o,
      a,
      i = n(10),
      s = n.n(i),
      c = n(5),
      u = n.n(c),
      l = n(7),
      p = n.n(l),
      d = n(13),
      f = n.n(d),
      m = n(14),
      g = n.n(m),
      b = n(8),
      y = n.n(b),
      h = n(15),
      O = n.n(h),
      w = n(0),
      v = n(4),
      j = n(1),
      E = n.n(j),
      _ = n(12),
      T = n.n(_),
      S = n(3),
      R = n(2),
      k = n(96),
      P = n(82),
      D = n(51),
      x = n(42),
      A = n(35),
      C = n(29),
      I = n(55),
      M = n(36);
    function N(e) {
      var t = e.target,
        n = e.children;
      return Object(w.createElement)(M.a, { target: t }, n);
    }
    function L(e, t) {
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
    function F(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? L(Object(n), !0).forEach(function (t) {
              s()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : L(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    N.propTypes = {
      target: E.a.string.isRequired,
      children: E.a.node.isRequired,
    };
    var q = T.a.span(
        r ||
          (r = O()([
            "\n\tfont-size: 1em;\n\tfont-weight: bold;\n\tmargin: 0 0 8px;\n\tdisplay: block;\n",
          ]))
      ),
      B = T.a.div(o || (o = O()(["\n\tpadding: 16px;\n"]))),
      U = T()(I.a)(a || (a = O()(["\n\tmargin: -8px 0 -4px 4px;\n"]))),
      K = (function (e) {
        f()(o, e);
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
                r = y()(t);
              if (n) {
                var o = y()(this).constructor;
                e = Reflect.construct(r, arguments, o);
              } else e = r.apply(this, arguments);
              return g()(this, e);
            });
        function o() {
          return u()(this, o), r.apply(this, arguments);
        }
        return (
          p()(o, [
            {
              key: "renderResults",
              value: function () {
                return Object(w.createElement)(
                  w.Fragment,
                  null,
                  Object(w.createElement)(
                    q,
                    null,
                    Object(S.__)("Analysis results", "wordpress-seo"),
                    Object(w.createElement)(
                      U,
                      {
                        href: wpseoAdminL10n[
                          "shortlinks.readability_analysis_info"
                        ],
                        className: "dashicons",
                      },
                      Object(w.createElement)(
                        "span",
                        { className: "screen-reader-text" },
                        Object(S.__)(
                          "Learn more about the readability analysis",
                          "wordpress-seo"
                        )
                      )
                    )
                  ),
                  Object(w.createElement)(P.a, {
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
                  t = Object(x.a)(this.props.overallScore);
                return (
                  Object(R.isNil)(this.props.overallScore) &&
                    (t.className = "loading"),
                  Object(w.createElement)(
                    C.LocationConsumer,
                    null,
                    function (n) {
                      return "sidebar" === n
                        ? Object(w.createElement)(
                            D.a,
                            {
                              title: Object(S.__)(
                                "Readability analysis",
                                "wordpress-seo"
                              ),
                              titleScreenReaderText:
                                t.screenReaderReadabilityText,
                              prefixIcon: Object(A.getIconForScore)(
                                t.className
                              ),
                              prefixIconCollapsed: Object(A.getIconForScore)(
                                t.className
                              ),
                              id: "yoast-readability-analysis-collapsible-".concat(
                                n
                              ),
                            },
                            e.renderResults()
                          )
                        : "metabox" === n
                        ? Object(w.createElement)(
                            N,
                            { target: "wpseo-metabox-readability-root" },
                            Object(w.createElement)(
                              B,
                              null,
                              Object(w.createElement)(k.a, {
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
          o
        );
      })(w.Component);
    (K.propTypes = {
      results: E.a.array.isRequired,
      marksButtonStatus: E.a.string.isRequired,
      overallScore: E.a.number,
    }),
      (K.defaultProps = { overallScore: null }),
      (t.a = Object(v.withSelect)(function (e) {
        var t = e("yoast-seo/editor"),
          n = t.getReadabilityResults,
          r = t.getMarkButtonStatus;
        return F(F({}, n()), {}, { marksButtonStatus: r() });
      })(K));
  },
  function (e, t, n) {
    "use strict";
    var r,
      o = n(10),
      a = n.n(o),
      i = n(0),
      s = n(19),
      c = n(4),
      u = n(3),
      l = n(1),
      p = n.n(l),
      d = n(31),
      f = n.n(d),
      m = n(15),
      g = n.n(m),
      b = n(6),
      y = n(18),
      h = n(9),
      O = n(37),
      w = n.n(O),
      v = n(12),
      j = n.n(v),
      E = n(85),
      _ = n(48),
      T = j.a.div(r || (r = g()(["\n\tpadding: 16px;\n"]))),
      S = function (e, t, n) {
        var r = e.find(function (e) {
          return e.value === t;
        });
        return [
          {
            name: Object(u.sprintf)(
              /* translators: %1$s expands to the plural name of the current post type, %2$s expands to the current site wide default. */
              Object(u.__)("Default for %1$s (%2$s)", "wordpress-seo"),
              n,
              r ? r.name : ""
            ),
            value: "",
          },
        ].concat(f()(e));
      },
      R = function (e) {
        return Object(u.sprintf)(
          /* translators: %1$s expands to the plural name of the current post type, %2$s and %3$s expand to a link to the Search Appearance Settings page */
          Object(u.__)(
            "You can change the default type for %1$s in your %2$sSearch Appearance Settings%3$s.",
            "wordpress-seo"
          ),
          e,
          "{{link}}",
          "{{/link}}"
        );
      },
      k = function (e) {
        return Object(i.createElement)(b.FieldGroup, {
          label: e.helpTextTitle,
          linkTo: e.helpTextLink,
          linkText: Object(u.__)(
            "Learn more about structured data with Schema.org",
            "wordpress-seo"
          ),
          description: e.helpTextDescription,
        });
      };
    k.propTypes = {
      helpTextTitle: p.a.string.isRequired,
      helpTextLink: p.a.string.isRequired,
      helpTextDescription: p.a.string.isRequired,
    };
    var P = function (e) {
      return Object(i.createElement)(
        "p",
        null,
        e.helpTextDescription + " ",
        Object(i.createElement)(
          "a",
          { href: e.helpTextLink },
          Object(u.__)("Read more about Schema.", "wordpress-seo")
        )
      );
    };
    P.propTypes = {
      helpTextDescription: p.a.string.isRequired,
      helpTextLink: p.a.string.isRequired,
    };
    var D = function (e) {
      var t,
        n = S(e.pageTypeOptions, e.defaultPageType, e.postTypeName),
        r = S(e.articleTypeOptions, e.defaultArticleType, e.postTypeName),
        o = Object(_.isFeatureEnabled)("SCHEMA_BLOCKS");
      return Object(i.createElement)(
        i.Fragment,
        null,
        o ? Object(i.createElement)(P, e) : Object(i.createElement)(k, e),
        o &&
          Object(i.createElement)(y.Slot, {
            name: Object(h.join)(["yoast-schema-blocks-analysis", e.location]),
          }),
        Object(i.createElement)(b.FieldGroup, {
          label: Object(u.__)(
            "What type of page or content is this?",
            "wordpress-seo"
          ),
          linkTo: e.additionalHelpTextLink,
          linkText: Object(u.__)(
            "Learn more about page or content types",
            "wordpress-seo"
          ),
        }),
        Object(i.createElement)(b.Select, {
          id: Object(h.join)(["yoast-schema-page-type", e.location]),
          options: n,
          label: Object(u.__)("Page type", "wordpress-seo"),
          onChange: e.schemaPageTypeChange,
          selected: e.schemaPageTypeSelected,
        }),
        e.showArticleTypeInput &&
          Object(i.createElement)(b.Select, {
            id: Object(h.join)(["yoast-schema-article-type", e.location]),
            options: r,
            label: Object(u.__)("Article type", "wordpress-seo"),
            onChange: e.schemaArticleTypeChange,
            selected: e.schemaArticleTypeSelected,
          }),
        e.displayFooter &&
          Object(i.createElement)(
            "p",
            null,
            ((t = e.postTypeName),
            w()({
              mixedString: R(t),
              components: {
                link: Object(i.createElement)("a", {
                  href: "/4dm1n/admin.php?page=wpseo_titles#top#post-types",
                  target: "_blank",
                }),
              },
            }))
          )
      );
    };
    (D.propTypes = {
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
      (D.defaultProps = {
        schemaPageTypeChange: function () {},
        schemaPageTypeSelected: null,
        schemaArticleTypeChange: function () {},
        schemaArticleTypeSelected: null,
        displayFooter: !1,
      });
    var x = function (e) {
      return e.isMetabox
        ? Object(i.createPortal)(
            Object(i.createElement)(T, null, Object(i.createElement)(D, e)),
            document.getElementById("wpseo-meta-section-schema")
          )
        : Object(i.createElement)(D, e);
    };
    (x.propTypes = {
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
      (x.defaultProps = {
        showArticleTypeInput: !1,
        articleTypeLabel: "",
        additionalHelpTextLink: "",
        displayFooter: !1,
      });
    var A = x,
      C = n(33),
      I = n(58);
    function M(e, t) {
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
    function N(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? M(Object(n), !0).forEach(function (t) {
              a()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : M(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var L = function (e) {
      var t = null !== C.a.articleTypeInput;
      Object(i.useEffect)(function () {
        e.loadSchemaPageData(), t && e.loadSchemaArticleData();
      }, []);
      var n = window.wpseoScriptData.metabox.schema,
        r = n.pageTypeOptions,
        o = n.articleTypeOptions,
        a = {
          articleTypeLabel: Object(u.__)("Article type", "wordpress-seo"),
          pageTypeLabel: Object(u.__)("Page type", "wordpress-seo"),
          postTypeName: window.wpseoAdminL10n.postTypeNamePlural,
          helpTextTitle: Object(u.__)(
            "Yoast SEO automatically describes your pages using schema.org",
            "wordpress-seo"
          ),
          helpTextDescription: Object(u.__)(
            "This helps search engines understand your website and your content. You can change some of your settings for this page below.",
            "wordpress-seo"
          ),
          showArticleTypeInput: t,
          pageTypeOptions: r,
          articleTypeOptions: o,
        },
        s = N(
          N(N({}, e), a),
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
      return Object(i.createElement)(A, s);
    };
    (L.propTypes = {
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
      (t.a = Object(s.compose)([
        Object(c.withSelect)(function (e) {
          var t = e("yoast-seo/editor"),
            n = t.getPreferences,
            r = t.getPageType,
            o = t.getDefaultPageType,
            a = t.getArticleType,
            i = t.getDefaultArticleType;
          return {
            displayFooter: n().displaySchemaSettingsFooter,
            schemaPageTypeSelected: r(),
            schemaArticleTypeSelected: a(),
            defaultArticleType: i(),
            defaultPageType: o(),
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
        Object(I.a)(),
      ])(L));
  },
  function (e, t, n) {
    "use strict";
    var r = n(19),
      o = n(4),
      a = n(0),
      i = n(3),
      s = n(6),
      c = n(9),
      u = n(1),
      l = n.n(u),
      p = n(29),
      d = function (e) {
        var t = e.noIndex,
          n = e.onNoIndexChange,
          r = e.editorContext,
          o = e.isPrivateBlog,
          u = (function (e) {
            var t = Object(i.__)("No", "wordpress-seo"),
              n = Object(i.__)("Yes", "wordpress-seo"),
              r = e.noIndex ? t : n;
            return window.wpseoScriptData.isPost
              ? [
                  {
                    name: Object(i.sprintf)(
                      /* Translators: %s translates to "yes" or "no", %s translates to the Post Label in plural form */
                      Object(i.__)(
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
                    name: Object(i.sprintf)(
                      /* Translators: %s translates to the "yes" or "no" ,%s translates to the Post Label in plural form */
                      Object(i.__)(
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
        return Object(a.createElement)(p.LocationConsumer, null, function (e) {
          return Object(a.createElement)(
            a.Fragment,
            null,
            o &&
              Object(a.createElement)(
                s.Alert,
                { type: "warning" },
                Object(i.__)(
                  "Even though you can set the meta robots setting here, the entire site is set to noindex in the sitewide privacy settings, so these settings won't have an effect.",
                  "wordpress-seo"
                )
              ),
            Object(a.createElement)(s.Select, {
              label: Object(i.sprintf)(
                /* Translators: %s translates to the Post Label in singular form */
                Object(i.__)(
                  "Allow search engines to show this %s in search results?",
                  "wordpress-seo"
                ),
                r.postTypeNameSingular
              ),
              onChange: n,
              id: Object(c.join)(["yoast-meta-robots-noindex", e]),
              options: u,
              selected: t,
              linkTo:
                wpseoAdminL10n["shortlinks.advanced.allow_search_engines"],
              linkText: Object(i.__)(
                "Learn more about the no-index setting on our help page.",
                "wordpress-seo"
              ),
            })
          );
        });
      };
    (d.propTypes = {
      noIndex: l.a.string.isRequired,
      onNoIndexChange: l.a.func.isRequired,
      editorContext: l.a.object.isRequired,
      isPrivateBlog: l.a.bool,
    }),
      (d.defaultProps = { isPrivateBlog: !1 });
    var f = function (e) {
      var t = e.noFollow,
        n = e.onNoFollowChange,
        r = e.postTypeName;
      return Object(a.createElement)(p.LocationConsumer, null, function (e) {
        var o = Object(c.join)(["yoast-meta-robots-nofollow", e]);
        return Object(a.createElement)(s.RadioButtonGroup, {
          id: o,
          options: [
            { value: "0", label: "Yes" },
            { value: "1", label: "No" },
          ],
          label: Object(i.sprintf)(
            /* Translators: %s translates to the Post Label in singular form */
            Object(i.__)(
              "Should search engines follow links on this %s",
              "wordpress-seo"
            ),
            r
          ),
          groupName: o,
          onChange: n,
          selected: t,
          linkTo: wpseoAdminL10n["shortlinks.advanced.follow_links"],
          linkText: Object(i.__)(
            "Learn more about the no-follow setting on our help page.",
            "wordpress-seo"
          ),
        });
      });
    };
    f.propTypes = {
      noFollow: l.a.string.isRequired,
      onNoFollowChange: l.a.func.isRequired,
      postTypeName: l.a.string.isRequired,
    };
    var m = function (e) {
      var t = e.advanced,
        n = e.onAdvancedChange;
      return Object(a.createElement)(p.LocationConsumer, null, function (e) {
        var r = Object(c.join)(["yoast-meta-robots-advanced", e]),
          o = "".concat(r, "-input");
        return Object(a.createElement)(s.MultiSelect, {
          label: Object(i.__)("Meta robots advanced", "wordpress-seo"),
          onChange: n,
          id: r,
          inputId: o,
          options: [
            {
              name: Object(i.__)("No Image Index", "wordpress-seo"),
              value: "noimageindex",
            },
            {
              name: Object(i.__)("No Archive", "wordpress-seo"),
              value: "noarchive",
            },
            {
              name: Object(i.__)("No Snippet", "wordpress-seo"),
              value: "nosnippet",
            },
          ],
          selected: t,
          linkTo: wpseoAdminL10n["shortlinks.advanced.meta_robots"],
          linkText: Object(i.__)(
            "Learn more about advanced meta robots settings on our help page.",
            "wordpress-seo"
          ),
        });
      });
    };
    m.propTypes = {
      advanced: l.a.array.isRequired,
      onAdvancedChange: l.a.func.isRequired,
    };
    var g = function (e) {
      var t = e.breadcrumbsTitle,
        n = e.onBreadcrumbsTitleChange;
      return Object(a.createElement)(p.LocationConsumer, null, function (e) {
        return Object(a.createElement)(s.TextInput, {
          label: Object(i.__)("Breadcrumbs Title", "wordpress-seo"),
          id: Object(c.join)(["yoast-breadcrumbs-title", e]),
          onChange: n,
          value: t,
          linkTo: wpseoAdminL10n["shortlinks.advanced.breadcrumbs_title"],
          linkText: Object(i.__)(
            "Learn more about the breadcrumbs title setting on our help page.",
            "wordpress-seo"
          ),
        });
      });
    };
    g.propTypes = {
      breadcrumbsTitle: l.a.string.isRequired,
      onBreadcrumbsTitleChange: l.a.func.isRequired,
    };
    var b = function (e) {
      var t = e.canonical,
        n = e.onCanonicalChange;
      return Object(a.createElement)(p.LocationConsumer, null, function (e) {
        return Object(a.createElement)(s.TextInput, {
          label: Object(i.__)("Canonical URL", "wordpress-seo"),
          id: Object(c.join)(["yoast-canonical", e]),
          onChange: n,
          value: t,
          linkTo: "https://yoa.st/canonical-url",
          linkText: Object(i.__)(
            "Learn more about canonical URLs on our help page.",
            "wordpress-seo"
          ),
        });
      });
    };
    b.propTypes = {
      canonical: l.a.string.isRequired,
      onCanonicalChange: l.a.func.isRequired,
    };
    var y = function (e) {
      var t = e.noIndex,
        n = e.noFollow,
        r = e.advanced,
        o = e.breadcrumbsTitle,
        i = e.canonical,
        s = e.onNoIndexChange,
        c = e.onNoFollowChange,
        u = e.onAdvancedChange,
        l = e.onBreadcrumbsTitleChange,
        p = e.onCanonicalChange,
        y = e.onLoad,
        h = e.isLoading,
        O = e.editorContext,
        w = e.isBreadcrumbsDisabled,
        v = e.isPrivateBlog;
      Object(a.useEffect)(function () {
        setTimeout(function () {
          h && y();
        });
      });
      var j = {
          noIndex: t,
          onNoIndexChange: s,
          editorContext: O,
          isPrivateBlog: v,
        },
        E = {
          noFollow: n,
          onNoFollowChange: c,
          postTypeName: O.postTypeNameSingular,
        },
        _ = { advanced: r, onAdvancedChange: u },
        T = { breadcrumbsTitle: o, onBreadcrumbsTitleChange: l },
        S = { canonical: i, onCanonicalChange: p };
      return h
        ? null
        : Object(a.createElement)(
            a.Fragment,
            null,
            Object(a.createElement)(d, j),
            O.isPost && Object(a.createElement)(f, E),
            O.isPost && Object(a.createElement)(m, _),
            !w && Object(a.createElement)(g, T),
            Object(a.createElement)(b, S)
          );
    };
    (y.propTypes = {
      noIndex: l.a.string.isRequired,
      canonical: l.a.string.isRequired,
      onNoIndexChange: l.a.func.isRequired,
      onCanonicalChange: l.a.func.isRequired,
      onLoad: l.a.func.isRequired,
      isLoading: l.a.bool.isRequired,
      editorContext: l.a.object.isRequired,
      isBreadcrumbsDisabled: l.a.bool.isRequired,
      isPrivateBlog: l.a.bool,
      advanced: l.a.array,
      onAdvancedChange: l.a.func,
      noFollow: l.a.string,
      onNoFollowChange: l.a.func,
      breadcrumbsTitle: l.a.string,
      onBreadcrumbsTitleChange: l.a.func,
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
    var h = y;
    t.a = Object(r.compose)([
      Object(o.withSelect)(function (e) {
        var t = e("yoast-seo/editor"),
          n = t.getNoIndex,
          r = t.getNoFollow,
          o = t.getAdvanced,
          a = t.getBreadcrumbsTitle,
          i = t.getCanonical,
          s = t.getIsLoading,
          c = t.getEditorContext,
          u = (0, t.getPreferences)(),
          l = u.isBreadcrumbsDisabled,
          p = u.isPrivateBlog;
        return {
          noIndex: n(),
          noFollow: r(),
          advanced: o(),
          breadcrumbsTitle: a(),
          canonical: i(),
          isLoading: s(),
          editorContext: c(),
          isBreadcrumbsDisabled: l,
          isPrivateBlog: p,
        };
      }),
      Object(o.withDispatch)(function (e) {
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
    ])(h);
  },
  ,
  function (e, t, n) {
    "use strict";
    var r = n(17),
      o =
        ("function" == typeof Symbol &&
          Symbol.for &&
          Symbol.for("react.element")) ||
        60103,
      a = n(94),
      i = n(131),
      s = n(132),
      c = "function" == typeof Symbol && Symbol.iterator;
    function u(e, t) {
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
    var l = /\/+/g;
    function p(e) {
      return ("" + e).replace(l, "$&/");
    }
    var d,
      f,
      m = g,
      g = function (e) {
        if (this.instancePool.length) {
          var t = this.instancePool.pop();
          return this.call(t, e), t;
        }
        return new this(e);
      };
    function b(e, t, n, r) {
      (this.result = e),
        (this.keyPrefix = t),
        (this.func = n),
        (this.context = r),
        (this.count = 0);
    }
    function y(e, t, n) {
      var o,
        i,
        s = e.result,
        c = e.keyPrefix,
        u = e.func,
        l = e.context,
        d = u.call(l, t, e.count++);
      Array.isArray(d)
        ? h(d, s, n, a.thatReturnsArgument)
        : null != d &&
          (r.isValidElement(d) &&
            ((o = d),
            (i =
              c + (!d.key || (t && t.key === d.key) ? "" : p(d.key) + "/") + n),
            (d = r.cloneElement(
              o,
              { key: i },
              void 0 !== o.props ? o.props.children : void 0
            ))),
          s.push(d));
    }
    function h(e, t, n, r, a) {
      var s = "";
      null != n && (s = p(n) + "/");
      var l = b.getPooled(t, s, r, a);
      !(function (e, t, n) {
        null == e ||
          (function e(t, n, r, a) {
            var s,
              l = typeof t;
            if (
              (("undefined" !== l && "boolean" !== l) || (t = null),
              null === t ||
                "string" === l ||
                "number" === l ||
                ("object" === l && t.$$typeof === o))
            )
              return r(a, t, "" === n ? "." + u(t, 0) : n), 1;
            var p = 0,
              d = "" === n ? "." : n + ":";
            if (Array.isArray(t))
              for (var f = 0; f < t.length; f++)
                p += e((s = t[f]), d + u(s, f), r, a);
            else {
              var m = (function (e) {
                var t = e && ((c && e[c]) || e["@@iterator"]);
                if ("function" == typeof t) return t;
              })(t);
              if (m)
                for (var g, b = m.call(t), y = 0; !(g = b.next()).done; )
                  p += e((s = g.value), d + u(s, y++), r, a);
              else if ("object" === l) {
                var h = "" + t;
                i(
                  !1,
                  "Objects are not valid as a React child (found: %s).%s",
                  "[object Object]" === h
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : h,
                  ""
                );
              }
            }
            return p;
          })(e, "", t, n);
      })(e, y, l),
        b.release(l);
    }
    (b.prototype.destructor = function () {
      (this.result = null),
        (this.keyPrefix = null),
        (this.func = null),
        (this.context = null),
        (this.count = 0);
    }),
      (d = function (e, t, n, r) {
        if (this.instancePool.length) {
          var o = this.instancePool.pop();
          return this.call(o, e, t, n, r), o;
        }
        return new this(e, t, n, r);
      }),
      ((f = b).instancePool = []),
      (f.getPooled = d || m),
      f.poolSize || (f.poolSize = 10),
      (f.release = function (e) {
        i(
          e instanceof this,
          "Trying to release an instance into a pool of a different type."
        ),
          e.destructor(),
          this.instancePool.length < this.poolSize && this.instancePool.push(e);
      }),
      (e.exports = function (e) {
        if ("object" != typeof e || !e || Array.isArray(e))
          return (
            s(
              !1,
              "React.addons.createFragment only accepts a single object. Got: %s",
              e
            ),
            e
          );
        if (r.isValidElement(e))
          return (
            s(
              !1,
              "React.addons.createFragment does not accept a ReactElement without a wrapper object."
            ),
            e
          );
        i(
          1 !== e.nodeType,
          "React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components."
        );
        var t = [];
        for (var n in e) h(e[n], t, n, a.thatReturnsArgument);
        return t;
      });
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n, r, o, a, i, s) {
      if (!e) {
        var c;
        if (void 0 === t)
          c = new Error(
            "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
          );
        else {
          var u = [n, r, o, a, i, s],
            l = 0;
          (c = new Error(
            t.replace(/%s/g, function () {
              return u[l++];
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
      o = n(18),
      a = n(1),
      i = n.n(a),
      s = n(98),
      c = function (e) {
        return (
          Object(r.useEffect)(function () {
            setTimeout(e.onLoad);
          }, []),
          e.isPremium
            ? Object(r.createElement)(o.Slot, {
                name: "YoastTwitterPremium".concat(
                  e.location.charAt(0).toUpperCase() + e.location.slice(1)
                ),
                fillProps: e,
              })
            : Object(r.createElement)(s.a, e)
        );
      };
    (c.propTypes = {
      isPremium: i.a.bool.isRequired,
      onLoad: i.a.func.isRequired,
      location: i.a.string.isRequired,
    }),
      (t.a = c);
  },
  function (e, t) {
    e.exports = window.yoast.socialMetadataForms;
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      o = n(18),
      a = n(1),
      i = n.n(a),
      s = n(98),
      c = function (e) {
        return (
          Object(r.useEffect)(function () {
            setTimeout(e.onLoad);
          }, []),
          e.isPremium
            ? Object(r.createElement)(o.Slot, {
                name: "YoastFacebookPremium".concat(
                  e.location.charAt(0).toUpperCase() + e.location.slice(1)
                ),
                fillProps: e,
              })
            : Object(r.createElement)(s.a, e)
        );
      };
    (c.propTypes = {
      isPremium: i.a.bool.isRequired,
      onLoad: i.a.func.isRequired,
      location: i.a.string.isRequired,
    }),
      (t.a = c);
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return l;
    });
    var r = n(34),
      o = n.n(r),
      a = n(5),
      i = n.n(a),
      s = n(7),
      c = n.n(s),
      u = n(2),
      l = (function () {
        function e(t) {
          i()(this, e),
            (this.refresh = t),
            (this.loaded = !1),
            (this.preloadThreshold = 3e3),
            (this.plugins = {}),
            (this.modifications = {}),
            (this._registerPlugin = this._registerPlugin.bind(this)),
            (this._ready = this._ready.bind(this)),
            (this._reloaded = this._reloaded.bind(this)),
            (this._registerModification =
              this._registerModification.bind(this)),
            (this._registerAssessment = this._registerAssessment.bind(this)),
            (this._applyModifications = this._applyModifications.bind(this)),
            setTimeout(this._pollLoadingPlugins.bind(this), 1500);
        }
        return (
          c()(e, [
            {
              key: "_registerPlugin",
              value: function (e, t) {
                return Object(u.isString)(e)
                  ? Object(u.isUndefined)(t) || Object(u.isObject)(t)
                    ? !1 === this._validateUniqueness(e)
                      ? (console.error(
                          "Failed to register plugin. Plugin with name " +
                            e +
                            " already exists"
                        ),
                        !1)
                      : ((this.plugins[e] = t), !0)
                    : (console.error(
                        "Failed to register plugin " +
                          e +
                          ". Expected parameters `options` to be a object."
                      ),
                      !1)
                  : (console.error(
                      "Failed to register plugin. Expected parameter `pluginName` to be a string."
                    ),
                    !1);
              },
            },
            {
              key: "_ready",
              value: function (e) {
                return Object(u.isString)(e)
                  ? Object(u.isUndefined)(this.plugins[e])
                    ? (console.error(
                        "Failed to modify status for plugin " +
                          e +
                          ". The plugin was not properly registered."
                      ),
                      !1)
                    : ((this.plugins[e].status = "ready"), !0)
                  : (console.error(
                      "Failed to modify status for plugin " +
                        e +
                        ". Expected parameter `pluginName` to be a string."
                    ),
                    !1);
              },
            },
            {
              key: "_reloaded",
              value: function (e) {
                return Object(u.isString)(e)
                  ? Object(u.isUndefined)(this.plugins[e])
                    ? (console.error(
                        "Failed to reload Content Analysis for plugin " +
                          e +
                          ". The plugin was not properly registered."
                      ),
                      !1)
                    : (this.refresh(), !0)
                  : (console.error(
                      "Failed to reload Content Analysis for " +
                        e +
                        ". Expected parameter `pluginName` to be a string."
                    ),
                    !1);
              },
            },
            {
              key: "_registerModification",
              value: function (e, t, n, r) {
                if (!Object(u.isString)(e))
                  return (
                    console.error(
                      "Failed to register modification for plugin " +
                        n +
                        ". Expected parameter `modification` to be a string."
                    ),
                    !1
                  );
                if (!Object(u.isFunction)(t))
                  return (
                    console.error(
                      "Failed to register modification for plugin " +
                        n +
                        ". Expected parameter `callable` to be a function."
                    ),
                    !1
                  );
                if (!Object(u.isString)(n))
                  return (
                    console.error(
                      "Failed to register modification for plugin " +
                        n +
                        ". Expected parameter `pluginName` to be a string."
                    ),
                    !1
                  );
                if (!1 === this._validateOrigin(n))
                  return (
                    console.error(
                      "Failed to register modification for plugin " +
                        n +
                        ". The integration has not finished loading yet."
                    ),
                    !1
                  );
                var o = {
                  callable: t,
                  origin: n,
                  priority: Object(u.isNumber)(r) ? r : 10,
                };
                return (
                  Object(u.isUndefined)(this.modifications[e]) &&
                    (this.modifications[e] = []),
                  this.modifications[e].push(o),
                  !0
                );
              },
            },
            {
              key: "_registerAssessment",
              value: function (e, t, n, r) {
                return Object(u.isString)(t)
                  ? Object(u.isObject)(n)
                    ? Object(u.isString)(r)
                      ? ((t = r + "-" + t), e.addAssessment(t, n), !0)
                      : (console.error(
                          "Failed to register assessment for plugin " +
                            r +
                            ". Expected parameter `pluginName` to be a string."
                        ),
                        !1)
                    : (console.error(
                        "Failed to register assessment for plugin " +
                          r +
                          ". Expected parameter `assessment` to be a function."
                      ),
                      !1)
                  : (console.error(
                      "Failed to register test for plugin " +
                        r +
                        ". Expected parameter `name` to be a string."
                    ),
                    !1);
              },
            },
            {
              key: "_applyModifications",
              value: function (e, t, n) {
                var r = this.modifications[e];
                return (
                  !Object(u.isArray)(r) ||
                    r.length < 1 ||
                    ((r = this._stripIllegalModifications(r)).sort(function (
                      e,
                      t
                    ) {
                      return e.priority - t.priority;
                    }),
                    Object(u.forEach)(r, function (r) {
                      var a = r.callable(t, n);
                      o()(a) === o()(t)
                        ? (t = a)
                        : console.error(
                            "Modification with name " +
                              e +
                              " performed by plugin with name " +
                              r.origin +
                              " was ignored because the data that was returned by it was of a different type than the data we had passed it."
                          );
                    })),
                  t
                );
              },
            },
            {
              key: "_pollLoadingPlugins",
              value: function (e) {
                (e = Object(u.isUndefined)(e) ? 0 : e),
                  !0 === this._allReady()
                    ? ((this.loaded = !0), this.refresh())
                    : e >= this.preloadThreshold
                    ? (this._pollTimeExceeded(),
                      (this.loaded = !0),
                      this.refresh())
                    : ((e += 50),
                      setTimeout(this._pollLoadingPlugins.bind(this, e), 50));
              },
            },
            {
              key: "_allReady",
              value: function () {
                return Object(u.reduce)(
                  this.plugins,
                  function (e, t) {
                    return e && "ready" === t.status;
                  },
                  !0
                );
              },
            },
            {
              key: "_pollTimeExceeded",
              value: function () {
                Object(u.forEach)(this.plugins, function (e, t) {
                  Object(u.isUndefined)(e.options) ||
                    "ready" === e.options.status ||
                    (console.error(
                      "Error: Plugin " + t + ". did not finish loading in time."
                    ),
                    delete this.plugins[t]);
                });
              },
            },
            {
              key: "_stripIllegalModifications",
              value: function (e) {
                var t = this;
                return (
                  Object(u.forEach)(e, function (n, r) {
                    !1 === t._validateOrigin(n.origin) && delete e[r];
                  }),
                  e
                );
              },
            },
            {
              key: "_validateOrigin",
              value: function (e) {
                return "ready" === this.plugins[e].status;
              },
            },
            {
              key: "_validateUniqueness",
              value: function (e) {
                return Object(u.isUndefined)(this.plugins[e]);
              },
            },
          ]),
          e
        );
      })();
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(110);
    n.d(t, "DISMISS_ALERT", function () {
      return r.DISMISS_ALERT;
    });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    });
    var r = n(2),
      o = jQuery;
    function a(e, t, n, r) {
      (this._scriptUrl = r),
        (this._options = {
          usedKeywords: t.keyword_usage,
          searchUrl: t.search_url,
          postUrl: t.post_edit_url,
        }),
        (this._keywordUsage = t.keyword_usage),
        (this._postID = o("#post_ID, [name=tag_ID]").val()),
        (this._taxonomy = o("[name=taxonomy]").val() || ""),
        (this._ajaxAction = e),
        (this._refreshAnalysis = n),
        (this._initialized = !1);
    }
    (a.prototype.init = function () {
      var e = this,
        t = window.YoastSEO.analysis.worker;
      (this.requestKeywordUsage = Object(r.debounce)(
        this.requestKeywordUsage.bind(this),
        500
      )),
        t
          .loadScript(this._scriptUrl)
          .then(function () {
            t.sendMessage("initialize", e._options, "used-keywords-assessment");
          })
          .then(function () {
            (e._initialized = !0),
              Object(r.isEqual)(e._options.usedKeywords, e._keywordUsage)
                ? e._refreshAnalysis()
                : t
                    .sendMessage(
                      "updateKeywordUsage",
                      e._keywordUsage,
                      "used-keywords-assessment"
                    )
                    .then(function () {
                      return e._refreshAnalysis();
                    });
          })
          .catch(function (e) {
            return console.error(e);
          });
    }),
      (a.prototype.setKeyword = function (e) {
        Object(r.has)(this._keywordUsage, e) || this.requestKeywordUsage(e);
      }),
      (a.prototype.requestKeywordUsage = function (e) {
        o.post(
          ajaxurl,
          {
            action: this._ajaxAction,
            post_id: this._postID,
            keyword: e,
            taxonomy: this._taxonomy,
          },
          this.updateKeywordUsage.bind(this, e),
          "json"
        );
      }),
      (a.prototype.updateKeywordUsage = function (e, t) {
        var n = this,
          o = window.YoastSEO.analysis.worker;
        t &&
          Object(r.isArray)(t) &&
          ((this._keywordUsage[e] = t),
          this._initialized &&
            o
              .sendMessage(
                "updateKeywordUsage",
                this._keywordUsage,
                "used-keywords-assessment"
              )
              .then(function () {
                return n._refreshAnalysis();
              }));
      });
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    var r = n(75),
      o = n(10),
      a = n.n(o),
      i = n(44);
    function s(e, t) {
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
    function c(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? s(Object(n), !0).forEach(function (t) {
              a()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : s(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var u = {
        noIndex: "",
        noFollow: "",
        advanced: [],
        breadcrumbsTitle: "",
        canonical: "",
        isLoading: !0,
      },
      l = n(22),
      p = n(24);
    function d(e, t) {
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
    function f(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? d(Object(n), !0).forEach(function (t) {
              a()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : d(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var m = { snippet: {}, timestamp: 0 },
      g = n(113),
      b = n(2);
    function y() {
      return {
        contentLocale: Object(b.get)(
          window,
          "wpseoScriptData.metabox.contentLocale",
          ""
        ),
        isBlockEditor:
          "1" === Object(b.get)(window, "wpseoScriptData.isBlockEditor", "0"),
        isElementorEditor:
          "1" ===
          Object(b.get)(window, "wpseoScriptData.isElementorEditor", "0"),
        isPost: Object(b.get)(window, "wpseoScriptData", {}).hasOwnProperty(
          "isPost"
        ),
        isTerm: Object(b.get)(window, "wpseoScriptData", {}).hasOwnProperty(
          "isTerm"
        ),
        noIndex: "1" === Object(b.get)(window, "wpseoAdminL10n.noIndex", "0"),
        postTypeNameSingular: Object(b.get)(
          window,
          "wpseoAdminL10n.postTypeNameSingular",
          ""
        ),
        postTypeNamePlural: Object(b.get)(
          window,
          "wpseoAdminL10n.postTypeNamePlural",
          ""
        ),
      };
    }
    function h(e, t) {
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
    function O(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? h(Object(n), !0).forEach(function (t) {
              a()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : h(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var w = { content: "", excerpt: "", imageUrl: "", slug: "", title: "" };
    function v(e, t) {
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
    function j(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? v(Object(n), !0).forEach(function (t) {
              a()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : v(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var E = { openedModal: "" },
      _ = n(68);
    function T(e, t) {
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
    function S(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? T(Object(n), !0).forEach(function (t) {
              a()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : T(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var R = { estimatedReadingTime: 0 },
      k = n(50);
    function P(e, t) {
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
    function D(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? P(Object(n), !0).forEach(function (t) {
              a()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : P(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var x = {
        title: "",
        description: "",
        warnings: [],
        image: { url: "", id: "" },
      },
      A = n(61),
      C = n(60),
      I = n(76);
    function M(e, t) {
      return t.isMarkerPaused;
    }
    var N = n(45),
      L = n(66),
      F = n(56),
      q = n(20),
      B = function () {
        var e = Object(q.a)();
        return Object(b.get)(e, "wordFormRecognitionActive", !1);
      };
    function U() {
      var e = Object(q.a)();
      return 1 === Object(b.get)(e, "semrushIntegrationActive", 0);
    }
    function K() {
      var e = Object(q.a)();
      return 1 === Object(b.get)(e, "zapierIntegrationActive", 0);
    }
    function V() {
      var e = Object(q.a)();
      return 1 === Object(b.get)(e, "zapierConnectedStatus", 0);
    }
    function H() {
      var e,
        t = !!window.wpseoAdminL10n.displayAdvancedTab;
      return {
        isContentAnalysisActive: Object(L.a)(),
        isKeywordAnalysisActive: Object(F.a)(),
        isWordFormRecognitionActive:
          Object(b.isUndefined)(window.wpseoPremiumMetaboxData) && B(),
        isCornerstoneActive:
          ((e = Object(q.a)()), 1 === Object(b.get)(e, "cornerstoneActive", 0)),
        isBreadcrumbsDisabled: !!window.wpseoAdminL10n.isBreadcrumbsDisabled,
        isPrivateBlog: !!window.wpseoAdminL10n.isPrivateBlog,
        isSEMrushIntegrationActive: U(),
        shouldUpsell: Object(b.isUndefined)(window.wpseoPremiumMetaboxData),
        displayAdvancedTab: t,
        displaySchemaSettings: t && !!window.wpseoScriptData.isPost,
        displaySchemaSettingsFooter:
          window.wpseoScriptData.metabox.schema.displayFooter,
        displayFacebook: window.wpseoScriptData.metabox.showSocial.facebook,
        displayTwitter: window.wpseoScriptData.metabox.showSocial.twitter,
        isZapierIntegrationActive: K(),
        isZapierConnected: V(),
      };
    }
    var Y = n(77);
    function W(e, t) {
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
    function G(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? W(Object(n), !0).forEach(function (t) {
              a()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : W(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var z = {},
      $ = n(57);
    function Q(e, t) {
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
    function Z(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Q(Object(n), !0).forEach(function (t) {
              a()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Q(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var X = {
        pageType: "",
        defaultPageType: "",
        articleType: "",
        defaultArticleType: "",
      },
      J = { whichModalOpen: "none", displayNoKeyphraseMessage: !1 },
      ee = n(41);
    function te(e, t) {
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
    function ne(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? te(Object(n), !0).forEach(function (t) {
              a()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : te(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var re = {
        isRequestPending: !1,
        keyphrase: "",
        countryCode: "us",
        isSuccess: !1,
        response: null,
        limitReached: !1,
        hasData: !0,
        isLoggedIn: !1,
      },
      oe = n(114),
      ae = n(78);
    function ie(e, t) {
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
    function se(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ie(Object(n), !0).forEach(function (t) {
              a()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ie(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var ce = {},
      ue = n(116),
      le = n(49);
    function pe(e, t) {
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
    function de(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? pe(Object(n), !0).forEach(function (t) {
              a()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : pe(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var fe = {
        title: "",
        description: "",
        warnings: [],
        image: { url: "", id: "" },
      },
      me = n(79);
    function ge(e, t) {
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
    function be(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ge(Object(n), !0).forEach(function (t) {
              a()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : ge(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var ye = { message: [] };
    t.a = {
      activeMarker: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case r.a:
            return t.activeMarker;
          default:
            return e;
        }
      },
      advancedSettings: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case i.a:
            return c(c({}, e), t.settings);
          case i.f:
            return c(c({}, e), {}, { noIndex: t.value });
          case i.e:
            return c(c({}, e), {}, { noFollow: t.value });
          case i.b:
            return c(c({}, e), {}, { advanced: t.value });
          case i.d:
            return c(c({}, e), {}, { canonical: t.value });
          case i.c:
            return c(c({}, e), {}, { breadcrumbsTitle: t.value });
          default:
            return e;
        }
      },
      analysis: l.analysis,
      analysisData: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case p.UPDATE_SNIPPET_DATA:
            return f(f({}, e), {}, { snippet: t.data });
          case p.RUN_ANALYSIS:
            return f(f({}, e), {}, { timestamp: t.timestamp });
        }
        return e;
      },
      dismissedAlerts: g.a,
      editorContext: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y();
        return e;
      },
      editorData: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case p.SET_EDITOR_DATA_CONTENT:
            return O(O({}, e), {}, { content: t.content });
          case p.SET_EDITOR_DATA_EXCERPT:
            return O(O({}, e), {}, { excerpt: t.excerpt });
          case p.SET_EDITOR_DATA_IMAGE_URL:
            return O(O({}, e), {}, { imageUrl: t.imageUrl });
          case p.SET_EDITOR_DATA_SLUG:
            return O(O({}, e), {}, { slug: t.slug });
          case p.SET_EDITOR_DATA_TITLE:
            return O(O({}, e), {}, { title: t.title });
        }
        return e;
      },
      editorModals: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case p.OPEN_EDITOR_MODAL:
            return j(j({}, e), {}, { openedModal: t.modalKey });
          case p.CLOSE_EDITOR_MODAL:
            return j(j({}, e), {}, { openedModal: "" });
        }
        return e;
      },
      estimatedReadingTime: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case _.a:
          case _.b:
            return S(
              S({}, e),
              {},
              { estimatedReadingTime: t.estimatedReadingTime }
            );
          default:
            return e;
        }
      },
      facebookEditor: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case k.b:
            return D(
              D({}, e),
              {},
              {
                title: t.title,
                description: t.description,
                image: { id: t.id, url: t.imageUrl },
              }
            );
          case k.e:
            return D(D({}, e), {}, { title: t.title });
          case k.c:
            return D(D({}, e), {}, { description: t.description });
          case k.d:
            return D(
              D({}, e),
              {},
              {
                warnings: t.image.warnings,
                image: { id: t.image.id, url: t.image.url },
              }
            );
          case k.a:
            return D(
              D({}, e),
              {},
              { image: { url: "", id: "" }, warnings: [] }
            );
          default:
            return e;
        }
      },
      focusKeyword: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case A.a:
          case A.b:
            return t.keyword;
          default:
            return e;
        }
      },
      isCornerstone: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case C.c:
            return !e;
          case C.b:
            return t.isCornerstone;
          default:
            return e;
        }
      },
      isMarkerPaused: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case I.a:
            return M(0, t);
          default:
            return e;
        }
      },
      marksButtonStatus: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "disabled",
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case N.a:
            return t.marksButtonStatus;
          default:
            return e;
        }
      },
      preferences: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H();
        return e;
      },
      primaryTaxonomies: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case Y.a:
            return G(G({}, e), {}, a()({}, t.taxonomy, t.termId));
          default:
            return e;
        }
      },
      schemaTab: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : X,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case $.d:
            return Z(Z({}, e), {}, { pageType: t.pageType });
          case $.c:
            return Z(Z({}, e), {}, { articleType: t.articleType });
          case $.b:
            return Z(
              Z({}, e),
              {},
              { pageType: t.pageType, defaultPageType: t.defaultPageType }
            );
          case $.a:
            return Z(
              Z({}, e),
              {},
              {
                articleType: t.articleType,
                defaultArticleType: t.defaultArticleType,
              }
            );
          default:
            return e;
        }
      },
      SEMrushModal: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case p.MODAL_OPEN_NO_KEYPHRASE:
            return { whichModalOpen: "none", displayNoKeyphraseMessage: !0 };
          case p.MODAL_OPEN:
            return {
              whichModalOpen: t.location,
              displayNoKeyphraseMessage: !1,
            };
          case p.MODAL_DISMISS:
            return { whichModalOpen: "none", displayNoKeyphraseMessage: !1 };
        }
        return e;
      },
      SEMrushRequest: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : re,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case ee.b:
            return ne(
              ne({}, e),
              {},
              {
                isRequestPending: !0,
                keyphrase: t.keyphrase,
                countryCode: t.countryCode,
                isSuccess: !1,
                response: null,
              }
            );
          case ee.g:
            return ne(
              ne({}, e),
              {},
              {
                isRequestPending: !1,
                isSuccess: !0,
                response: t.response,
                hasData: !0,
              }
            );
          case ee.e:
            return ne(
              ne({}, e),
              {},
              {
                isRequestPending: !1,
                isSuccess: !1,
                response: t.response,
                hasData: !1,
              }
            );
          case ee.f:
            return ne(
              ne({}, e),
              {},
              { isRequestPending: !1, limitReached: !0, hasData: !1 }
            );
          case ee.a:
            return ne(ne({}, e), {}, { countryCode: t.countryCode });
          case ee.c:
            return ne(
              ne({}, e),
              {},
              {
                isSuccess: !0,
                isRequestPending: !1,
                hasData: !1,
                response: null,
              }
            );
          case ee.d:
            return ne(ne({}, e), {}, { isLoggedIn: t.loginStatus });
          default:
            return e;
        }
      },
      settings: oe.a,
      shoppingData: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ce,
          t = arguments.length > 1 ? arguments[1] : void 0;
        if (t.type === ae.a) {
          var n = Object(b.pick)(t.shoppingData, [
            "rating",
            "reviewCount",
            "availability",
            "price",
          ]);
          return se(se({}, e), n);
        }
        return e;
      },
      snippetEditor: ue.a,
      twitterEditor: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fe,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case le.b:
            return de(
              de({}, e),
              {},
              {
                title: t.title,
                description: t.description,
                image: { id: t.id, url: t.imageUrl },
              }
            );
          case le.e:
            return de(de({}, e), {}, { title: t.title });
          case le.c:
            return de(de({}, e), {}, { description: t.description });
          case le.d:
            return de(
              de({}, e),
              {},
              {
                image: { id: t.image.id, url: t.image.url },
                warnings: t.image.warnings,
              }
            );
          case le.a:
            return de(
              de({}, e),
              {},
              { image: { url: "", id: "" }, warnings: [] }
            );
          default:
            return e;
        }
      },
      warning: function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ye,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case me.a:
            return be(be({}, e), {}, { message: t.message });
          default:
            return e;
        }
      },
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
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return d;
    });
    var r = n(4),
      o = n(2),
      a = n(23);
    function i(e) {
      window.YoastSEO.analysis.worker
        .runResearch("readingTime", new a.Paper(e, {}))
        .then(function (e) {
          Object(r.dispatch)("yoast-seo/editor").setEstimatedReadingTime(
            e.result
          );
        });
    }
    var s = Object(o.debounce)(i, 1500, { maxWait: 3e3 }),
      c = "",
      u = null;
    function l() {
      var e = Object(r.select)("core/editor").getCurrentPostId(),
        t = Object(r.select)("core/editor").getCurrentPostType(),
        n = Object(r.select)("core").getEditedEntityRecord("postType", t, e);
      if (u !== n) {
        u = n;
        var o = Object(r.select)("core/editor").getEditedPostAttribute(
          "content"
        );
        c !== o && ((c = o), i(o));
      }
    }
    function p() {
      var e = Object(r.select)("yoast-seo/editor").getEditorDataContent();
      c !== e && ((c = e), i(e));
    }
    function d() {
      var e, t;
      !1 !==
        Object(o.get)(
          window,
          "wpseoScriptData.analysis.estimatedReadingTimeEnabled",
          !1
        ) &&
        (Object(r.dispatch)("yoast-seo/editor").loadEstimatedReadingTime(),
        "1" === window.wpseoScriptData.isElementorEditor
          ? Object(r.subscribe)(Object(o.debounce)(p, 1500, { maxWait: 3e3 }))
          : "1" === window.wpseoScriptData.isBlockEditor
          ? Object(r.subscribe)(Object(o.debounce)(l, 1500, { maxWait: 3e3 }))
          : ((e = ["input", "change", "cut", "paste"]),
            (t =
              "1" === Object(o.get)(window, "wpseoScriptData.isPost", "0")
                ? "content"
                : "description"),
            jQuery(document).on("tinymce-editor-init", function (n, r) {
              r.id === t &&
                e.forEach(function (e) {
                  r.on(e, function () {
                    s(r.getContent());
                  });
                });
            })));
    }
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
    var r = {};
    n.r(r),
      n.d(r, "authorFirstName", function () {
        return Se;
      }),
      n.d(r, "authorLastName", function () {
        return Re;
      }),
      n.d(r, "currentDate", function () {
        return ke;
      }),
      n.d(r, "currentDay", function () {
        return Pe;
      }),
      n.d(r, "currentMonth", function () {
        return De;
      }),
      n.d(r, "category", function () {
        return xe;
      }),
      n.d(r, "categoryTitle", function () {
        return Ae;
      }),
      n.d(r, "currentYear", function () {
        return Ce;
      }),
      n.d(r, "date", function () {
        return Ie;
      }),
      n.d(r, "excerpt", function () {
        return Me;
      }),
      n.d(r, "focusKeyphrase", function () {
        return Ne;
      }),
      n.d(r, "id", function () {
        return Le;
      }),
      n.d(r, "modified", function () {
        return Fe;
      }),
      n.d(r, "name", function () {
        return qe;
      }),
      n.d(r, "page", function () {
        return Be;
      }),
      n.d(r, "pageNumber", function () {
        return Ue;
      }),
      n.d(r, "pageTotal", function () {
        return Ke;
      }),
      n.d(r, "permalink", function () {
        return Ve;
      }),
      n.d(r, "postContent", function () {
        return He;
      }),
      n.d(r, "postDay", function () {
        return Ye;
      }),
      n.d(r, "postMonth", function () {
        return We;
      }),
      n.d(r, "postYear", function () {
        return Ge;
      }),
      n.d(r, "postTypeNamePlural", function () {
        return ze;
      }),
      n.d(r, "postTypeNameSingular", function () {
        return Qe;
      }),
      n.d(r, "primaryCategory", function () {
        return Ze;
      }),
      n.d(r, "searchPhrase", function () {
        return Xe;
      }),
      n.d(r, "separator", function () {
        return Je;
      }),
      n.d(r, "siteDescription", function () {
        return et;
      }),
      n.d(r, "siteName", function () {
        return tt;
      }),
      n.d(r, "tag", function () {
        return nt;
      }),
      n.d(r, "term404", function () {
        return rt;
      }),
      n.d(r, "termDescription", function () {
        return ot;
      }),
      n.d(r, "termHierarchy", function () {
        return at;
      }),
      n.d(r, "termTitle", function () {
        return it;
      }),
      n.d(r, "title", function () {
        return st;
      }),
      n.d(r, "userDescription", function () {
        return ct;
      });
    var o = {};
    n.r(o),
      n.d(o, "getAnalysisData", function () {
        return Qt;
      });
    var a = {};
    n.r(a),
      n.d(a, "updateData", function () {
        return Jt;
      }),
      n.d(a, "loadSnippetEditorData", function () {
        return en;
      });
    var i = n(4),
      s = n(64),
      c = n(151),
      u = null,
      l = function () {
        if (null === u) {
          var e = Object(i.dispatch)("yoast-seo/editor").runAnalysis;
          u = new c.a(e);
        }
        return u;
      },
      p = function (e) {
        return l()._ready(e);
      },
      d = function (e) {
        return l()._reloaded(e);
      },
      f = function (e, t, n, r) {
        return l()._registerModification(e, t, n, r);
      },
      m = function (e, t) {
        return l()._registerPlugin(e, t);
      },
      g = function (e, t, n) {
        return l().loaded ? l()._applyModifications(e, t, n) : t;
      },
      b = n(62),
      y = n(46),
      h = n.n(y),
      O = n(47),
      w = n.n(O),
      v = n(26),
      j = n.n(v),
      E = n(2),
      _ = n(23),
      T = n(104),
      S = n(74),
      R = n(86),
      k = n(118);
    function P() {
      return (P = w()(
        j.a.mark(function e(t, n) {
          var r, o, a, s, c, u, l, p;
          return j.a.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = n.text),
                      (o = h()(n, ["text"])),
                      (a = new _.Paper(r, o)),
                      (e.prev = 2),
                      (e.next = 5),
                      t.analyze(a)
                    );
                  case 5:
                    (s = e.sent),
                      (c = s.result),
                      (u = c.seo),
                      (l = c.readability),
                      u &&
                        (((p = u[""]).results = Object(
                          R.sortResultsByIdentifier
                        )(p.results)),
                        Object(i.dispatch)(
                          "yoast-seo/editor"
                        ).setSeoResultsForKeyword(a.getKeyword(), p.results),
                        Object(i.dispatch)(
                          "yoast-seo/editor"
                        ).setOverallSeoScore(p.score, a.getKeyword())),
                      l &&
                        ((l.results = Object(R.sortResultsByIdentifier)(
                          l.results
                        )),
                        Object(i.dispatch)(
                          "yoast-seo/editor"
                        ).setReadabilityResults(l.results),
                        Object(i.dispatch)(
                          "yoast-seo/editor"
                        ).setOverallReadabilityScore(l.score)),
                      (e.next = 14);
                    break;
                  case 11:
                    (e.prev = 11), (e.t0 = e.catch(2)), Object(S.a)();
                  case 14:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[2, 11]]
          );
        })
      )).apply(this, arguments);
    }
    var D = Object(E.debounce)(function (_x, e) {
      return P.apply(this, arguments);
    }, T.refreshDelay);
    function x() {
      var e = (function (e) {
        return (
          (e.title = g("data_page_title", e.title)),
          (e.title = g("title", e.title)),
          (e.description = g("data_meta_desc", e.description)),
          (e.text = g("content", e.text)),
          e
        );
      })((0, Object(i.select)("yoast-seo/editor").getAnalysisData)());
      return Object(s.applyFilters)("yoast.analysis.data", e);
    }
    var A = n(0),
      C = n(3),
      I = n(12),
      M = n(5),
      N = n.n(M),
      L = n(7),
      F = n.n(L),
      q = n(13),
      B = n.n(q),
      U = n(14),
      K = n.n(U),
      V = n(8),
      H = n.n(V);
    function Y(e) {
      var t = (function () {
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
      })();
      return function () {
        var n,
          r = H()(e);
        if (t) {
          var o = H()(this).constructor;
          n = Reflect.construct(r, arguments, o);
        } else n = r.apply(this, arguments);
        return K()(this, n);
      };
    }
    var W = (function (e) {
        B()(n, e);
        var t = Y(n);
        function n(e, r, o) {
          var a;
          return (
            N()(this, n),
            ((a = t.call(this)).hook = e),
            (a.id = r),
            (a.callback = o),
            a
          );
        }
        return (
          F()(n, [
            {
              key: "getCommand",
              value: function () {
                return this.hook;
              },
            },
            {
              key: "getId",
              value: function () {
                return this.id;
              },
            },
            {
              key: "apply",
              value: function () {
                return this.callback();
              },
            },
          ]),
          n
        );
      })($e.modules.hookUI.Base),
      G = (function (e) {
        B()(n, e);
        var t = Y(n);
        function n(e, r, o) {
          var a;
          return (
            N()(this, n),
            ((a = t.call(this)).hook = e),
            (a.id = r),
            (a.callback = o),
            a
          );
        }
        return (
          F()(n, [
            {
              key: "getCommand",
              value: function () {
                return this.hook;
              },
            },
            {
              key: "getId",
              value: function () {
                return this.id;
              },
            },
            {
              key: "apply",
              value: function () {
                return this.callback();
              },
            },
          ]),
          n
        );
      })($e.modules.hookData.Base);
    function z(e, t, n) {
      $e.hooks.registerUIAfter(new W(e, t, n));
    }
    var $ = n(31),
      Q = n.n($),
      Z = n(18),
      X = n(20),
      J = n(103);
    var ee = [],
      te = null,
      ne = (function (e) {
        B()(o, e);
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
                r = H()(t);
              if (n) {
                var o = H()(this).constructor;
                e = Reflect.construct(r, arguments, o);
              } else e = r.apply(this, arguments);
              return K()(this, e);
            });
        function o(e) {
          var t;
          return (
            N()(this, o),
            ((t = r.call(this, e)).state = { registeredComponents: [] }),
            t
          );
        }
        return (
          F()(o, [
            {
              key: "registerComponent",
              value: function (e, t) {
                this.setState({
                  registeredComponents: [].concat(
                    Q()(this.state.registeredComponents),
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
                  return Object(A.createElement)(t, { key: n });
                });
              },
            },
          ]),
          o
        );
      })(A.Component);
    function re(e, t) {
      null === te || null === te.current
        ? ee.push({ key: e, Component: t })
        : te.current.registerComponent(e, t);
    }
    var oe = n(120);
    function ae() {
      return Object(A.createElement)(
        Z.Slot,
        { name: "YoastElementor" },
        function (e) {
          return Object(oe.a)(e);
        }
      );
    }
    var ie = n(19),
      se = n(1),
      ce = n.n(se),
      ue = n(124),
      le = n(6);
    function pe(e) {
      return 0 === e.message.length
        ? null
        : Object(A.createElement)(le.Alert, { type: e.type }, e.message);
    }
    pe.propTypes = {
      message: ce.a.oneOfType([ce.a.array, ce.a.string]).isRequired,
      type: ce.a.string.isRequired,
    };
    var de = Object(i.withSelect)(function (e) {
        return {
          message: (0, e("yoast-seo/editor").getWarningMessage)(),
          type: "info",
        };
      })(pe),
      fe = n(125),
      me = n(126),
      ge = n(122),
      be = n(32),
      ye = n(84),
      he = n(10),
      Oe = n.n(he),
      we = n(27),
      ve = n.n(we),
      je = n(147),
      Ee = n(112),
      _e = n(58),
      Te = n(9),
      Se = {
        name: "author_first_name",
        label: "Author first name",
        placeholder: "%%author_first_name%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.author_first_name",
            ""
          );
        },
        regexp: new RegExp("%%author_first_name%%", "g"),
      },
      Re = {
        name: "author_last_name",
        label: "Author last name",
        placeholder: "%%author_last_name%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.author_last_name",
            ""
          );
        },
        regexp: new RegExp("%%author_last_name%%", "g"),
      },
      ke = {
        name: "currentdate",
        label: "Current date",
        placeholder: "%%currentdate%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.currentdate",
            ""
          );
        },
        regexp: new RegExp("%%currentdate%%", "g"),
      },
      Pe = {
        name: "currentday",
        label: "Current day",
        placeholder: "%%currentday%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.currentday",
            ""
          );
        },
        regexp: new RegExp("%%currentday%%", "g"),
      },
      De = {
        name: "currentmonth",
        label: "Current month",
        placeholder: "%%currentmonth%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.currentmonth",
            ""
          );
        },
        regexp: new RegExp("%%currentmonth%%", "g"),
      },
      xe = {
        name: "category",
        label: "Category",
        placeholder: "%%category%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.category",
            ""
          );
        },
        regexp: new RegExp("%%category%%", "g"),
      },
      Ae = {
        name: "category_title",
        label: "Category Title",
        placeholder: "%%category_title%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.category_title",
            ""
          );
        },
        regexp: new RegExp("%%category_title%%", "g"),
      },
      Ce = {
        name: "currentyear",
        label: "Current year",
        placeholder: "%%currentyear%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.currentyear",
            ""
          );
        },
        regexp: new RegExp("%%currentyear%%", "g"),
      },
      Ie = {
        name: "date",
        label: "Date",
        placeholder: "%%date%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.date",
            ""
          );
        },
        regexp: new RegExp("%%date%%", "g"),
      },
      Me = {
        name: "excerpt",
        label: "Excerpt",
        placeholder: "%%excerpt%%",
        aliases: [
          {
            name: "excerpt_only",
            label: "Excerpt only",
            placeholder: "%%excerpt_only%%",
          },
        ],
        getReplacement: function () {
          return Object(i.select)(
            "yoast-seo/editor"
          ).getEditorDataExcerptWithFallback();
        },
        regexp: new RegExp("%%excerpt%%|%%excerpt_only%%", "g"),
      },
      Ne = {
        name: "focuskw",
        label: "Focus keyphrase",
        placeholder: "%%focuskw%%",
        aliases: [],
        getReplacement: function () {
          return Object(i.select)("yoast-seo/editor").getFocusKeyphrase();
        },
        regexp: new RegExp("%%focuskw%%|%%keyword%%", "g"),
      },
      Le = {
        name: "id",
        label: "ID",
        placeholder: "%%id%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.id",
            ""
          );
        },
        regexp: new RegExp("%%id%%", "g"),
      },
      Fe = {
        name: "modified",
        label: "Modified",
        placeholder: "%%modified%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.modified",
            ""
          );
        },
        regexp: new RegExp("%%modified%%", "g"),
      },
      qe = {
        name: "name",
        label: "Name",
        placeholder: "%%name%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.name",
            ""
          );
        },
        regexp: new RegExp("%%name%%", "g"),
      },
      Be = {
        name: "page",
        label: "Page",
        placeholder: "%%page%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.page",
            ""
          );
        },
        regexp: new RegExp("%%page%%", "g"),
      },
      Ue = {
        name: "pagenumber",
        label: "Pagenumber",
        placeholder: "%%pagenumber%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.pagenumber",
            ""
          );
        },
        regexp: new RegExp("%%pagenumber%%", "g"),
      },
      Ke = {
        name: "pagetotal",
        label: "Pagetotal",
        placeholder: "%%pagetotal%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.pagetotal",
            ""
          );
        },
        regexp: new RegExp("%%pagetotal%%", "g"),
      },
      Ve = {
        name: "permalink",
        label: "Permalink",
        placeholder: "%%permalink%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.permalink",
            ""
          );
        },
        regexp: new RegExp("%%permalink%%", "g"),
      },
      He = {
        name: "post_content",
        label: "Post Content",
        placeholder: "%%post_content%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.post_content",
            ""
          );
        },
        regexp: new RegExp("%%post_content%%", "g"),
      },
      Ye = {
        name: "post_day",
        label: "Post Day",
        placeholder: "%%post_day%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.post_day",
            ""
          );
        },
        regexp: new RegExp("%%post_day%%", "g"),
      },
      We = {
        name: "post_month",
        label: "Post Month",
        placeholder: "%%post_month%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.post_month",
            ""
          );
        },
        regexp: new RegExp("%%post_month%%", "g"),
      },
      Ge = {
        name: "post_year",
        label: "Post Year",
        placeholder: "%%post_year%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.post_year",
            ""
          );
        },
        regexp: new RegExp("%%post_year%%", "g"),
      },
      ze = {
        name: "pt_plural",
        label: "Post type (plural)",
        placeholder: "%%pt_plural%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.pt_plural",
            ""
          );
        },
        regexp: new RegExp("%%pt_plural%%", "g"),
      },
      Qe = {
        name: "pt_single",
        label: "Post type (singular)",
        placeholder: "%%pt_single%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.pt_single",
            ""
          );
        },
        regexp: new RegExp("%%pt_single%%", "g"),
      },
      Ze = {
        name: "primary_category",
        label: "Primary category",
        placeholder: "%%primary_category%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.primary_category",
            ""
          );
        },
        regexp: new RegExp("%%primary_category%%", "g"),
      },
      Xe = {
        name: "searchphrase",
        label: "Search phrase",
        placeholder: "%%searchphrase%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.searchphrase",
            ""
          );
        },
        regexp: new RegExp("%%searchphrase%%", "g"),
      },
      Je = {
        name: "sep",
        label: "Separator",
        placeholder: "%%sep%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.sep",
            ""
          );
        },
        regexp: new RegExp("%%sep%%(\\s*%%sep%%)*", "g"),
      },
      et = {
        name: "sitedesc",
        label: "Tagline",
        placeholder: "%%sitedesc%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.sitedesc",
            ""
          );
        },
        regexp: new RegExp("%%sitedesc%%", "g"),
      },
      tt = {
        name: "sitename",
        label: "Site title",
        placeholder: "%%sitename%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.sitename",
            ""
          );
        },
        regexp: new RegExp("%%sitename%%", "g"),
      },
      nt = {
        name: "tag",
        label: "Tag",
        placeholder: "%%tag%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.tag",
            ""
          );
        },
        regexp: new RegExp("%%tag%%", "g"),
      },
      rt = {
        name: "term404",
        label: "Term404",
        placeholder: "%%term404%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.term404",
            ""
          );
        },
        regexp: new RegExp("%%term404%%", "g"),
      },
      ot = {
        name: "term_description",
        label: "Term description",
        placeholder: "%%term_description%%",
        aliases: [
          {
            name: "tag_description",
            label: "Tag description",
            placeholder: "%%tag_description%%",
          },
          {
            name: "category_description",
            label: "Category description",
            placeholder: "%%category_description%%",
          },
        ],
        getReplacement: function () {
          return Object(E.get)(window, "YoastSEO.app.rawData.text", "");
        },
        regexp: new RegExp(
          "%%term_description%%|%%tag_description%%|%%category_description%%",
          "g"
        ),
      },
      at = {
        name: "term_hierarchy",
        label: "Term hierarchy",
        placeholder: "%%term_hierarchy%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.term_hierarchy",
            ""
          );
        },
        regexp: new RegExp("%%term_hierarchy%%", "g"),
      },
      it = {
        name: "term_title",
        label: "Term title",
        placeholder: "%%term_title%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.term_title",
            ""
          );
        },
        regexp: new RegExp("%%term_title%%", "g"),
      },
      st = {
        name: "title",
        label: "Title",
        placeholder: "%%title%%",
        aliases: [],
        getReplacement: function () {
          return Object(i.select)("yoast-seo/editor").getEditorDataTitle();
        },
        regexp: new RegExp("%%title%%", "g"),
      },
      ct = {
        name: "user_description",
        label: "User description",
        placeholder: "%%user_description%%",
        aliases: [],
        getReplacement: function () {
          return Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.replace_vars.user_description",
            ""
          );
        },
        regexp: new RegExp("%%user_description%%", "g"),
      },
      ut = n(28),
      lt = null,
      pt = null,
      dt = function (e) {
        [
          "content",
          "title",
          "snippet_title",
          "snippet_meta",
          "primary_category",
          "data_page_title",
          "data_meta_desc",
          "excerpt",
        ].forEach(function (t) {
          f(t, e, "replaceVariablePlugin", 10);
        });
      },
      ft = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        switch (
          ("" === e &&
            (e = Object(E.get)(
              window,
              "wpseoScriptData.analysis.plugins.replaceVars.scope",
              ""
            )),
          e)
        ) {
          case "post":
          case "page":
            return [
              "authorFirstName",
              "authorLastName",
              "category",
              "categoryTitle",
              "currentDate",
              "currentDay",
              "currentMonth",
              "currentYear",
              "date",
              "excerpt",
              "id",
              "focusKeyphrase",
              "modified",
              "name",
              "page",
              "primaryCategory",
              "pageNumber",
              "pageTotal",
              "permalink",
              "postContent",
              "postDay",
              "postMonth",
              "postYear",
              "postTypeNamePlural",
              "postTypeNameSingular",
              "searchPhrase",
              "separator",
              "siteDescription",
              "siteName",
              "tag",
              "title",
              "userDescription",
            ];
        }
        return [];
      },
      mt = function (e) {
        return dt(function (t) {
          return t.replace(new RegExp(e.placeholder, "g"), e.replacement);
        });
      },
      gt = function () {
        if (null === pt) {
          pt = [];
          var e = Object(E.get)(
            window,
            "wpseoScriptData.analysis.plugins.replaceVars.hidden_replace_vars",
            []
          );
          (null === lt &&
            (lt = ft().map(function (e) {
              return r[e];
            })),
          lt).forEach(function (t) {
            var n = e.includes(t.name);
            pt.push({
              name: t.name,
              label: t.label,
              value: t.placeholder,
              hidden: n,
            }),
              t.aliases.forEach(function (e) {
                pt.push({
                  name: e.name,
                  label: e.label,
                  value: e.placeholder,
                  hidden: n,
                });
              });
          });
        }
        return pt;
      };
    var bt = Te.strings.stripHTMLTags,
      yt = function (e, t) {
        var n = Object(i.select)(
          "yoast-seo/editor"
        ).getSnippetEditorTemplates();
        "" === e.title && (e.title = n.title),
          "" === e.description && (e.description = n.description);
        var r = 0;
        return (
          t.shortenedBaseUrl &&
            "string" == typeof t.shortenedBaseUrl &&
            (r = t.shortenedBaseUrl.length),
          (e.url = e.url.replace(/\s+/g, "-")),
          "-" === e.url[e.url.length - 1] && (e.url = e.url.slice(0, -1)),
          "-" === e.url[r] && (e.url = e.url.slice(0, r) + e.url.slice(r + 1)),
          {
            url: e.url,
            title: bt(g("data_page_title", e.title)),
            description: bt(g("data_meta_desc", e.description)),
          }
        );
      },
      ht = function (e) {
        var t = e.isLoading,
          n = e.onLoad,
          r = e.location,
          o = h()(e, ["isLoading", "onLoad", "location"]);
        return (
          Object(A.useEffect)(function () {
            setTimeout(function () {
              t && n();
            });
          }),
          t
            ? null
            : Object(A.createElement)(
                Ee.a,
                { icon: "eye", hasPaperStyle: o.hasPaperStyle },
                Object(A.createElement)(
                  je.SnippetEditor,
                  ve()({}, o, {
                    descriptionPlaceholder: Object(C.__)(
                      "Please provide a meta description by editing the snippet below.",
                      "wordpress-seo"
                    ),
                    mapEditorDataToPreview: yt,
                    showCloseButton: !1,
                    idSuffix: r,
                  })
                )
              )
        );
      };
    ht.propTypes = {
      isLoading: ce.a.bool.isRequired,
      onLoad: ce.a.func.isRequired,
      hasPaperStyle: ce.a.bool.isRequired,
      location: ce.a.string.isRequired,
    };
    var Ot = Object(ie.compose)([
        Object(i.withSelect)(function (e) {
          var t = e("yoast-seo/editor"),
            n = t.getBaseUrlFromSettings,
            r = t.getDateFromSettings,
            o = t.getEditorDataImageUrl,
            a = t.getFocusKeyphrase,
            i = t.getRecommendedReplaceVars,
            s = t.getSiteIconUrlFromSettings,
            c = t.getSnippetEditorData,
            u = t.getSnippetEditorIsLoading,
            l = t.getSnippetEditorMode,
            p = t.getSnippetEditorWordsToHighlight,
            d = t.isCornerstoneContent;
          return {
            baseUrl: n(),
            data: c(),
            date: r(),
            faviconSrc: s(),
            isLoading: u(),
            keyword: a(),
            mobileImageSrc: o(),
            mode: l(),
            recommendedReplacementVariables: i(),
            replacementVariables: gt(),
            wordsToHighlight: p(),
            isCornerstone: d(),
          };
        }),
        Object(i.withDispatch)(function (e) {
          var t = e("yoast-seo/editor"),
            n = t.updateData,
            r = t.switchMode,
            o = t.updateAnalysisData;
          return {
            onChange: function (e, t) {
              switch (e) {
                case "mode":
                  r(t);
                  break;
                case "slug":
                  n({ slug: t });
                  break;
                default:
                  n(Oe()({}, e, t));
              }
            },
            onChangeAnalysisData: function (e) {
              o(e);
            },
            onLoad: t.loadSnippetEditorData,
          };
        }),
        Object(_e.a)(),
      ])(ht),
      wt = function () {
        return Object(A.createElement)(
          ye.a,
          {
            title: Object(C.__)("Google preview", "wordpress-seo"),
            id: "yoast-google-preview-modal",
          },
          Object(A.createElement)(Ot, {
            showCloseButton: !1,
            hasPaperStyle: !1,
          })
        );
      },
      vt = n(148),
      jt = null,
      Et = function () {
        return (jt ||
          (jt = window.wp.media()).on("select", function () {
            var e = jt.state().get("selection").first(),
              t = {
                type: e.attributes.subtype,
                width: e.attributes.width,
                height: e.attributes.height,
              };
            Object(i.dispatch)("yoast-seo/editor").setTwitterPreviewImage({
              url: e.attributes.url,
              id: e.attributes.id,
              warnings: Object(Te.validateTwitterImage)(t),
            });
          }),
        jt).open();
      },
      _t = Object(ie.compose)([
        Object(i.withSelect)(function (e) {
          var t = e("yoast-seo/editor"),
            n = t.getTwitterDescription,
            r = t.getTwitterTitle,
            o = t.getTwitterImageUrl,
            a = t.getFacebookImageUrl,
            i = t.getFacebookTitle,
            s = t.getFacebookDescription,
            c = t.getDescription,
            u = t.getSeoTitle,
            l = t.getTwitterWarnings,
            p = t.getTwitterImageType,
            d = t.getEditorDataImageFallback,
            f = t.getRecommendedReplaceVars,
            m = t.getSiteUrl,
            g = t.getAuthorName,
            b = t.getSeoTitleTemplate,
            y = t.getSeoTitleTemplateNoFallback,
            h = t.getSocialTitleTemplate,
            O = t.getSeoDescriptionTemplate,
            w = t.getSocialDescriptionTemplate,
            v = t.getEditorDataExcerptWithFallback,
            j = Object(C.sprintf)(
              /* Translators: %s expands to the social medium name, i.e. Faceboook. */
              Object(C.__)(
                "Modify your %s title by editing it right here...",
                "wordpress-seo"
              ),
              "Twitter"
            ),
            E = Object(C.sprintf)(
              /* Translators: %s expands to the social medium name, i.e. Faceboook. */
              Object(C.__)(
                "Modify your %s description by editing it right here...",
                "wordpress-seo"
              ),
              "Twitter"
            );
          /* Translators: %s expands to the social medium name, i.e. Faceboook. */ return {
            imageUrl: o(),
            imageFallbackUrl: a() || d(),
            recommendedReplacementVariables: f(),
            replacementVariables: gt(),
            description: n(),
            descriptionPreviewFallback: w() || s() || c() || O() || v() || E,
            title: r(),
            titlePreviewFallback: h() || i() || u() || y() || b() || j,
            imageWarnings: l(),
            authorName: g(),
            siteUrl: m(),
            isPremium: !!Object(X.a)().isPremium,
            isLarge: "summary" !== p(),
            titleInputPlaceholder: j,
            descriptionInputPlaceholder: E,
            socialMediumName: "Twitter",
          };
        }),
        Object(i.withDispatch)(function (e) {
          var t = e("yoast-seo/editor"),
            n = t.setTwitterPreviewTitle,
            r = t.setTwitterPreviewDescription,
            o = t.clearTwitterPreviewImage,
            a = t.loadTwitterPreviewData;
          return {
            onSelectImageClick: Et,
            onRemoveImageClick: o,
            onDescriptionChange: r,
            onTitleChange: n,
            onLoad: a,
          };
        }),
        Object(_e.a)(),
      ])(vt.a),
      Tt = function () {
        return Object(A.createElement)(
          ye.a,
          {
            title: Object(C.__)("Twitter preview", "wordpress-seo"),
            id: "yoast-twitter-preview-modal",
          },
          Object(A.createElement)(_t, null)
        );
      },
      St = n(150),
      Rt = null,
      kt = function () {
        return (Rt ||
          (Rt = window.wp.media()).on("select", function () {
            var e = Rt.state().get("selection").first(),
              t = {
                type: e.attributes.subtype,
                width: e.attributes.width,
                height: e.attributes.height,
              };
            Object(i.dispatch)("yoast-seo/editor").setFacebookPreviewImage({
              url: e.attributes.url,
              id: e.attributes.id,
              warnings: Object(Te.validateFacebookImage)(t),
            });
          }),
        Rt).open();
      },
      Pt = Object(ie.compose)([
        Object(i.withSelect)(function (e) {
          var t = e("yoast-seo/editor"),
            n = t.getFacebookDescription,
            r = t.getDescription,
            o = t.getFacebookTitle,
            a = t.getSeoTitle,
            i = t.getFacebookImageUrl,
            s = t.getEditorDataImageFallback,
            c = t.getFacebookWarnings,
            u = t.getRecommendedReplaceVars,
            l = t.getSiteUrl,
            p = t.getAuthorName,
            d = t.getSeoTitleTemplate,
            f = t.getSeoTitleTemplateNoFallback,
            m = t.getSocialTitleTemplate,
            g = t.getSeoDescriptionTemplate,
            b = t.getSocialDescriptionTemplate,
            y = t.getEditorDataExcerptWithFallback,
            h = Object(C.sprintf)(
              /* Translators: %s expands to the social medium name, i.e. Faceboook. */
              Object(C.__)(
                "Modify your %s title by editing it right here...",
                "wordpress-seo"
              ),
              "Facebook"
            ),
            O = Object(C.sprintf)(
              /* Translators: %s expands to the social medium name, i.e. Faceboook. */
              Object(C.__)(
                "Modify your %s description by editing it right here...",
                "wordpress-seo"
              ),
              "Facebook"
            );
          /* Translators: %s expands to the social medium name, i.e. Faceboook. */ return {
            imageUrl: i(),
            imageFallbackUrl: s(),
            recommendedReplacementVariables: u(),
            replacementVariables: gt(),
            description: n(),
            descriptionPreviewFallback: b() || r() || g() || y() || O,
            title: o(),
            titlePreviewFallback: m() || a() || f() || d() || h,
            imageWarnings: c(),
            authorName: p(),
            siteUrl: l(),
            isPremium: !!Object(X.a)().isPremium,
            titleInputPlaceholder: h,
            descriptionInputPlaceholder: O,
            socialMediumName: "Facebook",
          };
        }),
        Object(i.withDispatch)(function (e) {
          var t = e("yoast-seo/editor"),
            n = t.setFacebookPreviewTitle,
            r = t.setFacebookPreviewDescription,
            o = t.clearFacebookPreviewImage,
            a = t.loadFacebookPreviewData;
          return {
            onSelectImageClick: kt,
            onRemoveImageClick: o,
            onDescriptionChange: r,
            onTitleChange: n,
            onLoad: a,
          };
        }),
        Object(_e.a)(),
      ])(St.a),
      Dt = function () {
        return Object(A.createElement)(
          ye.a,
          {
            title: Object(C.__)("Facebook preview", "wordpress-seo"),
            id: "yoast-facebook-preview-modal",
          },
          Object(A.createElement)(Pt, null)
        );
      },
      xt = n(51),
      At = n(127),
      Ct = n(128),
      It = n(115);
    function Mt(e) {
      var t = e.isLoading,
        n = e.onLoad,
        r = e.settings;
      return (
        Object(A.useEffect)(function () {
          setTimeout(function () {
            t && n();
          });
        }),
        t
          ? null
          : Object(A.createElement)(
              Z.Fill,
              { name: "YoastElementor" },
              Object(A.createElement)(
                be.a,
                { renderPriority: 1 },
                Object(A.createElement)(de, null)
              ),
              r.isKeywordAnalysisActive &&
                Object(A.createElement)(
                  be.a,
                  { renderPriority: 8 },
                  Object(A.createElement)(fe.a, {
                    isSEMrushIntegrationActive: r.isSEMrushIntegrationActive,
                  }),
                  !window.wpseoScriptData.metabox.isPremium &&
                    Object(A.createElement)(
                      Z.Fill,
                      { name: "YoastRelatedKeyphrases" },
                      Object(A.createElement)(It.a, null)
                    )
                ),
              Object(A.createElement)(
                be.a,
                { renderPriority: 23 },
                Object(A.createElement)(wt, null)
              ),
              r.displayFacebook &&
                Object(A.createElement)(
                  be.a,
                  { renderPriority: 24 },
                  Object(A.createElement)(Dt, null)
                ),
              r.displayTwitter &&
                Object(A.createElement)(
                  be.a,
                  { renderPriority: 25 },
                  Object(A.createElement)(Tt, null)
                ),
              r.displaySchemaSettings &&
                Object(A.createElement)(
                  be.a,
                  { renderPriority: 26 },
                  Object(A.createElement)(
                    xt.a,
                    { title: Object(C.__)("Schema", "wordpress-seo") },
                    Object(A.createElement)(At.a, null)
                  )
                ),
              r.displayAdvancedTab &&
                Object(A.createElement)(
                  be.a,
                  { renderPriority: 27 },
                  Object(A.createElement)(
                    xt.a,
                    { title: Object(C.__)("Advanced", "wordpress-seo") },
                    Object(A.createElement)(Ct.a, { location: "sidebar" })
                  )
                ),
              r.isContentAnalysisActive &&
                Object(A.createElement)(
                  be.a,
                  { renderPriority: 10 },
                  Object(A.createElement)(me.a, null)
                ),
              r.isKeywordAnalysisActive &&
                Object(A.createElement)(
                  be.a,
                  { renderPriority: 20 },
                  Object(A.createElement)(ge.a, {
                    shouldUpsell: r.shouldUpsell,
                    shouldUpsellWordFormRecognition:
                      r.isWordFormRecognitionActive,
                  })
                ),
              r.isCornerstoneActive &&
                Object(A.createElement)(
                  be.a,
                  { renderPriority: 30 },
                  Object(A.createElement)(ue.a, null)
                )
            )
      );
    }
    Mt.propTypes = {
      isLoading: ce.a.bool.isRequired,
      onLoad: ce.a.func.isRequired,
      settings: ce.a.object.isRequired,
    };
    var Nt,
      Lt = Object(ie.compose)([
        Object(i.withSelect)(function (e) {
          var t = e("yoast-seo/editor"),
            n = t.getPreferences,
            r = t.getSnippetEditorIsLoading;
          return { settings: n(), isLoading: r() };
        }),
        Object(i.withDispatch)(function (e) {
          return { onLoad: e("yoast-seo/editor").loadSnippetEditorData };
        }),
      ])(Mt),
      Ft = !1;
    function qt(e) {
      e.oldValue = e.value;
    }
    function Bt() {
      Nt.forEach(function (e) {
        return qt(e);
      });
    }
    var Ut = Object(E.debounce)(
      function () {
        var e;
        Ft &&
          /* Translators: %1$s translates to the Post Label in singular form */
          (e = Object(C.sprintf)(
            Object(C.__)(
              "Unfortunately we cannot save changes to your SEO settings while you are working on a draft of an already-published %1$s. If you want to save your SEO changes, make sure to click 'Update', or wait to make your SEO changes until you are ready to update the %1$s.",
              "wordpress-seo"
            ),
            window.wpseoAdminL10n.postTypeNameSingular.toLowerCase()
          )),
          "draft" === window.elementor.settings.page.model.get("post_status") &&
            (e = ""),
          Object(i.dispatch)("yoast-seo/editor").setWarningMessage(e);
      },
      500,
      { trailing: !0 }
    );
    function Kt(e) {
      "yoast_wpseo_linkdex" !== e.name &&
        "yoast_wpseo_content_score" !== e.name &&
        "yoast_wpseo_words_for_linking" !== e.name &&
        e.value !== e.oldValue &&
        ((Ft = !0),
        Ut(),
        window.$e.internal("document/save/set-is-modified", { status: !0 }),
        qt(e));
    }
    function Vt(e) {
      Ft = !1;
      var t = jQuery(e)
        .serializeArray()
        .reduce(function (e, t) {
          var n = t.name,
            r = t.value;
          return (e[n] = r), e;
        }, {});
      jQuery.post(e.getAttribute("action"), t, function (e, n, r) {
        var o = e.success,
          a = e.data;
        o
          ? (Object(s.doAction)("yoast.elementor.save.success", r),
            a.slug &&
              a.slug !== t.slug &&
              Object(i.dispatch)("yoast-seo/editor").updateData({
                slug: a.slug,
              }),
            Bt(),
            Ut())
          : (Ft = !0);
      });
    }
    function Ht() {
      (window.YoastSEO = window.YoastSEO || {}),
        (window.YoastSEO._registerReactComponent = re),
        window.$e.routes.on("run:after", function (e, t) {
          "panel/page-settings/yoast-tab" === t &&
            (function (e, t) {
              var n = Object(X.a)();
              te = Object(A.createRef)();
              var r = { isRtl: n.isRtl };
              Object(A.render)(
                Object(A.createElement)(
                  J.a,
                  { theme: r, location: "sidebar" },
                  Object(A.createElement)(
                    Z.SlotFillProvider,
                    null,
                    Object(A.createElement)(
                      A.Fragment,
                      null,
                      t,
                      Object(A.createElement)(ne, { ref: te })
                    )
                  )
                ),
                document.getElementById(
                  "elementor-panel-page-settings-controls"
                )
              ),
                ee.forEach(function (e) {
                  te.current.registerComponent(e.key, e.Component);
                });
            })(
              0,
              Object(A.createElement)(
                I.StyleSheetManager,
                { target: document.getElementById("elementor-panel-inner") },
                Object(A.createElement)(
                  "div",
                  { className: "yoast yoast-elementor-panel__fills" },
                  Object(A.createElement)(ae, null),
                  Object(A.createElement)(Lt, null)
                )
              )
            );
        }),
        window.elementor.settings.page.model.on("change", function (e) {
          e.changed && e.changed.post_status && Ut();
        });
      var e,
        t = Vt.bind(null, document.getElementById("yoast-form"));
      (e = function () {
        window.elementor.config.document.id ===
          window.elementor.config.document.revisions.current_id && t();
      }),
        $e.hooks.registerDataAfter(
          new G("document/save/save", "yoast-seo-save", e)
        ),
        window.elementor.modules.layouts.panel.pages.menu.Menu.addItem(
          {
            name: "yoast",
            icon: "yoast yoast-element-menu-icon",
            title: "Yoast SEO",
            type: "page",
            callback: function () {
              try {
                window.$e.routes.run("panel/page-settings/yoast-tab");
              } catch (e) {
                window.$e.routes.run("panel/page-settings/settings"),
                  window.$e.routes.run("panel/page-settings/yoast-tab");
              }
            },
          },
          "more"
        ),
        (Nt = document.querySelectorAll("input[name^='yoast']")),
        Bt(),
        setInterval(function () {
          return Nt.forEach(Kt);
        }, 500);
    }
    var Yt = n(185),
      Wt = n(156),
      Gt = n(24),
      zt = n(73),
      $t = n(71),
      Qt = function (e) {
        var t = Object($t.getSnippetEditorTitleWithTemplate)(e),
          n = Object($t.getSnippetEditorDescriptionWithTemplate)(e),
          r = Object($t.getSnippetEditorSlug)(e),
          o = Object($t.getBaseUrlFromSettings)(e);
        return (
          (t = Te.strings.stripHTMLTags(g("data_page_title", t))),
          (n = Te.strings.stripHTMLTags(g("data_meta_desc", n))),
          (r = r.trim().replace(/\s+/g, "-")),
          {
            text: Object($t.getEditorDataContent)(e),
            title: t,
            keyword: Object($t.getFocusKeyphrase)(e),
            description: n,
            locale: Object($t.getContentLocale)(e),
            titleWidth: Object(zt.a)(t),
            url: r,
            permalink: o + r,
            date: Object($t.getDateFromSettings)(e),
          }
        );
      },
      Zt = n(152),
      Xt = (function () {
        function e() {
          N()(this, e);
        }
        return (
          F()(e, null, [
            {
              key: "titleElement",
              get: function () {
                return document.getElementById(
                  window.wpseoScriptData.isPost
                    ? "yoast_wpseo_title"
                    : "hidden_wpseo_title"
                );
              },
            },
            {
              key: "descriptionElement",
              get: function () {
                return document.getElementById(
                  window.wpseoScriptData.isPost
                    ? "yoast_wpseo_metadesc"
                    : "hidden_wpseo_desc"
                );
              },
            },
            {
              key: "slugElement",
              get: function () {
                return document.getElementById("yoast_wpseo_slug");
              },
            },
            {
              key: "title",
              get: function () {
                return e.titleElement.value;
              },
              set: function (t) {
                e.titleElement.value = t;
              },
            },
            {
              key: "description",
              get: function () {
                return e.descriptionElement.value;
              },
              set: function (t) {
                e.descriptionElement.value = t;
              },
            },
            {
              key: "slug",
              get: function () {
                return e.slugElement.value;
              },
              set: function (t) {
                e.slugElement.value = t;
              },
            },
          ]),
          e
        );
      })();
    function Jt(e) {
      if (e.hasOwnProperty("title")) {
        var t = e.title;
        e.title ===
          Object(E.get)(window, "wpseoScriptData.metabox.title_template", "") &&
          (t = ""),
          (Xt.title = t);
      }
      if (e.hasOwnProperty("description")) {
        var n = e.description;
        e.description ===
          Object(E.get)(
            window,
            "wpseoScriptData.metabox.metadesc_template",
            ""
          ) && (n = ""),
          (Xt.description = n);
      }
      return (
        e.hasOwnProperty("slug") && (Xt.slug = e.slug),
        { type: Gt.UPDATE_DATA, data: e }
      );
    }
    var en = function () {
      var e = Object(E.get)(
          window,
          "wpseoScriptData.metabox.title_template",
          ""
        ),
        t = Object(E.get)(
          window,
          "wpseoScriptData.metabox.metadesc_template",
          ""
        );
      return {
        type: Gt.LOAD_SNIPPET_EDITOR_DATA,
        data: {
          title: Xt.title || e,
          description: Xt.description || t,
          slug: Xt.slug,
        },
        templates: { title: e, description: t },
      };
    };
    function tn(e, t) {
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
    function nn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? tn(Object(n), !0).forEach(function (t) {
              Oe()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : tn(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var rn = n(153),
      on = { content: "", title: "", excerpt: "", slug: "", imageUrl: "" };
    function an(e) {
      var t = window.elementor.settings.page.model.get("post_featured_image"),
        n = Object(E.get)(t, "url", "");
      return "" === n
        ? (function (e) {
            var t = _.languageProcessing.imageInText(e),
              n = "";
            if (0 === t.length) return "";
            do {
              var r = t.shift(),
                o = (r = jQuery(r)).prop("src");
              o && (n = o);
            } while ("" === n && t.length > 0);
            return n;
          })(e)
        : n;
    }
    var sn = Object(E.debounce)(function () {
      var e = window.elementor.documents.getCurrent();
      if (["wp-post", "wp-page"].includes(e.config.type)) {
        var t,
          n = {
            content: (t = (function (e) {
              var t = [];
              return (
                e.$element
                  .find(".elementor-widget-container")
                  .each(function (e, n) {
                    t.push(n.innerHTML.trim());
                  }),
                t.join("")
              );
            })(e)),
            title: window.elementor.settings.page.model.get("post_title"),
            excerpt:
              window.elementor.settings.page.model.get("post_excerpt") || "",
            imageUrl: an(t),
          };
        n.content !== on.content &&
          ((on.content = n.content),
          Object(i.dispatch)("yoast-seo/editor").setEditorDataContent(
            on.content
          )),
          n.title !== on.title &&
            ((on.title = n.title),
            Object(i.dispatch)("yoast-seo/editor").setEditorDataTitle(
              on.title
            )),
          n.excerpt !== on.excerpt &&
            ((on.excerpt = n.excerpt),
            Object(i.dispatch)("yoast-seo/editor").setEditorDataExcerpt(
              on.excerpt
            )),
          n.imageUrl !== on.imageUrl &&
            ((on.imageUrl = n.imageUrl),
            Object(i.dispatch)("yoast-seo/editor").setEditorDataImageUrl(
              on.imageUrl
            ));
      }
    }, 500);
    function cn(e, t) {
      var n = Object(i.dispatch)("yoast-seo/editor").updateWordsToHighlight;
      e("morphology", new _.Paper("", { keyword: t }))
        .then(function (e) {
          var t = e.result.keyphraseForms;
          n(Object(E.uniq)(Object(E.flatten)(t)));
        })
        .catch(function () {
          n([]);
        });
    }
    var un = Object(E.debounce)(cn, 500);
    function ln() {
      var e, t, n, c;
      (window.YoastSEO = window.YoastSEO || {}),
        (window.YoastSEO.store =
          ((function (e) {
            e.dispatch(Gt.loadCornerstoneContent()),
              e.dispatch(Gt.loadFocusKeyword()),
              e.dispatch(Gt.setMarkerStatus("hidden")),
              e.dispatch(
                Gt.setSettings({
                  socialPreviews: {
                    sitewideImage:
                      window.wpseoScriptData.metabox.sitewide_social_image,
                    authorName: window.wpseoScriptData.metabox.author_name,
                    siteName: window.wpseoScriptData.metabox.site_name,
                    contentImage:
                      window.wpseoScriptData.metabox.first_content_image,
                    twitterCardType:
                      window.wpseoScriptData.metabox.twitterCardType,
                  },
                  snippetEditor: {
                    baseUrl: window.wpseoScriptData.metabox.base_url,
                    date: window.wpseoScriptData.metabox.metaDescriptionDate,
                    recommendedReplacementVariables:
                      window.wpseoScriptData.analysis.plugins.replaceVars
                        .recommended_replace_vars,
                    siteIconUrl: window.wpseoScriptData.metabox.siteIconUrl,
                  },
                })
              );
            var t = window.wpseoScriptData.metabox.showSocial,
              n = t.facebook,
              r = t.twitter;
            n && e.dispatch(Gt.loadFacebookPreviewData()),
              r && e.dispatch(Gt.loadTwitterPreviewData()),
              e.dispatch(
                Gt.setSEMrushChangeCountry(
                  window.wpseoScriptData.metabox.countryCode
                )
              ),
              e.dispatch(
                Gt.setSEMrushLoginStatus(
                  window.wpseoScriptData.metabox.SEMrushLoginStatus
                )
              );
          })(
            (c = Object(i.registerStore)("yoast-seo/editor", {
              reducer: Object(i.combineReducers)(Wt.a),
              selectors: nn(nn({}, $t), o),
              actions: Object(E.pickBy)(nn(nn({}, Gt), a), function (e) {
                return "function" == typeof e;
              }),
              controls: Zt,
            }))
          ),
          c)),
        z(
          "editor/documents/attach-preview",
          "yoast-seo-content-scraper-attach-preview",
          sn
        ),
        z(
          "document/save/set-is-modified",
          "yoast-seo-content-scraper-on-modified",
          sn
        ),
        (window.YoastSEO.pluginReady = p),
        (window.YoastSEO.pluginReloaded = d),
        (window.YoastSEO.registerModification = f),
        (window.YoastSEO.registerPlugin = m),
        (window.YoastSEO.applyModifications = g),
        (window.YoastSEO.analysis = window.YoastSEO.analysis || {}),
        (window.YoastSEO.analysis.run = Object(i.dispatch)(
          "yoast-seo/editor"
        ).runAnalysis),
        (window.YoastSEO.analysis.worker = (function () {
          var e = Object(i.select)("yoast-seo/editor"),
            t = e.getAnalysisTimestamp,
            n = e.isCornerstoneContent,
            r = Object(k.a)();
          r.initialize(Object(k.b)({ useCornerstone: n() })).catch(S.a);
          var o = x(),
            a = n(),
            s = t();
          return (
            Object(i.subscribe)(function () {
              var e = n(),
                i = x(),
                c = t();
              if (e !== a)
                return (
                  (a = e),
                  (o = i),
                  void r
                    .initialize({ useCornerstone: e })
                    .then(function () {
                      return D(r, i);
                    })
                    .catch(S.a)
                );
              (c === s && !1 !== Object(E.isEqual)(i, o)) ||
                ((o = i), (s = c), D(r, i));
            }),
            r
          );
        })()),
        (window.YoastSEO.analysis.collectData = x),
        m("replaceVariablePlugin", { status: "ready" }),
        ft().forEach(function (e) {
          var t,
            n,
            o,
            a =
              ((n = (t = r[e]).getReplacement),
              (o = t.regexp),
              function (e) {
                return e.replace(o, n());
              });
          dt(a);
        }),
        (window.YoastSEO.wp = window.YoastSEO.wp || {}),
        (window.YoastSEO.wp.replaceVarsPlugin = {
          addReplacement: mt,
          ReplaceVar: ut.a,
        }),
        (function () {
          var e = Object(X.a)(),
            t = Object(E.get)(
              window,
              [
                "wpseoScriptData",
                "analysis",
                "worker",
                "keywords_assessment_url",
              ],
              "used-keywords-assessment.js"
            ),
            n = new rn.a(
              "get_focus_keyword_usage",
              e,
              Object(i.dispatch)("yoast-seo/editor").runAnalysis,
              t
            );
          n.init();
          var r = "";
          Object(i.subscribe)(function () {
            var e = Object(i.select)("yoast-seo/editor").getFocusKeyphrase();
            e !== r && ((r = e), n.setKeyword(e));
          });
        })(),
        Object(Yt.a)(),
        (e = window.YoastSEO.analysis.worker.runResearch),
        (t = Object(i.select)("yoast-seo/editor").getFocusKeyphrase),
        (n = t()),
        cn(e, n),
        Object(i.subscribe)(function () {
          var r = t();
          n !== r && ((n = r), un(e, r));
        }),
        (function () {
          if (
            !0 !==
            window.elementor.config.user.introduction["yoast-introduction"]
          ) {
            var e = new window.elementorModules.editor.utils.Introduction({
              introductionKey: "yoast-introduction",
              dialogOptions: {
                id: "yoast-introduction",
                className: "elementor-right-click-introduction",
                headerMessage: Object(C.__)(
                  "New: Yoast SEO for Elementor",
                  "wordpress-seo"
                ),
                message: Object(C.__)(
                  "Get started with Yoast SEO's content analysis for Elementor!",
                  "wordpress-seo"
                ),
                position: { my: "left top", at: "right top", autoRefresh: !0 },
                hide: { onOutsideClick: !1 },
              },
              onDialogInitCallback: function (t) {
                window.$e.routes.on("run:after", function (e, n) {
                  "panel/menu" === n && t.getElements("ok").click();
                }),
                  t.addButton({
                    name: "ok",
                    text: Object(C.__)("Got it", "wordpress-seo"),
                    callback: function () {
                      return e.setViewed();
                    },
                  }),
                  t
                    .getElements("ok")
                    .addClass("elementor-button elementor-button-success");
              },
            });
            setTimeout(function t() {
              try {
                e.show(
                  window.elementor.getPanelView().header.currentView.ui
                    .menuButton[0]
                );
              } catch (e) {
                setTimeout(t, 100);
              }
            }, 100);
          }
        })(),
        Ht(),
        Object(s.doAction)("yoast.elementor.loaded");
    }
    Object(b.setYoastComponentsL10n)(),
      Object(b.setWordPressSeoL10n)(),
      jQuery(window).on("elementor:init", function () {
        window.elementor.on("panel:init", function () {
          setTimeout(ln);
        });
      });
  },
]);

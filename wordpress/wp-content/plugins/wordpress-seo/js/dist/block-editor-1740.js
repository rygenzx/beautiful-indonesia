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
    n((n.s = 348));
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
        return l;
      }),
      n.d(t, "h", function () {
        return u;
      }),
      n.d(t, "b", function () {
        return d;
      }),
      n.d(t, "l", function () {
        return p;
      }),
      n.d(t, "m", function () {
        return f;
      }),
      n.d(t, "n", function () {
        return m;
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
      o = "SNIPPET_EDITOR_SWITCH_MODE",
      a = "SNIPPET_EDITOR_UPDATE_DATA",
      i = "SNIPPET_EDITOR_UPDATE_REPLACEMENT_VARIABLE",
      s = "SNIPPET_EDITOR_HIDE_REPLACEMENT_VARIABLES",
      c = "SNIPPET_EDITOR_REMOVE_REPLACEMENT_VARIABLE",
      l = "SNIPPET_EDITOR_REFRESH",
      u = "SNIPPET_EDITOR_UPDATE_WORDS_TO_HIGHLIGHT",
      d = "LOAD_SNIPPET_EDITOR_DATA";
    function p(e) {
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
        return l;
      }),
      n.d(t, "runAnalysis", function () {
        return u;
      }),
      n.d(t, "LOAD_CORNERSTONE_CONTENT", function () {
        return d.a;
      }),
      n.d(t, "TOGGLE_CORNERSTONE_CONTENT", function () {
        return d.c;
      }),
      n.d(t, "SET_CORNERSTONE_CONTENT", function () {
        return d.b;
      }),
      n.d(t, "loadCornerstoneContent", function () {
        return d.d;
      }),
      n.d(t, "setCornerstoneContent", function () {
        return d.e;
      }),
      n.d(t, "toggleCornerstoneContent", function () {
        return d.f;
      }),
      n.d(t, "SET_EDITOR_DATA_CONTENT", function () {
        return p;
      }),
      n.d(t, "SET_EDITOR_DATA_TITLE", function () {
        return f;
      }),
      n.d(t, "SET_EDITOR_DATA_EXCERPT", function () {
        return m;
      }),
      n.d(t, "SET_EDITOR_DATA_IMAGE_URL", function () {
        return b;
      }),
      n.d(t, "setEditorDataContent", function () {
        return h;
      }),
      n.d(t, "setEditorDataTitle", function () {
        return y;
      }),
      n.d(t, "setEditorDataExcerpt", function () {
        return g;
      }),
      n.d(t, "setEditorDataImageUrl", function () {
        return O;
      }),
      n.d(t, "OPEN_EDITOR_MODAL", function () {
        return v;
      }),
      n.d(t, "CLOSE_EDITOR_MODAL", function () {
        return E;
      }),
      n.d(t, "openEditorModal", function () {
        return j;
      }),
      n.d(t, "closeEditorModal", function () {
        return w;
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
        return k.a;
      }),
      n.d(t, "setMarkerStatus", function () {
        return k.b;
      }),
      n.d(t, "SET_MARKER_PAUSE_STATUS", function () {
        return S.a;
      }),
      n.d(t, "setMarkerPauseStatus", function () {
        return S.b;
      }),
      n.d(t, "DISMISS_ALERT", function () {
        return R.a;
      }),
      n.d(t, "DISMISS_ALERT_SUCCESS", function () {
        return R.b;
      }),
      n.d(t, "dismissAlert", function () {
        return R.c;
      }),
      n.d(t, "SET_PRIMARY_TAXONOMY", function () {
        return P.a;
      }),
      n.d(t, "setPrimaryTaxonomyId", function () {
        return P.b;
      }),
      n.d(t, "SET_PAGE_TYPE", function () {
        return A.d;
      }),
      n.d(t, "SET_ARTICLE_TYPE", function () {
        return A.c;
      }),
      n.d(t, "GET_SCHEMA_PAGE_DATA", function () {
        return A.b;
      }),
      n.d(t, "GET_SCHEMA_ARTICLE_DATA", function () {
        return A.a;
      }),
      n.d(t, "setPageType", function () {
        return A.h;
      }),
      n.d(t, "setArticleType", function () {
        return A.g;
      }),
      n.d(t, "getSchemaPageData", function () {
        return A.f;
      }),
      n.d(t, "getSchemaArticleData", function () {
        return A.e;
      }),
      n.d(t, "MODAL_DISMISS", function () {
        return C;
      }),
      n.d(t, "MODAL_OPEN", function () {
        return x;
      }),
      n.d(t, "MODAL_OPEN_NO_KEYPHRASE", function () {
        return I;
      }),
      n.d(t, "setSEMrushDismissModal", function () {
        return D;
      }),
      n.d(t, "setSEMrushOpenModal", function () {
        return N;
      }),
      n.d(t, "setSEMrushNoKeyphraseMessage", function () {
        return L;
      }),
      n.d(t, "CHANGE_COUNTRY", function () {
        return M.a;
      }),
      n.d(t, "SET_REQUEST_SUCCEEDED", function () {
        return M.g;
      }),
      n.d(t, "SET_REQUEST_FAILED", function () {
        return M.e;
      }),
      n.d(t, "SET_REQUEST_LIMIT_REACHED", function () {
        return M.f;
      }),
      n.d(t, "NEW_REQUEST", function () {
        return M.b;
      }),
      n.d(t, "NO_DATA_FOUND", function () {
        return M.c;
      }),
      n.d(t, "SET_LOGIN_STATUS", function () {
        return M.d;
      }),
      n.d(t, "setSEMrushNewRequest", function () {
        return M.j;
      }),
      n.d(t, "setSEMrushRequestSucceeded", function () {
        return M.m;
      }),
      n.d(t, "setSEMrushRequestFailed", function () {
        return M.l;
      }),
      n.d(t, "setSEMrushSetRequestLimitReached", function () {
        return M.n;
      }),
      n.d(t, "setSEMrushChangeCountry", function () {
        return M.h;
      }),
      n.d(t, "setSEMrushNoResultsFound", function () {
        return M.k;
      }),
      n.d(t, "setSEMrushLoginStatus", function () {
        return M.i;
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
        return H.a;
      }),
      n.d(t, "setWarningMessage", function () {
        return H.b;
      }),
      n.d(t, "setOverallReadabilityScore", function () {
        return W;
      }),
      n.d(t, "setOverallSeoScore", function () {
        return G;
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
    function l(e) {
      return { type: s, data: e };
    }
    function u() {
      return { type: c, timestamp: Date.now() };
    }
    var d = n(60),
      p = "SET_EDITOR_DATA_CONTENT",
      f = "SET_EDITOR_DATA_TITLE",
      m = "SET_EDITOR_DATA_EXCERPT",
      b = "SET_EDITOR_DATA_IMAGE_URL";
    function h(e) {
      return { type: p, content: e };
    }
    function y(e) {
      return { type: f, title: e };
    }
    function g(e) {
      return { type: m, excerpt: e };
    }
    function O(e) {
      return { type: b, imageUrl: e };
    }
    var v = "OPEN_MODAL",
      E = "CLOSE_MODAL";
    function j(e) {
      return { type: v, modalKey: e };
    }
    function w() {
      return { type: E };
    }
    var _ = n(68),
      T = n(61),
      k = n(45),
      S = n(76),
      R = n(70),
      P = n(77),
      A = n(57),
      C = "MODAL_DISMISS",
      x = "MODAL_OPEN",
      I = "MODAL_OPEN_NO_KEYPHRASE";
    function D() {
      return { type: C };
    }
    function N(e) {
      return { type: x, location: e };
    }
    function L() {
      return { type: I };
    }
    var M = n(41),
      F = n(43),
      q = n(78),
      B = n(16),
      U = n(49),
      K = n(50),
      H = n(79),
      W = function (e) {
        return (
          (o.a.readabilityScore = e), Object(r.setOverallReadabilityScore)(e)
        );
      },
      G = function (e, t) {
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
  ,
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
      var l = (0, i.default)(t);
      try {
        return (function e(t, n) {
          var i,
            s,
            l,
            u,
            d,
            p,
            f,
            m,
            b = [],
            h = {};
          for (p = 0; p < t.length; p++)
            if ("string" !== (d = t[p]).type) {
              if (!n.hasOwnProperty(d.value) || void 0 === n[d.value])
                throw new Error(
                  "Invalid interpolation, missing component node: `" +
                    d.value +
                    "`"
                );
              if ("object" !== r(n[d.value]))
                throw new Error(
                  "Invalid interpolation, component node must be a ReactElement or null: `" +
                    d.value +
                    "`",
                  "\n> " + c
                );
              if ("componentClose" === d.type)
                throw new Error(
                  "Missing opening component token: `" + d.value + "`"
                );
              if ("componentOpen" === d.type) {
                (i = n[d.value]), (l = p);
                break;
              }
              b.push(n[d.value]);
            } else b.push(d.value);
          return (
            i &&
              ((u = (function (e, t) {
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
              })(l, t)),
              (f = e(t.slice(l + 1, u), n)),
              (s = o.default.cloneElement(i, {}, f)),
              b.push(s),
              u < t.length - 1 &&
                ((m = e(t.slice(u + 1), n)), (b = b.concat(m)))),
            1 === b.length
              ? b[0]
              : (b.forEach(function (e, t) {
                  e && (h["interpolation-child-" + t] = e);
                }),
                (0, a.default)(h))
          );
        })(l, n);
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
        return O;
      }),
      n.d(t, "prepareCustomTaxonomyForDispatch", function () {
        return v;
      }),
      n.d(t, "mapCustomTaxonomies", function () {
        return E;
      }),
      n.d(t, "mapCustomFields", function () {
        return j;
      }),
      n.d(t, "excerptFromContent", function () {
        return w;
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
    function d(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? u(Object(n), !0).forEach(function (t) {
              o()(e, t, n[t]);
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
    var p = n(9).strings.stripHTMLTags,
      f = ["slug", "content", "contentImage", "snippetPreviewImageURL"];
    function m(e, t) {
      Object(a.forEach)(e, function (e, n) {
        f.includes(n) || t.dispatch(Object(s.n)(n, e));
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
    function O(e) {
      return { name: "cf_" + g(e), label: c(e + " (custom field)") };
    }
    function v(e) {
      var t = g(e);
      return {
        name: "ct_" + t,
        label: c(e + " (custom taxonomy)"),
        descriptionName: "ct_desc_" + t,
        descriptionLabel: c(e + " description (custom taxonomy)"),
      };
    }
    function E(e, t) {
      return e.custom_taxonomies
        ? (Object(a.forEach)(e.custom_taxonomies, function (e, n) {
            var r = v(n),
              o = r.name,
              a = r.label,
              i = r.descriptionName,
              c = r.descriptionLabel;
            t.dispatch(Object(s.n)(o, e.name, a)),
              t.dispatch(Object(s.n)(i, e.description, c));
          }),
          Object(a.omit)(d({}, e), "custom_taxonomies"))
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
          Object(a.omit)(d({}, e), "custom_fields"))
        : e;
    }
    function w(e) {
      var t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 156;
      return (
        (e = (e = Object(i.stripTags)(e)).trim()).length <= t ||
          ((e = e.substring(0, t)),
          Object(l.isFeatureEnabled)("JAPANESE_SUPPORT")
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
            title: p(t(e.title)),
            description: p(t(e.description)),
          };
        })(e);
      var n = t._applyModifications.bind(t);
      return {
        url: e.url,
        title: p(n("data_page_title", e.title)),
        description: p(n("data_meta_desc", e.description)),
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
        return l;
      }),
      n.d(t, "j", function () {
        return u;
      }),
      n.d(t, "m", function () {
        return d;
      }),
      n.d(t, "l", function () {
        return p;
      }),
      n.d(t, "n", function () {
        return f;
      }),
      n.d(t, "h", function () {
        return m;
      }),
      n.d(t, "k", function () {
        return b;
      }),
      n.d(t, "i", function () {
        return h;
      });
    var r = "CHANGE_COUNTRY",
      o = "SET_REQUEST_SUCCEEDED",
      a = "SET_REQUEST_FAILED",
      i = "SET_LIMIT_REACHED",
      s = "NEW_REQUEST",
      c = "NO_DATA_FOUND",
      l = "SET_LOGIN_STATUS";
    function u(e, t) {
      return { type: s, countryCode: e, keyphrase: t };
    }
    function d(e) {
      return { type: o, response: e };
    }
    function p(e) {
      return { type: a, response: e };
    }
    function f() {
      return { type: i };
    }
    function m(e) {
      return { type: r, countryCode: e };
    }
    function b() {
      return { type: c };
    }
    function h(e) {
      return { type: l, loginStatus: e };
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
        return l;
      }),
      n.d(t, "b", function () {
        return u;
      }),
      n.d(t, "c", function () {
        return d;
      }),
      n.d(t, "d", function () {
        return p;
      }),
      n.d(t, "a", function () {
        return f;
      }),
      n.d(t, "l", function () {
        return m;
      }),
      n.d(t, "k", function () {
        return b;
      }),
      n.d(t, "h", function () {
        return h;
      }),
      n.d(t, "i", function () {
        return y;
      }),
      n.d(t, "j", function () {
        return g;
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
      l = "SET_NO_FOLLOW",
      u = "SET_ADVANCED",
      d = "SET_BREADCRUMBS_TITLE",
      p = "SET_CANONICAL_URL",
      f = "LOAD_ADVANCED_SETTINGS",
      m = function (e) {
        return (s.noIndex = e), { type: c, value: e };
      },
      b = function (e) {
        return (s.noFollow = e), { type: l, value: e };
      },
      h = function (e) {
        return (s.advanced = e.join(",")), { type: u, value: e };
      },
      y = function (e) {
        return (s.breadcrumbsTitle = e), { type: d, value: e };
      },
      g = function (e) {
        return (s.canonical = e), { type: p, value: e };
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
      return l;
    }),
      n.d(t, "c", function () {
        return u;
      }),
      n.d(t, "d", function () {
        return d;
      }),
      n.d(t, "a", function () {
        return p;
      }),
      n.d(t, "b", function () {
        return f;
      }),
      n.d(t, "j", function () {
        return m;
      }),
      n.d(t, "h", function () {
        return b;
      }),
      n.d(t, "i", function () {
        return h;
      }),
      n.d(t, "f", function () {
        return y;
      }),
      n.d(t, "g", function () {
        return g;
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
      l = "SET_TWITTER_TITLE",
      u = "SET_TWITTER_DESCRIPTION",
      d = "SET_TWITTER_IMAGE",
      p = "CLEAR_TWITTER_IMAGE",
      f = "LOAD_TWITTER_PREVIEW",
      m = function (e) {
        return (
          e.trim() ===
          Object(r.select)("yoast-seo/editor").getSocialTitleTemplate().trim()
            ? (c.title = "")
            : (c.title = e),
          { type: l, title: e }
        );
      },
      b = function (e) {
        return (
          e.trim() ===
          Object(r.select)("yoast-seo/editor")
            .getSocialDescriptionTemplate()
            .trim()
            ? (c.description = "")
            : (c.description = e),
          { type: u, description: e }
        );
      },
      h = function (e) {
        return (c.imageId = e.id), (c.imageUrl = e.url), { type: d, image: e };
      },
      y = function () {
        return (c.imageId = ""), (c.imageUrl = ""), { type: p };
      },
      g = function () {
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
      return l;
    }),
      n.d(t, "c", function () {
        return u;
      }),
      n.d(t, "d", function () {
        return d;
      }),
      n.d(t, "a", function () {
        return p;
      }),
      n.d(t, "b", function () {
        return f;
      }),
      n.d(t, "j", function () {
        return m;
      }),
      n.d(t, "h", function () {
        return b;
      }),
      n.d(t, "i", function () {
        return h;
      }),
      n.d(t, "f", function () {
        return y;
      }),
      n.d(t, "g", function () {
        return g;
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
      l = "SET_FACEBOOK_TITLE",
      u = "SET_FACEBOOK_DESCRIPTION",
      d = "SET_FACEBOOK_IMAGE",
      p = "CLEAR_FACEBOOK_IMAGE",
      f = "LOAD_FACEBOOK_PREVIEW",
      m = function (e) {
        return (
          e.trim() ===
          Object(r.select)("yoast-seo/editor").getSocialTitleTemplate().trim()
            ? (c.title = "")
            : (c.title = e),
          { type: l, title: e }
        );
      },
      b = function (e) {
        return (
          e.trim() ===
          Object(r.select)("yoast-seo/editor")
            .getSocialDescriptionTemplate()
            .trim()
            ? (c.description = "")
            : (c.description = e),
          { type: u, description: e }
        );
      },
      h = function (e) {
        return (c.imageUrl = e.url), (c.imageId = e.id), { type: d, image: e };
      },
      y = function () {
        return (c.imageId = ""), (c.imageUrl = ""), { type: p };
      },
      g = function () {
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
      l = function (e) {
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
      o = n(27),
      a = n.n(o),
      i = n(15),
      s = n.n(i),
      c = n(0),
      l = n(6),
      u = n(12),
      d = n.n(u)()(l.Collapsible)(
        r ||
          (r = s()([
            '\n\th2 > button {\n\t\tpadding-left: 24px;\n\t\tpadding-top: 16px;\n\n\t\t&:hover {\n\t\t\tbackground-color: #f0f0f0;\n\t\t}\n\t}\n\n\tdiv[class^="collapsible_content"] {\n\t\tpadding: 24px 0;\n\t\tmargin: 0 24px;\n\t\tborder-top: 1px solid rgba(0,0,0,0.2);\n\t}\n\n',
          ]))
      );
    t.a = function (e) {
      return Object(c.createElement)(
        d,
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
      return d;
    });
    var r = n(27),
      o = n.n(r),
      a = n(46),
      i = n.n(a),
      s = n(0),
      c = n(1),
      l = n.n(c),
      u = n(18),
      d = "yoast yoast-gutenberg-modal",
      p = function (e) {
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
          l = r
            ? Object(s.createElement)("span", { className: "yoast-icon" })
            : null;
        return Object(s.createElement)(
          u.Modal,
          o()({ title: t, className: "".concat(n, " ").concat(a), icon: l }, c),
          e.children
        );
      };
    (p.propTypes = {
      title: l.a.string,
      className: l.a.string,
      showYoastIcon: l.a.bool,
      children: l.a.oneOfType([l.a.node, l.a.arrayOf(l.a.node)]),
      additionalClassName: l.a.string,
    }),
      (p.defaultProps = {
        title: "Yoast SEO",
        className: d,
        showYoastIcon: !0,
        children: null,
        additionalClassName: "",
      }),
      (t.a = p);
  },
  function (e, t, n) {
    "use strict";
    var r,
      o = n(15),
      a = n.n(o),
      i = n(25),
      s = n(9),
      c = n(12),
      l = n.n(c),
      u = Object(s.makeOutboundLink)(
        l.a.a(
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
    t.a = u;
  },
  ,
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
        return l;
      }),
      n.d(t, "f", function () {
        return u;
      }),
      n.d(t, "e", function () {
        return d;
      });
    var r = n(33),
      o = "SET_PAGE_TYPE",
      a = "SET_ARTICLE_TYPE",
      i = "GET_SCHEMA_PAGE_DATA",
      s = "GET_SCHEMA_ARTICLE_DATA",
      c = function (e) {
        return (r.a.pageType = e), { type: o, pageType: e };
      },
      l = function (e) {
        return (r.a.articleType = e), { type: a, articleType: e };
      },
      u = function () {
        return {
          type: i,
          pageType: r.a.pageType,
          defaultPageType: r.a.defaultPageType,
        };
      },
      d = function () {
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
      return u;
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
    function l(e) {
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
    function u() {
      return Object(a.createHigherOrderComponent)(function (e) {
        return Object(a.pure)(function (t) {
          var n = Object(i.useContext)(s.LocationContext);
          return Object(i.createElement)(e, l(l({}, t), {}, { location: n }));
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
        return l;
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
      l = function () {
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
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return k;
    });
    var r = n(27),
      o = n.n(r),
      a = n(46),
      i = n.n(a),
      s = n(10),
      c = n.n(s),
      l = n(5),
      u = n.n(l),
      d = n(7),
      p = n.n(d),
      f = n(11),
      m = n.n(f),
      b = n(13),
      h = n.n(b),
      y = n(14),
      g = n.n(y),
      O = n(8),
      v = n.n(O),
      E = n(0),
      j = n(1),
      w = n.n(j);
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
    var k = w.a.shape({
      value: w.a.string.isRequired,
      onChange: w.a.func.isRequired,
    });
    t.a = function (e) {
      return function (t) {
        return (function (n) {
          h()(l, n);
          var r,
            a,
            s =
              ((r = l),
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
                  t = v()(r);
                if (a) {
                  var n = v()(this).constructor;
                  e = Reflect.construct(t, arguments, n);
                } else e = t.apply(this, arguments);
                return g()(this, e);
              });
          function l(t) {
            var n;
            u()(this, l), ((n = s.call(this, t)).elements = {});
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
            p()(
              l,
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
                    return Object(E.createElement)(
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
                    return { children: w.a.node };
                  },
                },
              ]
            ),
            l
          );
        })(E.Component);
      };
    };
  },
  ,
  function (e, t) {
    e.exports = window.wp.apiFetch;
  },
  ,
  function (e, t) {
    e.exports = window.wp.richText;
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return c;
    }),
      n.d(t, "a", function () {
        return l;
      }),
      n.d(t, "d", function () {
        return u;
      }),
      n.d(t, "c", function () {
        return d;
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
      l = "LOAD_ESTIMATED_READING_TIME";
    function u(e) {
      return (s.estimatedReadingTime = e), { type: c, estimatedReadingTime: e };
    }
    function d() {
      return { type: l, estimatedReadingTime: s.estimatedReadingTime };
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return d;
    }),
      n.d(t, "b", function () {
        return p;
      });
    var r,
      o,
      a = n(15),
      i = n.n(a),
      s = n(12),
      c = n.n(s),
      l = n(6),
      u = n(9),
      d = c.a.div(
        r ||
          (r = i()([
            "\n\tmin-width: 600px;\n\n\t@media screen and ( max-width: 680px ) {\n\t\tmin-width: 0;\n\t\twidth: 86vw;\n\t}\n",
          ]))
      ),
      p = c()(l.Icon)(
        o ||
          (o = i()([
            "\n\tfloat: ",
            ";\n\tmargin: ",
            ";\n\n\t&& {\n\t\twidth: 150px;\n\t\theight: 150px;\n\n\t\t@media screen and ( max-width: 680px ) {\n\t\t\twidth: 80px;\n\t\t\theight: 80px;\n\t\t}\n\t}\n",
          ])),
        Object(u.getDirectionalStyle)("right", "left"),
        Object(u.getDirectionalStyle)("0 0 16px 16px", "0 16px 16px 0")
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
      l = n(11),
      u = n.n(l),
      d = n(13),
      p = n.n(d),
      f = n(14),
      m = n.n(f),
      b = n(8),
      h = n.n(b),
      y = n(0),
      g = n(1),
      O = n.n(g),
      v = n(95),
      E = n(23),
      j = n(35);
    var w = (function (e) {
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
              r = h()(t);
            if (n) {
              var o = h()(this).constructor;
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
          (t.handleMarkButtonClick = t.handleMarkButtonClick.bind(u()(t))),
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
              window.YoastSEO.analysis.applyMarks(new E.Paper("", {}), []);
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
                Object(y.createElement)(v.ContentAnalysis, {
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
    (w.propTypes = {
      results: O.a.array,
      marksButtonClassName: O.a.string,
      marksButtonStatus: O.a.string,
      setActiveMarker: O.a.func.isRequired,
      setMarkerPauseStatus: O.a.func.isRequired,
      activeMarker: O.a.string,
      keywordKey: O.a.string,
    }),
      (w.defaultProps = {
        results: null,
        marksButtonStatus: "enabled",
        marksButtonClassName: "",
        activeMarker: null,
        keywordKey: "",
      });
    var _ = w;
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
      l = n(11),
      u = n.n(l),
      d = n(13),
      p = n.n(d),
      f = n(14),
      m = n.n(f),
      b = n(8),
      h = n.n(b),
      y = n(0),
      g = n(3),
      O = n(6),
      v = n(1),
      E = n.n(v),
      j = n(63);
    var w = (function (e) {
        p()(a, e);
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
                r = h()(t);
              if (n) {
                var o = h()(this).constructor;
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
            (t.handleOptionFocus = t.handleOptionFocus.bind(u()(t))),
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
                      O.Alert,
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
                  Object(y.createElement)(O.Select, {
                    id: "schema-page-type-".concat(this.props.postType),
                    name: "schema_page_type",
                    options: this.props.pageTypeOptions,
                    label: Object(g.__)("Default Page type", "wordpress-seo"),
                    onChange: this.props.pageType.onChange,
                    selected: this.props.pageType.value,
                    onOptionFocus: this.handleOptionFocus,
                  }),
                  this.props.articleType &&
                    Object(y.createElement)(O.Select, {
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
          a
        );
      })(y.Component),
      _ = E.a.arrayOf(E.a.shape({ name: E.a.string, value: E.a.string }));
    (w.propTypes = {
      postType: E.a.string.isRequired,
      postTypeName: E.a.string.isRequired,
      pageType: j.b.isRequired,
      articleType: j.b,
      pageTypeOptions: _.isRequired,
      articleTypeOptions: _.isRequired,
    }),
      (w.defaultProps = { articleType: null }),
      (t.a = Object(j.a)(function (e) {
        return [
          { name: "pageType", fieldId: e.pageTypeFieldId },
          { name: "articleType", fieldId: e.articleTypeFieldId },
        ];
      })(w));
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
      return p;
    });
    var r = n(0),
      o = n(3),
      a = n(54),
      i = n(1),
      s = n.n(i),
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
      onClick: s.a.func.isRequired,
      title: s.a.string.isRequired,
      id: s.a.string,
      subTitle: s.a.string,
      suffixIcon: s.a.object,
    }),
      (l.defaultProps = { id: "", suffixIcon: null, subTitle: "" });
    var d = n(29),
      p = function (e) {
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
          l = e.close,
          f = e.open,
          m = Object(r.useCallback)(
            function (e) {
              p(e) && l();
            },
            [l]
          );
        return Object(r.createElement)(
          r.Fragment,
          null,
          c &&
            Object(r.createElement)(
              d.LocationProvider,
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
          Object(r.createElement)(u, {
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
      l = function (e) {
        var t = e.target,
          n = e.scoreIndicator;
        return Object(r.createElement)(
          c.a,
          { target: t },
          Object(r.createElement)(o.SvgIcon, Object(s.getIconForScore)(n))
        );
      };
    (l.propTypes = {
      target: i.a.string.isRequired,
      scoreIndicator: i.a.string.isRequired,
    }),
      (t.a = l);
  },
  ,
  function (e, t, n) {
    "use strict";
    var r,
      o = n(5),
      a = n.n(o),
      i = n(7),
      s = n.n(i),
      c = n(11),
      l = n.n(c),
      u = n(13),
      d = n.n(u),
      p = n(14),
      f = n.n(p),
      m = n(8),
      b = n.n(m),
      h = n(0),
      y = n(1),
      g = n.n(y),
      O = n(15),
      v = n.n(O),
      E = n(12),
      j = n.n(E),
      w = n(37),
      _ = n.n(w),
      T = n(3),
      k = n(6),
      S = n(9),
      R = j()(k.Alert)(r || (r = v()(["\n\tp {\n\t\tmargin: 0;\n\t}\n"]))),
      P = Object(S.makeOutboundLink)(),
      A = function (e) {
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
        return Object(h.createElement)(
          h.Fragment,
          null,
          Object(h.createElement)(
            R,
            { type: "info" },
            _()({
              mixedString: t,
              components: { strong: Object(h.createElement)("b", null) },
            }),
            Object(h.createElement)("br", null),
            Object(h.createElement)(
              P,
              { href: wpseoAdminL10n["shortlinks.upsell.social_previews"] },
              Object(h.createElement)("p", null, n)
            )
          )
        );
      };
    A.propTypes = {
      socialMediumName: g.a.oneOf(["Twitter", "Facebook"]).isRequired,
    };
    var C = A,
      x = n(149),
      I = n(59);
    var D = (function (e) {
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
            return f()(this, e);
          });
      function o(e) {
        var t;
        return (
          a()(this, o),
          ((t = r.call(this, e)).state = { activeField: "", hoveredField: "" }),
          (t.setHoveredField = t.setHoveredField.bind(l()(t))),
          (t.setActiveField = t.setActiveField.bind(l()(t))),
          (t.setEditorRef = t.setEditorRef.bind(l()(t))),
          (t.setEditorFocus = t.setEditorFocus.bind(l()(t))),
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
                l = e.imageUrl,
                u = e.title,
                d = e.titleInputPlaceholder,
                p = e.replacementVariables,
                f = e.recommendedReplacementVariables,
                m = e.isPremium,
                b = e.location;
              return Object(h.createElement)(
                h.Fragment,
                null,
                Object(h.createElement)(C, { socialMediumName: a }),
                Object(h.createElement)(x.SocialMetadataPreviewForm, {
                  onDescriptionChange: t,
                  socialMediumName: a,
                  title: u,
                  titleInputPlaceholder: d,
                  onRemoveImageClick: o,
                  imageSelected: !!l,
                  imageUrl: l,
                  onTitleChange: n,
                  onSelectImageClick: r,
                  description: s,
                  descriptionInputPlaceholder: c,
                  imageWarnings: i,
                  replacementVariables: p,
                  recommendedReplacementVariables: f,
                  onMouseHover: this.setHoveredField,
                  hoveredField: this.state.hoveredField,
                  onSelect: this.setActiveField,
                  activeField: this.state.activeField,
                  isPremium: m,
                  setEditorRef: this.setEditorRef,
                  idSuffix: b,
                })
              );
            },
          },
        ]),
        o
      );
    })(h.Component);
    (D.propTypes = {
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
      replacementVariables: I.replacementVariablesShape,
      recommendedReplacementVariables: I.recommendedReplacementVariablesShape,
      location: g.a.string,
    }),
      (D.defaultProps = {
        imageWarnings: [],
        recommendedReplacementVariables: [],
        replacementVariables: [],
        isPremium: !1,
        descriptionInputPlaceholder: "",
        titleInputPlaceholder: "",
        location: "",
      }),
      (t.a = D);
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
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return h;
    }),
      n.d(t, "a", function () {
        return v;
      }),
      n.d(t, "c", function () {
        return E;
      });
    var r = n(10),
      o = n.n(r),
      a = n(2),
      i = (n(179), n(67)),
      s = n(4);
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
    var u = "<yoastmark class='yoast-text-mark'>",
      d = [],
      p = {
        "core/quote": [
          { key: "value", multilineTag: "p" },
          { key: "citation" },
        ],
        "core/paragraph": [{ key: "content" }],
        "core/list": [
          {
            key: "values",
            multilineTag: "li",
            multilineWrapperTag: ["ul", "ol"],
          },
        ],
        "core/heading": [{ key: "content" }],
      },
      f = {
        singleH1: {
          "core/heading": [
            {
              key: "content",
              filter: function (e) {
                return 1 === e.level;
              },
            },
          ],
        },
      };
    function m() {
      var e = d.shift();
      e &&
        (Object(s.dispatch)("core/annotations").__experimentalAddAnnotation(e),
        b());
    }
    function b() {
      Object(a.isFunction)(window.requestIdleCallback)
        ? window.requestIdleCallback(m, { timeout: 1e3 })
        : setTimeout(m, 150);
    }
    function h() {
      return (
        Object(s.select)("core/block-editor") &&
        Object(a.isFunction)(Object(s.select)("core/block-editor").getBlocks) &&
        Object(s.select)("core/annotations") &&
        Object(a.isFunction)(
          Object(s.dispatch)("core/annotations").__experimentalAddAnnotation
        )
      );
    }
    function y(e) {
      var t = Object(s.select)("yoast-seo/editor").getActiveMarker(),
        n = f[t] || p;
      return n.hasOwnProperty(e) ? n[e] : [];
    }
    function g(e, t, n) {
      var r = e.key,
        o = t.attributes,
        s = o[r];
      if (e.filter && !e.filter(o)) return [];
      var c = Object(i.create)({
        html: s,
        multilineTag: e.multilineTag,
        multilineWrapperTag: e.multilineWrapperTag,
      }).text;
      return Object(a.flatMap)(n, function (e) {
        var n = (function (e, t) {
          var n = t.getOriginal().replace(/(<([^>]+)>)/gi, ""),
            r = t.getMarked().replace(/(<(?!\/?yoastmark)[^>]+>)/gi, ""),
            o = (function (e, t) {
              var n =
                  !(arguments.length > 2 && void 0 !== arguments[2]) ||
                  arguments[2],
                r = [];
              if (0 === e.length) return r;
              var o,
                a = 0;
              for (
                n || ((t = t.toLowerCase()), (e = e.toLowerCase()));
                (o = e.indexOf(t, a)) > -1;

              )
                r.push(o), (a = o + t.length);
              return r;
            })(e, n);
          if (0 === o.length) return [];
          var a = (function (e) {
              for (var t = e.indexOf(u), n = null, r = []; t >= 0; ) {
                if ((n = (e = e.replace(u, "")).indexOf("</yoastmark>")) < t)
                  return [];
                (e = e.replace("</yoastmark>", "")),
                  r.push({ startOffset: t, endOffset: n }),
                  (t = e.indexOf(u)),
                  (n = null);
              }
              return r;
            })(r),
            i = [];
          return (
            a.forEach(function (e) {
              o.forEach(function (r) {
                var o = r + e.startOffset,
                  a = r + e.endOffset;
                0 === e.startOffset &&
                  e.endOffset === t.getOriginal().length &&
                  (a = r + n.length),
                  i.push({ startOffset: o, endOffset: a });
              });
            }),
            i
          );
        })(c, e);
        return n
          ? n.map(function (e) {
              return l(
                l({}, e),
                {},
                { block: t.clientId, richTextIdentifier: r }
              );
            })
          : [];
      });
    }
    function O(e) {
      d = e.map(function (e) {
        return {
          blockClientId: e.block,
          source: "yoast",
          richTextIdentifier: e.richTextIdentifier,
          range: { start: e.startOffset, end: e.endOffset },
        };
      });
    }
    function v(e, t) {
      if (
        ((d = []),
        Object(s.dispatch)(
          "core/annotations"
        ).__experimentalRemoveAnnotationsBySource("yoast"),
        0 !== t.length)
      ) {
        var n = Object(s.select)("core/block-editor").getBlocks();
        O(
          Object(a.flatMap)(n, function (e) {
            return Object(a.flatMap)(y(e.name), function (n) {
              return g(n, e, t);
            });
          })
        ),
          b();
      }
    }
    function E() {
      var e = Object(s.select)("core/editor").getSelectedBlock(),
        t = Object(s.select)("yoast-seo/editor").getActiveMarker();
      if (e && t) {
        var n;
        (n = e.clientId),
          Object(s.select)("core/annotations")
            .__experimentalGetAnnotations()
            .filter(function (e) {
              return e.blockClientId === n && "yoast" === e.source;
            })
            .forEach(function (e) {
              Object(s.dispatch)(
                "core/annotations"
              ).__experimentalRemoveAnnotation(e.id);
            });
        var r = Object(s.select)("yoast-seo/editor").getResultById(t);
        if (void 0 !== r) {
          var o = r.marks;
          O(
            Object(a.flatMap)(y(e.name), function (t) {
              return g(t, e, o);
            })
          ),
            b();
        }
      }
    }
  },
  ,
  ,
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
      l = n(12),
      u = n.n(l),
      d = n(6),
      p = n(9),
      f = u()(d.StyledSection)(
        r ||
          (r = a()([
            "\n\t&",
            " {\n\t\tpadding: 0;\n\n\t\t& ",
            " {\n\t\t\t",
            ": 20px;\n\t\t\tmargin-left: ",
            ";\n\t\t}\n\t}\n",
          ])),
        d.StyledSectionBase,
        d.StyledHeading,
        Object(p.getDirectionalStyle)("padding-left", "padding-right"),
        Object(p.getDirectionalStyle)("0", "20px")
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
  ,
  ,
  function (e, t, n) {
    "use strict";
    var r = n(4),
      o = n(19),
      a = n(0),
      i = n(3),
      s = n(1),
      c = n.n(s),
      l = n(2),
      u = n(6),
      d = function () {
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
          Object(a.createElement)(u.SvgIcon, { icon: "loading-spinner" })
        );
      },
      p = n(9),
      f = Object(p.makeOutboundLink)(),
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
      b = n(47),
      h = n.n(b),
      y = n(5),
      g = n.n(y),
      O = n(7),
      v = n.n(O),
      E = n(11),
      j = n.n(E),
      w = n(13),
      _ = n.n(w),
      T = n(14),
      k = n.n(T),
      S = n(8),
      R = n.n(S),
      P = n(26),
      A = n.n(P),
      C = n(65),
      x = n.n(C),
      I = n(53);
    var D = "yoast-semrush-country-selector",
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
      L = (function (e) {
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
                t = R()(r);
              if (o) {
                var n = R()(this).constructor;
                e = Reflect.construct(t, arguments, n);
              } else e = t.apply(this, arguments);
              return k()(this, e);
            });
        function c(e) {
          var t;
          return (
            g()(this, c),
            ((t = s.call(this, e)).relatedKeyphrasesRequest =
              t.relatedKeyphrasesRequest.bind(j()(t))),
            (t.onChangeHandler = t.onChangeHandler.bind(j()(t))),
            t
          );
        }
        return (
          v()(c, [
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
                x()({
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
                  A.a.mark(function e() {
                    var t, n, r, o;
                    return A.a.wrap(
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
                ((t = h()(
                  A.a.mark(function e(t, n) {
                    return A.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              x()({
                                path: Object(I.addQueryArgs)(
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
                  { id: D },
                  Object(a.createElement)(u.SingleSelect, {
                    id: D + "-select",
                    label: Object(i.__)("Show results for:", "wordpress-seo"),
                    name: "semrush-country-code",
                    options: N,
                    selected: this.props.countryCode,
                    onChange: this.onChangeHandler,
                    wrapperClassName:
                      "yoast-field-group yoast-field-group--inline",
                  }),
                  Object(a.createElement)(
                    u.NewButton,
                    {
                      id: D + "-button",
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
    (L.propTypes = {
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
      (L.defaultProps = {
        keyphrase: "",
        countryCode: "us",
        response: {},
        lastRequestKeyphrase: "",
      });
    var M = L,
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
          l = e.mapChartDataToTableData,
          u = e.dataTableCaption,
          d = e.dataTableHeaderLabels,
          p = e.isDataTableVisuallyHidden,
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
          b = r - s,
          h = t
            .map(function (e) {
              var t = (e.x / f) * n,
                r = b - (e.y / m) * b + s;
              return "".concat(t, ",").concat(r);
            })
            .join(" "),
          y = "0,".concat(b + s, " ") + h + " ".concat(n, ",").concat(b + s);
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
              points: h,
            })
          ),
          l &&
            Object(a.createElement)(U, {
              data: t,
              mapChartDataToTableData: l,
              dataTableCaption: u,
              dataTableHeaderLabels: d,
              isDataTableVisuallyHidden: p,
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
    var H = K,
      W = n(55);
    var G = Object(p.makeOutboundLink)(),
      V = (function (e) {
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
                r = R()(t);
              if (n) {
                var o = R()(this).constructor;
                e = Reflect.construct(r, arguments, o);
              } else e = r.apply(this, arguments);
              return k()(this, e);
            });
        function o(e) {
          var t;
          return (
            g()(this, o),
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
          v()(o, [
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
                  u =
                    "https://www.semrush.com/analytics/keywordoverview/?q=" +
                    encodeURIComponent(n) +
                    "&db=" +
                    encodeURIComponent(o);
                return (
                  s &&
                  !Object(l.isEmpty)(s.results) &&
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
                              W.a,
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
                              W.a,
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
                            l = e.getAreaChartDataTableHeaderLabels();
                          return Object(a.createElement)(
                            "tr",
                            { key: n },
                            Object(a.createElement)("td", null, o),
                            Object(a.createElement)("td", null, t[1]),
                            Object(a.createElement)(
                              "td",
                              { className: "yoast-table--nopadding" },
                              Object(a.createElement)(H, {
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
                                dataTableHeaderLabels: l,
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
                        G,
                        { href: u },
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
    (V.propTypes = {
      data: c.a.object,
      keyphrase: c.a.string,
      relatedKeyphrases: c.a.array,
      countryCode: c.a.string,
      renderAction: c.a.func,
    }),
      (V.defaultProps = {
        data: {},
        keyphrase: "",
        relatedKeyphrases: [],
        countryCode: "us",
        renderAction: null,
      });
    var Y = V,
      z = Object(p.makeOutboundLink)(),
      $ = function () {
        return Object(a.createElement)(
          u.Alert,
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
      Z = function () {
        return Object(a.createElement)(
          u.Alert,
          { type: "error" },
          Object(i.__)(
            "We've encountered a problem trying to get related keyphrases. Please try again later.",
            "wordpress-seo"
          )
        );
      },
      Q = function () {
        return Object(a.createElement)(
          u.Alert,
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
        u = e.countryCode,
        p = e.requestLimitReached,
        f = e.setRequestFailed,
        b = e.setNoResultsFound,
        h = e.relatedKeyphrases,
        y = e.setRequestSucceeded,
        g = e.setRequestLimitReached,
        O = Object(X.a)().isPremium;
      return Object(a.createElement)(
        a.Fragment,
        null,
        !p &&
          Object(a.createElement)(
            a.Fragment,
            null,
            !O && Object(a.createElement)($, null),
            O &&
              (function (e) {
                return e && e.length >= 4;
              })(h) &&
              Object(a.createElement)(Q, null),
            Object(a.createElement)(M, {
              countryCode: u,
              setCountry: s,
              newRequest: o,
              keyphrase: r,
              setRequestFailed: f,
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
            o = e.response,
            s = e.requestHasData;
          return t
            ? Object(a.createElement)(d, null)
            : n
            ? Object(a.createElement)(m, null)
            : !r &&
              (function (e) {
                return !Object(l.isEmpty)(e) && "error" in e;
              })(o)
            ? Object(a.createElement)(Z, null)
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
        Object(a.createElement)(Y, {
          keyphrase: r,
          relatedKeyphrases: h,
          countryCode: u,
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
            l = t.getSEMrushRequestKeyphrase;
          return {
            keyphrase: n(),
            countryCode: r(),
            requestLimitReached: o(),
            response: a(),
            isSuccess: i(),
            isPending: s(),
            requestHasData: c(),
            lastRequestKeyphrase: l(),
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
  ,
  function (e, t) {
    e.exports = window.wp.blocks;
  },
  ,
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
      l = n.n(c),
      u = n(7),
      d = n.n(u),
      p = n(13),
      f = n.n(p),
      m = n(14),
      b = n.n(m),
      h = n(8),
      y = n.n(h),
      g = n(15),
      O = n.n(g),
      v = n(0),
      E = n(4),
      j = n(3),
      w = n(6),
      _ = n(25),
      T = n(1),
      k = n.n(T),
      S = n(12),
      R = n.n(S),
      P = n(42),
      A = n(82),
      C = n(9),
      x = R.a.p(
        r ||
          (r = O()([
            "\n\tcolor: ",
            ";\n\tmargin: 0;\n\tpadding-right: 8px;\n",
          ])),
        _.colors.$color_upsell_text
      ),
      I = R.a.div(
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
        Object(C.getDirectionalStyle)("border-left", "border-right"),
        _.colors.$color_pink_dark,
        x,
        function (e) {
          return "vertical" === e.alignment && "16px";
        }
      ),
      D = R()(w.SvgIcon)(
        a || (a = O()(["\n\tmargin: ", ";\n\ttransform: ", ";\n"])),
        Object(C.getDirectionalStyle)("0 0 0 4px", "0 4px 0 0"),
        Object(C.getDirectionalStyle)("rotate(0deg)", "rotate(180deg)")
      ),
      N = Object(C.makeOutboundLink)(w.UpsellLinkButton),
      L = function (e) {
        var t = e.alignment,
          n = e.url;
        return Object(v.createElement)(
          I,
          { alignment: t },
          Object(v.createElement)(
            x,
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
          Object(v.createElement)(
            "div",
            null,
            Object(v.createElement)(
              N,
              { href: n, className: "UpsellLinkButton" },
              Object(j.sprintf)(
                /* translators: %s expands to Premium */
                Object(j.__)("Go %s!", "wordpress-seo"),
                "Premium"
              ),
              Object(v.createElement)(D, {
                icon: "arrow-right",
                size: "8px",
                color: _.colors.$color_black,
              })
            )
          )
        );
      };
    (L.propTypes = {
      alignment: k.a.oneOf(["horizontal", "vertical"]),
      url: k.a.string.isRequired,
    }),
      (L.defaultProps = { alignment: "vertical" });
    var M,
      F,
      q = L,
      B = n(29),
      U = n(52),
      K = n(69),
      H = n(37),
      W = n.n(H);
    var G = R.a.ul(
        M ||
          (M = O()([
            '\n\tlist-style: none;\n\tmargin: 0 0 16px;\n\tpadding: 0;\n\n\tli {\n\t\tmargin: 5px 0 0 0;\n\t\tpadding-left: 16px;\n\t}\n\n\tspan[aria-hidden="true"]:before {\n\t\tmargin: 0 8px 0 -16px;\n\t\tfont-weight: bold;\n\t\tcontent: "+";\n\t}\n',
          ]))
      ),
      V = R.a.small(F || (F = O()(["\n\tdisplay: block;\n"]))),
      Y = Object(C.makeOutboundLink)(),
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
              return b()(this, e);
            });
        function o(e) {
          return l()(this, o), r.call(this, e);
        }
        return (
          d()(o, [
            {
              key: "createBenefitsList",
              value: function (e) {
                return (
                  e.length > 0 &&
                  Object(v.createElement)(
                    G,
                    { role: "list" },
                    e.map(function (e, t) {
                      return Object(v.createElement)(
                        "li",
                        { key: t },
                        Object(v.createElement)("span", {
                          "aria-hidden": "true",
                        }),
                        W()({
                          mixedString: e
                            .replace("<strong>", "{{strong}}")
                            .replace("</strong>", "{{/strong}}"),
                          components: {
                            strong: Object(v.createElement)("strong", null),
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
                  return Object(v.createElement)("p", { key: t }, e);
                });
              },
            },
            {
              key: "render",
              value: function () {
                return Object(v.createElement)(
                  "div",
                  null,
                  this.createInfoParagraphs(this.props.infoParagraphs),
                  this.createBenefitsList(this.props.benefits),
                  Object(v.createElement)(
                    Y,
                    this.props.upsellButton,
                    this.props.upsellButtonText,
                    this.props.upsellButtonHasCaret &&
                      Object(v.createElement)("span", {
                        "aria-hidden": "true",
                        className: "yoast-button-upsell__caret",
                      })
                  ),
                  Object(v.createElement)(
                    V,
                    { id: this.props.upsellButton["aria-describedby"] },
                    this.props.upsellButtonLabel
                  )
                );
              },
            },
          ]),
          o
        );
      })(v.Component);
    (z.propTypes = {
      benefits: k.a.array,
      infoParagraphs: k.a.array,
      upsellButton: k.a.object,
      upsellButtonText: k.a.string.isRequired,
      upsellButtonLabel: k.a.string,
      upsellButtonHasCaret: k.a.bool,
    }),
      (z.defaultProps = {
        infoParagraphs: [],
        benefits: [],
        upsellButton: { href: "", className: "button button-primary" },
        upsellButtonLabel: "",
        upsellButtonHasCaret: !0,
      });
    var $ = z,
      Z = Object(C.makeOutboundLink)(),
      Q = function (e) {
        var t = Object(j.sprintf)(
            /* translators: %1$s expands to a 'Yoast SEO Premium' text linked to the yoast.com website. */
            Object(j.__)("Great news: you can, with %1$s!", "wordpress-seo"),
            "{{link}}Yoast SEO Premium{{/link}}"
          ),
          n = W()({
            mixedString: t,
            components: { link: Object(v.createElement)(Z, { href: e.link }) },
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
        return Object(v.createElement)($, {
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
    Q.propTypes = {
      link: k.a.string.isRequired,
      buyLink: k.a.string.isRequired,
    };
    var X = Q,
      J = Object(C.makeOutboundLink)(),
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
          r = W()({
            mixedString: t,
            components: { link: Object(v.createElement)(J, { href: e.link }) },
          }),
          o = Object(j.sprintf)(
            /* translators: %s expands to 'Yoast SEO Premium'. */
            Object(j.__)("Other benefits of %s for you:", "wordpress-seo"),
            "Yoast SEO Premium"
          );
        return Object(v.createElement)($, {
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
      link: k.a.string.isRequired,
      buyLink: k.a.string.isRequired,
    };
    var te,
      ne = ee,
      re = n(39),
      oe = n.n(re),
      ae = n(54),
      ie = R.a.button(
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
        var t = Object(v.useState)(!1),
          n = oe()(t, 2),
          r = n[0],
          o = n[1],
          a = Object.assign({}, se, e.labels),
          i = Object(v.useCallback)(function () {
            return o(!1);
          }, []),
          s = Object(v.useCallback)(function () {
            return o(!0);
          }, []);
        return Object(v.createElement)(
          v.Fragment,
          null,
          Object(v.createElement)(
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
              Object(v.createElement)(w.SvgIcon, {
                icon: e.openButtonIcon,
                size: "13px",
              }),
            a.open
          ),
          r &&
            Object(v.createElement)(
              ae.a,
              { onRequestClose: i, className: e.className, title: a.heading },
              e.children
            )
        );
      };
    (ce.propTypes = {
      openButtonIcon: k.a.string,
      labels: k.a.shape({
        open: k.a.string,
        modalAriaLabel: k.a.string.isRequired,
        heading: k.a.string,
        closeIconButton: k.a.string,
        closeButton: k.a.string,
      }).isRequired,
      classes: k.a.shape({
        openButton: k.a.string,
        closeIconButton: k.a.string,
        closeButton: k.a.string,
      }),
      className: k.a.string,
      children: k.a.any.isRequired,
    }),
      (ce.defaultProps = { className: ae.b, openButtonIcon: "", classes: {} });
    var le = ce,
      ue = n(96),
      de = n(51),
      pe = n(18);
    function fe(e) {
      var t = e.location;
      return Object(v.createElement)(pe.Slot, {
        name: "yoast-synonyms-".concat(t),
      });
    }
    fe.propTypes = { location: k.a.string.isRequired };
    var me,
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
              s()(e, t, n[t]);
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
    var ge = R.a.span(
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
              return b()(this, e);
            });
        function o() {
          return l()(this, o), r.apply(this, arguments);
        }
        return (
          d()(o, [
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
                  Object(v.createElement)(
                    le,
                    t,
                    Object(v.createElement)(
                      K.a,
                      null,
                      Object(v.createElement)(K.b, { icon: w.YoastSeoIcon }),
                      Object(v.createElement)(
                        "h2",
                        null,
                        Object(j.__)(
                          "Would you like to add keyphrase synonyms?",
                          "wordpress-seo"
                        )
                      ),
                      Object(v.createElement)(X, { link: n, buyLink: r })
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
                  Object(v.createElement)(
                    le,
                    t,
                    Object(v.createElement)(
                      K.a,
                      null,
                      Object(v.createElement)(K.b, { icon: w.YoastSeoIcon }),
                      Object(v.createElement)(
                        "h2",
                        null,
                        Object(j.__)(
                          "Would you like to add a related keyphrase?",
                          "wordpress-seo"
                        )
                      ),
                      Object(v.createElement)(ne, { link: n, buyLink: r })
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
                    (r = de.a)),
                  Object(v.createElement)(
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
                    Object(v.createElement)(ne, { link: t, buyLink: n })
                  )
                );
              },
            },
            {
              key: "renderWordFormsUpsell",
              value: function (e) {
                return Object(v.createElement)(q, {
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
                  : Object(v.createElement)(ue.a, {
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
                  Object(v.createElement)(
                    B.LocationConsumer,
                    null,
                    function (n) {
                      var r = "metabox" === n ? U.a : de.a;
                      return Object(v.createElement)(
                        v.Fragment,
                        null,
                        Object(v.createElement)(
                          r,
                          {
                            title: Object(j.__)(
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
                          Object(v.createElement)(fe, { location: n }),
                          e.props.shouldUpsell &&
                            Object(v.createElement)(
                              v.Fragment,
                              null,
                              e.renderSynonymsUpsell(n),
                              e.renderMultipleKeywordsUpsell(n)
                            ),
                          e.props.shouldUpsellWordFormRecognition &&
                            e.renderWordFormsUpsell(n),
                          Object(v.createElement)(
                            ge,
                            null,
                            Object(j.__)("Analysis results", "wordpress-seo")
                          ),
                          Object(v.createElement)(A.a, {
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
      })(v.Component);
    (Oe.propTypes = {
      results: k.a.array,
      marksButtonStatus: k.a.string,
      keyword: k.a.string,
      shouldUpsell: k.a.bool,
      shouldUpsellWordFormRecognition: k.a.bool,
      overallScore: k.a.number,
    }),
      (Oe.defaultProps = {
        results: [],
        marksButtonStatus: null,
        keyword: "",
        shouldUpsell: !1,
        shouldUpsellWordFormRecognition: !1,
        overallScore: null,
      }),
      (t.a = Object(E.withSelect)(function (e, t) {
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
      l = n(6),
      u = n(9),
      d = n(1),
      p = n.n(d),
      f = n(5),
      m = n.n(f),
      b = n(7),
      h = n.n(b),
      y = n(13),
      g = n.n(y),
      O = n(14),
      v = n.n(O),
      E = n(8),
      j = n.n(E),
      w = n(15),
      _ = n.n(w),
      T = n(12);
    var k = n
        .n(T)
        .a.div(r || (r = _()(["\n\tdisplay: flex;\n\tmargin-top: 8px;\n"]))),
      S = (function (e) {
        g()(o, e);
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
              return v()(this, e);
            });
        function o() {
          return m()(this, o), r.apply(this, arguments);
        }
        return (
          h()(o, [
            {
              key: "render",
              value: function () {
                return Object(i.createElement)(
                  k,
                  null,
                  Object(i.createElement)(l.Toggle, {
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
    (S.propTypes = {
      id: p.a.string,
      isEnabled: p.a.bool,
      onToggle: p.a.func,
      onToggleDisabled: p.a.func,
    }),
      (S.defaultProps = {
        id: "cornerstone-toggle",
        isEnabled: !0,
        onToggle: function () {},
        onToggleDisabled: function () {},
      });
    var R = S,
      P = n(52),
      A = n(51),
      C = Object(u.makeOutboundLink)();
    function x(e) {
      var t = e.isCornerstone,
        n = e.onChange,
        r = e.learnMoreUrl,
        o = e.location,
        a = "metabox" === o ? P.a : A.a;
      return Object(i.createElement)(
        a,
        {
          id: Object(u.join)(["yoast-cornerstone-collapsible", o]),
          title: Object(s.__)("Cornerstone content", "wordpress-seo"),
        },
        Object(i.createElement)(
          l.HelpText,
          null,
          Object(s.__)(
            "Cornerstone content should be the most important and extensive articles on your site.",
            "wordpress-seo"
          ) + " ",
          Object(i.createElement)(
            C,
            { href: r },
            Object(s.__)(
              "Learn more about Cornerstone Content.",
              "wordpress-seo"
            )
          )
        ),
        Object(i.createElement)(R, {
          id: Object(u.join)(["yoast-cornerstone", o]),
          isEnabled: t,
          onToggle: n,
        }),
        Object(i.createElement)(c.Slot, { name: "YoastAfterCornerstoneToggle" })
      );
    }
    (x.propTypes = {
      isCornerstone: p.a.bool,
      onChange: p.a.func,
      learnMoreUrl: p.a.string.isRequired,
      location: p.a.string,
    }),
      (x.defaultProps = {
        isCornerstone: !0,
        onChange: function () {},
        location: "",
      });
    var I = n(58);
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
      Object(I.a)(),
    ])(x);
  },
  function (e, t, n) {
    "use strict";
    var r = n(5),
      o = n.n(r),
      a = n(7),
      i = n.n(a),
      s = n(11),
      c = n.n(s),
      l = n(13),
      u = n.n(l),
      d = n(14),
      p = n.n(d),
      f = n(8),
      m = n.n(f),
      b = n(15),
      h = n.n(b),
      y = n(0),
      g = n(18),
      O = n(19),
      v = n(4),
      E = n(3),
      j = n(1),
      w = n.n(j),
      _ = n(12),
      T = n.n(_),
      k = n(22),
      S = n(47),
      R = n.n(S),
      P = n(26),
      A = n.n(P),
      C = n(65),
      x = n.n(C),
      I = n(6),
      D = n(69),
      N = n(54),
      L = n(111),
      M = n(92);
    var F = (function (e) {
      u()(l, e);
      var t,
        n,
        r,
        a,
        s =
          ((r = l),
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
            return p()(this, e);
          });
      function l(e) {
        var t;
        return (
          o()(this, l),
          ((t = s.call(this, e)).onModalOpen = t.onModalOpen.bind(c()(t))),
          (t.onModalClose = t.onModalClose.bind(c()(t))),
          (t.onLinkClick = t.onLinkClick.bind(c()(t))),
          (t.listenToMessages = t.listenToMessages.bind(c()(t))),
          t
        );
      }
      return (
        i()(l, [
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
              Object(M.b)(e) && this.props.onClose();
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
              ((n = R()(
                A.a.mark(function e(t) {
                  var n, r;
                  return A.a.wrap(
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
              ((t = R()(
                A.a.mark(function e(t) {
                  var n, r, o;
                  return A.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (n = new URL(t.url)),
                              (r = n.searchParams.get("code")),
                              (e.next = 5),
                              x()({
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
                      I.NewButton,
                      {
                        variant: "secondary",
                        id: "yoast-get-related-keyphrases-".concat(n),
                        onClick: this.onModalOpen,
                      },
                      Object(E.__)("Get related keyphrases", "wordpress-seo")
                    )
                  ),
                t &&
                  r === n &&
                  Object(y.createElement)(
                    N.a,
                    {
                      title: Object(E.__)(
                        "Related keyphrases",
                        "wordpress-seo"
                      ),
                      onRequestClose: this.onModalClose,
                      icon: Object(y.createElement)(L.a, null),
                      additionalClassName: "yoast-related-keyphrases-modal",
                    },
                    Object(y.createElement)(
                      D.a,
                      {
                        className:
                          "yoast-gutenberg-modal__content yoast-related-keyphrases-modal__content",
                      },
                      Object(y.createElement)(g.Slot, {
                        name: "YoastRelatedKeyphrases",
                      })
                    )
                  ),
                !o &&
                  Object(y.createElement)(
                    "div",
                    { className: "yoast" },
                    Object(y.createElement)(
                      I.ButtonStyledLink,
                      {
                        variant: "secondary",
                        id: "yoast-get-related-keyphrases-".concat(n),
                        href: "https://oauth.semrush.com/oauth2/authorize?ref=1513012826&client_id=yoast&redirect_uri=https%3A%2F%2Foauth.semrush.com%2Foauth2%2Fyoast%2Fsuccess&response_type=code&scope=user.id",
                        onClick: this.onLinkClick,
                      },
                      Object(E.__)("Get related keyphrases", "wordpress-seo"),
                      Object(y.createElement)(
                        "span",
                        { className: "screen-reader-text" },
                        Object(E.__)(
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
    (F.propTypes = {
      keyphrase: w.a.string,
      location: w.a.string,
      whichModalOpen: w.a.oneOf(["none", "metabox", "sidebar"]),
      isLoggedIn: w.a.bool,
      onOpen: w.a.func.isRequired,
      onOpenWithNoKeyphrase: w.a.func.isRequired,
      onClose: w.a.func.isRequired,
      onAuthentication: w.a.func.isRequired,
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
        Object(v.withSelect)(function (e) {
          var t = e("yoast-seo/editor"),
            n = t.getSEMrushModalOpen,
            r = t.getSEMrushLoginStatus;
          return { whichModalOpen: n(), isLoggedIn: r() };
        }),
        Object(v.withDispatch)(function (e) {
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
      H = n(55);
    var W = T.a.div(
        q ||
          (q = h()([
            "\n\tpadding: 16px;\n\t/* Necessary to compensate negative top margin of the collapsible after the keyword input. */\n\tborder-bottom: 1px solid transparent;\n",
          ]))
      ),
      G = (function (e) {
        u()(a, e);
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
              return p()(this, e);
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
                        Object(E.__)(
                          "Please enter a focus keyphrase first to get related keyphrases",
                          "wordpress-seo"
                        )
                      ),
                    this.props.keyword.includes(",") &&
                      e.push(
                        Object(E.__)(
                          "Are you trying to use multiple keyphrases? You should add them separately below.",
                          "wordpress-seo"
                        )
                      ),
                    this.props.keyword.length > 191 &&
                      e.push(
                        Object(E.__)(
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
                          W,
                          { location: n },
                          Object(y.createElement)(k.KeywordInput, {
                            id: "focus-keyword-input-".concat(n),
                            onChange: e.props.onFocusKeywordChange,
                            keyword: e.props.keyword,
                            label: Object(E.__)(
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
                      Object(E.__)(
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
    (G.propTypes = {
      keyword: w.a.string,
      onFocusKeywordChange: w.a.func.isRequired,
      onFocusKeyword: w.a.func.isRequired,
      onBlurKeyword: w.a.func.isRequired,
      isSEMrushIntegrationActive: w.a.bool,
      displayNoKeyphraseMessage: w.a.bool,
    }),
      (G.defaultProps = {
        keyword: "",
        isSEMrushIntegrationActive: !1,
        displayNoKeyphraseMessage: !1,
      }),
      (t.a = Object(O.compose)([
        Object(v.withSelect)(function (e) {
          var t = e("yoast-seo/editor"),
            n = t.getFocusKeyphrase,
            r = t.getSEMrushNoKeyphraseMessage;
          return { keyword: n(), displayNoKeyphraseMessage: r() };
        }),
        Object(v.withDispatch)(function (e) {
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
      ])(G));
  },
  function (e, t, n) {
    "use strict";
    var r,
      o,
      a,
      i = n(10),
      s = n.n(i),
      c = n(5),
      l = n.n(c),
      u = n(7),
      d = n.n(u),
      p = n(13),
      f = n.n(p),
      m = n(14),
      b = n.n(m),
      h = n(8),
      y = n.n(h),
      g = n(15),
      O = n.n(g),
      v = n(0),
      E = n(4),
      j = n(1),
      w = n.n(j),
      _ = n(12),
      T = n.n(_),
      k = n(3),
      S = n(2),
      R = n(96),
      P = n(82),
      A = n(51),
      C = n(42),
      x = n(35),
      I = n(29),
      D = n(55),
      N = n(36);
    function L(e) {
      var t = e.target,
        n = e.children;
      return Object(v.createElement)(N.a, { target: t }, n);
    }
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
    function F(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? M(Object(n), !0).forEach(function (t) {
              s()(e, t, n[t]);
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
    L.propTypes = {
      target: w.a.string.isRequired,
      children: w.a.node.isRequired,
    };
    var q = T.a.span(
        r ||
          (r = O()([
            "\n\tfont-size: 1em;\n\tfont-weight: bold;\n\tmargin: 0 0 8px;\n\tdisplay: block;\n",
          ]))
      ),
      B = T.a.div(o || (o = O()(["\n\tpadding: 16px;\n"]))),
      U = T()(D.a)(a || (a = O()(["\n\tmargin: -8px 0 -4px 4px;\n"]))),
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
              return b()(this, e);
            });
        function o() {
          return l()(this, o), r.apply(this, arguments);
        }
        return (
          d()(o, [
            {
              key: "renderResults",
              value: function () {
                return Object(v.createElement)(
                  v.Fragment,
                  null,
                  Object(v.createElement)(
                    q,
                    null,
                    Object(k.__)("Analysis results", "wordpress-seo"),
                    Object(v.createElement)(
                      U,
                      {
                        href: wpseoAdminL10n[
                          "shortlinks.readability_analysis_info"
                        ],
                        className: "dashicons",
                      },
                      Object(v.createElement)(
                        "span",
                        { className: "screen-reader-text" },
                        Object(k.__)(
                          "Learn more about the readability analysis",
                          "wordpress-seo"
                        )
                      )
                    )
                  ),
                  Object(v.createElement)(P.a, {
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
                  t = Object(C.a)(this.props.overallScore);
                return (
                  Object(S.isNil)(this.props.overallScore) &&
                    (t.className = "loading"),
                  Object(v.createElement)(
                    I.LocationConsumer,
                    null,
                    function (n) {
                      return "sidebar" === n
                        ? Object(v.createElement)(
                            A.a,
                            {
                              title: Object(k.__)(
                                "Readability analysis",
                                "wordpress-seo"
                              ),
                              titleScreenReaderText:
                                t.screenReaderReadabilityText,
                              prefixIcon: Object(x.getIconForScore)(
                                t.className
                              ),
                              prefixIconCollapsed: Object(x.getIconForScore)(
                                t.className
                              ),
                              id: "yoast-readability-analysis-collapsible-".concat(
                                n
                              ),
                            },
                            e.renderResults()
                          )
                        : "metabox" === n
                        ? Object(v.createElement)(
                            L,
                            { target: "wpseo-metabox-readability-root" },
                            Object(v.createElement)(
                              B,
                              null,
                              Object(v.createElement)(R.a, {
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
      })(v.Component);
    (K.propTypes = {
      results: w.a.array.isRequired,
      marksButtonStatus: w.a.string.isRequired,
      overallScore: w.a.number,
    }),
      (K.defaultProps = { overallScore: null }),
      (t.a = Object(E.withSelect)(function (e) {
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
      l = n(3),
      u = n(1),
      d = n.n(u),
      p = n(31),
      f = n.n(p),
      m = n(15),
      b = n.n(m),
      h = n(6),
      y = n(18),
      g = n(9),
      O = n(37),
      v = n.n(O),
      E = n(12),
      j = n.n(E),
      w = n(85),
      _ = n(48),
      T = j.a.div(r || (r = b()(["\n\tpadding: 16px;\n"]))),
      k = function (e, t, n) {
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
        ].concat(f()(e));
      },
      S = function (e) {
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
      R = function (e) {
        return Object(i.createElement)(h.FieldGroup, {
          label: e.helpTextTitle,
          linkTo: e.helpTextLink,
          linkText: Object(l.__)(
            "Learn more about structured data with Schema.org",
            "wordpress-seo"
          ),
          description: e.helpTextDescription,
        });
      };
    R.propTypes = {
      helpTextTitle: d.a.string.isRequired,
      helpTextLink: d.a.string.isRequired,
      helpTextDescription: d.a.string.isRequired,
    };
    var P = function (e) {
      return Object(i.createElement)(
        "p",
        null,
        e.helpTextDescription + " ",
        Object(i.createElement)(
          "a",
          { href: e.helpTextLink },
          Object(l.__)("Read more about Schema.", "wordpress-seo")
        )
      );
    };
    P.propTypes = {
      helpTextDescription: d.a.string.isRequired,
      helpTextLink: d.a.string.isRequired,
    };
    var A = function (e) {
      var t,
        n = k(e.pageTypeOptions, e.defaultPageType, e.postTypeName),
        r = k(e.articleTypeOptions, e.defaultArticleType, e.postTypeName),
        o = Object(_.isFeatureEnabled)("SCHEMA_BLOCKS");
      return Object(i.createElement)(
        i.Fragment,
        null,
        o ? Object(i.createElement)(P, e) : Object(i.createElement)(R, e),
        o &&
          Object(i.createElement)(y.Slot, {
            name: Object(g.join)(["yoast-schema-blocks-analysis", e.location]),
          }),
        Object(i.createElement)(h.FieldGroup, {
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
        Object(i.createElement)(h.Select, {
          id: Object(g.join)(["yoast-schema-page-type", e.location]),
          options: n,
          label: Object(l.__)("Page type", "wordpress-seo"),
          onChange: e.schemaPageTypeChange,
          selected: e.schemaPageTypeSelected,
        }),
        e.showArticleTypeInput &&
          Object(i.createElement)(h.Select, {
            id: Object(g.join)(["yoast-schema-article-type", e.location]),
            options: r,
            label: Object(l.__)("Article type", "wordpress-seo"),
            onChange: e.schemaArticleTypeChange,
            selected: e.schemaArticleTypeSelected,
          }),
        e.displayFooter &&
          Object(i.createElement)(
            "p",
            null,
            ((t = e.postTypeName),
            v()({
              mixedString: S(t),
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
    (A.propTypes = {
      schemaPageTypeChange: d.a.func,
      schemaPageTypeSelected: d.a.string,
      pageTypeOptions: w.b.isRequired,
      schemaArticleTypeChange: d.a.func,
      schemaArticleTypeSelected: d.a.string,
      articleTypeOptions: w.b.isRequired,
      showArticleTypeInput: d.a.bool.isRequired,
      additionalHelpTextLink: d.a.string.isRequired,
      helpTextLink: d.a.string.isRequired,
      helpTextTitle: d.a.string.isRequired,
      helpTextDescription: d.a.string.isRequired,
      postTypeName: d.a.string.isRequired,
      displayFooter: d.a.bool,
      defaultPageType: d.a.string.isRequired,
      defaultArticleType: d.a.string.isRequired,
      location: d.a.string.isRequired,
    }),
      (A.defaultProps = {
        schemaPageTypeChange: function () {},
        schemaPageTypeSelected: null,
        schemaArticleTypeChange: function () {},
        schemaArticleTypeSelected: null,
        displayFooter: !1,
      });
    var C = function (e) {
      return e.isMetabox
        ? Object(i.createPortal)(
            Object(i.createElement)(T, null, Object(i.createElement)(A, e)),
            document.getElementById("wpseo-meta-section-schema")
          )
        : Object(i.createElement)(A, e);
    };
    (C.propTypes = {
      showArticleTypeInput: d.a.bool,
      articleTypeLabel: d.a.string,
      additionalHelpTextLink: d.a.string,
      pageTypeLabel: d.a.string.isRequired,
      helpTextLink: d.a.string.isRequired,
      helpTextTitle: d.a.string.isRequired,
      helpTextDescription: d.a.string.isRequired,
      isMetabox: d.a.bool.isRequired,
      postTypeName: d.a.string.isRequired,
      displayFooter: d.a.bool,
      loadSchemaArticleData: d.a.func.isRequired,
      loadSchemaPageData: d.a.func.isRequired,
      location: d.a.string.isRequired,
    }),
      (C.defaultProps = {
        showArticleTypeInput: !1,
        articleTypeLabel: "",
        additionalHelpTextLink: "",
        displayFooter: !1,
      });
    var x = C,
      I = n(33),
      D = n(58);
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
    function L(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? N(Object(n), !0).forEach(function (t) {
              a()(e, t, n[t]);
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
    var M = function (e) {
      var t = null !== I.a.articleTypeInput;
      Object(i.useEffect)(function () {
        e.loadSchemaPageData(), t && e.loadSchemaArticleData();
      }, []);
      var n = window.wpseoScriptData.metabox.schema,
        r = n.pageTypeOptions,
        o = n.articleTypeOptions,
        a = {
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
          articleTypeOptions: o,
        },
        s = L(
          L(L({}, e), a),
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
      return Object(i.createElement)(x, s);
    };
    (M.propTypes = {
      displayFooter: d.a.bool.isRequired,
      schemaPageTypeSelected: d.a.string.isRequired,
      schemaArticleTypeSelected: d.a.string.isRequired,
      defaultArticleType: d.a.string.isRequired,
      defaultPageType: d.a.string.isRequired,
      loadSchemaPageData: d.a.func.isRequired,
      loadSchemaArticleData: d.a.func.isRequired,
      schemaPageTypeChange: d.a.func.isRequired,
      schemaArticleTypeChange: d.a.func.isRequired,
      location: d.a.string.isRequired,
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
        Object(D.a)(),
      ])(M));
  },
  function (e, t, n) {
    "use strict";
    var r = n(19),
      o = n(4),
      a = n(0),
      i = n(3),
      s = n(6),
      c = n(9),
      l = n(1),
      u = n.n(l),
      d = n(29),
      p = function (e) {
        var t = e.noIndex,
          n = e.onNoIndexChange,
          r = e.editorContext,
          o = e.isPrivateBlog,
          l = (function (e) {
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
        return Object(a.createElement)(d.LocationConsumer, null, function (e) {
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
              options: l,
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
    (p.propTypes = {
      noIndex: u.a.string.isRequired,
      onNoIndexChange: u.a.func.isRequired,
      editorContext: u.a.object.isRequired,
      isPrivateBlog: u.a.bool,
    }),
      (p.defaultProps = { isPrivateBlog: !1 });
    var f = function (e) {
      var t = e.noFollow,
        n = e.onNoFollowChange,
        r = e.postTypeName;
      return Object(a.createElement)(d.LocationConsumer, null, function (e) {
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
      noFollow: u.a.string.isRequired,
      onNoFollowChange: u.a.func.isRequired,
      postTypeName: u.a.string.isRequired,
    };
    var m = function (e) {
      var t = e.advanced,
        n = e.onAdvancedChange;
      return Object(a.createElement)(d.LocationConsumer, null, function (e) {
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
      advanced: u.a.array.isRequired,
      onAdvancedChange: u.a.func.isRequired,
    };
    var b = function (e) {
      var t = e.breadcrumbsTitle,
        n = e.onBreadcrumbsTitleChange;
      return Object(a.createElement)(d.LocationConsumer, null, function (e) {
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
    b.propTypes = {
      breadcrumbsTitle: u.a.string.isRequired,
      onBreadcrumbsTitleChange: u.a.func.isRequired,
    };
    var h = function (e) {
      var t = e.canonical,
        n = e.onCanonicalChange;
      return Object(a.createElement)(d.LocationConsumer, null, function (e) {
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
    h.propTypes = {
      canonical: u.a.string.isRequired,
      onCanonicalChange: u.a.func.isRequired,
    };
    var y = function (e) {
      var t = e.noIndex,
        n = e.noFollow,
        r = e.advanced,
        o = e.breadcrumbsTitle,
        i = e.canonical,
        s = e.onNoIndexChange,
        c = e.onNoFollowChange,
        l = e.onAdvancedChange,
        u = e.onBreadcrumbsTitleChange,
        d = e.onCanonicalChange,
        y = e.onLoad,
        g = e.isLoading,
        O = e.editorContext,
        v = e.isBreadcrumbsDisabled,
        E = e.isPrivateBlog;
      Object(a.useEffect)(function () {
        setTimeout(function () {
          g && y();
        });
      });
      var j = {
          noIndex: t,
          onNoIndexChange: s,
          editorContext: O,
          isPrivateBlog: E,
        },
        w = {
          noFollow: n,
          onNoFollowChange: c,
          postTypeName: O.postTypeNameSingular,
        },
        _ = { advanced: r, onAdvancedChange: l },
        T = { breadcrumbsTitle: o, onBreadcrumbsTitleChange: u },
        k = { canonical: i, onCanonicalChange: d };
      return g
        ? null
        : Object(a.createElement)(
            a.Fragment,
            null,
            Object(a.createElement)(p, j),
            O.isPost && Object(a.createElement)(f, w),
            O.isPost && Object(a.createElement)(m, _),
            !v && Object(a.createElement)(b, T),
            Object(a.createElement)(h, k)
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
      Object(o.withSelect)(function (e) {
        var t = e("yoast-seo/editor"),
          n = t.getNoIndex,
          r = t.getNoFollow,
          o = t.getAdvanced,
          a = t.getBreadcrumbsTitle,
          i = t.getCanonical,
          s = t.getIsLoading,
          c = t.getEditorContext,
          l = (0, t.getPreferences)(),
          u = l.isBreadcrumbsDisabled,
          d = l.isPrivateBlog;
        return {
          noIndex: n(),
          noFollow: r(),
          advanced: o(),
          breadcrumbsTitle: a(),
          canonical: i(),
          isLoading: s(),
          editorContext: c(),
          isBreadcrumbsDisabled: u,
          isPrivateBlog: d,
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
    ])(g);
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
    function d(e) {
      return ("" + e).replace(u, "$&/");
    }
    var p,
      f,
      m = b,
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
      var o,
        i,
        s = e.result,
        c = e.keyPrefix,
        l = e.func,
        u = e.context,
        p = l.call(u, t, e.count++);
      Array.isArray(p)
        ? g(p, s, n, a.thatReturnsArgument)
        : null != p &&
          (r.isValidElement(p) &&
            ((o = p),
            (i =
              c + (!p.key || (t && t.key === p.key) ? "" : d(p.key) + "/") + n),
            (p = r.cloneElement(
              o,
              { key: i },
              void 0 !== o.props ? o.props.children : void 0
            ))),
          s.push(p));
    }
    function g(e, t, n, r, a) {
      var s = "";
      null != n && (s = d(n) + "/");
      var u = h.getPooled(t, s, r, a);
      !(function (e, t, n) {
        null == e ||
          (function e(t, n, r, a) {
            var s,
              u = typeof t;
            if (
              (("undefined" !== u && "boolean" !== u) || (t = null),
              null === t ||
                "string" === u ||
                "number" === u ||
                ("object" === u && t.$$typeof === o))
            )
              return r(a, t, "" === n ? "." + l(t, 0) : n), 1;
            var d = 0,
              p = "" === n ? "." : n + ":";
            if (Array.isArray(t))
              for (var f = 0; f < t.length; f++)
                d += e((s = t[f]), p + l(s, f), r, a);
            else {
              var m = (function (e) {
                var t = e && ((c && e[c]) || e["@@iterator"]);
                if ("function" == typeof t) return t;
              })(t);
              if (m)
                for (var b, h = m.call(t), y = 0; !(b = h.next()).done; )
                  d += e((s = b.value), p + l(s, y++), r, a);
              else if ("object" === u) {
                var g = "" + t;
                i(
                  !1,
                  "Objects are not valid as a React child (found: %s).%s",
                  "[object Object]" === g
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : g,
                  ""
                );
              }
            }
            return d;
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
      (p = function (e, t, n, r) {
        if (this.instancePool.length) {
          var o = this.instancePool.pop();
          return this.call(o, e, t, n, r), o;
        }
        return new this(e, t, n, r);
      }),
      ((f = h).instancePool = []),
      (f.getPooled = p || m),
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
        for (var n in e) g(e[n], t, n, a.thatReturnsArgument);
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
          var l = [n, r, o, a, i, s],
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
      o = n(6);
    t.a = Object(r.withSelect)(function (e) {
      return { message: (0, e("yoast-seo/editor").getWarningMessage)() };
    })(o.Warning);
  },
  function (e, t, n) {
    "use strict";
    var r = n(10),
      o = n.n(r),
      a = n(27),
      i = n.n(a),
      s = n(0),
      c = n(19),
      l = n(4),
      u = n(3),
      d = n(147),
      p = n(29),
      f = n(112),
      m = n(40),
      b = function (e, t) {
        var n = 0;
        return (
          t.shortenedBaseUrl &&
            "string" == typeof t.shortenedBaseUrl &&
            (n = t.shortenedBaseUrl.length),
          (e.url = e.url.replace(/\s+/g, "-")),
          "-" === e.url[e.url.length - 1] && (e.url = e.url.slice(0, -1)),
          "-" === e.url[n] && (e.url = e.url.slice(0, n) + e.url.slice(n + 1)),
          Object(m.applyReplaceUsingPlugin)(e)
        );
      };
    t.a = Object(c.compose)([
      Object(l.withSelect)(function (e) {
        var t = e("yoast-seo/editor"),
          n = t.getBaseUrlFromSettings,
          r = t.getDateFromSettings,
          o = t.getFocusKeyphrase,
          a = t.getRecommendedReplaceVars,
          i = t.getReplaceVars,
          s = t.getShoppingData,
          c = t.getSiteIconUrlFromSettings,
          l = t.getSnippetEditorData,
          u = t.getSnippetEditorMode,
          d = t.getSnippetEditorPreviewImageUrl,
          p = t.getSnippetEditorWordsToHighlight,
          f = t.isCornerstoneContent,
          m = t.getIsTerm,
          b = i();
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
            keyword: o(),
            mobileImageSrc: d(),
            mode: u(),
            recommendedReplacementVariables: a(),
            replacementVariables: b,
            shoppingData: s(),
            wordsToHighlight: p(),
            isCornerstone: f(),
            isTaxonomy: m(),
          }
        );
      }),
      Object(l.withDispatch)(function (e) {
        var t = e("yoast-seo/editor"),
          n = t.updateData,
          r = t.switchMode,
          a = t.updateAnalysisData,
          i = e("core/editor");
        return {
          onChange: function (e, t) {
            switch (e) {
              case "mode":
                r(t);
                break;
              case "slug":
                n({ slug: t }), i && i.editPost({ slug: t });
                break;
              default:
                n(o()({}, e, t));
            }
          },
          onChangeAnalysisData: a,
        };
      }),
    ])(function (e) {
      return Object(s.createElement)(p.LocationConsumer, null, function (t) {
        return Object(s.createElement)(
          f.a,
          { icon: "eye", hasPaperStyle: e.hasPaperStyle },
          Object(s.createElement)(
            d.SnippetEditor,
            i()({}, e, {
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
      o = n(4),
      a = n(3),
      i = n(9),
      s = n(148),
      c = n(20),
      l = n(58),
      u = n(90),
      d = function (e) {
        Object(o.dispatch)("yoast-seo/editor").setTwitterPreviewImage({
          url: e.url,
          id: e.id,
          warnings: Object(i.validateTwitterImage)(e),
        });
      },
      p = function () {
        Object(u.a)(d);
      };
    t.a = Object(r.compose)([
      Object(o.withSelect)(function (e) {
        var t = e("yoast-seo/editor"),
          n = t.getTwitterDescription,
          r = t.getTwitterTitle,
          o = t.getTwitterImageUrl,
          i = t.getFacebookImageUrl,
          s = t.getFacebookTitle,
          l = t.getFacebookDescription,
          u = t.getDescription,
          d = t.getSeoTitle,
          p = t.getTwitterWarnings,
          f = t.getTwitterImageType,
          m = t.getImageFallback,
          b = t.getRecommendedReplaceVars,
          h = t.getReplaceVars,
          y = t.getSiteUrl,
          g = t.getAuthorName,
          O = t.getSeoTitleTemplate,
          v = t.getSeoTitleTemplateNoFallback,
          E = t.getSocialTitleTemplate,
          j = t.getSeoDescriptionTemplate,
          w = t.getSocialDescriptionTemplate,
          _ = t.getReplacedExcerpt,
          T = Object(a.sprintf)(
            /* Translators: %s expands to the social medium name, i.e. Faceboook. */
            Object(a.__)(
              "Modify your %s title by editing it right here...",
              "wordpress-seo"
            ),
            "Twitter"
          ),
          k = Object(a.sprintf)(
            /* Translators: %s expands to the social medium name, i.e. Faceboook. */
            Object(a.__)(
              "Modify your %s description by editing it right here...",
              "wordpress-seo"
            ),
            "Twitter"
          );
        /* Translators: %s expands to the social medium name, i.e. Faceboook. */ return {
          imageUrl: o(),
          imageFallbackUrl: i() || m(),
          recommendedReplacementVariables: b(),
          replacementVariables: h(),
          description: n(),
          descriptionPreviewFallback: w() || l() || u() || j() || _() || k,
          title: r(),
          titlePreviewFallback: E() || s() || d() || v() || O() || T,
          imageWarnings: p(),
          authorName: g(),
          siteUrl: y(),
          isPremium: !!Object(c.a)().isPremium,
          isLarge: "summary" !== f(),
          titleInputPlaceholder: T,
          descriptionInputPlaceholder: k,
          socialMediumName: "Twitter",
        };
      }),
      Object(o.withDispatch)(function (e) {
        var t = e("yoast-seo/editor"),
          n = t.setTwitterPreviewTitle,
          r = t.setTwitterPreviewDescription,
          o = t.clearTwitterPreviewImage,
          a = t.loadTwitterPreviewData;
        return {
          onSelectImageClick: p,
          onRemoveImageClick: o,
          onDescriptionChange: r,
          onTitleChange: n,
          onLoad: a,
        };
      }),
      Object(l.a)(),
    ])(s.a);
  },
  function (e, t, n) {
    "use strict";
    var r = n(19),
      o = n(4),
      a = n(3),
      i = n(9),
      s = n(150),
      c = n(20),
      l = n(58),
      u = n(90),
      d = function (e) {
        Object(o.dispatch)("yoast-seo/editor").setFacebookPreviewImage({
          url: e.url,
          id: e.id,
          warnings: Object(i.validateFacebookImage)(e),
        });
      },
      p = function () {
        Object(u.a)(d);
      };
    t.a = Object(r.compose)([
      Object(o.withSelect)(function (e) {
        var t = e("yoast-seo/editor"),
          n = t.getFacebookDescription,
          r = t.getDescription,
          o = t.getFacebookTitle,
          i = t.getSeoTitle,
          s = t.getFacebookImageUrl,
          l = t.getImageFallback,
          u = t.getFacebookWarnings,
          d = t.getRecommendedReplaceVars,
          p = t.getReplaceVars,
          f = t.getSiteUrl,
          m = t.getAuthorName,
          b = t.getSeoTitleTemplate,
          h = t.getSeoTitleTemplateNoFallback,
          y = t.getSocialTitleTemplate,
          g = t.getSeoDescriptionTemplate,
          O = t.getSocialDescriptionTemplate,
          v = t.getReplacedExcerpt,
          E = Object(a.sprintf)(
            /* Translators: %s expands to the social medium name, i.e. Faceboook. */
            Object(a.__)(
              "Modify your %s title by editing it right here...",
              "wordpress-seo"
            ),
            "Facebook"
          ),
          j = Object(a.sprintf)(
            /* Translators: %s expands to the social medium name, i.e. Faceboook. */
            Object(a.__)(
              "Modify your %s description by editing it right here...",
              "wordpress-seo"
            ),
            "Facebook"
          );
        /* Translators: %s expands to the social medium name, i.e. Faceboook. */ return {
          imageUrl: s(),
          imageFallbackUrl: l(),
          recommendedReplacementVariables: d(),
          replacementVariables: p(),
          description: n(),
          descriptionPreviewFallback: O() || r() || g() || v() || j,
          title: o(),
          titlePreviewFallback: y() || i() || h() || b() || E,
          imageWarnings: u(),
          authorName: m(),
          siteUrl: f(),
          isPremium: !!Object(c.a)().isPremium,
          titleInputPlaceholder: E,
          descriptionInputPlaceholder: j,
          socialMediumName: "Facebook",
        };
      }),
      Object(o.withDispatch)(function (e) {
        var t = e("yoast-seo/editor"),
          n = t.setFacebookPreviewTitle,
          r = t.setFacebookPreviewDescription,
          o = t.clearFacebookPreviewImage,
          a = t.loadFacebookPreviewData;
        return {
          onSelectImageClick: p,
          onRemoveImageClick: o,
          onDescriptionChange: r,
          onTitleChange: n,
          onLoad: a,
        };
      }),
      Object(l.a)(),
    ])(s.a);
  },
  ,
  ,
  ,
  ,
  ,
  function (e, t) {
    e.exports = window.wp.editPost;
  },
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    var r,
      o,
      a,
      i,
      s = n(34),
      c = n.n(s),
      l = n(31),
      u = n.n(l),
      d = n(39),
      p = n.n(d),
      f = n(0),
      m = /<(\/)?(\w+)\s*(\/)?>/g;
    function b(e, t, n, r, o) {
      return {
        element: e,
        tokenStart: t,
        tokenLength: n,
        prevOffset: r,
        leadingTextStart: o,
        children: [],
      };
    }
    function h() {
      var e = r.length - o;
      0 !== e && a.push(r.substr(o, e));
    }
    function y(e) {
      var t = e.element,
        n = e.tokenStart,
        o = e.tokenLength,
        a = e.prevOffset,
        s = e.children,
        c = i[i.length - 1],
        l = r.substr(c.prevOffset, n - c.prevOffset);
      l && c.children.push(l),
        c.children.push(f.cloneElement.apply(void 0, [t, null].concat(u()(s)))),
        (c.prevOffset = a || n + o);
    }
    function g(e) {
      var t = (function () {
          var e = m.exec(r);
          if (null === e) return ["no-more-tokens"];
          var t = e.index,
            n = p()(e, 4),
            o = n[0],
            a = n[1],
            i = n[2],
            s = n[3],
            c = o.length;
          return s
            ? ["self-closed", i, t, c]
            : a
            ? ["closer", i, t, c]
            : ["opener", i, t, c];
        })(),
        n = p()(t, 4),
        s = n[0],
        c = n[1],
        l = n[2],
        d = n[3],
        g = i.length,
        O = l > o ? o : null;
      if (!e[c]) return h(), !1;
      switch (s) {
        case "no-more-tokens":
          if (0 !== g) {
            var v = i.pop(),
              E = v.leadingTextStart,
              j = v.tokenStart;
            a.push(r.substr(E, j));
          }
          return h(), !1;
        case "self-closed":
          return 0 === g
            ? (null !== O && a.push(r.substr(O, l - O)),
              a.push(e[c]),
              (o = l + d),
              !0)
            : (y(b(e[c], l, d)), (o = l + d), !0);
        case "opener":
          return i.push(b(e[c], l, d, l + d, O)), (o = l + d), !0;
        case "closer":
          if (1 === g)
            return (
              (function (e) {
                var t = i.pop(),
                  n = t.element,
                  o = t.leadingTextStart,
                  s = t.prevOffset,
                  c = t.tokenStart,
                  l = t.children,
                  d = e ? r.substr(s, e - s) : r.substr(s);
                d && l.push(d),
                  null !== o && a.push(r.substr(o, c - o)),
                  a.push(
                    f.cloneElement.apply(void 0, [n, null].concat(u()(l)))
                  );
              })(l),
              (o = l + d),
              !0
            );
          var w = i.pop(),
            _ = r.substr(w.prevOffset, l - w.prevOffset);
          w.children.push(_), (w.prevOffset = l + d);
          var T = b(w.element, w.tokenStart, w.tokenLength, l + d);
          return (T.children = w.children), y(T), (o = l + d), !0;
        default:
          return h(), !1;
      }
    }
    t.a = function (e, t) {
      if (
        ((r = e),
        (o = 0),
        (a = []),
        (i = []),
        (m.lastIndex = 0),
        !(function (e) {
          var t = "object" === c()(e),
            n = t && Object.values(e);
          return (
            t &&
            n.length &&
            n.every(function (e) {
              return Object(f.isValidElement)(e);
            })
          );
        })(t))
      )
        throw new TypeError(
          "The conversionMap provided is not valid. It must be an object with values that are WPElements"
        );
      do {} while (g(t));
      return f.createElement.apply(void 0, [f.Fragment, null].concat(u()(a)));
    };
  },
  ,
  ,
  function (e, t) {
    e.exports = window.wp.annotations;
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
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return x;
    });
    var r = n(0),
      o = n(1),
      a = n.n(o),
      i = n(18),
      s = n(120),
      c = n(103);
    function l(e) {
      var t = e.theme;
      return Object(r.createElement)(
        c.a,
        { theme: t, location: "metabox" },
        Object(r.createElement)(i.Slot, { name: "YoastMetabox" }, function (e) {
          return Object(s.a)(e);
        })
      );
    }
    var u = n(4),
      d = n(3),
      p = n(124),
      f = n(161),
      m = n(160),
      b = n(125),
      h = n(126),
      y = n(122),
      g = n(52),
      O = n(32),
      v = n(128),
      E = n(163),
      j = n(162),
      w = function (e) {
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
                  d.sprintf
                )(Object(d.__)("%s preview", "wordpress-seo"), "Facebook"),
                initialIsOpen: !0,
              },
              Object(r.createElement)(E.a, null)
            ),
          n &&
            Object(r.createElement)(
              g.a,
              /* Translators: %s expands to Twitter. */ {
                title: Object(d.sprintf)(
                  Object(d.__)("%s preview", "wordpress-seo"),
                  "Twitter"
                ),
                hasSeparator: t,
                initialIsOpen: !0,
              },
              Object(r.createElement)(j.a, null)
            )
        );
      };
    w.propTypes = {
      displayFacebook: a.a.bool.isRequired,
      displayTwitter: a.a.bool.isRequired,
    };
    var _ = w,
      T = Object(u.withSelect)(function (e) {
        var t = (0, e("yoast-seo/editor").getPreferences)();
        return {
          displayFacebook: t.displayFacebook,
          displayTwitter: t.displayTwitter,
        };
      })(_),
      k = n(36);
    function S(e) {
      var t = e.target;
      return Object(r.createElement)(
        k.a,
        { target: t },
        Object(r.createElement)(T, null)
      );
    }
    S.propTypes = { target: a.a.string.isRequired };
    var R = n(127),
      P = n(115);
    function A(e) {
      var t = e.settings;
      return Object(r.createElement)(
        i.Fill,
        { name: "YoastMetabox" },
        Object(r.createElement)(
          O.a,
          { key: "warning", renderPriority: 1 },
          Object(r.createElement)(m.a, null)
        ),
        t.isKeywordAnalysisActive &&
          Object(r.createElement)(
            O.a,
            { key: "keyword-input", renderPriority: 8 },
            Object(r.createElement)(b.a, {
              isSEMrushIntegrationActive: t.isSEMrushIntegrationActive,
            }),
            !window.wpseoScriptData.metabox.isPremium &&
              Object(r.createElement)(
                i.Fill,
                { name: "YoastRelatedKeyphrases" },
                Object(r.createElement)(P.a, null)
              )
          ),
        Object(r.createElement)(
          O.a,
          { key: "google-preview", renderPriority: 9 },
          Object(r.createElement)(
            g.a,
            {
              id: "yoast-snippet-editor-metabox",
              title: Object(d.__)("Google preview", "wordpress-seo"),
              initialIsOpen: !0,
            },
            Object(r.createElement)(f.a, { hasPaperStyle: !1 })
          )
        ),
        t.isContentAnalysisActive &&
          Object(r.createElement)(
            O.a,
            { key: "readability-analysis", renderPriority: 10 },
            Object(r.createElement)(h.a, null)
          ),
        t.isKeywordAnalysisActive &&
          Object(r.createElement)(
            O.a,
            { key: "seo-analysis", renderPriority: 20 },
            Object(r.createElement)(y.a, {
              shouldUpsell: t.shouldUpsell,
              shouldUpsellWordFormRecognition: t.isWordFormRecognitionActive,
            })
          ),
        t.isCornerstoneActive &&
          Object(r.createElement)(
            O.a,
            { key: "cornerstone", renderPriority: 30 },
            Object(r.createElement)(p.a, null)
          ),
        t.displayAdvancedTab &&
          Object(r.createElement)(
            O.a,
            { key: "advanced", renderPriority: 40 },
            Object(r.createElement)(
              g.a,
              {
                id: "collapsible-advanced-settings",
                title: Object(d.__)("Advanced", "wordpress-seo"),
              },
              Object(r.createElement)(v.a, null)
            )
          ),
        t.displaySchemaSettings &&
          Object(r.createElement)(
            O.a,
            { key: "schema", renderPriority: 50 },
            Object(r.createElement)(R.a, null)
          ),
        Object(r.createElement)(
          O.a,
          { key: "social", renderPriority: -1 },
          Object(r.createElement)(S, { target: "wpseo-section-social" })
        )
      );
    }
    A.propTypes = { settings: a.a.object.isRequired };
    var C = Object(u.withSelect)(function (e, t) {
      return {
        settings: (0, e("yoast-seo/editor").getPreferences)(),
        store: t.store,
      };
    })(A);
    function x(e) {
      var t = e.target,
        n = e.store,
        o = e.theme;
      return Object(r.createElement)(
        k.a,
        { target: t },
        Object(r.createElement)(l, { store: n, theme: o }),
        Object(r.createElement)(C, { store: n, theme: o })
      );
    }
    x.propTypes = {
      target: a.a.string.isRequired,
      store: a.a.object,
      theme: a.a.object,
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
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
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
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
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
    e.exports = window.wp.plugins;
  },
  function (e, t) {
    e.exports = window.wp.htmlEntities;
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      n.d(t, "a", function () {
        return O;
      });
      var r = n(10),
        o = n.n(r),
        a = n(5),
        i = n.n(a),
        s = n(7),
        c = n.n(s),
        l = n(2),
        u = n(23),
        d = n(4),
        p = n(16),
        f = n(43),
        m = n(40),
        b = n(108);
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
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                o()(e, t, n[t]);
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
      var g = e.jQuery,
        O = (function () {
          function e(t, n) {
            i()(this, e),
              (this._refresh = t),
              (this._store = n),
              (this._data = {}),
              (this.getPostAttribute = this.getPostAttribute.bind(this)),
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
                  (this._data = this.getInitialData(e)),
                    Object(m.fillReplacementVariables)(this._data, this._store),
                    this._store.dispatch(Object(p.i)(t)),
                    this.subscribeToGutenberg(),
                    this.subscribeToYoastSEO();
                },
              },
              {
                key: "getInitialData",
                value: function (e) {
                  var t = this.collectGutenbergData(this.getPostAttribute);
                  return (
                    (e = Object(m.mapCustomFields)(e, this._store)),
                    y(
                      y(
                        {},
                        (e = Object(m.mapCustomTaxonomies)(e, this._store))
                      ),
                      t
                    )
                  );
                },
              },
              {
                key: "setRefresh",
                value: function (e) {
                  this._refresh = e;
                },
              },
              {
                key: "isShallowEqual",
                value: function (e, t) {
                  if (Object.keys(e).length !== Object.keys(t).length)
                    return !1;
                  for (var n in e)
                    if (e.hasOwnProperty(n) && (!(n in t) || e[n] !== t[n]))
                      return !1;
                  return !0;
                },
              },
              {
                key: "getMediaById",
                value: function (e) {
                  return (
                    this._coreDataSelect ||
                      (this._coreDataSelect = Object(d.select)("core")),
                    this._coreDataSelect.getMedia(e)
                  );
                },
              },
              {
                key: "getPostAttribute",
                value: function (e) {
                  return (
                    this._coreEditorSelect ||
                      (this._coreEditorSelect = Object(d.select)(
                        "core/editor"
                      )),
                    this._coreEditorSelect.getEditedPostAttribute(e)
                  );
                },
              },
              {
                key: "getSlug",
                value: function () {
                  if ("auto-draft" === this.getPostAttribute("status"))
                    return "";
                  var e = this.getPostAttribute("generated_slug") || "";
                  "auto-draft" === e && (e = "");
                  var t = this.getPostAttribute("slug") || e;
                  return decodeURIComponent(t);
                },
              },
              {
                key: "collectGutenbergData",
                value: function () {
                  var e = this.getPostAttribute("content"),
                    t = this.calculateContentImage(e),
                    n = this.getPostAttribute("excerpt") || "";
                  return {
                    content: e,
                    title: this.getPostAttribute("title") || "",
                    slug: this.getSlug(),
                    excerpt: n || Object(m.excerptFromContent)(e),
                    excerpt_only: n,
                    snippetPreviewImageURL: this.getFeaturedImage() || t,
                    contentImage: t,
                  };
                },
              },
              {
                key: "getFeaturedImage",
                value: function () {
                  var e = this.getPostAttribute("featured_media");
                  if (e) {
                    var t = this.getMediaById(e);
                    if (t) return t.source_url;
                  }
                  return null;
                },
              },
              {
                key: "calculateContentImage",
                value: function (e) {
                  var t = u.languageProcessing.imageInText(e),
                    n = "";
                  if (0 === t.length) return "";
                  do {
                    var r = t.shift(),
                      o = (r = g(r)).prop("src");
                    o && (n = o);
                  } while ("" === n && t.length > 0);
                  return n;
                },
              },
              {
                key: "handleEditorChange",
                value: function (e) {
                  this._data.title !== e.title &&
                    this._store.dispatch(Object(p.n)("title", e.title)),
                    this._data.excerpt !== e.excerpt &&
                      (this._store.dispatch(Object(p.n)("excerpt", e.excerpt)),
                      this._store.dispatch(
                        Object(p.n)("excerpt_only", e.excerpt_only)
                      )),
                    this._data.slug !== e.slug &&
                      this._store.dispatch(Object(p.m)({ slug: e.slug })),
                    this._data.snippetPreviewImageURL !==
                      e.snippetPreviewImageURL &&
                      this._store.dispatch(
                        Object(p.m)({
                          snippetPreviewImageURL: e.snippetPreviewImageURL,
                        })
                      ),
                    this._data.contentImage !== e.contentImage &&
                      this._store.dispatch(Object(f.c)(e.contentImage));
                },
              },
              {
                key: "reapplyMarkers",
                value: function () {
                  var e = Object(d.select)("yoast-seo/editor"),
                    t = e.getActiveMarker,
                    n = e.getMarkerPauseStatus,
                    r = t(),
                    o = n();
                  r && !o && Object(b.c)();
                },
              },
              {
                key: "refreshYoastSEO",
                value: function () {
                  var e = this.collectGutenbergData();
                  !this.isShallowEqual(this._data, e) &&
                    (this.handleEditorChange(e),
                    (this._data = e),
                    this._refresh());
                },
              },
              {
                key: "areNewAnalysisResultsAvailable",
                value: function () {
                  var e = Object(d.select)("yoast-seo/editor"),
                    t = e.getReadabilityResults(),
                    n = e.getResultsForFocusKeyword();
                  return (
                    (this._previousReadabilityResults !== t ||
                      this._previousSeoResults !== n) &&
                    ((this._previousReadabilityResults = t),
                    (this._previousSeoResults = n),
                    !0)
                  );
                },
              },
              {
                key: "onNewAnalysisResultsAvailable",
                value: function () {
                  this.reapplyMarkers();
                },
              },
              {
                key: "subscribeToGutenberg",
                value: function () {
                  (this.subscriber = Object(l.debounce)(
                    this.refreshYoastSEO,
                    500
                  )),
                    Object(d.subscribe)(this.subscriber);
                },
              },
              {
                key: "subscribeToYoastSEO",
                value: function () {
                  var e = this;
                  (this.yoastSubscriber = function () {
                    e.areNewAnalysisResultsAvailable() &&
                      e.onNewAnalysisResultsAvailable();
                  }),
                    Object(d.subscribe)(this.yoastSubscriber);
                },
              },
              {
                key: "getData",
                value: function () {
                  return this._data;
                },
              },
            ]),
            e
          );
        })();
    }.call(this, n(205)));
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
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r,
      o = n(46),
      a = n.n(o),
      i = n(0),
      s = n(169),
      c = n(247),
      l = n(117),
      u = n(4),
      d = n(3),
      p = n(67),
      f = n(2),
      m = n(18),
      b = n(19),
      h = n(25),
      y = n(42),
      g = n(27),
      O = n.n(g),
      v = n(15),
      E = n.n(v),
      j = n(1),
      w = n.n(j),
      _ = n(12),
      T = n.n(_).a.svg(
        r ||
          (r = E()([
            "\n\twidth: ",
            "px;\n\theight: ",
            "px;\n\t&&& path {\n\t\tfill: ",
            ";\n\t}\n\t&&& circle.yoast-icon-readability-score {\n\t\tfill: ",
            ";\n\t\tdisplay: ",
            ";\n\t}\n\t\n\t&&& circle.yoast-icon-seo-score {\n\t\tfill: ",
            ";\n\t\tdisplay: ",
            ";\n\t}\n",
          ])),
        function (e) {
          return e.size;
        },
        function (e) {
          return e.size;
        },
        function (e) {
          return e.color;
        },
        function (e) {
          return e.readabilityScoreColor;
        },
        function (e) {
          return e.isContentAnalysisActive ? "inline" : "none";
        },
        function (e) {
          return e.seoScoreColor;
        },
        function (e) {
          return e.isKeywordAnalysisActive ? "inline" : "none";
        }
      ),
      k = function (e) {
        return Object(i.createElement)(
          T,
          O()({}, e, {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 646.66 456.27",
          }),
          Object(i.createElement)("path", {
            d: "M73,405.26a68.53,68.53,0,0,1-12.82-4c-1-.42-2-.89-3-1.37-1.49-.72-3-1.56-4.77-2.56-1.5-.88-2.71-1.64-3.83-2.39-.9-.61-1.8-1.26-2.68-1.92q-2.64-2-5.08-4.19a68.26,68.26,0,0,1-8.4-9.17c-.92-1.2-1.68-2.25-2.35-3.24q-1.84-2.73-3.44-5.64a68.26,68.26,0,0,1-8.29-32.55V142.13a68.29,68.29,0,0,1,8.29-32.55,58.6,58.6,0,0,1,3.44-5.64,57.53,57.53,0,0,1,4-5.27A69.64,69.64,0,0,1,48.56,85.42,56.06,56.06,0,0,1,54.2,82,67.78,67.78,0,0,1,73,75.09,69.79,69.79,0,0,1,86.75,73.7H256.41L263,55.39H86.75A86.84,86.84,0,0,0,0,142.13V338.22A86.83,86.83,0,0,0,86.75,425H98.07V406.65H86.75A68.31,68.31,0,0,1,73,405.26ZM368.55,60.85l-1.41-.53L360.73,77.5l1.41.53a68.58,68.58,0,0,1,8.66,4,58.65,58.65,0,0,1,5.65,3.43A69.49,69.49,0,0,1,391,98.67c1.4,1.68,2.72,3.46,3.95,5.27s2.39,3.72,3.44,5.64a68.32,68.32,0,0,1,8.29,32.55V406.65H233.55l-.44.76c-3.07,5.37-6.26,10.48-9.49,15.19L222,425H425V142.13A87.19,87.19,0,0,0,368.55,60.85Z",
            fill: "#000001",
          }),
          Object(i.createElement)("path", {
            d: "M303.66,0l-96.8,268.87-47.58-149H101.1l72.72,186.78a73.61,73.61,0,0,1,0,53.73c-7.07,18.07-19.63,39.63-54.36,46l-1.56.29v49.57l2-.08c29-1.14,51.57-10.72,70.89-30.14,19.69-19.79,36.55-50.52,53-96.68L366.68,0Z",
            fill: "#000001",
          }),
          Object(i.createElement)("circle", {
            className: "yoast-icon-readability-score",
            cx: "561.26",
            cy: "142.43",
            r: "85.04",
            fill: "#000001",
            stroke: "#181716",
            strokeMiterlimit: "10",
            strokeWidth: "0.72",
          }),
          Object(i.createElement)("circle", {
            className: "yoast-icon-seo-score",
            cx: "561.26",
            cy: "341.96",
            r: "85.04",
            fill: "#000001",
            stroke: "#181716",
            strokeMiterlimit: "10",
            strokeWidth: "0.72",
          })
        );
      };
    (k.propTypes = {
      readabilityScoreColor: w.a.string,
      isContentAnalysisActive: w.a.bool,
      seoScoreColor: w.a.string,
      isKeywordAnalysisActive: w.a.bool,
      size: w.a.number,
      color: w.a.string,
    }),
      (k.defaultProps = {
        readabilityScoreColor: "#000000",
        isContentAnalysisActive: !1,
        seoScoreColor: "#000000",
        isKeywordAnalysisActive: !1,
        size: 20,
        color: "#000001",
      });
    var S = k,
      R = Object(b.compose)([
        Object(u.withSelect)(function (e) {
          var t,
            n,
            r = e("yoast-seo/editor"),
            o = Object(y.a)(r.getResultsForFocusKeyword().overallScore),
            a = Object(y.a)(r.getReadabilityResults().overallScore),
            i = r.getPreferences(),
            s = i.isKeywordAnalysisActive,
            c = i.isContentAnalysisActive;
          switch (a.className) {
            case "good":
              t = h.colors.$color_good;
              break;
            case "ok":
              t = h.colors.$color_ok;
              break;
            case "bad":
            default:
              t = h.colors.$color_bad;
          }
          switch (o.className) {
            case "good":
              n = h.colors.$color_good;
              break;
            case "ok":
              n = h.colors.$color_ok;
              break;
            case "bad":
            default:
              n = h.colors.$color_bad;
          }
          return {
            readabilityScoreColor: t,
            seoScoreColor: n,
            isKeywordAnalysisActive: s,
            isContentAnalysisActive: c,
          };
        }),
      ])(S),
      P = n(124),
      A = n(160),
      C = n(125),
      x = n(126),
      I = n(122),
      D = n(32),
      N = n(84),
      L = n(161),
      M = function () {
        return Object(i.createElement)(
          N.a,
          {
            title: Object(d.__)("Google preview", "wordpress-seo"),
            id: "yoast-google-preview-modal",
          },
          Object(i.createElement)(L.a, {
            showCloseButton: !1,
            hasPaperStyle: !1,
          })
        );
      },
      F = n(162),
      q = function () {
        return Object(i.createElement)(
          N.a,
          {
            title: Object(d.__)("Twitter preview", "wordpress-seo"),
            id: "yoast-twitter-preview-modal",
          },
          Object(i.createElement)(F.a, null)
        );
      },
      B = n(163),
      U = function () {
        return Object(i.createElement)(
          N.a,
          {
            title: Object(d.__)("Facebook preview", "wordpress-seo"),
            id: "yoast-facebook-preview-modal",
          },
          Object(i.createElement)(B.a, null)
        );
      },
      K = n(127),
      H = n(51),
      W = n(128);
    function G(e) {
      var t = e.settings;
      return Object(i.createElement)(
        i.Fragment,
        null,
        Object(i.createElement)(
          m.Fill,
          { name: "YoastSidebar" },
          Object(i.createElement)(
            D.a,
            { key: "warning", renderPriority: 1 },
            Object(i.createElement)(A.a, null)
          ),
          t.isKeywordAnalysisActive &&
            Object(i.createElement)(
              D.a,
              { key: "keyword-input", renderPriority: 8 },
              Object(i.createElement)(C.a, {
                isSEMrushIntegrationActive: t.isSEMrushIntegrationActive,
              })
            ),
          Object(i.createElement)(
            D.a,
            { key: "google-preview", renderPriority: 23 },
            Object(i.createElement)(M, null)
          ),
          t.displayFacebook &&
            Object(i.createElement)(
              D.a,
              { key: "facebook-preview", renderPriority: 24 },
              Object(i.createElement)(U, null)
            ),
          t.displayTwitter &&
            Object(i.createElement)(
              D.a,
              { key: "twitter-preview", renderPriority: 25 },
              Object(i.createElement)(q, null)
            ),
          t.displaySchemaSettings &&
            Object(i.createElement)(
              D.a,
              { key: "schema", renderPriority: 26 },
              Object(i.createElement)(
                H.a,
                { title: Object(d.__)("Schema", "wordpress-seo") },
                Object(i.createElement)(K.a, null)
              )
            ),
          t.displayAdvancedTab &&
            Object(i.createElement)(
              D.a,
              { key: "advanced", renderPriority: 27 },
              Object(i.createElement)(
                H.a,
                { title: Object(d.__)("Advanced", "wordpress-seo") },
                Object(i.createElement)(W.a, null)
              )
            ),
          t.isContentAnalysisActive &&
            Object(i.createElement)(
              D.a,
              { key: "readability", renderPriority: 10 },
              Object(i.createElement)(x.a, null)
            ),
          t.isKeywordAnalysisActive &&
            Object(i.createElement)(
              D.a,
              { key: "seo", renderPriority: 20 },
              Object(i.createElement)(I.a, {
                shouldUpsell: t.shouldUpsell,
                shouldUpsellWordFormRecognition: t.isWordFormRecognitionActive,
              })
            ),
          t.isCornerstoneActive &&
            Object(i.createElement)(
              D.a,
              { key: "cornerstone", renderPriority: 30 },
              Object(i.createElement)(P.a, null)
            )
        )
      );
    }
    G.propTypes = { settings: w.a.object.isRequired };
    var V = Object(u.withSelect)(function (e, t) {
        return {
          settings: (0, e("yoast-seo/editor").getPreferences)(),
          store: t.store,
        };
      })(G),
      Y = n(192),
      z = n(24),
      $ = n(108),
      Z = n(120),
      Q = n(103);
    function X(e) {
      var t = e.theme;
      return Object(i.createElement)(
        Q.a,
        { theme: t, location: "sidebar" },
        Object(i.createElement)(m.Slot, { name: "YoastSidebar" }, function (e) {
          return Object(Z.a)(e);
        })
      );
    }
    var J = n(5),
      ee = n.n(J),
      te = n(7),
      ne = n.n(te),
      re = n(11),
      oe = n.n(re),
      ae = n(13),
      ie = n.n(ae),
      se = n(14),
      ce = n.n(se),
      le = n(8),
      ue = n.n(le),
      de = n(53),
      pe = n(248),
      fe = n(10),
      me = n.n(fe),
      be = n(39),
      he = n.n(be),
      ye = n(55),
      ge = n(176);
    function Oe(e, t) {
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
    function ve(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Oe(Object(n), !0).forEach(function (t) {
              me()(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Oe(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    var Ee = Object(m.withSpokenMessages)(function (e) {
      var t = e.isActive,
        n = e.activeAttributes,
        r = e.addingLink,
        o = e.value,
        a = e.onChange,
        s = e.speak,
        c = e.stopAddingLink,
        l = Object(i.useMemo)(f.uniqueId, [r]),
        u = Object(i.useState)(),
        b = he()(u, 2),
        h = b[0],
        y = b[1],
        g = Object(i.useMemo)(
          function () {
            var e = window.getSelection();
            if (e.rangeCount) {
              var n = e.getRangeAt(0);
              if (r && !t) return n;
              var o = n.startContainer;
              for (
                o = o.nextElementSibling || o;
                o.nodeType !== window.Node.ELEMENT_NODE;

              )
                o = o.parentNode;
              return o.closest("a");
            }
          },
          [r, o.start, o.end]
        ),
        O = ve(
          {
            url: n.url,
            type: n.type,
            id: n.id,
            opensInNewTab: "_blank" === n.target,
            noFollow: n.rel && n.rel.split(" ").includes("nofollow"),
            sponsored: n.rel && n.rel.split(" ").includes("sponsored"),
          },
          h
        ),
        v = Object(i.createElement)(
          ye.a,
          {
            href: window.wpseoAdminL10n["shortlinks.nofollow_sponsored"],
            className: "dashicons",
          },
          Object(i.createElement)(
            "span",
            { className: "screen-reader-text" },
            Object(d.__)(
              "Learn more about marking a link as nofollow or sponsored.",
              "wordpress-seo"
            )
          )
        ),
        E = Object(ge.a)(
          Object(d.sprintf)(
            Object(d.__)(
              "Search engines should ignore this link (mark as %1$snofollow%2$s)%3$s",
              "wordpress-seo"
            ),
            "<code>",
            "</code>",
            "<helplink />"
          ),
          { code: Object(i.createElement)("code", null), helplink: v }
        ),
        j = Object(ge.a)(
          Object(d.sprintf)(
            Object(d.__)(
              "This is a sponsored link or advert (mark as %1$ssponsored%2$s)%3$s",
              "wordpress-seo"
            ),
            "<code>",
            "</code>",
            "<helplink />"
          ),
          { code: Object(i.createElement)("code", null), helplink: v }
        ),
        w = [
          {
            id: "opensInNewTab",
            title: Object(d.__)("Open in new tab", "wordpress-seo"),
          },
          { id: "noFollow", title: E },
          { id: "sponsored", title: j },
        ],
        _ = window.wp.blockEditor.__experimentalLinkControl;
      return Object(i.createElement)(
        m.Popover,
        {
          key: l,
          anchorRef: g,
          focusOnMount: !!r && "firstElement",
          onClose: c,
          position: "bottom center",
        },
        Object(i.createElement)(_, {
          value: O,
          onChange: function (e) {
            e = ve(ve({}, h), e);
            var n =
              (O.url === e.url && O.opensInNewTab !== e.opensInNewTab) ||
              O.noFollow !== e.noFollow ||
              O.sponsored !== e.sponsored;
            n && !0 === e.sponsored && !0 !== O.sponsored && (e.noFollow = !0),
              n && !1 === e.noFollow && !1 !== O.noFollow && (e.sponsored = !1);
            var r = n && void 0 === e.url;
            if ((y(r ? e : void 0), !r)) {
              var i = Object(de.prependHTTP)(e.url),
                l = (function (e) {
                  var t = e.noFollow,
                    n = e.sponsored,
                    r = { type: "core/link", attributes: { url: e.url } },
                    o = [];
                  return (
                    e.opensInNewWindow &&
                      ((r.attributes.target = "_blank"),
                      o.push("noreferrer noopener")),
                    n && (o.push("sponsored"), o.push("nofollow")),
                    t && o.push("nofollow"),
                    o.length > 0 &&
                      ((o = Object(f.uniq)(o)),
                      (r.attributes.rel = o.join(" "))),
                    r
                  );
                })({
                  url: i,
                  type: e.type,
                  id: void 0 !== e.id && null !== e.id ? String(e.id) : void 0,
                  opensInNewWindow: e.opensInNewTab,
                  noFollow: e.noFollow,
                  sponsored: e.sponsored,
                });
              if (Object(p.isCollapsed)(o) && !t) {
                var u = e.title || i,
                  m = Object(p.applyFormat)(
                    Object(p.create)({ text: u }),
                    l,
                    0,
                    u.length
                  );
                a(Object(p.insert)(o, m));
              } else {
                var b = Object(p.applyFormat)(o, l);
                (b.start = b.end), (b.activeFormats = []), a(b);
              }
              n || c(),
                (function (e) {
                  if (!e) return !1;
                  var t = e.trim();
                  if (!t) return !1;
                  if (/^\S+:/.test(t)) {
                    var n = Object(de.getProtocol)(t);
                    if (!Object(de.isValidProtocol)(n)) return !1;
                    if (
                      Object(f.startsWith)(n, "http") &&
                      !/^https?:\/\/[^\/\s]/i.test(t)
                    )
                      return !1;
                    var r = Object(de.getAuthority)(t);
                    if (!Object(de.isValidAuthority)(r)) return !1;
                    var o = Object(de.getPath)(t);
                    if (o && !Object(de.isValidPath)(o)) return !1;
                    var a = Object(de.getQueryString)(t);
                    if (a && !Object(de.isValidQueryString)(a)) return !1;
                    var i = Object(de.getFragment)(t);
                    if (i && !Object(de.isValidFragment)(i)) return !1;
                  }
                  return !(
                    Object(f.startsWith)(t, "#") &&
                    !Object(de.isValidFragment)(t)
                  );
                })(i)
                  ? s(
                      t
                        ? Object(d.__)("Link edited.", "wordpress-seo")
                        : Object(d.__)("Link inserted.", "wordpress-seo"),
                      "assertive"
                    )
                  : s(
                      Object(d.__)(
                        "Warning: the link has been inserted but may have errors. Please test it.",
                        "wordpress-seo"
                      ),
                      "assertive"
                    );
            }
          },
          forceIsEditingLink: r,
          settings: w,
        })
      );
    });
    var je = Object(d.__)("Link", "wordpress-seo"),
      we = {
        name: "core/link",
        title: je,
        tagName: "a",
        className: null,
        attributes: { url: "href", target: "target", rel: "rel" },
        replaces: "core/link",
        __unstablePasteRule: function (e, t) {
          var n = t.html,
            r = t.plainText;
          if (Object(p.isCollapsed)(e)) return e;
          var o = (n || r).replace(/<[^>]+>/g, "").trim();
          return Object(de.isURL)(o)
            ? (window.console.log("Created link:\n\n", o),
              Object(p.applyFormat)(e, {
                type: "core/link",
                attributes: { url: Object(pe.decodeEntities)(o) },
              }))
            : e;
        },
        edit: Object(m.withSpokenMessages)(
          (function (e) {
            ie()(o, e);
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
                    r = ue()(t);
                  if (n) {
                    var o = ue()(this).constructor;
                    e = Reflect.construct(r, arguments, o);
                  } else e = r.apply(this, arguments);
                  return ce()(this, e);
                });
            function o() {
              var e;
              return (
                ee()(this, o),
                ((e = r.apply(this, arguments)).addLink = e.addLink.bind(
                  oe()(e)
                )),
                (e.stopAddingLink = e.stopAddingLink.bind(oe()(e))),
                (e.onRemoveFormat = e.onRemoveFormat.bind(oe()(e))),
                (e.state = { addingLink: !1 }),
                e
              );
            }
            return (
              ne()(o, [
                {
                  key: "addLink",
                  value: function () {
                    var e = this.props,
                      t = e.value,
                      n = e.onChange,
                      r = Object(p.getTextContent)(Object(p.slice)(t));
                    r && Object(de.isURL)(r)
                      ? n(
                          Object(p.applyFormat)(t, {
                            type: "core/link",
                            attributes: { url: r },
                          })
                        )
                      : r && Object(de.isEmail)(r)
                      ? n(
                          Object(p.applyFormat)(t, {
                            type: "core/link",
                            attributes: { url: "mailto:".concat(r) },
                          })
                        )
                      : this.setState({ addingLink: !0 });
                  },
                },
                {
                  key: "stopAddingLink",
                  value: function () {
                    this.setState({ addingLink: !1 }), this.props.onFocus();
                  },
                },
                {
                  key: "onRemoveFormat",
                  value: function () {
                    var e = this.props,
                      t = e.value,
                      n = e.onChange,
                      r = e.speak;
                    n(Object(p.removeFormat)(t, "core/link")),
                      r(
                        Object(d.__)("Link removed.", "wordpress-seo"),
                        "assertive"
                      );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e = this.props,
                      t = e.isActive,
                      n = e.activeAttributes,
                      r = e.value,
                      o = e.onChange,
                      a = window.wp.blockEditor,
                      s = a.RichTextToolbarButton,
                      c = a.RichTextShortcut;
                    return Object(i.createElement)(
                      i.Fragment,
                      null,
                      Object(i.createElement)(c, {
                        type: "primary",
                        character: "k",
                        onUse: this.addLink,
                      }),
                      Object(i.createElement)(c, {
                        type: "primaryShift",
                        character: "k",
                        onUse: this.onRemoveFormat,
                      }),
                      t &&
                        Object(i.createElement)(s, {
                          name: "link",
                          icon: "editor-unlink",
                          title: Object(d.__)("Unlink", "wordpress-seo"),
                          onClick: this.onRemoveFormat,
                          isActive: t,
                          shortcutType: "primaryShift",
                          shortcutCharacter: "k",
                        }),
                      !t &&
                        Object(i.createElement)(s, {
                          name: "link",
                          icon: "admin-links",
                          title: je,
                          onClick: this.addLink,
                          isActive: t,
                          shortcutType: "primary",
                          shortcutCharacter: "k",
                        }),
                      (this.state.addingLink || t) &&
                        Object(i.createElement)(Ee, {
                          addingLink: this.state.addingLink,
                          stopAddingLink: this.stopAddingLink,
                          isActive: t,
                          activeAttributes: n,
                          value: r,
                          onChange: o,
                        })
                    );
                  },
                },
              ]),
              o
            );
          })(i.Component)
        ),
      },
      _e = n(6),
      Te = n(35);
    function ke(e) {
      var t = e.score,
        n = e.label,
        r = e.scoreValue;
      return Object(i.createElement)(
        "div",
        null,
        Object(i.createElement)(_e.SvgIcon, Object(Te.getIconForScore)(t)),
        Object(i.createElement)(
          "span",
          null,
          " ",
          n,
          " ",
          r && Object(i.createElement)("strong", null, r)
        )
      );
    }
    function Se(e) {
      var t = e.checklist,
        n = e.onClick,
        r = t.every(function (e) {
          return "good" === e.score;
        });
      return Object(i.createElement)(
        i.Fragment,
        null,
        t.map(function (e) {
          return Object(i.createElement)(ke, O()({ key: e.label }, e));
        }),
        Object(i.createElement)("br", null),
        !r &&
          Object(i.createElement)(
            _e.Button,
            { onClick: n },
            Object(d.__)("Improve your post with Yoast SEO", "wordpress-seo")
          )
      );
    }
    function Re(e) {
      var t,
        n = e.checklist,
        r = e.onClick;
      return (
        (t = n.every(function (e) {
          return "good" === e.score;
        })
          ? Object(d.__)(
              "We've analyzed your post. Everything looks good. Well done!",
              "wordpress-seo"
            )
          : Object(d.__)(
              "We've analyzed your post. There is still room for improvement!",
              "wordpress-seo"
            )),
        Object(i.createElement)(
          i.Fragment,
          null,
          Object(i.createElement)("p", null, t),
          Object(i.createElement)(Se, { checklist: n, onClick: r })
        )
      );
    }
    function Pe(e, t) {
      if (t.getPreferences().isKeywordAnalysisActive) {
        var n = Object(y.a)(t.getReadabilityResults().overallScore);
        e.push({
          label: Object(d.__)("Readability analysis:", "wordpress-seo"),
          score: n.className,
          scoreValue: n.screenReaderReadabilityText,
        });
      }
    }
    function Ae(e, t) {
      if (t.getPreferences().isContentAnalysisActive) {
        var n = Object(y.a)(t.getResultsForFocusKeyword().overallScore);
        e.push({
          label: Object(d.__)("SEO analysis:", "wordpress-seo"),
          score: n.className,
          scoreValue: n.screenReaderReadabilityText,
        });
      }
    }
    function Ce(e, t, n) {
      if (
        n.getBlocks().some(function (e) {
          return !0 === e.attributes["is-yoast-schema-block"];
        })
      ) {
        var r = t.getSchemaBlocksValidationResults(),
          o = Object.values(r);
        if (o && o.length > 0) {
          var a = o.every(function (e) {
            return e.result <= 0;
          });
          e.push({
            label: Object(d.__)("Schema analysis:", "wordpress-seo"),
            score: a ? "good" : "bad",
            scoreValue: a
              ? Object(d.__)("Good", "wordpress-seo")
              : Object(d.__)("Needs improvement", "wordpress-seo"),
          });
        }
      }
    }
    (ke.propTypes = {
      score: j.string.isRequired,
      label: j.string.isRequired,
      scoreValue: j.string,
    }),
      (ke.defaultProps = { scoreValue: "" }),
      (Se.propTypes = {
        checklist: w.a.array.isRequired,
        onClick: w.a.func.isRequired,
      }),
      (Re.propTypes = {
        checklist: w.a.array.isRequired,
        onClick: w.a.func.isRequired,
      });
    var xe,
      Ie,
      De,
      Ne = Object(b.compose)([
        Object(u.withSelect)(function (e) {
          var t = e("yoast-seo/editor"),
            n = e("yoast-seo/schema-blocks"),
            r = e("core/block-editor"),
            o = [];
          return (
            (function (e, t) {
              t.getFocusKeyphrase() ||
                e.push({
                  label: Object(d.__)(
                    "No focus keyword was entered",
                    "wordpress-seo"
                  ),
                  score: "bad",
                });
            })(o, t),
            Pe(o, t),
            Ae(o, t),
            Ce(o, n, r),
            { checklist: o }
          );
        }),
        Object(u.withDispatch)(function (e) {
          var t = e("core/edit-post"),
            n = t.closePublishSidebar,
            r = t.openGeneralSidebar;
          return {
            onClick: function () {
              n(), r("yoast-seo/seo-sidebar");
            },
          };
        }),
      ])(Re),
      Le = Object(b.compose)([
        Object(u.withSelect)(function (e) {
          var t = e("yoast-seo/editor"),
            n = e("yoast-seo/schema-blocks"),
            r = e("core/block-editor"),
            o = [];
          return Pe(o, t), Ae(o, t), Ce(o, n, r), { checklist: o };
        }),
        Object(u.withDispatch)(function (e) {
          var t = e("core/edit-post").openGeneralSidebar;
          return {
            onClick: function () {
              t("yoast-seo/seo-sidebar");
            },
          };
        }),
      ])(Se),
      Me = n(17);
    function Fe() {
      return (Fe =
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
    function qe(e) {
      return Me.createElement(
        "svg",
        Fe(
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1600 1600",
            "aria-hidden": "true",
          },
          e
        ),
        xe ||
          (xe = Me.createElement(
            "g",
            { fill: "none", fillRule: "evenodd" },
            Me.createElement("path", {
              fill: "#1877f2",
              d: "M1600 800a800 800 0 10-925 790v-559H472V800h203V624c0-201 119-311 302-311 88 0 179 15 179 15v197h-101c-99 0-130 62-130 125v150h222l-36 231H925v559a800 800 0 00675-790",
            }),
            Me.createElement("path", {
              fill: "#fff",
              d: "M1147 800H925V650c0-63 31-125 130-125h101V328s-91-15-179-15c-183 0-302 110-302 311v176H472v231h203v559a806 806 0 00250 0v-559h186z",
            })
          ))
      );
    }
    function Be() {
      return (Be =
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
    function Ue(e) {
      return Me.createElement(
        "svg",
        Be(
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 400 400",
            "aria-hidden": "true",
          },
          e
        ),
        Ie ||
          (Ie = Me.createElement("circle", {
            cx: 200,
            cy: 200,
            r: 200,
            fill: "#1da1f2",
          })),
        De ||
          (De = Me.createElement("path", {
            d: "M163.4 305.5c88.7 0 137.2-73.5 137.2-137.2 0-2.1 0-4.2-.1-6.2 9.4-6.8 17.6-15.3 24.1-25-8.6 3.8-17.9 6.4-27.7 7.6 10-6 17.6-15.4 21.2-26.7-9.3 5.5-19.6 9.5-30.6 11.7-8.8-9.4-21.3-15.2-35.2-15.2-26.6 0-48.2 21.6-48.2 48.2 0 3.8.4 7.5 1.3 11-40.1-2-75.6-21.2-99.4-50.4-4.1 7.1-6.5 15.4-6.5 24.2 0 16.7 8.5 31.5 21.5 40.1-7.9-.2-15.3-2.4-21.8-6v.6c0 23.4 16.6 42.8 38.7 47.3-4 1.1-8.3 1.7-12.7 1.7-3.1 0-6.1-.3-9.1-.9 6.1 19.2 23.9 33.1 45 33.5-16.5 12.9-37.3 20.6-59.9 20.6-3.9 0-7.7-.2-11.5-.7 21.1 13.8 46.5 21.8 73.7 21.8",
            fill: "#fff",
          }))
      );
    }
    function Ke(e) {
      var t = e.permalink,
        n = encodeURI(t);
      return Object(i.createElement)(
        i.Fragment,
        null,
        Object(i.createElement)(
          "div",
          null,
          Object(d.__)("Share your post!", "wordpress-seo")
        ),
        Object(i.createElement)(
          "ul",
          { className: "yoast-seo-social-share-buttons" },
          Object(i.createElement)(
            "li",
            null,
            Object(i.createElement)(
              "a",
              {
                href: "https://www.facebook.com/sharer/sharer.php?u=" + n,
                target: "_blank",
                rel: "noopener noreferrer",
              },
              Object(i.createElement)(qe, null),
              Object(d.__)("Facebook", "wordpress-seo"),
              Object(i.createElement)(
                "span",
                { className: "screen-reader-text" },
                Object(d.__)("(Opens in a new browser tab)", "wordpress-seo")
              )
            )
          ),
          Object(i.createElement)(
            "li",
            null,
            Object(i.createElement)(
              "a",
              {
                href: "https://twitter.com/share?url=" + n,
                target: "_blank",
                rel: "noopener noreferrer",
              },
              Object(i.createElement)(Ue, null),
              Object(d.__)("Twitter", "wordpress-seo"),
              Object(i.createElement)(
                "span",
                { className: "screen-reader-text" },
                Object(d.__)("(Opens in a new browser tab)", "wordpress-seo")
              )
            )
          )
        )
      );
    }
    Ke.propTypes = { permalink: w.a.string.isRequired };
    var He = Object(b.compose)([
        Object(u.withSelect)(function (e) {
          return { permalink: e("core/editor").getPermalink() };
        }),
      ])(Ke),
      We = n(20);
    var Ge = n(249);
    (window.yoast = window.yoast || {}),
      (window.yoast.initEditorIntegration = function (e) {
        (function (e) {
          var t = Object(We.a)(),
            n = t.isPremium,
            r = n ? "Yoast SEO Premium" : "Yoast SEO",
            o = Object(i.createElement)(S, null);
          Object(l.updateCategory)("yoast-structured-data-blocks", { icon: o }),
            Object(l.updateCategory)("yoast-internal-linking-blocks", {
              icon: o,
            });
          var a = { isRtl: t.isRtl },
            p = e.getState().preferences,
            f = p.isKeywordAnalysisActive || p.isContentAnalysisActive,
            b = p.isZapierIntegrationActive && !p.isZapierConnected;
          !Object(u.select)("core/edit-post").getPreferences().panels[
            "yoast-seo/document-panel"
          ] &&
            Object(u.dispatch)("core/edit-post").toggleEditorPanelOpened(
              "yoast-seo/document-panel"
            ),
            Object(c.registerPlugin)("yoast-seo", {
              render: function () {
                return Object(i.createElement)(
                  i.Fragment,
                  null,
                  Object(i.createElement)(
                    s.PluginSidebarMoreMenuItem,
                    {
                      target: "seo-sidebar",
                      icon: Object(i.createElement)(R, null),
                    },
                    r
                  ),
                  Object(i.createElement)(
                    s.PluginSidebar,
                    { name: "seo-sidebar", title: r },
                    Object(i.createElement)(X, { store: e, theme: a })
                  ),
                  Object(i.createElement)(
                    i.Fragment,
                    null,
                    Object(i.createElement)(V, { store: e, theme: a }),
                    Object(i.createElement)(Y.a, {
                      target: "wpseo-metabox-root",
                      store: e,
                      theme: a,
                    })
                  ),
                  f &&
                    Object(i.createElement)(
                      s.PluginPrePublishPanel,
                      {
                        className: "yoast-seo-sidebar-panel",
                        title: Object(d.__)("Yoast SEO", "wordpress-seo"),
                        initialOpen: !0,
                        icon: Object(i.createElement)(i.Fragment, null),
                      },
                      Object(i.createElement)(Ne, null)
                    ),
                  n &&
                    b &&
                    Object(i.createElement)(
                      s.PluginPrePublishPanel,
                      {
                        className: "yoast-seo-sidebar-panel",
                        title: "Zapier",
                        initialOpen: !0,
                        icon: Object(i.createElement)(i.Fragment, null),
                      },
                      Object(i.createElement)(m.Slot, {
                        name: "YoastZapierPrePublish",
                      })
                    ),
                  Object(i.createElement)(
                    s.PluginPostPublishPanel,
                    {
                      className: "yoast-seo-sidebar-panel",
                      title: Object(d.__)("Yoast SEO", "wordpress-seo"),
                      initialOpen: !0,
                      icon: Object(i.createElement)(i.Fragment, null),
                    },
                    Object(i.createElement)(He, null)
                  ),
                  f &&
                    Object(i.createElement)(
                      s.PluginDocumentSettingPanel,
                      {
                        name: "document-panel",
                        className: "yoast-seo-sidebar-panel",
                        title: Object(d.__)("Yoast SEO", "wordpress-seo"),
                        icon: Object(i.createElement)(i.Fragment, null),
                      },
                      Object(i.createElement)(Le, null)
                    )
                );
              },
              icon: Object(i.createElement)(R, null),
            });
        })(e),
          "function" ==
          typeof Object(f.get)(
            window,
            "wp.blockEditor.__experimentalLinkControl"
          )
            ? [we].forEach(function (e) {
                var t = e.name,
                  n = e.replaces,
                  r = a()(e, ["name", "replaces"]);
                n && Object(u.dispatch)("core/rich-text").removeFormatTypes(n),
                  t && Object(p.registerFormatType)(t, r);
              })
            : console.warn(
                Object(d.__)(
                  "Marking links with nofollow/sponsored has been disabled for WordPress installs < 5.4.",
                  "wordpress-seo"
                ) +
                  " " +
                  Object(d.sprintf)(
                    Object(d.__)(
                      "Please upgrade your WordPress version or install the Gutenberg plugin to get this %1$s feature.",
                      "wordpress-seo"
                    ),
                    "Yoast SEO"
                  )
              ),
          (function (e) {
            Object($.b)() && e.dispatch(Object(z.setMarkerStatus)("enabled"));
          })(e);
      }),
      (window.yoast.EditorData = Ge.a);
  },
]);

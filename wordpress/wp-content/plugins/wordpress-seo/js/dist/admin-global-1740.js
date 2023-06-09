!(function (t) {
  var o = {};
  function n(a) {
    if (o[a]) return o[a].exports;
    var e = (o[a] = { i: a, l: !1, exports: {} });
    return t[a].call(e.exports, e, e.exports, n), (e.l = !0), e.exports;
  }
  (n.m = t),
    (n.c = o),
    (n.d = function (t, o, a) {
      n.o(t, o) || Object.defineProperty(t, o, { enumerable: !0, get: a });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, o) {
      if ((1 & o && (t = n(t)), 8 & o)) return t;
      if (4 & o && "object" == typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (n.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & o && "string" != typeof t)
      )
        for (var e in t)
          n.d(
            a,
            e,
            function (o) {
              return t[o];
            }.bind(null, e)
          );
      return a;
    }),
    (n.n = function (t) {
      var o =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(o, "a", o), o;
    }),
    (n.o = function (t, o) {
      return Object.prototype.hasOwnProperty.call(t, o);
    }),
    (n.p = ""),
    n((n.s = 257));
})({
  21: function (t, o) {
    t.exports = window.jQuery;
  },
  257: function (t, o, n) {
    "use strict";
    n.r(o);
    var a = n(21),
      e = n.n(a);
    !(function (t) {
      function o(t, o, n) {
        e.a.post(
          ajaxurl,
          { action: "wpseo_set_ignore", option: t, _wpnonce: n },
          function (n) {
            n &&
              (e()("#" + o).hide(), e()("#hidden_ignore_" + t).val("ignore"));
          }
        );
      }
      function n() {
        t("#admin-bar-root-default > li").off(
          "mouseenter.yoastalertpopup mouseleave.yoastalertpopup"
        ),
          t(".yoast-issue-added").fadeOut(200);
      }
      function a(o, n) {
        if (
          (t(".yoast-notification-holder")
            .off("click", ".restore")
            .off("click", ".dismiss"),
          void 0 !== n.html)
        ) {
          n.html && (o.closest(".yoast-container").html(n.html), s());
          var a = t("#admin-bar-wpseo-menu"),
            e = a.find(".yoast-issue-counter");
          e.length ||
            (a
              .find("> a:first-child")
              .append('<div class="yoast-issue-counter"/>'),
            (e = a.find(".yoast-issue-counter"))),
            e.html(n.total),
            0 === n.total ? e.hide() : e.show(),
            t("#toplevel_page_wpseo_dashboard .update-plugins")
              .removeClass()
              .addClass("update-plugins count-" + n.total),
            t("#toplevel_page_wpseo_dashboard .plugin-count").html(n.total);
        }
      }
      function s() {
        var o = t(".yoast-notification-holder");
        o.on("click", ".dismiss", function () {
          var o = t(this),
            n = o.closest(".yoast-notification-holder");
          o
            .closest(".yoast-container")
            .append('<div class="yoast-container-disabled"/>'),
            t.post(
              ajaxurl,
              {
                action: "yoast_dismiss_notification",
                notification: n.attr("id"),
                nonce: n.data("nonce"),
                data: o.data("json") || n.data("json"),
              },
              a.bind(this, n),
              "json"
            );
        }),
          o.on("click", ".restore", function () {
            var o = t(this),
              n = o.closest(".yoast-notification-holder");
            o
              .closest(".yoast-container")
              .append('<div class="yoast-container-disabled"/>'),
              t.post(
                ajaxurl,
                {
                  action: "yoast_restore_notification",
                  notification: n.attr("id"),
                  nonce: n.data("nonce"),
                  data: n.data("json"),
                },
                a.bind(this, n),
                "json"
              );
          });
      }
      function i(t) {
        t.is(":hidden") ||
          (t.outerWidth() > t.parent().outerWidth()
            ? (t.data("scrollHint").addClass("yoast-has-scroll"),
              t.data("scrollContainer").addClass("yoast-has-scroll"))
            : (t.data("scrollHint").removeClass("yoast-has-scroll"),
              t.data("scrollContainer").removeClass("yoast-has-scroll")));
      }
      function l() {
        (window.wpseoScrollableTables = t(".yoast-table-scrollable")),
          window.wpseoScrollableTables.length &&
            window.wpseoScrollableTables.each(function () {
              var o = t(this);
              if (!o.data("scrollContainer")) {
                var n = t("<div />", {
                    class: "yoast-table-scrollable__hintwrapper",
                    html: "<span class='yoast-table-scrollable__hint' aria-hidden='true' />",
                  }).insertBefore(o),
                  a = t("<div />", {
                    class: "yoast-table-scrollable__container",
                    html: "<div class='yoast-table-scrollable__inner' />",
                  }).insertBefore(o);
                n
                  .find(".yoast-table-scrollable__hint")
                  .text(wpseoAdminGlobalL10n.scrollable_table_hint),
                  o.data("scrollContainer", a),
                  o.data("scrollHint", n),
                  o.appendTo(a.find(".yoast-table-scrollable__inner")),
                  i(o);
              }
            });
      }
      e()(document).ready(function () {
        e()(".yoast-dismissible").on(
          "click",
          ".yoast-notice-dismiss",
          function () {
            var t = e()(this).parent();
            return (
              e.a.post(ajaxurl, {
                action: t.attr("id").replace(/-/g, "_"),
                _wpnonce: t.data("nonce"),
                data: t.data("json"),
              }),
              e.a.post(ajaxurl, {
                action: "yoast_dismiss_notification",
                notification: t.attr("id"),
                nonce: t.data("nonce"),
                data: t.data("json"),
              }),
              t.fadeTo(100, 0, function () {
                t.slideUp(100, function () {
                  t.remove();
                });
              }),
              !1
            );
          }
        ),
          e()(".yoast-help-button").on("click", function () {
            var t = e()(this),
              o = e()("#" + t.attr("aria-controls")),
              n = o.is(":visible");
            e()(o).slideToggle(200, function () {
              t.attr("aria-expanded", !n);
            });
          }),
          e()("#robotsmessage button").on("click", function () {
            o(
              "search_engines_discouraged_notice",
              "robotsmessage",
              e()(this).data("nonce")
            );
          });
      }),
        (window.wpseoSetIgnore = o),
        (window.wpseoDismissLink = function (t) {
          return e()(
            '<a href="' +
              t +
              '" type="button" class="notice-dismiss"><span class="screen-reader-text">Dismiss this notice.</span></a>'
          );
        }),
        t(window).on("wp-window-resized orientationchange", function () {
          window.wpseoScrollableTables &&
            window.wpseoScrollableTables.length &&
            window.wpseoScrollableTables.each(function () {
              i(t(this));
            });
        }),
        t(window).on({
          "Yoast:YoastTabsMounted": function () {
            setTimeout(function () {
              l();
            }, 100);
          },
          "Yoast:YoastTabsSelected": function () {
            setTimeout(function () {
              l();
            }, 100);
          },
        }),
        t(document).ready(function () {
          t(".yoast-issue-added")
            .on("mouseenter mouseleave", function (t) {
              t.stopPropagation(), n();
            })
            .fadeIn(),
            t("#admin-bar-root-default > li").on(
              "mouseenter.yoastalertpopup mouseleave.yoastalertpopup",
              n
            ),
            setTimeout(n, 3e3),
            s(),
            (function () {
              var t = e()(".wpseo-js-premium-indicator"),
                o = t.find("svg");
              if (t.hasClass("wpseo-premium-indicator--no")) {
                var n = o.find("path"),
                  a = t.css("backgroundColor");
                n.css("fill", a);
              }
              o.css("display", "block"),
                t.css({
                  backgroundColor: "transparent",
                  width: "20px",
                  height: "20px",
                });
            })(),
            l();
        });
    })(e.a);
  },
});

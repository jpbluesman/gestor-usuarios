(this["webpackJsonp06-gestor-usuarios"] =
  this["webpackJsonp06-gestor-usuarios"] || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, n, t) {},
    function (e, n, t) {},
    ,
    function (e, n, t) {},
    function (e, n, t) {},
    function (e, n, t) {},
    function (e, n, t) {
      "use strict";
      t.r(n);
      var c = t(1),
        a = t.n(c),
        r = t(8),
        i = t.n(r),
        l = (t(15), t(9)),
        o = t(2),
        s = (t(16), t(0)),
        j = function (e) {
          var n = e.children;
          return Object(s.jsx)("div", { className: "card", children: n });
        },
        u =
          (t(18),
          function (e) {
            var n = e.children;
            return Object(s.jsx)("div", {
              className: "container",
              children: n,
            });
          }),
        b =
          (t(19),
          function (e) {
            var n = e.children;
            return Object(s.jsx)("button", {
              className: "button",
              children: n,
            });
          }),
        d = t(4),
        O = t(10),
        m =
          (t(20),
          function (e) {
            var n = e.label,
              t = Object(O.a)(e, ["label"]);
            return Object(s.jsxs)("div", {
              className: "field",
              children: [
                Object(s.jsx)("label", { children: n }),
                Object(s.jsx)("input", Object(d.a)({}, t)),
              ],
            });
          }),
        h = t(6),
        f = function (e) {
          var n = Object(c.useState)(e),
            t = Object(o.a)(n, 2),
            a = t[0],
            r = t[1];
          return [
            a,
            function (e) {
              var n = e.target;
              r(
                Object(d.a)(
                  Object(d.a)({}, a),
                  {},
                  Object(h.a)({}, n.name, n.value)
                )
              );
            },
            function () {
              r(e);
            },
          ];
        },
        v = function (e) {
          var n = e.submit,
            t = f({ name: "", lastname: "", email: "" }),
            c = Object(o.a)(t, 3),
            a = c[0],
            r = c[1],
            i = c[2];
          return Object(s.jsxs)("form", {
            onSubmit: function (e) {
              e.preventDefault(), n(a), i();
            },
            children: [
              Object(s.jsx)(m, {
                label: "Nombre",
                name: "name",
                value: a.name,
                onChange: r,
                placeholder: "Nombre",
              }),
              Object(s.jsx)(m, {
                label: "Apellido",
                name: "lastname",
                value: a.lastname,
                onChange: r,
                placeholder: "Apellido",
              }),
              Object(s.jsx)(m, {
                label: "Correo",
                name: "email",
                value: a.email,
                onChange: r,
                placeholder: "Correo",
              }),
              Object(s.jsx)(b, { children: "Enviar" }),
            ],
          });
        };
      var x = function () {
          var e = Object(c.useState)([]),
            n = Object(o.a)(e, 2),
            t = n[0],
            a = n[1];
          return (
            console.log(t),
            Object(s.jsx)("div", {
              style: { marginTop: "15%" },
              children: Object(s.jsxs)(u, {
                children: [
                  Object(s.jsx)(j, {
                    children: Object(s.jsx)("div", {
                      style: { padding: 20 },
                      children: Object(s.jsx)(v, {
                        submit: function (e) {
                          a([].concat(Object(l.a)(t), [e]));
                        },
                      }),
                    }),
                  }),
                  Object(s.jsx)(j, {
                    children: Object(s.jsx)("ul", {
                      children: t.map(function (e) {
                        return Object(s.jsx)(
                          "li",
                          {
                            children: ""
                              .concat(e.name, " ")
                              .concat(e.lastname, ": ")
                              .concat(e.email),
                          },
                          e.email
                        );
                      }),
                    }),
                  }),
                ],
              }),
            })
          );
        },
        g = function (e) {
          e &&
            e instanceof Function &&
            t
              .e(3)
              .then(t.bind(null, 22))
              .then(function (n) {
                var t = n.getCLS,
                  c = n.getFID,
                  a = n.getFCP,
                  r = n.getLCP,
                  i = n.getTTFB;
                t(e), c(e), a(e), r(e), i(e);
              });
        };
      i.a.render(
        Object(s.jsx)(a.a.StrictMode, { children: Object(s.jsx)(x, {}) }),
        document.getElementById("root")
      ),
        g();
    },
  ],
  [[21, 1, 2]],
]);
//# sourceMappingURL=main.a1d634b2.chunk.js.map

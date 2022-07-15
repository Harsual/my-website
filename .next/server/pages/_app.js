(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./styles/Layout.module.css
var Layout_module = __webpack_require__(5667);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/layout.js








function Layout({
  children
}) {
  //const [displayChildren, setDisplayChildren] = useState(children);

  /*const [transitionStage, setTransitionStage] = useState("fadeOut");
    useEffect(() => {
    setTransitionStage("fadeIn");
  }, []);
    useEffect(() => {
    if (children !== displayChildren) setTransitionStage("fadeOut");
  }, [children, setDisplayChildren, displayChildren]);
  */
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(false);

  const openMenu = () => setIsOpen(!isOpen);

  const router = (0,router_.useRouter)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Layout_module_default()).page_container,
    children: [/*#__PURE__*/jsx_runtime_.jsx("header", {
      className: (Layout_module_default()).header,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
        className: (Layout_module_default()).navbar,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Layout_module_default()).navlogo,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                src: "/color_logo.png",
                alt: "",
                width: 75,
                height: 75
              })
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: isOpen === false ? (Layout_module_default()).navmenu : (Layout_module_default()).navmenu + " " + (Layout_module_default()).active,
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            className: (Layout_module_default()).navitem,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
              scroll: false,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: (Layout_module_default()).navlink,
                children: "Home"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: (Layout_module_default()).navitem,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/about",
              scroll: false,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: (Layout_module_default()).navlink,
                children: "About"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: (Layout_module_default()).navitem,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/contact",
              scroll: false,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: (Layout_module_default()).navlink,
                children: "Contact"
              })
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
          className: isOpen === false ? (Layout_module_default()).hamburger : (Layout_module_default()).hamburger + " " + (Layout_module_default()).active,
          onClick: openMenu,
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Layout_module_default()).bar
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Layout_module_default()).bar
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (Layout_module_default()).bar
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Layout_module_default()).prefooter,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Layout_module_default()).linkbox,
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          scroll: false,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: router.pathname == "/" ? (Layout_module_default()).active : "",
            children: "Home"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/education",
          scroll: false,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: router.pathname == "/education" ? (Layout_module_default()).active : "",
            children: "Education"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/web_development",
          scroll: false,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: router.pathname == "/web_development" ? (Layout_module_default()).active : "",
            children: "Web Development"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/programming_languages",
          scroll: false,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: router.pathname == "/programming_languages" ? (Layout_module_default()).active : "",
            children: "Programming Languages"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/game_development",
          scroll: false,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: router.pathname == "/game_development" ? (Layout_module_default()).active : "",
            children: "Game Development"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/mobile_development",
          scroll: false,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: router.pathname == "/mobile_development" ? (Layout_module_default()).active : "",
            children: "Mobile Development"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/other_skills",
          scroll: false,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: router.pathname == "/other_skills" ? (Layout_module_default()).active : "",
            children: "Other Skills"
          })
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
      className: (Layout_module_default()).footer,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Layout_module_default()).logo,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          scroll: false,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: "/White_logo.png",
              alt: "",
              width: 75,
              height: 75
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (Layout_module_default()).footer_container1,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Layout_module_default()).ftd,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("text", {
            className: (Layout_module_default()).ftd_text,
            children: ["Working with motivated and hard working individuals is my passion", /*#__PURE__*/jsx_runtime_.jsx("br", {})]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("text", {
            className: (Layout_module_default()).ftd_text,
            children: ["Id love to build something great together.", " "]
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/contact",
            scroll: false,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("text", {
                className: (Layout_module_default()).work_link,
                children: "Work with me "
              })]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (Layout_module_default()).contact,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (Layout_module_default()).info,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (Layout_module_default()).info_container,
                children: /*#__PURE__*/jsx_runtime_.jsx("text", {
                  children: "Email"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("text", {
                className: (Layout_module_default()).contact_info,
                children: "onori273@gmail.com"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (Layout_module_default()).info,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (Layout_module_default()).info_container,
                children: /*#__PURE__*/jsx_runtime_.jsx("text", {
                  children: "Phone"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("text", {
                className: (Layout_module_default()).contact_info,
                children: "+1 709 728 2044"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (Layout_module_default()).info,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (Layout_module_default()).info_container,
                children: /*#__PURE__*/jsx_runtime_.jsx("text", {
                  children: "Social"
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (Layout_module_default()).social,
                children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "https://twitter.com/onori27",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: (Layout_module_default()).s_logos,
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                      alt: "",
                      src: "/socialMedia_logos/twitter.png",
                      width: 45,
                      height: 45
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "https://www.linkedin.com/in/osamanori/",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: (Layout_module_default()).s_logos,
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                      alt: "",
                      src: "/socialMedia_logos/linkedin.png",
                      width: 45,
                      height: 45
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "https://github.com/Harsual",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: (Layout_module_default()).s_logos,
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                      alt: "",
                      src: "/socialMedia_logos/github.png",
                      width: 45,
                      height: 45
                    })
                  })
                })]
              })]
            })]
          })]
        })
      })]
    })]
  });
}
;// CONCATENATED MODULE: external "framer-motion"
const external_framer_motion_namespaceObject = require("framer-motion");
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps,
  router
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Layout, {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_namespaceObject.AnimatePresence, {
      exitBeforeEnter: true,
      initial: false,
      onExitComplete: () => {
        if (false) {}
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_namespaceObject.motion.div, {
        initial: "pageInitial",
        animate: "pageAnimate",
        exit: "pageExit",
        variants: {
          pageInitial: {
            opacity: 0
          },
          pageAnimate: {
            opacity: 1,
            transition: {
              duration: 1.5
            }
          },
          pageExit: {
            opacity: 0
          }
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
      }, router.route)
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 5667:
/***/ ((module) => {

// Exports
module.exports = {
	"page_container": "Layout_page_container__2TwAo",
	"content": "Layout_content__ITFy4",
	"fadeIn": "Layout_fadeIn__35aIy",
	"header": "Layout_header__BNCMR",
	"navbar": "Layout_navbar__3AH7-",
	"hamburger": "Layout_hamburger__67XKY",
	"bar": "Layout_bar__1MEdc",
	"navmenu": "Layout_navmenu__E6ju0",
	"navitem": "Layout_navitem__tPpDH",
	"navlink": "Layout_navlink__1W5nQ",
	"navlogo": "Layout_navlogo__3zN4N",
	"prefooter": "Layout_prefooter__1C_aV",
	"linkbox": "Layout_linkbox__8va4S",
	"bottomlink": "Layout_bottomlink__kH0mh",
	"active": "Layout_active__1gduy",
	"footer": "Layout_footer__3-iLi",
	"footer_container1": "Layout_footer_container1__3wz6R",
	"contact": "Layout_contact__2Y3FN",
	"contact_info": "Layout_contact_info__iEASv",
	"info_container": "Layout_info_container__52ARk",
	"ftd": "Layout_ftd__3xf-M",
	"logo": "Layout_logo__3Y-jx",
	"work_link": "Layout_work_link__3X4DS",
	"social": "Layout_social__4DTop",
	"info": "Layout_info__3DXKY",
	"ftd_text": "Layout_ftd_text__2DKyb"
};


/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,664], () => (__webpack_exec__(5857)));
module.exports = __webpack_exports__;

})();
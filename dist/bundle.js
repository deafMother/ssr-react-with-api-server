/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(/*! react-router-config */ "react-router-config");

var _actions = __webpack_require__(/*! ./actions */ "./src/client/actions/index.js");

var _Header = __webpack_require__(/*! ./components/Header */ "./src/client/components/Header.js");

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// route routes are the components matched by the routes component depending on the path
var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(_Header2.default, null),
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

// function for data loading in server side
// will not be used in the client nundle js
function loadData(store) {
  console.log("loading data");
  return store.dispatch((0, _actions.checkLoginStatus)());
}

exports.default = {
  component: App,
  loadData: loadData
};

/***/ }),

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _App = __webpack_require__(/*! ./App */ "./src/client/App.js");

var _App2 = _interopRequireDefault(_App);

var _Home = __webpack_require__(/*! ./components/Home */ "./src/client/components/Home.js");

var _Home2 = _interopRequireDefault(_Home);

var _UserList = __webpack_require__(/*! ./components/UserList */ "./src/client/components/UserList.js");

var _UserList2 = _interopRequireDefault(_UserList);

var _Page = __webpack_require__(/*! ./components/404Page */ "./src/client/components/404Page.js");

var _Page2 = _interopRequireDefault(_Page);

var _LoginPage = __webpack_require__(/*! ./components/LoginPage */ "./src/client/components/LoginPage.js");

var _LoginPage2 = _interopRequireDefault(_LoginPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// a we are using server side data loading
// so we must use an array of paths and not the traditional react router approach
// each object represents one route
exports.default = [_extends({}, _App2.default, { // the app will always  be displayed to the screen as we have not tied any path to it
  routes: [_extends({
    path: "/"
  }, _Home2.default, {
    exact: true
  }), _extends({
    path: "/users"
  }, _UserList2.default, {
    exact: true
  }), _extends({
    path: "/login"
  }, _LoginPage2.default, {
    exact: true
  }), _extends({}, _Page2.default)]
})];

/***/ }),

/***/ "./src/client/actions/index.js":
/*!*************************************!*\
  !*** ./src/client/actions/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// this is making of the axios instance

var FET_USERS = exports.FET_USERS = "fetch_users";
var CHECK_USERS_LOGIN = exports.CHECK_USERS_LOGIN = "check_user_login";

var fetchUsers = exports.fetchUsers = function fetchUsers() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getSate, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get("/users");

            case 2:
              res = _context.sent;


              dispatch({
                type: FET_USERS,
                payload: res
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var checkLoginStatus = exports.checkLoginStatus = function checkLoginStatus() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getSate, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return api.get("/user/login");

            case 3:
              res = _context2.sent;

              // console.log(res);
              dispatch({
                type: CHECK_USERS_LOGIN,
                payload: true
              });
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);

              // console.log(error.response.data.message);
              dispatch({
                type: CHECK_USERS_LOGIN,
                payload: false
              });

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 7]]);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var login = exports.login = function login(formData) {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getSate, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return api.post("/user/login", formData);

            case 3:
              res = _context3.sent;

              // console.log(res);
              dispatch({
                type: CHECK_USERS_LOGIN,
                payload: true
              });
              _context3.next = 10;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);

              // console.log(error.response.data.message);
              dispatch({
                type: CHECK_USERS_LOGIN,
                payload: false
              });

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[0, 7]]);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var logout = exports.logout = function logout() {
  return function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getSate, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return api.get("user/logout");

            case 3:
              res = _context4.sent;

              console.log(res);
              dispatch({
                type: CHECK_USERS_LOGIN,
                payload: false
              });
              _context4.next = 11;
              break;

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);

              // console.log(error.response.data.message);
              dispatch({
                type: CHECK_USERS_LOGIN,
                payload: true
              });

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, undefined, [[0, 8]]);
    }));

    return function (_x10, _x11, _x12) {
      return _ref4.apply(this, arguments);
    };
  }();
};

/***/ }),

/***/ "./src/client/components/404Page.js":
/*!******************************************!*\
  !*** ./src/client/components/404Page.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//staticCotext is the context passed by static router only available during the server render side

var NotFoundPage = function NotFoundPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

  staticContext.notFound = true;
  return _react2.default.createElement(
    "h1",
    null,
    "Opps, route not found"
  );
};

exports.default = {
  component: NotFoundPage
};

/***/ }),

/***/ "./src/client/components/Header.js":
/*!*****************************************!*\
  !*** ./src/client/components/Header.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(/*! ../actions */ "./src/client/actions/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// check login status when the component is first rendered
var Header = function Header(_ref) {
  var auth = _ref.auth,
      checkLoginStatus = _ref.checkLoginStatus;

  (0, _react.useEffect)(function () {
    console.log("mounted header");
    checkLoginStatus();
  }, []);

  return _react2.default.createElement(
    "h1",
    null,
    "This is the header"
  );
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var auth = _ref2.auth;

  return {
    auth: auth
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { checkLoginStatus: _actions.checkLoginStatus })(Header);

/***/ }),

/***/ "./src/client/components/Home.js":
/*!***************************************!*\
  !*** ./src/client/components/Home.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _authHoc = __webpack_require__(/*! ./hoc/authHoc */ "./src/client/components/hoc/authHoc.js");

var _authHoc2 = _interopRequireDefault(_authHoc);

var _actions = __webpack_require__(/*! ../actions */ "./src/client/actions/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home(_ref) {
  var logout = _ref.logout;

  var handleClick = function handleClick(event) {
    console.log("counting");
  };
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "div",
      null,
      "This is the home comp, now watching"
    ),
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: "/about" },
        "about page"
      )
    ),
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "button",
        { onClick: handleClick },
        "Count"
      )
    ),
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "button",
        { onClick: logout },
        "Logout"
      )
    )
  );
};

exports.default = {
  component: (0, _reactRedux.connect)(null, { logout: _actions.logout })((0, _authHoc2.default)(Home))
};

/***/ }),

/***/ "./src/client/components/LoginPage.js":
/*!********************************************!*\
  !*** ./src/client/components/LoginPage.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _actions = __webpack_require__(/*! ../actions */ "./src/client/actions/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_Component) {
  _inherits(LoginForm, _Component);

  function LoginForm() {
    _classCallCheck(this, LoginForm);

    var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this));

    _this.state = { name: "", password: "" };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(LoginForm, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.id, event.target.value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      this.props.login(this.state);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.auth) {
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: "/" });
      }
      return _react2.default.createElement(
        "form",
        { onSubmit: this.handleSubmit },
        _react2.default.createElement(
          "label",
          null,
          "Name:",
          _react2.default.createElement("input", {
            type: "text",
            value: this.state.name,
            onChange: this.handleChange,
            id: "name"
          })
        ),
        _react2.default.createElement(
          "label",
          null,
          "Password:",
          _react2.default.createElement("input", {
            type: "password",
            value: this.state.password,
            onChange: this.handleChange,
            id: "password"
          })
        ),
        _react2.default.createElement("input", { type: "submit", value: "Submit" })
      );
    }
  }]);

  return LoginForm;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;

  return {
    auth: auth
  };
};

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { login: _actions.login })(LoginForm)
};

/***/ }),

/***/ "./src/client/components/UserList.js":
/*!*******************************************!*\
  !*** ./src/client/components/UserList.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _actions = __webpack_require__(/*! ../actions */ "./src/client/actions/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersList = function (_Component) {
  _inherits(UsersList, _Component);

  function UsersList() {
    _classCallCheck(this, UsersList);

    return _possibleConstructorReturn(this, (UsersList.__proto__ || Object.getPrototypeOf(UsersList)).apply(this, arguments));
  }

  _createClass(UsersList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchUsers();
    }
  }, {
    key: "renderUsers",
    value: function renderUsers() {
      return this.props.users.map(function (user) {
        return _react2.default.createElement(
          "li",
          { key: user.id },
          user.name
        );
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        "Here's a list of users",
        _react2.default.createElement(
          "ul",
          null,
          this.renderUsers()
        )
      );
    }
  }]);

  return UsersList;
}(_react.Component);

function mapStateToProps(state) {
  return { users: state.users };
}

// function for data loading in server side
// will not be used in the client nundle js
function loadData(store) {
  return store.dispatch((0, _actions.fetchUsers)());
}

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(UsersList),
  loadData: loadData
};

/***/ }),

/***/ "./src/client/components/hoc/authHoc.js":
/*!**********************************************!*\
  !*** ./src/client/components/hoc/authHoc.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (MyComponent, element) {
  console.log("element: ", element); // this element is passed by the MyComponent to the hoc
  var hoc = function hoc(props) {
    // console.log("props:", props); // this is the props passed to MyComponent by index js, the  hoc needs to send it further to MyComponent other wise it will not be available in MyComponent
    switch (props.auth) {
      case true:
        return _react2.default.createElement(MyComponent, props);
      case null:
        return _react2.default.createElement(
          "h3",
          null,
          "loading..."
        );

      default:
        return _react2.default.createElement(_reactRouterDom.Redirect, { to: "/login" });
    }
  };

  var mapStateToProps = function mapStateToProps(_ref) {
    var auth = _ref.auth;

    return {
      auth: auth
    };
  };

  return (0, _reactRedux.connect)(mapStateToProps)(hoc);
}; // an hoc is a function that takes a component and returns componet after if it chooses to modify it
// this hoc will check the auth status and redirect to the login page if not ogged in

/***/ }),

/***/ "./src/client/reducers/authReducer.js":
/*!********************************************!*\
  !*** ./src/client/reducers/authReducer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(/*! ../actions */ "./src/client/actions/index.js");

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case _actions.CHECK_USERS_LOGIN:
      return action.payload;

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "redux");

var _userReducers = __webpack_require__(/*! ./userReducers */ "./src/client/reducers/userReducers.js");

var _userReducers2 = _interopRequireDefault(_userReducers);

var _authReducer = __webpack_require__(/*! ./authReducer */ "./src/client/reducers/authReducer.js");

var _authReducer2 = _interopRequireDefault(_authReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  users: _userReducers2.default,
  auth: _authReducer2.default
});

/***/ }),

/***/ "./src/client/reducers/userReducers.js":
/*!*********************************************!*\
  !*** ./src/client/reducers/userReducers.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(/*! ../actions */ "./src/client/actions/index.js");

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FET_USERS:
      return action.payload.data;

    default:
      return state;
  }
};

/***/ }),

/***/ "./src/helpers/createStore.js":
/*!************************************!*\
  !*** ./src/helpers/createStore.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "redux");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(/*! axios */ "axios");

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(/*! ../client/reducers/ */ "./src/client/reducers/index.js");

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  var axiosInstance = _axios2.default.create({
    baseURL: "http://localhost:7000/",
    headers: {
      cookie: req.get("cookie") || ""
    }
  });
  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));
  return store;
};

/***/ }),

/***/ "./src/helpers/renderer.js":
/*!*********************************!*\
  !*** ./src/helpers/renderer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

var _reactRouterConfig = __webpack_require__(/*! react-router-config */ "react-router-config");

var _serializeJavascript = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _Routes = __webpack_require__(/*! ../client/Routes */ "./src/client/Routes.js");

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this is used for routing if we do server side data fetching
exports.default = function (req, store, context) {
  /*
  note: we are sending HTML code and not states and no JS like in normal react apps
  so we need to hydrate  and have sencond client bundle
  */
  // static router must be given the  current url
  // note: when a particular page(component) is being rendered server side the life cycle of
  // that component doesnt execute as we are fetching only the html
  // only when we send the client js bundle then only the component we
  // execute like a normal react app,  we can test it by removing the client bundle script
  // we need to use additional settings to make this behaviour in the server side
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        "div",
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));

  /*
    add html script tp inject the client bundle js and the state into the html content above
  */
  var html = "\n  <html>\n    <head>\n    </head>\n    <body>\n      <div id=\"root\">" + content + "</div>\n      <script>\n        window.INITIAL_STATE=" + (0, _serializeJavascript2.default)(store.getState()) + "\n      </script>\n       <script src=\"bundle.js\"></script>\n    </body>  \n  </html>\n  ";

  return html;
}; // works like JSON stringfy but prevents xss attackks

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! babel-polyfill */ "babel-polyfill");

var _express = __webpack_require__(/*! express */ "express");

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(/*! react-router-config */ "react-router-config");

var _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ "express-http-proxy");

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _path = __webpack_require__(/*! path */ "path");

var _path2 = _interopRequireDefault(_path);

var _Routes = __webpack_require__(/*! ./client/Routes */ "./src/client/Routes.js");

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(/*! ./helpers/renderer */ "./src/helpers/renderer.js");

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(/*! ./helpers/createStore */ "./src/helpers/createStore.js");

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  the root file for the ppication on the server
// we are running webpack with babel so we can use es6 modules in node as well

// const express = require("express");
//  the root file for the ppication on the server
// we are running webpack with babel so we can use es6 modules in node as well

// const express = require("express");
// const React = require("react");
// const renderToString = require("react-dom/server").renderToString;
// const Home = require("./client/components/Home").default;
var app = (0, _express2.default)();

// if any time this route is hit then the renderer server will redirect to the proxy address
app.use("/api", (0, _expressHttpProxy2.default)("http://localhost:7000/"));
// this is necessary to send the client bundle
app.use(_express2.default.static(_path2.default.resolve("dist", "public")));

app.get("*", function (req, res) {
  // '*' means to handle all routes
  // we need to stipe the cookie send from the browsers and send it to the api server
  var store = (0, _createStore2.default)(req);

  // some logic to initialize and load data into the store
  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    // run the load data function for every component where it is defined
    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  Promise.all(promises).then(function () {
    // after all the data loading functions are finished we render the  components
    var context = {};
    var content = (0, _renderer2.default)(req, store, context);
    if (context.url) {
      // if there is redirect used within the react then redirect has to be used
      return res.redirect(301, context.url);
    }
    // context is send to the rendered component as a prop and any changes there will be avaiable here
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(3000, function () {
  console.log("listen on port 3000");
});

/*
  api: https://jsonplaceholder.typicode.com/users, https://jsonplaceholder.typicode.com/posts
  to do set up routing


*/

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9Sb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy80MDRQYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0xvZ2luUGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L2NvbXBvbmVudHMvVXNlckxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL2hvYy9hdXRoSG9jLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcmVkdWNlcnMvYXV0aFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3JlZHVjZXJzL3VzZXJSZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9jcmVhdGVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzLWh0dHAtcHJveHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItY29uZmlnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZXJpYWxpemUtamF2YXNjcmlwdFwiIl0sIm5hbWVzIjpbIkFwcCIsInJvdXRlIiwicm91dGVzIiwibG9hZERhdGEiLCJzdG9yZSIsImNvbnNvbGUiLCJsb2ciLCJkaXNwYXRjaCIsImNvbXBvbmVudCIsInBhdGgiLCJIb21lUGFnZSIsImV4YWN0IiwiVXNlcnNMaXN0UGFnZSIsIkxvZ2luIiwiVW5rbm93blJvdXRlIiwiRkVUX1VTRVJTIiwiQ0hFQ0tfVVNFUlNfTE9HSU4iLCJmZXRjaFVzZXJzIiwiZ2V0U2F0ZSIsImFwaSIsImdldCIsInJlcyIsInR5cGUiLCJwYXlsb2FkIiwiY2hlY2tMb2dpblN0YXR1cyIsImxvZ2luIiwiZm9ybURhdGEiLCJwb3N0IiwibG9nb3V0IiwiTm90Rm91bmRQYWdlIiwic3RhdGljQ29udGV4dCIsIm5vdEZvdW5kIiwiSGVhZGVyIiwiYXV0aCIsIm1hcFN0YXRlVG9Qcm9wcyIsIkhvbWUiLCJoYW5kbGVDbGljayIsImV2ZW50IiwiTG9naW5Gb3JtIiwic3RhdGUiLCJuYW1lIiwicGFzc3dvcmQiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlU3VibWl0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJpZCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJwcm9wcyIsIkNvbXBvbmVudCIsIlVzZXJzTGlzdCIsInVzZXJzIiwibWFwIiwidXNlciIsInJlbmRlclVzZXJzIiwiTXlDb21wb25lbnQiLCJlbGVtZW50IiwiaG9jIiwiYWN0aW9uIiwidXNlcnNSZWR1Y2VycyIsImF1dGhSZXVjZXIiLCJkYXRhIiwicmVxIiwiYXhpb3NJbnN0YW5jZSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsImhlYWRlcnMiLCJjb29raWUiLCJyZWR1Y2VycyIsInRodW5rIiwid2l0aEV4dHJhQXJndW1lbnQiLCJjb250ZXh0IiwiY29udGVudCIsIlJvdXRlcyIsImh0bWwiLCJnZXRTdGF0ZSIsImFwcCIsInVzZSIsImV4cHJlc3MiLCJzdGF0aWMiLCJyZXNvbHZlIiwicHJvbWlzZXMiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlamVjdCIsInRoZW4iLCJjYXRjaCIsImFsbCIsInVybCIsInJlZGlyZWN0Iiwic3RhdHVzIiwic2VuZCIsImxpc3RlbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7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QUFJZ0IsTUFBSixDQUFXLElBQVgsRUFBaUIsWUFBTTtBQUNyQjFGLFVBQVFDLEdBQVIsQ0FBWSxxQkFBWjtBQUNELENBRkQ7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsaUQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHJlbmRlclJvdXRlcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItY29uZmlnXCI7XHJcbmltcG9ydCB7IGNoZWNrTG9naW5TdGF0dXMgfSBmcm9tIFwiLi9hY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcblxyXG4vLyByb3V0ZSByb3V0ZXMgYXJlIHRoZSBjb21wb25lbnRzIG1hdGNoZWQgYnkgdGhlIHJvdXRlcyBjb21wb25lbnQgZGVwZW5kaW5nIG9uIHRoZSBwYXRoXHJcbmNvbnN0IEFwcCA9ICh7IHJvdXRlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICB7cmVuZGVyUm91dGVzKHJvdXRlLnJvdXRlcyl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gZnVuY3Rpb24gZm9yIGRhdGEgbG9hZGluZyBpbiBzZXJ2ZXIgc2lkZVxyXG4vLyB3aWxsIG5vdCBiZSB1c2VkIGluIHRoZSBjbGllbnQgbnVuZGxlIGpzXHJcbmZ1bmN0aW9uIGxvYWREYXRhKHN0b3JlKSB7XHJcbiAgY29uc29sZS5sb2coXCJsb2FkaW5nIGRhdGFcIik7XHJcbiAgcmV0dXJuIHN0b3JlLmRpc3BhdGNoKGNoZWNrTG9naW5TdGF0dXMoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjb21wb25lbnQ6IEFwcCxcclxuICBsb2FkRGF0YSxcclxufTtcclxuIiwiaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcclxuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvSG9tZVwiO1xyXG5pbXBvcnQgVXNlcnNMaXN0UGFnZSBmcm9tIFwiLi9jb21wb25lbnRzL1VzZXJMaXN0XCI7XHJcbmltcG9ydCBVbmtub3duUm91dGUgZnJvbSBcIi4vY29tcG9uZW50cy80MDRQYWdlXCI7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9jb21wb25lbnRzL0xvZ2luUGFnZVwiO1xyXG5cclxuLy8gYSB3ZSBhcmUgdXNpbmcgc2VydmVyIHNpZGUgZGF0YSBsb2FkaW5nXHJcbi8vIHNvIHdlIG11c3QgdXNlIGFuIGFycmF5IG9mIHBhdGhzIGFuZCBub3QgdGhlIHRyYWRpdGlvbmFsIHJlYWN0IHJvdXRlciBhcHByb2FjaFxyXG4vLyBlYWNoIG9iamVjdCByZXByZXNlbnRzIG9uZSByb3V0ZVxyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgLi4uQXBwLCAvLyB0aGUgYXBwIHdpbGwgYWx3YXlzICBiZSBkaXNwbGF5ZWQgdG8gdGhlIHNjcmVlbiBhcyB3ZSBoYXZlIG5vdCB0aWVkIGFueSBwYXRoIHRvIGl0XHJcbiAgICByb3V0ZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6IFwiL1wiLFxyXG4gICAgICAgIC4uLkhvbWVQYWdlLFxyXG4gICAgICAgIGV4YWN0OiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogXCIvdXNlcnNcIixcclxuICAgICAgICAuLi5Vc2Vyc0xpc3RQYWdlLFxyXG4gICAgICAgIGV4YWN0OiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogXCIvbG9naW5cIixcclxuICAgICAgICAuLi5Mb2dpbixcclxuICAgICAgICBleGFjdDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIC4uLlVua25vd25Sb3V0ZSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuIiwiLy8gdGhpcyBpcyBtYWtpbmcgb2YgdGhlIGF4aW9zIGluc3RhbmNlXHJcblxyXG5leHBvcnQgY29uc3QgRkVUX1VTRVJTID0gXCJmZXRjaF91c2Vyc1wiO1xyXG5leHBvcnQgY29uc3QgQ0hFQ0tfVVNFUlNfTE9HSU4gPSBcImNoZWNrX3VzZXJfbG9naW5cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJzID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTYXRlLCBhcGkpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBhcGkuZ2V0KFwiL3VzZXJzXCIpO1xyXG5cclxuICBkaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBGRVRfVVNFUlMsXHJcbiAgICBwYXlsb2FkOiByZXMsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tMb2dpblN0YXR1cyA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCwgZ2V0U2F0ZSwgYXBpKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5nZXQoXCIvdXNlci9sb2dpblwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IENIRUNLX1VTRVJTX0xPR0lOLFxyXG4gICAgICBwYXlsb2FkOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IENIRUNLX1VTRVJTX0xPR0lOLFxyXG4gICAgICBwYXlsb2FkOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbiA9IChmb3JtRGF0YSkgPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTYXRlLCBhcGkpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLnBvc3QoXCIvdXNlci9sb2dpblwiLCBmb3JtRGF0YSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBDSEVDS19VU0VSU19MT0dJTixcclxuICAgICAgcGF5bG9hZDogdHJ1ZSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBDSEVDS19VU0VSU19MT0dJTixcclxuICAgICAgcGF5bG9hZDogZmFsc2UsXHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoLCBnZXRTYXRlLCBhcGkpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldChcInVzZXIvbG9nb3V0XCIpO1xyXG4gICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQ0hFQ0tfVVNFUlNfTE9HSU4sXHJcbiAgICAgIHBheWxvYWQ6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IENIRUNLX1VTRVJTX0xPR0lOLFxyXG4gICAgICBwYXlsb2FkOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vL3N0YXRpY0NvdGV4dCBpcyB0aGUgY29udGV4dCBwYXNzZWQgYnkgc3RhdGljIHJvdXRlciBvbmx5IGF2YWlsYWJsZSBkdXJpbmcgdGhlIHNlcnZlciByZW5kZXIgc2lkZVxyXG5cclxuY29uc3QgTm90Rm91bmRQYWdlID0gKHsgc3RhdGljQ29udGV4dCA9IHt9IH0pID0+IHtcclxuICBzdGF0aWNDb250ZXh0Lm5vdEZvdW5kID0gdHJ1ZTtcclxuICByZXR1cm4gPGgxPk9wcHMsIHJvdXRlIG5vdCBmb3VuZDwvaDE+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNvbXBvbmVudDogTm90Rm91bmRQYWdlLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNoZWNrTG9naW5TdGF0dXMgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG4vLyBjaGVjayBsb2dpbiBzdGF0dXMgd2hlbiB0aGUgY29tcG9uZW50IGlzIGZpcnN0IHJlbmRlcmVkXHJcbmNvbnN0IEhlYWRlciA9ICh7IGF1dGgsIGNoZWNrTG9naW5TdGF0dXMgfSkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIm1vdW50ZWQgaGVhZGVyXCIpO1xyXG4gICAgY2hlY2tMb2dpblN0YXR1cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIDxoMT5UaGlzIGlzIHRoZSBoZWFkZXI8L2gxPjtcclxufTtcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IGF1dGggfSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBhdXRoOiBhdXRoLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBjaGVja0xvZ2luU3RhdHVzIH0pKEhlYWRlcik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcbmltcG9ydCBhdXRoSG9jIGZyb20gXCIuL2hvYy9hdXRoSG9jXCI7XHJcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoeyBsb2dvdXQgfSkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNvdW50aW5nXCIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+VGhpcyBpcyB0aGUgaG9tZSBjb21wLCBub3cgd2F0Y2hpbmc8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TGluayB0bz1cIi9hYm91dFwiPmFib3V0IHBhZ2U8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5Db3VudDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dvdXR9PkxvZ291dDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY29tcG9uZW50OiBjb25uZWN0KG51bGwsIHsgbG9nb3V0IH0pKGF1dGhIb2MoSG9tZSkpLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgbG9naW4gfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBSZWRpcmVjdCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5jbGFzcyBMb2dpbkZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7IG5hbWU6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH07XHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBbZXZlbnQudGFyZ2V0LmlkXTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5sb2dpbih0aGlzLnN0YXRlKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLmF1dGgpIHtcclxuICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9cIiAvPjtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgTmFtZTpcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgUGFzc3dvcmQ6XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBhdXRoIH0pID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgYXV0aCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNvbXBvbmVudDogY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgbG9naW4gfSkoTG9naW5Gb3JtKSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGZldGNoVXNlcnMgfSBmcm9tIFwiLi4vYWN0aW9uc1wiO1xyXG5cclxuY2xhc3MgVXNlcnNMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMucHJvcHMuZmV0Y2hVc2VycygpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyVXNlcnMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy51c2Vycy5tYXAoKHVzZXIpID0+IHtcclxuICAgICAgcmV0dXJuIDxsaSBrZXk9e3VzZXIuaWR9Pnt1c2VyLm5hbWV9PC9saT47XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgSGVyZSdzIGEgbGlzdCBvZiB1c2Vyc1xyXG4gICAgICAgIDx1bD57dGhpcy5yZW5kZXJVc2VycygpfTwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xyXG4gIHJldHVybiB7IHVzZXJzOiBzdGF0ZS51c2VycyB9O1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBmb3IgZGF0YSBsb2FkaW5nIGluIHNlcnZlciBzaWRlXHJcbi8vIHdpbGwgbm90IGJlIHVzZWQgaW4gdGhlIGNsaWVudCBudW5kbGUganNcclxuZnVuY3Rpb24gbG9hZERhdGEoc3RvcmUpIHtcclxuICByZXR1cm4gc3RvcmUuZGlzcGF0Y2goZmV0Y2hVc2VycygpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNvbXBvbmVudDogY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgZmV0Y2hVc2VycyB9KShVc2Vyc0xpc3QpLFxyXG4gIGxvYWREYXRhLFxyXG59O1xyXG4iLCIvLyBhbiBob2MgaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgY29tcG9uZW50IGFuZCByZXR1cm5zIGNvbXBvbmV0IGFmdGVyIGlmIGl0IGNob29zZXMgdG8gbW9kaWZ5IGl0XHJcbi8vIHRoaXMgaG9jIHdpbGwgY2hlY2sgdGhlIGF1dGggc3RhdHVzIGFuZCByZWRpcmVjdCB0byB0aGUgbG9naW4gcGFnZSBpZiBub3Qgb2dnZWQgaW5cclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoTXlDb21wb25lbnQsIGVsZW1lbnQpID0+IHtcclxuICBjb25zb2xlLmxvZyhcImVsZW1lbnQ6IFwiLCBlbGVtZW50KTsgLy8gdGhpcyBlbGVtZW50IGlzIHBhc3NlZCBieSB0aGUgTXlDb21wb25lbnQgdG8gdGhlIGhvY1xyXG4gIGNvbnN0IGhvYyA9IChwcm9wcykgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJwcm9wczpcIiwgcHJvcHMpOyAvLyB0aGlzIGlzIHRoZSBwcm9wcyBwYXNzZWQgdG8gTXlDb21wb25lbnQgYnkgaW5kZXgganMsIHRoZSAgaG9jIG5lZWRzIHRvIHNlbmQgaXQgZnVydGhlciB0byBNeUNvbXBvbmVudCBvdGhlciB3aXNlIGl0IHdpbGwgbm90IGJlIGF2YWlsYWJsZSBpbiBNeUNvbXBvbmVudFxyXG4gICAgc3dpdGNoIChwcm9wcy5hdXRoKSB7XHJcbiAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICByZXR1cm4gPE15Q29tcG9uZW50IHsuLi5wcm9wc30gLz47XHJcbiAgICAgIGNhc2UgbnVsbDpcclxuICAgICAgICByZXR1cm4gPGgzPmxvYWRpbmcuLi48L2gzPjtcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIDxSZWRpcmVjdCB0bz1cIi9sb2dpblwiIC8+O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IGF1dGggfSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYXV0aCxcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShob2MpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBDSEVDS19VU0VSU19MT0dJTiB9IGZyb20gXCIuLi9hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBudWxsLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIENIRUNLX1VTRVJTX0xPR0lOOlxyXG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB1c2Vyc1JlZHVjZXJzIGZyb20gXCIuL3VzZXJSZWR1Y2Vyc1wiO1xyXG5pbXBvcnQgYXV0aFJldWNlciBmcm9tIFwiLi9hdXRoUmVkdWNlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcclxuICB1c2VyczogdXNlcnNSZWR1Y2VycyxcclxuICBhdXRoOiBhdXRoUmV1Y2VyLFxyXG59KTtcclxuIiwiaW1wb3J0IHsgRkVUX1VTRVJTIH0gZnJvbSBcIi4uL2FjdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IFtdLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEZFVF9VU0VSUzpcclxuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkLmRhdGE7XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHJlZHVjZXJzIGZyb20gXCIuLi9jbGllbnQvcmVkdWNlcnMvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAocmVxKSA9PiB7XHJcbiAgY29uc3QgYXhpb3NJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NzAwMC9cIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgY29va2llOiByZXEuZ2V0KFwiY29va2llXCIpIHx8IFwiXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXHJcbiAgICByZWR1Y2VycyxcclxuICAgIHt9LFxyXG4gICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rLndpdGhFeHRyYUFyZ3VtZW50KGF4aW9zSW5zdGFuY2UpKVxyXG4gICk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgU3RhdGljUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgcmVuZGVyUm91dGVzIH0gZnJvbSBcInJlYWN0LXJvdXRlci1jb25maWdcIjsgLy8gdGhpcyBpcyB1c2VkIGZvciByb3V0aW5nIGlmIHdlIGRvIHNlcnZlciBzaWRlIGRhdGEgZmV0Y2hpbmdcclxuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tIFwic2VyaWFsaXplLWphdmFzY3JpcHRcIjsgLy8gd29ya3MgbGlrZSBKU09OIHN0cmluZ2Z5IGJ1dCBwcmV2ZW50cyB4c3MgYXR0YWNra3NcclxuaW1wb3J0IFJvdXRlcyBmcm9tIFwiLi4vY2xpZW50L1JvdXRlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgc3RvcmUsIGNvbnRleHQpID0+IHtcclxuICAvKlxyXG4gIG5vdGU6IHdlIGFyZSBzZW5kaW5nIEhUTUwgY29kZSBhbmQgbm90IHN0YXRlcyBhbmQgbm8gSlMgbGlrZSBpbiBub3JtYWwgcmVhY3QgYXBwc1xyXG4gIHNvIHdlIG5lZWQgdG8gaHlkcmF0ZSAgYW5kIGhhdmUgc2VuY29uZCBjbGllbnQgYnVuZGxlXHJcbiAgKi9cclxuICAvLyBzdGF0aWMgcm91dGVyIG11c3QgYmUgZ2l2ZW4gdGhlICBjdXJyZW50IHVybFxyXG4gIC8vIG5vdGU6IHdoZW4gYSBwYXJ0aWN1bGFyIHBhZ2UoY29tcG9uZW50KSBpcyBiZWluZyByZW5kZXJlZCBzZXJ2ZXIgc2lkZSB0aGUgbGlmZSBjeWNsZSBvZlxyXG4gIC8vIHRoYXQgY29tcG9uZW50IGRvZXNudCBleGVjdXRlIGFzIHdlIGFyZSBmZXRjaGluZyBvbmx5IHRoZSBodG1sXHJcbiAgLy8gb25seSB3aGVuIHdlIHNlbmQgdGhlIGNsaWVudCBqcyBidW5kbGUgdGhlbiBvbmx5IHRoZSBjb21wb25lbnQgd2VcclxuICAvLyBleGVjdXRlIGxpa2UgYSBub3JtYWwgcmVhY3QgYXBwLCAgd2UgY2FuIHRlc3QgaXQgYnkgcmVtb3ZpbmcgdGhlIGNsaWVudCBidW5kbGUgc2NyaXB0XHJcbiAgLy8gd2UgbmVlZCB0byB1c2UgYWRkaXRpb25hbCBzZXR0aW5ncyB0byBtYWtlIHRoaXMgYmVoYXZpb3VyIGluIHRoZSBzZXJ2ZXIgc2lkZVxyXG4gIGNvbnN0IGNvbnRlbnQgPSByZW5kZXJUb1N0cmluZyhcclxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICA8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyZXEucGF0aH0gY29udGV4dD17Y29udGV4dH0+XHJcbiAgICAgICAgPGRpdj57cmVuZGVyUm91dGVzKFJvdXRlcyl9PC9kaXY+XHJcbiAgICAgIDwvU3RhdGljUm91dGVyPlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICApO1xyXG5cclxuICAvKlxyXG4gICAgYWRkIGh0bWwgc2NyaXB0IHRwIGluamVjdCB0aGUgY2xpZW50IGJ1bmRsZSBqcyBhbmQgdGhlIHN0YXRlIGludG8gdGhlIGh0bWwgY29udGVudCBhYm92ZVxyXG4gICovXHJcbiAgY29uc3QgaHRtbCA9IGBcclxuICA8aHRtbD5cclxuICAgIDxoZWFkPlxyXG4gICAgPC9oZWFkPlxyXG4gICAgPGJvZHk+XHJcbiAgICAgIDxkaXYgaWQ9XCJyb290XCI+JHtjb250ZW50fTwvZGl2PlxyXG4gICAgICA8c2NyaXB0PlxyXG4gICAgICAgIHdpbmRvdy5JTklUSUFMX1NUQVRFPSR7c2VyaWFsaXplKHN0b3JlLmdldFN0YXRlKCkpfVxyXG4gICAgICA8L3NjcmlwdD5cclxuICAgICAgIDxzY3JpcHQgc3JjPVwiYnVuZGxlLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICA8L2JvZHk+ICBcclxuICA8L2h0bWw+XHJcbiAgYDtcclxuXHJcbiAgcmV0dXJuIGh0bWw7XHJcbn07XHJcbiIsIi8vICB0aGUgcm9vdCBmaWxlIGZvciB0aGUgcHBpY2F0aW9uIG9uIHRoZSBzZXJ2ZXJcclxuLy8gd2UgYXJlIHJ1bm5pbmcgd2VicGFjayB3aXRoIGJhYmVsIHNvIHdlIGNhbiB1c2UgZXM2IG1vZHVsZXMgaW4gbm9kZSBhcyB3ZWxsXHJcblxyXG4vLyBjb25zdCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XHJcbi8vICB0aGUgcm9vdCBmaWxlIGZvciB0aGUgcHBpY2F0aW9uIG9uIHRoZSBzZXJ2ZXJcclxuLy8gd2UgYXJlIHJ1bm5pbmcgd2VicGFjayB3aXRoIGJhYmVsIHNvIHdlIGNhbiB1c2UgZXM2IG1vZHVsZXMgaW4gbm9kZSBhcyB3ZWxsXHJcblxyXG4vLyBjb25zdCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XHJcbi8vIGNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xyXG4vLyBjb25zdCByZW5kZXJUb1N0cmluZyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpLnJlbmRlclRvU3RyaW5nO1xyXG4vLyBjb25zdCBIb21lID0gcmVxdWlyZShcIi4vY2xpZW50L2NvbXBvbmVudHMvSG9tZVwiKS5kZWZhdWx0O1xyXG5pbXBvcnQgXCJiYWJlbC1wb2x5ZmlsbFwiO1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgeyBtYXRjaFJvdXRlcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItY29uZmlnXCI7XHJcbmltcG9ydCBwcm94eSBmcm9tIFwiZXhwcmVzcy1odHRwLXByb3h5XCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcblxyXG5pbXBvcnQgUm91dGVzIGZyb20gXCIuL2NsaWVudC9Sb3V0ZXNcIjtcclxuXHJcbmltcG9ydCByZW5kZXJlciBmcm9tIFwiLi9oZWxwZXJzL3JlbmRlcmVyXCI7XHJcbmltcG9ydCBjcmVhdGVTdG9yZSBmcm9tIFwiLi9oZWxwZXJzL2NyZWF0ZVN0b3JlXCI7XHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcblxyXG4vLyBpZiBhbnkgdGltZSB0aGlzIHJvdXRlIGlzIGhpdCB0aGVuIHRoZSByZW5kZXJlciBzZXJ2ZXIgd2lsbCByZWRpcmVjdCB0byB0aGUgcHJveHkgYWRkcmVzc1xyXG5hcHAudXNlKFwiL2FwaVwiLCBwcm94eShcImh0dHA6Ly9sb2NhbGhvc3Q6NzAwMC9cIikpO1xyXG4vLyB0aGlzIGlzIG5lY2Vzc2FyeSB0byBzZW5kIHRoZSBjbGllbnQgYnVuZGxlXHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMocGF0aC5yZXNvbHZlKFwiZGlzdFwiLCBcInB1YmxpY1wiKSkpO1xyXG5cclxuYXBwLmdldChcIipcIiwgKHJlcSwgcmVzKSA9PiB7XHJcbiAgLy8gJyonIG1lYW5zIHRvIGhhbmRsZSBhbGwgcm91dGVzXHJcbiAgLy8gd2UgbmVlZCB0byBzdGlwZSB0aGUgY29va2llIHNlbmQgZnJvbSB0aGUgYnJvd3NlcnMgYW5kIHNlbmQgaXQgdG8gdGhlIGFwaSBzZXJ2ZXJcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlcSk7XHJcblxyXG4gIC8vIHNvbWUgbG9naWMgdG8gaW5pdGlhbGl6ZSBhbmQgbG9hZCBkYXRhIGludG8gdGhlIHN0b3JlXHJcbiAgY29uc3QgcHJvbWlzZXMgPSBtYXRjaFJvdXRlcyhSb3V0ZXMsIHJlcS5wYXRoKVxyXG4gICAgLm1hcCgoeyByb3V0ZSB9KSA9PiB7XHJcbiAgICAgIC8vIHJ1biB0aGUgbG9hZCBkYXRhIGZ1bmN0aW9uIGZvciBldmVyeSBjb21wb25lbnQgd2hlcmUgaXQgaXMgZGVmaW5lZFxyXG4gICAgICByZXR1cm4gcm91dGUubG9hZERhdGEgPyByb3V0ZS5sb2FkRGF0YShzdG9yZSkgOiBudWxsO1xyXG4gICAgfSlcclxuICAgIC5tYXAoKHByb21pc2UpID0+IHtcclxuICAgICAgaWYgKHByb21pc2UpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgcHJvbWlzZS50aGVuKHJlc29sdmUpLmNhdGNoKHJlc29sdmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgLy8gYWZ0ZXIgYWxsIHRoZSBkYXRhIGxvYWRpbmcgZnVuY3Rpb25zIGFyZSBmaW5pc2hlZCB3ZSByZW5kZXIgdGhlICBjb21wb25lbnRzXHJcbiAgICBjb25zdCBjb250ZXh0ID0ge307XHJcbiAgICBjb25zdCBjb250ZW50ID0gcmVuZGVyZXIocmVxLCBzdG9yZSwgY29udGV4dCk7XHJcbiAgICBpZiAoY29udGV4dC51cmwpIHtcclxuICAgICAgLy8gaWYgdGhlcmUgaXMgcmVkaXJlY3QgdXNlZCB3aXRoaW4gdGhlIHJlYWN0IHRoZW4gcmVkaXJlY3QgaGFzIHRvIGJlIHVzZWRcclxuICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgzMDEsIGNvbnRleHQudXJsKTtcclxuICAgIH1cclxuICAgIC8vIGNvbnRleHQgaXMgc2VuZCB0byB0aGUgcmVuZGVyZWQgY29tcG9uZW50IGFzIGEgcHJvcCBhbmQgYW55IGNoYW5nZXMgdGhlcmUgd2lsbCBiZSBhdmFpYWJsZSBoZXJlXHJcbiAgICBpZiAoY29udGV4dC5ub3RGb3VuZCkge1xyXG4gICAgICByZXMuc3RhdHVzKDQwNCk7XHJcbiAgICB9XHJcbiAgICByZXMuc2VuZChjb250ZW50KTtcclxuICB9KTtcclxufSk7XHJcblxyXG5hcHAubGlzdGVuKDMwMDAsICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhcImxpc3RlbiBvbiBwb3J0IDMwMDBcIik7XHJcbn0pO1xyXG5cclxuLypcclxuICBhcGk6IGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycywgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzXHJcbiAgdG8gZG8gc2V0IHVwIHJvdXRpbmdcclxuXHJcblxyXG4qL1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1wb2x5ZmlsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3MtaHR0cC1wcm94eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWNvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXRodW5rXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcmlhbGl6ZS1qYXZhc2NyaXB0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _UserRepositoryImpl = _interopRequireDefault(require("../repositories/UserRepositoryImpl"));
var _UserService2 = _interopRequireDefault(require("./UserService"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}function _typeof(obj) {"@babel/helpers - typeof";if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (_typeof(call) === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}var

UserServiceImpl = /*#__PURE__*/function (_UserService) {_inherits(UserServiceImpl, _UserService);var _super = _createSuper(UserServiceImpl);
  function UserServiceImpl() {_classCallCheck(this, UserServiceImpl);return _super.call(this);

  }_createClass(UserServiceImpl, [{ key: "saveUser", value: function saveUser(

    user) {
      //business logic
      if (user && _typeof(user) === "object") {
        try {
          var UserRepository = new _UserRepositoryImpl["default"]();
          return UserRepository.update(user);
        } catch (err) {
          console.log("user may be undefined or not well structured" + err);
        }
      }
    } }, { key: "getAllData", value: function getAllData(

    res, factors) {
      try {
        var UserRepository = new _UserRepositoryImpl["default"]();
        UserRepository.findAll(res, factors);
      } catch (err) {
        console.log("cannot fetch data from the database" + err);
      }
    } }, { key: "recordExists", value: function recordExists(

    key) {
      try {
        var UserRepository = new _UserRepositoryImpl["default"]();
        return UserRepository.exists(key);
      } catch (err) {
        console.log("error checking if the record exist" + err);
      }
    } }, { key: "updateRecord", value: function updateRecord(

    key, data) {
      try {
        var UserRepository = new _UserRepositoryImpl["default"]();
        return UserRepository.updateRecord(key, data);
      } catch (err) {
        console.log("couldn't update record" + err);
      }
    } }, { key: "getRecord", value: function getRecord(

    key) {
      try {
        var UserRepository = new _UserRepositoryImpl["default"]();
        return UserRepository.getRecord(key);
      } catch (err) {
        console.log("error getting the record" + err);
      }
    } }]);return UserServiceImpl;}(_UserService2["default"]);var _default =


UserServiceImpl;exports["default"] = _default;
//# sourceMappingURL=UserServiceImpl.js.map
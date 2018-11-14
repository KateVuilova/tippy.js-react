(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('react-dom'), require('prop-types'), require('tippy.js')) :
  typeof define === 'function' && define.amd ? define(['react', 'react-dom', 'prop-types', 'tippy.js'], factory) :
  (global.Tippy = factory(global.React,global.ReactDOM,global.PropTypes,global.tippy));
}(this, (function (React,ReactDOM,PropTypes,tippy) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  tippy = tippy && tippy.hasOwnProperty('default') ? tippy['default'] : tippy;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  var getNativeTippyProps = function getNativeTippyProps(props) {
    var nativeProps = {};

    for (var prop in props) {
      if (prop !== 'children' && prop !== 'onCreate') {
        nativeProps[prop] = props[prop];
      }
    }

    return nativeProps;
  };

  var Tippy =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Tippy, _React$Component);

    function Tippy() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Tippy);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tippy)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.state = {
        isMounted: false
      };
      _this.container = typeof document !== 'undefined' && document.createElement('div');
      return _this;
    }

    _createClass(Tippy, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.setState({
          isMounted: true
        });
        this.tip = tippy.one(ReactDOM.findDOMNode(this), this.options);
        this.props.onCreate && this.props.onCreate(this.tip);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this.tip.set(this.options);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.tip) {
          this.tip.destroy();
          this.tip = null;
        }
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement(React.Fragment, null, this.props.children, this.isReactElementContent && this.state.isMounted && ReactDOM.createPortal(this.props.content, this.container));
      }
    }, {
      key: "isReactElementContent",
      get: function get() {
        return React.isValidElement(this.props.content);
      }
    }, {
      key: "options",
      get: function get() {
        return _extends({}, getNativeTippyProps(this.props), {
          content: this.isReactElementContent ? this.container : this.props.content
        });
      }
    }]);

    return Tippy;
  }(React.Component);

  Tippy.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    children: PropTypes.element.isRequired,
    onCreate: PropTypes.func
  };

  return Tippy;

})));
//# sourceMappingURL=Tippy.js.map

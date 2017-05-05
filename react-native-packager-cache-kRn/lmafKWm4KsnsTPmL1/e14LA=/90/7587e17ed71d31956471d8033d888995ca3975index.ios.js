var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var JustifyContentBasics = function (_Component) {
  babelHelpers.inherits(JustifyContentBasics, _Component);

  function JustifyContentBasics() {
    babelHelpers.classCallCheck(this, JustifyContentBasics);
    return babelHelpers.possibleConstructorReturn(this, (JustifyContentBasics.__proto__ || Object.getPrototypeOf(JustifyContentBasics)).apply(this, arguments));
  }

  babelHelpers.createClass(JustifyContentBasics, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactNative.View,
        { style: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between'
          } },
        _react2.default.createElement(_reactNative.View, { style: { width: 50, height: 50, backgroundColor: 'powderblue' } }),
        _react2.default.createElement(_reactNative.View, { style: { width: 50, height: 50, backgroundColor: 'skyblue' } }),
        _react2.default.createElement(_reactNative.View, { style: { width: 50, height: 50, backgroundColor: 'steelblue' } })
      );
    }
  }]);
  return JustifyContentBasics;
}(_react.Component);

;

_reactNative.AppRegistry.registerComponent('AwesomeProject', function () {
  return JustifyContentBasics;
});
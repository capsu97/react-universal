(() => {
  const React = require('react');
  const ReactDOM = require('react-dom');
  const Component = require('./components/component.jsx');

  ReactDOM.render(
      React.createElement(Component), document
  );
})();

"use strict";

//to-do: fetch JSON object which contains list of names
render: function render() {
    return React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "header" },
        React.createElement(
          "h1",
          null,
          "React Search!"
        ),
        React.createElement(
          "p",
          null,
          "List of names"
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(null, null), document.getElementById('main'));
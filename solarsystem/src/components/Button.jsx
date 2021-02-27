import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button className="btn button btn-light buttons col-lg-2 col-md-3 col-sm-4 my-3">
        {this.props.children}
      </button>
    );
  }
}

export default Button;

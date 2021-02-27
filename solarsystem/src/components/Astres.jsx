import React from "react";
import { Link } from "react-router-dom";

class Astres extends React.Component {
  render() {
    return (
      <Link className="nav-link" to={`/oneplanet/${this.props.id}`}>
        <h2> {this.props.englishName}</h2>
      </Link>
    );
  }
}

export default Astres;

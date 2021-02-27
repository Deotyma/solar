import React from "react";

class PlanetCard extends React.Component {
  render() {
    return (
      <>
        <h1>{this.props.englishName}</h1>
        <div className="row">
          <h3>Inlcination:{this.props.inclination}</h3>
          <h3>Gravity: {this.props.gravity}</h3>
          <h3>Mean radius {this.props.meanRadius}</h3>
        </div>
        <h3>Name {this.props.name}</h3>
      </>
    );
  }
}

export default PlanetCard;

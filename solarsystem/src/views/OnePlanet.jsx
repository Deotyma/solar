import React from "react";
import "./OnePlanet.css";
import PlanetCard from "../components/PlanetCard";

class OnePlanet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      astre: [],
      id: props.match.params.id,
    };
  }

  componentDidMount() {
    this.getAstre();
  }

  getAstre = () => {
    let url = `https://api.le-systeme-solaire.net/rest/bodies/${this.state.id}`;
    fetch(url)
      .then((resultAstre) => resultAstre.json())
      .then((resultAstre) => {
        console.log("resultat = ", resultAstre);
        this.setState({
          astre: resultAstre,
        });
      });
  };

  render() {
    return (
      <div className="onePlanet">
        <div className="container">
          <PlanetCard
            englishName={this.state.astre.englishName}
            inclination={this.state.astre.inclitation}
            gravity={this.state.astre.gravity}
            meanRadius={this.state.astre.meanRadius}
            name={this.state.astre.name}
          ></PlanetCard>

          {/* <h2 className="row">
            This is OnePlanet Page m.s<div className="puissance">-2</div>
          </h2> */}
        </div>
      </div>
    );
  }
}

export default OnePlanet;

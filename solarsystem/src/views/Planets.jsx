import React from "react";
import "./Planets.css";
import Button from "../components/Button";
import Astres from "../components/Astres";

class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      astres: [],
    };
  }

  componentDidMount() {
    let url = "https://api.le-systeme-solaire.net/rest/bodies/";
    fetch(url)
      .then((allAstres) => allAstres.json())
      .then((allAstres) => {
        console.log("resultat = ", allAstres);
        this.setState({
          astres: allAstres.bodies,
        });
      });
  }

  render() {
    return (
      <div className="planets">
        <div className="container">
          <div className="row justify-content-around">
            <Button>All</Button>
            <Button>Planets</Button>
            <Button>Satellites</Button>
          </div>
          <div className="row justify-content-around">
            {this.state.astres.map((astre) => (
              <div className="col-lg-3 col-md-6 col-sm-12 m-1 text-center p-2 astres">
                <Astres englishName={astre.englishName}></Astres>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Planets;

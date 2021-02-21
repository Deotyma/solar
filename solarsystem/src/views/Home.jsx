import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="">
        <div className="container">
          <h1 className="text-center m-5">Our Solar System</h1>

          <div className=" row d-flex justify-content-center col-12">
            <label
              for="exampleDataList"
              className="form-label col-12 text-center m"
            >
              <h3>Your research</h3>
            </label>
            <input
              class="form-control col"
              list="datalistOptions"
              id="exampleDataList"
              placeholder="Type to search..."
            ></input>
            <button
              className="btn button btn-light button col-lg-3 col-md-3 col-sm-4"
              type="button"
              id="inputGroupFileAddon04"
            >
              Submit
            </button>
          </div>
          <p className="paragraphe mt-5 text-center">
            Welcome to my page about the Solar System. Here you will find
            informations about the planets and their natural satellites as well
            as pictures of some of them. Have a good fun.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;

import { Component } from "react";
import "../styles/Card/style.css";
import "../styles/CardBtn/style.css";

class Discover extends Component {
 
  render() {
    return (
      <div>
        <h1 className="text-center">My Projects</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="card">
                    <img
                      src="../images/projects/Pick4Me-Screenshot.png"
                      className="card-img-top"
                      alt="Project 1"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img
                      src="../images/projects/Pick4Me-Screenshot.png"
                      className="card-img-top"
                      alt="Project 2"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img
                      src="../images/projects/Pick4Me-Screenshot.png."
                      className="card-img-top"
                      alt="Project 3"
                    />
                  </div>
                </div>

                <div
                  id="carouselExampleSlidesOnly"
                  className="carousel slide card"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src="../images/Project3"
                        alt="First slide"
                      ></img>
                    </div>

                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="../images/Project3"
                        alt="Second slide"
                      ></img>
                    </div>
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="../images/Project3"
                        alt="Third slide"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           

          </div>
        </div>
      </div>

    );

  }

}


export default Discover;

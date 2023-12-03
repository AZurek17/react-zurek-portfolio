import { Component } from "react";
import "../styles/Card/style.css";
import "../styles/CardBtn/style.css";

class Discover extends Component {
  render() {
    return (
      <div id="pBg">
        <h1 className="text-center">My Projects</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="card" id="pCard1">
                    <a
                      className="hiddenLink"
                      href="https://jacastro619.github.io/Pick4Me/"
                      target="_blank"
                    >
                      <h5>Visit Deployed Site</h5>
                    </a>
                    <a
                      className="hiddenLink"
                      href="https://github.com/AZurek17/AZ-Pick4Me"
                      target="_blank"
                    >
                      <i className="icon-github" id="myIcon"></i>
                    </a>
                  </div>
                </div>

                <div className="col">
                  <div className="card" id="pCard2">
                    <a
                      className="hiddenLink"
                      href="https://frozen-mesa-56300-52dd9f520f9a.herokuapp.com/"
                      target="_blank"
                    >
                      <h5>Visit Deployed Site</h5>
                    </a>
                    <a
                      className="hiddenLink"
                      href="https://github.com/Truecoding4life/api-adventures"
                      target="_blank"
                    >
                      <i className="icon-github" id="myIcon"></i>
                    </a>
                  </div>
                </div>

                <div className="col">
                  <div className="card" id="pCard3">
                    <a
                      className="hiddenLink"
                      href="https://frozen-mesa-56300-52dd9f520f9a.herokuapp.com/"
                      target="_blank"
                    >
                      <h5>Visit Deployed Site</h5>
                    </a>

                    <a
                      className="hiddenLink"
                      href="https://github.com/Truecoding4life/api-adventures"
                      target="_blank"
                    >
                      <i className="icon-github" id="myIcon"></i>
                    </a>

                </div>
              </div>

              <div className="col">
                  <div className="card" id="pCard4">
                    <a
                      className="hiddenLink"
                      href="https://app.screencastify.com/v2/watch/Tp2AvMyNSZOjduf1pa5u"
                      target="_blank"
                    >
                      <h5> Walkthrough Video Link </h5>
                    </a>

                    <a
                      className="hiddenLink"
                      href="https://github.com/AZurek17/nosql-social-network-api"
                      target="_blank"
                    >
                      <i className="icon-github" id="myIcon"></i>
                    </a>
                    
                </div>
              </div>

              
              <div className="col">
                  <div className="card" id="pCard5">
                    <a
                      className="hiddenLink"
                      href="https://app.screencastify.com/v2/watch/6QiUleTCpNdZ3OPlpNIJ"
                      target="_blank"
                    >
                      <h5>Walkthrough Video Link</h5>
                    </a>

                    <a
                      className="hiddenLink"
                      href="https://github.com/AZurek17/sql-employee-tracker"
                      target="_blank"
                    >
                      <i className="icon-github" id="myIcon"></i>
                    </a>
                    
                </div>
              </div>

              
              <div className="col">
                  <div className="card" id="pCard6">
                    <a
                      className="hiddenLink"
                      href="https://app.screencastify.com/v2/watch/JmFmh8sQQOOvlu2DUJvh"
                      target="_blank"
                    >
                      <h5>Walkthrough Video Link</h5>
                    </a>

                    <a
                      className="hiddenLink"
                      href="https://github.com/AZurek17/node-readme-gen"
                      target="_blank"
                    >
                      <i className="icon-github" id="myIcon"></i>
                    </a>
                    
                </div>
              </div>
              
              <div className="col">
                  <div className="card" id="pCard7">
                    <a
                      className="hiddenLink"
                      href="https://jate-text-editor-jzsu.onrender.com/"
                      target="_blank"
                    >
                      <h5>Visit Deployed Site</h5>
                    </a>

                    <a
                      className="hiddenLink"
                      href="https://github.com/AZurek17/pwa-text-editor"
                      target="_blank"
                    >
                      <i className="icon-github" id="myIcon"></i>
                    </a>
                    
                </div>
              </div>

              
              <div className="col">
                  <div className="card" id="pCard8">
                    <a
                      className="hiddenLink"
                      href="#"
                      target="_blank"
                    >
                      <h5>Visit Deployed Site</h5>
                    </a>

                    <a
                      className="hiddenLink"
                      href="https://github.com/AZurek17/react-zurek-portfolio"
                      target="_blank"
                    >
                      <i className="icon-github" id="myIcon"></i>
                    </a>
                    
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

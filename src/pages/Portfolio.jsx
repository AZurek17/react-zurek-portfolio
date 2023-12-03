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
                    <h3 id="titleP">Team Project 1</h3>
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
                    <h3 id="titleP">Team Project 2</h3>
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
                    <h3 id="titleP">NoSQL</h3>
                    <a
                      className="hiddenLink"
                      href="PWA-Text-Editor"
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
                  <div className="card" id="pCard4">
                    <h3 id="titleP">ORM-E-COM</h3>
                    <a
                      className="hiddenLink"
                      href="https://app.screencastify.com/v2/watch/GkLn6BAAw9DhN8k4BYd0"
                      target="_blank"
                    >
                      <h5> Walkthrough Video </h5>
                    </a>

                    <a
                      className="hiddenLink"
                      href="https://github.com/AZurek17/orm-e-com-back-end"
                      target="_blank"
                    >
                      <i className="icon-github" id="myIcon"></i>
                    </a>
                  </div>
                </div>

                <div className="col">
                  <div className="card" id="pCard5">
                    <h3 id="titleP">SQL-Employee-Tracker</h3>
                    <a
                      className="hiddenLink"
                      href="https://app.screencastify.com/v2/watch/6QiUleTCpNdZ3OPlpNIJ"
                      target="_blank"
                    >
                      <h5>Walkthrough Video</h5>
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
                    <h3 id="titleP">Node-README-Generator</h3>
                    <a
                      className="hiddenLink"
                      href="https://app.screencastify.com/v2/watch/JmFmh8sQQOOvlu2DUJvh"
                      target="_blank"
                    >
                      <h5>Walkthrough Video </h5>
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
                    <h3 id="titleP">PWA Text Editor</h3>
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
                    <h3 id="titleP">React - Porfolio</h3>
                    <a className="hiddenLink" href="#" target="_blank">
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

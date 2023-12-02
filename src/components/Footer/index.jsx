import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer text-center" >
      <span><h5 id="zurekFooter">Zurek Portfolio 2023</h5></span>
      <a href="https://github.com/AZurek17">
      <i class="icon-github" id="myIcon"></i>
      </a>
      <a href="https://www.linkedin.com/in/andy-zurek-374bb9291/" target="_blank" rel="noreferrer" className="icon-link">
      <i class="icon-linkedin-sign" id="myIcon"></i>
      </a>
      <a href="#" target="_blank" rel="noreferrer" className="icon-link">
      <i class="icon-twitter-sign" id="myIcon"></i>
      </a>
    </footer>
  );
}

export default Footer;

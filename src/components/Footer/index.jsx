import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer text-center" >
      <span>Zurek Portfolio 2023 </span>
      <a href="https://github.com/AZurek17">
        <i className="fab fa-github fa-sm" src="../images/github.png" alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/andy-zurek-374bb9291/" target="_blank" rel="noreferrer" className="icon-link">
        <i className="fab fa-linkedin fa-sm" src="../images/linkedin.png" alt="LinkedIN"></i>
      </a>
      <a href="#" target="_blank" rel="noreferrer" className="icon-link">
        <i className="fab fa-twitter fa-sm" src="../images/twitter.png" alt="Twitter"></i>
      </a>
    </footer>
  );
}

export default Footer;

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container-footer">
        {/* Text Content */}
        <div className="footer-text">
          <h1>
            <span>Desarrollado por Juan Caceres Miranda</span> <br />
          </h1>
          <p>App para ver el tiempo de algunas ciudades de colombia y del mundo.</p>
          <p>
            <li>React js</li>
            <li>Vite</li>
          </p>
        </div>
        <div className="footer-text">
          <h1>
           <span>Weatherapi</span> <br />
          </h1>
          <p>El Api consumida es de weatherapi.</p>
          <p>
            <li>https://www.weatherapi.com/api-explorer.aspx</li>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Footer;
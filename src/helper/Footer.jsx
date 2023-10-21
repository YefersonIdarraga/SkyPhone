import React from "react";

const Footer = () => {
  return (
    <section>
      <div className=" footer-section">
        {/*  LINK REDES SOCIALES */}

        <div className="footer-item social">
          <h2> Siguenos </h2>
          <ul>
            <li>
              {" "}
              <i className="fa-brands fa-instagram"></i>{" "}
            </li>

            <li>
              {" "}
              <i className="fa-brands fa-youtube"></i>{" "}
            </li>
            <li>
              {" "}
              <a href="#">
                <i className="fa-brands fa-github"></i>
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;

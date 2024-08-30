import React from "react";
import { Link } from "react-router-dom";
import style from './Footer.css'
const Footer = () => {
  return (
    <>
      <div style={style} className="bg-body-tertiary">
        <div className="d-flex flex-column text-center py-5 justify-content-center">
          <div className="fs-1 fw-bold py-2">News AI</div>
          <div className="text-center">
            <ul className="fs-5 p-1 d-flex flex-row gap-4 justify-content-center text-decoration-none list-unstyled  ">
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
          <div className="fs-5 copywright py-1">
            &#169; Created by Pranay Shelar
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

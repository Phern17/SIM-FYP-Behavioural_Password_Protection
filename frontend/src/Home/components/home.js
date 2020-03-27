import React from "react";
import classes from "./home.module.css";
import { Row, Col } from "react-bootstrap";

export const Home = () => (
  <React.Fragment>
    <div className={classes.Banner}>
      <p className={classes.BannerH1}>
        Secure your company devices with EzPass
      </p>
      <p className={classes.BannerH2}>
        simple &amp; secure solution for your corporate password needs
      </p>
    </div>
    <div className={classes.Features}>
      <h3 className={classes.FeaturesH1}>Overview of Features</h3>
      <Row style={{ height: "30vh" }}>
        <Col md={{ span: 4 }}>
          <div className={classes.FeaturesCol}>
            <h4>1.Password Generation</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Dapibus ultrices in iaculis nunc sed augue lacus. Quam nulla
              porttitor massa id neque
            </p>
          </div>
        </Col>
        <Col md={{ span: 4 }}>
          <div className={classes.FeaturesCol}>
            <h4>2. Password Storage</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Dapibus ultrices in iaculis nunc sed augue lacus. Quam nulla
              porttitor massa id neque
            </p>
          </div>
        </Col>
        <Col md={{ span: 4 }}>
          <div className={classes.FeaturesCol}>
            <h4>3. Password Sth</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Dapibus ultrices in iaculis nunc sed augue lacus. Quam nulla
              porttitor massa id neque
            </p>
          </div>
        </Col>
      </Row>
    </div>
  </React.Fragment>
);

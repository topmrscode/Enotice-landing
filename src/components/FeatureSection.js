import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class FeatureSection extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-features bg-light" id="features">
          <div className="container">
            <Row>
              <Col className="col-lg-12">
                <div className="title-heading mb-5">
                  <h3 className="text-dark mb-1 font-weight-light text-uppercase">
                    Features
                  </h3>
                  <div className="title-border-simple position-relative"></div>
                </div>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col lg="6">
                <div className="about-box about-light text-center p-3">
                  <div className="about-icon mb-4">
                    <i className="mdi mdi-key"></i>
                  </div>
                  <h4 className="font-weight-normal text-dark mb-3 mt-4">
                    Reduction du taux de contact de votre service client
                  </h4>
                  <p className="text-muted f-14">
                    Le retour vers les services clients ou SAV sera minimisé
                    grâce à l'integration d'un tutoriel en video. Vos clients
                    seront plus efficaces au moment de l'installation et du
                    montage de vos produits. <br />
                    <strong>
                      Gain de temps, <br />
                      diffusion d'informations essentielles et claires.
                    </strong>
                    <p className="text-muted f-14"></p>
                  </p>
                </div>
              </Col>
              <Col lg="6">
                <div className="zoom-img mt-32">
                  <img
                    src="images/share_Img1.png"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section className="section bg-features">
          <div className="container">
            <Row className="align-items-center">
              <Col lg="6">
                <div className="zoom-img">
                  <img
                    src="images/share-img2.png"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
              <Col lg="6">
                <div className="about-box about-light text-center p-3">
                  <div className="about-icon mb-4">
                    <i className="mdi mdi-map-marker"></i>
                  </div>
                  <h4 className="font-weight-normal text-dark mb-3 mt-4">
                    Proximity
                  </h4>
                  <p className="text-muted f-14">
                    Share is a huge showcase of all the things sold by students
                    of your school. Each thing you can see on the website is
                    sold by someone next to you, that you can contact easily.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section className="section bg-features bg-light">
          <div className="container">
            <Row className="align-items-center">
              <Col lg="6">
                <div className="about-box about-light text-center p-3">
                  <div className="about-icon mb-4">
                    <i className="mdi mdi-share-variant"></i>
                  </div>
                  <h4 className="font-weight-normal text-dark mb-3 mt-4">
                    Community
                  </h4>
                  <p className="text-muted f-14">
                    The strength of Share is that it helps you to create
                    community based on your school. As you all have the same
                    needs, you will be able to help each other like nobody.
                    Moreover, it will be for you the perfect opportunity to meet
                    new people from your school and build relationships.
                  </p>
                </div>
              </Col>
              <Col lg="6">
                <div className="zoom-img">
                  <img
                    src="images/share-img3.png"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default FeatureSection;

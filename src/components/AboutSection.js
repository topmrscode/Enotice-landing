import React from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class AboutSection extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section
          className="section bg-about bg-light-about bg-light"
          id="about"
        >
          <div className="container">
            <Row>
              <Col lg="12">
                <div className=" mb-5">
                  <h4 className="text-dark mb-1 text-main-title font-weight-light text-uppercase">
                    Ne minimisez pas l'impact positif que peut avoir une
                    documentation sur la vente de vos produits !
                  </h4>
                </div>
              </Col>
            </Row>
            <div>
              <p className="text-main-description text-muted f-14">
                Enotice c'est quoi ? <br />
                Enotice est une solution SAAS (Software as a Service) qui genere
                un QRCode pour la creation de votre documentation produit
                (manuel d'utilisation, montage en video, notice de maintenance
                ...), la centralise sur une meme page et la rend disponible a
                vos clients par l'intermediaire d'internet. <br />
                <strong>
                  Avec Enotice, digitalisez vos manuels d'utilisation et de
                  montage.
                </strong>
              </p>
            </div>
            <Row></Row>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default AboutSection;

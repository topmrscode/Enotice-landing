import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class AboutSection extends React.Component {

    render() {

        return (
            <React.Fragment>
                <section className="section bg-about bg-light-about bg-light" id="about">
                    <div className="container">
                        <Row>
                            <Col lg="12">
                                <div className=" mb-5">
                                    <h3 className="text-dark mb-1 text-main-title font-weight-light text-uppercase">Made by students for students</h3>
                                </div>
                            </Col>
                        </Row>
                        <div>
                            <p className="text-main-description text-muted f-14">Are you looking for a student rental? <br/>Do you have trouble finding one during your internship periods ? <br/> Is your washing machine broken? Looking for new furnitures?  <br/>Need to squat a sofa for a few weeks / months ?  <br/> Are you trying to find nice people to rent your apartment or join your collocation?  <br/> Paying 900 € for a 10m2 bristles?  <br/> <br/> <span className="text-main-description-important">Share and the hundreds of students and alumni of your school is made for you!</span> </p>

                        </div>
                        <Row>
                          
                         </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default AboutSection;
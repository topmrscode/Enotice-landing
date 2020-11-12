import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import RBCarousel from "react-bootstrap-carousel";

const styles = { height: 400, width: "50%" };

class ClientSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            autoplay: true
        };
    }
    onSelect = (active, direction) => {
        console.log(`active=${active} && direction=${direction}`);
    };
    visiableOnSelect = active => {
        console.log(`visiable onSelect active=${active}`);
    };
    slideNext = () => {
        this.slider.slideNext();
    };
    slidePrev = () => {
        this.slider.slidePrev();
    };
    goToSlide = () => {
        this.slider.goToSlide(4);
    };
    autoplay = () => {
        this.setState({ autoplay: !this.state.autoplay });
    };
    _changeIcon = () => {
        let { leftIcon, rightIcon } = this.state;
        leftIcon = leftIcon ? undefined : <span className="fa fa-glass" />;
        rightIcon = rightIcon ? undefined : <span className="fa fa-music" />;
        this.setState({ leftIcon, rightIcon });
    };
    render() {
        return (
            <React.Fragment>

                <section className="section bg-clients" id="clients">
                    <div className="bg-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="title-heading mb-5">
                                    <h3 className="text-white mb-1 font-weight-light text-uppercase">Students opinions</h3>
                                    <div className="title-border-color position-relative"></div>
                                </div>
                            </div>
                        </div>

                        <Row>
                            <Col span={12} style={{ marginTop: 20 }}>
                                <RBCarousel
                                    version={4}
                                    autoplay={this.state.autoplay}
                                    pauseOnVisibility={true}
                                    onSelect={this.visiableOnSelect}
                                    slideshowSpeed={2000}
                                >
                                    <div className="item">
                                        <Row>
                                            <Col lg="6">
                                                <div className="testi-content">
                                                    <div className="testi-box mt-4">
                                                        <h4 className="text-white mb-3 font-weight-light">"Ressell furnitures easily"</h4>
                                                        <p className="text-white-70 font-weight-light mb-0 f-15">Thanks to share, I could easily resell my furniture after my end of schooling. <br/>There is always a student in 1st year interested.</p>
                                                        <div className="quote-img">
                                                            <img src="images/quote-img.png" alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <div className="float-right ml-3">
                                                            <div className="client-img">
                                                                <img src="images/clients/img-4.jpg" alt="" className="img-fluid rounded-circle" />
                                                            </div>
                                                        </div>
                                                        <div className="clients-name text-right pt-3">
                                                            <h6 className="text-white font-weight-normal position-relative f-17 mb-0"><span className="after-border"></span> Sherrie Barboza</h6>
                                                            <p className="text-white-70 f-13 mb-0">Business school Student</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className="testi-content">
                                                    <div className="testi-box mt-4">
                                                        <h4 className="text-white mb-3 font-weight-light">"Trust and meet students"</h4>
                                                        <p className="text-white-70 font-weight-light mb-0 f-15">Share allowed me to meet new students, it's so easy to speack with somebody of the same school and more when you just arrived and you don't know anyone !</p>
                                                        <div className="quote-img">
                                                            <img src="images/quote-img.png" alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <div className="float-right ml-3">
                                                            <div className="client-img">
                                                                <img src="images/clients/img-3.jpg" alt="" className="img-fluid rounded-circle" />
                                                            </div>
                                                        </div>
                                                        <div className="clients-name text-right pt-3">
                                                            <h6 className="text-white font-weight-normal position-relative f-17 mb-0"><span className="after-border"></span> Linda Sanor</h6>
                                                            <p className="text-white-70 f-13 mb-0">Design school student</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="item">
                                        <Row>
                                            <Col lg="6">
                                                <div className="testi-content">
                                                    <div className="testi-box mt-4">
                                                        <h4 className="text-white mb-3 font-weight-light">"Find your coloc"</h4>
                                                        <p className="text-white-70 font-weight-light mb-0 f-15">Share allowed me to rapidly find a student to join a collocation, she is my best friend. We don't know all students of our school. Share is a way to begin create a powerful community.</p>
                                                        <div className="quote-img">
                                                            <img src="images/quote-img.png" alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <div className="float-right ml-3">
                                                            <div className="client-img">
                                                                <img src="images/clients/img-1.jpg" alt="" className="img-fluid rounded-circle" />
                                                            </div>
                                                        </div>
                                                        <div className="clients-name text-right pt-3">
                                                            <h6 className="text-white font-weight-normal position-relative f-17 mb-0"><span className="after-border"></span> Mary Cantu</h6>
                                                            <p className="text-white-70 f-13 mb-0">Student developer</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className="testi-content">
                                                    <div className="testi-box mt-4">
                                                        <h4 className="text-white mb-3 font-weight-light">"Best solution of proximity"</h4>
                                                        <p className="text-white-70 font-weight-light mb-0 f-15">it is easy to contact a student because we are going to the same university, no need to go far to sell your game console or find a sofa for a few weeks!</p>
                                                        <div className="quote-img">
                                                            <img src="images/quote-img.png" alt="" className="img-fluid" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-2">
                                                        <div className="float-right ml-3">
                                                            <div className="client-img">
                                                                <img src="images/clients/img-6.jpg" alt="" className="img-fluid rounded-circle" />
                                                            </div>
                                                        </div>
                                                        <div className="clients-name text-right pt-3">
                                                            <h6 className="text-white font-weight-normal position-relative f-17 mb-0"><span className="after-border"></span> Rodney Grey</h6>
                                                            <p className="text-white-70 f-13 mb-0">Law student</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>

                            
                                </RBCarousel>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default ClientSection;
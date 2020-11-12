import React from 'react';
import { AvForm, AvField, AvGroup, FormGroup, AvInput, Label} from 'availity-reactstrap-validation';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { requestDemo } from './requests/Contact';

class DemoSection extends React.Component {
    constructor(props) {
        super(props);
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = {
            error : "",
            succes : false,
            CheckBoxValidation : false
        };
      }
      onClick(){
          this.setState({CheckBoxValidation : true})
      }
    
      handleSubmit(event, errors, values) {
        this.setState({error : ""})
        let message = {
              email: values.email,
              firstname: values.firstname,
              lastname: values.lastname,
              phone: values.phone,
              schoolname: values.schoolname,
          }
          if(this.state.CheckBoxValidation == true) {
            requestDemo(message).then((data) => {
                if(data.error != null){
                    this.setState({error : data.error.message})
                }
                else {
                    this.setState({success : true})
                      // remettre les champs a "" apres avoir submit 
            this.form && this.form.reset();
                }
          })
        }
        else {
            this.setState({error : "Please accept our PP nad CGV."})
        }
          
           
        }



    render() {

        return (
            <React.Fragment>
                <section className="section bg-light" id="contact">
                    <div className="container" style={{paddingTop : "50px"}}>
                        <div className="row">
                            <Col lg="12">
                                <div className="title-heading mb-5">
                                    <h3 className="text-dark mb-1 font-weight-light text-uppercase">Request a free demo</h3>
                                    <div className="title-border-simple position-relative"></div>
                                </div>
                                <p className="text-muted f-14">Simply complete the form and we will get back to you as soon as possible.</p>
                            </Col>
                        </div>

                        <Row>
                            <Col lg="12">
                                <div className="contact-box p-5">
                                    {this.state.error && (
                                        <p style={{color:"red"}}>{this.state.error}</p>
                                    )}
                                    {this.state.success == true && (
                                        <p style={{color:"green"}}>Message sended with success ! </p>
                                    )}
                                    <Row>
                                        <Col lg="8" md="6">
                                            <div className="custom-form p-3">
                                                <div id="message"></div>
                                                <AvForm onSubmit={this.handleSubmit} id="contact-form" ref={c => (this.form = c)}>
                                                    <Row>
                                                        <Col lg="6">
                                                            <div className="form-group app-label">
                                                                <AvField name="firstname" type="text" validate={{ required: { value: true } }} placeholder="firstname" />
                                                            </div>
                                                        </Col>
                                                        <Col lg="6">
                                                            <div className="form-group app-label">
                                                                <AvField name="lastname" type="text" validate={{ required: { value: true } }} placeholder="lastname" />
                                                            </div>
                                                        </Col>
                                                        <Col lg="12">
                                                            <div className="form-group app-label">
                                                                <AvField name="email" type="text" errorMessage="Invalid Email" validate={{ required: { value: true }, email: { value: true } }} placeholder="Email" />
                                                            </div>
                                                        </Col>
                                                        <Col lg="6">
                                                            <div className="form-group app-label">
                                                                <AvField name="phone" type="text" validate={{ required: { value: true } }} placeholder="phone" />
                                                            </div>
                                                        </Col>
                                                        <Col lg="6">
                                                            <div className="form-group app-label">
                                                                <AvField name="schoolname" type="text" validate={{ required: { value: true } }} placeholder="school" />
                                                            </div>
                                                        </Col>
                                                        <Col lg="12">
                                                            <div className="form-group app-label">
                                                            <AvField  onClick={this.onClick} type="checkbox" name="checkbox" validate={{ required: { value: true } }} />
                                                                <span className=" text-muted f-14" style={{paddingLeft: "30px"}} > I accept the <a href="#">Privacy Policy</a> and the <a href="#"> CGV</a></span>
                                                            </div>
                                                        </Col>

                                                                                
                                                        <Row>
                        
                                                            <Col sm="12">
                                                             <input style={{marginLeft: "15px"}} type="submit" className="submitBnt btn btn-custom" value="Request Demo" />
                                                                <div id="simple-msg"></div>
                                                            </Col>
                                                          
                                                        </Row>

                                                    </Row>
                                                </AvForm>
                                            </div>
                                        </Col>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="contact-cantent p-3">
                                            
                                                <div className="contact-details mt-2">
                                                    <div className="float-left contact-icon mr-3 mt-2">
                                                        <i className="mdi mdi-email-outline text-muted h5"></i>
                                                    </div>
                                                    <div className="app-contact-desc text-muted pt-1">
                                                        <p className="mb-0 info-title f-13">Email :</p>
                                                        <p className="mb-0 f-13"><Link to="" className="text-muted">contact@shareapp.fr</Link></p>
                                                    </div>
                                                </div>

                                                <div className="contact-details mt-2">
                                                    <div className="float-left contact-icon mr-3 mt-2">
                                                        <i className="mdi mdi-map-marker text-muted h5"></i>
                                                    </div>
                                                    <div className="app-contact-desc text-muted pt-1">
                                                        <p className="mb-0 info-title f-13">Location :</p>
                                                        <p className="mb-0 f-13"><Link to="" className="text-muted">31500 Toulouse, France</Link></p>
                                                    </div>
                                                </div>

                                                <div style={{paddingTop: "60px"}}className="follow mt-4">
                                                    <h4 className="text-dark mb-3">Follow</h4>
                                                    <ul className="follow-icon list-inline mt-32 mb-0">
                                                        <li className="list-inline-item f-15"><Link to="#" className="social-icon text-muted"><i className="mdi mdi-facebook"></i></Link></li>&nbsp;
                                                        <li className="list-inline-item f-15"><Link to="#" className="social-icon text-muted"><i className="mdi mdi-twitter"></i></Link></li>&nbsp;
                                                        <li className="list-inline-item f-15"><Link to="#" className="social-icon text-muted"><i className="mdi mdi-linkedin"></i></Link></li>&nbsp;
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default DemoSection;
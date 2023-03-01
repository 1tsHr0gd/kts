/*eslint-disable*/
import React from "react";

// reactstrap components
import { Col, Container, Nav, Row } from "reactstrap";

import ktsLogo from '../../assets/img/kts_logo_old.png'

function KTSFooter() {
  return (
    <footer className='footer' data-background-color="black">
        <Container fluid>
            <Row style={{marginLeft:'5%', marginRight:'5%',display:"inline-flex"}}>
                <Col md='8' sm='8' lg='8'>
                    <a href='/home'>
                        <img src={ktsLogo}/>
                    </a>
                        
                    <p style={{marginRight:'20%', marginTop:'5%'}}>
                        Explore the Wildlife and Culture, and experience the scenic Nature
                        and hospitality of Kenya as you journey through the Mountains, Lakes,
                        vast Plains and Platues all the way down to the beaches along the coast.
                    </p>
                </Col>
                <Col md='4' sm='4' lg='4'>
                        <h4 className="title" style={{marginTop:'-10%'}} id='contact-us'>
                            Contact Info
                        </h4>
                        <li style={{listStyle:'none'}}>
                            <ul>
                                <a href='#pablo'>Kenya</a>
                            </ul>
                            <ul>
                                Enter Address
                            </ul>
                            <ul>
                                <a href='#pablo'>+254 712345678</a>
                            </ul>
                            <ul>
                                <a href='#pablo'>info@kenyatoursafaris.com</a>
                            </ul>
                        </li>  
                    <div>
                        <h4 className="title" style={{marginTop:'-5%'}}>Follow Us on...</h4>
                        <Nav>
                            <Row className="">
                                <Col>
                                    <i className="fab fa-twitter"></i>
                                </Col>
                                <Col>
                                    <i className="fab fa-facebook-square"></i>
                                </Col>
                                <Col>
                                    <i className="fab fa-instagram"></i>
                                </Col>
                            </Row>
                        </Nav>
                    </div>
                </Col>
            </Row>
        </Container>
              
    </footer>
  );
}

export default KTSFooter;

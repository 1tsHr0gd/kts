import React from 'react';

import {
    Container,
    Row,
    Col,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
		Card,
		CardBody,
		CardHeader,
  } from "reactstrap";

import ExamplesNavbar from 'components/Navbars/ExamplesNavbar';
import LandingPageHeader from 'components/Headers/LandingPageHeader';
import DefaultFooter from 'components/Footers/DefaultFooter';
import QuestionUs from 'views/index-sections/QuestionUs';
import HorizontalScroll from 'views/index-sections/HorizontalScroll';
import Testimonials from 'components/Testimonials';
import Faqs from 'views/index-sections/Faqs';
import DescImg from './assets/img/bg1.jpg'
import KTSFooter from 'views/index-sections/KTSFooter';

export default function Home() {

  const [pills, setPills] = React.useState("1");

  return (
    <div>
        <div>
        <ExamplesNavbar/>
        <LandingPageHeader/>
        <div className="section section-about-us" id='content'>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who we are?</h2>
                <h5 className="description">
                It is with great pleasure that we introduce our company and services to you. 
                New Kenya Travel & Tours Safaris Ltd is a privately owned safari company founded 20 years ago, 
                firstly in car hire business (Patel Tours & Safaris) and now fully as in-bound Tour/Safari Operator 
                in Kenya & the entire East Africa. We have all it takes to color your safari.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/login.jpg") + ")",
                      marginBottom:'auto'

                    }}
                  >
                  </div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg1.jpg") + ")",
                      marginTop:'20px'
                    }}
                  ></div>
                </Col>
              </Row>
            </div>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h2 className="title text-center">Our Tours and Team</h2>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-success nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <i className="now-ui-icons design_image"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                          
                        }}
                      >
                        <i className="now-ui-icons location_pin"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                        
                      >
                        <i className="now-ui-icons business_money-coins"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <h2 className='text-center' style={{marginTop:'20px'}}> Gallery</h2>
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections" style={{marginTop:'10px'}}>
                      <Col md="6" sm='6' lg='6'>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg1.jpg")}
                        ></img>
                        <br/>
                        <br/>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg3.jpg")}
                        ></img>
                      </Col>
                      <Col md="6" sm='6' lg='6'>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg")}
                        ></img>
                        <br/>
                        <br/>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <h2 className='text-center' style={{marginTop:'20px'}}>Tour Map</h2>
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6" sm='6' lg='6'>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg6.jpg")}
                        ></img>
                        <br/>
                        <br/>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg1.jpg")}
                        ></img>
                      </Col>
                      <Col md="6" sm='6' lg='6'>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg7.jpg")}
                        ></img>
                        <br/>
                        <br/>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("assets/img/bg8.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills3">
                  <h2 className='text-center' style={{marginTop:'20px'}}>Tour Packages</h2>
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6" sm='6' lg='6'>
												<Card>
													<a href='#pablo' className='stretched-link postion-relative' style={{textDecoration:'none'}}>
													<CardBody>
														<img
														alt="..."
														className=""
														src={require("assets/img/bg3.jpg")}
														></img>
													</CardBody>
													<CardHeader>
														<h3 className='text-center'>Tour</h3>
													</CardHeader>
													</a>
												</Card>
												<Card>
													<a href='#pablo' className='stretched-link postion-relative' style={{textDecoration:'none'}}>
													<CardBody>
														<img
														alt="..."
														className=""
														src={require("assets/img/bg8.jpg")}
														></img>
													</CardBody>
													<CardHeader>
														<h3 className='text-center'>Tour</h3>
													</CardHeader>
													</a>
												</Card>
                      </Col>
                      <Col md="6" sm='6' lg='6'>
												<Card>
													<a href='#pablo' className='stretched-link postion-relative' style={{textDecoration:'none'}}>
														<CardBody>
															<img
															alt="..."
															className=""
															src={require("assets/img/bg7.jpg")}
															></img>
														</CardBody>
														<CardHeader>
															<h3 className='text-center'>Tour</h3>
														</CardHeader>
													</a>													
												</Card>
												<Card>
													<a href='#pablo' className='stretched-link postion-relative' style={{textDecoration:'none'}}>
													<CardBody>
														<img
														alt="..."
														className=""
														src={require("assets/img/bg6.jpg")}
														></img>
													</CardBody>
													<CardHeader>
														<h3 className='text-center'>Tour</h3>
													</CardHeader>
													</a>
												</Card>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row>
          </Container>
          <HorizontalScroll/>
          <div style={{marginLeft:'10%', marginRight:'10%'}}>
            <h2 className='title text-center'>Visiting Kenya & Tanzania</h2>
            <Row>
              <Col md='8' sm='8' lg='8'>
							<p className='text-left'><b>Kenya:</b> Kenya is a serene country with a vast variety of landscapes ranging
												coastal beaches, savannah grasslands, lakes, mountains, rivers and
												river beds. With an all year round weather of mostly glorious sunshine,
												it makes a perfect holiday destination for everyone. <a href='kenya-locations'>Learn more...</a>
							</p>
							<p className='text-left'><b>Tanzania:</b> Kenya is a serene country with a vast variety of landscapes ranging
												coastal beaches, savannah grasslands, lakes, mountains, rivers and
												river beds. With an all year round weather of mostly glorious sunshine,
												it makes a perfect holiday destination for everyone. <a href='kenya-locations'>Learn more...</a>
							</p>
              </Col>
							<Col>
							<img src={DescImg} className='img-raised'/>
							</Col>
            </Row>
          </div>
          <QuestionUs/>
          <Testimonials/>
          <Faqs/>
        </div>
        <KTSFooter/>
        <DefaultFooter/>
        </div>
    </div>
    
  )
}

import DefaultFooter from 'components/Footers/DefaultFooter'
import LandingPageHeader from 'components/Headers/LandingPageHeader'
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar'
import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import KTSFooter from 'views/index-sections/KTSFooter'
import Img1 from './assets/img/bg5.jpg'

function TourPage() {
    return (
        <div>
            <ExamplesNavbar/>
            <LandingPageHeader/>
            <div id='content'>
                <h2 className='title text-center'>Tour Name</h2>
                <Row style={{marginLeft:'10%', marginRight:'10%'}}>
                    <Col sm='8' md='8' lg='8'>
                        <h3>An overview</h3>
                        <p>
                            Tour Description. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat. Duis aute irure dolor in reprehenderit in voluptate 
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia 
                            deserunt mollit anim id est laborum.
                        </p>
                        <br/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat. Duis aute irure dolor in reprehenderit in voluptate 
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia 
                            deserunt mollit anim id est laborum.
                        </p>
                    </Col>
                    <Col style={{alignItems:'center'}} md='4' sm='4' lg='4'>
                        <img src={Img1} style={{marginBottom:'10%'}} className='img-raised'/>
                        <img src={Img1} style={{marginBottom:'10%'}} className='img-raised'/>
                    </Col>
                </Row>
                
                <Row style={{marginLeft:'10%', marginRight:'10%', marginTop:'5%'}}>
                    <Col style={{alignItems:'center'}} md='4' sm='4' lg='4'>
                        <img src={Img1} style={{marginBottom:'10%'}} className='img-raised'/>
                        <img src={Img1} style={{marginBottom:'10%'}} className='img-raised'/>
                    </Col>
                    <Col>
                        <h3>A detailed look</h3>
                        <p>
                            Tour Description. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat. Duis aute irure dolor in reprehenderit in voluptate 
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia 
                            deserunt mollit anim id est laborum.
                        </p>
                        <br/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat. Duis aute irure dolor in reprehenderit in voluptate 
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia 
                            deserunt mollit anim id est laborum.
                        </p>
                    </Col>
                </Row>
                <Row style={{marginLeft:'10%', marginRight:'10%'}}>
                    <h3 className='text-center'>Another heading</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in voluptate 
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum.
                    </p>
                </Row>
            </div>
            <div className='send-button text-center'>
                <Button
                    color='success'
                    href="#pablo"
                >
                    Booking Enquiry
                </Button>
            </div>
            <KTSFooter/>
            <DefaultFooter/>
        </div>
    )
}

export default TourPage
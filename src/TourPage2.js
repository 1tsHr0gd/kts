import DefaultFooter from 'components/Footers/DefaultFooter'
import LandingPageHeader from 'components/Headers/LandingPageHeader'
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar'
import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import KTSFooter from 'views/index-sections/KTSFooter'
import Img1 from './assets/img/bg5.jpg'


function TourPage2() {
    return (
        <div>
            <ExamplesNavbar/>
            <LandingPageHeader/>
            <div style={{marginLeft:'10%', marginRight:'10%'}}>
                <h2 className='title text-center' id='content'>Tour Page</h2>
                <Row>
                    <h3 className='text-center'>An overview</h3>
                    <p className='text-justify'>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in voluptate 
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum.
                    </p>
                    <p className='text-justify'>
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
                <Row>
                    <Col>
                        <img src={Img1} style={{marginBottom:'10%'}} className='img-raised'/>
                    </Col>
                    <Col>
                        <img src={Img1} style={{marginBottom:'10%'}} className='img-raised'/>
                    </Col>
                    <Col>
                        <img src={Img1} style={{marginBottom:'10%'}} className='img-raised'/>
                    </Col>
                </Row>
                <Row>
                    <h3 className='text-center'>Detailed View</h3>
                    <p className='text-justify'>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in voluptate 
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum.
                    </p>
                    <p className='text-justify'>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in voluptate 
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum.
                    </p>
                    <img src={Img1} style={{marginBottom:'5%',width:'50%',marginLeft:'25%'}} className='img-raised'/>
                    <p className='text-justify'>
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

export default TourPage2
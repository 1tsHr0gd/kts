import DefaultFooter from 'components/Footers/DefaultFooter'
import LandingPageHeader from 'components/Headers/LandingPageHeader'
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar'
import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import KTSFooter from 'views/index-sections/KTSFooter'
import AbtUs from './assets/img/bg5.jpg'

function AboutUs() {
    return (
        <div>
            <ExamplesNavbar/>
            <LandingPageHeader/>
            <div style={{marginRight:'5%', marginLeft:'5%'}} id='content'>
                <h2 className='title'>About us</h2>
                <p>
                    It is with great pleasure that we introduce our company and services to you. New Kenya Travel & Tours
                    Safaris Ltd is a privately owned safari company founded 27 years ago, firstly in car hire business (Patel
                    Tours & Safaris) and now fully as in-bound Tour/Safari Operator in Kenya & the entire East Africa.
                </p>
                <Row>
                    <Col md='8' sm='8' lg='8'>
                        <h3>Safari Fleet</h3>
                        <p>
                        The company manages fleets of safari vehicles ranging from mini-buses for road safaris & 4x4 Land
                        Cruisers, coaches, 20-seater Rosa for transfers, to saloon cars for car hire. Our safari fleet vehicles are linked
                        24hrs a day by HF radio/ telephones, fully insured, with elite driver guides, trained and skilled staff with
                        special attention to detail. Importantly, our fleet vehicles are meticulously maintained in our own workshop
                        to ensure your comfort while on safari.
                        </p>
                        <h3>Offices and Location</h3>
                        <p>New Kenya Travels & Tours Safari Ltd has its office in Mombasa, located in Nyali.</p>
                    </Col>
                    <Col md='4' sm='4' lg='4'>
                        <img src={AbtUs}/>
                    </Col>
                </Row>
                <h3>Innovative Safari</h3>
                <p>
                    With the virtue of competition in the Industry, New Kenya Travel & Tours Safari Ltd has collectively
                    innovated its safari services. We have introduced new and exciting safari itinerary options to attract more
                    visitors to Kenya by giving the best and sophisticated quality of services. These include taking visitors to the
                    best hotels, camps and lodges in Kenya at a reasonable rate. Having trained our tour drivers on how to
                    handle guests, New Kenya Travel & Tours Safari Ltd offers all it requires during game viewing to ensure
                    that the clients are satisfied with the safari, from game viewing to nature and the overall satisfaction of good
                    services rendered.
                </p>

                <h3>Good Reputation</h3>
                <p>
                Take it from New Kenya Travels & Tours Safari Ltd, that if you want to see Kenya and its wildlife; you will
                have it abundance. We hope you will visit with us.
                <br/>
                <br/>
                Affiliated members, K.A.T.O (Kenya Association of Tour Operators) & K.T.B (Kenya Tourist Board).
                Working under guidance of the Ministry of Tourism Kenya & Kenya Wildlife Service.
                </p>
                <h2 className='title'>Contact Details</h2>
                <Row>
                    <Col md='6' sm='6' lg='6'>
                        <p>
                            Harsh Patel
                            <br/>
                            Managing Director
                            <br/>
                            Mobile: +254 722414907 | +254 734414907
                            <br/>
                            Email: ptskenya@gmail.com / info@kenyatoursafari.com
                        </p> 
                    </Col>
                    <Col sm='6' md='6' lg='6'>
                        <p>
                            Khushali Patel
                            <br/>
                            Tour Manager
                            <br/>
                            Mobile: +254 786335342 | +44 7568607569
                            <br/>
                            Email: ptskenya@gmail.com / info@kenyatoursafari.com
                        </p>
                    </Col>
                </Row>
                <div className='send-button text-center'>
                    <Button
                        color='success'
                        href="#pablo"
                        style={{margin:'10px'}}
                    >
                        Booking Enquiry
                    </Button>
                    <Button
                        color='success'
                        href='#pablo'
                        style={{margin:'10px'}}
                    >
                        We Love Feedback!
                    </Button>
                </div>

            </div>
            <KTSFooter/>
            <DefaultFooter/>
        </div>
    )
}

export default AboutUs;
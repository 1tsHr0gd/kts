import React from 'react'
import { Col, Row } from 'reactstrap'

function Testimonials() {
    return (
        <div>
            <h2 className='title text-center'>Testimonials</h2>
            <Row style={{paddingLeft:'5%', paddingRight:'5%'}}>
                <Col md='4'>
                    <div className="" >
                    <blockquote>
                        <p className="blockquote blockquote-info" style={{borderColor:'#18ce0f',color:'#888888', borderRadius:'5px'}}>
                        "I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture. I am the nucleus. I think that’s a
                        responsibility that I have, to push possibilities, to show
                        people, this is the level that things could be at."{" "}
                        <br></br>
                        <br></br>
                        <small style={{color:'#00000080', fontWeight:'bold'}}>- Nelson Mandera</small>
                        </p>
                    </blockquote>
                    </div>
                </Col>
                <Col md='4'>
                    <div className="" >
                    <blockquote>
                        <p className="blockquote blockquote-info" style={{borderColor:'#18ce0f',color:'#888888', borderRadius:'5px'}}>
                        "I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture. I am the nucleus. I think that’s a
                        responsibility that I have, to push possibilities, to show
                        people, this is the level that things could be at."{" "}
                        <br></br>
                        <br></br>
                        <small style={{color:'#00000080', fontWeight:'bold'}}>- James McCarthy</small>
                        </p>
                    </blockquote>
                    </div>
                </Col>
                <Col md='4'>
                    <div className="" >
                    <blockquote>
                        <p className="blockquote blockquote-info" style={{borderColor:'#18ce0f',color:'#888888', borderRadius:'5px'}}>
                        "I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture. I am the nucleus. I think that’s a
                        responsibility that I have, to push possibilities, to show
                        people, this is the level that things could be at."{" "}
                        <br></br>
                        <br></br>
                        <small style={{color:'#00000080', fontWeight:'bold'}}>- Beff Jezos</small>
                        </p>
                    </blockquote>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Testimonials
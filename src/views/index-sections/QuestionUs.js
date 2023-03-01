import emailjs from '@emailjs/browser';
import React, { useState } from 'react'
import { Button, Col, Container, Form, FormFeedback, FormText, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap'

export default function QuestionUs() {
    const [firstFocus, setFirstFocus] = React.useState(false);
    const [lastFocus, setLastFocus] = React.useState(false);
    const [isValid,setIsValid] = useState(false)

    const [data,setData] = useState({
        fName:"",
        email:"",
        msg:""
    })

    const handleChange = (event) => {
        const { value, name } = event.target;
        setData({
        ...data,
        [name]: value,
        });
        var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (name === 'email'){
            if( event.target.value.length > 0 && regEx.test(event.target.value) === false){
                console.log("Invalid input")
                setIsValid(false)
            }
            else{
                console.log("Valid")
                setIsValid(true)
            }
        }
    };

    const submit= () => {
        console.log('First Name:',data.fName);
        console.log("Email :", data.email);
        console.log("Message :",data.msg);
        if (isValid === true){
            emailjs.send('service_yuu8v7c','template_2eo1ngm',data,'68Co_TPSICPT5pEAm')
            .then((res)=>{
                console.log('SUCCESS!', res.status, res.text)
            })
            .catch((err)=>{
                console.log('FAILED...', err)
            })
        }
        else{
            alert("Invalid Input")
        }
        
    }

    return (
        <>
        <div className='' style={{backgroundColor:'#fffffff', width:'100%', padding:'2%'}}>
            <Container>
                <Row>
                    <Col md='8' sm='10' lg='6' style={{margin:'0 auto'}}>
                        <h2 className='text-center title'>Have a Question?</h2>
                        <InputGroup className={
                            "input-lg" + (firstFocus ? " input-group-focus" : "")
                        }>
                            <InputGroupAddon addonType='prepend'>
                                <InputGroupText>
                                    <i className='now-ui-icons users_circle-08'/>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                    placeholder="First Name..."
                                    type="text"
                                    onFocus={() => setFirstFocus(true)}
                                    onBlur={() => setFirstFocus(false)}
                                    value={data.fName}
                                    name="fName"
                                    onChange={(e)=> handleChange(e)}
                            ></Input>
                        </InputGroup>
                        <InputGroup className={
                            "input-lg" + (lastFocus ? " input-group-focus" : "")
                        }>
                            <InputGroupAddon addonType='prepend'>
                                <InputGroupText>
                                    <i className='
                                    now-ui-icons ui-1_email-85'/>
                                </InputGroupText>
                            </InputGroupAddon>
                            <Input
                                placeholder="Email..."
                                type='email'
                                onFocus={()=>setLastFocus(true)}
                                onBlur={()=>setLastFocus(false)}
                                value={data.email}
                                name="email"
                                onChange={(e)=>handleChange(e)}
                            >
                            </Input>
                        </InputGroup>
                        {isValid === false && lastFocus===true && (
                        <div className='tex-center'>
                            <p style={{color:'red', fontSize:'10px'}}>Enter valid email...</p>
                        </div>
                        )}
                        <div className="textarea-container">
                            <Input
                                cols="80"
                                name="msg"
                                placeholder="Type a message..."
                                rows="4"
                                type="textarea"
                                value={data.msg}
                                onChange={(e)=>handleChange(e)}
                            ></Input>
                        </div>
                        <div className="send-button">
                            <Button
                                block
                                className="btn-round"
                                color="success"
                                href="#pablo"
                                onClick={()=>submit()}
                                size="lg"
                            >
                                Send Message
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
        </>
        
    )
}

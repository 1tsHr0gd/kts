import LandingPageHeader from 'components/Headers/LandingPageHeader'
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar'
import React, { useState } from 'react'
import { Button, Card, Col, FormGroup, Input, Label, Row } from 'reactstrap';
import Datetime from "react-datetime";
import KTSFooter from 'views/index-sections/KTSFooter';
import DefaultFooter from 'components/Footers/DefaultFooter';
import emailjs from '@emailjs/browser'

function Enquiries() {
    const [enquiryData, setEnquiryData] = useState({
        fName:'',
        email:'',
        tel:'',
        message:'',
        countryDeptr:'',
        airport:'',
        fromDate: JSON.stringify(new Date()).split('T')[0].split('"')[1],
        toDate: JSON.stringify(new Date()).split('T')[0].split('"')[1],
        flexibility:'',
    })
    const [focus,setFocus] = useState(false)
    const [isValid,setIsValid] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [success, setSuccess] = useState()

    const handleChange = (e) => {
        setEnquiryData({
            ...enquiryData,
            [e.target.name]:e.target.value,
        })
        var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (e.target.name === 'email' && e.target.value.length > 0  && regEx.test(e.target.value)===false){
            setIsValid(false)
        }
        else{
            setIsValid(true)
            setEnquiryData({
                ...enquiryData,
                [e.target.name]:e.target.value,
            })
        }
        
    }

    const trialSubmit = () => {
        console.log(enquiryData);
    }

    const submitForm = () => {
        if (isValid === true){
            setSubmitting(true)
            emailjs.send('service_yuu8v7c','template_bwjiesr',{...enquiryData,adultCount,childCount},'68Co_TPSICPT5pEAm')
                .then((res)=>{
                    console.log("SUCCESS", res.status, res.text)
                    setSubmitting(false)
                    setSuccess(true)
                })
                .catch((err)=>{
                    console.log("FAILED...", err)
                    setSuccess(false)
                })
        }
        else{
            setSuccess(false)    
        }
        
        console.log(enquiryData)
    }

    const [adultCount, setAdultCount] = useState(0)
    const addAdult = () => {
        setAdultCount(adultCount + 1);
    }

    const remAdult = () => {
        if(adultCount > 0){
            setAdultCount(adultCount - 1)
        }
        else{
            return;
        }
    }

    const [childCount, setChildCount] = useState(0);
    const addChild = () => {
        setChildCount(childCount + 1)
    }
    const remChild = () => {
        if(childCount > 0){
            setChildCount(childCount - 1)
        }
        else{
            return;
        }
    }

    return (
        <div>
            <ExamplesNavbar/>
            <LandingPageHeader/>
            <div style={{marginLeft:'5%', marginRight:'5%', marginTop:'10%'}} id='content'>
                <Card>
                <h2 className='title text-center'>Enquiry Form</h2>
                <div className='form-group' style={{marginLeft:'5%', marginRight:'5%'}}>
                    <h3 className='title'>Tell us About Yourself</h3>
                    <Row>
                        <Col sm='6' md='6' lg='6'>
                            <form>
                                <label>Your Name</label>
                                <br/>
                                <input className='form-control' name="fName" value={enquiryData.fName} onChange={(e)=>handleChange(e)}/>
                                <br/>
                                <br/>
                                <label>Email address</label>
                                <br/>
                                <input className='form-control' type='email' name='email' value={enquiryData.email} onChange={(e)=>handleChange(e)} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}/>     
                                {isValid === false && focus===true && (
                                    <div className='tex-center'>
                                        <p style={{color:'red', fontSize:'10px'}}>Enter valid email...</p>
                                    </div>
                                )}
                                <br/>
                                <br/>
                                <label>Telephone (Without Country Code)</label>
                                <br/>
                                <input className='form-control' name='tel' value={enquiryData.tel} onChange={(e)=>handleChange(e)}/>
                            </form>
                        </Col>
                        <Col sm='6' md='6' lg='6'>
                            <form>
                                <label>Your Message...</label>
                                <input className='form-control' style={{width:'100%', height:'200px'}} name='message' value={enquiryData.message} onChange={(e)=>handleChange(e)}/>
                            </form>
                        </Col>
                    </Row>
                    <h3 className='title'>Your travel plans...</h3>
                    <Row>
                        <Col>
                            <form>
                                <label>Country of Departure</label>
                                <br/>
                                <input className='form-control' name='countryDeptr' value={enquiryData.countryDeptr} onChange={(e)=>handleChange(e)}/>
                                <br/>
                                <br/>
                                <label>Number of Adults</label>
                                <br/>
                                <div style={{display:'inline-flex', alignItems:'center'}}>
                                    <div>
                                        <a onClick={remAdult}>
                                            <i className='now-ui-icons ui-1_simple-delete'/>
                                        </a>    
                                    </div>
                                    <div>
                                        <input className='form-control' placeholder={adultCount} style={{width:'60px', textAlign:'center', marginLeft:'5px', marginRight:'5px'}}/>
                                    </div>
                                    <div>
                                        <a onClick={addAdult}>
                                            <i className='now-ui-icons ui-1_simple-add'/>
                                        </a>
                                    </div>
                                </div>

                                <br/>
                                <br/>
                                <label>Number of Children</label>
                                
                                <br/>
                                {/* A section with a plus and minus button which increments/decrements based on click */}
                                <div style={{display:'inline-flex', alignItems:'center'}}>
                                    <div>
                                        <a onClick={remChild}>
                                            <i className='now-ui-icons ui-1_simple-delete'/>
                                        </a>    
                                    </div>
                                    <div>
                                        <input className='form-control' placeholder={childCount} style={{width:'60px', textAlign:'center', marginLeft:'5px', marginRight:'5px'}}/>
                                    </div>
                                    <div>
                                        <a onClick={addChild}>
                                            <i className='now-ui-icons ui-1_simple-add'/>
                                        </a>
                                    </div>
                                </div>
                                <br/>
                                <br/>
                                <label>Airport of Arrival</label>
                                <select class="form-control form-group" id="exampleFormControlSelect1" name='airport' value={enquiryData.airport} onChange={(e)=>handleChange(e)}>
                                    <option>Select...</option>
                                    <option>Jomo Kenyatta International Airport (NBO)</option>
                                    <option>Moi International Airport (MBA)</option>
                                    <option>Wilson Airport (WIL)</option>
                                    <option>Kisumu International Airport (KIS)</option>
                                    <option>Malindi International Airport (MYD)</option>
                                </select>
                            </form>
                        </Col>
                        <Col>
                            <h5>Pick your travel dates</h5>
                            <Row>
                                <Col>
                                    <label>From</label>
                                    <div className="datepicker-container">
                                        <FormGroup>
                                        <Datetime
                                            type='date'
                                            timeFormat={false}
                                            placeholder='Tour Departure'
                                            value={enquiryData.fromDate}
                                            onChange={(value)=>handleChange({target:{name:'fromDate',value}})}                                            
                                        />
                                        </FormGroup>
                                    </div>
                                </Col>
                                <Col>
                                    <label>To</label>
                                    <div className="datepicker-container">
                                        <FormGroup>
                                        <Datetime
                                            type='date'                        
                                            placeholder= "Tour Return"
                                            timeFormat={false}
                                            dateFormat='DD-MM-YYYY'
                                            value={enquiryData.toDate}
                                            onChange={(value)=>handleChange({target:{name:'toDate',value}})}
                                        />
                                        </FormGroup>
                                    </div>
                                </Col>
                            </Row>
                            <br/>
                            <br/>
                            <label>How flexible are your dates?</label>
                            <Row>
                                <FormGroup check className="form-check-radio" style={{marginLeft:'2%'}} name="flexibility" value={enquiryData.flexibility}>
                                    <Label check>
                                    <Input
                                        value="flexible"
                                        id="dateRadio1"
                                        name="flexibility"
                                        type="radio"
                                        onChange={(e)=>handleChange(e)}
                                    ></Input>
                                    <span className="form-check-sign"></span>
                                    Flexible
                                    </Label>
                                </FormGroup>
                                
                                <FormGroup check className="form-check-radio" style={{marginLeft:'2%'}}>
                                    <Label check>
                                    <Input
                                        value="not flexible"
                                        id="dateRadio2"
                                        name="flexibility"
                                        type="radio"
                                        onChange={(e)=>handleChange(e)}
                                    ></Input>
                                    <span className="form-check-sign"></span>
                                    Tight Schedule
                                    </Label>
                                </FormGroup>
                            </Row>

                        </Col>
                    </Row>
                </div>
                <div className='text-center'>
                    <Button
                        color='success'
                        href='#pablo'
                        style={{margin:"15px", height:'40px', width:'auto'}}
                        onClick={()=>submitForm()}
                    >
                        {submitting === true && (
                            <>
                            <div className='text-center' style={{display:'flex', color:'white'}}>
                                <p style={{color:'white', fontWeight:'bold'}}>Submitting</p>
                                <i className='now-ui-icons loader_refresh mt-1' style={{marginLeft:'10px'}}/>
                            </div>
                            </>
                        )
                        }
                        {submitting === false && (
                            <p style={{color:'white', fontWeight:'bold'}}>Submit</p>
                        )}
                    </Button>
                    <Button onClick={()=>trialSubmit()}>
                        Submit
                    </Button>
                </div>
                </Card>
            </div>
            {success && (
                <div class="alert alert-success" role="alert">
                    <div class="container">
                    <div class="alert-icon">
                        <i class="now-ui-icons ui-2_like"></i>
                    </div>
                    <strong>Well done!</strong> You successfully read this important alert message.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">
                        <i class="now-ui-icons ui-1_simple-remove"></i>
                        </span>
                    </button>
                    </div>
                </div>
            )}
            {!success && (
                <div class="alert alert-success" role="alert">
                    <div class="container">
                    <div class="alert-icon">
                        <i class="now-ui-icons ui-2_like"></i>
                    </div>
                    <strong>Oops!</strong> You failed this important alert message.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">
                        <i class="now-ui-icons ui-1_simple-remove"></i>
                        </span>
                    </button>
                    </div>
                </div>
            )}
            <KTSFooter/>
            <DefaultFooter/>
        </div>
    )
}

export default Enquiries
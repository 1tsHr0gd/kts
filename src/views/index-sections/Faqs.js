import React from 'react'
import { Button, Card, CardBody, CardHeader, Collapse } from 'reactstrap'

function Faqs() {

    const [collapses, setCollapses] = React.useState([]);
    const changeCollapse = collapse => {
        if (collapses.includes(collapse)) {
        setCollapses(collapses.filter(prop => prop !== collapse));
        console.log("Close",collapses)
        } else {
        setCollapses([...collapses, collapse]);
        console.log("Open:",collapses)
        }
    };

    return (
        <>
        <div style={{marginLeft:'5%', marginRight:'5%'}} id="accordion">
            <h2 className='title text-center'>FAQs</h2>
            <Card className='no-transition shadow-none' style={{height:"40px"}}>
                <CardHeader className="card-collapse border-bottom position-relative" id="headingOne" role="tab" style={{margin:'10px'}}>
                <h5 className="mb-0 panel-title">
                    
                    <a
                    aria-expanded={collapses.includes(1)}
                    className="collapsed stretched-link"
                    data-parent="#accordion"
                    href="#pablo"
                    id="collapseOne"
                    onClick={e => {
                        e.preventDefault();
                        changeCollapse(1);
                    }}
                    style={{textDecoration:'none'}}
                    >
                    General Tour Info{" "}
                    <i className="now-ui-icons arrows-1_minimal-down pull-right" />
                    </a>
                </h5>
                </CardHeader>
                <Collapse isOpen={collapses.includes(1)}>
                <CardBody>
                    <h5>Passports and Visa</h5>
                    All travellers arriving in Kenya are required to have permanent passports, valid for at least six
                    months from the date of entry into Kenya and contain at least three blank pages.
                    You need a visa to enter Kenya. Visas may be purchased on arrival at the airport in Kenya, or
                    beforehand. Travellers are encouraged to purchase in advance which will save time on arrival. You
                    can apply for single entry and transit visas on the evisas website (http://evisa.go.ke/evisa.html). You
                    can apply for these and other types of visa at the Kenya High Commission in your country.
                    Travellers visiting Kenya, and other African Countries, will need to purchase a visa for each country.
                    
                </CardBody>
                </Collapse>
                <CardHeader className="card-collapse border-bottom position-relative" id="headingTwo" role="tab" style={{margin:'10px'}}>
                    <h5 className="mb-0 panel-title">
                        
                        <a
                        aria-controls="collapseTwo"
                        aria-expanded={collapses.includes(2)}
                        className="collapsed stretched-link"
                        data-parent="#accordion"
                        href="#pablo"
                        id="collapseTwo"
                        onClick={e => {
                            e.preventDefault();
                            changeCollapse(2);
                        }}
                        style={{textDecoration:'none'}}
                        >
                        What to carry during your Safari{" "}
                        <i className="now-ui-icons arrows-1_minimal-down pull-right" />
                        </a>
                    </h5>
                </CardHeader>
                <Collapse isOpen={collapses.includes(2)}>
                    <CardBody>
                        Each tour member is allowed one soft sided bag, and one day pack (cameras, sun lotion, etc) while
                        on safari. Should internal flights be part of the itinerary, bag weights are strictly enforced. The bag
                        should not exceed 15kgs.
                        <br/>
                        <br/>
                        <b>Please note that plastic bags are banned in Kenya.</b>Travellers coming into Kenya, as of 27th August
                        2017, are requested to avoid bringing plastic bags into the country and being in possession of a
                        plastic bag is an offense and offenders could be penalized. Visitors are advised to avoid any plastic
                        bags in their suitcases or hand luggage before flying into Kenya. Visitors are also advised to leave
                        duty-free plastic shop bags at the airport. Please check hand luggage before disembarking, and any
                        plastic bags should be left in the plane.
                        <br/>
                        <br/>
                        The Kenyan Law also bans the use of single-use plastics in the country, such as plastic water bottles
                        and straws, in all national parks, forests, beaches and conservation areas.
                    </CardBody>
                </Collapse>
                <CardHeader className="card-collapse border-bottom position-relative" id="headingThree" role="tab" style={{margin:'10px'}}>
                    <h5 className="mb-0 panel-title">
                        
                        <a
                        aria-controls="collapseThree"
                        aria-expanded={collapses.includes(3)}
                        className="collapsed stretched-link"
                        data-parent="#accordion"
                        href="#pablo"
                        id="collapseThree"
                        onClick={e => {
                            e.preventDefault();
                            changeCollapse(3);
                        }}
                        style={{textDecoration:'none'}}
                        >
                        Climate and Weather{" "}
                        <i className="now-ui-icons arrows-1_minimal-down pull-right" />
                        </a>
                    </h5>
                </CardHeader>
                <Collapse isOpen={collapses.includes(3)}>
                    <CardBody>
                        It is important that visitors understand the climates of the places they will visit.
                        Nairobi (1661m) and Arusha (1403m) are both at high elevations and cooler than expected by
                        visitors. The coastal region of Kenya and Tanzania, including the Zanzibar islands have much warmer
                        climates
                        <br/>
                        <br/>
                        <h6>The Dry Seasons</h6>
                        From January to March and June to October, are the dry seasons. January is the hottest
                        months of the year. For safaris, this is a good time to spot game. This is because the game is
                        concentrated around the available waterholes and remaining rivers which makes it easier to
                        find. The dry bush and vegetation mean that more wildlife can be seen.
                        <br/>
                        <br/>
                        From July onwards begins the Great Migration in Kenya’s Masai Mara plains, another most
                        popular time for visitors.
                        <br/>
                        <br/>
                        <h6>The Rainy Season</h6>
                        Rain can be expected any time of the year. Long rains begin in April and last through till the
                        end of May. For some it may not be a great time of the year to travel, however, the rainy
                        season turns the vegetation into a beautiful green landscape, which is a magnificent
                        backdrop to photographs. Additionally, visitor numbers are noticeably less, hence safari can
                        be enjoyed with less of the crowds.
                        <br/>
                        <br/>
                        Short rainfall is common in November and lasts for approximately 4 weeks.
                        
                    </CardBody>
                </Collapse>
                <CardHeader className="card-collapse border-bottom position-relative" id="headingFour" role="tab" style={{margin:'10px'}}>
                <h5 className="mb-0 panel-title">
                    
                    <a
                    aria-expanded={collapses.includes(4)}
                    className="collapsed stretched-link"
                    data-parent="#accordion"
                    href="#pablo"
                    id="collapseOne"
                    onClick={e => {
                        e.preventDefault();
                        changeCollapse(4);
                    }}
                    style={{textDecoration:'none'}}
                    >
                    Currency{" "}
                    <i className="now-ui-icons arrows-1_minimal-down pull-right" />
                    </a>
                </h5>
                </CardHeader>
                <Collapse isOpen={collapses.includes(4)}>
                <CardBody>
                The monetary unit is <b>Kenyan Shilling.</b>
                <br/>
                <br/>
                All the major credit cards are widely accepted in city hotels, some city restaurants and shops, but
                this may not be the case in the rural areas or whilst on safari. A commission charge is normally
                added to any transactions using a credit card.
                <br/>
                <br/>
                It is recommended that you obtain the local currency you may need on safari in advance by drawing
                cash from an ATM at a bank or at the airport upon arrival. Please note that the rate of exchange
                varies between banks, foreign exchange bureaus and hotels.
                    
                </CardBody>
                </Collapse>
                <CardHeader className="card-collapse border-bottom position-relative" id="headingFive" role="tab" style={{margin:'10px'}}>
                <h5 className="mb-0 panel-title">
                    
                    <a
                    aria-expanded={collapses.includes(5)}
                    className="collapsed stretched-link"
                    data-parent="#accordion"
                    href="#pablo"
                    id="collapseOne"
                    onClick={e => {
                        e.preventDefault();
                        changeCollapse(5);
                    }}
                    style={{textDecoration:'none'}}
                    >
                    Health Requirments{" "}
                    <i className="now-ui-icons arrows-1_minimal-down pull-right" />
                    </a>
                </h5>
                </CardHeader>
                <Collapse isOpen={collapses.includes(5)}>
                <CardBody>
                Health requirements vary from country to country in Africa. It is highly recommended to
                speak to your local doctor for up-to-date information and advice before travelling. At least 8
                weeks before your trip, check the latest country-specific health advice. Each country-specific
                page has information on vaccine recommendations, any current health risks or outbreaks,
                and factsheets with information on staying healthy abroad.
                <br/>
                <br/>
                <h6>Coronavirus</h6>
                The Kenyan authorities have introduced new measures in relation to coronavirus
                (COVID-19). Please ensure you are aware and up to date with all the information.
                Our company, tourism and hospitality industry in Kenya are regularly keeping up to
                date with the government announcements and following the measures to keep all
                visitors safe. Measures have been taken to reduce the risk of spreading the virus,
                from cleaning vehicles thoroughly to hotels raising cleaning standards to reduce the
                risk, as well as ensuring food is cooked and served safely, as well as maintaining
                social distancin
                </CardBody>
                </Collapse>
            </Card>
            
        </div>
        </>
    )
}

export default Faqs
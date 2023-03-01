import DefaultFooter from 'components/Footers/DefaultFooter'
import LandingPageHeader from 'components/Headers/LandingPageHeader'
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar'
import React from 'react'
import { Col, Row } from 'reactstrap'
import KTSFooter from 'views/index-sections/KTSFooter'
import Img1 from '../assets/img/bg1.jpg'

function Kenya() {
    return (
        <div>
            <ExamplesNavbar/>
            <LandingPageHeader/>
            <div id='content'>
                <h2 className='title text-center'>Welcome to Kenya!</h2>
                <Row style={{marginLeft:'10%', marginRight:'10%'}} className='text-justify'>
                    <Col sm='8' md='8' lg='8'>
                        <p>
                            Kenya is the heart of East Africa, a country that possesses the world’s best beaches,
                            epic wilderness national parks and reserves and a range of amazing African Tribal
                            Traditions. Kenya is often seen as the best and foremost destination for an African
                            safari, before proceeding towards safaris in Tanzania, Uganda and Southern Africa.
                            Kenya’s tourism has developed drastically, with vast improvements in the country’s
                            intricate infrastructure, well-maintained national parks with a range of
                            accommodation available to all types of tourist and preferred safari types, suiting
                            every taste, budget and expectation.
                        </p>
                        <br/>
                        
                    </Col>
                    <Col style={{alignItems:'center'}} md='4' sm='4' lg='4'>
                        <img src={Img1} style={{marginBottom:'10%'}} className='img-raised'/>
                    </Col>
                        <p>
                            <b>Please note:</b> The Kenyan Law bans the use of single-use plastics in the country, such
                            as plastic water bottles and straws, in all national parks, forests, beaches and
                            conservation areas.
                        </p>
                </Row>
                
                <Row style={{marginLeft:'10%', marginRight:'10%', marginTop:'5%'}} className='text-justify'>
                    <Col style={{alignItems:'center', marginTop:'10%'}} md='4' sm='4' lg='4'>
                        <img src={Img1} style={{marginBottom:'10%'}} className='img-raised'/>
                        <img src={Img1} style={{marginBottom:'10%'}} className='img-raised'/>
                    </Col>
                    <Col>
                        <h3 className='title'>Where to be in Kenya</h3>
                        <h4>Masai Mara National Reserve</h4>
                        <p>
                            One of Kenya’s oldest and beloved safari destinations, a reserve stretching nearly
                            1600 sq km, where the wildebeest migration makes its U-turn every year, beginning
                            in July. Mara consists of undulating hills and vast grasslands that contains some of
                            the most varied wildlife in Africa. Guests have access to Masai Mara, all year round,
                            where there is plenty of wildlife for game viewing.
                        </p>
                        <br/>
                        <p>
                            Game concentration is more common between July and October, when the migrating
                            herds flow across the Mara River from Western Serengeti (Tanzania). Vast plains will
                            be populated with a range of animals from wildebeest, gazelle, zebra, Topi and
                            hartebeest, as well as elephant, giraffes and buffaloes. Lions, hyena and cheetah, the
                            predators in the pride, follow all of these animals as their prey.
                        </p>
                        <br/>
                    </Col>
                        <p>
                            During this migration, many animals do not survive due to the risky river crossings,
                            where some of the animals are feasted on by the world’s largest crocodiles. Other
                            highlights of Masai Mara including walking in community areas, the Masai Village,
                            the early morning balloon safaris, bush breakfast, and the outstanding hospitality
                            services offered in the range of accommodations in the Mara.
                        </p>
                </Row>
                <Row style={{marginLeft:'10%', marginRight:'10%'}} className='text-justify'>
                    <h4 className='text-center'>Lake Nakuru National Park</h4>
                    <p>
                        Lake Nakuru is one the Rift Valley soda lakes at an elevation of 1,754m above sea
                        level. It lies south of Nakuru, in the rift valley of Kenya and is protected by Lake
                        Nakuru National Park. The lake attracts a vast quantity of flamingos that lines the
                        shore and brings out an enormous amount of beauty to the lake. Flamingo and other
                        water birds, approximately 450 species in total can be seen in the Park, as well as 56
                        different species including white rhinos and waterbucks.
                    </p>
                    <br/>
                    <p>
                        Lake Nakuru National Park is ideal for bird watching, hiking, picnic and game drives.
                        Visitors can enjoy the wide ecological diversity and varied habitats that range from
                        Lake Nakuru itself to the surrounding beauty of the lake.
                    </p>
                </Row>
                <Row style={{marginLeft:'10%', marginRight:'10%', marginTop:'5%'}}>
                    
                    <Col className='text-justify'>
                        <h4>Lake Naivasha</h4>
                        <p>
                            Lake Naivasha is a freshwater lake in Kenya, park of the Great Rift Valley. The lake is
                            almost 13KM across, but its waters are shallow. The lake area varies greatly according
                            to rainfall. Nai’posha, meaning “rough water” came about because the afternoon
                            wind and storms can cause the Lake to become suddenly rough and produce high
                            waves.
                        </p>
                        <br/>
                        <p>
                            The lake is surrounded by rich natural beauty. Visitors can take a boat trip, as well as
                            a gentle walk to the crescent island. The lake attracts exotic birds and wetland flora,
                            while its fresh water draws grazers including zebras, giraffes and buffalo.  Naivasha is 
                            known as a world class birding destination, in addition to Lake Nakuru!
                        </p>
                        <br/>
                    </Col>
                    <Col style={{alignItems:'center'}} md='4' sm='4' lg='4'>
                        <img src={Img1} style={{marginBottom:'10%'}} className='img-raised'/>
                        <img src={Img1} style={{marginBottom:'10%'}} className='img-raised'/>
                    </Col>
                </Row>
                <Row style={{marginLeft:'10%', marginRight:'10%'}} className='text-justify'>
                    <h4 className='text-center'>Amboseli National Park</h4>
                    <p>
                    Crowned by Mount Kilimanjaro, Africa’s highest peak, the Amboseli National Parks is
                    one of Kenya’s most popular parks. It is in southern Kenya and can be visited all year
                    round. Its known for its large elephant herds, also known as “Land of Giants”, and the
                    view of immense Mount Kilimanjaro, across the border in Tanzania. The name
                    “Amboseli” came from a Masai word meaning “salty dust”, and is one of the best
                    places in Africa to view large herds of elephants closely. A range of wildlife, including
                    giraffes, zebras, lion, wildebeest, cheetahs and hundreds of bird species can be
                    found.
                    </p>
                    <br/>
                </Row>
                <Row style={{marginLeft:'10%', marginRight:'10%'}} className='text-justify'>
                    <h4 className='text-center'>Samburu National Reserve</h4>
                    <p>
                        Samburu National Reserve is situated at the south-eastern corner of Samburu District
                        in the Rift Valley Province of Kenya. It is bordered to the south, on the banks of
                        Ewaso Ng’iro river in Kenya. The reserve is rich in wildlife with abundance of northern
                        specialist species such as the Grevy’s Zebra, Somali Ostrich, reticulated giraffe,
                        gerenuk and the beisa oryx (known as Samburu’s Special Five). Elephants, lions,
                        leopards, Wild dog sightings, as well as over 450 birdlife species are also found in the
                        reserve.
                    </p>
                    <br/>
                </Row>
                <Row style={{marginLeft:'10%', marginRight:'10%', marginTop:'5%'}} className='text-justify'>
                    <Col style={{alignItems:'center'}} md='4' sm='4' lg='4'>
                        <img src={Img1} style={{marginBottom:'10%'}} className='img-raised'/>
                        <img src={Img1} style={{marginBottom:'10%'}} className='img-raised'/>
                    </Col>
                    <Col>
                        <h4>Tsavo National Parks (East & West)</h4>
                        <p>
                            Tsavo national park is split into two parks by the Mombasa Nairobi Highway. It is
                            located near the town of Voi in the Taita-Taveta County of the former Coast Province.
                            Tsavo is nearly 22,000KM Sq, being the largest national park in Kenya. There are
                            plenty of places to stay in the two parks, which range greatly in terms of taste and
                            budget, and most of them have a water hole close to the property making game
                            viewing easier.
                        </p>
                        <br/>
                        <p>
                            Tsavo East is generally flat, with dry plains. Tsavo west is more mountainous and
                            wetter. Its known for its large mammals and also other smaller animals that can be
                            spotted in the park. Common spots include elephants, Ostrich, gazelle, zebras,
                            buffaloes, giraffes and lions.
                        </p>
                        <br/>
                    </Col>
                </Row>
                <Row style={{marginLeft:'10%', marginRight:'10%'}} className='text-justify'>
                    <h4 className='text-center'>Taita Hills Conservancy</h4>
                    <p>
                        Taita Hills Conservancy creates a game corridor to Tsavo West National Park. The
                        area attracts zebras, waterbucks, impalas, gazelles, buffalo, elephants and many more
                        animals. There is also a variety of bird life. It offers a complete and ultimate place for
                        an active holiday in one of the best African bushes. A range of accommodation is
                        offered for individuals, families, groups and couples.
                    </p>
                    <br/>
                </Row>
                <Row style={{marginLeft:'10%', marginRight:'10%'}} className='text-justify'>
                    <h4 className='text-center'>Mount Kenya National Park</h4>
                    <p>
                        Mount Kenya is Africa’s second highest mountain and Kenya’s highest mountain, and
                        the park was created around the mountain. It extends across the equator and is seen
                        sacred by Kikuyu people (a famous Kenyan tribe), who believe there is a God who
                        lives here. Common wildlife to be seen are while-tailed mongoose, elephants,
                        buffaloes, leopard, suni, water buck, black rhino, bushbuck, tree hyrax, and over 130
                        bird species have been recorded on a wide range of vegetation.
                    </p>
                    <br/>
                </Row>
                <Row style={{marginLeft:'10%', marginRight:'10%'}} className='text-justify'>
                    <h4 className='text-center'>Meru National Park</h4>
                    <p>
                        Meru National Park is a national park located east of Meru, 350KM from Nairobi.
                        Covering an area of 870KM sq, it is one of the best-known national parks in Kenya. A
                        variety of animals can be seen, including Grevy’s zevra, Elephants, Eland, Bush Pig,
                        Waterbucks, Cheetahs, Leopards, Giraffes, Hippopotamus Hartebeest, Pythons,
                        Cobras, Buffaloes and more than 427 species of birds. It is one of the driest parks in
                        the country, even though numerous river and streams cross by it. The area is famous
                        for Elsa, the orphaned lioness reared by Joy and George Adamson and eventually
                        returned to the wilds of Meru
                    </p>
                    <br/>
                </Row>
                <Row style={{marginLeft:'10%', marginRight:'10%', marginTop:'5%'}}>
                    <Row>
                        <Col className='text-justify'>
                            <h4>The Kenyan Coast</h4>
                            <p>
                                The coastline of Kenya extends approximately 535 KM along the Indian Ocean,
                                surrounding the South Eastern part of Kenya. Here, the experience of seaside life and
                                the revitalising sun, as well as a visit in the mainland Coast where the cultures of
                                Coastal communities vibrate can all be encountered! There is a range of
                                development along the coastline, from Lamu Island in the North and ending at
                                Wasini Island in the south, near to the Tanzanian border. There are airstrips near
                                Lamu, at Malindi, and Ukunda Airport in Diani, in south coast. Moi International
                                airport is based in Mombasa, north coast. Tourists arriving in Moi International
                                Airport take a flight to South Coast, Ukunda Airport, or by road with a Crossing on
                                the Likoni Ferry from North to South Coast.
                            </p>
                            <br/>
                            <h5>Malindi & Watamu</h5>
                            <p>
                                The small town of Malindi is surrounded by tropical beaches, offering visitors
                                a range of world class resorts and relaxing holidays.
                                <br/>
                                <br/>
                                Located in the south is the sleepy village of Watamu, fronted by white
                                beaches. At Watamu, a Marine National Park has been established for an ideal
                                day trip for divers and snorkellers.
                                <br/>
                                
                            </p>
                            <br/>
                        </Col>
                        
                        <Col style={{alignItems:'center', marginTop:'8%'}} md='4' sm='4' lg='4'>
                            <img src={Img1} style={{marginBottom:'10%'}} className='img-raised'/>
                            <img src={Img1} style={{marginBottom:'10%'}} className='img-raised'/>
                        </Col>
                    </Row>
                    <p>
                        Excursions to Malindi and Watamu further allow to explore Marafa
                        Depression, at Northwest of Malindi, popularly known as Hell’s Kitchen. Gedi,
                        a deserted trading Swahili town, is hidden deep in the forests.
                    </p>
                    <h5>Lamu Island</h5>
                    <p>
                    Lamu is a peaceful tropical island, but also contains rich mysterious and
                    fascinating history.
                    The island is a beautiful place of endless beaches, coconut and mango
                    plantations, and lateen sailed dhows ply the waters. Real attraction is its old
                    town. The islands resonate with the longing of heart and soul, and can be the
                    ultimate romantic experience of a lifetime!
                    </p>
                    <h5>Kilifi</h5>
                    <p>
                    Kilifi is a resort town, located 65Km from Mombasa and Malindi Airport, is the
                    ideal beach with water sports in the creek.
                    </p>
                    <h5>Mombasa</h5>
                    <p>
                    Here, you can visit the north and south coast. The coastline of North of
                    Mombasa is a world of enthralling history and natural beauty. The beaches of
                    Nyali, Vipingo and Shanzu are home to a range of World Class resorts with its
                    fine cuisine and hospitality services.
                    <br/>
                    <br/>
                    South Coast is known for its clear warm waters, soft white sands and lush
                    greenery, making it the most relaxing holiday. Its perfect to visit and relax
                    before and after an exciting safari. Diani beach is awarded as the best beach
                    destination in Africa, most popularly serving families, honeymooners,
                    backpackers and water-sports enthusiasts. Activities include visiting its Marine
                    National Park, diving with dolphins, kitesurfing, skydiving and nightlife.
                    Splendorous resorts, hotels and budget accommodation makes it an ideal
                    destination for all types of visitors!
                    </p>
                </Row>
                <Row style={{marginLeft:'10%', marginRight:'10%'}} className='text-justify'>
                    <Col style={{alignItems:'center', marginTop:'10%'}} md='4' sm='4' lg='4'>
                        <img src={Img1} style={{marginBottom:'10%'}} className='img-raised'/>
                    </Col>
                    <Col>
                        <h4>Ol Pejeta Conservancy</h4>
                        <p>
                            The Ol Pejeta Conservancy is a not-for-profit wildlife research in Central Kenya’s
                            Laikipa County. It works to conserve wildlife and generate income through wildlife
                            tourism and complementary enterprises for re-investment in conservation and
                            community development. The conservancy is host to the Big Five and has a
                            successful community development programme, providing funding to surrounding
                            communities to aid health, education and infrastructure projects. The conservancy
                            provides natural wildlife experiences, backed up by credible conservation and
                            genuine interactions with wildlife.
                        </p>
                        <br/>
                    </Col>
                </Row>
            </div>
            <KTSFooter/>
            <DefaultFooter/>
        </div>
    )
}

export default Kenya
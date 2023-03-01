import React, { useEffect, useState } from "react";

// reactstrap components
import { Button, Carousel, CarouselIndicators, CarouselItem, Container } from "reactstrap";


const items = [
  {
    src: require("assets/img/bg1.jpg"),
    altText: "Nature, United States",
    caption: "Nature, United States"
  },
  {
    src: require("assets/img/bg3.jpg"),
    altText: "Somewhere Beyond, United States",
    caption: "Somewhere Beyond, United States"
  },
  {
    src: require("assets/img/bg4.jpg"),
    altText: "Yellowstone National Park, United States",
    caption: "Yellowstone National Park, United States"
  }
];

// core components

function LandingPageHeader() {

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const [anchorTarget, setAnchorTarget] = useState();

  useEffect(()=>{
    setAnchorTarget(document.getElementById("content"));
  })

  const contentScroll = (e) => {
    e.preventDefault()
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' })
    console.log('here')
  }

  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small" style={{height:'auto', width:'100%', maxHeight:'600px', minHeight:'auto'}}>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {items.map((item)=>{
            return(
              <CarouselItem
                onExiting={onExiting}
                onExited={onExited}
                key={item.src}
              >
                <div className="" ref={pageHeader}>
                  <img src={item.src} alt={item.altText} style={{width:'100%'}}/>
                </div>
                <div className="content-center">
                  <Container>
                  <h2 className="title">{item.caption}</h2>
                  <h5>This is a description of the image</h5>
                  <div className="text-center">
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                  </div> 
                                   
                  <Button 
                    onClick={contentScroll}
                    href='#content'
                    aria-label="contentDown" 
                    style={{background:'transparent'}} 
                    className='shadow-none'
                  >
                      <i className="now-ui-icons arrows-1_minimal-down" style={{fontSize:'50px'}}/>
                    </Button>
                  </Container>
                </div>
              </CarouselItem>              
            )
          })}
        </Carousel>
      </div>
    </>
  );
}

export default LandingPageHeader;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

import ktsLogo from '../../assets/img/kts_logo_old.png'
import ktsLogoSmall from '../../assets/img/KTS_logo_small.png'

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("primary");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [kt, setKT] = React.useState(false);
  const [tz, setTZ] = React.useState(false);

  const [screenW, setScreenW] = useState();

  const [anchorTarget, setAnchorTarget] = useState();

  const getDimension = () => {
    setScreenW(window.innerWidth)
  }

  const [logoMargin] = useState(window.innerWidth/2)

  useEffect(()=>{
    setAnchorTarget(document.getElementById("contact-us"));
    console.log(logoMargin)
  })

  React.useEffect(()=>{
    window.addEventListener('resize', getDimension);
    return function cleanup(){
      window.removeEventListener('resize',getDimension)
    }
  })

  const dynaLogo = (innerWidth) => {
    if(innerWidth <= 500) return ktsLogoSmall;
    else return ktsLogo;
    
  }

  const contactScroll = (e) => {
    e.preventDefault()
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setCollapseOpen(!collapseOpen)
  }

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("primary");
        setCollapseOpen(false)
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("primary");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>  
      <Navbar className={"fixed-top position-relative" + navbarColor} color={navbarColor} expand="md" style={{backgroundImage:' linear-gradient(#00000085, #00000043', display:'flex'}}>
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="/home"
              id="navbar-brand"
            >
              <img src={dynaLogo(screenW)} style={{maxHeight:'40px'}}/>
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Designed by TechPoint
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
                
              }}
              aria-expanded={collapseOpen}
              type="button"
              style={{marginLeft:logoMargin}}
            >
              {!collapseOpen && (
                <>
                  <span className="button-bar"/>
                  <span className="button-bar"/>
                  <span className="button-bar"/>
                </>
              )}
              {collapseOpen && (
                <i className="now-ui-icons ui-1_simple-remove" style={{color:'white'}}/>
              )}          
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  aria-haspopup={true}
                  caret
                  color="default"
                  href="#"
                  nav
                  onClick={()=>setKT(true)}
                >
                  Kenya Tours
                </DropdownToggle>
                {kt && (
                  <DropdownMenu style={{width:'50%'}}>
                    <DropdownItem
                      href="/tour"
                    >
                      Tour 1
                    </DropdownItem>
                    <DropdownItem
                      href="/tour2"
                    >
                      Tour 2
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Tour 3
                    </DropdownItem>
                  </DropdownMenu>
                )}
                
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  aria-haspopup={true}
                  caret
                  color="default"
                  nav
                  href='#'
                  onClick={()=>setTZ(true)}
                >
                  <p>Tanzania Tours</p>
                </DropdownToggle>
                {tz && (
                  <DropdownMenu style={{width:'50%'}}>
                    <DropdownItem
                      href="/tour"
                    >
                      Tour 1
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                    >
                      Tour 2
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                    >
                      Tour 3
                    </DropdownItem>
                  </DropdownMenu>
                )}
                
              </UncontrolledDropdown>
              <NavItem>
                <NavLink to="/enquiries" tag={Link}>
                  Booking Enquiries
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about-us" tag={Link}>
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact-us" onClick={contactScroll}>
                  Contact Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://twitter.com"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;

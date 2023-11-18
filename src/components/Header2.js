import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import OurServicesDropdown from "./OurServicesDropdown";
import BecomeAPartnerDropdown from "./BecomeAPartnerDropdown";

export default function Header2() {
  const location = useLocation();
  const [isOurServicesOpen, setIsOurServicesOpen] = useState(false);
  const [isBecomeAParterOpen, setIsBecomeAParterOpen] = useState(false);

  // handles closing of the drop downs if any part of the screen is clicked
  const ourServicesRef = useRef(null);
  const becomeAPartnerRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if ((ourServicesRef.current && !ourServicesRef.current.contains(event.target))
      || (becomeAPartnerRef.current && !becomeAPartnerRef.current.contains(event.target))
      ) {
        setIsOurServicesOpen(false);
        setIsBecomeAParterOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header flex flex-row items-center h-8">
      <div className="mr-auto">
        <img alt="wynk logo" src="../images/wynk_logo_2.png" />
      </div>
      <nav className="navbar-web">
        <div
          style={{position: 'relative'}}
          ref={ourServicesRef}
          className={location.pathname === "/our-services" ? "nav-link-active" : "nav-li"} /*to="/our-services"*/
          onClick={() => setIsOurServicesOpen(!isOurServicesOpen)} 
        activeStyle>
          <span>Our Services</span>
          <svg
            className="dropdown"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M12.2527 15.2929L8.66697 11.7071C8.037 11.0771 8.48317 10 9.37408 10H16.5456C17.4365 10 17.8827 11.0771 17.2527 11.7071L13.6669 15.2929C13.2764 15.6834 12.6432 15.6834 12.2527 15.2929Z"
              fill="white"
            />
          </svg>
          {
            //Render the dropdown box conditionally, position it absolutely, with its parent(the nav link) positioned relatively
          }
          {isOurServicesOpen ? (
            <OurServicesDropdown/>
          ) : null}
        </div>
        <div
          style={{position: 'relative'}}
          ref={becomeAPartnerRef}
          className={location.pathname === "/our-services" ? "nav-link-active" : "nav-li"} /*to="/our-services"*/
          onClick={() => setIsBecomeAParterOpen(!isBecomeAParterOpen)} 
        activeStyle>
          <span>Become a partner</span>
          <svg
            className="dropdown"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M12.2527 15.2929L8.66697 11.7071C8.037 11.0771 8.48317 10 9.37408 10H16.5456C17.4365 10 17.8827 11.0771 17.2527 11.7071L13.6669 15.2929C13.2764 15.6834 12.6432 15.6834 12.2527 15.2929Z"
              fill="white"
            />
          </svg>
          {
            //Render the dropdown box conditionally, position it absolutely, with its parent(the nav link) positioned relatively
          }
          {isBecomeAParterOpen ? (
            <BecomeAPartnerDropdown/>
          ) : null}
        </div>
        <NavLink
        className={location.pathname === "/FAQs" ? "nav-link-active" : "nav-li"} to="/FAQs" 
        activeStyle>
          FAQ
        </NavLink>
        <NavLink 
        className={location.pathname === "/contact-us" ? "nav-link-active" : "nav-li"} to="/contact-us" 
        activeStyle>
          Contact Us
        </NavLink>
        <div className={location.pathname === "/nigeria" ? "nav-link-active" : "nav-li"} /*to="/nigeria"*/ activeStyle>
          <img src="/images/ng.png" alt="nigerian flag" className="w-[24px] h-[24px]" />
          <span>Nigeria (EN)</span>
          <svg
            className="dropdown"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M12.2527 15.2929L8.66697 11.7071C8.037 11.0771 8.48317 10 9.37408 10H16.5456C17.4365 10 17.8827 11.0771 17.2527 11.7071L13.6669 15.2929C13.2764 15.6834 12.6432 15.6834 12.2527 15.2929Z"
              fill="white"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
}
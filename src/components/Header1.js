import { NavLink, useLocation } from "react-router-dom";
function Header1() {
  const location = useLocation();
  return (
    <header className="header flex flex-row items-center h-8">
      <div className="mr-auto">
        <img alt="wynk logo" src="../images/wynk_logo.png"/>
      </div>
      <nav className="navbar">
          <ul className="header flex flex-row gap-4 sm:text-lg">
            <NavLink className={location.pathname === "/our-services" ? "nav-link-active" : "nav-li"} /*to="/our-services"*/ activeStyle>
              <p>Our services</p>
              <svg className="dropdown" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M12.2527 15.2929L8.66697 11.7071C8.037 11.0771 8.48317 10 9.37408 10H16.5456C17.4365 10 17.8827 11.0771 17.2527 11.7071L13.6669 15.2929C13.2764 15.6834 12.6432 15.6834 12.2527 15.2929Z" fill="black"/>
              </svg>
            </NavLink>
            <NavLink className={location.pathname === "/become-a-partner" ? "nav-link-active" : "nav-li"} /*to="/become-a-partner"*/ activeStyle>
              <p>Become a partner</p>
              <svg className="dropdown" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M12.2527 15.2929L8.66697 11.7071C8.037 11.0771 8.48317 10 9.37408 10H16.5456C17.4365 10 17.8827 11.0771 17.2527 11.7071L13.6669 15.2929C13.2764 15.6834 12.6432 15.6834 12.2527 15.2929Z" fill="black"/>
              </svg>
            </NavLink>
            <NavLink className={location.pathname === "/FAQs" ? "nav-link-active" : "nav-li"} /*to="/FAQs"*/ activeStyle>
              <p>FAQs</p>
            </NavLink>
            <NavLink className={location.pathname === "/contact-us" ? "nav-link-active" : "nav-li"} to="/contact-us" activeStyle>
              <p>Contact Us</p>
            </NavLink>
            <NavLink className={location.pathname === "/nigeria" ? "nav-link-active" : "nav-li"} /*to="/nigeria"*/ activeStyle>
              <div className="flex items-center gap-2">
                <img src="/images/ng.png" alt="nigerian flag"/>
              <p>Nigeria (EN)</p>
              </div>
              <svg className="dropdown" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M12.2527 15.2929L8.66697 11.7071C8.037 11.0771 8.48317 10 9.37408 10H16.5456C17.4365 10 17.8827 11.0771 17.2527 11.7071L13.6669 15.2929C13.2764 15.6834 12.6432 15.6834 12.2527 15.2929Z" fill="black"/>
              </svg>
            </NavLink>
          </ul>
        </nav>
    </header>
  );
}

export default Header1;

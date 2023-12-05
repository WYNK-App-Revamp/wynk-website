import { useEffect, useRef, useState } from "react";
import {ConnectWithWynk2 }from "./ConnectWithWynk";
import { NavLink, useLocation } from 'react-router-dom';
import {OurServicesDropdown2} from "./OurServicesDropdown";
import { BecomeAPartnerDropdown2 } from "./BecomeAPartnerDropdown";

function MobileNavBar (props) {
  const location = useLocation();
  function closeNavBar() {
    const {setNavbarIsOpen} = props;
    setNavbarIsOpen((navbarIsOpen) => !navbarIsOpen);
  }
  const [ourServicesIsOpen, setOurServicesIsOpen] = useState(false);
  const [becomeAParterIsOpen, setBecomeAParterIsOpen] = useState(false);
  function handleOurServicesDisplay () {
    setOurServicesIsOpen(ourServicesIsOpen => !ourServicesIsOpen);
  }
  function handleBecomeAPartnerDisplay () {
    setBecomeAParterIsOpen(becomeAParterIsOpen => !becomeAParterIsOpen);
  }

  // handles closing of the drop downs if any part of the screen is clicked
  const ourServicesDropdownRef = useRef(null);
  const becomeAPartnerDropdownRef = useRef(null);
  const ourServicesRef = useRef(null);
  const becomeAPartnerRef = useRef(null);
  useEffect(() => {
    function handleClickOutsideOS(event) {
      if ((ourServicesDropdownRef.current && !ourServicesDropdownRef.current.contains(event.target)) || (ourServicesRef.current && !ourServicesRef.current.contains(event.target))) {
        setOurServicesIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutsideOS);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideOS);
    };
  }, []);
  useEffect(() => {
    function handleClickOutsideBAP(event) {
      if ((becomeAPartnerDropdownRef.current && !becomeAPartnerDropdownRef.current.contains(event.target)) || (becomeAPartnerRef.current && !becomeAPartnerRef.current.contains(event.target))) {
        setBecomeAParterIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutsideBAP);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideBAP);
    };
  }, []);
  return (
    <nav className="fixed w-screen h-screen top-0 left-0  z-10 flex flex-col items-center gap-12 bg-white main-section">
      <div className="w-full flex items-center">
        <div className="cursor-pointer mr-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="32" viewBox="0 0 50 32" fill="none">
            <path d="M10.8478 24.6281L8.38841 17.1104H6.69488L4.21472 24.6281L2.15734 17.1104H0L3.12536 27.79H4.9601L7.50138 20.0626L10.0621 27.79H11.8968L15.0028 17.1104H12.9259L10.8478 24.6281Z" fill="#211E8A"/>
            <path d="M20.4246 25.0259L17.2997 17.1104H15.1016L19.2558 27.2852L19.3761 27.5814L17.6826 32H19.7718L25.5668 17.1106H23.4496L20.4246 25.0259Z" fill="#211E8A"/>
            <path d="M31.5162 16.8795C30.9438 16.8697 30.3763 16.9904 29.8536 17.2329C29.3309 17.4755 28.8657 17.8341 28.4909 18.2835V17.1107H26.4551V27.7903H28.4906V21.4452C28.4906 19.8537 29.5383 18.7858 31.0114 18.7858C32.4633 18.7858 33.4313 19.8326 33.4313 21.3826V27.7903H35.4684V20.9639C35.4686 18.6811 33.8759 16.8795 31.5162 16.8795Z" fill="#211E8A"/>
            <path d="M41.3763 22.2618L46.0546 17.1106H43.6356L39.4824 21.8214V13.1309H37.4453V27.79H39.4824V22.8893L43.7371 27.7891L47.457 31.979H50.0013L46.2975 27.79L41.3763 22.2618Z" fill="#211E8A"/>
            <path d="M29.3216 0C26.854 0.00312773 24.4717 0.938213 22.619 2.63089C20.7663 4.32356 19.5696 6.65826 19.2521 9.19964C17.4178 8.91626 15.7424 7.95862 14.5306 6.50088C13.3187 5.04314 12.6508 3.18211 12.6484 1.25624V0.977426H10.2285V1.25692C10.2286 3.93655 11.2112 6.51561 12.9765 8.46988C14.7419 10.4242 17.1575 11.607 19.7325 11.778C22.3074 11.949 24.8485 11.0953 26.8391 9.39047C28.8298 7.68562 30.1206 5.25754 30.4494 2.59975C32.2836 2.88308 33.959 3.84071 35.1709 5.29846C36.3828 6.75621 37.0507 8.61726 37.053 10.5431V10.8224H39.4729V10.5429C39.47 7.74776 38.3996 5.06794 36.4965 3.09142C34.5934 1.11491 32.013 0.00312006 29.3216 0ZM21.7058 9.16451C21.9814 7.53674 22.7328 6.03656 23.8581 4.86787C24.9833 3.69917 26.4278 2.91865 27.9952 2.63239C27.7196 4.26015 26.9682 5.76033 25.8429 6.92903C24.7177 8.09772 23.2732 8.87824 21.7058 9.16451Z" fill="#F98611"/>
          </svg>
        </div>
        <div className="cursor-pointer" onClick={closeNavBar}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M10.0303 8.96967C9.73741 8.67678 9.26253 8.67678 8.96964 8.96967C8.67675 9.26256 8.67675 9.73744 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2626 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9697L13.0606 12L15.0303 10.0303C15.3232 9.73746 15.3232 9.26258 15.0303 8.96969C14.7374 8.6768 14.2625 8.6768 13.9696 8.96969L12 10.9394L10.0303 8.96967Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0574 1.25H11.9426C9.63424 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63422 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62177 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62177 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62177 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62177 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z" fill="black"/>
          </svg>
        </div>
      </div>
      <div className='w-full flex flex-col gap-6'>
        <div
        ref={ourServicesDropdownRef}
        onClick={handleOurServicesDisplay}
        >
          <div
          className={location.pathname === "/our-services" ? "nav-link-active-mobile" : "nav-li-mobile"}>
            <span>Our Services</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" 
              d="M4.9501 8.51192C5.21967 8.19743 5.69314 8.161 6.00764 8.43057L12.5195 14.0122L19.0315 8.43057C19.3459 8.16101 19.8194 8.19743 20.089 8.51192C20.3586 8.82642 20.3221 9.29989 20.0076 9.56946L13.0076 15.5695C12.7268 15.8102 12.3123 15.8102 12.0315 15.5695L5.03145 9.56946C4.71696 9.29989 4.68054 8.82641 4.9501 8.51192Z" 
              fill="black"/>
            </svg>
          </div>
          {ourServicesIsOpen && (
            <OurServicesDropdown2 ref={ourServicesRef}/>
          )}
        </div>
        <div
        ref={becomeAPartnerDropdownRef}
         onClick={handleBecomeAPartnerDisplay}
        >
          <div
          className={location.pathname === "/our-services" ? "nav-link-active-mobile" : "nav-li-mobile"}>
            <span>Become a partner</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" 
              d="M4.9501 8.51192C5.21967 8.19743 5.69314 8.161 6.00764 8.43057L12.5195 14.0122L19.0315 8.43057C19.3459 8.16101 19.8194 8.19743 20.089 8.51192C20.3586 8.82642 20.3221 9.29989 20.0076 9.56946L13.0076 15.5695C12.7268 15.8102 12.3123 15.8102 12.0315 15.5695L5.03145 9.56946C4.71696 9.29989 4.68054 8.82641 4.9501 8.51192Z" 
              fill="black"/>
            </svg>
          </div>
          {becomeAParterIsOpen && (
            <BecomeAPartnerDropdown2 ref={becomeAPartnerRef}/>
          )}
        </div>
        <NavLink
        className={location.pathname === "/FAQs" ? "nav-link-active" : "nav-li"} to="/FAQs" 
        >
          FAQ
        </NavLink>
        <NavLink 
        className={location.pathname === "/contact-us" ? "nav-link-active" : "nav-li"} to="/contact-us" 
        >
          Contact Us
        </NavLink>
        <div className={location.pathname === "/nigeria" ? "nav-link-active" : "nav-li"} /*to="/nigeria"*/ >
          <img src="/images/ng.png" alt="nigerian flag" className="w-[24px] h-[24px]" />
          <span>Nigeria (EN)</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" 
            d="M4.9501 8.51192C5.21967 8.19743 5.69314 8.161 6.00764 8.43057L12.5195 14.0122L19.0315 8.43057C19.3459 8.16101 19.8194 8.19743 20.089 8.51192C20.3586 8.82642 20.3221 9.29989 20.0076 9.56946L13.0076 15.5695C12.7268 15.8102 12.3123 15.8102 12.0315 15.5695L5.03145 9.56946C4.71696 9.29989 4.68054 8.82641 4.9501 8.51192Z" 
            fill="black"/>
          </svg>
        </div>
      </div>
      <div className="flex justify-center">
        <ConnectWithWynk2/>
      </div>
    </nav>
  )
}

export default MobileNavBar
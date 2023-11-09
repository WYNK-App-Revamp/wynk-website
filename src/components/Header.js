function Header() {
  return (
    <header className="header bg-wynkPurple-100 py-2 px-8 sm:py-12 sm:px-28 flex flex-row items-center h-8">
      <div className="mr-auto">
        <img alt="wynk logo" src="../images/wynk_logo.png"/>
      </div>
      <div>
        <nav className="navbar">
          <ul className="header flex flex-row gap-4 sm:text-lg">
            <li className="nav-li">
              <p>Our services</p>
              <svg className="dropdown" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M12.2527 15.2929L8.66697 11.7071C8.037 11.0771 8.48317 10 9.37408 10H16.5456C17.4365 10 17.8827 11.0771 17.2527 11.7071L13.6669 15.2929C13.2764 15.6834 12.6432 15.6834 12.2527 15.2929Z" fill="black"/>
              </svg>
            </li>
            <li className="nav-li">
              <p>Become a partner</p>
              <svg className="dropdown" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M12.2527 15.2929L8.66697 11.7071C8.037 11.0771 8.48317 10 9.37408 10H16.5456C17.4365 10 17.8827 11.0771 17.2527 11.7071L13.6669 15.2929C13.2764 15.6834 12.6432 15.6834 12.2527 15.2929Z" fill="black"/>
              </svg>
            </li>
            <li className="nav-li">
              <p>FAQs</p>
            </li>
            <li className="nav-li">
              <p>Contact Us</p>
            </li>
            <li className="nav-li">
              <p>Nigeria (EN)</p>
              <svg className="dropdown" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M12.2527 15.2929L8.66697 11.7071C8.037 11.0771 8.48317 10 9.37408 10H16.5456C17.4365 10 17.8827 11.0771 17.2527 11.7071L13.6669 15.2929C13.2764 15.6834 12.6432 15.6834 12.2527 15.2929Z" fill="black"/>
              </svg>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

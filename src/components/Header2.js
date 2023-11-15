function Header2() {
  return (
    <header className="header flex flex-row items-center h-8">
      <div className="mr-auto">
        <img alt="wynk logo" src="../images/wynk_logo_2.png"/>
      </div>
      <div>
        <nav className="navbar">
          <ul className="header flex flex-row gap-4 sm:text-lg">
            <li className="nav-li">
              <p>Our services</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M12.2529 15.2929L8.66709 11.7071C8.03712 11.0771 8.48329 10 9.3742 10H16.5458C17.4367 10 17.8829 11.0771 17.2529 11.7071L13.6671 15.2929C13.2766 15.6834 12.6434 15.6834 12.2529 15.2929Z" fill="white"/>
              </svg>
            </li>
            <li className="nav-li">
              <p>Become a partner</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M12.2529 15.2929L8.66709 11.7071C8.03712 11.0771 8.48329 10 9.3742 10H16.5458C17.4367 10 17.8829 11.0771 17.2529 11.7071L13.6671 15.2929C13.2766 15.6834 12.6434 15.6834 12.2529 15.2929Z" fill="white"/>
              </svg>
            </li>
            <li className="nav-li">
              <p>FAQs</p>
            </li>
            <li className="nav-li">
              <p>Contact Us</p>
            </li>
            <li className="nav-li">
              <div className="flex items-center gap-2">
                <img src="/images/ng.png" alt="nigerian flag"/>
              <p>Nigeria (EN)</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M12.2529 15.2929L8.66709 11.7071C8.03712 11.0771 8.48329 10 9.3742 10H16.5458C17.4367 10 17.8829 11.0771 17.2529 11.7071L13.6671 15.2929C13.2766 15.6834 12.6434 15.6834 12.2529 15.2929Z" fill="white"/>
              </svg>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header2;

function Footer() {
  return (
    <footer className="main-section footer">
      <section className="go-to-links flex flex-wrap justify-between">
        <section className="flex flex-col gap-4">
          <h4>Address</h4>
          <p>Lekki, Lagos - Nigeria</p>
        </section>
        <section className="flex flex-col gap-4">
          <h4 className="text-lg">Company</h4>
          <ul className="text-sm">
            <li><a>About us</a></li>
            <li><a>Join the team</a></li>
            <li><a>Investor relations</a></li>
            <li><a href="/contact-us">Contact us</a></li>
          </ul>
        </section>
        <section className="flex flex-col gap-4">
          <h4 className="text-lg">Consumers</h4>
          <ul className="text-sm">
            <li><a>Vaults</a></li>
            <li><a>Rides</a></li>
            <li><a>Marketplace</a></li>
            <li><a>Restaurants & Bars</a></li>
            <li><a>Social Media</a></li>
            <li><a>Package Delivery</a></li>
          </ul>
        </section>
        <section className="flex flex-col gap-4">
          <h4 className="text-lg">Captains</h4>
          <ul className="text-sm">
            <li><a>Become a Captain</a></li>
            <li><a>Become a Dispatch</a></li>
            <li><a>What’s New</a></li>
            <li><a>Captain Center</a></li>
            <li><a href="/share-ownership">Share Ownership</a></li>
          </ul>
        </section>
        <section className="flex flex-col gap-4">
          <h4 className="text-lg">Businesses</h4>
          <ul className="text-sm">
            <li><a>Wynk for Business</a></li>
            <li><a>Wynk Vault</a></li>
            <li><a>Wynk Ride</a></li>
            <li><a href="/lifestyle" target="_blank" rel="noreferer">Wynk Lifestyle</a></li>
            <li><a>Wynk Socials</a></li>
          </ul>
        </section>
        <section className="flex flex-col gap-4">
          <h4 className="text-lg">Resources</h4>
          <ul className="text-sm">
            <li><a>Help Centre</a></li>
            <li><a>Learning Centre</a></li>
            <li><a>Partner with us</a></li>
            <li><a>Privacy Policy</a></li>
            <li><a>Cookie Policy</a></li>
            <li><a>IMS Policy</a></li>
          </ul>
        </section>
      </section>
      <hr style={{borderTop: '1px solid rgba(255, 255, 255, 0.30)'}}></hr>
      <section className=" flex items-start">
        <section className="flex gap-6 mr-auto w-1/2 items-center">
        <img alt="wynk logo" src="../images/wynk_logo_2.png" className="h-3/5"/>
        <div className="text-sm">We are making your Lifestyle stress free and that is what drives us. We dare to innovate for the benefit of both our Patrons and Captains. Our platform will take you to your destination, make payments and make your day.</div>
        </section>
        <section className="flex flex-col gap-2">
          <p className="text-lg">Connect with Wynk</p>
          <div className="social media icons flex justify-between items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <g clip-path="url(#clip0_8682_10610)">
              <path d="M18.0995 0.639893H1.80995C0.81448 0.639893 0 1.45437 0 2.44984V18.7394C0 19.7349 0.81448 20.5494 1.80995 20.5494H10.8597V12.4046H8.1448V9.68966H10.8597V8.2417C10.8597 5.43627 12.2172 4.2598 14.4796 4.2598C15.5656 4.2598 16.1991 4.3503 16.4706 4.3503V6.97473H14.9321C13.9367 6.97473 13.5747 7.51772 13.5747 8.51319V9.68966H16.4706L16.1086 12.4046H13.6652V20.5494H18.19C19.1855 20.5494 20 19.7349 20 18.7394V2.44984C19.9095 1.45437 19.095 0.639893 18.0995 0.639893Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_8682_10610">
                <rect width="20" height="20" fill="white" transform="translate(0 0.639893)"/>
              </clipPath>
            </defs>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <g clip-path="url(#clip0_8682_10613)">
              <path d="M5.83333 0.639893C2.58333 0.639893 0 3.22322 0 6.47322V14.8066C0 18.0566 2.58333 20.6399 5.83333 20.6399H14.1667C17.4167 20.6399 20 18.0566 20 14.8066V6.47322C20 3.22322 17.4167 0.639893 14.1667 0.639893H5.83333ZM15.8333 3.97322C16.3333 3.97322 16.6667 4.30656 16.6667 4.80656C16.6667 5.30656 16.3333 5.63989 15.8333 5.63989C15.3333 5.63989 15 5.30656 15 4.80656C15 4.30656 15.3333 3.97322 15.8333 3.97322ZM10 5.63989C12.75 5.63989 15 7.88989 15 10.6399C15 13.3899 12.75 15.6399 10 15.6399C7.25 15.6399 5 13.3899 5 10.6399C5 7.88989 7.25 5.63989 10 5.63989ZM10 7.30656C8.16667 7.30656 6.66667 8.80656 6.66667 10.6399C6.66667 12.4732 8.16667 13.9732 10 13.9732C11.8333 13.9732 13.3333 12.4732 13.3333 10.6399C13.3333 8.80656 11.8333 7.30656 10 7.30656Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_8682_10613">
                <rect width="20" height="20" fill="white" transform="translate(0 0.639893)"/>
              </clipPath>
            </defs>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="19" viewBox="0 0 22 19" fill="none">
            <g clip-path="url(#clip0_8682_10616)">
              <path d="M22 2.78833C21.2266 3.13208 20.2812 3.38989 19.4219 3.47583C20.3672 2.87427 21.0547 2.01489 21.3984 0.983643C20.5391 1.49927 19.5938 1.84301 18.5625 2.10083C17.7031 1.24145 16.5859 0.639893 15.2969 0.639893C12.8047 0.639893 10.8281 2.70239 10.8281 5.10864C10.8281 5.45239 10.8281 5.79614 10.9141 6.13989C7.04688 5.96801 3.78125 4.16333 1.54688 1.49927C1.11719 2.10083 0.945312 2.9602 0.945312 3.73364C0.945312 5.28051 1.71875 6.65551 2.92188 7.51489C2.14844 7.51489 1.46094 7.25708 0.859375 6.91333C0.859375 6.91333 0.859375 6.91333 0.859375 6.99926C0.859375 9.1477 2.40625 11.0383 4.46875 11.3821C4.125 11.468 3.69531 11.554 3.26562 11.554C3.00781 11.554 2.66406 11.554 2.40625 11.468C3.00781 13.2727 4.64062 14.5618 6.61719 14.5618C5.07031 15.7649 3.09375 16.4524 1.03125 16.4524C0.6875 16.4524 0.34375 16.4524 0 16.3665C1.97656 17.6555 4.38281 18.429 6.875 18.429C15.2109 18.429 19.6797 11.554 19.6797 5.62427C19.6797 5.45239 19.6797 5.19458 19.6797 5.0227C20.625 4.50708 21.3984 3.6477 22 2.78833Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_8682_10616">
                <rect width="22" height="18" fill="white" transform="translate(0 0.639893)"/>
              </clipPath>
            </defs>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
            <g clip-path="url(#clip0_8682_10619)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20 19.1621V2.11489C20 1.301 19.3389 0.639893 18.525 0.639893H1.47778C0.661111 0.639893 0 1.301 0 2.11489V19.1621C0 19.9788 0.661111 20.6399 1.47778 20.6399H18.5222C19.3389 20.6399 20 19.9788 20 19.1621ZM3.06942 8.24823H6.07498V17.801H3.06942V8.24823ZM4.5722 3.47046C5.53053 3.47046 6.30553 4.20101 6.30553 5.19823C6.30553 6.19546 5.53053 6.92323 4.5722 6.92323C3.61387 6.92323 2.83887 6.19546 2.83887 5.19823C2.83887 4.20101 3.61387 3.47046 4.5722 3.47046ZM13.6694 7.98712C15.3472 7.98712 17.1611 8.98435 17.1611 11.901H17.1583V17.8066H14.1528V12.5899C14.1528 11.051 13.5 10.576 12.6555 10.576C11.7639 10.576 10.8889 11.2482 10.8889 12.6288V17.8066H7.88331V8.25657H10.7722V9.57879H10.8111C11.1028 8.9899 12.1194 7.98712 13.6694 7.98712Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_8682_10619">
                <rect width="20" height="20" fill="white" transform="translate(0 0.639893)"/>
              </clipPath>
            </defs>
          </svg>
          </div>
        </section>
      </section>
    </footer>
  );
}

export default Footer;

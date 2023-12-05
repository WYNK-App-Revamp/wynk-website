import ConnectWithWynk from "./ConnectWithWynk";

function Footer() {
  return (
    <footer className="main-section footer">
      <section className="go-to-links flex flex-col md:flex-row md:justify-between">
        <section className="flex mb-8 flex-col gap-4">
          <h4>Address</h4>
          <p>Lekki, Lagos - Nigeria</p>
        </section>
        <section className="flex mb-8 flex-col gap-4">
          <h4 className="text-lg">Company</h4>
          <ul className="text-sm">
            <li><a>About us</a></li>
            <li><a>Join the team</a></li>
            <li><a>Investor relations</a></li>
            <li><a href="/contact-us">Contact us</a></li>
          </ul>
        </section>
        <section className="flex mb-8 flex-col gap-4">
          <h4 className="text-lg">Consumers</h4>
          <ul className="text-sm">
            <li><a>Vaults</a></li>
            <li><a href="/rides">Rides</a></li>
            <li><a>Marketplace</a></li>
            <li><a>Restaurants & Bars</a></li>
            <li><a>Social Media</a></li>
            <li><a>Package Delivery</a></li>
          </ul>
        </section>
        <section className="flex mb-8 flex-col gap-4">
          <h4 className="text-lg">Captains</h4>
          <ul className="text-sm">
            <li><a>Become a Captain</a></li>
            <li><a>Become a Dispatch</a></li>
            <li><a>What’s New</a></li>
            <li><a>Captain Center</a></li>
            <li><a href="/share-ownership">Share Ownership</a></li>
          </ul>
        </section>
        <section className="flex mb-8 flex-col gap-4">
          <h4 className="text-lg">Businesses</h4>
          <ul className="text-sm">
            <li><a href="/wynk-for-merchants">Wynk for Business</a></li>
            <li><a>Wynk Vault</a></li>
            <li><a href="/rides">Wynk Ride</a></li>
            <li><a href="/lifestyle" target="_blank" rel="noreferer">Wynk Lifestyle</a></li>
            <li><a href="/lifestyle">Wynk Socials</a></li>
          </ul>
        </section>
        <section className="flex mb-8 flex-col gap-4">
          <h4 className="text-lg">Resources</h4>
          <ul className="text-sm">
            <li><a href="/contact-us">Help Centre</a></li>
            <li><a>Learning Centre</a></li>
            <li><a>Partner with us</a></li>
            <li><a>Privacy Policy</a></li>
            <li><a>Cookie Policy</a></li>
            <li><a>IMS Policy</a></li>
          </ul>
        </section>
      </section>
      <hr style={{borderTop: '1px solid rgba(255, 255, 255, 0.30)'}}></hr>
      <section className=" flex flex-col sm:flex-row items-start">
        <section className="flex flex-col sm:flex-row gap-6 sm:mr-auto mb-6 sm:w-1/2 items-start sm:items-center">
          <img alt="wynk logo" src="../images/wynk_logo_2.png" className="h-3/5"/>
          <div className="text-sm">Simplify your life, discover infinite access, and live more freely with the Wynk Lifestyle Super App. Embrace our world of infinite access where convenience meets lifestyle, innovation meets simplicity, and you meet endless possibilities.</div>
        </section>
        <ConnectWithWynk/>
      </section>
    </footer>
  );
}

export default Footer;

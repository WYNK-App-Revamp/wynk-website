import DownloadWynk from "../components/DownloadWynk";
import Header from "../components/Header";

function Services() {
  return (
    <>
    <section className="main-section text-white" style={{ backgroundImage: "url(/images/lady-in-car-hero-image.png)" }}>
      <Header/>
      <section className="scheme-hero-section section-inner-padding flex">
        <div className="w-1/2">
          <h2 className="font-bold text-4xl sm:text-7xl mb-5"> Boundless access to all your needs</h2>
          <p className=" text-sm sm:text-xl mb-5 max-w-xl">Whether it’s Payments, Ride-hailing, or Lifestyle Services, We dare to create a reality where WynkStars thrive beyond the ordinary.</p>
          <div className="call-to-actions flex gap-4">
            <button className="download-the-app-button">Get the app</button>
          </div>
        </div>
      </section>
    </section>
    <section className="main-section section-inner-padding bg-wynkOffWhite">
      <img alt="valuable-services-component" src="/images/valuable-services-component.png"/>
    </section>
    <section className="main-section section-inner-padding bg-wynkPurple-100 flex flex-col">
    <div className="hero-text px-60 flex flex-col gap-4">
      <h2 className="text-center text-4xl font-bold leading-none">Explore Access without Limits</h2>
      <p className="text-lg text-center">WynkStars including Consumers, Captains, Merchants, and Businesses can explore boundless access to a variety of services on the Wynk Super App.</p>
    </div>
    <div className="flex gap-6">
      <img className="hover:cursor-pointer" src="/images/consumers-link.png" alt="link-component"/>
      <img className="hover:cursor-pointer" src="/images/customers-link.png" alt="link-component"/>
      <img className="hover:cursor-pointer" src="/images/merchant-link.png" alt="link-component"/>
      <img className="hover:cursor-pointer" src="/images/businesses-link.png" alt="link-component"/>
    </div>
    </section>
    <DownloadWynk/>
    </>
  );
}

export default Services;

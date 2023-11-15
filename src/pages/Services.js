import DownloadWynk from "../components/DownloadWynk";
import Header2 from "../components/Header2";
import ServicesComponentsSwapper from "../components/ServicesComponentsSwapper";

function Services() {
  return (
    <>
    <section className="main-section text-white" style={{ 
      background: "url(/images/lady-in-car-hero-image.png), linear-gradient(135deg, rgba(0, 0, 0, 0.64) 0%, rgba(0, 0, 0, 0.00) 100%)", 
      backgroundSize: 'cover',
      }}>
      <Header2/>
      <section className="scheme-hero-section section-inner-padding flex gap-12">
        <div className="w-1/2">
          <h2 className="font-bold text-4xl sm:text-6xl mb-5"> Boundless access to all your needs</h2>
          <p className=" text-sm sm:text-xl mb-5 max-w-xl">Whether it’s Payments, Ride-hailing, or Lifestyle Services, We dare to create a reality where WynkStars thrive beyond the ordinary.</p>
          <div className="call-to-actions flex gap-4">
            <button className="download-the-app-button">Get the app</button>
          </div>
        </div>
      </section>
    </section>
    <section className="main-section section-inner-padding bg-wynkOffWhite">
      <ServicesComponentsSwapper/>
    </section>
    <section className="main-section section-inner-padding bg-wynkPurple-100 flex flex-col">
    <div className="hero-text px-60 flex flex-col gap-4 mb-20">
      <h2 className="text-center text-4xl font-bold leading-none">Explore Access without Limits</h2>
      <p className="text-lg text-center">WynkStars including Consumers, Captains, Merchants, and Businesses can explore boundless access to a variety of services on the Wynk Super App.</p>
    </div>
    <div className="flex gap-6">
      <img className="hover:cursor-pointer" src="/images/customers-link.png" alt="link-component"/>
      <img className="hover:cursor-pointer" src="/images/captains-link.png" alt="link-component"/>
      <img className="hover:cursor-pointer" src="/images/merchant-link.png" alt="link-component"/>
      <img className="hover:cursor-pointer" src="/images/businesses-link.png" alt="link-component"/>
    </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkOffWhite flex flex-col gap-16 items-center">
      <div>
        <h3 className="bg-orange-500 bg-opacity-10 text-orange-500 text-lg font-bold p-4 rounded-full">Why choose us</h3>
      </div>
      <div className="hero-text px-60 flex flex-col gap-4">
        <h2 className="text-center text-4xl font-bold leading-none">More than 5,000+ Users Trust Us</h2>
        <p className="text-lg text-center">We’ve built a Community of Consumers, Captains, Merchants, and Businesses who rely on Wynk for innovative solutions across Payments, Rides, and Lifestyle Services.</p>
      </div>
      <div className="px-60 flex flex-col gap-4">
        <img className="rounded-lg" src="/images/wynk-super-app-youtube-image.png" alt="youtube link"/>
      </div>
      <div className=" flex flex-col gap-4">
        <img src="/images/metrics-components.png" alt="metrics components" />
      </div>
    </section>
    <DownloadWynk/>
    </>
  );
}

export default Services;

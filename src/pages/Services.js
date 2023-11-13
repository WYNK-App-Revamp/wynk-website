import DownloadWynk from "../components/DownloadWynk";
import Header from "../components/Header";

function Services() {
  return (
    <>
    <section className="main-section bg-wynkPurple-100">
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
    <section className="main-section section-inner-padding bg-wynkOffWhite flex flex-col gap-8 items-start">
      <img alt="valuable-services-component" src="/images/valuable-services-component.png"/>
    </section>
    <DownloadWynk/>
    </>
  );
}

export default Services;

import DownloadWynk from "../components/DownloadWynk";
import Footer from "../components/Footer";
import Header1 from "../components/Header1";

export default function WynkForCaptains () {
  return (
    <>
      <section className="main-section bg-wynkPurple-100">
        <Header1/> 
      </section>
      <section className="main-section bg-wynkOffWhite scheme-hero-section section-inner-padding flex items-center gap-8">
      <div className="flex flex-col gap-6">
        <p className="text-lg sm:text-2xl">Rides</p>
        <div className="w-4/5">
          <h2 className="font-bold text-4xl sm:text-[64px] leading-none mb-5"><span className="text-wynkPurple-200">Ride Smarter</span> & Explore the World with Us</h2>
          <p className=" text-base sm:text-2xl mb-5 sm:w-[90%]">Choose Wynk for a seamless, safe, and stress-free ride. Wherever you're headed, we've got you covered.</p>
        </div>
        <img src="/images/car-on-a-bridge.png" alt="car on a bridge"/>
      </div>
    </section>
    <section className="main-section section-inner-padding mt-[-25%] bg-wynkPurple-100 flex flex-col items-center gap-6 sm:gap-12">
      <h2 className="font-bold text-[24px] sm:text-[38px] sm:w-[55%] text-center mt-[20%] sm:mt-[15%]">Your Ultimate Ride-Hailing Experience, with Advanced Features.</h2>
      <a href="https://play.google.com/store/apps/details?id=ng.wynk.wynksupappsupapp&pli=1" target="_blank" rel="noreferrer">
        <button className="download-the-app-button mb-8">Download the app</button>
      </a>
      <img src="/images/ride-perks.png" alt="ride perks"/>
    </section>
    <section className="main-section section-inner-padding bg-wynkOffWhite">
      <div className="px-6 md:px-12 flex items-center gap-16">
        <div className="md:w-1/2">
          <img src="/images/flight-booking-phone-component.png" alt="flight booking phone screen"/>
        </div>
        <div className="flex flex-col items-start gap-2 md:w-1/2">
          <p className="sm:text-[38px] font-bold">Go wherever you want hassle free!</p>
          <p className="sm:text-[18px] text-[#212529] mb-4">With Wynk, your daily commute becomes an opportunity to connect, save, and ensure your safety.</p>
          <button className="download-the-app-button">Get the app</button>
        </div>
      </div>
    </section>
    <section className="main-section section-inner-padding flex flex-col items-center gap-4 bg-wynkPurple-100">
      <div className="flex flex-col items-center gap-6">
        <h3 className="bg-orange-500 bg-opacity-10 text-orange-500 text-sm sm:text-base text-center font-bold p-2 sm:p-4 rounded-full">Wynk captain</h3>
        <p className="sm:text-[38px] text-center font-bold w-2/5">Drive and earn as a captain with Wynk!</p>
        <p className="sm:text-[18px] text-[#212529] mb-4 w-1/2 text-center">As a car owner, you can sign up with us a captain and earn while accepting in-app ride requests. It’s that easy!</p>
        <button className="download-the-app-button mb-4">Learn More</button>
      </div>
      <div className="flex flex-col gap-6">
        <div>
        <img src="/images/signup-as-a-wynk-captain.png" alt="Sign up as a Wynk captain"/>
      </div>
      <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-6">
        <img src="/images/earn-as-you-drive.png" alt="Earn as you drive"/>
        <img src="/images/carpool-multiple-passengers.png" alt="Car pool multiple passengers"/>
      </div>
      </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkOffWhite">
      <DownloadWynk/>
    </section>
    <Footer/>
    </>
  );
}
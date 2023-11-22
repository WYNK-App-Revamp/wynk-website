import Header1 from "../components/Header1";

export default function Lifestyle() {
  return (
    <>
      <section className="main-section">
        <Header1/>
      </section>
      <section className="main-section min-h-screen text-white flex flex-col gap-6" style={{ 
      background: "linear-gradient(0deg, rgba(0, 0, 0, 0.48) 0%, rgba(0, 0, 0, 0.48) 100%), url(/images/lifestyle-hero-bg.png)", 
      backgroundSize: 'cover',
      }}>
        <p className="text-[24px] font-medium text-center">Lifestyle</p>
        <p className="text-[48px] font-medium text-center">A seamless blend of convenience, style, and adventure, all under one roof.</p>
      </section>
      <section className="main-section section-inner-padding bg-wynkOffwhite flex flex-col gap-6 items-center">
        <p className="text-[30px] font-medium text-center px-16">Whether you're a seasoned traveler, a shopaholic, a food enthusiast, or a social butterfly, we've got you covered!</p>
        <img src="/images/wynk-lifestyle-services-frame.png" alt="lifestyle services component"/>
      </section>
      <section className="main-section section-inner-padding bg-wynkPurple-100">
      <div className="md:px-16 flex items-center gap-4">
        <div className="flex flex-col gap-2 md:w-1/2">
          <p className="text-[38px] font-bold">Secure Shopping, Worry-Free Payments</p>
          <p className="text-[18px] text-[#212529] mb-4">Say goodbye to the uncertainties of "Payment on Delivery" issues. With our Buyer’s Protection Feature, we've redefined the way you shop online.</p>
          <button className="download-the-app-button w-2/5">Get the app</button>
        </div>
        <div className="md:w-1/2">
          <img src="/images/shopping-phone-component.png" alt="phone shopping screen"/>
        </div>
      </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkOffWhite">
      <div className="md:px-12 flex items-center gap-16">
        <div className="md:w-1/2">
          <img src="/images/flight-booking-phone-component.png" alt="flight booking phone screen"/>
        </div>
        <div className="flex flex-col gap-2 md:w-1/2">
          <p className="text-[38px] font-bold">Soar to New Horizons!</p>
          <p className="text-[18px] text-[#212529] mb-4">Get ready to take flight! With Wynk, you can effortlessly plan your next voyage. Discover the world's most iconic destinations or embark on a spontaneous getaway.</p>
          <button className="download-the-app-button w-2/5">Get the app</button>
        </div>
      </div>
    </section>
    </>
  );
}
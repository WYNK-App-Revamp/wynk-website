import DownloadWynk from "../components/DownloadWynk";
import Footer from "../components/Footer";
import Header1 from "../components/Header1";

export default function WynkForMerchants () {
  return (
    <>
      <section className="main-section bg-wynkPurple-100">
      <Header1/>
      <section className="scheme-hero-section section-inner-padding flex gap-4">
        <div className="w-3/4">
          <p className="text-lg sm:text-2xl">Merchants</p>
          <h2 className="font-bold text-3xl sm:text-5xl md:text-7xl mb-5">Your Time, Your Goals, <span className="text-wynkPurple-200">You're in Charge!</span></h2>
          <p className=" text-sm sm:text-xl mb-5 sm:max-w-xl">Be a part of our platform. You can sell your offerings on Wynk and trust us to handle the logistics.</p>
          <div className="call-to-actions flex gap-4">
            <a href="https://play.google.com/store/apps/details?id=ng.wynk.wynksupappsupapp&pli=1" target="_blank" rel="noreferrer">
              <button className="download-the-app-button">Download the app</button>
            </a>
          </div>
        </div>
        <div>
          <img src="/images/unsplash_ELJM628U4Jk.png" alt="smiling wynk captain" className="rounded-xl min-h-full min-w-full"/>
        </div>
      </section> 
    </section>
    <section className="main-section section-inner-padding bg-wynkPurple-100 flex flex-col">
      <div className="hero-text items-center flex flex-col gap-4 mb-20">
        <h2 className="text-center text-2xl sm:text-4xl font-bold leading-none">Why Sell on Wynk?</h2>
        <p className="text-sm sm:text-lg text-center w-3/4 sm:w-3/4">Are you a vendor eager to bring your products to a broader audience while ensuring smooth, worry-free deliveries? Look no further!</p>
      </div>
      <div className="flex justify-center gap-6">
        <img className="hover:cursor-pointer w-1/5" src="/images/customers-link.png" alt="link-component"/>
        <img className="hover:cursor-pointer w-1/5" src="/images/captains-link.png" alt="link-component"/>
        <img className="hover:cursor-pointer w-1/5" src="/images/merchant-link.png" alt="link-component"/>
        <img className="hover:cursor-pointer w-1/5" src="/images/businesses-link.png" alt="link-component"/>
      </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkOffWhite">
      <div className="md:px-12 flex items-center gap-16">
        <div className="md:w-1/2">
          <img src="/images/transfer-assets.png" alt="phone transfer screen"/>
        </div>
        <div className="flex flex-col items-start gap-2 md:w-1/2">
          <p className="sm:text-[38px] font-bold">Open Your Shop and Thrive on the Wynk Marketplace!</p>
          <p className="sm:text-[18px] text-[#212529] mb-4">Are you an aspiring entrepreneur or an established business looking to reach a broader audience, you've come to the right place.</p>
          <button className="download-the-app-button">Get the app</button>
        </div>
      </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkPurple-100">
      <div className="md:px-16 flex items-center gap-4">
        <div className="flex flex-col items-start gap-2 md:w-1/2">
          <p className="sm:text-[38px] font-bold">Effortless Order Tracking for Wynk merchants</p>
          <p className="sm:text-[18px] text-[#212529] mb-4">At Wynk, we understand that staying on top of your orders is crucial for a smooth and successful business operation, whether you're a food vendor or a shop owner.</p>
          <button className="download-the-app-button">Get the app</button>
        </div>
        <div className="md:w-1/2">
          <img src="/images/pay-bills-assets.png" alt="phone transfer screen"/>
        </div>
      </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkOffWhite justify-center items-center flex flex-col gap-8">
      <p className="text-[24px] sm:text-[38px] text-center">How to Deliver with Wynk</p>
      <p className="text-[14px] sm:text-[18px] text-center sm:w-1/2 mb-2">Craving your favorite cuisine or a refreshing drink? With Wynk, ordering food and drinks is a breeze. Follow these three simple steps to satisfy your taste buds:</p>
      <div className="virtual-card-services flex flex-col sm:flex-row items-center justify-center gap-6">
        <img src="/images/fund-your-card.png" alt="virtual card service"/>
        <img src="/images/spend-with-card.png" alt="virtual card service"/>
        <img src="/images/set-card-limit.png" alt="virtual card service"/>
      </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkOffWhite">
      <DownloadWynk/>
    </section>
    <Footer/>
    </>
  );
}
import { useNavigate, useSearchParams } from "react-router-dom";
import DownloadWynkModal from "../components/DownloadWynkModal";
import DownloadWynk from "../components/DownloadWynk";
import Footer from "../components/Footer";
import Header1 from "../components/Header1";
import Header1Mobile from "../components/Header1Mobile";

export default function WynkForMerchants () {
  const [searchParams]= useSearchParams();
  const downloadWynkModalIsOpen = searchParams.get('downloadWynkModalIsOpen') === 'true'? true : false;
  const navigate = useNavigate();
  function openDownloadWynkModal () {
    navigate('/wynk-for-merchants?downloadWynkModalIsOpen=true');
  }

  return (
    <>
    <section className="main-section bg-wynkPurple-100">
      <Header1/> 
      <Header1Mobile/>
    </section>
    <section className="main-section bg-wynkOffWhite scheme-hero-section section-inner-padding flex items-center gap-8">
      <div className="w-1/2 flex flex-col gap-6">
        <p className="text-lg sm:text-2xl">Merchants</p>
        <h2 className="font-bold text-3xl sm:text-5xl mb-5">Your Time, Your Goals, <span className="text-wynkPurple-200">You're in Charge!</span></h2>
        <p className=" text-sm sm:text-xl mb-5 sm:w-[90%]">Be a part of our platform. You can sell your offerings on Wynk and trust us to handle the logistics.</p>
        <div className="call-to-actions flex gap-4">
          <button className="download-the-app-button"
          onClick={openDownloadWynkModal}
          >Get the app</button>
        </div>
      </div>
      <div>
        <img src="/images/merchant-wearing-face-cap.png" alt="smiling wynk captain" className="rounded-xl sm:min-h-full sm:min-w-full"/>
      </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkPurple-100 flex flex-col">
      <div className="hero-text items-center flex flex-col gap-4 mb-20">
        <h2 className="text-center text-2xl sm:text-4xl font-bold leading-none">Why Sell on Wynk?</h2>
        <p className="text-sm sm:text-lg text-center w-3/4 sm:w-3/4">Are you a vendor eager to bring your products to a broader audience while ensuring smooth, worry-free deliveries? Look no further!</p>
      </div>
      <div className="flex justify-center gap-6">
        <img className="w-1/5" src="/images/reason-wider-audience.png" alt="reason to sell on wynk"/>
        <img className="w-1/5" src="/images/reason-secure-payment.png" alt="reason to sell on wynk"/>
        <img className="w-1/5" src="/images/reason-hassle-free-delivery.png" alt="reason to sell on wynk"/>
        <img className="w-1/5" src="/images/reason-commission.png" alt="reason to sell on wynk"/>
      </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkOffWhite flex flex-col gap-16">
      <div className="flex flex-col gap-6">
        <img className="rounded-2xl" src="/images/man-with-receipts.png" alt="man with receipts"/>
        <h2 className="text-2xl sm:text-4xl font-bold leading-none">Wynk, the Ultimate destination for Merchants</h2>
        <p className="sm:text-[18px] sm:w-3/5">If you are looking to broaden your horizons and reach a vast audience of eager customers? Wynk offers you the perfect platform to showcase your products and mouthwatering dishes, expanding your business in the digital age.</p>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-[32px] font-bold leading-none">Who are Wynk Merchants?</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <img src="/images/food-drinks-explanation-card.png" alt="who a wynk merchant is"/>
          <img src="/images/shop-owners-explanation-card.png" alt="who a wynk merchant is"/>
        </div>
      </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkPurple-100">
      <div className="md:px-12 flex items-center gap-16">
        <div className="md:w-1/2">
          <img src="/images/my-shop-phone-screen.png" alt="my shop phone screen"/>
        </div>
        <div className="flex flex-col items-start gap-2 md:w-1/2">
          <p className="sm:text-[38px] font-bold">Open Your Shop and Thrive on the Wynk Marketplace!</p>
          <p className="sm:text-[18px] text-[#212529] mb-4">Are you an aspiring entrepreneur or an established business looking to reach a broader audience, you've come to the right place.</p>
          <button className="download-the-app-button"
          onClick={openDownloadWynkModal}
          >Get the app</button>
          {downloadWynkModalIsOpen? <DownloadWynkModal/> : null}
        </div>
      </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkOffWhite">
      <div className="md:px-16 flex items-center gap-4">
        <div className="flex flex-col items-start gap-2 md:w-1/2">
          <p className="sm:text-[38px] font-bold">Effortless Order Tracking for Wynk merchants</p>
          <p className="sm:text-[18px] text-[#212529] mb-4">At Wynk, we understand that staying on top of your orders is crucial for a smooth and successful business operation, whether you're a food vendor or a shop owner.</p>
          <button className="download-the-app-button"
          onClick={openDownloadWynkModal}
          >Get the app</button>
          {downloadWynkModalIsOpen? <DownloadWynkModal/> : null}
        </div>
        <div className="md:w-1/2">
          <img src="/images/order-tracking-phone-screen.png" alt="Effortless Order Tracking phone screen"/>
        </div>
      </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkPurple-100 justify-center items-center flex flex-col gap-8">
      <p className="text-[24px] sm:text-[38px] text-center">How to Deliver with Wynk</p>
      <p className="text-[14px] sm:text-[18px] text-center sm:w-1/2 mb-2">Craving your favorite cuisine or a refreshing drink? With Wynk, ordering food and drinks is a breeze. Follow these three simple steps to satisfy your taste buds:</p>
      <div className="how-to-deliver-with-wynk flex flex-col md:flex-row items-center justify-center gap-6">
        <img src="/images/enter-delivery-location.png" alt="How to Deliver with Wynk"/>
        <img src="/images/leave-driver-a-note.png" alt="How to Deliver with Wynk"/>
        <img src="/images/add-senders-info.png" alt="How to Deliver with Wynk"/>
      </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkOffWhite">
      <DownloadWynk/>
    </section>
    <Footer/>
    </>
  );
}
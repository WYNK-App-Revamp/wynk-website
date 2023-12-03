import { useNavigate, useSearchParams } from "react-router-dom";
import DownloadWynkModal from "../components/DownloadWynkModal";
import DownloadWynk from "../components/DownloadWynk";
import Footer from "../components/Footer";
import Header1 from "../components/Header1";
import { ImageTexts } from "../components/ImageTexts";

export default function Lifestyle() {
  const [searchParams]= useSearchParams();
  const downloadWynkModalIsOpen = searchParams.get('downloadWynkModalIsOpen') === 'true'? true : false;
  const navigate = useNavigate();
  function openDownloadWynkModal () {
    navigate('/lifestyle?downloadWynkModalIsOpen=true');
  }
  return (
    <>
      <section className="main-section bg-wynkPurple-100">
        <Header1/>
      </section>
      <section className="main-section bg-no-repeat bg-contain sm:bg-cover min-h-[80vh] text-white flex flex-col gap-6 items-center justify-center  " style={{ 
        background: "url(/images/plain-lifestyle-hero-bg.png)", 
        }}>
          <p className="text-[24px] font-medium text-center">Lifestyle</p>
          <p className="text-[48px] font-medium text-center">A seamless blend of convenience, style, and adventure, all under one roof.</p>
      </section>
      <section className="main-section section-inner-padding bg-wynkOffWhite flex flex-col gap-6 items-center">
        <p className="text-[24px] sm:text-[30px] font-medium text-center w-4/5">Whether you're a seasoned traveler, a shopaholic, a food enthusiast, or a social butterfly, we've got you covered!</p>
        <img src="/images/wynk-lifestyle-services-frame.png" alt="lifestyle services component"/>
      </section>
      <section className="main-section section-inner-padding bg-wynkPurple-100">
      <div className="px-8 md:px-16 flex items-center gap-4">
        <div className="flex items-start flex-col gap-2 md:w-1/2">
          <h3 className="bg-orange-500 bg-opacity-10 text-orange-500 text-sm sm:text-lg text-center font-bold p-2 md:p-4 rounded-full">Wynk Marketplace</h3>
          <p className="sm:text-[38px] font-bold">Secure Shopping, Worry-Free Payments</p>
          <p className="sm:text-[18px] text-[#212529] mb-4">Say goodbye to the uncertainties of "Payment on Delivery" issues. With our Buyer’s Protection Feature, we've redefined the way you shop online.</p>
          <button className="download-the-app-button"
          onClick={openDownloadWynkModal}
          >Get the app</button>
          {downloadWynkModalIsOpen? <DownloadWynkModal/> : null}
        </div>
        <div className="md:w-1/2">
          <img src="/images/shopping-phone-component.png" alt="phone shopping screen"/>
        </div>
      </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkOffWhite">
      <div className="px-6 md:px-12 flex items-center gap-16">
        <div className="md:w-1/2">
          <img src="/images/flight-booking-phone-component.png" alt="flight booking phone screen"/>
        </div>
        <div className="flex flex-col items-start gap-2 md:w-1/2">
          <h3 className="bg-orange-500 bg-opacity-10 text-orange-500 text-sm sm:text-lg text-center font-bold p-2 sm:p-4 rounded-full">Flight Booking</h3>
          <p className="sm:text-[38px] font-bold">Soar to New Horizons!</p>
          <p className="sm:text-[18px] text-[#212529] mb-4">Get ready to take flight! With Wynk, you can effortlessly plan your next voyage. Discover the world's most iconic destinations or embark on a spontaneous getaway.</p>
          <button className="download-the-app-button"
          onClick={openDownloadWynkModal}
          >Get the app</button>
          {downloadWynkModalIsOpen? <DownloadWynkModal/> : null}
        </div>
      </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkPurple-100 justify-center items-center flex flex-col gap-8">
      <h3 className="bg-orange-500 bg-opacity-10 text-orange-500 text-sm sm:text-lg text-center font-bold p-2 sm:p-4 rounded-full ">Food & Drinks</h3>
      <p className="text-[24px] sm:text-[38px] text-center">Satisfy Your Cravings!</p>
      <p className="text-[14px] sm:text-[18px] text-center sm:w-1/2 mb-2">Craving your favourite cuisine or a refreshing drink? With Wynk, ordering food and drinks is a breeze in just three simple steps</p>
      <div className="food-drinks-services flex flex-col md:flex-row items-center justify-center gap-6">
        <ImageTexts
        image='food-drinks-presentation-1.svg'
        header='Explore a World of Options'
        paragraph='Open the App & browse through the extensive range of restaurant and bars.'
        />
        <ImageTexts
        image='food-drinks-presentation-2.svg'
        header='Customize Your Order'
        paragraph='Select how much of the item you want to order from the seller on Wynk'
        />
        <ImageTexts
        image='food-drinks-presentation-3.svg'
        header='Secure and Convenient Delivery'
        paragraph='Sit back and relax as your order is swiftly prepared and dispatched to your location.'
        />
      </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkOffWhite">
      <div className="px-6 md:px-12 flex items-center gap-16">
        <div className="md:w-1/2">
          <img src="/images/wynk-social-assets.png" alt="wynk social media"/>
        </div>
        <div className="flex flex-col items-start gap-2 md:w-1/2">
          <h3 className="bg-orange-500 bg-opacity-10 text-orange-500 text-sm sm:text-lg text-center font-bold p-2 sm:p-4 rounded-full w-1/2 sm:w-2/5">Wynk Social</h3>
          <p className="sm:text-[38px] font-bold">Stay Connected and Share the Magic!</p>
          <p className="sm:text-[18px] text-[#212529] mb-4">Wynk isn't just about transactions; it's about connection. Share your experiences with friends, family, and the world! Keep your social life vibrant and alive.</p>
          <button className="download-the-app-button"
          onClick={openDownloadWynkModal}
          >Get the app</button>
          {downloadWynkModalIsOpen? <DownloadWynkModal/> : null}
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
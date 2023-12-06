import { useNavigate, useSearchParams } from "react-router-dom";
import DownloadWynkModal from "../components/DownloadWynkModal";
import DownloadWynk from "../components/DownloadWynk";
import Footer from "../components/Footer";
import Header1 from "../components/Header1";
import { ImageTexts } from "../components/ImageTexts";
import Header1Mobile from "../components/Header1Mobile";
import { IconTexts } from "../components/IconTexts";

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
        <Header1Mobile/>
      </section>
      <section className="main-section lifestyle-hero min-h-[80vh] text-white flex flex-col gap-6 items-center justify-center">
          <p className="text-[16px] sm:text-[24px] font-medium text-center">Lifestyle</p>
          <p className="text-[34px] sm:text-[48px] font-medium text-center">A seamless blend of convenience, style, and adventure, all under one roof.</p>
      </section>
      <section className="main-section section-inner-padding bg-wynkOffWhite flex flex-col gap-6 items-center">
        <p className="text-[24px] sm:text-[30px] font-medium text-center w-4/5">Whether you're a seasoned traveler, a shopaholic, a food enthusiast, or a social butterfly, we've got you covered!</p>
        <div className="sm:w-[75%] flex items-center flex-col sm:flex-row gap-8">
          <div className="flex flex-col gap-8">
            <IconTexts
            bgColor='#DAE4FF'
            icon='shopping-bag-icon.svg'
            header='Online Marketplace'
            paragraph='With just a few clicks, your wish-list items can be on their way to your doorstep.'
            />
            <IconTexts
            bgColor='#FFF1D5'
            icon='flight-icon.svg'
            header='Book a Flight'
            paragraph='Discover destinations near and far, plan your trips, and book your flights seamlessly.'
            />
          </div>
          <div className="flex flex-col gap-8 sm:mt-[20px]">
            <IconTexts
            bgColor='#DDFBDE'
            icon='sandwich-n-drinks-icon.svg'
            header='Order Food & Drinks'
            paragraph='Savor diverse cuisines, mouthwatering dishes, and delicious drinks anytime.'
            />
            <IconTexts
            bgColor='#DAE4FF'
            icon='flight-icon.svg'
            header='Social Interaction'
            paragraph='Stay connected and share the moments that make life memorable'
            />
          </div>
          <div className="flex flex-col gap-8">
            <IconTexts
            bgColor='#FDE3E3'
            icon='hotel-icon.svg'
            header='Book a Hotel'
            paragraph='Explore a world of options. Your dream getaway is just a reservation away.'
            />
            <IconTexts
            bgColor='#FFF1D5'
            icon='music-note-icon.svg'
            header='Vibes & Rhythm'
            paragraph="Music is the heartbeat of your lifestyle, and we've got the perfect rhythm."
            />
          </div>
        </div>
      </section>
      <section className="main-section section-inner-padding bg-wynkPurple-100">
      <div className="md:px-16 flex flex-col md:flex-row items-center gap-12 sm:gap-4">
        <div className="flex flex-col items-center md:items-start gap-2 md:w-1/2">
          <h3 className="bg-orange-500 bg-opacity-10 text-orange-500 text-sm sm:text-lg text-center font-bold p-4 rounded-full">Wynk Marketplace</h3>
          <p className="text-[28px] sm:text-[38px] text-center md:text-start font-bold">Secure Shopping, Worry-Free Payments</p>
          <p className="text-[18px] text-center md:text-start text-[#212529] mb-4">Say goodbye to the uncertainties of "Payment on Delivery" issues. With our Buyer’s Protection Feature, we've redefined the way you shop online.</p>
          <button className="download-the-app-button"
          onClick={openDownloadWynkModal}
          >Get the app</button>
          {downloadWynkModalIsOpen? <DownloadWynkModal/> : null}
        </div>
        <div className="w-full md:w-1/2">
          <img src="/images/shopping-phone-component.png" alt="phone shopping screen"/>
        </div>
      </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkOffWhite">
      <div className=" md:px-12 flex flex-col md:flex-row gap-16">
        <div className="md:w-1/2">
          <img src="/images/flight-booking-phone-component.png" alt="flight booking phone screen"/>
        </div>
        <div className="flex flex-col items-center md:items-start md:w-1/2">
          <h3 className="bg-orange-500 bg-opacity-10 text-orange-500 text-sm sm:text-lg text-center font-bold p-2 sm:p-4 rounded-full">Flight Booking</h3>
          <p className="text-[28px] sm:text-[38px] text-center md:text-start font-bold">Soar to New Horizons!</p>
          <p className="text-[18px] text-center sm:text-start text-[#212529] mb-4">Get ready to take flight! With Wynk, you can effortlessly plan your next voyage. Discover the world's most iconic destinations or embark on a spontaneous getaway.</p>
          <button className="download-the-app-button"
          onClick={openDownloadWynkModal}
          >Get the app</button>
          {downloadWynkModalIsOpen? <DownloadWynkModal/> : null}
        </div>
      </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkPurple-100 justify-center items-center flex flex-col gap-8">
      <h3 className="bg-orange-500 bg-opacity-10 text-orange-500 text-sm sm:text-lg text-center font-bold p-2 sm:p-4 rounded-full ">Food & Drinks</h3>
      <p className="text-[28px] sm:text-[38px] text-center font-bold">Satisfy Your Cravings!</p>
      <p className="text-[18px] text-center sm:w-1/2 mb-2">Craving your favourite cuisine or a refreshing drink? With Wynk, ordering food and drinks is a breeze in just three simple steps</p>
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
      <div className="px-6 md:px-12 flex flex-col sm:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <img src="/images/wynk-social-assets.png" alt="wynk social media"/>
        </div>
        <div className="flex flex-col items-center sm:items-start gap-2 md:w-1/2">
          <h3 className="bg-orange-500 bg-opacity-10 text-orange-500 text-sm sm:text-lg text-center font-bold p-4 rounded-full sm:w-2/5">Wynk Social</h3>
          <p className="text-center sm:text-start text-[28px] sm:text-[38px] font-bold">Stay Connected and Share the Magic!</p>
          <p className="text-center sm:text-start text-[#212529] mb-4">Wynk isn't just about transactions; it's about connection. Share your experiences with friends, family, and the world! Keep your social life vibrant and alive.</p>
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
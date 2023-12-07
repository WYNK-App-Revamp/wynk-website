import { useNavigate, useSearchParams } from "react-router-dom";
import DownloadWynkModal from "../components/DownloadWynkModal";
import DownloadWynk from "../components/DownloadWynk";
import Footer from "../components/Footer";
import Header1 from "../components/Header1";
import Header1Mobile from "../components/Header1Mobile";
import { IconTexts, IconTextsCard } from "../components/IconTexts";
import { ImageTexts } from "../components/ImageTexts";

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
    <section className="main-section bg-wynkOffWhite scheme-hero-section section-inner-padding flex flex-col lg:flex-row items-center gap-8">
      <div className="w-full lg:w-1/2 flex flex-col sm:gap-6">
        <p className="text-lg sm:text-2xl">Merchants</p>
        <h2 className="font-bold text-[34px] sm:text-5xl mb-5">Your Time, Your Goals, <span className="text-wynkPurple-200">You're in Charge!</span></h2>
        <p className=" text-base sm:text-xl mb-5 sm:w-[90%]">Be a part of our platform. You can sell your offerings on Wynk and trust us to handle the logistics.</p>
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
        <h2 className="text-center text-[28px] sm:text-4xl font-bold leading-none">Why Sell on Wynk?</h2>
        <p className="text-base sm:text-lg text-center w-full sm:w-3/4">Are you a vendor eager to bring your products to a broader audience while ensuring smooth, worry-free deliveries? Look no further!</p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
        <IconTexts
        bgColor='white'
        icon='wider-audience-icon.svg'
        header='Wider Audience'
        paragraph='Our platform opens the door to a diverse and expansive customer base'
        />
        <IconTexts
        bgColor='white'
        icon='wad-of-money-icon.svg'
        header='Secure Payment'
        paragraph='We make sure that your earnings are transferred promptly.'
        />
        <IconTexts
        bgColor='white'
        icon='bus-icon.svg'
        header='Hassle-Free Delivery'
        paragraph='We are efficient and reliable, leaving you free to focus on what you do best.'
        />
        <IconTexts
        bgColor='white'
        icon='hands-money-icon.svg'
        header='Commissions, No Cost'
        paragraph='You pay a commission only when you make a sale. We grow as you grow.'
        />
      </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkOffWhite flex flex-col gap-16">
      <div className="flex flex-col gap-6">
        <img className="rounded-2xl" src="/images/man-with-receipts.png" alt="man with receipts"/>
        <h2 className="text-[28px] sm:text-4xl font-bold leading-none">Wynk, the Ultimate destination for Merchants</h2>
        <p className="text-[18px] w-full lg:w-3/5">If you are looking to broaden your horizons and reach a vast audience of eager customers? Wynk offers you the perfect platform to showcase your products and mouthwatering dishes, expanding your business in the digital age.</p>
      </div>
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-2xl sm:text-[32px] font-bold leading-none">Who are Wynk Merchants?</h2>
        <div className="flex flex-col sm:flex-row gap-8">
          <IconTextsCard
          bgColor='#EFEFEF'
          icon='burger.svg'
          header='Food & Drinks Vendors'
          paragraph='Wynk is the home for food vendors. From street food stalls to gourmet restaurants, food vendors use Wynk to sell and showcase their culinary products.'
          />
          <IconTextsCard
          bgColor='#EFEFEF'
          icon='cafe.svg'
          header='Local Shop Owners'
          paragraph='From fashion boutiques to electronics stores, from craft workshops to bookshops, shop owners use Wynk to extend their reach and connect with a broader audience.'
          />
        </div>
      </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkPurple-100">
      <div className="lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <img src="/images/my-shop-phone-screen.png" alt="my shop phone screen"/>
        </div>
        <div className="flex flex-col [&>*]:text-center  lg:[&>*]:text-start items-center lg:items-start gap-2 lg:w-1/2">
          <p className="text-[28px] sm:text-[38px] font-bold">Open Your Shop and Thrive on the Wynk Marketplace!</p>
          <p className="text-[18px] text-[#212529] mb-4">Are you an aspiring entrepreneur or an established business looking to reach a broader audience, you've come to the right place.</p>
          <button className="download-the-app-button"
          onClick={openDownloadWynkModal}
          >Get the app</button>
          {downloadWynkModalIsOpen? <DownloadWynkModal/> : null}
        </div>
      </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkOffWhite">
      <div className="lg:px-16 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex flex-col [&>*]:text-center  lg:[&>*]:text-start items-center lg:items-start gap-2 lg:w-1/2">
          <p className="text-[28px] sm:text-[38px] font-bold">Effortless Order Tracking for Wynk merchants</p>
          <p className="text-[18px] text-[#212529] mb-4">At Wynk, we understand that staying on top of your orders is crucial for a smooth and successful business operation, whether you're a food vendor or a shop owner.</p>
          <button className="download-the-app-button"
          onClick={openDownloadWynkModal}
          >Get the app</button>
          {downloadWynkModalIsOpen? <DownloadWynkModal/> : null}
        </div>
        <div className="lg:w-1/2">
          <img src="/images/order-tracking-phone-screen.png" alt="Effortless Order Tracking phone screen"/>
        </div>
      </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkPurple-100 flex flex-col items-center gap-8">
      <p className="text-[28px] sm:text-[38px] text-center">How to Deliver with Wynk</p>
      <p className="text-[18px] text-center lg:w-1/2 mb-2">Wynk Merchants can access safe and seamless item deliveries from our community of Expert Riders. Follow these 3 simple steps to set your instant Delivery in motion:</p>
      <div className="flex flex-col lg:flex-row items-center justify-between sm:px-8">
        <ImageTexts
        image='enter-delivery-location.svg'
        header='Enter Delivery Location'
        paragraph='Search the location of where you would like to send the item to'
        />
        <ImageTexts
        image='leave-note-for-driver.svg'
        header='Leave the Driver a Note'
        paragraph='Add an important note for the delivery driver you’ve chosen.'
        />
        <ImageTexts
        image='add-senders-info.svg'
        header='Add Sender’s Info'
        paragraph='Sit back and relax as your order is swiftly prepared and dispatched to your location.'
        />
      </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkOffWhite">
      <DownloadWynk/>
    </section>
    <Footer/>
    </>
  );
}
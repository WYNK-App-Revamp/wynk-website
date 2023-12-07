import { useNavigate, useSearchParams } from "react-router-dom";
import DownloadWynkModal from "../components/DownloadWynkModal";
import DownloadWynk from "../components/DownloadWynk";
import Footer from "../components/Footer";
import Header1 from "../components/Header1";
import Header1Mobile from "../components/Header1Mobile";
import { CarpoolMultiplePassengersCard, EarnAsYouDriveCard, SignUpAsAWynkCaptainCard } from "../components/DriveAsACaptainCards";
import { IconTexts4 } from "../components/IconTexts";

export default function Rides () {
  const [searchParams]= useSearchParams();
  const downloadWynkModalIsOpen = searchParams.get('downloadWynkModalIsOpen') === 'true'? true : false;
  const navigate = useNavigate();
  function openDownloadWynkModal () {
    navigate('/rides?downloadWynkModalIsOpen=true');
  }
  return (
    <>
      <section className="main-section bg-wynkPurple-100">
        <Header1/> 
        <Header1Mobile/>
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
      <h2 className="font-bold text-[24px] sm:text-[38px] lg:w-[65%] text-center mt-[20%] sm:mt-[15%]">Your Ultimate Ride-Hailing Experience, with Advanced Features.</h2>
      <button className="download-the-app-button"
      onClick={openDownloadWynkModal}
      >Get the app</button>
      {downloadWynkModalIsOpen? <DownloadWynkModal/> : null}
      <div className="md:w-[55%] lg:w-[80%] flex items-center flex-col lg:flex-row  gap-8">
          <div className="flex flex-col items-center gap-8 sm:mt-[20px] lg:w-1/2">
            <IconTexts4
            bgColor='white'
            icon='ride-code-icon.svg'
            header='Ride code'
            paragraph='We make it easy to identify your pickup driver with a code, making it safe to ride in comfort.'
            />
            <IconTexts4
            bgColor='white'
            icon='record-rides.svg'
            header='Audio/Video record rides'
            paragraph='For your safety, you can record your rides on the go and share with anyone.'
            />
          </div>
          <div className="flex flex-col  items-center gap-8 lg:w-1/2">
            <IconTexts4
            bgColor='white'
            icon='share-rides-icon.svg'
            header='Share Rides'
            paragraph='Split ride fares with other Patrons and enjoy affordable ride offerings just for you.'
            />
            <IconTexts4
            bgColor='white'
            icon='schedule-rides.svg'
            header='Schedule Rides'
            paragraph='Need to be on time for a meeting? book and save rides ahead of time.'
            />
          </div>
        </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkOffWhite">
      <div className="px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex flex-col items-center lg:items-start gap-2 lg:w-1/2">
          <p className="sm:text-[38px] text-center lg:text-start font-bold">Go wherever you want hassle free!</p>
          <p className="sm:text-[18px] text-center lg:text-start text-[#212529] mb-4">With Wynk, your daily commute becomes an opportunity to connect, save, and ensure your safety.</p>
          <button className="download-the-app-button"
          onClick={openDownloadWynkModal}
          >Get the app</button>
          {downloadWynkModalIsOpen? <DownloadWynkModal/> : null}
        </div>
        <div className="lg:w-1/2">
          <img src="/images/flight-booking-phone-component.png" alt="flight booking phone screen"/>
        </div>
      </div>
    </section>
    <section className="main-section section-inner-padding flex flex-col items-center gap-4 bg-wynkPurple-100">
      <div className="flex flex-col items-center gap-6">
        <h3 className="bg-orange-500 bg-opacity-10 text-orange-500 text-sm sm:text-base text-center font-bold p-2 sm:p-4 rounded-full">Wynk captain</h3>
        <p className="text-[28px] sm:text-[38px] text-center font-bold sm:w-3/5">Drive and earn as a captain with Wynk!</p>
        <p className="text-[18px] text-[#212529] mb-4 w-full sm:w-3/5 text-center">As a car owner, you can sign up with us a captain and earn while accepting in-app ride requests. It’s that easy!</p>
        <a href="/share-ownership"><button className="download-the-app-button mb-4">Learn More</button></a>
      </div>
      <div className="flex flex-col gap-6 sm:px-12">
        <div>
          <SignUpAsAWynkCaptainCard/>
        </div>
        <div className="flex flex-col lg:flex-row  gap-6">
          <EarnAsYouDriveCard/>
          <CarpoolMultiplePassengersCard/>
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
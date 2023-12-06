import { useNavigate, useSearchParams } from "react-router-dom";
import DownloadWynk from "../components/DownloadWynk";
import Footer from "../components/Footer";
import Header2 from "../components/Header2";
import ServicesComponentsSwapper from "../components/ServicesComponentsSwapper";
import DownloadWynkModal from "../components/DownloadWynkModal";
import {IconTexts, IconMetrics } from "../components/IconTexts";
import Header2Mobile from "../components/Header2Mobile";

function Home() {
  const [searchParams]= useSearchParams();
  const downloadWynkModalIsOpen = searchParams.get('downloadWynkModalIsOpen') === 'true'? true : false;
  const navigate = useNavigate();
  function openDownloadWynkModal () {
    navigate('/?downloadWynkModalIsOpen=true');
  }

  return (
    <main>
    <section 
    className="main-section home-hero sm:min-h-screen text-white" 
     >
      <Header2/>
      <Header2Mobile/>
      <section className="scheme-hero-section section-inner-padding flex gap-12">
        <div className="w-full sm:w-7/12">
          <h2 className="font-bold text-4xl sm:text-6xl mb-5 sm:pr-2">Connecting Lifestyle to Limitless Possibilities</h2>
          <p className=" text-[16px] sm:text-xl mb-5 max-w-xl">A seamless blend of convenience, style, and adventure, all under one roof.</p>
          <div className="call-to-actions flex gap-4">
            <button className="download-the-app-button"
            onClick={openDownloadWynkModal}
            >Get the app</button>
            {downloadWynkModalIsOpen? <DownloadWynkModal/> : null}
          </div>
        </div>
      </section>
    </section>
    <section className="main-section section-inner-padding bg-wynkOffWhite">
      <ServicesComponentsSwapper/>
    </section>
    <section className="main-section section-inner-padding bg-wynkPurple-100 flex flex-col">
      <div className="hero-text items-center flex flex-col gap-4 mb-10 sm:mb-20">
        <h2 className="text-center text-2xl sm:text-4xl font-bold leading-none">Explore Access without Limits</h2>
        <p className="text-sm sm:text-lg text-center w-4/5 sm:w-3/4">WynkStars including Consumers, Captains, Merchants, and Businesses can explore boundless access to a variety of services on the Wynk Lifestyle Super App.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <IconTexts
        bgColor='white'
        icon='consumers-card-icon.svg'
        header='Consumers'
        paragraph='Access payments, rides and lifestyle services easily'
        />
        <IconTexts
        bgColor='white'
        icon='captains-card-icon.svg'
        header='Captains'
        paragraph='Unlock wealth deal for Drivers looking to earn more'
        />
        <IconTexts
        bgColor='white'
        icon='merchants-card-icon.svg'
        header='Merchants'
        paragraph='For sellers and vendors looking to offer their services'
        />
        <IconTexts
        bgColor='white'
        icon='businesses-card-icon.svg'
        header='Businesses'
        paragraph='For commercial businesses looking to scale up'
        />
      </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkOffWhite flex flex-col gap-6 sm:gap-16 items-center">
      <div>
        <h3 className="bg-orange-500 bg-opacity-10 text-orange-500 sm:text-lg font-bold p-4 rounded-full">Why choose us</h3>
      </div>
      <div className="hero-text justify-center flex flex-col gap-4">
        <h2 className="text-center text-2xl sm:text-4xl font-bold leading-none">More than 5,000+ Users Trust Us</h2>
        <p className="text-sm sm:text-lg text-center sm:px-24">We’ve built a Community of Consumers, Captains, Merchants, and Businesses who rely on Wynk for innovative solutions across Rides, Payments, and Lifestyle Services.</p>
      </div>
      <div className="w-full sm:w-3/5 flex items-center flex-col gap-4">
        <img className="rounded-lg" src="/images/wynk-super-app-youtube-image.png" alt="youtube link"/>
      </div>
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <IconMetrics
        icon='payments-icon.svg'
        header='300k+'
        paragraph='Total payments processed'
        />
        <IconMetrics
        icon='rides-icon.svg'
        header='20k+'
        paragraph='Total rides completed'
        />
        <IconMetrics
        icon='users-icon.svg'
        header='5k+'
        paragraph='Total patrons & captains'
        />
        
      </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkOffWhite">
      <DownloadWynk/>
    </section>
    <Footer/>
    </main>
  );
}

export default Home;

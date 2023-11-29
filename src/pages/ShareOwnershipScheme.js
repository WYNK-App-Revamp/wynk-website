import { useNavigate, useSearchParams } from "react-router-dom";
import DownloadWynk from "../components/DownloadWynk";
import Footer from "../components/Footer";
import Header from "../components/Header1";
import LoginModal from "../components/LoginModal";

function ShareOwnershipScheme() {
  const [searchParams]= useSearchParams();
  const login = searchParams.get('login') === 'true'? true : false;
  const navigate = useNavigate();
  function openLoginModal () {
    navigate('/share-ownership?login=true');
  }
  return (
    <>
    <section className="main-section bg-wynkPurple-100">
      <Header/>
      <section className="scheme-hero-section section-inner-padding flex items-center gap-4">
        <div className="w-3/4 flex flex-col items-start">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-[64px] md:leading-none mb-5"> <span className="text-wynkPurple-200">Share Ownership</span> scheme for Captains</h2>
          <p className=" text-sm sm:text-xl mb-5 sm:max-w-xl">Get exclusive opportunity to be one of 5,000 Captains to benefit in the share ownership initiative which aims to reward dedicated and high performing Captains</p>
          <div className="call-to-actions flex flex-start gap-4">
            <a href="https://play.google.com/store/apps/details?id=ng.wynk.wynksupappsupapp&pli=1" target="_blank" rel="noreferrer">
              <button className="download-the-app-button">Download the app</button>
            </a>
            <button
            onClick={openLoginModal} 
            className="border-wynkPurple-200 border rounded-md h-12 sm:py-3 sm:px-6 flex items-center text-center text-base sm:text-xl text-wynkPurple-200">Log in</button>
            <div>
              {login? <LoginModal/> : null}
            </div>
          </div>
        </div>
        <div>
          <img src="/images/unsplash_ELJM628U4Jk.png" alt="smiling wynk captain" className="rounded-xl sm:min-h-full sm:min-w-full"/>
        </div>
      </section> 
    </section>
    <section className="main-section section-inner-padding bg-wynkOffWhite flex flex-col gap-8 items-center">
      <div>
        <h3 className="bg-orange-500 bg-opacity-10 text-orange-500 text-sm sm:text-lg font-bold p-4 rounded-full">About the Scheme</h3>
      </div>
      <div className="hero-text items-center sm:px-12 flex flex-col gap-4">
        <h2 className="text-center text-xl sm:text-4xl font-bold leading-none">Why Join the Scheme?</h2>
        <p className="text-sm sm:text-lg text-center sm:w-3/5">The Scheme offers numerous benefits to participating drivers, enhancing their financial well-being and offering opportunities for growth</p>
      </div>
      <section className="why-join-the-scheme">
        <div className="scheme-points">
          1
        </div>
        <div className="flex flex-col gap-5 ">
          <p className="font-bold">Collateral for Loans</p>
          <p>After 12 months of ownership, drivers can utilize their shares as collateral for securing loans. This provision gives Captains access to additional financial resources, empowering them to invest in personal or professional endeavors.</p>
          <img className="rounded-xl w-3/4" src="/images/handshake.png" alt="handshake"/>
        </div>
      </section>
      <section className="why-join-the-scheme">
        <div className="scheme-points">
          2
        </div>
        <div className="flex flex-col gap-5 ">
          <p className="font-bold">Car Ownership Scheme</p>
          <p>Participating Captains will have the opportunity to utilize their shares as collateral for participation in a car ownership scheme. This exclusive benefit aims to support Captains in becoming independent car owners, nurturing their entrepreneurial aspirations.</p>
          <img className="rounded-xl w-3/4" src="/images/handsome-elegant-man.png" alt="handshake"/>
        </div>
      </section>
      <section className="why-join-the-scheme">
        <div className="scheme-points">
          3
        </div>
        <div className="flex flex-col gap-5 ">
          <p className="font-bold">Secondary Share Market</p>
          <p>After 12 months of active participation, Captains can also engage in buying and selling shares from other participating drivers. This feature allows for enhanced liquidity and the potential for Captains to acquire additional shares over time.</p>
          <img className="rounded-xl w-3/4" src="/images/happy-business-man.png" alt="handshake"/>
        </div>
      </section>
      <section className="why-join-the-scheme">
        <div className="scheme-points">
          4
        </div>
        <div className="flex flex-col gap-5 ">
          <p className="font-bold">Exit Option</p>
          <p>After one year of participation, Captains have the option to exit the scheme at an agreed valuation. The Wynk Ride scheme will facilitate a buy-back, ensuring Captains can monetize their shares when desired.</p>
          <img className="rounded-xl w-3/4" src="/images/closeup-delivery-person.png" alt="handshake"/>
        </div>
      </section>
    </section>
    <section className="main-section section-inner-padding bg-wynkPurple-100 flex flex-col gap-8 items-center mb-2">
      <div className="flex flex-col gap-6 sm:px-36">
        <h3 className="text-center text-4xl font-bold">To Become Eligible</h3>
        <div className="flex flex-col gap-6 items-center">
        <p className="w-4/5 text-center">To be eligible for the share ownership scheme, Captains must comply with the following conditions:</p>
        <a href="https://play.google.com/store/apps/details?id=ng.wynk.wynksupappsupapp&pli=1" target="_blank" rel="noreferrer">
        <button className="download-the-app-button">Download the app</button>
        </a>
        </div>
      </div>
      <section className="flex justify-center flex-col sm:flex-row flex-wrap gap-4">
        <div className="how-to-be-eligible-cards">
        <div><p className="orange-scheme-points">1</p></div>
          <p className="font-bold">Become a Captain</p>
          <p>Wynk is the home for food vendors. From street food stalls to gourmet restaurants, food vendors use Wynk to sell and showcase their culinary products.</p>    
        </div>
        <div className="how-to-be-eligible-cards">
        <div><p className="orange-scheme-points">2</p></div>
          <p className="font-bold">Average Rating</p>
          <p>Maintaining a minimum average rating of 4 stars for the first year ensuring Captains who consistently provide excellent service to passengers are eligible for participation.</p>    
        </div>
        <div className="how-to-be-eligible-cards">
          <div><p className="orange-scheme-points">3</p></div>
          <p className="font-bold">Ride Frequency</p>
          <p>Completing more than an average of 5 rides per day for the initial 6 months allowing Captains who proactively engage in driving activities and contribute to the growth of the platform.</p>    
        </div>
        <div className="how-to-be-eligible-cards">
        <div><p className="orange-scheme-points">4</p></div>
          <p className="font-bold">Ride Consistency</p>
          <p>Maintaining an average of 10 rides per day for the subsequent 6 months emphasising the importance of commitment and productivity in order to benefit from the scheme.</p>    
        </div>
      </section>
    </section>
    <section className="main-section section-inner-padding bg-wynkOffWhite">
      <DownloadWynk/>
    </section>
    <Footer/>
    </>
  );
}

export default ShareOwnershipScheme;

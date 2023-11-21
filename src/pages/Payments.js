import DownloadWynk from "../components/DownloadWynk";
import Footer from "../components/Footer";
import Header1 from "../components/Header1";


function Payments() {
  return (
    <main>
    <section className="main-section bg-wynkPurple-100 min-h-screen" style={{ 
      }}>
      <Header1/>
      <section className="section-inner-padding flex flex-col gap-12">
        <div className="w-4/5 flex flex-col gap-6">
          <p className="text-2xl">Payments</p>
          <h2 className="font-bold text-4xl sm:text-6xl"><span className="text-wynkPurple-200">Move money</span> around easily. Send, receive money and pay bills conveniently.</h2>
        </div>
        <div className="flex flex-col gap-12">
          <img className="rounded-xl" src="/images/business-man-talking.png" alt="man smiling"/>
          <p className="text-center text-[#212529] text-3xl px-20">Wynk Vault give you access to a plethora of services that allow you pay bills easily. From sending and receiving money to buy airtime, date and recharging your outlets.</p>
        </div>
      </section>
    </section>
    <section className="main-section section-inner-padding bg-wynkOffWhite">
      <div className="md:px-24 flex items-center md:gap-32">
        <div>
          <img src="/images/phone-transfer-screen.png" alt="phone transfer screen"/>
        </div>
        <div className="flex flex-col gap-2 md:w-1/2">
          <p className="text-[38px]">Send and Receive money</p>
          <p className="text-[18px] text-[#212529] mb-4">The Wynk super app provides a variety of services to all users, including customers, captains, merchants, and businesses.</p>
          <button className="download-the-app-button w-2/5">Get the app</button>
        </div>
      </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkOffWhite">
      <DownloadWynk/>
    </section>
    <Footer/>
    </main>
  );
}

export default Payments;

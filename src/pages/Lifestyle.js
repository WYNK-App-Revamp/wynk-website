import Header1 from "../components/Header1";

export default function Lifestyle() {
  return (
    <>
      <section className="main-section">
        <Header1/>
      </section>
      <section className="main-section min-h-screen text-white flex flex-col gap-6" style={{ 
      background: "linear-gradient(0deg, rgba(0, 0, 0, 0.48) 0%, rgba(0, 0, 0, 0.48) 100%), url(/images/lifestyle-hero-bg), lightgray 50% / cover no-repeat;", 
      /*backgroundSize: 'cover',*/
      }}>
        <p className="text-[24px] font-medium">Lifestyle</p>
        <p className="text-[48px] font-medium text-center">A seamless blend of convenience, style, and adventure, all under one roof.</p>
      </section>
      <section className="flex flex-col gap-6">
        <p className="text-[30px] font-medium text-center">Whether you're a seasoned traveler, a shopaholic, a food enthusiast, or a social butterfly, we've got you covered!</p>
        <img alt="lifestyle services component"/>
      </section>
      <section className="main-section section-inner-padding bg-wynkPurple-100">
      <div className="md:px-16 flex items-center gap-4">
        <div className="flex flex-col gap-2 md:w-1/2">
          <p className="text-[38px] font-bold">Pay Bills Conveniently</p>
          <p className="text-[18px] text-[#212529] mb-4">The Wynk super app provides a variety of services to all users, including customers, captains, merchants, and businesses.</p>
          <button className="download-the-app-button w-2/5">Get the app</button>
        </div>
        <div className="md:w-1/2">
          <img src="/images/pay-bills-assets.png" alt="phone transfer screen"/>
        </div>
      </div>
    </section>
    <section className="main-section section-inner-padding bg-wynkOffWhite">
      <div className="md:px-12 flex items-center gap-16">
        <div className="md:w-1/2">
          <img src="/images/transfer-assets.png" alt="phone transfer screen"/>
        </div>
        <div className="flex flex-col gap-2 md:w-1/2">
          <p className="text-[38px] font-bold">Send and Receive money</p>
          <p className="text-[18px] text-[#212529] mb-4">The Wynk super app provides a variety of services to all users, including customers, captains, merchants, and businesses.</p>
          <button className="download-the-app-button w-2/5">Get the app</button>
        </div>
      </div>
    </section>
    </>
  );
}
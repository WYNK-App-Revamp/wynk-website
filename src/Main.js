function Main() {
  return (
    <>
    <section className="main-section bg-wynkPurple-100">
      <section className="scheme-hero-section py-2 px-8 sm:py-20 sm:px-28 flex">
        <div className="w-3/4">
          <h2 className="font-bold text-4xl sm:text-7xl mb-5"> <span className="text-wynkPurple-200">Share Ownership</span> scheme for Captains</h2>
          <p className=" text-sm sm:text-xl mb-5 max-w-xl">Get exclusive opportunity to be one of 5,000 Captains to benefit in the share ownership initiative which aims to reward dedicated and high performing Captains</p>
          <div className="call-to-actions flex gap-4">
            <button className="bg-wynkPurple-200 rounded-md h-12 py-3 px-6 flex items-center text-xl text-white">Download the app</button>
            <button className="border-wynkPurple-200 border rounded-md h-12 py-3 px-6 flex items-center text-xl text-wynkPurple-200">Log in</button>
          </div>
        </div>
        <div>
          <img src="/images/unsplash_ELJM628U4Jk.png" alt="smiling wynk captain" className="rounded-xl min-h-full min-w-full"/>
        </div>
      </section> 
    </section>
    <section className="main-section bg-wynkOffWhite flex flex-col gap-8 items-center py-2 px-8 sm:py-20 sm:px-28">
      <div>
        <h3 className="bg-orange-500 bg-opacity-10 text-orange-500 text-lg font-bold p-4 rounded-full">About the Scheme</h3>
      </div>
      <div className="hero-text px-52 flex flex-col gap-4">
        <h2 className="text-center text-4xl font-bold leading-none">Why Join the Scheme?</h2>
        <p className="text-lg text-center">The Scheme offers numerous benefits to participating drivers, enhancing their financial well-being and offering opportunities for growth</p>
      </div>
      <section className="why-join-the-scheme">
        <div className="scheme-points">
          1
        </div>
        <div className="flex flex-col gap-5 ">
          <p className="font-bold">Collateral for Loans</p>
          <p>After 12 months of ownership, drivers can utilize their shares as collateral for securing loans. This provision gives Captains access to additional financial resources, empowering them to invest in personal or professional endeavors.</p>
          <img src="/images/unsplash_ELJM628U4Jk.png" alt="handshake"/>
        </div>
      </section>
      <section className="why-join-the-scheme">
        <div className="scheme-points">
          2
        </div>
        <div className="flex flex-col gap-5 ">
          <p className="font-bold">Car Ownership Scheme</p>
          <p>Participating Captains will have the opportunity to utilize their shares as collateral for participation in a car ownership scheme. This exclusive benefit aims to support Captains in becoming independent car owners, nurturing their entrepreneurial aspirations.</p>
          <img src="/images/unsplash_ELJM628U4Jk.png" alt="handshake"/>
        </div>
      </section>
      <section className="why-join-the-scheme">
        <div className="scheme-points">
          3
        </div>
        <div className="flex flex-col gap-5 ">
          <p className="font-bold">Secondary Share Market</p>
          <p>After 12 months of active participation, Captains can also engage in buying and selling shares from other participating drivers. This feature allows for enhanced liquidity and the potential for Captains to acquire additional shares over time.</p>
          <img src="/images/unsplash_ELJM628U4Jk.png" alt="handshake"/>
        </div>
      </section>
      <section className="why-join-the-scheme">
        <div className="scheme-points">
          4
        </div>
        <div className="flex flex-col gap-5 ">
          <p className="font-bold">Exit Option</p>
          <p>After one year of participation, Captains have the option to exit the scheme at an agreed valuation. The Wynk Ride scheme will facilitate a buy-back, ensuring Captains can monetize their shares when desired.</p>
          <img src="/images/unsplash_ELJM628U4Jk.png" alt="handshake"/>
        </div>
      </section>
    </section>
    
    </>
  );
}

export default Main;

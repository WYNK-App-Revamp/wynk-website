import DownloadWynk from "../components/DownloadWynk"
import Footer from "../components/Footer"
import Header1 from "../components/Header1";

function ContactUs () {
  return (
    <>
    <section className="main-section bg-wynkPurple-100">
      <Header1/>
      <section className="section-inner-padding flex flex-col items-center gap-8">
        <h3 className="text-6xl font-bold"><span className="text-wynkPurple-200">Contact</span> Us</h3>
        <p className="px-8 w-3/5 text-center">We'd like to hear from you. Send us a message and we'll be pleased to answer any questions you have or treat any problems you're experiencing.</p>
      </section>
    </section>
    <section className="main-section bg-white flex flex-col gap-12 items-center">
      <div style={{marginTop: '-120px'}} className="form-card">
      <form className="bg-white flex flex-col gap-8 p-8 justify-center rounded-xl">
        <div className="flex flex-col gap-2">
        <label className="text-sm" for="name">Full name</label>
        <input placeholder="Enter your full name" style={{border: '1px solid #DDD'}} className="form-input-field" type="text" id="name" name="name" required></input>
        </div>
        <div className="flex flex-col gap-2">
        <label className="text-sm" for="email">Email address</label>
        <input placeholder="Email address" style={{border: '1px solid #DDD'}} className="form-input-field" type="email" id="email" name="email" required></input>
        </div>
        <div className="flex flex-col gap-2">
        <label className="text-sm" for="message">Your message</label>
        <textarea placeholder="Enter your message..." style={{border: '1px solid #DDD'}} className="form-input-field" id="message" name="message" rows="4" required></textarea>
        </div>
        <button className="send-message-button">Send Message</button>
      </form>
      </div>
      <div className="contact-card flex gap-6">
        <div>
          <div className="bg-black rounded-lg p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
            <path d="M3.66663 22.2274C3.66663 11.9766 11.8747 3.66663 21.9999 3.66663C32.125 3.66663 40.3331 11.9766 40.3331 22.2274L40.3332 31.8403C40.3337 33.3379 40.334 34.365 40.0708 35.2667C39.556 37.03 38.325 38.4885 36.6849 39.2783C35.8463 39.6822 34.8441 39.842 33.3828 40.0751L33.1445 40.1131C32.6249 40.1962 32.1808 40.2672 31.8123 40.3038C31.4291 40.3419 31.0381 40.3536 30.6382 40.2739C29.3226 40.0116 28.2376 39.073 27.7765 37.7982C27.6363 37.4108 27.5868 37.018 27.5642 36.6287C27.5425 36.2546 27.5425 35.7995 27.5425 35.267L27.5423 27.6175C27.5414 26.8375 27.5406 26.1663 27.7191 25.5914C28.1274 24.2763 29.1936 23.2787 30.5207 22.9701C31.1008 22.8352 31.7616 22.8889 32.5297 22.9512L32.7006 22.965L32.902 22.9811C34.3387 23.0954 35.3218 23.1736 36.1562 23.4861C36.7426 23.7057 37.2865 24.008 37.775 24.3789V22.2274C37.775 13.4069 30.7122 6.2565 21.9999 6.2565C13.2875 6.2565 6.22475 13.4069 6.22475 22.2274V24.3789C6.71318 24.008 7.25708 23.7057 7.84349 23.4861C8.67796 23.1736 9.66098 23.0954 11.0978 22.9811L11.2991 22.965L11.4701 22.9512C12.2381 22.8889 12.8989 22.8352 13.4791 22.9701C14.8062 23.2787 15.8723 24.2763 16.2807 25.5914C16.4592 26.1663 16.4583 26.8375 16.4574 27.6175L16.4573 35.2669C16.4573 35.7995 16.4573 36.2546 16.4355 36.6287C16.4129 37.018 16.3634 37.4108 16.2232 37.7982C15.7621 39.073 14.6772 40.0116 13.3615 40.2739C12.9616 40.3536 12.5707 40.3419 12.1874 40.3038C11.8189 40.2672 11.3749 40.1962 10.8552 40.1131L10.6169 40.0751C9.1556 39.842 8.15348 39.6822 7.31479 39.2783C5.67475 38.4885 4.44374 37.03 3.92894 35.2667C3.71186 34.5232 3.67403 33.6944 3.66773 32.5868L3.66663 32.2306V22.2274Z" fill="white"/>
          </svg>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-lg font-bold">Contact Us</p>
          <p className="text-sm"><span className="text-wynkGrey">Call:</span> 080-9000-0000</p>
          <p className="text-sm"><span className="text-wynkGrey">Email:</span> contact@wynk.ng</p>
          <p className="text-sm"><span className="text-wynkGrey">Address:</span> 365, Muritala Mohammed, Airport Road</p>
        </div>
      </div>
    </section>
    <section className="main-section section-inner-padding bg-white">
      <DownloadWynk/>
    </section>
    <Footer/>
    </>
  );
}
export default ContactUs
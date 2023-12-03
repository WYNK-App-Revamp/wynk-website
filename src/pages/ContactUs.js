import { ContactCard } from "../components/ContactCard";
import DownloadWynk from "../components/DownloadWynk"
import Footer from "../components/Footer"
import Header1 from "../components/Header1";
import Header1Mobile from "../components/Header1Mobile";

function ContactUs () {
  return (
    <>
    <section className="main-section bg-wynkPurple-100">
      <Header1/>
      <Header1Mobile/>
      <section className="section-inner-padding flex flex-col justify-center items-center gap-2 sm:gap-8">
        <h3 className="text-4xl sm:text-6xl font-bold"><span className="text-wynkPurple-200">Contact</span> Us</h3>
        <p className="px-2 sm:px-8 sm:w-3/5 text-center">We'd like to hear from you. Send us a message and we'll be pleased to answer any questions you have or treat any problems you're experiencing.</p>
      </section>
    </section>
    <section className="main-section bg-white flex flex-col gap-12 items-center">
      <div className="form-card">
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
      <ContactCard/>
    </section>
    <section className="main-section section-inner-padding bg-white">
      <DownloadWynk/>
    </section>
    <Footer/>
    </>
  );
}
export default ContactUs
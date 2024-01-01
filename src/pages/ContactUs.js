import axios from "axios";
import { ContactCard } from "../components/ContactCard";
import DownloadWynk from "../components/DownloadWynk"
import Footer from "../components/Footer"
import Header1 from "../components/Header1";
import Header1Mobile from "../components/Header1Mobile";
import { useState } from "react";

function ContactUs () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  async function sendEmail(e) {
    e.preventDefault();
    const emailData = {
        name,
        email,
        subject: 'Contact Us Message',
        message
      }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        },
      url: 'https://wynk.ng/stagging-api/send-contact-email',
      data: emailData
    }
    try {
      console.log(emailData)
      const resp = (await axios(options));
      console.log(resp)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
    <section className="main-section bg-wynkPurple-100">
      <Header1/>
      <Header1Mobile/>
      <section className="section-inner-padding flex flex-col justify-center items-center gap-2 sm:gap-8">
        <h3 className="text-[28px] sm:text-6xl font-bold"><span className="text-wynkPurple-200">Contact</span> Us</h3>
        <p className="text-[18px] px-2 sm:px-8 lg:w-3/5 text-center mb-[500px] sm:mb-2">We'd like to hear from you. Send us a message and we'll be pleased to answer any question you have or treat any problem you're experiencing.</p>
      </section>
    </section>
    <section className="main-section bg-white flex flex-col gap-12 items-center">
      <div className="form-card">
      <form className="bg-white flex flex-col gap-8 p-8 justify-center rounded-xl" onSubmit={sendEmail}>
        <div className="flex flex-col gap-2">
        <label className="text-sm" for="name">Full name</label>
        <input
         placeholder="Enter your full name" 
         style={{border: '1px solid #DDD'}} 
         className="form-input-field" type="text" id="name" name="name" required
         onChange={(e) => setName(e.target.value)}
         ></input>
        </div>
        <div className="flex flex-col gap-2">
        <label className="text-sm" for="email">Email address</label>
        <input
         placeholder="Email address" 
         style={{border: '1px solid #DDD'}} 
         className="form-input-field" type="email" id="email" name="email" required
         onChange={(e) => setEmail(e.target.value)}
         ></input>
        </div>
        <div className="flex flex-col gap-2">
        <label className="text-sm" for="message">Your message</label>
        <textarea
         placeholder="Enter your message..." 
         style={{border: '1px solid #DDD'}} className="form-input-field" id="message" name="message" rows="4" required
         onChange={(e) => setMessage(e.target.value)}
         ></textarea>
        </div>
        <button className="send-message-button" type="submit">Send Message</button>
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
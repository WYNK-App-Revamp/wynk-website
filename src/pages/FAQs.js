import { ContactCard } from "../components/ContactCard";
import DownloadWynk from "../components/DownloadWynk";
import FAQsComponent from "../components/FAQsCards";
import Footer from "../components/Footer";
import Header1 from "../components/Header1";

export function FAQs () {
  return (
    <>
      <section className="main-section bg-wynkPurple-100">
        <Header1/>
        <section className="section-inner-padding flex flex-col gap-8 mb-24 items-center justify-center bg-wynkPurple-100">
            <h2 className="text-[28px] sm:text-[52px] text-center font-bold"><span className="text-wynkPurple-200">Frequently</span> Asked Questions</h2>
            <p className="w-4/5 sm:w-1/2 text-[18px] text-center">Here are some answers to the frequently asked questions. If you can’t find an answer, contact us.</p>
            <div className="bg-white w-full sm:w-1/2 p-4 rounded-2xl">
              <p className="text-[18px] font-bold">Watch a video explainer from Wynk</p>
            </div>
        </section>
      </section>
      <section className="main-section flex flex-col items-center bg-white">
        <FAQsComponent/>
        <ContactCard/>
      </section>
      <section className="main-section section-inner-padding bg-white">
      <DownloadWynk/>
    </section>
    <Footer/>
    </>
  );
}
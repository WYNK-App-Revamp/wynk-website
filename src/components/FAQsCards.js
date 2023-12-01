import { useState } from "react";


export default function FAQsComponent () {
  const faqs = [
    {
      question: "How Can I Become a Captain?",
      answer:
        `Becoming a Wynk Captain is easy!

Simply sign up on the App to access the Profile Option on the Home Screen and click on 'More with Wynk'.  Proceed to select 'Become a Captain' and  input the necessary details. Click on 'Become a Captain' and start exploring the world with Wynk.
`,
    },
    {
      question: "Can I schedule rides in advance as a Patron?",
      answer:
        `Yes, you can.
        
To schedule rides, click the calendar icon on your rides home screen and proceed to input your departure date, time, and destination.
`,
    },
    {
      question: "I was debited for a failed transaction",
      answer:
        `If you were debited for a failed transaction, We've got you covered. 

If you don't get a reversal immediately, kindly reach out to our customer support team with details of the transaction, including the transaction ID, date, and amount. We'll investigate the issue promptly and ensure a resolution for you. Click <a href="/contact-us">here</a> to contact us directly.`,
    },
    {
      question: "How do I add funds to my wallet?",
      answer:
        "Sign up on the Wynk Super App and select 'Add Funds' from the home screen then proceed to select your preferred mode of funding your Wynk Vault either by deposit, request, or generated QR Code. ",
    },
    {
      question: "I have issues trying to Log into my App",
      answer:
        `We apologise for the glitch. 

If you're having trouble logging in, kindly double check your login credentials for possible mistakes. 

Perhaps that's not the case, proceed to ensure a stable internet connection, update your app version from the stores, and clear the App's cache. If the issue persists, contact our support team for assistance via this <a href="/contact-us">link</a>.`,
    },
    {
      question: "What Lifestyle services does Wynk offer?",
      answer:
        `Our lifestyle services cut across an ecommerce marketplace, hotel and flight bookings, seamless music and video streamings, social interaction, and more. Click <a href="/lifestyle">here</a> to explore.`,
    },
    {
      question: "Are the options to become a Merchant/Vendor open to everyone? How do I get onboarded?",
      answer:
        `Yes, becoming a Merchant on Wynk is open to everyone. Upload your items and have them sold out in a wink!

To become a Wynk Merchant, sign up on the Wynk App and select the Lifestyle option from the homescreen. Click on 'Marketplace' and tap on the banner showing 'Start Selling'. Proceed to complete KYC, then click on 'Create my Shop' to input the information required to set up your storefront on Wynk!
`,
    },
    {
      question: "I want to become a Wynk Partner",
      answer:
        `To become a Partner and own 2.5% shares on Wynk, join our Share Ownership Scheme open to Wynk Captains. Read up on the full benefits and package <a href="/share-ownership">here</a>`,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqsArray = faqs.map((faq, index) => (
        <div
          key={index}
          className="w-full bg-white rounded-lg shadow-md mb-4 p-4"
        >
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <p className="text-[16px] font-semibold">{faq.question}</p>
            <span className="p-2 text-2xl rounded-full h-5 sm:h-10 w-5 sm:w-10 flex items-center justify-center shadow-lg">
              {activeIndex === index ? "-" : "+"}
            </span>
          </div>
          {activeIndex === index && (
            <p className="mt-4 text-gray-600 whitespace-pre-wrap links-container" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
          )}
        </div>
      ));

  return (
    <div className="w-1/2 mx-auto mt-[-150px] bg-white p-4 rounded-2xl">
      {faqsArray}
    </div>
  );
};

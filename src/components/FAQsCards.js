import { useState } from "react";


export default function FAQsComponent () {
  const faqs = [
    {
      question: "How can i download the app?",
      answer:
        "You can get the app by visiting the Google Play Store or iOS store and downloading it using your mobile device. Kindly reach out to us if you’re experiencing any issues.",
    },
    {
      question: "How can i become a captain?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      question: "I was debited for a failed transaction",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      question: "Are the options for merchants and vendors",
      answer:
        "There are many variations of passages of Lorem Ipsum available.",
    },
    {
      question: "I want to become a Wynk Partner",
      answer:
        "The standard Lorem Ipsum passage, used since the 1500s, is reproduced for those interested.",
    },
    {
      question: "I have issues trying to login to my app",
      answer:
        "The standard Lorem Ipsum passage, used since the 1500s, is reproduced for those interested.",
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
            <p className="mt-4 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ));

  return (
    <div className="w-1/2 mx-auto mt-[-150px] bg-white p-4 rounded-2xl">
      {faqsArray}
    </div>
  );
};

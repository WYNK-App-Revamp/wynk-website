import { useEffect, useState } from "react";

const images = ["/images/payment-services-component.png", "/images/rides-services-component.png", "/images/lifestyle-services-component.png"];

function ServicesComponentsSwapper() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
      const intervalId = setInterval(() => {
          if(currentIndex === images.length - 1) {
              setCurrentIndex(0);
          } 
          else {
                setCurrentIndex(currentIndex => currentIndex + 1);
          }
      }, 3000)
      
      return () => clearInterval(intervalId);
  }, [currentIndex])

  return (
      <div>
          <img src={images[currentIndex]} alt="valuable-services-component"/>
      </div>
  )
}

export default ServicesComponentsSwapper
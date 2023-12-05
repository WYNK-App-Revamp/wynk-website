import { useEffect, useState } from "react";
import { LifestyleServiceComponent, PaymentsServiceComponent, RidesServiceComponent } from "./ServicesComponents";

const ServiceComponents = [
  <RidesServiceComponent />,
  <PaymentsServiceComponent />,
  <LifestyleServiceComponent />,
  
];

function ServicesComponentsSwapper() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === ServiceComponents.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((currentIndex) => currentIndex + 1);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div>
      {ServiceComponents[currentIndex]} {/* Render the current component */}
    </div>
  );
}

export default ServicesComponentsSwapper;

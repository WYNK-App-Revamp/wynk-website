import { useNavigate } from "react-router-dom";

export default function OurServicesDropdown () {
  const navigate = useNavigate();
  const navigateToPayments = () => {
    navigate('/payments');
  };
  const navigateToRides = () => {
    navigate('/rides');
  };
  const navigateToLifestyle = () => {
    navigate('/lifestyle');
  };
  return (
    <div className="navbar-dropdown-web">
      <div className="rides-services flex gap-2" onClick={navigateToRides}>
        <div className="service-icon">
          <img src="/images/rides-icon.svg" alt="service icon"/>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[18px]">Rides</p>
          <p className="text-[14px] text-black text-opacity-70 pr-4">Go anywhere you want to go. Plan rides and share rides with others</p>
        </div>
      </div>
      <div className="payment-services flex gap-2" onClick={navigateToPayments}>
        <div className="service-icon">
          <img src="/images/payments-icon.svg" alt="service icon"/>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[18px]">Payments</p>
          <p className="text-[14px] text-black text-opacity-70 pr-4">Receive and send money to friends and family. Pay bills and more</p>
        </div>
      </div>
      <div className="lifestyle-services flex gap-1 ml-1">
        <div className="service-icon">
          <img  src="/images/lifestyle-icon.svg" alt="service icon"/>
        </div>
        <div className="ml-1 flex flex-col gap-2" onClick={navigateToLifestyle}>
          <p className="text-[18px]">Lifestyle</p>
          <p className="text-[14px] text-black text-opacity-70 pr-4">Visit the marketplace. Get food, drinks, plane tickets, music, movies and more</p>
        </div>
      </div>
    </div>
  );
}
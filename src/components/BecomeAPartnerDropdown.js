import { useNavigate } from "react-router-dom";

export default function BecomeAPartnerDropdown () {
  const navigate = useNavigate();
  const navigateToShareOwnership = () => {
    navigate('/share-ownership');
  };
  const navigateToWynkForCaptains = () => {
    navigate('/rides');
  };
  const navigateToWynkForMerchants = () => {
    navigate('/wynk-for-merchants');
  };
  return (
    <div className="navbar-dropdown-web">
      <div className="captain-services flex gap-2" onClick={navigateToWynkForCaptains}>
        <div className="service-icon">
          <img className="min-w-full" src="/images/rides-icon.png" alt="service icon"/>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[18px]">Wynk for Captains</p>
          <p className="text-[14px] text-black text-opacity-70 pr-4">For car/vehicle owners looking to earn by riding on our platforms</p>
        </div>
      </div>
      <div className="rides-services flex gap-2" onClick={navigateToWynkForMerchants}>
        <div className="service-icon">
          <img className="min-w-full" src="/images/for-merchants-icon.png" alt="service icon"/>
        </div>
        <div className="ml-2 flex flex-col gap-2">
          <p className="text-[18px]">Wynk for Merchants</p>
          <p className="text-[14px] text-black text-opacity-70 pr-4">For merchants and vendors looking to sell on our marketplace, restaurants and bars</p>
        </div>
      </div>
      <div className="flex gap-2" onClick={navigateToShareOwnership}>
        <div >
          <img className="min-w-full" src="/images/captains-icon.png" alt="captains icon"/>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[18px]">Share Ownership for Captains</p>
          <p className="text-[14px] text-black text-opacity-70 pr-4">Ownership initiative which aims to reward high-performing Captains</p>
        </div>
      </div>
    </div>
  );
}
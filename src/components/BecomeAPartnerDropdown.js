export default function BecomeAPartnerDropdown () {
  return (
    <div className="navbar-dropdown-web">
      <div className="payment-services flex gap-2">
        <div className="service-icon">
          <img className="min-w-full" src="/images/rides-icon.png" alt="service icon"/>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[18px]">Wynk for Captains</p>
          <p className="text-[14px] text-black text-opacity-70 pr-4">For car/vehicle owners looking to earn by riding on our platforms</p>
        </div>
      </div>
      <div className="rides-services flex gap-2">
        <div className="service-icon">
          <img className="min-w-full" src="/images/rides-icon.png" alt="service icon"/>
        </div>
        <div className="ml-2 flex flex-col gap-2">
          <p className="text-[18px]">Wynk for Merchants</p>
          <p className="text-[14px] text-black text-opacity-70 pr-4">For merchants and vendors looking to sell on our marketplace, restaurants and bars</p>
        </div>
      </div>
      <div className="lifestyle-services flex gap-2">
        <div className="service-icon">
          <img className="min-w-full" src="/images/rides-icon.png" alt="service icon"/>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[18px]">Shared Ownership for Captains</p>
          <p className="text-[14px] text-black text-opacity-70 pr-4">Ownership initiative which aims to reward high-performing Captains</p>
        </div>
      </div>
    </div>
  );
}
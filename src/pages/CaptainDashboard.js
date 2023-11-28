import { useNavigate } from "react-router-dom";
import { EligibilityCriteria, EligibleNote, IneligibleNote } from "../components/EligibilityComponents";
import CaptainProgress from "../components/CaptainProgress";

export default function CaptainDashboard () {
  const navigate = useNavigate();
  const navigateToShareOwnership = () => {
    navigate('/share-ownership');
  };
  const isEligible = true;
  const schemeNumber = 12;
  const totalNumberOfCaptainsInTheSceme = 5000;
  const hasSatisfactoryAverageRating = true;
  const hasSatisfactoryRidesPerDay = true;
  const hasSatisfactoryConsistencyRatio = false;
  let progress = ((2/3) * 100).toFixed(1);
  progress = parseFloat(progress);
  const percentageLeft = 100 - progress;
  return (
    <main >
      <section className="captain-dashboard-main-section flex justify-between">
        <div className="flex items-end gap-3">
          <div className="bg-wynkPurple-200 rounded-full w-10 h-10 p-3 flex justify-center items-center text-white">JD</div>
          <div>
            <div>John Doe</div>
            <div className="text-footerBackground">@johndoe007</div>
          </div>
          <div className="">
            •
          </div>
          <div className="bg-orange-500 bg-opacity-10 text-orange-500 rounded-md flex gap-1 items-center justify-center py-2 px-3">
            <img src="/images/gold-star.png" alt="ranking"/>
            Gold
          </div>
        </div>
        <div className="text-captainDashboardRed cursor-pointer">
          Sign Out -&gt;
        </div>
      </section>
      <div className="captain-dashboard-main-section"><hr style={{borderTop: '1px solid #E9E9E9'}}></hr></div>
      <section className="captain-dashboard-main-section captain-dashboard-metrics flex justify-between">
        <div className="captain-dashboard-metrics-card">
          <div>
            <img src="/images/average-rating-icon.png" alt="service icon"/>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-gray-400">Average Rating</p>
            <p className="text-[18px] text-black text-opacity-70 pr-4 font-bold">4.5/5</p>
          </div>
        </div>
        <div className="captain-dashboard-metrics-card">
          <div>
            <img src="/images/rides-icon.png" alt="service icon"/>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-gray-400">Average Rides</p>
            <p className="text-[18px] text-black text-opacity-70 pr-4 font-bold">6 per day</p>
          </div>
        </div>
        <div className="captain-dashboard-metrics-card">
          <div>
            <img src="/images/calendar-icon.png" alt="service icon"/>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-gray-400">Consistency Ratio</p>
            <p className="text-[18px] text-black text-opacity-70 pr-4 font-bold">0.50</p>
          </div>
        </div>
      </section>
      <section className="captain-dashboard-main-section flex flex-col gap-2 ">
        {isEligible ? (<EligibleNote/>) : (<IneligibleNote/>)}
        <div className="flex flex-col gap-2 p-4 bg-[#DAE4FF80] bg-opacity-50">
          <div className="flex items-center gap-3">
            <img src="/images/purple-star.png" alt="eligiility status"/>
            <p className="text-[14px] font-medium">Benefits</p>
          </div>
          <div className="ml-8">
            <div className="flex items-center gap-2 font-medium">
              <p className="bullet-point">
              •
              </p>
              <p>
                Get collaterals for loan
              </p>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <p className="bullet-point">
              •
              </p>
              <p>
                Be part of the car ownership scheme
              </p>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <p className="bullet-point">
              •
              </p>
              <p>
                Access to secondary share market
              </p>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <p className="bullet-point">
              •
              </p>
              <p>
                Exit option at agreed valuation...<span 
                className="cursor-pointer text-[#6C7CFF] underline"
                onClick={navigateToShareOwnership}
                >Learn More</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="captain-dashboard-main-section flex justify-between">
        <section className="flex flex-col gap-8 sm:w-1/3">
          <p className="font-medium">Captain Details</p>
          <div className="captains-details flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="text-[14px] text-gray-400">First Name</p><p className="text-[14px]">John</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px] text-gray-400">Last Name</p><p className="text-[14px]">Doe</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px] text-gray-400">Vehicle Number</p><p className="text-[14px]">BDG1235FG</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px] text-gray-400">Vehicle Make</p><p className="text-[14px]">Toyota Camry</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px] text-gray-400">Vehicle Color</p><p className="text-[14px]">Black</p>
            </div>
            {isEligible ? (<div className="flex justify-between">
              <p className="text-[14px] text-gray-400">Scheme number</p><p className="text-[14px]">{schemeNumber} out of {totalNumberOfCaptainsInTheSceme}</p>
            </div>) : 
            (<div>
            </div>)}
          </div>
        </section>
        <div className="vertical-line"></div> {/* vertical line*/}
        <section className="flex flex-col gap-8 sm:w-1/3">
          <p className="font-medium">You are {percentageLeft}% away from being eligible</p>
          <CaptainProgress progress={progress}/>
          <EligibilityCriteria
          hasSatisfactoryAverageRating={hasSatisfactoryAverageRating}
          hasSatisfactoryRidesPerDay={hasSatisfactoryRidesPerDay}
          hasSatisfactoryConsistencyRatio={hasSatisfactoryConsistencyRatio}
          />
        </section>
      </section>
    </main>
  );
}
import { useNavigate } from "react-router-dom";
import { EligibilityCriteria, EligibleNote, IneligibleNote } from "../components/EligibilityComponents";
import CaptainProgress from "../components/CaptainProgress";
import ShareOwnershipProgressCircle from "../components/ShareOwnershipProgressCircle";

export default function CaptainDashboardModal() {
  const navigate = useNavigate();
  const navigateToShareOwnership = () => {
    navigate('/share-ownership');
  };
  const isEligible = false;
  const schemeNumber = 12;
  const totalNumberOfCaptainsInTheSceme = 5000;
  const hasSatisfactoryAverageRating = true;
  const hasSatisfactoryRidesPerDay = true;
  const hasSatisfactoryConsistencyRatio = false;

  let criteriaMetCount = 0;

  if (hasSatisfactoryAverageRating) {
    criteriaMetCount++;
  }

  if (hasSatisfactoryRidesPerDay) {
    criteriaMetCount++;
  }

  if (hasSatisfactoryConsistencyRatio) {
    criteriaMetCount++;
  }

  let progress = ((criteriaMetCount / 3) * 100).toFixed(1);
  progress = parseFloat(progress);
  const percentageLeft = 100 - progress;

  const totalCaptains = 5000;
  const shareOwnershipCaptains = 500;
  return (
    <div className="p-3 fixed inset-0 overflow-y-auto w-screen h-screem bg-[rgba(52,64,84,0.6)] backdrop-blur-[4px] top-0 left-0  z-10 grid place-items-center">
      <main className="bg-white w-[100%] md:w-[75%] rounded-[20px]" >
      <section className="captain-dashboard-main-section flex flex-col md:flex-row justify-between">
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
      <section className="captain-dashboard-main-section captain-dashboard-metrics flex flex-col gap-4 md:flex-row md:justify-between">
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
          <div className="ml-8 text-[14px]">
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
      <section className="captain-dashboard-main-section flex flex-col md:flex-row justify-between">
        <section className="flex flex-col gap-4 sm:w-2/5 mb-4">
          <p className="font-medium">Captain Details</p>
          <div className="captains-details flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="text-[14px] text-gray-400">First Name</p><p className="text-[14px] font-medium">John</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px] text-gray-400">Last Name</p><p className="text-[14px] font-medium">Doe</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px] text-gray-400">Vehicle Number</p><p className="text-[14px] font-medium">BDG1235FG</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px] text-gray-400">Vehicle Make</p><p className="text-[14px] font-medium">Toyota Camry</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px] text-gray-400">Vehicle Color</p><p className="text-[14px] font-medium">Black</p>
            </div>
            {isEligible ? (<div className="flex justify-between">
              <p className="text-[14px] text-gray-400">Scheme number</p><p className="text-[14px] font-medium">{schemeNumber} of {totalNumberOfCaptainsInTheSceme}</p>
            </div>) : 
            null}
          </div>
        </section>
        <div className="vertical-line"></div> {/* vertical line*/}
        <section className="flex flex-col gap-3 sm:w-2/5">
          <div className="flex gap-3 items-center">
            <ShareOwnershipProgressCircle
            totalCaptains={totalCaptains} 
            shareOwnershipCaptains={shareOwnershipCaptains}
            />
            <div>
              <p className="text-[14px] font-medium"><span className="text-wynkPurple-200">{shareOwnershipCaptains}</span> Captains are on the scheme</p>
              <p className="text-[12px] text-[#8D9091]">Check your eligibility below</p>
            </div>
          </div>
          {isEligible ? (
            <p className="font-medium text-[13px]">You are 100% eligible</p>
          ) : (
            <p className="font-medium text-[13px]">You are {percentageLeft}% away from being eligible</p>
          )}
          <CaptainProgress progress={progress}/>
          <EligibilityCriteria
          hasSatisfactoryAverageRating={hasSatisfactoryAverageRating}
          hasSatisfactoryRidesPerDay={hasSatisfactoryRidesPerDay}
          hasSatisfactoryConsistencyRatio={hasSatisfactoryConsistencyRatio}
          />
        </section>
      </section>
    </main>
    </div>
  );
}
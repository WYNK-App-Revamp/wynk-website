export function EligibleNote() {
  return (
    <div className="flex gap-3 p-2 items-center bg-[#DDFBDE] rounded-lg">
      <img src="/images/eligible-circle.png" alt="eligiility status" />
      <p className="text-[13px]">You are eligible. You’ve been added to the share ownership scheme</p>
    </div>
  )
}

export function IneligibleNote() {
  return (
    <div className="flex gap-3 p-2 items-center bg-[#FDE3E3] rounded-lg">
      <img src="/images/ineligible-circle.png" alt="eligiility status" />
      <p className="text-[13px]">You are not eligible. Perform more to meet the criteria for eligibility</p>
    </div>
  )
}

export function EligibilityCriteria(props) {
  const {
    hasSatisfactoryAverageRating
    // hasSatisfactoryRidesPerDay,
    // hasSatisfactoryConsistencyRatio
  } = props
  return (
    <div className="flex flex-col gap-2">
      <div className="satisfactory-average-rating flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
            fill={hasSatisfactoryAverageRating ? "#241CB7" : "#CCCCCC"}
          />
        </svg>
        <p className="text-[12px] text-[#1B2124]">Get an average rating of 4.5</p>
      </div>
      <div className="satisfactory-average-rides flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
            fill={hasSatisfactoryAverageRating ? "#241CB7" : "#CCCCCC"}
          />
        </svg>
        <p className="text-[12px] text-[#1B2124]">Get an average of 6 rides per day</p>
      </div>
      <div className="satisfactory-consistency-ratio flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
            fill={hasSatisfactoryAverageRating ? "#241CB7" : "#CCCCCC"}
          />
        </svg>
        <p className="text-[12px] text-[#1B2124]">Get a consistency ratio of 0.50</p>
      </div>
    </div>
  )
}

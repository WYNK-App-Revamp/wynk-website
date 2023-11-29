import React from 'react';

export default function ShareOwnershipProgressCircle(props) {
  const { totalCaptains, shareOwnershipCaptains } = props;
  const percentage = (shareOwnershipCaptains / totalCaptains) * 100;

  // Function to convert large numbers to abbreviated format
  const formatNumber = (number) => {
    if (number >= 1000) {
      return (number / 1000).toFixed(0) + 'k';
    }
    return number;
  };
  const formattedTotalCaptains = formatNumber(totalCaptains);
  const formattedshareOwnershipCaptains = formatNumber(shareOwnershipCaptains);

  return (
    <svg width="120" height="120" viewBox="0 0 120 120">
      <circle
        cx="60"
        cy="60"
        r="50"
        fill="none"
        stroke="#EAEAEA"
        strokeWidth="20"
      />
      <circle
        cx="60"
        cy="60"
        r="50"
        fill="none"
        stroke="#FBA43C"
        strokeWidth="20"
        strokeDasharray={`${percentage * 314 / 100}, 314`}
        strokeLinecap="round"
        transform="rotate(-90 60 60)"
      />
      <text className='font-medium' x="50%" y="50%" textAnchor="middle" fontSize="14" fill="#000">
        {`${formattedshareOwnershipCaptains}/${formattedTotalCaptains}`}
      </text>
    </svg>
  );
}

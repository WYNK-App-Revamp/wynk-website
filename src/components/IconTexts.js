export function IconTexts (props) {
  return (
    <div className="p-3 md:h-[25%] md:w-[25%] flex flex-col gap-2 bg-white rounded-2xl sm:rounded-lg">
      <div>
        <img src={`/images/${props.icon}`} alt="icon"/>
      </div>
      <div>
        <p className="text-[18px] font-medium">{props.header}</p>
        <p className="text-[16px] text-[#52525B]">{props.paragraph}</p>
      </div>
    </div>
  );
}

export function IconMetrics (props) {
  return (
    <div className="p-3 flex items-center gap-2">
      <div>
        <img src={`/images/${props.icon}`} alt="icon"/>
      </div>
      <div>
        <p className="text-[27px] font-medium">{props.header}</p>
        <p className="text-[17px] text-[#52525B]">{props.paragraph}</p>
      </div>
    </div>
  );
}
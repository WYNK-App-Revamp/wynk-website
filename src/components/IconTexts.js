export function IconTexts (props) {
  return (
    <div className="p-5  flex flex-col gap-2 rounded-2xl sm:rounded-lg" style={{backgroundColor: props.bgColor}}>
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
    <div className="p-3 flex sm:items-start gap-6">
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
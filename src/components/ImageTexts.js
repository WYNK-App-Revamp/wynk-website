export function ImageTexts (props) {
  return (
    <div className="p-3 flex flex-col items-center gap-6 rounded-lg">
      <div className="rounded-lg">
        <img src={`/images/${props.image}`} alt="representation"/>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-[18px] font-medium">{props.header}</p>
        <p className="w-[80%] text-[16px] text-[#52525B] text-center">{props.paragraph}</p>
      </div>
    </div>
  );
}
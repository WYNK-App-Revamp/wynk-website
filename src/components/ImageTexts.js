export function ImageTexts (props) {
  return (
    <div className="p-3 min-h-full flex flex-col items-center gap-6 rounded-lg">
      <div className="rounded-lg w-[350px] h-[332px]">
        <img 
        src={`/images/${props.image}`}
        alt="representation"
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-[18px] text-center font-medium">{props.header}</p>
        <p className="w-[70%] text-[16px] text-[#52525B] text-center">{props.paragraph}</p>
      </div>
    </div>
  );
}
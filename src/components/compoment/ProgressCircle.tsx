function ProgressCircle({ progress = 0, size = 34, strokeWidth = 3 }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className=" relative  w-fit rounded-full">
      <svg
        width={size}
        height={size}
        className="transform -rotate-90 origin-center"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="lightgray"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#9254FF"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-stroke-dashoffset duration-500 ease-linear "
        />
      </svg>
      <span className=" font-bold absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-[11px] text-primary-500">{progress}%</span>
    </div>
  );
}

export default ProgressCircle;

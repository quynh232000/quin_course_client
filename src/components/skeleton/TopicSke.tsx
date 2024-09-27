import { Typography } from "@material-tailwind/react";

function TopicSke() {
  return (
    <div className="flex flex-col w-full animate-pulse flex-wrap items-center gap-4 rounded-lg border pt-3">
      <div className="flex justify-center w-full">
        <div className="w-[124px] h-[125px] flex justify-end items-start bg-gray-300 rounded-full"></div>
      </div>
      <div className=" flex justify-center w-full flex-1 ">
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-3 w-50 rounded-xl bg-gray-300"
        >
          &nbsp;
        </Typography>
      </div>
    </div>
  );
}

export default TopicSke;

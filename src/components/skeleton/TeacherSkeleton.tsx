import { Typography } from "@material-tailwind/react";

function TeacherSkeleton() {
  return (
    <div className="flex flex-col animate-pulse flex-wrap items-center gap-4 rounded-lg border ">
      <div className="flex justify-center pt-4">
        <div className="w-[168px] rounded-full h-[168px] flex justify-center  bg-gray-300 "></div>
      </div>
      <div className=" flex flex-col items-center flex-1 pb-3 w-full">
        <Typography
          as="div"
          variant="h1"
          className="mb-4 h-5 w-50 rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
     

        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-40 rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-60 rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
       
      </div>
    </div>
  );
}

export default TeacherSkeleton;

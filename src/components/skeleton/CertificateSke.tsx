import { Typography } from "@material-tailwind/react";

function CertificateSke() {
  return (
    <div className="  animate-pulse flex-wrap items-center gap-4 rounded-lg py-8">
      <div className=" flex flex-col flex-1 pb-3 h-full pr-4">
        <Typography
          as="div"
          variant="h1"
          className="mb-4 h-5 w-56 rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <div className="flex gap-2 items-center mb-2">
          <div className="h-4 w-40 rounded-xl bg-gray-300"></div>
        </div>
        <div className="flex justify-between mb-3">
          <div className="h-4 w-40 bg-gray-300 rounded-xl"></div>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="w-[80%] h-[405px] flex justify-end items-start bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
}

export default CertificateSke;


import { Typography } from '@material-tailwind/react';
function NewsSke() {
  return (
    <div className="flex  animate-pulse flex-wrap items-center gap-4 rounded-lg border">
      <div className="w-40 h-[160px] flex justify-end items-start bg-gray-300 rounded-l-lg"></div>
      <div className=" flex flex-col flex-1 py-3 h-full pr-4">
        <Typography
          as="div"
          variant="h1"
          className="mb-4 h-5 w-56 rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        

        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-72 rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-72 rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-72 rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <Typography
          as="div"
          variant="paragraph"
          className="mb-2 h-2 w-72 rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <div className="flex-1 flex items-end  justify-end">
          <div className="h-6 bg-gray-300 w-30 rounded-lg"></div>
        </div>
      </div>
    </div>
  )
}

export default NewsSke
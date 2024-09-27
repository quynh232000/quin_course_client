import { Typography } from '@material-tailwind/react'

function CourseSkeleton() {
  return (
    <div className="flex flex-col animate-pulse flex-wrap items-center gap-4 rounded-lg border">
      <div className="w-full h-[245px] flex justify-end items-start bg-gray-300 rounded-t-lg">
        
      </div>
      <div className="w-max flex flex-col flex-1 pb-3">
        <Typography
          as="div"
          variant="h1"
          className="mb-4 h-5 w-56 rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
        <div className='flex gap-2 items-center mb-2'>
            <div className='w-[22px] h-[22px] rounded-full bg-gray-300'>

            </div>
            <div className='h-4 w-40 rounded-xl bg-gray-300'></div>
        </div>
        <div className='flex justify-between mb-3'>
            <div className='h-4 w-40 bg-gray-300 rounded-xl'>
            </div>
            <div className='h-4 w-20 bg-gray-300 rounded-xl'>

            </div>
        </div>
        
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
        <div className='flex-1 flex items-end  justify-end'>
            <div className='h-10 bg-gray-300 w-full rounded-lg'>

            </div>
        </div>
      </div>
    </div>
  )
}

export default CourseSkeleton
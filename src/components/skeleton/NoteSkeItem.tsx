
function NoteSkeItem() {
  return (
    <div className="animate-pulse p-4">
        <div className="flex justify-between items-center">
            <div >
                <div className="w-32 h-4 rounded-lg bg-gray-200"></div>
                <div className="w-52 h-6 rounded-lg bg-gray-200 mt-2"></div>
            </div>
            <div className="flex  gap-5">
                <div className="w-8 h-8 bg-gray-300 rounded-lg"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-lg"></div>
            </div>
        </div>
        <div className="mt-2 h-16 w-full bg-gray-300 rounded-lg">

        </div>
    </div>
  )
}

export default NoteSkeItem

import img from "../../assets/images/make_1.png"
function TopicHomeItem() {
  return (
    <div className='border rounded-lg p-3'>
        <div className='flex justify-center'>
            <div className='w-[124px] h-[124px]'>
                <img src={img} alt="" className='w-full h-full object-cover'/>
            </div>
        </div>
        <div className='text-center mt-2'>Marketing</div>
    </div>
  )
}

export default TopicHomeItem
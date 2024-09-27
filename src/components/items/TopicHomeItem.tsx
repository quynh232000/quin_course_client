
import { Link } from "react-router-dom"
import img from "../../assets/images/make_1.png"
import { MCategory } from "../../types/app"
type props={
  category:MCategory
}
function TopicHomeItem({category}:props) {
  return (
    <Link to={'collection/'+category.slug} className='border rounded-lg p-3'>
        <div className='flex justify-center'>
            <div className='w-[124px] h-[124px]'>
                <img src={category.icon_url && category.icon_url !=null ?category.icon_url :img} alt="" className='rounded-full w-full h-full object-cover'/>
            </div>
        </div>
        <div className='text-center mt-2'>{category.name ??'Cập nhật'}</div>
    </Link>
  )
}

export default TopicHomeItem
import { FaStar } from "react-icons/fa";
import { MReview } from "../../types/app";
import { Link } from "react-router-dom";
import { FormMartDateAgo } from "../functions/tool";

type props={
  review:MReview
}
function ReviewItem({review}:props) {
  return (
    <div className="py-3 border-b">
      <div className="flex gap-2 items-center">
        <div className="w-[64px] h-[64px] rounded-full">
          <img
            className="w-full h-full object-cover rounded-full border shadow-sm"
            src={review.user.avatar_url ??"https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"}
            alt={review.user.username}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Link to={'/user/@'+review.user.username} className="font-bold">{review.user.first_name+" "+review.user.last_name}</Link>
          <div className="flex items-center gap-6">
            <div className="flex gap-1 text-sm text-orange-500">
            {Array.from({ length: review.rating }, (_, index) => (
                <FaStar key={index} />

            ))}
            {Array.from({ length: (5-review.rating) }, (_, index) => (
                <FaStar className="text-gray-300" key={index} />

            ))}
            </div>
            <div className="text-sm text-gray-500">{FormMartDateAgo(review.updated_at)}</div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <div className=" text-primary-900">
         {review.content}
        </div>
        
      </div>
     
    </div>
  );
}

export default ReviewItem;

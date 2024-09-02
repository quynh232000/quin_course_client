
const NewsItem = () => {
  return (
    <div className="border rounded-2xl  overflow-hidden shadow-sm flex ">
      <div className="w-[200px] h-[160px] rounded-tl-2xl ">
        <img
          className="w-full h-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwUQnDtWpWnAyufSBIAb6yoi6APnRYkUIA5A&s"
          alt=""
        />
      </div>
      <div className="p-3 flex-1 flex flex-col">
        <div>
          <h4 className="font-bold line-clamp-3">
            Bảng tin mới nhất mỗi ngày, tin mới nhất lời chia sẻ từ ký sư IT về
            chuyên ngành CNTT tại việt Nam ngày nay.
          </h4>
          <div className="mt-2">
            Ngày tạo: <span className="text-gray-500 ">20/08/2024</span>
          </div>
        </div>
        <div className="flex-1 flex items-end justify-end">
            <button className="text-primary-500 border border-primary-500 py-1 px-4 rounded-lg hover:bg-primary-50">Xem thêm</button>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

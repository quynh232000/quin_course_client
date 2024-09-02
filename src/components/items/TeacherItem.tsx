function TeacherItem() {
  return (
    <div className="border rounded-lg p-3 flex flex-col items-center ">
      <div className="flex justify-center">
        <div className="w-[170px] h-[170px] rounded-full border">
          <img
            className=" object-cover w-full h-full rounded-full"
            src="https://cdn.pixabay.com/photo/2020/03/17/12/02/vietnam-4940070_1280.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="mt-1 font-bold ">Dr. Mr Quynh</div>
      <div className="text-center text-gray-500 text-sm mt-3">Tổng giám đốc Cty CP thương Hiệu và Quản trị Quin Group</div>
    </div>
  );
}

export default TeacherItem;

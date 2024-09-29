import { useEffect, useState } from "react";
import NoteItem from "../../components/items/NoteItem";
import { MNote, MStep } from "../../types/app";
import { SCreateNote, SGetNotes } from "../../services/CommonService";
import ToastMessage from "../../components/compoment/ToastMessage";
import NoteSkeItem from "../../components/skeleton/NoteSkeItem";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
type props = {
  step: MStep;
};
function LearningNote({ step }: props) {
  const [note, setNote] = useState("");
  const [message, setMessage] = useState("");
  const [createLoading, setCreateLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleCreateNote = () => {
    if (note == "") {
      setMessage("Vui lòng nhập nội dung ghi chú");
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2500);
      return;
    }
    setCreateLoading(true);
    SCreateNote(step.id, note).then((res) => {
      setShowToast(true);
      setCreateLoading(false);
      if (res.status) {
        setNotes([res.data, ...notes]);
        setMessage("Tạo ghi chú thành công");
        setNote("");
      }
      setTimeout(() => {
        setShowToast(false);
      }, 2500);
    });
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [notes, setNotes] = useState<MNote[]>([]);
  useEffect(() => {
    setLoading(true);
    SGetNotes(step.id,'?page='+currentPage).then((res) => {
      setLoading(false);
      if (res.status) {
        setNotes(res.data);
        setTotalPage(Math.ceil(res.meta.total / res.meta.per_page));
      }
    });
  }, [step.section_id,currentPage]);

  const [sType, setSType] = useState("section");
  const [sSort, setSSort] = useState("latest");
 

  const handleSortNote = (value: string, type: string) => {
    setLoading(true);
    if (type == "sort") {
      setSSort(value);
      SGetNotes(step.id, `?type=${sType}&sort=${value}`).then((res) => {
        setLoading(false);
        if (res.status) {
          setNotes(res.data);
          setTotalPage(Math.ceil(res.meta.total / res.meta.per_page));
        }
      });
    } else {
      setSType(value);
      SGetNotes(step.id, `?type=${value}&sort=${sSort}`).then((res) => {
        setLoading(false);
        if (res.status) {
          setNotes(res.data);
          setTotalPage(Math.ceil(res.meta.total / res.meta.per_page));
        }
      });
    }
  };
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPage) {
      setCurrentPage(page);
    }
  };
  return (
    <div>
      {showToast && <ToastMessage message={message} />}
      <div>
        <div className="font-bold mb-5">Thêm ghi chú của bạn</div>
        <div className="my-2">
          <div className="">
            <textarea
              name=""
              id=""
              placeholder="Ghi chú.."
              rows={3}
              className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:border-primary-500"
              onChange={(e) => setNote(e.target.value)}
              value={note}
            ></textarea>
          </div>
          <div className="flex justify-end my-2">
            {createLoading ? (
              <button className="bg-green-300 text-white py-2 px-5 rounded-full cursor-not-allowed">
                Tạo ghi chú
              </button>
            ) : (
              <button
                onClick={handleCreateNote}
                className="bg-green-500 text-white py-2 px-5 rounded-full"
              >
                Tạo ghi chú
              </button>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between py-5 border-t mt-4 border-b">
          <div className="font-bold text-orange-500">Ghi chú của tôi</div>
          <div className="flex gap-4">
            <select
              name=""
              id=""
              onChange={(e) => handleSortNote(e.target.value, "type")}
              className="border p-2 rounded-sm border-gray-400"
            >
              <option value="section">Trong chương hiện tại</option>
              <option value="course">Trong tất cả các chương</option>
            </select>
            <select
              name=""
              id=""
              onChange={(e) => handleSortNote(e.target.value, "sort")}
              className="border p-2 rounded-sm border-gray-400 w-fit"
            >
              <option value="latest">Mới nhất</option>
              <option value="oldest">Cũ nhất</option>
            </select>
          </div>
        </div>
        {loading ? (
          <div className="flex flex-col gap-2 py-3  max-h-[520px] overflow-y-scroll scrollbar_custom border-b">
            <NoteSkeItem />
            <NoteSkeItem />
          </div>
        ) : (
          <div>
          <div className="flex flex-col gap-2 py-3  max-h-[520px] overflow-y-scroll scrollbar_custom border-b">
            {notes && notes.length > 0 ? (
              notes.map((item) => {
                return <NoteItem key={item.id} note={item} />;
              })
            ) : (
              <div className="text-center text-gray-500">
                Chưa có ghi chú nào!
              </div>
            )}
          </div>
          {notes && notes.length > 20 && (
                <div className="pb-5 pt-8 px-4">
                  <div className="flex gap-1 justify-end">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={
                        (currentPage === 1
                          ? "bg-gray-400 text-gray-500 cursor-not-allowed  "
                          : "bg-primary-50 hover:bg-primary-500 hover:text-white text-primary-500 ") +
                        "w-[48px] h-[48px] rounded-full flex justify-center items-center  font-bold  "
                      }
                    >
                      <FaAnglesLeft />
                    </button>

                    {Array.from({ length: totalPage }, (_, index) => (
                      <div
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={
                          (currentPage === index + 1
                            ? "bg-primary-500 text-white "
                            : "bg-primary-50 text-primary-500 ") +
                          "w-[48px] h-[48px] cursor-pointer rounded-full flex justify-center items-center bg-primary-50 hover:bg-primary-500 hover:text-white  font-bold "
                        }
                      >
                        {index + 1}
                      </div>
                    ))}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPage}
                      className={
                        (currentPage === totalPage
                          ? "bg-gray-400 text-gray-500 cursor-not-allowed  "
                          : "bg-primary-50 hover:bg-primary-500 hover:text-white text-primary-500 ") +
                        "w-[48px] h-[48px] rounded-full flex justify-center items-center  font-bold  "
                      }
                    >
                      <FaAnglesRight />
                    </button>
                  </div>
                </div>
              )}
          </div>
        )}
      </div>
    </div>
  );
}

export default LearningNote;

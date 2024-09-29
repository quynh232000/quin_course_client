import { FaRegTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MNote } from "../../types/app";
import { FormatDate } from "../functions/tool";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SDeleteNote, SUpdateNote } from "../../services/CommonService";
type props = {
  note: MNote;
};
function NoteItem({ note }: props) {
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [noteEdit, setNoteEdit] = useState(note.note);
  const [textNote, setTextNote] = useState(note.note);
  const [loading, setLoading] = useState(false);
  const handleDelete = () => {
    SDeleteNote(note.id).then((res) => {
      if (res.status) {
        setIsDelete(true);
      }
    });
  };
  const handleEdit = () => {
    if (noteEdit != "" && textNote != noteEdit) {
      setLoading(true);
      SUpdateNote(note.id, noteEdit).then((res) => {
        setLoading(false);
        if (res.status) {
          setTextNote(noteEdit);
          setIsEdit(false);
        }
      });
    }
  };

  if (isDelete) {
    return <></>;
  }

  return (
    <div className="p-4 border-b border-dashed border-primary-200">
      <div className="flex items-center">
        <div className="flex-1 font-bold text-primary-500 flex flex-col ">
          <div className="text-gray-400 font-normal text-sm">
            {FormatDate(note.updated_at)}
          </div>
          <Link to={"?id=" + note.step.uuid} className="w-fit text-primary-700 hover:text-primary-500">
            {" "}
            {note.step.title}
          </Link>
        </div>
        <div className="flex items-center gap-3 text-md text-gray-500">
          {!isEdit && (
            <div
              onClick={() => setIsEdit(true)}
              className="cursor-pointer hover:text-gray-800 p-2"
            >
              <MdEdit />
            </div>
          )}
          <div
            onClick={handleDelete}
            className=" cursor-pointer hover:text-gray-800 p-2"
          >
            <FaRegTrashAlt />
          </div>
        </div>
      </div>
      {!isEdit && (
        <div className="p-4 mt-3 bg-gray-50 rounded-sm">{textNote}</div>
      )}
      {isEdit && (
        <div className="my-3">
          <textarea
            name=""
            id=""
            value={noteEdit}
            onChange={(e) => setNoteEdit(e.target.value)}
            className="w-full border p-3 bg-white  rounded-lg"
            rows={3}
          ></textarea>
          <div className="flex gap-4 justify-end mt-2">
            <button
              onClick={() => setIsEdit(false)}
              className="py-2 px-8 bg-orange-50 hover:bg-orange-100 rounded-full border border-orange-500 text-sm"
            >
              Hủy
            </button>
            {loading ? (
              <button className="py-2 px-5 bg-green-300 cursor-not-allowed  text-white rounded-full text-sm">
                Cập nhật
              </button>
            ) : (
              <button
                onClick={handleEdit}
                className="py-2 px-5 bg-green-500 hover:bg-green-600 text-white rounded-full text-sm"
              >
                Cập nhật
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default NoteItem;

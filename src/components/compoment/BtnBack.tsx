import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

function BtnBack() {
    const navigate = useNavigate();
    const handleBack=()=>{
      navigate(-1);
    }
  return (
    <div onClick={handleBack} className="flex items-center gap-2 text-gray-600 cursor-pointer">
            <IoIosArrowBack className="hover:scale-110"/>
            Quay lại
          </div>
  )
}

export default BtnBack
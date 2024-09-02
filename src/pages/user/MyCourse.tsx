import React from 'react'
import { IoIosSearch } from 'react-icons/io'
import ProductCollectItem from '../../components/items/ProductCollectItem'
import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6'

function MyCourse() {
  return (
    <div className=''>
        <div className="font-bold text-xl">Khóa học của bạn</div>

        <div className='bg-gray-50 p-4 rounded-lg my-4 flex gap-4 items-center' >
            <div className='flex gap-1 flex-1'>
                <div className=' shadow-sm bg-white px-6 py-1 border hover:bg-primary-50 cursor-pointer w-fit rounded-lg'>Tất cả</div>
                <div className=' hover:shadow-sm  px-6 py-1 border border-transparent hover:border-gray-100 hover:bg-primary-50 cursor-pointer w-fit rounded-lg'>Đã hoàn thành</div>
                <div className=' hover:shadow-sm  px-6 py-1 border border-transparent hover:border-gray-100 hover:bg-primary-50 cursor-pointer w-fit rounded-lg'>Chưa hoàn thành</div>
                <div className=' hover:shadow-sm  px-6 py-1 border border-transparent hover:border-gray-100 hover:bg-primary-50 cursor-pointer w-fit rounded-lg'>Chứng chỉ của bạn</div>
            </div>
            <div className='flex relative'>
                <input type="text" placeholder='Tìm kiếm..' className='border bg-white px-2 py-1 rounded-lg focus:border-primary-500 shadow-sm' />
                <div className=' absolute top-[50%] right-2 translate-y-[-50%] text-xl text-gray-500'><IoIosSearch /></div>
            </div>
        </div>

        <div>
        <div className="flex-1">
                <ProductCollectItem />
                <ProductCollectItem />
              </div>
              <div className="pb-5 pt-8 px-4">
                <div className="flex gap-1 justify-end">
                  <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-primary-50 font-bold cursor-pointer hover:bg-primary-500 hover:text-white text-primary-500">
                    <FaAnglesLeft />
                  </div>
                  <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-primary-500 font-bold text-white">
                    1
                  </div>
                  <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-primary-50 font-bold cursor-pointer hover:bg-primary-500 hover:text-white text-primary-500">
                    2
                  </div>
                  <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-primary-50 font-bold cursor-pointer hover:bg-primary-500 hover:text-white text-primary-500">
                    3
                  </div>
                  <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-primary-50 font-bold cursor-pointer hover:bg-primary-500 hover:text-white text-primary-500">
                    <FaAnglesRight />
                  </div>
                </div>
              </div>
        </div>
    </div>
  )
}

export default MyCourse
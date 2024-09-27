
import {
  Drawer,
  Button,
} from "@material-tailwind/react";
import i_danger from "../../assets/images/danger.avif";

type props={
    setOpenTop: (open: boolean) => void,
    openTop:boolean,
    time:string
}
function TimeModal({setOpenTop,openTop,time}:props) {
//   const [openTop, setOpenTop] = React.useState(true);

//   const openDrawerTop = () => setOpenTop(true);
  const closeDrawerTop = () => setOpenTop(false);

  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {/* <Button onClick={openDrawerTop}>Open Drawer Top</Button> */}
      </div>
      <Drawer
        placement="top"
        open={openTop}
        onClose={closeDrawerTop}
        className="p-4 bg-white"
      >
        <div className=" flex w-full flex-col">
          <div className="mt-5 w-50 mx-auto text-xl text-primary-600 font-bold">
            Cảnh báo!
          </div>
          <div className="max-w-50 m-auto flex justify-center">
            <img src={i_danger} className="w-[100px] object-cover " alt="" />
          </div>
          <div className="max-w-50 m-auto mt-2 text-red-500">
            Bạn đang học nhanh hơn bình thường, vui lòng không tua quá nhiều khi
            học!
          </div>
          <div className="max-w-50 m-auto mt-2 text-red-500 text-xs">
            Waiting in {time}
          </div>
          <div className="max-w-50 m-auto mt-5">
            <Button onClick={closeDrawerTop} size="sm" variant="outlined" className="px-16 rounded-full bg-primary-500 text-white border-none shadow-xl">
              Ok
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default TimeModal;

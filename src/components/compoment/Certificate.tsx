import { toPng } from "html-to-image";
import { useRef } from "react";
import img from "../../assets/logo/certificate_quincourse.png";
import { MCertificate } from "../../types/app";
import { FormatDate } from "../functions/tool";

type props={
  certificate:MCertificate
}
function Certificate({certificate}:props) {
  const divRef = useRef<HTMLDivElement>(null);
  
  const handleDownload = async () => {
    if (divRef.current === null) {
      return;
    }

    try {
      const dataUrl = await toPng(divRef.current);
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "CERTIFICATE_"+certificate.username.toLocaleUpperCase()+".png";
      link.click();
    } catch (err) {
      alert('Could not generate PNG')
      console.error("Could not generate PNG:", err);
    }
  };

  return (
    <div className=" max-w-[760px] w-full mt-8">
      <div className=" border-2 w-full  border-dashed border-primary-500 p-5 bg-[#e7eaf9]">
        <div ref={divRef} className="relative w-full">
          <div>
            <img src={img} alt="" />
          </div>
          <i className=" absolute top-[51%] left-[50%] translate-x-[-45%] text-5xl translate-y-[-40%] font-greatvibes text-primary-500">
            {certificate.fullname}
          </i>
          <div className=" absolute top-[70%] left-[50%] translate-x-[-45%] text-xl translate-y-[-40%]  text-primary-500">
            {certificate.title}
          </div>
          <div className=" absolute top-[81%] w-[160px]  text-center text-sm left-[34%] translate-x-[-45%]  translate-y-[-40%]  text-gray-500">
            HCM, {FormatDate(certificate.date)}
          </div>
          <div className=" absolute top-[81%] w-[160px]  text-center left-[64%] translate-x-[-45%] text-xl translate-y-[-40%] font-greatvibes  text-gray-500">
            Quin Course
          </div>
        </div>
      </div>

      <div className="flex justify-center my-8 mb-16">
        <button onClick={handleDownload} className="bg-primary-500 text-white py-2 px-8 rounded-full">Tải xuống - PNG</button>
      </div>
    </div>
  );
}

export default Certificate;

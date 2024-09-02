import i_error from "../assets/images/checkout_error.png";
function CheckoutError() {
  return (
    <div className="w-content m-auto mb-16">
      <div className="flex justify-center mt-12">
        <img src={i_error} alt="" />
      </div>
      <div className="text-red-500 font-bold text-2xl text-center pt-5 pb-3">
        Thanh toán thất bại
      </div>

      <div className="flex flex-col items-center">
        <div className="mt-3 text-sm">Hotline hỗ trợ</div>
        <div className="font-bold text-2xl text-primary-900">0358723520</div>
        <div className="mt-3 text-sm">Email hỗ trợ</div>
        <div className="font-bold text-2xl text-primary-900">
          quynh232000@gmail.com
        </div>
        <div className="mt-3 text-sm">Quét QR hỗ trợ</div>
        <div className="font-bold text-2xl text-primary-900">
          <img width={86} src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default CheckoutError;

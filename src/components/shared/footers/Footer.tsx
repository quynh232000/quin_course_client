import { FaLocationDot } from "react-icons/fa6";
import logo from "../../../assets/logo/logo-new.png";
import { FaFacebook, FaPhone, FaTiktok, FaYoutube } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
function Footer() {
  const {t} = useTranslation()
  return (
    <div className="w-full bg-gray-50">
      <div className="w-full px-5 xl:w-content m-auto">
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-5">
          <div>
            <div className="w-[158px]">
              <img src={logo} alt="" className="w-full h-full" />
            </div>
            <div className="mt-4 text-grey-900">
             {t('footer.col_1.t1')}
            </div>
            <div className="flex flex-col gap-3 mt-5">
              <div className="flex gap-2">
                <div className="text-primary-500">
                  <FaPhone />
                </div>
                <span>0358723520</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="text-primary-500">
                  <MdOutlineAttachEmail />
                </div>
                <span>quynh232000@gmail.com</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="text-primary-500">
                  <FaLocationDot />
                </div>
                <span>Quang Trung, Q.12, Tp.HCM</span>
              </div>
            </div>
          </div>
          <div>
            <div className="text-primary-500 uppercase text-lg font-bold pb-2">
              {t('footer.col_2.t1')}
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <div>{t('footer.col_2.t1')}</div>
              <div>{t('footer.col_2.t2')}</div>
              <div>{t('footer.col_2.t3')}</div>
              <div>{t('footer.col_2.t4')}</div>
              <div>{t('footer.col_2.t5')}</div>
              <div>{t('footer.col_2.t6')}</div>
             
            </div>
          </div>
          <div>
            <div className="text-primary-500 uppercase text-lg font-bold pb-2">{t('footer.col_3.t1')}</div>
            <div className="mt-5 flex flex-col gap-3">
              <div>{t('footer.col_3.t2')}</div>
              <div>{t('footer.col_3.t3')}</div>
              <div>{t('footer.col_3.t4')}</div>
              <div>{t('footer.col_3.t5')}</div>
              <div>{t('footer.col_3.t6')}</div>
              <div>{t('footer.col_3.t7')}</div>
             
            </div>
          </div>
          <div>
            <div className="text-primary-500 uppercase text-lg font-bold pb-2">
            {t('footer.col_4.t1')}
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <div>
              {t('footer.col_4.t2')}: <strong>345234332</strong>
              </div>
              <div>
              {t('footer.col_4.t3')}: <strong>02/09/2024</strong>
              </div>
              <div>
              {t('footer.col_4.t4')}
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 border-t">
          <div className="flex items-center">
            <div className="flex justify-center items-center gap-4 text-sm text-gray-400">
              Quin Course &copy; 2024. All rights reserved. 
            </div>
            <div className="flex-1 ">
              <div className="flex items-center justify-end gap-4 text-[24px]">
                <div className="text-red-500">
                  <FaYoutube />
                </div>
                <div className="text-blue-700">
                  <FaFacebook />
                </div>
                <div>
                  <FaTiktok />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

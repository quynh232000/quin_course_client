import { Link, useNavigate, useParams } from "react-router-dom";
import Certificate from "../../components/compoment/Certificate";
import { useEffect, useState } from "react";
import { SGetSertificate } from "../../services/CommonService";
import { MCertificate, MCourse } from "../../types/app";
import CertificateSke from "../../components/skeleton/CertificateSke";

function CompletedCourse() {
  const { slug } = useParams();
  const [course, setCourse] = useState<MCourse>();
  const [certificate, setCertificate] = useState<MCertificate>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    if (slug) {
      SGetSertificate(slug).then((res) => {
        setLoading(false);
        if (res.data) {
          if (res.data.type == "continue") {
            navigate("/learning/" + res.data.course.slug);
          } else {
            setCourse(res.data.course);
            setCertificate(res.data.certificate);
          }
        } else {
          navigate("/error");
        }
      });
    }
  }, [slug]);
  return (
    <div className="w-full px-5 xl:px-0 xl:w-content m-auto">
      {loading ? (
        <CertificateSke />
      ) : (
        <div className=" m-auto">
          <div className="font-bold text-3xl pt-8">Nhận chứng chỉ</div>
          <div className="mb-8 flex flex-col md:flex-row gap-2  md:items-center">
            Quin Course ghi nhận sự lỗ lực của bạn! Bằng cách nhận chứng chỉ
            này, bạn chính thức hoàn thành khóa học
            <Link
              to={"/learning/" + course?.slug}
              className="text-primary-500 font-bold"
            >
              {certificate?.title}
            </Link>
          </div>
          <div className="flex justify-center w-full ">
            {certificate && <Certificate certificate={certificate} />}
          </div>
        </div>
      )}
    </div>
  );
}

export default CompletedCourse;

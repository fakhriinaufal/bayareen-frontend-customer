import back from "../../assets/icon/back.png";
import notif from "../../assets/icon/notification.png";
import { useNavigate } from "react-router-dom";

export default function HeaderSecond() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between p-2 bg-light-green">
      <div className="inline-flex ml-3">
        <img
          className="cursor-pointer pb-1"
          src={back}
          alt="kembali"
          onClick={() => {
            navigate(-1);
          }}
        />
      </div>
      <div className="inline-flex mr-3">
        <img src={notif} alt="notifikasi" />
      </div>
    </div>
  );
}

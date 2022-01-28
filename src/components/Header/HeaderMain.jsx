import notif from "../../assets/icon/notification.png";
import { Link } from "react-router-dom";

export default function HeaderMain() {
  return (
    <div className="flex justify-between p-2 bg-light-green">
      <Link to="/">
        <div className="inline-flex ml-3 font-title text-white">Bayareen</div>
      </Link>
      <div className="inline-flex mr-3">
        <img src={notif} alt="notifikasi" />
      </div>
    </div>
  );
}

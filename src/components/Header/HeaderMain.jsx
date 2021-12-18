import notif from "../../assets/icon/notification.png";

export default function HeaderMain() {
  return (
    <div className="flex justify-between p-2 bg-light-green">
      <div className="inline-flex ml-3 font-title text-white">Bayareen</div>
      <div className="inline-flex mr-3">
        <img src={notif} alt="notifikasi" />
      </div>
    </div>
  );
}

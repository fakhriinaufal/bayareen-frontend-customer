import Icon from "../../components/Icon/Icon";
import { useNavigate } from "react-router-dom";

export default function History(props) {
  const navigate = useNavigate();
  const {
    name,
    created_at,
    status,
    price,
    category,
    payment_method_id,
    invoice_url,
  } = props.data;

  let color;
  if (status === "PENDING") {
    color = "font-semibold text-blue-500";
  } else if (status === "EXPIRED") {
    color = "font-semibold text-red-500";
  } else {
    color = "font-semibold text-dark-green";
  }

  const displayPrice = price.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return (
    <button
      onClick={() =>
        navigate("/transaction-detail", {
          state: {
            name,
            created_at,
            status,
            displayPrice,
            category,
            payment_method_id,
            invoice_url,
          },
        })
      }
      className="flex bg-light-gray text-gray-700 text-sm rounded-lg px-4 py-2 w-[23rem] items-center text-left"
    >
      <div className="flex-none w-12">
        <Icon category={category} />
      </div>
      <div className="grow pr-3">
        <div className="font-semibold">{name}</div>
        <div className="font-light text-gray-600">{created_at}</div>
        <div className={color}>{status}</div>
      </div>
      <div className="font-semibold flex-non">{displayPrice}</div>
    </button>
  );
}

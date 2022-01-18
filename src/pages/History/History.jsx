import Icon from "../../components/Icon/Icon";
import { useNavigate } from "react-router-dom";

export default function History(props) {
  const navigate = useNavigate();
  const { name, created_at, status, price, category, payment_method_id } =
    props.data;
  return (
    <button
      onClick={() =>
        navigate("/transaction-detail", {
          state: {
            name,
            created_at,
            status,
            price,
            category,
            payment_method_id,
          },
        })
      }
      className="flex bg-light-gray text-dark-green text-sm rounded-lg px-4 py-2 w-[23rem] items-center text-left"
    >
      <div className="flex-none w-12">
        <Icon category={category} />
      </div>
      <div className="grow pr-3">
        <div className="font-semibold">{name}</div>
        <div className="">{created_at}</div>
        <div className="font-semibold">{status}</div>
      </div>
      <div className="font-semibold flex-non">Rp.{price}</div>
    </button>
  );
}

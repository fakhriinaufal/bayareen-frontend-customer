import Icon from "../../components/Icon/Icon";
import { useNavigate } from "react-router-dom";

export default function Category(props) {
  const navigate = useNavigate();
  const name = props.data.text;
  let route;
  if (name == "Pulsa") {
    route = "/checkout-pulsa";
  } else if (name == "Paket") {
    route = "/checkout-paket";
  } else if (name == "PDAM") {
    route = "/checkout-PDAM";
  } else if (name == "Listrik") {
    route = "/checkout-listrik";
  }
  return (
    <div className="flex flex-col items-center text-dark-green text-sm py-2 basis-1/4">
      <div>
        <button
          onClick={() => navigate(route)}
          className="flex flex-col items-center"
        >
          <Icon category={name} />
          <div>{name}</div>
        </button>
      </div>
    </div>
  );
}

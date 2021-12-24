import Icon from "../../components/Icon/Icon";
import { Link } from "react-router-dom";

export default function Category(props) {
  const { name } = props.data;
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
        <Link to={route} className="flex flex-col items-center">
          <Icon category={name} />
          <div>{name}</div>
        </Link>
      </div>
    </div>
  );
}

import pulsa from "../../assets/icon/pulsa.svg";
import paket from "../../assets/icon/paket.svg";
import air from "../../assets/icon/air.svg";
import listrik from "../../assets/icon/listrik.svg";

export default function Icon(props) {
  const handleIcon = () => {
    if (props.category === "Pulsa") {
      return pulsa;
    } else if (props.category === "Paket") {
      return paket;
    } else if (props.category === "PDAM") {
      return air;
    } else if (props.category === "Listrik") {
      return listrik;
    }
  };
  const icon = handleIcon();
  return <img src={icon} alt="icon" />;
}

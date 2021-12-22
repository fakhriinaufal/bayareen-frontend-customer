import Icon from "../../components/Icon/Icon";

export default function History(props) {
  const { name, created_at, status, price, category } = props.data;
  return (
    <div className="flex bg-light-gray text-dark-green text-sm rounded-lg px-4 py-2 w-[23rem] items-center">
      <div className="flex-none w-12">
        <Icon category={category} />
      </div>
      <div className="grow pr-3">
        <div className="font-semibold">{name}</div>
        <div className="">{created_at}</div>
        <div className="font-semibold">{status}</div>
      </div>
      <div className="font-semibold flex-non">Rp.{price}</div>
    </div>
  );
}

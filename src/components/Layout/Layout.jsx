export default function Layout(props) {
  return (
    <div className="relative">
      <div className="box-border h-screen w-96 mx-auto bg-white">
        <div className="fixed top-0 w-96">{props.head}</div>
        <div>{props.children}</div>
        <div>{props.nav}</div>
      </div>
    </div>
  );
}

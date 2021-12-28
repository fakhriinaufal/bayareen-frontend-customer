export default function Layout(props) {
  return (
    <div className="relative">
      <div className="box-border min-h-screen w-96 mx-auto bg-white">
        <div className="fixed top-0 w-96">{props.head}</div>
        <div className="font-main px-3">{props.children}</div>
        <div className="fixed bottom-0 w-96">{props.nav}</div>
      </div>
    </div>
  );
}

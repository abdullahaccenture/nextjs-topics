import "./styles.css";

export default function Layout(props: {
  modalha: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      {props.modalha}
      {props.children}
    </>
  );
}

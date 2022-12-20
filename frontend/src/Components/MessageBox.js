import Alert from "react-bootstrap/Alert";

export default function MessageBox(props) {
  return <Alert variant={props.variant || "info"}>{props.children}</Alert>;
}

//if the variant exists set value that user entered in the props,itherwise use info as a deffault value
//and render the content inside the children alert
